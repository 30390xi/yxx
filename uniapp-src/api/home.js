/**
 * 首页与公共基础接口 (Home & Base API)
 */
import request from "@/utils/request.js";

export default {
  // 获取微信登录 SessionKey 与 openid
  getSessionKey(code) {
    return request.get(`manager/app/v1/wxPopular/getSessionKeyPro/${code}`);
  },

  // 获取广告与轮播图列表
  getAdvertList(params = {}) {
    return request.get("manager/app/v1/advert/getAdvertList", params);
  },

  // 获取首页导航配置
  getHomeNav() {
    return request.get("manager/app/v1/advert/getHomeNavigation");
  },

  // 首页瀑布流与推荐内容
  getRecommendList(params) {
    return request.post("product/app/v1/recommend/list", params);
  },

  // 搜索热词与关键词列表
  getSearchHotKeys() {
    return request.get("base/app/v1/search/getHotKeyList");
  }
};
