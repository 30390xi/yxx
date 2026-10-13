require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/mapSpotList/mapSpotList"], {
    "0366": function(t, n, a) {},
    "1ac1": function(t, n, a) {
      (function(t, n) {
        var e = a("47a9");
        a("5366"), e(a("3240"));
        var i = e(a("77c8"));
        t.__webpack_require_UNI_MP_PLUGIN__ = a, n(i.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    "55c0": function(t, n, a) {
      a.r(n);
      var e = a("d9a3"),
        i = a.n(e);
      for (var o in e)["default"].indexOf(o) < 0 && function(t) {
        a.d(n, t, (function() {
          return e[t]
        }))
      }(o);
      n.default = i.a
    },
    "77c8": function(t, n, a) {
      a.r(n);
      var e = a("e009"),
        i = a("55c0");
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        a.d(n, t, (function() {
          return i[t]
        }))
      }(o);
      a("c4a8");
      var c = a("828b"),
        l = Object(c.a)(i.default, e.b, e.c, !1, null, "4586f7c4", null, !1, e.a, void 0);
      n.default = l.exports
    },
    c4a8: function(t, n, a) {
      var e = a("0366");
      a.n(e).a
    },
    d9a3: function(t, n, a) {
      (function(t, a) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          data: function() {
            return {
              spotId: 0,
              langType: "zn",
              languageType: 1,
              listData: []
            }
          },
          onLoad: function(n) {
            n.spotId && (this.spotId = n.spotId), n.langType && (this.langType = n.langType), "zn" == this.langType ? (this.languageType = 1, t.setNavigationBarTitle({
              title: "景区介绍"
            })) : "English" == this.langType && (this.languageType = 2, t.setNavigationBarTitle({
              title: "Scenic Spot Introduction"
            })), this.getLocation()
          },
          onShow: function() {},
          methods: {
            getLocation: function() {
              var t = this;
              a.getLocation({
                type: "gcj02",
                success: function(n) {
                  t.getSpotList(n.longitude, n.latitude)
                },
                fail: function(n) {
                  t.getSpotList("", "")
                }
              })
            },
            getSpotList: function(t, n) {
              var a = this,
                e = {
                  mapId: this.spotId,
                  languageType: this.languageType,
                  latitude: n,
                  longitude: t
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getVoiceTagList", e).then((function(t) {
                if (1 === t.code) {
                  console.log(t.data);
                  var n = t.data;
                  n.forEach((function(t) {
                    "zn" == a.langType ? (t.base = t.chinese, t.scenicSpotMapTagVOList.forEach((function(t) {
                      "zn" == a.langType ? t.base = t.chinese : "English" == a.langType && (t.base = t.english)
                    }))) : "English" == a.langType && (t.base = t.english, t.scenicSpotMapTagVOList.forEach((function(t) {
                      "zn" == a.langType ? t.base = t.chinese : "English" == a.langType && (t.base = t.english)
                    })))
                  })), a.listData = n
                }
              }))
            },
            jumpLocation: function(n) {
              t.openLocation({
                latitude: Number(n.latitude),
                longitude: Number(n.longitude),
                name: n.base.name
              })
            },
            toDetail: function(n) {
              t.navigateTo({
                url: "/subPack/pages/mapSpotDetail/mapSpotDetail?id=" + n.id + "&langType=" + this.langType + "&autoplay=true"
              })
            }
          }
        };
        n.default = e
      }).call(this, a("3223").default, a("df3c").default)
    },
    e009: function(t, n, a) {
      a.d(n, "b", (function() {
        return e
      })), a.d(n, "c", (function() {
        return i
      })), a.d(n, "a", (function() {}));
      var e = function() {
          var t = this,
            n = (t.$createElement, t._self._c, t.__map(t.listData, (function(n, a) {
              return {
                $orig: t.__get_orig(n),
                l0: t.__map(n.scenicSpotMapTagVOList, (function(n, a) {
                  var e = t.__get_orig(n),
                    i = n.picUrl && n.picUrl.indexOf(",") > 0;
                  return {
                    $orig: e,
                    g0: i,
                    g1: i ? n.picUrl.split(",") : null,
                    g2: n.picUrl && n.picUrl.indexOf(",") < 0
                  }
                }))
              }
            })));
          t.$mp.data = Object.assign({}, {
            $root: {
              l1: n
            }
          })
        },
        i = []
    }
  },
  [
    ["1ac1", "common/runtime", "common/vendor"]
  ]
]);
