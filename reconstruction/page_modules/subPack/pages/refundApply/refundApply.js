// Extracted from subPack/pages/refundApply/refundApply.js; webpack module ace2.
// Compiled code for analysis; not an original source file.
module.exports = {
    ace2: function(e, n, t) {
      (function(e, i) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var d = {
          data: function() {
            return {
              parseStyle: {
                p: "word-break: break-all;line-height: 1.5"
              },
              detailObj: "",
              isRefunding: !1,
              errorTip: "",
              iscs: "",
              refundAmount: 0,
              arrayNum: [],
              canRefundNum: 0,
              arrayReason: ["行程取消", "门票预约错误", "未收到入园凭证", "景区无入园信息", "其他"],
              selectedReason: "请选择 >",
              refundType: 3,
              userList: [{
                id: "1",
                name: "李晓霞"
              }, {
                id: "2",
                name: "李一"
              }, {
                id: "3",
                name: "李二代"
              }, {
                id: "4",
                name: "闻不到"
              }, {
                id: "5",
                name: "时时彩"
              }, {
                id: "6",
                name: "偶当初"
              }],
              usedIds: [],
              showPopup: !1,
              showPopup2: !1
            }
          },
          components: {
            uniPopupDialog: function() {
              t.e("components/uni-popup/uni-popup-dialog").then(function() {
                return resolve(t("e97e"))
              }.bind(null, t)).catch(t.oe)
            }
          },
          filters: {},
          onLoad: function(n) {
            this._orderId = n.orderId, this.iscs = n.cs || "", n.cs && e.setNavigationBarTitle({
              title: "取消预约"
            }), this._applyReasonType = "", this.getOrderDetail()
          },
          onUnload: function() {
            getApp().watchRouter()
          },
          methods: {
            refreshPage: function(e) {
              this.showPopup2 = !1, this.selectedReason = "请选择 >", this._applyReasonType = "", this.getOrderDetail()
            },
            getOrderDetail: function() {
              var e = this;
              i.showLoading({
                title: "加载中..."
              }), this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getTicketOrderRefundInfo", {
                orderId: this._orderId
              }).then((function(n) {
                if (i.hideLoading(), 1 === n.code) {
                  e.detailObj = n.data, 2 == e.detailObj.checkMode && 0 == e.detailObj.isPartialRefund && 2 == e.detailObj.touristInfoType && e.detailObj.verifyCodeList.forEach((function(n) {
                    e.usedIds.push(n.verifyCode)
                  }));
                  for (var t = 0; t < e.detailObj.num; t++) e.arrayNum.push(t + 1);
                  0 == e.detailObj.isPartialRefund ? (e.canRefundNum = e.detailObj.num, e.refundAmount = (e.canRefundNum * e.detailObj.price).toFixed(2)) : (e.canRefundNum = e.detailObj.num, e.refundAmount = e.detailObj.realPaid), e.getRefundMoney()
                } else e.$util.showToast(n.msg)
              })).catch((function(e) {
                i.hideLoading()
              }))
            },
            orderStatusTick: function(e) {
              return 0 === e ? "新提交" : 1 === e ? "待支付" : 2 === e ? "待出票" : 3 === e ? "已出票" : 5 === e ? "已完成" : 8 === e ? "退款中" : 9 === e ? "部分退款" : 10 === e ? "退款完成" : 11 === e ? "出票失败" : 12 === e ? "订单关闭" : 13 === e ? "已过期" : void 0
            },
            bindPickerChange: function(e) {
              console.log(e), this.canRefundNum = this.arrayNum[e.target.value], this.getRefundMoney()
            },
            getRefundMoney: function() {
              var e = this;
              i.showLoading({
                title: "加载中..."
              }), this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getRefundPriceByOrderIdAndNum", {
                num: this.canRefundNum,
                orderId: this._orderId
              }).then((function(n) {
                i.hideLoading(), 1 === n.code ? e.refundAmount = n.data : e.$util.showToast(n.msg)
              })).catch((function(e) {
                i.hideLoading()
              }))
            },
            bindReasonPickerChange: function(e) {
              console.log(e), this.selectedReason = this.arrayReason[e.target.value], this._applyReasonType = Number(e.target.value) + 5
            },
            close: function(e) {
              this.showPopup = !1, this.showPopup2 = !1
            },
            orderRefund: function() {
              var e = this;
              this.isRefunding || (this.isRefunding = !0, this.$store.dispatch("wxInForm", ["ItI-SDDPPm_AHZbamcx3iLsZoGlrZCeR2VutwpGmd7s"]).then((function(n) {
                e.confirm()
              })).catch((function(n) {
                e.confirm()
              })))
            },
            confirm: function() {
              var e = this;
              this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/order/ticketOrderRefund", {
                orderId: this._orderId,
                num: this.canRefundNum,
                refundAmount: this.refundAmount,
                applyReasonType: this._applyReasonType,
                codes: this.usedIds,
                ysx: "wx"
              }, "加载中...").then((function(n) {
                e.isRefunding = !1, 1 === n.code ? (e.$util.showToast("申请成功"), e.$util.prevPage()) : 18007 === n.code ? (e.errorTip = n.msg, e.showPopup2 = !0) : e.$util.showToast(n.msg)
              }))
            },
            submitFn: function() {
              this.canRefundNum < 1 ? this.$util.showToast("请选择退款游客") : this._applyReasonType ? this.showPopup = !0 : this.$util.showToast("请选择退款原因")
            },
            chooseTourist: function(e, n) {
              this.usedIds.includes(e.verifyCode) ? this.usedIds = this.usedIds.filter((function(n) {
                return n != e.verifyCode
              })) : this.usedIds.push(e.verifyCode), this.canRefundNum = this.usedIds.length, this.canRefundNum > 0 ? this.getRefundMoney() : this.refundAmount = 0
            },
            brText: function(e) {
              if (e) {
                var n = e.split("#**#");
                return n.pop().split("</p>").forEach((function(e, t) {
                  if (e) {
                    var i = (e = e.split("<p>").join("")).match(/\<.*?\>/g),
                      d = e.match(/[\r\n]/g),
                      o = i || d;
                    o && o[0] && o.forEach((function(n) {
                      e = e.replaceAll(n, "")
                    })), n.push(e)
                  }
                })), n
              }
            }
          }
        };
        n.default = d
      }).call(this, t("3223").default, t("df3c").default)
    },
};
