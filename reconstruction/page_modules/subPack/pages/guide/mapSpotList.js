// Extracted from subPack/pages/guide/mapSpotList.js; webpack module "4c9c".
// Compiled code for analysis; not an original source file.
module.exports = {
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
};
