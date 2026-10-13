(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uview-ui/components/u-divider/u-divider"], {
    2166: function(t, e, i) {
      i.r(e);
      var n = i("6b67"),
        r = i.n(n);
      for (var o in n)["default"].indexOf(o) < 0 && function(t) {
        i.d(e, t, (function() {
          return n[t]
        }))
      }(o);
      e.default = r.a
    },
    "40b9": function(t, e, i) {
      i.r(e);
      var n = i("46cd"),
        r = i("2166");
      for (var o in r)["default"].indexOf(o) < 0 && function(t) {
        i.d(e, t, (function() {
          return r[t]
        }))
      }(o);
      i("517d");
      var u = i("828b"),
        d = Object(u.a)(r.default, n.b, n.c, !1, null, "0ab75285", null, !1, n.a, void 0);
      e.default = d.exports
    },
    "46cd": function(t, e, i) {
      i.d(e, "b", (function() {
        return n
      })), i.d(e, "c", (function() {
        return r
      })), i.d(e, "a", (function() {}));
      var n = function() {
          this.$createElement;
          var t = (this._self._c, this.__get_style([this.lineStyle])),
            e = this.__get_style([this.lineStyle]);
          this.$mp.data = Object.assign({}, {
            $root: {
              s0: t,
              s1: e
            }
          })
        },
        r = []
    },
    "517d": function(t, e, i) {
      var n = i("a8e8");
      i.n(n).a
    },
    "6b67": function(t, e, i) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        name: "u-divider",
        props: {
          halfWidth: {
            type: [Number, String],
            default: 150
          },
          borderColor: {
            type: String,
            default: "#dcdfe6"
          },
          type: {
            type: String,
            default: "primary"
          },
          color: {
            type: String,
            default: "#909399"
          },
          fontSize: {
            type: [Number, String],
            default: 26
          },
          bgColor: {
            type: String,
            default: "#ffffff"
          },
          height: {
            type: [Number, String],
            default: "auto"
          },
          marginTop: {
            type: [String, Number],
            default: 0
          },
          marginBottom: {
            type: [String, Number],
            default: 0
          },
          useSlot: {
            type: Boolean,
            default: !0
          }
        },
        computed: {
          lineStyle: function() {
            var t = {};
            return -1 != String(this.halfWidth).indexOf("%") ? t.width = this.halfWidth : t.width = this.halfWidth + "rpx", this.borderColor && (t.borderColor = this.borderColor), t
          }
        },
        methods: {
          click: function() {
            this.$emit("click")
          }
        }
      };
      e.default = n
    },
    a8e8: function(t, e, i) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uview-ui/components/u-divider/u-divider-create-component", {
    "uview-ui/components/u-divider/u-divider-create-component": function(t, e, i) {
      i("df3c").createComponent(i("40b9"))
    }
  },
  [
    ["uview-ui/components/u-divider/u-divider-create-component"]
  ]
]);
