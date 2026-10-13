require("../../@babel/runtime/helpers/Arrayincludes");
module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/15.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/9.js"), require("../../_commons/12.js"), require("../../_commons/17.js"), require("../../_commons/24.js"), require("../../_commons/23.js"), {
  ids: [66],
  modules: {
    308: function(t, e, o) {
      o.r(e);
      var r = o(0),
        i = o(1),
        a = o(2),
        s = o(5),
        n = o(23),
        c = o(26);
      Component({
        behaviors: [s.a, n.a, c.a],
        data: {
          componentName: "lotteryOper",
          screenType: "",
          lotteryId: "",
          lotteryPush: {},
          lotteryErrorWording: "",
          lotteryType: "",
          lotteryCountTime: "",
          showLotteryCountTime: !1,
          showLotteryOper: !1,
          showLowVersionFillPhone: !1,
          curLotteryLuckMen: [],
          historyLotteryLuckMen: [],
          isClickResultList: !1,
          lotteryOperClass: "",
          roomId: "",
          roomAppid: "",
          isAuthored: !1,
          isWxaMode: !1,
          isHistoryLuck: !1,
          hideKf: !1,
          showLotteryComplete: !1,
          showLotteryLoading: !0,
          lotteryTeamStatus: "",
          lotteryTeamMembersIdxList: [0, 1, 2],
          lotteryTeamMembers: [],
          myLotteryTeamMembers: [],
          userInfo: {},
          hideShare: !1,
          hideShareFriends: !1,
          isHideLotteryOper: !1
        },
        lifetimes: {
          detached: function() {
            clearInterval(this.getLotteryTeamTimer)
          }
        },
        methods: {
          hideShareObserver: function(t) {
            t && this.setData({
              hideShare: t
            })
          },
          roomStaticInfoObserver: function(t) {
            var e = !+t.share_friends;
            a.a.compareVersion(this.storeData.systemInfo.SDKVersion, "2.11.3") >= 0 && e && this.setData({
              hideShareFriends: e
            })
          },
          showLotteryOperObserver: function(t) {
            if (t) {
              var e = this.storeData,
                o = e.showLotteryComplete,
                r = e.showLotteryLoading,
                i = e.curLotteryLuckMen,
                a = e.lotteryPush,
                s = e.lotteryId;
              this.setData({
                showLotteryComplete: o,
                showLotteryLoading: r
              }), 0 === i.length ? this.addReportMMData({
                actionType: 4,
                subActionType: 30,
                reserves: 4,
                lotteryId: s,
                lotteryParticipateType: a.participate_type
              }) : a.isParticipate ? a.isWinLottery ? this.addReportMMData({
                actionType: 4,
                subActionType: 30,
                reserves: 1,
                lotteryId: s,
                lotteryParticipateType: a.participate_type
              }) : this.addReportMMData({
                actionType: 4,
                subActionType: 30,
                reserves: 2,
                lotteryId: s,
                lotteryParticipateType: a.participate_type
              }) : this.addReportMMData({
                actionType: 4,
                subActionType: 30,
                reserves: 3,
                lotteryId: s,
                lotteryParticipateType: a.participate_type
              })
            }
          },
          startLottery: function() {
            this.triggerEvent("lotteryevent", {
              showLotteryOper: !0,
              confirmStartLottery: !0
            })
          },
          cancelLottery: function() {
            this.triggerEvent("lotteryevent", {
              showLotteryOper: !0,
              confirmCancelLottery: !0
            })
          },
          closeLotteryOper: function() {
            var t = this.storeData,
              e = t.isEnterLotteryTeamFromShare,
              o = t.firstReportHelpRank;
            e && o && (this.storeSetData({
              firstReportHelpRank: !1
            }), this.reportHelpRank()), this.storeSetData({
              showLotteryOper: !1,
              showLowVersionFillPhone: !1,
              isClickResultList: !1
            })
          },
          onClickParticipate: function() {
            var t = this,
              e = this.storeData,
              o = e.lotteryId,
              a = e.lotteryPush;
            this.logInfo("[onClickParticipate]", {
              lotteryId: o
            }), this.liveManager.addReportMMData({
              actionType: 4,
              subActionType: 22,
              lotteryId: o,
              lotteryParticipateType: a.participate_type
            }), this.liveManager.getUserInfo().then((function(e) {
              if (+a.participate_type === r.a.LOTTERY_PARTIPATE_TYPE.LOTTERY_COMMENT) {
                var o = t.storeData,
                  s = o.isClearScreen,
                  n = o.isRoomCommentBan,
                  c = o.isGlobalCommentBan,
                  d = o.isRoomCommentClose;
                if (s) return;
                if (d) i.a.tipsSimple(r.a.BAN_COMMENT_WORDING.COMMENT_CLOSE);
                else if (n) i.a.tipsSimple(r.a.BAN_COMMENT_WORDING.ROOM_BANED);
                else if (c) i.a.tipsSimple(r.a.BAN_COMMENT_WORDING.GLOBAL_BANED);
                else {
                  if ("horizontal" === t.data.screenType && t.storeData.isAndroid) return void i.a.tipsSimple("横屏暂时无法评论，竖屏下进行评论。");
                  t.storeSetData({
                    showLotteryOper: !1,
                    showPushComment: !0
                  })
                }
              } else t.storeSetData({
                showLotteryOper: !1
              })
            })).catch((function(e) {
              t.logError("[onClickParticipate] getUserInfo error", {
                lotteryId: o,
                err: e
              })
            }))
          },
          clickResultList: function() {
            this.getLotteryHistoryRecord(), this.storeSetData({
              isClickResultList: !0
            }, !0), this.addReportMMData({
              actionType: 4,
              subActionType: 23,
              lotteryId: this.data.lotteryId,
              lotteryParticipateType: this.storeData.lotteryPush.participate_type
            })
          },
          onCopy: function(t) {
            var e = this,
              o = t.currentTarget.dataset.token,
              r = this.storeData.lotteryPush;
            this.liveManager.addReportMMData({
              actionType: 4,
              subActionType: 24,
              lotteryId: this.data.lotteryId,
              lotteryParticipateType: r.participate_type
            }), i.a.setClipboardData(o).then().catch((function(t) {
              e.logError("wx.setClipboardData error", t, o)
            }))
          },
          onClickLotteryAddress: function(t) {
            var e = this.storeData.lotteryPush;
            this.logInfo("onClickLotteryAddress", e), this.addReportMMData({
              actionType: 4,
              subActionType: 25,
              lotteryId: e.id,
              lotteryParticipateType: e.participate_type
            }), this.storeSetData({
              pictureInPictureMode: "",
              isForbidReportEnter: !0
            }), e.address && e.address.address ? this.viewAddress(e.id, e.address, Date.now() / 1e3 - e.end_time < r.a.MAX_FILL_LOTTERY_ADDRESS_TIME, "在" + a.a.lastFillAddressTime(e.end_time) + "之前可以修改奖品寄送地址") : this.chooseAddress(e.id)
          },
          onClickAddress: function(t) {
            var e = t.currentTarget.dataset.index,
              o = this.data.historyLotteryLuckMen[e];
            this.logInfo("onClickAddress", {
              index: e,
              lotteryId: o.id
            }), !o.isFillLotteryAddress && Date.now() / 1e3 - o.end_time > r.a.MAX_FILL_LOTTERY_ADDRESS_TIME ? wx.showToast({
              title: "开奖已超过 24 小时，未填写寄奖地址，已视为放弃",
              icon: "none"
            }) : (this.addReportMMData({
              actionType: 4,
              subActionType: 25,
              lotteryId: o.id,
              lotteryParticipateType: o.participate_type
            }), this.storeSetData({
              pictureInPictureMode: "",
              isForbidReportEnter: !0
            }), o.address && o.address.address ? this.viewAddress(o.id, o.address, Date.now() / 1e3 - o.end_time < r.a.MAX_FILL_LOTTERY_ADDRESS_TIME, "在" + a.a.lastFillAddressTime(o.end_time) + "之前可以修改奖品寄送地址") : this.chooseAddress(o.id))
          },
          onClickPhone: function(t) {
            var e = t.currentTarget.dataset.index,
              o = this.data.historyLotteryLuckMen[e];
            this.logInfo("onClickPhone", {
              index: e,
              lotteryId: o.id
            }), !o.isFillLotteryPhone && Date.now() / 1e3 - o.end_time > r.a.MAX_FILL_LOTTERY_ADDRESS_TIME ? wx.showToast({
              title: "开奖已超过 24 小时，未填写手机号，已视为放弃",
              icon: "none"
            }) : (this.addReportMMData({
              actionType: 4,
              subActionType: 25,
              lotteryId: o.id,
              lotteryParticipateType: o.participate_type
            }), "horizontal" === this.data.screenType && this.liveManager.setPageOrientation("portrait"), this.storeSetData({
              showLowVersionFillPhone: !0,
              fillPhoneLotteryPush: o,
              isFillHelpRankPhone: !1
            }))
          },
          onRefreshLotteryResult: function() {
            this.handleOpenLottery(this.data.lotteryPush.id)
          },
          clickEnterContact: function() {
            var t = this;
            if ((wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) !== r.a.SHARE_FRIENDS_SCENE) {
              var e, o = this.storeData,
                a = o.roomTitle,
                s = o.roomImg,
                n = o.curOpenid,
                c = o.curLiveStatusCode,
                d = o.roomId,
                p = o.roomAppid,
                y = o.customParams,
                l = o.openShareTicket,
                h = o.closePictureInPictureMode;
              e = c === r.a.LIVE_STATUS.NOT_START ? "即将直播：".concat(a) : c === r.a.LIVE_STATUS.END || c === r.a.LIVE_STATUS.REPLAY ? a : "正在直播：".concat(a);
              var m = "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(d, "&room_appid=").concat(p, "&type=17&share_openid=").concat(n, "&custom_params=").concat(y, "&close_picture_in_picture_mode=").concat(h ? 1 : 0, "&open_share_ticket=").concat(l);
              i.a.enterContact({
                appId: this.storeData.roomAppid,
                showMessageCard: !0,
                sendMessageTitle: e,
                sendMessageImg: s,
                sendMessagePath: m
              }).then((function(e) {
                t.addReportMMData({
                  actionType: 4,
                  subActionType: 40
                }), console.log("enterContact res", e)
              })).catch((function(e) {
                "string" == typeof e && e.includes("not support") || t.logError("onEnterContact API error", e)
              }))
            } else i.a.tipsSimple("请前往小程序使用完整服务")
          },
          onCreateLotteryTeam: function() {
            var t = this.storeData.lotteryId;
            this.joinLotteryTeam(t)
          },
          onJoinLotteryTeam: function() {
            var t = this.storeData,
              e = t.lotteryId,
              o = t.lotteryTeamId;
            this.joinLotteryTeam(e, o)
          },
          onViewMyLotteryTeam: function() {
            var t = this.storeData,
              e = t.lotteryId,
              o = t.myLotteryTeamId;
            this.storeSetData({
              lotteryTeamId: o
            }), this.getLotteryTeam(e, o)
          },
          onLotteryEvent: function(t) {
            var e = t.detail.eventName;
            this.logInfo("[lottery-oper] onLotteryEvent", t), "onCopy" === e ? this.onCopy({
              currentTarget: {
                dataset: {
                  token: t.detail.token
                }
              }
            }) : "onClickLotteryAddress" === e && this.onClickLotteryAddress()
          }
        }
      })
    },
    67: function(t, e, o) {
      t.exports = o(308)
    }
  },
  entries: [
    [67, 0, 1, 3, 6, 15, 2, 4, 5, 7, 9, 12, 17, 24, 23]
  ]
}]);
