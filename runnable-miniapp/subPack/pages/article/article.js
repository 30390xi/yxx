require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/article/article"], {
    "1db6": function(n, t, e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var a = {
        data: function() {
          return {
            articleData: {},
            parseStyle: {
              p: "word-break: break-all;"
            }
          }
        },
        onLoad: function(n) {
          this.contentId = n.informationId, this.getArticleDetail(this.contentId), this.updateReadingNum(n.informationId)
        },
        onShareAppMessage: function() {
          var n = "/subPack/pages/article/article?informationId=".concat(this.contentId);
          return {
            title: this.articleData.title,
            path: this.$util.setShareUrl(n),
            imageUrl: this.articleData.coverImage
          }
        },
        methods: {
          getArticleDetail: function(n) {
            var t = this;
            this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/getDetail?contentId=" + n).then((function(n) {
              1 === n.code && (t.articleData = n.data)
            }))
          },
          updateReadingNum: function(n) {
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/CommonReadingNum/updateReadingNum", {
              originType: 1,
              originId: n
            }).then((function(n) {
              console.log("add success")
            }))
          }
        }
      };
      t.default = a
    },
    "43c0": function(n, t, e) {
      (function(n, t) {
        var a = e("47a9");
        e("5366"), a(e("3240"));
        var i = a(e("adb6"));
        n.__webpack_require_UNI_MP_PLUGIN__ = e, t(i.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    9764: function(n, t, e) {},
    a6c7: function(n, t, e) {
      e.d(t, "b", (function() {
        return i
      })), e.d(t, "c", (function() {
        return o
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
        i = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    adb6: function(n, t, e) {
      e.r(t);
      var a = e("a6c7"),
        i = e("bf58");
      for (var o in i)["default"].indexOf(o) < 0 && function(n) {
        e.d(t, n, (function() {
          return i[n]
        }))
      }(o);
      e("f72f");
      var r = e("828b"),
        u = Object(r.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
      t.default = u.exports
    },
    bf58: function(n, t, e) {
      e.r(t);
      var a = e("1db6"),
        i = e.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(n) {
        e.d(t, n, (function() {
          return a[n]
        }))
      }(o);
      t.default = i.a
    },
    f72f: function(n, t, e) {
      var a = e("9764");
      e.n(a).a
    }
  },
  [
    ["43c0", "common/runtime", "common/vendor"]
  ]
]);
