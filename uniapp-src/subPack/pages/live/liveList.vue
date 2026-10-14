<template>
<view class="live-box">
    <view class="liveItem" :key="index" v-for="(item, index) in $root.l0">
        <view class="live-video">
            <image class="videoPlay" mode="aspectFill" :src="item.mainImage"></image>
            <view class="video-bg">
                <view class="hot-box">
                    <image class="hot-icon" mode="aspectFill" src="https://eshopfile.zhiyousx.com/2024012312210644492.png"></image>
                    <view class="hot">{{item.f0}}</view>
                </view>
            </view>
        </view>
        <view class="info-box">
            <view class="title">{{ item.title }}<view class="icon-box" v-if="item.state===1">
                    <view class="icon">
                        <live-icon class="ic"></live-icon>直播中</view>
                </view>
            </view>
            <view class="sub-title">{{ item.intro }}</view>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          name: "liveList",
          components: {
            liveIcon: function() {
              n.e("subPack/pages/live/components/liveIcon").then(function() {
                return resolve(n("1197"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              liveUrl: "https://vtscode.zhiyoushanxi.com/flv/hls/stream_364.flv",
              listData: []
            }
          },
          onLoad: function() {
            this.getLiveList()
          },
          onShow: function() {},
          methods: {
            getLiveList: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/liveStream/selectPage?state=1&current=1&size=999").then((function(t) {
                1 === t.code && t.data.records.length > 0 && (e.listData = t.data.records)
              }))
            },
            toDetail: function(t) {
              uni.navigateTo({
                url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent("https://eshop.zhiyousx.com/dsmall-admin-ui/h5/liveDetail.html?liveStreamId=".concat(t.liveStreamId))
              })
            },
            palyError: function(e, t) {
              console.log(e)
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.live-box{min-height:100vh;width:100%}.live-box .liveItem{width:100%}.live-box .liveItem .live-video{height:420rpx;position:relative;width:100%}.live-box .liveItem .live-video .videoPlay{height:100%;object-fit:cover;width:100%}.live-box .liveItem .live-video .video-bg{background:transparent;bottom:0;display:-webkit-flex;display:flex;flex-direction:column;height:420rpx;justify-content:flex-end;left:0;position:absolute;width:750rpx}.live-box .liveItem .live-video .video-bg .hot-box{align-items:center;background:transparent;display:-webkit-flex;display:flex;margin-bottom:30rpx;margin-left:40rpx}.live-box .liveItem .live-video .video-bg .hot-box .hot-icon{height:20rpx;margin-right:8rpx;width:16rpx}.live-box .liveItem .live-video .video-bg .hot-box .hot{background:transparent;color:#fff;font-size:24rpx}.live-box .liveItem .info-box{padding:30rpx 40rpx 70rpx}.live-box .liveItem .info-box .title{color:#333;font-size:36rpx;font-weight:700;line-height:36rpx;margin-bottom:28rpx;width:690rpx;word-break:break-all}.live-box .liveItem .info-box .title .icon-box{display:inline-block;height:36rpx;margin-left:14rpx;position:relative;width:126rpx}.live-box .liveItem .info-box .title .icon-box .icon{align-items:center;background:linear-gradient(52deg,#fc4a9e,#ff5411);border-radius:18rpx;color:#fff;display:-webkit-flex;display:flex;font-size:24rpx;height:36rpx;justify-content:center;padding:0 12rpx;position:absolute;top:4rpx;white-space:nowrap}.live-box .liveItem .info-box .title .icon-box .icon .ic{margin-right:8rpx}.live-box .liveItem .info-box .sub-title{color:#767676;font-size:24rpx;word-break:break-all}
</style>
