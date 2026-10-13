require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/pages/nfcVideo/components/specialBanner"], {
    "0814": function(e, n, t) {
      t.r(n);
      var r = t("14bb"),
        a = t("326b");
      for (var c in a)["default"].indexOf(c) < 0 && function(e) {
        t.d(n, e, (function() {
          return a[e]
        }))
      }(c);
      t("1b8c");
      var i = t("828b"),
        o = Object(i.a)(a.default, r.b, r.c, !1, null, "ab1dd9de", null, !1, r.a, void 0);
      n.default = o.exports
    },
    "14bb": function(e, n, t) {
      t.d(n, "b", (function() {
        return r
      })), t.d(n, "c", (function() {
        return a
      })), t.d(n, "a", (function() {}));
      var r = function() {
          var e = this,
            n = (e.$createElement, e._self._c, e.__map(e.list, (function(n, t) {
              return {
                $orig: e.__get_orig(n),
                m0: e.isPrev(t),
                m1: e.isNext(t)
              }
            })));
          e.$mp.data = Object.assign({}, {
            $root: {
              l0: n
            }
          })
        },
        a = []
    },
    "1b8c": function(e, n, t) {
      var r = t("9d28");
      t.n(r).a
    },
    "326b": function(e, n, t) {
      t.r(n);
      var r = t("7252"),
        a = t.n(r);
      for (var c in r)["default"].indexOf(c) < 0 && function(e) {
        t.d(n, e, (function() {
          return r[e]
        }))
      }(c);
      n.default = a.a
    },
    7252: function(e, n, t) {
      (function(e) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var t = {
          name: "StackedSwiper",
          props: {
            list: {
              type: Array,
              default: function() {
                return []
              }
            },
            duration: {
              type: Number,
              default: 500
            },
            current: {
              type: Number,
              default: 0
            }
          },
          watch: {
            current: {
              immediate: !0,
              handler: function(e) {
                this.currentIndex = e
              }
            }
          },
          data: function() {
            return {
              currentIndex: 0,
              margin: "100rpx"
            }
          },
          methods: {
            handleChange: function(e) {
              this.currentIndex = e.detail.current, this.$emit("change", e.detail.current)
            },
            isPrev: function(e) {
              var n = this.list.length;
              return !(n <= 1) && (this.currentIndex - 1 + n) % n === e
            },
            isNext: function(e) {
              var n = this.list.length;
              return !(n <= 1) && (this.currentIndex + 1) % n === e
            },
            previewImg: function(n) {
              e.previewImage({
                current: 1,
                urls: [n]
              })
            }
          }
        };
        n.default = t
      }).call(this, t("df3c").default)
    },
    "9d28": function(e, n, t) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["yearCard/pages/nfcVideo/components/specialBanner-create-component", {
    "yearCard/pages/nfcVideo/components/specialBanner-create-component": function(e, n, t) {
      t("df3c").createComponent(t("0814"))
    }
  },
  [
    ["yearCard/pages/nfcVideo/components/specialBanner-create-component"]
  ]
]);
