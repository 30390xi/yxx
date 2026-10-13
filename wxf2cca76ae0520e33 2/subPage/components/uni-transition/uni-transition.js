require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/components/uni-transition/uni-transition"], {
    "25da": function(t, n, e) {
      e.r(n);
      var o = e("e85e"),
        r = e("efbc");
      for (var i in r)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return r[t]
        }))
      }(i);
      e("b5b3");
      var a = e("828b"),
        c = Object(a.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      n.default = c.exports
    },
    "6c9b": function(t, n, e) {
      var o = e("47a9");
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var r = o(e("7ca3"));

      function i(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          n && (o = o.filter((function(n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable
          }))), e.push.apply(e, o)
        }
        return e
      }

      function a(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2 ? i(Object(e), !0).forEach((function(n) {
            (0, r.default)(t, n, e[n])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : i(Object(e)).forEach((function(n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
          }))
        }
        return t
      }
      var c = {
        name: "uniTransition",
        props: {
          show: {
            type: Boolean,
            default: !1
          },
          modeClass: {
            type: Array,
            default: function() {
              return []
            }
          },
          duration: {
            type: Number,
            default: 300
          },
          styles: {
            type: Object,
            default: function() {
              return {}
            }
          }
        },
        data: function() {
          return {
            isShow: !1,
            transform: "",
            ani: {
              in: "",
              active: ""
            }
          }
        },
        watch: {
          show: {
            handler: function(t) {
              t ? this.open() : this.close()
            },
            immediate: !0
          }
        },
        computed: {
          stylesObject: function() {
            var t = a(a({}, this.styles), {}, {
                "transition-duration": this.duration / 1e3 + "s"
              }),
              n = "";
            for (var e in t) {
              n += this.toLine(e) + ":" + t[e] + ";"
            }
            return n
          }
        },
        created: function() {},
        methods: {
          change: function() {
            this.$emit("click", {
              detail: this.isShow
            })
          },
          open: function() {
            var t = this;
            for (var n in clearTimeout(this.timer), this.isShow = !0, this.transform = "", this.ani.in = "", this.getTranfrom(!1)) "opacity" === n ? this.ani.in = "fade-in" : this.transform += "".concat(this.getTranfrom(!1)[n], " ");
            this.$nextTick((function() {
              setTimeout((function() {
                t._animation(!0)
              }), 50)
            }))
          },
          close: function(t) {
            clearTimeout(this.timer), this._animation(!1)
          },
          _animation: function(t) {
            var n = this,
              e = this.getTranfrom(t);
            for (var o in this.transform = "", e) "opacity" === o ? this.ani.in = "fade-".concat(t ? "out" : "in") : this.transform += "".concat(e[o], " ");
            this.timer = setTimeout((function() {
              t || (n.isShow = !1), n.$emit("change", {
                detail: n.isShow
              })
            }), this.duration)
          },
          getTranfrom: function(t) {
            var n = {
              transform: ""
            };
            return this.modeClass.forEach((function(e) {
              switch (e) {
                case "fade":
                  n.opacity = t ? 1 : 0;
                  break;
                case "slide-top":
                  n.transform += "translateY(".concat(t ? "0" : "-100%", ") ");
                  break;
                case "slide-right":
                  n.transform += "translateX(".concat(t ? "0" : "100%", ") ");
                  break;
                case "slide-bottom":
                  n.transform += "translateY(".concat(t ? "0" : "100%", ") ");
                  break;
                case "slide-left":
                  n.transform += "translateX(".concat(t ? "0" : "-100%", ") ");
                  break;
                case "zoom-in":
                  n.transform += "scale(".concat(t ? 1 : .8, ") ");
                  break;
                case "zoom-out":
                  n.transform += "scale(".concat(t ? 1 : 1.2, ") ")
              }
            })), n
          },
          _modeClassArr: function(t) {
            var n = this.modeClass;
            if ("string" != typeof n) {
              var e = "";
              return n.forEach((function(n) {
                e += n + "-" + t + ","
              })), e.substr(0, e.length - 1)
            }
            return n + "-" + t
          },
          toLine: function(t) {
            return t.replace(/([A-Z])/g, "-$1").toLowerCase()
          }
        }
      };
      n.default = c
    },
    b5b3: function(t, n, e) {
      var o = e("dd35");
      e.n(o).a
    },
    dd35: function(t, n, e) {},
    e85e: function(t, n, e) {
      e.d(n, "b", (function() {
        return o
      })), e.d(n, "c", (function() {
        return r
      })), e.d(n, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        r = []
    },
    efbc: function(t, n, e) {
      e.r(n);
      var o = e("6c9b"),
        r = e.n(o);
      for (var i in o)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(i);
      n.default = r.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/uni-transition/uni-transition-create-component", {
    "subPage/components/uni-transition/uni-transition-create-component": function(t, n, e) {
      e("df3c").createComponent(e("25da"))
    }
  },
  [
    ["subPage/components/uni-transition/uni-transition-create-component"]
  ]
]);
