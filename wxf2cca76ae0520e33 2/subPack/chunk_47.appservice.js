$gwx1_XC_42 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_42 || [];

    function gz$gwx1_XC_42_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_42_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_42_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_42_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__l'])
        Z([3, 'transparentFixed'])
        Z([3, '32fdde7c-1'])
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_42_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_42_1
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_42 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_42 = true;
    var x = ['./subPack/pages/zhuanti/zhuanti.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_42_1()
      var tU9 = _mz(z, 'uni-navbar', ['bind:__l', 0, 'type', 1, 'vueId', 1], [], e, s, gg)
      _(r, tU9)
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
        g = "$gwx1_XC_42";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_42();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/zhuanti/zhuanti.wxml'] = [$gwx1_XC_42, './subPack/pages/zhuanti/zhuanti.wxml'];
else __wxAppCode__['subPack/pages/zhuanti/zhuanti.wxml'] = $gwx1_XC_42('./subPack/pages/zhuanti/zhuanti.wxml');;
__wxRoute = "subPack/pages/zhuanti/zhuanti";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPack/pages/zhuanti/zhuanti.js";
define("subPack/pages/zhuanti/zhuanti.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPack/pages/zhuanti/zhuanti"], {
      "06da": function(t, n, e) {},
      "211c": function(t, n, e) {
        e.d(n, "b", (function() {
          return i
        })), e.d(n, "c", (function() {
          return c
        })), e.d(n, "a", (function() {
          return a
        }));
        var a = {
            uniNavbar: function() {
              return e.e("components/uni-navbar/uni-navbar").then(e.bind(null, "101a"))
            }
          },
          i = function() {
            this.$createElement;
            this._self._c
          },
          c = []
      },
      "42d5": function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var a = {
          data: function() {
            return {
              content: {},
              specialProducts: {}
            }
          },
          onLoad: function(t) {
            this.id = t.specialId, this.getDetailSpecial(this.id)
          },
          onShareAppMessage: function() {
            var t = "/subPack/pages/zhuanti/zhuanti?specialId=".concat(this.id);
            return {
              title: this.content.title,
              path: this.$util.setShareUrl(t),
              imageUrl: this.content.coverImage
            }
          },
          methods: {
            getDetailSpecial: function(t) {
              var n = this;
              this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/getDetailSpecial?id=" + t).then((function(t) {
                1 === t.code && (n.content = t.data.content, n.specialProducts = t.data.contentSpecialProducts, console.log(n.specialProducts))
              }))
            },
            jump: function(t) {
              this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + t.productId
              })
            }
          }
        };
        n.default = a
      },
      "6b29": function(t, n, e) {
        var a = e("06da");
        e.n(a).a
      },
      8820: function(t, n, e) {
        e.r(n);
        var a = e("42d5"),
          i = e.n(a);
        for (var c in a)["default"].indexOf(c) < 0 && function(t) {
          e.d(n, t, (function() {
            return a[t]
          }))
        }(c);
        n.default = i.a
      },
      "9edc": function(t, n, e) {
        e.r(n);
        var a = e("211c"),
          i = e("8820");
        for (var c in i)["default"].indexOf(c) < 0 && function(t) {
          e.d(n, t, (function() {
            return i[t]
          }))
        }(c);
        e("6b29");
        var o = e("828b"),
          u = Object(o.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports
      },
      d3c8: function(t, n, e) {
        (function(t, n) {
          var a = e("47a9");
          e("5366"), a(e("3240"));
          var i = a(e("9edc"));
          t.__webpack_require_UNI_MP_PLUGIN__ = e, n(i.default)
        }).call(this, e("3223").default, e("df3c").createPage)
      }
    },
    [
      ["d3c8", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPack/pages/zhuanti/zhuanti.js'
});
require("subPack/pages/zhuanti/zhuanti.js");
