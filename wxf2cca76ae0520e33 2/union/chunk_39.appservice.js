$gwx4_XC_33 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_33 || [];

    function gz$gwx4_XC_33_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_33_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_33_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_33_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__e'])
        Z([3, 'photo-list data-v-616da972'])
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
                  [1, 'scrolltolower']
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
                          [1, 'scrolltolower']
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
        Z([3, '50'])
        Z([1, true])
        Z([3, 'i'])
        Z([3, 'el'])
        Z([
          [7],
          [3, 'photoList']
        ])
        Z(z[5])
        Z(z[0])
        Z([3, 'photo-list-item data-v-616da972'])
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
                  [1, 'tap']
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
                          [
                            [5],
                            [1, 'goView']
                          ],
                          [
                            [4],
                            [
                              [5],
                              [1, '$0']
                            ]
                          ]
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
                                  [4],
                                  [
                                    [5],
                                    [
                                      [5],
                                      [
                                        [5],
                                        [1, 'photoList']
                                      ],
                                      [1, '']
                                    ],
                                    [
                                      [7],
                                      [3, 'i']
                                    ]
                                  ]
                                ]
                              ]
                            ]
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
          [2, '!'],
          [
            [6],
            [
              [7],
              [3, 'el']
            ],
            [3, 'video']
          ]
        ])
        Z([
          [2, '||'],
          [
            [2, '=='],
            [
              [6],
              [
                [7],
                [3, 'el']
              ],
              [3, 'status']
            ],
            [1, 3]
          ],
          [
            [2, '=='],
            [
              [6],
              [
                [7],
                [3, 'el']
              ],
              [3, 'status']
            ],
            [1, 1]
          ]
        ])
        Z([3, '__l'])
        Z([3, 'data-v-616da972'])
        Z([
          [2, '+'],
          [1, 'ff59d24e-1-'],
          [
            [7],
            [3, 'i']
          ]
        ])
        Z([3, 'translate'])
        Z(z[14])
        Z(z[15])
        Z([3, '#333333'])
        Z([
          [2, '!'],
          [
            [6],
            [
              [7],
              [3, '$root']
            ],
            [3, 'g0']
          ]
        ])
        Z([3, '#ccc'])
        Z([
          [7],
          [3, 'loadMore']
        ])
        Z([3, 'ff59d24e-2'])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_33_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_33_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_33 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_33 = true;
    var x = ['./union/pages/aiVideo/historyList.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_33_1()
      var lY3 = _mz(z, 'scroll-view', ['bindscrolltolower', 0, 'class', 1, 'data-event-opts', 1, 'lowerThreshold', 2, 'scrollY', 3], [], e, s, gg)
      var aZ3 = _v()
      _(lY3, aZ3)
      var t13 = function(b33, e23, o43, gg) {
        var o63 = _mz(z, 'view', ['bindtap', 9, 'class', 1, 'data-event-opts', 2], [], b33, e23, gg)
        var f73 = _v()
        _(o63, f73)
        if (_oz(z, 12, b33, e23, gg)) {
          f73.wxVkey = 1
          var c83 = _v()
          _(f73, c83)
          if (_oz(z, 13, b33, e23, gg)) {
            c83.wxVkey = 1
            var h93 = _mz(z, 'loading', ['bind:__l', 14, 'class', 1, 'vueId', 2], [], b33, e23, gg)
            _(c83, h93)
          }
          c83.wxXCkey = 1
          c83.wxXCkey = 3
        }
        f73.wxXCkey = 1
        f73.wxXCkey = 3
        _(o43, o63)
        return o43
      }
      aZ3.wxXCkey = 4
      _2z(z, 7, t13, e, s, gg, aZ3, 'el', 'i', 'i')
      var o03 = _mz(z, 'u-loadmore', ['bgColor', 17, 'bind:__l', 1, 'class', 2, 'color', 3, 'data-custom-hidden', 4, 'iconColor', 5, 'status', 6, 'vueId', 7], [], e, s, gg)
      _(lY3, o03)
      _(r, lY3)
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
        g = "$gwx4_XC_33";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_33();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/aiVideo/historyList.wxml'] = [$gwx4_XC_33, './union/pages/aiVideo/historyList.wxml'];
else __wxAppCode__['union/pages/aiVideo/historyList.wxml'] = $gwx4_XC_33('./union/pages/aiVideo/historyList.wxml');;
__wxRoute = "union/pages/aiVideo/historyList";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/aiVideo/historyList.js";
define("union/pages/aiVideo/historyList.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/aiVideo/historyList"], {
      "01ac": function(o, e, n) {
        (function(o, e) {
          var t = n("47a9");
          n("5366"), t(n("3240"));
          var a = t(n("981f"));
          o.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default)
        }).call(this, n("3223").default, n("df3c").createPage)
      },
      "3b22": function(o, e, n) {
        n.d(e, "b", (function() {
          return a
        })), n.d(e, "c", (function() {
          return i
        })), n.d(e, "a", (function() {
          return t
        }));
        var t = {
            uLoadmore: function() {
              return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "2db1"))
            }
          },
          a = function() {
            this.$createElement;
            var o = (this._self._c, ["loading", "nomore"].includes(this.loadMore) && this.photoList.length > 0 || "loading" == this.loadMore && 0 == this.photoList.length);
            this.$mp.data = Object.assign({}, {
              $root: {
                g0: o
              }
            })
          },
          i = []
      },
      "76ce": function(o, e, n) {},
      "981f": function(o, e, n) {
        n.r(e);
        var t = n("3b22"),
          a = n("fea9");
        for (var i in a)["default"].indexOf(i) < 0 && function(o) {
          n.d(e, o, (function() {
            return a[o]
          }))
        }(i);
        n("b9d8");
        var r = n("828b"),
          d = Object(r.a)(a.default, t.b, t.c, !1, null, "616da972", null, !1, t.a, void 0);
        e.default = d.exports
      },
      b9d8: function(o, e, n) {
        var t = n("76ce");
        n.n(t).a
      },
      fa20: function(o, e, n) {
        (function(o) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var t = n("0e74"),
            a = {
              components: {
                loading: function() {
                  n.e("union/pages/aiVideo/component/loading").then(function() {
                    return resolve(n("9ae6"))
                  }.bind(null, n)).catch(n.oe)
                }
              },
              data: function() {
                return {
                  photoList: [],
                  finished: !1,
                  page: 1,
                  loadMore: "loading"
                }
              },
              onShow: function() {
                this.pageLoad()
              },
              methods: {
                goView: function(e) {
                  2 != e.status && o.navigateTo({
                    url: "/union/pages/aiVideo/loadPage?id=" + e.id + "&imageName=" + e.imageName + "&moldId=" + e.moldId + "&source=3"
                  })
                },
                scrolltolower: function() {
                  "loadmore" === this.loadMore && this.pageLoad()
                },
                pageLoad: function() {
                  var e = this;
                  this.loadMore = "loading";
                  var n = {
                    openId: o.getStorageSync("wxopenid"),
                    pageOn: this.page,
                    pageSize: 5
                  };
                  this.$uniApi.dataRequestNoLoading("GET", "program/queryByOpenId", n, 1, t.AIVIDEO_API_BASE_URL).then((function(o) {
                    if (1 === o.code) {
                      var n = o.data.records || [];
                      o.data.total > 0 ? (1 === o.data.current ? e.photoList = n : e.photoList = e.photoList.concat(n), o.data.current < o.data.pages ? (e.page = e.page + 1, e.loadMore = "loadmore") : e.loadMore = "nomore") : (e.loadMore = "nomore", e.photoList = [])
                    } else e.$util.showToast(o.msg || "加载失败"), e.finished = !0
                  })).catch((function(o) {
                    e.$util.showToast("加载失败")
                  })).finally((function() {}))
                }
              }
            };
          e.default = a
        }).call(this, n("df3c").default)
      },
      fea9: function(o, e, n) {
        n.r(e);
        var t = n("fa20"),
          a = n.n(t);
        for (var i in t)["default"].indexOf(i) < 0 && function(o) {
          n.d(e, o, (function() {
            return t[o]
          }))
        }(i);
        e.default = a.a
      }
    },
    [
      ["01ac", "common/runtime", "common/vendor", "union/common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'union/pages/aiVideo/historyList.js'
});
require("union/pages/aiVideo/historyList.js");
