// Extracted from pages/detailed/detailed.js; webpack module c20f.
// Compiled code for analysis; not an original source file.
module.exports = {
    c20f: function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          data: function() {
            return {
              page: 1,
              loadMore: "loading",
              detailList: [],
              detailType: -1
            }
          },
          onLoad: function() {
            this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          filters: {
            toFixed2: function(e) {
              return e ? Number(e).toFixed(2) : "0.00"
            }
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
                  memberId: this.userInfo.memberId
                }; - 1 !== this.detailType && (n.type = this.detailType), this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/memberBrokerage/detailListByPage", n).then((function(n) {
                if (e.stopPullDownRefresh(), 1 === n.code) {
                  var o = n.data.records;
                  n.data.total > 0 ? (1 === n.data.current ? t.detailList = o : t.detailList = t.detailList.concat(o), n.data.current < n.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.detailList = [])
                }
              })).catch((function(t) {
                e.stopPullDownRefresh()
              }))
            },
            showSheet: function() {
              var t = this;
              e.showActionSheet({
                itemList: ["全部", "返利入帐", "返利出账", "返利提现"],
                success: function(e) {
                  0 === e.tapIndex ? t.detailType = -1 : 1 === e.tapIndex ? t.detailType = 0 : 2 === e.tapIndex ? t.detailType = 1 : 3 === e.tapIndex && (t.detailType = 2), t.pageLoad()
                }
              })
            },
            typeFun: function(e) {
              return 0 === e ? "返利入帐" : 1 === e ? "返利出账" : 2 === e ? "返利提现" : "全部"
            }
          }
        };
        t.default = n
      }).call(this, n("df3c").default)
    },
};
