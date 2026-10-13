module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/9.js"), require("../../_commons/10.js"), require("../../_commons/14.js"), require("../../_commons/25.js"), require("../../_commons/27.js"), {
  ids: [76],
  modules: {
    189: function(e, t, o) {
      o.r(t);
      var i = o(7),
        s = o.n(i),
        r = o(0),
        a = o(3),
        d = o(1),
        n = o(2),
        c = o(11),
        l = o(5),
        h = o(24),
        u = o(33);

      function g(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), o.push.apply(o, i)
        }
        return o
      }

      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2 ? g(Object(o), !0).forEach((function(t) {
            s()(e, t, o[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : g(Object(o)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
          }))
        }
        return e
      }
      Component({
        behaviors: [h.a, l.a, u.a],
        data: {
          componentName: "pageLiveRecord",
          showRoomImg: !1,
          recordUrl: "",
          pluginVersion: "",
          recordMpStartTime: 0,
          playGoodsRecordId: 0,
          goodsVideoList: [],
          showVideoDotList: !1,
          showRecord: !1,
          curLiveStatusCode: "",
          goodsList: [],
          goodsRecordFrom: 0,
          showBacktoLiveIcon: !1,
          showRecordListIcon: !1,
          playingLayerStyle: "",
          _showHorizontalButton: !1,
          _goodsExplainEnd: !1,
          _androidGoodsExplainEnd: !1,
          _closePictureInPictureMode: !1
        },
        lifetimes: {
          attached: function() {
            this.createVideoContext(), n.a.compareVersion(this.storeData.pluginVersion, "1.2.4") > 0 && this.storeSetData({
              _showHorizontalButton: !0
            })
          },
          detached: function() {
            this.storeSetData({
              showVideoLoading: !0,
              playGoodsRecordId: 0
            })
          }
        },
        pageLifetimes: {
          show: function() {
            this.storeSetData({
              pictureInPictureMode: ["push", "pop"]
            })
          }
        },
        methods: {
          onStoreDataReady: function() {
            this.reCountSize(), this.storeSetData({
              isPlayVideo: !0,
              pictureInPictureMode: ["push", "pop"]
            }), this.setData({
              _closePictureInPictureMode: this.data.closePictureInPictureMode
            })
          },
          playGoodsRecordIdObserver: function(e) {
            var t = this.storeData.goodsVideoList.filter((function(t) {
              return t.goods_id == e
            }))[0];
            t && this.storeSetData({
              process: 0,
              isPlayVideo: !0,
              recordUrl: t.goods_describe_video_info.url || "",
              showVideoLoading: t.goods_describe_video_info.url !== this.data.replayUrl,
              recordMpStartTime: t.goods_describe_video_info.start_time_stamp,
              recordCommentList: [],
              recordMsgIdMap: {},
              recordCacheCommentList: []
            }), this.setData({
              _goodsExplainEnd: !1,
              _androidGoodsExplainEnd: !1
            }), this.logInfo("[打点] playGoodsRecordIdObserver", e)
          },
          goodsVideoListObserver: function(e) {
            var t = this;
            if (e && e.length) {
              var o = this.storeData,
                i = o.playGoodsRecordId,
                s = o.curLiveStatusCode,
                a = o.goodsList,
                n = !e.find((function(e) {
                  return e.goods_describe_video_info.goods_id === i
                })),
                c = a.find((function(e) {
                  return e.goods_id === i
                }));
              n && (c ? d.a.tipsSimple("讲解视频已被删除") : d.a.tipsSimple("商品已下架"), setTimeout((function() {
                t.data.goodsRecordFrom === r.a.LIVE_STATUS.LIVE && s === r.a.LIVE_STATUS.REPLAY ? t.storeSetData({
                  showRecord: !1,
                  showVideoDotList: !1,
                  curLiveStatusCode: r.a.LIVE_STATUS.END
                }) : s === r.a.LIVE_STATUS.REPLAY ? t.storeSetData({
                  showReplay: !0,
                  showRecord: !1,
                  showVideoDotList: !1
                }) : t.storeSetData({
                  showRecord: !1,
                  showVideoDotList: !1
                })
              }), 2e3))
            }
          },
          exitPictureInPictureModeObserver: function(e) {
            this.logInfo("exitPictureInPictureModeObserver", e), e && this.storeSetData({
              pictureInPictureMode: ""
            })
          },
          isPCRequestFullScreenObserver: function(e) {
            this.logInfo("isPCRequestFullScreenObserver", e), e && (this.recordVideoContext && this.recordVideoContext.requestFullScreen({
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
            }), d.a.tipsGotIt({
              title: e,
              onConfirm: function() {
                t._triggerCloseReplayModal = !1
              }
            })
          },
          getReplayInfo: function(e, t) {
            var o = this;
            console.warn("getReplayInfo times", e, t), a.a.getHistoryMsg(p(p({}, this.getReqBase()), {}, {
              content: {
                start_time: e,
                end_time: t,
                count: 100,
                msg_type: r.a.MESSAGE_TYPE.MESSAGE_TYPE_COMMENT_TEXT
              }
            })).then((function(e) {
              o.logInfo("getHistoryMsg succ", e);
              var t = e && e.list || [];
              t.length > 0 && o.storeSetData({
                recordCommentList: t
              })
            })).catch((function(e) {
              o.logError("getHistoryMsg fail", e)
            }))
          },
          createVideoContext: function() {
            this.recordVideoContext = wx.createVideoContext("recordId", this)
          },
          handleVideoControl: function(e) {
            this.recordVideoContext || this.createVideoContext(), console.warn("handleVideoControl ctx", this.recordVideoContext), console.warn("handleVideoControl ctx.pause", this.recordVideoContext.pause), e ? (this.storeSetData({
              isPlayVideo: !0
            }), this.setData({
              _closePictureInPictureMode: this.data.closePictureInPictureMode
            }), this.recordVideoContext && this.recordVideoContext.play()) : (this.storeSetData({
              isPlayVideo: !1
            }), this.recordVideoContext && this.recordVideoContext.pause())
          },
          bindHandleVideoControl: function(e) {
            var t = this;
            if (this.logInfo("[打点] bindHandleVideoControl", e), e.detail.handleVideoControl && this.handleVideoControl(e.detail.handleVideoControl.value), e.detail.handleVideoProcessChange) {
              var o = e.detail.handleVideoProcessChange.value,
                i = o;
              o >= this.data.durationSec ? (this.recordVideoContext && this.recordVideoContext.seek(i), this.setData({
                _goodsExplainEnd: !0
              }), c.a.isAndroid() && setTimeout((function() {
                t.storeSetData({
                  showVideoWaiting: !1
                })
              }), 1e3)) : (this.recordVideoContext && this.recordVideoContext.seek(i, "inaccurate"), this.setData({
                _goodsExplainEnd: !1
              })), this.storeSetData({
                isHandleVideoProcessChanging: !1
              })
            }
            e.detail.isHandleVideoProcessChanging && this.storeSetData({
              isHandleVideoProcessChanging: !0
            }), e.detail.showVideoDotList && this.storeSetData({
              showVideoDotList: e.detail.showVideoDotList.value
            }, !0), e.detail.backtoLive && e.detail.backtoLive.value && (this.storeSetData({
              showRecord: !1
            }), this.addReportMMData({
              actionType: 4,
              subActionType: 43,
              goodsId: this.data.playGoodsRecordId,
              instructionTime: this.data._videoCurTime
            })), e.detail.switchGoodsRecord && (this.storeSetData({
              process: 0,
              isPlayVideo: !0,
              playGoodsRecordId: e.detail.switchGoodsRecord.value
            }), this.setData({
              _goodsExplainEnd: e.detail.goodsExplainEnd.value,
              _closePictureInPictureMode: this.data.closePictureInPictureMode
            }), this.addReportMMData({
              actionType: 4,
              subActionType: 42,
              reserves: e.detail.reserves.value,
              goodsId: e.detail.switchGoodsRecord.value,
              instructionTime: this.data._videoCurTime
            }))
          },
          onVideoLoadedMetaData: function(e) {
            this.logInfo("[打点] onVideoLoadedMetaData", e.detail);
            var t = +e.detail.width,
              o = +e.detail.height;
            this.getScreenVerticalHeight(t, o);
            var i = +e.detail.duration;
            this.storeSetData({
              disabled: !1,
              showVideoWaiting: !1,
              showVideoLoading: !1,
              duration: n.a.formatDuration(Math.ceil(i)),
              durationSec: i,
              _maxDuration: this.getMaxDurationForProgress(i)
            })
          },
          onSeekComplete: function(e) {
            if (this.logInfo("[打点] onSeekComplete", e.detail), c.a.isAndroid()) {
              var t = e.detail.position / 1e3;
              this.storeSetData({
                showVideoWaiting: !1,
                showVideoLoading: !1,
                isHandleVideoProcessChanging: !1,
                time: n.a.formatDuration(Math.ceil(t))
              }), this.setData({
                _goodsExplainEnd: t >= this.data.durationSec
              }), this.data._androidGoodsExplainEnd && !this.data.isPlayVideo && this.recordVideoContext && this.recordVideoContext.pause(), this.storeData.isPlayVideo || this.recordVideoContext && this.recordVideoContext.pause()
            }
          },
          onVideoTimeUpdate: function(e) {
            var t = this.data,
              o = t.isHandleVideoProcessChanging,
              i = t._videoCurTime,
              s = Math.ceil(+e.detail.currentTime);
            this.data._videoCurTimeSeconds = s, o ? (this.storeSetData({
              showVideoWaiting: !1
            }), this.data._handleProcess || this.storeSetData({
              time: n.a.formatDuration(s)
            })) : (this.storeSetData({
              showVideoWaiting: !1
            }), this.data._handleProcess || this.storeSetData({
              process: s,
              time: n.a.formatDuration(s)
            })), this.data._handleProcess || this.storeSetData({
              time: n.a.formatDuration(s)
            });
            var r = this.data.recordMpStartTime;
            Math.abs(i - s) > 5 && (i > s && this.storeSetData({
              recordCommentList: [],
              recordMsgIdMap: {},
              recordCacheCommentList: []
            }), this.getReplayInfo(0, r + s + 5 + 1), this.data._videoCurTime = s)
          },
          onVideoEnded: function(e) {
            this.logInfo("[打点] onVideoEnded", e.detail), this.storeSetData({
              isPlayVideo: !1,
              time: n.a.formatDuration(Math.ceil(this.data.durationSec))
            }), this.setData({
              _goodsExplainEnd: !0,
              _androidGoodsExplainEnd: !0,
              _closePictureInPictureMode: !0
            })
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
            }), this.recordVideoContext && this.recordVideoContext.exitFullScreen()
          }
        }
      })
    },
    52: function(e, t, o) {
      e.exports = o(189)
    }
  },
  entries: [
    [52, 0, 1, 3, 6, 2, 4, 5, 7, 9, 10, 14, 25, 27]
  ]
}]);
