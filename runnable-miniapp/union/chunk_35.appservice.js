$gwx4_XC_29 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_29 || [];

    function gz$gwx4_XC_29_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_29_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_29_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_29_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_29_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_29_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_29 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_29 = true;
    var x = ['./union/pages/aiVideo/component/loading.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_29_1()
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
        g = "$gwx4_XC_29";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_29();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/aiVideo/component/loading.wxml'] = [$gwx4_XC_29, './union/pages/aiVideo/component/loading.wxml'];
else __wxAppCode__['union/pages/aiVideo/component/loading.wxml'] = $gwx4_XC_29('./union/pages/aiVideo/component/loading.wxml');;
__wxRoute = "union/pages/aiVideo/component/loading";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/aiVideo/component/loading.js";
define("union/pages/aiVideo/component/loading.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/aiVideo/component/loading"], {
      "546d": function(n, e, o) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0, e.default = {
          props: {}
        }
      },
      "6fc1": function(n, e, o) {
        var t = o("f9cd");
        o.n(t).a
      },
      "9ae6": function(n, e, o) {
        o.r(e);
        var t = o("c4b6"),
          a = o("be5d");
        for (var c in a)["default"].indexOf(c) < 0 && function(n) {
          o.d(e, n, (function() {
            return a[n]
          }))
        }(c);
        o("6fc1");
        var i = o("828b"),
          u = Object(i.a)(a.default, t.b, t.c, !1, null, "1c05b709", null, !1, t.a, void 0);
        e.default = u.exports
      },
      be5d: function(n, e, o) {
        o.r(e);
        var t = o("546d"),
          a = o.n(t);
        for (var c in t)["default"].indexOf(c) < 0 && function(n) {
          o.d(e, n, (function() {
            return t[n]
          }))
        }(c);
        e.default = a.a
      },
      c4b6: function(n, e, o) {
        o.d(e, "b", (function() {
          return t
        })), o.d(e, "c", (function() {
          return a
        })), o.d(e, "a", (function() {}));
        var t = function() {
            this.$createElement;
            this._self._c
          },
          a = []
      },
      f9cd: function(n, e, o) {}
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/pages/aiVideo/component/loading-create-component", {
      "union/pages/aiVideo/component/loading-create-component": function(n, e, o) {
        o("df3c").createComponent(o("9ae6"))
      }
    },
    [
      ["union/pages/aiVideo/component/loading-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'union/pages/aiVideo/component/loading.js'
});
require("union/pages/aiVideo/component/loading.js");
