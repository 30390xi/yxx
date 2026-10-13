$gwx0_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_0 || [];

    function gz$gwx0_XC_0_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__l'])
        Z([3, '__e'])
        Z([3, '20'])
        Z([3, 'calc-module data-v-2b806a1e'])
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
                                [1, 'show']
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
        Z([1, false])
        Z(z[5])
        Z([
          [7],
          [3, 'show']
        ])
        Z([3, '7d3b9d42-1'])
        Z([
          [4],
          [
            [5],
            [1, 'default']
          ]
        ])
        Z([3, 'slot-content data-v-2b806a1e'])
        Z(z[0])
        Z([3, '#D29B9B'])
        Z([3, 'data-v-2b806a1e'])
        Z([3, '#391818'])
        Z([3, '28'])
        Z([3, '82'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '7d3b9d42-2'],
            [1, ',']
          ],
          [1, '7d3b9d42-1']
        ])
        Z(z[9])
        Z([3, '#ffffff'])
        Z(z[0])
        Z(z[13])
        Z([3, '#999999'])
        Z([1, 8000])
        Z([3, '24'])
        Z([
          [4],
          [
            [5],
            [1, '权益价值为该景区成人票窗口门市价']
          ]
        ])
        Z([3, 'vertical'])
        Z([3, '0 0'])
        Z(z[5])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '7d3b9d42-3'],
            [1, ',']
          ],
          [1, '7d3b9d42-1']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_0_1
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_0 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_0 = true;
    var x = ['./yearCard/components/calculator.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx0_XC_0_1()
      var oB = _mz(z, 'u-modal', ['bind:__l', 0, 'bind:input', 1, 'borderRadius', 1, 'class', 2, 'data-event-opts', 3, 'showConfirmButton', 4, 'showTitle', 5, 'value', 6, 'vueId', 7, 'vueSlots', 8], [], e, s, gg)
      var xC = _n('view')
      _rz(z, xC, 'class', 10, e, s, gg)
      var oD = _mz(z, 'u-divider', ['bind:__l', 11, 'borderColor', 1, 'class', 2, 'color', 3, 'fontSize', 4, 'halfWidth', 5, 'vueId', 6, 'vueSlots', 7], [], e, s, gg)
      _(xC, oD)
      var fE = _mz(z, 'u-notice-bar', ['bgColor', 19, 'bind:__l', 1, 'class', 2, 'color', 3, 'duration', 4, 'fontSize', 5, 'list', 6, 'mode', 7, 'padding', 8, 'volumeIcon', 9, 'vueId', 10], [], e, s, gg)
      _(xC, fE)
      _(oB, xC)
      _(r, oB)
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
        g = "$gwx0_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['yearCard/components/calculator.wxml'] = [$gwx0_XC_0, './yearCard/components/calculator.wxml'];
else __wxAppCode__['yearCard/components/calculator.wxml'] = $gwx0_XC_0('./yearCard/components/calculator.wxml');;
__wxRoute = "yearCard/components/calculator";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "yearCard/components/calculator.js";
define("yearCard/components/calculator.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["yearCard/components/calculator"], {
      "07e2": function(n, e, t) {
        t.d(e, "b", (function() {
          return a
        })), t.d(e, "c", (function() {
          return u
        })), t.d(e, "a", (function() {
          return o
        }));
        var o = {
            uModal: function() {
              return t.e("uview-ui/components/u-modal/u-modal").then(t.bind(null, "0b84"))
            },
            uDivider: function() {
              return t.e("uview-ui/components/u-divider/u-divider").then(t.bind(null, "40b9"))
            },
            uNoticeBar: function() {
              return t.e("uview-ui/components/u-notice-bar/u-notice-bar").then(t.bind(null, "6587"))
            }
          },
          a = function() {
            this.$createElement;
            this._self._c
          },
          u = []
      },
      "3b6c": function(n, e, t) {},
      "6a47": function(n, e, t) {
        var o = t("3b6c");
        t.n(o).a
      },
      7062: function(n, e, t) {
        (function(n) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var t = {
            props: {
              show: {
                type: Boolean,
                default: !1
              },
              status: {
                type: Number,
                default: 1
              },
              info: {
                type: Object,
                default: function() {}
              }
            },
            options: {
              styleIsolation: "shared"
            },
            watch: {
              show: function(n) {
                this.showPopup = n
              },
              showPopup: function(n) {
                this.$emit("update:show", n)
              }
            },
            computed: {
              allPrice: function() {
                if (this.info.detailVOList && this.info.detailVOList.length) {
                  var n = this.info.detailVOList.reduce((function(n, e) {
                    return n + e.cost
                  }), 0);
                  return Math.floor(100 * n) / 100
                }
              }
            },
            data: function() {
              return {
                showPopup: !1
              }
            },
            methods: {
              close: function() {
                this.showPopup = !1
              },
              goExchange: function() {
                n.navigateTo({
                  url: "/yearCard/pages/exchangeCard/exchangeCard"
                })
              },
              emitPurchase: function() {
                this.$emit("handlePurchase")
              },
              buyAgain: function() {
                n.navigateTo({
                  url: "/yearCard/pages/index/index"
                })
              }
            },
            mounted: function() {
              console.log(this.$refs.notice)
            }
          };
          e.default = t
        }).call(this, t("df3c").default)
      },
      "9ba9": function(n, e, t) {
        t.r(e);
        var o = t("7062"),
          a = t.n(o);
        for (var u in o)["default"].indexOf(u) < 0 && function(n) {
          t.d(e, n, (function() {
            return o[n]
          }))
        }(u);
        e.default = a.a
      },
      a217: function(n, e, t) {
        t.r(e);
        var o = t("07e2"),
          a = t("9ba9");
        for (var u in a)["default"].indexOf(u) < 0 && function(n) {
          t.d(e, n, (function() {
            return a[n]
          }))
        }(u);
        t("6a47"), t("cc66");
        var i = t("828b"),
          c = Object(i.a)(a.default, o.b, o.c, !1, null, "2b806a1e", null, !1, o.a, void 0);
        e.default = c.exports
      },
      aa1d: function(n, e, t) {},
      cc66: function(n, e, t) {
        var o = t("aa1d");
        t.n(o).a
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["yearCard/components/calculator-create-component", {
      "yearCard/components/calculator-create-component": function(n, e, t) {
        t("df3c").createComponent(t("a217"))
      }
    },
    [
      ["yearCard/components/calculator-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'yearCard/components/calculator.js'
});
require("yearCard/components/calculator.js");
