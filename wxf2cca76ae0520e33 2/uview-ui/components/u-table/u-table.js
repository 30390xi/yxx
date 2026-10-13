(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uview-ui/components/u-table/u-table"], {
    "279d": function(t, e, n) {
      var o = n("ce64");
      n.n(o).a
    },
    "3ad5": function(t, e, n) {
      n.r(e);
      var o = n("9074"),
        r = n.n(o);
      for (var u in o)["default"].indexOf(u) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(u);
      e.default = r.a
    },
    8977: function(t, e, n) {
      n.r(e);
      var o = n("ff6b"),
        r = n("3ad5");
      for (var u in r)["default"].indexOf(u) < 0 && function(t) {
        n.d(e, t, (function() {
          return r[t]
        }))
      }(u);
      n("279d");
      var a = n("828b"),
        i = Object(a.a)(r.default, o.b, o.c, !1, null, "5197d689", null, !1, o.a, void 0);
      e.default = i.exports
    },
    9074: function(t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        name: "u-table",
        props: {
          borderColor: {
            type: String,
            default: "#e4e7ed"
          },
          align: {
            type: String,
            default: "center"
          },
          padding: {
            type: String,
            default: "10rpx 6rpx"
          },
          fontSize: {
            type: [String, Number],
            default: 28
          },
          color: {
            type: String,
            default: "#606266"
          },
          thStyle: {
            type: Object,
            default: function() {
              return {}
            }
          },
          bgColor: {
            type: String,
            default: "#ffffff"
          }
        },
        provide: function() {
          return {
            uTable: this,
            uTd: this
          }
        },
        data: function() {
          return {}
        },
        computed: {
          tableStyle: function() {
            var t = {};
            return t.borderLeft = "solid 1px ".concat(this.borderColor), t.borderTop = "solid 1px ".concat(this.borderColor), t.backgroundColor = this.bgColor, t
          }
        }
      };
      e.default = o
    },
    ce64: function(t, e, n) {},
    ff6b: function(t, e, n) {
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return r
      })), n.d(e, "a", (function() {}));
      var o = function() {
          this.$createElement;
          var t = (this._self._c, this.__get_style([this.tableStyle]));
          this.$mp.data = Object.assign({}, {
            $root: {
              s0: t
            }
          })
        },
        r = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uview-ui/components/u-table/u-table-create-component", {
    "uview-ui/components/u-table/u-table-create-component": function(t, e, n) {
      n("df3c").createComponent(n("8977"))
    }
  },
  [
    ["uview-ui/components/u-table/u-table-create-component"]
  ]
]);
