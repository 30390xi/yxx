var t = require("../../@babel/runtime/helpers/defineProperty");
module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/9.js"), require("../../_commons/20.js"), {
  ids: [81],
  modules: {
    261: function(e, o, i) {
      var s;
      i.r(o);
      var a = i(7),
        n = i.n(a),
        r = i(11),
        m = i(3),
        h = i(1),
        c = i(0),
        u = i(5),
        p = i(18);

      function l(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e && (i = i.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), o.push.apply(o, i)
        }
        return o
      }

      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2 ? l(Object(o), !0).forEach((function(e) {
            n()(t, e, o[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : l(Object(o)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
          }))
        }
        return t
      }
      var _ = wx.getSystemInfoSync();
      Component({
        behaviors: [u.a],
        properties: {
          maxlength: {
            type: Number
          },
          placeholder: {
            type: String,
            value: ""
          }
        },
        data: (s = {
          componentName: "pushComment",
          keyboardHeight: 0,
          isSendDisabled: !0,
          curWriteCommentContent: "",
          showPushComment: !1,
          screenType: "",
          isWindows: !1,
          isMac: !1,
          isPC: "mac" === _.platform || "windows" === _.platform,
          isIos: r.a.isIos(),
          showEmojiInput: !1,
          inputType: "normal"
        }, t(s, "isSendDisabled", !0), t(s, "isShow", !1), t(s, "cursorIndex", 0), t(s, "isInsertEmoji", !1), t(s, "showEmojiHistory", !1), t(s, "emojiSource", "https://res.wx.qq.com/a/fed_upload/54e326b0-d77f-444f-9dbb-86ab6801eff1/emojiTotal.png"), t(s, "_switInputing", !1), t(s, "_tmpWriteCommentContent", ""), t(s, "_switchTimer", null), s),
        lifetimes: {
          attached: function() {
            this.setData({
              cursorIndex: this.storeData.cursorIndex
            }), this.inputAttach(), this._keyboardHeight = 0
          },
          detached: function() {
            this.storeSetData({
              curWriteCommentContent: this.data._tmpWriteCommentContent
            })
          }
        },
        methods: {
          inputAttach: function() {
            var t = this;
            setTimeout((function() {
              t.setData({
                isShow: !0
              })
            }), 200)
          },
          onStoreDataReady: function() {
            this.storeSetData({
              _tmpWriteCommentContent: this.storeData.curWriteCommentContent
            })
          },
          onInput: function(t) {
            var e = t.detail.cursor,
              o = t.detail.value,
              i = this.data._tmpWriteCommentContent || "",
              s = "",
              a = e,
              n = "",
              r = 0;
            if (o.length < i.length && (s = i.slice(e, e + i.length - o.length)), "]" === s)
              for (var m = a - 1; m > -1; m--)
                if ("[" === o.charAt(m)) {
                  n = i.slice(m, a + 1), r = m;
                  break
                } n && p.EmojiData.some((function(t) {
              return t.cn === n
            })) && (o = o.slice(0, r) + o.slice(a, o.length), e = r), this.storeSetData({
              cursorIndex: e,
              curWriteCommentContent: o,
              _tmpWriteCommentContent: o,
              isSendDisabled: !o || !o.length
            })
          },
          onKeyboardHeightChange: function(t) {
            this.storeData.isAndroid ? this._keyboardHeight = t.detail.height > 0 ? t.detail.height : Math.max(this._keyboardHeight, t.detail.height) : this._keyboardHeight = t.detail.height > 0 ? t.detail.height : this._keyboardHeight, this.storeSetData({
              keyboardHeight: this._keyboardHeight
            })
          },
          onFocus: function(t) {
            var e = this.storeData.curWriteCommentContent;
            this._keyboardHeight = Math.max(this._keyboardHeight, t.detail.height), this.storeSetData({
              inputType: "normal",
              showEmojiInput: !1,
              keyboardHeight: this._keyboardHeight,
              isSendDisabled: !e || !e.length
            })
          },
          onBlur: function(t) {
            var e = this,
              o = t.detail.cursor;
            this.storeSetData({
              cursorIndex: o
            }), this.data._switInputing || (this.storeData.isDevTools || this.storeData.isMac || this.storeData.isPC ? setTimeout((function() {
              e.data._switInputing || (e.storeSetData({
                keyboardHeight: 0
              }), e.onClose())
            }), 200) : this.onClose())
          },
          onClose: function() {
            !1 !== this.storeData.showPushComment && ((this.storeData.isDevTools || this.storeData.isMac || this.storeData.isWindows) && this.storeSetData({
              keyboardHeight: 0
            }), this.storeSetData({
              showPushComment: !1,
              showEmojiInput: !1,
              isShow: !1
            }))
          },
          onConfirmInput: function() {
            var t = this;
            this.addReportMMData({
              actionType: 4,
              subActionType: 5,
              reserves: 3
            });
            var e = this.data._tmpWriteCommentContent && this.data._tmpWriteCommentContent.trim();
            this.storeData.isCommentBan || this.storeData.isGlobalCommentBan || this.storeData.isCommentClose ? this.storeData.isUserBan ? h.a.tipsSimple(c.a.BAN_COMMENT_WORDING.USER_BANED) : this.storeData.isCommentBan ? h.a.tipsSimple(c.a.BAN_COMMENT_WORDING.ROOM_BANED) : this.storeData.isGlobalCommentBan ? h.a.tipsSimple(c.a.BAN_COMMENT_WORDING.GLOBAL_BANED) : this.storeData.isCommentClose && h.a.tipsSimple(c.a.BAN_COMMENT_WORDING.COMMENT_CLOSE) : e ? this.liveManager.getUserInfo().then((function(o) {
              t.storeSetData({
                isSendDisabled: !0,
                cursorIndex: 0,
                curWriteCommentContent: "",
                _tmpWriteCommentContent: ""
              }), t.pushComment(e, o)
            })).catch((function(e) {
              console.log("comment err: ", e), e && "not support" === e.errMsg || h.a.tipsSimple("授权异常，无法发送评论"), t.logError("onConfirmInput error", e)
            })) : /^\s/.test(this.data._tmpWriteCommentContent) || /^\r/.test(this.data._tmpWriteCommentContent) || /^\n/.test(this.data._tmpWriteCommentContent) ? h.a.tipsSimple("不能发送空白消息") : (console.log("this.data._tmpWriteCommentContent: ", this.data._tmpWriteCommentContent), h.a.tipsSimple("还没有输入评论哦"))
          },
          pushComment: function(t, e) {
            var o = this,
              i = this.pushCommentTimeList || [];
            if (i.push(Date.now()), i.length === c.a.COMMENT.PUSH_COMMENT_HIT_FREQ_LIMIT) {
              if (i[i.length - 1] - i[0] < 6e4) return h.a.tipsSimple("操作太过频繁，请1分钟后再试"), void i.shift();
              i.shift()
            }
            this.pushCommentTimeList = i;
            var s = !1,
              a = this.storeData.lotteryPush || {};
            a.participate_type === c.a.LOTTERY_PARTIPATE_TYPE.LOTTERY_COMMENT && (s = !0);
            var n = this.storeData.userRoleType || 3,
              r = {
                avatar: e.avatar,
                nickname: n === c.a.USER_TYPE.ROOM_HELPER ? this.storeData.roomHelperNickname : e.nickname,
                openid: e.openid,
                id: "".concat(e.openid, "_").concat(Date.now()),
                content: t,
                lottery_id: s ? a.id : 0,
                role: {
                  role_type: n,
                  role_nickname: this.storeData.roomHelperNickname
                },
                disable_auto_reply: this.storeData.disableAutoReply ? 1 : 0
              },
              u = {
                actionType: 3,
                subActionType: 2,
                commentContent: t
              };
            this.addReportMMData(u), console.warn("发送了评论req", r), m.a.pushComment(d(d({}, this.getReqBase()), {}, {
              content: r,
              report_data: this.getReportData(u)
            })).then((function(t) {
              if (t.auto_reply) {
                console.warn("发送了评论resp", t.auto_reply);
                var e = t.auto_reply && t.auto_reply.content || "";
                e && o.storeSetData({
                  isShowAutoReplySettingBtn: !0,
                  autoReply: e,
                  autoReplyType: "comments"
                })
              }
              r.msgId = t.msg_id, o.storeSetData({
                pushComment: r,
                linkMicScore: o.storeData.linkMicScore + 1
              }), s && o.storeSetData({
                lotteryPush: d(d({}, a), {}, {
                  isParticipate: !0
                })
              })
            })).catch((function(t) {
              var i = t && (+t.ret || +t.err_code) || t.errMsg && +t.errMsg.split(":")[2];
              i === c.a.COMMENT_ERROR_CODE.ERR_COMMENT_PUSH ? h.a.tipsSimple("写评论失败") : i === c.a.COMMENT_ERROR_CODE.ERR_COMMENT_HIT_KEYWORD_INTERCEPT ? (o.storeSetData({
                pushComment: {
                  avatar: e.avatar,
                  nickname: n === c.a.USER_TYPE.ROOM_HELPER ? o.storeData.roomHelperNickname : e.nickname,
                  content: "******",
                  role: r.role,
                  msgId: Date.now()
                }
              }), o.storeSetData({
                curWriteCommentContent: "",
                _tmpWriteCommentContent: ""
              }, !0)) : i === c.a.COMMENT_ERROR_CODE.ERR_COMMENT_HIT_FREQ_LIMIT ? h.a.tipsSimple("操作太过频繁，请1分钟后再试") : i !== c.a.COMMENT_ERROR_CODE.ERR_COMMENT_IS_BAN && i !== c.a.COMMENT_ERROR_CODE.ERR_COMMENT_HIT_KEYWORD_BUSINESS_INTERCEPT && i !== c.a.COMMENT_ERROR_CODE.ERR_COMMENT_HIT_COMMENT_DISCARD || (s && o.storeSetData({
                lotteryPush: d(d({}, a), {}, {
                  isParticipate: !0
                })
              }), o.storeSetData({
                pushComment: d(d({}, r), {}, {
                  msgId: Date.now()
                })
              }))
            }))
          },
          showPushCommentObserver: function(t) {
            t && this.addReportMMData({
              actionType: 4,
              subActionType: 5,
              reserves: 2
            })
          },
          switInputType: function() {
            var t = this;
            if (!this.data._switInputing) {
              this.data._switInputing = !0, this.data.showEmojiInput ? setTimeout((function() {
                t.storeSetData({
                  showEmojiInput: !1
                })
              }), 500) : this.storeSetData({
                showEmojiInput: !0
              }), this.data._switchTimer = setTimeout((function() {
                t.data._switInputing = !1
              }), 500);
              var e = "normal" === this.data.inputType ? "emoji" : "normal",
                o = this.data.showEmojiHistory ? [, , , ] : wx.getStorageSync("wxlive_player_emoji_history") || [];
              (this.storeData.isDevTools || this.storeData.isMac || this.storeData.isWindows) && this.storeSetData({
                keyboardHeight: 375
              }), this.data._switInputReady = !1, this.storeSetData({
                inputType: e,
                showEmojiHistory: o.length > 0
              })
            }
          },
          insertEmoji: function(t) {
            var e = this.data,
              o = e.curWriteCommentContent,
              i = e.cursorIndex,
              s = t.detail.emotionName,
              a = o.slice(0, i) + s + o.slice(i);
            a.length <= this.data.maxlength && this.storeSetData({
              isInsertEmoji: !0,
              curWriteCommentContent: a,
              _tmpWriteCommentContent: a,
              isSendDisabled: !a,
              cursorIndex: i + s.length
            })
          },
          deleteEmoji: function() {
            var t, e = this.data,
              o = e.curWriteCommentContent,
              i = e.cursorIndex,
              s = o.slice(i - 1, i),
              a = 1;
            "]" === s && function() {
              for (var t = "", e = i - 1; e > -1; e--)
                if ("[" === o.charAt(e)) {
                  (t = o.slice(e, i)) && p.EmojiData.some((function(e) {
                    return e.cn === t
                  })) && (a = t.length);
                  break
                }
            }(), t = o.slice(0, i - a) + o.slice(i, o.length), console.log("deleteEmoji cursorIndex cursorIndex   -----\x3e ", i), i = i - a > 0 ? i - a : 0, this.storeSetData({
              cursorIndex: i,
              curWriteCommentContent: t,
              isSendDisabled: !t
            })
          }
        }
      })
    },
    61: function(t, e, o) {
      t.exports = o(261)
    }
  },
  entries: [
    [61, 0, 1, 3, 6, 2, 4, 5, 7, 9, 20]
  ]
}]);
