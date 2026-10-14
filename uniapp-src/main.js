import Vue from "vue";
import App from "./App.vue";
import uniApi from "./utils/request.js";
import util from "./utils/util.js";
import { eventAnalyse } from "./utils/crypto.js";
import store from "./store";

Vue.config.productionTip = false;

// uView 实用工具
const $u = {
  random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  },
  guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return "u" + uuid.join("");
    }
    return uuid.join("");
  },
  toast(title, duration = 2000) {
    uni.showToast({
      title: title || "",
      icon: "none",
      duration: duration
    });
  },
  deepClone(obj) {
    if (typeof obj !== "object" || obj === null) return obj;
    try {
      return JSON.parse(JSON.stringify(obj));
    } catch (e) {
      return obj;
    }
  },
  trim(str) {
    return str ? String(str).trim() : "";
  }
};

// 全局 i18n $t 映射
const i18nMap = {
  "smartEscort.header.title": "智能伴游",
  "smartEscort.header.Introduction": "你好，我是",
  "featureIntroduction.loading.loading": "加载中...",
  "collectionList.navbar.title": "我的收藏",
  "allData.noMore": "没有更多了",
  "allData.stayTuned": "敬请期待",
  "allData.staytuned": "敬请期待",
  "allData.lostNetwork": "网络连接失败，请重试",
  "allData.answerTerminated": "回答已中断",
  "chatItem.pleaseWait": "正在回答中，请稍候",
  "sub.button.vlogGeneration": "生成Vlog",
  "sub.tips.7": "视频生成中，请耐心等待",
  "sub.tips.8": "未授权相册权限",
  "sub.tips.9": "视频下载中",
  "sub.tips.10": "视频已保存到相册",
  "sub.tips.11": "视频保存失败",
  "sub.tips.18": "提示",
  "sub.tips.19": "提示",
  "sub.tips.27": "未处理",
  "sub.tips.28": "生成中",
  "sub.tips.29": "生成完成"
};

// 挂载原小程序核心原型方法
Vue.prototype.$store = store;
Vue.prototype.$uniApi = uniApi;
Vue.prototype.$util = util;
Vue.prototype.$navigateTo = util.navigateTo;
Vue.prototype.$eventAnalyse = eventAnalyse;
Vue.prototype.$bus = new Vue();
Vue.prototype.$uni = typeof uni !== "undefined" ? uni : {};
Vue.prototype.$u = $u;
Vue.prototype.$t = function(key) {
  return i18nMap[key] || key;
};

// 全局过滤器
Vue.filter("saleNumFormat", function(value) {
  if (!value) return 0;
  const num = Number(value);
  if (num >= 100 && num < 1000) return num.toString().slice(0, 1) + "00+";
  if (num >= 1000 && num < 10000) return num.toString().slice(0, 1) + "000+";
  if (num >= 10000) {
    const val = (num / 10000).toFixed(1);
    return val + "万+";
  }
  return num;
});

Vue.filter("numberFilter", function(value) {
  if (!value) return "--";
  const num = Number(value);
  if (num < 10000) return num;
  if (num < 100000000) return (num / 10000).toFixed(2) + "万";
  return (num / 100000000).toFixed(2) + "亿";
});

Vue.filter("cardNameFilter", function(type) {
  const map = {
    0: "身份证",
    1: "护照",
    2: "港澳通行证",
    3: "台湾通行证",
    4: "台胞证",
    5: "外国人永久居留证",
    6: "港澳台居民居住证",
    7: "军人证"
  };
  return map[type] || "证件";
});

App.mpType = "app";

const app = new Vue({
  store,
  ...App
});
app.$mount();
