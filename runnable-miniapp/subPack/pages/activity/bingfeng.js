require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/activity/bingfeng"], {
    "3a0f": function(t, a, e) {
      e.d(a, "b", (function() {
        return n
      })), e.d(a, "c", (function() {
        return i
      })), e.d(a, "a", (function() {}));
      var n = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    "6c57": function(t, a, e) {
      e.r(a);
      var n = e("3a0f"),
        i = e("c091");
      for (var r in i)["default"].indexOf(r) < 0 && function(t) {
        e.d(a, t, (function() {
          return i[t]
        }))
      }(r);
      var c = e("828b"),
        o = Object(c.a)(i.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
      a.default = o.exports
    },
    "97ca": function(t, a, e) {
      (function(t) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0;
        var e = {
          data: function() {
            return {
              urlSrc: "",
              webviewStyles: {
                progress: {
                  color: "#f29200"
                }
              },
              shareConfigNot: []
            }
          },
          onLoad: function() {
            this.getActivityUrl()
          },
          onShareAppMessage: function(t) {
            if (this._shareObj) return this._shareObj
          },
          methods: {
            getActivityUrl: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "BF_JUMP_URL"
              }).then((function(a) {
                1 === a.code && (t.urlSrc = a.data.paramValue)
              }))
            },
            message: function(a) {
              var e = a.detail.data;
              this._shareObj = a.detail.data[0], e[1] && e[1].toMiniPro && t.openEmbeddedMiniProgram({
                appId: e[1].data.appId,
                path: e[1].data.wechatUrl
              }), e[1] && e[1].cityId && (getApp().globalData.cityId = e[1].cityId)
            }
          }
        };
        a.default = e
      }).call(this, e("df3c").default)
    },
    b5c1: function(t, a, e) {
      (function(t, a) {
        var n = e("47a9");
        e("5366"), n(e("3240"));
        var i = n(e("6c57"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, a(i.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    c091: function(t, a, e) {
      e.r(a);
      var n = e("97ca"),
        i = e.n(n);
      for (var r in n)["default"].indexOf(r) < 0 && function(t) {
        e.d(a, t, (function() {
          return n[t]
        }))
      }(r);
      a.default = i.a
    }
  },
  [
    ["b5c1", "common/runtime", "common/vendor"]
  ]
]);
