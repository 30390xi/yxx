// Extracted from pages/noticedetails/noticedetails.js; webpack module ec12.
// Compiled code for analysis; not an original source file.
module.exports = {
    ec12: function(n, e, t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0, e.default = {
        data: function() {
          return {
            annunciateId: "",
            content: "",
            parseStyle: {
              p: "word-break: break-all;"
            }
          }
        },
        onLoad: function(n) {
          n.annunciateId && (this.annunciateId = n.annunciateId), this.pageLoad()
        },
        methods: {
          pageLoad: function() {
            var n = this;
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/annunciate/" + this.annunciateId).then((function(e) {
              1 === e.code && (n.content = e.data)
            }))
          }
        }
      }
    }
};
