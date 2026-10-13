$gwx4_XC_38 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_38 || [];

    function gz$gwx4_XC_38_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_38_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_38_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_38_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'a0']
        ])
        Z([3, '__l'])
        Z([3, 'data-v-2cfa1430'])
        Z([3, '#fff'])
        Z([
          [8], 'color', [1, '#fff']
        ])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'm0']
        ])
        Z([3, 'transparentFixed'])
        Z([3, '344b507c-1'])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_38_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_38_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_38 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_38 = true;
    var x = ['./union/pages/featureIntroduction/index.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_38_1()
      var o45 = _mz(z, 'uni-navbar', ['background', 0, 'bind:__l', 1, 'class', 1, 'color', 2, 'leftIconStyle', 3, 'title', 4, 'type', 5, 'vueId', 6], [], e, s, gg)
      _(r, o45)
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
        g = "$gwx4_XC_38";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_38();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/featureIntroduction/index.wxml'] = [$gwx4_XC_38, './union/pages/featureIntroduction/index.wxml'];
else __wxAppCode__['union/pages/featureIntroduction/index.wxml'] = $gwx4_XC_38('./union/pages/featureIntroduction/index.wxml');;
__wxRoute = "union/pages/featureIntroduction/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/featureIntroduction/index.js";
define("union/pages/featureIntroduction/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/featureIntroduction/index"], {
      "4a63": function(t, e, n) {},
      "5bae": function(t, e, n) {
        n.r(e);
        var a = n("e0fd"),
          r = n("c91c");
        for (var o in r)["default"].indexOf(o) < 0 && function(t) {
          n.d(e, t, (function() {
            return r[t]
          }))
        }(o);
        n("8dbf");
        var i = n("828b"),
          u = Object(i.a)(r.default, a.b, a.c, !1, null, "2cfa1430", null, !1, a.a, void 0);
        e.default = u.exports
      },
      8098: function(t, e, n) {
        (function(t, e) {
          var a = n("47a9");
          n("5366"), a(n("3240"));
          var r = a(n("5bae"));
          t.__webpack_require_UNI_MP_PLUGIN__ = n, e(r.default)
        }).call(this, n("3223").default, n("df3c").createPage)
      },
      "8dbf": function(t, e, n) {
        var a = n("4a63");
        n.n(a).a
      },
      "9c2b": function(t, e, n) {
        (function(t) {
          var a = n("47a9");
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var r = a(n("7ca3"));

          function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(t);
              e && (a = a.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              }))), n.push.apply(n, a)
            }
            return n
          }

          function i(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {};
              e % 2 ? o(Object(n), !0).forEach((function(e) {
                (0, r.default)(t, e, n[e])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              }))
            }
            return t
          }
          var u = {
            mixins: [a(n("30eb")).default],
            data: function() {
              return {
                list: [],
                statusBarHeight: "",
                language: "zh"
              }
            },
            onLoad: function() {
              this.language = t.getStorageSync("language") || "zh", this.statusBarHeight = t.getSystemInfoSync().statusBarHeight, this.getList()
            },
            methods: {
              getList: function() {
                var t = this;
                this.$uniApi.getRequestYesLoading("GET", "ai/app/aiFeatureIntro/list?language=".concat(this.language), this.$t("featureIntroduction.loading.loading")).then((function(e) {
                  1 === e.code ? t.list = (e.data || []).map((function(t) {
                    return i(i({}, t), {}, {
                      isCollapsed: !1
                    })
                  })) : t.$util.showToast(e.msg || t.$t("featureIntroduction.error.loadFailed"))
                })).catch((function() {
                  t.$util.showToast(t.$t("featureIntroduction.error.loadFailed"))
                }))
              },
              toggleCollapse: function(t) {
                this.list[t].isCollapsed = !this.list[t].isCollapsed
              },
              handleRichTextImages: function(t) {
                return t.replace(/<img[^>]*>/gi, (function(t) {
                  return t.replace(/<img/, '<img style="width:100%;height:auto;max-width:100%;border-radius:16rpx;"')
                }))
              }
            }
          };
          e.default = u
        }).call(this, n("df3c").default)
      },
      c91c: function(t, e, n) {
        n.r(e);
        var a = n("9c2b"),
          r = n.n(a);
        for (var o in a)["default"].indexOf(o) < 0 && function(t) {
          n.d(e, t, (function() {
            return a[t]
          }))
        }(o);
        e.default = r.a
      },
      e0fd: function(t, e, n) {
        n.d(e, "b", (function() {
          return r
        })), n.d(e, "c", (function() {
          return o
        })), n.d(e, "a", (function() {
          return a
        }));
        var a = {
            uniNavbar: function() {
              return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
            }
          },
          r = function() {
            var t = this,
              e = (t.$createElement, t._self._c, t.$t("featureIntroduction.navbar.title")),
              n = t.__map(t.list, (function(e, n) {
                return {
                  $orig: t.__get_orig(e),
                  m1: e.isCollapsed ? t.$t("featureIntroduction.collapse.expand") : null,
                  m2: e.isCollapsed ? null : t.$t("featureIntroduction.collapse.collapse"),
                  m3: t.handleRichTextImages(e.describe)
                }
              }));
            t.$mp.data = Object.assign({}, {
              $root: {
                a0: {
                  background: "transparent"
                },
                m0: e,
                l0: n
              }
            })
          },
          o = []
      }
    },
    [
      ["8098", "common/runtime", "common/vendor", "union/common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'union/pages/featureIntroduction/index.js'
});
require("union/pages/featureIntroduction/index.js");
