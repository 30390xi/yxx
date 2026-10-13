// Extracted from subPage/pages/commentslist/commentslist.js; webpack module b6bd.
// Compiled code for analysis; not an original source file.
module.exports = {
    b6bd: function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          data: function() {
            return {
              page: 1,
              loadMore: "loading",
              commentsList: []
            }
          },
          onLoad: function(e) {
            e.itemId && (this.itemId = e.itemId), this.pageLoad()
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          methods: {
            pageLoad: function() {
              var t = this,
                n = {
                  current: this.page,
                  itemId: this.itemId
                };
              this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/itemComment/getListByItemId", n).then((function(n) {
                if (e.stopPullDownRefresh(), 1 === n.code) {
                  var o = n.data.page.records;
                  n.data.page.total > 0 ? (o.forEach((function(e) {
                    e.createTime = e.createTime.slice(0, 9), e.picUrl ? e.picUrl = e.picUrl.split(",") : e.picUrl = []
                  })), 1 === n.data.page.current ? t.commentsList = o : t.commentsList = t.commentsList.concat(o), n.data.page.current < n.data.page.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.commentsList = [])
                }
              })).catch((function(t) {
                e.stopPullDownRefresh()
              }))
            },
            commentsBtn: function(t, n) {
              e.previewImage({
                current: n,
                urls: t
              })
            }
          }
        };
        t.default = n
      }).call(this, n("df3c").default)
    },
};
