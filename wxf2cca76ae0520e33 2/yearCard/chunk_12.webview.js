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
});
var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__['yearCard/pages/nfcVideo/components/specialBanner.wxss'] = setCssToHead([".", [1], "stacked-swiper-container.", [1], "data-v-ab1dd9de{position:relative;width:100%}\n.", [1], "stacked-swiper.", [1], "data-v-ab1dd9de{height:", [0, 930], ";width:100%}\n.", [1], "swiper-item.", [1], "data-v-ab1dd9de{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;overflow:visible;width:", [0, 566], "}\n.", [1], "slide-content.", [1], "data-v-ab1dd9de{border-radius:", [0, 24], ";height:100%;opacity:.6;overflow:hidden;position:relative;-webkit-transform:scale(.9);transform:scale(.9);transition:all .5s cubic-bezier(.4,0,.2,1);width:", [0, 566], ";z-index:1}\n.", [1], "slide-content.", [1], "active.", [1], "data-v-ab1dd9de{box-shadow:0 ", [0, 20], " ", [0, 40], " rgba(0,0,0,.2);opacity:1;-webkit-transform:scale(1);transform:scale(1);z-index:10}\n.", [1], "slide-content.", [1], "next.", [1], "data-v-ab1dd9de,.", [1], "slide-content.", [1], "prev.", [1], "data-v-ab1dd9de{opacity:.8;z-index:5}\n.", [1], "slide-image.", [1], "data-v-ab1dd9de{background-color:#eee;height:100%;width:", [0, 566], "}\n.", [1], "swiper-item.", [1], "data-v-ab1dd9de{width:100%!important}\n", ], undefined, {
    path: "./yearCard/pages/nfcVideo/components/specialBanner.wxss"
  });
  __wxAppCode__['yearCard/pages/nfcVideo/dnfAlbum.wxss'] = setCssToHead(["body{background:#ff2b85}\n.", [1], "page-box.", [1], "data-v-48502410{height:100vh;position:relative;width:100%}\n.", [1], "page-box .", [1], "page-bg.", [1], "data-v-48502410{height:100vh;width:100%}\n.", [1], "page-box .", [1], "bg-box.", [1], "data-v-48502410{-webkit-align-items:center;align-items:center;background-repeat:no-repeat;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100vh;left:0;position:absolute;top:0;width:100%}\n.", [1], "page-box .", [1], "bg-box .", [1], "logo.", [1], "data-v-48502410{height:", [0, 123], ";margin-top:", [0, 127], ";width:", [0, 338], "}\n.", [1], "top-box.", [1], "data-v-48502410{margin-top:", [0, 28], ";padding-bottom:", [0, 6], "}\n.", [1], "top-box .", [1], "tab-box.", [1], "data-v-48502410{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:", [0, 74], ";-webkit-justify-content:center;justify-content:center;width:", [0, 750], "}\n.", [1], "top-box .", [1], "tab-box .", [1], "tab-item.", [1], "data-v-48502410{height:", [0, 74], ";position:relative;width:", [0, 192], "}\n.", [1], "top-box .", [1], "tab-box-sub.", [1], "data-v-48502410{height:", [0, 40], ";margin-top:", [0, 20], ";white-space:nowrap;width:", [0, 750], "}\n.", [1], "top-box .", [1], "tab-box-sub .", [1], "tab-item-before.", [1], "data-v-48502410{display:inline-block;height:", [0, 40], ";width:", [0, 20], "}\n.", [1], "top-box .", [1], "tab-box-sub .", [1], "tab-item-sub.", [1], "data-v-48502410{border:", [0, 2], " solid hsla(0,0%,100%,.6);border-radius:", [0, 20], ";color:hsla(0,0%,100%,.6);display:inline-block;font-size:", [0, 26], ";height:", [0, 40], ";line-height:", [0, 36], ";margin-right:", [0, 20], ";padding:0 ", [0, 18], ";position:relative}\n.", [1], "top-box .", [1], "tab-box-sub .", [1], "tab-item-sub.", [1], "data-v-48502410:last-of-type{margin-right:", [0, 20], "}\n.", [1], "top-box .", [1], "tab-box-sub .", [1], "activeS.", [1], "data-v-48502410{background:hsla(0,0%,100%,.6);border:none;color:#25295e;font-size:", [0, 26], ";font-weight:700;line-height:", [0, 38], "}\n.", [1], "waterfall.", [1], "data-v-48502410{-webkit-flex:1;flex:1;overflow:hidden;padding:", [0, 10], " ", [0, 20], " 0;position:relative;width:100%;z-index:10}\n.", [1], "waterfall .", [1], "waterImg.", [1], "data-v-48502410{border:", [0, 2], " solid #fff;border-radius:", [0, 20], ";box-shadow:", [0, 0], " ", [0, 0], " ", [0, 3], " ", [0, 0], " rgba(78,137,255,.25);width:", [0, 345], "}\n.", [1], "waterfallHide.", [1], "data-v-48502410{opacity:0}\n.", [1], "swiper-container.", [1], "data-v-48502410{background:transparent;left:0;position:fixed;width:", [0, 750], ";z-index:20}\n.", [1], "swiper-container .", [1], "swiper-bg.", [1], "data-v-48502410{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%;position:relative;width:100%}\n.", [1], "swiper-container .", [1], "swiper-bg .", [1], "swiper-List.", [1], "data-v-48502410{margin-top:", [0, 332], ";width:", [0, 750], "}\n.", [1], "swiper-container .", [1], "swiper-bg .", [1], "swiper-List .", [1], "swiper.", [1], "data-v-48502410{height:", [0, 792], ";width:", [0, 750], "}\n.", [1], "swiper-container .", [1], "swiper-bg .", [1], "swiper-List .", [1], "swiper .", [1], "slide-image.", [1], "data-v-48502410{border-radius:", [0, 20], ";height:", [0, 792], ";width:", [0, 566], ";z-index:200}\n.", [1], "swiper-container .", [1], "swiper-bg .", [1], "download-btn.", [1], "data-v-48502410{height:", [0, 100], ";margin-top:", [0, 110], ";width:", [0, 492], "}\n.", [1], "swiper-container .", [1], "swiper-bg .", [1], "btns.", [1], "data-v-48502410{height:", [0, 70], ";margin-top:", [0, 118], "}\n.", [1], "swiper-container .", [1], "swiper-bg .", [1], "btns .", [1], "btn.", [1], "data-v-48502410{background:hsla(0,0%,100%,.08);border-radius:", [0, 40], ";box-shadow:", [0, 0], " ", [0, 4], " ", [0, 8], " ", [0, 0], " rgba(0,0,0,.05);color:hsla(0,0%,100%,.8);font-size:", [0, 28], ";height:", [0, 70], ";width:", [0, 220], "}\n.", [1], "swiper-container .", [1], "swiper-bg .", [1], "btns .", [1], "btn wx-image.", [1], "data-v-48502410{height:", [0, 40], ";margin-right:", [0, 8], ";width:", [0, 40], "}\n.", [1], "swiper-container .", [1], "swiper-bg .", [1], "btns .", [1], "btn-last.", [1], "data-v-48502410{margin-left:", [0, 44], "}\n.", [1], "home-box.", [1], "data-v-48502410{-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-flex;display:flex}\n.", [1], "home-btn.", [1], "data-v-48502410{-webkit-align-items:center;align-items:center;background:hsla(0,0%,100%,.7);border-radius:50%;box-shadow:", [0, 0], " ", [0, 4], " ", [0, 12], " ", [0, 0], " rgba(0,0,0,.1);display:-webkit-flex;display:flex;height:", [0, 56], ";-webkit-justify-content:center;justify-content:center;margin-left:", [0, 20], ";margin-right:", [0, 8], ";width:", [0, 56], "}\n.", [1], "home-icon.", [1], "data-v-48502410{height:", [0, 40], ";width:", [0, 40], "}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./yearCard/pages/nfcVideo/dnfAlbum.wxss:1:2924)", {
    path: "./yearCard/pages/nfcVideo/dnfAlbum.wxss"
  });
}
