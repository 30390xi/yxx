(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uview-ui/components/u-column-notice/u-column-notice"], {
    "4f8b": function(t, e, n) {
      var o = n("a30f");
      n.n(o).a
    },
    "509f": function(t, e, n) {
      n.d(e, "b", (function() {
        return u
      })), n.d(e, "c", (function() {
        return i
      })), n.d(e, "a", (function() {
        return o
      }));
      var o = {
          uIcon: function() {
            return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "61be"))
          }
        },
        u = function() {
          this.$createElement;
          var t = (this._self._c, this.__get_style([this.textStyle]));
          this.$mp.data = Object.assign({}, {
            $root: {
              s0: t
            }
          })
        },
        i = []
    },
    5216: function(t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        props: {
          list: {
            type: Array,
            default: function() {
              return []
            }
          },
          type: {
            type: String,
            default: "warning"
          },
          volumeIcon: {
            type: Boolean,
            default: !0
          },
          moreIcon: {
            type: Boolean,
            default: !1
          },
          closeIcon: {
            type: Boolean,
            default: !1
          },
          autoplay: {
            type: Boolean,
            default: !0
          },
          color: {
            type: String,
            default: ""
          },
          bgColor: {
            type: String,
            default: ""
          },
          direction: {
            type: String,
            default: "row"
          },
          show: {
            type: Boolean,
            default: !0
          },
          fontSize: {
            type: [Number, String],
            default: 26
          },
          duration: {
            type: [Number, String],
            default: 2e3
          },
          volumeSize: {
            type: [Number, String],
            default: 34
          },
          speed: {
            type: Number,
            default: 160
          },
          isCircular: {
            type: Boolean,
            default: !0
          },
          mode: {
            type: String,
            default: "horizontal"
          },
          playState: {
            type: String,
            default: "play"
          },
          disableTouch: {
            type: Boolean,
            default: !0
          },
          padding: {
            type: [Number, String],
            default: "18rpx 24rpx"
          }
        },
        computed: {
          computeColor: function() {
            return this.color ? this.color : "none" == this.type ? "#606266" : this.type
          },
          textStyle: function() {
            var t = {};
            return this.color ? t.color = this.color : "none" == this.type && (t.color = "#606266"), t.fontSize = this.fontSize + "rpx", t
          },
          vertical: function() {
            return "horizontal" != this.mode
          },
          computeBgColor: function() {
            return this.bgColor ? this.bgColor : "none" == this.type ? "transparent" : void 0
          }
        },
        data: function() {
          return {}
        },
        methods: {
          click: function(t) {
            this.$emit("click", t)
          },
          close: function() {
            this.$emit("close")
          },
          getMore: function() {
            this.$emit("getMore")
          },
          change: function(t) {
            t.detail.current == this.list.length - 1 && this.$emit("end")
          }
        }
      };
      e.default = o
    },
    "94ad": function(t, e, n) {
      n.r(e);
      var o = n("509f"),
        u = n("e7ed");
      for (var i in u)["default"].indexOf(i) < 0 && function(t) {
        n.d(e, t, (function() {
          return u[t]
        }))
      }(i);
      n("4f8b");
      var r = n("828b"),
        c = Object(r.a)(u.default, o.b, o.c, !1, null, "f608fb48", null, !1, o.a, void 0);
      e.default = c.exports
    },
    a30f: function(t, e, n) {},
    e7ed: function(t, e, n) {
      n.r(e);
      var o = n("5216"),
        u = n.n(o);
      for (var i in o)["default"].indexOf(i) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(i);
      e.default = u.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uview-ui/components/u-column-notice/u-column-notice-create-component", {
    "uview-ui/components/u-column-notice/u-column-notice-create-component": function(t, e, n) {
      n("df3c").createComponent(n("94ad"))
    }
  },
  [
    ["uview-ui/components/u-column-notice/u-column-notice-create-component"]
  ]
]);
