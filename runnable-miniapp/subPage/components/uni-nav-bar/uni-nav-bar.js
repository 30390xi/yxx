require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/components/uni-nav-bar/uni-nav-bar"], {
    "106a": function(t, n, e) {
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var i = function(t) {
            return "number" == typeof t ? t + "px" : t
          },
          o = {
            name: "UniNavBar",
            components: {
              statusBar: function() {
                e.e("subPage/components/uni-nav-bar/uni-status-bar").then(function() {
                  return resolve(e("7fee"))
                }.bind(null, e)).catch(e.oe)
              }
            },
            emits: ["clickLeft", "clickRight", "clickTitle"],
            props: {
              dark: {
                type: Boolean,
                default: !1
              },
              title: {
                type: String,
                default: ""
              },
              leftText: {
                type: String,
                default: ""
              },
              rightText: {
                type: String,
                default: ""
              },
              leftIcon: {
                type: String,
                default: ""
              },
              rightIcon: {
                type: String,
                default: ""
              },
              fixed: {
                type: [Boolean, String],
                default: !1
              },
              color: {
                type: String,
                default: ""
              },
              backgroundColor: {
                type: String,
                default: ""
              },
              statusBar: {
                type: [Boolean, String],
                default: !1
              },
              shadow: {
                type: [Boolean, String],
                default: !1
              },
              border: {
                type: [Boolean, String],
                default: !0
              },
              height: {
                type: [Number, String],
                default: 44
              },
              leftWidth: {
                type: [Number, String],
                default: 60
              },
              rightWidth: {
                type: [Number, String],
                default: 60
              },
              stat: {
                type: [Boolean, String],
                default: ""
              }
            },
            computed: {
              themeBgColor: function() {
                return this.dark ? this.backgroundColor ? this.backgroundColor : this.dark ? "#333" : "#FFF" : this.backgroundColor || "#FFF"
              },
              themeColor: function() {
                return this.dark ? this.color ? this.color : this.dark ? "#fff" : "#333" : this.color || "#333"
              },
              navbarHeight: function() {
                return i(this.height)
              },
              leftIconWidth: function() {
                return i(this.leftWidth)
              },
              rightIconWidth: function() {
                return i(this.rightWidth)
              }
            },
            mounted: function() {
              t.report && this.stat && "" !== this.title && t.report("title", this.title)
            },
            methods: {
              onClickLeft: function() {
                this.$emit("clickLeft")
              },
              onClickRight: function() {
                this.$emit("clickRight")
              },
              onClickTitle: function() {
                this.$emit("clickTitle")
              }
            }
          };
        n.default = o
      }).call(this, e("df3c").default)
    },
    1897: function(t, n, e) {
      var i = e("6335");
      e.n(i).a
    },
    6335: function(t, n, e) {},
    "87cc": function(t, n, e) {
      e.d(n, "b", (function() {
        return o
      })), e.d(n, "c", (function() {
        return r
      })), e.d(n, "a", (function() {
        return i
      }));
      var i = {
          uniIcons: function() {
            return Promise.all([e.e("common/vendor"), e.e("components/uni-icons/uni-icons")]).then(e.bind(null, "365b"))
          }
        },
        o = function() {
          var t = this,
            n = (t.$createElement, t._self._c, t.leftIcon.length),
            e = t.leftText.length,
            i = e ? t.leftIcon.length : null,
            o = t.title.length,
            r = t.rightIcon.length,
            a = t.rightText.length && !t.rightIcon.length;
          t.$mp.data = Object.assign({}, {
            $root: {
              g0: n,
              g1: e,
              g2: i,
              g3: o,
              g4: r,
              g5: a
            }
          })
        },
        r = []
    },
    "97b0": function(t, n, e) {
      e.r(n);
      var i = e("106a"),
        o = e.n(i);
      for (var r in i)["default"].indexOf(r) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(r);
      n.default = o.a
    },
    e1c6: function(t, n, e) {
      e.r(n);
      var i = e("87cc"),
        o = e("97b0");
      for (var r in o)["default"].indexOf(r) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(r);
      e("1897");
      var a = e("828b"),
        u = Object(a.a)(o.default, i.b, i.c, !1, null, "6d988502", null, !1, i.a, void 0);
      n.default = u.exports
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/uni-nav-bar/uni-nav-bar-create-component", {
    "subPage/components/uni-nav-bar/uni-nav-bar-create-component": function(t, n, e) {
      e("df3c").createComponent(e("e1c6"))
    }
  },
  [
    ["subPage/components/uni-nav-bar/uni-nav-bar-create-component"]
  ]
]);
