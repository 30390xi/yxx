<template>
<view class="">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="uni-padding-wrap">
        <view class="page-section swiper">
            <view class="page-section-spacing">
                <swiper class="swiper" :current="index_" :vertical="true" @change="changefun($event)" @animationfinish="animationfinishfun($event)">
                    <swiper-item class="" :key="index" v-for="(item, index) in videoList">
                        <view class="swiper-item">
                            <image class="btn play" src="https://eshopfile.zhiyousx.com/2021083111362225433.png" v-if="!isPlay"></image>
                            <image class="btn pause" src="https://eshopfile.zhiyousx.com/2021083111373735978.png" v-if="isPlay&&firstclick"></image>
                            <video class="video" :controls="fullScreen" :customCache="false" :duration="item.duration" :enableProgressGesture="true" :id="'id'+index" loop="true" :showCenterPlayBtn="false" :src="item.vlogUrl" @fullscreenchange="fullscreenchange($event)" @timeupdate="videoUpdate($event)"></video>
                        </view>
                    </swiper-item>
                </swiper>
            </view>
        </view>
    </view>
    <view class="" v-if="is_active">
        <view class="left">
            <view class="left_box">
                <view class="full-box" v-if="activeObj.height<activeObj.width&&showFull">
                    <view class="full-screen" @click="changeFull($event)">全屏观看</view>
                </view>
                <view class="">
                    <view :class="['description','',showMore&&!showpart?'multilineText3':'']" id="description" :style="'line-height:'+$root.g0+'rpx'+';'+'height:'+(showMore&&!showpart?$root.g1+'rpx':'auto')+';'+'bottom:'+(relList[0]?'281rpx':'138rpx')+';'+'max-height:'+(activeObj.height<activeObj.width&&showFull?'240rpx':'auto')+';'">{{ (activeObj.title||'') }}<text class=""></text>
                    </view>
                    <u-icon :class="['showmore','',showMore&&showpart?'none':'']" color="#ffffff" name="arrow-up-fill" size="24" :style="'bottom:'+($root.g2>0?'280rpx':'178rpx')+';'" @click="showalltext(false)"></u-icon>
                    <u-icon :class="['showmore','',showMore&&!showpart?'none':'']" color="#ffffff" name="arrow-down-fill" size="24" :style="'bottom:'+($root.g3>0?'280rpx':'178rpx')+';'" @click="showalltext(true)"></u-icon>
                </view>
                <scroll-view class="scroll-box" scrollX="true">
                    <view class="item" v-for="(item, __i0__) in relList">
                        <image class="bg" mode="aspectFill" :src="item.coverImage"></image>
                        <view class="linearbg"></view>
                        <view class="info">
                            <image class="icon" src="https://eshopfile.zhiyousx.com/2021083112125659006.png"></image>
                            <view class="text singleLineText">{{item.title}}</view>
                        </view>
                    </view>
                </scroll-view>
                <view class="slider">
                    <slider :activeColor="!isPlay||!updateState?'#ffffff':'#ffffff4D'" backgroundColor="#4f5253" :blockColor="!isPlay||!updateState?'#ffffff':'#6e6f71'" :blockSize="!isPlay||!updateState?14:12" class="" :value="activeObj.currentTime" @change="sliderChange($event)" @changing="sliderChanging($event)" @input="activeObj.currentTime = $event"></slider>
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
            return this.fullTimer = null, {
              videoList: [],
              index_: null,
              index: "0",
              is_active: !0,
              active: 2,
              current_i: 2,
              firstclick: !1,
              isPlay: !0,
              colnum: 0,
              sliderval: 0,
              showMore: !1,
              showpart: !1,
              activeObj: null,
              sending: !1,
              contentId: "",
              relList: [],
              updateState: !0,
              videoContext: null,
              unit: 1.8,
              fullScreen: !1,
              showFull: !0
            }
          },
          onLoad: function(i) {
            this.unit = uni.getStorageSync("unit"), this.contentId = i.id;
            var e = Object.assign({}, i);
            e.istrue = !1, e.contentId = i.id, e.currentTime = 0, e.duration = 0, this.videoList.push(e), this.getVlogByContentId(), this.updateReadingNum(this.contentId), this.oprateVideoList(this.contentId), this.getRelByContentId()
          },
          watch: {
            index_: function(i) {
              this.videoContext = t.createVideoContext("id".concat(this.index_)), this.relList = [], this.contentId = this.videoList[i].contentId, this.getRelByContentId(), this.updateReadingNum(this.contentId)
            },
            activeObj: function(i, e) {
              e || this.$nextTick((function() {
                t.createVideoContext("id".concat(this.index_)).play()
              })), this.getLines()
            }
          },
          onShareAppMessage: function(t) {
            var i = this.activeObj,
              e = i.coverImage.toLowerCase(),
              n = "id=".concat(i.contentId, "&title=").concat(i.title, "&vlogUrl=").concat(i.vlogUrl);
            return {
              title: i.title,
              imageUrl: -1 == e.indexOf(".gif") ? i.coverImage : getApp().globalData.shareimg,
              path: this.$util.setShareUrl("/subPage/pages/vlog/vlog?".concat(n))
            }
          },
          methods: {
            showalltext: function(t) {
              this.showpart = t
            },
            changefun: function(i) {
              this.is_active = !1, t.createVideoContext("id" + this.index_).pause()
            },
            playPause: function(i) {
              var e = t.createVideoContext("id" + i);
              this.firstclick = !0, this.isPlay ? (e.pause(), this.isPlay = !1) : (e.play(), this.isPlay = !0)
            },
            getLines: function() {
              var t = this;
              setTimeout((function() {
                var i = uni.createSelectorQuery();
                i.select("#description").boundingClientRect(), i.exec((function(i) {
                  var e = i[0].height;
                  t.colnum = e / 20, t.showMore = e / 20 > 3
                }))
              }), 200)
            },
            updateReadingNum: function(t) {
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/CommonReadingNum/updateReadingNum", {
                originType: 1,
                originId: t
              }).then((function(t) {
                console.log("add success")
              }))
            },
            changeFull: function() {
              t.createVideoContext("id" + this.index_).requestFullScreen()
            },
            fullscreenchange: function(t) {
              var i = this;
              this.fullScreen = t.detail.fullScreen, this.showFull = !1, this.fullTimer && (clearTimeout(this.fullTimer), this.fullTimer = null), this.fullTimer = setTimeout((function() {
                i.showFull = !0
              }), 500)
            },
            animationfinishfun: function(i) {
              this.showMore = !1, this.isPlay = !0;
              var e = i.detail.current;
              this.activeObj = this.videoList[e], this.index_ = e, this.is_active = !0, this.videoList[e].istrue = !0;
              var n = t.createVideoContext("id" + this.index_);
              n.pause(), (n = t.createVideoContext("id" + e)).play(), this.videoList.length > 0 && e + 1 == this.videoList.length && !this.sending && this.oprateVideoList(this.videoList[e].contentId)
            },
            getRelByContentId: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/contentVlog/getVlogRelByContentId", {
                contentId: this.contentId
              }).then((function(i) {
                t.relList = i.data
              }))
            },
            videoUpdate: function(t) {
              this.updateState && (this.videoList[this.index_].currentTime = t.detail.currentTime / t.detail.duration * 100, this.videoList[this.index_].duration = t.detail.duration)
            },
            sliderChanging: function(t) {
              this.updateState = !1
            },
            sliderChange: function(t) {
              var i = this.videoList[this.index_].duration;
              i && (this.videoContext.seek(t.detail.value / 100 * i), this.videoList[this.index_].duration = t.detail.value, this.updateState = !0)
            },
            routerpage: function(t) {
              switch (t.type) {
                case 1:
                  this.$navigateTo({
                    url: "/subPack/pages/city/city?cityId=".concat(t.id)
                  });
                  break;
                case 2:
                case 4:
                case 5:
                case 6:
                  this.$navigateTo({
                    url: "/pages/spotDetail/spotDetail?spotId=" + t.id
                  });
                  break;
                case 3:
                  this.$navigateTo({
                    url: "/pages/spotThirdDetail/spotThirdDetail?spotId=" + t.id
                  })
              }
            },
            oprateVideoList: function(t) {
              var i = this;
              this.sending = !0, this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/contentVlog/getVlogListByContentId", {
                contentId: t
              }).then((function(t) {
                t.data.map((function(t) {
                  t.istrue = !1, t.currentTime = 0, t.duration = 0
                })), null === i.index_ && (i.index_ = 0), i.videoList = i.videoList.concat(t.data), i.activeObj = i.videoList[i.index_], i.sending = !1, i.videoList[0].istrue = !0
              }))
            },
            getVlogByContentId: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/contentVlog/getVlogByContentId", {
                contentId: this.contentId
              }).then((function(i) {
                1 === i.code && (t.videoList[0].height = i.data.height, t.videoList[0].width = i.data.width, t.videoList[0].title = i.data.title || "")
              }))
            },
            setDsbHeight: function(t) {
              return t.height ? (t.height < t.width && this.showFull ? 224 : 294) + (this.relList.length > 0 ? 0 : 180) + "rpx" : 0
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background:#000}.circle{background:rgba(34,34,34,.4);border-radius:50%;bottom:441rpx;height:70px;left:31rpx;margin:auto;position:fixed;top:0;width:70px;z-index:2}.circle .red{bottom:0;height:35px;left:0;margin:auto;position:absolute;right:0;top:0;width:35px;z-index:3}.swiper{height:100vh}.swiper .slider{bottom:67rpx;height:20rpx;left:0;position:absolute;width:750rpx}.swiper .slider slider{margin:0}.swiper .swiper-item{height:100vh;position:relative}.swiper .swiper-item .btn{background:none;height:120rpx;left:50%;margin-left:-60rpx;margin-top:-60rpx;position:absolute;top:50%;width:120rpx;z-index:2}.swiper .swiper-item .btn.pause{animation:benone-data-v-1c550159 .2s linear 2s forwards}.video{height:100vh;position:relative;width:100%}.left_box{background:linear-gradient(180deg,transparent,#000);bottom:0rpx;height:600rpx;left:0rpx;pointer-events:none;position:fixed;width:100%;z-index:8}.left_box .slider{bottom:67rpx;height:20rpx;left:0;pointer-events:auto;position:absolute;width:750rpx}.left_box .slider slider{margin:0}.left_box .description-box{overflow:auto;position:relative}.left_box .dbs1{height:224rpx}.left_box .dbs2{height:294rpx;margin-top:20rpx}.left_box .description{bottom:281rpx;color:#fff;font-size:24rpx;left:40rpx;max-height:300rpx;overflow-y:scroll;pointer-events:auto;position:fixed;text-align:justify;width:648rpx}.left_box .description.multilineText3{overflow-y:hidden}.left_box .description text{display:inline-block}.left_box .showmore{bottom:0;display:none;pointer-events:auto;position:fixed;right:40rpx;z-index:6}.left_box .showmore.none{display:block}.left_box .u-icon{bottom:280rpx;pointer-events:auto;position:fixed;right:40rpx;z-index:10}.left_box .scroll-box{bottom:138rpx;height:100rpx;left:0;padding-left:40rpx;pointer-events:auto;position:fixed;white-space:nowrap;width:710rpx}.left_box .scroll-box .item{border-radius:10rpx;display:inline-block;height:100rpx;margin-right:10rpx;overflow:hidden;position:relative;width:250rpx}.left_box .scroll-box .item .bg{margin-top:-25%;width:100%}.left_box .scroll-box .item .linearbg{background:linear-gradient(0deg,rgba(0,0,0,.5),transparent);height:100%;left:0;position:absolute;top:0;width:100%;z-index:9}.left_box .scroll-box .item .info{align-items:center;bottom:20rpx;display:-webkit-flex;display:flex;height:26rpx;position:absolute;z-index:10}.left_box .scroll-box .item .info .icon{height:20rpx;margin:0 12rpx;width:17rpx}.left_box .scroll-box .item .info .text{color:#fff;display:inline-block;font-size:24rpx;width:200rpx}@-webkit-keyframes benone-data-v-1c550159{from{opacity:1}to{opacity:0}}@keyframes benone-data-v-1c550159{from{opacity:1}to{opacity:0}}.full-box{display:-webkit-flex;display:flex;justify-content:center;margin:20rpx 0;width:100%}.full-box .full-screen{border:1px solid #fff;border-radius:30rpx;color:#fff;padding:6rpx 0;pointer-events:auto;text-align:center;width:180rpx}
</style>
