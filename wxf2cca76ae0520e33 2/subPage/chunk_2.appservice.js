$gwx2_XC_12 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_12 || [];

    function gz$gwx2_XC_12_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_12_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_12_1
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_12_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__l'])
        Z([3, '__e'])
        Z([3, '20'])
        Z([3, 'data-v-2a2d465a'])
        Z([1, true])
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
                                [1, 'showCertificate']
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
        Z([3, 'bottom'])
        Z([
          [7],
          [3, 'showCertificate']
        ])
        Z([3, '6a70bf70-1'])
        Z([
          [4],
          [
            [5],
            [1, 'default']
          ]
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_12_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_12_1
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_12 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_12 = true;
    var x = ['./subPage/components/card-pop/candType.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx2_XC_12_1()
      var oHK = _mz(z, 'u-popup', ['bind:__l', 0, 'bind:input', 1, 'borderRadius', 1, 'class', 2, 'closeable', 3, 'data-event-opts', 4, 'mode', 5, 'value', 6, 'vueId', 7, 'vueSlots', 8], [], e, s, gg)
      _(r, oHK)
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
        g = "$gwx2_XC_12";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_12();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/components/card-pop/candType.wxml'] = [$gwx2_XC_12, './subPage/components/card-pop/candType.wxml'];
else __wxAppCode__['subPage/components/card-pop/candType.wxml'] = $gwx2_XC_12('./subPage/components/card-pop/candType.wxml');;
__wxRoute = "subPage/components/card-pop/candType";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPage/components/card-pop/candType.js";
define("subPage/components/card-pop/candType.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPage/components/card-pop/candType"], {
      "0915": function(e, n, t) {},
      "27fa": function(e, n, t) {
        var o = t("0915");
        t.n(o).a
      },
      "9a07": function(e, n, t) {
        t.r(n);
        var o = t("f9b0"),
          a = t.n(o);
        for (var r in o)["default"].indexOf(r) < 0 && function(e) {
          t.d(n, e, (function() {
            return o[e]
          }))
        }(r);
        n.default = a.a
      },
      b0c5: function(e, n, t) {
        t.r(n);
        var o = t("d98d"),
          a = t("9a07");
        for (var r in a)["default"].indexOf(r) < 0 && function(e) {
          t.d(n, e, (function() {
            return a[e]
          }))
        }(r);
        t("27fa");
        var c = t("828b"),
          u = Object(c.a)(a.default, o.b, o.c, !1, null, "2a2d465a", null, !1, o.a, void 0);
        n.default = u.exports
      },
      d98d: function(e, n, t) {
        t.d(n, "b", (function() {
          return a
        })), t.d(n, "c", (function() {
          return r
        })), t.d(n, "a", (function() {
          return o
        }));
        var o = {
            uPopup: function() {
              return t.e("uview-ui/components/u-popup/u-popup").then(t.bind(null, "39fb"))
            }
          },
          a = function() {
            var e = this,
              n = (e.$createElement, e._self._c, e.__map(e.realCardTypeList, (function(n, t) {
                return {
                  $orig: e.__get_orig(n),
                  g0: e.codes.includes(n),
                  f0: e._f("cardNameFilter")(n)
                }
              })));
            e.$mp.data = Object.assign({}, {
              $root: {
                l0: n
              }
            })
          },
          r = []
      },
      f9b0: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var o = {
          props: {
            showCardPop: {
              type: Boolean,
              default: function() {
                return !1
              }
            },
            realCardType: {
              type: Number,
              default: function() {
                return 0
              }
            },
            realCardTypeCodes: {
              type: Array,
              default: function() {
                return [0, 1, 2, 3, 4, 5, 6, 7, 8]
              }
            }
          },
          watch: {
            showCardPop: function(e) {
              this.showCertificate = e
            },
            showCertificate: function(e) {
              e || this.$emit("closePop")
            },
            realCardTypeCodes: function(e) {
              e && (this.codes = e.map((function(e) {
                return Number(e)
              })))
            }
          },
          data: function() {
            return {
              showCertificate: !1,
              realCardTypeList: [0, 1, 2, 3, 4, 5, 6, 7, 8],
              codes: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            }
          },
          methods: {
            chooseCardType: function(e) {
              this.codes.includes(e) ? this.$emit("chooseCardType", e) : this.$util.showToast("产品暂不支持此证件类型")
            }
          }
        };
        n.default = o
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/card-pop/candType-create-component", {
      "subPage/components/card-pop/candType-create-component": function(e, n, t) {
        t("df3c").createComponent(t("b0c5"))
      }
    },
    [
      ["subPage/components/card-pop/candType-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'subPage/components/card-pop/candType.js'
});
require("subPage/components/card-pop/candType.js");
