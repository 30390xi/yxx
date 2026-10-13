// Extracted from subPage/pages/snowOrder/snowOrder.js; webpack module e25e.
// Compiled code for analysis; not an original source file.
module.exports = {
    e25e: function(n, e, t) {
      (function(n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = {
          data: function() {
            return {
              parseStyle: {
                p: "word-break: break-all;"
              },
              detailInfo: {},
              day: "",
              time: "",
              show: !1
            }
          },
          onLoad: function(n) {
            n.subscribeId && (this.subscribeId = n.subscribeId)
          },
          onShow: function() {
            this.pageLoad()
          },
          methods: {
            showMask: function() {
              this.show = !0
            },
            orderStatus: function(n) {
              return 0 === n ? "待处理" : 1 === n ? "已入柜" : 2 === n ? "已取消" : 3 === n ? "已退押金" : 4 === n ? "已取消" : void 0
            },
            closeMask: function() {
              this.show = !1
            },
            pageLoad: function() {
              var n = this,
                e = {
                  subscribeId: this.subscribeId
                };
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/orderSubscribe/getOrderSubscribe", e).then((function(e) {
                if (1 != e.code) return n.disabledSubmitBtn = !1, void n.$util.showToast(data.msg);
                n.detailInfo = e.data;
                var t = e.data.subscribeTime.split(" ");
                n.day = t[0];
                var a = t[1].split(":");
                n.time = a[0] + "点" + a[1] + "分"
              }))
            },
            orderPayChannel: function(n) {
              return "alipay" == n || "alipay_mini" == n ? "支付宝" : "wx" === n || "wxapp" === n || "xy_wx_mini" === n ? "微信" : "pos" == n ? "线下POS机" : "unionpay" == n ? "银联在线" : "tenpay" == n ? "财付通" : "99bill" == n ? "快钱" : void 0
            },
            getClassNameChannel: function(n) {
              return 1 == n ? "雪板" : 2 == n ? "雪鞋" : 3 == n ? "头盔" : 4 == n ? "雪服" : 5 == n ? "雪镜" : 6 == n ? "手套" : 7 == n ? "护臀套装" : void 0
            },
            getInfo: function(n, e) {
              var t = n.split(" "),
                a = "",
                o = "";
              return t.forEach((function(n) {
                a = a + " " + n
              })), 1 == e ? o = "自带" == t[t.length - 1] ? "" : "cm" : 2 == e && (o = "自带" == t[t.length - 1] ? "" : "码"), a + o
            },
            cancelOrder: function() {
              var e = this,
                t = {
                  subscribeId: this.subscribeId
                };
              n.showModal({
                title: "取消订单",
                content: "订单取消后，无法重新预约，您确定取消该订单吗？",
                confirmColor: "#ff4643",
                success: function(n) {
                  n.confirm && e.$uniApi.dataRequestNoLoading("GET", "order/app/v1/orderSubscribe/subscribeCancel", t).then((function(n) {
                    1 === n.code ? (e.pageLoad(), e.$util.showToast("订单已取消")) : e.$util.showToast(n.msg)
                  })).catch((function(n) {
                    e.$util.showToast(n.msg)
                  }))
                }
              })
            },
            jumpToGear: function(n, e) {
              this.$navigateTo({
                url: "/subPage/pages/snowGear/snowGear?orderId=".concat(n, "&sid=").concat(e)
              })
            },
            goPay: function() {
              var e = this;
              this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/orderSubscribe/subscribeWaitPayToPay", {
                payChannel: "",
                subscribeId: this.subscribeId,
                openId: n.getStorageSync("userInfor").openId
              }, "支付中").then((function(t) {
                1 === t.code ? n.requestPayment({
                  timeStamp: t.data.timeStamp,
                  nonceStr: t.data.nonceStr,
                  package: "prepay_id=".concat(t.data.prepayid),
                  signType: t.data.signType,
                  paySign: t.data.pay_sign,
                  success: function(n) {
                    e.pageLoad()
                  },
                  fail: function(n) {
                    console.log("fail:" + JSON.stringify(n)), e.pageLoad()
                  }
                }) : e.$util.showToast(t.msg)
              }))
            }
          }
        };
        e.default = t
      }).call(this, t("df3c").default)
    },
};
