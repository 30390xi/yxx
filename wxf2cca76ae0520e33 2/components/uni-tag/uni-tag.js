(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/uni-tag/uni-tag"], {
    "0e9f": function(n, t, e) {},
    "33fb9": function(n, t, e) {
      e.r(t);
      var a = e("401a"),
        o = e("aad4");
      for (var i in o)["default"].indexOf(i) < 0 && function(n) {
        e.d(t, n, (function() {
          return o[n]
        }))
      }(i);
      e("5dc8");
      var u = e("828b"),
        c = Object(u.a)(o.default, a.b, a.c, !1, null, "72e5620e", null, !1, a.a, void 0);
      t.default = c.exports
    },
    "401a": function(n, t, e) {
      e.d(t, "b", (function() {
        return a
      })), e.d(t, "c", (function() {
        return o
      })), e.d(t, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    "4c26": function(n, t, e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var a = {
        name: "UniTag",
        props: {
          type: {
            type: String,
            default: "default"
          },
          size: {
            type: String,
            default: "normal"
          },
          text: {
            type: String,
            default: ""
          },
          disabled: {
            type: [Boolean, String],
            default: !1
          },
          inverted: {
            type: [Boolean, String],
            default: !1
          },
          circle: {
            type: [Boolean, String],
            default: !1
          },
          mark: {
            type: [Boolean, String],
            default: !1
          }
        },
        methods: {
          onClick: function() {
            !0 !== this.disabled && "true" !== this.disabled && this.$emit("click")
          }
        }
      };
      t.default = a
    },
    "5dc8": function(n, t, e) {
      var a = e("0e9f");
      e.n(a).a
    },
    aad4: function(n, t, e) {
      e.r(t);
      var a = e("4c26"),
        o = e.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(n) {
        e.d(t, n, (function() {
          return a[n]
        }))
      }(i);
      t.default = o.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/uni-tag/uni-tag-create-component", {
    "components/uni-tag/uni-tag-create-component": function(n, t, e) {
      e("df3c").createComponent(e("33fb9"))
    }
  },
  [
    ["components/uni-tag/uni-tag-create-component"]
  ]
]);
