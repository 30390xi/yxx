<template>
<view class="container" :style="'padding-top:'+navBarHeight+';'">
    <uni-navbar class="" title="vlog" type="transparentFixed"></uni-navbar>
    <view class="head">
        <image class="cust-img" src="https://eshopfile.zhiyousx.com/176913615138339744.png" style="width:100%;height:100%;"></image>
        <view class="cust-video _div">
            <video-play class="video-box" :isRadius="true" :poster="posterUrl" :videoUrl="videoUrl"></video-play>
        </view>
        <view class="right-tip _div" v-if="type!='share'" @click="handleRecord($event)">
            <image class="" src="https://eshopfile.zhiyousx.com/176913458203456352.png" style="width:40rpx;height:40rpx;"></image>{{ $root.m0 }}</view>
    </view>
    <view class="footer" v-if="type!='share'">
        <view class="btn-g">
            <view class="gradient-btn">
                <view class="btn-content">
                    <button class="share-btn" id="sharebtncust" openType="share">
                        <image class="share-img" src="https://eshopfile.zhiyousx.com/176913471242802236.png" style="width:40rpx;height:40rpx;"></image>{{ $root.m1 }}</button>
                </view>
            </view>
            <view class="gradient-btn" @click="download($event)">
                <view class="btn-content">
                    <image class="" src="https://eshopfile.zhiyousx.com/176913475319370473.png" style="width:40rpx;height:40rpx;"></image>
                    <view class="btn-text _div">{{$root.m2}}</view>
                </view>
            </view>
        </view>
    </view>
    <u-popup :borderRadius="20" class="popup-full-width" :closeable="true" height="20%" mode="center" :value="downSuccess" :vueSlots="['default']" width="60%" v-if="downSuccess" @input="downSuccess = $event">
        <view class="down-content">
            <image class="success-icon" src="https://eshopfile.zhiyousx.com/176913679707171045.png" style="width:300rpx;height:170rpx;object-fit:cover;"></image>
            <view class="title">{{$root.m3}}</view>
        </view>
    </u-popup>
</view>

</template>

<script>
import videoPlay from "@/union/pages/vlog/videoPlay.vue";

// Reconstructed Vue Component
const t = uni;
export default {
  components: {
    videoPlay
  },
  data: function() {
              return {
                title: "VLOG",
                showDownloadModal: !1,
                isDownStatus: -1,
                videoUrl: "",
                posterUrl: "",
                shareId: "",
                shareIns: "",
                type: "",
                downSuccess: !1,
                navBarHeight: 0
              }
            },
            onShareAppMessage: function(t) {
              return {
                title: this.$t("sub.button.vlogGeneration"),
                imageUrl: "https://eshopfile.zhiyousx.com/176913104706458420.png",
                path: "/union/pages/vlog/result?type=share&shareId=".concat(this.shareId)
              }
            },
            onLoad: function(n) {
              this.navBarHeight = uni.getSystemInfoSync().statusBarHeight + 44 + "px", console.log("navBarHeight", this.navBarHeight), this.videoUrl = n.videoUrl, this.posterUrl = n.posterUrl, this.shareId = n.shareId, this.type = n.type, console.log("this.type", this.type), (this.shareId && "share" == n.type || this.shareId && 1 == n.type) && (this.handleQueryById(), console.log("this.shareId", this.shareId))
            },
            mounted: function() {
              var n = this;
              this.$nextTick((function() {
                uni.createSelectorQuery().in(n).select("#sharebtncust").context((function(t) {
                  t && t.context && (n.shareIns = t.context)
                })).exec()
              }))
            },
            methods: {
              download: function() {
                this.downloadVideo()
              },
              downloadVideo: function() {
                var n = this;
                return (0, s.default)(i.default.mark((function e() {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, uni.showLoading({
                          title: n.$t("sub.tips.9")
                        }), e.next = 4, n.downloadSingleVideo(n.videoUrl);
                      case 4:
                        e.next = 11;
                        break;
                      case 6:
                        e.prev = 6, e.t0 = e.catch(0), console.error("下载失败:", e.t0), uni.hideLoading(), uni.showToast({
                          title: n.$t("sub.tips.11"),
                          icon: "none"
                        });
                      case 11:
                      case "end":
                        return e.stop()
                    }
                  }), e, null, [
                    [0, 6]
                  ])
                })))()
              },
              downloadSingleVideo: function(n) {
                var e = this,
                  o = this;
                return new Promise((function(i, s) {
                  e.isDownStatus = 1, uni.downloadFile({
                    url: n,
                    success: function(n) {
                      200 === n.statusCode ? t.saveVideoToPhotosAlbum({
                        filePath: n.tempFilePath,
                        success: function() {
                          o.isDownStatus = 2, o.downSuccess = !0, uni.hideLoading(), i()
                        },
                        fail: function(t) {
                          console.error("保存到相册失败:", t), t.errMsg && t.errMsg.includes("auth deny") ? (o.isDownStatus = 3, s(new Error("AUTH_DENIED"))) : (o.isDownStatus = 4, s(t))
                        }
                      }) : (o.isDownStatus = 4, s(new Error("下载失败，状态码: ".concat(n.statusCode))))
                    },
                    fail: function(t) {
                      o.isDownStatus = 4, console.error("下载文件失败:", t), s(t)
                    }
                  })
                }))
              },
              handleAuthDenied: function() {
                var t = this;
                this.closeDownloadModal(), setTimeout((function() {
                  t.openAuthSetting()
                }), 1e3)
              },
              openAuthSetting: function() {
                uni.showModal({
                  title: "提示",
                  content: this.$t("sub.tips.7"),
                  success: function(n) {
                    n.confirm && t.openSetting()
                  }
                })
              },
              getProgressText: function() {
                return 3 == this.isDownStatus ? (this.handleAuthDenied(), this.$t("sub.tips.8")) : 1 == this.isDownStatus ? this.$t("sub.tips.9") : 2 == this.isDownStatus ? this.$t("sub.tips.10") : 4 == this.isDownStatus ? this.$t("sub.tips.11") : void 0
              },
              closeDownloadModal: function() {
                this.showDownloadModal = !1
              },
              handleRecord: function() {
                uni.navigateTo({
                  url: "/union/pages/vlog/record"
                })
              },
              handleQueryById: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "ai/wall/vlog/queryById", {
                  id: this.shareId + ""
                }).then((function(n) {
                  console.log("res------------", n), 1 == n.code && (t.videoUrl = n.data.videoUrl, t.posterUrl = n.data.homeImage)
                }))
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.container{background:url('https://eshopfile.zhiyousx.com/176889164854296878.png')no-repeat;background-size:100%auto;box-sizing:border-box;height:100vh;padding:0 40rpx;width:100%}.head{height:calc(100% - 180rpx);position:relative;width:100%}.head .cust-img{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:1}.head .cust-video{height:100%;padding:10rpx;position:absolute;width:100%}.head .cust-video .video-box{border-radius:60rpx;height:100%;width:100%}.footer{margin-top:30rpx;width:100%}.footer .btn-g{display:-webkit-flex;display:flex;justify-content:space-around;margin-bottom:20rpx}.btn-bg{background:linear-gradient(76deg,#cc0202,#ff936b);border:none;border-radius:64rpx;box-shadow:inset 0rpx 8rpx 12rpx 0rpx hsla(0,0%,100%,.25);color:#fff;font-family:Alibaba PuHuiTi;font-size:15px;font-weight:400;height:90rpx;line-height:90rpx;width:660rpx}.gradient-btn{background:linear-gradient(90deg,#cc0202,#ff936b);border-radius:64rpx;box-sizing:border-box;height:80rpx;padding:2rpx;width:310rpx}.gradient-btn .btn-content{background:hsla(7,100%,95%,.8);border-radius:62rpx;box-sizing:border-box;height:100%}.gradient-btn .btn-content .share-btn,.gradient-btn .btn-content{align-items:center;display:-webkit-flex;display:flex;gap:8rpx;justify-content:center;width:100%}.gradient-btn .btn-content .share-btn{appearance:none;background:transparent;font-size:28rpx;margin:0;padding:0}.right-tip{background:hsla(0,0%,100%,.8);border:2rpx solid #fff;border-radius:60rpx 60rpx 60rpx 60rpx;box-shadow:0rpx 8rpx 8rpx 0rpx rgba(0,0,0,.25);color:#333;height:64rpx;justify-content:center;line-height:64rpx;position:absolute;right:-10px;text-align:center;top:-4rpx;width:188rpx;z-index:2}.popup-full-width .down-content,.right-tip{align-items:center;display:-webkit-flex;display:flex}.popup-full-width .down-content{background:linear-gradient(180deg,#ffe9e6,#fff);border:1px solid #fff;border-radius:20px;box-shadow:0 3px 6px 0 rgba(0,0,0,.2);color:#000;flex-direction:column;font-size:32rpx;gap:30rpx;height:100%;width:100%}
</style>
