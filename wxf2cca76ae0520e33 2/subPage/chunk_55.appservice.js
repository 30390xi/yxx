$gwx2_XC_51 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_51 || [];

    function gz$gwx2_XC_51_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_51_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_51_1
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_51_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'main-box data-v-32f77074'])
        Z([
          [2, '!'],
          [
            [7],
            [3, 'userInfo']
          ]
        ])
        Z([
          [2, '&&'],
          [
            [2, '!'],
            [
              [6],
              [
                [7],
                [3, 'userInfo']
              ],
              [3, 'isFenxiao']
            ]
          ],
          [
            [2, '!'],
            [
              [7],
              [3, 'shareId']
            ]
          ]
        ])
        Z([
          [2, '&&'],
          [
            [2, '!'],
            [
              [6],
              [
                [7],
                [3, 'userInfo']
              ],
              [3, 'isFenxiao']
            ]
          ],
          [
            [7],
            [3, 'shareId']
          ]
        ])
        Z([
          [6],
          [
            [7],
            [3, 'userInfo']
          ],
          [3, 'isFenxiao']
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_51_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_51_1
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_51 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_51 = true;
    var x = ['./subPage/pages/talent/talent.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx2_XC_51_1()
      var c4YB = _n('view')
      _rz(z, c4YB, 'class', 0, e, s, gg)
      var h5YB = _v()
      _(c4YB, h5YB)
      if (_oz(z, 1, e, s, gg)) {
        h5YB.wxVkey = 1
      } else {
        h5YB.wxVkey = 2
        var o6YB = _v()
        _(h5YB, o6YB)
        if (_oz(z, 2, e, s, gg)) {
          o6YB.wxVkey = 1
        } else {
          o6YB.wxVkey = 2
          var c7YB = _v()
          _(o6YB, c7YB)
          if (_oz(z, 3, e, s, gg)) {
            c7YB.wxVkey = 1
          } else {
            c7YB.wxVkey = 2
            var o8YB = _v()
            _(c7YB, o8YB)
            if (_oz(z, 4, e, s, gg)) {
              o8YB.wxVkey = 1
            }
            o8YB.wxXCkey = 1
          }
          c7YB.wxXCkey = 1
        }
        o6YB.wxXCkey = 1
      }
      h5YB.wxXCkey = 1
      _(r, c4YB)
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
        g = "$gwx2_XC_51";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_51();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/pages/talent/talent.wxml'] = [$gwx2_XC_51, './subPage/pages/talent/talent.wxml'];
else __wxAppCode__['subPage/pages/talent/talent.wxml'] = $gwx2_XC_51('./subPage/pages/talent/talent.wxml');;
__wxRoute = "subPage/pages/talent/talent";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPage/pages/talent/talent.js";
define("subPage/pages/talent/talent.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPage/pages/talent/talent"], {
      "08c6": function(e, n, t) {
        (function(e) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = void 0;
          var t = {
            data: function() {
              return {
                shareId: "",
                shareinfo: {},
                configrights: []
              }
            },
            onLoad: function(e) {
              e.scene && (this.shareId = e.scene, this.getMemberinfo()), this.getConfig()
            },
            onShow: function() {
              var n = e.getStorageSync("shareId");
              n && !this.shareId && (this.shareId = n), e.removeStorage({
                key: "shareId"
              })
            },
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            methods: {
              getMemberinfo: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/member/" + this.shareId).then((function(n) {
                  e.shareinfo = n.data
                }))
              },
              applyTalent: function() {
                var n = this;
                this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/member/applyFenXiao").then((function(t) {
                  1 == t.code ? n.changeuserinfo(1) : ("您已经是旅行达人，请勿重复申请" == t.msg && n.changeuserinfo(), e.showToast({
                    title: t.msg,
                    icon: "none"
                  }))
                }))
              },
              getConfig: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                  paramKey: "FENXIAO_VIP_POWER"
                }).then((function(n) {
                  1 === n.code && (e.configrights = JSON.parse(n.data.paramValue))
                }))
              },
              inviteTalent: function() {
                var n = this;
                this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/member/agreeFenXiao", {
                  referenceId: this.shareId
                }).then((function(t) {
                  1 == t.code ? n.changeuserinfo(1) : ("您已经是旅行达人，请勿重复申请" == t.msg && n.changeuserinfo(), e.showToast({
                    title: t.msg,
                    icon: "none"
                  }))
                }))
              },
              changeuserinfo: function(n) {
                n && e.showToast({
                  title: "恭喜成为旅行达人",
                  icon: "success"
                });
                var t = this.userInfo;
                t.isFenxiao = 1, this.$store.commit("SET_USERINFOR", t), e.setStorageSync("userInfor", t)
              },
              toBeTalent: function(n) {
                var t = this,
                  a = this;
                1 == n && (e.setStorageSync("shareId", this.shareId), this.$util.isLogin()), 2 == n && this.$store.dispatch("PushMessage").then((function(e) {
                  a.applyTalent()
                })), 3 == n && this.$store.dispatch("PushMessage").then((function(e) {
                  a.inviteTalent()
                })), 4 == n && this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/member/existOfficalOpenid", {
                  openId: e.getStorageSync("userInfor").openId
                }).then((function(n) {
                  if (1 === n.code)
                    if (n.data) {
                      var a = n.data;
                      t.$navigateTo({
                        url: "/distribution/pages/index/index?officialOpenId=" + a
                      })
                    } else {
                      var i = "https://eshop.zhiyousx.com/dsmall-admin-ui/h5/driverSms.html?miniOpenid=" + e.getStorageSync("userInfor").openId + "&unionid=" + e.getStorageSync("unionid") + "&isFenxiao=1",
                        o = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4e897687efe1ef2e&redirect_uri=" + encodeURIComponent(i) + "&response_type=code&scope=snsapi_base&forcePopup=true&state=1&connect_redirect=1#wechat_redirect";
                      e.navigateTo({
                        url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(o)
                      })
                    }
                }))
              }
            }
          };
          n.default = t
        }).call(this, t("df3c").default)
      },
      "0b42": function(e, n, t) {
        var a = t("8123");
        t.n(a).a
      },
      "3bea": function(e, n, t) {
        t.r(n);
        var a = t("08c6"),
          i = t.n(a);
        for (var o in a)["default"].indexOf(o) < 0 && function(e) {
          t.d(n, e, (function() {
            return a[e]
          }))
        }(o);
        n.default = i.a
      },
      8123: function(e, n, t) {},
      8634: function(e, n, t) {
        t.r(n);
        var a = t("91ab"),
          i = t("3bea");
        for (var o in i)["default"].indexOf(o) < 0 && function(e) {
          t.d(n, e, (function() {
            return i[e]
          }))
        }(o);
        t("0b42");
        var s = t("828b"),
          r = Object(s.a)(i.default, a.b, a.c, !1, null, "32f77074", null, !1, a.a, void 0);
        n.default = r.exports
      },
      "91ab": function(e, n, t) {
        t.d(n, "b", (function() {
          return a
        })), t.d(n, "c", (function() {
          return i
        })), t.d(n, "a", (function() {}));
        var a = function() {
            this.$createElement;
            this._self._c
          },
          i = []
      },
      abeb: function(e, n, t) {
        (function(e, n) {
          var a = t("47a9");
          t("5366"), a(t("3240"));
          var i = a(t("8634"));
          e.__webpack_require_UNI_MP_PLUGIN__ = t, n(i.default)
        }).call(this, t("3223").default, t("df3c").createPage)
      }
    },
    [
      ["abeb", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPage/pages/talent/talent.js'
});
require("subPage/pages/talent/talent.js");
