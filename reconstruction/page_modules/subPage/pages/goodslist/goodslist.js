// Extracted from subPage/pages/goodslist/goodslist.js; webpack module 5337.
// Compiled code for analysis; not an original source file.
module.exports = {
    5337: function(t, e, o) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = {
          components: {
            EmptyState: function() {
              o.e("subPage/components/empty/empty").then(function() {
                return resolve(o("3b7a"))
              }.bind(null, o)).catch(o.oe)
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
              goodsList: []
            }
          },
          onLoad: function(t) {
            t.keyword && (this.searchText = t.keyword), t.isHot && (this.isHot = t.isHot), t.catId && (this.catId = t.catId), this.pageLoad()
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
            }
          },
          methods: {
            pageLoad: function() {
              var e = this,
                o = {
                  current: this.page,
                  keyWord: this.searchText,
                  complex: this.sortIdx,
                  complexType: this.complexType,
                  catId: this.catId,
                  sellerId: this.sellerId
                };
              1 == this.isHot && (o.isHot = this.isHot), this.sellerId && (o.sellerId = this.sellerId), this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item", o).then((function(o) {
                if (t.stopPullDownRefresh(), 1 === o.code) {
                  var n = o.data.itemList.records;
                  o.data.itemList.total > 0 ? (n.forEach((function(t) {
                    var e = [];
                    0 == t.seckillActivity && e.push({
                      type: "秒杀"
                    }), 1 == t.couponFlag && e.push({
                      type: "优惠券"
                    }), t.cashBackAmount && 0 != t.cashBackAmount && e.push({
                      type: "返现"
                    }), 0 != t.maxReward && e.push({
                      type: "分享赚"
                    }), t.huoDongArr = e
                  })), 1 === o.data.itemList.current ? e.goodsList = n : e.goodsList = e.goodsList.concat(n), o.data.itemList.current < o.data.itemList.pages ? (e.page = e.page + 1, e.loadMore = "loadmore") : e.loadMore = "nomore") : (e.goodsList = [], e.loadMore = "nomore")
                }
              })).catch((function(e) {
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
            goGoodsDetails: function(t) {
              this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + t
              })
            },
            goSearch: function() {
              this.searchText ? this.$util.goBack() : this.$navigateTo({
                url: "/subPage/pages/searchOld/searchOld"
              })
            }
          }
        };
        e.default = n
      }).call(this, o("df3c").default)
    }
};
