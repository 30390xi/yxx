(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uview-ui/components/u-verification-code/u-verification-code"], {
    "0eb5": function(e, t, n) {
      var i = n("72fe");
      n.n(i).a
    },
    4029: function(e, t, n) {
      n.r(t);
      var i = n("e539"),
        c = n.n(i);
      for (var o in i)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(o);
      t.default = c.a
    },
    5797: function(e, t, n) {
      n.d(t, "b", (function() {
        return i
      })), n.d(t, "c", (function() {
        return c
      })), n.d(t, "a", (function() {}));
      var i = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    },
    "72fe": function(e, t, n) {},
    e539: function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          name: "u-verification-code",
          props: {
            seconds: {
              type: [String, Number],
              default: 60
            },
            startText: {
              type: String,
              default: "获取验证码"
            },
            changeText: {
              type: String,
              default: "X秒重新获取"
            },
            endText: {
              type: String,
              default: "重新获取"
            },
            keepRunning: {
              type: Boolean,
              default: !1
            },
            uniqueKey: {
              type: String,
              default: ""
            }
          },
          data: function() {
            return {
              secNum: this.seconds,
              timer: null,
              canGetCode: !0
            }
          },
          mounted: function() {
            this.checkKeepRunning()
          },
          watch: {
            seconds: {
              immediate: !0,
              handler: function(e) {
                this.secNum = e
              }
            }
          },
          methods: {
            checkKeepRunning: function() {
              var t = Number(e.getStorageSync(this.uniqueKey + "_$uCountDownTimestamp"));
              if (!t) return this.changeEvent(this.startText);
              var n = Math.floor(+new Date / 1e3);
              this.keepRunning && t && t > n ? (this.secNum = t - n, e.removeStorageSync(this.uniqueKey + "_$uCountDownTimestamp"), this.start()) : this.changeEvent(this.startText)
            },
            start: function() {
              var e = this;
              this.timer && (clearInterval(this.timer), this.timer = null), this.$emit("start"), this.canGetCode = !1, this.changeEvent(this.changeText.replace(/x|X/, this.secNum)), this.setTimeToStorage(), this.timer = setInterval((function() {
                --e.secNum ? e.changeEvent(e.changeText.replace(/x|X/, e.secNum)) : (clearInterval(e.timer), e.timer = null, e.changeEvent(e.endText), e.secNum = e.seconds, e.$emit("end"), e.canGetCode = !0)
              }), 1e3)
            },
            reset: function() {
              this.canGetCode = !0, clearInterval(this.timer), this.secNum = this.seconds, this.changeEvent(this.endText)
            },
            changeEvent: function(e) {
              this.$emit("change", e)
            },
            setTimeToStorage: function() {
              if (this.keepRunning && this.timer && this.secNum > 0 && this.secNum <= this.seconds) {
                var t = Math.floor(+new Date / 1e3);
                e.setStorage({
                  key: this.uniqueKey + "_$uCountDownTimestamp",
                  data: t + Number(this.secNum)
                })
              }
            }
          },
          beforeDestroy: function() {
            this.setTimeToStorage(), clearTimeout(this.timer), this.timer = null
          }
        };
        t.default = n
      }).call(this, n("df3c").default)
    },
    ef6d: function(e, t, n) {
      n.r(t);
      var i = n("5797"),
        c = n("4029");
      for (var o in c)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return c[e]
        }))
      }(o);
      n("0eb5");
      var a = n("828b"),
        u = Object(a.a)(c.default, i.b, i.c, !1, null, "a608dcec", null, !1, i.a, void 0);
      t.default = u.exports
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uview-ui/components/u-verification-code/u-verification-code-create-component", {
    "uview-ui/components/u-verification-code/u-verification-code-create-component": function(e, t, n) {
      n("df3c").createComponent(n("ef6d"))
    }
  },
  [
    ["uview-ui/components/u-verification-code/u-verification-code-create-component"]
  ]
]);
