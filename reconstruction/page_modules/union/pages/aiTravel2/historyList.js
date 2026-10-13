// Extracted from union/pages/aiTravel2/historyList.js; webpack module 3833.
// Compiled code for analysis; not an original source file.
module.exports = {
    3833: function(t, n, e) {
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          onShow: function() {
            this.getHistoryList(), this.getTopData()
          },
          data: function() {
            return {
              historyList: null,
              titleColor: "#000",
              topData: null
            }
          },
          onPageScroll: function(t) {
            t.scrollTop < 10 ? this.titleColor = "#000" : this.titleColor = "transparent"
          },
          methods: {
            getHistoryList: function() {
              var n = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/historyList", {
                userId: t.getStorageSync("wxopenid"),
                bussType: 2
              }).then((function(t) {
                1 === t.code && (n.historyList = t.data || [])
              })).catch((function() {}))
            },
            goToDetail: function(n) {
              if (n.sessionId) try {
                getCurrentPages().length >= 8 ? t.reLaunch({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(n.sessionId, "&source=historyList")
                }) : t.navigateTo({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(n.sessionId, "&source=historyList")
                })
              } catch (e) {
                t.reLaunch({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(n.sessionId, "&source=historyList")
                })
              }
            },
            getTopData: function() {
              var n = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/queryTop", {
                openId: t.getStorageSync("wxopenid")
              }).then((function(t) {
                1 === t.code && (n.topData = t.data || null)
              })).catch((function() {}))
            }
          }
        };
        n.default = e
      }).call(this, e("df3c").default)
    },
};
