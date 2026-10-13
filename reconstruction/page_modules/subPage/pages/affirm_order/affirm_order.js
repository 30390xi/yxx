// Extracted from subPage/pages/affirm_order/affirm_order.js; webpack module "0cc9".
// Compiled code for analysis; not an original source file.
module.exports = {
    "0cc9": function(t, e, r) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = {
          data: function() {
            return {
              orderType: 0,
              loadingStatus: !0,
              orderData: "",
              submiting: !1,
              shareMemberId: "",
              urlFrom: {
                skuId: "",
                quantity: 1,
                cartItemInfo: ""
              },
              giftCardAmount: 0,
              activeGiftCard: [],
              activeGiftamount: 0,
              giftCardPopData: [],
              showGiftCard: !1,
              giftCardArr: []
            }
          },
          onLoad: function(t) {
            0 == t.type ? (this.orderType = 0, this.urlFrom.skuId = t.skuId, this.urlFrom.quantity = t.quantity) : (this.orderType = 1, this.urlFrom.cartItemInfo = t.cartItemInfo), this.shareMemberId = t.shareMemberId || "", this.pageLoad(), this.getGiftCard()
          },
          filters: {
            toFixed2: function(t) {
              return t ? Number(t).toFixed(2) : "0.00"
            },
            mobileSubstr: function(t) {
              return t ? t.substr(0, 3) + "****" + t.substr(7) : "-"
            },
            validityTimeFilter: function(t) {
              return t.slice(0, 10) + "到期"
            }
          },
          onShow: function() {
            this.submiting = !1
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              0 === this.orderType ? this.orderEnsure() : this.settlement()
            },
            orderEnsure: function() {
              var t = this,
                e = "order/app/v1/order/orderEnsure?memberId=".concat(this.userInfo.memberId, "&skuId=").concat(this.urlFrom.skuId, "&quantity=").concat(this.urlFrom.quantity, "&shareMemberId=").concat(this.shareMemberId);
              console.log("传值", e), this.loadingStatus = !0, this.$uniApi.getRequestNoLoading("POST", e).then((function(e) {
                t.loadingStatus = !1, 1 === e.code && (t.orderData = e.data)
              })).catch((function(t) {
                console.log("商品详情立即购买", t)
              }))
            },
            settlement: function() {
              var t = this,
                e = {
                  memberId: this.userInfo.memberId,
                  cartItemInfo: this.urlFrom.cartItemInfo
                };
              console.log("购物车结算", this.urlFrom.cartItemInfo), this.loadingStatus = !0, this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/cartInfo/settlement", e).then((function(e) {
                t.loadingStatus = !1, 1 === e.code && (t.orderData = e.data)
              })).catch((function(t) {
                console.log("购物车结算", t)
              }))
            },
            goPay: function() {
              var e = this,
                r = this;
              this.submiting || (this.submiting = !0, this.orderData.memberAddr ? t.login({
                success: function(t) {
                  e.$uniApi.getRequestYesLoading("GET", "manager/app/v1/wxPopular/getSessionKeyPro/".concat(t.code), "请求中").then((function(t) {
                    1 === t.code ? e.orderGenerateToPaySmall(t.data.openid) : (e.$util.showToast(t.msg), r.submiting = !1)
                  })).catch((function(t) {
                    e.$util.showToast(t.msg), r.submiting = !1
                  }))
                }
              }) : (this.$util.showToast("请先添加收货地址"), r.submiting = !1))
            },
            orderGenerateToPaySmall: function(e) {
              var r = this,
                a = {
                  buyerId: this.userInfo.memberId,
                  payChannel: "",
                  openId: e,
                  orderSource: 5,
                  orderAddress: this.orderData.memberAddr,
                  tempOrderSellerItems: this.orderData.tempOrderUnSubmitted.tempOrderSellerItems,
                  cartItemInfo: this.orderData.tempOrderUnSubmitted.cartItemInfo,
                  deliveryFee: this.orderData.tempOrderUnSubmitted.deliveryFee,
                  itemAmount: this.orderData.tempOrderUnSubmitted.itemAmount,
                  itemNumber: this.orderData.tempOrderUnSubmitted.itemNumber,
                  orderAmount: this.orderData.tempOrderUnSubmitted.orderAmount,
                  realPayableAmount: this.orderData.tempOrderUnSubmitted.realPayableAmount
                };
              this.giftCardAmount > 0 && this.activeGiftCard[0] && (a.giftCardIdList = this.activeGiftCard, a.giftCardAmount = Number(this.giftCardAmount), a.orderAmount = Number(this.orderData.tempOrderUnSubmitted.realPayableAmount) - Number(this.giftCardAmount)), this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/cartInfo/orderGenerateToPaySmall", a, "支付中").then((function(e) {
                if (1 === e.code) {
                  if (0 == a.orderAmount) return void t.redirectTo({
                    url: "/subPage/pages/order_pay/order_pay?count=0"
                  });
                  t.requestPayment({
                    timeStamp: e.data.timeStamp,
                    nonceStr: e.data.nonceStr,
                    package: "prepay_id=".concat(e.data.prepayid),
                    signType: e.data.signType,
                    paySign: e.data.pay_sign,
                    success: function(e) {
                      console.log("success:" + JSON.stringify(e)), r.submiting = !1, t.redirectTo({
                        url: "/subPage/pages/order_pay/order_pay?count=".concat(r.orderData.tempOrderUnSubmitted.realPayableAmount)
                      })
                    },
                    fail: function(e) {
                      console.log("fail:" + JSON.stringify(e)), r.submiting = !1, t.redirectTo({
                        url: "/pages/myorder/myorder?type=1"
                      })
                    }
                  })
                } else r.submiting = !1, r.$util.showToast(e.msg)
              })).catch((function(t) {
                r.submiting = !1, r.$util.showToast(t.msg)
              }))
            },
            goAddress: function() {
              this.orderData.memberAddr ? this.$navigateTo({
                url: "/subPack/pages/address/address?addrId=" + this.orderData.memberAddr.addrId
              }) : this.$navigateTo({
                url: "/subPack/pages/addaddress/addaddress"
              })
            },
            getGiftCard: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftCard/getCreateOrderCanUseGiftCard", {
                type: 2
              }).then((function(e) {
                1 === e.code ? t.giftCardArr = e.data || [] : t.$util.showToast(data.msg)
              }))
            },
            changeGiftCard: function(t, e) {
              var r = this;
              if (this.giftCardPopData.includes(t.id)) this.giftCardPopData = this.giftCardPopData.filter((function(e) {
                return e != t.id
              }));
              else {
                if (this.activeGiftamount > this.orderData.tempOrderUnSubmitted.realPayableAmount) return this.$util.showToast("目前订单已经没有可用于抵扣的金额"), !1;
                this.giftCardPopData.push(t.id)
              }
              var a = 0;
              this.giftCardArr.forEach((function(t) {
                r.giftCardPopData.forEach((function(e) {
                  e == t.id && (a += t.balance)
                }))
              })), this.activeGiftamount = a
            },
            setGiftCardPrice: function() {
              var t = this.orderData.tempOrderUnSubmitted.realPayableAmount;
              this.activeGiftamount >= t ? this.giftCardAmount = this.orderData.tempOrderUnSubmitted.realPayableAmount : this.giftCardAmount = this.activeGiftamount, this.activeGiftCard = this.$util.deepCopy(this.giftCardPopData)
            },
            confirmCard: function() {
              this.setGiftCardPrice(), this.showGiftCard = !1
            },
            chooseGiftCard: function() {
              this.giftCardArr[0] && (this.giftCardPopData = this.$util.deepCopy(this.activeGiftCard), this.showGiftCard = !0)
            }
          }
        };
        e.default = r
      }).call(this, r("df3c").default)
    },
};
