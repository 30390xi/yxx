$gwx2_XC_50 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_50 || [];

    function gz$gwx2_XC_50_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_50_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_50_1
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_50_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'container'])
        Z([
          [2, '&&'],
          [
            [7],
            [3, 'list']
          ],
          [
            [6],
            [
              [7],
              [3, 'list']
            ],
            [1, 0]
          ]
        ])
        Z([3, '__i0__'])
        Z([3, 'item'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l0']
        ])
        Z([3, '__e'])
        Z(z[3])
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
                            [1, 'todetail']
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
                                        [1, 'list']
                                      ],
                                      [1, '']
                                    ],
                                    [
                                      [7],
                                      [3, '__i0__']
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
          [2, '=='],
          [
            [6],
            [
              [6],
              [
                [7],
                [3, 'item']
              ],
              [3, '$orig']
            ],
            [3, 'isRecommend']
          ],
          [1, 1]
        ])
        Z([
          [6],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, '$orig']
          ],
          [3, 'subtitle']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_50_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_50_1
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_50 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_50 = true;
    var x = ['./subPage/pages/strategyList/strategyList.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx2_XC_50_1()
      var oRYB = _n('view')
      _rz(z, oRYB, 'class', 0, e, s, gg)
      var cSYB = _v()
      _(oRYB, cSYB)
      if (_oz(z, 1, e, s, gg)) {
        cSYB.wxVkey = 1
        var oTYB = _v()
        _(cSYB, oTYB)
        var lUYB = function(tWYB, aVYB, eXYB, gg) {
          var oZYB = _mz(z, 'view', ['bindtap', 5, 'class', 1, 'data-event-opts', 2], [], tWYB, aVYB, gg)
          var x1YB = _v()
          _(oZYB, x1YB)
          if (_oz(z, 8, tWYB, aVYB, gg)) {
            x1YB.wxVkey = 1
          }
          var o2YB = _v()
          _(oZYB, o2YB)
          if (_oz(z, 9, tWYB, aVYB, gg)) {
            o2YB.wxVkey = 1
          }
          x1YB.wxXCkey = 1
          o2YB.wxXCkey = 1
          _(eXYB, oZYB)
          return eXYB
        }
        oTYB.wxXCkey = 2
        _2z(z, 4, lUYB, e, s, gg, oTYB, 'item', '__i0__', '')
      } else {
        cSYB.wxVkey = 2
      }
      cSYB.wxXCkey = 1
      _(r, oRYB)
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
        g = "$gwx2_XC_50";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_50();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/pages/strategyList/strategyList.wxml'] = [$gwx2_XC_50, './subPage/pages/strategyList/strategyList.wxml'];
else __wxAppCode__['subPage/pages/strategyList/strategyList.wxml'] = $gwx2_XC_50('./subPage/pages/strategyList/strategyList.wxml');;
__wxRoute = "subPage/pages/strategyList/strategyList";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPage/pages/strategyList/strategyList.js";
define("subPage/pages/strategyList/strategyList.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPage/pages/strategyList/strategyList"], {
      1756: function(t, n, e) {
        e.r(n);
        var i = e("2f2c"),
          r = e.n(i);
        for (var c in i)["default"].indexOf(c) < 0 && function(t) {
          e.d(n, t, (function() {
            return i[t]
          }))
        }(c);
        n.default = r.a
      },
      "2f2c": function(t, n, e) {
        (function(t) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = void 0;
          var e = {
            props: [],
            onLoad: function(t) {
              this.cityId = t.id, this.getList()
            },
            data: function() {
              return {
                list: [],
                cityId: "",
                size: 10,
                current: 1
              }
            },
            onShow: function() {},
            onReachBottom: function() {
              this.current += 1, this.getList()
            },
            methods: {
              setSrc: function(t) {
                if (t.coverPictureUrl) return t.coverPictureUrl;
                var n = t.lineCoverPic ? JSON.parse(t.lineCoverPic) : [];
                return n.length > 0 ? n[0].url : ""
              },
              todetail: function(t) {
                this.$util.cityJump(t.contentType, t.originId, t)
              },
              getList: function() {
                var n = this,
                  e = {
                    current: this.current,
                    size: this.size,
                    cityId: this.cityId
                  };
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/city/queryCityStrategyList", e).then((function(e) {
                  n.list = n.list.concat(e.data.records), 1 == n.current || e.data.records[0] || t.showToast({
                    title: "没有更多咯",
                    icon: "none"
                  })
                }))
              }
            }
          };
          n.default = e
        }).call(this, e("df3c").default)
      },
      5089: function(t, n, e) {
        (function(t, n) {
          var i = e("47a9");
          e("5366"), i(e("3240"));
          var r = i(e("7718"));
          t.__webpack_require_UNI_MP_PLUGIN__ = e, n(r.default)
        }).call(this, e("3223").default, e("df3c").createPage)
      },
      6868: function(t, n, e) {
        e.d(n, "b", (function() {
          return i
        })), e.d(n, "c", (function() {
          return r
        })), e.d(n, "a", (function() {}));
        var i = function() {
            var t = this,
              n = (t.$createElement, t._self._c, t.list && t.list[0] ? t.__map(t.list, (function(n, e) {
                return {
                  $orig: t.__get_orig(n),
                  m0: t.setSrc(n)
                }
              })) : null);
            t.$mp.data = Object.assign({}, {
              $root: {
                l0: n
              }
            })
          },
          r = []
      },
      "6cee": function(t, n, e) {
        var i = e("9700");
        e.n(i).a
      },
      7718: function(t, n, e) {
        e.r(n);
        var i = e("6868"),
          r = e("1756");
        for (var c in r)["default"].indexOf(c) < 0 && function(t) {
          e.d(n, t, (function() {
            return r[t]
          }))
        }(c);
        e("febd"), e("6cee");
        var o = e("828b"),
          u = Object(o.a)(r.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        n.default = u.exports
      },
      9700: function(t, n, e) {},
      dffc: function(t, n, e) {},
      febd: function(t, n, e) {
        var i = e("dffc");
        e.n(i).a
      }
    },
    [
      ["5089", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPage/pages/strategyList/strategyList.js'
});
require("subPage/pages/strategyList/strategyList.js");
