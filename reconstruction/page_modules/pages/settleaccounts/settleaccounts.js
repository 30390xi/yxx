// Extracted from pages/settleaccounts/settleaccounts.js; webpack module b66a.
// Compiled code for analysis; not an original source file.
module.exports = {
    b66a: function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var a = {
        data: function() {
          return {
            loadingStatus: !0,
            brokerageId: "",
            memberBrokerage: ""
          }
        },
        onLoad: function(e) {
          e.brokerageId && (this.brokerageId = e.brokerageId), this.pageLoad()
        },
        filters: {
          toFixed2: function(e) {
            return e ? Number(e).toFixed(2) : "0.00"
          }
        },
        methods: {
          pageLoad: function() {
            var e = this;
            this.loadingStatus = !0, this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/memberBrokerage/".concat(this.brokerageId)).then((function(t) {
              e.loadingStatus = !1, 1 === t.code && (e.memberBrokerage = t.data)
            })).catch((function(t) {
              e.loadingStatus = !1
            }))
          }
        }
      };
      t.default = a
    },
};
