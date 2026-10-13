require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/pages/teamNFC/index"], {
    2044: function(e, t, a) {
      (function(e, t) {
        var n = a("47a9");
        a("5366"), n(a("3240"));
        var i = n(a("4262"));
        e.__webpack_require_UNI_MP_PLUGIN__ = a, t(i.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    2438: function(e, t, a) {
      var n = a("89ad");
      a.n(n).a
    },
    2676: function(e, t, a) {
      a.d(t, "b", (function() {
        return n
      })), a.d(t, "c", (function() {
        return i
      })), a.d(t, "a", (function() {}));
      var n = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    4262: function(e, t, a) {
      a.r(t);
      var n = a("2676"),
        i = a("84ec");
      for (var o in i)["default"].indexOf(o) < 0 && function(e) {
        a.d(t, e, (function() {
          return i[e]
        }))
      }(o);
      a("4a09"), a("2438");
      var r = a("828b"),
        c = Object(r.a)(i.default, n.b, n.c, !1, null, "26c6a14f", null, !1, n.a, void 0);
      t.default = c.exports
    },
    "4a09": function(e, t, a) {
      var n = a("f6d4");
      a.n(n).a
    },
    "659e": function(e, t, a) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = {
          data: function() {
            return {
              vlogUrl: "https://eshopfile.zhiyousx.com/teamVideo2.mp4",
              isPlay: !0,
              fullScreen: !1,
              currentTime: 0,
              teamId: 0
            }
          },
          onLoad: function(t) {
            this.teamId = t.teamId || 1, this.vlogUrl = t.url || "https://eshopfile.zhiyousx.com/qtTeam/teamVideo.mp4", e.createVideoContext("videoPlayer").play()
          },
          onShow: function() {},
          onShareAppMessage: function() {
            return {
              title: "「青途文旅」四川团建之旅",
              imageUrl: "https://eshopfile.zhiyousx.com/2025111815285164535.jpg",
              path: "/yearCard/pages/teamNFC/index?teamId=".concat(this.teamId)
            }
          },
          onShareTimeline: function() {
            return {
              title: "「青途文旅」四川团建之旅",
              imageUrl: "https://eshopfile.zhiyousx.com/2025111815285164535.jpg",
              path: "/yearCard/pages/teamNFC/index?teamId=".concat(this.teamId)
            }
          },
          methods: {
            iconClick: function(t) {
              var a = 1 == t ? "/yearCard/pages/teamNFC/album?teamId=".concat(this.teamId) : "/yearCard/pages/teamNFC/line";
              e.navigateTo({
                url: a
              })
            },
            videoPlay: function(e) {
              this.isPlay = !0
            },
            videopause: function(e) {
              this.isPlay = !1
            },
            videoUpdate: function(e) {
              this.currentTime = e.detail.currentTime
            }
          }
        };
        t.default = a
      }).call(this, a("df3c").default)
    },
    "84ec": function(e, t, a) {
      a.r(t);
      var n = a("659e"),
        i = a.n(n);
      for (var o in n)["default"].indexOf(o) < 0 && function(e) {
        a.d(t, e, (function() {
          return n[e]
        }))
      }(o);
      t.default = i.a
    },
    "89ad": function(e, t, a) {},
    f6d4: function(e, t, a) {}
  },
  [
    ["2044", "common/runtime", "common/vendor"]
  ]
]);
