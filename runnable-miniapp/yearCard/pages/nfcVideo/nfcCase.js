require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/pages/nfcVideo/nfcCase"], {
    "078f": function(e, a, t) {
      (function(e, t) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0;
        var n = {
          data: function() {
            return this.videoContext = null, {
              isPlay: !0,
              fullScreen: !1,
              currentTime: 0,
              playerData: {
                vlogUrl: "",
                dataUrl: "",
                iconUrl: "",
                changeTime: 20
              }
            }
          },
          onLoad: function(e) {
            var a = e.playerId || 1,
              t = Number(a) - 1;
            this.getFootBallPlayer(t)
          },
          methods: {
            getFootBallPlayer: function(a) {
              var n = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "FOOTBALL_PLAYER"
              }).then((function(i) {
                if (1 === i.code) {
                  var o = i.data;
                  if (o.paramValue) {
                    var r = JSON.parse(o.paramValue).playerList;
                    n.playerData = r[a], n.videoContext = e.createVideoContext("videoPlayer"), t.preloadAssets({
                      data: [{
                        type: "image",
                        src: n.playerData.iconUrl
                      }]
                    })
                  }
                }
              }))
            },
            videoClick: function() {
              e.navigateTo({
                url: "/yearCard/pages/nfcVideo/nfcDetail?url=".concat(this.playerData.dataUrl)
              })
            },
            playPause: function() {
              this.isPlay ? this.videoContext.pause() : this.videoContext.play()
            },
            fullscreenchange: function(e) {
              this.fullScreen = e.detail.fullScreen
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
        a.default = n
      }).call(this, t("df3c").default, t("3223").default)
    },
    "60ce": function(e, a, t) {
      var n = t("b8e8");
      t.n(n).a
    },
    "697a": function(e, a, t) {},
    "6f40": function(e, a, t) {
      var n = t("697a");
      t.n(n).a
    },
    "9af0": function(e, a, t) {
      t.d(a, "b", (function() {
        return n
      })), t.d(a, "c", (function() {
        return i
      })), t.d(a, "a", (function() {}));
      var n = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    a0e1: function(e, a, t) {
      t.r(a);
      var n = t("9af0"),
        i = t("b88c");
      for (var o in i)["default"].indexOf(o) < 0 && function(e) {
        t.d(a, e, (function() {
          return i[e]
        }))
      }(o);
      t("6f40"), t("60ce");
      var r = t("828b"),
        c = Object(r.a)(i.default, n.b, n.c, !1, null, "0c78cf82", null, !1, n.a, void 0);
      a.default = c.exports
    },
    b88c: function(e, a, t) {
      t.r(a);
      var n = t("078f"),
        i = t.n(n);
      for (var o in n)["default"].indexOf(o) < 0 && function(e) {
        t.d(a, e, (function() {
          return n[e]
        }))
      }(o);
      a.default = i.a
    },
    b8e8: function(e, a, t) {},
    cf63: function(e, a, t) {
      (function(e, a) {
        var n = t("47a9");
        t("5366"), n(t("3240"));
        var i = n(t("a0e1"));
        e.__webpack_require_UNI_MP_PLUGIN__ = t, a(i.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    }
  },
  [
    ["cf63", "common/runtime", "common/vendor"]
  ]
]);
