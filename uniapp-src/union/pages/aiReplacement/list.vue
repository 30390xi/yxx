<template>
<view class="replacement_box">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="replacement_header"></view>
    <view class="replacement_count-box">
        <view class="replacement_count-top"></view>
        <view class="replacement_count-bottom"></view>
        <view class="replacement_count" :style="'bottom:'+(smallScreen?'200rpx':'220rpx')+';'+'height:'+(smallScreen?'520rpx':'840rpx')+';'" v-if="$root.g0">
            <view class="video-box" :key="id" v-for="(el, i) in dataList">
                <view class="loading-box" v-if="el.status==0">
                    <view class="loading-warp">
                        <view class="loading-top"></view>
                        <image class="loading-bottom" src="https://eshopfile.zhiyousx.com/173762708353241951.png"></image>
                    </view>
                </view>
                <image class="swiperItem" mode="aspectFill" :src="el.imageUrl" v-else></image>
            </view>
        </view>
        <view class="replacement_count" :style="'bottom:'+(smallScreen?'200rpx':'220rpx')+';'+'height:'+(smallScreen?'520rpx':'840rpx')+';'" v-else>
            <view class="no-data">当前暂无作品</view>
        </view>
    </view>
    <view class="replacement_foot">
        <view class="btn-all">
            <view class="foot-sub">
                <view class="foot-btn" @click="submit($event)">创作视频</view>
            </view>
        </view>
        <view class="refresh-icon" v-if="$root.g1" @click="getDataList($event)"></view>
    </view>
    <view class="video-boxs" :hidden="!showPlay" @click="parentMethod($event)">
        <image mode class="close-btn" src="https://eshopfile.zhiyousx.com/173752928421185517.png" @click="($event)"></image>
        <view class="foot-btn foot-btn1" id="close" @click="download($event)">下载视频</view>
        <video :autoplay="true" :class="['swiperItemVideo','','vue-ref',smallScreen?'video1':'video2']" :controls="true" ref="video" id="videoDome" objectFit="cover" :poster="option.imageUrl" :src="option.videoUrl" @click="stopPropagation($event)"></video>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            data: function() {
              return {
                smallScreen: !1,
                showLoading: !1,
                showPlay: !1,
                dataList: [],
                option: {
                  videoUrl: "",
                  imageUrl: ""
                },
                time: null
              }
            },
            onLoad: function() {
              var e = uni.getSystemInfoSync().screenHeight;
              console.log(e, "屏幕高度小于750"), e < 750 ? (console.log("屏幕高度小于750"), this.smallScreen = !0) : (console.log("屏幕高度大于等于750"), this.smallScreen = !1)
            },
            onShow: function() {
              this.$util.isLogin("/union/pages/aiReplacement/list") && this.getDataList()
            },
            onUnload: function() {
              this.time && (clearTimeout(this.time), this.time = null)
            },
            methods: {
              download: function() {
                var e = this;
                return (0, o.default)(i.default.mark((function n() {
                  var a, o;
                  return i.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, uni.showLoading({
                          title: "下载中"
                        });
                      case 2:
                        return n.next = 4, uni.downloadFile({
                          url: e.option.videoUrl
                        });
                      case 4:
                        return a = n.sent, o = a[1].tempFilePath, n.next = 8, t.saveVideoToPhotosAlbum({
                          filePath: o
                        });
                      case 8:
                        return n.sent, uni.hideLoading(), n.next = 12, uni.showToast({
                          title: "下载成功"
                        });
                      case 12:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              playVideo: function(t, e) {
                this.showPlay = !0, this.option = {
                  videoUrl: t,
                  imageUrl: e
                }
              },
              parentMethod: function(t) {
                console.log(t), "videoDome" != t.target.id && "close" != t.target.id && (this.showPlay = !1), console.log("父标签的方法被调用")
              },
              stopPropagation: function(t) {
                t.stopPropagation(), console.log("子标签的方法被调用")
              },
              getDataList: function() {
                var e = this;
                uni.showLoading({
                  title: "加载中",
                  mask: !0
                }), this.$uniApi.dataRequestNoLoading("post", "ai/vidu/ai/selectPage", {
                  current: 1,
                  size: 9999
                }).then((function(n) {
                  1 === n.code && (console.log(n.data.records, "res.data.records"), e.dataList = n.data.records || [], setTimeout((function() {
                    uni.hideLoading()
                  }), 1e3), e.dataList.filter((function(t) {
                    return !t.status
                  })).length > 0 && (e.time && (clearTimeout(e.time), e.time = null), e.time = setTimeout((function() {
                    e.getDataListCopy()
                  }), 1e4)))
                }))
              },
              getDataListCopy: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("post", "ai/vidu/ai/selectPage", {
                  current: 1,
                  size: 9999
                }).then((function(e) {
                  1 === e.code && (console.log(e.data.records, "res.data.records"), t.dataList = e.data.records || [], t.dataList.filter((function(t) {
                    return !t.status
                  })).length > 0 && (t.time = setTimeout((function() {
                    t.getDataListCopy()
                  }), 1e4)))
                }))
              },
              submit: function() {
                uni.navigateBack({
                  delta: 1
                })
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.replacement_box{background:linear-gradient(180deg,#ff816c,#ffb2dd);height:100vh;width:100%}.replacement_box .replacement_header{background-image:url('https://eshopfile.zhiyousx.com/173744609061299511.png');background-repeat:no-repeat;background-size:100% 100%;height:560rpx;position:absolute;width:100%;z-index:1}.replacement_box .replacement_count-box{height:100vh;position:relative;width:100%}.replacement_box .replacement_count-top{background:linear-gradient(180deg,#ffb2dd,#ff816c);height:560rpx;width:100%}.replacement_box .replacement_count-bottom{background:linear-gradient(180deg,#ff816c,#ffb2dd);height:calc(100% - 560rpx);width:100%}.replacement_box .replacement_count{bottom:340rpx;display:-webkit-flex;display:flex;flex-wrap:wrap;justify-content:space-between;left:0;overflow:auto;padding:0 70rpx;position:absolute;right:0;width:100%;z-index:6}.replacement_box .replacement_foot{background-image:url('https://eshopfile.zhiyousx.com/173744670105753649.png');background-repeat:no-repeat;background-size:100% 100%;bottom:0;height:500rpx;position:absolute;width:100%}.replacement_box .foot-sub{height:65rpx;text-align:center;width:100%}.replacement_box .foot-btn{background-image:url('https://eshopfile.zhiyousx.com/173742896535667898.png');background-repeat:no-repeat;background-size:100% 100%;color:#ffeaa0;font-family:SerifCN;font-size:32rpx;font-style:normal;font-weight:700;height:65rpx;letter-spacing:3px;line-height:38rpx;line-height:56rpx;margin:0 auto;text-align:center;text-shadow:0 4px 1px rgba(0,0,0,.1);text-transform:none;width:430rpx}.replacement_box .foot-btn1{bottom:100rpx;left:calc(50% - 215rpx);position:absolute}.replacement_box .left-btn{background-image:url('https://eshopfile.zhiyousx.com/173744104229870926.png');background-repeat:no-repeat;background-size:100% 100%;height:60rpx;padding-right:10rpx;width:150rpx}.replacement_box .right-btn{background-image:url('https://eshopfile.zhiyousx.com/173744102823544358.png');background-repeat:no-repeat;background-size:100% 100%;height:60rpx;padding-left:10rpx;width:150rpx}.replacement_box .more-btn{display:-webkit-flex;display:flex;justify-content:space-between;width:100%}.replacement_box .more-btn .font{color:#9b0505;font-family:SerifCN;font-size:24rpx;font-style:normal;font-weight:700;height:52rpx;line-height:52rpx;text-align:center;text-shadow:0 2px 0 rgba(62,0,0,.3);text-transform:none}.replacement_box .btn-all{bottom:94rpx;position:absolute;width:100%}.replacement_box .up-photo-box{margin-top:89rpx;width:100%}.replacement_box .up-photo{align-items:center;background-image:url('https://eshopfile.zhiyousx.com/173744312766705168.png');background-repeat:no-repeat;background-size:100% 100%;display:-webkit-flex;display:flex;flex-flow:column;height:640rpx;justify-content:center;margin:0 auto;text-align:center;width:500rpx}.replacement_box .up-photo .image{height:380rpx;width:280rpx}.replacement_box .up-photo .text{color:#cf4e4e;font-family:Alibaba PuHuiTi;font-size:26rpx;font-style:normal;font-weight:400;line-height:40rpx;margin:40rpx auto 0;text-align:center;text-transform:none;width:320rpx}.replacement_box .up-photo .image-logo{height:90%;width:90%}.replacement_box .swiperItem{height:382rpx;width:273rpx}.replacement_box .video-box{background:#ffe6c3;border:2rpx solid #a20000;border-radius:18rpx 18rpx 18rpx 18rpx;box-shadow:0rpx 4rpx 0rpx 0rpx rgba(129,5,0,.3);height:404rpx;margin-bottom:20rpx;padding:11rpx;position:relative}.video-boxs{background-color:rgba(0,0,0,.8);height:100%;left:0;position:fixed;top:0;width:100%;z-index:11}.video-boxs .swiperItemVideo{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.loading-box{height:382rpx;position:relative;top:0;width:273rpx;z-index:10}.loading-box .loading-warp{align-items:center;display:-webkit-flex;display:flex;flex-flow:column;height:100%;justify-content:center;width:100%}.loading-box .loading-top{animation:play-sprite-data-v-0f1a54f8 2s steps(60) infinite;background-image:url('https://eshopfile.zhiyousx.com/173746216010747207.png');background-repeat:no-repeat;background-size:5490px 90px;height:90px;margin:0 auto;width:90px}@-webkit-keyframes play-sprite-data-v-0f1a54f8{from{background-position-x:0}to{background-position-x:-5400px}}@keyframes play-sprite-data-v-0f1a54f8{from{background-position-x:0}to{background-position-x:-5400px}}.loading-bottom{height:80rpx;margin-top:25rpx;width:158rpx}.close-btn{height:40rpx;position:absolute;right:40rpx;top:230rpx;width:40rpx}.video1{height:608rpx;width:342rpx}.video2{height:800rpx;width:450rpx}.refresh-icon{background-image:url('https://eshopfile.zhiyousx.com/173753480382841437.png');background-repeat:no-repeat;background-size:100% 100%;bottom:97rpx;height:60rpx;position:absolute;right:70rpx;width:60rpx}.no-data{align-items:center;color:#9b0505;display:-webkit-flex;display:flex;font-family:SerifCN;font-size:32rpx;font-style:normal;font-weight:700;height:100%;justify-content:center;line-height:52rpx;text-align:center;text-transform:none;width:100%}
</style>
