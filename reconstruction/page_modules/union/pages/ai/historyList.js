// Extracted from union/pages/ai/historyList.js; webpack module "5dd3".
// Compiled code for analysis; not an original source file.
module.exports = {
    "5dd3": function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = {
          components: {
            EmptyState: function() {
              n.e("components/empty/empty").then(function() {
                return resolve(n("a427"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              page: 1,
              loadMore: "loading",
              newsList: []
            }
          },
          computed: {
            newsListCopy: function() {
              var e = [],
                t = {};
              return this.newsList.forEach((function(n) {
                var o = n.updateTime;
                if (t[o]) t[o].data.push(n);
                else {
                  var a = {
                    key: o,
                    data: [n]
                  };
                  t[o] = a, e.push(a)
                }
              })), e
            }
          },
          onLoad: function(e) {
            this.pageLoad()
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          methods: {
            goView: function(t) {
              this.$eventAnalyse.analyse({
                eventTag: "ai_showHistory_click",
                eventName: "伴游历史记录回显",
                eventParams: {
                  HISTORY_ID: t
                }
              }), e.setStorageSync("HISTORY_ID", t), setTimeout((function() {
                e.navigateBack({
                  delta: 1
                })
              }), 300)
            },
            setTime: function(e) {
              var t = new Date(e),
                n = t.getFullYear(),
                o = t.getMonth() + 1,
                a = t.getDate();
              return "".concat(n, "-").concat(o < 10 ? "0" + o : o, "月").concat(a < 10 ? "0" + a : a, "日")
            },
            pageLoad: function() {
              var t = this,
                n = {
                  current: this.page,
                  openId: e.getStorageSync("wxopenid"),
                  size: 20,
                  bussType: 1
                };
              this.$uniApi.dataRequestNoLoading("GET", "ai/aiEscort/session/page", n).then((function(n) {
                if (e.stopPullDownRefresh(), 1 === n.code) {
                  var o = n.data.records;
                  n.data.total > 0 ? (1 === n.data.current ? t.newsList = o : t.newsList = t.newsList.concat(o), n.data.current < n.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.newsList = [], t.loadMore = "nomore")
                }
              })).catch((function(t) {
                e.stopPullDownRefresh()
              }))
            }
          }
        };
        t.default = o
      }).call(this, n("df3c").default)
    },
};
