<template>
<view class="empty">
    <image mode="widthFix" :src="''+imgUrl" width="318"></image>
    <text>{{text||''}}</text>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        props: ["imgUrl", "text"],
        data: function() {
          return {}
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.empty{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;margin:30%0}.empty image{display:block;width:318rpx}.empty text{color:#999;font-size:28rpx;margin-top:46rpx}
</style>
