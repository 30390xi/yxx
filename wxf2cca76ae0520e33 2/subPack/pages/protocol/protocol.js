require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/protocol/protocol"], {
    "0af1": function(n, e, t) {},
    "3d30": function(n, e, t) {
      t.r(e);
      var o = t("593b"),
        a = t.n(o);
      for (var u in o)["default"].indexOf(u) < 0 && function(n) {
        t.d(e, n, (function() {
          return o[n]
        }))
      }(u);
      e.default = a.a
    },
    "593b": function(n, e, t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        data: function() {
          return {
            content: "",
            parseStyle: {
              p: "word-break: break-all;"
            }
          }
        },
        onLoad: function() {
          this.getInfo()
        },
        onShow: function() {},
        methods: {
          getInfo: function() {
            var n = this;
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getInfo?paramKey=INVITE_RULE").then((function(e) {
              1 === e.code && (console.log(e.data), n.content = e.data[0].paramValue)
            }))
          }
        }
      };
      e.default = o
    },
    9496: function(n, e, t) {
      (function(n, e) {
        var o = t("47a9");
        t("5366"), o(t("3240"));
        var a = o(t("f041"));
        n.__webpack_require_UNI_MP_PLUGIN__ = t, e(a.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    ac30: function(n, e, t) {
      t.d(e, "b", (function() {
        return a
      })), t.d(e, "c", (function() {
        return u
      })), t.d(e, "a", (function() {
        return o
      }));
      var o = {
          uParse: function() {
            return Promise.all([t.e("common/vendor"), t.e("uview-ui/components/u-parse/u-parse")]).then(t.bind(null, "7217"))
          }
        },
        a = function() {
          this.$createElement;
          this._self._c
        },
        u = []
    },
    f041: function(n, e, t) {
      t.r(e);
      var o = t("ac30"),
        a = t("3d30");
      for (var u in a)["default"].indexOf(u) < 0 && function(n) {
        t.d(e, n, (function() {
          return a[n]
        }))
      }(u);
      t("f728");
      var r = t("828b"),
        c = Object(r.a)(a.default, o.b, o.c, !1, null, "6e843c86", null, !1, o.a, void 0);
      e.default = c.exports
    },
    f728: function(n, e, t) {
      var o = t("0af1");
      t.n(o).a
    }
  },
  [
    ["9496", "common/runtime", "common/vendor"]
  ]
]);
