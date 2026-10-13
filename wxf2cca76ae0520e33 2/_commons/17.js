require("../@babel/runtime/helpers/Arrayincludes");
module.exports = {
  ids: [17],
  modules: {
    23: function(t, e, o) {
      var r = o(19),
        a = o.n(r),
        i = o(27),
        n = o.n(i),
        s = o(35),
        c = o.n(s),
        y = o(7),
        l = o.n(y),
        h = o(2),
        d = o(0),
        p = o(3),
        u = o(1);

      function m(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), o.push.apply(o, r)
        }
        return o
      }

      function L(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2 ? m(Object(o), !0).forEach((function(e) {
            l()(t, e, o[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : m(Object(o)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
          }))
        }
        return t
      }
      var g = o(32);
      e.a = Behavior({
        methods: {
          createLotteryAnimation: function() {
            var t = this;
            if (this.storeData.isSupportAnimation || !this.lotteryAnimation) {
              var e = new g.default;
              this.logInfo("[抽奖] createLotteryAnimation"), this.createSelectorQuery().select("#lottery__canvas").fields({
                size: !0,
                node: !0
              }, (function(o) {
                if (!o || !o.node) return t.logInfo("[抽奖] createLotteryAnimation no canvas node", o), t._innerCreateCnt = t._innerCreateCnt ? t._innerCreateCnt + 1 : 1, void(t._innerIsAlive && t._innerCreateCnt < 3 && t.createLotteryAnimation());
                var r = o.node,
                  a = r.getContext("2d"),
                  i = wx.getSystemInfoSync().pixelRatio;
                r.width = o.width * i, r.height = o.height * i, t.data.canvas = r, e.setup(r);
                var n = e.loadAnimation({
                  loop: !1,
                  autoplay: !1,
                  renderer: "canvas",
                  path: "https://res.wx.qq.com/wxaliveplayer/htdocs/lottery530aaa.json",
                  rendererSettings: {
                    context: a
                  }
                });
                t.lotteryAnimation = n, t.logInfo("[抽奖] createLotteryAnimation finish")
              })).exec()
            }
          },
          playLotteryAnimation: function(t) {
            var e = this;
            !this.data.isClearScreen && this.lotteryAnimation && this.storeData.isSupportAnimation && ("first-drop-lottery" === t ? (this.storeSetData({
              isPlayLotteryAnimation: !0
            }), this.lotteryAnimation.playSegments([0, 55], !0), this.lotteryAnimation.onComplete = function() {
              e.storeSetData({
                isPlayLotteryAnimation: !1
              })
            }) : "second-drop-lottery" === t ? (this.storeSetData({
              isPlayLotteryAnimation: !0
            }), this.lotteryAnimation.playSegments([
              [122, 144],
              [0, 55]
            ], !0), this.lotteryAnimation.onComplete = function() {
              e.storeSetData({
                isPlayLotteryAnimation: !1
              })
            }) : "open-lottery" === t && (this.storeSetData({
              isPlayLotteryAnimation: !0
            }), this.lotteryAnimation.playSegments([
              [56, 95, {
                duration: 5
              }],
              [96, 121]
            ], !0), this.lotteryAnimation.onComplete = function() {
              e.storeSetData({
                isPlayLotteryAnimation: !1
              })
            }))
          },
          getCurLotteryId: function(t) {
            try {
              var e = void 0,
                o = t.lottery_msg.list[0];
              return o && o.msg_id && o.msg_content && +this.liveManager.data.lotteryVersion != +o.msg_id && (this.liveManager.data.lotteryVersion = o.msg_id, e = (JSON.parse(o.msg_content) || {}).id), void 0 === e ? null : e
            } catch (t) {
              return null
            }
          },
          handleLotteryUnFinish: function(t, e) {
            var o = e.end_time - this.liveManager.getServerTime(),
              r = 60 * e.duration - o < 8;
            if (!isNaN(o)) {
              this.storeData.leftLotteryTime = o;
              var a = "",
                i = +e.status;
              i === d.a.LOTTERY_STATUS.LOTTERY_ERROR || o <= 0 && i === d.a.LOTTERY_STATUS.LOTTERY_RUNNING ? a = "error" : i === d.a.LOTTERY_STATUS.LOTTERY_RUNNING && (a = "collect");
              var n = this.data.showLotteryIcon;
              this.storeSetData({
                lotteryId: t,
                lotteryPush: e,
                showLotteryIcon: !0,
                lotteryType: a,
                lotteryErrorWording: "error" === a ? "抽奖结果迷路了" : "",
                showLotteryCountTime: "error" !== a
              }), this.logInfo("[抽奖] 状态", a, e), this.addReportMMData({
                actionType: 4,
                subActionType: 20,
                lotteryId: t,
                lotteryParticipateType: e.participate_type
              }), "error" !== a ? (n ? r && this.playLotteryAnimation("second-drop-lottery") : r && this.playLotteryAnimation("first-drop-lottery"), this.handleLotteryCountTime(t, e.end_time)) : this.addReportMMData({
                actionType: 4,
                subActionType: 29,
                lotteryId: t,
                lotteryParticipateType: e.participate_type
              })
            }
          },
          handleLotteryCountTime: function(t, e) {
            var o = this,
              r = e - this.liveManager.getServerTime();
            if (r <= 0) this.handleOpenLottery(t, r);
            else {
              if (this.storeData.curLiveStatusCode === d.a.LIVE_STATUS.END) return this.storeSetData({
                showLotteryCountTime: !1,
                lotteryCountTime: "",
                showLotteryOper: !1
              }), void this.handleLotteryFinish(t);
              var a = h.a.formatDuration(r).substr(3);
              this.storeSetData({
                showLotteryCountTime: !0,
                lotteryCountTime: a
              }), clearTimeout(this.lotteryCountTime), this.lotteryCountTime = setTimeout((function() {
                o.handleLotteryCountTime(t, e)
              }), 1e3)
            }
          },
          handleOpenLottery: function(t) {
            var e = this,
              o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            this.storeSetData({
              showLotteryCountTime: !1,
              lotteryCountTime: ""
            }), this.logInfo("[抽奖倒计时结束] 关闭倒计时"), setTimeout((function() {
              e.storeData.lotteryId == t && p.a.getLotteryById(L(L({}, e.getReqBase()), {}, {
                content: t
              })).then((function(o) {
                try {
                  e.logInfo("[抽奖倒计时结束] 查询结果 succ", o.status), +o.status === d.a.LOTTERY_STATUS.LOTTERY_FINISHED ? (e.logInfo("[抽奖倒计时结束] getLotteryResult"), e.handleLotteryFinish(t, !0)) : (e.logError("[抽奖倒计时结束] 抽奖结果迷路了"), e.storeSetData({
                    showLotteryOper: !0,
                    showLotteryCountTime: !1,
                    lotteryType: "error",
                    lotteryErrorWording: "抽奖结果迷路了"
                  }), e.addReportMMData({
                    actionType: 4,
                    subActionType: 20,
                    lotteryId: t,
                    lotteryParticipateType: o.participate_type
                  }))
                } catch (t) {
                  e.logError("[抽奖倒计时结束] getLotteryById logic error", t), e.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
                }
              })).catch((function(t) {
                e.logError("[抽奖倒计时结束] 查询结果 fail", t), e.storeSetData({
                  showLotteryIcon: !0,
                  showLotteryOper: !0,
                  showLotteryCountTime: !1,
                  lotteryType: "error",
                  lotteryErrorWording: "呀，你的网络走神了"
                })
              }))
            }), this.isAlreadyPlayOpenLottery || o < -1 ? 0 : 5e3), this.isAlreadyPlayOpenLottery || (this.isAlreadyPlayOpenLottery = !0, o >= -1 && (this.playLotteryAnimation("open-lottery"), this.logInfo("[抽奖倒计时结束] 结束动画")))
          },
          handleLotteryFinish: function(t) {
            var e = this,
              o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = this.storeData,
              a = r.roomAppid,
              i = r.roomId,
              s = r.curLiveStatusCode,
              y = r.showLotteryOper,
              l = r.showRecord,
              h = L({}, this.storeData.lotteryPush);
            p.a.getLotteryResult(L(L({}, this.getReqBase()), {}, {
              content: t
            })).then(function() {
              var r = c()(n.a.mark((function r(c) {
                var m, g, T, f, S, v, _, A, I;
                return n.a.wrap((function(r) {
                  for (;;) switch (r.prev = r.next) {
                    case 0:
                      if (console.warn("handleLotteryFinish", c), e.logInfo("handleLotteryFinish", c), r.prev = 2, e.storeSetData({
                          showPushComment: !1,
                          showLotteryComplete: !0,
                          showLotteryLoading: !1,
                          isHistoryLuck: c.is_history_luck,
                          hasGotLotteryResult: !0
                        }), m = e._getCurLotteryLuckMen(c.current || [], h), g = [], s !== d.a.LIVE_STATUS.END && s !== d.a.LIVE_STATUS.REPLAY || !c.is_history_luck) {
                        r.next = 12;
                        break
                      }
                      return r.next = 9, p.a.getLotteryResultHistory(L({}, e.getReqBase()));
                    case 9:
                      T = r.sent, e.logInfo("getLotteryResultHistory", T), T.history && (g = e._handletLotteryHisteryRecord(T.history || []));
                    case 12:
                      s === d.a.LIVE_STATUS.LIVE || s === d.a.LIVE_STATUS.PAUSE || s === d.a.LIVE_STATUS.ERROR || h.isWinLottery || g.length > 0 ? (t === h.id && (f = e, S = "hasShowLotteryOper-".concat(a, "-").concat(i, "-").concat(t), v = !!wx.getStorageSync(S), _ = !v && (h.isWinLottery || !h.isWinLottery && 2 === h.participate_type) || o ? !l : y, A = {
                        showLotteryIcon: !0,
                        showLotteryOper: _,
                        myLotteryTeamId: 0,
                        lotteryType: "result",
                        lotteryPush: h,
                        curLotteryLuckMen: m
                      }, g.length > 0 && (A.historyLotteryLuckMen = g), 2 == +h.participate_type ? (I = {
                        team_id: 0,
                        activity_id: t,
                        type: 1,
                        extension: "1",
                        cache_option: d.a.LIVE_STATUS.END || d.a.LIVE_STATUS.REPLAY ? 0 : 1
                      }, p.a.getLotteryTeam(L(L({}, f.getReqBase()), {}, {
                        content: I
                      })).then((function(o) {
                        var r = o && +o.team_id || 0,
                          a = o && o.members || [];
                        f.storeSetData({
                          myLotteryTeamMembers: a
                        }), p.a.getParticipated(L(L({}, f.getReqBase()), {}, {
                          content: {
                            lottery_id: t,
                            team_id: r
                          }
                        })).then((function(o) {
                          h.isParticipate = !+o, e.storeData.lotteryId > 0 && e.storeData.lotteryId != t || (f.storeSetData(A), wx.setStorageSync(S, !0))
                        })).catch((function(t) {
                          f.storeSetData(A), wx.setStorageSync(S, !0)
                        }))
                      })).catch((function(t) {
                        console.warn("handleLotteryFinish getLotteryTeam fail", t), f.storeSetData(A), wx.setStorageSync(S, !0)
                      }))) : p.a.getParticipated(L(L({}, f.getReqBase()), {}, {
                        content: {
                          lottery_id: t,
                          team_id: 0
                        }
                      })).then((function(o) {
                        h.isParticipate = !+o, e.storeData.lotteryId > 0 && e.storeData.lotteryId != t || (f.storeSetData(A), wx.setStorageSync(S, !0))
                      })).catch((function(t) {
                        f.storeSetData(A), wx.setStorageSync(S, !0)
                      }))), e.addReportMMData({
                        actionType: 4,
                        subActionType: 20,
                        lotteryId: t,
                        lotteryParticipateType: h.participate_type
                      })) : e.storeSetData({
                        showLotteryIcon: !1,
                        showLotteryOper: !1
                      }), r.next = 20;
                      break;
                    case 15:
                      r.prev = 15, r.t0 = r.catch(2), e.logError("[抽奖结果] Request.getLotteryResult logic error", r.t0), u.a.tipsSimple("异常错误，请反馈"), e.reportPerformance("LOGIC_ERROR", 1, "pluginVersion");
                    case 20:
                    case "end":
                      return r.stop()
                  }
                }), r, null, [
                  [2, 15]
                ])
              })));
              return function(t) {
                return r.apply(this, arguments)
              }
            }()).catch((function(t) {
              e.storeSetData({
                showPushComment: !1,
                showLotteryComplete: !0,
                showLotteryLoading: !1,
                lotteryType: "error",
                lotteryErrorWording: "呀，你的网络走神了"
              })
            }))
          },
          _getCurLotteryLuckMen: function(t, e) {
            var o = [],
              r = t && t.luckmen || [],
              i = this.storeData.curOpenid,
              n = this.liveManager.getCurrentUserInfo();
            e.isWinLottery = !1, e.headimg = h.a.avatarToSmall(n && n.avatar, 132) || "";
            var s = 2 == +e.participate_type;
            if (s)
              for (var c = 0; c < r.length - 1; c++)
                for (var y = c + 1; y < r.length; y++) r[c].team_id === r[y].team_id && (r.splice(c + 1, 0, r[y]), r.splice(y + 1, 1));
            return r.forEach((function(t) {
              var r = L(L({}, t), {}, {
                isFillLotteryAddress: !(!t.address || !t.address.address),
                isFillLotteryPhone: !(!t.address || !t.address.phone),
                headimg: h.a.avatarToSmall(t.headimg),
                overTime: Date.now() / 1e3 - e.end_time > d.a.MAX_FILL_LOTTERY_ADDRESS_TIME
              });
              t.openid === i ? (n && n.avatar && (r.headimg = n.avatar), o.unshift(r), r.headimg = h.a.avatarToSmall(r.headimg, 132), Object.assign(e, L({
                isWinLottery: !0,
                isParticipate: !0
              }, r))) : (r.nickname = h.a.encryptNickname(r.nickname), o.push(r))
            })), s && o[0] && o[0].openid === i && (o.forEach((function(t, e) {
              t.team_id === o[0].team_id && (o.splice(1, 0, t), o.splice(e + 1, 1))
            })), o.splice.apply(o, [1, 1].concat(a()(o.splice(0, 1, o[1]))))), o.length > 0 && this.logInfo("[抽奖结果]", {
              result: o,
              lotteryPush: e
            }), o
          },
          getLotteryHistoryRecord: function() {
            var t = this;
            p.a.getLotteryResultHistory(L({}, this.getReqBase())).then((function(e) {
              var o = t._handletLotteryHisteryRecord(e.history || []);
              t.storeSetData({
                historyLotteryLuckMen: o
              })
            }))
          },
          _handletLotteryHisteryRecord: function(t) {
            var e = this,
              o = [];
            return t.forEach((function(t) {
              t.luckmen = t.luckmen || [], t.luckmen.forEach((function(r) {
                r.openid === e.liveManager.data.curOpenid && o.push({
                  name: t.name,
                  obtain_type: t.obtain_type,
                  id: t.id,
                  token: r.token,
                  address: r.address,
                  isFillLotteryAddress: !(!r.address || !r.address.address),
                  isFillLotteryPhone: !(!r.address || !r.address.phone),
                  overTime: Date.now() / 1e3 - t.end_time > d.a.MAX_FILL_LOTTERY_ADDRESS_TIME,
                  end_time: t.end_time
                })
              }))
            })), o.length && this.logInfo("[抽奖] 中奖记录", o), o
          },
          viewAddress: function(t, e) {
            var o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
            this.storeSetData({
              pictureInPictureMode: "",
              isForbidReportEnter: !0,
              showLowVersionFillPhone: !1
            });
            var a = {
                weapp_name: this.liveManager.data.weappName,
                address: e.address || "",
                district: e.district || "",
                phone: e.phone || "",
                postcode: e.postcode || "",
                receive_name: e.receive_name || "",
                isWxaMode: this.liveManager.data.isWxaMode,
                canModify: o,
                tips: r
              },
              i = this,
              n = (this.storeData.urlPathPrefix || "/") + "wxlive-components/ext-player/address-preview/address-preview";
            wx.navigateTo({
              url: "".concat(n, "?livePlayerOptions=").concat(encodeURIComponent(JSON.stringify(a))),
              events: {
                acceptDataFromAddressPreviewPage: function(e) {
                  i.fillLotteryAddress(e, t)
                }
              }
            })
          },
          fillLotteryAddress: function(t, e) {
            var o = this;
            t && t.address && (this.storeSetData({
              showLowVersionFillPhone: !1
            }), p.a.fillLotteryAddress(L(L({}, this.getReqBase()), {}, {
              content: {
                lottery_id: e,
                address: t
              }
            })).then((function(r) {
              var a = o.storeData,
                i = a.lotteryPush,
                n = a.historyLotteryLuckMen;
              if (i.id === e) {
                var s = L(L({}, i), {}, {
                  isFillLotteryAddress: !0,
                  isFillLotteryPhone: !!t.phone,
                  address: t
                });
                o.storeSetData({
                  lotteryPush: s
                })
              }
              var c = !1,
                y = n.map((function(o) {
                  return o.id === e ? (c = !0, L(L({}, o), {}, {
                    isFillLotteryAddress: !0,
                    isFillLotteryPhone: !!t.phone,
                    address: t
                  })) : o
                }));
              c && o.storeSetData({
                historyLotteryLuckMen: y
              })
            })).catch((function(t) {
              u.a.tipsSimple("存储地址失败，请重试")
            })))
          },
          chooseAddress: function(t) {
            var e = this;
            this.storeSetData({
              pictureInPictureMode: "",
              isForbidReportEnter: !0
            });
            var o = this.liveManager.data.isWxaMode ? "chooseAddress" : "chooseAddressForPlugin";
            u.a[o]().then((function(r) {
              e.logInfo("[抽奖面板] wxapi.".concat(o, " succ"), r), e.fillLotteryAddress(r, t)
            })).catch((function(t) {
              "string" == typeof t && (t.includes("cancel") || t.includes("not support")) ? e.logInfo("[抽奖面板] wxapi.".concat(o, " 用户取消"), t) : e.logError("[抽奖面板] wxapi.".concat(o, " err"), t)
            }))
          },
          joinLotteryTeam: function(t) {
            var e = this,
              o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              r = this;
            r.liveManager.getUserInfo().then((function(a) {
              var i = r.storeData,
                n = i.lotteryTeamMembers,
                s = i.curOpenid;
              if (n.find((function(t) {
                  return t.openid === s
                }))) e.getLotteryTeamInfo();
              else {
                var c = {
                  team_id: o,
                  activity_id: t,
                  type: 1,
                  cache_option: d.a.LIVE_STATUS.END || d.a.LIVE_STATUS.REPLAY ? 0 : 1
                };
                e.storeSetData({
                  showLotteryComplete: !1,
                  showLotteryLoading: !0
                }), clearInterval(e.getLotteryTeamTimer), p.a.joinLotteryTeam(L(L({}, r.getReqBase()), {}, {
                  content: c
                })).then((function(e) {
                  r.getLotteryTeam(t, o)
                })).catch((function(e) {
                  (e && (+e.ret || +e.err_code) || e.errMsg && +e.errMsg.split(":")[2]) === d.a.LOTTERY_TEAM.ERR_DO_NOT_JOIN_TEAM ? r.getLotteryTeam(t, o) : (u.a.tipsSimple("加入队伍失败"), r.storeSetData({
                    showLotteryComplete: !0,
                    showLotteryLoading: !1
                  }))
                }))
              }
            })).catch((function(t) {
              u.a.tipsSimple("未授权信息，加入队伍失败")
            }))
          },
          getLotteryTeam: function(t) {
            var e = this,
              o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (t) {
              var a = this.storeData,
                i = a.isEnterLotteryTeamFromShare,
                n = a.curOpenid,
                s = {
                  team_id: o,
                  activity_id: t,
                  type: 1,
                  extension: i ? "1" : "",
                  cache_option: d.a.LIVE_STATUS.END || d.a.LIVE_STATUS.REPLAY ? 0 : 1
                };
              clearInterval(this.getLotteryTeamTimer), p.a.getLotteryTeam(L(L({}, this.getReqBase()), {}, {
                content: s
              })).then((function(o) {
                var a = o.team_id,
                  c = o.members || [],
                  y = c.find((function(t) {
                    return t.openid === n
                  })) ? "joined" : "joinReady",
                  l = o.extension && JSON.parse(o.extension),
                  d = l && +l.team_id || 0,
                  p = l && l.members || [];
                if (d === a || !i && 0 === d) c.forEach((function(t) {
                  t.avatar = t.headimg ? t.headimg : t.avatar, t.openid !== n ? t.nickname = h.a.encryptNickname(t.nickname) : y = "joined"
                })), 3 === c.length && (y = "joinComplete");
                else if (p.length > 0 && 0 === c.length) y = 3 === p.length ? "joinComplete" : "joined", a = d, (c = p).forEach((function(t) {
                  t.openid !== n && (t.nickname = h.a.encryptNickname(t.nickname))
                })), r = !1, setTimeout((function() {
                  u.a.tipsSimple("队伍已解散", 3e3), e.logInfo("队伍已解散")
                }), 3e3);
                else {
                  if (0 === p.length && 0 === c.length && i) return r = !1, setTimeout((function() {
                    u.a.tipsSimple("队伍已解散", 3e3), e.logInfo("队伍已解散")
                  }), 3e3), void e.joinLotteryTeam(t);
                  p.length >= 2 && c.length < 3 ? y = "joinOther" : p.length > 0 && 3 === c.length ? y = "joinWithFull" : 0 === p.length && 3 === c.length && (y = "joinNoFull")
                }
                e.storeSetData({
                  showLotteryOper: !!r || e.storeData.showLotteryOper,
                  showLotteryComplete: !0,
                  showLotteryLoading: !1,
                  lotteryTeamId: a,
                  lotteryTeamStatus: y,
                  lotteryTeamMembers: c
                }), console.warn("getLotteryTeam succ", s, o, a, y, c), e.logWarn("getLotteryTeam succ", s, o, a, y, c), e.getLotteryTeamInfo()
              })).catch((function(t) {
                (t && (+t.ret || +t.err_code) || t.errMsg && +t.errMsg.split(":")[2]) === d.a.LOTTERY_TEAM.ERR_GET_TEAM_NO_EXIST ? e.storeSetData({
                  showLotteryOper: !!r || e.storeData.showLotteryOper,
                  showLotteryComplete: !0,
                  showLotteryLoading: !1,
                  lotteryTeamStatus: "joinReady",
                  lotteryTeamId: 0,
                  lotteryTeamMembers: []
                }) : e.storeSetData({
                  showLotteryOper: !!r || e.storeData.showLotteryOper,
                  showLotteryComplete: !0,
                  showLotteryLoading: !1
                })
              }))
            }
          },
          getLotteryTeamInfo: function() {
            var t = this,
              e = this.storeData,
              o = e.roomAppid,
              r = e.roomId,
              a = e.lotteryPush,
              i = e.isLotteryOpen,
              n = e.showLotteryOper,
              s = e.curLiveStatusCode,
              c = e.curOpenid,
              y = a && 2 == +a.participate_type,
              l = this.storeData.lotteryTeamMembers || [],
              h = !1;
            l.find((function(t) {
              return t.openid === c
            })) && (h = 1 === l.length ? !!wx.getStorageSync("isOnShare-".concat(o, "-").concat(r, "-").concat(a.id)) : 2 === l.length), clearInterval(this.getLotteryTeamTimer), s !== d.a.LIVE_STATUS.END && s !== d.a.LIVE_STATUS.REPLAY && y && (h || n && l.length < 3) && !i && (this.getLotteryTeamTimer = setInterval((function() {
              var e = t.storeData,
                o = e.lotteryId,
                r = e.lotteryTeamId;
              t.getLotteryTeam(o, r)
            }), d.a.LOTTERY_TEAM_POLLING_TIME))
          }
        }
      })
    }
  }
};
