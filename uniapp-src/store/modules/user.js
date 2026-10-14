import uniApi from "@/utils/request.js";

const state = {
  token: (typeof uni !== "undefined" && uni.getStorageSync("token")) || "",
  refresh: (typeof uni !== "undefined" && uni.getStorageSync("refresh")) || "",
  userInfor: (typeof uni !== "undefined" && uni.getStorageSync("userInfor")) || {},
  distributorId: "",
  islogin: false
};

const getters = {
  token: state => state.token,
  refresh: state => state.refresh,
  userInfor: state => state.userInfor,
  distributorId: state => state.distributorId
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
    state.islogin = !!token;
  },
  SET_REFRESH: (state, refresh) => {
    state.refresh = refresh;
  },
  SET_USERINFOR: (state, info) => {
    state.userInfor = info || {};
  },
  SET_DISTRIBUTORID: (state, id) => {
    state.distributorId = id;
  },
  SET_OPENID: (state, openId) => {
    uniApi.getRequestNoLoading("GET", "manager/app/v1/member/updateOpenId?openId=" + openId).then(res => {
      if (res && res.code === 1) {
        console.log("oid saveSuccess!");
      }
    });
  }
};

const actions = {
  LoginByUsername({ commit }, payload) {
    const openId = uni.getStorageSync("wxopenid");
    return new Promise((resolve, reject) => {
      const u = {
        userName: payload.username,
        password: payload.password,
        openId: openId
      };
      uniApi.dataRequestNoLoading("post", "manager/app/ignoreAuth/passwordLogin", u).then(res => {
        if (res.code === 1) {
          const token = "bearer " + res.data.token;
          commit("SET_TOKEN", token);
          uni.setStorageSync("token", token);
          commit("SET_REFRESH", res.data.refresh);
          uni.setStorageSync("refresh", res.data.refresh);
          commit("SET_OPENID", uni.getStorageSync("wxopenid"));
          uniApi.getRequestNoLoading("GET", "manager/app/v1/member/getUserDetail").then(detailRes => {
            if (detailRes.code === 1) {
              if (!detailRes.data.openId) detailRes.data.openId = uni.getStorageSync("wxopenid");
              commit("SET_USERINFOR", detailRes.data);
              uni.setStorageSync("userInfor", detailRes.data);
              resolve(detailRes);
            } else {
              resolve(res);
            }
          });
        } else {
          resolve(res);
        }
      }).catch(reject);
    });
  },

  getUserInfo({ commit }) {
    return uniApi.getRequestNoLoading("GET", "manager/app/v1/member/getUserDetail").then(res => {
      if (res && res.code === 1) {
        commit("SET_USERINFOR", res.data);
        uni.setStorageSync("userInfor", res.data);
      }
      return res;
    });
  },

  PushMessage() {
    return new Promise(resolve => {
      uni.requestSubscribeMessage({
        tmplIds: [
          "q0cCIuuC-AmmOhlyKdelp9E7Yh8JANfEX9prtGyvKRw",
          "OYNPPv7dSQv7Lr_H7yXqKc_SSkDXCY1N3H4QoNPW3gs",
          "eSor2SXC5AaniK_FUY5Uq1CS1DdwtIRmC76x4K4klrM"
        ],
        success: resolve,
        fail: resolve
      });
    });
  },

  wxInForm(context, tmplIds) {
    return new Promise(resolve => {
      uni.requestSubscribeMessage({
        tmplIds: tmplIds,
        success: resolve,
        fail: resolve
      });
    });
  },

  LoginByCode({ commit }, payload) {
    const openId = uni.getStorageSync("wxopenid");
    return new Promise((resolve, reject) => {
      uniApi.getRequestNoLoading("POST", `manager/app/ignoreAuth/login/${payload.username}/${payload.code}?openId=${openId}`).then(res => {
        if (res.code === 1) {
          const token = "bearer " + res.data.token;
          commit("SET_TOKEN", token);
          uni.setStorageSync("token", token);
          commit("SET_OPENID", uni.getStorageSync("wxopenid"));
          uniApi.getRequestNoLoading("GET", "manager/app/v1/member/getUserDetail").then(detailRes => {
            if (detailRes.code === 1) {
              if (!detailRes.data.openId) detailRes.data.openId = uni.getStorageSync("wxopenid");
              commit("SET_USERINFOR", detailRes.data);
              uni.setStorageSync("userInfor", detailRes.data);
              resolve(detailRes);
            } else {
              resolve(res);
            }
          });
        } else {
          resolve(res);
        }
      }).catch(reject);
    });
  },

  WechatLoginByCode({ commit }, payload) {
    return new Promise(resolve => {
      uniApi.dataRequestNoLoading("POST", "manager/app/ignoreAuth/wechatLoginByCode", {
        code: payload.code
      }).then(res => {
        if (res.code === 1) {
          const token = "bearer " + res.data.token;
          commit("SET_TOKEN", token);
          uni.setStorageSync("token", token);
          uniApi.getRequestNoLoading("GET", "manager/app/v1/member/getUserDetail").then(detailRes => {
            if (detailRes.code === 1) {
              commit("SET_USERINFOR", detailRes.data);
              uni.setStorageSync("userInfor", detailRes.data);
              resolve(detailRes);
            } else {
              resolve(res);
            }
          });
        } else {
          resolve(res);
        }
      });
    });
  },

  LoginByPhone({ commit, getters }, payload) {
    return new Promise(resolve => {
      uniApi.dataRequestNoLoading("POST", "manager/app/ignoreAuth/wechatLoginPro", {
        code: payload.code,
        iv: payload.iv,
        encryptedData: payload.encryptedData,
        referenceId: getters.distributorId || ""
      }).then(res => {
        if (res.code === 1) {
          const token = "bearer " + res.data.token;
          commit("SET_TOKEN", token);
          uni.setStorageSync("token", token);
          uniApi.getRequestNoLoading("GET", "manager/app/v1/member/getUserDetail").then(detailRes => {
            if (detailRes.code === 1) {
              commit("SET_USERINFOR", detailRes.data);
              uni.setStorageSync("userInfor", detailRes.data);
              resolve(detailRes);
            } else {
              resolve(res);
            }
          });
        } else {
          resolve(res);
        }
      });
    });
  },

  LOSE_TOKEN({ commit }) {
    commit("SET_TOKEN", "");
    uni.removeStorageSync("token");
    commit("SET_USERINFOR", {});
    uni.removeStorageSync("userInfor");
    uni.removeStorageSync("isShowTips");
    return Promise.resolve("success");
  },

  setUserInfo({ commit }, payload) {
    if (payload) {
      commit("SET_TOKEN", payload);
      uni.setStorageSync("token", payload);
    }
    return new Promise(resolve => {
      uniApi.getRequestNoLoading("GET", "manager/app/v1/member/getUserDetail").then(res => {
        if (res && res.code === 1) {
          commit("SET_USERINFOR", res.data);
          uni.setStorageSync("userInfor", res.data);
          resolve(res);
        } else {
          resolve(res);
        }
      });
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
