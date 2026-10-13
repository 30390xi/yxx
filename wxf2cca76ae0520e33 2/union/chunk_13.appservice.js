$gwx4_XC_5 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_5 || [];

    function gz$gwx4_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_5_1) return __WXML_GLOBAL__.ops_cached.$gwx4_XC_5_1
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_5_1 = [];
      (function(z) {
        var a = 11;

        function Z(ops) {
          z.push(ops)
        }
        Z([3, '__l'])
        Z([
          [7],
          [3, 'html']
        ])
        Z([1, true])
        Z([
          [7],
          [3, 'scrollTable']
        ])
        Z([
          [7],
          [3, 'selectable']
        ])
        Z([
          [7],
          [3, 'tagStyle']
        ])
        Z([3, '7fff828e-1'])
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_5_1
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_5 = true;
    var x = ['./union/components1/components/zero-markdown-view/zero-markdown-view.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
      var z = gz$gwx4_XC_5_1()
      var f7H = _mz(z, 'mp-html', ['bind:__l', 0, 'content', 1, 'markdown', 1, 'scrollTable', 2, 'selectable', 3, 'tagStyle', 4, 'vueId', 5], [], e, s, gg)
      _(r, f7H)
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
        g = "$gwx4_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_5();
if (__vd_version_info__.delayedGwx) __wxAppCode__['union/components1/components/zero-markdown-view/zero-markdown-view.wxml'] = [$gwx4_XC_5, './union/components1/components/zero-markdown-view/zero-markdown-view.wxml'];
else __wxAppCode__['union/components1/components/zero-markdown-view/zero-markdown-view.wxml'] = $gwx4_XC_5('./union/components1/components/zero-markdown-view/zero-markdown-view.wxml');;
__wxRoute = "union/components1/components/zero-markdown-view/zero-markdown-view";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "union/components1/components/zero-markdown-view/zero-markdown-view.js";
define("union/components1/components/zero-markdown-view/zero-markdown-view.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["union/components1/components/zero-markdown-view/zero-markdown-view"], {
      "02cc": function(t, n, o) {
        o.r(n);
        var e = o("f801"),
          r = o.n(e);
        for (var a in e)["default"].indexOf(a) < 0 && function(t) {
          o.d(n, t, (function() {
            return e[t]
          }))
        }(a);
        n.default = r.a
      },
      "30a4": function(t, n, o) {},
      d320: function(t, n, o) {
        var e = o("30a4");
        o.n(e).a
      },
      dd9a: function(t, n, o) {
        o.r(n);
        var e = o("e0b1"),
          r = o("02cc");
        for (var a in r)["default"].indexOf(a) < 0 && function(t) {
          o.d(n, t, (function() {
            return r[t]
          }))
        }(a);
        o("d320");
        var i = o("828b"),
          l = Object(i.a)(r.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        n.default = l.exports
      },
      e0b1: function(t, n, o) {
        o.d(n, "b", (function() {
          return e
        })), o.d(n, "c", (function() {
          return r
        })), o.d(n, "a", (function() {}));
        var e = function() {
            this.$createElement;
            this._self._c
          },
          r = []
      },
      f801: function(t, n, o) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          name: "zero-markdown-view",
          components: {
            mpHtml: function() {
              Promise.all([o.e("union/common/vendor"), o.e("union/components1/components/mp-html/mp-html")]).then(function() {
                return resolve(o("0e14"))
              }.bind(null, o)).catch(o.oe)
            }
          },
          props: {
            markdown: {
              type: String,
              default: ""
            },
            selectable: {
              type: [Boolean, String],
              default: !0
            },
            scrollTable: {
              type: Boolean,
              default: !0
            },
            themeColor: {
              type: String,
              default: "#333333"
            },
            codeBgColor: {
              type: String,
              default: "#2d2d2d"
            }
          },
          data: function() {
            return {
              html: "",
              tagStyle: "",
              mpkey: "zero"
            }
          },
          watch: {
            markdown: function(t) {
              var n = this.markdown.replaceAll(/<img src="(.*?) - (.*?)" alt="">/g, '<img src="$1-$2" alt="">');
              n = n.replaceAll(/<video(.*?)src="(.*?) - (.*?)"(.*?)>/g, '<video$1src="$2-$3"$4>'), this.html = n
            }
          },
          created: function() {
            this.initTagStyle()
          },
          mounted: function() {
            var t = this.markdown.replaceAll(/<img src="(.*?) - (.*?)" alt="">/g, '<img src="$1-$2" alt="">');
            t = t.replaceAll(/<video(.*?)src="(.*?) - (.*?)"(.*?)>/g, '<video$1src="$2-$3"$4>'), this.html = t
          },
          methods: {
            initTagStyle: function() {
              var t = this.themeColor,
                n = this.codeBgColor,
                o = {
                  p: "\n\t\t\tmargin:0px 0px;\n\t\t\tfont-family: Source Han Sans SC, Source Han Sans SC;\n\t\t\tfont-weight: 400;\n\t\t\tfont-size: 28rpx;\n\t\t\tcolor: rgba(0,0,0,0.85);\n\t\t\tline-height: 48rpx;\n\t\t\ttext-align: left;\n\t\t\tfont-style: normal;\n\t\t\ttext-transform: none;\n\t\t\t",
                  h1: "\n\t\t\tmargin:0px 0px;\n\t\t\tfont-family: Source Han Sans SC, Source Han Sans SC;\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 44rpx;\n\t\t\tcolor: #4E514F;\n\t\t\tline-height: 54rpx;\n\t\t\ttext-align: left;\n\t\t\tfont-style: normal;\n\t\t\ttext-transform: none;\n\t\t\t",
                  h2: "\n\t\t\tmargin:10px 0px;\n\t\t\tfont-family: Source Han Sans SC, Source Han Sans SC;\n\t\t\tfont-weight: 600;\n\t\t\tfont-size: 36rpx;\n\t\t\tcolor: #4E514F;\n\t\t\tline-height: 44rpx;\n\t\t\ttext-align: left;\n\t\t\tfont-style: normal;\n\t\t\ttext-transform: none;\n\t\t\t",
                  h3: "\n\t\t\tmargin:0px 0px;\n\t\t\tfont-family: Source Han Sans SC, Source Han Sans SC;\n\t\t\tfont-weight: 500;\n\t\t\tfont-size: 32rpx;\n\t\t\tcolor: #4E514F;\n\t\t\tline-height: 40rpx;\n\t\t\ttext-align: left;\n\t\t\tfont-style: normal;\n\t\t\ttext-transform: none;\n\t\t\t",
                  strong: "\n\t\t\tfont-weight: bold;\n\t\t\tcolor: #4E514F;\n\t\t\t",
                  em: "\n\t\t\tcolor: #4E514F;\n\t\t\t",
                  blockquote: "\n\t\t\tmargin:15px 0;\n\t\t\tfont-size:30rpx;\n\t\t\tcolor: #4E514F;\n\t\t\tborder-left: 8rpx solid #dddddd;\n\t\t\tpadding: 0 20rpx;\n\t\t\t ",
                  ul: "\n\t\t\t\tfont-family: Source Han Sans SC, Source Han Sans SC;\n\t\t\t\tmargin: 20rpx 0;\n\t\t\t\tcolor: #4E514F;\n\t\t\t\tfont-weight: none;\n\t\t\t\tpadding-inline-start: 34rpx;\n\t\t\t\tfont-size: 27rpx;\n\n\t\t\t",
                  li: "\n\t\t\t  font-family: Source Han Sans SC, Source Han Sans SC;\n\t\t\t\tmargin: 10rpx 0;\n\t\t\t\tcolor: #4E514F;\n\t\t\t\tfont-weight: none;\n\t\t\t\tfont-size: 27rpx;\n\n\t\t\t",
                  a: "\n\t\t\t// color: ".concat(t, ";\n\t\t\t"),
                  b: "\n\t\t\tmargin:0px 0px;\n\t\t\tfont-size: 32rpx;\n\t\t\tline-height:1.75;\n\t\t\tletter-spacing:0.2em;\n\t\t\tword-spacing:0.1em;\n\t\t\tcolor: #4E514F;\n\t\t\t",
                  hr: "\n\t\t\theight:1px;\n\t\t\tpadding:0;\n\t\t\tmargin:10px 0;\n\t\t\tborder:none;\n\t\t\t// border-top:medium solid #333;\n\t\t\ttext-align:center;\n\t\t\tbackground-image:linear-gradient(to right,rgba(248,57,41,0),".concat(t, ",rgba(248,57,41,0));\n\t\t\t"),
                  table: "\n\t\t\tborder-spacing:0;\n\t\t\toverflow:auto;\n\t\t\tmin-width:100%;\n\t\t\tmargin:20rpx 0;\n\t\t\tborder-collapse: collapse;\n\t\t\t",
                  th: "\n\t\t\tborder: 1px solid #202121;\n\t\t\tcolor: #555;\n\t\t\t",
                  td: "\n\t\t\tcolor:#555;\n\t\t\tborder: 1px solid #555555;\n\t\t\t",
                  pre: "\n\t\t\tborder-radius: 10rpx;\n\t\t\twhite-space: pre;\n\t\t\tbackground: ".concat(n, ";\n\t\t\tfont-size:24rpx;\n\t\t\tposition: relative;\n\t\t\t"),
                  img: '\n\t\t\t  width:"300rpx";\n\t\t\t\theight:"300rpx";\n\t\t\t\tmargin-top:24rpx;\n\t\t\t',
                  vidio: '\n\t\t\t  width:"300rpx";\n\t\t\t\theight:"300rpx";\n\t\t\t\tmargin-top:24rpx;\n\t\t\t'
                };
              this.tagStyle = o
            }
          }
        };
        n.default = e
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/components/zero-markdown-view/zero-markdown-view-create-component", {
      "union/components1/components/zero-markdown-view/zero-markdown-view-create-component": function(t, n, o) {
        o("df3c").createComponent(o("dd9a"))
      }
    },
    [
      ["union/components1/components/zero-markdown-view/zero-markdown-view-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'union/components1/components/zero-markdown-view/zero-markdown-view.js'
});
require("union/components1/components/zero-markdown-view/zero-markdown-view.js");
