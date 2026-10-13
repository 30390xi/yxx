$gwx4_XC_37 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_37 || [];

    function gz$gwx4_XC_37_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_37_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_37_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_37_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'u-wrap page-box data-v-299e5889'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, 'overflow:'],
              [
                [2, '?:'],
                [
                  [2, '||'],
                  [
                    [7],
                    [3, 'showSortPop']
                  ],
                  [
                    [7],
                    [3, 'showChoosePop']
                  ]
                ],
                [1, 'hidden'],
                [1, 'visible']
              ]
            ],
            [1, ';']
          ],
          [
            [2, '+'],
            [
              [2, '+'],
              [1, 'height:'],
              [
                [2, '?:'],
                [
                  [2, '||'],
                  [
                    [7],
                    [3, 'showSortPop']
                  ],
                  [
                    [7],
                    [3, 'showChoosePop']
                  ]
                ],
                [1, '100vh'],
                [1, 'auto']
              ]
            ],
            [1, ';']
          ]
        ])
        Z([3, '__l'])
        Z([3, 'data-v-299e5889'])
        Z([3, '旅游出行'])
        Z([1, false])
        Z([
          [7],
          [3, 'titleColor']
        ])
        Z([3, 'transparentFixed'])
        Z([3, '75b9dd80-1'])
        Z([
          [7],
          [3, 'month']
        ])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'g0']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_37_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_37_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_37 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_37 = true;
    var x = ['./union/pages/coupon/coupon.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_37_1()
      var tY5 = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
      var o25 = _mz(z, 'uni-navbar', ['bind:__l', 2, 'class', 1, 'title', 2, 'titleCenter', 3, 'transparentFixedFontColor', 4, 'type', 5, 'vueId', 6], [], e, s, gg)
      _(tY5, o25)
      var eZ5 = _v()
      _(tY5, eZ5)
      if (_oz(z, 9, e, s, gg)) {
        eZ5.wxVkey = 1
      }
      var b15 = _v()
      _(tY5, b15)
      if (_oz(z, 10, e, s, gg)) {
        b15.wxVkey = 1
      }
      eZ5.wxXCkey = 1
      b15.wxXCkey = 1
      _(r, tY5)
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
        g = "$gwx4_XC_37";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_37();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/coupon/coupon.wxml'] = [$gwx4_XC_37, './union/pages/coupon/coupon.wxml'];
else __wxAppCode__['union/pages/coupon/coupon.wxml'] = $gwx4_XC_37('./union/pages/coupon/coupon.wxml');;
__wxRoute = "union/pages/coupon/coupon";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/coupon/coupon.js";
define("union/pages/coupon/coupon.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/coupon/coupon"], {
      "23d1": function(o, t, n) {
        n.r(t);
        var e = n("a169"),
          i = n("6bbe");
        for (var u in i)["default"].indexOf(u) < 0 && function(o) {
          n.d(t, o, (function() {
            return i[o]
          }))
        }(u);
        n("c12c");
        var a = n("828b"),
          r = Object(a.a)(i.default, e.b, e.c, !1, null, "299e5889", null, !1, e.a, void 0);
        t.default = r.exports
      },
      "5c22": function(o, t, n) {
        (function(o, t) {
          var e = n("47a9");
          n("5366"), e(n("3240"));
          var i = e(n("23d1"));
          o.__webpack_require_UNI_MP_PLUGIN__ = n, t(i.default)
        }).call(this, n("3223").default, n("df3c").createPage)
      },
      "6bbe": function(o, t, n) {
        n.r(t);
        var e = n("d86a"),
          i = n.n(e);
        for (var u in e)["default"].indexOf(u) < 0 && function(o) {
          n.d(t, o, (function() {
            return e[o]
          }))
        }(u);
        t.default = i.a
      },
      "916f": function(o, t, n) {},
      a169: function(o, t, n) {
        n.d(t, "b", (function() {
          return i
        })), n.d(t, "c", (function() {
          return u
        })), n.d(t, "a", (function() {
          return e
        }));
        var e = {
            uniNavbar: function() {
              return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
            }
          },
          i = function() {
            var o = this,
              t = (o.$createElement, o._self._c, o.__map(o.couponList, (function(t, n) {
                return {
                  $orig: o.__get_orig(t),
                  f0: 3 == t.type ? o._f("couponFilter")(t) : null,
                  f1: 3 != t.type ? o._f("couponFilter")(t) : null,
                  m0: o.getNum(t),
                  f2: 1 != t.receiveButton ? o._f("btnFilter")(t.receiveButton) : null
                }
              }))),
              n = o.couponList.length <= 0 && "nomore" == o.loadMore;
            o.$mp.data = Object.assign({}, {
              $root: {
                l0: t,
                g0: n
              }
            })
          },
          u = []
      },
      c12c: function(o, t, n) {
        var e = n("916f");
        n.n(e).a
      },
      d86a: function(o, t, n) {
        (function(o) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var e = n("a04a"),
            i = n("a2cf"),
            u = {
              data: function() {
                return {
                  menuButtonInfo: {},
                  scrollTop: 0,
                  scrollTopLimit: 0,
                  searchTop: 0,
                  titleColor: "#FFFFFF",
                  showSortPop: !1,
                  showChoosePop: !1,
                  couponList: [],
                  month: 0,
                  itemType: "",
                  tabList: [{
                    name: "全部",
                    itemType: ""
                  }, {
                    name: "门票",
                    itemType: 1
                  }, {
                    name: "线路",
                    itemType: 2
                  }],
                  cardId: "",
                  page: 1,
                  loadMore: "loading"
                }
              },
              filters: {
                couponFilter: function(o) {
                  return 1 == o.type ? "满".concat(o.threshold, "元") : 2 == o.type ? "无门槛" : 3 == o.type ? "抵扣".concat(o.deduction, "张") : void 0
                },
                btnFilter: function(o) {
                  return {
                    1: "立即领取",
                    2: "已抢光",
                    3: "去使用",
                    4: "已使用",
                    5: "已过期"
                  } [o]
                }
              },
              watch: {},
              computed: {
                userInfo: function() {
                  return this.$store.getters.userInfor
                }
              },
              onHide: function() {},
              onLoad: function(t) {
                this.menuButtonInfo = o.getMenuButtonBoundingClientRect(), this.scrollTopLimit = this.menuButtonInfo.height + 10, this.searchTop = this.menuButtonInfo.bottom + 10;
                var n = i().month();
                this.month = n + 1, this.getUnionEquityCardId()
              },
              onShow: function() {},
              onReachBottom: function() {
                "loadmore" === this.loadMore && this.getCouponList()
              },
              onPageScroll: function(o) {
                this.scrollTop = o.scrollTop;
                var t = o.scrollTop / this.scrollTopLimit;
                this.scrollTop <= 10 ? this.titleColor = "rgba(255,255,255,".concat(1 - t, ")") : this.titleColor = "rgba(0,0,0,".concat(t, ")")
              },
              onShareAppMessage: function() {
                return {
                  title: "陕西联合会员文旅消费福利等你来领",
                  imageUrl: "https://eshopfile.zhiyousx.com/2024061310513695733.png",
                  path: this.$util.setShareUrl("union/pages/coupon/coupon")
                }
              },
              methods: {
                changeType: function(o) {
                  this.itemType = o.itemType, this.current = 1, this.couponList = [], this.getCouponList()
                },
                getUnionEquityCardId: function() {
                  var o = this;
                  this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/userUnionEquityCard/getUnionEquityCardId").then((function(t) {
                    1 == t.code ? (o.cardId = t.data, o.getCouponList()) : o.$util.showToast(t.msg)
                  }))
                },
                getNum: function(o) {
                  return this.$util.add(Number(o.receivedNum), Number(o.baseReceivedNum))
                },
                getCouponList: function() {
                  var t = this,
                    n = {
                      current: this.page,
                      size: 10,
                      itemType: this.itemType,
                      unionEquityCardId: this.cardId
                    };
                  this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/unionCoupon/selectPage", n).then((function(n) {
                    if (o.stopPullDownRefresh(), 1 === n.code) {
                      var e = n.data.records;
                      n.data.total > 0 ? (1 === n.data.current ? t.couponList = e : t.couponList = t.couponList.concat(e), n.data.current < n.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.couponList = [], t.loadMore = "nomore")
                    }
                  })).catch((function(t) {
                    o.stopPullDownRefresh()
                  }))
                },
                receiveCoupon: function(o) {
                  var t = this;
                  (0, e.confirmBefore)() && (3 != o.receiveButton ? 1 == o.receiveButton && this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                    couponId: o.couponId
                  }).then((function(n) {
                    1 == n.code ? (t.$util.showToast("领取成功"), t.getCouponDetail(o.unionCouponId)) : (t.$util.showToast("已抢光"), t.getCouponDetail(o.unionCouponId))
                  })) : (0, e.jumpUseCoupon)(o))
                },
                getCouponDetail: function(o) {
                  var t = this;
                  this.$uniApi.dataRequestNoLoading("get", "product/app/v1/unionCoupon/selectAppVoById", {
                    unionCouponId: o
                  }).then((function(n) {
                    if (1 == n.code) {
                      var e = t.couponList.findIndex((function(t) {
                        return t.unionCouponId == o
                      }));
                      t.couponList.splice(e, 1, n.data), t.$util.showToast(n.msg)
                    }
                  }))
                }
              }
            };
          t.default = u
        }).call(this, n("df3c").default)
      }
    },
    [
      ["5c22", "common/runtime", "common/vendor", "union/common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'union/pages/coupon/coupon.js'
});
require("union/pages/coupon/coupon.js");
