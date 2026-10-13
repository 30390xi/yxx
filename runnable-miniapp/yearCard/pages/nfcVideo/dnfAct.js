require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/pages/nfcVideo/dnfAct"], {
    "386d": function(n, e, t) {},
    4369: function(n, e, t) {
      t.r(e);
      var a = t("a089"),
        r = t.n(a);
      for (var u in a)["default"].indexOf(u) < 0 && function(n) {
        t.d(e, n, (function() {
          return a[n]
        }))
      }(u);
      e.default = r.a
    },
    "48d9": function(n, e, t) {
      (function(n, e) {
        var a = t("47a9");
        t("5366"), a(t("3240"));
        var r = a(t("c16c"));
        n.__webpack_require_UNI_MP_PLUGIN__ = t, e(r.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    "4bd5": function(n, e, t) {
      var a = t("386d");
      t.n(a).a
    },
    "5f49": function(n, e, t) {
      t.d(e, "b", (function() {
        return r
      })), t.d(e, "c", (function() {
        return u
      })), t.d(e, "a", (function() {
        return a
      }));
      var a = {
          uniNavbar: function() {
            return t.e("components/uni-navbar/uni-navbar").then(t.bind(null, "101a"))
          }
        },
        r = function() {
          this.$createElement;
          this._self._c
        },
        u = []
    },
    a089: function(n, e, t) {
      (function(n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = {
          data: function() {
            return {
              routes: []
            }
          },
          onLoad: function(n) {
            this.routes = getCurrentPages()
          },
          methods: {
            pageBack: function() {
              1 == this.routes.length ? n.redirectTo({
                url: "/yearCard/pages/nfcVideo/jz"
              }) : n.navigateBack()
            }
          }
        };
        e.default = t
      }).call(this, t("df3c").default)
    },
    c16c: function(n, e, t) {
      t.r(e);
      var a = t("5f49"),
        r = t("4369");
      for (var u in r)["default"].indexOf(u) < 0 && function(n) {
        t.d(e, n, (function() {
          return r[n]
        }))
      }(u);
      t("4bd5");
      var o = t("828b"),
        c = Object(o.a)(r.default, a.b, a.c, !1, null, "3ba31784", null, !1, a.a, void 0);
      e.default = c.exports
    }
  },
  [
    ["48d9", "common/runtime", "common/vendor"]
  ]
]);
