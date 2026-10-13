require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/lineOrderDetail/lineOrderDetail"], {
    3103: function(e, n, t) {
      (function(e) {
        var o = t("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var i = o(t("7ca3")),
          a = (o(t("7e10")), {
            data: function() {
              return {
                searchHeight: 0,
                foldRemark: !1,
                safeAreaBottom: 0,
                priceInfoShow: !1,
                customerShow: !1,
                orderId: "",
                causeIdx: 0,
                detailInfo: {},
                peopleTypeList: ["", "成人", "儿童", "老人"],
                refundRuleType: ["不可退", "未验证随时退", "条件退"],
                parseStyle: {
                  p: "word-break: break-all;line-height:40rpx;color:rgba(0, 0, 0, 0.5);font-size:26rpx",
                  img: "border-radius: 20rpx;margin-top: 10rpx;"
                },
                causeList: [{
                  value: "0",
                  name: "我不想买了"
                }, {
                  value: "1",
                  name: "信息填写错误，请重拍"
                }, {
                  value: "2",
                  name: "商品无货"
                }, {
                  value: "3",
                  name: "其他原因"
                }],
                orderObj: "",
                disableSubmit: !1
              }
            },
            onReady: function() {},
            onLoad: function(e) {},
            onUnload: function() {},
            onShow: function() {
              var n = getCurrentPages(),
                t = n[n.length - 1],
                o = e.getMenuButtonBoundingClientRect();
              this.searchHeight = o.top, this.orderId = t.options.orderId, this.getOrderInfo();
              var i = this;
              this.submiting = !1, e.getSystemInfo({
                success: function(e) {
                  i.safeAreaBottom = e.safeAreaInsets.bottom
                }
              })
            },
            methods: {
              orderRefund: function(e) {
                this.$navigateTo({
                  url: "/subPack/pages/lineRefundApply/lineRefundApply?orderId=".concat(e)
                })
              },
              confirmRefund: function(n) {
                var t = this;
                this.submiting || (this.submiting = !0, e.showModal({
                  title: "提示",
                  content: "确认要退款吗？",
                  success: function(e) {
                    e.confirm ? t.$uniApi.dataRequestYesLoading("POST", "order/app/v1/lineOrder/refundBeforeConfirm", {
                      orderId: n
                    }, "退款中...").then((function(e) {
                      1 === e.code ? (t.$util.showToast("退款成功"), t.getOrderInfo(), t.submiting = !1) : (t.$util.showToast(e.msg), t.submiting = !1)
                    })) : t.submiting = !1
                  }
                }))
              },
              goPay: function(n) {
                var t, o = this;
                this.disableSubmit || (this.disableSubmit = !0, e.showLoading({
                  title: "发起支付..."
                }), this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/order/waitPayToPay", (t = {
                  payChannel: ""
                }, (0, i.default)(t, "payChannel", "xy_wx_mini"), (0, i.default)(t, "orderSource", 5), (0, i.default)(t, "orderId", n), (0, i.default)(t, "buyerMemo", ""), (0, i.default)(t, "seriesNumber", e.getStorageSync("userInfor").openId || e.getStorageSync("wxopenid")), t), "支付中").then((function(n) {
                  if (1 !== n.code) return o.submiting = !1, void o.$util.showToast(n.msg);
                  e.requestPayment({
                    timeStamp: n.data.timeStamp,
                    nonceStr: n.data.nonceStr,
                    package: "prepay_id=".concat(n.data.prepayid),
                    signType: n.data.signType,
                    paySign: n.data.pay_sign,
                    orderInfo: n.data.tradeNo,
                    success: function(n) {
                      n.resultCode, o.$util.showToast("支付成功");
                      var t = o;
                      e.requestSubscribeMessage({
                        tmplIds: ["vaaW2n2qCr5GeEy29ndpGgf02U0Ahbd012RdA45Z90A"],
                        success: function(e) {
                          t.sendWxMessage(), t.getOrderInfo()
                        },
                        fail: function(e) {
                          t.getOrderInfo()
                        }
                      }), o.submiting = !1
                    },
                    fail: function(e) {
                      o.submiting = !1
                    }
                  })
                })).catch((function(e) {})).finally((function() {
                  setTimeout((function() {
                    e.hideLoading(), o.disableSubmit = !1
                  }), 300)
                })))
              },
              sendWxMessage: function() {
                var e = {
                  orderId: this.orderId
                };
                this.$uniApi.dataRequestYesLoading("GET", "order/app/v1/lineOrder/sendWxMessage", e, "加载中..").then((function(e) {}))
              },
              cancelOrder: function(e) {
                var n = this,
                  t = {
                    orderId: e
                  };
                this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/lineOrder/cancel", t).then((function(e) {
                  1 === e.code ? (n.getOrderInfo(), n.$util.showToast("订单已取消"), n.closePopup()) : n.$util.showToast(e.msg)
                })).catch((function(e) {
                  n.$util.showToast(e.msg)
                }))
              },
              closePopup: function() {
                this.orderObj = "", this.$refs.popup.close()
              },
              openPopup: function(e) {
                this.orderObj = e, this.$refs.popup.open()
              },
              getOrderInfo: function() {
                var e = this,
                  n = {
                    orderId: this.orderId
                  };
                this.$uniApi.dataRequestYesLoading("GET", "order/app/v1/lineOrder/detail", n, "加载中..").then((function(n) {
                  1 == n.code && (e.detailInfo = n.data)
                }))
              },
              peopleText: function(e) {
                var n = "";
                if (!e) return n;
                var t = ["", "成人", "儿童", "老人"];
                return e.forEach((function(e) {
                  n += e.num + t[e.peopleType] + ","
                })), n.slice(0, -1)
              },
              cityName: function(e) {
                var n = "";
                return null == e || (e.forEach((function(e, t) {
                  n += e + "/"
                })), n && (n = n.slice(0, -1) + "出发,")), n
              },
              refundDetail: function(e) {
                this.$navigateTo({
                  url: "/pages/refundRecord/refundRecord?orderId=".concat(e, "&cs=").concat(1 == this.detailInfo.scenicType ? 1 : "", "&isLineProduct=1")
                })
              },
              queryPhone: function(e, n) {
                e ? (n.isClose = !1, n.contactTel = n.beforePhone) : this.$uniApi.dataRequestNoLoading("POST", "base/v1/common/getAppPhone", {
                  phone: n.enContactTel
                }).then((function(e) {
                  n.beforePhone = n.contactTel, n.isClose = !0, n.contactTel = e.data
                }))
              },
              queryIdCard: function(e, n) {
                e ? (n.isCloseId = !1, n.idCard = n.beformCard) : this.$uniApi.dataRequestNoLoading("POST", "base/v1/common/getAppIdCard", {
                  idCard: n.enIdCard
                }).then((function(e) {
                  n.beformCard = n.idCard, n.isCloseId = !0, n.idCard = e.data
                }))
              },
              orderStatusTick: function(e) {
                return 0 === e ? "新提交" : 1 === e ? "待支付" : 2 === e ? "确认中" : 3 === e ? "待游玩" : 5 === e ? "订单完成" : 8 === e ? "退款审核中" : 9 === e ? "部分退款" : 10 === e ? "退款完成" : 11 === e ? "出票失败" : 12 === e ? "订单关闭" : 13 === e ? "已过期" : void 0
              },
              orderPayChannel: function(e) {
                return "alipay" == e || "alipay_mini" == e ? "支付宝" : "wx" === e || "wxapp" === e || "xy_wx_mini" === e ? "微信" : "pos" == e ? "线下POS机" : "unionpay" == e ? "银联在线" : "tenpay" == e ? "财付通" : "99bill" == e ? "快钱" : e
              },
              goTravelAgency: function(e) {
                this.$navigateTo({
                  url: "/subPack/pages/travelAgency/travelAgency?travelAgencyId=" + e
                })
              },
              priceInfo: function() {
                this.priceInfoShow = !0
              },
              getCustomer: function() {
                this.customerShow = !0
              },
              back: function() {
                e.navigateBack()
              }
            }
          });
        n.default = a
      }).call(this, t("df3c").default)
    },
    "33e1": function(e, n, t) {
      t.r(n);
      var o = t("3103"),
        i = t.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        t.d(n, e, (function() {
          return o[e]
        }))
      }(a);
      n.default = i.a
    },
    "54c2": function(e, n, t) {
      (function(e, n) {
        var o = t("47a9");
        t("5366"), o(t("3240"));
        var i = o(t("f859"));
        e.__webpack_require_UNI_MP_PLUGIN__ = t, n(i.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    "74a1": function(e, n, t) {
      var o = t("86d1");
      t.n(o).a
    },
    "86d1": function(e, n, t) {},
    dc04: function(e, n, t) {
      t.d(n, "b", (function() {
        return i
      })), t.d(n, "c", (function() {
        return a
      })), t.d(n, "a", (function() {
        return o
      }));
      var o = {
          uniIcons: function() {
            return Promise.all([t.e("common/vendor"), t.e("components/uni-icons/uni-icons")]).then(t.bind(null, "365b"))
          },
          uParse: function() {
            return Promise.all([t.e("common/vendor"), t.e("uview-ui/components/u-parse/u-parse")]).then(t.bind(null, "7217"))
          },
          uIcon: function() {
            return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null, "61be"))
          },
          uniPopup: function() {
            return Promise.all([t.e("common/vendor"), t.e("components/uni-popup/uni-popup")]).then(t.bind(null, "db3a"))
          },
          uPopup: function() {
            return t.e("uview-ui/components/u-popup/u-popup").then(t.bind(null, "39fb"))
          }
        },
        i = function() {
          var e = this,
            n = (e.$createElement, e._self._c, e.orderStatusTick(e.detailInfo.orderStatus)),
            t = 8 == e.detailInfo.orderStatus || 9 == e.detailInfo.orderStatus || 10 == e.detailInfo.orderStatus ? e.orderStatusTick(e.detailInfo.orderStatus) : null,
            o = e.cityName(e.detailInfo.fromCity),
            i = e.peopleText(e.detailInfo.peopleNumList),
            a = null != e.detailInfo.payChannel ? e.orderPayChannel(e.detailInfo.payChannel) : null;
          e._isMounted || (e.e0 = function(n) {
            e.foldRemark = !e.foldRemark
          }), e.$mp.data = Object.assign({}, {
            $root: {
              m0: n,
              m1: t,
              m2: o,
              m3: i,
              m4: a
            }
          })
        },
        a = []
    },
    f859: function(e, n, t) {
      t.r(n);
      var o = t("dc04"),
        i = t("33e1");
      for (var a in i)["default"].indexOf(a) < 0 && function(e) {
        t.d(n, e, (function() {
          return i[e]
        }))
      }(a);
      t("74a1");
      var r = t("828b"),
        u = Object(r.a)(i.default, o.b, o.c, !1, null, "300a0028", null, !1, o.a, void 0);
      n.default = u.exports
    }
  },
  [
    ["54c2", "common/runtime", "common/vendor"]
  ]
]);
