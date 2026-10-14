<template>
<view class="">
    <view class="contents" @click="changepassword($event)">
        <view class="">修改登录密码</view>
        <view class="">
            <uni-icons class="" color="#c8c8c8" type="arrowright"></uni-icons>
        </view>
    </view>
    <view class="contents" @click="setpassword($event)">
        <view class="">设置提现密码</view>
        <view class="">
            <uni-icons class="" color="#c8c8c8" type="arrowright"></uni-icons>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        data: function() {
          return {}
        },
        methods: {
          changepassword: function() {
            this.$navigateTo({
              url: "/subPage/pages/changepassword/changepassword"
            })
          },
          setpassword: function() {
            this.$navigateTo({
              url: "/pages/setpassword/setpassword"
            })
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.contents{align-items:center;background-color:#fff;border-radius:20rpx;display:-webkit-flex;display:flex;height:120rpx;justify-content:space-between;margin-left:20rpx;margin-top:20rpx;padding:0 30rpx;width:710rpx}
</style>
