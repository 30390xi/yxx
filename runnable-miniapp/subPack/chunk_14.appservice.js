$gwx1_XC_6 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_6 || [];

    function gz$gwx1_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_6_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_6_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_6_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'bg'])
        Z([3, '__l'])
        Z([3, 'transparentFixed'])
        Z([3, 'b9829c30-1'])
        Z([3, 'bottom'])
        Z([
          [6],
          [
            [7],
            [3, 'articleData']
          ],
          [3, 'author']
        ])
        Z(z[1])
        Z([3, 'vue-ref'])
        Z([3, 'article'])
        Z([
          [6],
          [
            [7],
            [3, 'articleData']
          ],
          [3, 'content']
        ])
        Z([1, true])
        Z([3, 'text-align:justify;'])
        Z([
          [7],
          [3, 'parseStyle']
        ])
        Z([3, 'b9829c30-2'])
        Z([
          [4],
          [
            [5],
            [1, 'default']
          ]
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_6_1
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_6 = true;
    var x = ['./subPack/pages/article/article.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_6_1()
      var f7 = _n('view')
      _rz(z, f7, 'class', 0, e, s, gg)
      var c8 = _mz(z, 'uni-navbar', ['bind:__l', 1, 'type', 1, 'vueId', 2], [], e, s, gg)
      _(f7, c8)
      var h9 = _n('view')
      _rz(z, h9, 'class', 4, e, s, gg)
      var o0 = _v()
      _(h9, o0)
      if (_oz(z, 5, e, s, gg)) {
        o0.wxVkey = 1
      }
      var cAB = _mz(z, 'u-parse', ['bind:__l', 6, 'class', 1, 'data-ref', 2, 'html', 3, 'lazyLoad', 4, 'style', 5, 'tagStyle', 6, 'vueId', 7, 'vueSlots', 8], [], e, s, gg)
      _(h9, cAB)
      o0.wxXCkey = 1
      _(f7, h9)
      _(r, f7)
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
        g = "$gwx1_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_6();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/article/article.wxml'] = [$gwx1_XC_6, './subPack/pages/article/article.wxml'];
else __wxAppCode__['subPack/pages/article/article.wxml'] = $gwx1_XC_6('./subPack/pages/article/article.wxml');;
__wxRoute = "subPack/pages/article/article";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPack/pages/article/article.js";
define("subPack/pages/article/article.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPack/pages/article/article"], {
      "1db6": function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = {
          data: function() {
            return {
              articleData: {},
              parseStyle: {
                p: "word-break: break-all;"
              }
            }
          },
          onLoad: function(n) {
            this.contentId = n.informationId, this.getArticleDetail(this.contentId), this.updateReadingNum(n.informationId)
          },
          onShareAppMessage: function() {
            var n = "/subPack/pages/article/article?informationId=".concat(this.contentId);
            return {
              title: this.articleData.title,
              path: this.$util.setShareUrl(n),
              imageUrl: this.articleData.coverImage
            }
          },
          methods: {
            getArticleDetail: function(n) {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/getDetail?contentId=" + n).then((function(n) {
                1 === n.code && (t.articleData = n.data)
              }))
            },
            updateReadingNum: function(n) {
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/CommonReadingNum/updateReadingNum", {
                originType: 1,
                originId: n
              }).then((function(n) {
                console.log("add success")
              }))
            }
          }
        };
        t.default = a
      },
      "43c0": function(n, t, e) {
        (function(n, t) {
          var a = e("47a9");
          e("5366"), a(e("3240"));
          var i = a(e("adb6"));
          n.__webpack_require_UNI_MP_PLUGIN__ = e, t(i.default)
        }).call(this, e("3223").default, e("df3c").createPage)
      },
      9764: function(n, t, e) {},
      a6c7: function(n, t, e) {
        e.d(t, "b", (function() {
          return i
        })), e.d(t, "c", (function() {
          return o
        })), e.d(t, "a", (function() {
          return a
        }));
        var a = {
            uniNavbar: function() {
              return e.e("components/uni-navbar/uni-navbar").then(e.bind(null, "101a"))
            },
            uParse: function() {
              return Promise.all([e.e("common/vendor"), e.e("uview-ui/components/u-parse/u-parse")]).then(e.bind(null, "7217"))
            }
          },
          i = function() {
            this.$createElement;
            this._self._c
          },
          o = []
      },
      adb6: function(n, t, e) {
        e.r(t);
        var a = e("a6c7"),
          i = e("bf58");
        for (var o in i)["default"].indexOf(o) < 0 && function(n) {
          e.d(t, n, (function() {
            return i[n]
          }))
        }(o);
        e("f72f");
        var r = e("828b"),
          u = Object(r.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = u.exports
      },
      bf58: function(n, t, e) {
        e.r(t);
        var a = e("1db6"),
          i = e.n(a);
        for (var o in a)["default"].indexOf(o) < 0 && function(n) {
          e.d(t, n, (function() {
            return a[n]
          }))
        }(o);
        t.default = i.a
      },
      f72f: function(n, t, e) {
        var a = e("9764");
        e.n(a).a
      }
    },
    [
      ["43c0", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPack/pages/article/article.js'
});
require("subPack/pages/article/article.js");
