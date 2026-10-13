require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/menu/index"], {
    "0951": function(n, e, t) {
      t.r(e);
      var a = t("91e2"),
        u = t.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(n) {
        t.d(e, n, (function() {
          return a[n]
        }))
      }(o);
      e.default = u.a
    },
    "1b17": function(n, e, t) {},
    "1c81": function(n, e, t) {
      t.d(e, "b", (function() {
        return u
      })), t.d(e, "c", (function() {
        return o
      })), t.d(e, "a", (function() {
        return a
      }));
      var a = {
          uniNavbar: function() {
            return t.e("components/uni-navbar/uni-navbar").then(t.bind(null, "101a"))
          }
        },
        u = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    "641d": function(n, e, t) {
      (function(n, e) {
        var a = t("47a9");
        t("5366"), a(t("3240"));
        var u = a(t("7421"));
        n.__webpack_require_UNI_MP_PLUGIN__ = t, e(u.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    7421: function(n, e, t) {
      t.r(e);
      var a = t("1c81"),
        u = t("0951");
      for (var o in u)["default"].indexOf(o) < 0 && function(n) {
        t.d(e, n, (function() {
          return u[n]
        }))
      }(o);
      t("a3cc");
      var i = t("828b"),
        c = Object(i.a)(u.default, a.b, a.c, !1, null, "27bb0ddc", null, !1, a.a, void 0);
      e.default = c.exports
    },
    "91e2": function(n, e, t) {
      (function(n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = {
          methods: {
            toGreatWall: function() {
              n.navigateTo({
                url: "/union/pages/aiGreatWall/index"
              })
            },
            toFuRong: function() {
              n.navigateTo({
                url: "/union/pages/tang/index"
              })
            }
          }
        };
        e.default = t
      }).call(this, t("df3c").default)
    },
    a3cc: function(n, e, t) {
      var a = t("1b17");
      t.n(a).a
    }
  },
  [
    ["641d", "common/runtime", "common/vendor"]
  ]
]);
