module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/15.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/12.js"), require("../../_commons/17.js"), {
  ids: [67],
  modules: {
    300: function(t, e, o) {
      o.r(e);
      var r = o(27),
        a = o.n(r),
        i = o(35),
        n = o.n(i),
        s = o(7),
        c = o.n(s),
        y = o(5),
        h = o(23),
        l = o(0),
        u = o(3),
        m = o(1);

      function L(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), o.push.apply(o, r)
        }
        return o
      }

      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2 ? L(Object(o), !0).forEach((function(e) {
            c()(t, e, o[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : L(Object(o)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
          }))
        }
        return t
      }
      Component({
        behaviors: [y.a, h.a],
        data: {
          componentName: "lottery",
          canvas: "",
          lotteryId: "",
          lotteryType: "",
          showLotteryIcon: !1,
          isSupportAnimation: !1,
          lotteryCountTime: "",
          showLotteryCountTime: !1,
          showLotteryOper: !1,
          isLotteryOpen: !1,
          isPlayLotteryAnimation: !1,
          showRecord: !1,
          isJoinedLotteryTeam: !1,
          lotteryTeamMembers: []
        },
        lifetimes: {
          detached: function() {
            clearTimeout(this.lotteryCountTime), this.lotteryAnimation = null
          }
        },
        methods: {
          onStoreDataReady: function() {
            var t = this;
            this.storeData.leftLotteryTime > 0 && this.storeData.curLiveStatusCode === l.a.LIVE_STATUS.END && (this.storeSetData({
              showLotteryCountTime: !1,
              lotteryCountTime: "",
              showLotteryOper: !1
            }), this.handleLotteryFinish(this.storeData.lotteryId)), setTimeout((function() {
              t.createLotteryAnimation()
            }), 1e3)
          },
          clickLottery: function() {
            var t = this;
            if ((wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) !== l.a.SHARE_FRIENDS_SCENE) {
              var e = this.storeData,
                o = e.showPushComment,
                r = e.showStorePanel,
                a = e.showProfileModal,
                i = e.showForbidUserList,
                n = e.curLiveStatusCode,
                s = e.isClearScreen,
                c = e.showLotteryOper,
                y = e.showLotteryIcon,
                h = e.lotteryPush,
                u = e.myLotteryTeamId;
              if (o || r || a || i || c) return this.logInfo("点击抽奖，关闭弹窗", {
                showPushComment: o,
                showStorePanel: r,
                showProfileModal: a,
                showForbidUserList: i
              }), void this.storeSetData({
                showPushComment: !1,
                showStorePanel: !1,
                showProfileModal: !1,
                showForbidUserList: !1
              });
              if (!s && !c && y) {
                var L = this.data,
                  d = L.isLotteryOpen,
                  p = L.lotteryId;
                2 != +h.participate_type || d || n === l.a.LIVE_STATUS.END || n === l.a.LIVE_STATUS.REPLAY ? this.storeSetData({
                  showLotteryOper: !0
                }) : this.liveManager.getUserInfo().then((function(e) {
                  t.joinLotteryTeam(p, u), t.storeSetData({
                    showLotteryOper: !0
                  })
                })), this.liveManager.addReportMMData({
                  actionType: 4,
                  subActionType: 21,
                  lotteryId: p,
                  lotteryParticipateType: h.participate_type
                })
              }
            } else m.a.tipsSimple("请前往小程序使用完整服务")
          },
          isNotLotteryTeamShareObserver: function(t) {
            if (t) {
              var e = this.storeData.lotteryId;
              this.joinLotteryTeam(e)
            }
          },
          lotteryTeamMembersObserver: function(t) {
            if (t && t.length) {
              var e = this.storeData,
                o = e.roomAppid,
                r = e.roomId,
                a = e.curOpenid,
                i = e.lotteryPush,
                n = 2 == +i.participate_type,
                s = t.find((function(t) {
                  return t.openid === a
                })),
                c = !1;
              n && s && (c = 1 !== t.length || !!wx.getStorageSync("isOnShare-".concat(o, "-").concat(r, "-").concat(i.id))), this.setData({
                isJoinedLotteryTeam: c
              })
            }
          },
          roomDynamicInfoObserver: function(t) {
            var e = this;
            try {
              if (!t) return;
              var o = this.getCurLotteryId(t),
                r = this.storeData.lastGetLotteryId;
              if (null === o || o === r) return;
              this.logInfo("[抽奖] lotteryId", o), u.a.getLotteryById(d(d({}, this.getReqBase()), {}, {
                content: o
              })).then((function(t) {
                e.logInfo("[抽奖] lotteryPush", t);
                var a = 2 == +t.participate_type;
                e.handleLotteryToast(o, r, a), e.isAlreadyPlayOpenLottery = !1, e.storeSetData({
                  showLotteryComplete: !1,
                  showLotteryLoading: !0,
                  lotteryId: o,
                  lotteryPush: t,
                  lotteryTeamMembers: []
                });
                var i = +t.status;
                if (e.handleNeverGetLotteryResult(o, i), i !== l.a.LOTTERY_STATUS.LOTTERY_PUSHED && i !== l.a.LOTTERY_STATUS.LOTTERY_NOT_PUSH && e.storeSetData({
                    lastGetLotteryId: o
                  }), i === l.a.LOTTERY_STATUS.LOTTERY_FINISHED || e.liveManager.data.curLiveStatusCode === l.a.LIVE_STATUS.END) e.handleLotteryFinish(o);
                else if (e.ifParticipated(o, a), e.handleLotteryUnFinish(o, t), a) {
                  var n = e.storeData,
                    s = n.isEnterLotteryTeamFromShare,
                    c = n.pathLotteryId,
                    y = n.lotteryTeamId,
                    h = n.showLotteryOper;
                  s && o === c ? e.getLotteryTeam(o, y, !0) : h ? e.joinLotteryTeam(o) : e.getLotteryTeam(o)
                } else e.storeSetData({
                  showLotteryComplete: !0,
                  showLotteryLoading: !1
                })
              }))
            } catch (t) {
              this.logError("[lottery] logic err", t), this.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
            }
          },
          handleLotteryToast: function(t, e, o) {
            var r = this,
              a = this.storeData,
              i = a.curLiveStatusCode,
              n = a.curOpenid,
              s = a.pathLotteryId || this.storeData.cacheLotteryId;
            if (i === l.a.LIVE_STATUS.LIVE && -1 === e && t !== s) {
              if (this.storeSetData({
                  cacheLotteryId: t
                }), 0 === s) return;
              u.a.getLotteryResult(d(d({}, this.getReqBase()), {}, {
                content: s
              })).then((function(e) {
                var a = e.current && e.current.luckmen || [],
                  i = !1,
                  c = r;
                if (a.forEach((function(e) {
                    e.openid === n && (i = !0, setTimeout((function() {
                      !c.storeData.showLotteryOper && m.a.tipsSimple("请在“抽奖礼盒-中奖记录”中查看中奖信息", 3e3), c.logInfo("请在“抽奖礼盒-中奖记录”中查看中奖信息", t, s)
                    }), 3e3))
                  })), !i)
                  if (o) {
                    var y = {
                      team_id: 0,
                      activity_id: s,
                      type: 1,
                      extension: "1",
                      cache_option: l.a.LIVE_STATUS.END || l.a.LIVE_STATUS.REPLAY ? 0 : 1
                    };
                    u.a.getLotteryTeam(d(d({}, c.getReqBase()), {}, {
                      content: y
                    })).then((function(t) {
                      var e = t && +t.team_id || 0;
                      c.handleNotWinLotteryToast(s, e)
                    })).catch((function(t) {
                      console.warn("handleLotteryToast getLotteryTeam fail", t)
                    }))
                  } else c.handleNotWinLotteryToast(s)
              }))
            }
          },
          handleNotWinLotteryToast: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              o = this;
            u.a.getParticipated(d(d({}, this.getReqBase()), {}, {
              content: {
                lottery_id: t,
                team_id: e
              }
            })).then((function(e) {
              +e ? setTimeout((function() {
                !o.storeData.showLotteryOper && m.a.tipsSimple("上次抽奖已结束", 3e3), o.logInfo("上次抽奖已结束", t)
              }), 3e3) : setTimeout((function() {
                !o.storeData.showLotteryOper && m.a.tipsSimple("上次参与的抽奖已结束，很遗憾未中奖", 3e3), o.logInfo("上次参与的抽奖已结束，很遗憾未中奖", t)
              }), 3e3)
            }))
          },
          ifParticipated: function(t, e) {
            var o = this;
            if (e) {
              var r = {
                team_id: 0,
                activity_id: t,
                type: 1,
                extension: "1",
                cache_option: l.a.LIVE_STATUS.END || l.a.LIVE_STATUS.REPLAY ? 0 : 1
              };
              u.a.getLotteryTeam(d(d({}, this.getReqBase()), {}, {
                content: r
              })).then((function(e) {
                var r = e && +e.team_id || 0,
                  a = e && e.members || [];
                o.storeSetData({
                  myLotteryTeamId: r,
                  myLotteryTeamMembers: a
                }), u.a.getParticipated(d(d({}, o.getReqBase()), {}, {
                  content: {
                    lottery_id: t,
                    team_id: r
                  }
                })).then((function(t) {
                  +t || o.storeSetData({
                    lotteryPush: d(d({}, o.liveManager.data.lotteryPush), {}, {
                      isParticipate: !0
                    })
                  })
                }))
              })).catch((function(t) {
                console.warn("ifParticipated getLotteryTeam fail", t)
              }))
            } else u.a.getParticipated(d(d({}, this.getReqBase()), {}, {
              content: {
                lottery_id: t,
                team_id: 0
              }
            })).then((function(t) {
              +t || o.storeSetData({
                lotteryPush: d(d({}, o.liveManager.data.lotteryPush), {}, {
                  isParticipate: !0
                })
              })
            }))
          },
          handleNeverGetLotteryResult: function(t, e) {
            var o = this;
            !this.storeData.hasGotLotteryResult && e <= l.a.LOTTERY_STATUS.LOTTERY_RUNNING && u.a.getLotteryResult(d(d({}, this.getReqBase()), {}, {
              content: t
            })).then(function() {
              var t = n()(a.a.mark((function t(e) {
                var r, i;
                return a.a.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      if (o.logInfo("handleNeverGetLotteryResult, handleLotteryFinish", e), o.storeSetData({
                          isHistoryLuck: e.is_history_luck,
                          hasGotLotteryResult: !0
                        }), r = [], !e.is_history_luck) {
                        t.next = 9;
                        break
                      }
                      return t.next = 6, u.a.getLotteryResultHistory(d({}, o.getReqBase()));
                    case 6:
                      i = t.sent, o.logInfo("getLotteryResultHistory", i), i.history && (r = o._handletLotteryHisteryRecord(i.history || []));
                    case 9:
                      r.length > 0 && o.storeSetData({
                        historyLotteryLuckMen: r
                      });
                    case 10:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })));
              return function(e) {
                return t.apply(this, arguments)
              }
            }())
          }
        }
      })
    },
    66: function(t, e, o) {
      t.exports = o(300)
    }
  },
  entries: [
    [66, 0, 1, 3, 6, 15, 2, 4, 5, 7, 12, 17]
  ]
}]);
