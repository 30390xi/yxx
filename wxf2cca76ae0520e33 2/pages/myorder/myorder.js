require("../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/myorder/myorder"], {
    3184: function(e, t, o) {
      (function(e, t) {
        var r = o("47a9");
        o("5366"), r(o("3240"));
        var a = r(o("c003"));
        e.__webpack_require_UNI_MP_PLUGIN__ = o, t(a.default)
      }).call(this, o("3223").default, o("df3c").createPage)
    },
    "39f6": function(e, t, o) {
      o.r(t);
      var r = o("d192"),
        a = o.n(r);
      for (var n in r)["default"].indexOf(n) < 0 && function(e) {
        o.d(t, e, (function() {
          return r[e]
        }))
      }(n);
      t.default = a.a
    },
    "5d062": function(e, t, o) {
      o.d(t, "b", (function() {
        return a
      })), o.d(t, "c", (function() {
        return n
      })), o.d(t, "a", (function() {
        return r
      }));
      var r = {
          uTabs: function() {
            return Promise.all([o.e("common/vendor"), o.e("uview-ui/components/u-tabs/u-tabs")]).then(o.bind(null, "66a6"))
          },
          uLazyLoad: function() {
            return o.e("uview-ui/components/u-lazy-load/u-lazy-load").then(o.bind(null, "5d7e"))
          },
          uniIcons: function() {
            return Promise.all([o.e("common/vendor"), o.e("components/uni-icons/uni-icons")]).then(o.bind(null, "365b"))
          },
          uLoadmore: function() {
            return o.e("uview-ui/components/u-loadmore/u-loadmore").then(o.bind(null, "2db1"))
          },
          uniPopup: function() {
            return Promise.all([o.e("common/vendor"), o.e("components/uni-popup/uni-popup")]).then(o.bind(null, "db3a"))
          },
          uToast: function() {
            return o.e("uview-ui/components/u-toast/u-toast").then(o.bind(null, "05ad"))
          }
        },
        a = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.__map(e.orderList, (function(t, o) {
              return {
                $orig: e.__get_orig(t),
                m0: (4 != t.isSpecial || 0 != t.orderStatus && 1 != t.orderStatus) && 0 == t.itemType && 1 !== t.cancelStatus ? e.orderStatusFun(t.orderStatus) : null,
                m1: (4 != t.isSpecial || 0 != t.orderStatus && 1 != t.orderStatus) && 0 != t.itemType ? e.orderStatusTick(t.orderStatus, t.isSpecial, t.confirmStatus, t.itemType) : null,
                m2: 4 == t.isSpecial && (0 == t.orderStatus || 1 == t.orderStatus) || 2 == t.itemType || !t.memberBrokerage || 1 !== t.memberBrokerage.brokerageType || 0 != t.memberBrokerage.status && 1 != t.memberBrokerage.status || t.returnCashCouponAmount || 0 != t.memberBrokerage.status ? null : e.statusVal(t.memberBrokerage.status),
                m3: 4 == t.isSpecial && (0 == t.orderStatus || 1 == t.orderStatus) || 2 == t.itemType || !t.memberBrokerage || 1 !== t.memberBrokerage.brokerageType || 0 != t.memberBrokerage.status && 1 != t.memberBrokerage.status || t.returnCashCouponAmount || 0 == t.memberBrokerage.status ? null : e.statusVal(t.memberBrokerage.status),
                l0: (4 != t.isSpecial || 0 != t.orderStatus && 1 != t.orderStatus) && 2 == t.itemType ? e.__map(t.items, (function(o, r) {
                  return {
                    $orig: e.__get_orig(o),
                    m4: e.cityName(t.fromCity),
                    m5: e.peopleText(t.peopleNumList)
                  }
                })) : null
              }
            }))),
            o = "nomore" === e.loadMore && e.orderList.length <= 0,
            r = ["loading", "nomore"].includes(e.loadMore) && e.orderList.length > 0 || "loading" == e.loadMore && 0 == e.orderList.length;
          e.$mp.data = Object.assign({}, {
            $root: {
              l1: t,
              g0: o,
              g1: r
            }
          })
        },
        n = []
    },
    a65e: function(e, t, o) {},
    b7c3: function(e, t, o) {
      var r = o("a65e");
      o.n(r).a
    },
    c003: function(e, t, o) {
      o.r(t);
      var r = o("5d062"),
        a = o("39f6");
      for (var n in a)["default"].indexOf(n) < 0 && function(e) {
        o.d(t, e, (function() {
          return a[e]
        }))
      }(n);
      o("b7c3");
      var i = o("828b"),
        s = Object(i.a)(a.default, r.b, r.c, !1, null, "6a4384f0", null, !1, r.a, void 0);
      t.default = s.exports
    },
    d192: function(e, t, o) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = {
          components: {
            EmptyState: function() {
              o.e("components/empty/empty").then(function() {
                return resolve(o("a427"))
              }.bind(null, o)).catch(o.oe)
            }
          },
          data: function() {
            return {
              page: 1,
              loadMore: "loading",
              currentTab: 0,
              tabHeight: 0,
              tabTitle: [{
                name: "全部"
              }, {
                name: "待付款"
              }, {
                name: "待发货"
              }, {
                name: "待收货"
              }],
              goodType: [{
                name: "全部",
                type: null
              }, {
                name: "门票",
                type: 1
              }, {
                name: "线路",
                type: 2
              }, {
                name: "商城",
                type: 0
              }],
              activeType: 0,
              orderList: [],
              orderObj: "",
              submiting: !1,
              causeIdx: 0,
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
              }]
            }
          },
          onLoad: function(e) {
            e.type ? this.currentTab = Number(e.type) : this.currentTab = 0, e.itemType ? this.activeType = Number(e.itemType) : this.activeType = 0, e.height ? this.tabHeight = Number(e.height) : this.tabHeight = 64
          },
          onUnload: function() {
            getApp().watchRouter()
          },
          onShow: function() {
            this.page = 1, this.pageLoad()
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          filters: {
            toFixed2: function(e) {
              return e ? Number(e).toFixed(2) : "0.00"
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            peopleText: function(e) {
              var t = "",
                o = ["", "成人", "儿童", "老人"];
              return e.forEach((function(e) {
                t += e.num + o[e.peopleType] + ","
              })), t.slice(0, -1)
            },
            cityName: function(e) {
              var t = "";
              return null == e || (e.forEach((function(e, o) {
                t += e + "/"
              })), t && (t = t.slice(0, -1) + "出发,")), t
            },
            changGoodType: function(e) {
              this.activeType = e, this.page = 1, this.pageLoad()
            },
            pageLoad: function() {
              var t = this,
                o = {
                  current: this.page,
                  buyerId: this.userInfo.memberId
                };
              this.activeType && (o.itemType = this.goodType[this.activeType].type), 0 !== this.currentTab && (o.orderStatus = this.currentTab, o.cancelStatus = 0), this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getOrderStatusListNew", o).then((function(o) {
                if (e.stopPullDownRefresh(), 1 === o.code) {
                  var r = o.data.records;
                  o.data.total > 0 ? (1 === o.data.current ? t.orderList = r : t.orderList = t.orderList.concat(r), o.data.current < o.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.orderList = [])
                }
                t.submiting = !1
              })).catch((function(t) {
                e.stopPullDownRefresh()
              }))
            },
            cancelOrder: function(e) {
              var t = this;
              if (1 == e.itemType) {
                var o = {
                    orderId: e.orderId
                  },
                  r = "order/app/v1/order/ticketOrderCancel";
                2 != e.isSpecial && 1 != e.isSpecial || 0 != e.confirmStatus || 2 != e.orderStatus || (r = "order/app/v1/order/memberCancelSpecialTicket"), this.$uniApi.dataRequestNoLoading("GET", r, o).then((function(e) {
                  1 === e.code ? (t.page = 1, t.pageLoad(), t.$util.showToast("订单已取消"), t.closePopup()) : t.$util.showToast(e.msg)
                })).catch((function(e) {
                  t.$util.showToast(e.msg)
                }))
              } else if (2 == e.itemType) {
                var a = {
                  orderId: e.orderId
                };
                this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/lineOrder/cancel", a).then((function(e) {
                  1 === e.code ? (t.page = 1, t.pageLoad(), t.$util.showToast("订单已取消"), t.closePopup()) : t.$util.showToast(e.msg)
                })).catch((function(e) {
                  t.$util.showToast(e.msg)
                }))
              } else {
                var n = {
                  orderId: e.orderId
                };
                1 === e.orderStatus ? n.cancelStatus = 1 : n.orderStatus = 4, this.$uniApi.dataRequestNoLoading("PUT", "order/app/v1/order/updateOrderStatus", n).then((function(o) {
                  1 === o.code ? (t.page = 1, t.pageLoad(), t.$refs.uToast.show({
                    title: 1 === e.orderStatus ? "已取消" : "已确认收货",
                    type: "success",
                    position: "bottom"
                  }), t.closePopup()) : t.$util.showToast(o.msg)
                })).catch((function(e) {
                  t.$util.showToast(e.msg)
                }))
              }
            },
            radioChange: function(e) {
              for (var t in this.causeList)
                if (this.causeList[t].value === e.target.value) {
                  this.current = t;
                  break
                }
            },
            delivery: function(e) {
              var t = this,
                o = {
                  orderId: e.orderId,
                  sellerId: e.sellerId
                };
              this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/order/remindDeliver", o).then((function(e) {
                1 === e.code ? t.$refs.uToast.show({
                  title: "已提醒买家发货",
                  type: "success",
                  position: "bottom"
                }) : t.$util.showToast(e.msg)
              })).catch((function(e) {
                t.$util.showToast(e.msg)
              }))
            },
            deleteOrder: function(t) {
              var o = this;
              e.showModal({
                title: "确定删除此订单？",
                content: "订单删除后无法恢复",
                confirmColor: "#ff4643",
                success: function(e) {
                  e.confirm && o.$uniApi.getRequestNoLoading("get", "order/app/v1/order/hidden/".concat(t.orderId)).then((function(e) {
                    1 === e.code ? (o.orderList.forEach((function(e, r) {
                      e.orderId === t.orderId && o.orderList.splice(r, 1)
                    })), o.deleteSetList(), o.$util.showToast("已删除")) : o.$util.showToast(e.msg)
                  })).catch((function(e) {
                    o.$util.showToast(e.msg)
                  }))
                }
              })
            },
            deleteSetList: function() {
              var t = this;
              if ("loadmore" === this.loadMore) {
                var o = {
                  current: this.page - 1,
                  buyerId: this.userInfo.memberId
                };
                this.activeType && (o.itemType = this.goodType[this.activeType].type), 0 !== this.currentTab && (o.orderStatus = this.currentTab, o.cancelStatus = 0), this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getOrderStatusListNew", o).then((function(o) {
                  if (e.stopPullDownRefresh(), 1 === o.code) {
                    o.data.total > 0 && o.data.current < o.data.pages ? t.loadMore = "loadmore" : t.loadMore = "nomore";
                    var r = o.data.records;
                    t.orderList.push(r[r.length - 1])
                  }
                }))
              }
            },
            delOrder: function(t) {
              var o = this;
              e.showModal({
                title: "删除",
                content: "您确定删除该订单吗？",
                confirmColor: "#ff4643",
                success: function(e) {
                  e.confirm && o.$uniApi.getRequestNoLoading("DELETE", "order/app/v1/order?ids=".concat(t.orderId)).then((function(e) {
                    1 === e.code ? (o.orderList.forEach((function(e, r) {
                      e.orderId === t.orderId && o.orderList.splice(r, 1)
                    })), o.$refs.uToast.show({
                      title: "已删除",
                      type: "success",
                      position: "bottom"
                    })) : o.$util.showToast(e.msg)
                  })).catch((function(e) {
                    o.$util.showToast(e.msg)
                  }))
                }
              })
            },
            tabsChange: function(e) {
              this.currentTab = e, this.page = 1, this.orderList = [], this.pageLoad()
            },
            openPopup: function(e) {
              this.orderObj = e, this.$refs.popup.open()
            },
            closePopup: function() {
              this.orderObj = "", this.$refs.popup.close()
            },
            orderStatusFun: function(e) {
              return 0 === e ? "新提交" : 1 === e ? "待支付" : 2 === e ? "已付款" : 3 === e ? "已发货" : 4 === e ? "已签收" : 5 === e ? "交易成功" : 6 === e ? "售后处理中" : 7 === e ? "售后已完成" : void 0
            },
            orderStatusTick: function(e, t, o, r) {
              return 0 === e ? "新提交" : 1 === e ? "待支付" : 2 === e ? 2 == r ? "确认中" : 0 != o || 1 != t && 2 != t ? "待出票" : "待确认" : 3 === e ? "待游玩" : 5 === e ? "订单完成" : 8 === e ? "退款审核中" : 9 === e ? "部分退款" : 10 === e ? "退款完成" : 11 === e ? "出票失败" : 12 === e ? "订单关闭" : 13 === e ? "已过期" : void 0
            },
            goStore: function(e) {
              this.$navigateTo({
                url: "/subPage/pages/storeshop/storeshop?sellerId=".concat(e)
              })
            },
            logistics: function(e) {
              this.$navigateTo({
                url: "../ordertracking/ordertracking?orderId=".concat(e)
              })
            },
            evaluation: function(e) {
              this.$navigateTo({
                url: "/subPack/pages/evaluate/evaluate?orderId=".concat(e, "&type=myorder")
              })
            },
            afterSales: function(t) {
              var o = this;
              e.showActionSheet({
                itemList: ["退货", "换货"],
                success: function(e) {
                  o.$navigateTo({
                    url: "/subPack/pages/aftercontent/aftercontent?aftersaleType=".concat(e.tapIndex + 1, "&orderId=").concat(t, "&type=myorder")
                  })
                },
                fail: function(e) {
                  console.log(e.errMsg)
                }
              })
            },
            orderRefund: function(e) {
              if (e.refundFeeDTO && e.refundFeeDTO.feeExceed) this.$util.showToast("当前订单需收取100%损失费，不支持取消");
              else {
                var t = e.orderId;
                1 != e.itemUseDescSnap.isPartialRefund || -1 == e.consumeStatus ? 2 == e.itemType ? this.$navigateTo({
                  url: "/subPack/pages/lineRefundApply/lineRefundApply?orderId=".concat(t)
                }) : this.$navigateTo({
                  url: "/subPack/pages/refundApply/refundApply?orderId=".concat(t)
                }) : this.$util.showToast("该产品不支持部分退")
              }
            },
            beforeConfirmRefund: function(t) {
              var o = this;
              if (!this.submiting) {
                if (this.submiting = !0, 1 == t.itemType) return this.$util.showToast("出票中，请稍后再试"), this.page = 1, void this.pageLoad();
                e.showModal({
                  title: "提示",
                  content: "确认要退款吗？",
                  success: function(e) {
                    e.confirm ? o.$uniApi.dataRequestYesLoading("POST", "order/app/v1/".concat("lineOrde/refundBeforeConfirmr"), {
                      orderId: t.orderId
                    }, "退款中...").then((function(e) {
                      1 === e.code ? (o.$util.showToast("退款成功"), o.page = 1, o.pageLoad()) : (o.$util.showToast(e.msg), o.submiting = !1)
                    })) : o.submiting = !1
                  }
                })
              }
            },
            goTicket: function(e, t) {
              1 == e.itemType ? this.$navigateTo({
                url: "/subPage/pages/ticket_detail/ticket_detail?itemId=" + t
              }) : this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + t
              })
            },
            goOrderDetails: function(e) {
              if (1 == e.itemType)
                if (5 === e.isSpecial) this.$navigateTo({
                  url: "/artShow/pages/orderDetail/orderDetail?orderId=".concat(e.orderId)
                });
                else {
                  if (2 == e.scenicType) return void this.$navigateTo({
                    url: "/artShow/pages/orderDetail/orderDetail?orderId=".concat(e.orderId)
                  });
                  this.$navigateTo({
                    url: "/subPage/pages/orderDetailtick/orderDetailtick?orderId=".concat(e.orderId)
                  })
                }
              else 2 == e.itemType ? this.$navigateTo({
                url: "/subPack/pages/lineOrderDetail/lineOrderDetail?orderId=".concat(e.orderId)
              }) : this.$navigateTo({
                url: "../order_details/order_details?orderId=".concat(e.orderId)
              })
            },
            statusVal: function(e) {
              return 0 === e ? "进行中" : 1 === e ? "已完成" : 2 === e ? "已失败" : void 0
            },
            goWealth: function() {
              var e = "/subPage/pages/wealth/wealth";
              this.$util.isLogin(e) && this.$navigateTo({
                url: e
              })
            },
            jumpToGear: function(e, t) {
              t ? this.$navigateTo({
                url: "/subPage/pages/snowGear/snowGear?orderId=".concat(e, "&sid=").concat(t)
              }) : this.$navigateTo({
                url: "/subPage/pages/snowGear/snowGear?orderId=" + e
              })
            }
          }
        };
        t.default = r
      }).call(this, o("df3c").default)
    }
  },
  [
    ["3184", "common/runtime", "common/vendor"]
  ]
]);
