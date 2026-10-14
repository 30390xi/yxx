<template>
<view class="">
    <view class="page-box">
        <video class="video" :controls="false" :customCache="false" :enablePlayGesture="true" id="videoPlayer" loop="true" :showCenterPlayBtn="false" src="https://eshopfile.zhiyousx.com/teamVideo2.mp4" @play="videoPlay($event)" @pause="videopause($event)" @timeupdate="videoUpdate($event)">
            <view class="codeBox" v-if="currentTime>2||!isPlay">
                <image class="icon icon2" src="https://eshopfile.zhiyousx.com/2025111214435586852.png" @click="iconClick(2)"></image>
                <image class="icon icon1" src="https://eshopfile.zhiyousx.com/2025111214435980756.png" @click="iconClick(1)"></image>
            </view>
        </video>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              vlogUrl: "https://eshopfile.zhiyousx.com/teamVideo2.mp4",
              isPlay: !0,
              fullScreen: !1,
              currentTime: 0,
              teamId: 0
            }
          },
          onLoad: function(t) {
            this.teamId = t.teamId || 1, this.vlogUrl = t.url || "https://eshopfile.zhiyousx.com/qtTeam/teamVideo.mp4", e.createVideoContext("videoPlayer").play()
          },
          onShow: function() {},
          onShareAppMessage: function() {
            return {
              title: "「青途文旅」四川团建之旅",
              imageUrl: "https://eshopfile.zhiyousx.com/2025111815285164535.jpg",
              path: "/yearCard/pages/teamNFC/index?teamId=".concat(this.teamId)
            }
          },
          onShareTimeline: function() {
            return {
              title: "「青途文旅」四川团建之旅",
              imageUrl: "https://eshopfile.zhiyousx.com/2025111815285164535.jpg",
              path: "/yearCard/pages/teamNFC/index?teamId=".concat(this.teamId)
            }
          },
          methods: {
            iconClick: function(t) {
              var a = 1 == t ? "/yearCard/pages/teamNFC/album?teamId=".concat(this.teamId) : "/yearCard/pages/teamNFC/line";
              uni.navigateTo({
                url: a
              })
            },
            videoPlay: function(e) {
              this.isPlay = !0
            },
            videopause: function(e) {
              this.isPlay = !1
            },
            videoUpdate: function(e) {
              this.currentTime = e.detail.currentTime
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background:#000}.page-box .video,.page-box{height:100vh;position:relative;width:100%}.page-box .btn{background:none;height:120rpx;left:50%;margin-left:-60rpx;margin-top:-60rpx;position:absolute;top:50%;width:120rpx;z-index:2}.page-box .btn.pause{animation:benone .2s linear 2s forwards}.codeBox{bottom:2rpx;left:50rpx;position:absolute;transform:scale(.8);z-index:100}.codeBox .icon{height:168rpx;margin-left:160rpx;transform:rotate(90deg)}.codeBox .icon1{width:124rpx}.codeBox .icon2{width:128rpx}
</style>
