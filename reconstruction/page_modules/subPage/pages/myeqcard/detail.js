// Extracted from subPage/pages/myeqcard/detail.js; webpack module f827.
// Compiled code for analysis; not an original source file.
module.exports = {
    f827: function(t, e, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0, e.default = {
        data: function() {
          return {
            name: "",
            savePop: !1,
            cardDetail: "",
            cardState: 0,
            id: "",
            dll: 3
          }
        },
        filters: {
          tiameFilter: function(t) {
            if (!t) return "";
            var e = t.split(" ")[0].split("-");
            return e[0] + "年" + e[1] + "月" + e[2] + "日"
          }
        },
        onLoad: function(t) {
          this.id = t.id, t.cardState && (this.cardState = t.cardState)
        },
        onShow: function() {
          this.getUserCardInfo()
        },
        methods: {
          getUserCardInfo: function() {
            var t = this;
            this.$uniApi.getRequestNoLoading("get", "product/app/userEquityCard/detail/" + this.id).then((function(e) {
              1 === e.code ? (t.dll = e.data.detailList.length, t.cardDetail = e.data, 1 != t.cardDetail.expireState && 3 != t.cardDetail.state && 4 != t.cardDetail.state && 5 != t.cardDetail.state || (t.cardState = 1)) : t.$util.showToast(e.msg)
            }))
          },
          toBuy: function(t) {
            var e = "/subPage/pages/buyCard/buyCard?id=" + t;
            this.$util.isLogin(e) && this.$navigateTo({
              url: e
            })
          },
          toEqDetail: function(t) {
            var e = "/subPage/pages/myeqcard/eqdetail?source=2&id=" + t + "&cardName=" + this.cardDetail.name;
            this.$util.isLogin(e) && this.$navigateTo({
              url: e
            })
          }
        }
      }
    }
};
