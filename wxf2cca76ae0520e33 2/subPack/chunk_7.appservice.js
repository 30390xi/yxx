$gwx1_XC_45 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_45 || [];

    function gz$gwx1_XC_45_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_45_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_45_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_45_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_45_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_45_1
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_45 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_45 = true;
    var x = ['./subPack/pages/activity/bingfeng.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_45_1()
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
        g = "$gwx1_XC_45";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_45();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/activity/bingfeng.wxml'] = [$gwx1_XC_45, './subPack/pages/activity/bingfeng.wxml'];
else __wxAppCode__['subPack/pages/activity/bingfeng.wxml'] = $gwx1_XC_45('./subPack/pages/activity/bingfeng.wxml');;
__wxRoute = "subPack/pages/activity/bingfeng";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPack/pages/activity/bingfeng.js";
define("subPack/pages/activity/bingfeng.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPack/pages/activity/bingfeng"], {
      "3a0f": function(t, a, e) {
        e.d(a, "b", (function() {
          return n
        })), e.d(a, "c", (function() {
          return i
        })), e.d(a, "a", (function() {}));
        var n = function() {
            this.$createElement;
            this._self._c
          },
          i = []
      },
      "6c57": function(t, a, e) {
        e.r(a);
        var n = e("3a0f"),
          i = e("c091");
        for (var r in i)["default"].indexOf(r) < 0 && function(t) {
          e.d(a, t, (function() {
            return i[t]
          }))
        }(r);
        var c = e("828b"),
          o = Object(c.a)(i.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        a.default = o.exports
      },
      "97ca": function(t, a, e) {
        (function(t) {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.default = void 0;
          var e = {
            data: function() {
              return {
                urlSrc: "",
                webviewStyles: {
                  progress: {
                    color: "#f29200"
                  }
                },
                shareConfigNot: []
              }
            },
            onLoad: function() {
              this.getActivityUrl()
            },
            onShareAppMessage: function(t) {
              if (this._shareObj) return this._shareObj
            },
            methods: {
              getActivityUrl: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                  paramKey: "BF_JUMP_URL"
                }).then((function(a) {
                  1 === a.code && (t.urlSrc = a.data.paramValue)
                }))
              },
              message: function(a) {
                var e = a.detail.data;
                this._shareObj = a.detail.data[0], e[1] && e[1].toMiniPro && t.openEmbeddedMiniProgram({
                  appId: e[1].data.appId,
                  path: e[1].data.wechatUrl
                }), e[1] && e[1].cityId && (getApp().globalData.cityId = e[1].cityId)
              }
            }
          };
          a.default = e
        }).call(this, e("df3c").default)
      },
      b5c1: function(t, a, e) {
        (function(t, a) {
          var n = e("47a9");
          e("5366"), n(e("3240"));
          var i = n(e("6c57"));
          t.__webpack_require_UNI_MP_PLUGIN__ = e, a(i.default)
        }).call(this, e("3223").default, e("df3c").createPage)
      },
      c091: function(t, a, e) {
        e.r(a);
        var n = e("97ca"),
          i = e.n(n);
        for (var r in n)["default"].indexOf(r) < 0 && function(t) {
          e.d(a, t, (function() {
            return n[t]
          }))
        }(r);
        a.default = i.a
      }
    },
    [
      ["b5c1", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPack/pages/activity/bingfeng.js'
});
require("subPack/pages/activity/bingfeng.js");
