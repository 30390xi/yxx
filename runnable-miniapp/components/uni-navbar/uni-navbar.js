require("../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/uni-navbar/uni-navbar"], {
    "00d7": function(t, n, e) {
      e.d(n, "b", (function() {
        return r
      })), e.d(n, "c", (function() {
        return i
      })), e.d(n, "a", (function() {
        return o
      }));
      var o = {
          uIcon: function() {
            return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null, "61be"))
          }
        },
        r = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    "101a": function(t, n, e) {
      e.r(n);
      var o = e("00d7"),
        r = e("5d08");
      for (var i in r)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return r[t]
        }))
      }(i);
      e("bdf8");
      var a = e("828b"),
        l = Object(a.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      n.default = l.exports
    },
    "19f8": function(t, n, e) {
      (function(t) {
        var o = e("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var r = o(e("3b2d")),
          i = ["pages/index/index", "pages/index/index"],
          a = ["#FFF", "#FFFFFF", "white", "rgb(255,255,255)", "rgba(255,255,255,1)"],
          l = {
            props: {
              backState: {
                default: function() {
                  return 1e3
                }
              },
              home: {
                type: Boolean,
                default: function() {
                  return !1
                }
              },
              bgColor: {
                type: [String, Array],
                default: function() {
                  return "#FFFFFF"
                }
              },
              bgColorAngle: {
                type: [String, Number],
                default: function() {
                  return 90
                }
              },
              isFinding: {
                type: Boolean,
                default: function() {
                  return !1
                }
              },
              fontColor: {
                type: String,
                default: function() {
                  return "#000000"
                }
              },
              titleCenter: {
                type: Boolean,
                default: function() {
                  return !0
                }
              },
              showNav: {
                type: Boolean,
                default: function() {
                  return !0
                }
              },
              title: {
                type: String,
                default: function() {
                  return ""
                }
              },
              type: {
                type: String,
                default: function() {
                  return "fixed"
                }
              },
              transparentFixedFontColor: {
                type: String,
                default: function() {
                  return "#000000"
                }
              },
              scrollTop: {
                type: Number,
                default: function() {
                  return 0
                }
              },
              shadow: {
                type: Boolean,
                default: function() {
                  return !0
                }
              },
              homePath: {
                type: String,
                default: function() {
                  return "/pages/index/index"
                }
              },
              mapFormType: {
                type: Number,
                default: function() {
                  return 1
                }
              }
            },
            data: function() {
              return {
                firstPage: !1,
                transparentValue: 1,
                navTitle: "",
                navFontColor: "#000000",
                navBgColor: "none",
                navTransparentFixedFontColor: "#000000",
                themeBgColor: !1,
                statusBarHeight: 0,
                lastFrontColor: ""
              }
            },
            computed: {
              back: function() {
                return 1e3 == this.backState || 3e3 == this.backState
              },
              navFixed: function() {
                return "transparentFixed" == this.type || "fixed" == this.type || "MapFixed" == this.type
              },
              navShadow: function() {
                return !(!this.bgColor || "string" != typeof this.bgColor) && this.shadow && "transparent" !== this.type && a.includes(this.bgColor)
              },
              isWhite: function() {
                return a.includes(this.navFontColor)
              },
              isTwoBtn: function() {
                return (1e3 == this.backState || 3e3 == this.backState) && this.home && !this.firstPage
              }
            },
            watch: {
              title: function(t) {
                this.navTitle = t
              },
              fontColor: function(t) {
                this.navFontColor = t, this.settingColor()
              },
              bgColor: function(t) {
                this.getNavBgColor(t)
              },
              transparentFixedFontColor: function(t) {
                this.navTransparentFixedFontColor = t
              },
              scrollTop: function(t) {
                this.pageScroll({
                  scrollTop: t
                })
              }
            },
            created: function() {
              this.navTitle = this.title, this.navFontColor = this.fontColor, this.getNavBgColor(this.bgColor), this.navTransparentFixedFontColor = this.transparentFixedFontColor, this.statusBarHeight = t.getSystemInfoSync().statusBarHeight, this.pageScroll({
                scrollTop: this.scrollTop
              });
              var n = getCurrentPages();
              1 != n.length || i.includes(n[0].route) || (this.firstPage = !0)
            },
            methods: {
              onBackPage: function() {
                3e3 == this.backState ? this.$emit("backClick") : t.navigateBack()
              },
              onBackFinder: function() {
                this.$bus.$emit("openFinder")
              },
              onBackHome: function() {
                "/pages/index/index" === this.homePath ? t.switchTab({
                  url: this.homePath
                }) : t.redirectTo({
                  url: this.homePath
                })
              },
              pageScroll: function(t) {
                "transparentFixed" != this.type && "MapFixed" != this.type || (t.scrollTop && t.scrollTop > 0 ? t.scrollTop > 180 ? this.transparentValue = 1 : this.transparentValue = t.scrollTop / 180 : this.transparentValue = 0, this.settingColor())
              },
              getNavBgColor: function(t) {
                if ("themeBgColor" == t) this.themeBgColor = !0, this.navBgColor = "none";
                else if ("transparent" == this.type) this.themeBgColor = !1, this.navBgColor = "none";
                else if ("string" == typeof t) this.navBgColor = "linear-gradient(90deg," + t + "," + t + ")";
                else if (Array.isArray(t) && t.length >= 2) {
                  var n = "linear-gradient(" + this.bgColorAngle + "deg";
                  t.forEach((function(t) {
                    "string" == typeof t ? n += "," + t : "object" == (0, r.default)(t) && (n += "," + t.color + " " + t.scale)
                  })), n += ")", this.navBgColor = n
                }
              },
              settingColor: function() {
                var n = this,
                  e = this.navFontColor;
                "transparentFixed" == this.type && this.transparentValue <= .5 && (e = this.navTransparentFixedFontColor);
                var o = "#000000";
                a.includes(e) && (o = "#ffffff"), this.lastFrontColor != o && setTimeout((function() {
                  n.lastFrontColor = o, t.setNavigationBarColor({
                    frontColor: o,
                    backgroundColor: "#FFFFFF"
                  })
                }), 150)
              },
              showAllMap: function() {
                this.$emit("showAllMap")
              }
            }
          };
        n.default = l
      }).call(this, e("df3c").default)
    },
    "5d08": function(t, n, e) {
      e.r(n);
      var o = e("19f8"),
        r = e.n(o);
      for (var i in o)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(i);
      n.default = r.a
    },
    b245: function(t, n, e) {},
    bdf8: function(t, n, e) {
      var o = e("b245");
      e.n(o).a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/uni-navbar/uni-navbar-create-component", {
    "components/uni-navbar/uni-navbar-create-component": function(t, n, e) {
      e("df3c").createComponent(e("101a"))
    }
  },
  [
    ["components/uni-navbar/uni-navbar-create-component"]
  ]
]);
