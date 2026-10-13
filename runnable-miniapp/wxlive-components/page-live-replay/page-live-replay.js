module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/9.js"), require("../../_commons/10.js"), require("../../_commons/14.js"), require("../../_commons/25.js"), require("../../_commons/27.js"), {
  ids: [77],
  modules: {
    157: function(e, t, i) {
      i.r(t);
      var o = i(7),
        a = i.n(o),
        r = i(0),
        s = i(3),
        n = i(1),
        l = i(2),
        d = i(24),
        c = i(33),
        h = i(5);

      function u(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), i.push.apply(i, o)
        }
        return i
      }

      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2 ? u(Object(i), !0).forEach((function(t) {
            a()(e, t, i[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
          }))
        }
        return e
      }
      Component({
        behaviors: [d.a, h.a, c.a],
        data: {
          componentName: "pageLiveReplay",
          curReplayUrlList: [],
          replayUrlList: [],
          replayUrl: "",
          replayOffsetList: [],
          liveStatusErrorList: [],
          mpStartTime: 0,
          playingLayerStyle: ""
        },
        lifetimes: {
          attached: function() {
            this.createVideoContext()
          },
          detached: function() {
            this.storeSetData({
              showVideoLoading: !0
            })
          }
        },
        pageLifetimes: {
          show: function() {
            this.storeSetData({
              helpRankPanelShow: !1,
              helpRulePanelShow: !1,
              pictureInPictureMode: ["push", "pop"]
            })
          }
        },
        methods: {
          onStoreDataReady: function() {
            this.getLiveInfo(), this.reCountSize(), this.storeSetData({
              helpRankPanelShow: !1,
              helpRulePanelShow: !1,
              pictureInPictureMode: ["push", "pop"]
            })
          },
          wifiTipsFlagObserver: function(e) {
            var t = this;
            this.storeSetData({
              isPlayVideo: !1
            }, (function() {
              "" !== e && t.checkUserNetwork()
            }))
          },
          checkUserNetwork: function() {
            var e = this,
              t = !(this.storeData.type !== r.a.SCENE_TYPE.RECOMMEND && this.storeData.type !== r.a.SCENE_TYPE.FOLLOW && this.storeData.type !== r.a.SCENE_TYPE.ACTIVITY);
            wx.getNetworkType({
              success: function(i) {
                e.logInfo("checkUserNetwork in replay", i);
                var o = i.networkType || null;
                e.storeData.networkType = o, "wifi" !== o ? e.storeData.isConfirmUse4G || t && 0 === e.storeData.wifiTipsFlag ? e.handleVideoControl(!0) : e.tipsConfirmShow || (e.tipsConfirmShow = !0, n.a.tipsConfirm({
                  title: "流量提醒",
                  content: "你目前处于非WiFi环境，是否继续观看？",
                  onConfirm: function() {
                    e.storeData.isConfirmUse4G = 1, e.tipsConfirmShow = !1, e.handleVideoControl(!0), t && s.a.setWxaliveStorage(e.getReqBase()).then((function(t) {
                      e.logInfo("setWxaliveStorage success in replay", t)
                    })).catch((function(t) {
                      e.logInfo("setWxaliveStorage error in replay", t)
                    }))
                  },
                  onCancel: function() {
                    e.tipsConfirmShow = !1, n.a.navigateBack(), e.storeSetData({
                      showVideoLoading: !1,
                      showVideoWaiting: !1
                    }), e.setData({
                      isPlayVideo: !1
                    })
                  }
                })) : e.handleVideoControl(!0)
              },
              fail: function(e) {
                this.logError("checkUserNetwork fail in replay", e)
              }
            })
          },
          replayUrlListObserver: function(e) {
            this.storeSetData({
              curReplayUrlList: e.concat(),
              replayUrl: e[0] || ""
            })
          },
          exitPictureInPictureModeObserver: function(e) {
            this.logInfo("exitPictureInPictureModeObserver", e), e && this.storeSetData({
              pictureInPictureMode: ""
            })
          },
          isPCRequestFullScreenObserver: function(e) {
            this.logInfo("isPCRequestFullScreenObserver", e), e && (this.replayVideoContext && this.replayVideoContext.requestFullScreen({
              direction: 0
            }), this.storeSetData({
              isPCFullScreen: !0
            }))
          },
          navigateBackEnd: function(e) {
            var t = this;
            this.storeSetData({
              showReplay: !1,
              curLiveStatusCode: r.a.LIVE_STATUS.END
            }), n.a.tipsGotIt({
              title: e,
              onConfirm: function() {
                t._triggerCloseReplayModal = !1
              }
            })
          },
          getReplayInfo: function(e, t) {
            var i = this;
            s.a.getHistoryMsg(p(p({}, this.getReqBase()), {}, {
              content: {
                start_time: e,
                end_time: t,
                count: 100,
                msg_type: r.a.MESSAGE_TYPE.MESSAGE_TYPE_COMMENT_TEXT
              }
            })).then((function(e) {
              i.logInfo("getHistoryMsg succ", e);
              var t = i.data.mpStartTime,
                o = e && e.list || [];
              o = o.filter((function(e) {
                return e.timestamp >= t
              })), i.data.liveStatusErrorList.forEach((function(e) {
                o = o.filter((function(t) {
                  return !(t.timestamp >= e.startTime && t.timestamp <= e.endTime)
                }))
              })), o.length > 0 && i.storeSetData({
                historyCommentList: o
              })
            })).catch((function(e) {
              i.logError("getHistoryMsg fail", e)
            }))
          },
          getLiveInfo: function() {
            var e = this;
            s.a.getLiveInfo(this.getReqBase()).then((function(t) {
              e.logInfo("getLiveInfo succ", t);
              var i = t.status_series.filter((function(e) {
                  return e.pre_status !== e.target_status && (e.pre_status === r.a.LIVE_STATUS.LIVE || e.target_status === r.a.LIVE_STATUS.LIVE)
                })),
                o = [],
                a = e.data.mpStartTime || t.start_time,
                s = 0;
              i.forEach((function(e, t) {
                if (e.pre_status === r.a.LIVE_STATUS.LIVE && e.target_status !== r.a.LIVE_STATUS.LIVE && i[t + 1] && i[t + 2] && i[t + 1].target_status !== r.a.LIVE_STATUS.END) {
                  var n = i[t + 1].update_time - i[t].update_time;
                  s += n;
                  var l = i[t + 1].update_time - a - s,
                    d = i[t + 2].update_time - a - s;
                  o.push({
                    replayStartTime: a + s,
                    videoStartTime: l,
                    videoEndTime: d
                  })
                }
              }));
              var n = [],
                l = t.status_series;
              l.forEach((function(e, t) {
                (e.pre_status === r.a.LIVE_STATUS.LIVE && e.target_status !== r.a.LIVE_STATUS.LIVE || e.pre_status !== r.a.LIVE_STATUS.LIVE && e.target_status !== r.a.LIVE_STATUS.LIVE) && l[t + 1] && n.push({
                  startTime: e.update_time,
                  endTime: l[t + 1].update_time
                })
              })), e.storeSetData({
                mpStartTime: a,
                replayOffsetList: o,
                liveStatusErrorList: n
              })
            })).catch((function(t) {
              e.logError("getLiveInfo err", t)
            }))
          },
          createVideoContext: function() {
            this.replayVideoContext = wx.createVideoContext("playerId", this), this.storeData.goodsRecordFrom === r.a.LIVE_STATUS.REPLAY && this.storeData.g_replayVideoCurrentTime > 0 && this.replayVideoContext && this.replayVideoContext.seek(this.storeData.g_replayVideoCurrentTime)
          },
          handleVideoControl: function(e) {
            this.replayVideoContext || this.createVideoContext(), e ? (this.storeSetData({
              isPlayVideo: !0
            }), this.replayVideoContext && this.replayVideoContext.play()) : (this.storeSetData({
              isPlayVideo: !1
            }), this.replayVideoContext && this.replayVideoContext.pause())
          },
          bindHandleVideoControl: function(e) {
            if (this.logInfo("[回放] bindHandleVideoControl", e), e.detail.handleVideoControl && (console.log("e.detail.handleVideoControl: ", e.detail.handleVideoControl), e.detail.handleVideoControl.value ? this.checkUserNetwork() : this.handleVideoControl(e.detail.handleVideoControl.value)), e.detail.handleVideoProcessChange) {
              var t = e.detail.handleVideoProcessChange.value,
                i = t;
              t === this.data.durationSec ? this.replayVideoContext && this.replayVideoContext.seek(i) : this.replayVideoContext && this.replayVideoContext.seek(i, "inaccurate"), this.storeSetData({
                isHandleVideoProcessChanging: !1
              })
            }
            e.detail.isHandleVideoProcessChanging && this.storeSetData({
              isHandleVideoProcessChanging: !0
            })
          },
          onVideoLoadedMetaData: function(e) {
            this.logInfo("[回放] onVideoLoadedMetaData", e.detail);
            var t = +e.detail.width,
              i = +e.detail.height;
            this.getScreenVerticalHeight(t, i);
            var o = +e.detail.duration;
            this.storeSetData({
              showVideoLoading: !1
            }), this.storeSetData({
              disabled: !1,
              duration: l.a.formatDuration(Math.ceil(o)),
              durationSec: o,
              _maxDuration: this.getMaxDurationForProgress(o)
            })
          },
          onVideoSeekComplete: function(e) {
            if (console.log("onVideoSeekComplete: ", e.detail), this.logInfo("[回放] onSeekComplete", e.detail), l.a.isAndroid()) {
              var t = e.detail.position / 1e3;
              this.setData({
                showVideoWaiting: !1,
                showVideoLoading: !1,
                _goodsExplainEnd: !1,
                isHandleVideoProcessChanging: !1,
                time: l.a.formatDuration(Math.ceil(t))
              }), this.storeData.isPlayVideo || this.replayVideoContext && this.replayVideoContext.pause()
            }
          },
          onVideoTimeUpdate: function(e) {
            var t = this.data,
              i = t.isHandleVideoProcessChanging,
              o = t._videoCurTime,
              a = t.replayOffsetList,
              r = t.mpStartTime,
              s = Math.ceil(+e.detail.currentTime);
            this.data._videoCurTimeSeconds = s, this.storeData.g_replayVideoCurrentTime = s, i ? (this.storeSetData({
              showVideoWaiting: !1
            }), this.data._handleProcess || this.storeSetData({
              time: l.a.formatDuration(s)
            })) : (this.storeSetData({
              showVideoWaiting: !1
            }), this.data._handleProcess || this.storeSetData({
              process: s,
              time: l.a.formatDuration(s)
            })), this.data._handleProcess || this.storeSetData({
              time: l.a.formatDuration(s)
            });
            var n = a.find((function(e) {
                return s >= e.videoStartTime && s <= e.videoEndTime
              })),
              d = n && n.replayStartTime || r;
            s !== o && s > 0 && s % 5 == 0 && (o > s || Math.abs(o - s) > 5 ? (o > s && this.storeSetData({
              curCommentList: [],
              allCommentList: [],
              historyCommentList: [],
              newNotifyCount: 0,
              isScrollCommentToBottom: !0,
              msgIdMap: {}
            }), this.getReplayInfo(0, d + s + 5 + 1)) : this.getReplayInfo(d + s, d + s + 5 + 1), this.data._videoCurTime = s)
          },
          onVideoEnded: function(e) {
            this.logInfo("onVideoEnded", e), this.data.curReplayUrlList.shift();
            var t = this.data.curReplayUrlList;
            t.length > 0 ? (this.logInfo("[回放] 当前播放", t[0]), this.storeSetData({
              replayUrl: t[0]
            })) : (this.logInfo("[回放] 回放结束"), this.storeSetData({
              showReplay: !1,
              curLiveStatusCode: r.a.LIVE_STATUS.END
            }))
          },
          onVideoFullScreenChange: function(e) {
            var t = e.detail.fullScreen;
            this.logInfo("onVideoFullScreenChange", t), t || this.storeSetData({
              isPCRequestFullScreen: !1,
              isPCFullScreen: !1
            })
          },
          onExitVideoFullScreen: function(e) {
            this.logInfo("onExitVideoFullScreen", e), this.storeSetData({
              isPCRequestFullScreen: !1,
              isPCFullScreen: !1
            }), this.replayVideoContext && this.replayVideoContext.exitFullScreen()
          }
        }
      })
    },
    48: function(e, t, i) {
      e.exports = i(157)
    }
  },
  entries: [
    [48, 0, 1, 3, 6, 2, 4, 5, 7, 9, 10, 14, 25, 27]
  ]
}]);
