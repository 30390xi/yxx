<template>
<view class="page-box" v-if="spotDetail">
    <view class="top-box" v-if="imgList[0]">
        <u-swiper :autoplay="false" borderRadius="0" class="" height="450" indicatorPos="topRight" interval="5000" :list="imgList" name="imgUrl"></u-swiper>
        <view class="title-box">
            <view class="title">{{ langData.name }}</view>
            <view class="dic" v-if="spotDetail.distance">
                <label class="_span" v-if="langType=='zn'">距您</label>{{spotDetail.distance+'km'}}</view>
        </view>
    </view>
    <view class="noImg" v-else>
        <view class="noImg-title-box">
            <view class="noImg-title">{{ langData.name }}</view>
            <view class="noImg-dic" v-if="spotDetail.distance">
                <label class="_span" v-if="langType=='zn'">距您</label>{{spotDetail.distance+'km'}}</view>
        </view>
    </view>
    <view class="content">
        <u-parse class=" vue-ref" ref="article" :html="langData.introduction" :lazyLoad="true" style="text-align:justify;" :tagStyle="parseStyle" @imgtap="imgtap()"></u-parse>
    </view>
    <view class="audio-box" v-if="langData.voiceUrl">
        <view class="border-Box" :style="'background:'+'url('+mapinfo.voiceBottomUrl+') no-repeat'+';'+'background-size:'+'100% 100%'+';'">
            <view class="audio-wrapper">
                <view class="audio-number-box">
                    <text class="anb1" :style="'color:'+'#65470D'+';'">{{$root.m0}}</text>
                    <view class="div">/</view>
                    <text class="anb2" :style="'color:'+'#957F66'+';'">{{$root.m1}}</text>
                </view>
                <slider activeColor="#65470D" backgroundColor="rgba(0,0,0,0.1)" :blockColor="mapinfo.audioTitleBg" blockSize="16" class="audio-slider" :max="duration" :value="current" @changing="e0($event)" @change="e1($event)"></slider>
            </view>
            <image alt class="audio-but _img" :src="mapinfo.voicePlayStyle" v-if="paused" @click="play()"></image>
            <image alt class="audio-but _img" :src="mapinfo.voiceSuspendStyle" v-else @click="e2($event)"></image>
        </view>
    </view>
    <view class="foot-box">
        <button class="" openType="share" :style="styleConfig.btn">
            <view class="border-Box" :style="'color:'+mapinfo.fontUnselectedColor+';'">
                <image alt class="share" mode="widthFix" :src="mapinfo.shareBtnIcon"></image>{{ (langType=='zn'?'分享':'Share') }}</view>
        </button>
        <button class="" :style="styleConfig.actbtn" @click="jumpLocation($event)">
            <view class="border-Box" :style="'color:'+mapinfo.fontUnselectedColor+';'">
                <image alt class="jump" mode="widthFix" :src="mapinfo.navBtnIcon"></image>{{ (langType=='zn'?'去这里':'Go') }}</view>
        </button>
    </view>
    <view class="banckMap" v-if="showGuideBut" @click="toGuide($event)">
        <image mode class="" src="https://eshopfile.zhiyousx.com/2023031610322750615.png"></image>{{ (langType=='zn'?'导览':'Guide') }}</view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              audio: t.createInnerAudioContext(),
              current: 0,
              duration: 0,
              paused: !0,
              loading: !1,
              seek: !1,
              src: "",
              id: 0,
              langType: "zn",
              spotDetail: "",
              langData: {},
              showGuideBut: !1,
              parseStyle: {
                p: "word-break: break-all;"
              },
              imgList: [],
              autoplay: !1,
              mapId: "",
              mapinfo: {},
              styleConfig: {},
              pid: "",
              safeAreaBottom: uni.getStorageSync("safeAreaBottom")
            }
          },
          onLoad: function(a) {
            a.id && (this.id = a.id), a.mid && (this.mapId = a.mid), a.langType && (this.langType = a.langType), 1 == a.source && (this.showGuideBut = !0), a.autoplay && (this.autoplay = !0), a.pid && (this.pid = a.pid), "zn" == this.langType ? uni.setNavigationBarTitle({
              title: "详情"
            }) : "English" == this.langType && uni.setNavigationBarTitle({
              title: "Details"
            }), this.getMapInfo()
          },
          onShow: function() {
            uni.getLocation()
          },
          onShareAppMessage: function() {
            var t = "/subPack/pages/guide/ecsDetail?id=" + this.id + "&langType=" + this.langType + "&source=1&mid=" + this.mapId;
            return "no" == this.pid && (t = "/subPack/pages/guide/ecsDetail?id=" + this.id + "&langType=" + this.langType + "&source=1&mid=" + this.mapId + "&pid=no"), {
              title: this.spotDetail.shareDesc || this.langData.name,
              bgImgUrl: this.spotDetail.shareImage || (this.imgList && this.imgList.length ? this.imgList[0].imgUrl : ""),
              path: this.$util.setShareUrl(t)
            }
          },
          onHide: function() {
            this.audio && this.audio.pause()
          },
          onUnload: function() {
            this.audio && this.audio.destroy()
          },
          methods: {
            getLocation: function() {
              var a = this;
              uni.getLocation({
                type: "gcj02",
                success: function(t) {
                  a.getDetail(t.longitude, t.latitude)
                },
                fail: function(t) {
                  a.getDetail("", "")
                }
              })
            },
            getMapInfo: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getScenicSpotMapBase", {
                mapId: this.mapId
              }).then((function(a) {
                1 === a.code && (t.mapinfo = a.data, a.data)
              }))
            },
            getDetail: function(t, a) {
              var i = this,
                e = {
                  id: this.id,
                  latitude: a,
                  longitude: t
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getSpotInfoById", e).then((function(t) {
                if (1 === t.code) {
                  if (i.spotDetail = t.data, t.data.picUrl) {
                    var a = t.data.picUrl.split(","),
                      e = [];
                    a.forEach((function(t) {
                      e.push({
                        imgUrl: t
                      })
                    })), i.imgList = e
                  }
                  "zn" == i.langType ? i.langData = t.data.chinese : "English" == i.langType && (i.langData = t.data.english), i.langData.voiceUrl && i.initAudio()
                }
              }))
            },
            initAudio: function() {
              var t = this;
              this.src = this.langData.voiceUrl, this.audio.src = this.src, this.play(), setTimeout((function() {
                t.audio.pause()
              }), 10), setTimeout((function() {
                t.autoplay && t.play()
              }), 1e3), this.audio.onTimeUpdate((function() {
                t.seek || (t.current = t.audio.currentTime)
              })), this.audio.onCanplay((function() {
                var a = setInterval((function() {
                  t.audio && t.audio.duration > 0 && (clearInterval(a), t.duration = t.audio.duration)
                }), 500)
              })), this.audio.onPlay((function() {
                t.paused = !1, t.loading = !1
              })), this.audio.onPause((function() {
                t.paused = !0
              })), this.audio.onEnded((function() {
                t.continue ? t.next() : (t.paused = !0, t.current = 0)
              })), this.audio.onSeeked((function() {
                t.seek = !1
              }))
            },
            format: function(t) {
              return "0".repeat(2 - String(Math.floor(t / 60)).length) + Math.floor(t / 60) + ":" + "0".repeat(2 - String(Math.floor(t % 60)).length) + Math.floor(t % 60)
            },
            play: function() {
              this.audio.play(), this.loading = !0
            },
            jumpLocation: function() {
              var a = "古观音禅寺" === this.langData.name ? "终南禅韵" : "古观音禅寺";
              uni.openLocation({
                latitude: Number(this.spotDetail.latitude),
                longitude: Number(this.spotDetail.longitude),
                name: this.langData.name,
                address: a
              })
            },
            toGuide: function() {
              var a = "https://eshop.zhiyousx.com/ecs/";
              "no" == this.pid ? uni.navigateTo({
                url: "/subPack/pages/guide/webpage?urlEncode=" + encodeURIComponent("".concat(a))
              }) : 3 == this.spotDetail.type ? uni.navigateTo({
                url: "/subPack/pages/guide/webpage?urlEncode=" + encodeURIComponent("".concat(a, "?tabId=") + this.spotDetail.parentId + "&markerId=" + this.spotDetail.id)
              }) : uni.navigateTo({
                url: "/subPack/pages/guide/webpage?urlEncode=" + encodeURIComponent("".concat(a, "?&tabId=") + this.spotDetail.parentId + "&markerId=" + this.spotDetail.id)
              })
            },
            imgtap: function(t) {
              t.ignore()
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#fff;min-height:100vh;padding-bottom:200rpx;width:750rpx}.page-box .banckMap,.page-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column}.page-box .banckMap{background-color:hsla(0,0%,100%,.5);background-size:100% 100%;border-radius:1rpx;border-radius:8px;color:#333;font-size:24rpx;height:110rpx;justify-content:center;line-height:34rpx;position:fixed;right:30rpx;top:30rpx;width:110rpx}.page-box .banckMap image{height:54rpx;margin-bottom:-5rpx;margin-top:5rpx;width:50rpx}.page-box .anb1{color:#1d6d58;font-weight:700}.page-box .anb2{color:#777}.page-box .top-box{height:450rpx;position:relative;width:100%}.page-box .top-box image{height:100%;width:100%}.page-box .top-box .title-box{background:linear-gradient(1turn,#000,transparent);bottom:0;left:0;min-height:118rpx;padding-bottom:30rpx;padding-left:30rpx;position:absolute;width:100%}.page-box .top-box .title-box .title{color:#fff;font-size:44rpx;font-weight:500;line-height:62rpx}.page-box .top-box .title-box .dic{color:#fff;font-size:32rpx;line-height:44rpx;margin-top:12rpx}.page-box .noImg{margin-bottom:24rpx;margin-top:44rpx;width:100%}.page-box .noImg .noImg-title-box{margin-left:40rpx}.page-box .noImg .noImg-title-box .noImg-title{color:#333;font-size:44rpx;font-weight:700;line-height:62rpx}.page-box .noImg .noImg-title-box .noImg-dic{color:#333;font-size:32rpx;line-height:44rpx;margin-top:12rpx}.page-box .audio-box{border-radius:4rpx;bottom:120rpx;height:128rpx;padding:5rpx;position:fixed;width:690rpx}.page-box .audio-box .border-Box{align-items:center;border-radius:2rpx;display:-webkit-flex;display:flex;height:100%;justify-content:space-between;padding:24rpx 30rpx;width:100%}.page-box .audio-box .border-Box .audio-wrapper{height:84rpx;width:480rpx}.page-box .audio-box .border-Box .audio-wrapper .audio-number-box{align-items:center;display:-webkit-flex;display:flex;margin-bottom:14rpx}.page-box .audio-box .border-Box .audio-wrapper .audio-number-box .div{color:#8e8e8e;margin:0 8rpx}.page-box .audio-box .border-Box .audio-wrapper .audio-slider{flex:1;margin:0}.page-box .audio-box .border-Box .audio-but{height:80rpx;width:80rpx}.page-box .audio-box .br-bg{height:14rpx;position:absolute;width:14rpx}.page-box .content{background:#fff;border-radius:20rpx;color:#7c7c7c;font-size:30rpx;height:auto;line-height:40rpx;padding:30rpx;text-align:justify;width:750rpx}.page-box .foot-box{background:#e7e4de;bottom:0;display:-webkit-flex;display:flex;height:auto;justify-content:space-between;left:0;padding-bottom:10rpx;position:fixed;width:750rpx}.page-box .foot-box button{background-color:initial;border:none;height:80rpx;padding:5rpx;position:relative;width:330rpx}.page-box .foot-box button .border-Box{align-items:center;display:-webkit-flex;display:flex;font-size:28rpx;font-weight:500;height:100%;justify-content:center;width:100%}.page-box .foot-box button .border-Box .jump{margin-right:20rpx;margin-top:4rpx;width:40rpx}.page-box .foot-box button .border-Box .share{margin-right:20rpx;margin-top:4rpx;width:42rpx}.page-box .foot-box button .br-bg{height:14rpx;position:absolute;width:14rpx}
</style>
