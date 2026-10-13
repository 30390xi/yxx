$gwx4_XC_27 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_27 || [];

    function gz$gwx4_XC_27_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_27_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_27_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_27_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'container data-v-4eda9f98'])
        Z([3, '__l'])
        Z([3, 'data-v-4eda9f98'])
        Z([3, ' '])
        Z([3, 'transparentFixed'])
        Z([3, '5a367cf9-1'])
        Z(z[1])
        Z([3, '__e'])
        Z([3, '#ffffff'])
        Z([3, 'page-box-image22 data-v-4eda9f98 vue-ref'])
        Z([
          [4],
          [
            [5],
            [
              [4],
              [
                [5],
                [
                  [5],
                  [1, '^input']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [
                          [5],
                          [1, '__set_model']
                        ],
                        [
                          [4],
                          [
                            [5],
                            [
                              [5],
                              [
                                [5],
                                [
                                  [5],
                                  [1, '']
                                ],
                                [1, 'dataList']
                              ],
                              [1, '$event']
                            ],
                            [
                              [4],
                              [
                                [5]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, 'paging'])
        Z([
          [7],
          [3, 'isIos']
        ])
        Z([3, 'position:fixed;z-index:11;'])
        Z([1, true])
        Z(z[14])
        Z([
          [7],
          [3, 'dataList']
        ])
        Z([3, '5a367cf9-2'])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [1, 'default']
            ],
            [1, 'top']
          ]
        ])
        Z([3, 'chat-content data-v-4eda9f98'])
        Z([
          [7],
          [3, 'content']
        ])
        Z(z[1])
        Z(z[2])
        Z(z[20])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '5a367cf9-3'],
            [1, ',']
          ],
          [1, '5a367cf9-2']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_27_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_27_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_27 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_27 = true;
    var x = ['./union/pages/aiTravel2/loadPage.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_27_1()
      var oR2 = _n('view')
      _rz(z, oR2, 'class', 0, e, s, gg)
      var lS2 = _mz(z, 'uni-navbar', ['bind:__l', 1, 'class', 1, 'title', 2, 'type', 3, 'vueId', 4], [], e, s, gg)
      _(oR2, lS2)
      var aT2 = _mz(z, 'z-paging', ['bind:__l', 6, 'bind:input', 1, 'bottomBgColor', 2, 'class', 3, 'data-event-opts', 4, 'data-ref', 5, 'safeAreaInsetBottom', 6, 'style', 7, 'toBottomLoadingMoreEnabled', 8, 'useChatRecordMode', 9, 'value', 10, 'vueId', 11, 'vueSlots', 12], [], e, s, gg)
      var tU2 = _n('view')
      _rz(z, tU2, 'class', 19, e, s, gg)
      var eV2 = _v()
      _(tU2, eV2)
      if (_oz(z, 20, e, s, gg)) {
        eV2.wxVkey = 1
        var bW2 = _mz(z, 'zero-markdown-view', ['bind:__l', 21, 'class', 1, 'markdown', 2, 'vueId', 3], [], e, s, gg)
        _(eV2, bW2)
      } else {
        eV2.wxVkey = 2
      }
      eV2.wxXCkey = 1
      eV2.wxXCkey = 3
      _(aT2, tU2)
      _(oR2, aT2)
      _(r, oR2)
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
        g = "$gwx4_XC_27";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_27();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/aiTravel2/loadPage.wxml'] = [$gwx4_XC_27, './union/pages/aiTravel2/loadPage.wxml'];
else __wxAppCode__['union/pages/aiTravel2/loadPage.wxml'] = $gwx4_XC_27('./union/pages/aiTravel2/loadPage.wxml');;
__wxRoute = "union/pages/aiTravel2/loadPage";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/aiTravel2/loadPage.js";
define("union/pages/aiTravel2/loadPage.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/aiTravel2/loadPage"], {
      "001c": function(e, t, n) {},
      "205bf": function(e, t, n) {
        (function(e, t) {
          var o = n("47a9");
          n("5366"), o(n("3240"));
          var i = o(n("ddec"));
          e.__webpack_require_UNI_MP_PLUGIN__ = n, t(i.default)
        }).call(this, n("3223").default, n("df3c").createPage)
      },
      "531e": function(e, t, n) {
        (function(e) {
          var o = n("47a9");
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var i = o(n("af34")),
            a = o(n("7ca3"));

          function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              t && (o = o.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              }))), n.push.apply(n, o)
            }
            return n
          }

          function s(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? r(Object(n), !0).forEach((function(t) {
                (0, a.default)(e, t, n[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }))
            }
            return e
          }
          var c = {
            components: {
              zeroMarkdownView: function() {
                n.e("union/components1/components/zero-markdown-view/zero-markdown-view").then(function() {
                  return resolve(n("dd9a"))
                }.bind(null, n)).catch(n.oe)
              },
              zPaging: function() {
                Promise.all([n.e("common/vendor"), n.e("union/common/vendor"), n.e("union/components1/z-paging/z-paging")]).then(function() {
                  return resolve(n("a7ee"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            onLoad: function(t) {
              var n = this;
              this.type = t.type, this.mode = +t.mode || 1, console.log("loadPage onLoad - type:", this.type, "mode:", this.mode), e.getStorageSync("wxopenid") ? this.getSession() : this.getOpenid().then((function(t) {
                e.setStorageSync("unionid", t.unionid), e.setStorageSync("wxopenid", t.openid), n.getSession()
              }))
            },
            onShow: function() {
              this.isHide && (this.isHide = !1, e.navigateBack())
            },
            onHide: function() {
              console.log("页面隐藏，中断流式请求"), this.isHide = !0, this.task && (this.task.abort(), this.task = null), this.clearAllTimers()
            },
            data: function() {
              return {
                content: "",
                form: null,
                flowId: "",
                task: null,
                timeNetwork: null,
                timerList: [],
                newVal: "",
                index: 0,
                loadingText: "您的攻略生成中...",
                dotsCount: 0,
                dotsTimer: null,
                gotoLogin: !1,
                isDestroyed: !1,
                mode: 1,
                isHide: !1
              }
            },
            onUnload: function() {
              this.isDestroyed = !0, this.task && (this.task.abort(), this.task = null), this.clearAllTimers(), this.dotsTimer && (clearInterval(this.dotsTimer), this.dotsTimer = null), this.timeNetwork && (clearTimeout(this.timeNetwork), this.timeNetwork = null), this.timerList.length > 0 && (this.timerList.forEach((function(e) {
                clearTimeout(e)
              })), this.timerList = [])
            },
            methods: {
              getSession: function() {
                "edit" == this.type ? (this.form = e.getStorageSync("editParam"), this.doSend(2)) : (this.form = e.getStorageSync("aiTravelFormData"), this.createSession()), this.startDotsAnimation()
              },
              createSession: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("post", "ai/aiEscort/session/create", {
                  bussType: 2,
                  openId: e.getStorageSync("wxopenid"),
                  title: "AI旅游行程规划"
                }).then((function(e) {
                  1 === e.code && (t.flowId = e.data, t.doSend(1))
                }))
              },
              getOpenid: function() {
                return new Promise((function(t, n) {
                  e.login({
                    success: function(o) {
                      e.request({
                        url: getApp().globalData.requestUrl + "manager/app/v1/wxPopular/getSessionKeyPro/".concat(o.code),
                        method: "GET",
                        success: function(e) {
                          1 === e.data.code ? t(e.data.data) : n(e)
                        },
                        fail: function(e) {
                          n(e)
                        }
                      })
                    }
                  })
                }))
              },
              doSend: function(t) {
                var n = this,
                  o = this,
                  a = {},
                  r = "";
                if (console.log("doSend - type:", t, "mode:", this.mode), 1 == t) {
                  r = "".concat(getApp().globalData.requestUrl, "ai/app/travel/plan");
                  var c = JSON.parse(JSON.stringify(this.form.wantDO));
                  c.push(1 === this.form.origin ? "本地人" : "外地人"), a = {
                    beginTime: this.form.beginTime,
                    endTime: this.form.endTime,
                    question: "",
                    city: this.form.city,
                    price: 1 === this.form.budgetType ? this.form.budget : 0,
                    perBudget: 2 === this.form.budgetType ? this.form.budget : 0,
                    wantDO: c,
                    adult: +this.form.adult,
                    children: +this.form.children,
                    older: +this.form.older,
                    userId: e.getStorageSync("wxopenid"),
                    sessionId: this.flowId,
                    bussType: 2,
                    travelTitle: this.form.travelTitle
                  }
                } else 2 == t && (r = 1 == this.mode ? "".concat(getApp().globalData.requestUrl, "ai/link/generate") : "".concat(getApp().globalData.requestUrl, "ai/app/share/edit"), a = s(s({}, this.form), {}, {
                  perBudget: "0",
                  openId: e.getStorageSync("wxopenid"),
                  bussType: 2,
                  title: "AI旅游行程规划",
                  travelTitle: this.form.travelTitle
                }));
                this.task = e.request({
                  url: r,
                  enableChunked: !0,
                  method: "POST",
                  timeout: 9e5,
                  data: a,
                  success: function(e) {
                    console.log(e, "success"), 200 == e.statusCode && n.addNextCharacter(), 400 == e.statusCode && (n.clearStarts(), n.content = "网络走丢了，请稍后重试!", n.task && n.task.abort()), n.clearAllTimers()
                  },
                  fail: function(e) {
                    "request:fail " == e.errMsg && (n.content = "网络走丢了，请稍后重试!", n.task && n.task.abort()), "request:fail abort" == e.errMsg && n.content && n.content.endsWith('<img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>') && (n.content = n.content.slice(0, n.content.length - 97))
                  }
                }), this.task.onChunkReceived((function(t) {
                  if (o.isDestroyed) o.task && (o.task.abort(), o.task = null);
                  else {
                    o.clearAllTimers(), o.timeNetwork = setTimeout((function() {
                      o.clearAllTimers(), n.$util.showToast("网络异常，请重试！"), n.content || (n.content = "网络走丢了，请稍后重试!"), n.task && (n.task.abort(), n.task = null)
                    }), 3e4), o.timerList.push(o.timeNetwork);
                    var a, r = new Uint8Array(t.data);
                    if ("[object Uint8Array]" === Object.prototype.toString.call(r)) a = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, i.default)(r))));
                    else if (r instanceof ArrayBuffer) {
                      var s = new Uint8Array(r);
                      a = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, i.default)(s))))
                    }
                    a.split("^").forEach((function(t) {
                      if (console.log(t, "it"), t) {
                        var i = JSON.parse(t);
                        0 == i.extend.type && "c001" == i.extend.code && (o.newVal += i.data, o.addNextCharacter()), "p001" == i.extend.code && (o.task && (o.task.abort(), o.task = null), o.dotsTimer && (clearInterval(o.dotsTimer), o.dotsTimer = null), "edit" == o.type && e.removeStorageSync("editParam"), e.redirectTo({
                          url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(i.data.sessionId)
                        })), "p004" == i.extend.code && (n.$refs.paging.scrollToTop(), n.loadingText = "正在生成卡片..."), "p011" == i.extend.code && (n.loadingText = "生成失败，请重试！", o.task && (o.task.abort(), o.task = null), o.clearAllTimers(), e.navigateBack())
                      }
                    }))
                  }
                }))
              },
              clearAllTimers: function() {
                this.timeNetwork && (clearTimeout(this.timeNetwork), this.timeNetwork = null), this.timerList.forEach((function(e) {
                  clearTimeout(e)
                })), this.timerList = []
              },
              addNextCharacter: function() {
                if (this.index < this.newVal.length) {
                  var e = "の" == this.newVal[this.index] ? "" : this.newVal[this.index];
                  this.content += e, this.index++, this.addNextCharacter()
                }
              },
              startDotsAnimation: function() {
                var e = this;
                this.dotsTimer = setInterval((function() {
                  e.dotsCount = (e.dotsCount + 1) % 4;
                  var t = ".".repeat(e.dotsCount);
                  e.loadingText.includes("正在生成卡片") ? e.loadingText = "正在生成卡片".concat(t) : e.loadingText = "您的攻略生成中".concat(t)
                }), 500)
              },
              navigateToCardPage: function(t) {
                try {
                  console.log("navigateToCardPage - sessionId:", t);
                  var n = getCurrentPages().length;
                  console.log("当前页面栈深度: ".concat(n)), n >= 8 ? (console.log("页面栈过深，使用 reLaunch 重新启动"), e.reLaunch({
                    url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(t)
                  })) : (console.log("页面栈正常，使用 redirectTo 跳转"), e.redirectTo({
                    url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(t)
                  }))
                } catch (n) {
                  console.error("页面跳转失败:", n), e.reLaunch({
                    url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(t)
                  })
                }
              }
            }
          };
          t.default = c
        }).call(this, n("df3c").default)
      },
      "5ddf": function(e, t, n) {
        n.d(t, "b", (function() {
          return i
        })), n.d(t, "c", (function() {
          return a
        })), n.d(t, "a", (function() {
          return o
        }));
        var o = {
            uniNavbar: function() {
              return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
            }
          },
          i = function() {
            this.$createElement;
            this._self._c
          },
          a = []
      },
      d88f: function(e, t, n) {
        var o = n("001c");
        n.n(o).a
      },
      ddec: function(e, t, n) {
        n.r(t);
        var o = n("5ddf"),
          i = n("f5e6");
        for (var a in i)["default"].indexOf(a) < 0 && function(e) {
          n.d(t, e, (function() {
            return i[e]
          }))
        }(a);
        n("d88f");
        var r = n("828b"),
          s = Object(r.a)(i.default, o.b, o.c, !1, null, "4eda9f98", null, !1, o.a, void 0);
        t.default = s.exports
      },
      f5e6: function(e, t, n) {
        n.r(t);
        var o = n("531e"),
          i = n.n(o);
        for (var a in o)["default"].indexOf(a) < 0 && function(e) {
          n.d(t, e, (function() {
            return o[e]
          }))
        }(a);
        t.default = i.a
      }
    },
    [
      ["205bf", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'union/pages/aiTravel2/loadPage.js'
});
require("union/pages/aiTravel2/loadPage.js");
