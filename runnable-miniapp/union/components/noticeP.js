require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components/noticeP"], {
    "1beb": function(n, e, t) {},
    "35d0": function(n, e, t) {
      t.r(e);
      var o = t("8abf"),
        u = t("38fb");
      for (var i in u)["default"].indexOf(i) < 0 && function(n) {
        t.d(e, n, (function() {
          return u[n]
        }))
      }(i);
      t("9762");
      var c = t("828b"),
        r = Object(c.a)(u.default, o.b, o.c, !1, null, "092ecb56", null, !1, o.a, void 0);
      e.default = r.exports
    },
    "38fb": function(n, e, t) {
      t.r(e);
      var o = t("9422"),
        u = t.n(o);
      for (var i in o)["default"].indexOf(i) < 0 && function(n) {
        t.d(e, n, (function() {
          return o[n]
        }))
      }(i);
      e.default = u.a
    },
    "8abf": function(n, e, t) {
      t.d(e, "b", (function() {
        return u
      })), t.d(e, "c", (function() {
        return i
      })), t.d(e, "a", (function() {
        return o
      }));
      var o = {
          uPopup: function() {
            return t.e("uview-ui/components/u-popup/u-popup").then(t.bind(null, "39fb"))
          },
          uParse: function() {
            return Promise.all([t.e("common/vendor"), t.e("uview-ui/components/u-parse/u-parse")]).then(t.bind(null, "7217"))
          }
        },
        u = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    9422: function(n, e, t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        props: {
          detailObj: {
            type: Object,
            default: function() {
              return {}
            }
          }
        },
        data: function() {
          return {
            noticeHeight: 750,
            showNotice: !1
          }
        },
        computed: {
          systemInfo: function() {
            return this.$store.getters.systemInfo
          }
        },
        watch: {},
        mounted: function() {
          this.noticeHeight = .7 * this.$util.pxToRpx(this.systemInfo.windowHeight) - 176
        },
        methods: {}
      };
      e.default = o
    },
    9762: function(n, e, t) {
      var o = t("1beb");
      t.n(o).a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components/noticeP-create-component", {
    "union/components/noticeP-create-component": function(n, e, t) {
      t("df3c").createComponent(t("35d0"))
    }
  },
  [
    ["union/components/noticeP-create-component"]
  ]
]);
