<template>
<view class="u-wrap">
    <uni-navbar class="" type="fixed"></uni-navbar>
    <view class="content-tag">
        <view class="tag">{{name}}</view>
    </view>
    <view class="content-box">
        <view class="content-item" :key="idx" v-for="(item, idx) in $root.l0">
            <image class="cover" mode="aspectFill" :src="item.coverImage"></image>
            <view class="content">
                <view class="title singleLineText">{{item.title}}</view>
                <view class="subTitle multilineText2" v-if="item.subtitle">{{item.subtitle}}</view>
                <view class="hot" v-if="item.likeRatio">
                    <view class="l">喜爱值</view>
                    <view class="likeNum">{{item.f0}}</view>
                </view>
            </view>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              contentInfoVOList: [],
              name: "",
              scenicName: ""
            }
          },
          onLoad: function(n) {
            this.scenicName = n.scenicName;
            var e = uni.getStorageSync("spotContentList");
            this.name = e.name, this.contentInfoVOList = e.contentList
          },
          filters: {
            toFixed1: function(t) {
              return parseFloat(Number(t).toFixed(1))
            }
          },
          methods: {
            jumpSpotThirdDetail: function(t) {
              5 == t.type ? this.$navigateTo({
                url: "../spotThirdDetail/spotThirdDetail?scenicName=".concat(this.scenicName, "&spotId=") + t.id
              }) : 10 == t.type ? this.jumpToH5(t.h5Url) : this.$util.cityJump(t.type, t.id)
            },
            jumpToH5: function(n) {
              n ? uni.navigateTo({
                url: "/pages/webpage/webpage?urlEncode=".concat(encodeURIComponent(n))
              }) : this.$uni.showToast("敬请期待！")
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.u-wrap{background-color:#fff;display:-webkit-flex;display:flex;flex-direction:column;min-height:100vh}.content-tag{padding:40rpx 40rpx 0}.content-tag .tag{color:#333;font-size:28rpx;font-weight:700;line-height:30rpx;padding-left:20rpx;position:relative}.content-tag .tag::after{background:linear-gradient(56deg,#fc4a9e,#ff5411);border-radius:5rpx;content:"";height:30rpx;left:0rpx;position:absolute;top:50%;transform:translateY(-50%);width:10rpx}.content-box{padding:0 40rpx}.content-box .content-item{display:-webkit-flex;display:flex;flex-direction:row}.content-box .content-item .cover{border-radius:20rpx;height:240rpx;margin-top:40rpx;width:240rpx}.content-box .content-item .content{margin-left:30rpx;width:380rpx}.content-box .content-item .content .title{color:#333;font-size:32rpx;font-weight:700;height:44rpx;line-height:44rpx;margin-bottom:8rpx;margin-top:46rpx}.content-box .content-item .content .subTitle{color:#959494;font-size:24rpx;font-weight:400;line-height:36rpx}.content-box .content-item .content .hot{background:#ffefd5;border-radius:16rpx 6rpx 6rpx 16rpx;display:inline-block;height:32rpx;margin-top:35rpx;padding:0 14rpx 0 94rpx;position:relative}.content-box .content-item .content .hot>.l{background:#feac2c;border-radius:6rpx 18rpx 6rpx 18rpx;color:#fff;font-size:20rpx;font-weight:700;height:36rpx;left:0;line-height:36rpx;position:absolute;text-align:center;top:-4rpx;width:80rpx}.content-box .content-item .content .hot .likeNum{color:#ff5411;font-size:24rpx;line-height:32rpx}
</style>
