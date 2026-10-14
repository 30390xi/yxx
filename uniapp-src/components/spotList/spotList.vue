<template>
<view class="container">
    <view class="spot-item" v-for="(spot, index) in $root.l0">
        <view class="imagebox">
            <view class="badge gold" v-if="index==0&&type==8">1</view>
            <block v-else>
                <view class="badge silver" v-if="index==1&&type==8">2</view>
                <block v-else>
                    <view class="badge bronze" v-if="index==2&&type==8">3</view>
                    <block v-else>
                        <view :class="['badge',index+1>99?'small':'']" v-if="index>2&&type==8">{{index+1}}</view>
                    </block>
                </block>
            </block>
            <view class="mainimg">
                <image mode="aspectFill" :src="spot.originUrl"></image>
            </view>
            <view class="swiper">
                <u-swiper bgColor="rgba(0,0,0,0)" borderRadius="20" height="236" indicatorActiveColor="rgba(255,255,255,.5)" indicatorColor="#fff" indicatorPos="bottomCenter" interval="5000" :list="spot.m0" name="url"></u-swiper>
            </view>
        </view>
        <view class="txt">
            <view class="title multilineText2">
                <text v-if="spot.isBookable">订</text>{{ spot.originName }}</view>
            <view class="likeRate" v-if="(type==8||type==7)&&rankingType==2&&spot.favoriteValue">
                <text class="icon">喜爱值</text>
                <text class="num">{{spot.favoriteValue}}</text>
            </view>
            <view class="subtitle singleLineText">{{spot.originSubtitleName||''}}</view>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        props: ["type", "datas", "rankingType"],
        mounted: function() {},
        data: function() {
          return {}
        },
        methods: {
          setswiperList: function(t) {
            var n = [];
            return t.forEach((function(t, e) {
              e < 4 && n.push({
                url: t
              })
            })), n
          },
          routerTo: function(t) {
            [1, 3, 4, 5].includes(Number(t.originType)) && this.$navigateTo({
              url: "../spotDetail/spotDetail?spotId=" + t.originId
            }), 2 == t.originType && this.$navigateTo({
              url: "../spotThirdDetail/spotThirdDetail?spotId=" + t.originId
            })
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.container{padding:50rpx 40rpx 0}.container .spot-item{padding-bottom:50rpx;position:relative}.container .spot-item .imagebox{display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:20rpx}.container .spot-item .imagebox .badge{background:url('https://eshopfile.zhiyousx.com/2021070215313612940.png')top no-repeat;background-size:100%;color:#fff;font-size:24rpx;font-weight:700;height:56rpx;left:18rpx;line-height:40rpx;position:absolute;text-align:center;text-indent:8rpx;top:-10rpx;width:52rpx;z-index:1}.container .spot-item .imagebox .badge.gold{background:url('https://eshopfile.zhiyousx.com/2021070215055222276.png')top no-repeat;background-size:100%}.container .spot-item .imagebox .badge.silver{background:url('https://eshopfile.zhiyousx.com/2021070215261647559.png')top no-repeat;background-size:100%}.container .spot-item .imagebox .badge.bronze{background:url('https://eshopfile.zhiyousx.com/2021070215274946950.png')top no-repeat;background-size:100%}.container .spot-item .imagebox .badge.small{font-size:20rpx;font-weight:400;height:60rpx;text-indent:6rpx;width:56rpx}.container .spot-item .imagebox .mainimg{height:236rpx;width:236rpx}.container .spot-item .imagebox .mainimg image{border-radius:20rpx;height:100%;width:100%}.container .spot-item .imagebox .swiper{border-radius:20rpx;height:236rpx;width:420rpx}.container .spot-item .txt .title{color:#333;font-size:32rpx;font-weight:700;width:630rpx}.container .spot-item .txt .title text{background:linear-gradient(56deg,#fc4a9e,#ff5411);border-radius:10rpx;color:#fff;display:inline-block;font-size:20rpx;font-weight:700;height:32rpx;line-height:30rpx;margin-right:8rpx;margin-top:6rpx;text-align:center;vertical-align:7rpx;width:32rpx}.container .spot-item .txt .likeRate{margin-top:20rpx;position:relative}.container .spot-item .txt .likeRate text{display:inline-block}.container .spot-item .txt .likeRate .icon{background:#feac2c;border-radius:6rpx 18rpx 6rpx 18rpx;bottom:0;color:#fff;font-size:20rpx;height:36rpx;left:0;line-height:36rpx;position:absolute;text-align:center;width:80rpx}.container .spot-item .txt .likeRate .num{background:#ffefd5;border-radius:16rpx 6rpx 6rpx 16rpx;color:#ff5411;font-size:24rpx;font-weight:400;height:32rpx;padding:0 14rpx 0 92rpx}.container .spot-item .txt .subtitle{color:#777474;font-size:24rpx;margin-top:20rpx}
</style>
