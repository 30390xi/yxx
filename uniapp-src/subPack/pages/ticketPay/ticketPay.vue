<template>
<view class="affirm-order u-skeleton" v-if="orderData">
    <view class="cardItem u-skeleton-rect">
        <view class="merchant u-skeleton-rect">
            <view class="mcName">
                <image class="" src="../../static/images/sj_icon.png"></image>
                <text class="">平台店铺</text>
                <uni-icons class="" color="#c8c8c8" size="14" type="arrowright"></uni-icons>
            </view>
        </view>
        <view class="cardGoods u-skeleton-rect">
            <view class="caedLeft">
                <view class="cardImg">
                    <image class="" mode="aspectFill" :src="orderData.defaultPicUrl" style="height:180rpx;width:180rpx;"></image>
                </view>
                <view class="cardInfo">
                    <view class="shopName multilineText2">{{orderData.itemTitle}}</view>
                    <view class="prceNum">
                        <text class="pic">{{'￥'+orderData.price}}</text>
                        <text class="itemRuter" v-if="cashBackAmount&&cashBackAmount!=0">{{'返￥'+cashBackAmount}}</text>
                    </view>
                </view>
                <text class="">{{'X '+orderData.payTicketNum}}</text>
            </view>
        </view>
        <view class="itemParameter">
            <text class="">有效期：</text>
            <view class="r">
                <view class="">{{validDateStr}}</view>
                <view class="" v-if="weekNotUseStr">{{weekNotUseStr}}</view>
                <view class="" v-if="dateNotUseStr">{{dateNotUseStr}}</view>
            </view>
        </view>
        <view class="" v-if="$root.g0">
            <view class="insure-style">
                <view class="name">保额：</view>
                <view class="">
                    <text class="money col">￥</text>
                    <text class="col">{{orderData.insuranceAmount}}</text>
                </view>
            </view>
        </view>
        <view class="itemParameter" v-else>
            <text class="">留言：</text>
            <input class="remarkInput" maxlength="40" placeholder="建议留言前先与商家沟通确认" placeholderStyle="color:#cfcfcf" type="text" :value="memberRemark" @input="memberRemark = $event" @blur="$forceUpdate()"></input>
        </view>
        <view class="couponBox" v-if="orderData.couponAmount&&orderData.couponAmount>0">
            <view class="cb-1">优惠券：</view>
            <view class="cb-2">{{'-￥'+orderData.couponAmount}}</view>
        </view>
        <view class="couponBox" v-if="orderData.giftCardAmount&&orderData.giftCardAmount>0">
            <view class="cb-1">礼品卡：</view>
            <view class="cb-2">{{'-￥'+orderData.giftCardAmount}}</view>
        </view>
        <view class="itemNum">
            <text class="">{{'共'+orderData.payTicketNum+'件'}}</text>
            <view class="itemPrice">
                <text class="">小计：</text>
                <text class="">{{'￥'+orderData.realPayableAmount}}</text>
            </view>
        </view>
    </view>
    <view class="subBox u-skeleton-rect">
        <view class="subNumPrice u-skeleton-rect">
            <text class="">{{'共'+orderData.payTicketNum+'件'}}</text>
            <view class="subPrice u-skeleton-rect">
                <text class="">应付：</text>
                <text class="">{{'￥'+orderData.realPayableAmount}}</text>
            </view>
            <button class="subBtn" :disabled="submiting" @click="goPay($event)">去支付</button>
        </view>
    </view>
    <uni-popup class=" vue-ref" ref="popup" type="center" :vueSlots="['default']">
        <view class="popup">
            <view class="text">{{'优惠券已失效,订单已恢复原价'+orderData.realPayableAmount+'元,是否继续支付?'}}</view>
            <view class="bottom">
                <view class="b-left" @click="closePopup($event)">取消</view>
                <view class="b-center"></view>
                <view class="b-right" @click="confirm($event)">确认</view>
            </view>
        </view>
    </uni-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              orderData: "",
              validDateStr: "",
              weekNotUseStr: "",
              dateNotUseStr: "",
              submiting: !1,
              memberRemark: "",
              cashBackAmount: "",
              from: ""
            }
          },
          onLoad: function(e) {
            this._orderId = e.orderId, this.from = e.from, this.orderEnsure()
          },
          filters: {
            toFixed2: function(e) {
              return e ? Number(e).toFixed(2) : "0.00"
            },
            mobileSubstr: function(e) {
              return e ? e.substr(0, 3) + "****" + e.substr(7) : "-"
            }
          },
          methods: {
            orderEnsure: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getTicketOrderDetail", {
                orderId: this._orderId
              }).then((function(t) {
                e.orderData = t.data, e.returnMoney(e.orderData.itemId);
                var r = "";
                1 == e.orderData.orderTicketStockVo.dateType ? (r = e.orderData.orderTicketStockVo.datePeriodBegin == e.orderData.orderTicketStockVo.datePeriodEnd ? e.orderData.orderTicketStockVo.datePeriodBegin + "当日" : e.orderData.orderTicketStockVo.datePeriodBegin + "~" + e.orderData.orderTicketStockVo.datePeriodEnd, e.orderData.orderTicketStockVo.dateCanUse && (e.weekNotUseStr = "".concat(e.getWeekNotUse(e.orderData.orderTicketStockVo.dateCanUse))), e.orderData.orderTicketStockVo.dateCannotUse && (e.dateNotUseStr = "".concat(e.orderData.orderTicketStockVo.dateCannotUse, "不可用"))) : (r = e.orderData.orderTicketStockVo.ticketUseDate, e.orderData.orderTicketStockVo.ticketUseStartTime ? r += "  ".concat(e.orderData.orderTicketStockVo.ticketUseStartTime, "~").concat(e.orderData.orderTicketStockVo.ticketUseEndTime) : r += "当日"), e.validDateStr = r
              }))
            },
            returnMoney: function(e) {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "product/app/v1/itemActive/" + e).then((function(e) {
                t.loadingStatus = !1, 1 === e.code && e.data && e.data.cashBackAmount && (t.cashBackAmount = e.data.cashBackAmount)
              }))
            },
            getWeekNotUse: function(e) {
              var t = [],
                r = e.split(",");
              if (7 === r.length) return "";
              var o = [1, 2, 3, 4, 5, 6, 7];
              for (var a in o) {
                var n = !0;
                for (var i in r)
                  if (o[a] == r[i]) {
                    n = !1;
                    break
                  } n && t.push("周" + "一一二三四五六日".charAt(o[a]))
              }
              return t.join(",") + "不可用"
            },
            goPay: function() {
              var t = this;
              this.submiting || (uni.showLoading({
                title: "发起支付..."
              }), this.submiting = !0, this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/order/waitPayToPay", {
                payChannel: "",
                orderSource: 5,
                orderId: this._orderId,
                buyerMemo: this.memberRemark,
                seriesNumber: uni.getStorageSync("userInfor").openId || uni.getStorageSync("wxopenid")
              }, "支付中").then((function(r) {
                return 18018 == r.code || 18019 == r.code || 18020 == r.code ? (t.orderEnsure(), t.openPopup(), t.submiting = !1, void uni.hideLoading()) : 1 !== r.code ? (uni.hideLoading(), t.submiting = !1, void t.$uni.showToast(r.msg)) : void uni.requestPayment({
                  timeStamp: r.data.timeStamp,
                  nonceStr: r.data.nonceStr,
                  package: "prepay_id=".concat(r.data.prepayid),
                  signType: r.data.signType,
                  paySign: r.data.pay_sign,
                  success: function(r) {
                    t.submiting = !1, console.log(r), t.$store.dispatch("wxInForm", ["gDlb_Lmm5UjBhe5jnstiOCTi4XfN2KOq9056Be9lDSE"]).then((function(r) {
                      uni.redirectTo({
                        url: "/subPage/pages/order_pay/order_pay?count=".concat(t.orderData.realPayableAmount, "&type=ticket&orderId=").concat(t._orderId, "&guideCopywriting=").concat(t.orderData.guideCopywriting, "\n\t\t\t\t\t\t\t\t\t&subscribeType=").concat(t.orderData.subscribeType, "&isSpecial=").concat(t.orderData.isSpecial, "&itemId=").concat(t.orderData.itemId, "&orderType=1")
                      })
                    })).catch((function(r) {
                      uni.redirectTo({
                        url: "/subPage/pages/order_pay/order_pay?count=".concat(t.orderData.realPayableAmount, "&type=ticket&orderId=").concat(t._orderId, "&guideCopywriting=").concat(t.orderData.guideCopywriting, "\n\t\t\t\t\t\t\t\t\t&subscribeType=").concat(t.orderData.subscribeType, "&isSpecial=").concat(t.orderData.isSpecial, "&itemId=").concat(t.orderData.itemId, "&orderType=1")
                      })
                    }))
                  },
                  fail: function(e) {
                    console.log("fail:" + JSON.stringify(e)), t.submiting = !1, t.from ? t.$util.goBack() : t.$navigateTo({
                      url: "/subPage/pages/orderDetailtick/orderDetailtick?orderId=" + t._orderId
                    })
                  }
                })
              })))
            },
            confirm: function() {
              this.goPay(), this.$refs.popup.close()
            },
            openPopup: function() {
              this.$refs.popup.open()
            },
            closePopup: function() {
              this.$refs.popup.close()
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.affirm-order{padding:20rpx 20rpx 220rpx}.personal{align-items:center;background-color:#fff;border-radius:16rpx;display:-webkit-flex;display:flex;height:180rpx;justify-content:space-between;padding:20rpx 30rpx}.personal>image{height:50rpx;width:50rpx}.personal .userInfor{flex:1;margin-left:20rpx}.personal .userInfor .userName{align-items:center;display:-webkit-flex;display:flex}.personal .userInfor .userName>text{font-size:30rpx}.personal .userInfor .userName>text:last-child{color:#111;margin-left:20rpx}.personal .userInfor .userAddres{margin-top:10rpx}.personal .userInfor .userAddres>text{font-size:26rpx}.personal .userInfor .userAddres .tags{background-color:#ff4643;border-radius:13rpx;color:#fff;display:inline-block;font-size:18rpx;height:26rpx;margin-right:20rpx;text-align:center;width:56rpx}.cardItem{background-color:#fff;border-radius:16rpx;margin-top:20rpx;padding:20rpx 30rpx}.cardItem .merchant{margin-bottom:40rpx}.cardItem .merchant .mcName,.cardItem .merchant{align-items:center;display:-webkit-flex;display:flex}.cardItem .merchant .mcName>image{height:30rpx;width:30rpx}.cardItem .merchant .mcName>text{color:#222;font-size:26rpx;margin-left:15rpx}.cardItem .cardGoods{align-items:center;display:-webkit-flex;display:flex;margin:30rpx 0}.cardItem .cardGoods .caedLeft{display:-webkit-flex;display:flex}.cardItem .cardGoods .caedLeft .cardImg{background-color:#e5e5e5;border-radius:4rpx;height:180rpx;width:180rpx}.cardItem .cardGoods .caedLeft .cardInfo{display:-webkit-flex;display:flex;flex:1;flex-direction:column;justify-content:space-between;margin:0 20rpx}.cardItem .cardGoods .caedLeft .cardInfo .shopName{font-size:26rpx}.cardItem .cardGoods .caedLeft .cardInfo .shopsku{color:#858585;font-size:24rpx}.cardItem .cardGoods .caedLeft .cardInfo .prceNum{align-items:center;display:-webkit-flex;display:flex;justify-content:flex-start}.cardItem .cardGoods .caedLeft .cardInfo .prceNum .pic{color:#ff4643;font-size:28rpx;margin-right:10rpx}.cardItem .cardGoods .caedLeft .cardInfo .prceNum .itemRuter{background:#ffeeea;border-radius:6rpx;color:#ff531d;font-size:20rpx;height:30rpx;line-height:30rpx;padding:0 10rpx}.cardItem .cardGoods .caedLeft>text{color:#858585;font-size:24rpx}.cardItem .itemParameter{align-items:top;display:-webkit-flex;display:flex;justify-content:space-between;padding-top:10rpx}.cardItem .itemParameter>text{color:#222;font-size:26rpx}.cardItem .itemParameter .r{flex:1;padding-left:20rpx}.cardItem .itemParameter .r view{color:#222;font-size:26rpx}.cardItem .itemParameter .remarkInput{flex:1;font-size:26rpx;padding-left:20rpx}.cardItem .insure-style{display:-webkit-flex;display:flex}.cardItem .insure-style .name{font-size:26rpx}.cardItem .insure-style .money{margin-left:20rpx}.cardItem .insure-style .col{color:#ff4643}.cardItem .couponBox{align-items:center;display:-webkit-flex;display:flex;flex-direction:row;justify-content:space-between;margin-top:10rpx}.cardItem .couponBox .cb-1{color:#222;font-size:26rpx}.cardItem .couponBox .cb-2{color:#f15252;font-family:Source Han Sans CN;font-size:26rpx}.cardItem .itemNum{align-items:center;display:-webkit-flex;display:flex;height:70rpx;justify-content:flex-end}.cardItem .itemNum>text{color:#858585;font-size:24rpx;margin-right:20rpx}.cardItem .itemNum .itemPrice{display:-webkit-flex;display:flex}.cardItem .itemNum .itemPrice>text{color:#1c1c1d;font-size:26rpx}.cardItem .itemNum .itemPrice>text:last-child{color:#ff4643}.playBox{align-items:center;background-color:#fff;border-radius:16rpx;display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between;margin-top:20rpx;padding:0 30rpx}.playBox text{color:#222;font-size:26rpx}.playBox .playType{align-items:center;display:-webkit-flex;display:flex}.subBox{bottom:0;left:0;position:fixed;width:100%;z-index:999}.subBox .subAddress{background-color:#fff6ca;display:-webkit-flex;display:flex;padding:20rpx 30rpx}.subBox .subAddress>text{color:#ff4643;font-size:26rpx}.subBox .subAddress>text:first-child{width:140rpx}.subBox .subAddress>text:last-child{flex:1}.subBox .subNumPrice{align-items:center;background-color:#fff;display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between;padding:0 30rpx}.subBox .subNumPrice>text{color:#858585;font-size:26rpx}.subBox .subNumPrice .subPrice{align-items:center;display:-webkit-flex;display:flex;flex:1;margin-left:50rpx}.subBox .subNumPrice .subPrice>text{color:#ff4643}.subBox .subNumPrice .subPrice>text:last-child{font-size:36rpx}.subBox .subNumPrice .subBtn{background-image:linear-gradient(90deg,#ff4643,#e61714);border-radius:80rpx;color:#fff;font-size:28rpx;height:80rpx;line-height:80rpx;padding:0 50rpx}.popup{background-color:#fff;border-radius:20rpx;height:auto;padding:30rpx 30rpx 120rpx;position:relative;width:640rpx}.popup .text{color:#4f4f4f;font-family:Source Han Sans CN;font-size:32rpx;line-height:1.4;margin-top:40rpx;text-align:center}.popup .bottom{align-items:center;border-top:1rpx solid #eaeaea;bottom:0;display:-webkit-flex;display:flex;flex-direction:row;height:81rpx;justify-content:space-between;left:0;position:absolute;text-align:center;width:640rpx}.popup .bottom .b-left{color:#8d8d8d;font-family:Source Han Sans CN;font-size:26rpx;font-weight:400;width:50%}.popup .bottom .b-center{background-color:#eaeaea;height:100%;width:1rpx}.popup .bottom .b-right{color:#333;font-family:Source Han Sans CN;font-size:30rpx;font-weight:400;width:50%}
</style>
