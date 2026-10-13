require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/chat-input-bar/chat-input-bar-by"], {
    "08d0": function(t, e, n) {
      n.r(e);
      var o = n("c63e"),
        s = n.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      e.default = s.a
    },
    "4ca9": function(t, e, n) {
      n.r(e);
      var o = n("d36f"),
        s = n("08d0");
      for (var a in s)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return s[t]
        }))
      }(a);
      n("61da");
      var i = n("828b"),
        c = Object(i.a)(s.default, o.b, o.c, !1, null, "58c37474", null, !1, o.a, void 0);
      e.default = c.exports
    },
    "61da": function(t, e, n) {
      var o = n("9fc4");
      n.n(o).a
    },
    "9fc4": function(t, e, n) {},
    c63e: function(t, e, n) {
      (function(t, o) {
        var s = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = s(n("30eb")),
          i = requirePlugin("WechatSI").getRecordRecognitionManager(),
          c = {
            name: "chat-input-bar",
            mixins: [a.default],
            props: {
              isTalking: {
                type: Boolean,
                default: function() {
                  return !1
                }
              },
              detail: {
                type: Object,
                default: function() {
                  return {
                    defaultProblemList: []
                  }
                }
              },
              speakInfo: {
                type: Object,
                default: function() {
                  return {
                    language: 1,
                    gender: "man"
                  }
                }
              },
              pushingProgress: {
                type: Boolean,
                default: function() {
                  return !1
                }
              },
              isIos: {
                type: Boolean,
                default: function() {
                  return !1
                }
              },
              pushingProgressShow: {
                type: Boolean,
                default: function() {
                  return !0
                }
              },
              teamType: {
                type: String,
                default: function() {
                  return "1"
                }
              }
            },
            data: function() {
              return {
                msg: "",
                focus: !1,
                emojiType: "",
                showSpeakBtn: 1,
                longPress: !1,
                touched: !1,
                hasHistory: !1
              }
            },
            mounted: function() {
              this.initVoice()
            },
            methods: {
              resetTravel: function() {
                this.pushingProgressShow ? this.$emit("resetTravel") : this.$util.showToast(this.$t("chatInputBar.messages.answering"))
              },
              stopVoice: function() {
                this.touched = !1, this.longPress = !1, this.showSpeakBtn = 2, i.stop()
              },
              keystart: function(e) {
                var n = this;
                this.longPress ? (this.touched = !1, this.longPress = !1, this.showSpeakBtn = 2, i.stop()) : (this.showSpeakBtn = 3, this.touched = !0, t.vibrateShort(), this.recordShow().then((function(t) {
                  t ? n.touched && (n.longPress = !0, i.start({
                    duration: 6e4
                  })) : n.touched = !1
                })))
              },
              getSpeak: function() {
                var t = this;
                this.pushingProgress ? this.recordShow().then((function(e) {
                  e && (t.showSpeakBtn = 2)
                })) : this.$util.showToast(this.$t("chatInputBar.messages.pleaseWait"))
              },
              stopSpeak: function() {
                this.$emit("stopSpeak")
              },
              initVoice: function() {
                console.log(i);
                var t = this;
                i.onStop = function(e) {
                  console.log("record file path", e.tempFilePath), console.log("result", e.result);
                  var n = e.result;
                  t.msg = n, t.showSpeakBtn = 1
                }, i.onStart = function(t) {
                  console.log("成功开始录音识别", t)
                }, i.onError = function(t) {
                  console.error("error msg", t.msg)
                }
              },
              updateKeyboardHeightChange: function(t) {
                t.height > 0 && (this.emojiType = "emoji")
              },
              hidedKeyboard: function() {
                "keyboard" === this.emojiType && (this.emojiType = "")
              },
              emojiChange: function() {
                this.$emit("emojiTypeChange", this.emojiType), "keyboard" === this.emojiType ? this.focus = !0 : (this.focus = !1, t.hideKeyboard()), this.emojiType = this.emojiType && "emoji" !== this.emojiType ? "emoji" : "keyboard"
              },
              emojiClick: function(t) {
                this.msg += t
              },
              sendClick: function() {
                1 == this.teamType ? this.$eventAnalyse.analyse({
                  eventTag: "ai_escort_click",
                  eventName: "省厅伴游发送问题",
                  eventParams: {
                    msg: this.msg
                  }
                }) : this.$eventAnalyse.analyse({
                  eventTag: "ai_escorteam_click",
                  eventName: "团队伴游发送问题",
                  eventParams: {
                    msg: this.msg
                  }
                }), this.sendMsg(this.msg) && (this.msg = "")
              },
              sendMsg: function(t) {
                return this.pushingProgress ? t.length ? (this.$emit("send", t), !0) : (this.$util.showToast(this.$t("chatInputBar.messages.pleaseEnterQuestion")), !1) : (this.$util.showToast(this.$t("chatInputBar.messages.pleaseWait")), !1)
              },
              recordShow: function() {
                var e = this;
                return new Promise((function(n, s) {
                  t.getSetting({
                    success: function(s) {
                      s.authSetting["scope.record"] ? s.authSetting["scope.record"] && n(!0) : t.authorize({
                        scope: "scope.record",
                        success: function() {
                          n(!0)
                        },
                        fail: function() {
                          n(!1), o.showModal({
                            title: e.$t("chatInputBar.modal.title"),
                            content: e.$t("chatInputBar.messages.noRecordAuth"),
                            showCancel: !0,
                            cancelText: e.$t("chatInputBar.modal.cancel"),
                            confirmText: e.$t("chatInputBar.modal.confirm"),
                            confirmColor: "#52a2d8",
                            success: function(t) {
                              var e = this;
                              t.confirm ? o.openSetting({
                                success: function(t) {
                                  t.authSetting["scope.record"] ? (n(!1), console.log("未设置录音授权1")) : (console.log("未设置录音授权"), o.showModal({
                                    title: e.$t("chatInputBar.modal.title"),
                                    content: e.$t("chatInputBar.messages.noRecordAuth"),
                                    showCancel: !1
                                  }), n(!1))
                                },
                                fail: function() {
                                  n(!1), console.log("未设置录音授权2")
                                }
                              }) : s.cancel && (console.log("未设置录音授权3"), n(!1))
                            },
                            fail: function() {
                              console.log("未设置录音授权4"), n(!1)
                            },
                            complete: function() {
                              console.log("未设置录音授权5")
                            }
                          })
                        }
                      })
                    }
                  })
                }))
              },
              keyend: function(t) {}
            }
          };
        e.default = c
      }).call(this, n("df3c").default, n("3223").default)
    },
    d36f: function(t, e, n) {
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return s
      })), n.d(e, "a", (function() {}));
      var o = function() {
          var t = this,
            e = (t.$createElement, t._self._c, 2 == t.showSpeakBtn ? t.$t("chatInputBar.messages.pressToSpeak") : null),
            n = 1 == t.showSpeakBtn ? t.$t("chatInputBar.messages.pleaseEnterQuestion") : null,
            o = t.$t("chatInputBar.messages.aiDisclaimer"),
            s = t.longPress ? t.$t("chatInputBar.messages.releaseToStop") : null,
            a = t.pushingProgressShow ? null : t.$t("chatInputBar.messages.stopAnswering");
          t._isMounted || (t.e0 = function(e) {
            t.showSpeakBtn = 1
          }), t.$mp.data = Object.assign({}, {
            $root: {
              m0: e,
              m1: n,
              m2: o,
              m3: s,
              m4: a
            }
          })
        },
        s = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-input-bar/chat-input-bar-by-create-component", {
    "union/components1/chat-input-bar/chat-input-bar-by-create-component": function(t, e, n) {
      n("df3c").createComponent(n("4ca9"))
    }
  },
  [
    ["union/components1/chat-input-bar/chat-input-bar-by-create-component"]
  ]
]);
