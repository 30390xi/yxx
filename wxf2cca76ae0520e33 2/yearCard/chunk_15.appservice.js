$gwx0_XC_6 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_6 || [];

    function gz$gwx0_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_6_1) return __WXML_GLOBAL__.ops_cached.$gwx0_XC_6_1
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_6_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([
          [6],
          [
            [7],
            [3, 'playerData']
          ],
          [3, 'videoUrl']
        ])
        Z([1, true])
        Z([3, '__e'])
        Z(z[2])
        Z(z[2])
        Z([3, 'video data-v-0c78cf82'])
        Z([1, false])
        Z(z[6])
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
          ]
        ])
        Z(z[1])
        Z([3, 'videoPlayer'])
        Z([3, 'true'])
        Z(z[6])
        Z(z[0])
        Z([
          [2, '||'],
          [
            [2, '>'],
            [
              [7],
              [3, 'currentTime']
            ],
            [
              [6],
              [
                [7],
                [3, 'playerData']
              ],
              [3, 'changeTime']
            ]
          ],
          [
            [2, '!'],
            [
              [7],
              [3, 'isPlay']
            ]
          ]
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_6_1
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_6 = true;
    var x = ['./yearCard/pages/nfcVideo/nfcCase.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx0_XC_6_1()
      var eLC = _v()
      _(r, eLC)
      if (_oz(z, 0, e, s, gg)) {
        eLC.wxVkey = 1
        var bMC = _mz(z, 'video', ['autoplay', 1, 'bindpause', 1, 'bindplay', 2, 'bindtimeupdate', 3, 'class', 4, 'controls', 5, 'customCache', 6, 'data-event-opts', 7, 'enablePlayGesture', 8, 'id', 9, 'loop', 10, 'showCenterPlayBtn', 11, 'src', 12], [], e, s, gg)
        var oNC = _v()
        _(bMC, oNC)
        if (_oz(z, 14, e, s, gg)) {
          oNC.wxVkey = 1
        }
        oNC.wxXCkey = 1
        _(eLC, bMC)
      }
      eLC.wxXCkey = 1
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
        g = "$gwx0_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_6();
if (__vd_version_info__.delayedGwx) __wxAppCode__['yearCard/pages/nfcVideo/nfcCase.wxml'] = [$gwx0_XC_6, './yearCard/pages/nfcVideo/nfcCase.wxml'];
else __wxAppCode__['yearCard/pages/nfcVideo/nfcCase.wxml'] = $gwx0_XC_6('./yearCard/pages/nfcVideo/nfcCase.wxml');;
__wxRoute = "yearCard/pages/nfcVideo/nfcCase";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "yearCard/pages/nfcVideo/nfcCase.js";
define("yearCard/pages/nfcVideo/nfcCase.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["yearCard/pages/nfcVideo/nfcCase"], {
      "078f": function(e, a, t) {
        (function(e, t) {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.default = void 0;
          var n = {
            data: function() {
              return this.videoContext = null, {
                isPlay: !0,
                fullScreen: !1,
                currentTime: 0,
                playerData: {
                  vlogUrl: "",
                  dataUrl: "",
                  iconUrl: "",
                  changeTime: 20
                }
              }
            },
            onLoad: function(e) {
              var a = e.playerId || 1,
                t = Number(a) - 1;
              this.getFootBallPlayer(t)
            },
            methods: {
              getFootBallPlayer: function(a) {
                var n = this;
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                  paramKey: "FOOTBALL_PLAYER"
                }).then((function(i) {
                  if (1 === i.code) {
                    var o = i.data;
                    if (o.paramValue) {
                      var r = JSON.parse(o.paramValue).playerList;
                      n.playerData = r[a], n.videoContext = e.createVideoContext("videoPlayer"), t.preloadAssets({
                        data: [{
                          type: "image",
                          src: n.playerData.iconUrl
                        }]
                      })
                    }
                  }
                }))
              },
              videoClick: function() {
                e.navigateTo({
                  url: "/yearCard/pages/nfcVideo/nfcDetail?url=".concat(this.playerData.dataUrl)
                })
              },
              playPause: function() {
                this.isPlay ? this.videoContext.pause() : this.videoContext.play()
              },
              fullscreenchange: function(e) {
                this.fullScreen = e.detail.fullScreen
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
          a.default = n
        }).call(this, t("df3c").default, t("3223").default)
      },
      "60ce": function(e, a, t) {
        var n = t("b8e8");
        t.n(n).a
      },
      "697a": function(e, a, t) {},
      "6f40": function(e, a, t) {
        var n = t("697a");
        t.n(n).a
      },
      "9af0": function(e, a, t) {
        t.d(a, "b", (function() {
          return n
        })), t.d(a, "c", (function() {
          return i
        })), t.d(a, "a", (function() {}));
        var n = function() {
            this.$createElement;
            this._self._c
          },
          i = []
      },
      a0e1: function(e, a, t) {
        t.r(a);
        var n = t("9af0"),
          i = t("b88c");
        for (var o in i)["default"].indexOf(o) < 0 && function(e) {
          t.d(a, e, (function() {
            return i[e]
          }))
        }(o);
        t("6f40"), t("60ce");
        var r = t("828b"),
          c = Object(r.a)(i.default, n.b, n.c, !1, null, "0c78cf82", null, !1, n.a, void 0);
        a.default = c.exports
      },
      b88c: function(e, a, t) {
        t.r(a);
        var n = t("078f"),
          i = t.n(n);
        for (var o in n)["default"].indexOf(o) < 0 && function(e) {
          t.d(a, e, (function() {
            return n[e]
          }))
        }(o);
        a.default = i.a
      },
      b8e8: function(e, a, t) {},
      cf63: function(e, a, t) {
        (function(e, a) {
          var n = t("47a9");
          t("5366"), n(t("3240"));
          var i = n(t("a0e1"));
          e.__webpack_require_UNI_MP_PLUGIN__ = t, a(i.default)
        }).call(this, t("3223").default, t("df3c").createPage)
      }
    },
    [
      ["cf63", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'yearCard/pages/nfcVideo/nfcCase.js'
});
require("yearCard/pages/nfcVideo/nfcCase.js");
