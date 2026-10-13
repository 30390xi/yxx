require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/mapSpotList/mapSpotList"], {
    "1b3c": function(t, n, e) {
      (function(t, n) {
        var a = e("47a9");
        e("5366"), a(e("3240"));
        var i = a(e("dcf2"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(i.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    4111: function(t, n, e) {
      var a = e("8d3d");
      e.n(a).a
    },
    5778: function(t, n, e) {
      (function(t, e) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var a = {
          data: function() {
            return {
              spotId: 0,
              langType: "中文",
              languageType: 1,
              listData: []
            }
          },
          onLoad: function(n) {
            n.spotId && (this.spotId = n.spotId), n.langType && (this.langType = decodeURIComponent(n.langType)), "中文" == this.langType ? (this.languageType = 1, t.setNavigationBarTitle({
              title: "景区介绍"
            })) : "English" == this.langType && (this.languageType = 2, t.setNavigationBarTitle({
              title: "Scenic Spot Introduction"
            })), this.getLocation()
          },
          onShow: function() {},
          methods: {
            getLocation: function() {
              var t = this;
              e.getLocation({
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
              var e = this,
                a = {
                  mapId: this.spotId,
                  languageType: this.languageType,
                  latitude: n,
                  longitude: t
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getVoiceTagList", a).then((function(t) {
                if (1 === t.code) {
                  console.log(t.data);
                  var n = t.data;
                  n.forEach((function(t) {
                    "中文" == e.langType ? (t.base = t.chinese, t.scenicSpotMapTagVOList.forEach((function(t) {
                      "中文" == e.langType ? t.base = t.chinese : "English" == e.langType && (t.base = t.english)
                    }))) : "English" == e.langType && (t.base = t.english, t.scenicSpotMapTagVOList.forEach((function(t) {
                      "中文" == e.langType ? t.base = t.chinese : "English" == e.langType && (t.base = t.english)
                    })))
                  })), e.listData = n
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
                url: "/subPage/pages/mapSpotDetail/mapSpotDetail?id=" + n.id + "&langType=" + this.langType + "&autoplay=true"
              })
            }
          }
        };
        n.default = a
      }).call(this, e("3223").default, e("df3c").default)
    },
    "8d3d": function(t, n, e) {},
    "9e4e": function(t, n, e) {
      e.r(n);
      var a = e("5778"),
        i = e.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(o);
      n.default = i.a
    },
    a67b: function(t, n, e) {
      e.d(n, "b", (function() {
        return a
      })), e.d(n, "c", (function() {
        return i
      })), e.d(n, "a", (function() {}));
      var a = function() {
          var t = this,
            n = (t.$createElement, t._self._c, t.__map(t.listData, (function(n, a) {
              return {
                $orig: t.__get_orig(n),
                m0: e("a66f"),
                m1: e("37ba"),
                l0: t.__map(n.scenicSpotMapTagVOList, (function(n, e) {
                  var a = t.__get_orig(n),
                    i = n.picUrl && n.picUrl.indexOf(",") > 0;
                  return {
                    $orig: a,
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
    },
    dcf2: function(t, n, e) {
      e.r(n);
      var a = e("a67b"),
        i = e("9e4e");
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(o);
      e("4111");
      var c = e("828b"),
        l = Object(c.a)(i.default, a.b, a.c, !1, null, "7fbf3d40", null, !1, a.a, void 0);
      n.default = l.exports
    }
  },
  [
    ["1b3c", "common/runtime", "common/vendor", "subPage/common/vendor"]
  ]
]);
