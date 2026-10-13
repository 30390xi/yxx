require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/chat-input-bar/chat-input-bar-greatWall"], {
    1297: function(t, e, n) {
      n.r(e);
      var o = n("33e5"),
        i = n("c27a");
      for (var s in i)["default"].indexOf(s) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(s);
      n("b4b9");
      var a = n("828b"),
        c = Object(a.a)(i.default, o.b, o.c, !1, null, "edb66738", null, !1, o.a, void 0);
      e.default = c.exports
    },
    "33e5": function(t, e, n) {
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return i
      })), n.d(e, "a", (function() {}));
      var o = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.definedQuestion && t.definedQuestion.length > 0);
          t._isMounted || (t.e0 = function(e) {
            t.showSpeakBtn = 1
          }), t.$mp.data = Object.assign({}, {
            $root: {
              g0: e
            }
          })
        },
        i = []
    },
    "61f3": function(t, e, n) {},
    9652: function(t, e, n) {
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
              speakInfo: {
                type: Object,
                default: function() {
                  return {
                    language: 1,
                    gender: "man"
                  }
                }
              },
              lang: {
                type: String,
                default: function() {
                  return "zh"
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
              spot: {
                type: String,
                default: function() {
                  return "aiGreatWall"
                }
              },
              pushingProgressShow: {
                type: Boolean,
                default: function() {
                  return !0
                }
              },
              definedQuestion: {
                type: Array,
                default: function() {
                  return []
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
              var e = this;
              this.initVoice();
              try {
                t && t.onAppShow && t.onAppShow((function() {
                  e.longPress && e.handleTouchCancel()
                }))
              } catch (t) {}
            },
            watch: {
              pushingProgress: function(t) {
                if (!t) {
                  this.touched = !1, this.longPress = !1, this.showSpeakBtn = 1;
                  try {
                    o.stop()
                  } catch (t) {}
                }
              }
            },
            methods: {
              askClick: function(t) {
                if (this.$eventAnalyse.analyse({
                    eventTag: this.spot + "_tips_click",
                    eventName: "aiGreatWall" == this.spot ? "城墙客服点击底部问题" : "大唐芙蓉园客服点击底部问题",
                    eventParams: {
                      message: t.description || ""
                    }
                  }), !this.pushingProgress) return this.$util.showToast("zh" == this.lang ? "请稍候" : "Please wait"), !1;
                t.picture ? this.showArtMenu(t.picture) : 130 != t.id && 131 != t.id ? 132 != t.id && 133 != t.id ? this.sendMsg(t.description) : this.$emit("showToastPop", t) : n.navigateTo({
                  url: "/pages/webpage/webpage?url=https://eshop.zhiyousx.com/dsmall-admin-ui/h5/photoPose.html*lang+".concat(this.lang)
                })
              },
              stopVoice: function() {
                this.touched = !1, this.longPress = !1, this.showSpeakBtn = 2, o.stop()
              },
              keystart: function(t) {
                var e = this;
                this.pushingProgress ? this.longPress ? (this.touched = !1, this.longPress = !1, this.showSpeakBtn = 2, o.stop()) : (this.showSpeakBtn = 3, this.touched = !0, n.vibrateShort(), this.recordShow().then((function(t) {
                  t ? e.touched && (e.longPress = !0, o.start({
                    duration: 6e4
                  })) : e.touched = !1
                }))) : this.$util.showToast("zh" == this.lang ? "正在回答，请稍候" : "Answering, please wait")
              },
              getSpeak: function() {
                this.pushingProgress ? this.showSpeakBtn = 2 : this.$util.showToast("zh" == this.lang ? "正在回答，请稍候" : "Answering, please wait")
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
                  t.msg = n, t.longPress = !1, t.touched = !1, t.showSpeakBtn = 1
                }, o.onStart = function(t) {
                  console.log("成功开始录音识别", t)
                }, o.onError = function(e) {
                  console.error("error msg", e.msg), t.touched = !1, t.longPress = !1, t.showSpeakBtn = 2
                }
              },
              updateKeyboardHeightChange: function(t) {
                t.height > 0 && (this.emojiType = "emoji")
              },
              hidedKeyboard: function() {
                "keyboard" === this.emojiType && (this.emojiType = "")
              },
              emojiChange: function() {
                this.$emit("emojiTypeChange", this.emojiType), "keyboard" === this.emojiType ? this.focus = !0 : (this.focus = !1, n.hideKeyboard()), this.emojiType = this.emojiType && "emoji" !== this.emojiType ? "emoji" : "keyboard"
              },
              emojiClick: function(t) {
                this.msg += t
              },
              sendClick: function() {
                this.sendMsg(this.msg) && (this.msg = "")
              },
              sendMsg: function(t) {
                return this.pushingProgress ? t.length ? (this.$emit("send", t), !0) : (this.$util.showToast("zh" == this.lang ? "请输入您的问题" : "Please enter your question"), !1) : (this.$util.showToast("zh" == this.lang ? "请稍候" : "Please wait"), !1)
              },
              recordShow: function() {
                var e = this;
                return new Promise((function(o, i) {
                  n.getSetting({
                    success: function(i) {
                      i.authSetting["scope.record"] ? i.authSetting["scope.record"] && o(!0) : n.authorize({
                        scope: "scope.record",
                        success: function() {
                          o(!0)
                        },
                        fail: function() {
                          o(!1), t.showModal({
                            title: "提示",
                            content: "您未授权录音，功能将无法使用",
                            showCancel: !0,
                            confirmText: "授权",
                            confirmColor: "#52a2d8",
                            success: function(e) {
                              e.confirm ? t.openSetting({
                                success: function(e) {
                                  e.authSetting["scope.record"] ? (o(!1), console.log("未设置录音授权1")) : (console.log("未设置录音授权"), t.showModal({
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
              showArtMenu: function(t) {
                n.previewImage({
                  urls: [t],
                  current: t
                })
              },
              keyend: function(t) {},
              handleTouchCancel: function() {
                this.touched = !1, this.longPress = !1, this.showSpeakBtn = 2;
                try {
                  o.stop()
                } catch (t) {}
              }
            }
          };
        e.default = i
      }).call(this, n("3223").default, n("df3c").default)
    },
    b4b9: function(t, e, n) {
      var o = n("61f3");
      n.n(o).a
    },
    c27a: function(t, e, n) {
      n.r(e);
      var o = n("9652"),
        i = n.n(o);
      for (var s in o)["default"].indexOf(s) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(s);
      e.default = i.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-input-bar/chat-input-bar-greatWall-create-component", {
    "union/components1/chat-input-bar/chat-input-bar-greatWall-create-component": function(t, e, n) {
      n("df3c").createComponent(n("1297"))
    }
  },
  [
    ["union/components1/chat-input-bar/chat-input-bar-greatWall-create-component"]
  ]
]);
