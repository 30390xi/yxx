<template>
<view class="">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="page-box">
        <image class="" mode="widthFix" :src="imgUrl"></image>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        data: function() {
          return {
            imgUrl: ""
          }
        },
        onLoad: function(n) {
          this.imgUrl = n.url
        },
        methods: {}
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background:#000}.page-box{align-items:center;display:-webkit-flex;display:flex;height:100vh;justify-content:center;position:relative;width:100%}.page-box image{height:auto;width:750rpx}
</style>
