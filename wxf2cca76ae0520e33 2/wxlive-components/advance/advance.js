module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/16.js"), {
  ids: [46],
  modules: {
    476: function(e, t, i) {
      i.r(t);
      var a = i(0),
        o = i(2),
        n = i(5),
        r = i(22);
      Component({
        behaviors: [n.a, r.a],
        data: {
          componentName: "advance",
          previewType: 0,
          previewImgUrl: "",
          previewText: "",
          previewVideoUrl: "",
          previewVideoVid: -1,
          previewAuditStatus: 0,
          roomTitle: "",
          countdownTimeContent: "",
          roomStartTime: 0,
          isSubscribe: !1,
          previewVideoContext: null,
          isPreviewFullScreen: !1,
          curLiveStatusCode: "",
          showPushComment: !1,
          showStorePanel: !1,
          autoResume: !1,
          resumeSecond: 0,
          orientaion: "landscape",
          from: "",
          textMoreThanSix: !1,
          pictureTextMoreThanTwo: !1,
          isPlaying: !1,
          ended: !1
        },
        lifetimes: {
          detached: function() {
            this.data.isPreviewFullScreen && (this.data.previewVideoContext && this.data.previewVideoContext.exitFullScreen(), this.storeSetData({
              isPreviewFullScreen: !1
            }))
          },
          ready: function() {
            if (this.storeData.previewType == a.a.ADVANCE_TYPE.VIDEO) {
              var e = wx.createVideoContext("previewVideo", this);
              e && (this.data.previewVideoContext = e)
            } else if (this.storeData.previewType == a.a.ADVANCE_TYPE.RICH_TEXT || this.storeData.previewType == a.a.ADVANCE_TYPE.TEXT) {
              var t = wx.createSelectorQuery().in(this),
                i = this;
              setTimeout((function() {
                t.select("#advanceText").boundingClientRect((function(e) {
                  var t = i.storeData.previewText;
                  if (e && e.width) {
                    var a = i.calcLineNum(e.width, t),
                      n = i.getDataByLineNum(i.storeData.previewType, a);
                    i.setData(n)
                  } else {
                    i.logInfo("get advanceText width fail, use screenWidth - 64");
                    var r = i.calcLineNum(o.a.getScreenWidth() - 64, t),
                      s = i.getDataByLineNum(i.storeData.previewType, r);
                    i.setData(s)
                  }
                })).exec()
              }), 0)
            }
          }
        },
        methods: {
          tapMore: function() {
            this.storeSetData({
              showAdvanceDetail: !0
            })
          },
          roomStartTimeObserver: function(e) {
            if (e) {
              var t = this.liveManager.getServerTime();
              t >= e ? this.storeSetData({
                countdownTimeContent: ""
              }) : this.startPreviewCountdownTime(Math.ceil(e - t))
            }
          },
          onUnsubscribe: function() {
            this.previewUnsubscribe()
          },
          onSubscribe: function() {
            this.previewSubscribe()
          },
          curLiveStatusCodeObserver: function(e, t) {
            102 == t && 101 == e && this.data.previewVideoContext && (this.data.previewVideoContext.exitFullScreen(), this.storeSetData({
              isPreviewFullScreen: !1
            }))
          },
          fullScreenChange: function(e) {
            var t = e.detail.fullScreen;
            this.storeSetData({
              isPreviewFullScreen: t
            })
          },
          videoPause: function() {
            (this.storeData.showStorePanel || this.storeData.showPushComment) && (this.data.autoResume = !0), this.setData({
              isPlaying: !1
            })
          },
          showPushCommentObserver: function(e, t) {
            var i = this;
            !e && t && this.data.autoResume && (this.data.previewVideoContext && setTimeout((function() {
              i.data.previewVideoContext.play(), i.data.resumeSecond > 0 && i.data.previewVideoContext.seek(i.data.resumeSecond)
            }), 100), this.data.autoResume = !1)
          },
          showStorePanelObserver: function(e, t) {
            var i = this;
            !e && t && this.data.autoResume && (this.data.previewVideoContext && setTimeout((function() {
              i.data.previewVideoContext.play(), onsole.warn("test seek2:", i.data.resumeSecond), i.data.resumeSecond > 0 && i.data.previewVideoContext.seek(i.data.resumeSecond)
            }), 100), this.data.autoResume = !1)
          },
          timeUpdate: function(e) {
            this.data.resumeSecond = e.detail.currentTime
          },
          loadedMetaData: function(e) {
            var t = e.detail,
              i = t.width,
              a = t.height;
            this.data.orientaion = i > a ? "landscape" : "portrait"
          },
          bindPlay: function() {
            var e = this;
            "portrait" == this.data.orientaion && this.data.previewVideoContext && !this.data.isPreviewFullScreen && setTimeout((function() {
              e.data.previewVideoContext.requestFullScreen(), e.storeSetData({
                isPreviewFullScreen: !0
              })
            }), 0), this.data.ended && 0 == this.data.resumeSecond && (this.data.previewVideoContext.seek(0), this.data.previewVideoContext.play()), this.setData({
              isPlaying: !0
            }), this.data.ended = !1
          },
          calcLineNum: function(e, t) {
            for (var i = 0, a = 0; a < t.length; a++) t.charCodeAt(a) > 255 ? i += 1 : 10 == t.charCodeAt(a) ? a > 0 && 10 == t.charCodeAt(a - 1) ? i += 0 : i += e / 15 : i += .5;
            return this.logInfo("calcLineNum, width:".concat(e, ", length:").concat(i, ", content: ").concat(t)), i / Math.floor(e / 15)
          },
          getDataByLineNum: function(e, t) {
            var i = o.a.getScreenHeight();
            if (e == a.a.ADVANCE_TYPE.RICH_TEXT) {
              if (t > 2) return {
                pictureTextMoreThanTwo: !0
              }
            } else if (i > 670) {
              if (t > 9) return {
                textMoreThanSix: !0
              }
            } else if (t > 6) return {
              textMoreThanSix: !0
            }
          },
          clickPlayBtn: function() {
            this.data.previewVideoContext && !this.data.isPlaying && this.data.previewVideoContext.play()
          },
          videoEnded: function() {
            this.setData({
              isPlaying: !1
            }), this.data.resumeSecond = 0, this.data.ended = !0
          }
        }
      })
    },
    88: function(e, t, i) {
      e.exports = i(476)
    }
  },
  entries: [
    [88, 0, 1, 3, 6, 2, 4, 5, 7, 16]
  ]
}]);
