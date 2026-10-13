$gwx1_XC_4 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_4 || [];

    function gz$gwx1_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_4_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_4_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_4_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_4_1
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_4 = true;
    var x = ['./subPack/pages/appPay/appPay.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_4_1()
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
        g = "$gwx1_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/appPay/appPay.wxml'] = [$gwx1_XC_4, './subPack/pages/appPay/appPay.wxml'];
else __wxAppCode__['subPack/pages/appPay/appPay.wxml'] = $gwx1_XC_4('./subPack/pages/appPay/appPay.wxml');;
__wxRoute = "subPack/pages/appPay/appPay";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPack/pages/appPay/appPay.js";
define("subPack/pages/appPay/appPay.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPack/pages/appPay/appPay"], {
      "426f": function(t, e, n) {
        var a = n("bc65");
        n.n(a).a
      },
      8684: function(t, e, n) {
        n.r(e);
        var a = n("cb1f"),
          i = n.n(a);
        for (var o in a)["default"].indexOf(o) < 0 && function(t) {
          n.d(e, t, (function() {
            return a[t]
          }))
        }(o);
        e.default = i.a
      },
      a442: function(t, e, n) {
        n.r(e);
        var a = n("fb19"),
          i = n("8684");
        for (var o in i)["default"].indexOf(o) < 0 && function(t) {
          n.d(e, t, (function() {
            return i[t]
          }))
        }(o);
        n("426f");
        var r = n("828b"),
          s = Object(r.a)(i.default, a.b, a.c, !1, null, "1bd3db7c", null, !1, a.a, void 0);
        e.default = s.exports
      },
      bc65: function(t, e, n) {},
      cb1f: function(t, e, n) {
        (function(t, n) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var a = {
            data: function() {
              return {
                openId: "",
                payType: "",
                orderId: "",
                memberRemark: "",
                url: "",
                subData: {},
                payMsg: "支付中...",
                channel: ""
              }
            },
            onLoad: function(t) {
              this.channel = t.channel || "", this.orderId = t.orderId || "", this.payType = t.payType || "", this.orderId ? this.getOpenId() : this.$util.showToast("未获取到订单信息")
            },
            onShow: function() {},
            onHide: function() {},
            onUnload: function() {},
            methods: {
              getOpenId: function() {
                var e = this;
                t.login({
                  success: function(t) {
                    e.$uniApi.getRequestYesLoading("GET", "manager/app/v1/wxPopular/getSessionKeyPro/".concat(t.code), "请求中").then((function(t) {
                      1 === t.code ? (e.openId = t.data.openid, e.payForApp()) : (e.$util.showToast(t.msg), e.submiting = !1)
                    })).catch((function(t) {
                      e.submiting = !1, e.$util.showToast(t.msg)
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
                }) : 2 == this.payType ? (this.url = "order/app/v1/cartInfo/ToPaySmall ", this.subData = {
                  payKey: this.orderId,
                  openId: this.openId
                }) : 3 == this.payType && (this.url = "order/app/v1/order/groupTicketWaitPayToPay", this.subData = {
                  payChannel: "",
                  orderSource: 5,
                  groupOrderId: this.orderId,
                  buyerMemo: this.memberRemark,
                  seriesNumber: this.openId
                }), this.goPay()
              },
              goPay: function() {
                var e = this;
                this.submiting || (t.showLoading({
                  title: "发起支付..."
                }), this.submiting = !0, this.$uniApi.dataRequestYesLoading("POST", this.url, this.subData, "支付中").then((function(n) {
                  return 18018 == n.code || 18019 == n.code || 18020 == n.code ? (e.submiting = !1, e.payMsg = "支付失败", void t.hideLoading()) : 1 !== n.code ? (t.hideLoading(), e.submiting = !1, e.payMsg = "支付失败", void e.$util.showToast(n.msg)) : void t.requestPayment({
                    timeStamp: n.data.timeStamp,
                    nonceStr: n.data.nonceStr,
                    package: "prepay_id=".concat(n.data.prepayid),
                    signType: n.data.signType,
                    paySign: n.data.pay_sign,
                    success: function(t) {
                      e.submiting = !1, e.payMsg = "支付成功"
                    },
                    fail: function(t) {
                      e.submiting = !1, e.payMsg = "支付失败"
                    }
                  })
                })))
              },
              launchAppError: function(e) {
                t.showModal({
                  title: "提示",
                  content: e.detail.errMsg
                })
              },
              exitMiniProgram: function() {
                n.navigateBackMiniProgram()
              }
            }
          };
          e.default = a
        }).call(this, n("df3c").default, n("3223").default)
      },
      ef13: function(t, e, n) {
        (function(t, e) {
          var a = n("47a9");
          n("5366"), a(n("3240"));
          var i = a(n("a442"));
          t.__webpack_require_UNI_MP_PLUGIN__ = n, e(i.default)
        }).call(this, n("3223").default, n("df3c").createPage)
      },
      fb19: function(t, e, n) {
        n.d(e, "b", (function() {
          return a
        })), n.d(e, "c", (function() {
          return i
        })), n.d(e, "a", (function() {}));
        var a = function() {
            this.$createElement;
            this._self._c
          },
          i = []
      }
    },
    [
      ["ef13", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPack/pages/appPay/appPay.js'
});
require("subPack/pages/appPay/appPay.js");
