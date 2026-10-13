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
});
var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['yearCard/pages/teamNFC/album.wxss'] = setCssToHead(["body{background:#000}\n.", [1], "page-box.", [1], "data-v-4d0e896b{background-image:url(https://eshopfile.zhiyousx.com/2025111710212136299.png);background-repeat:no-repeat;background-size:100% ", [0, 1622], ";height:100vh;position:relative;width:100%}\n.", [1], "page-box .", [1], "top-box.", [1], "data-v-4d0e896b{background-color:initial;height:auto;position:-webkit-sticky;position:sticky;top:0;z-index:20}\n.", [1], "page-box .", [1], "top-box .", [1], "tab-box.", [1], "data-v-4d0e896b{height:", [0, 56], ";white-space:nowrap;width:", [0, 750], "}\n.", [1], "page-box .", [1], "top-box .", [1], "tab-box .", [1], "tab-item.", [1], "data-v-4d0e896b{background:hsla(0,0%,100%,.1);border-radius:", [0, 40], ";color:hsla(0,0%,100%,.8);display:inline-block;font-size:", [0, 26], ";height:", [0, 56], ";line-height:", [0, 56], ";margin-left:", [0, 20], ";padding:0 ", [0, 20], ";position:relative}\n.", [1], "page-box .", [1], "top-box .", [1], "tab-box .", [1], "active.", [1], "data-v-4d0e896b{background:#fff;color:#000;font-size:", [0, 26], ";font-weight:700}\n.", [1], "page-box .", [1], "waterfall.", [1], "data-v-4d0e896b{-webkit-flex:1;flex:1;overflow:hidden;padding:", [0, 20], ";position:relative;width:100%;z-index:10}\n.", [1], "page-box .", [1], "waterfall .", [1], "waterImg.", [1], "data-v-4d0e896b{border-radius:", [0, 8], ";box-shadow:", [0, 0], " ", [0, 0], " ", [0, 3], " ", [0, 0], " rgba(78,137,255,.25);width:", [0, 226], "}\n.", [1], "page-box .", [1], "waterfall .", [1], "class-top-box.", [1], "data-v-4d0e896b{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:", [0, 276], ";padding:", [0, 12], ";width:", [0, 226], "}\n.", [1], "page-box .", [1], "waterfall .", [1], "class-top-box .", [1], "text-nor.", [1], "data-v-4d0e896b{color:#fff;font-size:", [0, 26], ";line-height:", [0, 36], ";text-shadow:0 ", [0, 2], " ", [0, 2], " rgba(0,0,0,.3)}\n.", [1], "page-box .", [1], "waterfall .", [1], "class-top-box .", [1], "icon1.", [1], "data-v-4d0e896b{height:", [0, 26], ";margin:", [0, 4], " 0 ", [0, 10], ";width:", [0, 68], "}\n.", [1], "page-box .", [1], "waterfall .", [1], "class-top-box .", [1], "icon2.", [1], "data-v-4d0e896b{height:", [0, 28], ";margin:", [0, 14], " 0 ", [0, 10], ";width:", [0, 144], "}\n.", [1], "page-box .", [1], "waterfall .", [1], "class-top-box .", [1], "line1.", [1], "data-v-4d0e896b{border-top:1px dashed #fff;width:", [0, 146], "}\n.", [1], "page-box .", [1], "waterfall .", [1], "class-top-box .", [1], "line.", [1], "data-v-4d0e896b{border-top:1px dashed #fff}\n.", [1], "page-box .", [1], "waterfallHide.", [1], "data-v-4d0e896b{opacity:0}\n.", [1], "page-box .", [1], "swiper-container.", [1], "data-v-4d0e896b{background:transparent;left:0;position:fixed;width:", [0, 750], ";z-index:20}\n.", [1], "page-box .", [1], "swiper-container .", [1], "swiper-bg.", [1], "data-v-4d0e896b{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%;position:relative;width:100%}\n.", [1], "page-box .", [1], "swiper-container .", [1], "swiper-bg .", [1], "bg-img.", [1], "data-v-4d0e896b{height:", [0, 106], ";position:absolute;top:", [0, 86], ";width:", [0, 468], "}\n.", [1], "page-box .", [1], "swiper-container .", [1], "swiper-bg .", [1], "swiper-List.", [1], "data-v-4d0e896b{margin-top:", [0, 290], ";width:", [0, 750], "}\n.", [1], "page-box .", [1], "swiper-container .", [1], "swiper-bg .", [1], "swiper-List .", [1], "swiper.", [1], "data-v-4d0e896b{height:", [0, 792], ";width:", [0, 750], "}\n.", [1], "page-box .", [1], "swiper-container .", [1], "swiper-bg .", [1], "swiper-List .", [1], "swiper .", [1], "slide-image.", [1], "data-v-4d0e896b{border-radius:", [0, 20], ";height:", [0, 792], ";width:", [0, 566], ";z-index:200}\n.", [1], "page-box .", [1], "swiper-container .", [1], "swiper-bg .", [1], "btns.", [1], "data-v-4d0e896b{height:", [0, 70], ";margin-top:", [0, 118], "}\n.", [1], "page-box .", [1], "swiper-container .", [1], "swiper-bg .", [1], "btns .", [1], "btn.", [1], "data-v-4d0e896b{background:hsla(0,0%,100%,.08);border-radius:", [0, 40], ";box-shadow:", [0, 0], " ", [0, 4], " ", [0, 8], " ", [0, 0], " rgba(0,0,0,.05);color:hsla(0,0%,100%,.8);font-size:", [0, 28], ";height:", [0, 70], ";width:", [0, 220], "}\n.", [1], "page-box .", [1], "swiper-container .", [1], "swiper-bg .", [1], "btns .", [1], "btn wx-image.", [1], "data-v-4d0e896b{height:", [0, 40], ";margin-right:", [0, 8], ";width:", [0, 40], "}\n.", [1], "page-box .", [1], "swiper-container .", [1], "swiper-bg .", [1], "btns .", [1], "btn-last.", [1], "data-v-4d0e896b{margin-left:", [0, 44], "}\n.", [1], "home-btn.", [1], "data-v-4d0e896b{-webkit-align-items:center;align-items:center;background:hsla(0,0%,100%,.7);border-radius:50%;box-shadow:", [0, 0], " ", [0, 4], " ", [0, 12], " ", [0, 0], " rgba(0,0,0,.1);display:-webkit-flex;display:flex;height:", [0, 56], ";-webkit-justify-content:center;justify-content:center;margin-left:", [0, 20], ";width:", [0, 56], "}\n.", [1], "home-icon.", [1], "data-v-4d0e896b{height:", [0, 40], ";width:", [0, 40], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./yearCard/pages/teamNFC/album.wxss:1:3014)", {
    path: "./yearCard/pages/teamNFC/album.wxss"
  });
  __wxAppCode__['yearCard/pages/teamNFC/components/specialBanner.wxss'] = setCssToHead([".", [1], "banner-container.", [1], "data-v-f24707f0{height:", [0, 792], ";width:100vw}\n.", [1], "banner-container .", [1], "image-container.", [1], "data-v-f24707f0{box-sizing:border-box;display:-webkit-flex;display:flex;height:100%;width:100%}\n.", [1], "banner-container .", [1], "image-container .", [1], "slide-image.", [1], "data-v-f24707f0{border-radius:", [0, 20], ";height:", [0, 792], ";width:", [0, 566], ";z-index:200}\n.", [1], "banner-container .", [1], "item-left.", [1], "data-v-f24707f0{-webkit-justify-content:flex-end;justify-content:flex-end;padding:0 ", [0, 26], " 0 0}\n.", [1], "banner-container .", [1], "item-right.", [1], "data-v-f24707f0{-webkit-justify-content:flex-start;justify-content:flex-start;padding:0 0 0 ", [0, 26], "}\n.", [1], "banner-container .", [1], "item-center.", [1], "data-v-f24707f0{-webkit-justify-content:center;justify-content:center}\n@keyframes descAnimation-data-v-f24707f0{0%{opacity:1}\n25%{opacity:.5}\n50%{opacity:0}\n75%{opacity:.5}\n100%{opacity:1}\n}@-webkit-keyframes descAnimation-data-v-f24707f0{0%{opacity:1}\n25%{opacity:.5}\n50%{opacity:0}\n75%{opacity:.5}\n100%{opacity:1}\n}.", [1], "banner-container .", [1], "hideAndShowDesc.", [1], "data-v-f24707f0{animation:descAnimation-data-v-f24707f0 .3s ease 1;-webkit-animation:descAnimation-data-v-f24707f0 .3s ease 1}\n", ], undefined, {
    path: "./yearCard/pages/teamNFC/components/specialBanner.wxss"
  });
}
