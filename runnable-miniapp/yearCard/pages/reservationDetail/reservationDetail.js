require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/pages/reservationDetail/reservationDetail"], {
    "4ae9": function(e, t, n) {
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return o
      })), n.d(t, "a", (function() {
        return r
      }));
      var r = {
          uniNavbar: function() {
            return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
          },
          uModal: function() {
            return n.e("uview-ui/components/u-modal/u-modal").then(n.bind(null, "0b84"))
          }
        },
        a = function() {
          var e = this;
          e.$createElement;
          e._self._c, e._isMounted || (e.e0 = function(t) {
            e.show = !0
          })
        },
        o = []
    },
    8336: function(e, t, n) {
      n.r(t);
      var r = n("a572"),
        a = n.n(r);
      for (var o in r)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(o);
      t.default = a.a
    },
    a572: function(e, t, n) {
      (function(e) {
        var r = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = r(n("7eb4")),
          o = r(n("7ca3")),
          i = r(n("ee10")),
          c = n("767f"),
          u = n("fa61");

        function s(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
          }
          return n
        }

        function d(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(n), !0).forEach((function(t) {
              (0, o.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }
        var f = ["", "二维码", "身份证", "验证码"],
          l = ["", "待使用", "已使用", "已取消", "出票中"],
          p = {
            components: {
              ScenicSportCode: function() {
                n.e("yearCard/pages/reservationDetail/components/scenicSportCode").then(function() {
                  return resolve(n("328c"))
                }.bind(null, n)).catch(n.oe)
              },
              ScenicSpot: function() {
                n.e("yearCard/pages/reservationDetail/components/scenicSpot").then(function() {
                  return resolve(n("a42c"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                opacity: 0,
                statusBarHeight: e.getSystemInfoSync().statusBarHeight,
                detailInfo: {},
                timer: null,
                query: {},
                isError: !1,
                tabList: l,
                show: !1
              }
            },
            onLoad: function(e) {
              this.query = e, this.getAppointmentDetail()
            },
            onPageScroll: function(e) {
              this.scrollTop = e.scrollTop, this.scrollTop > 40 ? this.opacity = 1 : this.opacity = 0
            },
            destroyed: function() {
              this.cleanup()
            },
            methods: {
              cancelReservation: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function n() {
                  var r, o, i, u, s;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return r = t.query, o = r.userYearCardId, i = r.orderId, u = {
                          orderSn: i,
                          userYearCardId: o
                        }, n.next = 4, (0, c.appointmentRefundApi)(u);
                      case 4:
                        if (1 === (s = n.sent).code) {
                          n.next = 7;
                          break
                        }
                        return n.abrupt("return", e.showToast({
                          title: s.msg,
                          icon: "none"
                        }));
                      case 7:
                        e.showToast({
                          title: "取消成功",
                          icon: "none"
                        }), e.navigateTo({
                          url: "/yearCard/pages/cardRecord/cardRecord?userYearCardId=" + o + "&checkedTab=2"
                        });
                      case 9:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              cleanup: function() {
                clearInterval(this.timer)
              },
              initTimer: function() {
                var e = this;
                this.timer && this.cleanup(), this.timer = setInterval((function() {
                  e.getAppointmentDetail()
                }), 3e4)
              },
              getAppointmentDetail: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function n() {
                  var r, o, i, s, l;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (r = t.query, o = r.userYearCardId, i = r.orderId, o && i) {
                          n.next = 3;
                          break
                        }
                        return n.abrupt("return");
                      case 3:
                        return n.next = 5, (0, c.getAppointmentDetailApi)({
                          userYearCardId: o,
                          orderSn: i
                        });
                      case 5:
                        if (1 === (s = n.sent).code) {
                          n.next = 9;
                          break
                        }
                        return t.isError = !0, n.abrupt("return", e.showToast({
                          title: s.msg,
                          icon: "none"
                        }));
                      case 9:
                        t.isError = !1, l = s.data.verifyMode.reduce((function(e, t, n) {
                          return e + (0 !== n ? "或" : "") + "「" + f[t] + "」"
                        }), ""), t.detailInfo = d(d({}, s.data), {}, {
                          contactIdCard: (0, u.encryptionStr)(3, s.data.contactIdCard),
                          verifyModeName: l,
                          cWeek: (0, u.continueWeek)(s.data.dateCanUse),
                          cDays: (0, u.continueDays)(s.data.dateCannotUse)
                        }), 1 === t.detailInfo.useType && 4 === t.detailInfo.status ? t.initTimer() : t.timer && t.cleanup();
                      case 13:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              copy: function() {
                e.setClipboardData({
                  data: this.detailInfo.orderSn,
                  success: function() {
                    e.showToast({
                      title: "复制成功",
                      icon: "none"
                    })
                  }
                })
              }
            }
          };
        t.default = p
      }).call(this, n("df3c").default)
    },
    ac3b: function(e, t, n) {
      n.r(t);
      var r = n("4ae9"),
        a = n("8336");
      for (var o in a)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(o);
      n("ca11");
      var i = n("828b"),
        c = Object(i.a)(a.default, r.b, r.c, !1, null, "3a0f68dd", null, !1, r.a, void 0);
      t.default = c.exports
    },
    ca11: function(e, t, n) {
      var r = n("d80c");
      n.n(r).a
    },
    d80c: function(e, t, n) {},
    fbb5: function(e, t, n) {
      (function(e, t) {
        var r = n("47a9");
        n("5366"), r(n("3240"));
        var a = r(n("ac3b"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    }
  },
  [
    ["fbb5", "common/runtime", "common/vendor", "yearCard/common/vendor"]
  ]
]);
