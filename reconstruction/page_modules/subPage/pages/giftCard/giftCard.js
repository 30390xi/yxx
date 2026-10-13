// Extracted from subPage/pages/giftCard/giftCard.js; webpack module "8f8f".
// Compiled code for analysis; not an original source file.
module.exports = {
    "8f8f": function(t, n, e) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0, n.default = {
        data: function() {
          return {
            sumBalance: 0,
            records: [],
            cardDetail: [],
            cardInfo: "",
            cardId: "",
            showTip: !1,
            buyPop: !1,
            show1: !1,
            show: !1,
            tabTitle: [{
              name: "可用卡（0）"
            }, {
              name: "不可用卡（0）"
            }],
            currentTab: 0,
            barStyle: {
              width: "120rpx",
              height: "4rpx",
              background: "linear-gradient(180deg, #FD928B 0%, #EF5E3F 100%)",
              "border-radius": "50rpx",
              "margin-left": "-50rpx",
              position: "absolute",
              bottom: "10rpx"
            }
          }
        },
        filters: {
          validityTimeFilter: function(t) {
            if (t) return t.slice(0, 10) + "到期"
          },
          canUseItemTypeFilter: function(t) {
            if (t) {
              var n = t.split(","),
                e = "";
              return n.forEach((function(t) {
                1 == t ? e = "仅可购买景区门票，具体以购卡章程规定内容为准" : 2 == t && (e = "仅可购买自营文创特产，具体以购卡章程规定内容为准")
              })), n[1] && (e = "仅可购买景区门票和自营文创特产，具体以购卡章程规定内容为准"), e
            }
          }
        },
        onLoad: function(t) {},
        onShow: function() {
          this.getCardList()
        },
        methods: {
          getCardList: function() {
            var t = this;
            this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftCard/getMemberGiftCardList").then((function(n) {
              1 === n.code && (t.sumBalance = n.data.sumBalance, t.canUseNum = n.data.canUseGiftCardVoList.length, t.notCanUseNum = n.data.notCanUseGiftCardVoList.length, t.tabTitle = [{
                name: "可用卡（".concat(t.canUseNum, "）")
              }, {
                name: "不可用卡（".concat(t.notCanUseNum, "）")
              }], 0 == t.currentTab ? t.records = n.data.canUseGiftCardVoList : 1 == t.currentTab && (t.records = n.data.notCanUseGiftCardVoList))
            }))
          },
          tabsChange: function(t) {
            this.currentTab = t, this.getCardList()
          },
          closePopup: function() {
            this.show = !1
          },
          bindCard: function() {
            this.$navigateTo({
              url: "/subPage/pages/bindGiftCard/bindGiftCard"
            })
          },
          getGiftCardDetail: function(t) {
            var n = this,
              e = {
                id: t.id
              };
            this.cardId = t.id, this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftCard/getGiftCardDetailedById", e).then((function(t) {
              1 === t.code && (n.cardDetail = t.data, n.show = !0)
            }))
          },
          buyCard: function() {
            this.buyPop = !0
          },
          showLog: function() {
            this.show = !0
          },
          showtips: function(t) {
            this.cardInfo = t, this.showTip = !0
          }
        }
      }
    },
};
