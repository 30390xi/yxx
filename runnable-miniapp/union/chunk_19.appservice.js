$gwx4_XC_11 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_11 || [];

    function gz$gwx4_XC_11_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_11_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_11_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_11_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'page-box data-v-7f309d23'])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [1, '#6585FA']
            ],
            [1, '#F1F5FB']
          ]
        ])
        Z([3, '180'])
        Z([3, '__l'])
        Z([3, 'data-v-7f309d23'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'm0']
        ])
        Z([3, 'fixed'])
        Z([3, '0510fb43-1'])
        Z([3, '__i0__'])
        Z([3, 'item'])
        Z([
          [7],
          [3, 'collectionList']
        ])
        Z([3, 'id'])
        Z([3, '__i1__'])
        Z([3, 'el'])
        Z([
          [6],
          [
            [7],
            [3, 'item']
          ],
          [3, 'list']
        ])
        Z(z[3])
        Z([3, '__e'])
        Z(z[4])
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
                  [1, '^badCommentFun']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'badCommentFun']
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
          [3, 'el']
        ])
        Z([1, true])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, '0510fb43-2-'],
              [
                [7],
                [3, '__i0__']
              ]
            ],
            [1, '-']
          ],
          [
            [7],
            [3, '__i1__']
          ]
        ])
        Z([3, '#f7f7f7'])
        Z(z[3])
        Z(z[4])
        Z([3, '#ccc'])
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
        Z(z[25])
        Z([
          [7],
          [3, 'loadMore']
        ])
        Z([3, '0510fb43-3'])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_11_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_11_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_11 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_11 = true;
    var x = ['./union/pages/aiBy/collectionList.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_11_1()
      var oDO = _n('view')
      _rz(z, oDO, 'class', 0, e, s, gg)
      var fEO = _mz(z, 'uni-navbar', ['bgColor', 1, 'bgColorAngle', 1, 'bind:__l', 2, 'class', 3, 'title', 4, 'type', 5, 'vueId', 6], [], e, s, gg)
      _(oDO, fEO)
      var cFO = _v()
      _(oDO, cFO)
      var hGO = function(cIO, oHO, oJO, gg) {
        var aLO = _v()
        _(oJO, aLO)
        var tMO = function(bOO, eNO, oPO, gg) {
          var oRO = _mz(z, 'chat-item', ['bind:__l', 15, 'bind:badCommentFun', 1, 'class', 2, 'data-event-opts', 3, 'item', 4, 'likeSave', 5, 'vueId', 6], [], bOO, eNO, gg)
          _(oPO, oRO)
          return oPO
        }
        aLO.wxXCkey = 4
        _2z(z, 14, tMO, cIO, oHO, gg, aLO, 'el', '__i1__', '')
        return oJO
      }
      cFO.wxXCkey = 4
      _2z(z, 10, hGO, e, s, gg, cFO, 'item', '__i0__', 'id')
      var fSO = _mz(z, 'u-loadmore', ['bgColor', 22, 'bind:__l', 1, 'class', 2, 'color', 3, 'data-custom-hidden', 4, 'iconColor', 5, 'status', 6, 'vueId', 7], [], e, s, gg)
      _(oDO, fSO)
      _(r, oDO)
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
        g = "$gwx4_XC_11";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_11();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/aiBy/collectionList.wxml'] = [$gwx4_XC_11, './union/pages/aiBy/collectionList.wxml'];
else __wxAppCode__['union/pages/aiBy/collectionList.wxml'] = $gwx4_XC_11('./union/pages/aiBy/collectionList.wxml');;
__wxRoute = "union/pages/aiBy/collectionList";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/aiBy/collectionList.js";
define("union/pages/aiBy/collectionList.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/aiBy/collectionList"], {
      "0f30": function(t, n, e) {
        (function(t, n) {
          var o = e("47a9");
          e("5366"), o(e("3240"));
          var i = o(e("5c6c"));
          t.__webpack_require_UNI_MP_PLUGIN__ = e, n(i.default)
        }).call(this, e("3223").default, e("df3c").createPage)
      },
      "27ed": function(t, n, e) {
        (function(t) {
          var o = e("47a9");
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = void 0;
          var i = {
            mixins: [o(e("30eb")).default],
            components: {
              chatItem: function() {
                e.e("union/components1/chat-item/chat-item-by").then(function() {
                  return resolve(e("8633"))
                }.bind(null, e)).catch(e.oe)
              }
            },
            onLoad: function(n) {
              this.language = t.getStorageSync("language") || "zh", t.setNavigationBarTitle({
                title: this.$t("collectionList.navbar.title")
              }), this.getCollectionList()
            },
            onShow: function() {},
            onReachBottom: function() {
              "loadmore" === this.loadMore && this.getCollectionList()
            },
            data: function() {
              return {
                collectionList: [],
                page: 1,
                loadMore: "loading",
                language: "zh"
              }
            },
            watch: {},
            computed: {},
            methods: {
              badCommentFun: function() {
                this.collectionList = [], this.page = 1, this.loadMore = "loading", this.getCollectionList()
              },
              getCollectionList: function() {
                var t = this,
                  n = {
                    pageNum: this.page,
                    pageSize: 30,
                    language: this.language
                  };
                this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "ai/app/qa/collect/list", n).then((function(n) {
                  if (1 === n.code) {
                    var e = n.data.records;
                    e = e.map((function(t) {
                      return {
                        time: t.questionTime,
                        list: [{
                          content: t.question,
                          type: 1,
                          state: 1,
                          end: !0,
                          name: "ai",
                          list: [],
                          id: t.id,
                          dialogueId: t.dialogueId,
                          roundId: t.roundId
                        }, {
                          content: t.answer,
                          content1: t.answer,
                          type: 0,
                          state: 0,
                          end: !0,
                          name: "ai",
                          isMe: !1,
                          list: [],
                          id: t.id,
                          dialogueId: t.dialogueId,
                          roundId: t.roundId,
                          isTerminate: !0
                        }]
                      }
                    })), n.data.total > 0 ? (1 === n.data.current ? t.collectionList = e : t.collectionList = t.collectionList.concat(e), n.data.current < n.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.collectionList = [])
                  }
                  console.log(t.collectionList, "this.collectionList"), t.submiting = !1
                })).catch((function(t) {}))
              }
            }
          };
          n.default = i
        }).call(this, e("df3c").default)
      },
      "2d31": function(t, n, e) {},
      "354d": function(t, n, e) {
        var o = e("2d31");
        e.n(o).a
      },
      "55e0": function(t, n, e) {
        e.r(n);
        var o = e("27ed"),
          i = e.n(o);
        for (var a in o)["default"].indexOf(a) < 0 && function(t) {
          e.d(n, t, (function() {
            return o[t]
          }))
        }(a);
        n.default = i.a
      },
      "5c6c": function(t, n, e) {
        e.r(n);
        var o = e("92f9"),
          i = e("55e0");
        for (var a in i)["default"].indexOf(a) < 0 && function(t) {
          e.d(n, t, (function() {
            return i[t]
          }))
        }(a);
        e("354d");
        var l = e("828b"),
          c = Object(l.a)(i.default, o.b, o.c, !1, null, "7f309d23", null, !1, o.a, void 0);
        n.default = c.exports
      },
      "92f9": function(t, n, e) {
        e.d(n, "b", (function() {
          return i
        })), e.d(n, "c", (function() {
          return a
        })), e.d(n, "a", (function() {
          return o
        }));
        var o = {
            uniNavbar: function() {
              return e.e("components/uni-navbar/uni-navbar").then(e.bind(null, "101a"))
            },
            uLoadmore: function() {
              return e.e("uview-ui/components/u-loadmore/u-loadmore").then(e.bind(null, "2db1"))
            }
          },
          i = function() {
            this.$createElement;
            var t = (this._self._c, this.$t("collectionList.navbar.title")),
              n = ["loading", "nomore"].includes(this.loadMore) && this.collectionList.length > 0 || "loading" == this.loadMore && 0 == this.collectionList.length;
            this.$mp.data = Object.assign({}, {
              $root: {
                m0: t,
                g0: n
              }
            })
          },
          a = []
      }
    },
    [
      ["0f30", "common/runtime", "common/vendor", "union/common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'union/pages/aiBy/collectionList.js'
});
require("union/pages/aiBy/collectionList.js");
