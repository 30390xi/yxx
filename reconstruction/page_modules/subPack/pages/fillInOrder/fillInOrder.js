// Extracted from subPack/pages/fillInOrder/fillInOrder.js; webpack module "4ac7".
// Compiled code for analysis; not an original source file.
module.exports = {
    "4ac7": function(e, t, i) {
      (function(e) {
        var s = i("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = s(i("7ca3")),
          o = {
            components: {
              orderNav: function() {
                i.e("subPack/components/orderNav").then(function() {
                  return resolve(i("c26a8"))
                }.bind(null, i)).catch(i.oe)
              },
              ocrIndex: function() {
                i.e("components/ocr/ocrIndex").then(function() {
                  return resolve(i("7882"))
                }.bind(null, i)).catch(i.oe)
              },
              cardType: function() {
                i.e("subPack/components/card-pop/candType").then(function() {
                  return resolve(i("7158"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            data: function() {
              return {
                orderId: "",
                submiting: !1,
                showPassenger: !1,
                addTouristNum: 0,
                commonUsedTouristList: null,
                activeTouristId: [],
                activeTouristList: [],
                modelType: 0,
                passenger: {
                  name: "",
                  idCarNo: "",
                  phone: "",
                  id: ""
                },
                submitState: !1,
                touristPhone: "",
                disabledSubmitBtn: !1,
                lineing: !1,
                hasTimeOut: !1,
                repeatCreateOrder: null,
                repeatCreateOrder2: null,
                groupErrList: [],
                showGroupErr: !1,
                orderingInfo: {},
                activeSpot: 0,
                activeItem: 0,
                activeCard: 0,
                errJump: !1,
                showDetail: !1,
                activeIsCard: !0,
                editType: 0,
                safeAreaBottom: 0,
                showCardPop: !1,
                realCardTypeCodes: [],
                border: !1
              }
            },
            onReady: function() {},
            onLoad: function(t) {
              e.getStorageSync("lineOrderInfo") && (this.orderingInfo = e.getStorageSync("lineOrderInfo"), this.orderingInfo.spotList.forEach((function(e) {
                e.itemList.forEach((function(e) {
                  e.touristList = [], e.touristId = [], e.realCardTypeCodes = e.itemUseDesc.realCardTypeCodes.split(","), 0 == e.itemUseDesc.touristInfoType ? (e.touristNum = 1, e.isCard = !1, e.realCardTypeCodes = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]) : 1 == e.itemUseDesc.touristInfoType ? (e.touristNum = 1, e.isCard = !0) : (e.touristNum = e.ticketNum, e.isCard = !0)
                }))
              }))), this.safeAreaBottom = e.getStorageSync("safeAreaBottom") ? e.getStorageSync("safeAreaBottom") : 0
            },
            onUnload: function() {},
            onShow: function() {
              this.getCommonUsedTouristList()
            },
            methods: {
              setDataInfos: function(e) {
                var t = this;
                console.log(e, "参数--------"), e ? (this.passenger.name = e.name, this.passenger.idCarNo = e.idCarNo) : setTimeout((function() {
                  t.$util.showToast("识别失败，请重新识别或手动填写")
                }), 500)
              },
              save: function() {
                var t = this;
                if (this.modelType) {
                  if (this.submitState) return;
                  if (!this.verify()) return;
                  if (this.submitState = !0, 1 == this.modelType) this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/commonUsedTourist/queryTouristByIdCardNo?idCarNo=" + this.passenger.idCarNo).then((function(i) {
                    if (1 === i.code)
                      if (console.log(i.data), i.data && i.data[0]) {
                        var s = {
                          id: i.data[0].id,
                          name: t.passenger.name,
                          phone: t.passenger.phone,
                          idCarNo: t.passenger.idCarNo,
                          cardType: t.passenger.cardType
                        };
                        e.showModal({
                          cancelText: "取消",
                          confirmText: "确认",
                          content: "该证件号信息已存在，请确认是否更新?",
                          success: function(e) {
                            e.confirm ? t.$uniApi.dataRequestNoLoading("POST", "manager/app/v1/commonUsedTourist/updateCommonUsedTourist", s).then((function(e) {
                              1 === e.code ? t.closeAdd() : (t.$util.showToast(e.msg), t.submitState = !1)
                            })) : e.cancel && (t.submitState = !1)
                          }
                        })
                      } else {
                        var r = [];
                        r.push({
                          name: t.passenger.name,
                          phone: t.passenger.phone,
                          idCarNo: t.passenger.idCarNo,
                          cardType: t.passenger.cardType
                        }), t.$uniApi.dataRequestYesLoading("POST", "manager/app/v1/commonUsedTourist/saveCommonUsedTourist?operationType=1", r, "保存中").then((function(e) {
                          1 === e.code ? t.closeAdd() : (t.$util.showToast(e.msg), t.submitState = !1)
                        }))
                      }
                    else t.$util.showToast(i.msg), t.submitState = !1
                  }));
                  else {
                    var i = {
                      id: this.passenger.id,
                      name: this.passenger.name,
                      phone: this.passenger.phone,
                      idCarNo: this.passenger.idCarNo,
                      cardType: this.passenger.cardType
                    };
                    this.$uniApi.dataRequestYesLoading("POST", "manager/app/v1/commonUsedTourist/updateCommonUsedTourist", i, "保存中").then((function(e) {
                      1 === e.code ? t.editType ? (t.orderingInfo.spotList[t.activeSpot].itemList[t.activeItem].touristList[t.activeCard] = i, t.showPassenger = !1, t.submitState = !1) : t.closeAdd() : (t.$util.showToast(e.msg), t.submitState = !1)
                    }))
                  }
                } else {
                  this.activeTouristList = [];
                  var s = this.activeTouristId,
                    r = [],
                    o = !0;
                  if (this.commonUsedTouristList.forEach((function(e) {
                      s.includes(e.id) && (t.activeTouristList.push(e), r.push(e.id), e.idCarNo || (o = !1))
                    })), this.activeIsCard && !o) return void this.$util.showToast("请补充证件信息");
                  this.orderingInfo.spotList[this.activeSpot].itemList[this.activeItem].touristList = this.activeTouristList, this.orderingInfo.spotList[this.activeSpot].itemList[this.activeItem].touristId = r, this.showPassenger = !1
                }
              },
              selectDateStr: function(e) {
                var t = e.split("-"),
                  i = t[1],
                  s = t[2];
                return i = "0" == i.split("")[0] ? i.split("")[1] : i, s = "0" == s.split("")[0] ? s.split("")[1] : s, t[0] + "年" + i + "月" + s + "日"
              },
              touristNumText: function(e, t) {
                return 0 == t ? "选择".concat(e, "位游客") : t < e ? "再选".concat(e - t, "位") : t == e ? "已选满" : void 0
              },
              verify: function() {
                return this.$util.checkName(this.passenger.name).code ? this.$util.checkPhone(this.passenger.phone).code ? !!this.$util.checkId(this.passenger.idCarNo, this.passenger.cardType).code || (this.$util.showToast(this.$util.checkId(this.passenger.idCarNo, this.passenger.cardType).msg), !1) : (this.$util.showToast(this.$util.checkPhone(this.passenger.phone).msg), !1) : (this.$util.showToast(this.$util.checkName(this.passenger.name).msg), !1)
              },
              closeAdd: function() {
                this.passenger = {
                  name: "",
                  idCarNo: "",
                  phone: "",
                  id: "",
                  cardType: this.realCardTypeCodes[0] || 0
                }, this.modelType = 0, this.submitState = !1, this.getCommonUsedTouristList()
              },
              addPassenger: function() {
                this.passenger = {
                  name: "",
                  idCarNo: "",
                  phone: "",
                  id: "",
                  cardType: this.realCardTypeCodes[0] || 0
                }, this.modelType = 1
              },
              phoneFilter: function(e) {
                if (e) {
                  var t = e.toString();
                  return t.replace(t.substring(3, 7), "****")
                }
              },
              idCarNoFilter: function(e) {
                if (e) {
                  var t = e.toString();
                  return t.substring(0, 1) + "****************" + t.substring(t.length - 1, t.length)
                }
              },
              closePassenger: function() {
                this.modelType && !this.editType ? this.modelType = 0 : this.showPassenger = !1
              },
              editPassenger: function(e, t, i, s, r) {
                this.editType = t, t && (this.activeSpot = i, this.activeItem = s, this.activeCard = r), this.modelType = 2, this.showPassenger = !0, this.passenger = {
                  name: e.name,
                  idCarNo: e.idCarNo,
                  phone: e.phone,
                  id: e.id,
                  cardType: e.cardType
                }
              },
              changeTourist: function(e, t) {
                if (this.realCardTypeCodes.includes(e.cardType)) {
                  var i = this.activeTouristId;
                  if (i.includes(e.id)) {
                    var s = i.indexOf(e.id);
                    i.splice(s, 1)
                  } else i.length < this.addTouristNum ? i.push(e.id) : 1 == this.addTouristNum && i.length == this.addTouristNum && (i = []).push(e.id);
                  this.activeTouristId = i
                } else this.$util.showToast("游客证件类型暂不支持")
              },
              inclouds: function(e) {
                return this.activeTouristId.includes(e)
              },
              delTourist: function(e, t, i) {
                this.activeTouristId.splice(e, 1), this.orderingInfo.spotList[t].itemList[i].touristList.splice(e, 1), this.orderingInfo.spotList[t].itemList[i].touristId.splice(e, 1)
              },
              getCommonUsedTouristList: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/queryCommonUsedTouristList").then((function(t) {
                  1 === t.code && (e.commonUsedTouristList = t.data, 0 == e.commonUsedTouristList.length && (e.modelType = 1))
                }))
              },
              addTourist: function(e, t, i, s, r) {
                this.activeIsCard = s, this.modelType = 0, this.showPassenger = !0, this.activeSpot = t, this.activeItem = i, this.activeTouristId = JSON.parse(JSON.stringify(this.orderingInfo.spotList[this.activeSpot].itemList[this.activeItem].touristId)), this.realCardTypeCodes = r, this.getCommonUsedTouristList(), this.addTouristNum = e, console.log(this.realCardTypeCodes)
              },
              closeLineing: function(e) {
                this.lineing = !1, this.hasTimeOut = !1, this.repeatCreateOrder && (clearInterval(this.repeatCreateOrder), clearInterval(this.repeatCreateOrder2)), this.repeatCreateOrder = null, this.repeatCreateOrder2 = null, this.disabledSubmitBtn = !1
              },
              check: function() {
                var e = this,
                  t = !0;
                return this.touristPhone ? this.$util.checkPhone(this.touristPhone).code ? (this.orderingInfo.spotList.forEach((function(i) {
                  i.itemList.forEach((function(i) {
                    if (i.touristId.length < i.touristNum) return e.$util.showToast("请完善游客信息"), void(t = !1)
                  }))
                })), t) : (this.$util.showToast(this.$util.checkPhone(this.touristPhone).msg), !1) : (this.$util.showToast("请填写联系手机"), !1)
              },
              submit: function() {
                if (this.check()) {
                  var e = {
                    lineId: this.orderingInfo.lineId,
                    contactsMobile: this.touristPhone,
                    addTicketOrderDTOList: []
                  };
                  this.orderingInfo.spotList.forEach((function(t) {
                    t.itemList.forEach((function(i) {
                      var s = [];
                      i.touristList.forEach((function(e) {
                        s.push({
                          name: e.name,
                          telephone: e.phone,
                          id: e.id,
                          idCard: e.idCarNo,
                          cardType: e.cardType
                        })
                      })), e.addTicketOrderDTOList.push({
                        itemId: i.itemId,
                        scenicId: t.destinationId,
                        itemName: i.itemTitle,
                        price: i.price,
                        orderAmount: i.amount,
                        returnCashCouponAmount: i.backAmount,
                        quantity: i.ticketNum,
                        ticketUseDate: i.selectedtime.date,
                        groupItemName: i.itemTitle,
                        orderPeopleList: s,
                        ticketUseEndTime: null != i.selectedtime.endTime ? i.selectedtime.endTime : "",
                        ticketUseStartTime: null != i.selectedtime.startTime ? i.selectedtime.startTime : "",
                        seckillItemId: 0 == i.seckillActivity ? i.seckillItemId : ""
                      })
                    }))
                  })), this.createOrder(e)
                }
              },
              createOrder: function(t) {
                var i = this;
                if (!this.disabledSubmitBtn || this.lineing) {
                  var s = this;
                  !s.hasTimeOut && s.timeOutInit(), this.disabledSubmitBtn = !0, !this.lineing && e.showLoading({
                    title: "预订中..."
                  }), this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/order/lineGroupOrder", t, !1).then((function(r) {
                    if (e.hideLoading(), r.msg.includes("火爆") || r.msg.includes("频繁")) return s.lineing = !0, void(s.repeatCreateOrder = setTimeout((function() {
                      s.createOrder(t)
                    }), 2e3));
                    if (1 != r.code && !r.data) return i.closeLineing(!0), i.disabledSubmitBtn = !1, void setTimeout((function() {
                      s.$util.showToast(r.msg)
                    }), 300);
                    if (1 != r.code) {
                      i.closeLineing(!0), i.disabledSubmitBtn = !1;
                      var o = r.data.addTicketOrderDTOList,
                        n = [];
                      for (var a in o) {
                        var u = o[a];
                        if (18031 == u.result.code) {
                          var d = s.errIdCard || [],
                            c = Array.from(new Set(d.concat(u.result.data)));
                          s.errIdCard = c
                        }
                        if (1 != u.result.code) {
                          var l = {
                            msg: u.result.msg,
                            groupItemName: u.groupItemName + "校验失败:"
                          };
                          if ((18022 == u.result.code || 18026 == u.result.code || u.result.msg.includes("库存不足")) && (l = {
                              msg: u.result.msg,
                              groupItemName: u.groupItemName
                            }, 0 == a && 18026 != u.result.code)) return;
                          n.push(l)
                        }
                      }
                      i.groupErrList = n, i.showGroupErr = !0
                    } else {
                      i.orderId = r.data.groupOrderId, i.closeLineing(!0);
                      var h = r.data,
                        p = h.addTicketOrderDTOList,
                        m = [],
                        g = 0;
                      p.forEach((function(e, t) {
                        1 != e.result.code ? (m.push({
                          msg: e.result.msg,
                          groupItemName: e.groupItemName + "下单失败:"
                        }), g++) : m.push({
                          msg: "",
                          groupItemName: e.groupItemName + "下单成功"
                        })
                      })), m.push({
                        groupItemName: "",
                        msg: "成功订单可前往订单列表付款"
                      }), g > 0 ? (i.groupErrList = m, i.showGroupErr = !0, h.successOrderNum > 0 && (i.errJump = !0)) : 0 != i.orderingInfo.orderAmount ? i.goPay() : (i.$util.showToast("支付成功"), setTimeout((function() {
                        e.redirectTo({
                          url: "/pages/myorder/myorder?type=0"
                        })
                      }), 1e3))
                    }
                  }))
                }
              },
              timeOutInit: function() {
                var e = this;
                this.hasTimeOut || (this.hasTimeOut = !0, e.repeatCreateOrder2 = setTimeout((function() {
                  e.hasTimeOut && (e.closeLineing(), e.$util.showToast("很抱歉，您被挤出了队伍，请重新提交"))
                }), 4e4))
              },
              confirmOrder: function() {
                this.showGroupErr = !1, this.errJump && (this.errJump = !1, e.redirectTo({
                  url: "/pages/myorder/myorder?type=0"
                }))
              },
              jumpOrderPay: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getGroupOrderDetail", {
                  groupOrderId: this.orderId
                }).then((function(i) {
                  if (1 === i.code) {
                    var s = i.data,
                      r = i.data.mainOrder;
                    e.redirectTo({
                      url: "/subPage/pages/order_pay/order_pay?count=".concat(s.realPayableAmount, "&type=groupTicket&orderId=").concat(r.orderId, "&guideCopywriting=\n\t\t\t\t\t\t&subscribeType=0&isSpecial=").concat(r.isSpecial, "&itemId=").concat(r.itemId)
                    })
                  } else t.$util.showToast(data.msg)
                }))
              },
              goPay: function() {
                var t, i = this;
                e.showLoading({
                  title: "发起支付..."
                }), this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/order/groupTicketWaitPayToPay", (t = {
                  payChannel: ""
                }, (0, r.default)(t, "payChannel", "xy_wx_mini"), (0, r.default)(t, "orderSource", 5), (0, r.default)(t, "groupOrderId", this.orderId), (0, r.default)(t, "buyerMemo", ""), (0, r.default)(t, "seriesNumber", e.getStorageSync("userInfor").openId || e.getStorageSync("wxopenid")), t), "支付中").then((function(t) {
                  if (1 !== t.code) return e.hideLoading(), i.submiting = !1, void i.$util.showToast(t.msg);
                  e.requestPayment({
                    timeStamp: t.data.timeStamp,
                    nonceStr: t.data.nonceStr,
                    package: "prepay_id=".concat(t.data.prepayid),
                    signType: t.data.signType,
                    paySign: t.data.pay_sign,
                    orderInfo: t.data.tradeNo,
                    success: function(t) {
                      var s = t.resultCode;
                      6001 != s && 4e3 != s && 6002 != s ? (i.jumpOrderPay(), i.$store.dispatch("wxInForm", ["gDlb_Lmm5UjBhe5jnstiOCTi4XfN2KOq9056Be9lDSE"]).then((function(e) {
                        i.jumpOrderPay()
                      })).catch((function(e) {
                        i.jumpOrderPay()
                      })), i.submiting = !1) : e.redirectTo({
                        url: "/pages/myorder/myorder?type=0"
                      })
                    },
                    fail: function(t) {
                      i.submiting = !1, e.redirectTo({
                        url: "/pages/myorder/myorder?type=0"
                      })
                    }
                  })
                }))
              },
              chooseCardType: function(e) {
                e != this.passenger.cardType && (this.passenger.idCarNo = ""), this.passenger.cardType = e, this.showCardPop = !1
              }
            }
          };
        t.default = o
      }).call(this, i("df3c").default)
    },
};
