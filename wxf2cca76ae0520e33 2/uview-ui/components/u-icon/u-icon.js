(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uview-ui/components/u-icon/u-icon"], {
    "089a": function(t, e, n) {},
    "12ad": function(t, e, n) {
      n.d(e, "b", (function() {
        return i
      })), n.d(e, "c", (function() {
        return o
      })), n.d(e, "a", (function() {}));
      var i = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.__get_style([t.customStyle])),
            n = t.isImg ? t.__get_style([t.imgStyle]) : null,
            i = t.isImg ? null : t.__get_style([t.iconStyle]);
          t.$mp.data = Object.assign({}, {
            $root: {
              s0: e,
              s1: n,
              s2: i
            }
          })
        },
        o = []
    },
    "52db": function(t, e, n) {
      var i = n("089a");
      n.n(i).a
    },
    "61be": function(t, e, n) {
      n.r(e);
      var i = n("12ad"),
        o = n("dd16");
      for (var u in o)["default"].indexOf(u) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(u);
      n("52db");
      var r = n("828b"),
        c = Object(r.a)(o.default, i.b, i.c, !1, null, "dc09783e", null, !1, i.a, void 0);
      e.default = c.exports
    },
    b6de: function(t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = {
        name: "u-icon",
        props: {
          name: {
            type: String,
            default: ""
          },
          color: {
            type: String,
            default: ""
          },
          size: {
            type: [Number, String],
            default: "inherit"
          },
          bold: {
            type: Boolean,
            default: !1
          },
          index: {
            type: [Number, String],
            default: ""
          },
          hoverClass: {
            type: String,
            default: ""
          },
          customPrefix: {
            type: String,
            default: "uicon"
          },
          label: {
            type: String,
            default: ""
          },
          labelPos: {
            type: String,
            default: "right"
          },
          labelSize: {
            type: [String, Number],
            default: "28"
          },
          labelColor: {
            type: String,
            default: "#606266"
          },
          marginLeft: {
            type: [String, Number],
            default: "6"
          },
          marginTop: {
            type: [String, Number],
            default: "6"
          },
          marginRight: {
            type: [String, Number],
            default: "6"
          },
          marginBottom: {
            type: [String, Number],
            default: "6"
          },
          imgMode: {
            type: String,
            default: "widthFix"
          },
          customStyle: {
            type: Object,
            default: function() {
              return {}
            }
          }
        },
        computed: {
          customClass: function() {
            var t = [];
            return t.push(this.customPrefix + "-" + this.name), "uicon" == this.customPrefix ? t.push("u-iconfont") : t.push(this.customPrefix), this.color && this.$u.config.type.includes(this.color) && t.push("u-icon__icon--" + this.color), t
          },
          iconStyle: function() {
            var t = {};
            return t = {
              fontSize: "inherit" == this.size ? "inherit" : this.size + "rpx",
              fontWeight: this.bold ? "bold" : "normal"
            }, this.color && !this.$u.config.type.includes(this.color) && (t.color = this.color), t
          },
          isImg: function() {
            return -1 !== this.name.indexOf("/")
          },
          imgStyle: function() {
            var t = {};
            return t.width = this.size + "rpx", t
          }
        },
        methods: {
          click: function() {
            this.$emit("click", this.index)
          },
          touchstart: function() {
            this.$emit("touchstart", this.index)
          }
        }
      };
      e.default = i
    },
    dd16: function(t, e, n) {
      n.r(e);
      var i = n("b6de"),
        o = n.n(i);
      for (var u in i)["default"].indexOf(u) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(u);
      e.default = o.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uview-ui/components/u-icon/u-icon-create-component", {
    "uview-ui/components/u-icon/u-icon-create-component": function(t, e, n) {
      n("df3c").createComponent(n("61be"))
    }
  },
  [
    ["uview-ui/components/u-icon/u-icon-create-component"]
  ]
]);
