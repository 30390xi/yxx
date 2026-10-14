<template>
<view class="u-wrap">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="top-box">
        <video :autoplay="true" class=" vue-ref" :controls="true" ref="video" :src="videoinfo.videoUrl"></video>
        <view class="title">{{videoinfo.title}}</view>
        <view class="author-box">
            <view class="left">{{$root.f0+'次播放'}}</view>
            <view class="right">
                <view class="name">{{videoinfo.author||''}}</view>
            </view>
        </view>
    </view>
    <view class="bottom-box">
        <view class="title">更多视频</view>
        <view class="item-list">
            <view class="item" v-for="(item, __i0__) in obj.list">
                <view class="left">
                    <image alt class="bg _img" :src="item.coverImage"></image>
                    <view class="mask">
                        <view class="icon"></view>
                    </view>
                </view>
                <view class="right">
                    <view class="name">{{item.title}}</view>
                    <view class="num">{{item.playNum+'次播放'}}</view>
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
            obj: {},
            videoinfo: {
              videoUrl: "",
              title: "",
              playNum: "",
              author: ""
            }
          }
        },
        onShareAppMessage: function(t) {
          var e = this.videoinfo.coverImage.toLowerCase(),
            i = "/pages/videoList/videoList?spotId=&videoId=" + this.videoId;
          return {
            title: this.videoinfo.title,
            imageUrl: -1 == e.indexOf(".gif") ? this.videoinfo.coverImage : getApp().globalData.shareimg,
            path: this.$util.setShareUrl(i)
          }
        },
        onLoad: function(t) {
          console.log(t), this._spotId = t.spotId, this.videoId = t.videoId, this.getVideo(this._spotId, this.videoId)
        },
        methods: {
          getVideo: function(t, e) {
            var i = this;
            this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentVideo/list?spotId=" + t + "&videoId=" + e).then((function(t) {
              1 === t.code && (i.obj = t.data, i.videoinfo = t.data.mainVO)
            })), this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentVideo/addVideoTimes/" + e).then((function(t) {}))
          },
          jump: function(t) {
            this.getVideo(this._spotId, t.id)
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.top-box video{height:490rpx;margin-bottom:43rpx;width:100%}.top-box .title{color:#333;font-size:46rpx;font-weight:700;line-height:60rpx;margin-bottom:23rpx;padding:40rpx}.top-box .author-box{border-bottom:8rpx solid #f8f8f8;color:#767676;font-size:24rpx;justify-content:space-between;padding:40rpx 50rpx}.top-box .author-box .right,.top-box .author-box{align-items:center;display:-webkit-flex;display:flex}.top-box .author-box .right ._img{background:#666;border-radius:50%;height:40rpx;margin-right:20rpx;overflow:hidden;width:40rpx}.bottom-box{padding:60rpx 40rpx}.bottom-box>.title{color:#767676;font-size:26rpx;font-weight:700;margin-bottom:40rpx}.bottom-box .item-list .item{display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:40rpx}.bottom-box .item-list .item .left{background:#ebebeb;border-radius:20rpx;height:210rpx;overflow:hidden;position:relative;width:320rpx}.bottom-box .item-list .item .left .bg{height:100%;width:100%}.bottom-box .item-list .item .left .mask{background:rgba(0,0,0,.5);bottom:0;height:60rpx;position:absolute;width:100%}.bottom-box .item-list .item .left .mask .icon{border-color:transparent transparent transparent #fff;border-style:solid;border-width:13rpx 20rpx;left:30rpx;position:absolute;top:17rpx}.bottom-box .item-list .item .right{width:320rpx}.bottom-box .item-list .item .right .name{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#525252;display:-webkit-box;font-size:30rpx;font-weight:700;line-height:50rpx;margin-bottom:25rpx;overflow:hidden}.bottom-box .item-list .item .right .num{color:#767676;font-size:24rpx}
</style>
