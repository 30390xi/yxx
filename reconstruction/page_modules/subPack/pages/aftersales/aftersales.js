// Extracted from subPack/pages/aftersales/aftersales.js; webpack module d004.
// Compiled code for analysis; not an original source file.
module.exports = {
    d004: function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          data: function() {
            return {
              page: 1,
              loadMore: "loading",
              aftersalesList: []
            }
          },
          onLoad: function() {
            this.pageLoad()
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              var t = this,
                n = {
                  current: this.page,
                  buyerId: this.userInfo.memberId,
                  orderStatus: 6
                };
              this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getOrderStatusList", n).then((function(n) {
                if (e.stopPullDownRefresh(), 1 === n.code) {
                  var o = n.data.records;
                  n.data.total > 0 ? (1 === n.data.current ? t.aftersalesList = o : t.aftersalesList = t.aftersalesList.concat(o), n.data.current < n.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.aftersalesList = [])
                }
              })).catch((function(t) {
                e.stopPullDownRefresh()
              }))
            },
            goOrderDetails: function(e) {
              this.$navigateTo({
                url: "../order_details/order_details?orderId=".concat(e)
              })
            }
          }
        };
        t.default = n
      }).call(this, n("df3c").default)
    }
};
