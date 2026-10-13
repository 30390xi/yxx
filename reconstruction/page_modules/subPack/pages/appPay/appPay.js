// Extracted from subPack/pages/appPay/appPay.js; webpack module cb1f.
// Compiled code for analysis; not an original source file.
module.exports = {
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
};
