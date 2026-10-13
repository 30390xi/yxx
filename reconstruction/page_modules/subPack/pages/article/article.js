// Extracted from subPack/pages/article/article.js; webpack module "1db6".
// Compiled code for analysis; not an original source file.
module.exports = {
    "1db6": function(n, t, e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var a = {
        data: function() {
          return {
            articleData: {},
            parseStyle: {
              p: "word-break: break-all;"
            }
          }
        },
        onLoad: function(n) {
          this.contentId = n.informationId, this.getArticleDetail(this.contentId), this.updateReadingNum(n.informationId)
        },
        onShareAppMessage: function() {
          var n = "/subPack/pages/article/article?informationId=".concat(this.contentId);
          return {
            title: this.articleData.title,
            path: this.$util.setShareUrl(n),
            imageUrl: this.articleData.coverImage
          }
        },
        methods: {
          getArticleDetail: function(n) {
            var t = this;
            this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/getDetail?contentId=" + n).then((function(n) {
              1 === n.code && (t.articleData = n.data)
            }))
          },
          updateReadingNum: function(n) {
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/CommonReadingNum/updateReadingNum", {
              originType: 1,
              originId: n
            }).then((function(n) {
              console.log("add success")
            }))
          }
        }
      };
      t.default = a
    },
};
