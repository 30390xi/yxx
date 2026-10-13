$gwx0_XC_5 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_5 || [];

    function gz$gwx0_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_5_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_5_1
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_5_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_5_1
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_5 = true;
    var x = ['./yearCard/pages/nfcVideo/jz.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx0_XC_5_1()
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
        g = "$gwx0_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_5();
if (__vd_version_info__.delayedGwx) __wxAppCode__['yearCard/pages/nfcVideo/jz.wxml'] = [$gwx0_XC_5, './yearCard/pages/nfcVideo/jz.wxml'];
else __wxAppCode__['yearCard/pages/nfcVideo/jz.wxml'] = $gwx0_XC_5('./yearCard/pages/nfcVideo/jz.wxml');;
__wxRoute = "yearCard/pages/nfcVideo/jz";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "yearCard/pages/nfcVideo/jz.js";
define("yearCard/pages/nfcVideo/jz.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["yearCard/pages/nfcVideo/jz"], {
      "0058": function(e, n, t) {},
      "1f5b": function(e, n, t) {
        t.r(n);
        var i = t("93a0"),
          o = t("d91d");
        for (var a in o)["default"].indexOf(a) < 0 && function(e) {
          t.d(n, e, (function() {
            return o[e]
          }))
        }(a);
        t("79d3"), t("347f");
        var c = t("828b"),
          u = Object(c.a)(o.default, i.b, i.c, !1, null, "a6e7c0c2", null, !1, i.a, void 0);
        n.default = u.exports
      },
      "347f": function(e, n, t) {
        var i = t("0058");
        t.n(i).a
      },
      "6c0a": function(e, n, t) {
        (function(e, t) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = void 0;
          var i = {
            data: function() {
              return {
                isPlay: !0,
                fullScreen: !1,
                currentTime: 0,
                teamId: 0
              }
            },
            onLoad: function(n) {
              e.preloadAssets({
                data: [{
                  type: "image",
                  src: "https://eshopfile.zhiyousx.com/2026012116045789227.jpg"
                }, {
                  type: "image",
                  src: "https://eshopfile.zhiyousx.com/2026012116064712243.png"
                }, {
                  type: "image",
                  src: "https://eshopfile.zhiyousx.com/2026012116053458845.png"
                }, {
                  type: "image",
                  src: "https://eshopfile.zhiyousx.com/2026012116065653707.png"
                }, {
                  type: "image",
                  src: "https://eshopfile.zhiyousx.com/2026012116130338809.png"
                }, {
                  type: "image",
                  src: "https://eshopfile.zhiyousx.com/2026012116130568486.png"
                }, {
                  type: "image",
                  src: "https://eshopfile.zhiyousx.com/2026011516590113392.jpg"
                }]
              })
            },
            onShow: function(e) {},
            methods: {
              videoEnd: function() {},
              iconClick: function(e) {
                t.navigateTo({
                  url: e
                })
              },
              videoPlay: function(e) {
                this.isPlay = !0
              },
              videopause: function(e) {
                this.isPlay = !1
              },
              videoUpdate: function(e) {
                this.currentTime = e.detail.currentTime
              }
            }
          };
          n.default = i
        }).call(this, t("3223").default, t("df3c").default)
      },
      "79d3": function(e, n, t) {
        var i = t("da70");
        t.n(i).a
      },
      "7a37": function(e, n, t) {
        (function(e, n) {
          var i = t("47a9");
          t("5366"), i(t("3240"));
          var o = i(t("1f5b"));
          e.__webpack_require_UNI_MP_PLUGIN__ = t, n(o.default)
        }).call(this, t("3223").default, t("df3c").createPage)
      },
      "93a0": function(e, n, t) {
        t.d(n, "b", (function() {
          return i
        })), t.d(n, "c", (function() {
          return o
        })), t.d(n, "a", (function() {}));
        var i = function() {
            this.$createElement;
            this._self._c
          },
          o = []
      },
      d91d: function(e, n, t) {
        t.r(n);
        var i = t("6c0a"),
          o = t.n(i);
        for (var a in i)["default"].indexOf(a) < 0 && function(e) {
          t.d(n, e, (function() {
            return i[e]
          }))
        }(a);
        n.default = o.a
      },
      da70: function(e, n, t) {}
    },
    [
      ["7a37", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'yearCard/pages/nfcVideo/jz.js'
});
require("yearCard/pages/nfcVideo/jz.js");
