var e = require("../@babel/runtime/helpers/defineProperty");
module.exports = require("../_commons/0.js")([require("../_commons/1.js"), require("../_commons/3.js"), require("../_commons/6.js"), require("../_commons/2.js"), require("../_commons/4.js"), require("../_commons/5.js"), require("../_commons/7.js"), require("../_commons/8.js"), require("../_commons/9.js"), require("../_commons/10.js"), require("../_commons/14.js"), require("../_commons/19.js"), require("../_commons/26.js"), {
  ids: [42],
  modules: {
    45: function(e, t, n) {
      e.exports = n(588)
    },
    588: function(t, n, i) {
      var a;
      i.r(n);
      var o = {
          wifi: "1",
          "2g": "2",
          "3g": "3",
          "4g": "4",
          "5g": "5",
          other: "6"
        },
        r = {
          ios: "1",
          android: "2",
          windows: "3",
          mac: "4",
          other: "-1"
        };

      function s(e) {
        var t = e && e.liveConfig || {},
          n = e && e.data || {},
          i = n.systemInfo || {},
          a = e && e.getServerTime() || Date.now(),
          o = wx.getEnterOptionsSync && wx.getEnterOptionsSync().query.gdt_vid || "",
          r = wx.getEnterOptionsSync && wx.getEnterOptionsSync().query.weixinadinfo || "",
          s = 0;
        return r && (s = r.split(".")[0]), {
          roomId: n.roomId,
          roomAppid: n.roomAppid,
          livePlayId: n.livePlayId || "",
          liveState: n.curLiveStatusCode || "",
          networkType: n.networkType || "",
          scene: n.type || "",
          verticalScreen: "horizontal" === n.screenType ? 2 : 1,
          sessionId: n.type === t.SCENE_TYPE.RECOMMEND || n.type === t.SCENE_TYPE.ACTIVITY ? n.session_id : "",
          activityId: n.type === t.SCENE_TYPE.RECOMMEND || n.type === t.SCENE_TYPE.ACTIVITY ? n.activity_id : "",
          refreshNum: n.type === t.SCENE_TYPE.RECOMMEND || n.type === t.SCENE_TYPE.ACTIVITY ? n.refresh_num : "",
          aid: s,
          gdtVid: o,
          liveType: 1,
          count: 1,
          timestamp2: a,
          rtxName: n.rtxName || "",
          platform: i.platform,
          model: i.model,
          version: i.version,
          brand: i.brand,
          language: i.language,
          pluginVersion: n.pluginVersion,
          pluginScene: n.pluginScene,
          rankOpenid: n.rankOpenid
        }
      }

      function c(e) {
        return {
          logid: l,
          items: [{
            type: "string",
            value: ""
          }, {
            type: "int32",
            value: "0"
          }, {
            type: "int32",
            value: "".concat(o[e.networkType] || 0)
          }, {
            type: "int32",
            value: "0"
          }, {
            type: "int32",
            value: "".concat(e.roomId || 0)
          }, {
            type: "int32",
            value: "".concat(e.liveType || 1)
          }, {
            type: "int32",
            value: "".concat(e.liveState || 102)
          }, {
            type: "int32",
            value: "0"
          }, {
            type: "int32",
            value: "0"
          }, {
            type: "int32",
            value: "0"
          }, {
            type: "int32",
            value: "0"
          }, {
            type: "int32",
            value: "0"
          }, {
            type: "int32",
            value: "".concat(e.subActionType || "")
          }, {
            type: "int32",
            value: "".concat(e.reserves || "")
          }, {
            type: "int32",
            value: "".concat(e.reserves1 || "0")
          }, {
            type: "int32",
            value: "".concat(e.reserves2 || "0")
          }, {
            type: "string",
            value: "".concat(e.model || "")
          }, {
            type: "int32",
            value: "".concat(e.count || 1)
          }, {
            type: "int32",
            value: "0"
          }, {
            type: "int32",
            value: "".concat(e.timestamp2 || "")
          }, {
            type: "int32",
            value: "".concat(e.actionType || "")
          }, {
            type: "int32",
            value: "0"
          }, {
            type: "string",
            value: "".concat(e.goodsId || "")
          }, {
            type: "string",
            value: "".concat(e.roomAppid)
          }, {
            type: "string",
            value: "".concat(e.livePlayId || "")
          }, {
            type: "int32",
            value: "".concat(r[e.platform] || 0)
          }, {
            type: "string",
            value: "".concat(e.version || "")
          }, {
            type: "string",
            value: "".concat(e.brand || "")
          }, {
            type: "string",
            value: "".concat(e.language || "")
          }, {
            type: "string",
            value: "".concat(e.pluginVersion || "")
          }, {
            type: "string",
            value: "".concat(e.livePlayStatus || "")
          }, {
            type: "string",
            value: "wx2b03c6e691cd7370"
          }, {
            type: "int32",
            value: "".concat(e.scene || 0)
          }, {
            type: "string",
            value: ""
          }, {
            type: "int32",
            value: "".concat(e.lotteryId || "")
          }, {
            type: "int32",
            value: "".concat(e.pluginScene || 0)
          }, {
            type: "int32",
            value: "".concat(e.videoCaton || "")
          }, {
            type: "int32",
            value: "".concat(e.videoFPS || "")
          }, {
            type: "int32",
            value: "".concat(e.netJitter || "")
          }, {
            type: "int32",
            value: "".concat(e.netSpeed || "")
          }, {
            type: "int32",
            value: "".concat(e.lottieFPS || "")
          }, {
            type: "int32",
            value: "0"
          }, {
            type: "int32",
            value: "0"
          }, {
            type: "int32",
            value: "0"
          }, {
            type: "int32",
            value: "".concat(e.verticalScreen || 1)
          }, {
            type: "int32",
            value: "".concat(e.isAssitant || 1)
          }, {
            type: "string",
            value: "".concat(e.commentContent || 1)
          }, {
            type: "int32",
            value: "".concat(e.blacklistUin || "0")
          }, {
            type: "int32",
            value: "".concat(e.couponId || "")
          }, {
            type: "string",
            value: "".concat(e.goodsName || "")
          }, {
            type: "int32",
            value: "".concat(e.pictureInPicture || 1)
          }, {
            type: "string",
            value: "".concat(e.rtxName || "")
          }, {
            type: "string",
            value: "".concat(e.cookies || "")
          }, {
            type: "string",
            value: "".concat(e.pasterLink || "")
          }, {
            type: "string",
            value: "".concat(e.reserves3 || "")
          }, {
            type: "string",
            value: "".concat(e.reserves4 || "")
          }, {
            type: "string",
            value: "".concat(e.reserves5 || "")
          }, {
            type: "string",
            value: "".concat(e.sessionId || "")
          }, {
            type: "int32",
            value: "".concat(e.activityId || 0)
          }, {
            type: "int32",
            value: "".concat(e.refreshNum || 0)
          }, {
            type: "int32",
            value: "".concat(e.shareChannel || 0)
          }, {
            type: "string",
            value: "".concat(e.reserves6 || 0)
          }, {
            type: "string",
            value: "".concat(e.instructionTime || "")
          }, {
            type: "string",
            value: "".concat(e.reserves7 || "")
          }, {
            type: "int32",
            value: "0"
          }, {
            type: "int32",
            value: "".concat(e.watchTime || 0)
          }, {
            type: "int64",
            value: "".concat(e.aid || 0)
          }, {
            type: "string",
            value: "".concat(e.gdtVid || "")
          }, {
            type: "int32",
            value: "".concat(e.lotteryParticipateType || "")
          }, {
            type: "string",
            value: "".concat(e.rankOpenid || "")
          }]
        }
      }
      var l = "18391",
        u = {
          LOG_APPID: "wx2b03c6e691cd7370",
          LOG_PATH_NAME: "sdk/live-player-plugin",
          MP_PERFORMANCE_ID: {
            VIDEO_BITRATE: 101005,
            AUDIO_BITRATE: 101006,
            VIDEO_FPS: 101007,
            NET_SPEED: 101008,
            NET_JITTER: 101009,
            HAS_NET_JITTER: 101011,
            VIDEO_CATON: 101012,
            SLOW_SPEED: 101013,
            SETDATA_TIME: 102010,
            LOTTIE_LIKE_ANIMATION_FPS: 102090,
            LIVE_PLAYER_INIT_SUCC: 102017,
            LIVE_PLAYER_INIT_ERROR: 102018,
            LIVE_PLAYER_DECODE_ERROR: 102019,
            LIVE_PLAYER_H265_DECODE_NOT_SUPPORT: 102070,
            LIVE_PLAYER_ERROR: 102020,
            STATICINFO_COST: 101021,
            DYNAMICINFO_COST: 101022,
            SETDATA_TWO: 102025,
            SETDATA_ONE: 102026,
            SIMPLESTATICINFO_COST: 101028,
            PAGE_ONREADY: 102071,
            SETDATA_TOTAL_COST: 102083,
            SETDATA_TOTAL_OVER_500: 102084,
            SETDATA_COMMENTS_COST: 102085,
            SETDATA_COMMENTS_SCROLL_COST: 102086,
            REQUEST_SUCC_COST: 101048,
            REQUEST_SUCC_QUEUE_CNT: 101034,
            REQUEST_FAIL_COST: 101035,
            REQUEST_FAIL_QUEUE_CNT: 101036,
            REQUEST_SUCC_FIRST_COST: 101049,
            REQUEST_FAIL_FIRST_COST: 101050,
            REQUEST_FIRST_NOT_SIMPLE: 101051,
            CUSTOM_PARAMS_LEN: 102037,
            COST_BEFORE_GET_URL: 102073,
            COST_GET_URL: 101074,
            COST_SET_URL: 102075,
            COST_PLAYER_CREAT: 102076,
            COST_PLAYER_LINK: 101077,
            COST_PLAYER_RENDER: 102078,
            COST_DEL_IMG: 102079,
            COST_PLAY_TOTAL: 102080,
            ANIMATION_JSON_REQUEST_SUCC: 101056,
            ANIMATION_JSON_REQUEST_FAIL: 101057,
            HIT_BOTTOM_TACTICS: 102081,
            LOGIC_ERROR: 102082,
            GET_POSTER_URL_COST: 101087,
            GET_SHARE_IMG_URL: 101088
          },
          MMDATA_LOGID: l,
          getMmdataConfig: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                actionType: "",
                subActionType: "",
                reserves: "",
                reserves1: "",
                reserves2: "",
                reserves3: "",
                reserves4: "",
                reserves5: "",
                reserves6: "",
                reserves7: "",
                goodsId: "",
                goodsName: "",
                pluginAppid: "",
                livePlayStatus: "",
                blacklistUin: "",
                lotteryId: "",
                couponId: "",
                videoCaton: "",
                videoFPS: "",
                netJitter: "",
                netSpeed: "",
                lottieFPS: "",
                pictureInPicture: "",
                isAssitant: "2",
                cookies: "",
                pasterLink: "",
                shareChannel: "",
                instructionTime: "",
                watchTime: "",
                lotteryParticipateType: ""
              },
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = s(t);
            return c(e = Object.assign(n, e))
          }
        },
        p = i(12),
        v = i(1),
        _ = i(2),
        T = i(0),
        d = i(5),
        y = i(36),
        S = v.a.getCurAppid() || "wx40f8626ddf43d362";
      Component({
        behaviors: [d.a],
        options: {
          styleIsolation: "page-apply-shared"
        },
        properties: {
          room_id: Number,
          type: Number,
          share_openid: String,
          custom_params: String,
          close_picture_in_picture_mode: Number,
          close_picture_in_picture_pop: Number,
          open_share_ticket: Number,
          preview: Number,
          session_id: String,
          activity_id: Number,
          refresh_num: Number,
          record_url: String,
          play_goods_record_id: Number,
          replay_navigate_back: Number,
          lottery_id: Number,
          lottery_team_id: Number,
          rank_openid: String,
          rank_nickname: String,
          rank_avatar: String
        },
        data: {
          componentName: "livePlayerPlugin",
          live: (a = {
            systemInfo: {},
            curLiveStatusCode: "",
            isPlayVideo: !1,
            isPriorPlayerPerpare: !0,
            allLiveStatusCode: {},
            isHideLiveRoom: !1,
            isBgMeeting: !1,
            roomErrorWording: "",
            showReplay: !1,
            showRecord: !1,
            showPushComment: !1,
            showStorePanel: !1,
            showVideoDotList: !1,
            screenType: "",
            isPushStream: !1,
            showVideoLoading: !0,
            couponPush: null,
            goodsPush: null,
            showAttentionGuide: !1,
            showForbidUserList: !1,
            showMoreIcon: !1,
            showOperationPanel: !1,
            showProfileModal: !1,
            showLotteryIcon: !1,
            showLotteryOper: !1,
            showLowVersionFillPhone: !1,
            hideComment: !1,
            hideNudge: !1,
            hideStore: !1,
            isClearScreen: !1,
            isClearScreenWithPageOrientation: !1,
            windowHeight: 0,
            windowWidth: 0,
            waterMarkBottom: 0,
            pageContainerClass: "",
            pageCommentAreaClass: "",
            pageStoreAreaClass: "",
            pageCommentAreaStyle: "",
            isHideRoomBodyContainer: !1,
            isShareFriendsScene: !1,
            activityInfo: {},
            isGovernment: !1,
            micPanelMode: T.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE,
            linkMicType: 0,
            micTagTop: -1,
            micTagLeft: -1,
            showSharePanel: !1,
            showNoticeToptips: !1,
            showMicPanel: !1,
            showOthersMicTag: !1,
            confirmLeftTime: 60
          }, e(a, "linkMicType", T.a.LINK_MIC_TYPE.VIDEO), e(a, "commentTop", 300), e(a, "touchStartX", 0), e(a, "touchStartY", 0), e(a, "showAdvanceDetail", !1), e(a, "previewType", 0), e(a, "previewAuditStatus", 1), e(a, "isPreviewFullScreen", !1), e(a, "helpRankStatus", 0), a)
        },
        methods: {
          onLoad: function(e) {
            var t = wx.getEnterOptionsSync && wx.getEnterOptionsSync() || {},
              n = t.path && t.path.includes("/pages/live-player-plugin") ? t.scene || -1 : 0,
              i = this.data.room_id;
            this.liveManager = Object(y.a)({
              pageThis: this,
              data: {
                roomId: i,
                roomAppid: S,
                isWxaMode: !1,
                from: "player",
                isAutoReplay: !0,
                urlPathPrefix: "plugin-private://wx2b03c6e691cd7370/",
                pluginScene: n
              },
              componentIDMap: null,
              userConfig: u
            }), this.liveManager.onLoad(e)
          },
          onShow: function(e) {
            this.liveManager.onShow(), this.uiHackSafeBottom()
          },
          onUnload: function() {
            p.a.close(), this.liveManager.onUnload()
          },
          onHide: function() {
            p.a.close(), this.liveManager.onHide()
          },
          onReady: function() {
            this.liveManager.onReady()
          },
          onPageObserver: function(e) {
            _.a.onPageObserver(e, this)
          },
          uiHackSafeBottom: function() {
            var e = wx.getSystemInfoSync();
            e.screenHeight - e.safeArea.bottom == 0 ? this.setData({
              uiIsHasSafeBottom: !1
            }) : this.setData({
              uiIsHasSafeBottom: !0
            })
          },
          pageSetData: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            _.a.pageSetData(e, t || null, this)
          },
          onShareAppMessage: function(e) {
            var t = this;
            if (_.a.compareVersion(this.data.live.systemInfo.SDKVersion, "2.12.0") > -1) return new Promise((function(n) {
              t.liveManager.onShareAppMessage(e).then((function(e) {
                var t = e.title,
                  i = e.params,
                  a = e.imageUrl;
                n({
                  title: t,
                  path: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?" + i,
                  imageUrl: a
                })
              }))
            }));
            var n = this.liveManager.onShareAppMessage(e);
            return {
              title: n.title,
              path: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?" + n.params,
              imageUrl: n.imageUrl
            }
          },
          onShareTimeline: function(e) {
            return this.liveManager.onShareTimeline(e)
          },
          mvTouchEnd: function(e) {
            if (this.liveManager.data.micPanelMode == T.a.MIC_PLAYER_MODE.CONNECTING && this.liveManager.data.linkMicType == T.a.LINK_MIC_TYPE.VIDEO && e.changedTouches && e.changedTouches[0]) {
              var t = e.changedTouches[0],
                n = t.clientX,
                i = t.clientY;
              if (i == this.data.live.touchStartY && n == this.data.live.touchStartX) return;
              n -= 80, i -= 60, this.liveManager.setData({
                micTagTop: Math.round(i) > 0 ? Math.round(i) : 0,
                micTagLeft: Math.round(n) > 0 ? Math.round(n) : 0
              })
            }
          },
          mvTouchStart: function(e) {
            if (e.changedTouches && e.changedTouches[0]) {
              var t = e.changedTouches[0],
                n = t.clientX,
                i = t.clientY;
              this.data.live.touchStartX = n, this.data.live.touchStartY = i
            }
          }
        }
      })
    }
  },
  entries: [
    [45, 0, 1, 3, 6, 2, 4, 5, 7, 8, 9, 10, 14, 19, 26]
  ]
}]);
