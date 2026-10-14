<template>
<view class="video-box">
    <video class="" :enablePlayPageBtn="false" id="innerVideo" objectFit="contain" :poster="poster" :showCenterPlayBtn="false" :showFullscreenBtn="false" :src="videoUrl" :style="'object-fit:contain;'+'border-radius:'+(isRadius?'60rpx':'0')+';'" @ended="stopPlay($event)" @play="startPlay($event)" @error="videoErrorCallback($event)" @loadedmetadata="onLoadedmetadata($event)">
        <image class="" src="https://eshopfile.zhiyousx.com/176705974549536802.png" v-if="showPlayBtn" @click="handlePlay($event)"></image>
    </video>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          name: "videoPlay",
          data: function() {
            return {
              showPlayBtn: !0,
              innerVideoCtx: null
            }
          },
          props: {
            videoUrl: {
              type: String,
              default: ""
            },
            poster: {
              type: String,
              default: ""
            },
            isRadius: {
              type: Boolean,
              default: !1
            }
          },
          mounted: function() {
            var e = this;
            this.$nextTick((function() {
              uni.createSelectorQuery().in(e).select("#innerVideo").context((function(n) {
                n && n.context && (e.innerVideoCtx = n.context)
              })).exec()
            }))
          },
          methods: {
            stopPlay: function() {
              this.showPlayBtn = !0
            },
            startPlay: function() {
              this.showPlayBtn = !1
            },
            handlePlay: function() {
              this.innerVideoCtx && this.innerVideoCtx.play()
            },
            handleStop: function() {
              var e = this;
              this.$nextTick((function() {
                uni.createSelectorQuery().in(e).select("#innerVideo").context((function(n) {
                  n && n.context && n.context.stop()
                })).exec()
              }))
            },
            onLoadedmetadata: function() {
              this.innerVideoCtx && this.innerVideoCtx.play()
            },
            videoErrorCallback: function(n) {
              console.error("视频加载失败:", n)
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.video-box{height:100%;position:relative;width:100%}video{border-radius:40rpx;height:100%;width:100%}image{height:45px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:45px}
</style>
