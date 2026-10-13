(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/security/security"], {
    "0898": function(n, e, t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0, e.default = {
        data: function() {
          return {}
        },
        methods: {
          changepassword: function() {
            this.$navigateTo({
              url: "/subPage/pages/changepassword/changepassword"
            })
          },
          setpassword: function() {
            this.$navigateTo({
              url: "/pages/setpassword/setpassword"
            })
          }
        }
      }
    },
    "2b1f": function(n, e, t) {
      t.r(e);
      var a = t("e954"),
        o = t("4b47");
      for (var u in o)["default"].indexOf(u) < 0 && function(n) {
        t.d(e, n, (function() {
          return o[n]
        }))
      }(u);
      t("af73");
      var r = t("828b"),
        i = Object(r.a)(o.default, a.b, a.c, !1, null, "2d325771", null, !1, a.a, void 0);
      e.default = i.exports
    },
    "4b47": function(n, e, t) {
      t.r(e);
      var a = t("0898"),
        o = t.n(a);
      for (var u in a)["default"].indexOf(u) < 0 && function(n) {
        t.d(e, n, (function() {
          return a[n]
        }))
      }(u);
      e.default = o.a
    },
    "84f2": function(n, e, t) {},
    af73: function(n, e, t) {
      var a = t("84f2");
      t.n(a).a
    },
    bb88: function(n, e, t) {
      (function(n, e) {
        var a = t("47a9");
        t("5366"), a(t("3240"));
        var o = a(t("2b1f"));
        n.__webpack_require_UNI_MP_PLUGIN__ = t, e(o.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    e954: function(n, e, t) {
      t.d(e, "b", (function() {
        return o
      })), t.d(e, "c", (function() {
        return u
      })), t.d(e, "a", (function() {
        return a
      }));
      var a = {
          uniIcons: function() {
            return Promise.all([t.e("common/vendor"), t.e("components/uni-icons/uni-icons")]).then(t.bind(null, "365b"))
          }
        },
        o = function() {
          this.$createElement;
          this._self._c
        },
        u = []
    }
  },
  [
    ["bb88", "common/runtime", "common/vendor"]
  ]
]);
