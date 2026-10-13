require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/map/map"], {
    "00d0": function(e, t, n) {
      n.d(t, "b", (function() {
        return o
      })), n.d(t, "c", (function() {
        return a
      })), n.d(t, "a", (function() {
        return i
      }));
      var i = {
          uniNavbar: function() {
            return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
          }
        },
        o = function() {
          this.$createElement;
          var e = (this._self._c, this.showPopup ? this._f("levelFilter")(this.unionLevel) : null);
          this.$mp.data = Object.assign({}, {
            $root: {
              f0: e
            }
          })
        },
        a = []
    },
    "01c2": function(e, t, n) {
      n.r(t);
      var i = n("6da7"),
        o = n.n(i);
      for (var a in i)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(a);
      t.default = o.a
    },
    "6da7": function(e, t, n) {
      (function(e) {
        var i = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = i(n("7eb4")),
          a = i(n("ee10")),
          u = {
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
                allLocations: [],
                showPopup: !1,
                unionLevel: 3
              }
            },
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            filters: {
              levelFilter: function(e) {
                return {
                  1: "青年联盟",
                  2: "普通会员",
                  3: "联合会员",
                  4: "参议会员"
                } [e]
              }
            },
            onShareAppMessage: function() {
              return {
                title: "点击查看陕西联合会员海量权益",
                imageUrl: "https://eshopfile.zhiyousx.com/2024061310513695733.png",
                path: this.$util.setShareUrl("union/pages/map/map")
              }
            },
            onLoad: function() {
              var t = this;
              return (0, a.default)(o.default.mark((function n() {
                return o.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      e.getStorageSync("token") && t.userInfo && t.userInfo.isUnionMember && e.getStorageSync("unionUserInfo") ? t.unionLevel = e.getStorageSync("unionUserInfo").level : t.unionLevel = 3, t.getLocation(), t.getEquityList();
                    case 3:
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
              getEquityList: function() {
                var t = this,
                  n = {
                    current: this.page,
                    size: 9999,
                    latitude: this.map.latitude,
                    longitude: this.map.longitude
                  };
                this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/userUnionEquityCard/getUnionEquityClassList", n).then((function(n) {
                  if (e.stopPullDownRefresh(), 1 === n.code) {
                    var i = n.data.records;
                    t.getMapDetail(i)
                  }
                }))
              },
              getMapDetail: function(e) {
                var t = this;
                this.selectedScenic = {}, this.selectScenicId = "";
                var n = e;
                n.forEach((function(e) {
                  t.allLocations.push({
                    longitude: e.longitude,
                    latitude: e.latitude
                  })
                })), this.originalData = n || [], this.markers = n.map((function(e, t) {
                  return {
                    id: t,
                    latitude: e.latitude,
                    longitude: e.longitude,
                    width: 0,
                    height: 0,
                    zIndex: 10,
                    iconPath: "https://eshopfile.zhiyousx.com/2024010219444166193.png",
                    scenicName: e.scenicName,
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
                })), this.$forceUpdate()
              },
              calloutTap: function(e) {
                var t = this;
                this.$nextTick((function() {
                  t.selectedScenic = t.originalData[e.markerId], t.selectScenicId = t.selectedScenic.scenicId, t.allLocations = [], t.markers.forEach((function(e) {
                    t.selectScenicId == e.scenicId ? (t.allLocations.push({
                      latitude: e.latitude,
                      longitude: e.longitude
                    }), e.zIndex = 100) : e.zIndex = 10
                  })), t.showPopup = !0
                }))
              },
              jumpTo: function(e) {
                this.$navigateTo({
                  url: e
                })
              },
              jumpToS: function(e) {
                this.$navigateTo({
                  url: e
                })
              }
            }
          };
        t.default = u
      }).call(this, n("df3c").default)
    },
    "7e3d": function(e, t, n) {
      n.r(t);
      var i = n("00d0"),
        o = n("01c2");
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      n("bc0a");
      var u = n("828b"),
        c = Object(u.a)(o.default, i.b, i.c, !1, null, "20020d03", null, !1, i.a, void 0);
      t.default = c.exports
    },
    bc0a: function(e, t, n) {
      var i = n("c2ef");
      n.n(i).a
    },
    c2ef: function(e, t, n) {},
    c593: function(e, t, n) {
      (function(e, t) {
        var i = n("47a9");
        n("5366"), i(n("3240"));
        var o = i(n("7e3d"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    }
  },
  [
    ["c593", "common/runtime", "common/vendor"]
  ]
]);
