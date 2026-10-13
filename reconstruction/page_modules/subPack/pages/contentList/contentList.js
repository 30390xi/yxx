// Extracted from subPack/pages/contentList/contentList.js; webpack module "90dd".
// Compiled code for analysis; not an original source file.
module.exports = {
    "90dd": function(t, n, e) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var o = {
        data: function() {
          return {
            content: {},
            contentList: {}
          }
        },
        onLoad: function(t) {
          this.id = t.contentId, this.getContentList(this.id)
        },
        onShareAppMessage: function() {
          var t = "/subPack/pages/contentList/contentList?contentId=".concat(this.id);
          return {
            title: this.content.title,
            path: this.$util.setShareUrl(t),
            imageUrl: this.content.coverImage
          }
        },
        methods: {
          getContentList: function(t) {
            var n = this;
            this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/getContentDetail?id=" + t).then((function(t) {
              1 === t.code && (n.content = t.data.content, n.contentList = t.data.contentChildContents, console.log(n.contentList))
            }))
          },
          jump: function(t) {
            this.$util.jumpAll(t)
          }
        }
      };
      n.default = o
    },
};
