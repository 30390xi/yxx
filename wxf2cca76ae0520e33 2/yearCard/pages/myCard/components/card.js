require("../../../../@babel/runtime/helpers/Arrayincludes"), require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/pages/myCard/components/card"], {
    "3b43": function(e, t, a) {
      (function(e) {
        var n = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = n(a("7eb4")),
          s = n(a("7ca3")),
          i = n(a("ee10")),
          o = a("767f"),
          u = a("9b61"),
          c = a("fa61");

        function d(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), a.push.apply(a, n)
          }
          return a
        }

        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2 ? d(Object(a), !0).forEach((function(t) {
              (0, s.default)(e, t, a[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
            }))
          }
          return e
        }
        var f = {
          components: {
            calculator: function() {
              a.e("yearCard/components/calculator").then(function() {
                return resolve(a("a217"))
              }.bind(null, a)).catch(a.oe)
            },
            MyLoading: function() {
              a.e("yearCard/components/loading").then(function() {
                return resolve(a("35e6"))
              }.bind(null, a)).catch(a.oe)
            }
          },
          props: {
            status: {
              type: Number,
              default: 1
            },
            info: {
              type: Object,
              default: function() {}
            }
          },
          computed: {
            getTime: function() {
              if (1 === this.status) {
                var e = (Date.parse(this.info.createTime) + 18e5 - (new Date).getTime()) / 1e3;
                return e < 0 && this.handEnd(), e
              }
            }
          },
          watch: {
            status: {
              immediate: !0,
              deep: !0,
              handler: function() {
                this.status && this.init()
              }
            }
          },
          data: function() {
            var e = this;
            return {
              butList: [],
              statusName: "",
              calculatorShow: !1,
              calcData: {},
              isFinite: !1,
              effectiveEndDateZh: "",
              modelOptions: {
                type: 1,
                content: "",
                show: !1,
                showCancelButton: !1,
                cancel: function() {
                  return e.modelOptions.show = !1
                }
              },
              timer: null,
              loadingShow: !1,
              loadingErrText: ""
            }
          },
          destroyed: function() {
            this.cleanup()
          },
          methods: {
            goBadge: function() {
              e.navigateTo({
                url: "/yearCard/pages/badge/badge?userYearCardId=" + this.info.userYearCardId + "&usedTicketNum=" + (this.info.saveMoneyVO.usedTicketNum || 0) + "&totalMoney=" + (this.info.saveMoneyVO.totalMoney || 0)
              })
            },
            handleClickParent: function() {
              var e = this.butList.length;
              if (e) {
                var t = this.butList[e - 1];
                this.handleJump(t)
              }
            },
            handEnd: function() {
              this.butList = [{
                label: "删除年卡",
                class: "button",
                path: "",
                customKey: "delete"
              }]
            },
            openCalculator: function() {
              var e = this;
              return (0, i.default)(r.default.mark((function t() {
                var a;
                return r.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, (0, o.getSaveMoneyApi)({
                        userYearCardId: e.info.userYearCardId
                      });
                    case 2:
                      a = t.sent, e.calcData = l(l({}, a.data), {}, {
                        detailVOList: a.data.apiSaveMoneyDetailResps.map((function(e) {
                          return l(l({}, e), {}, {
                            scenicName: e.scenicName || e.ticketName,
                            cost: e.retailPrice * e.useNum
                          })
                        }))
                      }), e.calculatorShow = !0;
                    case 5:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            init: function() {
              switch (this.isFinite = Date.parse(this.info.effectiveStartDate) > (new Date).getTime(), this.effectiveEndDateZh = this.$u.timeFormat(Date.parse(this.info.effectiveEndDate), "yyyy年mm月dd日"), this.status) {
                case 1:
                  this.butList = [{
                    label: "取消订单",
                    class: "button",
                    path: "",
                    customKey: "cancel"
                  }, {
                    label: "付款",
                    class: "button red",
                    path: "",
                    customKey: "pay"
                  }], this.statusName = "待付款";
                  break;
                case 2:
                  this.butList = [{
                    label: "申请退卡",
                    class: "button",
                    path: "",
                    customKey: "refund"
                  }, {
                    label: "激活",
                    class: "button  plain-red",
                    path: "/yearCard/pages/activationCard/activationCard"
                  }], (0, c.isEffective)(this.info.activeStartTime, this.info.activeEndTime) || (this.butList = []), this.statusName = "待激活";
                  break;
                case 4:
                  this.butList = [{
                    label: "刷新",
                    class: "button  plain-red",
                    customKey: "refresh"
                  }], this.statusName = "制卡中";
                  break;
                case 5:
                  this.butList = [{
                    label: "删除年卡",
                    class: "button",
                    path: "",
                    customKey: "delete"
                  }, {
                    label: "使用记录",
                    class: "button",
                    path: "/yearCard/pages/cardRecord/cardRecord"
                  }], this.statusName = "已过期";
                  break;
                case 6:
                  this.butList = [{
                    label: "删除年卡",
                    class: "button",
                    path: "",
                    customKey: "delete"
                  }, {
                    label: "使用记录",
                    class: "button",
                    path: "/yearCard/pages/cardRecord/cardRecord"
                  }], this.statusName = "已作废";
                  break;
                case 7:
                  this.butList = [], this.statusName = "退款审核中";
                  break;
                case 8:
                  this.butList = [], this.statusName = "已挂失";
                  break;
                default:
                  this.butList = [{
                    label: "使用记录",
                    class: "button",
                    path: "/yearCard/pages/cardRecord/cardRecord"
                  }, {
                    label: "去使用",
                    class: "button",
                    path: "/yearCard/pages/entryGarden/entryGarden"
                  }], this.statusName = "已激活"
              }
            },
            handleJump: function(t) {
              var a = t.path,
                n = t.customKey;
              return "refresh" === n ? this.$emit("reset") : "cancel" === n ? this.handleCancel() : "pay" === n ? this.handlePay() : "refund" === n ? this.handleRefund() : "delete" === n ? this.handleDelete() : void e.navigateTo({
                url: a + "?cardCode=" + this.info.cardCode + "&userYearCardId=" + this.info.userYearCardId
              })
            },
            handleDelete: function() {
              var e = this;
              return (0, i.default)(r.default.mark((function t() {
                return r.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      e.modelOptions.type = 4, e.modelOptions.content = "请确认是否删除该年卡，删除后该年卡数据均会清除。", e.modelOptions.show = !0, e.modelOptions.showCancelButton = !0;
                    case 4:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            handleDeleteAfter: function() {
              var t = this;
              return (0, i.default)(r.default.mark((function a() {
                var n;
                return r.default.wrap((function(a) {
                  for (;;) switch (a.prev = a.next) {
                    case 0:
                      return a.next = 2, (0, o.deleteCardApi)({
                        userYearCardId: t.info.userYearCardId
                      });
                    case 2:
                      if (1 === (n = a.sent).code) {
                        a.next = 5;
                        break
                      }
                      return a.abrupt("return", e.showToast({
                        title: n.msg,
                        icon: "none"
                      }));
                    case 5:
                      e.showToast({
                        title: "删除成功",
                        icon: "none"
                      }), t.$emit("reset");
                    case 7:
                    case "end":
                      return a.stop()
                  }
                }), a)
              })))()
            },
            handleConfirm: function() {
              var e = this;
              return (0, i.default)(r.default.mark((function t() {
                return r.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      if (4 !== e.modelOptions.type) {
                        t.next = 2;
                        break
                      }
                      return t.abrupt("return", e.handleDeleteAfter());
                    case 2:
                      e.handleRefundAfter();
                    case 3:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            handleRefundAfter: function() {
              var t = this;
              return (0, i.default)(r.default.mark((function a() {
                var n;
                return r.default.wrap((function(a) {
                  for (;;) switch (a.prev = a.next) {
                    case 0:
                      if (1 !== t.modelOptions.type) {
                        a.next = 7;
                        break
                      }
                      return a.next = 3, (0, o.refundApi)({
                        userYearCardId: t.info.userYearCardId
                      });
                    case 3:
                      if (1 === (n = a.sent).code) {
                        a.next = 6;
                        break
                      }
                      return a.abrupt("return", e.showToast({
                        title: n.msg,
                        icon: "none"
                      }));
                    case 6:
                      t.$emit("reset");
                    case 7:
                      t.modelOptions.cancel();
                    case 8:
                    case "end":
                      return a.stop()
                  }
                }), a)
              })))()
            },
            handleRefund: (0, c.throttle)((0, i.default)(r.default.mark((function t() {
              var a, n, s, i;
              return r.default.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (a = 1, n = "", s = !1, 2 !== this.info.buyType) {
                      t.next = 9;
                      break
                    }
                    a = 3, n = "此年卡您通过第三方合作平台预订，请前往购买平台根据退款规则申请退款。", s = !1, t.next = 15;
                    break;
                  case 9:
                    return t.next = 11, (0, o.getRefundAmountApi)({
                      userYearCardId: this.info.userYearCardId
                    });
                  case 11:
                    if (1 === (i = t.sent).code) {
                      t.next = 14;
                      break
                    }
                    return t.abrupt("return", e.showToast({
                      title: i.msg,
                      icon: "none"
                    }));
                  case 14:
                    i.data.refundAmount <= 0 ? (a = 2, n = "抱歉，该年卡已过退卡申请时效。", s = !1) : (a = 1, n = "请确认是否申请年卡退款。", s = !0);
                  case 15:
                    this.modelOptions.type = a, this.modelOptions.content = n, this.modelOptions.show = !0, this.modelOptions.showCancelButton = s;
                  case 19:
                  case "end":
                    return t.stop()
                }
              }), t, this)
            })))),
            handleCancel: (0, c.throttle)((0, i.default)(r.default.mark((function t() {
              var a;
              return r.default.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, (0, o.cancelOrderApi)({
                      orderId: this.info.orderId
                    });
                  case 2:
                    if (1 === (a = t.sent).code) {
                      t.next = 5;
                      break
                    }
                    return t.abrupt("return", e.showToast({
                      title: a.msg,
                      icon: "none"
                    }));
                  case 5:
                    this.$emit("reset");
                  case 6:
                  case "end":
                    return t.stop()
                }
              }), t, this)
            })))),
            handlePay: (0, c.throttle)((0, i.default)(r.default.mark((function e() {
              var t;
              return r.default.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, t = this.info.orderId, e.next = 4, (0, u.paymentApi)({}, t);
                  case 4:
                    return this.loadingShow = !0, this.loadingErrText = "", e.next = 8, this.queryOrderStatus(t);
                  case 8:
                    e.next = 13;
                    break;
                  case 10:
                    e.prev = 10, e.t0 = e.catch(0), console.log(e.t0);
                  case 13:
                  case "end":
                    return e.stop()
                }
              }), e, this, [
                [0, 10]
              ])
            })))),
            queryOrderStatus: function(t) {
              var a = this;
              return (0, i.default)(r.default.mark((function n() {
                var s;
                return r.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      return a.timer && a.cleanup(), n.next = 3, (0, o.queryOrderStatusApi)(t);
                    case 3:
                      if (1 === (s = n.sent).code) {
                        n.next = 8;
                        break
                      }
                      return a.loadingErrText = s.msg, setTimeout((function() {
                        a.loadingShow = !1
                      }), 2e3), n.abrupt("return");
                    case 8:
                      if ([1, 2, 3].includes(s.data)) {
                        n.next = 12;
                        break
                      }
                      return a.loadingErrText = "制卡失败，请重新购买", setTimeout((function() {
                        a.loadingShow = !1
                      }), 2e3), n.abrupt("return");
                    case 12:
                      if (3 !== s.data) {
                        n.next = 16;
                        break
                      }
                      return a.loadingShow = !1, a.loadingErrText = "", n.abrupt("return", e.navigateTo({
                        url: "/yearCard/pages/activationCard/activationCard?orderId=" + t
                      }));
                    case 16:
                      a.timer = setTimeout((function() {
                        a.queryOrderStatus(t)
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
            }
          }
        };
        t.default = f
      }).call(this, a("df3c").default)
    },
    "63bd": function(e, t, a) {
      var n = a("aa05");
      a.n(n).a
    },
    aa05: function(e, t, a) {},
    ca21: function(e, t, a) {
      a.d(t, "b", (function() {
        return r
      })), a.d(t, "c", (function() {
        return s
      })), a.d(t, "a", (function() {
        return n
      }));
      var n = {
          uCountDown: function() {
            return a.e("uview-ui/components/u-count-down/u-count-down").then(a.bind(null, "731a"))
          },
          uModal: function() {
            return a.e("uview-ui/components/u-modal/u-modal").then(a.bind(null, "0b84"))
          }
        },
        r = function() {
          var e = this,
            t = (e.$createElement, e._self._c, 1 === e.status || 4 === e.status || 2 === e.status && 0 === e.info.effectiveDateType || !isFinite ? null : e._f("date")(Date.parse(e.info.effectiveStartDate), "yyyy年mm月dd日")),
            a = 1 === e.status || 4 === e.status || 2 === e.status && 0 === e.info.effectiveDateType || !isFinite ? null : e._f("date")(Date.parse(e.info.effectiveEndDate), "yyyy年mm月dd日");
          e._isMounted || (e.e0 = e.modelOptions.cancel), e.$mp.data = Object.assign({}, {
            $root: {
              f0: t,
              f1: a
            }
          })
        },
        s = []
    },
    da75: function(e, t, a) {
      a.r(t);
      var n = a("3b43"),
        r = a.n(n);
      for (var s in n)["default"].indexOf(s) < 0 && function(e) {
        a.d(t, e, (function() {
          return n[e]
        }))
      }(s);
      t.default = r.a
    },
    de69: function(e, t, a) {
      a.r(t);
      var n = a("ca21"),
        r = a("da75");
      for (var s in r)["default"].indexOf(s) < 0 && function(e) {
        a.d(t, e, (function() {
          return r[e]
        }))
      }(s);
      a("63bd");
      var i = a("828b"),
        o = Object(i.a)(r.default, n.b, n.c, !1, null, "25e97a6c", null, !1, n.a, void 0);
      t.default = o.exports
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["yearCard/pages/myCard/components/card-create-component", {
    "yearCard/pages/myCard/components/card-create-component": function(e, t, a) {
      a("df3c").createComponent(a("de69"))
    }
  },
  [
    ["yearCard/pages/myCard/components/card-create-component"]
  ]
]);
