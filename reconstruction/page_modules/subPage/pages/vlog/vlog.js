// Extracted from subPage/pages/vlog/vlog.js; webpack module d238.
// Compiled code for analysis; not an original source file.
module.exports = {
    d238: function(t, i, e) {
      (function(t, e) {
        Object.defineProperty(i, "__esModule", {
          value: !0
        }), i.default = void 0;
        var n = {
          data: function() {
            return this.fullTimer = null, {
              videoList: [],
              index_: null,
              index: "0",
              is_active: !0,
              active: 2,
              current_i: 2,
              firstclick: !1,
              isPlay: !0,
              colnum: 0,
              sliderval: 0,
              showMore: !1,
              showpart: !1,
              activeObj: null,
              sending: !1,
              contentId: "",
              relList: [],
              updateState: !0,
              videoContext: null,
              unit: 1.8,
              fullScreen: !1,
              showFull: !0
            }
          },
          onLoad: function(i) {
            this.unit = t.getStorageSync("unit"), this.contentId = i.id;
            var e = Object.assign({}, i);
            e.istrue = !1, e.contentId = i.id, e.currentTime = 0, e.duration = 0, this.videoList.push(e), this.getVlogByContentId(), this.updateReadingNum(this.contentId), this.oprateVideoList(this.contentId), this.getRelByContentId()
          },
          watch: {
            index_: function(i) {
              this.videoContext = t.createVideoContext("id".concat(this.index_)), this.relList = [], this.contentId = this.videoList[i].contentId, this.getRelByContentId(), this.updateReadingNum(this.contentId)
            },
            activeObj: function(i, e) {
              e || this.$nextTick((function() {
                t.createVideoContext("id".concat(this.index_)).play()
              })), this.getLines()
            }
          },
          onShareAppMessage: function(t) {
            var i = this.activeObj,
              e = i.coverImage.toLowerCase(),
              n = "id=".concat(i.contentId, "&title=").concat(i.title, "&vlogUrl=").concat(i.vlogUrl);
            return {
              title: i.title,
              imageUrl: -1 == e.indexOf(".gif") ? i.coverImage : getApp().globalData.shareimg,
              path: this.$util.setShareUrl("/subPage/pages/vlog/vlog?".concat(n))
            }
          },
          methods: {
            showalltext: function(t) {
              this.showpart = t
            },
            changefun: function(i) {
              this.is_active = !1, t.createVideoContext("id" + this.index_).pause()
            },
            playPause: function(i) {
              var e = t.createVideoContext("id" + i);
              this.firstclick = !0, this.isPlay ? (e.pause(), this.isPlay = !1) : (e.play(), this.isPlay = !0)
            },
            getLines: function() {
              var t = this;
              setTimeout((function() {
                var i = e.createSelectorQuery();
                i.select("#description").boundingClientRect(), i.exec((function(i) {
                  var e = i[0].height;
                  t.colnum = e / 20, t.showMore = e / 20 > 3
                }))
              }), 200)
            },
            updateReadingNum: function(t) {
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/CommonReadingNum/updateReadingNum", {
                originType: 1,
                originId: t
              }).then((function(t) {
                console.log("add success")
              }))
            },
            changeFull: function() {
              t.createVideoContext("id" + this.index_).requestFullScreen()
            },
            fullscreenchange: function(t) {
              var i = this;
              this.fullScreen = t.detail.fullScreen, this.showFull = !1, this.fullTimer && (clearTimeout(this.fullTimer), this.fullTimer = null), this.fullTimer = setTimeout((function() {
                i.showFull = !0
              }), 500)
            },
            animationfinishfun: function(i) {
              this.showMore = !1, this.isPlay = !0;
              var e = i.detail.current;
              this.activeObj = this.videoList[e], this.index_ = e, this.is_active = !0, this.videoList[e].istrue = !0;
              var n = t.createVideoContext("id" + this.index_);
              n.pause(), (n = t.createVideoContext("id" + e)).play(), this.videoList.length > 0 && e + 1 == this.videoList.length && !this.sending && this.oprateVideoList(this.videoList[e].contentId)
            },
            getRelByContentId: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/contentVlog/getVlogRelByContentId", {
                contentId: this.contentId
              }).then((function(i) {
                t.relList = i.data
              }))
            },
            videoUpdate: function(t) {
              this.updateState && (this.videoList[this.index_].currentTime = t.detail.currentTime / t.detail.duration * 100, this.videoList[this.index_].duration = t.detail.duration)
            },
            sliderChanging: function(t) {
              this.updateState = !1
            },
            sliderChange: function(t) {
              var i = this.videoList[this.index_].duration;
              i && (this.videoContext.seek(t.detail.value / 100 * i), this.videoList[this.index_].duration = t.detail.value, this.updateState = !0)
            },
            routerpage: function(t) {
              switch (t.type) {
                case 1:
                  this.$navigateTo({
                    url: "/subPack/pages/city/city?cityId=".concat(t.id)
                  });
                  break;
                case 2:
                case 4:
                case 5:
                case 6:
                  this.$navigateTo({
                    url: "/pages/spotDetail/spotDetail?spotId=" + t.id
                  });
                  break;
                case 3:
                  this.$navigateTo({
                    url: "/pages/spotThirdDetail/spotThirdDetail?spotId=" + t.id
                  })
              }
            },
            oprateVideoList: function(t) {
              var i = this;
              this.sending = !0, this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/contentVlog/getVlogListByContentId", {
                contentId: t
              }).then((function(t) {
                t.data.map((function(t) {
                  t.istrue = !1, t.currentTime = 0, t.duration = 0
                })), null === i.index_ && (i.index_ = 0), i.videoList = i.videoList.concat(t.data), i.activeObj = i.videoList[i.index_], i.sending = !1, i.videoList[0].istrue = !0
              }))
            },
            getVlogByContentId: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/contentVlog/getVlogByContentId", {
                contentId: this.contentId
              }).then((function(i) {
                1 === i.code && (t.videoList[0].height = i.data.height, t.videoList[0].width = i.data.width, t.videoList[0].title = i.data.title || "")
              }))
            },
            setDsbHeight: function(t) {
              return t.height ? (t.height < t.width && this.showFull ? 224 : 294) + (this.relList.length > 0 ? 0 : 180) + "rpx" : 0
            }
          }
        };
        i.default = n
      }).call(this, e("df3c").default, e("3223").default)
    }
};
