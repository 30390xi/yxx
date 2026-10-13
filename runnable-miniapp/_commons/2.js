require("../@babel/runtime/helpers/Arrayincludes");
module.exports = {
  ids: [2],
  modules: [function(e, t, n) {
    var o = n(7),
      r = n.n(o);

    function i(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, o)
      }
      return n
    }

    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(Object(n), !0).forEach((function(t) {
          r()(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    t.a = a(a({}, {
      TEST_SPEED_REPORT_ID: {
        VIDEO_BITRATE: 101005,
        AUDIO_BITRATE: 101006,
        VIDEO_FPS: 101007,
        NET_SPEED: 101008,
        NET_JITTER: 101009,
        HAS_NET_JITTER: 101011,
        VIDEO_CATON: 101012,
        SLOW_SPEED: 101013,
        SETDATA_TIME: 102010,
        LOTTIE_LIKE_ANIMATION_FPS: 102014,
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
        SETDATA_TOTAL_COST: 102052,
        SETDATA_TOTAL_OVER_500: 102053,
        SETDATA_COMMENTS_COST: 102054,
        SETDATA_COMMENTS_SCROLL_COST: 102055,
        REQUEST_SUCC_COST: 101048,
        REQUEST_SUCC_QUEUE_CNT: 101034,
        REQUEST_FAIL_COST: 101035,
        REQUEST_FAIL_QUEUE_CNT: 101036,
        REQUEST_SUCC_FIRST_COST: 101049,
        REQUEST_FAIL_FIRST_COST: 101050,
        REQUEST_FIRST_NOT_SIMPLE: 102051,
        CUSTOM_PARAMS_LEN: 102037,
        COST_BEFORE_GET_URL: 102040,
        COST_GET_URL: 101041,
        COST_SET_URL_TO_WXML: 102042,
        COST_PLAYER_CREAT: 102066,
        COST_PLAYER_LINK: 101059,
        COST_PLAYER_RENDER: 101044,
        COST_PLAY_TOTAL: 102067,
        PUSHSHOW_GETINFO_OLD: 101068,
        PUSHSHOW_SETDATA: 102069,
        ANIMATION_JSON_REQUEST_SUCC: 101056,
        ANIMATION_JSON_REQUEST_FAIL: 101057,
        COST_ONREADY: 102071
      },
      USER_ROLE_BIT: {
        SUPER_ADMIN: 0,
        ADMIN: 1,
        ANCHOR: 2,
        OPERATER: 3,
        SUB_ANCHOR: 63
      },
      ROOM_AUTH_TYPE_BIT: {
        SHARE: 0,
        START_LIVE: 1,
        EDIT: 2,
        DELETE: 3
      },
      PUSHER_USER_TYPE: {
        OTHERS: 0,
        SUB_ANCHOR: 1,
        ANCHOR: 2
      },
      FUNC_FLAG: {
        LIKE: 1,
        STORE: 2,
        REPLAY: 4,
        COMMENT: 8,
        KF: 512,
        SHARE: 1024,
        COVER_FUZZY: 2048,
        LINKMIC: 8192,
        OPERATION_BAN_LINKMIC: 32768,
        NUDGE: 16384,
        LOTTERY: 65536
      },
      LIVE_ROOM_SUB_FUNC_SWITCH: {
        LIKE: 1,
        STORE: 2,
        LOTTERY: 4,
        COMMENT: 8,
        COUPON: 16,
        ASSISTANT: 32,
        BARRAGE: 64,
        SYSTEM_MESS: 256,
        STAT_INFO: 512,
        LIVEURL: 1024,
        GOVENMENT: 2048,
        NEW_COMMENT: 4096,
        UPDATESVR: 8192,
        FRIENDS: 16384
      },
      MMOPEN_APP_TYPE: {
        BIZ: 16,
        WEAPP: 65536
      },
      WXA_APP_TYPE: {
        NORMAL: 0,
        PLUGIN: 1,
        WXSTORE: 2,
        MERCHANT: 3,
        GAME: 4,
        GIFT: 5,
        SUB_BUSINESS: 6,
        ORIGINAL: 7,
        MARKET: 8,
        WXLIVE: 9,
        WXPRODUCT: 10,
        WXLEAGUE: 11
      }
    }), {}, {
      PLUGIN_APPID: "wx2b03c6e691cd7370",
      ANCHOR_APPID: "wxcbbd86b156ae4441",
      LIVE_ROOM_FLAG: {
        ROOM_FLAG_NORMAL: 1,
        ROOM_FLAG_BAN_COMMENT: 2
      },
      LIVE_FORBID_FLAG: {
        LIVE_FORBID_FLAG_SINGLE_COMMENT: 1,
        LIVE_FORBID_FLAG_ALL_COMMENT: 2,
        LIVE_FORBID_FLAG_LINKMIC: 4
      },
      BAN_COMMENT_WORDING: {
        USER_BANED: "你已被禁言",
        COMMENT_CLOSE: "主播已关闭评论功能",
        ROOM_BANED: "因涉嫌违规，直播间评论能力已关闭",
        GLOBAL_BANED: "系统维护中，直播间评论能力已关闭"
      },
      ROOM_TYPE: {
        BG_MEETING: 1
      },
      LIVE_STATUS: {
        LIVE: 101,
        NOT_START: 102,
        END: 103,
        FORBID: 104,
        PAUSE: 105,
        ERROR: 106,
        EXPIRE: 107,
        REPLAY: 108
      },
      LIVE_STATUS_ZH: {
        101: "直播中",
        102: "未开始",
        103: "已结束",
        104: "禁播",
        105: "暂停中",
        106: "异常暂停",
        107: "过期"
      },
      LIVE_STATUS_WORDING: {
        103: " ",
        104: "因涉嫌违规，直播将禁播20分钟",
        105: "直播暂停，请稍候...",
        106: "主播暂时离开，请稍候..."
      },
      PLAY_URL_TYPE: {
        RTMP: 1,
        HTTP_FLV: 2,
        HTTPS_FLV: 3,
        HTTP_HLS: 4,
        HTTPS_HLS: 5,
        HTTP_M3U8: 6,
        RTMP_H265: 7,
        HTTP_FLV_H265: 8,
        HTTPS_FLV_H265: 9,
        HTTP_HLS_H265: 10,
        HTTPS_HLS_H265: 11,
        REAL_TIME_RTMP: 12
      },
      PLAY_SHARPNESS_SWITCH: {
        VIDEO_CATON_TIME_LIMIT: 10,
        VIDEO_CATON_COUNT_LIMIT: 3,
        VIDEO_PLAY_TIME: 30
      },
      BITRATE_LEVEL: 3,
      ROOM_ERROR_CODE: {
        PEOPLE_LIMIT: 11009,
        DELETE: 11006,
        NO_PERMISSION: 11888,
        BIZ_INVALID_SCOPE: -12001,
        ROOMID: 11001,
        END_LOTTERY: 22007,
        EXPIRE: -9999901
      },
      ROOM_ERROR_WORDING: {
        11001: "传入的房间id有误",
        11009: "直播间已满，请稍候再来",
        11006: "该直播已删除",
        11888: "暂无观看权限",
        "-12001": "该小程序涉嫌违规",
        DEFAULT: "网络异常，请重新进入房间",
        EXPIRE: "该直播已过期"
      },
      COUNT_DOWN_TIME: 1e3,
      LONG_POLLING_TIME: 5e3,
      REQUEST_DEFAULT_TIMEOUT: 1e4,
      LIKE_GATHER_REQUEST_TIME: 2e3,
      REPLAY_LIMIT: 4999,
      COMMENT: {
        SHOW_MSG_LIMIT_NUMBER: 160,
        NEW_SHOW_MSG_LIMIT_NUMBER: 80,
        SHOW_NEWMSG_NUMBER: 99,
        FRESH_TIME: 900,
        NEW_FRESH_TIME: 600,
        SHOW_SECOND_NUMBER: 20,
        PUSH_COMMENT_HIT_FREQ_LIMIT: 20
      },
      COMMENT_ERROR_CODE: {
        ERR_COMMENT_PUSH: 13e3,
        ERR_COMMENT_HIT_KEYWORD_INTERCEPT: 13001,
        ERR_COMMENT_HIT_FREQ_LIMIT: 13002,
        ERR_COMMENT_IS_BAN: 13004,
        ERR_COMMENT_HIT_KEYWORD_BUSINESS_INTERCEPT: 13005,
        ERR_COMMENT_HIT_COMMENT_DISCARD: 13006
      },
      STORE_LIST_STATUS: {
        LOADING: "loading",
        NORMAL: "normal",
        ERROR: "error"
      },
      GOODS_PRICE_TYPE: {
        PRICE_TYPE_FIXED_PRICE: 1,
        PRICE_TYPE_RANGE: 2,
        PRICE_TYPE_DISCOUNT: 3
      },
      GOODS_FLAG: {
        GOODS_FLAG_NORMAL: 1,
        GOODS_FLAG_DELETE_BY_USER: 2,
        GOODS_FLAG_DELETE_BY_AUDIT: 3
      },
      GOODS_TYPE: {
        FROM_WXA_SHOP: 3,
        FROM_SHOP: 4
      },
      COUPON_FLAG: {
        COUPON_FLAG_NORMAL: 1,
        COUPON_FLAG_DELETE_BY_USER: 2,
        COUPON_FLAG_DELETE_BY_AUDIT: 3
      },
      LOTTERY_STATUS: {
        LOTTERY_NOT_PUSH: 1,
        LOTTERY_PUSHED: 2,
        LOTTERY_RUNNING: 3,
        LOTTERY_FINISHED: 4,
        LOTTERY_ERROR: 5
      },
      LOTTERY_PARTIPATE_TYPE: {
        LOTTERY_COMMENT: 0,
        LOTTERY_LIKE: 1
      },
      LOTTERY_OBTAIN_TYPE: {
        LOTTERY_OBTAIN_ADDRESS: 0,
        LOTTERY_OBTAIN: 1
      },
      LOTTERY_TEAM: {
        ERR_GET_TEAM_NO_EXIST: 32002,
        ERR_GET_TEAM_FAIL: 33001,
        ERR_JOIN_TEAM_FAIL: 33002,
        ERR_CHANGE_TEAM_FAIL: 33003,
        ERR_DO_NOT_JOIN_TEAM: 33004,
        ERR_JOIN_LOTTERY_FAIL: 33005
      },
      LOTTERY_TEAM_POLLING_TIME: 2e3,
      SCENE_TYPE: {
        SHARE: 1,
        SUBSCRIBE: 2,
        PREVIEW: 3,
        SEARCH: 4,
        RECOMMEND: 5,
        FOLLOW: 6,
        WECHAT_PRO: 7,
        ADDRESS: 8,
        QRCODE: 9,
        CARD: 10,
        AD: 11,
        ACTIVITY: 12,
        FRIENDS: 13,
        SHOP: 14,
        SUBSCRIBE_PERM: 15,
        PENDANT: 16,
        CUSTOM: 17,
        HELP_RANK: 18
      },
      MESSAGE_TYPE: {
        MESSAGE_TYPE_COMMENT_TEXT: 1,
        MESSAGE_TYPE_GOODS_PUSH: 2,
        MESSAGE_TYPE_SYSTEM: 3,
        MESSAGE_TYPE_VIEW_GOODS: 4,
        MESSAGE_TYPE_ENTER_ROOM: 5,
        MESSAGE_TYPE_SHARE_ROOM: 6,
        MESSAGE_TYPE_SUBSCRIBE_LIVE: 7,
        MESSAGE_TYPE_UPDATE_GOODS: 8,
        MESSAGE_TYPE_ADD_GOODS: 9,
        MESSAGE_TYPE_DELETE_GOODS: 10,
        MESSAGE_TYPE_TOP_GOODS: 11,
        MESSAGE_TYPE_REPORT_COMMENT: 12,
        MESSAGE_TYPE_REPORT_LIVE_ROOM: 13,
        MESSAGE_TYPE_WARNING: 14,
        MESSAGE_TYPE_ANCHOR: 15,
        MESSAGE_TYPE_AUDIENCE: 16,
        MESSAGE_TYPE_LOTTERY: 17,
        MESSAGE_TYPE_START_LOTTERY: 18,
        MESSAGE_TYPE_PUSH_LOTTERY: 19,
        MESSAGE_TYPE_COUPON: 20,
        MESSAGE_TYPE_PUSH_COUPON: 21,
        MESSAGE_TYPE_COMMENT_BAN_IN_ANCHOR: 27
      },
      COUPON_STATUS: {
        STATUS_NEW: 1,
        STATUS_ON_SALE: 2,
        STATUS_PUSH: 3,
        STATUS_OFF_SALE: 4,
        STATUS_OFF_SALE_AUTO: 5,
        STATUS_DELETE: 6
      },
      COUPON_TYPE: {
        COUPON_NORMAL: 0,
        COUPON_LOCATION: 1
      },
      COUPON_OBTAIN_ERROR: {
        COUPON_RETRY_OBTAIN: 30001,
        COUPON_NOT_OBTAIN: 30006,
        COUPON_NOT_LOCATION: 30007
      },
      COUPON_OBTAIN_ERROR_HIT_FREQ_LIMIT: 30,
      OPERATEWXDATA_CODE: {
        SYSTEM_ERROR: -1,
        TIMEOUT: -2,
        NO_CONCENT: -3
      },
      USER_ROLE: {
        SUPER_ADMIN: 0,
        ADMIN: 1,
        ANCHOR: 2,
        OPERATER: 3
      },
      USER_TYPE: {
        ANCHOR: 1,
        ROOM_HELPER: 2,
        NORMAL_USER: 3,
        SUPERMAN: 4
      },
      ACTIVITY_JUMP_TYPE: {
        DEFAULT: 0,
        H5: 1,
        MINIPROGRAM: 2
      },
      BARRAGE_ANIMATION_INTERVAL: 2e3,
      BARRAGE_LIMIT_SAVE_CNT: 10,
      FUNC_FLAG: {
        LIKE: 1,
        STORE: 2,
        REPLAY: 4,
        COMMENT: 8,
        KF: 512,
        SHARE: 1024,
        COVER_FUZZY: 2048,
        LINKMIC: 8192,
        OPERATION_BAN_LINKMIC: 32768,
        NUDGE: 16384,
        LOTTERY: 65536
      },
      INTERNAL_FUNC_FLAG: {
        RTX_NAME: 1,
        IS_MIN_WINDOW: 2,
        WATCH_UV: 4,
        STYLE: 8
      },
      NUDGE: {
        SELF_NUDGE_SELF: 0,
        ANCHOR_NUDGE_AUDIENCE: 1,
        AUDIENCE_NUDGE_AUDIENCE: 2,
        AUDIENCE_NUDGE_ANCHOR: 3
      },
      DEFAULT_AVATAR: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLG44I6sZyAQQQgDWiblG9lYXSkJ0gELicmEpBYWDP1kU3kM0c4I322RDVJiaNe5TesXW9hJfvqt5WIQ/46",
      COMMENT_MSG_KEY: {
        STATIC_SYSTEM_MSG_KEY: "static_system_msg",
        INNER_SYSTEM_MSG_KEY: "inner_system_msg"
      },
      SHARE_FRIENDS_SCENE: 1154,
      STORE_KEY_DIFF_WHITELIST: ["commentScrollIntoView", "curWriteCommentContent", "likeChangeCount"],
      MIC_PLAYER_MODE: {
        CHOOSE_LINK_MIC_TYPE: 1,
        APPLYING: 2,
        CONNECTING: 3,
        INVITING: 4
      },
      LINK_MIC_TYPE: {
        AUDIO: 2,
        VIDEO: 1
      },
      C2C_MSG_TYPE: {
        LINKMIC: 1
      },
      C2C_MSG_SUB_TYPE: {
        ANCHOR_INVITION: 1,
        VIEWER_ACCEPT: 2,
        VIEWER_REJECT: 3,
        ANCHOR_HANGUP: 4,
        VIEWER_HANGUP: 5,
        ANCHOR_CANCEL: 6,
        ANCHOR_BANMIC: 7,
        ANCHOR_OPENMIC: 8,
        ANCHOR_VOICE_INVITION: 9,
        VIEWER_VOICE_ACCEPT: 10,
        ANCHOR_VOICE_RECOVER: 51,
        ANCHOR_RECOVER: 52,
        VIEWER_VOICE_RECOVER: 53,
        VIEWER_RECOVER: 54,
        VIEWER_RECOVER_REQUEST: 55,
        VIEWER_CAN_RECOVER: 56,
        VIEWER_CAN_NOT_RECOVER: 57,
        VIEWER_GET_SUBANCHORS_REQ: 58,
        SUBANCHORS_RESP: 59,
        IS_CATON_REQ: 60,
        IS_CATON_RESP: 61,
        CATON: 62,
        ANCHOR_CLOSE_LINK_MIC: 63,
        IS_VERIFIED_REQ: 64,
        IS_VERIFIED_RESP: 65,
        RECOVER_TO_INVITING_REQ: 66,
        CAN_RECOVER_TO_INVTING: 67,
        CAN_NOT_RECOVER_TO_INVTING: 68,
        VIEWER_LEAVE: 69
      },
      ANCHOR_INVITION_TIMEROUT: 60,
      REPORT_LINK_MIC_SCORE_INTERVAL: 12,
      LINK_MIC_STATE: {
        LINKMIC_UNOPEN: 0,
        LINKMIC_INVITE: 1,
        LINKMIC_VOICE_INVITE: 2,
        LINKMIC_OPEN: 3,
        LINKMIC_VOICE_OPEN: 4
      },
      LINK_MIC_BARRAGE_TYPE: {
        ANCHOR_OPEN_LINK_MIC: 0,
        ANCHOR_INVITE: 1,
        ANCHOR_CLOSE_LINK_MIC: 2,
        VIEW_REQUEST_LINK_MIC: 3
      },
      LINK_MIC_ROLE_TYPE: {
        ANCHOR: 1,
        SUB_ANCHORS: 2,
        VIEWERS: 3
      },
      CATON_RESET_TIME: 30,
      GRAY_STRATEGY_TYPE: {
        NEW_COMMENT_IMPL: 1,
        WEB_SOCKET_PERCENT: 2,
        LINK_MIC_OPEN: 3,
        LIKE_ANIMATION_SYNC: 4,
        HTTPS_OPEN_1_2_4: 5,
        NEW_COMMENT_COUNT_IMPL: 6
      },
      PENDANT_TYPE: {
        ALL: 0,
        LIVE: 1,
        NOT_START: 2,
        RECORD: 3,
        REPLAY: 4
      },
      PENDANT_CODE: {
        NO_ROOM_FOUND: 190003,
        VENDOR_GOODS_KEY_FAILED: 190005
      },
      MAX_FILL_LOTTERY_ADDRESS_TIME: 86400,
      NOTICE_TYPE: {
        SYS_NOTICE: 1,
        COMMON_NOTICE: 2
      },
      ADVANCE_TYPE: {
        RICH_TEXT: 1,
        VIDEO: 2,
        TEXT: 3
      }
    })
  }, function(e, t, n) {
    var o = n(7),
      r = n.n(o),
      i = n(0),
      a = n(2);

    function s(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, o)
      }
      return n
    }

    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? s(Object(n), !0).forEach((function(t) {
          r()(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    var u = null,
      _ = null;

    function E() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return e && _ ? _ : _ = wx.getSystemInfoSync && wx.getSystemInfoSync() || {}
    }
    var f = null,
      l = {},
      T = function(e) {
        return e || (e = Date.now()), (!l.timestamp || l.timestamp + 6e4 < e) && wx.getNetworkType && wx.getNetworkType({
          success: function(t) {
            l = {
              networkType: t.networkType || null,
              timestamp: e
            }
          }
        }), l.networkType || ""
      };

    function O(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
      wx.showToast({
        title: e,
        icon: "none",
        duration: t
      })
    }

    function S(e) {
      var t = e.title,
        n = e.content,
        o = void 0 === n ? "" : n,
        r = e.onConfirm,
        i = void 0 === r ? null : r;
      ! function() {
        try {
          wx.hideToast && wx.hideToast({})
        } catch (e) {}
      }(), I({
        title: t,
        content: o,
        confirmText: "我知道了",
        showCancel: !1,
        onConfirm: i
      })
    }

    function I(e) {
      wx.showModal({
        title: e.title || "",
        content: e.content || "",
        confirmText: e.confirmText || "确认",
        confirmColor: "#576B95",
        showCancel: !e.hasOwnProperty("showCancel") || e.showCancel,
        cancelText: e.cancelText || "取消",
        success: function(t) {
          t.confirm ? e.onConfirm && e.onConfirm() : t.cancel && e.onCancel && e.onCancel()
        },
        fail: function(t) {
          e.onCancel && e.onCancel()
        }
      })
    }

    function g(e, t) {
      e = e.split("."), t = t.split(".");
      for (var n = Math.max(e.length, t.length); e.length < n;) e.push("0");
      for (; t.length < n;) t.push("0");
      for (var o = 0; o < n; o++) {
        var r = parseInt(e[o]),
          i = parseInt(t[o]);
        if (r > i) return 1;
        if (r < i) return -1
      }
      return 0
    }

    function p() {
      return new Promise((function(e, t) {
        R("openSetting", "无法打开设置页") || t({
          errMsg: "not support"
        }), wx.openSetting({
          success: function(t) {
            e(t)
          },
          fail: function(e) {
            t(e)
          }
        })
      }))
    }

    function N() {
      return new Promise((function(e, t) {
        R("openSettingForPlugin", "无法打开设置页") || t({
          errMsg: "not support"
        }), wx.openSettingForPlugin({
          success: function(t) {
            e(t)
          },
          fail: function(e) {
            t(e)
          }
        })
      }))
    }

    function R(e, t) {
      return !(!wx[e] || "function" != typeof wx[e]) || (wx.updateWeChatApp && "function" == typeof wx.updateWeChatApp ? wx.updateWeChatApp() : S({
        title: "建议升级",
        content: "由于微信版本过低, " + t
      }), !1)
    }
    T(), t.a = {
      getSystemInfoSync: E,
      getCurAppid: function() {
        if (u) return u;
        if (!wx.getAccountInfoSync || "function" != typeof wx.getAccountInfoSync) return "";
        var e = wx.getAccountInfoSync();
        return e && e.miniProgram && e.miniProgram.appId ? u = e.miniProgram.appId : ""
      },
      getLaunchOptionsSync: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e && f ? f : f = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync() || {}
      },
      getNetworkType: T,
      setCookies: function(e) {
        return new Promise((function(t, n) {
          wx.setCookies && "function" == typeof wx.setCookies ? wx.setCookies({
            cookies: [{
              key: "no_expires_".concat(e.key),
              value: e.value,
              busid: "mmbiz_report_busid_live"
            }, {
              key: "expires_72_".concat(e.key),
              value: e.value,
              expires: Math.floor((Date.now() + 2592e5) / 1e3),
              busid: "mmbiz_report_busid_live_expires"
            }],
            success: function() {
              t()
            },
            fail: function() {
              n()
            }
          }) : n()
        }))
      },
      tipsSimple: O,
      tipsGotIt: S,
      tipsRetry: function(e, t) {
        t || console.warn("注意，tipsRetry没有声明onConfirm函数"), I({
          title: e,
          confirmText: "重试",
          cancelText: "取消",
          onConfirm: t
        })
      },
      tipsConfirm: I,
      navigateBack: function() {
        wx.navigateBack({
          delta: 1
        })
      },
      checkWeChatVersion: function() {
        setTimeout((function() {
          var e = E(!0),
            t = e.platform,
            n = e.version,
            o = void 0 === n ? "" : n;
          "wxwork" !== e.environment && (("android" === t || "ios" === t) && g(o, "7.0.7") < 0 || "windows" === t && g(o, "2.7.1") < 0) && (wx.updateWeChatApp && "function" == typeof wx.updateWeChatApp ? wx.updateWeChatApp() : S({
            title: "建议升级",
            content: "由于微信版本过低, 只能观看直播"
          }))
        }), 1e3)
      },
      pingDomain: function(e) {
        return new Promise((function(t, n) {
          var o = e.split("/");
          o = o[2] ? "".concat(o[0], "//").concat(o[2]) : "", wx.request({
            url: o,
            success: function(e) {
              t(e)
            },
            fail: function(e) {
              n(e)
            }
          })
        }))
      },
      getNativeUserInfo: function() {
        return new Promise((function(e, t) {
          R("getNativeUserInfo", "无法打开授权弹框") || t({
            errMsg: "not support"
          }), wx.getNativeUserInfo({
            success: function(n) {
              if (n && n.respData && n.respData.data) {
                var o = JSON.parse(n.respData.data);
                o.nickName ? (o.avatarUrl || (o.avatarUrl = i.a.DEFAULT_AVATAR), e(o)) : t(n)
              } else t(n)
            },
            fail: function(e) {
              t(e)
            }
          })
        }))
      },
      getUserProfile: function(e) {
        return new Promise((function(t, n) {
          R("getUserProfile", "无法打开授权弹框") || n({
            errMsg: "not support"
          }), wx.getUserProfile({
            desc: e.desc,
            success: function(e) {
              var n = e && e.userInfo || {};
              n.avatarUrl || (n.avatarUrl = i.a.DEFAULT_AVATAR), t(n)
            },
            fail: function(e) {
              n(e)
            }
          })
        }))
      },
      setPageOrientation: function(e) {
        return new Promise((function(t, n) {
          R("setPageOrientation", "无法横屏") || n({
            errMsg: "not support"
          }), wx.setPageOrientation({
            orientation: e,
            success: function(e) {
              t(e)
            },
            fail: function(e) {
              n(e)
            }
          })
        }))
      },
      chooseAddress: function() {
        return new Promise((function(e, t) {
          R("chooseAddress", "无法填写地址") || t({
            errMsg: "not support"
          }), wx.chooseAddress({
            success: function(t) {
              e({
                receive_name: t && t.userName || "",
                address: t && "".concat(t.provinceName, " ").concat(t.cityName, " ").concat(t.countyName) || "",
                district: t && t.detailInfo || "",
                postcode: t && t.postalCode || "",
                phone: t && t.telNumber || ""
              })
            },
            fail: function(e) {
              var n = E(!0).platform || "",
                o = e && e.errMsg || "";
              o.includes("cancel") || ("ios" === n || "mac" === n) && o.includes("auth deny") || ("android" === n || "windows" === n) && o.includes("auth denied") ? t("cancel") : o.includes("not support") ? t("not support") : (I({
                content: "需要允许小程序获取你的通信地址",
                confirmText: "前往设置",
                onConfirm: function() {
                  p()
                }
              }), t(e))
            }
          })
        }))
      },
      chooseAddressForPlugin: function() {
        return new Promise((function(e, t) {
          R("chooseAddressForPlugin", "无法填写地址") || t({
            errMsg: "not support"
          }), wx.chooseAddressForPlugin({
            success: function(t) {
              e({
                receive_name: t && t.userName || "",
                address: t && "".concat(t.provinceName, " ").concat(t.cityName, " ").concat(t.countyName) || "",
                district: t && t.detailInfo || "",
                postcode: t && t.postalCode || "",
                phone: t && t.telNumber || ""
              })
            },
            fail: function(e) {
              var n = E(!0).platform || "",
                o = e && e.errMsg || "";
              o.includes("cancel") || ("ios" === n || "mac" === n) && o.includes("auth deny") || ("android" === n || "windows" === n) && o.includes("auth denied") ? t("cancel") : o.includes("not support") ? t("not support") : (I({
                content: "需要允许小程序获取你的通信地址",
                confirmText: "前往设置",
                onConfirm: function() {
                  N()
                }
              }), t(e))
            }
          })
        }))
      },
      openSettingForPlugin: N,
      openSetting: p,
      reLaunch: function(e) {
        wx.reLaunch && "function" == typeof wx.reLaunch && wx.reLaunch({
          url: e
        })
      },
      reportPerformance: function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        wx.reportPerformance && "function" == typeof wx.reportPerformance && wx.reportPerformance(e, t, n)
      },
      offUserCaptureScreen: function() {
        if (wx.offUserCaptureScreen && "function" == typeof wx.offUserCaptureScreen) try {
          wx.offUserCaptureScreen()
        } catch (e) {}
      },
      offNetworkStatusChange: function() {
        if (wx.offNetworkStatusChange && "function" == typeof wx.offNetworkStatusChange) try {
          wx.offNetworkStatusChange()
        } catch (e) {}
      },
      setClipboardData: function(e) {
        return new Promise((function(t, n) {
          R("setClipboardData", "无法复制") || n("not support"), wx.setClipboardData({
            data: e,
            success: function(e) {
              t(e)
            },
            fail: function(e) {
              O("复制失败", 1500), n(e)
            }
          })
        }))
      },
      getLocation: function(e) {
        return new Promise((function(t, n) {
          R("getLocation", "无法获取地址位置") || n("not support"), wx.getLocation({
            args: e,
            success: function(e) {
              t(e)
            },
            fail: function(e) {
              n(e)
            }
          })
        }))
      },
      enterContact: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise((function(t, n) {
          R("enterContactForPlugin", "无法联系客服") || n("not support");
          var o = a.a.getCustomerServiceCallback();
          wx.enterContactForPlugin({
            appId: e.appId,
            showMessageCard: e.showMessageCard,
            sendMessageTitle: e.sendMessageTitle,
            sendMessageImg: e.sendMessageImg,
            sendMessagePath: e.sendMessagePath,
            success: function(e) {
              t(e), o && "function" == typeof o && o(e);
              var n = e.path,
                r = e.query;
              if (!(n.indexOf("wx2b03c6e691cd7370/pages/live-player-plugin") > -1) && n) {
                var i = "?";
                for (var a in r) i += "".concat(a, "=").concat(r[a], "&");
                i.length > 1 && (i = i.substr(0, i.length - 1), wx.navigateTo({
                  url: "".concat(n).concat(i)
                }))
              }
            },
            fail: function(e) {
              n(e), o && "function" == typeof o && o(e)
            }
          })
        }))
      },
      openUrl: function(e) {
        return new Promise((function(t, n) {
          wx.openUrl && "function" == typeof wx.openUrl ? wx.openUrl({
            url: e.url,
            success: function(e) {
              t(e)
            },
            fail: function(e) {
              n(e)
            }
          }) : (wx.showModal({
            title: "建议升级",
            content: "由于微信版本过低，无法打开H5页面",
            showCancel: !1,
            confirmText: "我知道了"
          }), n({
            errMsg: "not support"
          }))
        }))
      },
      showActionSheet: function(e) {
        return new Promise((function(t, n) {
          R("showActionSheet", "无法显示操作菜单") || n("not support"), wx.showActionSheet(c(c({}, e), {}, {
            success: function(e) {
              t(e)
            },
            fail: function(e) {
              O("无法显示操作菜单", 1500), n(e)
            }
          }))
        }))
      }
    }
  }, function(e, t, n) {
    var o = n(7),
      r = n.n(o),
      i = n(8),
      a = n.n(i),
      s = n(0),
      c = n(1),
      u = n(11),
      _ = n(14);

    function E(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter((function(t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, o)
      }
      return n
    }

    function f(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? E(Object(n), !0).forEach((function(t) {
          r()(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }
    console.warn("pluginVersion", "1.3.2");
    var l, T = c.a.getSystemInfoSync(!0),
      O = c.a.getCurAppid(),
      S = null,
      I = null;

    function g(e) {
      return (e = e.toString())[1] ? e : "0".concat(e)
    }

    function p(e) {
      if (isNaN(e)) return "-";
      if (e <= 0) return "0";
      var t = e,
        n = parseInt(t / 86400);
      t -= 86400 * n;
      var o = parseInt(t / 3600);
      t -= 3600 * o;
      var r = parseInt(t / 60);
      return t -= 60 * r, n > 99 ? "99+天" : n > 0 && n <= 99 ? o ? "".concat(n, "天").concat(o, "小时") : "".concat(n, "天") : o > 0 ? r ? "".concat(o, "时").concat(r, "分") : "".concat(o, "时") : r > 0 ? t ? "".concat(r, "分").concat(t, "秒") : "".concat(r, "分") : "".concat(t, "秒")
    }

    function N(e, t) {
      e = e.split("."), t = t.split(".");
      for (var n = Math.max(e.length, t.length); e.length < n;) e.push("0");
      for (; t.length < n;) t.push("0");
      for (var o = 0; o < n; o++) {
        var r = parseInt(e[o]),
          i = parseInt(t[o]);
        if (r > i) return 1;
        if (r < i) return -1
      }
      return 0
    }

    function R(e) {
      for (var t = new Array; e > 0;) {
        var n = e % 2;
        e = Math.floor(e / 2), t.push(n)
      }
      return t.reverse(), t
    }

    function A(e) {
      for (var t = 0, n = 0, o = e.length - 1; o >= 0; --o) 1 == e[o] && (t += Math.pow(2, n)), ++n;
      return t
    }

    function C(e, t, n) {
      if (e && "object" === a()(e) && 0 !== Object.keys(e).length) {
        if (n.inner_curDataOpt || (n.inner_curDataOpt = {}), n.inner_cnt ? n.inner_cnt += 1 : n.inner_cnt = 1, e.hasOwnProperty("isPriorPlayerPerpare") && n.liveManager.logInfo("[page] 更新isPriorPlayerPerpare", {
            val: e.isPriorPlayerPerpare,
            time: Date.now()
          }), Object.assign(n.inner_curDataOpt, e), t) {
          clearTimeout(n.inner_setDataTimer);
          var o = n.inner_curDataOpt;
          return n.inner_curDataOpt = {}, n.inner_cnt = 0, void L(o, t, n)
        }
        clearTimeout(n.inner_setDataTimer), n.inner_setDataTimer = setTimeout((function() {
          var e = n.inner_curDataOpt;
          n.inner_curDataOpt = {}, n.inner_cnt = 0, L(e, null, n)
        }), 10)
      }
    }

    function L(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
      if (e && "object" === a()(e)) {
        var o = Date.now(),
          r = f(f({}, n.data.live), e);
        n.setData({
          live: r
        }, (function() {
          var r = Date.now() - o;
          n.liveManager.reportSetDataCostTime({
            costTime: r,
            name: "page",
            data: e
          }), t && "function" == typeof t && t()
        }))
      } else t && "function" == typeof t && t()
    }
    l = O === s.a.ANCHOR_APPID ? Object(_.a)({
      appid: s.a.ANCHOR_APPID,
      page: "/pusher/log"
    }) : Object(_.a)({
      appid: s.a.PLUGIN_APPID,
      page: "/player/log"
    });
    var h = "latest";
    t.a = f(f({
      from: "pusher",
      systemInfo: T,
      pluginVersion: "1.3.2",
      wxaVersion: "3029",
      isOpenLocalSetDataLog: 0,
      isOpenLocalReqLog: 0,
      formatTime: function(e, t) {
        var n = new Date(e),
          o = new Date(t),
          r = n.getMonth() + 1,
          i = n.getDate(),
          a = n.getHours(),
          s = n.getMinutes(),
          c = o.getHours(),
          u = o.getMinutes();
        return "".concat(r, "月").concat(i, "日  ").concat([a, s].map(g).join(":"), "-").concat([c, u].map(g).join(":"))
      },
      formatDate: function(e) {
        var t = new Date(1e3 * e);
        return t.getFullYear() + "年" + g(t.getMonth() + 1) + "月" + g(t.getDate()) + "日 " + g(t.getHours()) + ":" + g(t.getMinutes())
      },
      formatDuration: function(e) {
        var t = Math.floor(e / 3600);
        e -= 3600 * t;
        var n = Math.floor(e / 60);
        return [t, n, e = (e - 60 * n).toFixed(0)].map(g).join(":")
      },
      formatDurationV2: function(e) {
        var t = Math.floor(e / 3600);
        e -= 3600 * t;
        var n = Math.floor(e / 60);
        return e = (e - 60 * n).toFixed(0), (t > 0 ? [t, n, e] : [n, e]).map(g).join(":")
      },
      deepCopy: function e(t) {
        if ("object" !== a()(t)) return t;
        if (null === t) return null;
        var n = t instanceof Array ? [] : {};
        for (var o in t) a()(t[o]), n[o] = e(t[o]);
        return n
      },
      getFormatNumer: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return null === (e = String(e)) ? "0" : isNaN(e) ? "-" : ((isNaN(t) || null === t) && (t = 1), e > 9999e8 ? "9990亿+" : e > 99999499 ? Number((e / 1e8).toFixed(t)) + "亿" : e >= 1e4 ? Number((e / 1e4).toFixed(t)) + "万" : e)
      },
      likeFormatNumber: function(e) {
        return isNaN(e) ? e : 1e3 < e && e < 1e4 ? Number(e / 1e3).toFixed(1) + "k" : e >= 1e4 ? Number(e / 1e4).toFixed(1) + "w" : e
      },
      diffData: function(e, t) {
        if (!e || !t) return null;
        var n = Object.keys(e),
          o = Object.keys(t);
        if (0 === n.length || 0 === o.length) return null;
        var r = n;
        o.length < n.length && (r = o);
        var i = {};
        return r.forEach((function(n) {
          !e.hasOwnProperty(n) || "object" !== a()(t[n]) && e[n] === t[n] || (i[n] = t[n])
        })), 0 === Object.keys(i).length ? null : i
      },
      diffList: function(e, t) {
        if (!e || !t || e.length !== t.length) return !0;
        try {
          for (var n = 0, o = t.length; n < o; n++)
            if (JSON.stringify(t[n]) !== JSON.stringify(e[n])) return !0;
          return !1
        } catch (e) {
          return console.log("diffList logError", e), !0
        }
      },
      formatCountTime: function(e) {
        if (isNaN(e)) return "-";
        if (e <= 0) return "0";
        var t = e,
          n = parseInt(t / 86400);
        t -= 86400 * n;
        var o = parseInt(t / 3600);
        t -= 3600 * o;
        var r = parseInt(t / 60);
        return t -= 60 * r, n > 0 ? o ? n + "天" + o + "小时" : n + "天" : o > 0 ? r ? o + "小时" + r + "分钟" : o + "小时" : r > 0 ? r + "分钟" : t + "秒"
      },
      formatSeckillCountTime: function(e) {
        return p(e)
      },
      formatHelpRankCountTime: function(e) {
        return p(e)
      },
      callObserver: function(e, t) {
        var n = {},
          o = [],
          r = t.data;
        return Object.keys(e).forEach((function(i) {
          if (i && "string" == typeof i && 0 !== i.length) {
            var a = i + "Observer";
            t[a] && "function" == typeof t[a] ? o.push({
              name: a,
              opt: e[i]
            }) : r.hasOwnProperty(i) && r[i] !== e[i] && (n[i] = e[i])
          }
        })), {
          syncData: 0 === Object.keys(n).length ? null : n,
          funcList: o
        }
      },
      encryptNickname: function(e) {
        if (!e) return "";
        if ("[object Object]" === String(e)) return "";
        var t = String(e),
          n = "***";
        return 1 === (t = t.replace(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g, "")).length ? n = t : 2 === t.length ? n = "".concat(t[0], "*") : 3 === t.length ? n = "".concat(t[0], "*").concat(t[2]) : t.length >= 4 && (n = "".concat(t[0], "**").concat(t[t.length - 1])), n
      },
      compareVersion: N,
      avatarToSmall: function(e, t) {
        if (e) {
          0 !== t && 46 !== t && 64 !== t && 96 !== t && 132 !== t && (t < 46 || null == t ? t = 46 : t > 46 && t < 64 ? t = 64 : t > 64 && t < 96 ? t = 96 : t > 96 && t < 132 ? t = 132 : t > 132 && (t = 0));
          var n = "";
          if (0 === e.indexOf("https://wx.qlogo.cn/mmopen/vi_32/") ? n = "https://wx.qlogo.cn/mmopen/vi_32/" : 0 === e.indexOf("https://thirdwx.qlogo.cn/mmopen/vi_32/") && (n = "https://thirdwx.qlogo.cn/mmopen/vi_32/"), !n) return e;
          var o = e.slice(n.length).split("/");
          return +o[o.length - 1] == +t ? e : (o[o.length - 1] = +t, n + o.join("/"))
        }
      },
      toHump: function(e) {
        return e.replace(/\_(\w)/g, (function(e, t) {
          return t.toUpperCase()
        }))
      },
      isSupportAnimation: function() {
        return "wxwork" === T.environment || "devtools" === T.platform || N(T.version, "7.0.7") >= 0
      },
      base64Decode: function(e) {
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          n = e.length,
          o = 0;
        "=" == e.charAt(n - 1) && ("=" == e.charAt(n - 2) ? (o = 4, e = e.substring(0, n - 2)) : (o = 2, e = e.substring(0, n - 1)));
        for (var r = [], i = 0, a = e.length; i < a; ++i)
          for (var s = e.charAt(i), c = 0, u = t.length; c < u; ++c)
            if (s == t[c]) {
              var _ = R(c),
                E = _.length;
              if (6 - E > 0)
                for (var f = 6 - E; f > 0; --f) _.unshift(0);
              r = r.concat(_);
              break
            } o > 0 && (r = r.slice(0, r.length - o));
        for (var l = [], T = [], O = 0, S = r.length; O < S;)
          if (0 == r[O]) l = l.concat(A(r.slice(O, O + 8))), O += 8;
          else {
            for (var I = 0; O < S && 1 == r[O];) ++I, ++O;
            for (T = T.concat(r.slice(O + 1, O + 8 - I)), O += 8 - I; I > 1;) T = T.concat(r.slice(O + 2, O + 8)), O += 8, --I;
            l = l.concat(A(T)), T = []
          } new RegExp("^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$");
        var g = "";
        return l.forEach((function(e) {
          g += String.fromCharCode(e)
        })), g
      },
      onPageObserver: function(e, t) {
        if (e) {
          var n = t.data.live,
            o = {},
            r = [];
          Object.keys(e).forEach((function(i) {
            if (i && "string" == typeof i && 0 !== i.length) {
              var a = i + "Observer";
              t[a] && "function" == typeof t[a] && r.push({
                name: a,
                newValue: e[i],
                oldValue: n[i] || null
              }), n.hasOwnProperty(i) && (o[i] = e[i])
            }
          })), r.forEach((function(e) {
            try {
              if ("object" !== a()(e.newVal) && e.newVal === e.oldVal) return;
              t[e.name](e.newVal, e.oldVal)
            } catch (n) {
              t.liveManager && t.liveManager.logError("[onPageObserver] logic error", n, e), t.liveManager && t.liveManager.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
            }
          })), C(o, null, t)
        }
      },
      pageSetData: C,
      debounce: function(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300,
          o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return function(r) {
          clearTimeout(t);
          var i = arguments;
          t = setTimeout((function() {
            e.apply(o, i)
          }), n)
        }
      },
      formatDurationAndHideHourIfHourZero: function(e) {
        var t = Math.floor(e / 3600);
        e -= 3600 * t;
        var n = Math.floor(e / 60);
        return e -= 60 * n, t > 0 ? [t, n, e].map(g).join(":") : [n, e].map(g).join(":")
      },
      getDelayPlayUrl: function() {
        return S
      },
      setDelayPlayUrl: function(e) {
        S = e
      },
      throttle: function(e, t) {
        null != t && null != t || (t = 300);
        var n = null;
        return function() {
          var o = +new Date;
          (o - n > t || !n) && (e.apply(this, arguments), n = o)
        }
      },
      lastFillAddressTime: function(e) {
        var t = new Date(1e3 * (e + s.a.MAX_FILL_LOTTERY_ADDRESS_TIME));
        return t.getMonth() + 1 + "月" + t.getDate() + "号" + g(t.getHours()) + ":" + g(t.getMinutes())
      },
      isSupportVideoDot: function() {
        return !("latest" != h && !isNaN(h)) || h >= 1001008
      },
      setPluginVersion: function(e) {
        h = e
      },
      isSupportLinkMic: function() {
        return !("latest" != h && !isNaN(h)) || h >= 1002001
      },
      isSupportDrag: function() {
        return !isNaN(h) && h > 1002003
      },
      isSupportNotice: function() {
        return !("latest" != h && !isNaN(h)) || h >= 1002003
      },
      isSupportPreview: function() {
        return !("latest" != h && !isNaN(h)) || h >= 1002006
      },
      ceil: function(e, t) {
        if (t < 1) return e;
        var n = Math.pow(10, t);
        return Math.ceil(e * n) / n
      }
    }, u.a), {}, {
      log: l,
      setCustomerServiceCallback: function(e) {
        I = e
      },
      getCustomerServiceCallback: function() {
        return I
      }
    })
  }, , , , , , , , , function(e, t, n) {
    var o = n(1),
      r = o.a.getSystemInfoSync(!0) || {};
    t.a = {
      getSystemInfo: o.a.getSystemInfoSync,
      getMenuButtonBoundingPosition: function() {
        return wx.getMenuButtonBoundingClientRect && wx.getMenuButtonBoundingClientRect()
      },
      getPaddingTop: function() {
        return o.a.getSystemInfoSync().statusBarHeight + 44
      },
      isIPhoneX: function() {
        var e = r.model;
        return /iphone\sx/i.test(e) || /iphone/i.test(e) && /unknown/.test(e) || /iphone\s11/i.test(e) || /iphone\s12/i.test(e) || /iPad\sPro/i.test(e)
      },
      setNavFontColor: function(e) {
        wx.setNavigationBarColor && wx.setNavigationBarColor({
          frontColor: "#000000",
          backgroundColor: e
        })
      },
      getScreenWidth: function() {
        return r.windowWidth || 0
      },
      getScreenHeight: function() {
        return r.screenHeight || 0
      },
      isIos: function() {
        return "ios" === r.platform
      },
      isAndroid: function() {
        var e = r.platform;
        return !(!e || !e.toLowerCase().includes("android"))
      },
      isMac: function() {
        var e = r.platform;
        return !(!e || "mac" !== e)
      },
      isIpad: function() {
        var e = r.model;
        return !(!e || !e.toLowerCase().includes("ipad"))
      },
      isPC: function() {
        var e = r.platform;
        return !(!e || "mac" !== e && "windows" !== e)
      },
      isMobile: function() {
        var e = r.platform,
          t = r.model;
        return !("android" !== e && "ios" !== e || !t || t.toLowerCase().includes("ipad"))
      },
      isDevTools: function() {
        var e = r.platform;
        return !(!e || "devtools" !== e)
      },
      isWindows: function() {
        var e = r.platform;
        return !(!e || "windows" !== e)
      }
    }
  }, , , function(e, t, n) {
    var o, r = n(8),
      i = n.n(r),
      a = n(19),
      s = n.n(a),
      c = n(16),
      u = n.n(c),
      _ = n(17),
      E = n.n(_),
      f = wx.getLogManager ? wx.getLogManager() : null,
      l = function(e) {
        try {
          f && f.info.apply(null, e)
        } catch (e) {
          console.log("old log error", e)
        }
      },
      T = {
        DEBUG: 1,
        INFO: 2,
        WARN: 4,
        ERROR: 8
      },
      O = "",
      S = (o = wx.operateWXData, function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise((function(t) {
          var n = e.complete;
          return e.complete = function(e) {
            n && n(e), t(e)
          }, o.call(wx, e)
        }))
      }),
      I = function(e, t) {
        if ("string" != typeof e) return 0;
        var n, o, r, i = 0;
        if ("utf-16" === (t = t ? t.toLowerCase() : "utf8") || "utf16" === t)
          for (o = 0, r = e.length; o < r; o++) i += (n = e.charCodeAt(o)) <= 65535 ? 2 : 4;
        else
          for (o = 0, r = e.length; o < r; o++) i += (n = e.charCodeAt(o)) <= 127 ? 1 : n <= 2047 ? 2 : n <= 65535 ? 3 : 4;
        return i
      },
      g = null,
      p = !1,
      N = function() {
        function e() {
          var t = this,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          u()(this, e), this.systemInfo = wx.getSystemInfoSync(), this.opt = {}, this.opt.level = T.INFO, O = n.appid, this._hasNoPermission = void 0 === n.hasPermission || !n.hasPermission, this.isRotate = void 0 === n.isRotate || !!n.isRotate, this.msgList = {}, this.filterList = {}, this.sizeList = {}, this.levelList = {}, this._uploadList = [], this._logInfo = {}, this._logInfo.level = 0, this._logInfo.version = 2, this._logInfo.source = 1, this._logInfo.platform = "ios" === this.systemInfo.platform ? 2 : 1, this._logInfo.libraryVersion = this.systemInfo.SDKVersion, this._logInfo.clientVersion = this.systemInfo.version, this.exceedSizeList = {}, this.analyzeList = {}, this.MaxSize = 10240, this.MaxLogCount = 200, this._logCacheBeforeLogConfig = [], setTimeout((function() {
            t._getLogConfig()
          }), 300)
        }
        return E()(e, [{
          key: "_getLogConfig",
          value: function(e, t) {
            var n = this;
            return S({
              apiName: "GetUploadSetting",
              reqData: {},
              requestInQueue: !1
            }).then((function(o) {
              if (o.rawData) try {
                var r = JSON.parse(o.rawData);
                n.MaxSize = 1024 * r.MaxLogSize, r.MaxLogCount && (n.MaxLogCount = r.MaxLogCount), n._logInfo.id = r.UserUin, r.OpenId && (n.traceid = "".concat(r.OpenId, "_").concat(parseInt(Date.now() / 1e3, 10))), r.Debug && r.Debug.MaxSize && r.Debug.ExpireTime > Date.now() / 1e3 && (n.isDebugMode = !0, n.MaxSize = 1024 * r.Debug.MaxSize, n.opt.level = T.DEBUG, r.Debug.MaxLogCount && (n.MaxLogCount = r.Debug.MaxLogCount));
                var i = n._logCacheBeforeLogConfig || [];
                n._logCacheBeforeLogConfig = [], i.forEach((function(e) {
                  n._baseLog.apply(n, [e.key, e.path].concat(s()(e.args)))
                })), e && n.upload(t)
              } catch (e) {
                n._hasNoPermission = !0, n._logCacheBeforeLogConfig = []
              } else n._hasNoPermission = !0, n._logCacheBeforeLogConfig = [];
              l(["GetUploadSetting success log", o])
            })).catch((function(e) {
              e.errMsg && e.errMsg.indexOf("fail invalid scope") >= 0 && (n._hasNoPermission = !0, n._logCacheBeforeLogConfig = []), console.error("getwxalogsetting err", e), n._getConfigFail = !0, l(["GetUploadSetting error", e.errMsg])
            }))
          }
        }, {
          key: "_checkSize",
          value: function(e, t) {
            var n = 0;
            if (!t || !t.length) return !0;
            if (!e) return !0;
            t.forEach((function(e) {
              n += I(e)
            })), this.sizeList[e] = this.sizeList[e] || 0;
            var o = this.sizeList[e];
            return o + n > this.MaxSize ? n : (this.sizeList[e] = o + n, !0)
          }
        }, {
          key: "_baseLog",
          value: function(e, t) {
            try {
              for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) o[r - 2] = arguments[r];
              if (!o.length) return;
              if (this._hasNoPermission) return;
              if (!this._logInfo.id) return void this._logCacheBeforeLogConfig.push({
                key: e,
                path: t,
                args: o
              });
              var a = e,
                s = T[a.toUpperCase()] || 0;
              if (s < this.opt.level) return;
              var c = o.map((function(e) {
                  var t, n = i()(e),
                    o = "";
                  if ("function" === n && (t = "function(){}"), "undefined" === n) t = "<Undefined>";
                  else if ("object" === n) {
                    o = (o = Object.prototype.toString.call(e)).replace(/^\[object |\]$/g, "");
                    try {
                      t = "Error" === o ? e.stack : JSON.stringify(e)
                    } catch (e) {
                      o = "Error", t = e.message
                    }
                  } else e += "";
                  return t || e
                })),
                u = this._checkSize(t, c);
              I(c.join(""));
              var _ = this.msgList[t] || [],
                E = _.length >= this.MaxLogCount;
              E || !0 !== u ? this.isRotate ? (this.upload(t), this._addLogMsg(c, t, s)) : E ? console.warn("UserLog:fail log count exceed max count ".concat(this.MaxLogCount)) : (console.warn("UserLog:fail log size exceed maxsize ".concat(this.MaxSize, " will be discard at page ").concat(t, ".")), this.exceedSizeList[t] = this.exceedSizeList[t] || 0, this.exceedSizeList[t] || this._addLogMsg(["UserLog:fail Log Size ".concat(u, " Exceed.")], t, T.WARN), this.exceedSizeList[t] += u) : this._addLogMsg(c, t, s), l(c)
            } catch (e) {
              console.log("log error", e)
            }
          }
        }, {
          key: "_addLogMsg",
          value: function(e, t, n) {
            if (!p && n) {
              var o = t;
              if (o) {
                this.msgList[o] = this.msgList[o] || [];
                var r = this.msgList[o][0],
                  i = new Date,
                  a = Math.ceil(+i / 1e3),
                  s = [r ? a - (r.t || r[0]) : a, e, n, i.getMilliseconds()];
                if (!this.msgList[o].length) {
                  var c = (new Date).getTimezoneOffset();
                  s.push(c)
                }
                this.msgList[o].push(s), this.levelList[o] = this.levelList[o] || 0, this.levelList[o] = this.levelList[o] | n
              }
            }
          }
        }, {
          key: "OperateWxUploadLog",
          value: function(e, t) {
            if (!p) return S({
              apiName: "UploadByApi",
              reqData: {
                interface: "weapplog",
                data: JSON.stringify(e)
              },
              requestInQueue: !1
            }).then((function(e) {
              t && t(!0)
            })).catch((function(e) {
              e && 1e4 == +e.err_code && (p = !0), t && t(!1)
            }));
            console.log("Upload fail, Exceed today upload log max count.")
          }
        }, {
          key: "stat",
          value: function(e) {
            return e && this.sizeList[e] || 0
          }
        }, {
          key: "_hasUploadInterval",
          value: function() {
            return !(this._isUploading || Date.now() - this._lastUploadTime < 1e3)
          }
        }, {
          key: "uploadAllPage",
          value: function() {
            var e = this;
            this && this.msgList && Object.keys(this.msgList).forEach((function(t) {
              e.upload(t)
            }))
          }
        }, {
          key: "upload",
          value: function(e) {
            if (e) {
              var t = this.msgList[e] || [];
              if (t && t.length) {
                this.msgList[e] = [];
                var n = this.levelList[e] || T.DEBUG;
                this.levelList[e] = 0, this.sizeList[e], this.sizeList[e] = 0;
                var o = this._logInfo;
                o.level = n, this.exceedSizeList[e] = 0, this._logInfo.timestamp = Math.ceil(Date.now() / 1e3), this._logInfo = Object.assign({}, this._logInfo), o.msg = JSON.stringify(t), o.analyze = JSON.stringify(this.analyzeList[e] || {}), this.analyzeList[e] = {}, o.appid = O, o.url = e, this.traceid && (o.traceid = this.traceid), o.device = this.systemInfo.model + " " + this.systemInfo.system, o.filter1 = this.filterList[e] || "", this.filterList[e] = "", this._hasUploadInterval() ? (this._isUploading = !0, this.uploadAllMsg(o)) : this._uploadList.push(o)
              }
            }
          }
        }, {
          key: "uploadAllMsg",
          value: function(e) {
            var t = this;
            this.OperateWxUploadLog(e, (function(e) {
              t._isUploading = !1, t._lastUploadTime = Date.now(), e && t._uploadList.length && (g && clearTimeout(g), g = setTimeout((function() {
                g = null, t.uploadAllMsg(t._uploadList.shift())
              }), 1e3))
            }))
          }
        }, {
          key: "setFilterMsg",
          value: function(e, t) {
            return "string" != typeof t && (t = JSON.stringify(t)), I(t) > 2048 ? (console.log("UserLog set fileter msg fail, exceed max size", 2048), !1) : (this.filterList[e] = t, !0)
          }
        }, {
          key: "setAnalyze",
          value: function(e, t) {
            this.analyzeList[e] = t
          }
        }, {
          key: "addFilterMsg",
          value: function(e, t) {
            "string" != typeof t && (t = JSON.stringify(t));
            var n = this.filterList[e] || "";
            this.setFilterMsg(e, n + (n ? " " : "") + t)
          }
        }, {
          key: "getTraceId",
          value: function() {
            return this.traceid || ""
          }
        }]), e
      }(),
      R = null;
    t.a = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.page,
        n = {
          debug: function() {
            var e;
            if (R) {
              for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
              return (e = R)._baseLog.apply(e, ["debug", t].concat(o))
            }
          },
          info: function() {
            var e;
            if (R) {
              for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
              return (e = R)._baseLog.apply(e, ["info", t].concat(o))
            }
          },
          infoNoConsole: function() {
            var e;
            if (R) {
              for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
              return (e = R)._baseLog.apply(e, ["info", t].concat(o))
            }
          },
          warn: function() {
            for (var e, n, o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
            if ((e = console).warn.apply(e, r), R) return (n = R)._baseLog.apply(n, ["warn", t].concat(r))
          },
          warnNoConsole: function() {
            var e;
            if (R) {
              for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
              return (e = R)._baseLog.apply(e, ["warn", t].concat(o))
            }
          },
          error: function() {
            var e;
            if (R) {
              for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
              return (e = R)._baseLog.apply(e, ["error", t].concat(o))
            }
          },
          errorNoConsole: function() {
            var e;
            if (R) {
              for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
              return (e = R)._baseLog.apply(e, ["error", t].concat(o))
            }
          },
          stat: function() {
            if (R) return R.stat(t)
          },
          setFilterMsg: function(e) {
            if (R) return R.setFilterMsg(t, e)
          },
          addFilterMsg: function(e) {
            if (R) return R.addFilterMsg(t, e)
          },
          in: function(e) {
            e && e.route && (t = e.route)
          },
          upload: function() {
            R && R.upload(t)
          },
          uploadAll: function() {
            R && R.uploadAllPage()
          },
          setAnalyze: function(e) {
            R && R.setAnalyze(t, e)
          }
        };
      return !R && e && e.appid ? (R = new N({
        appid: e.appid,
        hasPermission: !0
      }), n) : n
    }
  }]
};
