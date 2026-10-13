require("@babel/runtime/helpers/Arrayincludes");
module.exports = require("./_commons/0.js")([require("./_commons/1.js"), require("./_commons/3.js"), require("./_commons/2.js"), require("./_commons/4.js"), {
  ids: [31],
  modules: {
    29: function(e, n) {
      var t = {
          getShareParams: 3,
          getOpenid: 3,
          getSubscribeStatus: 3
        },
        o = {};
      e.exports = {
        checkFreq: function(e, n) {
          t[e] || (t[e] = 3);
          var i = "".concat(e, "_").concat(n || ""),
            r = o[i];
          return r ? !(Date.now() - r.time < 1e3 && r.count >= t[e] || (Date.now() - r.time >= 1e3 ? (o[i] = {
            time: Date.now(),
            count: 1
          }, 0) : (o[i].count++, 0))) : (o[i] = {
            time: Date.now(),
            count: 1
          }, !0)
        },
        KEY_LIST: {
          getShareParams: "getShareParams",
          getOpenid: "getOpenid",
          getSubscribeStatus: "getSubscribeStatus",
          getCouponInfo: "getCouponInfo",
          subscribeAndObtainCoupon: "subscribeAndObtainCoupon"
        }
      }
    },
    586: function(e, n, t) {
      t.r(n), t.d(n, "getLiveStatus", (function() {
        return s
      })), t.d(n, "getShareParams", (function() {
        return a
      })), t.d(n, "getOpenid", (function() {
        return _
      })), t.d(n, "getSubscribeStatus", (function() {
        return m
      })), t.d(n, "getCouponInfo", (function() {
        return d
      })), t.d(n, "subscribeAndObtainCoupon", (function() {
        return p
      })), t.d(n, "getPluginVersion", (function() {
        return f
      })), t.d(n, "setCustomerServiceCallback", (function() {
        return g
      }));
      var o = t(0),
        i = t(2),
        r = t(4),
        c = t(29),
        u = t(1).a.getCurAppid();

      function s(e) {
        return new Promise((function(n, t) {
          if (!e || !e.room_id || e && 0 === e.room_id) t("传入的房间id有误");
          else {
            var i = e.room_id,
              c = +wx.getStorageSync("prevRequestTime-".concat(u, "-").concat(i)) || 0,
              s = Date.now();
            if (s - c >= 6e4) {
              wx.setStorageSync("prevRequestTime-".concat(u, "-").concat(i), s);
              var a = {
                action: "get_live_info",
                room_id: i,
                content: "",
                plugin_appid: o.a.PLUGIN_APPID,
                timestamp: Date.now()
              };
              r.a.liveRoutePromise(a).then((function(e) {
                n({
                  liveStatus: +e.live_status
                })
              })).catch((function(e) {
                if (2e4 === (e && (+e.ret || +e.err_code) || e.errMsg && +e.errMsg.split(":")[2])) t("传入的房间id有误");
                else {
                  var n = +e.inner_ret || null;
                  n === o.a.OPERATEWXDATA_CODE.TIMEOUT ? t("网络超时") : n === o.a.OPERATEWXDATA_CODE.NO_CONCENT ? t("获取数据失败") : t("系统异常")
                }
              }))
            }
          }
        }))
      }

      function a() {
        return new Promise((function(e, n) {
          var t = wx.getEnterOptionsSync && wx.getEnterOptionsSync().path || "",
            i = wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1;
          if (t.indexOf("wx2b03c6e691cd7370/pages/live-player-plugin") > 0 && [1007, 1008, 1014, 1044, 1045, 1046, 1047, 1048, 1049, 1073, 1154, 1155].includes(i)) {
            var c = wx.getEnterOptionsSync && wx.getEnterOptionsSync().query || {},
              u = c.room_id,
              s = c.share_openid,
              a = c.custom_params,
              _ = {
                action: "get_static_info",
                content: "",
                room_id: u,
                plugin_appid: o.a.PLUGIN_APPID,
                timestamp: Date.now()
              };
            r.a.liveRoutePromise(_).then((function(n) {
              e({
                room_id: u,
                openid: n.openid,
                share_openid: s,
                custom_params: a && JSON.parse(decodeURIComponent(a)) || ""
              })
            })).catch((function(e) {
              n(e)
            }))
          } else n({
            err: "只能获取分享卡片入口的参数"
          })
        }))
      }

      function _(e) {
        return new Promise((function(n, t) {
          if (!e || !e.room_id || e && 0 === e.room_id) t("传入的房间id有误");
          else {
            var i = {
              action: "get_static_info",
              content: "",
              room_id: e.room_id,
              plugin_appid: o.a.PLUGIN_APPID,
              timestamp: Date.now()
            };
            r.a.liveRoutePromise(i).then((function(e) {
              n({
                openid: e.openid
              })
            })).catch((function(e) {
              t(e)
            }))
          }
        }))
      }

      function m(e) {
        return new Promise((function(n, t) {
          if (!e || !e.room_id || e && 0 === e.room_id) t("传入的房间id有误");
          else {
            var i = {
              action: "get_static_info",
              content: "",
              room_id: e.room_id,
              plugin_appid: o.a.PLUGIN_APPID,
              timestamp: Date.now()
            };
            r.a.liveRoutePromise(i).then((function(t) {
              n({
                room_id: e.room_id,
                openid: t.openid,
                is_subscribe: !!+t.is_subscribe
              })
            })).catch((function(e) {
              t(e)
            }))
          }
        }))
      }

      function d(e) {
        return new Promise((function(n, t) {
          if (!e || !e.room_id || e && 0 === e.room_id) t("传入的房间id有误");
          else if (Object(c.checkFreq)(c.KEY_LIST.getCouponInfo, e.room_id)) {
            var i = {
              action: "get_coupons_and_subscribe_info",
              content: "",
              room_id: e.room_id,
              plugin_appid: o.a.PLUGIN_APPID,
              timestamp: Date.now()
            };
            r.a.liveRoutePromise(i).then((function(e) {
              console.log("get_coupons_and_subscribe_info res", e);
              var t = e.coupons || [];
              n({
                coupons: t.map((function(e) {
                  var n = e.stock && e.stock.main_info || {};
                  return {
                    begin_time: n.begin_time,
                    end_time: n.end_time,
                    status: e.status,
                    coupon_id: e.coupon_id,
                    is_given: e.is_given,
                    name: e.name
                  }
                })),
                is_subscribe: e.is_subscribe
              })
            })).catch((function(e) {
              t(e)
            }))
          } else t("请求过于频繁，请稍后再试")
        }))
      }

      function p(e) {
        return new Promise((function(n, t) {
          if (!e || !e.room_id || e && 0 === e.room_id) t("传入的房间id有误");
          else if (Object(c.checkFreq)(c.KEY_LIST.subscribeAndObtainCoupon, e.room_id)) {
            var i = {
              action: "subscribe_and_obtain_coupon",
              content: JSON.stringify({
                coupon_id: e.coupon_id
              }),
              room_id: e.room_id,
              plugin_appid: o.a.PLUGIN_APPID,
              timestamp: Date.now()
            };
            r.a.liveRoutePromise(i).then((function(e) {
              n(e)
            })).catch((function(e) {
              t(e)
            }))
          } else t("请求过于频繁，请稍后再试")
        }))
      }

      function f() {
        return i.a.pluginVersion
      }

      function g(e) {
        "function" == typeof e && i.a.setCustomerServiceCallback(e)
      }
      n.default = {
        getLiveStatus: s,
        getShareParams: a,
        getOpenid: _,
        getSubscribeStatus: m,
        getCouponInfo: d,
        subscribeAndObtainCoupon: p,
        getPluginVersion: f,
        setCustomerServiceCallback: g
      }
    }
  },
  entries: [
    [586, 0, 1, 3, 2, 4]
  ]
}]);
