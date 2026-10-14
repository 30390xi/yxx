<template>
<view class="u-wrap">
    <uni-navbar class="navBar" id="navbar" :shadow="false" type="fixed"></uni-navbar>
    <view class="tab-box" :style="'top:'+navbarH+'px'+';'">
        <u-tabs activeColor="#000000" barHeight="10" :barStyle="barStyle" barWidth="80" bgColor="rgba(255, 255, 255, 1)" class="" :current="current" fontSize="30" height="100" inactiveColor="#7C7C7C" :isScroll="false" :list="showVideo?list:list2" @change="change()"></u-tabs>
    </view>
    <view class="image-box">
        <view class="item-box" v-if="item.resourcesType==1||item.resourcesType==2&&showVideo" :key="index" v-for="(item, index) in dataList">
            <image class="cover" mode="aspectFill" :src="item.resourcesType==1?item.resourcesUrl:item.coverImage"></image>
            <view class="mask" v-if="item.resourcesType==2">
                <image mode class="icon" src="https://eshopfile.zhiyousx.com/spotDetailNew/bofang2.png"></image>
            </view>
        </view>
    </view>
    <view class="empty" v-if="$root.g0<=0">
        <empty-state class="" imgUrl="/static/captured/51d17a011d27445c.png" text="暂无"></empty-state>
    </view>
    <view class="mask" v-if="showScreen">
        <view class="maskTop" :style="'top:'+statusBarHeight+8+'px'+';'">
            <u-icon class="" color="#ffffff" name="arrow-left" size="42" @click="closeMask()"></u-icon>
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
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            EmptyState: function() {
              n.e("components/empty/empty").then(function() {
                return resolve(n("a427"))
              }.bind(null, n)).catch(n.oe)
            }
          },
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
              navbarH: 60,
              imageList: []
            }
          },
          onLoad: function(t) {
            var n = this;
            this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight, console.log(t), this.id = t.id, this.type = t.type, this.getPicVideoAbout(), this.$nextTick((function() {
              new Promise((function(t) {
                var n = uni.createSelectorQuery();
                n.select("#navbar").boundingClientRect(), n.exec((function(e) {
                  t(e)
                }))
              })).then((function(e) {
                n.navbarH = e[0].height
              }))
            }))
          },
          methods: {
            change: function(e) {
              this.current = e, this.resourcesType = e + 1, this.getPicVideoAbout()
            },
            getPicVideoAbout: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpot/getPicVideoAbout", {
                type: this.type,
                resourcesType: this.current + 1,
                id: this.id
              }).then((function(t) {
                1 === t.code && (e.dataList = t.data, e.swiperLenght = e.dataList.length, 1 == e.resourcesType && (e.imageList = e.dataList.map((function(e) {
                  return e.resourcesUrl
                }))))
              }))
            },
            swiperChange: function(e) {
              this.swiperCurrent = e.detail.current + 1
            },
            openMedia: function(e) {
              1 == this.resourcesType ? uni.previewImage({
                current: this.imageList[e],
                urls: this.imageList
              }) : (this.showScreen = !0, this.swiperCurrent = e + 1, this.currentSwiper = e)
            },
            closeMask: function() {
              this.showScreen = !1
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.u-wrap{background-color:#fff;display:-webkit-flex;display:flex;flex-direction:column;min-height:100vh}.navBar{z-index:20}.tab-box{background:#fff;left:0;margin:0rpx 0rpx 40rpx;position:fixed;width:100%;z-index:20}.mask{background:#000;height:100%;justify-content:center;top:0;width:100%;z-index:30}.mask .maskTop,.mask{align-items:center;display:-webkit-flex;display:flex;position:fixed}.mask .maskTop{flex-direction:row;left:41rpx;z-index:99}.mask .maskTop .num{color:#fff;font-family:Source Han Sans SC;font-size:32rpx;font-weight:400;margin-left:257rpx;opacity:.7}.mask .swiper{height:81vh;width:100%;z-index:40}.mask .swiper .swiper-item{display:-webkit-flex;display:flex;flex-direction:column;height:100%;justify-content:center;width:100%}.mask .swiper .swiper-item image{width:100%}.mask .swiper .swiper-item video{height:100%;width:100%}.image-box{display:-webkit-flex;display:flex;flex-wrap:wrap;padding:140rpx 40rpx 90rpx;z-index:19}.image-box .item-box{border-radius:20rpx;display:-webkit-flex;display:flex;flex-direction:column;height:326rpx;margin-bottom:18rpx;margin-left:18rpx;position:relative;width:326rpx}.image-box .item-box .cover{border-radius:20rpx;flex:1;height:100%;width:100%}.image-box .item-box .mask{background-color:rgba(0,0,0,.3);border-radius:20rpx;height:100%;position:absolute;top:0;width:100%}.image-box .item-box .mask .icon{height:80rpx;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:80rpx}.image-box .item-box:nth-child(odd){margin-left:0}
</style>
