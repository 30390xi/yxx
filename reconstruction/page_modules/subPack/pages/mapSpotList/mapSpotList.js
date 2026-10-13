// Extracted from subPack/pages/mapSpotList/mapSpotList.js; webpack module d9a3.
// Compiled code for analysis; not an original source file.
module.exports = {
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
};
