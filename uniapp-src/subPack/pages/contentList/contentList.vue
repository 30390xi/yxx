<template>
<view class="bg">
    <uni-navbar type="transparentFixed"></uni-navbar>
    <view class="top">
        <image mode="aspectFill" :src="content.coverImage"></image>
        <view class="p1">{{content.title}}</view>
        <view class="p2">{{content.subtitle}}</view>
    </view>
    <view class="bottom">
        <view class="item-list">
            <view class="item" :key="index" v-for="(item, index) in contentList">
                <view class="img-box" v-if="item.imageUrl">
                    <image mode="aspectFill" :src="item.imageUrl"></image>
                </view>
                <view class="tip-box">
                    <view class="title" v-if="item.title">{{item.title}}</view>
                    <view class="sub-title" v-if="item.subtitle">{{item.subtitle}}</view>
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
            content: {},
            contentList: {}
          }
        },
        onLoad: function(t) {
          this.id = t.contentId, this.getContentList(this.id)
        },
        onShareAppMessage: function() {
          var t = "/subPack/pages/contentList/contentList?contentId=".concat(this.id);
          return {
            title: this.content.title,
            path: this.$util.setShareUrl(t),
            imageUrl: this.content.coverImage
          }
        },
        methods: {
          getContentList: function(t) {
            var n = this;
            this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/getContentDetail?id=" + t).then((function(t) {
              1 === t.code && (n.content = t.data.content, n.contentList = t.data.contentChildContents, console.log(n.contentList))
            }))
          },
          jump: function(t) {
            this.$util.jumpAll(t)
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background-color:#fff}.bg{line-height:1}.top{background-color:#aaa;height:486rpx;position:relative}.top image{height:100%;width:100%}.top .p1{bottom:175rpx;font-size:60rpx;font-weight:700}.top .p1,.top .p2{color:#fff;left:50%;position:absolute;text-align:center;transform:translateX(-50%)}.top .p2{bottom:105rpx;font-size:26rpx}.bottom{background:#fff;border-radius:20rpx 20rpx 0 0;margin-top:-20rpx;padding:70rpx 40rpx 0;position:relative}.bottom .item-list .item{margin-bottom:70rpx}.bottom .item-list .item .img-box{border-radius:20rpx;height:360rpx;margin-bottom:30rpx;overflow:hidden}.bottom .item-list .item .img-box image{height:100%;width:100%}.bottom .item-list .item .tip-box .title{color:#333;font-size:36rpx;font-weight:700;margin-bottom:30rpx}.bottom .item-list .item .tip-box .sub-title{color:#767676;font-size:26rpx}
</style>
