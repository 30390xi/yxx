module.exports = {
  ids: [27],
  modules: {
    33: function(t, e, i) {
      var a = i(2),
        o = wx.getSystemInfoSync();
      e.a = Behavior({
        data: {
          showStorePanel: !1,
          showHorizontalBtn: !1,
          replayPageContainerClass: "",
          playingLayerStyle: "",
          hideReplay: !1,
          showVideoLoading: !0,
          showVideoWaiting: !0,
          closePictureInPicturePop: !1,
          closePictureInPictureMode: !1,
          pictureInPicturePushMode: ["push"],
          pictureInPictureMode: ["push", "pop"],
          disabled: !0,
          time: "00:00:00",
          duration: "00:00:00",
          durationSec: 0,
          process: 0,
          buffered: 0,
          isHandleVideoProcessChanging: !1,
          roomImg: "",
          isPlayVideo: !0,
          isClearScreen: !1,
          isPushStream: !1,
          screenType: "",
          waterMarkBottom: 0,
          rtxName: "",
          isGovernment: !1,
          coverFuzzy: !1,
          isPCFullScreen: !1,
          _videoCurTime: -1,
          _videoCurTimeSeconds: -1,
          _startX: 0,
          _historyX: [],
          _historyT: [],
          _moveSec: 0,
          _skipCurrentTime: 0,
          _videoCurrentTimePause: -1,
          _handleProcess: !1,
          _maxDuration: 0,
          _videoControlHeight: 100,
          _videoControlDistance: 0
        },
        lifetimes: {
          attached: function() {
            var t = this;
            setTimeout((function() {
              t.getVideoControlHeight()
            }), 500)
          },
          detached: function() {
            this.storeSetData({
              showVideoLoading: !0
            })
          }
        },
        methods: {
          getVideoControlHeight: function() {
            var t = this;
            this.getWxmlClientRect("video-control").then((function(e) {
              if (e) {
                var i = e.top;
                t.setData({
                  _videoControlHeight: i
                })
              }
            }))
          },
          getWxmlClientRect: function(t) {
            var e = this;
            return new Promise((function(i) {
              e.createSelectorQuery().select("#".concat(t)).boundingClientRect((function(t) {
                i(t)
              })).exec()
            }))
          },
          onVideoProgress: function(t) {
            this.storeSetData({
              buffered: Math.min(t.detail.buffered, 100)
            })
          },
          onVideoWaiting: function(t) {
            this.logInfo("[回放] onVideoWaiting", t), this.storeSetData({
              showVideoWaiting: !0
            })
          },
          onVideoError: function(t) {
            this.logInfo("[打点] onVideoError", t)
          },
          screenTypeObserver: function() {
            var t = this;
            this.reCountSize(), setTimeout((function() {
              t.getVideoControlHeight()
            }), 500)
          },
          onEnterPictureInPicture: function(t) {
            this.logInfo("[回放] onEnterPictureInPicture", t), this.addReportMMData({
              actionType: 1,
              subActionType: 1,
              reserves: Date.now(),
              livePlayStatus: "start"
            }), this.reportWatchTimeIncrement("start")
          },
          onLeavePictureInPicture: function(t) {
            this.setData({
              speedProgress: "",
              _handleProcess: !1
            }), this.logInfo("[回放] onLeavePictureInPicture", t), this.addReportMMData({
              actionType: 1,
              subActionType: 1,
              reserves: Date.now(),
              livePlayStatus: "end"
            }), this.addReportMMData({
              actionType: 6,
              subActionType: 2,
              reserves: 1
            }), this.reportWatchTimeIncrement("end")
          },
          touchStart: function(t) {
            var e = t.changedTouches[0].pageX,
              i = t.changedTouches[0].pageY;
            this.data.showVideoLoading || this.data.showVideoWaiting || i > this.data._videoControlHeight || this.data.showVideoDotList || (this.data._startX = e, this.data._videoCurrentTimePause = this.data._videoCurTimeSeconds, this.setData({
              _handleProcess: !0
            }))
          },
          touchEnd: function(t) {
            var e = t.changedTouches[0].pageX;
            this.data._moveSec = 0, this.data._historyX = [], this.data._historyT = [], this.data._videoCurrentTimePause = -1, Math.abs(e - this.data._startX) > 15 && this.data._handleProcess && (this.data._handleProcess && this.recordVideoContext && this.recordVideoContext.seek(this.data._skipCurrentTime), this.recordVideoContext && this.recordVideoContext.seek(this.data._skipCurrentTime), this.replayVideoContext && this.replayVideoContext.seek(this.data._skipCurrentTime), this.data._skipCurrentTime = 0), this.setData({
              speedProgress: "",
              _handleProcess: !1
            })
          },
          touchMove: function(t) {
            if (!this.data.showVideoLoading && !this.data.showVideoWaiting && this.data._handleProcess && !this.data.showVideoDotList) {
              var e = t.changedTouches[0].pageX;
              this.adjust(e, (new Date).getTime())
            }
          },
          adjust: function(t, e) {
            this.data._historyX.push(t), this.data._historyT.push(e);
            var i = this.data._historyT.length,
              s = this._computeVelocity(this.data._historyX, this.data._historyT);
            if (0 !== s) {
              var r = Math.abs(t - this.data._startX) / (500 / Math.ceil(s / 100));
              r = r + this.data._moveSec || 0, this.data._moveSec = r;
              var n = "vertical" === this.data.screenType ? o.screenWidth : o.screenHeight,
                h = (r = r >= 0 ? Math.min(r, Math.round((t - this.data._startX) / n * this.data._maxDuration)) : Math.max(r, Math.round((t - this.data._startX) / n * this.data._maxDuration))) + this.data._videoCurrentTimePause;
              h = Math.floor(Math.min(Math.max(h + r, 0), Math.floor(this.data.durationSec))), this.data._skipCurrentTime = h, this.data._historyT[i - 1] - this.data._historyT[0] > 150 && this.setData({
                process: h,
                time: a.a.formatDuration(h),
                speedProgress: a.a.formatDurationV2(h)
              })
            }
          },
          _computeVelocity: function(t, e) {
            var i = 0;
            if (t.length > 2)
              for (var a = t.length - 1, o = t[a], s = e[a]; a > 0;) {
                var r = s - e[--a];
                r > 30 && r < 50 && (i = (o - t[a]) / (r / 1e3))
              }
            return i > 1e3 ? i = 1e3 : i < -1e3 && (i = -1e3), i
          },
          getMaxDurationForProgress: function(t) {
            return t <= 180 ? t : t <= 600 ? 180 : t <= 1800 ? 300 : 600
          },
          catchTouch: function() {}
        }
      })
    }
  }
};
