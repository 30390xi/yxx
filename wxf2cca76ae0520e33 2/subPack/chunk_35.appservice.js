$gwx1_XC_29 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_29 || [];

    function gz$gwx1_XC_29_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_29_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_29_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_29_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__l'])
        Z([3, 'ic data-v-261d47d5'])
        Z([3, 'eea5b976-1'])
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_29_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_29_1
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_29 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_29 = true;
    var x = ['./subPack/pages/live/liveDetail.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_29_1()
      var xAX = _mz(z, 'live-icon', ['bind:__l', 0, 'class', 1, 'vueId', 1], [], e, s, gg)
      _(r, xAX)
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
        g = "$gwx1_XC_29";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_29();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/live/liveDetail.wxml'] = [$gwx1_XC_29, './subPack/pages/live/liveDetail.wxml'];
else __wxAppCode__['subPack/pages/live/liveDetail.wxml'] = $gwx1_XC_29('./subPack/pages/live/liveDetail.wxml');;
__wxRoute = "subPack/pages/live/liveDetail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPack/pages/live/liveDetail.js";
define("subPack/pages/live/liveDetail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPack/pages/live/liveDetail"], {
      "054b": function(t, e, n) {
        n.r(e);
        var i = n("c10c"),
          a = n("5e68");
        for (var o in a)["default"].indexOf(o) < 0 && function(t) {
          n.d(e, t, (function() {
            return a[t]
          }))
        }(o);
        n("62dd");
        var c = n("828b"),
          r = Object(c.a)(a.default, i.b, i.c, !1, null, "261d47d5", null, !1, i.a, void 0);
        e.default = r.exports
      },
      "36f6": function(t, e, n) {
        (function(t, e) {
          var i = n("47a9");
          n("5366"), i(n("3240"));
          var a = i(n("054b"));
          t.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default)
        }).call(this, n("3223").default, n("df3c").createPage)
      },
      "39d9": function(t, e, n) {
        (function(t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var i = {
            name: "liveDetail",
            components: {
              liveIcon: function() {
                n.e("subPack/pages/live/components/liveIcon").then(function() {
                  return resolve(n("1197"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                topHeight: 0,
                listData: "",
                videoData: "",
                liveStreamId: 1,
                timer: null
              }
            },
            onLoad: function(t) {
              this.liveStreamId = t.id, this.getLiveDetail()
            },
            onShow: function() {},
            methods: {
              getDomInfo: function() {
                this.timer && clearTimeout(this.timer);
                var e = this;
                this.$nextTick((function() {
                  new Promise((function(e) {
                    var n = t.createSelectorQuery();
                    n.select("#liveTop").boundingClientRect(), n.exec((function(t) {
                      e(t)
                    }))
                  })).then((function(t) {
                    t[0].height || (e.timer = setTimeout((function() {
                      e.getDomInfo()
                    }), 100)), e.topHeight = t[0].height
                  }))
                }), 550)
              },
              getLiveDetail: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/liveStream/selectById?liveStreamId=" + this.liveStreamId).then((function(e) {
                  1 === e.code && (t.listData = e.data, t.videoData = {
                    mainImage: t.listData.mainImage,
                    liveUrl: t.listData.streamUrl
                  }, t.$nextTick((function() {
                    t.getDomInfo()
                  })))
                }))
              },
              palyError: function(t) {
                console.log("onPlayError, e=" + JSON.stringify(t))
              }
            }
          };
          e.default = i
        }).call(this, n("df3c").default)
      },
      "5e68": function(t, e, n) {
        n.r(e);
        var i = n("39d9"),
          a = n.n(i);
        for (var o in i)["default"].indexOf(o) < 0 && function(t) {
          n.d(e, t, (function() {
            return i[t]
          }))
        }(o);
        e.default = a.a
      },
      "62dd": function(t, e, n) {
        var i = n("6835");
        n.n(i).a
      },
      6835: function(t, e, n) {},
      c10c: function(t, e, n) {
        n.d(e, "b", (function() {
          return i
        })), n.d(e, "c", (function() {
          return a
        })), n.d(e, "a", (function() {}));
        var i = function() {
            this.$createElement;
            var t = (this._self._c, this._f("saleNumFormat")(this.listData.followers));
            this.$mp.data = Object.assign({}, {
              $root: {
                f0: t
              }
            })
          },
          a = []
      }
    },
    [
      ["36f6", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPack/pages/live/liveDetail.js'
});
require("subPack/pages/live/liveDetail.js");
