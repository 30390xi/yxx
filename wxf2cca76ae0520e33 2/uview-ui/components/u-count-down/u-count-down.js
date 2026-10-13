(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uview-ui/components/u-count-down/u-count-down"], {
    "08d79": function(t, e, o) {},
    "16cc": function(t, e, o) {
      o.r(e);
      var n = o("aebaf"),
        i = o.n(n);
      for (var r in n)["default"].indexOf(r) < 0 && function(t) {
        o.d(e, t, (function() {
          return n[t]
        }))
      }(r);
      e.default = i.a
    },
    4490: function(t, e, o) {
      var n = o("08d79");
      o.n(n).a
    },
    "731a": function(t, e, o) {
      o.r(e);
      var n = o("ae53"),
        i = o("16cc");
      for (var r in i)["default"].indexOf(r) < 0 && function(t) {
        o.d(e, t, (function() {
          return i[t]
        }))
      }(r);
      o("4490");
      var a = o("828b"),
        s = Object(a.a)(i.default, n.b, n.c, !1, null, "323f6193", null, !1, n.a, void 0);
      e.default = s.exports
    },
    ae53: function(t, e, o) {
      o.d(e, "b", (function() {
        return n
      })), o.d(e, "c", (function() {
        return i
      })), o.d(e, "a", (function() {}));
      var n = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.showDays ? t.__get_style([t.itemStyle]) : null),
            o = t.showDays ? t.__get_style([t.letterStyle]) : null,
            n = t.showHours ? t.__get_style([t.itemStyle]) : null,
            i = t.showMinutes ? t.__get_style([t.itemStyle]) : null,
            r = t.showSeconds ? t.__get_style([t.itemStyle]) : null;
          t.$mp.data = Object.assign({}, {
            $root: {
              s0: e,
              s1: o,
              s2: n,
              s3: i,
              s4: r
            }
          })
        },
        i = []
    },
    aebaf: function(t, e, o) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        name: "u-count-down",
        props: {
          timestamp: {
            type: [Number, String],
            default: 0
          },
          autoplay: {
            type: Boolean,
            default: !0
          },
          separator: {
            type: String,
            default: "colon"
          },
          separatorSize: {
            type: [Number, String],
            default: 30
          },
          separatorColor: {
            type: String,
            default: "#303133"
          },
          color: {
            type: String,
            default: "#303133"
          },
          fontSize: {
            type: [Number, String],
            default: 30
          },
          bgColor: {
            type: String,
            default: "#fff"
          },
          height: {
            type: [Number, String],
            default: "auto"
          },
          showBorder: {
            type: Boolean,
            default: !1
          },
          borderColor: {
            type: String,
            default: "#303133"
          },
          showSeconds: {
            type: Boolean,
            default: !0
          },
          showMinutes: {
            type: Boolean,
            default: !0
          },
          showHours: {
            type: Boolean,
            default: !0
          },
          showDays: {
            type: Boolean,
            default: !0
          }
        },
        watch: {
          timestamp: function(t, e) {
            clearInterval(this.timer), this.start()
          }
        },
        data: function() {
          return {
            d: "00",
            h: "00",
            i: "00",
            s: "00",
            timer: null,
            seconds: 0
          }
        },
        computed: {
          itemStyle: function() {
            var t = {};
            return this.height && (t.height = this.height + "rpx", t.width = this.height + "rpx"), this.showBorder && (t.borderStyle = "solid", t.borderColor = this.borderColor, t.borderWidth = "1px"), this.bgColor && (t.backgroundColor = this.bgColor), t
          },
          letterStyle: function() {
            var t = {};
            return this.fontSize && (t.fontSize = this.fontSize + "rpx"), this.color && (t.color = this.color), t
          }
        },
        mounted: function() {
          this.autoplay && this.timestamp && this.start()
        },
        methods: {
          start: function() {
            var t = this;
            this.timestamp <= 0 || (this.seconds = Number(this.timestamp), this.formatTime(this.seconds), this.timer = setInterval((function() {
              if (t.seconds--, t.$emit("change", t.seconds), t.seconds < 0) return t.end();
              t.formatTime(t.seconds)
            }), 1e3))
          },
          formatTime: function(t) {
            t <= 0 && this.end();
            var e, o, n = 0,
              i = 0;
            e = Math.floor(t / 86400), o = Math.floor(t / 3600) - 24 * e;
            var r = null;
            r = this.showDays ? o : Math.floor(t / 3600), n = Math.floor(t / 60) - 60 * o - 24 * e * 60, i = Math.floor(t) - 24 * e * 60 * 60 - 60 * o * 60 - 60 * n, r = r < 10 ? "0" + r : r, n = n < 10 ? "0" + n : n, i = i < 10 ? "0" + i : i, this.d = e, this.h = r, this.i = n, this.s = i
          },
          end: function() {
            clearInterval(this.timer), this.timer = null, this.$emit("end", {})
          }
        },
        beforeDestroy: function() {
          clearInterval(this.timer), this.timer = null
        }
      };
      e.default = n
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uview-ui/components/u-count-down/u-count-down-create-component", {
    "uview-ui/components/u-count-down/u-count-down-create-component": function(t, e, o) {
      o("df3c").createComponent(o("731a"))
    }
  },
  [
    ["uview-ui/components/u-count-down/u-count-down-create-component"]
  ]
]);
