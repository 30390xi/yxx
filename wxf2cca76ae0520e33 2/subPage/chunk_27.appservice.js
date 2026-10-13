$gwx2_XC_20 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_20 || [];

    function gz$gwx2_XC_20_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_20_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_20_1
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_20_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([
          [7],
          [3, 'spotDetail']
        ])
        Z([3, 'page-box data-v-3e5bb606'])
        Z([
          [6],
          [
            [7],
            [3, 'imgList']
          ],
          [1, 0]
        ])
        Z([3, 'top-box data-v-3e5bb606'])
        Z([1, false])
        Z([3, '__l'])
        Z([3, '0'])
        Z([3, 'data-v-3e5bb606'])
        Z([3, '424'])
        Z([3, 'bottomRight'])
        Z([3, '5000'])
        Z([
          [7],
          [3, 'imgList']
        ])
        Z([3, 'imgUrl'])
        Z([3, '74378b80-1'])
        Z([
          [6],
          [
            [7],
            [3, 'spotDetail']
          ],
          [3, 'distance']
        ])
        Z([
          [2, '=='],
          [
            [7],
            [3, 'langType']
          ],
          [1, '中文']
        ])
        Z(z[14])
        Z(z[15])
        Z([
          [6],
          [
            [7],
            [3, 'langData']
          ],
          [3, 'voiceUrl']
        ])
        Z(z[5])
        Z([3, 'data-v-3e5bb606 vue-ref'])
        Z([3, 'article'])
        Z([
          [6],
          [
            [7],
            [3, 'langData']
          ],
          [3, 'introduction']
        ])
        Z([1, true])
        Z([3, 'text-align:justify;'])
        Z([
          [7],
          [3, 'parseStyle']
        ])
        Z([3, '74378b80-2'])
        Z([
          [4],
          [
            [5],
            [1, 'default']
          ]
        ])
        Z([
          [7],
          [3, 'showGuideBut']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_20_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_20_1
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_20 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_20 = true;
    var x = ['./subPage/pages/mapSpotDetail/mapSpotDetail.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx2_XC_20_1()
      var oVO = _v()
      _(r, oVO)
      if (_oz(z, 0, e, s, gg)) {
        oVO.wxVkey = 1
        var cWO = _n('view')
        _rz(z, cWO, 'class', 1, e, s, gg)
        var oXO = _v()
        _(cWO, oXO)
        if (_oz(z, 2, e, s, gg)) {
          oXO.wxVkey = 1
          var t1O = _n('view')
          _rz(z, t1O, 'class', 3, e, s, gg)
          var b3O = _mz(z, 'u-swiper', ['autoplay', 4, 'bind:__l', 1, 'borderRadius', 2, 'class', 3, 'height', 4, 'indicatorPos', 5, 'interval', 6, 'list', 7, 'name', 8, 'vueId', 9], [], e, s, gg)
          _(t1O, b3O)
          var e2O = _v()
          _(t1O, e2O)
          if (_oz(z, 14, e, s, gg)) {
            e2O.wxVkey = 1
            var o4O = _v()
            _(e2O, o4O)
            if (_oz(z, 15, e, s, gg)) {
              o4O.wxVkey = 1
            }
            o4O.wxXCkey = 1
          }
          e2O.wxXCkey = 1
          _(oXO, t1O)
        } else {
          oXO.wxVkey = 2
          var x5O = _v()
          _(oXO, x5O)
          if (_oz(z, 16, e, s, gg)) {
            x5O.wxVkey = 1
            var o6O = _v()
            _(x5O, o6O)
            if (_oz(z, 17, e, s, gg)) {
              o6O.wxVkey = 1
            }
            o6O.wxXCkey = 1
          }
          x5O.wxXCkey = 1
        }
        var lYO = _v()
        _(cWO, lYO)
        if (_oz(z, 18, e, s, gg)) {
          lYO.wxVkey = 1
        }
        var f7O = _mz(z, 'u-parse', ['bind:__l', 19, 'class', 1, 'data-ref', 2, 'html', 3, 'lazyLoad', 4, 'style', 5, 'tagStyle', 6, 'vueId', 7, 'vueSlots', 8], [], e, s, gg)
        _(cWO, f7O)
        var aZO = _v()
        _(cWO, aZO)
        if (_oz(z, 28, e, s, gg)) {
          aZO.wxVkey = 1
        }
        oXO.wxXCkey = 1
        oXO.wxXCkey = 3
        lYO.wxXCkey = 1
        aZO.wxXCkey = 1
        _(oVO, cWO)
      }
      oVO.wxXCkey = 1
      oVO.wxXCkey = 3
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
        g = "$gwx2_XC_20";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_20();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/pages/mapSpotDetail/mapSpotDetail.wxml'] = [$gwx2_XC_20, './subPage/pages/mapSpotDetail/mapSpotDetail.wxml'];
else __wxAppCode__['subPage/pages/mapSpotDetail/mapSpotDetail.wxml'] = $gwx2_XC_20('./subPage/pages/mapSpotDetail/mapSpotDetail.wxml');;
__wxRoute = "subPage/pages/mapSpotDetail/mapSpotDetail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPage/pages/mapSpotDetail/mapSpotDetail.js";
define("subPage/pages/mapSpotDetail/mapSpotDetail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPage/pages/mapSpotDetail/mapSpotDetail"], {
      "03d0": function(t, e, a) {
        var i = a("944f");
        a.n(i).a
      },
      "12f5": function(t, e, a) {
        a.r(e);
        var i = a("4922"),
          n = a.n(i);
        for (var o in i)["default"].indexOf(o) < 0 && function(t) {
          a.d(e, t, (function() {
            return i[t]
          }))
        }(o);
        e.default = n.a
      },
      4922: function(t, e, a) {
        (function(t, a) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var i = {
            data: function() {
              return {
                audio: t.createInnerAudioContext(),
                current: 0,
                duration: 0,
                paused: !0,
                loading: !1,
                seek: !1,
                src: "",
                id: 0,
                langType: "中文",
                spotDetail: "",
                langData: {},
                showGuideBut: !1,
                parseStyle: {
                  p: "word-break: break-all;"
                },
                imgList: [],
                autoplay: !1
              }
            },
            onLoad: function(t) {
              t.id && (this.id = t.id), t.langType && (this.langType = t.langType), 1 == t.source && (this.showGuideBut = !0), t.autoplay && (this.autoplay = !0), "中文" == this.langType ? a.setNavigationBarTitle({
                title: "详情"
              }) : "English" == this.langType && a.setNavigationBarTitle({
                title: "Details"
              })
            },
            onShow: function() {
              this.getLocation()
            },
            onShareAppMessage: function() {
              var t = "/subPage/pages/mapSpotDetail/mapSpotDetail?id=" + this.id + "&langType=" + this.langType;
              return {
                title: this.langData.name,
                imageUrl: this.imgList[0],
                path: this.$util.setShareUrl(t)
              }
            },
            onShareTimeline: function() {
              var t = "id=" + this.id + "&langType=" + this.langType;
              return {
                title: this.langData.name,
                imageUrl: this.imgList[0],
                query: this.$util.setShareTimeline(t)
              }
            },
            onHide: function() {
              this.audio && this.audio.pause()
            },
            onUnload: function() {
              this.audio && this.audio.destroy()
            },
            methods: {
              getLocation: function() {
                var e = this;
                t.getLocation({
                  type: "gcj02",
                  success: function(t) {
                    e.getDetail(t.longitude, t.latitude)
                  },
                  fail: function(t) {
                    e.getDetail("", "")
                  }
                })
              },
              getDetail: function(t, e) {
                var a = this,
                  i = {
                    id: this.id,
                    latitude: e,
                    longitude: t
                  };
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getSpotInfoById", i).then((function(t) {
                  if (1 === t.code) {
                    if (console.log(t.data), a.spotDetail = t.data, t.data.picUrl) {
                      var e = t.data.picUrl.split(","),
                        i = [];
                      e.forEach((function(t) {
                        i.push({
                          imgUrl: t
                        })
                      })), a.imgList = i
                    }
                    "中文" == a.langType ? a.langData = t.data.chinese : "English" == a.langType && (a.langData = t.data.english), a.langData.voiceUrl && a.initAudio()
                  }
                }))
              },
              initAudio: function() {
                var t = this;
                this.src = this.langData.voiceUrl, this.audio.src = this.src, this.autoplay && this.play(), this.audio.onTimeUpdate((function() {
                  t.seek || (t.current = t.audio.currentTime)
                })), this.audio.onCanplay((function() {
                  var e = setInterval((function() {
                    0 !== t.audio.duration && (clearInterval(e), t.duration = t.audio.duration)
                  }), 500)
                })), this.audio.onPlay((function() {
                  t.paused = !1, t.loading = !1
                })), this.audio.onPause((function() {
                  t.paused = !0
                })), this.audio.onEnded((function() {
                  t.continue ? t.next() : (t.paused = !0, t.current = 0)
                })), this.audio.onSeeked((function() {
                  t.seek = !1
                }))
              },
              format: function(t) {
                return "0".repeat(2 - String(Math.floor(t / 60)).length) + Math.floor(t / 60) + ":" + "0".repeat(2 - String(Math.floor(t % 60)).length) + Math.floor(t % 60)
              },
              play: function() {
                this.audio.play(), this.loading = !0
              },
              jumpLocation: function() {
                a.openLocation({
                  latitude: Number(this.spotDetail.latitude),
                  longitude: Number(this.spotDetail.longitude),
                  name: this.langData.name
                })
              },
              toGuide: function() {
                a.navigateTo({
                  url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent("https://eshop.zhiyousx.com/dsmall-admin-ui/h5/templeHeaven.html?tabId=" + this.spotDetail.parentId + "&markerId=" + this.spotDetail.id + "&langType=" + this.langType)
                })
              }
            }
          };
          e.default = i
        }).call(this, a("df3c").default, a("3223").default)
      },
      "944f": function(t, e, a) {},
      da9f: function(t, e, a) {
        a.r(e);
        var i = a("ed46"),
          n = a("12f5");
        for (var o in n)["default"].indexOf(o) < 0 && function(t) {
          a.d(e, t, (function() {
            return n[t]
          }))
        }(o);
        a("03d0");
        var u = a("828b"),
          l = Object(u.a)(n.default, i.b, i.c, !1, null, "3e5bb606", null, !1, i.a, void 0);
        e.default = l.exports
      },
      e97c: function(t, e, a) {
        (function(t, e) {
          var i = a("47a9");
          a("5366"), i(a("3240"));
          var n = i(a("da9f"));
          t.__webpack_require_UNI_MP_PLUGIN__ = a, e(n.default)
        }).call(this, a("3223").default, a("df3c").createPage)
      },
      ed46: function(t, e, a) {
        a.d(e, "b", (function() {
          return n
        })), a.d(e, "c", (function() {
          return o
        })), a.d(e, "a", (function() {
          return i
        }));
        var i = {
            uSwiper: function() {
              return a.e("uview-ui/components/u-swiper/u-swiper").then(a.bind(null, "9840"))
            },
            uParse: function() {
              return Promise.all([a.e("common/vendor"), a.e("uview-ui/components/u-parse/u-parse")]).then(a.bind(null, "7217"))
            }
          },
          n = function() {
            var t = this,
              e = (t.$createElement, t._self._c, t.spotDetail && t.langData.voiceUrl ? t.format(t.current) : null),
              i = t.spotDetail && t.langData.voiceUrl ? t.format(t.duration) : null,
              n = t.spotDetail ? a("0dce") : null,
              o = t.spotDetail ? a("8c77") : null;
            t._isMounted || (t.e0 = function(e) {
              t.seek = !0, t.current = e.detail.value
            }, t.e1 = function(e) {
              return t.audio.seek(e.detail.value)
            }, t.e2 = function(e) {
              return t.audio.pause()
            }), t.$mp.data = Object.assign({}, {
              $root: {
                m0: e,
                m1: i,
                m2: n,
                m3: o
              }
            })
          },
          o = []
      }
    },
    [
      ["e97c", "common/runtime", "common/vendor", "subPage/common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPage/pages/mapSpotDetail/mapSpotDetail.js'
});
require("subPage/pages/mapSpotDetail/mapSpotDetail.js");
