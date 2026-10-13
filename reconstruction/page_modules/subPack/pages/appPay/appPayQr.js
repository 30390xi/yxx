// Extracted from subPack/pages/appPay/appPayQr.js; webpack module feae.
// Compiled code for analysis; not an original source file.
module.exports = {
    feae: function(t, e, n) {
      (function(t, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = {
          data: function() {
            return {
              openId: "",
              payType: "",
              orderId: "",
              memberRemark: "",
              url: "",
              subData: {},
              payMsg: "支付中..."
            }
          },
          onLoad: function(t) {
            if (t.q) {
              if (t.q) {
                var e = decodeURIComponent(t.q),
                  n = {};
                if (-1 !== e.indexOf("?"))
                  for (var i = e.substr(e.indexOf("?") + 1).split("&"), a = 0; a < i.length; a++) n[i[a].split("=")[0]] = decodeURI(i[a].split("=")[1]);
                if (this.orderId = n.orderId || "", this.payType = n.payType || "", !this.orderId) return void this.$util.showToast("未获取到订单信息");
                this.getOpenId()
              }
            } else this.$util.showToast("未获取到订单信息")
          },
          onShow: function() {},
          onHide: function() {},
          onUnload: function() {},
          methods: {
            closePay: function() {
              "支付中..." != this.payMsg && t.exitMiniProgram()
            },
            getOpenId: function() {
              var t = this;
              n.login({
                success: function(e) {
                  t.$uniApi.getRequestYesLoading("GET", "manager/app/v1/wxPopular/getSessionKeyPro/".concat(e.code), "请求中").then((function(e) {
                    1 === e.code ? (t.openId = e.data.openid, t.payForApp()) : (t.$util.showToast(e.msg), t.submiting = !1)
                  })).catch((function(e) {
                    t.submiting = !1, t.$util.showToast(e.msg)
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
              }) : (this.url = "order/app/v1/cartInfo/ToPaySmall ", this.subData = {
                payKey: this.orderId,
                openId: this.openId
              }), this.goPay()
            },
            goPay: function() {
              var t = this;
              this.submiting || (n.showLoading({
                title: "发起支付..."
              }), this.submiting = !0, this.$uniApi.dataRequestYesLoading("POST", this.url, this.subData, "支付中").then((function(e) {
                return 18018 == e.code || 18019 == e.code || 18020 == e.code ? (t.submiting = !1, t.payMsg = "支付失败", void n.hideLoading()) : 1 !== e.code ? (n.hideLoading(), t.submiting = !1, t.payMsg = "支付失败", void t.$util.showToast(e.msg)) : void n.requestPayment({
                  timeStamp: e.data.timeStamp,
                  nonceStr: e.data.nonceStr,
                  package: "prepay_id=".concat(e.data.prepayid),
                  signType: e.data.signType,
                  paySign: e.data.pay_sign,
                  success: function(e) {
                    t.submiting = !1, t.payMsg = "支付成功"
                  },
                  fail: function(e) {
                    t.submiting = !1, t.payMsg = "支付失败"
                  }
                })
              })))
            },
            launchAppError: function(t) {
              console.log(t.detail.errMsg), n.showModal({
                title: "提示",
                content: t.detail.errMsg
              })
            }
          }
        };
        e.default = i
      }).call(this, n("3223").default, n("df3c").default)
    }
};
