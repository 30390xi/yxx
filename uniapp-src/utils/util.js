/**
 * 游陕西小程序 - 通用工具函数模块 (Utility Methods)
 * 挂载至 Vue.prototype.$util
 * 逆向还原自: common/vendor.js (util)
 */

import uniApi from "./request.js";

export const util = {
  /**
   * 页面跳转封装
   */
  navigateTo(options) {
    if (typeof options === "string") {
      options = { url: options };
    }
    return uni.navigateTo(options);
  },

  /**
   * 判断是否已登录
   */
  isLogin() {
    const token = uni.getStorageSync("token");
    if (!token) {
      uni.navigateTo({
        url: "/pages/wxLogin/wxLogin"
      });
      return false;
    }
    return true;
  },

  /**
   * Toast 提示
   */
  showToast(title, icon = "none", duration = 2000) {
    uni.showToast({
      title: title || "",
      icon: icon,
      duration: duration
    });
  },

  /**
   * 显示 Loading Toast
   */
  showLoadingToast(title, mask = true) {
    uni.showLoading({
      title: title || "",
      mask: mask
    });
  },

  /**
   * 显示成功 Toast
   */
  showSuccessToast(title, callback) {
    uni.showToast({
      title: title || "",
      icon: "success",
      duration: 2000,
      success(res) {
        callback && callback(res);
      }
    });
  },

  /**
   * 返回上一页
   */
  goBack() {
    uni.navigateBack({
      delta: 1
    });
  },

  /**
   * 返回上一页并刷新
   */
  prevPage() {
    const pages = getCurrentPages();
    const prev = pages[pages.length - 2];
    uni.navigateBack({
      success() {
        if (prev) {
          if (prev.hasOwnProperty("page")) {
            prev.$vm.page = 1;
          }
          if (prev.$vm && typeof prev.$vm.pageLoad === "function") {
            prev.$vm.pageLoad();
          }
        }
      }
    });
  },

  /**
   * 倒计时计算
   */
  countDown(timeStr) {
    if (!timeStr) return { hour: "00", minute: "00", second: "00" };
    const now = new Date();
    const diff = new Date(timeStr.replace(/-/g, "/")).getTime() - now.getTime();
    const totalSec = parseInt(diff / 1000);
    if (totalSec <= 0) return { hour: "00", minute: "00", second: "00" };
    let h = Math.floor(totalSec / 3600);
    let m = Math.floor((totalSec - 3600 * h) / 60);
    let s = Math.floor(totalSec - 3600 * h - 60 * m);
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    return {
      hour: String(h),
      minute: String(m),
      second: String(s)
    };
  },

  /**
   * rpx 转 px
   */
  rpxToPx(rpx) {
    if (typeof uni !== "undefined" && uni.upx2px) {
      return uni.upx2px(rpx);
    }
    const screenWidth = uni.getSystemInfoSync().windowWidth;
    return (rpx * screenWidth) / 750;
  },

  /**
   * px 转 rpx
   */
  pxToRpx(px) {
    if (typeof uni !== "undefined" && uni.upx2px) {
      const scale = uni.upx2px(100) / 100;
      return scale ? px / scale : px;
    }
    const screenWidth = uni.getSystemInfoSync().windowWidth;
    return (px * 750) / screenWidth;
  },

  /**
   * 获取系统配置参数
   */
  getSysConfigure() {
    const defaultData = {
      GRAY_THEME_FLAG: { paramValue: "" },
      WX_VERSION: { paramValue: "" },
      HOME_PANDA_IS_SHOW: { paramValue: "0" },
      XIAOQI_VERSION: { paramValue: "0" }
    };
    const keyList = ["GRAY_THEME_FLAG", "WX_VERSION", "HOME_PANDA_IS_SHOW", "XIAOQI_VERSION"];
    return new Promise(resolve => {
      uniApi.dataRequestNoLoading("post", "base/app/v1/sysParam/getSysParamForApp", {
        keyList: keyList
      }).then(res => {
        if (res && res.code === 1 && res.data) {
          resolve(Object.assign({}, defaultData, res.data));
        } else {
          resolve(defaultData);
        }
      }).catch(() => {
        resolve(defaultData);
      });
    });
  },

  /**
   * 校验微信版本
   */
  getWxVersion() {
    return new Promise(resolve => {
      uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/WX_VERSION").then(res => {
        const currentVersion = (typeof getApp === "function" && getApp()?.globalData?.version) || "";
        if (res && res.data && res.data.paramValue === currentVersion) {
          resolve(false);
        } else {
          resolve(true);
        }
      }).catch(() => {
        resolve(true);
      });
    });
  },

  /**
   * 深拷贝
   */
  deepCopy(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copy[key] = typeof obj[key] === "object" && obj[key] ? this.deepCopy(obj[key]) : obj[key];
      }
    }
    return copy;
  },

  /**
   * 业务综合跳转调度
   */
  jumpAll(item = {}) {
    console.log("jumpAll:", item);
    switch (item.jumpType) {
      case 2:
        if (!item.externalLinkUrl) return;
        this.navigateTo({
          url: `/subPage/pages/webpage/webpage?urlEncode=${encodeURIComponent(item.externalLinkUrl)}`
        });
        break;
      case 1:
        switch (item.interalLinkType) {
          case 1:
            this.navigateTo({
              url: `/subPage/pages/goods_details/goods_details?itemId=${item.interalLinkId}`
            });
            break;
          case 2:
            this.cityJump(item.type, item.interalLinkId);
            break;
          case 3:
            this.navigateTo({
              url: `/subPack/pages/city/city?cityId=${item.interalLinkId}`
            });
            break;
          case 4:
            this.navigateTo({
              url: `/pages/spotDetailNew/spotDetailNew?spotId=${item.interalLinkId}`
            });
            break;
        }
        break;
      case 3:
        if (item.appId === "wxf2cca76ae0520e33" || !item.appId) {
          return this.navigateTo({ url: item.wechatUrl });
        }
        if (uni.openEmbeddedMiniProgram) {
          uni.openEmbeddedMiniProgram({
            appId: item.appId,
            path: item.wechatUrl
          });
        } else {
          uni.navigateToMiniProgram({
            appId: item.appId,
            path: item.wechatUrl
          });
        }
        break;
      case 4:
        uni.setStorageSync("richtext", item.richText);
        this.navigateTo({
          url: "/pages/richtext/richtext"
        });
        break;
      default:
        if (item.url) {
          this.navigateTo({ url: item.url });
        }
        break;
    }
  },

  /**
   * 城市与业务跳转逻辑
   */
  cityJump(contentType, originId, item = {}) {
    switch (Number(contentType)) {
      case 1: // 景区
        uni.navigateTo({
          url: `/pages/spotDetailNew/spotDetailNew?scenicId=${originId}`
        });
        break;
      case 2: // 线路
        uni.navigateTo({
          url: `/subPack/pages/lineProductDetails/lineProductDetails?productId=${originId}`
        });
        break;
      case 3: // 门票
        uni.navigateTo({
          url: `/subPage/pages/ticket_detail/ticket_detail?itemId=${originId}`
        });
        break;
      case 10: // 攻略
        uni.navigateTo({
          url: `/subPage/pages/strategy/strategy?id=${originId}`
        });
        break;
      default:
        if (item.url) {
          uni.navigateTo({ url: item.url });
        }
        break;
    }
  },

  /**
   * 浮点精确计算
   */
  add(a, b) {
    return Number(a) + Number(b);
  },
  subtract(a, b) {
    return Number(a) - Number(b);
  },
  multiply(a, b) {
    return Number(a) * Number(b);
  },

  /**
   * 分销分享链接处理
   */
  setShareUrl(url) {
    let shareUrl = url;
    const userInfor = uni.getStorageSync("userInfor") || "";
    if (userInfor && userInfor.isFenxiao) {
      shareUrl = url.indexOf("?") > 0 ? `${url}&shareMemberId=${userInfor.memberId}` : `${url}?shareMemberId=${userInfor.memberId}`;
    }
    return shareUrl;
  },

  setShareTimeline(url) {
    let shareUrl = url;
    const userInfor = uni.getStorageSync("userInfor") || "";
    if (userInfor && userInfor.isFenxiao) {
      shareUrl = url ? `${url}&shareMemberId=${userInfor.memberId}` : `shareMemberId=${userInfor.memberId}`;
    }
    return shareUrl;
  },

  /**
   * 解析 URL 查询参数
   */
  getUrlParams(url) {
    const reg = /(\w+)=([^&]+)/g;
    const params = {};
    let match;
    while ((match = reg.exec(url)) !== null) {
      params[match[1]] = match[2];
    }
    return params;
  },

  /**
   * 表单验证
   */
  checkName(name) {
    if (!name) return { code: false, msg: "请输入姓名" };
    return /^([\u4e00-\u9fa5]{2,20}|([a-zA-Z/]+\s?){2,30})$/.test(name)
      ? { code: true, msg: "" }
      : { code: false, msg: "姓名最少为2个字符并且只能同时有中文或者英文字符" };
  },

  checkPhone(phone) {
    if (!phone) return { code: false, msg: "请输入手机号" };
    return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(String(phone))
      ? { code: true, msg: "" }
      : { code: false, msg: "手机号格式有误" };
  },

  checkId(id, type = 0) {
    if (!id) return { code: false, msg: "请输入证件号码" };
    if (type === 0) {
      return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/i.test(id)
        ? { code: true, msg: "" }
        : { code: false, msg: "证件号格式有误" };
    }
    return /^[A-Za-z0-9]+$/.test(id) && id.length >= 7 && id.length <= 13
      ? { code: true, msg: "" }
      : { code: false, msg: "证件号格式有误" };
  }
};

export default util;
