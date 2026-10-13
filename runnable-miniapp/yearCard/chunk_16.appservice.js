$gwx0_XC_7 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_7 || [];

    function gz$gwx0_XC_7_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_7_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_7_1
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_7_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__l'])
        Z([3, 'data-v-03e15530'])
        Z([3, 'transparentFixed'])
        Z([3, '4a01780c-1'])
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_7_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_7_1
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_7 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_7 = true;
    var x = ['./yearCard/pages/nfcVideo/nfcDetail.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx0_XC_7_1()
      var oPC = _mz(z, 'uni-navbar', ['bind:__l', 0, 'class', 1, 'type', 1, 'vueId', 2], [], e, s, gg)
      _(r, oPC)
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
        g = "$gwx0_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_7();
if (__vd_version_info__.delayedGwx) __wxAppCode__['yearCard/pages/nfcVideo/nfcDetail.wxml'] = [$gwx0_XC_7, './yearCard/pages/nfcVideo/nfcDetail.wxml'];
else __wxAppCode__['yearCard/pages/nfcVideo/nfcDetail.wxml'] = $gwx0_XC_7('./yearCard/pages/nfcVideo/nfcDetail.wxml');;
__wxRoute = "yearCard/pages/nfcVideo/nfcDetail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "yearCard/pages/nfcVideo/nfcDetail.js";
define("yearCard/pages/nfcVideo/nfcDetail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["yearCard/pages/nfcVideo/nfcDetail"], {
      "02a3d": function(n, e, a) {
        a.d(e, "b", (function() {
          return u
        })), a.d(e, "c", (function() {
          return r
        })), a.d(e, "a", (function() {
          return t
        }));
        var t = {
            uniNavbar: function() {
              return a.e("components/uni-navbar/uni-navbar").then(a.bind(null, "101a"))
            }
          },
          u = function() {
            this.$createElement;
            this._self._c
          },
          r = []
      },
      "133e": function(n, e, a) {
        a.r(e);
        var t = a("fe2f"),
          u = a.n(t);
        for (var r in t)["default"].indexOf(r) < 0 && function(n) {
          a.d(e, n, (function() {
            return t[n]
          }))
        }(r);
        e.default = u.a
      },
      "193a": function(n, e, a) {},
      "7da7": function(n, e, a) {
        (function(n, e) {
          var t = a("47a9");
          a("5366"), t(a("3240"));
          var u = t(a("7eb0"));
          n.__webpack_require_UNI_MP_PLUGIN__ = a, e(u.default)
        }).call(this, a("3223").default, a("df3c").createPage)
      },
      "7eb0": function(n, e, a) {
        a.r(e);
        var t = a("02a3d"),
          u = a("133e");
        for (var r in u)["default"].indexOf(r) < 0 && function(n) {
          a.d(e, n, (function() {
            return u[n]
          }))
        }(r);
        a("ffc3"), a("8561");
        var f = a("828b"),
          o = Object(f.a)(u.default, t.b, t.c, !1, null, "03e15530", null, !1, t.a, void 0);
        e.default = o.exports
      },
      8561: function(n, e, a) {
        var t = a("193a");
        a.n(t).a
      },
      bd46: function(n, e, a) {},
      fe2f: function(n, e, a) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0, e.default = {
          data: function() {
            return {
              imgUrl: ""
            }
          },
          onLoad: function(n) {
            this.imgUrl = n.url
          },
          methods: {}
        }
      },
      ffc3: function(n, e, a) {
        var t = a("bd46");
        a.n(t).a
      }
    },
    [
      ["7da7", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'yearCard/pages/nfcVideo/nfcDetail.js'
});
require("yearCard/pages/nfcVideo/nfcDetail.js");
