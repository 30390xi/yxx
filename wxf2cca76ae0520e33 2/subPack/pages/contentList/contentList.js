require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/contentList/contentList"], {
    "1a5d": function(t, n, e) {},
    "2e7c": function(t, n, e) {
      e.r(n);
      var o = e("ab51"),
        a = e("d4a9");
      for (var i in a)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(i);
      e("f532");
      var c = e("828b"),
        u = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      n.default = u.exports
    },
    "90dd": function(t, n, e) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var o = {
        data: function() {
          return {
            content: {},
            contentList: {}
          }
        },
        onLoad: function(t) {
          this.id = t.contentId, this.getContentList(this.id)
        },
        onShareAppMessage: function() {
          var t = "/subPack/pages/contentList/contentList?contentId=".concat(this.id);
          return {
            title: this.content.title,
            path: this.$util.setShareUrl(t),
            imageUrl: this.content.coverImage
          }
        },
        methods: {
          getContentList: function(t) {
            var n = this;
            this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/getContentDetail?id=" + t).then((function(t) {
              1 === t.code && (n.content = t.data.content, n.contentList = t.data.contentChildContents, console.log(n.contentList))
            }))
          },
          jump: function(t) {
            this.$util.jumpAll(t)
          }
        }
      };
      n.default = o
    },
    ab51: function(t, n, e) {
      e.d(n, "b", (function() {
        return a
      })), e.d(n, "c", (function() {
        return i
      })), e.d(n, "a", (function() {
        return o
      }));
      var o = {
          uniNavbar: function() {
            return e.e("components/uni-navbar/uni-navbar").then(e.bind(null, "101a"))
          }
        },
        a = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    af175: function(t, n, e) {
      (function(t, n) {
        var o = e("47a9");
        e("5366"), o(e("3240"));
        var a = o(e("2e7c"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(a.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    d4a9: function(t, n, e) {
      e.r(n);
      var o = e("90dd"),
        a = e.n(o);
      for (var i in o)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(i);
      n.default = a.a
    },
    f532: function(t, n, e) {
      var o = e("1a5d");
      e.n(o).a
    }
  },
  [
    ["af175", "common/runtime", "common/vendor"]
  ]
]);
