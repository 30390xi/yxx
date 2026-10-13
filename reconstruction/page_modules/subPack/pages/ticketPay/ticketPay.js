// Extracted from subPack/pages/ticketPay/ticketPay.js; webpack module ed05.
// Compiled code for analysis; not an original source file.
module.exports = {
    ed05: function(e, t, r) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = {
          data: function() {
            return {
              orderData: "",
              validDateStr: "",
              weekNotUseStr: "",
              dateNotUseStr: "",
              submiting: !1,
              memberRemark: "",
              cashBackAmount: "",
              from: ""
            }
          },
          onLoad: function(e) {
            this._orderId = e.orderId, this.from = e.from, this.orderEnsure()
          },
          filters: {
            toFixed2: function(e) {
              return e ? Number(e).toFixed(2) : "0.00"
            },
            mobileSubstr: function(e) {
              return e ? e.substr(0, 3) + "****" + e.substr(7) : "-"
            }
          },
          methods: {
            orderEnsure: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getTicketOrderDetail", {
                orderId: this._orderId
              }).then((function(t) {
                e.orderData = t.data, e.returnMoney(e.orderData.itemId);
                var r = "";
                1 == e.orderData.orderTicketStockVo.dateType ? (r = e.orderData.orderTicketStockVo.datePeriodBegin == e.orderData.orderTicketStockVo.datePeriodEnd ? e.orderData.orderTicketStockVo.datePeriodBegin + "当日" : e.orderData.orderTicketStockVo.datePeriodBegin + "~" + e.orderData.orderTicketStockVo.datePeriodEnd, e.orderData.orderTicketStockVo.dateCanUse && (e.weekNotUseStr = "".concat(e.getWeekNotUse(e.orderData.orderTicketStockVo.dateCanUse))), e.orderData.orderTicketStockVo.dateCannotUse && (e.dateNotUseStr = "".concat(e.orderData.orderTicketStockVo.dateCannotUse, "不可用"))) : (r = e.orderData.orderTicketStockVo.ticketUseDate, e.orderData.orderTicketStockVo.ticketUseStartTime ? r += "  ".concat(e.orderData.orderTicketStockVo.ticketUseStartTime, "~").concat(e.orderData.orderTicketStockVo.ticketUseEndTime) : r += "当日"), e.validDateStr = r
              }))
            },
            returnMoney: function(e) {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "product/app/v1/itemActive/" + e).then((function(e) {
                t.loadingStatus = !1, 1 === e.code && e.data && e.data.cashBackAmount && (t.cashBackAmount = e.data.cashBackAmount)
              }))
            },
            getWeekNotUse: function(e) {
              var t = [],
                r = e.split(",");
              if (7 === r.length) return "";
              var o = [1, 2, 3, 4, 5, 6, 7];
              for (var a in o) {
                var n = !0;
                for (var i in r)
                  if (o[a] == r[i]) {
                    n = !1;
                    break
                  } n && t.push("周" + "一一二三四五六日".charAt(o[a]))
              }
              return t.join(",") + "不可用"
            },
            goPay: function() {
              var t = this;
              this.submiting || (e.showLoading({
                title: "发起支付..."
              }), this.submiting = !0, this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/order/waitPayToPay", {
                payChannel: "",
                orderSource: 5,
                orderId: this._orderId,
                buyerMemo: this.memberRemark,
                seriesNumber: e.getStorageSync("userInfor").openId || e.getStorageSync("wxopenid")
              }, "支付中").then((function(r) {
                return 18018 == r.code || 18019 == r.code || 18020 == r.code ? (t.orderEnsure(), t.openPopup(), t.submiting = !1, void e.hideLoading()) : 1 !== r.code ? (e.hideLoading(), t.submiting = !1, void t.$util.showToast(r.msg)) : void e.requestPayment({
                  timeStamp: r.data.timeStamp,
                  nonceStr: r.data.nonceStr,
                  package: "prepay_id=".concat(r.data.prepayid),
                  signType: r.data.signType,
                  paySign: r.data.pay_sign,
                  success: function(r) {
                    t.submiting = !1, console.log(r), t.$store.dispatch("wxInForm", ["gDlb_Lmm5UjBhe5jnstiOCTi4XfN2KOq9056Be9lDSE"]).then((function(r) {
                      e.redirectTo({
                        url: "/subPage/pages/order_pay/order_pay?count=".concat(t.orderData.realPayableAmount, "&type=ticket&orderId=").concat(t._orderId, "&guideCopywriting=").concat(t.orderData.guideCopywriting, "\n\t\t\t\t\t\t\t\t\t&subscribeType=").concat(t.orderData.subscribeType, "&isSpecial=").concat(t.orderData.isSpecial, "&itemId=").concat(t.orderData.itemId, "&orderType=1")
                      })
                    })).catch((function(r) {
                      e.redirectTo({
                        url: "/subPage/pages/order_pay/order_pay?count=".concat(t.orderData.realPayableAmount, "&type=ticket&orderId=").concat(t._orderId, "&guideCopywriting=").concat(t.orderData.guideCopywriting, "\n\t\t\t\t\t\t\t\t\t&subscribeType=").concat(t.orderData.subscribeType, "&isSpecial=").concat(t.orderData.isSpecial, "&itemId=").concat(t.orderData.itemId, "&orderType=1")
                      })
                    }))
                  },
                  fail: function(e) {
                    console.log("fail:" + JSON.stringify(e)), t.submiting = !1, t.from ? t.$util.goBack() : t.$navigateTo({
                      url: "/subPage/pages/orderDetailtick/orderDetailtick?orderId=" + t._orderId
                    })
                  }
                })
              })))
            },
            confirm: function() {
              this.goPay(), this.$refs.popup.close()
            },
            openPopup: function() {
              this.$refs.popup.open()
            },
            closePopup: function() {
              this.$refs.popup.close()
            }
          }
        };
        t.default = r
      }).call(this, r("df3c").default)
    }
};
