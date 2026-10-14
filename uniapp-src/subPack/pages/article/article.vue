<template>
<view class="bg">
    <uni-navbar type="transparentFixed"></uni-navbar>
    <view class="top">
        <image mode="widthFix" :src="articleData.coverImage"></image>
    </view>
    <view class="bottom">
        <view class="name">{{articleData.title}}</view>
        <view class="auth-box" v-if="articleData.author">
            <image mode="aspectFill" :src="articleData.headImgUrl" v-if="articleData.headImgUrl"></image>
            <image mode="aspectFill" src="https://eshopfile.zhiyousx.com/headerImg.png" v-else></image>
            <view>{{articleData.author}}</view>
        </view>
        <view class="main-box">
            <u-parse class="vue-ref" ref="article" :html="articleData.content" :lazyLoad="true" style="text-align:justify;" :tagStyle="parseStyle" :vueSlots="['default']">
                <text style="display:inline-block;"></text>
            </u-parse>
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
            articleData: {},
            parseStyle: {
              p: "word-break: break-all;"
            }
          }
        },
        onLoad: function(n) {
          this.contentId = n.informationId, this.getArticleDetail(this.contentId), this.updateReadingNum(n.informationId)
        },
        onShareAppMessage: function() {
          var n = "/subPack/pages/article/article?informationId=".concat(this.contentId);
          return {
            title: this.articleData.title,
            path: this.$util.setShareUrl(n),
            imageUrl: this.articleData.coverImage
          }
        },
        methods: {
          getArticleDetail: function(n) {
            var t = this;
            this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/getDetail?contentId=" + n).then((function(n) {
              1 === n.code && (t.articleData = n.data)
            }))
          },
          updateReadingNum: function(n) {
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/CommonReadingNum/updateReadingNum", {
              originType: 1,
              originId: n
            }).then((function(n) {
              console.log("add success")
            }))
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background-color:#fff}.bg{line-height:1}.top{background-color:#aaa;height:auto;position:relative}.top image{height:100%;width:100%}.bottom{background:#fff;border-radius:20rpx 20rpx 0 0;margin-top:-20rpx;padding:57rpx 40rpx;position:relative}.bottom .name{color:#333;font-size:44rpx;font-weight:700;line-height:70rpx;margin-bottom:30rpx}.bottom .auth-box{display:-webkit-flex;display:flex;margin-bottom:55rpx}.bottom .auth-box image{border-radius:50%;height:40rpx;margin-right:20rpx;overflow:hidden;width:40rpx}.bottom .auth-box view{color:#747373;font-size:24rpx;line-height:40rpx}.bottom .main-box{color:#333;font-size:28rpx;line-height:54rpx}
</style>
