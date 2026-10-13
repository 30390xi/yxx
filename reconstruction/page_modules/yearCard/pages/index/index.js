// Extracted from yearCard/pages/index/index.js; webpack module "693e".
// Compiled code for analysis; not an original source file.
module.exports = {
    "693e": function(e, t, r) {
      (function(e) {
        var n = r("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = n(r("7eb4")),
          o = n(r("7ca3")),
          i = n(r("ee10")),
          u = r("9b61"),
          c = r("fa61"),
          s = r("767f");

        function d(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
          }
          return r
        }
        var l = [{
          img: "https://eshopfile.zhiyousx.com/2023102817234160820.png",
          title: "我的卡包",
          path: "/yearCard/pages/myCard/myCard"
        }, {
          img: "https://eshopfile.zhiyousx.com/2023102817233404866.png",
          title: "兑换绑定",
          path: "/yearCard/pages/exchangeCard/exchangeCard"
        }, {
          img: "https://eshopfile.zhiyousx.com/2023102817232761502.png",
          title: "激活使用",
          path: "/yearCard/pages/activationCard/activationCard"
        }, {
          img: "https://eshopfile.zhiyousx.com/2023102817232166744.png",
          title: "验证入园",
          path: "/yearCard/pages/entryGarden/entryGarden"
        }];
        var f = {
          name: "index",
          components: {
            cardList: function() {
              r.e("yearCard/pages/index/components/cardList").then(function() {
                return resolve(r("e69f"))
              }.bind(null, r)).catch(r.oe)
            },
            swiperCard: function() {
              r.e("yearCard/pages/index/components/swiperCard").then(function() {
                return resolve(r("f503"))
              }.bind(null, r)).catch(r.oe)
            },
            calculator: function() {
              r.e("yearCard/components/calculator").then(function() {
                return resolve(r("a217"))
              }.bind(null, r)).catch(r.oe)
            },
            customNav: function() {
              Promise.all([r.e("yearCard/common/vendor"), r.e("yearCard/components/customNav")]).then(function() {
                return resolve(r("4105"))
              }.bind(null, r)).catch(r.oe)
            },
            reviewPopup: function() {
              r.e("yearCard/pages/index/components/reviewPopup").then(function() {
                return resolve(r("c7a0"))
              }.bind(null, r)).catch(r.oe)
            },
            noCardModule: function() {
              r.e("yearCard/pages/index/components/noCardModule").then(function() {
                return resolve(r("adcd"))
              }.bind(null, r)).catch(r.oe)
            },
            MyLoading: function() {
              r.e("yearCard/components/loading").then(function() {
                return resolve(r("35e6"))
              }.bind(null, r)).catch(r.oe)
            },
            association: function() {
              r.e("yearCard/pages/index/components/association").then(function() {
                return resolve(r("5472"))
              }.bind(null, r)).catch(r.oe)
            }
          },
          data: function() {
            return {
              tagList: l,
              calculatorShow: !1,
              selectCardShow: !1,
              selectList: new Array(10).fill().map((function(e, t) {
                return {
                  label: t + 1,
                  value: t + 1
                }
              })),
              purchaseNum: 1,
              scrollTop: 0,
              reviewPopupShow: !1,
              noCardModuleShow: !1,
              currentCardInfo: {},
              calcData: {},
              offsetTop: getApp().globalData.CustomBar,
              timer: null,
              list: [],
              loadingShow: !1,
              loadingErrText: "",
              totalNum: 0,
              waitActiveNum: 0,
              shareMemberId: ""
            }
          },
          onPageScroll: function(e) {
            this.scrollTop = e.scrollTop
          },
          onShareAppMessage: function() {
            return {
              title: "游陕西年卡",
              path: "/yearCard/pages/index/index",
              imageUrl: "https://eshopfile.zhiyousx.com/2023112714374536874.jpg"
            }
          },
          destroyed: function() {
            this.cleanup()
          },
          onLoad: function(e) {
            e.scene ? this.shareMemberId = e.scene : this.shareMemberId = e.shareMemberId, this.getList()
          },
          onShow: function() {
            e.getStorageSync("token") ? this.getUserYearCardNum() : (this.totalNum = 0, this.waitActiveNum = 0)
          },
          methods: {
            getList: function() {
              var e = this;
              return (0, i.default)(a.default.mark((function t() {
                var r;
                return a.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, (0, s.yearCardListApi)();
                    case 2:
                      r = t.sent, e.list = r.data, e.list.length && e.$nextTick((function() {
                        e.checkedCard(e.list[0])
                      }));
                    case 5:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            showCard: function() {
              this.currentCardInfo.stockStatus > 0 && (this.selectCardShow = !0)
            },
            getCalcData: function(e, t) {
              this.currentCardInfo.stockStatus = t, this.calcData = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? d(Object(r), !0).forEach((function(t) {
                    (0, o.default)(e, t, r[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                  }))
                }
                return e
              }({
                buyFlag: this.currentCardInfo.buyFlag,
                stockStatus: this.currentCardInfo.stockStatus
              }, e)
            },
            checkedCard: function(e) {
              this.currentCardInfo = e, this.$refs.cardList.getYearCardDetail(this.currentCardInfo.yearCardId)
            },
            handlePurchaseBefore: function() {
              this.reviewPopupShow = !0
            },
            handleJump: function(t) {
              var r = this;
              return (0, i.default)(a.default.mark((function n() {
                return a.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      if (r.$util.isLogin("/yearCard/pages/index/index")) {
                        n.next = 2;
                        break
                      }
                      return n.abrupt("return");
                    case 2:
                      if (t !== l[3].path) {
                        n.next = 8;
                        break
                      }
                      return n.next = 5, (0, s.getCardListApi)({
                        status: 3
                      });
                    case 5:
                      if (0 !== n.sent.data.length) {
                        n.next = 8;
                        break
                      }
                      return n.abrupt("return", r.noCardModuleShow = !0);
                    case 8:
                      if (t !== l[2].path) {
                        n.next = 14;
                        break
                      }
                      return n.next = 11, (0, s.getCardListApi)({
                        status: 2,
                        activeFlag: !0
                      });
                    case 11:
                      if (0 !== n.sent.data.length) {
                        n.next = 14;
                        break
                      }
                      return n.abrupt("return", e.showToast({
                        title: "当前没有待激活的卡片",
                        icon: "none"
                      }));
                    case 14:
                      e.navigateTo({
                        url: t
                      });
                    case 15:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            openCalculator: function() {
              this.calculatorShow = !0
            },
            confirm: function(e) {
              this.purchaseNum = e[0].value
            },
            queryOrderStatus: function(t) {
              var r = this;
              return (0, i.default)(a.default.mark((function n() {
                var o;
                return a.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      return r.timer && r.cleanup(), n.next = 3, (0, s.queryOrderStatusApi)(t);
                    case 3:
                      if (1 === (o = n.sent).code) {
                        n.next = 8;
                        break
                      }
                      return r.loadingErrText = o.msg, setTimeout((function() {
                        r.loadingShow = !1
                      }), 2e3), n.abrupt("return");
                    case 8:
                      if ([1, 2, 3].includes(o.data)) {
                        n.next = 12;
                        break
                      }
                      return r.loadingErrText = "制卡失败，请重新购买", setTimeout((function() {
                        r.loadingShow = !1
                      }), 2e3), n.abrupt("return");
                    case 12:
                      if (3 !== o.data) {
                        n.next = 16;
                        break
                      }
                      return r.loadingShow = !1, r.loadingErrText = "", n.abrupt("return", e.navigateTo({
                        url: "/yearCard/pages/activationCard/activationCard?orderId=" + t
                      }));
                    case 16:
                      r.timer = setTimeout((function() {
                        r.queryOrderStatus(t)
                      }), 3e3);
                    case 17:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            cleanup: function() {
              clearTimeout(this.timer)
            },
            handlePurchase: (0, c.throttle)((0, i.default)(a.default.mark((function t() {
              var r;
              return a.default.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, (0, c.subScribeMsg)([1, 2, 3]);
                  case 3:
                    return t.next = 5, (0, u.paymentApi)({
                      yearCardId: this.currentCardInfo.yearCardId,
                      price: this.currentCardInfo.sellPrice,
                      quantity: this.purchaseNum,
                      orderAmount: 100 * this.currentCardInfo.sellPrice * this.purchaseNum / 100
                    });
                  case 5:
                    return r = t.sent, this.reviewPopupShow = !1, this.loadingShow = !0, this.loadingErrText = "", t.next = 11, this.queryOrderStatus(r.data.orderId);
                  case 11:
                    t.next = 16;
                    break;
                  case 13:
                    t.prev = 13, t.t0 = t.catch(0), t.t0.hideToast && e.navigateTo({
                      url: "/yearCard/pages/myCard/myCard?tag=1"
                    });
                  case 16:
                  case "end":
                    return t.stop()
                }
              }), t, this, [
                [0, 13]
              ])
            })))),
            getUserYearCardNum: function() {
              var e = this;
              return (0, i.default)(a.default.mark((function t() {
                var r;
                return a.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, (0, s.getUserYearCardNumApi)();
                    case 2:
                      r = t.sent, console.log(r), r.data && (e.totalNum = r.data.totalNum || 0, e.waitActiveNum = r.data.waitActiveNum || 0);
                    case 5:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            }
          }
        };
        t.default = f
      }).call(this, r("df3c").default)
    },
};
