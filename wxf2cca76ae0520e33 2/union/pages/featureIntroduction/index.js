require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/featureIntroduction/index"], {
    "4a63": function(t, e, n) {},
    "5bae": function(t, e, n) {
      n.r(e);
      var a = n("e0fd"),
        r = n("c91c");
      for (var o in r)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return r[t]
        }))
      }(o);
      n("8dbf");
      var i = n("828b"),
        u = Object(i.a)(r.default, a.b, a.c, !1, null, "2cfa1430", null, !1, a.a, void 0);
      e.default = u.exports
    },
    8098: function(t, e, n) {
      (function(t, e) {
        var a = n("47a9");
        n("5366"), a(n("3240"));
        var r = a(n("5bae"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(r.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "8dbf": function(t, e, n) {
      var a = n("4a63");
      n.n(a).a
    },
    "9c2b": function(t, e, n) {
      (function(t) {
        var a = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = a(n("7ca3"));

        function o(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e && (a = a.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, a)
          }
          return n
        }

        function i(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? o(Object(n), !0).forEach((function(e) {
              (0, r.default)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
          }
          return t
        }
        var u = {
          mixins: [a(n("30eb")).default],
          data: function() {
            return {
              list: [],
              statusBarHeight: "",
              language: "zh"
            }
          },
          onLoad: function() {
            this.language = t.getStorageSync("language") || "zh", this.statusBarHeight = t.getSystemInfoSync().statusBarHeight, this.getList()
          },
          methods: {
            getList: function() {
              var t = this;
              this.$uniApi.getRequestYesLoading("GET", "ai/app/aiFeatureIntro/list?language=".concat(this.language), this.$t("featureIntroduction.loading.loading")).then((function(e) {
                1 === e.code ? t.list = (e.data || []).map((function(t) {
                  return i(i({}, t), {}, {
                    isCollapsed: !1
                  })
                })) : t.$util.showToast(e.msg || t.$t("featureIntroduction.error.loadFailed"))
              })).catch((function() {
                t.$util.showToast(t.$t("featureIntroduction.error.loadFailed"))
              }))
            },
            toggleCollapse: function(t) {
              this.list[t].isCollapsed = !this.list[t].isCollapsed
            },
            handleRichTextImages: function(t) {
              return t.replace(/<img[^>]*>/gi, (function(t) {
                return t.replace(/<img/, '<img style="width:100%;height:auto;max-width:100%;border-radius:16rpx;"')
              }))
            }
          }
        };
        e.default = u
      }).call(this, n("df3c").default)
    },
    c91c: function(t, e, n) {
      n.r(e);
      var a = n("9c2b"),
        r = n.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(o);
      e.default = r.a
    },
    e0fd: function(t, e, n) {
      n.d(e, "b", (function() {
        return r
      })), n.d(e, "c", (function() {
        return o
      })), n.d(e, "a", (function() {
        return a
      }));
      var a = {
          uniNavbar: function() {
            return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
          }
        },
        r = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.$t("featureIntroduction.navbar.title")),
            n = t.__map(t.list, (function(e, n) {
              return {
                $orig: t.__get_orig(e),
                m1: e.isCollapsed ? t.$t("featureIntroduction.collapse.expand") : null,
                m2: e.isCollapsed ? null : t.$t("featureIntroduction.collapse.collapse"),
                m3: t.handleRichTextImages(e.describe)
              }
            }));
          t.$mp.data = Object.assign({}, {
            $root: {
              a0: {
                background: "transparent"
              },
              m0: e,
              l0: n
            }
          })
        },
        o = []
    }
  },
  [
    ["8098", "common/runtime", "common/vendor", "union/common/vendor"]
  ]
]);
