require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/pages/badge/components/badgeList"], {
    "16af": function(n, e, t) {
      t.d(e, "b", (function() {
        return a
      })), t.d(e, "c", (function() {
        return c
      })), t.d(e, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    },
    "269d": function(n, e, t) {},
    "45f0": function(n, e, t) {
      var a = t("269d");
      t.n(a).a
    },
    "69ec": function(n, e, t) {
      t.r(e);
      var a = t("16af"),
        c = t("cc34");
      for (var o in c)["default"].indexOf(o) < 0 && function(n) {
        t.d(e, n, (function() {
          return c[n]
        }))
      }(o);
      t("45f0");
      var r = t("828b"),
        i = Object(r.a)(c.default, a.b, a.c, !1, null, "47d58f22", null, !1, a.a, void 0);
      e.default = i.exports
    },
    "718a": function(n, e, t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var a = {
        props: {
          badgeList: {
            type: Array,
            default: function() {
              return []
            }
          },
          otherInfo: {
            type: Object,
            default: function() {}
          }
        },
        watch: {
          otherInfo: function(n) {
            n.allNum && this.tabList.forEach((function(e) {
              e.numStr = "(".concat(n.activeNum, "/").concat(n.allNum, ")")
            }))
          }
        },
        data: function() {
          return {
            tabList: [{
              name: "全部",
              numStr: "(0/0)",
              active: !0,
              id: 0
            }, {
              name: "足迹",
              numStr: "(0/0)",
              active: !1,
              id: 1
            }],
            currentBadgeIndex: null
          }
        },
        methods: {
          changeTab: function(n) {
            this.tabList.forEach((function(e) {
              e.id === n ? e.active = !0 : e.active = !1
            }))
          },
          handleClick: function(n) {
            this.currentBadgeIndex = n, this.$emit("clickBadge", n)
          }
        }
      };
      e.default = a
    },
    cc34: function(n, e, t) {
      t.r(e);
      var a = t("718a"),
        c = t.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(n) {
        t.d(e, n, (function() {
          return a[n]
        }))
      }(o);
      e.default = c.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["yearCard/pages/badge/components/badgeList-create-component", {
    "yearCard/pages/badge/components/badgeList-create-component": function(n, e, t) {
      t("df3c").createComponent(t("69ec"))
    }
  },
  [
    ["yearCard/pages/badge/components/badgeList-create-component"]
  ]
]);
