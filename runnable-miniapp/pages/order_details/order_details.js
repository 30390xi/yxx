(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/order_details/order_details"], {
    "0a00": function(e, t, o) {
      o.r(t);
      var n = o("dbd1"),
        a = o.n(n);
      for (var r in n)["default"].indexOf(r) < 0 && function(e) {
        o.d(t, e, (function() {
          return n[e]
        }))
      }(r);
      t.default = a.a
    },
    "6f70": function(e, t, o) {
      o.r(t);
      var n = o("7e0d"),
        a = o("0a00");
      for (var r in a)["default"].indexOf(r) < 0 && function(e) {
        o.d(t, e, (function() {
          return a[e]
        }))
      }(r);
      o("8a47");
      var i = o("828b"),
        s = Object(i.a)(a.default, n.b, n.c, !1, null, "23c28ed1", null, !1, n.a, void 0);
      t.default = s.exports
    },
    "7e0d": function(e, t, o) {
      o.d(t, "b", (function() {
        return a
      })), o.d(t, "c", (function() {
        return r
      })), o.d(t, "a", (function() {
        return n
      }));
      var n = {
          uniIcons: function() {
            return Promise.all([o.e("common/vendor"), o.e("components/uni-icons/uni-icons")]).then(o.bind(null, "365b"))
          },
          uLazyLoad: function() {
            return o.e("uview-ui/components/u-lazy-load/u-lazy-load").then(o.bind(null, "5d7e"))
          },
          uniTag: function() {
            return o.e("components/uni-tag/uni-tag").then(o.bind(null, "33fb9"))
          },
          uniPopup: function() {
            return Promise.all([o.e("common/vendor"), o.e("components/uni-popup/uni-popup")]).then(o.bind(null, "db3a"))
          },
          uSkeleton: function() {
            return o.e("uview-ui/components/u-skeleton/u-skeleton").then(o.bind(null, "70d2"))
          },
          uToast: function() {
            return o.e("uview-ui/components/u-toast/u-toast").then(o.bind(null, "05ad"))
          }
        },
        a = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.orderStatusFun(e.orderDetails)),
            o = e._f("mobileSubstr")(e.orderDetails.contactMobile),
            n = e.orderBack ? e.statusVal(e.brokerageIncome.status) : null,
            a = 0 !== e.orderDetails.orderStatus && 1 !== e.orderDetails.orderStatus && 12 != e.orderDetails.orderStatus ? e.payChannelFun(e.orderDetails.payChannel) : null;
          e.$mp.data = Object.assign({}, {
            $root: {
              m0: t,
              f0: o,
              m1: n,
              m2: a
            }
          })
        },
        r = []
    },
    "8a47": function(e, t, o) {
      var n = o("faa0");
      o.n(n).a
    },
    "98e0": function(e, t, o) {
      (function(e, t) {
        var n = o("47a9");
        o("5366"), n(o("3240"));
        var a = n(o("6f70"));
        e.__webpack_require_UNI_MP_PLUGIN__ = o, t(a.default)
      }).call(this, o("3223").default, o("df3c").createPage)
    },
    dbd1: function(e, t, o) {
      (function(e, o) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          data: function() {
            return {
              loadingStatus: !0,
              orderDetails: {},
              causeIdx: 0,
              brokerageIncome: {},
              orderBack: !1,
              submiting: !1,
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
              payTime: {
                minutes: "00",
                second: "00"
              }
            }
          },
          onLoad: function(e) {
            e.orderId && (this.orderId = e.orderId)
          },
          onUnload: function() {
            clearInterval(this._payTimeTimer)
          },
          onPullDownRefresh: function() {
            this.pageLoad(), this.getOrderBrokerageIncome()
          },
          onShow: function() {
            this.pageLoad(), this.getOrderBrokerageIncome()
          },
          filters: {
            toFixed2: function(e) {
              return e ? Number(e).toFixed(2) : "0.00"
            },
            mobileSubstr: function(e) {
              return e ? e.substr(0, 3) + "****" + e.substr(7) : "-"
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            startTimer: function() {
              var e = this.orderDetails.countdownTime.split(":"),
                t = 60 * Number(e[0]) + Number(e[1]);
              this._secondNum = t, this._payTimeTimer = setInterval(this.daoJiShi, 1e3)
            },
            daoJiShi: function() {
              this._secondNum <= 0 ? (clearInterval(this._payTimeTimer), this.payTime = {
                minutes: "00",
                second: "00"
              }) : this.payTime = {
                minutes: parseInt(this._secondNum / 60),
                second: parseInt(this._secondNum % 60)
              }, this._secondNum--
            },
            pageLoad: function() {
              var t = this;
              this.loadingStatus = !0, this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/order/selectOrderDetaile", {
                orderId: this.orderId
              }).then((function(o) {
                t.loadingStatus = !1, e.stopPullDownRefresh(), 1 === o.code ? t.orderDetails = o.data : t.$util.showToast(o.msg)
              }))
            },
            getOrderBrokerageIncome: function() {
              var e = this,
                t = {
                  orderId: this.orderId
                };
              this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/memberBrokerage/getOrderBrokerageIncome", t).then((function(t) {
                if (o.stopPullDownRefresh(), 1 === t.code) {
                  var n = t.data;
                  !n || 1 !== n.brokerageType || 0 != n.status && 1 != n.status || (e.orderBack = !0, e.brokerageIncome = n)
                }
              })).catch((function(e) {
                o.stopPullDownRefresh()
              }))
            },
            goPay: function() {
              var e = this;
              this.submiting || (this.submiting = !0, o.login({
                success: function(t) {
                  e.$uniApi.getRequestYesLoading("GET", "manager/app/v1/wxPopular/getSessionKeyPro/".concat(t.code), "请求中").then((function(t) {
                    1 === t.code ? (e.orderGenerateToPaySmall(t.data.openid), console.log("获取openid", t.data)) : (e.$util.showToast(t.msg), e.submiting = !1)
                  })).catch((function(t) {
                    e.submiting = !1, e.$util.showToast(t.msg)
                  }))
                }
              }))
            },
            orderGenerateToPaySmall: function(e) {
              var t = this,
                n = {
                  orderId: this.orderDetails.orderId,
                  payChannel: "",
                  seriesNumber: e,
                  orderSource: 5
                };
              this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/order/waitPayToPay", n, "支付中").then((function(e) {
                1 === e.code ? o.requestPayment({
                  timeStamp: e.data.timeStamp,
                  nonceStr: e.data.nonceStr,
                  package: "prepay_id=".concat(e.data.prepayid),
                  signType: e.data.signType,
                  paySign: e.data.pay_sign,
                  success: function(e) {
                    t.submiting = !1, console.log("success:" + JSON.stringify(e)), o.redirectTo({
                      url: "/subPage/pages/order_pay/order_pay?count=".concat(t.orderDetails.count)
                    })
                  },
                  fail: function(e) {
                    t.submiting = !1, console.log("fail:" + JSON.stringify(e)), t.$util.goBack()
                  }
                }) : (t.$util.showToast(e.msg), t.submiting = !1)
              })).catch((function(e) {
                t.$util.showToast(e.msg), t.submiting = !1
              }))
            },
            delivery: function() {
              var e = this,
                t = {
                  orderId: this.orderDetails.orderId,
                  sellerId: this.orderDetails.sellerId
                };
              this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/order/remindDeliver", t).then((function(t) {
                1 === t.code ? e.$refs.uToast.show({
                  title: "已提醒买家发货",
                  type: "success",
                  position: "bottom"
                }) : e.$util.showToast(t.msg)
              })).catch((function(t) {
                e.$util.showToast(t.msg)
              }))
            },
            delOrder: function() {
              var e = this;
              o.showModal({
                title: "确认删除订单？",
                content: "您确定删除该订单吗？",
                confirmColor: "#ff4643",
                success: function(t) {
                  t.confirm && e.$uniApi.getRequestNoLoading("DELETE", "order/app/v1/order?ids=".concat(e.orderDetails.orderId)).then((function(t) {
                    1 === t.code ? (e.$util.prevPage(), e.$refs.uToast.show({
                      title: "已删除",
                      type: "success",
                      position: "bottom"
                    })) : e.$util.showToast(t.msg)
                  })).catch((function(t) {
                    e.$util.showToast(t.msg)
                  }))
                }
              })
            },
            cancelOrder: function() {
              var e = this,
                t = {
                  orderId: this.orderDetails.orderId
                };
              1 === this.orderDetails.orderStatus ? t.cancelStatus = 1 : t.orderStatus = 4, this.$uniApi.dataRequestNoLoading("PUT", "order/app/v1/order/updateOrderStatus", t).then((function(t) {
                if (1 === t.code) {
                  var o = getCurrentPages(),
                    n = o[o.length - 2];
                  n.$vm.page = 1, n.$vm.pageLoad(), 1 === e.orderDetails.orderStatus ? e.orderDetails.cancelStatus = 1 : e.orderDetails.orderStatus = 5, e.$refs.uToast.show({
                    title: 1 === e.orderDetails.orderStatus ? "已取消" : "已确认收货",
                    type: "success",
                    position: "bottom"
                  }), e.closePopup()
                } else e.$util.showToast(t.msg)
              })).catch((function(t) {
                e.$util.showToast(t.msg)
              }))
            },
            radioChange: function(e) {
              for (var t in this.causeList)
                if (this.causeList[t].value === e.target.value) {
                  this.current = t;
                  break
                }
            },
            openPopup: function() {
              this.$refs.popup.open()
            },
            closePopup: function() {
              this.$refs.popup.close()
            },
            setClipboardData: function() {
              o.setClipboardData({
                data: this.orderDetails.orderNo
              })
            },
            evaluation: function(e) {
              this.$navigateTo({
                url: "/subPack/pages/evaluate/evaluate?orderId=".concat(e)
              })
            },
            afterSales: function(e) {
              var t = this;
              o.showActionSheet({
                itemList: ["退货", "换货"],
                success: function(o) {
                  t.$navigateTo({
                    url: "/subPack/pages/aftercontent/aftercontent?aftersaleType=".concat(o.tapIndex + 1, "&orderId=").concat(e)
                  })
                },
                fail: function(e) {
                  console.log(e.errMsg)
                }
              })
            },
            logistics: function(e) {
              this.$navigateTo({
                url: "../ordertracking/ordertracking?orderId=".concat(e)
              })
            },
            orderStatusFun: function(e) {
              return 1 === e.cancelStatus ? "交易关闭" : 0 === e.orderStatus ? "新提交" : 1 === e.orderStatus ? "待支付" : 2 === e.orderStatus ? "已付款" : 3 === e.orderStatus ? "已发货" : 4 === e.orderStatus ? "已签收" : 5 === e.orderStatus ? "交易成功" : 6 === e.orderStatus ? "售后处理中" : 7 === e.orderStatus ? "售后已完成" : void 0
            },
            payChannelFun: function(e) {
              return "alipay" === e || "alipay_mini" == e ? "支付宝" : "wx" === e || "wxapp" === e || "xy_wx_mini" === e ? "微信" : "其它"
            },
            statusVal: function(e) {
              return 0 === e ? "进行中" : 1 === e ? "已完成" : 2 === e ? "已失败" : void 0
            },
            goWealth: function() {
              var e = "/subPage/pages/wealth/wealth";
              this.$util.isLogin(e) && this.$navigateTo({
                url: e
              })
            }
          }
        };
        t.default = n
      }).call(this, o("3223").default, o("df3c").default)
    },
    faa0: function(e, t, o) {}
  },
  [
    ["98e0", "common/runtime", "common/vendor"]
  ]
]);
