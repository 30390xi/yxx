(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/spotIntro/spotIntro"], {
    "099e": function(n, t, e) {
      var a = e("b1a4");
      e.n(a).a
    },
    "0e98": function(n, t, e) {
      (function(n, t) {
        var a = e("47a9");
        e("5366"), a(e("3240"));
        var o = a(e("db81"));
        n.__webpack_require_UNI_MP_PLUGIN__ = e, t(o.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    "3f97": function(n, t, e) {
      e.d(t, "b", (function() {
        return o
      })), e.d(t, "c", (function() {
        return i
      })), e.d(t, "a", (function() {
        return a
      }));
      var a = {
          uniNavbar: function() {
            return e.e("components/uni-navbar/uni-navbar").then(e.bind(null, "101a"))
          },
          uParse: function() {
            return Promise.all([e.e("common/vendor"), e.e("uview-ui/components/u-parse/u-parse")]).then(e.bind(null, "7217"))
          }
        },
        o = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    "96b4": function(n, t, e) {
      e.r(t);
      var a = e("cd7d"),
        o = e.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(n) {
        e.d(t, n, (function() {
          return a[n]
        }))
      }(i);
      t.default = o.a
    },
    b1a4: function(n, t, e) {},
    cd7d: function(n, t, e) {
      (function(n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var e = {
          data: function() {
            return {
              detailObj: {},
              parseStyle: {
                p: "word-break: break-all;"
              }
            }
          },
          onLoad: function(n) {
            this.scenicSpot(n.spotId)
          },
          methods: {
            scenicSpot: function(t) {
              var e = this;
              n.showNavigationBarLoading(), this.$uniApi.getRequestNoLoading("GET", "base/app/v1/scenicSpot/" + t).then((function(t) {
                n.hideNavigationBarLoading(), e.detailObj = t.data
              }))
            }
          }
        };
        t.default = e
      }).call(this, e("df3c").default)
    },
    db81: function(n, t, e) {
      e.r(t);
      var a = e("3f97"),
        o = e("96b4");
      for (var i in o)["default"].indexOf(i) < 0 && function(n) {
        e.d(t, n, (function() {
          return o[n]
        }))
      }(i);
      e("099e");
      var u = e("828b"),
        r = Object(u.a)(o.default, a.b, a.c, !1, null, "2cc44b25", null, !1, a.a, void 0);
      t.default = r.exports
    }
  },
  [
    ["0e98", "common/runtime", "common/vendor"]
  ]
]);
