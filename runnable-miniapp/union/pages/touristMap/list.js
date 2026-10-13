require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/touristMap/list"], {
    "0b72": function(t, n, a) {
      a.d(n, "b", (function() {
        return o
      })), a.d(n, "c", (function() {
        return i
      })), a.d(n, "a", (function() {
        return e
      }));
      var e = {
          uniNavbar: function() {
            return a.e("components/uni-navbar/uni-navbar").then(a.bind(null, "101a"))
          }
        },
        o = function() {
          this.$createElement;
          var t = (this._self._c, this.mapList.length);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        i = []
    },
    3190: function(t, n, a) {},
    "69f3": function(t, n, a) {
      a.r(n);
      var e = a("0b72"),
        o = a("8f18");
      for (var i in o)["default"].indexOf(i) < 0 && function(t) {
        a.d(n, t, (function() {
          return o[t]
        }))
      }(i);
      a("f4a8");
      var u = a("828b"),
        r = Object(u.a)(o.default, e.b, e.c, !1, null, "82dc4a9c", null, !1, e.a, void 0);
      n.default = r.exports
    },
    "6a18": function(t, n, a) {
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0, a("a04a"), a("a2cf");
        var e = {
          data: function() {
            return {
              showMapPop: !1,
              CustomBar: getApp().globalData.CustomBar + 2,
              mapList: []
            }
          },
          filters: {},
          watch: {},
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          onShareAppMessage: function() {
            return {
              title: "游陕西旅游地图",
              path: this.$util.setShareUrl("union/pages/touristMap/list")
            }
          },
          onHide: function() {},
          onLoad: function(t) {
            this.getMapList()
          },
          onShow: function() {},
          onPageScroll: function(t) {},
          onReachBottom: function() {},
          methods: {
            getMapList: function() {
              var t = this;
              this.$uniApi.getRequestNoLoading("get", "base/app/v1/travelMap/getList").then((function(n) {
                1 == n.code ? t.mapList = n.data : t.$util.showToast(n.msg)
              }))
            },
            jumpToMap: function(n) {
              0 == n.type || 1 == n.type ? this.$navigateTo({
                url: "/union/pages/touristMap/map?id=".concat(n.id, "&formType=1")
              }) : 2 == n.type ? this.$navigateTo({
                url: n.jumpDTO.linkUrl
              }) : 3 == n.type && t.openEmbeddedMiniProgram({
                appId: n.jumpDTO.appId,
                path: n.jumpDTO.linkUrl
              })
            }
          }
        };
        n.default = e
      }).call(this, a("df3c").default)
    },
    "8f18": function(t, n, a) {
      a.r(n);
      var e = a("6a18"),
        o = a.n(e);
      for (var i in e)["default"].indexOf(i) < 0 && function(t) {
        a.d(n, t, (function() {
          return e[t]
        }))
      }(i);
      n.default = o.a
    },
    e4ba: function(t, n, a) {
      (function(t, n) {
        var e = a("47a9");
        a("5366"), e(a("3240"));
        var o = e(a("69f3"));
        t.__webpack_require_UNI_MP_PLUGIN__ = a, n(o.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    f4a8: function(t, n, a) {
      var e = a("3190");
      a.n(e).a
    }
  },
  [
    ["e4ba", "common/runtime", "common/vendor", "union/common/vendor"]
  ]
]);
