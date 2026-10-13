// Extracted from subPage/pages/csOrder/csOrder.js; webpack module 9934.
// Compiled code for analysis; not an original source file.
module.exports = {
    9934: function(e, t, o) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          components: {
            EmptyState: function() {
              o.e("subPage/components/empty/empty").then(function() {
                return resolve(o("3b7a"))
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
              orderList: [],
              orderObj: "",
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
          onLoad: function(e) {},
          onShow: function() {
            this.page = 1, this.$util.isLogin("", 1) && this.pageLoad()
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
            pageLoad: function() {
              var t = this,
                o = {
                  current: this.page,
                  size: 10,
                  scenicType: 1
                };
              0 !== this.currentTab && (o.orderStatus = this.currentTab, o.cancelStatus = 0), this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/order/getMemberOrderList", o).then((function(o) {
                if (e.stopPullDownRefresh(), 1 === o.code) {
                  var n = o.data.records;
                  o.data.total > 0 ? (1 === o.data.current ? t.orderList = n : t.orderList = t.orderList.concat(n), o.data.current < o.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.orderList = [])
                }
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
                  n = "order/app/v1/order/ticketOrderCancel";
                2 != e.isSpecial && 1 != e.isSpecial || 0 != e.confirmStatus || 2 != e.orderStatus || (n = "order/app/v1/order/memberCancelSpecialTicket"), this.$uniApi.dataRequestNoLoading("GET", n, o).then((function(e) {
                  1 === e.code ? (t.page = 1, t.pageLoad(), t.$util.showToast("预约已取消"), t.closePopup()) : t.$util.showToast(e.msg)
                })).catch((function(e) {
                  t.$util.showToast(e.msg)
                }))
              } else {
                var r = {
                  orderId: e.orderId
                };
                1 === e.orderStatus ? r.cancelStatus = 1 : r.orderStatus = 4, this.$uniApi.dataRequestNoLoading("PUT", "order/app/v1/order/updateOrderStatus", r).then((function(o) {
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
            delOrder: function(t) {
              var o = this;
              e.showModal({
                title: "删除",
                content: "您确定取消该预约吗？",
                confirmColor: "#ff4643",
                success: function(e) {
                  e.confirm && o.$uniApi.getRequestNoLoading("DELETE", "order/app/v1/order?ids=".concat(t.orderId)).then((function(e) {
                    1 === e.code ? (o.orderList.forEach((function(e, n) {
                      e.orderId === t.orderId && o.orderList.splice(n, 1)
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
            orderStatusTick: function(e, t, o) {
              return 0 === e ? "新提交" : 1 === e ? "待支付" : 2 === e ? 0 != o || 1 != t && 2 != t ? "预约中" : "待确认" : 3 === e ? "待入寺" : 5 === e ? "已参观" : 8 === e ? "审核中" : 9 === e ? "部分取消" : 10 === e ? "已取消" : 11 === e ? "预约失败" : 12 === e ? "已关闭" : 13 === e ? "已过期" : void 0
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
              this.$navigateTo({
                url: "/subPack/pages/refundApply/refundApply?orderId=".concat(e)
              })
            },
            goTicket: function(e) {
              this.$navigateTo({
                url: "/subPage/pages/ticketFillOrder/ticketFillOrder?ticketId=".concat(e)
              })
            },
            goOrderDetails: function(e) {
              this.$navigateTo({
                url: "/subPage/pages/orderDetailtick/orderDetailtick?orderId=".concat(e.orderId)
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
            },
            getHomePath: function() {
              var e = -1 != getApp().globalData.requestUrl.indexOf("eshop") ? "1580852981351002114" : "1580167199644012545";
              return "/pages/spotDetailNew/spotDetailNew?spotId=".concat(e)
            }
          }
        };
        t.default = n
      }).call(this, o("df3c").default)
    },
};
