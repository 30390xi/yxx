var e = require("../@babel/runtime/helpers/defineProperty");
require("../@babel/runtime/helpers/Arrayincludes");
module.exports = {
  ids: [7],
  modules: {
    12: function(e, t, o) {
      var a = {};
      o.r(a), o.d(a, "init", (function() {
        return j
      })), o.d(a, "close", (function() {
        return G
      })), o.d(a, "onNewMsg", (function() {
        return W
      })), o.d(a, "offNewMsg", (function() {
        return q
      })), o.d(a, "containMsgCallback", (function() {
        return z
      })), o.d(a, "isWebSocketOpen", (function() {
        return K
      })), o.d(a, "bindSocketOpenCallbacks", (function() {
        return J
      })), o.d(a, "setLogFunction", (function() {
        return X
      }));
      var i = o(7),
        r = o.n(i),
        n = o(3),
        s = o(2),
        c = o(9),
        l = {
          managestatus: "wait",
          showHangOutIcon: !0
        },
        h = {
          managestatus: "refuse",
          showHangOutIcon: !0
        },
        p = {
          managestatus: "VIEWER_REJECT",
          showHangOutIcon: !0
        },
        u = 2,
        d = 3,
        m = 4,
        g = 5,
        f = 10,
        _ = 53,
        y = 54,
        v = 55,
        S = 58,
        T = 61,
        I = 62,
        R = 65,
        P = 66,
        L = 69,
        w = !1,
        E = !1,
        O = null,
        D = "",
        M = null,
        C = 0,
        A = null,
        k = null,
        b = !1,
        N = null,
        U = 0,
        V = [],
        F = [],
        H = null,
        B = 0,
        j = function e(t, o) {
          var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          if (M = o, w && k && k.roomId != t.roomId && O) {
            Z("[websocket] 存在不同roomid的wss，结束之前的。旧:", k.roomId, ", 新: ", t.roomId);
            try {
              O && O.close()
            } catch (e) {
              Z("[websocket] close socket catch error: ".concat(e))
            }
          }
          Z("[websocket] >>>>init web socket");
          var i = Date.now() - B;
          E && i < 2e3 || w ? Z("[websocket] init fail, " + (w ? "connected" : "connecting")) : (E = !0, t ? (k = t, B = Date.now(), n.a.getWebSocketToken({
            roomId: t.roomId,
            roomAppid: t.roomAppid,
            from: t.from,
            pluginAppid: t.pluginAppid
          }).then((function(o) {
            D = o.token, Z("[websocket] getWebSocketToken succeed, token: ".concat(D)), w ? Z("[websocket] connected, do not connectSocket any more") : (O = wx.connectSocket({
              url: "wss://ae.weixin.qq.com",
              header: {
                "content-type": "application/json"
              },
              fail: function(o) {
                if (a > 0) return Z("[websocket] connectSocket fail, retry, err:", o), e(t, M, a - 1);
                Z("[websocket] connectSocket fail", o), E = !1, w = !1, O = null, c.a.addReportItem({
                  biz_id: c.a.WEBSOCKET_BIZ_ID,
                  error_code: -1
                }), t.fail && t.fail(o), t.complete && t.complete(o)
              },
              success: function(e) {
                Z("[websocket] >>>>>connect socket succeed", e), c.a.addReportItem({
                  biz_id: c.a.WEBSOCKET_BIZ_ID,
                  error_code: 0
                }), t.success && t.success(e), t.complete && t.complete(e)
              }
            }), x(O))
          })).catch((function(o) {
            if (E = !1, w = !1, a > 0) return Z("[websocket] getWebSocketToken catch error, retry, err:", o), e(t, M, a - 1);
            Z("[websocket] getWebSocketToken catch error:", o), c.a.addReportItem({
              biz_id: c.a.WEBSOCKET_BIZ_ID,
              error_code: -1
            }), t.fail && t.fail(o), t.complete && t.complete(o)
          }))) : Z("[websocket]opts null, init websocket fail"))
        },
        G = function() {
          if (w = !1, E = !1, Z("[websocket] close socket by user"), N && (clearInterval(N), N = null), O) {
            b = !0;
            try {
              O.close({})
            } catch (e) {
              Z("[websocket] close socket catch error", e)
            }
            O = null, c.a.addReportItem({
              biz_id: c.a.WEBSOCKET_BIZ_ID,
              error_code: 1e3
            }), c.a.uploadAll()
          }
        },
        x = function(e) {
          e.onMessage((function(e) {
            var t = JSON.parse(e.data),
              o = t.content;
            if (Z("[websocket] onMessage, base64 decode之前", t), "base64" === t.encoding) {
              if (Z("[websocket] onMessage, decode后:", o = JSON.parse(s.a.base64Decode(o))), M) switch (o.msg_sub_type) {
                case u:
                case f:
                case _:
                case y:
                  M.createCommonMixStream(o.body.url);
                  break;
                case d:
                  M.data.linkMicManageStatus === l.managestatus && (M.changeManageStatus({
                    detail: {
                      linkMicManageStatus: p.managestatus
                    }
                  }), wx.showToast({
                    title: "观众拒绝了连麦",
                    icon: "none",
                    duration: 3e3
                  }));
                  break;
                case m:
                case g:
                  M.changeManageStatus({
                    detail: {
                      linkMicManageStatus: h.managestatus,
                      from: "viewer"
                    }
                  }), wx.showToast({
                    title: 4 === o.msg_sub_type ? "主播挂断连麦" : "对方已挂断",
                    icon: "none",
                    duration: 3e3
                  });
                  break;
                case v:
                  M.askLinkMicStatus(o.send_person);
                  break;
                case T:
                case I:
                  M.setCaTon(o.body.caton);
                  break;
                case S:
                  M.getDepList(o.body);
                  break;
                case R:
                  console.log("content.msg_sub_type is ------", o.msg_sub_type), M.initLinkMicFromComment(o.body);
                  break;
                case P:
                  M.askLinkMicInviteStatus(o.send_person);
                  break;
                case L:
                  M.setViwerStatus(o.send_person)
              }
              V.forEach((function(e) {
                e && e(o)
              }))
            }
          })), e.onOpen((function(t) {
            var o = "token=".concat(D, "&appid=").concat(k.roomAppid, "&openid=").concat(k.openId, "&roomid=").concat(k.roomId);
            Z("[websocket]socket open, ".concat(o += M ? "&device=0" : "&device=1")), e.send({
              data: JSON.stringify({
                cmd: 0,
                product: 6001,
                seq: 123456,
                http: {
                  method: "POST",
                  path: "/cgi-bin/mmbizwxaliveapp-bin/userwebsocketlogin",
                  header: {
                    HOST: "ae.weixin.qq.com"
                  },
                  query: o
                },
                content: ""
              }),
              success: function(t) {
                w = !0, Z("[websocket] socket send init msg succeed, res: ".concat(t, ", ").concat((new Date).toLocaleTimeString())), C = 0, U = Date.now(), clearInterval(N), N = setInterval((function() {
                  Z("[websocket] socket send heartbeat", (new Date).toLocaleTimeString()), U = Date.now(), e.send({
                    data: JSON.stringify({
                      cmd: 0,
                      product: 6001,
                      seq: 123456,
                      http: {
                        method: "GET",
                        path: "/cgi-bin/mmbizwxaliveapp-bin/userwebsocketlogin",
                        header: {
                          HOST: "ae.weixin.qq.com"
                        },
                        query: "heartbeat=1"
                      },
                      content: ""
                    })
                  })
                }), 25e4), F && (F.forEach((function(e) {
                  e && e()
                })), F = [])
              },
              fail: function(e) {
                Z("[websocket] socket send init msg fail, err:", e)
              }
            })
          })), e.onClose((function(t) {
            if (w = !1, E = !1, Z("[websocket] socket close", t), clearInterval(N), e = null, F = [], V = [], b) b = !1;
            else {
              var o = t.code,
                a = t.reason;
              c.a.addReportItem({
                biz_id: c.a.WEBSOCKET_BIZ_ID,
                error_code: o,
                reason: a
              }), Y()
            }
          })), e.onError((function(e) {
            w = !1, E = !1, Z("[websocket] socket error", e)
          }))
        },
        Y = function() {
          clearTimeout(A), C < 6 ? (A = setTimeout((function() {
            Z("[websocket] reconnect:".concat(C, ", max:").concat(6)), j(k, M)
          }), 1e3), C++) : Z("[websocket] reconnect reach max time")
        },
        W = function(e) {
          if ("function" == typeof e) {
            var t = !1;
            V.forEach((function(o) {
              o === e && (t = !0)
            })), t || V.push(e)
          }
        },
        q = function(e) {
          var t = -1;
          V.forEach((function(o, a) {
            o === e && (t = a)
          })), t >= 0 && V.splice(t, 1)
        },
        z = function(e) {
          if (!e) return !1;
          var t = !1;
          return V.forEach((function(o) {
            o == e && (t = !0)
          })), t
        },
        K = function() {
          var e = Date.now();
          if (U > 0 && w && e - U > 31e4) {
            w = !1, E = !1;
            try {
              Z("[websocket] close socket cause heart timeout, last hearbeat:".concat(U, ", now:").concat(e)), O && O.close({})
            } catch (e) {
              Z("[websocket] close socket catch error: ".concat(e))
            }
          }
          return w
        },
        J = function(e) {
          if ("function" == typeof e) {
            F || (F = []);
            var t = !1;
            F.forEach((function(o) {
              o == e && (t = !0)
            })), t || F.push(e)
          }
        },
        X = function(e) {
          H = e
        };

      function Z(e) {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) o[a - 1] = arguments[a];
        H && H.apply(void 0, [e].concat(o))
      }

      function Q(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), o.push.apply(o, a)
        }
        return o
      }
      var $ = a;
      t.a = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Q(Object(o), !0).forEach((function(t) {
            r()(e, t, o[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : Q(Object(o)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
          }))
        }
        return e
      }({}, $)
    },
    36: function(t, o, a) {
      var i, r = a(7),
        n = a.n(r),
        s = a(16),
        c = a.n(s),
        l = a(17),
        h = a.n(l),
        p = a(3),
        u = a(0),
        d = a(1),
        m = a(2);

      function g(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), o.push.apply(o, a)
        }
        return o
      }

      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2 ? g(Object(o), !0).forEach((function(t) {
            n()(e, t, o[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : g(Object(o)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
          }))
        }
        return e
      }
      var _ = {
          onLoad: function(e) {
            this.pageLifeStatus = "onLoad";
            var t = Date.now();
            this.performanceData.onLoad_start = t, this._pageOnLoadTime = t, this.logInfo("[liveManger] onLoad", f({
              pageId: this.pageId,
              time: t
            }, e)), console.warn("[preloadNextPageView onLoad]"), this.getRoomSimpleInfo(), this._initLoadData(e), this.store.syncReady(), this.performanceData.onLoad_end = Date.now()
          },
          onShow: function() {
            var e = this;
            this.performanceData.page_onShow = Date.now(), this.logInfo("[liveManger] onShow", {
              pageId: this.pageId,
              time: this.performanceData.page_onShow
            }), "onLoad" !== this.pageLifeStatus ? this.getRoomDynamicInfo() : this.getRoomStaticInfo(), this.data.preWatchRecordTime = Date.now(), this.pageLifeStatus = "onShow", this.setData({
              pictureInPictureMode: ["push", "pop"]
            }), this.onUserCaptureScreen(), setTimeout((function() {
              e.reportEnterRoom()
            }), 2e3)
          },
          onReady: function() {
            this.performanceData.page_onReady = Date.now();
            var e = this.performanceData.page_onReady - this.performanceData.onLoad;
            console.warn("[preloadNextPageView onReady]"), e && !this.performanceData.has_leave && (this.reportPerformance("PAGE_ONREADY", e, "pluginVersion"), this.addReportMMData({
              actionType: 5,
              subActionType: 8,
              reserves: e
            }))
          },
          onHide: function() {
            this.logInfo("[liveManger] onHide", {
              pageId: this.pageId,
              time: Date.now()
            }), this.pageLifeStatus = "onHide", this._beforeLeave(), d.a.offUserCaptureScreen()
          },
          onUnload: function() {
            this.pageLifeStatus = "onUnload";
            var e = this.pageId;
            this.logInfo("[liveManger] onUnload", {
              pageId: this.pageId,
              time: Date.now()
            }), this._beforeLeave(), d.a.offUserCaptureScreen(), this.destroyByPageId(e)
          },
          getReqBase: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = {
                roomId: this.data.roomId,
                roomAppid: this.data.roomAppid,
                pluginAppid: this.data.pluginAppid,
                livePlayId: this.data.livePlayId || "",
                from: "player"
              };
            return e && (t.gray_type = [u.a.GRAY_STRATEGY_TYPE.NEW_COMMENT_IMPL, u.a.GRAY_STRATEGY_TYPE.WEB_SOCKET_PERCENT, u.a.GRAY_STRATEGY_TYPE.LINK_MIC_OPEN, u.a.GRAY_STRATEGY_TYPE.LIKE_ANIMATION_SYNC, u.a.GRAY_STRATEGY_TYPE.HTTPS_OPEN_1_2_4, u.a.GRAY_STRATEGY_TYPE.NEW_COMMENT_COUNT_IMPL]), t
          },
          onClickShareAppMessageForFakeNative: function(e) {
            this.pageThis && "function" == typeof this.pageThis.onClickShareAppMessageForFakeNative && this.pageThis.onClickShareAppMessageForFakeNative(e)
          },
          _initLoadData: function(e) {
            var t = this._getCacheDataBeforeStart();
            this.logInfo("onLoad cached", t);
            var o = this._initOptions(e),
              a = this._initUISize();
            this.logInfo("onLoad uisize", a);
            var i = f({}, this.store.data);
            Object.assign(i, t, o, a), this._initCurLiveStatusCode(i), i.curLiveStatusCode !== u.a.LIVE_STATUS.REPLAY && i.curLiveStatusCode !== u.a.LIVE_STATUS.END || this.getReplayUrl(), this.setData(f({}, i)), wx.showShareMenu({
              withShareTicket: !!i.openShareTicket
            }), i.curOpenid && this.createLivePlayId(i.curOpenid), 0 !== Object.keys(t).length && this.addReportMMData({
              actionType: 5,
              subActionType: 11
            })
          },
          _initCurLiveStatusCode: function(e) {
            if (e.curLiveStatusCode === u.a.LIVE_STATUS.REPLAY || e.curLiveStatusCode === u.a.LIVE_STATUS.END) return e.replayUrlList && e.replayUrlList.length > 0 ? e.isGetReplayUrl = 1 : (e.isGetReplayUrl = 0, e.replayUrlList = []), void(!e.hideReplay && e.isAutoReplay && e.isGetReplayUrl ? Object.assign(e, {
              curLiveStatusCode: u.a.LIVE_STATUS.REPLAY,
              showReplay: !0
            }) : Object.assign(e, {
              curLiveStatusCode: u.a.LIVE_STATUS.END,
              showReplay: !1
            }));
            e.curLiveStatusCode = ""
          },
          createLivePlayId: function(e) {
            if (e || (e = this.data.curOpenid), e) {
              var t = this.data.roomAppid + "&" + this.data.roomId + "&" + e + "&" + this._pageOnLoadTime;
              this.logInfo("[createLivePlayId] livePlayId", t), this.store.data.livePlayId = t
            }
          },
          _beforeLeaveSetCache: function() {
            wx.setStorage && (this._beforeLeaveSetCacheForAppidInfo(), this._beforeLeaveSetCacheForRoomInfo())
          },
          _beforeLeaveSetCacheForRoomInfo: function() {
            var e = this,
              t = {};
            ["curLiveStatusCode", "isConfirmUse4G", "isPushStream", "screenVerticalHeight", "roomImg", "isRoomHelper", "isHideTipsRoomHelper", "replayUrlList", "hideReplay", "isBgMeeting", "curWriteCommentContent", "isShowCaptureTips", "watchPvTotal", "commentPvTotal", "likeTotal", "clickPvTotal", "sharePvTotal", "cacheCloseNoticeMsgIdList", "officeNoticeMsgIdList", "cacheLotteryId", "isDisableAutoReply", "isShowAutoReplySettingBtn"].forEach((function(o) {
              0 === o.indexOf("is") ? t[o] = e.data[o] ? 1 : 0 : t[o] = e.data[o]
            })), t.isPushStream && (t.screenType = "vertical");
            try {
              var o = {
                  recordTime: Date.now(),
                  info: t,
                  linkMicScore: this.store.data.linkMicScore
                },
                a = JSON.stringify(o);
              wx.setStorage({
                key: "wxlive_" + this.data.roomAppid + "_" + this.data.roomId + "#",
                data: a
              }), this.logInfo("[liveManger] 缓存 setRoom:", o)
            } catch (e) {
              this.logError("[liveManger] 缓存 setRoom error", e)
            }
          },
          _beforeLeaveSetCacheForAppidInfo: function() {
            var e = this,
              t = {};
            ["weappName", "weappImg", "curOpenid", "isAuthored", "userInfo", "isTipsCouopnRegion", "isNameVerify"].forEach((function(o) {
              0 === o.indexOf("is") ? t[o] = e.data[o] ? 1 : 0 : t[o] = e.data[o]
            }));
            try {
              var o = {
                  recordTime: Date.now(),
                  info: t
                },
                a = JSON.stringify(o);
              wx.setStorage({
                key: "wxlive_" + this.data.roomAppid + "#",
                data: a
              }), this.logInfo("[liveManger] 缓存 setAppid:", o)
            } catch (e) {
              this.logError("[liveManger] 缓存 setAppid:", e)
            }
          },
          _getCacheDataBeforeStart: function() {
            var e = {};
            try {
              var t = this.data,
                o = t.roomAppid,
                a = t.roomId,
                i = wx.getStorageSync("wxlive_" + o + "_" + a + "#"),
                r = wx.getStorageSync("wxlive_" + o + "#");
              if (i) {
                var n = JSON.parse(i) || null;
                n && n.recordTime && n.info && Object.assign(e, n.info || {}), n && n.linkMicScore && (this.store.data.linkMicScore = n.linkMicScore)
              }
              if (r) {
                var s = JSON.parse(r) || null;
                s && s.recordTime && s.info && (Date.now() > s.recordTime + 864e5 && (delete s.info.userInfo, s.info.isAuthored = !1), Object.assign(e, s.info || {}))
              }
              return this.logInfo("[liveManager] 缓存 get succ", e), e
            } catch (e) {
              return this.logError("[liveManager] 缓存 get succ", e), {}
            }
          },
          _beforeLeave: function() {
            var e = this;
            this.performanceData.has_leave = 1, this.addReportMMData({
              actionType: 1,
              subActionType: 1,
              livePlayStatus: "end",
              reserves: Date.now()
            }), Object.keys(this.timer).forEach((function(t) {
              e.timer[t] && clearTimeout(e.timer[t]), e.timer[t] = null
            })), this._beforeLeaveSetCache(), this.log.uploadAll(), this.report.uploadAll()
          },
          _initUISize: function() {
            var e = d.a.getSystemInfoSync() || {},
              t = m.a.isIPhoneX(),
              o = -177 - (t ? 36 : 0),
              a = t ? 57.1984 * (e.windowHeight - 49) / 100 + 6 : 57.1984 * (e.windowHeight - 21) / 100,
              i = a + 24,
              r = .4 * o,
              n = e.platform || "",
              s = m.a.isDevTools(),
              c = s || m.a.compareVersion(e.version, "7.0.7") >= 0,
              l = m.a.isMobile();
            return {
              systemInfo: e,
              isIPhoneX: t,
              isMobile: l,
              isHorizontalPC: !l && e.windowWidth > e.windowHeight,
              isPC: "mac" === n || "windows" === n,
              isWindows: "windows" === n,
              isMac: "mac" === n,
              isIos: "ios" === n,
              isAndroid: "android" === n,
              isIpad: m.a.isIpad(),
              isDevTools: s,
              isSupportAnimation: c,
              windowHeight: e.windowHeight,
              windowWidth: e.windowWidth,
              uiStoreListHeight: a,
              uiEndBlockListHeight: r,
              uiEndBlockListBottom: i,
              statusBarHeight: e.statusBarHeight,
              uiPagePaddingTop: e.statusBarHeight + 44
            }
          },
          _initOptions: function(e) {
            e = e || {};
            var t = {};
            Object.keys(e).forEach((function(o) {
              var a = m.a.toHump(o);
              t[a] = e[o]
            }));
            var o = this.pageThis.data;
            Object.keys(o).forEach((function(e) {
              if ("live" !== e) {
                var a = m.a.toHump(e);
                t[a] = "custom_params" === e ? encodeURIComponent(o[e]) : o[e]
              }
            })), t.customParams && t.customParams.length && this.reportPerformance("CUSTOM_PARAMS_LEN", t.customParams.length);
            var a = t.type || 0,
              i = a === u.a.SCENE_TYPE.FOLLOW || a === u.a.SCENE_TYPE.RECOMMEND || a === u.a.SCENE_TYPE.ACTIVITY,
              r = wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1;
            return {
              type: a,
              shareOpenid: t.shareOpenid,
              customParams: t.customParams,
              openShareTicket: t.openShareTicket,
              closePictureInPicturePop: !!t.closePictureInPicturePop,
              closePictureInPictureMode: !!t.closePictureInPictureMode,
              showRecord: !!t.recordUrl,
              recordUrl: t.recordUrl,
              playGoodsRecordId: t.playGoodsRecordId,
              isExitMiniprogram: i,
              showStorePanel: a === u.a.SCENE_TYPE.PREVIEW || (a === u.a.SCENE_TYPE.FOLLOW || a === u.a.SCENE_TYPE.RECOMMEND || a === u.a.SCENE_TYPE.SHOP) && 1 === t.preview,
              isShareFriendsScene: r === u.a.SHARE_FRIENDS_SCENE,
              replayNavigateBack: t.replayNavigateBack,
              pathLotteryId: t.lotteryId,
              lotteryTeamId: t.lotteryTeamId,
              isEnterLotteryTeamFromShare: !!t.lotteryTeamId,
              helpRankPanelShow: a === u.a.SCENE_TYPE.HELP_RANK,
              rankNickname: t.rankNickname,
              rankOpenid: t.rankOpenid,
              rankAvatar: t.rankAvatar
            }
          },
          onUserCaptureScreen: function() {
            var e = this,
              t = this;
            wx.onUserCaptureScreen((function() {
              var o = e.data.rtxName || "";
              if (o) {
                if (e.logWarn("onUserCaptureScreen", o), t.addReportMMData({
                    actionType: 4,
                    subActionType: 38,
                    rtxName: o
                  }), e.data.isShowCaptureTips) return;
                e.data.isShowCaptureTips = 1, d.a.tipsGotIt({
                  title: "截屏行为已被记录",
                  content: "注意内容保密。截屏、录屏、复制等传播内容的行为都是禁止的。"
                })
              }
            }))
          },
          reportEnterRoom: function() {
            if (this.data.isForbidReportEnter) this.data.isForbidReportEnter = !1;
            else {
              this.data.isBgMeeting || this.setData({
                watchPvTotal: this.data.watchPvTotal + 1
              });
              var e = {
                actionType: 1,
                subActionType: 1,
                livePlayStatus: "start",
                reserves: Date.now()
              };
              this.addReportMMData(e), this.setSystemTriggerBarrage("enter", "进入直播间", e)
            }
          },
          setSystemTriggerBarrage: function(e, t, o) {
            var a = this,
              i = this.getCurrentUserInfo(),
              r = "";
            i && i.nickname && (r = {
              avatar: i.avatar || "",
              nickname: i.nickname || "",
              openid: i.openid,
              content: t,
              type: e,
              disable_auto_reply: "enter" === e && this.data.disableAutoReply ? 1 : 0
            }), p.a.setSystemTriggerBarrage(f(f({}, this.getReqBase()), {}, {
              action: e,
              content: r,
              report_data: this.getReportData(o)
            })).then((function(t) {
              if (r && t.msg_id && a.setData({
                  addSystemTriggerBarrage: f(f({}, r), {}, {
                    msg_id: t.msg_id
                  })
                }), "enter" === e && t.auto_reply) {
                var o = t.auto_reply && t.auto_reply.content || "";
                a.setData({
                  isShowAutoReplySettingBtn: !0,
                  autoReply: o,
                  autoReplyType: "welcome"
                })
              }
            })).catch((function(e) {}))
          },
          onShareAppMessage: function(e) {
            var t = this;
            this.logInfo("[onShareAppMessage]", e), this.setData({
              isOnShare: !0,
              showPushComment: !1,
              isForbidReportEnter: !0
            });
            var o = {
              actionType: 3,
              subActionType: 8,
              reserves: "menu" === e.from ? 1 : 2
            };
            this.addReportMMData(o), this.setSystemTriggerBarrage("share", "分享直播", o);
            var a = this.data,
              i = a.roomAppid,
              r = a.roomId,
              n = a.roomTitle,
              s = a.anchorImg,
              c = a.curOpenid,
              l = a.curLiveStatusCode,
              h = a.lotteryId,
              g = a.lotteryTeamMembers,
              _ = a.isLotteryOpen,
              y = a.helpRankStatus,
              v = a.helpRankLeftTime,
              S = a.helpRankIsAllowStaff,
              T = a.isAudienceRole,
              I = e.target && e.target.id,
              R = ("lottery-team-share" === I || g.find((function(e) {
                return e.openid === c
              }))) && !_,
              P = "";
            return R ? (P = "快加入我的队伍一起抽奖，中奖后人人有份。", "lottery-team-share" !== I && this.setData({
              isNotLotteryTeamShare: !0
            }), this.addReportMMData({
              actionType: 4,
              subActionType: 51,
              reserves: "menu" === e.from ? 1 : 2
            }), wx.setStorageSync("isOnShare-".concat(i, "-").concat(r, "-").concat(h), !0)) : 1 === y && v && v > 0 && (l === u.a.LIVE_STATUS.LIVE || l === u.a.LIVE_STATUS.PAUSE || l === u.a.LIVE_STATUS.ERROR) && (S || !S && T) ? (P = "我正在参与助力活动，观看直播助我上榜", this.addReportMMData({
              actionType: 4,
              subActionType: 53,
              reserves: "menu" === e.from ? 1 : 2
            })) : P = l === u.a.LIVE_STATUS.NOT_START ? "即将直播：".concat(n) : l === u.a.LIVE_STATUS.END || l === u.a.LIVE_STATUS.REPLAY ? n : "正在直播：".concat(n), m.a.compareVersion(this.data.systemInfo.SDKVersion, "2.12.0") > -1 ? (this.logInfo("分享基础库大于 2.12.0"), new Promise((function(e) {
              ("share-panel" === I ? p.a.sharePromise : p.a.getShareImgUrl(f(f({}, t.getReqBase()), {}, {
                content: {
                  pv: t.data.watchPvTotal,
                  like: t.data.likeTotal,
                  is_team: R ? 1 : 0
                }
              }))).then((function(o) {
                var a = o.share_img;
                1 === y && v && v > 0 && (l === u.a.LIVE_STATUS.LIVE || l === u.a.LIVE_STATUS.PAUSE || l === u.a.LIVE_STATUS.ERROR) ? S ? (p.a.reportRank(f({}, t.getReqBase())).then((function(e) {
                  t.logInfo("onShareAppMessage Request.reportRank res: ", e)
                })).catch((function(e) {
                  t.logError("onShareAppMessage Request.reportRank err: ", e)
                })), t.getUserInfo().then((function(o) {
                  e({
                    title: P,
                    params: t.getShareArgs(o),
                    imageUrl: a
                  })
                })).catch((function() {
                  e({
                    title: P,
                    params: t.getShareArgs(),
                    imageUrl: a
                  })
                }))) : p.a.getUserRole(f({}, t.getReqBase())).then((function(o) {
                  t.logInfo("onShareAppMessage 获取用户角色 succ", o), o && o.role_list && 0 === o.role_list.length ? (t.setData({
                    isAudienceRole: !0
                  }), p.a.reportRank(f({}, t.getReqBase())).then((function(e) {
                    t.logInfo("onShareAppMessage Request.reportRank res: ", e)
                  })).catch((function(e) {
                    t.logError("onShareAppMessage Request.reportRank err: ", e)
                  })), t.getUserInfo().then((function(o) {
                    e({
                      title: P,
                      params: t.getShareArgs(o),
                      imageUrl: a
                    })
                  })).catch((function() {
                    e({
                      title: P,
                      params: t.getShareArgs(),
                      imageUrl: a
                    })
                  }))) : (t.setData({
                    isAudienceRole: !1
                  }), d.a.tipsSimple("工作人员分享行为不计入助力榜，且无法为他人助力"), e({
                    title: P,
                    params: t.getShareArgs(),
                    imageUrl: a
                  }))
                })).catch((function() {
                  e({
                    title: P,
                    params: t.getShareArgs(),
                    imageUrl: a
                  })
                })) : e({
                  title: P,
                  params: t.getShareArgs(),
                  imageUrl: a
                })
              })).catch((function(o) {
                t.logError("分享出错了呀", o), t.getUserInfo().then((function(o) {
                  e({
                    title: P,
                    params: t.getShareArgs(o),
                    imageUrl: s
                  })
                })).catch((function() {
                  e({
                    title: P,
                    params: t.getShareArgs(),
                    imageUrl: s
                  })
                }))
              }))
            }))) : (this.logInfo("分享基础库小于 2.12.0"), {
              title: P,
              params: this.getShareArgs(),
              imageUrl: s
            })
          },
          onShareTimeline: function(e) {
            var t = this;
            this.logInfo("[onShareTimeline]", e), this.setData({
              isOnShare: !0,
              showPushComment: !1
            }), this.addReportMMData({
              actionType: 3,
              subActionType: 8,
              reserves: "menu" === e.from ? 1 : 2,
              shareChannel: 2
            });
            var o = this.data,
              a = o.roomAppid,
              i = o.roomId,
              r = o.roomTitle,
              n = o.anchorImg,
              s = o.curOpenid,
              c = o.userInfo,
              l = o.curLiveStatusCode,
              h = o.lotteryId,
              m = o.lotteryTeamMembers,
              g = o.isLotteryOpen,
              _ = o.helpRankStatus,
              y = o.helpRankLeftTime,
              v = o.helpRankIsAllowStaff,
              S = o.isAudienceRole,
              T = (e.target && e.target.id, "");
            return m.find((function(e) {
              return e.openid === s
            })) && !g ? (T = "快加入我的队伍一起抽奖，中奖后人人有份。", this.setData({
              isNotLotteryTeamShare: !0
            }), this.addReportMMData({
              actionType: 4,
              subActionType: 52,
              reserves: "menu" === e.from ? 1 : 2
            }), wx.setStorageSync("isOnShare-".concat(a, "-").concat(i, "-").concat(h), !0)) : 1 === _ && y && y > 0 && (l === u.a.LIVE_STATUS.LIVE || l === u.a.LIVE_STATUS.PAUSE || l === u.a.LIVE_STATUS.ERROR) && (v || !v && S) ? (T = "我正在参与助力活动，观看直播助我上榜", this.addReportMMData({
              actionType: 4,
              subActionType: 54,
              reserves: "menu" === e.from ? 1 : 2
            })) : T = l === u.a.LIVE_STATUS.NOT_START ? "即将直播：".concat(r) : l === u.a.LIVE_STATUS.END || l === u.a.LIVE_STATUS.REPLAY ? r : "正在直播：".concat(r), 1 === _ && y && y > 0 && (l === u.a.LIVE_STATUS.LIVE || l === u.a.LIVE_STATUS.PAUSE || l === u.a.LIVE_STATUS.ERROR) ? v || !v && S ? (p.a.reportRank(f({}, this.getReqBase())).then((function(e) {
              t.logInfo("onShareTimeline Request.reportRank res: ", e)
            })).catch((function(e) {
              t.logError("onShareTimeline Request.reportRank err: ", e)
            })), {
              title: T,
              query: this.getShareArgs(c),
              imageUrl: n
            }) : (d.a.tipsSimple("工作人员分享行为不计入助力榜，且无法为他人助力"), {
              title: T,
              query: this.getShareArgs(c),
              imageUrl: n
            }) : {
              title: T,
              query: this.getShareArgs(),
              imageUrl: n
            }
          },
          cancelPriorPlayerPerpare: function(e) {
            this.data.isPriorPlayerPerpare && (this.logInfo("[cancelPriorPlayerPerpare] 被调用", {
              curVal: this.data.isPriorPlayerPerpare,
              source: e
            }), console.warn("[preloadNextPageView] cancelPriorPlayerPerpare handleRoomStaticInfo", e), "player2007" === e ? (this.performanceData.isPriorPlayer = 1, this.addReportMMData({
              actionType: 5,
              subActionType: 10,
              reserves: 1,
              reserves1: this._priorPlayerTime || 0
            })) : "hitBottomTactics" === e && (this.reportPerformance("HIT_BOTTOM_TACTICS", 1, "pluginVersion"), this.addReportMMData({
              actionType: 5,
              subActionType: 10,
              reserves: 2,
              reserves1: this._priorPlayerTime || 0
            })), this.timer.cancelPriorPlayerPerpare && (clearTimeout(this.timer.cancelPriorPlayerPerpare), this.timer.cancelPriorPlayerPerpare = null), this.setData({
              isPriorPlayerPerpare: !1
            }), this._handleRoomInfoResps())
          },
          getRoomSimpleInfo: function() {
            var e = this;
            this.performanceData.simpleRequst_start = Date.now(), p.a.getRoomSimpleStaticInfo(this.getReqBase()).then((function(t) {
              if (e.pageLifeStatus && "onUnload" !== e.pageLifeStatus) {
                console.warn("[preloadNextPageView getSimpleInfo res]", t), e.performanceData.simpleRequst_end = Date.now(), e._innerGetSimpeInfo = "succ";
                try {
                  e._handleRoomSimpleInfo(t)
                } catch (t) {
                  e.logError("[iveManger] [getRoomSimpleInfo] logic error", t), e.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
                }
              }
            })).catch((function(t) {
              if (e.pageLifeStatus && "onUnload" !== e.pageLifeStatus) {
                e._innerGetSimpeInfo = "fail";
                var o = t && (+t.ret || +t.err_code) || t.errMsg && +t.errMsg.split(":")[2],
                  a = u.a.ROOM_ERROR_WORDING[o];
                a || (a = u.a.ROOM_ERROR_WORDING.DEFAULT, e._innerTipsSimpleReqRetry ? d.a.tipsSimple("重试失败，请检查网络") : (e._innerTipsSimpleReqRetry = 1, "onLoad" !== e.pageLifeStatus && "onShow" !== e.pageLifeStatus || d.a.tipsRetry(a, (function() {
                  e.getRoomSimpleInfo()
                })))), e.logInfo("[getRoomSimpleInfo] error", a), e.setData({
                  isHideLiveRoom: !0,
                  roomErrorWording: a
                })
              }
            }))
          },
          getRoomStaticInfo: function() {
            var e = this;
            console.warn("[preloadNextPageView getRoomStaticInfo]"), p.a.getRoomStaticInfo(f(f({}, this.getReqBase(!0)), {}, {
              osVersion: this.data.isAndroid || this.data.isIos ? 1 : "",
              clientVersion: this.data.systemInfo.version
            })).then((function(t) {
              e.pageLifeStatus && "onUnload" !== e.pageLifeStatus && (console.warn("[preloadNextPageView getRoomStaticInfo res]", t), e._innerGetRoomStaticInfoStatus = "succ", e._priorPlayerTime = t.prior_player_time || 0, e._priorPlayerType = t.prior_player_end_type || 1, e._priorPlayerTime && e.data.isPriorPlayerPerpare ? (e.logInfo("[getRoomStaticInfo] succ 但需要等player", {
                priorPlayerTime: e._priorPlayerTime
              }), e._innerGetRoomStaticInfoResp = t, clearTimeout(e.timer.cancelPriorPlayerPerpare), e.timer.cancelPriorPlayerPerpare = setTimeout((function() {
                e.cancelPriorPlayerPerpare("hitBottomTactics")
              }), e._priorPlayerTime)) : (e.cancelPriorPlayerPerpare("hitBottomTactics"), e.handleRoomStaticInfo(t)), e.getRoomDynamicInfo())
            })).catch((function(t) {
              e.pageLifeStatus && "onUnload" !== e.pageLifeStatus && (e._innerGetRoomStaticInfoStatus = "fail", e.logError("[getRoomStaticInfo] error", {
                err: t,
                simpleRet: e._innerGetSimpeInfo
              }), e.cancelPriorPlayerPerpare("hitBottomTactics"), "succ" !== e._innerGetSimpeInfo || "onLoad" !== e.pageLifeStatus && "onShow" !== e.pageLifeStatus || d.a.tipsConfirm({
                title: "数据异常",
                content: "网络不佳导致数据异常，请允许尝试恢复",
                confirmText: "重试",
                cancelText: "结束直播",
                onConfirm: function() {
                  e.logInfo("[getRoomStaticInfo] 用户点了重试"), e.getRoomStaticInfo()
                },
                onCancel: function() {
                  e.logInfo("[getRoomStaticInfo] 用户点了取消，将退出直播间"), e.setData({
                    isHideLiveRoom: !0,
                    roomErrorWording: u.a.ROOM_ERROR_WORDING.DEFAULT,
                    closePictureInPictureMode: !0
                  }), setTimeout((function() {
                    wx.navigateBack({
                      detal: 1
                    })
                  }), 100)
                }
              }))
            }))
          },
          getRoomDynamicInfo: function() {
            var e = this;
            this.pageLifeStatus && "onUnload" !== this.pageLifeStatus && p.a.getRoomDynamicInfo(this._getRoomDynamicInfoReq()).then((function(t) {
              console.warn("roomDynamicInfo", t), "onLoad" !== e.pageLifeStatus && "onShow" !== e.pageLifeStatus || (e.logInfo("[liveManger] [action=get_message] succ"), e.data.isPriorPlayerPerpare || "succ" !== e._innerGetRoomStaticInfoStatus ? (e.logInfo("[getRoomDynamicInfo] succ 但是还不能执行", {
                isPriorPlayerPerpare: e.data.isPriorPlayerPerpare,
                isStaticStatus: e._innerGetRoomStaticInfoStatus
              }), e._innerGetRoomDynamicInfoResp = t) : e._handleRoomDynamicInfoWithStartNext(t))
            })).catch((function(t) {
              if ("onLoad" === e.pageLifeStatus || "onShow" === e.pageLifeStatus) {
                e.logInfo("[liveManger] [action=get_message] error");
                var o = e._innerSlowLongPolingTime ? e._innerSlowLongPolingTime : 1e4;
                e._getRoomDynamicInfoNext(o)
              }
            }))
          },
          _handleRoomInfoResps: function() {
            this.logInfo("[_handleRoomInfoResps] 被调用"), this.data.isPriorPlayerPerpare || (this._innerGetRoomStaticInfoResp ? (this.logInfo("[_handleRoomInfoResps] 处理静态接口"), console.warn("[preloadNextPageView] cancelPriorPlayerPerpare handleRoomStaticInfo"), this.handleRoomStaticInfo(this._innerGetRoomStaticInfoResp), this._innerGetRoomStaticInfoResp = null, this._innerGetRoomDynamicInfoResp && (this.logInfo("[_handleRoomInfoResps] 处理轮询接口"), console.warn("[preloadNextPageView] cancelPriorPlayerPerpare handleRoomDynamicInfo"), this._handleRoomDynamicInfoWithStartNext(this._innerGetRoomDynamicInfoResp), this._innerGetRoomDynamicInfoResp = null)) : this.logInfo("[_handleRoomInfoResps] 静态接口尚未返回"))
          },
          _handleRoomSimpleInfo: function(e) {
            var t = this._handlePlayUrl(e.play_url_list || []),
              o = t.isM3u8,
              a = t.livePlayUrl,
              i = t.livePlay264Url,
              r = +e.live_status;
            r === u.a.LIVE_STATUS.END || r === u.a.LIVE_STATUS.REPLAY ? (this.logInfo("[simple] 拿到是回放、结束状态"), this.setData({
              roomImg: e.room_img,
              orignIsPushStream: !!+e.type,
              screenType: this.data.screenType ? this.data.screenType : +e.type ? "vertical" : "",
              videoWidth: +e.video_width,
              videoHeight: +e.video_height
            }), this.getReplayUrl()) : (this.logInfo("[simple] 非结束状态 设置数据"), this.setData({
              curLiveStatusCode: r,
              isM3u8: o,
              roomImg: e.room_img,
              livePlayUrl: a,
              livePlay264Url: i,
              orignIsPushStream: !!+e.type,
              screenType: this.data.screenType ? this.data.screenType : +e.type ? "vertical" : "",
              videoWidth: +e.video_width,
              videoHeight: +e.video_height
            }, !0), this.scaleLivePlayer(this.data.videoWidth, this.data.videoHeight), this.performanceData.seturl_start = Date.now()), r !== u.a.LIVE_STATUS.LIVE && (this.performanceData.not_report = 1, this.logInfo("[simple] 不是直播中,取消优先准备player", Date.now()), this.cancelPriorPlayerPerpare("notLiving"))
          },
          _getRoomDynamicInfoReq: function() {
            var e = 0;
            this.data.preWatchRecordTime > 0 && (e = Math.round((Date.now() - this.data.preWatchRecordTime) / 1e3), e = Math.min(e, 10)), this.data.preWatchRecordTime = Date.now();
            var t = this.data.allCommentList || [],
              o = t[0] || {},
              a = t[t.length - 1] || {},
              i = o.official || isNaN(o.msgId) ? 0 : o.msgId,
              r = a.official || isNaN(a.msgId) ? 0 : a.msgId,
              n = a.timestamp ? a.timestamp : 0; + r > 1597129930 && (r = 0);
            var s = this._isNotFirstDynamicInfoRequest;
            this._isNotFirstDynamicInfoRequest = !0;
            var c = this.data.isRoomCommentClose || this.data.hideComment || this.data.isCommentBan || this.data.isGlobalCommentBan,
              l = this.data.curLiveStatusCode === u.a.LIVE_STATUS.END || this.data.curLiveStatusCode === u.a.LIVE_STATUS.REPLAY ? 0 : 1,
              h = {
                comment: !s || c ? 0 : l,
                last_comment_id: r,
                last_comment_time: n,
                after_msg_id: i,
                anchor_nudge_audience_version: this.data.anchorNudgeAudienceVersion,
                audience_nudge_audience_version: this.data.audienceNudgeAudienceVersion,
                audience_nudge_anchor_version: this.data.audienceNudgeAnchorVersion,
                barrage: l,
                room_sys_msg_version: this.data.roomSysMsgVersion,
                global_sys_msg_version: this.data.globalSysMsgVersion,
                good_version: this.data.goodsVersion,
                push_version: this.data.goodsPushVersion,
                coupon_push_version: this.data.couponPushVersion,
                coupon_ids: 0,
                lottery_version: this.data.lotteryVersion,
                lottery_id: this.data.lotteryId,
                watch_time_increment: e,
                plugin_version: this.data.pluginVersion,
                notice_version: this.data.noticeInfo && this.data.noticeInfo.msg_id || 0,
                comm_barrages_version: this.data.maxBarrageMsgid
              };
            "RTC" != this.store.data.playerMode && (h.bitrate_level = this.data.bitrateLevel), this.logInfo("[liveManger] [action=get_message] req-content", f({}, h));
            var p = {
                actionType: 1,
                subActionType: 2,
                reserves: Date.now(),
                count: 1,
                watchTime: e
              },
              d = this.report && this.report.getLiveReportConfig(p);
            return f(f({}, this.getReqBase(!0)), {}, {
              content: h,
              report_data: {
                data_list: [d]
              }
            })
          },
          _getRoomDynamicInfoNext: function(e) {
            var t = this;
            e || (e = 5e3), this.data.curLiveStatusCode !== u.a.LIVE_STATUS.EXPIRE && (this.timer.getRoomDynamicInfo && clearTimeout(this.timer.getRoomDynamicInfo), this.setData({
              longPollingTime: e
            }), this.logInfo("[liveManger] longPollingTime interval", e), this.timer.getRoomDynamicInfo = setTimeout((function() {
              "onLoad" === t.pageLifeStatus || "onShow" === t.pageLifeStatus ? t.getRoomDynamicInfo() : t.logInfo("[liveManger] 页面被隐藏停止轮询")
            }), e), this.store.data.micPanelMode == u.a.MIC_PLAYER_MODE.APPLYING && (null == this._getMessageTimes ? this._getMessageTimes = 0 : this._getMessageTimes + 1 >= u.a.REPORT_LINK_MIC_SCORE_INTERVAL ? (p.a.reportLinkMicScore(f(f({}, this.getReqBase()), {}, {
              score: this.store.data.linkMicScore
            })).then((function(e) {})).catch((function(e) {})), this._getMessageTimes = 0) : this._getMessageTimes++))
          },
          _handleStaticFuncFlag: function(e) {
            if (isNaN(e)) return {};
            var t = u.a.FUNC_FLAG,
              o = this.data.systemInfo || {};
            return {
              funcFlag: e,
              hideLike: (e & t.LIKE) === t.LIKE,
              hideStore: (e & t.STORE) === t.STORE,
              hideComment: (e & t.COMMENT) === t.COMMENT,
              hideReplay: (e & t.REPLAY) !== t.REPLAY,
              hideKf: (e & t.KF) !== t.KF || m.a.compareVersion(o.SDKVersion, "2.11.2") < 0 || this.data.isPC,
              hideShare: (e & t.SHARE) === t.SHARE,
              hideNudge: (e & t.NUDGE) === t.NUDGE,
              coverFuzzy: (e & t.COVER_FUZZY) === t.COVER_FUZZY
            }
          },
          _handleDynamicFuncFlag: function(e) {
            if (isNaN(e)) return {};
            var t = u.a.FUNC_FLAG,
              o = this.data.systemInfo || {};
            return {
              funcFlag: e,
              hideReplay: (e & t.REPLAY) !== t.REPLAY,
              hideKf: (e & t.KF) !== t.KF || m.a.compareVersion(o.SDKVersion, "2.11.2") < 0 || this.data.isPC,
              hideShare: (e & t.SHARE) === t.SHARE,
              anchorOpenLinkMic: (e & t.LINKMIC) === t.LINKMIC
            }
          },
          handleRoomStaticInfo: function(e) {
            try {
              var t = e.openid || "";
              t || this.logError("[liveManger] roomStaticInfo no curOpenid", {
                roomId: this.data.roomId,
                roomAppid: this.data.roomAppid,
                time: Date.now()
              }), this.createLivePlayId(t);
              var o = this.data.closePictureInPictureMode || !+e.is_min_window || this.data.isPC,
                a = {};
              ["func_flag", "weapp_name", "weapp_img", "anchor_name", "anchor_img", "room_title", "room_img", "is_subscribe", "is_government", "rtx_name", "home_page", "slow_interval", "is_attention"].forEach((function(t) {
                0 === t.indexOf("is_") || 0 === t.indexOf("show_") ? a[m.a.toHump(t)] = e[t] ? 1 : 0 : e.hasOwnProperty(t) && (a[m.a.toHump(t)] = e[t])
              })), a.weappImg || (a.weappImg = u.a.DEFAULT_AVATAR), a.showFollowV2 = e.follow_msg_info && e.follow_msg_info.show_follow_v2, a.isRecommendShow = e.follow_msg_info && e.follow_msg_info.is_recommend_show;
              var i = this._handleStaticFuncFlag(a.funcFlag),
                r = this._handleFallback(e.fallback_cfg),
                n = this._hanleRoomHelperInfo(e.role),
                s = this._handleRoomPreviewInfo(e.preview),
                c = "";
              e.play_url_list && e.play_url_list.forEach((function(e) {
                12 == e.type && (c = e.url)
              }));
              var l = this._handleGrayInfo(e.gray_strategy_info, !0),
                h = 1;
              e.wxalive_storage && void 0 !== e.wxalive_storage.wifi_tip && (h = +e.wxalive_storage.wifi_tip), void 0 !== l.isUseNewCommentCount && (l.isUseNewCommentCount = l.isUseNewCommentCount && !e.low_phone), this.setData(f(f(f(f(f({
                userAvatarDropRate: r
              }, n), a), i), {}, {
                wifiTipsFlag: h,
                roomStartTime: +e.start_time,
                roomEndTime: +e.end_time,
                diffServerTime: e.timestamp - Math.round(Date.now() / 1e3),
                isBgMeeting: +e.room_type === u.a.ROOM_TYPE.BG_MEETING ? 1 : 0,
                orignIsPushStream: !!e.type,
                screenType: this.data.screenType ? this.data.screenType : +e.type ? "vertical" : "",
                curOpenid: t,
                anchorOpenid: e.anchor_openid,
                closePictureInPictureMode: o,
                jumpExtraData: {
                  room_id: this.data.roomId,
                  openid: e.openid || ""
                },
                isLowPhone: !!e.low_phone,
                realTimePlayUrl: c
              }, l), s)), this.store.setDataNoDiff({
                roomStaticInfo: e
              }), this.store.data.isTestWebSocket ? this.logInfo("websocket灰度开关打开") : this.logInfo("websocket灰度开关关闭")
            } catch (e) {
              this.logInfo("[handleRoomStaticInfo] logic error", e)
            }
          },
          _handlePlayUrl: function(e) {
            var t = e.find((function(e) {
                return e.type === u.a.PLAY_URL_TYPE.HTTP_M3U8
              })),
              o = e.find((function(e) {
                return e.type === u.a.PLAY_URL_TYPE.HTTPS_FLV_H265
              })),
              a = e.find((function(e) {
                return e.type === u.a.PLAY_URL_TYPE.HTTPS_FLV
              }));
            return t ? {
              livePlayUrl: t.url,
              livePlay264Url: a.url,
              isM3u8: !0
            } : o && !this.data.isWindows ? {
              livePlayUrl: o.url,
              livePlay264Url: a.url,
              isM3u8: !1
            } : {
              livePlayUrl: a.url,
              livePlay264Url: a.url,
              isM3u8: !1
            }
          },
          _handleNoticeInfo: function(e) {
            if (!e.notice_msg) return {};
            var t = e.notice_msg;
            if (!t.list || !t.list.length) return {};
            if (!(t = t.list[0]).msg_id) return {};
            var o = this.store.data.cacheCloseNoticeMsgIdList || [],
              a = this.store.data.officeNoticeMsgIdList || [];
            try {
              var i = JSON.parse(t.msg_content);
              if (2 == i.type && o.indexOf(t.msg_id) >= 0) return {};
              if (1 == i.type && a.indexOf(t.msg_id) >= 0) return {};
              if (i.begin_time > e.timestamp || i.end_time < e.timestamp) return {};
              if (2 == i.type && o.push(t.msg_id), 1 == i.type) {
                if (this.store.data.showNoticeToptips && 2 == this.store.data.noticeInfo.type && this.store.data.noticeInfo.end_time > e.timestamp && this.store.data.noticeInfo.begin_time < e.timestamp) return {};
                a.push(i.msg_id)
              }
              return {
                noticeInfo: f(f({}, i), {}, {
                  msg_id: t.msg_id
                }),
                cacheCloseNoticeMsgIdList: o,
                showNoticeToptips: !0,
                officeNoticeMsgIdList: a
              }
            } catch (e) {
              return console.error("_handleNoticeInfo err", e), {}
            }
          },
          _isCheckRoomEndStatus: function(e, t, o) {
            return this.logInfo("_isCheckRoomEndStatus", {
              cur: e,
              pre: t,
              hide: o
            }), e === u.a.LIVE_STATUS.END || e === u.a.LIVE_STATUS.REPLAY ? "" === t ? o ? u.a.LIVE_STATUS.END : this.data.isAutoReplay ? u.a.LIVE_STATUS.REPLAY : u.a.LIVE_STATUS.END : t === u.a.LIVE_STATUS.REPLAY ? o ? (d.a.tipsGotIt({
              title: "直播回放已被主播关闭，无法继续观看"
            }), u.a.LIVE_STATUS.END) : u.a.LIVE_STATUS.REPLAY : e : e
          },
          _isCheckRoomExpire: function(e) {
            var t = this.data.roomEndTime || 0,
              o = this.getServerTime() || 0;
            return !!(e === u.a.LIVE_STATUS.NOT_START && t && o && o > t) && (this.logWarn("[轮询] 该直播已删除", {
              end: t,
              serverTime: o
            }), !0)
          },
          _hanleRoomHelperInfo: function(e) {
            var t = this.data.userRoleType,
              o = e && e.role_type || u.a.USER_TYPE.NORMAL_USER,
              a = "";
            return o === u.a.USER_TYPE.ROOM_HELPER ? (a = e.role_nickname, this.data.isHideTipsRoomHelper || (d.a.tipsGotIt({
              title: "当前身份为小助手“".concat(a, "”")
            }), this.setData({
              isHideTipsRoomHelper: !0
            }))) : t === u.a.USER_TYPE.ROOM_HELPER && (this.setData({
              isHideTipsRoomHelper: !1
            }), d.a.tipsGotIt({
              title: "小助手身份已被移除"
            })), {
              userRoleType: o,
              roomHelperNickname: a,
              isRoomHelper: o === u.a.USER_TYPE.ROOM_HELPER || o === u.a.USER_TYPE.SUPERMAN
            }
          },
          _handleTips: function(e, t) {
            if (!t || 0 === t.length) return "";
            var o = t[t.length - 1],
              a = this.getServerTime();
            return e.status_code !== u.a.LIVE_STATUS.END && a <= o.expire_time ? (this.logInfo("[_handleTips]", f(f({}, o), {}, {
              time: a
            })), o.tip_word) : ""
          },
          _handleLiveDuration: function(e) {
            if (!(e && e.live_time && e.live_time.finish_time && e.live_time.start_time)) return "-";
            var t = e.live_time.finish_time - e.live_time.start_time;
            return isNaN(t) || !t ? "-" : m.a.formatDuration(t)
          },
          _handleLiveData: function(e) {
            var t = this;
            e = e || {};
            var o = ["watch_pv", "comment_pv", "like", "click_pv", "shara_pv", "goods_stat_list"],
              a = {};
            return Object.keys(e).forEach((function(i) {
              if (o.includes(i)) {
                var r = m.a.toHump(i),
                  n = e[i] || 0,
                  s = t.data[r + "Total"] || 0;
                "like" === i && (a.likeChangeCount = s ? n - s : 0), a[r] = e[i] || 0, t.data.isBgMeeting && "watch_pv" === r ? a[r + "Total"] = n : a[r + "Total"] = Math.max(s, n)
              }
            })), a
          },
          _handleFallback: function(e) {
            return e && e.user_avatar_drop_rate || 0
          },
          _handleSwitchUrl: function(e) {
            var t = e.auto_bitrate_url || "",
              o = e.force_bitrate_url || "",
              a = !t || o && o < t ? o : t,
              i = this.data.livePlayUrl || "";
            return a ? i.substr(0, i.indexOf("?")) === a.substr(0, a.indexOf("?")) ? i : (this.performanceData.isSwitchUrl = 1, this.logInfo("switchBitrateUrl", {
              switchBitrateUrl: a,
              oldUrl: i,
              autoBitrateUrl: t,
              forceBitrateUrl: o
            }), a) : i
          },
          _handleRoomDynamicInfoWithStartNext: function(e) {
            if (("onLoad" === this.pageLifeStatus || "onShow" === this.pageLifeStatus) && !this.data.isHideLiveRoom) {
              try {
                this._handleRoomDynamicInfo(e)
              } catch (e) {
                this.logError("[liveManger] handleRoomDynamicInfo logic err", e)
              }
              var t = e.settings && +e.settings.fast_interval || 5,
                o = e.settings && +e.settings.slow_interval || 10;
              5 === t && 10 === o || this.logInfo("roomDynamicInfo.settings", {
                fastInterval: t,
                slowInterval: o
              }), this._innerFastLongPollingTime = Math.max(1e3 * t, 1e3), this._innerSlowLongPolingTime = Math.max(1e3 * o, 1e4), this._getRoomDynamicInfoNext(this._innerFastLongPollingTime)
            }
          },
          _handleRoomDynamicInfo: function(e) {
            this._hasHandleRoomDynamicInfo || (console.warn("[preloadNextPageView] _handleRoomDynamicInfo"), this._hasHandleRoomDynamicInfo = !0);
            var t = e.live_info || {};
            if (0 !== Object.keys(t).length)
              if (t.status_code && !isNaN(t.status_code)) {
                var o = +t.status_code;
                if (this._isCheckRoomExpire(o)) return clearTimeout(this.timer.getRoomDynamicInfo), void this.setData({
                  isHideLiveRoom: !0,
                  curLiveStatusCode: u.a.LIVE_STATUS.EXPIRE,
                  roomErrorWording: "该直播已删除"
                });
                var a = t.hasOwnProperty("func_flag") ? t.func_flag : null,
                  i = this._handleDynamicFuncFlag(a);
                void 0 === this._innerPreFuncFlag ? this._innerPreFuncFlag = a : this._innerPreFuncFlag !== a && this.logInfo("[轮询] funcFlagInfo", {
                  pre: this._innerPreFuncFlag,
                  cur: a,
                  info: i
                }), this._innerPreFuncFlag = a, o = this._isCheckRoomEndStatus(o, this.data.curLiveStatusCode, i.hideReplay), this.logInfo("[轮询] 处理后 curLiveStatusCode", o);
                var r = this._hanleRoomHelperInfo(e.role),
                  n = this._handleLiveData(e.stat),
                  s = this._handleSwitchUrl(e.bitrate_info || {});
                "RTC" == this.store.data.playerMode && (s = this.store.data.livePlayUrl);
                var c = e.activity_info || {};
                o !== u.a.LIVE_STATUS.LIVE && (c.is_show = !1);
                var l = this._handleFallback(e.fallback_cfg),
                  h = this._handleNoticeInfo(e),
                  p = this._handleGrayInfo(e.gray_strategy_info);
                void 0 !== p.isUseNewCommentCount && (p.isUseNewCommentCount = p.isUseNewCommentCount && !this.data.isLowPhone), this.setData(f(f(f(f(f({
                  diffServerTime: e.timestamp - Math.round(Date.now() / 1e3),
                  curLiveStatusCode: o,
                  showReplay: !this.data.showRecord && o === u.a.LIVE_STATUS.REPLAY,
                  isUserBan: !!e.is_ban && 2 == (2 & e.ban_flag),
                  activityInfo: c,
                  lotteryParticipateNum: e.lottery_size || 0,
                  tips: this._handleTips(t, t.tips),
                  userAvatarDropRate: l,
                  livePlayUrl: s,
                  liveDuration: this._handleLiveDuration(t)
                }, n), r), i), p), h)), this.store.setDataNoDiff({
                  roomDynamicInfo: e
                }), this.data.hideReplay || this.data.isGetReplayUrl || o !== u.a.LIVE_STATUS.END || this.getReplayUrl()
              } else this.logError("[handleRoomDynamicInfo] 没有房间状态");
            else this.logError("[handleRoomDynamicInfo] live_info", e.live_info)
          },
          getReplayUrl: function() {
            var e = this;
            this.pageLifeStatus && "onUnload" !== this.pageLifeStatus && (this.data.isGetReplayUrl || this._innerGetReplayIng || (this._innerGetReplayIng = 1, p.a.getReplayUrl(f(f({}, this.getReqBase()), {}, {
              content: {
                offset: 0,
                limit: u.a.REPLAY_LIMIT
              }
            })).then((function(t) {
              if (e.pageLifeStatus && "onUnload" !== e.pageLifeStatus) {
                e._innerGetReplayIng = 0;
                var o = [],
                  a = t.MediaInfoSet;
                a && a.forEach((function(e) {
                  var t = e.BasicInfo && e.BasicInfo.MediaUrl || "";
                  t.includes("m3u8") && o.push(t)
                }));
                var i = !(e.data.isAutoReplay && !e.data.hideReplay);
                e.logInfo("getReplayUrl isEnd", i), o.length > 0 ? e.setData({
                  curLiveStatusCode: i ? u.a.LIVE_STATUS.END : u.a.LIVE_STATUS.REPLAY,
                  showReplay: !i && !e.store.data.showRecord,
                  replayUrlList: o,
                  isGetReplayUrl: !0,
                  pictureInPictureMode: i ? "" : ["push", "pop"]
                }) : e.setData({
                  curLiveStatusCode: u.a.LIVE_STATUS.END,
                  showReplay: !1,
                  isGetReplayUrl: !1
                })
              }
            })).catch((function(t) {
              e.pageLifeStatus && "onUnload" !== e.pageLifeStatus && (e._innerGetReplayIng = 0, e.logError("[liveManger] 获取回放地址失败", t), e.setData({
                curLiveStatusCode: u.a.LIVE_STATUS.END,
                isGetReplayUrl: !1
              }), e.reportPerformance("LOGIC_ERROR", 1, "pluginVersion"), "onLoad" !== e.pageLifeStatus && "onShow" !== e.pageLifeStatus || e.getReplayUrl())
            }))))
          },
          setPageOrientation: function(e) {
            var t = this,
              o = e || ("portrait" === this.data.orientation ? "landscape" : "portrait");
            this.logInfo("[liveManger] setPageOrientation getInto", {
              orientation: o
            }), this.setData({
              isClearScreenWithPageOrientation: !0
            }), d.a.setPageOrientation(o).then((function() {
              t.logInfo("[liveManger] wxapi.setPageOrientation succ", {
                orientation: o
              }), t.setData({
                orientation: o,
                isPushStream: !0,
                screenType: "portrait" === o ? "vertical" : "horizontal",
                isClearScreenWithPageOrientation: !1
              })
            })).catch((function(e) {
              t.logError("[liveManger] wxapi.setPageOrientation err", {
                err: e,
                orientation: o
              }), t.setData({
                isClearScreenWithPageOrientation: !1
              })
            }))
          },
          _testCreateWxaParams: function(e) {},
          handleWxaParams: function(e) {},
          scaleLivePlayer: function(e, t) {
            if (!(e <= 0 || t <= 0)) {
              var o = this.data,
                a = o.videoWidthScale,
                i = o.videoHeightScale,
                r = o.isPushStream,
                n = o.isHorizontalPC,
                s = o.isIpad,
                c = o.systemInfo;
              if (a != e || i != t) {
                this.logInfo("videoWidth: ".concat(e, ", videoHeight: ").concat(t, ", videoWidthScale: ").concat(a, ", videoHeightScale: ").concat(i));
                var l = 1,
                  h = c.windowWidth,
                  p = c.windowHeight;
                if (!r && !n && !s) {
                  if (0 == p || 0 == h) return;
                  var u = e / t;
                  l = h / p < u ? m.a.ceil(p / (h / u), 3) : m.a.ceil(h / (p * u), 3)
                }
                this.logInfo("scale live player, rate: ".concat(l, ", window: ").concat(h, " * ").concat(p, ", video: ").concat(e, " * ").concat(t)), this.setData({
                  videoWidthScale: e,
                  videoHeightScale: t,
                  scaleRate: l,
                  useContain: !0
                })
              }
            }
          },
          getShareArgs: function(e) {
            var t = this.data,
              o = t.curOpenid,
              a = t.roomId,
              i = t.roomAppid,
              r = t.customParams,
              n = t.openShareTicket,
              s = t.closePictureInPictureMode,
              c = t.lotteryId,
              l = t.lotteryTeamId,
              h = t.lotteryTeamMembers,
              p = t.helpRankStatus,
              u = "room_id=".concat(a, "&room_appid=").concat(i, "&type=1&share_openid=").concat(o, "&custom_params=").concat(r, "&close_picture_in_picture_mode=").concat(s ? 1 : 0, "&open_share_ticket=").concat(n, "&lottery_id=").concat(c);
            if (h.find((function(e) {
                return e.openid === o
              })) && (u += "&lottery_team_id=".concat(l)), 1 === p) {
              var d = e || {},
                m = d.avatar,
                g = d.nickname,
                f = d.openid;
              f && (u += "&rank_avatar=".concat(m, "&rank_nickname=").concat(g, "&rank_openid=").concat(f))
            }
            return u
          },
          getUserInfo: function() {
            var e = this;
            return new Promise((function(t, o) {
              var a = e.getCurrentUserInfo();
              if (!a) return e.data.isWxaMode ? (console.error("小程序需要使用<button>形式授权"), void o("异常，无法授权")) : void d.a.getNativeUserInfo().then((function(o) {
                e.logInfo("[授权] succ", f({}, o)), a = {
                  avatar: m.a.avatarToSmall(o.avatarUrl),
                  nickname: o.nickName,
                  openid: o.openid || e.data.curOpenid,
                  avatarBig: o.avatarUrl
                }, e.store.data.userInfo = a, t(a), e.addReportMMData({
                  actionType: 2,
                  subActionType: 1
                })
              })).catch((function(t) {
                e.logInfo("[授权] fail", t), o(t), e.addReportMMData({
                  actionType: 2,
                  subActionType: 2
                })
              }));
              t(a)
            }))
          },
          getCurrentUserInfo: function() {
            return this.data.userInfo && this.data.userInfo.openid && this.data.userInfo.hasOwnProperty("avatar") && this.data.userInfo.hasOwnProperty("nickname") ? this.data.userInfo : null
          },
          _handleRoomPreviewInfo: function(e) {
            if (e) {
              var t = e.video_status,
                o = e.img_url,
                a = e.text,
                i = e.type,
                r = e.video_url,
                n = e.video_vid;
              return {
                previewType: i || 0,
                previewImgUrl: o || "",
                previewText: a || "",
                previewVideoUrl: r && r.url_info && r.url_info[0].url || "",
                previewVideoVid: n || -1,
                previewAuditStatus: t || 0
              }
            }
          }
        },
        y = a(14),
        v = {
          isRoomCommentClose: function() {
            var e = this.data.roomDynamicInfo || this.data.roomStaticInfo;
            return !(!e || !e.live_info) && e.live_info.flag === u.a.LIVE_ROOM_FLAG.ROOM_FLAG_BAN_COMMENT
          },
          isRoomCommentBan: function() {
            var e = this.data.roomDynamicInfo || this.data.roomStaticInfo;
            return !(!e || !e.live_info) && e.live_info.forbid_flag & u.a.LIVE_FORBID_FLAG.LIVE_FORBID_FLAG_SINGLE_COMMENT
          },
          isGlobalCommentBan: function() {
            var e = this.data.roomDynamicInfo || this.data.roomStaticInfo;
            return !(!e || !e.live_info) && e.live_info.forbid_flag & u.a.LIVE_FORBID_FLAG.LIVE_FORBID_FLAG_ALL_COMMENT
          },
          commentsHeight: function() {
            var e = this.data,
              t = e.screenType,
              o = e.windowWidth,
              a = e.windowHeight,
              i = e.keyboardHeight,
              r = e.showPushComment,
              n = e.isPushStream,
              s = e.showLotteryOper,
              c = n && "vertical" !== t || !r || s ? 0 : a - i - 305 > 300 ? 300 : a - i - 305 < 53 ? 53 : a - i - 305,
              l = a - e.waterMarkBottom;
            return c ? (console.log("普通状态下、有键盘"), c > 73 ? c : 73) : "horizontal" === t && l && this.data.showRecord ? (console.log("横屏，无输入评论。横屏，无输入评论"), o / 2 - 75 > 58 ? o / 2 - 75 : 58) : "horizontal" === t && l && !this.data.showRecord ? (console.log("横屏，无输入评论 有抽奖入口 和 拍一拍系统消息或其他系统消息。横屏，无输入评论 有抽奖入口 和 拍一拍系统消息或其他系统消息"), o / 2 - 105 > 58 ? o / 2 - 105 : 58) : ""
          },
          commentsClass: function() {
            var e = this.data,
              t = e.screenType,
              o = e.showHorizontalBtn,
              a = e.goodsPush,
              i = e.couponPush,
              r = e.showPushComment,
              n = e.isBgMeeting,
              s = e.curLiveStatusCode,
              c = e.from,
              l = e.previewAuditStatus,
              h = e.previewType,
              p = e.isReplay,
              d = (e.roomDynamicInfo, []);
            return ("player" === c && s === u.a.LIVE_STATUS.NOT_START && h > 0 && 3 !== l || s === u.a.LIVE_STATUS.NOT_START && h > 0) && d.push("comments__with-advance"), "horizontal" === t && d.push("comments__horizontal"), "horizontal" !== t && !p && o && d.push("comments__vertical"), !a && !i || r || d.push("comments__with-active"), a && i && !r && d.push("comments__with-extend-active"), n && d.push("comments__allenLive"), d.join(" ")
          },
          commentHasExtendActive: function() {
            var e = this.data,
              t = e.goodsPush,
              o = e.couponPush,
              a = e.showPushComment;
            return !(!t || !o || a)
          },
          showForbidIcon: function() {
            return !!this.data.isRoomHelper
          },
          showStoreIcon: function() {
            return !(this.data.curLiveStatusCode === u.a.LIVE_STATUS.END && !this.data.showRecord || this.data.fixHideStore || this.data.hideStore)
          }
        },
        S = a(12);

      function T(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), o.push.apply(o, a)
        }
        return o
      }

      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2 ? T(Object(o), !0).forEach((function(t) {
            n()(e, t, o[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : T(Object(o)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
          }))
        }
        return e
      }
      var R = I(I({}, v), {}, {
          navigationBtn: function() {
            return this.data.isShareFriendsScene ? "shareFriend" : this.data.curLiveStatusCode === u.a.LIVE_STATUS.REPLAY || this.data.showRecord ? "back" : "horizontal" !== this.data.screenType || this.data.isIpad ? this.data.isExitMiniprogram ? "exit" : 1 === getCurrentPages().length && this.data.homePage ? "goHome" : "back" : "back"
          },
          likeTotalWording: function() {
            return m.a.getFormatNumer(this.data.likeTotal || 0)
          },
          watchPvTotalWording: function() {
            return m.a.getFormatNumer(this.data.watchPvTotal || 0)
          },
          commentPvTotalWording: function() {
            return m.a.getFormatNumer(this.data.commentPvTotal || 0)
          },
          clickPvTotalWording: function() {
            return m.a.getFormatNumer(this.data.clickPvTotal || 0)
          },
          sharePvTotalWording: function() {
            return m.a.getFormatNumer(this.data.sharePvTotal || 0)
          },
          showLikeIcon: function() {
            return !((this.data.curLiveStatusCode === u.a.LIVE_STATUS.END || this.data.hideLike) && !this.data.showRecord)
          },
          showMoreIcon: function() {
            return this.data.curLiveStatusCode !== u.a.LIVE_STATUS.END && this.data.curLiveStatusCode !== u.a.LIVE_STATUS.FORBID && !(!this.data.isRoomHelper && this.data.hideKf && !this.data.showLinkMicIcon && !this.data.isShowAutoReplySettingBtn)
          },
          showLinkMicIcon: function() {
            return !this.data.showRecord && !m.a.isPC() && !m.a.isDevTools() && S.a.isWebSocketOpen() && this.data.isLinkMicOpen && !this.data.isRoomLinkMicBan && this.data.anchorOpenLinkMic && this.data.curLiveStatusCode === u.a.LIVE_STATUS.LIVE
          },
          isCaton: function() {
            return Date.now() / 1e3 - this.data.lastSwitchBitrateTime < u.a.CATON_RESET_TIME
          },
          showCommentIcon: function() {
            var e = this.data,
              t = e.from,
              o = e.hideComment,
              a = e.screenType,
              i = e.isAndroid,
              r = e.curLiveStatusCode,
              n = e.showRecord;
            return !("player" !== t || o || "horizontal" === a && i || n || r === u.a.LIVE_STATUS.FORBID || r === u.a.LIVE_STATUS.END || r === u.a.LIVE_STATUS.REPLAY)
          },
          showSettingIcon: function() {
            return "pusher" === this.data.from && (this.data.curLiveStatusCode === u.a.LIVE_STATUS.LIVE || this.data.curLiveStatusCode === u.a.LIVE_STATUS.NOT_START)
          },
          showBacktoLiveIcon: function() {
            var e = this.data,
              t = e.showVideoDotList,
              o = e.curLiveStatusCode,
              a = e.allLiveStatusCode,
              i = e.showRecord,
              r = e.isClearScreen;
            return !(t || o !== a.LIVE && o !== a.FORBID && o !== a.PAUSE && o !== a.ERROR || !i || r)
          },
          showRecordListIcon: function() {
            var e = this.data,
              t = e.showVideoDotList,
              o = e.curLiveStatusCode,
              a = e.allLiveStatusCode,
              i = e.showRecord,
              r = e.isClearScreen;
            return !(t || o !== a.REPLAY && o !== a.END || !i || r)
          },
          isRoomLinkMicBan: function() {
            var e = this.data.roomDynamicInfo || this.data.roomStaticInfo;
            return !(!e || !e.live_info) && 0 != (e.live_info.forbid_flag & u.a.LIVE_FORBID_FLAG.LIVE_FORBID_FLAG_LINKMIC)
          },
          isLotteryOpen: function() {
            var e = this.data,
              t = e.showLotteryCountTime,
              o = e.lotteryType;
            return !t && ("result" === o || "result-list" === o || "error" === o)
          },
          isHideStorePanelInEnd: function() {
            return !this.data.curLiveStatusCode || this.data.curLiveStatusCode === u.a.LIVE_STATUS.END && 0 === this.data.couponList.length && 0 === this.data.goodsList.length
          },
          hidePlayerGuide: function() {
            return this.data.showPushComment || this.data.showStorePanel || this.data.showForbidUserList
          },
          pageContainerClass: function() {
            var e = this.data,
              t = e.curLiveStatusCode,
              o = e.isSupportBounding,
              a = e.isBgMeeting,
              i = e.isGovernment,
              r = e.isPushStream,
              n = e.screenType,
              s = e.isIPhoneX,
              c = e.isPC,
              l = e.isIpad,
              h = e.isShareFriendsScene,
              p = e.showRecord,
              d = e.isLivePlaying,
              m = [];
            return !s || h && t !== u.a.LIVE_STATUS.REPLAY || m.push("live-player__bottom-area-safe"), t === u.a.LIVE_STATUS.LIVE && d && m.push("live-player__playing"), t === u.a.LIVE_STATUS.END && m.push("live-player__end"), t === u.a.LIVE_STATUS.REPLAY && m.push("live-player__playing live-player__end live-player__replay__container"), i && m.push("live-player__government"), a && m.push("live-player__allenLive"), o && m.push("live-player__support-bounding"), r && "vertical" === n && m.push("live-player__push-stream live-player__push-stream__vertical"), r && "horizontal" === n && m.push("live-player__push-stream live-player__push-stream__horizontal"), c && m.push("live-player__pc"), l && m.push("live-player__ipad"), p && m.push("live-player__record__container"), this.showCommentIcon || m.push("live-player__no-comments"), m.join(" ")
          },
          replayPageContainerClass: function() {
            var e = this.data,
              t = e.isGovernment,
              o = e.isPushStream,
              a = e.screenType,
              i = e.isIPhoneX,
              r = e.showVideoLoading,
              n = e.isClearScreen,
              s = e.roomImg,
              c = [];
            return i && c.push("page-live-replay__bottom-area-safe"), o && "horizontal" === a && c.push("page-live-replay__horizontal"), o && (n ? c.push("page-live-replay__clean-screen") : c.push("page-live-replay__cancel-clean-screen")), t && s && c.push("live-page-cover page-live-replay__government"), r && c.push("page-live-replay__loading"), c.join(" ")
          },
          playingLayerStyle: function() {
            var e = this.data,
              t = e.isGovernment,
              o = e.isPushStream,
              a = e.screenType,
              i = e.waterMarkBottom,
              r = e.systemInfo,
              n = e.screenVerticalHeight;
            if (!n || !i) return "";
            var s = [],
              c = 24.14 * Math.max(r.windowWidth, r.screenHeight) / 100;
            c - n / 2 < 8 && (c = 8 + n / 2);
            var l = c;
            if (o && "vertical" === a) {
              if (t) s.push("top: calc((50vh - ".concat(n / 2, "px));"));
              else {
                var h = i + l - n / 2;
                s.push("top: ".concat(h, "px;"))
              }
              s.push("height:" + n + "px;")
            }
            return s.join("")
          },
          pageCommentAreaClass: function() {
            var e = this.data,
              t = e.goodsPush,
              o = e.showPushComment,
              a = e.couponPush,
              i = e.showLikeIcon,
              r = e.showCommentIcon,
              n = [];
            return o ? n.push("live-player-room__body__msg-list__with-push-comment") : (t && n.push("live-player-room__body__msg-list__with-store"), a && n.push("live-player-room__body__msg-list__with-coupon"), !i && r && n.push("live-player-room__body__msg-list__cross")), n.join(" ")
          },
          pageCommentAreaStyle: function() {
            var e = this.data,
              t = e.screenType,
              o = e.keyboardHeight,
              a = e.showPushComment,
              i = (e.isIphoneX, "horizontal" !== t && a ? o : 0);
            if (i) return "margin-bottom:".concat(i, "px")
          },
          pageStoreAreaClass: function() {
            var e = this.data,
              t = e.showStorePanel,
              o = e.hideStore,
              a = e.screenType,
              i = e.isClearScreenWithPageOrientation,
              r = [];
            return e.isIPhoneX && r.push("mode__store-list__iphoneX"), "horizontal" === a && r.push("no-events"), (!t || o || i) && r.push("component__hidden"), r.join(" ")
          },
          forUserListHeight: function() {
            var e = this.data,
              t = e.screenType,
              o = e.windowHeight;
            return "horizontal" === t ? o - 70 : .5073 * o - 20
          },
          lotteryOperClass: function() {
            var e = this.data,
              t = e.lotteryType,
              o = e.screenType,
              a = e.curLotteryLuckMen,
              i = e.lotteryPush,
              r = e.isClickResultList,
              n = [];
            "error" === t && n.push("lottery-oper__dialog__error"), "unstart" === t && n.push("lottery-oper__dialog__unstart"), ("result-list" === t || r) && n.push("lottery-oper__dialog__large lottery-oper__dialog__rewardlist");
            var s = a && a.length || 0;
            return "result" === t && 0 === s && n.push("lottery-oper__dialog__middle lottery-oper__dialog__noparticipate"), "result" !== t || !i.isParticipate && 0 === s || n.push("lottery-oper__dialog__large"), "result" === t && s > 0 && i.isParticipate && i.isWinLottery && n.push("lottery-oper__dialog__reward"), "result" === t && s > 0 && i.isParticipate && !i.isWinLottery && n.push("lottery-oper__dialog__noreward"), "horizontal" === o && n.push("lottery-oper__dialog__horizontal"), "vertical" === o && n.push("lottery-oper__dialog__vertical"), n.join(" ")
          },
          isHideRoomBodyContainer: function() {
            var e = this.data,
              t = e.curLiveStatusCode,
              o = e.isClearScreenWithPageOrientation,
              a = e.showStorePanel,
              i = e.showForbidUserList,
              r = e.screenType,
              n = e.showAttentionPanel,
              s = e.showVideoDotList,
              c = e.showRecord,
              l = e.showOperationPanel;
            return t === u.a.LIVE_STATUS.NOT_START ? a || i || s : t === u.a.LIVE_STATUS.LIVE ? o || 104 === t || s || i && "horizontal" !== r || l && "horizontal" !== r : !(t !== u.a.LIVE_STATUS.REPLAY && !c) && (o || a && "horizontal" !== r || s || i && "horizontal" !== r || n)
          },
          hasExtLiveRoom: function() {
            if (this.data.isPC) return !1;
            if (this.data.curLiveStatusCode === u.a.LIVE_STATUS.LIVE) return !1;
            var e = !1;
            return this.data.profileExtRoomList.forEach((function(t) {
              t.live_status === u.a.LIVE_STATUS.LIVE && (e = !0)
            })), e && this.data.showProfileRedDot
          }
        }),
        P = (i = {
          roomId: "",
          roomAppid: "",
          longPollingTime: 5e3,
          type: "",
          pluginAppid: "wx2b03c6e691cd7370",
          pluginVersion: m.a.pluginVersion,
          pluginScene: "",
          from: "player",
          isWxaMode: !1,
          urlPathPrefix: "",
          customParams: "",
          openShareTicket: "",
          isShareFriendsScene: !1,
          isShowCaptureTips: !1,
          isShareAppMessageForFakeNative: !1,
          roomStaticInfo: null,
          roomDynamicInfo: null,
          isNameVerify: -1,
          isPriorPlayerPerpare: !1,
          curLiveStatusCode: "",
          allLiveStatusCode: u.a.LIVE_STATUS,
          roomErrorWording: "",
          isHideLiveRoom: !1,
          liveDuration: "",
          wifiTipsFlag: "",
          navigationBtn: "",
          isExitMiniprogram: !1,
          isAutoReplay: !1,
          isAuthored: !1,
          userInfo: {},
          systemInfo: {},
          networkType: "",
          isConfirmUse4G: !1,
          isM3u8: !1,
          livePlayUrl: "",
          livePlay264Url: "",
          livePlayId: "",
          isPCRequestFullScreen: !1,
          roomImg: "",
          roomTitle: "",
          weappName: "",
          weappImg: "",
          anchorImg: "",
          anchorName: "",
          anchorNickname: "",
          anchorAvatar: "",
          anchorOpenid: "",
          curOpenid: "",
          shareOpenid: "",
          userType: 0,
          homePage: "",
          roomStartTime: "",
          roomEndTime: "",
          diffServerTime: 0,
          userRoleType: "",
          roomHelperNickname: "",
          isRoomHelper: 0,
          rtxName: "",
          isHideTipsRoomHelper: !1,
          isUserBan: !1,
          slowInterval: "",
          funcFlag: 0,
          hideLike: !1,
          hideComment: !1,
          fixHideStore: !1,
          hideStore: !1,
          hideReplay: !1,
          hideKf: !1,
          hideShare: !1,
          anchorOpenLinkMic: !1,
          isRoomLinkMicBan: !1,
          hideNudge: !1,
          coverFuzzy: !1,
          showCommentActionSheet: !1,
          showGobackHome: !1,
          showProfileModal: !1,
          showPushComment: !1,
          showStorePanel: !1,
          showForbidUserList: !1,
          showOperationPanel: !1,
          showStorePush: !1,
          showCouponPush: !1,
          showLotteryCountTime: !1,
          showLotteryIcon: !1,
          showEndLotteryIcon: !1,
          showLotteryOper: !1,
          showLowVersionFillPhone: !1,
          fillPhoneLotteryPush: "",
          showLivePlayer: !0,
          isLivePlaying: !1,
          showSharePanel: !1,
          closePictureInPictureMode: !1,
          pictureInPictureMode: ["push", "pop"],
          isForbidReportEnter: !1,
          closePictureInPicturePop: !1,
          isInPictureInPicture: !1,
          tips: "",
          playerTips: "",
          isSubscribe: !1,
          isAttention: !1,
          showFollowV2: !1,
          isRecommendShow: !1,
          showAttentionGuide: !1,
          isTipedAttentionGuide: !1,
          addSystemTriggerBarrage: null,
          systemTriggerBarrageList: [],
          barrageMsgIdMap: {},
          globalSysMsgVersion: 0,
          roomSysMsgVersion: 0,
          pushComment: null,
          cursorIndex: 0,
          curWriteCommentContent: "",
          curCommentList: [],
          allCommentList: [],
          showEmojiInput: !1,
          msgIdMap: {},
          commentScrollIntoView: 0,
          newNotifyCount: 0,
          lotteryVersion: 0,
          isScrollCommentToBottom: !0,
          historyCommentList: [],
          recordCommentList: [],
          recordMsgIdMap: {},
          recordCacheCommentList: [],
          isUseNewCommentCount: !1,
          nudgeList: [],
          nudgeActivityList: [],
          anchorNudgeAudienceVersion: 0,
          audienceNudgeAudienceVersion: 0,
          audienceNudgeAnchorVersion: 0,
          userAvatarDropRate: 0,
          lotteryPush: {},
          lotteryId: 0,
          cacheLotteryId: 0,
          pathLotteryId: 0,
          lotteryType: "",
          lotteryErrorWording: "",
          historyLotteryLuckMen: [],
          curLotteryLuckMen: [],
          lotteryCountTime: "",
          leftLotteryTime: 0,
          lotteryParticipateNum: 0,
          isClickViewLotteryResult: !1,
          lastGetLotteryId: -1,
          isHistoryLuck: !1,
          isClickResultList: !1,
          hasGotLotteryResult: !1,
          storePanelStatus: u.a.STORE_LIST_STATUS.LOADING,
          goodsVersion: 0,
          goodsPushVersion: 0,
          couponPushVersion: 0,
          goodsList: [],
          goodsHotList: [],
          couponList: [],
          goodsPush: null,
          couponPush: null,
          isTipsCouopnRegion: !1,
          goodsVideoList: [],
          goodsLikeList: {},
          goodsStatList: [],
          isRenderStorePackup: !1,
          isPlayVideo: !0,
          isGetReplayUrl: !1,
          replayUrl: "",
          recordUrl: "",
          showReplay: !1,
          showRecord: !1,
          replayUrlList: [],
          playGoodsRecordId: 0,
          goodsRecordType: "",
          showVideoDotList: !1,
          goodsRecordFrom: 0,
          g_replayVideoCurrentTime: 0,
          replayNavigateBack: !1,
          videoWidth: 0,
          videoHeight: 0,
          videoWidthScale: 0,
          videoHeightScale: 0,
          orignIsPushStream: !1,
          isPushStream: !1,
          orientation: "portrait",
          showHorizontalBtn: !1,
          screenType: "",
          screenVerticalHeight: 0,
          showLoading: !0,
          showVideoLoading: !0,
          preWatchRecordTime: 0,
          isClearScreen: !1,
          isClearScreenWithPageOrientation: !1,
          activityInfo: {},
          jumpExtraData: {},
          isGovernment: !1,
          isBgMeeting: !1,
          bitrateLevel: 0,
          isOnShare: !1,
          forbidGroups: [],
          operateCommentInfo: {},
          deleteCommentInfo: {},
          watchPv: 0,
          commentPv: 0,
          like: 0,
          likeChangeCount: 0,
          isLowPhone: !1,
          isGrayLikeAnimationSync: !1,
          clickPv: 0,
          sharePv: 0,
          likeNew: 0,
          watchPvTotal: 0,
          commentPvTotal: 0,
          likeTotal: 0,
          clickPvTotal: 0,
          sharePvTotal: 0,
          isShowAutoReplySettingBtn: !1,
          autoReply: "",
          autoReplyType: "",
          isShowAutoReplySettingPanel: !1,
          isDisableAutoReply: !1,
          isShowBackArrow: !1,
          likeTotalWording: 0,
          watchPvTotalWording: 0,
          commentPvTotalWording: 0,
          clickPvTotalWording: 0,
          sharePvTotalWording: 0,
          showLikeIcon: !1,
          showMoreIcon: !1,
          showCommentIcon: !1,
          showSettingIcon: !1,
          showForbidIcon: !1,
          showStoreIcon: !1,
          showBacktoLiveIcon: !1,
          showRecordListIcon: !1,
          isLotteryOpen: !1,
          isHideStorePanelInEnd: !1,
          hidePlayerGuide: !1,
          commentHasExtendActive: !1,
          showLinkMicIcon: !1,
          pageContainerClass: "",
          replayPageContainerClass: "",
          playingLayerStyle: "",
          pageCommentAreaClass: "",
          pageStoreAreaClass: "",
          pageCommentAreaStyle: "",
          commentsHeight: "",
          commentsClass: "",
          forUserListHeight: 0,
          isRoomCommentClose: !1,
          isRoomCommentBan: !1,
          isGlobalCommentBan: !1,
          lotteryOperClass: "",
          isIPhoneX: !1,
          isPC: !1,
          isMac: !1,
          isWindows: !1,
          isIos: !1,
          isIpad: !1,
          isMobile: !0,
          isAndroid: !1,
          isHorizontalPC: !1,
          isDevTools: !1,
          isSupportAnimation: !1,
          keyboardHeight: 0,
          uiStoreListHeight: "",
          uiEndBlockListHeight: "",
          uiEndBlockListBottom: "",
          screenWidth: 0,
          windowHeight: 0,
          windowWidth: 0,
          statusBarHeight: 0,
          waterMarkBottom: 0,
          uiPersonOperationStoreBtnVerticalLeft: 0,
          uiPersonOperationStoreBtnHorizontalLeft: 0,
          showMicPanel: !1,
          micPanelMode: u.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE,
          linkMicType: 0,
          linkMicScore: 0,
          avatarUrl: "",
          nickname: "",
          confirmLeftTime: 0,
          subAnchors: [],
          playerMode: "live",
          minCache: 1,
          maxCache: 3,
          linkMicLastTime: 0,
          linkMicLastTimeFormat: "",
          canAccept: !1,
          audiencePushUrl: "",
          audiencePushEnableCamera: !1,
          audiencePushEnableMic: !0,
          micBan: !1,
          playUrlForPusher: "",
          micTagLeft: -1,
          micTagTop: -1,
          linkMicConfirmTimer: null,
          linkMicLastTimer: null,
          isLinkMicOpen: !1,
          isTestWebSocket: !1,
          realTimePlayUrl: "",
          showOthersMicTag: !1,
          othersNickname: "",
          othersAvatarUrl: "",
          othersOpenid: "",
          needConfirm: !0,
          linkMicRecover: !1,
          maxBarrageMsgid: 0,
          startLinkMicTimer: !1,
          hasSendRecoverRequest: !1,
          anchorCancelInvition: !1,
          pusherWidth: 120,
          pusherHeight: 160,
          commentTop: 300,
          addLinkMicBarrage: null,
          lastSwitchBitrateTime: 0,
          isCaton: !1,
          hasRecoverToInviting: !1,
          hasSkipFirstLinkMicBarrages: !1,
          hangUpLinkMicCountTime: 0,
          hangUpCountTimer: null,
          useContain: !1,
          isHideRoomBodyContainer: !1,
          profileExtRoomList: [],
          hasExtLiveRoom: !1,
          showProfileRedDot: !0,
          isNavigateToExtRoom: !1,
          scaleRate: 1,
          translateX: 0,
          translateY: 0,
          transformDuration: !1
        }, e(i, "isHideRoomBodyContainer", !1), e(i, "showNoticeToptips", !1), e(i, "noticeInfo", {}), e(i, "cacheCloseNoticeMsgIdList", []), e(i, "officeNoticeMsgIdList", []), e(i, "showLotteryComplete", !1), e(i, "showLotteryLoading", !0), e(i, "isNotLotteryTeamShare", !1), e(i, "isEnterLotteryTeamFromShare", !1), e(i, "myLotteryTeamId", 0), e(i, "myLotteryTeamMembers", []), e(i, "lotteryTeamId", 0), e(i, "lotteryTeamMembers", []), e(i, "lotteryTeamStatus", ""), e(i, "previewType", 0), e(i, "previewImgUrl", ""), e(i, "previewText", ""), e(i, "previewVideoUrl", ""), e(i, "previewVideoVid", -1), e(i, "previewAuditStatus", 0), e(i, "showAdvanceDetail", !1), e(i, "countdownTimeContent", ""), e(i, "isPreviewFullScreen", !1), e(i, "isHideLotteryOper", !1), e(i, "rankOpenid", ""), e(i, "rankAvatar", ""), e(i, "rankNickname", ""), e(i, "hasHelpRank", !0), e(i, "helpRankPanelShow", !1), e(i, "helpRulePanelShow", !1), e(i, "helpRankList", []), e(i, "rankInfo", []), e(i, "myRankInfo", {}), e(i, "myRankScore", 0), e(i, "helpRankLastFillAddressTime", ""), e(i, "helpRankCountTime", ""), e(i, "helpRankEndTime", ""), e(i, "helpRankGiftList", []), e(i, "helpRankGiftCount", 0), e(i, "helpRankAwardList", []), e(i, "helpRankIsAllowStaff", !0), e(i, "helpRankIsDelete", 0), e(i, "helpRankLastTime", ""), e(i, "helpRankLeftTime", ""), e(i, "helpRankRankId", ""), e(i, "helpRankRedeem", 1), e(i, "helpRankStatus", 0), e(i, "helpRankSuccee", !1), e(i, "helpRankInviteUV", 0), e(i, "helpRankInviterankUV", 0), e(i, "helpRankInvitedUV", 0), e(i, "helpRankAddress", null), e(i, "isFillHelpRankAddress", !1), e(i, "isFillHelpRankPhone", !1), e(i, "isAudienceRole", !0), e(i, "firstReportHelpRank", !0), i);

      function L(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), o.push.apply(o, a)
        }
        return o
      }

      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2 ? L(Object(o), !0).forEach((function(t) {
            n()(e, t, o[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : L(Object(o)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
          }))
        }
        return e
      }
      var E = function() {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            c()(this, e), this.pageThis = t.pageThis, this.data = w(w({}, m.a.deepCopy(P)), t.data), this.componentIDMap = {
              pageLivePlayer: "#page-live-player",
              pageLiveReplay: "#page-live-replay",
              pageLiveRecord: "#page-live-record",
              storePanel: "#component-store-list",
              videoControl: "#component-video-control",
              couponPush: "#component-coupon-push",
              goodsPush: "#component-goods-push",
              barrageList: "#component-barrage-list",
              personOperation: "#component-person-operation",
              pushComment: "#component-push-comment",
              profileCard: "#component-profile-card",
              profileModal: "#component-profile-modal",
              subscribeCard: "#component-subscribe-card",
              commentActionSheet: "#component-comment-action-sheet",
              comments: "#component-comments",
              nudgeList: "#component-activity-nudge",
              endBlock: "#component-end-block",
              lottery: "#component-lottery",
              lotteryOper: "#component-lottery-oper",
              topPanel: "#component-top-player",
              attentionGuide: "#component-attention-guide",
              forbidUserList: "#component-forbid-user-list",
              operatePaster: "#component-operate-paster",
              noticeToptips: "#component-notice-toptips",
              micPanelPlayer: "#component-mic-panel-player",
              micTag: "#component-mic-tag",
              settingMore: "#component-setting-more",
              micSystemMsg: "#mic-system-msg",
              advance: "#component-advance",
              advanceDetail: "#component-advance-detail",
              autoReply: "#component-auto-reply",
              autoReplyPanel: "#component-auto-reply-panel",
              helpListEntr: "#component-help-list-entr",
              helpPanel: "#component-help-panel",
              helpRulePanel: "#component-help-rule-panel"
            }, t.componentIDMap && Object.assign(this.componentIDMap, t.componentIDMap), this.liveConfig = u.a
          }
          return h()(e, [{
            key: "_getSyncDataAndUpdateStore",
            value: function(e) {
              var t = this,
                o = m.a.diffData(this.data, e);
              if (u.a.STORE_KEY_DIFF_WHITELIST.forEach((function(t) {
                  void 0 !== e[t] && (o || (o = {}), o[t] = e[t])
                })), !o) return null;
              Object.assign(this.data, o);
              var a = {};
              Object.keys(R).forEach((function(e) {
                a[e] = R[e].bind(t)()
              }));
              var i = m.a.diffData(this.data, a);
              return Object.assign(this.data, i), Object.assign(o, i), m.a.deepCopy(o)
            }
          }, {
            key: "setDataNoDiff",
            value: function(e) {
              Object.assign(this.data, e), this._syncDataToAll(e)
            }
          }, {
            key: "setData",
            value: function(e) {
              var t = this._getSyncDataAndUpdateStore(e);
              t && this._syncDataToAll(t)
            }
          }, {
            key: "storeSetData",
            value: function(e) {
              var t = this,
                o = e.curComponentName,
                a = e.opt,
                i = e.cb,
                r = this._getSyncDataAndUpdateStore(a);
              r && Object.assign(a, r), this._syncDataToSingle(o, a, i), r && ("curPage" !== o && this._syncDataToSingle("curPage", r), Object.keys(this.componentIDMap).forEach((function(e) {
                e !== o && t._syncDataToSingle(e, r)
              })))
            }
          }, {
            key: "_syncDataToSingle",
            value: function(e, t, o) {
              if ("curPage" !== e) {
                var a = this.componentIDMap[e || ""] || null;
                if (a) {
                  var i = this.pageThis.selectComponent(a);
                  if (i && i.componentObserver) try {
                    i.componentObserver(t, o)
                  } catch (t) {
                    console.error("[live-store] componentObserver logic error", {
                      componentName: e,
                      err: t
                    })
                  } else i && !i.componentObserver && console.warn("".concat(e, "组件没有声明 componentObserver 接口, 无法同步更新数据"))
                }
              } else this.pageThis.onPageObserver && this.pageThis.onPageObserver(t, o)
            }
          }, {
            key: "_syncDataToAll",
            value: function(e) {
              var t = this;
              this._syncDataToSingle("curPage", e, null), Object.keys(this.componentIDMap).forEach((function(o) {
                t._syncDataToSingle(o, e)
              }))
            }
          }, {
            key: "syncReady",
            value: function() {
              var e = this;
              Object.keys(this.componentIDMap).forEach((function(t) {
                var o = e.componentIDMap[t || ""] || null;
                if (o) {
                  var a = e.pageThis.selectComponent(o);
                  a && "function" == typeof a.initLiveManager && a.initLiveManager(!0)
                }
              }))
            }
          }, {
            key: "destroyStore",
            value: function() {
              var e = this;
              this.debugTimer && clearTimeout(this.debugTimer), Object.keys(this.data).forEach((function(t) {
                delete e.data[t]
              })), delete this.data, console.log("live-store destroyStore")
            }
          }, {
            key: "getServerTime",
            value: function() {
              return Math.round(Date.now() / 1e3) + (this.data && this.data.diffServerTime) || 0
            }
          }]), e
        }(),
        O = function(e) {
          if (e && e.pageThis && e.data) return new E({
            pageThis: e.pageThis,
            data: e.data,
            componentIDMap: e.componentIDMap
          });
          console.error("createLiveStore 需要传入pageThis && data, 请检查代码", e.pageThis)
        },
        D = a(9);

      function M(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), o.push.apply(o, a)
        }
        return o
      }

      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2 ? M(Object(o), !0).forEach((function(t) {
            n()(e, t, o[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : M(Object(o)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
          }))
        }
        return e
      }
      var A = function() {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            c()(this, e), this.userConfig = t.userConfig, this.store = t.store || {}, this.data = this.store.data || {}, this.reportFunc = t.reportFunc, this.reportActionList = [], this.reportMMDataPreTimer = 0
          }
          return h()(e, [{
            key: "reportPerformance",
            value: function(e, t, o) {
              if (!isNaN(t) && 0 != +t) {
                "pluginVersion" === o && (o = m.a.pluginVersion);
                var a = this.userConfig.MP_PERFORMANCE_ID[e];
                if (!a) return this._hideTips || (this._hideTips = {}), void(this._hideTips[e] || (console.warn("reportPerformance 没有找到", e), this._hideTips[e] = 1));
                var i = this.data,
                  r = i.roomAppid,
                  n = i.roomId;
                wx.reportPerformance && "function" == typeof wx.reportPerformance && wx.reportPerformance(a, t, o || [r + "_" + n])
              }
            }
          }, {
            key: "checkUserMMDataConfig",
            value: function() {
              return this.userConfig ? this.userConfig.getMmdataConfig ? !!this.userConfig.MMDATA_LOGID || (console.warn("config.js 没有MMDATA_LOGID"), !1) : (console.warn("config.js 没有getMmdataConfig函数"), !1) : (console.warn("config.js没有传入"), !1)
            }
          }, {
            key: "getLiveReportConfig",
            value: function(e) {
              return this.checkUserMMDataConfig() ? this.userConfig.getMmdataConfig(e, this.store) : null
            }
          }, {
            key: "getReportData",
            value: function(e) {
              return this.checkUserMMDataConfig() ? {
                data_list: [this.userConfig.getMmdataConfig(e, this.store)]
              } : null
            }
          }, {
            key: "addReportMMData",
            value: function(e) {
              if (this.checkUserMMDataConfig()) {
                var t = C(C({}, e), {}, {
                  count: e.count || 1
                });
                t._keyString = JSON.stringify(C(C({}, e), {}, {
                  count: 1
                }));
                var o = !1;
                this.reportActionList.forEach((function(e) {
                  e._keyString === t._keyString && (o = !0, e.count = (e.count || 1) + (t.count || 1))
                })), o || this.reportActionList.push(t), this.handleMmdataReportList()
              }
            }
          }, {
            key: "checkNeedReqMmdataList",
            value: function() {
              return this.reportMMDataPreTimer || (this.reportMMDataPreTimer = Date.now()), this.reportActionList.length > 10 || this.reportMMDataPreTimer + 6e4 < Date.now()
            }
          }, {
            key: "handleMmdataReportList",
            value: function(e) {
              var t = this;
              if (e || this.checkNeedReqMmdataList()) {
                var o = this.store,
                  a = this.reportActionList.map((function(e) {
                    return t.userConfig.getMmdataConfig(e, o)
                  }));
                this.reportActionList = [], this.reportMMDataPreTimer = Date.now();
                for (var i = 0; i < a.length; i += 20) {
                  var r = a.slice(i, i + 20);
                  this.reportFunc(r)
                }
              }
            }
          }, {
            key: "uploadAll",
            value: function() {
              this.handleMmdataReportList(!0), D.a.uploadAll()
            }
          }]), e
        }(),
        k = function(e) {
          if (e && e.store && e.userConfig && e.reportFunc) return new A({
            userConfig: e.userConfig,
            store: e.store,
            reportFunc: e.reportFunc
          });
          e.userConfig ? console.error("getLiveReport 需要传入reportFunc，请检查", e.reportFunc) : console.error("getLiveReport 需要传入userConfig，请检查", e.userConfig)
        };

      function b(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), o.push.apply(o, a)
        }
        return o
      }

      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2 ? b(Object(o), !0).forEach((function(t) {
            n()(e, t, o[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : b(Object(o)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
          }))
        }
        return e
      }
      var U = {},
        V = function() {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            c()(this, e), this._initLogic(t), this._initLogFunc(), this._constructor(t)
          }
          return h()(e, [{
            key: "_constructor",
            value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              this.performanceData = {}, this.performanceData.manager_start = Date.now(), this.timer = {}, this.userConfig = e.userConfig, this.pageId = e.pageThis.getPageId(), this.pageThis = e.pageThis, this.performanceData.logger_start = Date.now(), this.log = Object(y.a)({
                appid: this.userConfig.LOG_APPID,
                page: this.userConfig.LOG_PATH_NAME
              }), this.performanceData.logger_ready = Date.now(), this.log.addFilterMsg("appid" + e.data.roomAppid), this.log.addFilterMsg("roomid" + e.data.roomId), e.data && "player" === e.data.from && (e.data.isPriorPlayerPerpare = !0), this.logInfo("[liveManger] 创建", N(N({}, e.data), {}, {
                pageId: this.pageId
              })), this.performanceData.store_start = Date.now(), this.store = O({
                pageThis: e.pageThis,
                data: e.data || {},
                componentIDMap: e.componentIDMap || {},
                liveManager: this
              }), this.data = this.store.data, this.performanceData.store_ready = Date.now(), this.report = k({
                userConfig: e.userConfig,
                store: this.store,
                reportFunc: this.mmdataReport.bind(this)
              }), this.performanceData.manager_ready = Date.now()
            }
          }, {
            key: "reportPerformance",
            value: function() {
              try {
                var e;
                this.report && this.report.reportPerformance && (e = this.report).reportPerformance.apply(e, arguments)
              } catch (e) {
                console.error(e)
              }
            }
          }, {
            key: "addReportMMData",
            value: function() {
              try {
                var e;
                this.report && this.report.addReportMMData && (e = this.report).addReportMMData.apply(e, arguments)
              } catch (e) {
                console.error(e)
              }
            }
          }, {
            key: "getReportData",
            value: function() {
              var e;
              return this.report && this.report.getReportData ? (e = this.report).getReportData.apply(e, arguments) : {
                data_list: []
              }
            }
          }, {
            key: "mmdataReport",
            value: function(e) {
              var t = this;
              if (e && 0 !== e.length) {
                var o = N(N({}, this.getReqBase()), {}, {
                    content: {
                      data_list: e
                    }
                  }),
                  a = e.map((function(e) {
                    var t = e.items;
                    return t[20].value + "-" + t[12].value
                  }));
                p.a.mmdataReport(o).then((function(e) {})).catch((function(e) {
                  t.pageId, console.error("Request.mmdataReport err", {
                    pageId: t.pageId,
                    id: a,
                    err: e
                  })
                }))
              }
            }
          }, {
            key: "setData",
            value: function(e) {
              if (this.store && this.store.setData) try {
                this.store.setData(e), this.data = this.store.data
              } catch (e) {
                console.error("[setData] err", e)
              }
            }
          }, {
            key: "destroyByPageId",
            value: function(e) {
              setTimeout((function() {
                U[e] && U[e].destroyManager && (U[e].destroyManager(), U[e] = null)
              }), 3e3)
            }
          }, {
            key: "destroyManager",
            value: function() {
              this.performanceData = {}, this.userConfig = {}, this.data = {}, this.store && this.store.destroyStore && this.store.destroyStore(), this.store = {
                data: {
                  curCommentList: []
                }
              }, this.report = {}, this.log = {}
            }
          }, {
            key: "_handleGrayInfo",
            value: function(e, t) {
              if (!e || !e.list || !e.list.length) return {};
              var o = {};
              return e.list.forEach((function(e) {
                e.gray_type === u.a.GRAY_STRATEGY_TYPE.NEW_COMMENT_IMPL ? o.isUseNewCommentImpl = e.gray_result : e.gray_type === u.a.GRAY_STRATEGY_TYPE.LIKE_ANIMATION_SYNC ? o.isGrayLikeAnimationSync = e.gray_result : e.gray_type === u.a.GRAY_STRATEGY_TYPE.HTTPS_OPEN_1_2_4 ? p.a.setIsGrayHttpsOpen(!!e.gray_result) : e.gray_type === u.a.GRAY_STRATEGY_TYPE.NEW_COMMENT_COUNT_IMPL && (o.isUseNewCommentCount = e.gray_result), t && (e.gray_type === u.a.GRAY_STRATEGY_TYPE.WEB_SOCKET_PERCENT ? o.isTestWebSocket = e.gray_result : e.gray_type === u.a.GRAY_STRATEGY_TYPE.LINK_MIC_OPEN && (o.isLinkMicOpen = e.gray_result))
              })), o
            }
          }, {
            key: "reportSetDataCostTime",
            value: function(e) {
              var t = e.costTime,
                o = e.name,
                a = e.data;
              a.hasOwnProperty("commentList") ? this.reportPerformance("SETDATA_COMMENTS_COST", t, "pluginVersion") : a.hasOwnProperty("commentScrollIntoView") && this.reportPerformance("SETDATA_COMMENTS_SCROLL_COST", t, "pluginVersion"), this._innerSetDataOperList || (this._innerSetDataOperList = []), this._innerSetDataOperList.push({
                costTime: t,
                name: o,
                data: Object.keys(a),
                time: Date.now()
              }), this._innerSetDataOperList.length > 10 && (this.logInfoNoConsole("[setData耗时]", this._innerSetDataOperList), this._innerSetDataOperList = []), m.a.isOpenLocalSetDataLog && console.log("setData耗时", t, o, a), this.reportPerformance("SETDATA_TOTAL_COST", t, "pluginVersion"), t > 500 && this.reportPerformance("SETDATA_TOTAL_OVER_500", t, "pluginVersion")
            }
          }, {
            key: "getServerTime",
            value: function() {
              return this.store && this.store.getServerTime() || Math.round(Date.now() / 1e3)
            }
          }, {
            key: "_initLogic",
            value: function(e) {
              var t;
              t = _;
              var o = this,
                a = function(e) {
                  o[e] = function() {
                    return t[e].apply(o, arguments)
                  }
                };
              for (var i in t) a(i)
            }
          }, {
            key: "_initLogFunc",
            value: function() {
              var e = this,
                t = this;
              ["setAnalyze", "info", "infoNoConsole", "warn", "warnNoConsole", "error", "errorNoConsole"].forEach((function(o) {
                var a = "log" + o[0].toUpperCase() + o.slice(1);
                t[a] = function() {
                  var t;
                  e.log && e.log[o] && (t = e.log)[o].apply(t, arguments)
                }
              }))
            }
          }, {
            key: "getLastCommentInfo",
            value: function() {
              for (var e = this.data.allCommentList, t = 0, o = 0, a = e.length - 1; a >= 0 && !t; a--) {
                var i = e[a] || {},
                  r = i.official || isNaN(i.msgId) ? 0 : i.msgId; + r > 1597129930 && (r = 0), r && (t = r), o = i.timestamp ? i.timestamp : 0
              }
              return {
                lastCommentId: t,
                lastCommentTime: o
              }
            }
          }]), e
        }();
      o.a = function(e) {
        var t = "";
        return e && e.pageId ? t = function(e) {
          if ("version_low" !== e) return e;
          var t = 0;
          return Object.keys(U).forEach((function(e) {
            if (isNaN(e)) return null;
            t = Math.max(t, e)
          })), t
        }(e.pageId) : e && e.pageThis && (e.pageThis && e.pageThis.getPageId && "function" == typeof e.pageThis.getPageId ? t = e.pageThis.getPageId() : (t = Date.now(), e.pageThis.getPageId = function() {
          return t
        })), t ? U[t] ? U[t] : e.data && e.data.roomAppid && e.data.roomId ? (U[t] = new V(e), U[t]) : (e.pageThis && console.error("getLiveManager 必须直播间对应roomAppid、roomId", e), null) : (e.pageThis || "version_low" === e.pageId || console.error("getLiveManager 必须传入page this对象", e), null)
      }
    },
    5: function(e, t, o) {
      var a = o(8),
        i = o.n(a),
        r = o(36),
        n = o(2),
        s = o(0),
        c = o(6),
        l = o(14),
        h = o(1),
        p = Object(l.a)({
          appid: "wx2b03c6e691cd7370",
          page: "sdk/error"
        });
      t.a = Behavior({
        definitionFilter: function(e) {
          e.methods || (e.methods = {}), e.methods._getStoreObservers = function() {
            return e.liveStore && e.liveStore.observers || null
          }
        },
        lifetimes: {
          created: function() {
            this.storeData = {}
          },
          attached: function() {
            this._initFunc(), this.componentMarkId = (this.data && this.data.componentName || "unkown") + "_" + Date.now(), this._innerIsAlive = 1, this.initLiveManager ? this.initLiveManager(!1) : (p.error("[attached 没有initLiveManager] this", this), p.error("[attached 没有initLiveManager] 详情", this.data.componentName, wx.getSystemInfoSync())), this._getStoreObservers && (this._storeObservers = this._getStoreObservers())
          },
          detached: function() {
            this._innerIsAlive = 0, clearTimeout(this._innerSetDataTimer)
          }
        },
        methods: {
          initLiveManager: function(e) {
            if (!this.liveManager || !this.liveManager.pageId) {
              var t = "version_low";
              try {
                this.getPageId && "function" == typeof this.getPageId && (t = this.getPageId())
              } catch (e) {
                p.error("initLiveManager getPageId error", this.data.componentName)
              }
              if (this._innerIsAlive = 1, this.liveManager = Object(r.a)({
                  pageId: t
                }), this.liveManager) {
                this.logInfo("comm-behavior initLiveManager", {
                  pageId: t,
                  componentName: this.data.componentName
                }), this.storeData = this.liveManager && this.liveManager.store.data || {}, this.onBeforeDataReady && "function" == typeof this.onBeforeDataReady && this.onBeforeDataReady();
                var o = this.onDataReady && "function" == typeof this.onDataReady ? this.onDataReady.bind(this) : null;
                this.componentObserver(this.liveManager.store.data, o), this.onStoreDataReady && "function" == typeof this.onStoreDataReady && this.onStoreDataReady()
              } else e && p.error("initLiveManager error", this.data.componentName)
            }
          },
          _initFunc: function() {
            var e = this,
              t = this;
            ["getReqBase", "getReportData", "addReportMMData", "reportPerformance", "logInfo", "logInfoNoConsole", "logWarn", "logSetAnalyze", "warn", "warnNoConsole", "logWarnNoConsole", "error", "logError", "errorNoConsole"].forEach((function(o) {
              t[o] = function() {
                var t;
                if (e.liveManager && e.liveManager[o]) return (t = e.liveManager)[o].apply(t, arguments)
              }
            }))
          },
          getServerTime: function() {
            return this.liveManager && this.liveManager.store ? this.liveManager.store.getServerTime() : Math.round(Date.now() / 1e3)
          },
          componentObserver: function(e, t) {
            var o = this;
            if (e) {
              var a = this.data,
                r = {},
                n = [],
                s = [];
              Object.keys(e).forEach((function(t) {
                t && "string" == typeof t && 0 !== t.length && ("roomStaticInfo" !== t && "roomDynamicInfo" !== t || null !== e[t]) && (a.hasOwnProperty(t) && (r[t] = e[t]), o[t + "Observer"] && "function" == typeof o[t + "Observer"] && n.push({
                  key: t,
                  newVal: e[t],
                  oldVal: a.hasOwnProperty(t) ? a[t] : null
                }), o._storeObservers && o._storeObservers[t] && "function" == typeof o._storeObservers[t] && s.push({
                  key: t,
                  newVal: e[t],
                  oldVal: a.hasOwnProperty(t) ? a[t] : null
                }))
              })), this._innerMergeSetData(r, t), n.forEach((function(e) {
                try {
                  if ("object" !== i()(e.newVal) && e.newVal === e.oldVal) return;
                  o[e.key + "Observer"](e.newVal, e.oldVal)
                } catch (t) {
                  console.error("!!![componentObserver - oldFuncList - 逻辑异常]", t), p.error("[componentObserver - oldFuncList - 逻辑异常]", {
                    err: t,
                    funcName: e.key + "Observer",
                    componentName: o.data.componentName
                  }), o.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
                }
              })), s.forEach((function(e) {
                try {
                  if ("object" !== i()(e.newVal) && e.newVal === e.oldVal) return;
                  o._storeObservers[e.key].bind(o)(e.newVal, e.oldVal)
                } catch (t) {
                  console.error("[componentObserver - newFuncList - 逻辑异常]", t, {
                    cmpName: o.data.componentName
                  }), p.error("[componentObserver - newFuncList - 逻辑异常]", {
                    err: t,
                    data: e,
                    componentName: o.data.componentName
                  }), o.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
                }
              }))
            }
          },
          _getDiffData: function(e) {
            var t = this;
            if (!e || "object" !== i()(e)) return null;
            if (!this.liveManager || !this.liveManager.store) return null;
            var o = {};
            return Object.keys(e).forEach((function(a) {
              "object" !== i()(e[a]) ? s.a.STORE_KEY_DIFF_WHITELIST.indexOf(a) >= 0 ? o[a] = e[a] : (t.storeData.hasOwnProperty(a) && t.storeData[a] !== e[a] && (o[a] = e[a]), t.data.hasOwnProperty(a) && t.data[a] !== e[a] && (o[a] = e[a])) : o[a] = e[a]
            })), 0 === Object.keys(o).length ? null : o
          },
          storeSetData: function(e, t) {
            if (!this.liveManager || !this.liveManager.store || !this.liveManager.store.storeSetData) return this.logInfo("[storeSetData] store 不存在", this.data.componentName), void this._innerMergeSetData(e, t);
            var o = this._getDiffData(e);
            o ? this.liveManager.store.storeSetData({
              curComponentName: this.data.componentName,
              opt: o,
              cb: t
            }) : "function" == typeof t && t()
          },
          storeSetDataNoSync: function(e) {
            var t = this.liveManager && this.liveManager.store && this.liveManager.store.data || null;
            t && Object.keys(e).forEach((function(o) {
              t.hasOwnProperty(o) && (t[o] = n.a.deepCopy(e[o]))
            }))
          },
          componentSetData: function(e, t) {
            this.storeSetData(e, t)
          },
          _innerMergeSetData: function(e) {
            var t = this,
              o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (this._innerIsAlive && e && "object" === i()(e) && 0 !== Object.keys(e).length) {
              if (this._innerMergeOpt || (this._innerMergeOpt = {}), this._innerMergeCnt ? this._innerMergeCnt += 1 : this._innerMergeCnt = 1, this._innerMergeTime || (this._innerMergeTime = Date.now()), Object.assign(this._innerMergeOpt, e), o || Date.now() > this._innerMergeTime + 14) {
                clearTimeout(this._innerSetDataTimer);
                var a = this._innerMergeOpt;
                return this._innerMergeOpt = {}, this._innerMergeCnt = 0, this._innerMergeTime = null, void this._innerSetData(a, o)
              }
              clearTimeout(this._innerSetDataTimer), this._innerSetDataTimer = setTimeout((function() {
                var e = t._innerMergeOpt;
                t._innerMergeOpt = {}, t._innerMergeCnt = 0, t._innerMergeTime = null, t._innerSetData(e)
              }), 10)
            }
          },
          _innerCheckDataNeedSet: function(e, t, o) {
            return !!t.hasOwnProperty(e) && (s.a.STORE_KEY_DIFF_WHITELIST.indexOf(e) >= 0 || "commentScrollIntoView" === e || ("goodsList" === e || "goodsHotList" === e || "curCommentList" === e ? 0 !== t[e].length || 0 !== o[e].length : "object" === i()(t[e]) && "object" === i()(o[e]) ? JSON.stringify(t[e]) !== JSON.stringify(o[e]) : t[e] !== o[e]))
          },
          _innerSetData: function(e, t) {
            var o = this;
            if (this._innerIsAlive && e && "object" === i()(e)) {
              var a = this.data,
                r = Object.keys(a),
                n = Object.keys(e);
              if (0 !== r.length && 0 !== n.length) {
                var s = r.length < n.length ? r : n,
                  c = {};
                if (s.forEach((function(t) {
                    o._innerCheckDataNeedSet(t, a, e) && (c[t] = e[t])
                  })), 0 !== Object.keys(c).length) {
                  var l = Date.now();
                  this.setData(c, (function() {
                    var e = Date.now() - l;
                    o.liveManager && (o.liveManager.reportSetDataCostTime({
                      costTime: e,
                      name: o.data.componentName,
                      data: c
                    }), c.livePlayUrl && (console.warn("[preloadNextPageView setUrl end]"), o.liveManager.performanceData.seturl_end = Date.now())), t && "function" == typeof t && t()
                  }))
                } else "function" == typeof t && t()
              } else "function" == typeof t && t()
            }
          },
          onGetUserInfo: function(e) {
            var t = this,
              o = this;
            h.a.getUserProfile({
              desc: "获取头像信息"
            }).then((function(a) {
              o.storeSetData({
                isAuthored: !0,
                userInfo: {
                  avatar: n.a.avatarToSmall(userInfo.avatarUrl),
                  nickname: userInfo.nickName,
                  openid: o.storeData.curOpenid
                }
              });
              var i = e.currentTarget.dataset.after;
              t[i] && "function" == typeof t[i] && t[i]()
            })).catch((function(e) {
              "not support" !== e && h.a.tipsSimple("请授权")
            }))
          },
          checkUserNameVerify: function() {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            (1 != this.storeData.isNameVerify || t) && c.a.request({
              url: "/wxaliveapp/check_realname?",
              data: {},
              method: "POST"
            }).then((function(t) {
              e.logInfo("verify succ ", t), t.name && t.id_card ? e.storeSetData({
                isNameVerify: 1
              }) : e.storeSetData({
                isNameVerify: 0
              })
            })).catch((function(t) {
              e.logInfo("verify fail", t)
            }))
          },
          getShareArgs: function() {
            return this.liveManager.getShareArgs()
          }
        }
      })
    }
  }
};
