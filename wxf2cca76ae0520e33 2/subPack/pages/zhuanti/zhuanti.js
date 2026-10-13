require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/zhuanti/zhuanti"], {
    "06da": function(t, n, e) {},
    "211c": function(t, n, e) {
      e.d(n, "b", (function() {
        return i
      })), e.d(n, "c", (function() {
        return c
      })), e.d(n, "a", (function() {
        return a
      }));
      var a = {
          uniNavbar: function() {
            return e.e("components/uni-navbar/uni-navbar").then(e.bind(null, "101a"))
          }
        },
        i = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    },
    "42d5": function(t, n, e) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = {
        data: function() {
          return {
            content: {},
            specialProducts: {}
          }
        },
        onLoad: function(t) {
          this.id = t.specialId, this.getDetailSpecial(this.id)
        },
        onShareAppMessage: function() {
          var t = "/subPack/pages/zhuanti/zhuanti?specialId=".concat(this.id);
          return {
            title: this.content.title,
            path: this.$util.setShareUrl(t),
            imageUrl: this.content.coverImage
          }
        },
        methods: {
          getDetailSpecial: function(t) {
            var n = this;
            this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/getDetailSpecial?id=" + t).then((function(t) {
              1 === t.code && (n.content = t.data.content, n.specialProducts = t.data.contentSpecialProducts, console.log(n.specialProducts))
            }))
          },
          jump: function(t) {
            this.$navigateTo({
              url: "/subPage/pages/goods_details/goods_details?itemId=" + t.productId
            })
          }
        }
      };
      n.default = a
    },
    "6b29": function(t, n, e) {
      var a = e("06da");
      e.n(a).a
    },
    8820: function(t, n, e) {
      e.r(n);
      var a = e("42d5"),
        i = e.n(a);
      for (var c in a)["default"].indexOf(c) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(c);
      n.default = i.a
    },
    "9edc": function(t, n, e) {
      e.r(n);
      var a = e("211c"),
        i = e("8820");
      for (var c in i)["default"].indexOf(c) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(c);
      e("6b29");
      var o = e("828b"),
        u = Object(o.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
      n.default = u.exports
    },
    d3c8: function(t, n, e) {
      (function(t, n) {
        var a = e("47a9");
        e("5366"), a(e("3240"));
        var i = a(e("9edc"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(i.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    }
  },
  [
    ["d3c8", "common/runtime", "common/vendor"]
  ]
]);
