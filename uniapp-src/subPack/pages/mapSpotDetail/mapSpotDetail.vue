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
    <view class="audio-box" v-if="langData.voiceUrl">
        <view class="audio-wrapper">
            <view class="audio-number-box">
                <text class="anb1">{{$root.m0}}</text>
                <view class="div">/</view>
                <text class="anb2">{{$root.m1}}</text>
            </view>
            <slider activeColor="#35ABAD" backgroundColor="#ADC6D8" blockSize="16" class="audio-slider" :max="duration" :value="current" @changing="e0($event)" @change="e1($event)"></slider>
        </view>
        <image alt class="audio-but _img" :hidden="!paused" src="https://eshopfile.zhiyousx.com/2023031610511320054.png" @click="play()"></image>
        <image alt class="audio-but _img" :hidden="!!paused" src="https://eshopfile.zhiyousx.com/2023031610514447151.png" @click="e2($event)"></image>
    </view>
    <view class="content">
        <u-parse class=" vue-ref" ref="article" :html="langData.introduction" :lazyLoad="true" style="text-align:justify;" :tagStyle="parseStyle" :vueSlots="['default']">
            <text class="" style="display:inline-block;"></text>
        </u-parse>
    </view>
    <view class="foot-box">
        <button class="" openType="share">
            <image alt class="share _img" src="https://eshopfile.zhiyousx.com/2023031610300944943.png"></image>{{ (langType=='zn'?'分享':'Share') }}</button>
        <button class="" @click="jumpLocation($event)">
            <image alt class="jump _img" src="https://eshopfile.zhiyousx.com/2023031610293382013.png"></image>{{ (langType=='zn'?'去这里':'Go') }}</button>
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
              autoplay: !1
            }
          },
          onLoad: function(t) {
            t.id && (this.id = t.id), t.langType && (this.langType = t.langType), 1 == t.source && (this.showGuideBut = !0), t.autoplay && (this.autoplay = !0), "zn" == this.langType ? uni.setNavigationBarTitle({
              title: "详情"
            }) : "English" == this.langType && uni.setNavigationBarTitle({
              title: "Details"
            })
          },
          onShow: function() {
            uni.getLocation()
          },
          onShareAppMessage: function() {
            var t = "/subPack/pages/mapSpotDetail/mapSpotDetail?id=" + this.id + "&langType=" + this.langType + "&source=1";
            return {
              title: this.langData.name,
              imageUrl: this.imgList[0].imgUrl,
              path: this.$util.setShareUrl(t)
            }
          },
          onShareTimeline: function() {
            var t = "id=" + this.id + "&langType=" + this.langType;
            return {
              title: this.langData.name,
              imageUrl: this.imgList[0].imgUrl,
              path: this.$util.setShareTimeline(t)
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
              var i = this;
              uni.getLocation({
                type: "gcj02",
                success: function(t) {
                  i.getDetail(t.longitude, t.latitude)
                },
                fail: function(t) {
                  i.getDetail("", "")
                }
              })
            },
            getDetail: function(t, i) {
              var a = this,
                e = {
                  id: this.id,
                  latitude: i,
                  longitude: t
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getSpotInfoById", e).then((function(t) {
                if (1 === t.code) {
                  if (console.log(t.data), a.spotDetail = t.data, t.data.picUrl) {
                    var i = t.data.picUrl.split(","),
                      e = [];
                    i.forEach((function(t) {
                      e.push({
                        imgUrl: t
                      })
                    })), a.imgList = e
                  }
                  "zn" == a.langType ? a.langData = t.data.chinese : "English" == a.langType && (a.langData = t.data.english), a.langData.voiceUrl && a.initAudio()
                }
              }))
            },
            initAudio: function() {
              var t = this;
              this.src = this.langData.voiceUrl, this.audio.src = this.src, this.autoplay && this.play(), this.audio.onTimeUpdate((function() {
                t.seek || (t.current = t.audio.currentTime)
              })), this.audio.onCanplay((function() {
                var i = setInterval((function() {
                  0 !== t.audio.duration && (clearInterval(i), t.duration = t.audio.duration)
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
              uni.openLocation({
                latitude: Number(this.spotDetail.latitude),
                longitude: Number(this.spotDetail.longitude),
                name: this.langData.name
              })
            },
            toGuide: function() {
              uni.navigateTo({
                url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent("https://eshop.zhiyousx.com/dsmall-admin-ui/h5/fengRiver.html?tabId=" + this.spotDetail.parentId + "&markerId=" + this.spotDetail.id + "&langType=" + this.langType)
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#f5f5f5;min-height:100vh;padding-bottom:200rpx;width:100%}.page-box .banckMap,.page-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column}.page-box .banckMap{background:#fff;border-radius:20rpx;box-shadow:0 2rpx 8rpx rgba(0,0,0,.1);color:#333;font-size:24rpx;height:120rpx;justify-content:center;line-height:34rpx;position:fixed;right:24rpx;top:24rpx;width:120rpx}.page-box .banckMap image{height:60rpx;width:60rpx}.page-box .anb1{color:#8e8e8e}.page-box .anb2{color:#957f66}.page-box .top-box{height:450rpx;position:relative;width:100%}.page-box .top-box image{height:100%;width:100%}.page-box .top-box .title-box{background:linear-gradient(1turn,#000,transparent);bottom:0;left:0;min-height:118rpx;padding-bottom:30rpx;padding-left:30rpx;position:absolute;width:100%}.page-box .top-box .title-box .title{color:#fff;font-size:44rpx;font-weight:500;line-height:62rpx}.page-box .top-box .title-box .dic{color:#fff;font-size:32rpx;line-height:44rpx;margin-top:12rpx}.page-box .noImg{margin-bottom:24rpx;margin-top:44rpx;width:100%}.page-box .noImg .noImg-title-box{margin-left:40rpx}.page-box .noImg .noImg-title-box .noImg-title{color:#333;font-size:44rpx;font-weight:500;line-height:62rpx}.page-box .noImg .noImg-title-box .noImg-dic{color:#333;font-size:32rpx;line-height:44rpx;margin-top:12rpx}.page-box .audio-box{align-items:center;background:#e1f8ff;border:1px solid #8dd9da;border-radius:20rpx;box-shadow:inset 0 0 8rpx 0 rgba(12,52,154,.3);display:-webkit-flex;display:flex;height:180rpx;justify-content:space-between;margin-top:30rpx;padding:40rpx 28rpx 40rpx 48rpx;width:690rpx}.page-box .audio-box .audio-wrapper{height:84rpx;width:480rpx}.page-box .audio-box .audio-wrapper .audio-number-box{align-items:center;display:-webkit-flex;display:flex;margin-bottom:18rpx}.page-box .audio-box .audio-wrapper .audio-number-box .div{margin:0 8rpx}.page-box .audio-box .audio-wrapper .audio-slider{flex:1;margin:0}.page-box .audio-box .audio-but{height:80rpx;width:80rpx}.page-box .content{background:#fff;border-radius:20rpx 20px 20px 20px;color:#7c7c7c;font-size:30rpx;line-height:40rpx;margin-top:30rpx;padding:30rpx 40rpx;text-align:justify;width:690rpx}.page-box .foot-box{background:#fff;bottom:0;display:-webkit-flex;display:flex;height:110rpx;justify-content:space-between;left:0;padding:10rpx 30rpx;position:fixed;width:100%}.page-box .foot-box button{align-items:center;border-radius:40rpx;display:-webkit-flex;display:flex;font-size:28rpx;font-weight:500;height:80rpx;justify-content:center;line-height:40rpx;width:330rpx}.page-box .foot-box button .jump{height:48rpx;margin-right:20rpx;margin-top:4rpx;width:40rpx}.page-box .foot-box button .share{height:49rpx;margin-right:20rpx;margin-top:4rpx;width:42rpx}.page-box .foot-box button:first-of-type{background:#f6f6f6;color:#333}.page-box .foot-box button:last-of-type{background:#35abad;color:#fff}
</style>
