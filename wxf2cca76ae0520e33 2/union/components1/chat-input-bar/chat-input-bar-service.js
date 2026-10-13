require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/chat-input-bar/chat-input-bar-service"], {
    "1cfa": function(e, t, n) {
      n.r(t);
      var o = n("5fbc"),
        i = n.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      t.default = i.a
    },
    "530d": function(e, t, n) {},
    "5fbc": function(e, t, n) {
      (function(e, n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
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
                imageList: [],
                show: !1,
                showImage: !1,
                clickShow: !1,
                officialAccount: "",
                schedule: ""
              }
            },
            mounted: function() {
              var e = this;
              this.initVoice(), this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "WALL_ACTIVITY_IMGS"
              }).then((function(t) {
                1 === t.code && (console.log(t.data), e.imageList = JSON.parse(t.data.paramValue).imageList || [], e.officialAccount = JSON.parse(t.data.paramValue).officialAccount || "", e.schedule = JSON.parse(t.data.paramValue).schedule || "")
              }))
            },
            methods: {
              previewImageClick: function() {
                e.previewImage({
                  urls: [this.officialAccount]
                })
              },
              onLongPress: function() {},
              goPage: function(t) {
                if (4 == t.type) this.$eventAnalyse.analyse({
                  eventTag: "wall_customerService_click",
                  eventName: "人工客服"
                }), this.show = !0;
                else if (5 == t.type) this.$eventAnalyse.analyse({
                  eventTag: "wall_schedule_click",
                  eventName: "预览演出时刻表"
                }), e.previewImage({
                  urls: [this.schedule]
                });
                else if (3 == t.type) t.path, this.$util.isLogin(t.path) && (this.$eventAnalyse.analyse({
                  eventTag: "wall_explanation_click",
                  eventName: "灯会讲解",
                  eventParams: {
                    url: t.path
                  }
                }), this.$navigateTo({
                  url: t.path
                }));
                else {
                  var n = "",
                    o = "";
                  1 == t.type ? (n = "灯会活动", o = "lamp") : 2 == t.type ? (n = "对春联", o = "pairUp") : (n = t.str, o = t.str1), this.$eventAnalyse.analyse({
                    eventTag: "wall_" + o + "_click",
                    eventName: n,
                    eventParams: {
                      url: t.path
                    }
                  }), this.$navigateTo({
                    url: t.path
                  })
                }
              },
              setcolse: function() {
                this.showSpeakBtn = 1, this.$emit("clearData")
              },
              stopVoice: function() {
                this.touched = !1, this.longPress = !1, this.showSpeakBtn = 2, o.stop()
              },
              keystart: function(t) {
                var n = this;
                this.longPress ? (this.touched = !1, this.longPress = !1, this.showSpeakBtn = 2, o.stop()) : (this.showSpeakBtn = 3, this.touched = !0, e.vibrateShort(), this.recordShow().then((function(e) {
                  e ? n.touched && (n.longPress = !0, o.start({
                    duration: 1e4
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
                  e.sendMsg(n)
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
                  eventTag: "wall_sendQuestion_click",
                  eventName: "城墙客服发送问题",
                  eventParams: {
                    msg: this.msg
                  }
                }), this.sendMsg(this.msg) && (this.msg = "")
              },
              sendMsg: function(e) {
                return this.pushingProgress ? e.length ? (this.showHide ? this.$emit("setShowHide", e) : this.$emit("send", e), !0) : (this.$util.showToast("请输入您的问题"), !1) : (this.$util.showToast("请稍候"), !1)
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
              }
            }
          };
        t.default = i
      }).call(this, n("df3c").default, n("3223").default)
    },
    cc78: function(e, t, n) {
      var o = n("530d");
      n.n(o).a
    },
    cfc5: function(e, t, n) {
      n.d(t, "b", (function() {
        return i
      })), n.d(t, "c", (function() {
        return a
      })), n.d(t, "a", (function() {
        return o
      }));
      var o = {
          uPopup: function() {
            return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null, "39fb"))
          }
        },
        i = function() {
          var e = this;
          e.$createElement;
          e._self._c, e._isMounted || (e.e0 = function(t) {
            e.showSpeakBtn = 1
          })
        },
        a = []
    },
    d54e: function(e, t, n) {
      n.r(t);
      var o = n("cfc5"),
        i = n("1cfa");
      for (var a in i)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(a);
      n("cc78");
      var s = n("828b"),
        c = Object(s.a)(i.default, o.b, o.c, !1, null, "b30b1ec8", null, !1, o.a, void 0);
      t.default = c.exports
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-input-bar/chat-input-bar-service-create-component", {
    "union/components1/chat-input-bar/chat-input-bar-service-create-component": function(e, t, n) {
      n("df3c").createComponent(n("d54e"))
    }
  },
  [
    ["union/components1/chat-input-bar/chat-input-bar-service-create-component"]
  ]
]);
