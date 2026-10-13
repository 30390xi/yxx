(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uview-ui/components/u-message-input/u-message-input"], {
    "0013": function(e, t, n) {
      n.r(t);
      var a = n("5cc1"),
        u = n("8ab5");
      for (var i in u)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return u[e]
        }))
      }(i);
      n("a2bd");
      var o = n("828b"),
        r = Object(o.a)(u.default, a.b, a.c, !1, null, "6af76142", null, !1, a.a, void 0);
      t.default = r.exports
    },
    "33fb": function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var a = {
        name: "u-message-input",
        props: {
          maxlength: {
            type: [Number, String],
            default: 4
          },
          dotFill: {
            type: Boolean,
            default: !1
          },
          mode: {
            type: String,
            default: "box"
          },
          value: {
            type: [String, Number],
            default: ""
          },
          breathe: {
            type: Boolean,
            default: !0
          },
          focus: {
            type: Boolean,
            default: !1
          },
          bold: {
            type: Boolean,
            default: !1
          },
          fontSize: {
            type: [String, Number],
            default: 60
          },
          activeColor: {
            type: String,
            default: "#2979ff"
          },
          inactiveColor: {
            type: String,
            default: "#606266"
          },
          width: {
            type: [Number, String],
            default: "80"
          },
          disabledKeyboard: {
            type: Boolean,
            default: !1
          }
        },
        watch: {
          maxlength: {
            immediate: !0,
            handler: function(e) {
              this.maxlength = Number(e)
            }
          },
          value: {
            immediate: !0,
            handler: function(e) {
              e = String(e), this.valueModel = e.substring(0, this.maxlength)
            }
          }
        },
        data: function() {
          return {
            valueModel: ""
          }
        },
        computed: {
          animationClass: function() {
            var e = this;
            return function(t) {
              return e.breathe && e.charArr.length == t ? "u-breathe" : ""
            }
          },
          charArr: function() {
            return this.valueModel.split("")
          },
          charArrLength: function() {
            return this.charArr.length
          }
        },
        methods: {
          getVal: function(e) {
            var t = e.detail.value;
            this.valueModel = t, String(t).length > this.maxlength || (this.$emit("change", t), String(t).length == this.maxlength && this.$emit("finish", t))
          }
        }
      };
      t.default = a
    },
    "5cc1": function(e, t, n) {
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return u
      })), n.d(t, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        u = []
    },
    "8ab5": function(e, t, n) {
      n.r(t);
      var a = n("33fb"),
        u = n.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(i);
      t.default = u.a
    },
    a2bd: function(e, t, n) {
      var a = n("d68c");
      n.n(a).a
    },
    d68c: function(e, t, n) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uview-ui/components/u-message-input/u-message-input-create-component", {
    "uview-ui/components/u-message-input/u-message-input-create-component": function(e, t, n) {
      n("df3c").createComponent(n("0013"))
    }
  },
  [
    ["uview-ui/components/u-message-input/u-message-input-create-component"]
  ]
]);
