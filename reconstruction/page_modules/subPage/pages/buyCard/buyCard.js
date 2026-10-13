// Extracted from subPage/pages/buyCard/buyCard.js; webpack module b4a0.
// Compiled code for analysis; not an original source file.
module.exports = {
    b4a0: function(t, e, n) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = {
          components: {
            ocrIndex: function() {
              n.e("components/ocr/ocrIndex").then(function() {
                return resolve(n("7882"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              name: "",
              showCardInfo: "",
              savePop: !1,
              useIdCard: "",
              useName: "",
              usePhone: "",
              submiting: !1,
              dll: 3,
              amount: 0
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
            this.getEquityCardDetail(t.id)
          },
          onShow: function() {
            this.submiting = !1
          },
          methods: {
            setDataInfos: function(t) {
              var e = this;
              console.log(t, "参数--------"), t ? (this.useName = t.name, this.useIdCard = t.idCarNo) : setTimeout((function() {
                e.$util.showToast("识别失败，请重新识别或手动填写")
              }), 500)
            },
            getEquityCardDetail: function(t) {
              var e = this;
              this.$uniApi.getRequestNoLoading("get", "product/app/equityCard/" + t).then((function(t) {
                1 === t.code ? (e.dll = t.data.detailList.length, e.showCardInfo = t.data) : e.$util.showToast(t.msg)
              }))
            },
            showPop: function() {
              this.savePop = !0
            },
            toAgreenment: function(t) {
              this.$navigateTo({
                url: "/subPage/pages/eCAgreement/eCAgreement?id=" + t
              })
            },
            verify: function() {
              return this.$util.checkName(this.useName).code && this.$util.checkPhone(this.usePhone).code && this.$util.checkId(this.useIdCard).code
            },
            buyCard: function() {
              var e = this;
              if (this.showCardInfo.buyAbleNum <= 0) this.$util.showToast("该权益卡已售空");
              else if (0 != this.showCardInfo.buyLimit && this.showCardInfo.memberBuyNum >= this.showCardInfo.buyLimit) this.$util.showToast("最多可购买".concat(this.showCardInfo.memberBuyNum, "张"));
              else {
                if (this.verify()) {
                  if (!this.submiting) {
                    t.showLoading({
                      title: "发起支付..."
                    }), this.submiting = !0;
                    var n = {
                      equityCardId: this.showCardInfo.equityCardId,
                      useName: this.useName,
                      usePhone: this.usePhone,
                      useIdCard: this.useIdCard,
                      password: this.password,
                      amount: this.showCardInfo.price,
                      payChannel: ""
                    };
                    this.$uniApi.dataRequestYesLoading("post", "product/app/equityCard/toPay", n, "支付中").then((function(n) {
                      if (1 !== n.code) return t.hideLoading(), e.submiting = !1, void e.$util.showToast(n.msg);
                      t.requestPayment({
                        timeStamp: n.data.timeStamp,
                        nonceStr: n.data.nonceStr,
                        package: "prepay_id=".concat(n.data.prepayid),
                        signType: n.data.signType,
                        paySign: n.data.pay_sign,
                        success: function(t) {
                          console.log(t), e.getUserCardInfo(n.data.paymentId), e.submiting = !1
                        },
                        fail: function(t) {
                          console.log("fail:" + JSON.stringify(t)), e.submiting = !1
                        }
                      })
                    }))
                  }
                } else this.$util.showToast(this.$util.checkName(this.useName).msg || this.$util.checkPhone(this.usePhone).msg || this.$util.checkId(this.useIdCard).msg)
              }
            },
            getUserCardInfo: function(e) {
              var n = this;
              this.$uniApi.getRequestNoLoading("get", "product/app/userEquityCard/detailByPaymentId/" + e).then((function(e) {
                1 === e.code ? e.data.userEquityCardId && t.redirectTo({
                  url: "/subPage/pages/myeqcard/detail?id=" + e.data.userEquityCardId
                }) : n.$util.showToast(e.msg)
              }))
            }
          }
        };
        e.default = i
      }).call(this, n("df3c").default)
    }
};
