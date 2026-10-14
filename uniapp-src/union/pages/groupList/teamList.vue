<template>
<view class="feature-introduction _div">
    <uni-navbar :background="$root.a0" class="" color="#fff" :leftIconStyle="{color:'#fff'}" :title="$root.m0" type="transparentFixed"></uni-navbar>
    <view class="feature-content _div" :style="'padding-top:'+statusBarHeight+5+'px'+';'">
        <view class="feature-content-box _div">
            <view class="group-list-title-section">
                <view class="group-list-title">
                    <view class="title-text">{{$root.m1}}</view>
                    <image alt class="group-list-icon" mode="heightFix" src="https://eshopfile.zhiyousx.com/176975522479724647.png"></image>
                </view>
            </view>
            <view class="userList">
                <view class="user-item" :key="index" v-for="(item, index) in listTeam">
                    <image class="user-icon" mode="aspectFill" :src="item.logo"></image>
                    <view class="user-name">{{item.name}}</view>
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
              language: "zh",
              listTeam: [{
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }, {
                logo: "https://eshopfile.zhiyousx.com/176976131356087252.png",
                name: "组团名称"
              }]
            }
          },
          onLoad: function() {
            this.language = uni.getStorageSync("language") || "zh", this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
          },
          methods: {}
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.feature-introduction{background:linear-gradient(135deg,rgba(128,154,249,.5),rgba(174,227,236,.5));box-sizing:border-box;height:100vh;padding:calc(25px + 44rpx) 20rpx 20rpx;width:100%}.feature-content{height:calc(100vh - 148rpx);width:100%}.feature-content-box{display:-webkit-flex;display:flex;flex-direction:column;height:100%;width:100%}.group-list-title-section{margin-top:20rpx}.group-list-title-section .group-list-title{position:relative}.group-list-title-section .group-list-title .title-text{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:500}.group-list-title-section .group-list-title .group-list-icon{bottom:-10rpx;height:16rpx;left:0;position:absolute}.userList{flex:1;overflow:auto;width:100%}.userList .user-item{align-items:center;background:hsla(0,0%,100%,.6);border-radius:20rpx 20rpx 20rpx 20rpx;box-shadow:0rpx 8rpx 10rpx 0rpx rgba(0,0,0,.05);display:-webkit-flex;display:flex;gap:30rpx;margin-top:20rpx;padding:20rpx 40rpx}.userList .user-item .user-icon{border-radius:50%;height:80rpx;width:80rpx}.userList .user-item .user-name{color:#333;font-size:28rpx;font-weight:400}
</style>
