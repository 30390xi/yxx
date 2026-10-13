module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/8.js"), require("../../_commons/16.js"), require("../../_commons/20.js"), require("../../_commons/19.js"), {
  ids: [52],
  modules: {
    104: function(t, e) {
      t.exports = {
        picBlank: "https://res.wx.qq.com/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif"
      }
    },
    55: function(t, e, o) {
      t.exports = o(590)
    },
    590: function(t, e, o) {
      o.r(e);
      var n = o(7),
        a = o.n(n),
        s = o(3),
        i = o(0),
        r = o(2),
        m = o(1),
        c = o(19),
        h = o.n(c),
        l = o(18);

      function u(t) {
        return !(!l.EmojiDataMap[t] || !l.EmojiData[l.EmojiDataMap[t].index])
      }

      function d(t, e, o) {
        for (var n, a = new RegExp(e, "g"); n = a.exec(t);)
          for (var s = n, i = s[0], r = s.index, m = o.length; m <= i.length; ++m) {
            var c = i.slice(0, m);
            if (u(c)) return {
              0: c,
              index: r
            }
          }
        return null
      }
      o(104);
      var C = function(t, e) {
          return function t(e) {
            if (!e) return [];
            var o = function(t) {
              return function(t) {
                for (var e, o = new RegExp(/\[[^[\]]+\]/, "g"); e = o.exec(t);)
                  if (u(e[0])) return e;
                return null
              }(t) || d(t, /\/([\u4e00-\u9fa5\w]{1,4})/, "/") || d(t, /\/(:[^/]{1,8})/, "/:")
            }(e);
            if (o) {
              var n = o[0],
                a = o.index,
                s = e.slice(0, a),
                i = e.slice(a + n.length),
                r = u(n) ? {
                  text: n,
                  data: l.EmojiData[l.EmojiDataMap[n].index]
                } : n,
                m = [].concat(h()(t(s)), [r], h()(t(i)));
              return m.some((function(t) {
                return t.text
              })) ? m : [m.join("")]
            }
            return [e]
          }(t)
        },
        f = function(t, e) {
          return t ? C(t) : t
        },
        g = o(22),
        S = o(5);

      function p(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), o.push.apply(o, n)
        }
        return o
      }

      function _(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2 ? p(Object(o), !0).forEach((function(e) {
            a()(t, e, o[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : p(Object(o)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
          }))
        }
        return t
      }
      Component({
        behaviors: [S.a, g.a],
        data: {
          componentName: "comments",
          isScrollCommentToBottom: !0,
          curCommentList: [],
          newNotifyCount: 0,
          commentScrollIntoView: 0,
          screenType: "",
          commentsHeight: "",
          commentsClass: "",
          commentHasExtendActive: !1,
          showHorizontalBtn: !1,
          showAnchorNudgeComment: !1,
          nudgeActivityList: [],
          nudgeActivityTime: 3e3,
          nudgeCommentTime: 3e3,
          nudgeCommentList: [],
          hideComment: !1,
          isClearScreen: !1,
          showVideoDotList: !1,
          _lineHeight: 20,
          _emojiSource: "https://res.wx.qq.com/op_res/Z1NauShQq9C_l1iDgExm4t-FmOM2ZCjqefUpxiC1son6NaQVu_o6i7BIbWaubGWd"
        },
        lifetimes: {
          attached: function() {
            this.calcShowNewNotifyHeight = r.a.debounce(this.calcShowNewNotifyHeight, 30, this), this.delaySetAvatar = r.a.debounce(this.delaySetAvatar, 30, this)
          },
          detached: function() {
            clearTimeout(this.updateTimer)
          }
        },
        methods: {
          onStoreDataReady: function() {
            if (clearTimeout(this.updateTimer), !this.storeData.showRecord) {
              this.initComment();
              var t = this;
              wx.createSelectorQuery().in(this).select("#componentComment").boundingClientRect((function(e) {
                e && t.storeSetData({
                  commentTop: parseInt(e.top)
                })
              })).exec()
            }
          },
          initComment: function() {
            var t = this;
            this.storeSetData({
              curCommentList: this.storeData.allCommentList || [],
              newNotifyCount: 0,
              isScrollCommentToBottom: !0
            }, (function() {
              t.storeSetData({
                commentScrollIntoView: t.storeData.allCommentList && t.storeData.allCommentList.length || 0
              })
            }))
          },
          pushCommentObserver: function(t) {
            var e = this;
            if (t && t.msgId) {
              var o = this.storeData.allCommentList || [];
              if ((this.storeData.msgIdMap || {})[t.msgId] = 1, o.push({
                  avatar: r.a.avatarToSmall(t.avatar),
                  nickname: t.nickname,
                  content: t.content,
                  parsedComment: f(t.content),
                  openid: t.openid,
                  msgId: t.msgId,
                  type: t.type,
                  role: t.role,
                  anchor_uin: t.anchor_uin
                }), clearTimeout(this.updateTimer), this._innerIsAlive)
                if (1 !== t.type || this.data.isScrollCommentToBottom) this.storeSetData({
                  pushComment: null,
                  curCommentList: o,
                  allCommentList: o,
                  newNotifyCount: 0,
                  isScrollCommentToBottom: !0
                }, (function() {
                  e.storeSetData({
                    commentScrollIntoView: (o || []).length
                  })
                }));
                else {
                  var n = this.data.newNotifyCount || 0;
                  this.storeSetData({
                    pushComment: null,
                    allCommentList: o,
                    newNotifyCount: n + 1
                  })
                }
            }
          },
          deleteCommentInfoObserver: function(t) {
            if (t && t.msgId) {
              var e = (this.storeData.allCommentList || []).filter((function(e) {
                  return e.msgId !== t.msgId
                })),
                o = this.storeData.curCommentList || [];
              o = o.filter((function(e) {
                return e.msgId !== t.msgId
              })), this.storeSetData({
                allCommentList: e,
                curCommentList: o,
                deleteCommentInfo: null
              })
            }
          },
          screenTypeObserver: function() {
            var t = this;
            this.calcShowNewNotifyHeight(), this.storeData.isScrollCommentToBottom && setTimeout((function() {
              t.storeSetData({
                commentScrollIntoView: t.storeData.curCommentList && t.storeData.curCommentList.length || 0
              })
            }), 300)
          },
          showPushCommentObserver: function() {
            this.calcShowNewNotifyHeight()
          },
          showLotteryOperObserver: function() {
            this.calcShowNewNotifyHeight()
          },
          isPushStreamObserver: function() {
            this.calcShowNewNotifyHeight()
          },
          isCommentEnabled: function() {
            var t = !this.storeData.isRoomCommentBan && !this.storeData.isRoomCommentClose && !this.storeData.isGlobalCommentBan;
            return (this.storeData.showCommentIcon || "horizontal" === this.storeData.screenType && this.storeData.isAndroid) && t
          },
          roomStaticInfoObserver: function(t) {
            var e = this.storeData.curLiveStatusCode;
            if (e !== i.a.LIVE_STATUS.END && e !== i.a.LIVE_STATUS.REPLAY) {
              var o = [],
                n = this.storeData.msgIdMap;
              if (t.system_msg) {
                this.logInfo("[评论列表] system_msg", t.system_msg);
                var a = JSON.parse(t.system_msg);
                n[i.a.COMMENT_MSG_KEY.STATIC_SYSTEM_MSG_KEY] || (n[i.a.COMMENT_MSG_KEY.STATIC_SYSTEM_MSG_KEY] = 1, o.push(_(_({}, a), {}, {
                  msgId: i.a.COMMENT_MSG_KEY.STATIC_SYSTEM_MSG_KEY,
                  official: !0
                }))), t.rtx_name && !n[i.a.COMMENT_MSG_KEY.INNER_SYSTEM_MSG_KEY] && (n[i.a.COMMENT_MSG_KEY.INNER_SYSTEM_MSG_KEY] = 1, o.push({
                  avatar: a.avatar,
                  nickname: a.nickname,
                  msgId: i.a.COMMENT_MSG_KEY.INNER_SYSTEM_MSG_KEY,
                  content: "注意内容保密。截屏、录屏、复制等传播内容的行为都是禁止的。",
                  official: !0
                }))
              }
              var s = [];
              if (this.isCommentEnabled()) {
                if ((o = o.concat(this._handleComments(t.comments && t.comments.list || []))) && o.length) {
                  var r = o.map((function(t) {
                    return t.msgId
                  }));
                  this.logInfo("[评论列表] 静态接口", o.length, r)
                }(s = t.departure_msg && t.departure_msg.list || []) && s.length && this.logInfo("[评论列表] departure_msg", s)
              }
              this.addLocalCommentList({
                curCommentList: o,
                deleteCommentList: s
              }, !0)
            }
          },
          isRoomCommentBanObserver: function(t, e) {
            t && t !== e && m.a.tipsSimple(i.a.BAN_COMMENT_WORDING.ROOM_BANED)
          },
          isGlobalCommentBanObserver: function(t, e) {
            t && t !== e && m.a.tipsSimple(i.a.BAN_COMMENT_WORDING.GLOBAL_BANED)
          },
          roomDynamicInfoObserver: function(t) {
            try {
              var e = this.storeData.curLiveStatusCode;
              if (e === i.a.LIVE_STATUS.REPLAY || e === i.a.LIVE_STATUS.END) return;
              if (!this.isCommentEnabled()) return;
              var o = [],
                n = this._handleGlobalMsg(t.global_msg);
              n && (this.logInfo("[评论列表] global_msg", n), o.push(n));
              var a = this._handleComments(t.comments && t.comments.list || []);
              if (a && a.length) {
                var s = a.map((function(t) {
                  return t.msgId
                }));
                this.logInfo("[评论列表] userComments", a.length, s), console.warn("userComments", a, "len", a.length)
              }
              o = o.concat(a);
              var r = t.departure_msg && t.departure_msg.list || [];
              r && r.length && this.logInfo("[评论列表] departure_msg", r), this.addLocalCommentList({
                curCommentList: o,
                deleteCommentList: r
              })
            } catch (t) {
              this.logWarn("[comments] roomDynamicInfoObserver logic error", t), this.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
            }
          },
          historyCommentListObserver: function(t) {
            var e = this._handleComments(t || []);
            e && e.length && (this.logInfo("historyCommentListObserver 条数", e.length), this.addLocalCommentList({
              curCommentList: e,
              deleteCommentList: []
            }, !0))
          },
          recordCommentListObserver: function(t) {
            var e = this;
            if (this.storeData && this.storeData.showRecord)
              if (t && t.length) {
                var o = this._handleComments(t || [], !0);
                if (o && o.length) {
                  this.logInfo("recordCommentListObserver 条数", o.length);
                  var n = {},
                    a = this.storeData.isUseNewCommentCount ? i.a.COMMENT.NEW_SHOW_MSG_LIMIT_NUMBER : i.a.COMMENT.SHOW_MSG_LIMIT_NUMBER;
                  if (this.storeData.isScrollCommentToBottom) {
                    var s = (this.storeData.curCommentList || []).concat(o) || [];
                    s = s.slice(Math.max(0, s.length - a), s.length) || [], n = {
                      recordCacheCommentList: s,
                      curCommentList: s,
                      newNotifyCount: 0
                    }
                  } else {
                    var r = this.storeData.recordCacheCommentList.concat(o);
                    r = r.slice(Math.max(0, r.length - a), r.length) || [], n = {
                      recordCacheCommentList: r,
                      newNotifyCount: this.storeData.isScrollCommentToBottom ? 0 : this.storeData.newNotifyCount + o.length
                    }
                  }
                  this.storeSetData(n, (function() {
                    e.storeData.isScrollCommentToBottom && e.storeSetData({
                      commentScrollIntoView: n.curCommentList && n.curCommentList.length || 0
                    })
                  }))
                }
              } else this.clearComment()
          },
          clearComment: function() {
            this.storeSetData({
              curCommentList: [],
              isScrollCommentToBottom: !0,
              newNotifyCount: 0
            })
          },
          showRecordObserver: function(t) {
            t || this.initComment()
          },
          disconnectObserveCommentItem: function() {
            this.observerInstance && (this.observerInstance.disconnect(), this.observerInstance = null)
          },
          observeCommentItem: function() {
            var t = this;
            this.disconnectObserveCommentItem();
            var e = this.showNewNotifyHeight || 300;
            this.indexList = this.indexList || [], this.observerInstance = wx.createIntersectionObserver(this, {
              observeAll: !0
            }).relativeTo(".comments__inner", {
              bottom: 0,
              top: e
            }).observe(".comments-item__noavatar", (function(e) {
              t.indexList.push(e.dataset.index), t.delaySetAvatar()
            }))
          },
          delaySetAvatar: function() {
            if (this.indexList && this.indexList.length) {
              var t = this.storeData.curCommentList || [],
                e = !1,
                o = [];
              this.indexList.forEach((function(n) {
                t[n] && t[n].delayAvatar && !t[n].avatar && (t[n].avatar = t[n].delayAvatar, t[n].delayAvatar = "", e = !0, o.push(n))
              })), e && this.storeSetData({
                curCommentList: t
              }), this.indexList = []
            }
          },
          scrollComment: function(t) {
            var e = t.detail,
              o = e.scrollHeight,
              n = e.scrollTop,
              a = e.deltaY;
            if (!(a < 0 && (Math.abs(a) >= 80 || Math.abs(a) <= 2))) {
              var s = this.showNewNotifyHeight || 300;
              (this.data.showAnchorNudgeComment || this.storeData.isScrollCommentToBottom) && o - n > s && (this.addReportMMData({
                actionType: 4,
                subActionType: 3
              }), this.storeSetData({
                isScrollCommentToBottom: !1
              }), this.setData({
                showAnchorNudgeComment: !1
              }), this.observeCommentItem())
            }
          },
          onScrollBottom: function() {
            this.addReportMMData({
              actionType: 4,
              subActionType: 3
            }), this.storeSetData({
              isScrollCommentToBottom: !0
            }), this.disconnectObserveCommentItem(), this.updateLatestCommentData()
          },
          clickNewNotify: function() {
            this.addReportMMData({
              actionType: 4,
              subActionType: 4
            }), this.storeSetData({
              isScrollCommentToBottom: !0
            }), this.updateLatestCommentData()
          },
          onClickContainer: function() {
            var t = this.storeData,
              e = t.showPushComment,
              o = t.showStorePanel,
              n = t.showForbidUserList,
              a = t.showLotteryOper,
              s = t.showProfileModal;
            if (e || o || n || a || s) return this.logInfo("关闭其他弹窗", {
              showPushComment: e,
              showStorePanel: o,
              showForbidUserList: n,
              showLotteryOper: a,
              showProfileModal: s
            }), void this.storeSetData({
              showPushComment: !1,
              showStorePanel: !1,
              showForbidUserList: !1,
              showLotteryOper: !1,
              showProfileModal: !1
            })
          },
          onLongPress: function(t) {
            if ((wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) !== i.a.SHARE_FRIENDS_SCENE) {
              if (!this.storeData.showCommentActionSheet && !this.storeData.showPushComment) {
                var e = t.currentTarget.dataset.info;
                e.official || 1 === e.type || this.storeSetData({
                  operateCommentInfo: e,
                  showCommentActionSheet: !0
                })
              }
            } else m.a.tipsSimple("请前往小程序使用完整服务")
          },
          onNudgeComment: function(t) {
            var e = this,
              o = t.currentTarget.dataset.info,
              n = t.currentTarget.dataset.index,
              a = this.storeData,
              s = a.hideNudge,
              r = a.curLiveStatusCode,
              c = a.showRecord,
              h = a.screenType;
            if (!s && r === i.a.LIVE_STATUS.LIVE && !c && "horizontal" !== h && !o.official && n === this.commentIndex && t.timeStamp - this.tapStartTime < 300) {
              if ((wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) === i.a.SHARE_FRIENDS_SCENE) return void m.a.tipsSimple("请前往小程序使用完整服务");
              this.liveManager.getUserInfo().then((function(o) {
                e._onNudgeComment(t, n, o.nickname)
              }))
            }
            this.commentIndex = n, this.tapStartTime = t.timeStamp
          },
          _onNudgeComment: function(t, e, o) {
            var n, a = this,
              s = this.storeData,
              r = s.userType,
              m = s.curOpenid,
              c = s.anchorOpenid,
              h = r === i.a.PUSHER_USER_TYPE.SUB_ANCHOR,
              l = this.data.curCommentList || [],
              u = l[e].openid,
              d = h ? c : m;
            n = u == d ? i.a.NUDGE.SELF_NUDGE_SELF : d == c ? i.a.NUDGE.ANCHOR_NUDGE_AUDIENCE : u === c && "" === this.data.screenType ? i.a.NUDGE.AUDIENCE_NUDGE_ANCHOR : i.a.NUDGE.AUDIENCE_NUDGE_AUDIENCE, wx.vibrateShort(), l[e].shakeclass = !0, this.storeSetData({
              curCommentList: l
            }), setTimeout((function() {
              var t = a.data.curCommentList || [];
              t[e].shakeclass = !1, a.storeSetData({
                curCommentList: t
              })
            }), 1e3);
            var C = this.data.nudgeActivityList.filter((function(e) {
              return e.timeStamp > t.timeStamp - a.data.nudgeActivityTime
            }));
            if (!C.find((function(t) {
                return t.msgId === l[e].msgId
              }))) {
              var f = l[e].nickname || "",
                g = f.length > 5 ? "".concat(f.substr(0, 5), "...") : f;
              this.nudgeCommentReport({
                sub_action_type: n,
                recv_openid: u,
                cnt: 1,
                isSelfSend: !0,
                first_user_nickname: g,
                send_nickname: o,
                recv_nickname: f,
                end_time: Math.round(Date.now() / 1e3)
              }), C.push({
                msgId: l[e].msgId,
                timeStamp: t.timeStamp
              })
            }
            this.storeSetData({
              nudgeActivityList: C
            })
          },
          nudgeCommentReport: function(t) {
            var e = this;
            this.storeSetData({
              nudgeList: [t]
            });
            var o = t.sub_action_type;
            o === i.a.NUDGE.SELF_NUDGE_SELF ? this.addReportMMData({
              actionType: 4,
              subActionType: 44,
              reserves: 1
            }) : o === i.a.NUDGE.AUDIENCE_NUDGE_ANCHOR ? this.addReportMMData({
              actionType: 4,
              subActionType: 44,
              reserves: 2
            }) : o === i.a.NUDGE.AUDIENCE_NUDGE_AUDIENCE ? this.addReportMMData({
              actionType: 4,
              subActionType: 44,
              reserves: 3
            }) : o === i.a.NUDGE.ANCHOR_NUDGE_AUDIENCE && this.addReportMMData({
              actionType: 4,
              subActionType: 44,
              reserves: 4
            }), o !== i.a.NUDGE.SELF_NUDGE_SELF && s.a.nudgeCommentReport(_(_({}, this.getReqBase()), {}, {
              content: {
                subeventtype: t.sub_action_type,
                recv_openid: t.recv_openid,
                send_nickname: t.send_nickname,
                recv_nickname: t.recv_nickname
              }
            })).then((function(t) {
              e.logInfo("拍一拍上报成功", t)
            })).catch((function(t) {
              e.logWarn("拍一拍上报失败", t)
            }))
          },
          anchorNudgeComment: function(t) {
            var e = this,
              o = this.storeData,
              n = o.anchorOpenid,
              a = o.anchorImg,
              i = Date.now(),
              r = {
                avatar: a,
                nickname: "主播",
                content: "我拍了拍".concat(t),
                id: "".concat(n, "_").concat(i),
                msgId: "".concat(n, "_").concat(i),
                type: 1,
                openid: n,
                anchor_uin: n
              };
            this.setData({
              showAnchorNudgeComment: !0
            }), this.storeSetData({
              pushComment: r
            }), s.a.pushComment(_(_({}, this.getReqBase()), {}, {
              content: r
            })).then((function(t) {
              e.logInfo("pushComment anchorNudgeComment succ", r, t)
            })).catch((function(t) {
              e.logWarn("pushComment anchorNudgeComment fail", r, t), m.a.tipsSimple("求拍失败, 请稍后再试")
            }))
          },
          getRandomNudgeWording: function() {
            var t = ["刚刚", "轻轻", "悄悄"];
            return t[Math.floor(t.length * Math.random(0, 1))]
          },
          updateLatestCommentData: function() {
            var t = this,
              e = (this.storeData.showRecord ? this.storeData.recordCacheCommentList : this.storeData.allCommentList) || [],
              o = this.storeData.isUseNewCommentCount ? i.a.COMMENT.NEW_SHOW_MSG_LIMIT_NUMBER : i.a.COMMENT.SHOW_MSG_LIMIT_NUMBER;
            e = e.slice(Math.max(0, e.length - o), e.length), this.storeData.newNotifyCount && this.storeSetData({
              curCommentList: e,
              newNotifyCount: 0
            }, (function() {
              t.storeSetData({
                commentScrollIntoView: e.length
              }, !0)
            }))
          },
          updateCommentData: function(t) {
            var e = this,
              o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (this.storeData.showRecord) this.logInfo("showRecord setTimeout ignore comment update");
            else {
              var n = this,
                a = o,
                s = this.storeData.allCommentList || [],
                r = s.length,
                m = this.storeData.isUseNewCommentCount ? i.a.COMMENT.NEW_FRESH_TIME : i.a.COMMENT.FRESH_TIME,
                c = Math.max(1, Math.floor(this.storeData.longPollingTime / m));
              o += Math.max(i.a.COMMENT.SHOW_SECOND_NUMBER / 5, Math.ceil(t / c)), o = Math.min(t, o);
              var h = Math.max(0, n.storeData.newNotifyCount),
                l = {};
              if (n.storeData.isScrollCommentToBottom) {
                var u = this.storeData.isUseNewCommentCount ? i.a.COMMENT.NEW_SHOW_MSG_LIMIT_NUMBER : i.a.COMMENT.SHOW_MSG_LIMIT_NUMBER;
                console.warn("showMsgLimit", u);
                var d = s.slice(Math.max(0, r - u), r) || [],
                  C = d.length - t + o;
                d = d.slice(0, C), this.saveAvatarForDelayUpdate(d, 10), l = {
                  curCommentList: d,
                  newNotifyCount: 0
                }
              } else l = {
                newNotifyCount: h + o - a
              };
              n.storeSetData(l, (function() {
                n.storeData.isScrollCommentToBottom && e.storeSetData({
                  commentScrollIntoView: l.curCommentList && l.curCommentList.length || 0
                }), o < t && (clearTimeout(e.updateTimer), e.updateTimer = setTimeout((function() {
                  n.updateCommentData(t, o)
                }), m))
              }))
            }
          },
          calcShowNewNotifyHeight: function() {
            var t = this;
            this.createSelectorQuery().select("#componentComment").fields({
              size: !0
            }, (function(e) {
              if (e) {
                var o = e.height ? parseInt(e.height) + 80 : 300;
                if (o !== t.showNewNotifyHeight) {
                  t.showNewNotifyHeight = o + 80;
                  var n = t.storeData.curCommentList && t.storeData.curCommentList.length || 0;
                  t.storeData.isScrollCommentToBottom && t.storeData.commentScrollIntoView !== n && t.storeSetData({
                    commentScrollIntoView: n
                  })
                }
              }
            })).exec()
          },
          _handleCommentsHeight: function() {
            var t = this.storeData;
            return Math.max((t.windowHeight - t.keyboardHeight - 90) / 2, 73)
          },
          _handleSystemMsgForPusher: function(t) {
            var e = this;
            if (!t || !t.list || !t.list.length) return [];
            var o = [],
              n = this.storeData.msgIdMap || {};
            if (t.list.forEach((function(t) {
                if (!n[t.msg_id] && (n[t.msg_id] = 1, t.msg_content)) {
                  var e = JSON.parse(t.msg_content);
                  t.msg_type !== config.MESSAGE_TYPE.MESSAGE_TYPE_COMMENT_BAN_IN_ANCHOR && (e.content = "该直播过程中，" + e.content + "。请立即整改，否则将进行禁播处理。"), o.push(_(_({}, e), {}, {
                    official: 1,
                    msgId: t.msg_id
                  }))
                }
              })), o.sort((function(t, e) {
                return t.msgId - e.msgId
              })), o && o.length) {
              this.storeSetDataNoSync({
                roomSysMsgVersion: o[o.length - 1].msgId
              });
              var a = o[o.length - 1];
              a && (this.logInfo("违规提醒", a), this.addReportMMData({
                actiontype: 4,
                subactiontype: 5,
                commentcontent: a.content
              }), m.a.tipsGotIt({
                title: "违规提醒",
                content: a.content,
                onConfirm: function() {
                  e.addReportMMData({
                    actiontype: 2,
                    subactiontype: 27,
                    commentcontent: a.content
                  }), e.logInfo("违规提醒，用户点击已读");
                  var t = {
                    roomId: e.storeData.roomId,
                    roomAppid: e.storeData.appid,
                    from: "pusher",
                    content: {
                      id: a.msgId,
                      type: a.msgType
                    }
                  };
                  e.logInfo("违规提醒，用户点击已读 req", t), s.a.updateMsg(t).then((function(t) {
                    e.logInfo("违规提醒，已读存储成功", t)
                  }))
                }
              }))
            }
            return o
          },
          _handleGlobalMsg: function(t) {
            if (!t || !t.version) return null;
            var e = t.version;
            if (e === this.storeData.globalSysMsgVersion) return null;
            this.storeSetData({
              globalSysMsgVersion: e
            });
            var o = t.msg || "";
            return 0 === o.length ? null : _(_({}, JSON.parse(o)), {}, {
              official: !0
            })
          },
          _handleComments: function(t) {
            var e = this,
              o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!t || 0 === t.length) return [];
            var n = o ? this.storeData.recordMsgIdMap || {} : this.storeData.msgIdMap,
              a = o ? {
                lastCommentId: 0
              } : this.getLastCommentInfo(this.storeData.allCommentList),
              s = a.lastCommentId;
            console.warn("handleComments get lastCommentId", s, this.storeData.allCommentList);
            var i = [];
            return t.forEach((function(t) {
              if (t.msg_content && !(s && t.msg_id <= s || n[t.msg_id])) {
                n[t.msg_id] = 1;
                var o = JSON.parse(t.msg_content),
                  a = e.storeData.userAvatarDropRate ? 100 * Math.random() < e.storeData.userAvatarDropRate : 0;
                i.push({
                  avatar: a ? "" : r.a.avatarToSmall(o.avatar),
                  nickname: o.nickname,
                  content: o.content,
                  openid: o.openid,
                  msgId: t.msg_id,
                  userUin: t.user_uin,
                  role: o.role || null,
                  type: o.type,
                  parsedComment: f(o.content)
                })
              }
            })), i.sort((function(t, e) {
              return t.msgId - e.msgId
            })), i
          },
          saveAvatarForDelayUpdate: function(t, e) {
            if (t && t.length > e)
              for (var o = t.length - e, n = Math.max(o - e, 0); n < o; n++) {
                var a = t[n];
                a && void 0 === a.delayAvatar && (a.delayAvatar = a.avatar, a.avatar = "")
              }
            return t
          },
          addLocalCommentList: function(t) {
            var e = this,
              o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = t.curCommentList || [],
              a = t.deleteCommentList || [];
            if (0 !== n.length || 0 !== a.length) {
              var s = {};
              a.forEach((function(t) {
                s[t.msg_id] = !0
              }));
              var r = (n = n.filter((function(t) {
                  return !s[t.msgId]
                }))).length,
                m = this.storeData.allCommentList ? this.storeData.allCommentList.concat(n) : n,
                c = (m = (m = m.filter((function(t) {
                  return !s[t.msgId]
                }))) || []).length,
                h = this.storeData.isUseNewCommentCount ? i.a.COMMENT.NEW_SHOW_MSG_LIMIT_NUMBER : i.a.COMMENT.SHOW_MSG_LIMIT_NUMBER;
              c >= h && (m = m.slice(Math.max(0, c - h), c));
              var l = {};
              m.forEach((function(t) {
                l[t.msgId] = 1
              })), this.storeSetData({
                allCommentList: m,
                msgIdMap: l
              }), this.storeData.showRecord ? this.logInfo("showRecord ignore comment update") : this._innerIsAlive && (o ? (this.saveAvatarForDelayUpdate(m, 30), this.storeSetData({
                curCommentList: m
              }, (function() {
                e.storeData.isScrollCommentToBottom && e.storeSetData({
                  commentScrollIntoView: e.storeData.curCommentList && e.storeData.curCommentList.length || 0
                })
              }))) : this.updateCommentData(r))
            }
          },
          getLastCommentInfo: function(t) {
            return this.liveManager.getLastCommentInfo(t)
          },
          onCommentTap: function() {},
          onScrollTap: function() {
            var t = this.storeData,
              e = t.isClearScreen,
              o = t.isPushStream,
              n = t.screenType,
              a = t.curLiveStatusCode,
              s = t.showPushComment;
            o && "vertical" === n || a === i.a.LIVE_STATUS.NOT_START || s || this.storeSetData({
              isClearScreen: !e
            })
          },
          _handlePreviewData: function(t) {
            "pusher" === this.storeData.from && t.preview && this.storeSetData({
              previewType: t.preview.type,
              previewAuditStatus: t.preview.video_status || 0
            })
          }
        }
      })
    }
  },
  entries: [
    [55, 0, 1, 3, 6, 2, 4, 5, 7, 8, 16, 20, 19]
  ]
}]);
