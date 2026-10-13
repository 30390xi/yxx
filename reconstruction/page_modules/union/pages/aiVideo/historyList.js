// Extracted from union/pages/aiVideo/historyList.js; webpack module fa20.
// Compiled code for analysis; not an original source file.
module.exports = {
    fa20: function(o, e, n) {
      (function(o) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = n("0e74"),
          a = {
            components: {
              loading: function() {
                n.e("union/pages/aiVideo/component/loading").then(function() {
                  return resolve(n("9ae6"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                photoList: [],
                finished: !1,
                page: 1,
                loadMore: "loading"
              }
            },
            onShow: function() {
              this.pageLoad()
            },
            methods: {
              goView: function(e) {
                2 != e.status && o.navigateTo({
                  url: "/union/pages/aiVideo/loadPage?id=" + e.id + "&imageName=" + e.imageName + "&moldId=" + e.moldId + "&source=3"
                })
              },
              scrolltolower: function() {
                "loadmore" === this.loadMore && this.pageLoad()
              },
              pageLoad: function() {
                var e = this;
                this.loadMore = "loading";
                var n = {
                  openId: o.getStorageSync("wxopenid"),
                  pageOn: this.page,
                  pageSize: 5
                };
                this.$uniApi.dataRequestNoLoading("GET", "program/queryByOpenId", n, 1, t.AIVIDEO_API_BASE_URL).then((function(o) {
                  if (1 === o.code) {
                    var n = o.data.records || [];
                    o.data.total > 0 ? (1 === o.data.current ? e.photoList = n : e.photoList = e.photoList.concat(n), o.data.current < o.data.pages ? (e.page = e.page + 1, e.loadMore = "loadmore") : e.loadMore = "nomore") : (e.loadMore = "nomore", e.photoList = [])
                  } else e.$util.showToast(o.msg || "加载失败"), e.finished = !0
                })).catch((function(o) {
                  e.$util.showToast("加载失败")
                })).finally((function() {}))
              }
            }
          };
        e.default = a
      }).call(this, n("df3c").default)
    },
};
