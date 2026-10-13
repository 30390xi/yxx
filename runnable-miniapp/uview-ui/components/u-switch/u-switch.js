(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uview-ui/components/u-switch/u-switch"], {
    "25d9": function(t, e, n) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = {
          name: "u-switch",
          props: {
            loading: {
              type: Boolean,
              default: !1
            },
            disabled: {
              type: Boolean,
              default: !1
            },
            size: {
              type: [Number, String],
              default: 50
            },
            activeColor: {
              type: String,
              default: "#2979ff"
            },
            inactiveColor: {
              type: String,
              default: "#ffffff"
            },
            value: {
              type: Boolean,
              default: !1
            },
            vibrateShort: {
              type: Boolean,
              default: !1
            },
            activeValue: {
              type: [Number, String, Boolean],
              default: !0
            },
            inactiveValue: {
              type: [Number, String, Boolean],
              default: !1
            }
          },
          data: function() {
            return {}
          },
          computed: {
            switchStyle: function() {
              var t = {};
              return t.fontSize = this.size + "rpx", t.backgroundColor = this.value ? this.activeColor : this.inactiveColor, t
            },
            loadingColor: function() {
              return this.value ? this.activeColor : null
            }
          },
          methods: {
            onClick: function() {
              var e = this;
              this.disabled || this.loading || (this.vibrateShort && t.vibrateShort(), this.$emit("input", !this.value), this.$nextTick((function() {
                e.$emit("change", e.value ? e.activeValue : e.inactiveValue)
              })))
            }
          }
        };
        e.default = n
      }).call(this, n("df3c").default)
    },
    9478: function(t, e, n) {
      n.d(e, "b", (function() {
        return a
      })), n.d(e, "c", (function() {
        return o
      })), n.d(e, "a", (function() {
        return i
      }));
      var i = {
          uLoading: function() {
            return n.e("uview-ui/components/u-loading/u-loading").then(n.bind(null, "9264"))
          }
        },
        a = function() {
          this.$createElement;
          var t = (this._self._c, this.__get_style([this.switchStyle]));
          this.$mp.data = Object.assign({}, {
            $root: {
              s0: t
            }
          })
        },
        o = []
    },
    "9a47": function(t, e, n) {
      n.r(e);
      var i = n("9478"),
        a = n("abda");
      for (var o in a)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(o);
      n("f56d");
      var u = n("828b"),
        c = Object(u.a)(a.default, i.b, i.c, !1, null, "a1e58076", null, !1, i.a, void 0);
      e.default = c.exports
    },
    abda: function(t, e, n) {
      n.r(e);
      var i = n("25d9"),
        a = n.n(i);
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(o);
      e.default = a.a
    },
    cbb7: function(t, e, n) {},
    f56d: function(t, e, n) {
      var i = n("cbb7");
      n.n(i).a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uview-ui/components/u-switch/u-switch-create-component", {
    "uview-ui/components/u-switch/u-switch-create-component": function(t, e, n) {
      n("df3c").createComponent(n("9a47"))
    }
  },
  [
    ["uview-ui/components/u-switch/u-switch-create-component"]
  ]
]);
