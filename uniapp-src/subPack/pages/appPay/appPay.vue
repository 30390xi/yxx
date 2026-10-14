<template>
<view class="page-box">
    <view class="info-box">
        <view class="text">{{ payMsg }}</view>
        <image mode class="icon" src="https://eshopfile.zhiyousx.com/2023061917344246662.png"></image>
    </view>
    <button class="btn" :hidden="!(payMsg!='支付中...')" v-if="channel=='ixa'" @click="exitMiniProgram($event)">返回</button>
    <button appParameter="pay_end" @error="launchAppError" class="btn" :hidden="!(payMsg!='支付中...')" openType="launchApp" v-else>返回游陕西</button>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              openId: "",
              payType: "",
              orderId: "",
              memberRemark: "",
              url: "",
              subData: {},
              payMsg: "支付中...",
              channel: ""
            }
          },
          onLoad: function(t) {
            this.channel = t.channel || "", this.orderId = t.orderId || "", this.payType = t.payType || "", this.orderId ? this.getOpenId() : this.$uni.showToast("未获取到订单信息")
          },
          onShow: function() {},
          onHide: function() {},
          onUnload: function() {},
          methods: {
            getOpenId: function() {
              var e = this;
              t.login({
                success: function(t) {
                  e.$uniApi.getRequestYesLoading("GET", "manager/app/v1/wxPopular/getSessionKeyPro/".concat(t.code), "请求中").then((function(t) {
                    1 === t.code ? (e.openId = t.data.openid, e.payForApp()) : (e.$uni.showToast(t.msg), e.submiting = !1)
                  })).catch((function(t) {
                    e.submiting = !1, e.$uni.showToast(t.msg)
                  }))
                }
              })
            },
            payForApp: function() {
              1 == this.payType ? (this.url = "order/app/v1/order/waitPayToPay", this.subData = {
                payChannel: "",
                orderSource: 5,
                orderId: this.orderId,
                buyerMemo: this.memberRemark,
                seriesNumber: this.openId
              }) : 2 == this.payType ? (this.url = "order/app/v1/cartInfo/ToPaySmall ", this.subData = {
                payKey: this.orderId,
                openId: this.openId
              }) : 3 == this.payType && (this.url = "order/app/v1/order/groupTicketWaitPayToPay", this.subData = {
                payChannel: "",
                orderSource: 5,
                groupOrderId: this.orderId,
                buyerMemo: this.memberRemark,
                seriesNumber: this.openId
              }), this.goPay()
            },
            goPay: function() {
              var e = this;
              this.submiting || (uni.showLoading({
                title: "发起支付..."
              }), this.submiting = !0, this.$uniApi.dataRequestYesLoading("POST", this.url, this.subData, "支付中").then((function(n) {
                return 18018 == n.code || 18019 == n.code || 18020 == n.code ? (e.submiting = !1, e.payMsg = "支付失败", void uni.hideLoading()) : 1 !== n.code ? (uni.hideLoading(), e.submiting = !1, e.payMsg = "支付失败", void e.$uni.showToast(n.msg)) : void uni.requestPayment({
                  timeStamp: n.data.timeStamp,
                  nonceStr: n.data.nonceStr,
                  package: "prepay_id=".concat(n.data.prepayid),
                  signType: n.data.signType,
                  paySign: n.data.pay_sign,
                  success: function(t) {
                    e.submiting = !1, e.payMsg = "支付成功"
                  },
                  fail: function(t) {
                    e.submiting = !1, e.payMsg = "支付失败"
                  }
                })
              })))
            },
            launchAppError: function(e) {
              uni.showModal({
                title: "提示",
                content: e.detail.errMsg
              })
            },
            exitMiniProgram: function() {
              n.navigateBackMiniProgram()
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#fff;min-height:100vh}.page-box .info-box,.page-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;width:100%}.page-box .info-box{margin-bottom:80rpx;margin-top:80rpx}.page-box .info-box .text{color:#333;font-size:30rpx;font-weight:700;margin-bottom:80rpx}.page-box .info-box .icon{height:212rpx;width:250rpx}.page-box .btn{align-items:center;background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:35rpx;color:#fff;display:-webkit-flex;display:flex;font-size:28rpx;height:70rpx;justify-content:center;letter-spacing:4px;width:660rpx}
</style>
