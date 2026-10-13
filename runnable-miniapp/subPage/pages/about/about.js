require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/about/about"], {
    "00a6": function(n, a, e) {
      e.d(a, "b", (function() {
        return t
      })), e.d(a, "c", (function() {
        return o
      })), e.d(a, "a", (function() {}));
      var t = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    "0234": function(n, a, e) {},
    "2b49": function(n, a, e) {
      (function(n, a) {
        var t = e("47a9");
        e("5366"), t(e("3240"));
        var o = t(e("a3dc"));
        n.__webpack_require_UNI_MP_PLUGIN__ = e, a(o.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    "3a58": function(n, a, e) {
      var t = e("0234");
      e.n(t).a
    },
    a3dc: function(n, a, e) {
      e.r(a);
      var t = e("00a6"),
        o = e("f784");
      for (var u in o)["default"].indexOf(u) < 0 && function(n) {
        e.d(a, n, (function() {
          return o[n]
        }))
      }(u);
      e("3a58");
      var r = e("828b"),
        c = Object(r.a)(o.default, t.b, t.c, !1, null, "3fe365b8", null, !1, t.a, void 0);
      a.default = c.exports
    },
    a8a2: function(n, a, e) {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = void 0;
      var t = {
        components: {
          Parser: function() {
            Promise.all([e.e("subPage/common/vendor"), e.e("subPage/components/Parser/jyf-parser")]).then(function() {
              return resolve(e("5798"))
            }.bind(null, e)).catch(e.oe)
          }
        },
        data: function() {
          return {
            aboutInfo: ""
          }
        },
        onLoad: function() {
          this.pageLoad()
        },
        methods: {
          pageLoad: function() {
            var n = this;
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getInfo", {
              paramKey: "ABOUT_THE_MALL"
            }).then((function(a) {
              1 === a.code && (n.aboutInfo = a.data[0])
            }))
          }
        }
      };
      a.default = t
    },
    f784: function(n, a, e) {
      e.r(a);
      var t = e("a8a2"),
        o = e.n(t);
      for (var u in t)["default"].indexOf(u) < 0 && function(n) {
        e.d(a, n, (function() {
          return t[n]
        }))
      }(u);
      a.default = o.a
    }
  },
  [
    ["2b49", "common/runtime", "common/vendor"]
  ]
]);
