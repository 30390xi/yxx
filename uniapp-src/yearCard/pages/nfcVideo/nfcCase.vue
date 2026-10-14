<template>
<view class="">
    <view class="page-box">
        <video :autoplay="true" class="video" :controls="false" :customCache="false" :enablePlayGesture="true" id="videoPlayer" loop="true" :showCenterPlayBtn="false" :src="playerData.videoUrl" v-if="playerData.videoUrl" @timeupdate="videoUpdate($event)" @play="videoPlay($event)" @pause="videopause($event)">
            <view class="codeBox" v-if="currentTime>playerData.changeTime||!isPlay">
                <view class="image-box" @click="videoClick()">
                    <image class="bg" mode="widthFix" :src="playerData.iconUrl"></image>
                    <image class="tip-img" src="https://eshopfile.zhiyousx.com/2026010615334062879.png"></image>
                </view>
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
            return this.videoContext = null, {
              isPlay: !0,
              fullScreen: !1,
              currentTime: 0,
              playerData: {
                vlogUrl: "",
                dataUrl: "",
                iconUrl: "",
                changeTime: 20
              }
            }
          },
          onLoad: function(e) {
            var a = e.playerId || 1,
              t = Number(a) - 1;
            this.getFootBallPlayer(t)
          },
          methods: {
            getFootBallPlayer: function(a) {
              var n = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "FOOTBALL_PLAYER"
              }).then((function(i) {
                if (1 === i.code) {
                  var o = i.data;
                  if (o.paramValue) {
                    var r = JSON.parse(o.paramValue).playerList;
                    n.playerData = r[a], n.videoContext = e.createVideoContext("videoPlayer"), t.preloadAssets({
                      data: [{
                        type: "image",
                        src: n.playerData.iconUrl
                      }]
                    })
                  }
                }
              }))
            },
            videoClick: function() {
              uni.navigateTo({
                url: "/yearCard/pages/nfcVideo/nfcDetail?url=".concat(this.playerData.dataUrl)
              })
            },
            playPause: function() {
              this.isPlay ? this.videoContext.pause() : this.videoContext.play()
            },
            fullscreenchange: function(e) {
              this.fullScreen = e.detail.fullScreen
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
page{background:#000}.page-box .video,.page-box{height:100vh;position:relative;width:100%}.page-box .btn{background:none;height:120rpx;left:50%;margin-left:-60rpx;margin-top:-60rpx;position:absolute;top:50%;width:120rpx;z-index:2}.page-box .btn.pause{animation:benone .2s linear 2s forwards}.codeBox{bottom:40rpx;left:0rpx;position:absolute;width:194rpx;z-index:100}.codeBox .image-box{height:auto;position:relative;width:194rpx}.codeBox .image-box .bg{height:auto;width:194rpx}.codeBox .image-box .tip-img{animation:shake-data-v-0c78cf82 3s linear infinite forwards;height:38rpx;left:36rpx;position:absolute;top:-12rpx;width:24rpx}@-webkit-keyframes shake-data-v-0c78cf82{0%,100%{transform:translateY(0)}10%,30%,50%,70%,90%{transform:translateY(-12rpx)}20%,40%,60%,80%{transform:translateY(12rpx)}}@keyframes shake-data-v-0c78cf82{0%,100%{transform:translateY(0)}10%,30%,50%,70%,90%{transform:translateY(-12rpx)}20%,40%,60%,80%{transform:translateY(12rpx)}}
</style>
