require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/components/kevy-swiper/kevy-swiper"], {
    "436b": function(t, e, i) {
      var n = i("f3d7");
      i.n(n).a
    },
    6195: function(t, e, i) {
      i.d(e, "b", (function() {
        return n
      })), i.d(e, "c", (function() {
        return r
      })), i.d(e, "a", (function() {}));
      var n = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.list && t.list.length > 0),
            i = e ? t.__map(t.list, (function(e, i) {
              return {
                $orig: t.__get_orig(e),
                g1: 5 == t.showNum && t.list.length >= 5,
                m0: t.isObj(e)
              }
            })) : null;
          t.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              l0: i
            }
          })
        },
        r = []
    },
    "6da1": function(t, e, i) {
      i.r(e);
      var n = i("6195"),
        r = i("d43f");
      for (var s in r)["default"].indexOf(s) < 0 && function(t) {
        i.d(e, t, (function() {
          return r[t]
        }))
      }(s);
      i("436b");
      var a = i("828b"),
        o = Object(a.a)(r.default, n.b, n.c, !1, null, "d34e81a2", null, !1, n.a, void 0);
      e.default = o.exports
    },
    d43f: function(t, e, i) {
      i.r(e);
      var n = i("e787"),
        r = i.n(n);
      for (var s in n)["default"].indexOf(s) < 0 && function(t) {
        i.d(e, t, (function() {
          return n[t]
        }))
      }(s);
      e.default = r.a
    },
    e787: function(t, e, i) {
      var n = i("47a9");
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var r = n(i("3b2d")),
        s = {
          props: {
            list: {
              type: Array,
              default: []
            },
            height: {
              type: Number,
              default: 690
            },
            showNum: {
              type: Number,
              default: 3
            },
            width: {
              type: Number,
              default: void 0
            },
            autoPlay: {
              type: Boolean,
              default: !1
            },
            autoPlayInterval: {
              type: Number,
              default: 5e3
            },
            showDot: {
              type: Boolean,
              default: !1
            },
            descAniType: {
              type: String,
              default: "slideFromRight"
            },
            dotColor: {
              type: String,
              default: "linear-gradient(to bottom, #999999, #c0c0c0)"
            },
            dotSelectedColor: {
              type: String,
              default: "linear-gradient(to bottom, #92ffc0, #002661)"
            }
          },
          data: function() {
            return {
              curr: 0,
              start: {
                x: 0,
                y: 0
              },
              styleList: [],
              timer: void 0
            }
          },
          created: function() {
            this.isObj({}), this.initSwiper()
          },
          watch: {
            list: function(t, e) {
              this.curr = 0, this.start = {
                x: 0,
                y: 0
              }, this.styleList = [], this.closeTimer(), this.initSwiper()
            },
            curr: function(t) {
              this.$forceUpdate()
            }
          },
          methods: {
            initSwiper: function() {
              var t = this;
              this.list && this.list.length > 0 && (this.list.forEach((function(e, i) {
                t.styleList.push(t.addStyle(i))
              })), this.openTimer())
            },
            openTimer: function() {
              var t = this;
              !0 === this.autoPlay && this.list.length > 1 && (this.timer = setInterval((function() {
                t.curr = t.curr == t.list.length - 1 ? 0 : t.curr + 1, t.toSlideLeft()
              }), this.autoPlayInterval))
            },
            closeTimer: function() {
              !0 === this.autoPlay && this.list.length > 1 && (clearInterval(this.timer), this.timer = void 0)
            },
            addStyle: function(t) {
              var e = this.list.length;
              if (5 == this.showNum && this.list.length, t > e / 2) {
                var i = e - t;
                return {
                  transform: "scale(" + (1 - i / 4) + ") translate(-" + 36 * i + "%,0px)",
                  zIndex: 9999 - i
                }
              }
              return {
                transform: "scale(" + (1 - t / 4) + ") translate(" + 36 * t + "%,0px)",
                zIndex: 9999 - t
              }
            },
            touchStart: function(t) {
              this.start.x = t.changedTouches[0] ? t.changedTouches[0].pageX : 0, this.start.y = t.changedTouches[0] ? t.changedTouches[0].pageY : 0, this.closeTimer()
            },
            touchEnd: function(t) {
              var e = this.styleList.length,
                i = Number(t.target.id),
                n = t.changedTouches[0].pageX - this.start.x,
                r = t.changedTouches[0].pageY - this.start.y;
              if (Math.abs(n) > Math.abs(r)) {
                if (0 === n) return void this.openTimer();
                n < 0 ? (this.curr = i === e - 1 ? 0 : i + 1, this.toSlideLeft()) : n > 0 && (this.curr = 0 === i ? e - 1 : i - 1, this.toSlideRight())
              } else if (0 === n) return;
              this.openTimer()
            },
            toSlideLeft: function() {
              var t = JSON.parse(JSON.stringify(this.styleList)),
                e = [t.pop()];
              t = e.concat(t), this.styleList = t;
              var i = this;
              t.forEach((function(t, e) {
                9999 == t.zIndex && (i.curr = e)
              })), this.$emit("change", this.curr)
            },
            toSlideRight: function() {
              var t = JSON.parse(JSON.stringify(this.styleList)),
                e = [t.shift()];
              t = t.concat(e), this.styleList = t;
              var i = this;
              t.forEach((function(t, e) {
                9999 == t.zIndex && (i.curr = e)
              })), this.$emit("change", this.curr)
            },
            itemClick: function(t) {
              this.$emit("click", t)
            },
            isObj: function(t) {
              try {
                return "object" === (0, r.default)(t) && null !== t
              } catch (t) {
                return !1
              }
            }
          }
        };
      e.default = s
    },
    f3d7: function(t, e, i) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/kevy-swiper/kevy-swiper-create-component", {
    "subPage/components/kevy-swiper/kevy-swiper-create-component": function(t, e, i) {
      i("df3c").createComponent(i("6da1"))
    }
  },
  [
    ["subPage/components/kevy-swiper/kevy-swiper-create-component"]
  ]
]);
