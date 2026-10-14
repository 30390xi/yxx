<template>
<view class="">
    <view class="sendcode">发送<text class="">验证码</text>到您的手机</view>
    <view class="number">{{$root.f0}}</view>
    <view class="verification">
        <input class="input" maxlength="6" placeholder="请输入短信验证码" placeholderClass="placeholder" type="number" :value="smsCode" @input="smsCode = $event" @blur="$forceUpdate()"></input>
        <view class="">
            <button class="codeStyle" @click="getCode($event)">{{codeTips}}</button>
        </view>
    </view>
    <view class="next-step" @click="goPage($event)">下一步</view>
    <u-verification-code class=" vue-ref" ref="uCode" seconds="60" @change="codeChange()"></u-verification-code>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        data: function() {
          return {
            codeTips: "",
            smsCode: ""
          }
        },
        filters: {
          mobileSubstr: function(e) {
            return e ? e.substr(0, 3) + "****" + e.substr(7) : "-"
          }
        },
        computed: {
          userInfo: function() {
            return this.$store.getters.userInfor
          }
        },
        onShow: function() {},
        methods: {
          codeChange: function(e) {
            this.codeTips = e
          },
          goPage: function() {
            var e = this;
            if (!this.smsCode) return this.$uni.showToast("请输入正确验证码");
            this.$uniApi.getRequestNoLoading("GET", "manager/app/ignoreAuth/validSmsCode?phoneNumber=".concat(this.userInfo.mobilePhone, "&smsCode=").concat(this.smsCode), "正在验证中...").then((function(t) {
              1 === t.code ? e.$navigateTo({
                url: "/pages/setpassword1/setpassword1"
              }) : e.$uni.showToast(t.msg)
            })).catch((function(t) {
              e.$uni.showToast(t.msg)
            }))
          },
          getCode: function() {
            var e = this;
            if (this.$refs.uCode.canGetCode) {
              var t = {
                  phone: this.userInfo.mobilePhone,
                  time: (new Date).getTime()
                },
                n = this.$eventAnalyse.encrypt(t, "8nXB5qupfE2mwSeZ");
              this.$uniApi.getRequestYesLoading("POST", "manager/app/ignoreAuth/sendSmsCode?type=1&phoneNumber=".concat(this.userInfo.mobilePhone, "&sign=").concat(n), "正在获取验证码").then((function(t) {
                1 === t.code ? (e.$util.showSuccessToast("验证码已发送"), e.$refs.uCode.start()) : e.$uni.showToast("验证码获取失败")
              })).catch((function(t) {
                e.$uni.showToast("验证码获取失败")
              }))
            } else console.log("倒计时结束后再发送")
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.sendcode{color:#878787;font-family:PingFang-SC-Medium;font-size:28rpx;line-height:28rpx;margin-bottom:35rpx;margin-top:82rpx;text-align:center}.sendcode text{color:#333}.number{color:#333;font-family:PingFang-SC-Bold;font-size:30rpx;line-height:30rpx;margin-bottom:50rpx;text-align:center}.verification{align-items:center;background-color:#fff;display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between;padding:0 30rpx;width:100%}.verification .input{font-size:30rpx}.verification .placeholder{color:#c8c8c8;font-size:30rpx}.verification .codeStyle{border:1rpx solid #ff4643;border-radius:25rpx;color:#ff4643;font-size:24rpx;height:50rpx;line-height:50rpx}.next-step{background-color:#ff4643;border-radius:40px;color:#fff;font-family:PingFang-SC-Medium;font-size:34rpx;height:80rpx;line-height:80rpx;margin:100rpx auto;text-align:center;width:690rpx}
</style>
