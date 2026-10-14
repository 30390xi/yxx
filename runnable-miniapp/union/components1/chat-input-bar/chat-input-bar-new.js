require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/chat-input-bar/chat-input-bar-new"], {
    5438: function(e, t, n) {
      n.r(t);
      var o = n("6f4f"),
        i = n("b7ac");
      for (var s in i)["default"].indexOf(s) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(s);
      n("9557");
      var a = n("828b"),
        c = Object(a.a)(i.default, o.b, o.c, !1, null, "765b9212", null, !1, o.a, void 0);
      t.default = c.exports
    },
    "6f4f": function(e, t, n) {
      n.d(t, "b", (function() {
        return o
      })), n.d(t, "c", (function() {
        return i
      })), n.d(t, "a", (function() {}));
      var o = function() {
          var e = this;
          e.$createElement;
          e._self._c, e._isMounted || (e.e0 = function(t) {
            e.showSpeakBtn = 1
          })
        },
        i = []
    },
    9557: function(e, t, n) {
      var o = n("ca94");
      n.n(o).a
    },
    b109: function(e, t, n) {
      (function(e, n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var voiceAvailable = !0,
          o = (function() {
            try { return requirePlugin("WechatSI").getRecordRecognitionManager() }
            catch (_) { voiceAvailable = !1; return { start: function() {}, stop: function() {} } }
          })(),
          i = {
            name: "chat-input-bar",
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
              }
            },
            data: function() {
              return {
                msg: "",
                voiceAvailable: voiceAvailable,
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
                this.$eventAnalyse.analyse({
                  eventTag: "ai_aiTravelEnter_click",
                  eventName: "小七点击进入旅行搭子",
                  eventParams: {
                    pagePath: "union/pages/aiTravel/index"
                  }
                }), this.pushingProgressShow ? this.$emit("resetTravel") : this.$util.showToast("正在回答，请稍候")
              },
              stopVoice: function() {
                this.touched = !1, this.longPress = !1, this.showSpeakBtn = 2, o.stop()
              },
              keystart: function(t) {
                var n = this;
                this.longPress ? (this.touched = !1, this.longPress = !1, this.showSpeakBtn = 2, o.stop()) : (this.showSpeakBtn = 3, this.touched = !0, e.vibrateShort(), this.recordShow().then((function(e) {
                  e ? n.touched && (n.longPress = !0, o.start({
                    duration: 6e4
                  })) : n.touched = !1
                })))
              },
              getSpeak: function() {
                this.showSpeakBtn = 2
              },
              stopSpeak: function() {
                this.$emit("stopSpeak")
              },
              initVoice: function() {
                console.log(o);
                var e = this;
                o.onStop = function(t) {
                  console.log("record file path", t.tempFilePath), console.log("result", t.result);
                  var n = t.result;
                  e.msg = n, e.showSpeakBtn = 1
                }, o.onStart = function(e) {
                  console.log("成功开始录音识别", e)
                }, o.onError = function(e) {
                  console.error("error msg", e.msg)
                }
              },
              updateKeyboardHeightChange: function(e) {
                e.height > 0 && (this.emojiType = "emoji")
              },
              hidedKeyboard: function() {
                "keyboard" === this.emojiType && (this.emojiType = "")
              },
              emojiChange: function() {
                this.$emit("emojiTypeChange", this.emojiType), "keyboard" === this.emojiType ? this.focus = !0 : (this.focus = !1, e.hideKeyboard()), this.emojiType = this.emojiType && "emoji" !== this.emojiType ? "emoji" : "keyboard"
              },
              emojiClick: function(e) {
                this.msg += e
              },
              sendClick: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_sendQuestion_click",
                  eventName: "伴游发送问题",
                  eventParams: {
                    msg: this.msg
                  }
                }), this.sendMsg(this.msg) && (this.msg = "")
              },
              sendMsg: function(e) {
                return this.pushingProgress ? e.length ? (this.$emit("send", e), !0) : (this.$util.showToast("请输入您的问题"), !1) : (this.$util.showToast("请稍候"), !1)
              },
              recordShow: function() {
                var t = this;
                return new Promise((function(o, i) {
                  e.getSetting({
                    success: function(i) {
                      i.authSetting["scope.record"] ? i.authSetting["scope.record"] && o(!0) : e.authorize({
                        scope: "scope.record",
                        success: function() {
                          o(!0)
                        },
                        fail: function() {
                          o(!1), n.showModal({
                            title: "提示",
                            content: "您未授权录音，功能将无法使用",
                            showCancel: !0,
                            confirmText: "授权",
                            confirmColor: "#52a2d8",
                            success: function(e) {
                              e.confirm ? n.openSetting({
                                success: function(e) {
                                  e.authSetting["scope.record"] ? (o(!1), console.log("未设置录音授权1")) : (console.log("未设置录音授权"), n.showModal({
                                    title: "提示",
                                    content: "您未授权录音，功能将无法使用",
                                    showCancel: !1
                                  }), o(!1))
                                },
                                fail: function() {
                                  o(!1), console.log("未设置录音授权2")
                                }
                              }) : i.cancel && (console.log("未设置录音授权3"), o(!1))
                            },
                            fail: function() {
                              t.showSpeakBtn = 2, console.log("未设置录音授权4"), o(!1)
                            },
                            complete: function() {
                              t.showSpeakBtn = 2, console.log("未设置录音授权5")
                            }
                          })
                        }
                      })
                    }
                  })
                }))
              },
              keyend: function(e) {}
            }
          };
        t.default = i
      }).call(this, n("df3c").default, n("3223").default)
    },
    b7ac: function(e, t, n) {
      n.r(t);
      var o = n("b109"),
        i = n.n(o);
      for (var s in o)["default"].indexOf(s) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(s);
      t.default = i.a
    },
    ca94: function(e, t, n) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-input-bar/chat-input-bar-new-create-component", {
    "union/components1/chat-input-bar/chat-input-bar-new-create-component": function(e, t, n) {
      n("df3c").createComponent(n("5438"))
    }
  },
  [
    ["union/components1/chat-input-bar/chat-input-bar-new-create-component"]
  ]
]);
