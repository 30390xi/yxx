require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiTravel2/historyList"], {
    "04be": function(t, n, e) {
      (function(t, n) {
        var i = e("47a9");
        e("5366"), i(e("3240"));
        var a = i(e("93dc"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(a.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    2354: function(t, n, e) {
      e.r(n);
      var i = e("3833"),
        a = e.n(i);
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(o);
      n.default = a.a
    },
    "2b64": function(t, n, e) {},
    3833: function(t, n, e) {
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          onShow: function() {
            this.getHistoryList(), this.getTopData()
          },
          data: function() {
            return {
              historyList: null,
              titleColor: "#000",
              topData: null
            }
          },
          onPageScroll: function(t) {
            t.scrollTop < 10 ? this.titleColor = "#000" : this.titleColor = "transparent"
          },
          methods: {
            getHistoryList: function() {
              var n = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/historyList", {
                userId: t.getStorageSync("wxopenid"),
                bussType: 2
              }).then((function(t) {
                1 === t.code && (n.historyList = t.data || [])
              })).catch((function() {}))
            },
            goToDetail: function(n) {
              if (n.sessionId) try {
                getCurrentPages().length >= 8 ? t.reLaunch({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(n.sessionId, "&source=historyList")
                }) : t.navigateTo({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(n.sessionId, "&source=historyList")
                })
              } catch (e) {
                t.reLaunch({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(n.sessionId, "&source=historyList")
                })
              }
            },
            getTopData: function() {
              var n = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/queryTop", {
                openId: t.getStorageSync("wxopenid")
              }).then((function(t) {
                1 === t.code && (n.topData = t.data || null)
              })).catch((function() {}))
            }
          }
        };
        n.default = e
      }).call(this, e("df3c").default)
    },
    "61ec": function(t, n, e) {
      var i = e("2b64");
      e.n(i).a
    },
    "93dc": function(t, n, e) {
      e.r(n);
      var i = e("c82e"),
        a = e("2354");
      for (var o in a)["default"].indexOf(o) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(o);
      e("61ec");
      var r = e("828b"),
        s = Object(r.a)(a.default, i.b, i.c, !1, null, "68554c9f", null, !1, i.a, void 0);
      n.default = s.exports
    },
    c82e: function(t, n, e) {
      e.d(n, "b", (function() {
        return a
      })), e.d(n, "c", (function() {
        return o
      })), e.d(n, "a", (function() {
        return i
      }));
      var i = {
          uniNavbar: function() {
            return e.e("components/uni-navbar/uni-navbar").then(e.bind(null, "101a"))
          }
        },
        a = function() {
          var t = this,
            n = (t.$createElement, t._self._c, t.topData && t.topData.scenicList ? t.topData.scenicList.length : null),
            e = t.__map(t.historyList, (function(n, e) {
              return {
                $orig: t.__get_orig(n),
                g1: n.scenicList ? n.scenicList.length : null
              }
            })),
            i = t.historyList && 0 === t.historyList.length && !t.topData;
          t.$mp.data = Object.assign({}, {
            $root: {
              g0: n,
              l0: e,
              g2: i
            }
          })
        },
        o = []
    }
  },
  [
    ["04be", "common/runtime", "common/vendor"]
  ]
]);
