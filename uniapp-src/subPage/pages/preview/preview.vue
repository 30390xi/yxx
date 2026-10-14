<template>
<view class="u-wrap" :style="'padding-top:'+statusBarHeight+12+'px'+';'">
    <view class="maskTop">
        <view class="num">{{ swiperCurrent+' / '+swiperLenght }}</view>
    </view>
    <swiper class="swiper" :current="currentSwiper" :duration="duration" @change="swiperChange($event)">
        <swiper-item class="" :key="index" v-for="(item, index) in dataList">
            <view class="swiper-item" v-if="item.resourcesType==1">
                <image class="" mode="widthFix" :src="item.resourcesUrl"></image>
            </view>
            <view class="swiper-item" v-if="swiperCurrent==index+1">
                <video :autoplay="true" class="swiper-item vue-ref-in-for" :controls="true" ref="video" :src="item.resourcesUrl"></video>
            </view>
        </swiper-item>
    </swiper>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              page: 1,
              loadMore: "loading",
              list: [{
                name: "图片"
              }, {
                name: "视频"
              }, {
                name: "相关"
              }],
              list2: [{
                name: "图片"
              }, {
                name: "相关"
              }],
              current: 0,
              dataList: [],
              activeStyle: {
                "font-weight": "bold",
                "font-size": "32rpx"
              },
              barStyle: {
                background: "linear-gradient(56deg, #FC4A9E 0%, #FF5411 100%)",
                "border-radius": "8px",
                position: "absolute",
                bottom: "18rpx"
              },
              resourcesType: 1,
              showScreen: !1,
              background: ["color1", "color2", "color3"],
              indicatorDots: !0,
              autoplay: !0,
              showVideo: getApp().globalData.showvideo,
              interval: 2e3,
              duration: 500,
              swiperCurrent: 1,
              swiperLenght: 0,
              currentSwiper: 0,
              statusBarHeight: 0,
              navbarH: 60
            }
          },
          onLoad: function(t) {
            this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight, this.dataList = uni.getStorageSync("mediaList"), this.swiperLenght = this.dataList.length, this.index = Number(t.index), this.swiperCurrent = this.index + 1, this.currentSwiper = this.index
          },
          methods: {
            swiperChange: function(e) {
              this.swiperCurrent = e.detail.current + 1
            },
            openMedia: function(e) {
              this.showScreen = !0
            },
            closeMask: function() {
              this.showScreen = !1
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.u-wrap{background:#000;height:100vh}.maskTop{align-items:center;display:-webkit-flex;display:flex;flex-direction:row;justify-content:center}.maskTop .num{color:#fff;font-family:Source Han Sans SC;font-size:32rpx;font-weight:400;opacity:.7;position:relative;z-index:50}.swiper{height:81vh;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:100%;z-index:40}.swiper .swiper-item{display:-webkit-flex;display:flex;flex-direction:column;height:100%;justify-content:center;width:100%}.swiper .swiper-item image{width:100%}.swiper .swiper-item video{height:100%;width:100%}.image-box{display:-webkit-flex;display:flex;flex-wrap:wrap;padding:140rpx 40rpx 90rpx;z-index:19}.image-box .item-box{border-radius:20rpx;display:-webkit-flex;display:flex;flex-direction:column;height:326rpx;margin-bottom:18rpx;margin-left:18rpx;position:relative;width:326rpx}.image-box .item-box .cover{border-radius:20rpx;flex:1;height:100%;width:100%}.image-box .item-box .mask{background-color:rgba(0,0,0,.3);border-radius:20rpx;height:100%;position:absolute;top:0;width:100%}.image-box .item-box .mask .icon{height:80rpx;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:80rpx}.image-box .item-box:nth-child(odd){margin-left:0}
</style>
