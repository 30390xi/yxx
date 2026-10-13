// Extracted from pages/ordertracking/ordertracking.js; webpack module "88a8".
// Compiled code for analysis; not an original source file.
module.exports = {
    "88a8": function(t, n, i) {
      (function(t) {
        var e = i("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var o = e(i("c997")),
          c = {
            data: function() {
              return {
                orderId: "",
                logisticList: [],
                logistics: {}
              }
            },
            onLoad: function(t) {
              t.orderId && (this.orderId = t.orderId), this.getLogisticsInfo()
            },
            methods: {
              getLogisticsInfo: function() {
                var t = this,
                  n = {
                    orderId: this.orderId
                  };
                console.log(n), this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/orderPackage/getLogistic", n).then((function(n) {
                  1 === n.code && (t.logistics = n.data, t.logisticList = n.data.logisticsInfo.Traces)
                }))
              },
              copyText: function() {
                (0, o.default)({
                  content: this.logistics.logisticsInfo.LogisticCode,
                  success: function(n) {
                    t.showToast({
                      title: n,
                      icon: "none"
                    })
                  },
                  error: function(n) {
                    t.showToast({
                      title: n
                    })
                  }
                })
              }
            }
          };
        n.default = c
      }).call(this, i("df3c").default)
    },
};
