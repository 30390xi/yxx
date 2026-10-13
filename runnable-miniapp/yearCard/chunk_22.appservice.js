__wxCodeSpace__.batchAddCompiledTemplate(function(G, R, D, Q, gdc, X, Y, Z, RG = {}) {
  var P = RG.P || function(a) {
    return typeof a === 'function' ? a : () => {}
  };
  return {
    'yearCard/pages/teamNFC/album': (() => {
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
            "paddingTop": new Array(1)
          },
          K = U === true,
          c, h = (C) => {},
          g = (C, T, E) => {
            E("image", {}, (N, C) => {
              if (C) L(N, "home-icon data-v-4d0e896b");
              if (C) O(N, "src", "/static/zhouWei-navBar/icon_back_black.png")
            }, h)
          },
          f = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "home-btn data-v-4d0e896b");
              if (C) O(N, "bindtap", "__e");
              if (C || K || Q.a([Q.a([Q.a([Q.a([Q.a([])])])])])) R.d(N, "eventOpts", [
                ["tap", [
                  ["pageBack", ["$event"]]
                ]]
              ], !0)
            }, g)
          },
          e = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "data-v-4d0e896b")
            }, f, "transparentFixedLeft")
          },
          l = (C) => {},
          k = (C, T, E) => {
            E("image", {}, (N, C) => {
              if (C) L(N, "home-icon data-v-4d0e896b");
              if (C) O(N, "src", "https://eshopfile.zhiyousx.com/2025111814064085921.png")
            }, l)
          },
          j = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "home-btn data-v-4d0e896b");
              if (C) O(N, "bindtap", "__e");
              if (C || K || Q.a([Q.a([Q.a([Q.a([Q.a([])])])])])) R.d(N, "eventOpts", [
                ["tap", [
                  ["e0", ["$event"]]
                ]]
              ], !0)
            }, k)
          },
          i = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "data-v-4d0e896b")
            }, j, "transparentFixedLeft")
          },
          d = (C, T, E) => {
            if (c === 1) {
              E("uni-navbar", {}, (N, C) => {
                if (C) L(N, "data-v-4d0e896b");
                if (C) O(N, "vue-id", "3b45de52-1");
                if (C) O(N, "type", "transparentFixed");
                if (C) O(N, "transparentFixedFontColor", "#ffffff");
                if (C || K || undefined) O(N, "titleCenter", false);
                if (C) O(N, "title", "相册");
                if (C || K || Q.a([])) O(N, "vue-slots", ["transparentFixedLeft"]);
                if (C) R.v(N, "__l", "__l", !1, !1, !1, !1)
              }, e)
            } else {
              E("uni-navbar", {}, (N, C) => {
                if (C) L(N, "data-v-4d0e896b");
                if (C) O(N, "vue-id", "3b45de52-2");
                if (C) O(N, "type", "transparentFixed");
                if (C) O(N, "transparentFixedFontColor", "#ffffff");
                if (C || K || undefined) O(N, "titleCenter", false);
                if (C) O(N, "title", "相册");
                if (C || K || Q.a([])) O(N, "vue-slots", ["transparentFixedLeft"]);
                if (C) R.v(N, "__l", "__l", !1, !1, !1, !1)
              }, i)
            }
          },
          o = (C, p, q, r, s, t, T, E) => {
            var u = (C, T) => {
              C || K || !!Z(r, "className") || undefined ? T(Y("" + X(p).className + "")) : T()
            };
            E("view", {}, (N, C) => {
              var $A = D.tabId == X(p).classId;
              if (C || K || Q.a([!!(U.tabId || Z(r, "classId")) || ($A ? undefined : undefined)])) L(N, ["tab-item", "data-v-4d0e896b", $A ? "active" : ""]);
              if (C) O(N, "bindtap", "__e");
              if (C || K || Q.a([Q.a([Q.a([Q.a([Q.a([]), Q.a([Q.a([Q.a([s])])])])])])])) R.d(N, "eventOpts", [
                ["tap", [
                  ["changeTab", ["$0"],
                    [
                      [
                        ["tabList", "", q]
                      ]
                    ]
                  ]
                ]]
              ], !0)
            }, u);
            s = undefined;
            r = undefined
          },
          n = (C, T, E, B, F) => {
            F(D.tabList, "i", C || K ? undefined : U.tabList, [0, "tabList"], o)
          },
          m = (C, T, E) => {
            E("scroll-view", {}, (N, C) => {
              if (C) L(N, "tab-box data-v-4d0e896b");
              if (C || K || undefined) O(N, "scroll-x", true);
              if (C || K || undefined) O(N, "scroll-with-animation", true);
              if (C || K || undefined) O(N, "show-scrollbar", false);
              if (C) O(N, "type", "list");
              if (C || K || undefined) O(N, "enable-flex", true)
            }, n)
          },
          r, u = (C) => {},
          v = (C, T) => {
            C || K || !!Z(U.tabIt, "time1") || undefined ? T(Y("" + X(D.tabIt).time1 + "")) : T()
          },
          w = (C) => {},
          x = (C, T) => {
            C || K || !!Z(U.tabIt, "time2") || undefined ? T(Y("" + X(D.tabIt).time2 + "")) : T()
          },
          y = (C) => {},
          z = (C, T) => {
            C || K || !!Z(U.tabIt, "address1") || undefined ? T(Y("" + X(D.tabIt).address1 + "")) : T()
          },
          A0 = (C, T) => {
            C || K || !!Z(U.tabIt, "address2") || undefined ? T(Y("" + X(D.tabIt).address2 + "")) : T()
          },
          t = (C, T, E) => {
            E("image", {}, (N, C) => {
              if (C) L(N, "icon1 data-v-4d0e896b");
              if (C) O(N, "src", "https://eshopfile.zhiyousx.com/2025111810235716143.png");
              if (C) O(N, "mode", "aspectFill")
            }, u);
            E("view", {}, (N, C) => {
              if (C) L(N, "text-nor data-v-4d0e896b")
            }, v);
            E("view", {}, (N, C) => {
              if (C) L(N, "line1 data-v-4d0e896b")
            }, w);
            E("view", {}, (N, C) => {
              if (C) L(N, "text-nor data-v-4d0e896b");
              if (C) R.y(N, "width:fit-content;")
            }, x);
            E("image", {}, (N, C) => {
              if (C) L(N, "icon2 data-v-4d0e896b");
              if (C) O(N, "src", "https://eshopfile.zhiyousx.com/2025111810240187552.png");
              if (C) O(N, "mode", "aspectFill")
            }, y);
            E("view", {}, (N, C) => {
              if (C) L(N, "text-nor data-v-4d0e896b")
            }, z);
            E("view", {}, (N, C) => {
              if (C) L(N, "text-nor line data-v-4d0e896b")
            }, A0)
          },
          s = (C, T, E) => {
            if (r === 1) {
              E("view", {}, (N, C) => {
                if (C) L(N, "class-top-box data-v-4d0e896b")
              }, t)
            }
          },
          B0 = (C, C0, D0, E0, F0, G0, T, E) => {
            var H0 = (C) => {};
            E("image", {}, (N, C) => {
              if (C) L(N, "waterImg data-v-4d0e896b");
              if (C || K || !!(Z(E0, "height") || Z(E0, "width")) || undefined) R.y(N, "height:" + (X(C0).height / X(C0).width * 266 + "rpx") + ";");
              if (C || K || !!Z(E0, "url") || undefined) O(N, "src", X(C0).url + "?imageView2/2/w/200");
              if (C) O(N, "mode", "aspectFill");
              if (C) O(N, "bindtap", "__e");
              if (C || K || Q.a([Q.a([Q.a([Q.a([Q.a([F0]), Q.a([Q.a([Q.a([F0])])])])])])])) R.d(N, "eventOpts", [
                ["tap", [
                  ["imgClick", ["$0", D0],
                    [
                      [
                        ["cardList", "", D0]
                      ]
                    ]
                  ]
                ]]
              ], !0)
            }, H0);
            F0 = undefined;
            E0 = undefined
          },
          q = (C, T, E, B, F) => {
            r = D.tabId != "" ? 1 : 0;
            B(r, s);
            F(D.cardList, null, C || K ? undefined : U.cardList, [0, "cardList"], B0)
          },
          p = (C, T, E) => {
            E("grid-view", {}, (N, C) => {
              if (C) L(N, "data-v-4d0e896b");
              if (C) O(N, "type", "masonry");
              if (C || K || undefined) O(N, "cross-axis-count", 3);
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
            }, q)
          },
          C0, G0 = (C) => {},
          I0 = (C) => {},
          H0 = (C, T, E) => {
            E("special-banner", {}, (N, C) => {
              if (C) L(N, "data-v-4d0e896b");
              if (C) O(N, "vue-id", "3b45de52-3");
              if (C || K || U.bannerList) O(N, "banner-list", D.bannerList);
              if (C || K || U.swiperIndex) O(N, "current", D.swiperIndex);
              if (C || K || Q.a([Q.a([Q.a([Q.a([])])])])) R.d(N, "eventOpts", [
                ["^swiperChangeEnd", [
                  ["swiperChangeEnd"]
                ]]
              ], !0);
              if (C) R.v(N, "swiperChangeEnd", "__e", !1, !1, !1, !1);
              if (C) R.v(N, "__l", "__l", !1, !1, !1, !1)
            }, I0)
          },
          L0 = (C) => {},
          K0 = (C, T, E) => {
            E("image", {}, (N, C) => {
              if (C) L(N, "data-v-4d0e896b");
              if (C) O(N, "src", "https://eshopfile.zhiyousx.com/2025111710522314169.png");
              if (C) O(N, "mode", "aspectFill")
            }, L0);
            C ? T("分享") : T()
          },
          N0 = (C) => {},
          M0 = (C, T, E) => {
            E("image", {}, (N, C) => {
              if (C) L(N, "data-v-4d0e896b");
              if (C) O(N, "src", "https://eshopfile.zhiyousx.com/2025111710521966552.png");
              if (C) O(N, "mode", "aspectFill")
            }, N0);
            C ? T("原图") : T()
          },
          J0 = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "btn allcenter data-v-4d0e896b");
              if (C) O(N, "bindtap", "__e");
              if (C || K || Q.a([Q.a([Q.a([Q.a([])])])])) R.d(N, "eventOpts", [
                ["tap", [
                  ["shareImg"]
                ]]
              ], !0)
            }, K0);
            E("view", {}, (N, C) => {
              if (C) L(N, "btn allcenter btn-last data-v-4d0e896b");
              if (C) O(N, "bindtap", "__e");
              if (C || K || Q.a([Q.a([Q.a([Q.a([])])])])) R.d(N, "eventOpts", [
                ["tap", [
                  ["download"]
                ]]
              ], !0)
            }, M0)
          },
          F0 = (C, T, E) => {
            E("image", {}, (N, C) => {
              if (C) L(N, "bg-img data-v-4d0e896b");
              if (C) O(N, "src", "https://eshopfile.zhiyousx.com/2025111710272575810.png");
              if (C) O(N, "mode", "aspectFill")
            }, G0);
            E("view", {}, (N, C) => {
              if (C) L(N, "swiper-List data-v-4d0e896b")
            }, H0);
            E("view", {}, (N, C) => {
              if (C) L(N, "btns allcenter data-v-4d0e896b")
            }, J0)
          },
          E0 = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "swiper-bg data-v-4d0e896b")
            }, F0)
          },
          D0 = (C, T, E) => {
            if (C0 === 1) {
              E("view", {}, (N, C) => {
                if (C) L(N, "swiper-container data-v-4d0e896b");
                if (C || K || !!(U.tabH || U.tabH) || undefined) R.y(N, "height:" + ("calc(100% - " + D.tabH + "rpx)") + ";" + ("top:" + (D.tabH + "rpx") + ";"))
              }, E0)
            }
          },
          b = (C, T, E, B) => {
            c = !D.showSwiper ? 1 : 0;
            B(c, d);
            E("view", {}, (N, C) => {
              if (C) L(N, "top-box data-v-4d0e896b");
              if (C || K || !!U.paddingTop || undefined) R.y(N, "padding-top:" + (D.paddingTop + "rpx") + ";");
              A["paddingTop"][0] = (D, E, T) => {
                R.y(N, "padding-top:" + (D.paddingTop + "rpx") + ";")
              }
            }, m);
            E("scroll-view", {}, (N, C) => {
              var $A = D.showSwiper;
              if (C || K || Q.a([!!U.showSwiper || ($A ? undefined : undefined)])) L(N, ["waterfall", "data-v-4d0e896b", $A ? "waterfallHide" : ""]);
              if (C || K || !!U.tabH || undefined) R.y(N, "height:" + ("calc(100% - " + D.tabH + "rpx)") + ";");
              if (C || K || undefined) O(N, "scroll-y", true);
              if (C || K || undefined) O(N, "show-scrollbar", false);
              if (C) O(N, "type", "custom")
            }, p);
            C0 = D.showSwiper ? 1 : 0;
            B(C0, D0)
          },
          a = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "page-box data-v-4d0e896b")
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
    'yearCard/pages/teamNFC/components/specialBanner': (() => {
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
            "current": new Array(1),
            "swiperConfig": new Array(9)
          },
          K = U === true,
          d = (C, e, f, g, h, i, T, E) => {
            var l = (C) => {},
              k = (C, T, E) => {
                E("image", {}, (N, C) => {
                  if (C) L(N, "slide-image data-v-f24707f0");
                  if (C || K || !!Z(g, "url") || undefined) O(N, "src", X(e).url + "?imageView2/1/w/566/h/792");
                  if (C) O(N, "mode", "aspectFill");
                  if (C || K || undefined) O(N, "show-menu-by-longpress", true);
                  if (C) O(N, "bindtap", "__e");
                  if (C || K || Q.a([Q.a([Q.a([Q.a([Q.a([]), Q.a([Q.a([Q.a([h, ])])])])])])])) R.d(N, "eventOpts", [
                    ["tap", [
                      ["previewImg", ["$0"],
                        [
                          [
                            ["bannerList", "", f, "url"]
                          ]
                        ]
                      ]
                    ]]
                  ], !0)
                }, l)
              },
              j = (C, T, E) => {
                E("view", {}, (N, C) => {
                  var $A = D.curIndex === 0;
                  var $B = f === D.listLen - 1;
                  var $C = f === 1;
                  var $D = D.curIndex === D.listLen - 1;
                  var $E = f === 0;
                  var $F = f === D.listLen - 2;
                  var $G = f === D.curIndex - 1;
                  var $H = f === D.curIndex + 1;
                  if (C || K || Q.a([!!U.curIndex || ($A ? !!(h || U.listLen) || ($B ? undefined : !!h || ($C ? undefined : undefined)) : !!(U.curIndex || U.listLen) || ($D ? !!h || ($E ? undefined : !!(h || U.listLen) || ($F ? undefined : undefined)) : !!(h || U.curIndex) || ($G ? undefined : !!(h || U.curIndex) || ($H ? undefined : undefined))))])) L(N, ["image-container", "_div", "data-v-f24707f0", $A ? $B ? "item-left" : $C ? "item-right" : "item-center" : $D ? $E ? "item-right" : $F ? "item-left" : "item-center" : $G ? "item-left" : $H ? "item-right" : "item-center"])
                }, k)
              };
            E("swiper-item", {}, (N, C) => {
              if (C) L(N, "data-v-f24707f0")
            }, j);
            h = undefined;
            g = undefined
          },
          c = (C, T, E, B, F) => {
            F(D.bannerList, "i", C || K ? undefined : U.bannerList, [0, "bannerList"], d)
          },
          b = (C, T, E) => {
            E("swiper", {}, (N, C) => {
              if (C) L(N, "data-v-f24707f0");
              if (C || K || undefined) R.y(N, "width:" + "100vw" + ";" + ("height:" + "792rpx" + ";"));
              if (C || K || Z(U.swiperConfig, "indicatorDots")) O(N, "indicator-dots", X(D.swiperConfig).indicatorDots);
              A["swiperConfig"][0] = (D, E, T) => {
                O(N, "indicator-dots", X(D.swiperConfig).indicatorDots);
                E(N)
              };
              if (C || K || Z(U.swiperConfig, "indicatorColor")) O(N, "indicator-color", X(D.swiperConfig).indicatorColor);
              A["swiperConfig"][1] = (D, E, T) => {
                O(N, "indicator-color", X(D.swiperConfig).indicatorColor);
                E(N)
              };
              if (C || K || Z(U.swiperConfig, "indicatorActiveColor")) O(N, "indicator-active-color", X(D.swiperConfig).indicatorActiveColor);
              A["swiperConfig"][2] = (D, E, T) => {
                O(N, "indicator-active-color", X(D.swiperConfig).indicatorActiveColor);
                E(N)
              };
              if (C || K || Z(U.swiperConfig, "autoplay")) O(N, "autoplay", X(D.swiperConfig).autoplay);
              A["swiperConfig"][3] = (D, E, T) => {
                O(N, "autoplay", X(D.swiperConfig).autoplay);
                E(N)
              };
              if (C || K || Z(U.swiperConfig, "interval")) O(N, "interval", X(D.swiperConfig).interval);
              A["swiperConfig"][4] = (D, E, T) => {
                O(N, "interval", X(D.swiperConfig).interval);
                E(N)
              };
              if (C || K || Z(U.swiperConfig, "duration")) O(N, "duration", X(D.swiperConfig).duration);
              A["swiperConfig"][5] = (D, E, T) => {
                O(N, "duration", X(D.swiperConfig).duration);
                E(N)
              };
              if (C || K || Z(U.swiperConfig, "circular")) O(N, "circular", X(D.swiperConfig).circular);
              A["swiperConfig"][6] = (D, E, T) => {
                O(N, "circular", X(D.swiperConfig).circular);
                E(N)
              };
              if (C || K || Z(U.swiperConfig, "previousMargin")) O(N, "previous-margin", X(D.swiperConfig).previousMargin);
              A["swiperConfig"][7] = (D, E, T) => {
                O(N, "previous-margin", X(D.swiperConfig).previousMargin);
                E(N)
              };
              if (C || K || Z(U.swiperConfig, "nextMargin")) O(N, "next-margin", X(D.swiperConfig).nextMargin);
              A["swiperConfig"][8] = (D, E, T) => {
                O(N, "next-margin", X(D.swiperConfig).nextMargin);
                E(N)
              };
              if (C || K || U.current) O(N, "current", D.current);
              A["current"][0] = (D, E, T) => {
                O(N, "current", D.current);
                E(N)
              };
              if (C) O(N, "bindchange", "__e");
              if (C) O(N, "bindanimationfinish", "__e");
              if (C || K || Q.a([Q.a([Q.a([Q.a([Q.a([])])])]), Q.a([Q.a([Q.a([Q.a([])])])])])) R.d(N, "eventOpts", [
                ["change", [
                  ["swiperChange", ["$event"]]
                ]],
                ["animationfinish", [
                  ["animationfinish", ["$event"]]
                ]]
              ], !0)
            }, c)
          },
          a = (C, T, E) => {
            E("view", {}, (N, C) => {
              if (C) L(N, "banner-container _div data-v-f24707f0")
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
__wxRoute = "yearCard/pages/teamNFC/components/specialBanner";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "yearCard/pages/teamNFC/components/specialBanner.js";
define("yearCard/pages/teamNFC/components/specialBanner.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["yearCard/pages/teamNFC/components/specialBanner"], {
      "1bc8": function(n, e, t) {
        (function(n) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var t = {
            props: {
              bannerList: {
                type: Array,
                default: function() {
                  return []
                }
              },
              current: {
                type: Number,
                default: function() {
                  return 0
                }
              }
            },
            computed: {
              listLen: function() {
                return this.bannerList.length
              }
            },
            data: function() {
              return {
                curIndex: 0,
                isDescAnimating: !1,
                swiperConfig: {
                  indicatorDots: !1,
                  indicatorColor: "rgba(255, 255, 255, .4)",
                  indicatorActiveColor: "rgba(255, 255, 255, 1)",
                  autoplay: !1,
                  interval: 3e3,
                  duration: 300,
                  circular: !0,
                  previousMargin: this.$util.rpxToPx(70) + "px",
                  nextMargin: this.$util.rpxToPx(70) + "px"
                }
              }
            },
            methods: {
              swiperChange: function(n) {
                this.curIndex = n.mp.detail.current, this.isDescAnimating = !0, this.$emit("swiperChangeEnd", this.bannerList[this.curIndex])
              },
              animationfinish: function(n) {
                this.isDescAnimating = !1
              },
              previewImg: function(e) {
                n.previewImage({
                  current: 1,
                  urls: [e]
                })
              }
            }
          };
          e.default = t
        }).call(this, t("df3c").default)
      },
      "23ac": function(n, e, t) {
        t.d(e, "b", (function() {
          return a
        })), t.d(e, "c", (function() {
          return r
        })), t.d(e, "a", (function() {}));
        var a = function() {
            this.$createElement;
            this._self._c
          },
          r = []
      },
      "3c1a": function(n, e, t) {},
      "89bc": function(n, e, t) {
        t.r(e);
        var a = t("1bc8"),
          r = t.n(a);
        for (var i in a)["default"].indexOf(i) < 0 && function(n) {
          t.d(e, n, (function() {
            return a[n]
          }))
        }(i);
        e.default = r.a
      },
      a77c: function(n, e, t) {
        var a = t("3c1a");
        t.n(a).a
      },
      e09a: function(n, e, t) {
        t.r(e);
        var a = t("23ac"),
          r = t("89bc");
        for (var i in r)["default"].indexOf(i) < 0 && function(n) {
          t.d(e, n, (function() {
            return r[n]
          }))
        }(i);
        t("a77c");
        var c = t("828b"),
          o = Object(c.a)(r.default, a.b, a.c, !1, null, "f24707f0", null, !1, a.a, void 0);
        e.default = o.exports
      }
    }
  ]), (global.webpackJsonp = global.webpackJsonp || []).push(["yearCard/pages/teamNFC/components/specialBanner-create-component", {
      "yearCard/pages/teamNFC/components/specialBanner-create-component": function(n, e, t) {
        t("df3c").createComponent(t("e09a"))
      }
    },
    [
      ["yearCard/pages/teamNFC/components/specialBanner-create-component"]
    ]
  ]);
}, {
  isPage: false,
  isComponent: true,
  currentFile: 'yearCard/pages/teamNFC/components/specialBanner.js'
});
require("yearCard/pages/teamNFC/components/specialBanner.js");;
__wxRoute = "yearCard/pages/teamNFC/album";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "yearCard/pages/teamNFC/album.js";
define("yearCard/pages/teamNFC/album.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";
  require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
    ["yearCard/pages/teamNFC/album"], {
      "244b": function(e, t, n) {
        var a = n("c4e9");
        n.n(a).a
      },
      "24ee": function(e, t, n) {
        var a = n("b0d9");
        n.n(a).a
      },
      "2d3f": function(e, t, n) {
        n.d(t, "b", (function() {
          return i
        })), n.d(t, "c", (function() {
          return r
        })), n.d(t, "a", (function() {
          return a
        }));
        var a = {
            uniNavbar: function() {
              return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
            }
          },
          i = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(t) {
              e.showSwiper = !1
            })
          },
          r = []
      },
      "4b33": function(e, t, n) {
        n.r(t);
        var a = n("2d3f"),
          i = n("586e");
        for (var r in i)["default"].indexOf(r) < 0 && function(e) {
          n.d(t, e, (function() {
            return i[e]
          }))
        }(r);
        n("244b"), n("24ee");
        var s = n("828b"),
          o = Object(s.a)(i.default, a.b, a.c, !1, null, "4d0e896b", null, !1, a.a, void 0);
        t.default = o.exports
      },
      "586e": function(e, t, n) {
        n.r(t);
        var a = n("5b0e"),
          i = n.n(a);
        for (var r in a)["default"].indexOf(r) < 0 && function(e) {
          n.d(t, e, (function() {
            return a[e]
          }))
        }(r);
        t.default = i.a
      },
      "5b0e": function(e, t, n) {
        (function(e, a) {
          var i = n("47a9");
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var r = i(n("7eb4")),
            s = i(n("ee10")),
            o = {
              components: {
                specialBanner: function() {
                  n.e("yearCard/pages/teamNFC/components/specialBanner").then(function() {
                    return resolve(n("e09a"))
                  }.bind(null, n)).catch(n.oe)
                }
              },
              data: function() {
                return {
                  tabList: [{
                    classId: "",
                    className: "全部"
                  }],
                  tabIt: {},
                  tabId: "",
                  waterfallList: [],
                  menuButtonInfo: {},
                  cardList: [],
                  paddingTop: 0,
                  tabH: 0,
                  mapH: 4,
                  bannerList: [],
                  currentData: "",
                  showSwiper: !1,
                  swiperMargin: "40px",
                  swiperIndex: 0,
                  teamId: 0,
                  routes: []
                }
              },
              onLoad: function(t) {
                this.teamId = t.teamId || 1, this.menuButtonInfo = e.getMenuButtonBoundingClientRect(), this.paddingTop = this.$util.pxToRpx(this.menuButtonInfo.bottom) + 12, this.tabH = this.paddingTop + 56, this.mapH = this.$util.rpxToPx(12), this.swiperMargin = this.$util.rpxToPx(70) + "px", this.getTeamClass(), this.getTeamPage(), this.routes = getCurrentPages()
              },
              onShareAppMessage: function() {
                return {
                  title: "「青途文旅」四川团建之旅",
                  imageUrl: "https://eshopfile.zhiyousx.com/2025111815285164535.jpg",
                  path: "/yearCard/pages/teamNFC/index?teamId=".concat(this.teamId)
                }
              },
              onShareTimeline: function() {
                return {
                  title: "「青途文旅」四川团建之旅",
                  imageUrl: "https://eshopfile.zhiyousx.com/2025111815285164535.jpg",
                  path: "/yearCard/pages/teamNFC/index?teamId=".concat(this.teamId)
                }
              },
              methods: {
                getTeamClass: function() {
                  var e = this;
                  this.$uniApi.getRequestNoLoading("GET", "base/app/v1/teamBuilding/fileClass/selectByTeamBuildingId/".concat(this.teamId)).then((function(t) {
                    if (1 === t.code) {
                      var n = t.data || [];
                      n.unshift({
                        classId: "",
                        className: "全部"
                      }), e.tabList = n
                    }
                  }))
                },
                getTeamPage: function() {
                  var e = this;
                  this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/teamBuilding/file/selectPage", {
                    fileClassId: this.tabId,
                    teamBuildingId: this.teamId,
                    current: 1,
                    size: 999
                  }).then((function(t) {
                    1 === t.code && (e.cardList = t.data.records || [], e.bannerList = e.cardList)
                  }))
                },
                changeTab: function(e) {
                  this.tabId = e.classId, this.tabIt = e, this.getTeamPage()
                },
                swiperChangeEnd: function(e) {
                  this.currentData = e
                },
                download: function() {
                  var t = this;
                  return (0, s.default)(r.default.mark((function n() {
                    var a, i;
                    return r.default.wrap((function(n) {
                      for (;;) switch (n.prev = n.next) {
                        case 0:
                          return n.next = 2, e.showLoading({
                            title: "下载中"
                          });
                        case 2:
                          return n.next = 4, e.downloadFile({
                            url: t.currentData.url
                          });
                        case 4:
                          return a = n.sent, i = a[1].tempFilePath, n.next = 8, e.saveImageToPhotosAlbum({
                            filePath: i
                          });
                        case 8:
                          return n.sent, e.hideLoading(), n.next = 12, e.showToast({
                            title: "下载成功"
                          });
                        case 12:
                        case "end":
                          return n.stop()
                      }
                    }), n)
                  })))()
                },
                imgClick: function(e, t) {
                  this.currentData = e, this.showSwiper = !0, this.swiperIndex = t
                },
                shareImg: function() {
                  var t = this;
                  return (0, s.default)(r.default.mark((function n() {
                    var i, s;
                    return r.default.wrap((function(n) {
                      for (;;) switch (n.prev = n.next) {
                        case 0:
                          return n.next = 2, e.showLoading({
                            title: "分享中"
                          });
                        case 2:
                          return n.next = 4, e.downloadFile({
                            url: t.currentData.url
                          });
                        case 4:
                          i = n.sent, s = i[1].tempFilePath, a.showShareImageMenu({
                            path: s,
                            success: function(t) {
                              console.log(t), e.hideLoading()
                            }
                          });
                        case 7:
                        case "end":
                          return n.stop()
                      }
                    }), n)
                  })))()
                },
                pageBack: function() {
                  1 == this.routes.length ? e.redirectTo({
                    url: "/yearCard/pages/teamNFC/index"
                  }) : e.navigateBack()
                }
              }
            };
          t.default = o
        }).call(this, n("df3c").default, n("3223").default)
      },
      b0d9: function(e, t, n) {},
      c4e9: function(e, t, n) {},
      c58d: function(e, t, n) {
        (function(e, t) {
          var a = n("47a9");
          n("5366"), a(n("3240"));
          var i = a(n("4b33"));
          e.__webpack_require_UNI_MP_PLUGIN__ = n, t(i.default)
        }).call(this, n("3223").default, n("df3c").createPage)
      }
    },
    [
      ["c58d", "common/runtime", "common/vendor"]
    ]
  ]);
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'yearCard/pages/teamNFC/album.js'
});
require("yearCard/pages/teamNFC/album.js");
