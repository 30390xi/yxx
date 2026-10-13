require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/pages/nfcVideo/jz"], {
    "0058": function(e, n, t) {},
    "1f5b": function(e, n, t) {
      t.r(n);
      var i = t("93a0"),
        o = t("d91d");
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        t.d(n, e, (function() {
          return o[e]
        }))
      }(a);
      t("79d3"), t("347f");
      var c = t("828b"),
        u = Object(c.a)(o.default, i.b, i.c, !1, null, "a6e7c0c2", null, !1, i.a, void 0);
      n.default = u.exports
    },
    "347f": function(e, n, t) {
      var i = t("0058");
      t.n(i).a
    },
    "6c0a": function(e, n, t) {
      (function(e, t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var i = {
          data: function() {
            return {
              isPlay: !0,
              fullScreen: !1,
              currentTime: 0,
              teamId: 0
            }
          },
          onLoad: function(n) {
            e.preloadAssets({
              data: [{
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116045789227.jpg"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116064712243.png"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116053458845.png"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116065653707.png"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116130338809.png"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116130568486.png"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026011516590113392.jpg"
              }]
            })
          },
          onShow: function(e) {},
          methods: {
            videoEnd: function() {},
            iconClick: function(e) {
              t.navigateTo({
                url: e
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
        n.default = i
      }).call(this, t("3223").default, t("df3c").default)
    },
    "79d3": function(e, n, t) {
      var i = t("da70");
      t.n(i).a
    },
    "7a37": function(e, n, t) {
      (function(e, n) {
        var i = t("47a9");
        t("5366"), i(t("3240"));
        var o = i(t("1f5b"));
        e.__webpack_require_UNI_MP_PLUGIN__ = t, n(o.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    "93a0": function(e, n, t) {
      t.d(n, "b", (function() {
        return i
      })), t.d(n, "c", (function() {
        return o
      })), t.d(n, "a", (function() {}));
      var i = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    d91d: function(e, n, t) {
      t.r(n);
      var i = t("6c0a"),
        o = t.n(i);
      for (var a in i)["default"].indexOf(a) < 0 && function(e) {
        t.d(n, e, (function() {
          return i[e]
        }))
      }(a);
      n.default = o.a
    },
    da70: function(e, n, t) {}
  },
  [
    ["7a37", "common/runtime", "common/vendor"]
  ]
]);
