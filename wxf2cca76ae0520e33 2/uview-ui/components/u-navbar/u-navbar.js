(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uview-ui/components/u-navbar/u-navbar"], {
    2382: function(t, e, n) {
      var a = n("4143");
      n.n(a).a
    },
    4143: function(t, e, n) {},
    "4a78": function(t, e, n) {
      n.r(e);
      var a = n("a23a"),
        i = n.n(a);
      for (var u in a)["default"].indexOf(u) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(u);
      e.default = i.a
    },
    "59e3": function(t, e, n) {
      n.r(e);
      var a = n("f62d"),
        i = n("4a78");
      for (var u in i)["default"].indexOf(u) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(u);
      n("2382");
      var o = n("828b"),
        r = Object(o.a)(i.default, a.b, a.c, !1, null, "4a9e42f2", null, !1, a.a, void 0);
      e.default = r.exports
    },
    a23a: function(t, e, n) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n, a = t.getSystemInfoSync();
        n = t.getMenuButtonBoundingClientRect();
        var i = {
          name: "u-navbar",
          props: {
            height: {
              type: [String, Number],
              default: ""
            },
            backIconColor: {
              type: String,
              default: "#606266"
            },
            backIconName: {
              type: String,
              default: "arrow-left"
            },
            backIconSize: {
              type: [String, Number],
              default: "30"
            },
            backText: {
              type: String,
              default: ""
            },
            backTextStyle: {
              type: Object,
              default: function() {
                return {
                  color: "#606266"
                }
              }
            },
            title: {
              type: String,
              default: ""
            },
            titleWidth: {
              type: [String, Number],
              default: "250"
            },
            titleColor: {
              type: String,
              default: "#606266"
            },
            titleSize: {
              type: [String, Number],
              default: 32
            },
            isBack: {
              type: [Boolean, String],
              default: !0
            },
            background: {
              type: Object,
              default: function() {
                return {}
              }
            },
            isFixed: {
              type: Boolean,
              default: !0
            },
            isAbsolute: {
              type: Boolean,
              default: !1
            },
            borderBottom: {
              type: Boolean,
              default: !1
            },
            zIndex: {
              type: [String, Number],
              default: ""
            },
            customBack: {
              type: Function,
              default: null
            }
          },
          data: function() {
            return {
              menuButtonInfo: n,
              statusBarHeight: a.statusBarHeight
            }
          },
          computed: {
            navbarInnerStyle: function() {
              var t = {};
              t.height = this.navbarHeight + "px";
              var e = a.windowWidth - n.left;
              return t.marginRight = e + "px", t
            },
            navbarStyle: function() {
              var t = {};
              return t.zIndex = this.zIndex ? this.zIndex : this.$u.zIndex.navbar, Object.assign(t, this.background), t
            },
            titleStyle: function() {
              var e = {},
                i = a.windowWidth - n.left;
              return e.left = (a.windowWidth - t.upx2px(this.titleWidth)) / 2 + "px", e.right = i - (a.windowWidth - t.upx2px(this.titleWidth)) / 2 + i + "px", e.width = t.upx2px(this.titleWidth) + "px", e
            },
            navbarHeight: function() {
              var t = "ios" == a.platform ? 44 : 48;
              return this.height ? this.height : t
            }
          },
          created: function() {},
          methods: {
            goBack: function() {
              "function" == typeof this.customBack ? this.customBack() : t.navigateBack()
            }
          }
        };
        e.default = i
      }).call(this, n("df3c").default)
    },
    f62d: function(t, e, n) {
      n.d(e, "b", (function() {
        return i
      })), n.d(e, "c", (function() {
        return u
      })), n.d(e, "a", (function() {
        return a
      }));
      var a = {
          uIcon: function() {
            return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "61be"))
          }
        },
        i = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.__get_style([t.navbarStyle])),
            n = t.__get_style([t.navbarInnerStyle]),
            a = t.isBack && t.backText ? t.__get_style([t.backTextStyle]) : null,
            i = t.title ? t.__get_style([t.titleStyle]) : null,
            u = t.isFixed ? Number(t.navbarHeight) : null;
          t.$mp.data = Object.assign({}, {
            $root: {
              s0: e,
              s1: n,
              s2: a,
              s3: i,
              m0: u
            }
          })
        },
        u = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uview-ui/components/u-navbar/u-navbar-create-component", {
    "uview-ui/components/u-navbar/u-navbar-create-component": function(t, e, n) {
      n("df3c").createComponent(n("59e3"))
    }
  },
  [
    ["uview-ui/components/u-navbar/u-navbar-create-component"]
  ]
]);
