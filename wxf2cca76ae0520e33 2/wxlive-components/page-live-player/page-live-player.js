require("../../@babel/runtime/helpers/Arrayincludes");
module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/9.js"), require("../../_commons/10.js"), require("../../_commons/14.js"), require("../../_commons/18.js"), require("../../_commons/25.js"), {
  ids: [75],
  modules: {
    149: function(e, t, i) {
      i.r(t);
      var a = i(7),
        o = i.n(a),
        n = i(0),
        r = i(1),
        s = i(24),
        c = i(5),
        h = i(21),
        l = i(12),
        _ = i(3),
        I = i(2);

      function d(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), i.push.apply(i, a)
        }
        return i
      }

      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2 ? d(Object(i), !0).forEach((function(t) {
            o()(e, t, i[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : d(Object(i)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
          }))
        }
        return e
      }
      Component({
        behaviors: [s.a, c.a, h.a],
        data: {
          componentName: "pageLivePlayer",
          curLiveStatusCode: "",
          allLiveStatusCode: n.a.LIVE_STATUS,
          isPriorPlayerPerpare: !0,
          pictureInPictureMode: ["push", "pop"],
          closePictureInPicturePop: !1,
          closePictureInPictureMode: !1,
          livePlayUrl: "",
          showLivePlayer: !0,
          isLivePlaying: !1,
          isM3u8: !1,
          roomImg: "",
          showRoomImg: !1,
          showLoading: !1,
          isPushStream: !1,
          screenType: "",
          waterMarkBottom: 0,
          screenVerticalHeight: 0,
          uiScreenWithWatermarkGap: 0,
          showHorizontalBtn: !1,
          isClearScreen: !1,
          rtxName: "",
          isGovernment: !1,
          isNetworkDisconnection: !1,
          playingLayerStyle: "",
          playerTips: "",
          hidePlayerGuide: !1,
          isPCFullScreen: !1,
          _isFirstGetNetworkType: !0,
          _pictureInPictureEnterLivePlay: !0,
          _onEnterBackground: !1,
          isHorizontalPC: !1,
          playerMode: "live",
          minCache: 1,
          maxCache: 3,
          showMicPanel: !1,
          micPanelMode: n.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE,
          linkMicType: 0,
          linkMicScore: 0,
          linkMicLastTimer: null,
          micTagTop: -1,
          micTagLeft: -1,
          linkMicConfirmTimer: null,
          curOpenid: "",
          lastSwitchBitrateTime: 0,
          hasGetSubAnchors: !1,
          isRoomLinkMicBan: !1,
          anchorOpenLinkMic: !1,
          coverFuzzy: !1,
          hangUpLinkMicCountTime: 0,
          hasHandleLinkMicInfo: !1,
          scaleRate: 1,
          translateX: 0,
          translateY: 0,
          videoWidthScale: 0,
          videoHeightScale: 0,
          videoWidth: 0,
          videoHeight: 0,
          useContain: !1,
          transformDuration: !1
        },
        created: function() {
          this._isNetworkDisconnection = !1
        },
        attached: function() {
          this.logInfo("page-live-player attached")
        },
        detached: function() {
          this.logInfo("page-live-player detached"), this.clear()
        },
        ready: function() {
          this.logInfo("page-live-player ready"), this.linkMicInit(!0)
        },
        pageLifetimes: {
          show: function() {
            var e = this;
            this.onNetworkStatusChange(), this._isFeedsType = !(this.storeData.type !== n.a.SCENE_TYPE.RECOMMEND && this.storeData.type !== n.a.SCENE_TYPE.FOLLOW && this.storeData.type !== n.a.SCENE_TYPE.ACTIVITY), this.data._pictureInPictureEnterLivePlay = !0, this.data._onEnterBackground = !1, this.isNavigateBackFromMiniProgram() && (this.logInfo("pageLifetimes show 跳至仿原生/小程序再返回时需要重新创建live-player"), this._notPfReport = 1, this._notPfReportMsg = "跳至仿原生/小程序再返回时", this.storeSetData({
              showLivePlayer: !1
            }, (function() {
              e.storeSetData({
                showLivePlayer: !0
              })
            }))), this.storeSetData({
              pictureInPictureMode: ["push", "pop"],
              isHideLotteryOper: !1
            }), this.logInfo("page-live-player show"), this.linkMicInit(!0)
          },
          hide: function() {
            this.logInfo("page-live-player hide"), this.clear(), r.a.offNetworkStatusChange()
          }
        },
        methods: {
          clear: function() {
            this.data._pictureInPictureEnterLivePlay = !1, this.data._onEnterBackground = !0, this.resetLinkMic(!0, !1)
          },
          linkMicInit: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (l.a.containMsgCallback(this.data._onNewMsg) || (this.data._onNewMsg = this.handleLinkMicC2CMsg.bind(this), l.a.onNewMsg(this.data._onNewMsg)), this.storeData.hasSkipFirstLinkMicBarrages = !1, this.data.hasHandleLinkMicInfo = !1, I.a.isPC()) this.logInfo("pc, not init websocket");
            else if (this.storeData.anchorOpenLinkMic)
              if (this.storeData.isRoomLinkMicBan) this.logInfo("运营人员关闭连麦，不初始化websocket");
              else if (I.a.isDevTools()) this.logInfo("开发者工具不连websocket");
            else if (this.storeData.curOpenid) {
              if (this.storeData.isTestWebSocket && (this.logInfo("连麦，初始化websocket 2"), l.a.init(p(p({}, this.getReqBase()), {}, {
                  openId: this.storeData.curOpenid
                })), l.a.setLogFunction(this.logInfo.bind(this)), this.checkUserNameVerify()), e && this.storeData.micPanelMode != n.a.MIC_PLAYER_MODE.APPLYING) this.storeSetData({
                micPanelMode: n.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE
              });
              else if (e && this.storeData.micPanelMode == n.a.MIC_PLAYER_MODE.APPLYING) {
                var t = this.storeData,
                  i = t.nickname,
                  a = t.avatarUrl,
                  o = t.curOpenid,
                  r = t.linkMicScore,
                  s = t.linkMicType;
                _.a.requestLinkMic(p(p({}, this.getReqBase()), {}, {
                  linkMicType: s,
                  score: r,
                  extra: JSON.stringify({
                    nickname: i,
                    avatar: a,
                    openid: o
                  })
                }))
              }
            } else this.logInfo("无openid，不连websocket");
            else this.logInfo("主播未开启连麦开关，不初始化websocket")
          },
          onBeforeDataReady: function() {
            this.performanceData = this.liveManager && this.liveManager.performanceData || {}
          },
          onStoreDataReady: function() {
            r.a.checkWeChatVersion(), wx.setKeepScreenOn({
              keepScreenOn: !0
            }), this.reCountSize(), this.createLivePlayerContext()
          },
          wifiTipsFlagObserver: function(e) {
            "" !== e && (this._staticInfoReady = !0, this.logInfo("wifiTipsFlagObserver wifiTipsFlag _staticInfoReadyAction", this.storeData.wifiTipsFlag, this._staticInfoReadyAction), this._staticInfoReadyAction && (this.checkUserNetwork(), this._staticInfoReadyAction = !1))
          },
          preloadWebview: function() {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200;
            setTimeout((function() {
              e.storeData.isAndroid && "function" == typeof wx.preloadWebview && (console.warn(">>>preloadNextWebview function not exists or is not android", e.storeData.isAndroid, "function" == typeof wx.preloadWebview), console.warn(">>>preloadNextWebview start preload next webview"), wx.preloadWebview({
                complete: function(e) {
                  console.warn(">>>preloadNextWebview res", JSON.stringify(e))
                }
              }))
            }), t)
          },
          curLiveStatusCodeObserver: function(e) {
            var t = this.storeData && this.storeData.type || 0,
              i = this.storeData && this.storeData.tips || "",
              a = !(t !== n.a.SCENE_TYPE.RECOMMEND && t !== n.a.SCENE_TYPE.FOLLOW && t !== n.a.SCENE_TYPE.ACTIVITY);
            e === n.a.LIVE_STATUS.LIVE ? this._staticInfoReady ? this.checkUserNetwork() : a ? this._staticInfoReadyAction = !0 : this.checkUserNetwork() : e && (this.storeSetData({
              showLivePlayer: !1
            }), this.preloadWebview(1e3)), e === n.a.LIVE_STATUS.PAUSE || e === n.a.LIVE_STATUS.ERROR ? (this._isLiveStatusError = !0, this.stopLivePlayerContext(), this.logInfo("直播暂停或错误，重置连麦"), this.resetLinkMic(!1)) : this._isLiveStatusError && (this._isLiveStatusError = !1, this.playLivePlayerContext(), this.linkMicInit()), e === n.a.LIVE_STATUS.END && this.resetLinkMic();
            var o = i || n.a.LIVE_STATUS_WORDING.FORBID,
              r = e === n.a.LIVE_STATUS.FORBID ? o : n.a.LIVE_STATUS_WORDING[e] || i || "";
            e !== n.a.LIVE_STATUS.LIVE ? this.storeSetData({
              pictureInPictureMode: "",
              showLoading: !1,
              isLivePlaying: !1,
              showRoomImg: !0,
              playerTips: r,
              showMicPanel: !1
            }) : this.storeSetData({
              pictureInPictureMode: ["push", "pop"],
              playerTips: r
            })
          },
          livePlayUrlObserver: function(e, t) {
            t && (this._isAlreadyGet2007 = !1, this.logInfo("切换url", e, t))
          },
          exitPictureInPictureModeObserver: function(e) {
            this.logInfo("exitPictureInPictureModeObserver", e), e && this.storeSetData({
              pictureInPictureMode: ""
            })
          },
          isPCRequestFullScreenObserver: function(e) {
            var t = this;
            this.logInfo("isPCRequestFullScreenObserver", e), e && this.livePlayerContext && this.livePlayerContext.requestFullScreen({
              direction: 0,
              success: function() {
                setTimeout((function() {
                  t.storeSetData({
                    isPCFullScreen: !0
                  })
                }), 100)
              },
              fail: function() {
                r.a.tipsSimple("全屏失败，请重试")
              }
            })
          },
          screenTypeObserver: function() {
            this.reCountSize()
          },
          checkUserNetwork: function() {
            var e = this;
            wx.getNetworkType({
              success: function(t) {
                e.logInfo("checkUserNetwork", t);
                var i = t.networkType || null;
                if (e.storeData.networkType = i, "none" !== i && i) {
                  if ("wifi" === i) return e.storeSetData({
                    showLivePlayer: !0
                  }), void e.linkMicInit();
                  if (e.linkMicInit(), e.storeData.isConfirmUse4G) return;
                  if (this._notPfReport = 1, this._notPfReportMsg = "isConfirmUse4G", e.storeSetData({
                      showLivePlayer: !1
                    }), e.logInfo("_this.storeData.wifiTipsFlag get", e.storeData.wifiTipsFlag, "_this._isFeedsType get", e._isFeedsType), e._isFeedsType && 0 === e.storeData.wifiTipsFlag) return void e.storeSetData({
                    showLivePlayer: !0
                  }, !0);
                  r.a.tipsConfirm({
                    title: "流量提醒",
                    content: "你目前处于非WiFi环境，是否继续观看？",
                    onConfirm: function() {
                      e.storeData.isConfirmUse4G = 1, e.storeSetData({
                        showLivePlayer: !0
                      }, !0), e._isFeedsType && _.a.setWxaliveStorage(e.getReqBase()).then((function(t) {
                        e.logInfo("setWxaliveStorage success", t)
                      })).catch((function(t) {
                        e.logInfo("setWxaliveStorage error", t)
                      }))
                    },
                    onCancel: function() {
                      r.a.navigateBack(), e.storeSetData({
                        showLivePlayer: !1,
                        showLoading: !1,
                        playerTips: "无法使用网络"
                      })
                    }
                  })
                } else this._notPfReport = 1, this._notPfReportMsg = "无法连接到网络", e.storeSetData({
                  playerTips: "无法连接到网络，请确认网络连接后重试"
                }), e.resetLinkMic()
              },
              fail: function(t) {
                this.logError("checkUserNetwork fail", t), e._isNetworkDisconnection = !1
              }
            })
          },
          onNetworkStatusChange: function() {
            var e = this,
              t = this;
            wx.onNetworkStatusChange((function(i) {
              if (e.logInfo("onNetworkStatusChange res", i, t.data), !t.data._onEnterBackground) {
                var a = i.isConnected,
                  o = i.networkType || "";
                t.storeData.networkType = o, a && "none" !== o ? (t._isNetworkDisconnection && t.storeData.curLiveStatusCode === n.a.LIVE_STATUS.LIVE && (e.logInfo("onNetworkStatusChange play API"), t.playLivePlayerContext()), "wifi" !== o && t.data.isLivePlaying && r.a.tipsSimple("当前处于非WiFi环境，请注意流量消耗"), t._isNetworkDisconnection = !1, t.linkMicInit()) : (t._isNetworkDisconnection = !0, t.storeSetData({
                  showRoomImg: !0,
                  isLivePlaying: !1,
                  playerTips: "无法连接到网络，请确认网络连接后重试"
                }), t.resetLinkMic(), e.logInfo("onNetworkStatusChange 断了", t.data))
              }
            }))
          },
          isNavigateBackFromMiniProgram: function() {
            var e = wx.getEnterOptionsSync && wx.getEnterOptionsSync().referrerInfo && wx.getEnterOptionsSync().referrerInfo.appId,
              t = wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene;
            return !(!e || 1038 !== t)
          },
          createLivePlayerContext: function() {
            this._isRegisterPictureInPictureEvent || (this._isRegisterPictureInPictureEvent = !0, this.livePlayerContext = wx.createLivePlayerContext("live-player-context", this))
          },
          playLivePlayerContext: function() {
            this.logInfo("playLivePlayerContext", Date.now()), this.livePlayerContext && this.livePlayerContext.play();
            var e = this;
            clearTimeout(this.isLivePlayingTimer), this.isLivePlayingTimer = setTimeout((function() {
              e.data.isLivePlaying || e.storeSetData({
                showLivePlayer: !1
              }, (function() {
                e.storeSetData({
                  showLivePlayer: !0
                })
              }))
            }), 5e3)
          },
          stopLivePlayerContext: function() {
            this.logInfo("stopLivePlayerContext 手动触发 stop ", Date.now()), this.livePlayerContext && this.livePlayerContext.stop()
          },
          onEnterPictureInPicture: function(e) {
            this.logInfo("onEnterPictureInPicture", e), this.storeSetData({
              isInPictureInPicture: !0
            }), this.addReportMMData({
              actionType: 1,
              subActionType: 1,
              reserves: Date.now(),
              livePlayStatus: "start"
            }), wx.setStorageSync("enterPictureInPictureRoomId", this.storeData.roomId), wx.setStorageSync("isEnterPictureInPicture-".concat(this.storeData.roomAppid, "-").concat(this.storeData.roomId), !0), this.reportWatchTimeIncrement("start")
          },
          onLeavePictureInPicture: function(e) {
            this.logInfo("onLeavePictureInPicture", e), this.storeSetData({
              isInPictureInPicture: !1
            }), this.addReportMMData({
              actionType: 1,
              subActionType: 1,
              reserves: Date.now(),
              livePlayStatus: "end"
            }), this.addReportMMData({
              actionType: 6,
              subActionType: 2,
              reserves: 1
            }), this.reportWatchTimeIncrement("end"), wx.setStorageSync("isEnterPictureInPicture-".concat(this.storeData.roomAppid, "-").concat(this.storeData.roomId), !1)
          },
          handleRecordVideoCatonTime: function(e) {
            if (!(e <= 0)) {
              this.logSetAnalyze({
                videoCaton: e
              }), this.reportPerformance("VIDEO_CATON", e), this.addReportMMData({
                actionType: 5,
                subActionType: 1,
                videoCaton: e
              });
              var t = this.videoCatonTimeList || [];
              if (t.push(Date.now()), t.length === n.a.PLAY_SHARPNESS_SWITCH.VIDEO_CATON_COUNT_LIMIT || e >= 1e3 * n.a.PLAY_SHARPNESS_SWITCH.VIDEO_CATON_TIME_LIMIT) {
                if (t[t.length - 1] - t[0] <= 1e3 * n.a.PLAY_SHARPNESS_SWITCH.VIDEO_PLAY_TIME || e >= 1e3 * n.a.PLAY_SHARPNESS_SWITCH.VIDEO_CATON_TIME_LIMIT) {
                  this.storeSetData({
                    lastSwitchBitrateTime: Date.now() / 1e3
                  }), this.videoCatonTimeList = [];
                  var i = Math.min(this.storeData.bitrateLevel + 1, n.a.BITRATE_LEVEL);
                  return void(i !== this.storeData.bitrateLevel && (this.logInfo("[bitrateLevel] 调整", {
                    new: i,
                    old: this.storeData.bitrateLevel
                  }), this.storeSetData({
                    bitrateLevel: i
                  })))
                }
                t.shift()
              }
              this.videoCatonTimeList = t
            }
          },
          tipsObserver: function(e) {
            var t = this.storeData.curLiveStatusCode,
              i = e || n.a.LIVE_STATUS_WORDING.FORBID,
              a = t === n.a.LIVE_STATUS.FORBID ? i : n.a.LIVE_STATUS_WORDING[t] || e || "";
            this.storeSetData({
              playerTips: a
            })
          },
          onLivePlayerStateChange: function(e) {
            var t = this;
            if (this.logInfoNoConsole("onLivePlayerStateChange", e.detail), !this._isLiveStatusError) {
              var i = this.storeData || {},
                a = i.curLiveStatusCode,
                o = i.tips,
                s = i.isOnShare,
                c = o || n.a.LIVE_STATUS_WORDING.FORBID,
                h = a === n.a.LIVE_STATUS.FORBID ? c : n.a.LIVE_STATUS_WORDING[a] || o || "",
                l = +e.detail.code;
              if (this._isNetworkDisconnection = -2301 === l, this._maskPlayerCost(l), 2007 === l) this._isAlreadyGet2007 ? this.data.playerTips || this.storeSetData({
                showLoading: !0
              }) : this._isAlreadyGet2007 = !0;
              else if (2004 === l || 2026 === l) this.storeSetData({
                showLoading: !1,
                showRoomImg: !1,
                isLivePlaying: !0,
                playerTips: h
              }, (function() {
                t._maskPlayerCost("player_img"), t.liveManager && t.liveManager.cancelPriorPlayerPerpare("player2007"), t.preloadWebview()
              })), this.reportPerformance("LIVE_PLAYER_INIT_SUCC", 1);
              else if (-2301 === l) this.storeSetData({
                showLoading: !1,
                showRoomImg: !0,
                showHorizontalBtn: !1,
                isLivePlaying: !1,
                playerTips: h || "直播加载失败，请稍候重试"
              }, !0), this.reportPerformance("LIVE_PLAYER_ERROR", 1), clearTimeout(this.restartLivePlayerContext), this.restartLivePlayerContext = setTimeout((function() {
                t.playLivePlayerContext()
              }), 3e4);
              else if (2104 === l) this.storeSetData({
                showLoading: !1,
                playerTips: h
              }), r.a.tipsSimple("当前网络较差");
              else if (2105 === l) {
                var _ = e.detail.message,
                  I = +_.substring(10, _.length - 2);
                this.handleRecordVideoCatonTime(I)
              } else 2101 === l || 2102 === l ? (this.logInfo("当前视频帧解码失败", l), this.reportPerformance("LIVE_PLAYER_DECODE_ERROR", 1), this.addReportMMData({
                actionType: 5,
                subActionType: 9,
                reserves: 1
              })) : -2304 === l || "启动软解" === e.detail.message ? (this.logInfo("当前视频帧解码失败", l), this.logSetAnalyze({
                error: "当前视频帧解码失败"
              }), this.storeSetData({
                livePlayUrl: this.storeData.livePlay264Url
              }), this.reportPerformance("LIVE_PLAYER_H265_DECODE_NOT_SUPPORT", 1), this.addReportMMData({
                actionType: 5,
                subActionType: 9,
                reserves: 2
              })) : 6e3 === l && ((s || this.isNavigateBackFromMiniProgram()) && this.storeSetData({
                showLoading: !1,
                showRoomImg: !0,
                topToast: ""
              }), this.storeSetDataNoSync({
                isOnShare: !1
              }), this.reportPerformance("LIVE_PLAYER_ERROR", 1))
            }
          },
          onLivePlayerNetStatus: function(e) {
            var t = e.detail.info;
            if (t) {
              this.logInfoNoConsole("onLivePlayerNetStatus", t), this.logSetAnalyze(t);
              var i = +t.videoWidth,
                a = +t.videoHeight,
                o = +t.videoBitrate,
                n = +t.audioBitrate,
                r = +t.videoFPS,
                s = +t.netSpeed,
                c = Math.abs(+t.netJitter);
              this.getScreenVerticalHeight(i, a), this.reportPerformance("VIDEO_BITRATE", o), this.reportPerformance("AUDIO_BITRATE", n), this.reportPerformance("VIDEO_FPS", r), this.reportPerformance("NET_SPEED", s), this.reportPerformance("NET_JITTER", c), s > 0 && s < 300 && this.reportPerformance("SLOW_SPEED", s), this.addReportMMData({
                actionType: 5,
                subActionType: 2,
                videoFPS: r,
                netJitter: c,
                netSpeed: s
              }), this.liveManager && this.liveManager.scaleLivePlayer(i, a)
            }
          },
          onLivePlayerFullScreenChange: function(e) {
            var t = e.detail.fullScreen;
            this.logInfo("onLivePlayerFullScreenChange", t), t || this.storeSetData({
              isPCRequestFullScreen: !1,
              isPCFullScreen: !1
            })
          },
          onExitLivePlayerFullScreen: function(e) {
            this.logInfo("onExitLivePlayerFullScreen", e), this.storeSetData({
              isPCRequestFullScreen: !1,
              isPCFullScreen: !1
            }), this.livePlayerContext && this.livePlayerContext.exitFullScreen()
          },
          onLivePlayerError: function(e) {
            var t = e.detail && e.detail.errMsg || "";
            this.logError("onLivePlayerError", e), t.toLowerCase().includes("no permission") ? (t.includes("onLivePlayerEvent") || t.includes("onXWebLivePlayerEvent") ? this.storeSetData({
              showLoading: !1,
              showRoomImg: !1
            }) : this.storeSetData({
              showLoading: !1,
              showRoomImg: !0,
              isLivePlaying: !1
            }), this.logSetAnalyze({
              noPermission: t
            })) : this.storeSetData({
              showLoading: !1,
              showRoomImg: !0,
              isLivePlaying: !1
            }), this.reportPerformance("LIVE_PLAYER_INIT_ERROR", 1)
          },
          onLivePlayerRenderError: function(e) {
            this.logWarn("onLivePlayerRenderError", e), this.logSetAnalyze("onLivePlayerRenderError", e)
          },
          onVideoLoadedMetaData: function(e) {
            this.logInfo("onVideoLoadedMetaData", e);
            var t = +e.detail.width,
              i = +e.detail.height;
            this.getScreenVerticalHeight(t, i);
            var a = this.data.curLiveStatusCode;
            this._isNetworkDisconnection = !1, this.storeSetData({
              showLoading: !1,
              showRoomImg: !1,
              isLivePlaying: !0,
              playerTips: n.a.LIVE_STATUS_WORDING[a] || ""
            })
          },
          onVideoTimeUpdate: function(e) {
            this.storeSetData({
              showLoading: !1
            })
          },
          onVideoWaiting: function(e) {
            this.logInfo("onVideoWaiting", e), this.storeSetData({
              showLoading: !0
            })
          },
          onVideoError: function(e) {
            this.logError("onVideoError", e)
          },
          _reportPlayerCost: function() {
            var e = this;
            if (this.performanceData && 0 !== Object.keys(this.performanceData).length && !this._notPfReport && !this.performanceData.has_leave) {
              this._notPfReport = 1;
              var t = wx.getSystemInfoSync() || {},
                i = {};
              ["language", "wifiEnabled", "version", "system", "pixelRatio", "model", "brand", "platform", "SDKVersion", "devicePixelRatio"].forEach((function(e) {
                i[e] = t[e]
              })), this.logWarnNoConsole("基础信息", I.a.pluginVersion, i), this.logWarnNoConsole("播放器相关数据 ", JSON.stringify(this.performanceData)), this.logWarnNoConsole("播放地址", this.data.livePlayUrl);
              var a = {};
              [
                ["COST_BEFORE_GET_URL", "simpleRequst_start", "manager_start"],
                ["COST_GET_URL", "simpleRequst_end", "simpleRequst_start"],
                ["COST_SET_URL", "seturl_end", "simpleRequst_end"],
                ["COST_PLAYER_CREAT", "player_2007", "seturl_end"],
                ["COST_PLAYER_LINK", "player_2001", "player_2007"],
                ["COST_PLAYER_RENDER", "player_2004", "player_2001"],
                ["COST_DEL_IMG", "player_img", "player_2004"],
                ["COST_PLAY_TOTAL", "player_img", "manager_start"]
              ].forEach((function(t) {
                var i = (e.performanceData[t[1]] || 0) - (e.performanceData[t[2]] || 0);
                i = i >= 0 ? i : 0, e.logWarnNoConsole(t[0] + ":" + i), e.reportPerformance(t[0], i, "pluginVersion"), a[t[0]] = i
              })), this.logWarnNoConsole("IS_PRIOR_PLAYER:", this.performanceData.isPriorPlayer ? 1 : 2), console.warn("[preloadNextPageView costResult]", JSON.stringify(a)), this.addReportMMData({
                actionType: 5,
                subActionType: 6,
                reserves: a.COST_PLAY_TOTAL || 0,
                reserves1: a.COST_GET_URL || 0,
                reserves2: a.COST_SET_URL || 0,
                reserves3: a.COST_PLAYER_CREAT || 0,
                reserves4: a.COST_PLAYER_LINK || 0,
                reserves5: a.COST_PLAYER_RENDER || 0,
                reserves6: a.COST_DEL_IMG || 0,
                reserves7: this.performanceData.isPriorPlayer ? 1 : 2
              })
            }
          },
          _maskPlayerCost: function(e) {
            !this.performanceData || 0 === Object.keys(this.performanceData).length || this.performanceData.not_report || this._notPfReport || (-2301 !== e && 2104 !== e && 2105 !== e && 2101 != e && 2102 !== e ? 2001 !== e || this.performanceData.player_2001 ? 2007 !== e || this.performanceData.player_2007 ? 2004 !== e || this.performanceData.player_2004 ? "player_img" !== e || this.performanceData.player_img || (this.performanceData.player_img = Date.now(), console.warn("[preloadNextPageView player_img]"), this._reportPlayerCost()) : (this.performanceData.player_2004 = Date.now(), console.warn("[preloadNextPageView player_2004]")) : (this.performanceData.player_2007 = Date.now(), console.warn("[preloadNextPageView player_2007]")) : (this.performanceData.player_2001 = Date.now(), console.warn("[preloadNextPageView player_2001]")) : this._notPfReport = 1)
          },
          resetLinkMic: function() {
            var e = this,
              t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.storeData && this.storeData.micPanelMode == n.a.MIC_PLAYER_MODE.APPLYING && _.a.cancelLinkMicRequest(p({}, this.getReqBase())), this.sendLinkMicViewerLeave(), this.storeData && (clearInterval(this.storeData.linkMicConfirmTimer), clearInterval(this.storeData.linkMicLastTimer)), this.storeSetData && this.storeSetData({
              showMicPanel: !1,
              showOthersMicTag: !1,
              startLinkMicTimer: !1,
              hasSendRecoverRequest: !1,
              hasRecoverToInviting: !1,
              micTagTop: -1,
              micTagLeft: -1,
              videoWidthScale: 0,
              videoHeightScale: 0
            }), setTimeout((function() {
              e.storeSetData && e.storeSetData({
                playerMode: "live",
                audiencePushUrl: "",
                minCache: 1,
                maxCache: 3,
                translateX: 0,
                translateY: 0
              })
            }), 0), i && this.storeSetData && this.storeSetData({
              micPanelMode: n.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE
            }), I.a.getDelayPlayUrl() && this.storeSetData && this.storeSetData({
              livePlayUrl: I.a.getDelayPlayUrl()
            }), t && this.data._onNewMsg && (l.a.offNewMsg(this.data._onNewMsg), this.data._onNewMsg = null)
          },
          roomDynamicInfoObserver: function(e) {
            this.handleLinkMicInfo(e)
          },
          handleLinkMicInfo: function(e) {
            var t = this;
            if (this.storeData.isLinkMicOpen) {
              var i = e.linkmic_info;
              if (i) {
                if (!i.linkmic_person) return;
                if (!l.a.isWebSocketOpen() && !I.a.isPC() && !I.a.isDevTools() && this.storeData.anchorOpenLinkMic && !this.storeData.isRoomLinkMicBan) {
                  this.logInfo("连麦，初始化websocket 3， 连上后再立即处理轮询的连麦信息"), l.a.init(p(p({}, this.getReqBase()), {}, {
                    openId: this.storeData.curOpenid
                  })), l.a.setLogFunction(this.logInfo.bind(this)), this.checkUserNameVerify();
                  var a = this.handleLinkMicInfo.bind(this, e);
                  return void l.a.bindSocketOpenCallbacks(a)
                }
                this.logInfo("handleLinkMicInfo", i);
                var o = i.linkmic_person.filter((function(e) {
                    return e.msg_person.role_type == n.a.LINK_MIC_ROLE_TYPE.VIEWERS
                  })),
                  r = i.linkmic_person.filter((function(e) {
                    return e.msg_person.role_type == n.a.LINK_MIC_ROLE_TYPE.ANCHOR
                  }));
                r.length > 0 && (r = r[0]), o.forEach((function(e) {
                  switch (e.linkmic_state) {
                    case n.a.LINK_MIC_STATE.LINKMIC_UNOPEN:
                      t.hideOthersMicTag(e);
                      break;
                    case n.a.LINK_MIC_STATE.LINKMIC_INVITE:
                      t.recoverLinkMicStateToInviting(r, e, n.a.LINK_MIC_TYPE.VIDEO);
                      break;
                    case n.a.LINK_MIC_STATE.LINKMIC_VOICE_INVITE:
                      t.recoverLinkMicStateToInviting(r, e, n.a.LINK_MIC_TYPE.AUDIO);
                      break;
                    case n.a.LINK_MIC_STATE.LINKMIC_OPEN:
                      t.recoverLinkMicStateToConnecting(n.a.LINK_MIC_TYPE.VIDEO, e, r);
                      break;
                    case n.a.LINK_MIC_STATE.LINKMIC_VOICE_OPEN:
                      t.recoverLinkMicStateToConnecting(n.a.LINK_MIC_TYPE.AUDIO, e, r)
                  }
                })), this.data.hasHandleLinkMicInfo = !0
              }
            } else this.logInfo("后台关闭连麦，不处理轮询的连麦信息")
          },
          recoverLinkMicStateToInviting: function(e, t, i) {
            if (t.msg_person.openid == this.storeData.curOpenid)
              if (I.a.isPC()) this.logInfo("pc, not recover to inviting");
              else if (this.storeData.curLiveStatusCode == n.a.LIVE_STATUS.LIVE) {
              if (!this.data.hasHandleLinkMicInfo && [n.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE, n.a.MIC_PLAYER_MODE.APPLYING].indexOf(this.storeData.micPanelMode) > -1 && e && e.msg_person && e.msg_person.openid && !this.storeData.hasRecoverToInviting) {
                if (!l.a.isWebSocketOpen()) return void this.logInfo("未连wss，不发恢复到邀请中请求");
                this.storeSetData({
                  hasRecoverToInviting: !0,
                  linkMicType: i,
                  anchorOpenid: e.msg_person.openid,
                  anchorNickname: e.msg_person.nickname,
                  anchorAvatar: e.msg_person.headpic
                }), this.sendRecoverToInvitingRequest(), this.logInfo("询问主播能否直接恢复到邀请中")
              }
            } else this.logInfo("不是直播中，不恢复到邀请中", this.storeData.curLiveStatusCode);
            else this.logInfo("恢复到邀请中的不是自己， viewer:", t.msg_person.openid, "cur:", this.storeData.curOpenid)
          },
          recoverLinkMicStateToConnecting: function(e, t, i) {
            var a = this.storeData.micPanelMode;
            if (a != n.a.MIC_PLAYER_MODE.INVITING && a != n.a.MIC_PLAYER_MODE.CONNECTING)
              if (this.storeData.curLiveStatusCode == n.a.LIVE_STATUS.LIVE)
                if (t.msg_person.openid == this.storeData.curOpenid) {
                  if (this.data.hasHandleLinkMicInfo) return;
                  if (this.storeData.hasSendRecoverRequest) return void this.logInfo("已发送过恢复连麦请求，不发了");
                  if (I.a.isPC()) return void this.logInfo("pc, not recover to connecting");
                  if (!i.msg_person.openid) return void this.logInfo("recoverLinkMicStateToConnecting openid null, ignore");
                  var o = 1 == t.close_mic;
                  if ([n.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE, n.a.MIC_PLAYER_MODE.APPLYING].indexOf(a) > -1) {
                    if (!l.a.isWebSocketOpen()) return void this.logInfo("未连wss，不发恢复到连麦中请求");
                    this.storeSetData({
                      anchorOpenid: i.msg_person.openid,
                      linkMicType: e,
                      micBan: o,
                      hasSendRecoverRequest: !0,
                      nickname: t.msg_person.nickname,
                      avatarUrl: t.msg_person.headpic,
                      anchorNickname: i.msg_person.nickname,
                      anchorAvatar: i.msg_person.headpic
                    }), this.logInfo("连麦 询问主播能否恢复"), this.data.recoverGetAudiencePushUrl = !1, this.sendRecoverRequest()
                  }
                } else if (e == n.a.LINK_MIC_TYPE.AUDIO) this.storeData.showOthersMicTag && t.msg_person.openid == this.storeData.othersOpenid || (this.setMicTagPosition(!0), this.storeSetData({
              showOthersMicTag: !0,
              othersAvatarUrl: t.msg_person.headpic,
              othersNickname: t.msg_person.nickname,
              othersOpenid: t.msg_person.openid
            }));
            else {
              this.storeData.showOthersMicTag && this.storeSetData({
                showOthersMicTag: !1,
                othersAvatarUrl: t.msg_person.headpic,
                othersNickname: t.msg_person.nickname,
                othersOpenid: t.msg_person.openid,
                micTagTop: -1
              });
              var r = i.msg_person.extra_info;
              if (this.logInfo("extraInfo: ".concat(r)), r) try {
                var s = r = JSON.parse(r),
                  c = s.anchorWidth,
                  h = s.anchorHeight,
                  _ = s.viewerX,
                  d = (s.viewerY, s.viewerWidth),
                  p = (s.viewerHeight, wx.getSystemInfoSync()),
                  u = p.windowWidth,
                  f = p.windowHeight;
                if (u > f) {
                  var g = f;
                  f = u, u = g
                }
                if (0 == f || 0 == h || 0 == this.storeData.scaleRate) return void this.logInfo("contain 0, windowHeight: ".concat(f, ", anchorHeight: ").concat(h, ", scaleRate: ").concat(this.storeData.scaleRate));
                var P = u / f;
                if (P < c / h && 1 != this.storeData.scaleRate) {
                  var m = f / h,
                    v = 0,
                    M = Math.abs(Math.floor((c * m - u) / 2));
                  _ + d / 2 < c / 2 ? (v = (v = Math.round((c * m - u) / 2 + 12 - _ * m)) > M ? M : v, this.logInfo("translate live player, offset:".concat(v, ", window: ").concat(u, " * ").concat(f, ", maxOffset: ").concat(M, ", scaleRate: ").concat(m)), v > 0 ? this.storeData.translateX != v && this.setLivePlayerTranslate(Math.round(v / this.storeData.scaleRate), 0) : 0 != this.storeData.translateX && this.setLivePlayerTranslate(0, 0)) : (v = (v = Math.round(d * m + _ * m - ((c * m - u) / 2 + u - 12))) > M ? M : v, this.logInfo("translate live player, offset:".concat(v, ", window: ").concat(u, " * ").concat(f, ", maxOffset: ").concat(M, ", scaleRate: ").concat(m)), v > 0 ? this.storeData.translateX != -v && this.setLivePlayerTranslate(-Math.round(v / this.storeData.scaleRate), 0) : 0 != this.storeData.translateX && this.setLivePlayerTranslate(0, 0))
                } else this.logInfo("更宽, whRate: ".concat(P, ", scaleRate: ").concat(this.storeData.scaleRate))
              } catch (e) {
                this.logInfo("连麦轮询读取extra_info，catch error，", e)
              }
            } else this.logInfo("不是直播中，不恢复连麦", this.storeData.curLiveStatusCode)
          },
          startLinkMicTimerObserver: function(e, t) {
            e && !t && this.startLinkMicTimer()
          },
          startLinkMicTimer: function() {
            var e = this;
            clearInterval(this.storeData.linkMicLastTimer), this.storeData.linkMicLastTimer = null, clearInterval(this.storeData.linkMicConfirmTimer), this.storeData.linkMicConfirmTimer = null, this.storeData.linkMicLastTimer = setInterval((function() {
              var t = e.storeData.linkMicLastTime + 1;
              e.storeSetData({
                linkMicLastTime: t,
                linkMicLastTimeFormat: I.a.formatDurationAndHideHourIfHourZero(t)
              })
            }), 1e3), this.storeSetData({
              linkMicLastTimer: this.storeData.linkMicLastTimer
            })
          },
          handleLinkMicC2CMsg: function(e) {
            if (this.logInfo("handle linkmic msg ", e), this.storeData.isLinkMicOpen)
              if (l.a.isWebSocketOpen()) try {
                var t = e.body && e.body.roomAppid || "",
                  i = e.body && e.body.roomId || "";
                if (this.storeData.roomAppid != t || this.storeData.roomId != i) return void this.logInfo("ignore linkmic msg, cur roomAppid, roomId:", this.storeData.roomAppid, this.storeData.roomId, ", msg roomAppid, roomId:", t, i);
                var a = e.body && e.body.deputy_number || [];
                if (e.msg_type === n.a.C2C_MSG_TYPE.LINKMIC) switch (e.msg_sub_type) {
                  case n.a.C2C_MSG_SUB_TYPE.ANCHOR_INVITION:
                    this.handleAnchorInvition(e.send_person, a, n.a.LINK_MIC_TYPE.VIDEO);
                    break;
                  case n.a.C2C_MSG_SUB_TYPE.ANCHOR_VOICE_INVITION:
                    this.handleAnchorInvition(e.send_person, a, n.a.LINK_MIC_TYPE.AUDIO);
                    break;
                  case n.a.C2C_MSG_SUB_TYPE.ANCHOR_HANGUP:
                    this.handleAnchorHangUp();
                    break;
                  case n.a.C2C_MSG_SUB_TYPE.ANCHOR_CANCEL:
                    this.handleAnchorCancelInvition();
                    break;
                  case n.a.C2C_MSG_SUB_TYPE.ANCHOR_BANMIC:
                    this.handleAnchorBanMic();
                    break;
                  case n.a.C2C_MSG_SUB_TYPE.ANCHOR_OPENMIC:
                    this.handleAnchorOpenMic();
                    break;
                  case n.a.C2C_MSG_SUB_TYPE.ANCHOR_VOICE_RECOVER:
                    this.handleAnchorRecover(e.send_person, a, n.a.LINK_MIC_TYPE.AUDIO);
                    break;
                  case n.a.C2C_MSG_SUB_TYPE.ANCHOR_RECOVER:
                    this.handleAnchorRecover(e.send_person, a, n.a.LINK_MIC_TYPE.VIDEO);
                    break;
                  case n.a.C2C_MSG_SUB_TYPE.VIEWER_CAN_NOT_RECOVER:
                    this.handleAnchorRejectRecover();
                    break;
                  case n.a.C2C_MSG_SUB_TYPE.VIEWER_CAN_RECOVER:
                    this.handleAutoRecoverOk(a, e.body && e.body.linkTime || 0);
                    break;
                  case n.a.C2C_MSG_SUB_TYPE.SUBANCHORS_RESP:
                    break;
                  case n.a.C2C_MSG_SUB_TYPE.IS_CATON_REQ:
                    this.handleIsCatonReq();
                    break;
                  case n.a.C2C_MSG_SUB_TYPE.ANCHOR_CLOSE_LINK_MIC:
                    r.a.tipsSimple("主播已关闭连麦"), clearInterval(this.storeData.linkMicConfirmTimer), this.storeData.linkMicConfirmTimer = null, this.storeSetData({
                      micPanelMode: n.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE,
                      audiencePushUrl: "",
                      showMicPanel: !1
                    }), this.handleAnchorHangUp(!1);
                    break;
                  case n.a.C2C_MSG_SUB_TYPE.IS_VERIFIED_REQ:
                    this.isVerifiedResponse();
                    break;
                  case n.a.C2C_MSG_SUB_TYPE.CAN_RECOVER_TO_INVTING:
                    this.handleCanAutoRecoverToInviting();
                    break;
                  case n.a.C2C_MSG_SUB_TYPE.CAN_NOT_RECOVER_TO_INVTING:
                    this.handleCanNotAutoRecoverToInviting()
                }
              } catch (t) {
                console.error("handle c2c msg error, err:", t, ", msg:", e), this.logInfo("handle c2c msg error, err:", t, ", msg:", e)
              } else this.logInfo("websocket未连上，不处理");
              else this.logInfo("后台关闭连麦，不处理c2c信息,storeData:", this.storeData)
          },
          handleAnchorInvition: function(e, t, i) {
            var a = this,
              o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            this.storeData || (this.logInfo("handleAnchorInvition no store data!!!!!"), this.storeData = this.liveManager && this.liveManager.store.data), this.storeData.micPanelMode != n.a.MIC_PLAYER_MODE.INVITING ? (this.storeData.micPanelMode, n.a.MIC_PLAYER_MODE.CONNECTING, e.openid ? (this.data.authFail = !1, this.storeData.avatarUrl && this.storeData.nickname || this.liveManager.getUserInfo().then((function(e) {
              var t = e.avatarBig || e.avatar,
                i = e.nickname;
              t || (a.logInfo("小程序未授权用户信息"), r.a.tipsSimple("小程序未授权，无法连麦。"), a.data.authFail = !0, a.hangUpWhenInvition()), a.storeSetData({
                avatarUrl: t,
                nickname: i
              })
            })).catch((function(e) {
              a.logInfo("catch error. 小程序未授权用户信息"), a.data.authFail = !0, r.a.tipsSimple("小程序未授权，无法连麦。"), a.hangUpWhenInvition()
            })), this.isAuthCameraAndMic().then((function(s) {
              if ("need-auth" == s) wx.showModal({
                title: "",
                content: "连麦需要授权使用你的摄像头、麦克风",
                cancelText: "取消",
                confirmText: "前往设置",
                success: function(s) {
                  s.confirm ? wx.openSetting({
                    success: function(s) {
                      var c = s.miniprogramAuthSetting ? s.miniprogramAuthSetting : s.authSetting ? s.authSetting : {},
                        h = c["scope.camera"],
                        l = c["scope.record"];
                      h && l ? (r.a.tipsSimple("授权成功"), a.storeData.micPanelMode == n.a.MIC_PLAYER_MODE.INVITING ? a._handleAnchorInvition(e, t, i, o) : (a.logInfo("授权回来状态不是邀请中"), r.a.tipsSimple("已自动拒绝连麦邀请"))) : (r.a.tipsSimple("小程序未授权，无法连麦。"), a.logInfo("小程序未授权摄像头或麦克风"), a.data.authFail = !0, a.hangUpWhenInvition())
                    },
                    fail: function(e) {
                      r.a.tipsSimple("系统接口失败，请稍后重试。"), a.data.authFail = !0, resolve("fail"), a.hangUpWhenInvition()
                    }
                  }) : (r.a.tipsSimple("收到连麦邀请，小程序未授权，无法连麦。"), a.logInfo("小程序未授权摄像头或麦克风"), a.data.authFail = !0, a.hangUpWhenInvition())
                }
              });
              else if ("ok" == s) {
                if (a.data.authFail) return;
                a._handleAnchorInvition(e, t, i, o)
              } else r.a.tipsSimple("系统发生异常，请稍后重试。"), a.hangUpWhenInvition()
            }))) : this.logInfo("handleAnchorInvition openid null, ignore")) : this.logInfo("recv anchor invition, but in mode:" + this.storeData.micPanelMode + ", ignore")
          },
          handleAnchorCancelInvition: function() {
            var e = this;
            [n.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE, n.a.MIC_PLAYER_MODE.APPLYING].indexOf(this.storeData.micPanelMode) > -1 ? this.logInfo("recv anchor cancel invition, but in mode:" + this.storeData.micPanelMode + ", ignore") : (r.a.tipsSimple("主播已取消连麦邀请"), this.storeData.micPanelMode == n.a.MIC_PLAYER_MODE.INVITING ? (this.logInfo("handleAnchorCancelInvition， 取消邀请，3s后回到选择界面"), this.storeSetData({
              audiencePushUrl: "",
              anchorCancelInvition: !0,
              canAccept: !1
            }), setTimeout((function() {
              e.storeData.micPanelMode == n.a.MIC_PLAYER_MODE.INVITING && e.storeSetData({
                micPanelMode: n.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE,
                showMicPanel: !1
              })
            }), 3e3), clearInterval(this.storeData.linkMicConfirmTimer), this.storeData.linkMicConfirmTimer = null) : (this.logInfo("handleAnchorCancelInvition， 观众已点击同意，直接挂断"), this.handleAudienceHangUp()))
          },
          _handleAnchorInvition: function(e, t, i, a) {
            var o = this;
            this.storeSetData({
              confirmLeftTime: n.a.ANCHOR_INVITION_TIMEROUT,
              micPanelMode: n.a.MIC_PLAYER_MODE.INVITING,
              anchorOpenid: e.openid,
              subAnchors: t,
              linkMicType: i,
              linkMicRecover: a,
              anchorCancelInvition: !1,
              canAccept: !1,
              anchorNickname: e.nickname,
              anchorAvatar: e.headpic,
              hasRecoverToInviting: !1
            }), clearInterval(this.storeData.linkMicConfirmTimer), this.storeData.linkMicConfirmTimer = null, this.storeData.linkMicConfirmTimer = setInterval((function() {
              o.storeData.confirmLeftTime - 1 <= 0 ? (o.hangUpWhenInvition(), o.logInfo("超时，自动拒绝主播连麦邀请"), r.a.tipsSimple("已自动拒绝连麦邀请")) : o.storeSetData({
                confirmLeftTime: o.storeData.confirmLeftTime - 1
              })
            }), 1e3), this.storeSetData({
              linkMicConfirmTimer: this.storeData.linkMicConfirmTimer
            }), this.getPushUrlAndStartPush(3)
          },
          getPushUrlAndStartPush: function(e) {
            var t = this;
            _.a.getAudiencePushUrl(this.getReqBase()).then((function(e) {
              t.logInfo("getAudiencePushUrl succ", e.upload_url), t.storeSetData({
                audiencePushUrl: e.upload_url,
                audiencePushEnableCamera: t.storeData.linkMicType == n.a.LINK_MIC_TYPE.VIDEO,
                audiencePushEnableMic: !0,
                micBan: !1,
                playUrlForPusher: e.play_url_list[0],
                needConfirm: !0
              })
            })).catch((function(e) {
              t.logInfo("getAudiencePushUrl err", e), r.a.tipsSimple("连麦失败"), clearInterval(t.storeData.linkMicConfirmTimer), t.storeData.linkMicConfirmTimer = null, t.storeSetData({
                micPanelMode: n.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE
              }), t.sendRejectAnchorInvition().then((function(e) {
                t.logInfo("拿不到推流地址 sendRejectAnchorInvition succ")
              })).catch((function(e) {
                t.logInfo("拿不到推流地址 sendRejectAnchorInvition fail", e)
              }))
            }))
          },
          handleAnchorRecover: function(e, t, i) {
            this.logInfo("主播请求恢复连麦"), this.handleAnchorInvition(e, t, i, !0)
          },
          handleAutoRecoverOk: function(e, t) {
            var i = this;
            this.logInfo("连麦 主播说可自动重连"), this.data.recoverGetAudiencePushUrl || (this.data.recoverGetAudiencePushUrl = !0, _.a.getAudiencePushUrl(this.getReqBase()).then((function(a) {
              i.logInfo("recoverLinkMicStateToConnecting getAudiencePushUrl succ", a.upload_url), i.storeSetData({
                audiencePushUrl: a.upload_url,
                audiencePushEnableCamera: i.storeData.linkMicType == n.a.LINK_MIC_TYPE.VIDEO,
                audiencePushEnableMic: !0,
                playUrlForPusher: a.play_url_list[0],
                showOthersMicTag: !1,
                needConfirm: !1,
                subAnchors: e,
                micPanelMode: n.a.MIC_PLAYER_MODE.CONNECTING,
                showMicPanel: !1,
                linkMicLastTime: t + 2,
                linkMicLastTimeFormat: I.a.formatDurationAndHideHourIfHourZero(t + 2)
              })
            })).catch((function(e) {
              i.logInfo("recoverLinkMicStateToConnecting getAudiencePushUrl err", e), r.a.tipsSimple("连麦失败"), i.sendAudienceHangUp().then((function(e) {
                i.logInfo("recoverLinkMicStateToConnecting sendAudienceHangUp succ")
              })).catch((function(e) {
                i.logInfo("recoverLinkMicStateToConnecting sendAudienceHangUp fail", e)
              })), i.storeSetData({
                micPanelMode: n.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE,
                showMicPanel: !1
              })
            })))
          },
          handleAnchorRejectRecover: function() {
            this.logInfo("连麦 主播拒绝自动重连")
          },
          handleIsCatonReq: function() {
            var e = this.storeData.isCaton;
            this.responseCaton(e), this.logInfo("告知主播是否卡顿: ", e)
          },
          lastSwitchBitrateTimeObserver: function(e) {
            e && this.storeData.MIC_PLAYER_MODE == n.a.MIC_PLAYER_MODE.CONNECTING && (this.sendCaton(), this.logInfo("发生卡顿，告知主播 "))
          },
          hideOthersMicTag: function(e) {
            e.msg_person && e.msg_person.openid == this.storeData.othersOpenid && this.storeSetData({
              showOthersMicTag: !1,
              othersAvatarUrl: "",
              othersNickname: "",
              othersOpenid: ""
            })
          },
          isRoomLinkMicBanObserver: function(e, t) {
            if (e && !t) {
              switch (this.logInfo("运营禁止连麦， 当前连麦状态:", this.storeData.micPanelMode), this.storeData.micPanelMode) {
                case n.a.MIC_PLAYER_MODE.CONNECTING:
                  this.sendAudienceHangUp(), this.handleAudienceHangUp();
                  break;
                case n.a.MIC_PLAYER_MODE.INVITING:
                  this.sendRejectAnchorInvition();
                  break;
                case n.a.MIC_PLAYER_MODE.APPLYING:
                  _.a.cancelLinkMicRequest(p({}, this.getReqBase()))
              }
              this.storeSetData({
                showMicPanel: !1,
                micPanelMode: n.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE
              })
            }
          },
          anchorOpenLinkMicObserver: function(e, t) {
            if (!e && t) {
              switch (this.logInfo("主播关闭连麦， 当前连麦状态:", this.storeData.micPanelMode), this.storeData.micPanelMode) {
                case n.a.MIC_PLAYER_MODE.CONNECTING:
                  this.sendAudienceHangUp(), this.handleAudienceHangUp();
                  break;
                case n.a.MIC_PLAYER_MODE.INVITING:
                  this.sendRejectAnchorInvition();
                  break;
                case n.a.MIC_PLAYER_MODE.APPLYING:
                  _.a.cancelLinkMicRequest(p({}, this.getReqBase()))
              }
              this.storeData.micPanelMode == n.a.MIC_PLAYER_MODE.APPLYING && r.a.tipsSimple("主播已关闭连麦"), this.storeSetData({
                showMicPanel: !1,
                micPanelMode: n.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE
              })
            }
          },
          handleCanAutoRecoverToInviting: function() {
            this.handleAnchorInvition({
              openid: this.storeData.anchorOpenid,
              nickname: this.storeData.anchorNickname,
              headpic: this.storeData.anchorAvatar
            }, [], this.storeData.linkMicType, !0), this.logInfo("主播说可直接恢复到连麦邀请中")
          },
          handleCanNotAutoRecoverToInviting: function() {
            this.logInfo("主播说不可直接恢复到连麦邀请中")
          },
          sendLinkMicViewerLeave: function() {
            this.storeData && this.storeData.micPanelMode == n.a.MIC_PLAYER_MODE.CONNECTING && this.sendViewerLeave()
          },
          setLivePlayerTranslate: function(e, t) {
            var i = this;
            this.storeSetData({
              translateX: e,
              translateY: t,
              transformDuration: !0
            }, (function() {
              setTimeout((function() {
                i.storeSetData({
                  transformDuration: !1
                })
              }), 2e3)
            }))
          }
        }
      })
    },
    47: function(e, t, i) {
      e.exports = i(149)
    }
  },
  entries: [
    [47, 0, 1, 3, 6, 2, 4, 5, 7, 9, 10, 14, 18, 25]
  ]
}]);
