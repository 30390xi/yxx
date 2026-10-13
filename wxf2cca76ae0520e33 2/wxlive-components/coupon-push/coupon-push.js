module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/11.js"), require("../../_commons/22.js"), {
  ids: [53],
  modules: {
    253: function(e, t, o) {
      o.r(t);
      var r = o(7),
        n = o.n(r),
        i = o(0),
        s = o(1),
        u = o(5),
        a = o(15),
        c = o(25);

      function p(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), o.push.apply(o, r)
        }
        return o
      }

      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p(Object(o), !0).forEach((function(t) {
            n()(e, t, o[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : p(Object(o)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
          }))
        }
        return e
      }
      Component({
        behaviors: [u.a, a.a, c.a],
        data: {
          componentName: "couponPush",
          from: "pusher",
          screenType: "",
          couponPush: null,
          goodsPush: null,
          showRecord: !1,
          uiArrowLeftVeritical: 0,
          uiArrowLeftHorizontal: 0,
          showCommentIcon: !1
        },
        lifetimes: {
          ready: function() {
            this.uiGetStorePosition(this.data.screenType)
          }
        },
        methods: {
          couponPushObserver: function() {
            this.uiCountArrow()
          },
          showRecordObserve: function() {
            this.uiCountArrow()
          },
          screenTypeObserver: function() {
            var e = this;
            setTimeout((function() {
              e.uiCountArrow("screenType")
            }), 300)
          },
          uiCountArrow: function(e) {
            var t = wx.getStorageSync("uiPersonOperationStoreBtnHorizontalLeft"),
              o = wx.getStorageSync("uiPersonOperationStoreBtnVerticalLeft");
            "horizontal" === this.data.screenType && this.data.uiArrowLeftHorizontal !== t ? ("screenType" !== e || "screenType" === e && !this.data.uiArrowLeftHorizontal) && this.setData({
              uiArrowLeftHorizontal: t
            }) : "horizontal" !== this.data.screenType && this.data.uiArrowLeftVeritical !== o && ("screenType" !== e || "screenType" === e && !this.data.uiArrowLeftVeritical) && this.setData({
              uiArrowLeftVeritical: o
            })
          },
          onBeforeDataReady: function() {
            var e = this,
              t = this.storeData.couponPush;
            if (t) {
              var o = t.pushInterval - (this.liveManager.getServerTime() - t.timestamp);
              isNaN(o) && o <= 0 ? (this.logInfo("[飘出优惠券] [onBeforeDataReady] 推送过期", t), this.storeSetData({
                couponPush: null,
                isRenderStorePackup: !0
              })) : (this.couponPushTimer && clearTimeout(this.couponPushTimer), this.couponPushTimer = setTimeout((function() {
                e.storeSetData({
                  couponPush: null,
                  isRenderStorePackup: !0
                })
              }), 1e3 * o))
            }
          },
          roomDynamicInfoObserver: function(e) {
            if (this.storeData.showStoreIcon) try {
              this.handleCoupon(e)
            } catch (e) {
              this.logError("[飘出优惠券] roomDynamicInfoObserver logic err", e), this.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
            }
          },
          handleCoupon: function(e) {
            var t = this,
              o = e.push_coupon && e.push_coupon.list || [];
            if (0 === o.length) return null;
            var r = "",
              n = 0;
            if (o.length > 0 && o[0].msg_content && (r = +JSON.parse(o[0].msg_content), n = o[0].timestamp), r && n) {
              var i = e.settings.push_interval,
                s = i - (this.liveManager.getServerTime() - n);
              if (s <= 0) return null;
              var u = null;
              (e.coupons && e.coupons.coupons || []).forEach((function(e) {
                r === +e.coupon_id && (u = h(h({}, e), {}, {
                  timestamp: n
                }))
              })), u && (console.log("[飘出优惠券] couponPush", u), this.storeSetData({
                couponPush: h(h({}, u), {}, {
                  timestamp: n,
                  pushInterval: i
                })
              }), setTimeout((function() {
                t.storeSetData({
                  couponPush: null,
                  isRenderStorePackup: !0
                })
              }), 1e3 * s), this.addReportMMData({
                actionType: 4,
                subActionType: 31,
                reserves: 1,
                couponId: u.coupon_id
              }))
            }
          },
          onGetCoupon: function() {
            if ((wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) !== i.a.SHARE_FRIENDS_SCENE) {
              var e = this.data.couponPush;
              (e || e.coupon_id) && (this.logInfo("[领取优惠券][coupon-push] couponId", e.coupon_id), this.handleClickCoupon(e, "push"))
            } else s.a.tipsSimple("请前往小程序使用完整服务")
          },
          handleCountTime: function() {
            var e = this;
            "pusher" === this.data.from && (this.data.countTime <= 0 || (clearTimeout(this.g_countTimer), this.g_countTimer = setTimeout((function() {
              e.setData({
                countTime: e.data.countTime - 1
              }), e.handleCountTime()
            }), 1e3)))
          }
        }
      })
    },
    60: function(e, t, o) {
      e.exports = o(253)
    }
  },
  entries: [
    [60, 0, 1, 3, 6, 2, 4, 5, 7, 11, 22]
  ]
}]);
