$gwx0_XC_16 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_16 || [];

    function gz$gwx0_XC_16_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_16_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_16_1
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_16_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([
          [7],
          [3, 'showPopup']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_16_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_16_1
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_16 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_16 = true;
    var x = ['./yearCard/components/loading.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx0_XC_16_1()
      var lEG = _v()
      _(r, lEG)
      if (_oz(z, 0, e, s, gg)) {
        lEG.wxVkey = 1
      }
      lEG.wxXCkey = 1
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
        g = "$gwx0_XC_16";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_16();
if (__vd_version_info__.delayedGwx) __wxAppCode__['yearCard/components/loading.wxml'] = [$gwx0_XC_16, './yearCard/components/loading.wxml'];
else __wxAppCode__['yearCard/components/loading.wxml'] = $gwx0_XC_16('./yearCard/components/loading.wxml');;
__wxRoute = "yearCard/components/loading";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "yearCard/components/loading.js";
define("yearCard/components/loading.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["yearCard/components/loading"], {
      "21bf": function(n, o, e) {},
      "35e6": function(n, o, e) {
        e.r(o);
        var t = e("fc47"),
          a = e("7ad5");
        for (var c in a)["default"].indexOf(c) < 0 && function(n) {
          e.d(o, n, (function() {
            return a[n]
          }))
        }(c);
        e("4f38");
        var r = e("828b"),
          u = Object(r.a)(a.default, t.b, t.c, !1, null, "b037c622", null, !1, t.a, void 0);
        o.default = u.exports
      },
      "4f38": function(n, o, e) {
        var t = e("21bf");
        e.n(t).a
      },
      "7ad5": function(n, o, e) {
        e.r(o);
        var t = e("a087"),
          a = e.n(t);
        for (var c in t)["default"].indexOf(c) < 0 && function(n) {
          e.d(o, n, (function() {
            return t[n]
          }))
        }(c);
        o.default = a.a
      },
      a087: function(n, o, e) {
        Object.defineProperty(o, "__esModule", {
          value: !0
        }), o.default = void 0;
        var t = {
          props: {
            show: {
              type: Boolean,
              default: !1
            },
            loadingErrText: {
              type: String,
              default: ""
            }
          },
          watch: {
            show: function(n) {
              this.showPopup = n
            },
            showPopup: function(n) {
              this.$emit("update:show", n)
            }
          },
          data: function() {
            return {
              showPopup: !1
            }
          }
        };
        o.default = t
      },
      fc47: function(n, o, e) {
        e.d(o, "b", (function() {
          return t
        })), e.d(o, "c", (function() {
          return a
        })), e.d(o, "a", (function() {}));
        var t = function() {
            this.$createElement;
            this._self._c
          },
          a = []
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["yearCard/components/loading-create-component", {
      "yearCard/components/loading-create-component": function(n, o, e) {
        e("df3c").createComponent(e("35e6"))
      }
    },
    [
      ["yearCard/components/loading-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'yearCard/components/loading.js'
});
require("yearCard/components/loading.js");
