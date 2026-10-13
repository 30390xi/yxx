(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/spotDetailNew/components/csMenu"], {
    "35e6e": function(e, n, t) {
      t.r(n);
      var o = t("4ff3"),
        u = t.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        t.d(n, e, (function() {
          return o[e]
        }))
      }(a);
      n.default = u.a
    },
    "4ff3": function(e, n, t) {
      (function(e) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var t = {
          props: {
            showMenuList: {
              type: Boolean,
              default: function() {
                return !1
              }
            }
          },
          data: function() {
            return {
              showMenu: !1,
              menuList: [{
                img: "https://eshopfile.zhiyousx.com/2024101617155884654.png",
                name: "入寺记录",
                path: "/subPage/pages/csOrder/csOrder"
              }, {
                img: "https://eshopfile.zhiyousx.com/2024101617154864969.png",
                name: "义工报名",
                path: "/artShow/pages/volunteer/list"
              }],
              menuButton: "",
              menuLeft: 0,
              menuHeight: 0
            }
          },
          created: function() {
            this.menuButton = e.getMenuButtonBoundingClientRect(), this.menuLeft = e.upx2px(26), this.menuHeight = this.menuButton.height - 2
          },
          methods: {
            closeMenu: function() {
              this.showMenu = !1
            },
            jumpPath: function(n) {
              this.$util.isLogin(n.path, 1) && e.navigateTo({
                url: n.path
              })
            }
          }
        };
        n.default = t
      }).call(this, t("df3c").default)
    },
    "687c": function(e, n, t) {},
    "74a2": function(e, n, t) {
      var o = t("687c");
      t.n(o).a
    },
    "8c3d": function(e, n, t) {
      t.r(n);
      var o = t("fc62"),
        u = t("35e6e");
      for (var a in u)["default"].indexOf(a) < 0 && function(e) {
        t.d(n, e, (function() {
          return u[e]
        }))
      }(a);
      t("74a2");
      var c = t("828b"),
        i = Object(c.a)(u.default, o.b, o.c, !1, null, "5760e457", null, !1, o.a, void 0);
      n.default = i.exports
    },
    fc62: function(e, n, t) {
      t.d(n, "b", (function() {
        return o
      })), t.d(n, "c", (function() {
        return u
      })), t.d(n, "a", (function() {}));
      var o = function() {
          var e = this;
          e.$createElement;
          e._self._c, e._isMounted || (e.e0 = function(n) {
            n.stopPropagation(), e.showMenu = !e.showMenu
          })
        },
        u = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["pages/spotDetailNew/components/csMenu-create-component", {
    "pages/spotDetailNew/components/csMenu-create-component": function(e, n, t) {
      t("df3c").createComponent(t("8c3d"))
    }
  },
  [
    ["pages/spotDetailNew/components/csMenu-create-component"]
  ]
]);
