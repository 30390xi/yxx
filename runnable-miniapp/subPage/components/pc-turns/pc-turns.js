require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/components/pc-turns/pc-turns"], {
    "89b2": function(t, i, s) {
      var e = s("fd5c");
      s.n(e).a
    },
    "904e": function(t, i, s) {
      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.default = void 0;
      var e = {
        props: {
          data: {
            type: Array,
            default: function() {
              return []
            }
          },
          keys: {
            type: String,
            default: "src"
          },
          delay: {
            type: [String, Number],
            default: 4
          },
          height: {
            type: [String, Number],
            default: 360
          }
        },
        data: function() {
          return {
            db_multis: !1,
            isIndex: 0,
            copyindex: 0,
            delaytimes: 4,
            interval: null,
            isTouchMove: !1,
            pageX: 0,
            imglist: [],
            showlist: [{
              src: "",
              left: "27.5",
              z_index: "100",
              keys: 0,
              scale: "1.2,1.3",
              isMask: !1
            }, {
              src: "",
              left: "55",
              z_index: "90",
              keys: 0,
              scale: "1.2,1.3",
              isMask: !0
            }, {
              src: "",
              left: "0",
              z_index: "90",
              keys: 0,
              scale: "1.2,1.3",
              isMask: !0
            }]
          }
        },
        created: function() {
          var t = this;
          this.initialization(), this.delaytimes = Math.floor(this.delay), this.data.length > 1 && this.delaytimes > 0 && (this.interval = setInterval((function() {
            t.revolve()
          }), 6e3))
        },
        watch: {},
        methods: {
          initialization: function() {
            var t = this;
            this.isIndex = 0, this.imglist = [], this.data.forEach((function(i, s) {
              if (t.keys && i[t.keys]) {
                var e = {
                  src: i[t.keys]
                };
                t.imglist.push(e)
              } else if (t.keys && i.src) {
                var n = {
                  src: i.src
                };
                t.imglist.push(n)
              }
            })), this.imglist[0] && (this.showlist[0].src = this.imglist[0].src, this.showlist[0].keys = 0, this.isIndex = 0), this.imglist[1] && (this.showlist[1].src = this.imglist[1].src, this.showlist[1].keys = 1, this.showlist[1].scale = .9, this.isIndex = 1), 3 == this.imglist.length ? (this.showlist[2].src = this.imglist[2].src, this.showlist[2].keys = 2, this.showlist[2].scale = .9, this.isIndex = 2) : this.imglist.length > 3 && (this.showlist[2].src = this.imglist[this.imglist.length - 1].src, this.showlist[2].keys = this.imglist.length - 1, this.copyindex = this.imglist.length - 1, this.showlist[2].scale = .9, this.db_multis = !0)
          },
          revolve: function() {
            var t = this;
            this.imglist.length < 2 || this.showlist.forEach((function(i) {
              0 == i.left ? (t.db_multis && (t.isIndex == t.imglist.length - 1 ? t.isIndex = 0 : t.isIndex++, i.keys = t.isIndex, i.src = t.imglist[t.isIndex].src), t.imglist.length > 2 && (i.left = 55)) : 55 == i.left ? (i.z_index = 100, i.left = 27.5, i.scale = "1.2,1.3", i.isMask = !1) : 27.5 == i.left && (t.copyindex = i.keys, i.z_index = 90, 2 == t.imglist.length ? i.left = 55 : i.left = 0, i.scale = .9, i.isMask = !0)
            }))
          },
          giveback: function() {
            var t = this;
            this.imglist.length < 2 || (2 != this.imglist.length ? this.showlist.forEach((function(i) {
              0 == i.left ? (i.z_index = 100, i.left = 27.5, i.scale = "1.2,1.3", i.isMask = !1) : 55 == i.left ? (t.db_multis && (0 == t.copyindex ? t.copyindex = t.imglist.length - 1 : t.copyindex--, i.keys = t.copyindex, i.src = t.imglist[t.copyindex].src), i.z_index = 90, i.left = 0) : 27.5 == i.left && (t.isIndex = i.keys, i.z_index = 90, i.left = 55, i.scale = .9, i.isMask = !0)
            })) : this.revolve())
          },
          outputreturn: function(t, i) {
            var s = this;
            clearInterval(this.interval), 0 == t.left ? this.giveback() : 55 == t.left ? this.revolve() : (JSON.parse(JSON.stringify(this.data[t.keys])), console.log(i, "----"), this.$emit("achieve", i)), this.data.length > 1 && this.delaytimes > 0 && (this.interval = setInterval((function() {
              s.revolve()
            }), 6e3))
          },
          handleStart: function(t) {
            this.pageX = t.changedTouches[0].pageX
          },
          handleMove: function(t) {
            this.imglist.length < 1 || (clearInterval(this.interval), t.preventDefault(), this.isTouchMove = !0)
          },
          handleEnd: function(t) {
            var i = this;
            if (this.isTouchMove && !(this.imglist.length < 1)) {
              this.isTouchMove = !1;
              var s = t.changedTouches[0].pageX;
              this.pageX > s && this.pageX - s > 50 ? this.revolve() : this.pageX < s && s - this.pageX > 50 && this.giveback(), this.data.length > 1 && this.delaytimes > 0 && (this.interval = setInterval((function() {
                i.revolve()
              }), 6e3))
            }
          }
        }
      };
      i.default = e
    },
    "9a3a": function(t, i, s) {
      s.r(i);
      var e = s("c31a"),
        n = s("ddbe");
      for (var l in n)["default"].indexOf(l) < 0 && function(t) {
        s.d(i, t, (function() {
          return n[t]
        }))
      }(l);
      s("89b2");
      var a = s("828b"),
        h = Object(a.a)(n.default, e.b, e.c, !1, null, "15d92d40", null, !1, e.a, void 0);
      i.default = h.exports
    },
    c31a: function(t, i, s) {
      s.d(i, "b", (function() {
        return e
      })), s.d(i, "c", (function() {
        return n
      })), s.d(i, "a", (function() {}));
      var e = function() {
          this.$createElement;
          this._self._c
        },
        n = []
    },
    ddbe: function(t, i, s) {
      s.r(i);
      var e = s("904e"),
        n = s.n(e);
      for (var l in e)["default"].indexOf(l) < 0 && function(t) {
        s.d(i, t, (function() {
          return e[t]
        }))
      }(l);
      i.default = n.a
    },
    fd5c: function(t, i, s) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/pc-turns/pc-turns-create-component", {
    "subPage/components/pc-turns/pc-turns-create-component": function(t, i, s) {
      s("df3c").createComponent(s("9a3a"))
    }
  },
  [
    ["subPage/components/pc-turns/pc-turns-create-component"]
  ]
]);
