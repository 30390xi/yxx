<template>
<view class="page-box">
    <view class="item-box" :key="index" v-for="(item, index) in $root.l1">
        <view class="item-top">
            <image alt class="icon _img" :src="item.iconUrl"></image>{{ item.base.name }}</view>
        <view class="item-body" :key="i" v-for="(it, i) in item.l0">
            <view class="item-body-l">
                <image class="spot-img" mode="aspectFill" :src="it.g1[0]" v-if="it.g0"></image>
                <image class="spot-img" mode="aspectFill" :src="it.picUrl" v-if="it.g2"></image>
                <view class="info-box" :style="'width:'+(it.picUrl?'250rpx':'450rpx')+';'">
                    <view class="name multilineText2">{{ it.base.name }}</view>
                    <view class="dic" v-if="it.distance">
                        <label class="_span" v-if="langType=='中文'">距您</label>{{it.distance+'km'}}</view>
                </view>
            </view>
            <view class="item-body-r">
                <view class="icon-box">
                    <image alt class="icon1 _img" :src="item.m0"></image>
                    <view class="icon1-text">{{ (langType=='中文'?'去这里':'Go') }}</view>
                </view>
                <view class="icon-box">
                    <image alt class="icon1 _img" :src="item.m1"></image>
                    <view class="icon1-text">{{ (langType=='中文'?'讲解':'Interpreter') }}</view>
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
              spotId: 0,
              langType: "中文",
              languageType: 1,
              listData: []
            }
          },
          onLoad: function(n) {
            n.spotId && (this.spotId = n.spotId), n.langType && (this.langType = decodeURIComponent(n.langType)), "中文" == this.langType ? (this.languageType = 1, uni.setNavigationBarTitle({
              title: "景区介绍"
            })) : "English" == this.langType && (this.languageType = 2, uni.setNavigationBarTitle({
              title: "Scenic Spot Introduction"
            })), uni.getLocation()
          },
          onShow: function() {},
          methods: {
            getLocation: function() {
              var t = this;
              uni.getLocation({
                type: "gcj02",
                success: function(n) {
                  t.getSpotList(n.longitude, n.latitude)
                },
                fail: function(n) {
                  t.getSpotList("", "")
                }
              })
            },
            getSpotList: function(t, n) {
              var e = this,
                a = {
                  mapId: this.spotId,
                  languageType: this.languageType,
                  latitude: n,
                  longitude: t
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getVoiceTagList", a).then((function(t) {
                if (1 === t.code) {
                  console.log(t.data);
                  var n = t.data;
                  n.forEach((function(t) {
                    "中文" == e.langType ? (t.base = t.chinese, t.scenicSpotMapTagVOList.forEach((function(t) {
                      "中文" == e.langType ? t.base = t.chinese : "English" == e.langType && (t.base = t.english)
                    }))) : "English" == e.langType && (t.base = t.english, t.scenicSpotMapTagVOList.forEach((function(t) {
                      "中文" == e.langType ? t.base = t.chinese : "English" == e.langType && (t.base = t.english)
                    })))
                  })), e.listData = n
                }
              }))
            },
            jumpLocation: function(n) {
              uni.openLocation({
                latitude: Number(n.latitude),
                longitude: Number(n.longitude),
                name: n.base.name
              })
            },
            toDetail: function(n) {
              uni.navigateTo({
                url: "/subPage/pages/mapSpotDetail/mapSpotDetail?id=" + n.id + "&langType=" + this.langType + "&autoplay=true"
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{align-items:center;background:#fafafa;display:-webkit-flex;display:flex;flex-direction:column;min-height:100vh;padding-top:24rpx;width:100%}.page-box .item-box{margin-bottom:25rpx;width:702rpx}.page-box .item-box .item-top{align-items:center;background:#957f66;border-radius:20rpx 20rpx 0 0;color:#fff;display:-webkit-flex;display:flex;font-size:28rpx;height:64rpx;line-height:40px;width:100%}.page-box .item-box .item-top .icon{height:44rpx;margin-left:28rpx;margin-right:8rpx;width:44rpx}.page-box .item-box .item-body{background:#f2f2f2;height:220rpx;justify-content:space-between;margin-top:2rpx;padding:0 24rpx 0 20rpx;width:100%}.page-box .item-box .item-body-l,.page-box .item-box .item-body{align-items:center;display:-webkit-flex;display:flex}.page-box .item-box .item-body-l .spot-img{background:#d9d9d9;border-radius:16rpx;height:180rpx;margin-right:24rpx;width:180rpx}.page-box .item-box .item-body-l .info-box{display:-webkit-flex;display:flex;flex-direction:column;height:136rpx;justify-content:space-between;width:250rpx}.page-box .item-box .item-body-l .info-box .name{color:#000;font-size:34rpx;font-weight:500;line-height:48rpx}.page-box .item-box .item-body-l .info-box .dic{color:#333;font-size:28rpx;line-height:40rpx}.page-box .item-box .item-body-r .icon-box,.page-box .item-box .item-body-r{align-items:center;display:-webkit-flex;display:flex}.page-box .item-box .item-body-r .icon-box{flex-direction:column;margin-left:40rpx}.page-box .item-box .item-body-r .icon-box .icon1{height:40rpx;margin-bottom:4rpx;width:40rpx}.page-box .item-box .item-body-r .icon-box .icon1-text{color:#000;font-size:20rpx;line-height:28rpx}.page-box .item-box .item-body-r .icon-box:first-of-type{margin-left:0}.page-box .item-box .item-body:first-of-type{margin-top:0}.page-box .item-box .item-body:last-of-type{border-radius:0 0 20rpx 20rpx}
</style>
