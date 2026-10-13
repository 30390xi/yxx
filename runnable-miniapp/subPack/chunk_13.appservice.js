$gwx1_XC_5 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_5 || [];

    function gz$gwx1_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_5_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_5_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_5_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_5_1
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_5 = true;
    var x = ['./subPack/pages/appPay/appPayQr.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_5_1()
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
        g = "$gwx1_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_5();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/appPay/appPayQr.wxml'] = [$gwx1_XC_5, './subPack/pages/appPay/appPayQr.wxml'];
else __wxAppCode__['subPack/pages/appPay/appPayQr.wxml'] = $gwx1_XC_5('./subPack/pages/appPay/appPayQr.wxml');;
__wxRoute = "subPack/pages/appPay/appPayQr";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPack/pages/appPay/appPayQr.js";
define("subPack/pages/appPay/appPayQr.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPack/pages/appPay/appPayQr"], {
      "2d68": function(t, e, n) {},
      "2f39": function(t, e, n) {
        var i = n("2d68");
        n.n(i).a
      },
      "329b": function(t, e, n) {
        n.r(e);
        var i = n("feae"),
          a = n.n(i);
        for (var o in i)["default"].indexOf(o) < 0 && function(t) {
          n.d(e, t, (function() {
            return i[t]
          }))
        }(o);
        e.default = a.a
      },
      8185: function(t, e, n) {
        (function(t, e) {
          var i = n("47a9");
          n("5366"), i(n("3240"));
          var a = i(n("fdb4"));
          t.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default)
        }).call(this, n("3223").default, n("df3c").createPage)
      },
      ea9f: function(t, e, n) {
        n.d(e, "b", (function() {
          return i
        })), n.d(e, "c", (function() {
          return a
        })), n.d(e, "a", (function() {}));
        var i = function() {
            this.$createElement;
            this._self._c
          },
          a = []
      },
      fdb4: function(t, e, n) {
        n.r(e);
        var i = n("ea9f"),
          a = n("329b");
        for (var o in a)["default"].indexOf(o) < 0 && function(t) {
          n.d(e, t, (function() {
            return a[t]
          }))
        }(o);
        n("2f39");
        var r = n("828b"),
          s = Object(r.a)(a.default, i.b, i.c, !1, null, "b6dde270", null, !1, i.a, void 0);
        e.default = s.exports
      },
      feae: function(t, e, n) {
        (function(t, n) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var i = {
            data: function() {
              return {
                openId: "",
                payType: "",
                orderId: "",
                memberRemark: "",
                url: "",
                subData: {},
                payMsg: "支付中..."
              }
            },
            onLoad: function(t) {
              if (t.q) {
                if (t.q) {
                  var e = decodeURIComponent(t.q),
                    n = {};
                  if (-1 !== e.indexOf("?"))
                    for (var i = e.substr(e.indexOf("?") + 1).split("&"), a = 0; a < i.length; a++) n[i[a].split("=")[0]] = decodeURI(i[a].split("=")[1]);
                  if (this.orderId = n.orderId || "", this.payType = n.payType || "", !this.orderId) return void this.$util.showToast("未获取到订单信息");
                  this.getOpenId()
                }
              } else this.$util.showToast("未获取到订单信息")
            },
            onShow: function() {},
            onHide: function() {},
            onUnload: function() {},
            methods: {
              closePay: function() {
                "支付中..." != this.payMsg && t.exitMiniProgram()
              },
              getOpenId: function() {
                var t = this;
                n.login({
                  success: function(e) {
                    t.$uniApi.getRequestYesLoading("GET", "manager/app/v1/wxPopular/getSessionKeyPro/".concat(e.code), "请求中").then((function(e) {
                      1 === e.code ? (t.openId = e.data.openid, t.payForApp()) : (t.$util.showToast(e.msg), t.submiting = !1)
                    })).catch((function(e) {
                      t.submiting = !1, t.$util.showToast(e.msg)
                    }))
                  }
                })
              },
              payForApp: function() {
                1 == this.payType ? (this.url = "order/app/v1/order/waitPayToPay", this.subData = {
                  payChannel: "",
                  orderSource: 5,
                  orderId: this.orderId,
                  buyerMemo: this.memberRemark,
                  seriesNumber: this.openId
                }) : (this.url = "order/app/v1/cartInfo/ToPaySmall ", this.subData = {
                  payKey: this.orderId,
                  openId: this.openId
                }), this.goPay()
              },
              goPay: function() {
                var t = this;
                this.submiting || (n.showLoading({
                  title: "发起支付..."
                }), this.submiting = !0, this.$uniApi.dataRequestYesLoading("POST", this.url, this.subData, "支付中").then((function(e) {
                  return 18018 == e.code || 18019 == e.code || 18020 == e.code ? (t.submiting = !1, t.payMsg = "支付失败", void n.hideLoading()) : 1 !== e.code ? (n.hideLoading(), t.submiting = !1, t.payMsg = "支付失败", void t.$util.showToast(e.msg)) : void n.requestPayment({
                    timeStamp: e.data.timeStamp,
                    nonceStr: e.data.nonceStr,
                    package: "prepay_id=".concat(e.data.prepayid),
                    signType: e.data.signType,
                    paySign: e.data.pay_sign,
                    success: function(e) {
                      t.submiting = !1, t.payMsg = "支付成功"
                    },
                    fail: function(e) {
                      t.submiting = !1, t.payMsg = "支付失败"
                    }
                  })
                })))
              },
              launchAppError: function(t) {
                console.log(t.detail.errMsg), n.showModal({
                  title: "提示",
                  content: t.detail.errMsg
                })
              }
            }
          };
          e.default = i
        }).call(this, n("3223").default, n("df3c").default)
      }
    },
    [
      ["8185", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPack/pages/appPay/appPayQr.js'
});
require("subPack/pages/appPay/appPayQr.js");
