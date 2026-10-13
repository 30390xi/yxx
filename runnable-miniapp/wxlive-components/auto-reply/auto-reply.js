require("../../@babel/runtime/helpers/Arrayincludes");
module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/8.js"), {
  ids: [49],
  modules: {
    484: function(e, t, o) {
      o.r(t);
      var s = o(5),
        i = o(0),
        n = o(1);
      Component({
        behaviors: [s.a],
        data: {
          componentName: "autoReply",
          autoReply: "",
          autoReplyType: "",
          isDisableAutoReply: !1,
          hideKf: !1,
          showRecord: !1,
          _isShow: !1
        },
        lifetimes: {
          attached: function() {},
          detached: function() {}
        },
        liveStore: {
          observers: {
            isDisableAutoReply: function(e) {
              console.warn("[autoReply] isDisableAutoReply", e), e && (clearTimeout(this.timer), this.storeSetData({
                _isShow: !1,
                autoReply: ""
              }))
            },
            autoReply: function(e) {
              var t = this;
              console.warn("[autoReply] autoReply", e), e && (this.storeData.isDisableAutoReply || this.setData({
                _isShow: !1
              }, (function() {
                t.setData({
                  _isShow: !0
                })
              })), clearTimeout(this.timer), this.timer = setTimeout((function() {
                t.storeSetData({
                  _isShow: !1,
                  autoReply: ""
                })
              }), 8e3))
            }
          }
        },
        methods: {
          onLongPressAutoReply: function() {
            var e = this,
              t = this;
            n.a.showActionSheet({
              itemList: ["本场直播不再回复"]
            }).then((function(e) {
              0 === e.tapIndex && (n.a.tipsSimple("已关闭主播回复"), t.storeSetData({
                isDisableAutoReply: !0
              }))
            })).catch((function(t) {
              e.logInfo("onLongPressAutoReply catch", t)
            }))
          },
          onClickAutoReplyKf: function() {
            var e = this;
            if (this.logInfo("onClickAutoReplyKf"), (wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) !== i.a.SHARE_FRIENDS_SCENE) {
              var t, o = this.storeData,
                s = o.roomTitle,
                a = o.roomImg,
                r = o.curOpenid,
                c = o.curLiveStatusCode,
                u = o.roomId,
                p = o.roomAppid,
                l = o.customParams,
                m = o.openShareTicket,
                h = o.closePictureInPictureMode;
              t = c === i.a.LIVE_STATUS.NOT_START ? "即将直播：".concat(s) : c === i.a.LIVE_STATUS.END || c === i.a.LIVE_STATUS.REPLAY ? s : "正在直播：".concat(s);
              var d = "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(u, "&room_appid=").concat(p, "&type=17&share_openid=").concat(r, "&custom_params=").concat(l, "&close_picture_in_picture_mode=").concat(h ? 1 : 0, "&open_share_ticket=").concat(m);
              n.a.enterContact({
                appId: this.storeData.roomAppid,
                showMessageCard: !0,
                sendMessageTitle: t,
                sendMessageImg: a,
                sendMessagePath: d
              }).then((function(t) {
                e.addReportMMData({
                  actionType: 4,
                  subActionType: 40
                })
              })).catch((function(t) {
                "string" == typeof t && t.includes("not support") || e.logError("onEnterContact API error", t)
              }))
            } else n.a.tipsSimple("请前往小程序使用完整服务")
          }
        }
      })
    },
    89: function(e, t, o) {
      e.exports = o(484)
    }
  },
  entries: [
    [89, 0, 1, 3, 6, 2, 4, 5, 7, 8]
  ]
}]);
