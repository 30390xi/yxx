require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/pages/cardMap/cardMap"], {
    "0fde": function(e, t, n) {
      (function(e, t) {
        var a = n("47a9");
        n("5366"), a(n("3240"));
        var r = a(n("7417"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(r.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "405b": function(e, t, n) {
      (function(e) {
        var a = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = a(n("7eb4")),
          c = a(n("ee10")),
          i = n("767f"),
          o = {
            components: {
              content: function() {
                n.e("yearCard/pages/cardMap/components/content").then(function() {
                  return resolve(n("a97c"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                map: {
                  longitude: 108.939621,
                  latitude: 34.343147
                },
                markers: [],
                originalData: [],
                cardList: [],
                currentInfo: {},
                selectedScenic: {},
                selectScenicId: "",
                allLocations: []
              }
            },
            onLoad: function(e) {
              var t = this;
              return (0, c.default)(r.default.mark((function n() {
                return r.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      t.getLocation(), t.getList(e.userYearCardId);
                    case 2:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            methods: {
              getLocation: function() {
                var t = this;
                e.getLocation({
                  type: "gcj02",
                  success: function(e) {
                    t.map = {
                      longitude: e.longitude,
                      latitude: e.latitude
                    }
                  }
                })
              },
              getList: function(t) {
                var n = this;
                return (0, c.default)(r.default.mark((function a() {
                  var c, o;
                  return r.default.wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return a.next = 2, (0, i.getCardListApi)({
                          status: 3
                        });
                      case 2:
                        if (1 === (c = a.sent).code) {
                          a.next = 5;
                          break
                        }
                        return a.abrupt("return", e.showToast({
                          title: c.msg,
                          icon: "none"
                        }));
                      case 5:
                        n.cardList = c.data, console.log(n.cardList), o = t ? n.cardList.find((function(e) {
                          return e.userYearCardId === t
                        })) : n.cardList[0], n.handleChange(o);
                      case 9:
                      case "end":
                        return a.stop()
                    }
                  }), a)
                })))()
              },
              handleChange: function(t) {
                var n = this;
                return (0, c.default)(r.default.mark((function a() {
                  var c, o;
                  return r.default.wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return n.selectedScenic = {}, n.selectScenicId = "", n.currentInfo = t, a.next = 5, (0, i.getMapDetailApi)({
                          userYearCardId: n.currentInfo.userYearCardId
                        });
                      case 5:
                        if (1 === (c = a.sent).code) {
                          a.next = 8;
                          break
                        }
                        return a.abrupt("return", e.showToast({
                          title: c.msg,
                          icon: "none"
                        }));
                      case 8:
                        (o = c.data.mapDetailList).forEach((function(e) {
                          n.allLocations.push({
                            longitude: e.longitude,
                            latitude: e.latitude
                          })
                        })), n.originalData = o || [], n.markers = o.map((function(e, t) {
                          return {
                            id: t,
                            latitude: e.latitude,
                            longitude: e.longitude,
                            width: 0,
                            height: 0,
                            zIndex: 10,
                            iconPath: "https://eshopfile.zhiyousx.com/2024010219444166193.png",
                            scenicName: e.scenicName,
                            usedTimes: e.usedTimes,
                            lastUseDate: e.lastUseDate,
                            verifyNum: e.verifyNum,
                            scenicId: e.scenicId,
                            customCallout: {
                              anchorY: 50,
                              anchorX: 0,
                              display: "ALWAYS"
                            },
                            label: {
                              content: " ",
                              bgColor: "",
                              color: "",
                              textAlign: "center",
                              borderRadius: 15,
                              width: 25,
                              height: 25,
                              fontSize: 12,
                              borderWidth: 2,
                              borderColor: "",
                              anchorY: -15
                            }
                          }
                        })), n.$forceUpdate();
                      case 13:
                      case "end":
                        return a.stop()
                    }
                  }), a)
                })))()
              },
              calloutTap: function(e) {
                var t = this;
                this.$nextTick((function() {
                  t.selectedScenic = t.originalData[e.markerId], t.selectScenicId = t.selectedScenic.scenicId, t.allLocations = [], t.markers.forEach((function(e) {
                    t.selectScenicId == e.scenicId ? (t.allLocations.push({
                      latitude: e.latitude,
                      longitude: e.longitude
                    }), e.zIndex = 100) : e.zIndex = 10
                  }))
                }))
              }
            }
          };
        t.default = o
      }).call(this, n("df3c").default)
    },
    7417: function(e, t, n) {
      n.r(t);
      var a = n("a4db"),
        r = n("cb8f");
      for (var c in r)["default"].indexOf(c) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(c);
      n("df21");
      var i = n("828b"),
        o = Object(i.a)(r.default, a.b, a.c, !1, null, "9826ce1a", null, !1, a.a, void 0);
      t.default = o.exports
    },
    a4db: function(e, t, n) {
      n.d(t, "b", (function() {
        return r
      })), n.d(t, "c", (function() {
        return c
      })), n.d(t, "a", (function() {
        return a
      }));
      var a = {
          uniNavbar: function() {
            return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
          }
        },
        r = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    },
    b1bd: function(e, t, n) {},
    cb8f: function(e, t, n) {
      n.r(t);
      var a = n("405b"),
        r = n.n(a);
      for (var c in a)["default"].indexOf(c) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(c);
      t.default = r.a
    },
    df21: function(e, t, n) {
      var a = n("b1bd");
      n.n(a).a
    }
  },
  [
    ["0fde", "common/runtime", "common/vendor", "yearCard/common/vendor"]
  ]
]);
