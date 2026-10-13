// Extracted from subPack/pages/mapSpotDetail/mapSpotDetail.js; webpack module 6816.
// Compiled code for analysis; not an original source file.
module.exports = {
    6816: function(t, i, a) {
      (function(t, a) {
        Object.defineProperty(i, "__esModule", {
          value: !0
        }), i.default = void 0;
        var e = {
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
              autoplay: !1
            }
          },
          onLoad: function(t) {
            t.id && (this.id = t.id), t.langType && (this.langType = t.langType), 1 == t.source && (this.showGuideBut = !0), t.autoplay && (this.autoplay = !0), "zn" == this.langType ? a.setNavigationBarTitle({
              title: "详情"
            }) : "English" == this.langType && a.setNavigationBarTitle({
              title: "Details"
            })
          },
          onShow: function() {
            this.getLocation()
          },
          onShareAppMessage: function() {
            var t = "/subPack/pages/mapSpotDetail/mapSpotDetail?id=" + this.id + "&langType=" + this.langType + "&source=1";
            return {
              title: this.langData.name,
              imageUrl: this.imgList[0].imgUrl,
              path: this.$util.setShareUrl(t)
            }
          },
          onShareTimeline: function() {
            var t = "id=" + this.id + "&langType=" + this.langType;
            return {
              title: this.langData.name,
              imageUrl: this.imgList[0].imgUrl,
              path: this.$util.setShareTimeline(t)
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
              var i = this;
              t.getLocation({
                type: "gcj02",
                success: function(t) {
                  i.getDetail(t.longitude, t.latitude)
                },
                fail: function(t) {
                  i.getDetail("", "")
                }
              })
            },
            getDetail: function(t, i) {
              var a = this,
                e = {
                  id: this.id,
                  latitude: i,
                  longitude: t
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getSpotInfoById", e).then((function(t) {
                if (1 === t.code) {
                  if (console.log(t.data), a.spotDetail = t.data, t.data.picUrl) {
                    var i = t.data.picUrl.split(","),
                      e = [];
                    i.forEach((function(t) {
                      e.push({
                        imgUrl: t
                      })
                    })), a.imgList = e
                  }
                  "zn" == a.langType ? a.langData = t.data.chinese : "English" == a.langType && (a.langData = t.data.english), a.langData.voiceUrl && a.initAudio()
                }
              }))
            },
            initAudio: function() {
              var t = this;
              this.src = this.langData.voiceUrl, this.audio.src = this.src, this.autoplay && this.play(), this.audio.onTimeUpdate((function() {
                t.seek || (t.current = t.audio.currentTime)
              })), this.audio.onCanplay((function() {
                var i = setInterval((function() {
                  0 !== t.audio.duration && (clearInterval(i), t.duration = t.audio.duration)
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
              a.openLocation({
                latitude: Number(this.spotDetail.latitude),
                longitude: Number(this.spotDetail.longitude),
                name: this.langData.name
              })
            },
            toGuide: function() {
              a.navigateTo({
                url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent("https://eshop.zhiyousx.com/dsmall-admin-ui/h5/fengRiver.html?tabId=" + this.spotDetail.parentId + "&markerId=" + this.spotDetail.id + "&langType=" + this.langType)
              })
            }
          }
        };
        i.default = e
      }).call(this, a("df3c").default, a("3223").default)
    },
};
