$gwx1_XC_28 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_28 || [];

    function gz$gwx1_XC_28_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_28_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_28_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_28_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_28_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_28_1
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_28 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_28 = true;
    var x = ['./subPack/pages/live/components/liveIcon.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_28_1()
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
        g = "$gwx1_XC_28";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_28();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/live/components/liveIcon.wxml'] = [$gwx1_XC_28, './subPack/pages/live/components/liveIcon.wxml'];
else __wxAppCode__['subPack/pages/live/components/liveIcon.wxml'] = $gwx1_XC_28('./subPack/pages/live/components/liveIcon.wxml');;
__wxRoute = "subPack/pages/live/components/liveIcon";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPack/pages/live/components/liveIcon.js";
define("subPack/pages/live/components/liveIcon.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPack/pages/live/components/liveIcon"], {
      1086: function(n, e, o) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0, e.default = {
          name: "liveIcon"
        }
      },
      1197: function(n, e, o) {
        o.r(e);
        var c = o("bb19"),
          t = o("9827");
        for (var a in t)["default"].indexOf(a) < 0 && function(n) {
          o.d(e, n, (function() {
            return t[n]
          }))
        }(a);
        o("1d303");
        var u = o("828b"),
          i = Object(u.a)(t.default, c.b, c.c, !1, null, "41222638", null, !1, c.a, void 0);
        e.default = i.exports
      },
      "1d303": function(n, e, o) {
        var c = o("8df1");
        o.n(c).a
      },
      "8df1": function(n, e, o) {},
      9827: function(n, e, o) {
        o.r(e);
        var c = o("1086"),
          t = o.n(c);
        for (var a in c)["default"].indexOf(a) < 0 && function(n) {
          o.d(e, n, (function() {
            return c[n]
          }))
        }(a);
        e.default = t.a
      },
      bb19: function(n, e, o) {
        o.d(e, "b", (function() {
          return c
        })), o.d(e, "c", (function() {
          return t
        })), o.d(e, "a", (function() {}));
        var c = function() {
            this.$createElement;
            this._self._c
          },
          t = []
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPack/pages/live/components/liveIcon-create-component", {
      "subPack/pages/live/components/liveIcon-create-component": function(n, e, o) {
        o("df3c").createComponent(o("1197"))
      }
    },
    [
      ["subPack/pages/live/components/liveIcon-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'subPack/pages/live/components/liveIcon.js'
});
require("subPack/pages/live/components/liveIcon.js");
