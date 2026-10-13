(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/noticedetails/noticedetails"], {
    "3de6": function(n, e, t) {},
    4384: function(n, e, t) {
      (function(n, e) {
        var a = t("47a9");
        t("5366"), a(t("3240"));
        var u = a(t("a1bf"));
        n.__webpack_require_UNI_MP_PLUGIN__ = t, e(u.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    "535b": function(n, e, t) {
      var a = t("3de6");
      t.n(a).a
    },
    a1bf: function(n, e, t) {
      t.r(e);
      var a = t("e538"),
        u = t("b298");
      for (var i in u)["default"].indexOf(i) < 0 && function(n) {
        t.d(e, n, (function() {
          return u[n]
        }))
      }(i);
      t("535b");
      var o = t("828b"),
        c = Object(o.a)(u.default, a.b, a.c, !1, null, "2ed063a8", null, !1, a.a, void 0);
      e.default = c.exports
    },
    b298: function(n, e, t) {
      t.r(e);
      var a = t("ec12"),
        u = t.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(n) {
        t.d(e, n, (function() {
          return a[n]
        }))
      }(i);
      e.default = u.a
    },
    e538: function(n, e, t) {
      t.d(e, "b", (function() {
        return u
      })), t.d(e, "c", (function() {
        return i
      })), t.d(e, "a", (function() {
        return a
      }));
      var a = {
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
    ec12: function(n, e, t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0, e.default = {
        data: function() {
          return {
            annunciateId: "",
            content: "",
            parseStyle: {
              p: "word-break: break-all;"
            }
          }
        },
        onLoad: function(n) {
          n.annunciateId && (this.annunciateId = n.annunciateId), this.pageLoad()
        },
        methods: {
          pageLoad: function() {
            var n = this;
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/annunciate/" + this.annunciateId).then((function(e) {
              1 === e.code && (n.content = e.data)
            }))
          }
        }
      }
    }
  },
  [
    ["4384", "common/runtime", "common/vendor"]
  ]
]);
