// Extracted from subPage/pages/bindGiftCard/bindGiftCard.js; webpack module "0512".
// Compiled code for analysis; not an original source file.
module.exports = {
    "0512": function(t, i, a) {
      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.default = void 0, i.default = {
        data: function() {
          return {
            show: !1,
            password: "",
            cardDetail: [],
            cardInfo: "",
            cardId: "",
            bindType: null,
            showTips: !1,
            showOther: !1,
            showDetail: !1
          }
        },
        filters: {
          statusFilter: function(t) {
            return {
              0: "绑定到您的游陕西账户？",
              1: "您已绑定了该卡",
              2: "您已绑定了该卡",
              3: "您已绑定了该卡",
              4: "该卡片已过期",
              5: "该卡片已冻结",
              6: "该卡片已作废"
            } [t]
          },
          cardTimeFilter: function(t) {
            return t.validityTimeStr ? t.validityTimeStr : t.activateEndTime ? t.activateEndTime.slice(0, 10) + "前激活" : void 0
          }
        },
        methods: {
          getGiftCardById: function() {
            var t = this;
            if (this.password) {
              var i = {
                password: this.password
              };
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftCard/getGiftCardById", i).then((function(i) {
                if (1 === i.code)
                  if (i.data) {
                    if (t.showTips = !1, t.cardInfo = i.data, 0 != i.data.status && 0 == i.data.isSelfActivate) return void(t.showOther = !0);
                    t.show = !0
                  } else t.showTips = !0;
                else t.showTips = !0
              }))
            } else this.$util.showToast("请输入礼品卡密码")
          },
          getGiftCardDetail: function(t) {
            var i = this,
              a = {
                id: t.id
              };
            this.cardId = t.id, this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftCard/getGiftCardDetailedById", a).then((function(t) {
              1 === t.code && (i.cardDetail = t.data, i.showDetail = !0)
            }))
          },
          bindCard: function() {
            var t = this,
              i = {
                password: this.password
              };
            this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftCard/activateGiftCardByPassWord", i).then((function(i) {
              1 === i.code && 0 == i.data ? (t.bindType = i.data, t.show = !1, t.$util.showToast("绑定成功"), t.$util.prevPage(1)) : t.$util.showToast(i.msg)
            }))
          },
          closePop: function() {
            this.show = !1
          },
          closeOther: function() {
            this.showOther = !1
          },
          closePopup: function() {
            this.showDetail = !1
          }
        }
      }
    },
};
