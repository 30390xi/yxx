// Extracted from subPack/pages/groupOrder/collectCoupons.js; webpack module e90a.
// Compiled code for analysis; not an original source file.
module.exports = {
    e90a: function(e, t, o) {
      (function(e, n) {
        var i = o("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = i(o("7eb4")),
          u = i(o("af34")),
          r = i(o("ee10")),
          c = {
            components: {
              EmptyState: function() {
                o.e("components/empty/empty").then(function() {
                  return resolve(o("a427"))
                }.bind(null, o)).catch(o.oe)
              }
            },
            data: function() {
              return {
                couponDetail: {},
                showDetail: !1,
                current: 1,
                size: 5,
                recommendList: [],
                loadMore: "loading",
                id: "",
                type: 0,
                goodsList: [],
                title: "",
                imageUrl: "",
                num: 0,
                keyWord: ""
              }
            },
            onLoad: function(e) {
              if (e.scene) {
                var t;
                t = -1 != e.scene.indexOf("%2F") ? e.scene.split("%2F") : e.scene.split("/"), this.type = t[0], this.id = t[1], 2 == this.type ? this.getRecommend() : this.getShopList()
              }
            },
            filters: {
              timeFormat: function(e) {
                return e.split(" ")[0]
              },
              moneyFilter: function(e) {
                return e && (e + "").indexOf(".00") > -1 ? e.split(".")[0] : e
              }
            },
            onShow: function() {
              this.getProduct(), e.updateShareMenu({
                isPrivateMessage: !0
              })
            },
            onShareAppMessage: function() {
              var e = "/subPack/pages/groupOrder/collectCoupons?scene=".concat(this.type, "/").concat(this.id);
              return {
                title: this.couponDetail.shareDesc ? this.couponDetail.shareDesc : this.title,
                path: this.$util.setShareUrl(e),
                imageUrl: this.couponDetail.shareImage
              }
            },
            onReachBottom: function() {
              "loadmore" == this.loadMore && (this.current += 1, 2 == this.type ? this.getRecommend() : this.getShopList())
            },
            methods: {
              getDec: function(e) {
                var t, o = "",
                  n = "",
                  i = "",
                  a = "";
                return e.cityList && e.cityList.forEach((function(e, t) {
                  n += e + "/"
                })), n && (n = n.slice(0, -1) + " · "), t = ["跟团游", "一日游", "自由行", "研学游"][e.travelMode], e.journeyDay && (i = e.journeyDay + "天"), e.journeyNight && (a = e.journeyNight + "晚"), (i || a) && (o = " · " + i + a), n + t + o
              },
              goShop: function() {
                n.navigateTo({
                  url: "/subPack/pages/groupOrder/availableProducts"
                })
              },
              goGoodsDetails: function(e) {
                n.navigateTo({
                  url: "/subPage/pages/ticket_detail/ticket_detail?itemId=".concat(e)
                })
              },
              scrollBottom: function() {
                "loadmore" == this.loadMore && (this.current += 1, 2 == this.type ? this.getRecommend() : this.getShopList())
              },
              showMore: function() {
                this.showDetail = !this.showDetail
              },
              receive: function(e) {
                var t = this;
                return (0, r.default)(a.default.mark((function o() {
                  return a.default.wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        return o.prev = 0, n.showLoading(), o.next = 4, t.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                          couponId: e
                        });
                      case 4:
                        1 == o.sent.code ? (t.getProduct(), t.$util.showToast("已领取")) : t.$util.showToast("已抢光"), o.next = 10;
                        break;
                      case 8:
                        o.prev = 8, o.t0 = o.catch(0);
                      case 10:
                        return o.prev = 10, setTimeout((function() {
                          n.hideLoading()
                        }), 300), o.finish(10);
                      case 13:
                      case "end":
                        return o.stop()
                    }
                  }), o, null, [
                    [0, 8, 10, 13]
                  ])
                })))()
              },
              getShopList: function() {
                var e = this;
                return (0, r.default)(a.default.mark((function t() {
                  var o, n, i;
                  return a.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, e.loadMore = "loading", o = {
                          couponId: e.id,
                          current: e.current,
                          size: e.size,
                          complex: 0,
                          keyWord: e.keyWord
                        }, t.next = 5, e.$uniApi.dataRequestNoLoading("POST", "product/app/v1/item/couponCanUseItem", o);
                      case 5:
                        1 == (n = t.sent).code && (e.loadMore = n.data.records.length > 4 ? "loadmore" : "nomore", (i = e.goodsList).push.apply(i, (0, u.default)(n.data.records)), e.num = e.goodsList.length), t.next = 11;
                        break;
                      case 9:
                        t.prev = 9, t.t0 = t.catch(0);
                      case 11:
                      case "end":
                        return t.stop()
                    }
                  }), t, null, [
                    [0, 9]
                  ])
                })))()
              },
              getRecommend: function() {
                var e = this;
                return (0, r.default)(a.default.mark((function t() {
                  var o, n, i;
                  return a.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, e.loadMore = "loading", o = {
                          couponId: e.id,
                          current: e.current,
                          size: e.size,
                          productName: e.keyWord
                        }, t.next = 5, e.$uniApi.dataRequestNoLoading("POST", "product/app/v1/line/product/couponCanUseProduct", o);
                      case 5:
                        1 == (n = t.sent).code && (e.loadMore = n.data.records.length > 4 ? "loadmore" : "nomore", (i = e.recommendList).push.apply(i, (0, u.default)(n.data.records)), e.num = e.recommendList.length), t.next = 11;
                        break;
                      case 9:
                        t.prev = 9, t.t0 = t.catch(0);
                      case 11:
                        return t.prev = 11, t.finish(11);
                      case 13:
                      case "end":
                        return t.stop()
                    }
                  }), t, null, [
                    [0, 9, 11, 13]
                  ])
                })))()
              },
              available: function(e) {
                if (2 == this.type) {
                  var t = JSON.stringify(e);
                  n.navigateTo({
                    url: "/subPack/pages/groupOrder/availableProducts?coupon=".concat(t)
                  })
                } else n.navigateTo({
                  url: "/subPage/pages/discountsProductList/discountsProductList?couponId=".concat(e.couponId, "&threshold=").concat(e.threshold, "&quota=").concat(e.quota, "&type=", 0)
                })
              },
              goProduct: function(e) {
                n.navigateTo({
                  url: "/subPack/pages/lineProductDetails/lineProductDetails?productId=".concat(e.productId)
                })
              },
              getProduct: function() {
                var t = this;
                return (0, r.default)(a.default.mark((function o() {
                  var n;
                  return a.default.wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        return o.next = 2, t.$uniApi.getRequestNoLoading("GET", "product/app/v1/coupon/detailForReceive/".concat(t.id));
                      case 2:
                        1 == (n = o.sent).code && (t.couponDetail = n.data, 3 == t.couponDetail.type ? t.title = "您有一张抵扣券待领取" : 2 == t.couponDetail.type ? t.title = "您有".concat(t.couponDetail.quota, "元无门槛优惠券待领取") : t.title = "您有满".concat(t.couponDetail.threshold, "减").concat(t.couponDetail.quota, "优惠券待领取"), 0 == t.couponDetail.shareFlag ? e.hideShareMenu({
                          menus: ["shareAppMessage", "shareTimeline"]
                        }) : e.showShareMenu({
                          withShareTicket: !0,
                          menus: ["shareAppMessage", "shareTimeline"]
                        }));
                      case 4:
                      case "end":
                        return o.stop()
                    }
                  }), o)
                })))()
              },
              doSearch: function() {
                this.current = 1, this.goodsList = [], this.recommendList = [], 2 == this.type ? this.getRecommend() : this.getShopList()
              }
            }
          };
        t.default = c
      }).call(this, o("3223").default, o("df3c").default)
    },
};
