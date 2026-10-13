(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uview-ui/components/u-checkbox-group/u-checkbox-group"], {
    "225b": function(e, n, t) {
      var o = t("c4a8b");
      t.n(o).a
    },
    "51c7": function(e, n, t) {
      var o = t("47a9");
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var u = {
        name: "u-checkbox-group",
        mixins: [o(t("0295")).default],
        props: {
          max: {
            type: [Number, String],
            default: 999
          },
          disabled: {
            type: Boolean,
            default: !1
          },
          name: {
            type: [Boolean, String],
            default: ""
          },
          activeColor: {
            type: String,
            default: "#2979ff"
          },
          size: {
            type: [String, Number],
            default: 34
          },
          width: {
            type: String,
            default: "auto"
          },
          wrap: {
            type: Boolean,
            default: !1
          }
        },
        provide: function() {
          return {
            checkboxGroup: this
          }
        },
        data: function() {
          return {}
        },
        created: function() {
          this.children = []
        },
        methods: {
          emitEvent: function() {
            var e = this,
              n = [];
            this.children.map((function(e) {
              e.value && n.push(e.name)
            })), this.$emit("change", n), this.$nextTick((function() {
              e.dispatch("u-form-item", "on-form-change", n)
            }))
          }
        }
      };
      n.default = u
    },
    "81b3": function(e, n, t) {
      t.r(n);
      var o = t("51c7"),
        u = t.n(o);
      for (var c in o)["default"].indexOf(c) < 0 && function(e) {
        t.d(n, e, (function() {
          return o[e]
        }))
      }(c);
      n.default = u.a
    },
    a0f5: function(e, n, t) {
      t.d(n, "b", (function() {
        return o
      })), t.d(n, "c", (function() {
        return u
      })), t.d(n, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        u = []
    },
    c4a8b: function(e, n, t) {},
    cd46: function(e, n, t) {
      t.r(n);
      var o = t("a0f5"),
        u = t("81b3");
      for (var c in u)["default"].indexOf(c) < 0 && function(e) {
        t.d(n, e, (function() {
          return u[e]
        }))
      }(c);
      t("225b");
      var a = t("828b"),
        i = Object(a.a)(u.default, o.b, o.c, !1, null, "75c99649", null, !1, o.a, void 0);
      n.default = i.exports
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uview-ui/components/u-checkbox-group/u-checkbox-group-create-component", {
    "uview-ui/components/u-checkbox-group/u-checkbox-group-create-component": function(e, n, t) {
      t("df3c").createComponent(t("cd46"))
    }
  },
  [
    ["uview-ui/components/u-checkbox-group/u-checkbox-group-create-component"]
  ]
]);
