(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/uni-icons/uni-icons"], {
    "071a": function(n, e, t) {
      t.d(e, "b", (function() {
        return o
      })), t.d(e, "c", (function() {
        return c
      })), t.d(e, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    },
    "288b": function(n, e, t) {},
    "365b": function(n, e, t) {
      t.r(e);
      var o = t("071a"),
        c = t("a432");
      for (var i in c)["default"].indexOf(i) < 0 && function(n) {
        t.d(e, n, (function() {
          return c[n]
        }))
      }(i);
      t("4275");
      var u = t("828b"),
        a = Object(u.a)(c.default, o.b, o.c, !1, null, "beec3ea8", null, !1, o.a, void 0);
      e.default = a.exports
    },
    4275: function(n, e, t) {
      var o = t("288b");
      t.n(o).a
    },
    "84bb": function(n, e, t) {
      var o = t("47a9");
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var c = o(t("7e10")),
        i = {
          name: "UniIcons",
          props: {
            type: {
              type: String,
              default: ""
            },
            color: {
              type: String,
              default: "#333333"
            },
            size: {
              type: [Number, String],
              default: 16
            }
          },
          data: function() {
            return {
              icons: c.default
            }
          },
          methods: {
            _onClick: function() {
              this.$emit("click")
            }
          }
        };
      e.default = i
    },
    a432: function(n, e, t) {
      t.r(e);
      var o = t("84bb"),
        c = t.n(o);
      for (var i in o)["default"].indexOf(i) < 0 && function(n) {
        t.d(e, n, (function() {
          return o[n]
        }))
      }(i);
      e.default = c.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/uni-icons/uni-icons-create-component", {
    "components/uni-icons/uni-icons-create-component": function(n, e, t) {
      t("df3c").createComponent(t("365b"))
    }
  },
  [
    ["components/uni-icons/uni-icons-create-component"]
  ]
]);
