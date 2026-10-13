require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/vlog/videoPlay"], {
    "29bd": function(n, e, t) {
      t.r(e);
      var o = t("bcaf"),
        i = t.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(n) {
        t.d(e, n, (function() {
          return o[n]
        }))
      }(a);
      e.default = i.a
    },
    "2d99": function(n, e, t) {
      t.d(e, "b", (function() {
        return o
      })), t.d(e, "c", (function() {
        return i
      })), t.d(e, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    a01fa: function(n, e, t) {},
    bcaf: function(n, e, t) {
      (function(n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = {
          name: "videoPlay",
          data: function() {
            return {
              showPlayBtn: !0,
              innerVideoCtx: null
            }
          },
          props: {
            videoUrl: {
              type: String,
              default: ""
            },
            poster: {
              type: String,
              default: ""
            },
            isRadius: {
              type: Boolean,
              default: !1
            }
          },
          mounted: function() {
            var e = this;
            this.$nextTick((function() {
              n.createSelectorQuery().in(e).select("#innerVideo").context((function(n) {
                n && n.context && (e.innerVideoCtx = n.context)
              })).exec()
            }))
          },
          methods: {
            stopPlay: function() {
              this.showPlayBtn = !0
            },
            startPlay: function() {
              this.showPlayBtn = !1
            },
            handlePlay: function() {
              this.innerVideoCtx && this.innerVideoCtx.play()
            },
            handleStop: function() {
              var e = this;
              this.$nextTick((function() {
                n.createSelectorQuery().in(e).select("#innerVideo").context((function(n) {
                  n && n.context && n.context.stop()
                })).exec()
              }))
            },
            onLoadedmetadata: function() {
              this.innerVideoCtx && this.innerVideoCtx.play()
            },
            videoErrorCallback: function(n) {
              console.error("视频加载失败:", n)
            }
          }
        };
        e.default = t
      }).call(this, t("df3c").default)
    },
    dcfc: function(n, e, t) {
      var o = t("a01fa");
      t.n(o).a
    },
    f4fd: function(n, e, t) {
      t.r(e);
      var o = t("2d99"),
        i = t("29bd");
      for (var a in i)["default"].indexOf(a) < 0 && function(n) {
        t.d(e, n, (function() {
          return i[n]
        }))
      }(a);
      t("dcfc");
      var c = t("828b"),
        r = Object(c.a)(i.default, o.b, o.c, !1, null, "c0f404c6", null, !1, o.a, void 0);
      e.default = r.exports
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/pages/vlog/videoPlay-create-component", {
    "union/pages/vlog/videoPlay-create-component": function(n, e, t) {
      t("df3c").createComponent(t("f4fd"))
    }
  },
  [
    ["union/pages/vlog/videoPlay-create-component"]
  ]
]);
