require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/pages/teamNFC/components/specialBanner"], {
    "1bc8": function(n, e, t) {
      (function(n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = {
          props: {
            bannerList: {
              type: Array,
              default: function() {
                return []
              }
            },
            current: {
              type: Number,
              default: function() {
                return 0
              }
            }
          },
          computed: {
            listLen: function() {
              return this.bannerList.length
            }
          },
          data: function() {
            return {
              curIndex: 0,
              isDescAnimating: !1,
              swiperConfig: {
                indicatorDots: !1,
                indicatorColor: "rgba(255, 255, 255, .4)",
                indicatorActiveColor: "rgba(255, 255, 255, 1)",
                autoplay: !1,
                interval: 3e3,
                duration: 300,
                circular: !0,
                previousMargin: this.$util.rpxToPx(70) + "px",
                nextMargin: this.$util.rpxToPx(70) + "px"
              }
            }
          },
          methods: {
            swiperChange: function(n) {
              this.curIndex = n.mp.detail.current, this.isDescAnimating = !0, this.$emit("swiperChangeEnd", this.bannerList[this.curIndex])
            },
            animationfinish: function(n) {
              this.isDescAnimating = !1
            },
            previewImg: function(e) {
              n.previewImage({
                current: 1,
                urls: [e]
              })
            }
          }
        };
        e.default = t
      }).call(this, t("df3c").default)
    },
    "23ac": function(n, e, t) {
      t.d(e, "b", (function() {
        return a
      })), t.d(e, "c", (function() {
        return r
      })), t.d(e, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        r = []
    },
    "3c1a": function(n, e, t) {},
    "89bc": function(n, e, t) {
      t.r(e);
      var a = t("1bc8"),
        r = t.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(n) {
        t.d(e, n, (function() {
          return a[n]
        }))
      }(i);
      e.default = r.a
    },
    a77c: function(n, e, t) {
      var a = t("3c1a");
      t.n(a).a
    },
    e09a: function(n, e, t) {
      t.r(e);
      var a = t("23ac"),
        r = t("89bc");
      for (var i in r)["default"].indexOf(i) < 0 && function(n) {
        t.d(e, n, (function() {
          return r[n]
        }))
      }(i);
      t("a77c");
      var c = t("828b"),
        o = Object(c.a)(r.default, a.b, a.c, !1, null, "f24707f0", null, !1, a.a, void 0);
      e.default = o.exports
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["yearCard/pages/teamNFC/components/specialBanner-create-component", {
    "yearCard/pages/teamNFC/components/specialBanner-create-component": function(n, e, t) {
      t("df3c").createComponent(t("e09a"))
    }
  },
  [
    ["yearCard/pages/teamNFC/components/specialBanner-create-component"]
  ]
]);
