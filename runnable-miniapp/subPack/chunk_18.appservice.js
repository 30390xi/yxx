$gwx1_XC_10 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_10 || [];

    function gz$gwx1_XC_10_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_10_1
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_10 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_10 = true;
    var x = ['./subPack/pages/edition/edition.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_10_1()
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
        g = "$gwx1_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_10();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/edition/edition.wxml'] = [$gwx1_XC_10, './subPack/pages/edition/edition.wxml'];
else __wxAppCode__['subPack/pages/edition/edition.wxml'] = $gwx1_XC_10('./subPack/pages/edition/edition.wxml');;
__wxRoute = "subPack/pages/edition/edition";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPack/pages/edition/edition.js";
define("subPack/pages/edition/edition.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPack/pages/edition/edition"], {
      "2b31": function(n, e, t) {
        t.r(e);
        var a = t("80bc"),
          u = t("f46f");
        for (var c in u)["default"].indexOf(c) < 0 && function(n) {
          t.d(e, n, (function() {
            return u[n]
          }))
        }(c);
        t("c4b0");
        var f = t("828b"),
          o = Object(f.a)(u.default, a.b, a.c, !1, null, "518d015c", null, !1, a.a, void 0);
        e.default = o.exports
      },
      "4aef": function(n, e, t) {},
      "80bc": function(n, e, t) {
        t.d(e, "b", (function() {
          return a
        })), t.d(e, "c", (function() {
          return u
        })), t.d(e, "a", (function() {}));
        var a = function() {
            this.$createElement;
            this._self._c
          },
          u = []
      },
      9868: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0, e.default = {
          data: function() {
            return {}
          }
        }
      },
      ab92: function(n, e, t) {
        (function(n, e) {
          var a = t("47a9");
          t("5366"), a(t("3240"));
          var u = a(t("2b31"));
          n.__webpack_require_UNI_MP_PLUGIN__ = t, e(u.default)
        }).call(this, t("3223").default, t("df3c").createPage)
      },
      c4b0: function(n, e, t) {
        var a = t("4aef");
        t.n(a).a
      },
      f46f: function(n, e, t) {
        t.r(e);
        var a = t("9868"),
          u = t.n(a);
        for (var c in a)["default"].indexOf(c) < 0 && function(n) {
          t.d(e, n, (function() {
            return a[n]
          }))
        }(c);
        e.default = u.a
      }
    },
    [
      ["ab92", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPack/pages/edition/edition.js'
});
require("subPack/pages/edition/edition.js");
