(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uview-ui/components/u-swiper/u-swiper"], {
    "0e80": function(t, e, n) {
      var i = n("bcff");
      n.n(i).a
    },
    "217a": function(t, e, n) {
      n.d(e, "b", (function() {
        return i
      })), n.d(e, "c", (function() {
        return o
      })), n.d(e, "a", (function() {}));
      var i = function() {
          this.$createElement;
          var t = (this._self._c, this.showIndicator && "number" == this.mode ? this.list.length : null);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        o = []
    },
    4623: function(t, e, n) {
      n.r(e);
      var i = n("c04b"),
        o = n.n(i);
      for (var r in i)["default"].indexOf(r) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(r);
      e.default = o.a
    },
    9840: function(t, e, n) {
      n.r(e);
      var i = n("217a"),
        o = n("4623");
      for (var r in o)["default"].indexOf(r) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(r);
      n("0e80");
      var u = n("828b"),
        a = Object(u.a)(o.default, i.b, i.c, !1, null, "1b6e0f42", null, !1, i.a, void 0);
      e.default = a.exports
    },
    bcff: function(t, e, n) {},
    c04b: function(t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = {
        name: "u-swiper",
        props: {
          list: {
            type: Array,
            default: function() {
              return []
            }
          },
          title: {
            type: Boolean,
            default: !1
          },
          showIndicator: {
            type: Boolean,
            default: !0
          },
          indicator: {
            type: Object,
            default: function() {
              return {}
            }
          },
          borderRadius: {
            type: [Number, String],
            default: 8
          },
          interval: {
            type: [String, Number],
            default: 3e3
          },
          mode: {
            type: String,
            default: "round"
          },
          height: {
            type: [Number, String],
            default: 250
          },
          indicatorPos: {
            type: String,
            default: "bottomCenter"
          },
          effect3d: {
            type: Boolean,
            default: !1
          },
          effect3dPreviousMargin: {
            type: [Number, String],
            default: 50
          },
          autoplay: {
            type: Boolean,
            default: !0
          },
          duration: {
            type: [Number, String],
            default: 500
          },
          circular: {
            type: Boolean,
            default: !0
          },
          imgMode: {
            type: String,
            default: "aspectFill"
          },
          name: {
            type: String,
            default: "image"
          },
          bgColor: {
            type: String,
            default: "#f3f4f6"
          },
          indicatorColor: {
            type: String,
            default: "#ffffff"
          },
          indicatorActiveColor: {
            type: String,
            default: "#e5e5e5"
          }
        },
        watch: {
          list: function(t, e) {
            t.length !== e.length && (this.current = 0)
          }
        },
        data: function() {
          return {
            current: 0
          }
        },
        computed: {
          justifyContent: function() {
            return "topLeft" == this.indicatorPos || "bottomLeft" == this.indicatorPos ? "flex-start" : "topCenter" == this.indicatorPos || "bottomCenter" == this.indicatorPos ? "center" : "topRight" == this.indicatorPos || "bottomRight" == this.indicatorPos ? "flex-end" : void 0
          },
          titlePaddingBottom: function() {
            return "none" == this.mode ? "12rpx" : ["bottomLeft", "bottomCenter", "bottomRight"].indexOf(this.indicatorPos) >= 0 && "number" == this.mode ? "60rpx" : ["bottomLeft", "bottomCenter", "bottomRight"].indexOf(this.indicatorPos) >= 0 && "number" != this.mode ? "40rpx" : "12rpx"
          }
        },
        methods: {
          listClick: function(t) {
            this.$emit("click", t)
          },
          change: function(t) {
            var e = t.detail.current;
            this.current = e, this.$emit("change", e)
          },
          animationfinish: function(t) {}
        }
      };
      e.default = i
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uview-ui/components/u-swiper/u-swiper-create-component", {
    "uview-ui/components/u-swiper/u-swiper-create-component": function(t, e, n) {
      n("df3c").createComponent(n("9840"))
    }
  },
  [
    ["uview-ui/components/u-swiper/u-swiper-create-component"]
  ]
]);
