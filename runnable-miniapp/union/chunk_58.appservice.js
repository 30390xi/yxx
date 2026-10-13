$gwx4_XC_54 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_54 || [];

    function gz$gwx4_XC_54_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_54_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_54_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_54_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'container data-v-3c7fad96'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, 'padding-top:'],
            [
              [7],
              [3, 'navBarHeight']
            ]
          ],
          [1, ';']
        ])
        Z([3, '__l'])
        Z([3, 'data-v-3c7fad96'])
        Z([3, 'vlog'])
        Z([3, 'transparentFixed'])
        Z([3, '3f249536-1'])
        Z([
          [2, '!'],
          [
            [7],
            [3, 'isHasError']
          ]
        ])
        Z([
          [7],
          [3, 'isHasError']
        ])
        Z(z[7])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_54_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_54_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_54 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_54 = true;
    var x = ['./union/pages/vlog/notice.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_54_1()
      var h1AB = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg)
      var l5AB = _mz(z, 'uni-navbar', ['bind:__l', 2, 'class', 1, 'title', 2, 'type', 3, 'vueId', 4], [], e, s, gg)
      _(h1AB, l5AB)
      var o2AB = _v()
      _(h1AB, o2AB)
      if (_oz(z, 7, e, s, gg)) {
        o2AB.wxVkey = 1
      }
      var c3AB = _v()
      _(h1AB, c3AB)
      if (_oz(z, 8, e, s, gg)) {
        c3AB.wxVkey = 1
      }
      var o4AB = _v()
      _(h1AB, o4AB)
      if (_oz(z, 9, e, s, gg)) {
        o4AB.wxVkey = 1
      }
      o2AB.wxXCkey = 1
      c3AB.wxXCkey = 1
      o4AB.wxXCkey = 1
      _(r, h1AB)
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
        g = "$gwx4_XC_54";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_54();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/vlog/notice.wxml'] = [$gwx4_XC_54, './union/pages/vlog/notice.wxml'];
else __wxAppCode__['union/pages/vlog/notice.wxml'] = $gwx4_XC_54('./union/pages/vlog/notice.wxml');;
__wxRoute = "union/pages/vlog/notice";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/vlog/notice.js";
define("union/pages/vlog/notice.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/vlog/notice"], {
      "081f": function(t, e, i) {
        i.r(e);
        var n = i("cbdb"),
          o = i.n(n);
        for (var s in n)["default"].indexOf(s) < 0 && function(t) {
          i.d(e, t, (function() {
            return n[t]
          }))
        }(s);
        e.default = o.a
      },
      "0968": function(t, e, i) {
        var n = i("4ee8");
        i.n(n).a
      },
      "40e3": function(t, e, i) {
        i.d(e, "b", (function() {
          return o
        })), i.d(e, "c", (function() {
          return s
        })), i.d(e, "a", (function() {
          return n
        }));
        var n = {
            uniNavbar: function() {
              return i.e("components/uni-navbar/uni-navbar").then(i.bind(null, "101a"))
            }
          },
          o = function() {
            var t = this,
              e = (t.$createElement, t._self._c, t.isHasError ? null : t.$t("sub.tips.1")),
              i = t.isHasError ? null : t.$t("sub.tips.3"),
              n = t.isHasError ? null : t.$t("sub.tips.23"),
              o = t.isHasError ? t.$t("sub.tips.34") : null,
              s = t.isHasError ? t.$t("sub.tips.35") : null,
              a = t.isHasError ? null : t.$t("sub.tips.2");
            t.$mp.data = Object.assign({}, {
              $root: {
                m0: e,
                m1: i,
                m2: n,
                m3: o,
                m4: s,
                m5: a
              }
            })
          },
          s = []
      },
      "4ee8": function(t, e, i) {},
      aeba: function(t, e, i) {
        i.r(e);
        var n = i("40e3"),
          o = i("081f");
        for (var s in o)["default"].indexOf(s) < 0 && function(t) {
          i.d(e, t, (function() {
            return o[t]
          }))
        }(s);
        i("0968");
        var a = i("828b"),
          r = Object(a.a)(o.default, n.b, n.c, !1, null, "3c7fad96", null, !1, n.a, void 0);
        e.default = r.exports
      },
      cbdb: function(t, e, i) {
        (function(t) {
          var n = i("47a9");
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var o = n(i("7eb4")),
            s = n(i("3b2d")),
            a = n(i("ee10")),
            r = n(i("a9e0")),
            u = n(i("a39d")),
            c = {
              mixins: [r.default],
              data: function() {
                return {
                  imageName: "",
                  length: 0,
                  apiTimer: null,
                  loadSize: 0,
                  moldId: "",
                  pictureList: [],
                  resultList: [],
                  showLogin: !1,
                  currentType: "",
                  currentIndex: 1,
                  createTime: "",
                  humanCount: 0,
                  humanImg: "",
                  videoId: "",
                  generVideoId: "",
                  minutes: 0,
                  isHasError: !1,
                  orderNo: "",
                  images: [],
                  orderId: "",
                  time: 0,
                  navBarHeight: 0,
                  nickName: ""
                }
              },
              onLoad: function(e) {
                this.navBarHeight = t.getSystemInfoSync().statusBarHeight + 44 + "px", console.log("navBarHeight", this.navBarHeight), u.default.initLang(), this.orderId = e.orderId, this.images = JSON.parse(e.images), console.log("this.images", this.images), this.nickName = e.nickName, this.generVideo()
              },
              onUnload: function() {
                this.apiTimer && clearTimeout(this.apiTimer)
              },
              methods: {
                getOpenid: function() {
                  return new Promise((function(e, i) {
                    t.login({
                      success: function(n) {
                        t.request({
                          url: getApp().globalData.requestUrl + "vxapp/getSessionKeyPro/".concat(n.code),
                          method: "GET",
                          success: function(t) {
                            200 === t.data.code ? e(t.data.data) : i(t)
                          },
                          fail: function(t) {
                            i(t)
                          }
                        })
                      }
                    })
                  }))
                },
                formatTime: function() {
                  var t = new Date,
                    e = function(t) {
                      return String(t).padStart(2, "0")
                    },
                    i = t.getFullYear(),
                    n = e(t.getMonth() + 1),
                    o = e(t.getDate()),
                    s = e(t.getHours()),
                    a = e(t.getMinutes()),
                    r = e(t.getSeconds());
                  return "".concat(i, "-").concat(n, "-").concat(o, " ").concat(s, ":").concat(a, ":").concat(r)
                },
                fn: function() {
                  var e = this;
                  return (0, a.default)(o.default.mark((function i() {
                    var n, s;
                    return o.default.wrap((function(i) {
                      for (;;) switch (i.prev = i.next) {
                        case 0:
                          return i.prev = 0, i.next = 3, e.$uniApi.dataRequestNoLoading("GET", "ai/wall/vlog/queryStatus", {
                            id: e.generVideoId
                          });
                        case 3:
                          1 == (n = i.sent).code ? (console.log("res--", n), e.time = null === (s = n.data) || void 0 === s ? void 0 : s.waitTime, 2 == n.data.status ? t.redirectTo({
                            url: "/union/pages/vlog/result?videoUrl=".concat(n.data.videoUrl, "&posterUrl=").concat(n.data.homeImage, "&shareId=").concat(e.generVideoId)
                          }) : 3 != n.data.status ? e.apiTimer = setTimeout(e.fn, 3e4) : 3 == n.data.status && (e.$util.showToast("视频合成失败！"), e.isHasError = !0)) : (e.$util.showToast("视频合成失败！"), e.isHasError = !0), i.next = 12;
                          break;
                        case 7:
                          i.prev = 7, i.t0 = i.catch(0), e.apiTimer && clearTimeout(e.apiTimer), e.isHasError = !0, e.$util.showToast("视频合成失败！");
                        case 12:
                        case "end":
                          return i.stop()
                      }
                    }), i, null, [
                      [0, 7]
                    ])
                  })))()
                },
                onLoginReturn: function(t) {
                  this.showLogin = !1, t ? (this.loadSize = 0, this.resultList = [], this.apiTimer && clearTimeout(this.apiTimer), this.apiTimer = setTimeout(this.fn, 1e3)) : (this.$util.showToast("登录失败"), this.navigateBack())
                },
                handleNotice: function() {
                  var e = this;
                  t.getSetting({
                    withSubscriptions: !0,
                    success: function(i) {
                      return console.log("获取设置结果:", i), i.subscriptionsSetting.mainSwitch ? i.subscriptionsSetting.itemSettings && "reject" === i.subscriptionsSetting.itemSettings.DPfKt2RbXYclddvGNmQI10q41riJ1hJd21TiYztdQb4 ? (console.log("用户已拒绝该模板消息"), void t.showModal({
                        title: "提示",
                        content: "您已拒绝接收该类型消息，需要重新授权才能接收视频生成通知",
                        success: function(i) {
                          i.confirm && t.openSetting({
                            success: function(t) {
                              console.log("重新授权设置结果:", t), t.authSetting && t.authSetting["scope.subscribeMessage"] && e.requestSubscribeMessage()
                            }
                          })
                        }
                      })) : void e.requestSubscribeMessage() : (console.log("订阅消息总开关关闭，引导用户开启"), void t.showModal({
                        title: "提示",
                        content: "需要开启订阅消息权限才能接收视频生成通知，是否前往设置？",
                        success: function(i) {
                          i.confirm && t.openSetting({
                            success: function(t) {
                              console.log("打开设置页结果:", t), t.authSetting && t.authSetting["scope.subscribeMessage"] && e.requestSubscribeMessage()
                            }
                          })
                        }
                      }))
                    },
                    fail: function(t) {
                      console.error("获取设置失败:", t), e.$util.showToast("获取权限设置失败")
                    }
                  })
                },
                requestSubscribeMessage: function() {
                  var e = this;
                  t.requestSubscribeMessage({
                    tmplIds: ["DPfKt2RbXYclddvGNmQI10q41riJ1hJd21TiYztdQb4"],
                    success: function(i) {
                      "accept" === i.DPfKt2RbXYclddvGNmQI10q41riJ1hJd21TiYztdQb4 ? (e.$util.showToast(e.$t("sub.tips.13")), t.navigateBack({
                        delta: 1
                      })) : "reject" === i.DPfKt2RbXYclddvGNmQI10q41riJ1hJd21TiYztdQb4 ? e.$util.showToast(e.$t("sub.tips.14")) : "ban" === i.DPfKt2RbXYclddvGNmQI10q41riJ1hJd21TiYztdQb4 && e.$util.showToast("消息订阅功能被禁用，请检查微信设置")
                    },
                    fail: function(i) {
                      console.log("订阅消息请求失败:", i), 20004 === i.errCode ? t.showModal({
                        title: "提示",
                        content: "订阅消息功能被关闭，请在微信设置中开启订阅消息权限",
                        showCancel: !1,
                        success: function() {
                          t.openSetting({
                            success: function(t) {
                              console.log("打开设置页结果:", t)
                            }
                          })
                        }
                      }) : i.errMsg && i.errMsg.includes("cancel") ? e.$util.showToast("您取消了订阅授权") : e.$util.showToast("订阅请求失败，请重试")
                    }
                  })
                },
                generVideo: function() {
                  var e = this;
                  console.log("this.images", this.images), console.log((0, s.default)(this.images)), this.$uniApi.dataRequestNoLoading("POST", "ai/wall/vlog/make", {
                    openId: t.getStorageSync("wxopenid"),
                    urls: this.images,
                    moldId: 1,
                    orderId: this.orderId || "",
                    userName: this.nickName || ""
                  }).then((function(t) {
                    var i, n;
                    1 == t.code ? (e.generVideoId = (null === (i = t.data) || void 0 === i ? void 0 : i.id) || "", e.time = (null === (n = t.data) || void 0 === n ? void 0 : n.time) || 0, e.apiTimer = setTimeout(e.fn, 1e3)) : (e.isHasError = !0, e.$util.showToast("视频合成失败！"))
                  })).catch((function(t) {
                    e.isHasError = !0, e.$util.showToast("视频合成失败！")
                  }))
                },
                handleBack: function() {
                  t.navigateBack({
                    delta: 1
                  })
                }
              }
            };
          e.default = c
        }).call(this, i("df3c").default)
      },
      f4b6: function(t, e, i) {
        (function(t, e) {
          var n = i("47a9");
          i("5366"), n(i("3240"));
          var o = n(i("aeba"));
          t.__webpack_require_UNI_MP_PLUGIN__ = i, e(o.default)
        }).call(this, i("3223").default, i("df3c").createPage)
      }
    },
    [
      ["f4b6", "common/runtime", "common/vendor", "union/common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'union/pages/vlog/notice.js'
});
require("union/pages/vlog/notice.js");
