$gwx0_XC_4 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_4 || [];

    function gz$gwx0_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__l'])
        Z([3, 'data-v-3ba31784'])
        Z([1, false])
        Z([3, '#ffffff'])
        Z([3, 'transparentFixed'])
        Z([3, '06cc8f70-1'])
        Z([
          [4],
          [
            [5],
            [1, 'transparentFixedLeft']
          ]
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_4_1
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_4 = true;
    var x = ['./yearCard/pages/nfcVideo/dnfAct.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx0_XC_4_1()
      var lIC = _mz(z, 'uni-navbar', ['bind:__l', 0, 'class', 1, 'titleCenter', 1, 'transparentFixedFontColor', 2, 'type', 3, 'vueId', 4, 'vueSlots', 5], [], e, s, gg)
      _(r, lIC)
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
        g = "$gwx0_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['yearCard/pages/nfcVideo/dnfAct.wxml'] = [$gwx0_XC_4, './yearCard/pages/nfcVideo/dnfAct.wxml'];
else __wxAppCode__['yearCard/pages/nfcVideo/dnfAct.wxml'] = $gwx0_XC_4('./yearCard/pages/nfcVideo/dnfAct.wxml');;
__wxRoute = "yearCard/pages/nfcVideo/dnfAct";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "yearCard/pages/nfcVideo/dnfAct.js";
define("yearCard/pages/nfcVideo/dnfAct.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["yearCard/pages/nfcVideo/dnfAct"], {
      "386d": function(n, e, t) {},
      4369: function(n, e, t) {
        t.r(e);
        var a = t("a089"),
          r = t.n(a);
        for (var u in a)["default"].indexOf(u) < 0 && function(n) {
          t.d(e, n, (function() {
            return a[n]
          }))
        }(u);
        e.default = r.a
      },
      "48d9": function(n, e, t) {
        (function(n, e) {
          var a = t("47a9");
          t("5366"), a(t("3240"));
          var r = a(t("c16c"));
          n.__webpack_require_UNI_MP_PLUGIN__ = t, e(r.default)
        }).call(this, t("3223").default, t("df3c").createPage)
      },
      "4bd5": function(n, e, t) {
        var a = t("386d");
        t.n(a).a
      },
      "5f49": function(n, e, t) {
        t.d(e, "b", (function() {
          return r
        })), t.d(e, "c", (function() {
          return u
        })), t.d(e, "a", (function() {
          return a
        }));
        var a = {
            uniNavbar: function() {
              return t.e("components/uni-navbar/uni-navbar").then(t.bind(null, "101a"))
            }
          },
          r = function() {
            this.$createElement;
            this._self._c
          },
          u = []
      },
      a089: function(n, e, t) {
        (function(n) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var t = {
            data: function() {
              return {
                routes: []
              }
            },
            onLoad: function(n) {
              this.routes = getCurrentPages()
            },
            methods: {
              pageBack: function() {
                1 == this.routes.length ? n.redirectTo({
                  url: "/yearCard/pages/nfcVideo/jz"
                }) : n.navigateBack()
              }
            }
          };
          e.default = t
        }).call(this, t("df3c").default)
      },
      c16c: function(n, e, t) {
        t.r(e);
        var a = t("5f49"),
          r = t("4369");
        for (var u in r)["default"].indexOf(u) < 0 && function(n) {
          t.d(e, n, (function() {
            return r[n]
          }))
        }(u);
        t("4bd5");
        var o = t("828b"),
          c = Object(o.a)(r.default, a.b, a.c, !1, null, "3ba31784", null, !1, a.a, void 0);
        e.default = c.exports
      }
    },
    [
      ["48d9", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'yearCard/pages/nfcVideo/dnfAct.js'
});
require("yearCard/pages/nfcVideo/dnfAct.js");
