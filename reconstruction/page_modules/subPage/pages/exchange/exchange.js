// Extracted from subPage/pages/exchange/exchange.js; webpack module d787.
// Compiled code for analysis; not an original source file.
module.exports = {
    d787: function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var s = {
          components: {
            ocrIndex: function() {
              n.e("components/ocr/ocrIndex").then(function() {
                return resolve(n("7882"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              password: "",
              cardInfo: "",
              error: !1,
              changePop: !1,
              userPop: !1,
              tipsPop: !1,
              tips: "",
              useIdCard: "",
              useName: "",
              usePhone: ""
            }
          },
          filters: {},
          onLoad: function() {},
          methods: {
            setDataInfos: function(e) {
              var t = this;
              console.log(e, "参数--------"), e ? (this.useName = e.name, this.useIdCard = e.idCarNo) : setTimeout((function() {
                t.$util.showToast("识别失败，请重新识别或手动填写")
              }), 500)
            },
            getCardInfo: function() {
              var e = this;
              this.password ? this.verify() ? this.$uniApi.dataRequestNoLoading("post", "product/app/equityCard/getEquityCardByPassword", {
                password: this.password
              }).then((function(t) {
                1 === t.code ? (e.tipsPop = !1, e.cardInfo = t.data, e.changePop = !0) : (e.tips = t.msg, e.tipsPop = !0)
              })) : this.$util.showToast(this.$util.checkName(this.useName).msg || this.$util.checkPhone(this.usePhone).msg || this.$util.checkId(this.useIdCard).msg) : this.$util.showToast("请输入兑换码")
            },
            exchangeCard: function() {
              var t = this,
                n = {
                  useIdCard: this.useIdCard,
                  useName: this.useName,
                  usePhone: this.usePhone,
                  password: this.password
                };
              this.$uniApi.dataRequestNoLoading("post", "product/app/equityCard/exchange", n).then((function(n) {
                1 === n.code ? (t.changePop = !1, t.tipsPop = !1, t.$util.showToast("兑换成功"), n.data.userEquityCardId && e.redirectTo({
                  url: "/subPage/pages/myeqcard/detail?id=" + n.data.userEquityCardId
                })) : t.$util.showToast(n.msg)
              }))
            },
            verify: function() {
              return this.$util.checkName(this.useName).code && this.$util.checkPhone(this.usePhone).code && this.$util.checkId(this.useIdCard).code
            },
            bindUser: function() {
              this.verify() ? (this.userPop = !1, this.changePop = !0) : this.$util.showToast(this.$util.checkName(this.useName).msg || this.$util.checkPhone(this.usePhone).msg || this.$util.checkId(this.useIdCard).msg)
            }
          }
        };
        t.default = s
      }).call(this, n("df3c").default)
    },
};
