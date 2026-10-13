// Extracted from subPage/pages/mapSpotList/mapSpotList.js; webpack module 5778.
// Compiled code for analysis; not an original source file.
module.exports = {
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
};
