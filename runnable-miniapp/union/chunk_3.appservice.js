$gwx4_XC_23 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
  return function(path, global) {
    if (typeof global === 'undefined') {
      if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
      else global = __GWX_GLOBAL__;
    }
    if (typeof __WXML_GLOBAL__ === 'undefined') {
      __WXML_GLOBAL__ = {};
    }
    __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
    var e_ = {}
    if (typeof(global.entrys) === 'undefined') global.entrys = {};
    e_ = global.entrys;
    var d_ = {}
    if (typeof(global.defines) === 'undefined') global.defines = {};
    d_ = global.defines;
    var f_ = {}
    if (typeof(global.modules) === 'undefined') global.modules = {};
    f_ = global.modules || {};
    var p_ = {}
    __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_23 || [];

    function gz$gwx4_XC_23_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_23_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_23_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_23_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'chat-input-bar-container data-v-58c37474'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'padding-bottom:'],
            [
              [2, '?:'],
              [
                [7],
                [3, 'isIos']
              ],
              [1, ''],
              [1, '30rpx']
            ]
          ],
          [1, ';']
        ])
        Z([3, 'chat-input-bar data-v-58c37474'])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'showSpeakBtn']
          ],
          [1, 2]
        ])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'showSpeakBtn']
          ],
          [1, 3]
        ])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'showSpeakBtn']
          ],
          [1, 1]
        ])
        Z(z[5])
        Z([
          [2, '&&'],
          [
            [2, '=='],
            [
              [7],
              [3, 'showSpeakBtn']
            ],
            [1, 1]
          ],
          [
            [7],
            [3, 'pushingProgress']
          ]
        ])
        Z([
          [7],
          [3, 'longPress']
        ])
        Z([
          [2, '!'],
          [
            [7],
            [3, 'pushingProgressShow']
          ]
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_23_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_23_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_23 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_23 = true;
    var x = ['./union/components1/chat-input-bar/chat-input-bar-by.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_23_1()
      var cEZ = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
      var aHZ = _n('view')
      _rz(z, aHZ, 'class', 2, e, s, gg)
      var tIZ = _v()
      _(aHZ, tIZ)
      if (_oz(z, 3, e, s, gg)) {
        tIZ.wxVkey = 1
      }
      var eJZ = _v()
      _(aHZ, eJZ)
      if (_oz(z, 4, e, s, gg)) {
        eJZ.wxVkey = 1
      }
      var bKZ = _v()
      _(aHZ, bKZ)
      if (_oz(z, 5, e, s, gg)) {
        bKZ.wxVkey = 1
      }
      var oLZ = _v()
      _(aHZ, oLZ)
      if (_oz(z, 6, e, s, gg)) {
        oLZ.wxVkey = 1
      }
      var xMZ = _v()
      _(aHZ, xMZ)
      if (_oz(z, 7, e, s, gg)) {
        xMZ.wxVkey = 1
      }
      tIZ.wxXCkey = 1
      eJZ.wxXCkey = 1
      bKZ.wxXCkey = 1
      oLZ.wxXCkey = 1
      xMZ.wxXCkey = 1
      _(cEZ, aHZ)
      var oFZ = _v()
      _(cEZ, oFZ)
      if (_oz(z, 8, e, s, gg)) {
        oFZ.wxVkey = 1
      }
      var lGZ = _v()
      _(cEZ, lGZ)
      if (_oz(z, 9, e, s, gg)) {
        lGZ.wxVkey = 1
      }
      oFZ.wxXCkey = 1
      lGZ.wxXCkey = 1
      _(r, cEZ)
      return r
    }
    e_[x[0]] = {
      f: m0,
      j: [],
      i: [],
      ti: [],
      ic: []
    }
    if (path && e_[path]) {
      return function(env, dd, global) {
        $gwxc = 0;
        var root = {
          "tag": "wx-page"
        };
        root.children = [];
        g = "$gwx4_XC_23";
        var main = e_[path].f
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        try {
          main(env, {}, root, global);
          _tsd(root)
        } catch (err) {
          console.log(err)
        };
        g = "";
        return root;
      }
    }
  }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_23();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/components1/chat-input-bar/chat-input-bar-by.wxml'] = [$gwx4_XC_23, './union/components1/chat-input-bar/chat-input-bar-by.wxml'];
else __wxAppCode__['union/components1/chat-input-bar/chat-input-bar-by.wxml'] = $gwx4_XC_23('./union/components1/chat-input-bar/chat-input-bar-by.wxml');;
__wxRoute = "union/components1/chat-input-bar/chat-input-bar-by";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/components1/chat-input-bar/chat-input-bar-by.js";
define("union/components1/chat-input-bar/chat-input-bar-by.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
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
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'union/components1/chat-input-bar/chat-input-bar-by.js'
});
require("union/components1/chat-input-bar/chat-input-bar-by.js");
