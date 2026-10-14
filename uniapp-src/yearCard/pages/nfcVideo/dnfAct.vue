<template>
<view class="page-box">
    <uni-navbar class="" :titleCenter="false" transparentFixedFontColor="#ffffff" type="transparentFixed" :vueSlots="['transparentFixedLeft']">
        <view class="" slot="transparentFixedLeft">
            <view class="home-btn" @click="pageBack($event)">
                <image class="home-icon" src="https://eshopfile.zhiyousx.com/2026012116272257896.png"></image>
            </view>
        </view>
    </uni-navbar>
    <image class="actImg" mode="widthFix" src="https://eshopfile.zhiyousx.com/2026011516590113392.jpg"></image>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              routes: []
            }
          },
          onLoad: function(n) {
            this.routes = getCurrentPages()
          },
          methods: {
            pageBack: function() {
              1 == this.routes.length ? uni.redirectTo({
                url: "/yearCard/pages/nfcVideo/jz"
              }) : uni.navigateBack()
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{align-items:center;display:-webkit-flex;display:flex;justify-content:center;position:relative;width:100%}.page-box .actImg{height:auto;width:750rpx}.home-btn{align-items:center;background:hsla(0,0%,100%,.7);border-radius:50%;box-shadow:0rpx 4rpx 12rpx 0rpx rgba(0,0,0,.1);display:-webkit-flex;display:flex;height:56rpx;justify-content:center;margin-left:20rpx;width:56rpx}.home-icon{height:40rpx;width:40rpx}
</style>
