require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/chat-input-bar/chat-input-bar-couplet"], {
    "28d9": function(t, e, o) {
      o.r(e);
      var n = o("cf51"),
        i = o.n(n);
      for (var s in n)["default"].indexOf(s) < 0 && function(t) {
        o.d(e, t, (function() {
          return n[t]
        }))
      }(s);
      e.default = i.a
    },
    "3b95": function(t, e, o) {
      o.r(e);
      var n = o("85c4"),
        i = o("28d9");
      for (var s in i)["default"].indexOf(s) < 0 && function(t) {
        o.d(e, t, (function() {
          return i[t]
        }))
      }(s);
      o("f378");
      var c = o("828b"),
        a = Object(c.a)(i.default, n.b, n.c, !1, null, "23ff1ac8", null, !1, n.a, void 0);
      e.default = a.exports
    },
    "85c4": function(t, e, o) {
      o.d(e, "b", (function() {
        return n
      })), o.d(e, "c", (function() {
        return i
      })), o.d(e, "a", (function() {}));
      var n = function() {
          var t = this;
          t.$createElement;
          t._self._c, t._isMounted || (t.e0 = function(e) {
            t.showSpeakBtn = 1
          })
        },
        i = []
    },
    cf51: function(t, e, o) {
      (function(t, o) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = requirePlugin("WechatSI").getRecordRecognitionManager(),
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
                imageList: [{
                  image: "https://eshopfile.zhiyousx.com/173647545915089765.png",
                  path: ""
                }, {
                  image: "https://eshopfile.zhiyousx.com/173647547497996846.png",
                  path: ""
                }, {
                  image: "https://eshopfile.zhiyousx.com/173647548919818785.png",
                  path: ""
                }, {
                  image: "https://eshopfile.zhiyousx.com/173647549886073912.png",
                  path: ""
                }]
              }
            },
            mounted: function() {
              this.initVoice()
            },
            methods: {
              goPage: function(e) {
                e.path && t.navigateTo({
                  url: e.path
                })
              },
              setcolse: function() {
                this.showSpeakBtn = 1, this.$emit("clearData")
              },
              stopVoice: function() {
                this.touched = !1, this.longPress = !1, this.showSpeakBtn = 2, n.stop()
              },
              keystart: function(e) {
                var o = this;
                this.longPress ? (this.touched = !1, this.longPress = !1, this.showSpeakBtn = 2, n.stop()) : (this.showSpeakBtn = 3, this.touched = !0, t.vibrateShort(), this.recordShow().then((function(t) {
                  t ? o.touched && (o.longPress = !0, n.start({
                    duration: 1e4
                  })) : o.touched = !1
                })))
              },
              getSpeak: function() {
                this.showSpeakBtn = 2
              },
              stopSpeak: function() {
                this.$emit("stopSpeak")
              },
              initVoice: function() {
                console.log(n);
                var t = this;
                n.onStop = function(e) {
                  console.log("record file path", e.tempFilePath), console.log("result", e.result);
                  var o = e.result;
                  t.sendMsg(o)
                }, n.onStart = function(t) {
                  console.log("成功开始录音识别", t)
                }, n.onError = function(t) {
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
                this.sendMsg(this.msg) && (this.msg = "")
              },
              sendMsg: function(t) {
                return this.pushingProgress ? t.length ? (this.showHide ? this.$emit("setShowHide", t) : this.$emit("send", t), !0) : (this.$util.showToast("请输入您的问题"), !1) : (this.$util.showToast("请稍候"), !1)
              },
              recordShow: function() {
                var e = this;
                return new Promise((function(n, i) {
                  t.getSetting({
                    success: function(i) {
                      i.authSetting["scope.record"] ? i.authSetting["scope.record"] && n(!0) : t.authorize({
                        scope: "scope.record",
                        success: function() {
                          n(!0)
                        },
                        fail: function() {
                          n(!1), o.showModal({
                            title: "提示",
                            content: "您未授权录音，功能将无法使用",
                            showCancel: !0,
                            confirmText: "授权",
                            confirmColor: "#52a2d8",
                            success: function(t) {
                              t.confirm ? o.openSetting({
                                success: function(t) {
                                  t.authSetting["scope.record"] ? (n(!1), console.log("未设置录音授权1")) : (console.log("未设置录音授权"), o.showModal({
                                    title: "提示",
                                    content: "您未授权录音，功能将无法使用",
                                    showCancel: !1
                                  }), n(!1))
                                },
                                fail: function() {
                                  n(!1), console.log("未设置录音授权2")
                                }
                              }) : i.cancel && (console.log("未设置录音授权3"), n(!1))
                            },
                            fail: function() {
                              e.showSpeakBtn = 2, console.log("未设置录音授权4"), n(!1)
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
      }).call(this, o("df3c").default, o("3223").default)
    },
    f378: function(t, e, o) {
      var n = o("f81b");
      o.n(n).a
    },
    f81b: function(t, e, o) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-input-bar/chat-input-bar-couplet-create-component", {
    "union/components1/chat-input-bar/chat-input-bar-couplet-create-component": function(t, e, o) {
      o("df3c").createComponent(o("3b95"))
    }
  },
  [
    ["union/components1/chat-input-bar/chat-input-bar-couplet-create-component"]
  ]
]);
