<template>
<view class="video-box-c">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <image alt class="photo-box-image" src="https://eshopfile.zhiyousx.com/174540058622383938.png?imageView2/3/w/750"></image>
    <view class="video-box">
        <image mode class="photo-box-image3" :src="posterUrl+'?imageView2/3/w/578/h/1027'" v-if="posterUrlStatus"></image>
        <video class="photo-box-image1" :controls="true" :enablePlayGesture="true" id="myVideo1" :initialTime="0.01" objectFit="cover" :poster="posterUrl" :showCenterPlayBtn="true" :showFullscreenBtn="true" :src="videoUrl" v-if="videoUrl" @loadedmetadata="loadedmetadata($event)"></video>
    </view>
    <view class="btns">
        <image alt class="image-btn" src="https://eshopfile.zhiyousx.com/174537267251629735.png" v-if="longOrShort!=1&&!payStatue&&infosObj.itemPrice!=0" @click="goPay($event)"></image>
        <image alt class="image-btn" src="https://eshopfile.zhiyousx.com/174540127656532660.png" v-else @click="downloadVideo($event)"></image>
    </view>
    <image mode class="image-btn1" src="https://eshopfile.zhiyousx.com/174540082410559197.png" @click="backPage($event)"></image>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              payShow: !0,
              videoUrl: "",
              imageUrl: "",
              videoId: "",
              disabledSubmitBtn: !1,
              infosObj: {
                itemName: "长安十二时辰AI视频",
                itemPrice: 9.9
              },
              longOrShort: 1,
              payStatue: 0,
              posterUrl: "",
              sex: "",
              posterUrlStatus: !0
            }
          },
          onLoad: function(e) {
            console.log(this.videoId), this.videoId = e.id ? e.id : "", this.longOrShort = e.type ? e.type : "", this.sex = e.sex ? e.sex : "", 1 == this.sex ? 1 == this.longOrShort ? this.posterUrl = "https://eshopfile.zhiyousx.com/174582852034421316.jpg" : this.posterUrl = "https://eshopfile.zhiyousx.com/174582857601628668.jpg" : 1 == this.longOrShort ? this.posterUrl = "https://eshopfile.zhiyousx.com/174582852034421316.jpg" : this.posterUrl = "https://eshopfile.zhiyousx.com/174582827345899594.jpg", console.log(this.videoId), this.getBaseInfos(), uni.showLoading({
              title: "加载中"
            })
          },
          methods: {
            loadedmetadata: function() {
              this.posterUrlStatus = !1, uni.hideLoading()
            },
            getBaseInfos: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "AI_VIDEO_PRODUCT_INFO"
              }).then((function(i) {
                if (1 === i.code) {
                  var o = i.data.paramValue ? JSON.parse(i.data.paramValue) : {};
                  e.infosObj = o, e.getdelite()
                } else uni.hideLoading()
              })).catch((function() {
                uni.hideLoading()
              }))
            },
            getdelite: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/video/ai/getInfo", {
                id: this.videoId
              }).then((function(i) {
                1 === i.code ? (console.log(i.data, 222222222), uni.hideLoading(), 1 == e.longOrShort ? e.videoUrl = i.data.shortVideoUrl : 0 == e.infosObj.itemPrice ? e.videoUrl = i.data.longVideoUrl : i.data.payStatus ? (e.payStatue = 1, e.videoUrl = i.data.longVideoUrl) : (e.payStatue = 0, e.videoUrl = i.data.longVideoWatermarkUrl)) : uni.hideLoading()
              })).catch((function() {
                uni.hideLoading()
              }))
            },
            backPage: function() {
              this.$eventAnalyse.analyse({
                eventTag: "aiVideo_detailsPage_click",
                eventName: "支付页返回详情页"
              }), uni.navigateBack()
            },
            downloadVideo: function() {
              var e = this;
              this.$eventAnalyse.analyse({
                eventTag: "aiVideo_download_click",
                eventName: "视频下载",
                eventParams: {
                  videoUrl: this.videoUrl,
                  videoId: this.videoId,
                  longOrShort: this.longOrShort
                }
              }), t.getSetting({
                success: function(i) {
                  i.authSetting["scope.writePhotosAlbum"] ? e.startDownload() : t.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                      e.startDownload()
                    },
                    fail: function() {
                      uni.showModal({
                        title: "提示",
                        content: "需要您授权保存到相册",
                        success: function(e) {
                          e.confirm && t.openSetting()
                        }
                      })
                    }
                  })
                },
                fail: function() {
                  uni.showToast({
                    title: "获取权限失败",
                    icon: "none"
                  })
                }
              })
            },
            startDownload: function() {
              uni.showLoading({
                title: "视频下载中..."
              }), uni.downloadFile({
                url: this.videoUrl,
                success: function(e) {
                  200 === e.statusCode ? t.saveVideoToPhotosAlbum({
                    filePath: e.tempFilePath,
                    success: function() {
                      uni.hideLoading(), uni.showToast({
                        title: "视频保存成功",
                        icon: "success"
                      })
                    },
                    fail: function(e) {
                      uni.hideLoading(), uni.showToast({
                        title: "视频保存失败",
                        icon: "none"
                      }), console.log("保存失败:", e)
                    }
                  }) : (uni.hideLoading(), uni.showToast({
                    title: "视频下载失败",
                    icon: "none"
                  }), console.log("下载失败，状态码:", e.statusCode))
                },
                fail: function(e) {
                  uni.hideLoading(), uni.showToast({
                    title: "视频下载失败",
                    icon: "none"
                  }), console.log("下载失败:", e)
                }
              })
            },
            goPay: function() {
              if (!this.disabledSubmitBtn) {
                var e = {
                  itemAmount: this.infosObj.itemPrice,
                  itemNum: 1,
                  orderAmount: this.infosObj.itemPrice,
                  payChannel: "",
                  itemId: this.videoId,
                  itemName: this.infosObj.itemName,
                  seriesNumber: uni.getStorageSync("userInfor").openId || uni.getStorageSync("wxopenid")
                };
                this.$eventAnalyse.analyse({
                  eventTag: "aiVideo_pay_click",
                  eventName: "去支付",
                  eventParams: e
                }), this.createOrder(e)
              }
            },
            createOrder: function(e) {
              var i = this;
              this.disabledSubmitBtn || (this.disabledSubmitBtn = !0, this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/vudio/order/createOrder", e, "预订中...").then((function(e) {
                1 == e.code ? i.$uniApi.dataRequestYesLoading("GET", "order/app/v1/vudio/order/topay", {
                  orderId: e.data
                }, "支付中").then((function(e) {
                  1 == e.code ? uni.requestPayment({
                    timeStamp: e.data.timeStamp,
                    nonceStr: e.data.nonceStr,
                    package: "prepay_id=".concat(e.data.prepayid),
                    signType: e.data.signType,
                    paySign: e.data.pay_sign,
                    orderInfo: e.data.tradeNo,
                    success: function(t) {
                      i.$uni.showToast("支付成功"), i.getdelite()
                    },
                    fail: function(t) {
                      i.$uni.showToast("支付已取消"), i.disabledSubmitBtn = !1
                    }
                  }) : (i.$uni.showToast(e.msg), i.disabledSubmitBtn = !1)
                })).catch((function(t) {
                  i.$uni.showToast(t.msg)
                })) : (i.disabledSubmitBtn = !1, i.$uni.showToast(e.msg))
              })).catch((function(t) {
                i.disabledSubmitBtn = !1, i.$uni.showToast(t.msg)
              })))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.video-box-c{background:url('https://eshopfile.zhiyousx.com/174531750140993868.png')no-repeat 50%;background-size:cover;height:100vh;position:relative;width:100vw}.video-box-c .photo-box-image{height:1180rpx;left:calc(50% - 358rpx);position:absolute;top:calc(50% - 590rpx);width:716rpx}.video-box-c .video-box{border-radius:30rpx;height:1027rpx;left:calc(50% - 289rpx);overflow:hidden;position:relative;text-align:center;top:calc(50% - 514rpx);width:578rpx;z-index:15}.video-box-c .video-box .photo-box-image1{height:100%;left:0;position:absolute;top:0;width:100%}.video-box-c .video-box .photo-box-image3{height:100%;left:0;position:absolute;top:0;width:100%;z-index:10}.video-box-c .photo-box-image2{height:130rpx;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:130rpx}.video-box-c .image-btn{bottom:110rpx;height:64rpx;left:calc(50% - 129rpx);margin-right:20rpx;position:absolute;width:258rpx}.video-box-c .image-btn1{display:none;height:60rpx;position:absolute;right:calc(50% - 308rpx);top:calc(50% - 506rpx);width:60rpx;z-index:12}.video-box-c .btns{height:100%;position:absolute;top:0;width:100%}@media screen and (max-height:740px){.video-box-c .photo-box-image{height:1180rpx;left:calc(50% - 358rpx);position:absolute;top:calc(50% - 590rpx);width:716rpx}.video-box-c .video-box{height:834rpx;left:calc(50% - 234rpx);position:absolute;text-align:center;top:calc(50% - 417rpx);width:468rpx;z-index:15}.video-box-c .video-box .photo-box-image1{height:100%;width:100%}.video-box-c .photo-box-image2{height:130rpx;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:130rpx}.video-box-c .image-btn{bottom:150rpx;height:64rpx;left:calc(50% - 129rpx);margin-right:20rpx;position:absolute;width:258rpx}.video-box-c .image-btn1{display:block;height:60rpx;position:absolute;right:calc(50% - 308rpx);top:calc(50% - 506rpx);width:60rpx;z-index:12}.video-box-c .btns{height:100%;position:absolute;top:0;width:100%}}
</style>
