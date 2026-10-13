// Extracted from subPack/pages/guide/ecsList.js; webpack module "5d6a".
// Compiled code for analysis; not an original source file.
module.exports = {
    "5d6a": function(t, a, e) {
      (function(t) {
        var n = e("47a9");
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0;
        var i = n(e("af34")),
          o = {
            components: {
              Empty: function() {
                e.e("components/empty/empty").then(function() {
                  return resolve(e("a427"))
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
                var a = this;
                t.getLocation({
                  success: function(t) {
                    a.getSpotBase(t.longitude, t.latitude)
                  },
                  fail: function(t) {
                    a.getSpotBase("", "")
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
                        s = {
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
                      o.push(s)
                    }
                    e.getSpotList(t, a, o)
                  } else e.getSpotList(t, a, [])
                }))
              },
              getSpotList: function(a, e, n) {
                var o = this,
                  c = {
                    mapId: this.mapId,
                    languageType: this.languageType,
                    latitude: e,
                    longitude: a
                  };
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getVoiceTagList", c).then((function(a) {
                  if (1 === a.code) {
                    var e = a.data;
                    e.forEach((function(t) {
                      "zn" == o.langType ? (t.base = t.chinese, t.scenicSpotMapTagVOList.forEach((function(t) {
                        t.base = t.chinese, t.showType = 111
                      }))) : "English" == o.langType && (t.base = t.english, t.scenicSpotMapTagVOList.forEach((function(t) {
                        t.base = t.english, t.showType = 111
                      })))
                    })), o.listData = n.concat.apply(n, (0, i.default)(e)), console.log(o.listData)
                  } else t.showToast({
                    title: c.msg,
                    icon: "none"
                  })
                }))
              },
              jumpLocation: function(a) {
                var e = "古观音禅寺" === a.base.name ? "终南禅韵" : "古观音禅寺";
                t.openLocation({
                  latitude: Number(a.latitude),
                  longitude: Number(a.longitude),
                  name: a.base.name,
                  address: e
                })
              },
              toDetail: function(a) {
                a.type && 2 == a.type ? t.navigateTo({
                  url: "/subPack/pages/guide/ecsDetail?id=" + a.id + "&langType=" + this.langType + "&autoplay=true&mid=" + this.mapId
                }) : t.navigateTo({
                  url: "/subPack/pages/guide/ecsDetail?id=" + a.id + "&langType=" + this.langType + "&autoplay=true&mid=" + this.mapId + "&pid=no"
                })
              }
            }
          };
        a.default = o
      }).call(this, e("df3c").default)
    },
};
