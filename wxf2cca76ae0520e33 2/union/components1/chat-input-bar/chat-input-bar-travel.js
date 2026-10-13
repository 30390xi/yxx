require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/chat-input-bar/chat-input-bar-travel"], {
    "0e34": function(t, e, n) {
      n.r(e);
      var o = n("fb879"),
        i = n("d0cf");
      for (var s in i)["default"].indexOf(s) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(s);
      n("a8ce");
      var a = n("828b"),
        c = Object(a.a)(i.default, o.b, o.c, !1, null, "02d04554", null, !1, o.a, void 0);
      e.default = c.exports
    },
    a8ce: function(t, e, n) {
      var o = n("d526");
      n.n(o).a
    },
    d0cf: function(t, e, n) {
      n.r(e);
      var o = n("e5a5"),
        i = n.n(o);
      for (var s in o)["default"].indexOf(s) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(s);
      e.default = i.a
    },
    d526: function(t, e, n) {},
    e5a5: function(t, e, n) {
      (function(t, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = requirePlugin("WechatSI").getRecordRecognitionManager(),
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
              pushingProgress: {
                type: Boolean,
                default: function() {
                  return !1
                }
              },
              showHide: {
                type: Boolean,
                default: function() {
                  return !0
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
              delayBtn: {
                type: Boolean,
                default: function() {
                  return !1
                }
              },
              isStrategy: {
                type: Boolean,
                default: function() {}
              },
              isHistory: {
                type: Boolean,
                default: function() {}
              }
            },
            data: function() {
              return {
                msg: "",
                focus: !1,
                emojiType: "",
                showSpeakBtn: 1,
                longPress: !1,
                touched: !1
              }
            },
            mounted: function() {
              this.initVoice()
            },
            methods: {
              resetTravel: function() {
                this.$emit("resetTravel")
              },
              goHistory: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "aiTravel_history_click",
                  eventName: "点击进入旅行搭子历史记录页",
                  eventParams: {
                    pagePath: "/union/pages/aiTravel/historyList"
                  }
                }), this.pushingProgressShow ? (this.$emit("clearDataStop"), t.navigateTo({
                  url: "/union/pages/aiTravel/historyList"
                })) : this.$util.showToast("正在回答，请稍候")
              },
              stopVoice: function() {
                this.touched = !1, this.longPress = !1, this.showSpeakBtn = 2, o.stop()
              },
              keystart: function(e) {
                var n = this;
                this.longPress ? (this.touched = !1, this.longPress = !1, this.showSpeakBtn = 2, o.stop()) : (this.showSpeakBtn = 3, this.touched = !0, t.vibrateShort(), this.recordShow().then((function(t) {
                  t ? n.touched && (n.longPress = !0, o.start({
                    duration: 6e4
                  })) : n.touched = !1
                })))
              },
              getSpeak: function() {
                this.showSpeakBtn = 2
              },
              setcolse: function() {
                this.showSpeakBtn = 1, this.$emit("setcolse")
              },
              stopSpeak: function() {
                this.$emit("stopSpeak")
              },
              initVoice: function() {
                console.log(o);
                var t = this;
                o.onStop = function(e) {
                  console.log("record file path", e.tempFilePath), console.log("result", e.result);
                  var n = e.result;
                  t.msg = n, t.showSpeakBtn = 1
                }, o.onStart = function(t) {
                  console.log("成功开始录音识别", t)
                }, o.onError = function(t) {
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
              askClick: function(t) {
                this.sendMsg(t)
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
              sendMsg: function(t) {
                return this.pushingProgress ? t.length ? (this.showHide ? this.$emit("setShowHide", t) : this.$emit("send", t), !0) : (this.$util.showToast("请输入您的问题"), !1) : (this.$util.showToast("请稍候"), !1)
              },
              recordShow: function() {
                var e = this;
                return new Promise((function(o, i) {
                  t.getSetting({
                    success: function(i) {
                      i.authSetting["scope.record"] ? i.authSetting["scope.record"] && o(!0) : t.authorize({
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
                            success: function(t) {
                              t.confirm ? n.openSetting({
                                success: function(t) {
                                  t.authSetting["scope.record"] ? (o(!1), console.log("未设置录音授权1")) : (console.log("未设置录音授权"), n.showModal({
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
                              e.showSpeakBtn = 2, console.log("未设置录音授权4"), o(!1)
                            },
                            complete: function() {
                              e.showSpeakBtn = 2, console.log("未设置录音授权5")
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
        e.default = i
      }).call(this, n("df3c").default, n("3223").default)
    },
    fb879: function(t, e, n) {
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return i
      })), n.d(e, "a", (function() {}));
      var o = function() {
          var t = this;
          t.$createElement;
          t._self._c, t._isMounted || (t.e0 = function(e) {
            t.showSpeakBtn = 1
          })
        },
        i = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-input-bar/chat-input-bar-travel-create-component", {
    "union/components1/chat-input-bar/chat-input-bar-travel-create-component": function(t, e, n) {
      n("df3c").createComponent(n("0e34"))
    }
  },
  [
    ["union/components1/chat-input-bar/chat-input-bar-travel-create-component"]
  ]
]);
