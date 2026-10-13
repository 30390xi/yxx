$gwx1_XC_21 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_21 || [];

    function gz$gwx1_XC_21_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_21_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_21_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_21_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_21_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_21_1
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_21 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_21 = true;
    var x = ['./subPack/pages/guide/webpage.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_21_1()
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
        g = "$gwx1_XC_21";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_21();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/guide/webpage.wxml'] = [$gwx1_XC_21, './subPack/pages/guide/webpage.wxml'];
else __wxAppCode__['subPack/pages/guide/webpage.wxml'] = $gwx1_XC_21('./subPack/pages/guide/webpage.wxml');;
__wxRoute = "subPack/pages/guide/webpage";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPack/pages/guide/webpage.js";
define("subPack/pages/guide/webpage.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPack/pages/guide/webpage"], {
      "0f7b": function(e, t, n) {
        (function(e, t) {
          var r = n("47a9");
          n("5366"), r(n("3240"));
          var a = r(n("d666"));
          e.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default)
        }).call(this, n("3223").default, n("df3c").createPage)
      },
      2054: function(e, t, n) {
        n.r(t);
        var r = n("f921"),
          a = n.n(r);
        for (var o in r)["default"].indexOf(o) < 0 && function(e) {
          n.d(t, e, (function() {
            return r[e]
          }))
        }(o);
        t.default = a.a
      },
      b7a4: function(e, t, n) {
        n.d(t, "b", (function() {
          return r
        })), n.d(t, "c", (function() {
          return a
        })), n.d(t, "a", (function() {}));
        var r = function() {
            this.$createElement;
            this._self._c
          },
          a = []
      },
      d666: function(e, t, n) {
        n.r(t);
        var r = n("b7a4"),
          a = n("2054");
        for (var o in a)["default"].indexOf(o) < 0 && function(e) {
          n.d(t, e, (function() {
            return a[e]
          }))
        }(o);
        var i = n("828b"),
          s = Object(i.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = s.exports
      },
      f921: function(e, t, n) {
        (function(e, n) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var r = {
            data: function() {
              return {
                urlSrc: "",
                webviewStyles: {
                  progress: {
                    color: "#ff4643"
                  }
                },
                shareConfigNot: [],
                insuranceId: ""
              }
            },
            onLoad: function(t) {
              var r = e.getStorageSync("wxopenid");
              if (this.shareConfigNot = [], t.urlEncode) this.urlSrc = decodeURIComponent(t.urlEncode);
              else if (t.url) {
                var a = e.getStorageSync("token"),
                  o = this;
                if (-1 != t.url.indexOf("*") && (t.url = t.url.replace("*", "?"), t.url = t.url.replace("+", "=")), t.url.indexOf("scgact") > -1 && a) {
                  var i = -1 != t.url.indexOf("?") ? "&" : "?";
                  t.url += i + "token=" + encodeURIComponent(a.replace("bearer ", "") || "")
                }
                t.url.indexOf("H5/show?") > -1 && a && (t.url += "&token=" + encodeURIComponent(a || "")), t.url.indexOf("h5/wallGuide") > -1 && (t.url += "?openId=".concat(r), a && (t.url += "&token=" + encodeURIComponent(a.replace("bearer ", "") || ""))), 0 == t.shareAppMessage && this.shareConfigNot.push("shareAppMessage"), 0 == t.shareTimeline && this.shareConfigNot.push("shareTimeline"), this.shareConfigNot[0] && n.hideShareMenu({
                  menus: this.shareConfigNot
                }), setTimeout((function() {
                  o.urlSrc = t.url, console.log(o.urlSrc)
                }), 200)
              }
            },
            onShow: function() {},
            onShareAppMessage: function(e) {
              if (this._shareObj) return -1 != this._shareObj.path.indexOf("scgact") && this._shareObj.isLogin && this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/arborDayLottery/updateMemberLotteryNum", {
                lotteryType: 2
              }).then((function(e) {
                console.log("分享成功")
              })), this._shareObj
            },
            methods: {
              message: function(t) {
                var n = this,
                  r = t.detail.data;
                this._shareObj = t.detail.data[0], r[1] && r[1].toMiniPro && e.openEmbeddedMiniProgram({
                  appId: r[1].data.appId,
                  path: r[1].data.wechatUrl
                }), r[1] && r[1].cityId && (getApp().globalData.cityId = r[1].cityId), this._shareObj.confirm, this.$bus.$emit("agree", this._shareObj.confirm, this.getRequest(this.urlSrc)), this.destroyed(), r.forEach((function(t) {
                  if (t.type && "statistics" == t.type) n.$eventAnalyse.analyse(t.data);
                  else if (t.type && "login" == t.type) {
                    var a = r[1].token;
                    e.setStorageSync("token", a), n.$store.dispatch("setUserInfo", a).then((function(e) {
                      1 !== e.code && n.$util.showToast(e.msg)
                    }))
                  }
                }))
              },
              getRequest: function(e) {
                if (-1 != e.indexOf("?")) return e.substr(1).split("=")[1]
              },
              destroyed: function() {
                this.$bus.$off("agree")
              }
            }
          };
          t.default = r
        }).call(this, n("df3c").default, n("3223").default)
      }
    },
    [
      ["0f7b", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPack/pages/guide/webpage.js'
});
require("subPack/pages/guide/webpage.js");
