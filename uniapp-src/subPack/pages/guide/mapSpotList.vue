<template>
<view class="page-box">
    <view class="" v-if="listData&&listData[0]">
        <view class="item-box" :key="index" v-for="(item, index) in $root.l1">
            <view class="item-top" :style="'background:'+mapinfo.audioTitleBg+';'">
                <image alt class="icon _img" :hidden="!item.voiceIcon" :src="item.voiceIcon"></image>{{ item.base.name }}</view>
            <view class="item-body" :style="'background:'+mapinfo.audioBarBg+';'" :key="i" v-for="(it, i) in item.l0">
                <view class="item-body-l">
                    <image class="spot-img" mode="aspectFill" :src="it.g1[0]" v-if="it.g0"></image>
                    <image class="spot-img" mode="aspectFill" :src="it.picUrl" v-if="it.g2"></image>
                    <view class="info-box" :style="'width:'+(it.picUrl?'250rpx':'450rpx')+';'">
                        <view class="name singleLineText">{{ it.base.name }}</view>
                        <view class="dic" v-if="it.distance">
                            <label class="_span" v-if="langType=='zn'">距您</label>{{it.distance+'km'}}</view>
                    </view>
                </view>
                <view class="item-body-r">
                    <view class="icon-box">
                        <image alt class="icon1 _img" src="https://eshopfile.zhiyousx.com/2023031611150313119.png"></image>
                        <view class="icon1-text">{{ (langType=='zn'?'去这里':'Go') }}</view>
                    </view>
                    <view class="icon-box">
                        <image alt class="icon1 _img" src="https://eshopfile.zhiyousx.com/2023031520024239890.png"></image>
                        <view class="icon1-text">{{ (langType=='zn'?'讲解':'Interpreter') }}</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <empty class="" text="暂无内容" v-else></empty>
</view>

</template>

<script>
import Empty from "@/components/empty/empty.vue";

// Reconstructed Vue Component
const t = uni;
export default {
  components: {
    Empty
  },
            data: function() {
              return {
                mapId: 0,
                langType: "zn",
                languageType: 1,
                listData: [],
                mapinfo: {}
              }
            },
            onLoad: function(a) {
              a.mapId && (this.mapId = a.mapId), this.getMapInfo(), a.langType && (this.langType = a.langType), "zn" == this.langType ? (this.languageType = 1, uni.setNavigationBarTitle({
                title: "语音讲解"
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
                  success: function(a) {
                    t.getSpotBase(a.longitude, a.latitude)
                  },
                  fail: function(a) {
                    t.getSpotBase("", "")
                  }
                })
              },
              getMapInfo: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getScenicSpotMapBase", {
                  mapId: this.mapId
                }).then((function(a) {
                  1 === a.code && (t.mapinfo = a.data || {})
                }))
              },
              getSpotBase: function(t, a) {
                var e = this,
                  n = {
                    mapId: this.mapId,
                    languageType: this.languageType,
                    latitude: a,
                    longitude: t
                  };
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getScenicPointByMapId", n).then((function(n) {
                  if (1 === n.code) {
                    var i = n.data,
                      o = [];
                    if (i.chinese.voiceUrl) {
                      var c = {
                          name: i.chinese.subtitle
                        },
                        u = {
                          voiceIcon: i.iconUrl,
                          base: i.chinese,
                          scenicSpotMapTagVOList: [{
                            base: c,
                            picUrl: i.picUrl,
                            distance: i.distance,
                            latitude: i.latitude,
                            longitude: i.longitude,
                            id: i.id
                          }]
                        };
                      o.push(u)
                    }
                    e.getSpotList(t, a, o)
                  } else e.getSpotList(t, a, [])
                }))
              },
              getSpotList: function(t, a, e) {
                var i = this,
                  c = {
                    mapId: this.mapId,
                    languageType: this.languageType,
                    latitude: a,
                    longitude: t
                  };
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getVoiceTagList", c).then((function(t) {
                  if (1 === t.code) {
                    var a = t.data;
                    a.forEach((function(t) {
                      "zn" == i.langType ? (t.base = t.chinese, t.scenicSpotMapTagVOList.forEach((function(t) {
                        t.base = t.chinese, t.showType = 111
                      }))) : "English" == i.langType && (t.base = t.english, t.scenicSpotMapTagVOList.forEach((function(t) {
                        t.base = t.english, t.showType = 111
                      })))
                    })), i.listData = e.concat.apply(e, (0, o.default)(a)), console.log(i.listData)
                  } else uni.showToast({
                    title: c.msg,
                    icon: "none"
                  })
                }))
              },
              jumpLocation: function(a) {
                uni.openLocation({
                  latitude: Number(a.latitude),
                  longitude: Number(a.longitude),
                  name: a.base.name
                })
              },
              toDetail: function(a) {
                a.type && 2 == a.type ? uni.navigateTo({
                  url: "/subPack/pages/guide/mapSpotDetail?id=" + a.id + "&langType=" + this.langType + "&autoplay=true&mid=" + this.mapId
                }) : uni.navigateTo({
                  url: "/subPack/pages/guide/mapSpotDetail?id=" + a.id + "&langType=" + this.langType + "&autoplay=true&mid=" + this.mapId + "&pid=no"
                })
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{align-items:center;background:#fff;display:-webkit-flex;display:flex;flex-direction:column;min-height:100vh;padding-bottom:30rpx;padding-top:50rpx;width:100%}.page-box .empty{color:#999;font-size:28rpx;height:80vh;line-height:80vh;text-align:center}.page-box .item-box{margin-bottom:20rpx;width:690rpx}.page-box .item-box .item-top{align-items:center;border-radius:30rpx 30rpx 0 0;color:#fff;display:-webkit-flex;display:flex;font-size:28rpx;font-weight:500;height:64rpx;padding-left:30rpx;width:100%}.page-box .item-box .item-top .icon{height:40rpx;margin-right:10rpx;width:40rpx}.page-box .item-box .item-body{height:220rpx;justify-content:space-between;padding:0 30rpx;width:100%}.page-box .item-box .item-body-l,.page-box .item-box .item-body{align-items:center;display:-webkit-flex;display:flex}.page-box .item-box .item-body-l .spot-img{background:#d9d9d9;border-radius:16rpx;height:140rpx;margin-right:24rpx;width:140rpx}.page-box .item-box .item-body-l .info-box{display:-webkit-flex;display:flex;flex-direction:column;height:136rpx;justify-content:space-between;padding:20rpx 0;width:250rpx}.page-box .item-box .item-body-l .info-box .name{color:#000;font-size:34rpx;font-weight:500;line-height:48rpx}.page-box .item-box .item-body-l .info-box .dic{color:#777;font-size:28rpx;line-height:40rpx}.page-box .item-box .item-body-r .icon-box,.page-box .item-box .item-body-r{align-items:center;display:-webkit-flex;display:flex}.page-box .item-box .item-body-r .icon-box{flex-direction:column;margin-left:30rpx}.page-box .item-box .item-body-r .icon-box .icon1{height:50rpx;width:50rpx}.page-box .item-box .item-body-r .icon-box .icon1-text{color:#555;font-size:24rpx;line-height:28rpx;text-shadow:0 8rpx 4rpx rgba(0,0,0,.1)}.page-box .item-box .item-body-r .icon-box:first-of-type{margin-left:0}.page-box .item-box .item-body:first-of-type{margin-top:0}.page-box .item-box .item-body:last-of-type{border-radius:0 0 20rpx 20rpx}
</style>
