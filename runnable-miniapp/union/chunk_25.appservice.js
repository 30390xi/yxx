$gwx4_XC_18 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_18 || [];

    function gz$gwx4_XC_18_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_18_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_18_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_18_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'replacement_box data-v-0f1a54f8'])
        Z([3, '__l'])
        Z([3, 'data-v-0f1a54f8'])
        Z([3, 'transparentFixed'])
        Z([3, '3e21584a-1'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'g1']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_18_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_18_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_18 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_18 = true;
    var x = ['./union/pages/aiReplacement/list.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_18_1()
      var eVU = _n('view')
      _rz(z, eVU, 'class', 0, e, s, gg)
      var oXU = _mz(z, 'uni-navbar', ['bind:__l', 1, 'class', 1, 'type', 2, 'vueId', 3], [], e, s, gg)
      _(eVU, oXU)
      var bWU = _v()
      _(eVU, bWU)
      if (_oz(z, 5, e, s, gg)) {
        bWU.wxVkey = 1
      }
      bWU.wxXCkey = 1
      _(r, eVU)
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
        g = "$gwx4_XC_18";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_18();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/aiReplacement/list.wxml'] = [$gwx4_XC_18, './union/pages/aiReplacement/list.wxml'];
else __wxAppCode__['union/pages/aiReplacement/list.wxml'] = $gwx4_XC_18('./union/pages/aiReplacement/list.wxml');;
__wxRoute = "union/pages/aiReplacement/list";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/aiReplacement/list.js";
define("union/pages/aiReplacement/list.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/aiReplacement/list"], {
      "15fa": function(t, e, n) {
        (function(t) {
          var a = n("47a9");
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var i = a(n("7eb4")),
            o = a(n("ee10")),
            s = {
              data: function() {
                return {
                  smallScreen: !1,
                  showLoading: !1,
                  showPlay: !1,
                  dataList: [],
                  option: {
                    videoUrl: "",
                    imageUrl: ""
                  },
                  time: null
                }
              },
              onLoad: function() {
                var e = t.getSystemInfoSync().screenHeight;
                console.log(e, "屏幕高度小于750"), e < 750 ? (console.log("屏幕高度小于750"), this.smallScreen = !0) : (console.log("屏幕高度大于等于750"), this.smallScreen = !1)
              },
              onShow: function() {
                this.$util.isLogin("/union/pages/aiReplacement/list") && this.getDataList()
              },
              onUnload: function() {
                this.time && (clearTimeout(this.time), this.time = null)
              },
              methods: {
                download: function() {
                  var e = this;
                  return (0, o.default)(i.default.mark((function n() {
                    var a, o;
                    return i.default.wrap((function(n) {
                      for (;;) switch (n.prev = n.next) {
                        case 0:
                          return n.next = 2, t.showLoading({
                            title: "下载中"
                          });
                        case 2:
                          return n.next = 4, t.downloadFile({
                            url: e.option.videoUrl
                          });
                        case 4:
                          return a = n.sent, o = a[1].tempFilePath, n.next = 8, t.saveVideoToPhotosAlbum({
                            filePath: o
                          });
                        case 8:
                          return n.sent, t.hideLoading(), n.next = 12, t.showToast({
                            title: "下载成功"
                          });
                        case 12:
                        case "end":
                          return n.stop()
                      }
                    }), n)
                  })))()
                },
                playVideo: function(t, e) {
                  this.showPlay = !0, this.option = {
                    videoUrl: t,
                    imageUrl: e
                  }
                },
                parentMethod: function(t) {
                  console.log(t), "videoDome" != t.target.id && "close" != t.target.id && (this.showPlay = !1), console.log("父标签的方法被调用")
                },
                stopPropagation: function(t) {
                  t.stopPropagation(), console.log("子标签的方法被调用")
                },
                getDataList: function() {
                  var e = this;
                  t.showLoading({
                    title: "加载中",
                    mask: !0
                  }), this.$uniApi.dataRequestNoLoading("post", "ai/vidu/ai/selectPage", {
                    current: 1,
                    size: 9999
                  }).then((function(n) {
                    1 === n.code && (console.log(n.data.records, "res.data.records"), e.dataList = n.data.records || [], setTimeout((function() {
                      t.hideLoading()
                    }), 1e3), e.dataList.filter((function(t) {
                      return !t.status
                    })).length > 0 && (e.time && (clearTimeout(e.time), e.time = null), e.time = setTimeout((function() {
                      e.getDataListCopy()
                    }), 1e4)))
                  }))
                },
                getDataListCopy: function() {
                  var t = this;
                  this.$uniApi.dataRequestNoLoading("post", "ai/vidu/ai/selectPage", {
                    current: 1,
                    size: 9999
                  }).then((function(e) {
                    1 === e.code && (console.log(e.data.records, "res.data.records"), t.dataList = e.data.records || [], t.dataList.filter((function(t) {
                      return !t.status
                    })).length > 0 && (t.time = setTimeout((function() {
                      t.getDataListCopy()
                    }), 1e4)))
                  }))
                },
                submit: function() {
                  t.navigateBack({
                    delta: 1
                  })
                }
              }
            };
          e.default = s
        }).call(this, n("df3c").default)
      },
      "2a0b": function(t, e, n) {
        var a = n("f16c");
        n.n(a).a
      },
      "6c64": function(t, e, n) {
        (function(t, e) {
          var a = n("47a9");
          n("5366"), a(n("3240"));
          var i = a(n("83ba"));
          t.__webpack_require_UNI_MP_PLUGIN__ = n, e(i.default)
        }).call(this, n("3223").default, n("df3c").createPage)
      },
      "83ba": function(t, e, n) {
        n.r(e);
        var a = n("e489"),
          i = n("b63f");
        for (var o in i)["default"].indexOf(o) < 0 && function(t) {
          n.d(e, t, (function() {
            return i[t]
          }))
        }(o);
        n("2a0b");
        var s = n("828b"),
          r = Object(s.a)(i.default, a.b, a.c, !1, null, "0f1a54f8", null, !1, a.a, void 0);
        e.default = r.exports
      },
      b63f: function(t, e, n) {
        n.r(e);
        var a = n("15fa"),
          i = n.n(a);
        for (var o in a)["default"].indexOf(o) < 0 && function(t) {
          n.d(e, t, (function() {
            return a[t]
          }))
        }(o);
        e.default = i.a
      },
      e489: function(t, e, n) {
        n.d(e, "b", (function() {
          return i
        })), n.d(e, "c", (function() {
          return o
        })), n.d(e, "a", (function() {
          return a
        }));
        var a = {
            uniNavbar: function() {
              return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
            }
          },
          i = function() {
            this.$createElement;
            var t = (this._self._c, this.dataList && this.dataList.length),
              e = this.dataList && this.dataList.length;
            this.$mp.data = Object.assign({}, {
              $root: {
                g0: t,
                g1: e
              }
            })
          },
          o = []
      },
      f16c: function(t, e, n) {}
    },
    [
      ["6c64", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'union/pages/aiReplacement/list.js'
});
require("union/pages/aiReplacement/list.js");
