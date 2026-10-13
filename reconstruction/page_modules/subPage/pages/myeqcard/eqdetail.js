// Extracted from subPage/pages/myeqcard/eqdetail.js; webpack module 3529.
// Compiled code for analysis; not an original source file.
module.exports = {
    3529: function(e, t, i) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = {
          name: "eqdetail",
          data: function() {
            return {
              name: "",
              eqDetail: "",
              receiveDetail: [],
              cardName: "",
              id: "",
              submiting: !1,
              source: ""
            }
          },
          onLoad: function(t) {
            this.source = t.source, this.cardName = t.cardName, t.id && (this.id = t.id), 2 == t.source ? (this.getUserEqDetail(), this.getReceiveDetail()) : this.eqDetail = e.getStorageSync("eqDetail")
          },
          onunload: function() {
            e.setStorageSync("eqDetail", "")
          },
          filters: {
            timeFormat: function(e) {
              return e.replace(/-/g, ".")
            },
            endTimeFilter: function(e) {
              return (new Date).getTime() + 36e5 * Number(e.useTimeSlotHour) > new Date(e.validityEndTime.replace(/-/g, "/")).getTime() ? "".concat(e.validityEndTime, "前有效") : "领取成功后".concat(e.useTimeSlotHour, "小时有效")
            },
            equityTypeFilter: function(e) {
              return ["的门票", "出发的产品"][e - 1]
            }
          },
          methods: {
            receiveEquity: function() {
              var e = this;
              if (!this.submiting) {
                this.submiting = !0;
                var t = this.eqDetail.userEquityCardDetailId;
                this.$uniApi.getRequestNoLoading("get", "product/app/userEquityCard/receiveEquity/" + t).then((function(t) {
                  e.submiting = !1, 1 === t.code ? (e.$util.showToast("领取成功"), e.getUserEqDetail(), e.getReceiveDetail()) : e.$util.showToast(t.msg)
                }))
              }
            },
            getUserEqDetail: function() {
              var e = this;
              this.$uniApi.getRequestNoLoading("get", "product/app/userEquityCard/equity/detail/" + this.id).then((function(t) {
                1 === t.code ? e.eqDetail = t.data : e.$util.showToast(t.msg)
              }))
            },
            getReceiveDetail: function() {
              var e = this;
              this.$uniApi.getRequestNoLoading("get", "product/app/userEquityCard/receiveDetail/" + this.id).then((function(t) {
                1 === t.code ? e.receiveDetail = t.data : e.$util.showToast(t.msg)
              }))
            },
            toBuy: function(e) {
              var t = "/subPage/pages/buyCard/buyCard?id=" + e;
              this.$util.isLogin(t) && this.$navigateTo({
                url: t
              })
            },
            toProductDetail: function(e) {
              var t = "";
              1 === this.eqDetail.equityType ? t = "/subPage/pages/ticket_detail/ticket_detail?itemId=" + e : 2 === this.eqDetail.equityType && (t = "/subPack/pages/lineProductDetails/lineProductDetails?productId=" + e), this.$navigateTo({
                url: t
              })
            },
            jumpUse: function(t, i) {
              var a = this;
              if (1 == t.useState || 5 == t.useState)
                if (1 === t.jumpConfigFlag) {
                  var n = t.jumpDTO;
                  if (!n) return void this.$util.showToast("未配置优惠券跳转地址！");
                  0 === n.linkType && n.linkUrl ? (-1 != n.linkUrl.indexOf("?") && (n.linkUrl = n.linkUrl.replace("?", "*"), n.linkUrl = n.linkUrl.replace("=", "+")), this.$navigateTo({
                    url: "/pages/webpage/webpage?url=".concat(n.linkUrl)
                  })) : 1 === n.linkType && (["/pages/index/index", "/pages/spot_list/spot_list", "/pages/rankList/rankList", "/pages/mine/mine"].includes(n.linkUrl) ? e.switchTab({
                    url: n.linkUrl
                  }) : this.$navigateTo({
                    url: n.linkUrl
                  }))
                } else {
                  var u = "";
                  1 === i ? u = "product/app/v1/item/couponCanUseItem" : 2 === i && (u = "product/app/v1/line/product/couponCanUseProduct"), this.$uniApi.dataRequestNoLoading("POST", u, {
                    couponId: t.couponId,
                    current: 1,
                    size: 5
                  }).then((function(e) {
                    if (1 === e.code)
                      if (1 == e.data.records.length) {
                        var n = 1 === i ? e.data.records[0].itemId : e.data.records[0].productId;
                        a.toProductDetail(n)
                      } else {
                        var u = "";
                        if (1 === i) u = "/subPage/pages/discountsProductList/discountsProductList?couponId=" + t.couponId + "&threshold=" + t.threshold + "&quota=" + t.quota + "&type=" + t.type;
                        else if (2 === i) {
                          var o = {
                            couponId: t.couponId,
                            threshold: t.threshold,
                            quota: t.quota,
                            type: t.type
                          };
                          u = "/subPack/pages/groupOrder/availableProducts?coupon=".concat(JSON.stringify(o))
                        }
                        a.$navigateTo({
                          url: u
                        })
                      }
                    else a.$util.showToast(e.msg)
                  }))
                }
            }
          }
        };
        t.default = i
      }).call(this, i("df3c").default)
    },
};
