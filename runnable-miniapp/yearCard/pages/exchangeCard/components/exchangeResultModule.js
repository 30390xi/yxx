require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/pages/exchangeCard/components/exchangeResultModule"], {
    "266c": function(e, n, o) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var t = {
        props: {
          show: {
            type: Boolean,
            default: !1
          },
          tips: {
            type: String,
            default: "该兑换码已被使用/已过期"
          }
        },
        watch: {
          show: function(e) {
            this.showPopup = e
          },
          showPopup: function(e) {
            this.$emit("update:show", e)
          }
        },
        data: function() {
          return {
            showPopup: !1
          }
        },
        methods: {
          close: function() {
            this.showPopup = !1
          }
        }
      };
      n.default = t
    },
    "3db2": function(e, n, o) {
      var t = o("db2b");
      o.n(t).a
    },
    "75c1": function(e, n, o) {
      o.r(n);
      var t = o("266c"),
        a = o.n(t);
      for (var u in t)["default"].indexOf(u) < 0 && function(e) {
        o.d(n, e, (function() {
          return t[e]
        }))
      }(u);
      n.default = a.a
    },
    ae4d: function(e, n, o) {
      o.d(n, "b", (function() {
        return a
      })), o.d(n, "c", (function() {
        return u
      })), o.d(n, "a", (function() {
        return t
      }));
      var t = {
          uModal: function() {
            return o.e("uview-ui/components/u-modal/u-modal").then(o.bind(null, "0b84"))
          }
        },
        a = function() {
          this.$createElement;
          this._self._c
        },
        u = []
    },
    bb4c: function(e, n, o) {
      o.r(n);
      var t = o("ae4d"),
        a = o("75c1");
      for (var u in a)["default"].indexOf(u) < 0 && function(e) {
        o.d(n, e, (function() {
          return a[e]
        }))
      }(u);
      o("3db2");
      var c = o("828b"),
        r = Object(c.a)(a.default, t.b, t.c, !1, null, "2615d361", null, !1, t.a, void 0);
      n.default = r.exports
    },
    db2b: function(e, n, o) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["yearCard/pages/exchangeCard/components/exchangeResultModule-create-component", {
    "yearCard/pages/exchangeCard/components/exchangeResultModule-create-component": function(e, n, o) {
      o("df3c").createComponent(o("bb4c"))
    }
  },
  [
    ["yearCard/pages/exchangeCard/components/exchangeResultModule-create-component"]
  ]
]);
