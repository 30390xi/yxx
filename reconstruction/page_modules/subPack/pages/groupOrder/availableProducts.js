// Extracted from subPack/pages/groupOrder/availableProducts.js; webpack module ca7a.
// Compiled code for analysis; not an original source file.
module.exports = {
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
};
