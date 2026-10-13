var t = require("../../@babel/runtime/helpers/defineProperty");
module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/8.js"), require("../../_commons/10.js"), require("../../_commons/12.js"), require("../../_commons/22.js"), {
  ids: [78],
  modules: {
    204: function(e, i, o) {
      var n;
      o.r(i);
      var a = o(7),
        r = o.n(a),
        s = o(0),
        c = o(3),
        l = o(2),
        h = o(1),
        m = o(5),
        p = o(25);

      function u(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), i.push.apply(i, o)
        }
        return i
      }

      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2 ? u(Object(i), !0).forEach((function(e) {
            r()(t, e, i[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
          }))
        }
        return t
      }
      var S = o(32),
        f = "https://res.wx.qq.com/wxaliveplayer/htdocs",
        y = ["".concat(f, "/buy530a94.json"), "".concat(f, "/cheer530a94.json"), "".concat(f, "/heart530a94.json"), "".concat(f, "/like530a94.json"), "".concat(f, "/praise530a94.json"), "".concat(f, "/sixsixsix530a94.json"), "".concat(f, "/witty530a94.json"), "".concat(f, "/wow530a94.json")],
        A = ["".concat(f, "/cheer530a94.json"), "".concat(f, "/heart530a94.json"), "".concat(f, "/like530a94.json"), "".concat(f, "/praise530a94.json"), "".concat(f, "/sixsixsix530a94.json"), "".concat(f, "/witty530a94.json"), "".concat(f, "/wow530a94.json")],
        k = ["".concat(f, "/storeDivergency530a95.json"), "".concat(f, "/storePackUp530a95.json")];
      Component({
        behaviors: [m.a, p.a],
        data: (n = {
          componentName: "personOperation",
          isWxaMode: !1,
          isBgMetting: !1,
          showLikeIcon: !1,
          showCommentIcon: !1,
          showSettingIcon: !1,
          showForbidIcon: !1,
          showMoreIcon: !1,
          showStoreIcon: !1,
          showPushComment: !1,
          screenType: "",
          isBgMeeting: !1,
          isAuthored: !1,
          likeTotalWording: 0,
          showOperationPanel: !1,
          isUserBan: !1,
          isRoomCommentBan: !1,
          isGlobalCommentBan: !1,
          isPC: !1,
          isIpad: !1,
          watchPvTotal: 0,
          likeTotal: 0,
          likeObserverTimes: 0,
          showStoreList: !1,
          showVideoDotList: !1,
          showRecord: !1,
          isClearScreen: !1,
          hideShare: !1
        }, t(n, "isBgMeeting", !1), t(n, "isHideLiveRoom", !1), t(n, "showEmojiInput", !1), t(n, "goodsPush", !1), t(n, "couponPush", !1), t(n, "isShareAppMessageForFakeNative", !1), t(n, "isShowSharePanel", !0), t(n, "likeAnimationIndex", 0), t(n, "likeAnimationSyncIndex", 0), t(n, "zoomclass", !1), t(n, "showBacktoLiveIcon", !1), t(n, "showRecordListIcon", !1), n),
        lifetimes: {
          ready: function() {
            this.uiGetStorePosition(this.data.screenType)
          },
          detached: function() {
            this.clearAnimation(), clearTimeout(this._setLikeTimer), clearTimeout(this._animationTimer), clearInterval(this._storeAnimationTimer)
          }
        },
        pageLifetimes: {
          show: function() {
            var t = this;
            this.storeData.isNavigateToExtRoom && setTimeout((function() {
              t.clearAnimation(), t.initAnimation()
            }), 100)
          }
        },
        methods: {
          showCommentIconObserver: function() {
            this.uiGetStorePosition(this.data.screenType)
          },
          showMoreIconObserver: function() {
            this.uiGetStorePosition(this.data.screenType)
          },
          screenTypeObserver: function() {
            this.uiGetStorePosition(this.data.screenType)
          },
          curLiveStatusCodeObserver: function() {
            this.clearAnimation()
          },
          likeChangeCountObserver: function(t) {
            var e = this.storeData,
              i = e.isLowPhone,
              o = e.isGrayLikeAnimationSync,
              n = e.curLiveStatusCode;
            !i && o && n !== s.a.LIVE_STATUS.REPLAY && (this.data.likeObserverTimes++, t > 0 && this.data.likeObserverTimes > 1 && (t = Math.min(t, 50), this._randomUpper = Math.floor(5e3 / t), this._preRandom = this._randomUpper, this.renderAnimationRandom(t)))
          },
          isRenderStorePackupObserver: function(t) {
            t && this.storeData.curLiveStatusCode !== s.a.LIVE_STATUS.REPLAY && this.storePackup()
          },
          onStoreDataReady: function() {
            var t = this;
            setTimeout((function() {
              t.initAnimation()
            }), 100)
          },
          initAnimation: function() {
            var t = this;
            this.likeContext && !this.storeData.isNavigateToExtRoom || this.createLikeAnimation(), this.likeContextSync && !this.storeData.isNavigateToExtRoom || this.createLikeAnimationSync(), this.storeData.curLiveStatusCode !== s.a.LIVE_STATUS.REPLAY && (this.storeContext && !this.storeData.isNavigateToExtRoom || this.createStoreAnimation(), setTimeout((function() {
              t.storeDivergency()
            }), 2e3), clearInterval(this._storeAnimationTimer), this._storeAnimationTimer = setInterval((function() {
              t.storeDivergency()
            }), 4e4))
          },
          clearAnimation: function() {
            this.likeContext = null, this.likeContextSync = null, this.storeContext = null
          },
          randomFrom: function(t, e) {
            return Math.floor(Math.random() * (e - t + 1) + t)
          },
          renderAnimationRandom: function(t) {
            var e = this,
              i = Math.random() * this._randomUpper;
            this.renderTimeout(i, t).then((function(t) {
              t > 0 && e.renderAnimationRandom(t)
            }))
          },
          renderTimeout: function(t, e) {
            var i = this;
            return clearTimeout(this._animationTimer), new Promise((function(o, n) {
              i._animationTimer = setTimeout((function() {
                i.likeContext ? (i.likeContext.save(), i.renderLikeAnimationSync(), i.likeContext.restore()) : i.createLikeAnimationSync(), i._preRandom = t, o(e - 1)
              }), i._randomUpper - i._preRandom + t)
            }))
          },
          createLikeAnimation: function() {
            if (this.storeData ? this.storeData.isSupportAnimation : l.a.isSupportAnimation()) {
              var t = this,
                e = new S.default;
              this.createSelectorQuery().select("#person-operation__player__like-canvas").fields({
                size: !0,
                node: !0
              }, (function(i) {
                if (i && i.node) {
                  var o = i.node,
                    n = o.getContext("2d"),
                    a = wx.getSystemInfoSync().pixelRatio;
                  o.width = i.width * a, o.height = i.height * a;
                  try {
                    e.setup(o)
                  } catch (e) {
                    return void(t.logError && t.logError("likeLottie setup likeCanvas", e))
                  }
                  var r = t.storeData.systemInfo || wx.getSystemInfoSync() || {},
                    s = ("android" === r.platform || "ios" === r.platform) && l.a.compareVersion(r.version, "7.0.12") >= 0;
                  (t.data.showStoreIcon ? y : A).forEach((function(t) {
                    e.loadAnimation({
                      loop: !1,
                      autoplay: !1,
                      renderer: "canvas",
                      path: t,
                      clearAnimation: !0,
                      setPreLoad: !0,
                      setGlobalAlphaError: s,
                      rendererSettings: {
                        context: n
                      }
                    })
                  })), t.likeLottie = e, t.likeContext = n
                } else t.logError && t.logError("createLikeAnimation res.node === null", i)
              })).exec()
            }
          },
          createLikeAnimationSync: function() {
            if (this.storeData ? this.storeData.isSupportAnimation : l.a.isSupportAnimation()) {
              var t = this,
                e = new S.default;
              this.createSelectorQuery().select("#person-operation__player__like__sync-canvas").fields({
                size: !0,
                node: !0
              }, (function(i) {
                if (i && i.node) {
                  var o = i.node,
                    n = o.getContext("2d"),
                    a = wx.getSystemInfoSync().pixelRatio;
                  o.width = i.width * a, o.height = i.height * a;
                  try {
                    e.setup(o)
                  } catch (e) {
                    return void(t.logError && t.logError("likeLottieSync setup likeCanvasSync", e))
                  }
                  var r = t.storeData.systemInfo || wx.getSystemInfoSync() || {},
                    s = ("android" === r.platform || "ios" === r.platform) && l.a.compareVersion(r.version, "7.0.12") >= 0;
                  (t.data.showStoreIcon ? y : A).forEach((function(t) {
                    e.loadAnimation({
                      loop: !1,
                      autoplay: !1,
                      renderer: "canvas",
                      path: t,
                      clearAnimation: !0,
                      setPreLoad: !0,
                      setGlobalAlphaError: s,
                      rendererSettings: {
                        context: n
                      }
                    })
                  })), t.likeLottieSync = e, t.likeContextSync = n
                } else t.logError && t.logError("createLikeAnimationSync res.node === null", i)
              })).exec()
            }
          },
          createStoreAnimation: function() {
            var t = this;
            if (this.storeData ? this.storeData.isSupportAnimation : l.a.isSupportAnimation()) {
              var e = this,
                i = new S.default;
              this.createSelectorQuery().select("#person-operation__player__store-canvas").fields({
                size: !0,
                node: !0
              }, (function(o) {
                if (o && o.node) {
                  var n = o.node,
                    a = n.getContext("2d"),
                    r = wx.getSystemInfoSync().pixelRatio;
                  n.width = o.width * r, n.height = o.height * r, i.setup(n);
                  var s = t.storeData.systemInfo || wx.getSystemInfoSync() || {},
                    c = ("android" === s.platform || "ios" === s.platform) && l.a.compareVersion(s.version, "7.0.12") >= 0;
                  k.forEach((function(t) {
                    i.loadAnimation({
                      loop: !1,
                      autoplay: !1,
                      renderer: "canvas",
                      path: t,
                      clearAnimation: !0,
                      setPreLoad: !0,
                      setGlobalAlphaError: c,
                      rendererSettings: {
                        context: a
                      }
                    })
                  })), e.storeLottie = i, e.storeContext = a
                } else e.logError && e.logError("createStoreAnimation res.node === null", o)
              })).exec()
            }
          },
          renderLikeAnimation: function() {
            var t = this;
            if ((this.storeData ? this.storeData.isSupportAnimation : l.a.isSupportAnimation()) && this.likeLottie && this.likeContext && !this.likeAnimation) {
              var e = this.storeData.systemInfo || wx.getSystemInfoSync() || {},
                i = ("android" === e.platform || "ios" === e.platform) && l.a.compareVersion(e.version, "7.0.12") >= 0,
                o = this.data.showStoreIcon ? y : A;
              this.likeAnimation = this.likeLottie.loadAnimation({
                loop: !1,
                autoplay: !0,
                renderer: "canvas",
                path: o[this.data.likeAnimationIndex % o.length],
                clearAnimation: !0,
                setGlobalAlphaError: i,
                rendererSettings: {
                  context: this.likeContext
                }
              }), wx.vibrateShort({
                type: "heavy"
              }), this.setData({
                zoomclass: !0
              }), setTimeout((function() {
                t.setData({
                  zoomclass: !1
                })
              }), 200), this.data.likeAnimationIndex += 1;
              var n = !0;
              this.likeAnimation.onEnterFrame = function(e) {
                e && e.currentTime / e.totalTime >= .1 && n && (t.likeAnimation = null, n = !1)
              }, this.likeAnimation.onComplete = function(e) {
                var i = +e.fps;
                t.logInfo("点赞动画fps", i), t.reportPerformance("LOTTIE_LIKE_ANIMATION_FPS", Math.round(i)), t.addReportMMData({
                  actionType: 5,
                  subActionType: 5,
                  lottieFPS: Math.round(i)
                })
              }
            }
          },
          renderLikeAnimationSync: function() {
            var t = this;
            if ((this.storeData ? this.storeData.isSupportAnimation : l.a.isSupportAnimation()) && this.likeLottieSync && this.likeContextSync && !this.likeAnimationSync) {
              var e = this.storeData.systemInfo || wx.getSystemInfoSync() || {},
                i = ("android" === e.platform || "ios" === e.platform) && l.a.compareVersion(e.version, "7.0.12") >= 0,
                o = this.data.showStoreIcon ? y : A;
              this.likeAnimationSync = this.likeLottieSync.loadAnimation({
                loop: !1,
                autoplay: !0,
                renderer: "canvas",
                path: o[this.data.likeAnimationSyncIndex % o.length],
                clearAnimation: !0,
                setGlobalAlphaError: i,
                rendererSettings: {
                  context: this.likeContextSync
                }
              }), this.data.likeAnimationSyncIndex += 1;
              var n = !0;
              this.likeAnimationSync.onEnterFrame = function(e) {
                e && e.currentTime / e.totalTime >= .1 && n && (t.likeAnimationSync = null, n = !1)
              }, this.likeAnimationSync.onComplete = function(e) {
                var i = +e.fps;
                t.logInfo("点赞动画fps", i), t.reportPerformance("LOTTIE_LIKE_ANIMATION_FPS", Math.round(i)), t.addReportMMData({
                  actionType: 5,
                  subActionType: 5,
                  lottieFPS: Math.round(i)
                })
              }
            }
          },
          renderStoreDivergencyAnimation: function() {
            var t = this;
            if ((this.storeData ? this.storeData.isSupportAnimation : l.a.isSupportAnimation()) && !this.isPlayingStoreAnimation) {
              var e = this.storeData.systemInfo || wx.getSystemInfoSync() || {},
                i = ("android" === e.platform || "ios" === e.platform) && l.a.compareVersion(e.version, "7.0.12") >= 0;
              this.storeLottie && this.storeContext && (this.isPlayingStoreAnimation = !0, this.storeLottie.loadAnimation({
                loop: !1,
                autoplay: !0,
                renderer: "canvas",
                path: k[0],
                clearAnimation: !0,
                setGlobalAlphaError: i,
                rendererSettings: {
                  context: this.storeContext
                }
              }).onComplete = function() {
                t.isPlayingStoreAnimation = !1
              })
            }
          },
          renderStorePackupAnimation: function() {
            var t = this;
            if ((this.storeData ? this.storeData.isSupportAnimation : l.a.isSupportAnimation()) && !this.isPlayingStoreAnimation) {
              var e = this.storeData.systemInfo || wx.getSystemInfoSync() || {},
                i = ("android" === e.platform || "ios" === e.platform) && l.a.compareVersion(e.version, "7.0.12") >= 0;
              this.storeLottie && this.storeContext && (this.isPlayingStoreAnimation = !0, this.storeLottie.loadAnimation({
                loop: !1,
                autoplay: !0,
                renderer: "canvas",
                path: k[1],
                clearAnimation: !0,
                setGlobalAlphaError: i,
                rendererSettings: {
                  context: this.storeContext
                }
              }).onComplete = function() {
                t.isPlayingStoreAnimation = !1
              })
            }
          },
          storeDivergency: function() {
            this.storeContext ? this.renderStoreDivergencyAnimation() : this.createStoreAnimation()
          },
          storePackup: function() {
            var t = this;
            clearInterval(this._storeAnimationTimer), this._storeAnimationTimer = setInterval((function() {
              t.storeDivergency()
            }), 4e4), this.storeContext ? this.renderStorePackupAnimation() : this.createStoreAnimation(), this.storeSetData({
              isRenderStorePackup: !1
            })
          },
          handleLike: function(t) {
            var e = this;
            this.logInfo("handleLike", t || 0), this.likeContext ? (this.likeContext.save(), this.renderLikeAnimation(), this.likeContext.restore()) : this.createLikeAnimation();
            var i = this.storeData,
              o = this.storeData.lotteryPush || {},
              n = i.likeTotal + 1;
            this.storeSetData({
              likeTotal: n,
              likeNew: i.likeNew + 1,
              linkMicScore: i.linkMicScore + 1
            }), wx.setStorage({
              key: "wxlive_" + this.storeData.roomAppid + "_" + this.storeData.roomId + "#",
              data: JSON.stringify({
                recordTime: Date.now(),
                info: {
                  likeTotal: n
                }
              })
            });
            var a = this.getReqBase();
            if (t) {
              var r = {
                actionType: 3,
                subActionType: 1,
                count: i.likeNew
              };
              this.addReportMMData(r), c.a.setLike(d(d({}, a), {}, {
                content: {
                  like_cnt: i.likeNew,
                  lottery_id: o.id
                },
                report_data: this.getReportData(r)
              })).then((function(t) {
                e.storeSetData({
                  likeNew: 0,
                  lotteryPush: d(d({}, o), {}, {
                    isParticipate: !0
                  })
                })
              }))
            } else clearTimeout(this._setLikeTimer), this._setLikeTimer = setTimeout((function() {
              var t = {
                actionType: 3,
                subActionType: 1,
                count: i.likeNew
              };
              e.addReportMMData(t), c.a.setLike(d(d({}, a), {}, {
                content: {
                  like_cnt: i.likeNew
                },
                report_data: e.getReportData(t)
              })).then((function(t) {
                i.likeNew = 0, e.storeSetData({
                  likeNew: 0
                })
              }))
            }), s.a.LIKE_GATHER_REQUEST_TIME)
          },
          clickLike: function() {
            var t = this;
            if (this.logInfo("clickLike"), !this.storeData.isClearScreen) {
              var e = this.storeData.lotteryPush || {};
              e.hasOwnProperty("participate_type") && +e.participate_type === s.a.LOTTERY_PARTIPATE_TYPE.LOTTERY_LIKE && !e.isParticipate ? this.liveManager.getUserInfo().then((function(i) {
                t.handleLike(e.id)
              })).catch((function(e) {
                e && "not support" === e.errMsg || h.a.tipsSimple("授权异常，无法参与抽奖"), t.logError("[抽奖] 授权失败，无法参与点赞抽奖", e)
              })) : this.handleLike(null)
            }
          },
          clickComment: function() {
            var t = this;
            this.logInfo("clickComment"), "horizontal" === this.data.screenType && this.storeSetData({
              showStorePanel: !1
            });
            var e = this.storeData,
              i = e.isClearScreen,
              o = e.isRoomCommentBan,
              n = e.isGlobalCommentBan,
              a = e.isRoomCommentClose,
              r = e.pluginScene,
              c = e.isScrollCommentToBottom;
            if (r === s.a.SHARE_FRIENDS_SCENE) return this.logInfo("clickComment 请前往小程序使用完整服务", r), void h.a.tipsSimple("请前往小程序使用完整服务");
            if (!i) {
              if (a) h.a.tipsSimple(s.a.BAN_COMMENT_WORDING.COMMENT_CLOSE);
              else if (o) h.a.tipsSimple(s.a.BAN_COMMENT_WORDING.ROOM_BANED);
              else if (n) h.a.tipsSimple(s.a.BAN_COMMENT_WORDING.GLOBAL_BANED);
              else {
                if (this._innerTryGetUser) return;
                this._innerGetIng = 1, this.liveManager.getUserInfo().then((function() {
                  t._innerGetIng = 0, t.logInfo("clickComment 展开键盘"), t.storeSetData({
                    showPushComment: !0
                  }), c && setTimeout((function() {
                    t.logInfo("clickComment 滚动到评论底部"), t.storeSetData({
                      commentScrollIntoView: t.storeData.curCommentList && t.storeData.curCommentList.length || 0,
                      newNotifyCount: 0
                    })
                  }), 500)
                })).catch((function(e) {
                  t._innerGetIng = 0, !e || e.errMsg, t.logInfo("clickComment getUserInfo error", e)
                }))
              }
              this.addReportMMData({
                actionType: 4,
                subActionType: 5,
                reserves: 1
              })
            }
          },
          clickStore: function() {
            this.logInfo("clickStore"), this.storeData.isClearScreen || (this.addReportMMData({
              actionType: 4,
              subActionType: 13
            }), this.addReportMMData({
              actionType: 4,
              subActionType: 14
            }), this.storeSetData({
              showStorePanel: !0
            }))
          },
          clickSetting: function() {
            this.triggerEvent("setting", {})
          },
          openSharePanel: function() {
            if ((wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) !== s.a.SHARE_FRIENDS_SCENE) {
              var t = this.storeData,
                e = t.isClearScreen,
                i = t.curOpenid,
                o = t.lotteryPush,
                n = t.lotteryTeamMembers,
                a = t.isLotteryOpen,
                r = this.data.isShowSharePanel;
              if (!e && r) {
                var l = o && 2 === o.participate_type && n.find((function(t) {
                  return t.openid === i
                })) && !a;
                c.a.sharePromise = c.a.getShareImgUrl(d(d({}, this.getReqBase()), {}, {
                  content: {
                    pv: this.data.watchPvTotal,
                    like: this.data.likeTotal,
                    is_team: l ? 1 : 0
                  }
                })), this.storeSetData({
                  showSharePanel: !0
                })
              }
            } else h.a.tipsSimple("请前往小程序使用完整服务")
          },
          clickOperationMore: function() {
            this.storeData.isClearScreen || this.storeSetData({
              showOperationPanel: !0
            })
          },
          onClickShareAppMessageForFakeNative: function(t) {
            this.storeData.isClearScreen || this.liveManager.onClickShareAppMessageForFakeNative(t)
          },
          backtoLive: function() {
            this.storeSetData({
              showRecord: !1
            })
          },
          clickShowVideoDotList: function() {
            this.storeSetData({
              showVideoDotList: !0
            }, !0)
          }
        }
      })
    },
    54: function(t, e, i) {
      t.exports = i(204)
    }
  },
  entries: [
    [54, 0, 1, 3, 6, 2, 4, 5, 7, 8, 10, 12, 22]
  ]
}]);
