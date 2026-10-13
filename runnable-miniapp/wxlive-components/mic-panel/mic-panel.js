module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/18.js"), {
  ids: [70],
  modules: {
    404: function(e, t, i) {
      i.r(t);
      var a = i(7),
        n = i.n(a),
        r = i(0),
        c = i(5),
        o = i(3),
        s = i(1),
        l = i(21),
        g = i(2);

      function p(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), i.push.apply(i, a)
        }
        return i
      }

      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p(Object(i), !0).forEach((function(t) {
            n()(e, t, i[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : p(Object(i)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
          }))
        }
        return e
      }
      Component({
        behaviors: [c.a, l.a],
        properties: {
          linkMicType: {
            type: Number,
            value: 1
          },
          micPanelMode: {
            type: Number,
            value: r.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE
          },
          isShow: {
            type: Boolean,
            value: !1
          }
        },
        data: {
          componentName: "micPanelPlayer",
          triggerClickLinkMic: !1,
          triggerCancelLinkMicRequest: !1,
          avatarUrl: "",
          nickname: "",
          confirmLeftTime: 0,
          triggerRejectInvition: !1,
          triggerAcceptInvition: !1,
          linkMicLastTime: 0,
          linkMicLastTimeFormat: "",
          triggerClickChangeLinkMicType: !1,
          canAccept: !1,
          triggerClickHangUp: !1,
          needConfirm: !0,
          linkMicRecover: !1,
          anchorCancelInvition: !1,
          showMicPanel: !1,
          audiencePushEnableMic: !1,
          micBan: !1,
          isNameVerify: -1,
          isCaton: !1
        },
        observers: {
          micPanelMode: function(e) {
            var t = this;
            if (e === r.a.MIC_PLAYER_MODE.INVITING) {
              var i = this;
              setTimeout((function() {
                t.storeData.linkMicType === r.a.LINK_MIC_TYPE.VIDEO && wx.createSelectorQuery().in(t).select("#mic-panel__video-screen").boundingClientRect((function(e) {
                  if (e) {
                    var t = parseInt(e.top),
                      a = parseInt(e.left - 12);
                    i.storeData.micPanelMode !== r.a.MIC_PLAYER_MODE.INVITING || t == i.storeData.micTagTop && a == i.storeData.micTagLeft || (i.logInfo("设置连麦小窗位置, top:", t, ", left:", a), i.storeSetData({
                      micTagTop: t,
                      micTagLeft: a
                    }))
                  }
                })).exec()
              }), 0)
            }
          }
        },
        methods: {
          onNavigatorSucc: function() {
            this.storeSetData({
              showMicPanel: !1
            })
          },
          onClickLinkMic: function(e) {
            var t = this;
            if (!this.data.triggerClickLinkMic) {
              this.data.triggerClickLinkMic = !0;
              var i = "video" === e.currentTarget.dataset.type ? r.a.LINK_MIC_TYPE.VIDEO : r.a.LINK_MIC_TYPE.AUDIO;
              this.liveManager.getUserInfo().then((function(e) {
                var a = e.avatarBig || e.avatar,
                  n = e.nickname;
                t.storeSetData({
                  micPanelMode: r.a.MIC_PLAYER_MODE.APPLYING,
                  linkMicType: i,
                  avatarUrl: a,
                  nickname: n
                }), o.a.requestLinkMic(M(M({}, t.getReqBase()), {}, {
                  linkMicType: i,
                  score: t.storeData.linkMicScore,
                  extra: JSON.stringify({
                    nickname: n,
                    avatar: a,
                    openid: t.storeData.curOpenid
                  })
                })).then((function(e) {
                  t.logInfo("申请连麦 succ"), t.addReportMMData({
                    actionType: 3,
                    subActionType: 19,
                    reserves1: i
                  }), t.data.triggerClickLinkMic = !1, o.a.getLinkMicApplyBarrages(M({}, t.getReqBase())).then((function(e) {
                    if (e.list && e.list.length > 0) {
                      var i = JSON.parse(e.list[0].msg_content).cnt;
                      i >= 2 && t.storeSetData({
                        addLinkMicBarrage: {
                          content: t.formatLinkMicBarrage(i),
                          msg_id: e.list[0].msg_id
                        }
                      })
                    }
                  }))
                })).catch((function(e) {
                  t.logInfo("申请连麦 fail", e);
                  var i = e && (+e.ret || +e.err_code) || e.errMsg && +e.errMsg.split(":")[2];
                  1009 === i || i.indexOf("1009") > -1 ? s.a.tipsSimple("当前申请人数过多，请稍后再试。") : s.a.tipsSimple("申请失败，请稍后重试。"), t.storeSetData({
                    micPanelMode: r.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE,
                    showMicPanel: !0
                  }), t.data.triggerClickLinkMic = !1
                }))
              })).catch((function(e) {
                t.data.triggerClickLinkMic = !1, !e || e.errMsg, t.logInfo("getUserInfo error", e)
              }))
            }
          },
          cancelLinkMicRequest: function() {
            var e = this;
            this.data.triggerCancelLinkMicRequest || (this.data.triggerCancelLinkMicRequest = !0, o.a.cancelLinkMicRequest(M({}, this.getReqBase())).then((function(t) {
              s.a.tipsSimple("已取消连麦申请"), e.storeSetData({
                micPanelMode: r.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE,
                showMicPanel: !1
              }), e.logInfo("取消连麦 成功,", t), e.data.triggerCancelLinkMicRequest = !1
            })).catch((function(t) {
              e.logInfo("取消连麦 fail,", t), s.a.tipsSimple("取消失败"), e.data.triggerCancelLinkMicRequest = !1
            })))
          },
          onCloseEvent: function(e) {
            e.detail.close && this.storeSetData({
              showMicPanel: !1
            })
          },
          onClickRejectInvition: function() {
            var e = this;
            this.storeData.anchorCancelInvition ? this.logInfo("主播已取消，不能拒绝") : this.data.triggerRejectInvition || (this.data.triggerRejectInvition = !0, this.sendRejectAnchorInvition().then((function(t) {
              e.logInfo("拒绝连麦邀请 succ"), s.a.tipsSimple("已拒绝"), e.storeSetData({
                micPanelMode: r.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE,
                showMicPanel: !1,
                audiencePushUrl: ""
              }), e.data.triggerRejectInvition = !1
            })).catch((function(t) {
              e.data.triggerRejectInvition = !1, e.logInfo("拒绝连麦邀请 fail", t)
            })))
          },
          onClickAcceptInvition: function() {
            var e = this;
            this.storeData.anchorCancelInvition ? this.logInfo("主播已取消，不能接受") : this.storeData.canAccept ? this.data.triggerAcceptInvition || (this.data.triggerAcceptInvition = !0, this.logInfo("sendAcceptAnchorInvition req, 给主播的实时流播放地址:" + this.storeData.playUrlForPusher.url), this.sendAcceptAnchorInvition(this.storeData.playUrlForPusher, this.storeData.linkMicType).then((function(t) {
              wx.vibrateLong(), -1 == e.storeData.livePlayUrl.indexOf("rtmp://") && e.storeData.livePlayUrl && (e.logInfo("保存非实时流", e.storeData.livePlayUrl), g.a.setDelayPlayUrl(e.storeData.livePlayUrl)), e.storeSetData({
                micPanelMode: r.a.MIC_PLAYER_MODE.CONNECTING,
                showMicPanel: !1,
                showOthersMicTag: !1,
                playerMode: "RTC",
                livePlayUrl: e.storeData.realTimePlayUrl,
                minCache: .2,
                maxCache: .3,
                linkMicLastTime: 0,
                linkMicLastTimeFormat: "00:00",
                startLinkMicTimer: !0,
                micTagLeft: -1,
                micTagTop: -1
              }), setTimeout((function() {
                e.setMicTagPosition()
              }), 0), e.logInfo("sendAcceptAnchorInvition succ, 播放实时流:", e.storeData.realTimePlayUrl), e.addReportMMData({
                actionType: 3,
                subActionType: 20,
                reserves1: e.storeData.linkMicType
              }), e.data.triggerAcceptInvition = !1
            })).catch((function(t) {
              e.data.triggerAcceptInvition = !1, e.logInfo("sendAcceptAnchorInvition fail", t)
            }))) : s.a.tipsSimple("请稍后重试")
          },
          onClickChangeLinkMicType: function(e) {
            var t = this;
            if (!this.data.triggerClickChangeLinkMicType) {
              this.data.triggerClickChangeLinkMicType = !0;
              var i = this.data.linkMicType == r.a.LINK_MIC_TYPE.VIDEO ? r.a.LINK_MIC_TYPE.AUDIO : r.a.LINK_MIC_TYPE.VIDEO;
              o.a.changeLinkMicType(M(M({}, this.getReqBase()), {}, {
                linkMicType: i
              })).then((function(e) {
                s.a.tipsSimple("切换成功"), t.storeSetData({
                  linkMicType: i
                }), t.data.triggerClickChangeLinkMicType = !1, t.logInfo("切换连麦类型：" + (i == r.a.LINK_MIC_TYPE.AUDIO ? "音频" : "视频") + " succ")
              })).catch((function(e) {
                s.a.tipsSimple("切换失败"), t.data.triggerClickChangeLinkMicType = !1, t.logInfo("切换连麦类型：" + (i == r.a.LINK_MIC_TYPE.AUDIO ? "音频" : "视频") + " fail", e)
              }))
            }
          },
          onClickHangUp: function() {
            var e = this;
            this.data.triggerClickHangUp || s.a.tipsConfirm({
              title: "结束连麦",
              onConfirm: function() {
                e.data.triggerClickHangUp = !0, e.sendAudienceHangUp().then((function(t) {
                  e.logInfo("挂断连麦 succ"), s.a.tipsSimple("挂断成功"), e.addReportMMData({
                    actionType: 3,
                    subActionType: 18,
                    reserves1: e.storeData.linkMicType,
                    reserve2: e.storeData.linkMicLastTime
                  }), e.handleAudienceHangUp(), e.data.triggerClickHangUp = !1
                })).catch((function(t) {
                  e.data.triggerClickHangUp = !1, e.logInfo("挂断连麦 fail", t), s.a.tipsSimple("挂断失败")
                }))
              }
            })
          },
          onClickMute: function() {
            this.storeData.micBan ? s.a.tipsSimple("主播已经将你静音") : (this.logInfo(this.storeData.audiencePushEnableMic ? "静音" : "取消静音"), this.storeSetData({
              audiencePushEnableMic: !this.storeData.audiencePushEnableMic
            }))
          },
          formatLinkMicBarrage: function(e) {
            return e <= 99 ? this.storeData.nickname + "等" + e + "人刚申请了连麦" : this.storeData.nickname + "等99+人刚申请了连麦"
          }
        }
      })
    },
    79: function(e, t, i) {
      e.exports = i(404)
    }
  },
  entries: [
    [79, 0, 1, 3, 6, 2, 4, 5, 7, 18]
  ]
}]);
