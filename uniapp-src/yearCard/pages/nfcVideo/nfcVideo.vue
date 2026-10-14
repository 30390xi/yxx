<template>
<view class="">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="page-box">
        <video :autoplay="true" class="video" :customCache="false" :enablePlayGesture="true" id="videoPlayer" loop="true" :src="vlogUrl" v-if="vlogUrl" @play="videoPlay($event)" @pause="videopause($event)"></video>
        <image class="btn play" src="https://eshopfile.zhiyousx.com/2021083111362225433.png" v-if="!isPlay" @click="playPause($event)"></image>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              vlogUrl: "",
              isPlay: !0
            }
          },
          onLoad: function(n) {
            this.vlogUrl = n.url
          },
          onShareAppMessage: function() {
            return {
              title: "",
              imageUrl: "",
              path: "/yearCard/pages/nfcVideo/nfcVideo"
            }
          },
          methods: {
            playPause: function() {
              var e = n.createVideoContext("videoPlayer");
              this.isPlay ? e.pause() : e.play()
            },
            videoPlay: function(n) {
              this.isPlay = !0
            },
            videopause: function(n) {
              this.isPlay = !1
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background:#000}.page-box .video,.page-box{height:100vh;position:relative;width:100%}.page-box .btn{background:none;height:120rpx;left:50%;margin-left:-60rpx;margin-top:-60rpx;position:absolute;top:50%;width:120rpx;z-index:2}.page-box .btn.pause{animation:benone .2s linear 2s forwards}
</style>
