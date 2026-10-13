$gwx4_XC_46 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_46 || [];

    function gz$gwx4_XC_46_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_46_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_46_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_46_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__l'])
        Z([3, 'data-v-27bb0ddc'])
        Z([3, 'transparentFixed'])
        Z([3, '3bedf94b-1'])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_46_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_46_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_46 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_46 = true;
    var x = ['./union/pages/menu/index.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_46_1()
      var xC0 = _mz(z, 'uni-navbar', ['bind:__l', 0, 'class', 1, 'type', 1, 'vueId', 2], [], e, s, gg)
      _(r, xC0)
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
        g = "$gwx4_XC_46";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_46();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/menu/index.wxml'] = [$gwx4_XC_46, './union/pages/menu/index.wxml'];
else __wxAppCode__['union/pages/menu/index.wxml'] = $gwx4_XC_46('./union/pages/menu/index.wxml');;
__wxRoute = "union/pages/menu/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/menu/index.js";
define("union/pages/menu/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/menu/index"], {
      "0951": function(n, e, t) {
        t.r(e);
        var a = t("91e2"),
          u = t.n(a);
        for (var o in a)["default"].indexOf(o) < 0 && function(n) {
          t.d(e, n, (function() {
            return a[n]
          }))
        }(o);
        e.default = u.a
      },
      "1b17": function(n, e, t) {},
      "1c81": function(n, e, t) {
        t.d(e, "b", (function() {
          return u
        })), t.d(e, "c", (function() {
          return o
        })), t.d(e, "a", (function() {
          return a
        }));
        var a = {
            uniNavbar: function() {
              return t.e("components/uni-navbar/uni-navbar").then(t.bind(null, "101a"))
            }
          },
          u = function() {
            this.$createElement;
            this._self._c
          },
          o = []
      },
      "641d": function(n, e, t) {
        (function(n, e) {
          var a = t("47a9");
          t("5366"), a(t("3240"));
          var u = a(t("7421"));
          n.__webpack_require_UNI_MP_PLUGIN__ = t, e(u.default)
        }).call(this, t("3223").default, t("df3c").createPage)
      },
      7421: function(n, e, t) {
        t.r(e);
        var a = t("1c81"),
          u = t("0951");
        for (var o in u)["default"].indexOf(o) < 0 && function(n) {
          t.d(e, n, (function() {
            return u[n]
          }))
        }(o);
        t("a3cc");
        var i = t("828b"),
          c = Object(i.a)(u.default, a.b, a.c, !1, null, "27bb0ddc", null, !1, a.a, void 0);
        e.default = c.exports
      },
      "91e2": function(n, e, t) {
        (function(n) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var t = {
            methods: {
              toGreatWall: function() {
                n.navigateTo({
                  url: "/union/pages/aiGreatWall/index"
                })
              },
              toFuRong: function() {
                n.navigateTo({
                  url: "/union/pages/tang/index"
                })
              }
            }
          };
          e.default = t
        }).call(this, t("df3c").default)
      },
      a3cc: function(n, e, t) {
        var a = t("1b17");
        t.n(a).a
      }
    },
    [
      ["641d", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'union/pages/menu/index.js'
});
require("union/pages/menu/index.js");
