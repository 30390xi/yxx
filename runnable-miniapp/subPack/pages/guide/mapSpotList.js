require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/guide/mapSpotList"], {
    "12ac": function(t, a, e) {},
    "29ed4": function(t, a, e) {
      (function(t, a) {
        var n = e("47a9");
        e("5366"), n(e("3240"));
        var i = n(e("dc5a"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, a(i.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    "4c9c": function(t, a, e) {
      (function(t, n) {
        var i = e("47a9");
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0;
        var o = i(e("af34")),
          c = {
            components: {
              Empty: function() {
                e.e("subPack/components/empty").then(function() {
                  return resolve(e("19ef"))
                }.bind(null, e)).catch(e.oe)
              }
            },
            data: function() {
              return {
                mapId: 0,
                langType: "zn",
                languageType: 1,
                listData: [],
                mapinfo: {}
              }
            },
            onLoad: function(a) {
              a.mapId && (this.mapId = a.mapId), this.getMapInfo(), a.langType && (this.langType = a.langType), "zn" == this.langType ? (this.languageType = 1, t.setNavigationBarTitle({
                title: "语音讲解"
              })) : "English" == this.langType && (this.languageType = 2, t.setNavigationBarTitle({
                title: "Scenic Spot Introduction"
              })), this.getLocation()
            },
            onShow: function() {},
            methods: {
              getLocation: function() {
                var t = this;
                n.getLocation({
                  type: "gcj02",
                  success: function(a) {
                    t.getSpotBase(a.longitude, a.latitude)
                  },
                  fail: function(a) {
                    t.getSpotBase("", "")
                  }
                })
              },
              getMapInfo: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getScenicSpotMapBase", {
                  mapId: this.mapId
                }).then((function(a) {
                  1 === a.code && (t.mapinfo = a.data || {})
                }))
              },
              getSpotBase: function(t, a) {
                var e = this,
                  n = {
                    mapId: this.mapId,
                    languageType: this.languageType,
                    latitude: a,
                    longitude: t
                  };
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getScenicPointByMapId", n).then((function(n) {
                  if (1 === n.code) {
                    var i = n.data,
                      o = [];
                    if (i.chinese.voiceUrl) {
                      var c = {
                          name: i.chinese.subtitle
                        },
                        u = {
                          voiceIcon: i.iconUrl,
                          base: i.chinese,
                          scenicSpotMapTagVOList: [{
                            base: c,
                            picUrl: i.picUrl,
                            distance: i.distance,
                            latitude: i.latitude,
                            longitude: i.longitude,
                            id: i.id
                          }]
                        };
                      o.push(u)
                    }
                    e.getSpotList(t, a, o)
                  } else e.getSpotList(t, a, [])
                }))
              },
              getSpotList: function(t, a, e) {
                var i = this,
                  c = {
                    mapId: this.mapId,
                    languageType: this.languageType,
                    latitude: a,
                    longitude: t
                  };
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getVoiceTagList", c).then((function(t) {
                  if (1 === t.code) {
                    var a = t.data;
                    a.forEach((function(t) {
                      "zn" == i.langType ? (t.base = t.chinese, t.scenicSpotMapTagVOList.forEach((function(t) {
                        t.base = t.chinese, t.showType = 111
                      }))) : "English" == i.langType && (t.base = t.english, t.scenicSpotMapTagVOList.forEach((function(t) {
                        t.base = t.english, t.showType = 111
                      })))
                    })), i.listData = e.concat.apply(e, (0, o.default)(a)), console.log(i.listData)
                  } else n.showToast({
                    title: c.msg,
                    icon: "none"
                  })
                }))
              },
              jumpLocation: function(a) {
                t.openLocation({
                  latitude: Number(a.latitude),
                  longitude: Number(a.longitude),
                  name: a.base.name
                })
              },
              toDetail: function(a) {
                a.type && 2 == a.type ? t.navigateTo({
                  url: "/subPack/pages/guide/mapSpotDetail?id=" + a.id + "&langType=" + this.langType + "&autoplay=true&mid=" + this.mapId
                }) : t.navigateTo({
                  url: "/subPack/pages/guide/mapSpotDetail?id=" + a.id + "&langType=" + this.langType + "&autoplay=true&mid=" + this.mapId + "&pid=no"
                })
              }
            }
          };
        a.default = c
      }).call(this, e("3223").default, e("df3c").default)
    },
    "6be9": function(t, a, e) {
      e.r(a);
      var n = e("4c9c"),
        i = e.n(n);
      for (var o in n)["default"].indexOf(o) < 0 && function(t) {
        e.d(a, t, (function() {
          return n[t]
        }))
      }(o);
      a.default = i.a
    },
    baba: function(t, a, e) {
      e.d(a, "b", (function() {
        return n
      })), e.d(a, "c", (function() {
        return i
      })), e.d(a, "a", (function() {}));
      var n = function() {
          var t = this,
            a = (t.$createElement, t._self._c, t.listData && t.listData[0] ? t.__map(t.listData, (function(a, e) {
              return {
                $orig: t.__get_orig(a),
                l0: t.__map(a.scenicSpotMapTagVOList, (function(a, e) {
                  var n = t.__get_orig(a),
                    i = a.picUrl && a.picUrl.indexOf(",") > 0;
                  return {
                    $orig: n,
                    g0: i,
                    g1: i ? a.picUrl.split(",") : null,
                    g2: a.picUrl && a.picUrl.indexOf(",") < 0
                  }
                }))
              }
            })) : null);
          t.$mp.data = Object.assign({}, {
            $root: {
              l1: a
            }
          })
        },
        i = []
    },
    d6e0: function(t, a, e) {
      var n = e("12ac");
      e.n(n).a
    },
    dc5a: function(t, a, e) {
      e.r(a);
      var n = e("baba"),
        i = e("6be9");
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        e.d(a, t, (function() {
          return i[t]
        }))
      }(o);
      e("d6e0");
      var c = e("828b"),
        u = Object(c.a)(i.default, n.b, n.c, !1, null, "2ed38f26", null, !1, n.a, void 0);
      a.default = u.exports
    }
  },
  [
    ["29ed4", "common/runtime", "common/vendor"]
  ]
]);
