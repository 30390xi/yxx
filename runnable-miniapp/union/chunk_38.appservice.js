$gwx4_XC_32 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_32 || [];

    function gz$gwx4_XC_32_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_32_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_32_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_32_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'video-box-c data-v-2bbc111c'])
        Z([3, '__l'])
        Z([3, 'data-v-2bbc111c'])
        Z([3, 'transparentFixed'])
        Z([3, '48fe1fcf-1'])
        Z([3, 'video-box data-v-2bbc111c'])
        Z([
          [7],
          [3, 'posterUrlStatus']
        ])
        Z([
          [7],
          [3, 'videoUrl']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_32_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_32_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_32 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_32 = true;
    var x = ['./union/pages/aiVideo/downloadzt.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_32_1()
      var fS3 = _n('view')
      _rz(z, fS3, 'class', 0, e, s, gg)
      var cT3 = _mz(z, 'uni-navbar', ['bind:__l', 1, 'class', 1, 'type', 2, 'vueId', 3], [], e, s, gg)
      _(fS3, cT3)
      var hU3 = _n('view')
      _rz(z, hU3, 'class', 5, e, s, gg)
      var oV3 = _v()
      _(hU3, oV3)
      if (_oz(z, 6, e, s, gg)) {
        oV3.wxVkey = 1
      }
      var cW3 = _v()
      _(hU3, cW3)
      if (_oz(z, 7, e, s, gg)) {
        cW3.wxVkey = 1
      }
      oV3.wxXCkey = 1
      cW3.wxXCkey = 1
      _(fS3, hU3)
      _(r, fS3)
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
        g = "$gwx4_XC_32";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_32();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/aiVideo/downloadzt.wxml'] = [$gwx4_XC_32, './union/pages/aiVideo/downloadzt.wxml'];
else __wxAppCode__['union/pages/aiVideo/downloadzt.wxml'] = $gwx4_XC_32('./union/pages/aiVideo/downloadzt.wxml');;
__wxRoute = "union/pages/aiVideo/downloadzt";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/aiVideo/downloadzt.js";
define("union/pages/aiVideo/downloadzt.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/aiVideo/downloadzt"], {
      "43a5": function(t, e, i) {
        i.r(e);
        var n = i("a3e3"),
          o = i.n(n);
        for (var a in n)["default"].indexOf(a) < 0 && function(t) {
          i.d(e, t, (function() {
            return n[t]
          }))
        }(a);
        e.default = o.a
      },
      "4a7b": function(t, e, i) {
        i.r(e);
        var n = i("da03"),
          o = i("43a5");
        for (var a in o)["default"].indexOf(a) < 0 && function(t) {
          i.d(e, t, (function() {
            return o[t]
          }))
        }(a);
        i("d260");
        var d = i("828b"),
          s = Object(d.a)(o.default, n.b, n.c, !1, null, "2bbc111c", null, !1, n.a, void 0);
        e.default = s.exports
      },
      a3e3: function(t, e, i) {
        (function(t) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var n = i("0e74"),
            o = {
              data: function() {
                return {
                  payShow: !0,
                  videoUrl: "",
                  imageUrl: "",
                  videoId: "",
                  disabledSubmitBtn: !1,
                  infosObj: {
                    itemName: "长安十二时辰AI视频",
                    itemPrice: 9.9
                  },
                  payStatue: 0,
                  posterUrl: "",
                  moldId: "",
                  deviceId: "",
                  imageName: "",
                  sex: "",
                  posterUrlStatus: !0
                }
              },
              onLoad: function(e) {
                this.videoId = e.id ? e.id : "", this.moldId = e.moldId ? e.moldId : "", this.imageName = e.imageName ? e.imageName : "", this.deviceId = e.deviceId ? e.deviceId : "", this.getdelite(), t.showLoading({
                  title: "加载中"
                })
              },
              methods: {
                loadedmetadata: function() {
                  this.posterUrlStatus = !1, t.hideLoading()
                },
                getdelite: function() {
                  var e = this;
                  this.$uniApi.dataRequestNoLoading("GET", "volce/find", {
                    id: this.videoId,
                    imageName: this.imageName,
                    deviceId: this.deviceId,
                    moldId: this.moldId
                  }, 0, n.AIVIDEO_API_BASE_URL).then((function(i) {
                    1 === i.code ? (t.hideLoading(), e.videoUrl = i.data.video, e.posterUrl = i.data.imageUrl) : t.hideLoading()
                  })).catch((function() {
                    t.hideLoading()
                  }))
                },
                backPage: function() {
                  t.navigateBack()
                },
                downloadVideo: function() {
                  var e = this;
                  t.getSetting({
                    success: function(i) {
                      i.authSetting["scope.writePhotosAlbum"] ? e.startDownload() : t.authorize({
                        scope: "scope.writePhotosAlbum",
                        success: function() {
                          e.startDownload()
                        },
                        fail: function() {
                          t.showModal({
                            title: "提示",
                            content: "需要您授权保存到相册",
                            success: function(e) {
                              e.confirm && t.openSetting()
                            }
                          })
                        }
                      })
                    },
                    fail: function() {
                      t.showToast({
                        title: "获取权限失败",
                        icon: "none"
                      })
                    }
                  })
                },
                startDownload: function() {
                  t.showLoading({
                    title: "视频下载中..."
                  }), t.downloadFile({
                    url: this.videoUrl,
                    success: function(e) {
                      console.log(e, "res"), 200 === e.statusCode ? t.saveVideoToPhotosAlbum({
                        filePath: e.tempFilePath,
                        success: function() {
                          t.hideLoading(), t.showToast({
                            title: "视频保存成功",
                            icon: "success"
                          })
                        },
                        fail: function(e) {
                          t.hideLoading(), t.showToast({
                            title: "视频保存失败",
                            icon: "none"
                          }), console.log("保存失败:", e)
                        }
                      }) : (t.hideLoading(), t.showToast({
                        title: "视频下载失败",
                        icon: "none"
                      }), console.log("下载失败，状态码:", e.statusCode))
                    },
                    fail: function(e) {
                      t.hideLoading(), t.showToast({
                        title: "视频下载失败",
                        icon: "none"
                      }), console.log("下载失败:", e)
                    }
                  })
                },
                goPay: function() {
                  if (!this.disabledSubmitBtn) {
                    var e = {
                      itemAmount: this.infosObj.itemPrice,
                      itemNum: 1,
                      orderAmount: this.infosObj.itemPrice,
                      payChannel: "",
                      itemId: this.videoId,
                      itemName: this.infosObj.itemName,
                      seriesNumber: t.getStorageSync("userInfor").openId || t.getStorageSync("wxopenid")
                    };
                    this.$eventAnalyse.analyse({
                      eventTag: "aiVideo_pay_click",
                      eventName: "去支付",
                      eventParams: e
                    }), this.createOrder(e)
                  }
                },
                createOrder: function(e) {
                  var i = this;
                  this.disabledSubmitBtn || (this.disabledSubmitBtn = !0, this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/vudio/order/createOrder", e, "预订中...").then((function(e) {
                    1 == e.code ? i.$uniApi.dataRequestYesLoading("GET", "order/app/v1/vudio/order/topay", {
                      orderId: e.data
                    }, "支付中").then((function(e) {
                      1 == e.code ? t.requestPayment({
                        timeStamp: e.data.timeStamp,
                        nonceStr: e.data.nonceStr,
                        package: "prepay_id=".concat(e.data.prepayid),
                        signType: e.data.signType,
                        paySign: e.data.pay_sign,
                        orderInfo: e.data.tradeNo,
                        success: function(t) {
                          i.$util.showToast("支付成功"), i.getdelite()
                        },
                        fail: function(t) {
                          i.$util.showToast("支付已取消"), i.disabledSubmitBtn = !1
                        }
                      }) : (i.$util.showToast(e.msg), i.disabledSubmitBtn = !1)
                    })).catch((function(t) {
                      i.$util.showToast(t.msg)
                    })) : (i.disabledSubmitBtn = !1, i.$util.showToast(e.msg))
                  })).catch((function(t) {
                    i.disabledSubmitBtn = !1, i.$util.showToast(t.msg)
                  })))
                }
              }
            };
          e.default = o
        }).call(this, i("df3c").default)
      },
      cada: function(t, e, i) {},
      d260: function(t, e, i) {
        var n = i("cada");
        i.n(n).a
      },
      d9a9: function(t, e, i) {
        (function(t, e) {
          var n = i("47a9");
          i("5366"), n(i("3240"));
          var o = n(i("4a7b"));
          t.__webpack_require_UNI_MP_PLUGIN__ = i, e(o.default)
        }).call(this, i("3223").default, i("df3c").createPage)
      },
      da03: function(t, e, i) {
        i.d(e, "b", (function() {
          return o
        })), i.d(e, "c", (function() {
          return a
        })), i.d(e, "a", (function() {
          return n
        }));
        var n = {
            uniNavbar: function() {
              return i.e("components/uni-navbar/uni-navbar").then(i.bind(null, "101a"))
            }
          },
          o = function() {
            this.$createElement;
            this._self._c
          },
          a = []
      }
    },
    [
      ["d9a9", "common/runtime", "common/vendor", "union/common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'union/pages/aiVideo/downloadzt.js'
});
require("union/pages/aiVideo/downloadzt.js");
