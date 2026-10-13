module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/18.js"), {
  ids: [72],
  modules: {
    396: function(t, a, i) {
      i.r(a);
      var s = i(0),
        n = i(5),
        o = i(1),
        r = i(21),
        c = i(2),
        l = i(9);
      Component({
        behaviors: [n.a, r.a],
        data: {
          componentName: "micTag",
          linkMicType: 0,
          audiencePushUrl: "",
          audiencePushEnableCamera: !1,
          audiencePushEnableMic: !0,
          micBan: !1,
          pusherContext: null,
          micPanelMode: s.a.MIC_PLAYER_MODE.CHOOSE_LINK_MIC_TYPE,
          avatarUrl: "",
          nickname: "",
          showOthersMicTag: !1,
          othersNickname: "",
          othersAvatarUrl: "",
          needConfirm: !0,
          pusherWidth: 120,
          pusherHeight: 160,
          showMicPanel: !1,
          waitingImagePath: "https://res.wx.qq.com/op_res/7L75IqmPj9RkoGQORIvAoBx8uMekH-xvYlx5wM4dGp0PZ7QIfXl56_GnlgHn7PrU"
        },
        pageLifetimes: {
          hide: function() {
            null !== this.data.pusherContext && (this.data.pusherContext.stop(), this.data.pusherContext = null)
          }
        },
        methods: {
          onLiveStatechange: function(e) {
            var t = e.detail.code;
            if (1002 == t) this.logInfo("推流成功：", t), this.data.pusherContext.stopPreview(), this.storeData.needConfirm ? 0 == this.storeData.showMicPanel ? this.storeSetData({
              showMicPanel: !0,
              canAccept: !0
            }) : this.storeSetData({
              canAccept: !0
            }) : this.sendRecoverLinkMic();
            else if (t < 0) l.a.addReportItem({
              biz_id: l.a.LINK_MIC_BIZ_ID,
              type: l.a.LIVE_PUSHER_ERROR_TYPE,
              error_code: t
            }), this.addReportMMData({
              actionType: 3,
              subActionType: 21,
              reserves: 1
            }), [-1307, -1313].indexOf(t) > -1 && (o.a.tipsSimple("连麦失败"), this.sendAudienceHangUp(), this.handleAudienceHangUp()), this.logInfo("onlivestatechange, 严重错误, code:", t);
            else {
              switch (t) {
                case 1101:
                  this.logInfo("上行带宽太小，上传数据受阻")
              }
              this.logInfo("onlivestatechange, code:", e.detail)
            }
          },
          onLiveError: function(e) {
            e && e.detail && e.detail.errMsg && e.detail.errMsg.indexOf("Not allowed") > -1 && (o.a.tipsSimple("连麦失败，小程序未授权摄像头或麦克风。"), this.sendAudienceHangUp(), this.handleAudienceHangUp()), this.logInfo("onLiveError, code:" + JSON.stringify(e))
          },
          onLiveNetStatus: function(e) {
            e.detail.info
          },
          audiencePushUrlObserver: function(t, a) {
            if (t) try {
              Date.now(), this.data.pusherContext = wx.createLivePusherContext(), this.logInfo("audiencePushUrlObserver:", t);
              var i = this;
              setTimeout((function() {
                i.data.pusherContext ? i.data.pusherContext.startPreview({
                  success: function(e) {
                    i.logInfo("连麦观众pusher startPreview成功"), i.data.pusherContext.start({
                      success: function(e) {
                        i.logInfo("连麦观众pusher成功start")
                      },
                      fail: function(e) {
                        o.a.tipsSimple("连麦失败"), i.sendAudienceHangUp(), i.handleAudienceHangUp(), i.logInfo("连麦观众pusher失败start", e)
                      }
                    })
                  },
                  fail: function(e) {
                    o.a.tipsSimple("连麦失败"), i.sendAudienceHangUp(), i.handleAudienceHangUp(), i.logInfo("连麦观众pusher startPreview失败", e)
                  }
                }) : (i.sendAudienceHangUp(), i.handleAudienceHangUp(), i.logInfo("连麦观众pusher createLivePusherContext失败", e))
              }), 200)
            } catch (e) {
              this.logInfo("audiencePushUrlObserver catch error", e)
            } else this.logInfo("audiencePushUrlObserver no url, stop pusher"), null != this.data.pusherContext && (this.data.pusherContext.stop(), this.data.pusherContext = null)
          },
          onMicTagTap: function() {
            this.data.triggerMigTagTap || this.storeData.micPanelMode === s.a.MIC_PLAYER_MODE.CONNECTING && (this.data.triggerMigTagTap = !0, this.storeSetData({
              showMicPanel: !this.storeData.showMicPanel
            }), this.data.triggerMigTagTap = !1)
          },
          sendRecoverLinkMic: function() {
            var e = this;
            this.sendViewerRecoverLinkMic(this.storeData.linkMicType, this.storeData.playUrlForPusher).then((function(t) {
              e.setMicTagPosition(), wx.vibrateLong(), e.logInfo("rtc url for player:" + e.storeData.realTimePlayUrl), -1 == e.storeData.livePlayUrl.indexOf("rtmp://") && e.storeData.livePlayUrl && (e.logInfo("保存非实时流", e.storeData.livePlayUrl), c.a.setDelayPlayUrl(e.storeData.livePlayUrl)), e.storeSetData({
                showMicPanel: !0,
                playerMode: "RTC",
                livePlayUrl: e.storeData.realTimePlayUrl,
                minCache: .2,
                maxCache: .3,
                startLinkMicTimer: !0
              }), e.logInfo("恢复连麦 sendViewerRecoverLinkMic succ", t)
            })).catch((function(t) {
              o.a.tipsSimple("连麦失败"), e.logInfo("恢复连麦 sendViewerRecoverLinkMic fail", t)
            }))
          }
        }
      })
    },
    78: function(e, t, a) {
      e.exports = a(396)
    }
  },
  entries: [
    [78, 0, 1, 3, 6, 2, 4, 5, 7, 18]
  ]
}]);
