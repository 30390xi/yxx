// Extracted from union/pages/featureIntroduction/index.js; webpack module "9c2b".
// Compiled code for analysis; not an original source file.
module.exports = {
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
};
