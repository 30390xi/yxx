<template>
<view class="menu-box">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="greatWall-btn" @click="toGreatWall($event)"></view>
    <view class="fuRong-btn" @click="toFuRong($event)"></view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          methods: {
            toGreatWall: function() {
              uni.navigateTo({
                url: "/union/pages/aiGreatWall/index"
              })
            },
            toFuRong: function() {
              uni.navigateTo({
                url: "/union/pages/tang/index"
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.menu-box{align-items:center;background:url('https://eshopfile.zhiyousx.com/176965651410142714.png')no-repeat 50%;background-size:100% 100%;display:-webkit-flex;display:flex;flex-direction:column;height:100vh;justify-content:center;width:100vw}.menu-box .greatWall-btn{background:url('https://eshopfile.zhiyousx.com/176966926777040235.png')no-repeat 50%;background-size:100% 100%;height:240rpx;margin-bottom:140rpx;width:690rpx}.menu-box .fuRong-btn{background:url('https://eshopfile.zhiyousx.com/176966935590157080.png')no-repeat 50%;background-size:100% 100%;height:240rpx;width:690rpx}
</style>
