$gwx4_XC_52 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_52 || [];

    function gz$gwx4_XC_52_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_52_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_52_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_52_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__l'])
        Z([3, 'transparentFixed'])
        Z([3, '0ded4714-1'])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_52_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_52_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_52 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_52 = true;
    var x = ['./union/pages/touristMap/map.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_52_1()
      var hMAB = _mz(z, 'uni-navbar', ['bind:__l', 0, 'type', 1, 'vueId', 1], [], e, s, gg)
      _(r, hMAB)
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
        g = "$gwx4_XC_52";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_52();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/touristMap/map.wxml'] = [$gwx4_XC_52, './union/pages/touristMap/map.wxml'];
else __wxAppCode__['union/pages/touristMap/map.wxml'] = $gwx4_XC_52('./union/pages/touristMap/map.wxml');;
__wxRoute = "union/pages/touristMap/map";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/touristMap/map.js";
define("union/pages/touristMap/map.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/touristMap/map"], {
      "0daa": function(t, a, n) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0, a.default = {
          data: function() {
            return {
              urlSrc: "",
              webviewStyles: {
                progress: {
                  color: "#ff4643"
                }
              },
              shareConfigNot: [],
              mapDetail: {},
              mapId: ""
            }
          },
          onLoad: function(t) {
            if (t.id) {
              this.mapId = t.id, this.getPointsClassify();
              var a = "https://eshop.zhiyousx.com/emap/?id=".concat(t.id, "&formType=").concat(t.formType);
              this.urlSrc = a
            }
          },
          onShareAppMessage: function(t) {
            return {
              title: this.mapDetail.shareText || this.mapDetail.name,
              imageUrl: this.mapDetail.shareImg || "",
              path: this.$util.setShareUrl("/union/pages/touristMap/map?id=".concat(this.mapId))
            }
          },
          methods: {
            getPointsClassify: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "base/app/v1/travelMap/getPointsClassify", {
                mapId: this.mapId
              }).then((function(a) {
                1 == a.code && (t.mapDetail = a.data.map)
              }))
            }
          }
        }
      },
      "47c0": function(t, a, n) {
        n.r(a);
        var e = n("0daa"),
          i = n.n(e);
        for (var o in e)["default"].indexOf(o) < 0 && function(t) {
          n.d(a, t, (function() {
            return e[t]
          }))
        }(o);
        a.default = i.a
      },
      6316: function(t, a, n) {
        n.r(a);
        var e = n("9002"),
          i = n("47c0");
        for (var o in i)["default"].indexOf(o) < 0 && function(t) {
          n.d(a, t, (function() {
            return i[t]
          }))
        }(o);
        var r = n("828b"),
          u = Object(r.a)(i.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        a.default = u.exports
      },
      9002: function(t, a, n) {
        n.d(a, "b", (function() {
          return i
        })), n.d(a, "c", (function() {
          return o
        })), n.d(a, "a", (function() {
          return e
        }));
        var e = {
            uniNavbar: function() {
              return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
            }
          },
          i = function() {
            this.$createElement;
            this._self._c
          },
          o = []
      },
      9965: function(t, a, n) {
        (function(t, a) {
          var e = n("47a9");
          n("5366"), e(n("3240"));
          var i = e(n("6316"));
          t.__webpack_require_UNI_MP_PLUGIN__ = n, a(i.default)
        }).call(this, n("3223").default, n("df3c").createPage)
      }
    },
    [
      ["9965", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'union/pages/touristMap/map.js'
});
require("union/pages/touristMap/map.js");
