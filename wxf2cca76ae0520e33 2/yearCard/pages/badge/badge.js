require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/pages/badge/badge"], {
    "0e55": function(e, t, n) {
      (function(e, t) {
        var r = n("47a9");
        n("5366"), r(n("3240"));
        var a = r(n("ed5b"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "605f": function(e, t, n) {
      (function(e, r) {
        var a = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = a(n("7eb4")),
          i = a(n("7ca3")),
          c = a(n("b7d4")),
          s = a(n("ee10")),
          u = n("277a"),
          d = n("767f"),
          f = ["allList"];

        function l(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
          }
          return n
        }

        function h(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(n), !0).forEach((function(t) {
              (0, i.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }
        var b = {
          components: {
            customNav: function() {
              Promise.all([n.e("yearCard/common/vendor"), n.e("yearCard/components/customNav")]).then(function() {
                return resolve(n("4105"))
              }.bind(null, n)).catch(n.oe)
            },
            UserInfo: function() {
              n.e("yearCard/pages/badge/components/userInfo").then(function() {
                return resolve(n("db8e"))
              }.bind(null, n)).catch(n.oe)
            },
            BadgeList: function() {
              n.e("yearCard/pages/badge/components/badgeList").then(function() {
                return resolve(n("69ec"))
              }.bind(null, n)).catch(n.oe)
            },
            BadgeDetail: function() {
              Promise.all([n.e("common/vendor"), n.e("yearCard/pages/badge/components/badgeDetail")]).then(function() {
                return resolve(n("2cd8f"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              scrollTop: 0,
              showDetail: !1,
              badgeList: [],
              detailInfo: {},
              backFun: !1,
              canvasInfo: {},
              otherInfo: {},
              userYearCardId: "",
              isShowShare: !1,
              posterCardList: []
            }
          },
          onPageScroll: function(e) {
            this.scrollTop = e.scrollTop
          },
          onLoad: function(e) {
            this.getMedalInfo(e)
          },
          methods: {
            getMedalInfo: function(t) {
              var n = this;
              return (0, s.default)(o.default.mark((function r() {
                var a, i, s, u, l, b, p, g;
                return o.default.wrap((function(r) {
                  for (;;) switch (r.prev = r.next) {
                    case 0:
                      return n.userYearCardId = t.userYearCardId, r.next = 3, (0, d.getMedalInfoApi)({
                        userYearCardId: t.userYearCardId
                      });
                    case 3:
                      if (1 === (a = r.sent).code) {
                        r.next = 6;
                        break
                      }
                      return r.abrupt("return", e.showToast({
                        title: a.msg,
                        icon: "none"
                      }));
                    case 6:
                      i = a.data || {}, s = i.allList, u = (0, c.default)(i, f), l = n.$store.getters.userInfor, b = l.picUrl, p = l.nickName, n.badgeList = s, n.otherInfo = h(h({}, u), {}, {
                        avatarUrl: b || "https://eshopfile.zhiyousx.com/2021120914511172601.png",
                        nickName: p || "--",
                        usedTicketNum: t.usedTicketNum || 0,
                        totalMoney: t.totalMoney || 0
                      }), g = [], n.badgeList.length > 0 && (g = JSON.parse(JSON.stringify(n.badgeList)), n.posterCardList = g.filter((function(e) {
                        return 2 == e.status
                      }))), n.otherInfo.activeNum + n.otherInfo.waitActiveNum > 0 ? n.isShowShare = !0 : n.isShowShare = !1;
                    case 13:
                    case "end":
                      return r.stop()
                  }
                }), r)
              })))()
            },
            closeModel: function() {
              this.showDetail = !1, this.backFun = !1
            },
            openModel: function() {
              this.detailInfo.userYearCardId = this.userYearCardId, this.showDetail = !0, this.backFun = !0
            },
            clickBadge: function(e) {
              var t = this;
              this.$nextTick((function() {
                t.detailInfo = {}, t.detailInfo = t.badgeList[e], t.openModel()
              }))
            },
            handleShare: function() {
              var t = this;
              return (0, s.default)(o.default.mark((function n() {
                var a, i, c;
                return o.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      a = [], a = t.posterCardList.length > 8 ? t.posterCardList.slice(0, 8) : t.posterCardList, i = a.map((function(e) {
                        return e.medalName.length > 10 && (e.medalName = e.medalName.substring(0, 8) + "..."), e.medalSubName.length > 10 && (e.medalSubName = e.medalSubName.substring(0, 8) + "..."), e
                      })), (c = JSON.parse(JSON.stringify(t.otherInfo))).subTitle.length > 10 && (c.subTitle = c.subTitle.substring(0, 12) + "..."), t.canvasInfo = {
                        id: "poster",
                        width: e.getSystemInfoSync().screenWidth,
                        height: 495 + 200 * Math.ceil(i.length / 2),
                        list: i,
                        otherInfo: c
                      }, t.$nextTick((function() {
                        (0, u.generatePoster)(t.canvasInfo, (function(e) {
                          r.showShareImageMenu({
                            path: e
                          }), console.log("生成海报成功", e)
                        }), t)
                      }));
                    case 7:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            }
          }
        };
        t.default = b
      }).call(this, n("df3c").default, n("3223").default)
    },
    "71cc": function(e, t, n) {
      n.r(t);
      var r = n("605f"),
        a = n.n(r);
      for (var o in r)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(o);
      t.default = a.a
    },
    9320: function(e, t, n) {
      var r = n("fd55");
      n.n(r).a
    },
    ca10: function(e, t, n) {
      n.d(t, "b", (function() {
        return r
      })), n.d(t, "c", (function() {
        return a
      })), n.d(t, "a", (function() {}));
      var r = function() {
          var e = this;
          e.$createElement;
          e._self._c, e._isMounted || (e.e0 = function(t) {
            e.showDetail = !1
          })
        },
        a = []
    },
    e1f2: function(e, t, n) {
      var r = n("ea6e");
      n.n(r).a
    },
    ea6e: function(e, t, n) {},
    ed5b: function(e, t, n) {
      n.r(t);
      var r = n("ca10"),
        a = n("71cc");
      for (var o in a)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(o);
      n("e1f2"), n("9320");
      var i = n("828b"),
        c = Object(i.a)(a.default, r.b, r.c, !1, null, "c2be93b8", null, !1, r.a, void 0);
      t.default = c.exports
    },
    fd55: function(e, t, n) {}
  },
  [
    ["0e55", "common/runtime", "common/vendor", "yearCard/common/vendor"]
  ]
]);
