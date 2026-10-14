import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user.js";
import shopcart from "./modules/shopcart.js";
import xjtu from "./modules/xjtu.js";
import log from "./modules/log.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    shopcart,
    xjtu,
    log
  },
  actions: {
    LoginOut({ commit }) {
      return new Promise(resolve => {
        commit("SET_ORDERENSURE", 0);
        commit("SET_TOKEN", null);
        commit("SET_USERINFOR", null);
        uni.removeStorageSync("token");
        uni.removeStorageSync("userInfor");
        uni.removeStorageSync("isShowTips");
        resolve();
      });
    }
  }
});

export default store;
