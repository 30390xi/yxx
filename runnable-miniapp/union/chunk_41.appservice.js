$gwx4_XC_36 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_36 || [];

    function gz$gwx4_XC_36_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_36_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_36_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_36_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, 'cor-warp data-v-0e6c0b12'])
        Z([3, '__l'])
        Z([3, 'data-v-0e6c0b12'])
        Z([3, 'z-index:99;'])
        Z([3, 'transparentFixed'])
        Z([3, '1ab10c1b-1'])
        Z([
          [2, '!'],
          [
            [7],
            [3, 'showImage']
          ]
        ])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_36_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_36_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_36 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_36 = true;
    var x = ['./union/pages/cor/indexImage.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_36_1()
      var cU5 = _n('view')
      _rz(z, cU5, 'class', 0, e, s, gg)
      var lW5 = _mz(z, 'uni-navbar', ['bind:__l', 1, 'class', 1, 'style', 2, 'type', 3, 'vueId', 4], [], e, s, gg)
      _(cU5, lW5)
      var oV5 = _v()
      _(cU5, oV5)
      if (_oz(z, 6, e, s, gg)) {
        oV5.wxVkey = 1
      }
      oV5.wxXCkey = 1
      _(r, cU5)
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
        g = "$gwx4_XC_36";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_36();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/pages/cor/indexImage.wxml'] = [$gwx4_XC_36, './union/pages/cor/indexImage.wxml'];
else __wxAppCode__['union/pages/cor/indexImage.wxml'] = $gwx4_XC_36('./union/pages/cor/indexImage.wxml');;
__wxRoute = "union/pages/cor/indexImage";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/pages/cor/indexImage.js";
define("union/pages/cor/indexImage.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/pages/cor/indexImage"], {
      "3e2c": function(e, n, a) {
        a.d(n, "b", (function() {
          return o
        })), a.d(n, "c", (function() {
          return i
        })), a.d(n, "a", (function() {
          return t
        }));
        var t = {
            uniNavbar: function() {
              return a.e("components/uni-navbar/uni-navbar").then(a.bind(null, "101a"))
            }
          },
          o = function() {
            this.$createElement;
            this._self._c
          },
          i = []
      },
      "68d9": function(e, n, a) {
        a.r(n);
        var t = a("a4f8"),
          o = a.n(t);
        for (var i in t)["default"].indexOf(i) < 0 && function(e) {
          a.d(n, e, (function() {
            return t[e]
          }))
        }(i);
        n.default = o.a
      },
      "7b23": function(e, n, a) {
        a.r(n);
        var t = a("3e2c"),
          o = a("68d9");
        for (var i in o)["default"].indexOf(i) < 0 && function(e) {
          a.d(n, e, (function() {
            return o[e]
          }))
        }(i);
        a("893f");
        var c = a("828b"),
          r = Object(c.a)(o.default, t.b, t.c, !1, null, "0e6c0b12", null, !1, t.a, void 0);
        n.default = r.exports
      },
      "893f": function(e, n, a) {
        var t = a("ee90");
        a.n(t).a
      },
      a4f8: function(e, n, a) {
        (function(e, a) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = void 0;
          var t = {
            data: function() {
              return {
                cameraContext: null,
                index: "",
                showImage: "",
                indexed: ""
              }
            },
            onShow: function() {},
            onLoad: function(n) {
              this.index = n.i || !1, this.indexed = n.ind || !1, this.cameraContext = e.createCameraContext()
            },
            onUnload: function() {
              this.showImage = ""
            },
            methods: {
              ocrFun: function() {
                this.showHide = !0
              },
              close: function() {
                e.navigateBack({
                  delta: 1
                })
              },
              iiiiiii: function() {
                var n = getCurrentPages(),
                  a = n[n.length - 2];
                console.log(a, "上一页对象1"), a.$vm.setDataInfos({
                  name: 11111111,
                  idCarNo: 0x3fdc72ad69268
                }, this.index, this.indexed), e.navigateBack({
                  delta: 1
                })
              },
              checkCameraPermissionAndTakePhoto: function() {
                var n = this;
                e.getSetting({
                  success: function(a) {
                    a.authSetting["scope.camera"] ? n.takePhoto() : e.authorize({
                      scope: "scope.camera",
                      success: function() {
                        n.takePhoto()
                      },
                      fail: function(n) {
                        "authorize:fail auth deny" === n.errMsg || "authorize:fail:auth deny" === n.errMsg ? e.showModal({
                          title: "授权提示",
                          content: "您拒绝了相机授权，如需使用相机功能，请在设置中开启。",
                          confirmText: "去设置",
                          success: function(n) {
                            n.confirm && (e.navigateBack({
                              delta: 1
                            }), e.openSetting({
                              success: function(e) {},
                              fail: function(e) {
                                console.error("打开设置页面失败:", e)
                              }
                            }))
                          }
                        }) : console.error("请求授权失败:", n)
                      }
                    })
                  },
                  fail: function(e) {
                    console.error("获取授权状态失败:", e)
                  }
                })
              },
              takePhoto: function() {
                var n = this;
                this.cameraContext.takePhoto({
                  quality: "normal",
                  success: function(t) {
                    e.showLoading({
                      title: "识别中",
                      mask: !0
                    }), console.log(t, "拍照结果"), a.getFileSystemManager().readFile({
                      filePath: t.tempImagePath,
                      encoding: "base64",
                      success: function(e) {
                        console.log(e, "图片 base64 数据"), n.identify(e.data)
                      },
                      fail: function(n) {
                        e.showToast({
                          title: "读取图片失败，请稍后重试",
                          icon: "none",
                          duration: 1200
                        }), console.log("读取图片文件失败", n), e.hideLoading()
                      }
                    })
                  },
                  fail: function(n) {
                    e.showToast({
                      title: "拍照失败，请检查系统是否授权",
                      icon: "none",
                      duration: 1200
                    }), console.log("图片拍照失败", n)
                  }
                })
              },
              chooseImage: function() {
                var n = this,
                  a = this;
                e.chooseImage({
                  count: 1,
                  sizeType: ["compressed"],
                  sourceType: ["album"],
                  success: function(t) {
                    console.log("相册选取成功", t), n.showImage = t.tempFilePaths[0], e.showLoading({
                      title: "识别中",
                      mask: !0
                    }), n.upLoad(t.tempFilePaths[0]).then((function(e) {
                      console.log(e, "图片上传结果"), a.identify(e, "url")
                    })).catch((function(a) {
                      n.showImage = "", e.showToast({
                        title: "识别失败，请重新识别或手动填写",
                        icon: "none",
                        duration: 1200
                      }), e.hideLoading()
                    }))
                  },
                  fail: function(n) {
                    e.hideLoading(), console.log("相册选取失败", n)
                  }
                })
              },
              upLoad: function(n) {
                return new Promise((function(a, t) {
                  e.uploadFile({
                    url: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
                    filePath: n,
                    name: "images",
                    success: function(e) {
                      console.log(e, "文件上传响应");
                      try {
                        var n = JSON.parse(e.data);
                        1 === n.code && n.data && n.data[0] && a(n.data[0].maxImageUrl)
                      } catch (e) {
                        t(new Error("解析服务器响应数据失败"))
                      }
                    },
                    fail: function(e) {
                      console.error("upload fail:", e), t(e)
                    }
                  })
                }))
              },
              identify: function(n, t) {
                var o;
                o = t ? {
                  img_url: n,
                  data_type: 3,
                  ocr_type: 1
                } : {
                  img_data: n,
                  data_type: 2,
                  ocr_type: 1
                };
                var i = this,
                  c = getCurrentPages();
                a.serviceMarket.invokeService({
                  service: "wx79ac3de8be320b71",
                  api: "OcrAllInOne",
                  data: o
                }).then((function(n) {
                  if (e.hideLoading(), console.log("invokeService success", n), c.length > 1) {
                    var a = c[c.length - 2];
                    console.log(a, "上一页对象1"), n && n.data && n.data.idcard_res && n.data.idcard_res.name && n.data.idcard_res.id && n.data.idcard_res.name.text && n.data.idcard_res.id.text ? a.$vm.setDataInfos({
                      name: n.data.idcard_res.name.text,
                      idCarNo: n.data.idcard_res.id.text
                    }, i.index, i.indexed) : a.$vm.setDataInfos(!1), e.navigateBack({
                      delta: 1
                    })
                  }
                })).catch((function(n) {
                  if (e.hideLoading(), console.error("invokeService fail------", n), c.length > 1) {
                    var a = c[c.length - 2];
                    console.log(a, "上一页对象"), a.$vm.setDataInfos(!1)
                  }
                  e.navigateBack({
                    delta: 1
                  })
                }))
              }
            }
          };
          n.default = t
        }).call(this, a("df3c").default, a("3223").default)
      },
      b15b: function(e, n, a) {
        (function(e, n) {
          var t = a("47a9");
          a("5366"), t(a("3240"));
          var o = t(a("7b23"));
          e.__webpack_require_UNI_MP_PLUGIN__ = a, n(o.default)
        }).call(this, a("3223").default, a("df3c").createPage)
      },
      ee90: function(e, n, a) {}
    },
    [
      ["b15b", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'union/pages/cor/indexImage.js'
});
require("union/pages/cor/indexImage.js");
