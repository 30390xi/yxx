$gwx0_XC_8 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_8 || [];

    function gz$gwx0_XC_8_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_8_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_8_1
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_8_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'data-v-14e7353e'])
        Z([3, '__l'])
        Z(z[0])
        Z([3, 'transparentFixed'])
        Z([3, '2c1975f6-1'])
        Z([3, 'page-box data-v-14e7353e'])
        Z([
          [7],
          [3, 'vlogUrl']
        ])
        Z([
          [2, '!'],
          [
            [7],
            [3, 'isPlay']
          ]
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_8_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_8_1
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_8 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_8 = true;
    var x = ['./yearCard/pages/nfcVideo/nfcVideo.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx0_XC_8_1()
      var cRC = _n('view')
      _rz(z, cRC, 'class', 0, e, s, gg)
      var hSC = _mz(z, 'uni-navbar', ['bind:__l', 1, 'class', 1, 'type', 2, 'vueId', 3], [], e, s, gg)
      _(cRC, hSC)
      var oTC = _n('view')
      _rz(z, oTC, 'class', 5, e, s, gg)
      var cUC = _v()
      _(oTC, cUC)
      if (_oz(z, 6, e, s, gg)) {
        cUC.wxVkey = 1
      }
      var oVC = _v()
      _(oTC, oVC)
      if (_oz(z, 7, e, s, gg)) {
        oVC.wxVkey = 1
      }
      cUC.wxXCkey = 1
      oVC.wxXCkey = 1
      _(cRC, oTC)
      _(r, cRC)
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
        g = "$gwx0_XC_8";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_8();
if (__vd_version_info__.delayedGwx) __wxAppCode__['yearCard/pages/nfcVideo/nfcVideo.wxml'] = [$gwx0_XC_8, './yearCard/pages/nfcVideo/nfcVideo.wxml'];
else __wxAppCode__['yearCard/pages/nfcVideo/nfcVideo.wxml'] = $gwx0_XC_8('./yearCard/pages/nfcVideo/nfcVideo.wxml');;
__wxRoute = "yearCard/pages/nfcVideo/nfcVideo";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "yearCard/pages/nfcVideo/nfcVideo.js";
define("yearCard/pages/nfcVideo/nfcVideo.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["yearCard/pages/nfcVideo/nfcVideo"], {
      5748: function(n, e, a) {
        var t = a("bce6");
        a.n(t).a
      },
      "5e7c": function(n, e, a) {
        a.d(e, "b", (function() {
          return i
        })), a.d(e, "c", (function() {
          return o
        })), a.d(e, "a", (function() {
          return t
        }));
        var t = {
            uniNavbar: function() {
              return a.e("components/uni-navbar/uni-navbar").then(a.bind(null, "101a"))
            }
          },
          i = function() {
            this.$createElement;
            this._self._c
          },
          o = []
      },
      6938: function(n, e, a) {
        (function(n, e) {
          var t = a("47a9");
          a("5366"), t(a("3240"));
          var i = t(a("d540"));
          n.__webpack_require_UNI_MP_PLUGIN__ = a, e(i.default)
        }).call(this, a("3223").default, a("df3c").createPage)
      },
      "7b4f": function(n, e, a) {
        (function(n) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var a = {
            data: function() {
              return {
                vlogUrl: "",
                isPlay: !0
              }
            },
            onLoad: function(n) {
              this.vlogUrl = n.url
            },
            onShareAppMessage: function() {
              return {
                title: "",
                imageUrl: "",
                path: "/yearCard/pages/nfcVideo/nfcVideo"
              }
            },
            methods: {
              playPause: function() {
                var e = n.createVideoContext("videoPlayer");
                this.isPlay ? e.pause() : e.play()
              },
              videoPlay: function(n) {
                this.isPlay = !0
              },
              videopause: function(n) {
                this.isPlay = !1
              }
            }
          };
          e.default = a
        }).call(this, a("df3c").default)
      },
      b077: function(n, e, a) {},
      bce6: function(n, e, a) {},
      d540: function(n, e, a) {
        a.r(e);
        var t = a("5e7c"),
          i = a("ffa7");
        for (var o in i)["default"].indexOf(o) < 0 && function(n) {
          a.d(e, n, (function() {
            return i[n]
          }))
        }(o);
        a("f346"), a("5748");
        var u = a("828b"),
          r = Object(u.a)(i.default, t.b, t.c, !1, null, "14e7353e", null, !1, t.a, void 0);
        e.default = r.exports
      },
      f346: function(n, e, a) {
        var t = a("b077");
        a.n(t).a
      },
      ffa7: function(n, e, a) {
        a.r(e);
        var t = a("7b4f"),
          i = a.n(t);
        for (var o in t)["default"].indexOf(o) < 0 && function(n) {
          a.d(e, n, (function() {
            return t[n]
          }))
        }(o);
        e.default = i.a
      }
    },
    [
      ["6938", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'yearCard/pages/nfcVideo/nfcVideo.js'
});
require("yearCard/pages/nfcVideo/nfcVideo.js");
