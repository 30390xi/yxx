require("../../@babel/runtime/helpers/Arrayincludes");
module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/8.js"), require("../../_commons/10.js"), require("../../_commons/11.js"), require("../../_commons/13.js"), require("../../_commons/18.js"), {
  ids: [82],
  modules: {
    388: function(e, t, o) {
      o.r(t);
      var i = o(5),
        s = o(15),
        n = o(0),
        a = o(1),
        r = o(21);
      Component({
        behaviors: [i.a, s.a, r.a],
        properties: {
          isShow: {
            type: Boolean,
            default: !1
          }
        },
        data: {
          componentName: "settingMore",
          anchorOpenLinkMic: !0,
          isRoomLinkMicBan: !1,
          curLiveStatusCode: 0,
          dataIsShow: !1,
          screenType: "",
          hideKf: !1,
          showForbidIcon: !1,
          showLinkMicIcon: !1,
          isNameVerify: -1,
          showRecord: !1,
          isShowAutoReplySettingBtn: !1
        },
        observers: {
          isShow: function() {
            this.setData({
              dataIsShow: this.data.isShow
            })
          }
        },
        methods: {
          curLiveStatusCodeObserver: function(e) {
            var t = this.storeData.showRecord;
            (e === n.a.LIVE_STATUS.END && !t || e === n.a.LIVE_STATUS.FORBID) && this.onCloseMask()
          },
          onCloseMask: function() {
            var e = this;
            this.setData({
              dataIsShow: !1
            }, (function() {
              e.liveManager.setData({
                showOperationPanel: !1
              })
            }))
          },
          clickForbidList: function() {
            this.logInfo("clickForbidList"), (wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) !== n.a.SHARE_FRIENDS_SCENE ? this.storeData.isClearScreen || this.storeSetData({
              showForbidUserList: !0,
              showOperationPanel: !1
            }) : a.a.tipsSimple("请前往小程序使用完整服务")
          },
          clickEnterContact: function() {
            var e = this;
            if ((wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) !== n.a.SHARE_FRIENDS_SCENE) {
              var t, o = this.storeData,
                i = o.roomTitle,
                s = o.roomImg,
                r = o.curOpenid,
                c = o.curLiveStatusCode,
                p = o.roomId,
                u = o.roomAppid,
                m = o.customParams,
                S = o.openShareTicket,
                l = o.closePictureInPictureMode;
              t = c === n.a.LIVE_STATUS.NOT_START ? "即将直播：".concat(i) : c === n.a.LIVE_STATUS.END || c === n.a.LIVE_STATUS.REPLAY ? i : "正在直播：".concat(i);
              var h = "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(p, "&room_appid=").concat(u, "&type=17&share_openid=").concat(r, "&custom_params=").concat(m, "&close_picture_in_picture_mode=").concat(l ? 1 : 0, "&open_share_ticket=").concat(S);
              a.a.enterContact({
                appId: this.storeData.roomAppid,
                showMessageCard: !0,
                sendMessageTitle: t,
                sendMessageImg: s,
                sendMessagePath: h
              }).then((function(t) {
                e.addReportMMData({
                  actionType: 4,
                  subActionType: 40
                }), console.log("enterContact res", t)
              })).catch((function(t) {
                "string" == typeof t && t.includes("not support") || e.logError("onEnterContact API error", t)
              }))
            } else a.a.tipsSimple("请前往小程序使用完整服务")
          },
          clickAutoReplySetting: function() {
            this.logInfo("clickAutoReplySetting"), this.storeSetData({
              isShowAutoReplySettingPanel: !0
            }), this.onCloseMask()
          },
          onClickMic: function() {
            var e = this;
            (wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) !== n.a.SHARE_FRIENDS_SCENE ? this.data.isRoomLinkMicBan ? a.a.tipsSimple("因涉嫌违规，当前直播间无法连麦。") : this.isAuthCameraAndMic().then((function(t) {
              "need-auth" == t ? wx.showModal({
                title: "",
                content: "连麦需要授权使用你的摄像头、麦克风",
                cancelText: "取消",
                confirmText: "前往设置",
                success: function(t) {
                  t.confirm && wx.openSetting({
                    success: function(t) {
                      var o = t.miniprogramAuthSetting ? t.miniprogramAuthSetting : t.authSetting ? t.authSetting : {},
                        i = o["scope.camera"],
                        s = o["scope.record"];
                      i && s ? (a.a.tipsSimple("授权成功"), e.storeSetData({
                        showMicPanel: !0,
                        showOperationPanel: !1
                      })) : a.a.tipsSimple("未打开摄像头或麦克风权限")
                    },
                    fail: function(e) {
                      a.a.tipsSimple("系统接口失败，请稍后重试"), resolve("fail")
                    }
                  })
                }
              }) : "ok" == t ? (e.setData({
                dataIsShow: !1
              }, (function() {
                e.liveManager.setData({
                  showOperationPanel: !1
                })
              })), setTimeout((function() {
                e.storeSetData({
                  showMicPanel: !0
                })
              }), 200)) : a.a.tipsSimple("系统发生异常，请稍后重试")
            })) : a.a.tipsSimple("请前往小程序使用完整服务")
          }
        }
      })
    },
    77: function(e, t, o) {
      e.exports = o(388)
    }
  },
  entries: [
    [77, 0, 1, 3, 6, 2, 4, 5, 7, 8, 10, 11, 13, 18]
  ]
}]);
