<template>
<view class="">
    <view class="head">请输入支付密码</view>
    <view class="numBox">
        <u-message-input activeColor="#ff4643" class="" :focus="true" :maxlength="6" mode="bottomLine" @change="changePwd()"></u-message-input>
    </view>
    <button class="next-step" @click="subBtn($event)">完成</button>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              password: ""
            }
          },
          methods: {
            subBtn: function() {
              var t = this;
              this.password.length > 5 ? this.$uniApi.getRequestYesLoading("POST", "manager/app/v1/member/modifyPayPwd?password=".concat(this.password), "设置中").then((function(e) {
                1 === e.code && (t.$util.showSuccessToast("已修改"), t.$store.dispatch("getUserInfo", t.userInfo), setTimeout((function() {
                  uni.switchTab({
                    url: "../mine/mine"
                  })
                }), 1e3))
              })).catch((function(n) {
                t.$uni.showToast(n.msg)
              })) : this.$uni.showToast("请输入支付密码")
            },
            changePwd: function(n) {
              this.password = n, console.log("内容改变，当前值为：" + n)
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.head{color:#333;font-family:PingFang-SC-Medium;font-size:30rpx;margin:100rpx 0 50rpx;text-align:center}.numBox{align-items:center;display:-webkit-flex;display:flex;justify-content:center;margin:0 auto 24rpx}.explain{color:#adadad;font-family:PingFang-SC-Medium;font-size:24rpx;line-height:36rpx;text-align:center}.next-step{background-color:#ff4643;border-radius:40px;color:#fff;font-family:PingFang-SC-Medium;font-size:34rpx;height:80rpx;line-height:80rpx;margin:100rpx auto;text-align:center;width:690rpx}
</style>
