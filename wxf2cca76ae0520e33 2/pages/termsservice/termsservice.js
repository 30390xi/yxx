(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/termsservice/termsservice"], {
    "194c": function(e, n, a) {
      a.r(n);
      var t = a("91fc"),
        r = a.n(t);
      for (var u in t)["default"].indexOf(u) < 0 && function(e) {
        a.d(n, e, (function() {
          return t[e]
        }))
      }(u);
      n.default = r.a
    },
    "2d73": function(e, n, a) {
      (function(e, n) {
        var t = a("47a9");
        a("5366"), t(a("3240"));
        var r = t(a("885a"));
        e.__webpack_require_UNI_MP_PLUGIN__ = a, n(r.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    7160: function(e, n, a) {
      a.d(n, "b", (function() {
        return r
      })), a.d(n, "c", (function() {
        return u
      })), a.d(n, "a", (function() {
        return t
      }));
      var t = {
          uParse: function() {
            return Promise.all([a.e("common/vendor"), a.e("uview-ui/components/u-parse/u-parse")]).then(a.bind(null, "7217"))
          }
        },
        r = function() {
          this.$createElement;
          this._self._c
        },
        u = []
    },
    "885a": function(e, n, a) {
      a.r(n);
      var t = a("7160"),
        r = a("194c");
      for (var u in r)["default"].indexOf(u) < 0 && function(e) {
        a.d(n, e, (function() {
          return r[e]
        }))
      }(u);
      a("d34c");
      var o = a("828b"),
        c = Object(o.a)(r.default, t.b, t.c, !1, null, "3edb9936", null, !1, t.a, void 0);
      n.default = c.exports
    },
    "91fc": function(e, n, a) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0, n.default = {
        data: function() {
          return {
            paramValue: "",
            parseStyle: {
              p: "word-break: break-all;"
            }
          }
        },
        onLoad: function() {
          this.pageLoad()
        },
        methods: {
          pageLoad: function() {
            var e = this;
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getInfo", {
              paramKey: "WINEBOSS_ITEM"
            }).then((function(n) {
              1 === n.code && (e.paramValue = n.data[0].paramValue)
            }))
          }
        }
      }
    },
    d34c: function(e, n, a) {
      var t = a("fac1");
      a.n(t).a
    },
    fac1: function(e, n, a) {}
  },
  [
    ["2d73", "common/runtime", "common/vendor"]
  ]
]);
