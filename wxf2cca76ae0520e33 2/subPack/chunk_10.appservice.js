$gwx1_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_2 || [];

    function gz$gwx1_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx1_XC_2_1
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_2_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'data-v-2036dd08'])
        Z([
          [7],
          [3, 'action']
        ])
        Z([1, true])
        Z([3, '__l'])
        Z([3, '__e'])
        Z(z[4])
        Z([3, 'data-v-2036dd08 vue-ref'])
        Z(z[2])
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [4],
                [
                  [5],
                  [
                    [5],
                    [1, '^onUploaded']
                  ],
                  [
                    [4],
                    [
                      [5],
                      [
                        [4],
                        [
                          [5],
                          [1, 'onUploaded']
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ],
            [
              [4],
              [
                [5],
                [
                  [5],
                  [1, '^onRemove']
                ],
                [
                  [4],
                  [
                    [5],
                    [
                      [4],
                      [
                        [5],
                        [1, 'onRemove']
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ])
        Z([3, 'Uupload'])
        Z([3, '3'])
        Z([3, 'images'])
        Z([3, '664e9876-1'])
        Z([
          [4],
          [
            [5],
            [1, 'addBtn']
          ]
        ])
        Z([3, 'slot-btn data-v-2036dd08'])
        Z([3, 'slot-btn__hover'])
        Z([3, '150'])
        Z([3, 'addBtn'])
        Z(z[3])
        Z(z[0])
        Z([
          [6],
          [
            [6],
            [
              [7],
              [3, '$u']
            ],
            [3, 'color']
          ],
          [1, 'lightColor']
        ])
        Z([3, '60'])
        Z([3, 'image'])
        Z([
          [2, '+'],
          [
            [2, '+'],
            [1, '664e9876-2'],
            [1, ',']
          ],
          [1, '664e9876-1']
        ])
        Z(z[3])
        Z(z[6])
        Z([3, 'uToast'])
        Z([3, '664e9876-3'])
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_2_1
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_2 = true;
    var x = ['./subPack/pages/aftercontent/aftercontent.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx1_XC_2_1()
      var fE = _n('view')
      _rz(z, fE, 'class', 0, e, s, gg)
      var cF = _mz(z, 'u-upload', ['action', 1, 'autoUpload', 1, 'bind:__l', 2, 'bind:onRemove', 3, 'bind:onUploaded', 4, 'class', 5, 'customBtn', 6, 'data-event-opts', 7, 'data-ref', 8, 'maxCount', 9, 'name', 10, 'vueId', 11, 'vueSlots', 12], [], e, s, gg)
      var hG = _mz(z, 'view', ['class', 14, 'hoverClass', 1, 'hoverStayTime', 2, 'slot', 3], [], e, s, gg)
      var oH = _mz(z, 'uni-icons', ['bind:__l', 18, 'class', 1, 'color', 2, 'size', 3, 'type', 4, 'vueId', 5], [], e, s, gg)
      _(hG, oH)
      _(cF, hG)
      _(fE, cF)
      var cI = _mz(z, 'u-toast', ['bind:__l', 24, 'class', 1, 'data-ref', 2, 'vueId', 3], [], e, s, gg)
      _(fE, cI)
      _(r, fE)
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
        g = "$gwx1_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['subPack/pages/aftercontent/aftercontent.wxml'] = [$gwx1_XC_2, './subPack/pages/aftercontent/aftercontent.wxml'];
else __wxAppCode__['subPack/pages/aftercontent/aftercontent.wxml'] = $gwx1_XC_2('./subPack/pages/aftercontent/aftercontent.wxml');;
__wxRoute = "subPack/pages/aftercontent/aftercontent";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "subPack/pages/aftercontent/aftercontent.js";
define("subPack/pages/aftercontent/aftercontent.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["subPack/pages/aftercontent/aftercontent"], {
      "1e54": function(e, t, n) {
        n.r(t);
        var o = n("587e"),
          a = n.n(o);
        for (var r in o)["default"].indexOf(r) < 0 && function(e) {
          n.d(t, e, (function() {
            return o[e]
          }))
        }(r);
        t.default = a.a
      },
      "587e": function(e, t, n) {
        (function(e) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var n = {
            data: function() {
              return {
                orderId: "",
                aftersaleType: "",
                type: "",
                loadingStatus: !1,
                aftersaleReason: "",
                num: 0,
                action: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
                uploadArr: []
              }
            },
            onLoad: function(e) {
              e.orderId && (this.orderId = e.orderId, this.aftersaleType = e.aftersaleType), e.type ? this.type = e.type : this.type = ""
            },
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            methods: {
              onSubmit: function() {
                var t = this;
                if (!this.aftersaleReason) return this.$refs.uToast.show({
                  title: "请输入原因",
                  type: "error"
                });
                var n = {
                  orderId: this.orderId,
                  aftersaleReason: this.aftersaleReason,
                  aftersaleType: this.aftersaleType,
                  memberId: this.userInfo.memberId,
                  memberName: this.userInfo.nickName ? this.userInfo.nickName : "",
                  memberPhone: this.userInfo.mobilePhone
                };
                this.uploadArr.length > 0 && (n.aftersalePic = this.uploadArr.join(",")), this.loadingStatus = !0, this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/aftersaleNew", n).then((function(n) {
                  if (t.loadingStatus = !1, 1 == n.code)
                    if (t.$refs.uToast.show({
                        title: "已提交申请",
                        type: "success",
                        position: "bottom"
                      }), t.type) t.$util.prevPage();
                    else {
                      var o = getCurrentPages(),
                        a = o[o.length - 3];
                      e.navigateBack({
                        delta: 2,
                        success: function() {
                          a.$vm.page = 1, a.$vm.pageLoad()
                        }
                      })
                    }
                })).catch((function(e) {
                  t.loadingStatus = !1, t.$u.toast(e.msg)
                }))
              },
              changefun: function() {
                this.num = this.aftersaleReason.length
              },
              onUploaded: function(e) {
                this.uploadArr = e.map((function(e) {
                  return e.response.data[0].maxImageUrl
                }))
              },
              onRemove: function(e, t) {
                this.uploadArr.splice(e, 1)
              }
            }
          };
          t.default = n
        }).call(this, n("df3c").default)
      },
      "8ddc": function(e, t, n) {
        var o = n("f8b7");
        n.n(o).a
      },
      cd9d: function(e, t, n) {
        n.r(t);
        var o = n("f711"),
          a = n("1e54");
        for (var r in a)["default"].indexOf(r) < 0 && function(e) {
          n.d(t, e, (function() {
            return a[e]
          }))
        }(r);
        n("8ddc");
        var u = n("828b"),
          i = Object(u.a)(a.default, o.b, o.c, !1, null, "2036dd08", null, !1, o.a, void 0);
        t.default = i.exports
      },
      da80: function(e, t, n) {
        (function(e, t) {
          var o = n("47a9");
          n("5366"), o(n("3240"));
          var a = o(n("cd9d"));
          e.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default)
        }).call(this, n("3223").default, n("df3c").createPage)
      },
      f711: function(e, t, n) {
        n.d(t, "b", (function() {
          return a
        })), n.d(t, "c", (function() {
          return r
        })), n.d(t, "a", (function() {
          return o
        }));
        var o = {
            uUpload: function() {
              return Promise.all([n.e("common/vendor"), n.e("uview-ui/components/u-upload/u-upload")]).then(n.bind(null, "3938"))
            },
            uniIcons: function() {
              return Promise.all([n.e("common/vendor"), n.e("components/uni-icons/uni-icons")]).then(n.bind(null, "365b"))
            },
            uToast: function() {
              return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null, "05ad"))
            }
          },
          a = function() {
            this.$createElement;
            this._self._c
          },
          r = []
      },
      f8b7: function(e, t, n) {}
    },
    [
      ["da80", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'subPack/pages/aftercontent/aftercontent.js'
});
require("subPack/pages/aftercontent/aftercontent.js");
