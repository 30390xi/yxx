require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/preview/preview"], {
    "0922": function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          data: function() {
            return {
              page: 1,
              loadMore: "loading",
              list: [{
                name: "图片"
              }, {
                name: "视频"
              }, {
                name: "相关"
              }],
              list2: [{
                name: "图片"
              }, {
                name: "相关"
              }],
              current: 0,
              dataList: [],
              activeStyle: {
                "font-weight": "bold",
                "font-size": "32rpx"
              },
              barStyle: {
                background: "linear-gradient(56deg, #FC4A9E 0%, #FF5411 100%)",
                "border-radius": "8px",
                position: "absolute",
                bottom: "18rpx"
              },
              resourcesType: 1,
              showScreen: !1,
              background: ["color1", "color2", "color3"],
              indicatorDots: !0,
              autoplay: !0,
              showVideo: getApp().globalData.showvideo,
              interval: 2e3,
              duration: 500,
              swiperCurrent: 1,
              swiperLenght: 0,
              currentSwiper: 0,
              statusBarHeight: 0,
              navbarH: 60
            }
          },
          onLoad: function(t) {
            this.statusBarHeight = e.getSystemInfoSync().statusBarHeight, this.dataList = e.getStorageSync("mediaList"), this.swiperLenght = this.dataList.length, this.index = Number(t.index), this.swiperCurrent = this.index + 1, this.currentSwiper = this.index
          },
          methods: {
            swiperChange: function(e) {
              this.swiperCurrent = e.detail.current + 1
            },
            openMedia: function(e) {
              this.showScreen = !0
            },
            closeMask: function() {
              this.showScreen = !1
            }
          }
        };
        t.default = n
      }).call(this, n("df3c").default)
    },
    "6b42": function(e, t, n) {
      n.r(t);
      var a = n("0922"),
        i = n.n(a);
      for (var r in a)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(r);
      t.default = i.a
    },
    a11e: function(e, t, n) {
      (function(e, t) {
        var a = n("47a9");
        n("5366"), a(n("3240"));
        var i = a(n("a1b4"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    a1b4: function(e, t, n) {
      n.r(t);
      var a = n("f01c"),
        i = n("6b42");
      for (var r in i)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(r);
      n("c15e");
      var o = n("828b"),
        u = Object(o.a)(i.default, a.b, a.c, !1, null, "027fdb71", null, !1, a.a, void 0);
      t.default = u.exports
    },
    c15e: function(e, t, n) {
      var a = n("cb81");
      n.n(a).a
    },
    cb81: function(e, t, n) {},
    f01c: function(e, t, n) {
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return i
      })), n.d(t, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    }
  },
  [
    ["a11e", "common/runtime", "common/vendor"]
  ]
]);
