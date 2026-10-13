__wxCodeSpace__.batchAddCompiledTemplate(function(G, R, D, Q, gdc, X, Y, Z, RG = {}) {
  var P = RG.P || function(a) {
    return typeof a === 'function' ? a : () => {}
  };
  return {
    'yearCard/pages/nfcVideo/components/specialBanner': (() => {
      var H = {};
      var S;
      var I = (P) => {
        if (!S) S = Object.assign({}, H);
        return S[P]
      };
      H[""] = (R, C, D, U) => {
        var L = R.c,
          M = R.m,
          O = R.r,
          A = {
            "margin": new Array(2),
            "duration": new Array(1),
            "current": new Array(1)
          },
          K = U === true,
          d = (C, e, f, g, h, i, T, E) => {
            var l = (C) => {},
              k = (C, T, E) => {
                E("image", {}, (N, C) => {
                  if (C) L(N, "slide-image data-v-ab1dd9de");
                  if (C || K || !!Z(Z(g, "$orig"), "url") || undefined) O(N, "src", X(X(e).$orig).url + "?imageView2/1/w/566/h/930");
                  if (C) O(N, "mode", "aspectFill");
                  if (C || K || undefined) O(N, "show-menu-by-longpress", true);
                  if (C) O(N, "bindtap", "__e");
                  if (C || K || Q.a([Q.a([Q.a([Q.a([Q.a([]), Q.a([Q.a([Q.a([h, ])])])])])])])) R.d(N, "eventOpts", [
                    ["tap", [
                      ["previewImg", ["$0"],
                        [
                          [
                            ["list", "", f, "url"]
                          ]
                        ]
                      ]
                    ]]
                  ], !0)
                }, l)
              },
              j = (C, T, E) => {
                E("view", {}, (N, C) => {
                  var $A = D.currentIndex === f;
                  var $B = X(e).m0;
                  var $C = X(e).m1;
                  if (C || K || Q.a([!!(U.currentIndex || h) || ($A ? undefined : undefined), !!Z(g, "m0") || ($B ? undefined : undefined), !!Z(g, "m1") || ($C ? undefined : undefined)])) L(N, ["slide-content", "data-v-ab1dd9de", $A ? "active" : "", $B ? "prev" : "", $C ? "next" : ""])
                }, k)
              };
            E("swiper-item", {}, (N, C) => {
              if (C) L(N, "swiper-item data-v-ab1dd9de")
            }, j);
            h = undefined;
            g = undefined
          },
          c = (C, T, E, B, F) => {
            F(X(D.$root).l0, "index", C || K ? undefined : Z(U.$root, "l0"), [0, "$root", "l0"], d)
          },
          b = (C, T, E) => {
            E("swiper", {}, (N, C) => {
              if (C) L(N, "stacked-swiper data-v-ab1dd9de");
              if (C || K || undefined) O(N, "circular", true);
              if (C || K || U.margin) O(N, "previous-margin", D.margin);
              A["margin"][0] = (D, E, T) => {
                O(N, "previous-margin", D.margin);
                E(N)
              };
              if (C || K || U.margin) O(N, "next-margin", D.margin);
              A["margin"][1] = (D, E, T) => {
                O(N, "next-margin", D.margin);
                E(N)
              };
              if (C || K || U.current) O(N, "current", D.current);
              A["current"][0] = (D, E, T) => {
                O(N, "current", D.current);
                E(N)
              };
              if (C || K || U.duration) O(N, "duration", D.duration);
              A["duration"][0] = (D, E, T) => {
                O(N, "duration", D.duration);
                E(N)
              };
              if (C) O(N, "bindchange", "__e");
              if (C || K || Q.a([Q.a([Q.a([Q.a([Q.a([])])])])])) R.d(N, "eventOpts", [
                ["change", [
                  ["handleChange", ["$event"]]
                ]]
              ], !0)
            }, c)
          },
          a = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "stacked-swiper-container data-v-ab1dd9de")
            }, b);
            C = !1;
            U = Object.create(null);
            K = !1
          };;
        return {
          C: a,
          B: A
        }
      };
      return Object.assign(function(R) {
        return H[R]
      }, {
        _: H
      })
    })(),
    'yearCard/pages/nfcVideo/dnfAlbum': (() => {
      var H = {};
      var S;
      var I = (P) => {
        if (!S) S = Object.assign({}, H);
        return S[P]
      };
      H[""] = (R, C, D, U) => {
        var L = R.c,
          M = R.m,
          O = R.r,
          A = {
            "mapH": new Array(2),
            "titleTop": new Array(1)
          },
          K = U === true,
          c, i = (C) => {},
          h = (C, T, E) => {
            E("image", {}, (N, C) => {
              if (C) L(N, "home-icon data-v-48502410");
              if (C) O(N, "src", "/static/zhouWei-navBar/icon_back_black.png")
            }, i)
          },
          g = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "home-btn data-v-48502410");
              if (C) O(N, "bindtap", "__e");
              if (C || K || Q.a([Q.a([Q.a([Q.a([Q.a([])])])])])) R.d(N, "eventOpts", [
                ["tap", [
                  ["pageBack", ["$event"]]
                ]]
              ], !0)
            }, h)
          },
          f = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "home-box data-v-48502410")
            }, g)
          },
          e = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "data-v-48502410")
            }, f, "transparentFixedLeft")
          },
          n = (C) => {},
          m = (C, T, E) => {
            E("image", {}, (N, C) => {
              if (C) L(N, "home-icon data-v-48502410");
              if (C) O(N, "src", "https://eshopfile.zhiyousx.com/2025111814064085921.png")
            }, n)
          },
          l = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "home-btn data-v-48502410");
              if (C) O(N, "bindtap", "__e");
              if (C || K || Q.a([Q.a([Q.a([Q.a([Q.a([])])])])])) R.d(N, "eventOpts", [
                ["tap", [
                  ["e0", ["$event"]]
                ]]
              ], !0)
            }, m)
          },
          k = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "home-box data-v-48502410")
            }, l)
          },
          j = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "data-v-48502410")
            }, k, "transparentFixedLeft")
          },
          d = (C, T, E) => {
            if (c === 1) {
              E("uni-navbar", {}, (N, C) => {
                if (C) L(N, "data-v-48502410");
                if (C) O(N, "vue-id", "053526b3-1");
                if (C) O(N, "type", "transparentFixed");
                if (C || K || Q.a([])) O(N, "vue-slots", ["transparentFixedLeft"]);
                if (C) R.v(N, "__l", "__l", !1, !1, !1, !1)
              }, e)
            } else {
              E("uni-navbar", {}, (N, C) => {
                if (C) L(N, "data-v-48502410");
                if (C) O(N, "vue-id", "053526b3-2");
                if (C) O(N, "type", "transparentFixed");
                if (C || K || Q.a([])) O(N, "vue-slots", ["transparentFixedLeft"]);
                if (C) R.v(N, "__l", "__l", !1, !1, !1, !1)
              }, j)
            }
          },
          o = (C) => {},
          q = (C) => {},
          t, v = (C) => {},
          w = (C) => {},
          u = (C, T, E) => {
            if (t === 1) {
              E("image", {}, (N, C) => {
                if (C) L(N, "tab-item data-v-48502410");
                if (C) R.y(N, "margin-right:28rpx;");
                if (C) O(N, "src", "https://eshopfile.zhiyousx.com/2026012116065069076.png");
                if (C) O(N, "mode", true);
                if (C) O(N, "bindtap", "__e");
                if (C || K || Q.a([Q.a([Q.a([Q.a([Q.a([])])])])])) R.d(N, "eventOpts", [
                  ["tap", [
                    ["changeTab", [1]]
                  ]]
                ], !0)
              }, v)
            } else {
              E("image", {}, (N, C) => {
                if (C) L(N, "tab-item data-v-48502410");
                if (C) R.y(N, "margin-right:28rpx;");
                if (C) O(N, "src", "https://eshopfile.zhiyousx.com/2026012116130568486.png");
                if (C) O(N, "mode", true);
                if (C) O(N, "bindtap", "__e");
                if (C || K || Q.a([Q.a([Q.a([Q.a([Q.a([])])])])])) R.d(N, "eventOpts", [
                  ["tap", [
                    ["changeTab", [1]]
                  ]]
                ], !0)
              }, w)
            }
          },
          x, z = (C) => {},
          A0 = (C) => {},
          y = (C, T, E) => {
            if (x === 1) {
              E("image", {}, (N, C) => {
                if (C) L(N, "tab-item data-v-48502410");
                if (C) O(N, "src", "https://eshopfile.zhiyousx.com/2026012116065653707.png");
                if (C) O(N, "mode", true);
                if (C) O(N, "bindtap", "__e");
                if (C || K || Q.a([Q.a([Q.a([Q.a([Q.a([])])])])])) R.d(N, "eventOpts", [
                  ["tap", [
                    ["changeTab", [2]]
                  ]]
                ], !0)
              }, z)
            } else {
              E("image", {}, (N, C) => {
                if (C) L(N, "tab-item data-v-48502410");
                if (C) O(N, "src", "https://eshopfile.zhiyousx.com/2026012116130338809.png");
                if (C) O(N, "mode", true);
                if (C) O(N, "bindtap", "__e");
                if (C || K || Q.a([Q.a([Q.a([Q.a([Q.a([])])])])])) R.d(N, "eventOpts", [
                  ["tap", [
                    ["changeTab", [2]]
                  ]]
                ], !0)
              }, A0)
            }
          },
          s = (C, T, E, B) => {
            t = D.tabId === 1 ? 1 : 0;
            B(t, u);
            x = D.tabId === 2 ? 1 : 0;
            B(x, y)
          },
          B0, E0 = (C) => {},
          F0 = (C, G0, H0, I0, J0, K0, T, E) => {
            var L0 = (C, T) => {
              C || K || !!Z(I0, "className") || undefined ? T(Y("" + X(G0).className + "")) : T()
            };
            E("view", {}, (N, C) => {
              var $A = D.fileClassId == X(G0).fileClassId;
              if (C || K || Q.a([!!(U.fileClassId || Z(I0, "fileClassId")) || ($A ? undefined : undefined)])) L(N, ["tab-item-sub", "data-v-48502410", $A ? "activeS" : ""]);
              if (C) O(N, "bindtap", "__e");
              if (C || K || Q.a([Q.a([Q.a([Q.a([Q.a([]), Q.a([Q.a([Q.a([J0])])])])])])])) R.d(N, "eventOpts", [
                ["tap", [
                  ["changeSub", ["$0"],
                    [
                      [
                        ["subList", "", H0]
                      ]
                    ]
                  ]
                ]]
              ], !0)
            }, L0);
            J0 = undefined;
            I0 = undefined
          },
          D0 = (C, T, E, B, F) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "tab-item-before data-v-48502410")
            }, E0);
            F(D.subList, "i", C || K ? undefined : U.subList, [0, "subList"], F0)
          },
          C0 = (C, T, E) => {
            if (B0 === 1) {
              E("scroll-view", {}, (N, C) => {
                if (C) L(N, "tab-box-sub data-v-48502410");
                if (C || K || undefined) O(N, "scroll-x", true);
                if (C || K || undefined) O(N, "scroll-with-animation", true);
                if (C || K || undefined) O(N, "show-scrollbar", false);
                if (C) O(N, "type", "list");
                if (C || K || undefined) O(N, "enable-flex", true)
              }, D0)
            }
          },
          r = (C, T, E, B) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "tab-box data-v-48502410")
            }, s);
            B0 = X(D.$root).g0 > 0 ? 1 : 0;
            B(B0, C0)
          },
          I0 = (C, J0, K0, L0, M0, N0, T, E) => {
            var O0 = (C) => {};
            E("image", {}, (N, C) => {
              if (C) L(N, "waterImg data-v-48502410");
              if (C || K || !!Z(L0, "heightStr") || undefined) R.y(N, "height:" + X(J0).heightStr + ";");
              if (C || K || Z(L0, "imageUrl")) O(N, "src", X(J0).imageUrl);
              if (C) O(N, "mode", "aspectFill");
              if (C || K || undefined) O(N, "lazy-load", true);
              if (C) O(N, "bindtap", "__e");
              if (C || K || Q.a([Q.a([Q.a([Q.a([Q.a([M0]), Q.a([Q.a([Q.a([M0])])])])])])])) R.d(N, "eventOpts", [
                ["tap", [
                  ["imgClick", ["$0", K0],
                    [
                      [
                        ["bannerList", "", K0]
                      ]
                    ]
                  ]
                ]]
              ], !0)
            }, O0);
            M0 = undefined;
            L0 = undefined
          },
          H0 = (C, T, E, B, F) => {
            F(D.bannerList, null, C || K ? undefined : U.bannerList, [0, "bannerList"], I0)
          },
          G0 = (C, T, E) => {
            E("grid-view", {}, (N, C) => {
              if (C) L(N, "data-v-48502410");
              if (C) O(N, "type", "masonry");
              if (C || K || undefined) O(N, "cross-axis-count", 2);
              if (C || K || U.mapH) O(N, "cross-axis-gap", D.mapH);
              A["mapH"][0] = (D, E, T) => {
                O(N, "cross-axis-gap", D.mapH);
                E(N)
              };
              if (C || K || U.mapH) O(N, "main-axis-gap", D.mapH);
              A["mapH"][1] = (D, E, T) => {
                O(N, "main-axis-gap", D.mapH);
                E(N)
              }
            }, H0)
          },
          J0, O0 = (C) => {},
          N0 = (C, T, E) => {
            E("special-banner", {}, (N, C) => {
              if (C) L(N, "data-v-48502410");
              if (C) O(N, "vue-id", "053526b3-3");
              if (C || K || U.swiperIndex) O(N, "current", D.swiperIndex);
              if (C || K || U.bannerList) O(N, "list", D.bannerList);
              if (C || K || undefined) O(N, "height", 932);
              if (C || K || undefined) O(N, "showNum", 3);
              if (C) O(N, "descAniType", "slideFromRight");
              if (C || K || Q.a([Q.a([Q.a([Q.a([])])])])) R.d(N, "eventOpts", [
                ["^change", [
                  ["swiperChangeEnd"]
                ]]
              ], !0);
              if (C) R.v(N, "change", "__e", !1, !1, !1, !1);
              if (C) R.v(N, "__l", "__l", !1, !1, !1, !1)
            }, O0)
          },
          P0 = (C) => {},
          M0 = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "swiper-List data-v-48502410")
            }, N0);
            E("image", {}, (N, C) => {
              if (C) L(N, "download-btn data-v-48502410");
              if (C) O(N, "src", "https://eshopfile.zhiyousx.com/2026012116064712243.png");
              if (C) O(N, "mode", "aspectFill");
              if (C) O(N, "bindtap", "__e");
              if (C || K || Q.a([Q.a([Q.a([Q.a([])])])])) R.d(N, "eventOpts", [
                ["tap", [
                  ["download"]
                ]]
              ], !0)
            }, P0)
          },
          L0 = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "swiper-bg data-v-48502410")
            }, M0)
          },
          K0 = (C, T, E) => {
            if (J0 === 1) {
              E("view", {}, (N, C) => {
                if (C) L(N, "swiper-container data-v-48502410")
              }, L0)
            }
          },
          p = (C, T, E, B) => {
            E("image", {}, (N, C) => {
              if (C) L(N, "logo data-v-48502410");
              if (C) O(N, "src", "https://eshopfile.zhiyousx.com/2026012116053458845.png");
              if (C) O(N, "mode", "aspectFill")
            }, q);
            E("view", {}, (N, C) => {
              if (C) L(N, "top-box data-v-48502410");
              if (C || K || !!U.showSwiper || undefined) O(N, "hidden", !!D.showSwiper)
            }, r);
            E("scroll-view", {}, (N, C) => {
              var $A = D.showSwiper;
              if (C || K || Q.a([!!U.showSwiper || ($A ? undefined : undefined)])) L(N, ["waterfall", "data-v-48502410", $A ? "waterfallHide" : ""]);
              if (C || K || !!U.titleTop || undefined) R.y(N, "height:" + ("calc(100% - " + D.titleTop + ")") + ";");
              A["titleTop"][0] = (D, E, T) => {
                R.y(N, "height:" + ("calc(100% - " + D.titleTop + ")") + ";")
              };
              if (C || K || undefined) O(N, "scroll-y", true);
              if (C || K || undefined) O(N, "show-scrollbar", false);
              if (C) O(N, "type", "custom")
            }, G0);
            J0 = D.showSwiper ? 1 : 0;
            B(J0, K0)
          },
          b = (C, T, E, B) => {
            c = !D.showSwiper ? 1 : 0;
            B(c, d);
            E("image", {}, (N, C) => {
              if (C) L(N, "page-bg data-v-48502410");
              if (C) O(N, "src", "https://eshopfile.zhiyousx.com/2026012116045789227.jpg");
              if (C) O(N, "mode", "aspectFill")
            }, o);
            E("view", {}, (N, C) => {
              if (C) L(N, "bg-box data-v-48502410")
            }, p)
          },
          a = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "page-box data-v-48502410")
            }, b);
            C = !1;
            U = Object.create(null);
            K = !1
          };;
        return {
          C: a,
          B: A
        }
      };
      return Object.assign(function(R) {
        return H[R]
      }, {
        _: H
      })
    })(),
  }
});;
__wxRoute = "yearCard/pages/nfcVideo/components/specialBanner";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "yearCard/pages/nfcVideo/components/specialBanner.js";
define("yearCard/pages/nfcVideo/components/specialBanner.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["yearCard/pages/nfcVideo/components/specialBanner"], {
      "0814": function(e, n, t) {
        t.r(n);
        var r = t("14bb"),
          a = t("326b");
        for (var c in a)["default"].indexOf(c) < 0 && function(e) {
          t.d(n, e, (function() {
            return a[e]
          }))
        }(c);
        t("1b8c");
        var i = t("828b"),
          o = Object(i.a)(a.default, r.b, r.c, !1, null, "ab1dd9de", null, !1, r.a, void 0);
        n.default = o.exports
      },
      "14bb": function(e, n, t) {
        t.d(n, "b", (function() {
          return r
        })), t.d(n, "c", (function() {
          return a
        })), t.d(n, "a", (function() {}));
        var r = function() {
            var e = this,
              n = (e.$createElement, e._self._c, e.__map(e.list, (function(n, t) {
                return {
                  $orig: e.__get_orig(n),
                  m0: e.isPrev(t),
                  m1: e.isNext(t)
                }
              })));
            e.$mp.data = Object.assign({}, {
              $root: {
                l0: n
              }
            })
          },
          a = []
      },
      "1b8c": function(e, n, t) {
        var r = t("9d28");
        t.n(r).a
      },
      "326b": function(e, n, t) {
        t.r(n);
        var r = t("7252"),
          a = t.n(r);
        for (var c in r)["default"].indexOf(c) < 0 && function(e) {
          t.d(n, e, (function() {
            return r[e]
          }))
        }(c);
        n.default = a.a
      },
      7252: function(e, n, t) {
        (function(e) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = void 0;
          var t = {
            name: "StackedSwiper",
            props: {
              list: {
                type: Array,
                default: function() {
                  return []
                }
              },
              duration: {
                type: Number,
                default: 500
              },
              current: {
                type: Number,
                default: 0
              }
            },
            watch: {
              current: {
                immediate: !0,
                handler: function(e) {
                  this.currentIndex = e
                }
              }
            },
            data: function() {
              return {
                currentIndex: 0,
                margin: "100rpx"
              }
            },
            methods: {
              handleChange: function(e) {
                this.currentIndex = e.detail.current, this.$emit("change", e.detail.current)
              },
              isPrev: function(e) {
                var n = this.list.length;
                return !(n <= 1) && (this.currentIndex - 1 + n) % n === e
              },
              isNext: function(e) {
                var n = this.list.length;
                return !(n <= 1) && (this.currentIndex + 1) % n === e
              },
              previewImg: function(n) {
                e.previewImage({
                  current: 1,
                  urls: [n]
                })
              }
            }
          };
          n.default = t
        }).call(this, t("df3c").default)
      },
      "9d28": function(e, n, t) {}
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["yearCard/pages/nfcVideo/components/specialBanner-create-component", {
      "yearCard/pages/nfcVideo/components/specialBanner-create-component": function(e, n, t) {
        t("df3c").createComponent(t("0814"))
      }
    },
    [
      ["yearCard/pages/nfcVideo/components/specialBanner-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'yearCard/pages/nfcVideo/components/specialBanner.js'
});
require("yearCard/pages/nfcVideo/components/specialBanner.js");;
__wxRoute = "yearCard/pages/nfcVideo/dnfAlbum";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "yearCard/pages/nfcVideo/dnfAlbum.js";
define("yearCard/pages/nfcVideo/dnfAlbum.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["yearCard/pages/nfcVideo/dnfAlbum"], {
      "0156": function(t, e, i) {
        (function(t, n) {
          var a = i("47a9");
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var s = a(i("7eb4")),
            r = a(i("ee10")),
            c = {
              components: {
                specialBanner: function() {
                  i.e("yearCard/pages/nfcVideo/components/specialBanner").then(function() {
                    return resolve(i("0814"))
                  }.bind(null, i)).catch(i.oe)
                }
              },
              data: function() {
                return {
                  curIndex: 0,
                  listLen: 6,
                  titleTop: 0,
                  swiperIndex: 0,
                  mapH: 10,
                  currentData: "",
                  showSwiper: !1,
                  routes: [],
                  bannerList: [],
                  tabId: 1,
                  fileClassId: "",
                  subList: [{
                    className: "全部",
                    fileClassId: ""
                  }, {
                    fileClassId: 1,
                    className: "跃马迎春来"
                  }, {
                    fileClassId: 2,
                    className: "鼓舞新春"
                  }, {
                    fileClassId: 3,
                    className: "唐诗长廊"
                  }, {
                    fileClassId: 4,
                    className: "翼马当先"
                  }],
                  nfcActivityId: 5
                }
              },
              onLoad: function(e) {
                t.getMenuButtonBoundingClientRect(), this.titleTop = "418rpx", this.subHideHeight = "418rpx", this.subShowHeight = "358rpx", this.routes = getCurrentPages(), this.getClassList(), this.getImgList()
              },
              onShow: function() {},
              methods: {
                imgClick: function(t, e) {
                  if (1 === t.fileType) this.currentData = t, this.showSwiper = !0, this.swiperIndex = e;
                  else {
                    var i = this.bannerList.map((function(t) {
                      return {
                        url: t.url,
                        type: "video",
                        poster: t.coverImage || "".concat(t.url, "?vframe/jpg/offset/0")
                      }
                    }));
                    n.previewMedia({
                      sources: i,
                      current: e
                    })
                  }
                },
                swiperChange: function(t) {
                  this.curIndex = t.detail.current
                },
                swiperChangeEnd: function(t) {
                  this.currentData = this.bannerList[t], console.log(this.currentData)
                },
                download: function() {
                  var e = this;
                  return (0, r.default)(s.default.mark((function i() {
                    var n, a;
                    return s.default.wrap((function(i) {
                      for (;;) switch (i.prev = i.next) {
                        case 0:
                          return i.next = 2, t.showLoading({
                            title: "下载中"
                          });
                        case 2:
                          return i.next = 4, t.downloadFile({
                            url: e.currentData.url
                          });
                        case 4:
                          return n = i.sent, a = n[1].tempFilePath, i.next = 8, t.saveImageToPhotosAlbum({
                            filePath: a
                          });
                        case 8:
                          return i.sent, t.hideLoading(), i.next = 12, t.showToast({
                            title: "下载成功"
                          });
                        case 12:
                        case "end":
                          return i.stop()
                      }
                    }), i)
                  })))()
                },
                pageBack: function() {
                  1 == this.routes.length ? t.redirectTo({
                    url: "/yearCard/pages/nfcVideo/jz"
                  }) : t.navigateBack()
                },
                changeTab: function(t) {
                  t != this.tabId && (this.tabId = t, this.fileClassId = "", this.subList = [], this.bannerList = [], 1 == this.tabId ? this.getClassList() : this.titleTop = this.subHideHeight, this.showSwiper = !1, this.getImgList())
                },
                getClassList: function() {
                  var t = this;
                  this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/nfc/skiing/file/class/selectClassHaveFile", {
                    fileType: this.tabId,
                    nfcActivityId: this.nfcActivityId
                  }).then((function(e) {
                    if (1 === e.code) {
                      var i = e.data || [];
                      i.length > 0 ? (i.unshift({
                        fileClassId: "",
                        className: "全部"
                      }), t.titleTop = t.subShowHeight) : t.titleTop = t.subHideHeight, t.subList = i
                    }
                  }))
                },
                changeSub: function(t) {
                  t.fileClassId != this.fileClassId && (this.fileClassId = t.fileClassId, this.bannerList = [], this.getImgList())
                },
                getImgList: function() {
                  var t = this;
                  this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/nfc/skiing/file/selectList", {
                    fileSource: 1,
                    fileClassId: this.fileClassId,
                    fileType: this.tabId,
                    nfcActivityId: this.nfcActivityId
                  }).then((function(e) {
                    if (1 === e.code) {
                      var i = e.data || [];
                      i.forEach((function(e, i) {
                        1 == t.tabId ? e.imageUrl = "".concat(e.url, "?imageView2/2/w/346") : e.coverImage ? e.imageUrl = "".concat(e.coverImage, "?imageView2/2/w/346") : e.imageUrl = "".concat(e.url, "?vframe/jpg/offset/0"), e.heightStr = e.height / e.width * 346 + "rpx"
                      })), t.bannerList = i
                    }
                  }))
                }
              }
            };
          e.default = c
        }).call(this, i("df3c").default, i("3223").default)
      },
      "0669": function(t, e, i) {
        i.r(e);
        var n = i("9c00"),
          a = i("77a6");
        for (var s in a)["default"].indexOf(s) < 0 && function(t) {
          i.d(e, t, (function() {
            return a[t]
          }))
        }(s);
        i("7970"), i("cd8d");
        var r = i("828b"),
          c = Object(r.a)(a.default, n.b, n.c, !1, null, "48502410", null, !1, n.a, void 0);
        e.default = c.exports
      },
      "0d32": function(t, e, i) {},
      "77a6": function(t, e, i) {
        i.r(e);
        var n = i("0156"),
          a = i.n(n);
        for (var s in n)["default"].indexOf(s) < 0 && function(t) {
          i.d(e, t, (function() {
            return n[t]
          }))
        }(s);
        e.default = a.a
      },
      7970: function(t, e, i) {
        var n = i("aba5");
        i.n(n).a
      },
      "9c00": function(t, e, i) {
        i.d(e, "b", (function() {
          return a
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
          a = function() {
            var t = this,
              e = (t.$createElement, t._self._c, t.subList.length);
            t._isMounted || (t.e0 = function(e) {
              t.showSwiper = !1
            }), t.$mp.data = Object.assign({}, {
              $root: {
                g0: e
              }
            })
          },
          s = []
      },
      aba5: function(t, e, i) {},
      cd8d: function(t, e, i) {
        var n = i("0d32");
        i.n(n).a
      },
      cf06f: function(t, e, i) {
        (function(t, e) {
          var n = i("47a9");
          i("5366"), n(i("3240"));
          var a = n(i("0669"));
          t.__webpack_require_UNI_MP_PLUGIN__ = i, e(a.default)
        }).call(this, i("3223").default, i("df3c").createPage)
      }
    },
    [
      ["cf06f", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'yearCard/pages/nfcVideo/dnfAlbum.js'
});
require("yearCard/pages/nfcVideo/dnfAlbum.js");
