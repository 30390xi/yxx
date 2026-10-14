<template>
<view class="page-box">
    <view class="info-box">
        <view class="text">{{ payMsg }}</view>
        <image mode class="icon" src="https://eshopfile.zhiyousx.com/2023061917344246662.png"></image>
    </view>
    <view class="btn" :hidden="!(payMsg!='支付中...')" @click="closePay($event)">退出</view>
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
              payMsg: "支付中..."
            }
          },
          onLoad: function(t) {
            if (t.q) {
              if (t.q) {
                var e = decodeURIComponent(t.q),
                  n = {};
                if (-1 !== e.indexOf("?"))
                  for (var i = e.substr(e.indexOf("?") + 1).split("&"), a = 0; a < i.length; a++) n[i[a].split("=")[0]] = decodeURI(i[a].split("=")[1]);
                if (this.orderId = n.orderId || "", this.payType = n.payType || "", !this.orderId) return void this.$uni.showToast("未获取到订单信息");
                this.getOpenId()
              }
            } else this.$uni.showToast("未获取到订单信息")
          },
          onShow: function() {},
          onHide: function() {},
          onUnload: function() {},
          methods: {
            closePay: function() {
              "支付中..." != this.payMsg && t.exitMiniProgram()
            },
            getOpenId: function() {
              var t = this;
              n.login({
                success: function(e) {
                  t.$uniApi.getRequestYesLoading("GET", "manager/app/v1/wxPopular/getSessionKeyPro/".concat(e.code), "请求中").then((function(e) {
                    1 === e.code ? (t.openId = e.data.openid, t.payForApp()) : (t.$uni.showToast(e.msg), t.submiting = !1)
                  })).catch((function(e) {
                    t.submiting = !1, t.$uni.showToast(e.msg)
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
              }) : (this.url = "order/app/v1/cartInfo/ToPaySmall ", this.subData = {
                payKey: this.orderId,
                openId: this.openId
              }), this.goPay()
            },
            goPay: function() {
              var t = this;
              this.submiting || (uni.showLoading({
                title: "发起支付..."
              }), this.submiting = !0, this.$uniApi.dataRequestYesLoading("POST", this.url, this.subData, "支付中").then((function(e) {
                return 18018 == e.code || 18019 == e.code || 18020 == e.code ? (t.submiting = !1, t.payMsg = "支付失败", void uni.hideLoading()) : 1 !== e.code ? (uni.hideLoading(), t.submiting = !1, t.payMsg = "支付失败", void t.$uni.showToast(e.msg)) : void uni.requestPayment({
                  timeStamp: e.data.timeStamp,
                  nonceStr: e.data.nonceStr,
                  package: "prepay_id=".concat(e.data.prepayid),
                  signType: e.data.signType,
                  paySign: e.data.pay_sign,
                  success: function(e) {
                    t.submiting = !1, t.payMsg = "支付成功"
                  },
                  fail: function(e) {
                    t.submiting = !1, t.payMsg = "支付失败"
                  }
                })
              })))
            },
            launchAppError: function(t) {
              console.log(t.detail.errMsg), uni.showModal({
                title: "提示",
                content: t.detail.errMsg
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#fff;min-height:100vh}.page-box .info-box,.page-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;width:100%}.page-box .info-box{margin-bottom:80rpx;margin-top:80rpx}.page-box .info-box .text{color:#333;font-size:30rpx;font-weight:700;margin-bottom:80rpx}.page-box .info-box .icon{height:212rpx;width:250rpx}.page-box .btn{align-items:center;background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:35rpx;color:#fff;display:-webkit-flex;display:flex;font-size:28rpx;height:70rpx;justify-content:center;letter-spacing:4px;width:660rpx}
</style>
