// Extracted from subPage/pages/storeshop/storeshop.js; webpack module 8259.
// Compiled code for analysis; not an original source file.
module.exports = {
    8259: function(e, t, o) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = {
          data: function() {
            return {
              loadingStatus: !0,
              searchText: "",
              sellerId: "",
              page: 1,
              loadMore: "loading",
              sortList: ["综合", "销量", "价格"],
              sortIdx: 0,
              complexType: 0,
              goodsList: [],
              sellerInfo: {},
              shareMemberId: ""
            }
          },
          onLoad: function(e) {
            e.scene ? this.getScene(e.scene) : (e.keyword && (this.searchText = e.keyword), e.sellerId && (this.sellerId = e.sellerId), e.shareMemberId && (this.shareMemberId = e.shareMemberId), this.getSeller(), this.pageLoad())
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          filters: {
            toFixed2: function(e) {
              return e ? Number(e).toFixed(2) : "0.00"
            }
          },
          methods: {
            getScene: function(e) {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/qrCodeScene/getScene?sceneId=" + e).then((function(e) {
                1 === e.code && (t.sellerId = e.data.scene.split("=")[1], t.shareMemberId = e.data.referenceId, t.getFun())
              }))
            },
            getFun: function() {
              this.getSeller(), this.pageLoad()
            },
            pageLoad: function() {
              var t = this,
                o = {
                  current: this.page,
                  keyWord: this.searchText,
                  complex: this.sortIdx,
                  complexType: this.complexType,
                  sellerId: this.sellerId
                };
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item", o).then((function(o) {
                if (e.stopPullDownRefresh(), 1 === o.code) {
                  var n = o.data.itemList.records;
                  o.data.itemList.total > 0 ? (1 === o.data.itemList.current ? t.goodsList = n : t.goodsList = t.goodsList.concat(n), o.data.itemList.current < o.data.itemList.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.goodsList = [], t.loadMore = "nomore")
                }
              })).catch((function(t) {
                e.stopPullDownRefresh()
              }))
            },
            getSeller: function() {
              var e = this;
              this.loadingStatus = !0, this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/seller?sellerId=".concat(this.sellerId)).then((function(t) {
                e.loadingStatus = !1, 1 === t.code && (e.sellerInfo = t.data.records[0])
              }))
            },
            sortTab: function(e) {
              if (2 === e) 1 === this.complexType ? this.complexType = 0 : this.complexType = 1;
              else if (this.complexType = 0, this.sortIdx === e) return;
              this.sortIdx = e, this.page = 1, this.goodsList = [], this.pageLoad()
            },
            goGoodsDetails: function(e) {
              this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + e
              })
            },
            goSearch: function() {
              this.searchText ? this.$util.goBack() : this.$navigateTo({
                url: "/subPage/pages/searchOld/searchOld?sellerId=" + this.sellerId
              })
            }
          }
        };
        t.default = o
      }).call(this, o("df3c").default)
    },
};
