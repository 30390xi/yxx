$gwx4_XC_8 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_8 || [];

    function gz$gwx4_XC_8_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_8_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_8_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_8_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'history-box'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'g0']
        ])
        Z([3, '__l'])
        Z([3, 'https://eshopfile.zhiyousx.com/noMsg@2x.png'])
        Z([3, '暂无数据'])
        Z([3, 'b320a8bc-1'])
        Z([3, '#f7f7f7'])
        Z(z[2])
        Z([3, '#ccc'])
        Z([
          [2, '!'],
          [
            [6],
            [
              [7],
              [3, '$root']
            ],
            [3, 'g1']
          ]
        ])
        Z(z[8])
        Z([
          [9],
          [
            [9],
            [
              [8], 'loadmore', [1, '轻轻上拉']
            ],
            [
              [8], 'loading', [1, '努力加载中']
            ]
          ],
          [
            [8], 'nomore', [1, '暂无更多数据']
          ]
        ])
        Z([
          [7],
          [3, 'loadMore']
        ])
        Z([3, 'b320a8bc-2'])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_8_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_8_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_8 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_8 = true;
    var x = ['./union/pages/ai/historyList.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_8_1()
      var cBL = _n('view')
      _rz(z, cBL, 'class', 0, e, s, gg)
      var hCL = _v()
      _(cBL, hCL)
      if (_oz(z, 1, e, s, gg)) {
        hCL.wxVkey = 1
        var oDL = _mz(z, 'empty-state', ['bind:__l', 2, 'imgUrl', 1, 'text', 2, 'vueId', 3], [], e, s, gg)
        _(hCL, oDL)
      }
      var cEL = _mz(z, 'u-loadmore', ['bgColor', 6, 'bind:__l', 1, 'color', 2, 'data-custom-hidden', 3, 'iconColor', 4, 'loadText', 5, 'status', 6, 'vueId', 7], [], e, s, gg)
      _(cBL, cEL)
      hCL.wxXCkey = 1
      hCL.wxXCkey = 3
      _(r, cBL)
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
        g = "$gwx4_XC_8";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_8();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/ai/historyList.wxml'] = [$gwx4_XC_8, './union/pages/ai/historyList.wxml'];
else __wxAppCode__['union/pages/ai/historyList.wxml'] = $gwx4_XC_8('./union/pages/ai/historyList.wxml');;
__wxRoute = "union/pages/ai/historyList";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/ai/historyList.js";
define("union/pages/ai/historyList.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/ai/historyList"], {
      "1d2b": function(e, t, n) {
        n.d(t, "b", (function() {
          return a
        })), n.d(t, "c", (function() {
          return i
        })), n.d(t, "a", (function() {
          return o
        }));
        var o = {
            uLoadmore: function() {
              return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "2db1"))
            }
          },
          a = function() {
            this.$createElement;
            var e = (this._self._c, "nomore" === this.loadMore && this.newsList.length <= 0),
              t = ["loading", "nomore"].includes(this.loadMore) && this.newsList.length > 0 || "loading" == this.loadMore && 0 == this.newsList.length;
            this.$mp.data = Object.assign({}, {
              $root: {
                g0: e,
                g1: t
              }
            })
          },
          i = []
      },
      "1eb4": function(e, t, n) {
        n.r(t);
        var o = n("1d2b"),
          a = n("4e25");
        for (var i in a)["default"].indexOf(i) < 0 && function(e) {
          n.d(t, e, (function() {
            return a[e]
          }))
        }(i);
        n("9b58");
        var r = n("828b"),
          s = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = s.exports
      },
      2638: function(e, t, n) {},
      "4e25": function(e, t, n) {
        n.r(t);
        var o = n("5dd3"),
          a = n.n(o);
        for (var i in o)["default"].indexOf(i) < 0 && function(e) {
          n.d(t, e, (function() {
            return o[e]
          }))
        }(i);
        t.default = a.a
      },
      "5dd3": function(e, t, n) {
        (function(e) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var o = {
            components: {
              EmptyState: function() {
                n.e("components/empty/empty").then(function() {
                  return resolve(n("a427"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                page: 1,
                loadMore: "loading",
                newsList: []
              }
            },
            computed: {
              newsListCopy: function() {
                var e = [],
                  t = {};
                return this.newsList.forEach((function(n) {
                  var o = n.updateTime;
                  if (t[o]) t[o].data.push(n);
                  else {
                    var a = {
                      key: o,
                      data: [n]
                    };
                    t[o] = a, e.push(a)
                  }
                })), e
              }
            },
            onLoad: function(e) {
              this.pageLoad()
            },
            onPullDownRefresh: function() {
              this.page = 1, this.pageLoad()
            },
            onReachBottom: function() {
              "loadmore" === this.loadMore && this.pageLoad()
            },
            methods: {
              goView: function(t) {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_showHistory_click",
                  eventName: "伴游历史记录回显",
                  eventParams: {
                    HISTORY_ID: t
                  }
                }), e.setStorageSync("HISTORY_ID", t), setTimeout((function() {
                  e.navigateBack({
                    delta: 1
                  })
                }), 300)
              },
              setTime: function(e) {
                var t = new Date(e),
                  n = t.getFullYear(),
                  o = t.getMonth() + 1,
                  a = t.getDate();
                return "".concat(n, "-").concat(o < 10 ? "0" + o : o, "月").concat(a < 10 ? "0" + a : a, "日")
              },
              pageLoad: function() {
                var t = this,
                  n = {
                    current: this.page,
                    openId: e.getStorageSync("wxopenid"),
                    size: 20,
                    bussType: 1
                  };
                this.$uniApi.dataRequestNoLoading("GET", "ai/aiEscort/session/page", n).then((function(n) {
                  if (e.stopPullDownRefresh(), 1 === n.code) {
                    var o = n.data.records;
                    n.data.total > 0 ? (1 === n.data.current ? t.newsList = o : t.newsList = t.newsList.concat(o), n.data.current < n.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.newsList = [], t.loadMore = "nomore")
                  }
                })).catch((function(t) {
                  e.stopPullDownRefresh()
                }))
              }
            }
          };
          t.default = o
        }).call(this, n("df3c").default)
      },
      "9b58": function(e, t, n) {
        var o = n("2638");
        n.n(o).a
      },
      e0ce: function(e, t, n) {
        (function(e, t) {
          var o = n("47a9");
          n("5366"), o(n("3240"));
          var a = o(n("1eb4"));
          e.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default)
        }).call(this, n("3223").default, n("df3c").createPage)
      }
    },
    [
      ["e0ce", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'union/pages/ai/historyList.js'
});
require("union/pages/ai/historyList.js");
