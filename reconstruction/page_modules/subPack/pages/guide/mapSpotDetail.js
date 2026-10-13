// Extracted from subPack/pages/guide/mapSpotDetail.js; webpack module "3c23".
// Compiled code for analysis; not an original source file.
module.exports = {
    "3c23": function(t, i, e) {
      (function(t, e) {
        Object.defineProperty(i, "__esModule", {
          value: !0
        }), i.default = void 0;
        var a = {
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
              pid: ""
            }
          },
          onLoad: function(t) {
            t.id && (this.id = t.id), t.mid && (this.mapId = t.mid), t.langType && (this.langType = t.langType), 1 == t.source && (this.showGuideBut = !0), t.autoplay && (this.autoplay = !0), t.pid && (this.pid = t.pid), "zn" == this.langType ? e.setNavigationBarTitle({
              title: "详情"
            }) : "English" == this.langType && e.setNavigationBarTitle({
              title: "Details"
            }), this.getMapInfo()
          },
          onShow: function() {
            this.getLocation()
          },
          onShareAppMessage: function() {
            var t = "/subPack/pages/guide/mapSpotDetail?id=" + this.id + "&langType=" + this.langType + "&source=1&mid=" + this.mapId;
            return "no" == this.pid && (t = "/subPack/pages/guide/mapSpotDetail?id=" + this.id + "&langType=" + this.langType + "&source=1&mid=" + this.mapId + "&pid=no"), {
              title: this.spotDetail.shareDesc || this.langData.name,
              imageUrl: this.spotDetail.shareImage || (this.imgList && this.imgList.length ? this.imgList[0].imgUrl : ""),
              path: this.$util.setShareUrl(t)
            }
          },
          onShareTimeline: function() {
            var t = "id=" + this.id + "&langType=" + this.langType + "&mid=" + this.mapId;
            return {
              title: this.spotDetail.shareDesc || this.langData.name,
              imageUrl: this.spotDetail.shareImage || (this.imgList && this.imgList.length ? this.imgList[0].imgUrl : ""),
              query: this.$util.setShareTimeline(t)
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
            getMapInfo: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getScenicSpotMapBase", {
                mapId: this.mapId
              }).then((function(i) {
                if (1 === i.code) {
                  t.mapinfo = i.data;
                  var e = i.data || {};
                  t.styleConfig = {
                    btn: "border-image: url(".concat(e.buttonUnselectedStyle, ") 30% round;border-image-width:").concat(e.borderWidth, "px;border-width:").concat(e.borderWidth, "px;color:").concat(e.fontUnselectedColor, ";background:").concat(e.buttonUnselectedColor, ";"),
                    actbtn: "border-image: url(".concat(e.buttonSelectedStyle, ") 30% round;border-image-width:").concat(e.borderWidth, "px;border-width:").concat(e.borderWidth, "px;color:").concat(e.fontSelectedColor, ";background:").concat(e.buttonSelectedColor, ";")
                  }
                }
              }))
            },
            getDetail: function(t, i) {
              var e = this,
                a = {
                  id: this.id,
                  latitude: i,
                  longitude: t
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getSpotInfoById", a).then((function(t) {
                if (1 === t.code) {
                  if (e.spotDetail = t.data, t.data.picUrl) {
                    var i = t.data.picUrl.split(","),
                      a = [];
                    i.forEach((function(t) {
                      a.push({
                        imgUrl: t
                      })
                    })), e.imgList = a
                  }
                  "zn" == e.langType ? e.langData = t.data.chinese : "English" == e.langType && (e.langData = t.data.english), e.langData.voiceUrl && e.initAudio()
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
                var i = setInterval((function() {
                  t.audio && t.audio.duration > 0 && (clearInterval(i), t.duration = t.audio.duration)
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
              e.openLocation({
                latitude: Number(this.spotDetail.latitude),
                longitude: Number(this.spotDetail.longitude),
                name: this.langData.name
              })
            },
            toGuide: function() {
              var t = "https://eshop.zhiyousx.com/dsmall-admin-ui/h5/smartMap.html";
              "no" == this.pid ? e.navigateTo({
                url: "/subPack/pages/guide/webpage?urlEncode=" + encodeURIComponent("".concat(t, "?m=").concat(this.mapId))
              }) : 3 == this.spotDetail.type ? e.navigateTo({
                url: "/subPack/pages/guide/webpage?urlEncode=" + encodeURIComponent("".concat(t, "?m=").concat(this.mapId, "&tabId=") + this.spotDetail.parentId + "&markerId=" + this.spotDetail.id + "&langType=" + this.langType + "&lineId=" + this.spotDetail.lineId)
              }) : e.navigateTo({
                url: "/subPack/pages/guide/webpage?urlEncode=" + encodeURIComponent("".concat(t, "?m=").concat(this.mapId, "&tabId=") + this.spotDetail.parentId + "&markerId=" + this.spotDetail.id + "&langType=" + this.langType)
              })
            }
          }
        };
        i.default = a
      }).call(this, e("df3c").default, e("3223").default)
    },
};
