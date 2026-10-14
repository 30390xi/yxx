<template>
<view class="replacement_box">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="replacement_header">
        <image mode class="replacement_header-icon" src="https://eshopfile.zhiyousx.com/173753619182414398.png" @click="goList($event)"></image>
    </view>
    <view class="replacement_count-box">
        <view class="replacement_count-top"></view>
        <view class="replacement_count-bottom"></view>
        <view class="replacement_count" :style="'top:'+(smallScreen?'500rpx':'560rpx')+';'">
            <view class="up-photo1" :hidden="!(typeIndex==0)">
                <component-swiper :autoplay="false" class=" vue-ref" ref="swiper0" :smallScreen="smallScreen" :swiperList="bgData.bgList" :type="1" @scrollImg="scrollImg()"></component-swiper>
            </view>
            <view class="up-photo2" :hidden="!(typeIndex==1)">
                <component-swiper :autoplay="false" class=" vue-ref" ref="swiper1" :smallScreen="smallScreen" :swiperList="bgData.clothImgList" :type="2" @scrollImg="scrollImg1()"></component-swiper>
            </view>
            <view :class="['up-photo','',smallScreen?'up-photo-act':'up-photo-acted']" :hidden="!(typeIndex==2||typeIndex==3)">
                <view class="up-photo-copy" v-if="!humanImg">
                    <image mode class="image" src="https://eshopfile.zhiyousx.com/173745921820092720.png" @click="chooseImage($event)"></image>
                    <view class="text">请选择人物面部清晰的上半身照片，避免生成视频效果不佳</view>
                </view>
                <image :class="['',smallScreen?'image-logo1':'image-logo']" mode="aspectFill" :src="humanImg" v-if="humanImg"></image>
            </view>
        </view>
    </view>
    <view class="replacement_foot">
        <view class="btn-all">
            <view class="foot-sub">
                <view class="foot-btn" @click="submit($event)">{{ ( typeIndex==2&&humanImg?'合成视频':btnText[typeIndex] ) }}</view>
            </view>
            <view class="more-btn">
                <view class="left-btn font" :style="'opacity:'+(leftBtn[typeIndex]?1:0)+';'" @click="previousStep($event)">{{ leftBtn[typeIndex] }}</view>
                <view class="right-btn font" v-if="typeIndex==2&&humanImg" @click="nextStep($event)">重新上传</view>
            </view>
        </view>
    </view>
    <view class="loading-box" v-if="showLoading">
        <view class="loading-warp">
            <view class="loading-top"></view>
            <image class="loading-bottom" src="https://eshopfile.zhiyousx.com/173746268882550876.png"></image>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            componentSwiper: function() {
              n.e("union/pages/aiReplacement/components/componentSwiper").then(function() {
                return resolve(n("7c52"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              btnText: ["下一步", "下一步", "上传人像照片"],
              typeIndex: 0,
              leftBtn: ["", "上一步", "上一步"],
              smallScreen: !1,
              humanImg: "",
              bgImg: "",
              clothImg: "",
              key: "",
              showLoading: !1,
              bgData: [],
              showHide: !1
            }
          },
          onLoad: function() {
            var t = this,
              n = uni.getSystemInfoSync().screenHeight;
            console.log(n, "屏幕高度小于750"), n < 750 ? (console.log("屏幕高度小于750"), this.smallScreen = !0) : (console.log("屏幕高度大于等于750"), this.smallScreen = !1), this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
              paramKey: "VIDU_SCENIC_BG_IMAGE"
            }).then((function(e) {
              1 === e.code && (console.log(e), t.bgData = JSON.parse(e.data.paramValue) || {}, t.bgImg = t.bgData.bgList[0].noBorderUrl, t.clothImg = t.bgData.clothImgList[0].nofaceUrl, t.key = t.bgData.clothImgList[0].key, t.$util.isLogin())
            }))
          },
          onShow: function() {
            var t = this;
            uni.getStorageSync("token") ? this.showHide && (this.bgImg = this.bgData.bgList[0].noBorderUrl, this.clothImg = this.bgData.clothImgList[0].nofaceUrl, this.humanImg = "", this.key = this.bgData.clothImgList[0].key, this.$refs.swiper0.scrollToCurrent(0), this.$refs.swiper1.scrollToCurrent(0)) : this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
              paramKey: "VIDU_SCENIC_BG_IMAGE"
            }).then((function(e) {
              1 === e.code && (console.log(e), t.bgData = JSON.parse(e.data.paramValue) || {}, t.bgImg = t.bgData.bgList[0].noBorderUrl, t.clothImg = t.bgData.clothImgList[0].nofaceUrl, t.key = t.bgData.clothImgList[0].key, t.$util.isLogin())
            }))
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          onHide: function() {
            var e = this;
            this.showHide && setTimeout((function() {
              e.typeIndex = 0, e.$refs.swiper0.scrollToCurrent(0), e.$refs.swiper1.scrollToCurrent(0)
            }), 1e3)
          },
          methods: {
            scrollImg: function(e) {
              this.bgImg = e
            },
            scrollImg1: function(e, t) {
              this.clothImg = e, this.key = t
            },
            submit: function() {
              var t = this;
              2 != this.typeIndex ? 0 != this.typeIndex && 1 != this.typeIndex || (this.typeIndex += 1) : this.humanImg ? (this.showHide = !0, uni.showLoading({
                title: "视频生成中...",
                mask: !0
              }), this.$uniApi.dataRequestNoLoading("post", "ai/vidu/ai/createScenesTask", {
                bgImg: this.bgImg,
                clothImg: this.clothImg,
                humanImg: this.humanImg,
                memberId: this.userInfo.memberId,
                key: this.key,
                type: 0
              }).then((function(n) {
                1 === n.code ? setTimeout((function() {
                  uni.hideLoading(), t.$navigateTo({
                    url: "/union/pages/aiReplacement/list"
                  })
                }), 1e3) : (uni.hideLoading(), t.$uni.showToast(n.msg))
              })).catch((function(n) {
                uni.hideLoading(), t.$uni.showToast("请重试")
              }))) : uni.chooseImage()
            },
            goList: function() {
              this.showHide = !0, this.$navigateTo({
                url: "/union/pages/aiReplacement/list"
              })
            },
            previousStep: function() {
              this.leftBtn[this.typeIndex] && (1 == this.typeIndex && this.clothImg && this.$refs.swiper1.scrollToCurrent(this.clothIdx), this.typeIndex -= 1)
            },
            nextStep: function() {
              uni.chooseImage()
            },
            chooseImage: function() {
              var t = this;
              this.showHide = !1, uni.chooseImage({
                count: 1,
                sizeType: ["original", "compressed"],
                sourceType: ["album", "camera"],
                success: function(n) {
                  if (n.tempFiles[0].size / 1024 / 1024 <= 10) {
                    var i = n.tempFilePaths;
                    o.cropImage({
                      src: i[0],
                      cropScale: "1:1",
                      success: function(n) {
                        console.log(n.tempFilePath, "KKKKKKK"), uni.showLoading({
                          title: "照片上传中...",
                          mask: !0
                        }), uni.uploadFile({
                          url: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
                          filePath: n.tempFilePath,
                          name: "images",
                          success: function(n) {
                            console.log(n, "uploadFileRes");
                            var o = JSON.parse(n.data);
                            1 == o.code && o.data && o.data[0] && (t.humanImg = o.data[0].maxImageUrl), setTimeout((function() {
                              t.showHide = !0, uni.hideLoading()
                            }), 1e3)
                          },
                          fail: function(t) {
                            console.error("upload fail:", t), uni.hideLoading().showHide = !0
                          }
                        }).onProgressUpdate((function(e) {
                          console.log("上传进度" + e.progress + "%")
                        }))
                      },
                      fail: function(e) {
                        console.error("upload fail:", e)
                      }
                    })
                  } else t.$uni.showToast("上传图片不可超过10M")
                }
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.replacement_box{background:linear-gradient(180deg,#ff816c,#ffb2dd);height:100vh;width:100%}.replacement_box .replacement_header{background-image:url('https://eshopfile.zhiyousx.com/173744609061299511.png');background-repeat:no-repeat;background-size:100% 100%;height:560rpx;position:absolute;width:100%;z-index:1}.replacement_box .replacement_count-box{height:100vh;position:relative;width:100%}.replacement_box .replacement_count-top{background:linear-gradient(180deg,#ffb2dd,#ff816c);height:560rpx;width:100%}.replacement_box .replacement_count-bottom{background:linear-gradient(180deg,#ff816c,#ffb2dd);height:calc(100% - 560rpx);width:100%}.replacement_box .replacement_count{bottom:340rpx;height:640rpx;left:0;position:absolute;right:0;width:100%;z-index:6}.replacement_box .replacement_foot{background-image:url('https://eshopfile.zhiyousx.com/173744670105753649.png');background-repeat:no-repeat;background-size:100% 100%;bottom:0;height:500rpx;position:absolute;width:100%}.replacement_box .foot-sub{height:65rpx;text-align:center;width:100%}.replacement_box .foot-btn{background-image:url('https://eshopfile.zhiyousx.com/173742896535667898.png');background-repeat:no-repeat;background-size:100% 100%;color:#ffeaa0;font-family:SerifCN;font-size:32rpx;font-style:normal;font-weight:700;height:65rpx;letter-spacing:3px;line-height:38rpx;line-height:56rpx;margin:0 auto;text-align:center;text-shadow:0 4px 1px rgba(0,0,0,.1);text-transform:none;width:430rpx}.replacement_box .left-btn{background-image:url('https://eshopfile.zhiyousx.com/173744104229870926.png');background-repeat:no-repeat;background-size:100% 100%;height:60rpx;padding-right:10rpx;width:150rpx}.replacement_box .right-btn{background-image:url('https://eshopfile.zhiyousx.com/173744102823544358.png');background-repeat:no-repeat;background-size:100% 100%;height:60rpx;padding-left:10rpx;width:150rpx}.replacement_box .more-btn{display:-webkit-flex;display:flex;justify-content:space-between;width:100%}.replacement_box .more-btn .font{color:#9b0505;font-family:SerifCN;font-size:24rpx;font-style:normal;font-weight:700;height:52rpx;line-height:52rpx;text-align:center;text-transform:none}.replacement_box .btn-all{bottom:94rpx;position:absolute;width:100%}.replacement_box .up-photo-box{margin-top:89rpx;width:100%}.replacement_box .up-photo-act{height:560rpx;margin-top:28rpx!important;width:454rpx}.replacement_box .up-photo-acted{height:640rpx;margin-top:80rpx!important;width:500rpx}.replacement_box .up-photo-copy{align-items:center;display:-webkit-flex;display:flex;flex-flow:column;height:100%;justify-content:center;width:100%}.replacement_box .up-photo{background-image:url('https://eshopfile.zhiyousx.com/173744312766705168.png');background-repeat:no-repeat;background-size:100% 100%;margin:0 auto;position:relative;text-align:center}.replacement_box .up-photo .image{height:380rpx;width:280rpx}.replacement_box .up-photo .text{color:#cf4e4e;font-family:Alibaba PuHuiTi;font-size:26rpx;font-style:normal;font-weight:400;line-height:40rpx;margin:40rpx auto 0;text-align:center;text-transform:none;width:340rpx}.replacement_box .up-photo .image-logo{border-radius:14rpx;height:590rpx;margin:25rpx;width:450rpx}.replacement_box .up-photo .image-logo1{border-radius:14rpx;height:510rpx;margin:25rpx;width:404rpx}.replacement_box .loading-box{background-color:rgba(0,0,0,.6);height:100%;position:fixed;top:0;width:100%;z-index:10}.replacement_box .loading-box .loading-warp{bottom:0;height:500rpx;left:0;margin:auto;position:absolute;right:0;text-align:center;top:0;width:350rpx}.replacement_box .loading-box .loading-top{animation:play-sprite-data-v-2f6e3365 2s steps(60) infinite;background-image:url('https://eshopfile.zhiyousx.com/173746216010747207.png');background-repeat:no-repeat;background-size:10980px 180px;height:180px;width:180px}@-webkit-keyframes play-sprite-data-v-2f6e3365{from{background-position-x:0}to{background-position-x:-10800px}}@keyframes play-sprite-data-v-2f6e3365{from{background-position-x:0}to{background-position-x:-10800px}}.replacement_box .loading-bottom{height:96rpx;margin-top:25rpx;width:181rpx}.replacement_header-icon{bottom:18px;height:68rpx;position:absolute;right:0;width:222rpx}
</style>
