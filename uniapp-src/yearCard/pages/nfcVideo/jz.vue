<template>
<view class="page-box">
    <video :autoplay="true" class="video" :controls="false" :customCache="false" :enablePlayGesture="true" id="videoPlayer" :loop="true" :showCenterPlayBtn="false" src="https://eshopfile.zhiyousx.com/2026012118164926489.mp4" @play="videoPlay($event)" @pause="videopause($event)" @ended="videoEnd($event)"></video>
    <image class="actIcon" src="https://eshopfile.zhiyousx.com/2026012116151053572.png" @click="iconClick('/yearCard/pages/nfcVideo/dnfAct')"></image>
    <image class="albumIcon" src="https://eshopfile.zhiyousx.com/2026012116151345982.png" @click="iconClick('/yearCard/pages/nfcVideo/dnfAlbum')"></image>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              isPlay: !0,
              fullScreen: !1,
              currentTime: 0,
              teamId: 0
            }
          },
          onLoad: function(n) {
            e.preloadAssets({
              data: [{
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116045789227.jpg"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116064712243.png"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116053458845.png"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116065653707.png"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116130338809.png"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116130568486.png"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026011516590113392.jpg"
              }]
            })
          },
          onShow: function(e) {},
          methods: {
            videoEnd: function() {},
            iconClick: function(e) {
              uni.navigateTo({
                url: e
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
page{background:#000}.page-box{height:100vh;position:relative;width:100%}.page-box .actIcon{bottom:15rpx;height:118rpx;position:fixed;right:86rpx;width:240rpx;z-index:100}.page-box .albumIcon{bottom:25rpx;height:126rpx;left:114rpx;position:fixed;width:225rpx;z-index:100}.page-box .video{bottom:158rpx;height:177.8158vw;left:0;position:fixed;width:100vw}
</style>
