/**
 * 游陕西小程序 - 网络请求统一封装 (HTTP Request Client)
 * 逆向还原自: common/vendor.js (getRequest / dataRequest)
 */

const BASE_URL = "https://eshopapi.zhiyousx.com/";
const pendingRequests = {};

/**
 * 获取请求基础配置与请求头
 */
function getHeaders() {
  const token = typeof uni !== "undefined" ? uni.getStorageSync("token") : "";
  const sourceHeader = typeof uni !== "undefined" ? uni.getStorageSync("source_header") : "";
  const channelHeader = typeof uni !== "undefined" ? uni.getStorageSync("channel_header") : "";
  const shareMemberId = typeof uni !== "undefined" ? uni.getStorageSync("shareMemberId_header") : "";

  return {
    Authorization: token ? "bearer " + token : "",
    version: "1.0.5",
    product: "Wxmp",
    "source-code": sourceHeader || "",
    "source-channel-code": channelHeader || "",
    "share-member-id": shareMemberId || ""
  };
}

/**
 * 核心请求函数
 * @param {string} method HTTP 方法 (GET, POST, PUT, DELETE)
 * @param {string} url 相对路径或绝对 URL
 * @param {object} data 请求参数
 * @param {string|boolean} loadingTitle 加载文案 (为 false 或空时不显示 loading)
 * @param {string} baseUrl 可选自定义域名
 * @param {number} retryCount 重试次数
 */
export function request(method, url, data = {}, loadingTitle = "", baseUrl = "", retryCount = 0) {
  const finalBaseUrl = baseUrl || (typeof getApp === "function" && getApp()?.globalData?.requestUrl) || BASE_URL;
  const fullUrl = url.startsWith("http") ? url : finalBaseUrl + url.replace(/^\//, "");

  if (loadingTitle && typeof uni !== "undefined") {
    uni.showLoading({
      title: typeof loadingTitle === "string" ? loadingTitle : "加载中...",
      mask: true
    });
  }

  return new Promise((resolve, reject) => {
    if (typeof uni === "undefined" || !uni.request) {
      return reject(new Error("uni.request is not available in current environment"));
    }

    const task = uni.request({
      url: fullUrl,
      method: method.toUpperCase(),
      data: data,
      header: getHeaders(),
      success(res) {
        if (loadingTitle) {
          uni.hideLoading();
        }

        const statusCode = res.statusCode;
        const resData = res.data || {};

        // 200 或 429 正常返回处理
        if (statusCode === 200 || statusCode === 429) {
          // 登录态失效处理
          if (resData.code === 101 || resData.code === 10006) {
            uni.removeStorageSync("token");
            uni.navigateTo({
              url: "/pages/wxLogin/wxLogin"
            });
            return reject(resData);
          }

          // 业务并发/限流重试
          if (resData.msg && (resData.msg.includes("火爆") || resData.msg.includes("频繁")) && retryCount < 5) {
            setTimeout(() => {
              request(method, url, data, loadingTitle, baseUrl, retryCount + 1)
                .then(resolve)
                .catch(reject);
            }, 3000);
            return;
          }

          resolve(resData);
        } else if (statusCode === 401) {
          uni.removeStorageSync("token");
          uni.navigateTo({
            url: "/pages/wxLogin/wxLogin"
          });
          reject(resData);
        } else {
          // 其他异常状态码
          if (retryCount < 2) {
            setTimeout(() => {
              request(method, url, data, loadingTitle, baseUrl, retryCount + 1)
                .then(resolve)
                .catch(reject);
            }, 2000);
          } else {
            reject(res);
          }
        }
      },
      fail(err) {
        if (loadingTitle) {
          uni.hideLoading();
        }
        if (!err.errMsg?.includes("abort")) {
          uni.showToast({
            title: "网络走丢了，请稍后重试",
            icon: "none"
          });
        }
        reject(err);
      }
    });

    pendingRequests[url] = task;
  });
}

/**
 * 兼容原小程序 $uniApi 命名的快捷方法
 */
export const uniApi = {
  getRequest(method, url, data, loading, baseUrl) {
    return request(method, url, data, loading || "加载中...", baseUrl);
  },
  getRequestNoLoading(method, url, data, baseUrl) {
    return request(method, url, data, false, baseUrl);
  },
  getRequestYesLoading(method, url, loading, baseUrl) {
    return request(method, url, "", loading || "加载中...", baseUrl);
  },
  dataRequest(method, url, data, loading, baseUrl) {
    return request(method, url, data, loading, baseUrl);
  },
  dataRequestYesLoading(method, url, data, loading, baseUrl) {
    return request(method, url, data, loading || "加载中...", baseUrl);
  },
  dataRequestNoLoading(method, url, data, baseUrl) {
    return request(method, url, data, false, baseUrl);
  },
  get(url, data, loading = false) {
    return request("GET", url, data, loading);
  },
  post(url, data, loading = false) {
    return request("POST", url, data, loading);
  }
};

export default uniApi;
