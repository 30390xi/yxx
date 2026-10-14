<template>
<view class="live-box">
    <view class="top-box" id="liveTop">
        <view class="play-box">
            <video :autoplay="true" class="videoPlay" :controls="false" objectFit="fill" onError="palyError" :poster="listData.mainImage" :src="listData.liveUrl"></video>
            <cover-view class="hot-box">
                <cover-image mode class="hot-icon" src="https://eshopfile.zhiyousx.com/2024012312210644492.png"></cover-image>
                <cover-view class="hot">{{$root.f0}}</cover-view>
            </cover-view>
        </view>
        <view class="info-box">
            <view class="title">{{ listData.title }}<view class="icon-box">
                    <view class="icon">
                        <live-icon class="ic"></live-icon>直播中</view>
                </view>
            </view>
            <view class="sub-title">{{ listData.intro }}</view>
        </view>
        <view class="comment-box">
            <view class="title">实时热评</view>
        </view>
    </view>
    <view class="list" :style="'height:'+'calc(100vh - '+topHeight+'px)'+';'">
        <view class="item" v-for="(it, i) in listData.commentList">
            <view class="user-box">
                <image class="head-logo" mode="aspectFill" :src="it.userImage"></image>
            </view>
            <view class="msg">
                <label class="_span" style="font-weight:bold;color:#222222;">{{it.userName}}</label>{{'：'+it.comment}}</view>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          name: "liveDetail",
          components: {
            liveIcon: function() {
              n.e("subPack/pages/live/components/liveIcon").then(function() {
                return resolve(n("1197"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              topHeight: 0,
              listData: "",
              videoData: "",
              liveStreamId: 1,
              timer: null
            }
          },
          onLoad: function(t) {
            this.liveStreamId = t.id, this.getLiveDetail()
          },
          onShow: function() {},
          methods: {
            getDomInfo: function() {
              this.timer && clearTimeout(this.timer);
              var e = this;
              this.$nextTick((function() {
                new Promise((function(e) {
                  var n = uni.createSelectorQuery();
                  n.select("#liveTop").boundingClientRect(), n.exec((function(t) {
                    e(t)
                  }))
                })).then((function(t) {
                  t[0].height || (e.timer = setTimeout((function() {
                    e.getDomInfo()
                  }), 100)), e.topHeight = t[0].height
                }))
              }), 550)
            },
            getLiveDetail: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/liveStream/selectById?liveStreamId=" + this.liveStreamId).then((function(e) {
                1 === e.code && (t.listData = e.data, t.videoData = {
                  mainImage: t.listData.mainImage,
                  liveUrl: t.listData.streamUrl
                }, t.$nextTick((function() {
                  t.getDomInfo()
                })))
              }))
            },
            palyError: function(t) {
              console.log("onPlayError, e=" + JSON.stringify(t))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.live-box .play-box{height:420rpx;position:relative;width:100%}.live-box .play-box .videoPlay{height:100%;width:100%}.live-box .play-box .hot-box{align-items:center;background-color:initial;bottom:30rpx;display:-webkit-flex;display:flex;left:40rpx;position:absolute}.live-box .play-box .hot-box .hot-icon{height:20rpx;margin-right:8rpx;width:16rpx}.live-box .play-box .hot-box .hot{background-color:initial;color:#fff;font-size:24rpx}.live-box .info-box{padding:30rpx 40rpx 70rpx}.live-box .info-box .title{color:#333;font-size:36rpx;font-weight:700;line-height:36rpx;margin-bottom:28rpx;width:690rpx;word-break:break-all}.live-box .info-box .title .icon-box{display:inline-block;height:36rpx;margin-left:14rpx;position:relative;width:126rpx}.live-box .info-box .title .icon-box .icon{align-items:center;background:linear-gradient(52deg,#fc4a9e,#ff5411);border-radius:18rpx;color:#fff;display:-webkit-flex;display:flex;font-size:24rpx;height:36rpx;justify-content:center;padding:0 12rpx;position:absolute;top:4rpx;white-space:nowrap;width:120rpx}.live-box .info-box .title .icon-box .icon .ic{margin-right:8rpx}.live-box .info-box .sub-title{color:#767676;font-size:24rpx;word-break:break-all}.live-box .comment-box{padding:0 40rpx 40rpx}.live-box .comment-box .title{color:#333;font-size:30rpx;font-weight:700}.live-box .list{overflow-y:auto;padding:0 40rpx}.live-box .list .item{align-items:flex-start;color:#707070;display:-webkit-flex;display:flex;font-size:24rpx;margin-bottom:30rpx;width:100%}.live-box .list .item .user-box{align-items:center;display:-webkit-flex;display:flex;height:50rpx}.live-box .list .item .user-box .head-logo{border-radius:50%;height:50rpx;margin-right:16rpx;width:50rpx}.live-box .list .item .msg{line-height:34rpx;padding-top:10rpx;text-align:justify;width:580rpx;word-break:break-all}
</style>
