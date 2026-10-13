// Extracted from subPage/pages/discountsProductList/discountsProductList.js; webpack module c3e0.
// Compiled code for analysis; not an original source file.
module.exports = {
    c3e0: function(t, o, e) {
      (function(t) {
        Object.defineProperty(o, "__esModule", {
          value: !0
        }), o.default = void 0;
        var n = {
          components: {
            EmptyState: function() {
              e.e("subPage/components/empty/empty").then(function() {
                return resolve(e("3b7a"))
              }.bind(null, e)).catch(e.oe)
            }
          },
          data: function() {
            return {
              listTypeIcon: 0,
              page: 1,
              loadMore: "loading",
              searchText: "",
              sortList: ["综合", "销量", "价格"],
              sortIdx: 0,
              complexType: 1,
              isHot: 0,
              catId: "",
              sellerId: "",
              goodsList: [],
              couponId: "",
              quota: "",
              threshold: "",
              searchHeight: 0,
              navHeight: 0,
              type: 1,
              size: 8
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          onLoad: function(o) {
            var e = this;
            o.keyword && (this.searchText = o.keyword), o.isHot && (this.isHot = o.isHot), o.catId && (this.catId = o.catId), o.couponId && (this.couponId = o.couponId), o.quota && (this.quota = o.quota), o.threshold && (this.threshold = o.threshold), o.type && (this.type = o.type), this.pageLoad();
            var n = t.getStorageSync("NavH");
            t.getSystemInfo({
              success: function(t) {
                e.unit = 750 / t.windowWidth, e.navHeight = parseInt(n.top + 68 / e.unit)
              }
            })
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          filters: {
            toFixed2: function(t) {
              return t ? Number(t).toFixed(2) : "0.00"
            },
            moneyFilter: function(t) {
              return t && (t + "").indexOf(".00") > -1 ? t.split(".")[0] : t
            }
          },
          methods: {
            pageLoad: function() {
              var o = this,
                e = {
                  current: this.page,
                  keyWord: this.searchText,
                  complex: this.sortIdx,
                  complexType: this.complexType,
                  catId: this.catId,
                  sellerId: this.sellerId,
                  couponId: this.couponId,
                  size: this.size
                };
              1 == this.isHot && (e.isHot = this.isHot), this.sellerId && (e.sellerId = this.sellerId), this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/item/couponCanUseItem", e).then((function(e) {
                if (t.stopPullDownRefresh(), 1 === e.code) {
                  var n = e.data.records;
                  e.data.total > 0 ? (1 === e.data.current ? o.goodsList = n : o.goodsList = o.goodsList.concat(n), e.data.current < e.data.pages ? (o.page = o.page + 1, o.loadMore = "loadmore") : o.loadMore = "nomore") : (o.goodsList = [], o.loadMore = "nomore")
                }
              })).catch((function(o) {
                t.stopPullDownRefresh()
              }))
            },
            listType: function(t) {
              this.listTypeIcon = 0 === t ? 1 : 0
            },
            sortTab: function(t) {
              if (2 === t) 1 === this.complexType ? this.complexType = 0 : this.complexType = 1;
              else if (this.complexType = 0, this.sortIdx === t) return;
              this.sortIdx = t, this.page = 1, this.goodsList = [], this.pageLoad()
            },
            goGoodsDetails: function(o) {
              var e = o.itemId;
              2 != o.scenicType ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + e
              }) : t.navigateTo({
                url: "/artShow/pages/ticketFillOrder/ticketFillOrder?ticketId=".concat(e)
              })
            },
            goSearch: function() {
              this.searchText ? this.$util.goBack() : this.$navigateTo({
                url: "/subPage/pages/searchOld/searchOld?couponId=" + this.couponId + "&threshold=" + this.threshold + "&quota=" + this.quota
              })
            }
          }
        };
        o.default = n
      }).call(this, e("df3c").default)
    },
};
