require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/pages/nfcVideo/nfcVideo"], {
    5748: function(n, e, a) {
      var t = a("bce6");
      a.n(t).a
    },
    "5e7c": function(n, e, a) {
      a.d(e, "b", (function() {
        return i
      })), a.d(e, "c", (function() {
        return o
      })), a.d(e, "a", (function() {
        return t
      }));
      var t = {
          uniNavbar: function() {
            return a.e("components/uni-navbar/uni-navbar").then(a.bind(null, "101a"))
          }
        },
        i = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    6938: function(n, e, a) {
      (function(n, e) {
        var t = a("47a9");
        a("5366"), t(a("3240"));
        var i = t(a("d540"));
        n.__webpack_require_UNI_MP_PLUGIN__ = a, e(i.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    "7b4f": function(n, e, a) {
      (function(n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = {
          data: function() {
            return {
              vlogUrl: "",
              isPlay: !0
            }
          },
          onLoad: function(n) {
            this.vlogUrl = n.url
          },
          onShareAppMessage: function() {
            return {
              title: "",
              imageUrl: "",
              path: "/yearCard/pages/nfcVideo/nfcVideo"
            }
          },
          methods: {
            playPause: function() {
              var e = n.createVideoContext("videoPlayer");
              this.isPlay ? e.pause() : e.play()
            },
            videoPlay: function(n) {
              this.isPlay = !0
            },
            videopause: function(n) {
              this.isPlay = !1
            }
          }
        };
        e.default = a
      }).call(this, a("df3c").default)
    },
    b077: function(n, e, a) {},
    bce6: function(n, e, a) {},
    d540: function(n, e, a) {
      a.r(e);
      var t = a("5e7c"),
        i = a("ffa7");
      for (var o in i)["default"].indexOf(o) < 0 && function(n) {
        a.d(e, n, (function() {
          return i[n]
        }))
      }(o);
      a("f346"), a("5748");
      var u = a("828b"),
        r = Object(u.a)(i.default, t.b, t.c, !1, null, "14e7353e", null, !1, t.a, void 0);
      e.default = r.exports
    },
    f346: function(n, e, a) {
      var t = a("b077");
      a.n(t).a
    },
    ffa7: function(n, e, a) {
      a.r(e);
      var t = a("7b4f"),
        i = a.n(t);
      for (var o in t)["default"].indexOf(o) < 0 && function(n) {
        a.d(e, n, (function() {
          return t[n]
        }))
      }(o);
      e.default = i.a
    }
  },
  [
    ["6938", "common/runtime", "common/vendor"]
  ]
]);
