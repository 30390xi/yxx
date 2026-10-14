<template>
<view class="feature-introduction">
    <uni-navbar :background="$root.a0" class="" color="#fff" :leftIconStyle="{color:'#fff'}" :title="$root.m0" type="transparentFixed"></uni-navbar>
    <view class="feature-content" :style="'padding-top:'+statusBarHeight+5+'px'+';'">
        <view class="feature-content-box">
            <view class="feature-item" v-for="(item, index) in $root.l0">
                <view class="feature-header">
                    <view class="feature-title">
                        <image class="title-icon" mode="aspectFill" :src="item.logo"></image>
                        <label class="title-text _span">{{item.title}}</label>
                    </view>
                    <view class="collapse-control">
                        <label class="control-text _span">{{item.isCollapsed?item.m1:item.m2}}</label>
                        <image class="control-icon" mode="widthFix" :src="item.isCollapsed?'https://eshopfile.zhiyousx.com/176960428738785505.png':'https://eshopfile.zhiyousx.com/176960429741503355.png'"></image>
                    </view>
                </view>
                <view class="feature-description" :hidden="!!item.isCollapsed">
                    <rich-text class="" id="richtext" :nodes="item.m3"></rich-text>
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
              list: [],
              statusBarHeight: "",
              language: "zh"
            }
          },
          onLoad: function() {
            this.language = uni.getStorageSync("language") || "zh", this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight, this.getList()
          },
          methods: {
            getList: function() {
              var t = this;
              this.$uniApi.getRequestYesLoading("GET", "ai/app/aiFeatureIntro/list?language=".concat(this.language), this.$t("featureIntroduction.loading.loading")).then((function(e) {
                1 === e.code ? t.list = (e.data || []).map((function(t) {
                  return i(i({}, t), {}, {
                    isCollapsed: !1
                  })
                })) : t.$uni.showToast(e.msg || t.$t("featureIntroduction.error.loadFailed"))
              })).catch((function() {
                t.$uni.showToast(t.$t("featureIntroduction.error.loadFailed"))
              }))
            },
            toggleCollapse: function(t) {
              this.list[t].isCollapsed = !this.list[t].isCollapsed
            },
            handleRichTextImages: function(t) {
              return t.replace(/<img[^>]*>/gi, (function(t) {
                return t.replace(/<img/, '<img style="width:100%;height:auto;max-width:100%;border-radius:16rpx;"')
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.feature-introduction{background:linear-gradient(135deg,rgba(128,154,249,.5),rgba(174,227,236,.5));box-sizing:border-box;height:100vh;padding:calc(25px + 44rpx) 20rpx 20rpx;width:100%}.feature-content{height:calc(100vh - 148rpx);width:100%}.feature-content-box{display:-webkit-flex;display:flex;flex-direction:column;gap:24rpx;height:100%;overflow:auto;width:100%}.feature-item{background:hsla(0,0%,100%,.9);border-radius:20rpx 20rpx 20rpx 20rpx;box-sizing:border-box;padding:40rpx}.feature-header{cursor:pointer;justify-content:space-between;width:100%}.feature-header,.feature-title{align-items:center;display:-webkit-flex;display:flex}.feature-title{color:#333;font-size:32rpx;font-weight:600;gap:12rpx}.feature-title .title-icon{height:40rpx;width:40rpx}.collapse-control{align-items:center;display:-webkit-flex;display:flex;gap:8rpx}.collapse-control .control-text{color:rgba(0,0,0,.6);font-family:Source Han Sans SC;font-size:26rpx;font-weight:400}.collapse-control .control-icon{height:24rpx;width:24rpx}.feature-description{border-top:2rpx solid rgba(0,0,0,.1);color:#666;font-size:28rpx;line-height:1.8;margin-top:20rpx;padding-top:20rpx}.feature-description ._img{border-radius:12rpx;margin:16rpx 0;max-width:100%}.feature-description ._p{margin:8rpx 0;text-align:justify}.feature-description .title-text{color:#000;font-family:Source Han Sans SC;font-size:30rpx;font-weight:400}
</style>
