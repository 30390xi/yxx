// Extracted from subPack/pages/lineRefundApply/lineRefundApply.js; webpack module b7e8.
// Compiled code for analysis; not an original source file.
module.exports = {
    b7e8: function(e, t, n) {
      (function(e, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = {
          data: function() {
            return {
              parseStyle: {
                p: "word-break: break-all;"
              },
              detailObj: "",
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
              n.e("components/uni-popup/uni-popup-dialog").then(function() {
                return resolve(n("e97e"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          filters: {},
          onLoad: function(t) {
            this._orderId = t.orderId, this.iscs = t.cs || "", t.cs && e.setNavigationBarTitle({
              title: "取消预约"
            }), this._applyReasonType = "", this.getOrderDetail()
          },
          methods: {
            refreshPage: function(e) {
              this.showPopup2 = !1, this.selectedReason = "请选择 >", this._applyReasonType = "", this.getOrderDetail()
            },
            getOrderDetail: function() {
              var e = this;
              i.showLoading({
                title: "加载中..."
              }), this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/lineOrder/getTicketOrderRefundInfo?orderId=" + this._orderId).then((function(t) {
                i.hideLoading(), 1 === t.code ? (e.detailObj = t.data, e.getRefundMoney()) : e.$util.showToast(t.msg)
              })).catch((function(e) {
                i.hideLoading()
              }))
            },
            orderStatusTick: function(e) {
              return 0 === e ? "新提交" : 1 === e ? "待支付" : 2 === e ? "待出票" : 3 === e ? "已出票" : 5 === e ? "已完成" : 8 === e ? "退款中" : 9 === e ? "部分退款" : 10 === e ? "退款完成" : 11 === e ? "出票失败" : 12 === e ? "订单关闭" : 13 === e ? "已过期" : void 0
            },
            getRefundMoney: function() {
              var e = this;
              i.showLoading({
                title: "加载中..."
              });
              var t = [];
              this.detailObj.orderPeopleList.forEach((function(n) {
                e.usedIds.includes(n.peopleId) && t.push(n)
              })), this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/lineOrder/getRefundPriceByOrderId", {
                refundPeopleList: t,
                orderId: this._orderId
              }).then((function(t) {
                i.hideLoading(), 1 === t.code ? e.refundAmount = t.data : e.$util.showToast(t.msg)
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
              this.$store.dispatch("wxInForm", ["ItI-SDDPPm_AHZbamcx3iLsZoGlrZCeR2VutwpGmd7s"]).then((function(t) {
                e.confirm()
              })).catch((function(t) {
                e.confirm()
              }))
            },
            confirm: function() {
              var e = this,
                t = [];
              this.detailObj.orderPeopleList.forEach((function(n) {
                e.usedIds.includes(n.peopleId) && t.push(n)
              })), this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/lineOrder/applyRefund", {
                orderId: this._orderId,
                refundPeopleList: t,
                applyReasonType: this._applyReasonType
              }, "加载中...").then((function(t) {
                1 === t.code ? (e.$util.showToast("申请成功"), e.$util.prevPage()) : 18007 === t.code ? (e.errorTip = t.msg, e.showPopup2 = !0) : e.$util.showToast(t.msg)
              }))
            },
            submitFn: function() {
              this.usedIds.length < 1 ? this.$util.showToast("请选择退款游客") : this._applyReasonType ? this.showPopup = !0 : this.$util.showToast("请选择退款原因")
            },
            chooseTourist: function(e, t) {
              this.usedIds.includes(e.peopleId) ? this.usedIds = this.usedIds.filter((function(t) {
                return t != e.peopleId
              })) : this.usedIds.push(e.peopleId), this.getRefundMoney()
            }
          }
        };
        t.default = o
      }).call(this, n("3223").default, n("df3c").default)
    },
};
