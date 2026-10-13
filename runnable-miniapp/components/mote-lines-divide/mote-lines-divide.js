(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/mote-lines-divide/mote-lines-divide"], {
    "0e29": function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          data: function() {
            return {
              textHeight: 0,
              lineHeight: 1,
              placeholder: "占位"
            }
          },
          props: {
            line: {
              type: [Number, String],
              default: 1
            },
            dt: {
              type: [String],
              default: ""
            },
            enableButton: {
              type: Boolean,
              default: !0
            },
            expandText: {
              type: String,
              default: "展开"
            },
            foldHint: {
              type: String,
              default: "收起"
            },
            isHide: {
              type: Boolean,
              default: !0
            }
          },
          watch: {
            dt: function() {
              var t = this;
              setTimeout((function() {
                e.createSelectorQuery().in(t).select(".content").boundingClientRect((function(e) {
                  t.textHeight = e.height
                })).exec()
              }), 100)
            },
            isHide: function(e) {
              this.$bus.$emit("openIntroduce")
            }
          },
          mounted: function() {
            var t = this;
            this.enableButton && e.createSelectorQuery().in(this).select(".placeholder").boundingClientRect((function(e) {
              t.lineHeight = e.height
            })).exec();
            this.placeholder = ""
          },
          computed: {
            lines: function() {
              if (!this.enableButton) return this.line;
              var e = Math.round(this.textHeight > 0 && this.lineHeight > 0 ? this.textHeight / this.lineHeight : 0);
              return this.$emit("line_show", e), e
            }
          }
        };
        t.default = n
      }).call(this, n("df3c").default)
    },
    "8eb9": function(e, t, n) {},
    "9eaa": function(e, t, n) {
      n.r(t);
      var i = n("0e29"),
        o = n.n(i);
      for (var c in i)["default"].indexOf(c) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(c);
      t.default = o.a
    },
    ad97: function(e, t, n) {
      n.d(t, "b", (function() {
        return i
      })), n.d(t, "c", (function() {
        return o
      })), n.d(t, "a", (function() {}));
      var i = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    b080: function(e, t, n) {
      n.r(t);
      var i = n("ad97"),
        o = n("9eaa");
      for (var c in o)["default"].indexOf(c) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(c);
      n("f720");
      var a = n("828b"),
        l = Object(a.a)(o.default, i.b, i.c, !1, null, "30ec223e", null, !1, i.a, void 0);
      t.default = l.exports
    },
    f720: function(e, t, n) {
      var i = n("8eb9");
      n.n(i).a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/mote-lines-divide/mote-lines-divide-create-component", {
    "components/mote-lines-divide/mote-lines-divide-create-component": function(e, t, n) {
      n("df3c").createComponent(n("b080"))
    }
  },
  [
    ["components/mote-lines-divide/mote-lines-divide-create-component"]
  ]
]);
