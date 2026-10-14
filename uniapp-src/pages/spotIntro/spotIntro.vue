<template>
<view class="u-wrap">
    <uni-navbar class="" title="景区详情"></uni-navbar>
    <view class="tab-box">
        <view class="title-box">
            <view class="left">
                <view class="name">简介</view>
                <view class="line"></view>
            </view>
        </view>
    </view>
    <view class="intro-box">
        <u-parse class="" :html="detailObj.introduction" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              detailObj: {},
              parseStyle: {
                p: "word-break: break-all;"
              }
            }
          },
          onLoad: function(n) {
            this.scenicSpot(n.spotId)
          },
          methods: {
            scenicSpot: function(t) {
              var e = this;
              n.showNavigationBarLoading(), this.$uniApi.getRequestNoLoading("GET", "base/app/v1/scenicSpot/" + t).then((function(t) {
                n.hideNavigationBarLoading(), e.detailObj = t.data
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.u-wrap{background-color:#fff;height:calc(100vh);line-height:1;overflow-y:auto}.tab-box{display:-webkit-flex;display:flex;padding:82rpx 40rpx 68rpx}.tab-box .title-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-right:100rpx}.tab-box .title-box .left{position:relative}.tab-box .title-box .left .name{color:#333;font-size:40rpx;font-weight:700;position:relative;z-index:1}.tab-box .title-box .left .line{background:linear-gradient(52deg,#fc4a9e,#ff5411);border-radius:8rpx;bottom:-5rpx;height:16rpx;left:50%;position:absolute;transform:translateX(-50%);width:80%;z-index:0}.tab-box .title-box .right{height:21rpx;width:12rpx}.intro-box{color:#5c5b5b;font-size:24rpx;line-height:35rpx;padding:0 40rpx 40rpx}.xxzn{padding:0 40rpx 115rpx}.xxzn .item-box .item{margin-bottom:40rpx}.xxzn .item-box .item:last-child{margin-bottom:0}.xxzn .item-box .item .title{color:#333;font-size:30rpx;font-weight:700;margin-bottom:10rpx}.xxzn .item-box .item .content{color:#5c5b5b;font-size:24rpx;line-height:35rpx}.xxzn .item-box .item .content .copy{color:#61ace1;font-size:22rpx;padding-left:15rpx}
</style>
