require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/groupOrder/availableProducts"], {
    1370: function(e, t, n) {
      n.r(t);
      var o = n("ca7a"),
        r = n.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      t.default = r.a
    },
    "1d24": function(e, t, n) {},
    "21c2": function(e, t, n) {
      var o = n("1d24");
      n.n(o).a
    },
    "27c9": function(e, t, n) {
      (function(e, t) {
        var o = n("47a9");
        n("5366"), o(n("3240"));
        var r = o(n("9e37"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(r.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "9e37": function(e, t, n) {
      n.r(t);
      var o = n("bb35"),
        r = n("1370");
      for (var a in r)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(a);
      n("21c2");
      var i = n("828b"),
        u = Object(i.a)(r.default, o.b, o.c, !1, null, "3d188ea6", null, !1, o.a, void 0);
      t.default = u.exports
    },
    bb35: function(e, t, n) {
      n.d(t, "b", (function() {
        return r
      })), n.d(t, "c", (function() {
        return a
      })), n.d(t, "a", (function() {
        return o
      }));
      var o = {
          uLoadmore: function() {
            return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "2db1"))
          }
        },
        r = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.__map(e.recommendList, (function(t, n) {
              return {
                $orig: e.__get_orig(t),
                f0: e._f("travelModeFilter")(t.travelMode),
                g0: t.cityNames ? t.cityNames.split(",") : null,
                l0: t.lineHighlightLabelList ? e.__map(t.lineHighlightLabelList, (function(n, o) {
                  return {
                    $orig: e.__get_orig(n),
                    g1: t.lineHighlightLabelList.length
                  }
                })) : null
              }
            }))),
            n = "nomore" == e.loadMore && 0 == e.recommendList.length;
          e.$mp.data = Object.assign({}, {
            $root: {
              l1: t,
              g2: n
            }
          })
        },
        a = []
    },
    ca7a: function(e, t, n) {
      (function(e) {
        var o = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = o(n("7eb4")),
          a = o(n("af34")),
          i = o(n("ee10")),
          u = {
            components: {
              EmptyState: function() {
                n.e("components/empty/empty").then(function() {
                  return resolve(n("a427"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                loadMore: "loading",
                recommendList: [],
                current: 1,
                size: 8,
                total: 0,
                couponId: "",
                detailObj: {}
              }
            },
            filters: {
              travelModeFilter: function(e) {
                return {
                  0: "全部",
                  1: "跟团游",
                  2: "一日游",
                  3: "自由行",
                  4: "研学游"
                } [e + 1]
              }
            },
            methods: {
              scrolltolower: function() {
                "loadmore" == this.loadMore && (this.current += 1, this.getList())
              },
              getDec: function(e) {
                var t, n = "",
                  o = "",
                  r = "",
                  a = "";
                return e.cityList && e.cityList.forEach((function(e, t) {
                  o += e + "/"
                })), o && (o = o.slice(0, -1) + " · "), t = ["跟团游", "一日游", "自由行", "研学游"][e.travelMode], e.journeyDay && (r = e.journeyDay + "天"), e.journeyNight && (a = e.journeyNight + "晚"), (r || a) && (n = " · " + r + a), o + t + n
              },
              getList: function() {
                var t = this;
                return (0, i.default)(r.default.mark((function n() {
                  var o, i, u;
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.prev = 0, e.showLoading(), o = {
                          couponId: t.couponId,
                          current: t.current,
                          size: t.size
                        }, n.next = 5, t.$uniApi.dataRequestNoLoading("POST", "product/app/v1/line/product/couponCanUseProduct", o);
                      case 5:
                        1 == (i = n.sent).code && (t.loadMore = i.data.records.length > 7 ? "loadmore" : "nomore", (u = t.recommendList).push.apply(u, (0, a.default)(i.data.records))), n.next = 11;
                        break;
                      case 9:
                        n.prev = 9, n.t0 = n.catch(0);
                      case 11:
                        return n.prev = 11, setTimeout((function() {
                          e.hideLoading()
                        }), 300), n.finish(11);
                      case 14:
                      case "end":
                        return n.stop()
                    }
                  }), n, null, [
                    [0, 9, 11, 14]
                  ])
                })))()
              },
              goShopDetail: function(t) {
                e.navigateTo({
                  url: "/subPack/pages/lineProductDetails/lineProductDetails?productId=".concat(t.productId)
                })
              }
            },
            onLoad: function(e) {
              if (e.coupon) {
                var t = JSON.parse(e.coupon);
                this.detailObj = t, this.couponId = t.couponId ? t.couponId : t.userCouponId, this.getList()
              }
            }
          };
        t.default = u
      }).call(this, n("df3c").default)
    }
  },
  [
    ["27c9", "common/runtime", "common/vendor"]
  ]
]);
