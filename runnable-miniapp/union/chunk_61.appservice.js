$gwx4_XC_58 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_58 || [];

    function gz$gwx4_XC_58_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_58_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_58_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_58_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__e'])
        Z(z[0])
        Z(z[0])
        Z(z[0])
        Z([3, 'data-v-c0f404c6'])
        Z([
          [4],
          [
            [5],
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
                        [1, 'ended']
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
                                [1, 'stopPlay']
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
                              [1, 'startPlay']
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
                    [1, 'error']
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
                            [1, 'videoErrorCallback']
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
                  [1, 'loadedmetadata']
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
                          [1, 'onLoadedmetadata']
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
        Z([1, false])
        Z([3, 'innerVideo'])
        Z([3, 'contain'])
        Z([
          [7],
          [3, 'poster']
        ])
        Z(z[6])
        Z(z[6])
        Z([
          [7],
          [3, 'videoUrl']
        ])
        Z([
          [2, '+'],
          [1, 'object-fit:contain;'],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, 'border-radius:'],
              [
                [2, '?:'],
                [
                  [7],
                  [3, 'isRadius']
                ],
                [1, '60rpx'],
                [1, '0']
              ]
            ],
            [1, ';']
          ]
        ])
        Z([
          [7],
          [3, 'showPlayBtn']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_58_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_58_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_58 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_58 = true;
    var x = ['./union/pages/vlog/videoPlay.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_58_1()
      var h5DB = _mz(z, 'video', ['bindended', 0, 'binderror', 1, 'bindloadedmetadata', 1, 'bindplay', 2, 'class', 3, 'data-event-opts', 4, 'enablePlayPageBtn', 5, 'id', 6, 'objectFit', 7, 'poster', 8, 'showCenterPlayBtn', 9, 'showFullscreenBtn', 10, 'src', 11, 'style', 12], [], e, s, gg)
      var o6DB = _v()
      _(h5DB, o6DB)
      if (_oz(z, 14, e, s, gg)) {
        o6DB.wxVkey = 1
      }
      o6DB.wxXCkey = 1
      _(r, h5DB)
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
        g = "$gwx4_XC_58";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_58();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/vlog/videoPlay.wxml'] = [$gwx4_XC_58, './union/pages/vlog/videoPlay.wxml'];
else __wxAppCode__['union/pages/vlog/videoPlay.wxml'] = $gwx4_XC_58('./union/pages/vlog/videoPlay.wxml');;
__wxRoute = "union/pages/vlog/videoPlay";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/vlog/videoPlay.js";
define("union/pages/vlog/videoPlay.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/vlog/videoPlay"], {
      "29bd": function(n, e, t) {
        t.r(e);
        var o = t("bcaf"),
          i = t.n(o);
        for (var a in o)["default"].indexOf(a) < 0 && function(n) {
          t.d(e, n, (function() {
            return o[n]
          }))
        }(a);
        e.default = i.a
      },
      "2d99": function(n, e, t) {
        t.d(e, "b", (function() {
          return o
        })), t.d(e, "c", (function() {
          return i
        })), t.d(e, "a", (function() {}));
        var o = function() {
            this.$createElement;
            this._self._c
          },
          i = []
      },
      a01fa: function(n, e, t) {},
      bcaf: function(n, e, t) {
        (function(n) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var t = {
            name: "videoPlay",
            data: function() {
              return {
                showPlayBtn: !0,
                innerVideoCtx: null
              }
            },
            props: {
              videoUrl: {
                type: String,
                default: ""
              },
              poster: {
                type: String,
                default: ""
              },
              isRadius: {
                type: Boolean,
                default: !1
              }
            },
            mounted: function() {
              var e = this;
              this.$nextTick((function() {
                n.createSelectorQuery().in(e).select("#innerVideo").context((function(n) {
                  n && n.context && (e.innerVideoCtx = n.context)
                })).exec()
              }))
            },
            methods: {
              stopPlay: function() {
                this.showPlayBtn = !0
              },
              startPlay: function() {
                this.showPlayBtn = !1
              },
              handlePlay: function() {
                this.innerVideoCtx && this.innerVideoCtx.play()
              },
              handleStop: function() {
                var e = this;
                this.$nextTick((function() {
                  n.createSelectorQuery().in(e).select("#innerVideo").context((function(n) {
                    n && n.context && n.context.stop()
                  })).exec()
                }))
              },
              onLoadedmetadata: function() {
                this.innerVideoCtx && this.innerVideoCtx.play()
              },
              videoErrorCallback: function(n) {
                console.error("视频加载失败:", n)
              }
            }
          };
          e.default = t
        }).call(this, t("df3c").default)
      },
      dcfc: function(n, e, t) {
        var o = t("a01fa");
        t.n(o).a
      },
      f4fd: function(n, e, t) {
        t.r(e);
        var o = t("2d99"),
          i = t("29bd");
        for (var a in i)["default"].indexOf(a) < 0 && function(n) {
          t.d(e, n, (function() {
            return i[n]
          }))
        }(a);
        t("dcfc");
        var c = t("828b"),
          r = Object(c.a)(i.default, o.b, o.c, !1, null, "c0f404c6", null, !1, o.a, void 0);
        e.default = r.exports
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/pages/vlog/videoPlay-create-component", {
      "union/pages/vlog/videoPlay-create-component": function(n, e, t) {
        t("df3c").createComponent(t("f4fd"))
      }
    },
    [
      ["union/pages/vlog/videoPlay-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'union/pages/vlog/videoPlay.js'
});
require("union/pages/vlog/videoPlay.js");
