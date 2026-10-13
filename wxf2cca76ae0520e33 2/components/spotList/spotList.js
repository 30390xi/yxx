require("../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/spotList/spotList"], {
    "2d4d": function(t, n, e) {
      e.d(n, "b", (function() {
        return i
      })), e.d(n, "c", (function() {
        return r
      })), e.d(n, "a", (function() {
        return o
      }));
      var o = {
          uSwiper: function() {
            return e.e("uview-ui/components/u-swiper/u-swiper").then(e.bind(null, "9840"))
          }
        },
        i = function() {
          var t = this,
            n = (t.$createElement, t._self._c, t.__map(t.datas, (function(n, e) {
              return {
                $orig: t.__get_orig(n),
                m0: t.setswiperList(n.originAssistUrlList)
              }
            })));
          t.$mp.data = Object.assign({}, {
            $root: {
              l0: n
            }
          })
        },
        r = []
    },
    "5f2e": function(t, n, e) {
      var o = e("a82e");
      e.n(o).a
    },
    6792: function(t, n, e) {
      e.r(n);
      var o = e("eb28"),
        i = e.n(o);
      for (var r in o)["default"].indexOf(r) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(r);
      n.default = i.a
    },
    a82e: function(t, n, e) {},
    ba4c: function(t, n, e) {
      e.r(n);
      var o = e("2d4d"),
        i = e("6792");
      for (var r in i)["default"].indexOf(r) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(r);
      e("5f2e");
      var s = e("828b"),
        u = Object(s.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      n.default = u.exports
    },
    eb28: function(t, n, e) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var o = {
        props: ["type", "datas", "rankingType"],
        mounted: function() {},
        data: function() {
          return {}
        },
        methods: {
          setswiperList: function(t) {
            var n = [];
            return t.forEach((function(t, e) {
              e < 4 && n.push({
                url: t
              })
            })), n
          },
          routerTo: function(t) {
            [1, 3, 4, 5].includes(Number(t.originType)) && this.$navigateTo({
              url: "../spotDetail/spotDetail?spotId=" + t.originId
            }), 2 == t.originType && this.$navigateTo({
              url: "../spotThirdDetail/spotThirdDetail?spotId=" + t.originId
            })
          }
        }
      };
      n.default = o
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/spotList/spotList-create-component", {
    "components/spotList/spotList-create-component": function(t, n, e) {
      e("df3c").createComponent(e("ba4c"))
    }
  },
  [
    ["components/spotList/spotList-create-component"]
  ]
]);
