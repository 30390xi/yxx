require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/groupList/teamList"], {
    3458: function(n, t, o) {
      (function(n) {
        var e = o("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = {
          mixins: [e(o("30eb")).default],
          data: function() {
            return {
              list: [],
              statusBarHeight: "",
              language: "zh",
              listTeam: [{
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }]
            }
          },
          onLoad: function() {
            this.language = n.getStorageSync("language") || "zh", this.statusBarHeight = n.getSystemInfoSync().statusBarHeight
          },
          methods: {}
        };
        t.default = a
      }).call(this, o("df3c").default)
    },
    "3e36": function(n, t, o) {},
    "3f0a": function(n, t, o) {
      o.r(t);
      var e = o("3458"),
        a = o.n(e);
      for (var i in e)["default"].indexOf(i) < 0 && function(n) {
        o.d(t, n, (function() {
          return e[n]
        }))
      }(i);
      t.default = a.a
    },
    4568: function(n, t, o) {
      var e = o("3e36");
      o.n(e).a
    },
    "574a": function(n, t, o) {
      (function(n, t) {
        var e = o("47a9");
        o("5366"), e(o("3240"));
        var a = e(o("cb17"));
        n.__webpack_require_UNI_MP_PLUGIN__ = o, t(a.default)
      }).call(this, o("3223").default, o("df3c").createPage)
    },
    cb17: function(n, t, o) {
      o.r(t);
      var e = o("f31f"),
        a = o("3f0a");
      for (var i in a)["default"].indexOf(i) < 0 && function(n) {
        o.d(t, n, (function() {
          return a[n]
        }))
      }(i);
      o("4568");
      var s = o("828b"),
        u = Object(s.a)(a.default, e.b, e.c, !1, null, "59bdb526", null, !1, e.a, void 0);
      t.default = u.exports
    },
    f31f: function(n, t, o) {
      o.d(t, "b", (function() {
        return a
      })), o.d(t, "c", (function() {
        return i
      })), o.d(t, "a", (function() {
        return e
      }));
      var e = {
          uniNavbar: function() {
            return o.e("components/uni-navbar/uni-navbar").then(o.bind(null, "101a"))
          }
        },
        a = function() {
          this.$createElement;
          var n = (this._self._c, this.$t("teamList.navbar.title")),
            t = this.$t("teamList.groupListTitle");
          this.$mp.data = Object.assign({}, {
            $root: {
              a0: {
                background: "transparent"
              },
              m0: n,
              m1: t
            }
          })
        },
        i = []
    }
  },
  [
    ["574a", "common/runtime", "common/vendor", "union/common/vendor"]
  ]
]);
