$gwx0_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_1 || [];

    function gz$gwx0_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [
                  [5],
                  [1, 'cu-bar']
                ],
                [1, 'fixed']
              ],
              [1, 'data-v-330a7d9f']
            ],
            [
              [2, '?:'],
              [
                [2, '!='],
                [
                  [7],
                  [3, 'bgImage']
                ],
                [1, '']
              ],
              [1, 'none-bg text-white bg-img'],
              [1, '']
            ]
          ]
        ])
        Z([
          [7],
          [3, 'style']
        ])
        Z([
          [7],
          [3, 'isBack']
        ])
        Z([3, 'content data-v-330a7d9f'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'top:'],
            [
              [2, '+'],
              [
                [7],
                [3, 'StatusBar']
              ],
              [1, 'px']
            ]
          ],
          [1, ';']
        ])
        Z([
          [7],
          [3, 'title']
        ])
        Z([3, 'content'])
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_1_1
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_1 = true;
    var x = ['./yearCard/components/customNav.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx0_XC_1_1()
      var hG = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
      var oH = _v()
      _(hG, oH)
      if (_oz(z, 2, e, s, gg)) {
        oH.wxVkey = 1
      }
      var cI = _mz(z, 'view', ['class', 3, 'style', 1], [], e, s, gg)
      var oJ = _v()
      _(cI, oJ)
      if (_oz(z, 5, e, s, gg)) {
        oJ.wxVkey = 1
      }
      var lK = _n('slot')
      _rz(z, lK, 'name', 6, e, s, gg)
      _(cI, lK)
      oJ.wxXCkey = 1
      _(hG, cI)
      oH.wxXCkey = 1
      _(r, hG)
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
        g = "$gwx0_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['yearCard/components/customNav.wxml'] = [$gwx0_XC_1, './yearCard/components/customNav.wxml'];
else __wxAppCode__['yearCard/components/customNav.wxml'] = $gwx0_XC_1('./yearCard/components/customNav.wxml');;
__wxRoute = "yearCard/components/customNav";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "yearCard/components/customNav.js";
define("yearCard/components/customNav.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["yearCard/components/customNav"], {
      "1c22": function(t, a, e) {},
      4105: function(t, a, e) {
        e.r(a);
        var n = e("98af"),
          o = e("586b");
        for (var c in o)["default"].indexOf(c) < 0 && function(t) {
          e.d(a, t, (function() {
            return o[t]
          }))
        }(c);
        e("c889");
        var r = e("828b"),
          u = Object(r.a)(o.default, n.b, n.c, !1, null, "330a7d9f", null, !1, n.a, void 0);
        a.default = u.exports
      },
      "586b": function(t, a, e) {
        e.r(a);
        var n = e("7d13"),
          o = e.n(n);
        for (var c in n)["default"].indexOf(c) < 0 && function(t) {
          e.d(a, t, (function() {
            return n[t]
          }))
        }(c);
        a.default = o.a
      },
      "7d13": function(t, a, e) {
        (function(t) {
          var n = e("47a9");
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.default = void 0;
          var o = n(e("2b26")),
            c = {
              externalClasses: ["mu-class"],
              data: function() {
                return {
                  StatusBar: getApp().globalData.StatusBar,
                  CustomBar: getApp().globalData.CustomBar,
                  firstPage: 1 === getCurrentPages().length
                }
              },
              name: "custom-nav",
              computed: {
                style: function() {
                  var t = "height:".concat(this.CustomBar, "px;padding-top:").concat(this.StatusBar, "px;");
                  return this.bgImage && ("".concat(t, "background-image:url(").concat(this.bgImage, ");"), (0, o.default)("style")), t
                },
                topOpacity: function() {
                  return this.scrollTop / 100 > .9 ? 1 : this.scrollTop / 100
                },
                scrollTopShow: function() {
                  return 0 === this.scrollTop
                }
              },
              props: {
                isBack: {
                  type: [Boolean, String],
                  default: !0
                },
                bgImage: {
                  type: String,
                  default: ""
                },
                scrollTop: {
                  type: Number,
                  default: 0
                },
                title: {
                  type: String,
                  default: ""
                },
                titleColor: {
                  type: String,
                  default: "#000000"
                },
                backFun: {
                  type: Boolean,
                  default: !1
                }
              },
              methods: {
                BackPage: function() {
                  if (this.backFun) return this.$emit("back");
                  this.firstPage ? t.switchTab({
                    url: "/pages/index/index"
                  }) : t.navigateBack({
                    delta: 1
                  })
                }
              }
            };
          a.default = c
        }).call(this, e("df3c").default)
      },
      "98af": function(t, a, e) {
        e.d(a, "b", (function() {
          return n
        })), e.d(a, "c", (function() {
          return o
        })), e.d(a, "a", (function() {}));
        var n = function() {
            this.$createElement;
            this._self._c
          },
          o = []
      },
      c889: function(t, a, e) {
        var n = e("1c22");
        e.n(n).a
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["yearCard/components/customNav-create-component", {
      "yearCard/components/customNav-create-component": function(t, a, e) {
        e("df3c").createComponent(e("4105"))
      }
    },
    [
      ["yearCard/components/customNav-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'yearCard/components/customNav.js'
});
require("yearCard/components/customNav.js");
