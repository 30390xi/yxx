$gwx2_XC_39 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_39 || [];

    function gz$gwx2_XC_39_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_39_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_39_1
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_39_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__e'])
        Z([3, 'swiper data-v-027fdb71'])
        Z([
          [7],
          [3, 'currentSwiper']
        ])
        Z([
          [4],
          [
            [5],
            [
              [4],
              [
                [5],
                [
                  [5],
                  [1, 'change']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [
                          [5],
                          [1, 'swiperChange']
                        ],
                        [
                          [4],
                          [
                            [5],
                            [1, '$event']
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([
          [7],
          [3, 'duration']
        ])
        Z([3, 'index'])
        Z([3, 'item'])
        Z([
          [7],
          [3, 'dataList']
        ])
        Z(z[5])
        Z([3, 'data-v-027fdb71'])
        Z([
          [2, '=='],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, 'resourcesType']
          ],
          [1, 1]
        ])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'swiperCurrent']
          ],
          [
            [2, '+'],
            [
              [7],
              [3, 'index']
            ],
            [1, 1]
          ]
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_39_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_39_1
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_39 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_39 = true;
    var x = ['./subPage/pages/preview/preview.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx2_XC_39_1()
      var tYBB = _mz(z, 'swiper', ['bindchange', 0, 'class', 1, 'current', 1, 'data-event-opts', 2, 'duration', 3], [], e, s, gg)
      var eZBB = _v()
      _(tYBB, eZBB)
      var b1BB = function(x3BB, o2BB, o4BB, gg) {
        var c6BB = _n('swiper-item')
        _rz(z, c6BB, 'class', 9, x3BB, o2BB, gg)
        var h7BB = _v()
        _(c6BB, h7BB)
        if (_oz(z, 10, x3BB, o2BB, gg)) {
          h7BB.wxVkey = 1
        }
        var o8BB = _v()
        _(c6BB, o8BB)
        if (_oz(z, 11, x3BB, o2BB, gg)) {
          o8BB.wxVkey = 1
        }
        h7BB.wxXCkey = 1
        o8BB.wxXCkey = 1
        _(o4BB, c6BB)
        return o4BB
      }
      eZBB.wxXCkey = 2
      _2z(z, 7, b1BB, e, s, gg, eZBB, 'item', 'index', 'index')
      _(r, tYBB)
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
        g = "$gwx2_XC_39";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_39();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/pages/preview/preview.wxml'] = [$gwx2_XC_39, './subPage/pages/preview/preview.wxml'];
else __wxAppCode__['subPage/pages/preview/preview.wxml'] = $gwx2_XC_39('./subPage/pages/preview/preview.wxml');;
__wxRoute = "subPage/pages/preview/preview";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPage/pages/preview/preview.js";
define("subPage/pages/preview/preview.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPage/pages/preview/preview"], {
      "0922": function(e, t, n) {
        (function(e) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var n = {
            data: function() {
              return {
                page: 1,
                loadMore: "loading",
                list: [{
                  name: "图片"
                }, {
                  name: "视频"
                }, {
                  name: "相关"
                }],
                list2: [{
                  name: "图片"
                }, {
                  name: "相关"
                }],
                current: 0,
                dataList: [],
                activeStyle: {
                  "font-weight": "bold",
                  "font-size": "32rpx"
                },
                barStyle: {
                  background: "linear-gradient(56deg, #FC4A9E 0%, #FF5411 100%)",
                  "border-radius": "8px",
                  position: "absolute",
                  bottom: "18rpx"
                },
                resourcesType: 1,
                showScreen: !1,
                background: ["color1", "color2", "color3"],
                indicatorDots: !0,
                autoplay: !0,
                showVideo: getApp().globalData.showvideo,
                interval: 2e3,
                duration: 500,
                swiperCurrent: 1,
                swiperLenght: 0,
                currentSwiper: 0,
                statusBarHeight: 0,
                navbarH: 60
              }
            },
            onLoad: function(t) {
              this.statusBarHeight = e.getSystemInfoSync().statusBarHeight, this.dataList = e.getStorageSync("mediaList"), this.swiperLenght = this.dataList.length, this.index = Number(t.index), this.swiperCurrent = this.index + 1, this.currentSwiper = this.index
            },
            methods: {
              swiperChange: function(e) {
                this.swiperCurrent = e.detail.current + 1
              },
              openMedia: function(e) {
                this.showScreen = !0
              },
              closeMask: function() {
                this.showScreen = !1
              }
            }
          };
          t.default = n
        }).call(this, n("df3c").default)
      },
      "6b42": function(e, t, n) {
        n.r(t);
        var a = n("0922"),
          i = n.n(a);
        for (var r in a)["default"].indexOf(r) < 0 && function(e) {
          n.d(t, e, (function() {
            return a[e]
          }))
        }(r);
        t.default = i.a
      },
      a11e: function(e, t, n) {
        (function(e, t) {
          var a = n("47a9");
          n("5366"), a(n("3240"));
          var i = a(n("a1b4"));
          e.__webpack_require_UNI_MP_PLUGIN__ = n, t(i.default)
        }).call(this, n("3223").default, n("df3c").createPage)
      },
      a1b4: function(e, t, n) {
        n.r(t);
        var a = n("f01c"),
          i = n("6b42");
        for (var r in i)["default"].indexOf(r) < 0 && function(e) {
          n.d(t, e, (function() {
            return i[e]
          }))
        }(r);
        n("c15e");
        var o = n("828b"),
          u = Object(o.a)(i.default, a.b, a.c, !1, null, "027fdb71", null, !1, a.a, void 0);
        t.default = u.exports
      },
      c15e: function(e, t, n) {
        var a = n("cb81");
        n.n(a).a
      },
      cb81: function(e, t, n) {},
      f01c: function(e, t, n) {
        n.d(t, "b", (function() {
          return a
        })), n.d(t, "c", (function() {
          return i
        })), n.d(t, "a", (function() {}));
        var a = function() {
            this.$createElement;
            this._self._c
          },
          i = []
      }
    },
    [
      ["a11e", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPage/pages/preview/preview.js'
});
require("subPage/pages/preview/preview.js");
