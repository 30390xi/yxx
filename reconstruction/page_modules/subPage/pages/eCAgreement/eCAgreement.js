// Extracted from subPage/pages/eCAgreement/eCAgreement.js; webpack module 5300.
// Compiled code for analysis; not an original source file.
module.exports = {
    5300: function(e, n, t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0, n.default = {
        data: function() {
          return {
            buyDesc: "",
            name: "",
            parseStyle: {
              p: "word-break: break-all;"
            }
          }
        },
        onLoad: function(e) {
          this.getEquityCardDetail(e.id)
        },
        methods: {
          getEquityCardDetail: function(e) {
            var n = this;
            this.$uniApi.getRequestNoLoading("get", "product/app/equityCard/" + e).then((function(e) {
              1 === e.code ? (n.buyDesc = e.data.buyDesc, n.name = e.data.name) : n.$util.showToast(e.msg)
            }))
          }
        }
      }
    },
};
