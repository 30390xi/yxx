require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiReplacement/components/componentSwiper"], {
    "2c2f": function(t, e, i) {},
    7243: function(t, e, i) {
      i.r(e);
      var n = i("ed98"),
        s = i.n(n);
      for (var r in n)["default"].indexOf(r) < 0 && function(t) {
        i.d(e, t, (function() {
          return n[t]
        }))
      }(r);
      e.default = s.a
    },
    "7a5f": function(t, e, i) {
      i.d(e, "b", (function() {
        return n
      })), i.d(e, "c", (function() {
        return s
      })), i.d(e, "a", (function() {}));
      var n = function() {
          this.$createElement;
          this._self._c
        },
        s = []
    },
    "7c52": function(t, e, i) {
      i.r(e);
      var n = i("7a5f"),
        s = i("7243");
      for (var r in s)["default"].indexOf(r) < 0 && function(t) {
        i.d(e, t, (function() {
          return s[t]
        }))
      }(r);
      i("8dff");
      var o = i("828b"),
        c = Object(o.a)(s.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
      e.default = c.exports
    },
    "8dff": function(t, e, i) {
      var n = i("2c2f");
      i.n(n).a
    },
    ed98: function(t, e, i) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = {
          props: {
            swiperList: {
              type: Array,
              default: []
            },
            timeNum: {
              type: Number,
              default: 2e3
            },
            interval: {
              type: Number,
              default: 5e3
            },
            autoplay: {
              type: Boolean,
              default: !1
            },
            smallScreen: {
              type: Boolean,
              default: !1
            },
            type: {
              type: Number,
              default: 1
            },
            current: {
              type: Number,
              default: 0
            }
          },
          data: function() {
            return {
              slideNote: {
                x: 0,
                y: 0
              },
              screenWidth: 0,
              itemStyle: [],
              timer: null,
              timer1: null,
              currentIndex: 0,
              winWidth: 0
            }
          },
          computed: {
            panelHeight: function() {
              return this.smallScreen ? 1 === this.type ? "610rpx" : "629rpx" : 1 === this.type ? "807rpx" : "832rpx"
            },
            childrenWidth: function() {
              return this.smallScreen ? 1 === this.type ? "383rpx" : "375rpx" : 1 === this.type ? "507rpx" : "496rpx"
            }
          },
          watch: {
            swiperList: {
              handler: function(e) {
                var i = this;
                if (e.length) {
                  var n = t.getSystemInfoSync();
                  this.screenWidth = n.screenWidth, this.swiperList.forEach((function(t, e) {
                    i.itemStyle.push(i.getStyle(e))
                  }))
                }
              },
              deep: !0,
              immediate: !0
            }
          },
          mounted: function() {
            var e = this;
            t.getSystemInfo({
              success: function(t) {
                e.winWidth = t.windowWidth
              }
            }), this.autoplay && this.doSomething()
          },
          onUnload: function() {
            this.timer = null, this.timer1 = null
          },
          beforeDestroy: function() {
            this.timer = null, this.timer1 = null
          },
          methods: {
            doSomething: function() {
              var t = this;
              this.$nextTick((function() {
                t.timer = setInterval((function() {
                  t.slideRight()
                }), t.timeNum)
              }))
            },
            restartTimer: function() {
              clearInterval(this.timer), this.timer = null
            },
            scrollToCurrent: function(t) {
              if (-1 !== t) {
                this.restartTimer();
                var e = t - this.currentIndex;
                e < 0 && (e = this.swiperList.length + e);
                for (var i = 0; i < e; i++) this.slideRight();
                this.scrollImg()
              }
            },
            slideRight: function() {
              var t = JSON.parse(JSON.stringify(this.itemStyle)),
                e = [t.pop()];
              t = e.concat(t), this.itemStyle = t, this.currentIndex = (this.currentIndex + 1) % this.swiperList.length
            },
            routerTo: function(t) {
              var e = t.detail.x,
                i = JSON.parse(JSON.stringify(this.itemStyle));
              if (e > this.winWidth / 2) {
                var n = [i.pop()];
                i = n.concat(i), this.currentIndex = (this.currentIndex + 1) % this.swiperList.length, this.scrollImg()
              } else i.push(i[0]), i.splice(0, 1), this.currentIndex = (this.currentIndex - 1 + this.swiperList.length) % this.swiperList.length, this.scrollImg();
              this.itemStyle = i, this.autoplay && (clearInterval(this.timer), this.timer = null, clearTimeout(this.timer1), this.timer1 = setTimeout(this.doSomething, this.interval))
            },
            clickPrevent: function() {},
            scrollImg: function() {
              var t = 1 === this.type ? this.swiperList[this.currentIndex].noBorderUrl : this.swiperList[this.currentIndex].nofaceUrl;
              1 === this.type ? this.$emit("scrollImg", t) : 2 === this.type && this.$emit("scrollImg", t, this.swiperList[this.currentIndex].key)
            },
            getStyle: function(t) {
              if (t > this.swiperList.length / 2) {
                var e = this.swiperList.length - t;
                return {
                  transform: "scale(" + (1 - e / 3.6) + ") translate(-" + 35 * e + "%,0px)",
                  zIndex: 100 - e,
                  opacity: 1
                }
              }
              return {
                transform: "scale(" + (1 - t / 3.6) + ") translate(" + 35 * t + "%,0px)",
                zIndex: 100 - t,
                opacity: 1
              }
            },
            startMove: function(t) {
              clearInterval(this.timer), this.timer = null, this.slideNote.x = t.changedTouches[0] ? t.changedTouches[0].pageX : 0, this.slideNote.y = t.changedTouches[0] ? t.changedTouches[0].pageY : 0
            },
            endMove: function(t) {
              var e = JSON.parse(JSON.stringify(this.itemStyle));
              if (t.changedTouches[0].pageX - this.slideNote.x < -10) {
                var i = [e.pop()];
                e = i.concat(e), this.currentIndex = (this.currentIndex + 1) % this.swiperList.length, this.scrollImg()
              } else t.changedTouches[0].pageX - this.slideNote.x >= 10 && (e.push(e[0]), e.splice(0, 1), this.currentIndex = (this.currentIndex - 1 + this.swiperList.length) % this.swiperList.length, this.scrollImg());
              this.itemStyle = e, this.autoplay && (clearTimeout(this.timer1), this.timer1 = setTimeout(this.doSomething, this.interval))
            }
          }
        };
        e.default = i
      }).call(this, i("df3c").default)
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/pages/aiReplacement/components/componentSwiper-create-component", {
    "union/pages/aiReplacement/components/componentSwiper-create-component": function(t, e, i) {
      i("df3c").createComponent(i("7c52"))
    }
  },
  [
    ["union/pages/aiReplacement/components/componentSwiper-create-component"]
  ]
]);
