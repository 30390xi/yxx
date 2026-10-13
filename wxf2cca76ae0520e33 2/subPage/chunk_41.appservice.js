$gwx2_XC_36 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx2_XC_36 || [];

    function gz$gwx2_XC_36_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx2_XC_36_1) return __WXML_GLOBAL__.ops_cached.$gwx2_XC_36_1
      __WXML_GLOBAL__.ops_cached.$gwx2_XC_36_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'index'])
        Z([3, 'item'])
        Z([
          [6],
          [
            [7],
            [3, '$root']
          ],
          [3, 'l0']
        ])
        Z(z[0])
        Z([3, 'user-box data-v-f351e5d8'])
        Z([
          [6],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, '$orig']
          ],
          [3, 'name']
        ])
        Z([
          [6],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, '$orig']
          ],
          [3, 'phone']
        ])
        Z([
          [6],
          [
            [6],
            [
              [7],
              [3, 'item']
            ],
            [3, '$orig']
          ],
          [3, 'idCarNo']
        ])
        Z(z[7])
      })(__WXML_GLOBAL__.ops_cached.$gwx2_XC_36_1);
      return __WXML_GLOBAL__.ops_cached.$gwx2_XC_36_1
    }
    __WXML_GLOBAL__.ops_set.$gwx2_XC_36 = z;
    __WXML_GLOBAL__.ops_init.$gwx2_XC_36 = true;
    var x = ['./subPage/pages/passenger/passenger.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx2_XC_36_1()
      var oHAB = _v()
      _(r, oHAB)
      var xIAB = function(fKAB, oJAB, cLAB, gg) {
        var oNAB = _n('view')
        _rz(z, oNAB, 'class', 4, fKAB, oJAB, gg)
        var cOAB = _v()
        _(oNAB, cOAB)
        if (_oz(z, 5, fKAB, oJAB, gg)) {
          cOAB.wxVkey = 1
        }
        var oPAB = _v()
        _(oNAB, oPAB)
        if (_oz(z, 6, fKAB, oJAB, gg)) {
          oPAB.wxVkey = 1
        }
        var lQAB = _v()
        _(oNAB, lQAB)
        if (_oz(z, 7, fKAB, oJAB, gg)) {
          lQAB.wxVkey = 1
        }
        var aRAB = _v()
        _(oNAB, aRAB)
        if (_oz(z, 8, fKAB, oJAB, gg)) {
          aRAB.wxVkey = 1
        }
        cOAB.wxXCkey = 1
        oPAB.wxXCkey = 1
        lQAB.wxXCkey = 1
        aRAB.wxXCkey = 1
        _(cLAB, oNAB)
        return cLAB
      }
      oHAB.wxXCkey = 2
      _2z(z, 2, xIAB, e, s, gg, oHAB, 'item', 'index', 'index')
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
        g = "$gwx2_XC_36";
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
if (__vd_version_info__.delayedGwx || false) $gwx2_XC_36();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPage/pages/passenger/passenger.wxml'] = [$gwx2_XC_36, './subPage/pages/passenger/passenger.wxml'];
else __wxAppCode__['subPage/pages/passenger/passenger.wxml'] = $gwx2_XC_36('./subPage/pages/passenger/passenger.wxml');;
__wxRoute = "subPage/pages/passenger/passenger";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPage/pages/passenger/passenger.js";
define("subPage/pages/passenger/passenger.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPage/pages/passenger/passenger"], {
      "0845a": function(n, e, t) {
        t.r(e);
        var o = t("b6e7"),
          a = t.n(o);
        for (var i in o)["default"].indexOf(i) < 0 && function(n) {
          t.d(e, n, (function() {
            return o[n]
          }))
        }(i);
        e.default = a.a
      },
      "5f16": function(n, e, t) {},
      a424: function(n, e, t) {
        var o = t("5f16");
        t.n(o).a
      },
      af4b: function(n, e, t) {
        (function(n, e) {
          var o = t("47a9");
          t("5366"), o(t("3240"));
          var a = o(t("cb77"));
          n.__webpack_require_UNI_MP_PLUGIN__ = t, e(a.default)
        }).call(this, t("3223").default, t("df3c").createPage)
      },
      b6e7: function(n, e, t) {
        (function(n) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var t = {
            data: function() {
              return {
                commonUsedTouristList: []
              }
            },
            filters: {
              phoneFilter: function(n) {
                if (n) {
                  var e = n.toString();
                  return e.replace(e.substring(3, 7), "****")
                }
              },
              idCarNoFilter: function(n) {
                if (n) {
                  var e = n.toString();
                  return e.substring(0, 1) + "****************" + e.substring(e.length - 1, e.length)
                }
              }
            },
            onLoad: function(n) {},
            onShow: function() {
              this.getCommonUsedTouristList()
            },
            methods: {
              getCommonUsedTouristList: function() {
                var n = this;
                this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/queryCommonUsedTouristList").then((function(e) {
                  1 === e.code ? n.commonUsedTouristList = e.data || [] : n.$util.showToast(e.msg)
                }))
              },
              editPassenger: function(n) {
                this.$navigateTo({
                  url: "/subPage/pages/editPassenger/editPassenger?touristId=".concat(n)
                })
              },
              delPassenger: function(e) {
                var t = this,
                  o = {
                    id: e
                  };
                n.showModal({
                  cancelText: "取消",
                  confirmText: "确认",
                  content: "是否删除该旅客?",
                  success: function(n) {
                    n.confirm ? t.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/deleteCommonUsedTourist", o).then((function(n) {
                      1 === n.code ? t.getCommonUsedTouristList() : t.$util.showToast(n.msg)
                    })) : n.cancel && console.log("cancel")
                  }
                })
              },
              addPassenger: function() {
                this.$navigateTo({
                  url: "/subPage/pages/addPassenger/addPassenger"
                })
              }
            }
          };
          e.default = t
        }).call(this, t("df3c").default)
      },
      cb77: function(n, e, t) {
        t.r(e);
        var o = t("f19f"),
          a = t("0845a");
        for (var i in a)["default"].indexOf(i) < 0 && function(n) {
          t.d(e, n, (function() {
            return a[n]
          }))
        }(i);
        t("a424");
        var r = t("828b"),
          s = Object(r.a)(a.default, o.b, o.c, !1, null, "f351e5d8", null, !1, o.a, void 0);
        e.default = s.exports
      },
      f19f: function(n, e, t) {
        t.d(e, "b", (function() {
          return o
        })), t.d(e, "c", (function() {
          return a
        })), t.d(e, "a", (function() {}));
        var o = function() {
            var n = this,
              e = (n.$createElement, n._self._c, n.__map(n.commonUsedTouristList, (function(e, t) {
                return {
                  $orig: n.__get_orig(e),
                  f0: e.phone ? n._f("phoneFilter")(e.phone) : null,
                  f1: e.idCarNo ? n._f("cardNameFilter")(e.cardType) : null,
                  f2: e.idCarNo ? n._f("idCarNoFilter")(e.idCarNo) : null
                }
              })));
            n.$mp.data = Object.assign({}, {
              $root: {
                l0: e
              }
            })
          },
          a = []
      }
    },
    [
      ["af4b", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPage/pages/passenger/passenger.js'
});
require("subPage/pages/passenger/passenger.js");
