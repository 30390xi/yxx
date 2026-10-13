// Extracted from pages/refundRecord/refundRecord.js; webpack module "25a3".
// Compiled code for analysis; not an original source file.
module.exports = {
    "25a3": function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          data: function() {
            return {
              detailObj: [],
              iscs: "",
              isLineProduct: !1
            }
          },
          filters: {},
          onLoad: function(t) {
            this._orderId = t.orderId, this.isLineProduct = !!t.isLineProduct, this.iscs = t.cs || "", t.cs && e.setNavigationBarTitle({
              title: "取消预约详情"
            }), this.getOrderDetail()
          },
          methods: {
            getOrderDetail: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getAftersaleInfo", {
                orderId: this._orderId
              }).then((function(t) {
                1 === t.code && (e.detailObj = t.data)
              }))
            },
            refundStatusTick: function(e) {
              var t = this.iscs;
              return 0 === e ? t ? "取消审核中" : "退款审核中" : 2 === e ? t ? "取消失败" : "退款失败" : 3 === e ? t ? "已取消" : "已退款" : void 0
            },
            reasonFilter: function(e) {
              var t = this.iscs;
              return 10 == e ? t ? "预约失败" : "出票失败，自动退款" : ["行程取消", "门票预约错误", "未收到入园凭证", "景区无入园信息", "其他"][e - 5]
            }
          }
        };
        t.default = n
      }).call(this, n("3223").default)
    },
};
