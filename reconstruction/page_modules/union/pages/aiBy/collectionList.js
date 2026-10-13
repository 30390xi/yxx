// Extracted from union/pages/aiBy/collectionList.js; webpack module "27ed".
// Compiled code for analysis; not an original source file.
module.exports = {
    "27ed": function(t, n, e) {
      (function(t) {
        var o = e("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var i = {
          mixins: [o(e("30eb")).default],
          components: {
            chatItem: function() {
              e.e("union/components1/chat-item/chat-item-by").then(function() {
                return resolve(e("8633"))
              }.bind(null, e)).catch(e.oe)
            }
          },
          onLoad: function(n) {
            this.language = t.getStorageSync("language") || "zh", t.setNavigationBarTitle({
              title: this.$t("collectionList.navbar.title")
            }), this.getCollectionList()
          },
          onShow: function() {},
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.getCollectionList()
          },
          data: function() {
            return {
              collectionList: [],
              page: 1,
              loadMore: "loading",
              language: "zh"
            }
          },
          watch: {},
          computed: {},
          methods: {
            badCommentFun: function() {
              this.collectionList = [], this.page = 1, this.loadMore = "loading", this.getCollectionList()
            },
            getCollectionList: function() {
              var t = this,
                n = {
                  pageNum: this.page,
                  pageSize: 30,
                  language: this.language
                };
              this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "ai/app/qa/collect/list", n).then((function(n) {
                if (1 === n.code) {
                  var e = n.data.records;
                  e = e.map((function(t) {
                    return {
                      time: t.questionTime,
                      list: [{
                        content: t.question,
                        type: 1,
                        state: 1,
                        end: !0,
                        name: "ai",
                        list: [],
                        id: t.id,
                        dialogueId: t.dialogueId,
                        roundId: t.roundId
                      }, {
                        content: t.answer,
                        content1: t.answer,
                        type: 0,
                        state: 0,
                        end: !0,
                        name: "ai",
                        isMe: !1,
                        list: [],
                        id: t.id,
                        dialogueId: t.dialogueId,
                        roundId: t.roundId,
                        isTerminate: !0
                      }]
                    }
                  })), n.data.total > 0 ? (1 === n.data.current ? t.collectionList = e : t.collectionList = t.collectionList.concat(e), n.data.current < n.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.collectionList = [])
                }
                console.log(t.collectionList, "this.collectionList"), t.submiting = !1
              })).catch((function(t) {}))
            }
          }
        };
        n.default = i
      }).call(this, e("df3c").default)
    },
};
