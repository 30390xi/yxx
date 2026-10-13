require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/components/echone-sku/popup-bottom"], {
    "2ccd": function(o, e, n) {
      var t = n("5e1c");
      n.n(t).a
    },
    "5e1c": function(o, e, n) {},
    "6bb1": function(o, e, n) {
      n.r(e);
      var t = n("a144"),
        c = n("9506");
      for (var u in c)["default"].indexOf(u) < 0 && function(o) {
        n.d(e, o, (function() {
          return c[o]
        }))
      }(u);
      n("2ccd");
      var a = n("828b"),
        p = Object(a.a)(c.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
      e.default = p.exports
    },
    9506: function(o, e, n) {
      n.r(e);
      var t = n("bcc0"),
        c = n.n(t);
      for (var u in t)["default"].indexOf(u) < 0 && function(o) {
        n.d(e, o, (function() {
          return t[o]
        }))
      }(u);
      e.default = c.a
    },
    a144: function(o, e, n) {
      n.d(e, "b", (function() {
        return t
      })), n.d(e, "c", (function() {
        return c
      })), n.d(e, "a", (function() {}));
      var t = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    },
    bcc0: function(o, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var t = {
        name: "PopupBottom",
        props: {
          mask: {
            type: Boolean,
            default: !0
          },
          show: {
            type: Boolean,
            default: !1
          },
          bgcolor: {
            type: String,
            default: "transparent"
          }
        },
        methods: {
          handleClose: function() {
            this.show && this.$emit("close")
          }
        }
      };
      e.default = t
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/echone-sku/popup-bottom-create-component", {
    "subPage/components/echone-sku/popup-bottom-create-component": function(o, e, n) {
      n("df3c").createComponent(n("6bb1"))
    }
  },
  [
    ["subPage/components/echone-sku/popup-bottom-create-component"]
  ]
]);
