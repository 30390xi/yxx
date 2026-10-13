module.exports = {
  ids: [18],
  modules: {
    21: function(e, t, n) {
      var i = n(19),
        a = n.n(i),
        o = n(7),
        r = n.n(o),
        s = n(0),
        c = n(1),
        h = n(3),
        _ = n(2);

      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, i)
        }
        return n
      }

      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? u(Object(n), !0).forEach((function(t) {
            r()(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      t.a = Behavior({
        data: {},
        methods: {
          sendAudienceHangUp: function() {
            return this._sendWebSocketMsg(s.a.C2C_MSG_SUB_TYPE.VIEWER_HANGUP)
          },
          handleAudienceHangUp: function() {
            var e = this;
            clearInterval(this.storeData.linkMicLastTimer), this.logInfo("挂断，切换为非实时流", _.a.getDelayPlayUrl()), clearInterval(this.storeData.hangUpCountTimer);
            var t = setInterval((function() {
              var t = e.storeData.hangUpLinkMicCountTime - 1;
              e.storeSetData({
                hangUpLinkMicCountTime: t
              }), 0 == t && clearInterval(e.storeData.hangUpCountTimer)
            }), 1e3);
            this.storeSetData({
              audiencePushUrl: "",
              playerMode: "live",
              minCache: 1,
              maxCache: 3,
              micPanelMode: s.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE,
              showMicPanel: !1,
              livePlayUrl: _.a.getDelayPlayUrl(),
              linkMicLastTimer: null,
              startLinkMicTimer: !1,
              micTagTop: -1,
              micTagLeft: -1,
              hangUpLinkMicCountTime: 5,
              hangUpCountTimer: t
            })
          },
          handleAnchorHangUp: function() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            this.storeData.micPanelMode === s.a.MIC_PLAYER_MODE.CONNECTING ? (e && c.a.tipsSimple("主播已结束连麦"), this.handleAudienceHangUp()) : this.logInfo("recv anchor hang up, but in mode:" + this.storeData.micPanelMode + ", ignore")
          },
          handleAnchorBanMic: function() {
            this.storeData.micPanelMode == s.a.MIC_PLAYER_MODE.CONNECTING ? (c.a.tipsSimple("主播已经将你静音"), this.storeSetData({
              micBan: !0
            })) : this.logInfo("recv anchor ban mic, but in mode:" + this.storeData.micPanelMode + ", ignore")
          },
          handleAnchorOpenMic: function() {
            this.storeData.micPanelMode == s.a.MIC_PLAYER_MODE.CONNECTING ? (c.a.tipsSimple("主播已取消静音"), this.storeSetData({
              micBan: !1
            })) : this.logInfo("recv anchor open mic, but in mode:" + this.storeData.micPanelMode + ", ignore")
          },
          sendAcceptAnchorInvition: function(e, t) {
            return this._sendWebSocketMsg(t === s.a.LINK_MIC_TYPE.VIDEO ? s.a.C2C_MSG_SUB_TYPE.VIEWER_ACCEPT : s.a.C2C_MSG_SUB_TYPE.VIEWER_VOICE_ACCEPT, e)
          },
          sendRejectAnchorInvition: function() {
            return clearInterval(this.storeData.linkMicConfirmTimer), this.storeData.linkMicConfirmTimer = null, this._sendWebSocketMsg(s.a.C2C_MSG_SUB_TYPE.VIEWER_REJECT)
          },
          sendViewerRecoverLinkMic: function(e, t) {
            return this._sendWebSocketMsg(e === s.a.LINK_MIC_TYPE.AUDIO ? s.a.C2C_MSG_SUB_TYPE.VIEWER_VOICE_RECOVER : s.a.C2C_MSG_SUB_TYPE.VIEWER_RECOVER, t)
          },
          sendRecoverRequest: function() {
            return this._sendWebSocketMsg(s.a.C2C_MSG_SUB_TYPE.VIEWER_RECOVER_REQUEST)
          },
          sendRecoverToInvitingRequest: function() {
            return this._sendWebSocketMsg(s.a.C2C_MSG_SUB_TYPE.RECOVER_TO_INVITING_REQ)
          },
          viewersContainMe: function(e) {
            var t = this,
              n = !1;
            return e.forEach((function(e) {
              e.openid == t.storeData.curOpenid && (n = !0)
            })), n
          },
          getSubAnchorsRequest: function() {
            return this._sendWebSocketMsg(s.a.C2C_MSG_SUB_TYPE.VIEWER_GET_SUBANCHORS_REQ, {
              openid: this.storeData.curOpenid,
              nickname: this.storeData.nickname,
              headpic: this.storeData.avatarUrl,
              role_type: 3
            })
          },
          setMicTagPosition: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = this.storeData.commentTop - 12;
            t -= this.storeData.linkMicType == s.a.LINK_MIC_TYPE.AUDIO || e ? 109 : 160;
            var n = this.storeData.windowWidth;
            n -= this.storeData.linkMicType == s.a.LINK_MIC_TYPE.AUDIO || e ? 88 : 120, this.logInfo("设置连麦小窗位置, top:".concat(Math.ceil(t), ", left: ").concat(Math.ceil(n))), this.storeSetData({
              micTagTop: Math.ceil(t),
              micTagLeft: Math.ceil(n)
            })
          },
          responseCaton: function(e) {
            return this._sendWebSocketMsg(s.a.C2C_MSG_SUB_TYPE.IS_CATON_RESP, {
              caton: e
            })
          },
          sendCaton: function() {
            return this._sendWebSocketMsg(s.a.C2C_MSG_SUB_TYPE.CATON)
          },
          isVerifiedResponse: function() {
            var e = 1 == this.storeData.isNameVerify;
            return this._sendWebSocketMsg(s.a.C2C_MSG_SUB_TYPE.IS_VERIFIED_RESP, {
              verified: e
            })
          },
          _sendWebSocketMsg: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = E(E({}, this.getReqBase()), {}, {
                msgType: s.a.C2C_MSG_TYPE.LINKMIC,
                msgSubType: e,
                sendPerson: {
                  openid: this.storeData.curOpenid,
                  nickname: this.storeData.nickname,
                  headpic: this.storeData.avatarUrl,
                  role_type: 3
                },
                recvPerson: [{
                  openid: this.storeData.anchorOpenid,
                  role_type: 1,
                  nickname: this.storeData.anchorNickname,
                  headpic: this.storeData.anchorAvatar
                }].concat(a()(this.storeData.subAnchors)),
                body: t
              });
            return this.msgShouldDelaySend(e) ? new Promise((function(e) {
              setTimeout(e, 500)
            })).then((function(e) {
              return h.a.sendWebSocketMsg(n)
            })) : h.a.sendWebSocketMsg(n)
          },
          sendViewerLeave: function() {
            return this._sendWebSocketMsg(s.a.C2C_MSG_SUB_TYPE.VIEWER_LEAVE)
          },
          hangUpWhenInvition: function() {
            this.sendRejectAnchorInvition(), clearInterval(this.storeData.linkMicConfirmTimer), this.storeData.linkMicConfirmTimer = null, this.storeSetData({
              micPanelMode: s.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE,
              audiencePushUrl: "",
              showMicPanel: !1
            })
          },
          msgShouldDelaySend: function(e) {
            return [s.a.C2C_MSG_SUB_TYPE.VIEWER_ACCEPT, s.a.C2C_MSG_SUB_TYPE.VIEWER_REJECT, s.a.C2C_MSG_SUB_TYPE.VIEWER_HANGUP, s.a.C2C_MSG_SUB_TYPE.VIEWER_VOICE_ACCEPT].indexOf(e) > -1
          },
          isAuthCameraAndMic: function() {
            var e = this;
            return new Promise((function(t, n) {
              wx.getSetting({
                success: function(n) {
                  var i = n.miniprogramAuthSetting ? n.miniprogramAuthSetting : n.authSetting ? n.authSetting : {};
                  return i.hasOwnProperty("scope.camera") || i.hasOwnProperty("scope.record") ? i["scope.camera"] && i["scope.record"] ? (e.logInfo("getSetting success, ok:", i), void t("ok")) : void(i["scope.camera"] && !i.hasOwnProperty("scope.record") || i["scope.record"] && !i.hasOwnProperty("scope.camera") ? t("ok") : (e.logInfo("getSetting success, need-auth:", i), t("need-auth"))) : (e.logInfo("getSetting success, ok:", i), void t("ok"))
                },
                fail: function(n) {
                  e.logInfo("wx.getSetting fail:", n), t("check-wxa-auth-fail")
                }
              })
            }))
          }
        }
      })
    }
  }
};
