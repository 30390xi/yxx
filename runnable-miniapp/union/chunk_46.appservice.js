$gwx4_XC_41 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_41 || [];

    function gz$gwx4_XC_41_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_41_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_41_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_41_1 = [];
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
        Z([3, 'data-v-59bdb526'])
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
        Z([3, 'fb1512c0-1'])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_41_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_41_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_41 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_41 = true;
    var x = ['./union/pages/groupList/teamList.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_41_1()
      var xU6 = _mz(z, 'uni-navbar', ['background', 0, 'bind:__l', 1, 'class', 1, 'color', 2, 'leftIconStyle', 3, 'title', 4, 'type', 5, 'vueId', 6], [], e, s, gg)
      _(r, xU6)
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
        g = "$gwx4_XC_41";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_41();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/groupList/teamList.wxml'] = [$gwx4_XC_41, './union/pages/groupList/teamList.wxml'];
else __wxAppCode__['union/pages/groupList/teamList.wxml'] = $gwx4_XC_41('./union/pages/groupList/teamList.wxml');;
__wxRoute = "union/pages/groupList/teamList";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/groupList/teamList.js";
define("union/pages/groupList/teamList.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/groupList/teamList"], {
      3458: function(n, t, o) {
        (function(n) {
          var e = o("47a9");
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var a = {
            mixins: [e(o("30eb")).default],
            data: function() {
              return {
                list: [],
                statusBarHeight: "",
                language: "zh",
                listTeam: [{
                  logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                  name: "组团名称"
                }, {
                  logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                  name: "组团名称"
                }, {
                  logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                  name: "组团名称"
                }, {
                  logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                  name: "组团名称"
                }, {
                  logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                  name: "组团名称"
                }, {
                  logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                  name: "组团名称"
                }, {
                  logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                  name: "组团名称"
                }, {
                  logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                  name: "组团名称"
                }, {
                  logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                  name: "组团名称"
                }, {
                  logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                  name: "组团名称"
                }, {
                  logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                  name: "组团名称"
                }, {
                  logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                  name: "组团名称"
                }]
              }
            },
            onLoad: function() {
              this.language = n.getStorageSync("language") || "zh", this.statusBarHeight = n.getSystemInfoSync().statusBarHeight
            },
            methods: {}
          };
          t.default = a
        }).call(this, o("df3c").default)
      },
      "3e36": function(n, t, o) {},
      "3f0a": function(n, t, o) {
        o.r(t);
        var e = o("3458"),
          a = o.n(e);
        for (var i in e)["default"].indexOf(i) < 0 && function(n) {
          o.d(t, n, (function() {
            return e[n]
          }))
        }(i);
        t.default = a.a
      },
      4568: function(n, t, o) {
        var e = o("3e36");
        o.n(e).a
      },
      "574a": function(n, t, o) {
        (function(n, t) {
          var e = o("47a9");
          o("5366"), e(o("3240"));
          var a = e(o("cb17"));
          n.__webpack_require_UNI_MP_PLUGIN__ = o, t(a.default)
        }).call(this, o("3223").default, o("df3c").createPage)
      },
      cb17: function(n, t, o) {
        o.r(t);
        var e = o("f31f"),
          a = o("3f0a");
        for (var i in a)["default"].indexOf(i) < 0 && function(n) {
          o.d(t, n, (function() {
            return a[n]
          }))
        }(i);
        o("4568");
        var s = o("828b"),
          u = Object(s.a)(a.default, e.b, e.c, !1, null, "59bdb526", null, !1, e.a, void 0);
        t.default = u.exports
      },
      f31f: function(n, t, o) {
        o.d(t, "b", (function() {
          return a
        })), o.d(t, "c", (function() {
          return i
        })), o.d(t, "a", (function() {
          return e
        }));
        var e = {
            uniNavbar: function() {
              return o.e("components/uni-navbar/uni-navbar").then(o.bind(null, "101a"))
            }
          },
          a = function() {
            this.$createElement;
            var n = (this._self._c, this.$t("teamList.navbar.title")),
              t = this.$t("teamList.groupListTitle");
            this.$mp.data = Object.assign({}, {
              $root: {
                a0: {
                  background: "transparent"
                },
                m0: n,
                m1: t
              }
            })
          },
          i = []
      }
    },
    [
      ["574a", "common/runtime", "common/vendor", "union/common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'union/pages/groupList/teamList.js'
});
require("union/pages/groupList/teamList.js");
