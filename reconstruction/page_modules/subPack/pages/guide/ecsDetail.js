// Extracted from subPack/pages/guide/ecsDetail.js; webpack module a47e.
// Compiled code for analysis; not an original source file.
module.exports = {
    a47e: function(t, a, i) {
      (function(t) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0;
        var i = {
          data: function() {
            return {
              audio: t.createInnerAudioContext(),
              current: 0,
              duration: 0,
              paused: !0,
              loading: !1,
              seek: !1,
              src: "",
              id: 0,
              langType: "zn",
              spotDetail: "",
              langData: {},
              showGuideBut: !1,
              parseStyle: {
                p: "word-break: break-all;"
              },
              imgList: [],
              autoplay: !1,
              mapId: "",
              mapinfo: {},
              styleConfig: {},
              pid: "",
              safeAreaBottom: t.getStorageSync("safeAreaBottom")
            }
          },
          onLoad: function(a) {
            a.id && (this.id = a.id), a.mid && (this.mapId = a.mid), a.langType && (this.langType = a.langType), 1 == a.source && (this.showGuideBut = !0), a.autoplay && (this.autoplay = !0), a.pid && (this.pid = a.pid), "zn" == this.langType ? t.setNavigationBarTitle({
              title: "详情"
            }) : "English" == this.langType && t.setNavigationBarTitle({
              title: "Details"
            }), this.getMapInfo()
          },
          onShow: function() {
            this.getLocation()
          },
          onShareAppMessage: function() {
            var t = "/subPack/pages/guide/ecsDetail?id=" + this.id + "&langType=" + this.langType + "&source=1&mid=" + this.mapId;
            return "no" == this.pid && (t = "/subPack/pages/guide/ecsDetail?id=" + this.id + "&langType=" + this.langType + "&source=1&mid=" + this.mapId + "&pid=no"), {
              title: this.spotDetail.shareDesc || this.langData.name,
              bgImgUrl: this.spotDetail.shareImage || (this.imgList && this.imgList.length ? this.imgList[0].imgUrl : ""),
              path: this.$util.setShareUrl(t)
            }
          },
          onHide: function() {
            this.audio && this.audio.pause()
          },
          onUnload: function() {
            this.audio && this.audio.destroy()
          },
          methods: {
            getLocation: function() {
              var a = this;
              t.getLocation({
                type: "gcj02",
                success: function(t) {
                  a.getDetail(t.longitude, t.latitude)
                },
                fail: function(t) {
                  a.getDetail("", "")
                }
              })
            },
            getMapInfo: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getScenicSpotMapBase", {
                mapId: this.mapId
              }).then((function(a) {
                1 === a.code && (t.mapinfo = a.data, a.data)
              }))
            },
            getDetail: function(t, a) {
              var i = this,
                e = {
                  id: this.id,
                  latitude: a,
                  longitude: t
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getSpotInfoById", e).then((function(t) {
                if (1 === t.code) {
                  if (i.spotDetail = t.data, t.data.picUrl) {
                    var a = t.data.picUrl.split(","),
                      e = [];
                    a.forEach((function(t) {
                      e.push({
                        imgUrl: t
                      })
                    })), i.imgList = e
                  }
                  "zn" == i.langType ? i.langData = t.data.chinese : "English" == i.langType && (i.langData = t.data.english), i.langData.voiceUrl && i.initAudio()
                }
              }))
            },
            initAudio: function() {
              var t = this;
              this.src = this.langData.voiceUrl, this.audio.src = this.src, this.play(), setTimeout((function() {
                t.audio.pause()
              }), 10), setTimeout((function() {
                t.autoplay && t.play()
              }), 1e3), this.audio.onTimeUpdate((function() {
                t.seek || (t.current = t.audio.currentTime)
              })), this.audio.onCanplay((function() {
                var a = setInterval((function() {
                  t.audio && t.audio.duration > 0 && (clearInterval(a), t.duration = t.audio.duration)
                }), 500)
              })), this.audio.onPlay((function() {
                t.paused = !1, t.loading = !1
              })), this.audio.onPause((function() {
                t.paused = !0
              })), this.audio.onEnded((function() {
                t.continue ? t.next() : (t.paused = !0, t.current = 0)
              })), this.audio.onSeeked((function() {
                t.seek = !1
              }))
            },
            format: function(t) {
              return "0".repeat(2 - String(Math.floor(t / 60)).length) + Math.floor(t / 60) + ":" + "0".repeat(2 - String(Math.floor(t % 60)).length) + Math.floor(t % 60)
            },
            play: function() {
              this.audio.play(), this.loading = !0
            },
            jumpLocation: function() {
              var a = "古观音禅寺" === this.langData.name ? "终南禅韵" : "古观音禅寺";
              t.openLocation({
                latitude: Number(this.spotDetail.latitude),
                longitude: Number(this.spotDetail.longitude),
                name: this.langData.name,
                address: a
              })
            },
            toGuide: function() {
              var a = "https://eshop.zhiyousx.com/ecs/";
              "no" == this.pid ? t.navigateTo({
                url: "/subPack/pages/guide/webpage?urlEncode=" + encodeURIComponent("".concat(a))
              }) : 3 == this.spotDetail.type ? t.navigateTo({
                url: "/subPack/pages/guide/webpage?urlEncode=" + encodeURIComponent("".concat(a, "?tabId=") + this.spotDetail.parentId + "&markerId=" + this.spotDetail.id)
              }) : t.navigateTo({
                url: "/subPack/pages/guide/webpage?urlEncode=" + encodeURIComponent("".concat(a, "?&tabId=") + this.spotDetail.parentId + "&markerId=" + this.spotDetail.id)
              })
            },
            imgtap: function(t) {
              t.ignore()
            }
          }
        };
        a.default = i
      }).call(this, i("df3c").default)
    }
};
