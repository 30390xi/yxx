require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/appPay/appPay"], {
    "426f": function(t, e, n) {
      var a = n("bc65");
      n.n(a).a
    },
    8684: function(t, e, n) {
      n.r(e);
      var a = n("cb1f"),
        i = n.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(o);
      e.default = i.a
    },
    a442: function(t, e, n) {
      n.r(e);
      var a = n("fb19"),
        i = n("8684");
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(o);
      n("426f");
      var r = n("828b"),
        s = Object(r.a)(i.default, a.b, a.c, !1, null, "1bd3db7c", null, !1, a.a, void 0);
      e.default = s.exports
    },
    bc65: function(t, e, n) {},
    cb1f: function(t, e, n) {
      (function(t, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = {
          data: function() {
            return {
              openId: "",
              payType: "",
              orderId: "",
              memberRemark: "",
              url: "",
              subData: {},
              payMsg: "支付中...",
              channel: ""
            }
          },
          onLoad: function(t) {
            this.channel = t.channel || "", this.orderId = t.orderId || "", this.payType = t.payType || "", this.orderId ? this.getOpenId() : this.$util.showToast("未获取到订单信息")
          },
          onShow: function() {},
          onHide: function() {},
          onUnload: function() {},
          methods: {
            getOpenId: function() {
              var e = this;
              t.login({
                success: function(t) {
                  e.$uniApi.getRequestYesLoading("GET", "manager/app/v1/wxPopular/getSessionKeyPro/".concat(t.code), "请求中").then((function(t) {
                    1 === t.code ? (e.openId = t.data.openid, e.payForApp()) : (e.$util.showToast(t.msg), e.submiting = !1)
                  })).catch((function(t) {
                    e.submiting = !1, e.$util.showToast(t.msg)
                  }))
                }
              })
            },
            payForApp: function() {
              1 == this.payType ? (this.url = "order/app/v1/order/waitPayToPay", this.subData = {
                payChannel: "",
                orderSource: 5,
                orderId: this.orderId,
                buyerMemo: this.memberRemark,
                seriesNumber: this.openId
              }) : 2 == this.payType ? (this.url = "order/app/v1/cartInfo/ToPaySmall ", this.subData = {
                payKey: this.orderId,
                openId: this.openId
              }) : 3 == this.payType && (this.url = "order/app/v1/order/groupTicketWaitPayToPay", this.subData = {
                payChannel: "",
                orderSource: 5,
                groupOrderId: this.orderId,
                buyerMemo: this.memberRemark,
                seriesNumber: this.openId
              }), this.goPay()
            },
            goPay: function() {
              var e = this;
              this.submiting || (t.showLoading({
                title: "发起支付..."
              }), this.submiting = !0, this.$uniApi.dataRequestYesLoading("POST", this.url, this.subData, "支付中").then((function(n) {
                return 18018 == n.code || 18019 == n.code || 18020 == n.code ? (e.submiting = !1, e.payMsg = "支付失败", void t.hideLoading()) : 1 !== n.code ? (t.hideLoading(), e.submiting = !1, e.payMsg = "支付失败", void e.$util.showToast(n.msg)) : void t.requestPayment({
                  timeStamp: n.data.timeStamp,
                  nonceStr: n.data.nonceStr,
                  package: "prepay_id=".concat(n.data.prepayid),
                  signType: n.data.signType,
                  paySign: n.data.pay_sign,
                  success: function(t) {
                    e.submiting = !1, e.payMsg = "支付成功"
                  },
                  fail: function(t) {
                    e.submiting = !1, e.payMsg = "支付失败"
                  }
                })
              })))
            },
            launchAppError: function(e) {
              t.showModal({
                title: "提示",
                content: e.detail.errMsg
              })
            },
            exitMiniProgram: function() {
              n.navigateBackMiniProgram()
            }
          }
        };
        e.default = a
      }).call(this, n("df3c").default, n("3223").default)
    },
    ef13: function(t, e, n) {
      (function(t, e) {
        var a = n("47a9");
        n("5366"), a(n("3240"));
        var i = a(n("a442"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    fb19: function(t, e, n) {
      n.d(e, "b", (function() {
        return a
      })), n.d(e, "c", (function() {
        return i
      })), n.d(e, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    }
  },
  [
    ["ef13", "common/runtime", "common/vendor"]
  ]
]);
