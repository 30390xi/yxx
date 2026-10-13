$gwx0_XC_14 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_14 || [];

    function gz$gwx0_XC_14_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_14_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_14_1
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_14_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__e'])
        Z(z[0])
        Z(z[0])
        Z([3, 'video data-v-26c6a14f'])
        Z([1, false])
        Z(z[4])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [
                  [4],
                  [
                    [5],
                    [
                      [5],
                      [1, 'play']
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
                              [1, 'videoPlay']
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
              ],
              [
                [4],
                [
                  [5],
                  [
                    [5],
                    [1, 'pause']
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
                            [1, 'videopause']
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
            ],
            [
              [4],
              [
                [5],
                [
                  [5],
                  [1, 'timeupdate']
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
                          [1, 'videoUpdate']
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
        Z([1, true])
        Z([3, 'videoPlayer'])
        Z([3, 'true'])
        Z(z[4])
        Z([3, 'https://eshopfile.zhiyousx.com/teamVideo2.mp4'])
        Z([
          [2, '||'],
          [
            [2, '>'],
            [
              [7],
              [3, 'currentTime']
            ],
            [1, 2]
          ],
          [
            [2, '!'],
            [
              [7],
              [3, 'isPlay']
            ]
          ]
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_14_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_14_1
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_14 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_14 = true;
    var x = ['./yearCard/pages/teamNFC/index.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx0_XC_14_1()
      var c0F = _mz(z, 'video', ['bindpause', 0, 'bindplay', 1, 'bindtimeupdate', 1, 'class', 2, 'controls', 3, 'customCache', 4, 'data-event-opts', 5, 'enablePlayGesture', 6, 'id', 7, 'loop', 8, 'showCenterPlayBtn', 9, 'src', 10], [], e, s, gg)
      var hAG = _v()
      _(c0F, hAG)
      if (_oz(z, 12, e, s, gg)) {
        hAG.wxVkey = 1
      }
      hAG.wxXCkey = 1
      _(r, c0F)
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
        g = "$gwx0_XC_14";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_14();
if (__vd_version_info__.delayedGwx) __wxAppCode__['yearCard/pages/teamNFC/index.wxml'] = [$gwx0_XC_14, './yearCard/pages/teamNFC/index.wxml'];
else __wxAppCode__['yearCard/pages/teamNFC/index.wxml'] = $gwx0_XC_14('./yearCard/pages/teamNFC/index.wxml');;
__wxRoute = "yearCard/pages/teamNFC/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "yearCard/pages/teamNFC/index.js";
define("yearCard/pages/teamNFC/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["yearCard/pages/teamNFC/index"], {
      2044: function(e, t, a) {
        (function(e, t) {
          var n = a("47a9");
          a("5366"), n(a("3240"));
          var i = n(a("4262"));
          e.__webpack_require_UNI_MP_PLUGIN__ = a, t(i.default)
        }).call(this, a("3223").default, a("df3c").createPage)
      },
      2438: function(e, t, a) {
        var n = a("89ad");
        a.n(n).a
      },
      2676: function(e, t, a) {
        a.d(t, "b", (function() {
          return n
        })), a.d(t, "c", (function() {
          return i
        })), a.d(t, "a", (function() {}));
        var n = function() {
            this.$createElement;
            this._self._c
          },
          i = []
      },
      4262: function(e, t, a) {
        a.r(t);
        var n = a("2676"),
          i = a("84ec");
        for (var o in i)["default"].indexOf(o) < 0 && function(e) {
          a.d(t, e, (function() {
            return i[e]
          }))
        }(o);
        a("4a09"), a("2438");
        var r = a("828b"),
          c = Object(r.a)(i.default, n.b, n.c, !1, null, "26c6a14f", null, !1, n.a, void 0);
        t.default = c.exports
      },
      "4a09": function(e, t, a) {
        var n = a("f6d4");
        a.n(n).a
      },
      "659e": function(e, t, a) {
        (function(e) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var a = {
            data: function() {
              return {
                vlogUrl: "https://eshopfile.zhiyousx.com/teamVideo2.mp4",
                isPlay: !0,
                fullScreen: !1,
                currentTime: 0,
                teamId: 0
              }
            },
            onLoad: function(t) {
              this.teamId = t.teamId || 1, this.vlogUrl = t.url || "https://eshopfile.zhiyousx.com/qtTeam/teamVideo.mp4", e.createVideoContext("videoPlayer").play()
            },
            onShow: function() {},
            onShareAppMessage: function() {
              return {
                title: "「青途文旅」四川团建之旅",
                imageUrl: "https://eshopfile.zhiyousx.com/2025111815285164535.jpg",
                path: "/yearCard/pages/teamNFC/index?teamId=".concat(this.teamId)
              }
            },
            onShareTimeline: function() {
              return {
                title: "「青途文旅」四川团建之旅",
                imageUrl: "https://eshopfile.zhiyousx.com/2025111815285164535.jpg",
                path: "/yearCard/pages/teamNFC/index?teamId=".concat(this.teamId)
              }
            },
            methods: {
              iconClick: function(t) {
                var a = 1 == t ? "/yearCard/pages/teamNFC/album?teamId=".concat(this.teamId) : "/yearCard/pages/teamNFC/line";
                e.navigateTo({
                  url: a
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
          t.default = a
        }).call(this, a("df3c").default)
      },
      "84ec": function(e, t, a) {
        a.r(t);
        var n = a("659e"),
          i = a.n(n);
        for (var o in n)["default"].indexOf(o) < 0 && function(e) {
          a.d(t, e, (function() {
            return n[e]
          }))
        }(o);
        t.default = i.a
      },
      "89ad": function(e, t, a) {},
      f6d4: function(e, t, a) {}
    },
    [
      ["2044", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'yearCard/pages/teamNFC/index.js'
});
require("yearCard/pages/teamNFC/index.js");
