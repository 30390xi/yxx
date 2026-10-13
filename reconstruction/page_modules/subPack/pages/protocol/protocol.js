// Extracted from subPack/pages/protocol/protocol.js; webpack module "593b".
// Compiled code for analysis; not an original source file.
module.exports = {
    "593b": function(n, e, t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        data: function() {
          return {
            content: "",
            parseStyle: {
              p: "word-break: break-all;"
            }
          }
        },
        onLoad: function() {
          this.getInfo()
        },
        onShow: function() {},
        methods: {
          getInfo: function() {
            var n = this;
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getInfo?paramKey=INVITE_RULE").then((function(e) {
              1 === e.code && (console.log(e.data), n.content = e.data[0].paramValue)
            }))
          }
        }
      };
      e.default = o
    },
};
