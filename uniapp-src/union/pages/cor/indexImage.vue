<template>
<view class="cor-warp">
    <uni-navbar class="" style="z-index:99;" type="transparentFixed"></uni-navbar>
    <view class="pop-class">
        <camera class="pop-class-camera" devicePosition="back" flash="off" mode="normal" style="height:100vh;" v-if="!showImage">
            <cover-image mode class="cover-image" src="https://eshopfile.zhiyousx.com/173943158128240662.png"></cover-image>
        </camera>
        <image class="" mode="aspectFit" :src="showImage" style="height:100vh;width:100%;" v-else></image>
        <view class="pop-class-mask" v-if="!showImage"></view>
        <view class="pop-class-mask-active" v-else></view>
        <view class="bg-warp" v-if="!showImage">请将身份证人像面与边框对齐</view>
    </view>
    <view class="bottom font-36-fff">
        <view class="wrap">
            <view class="back" @click="close($event)">取消</view>
            <view class="" @click="checkCameraPermissionAndTakePhoto($event)">
                <image class="w131-h131" src="https://eshopfile.zhiyousx.com/173943394286707019.png"></image>
            </view>
            <view class="" @click="chooseImage($event)">
                <image mode class="image-size" src="https://eshopfile.zhiyousx.com/173942091731716228.png"></image>
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
            return {
              cameraContext: null,
              index: "",
              showImage: "",
              indexed: ""
            }
          },
          onShow: function() {},
          onLoad: function(n) {
            this.index = n.i || !1, this.indexed = n.ind || !1, this.cameraContext = e.createCameraContext()
          },
          onUnload: function() {
            this.showImage = ""
          },
          methods: {
            ocrFun: function() {
              this.showHide = !0
            },
            close: function() {
              uni.navigateBack({
                delta: 1
              })
            },
            iiiiiii: function() {
              var n = getCurrentPages(),
                a = n[n.length - 2];
              console.log(a, "上一页对象1"), a.$vm.setDataInfos({
                name: 11111111,
                idCarNo: 0x3fdc72ad69268
              }, this.index, this.indexed), uni.navigateBack({
                delta: 1
              })
            },
            checkCameraPermissionAndTakePhoto: function() {
              var n = this;
              e.getSetting({
                success: function(a) {
                  a.authSetting["scope.camera"] ? n.takePhoto() : e.authorize({
                    scope: "scope.camera",
                    success: function() {
                      n.takePhoto()
                    },
                    fail: function(n) {
                      "authorize:fail auth deny" === n.errMsg || "authorize:fail:auth deny" === n.errMsg ? uni.showModal({
                        title: "授权提示",
                        content: "您拒绝了相机授权，如需使用相机功能，请在设置中开启。",
                        confirmText: "去设置",
                        success: function(n) {
                          n.confirm && (uni.navigateBack({
                            delta: 1
                          }), e.openSetting({
                            success: function(e) {},
                            fail: function(e) {
                              console.error("打开设置页面失败:", e)
                            }
                          }))
                        }
                      }) : console.error("请求授权失败:", n)
                    }
                  })
                },
                fail: function(e) {
                  console.error("获取授权状态失败:", e)
                }
              })
            },
            takePhoto: function() {
              var n = this;
              this.cameraContext.takePhoto({
                quality: "normal",
                success: function(t) {
                  uni.showLoading({
                    title: "识别中",
                    mask: !0
                  }), console.log(t, "拍照结果"), a.getFileSystemManager().readFile({
                    filePath: t.tempImagePath,
                    encoding: "base64",
                    success: function(e) {
                      console.log(e, "图片 base64 数据"), n.identify(e.data)
                    },
                    fail: function(n) {
                      uni.showToast({
                        title: "读取图片失败，请稍后重试",
                        icon: "none",
                        duration: 1200
                      }), console.log("读取图片文件失败", n), uni.hideLoading()
                    }
                  })
                },
                fail: function(n) {
                  uni.showToast({
                    title: "拍照失败，请检查系统是否授权",
                    icon: "none",
                    duration: 1200
                  }), console.log("图片拍照失败", n)
                }
              })
            },
            chooseImage: function() {
              var n = this,
                a = this;
              uni.chooseImage({
                count: 1,
                sizeType: ["compressed"],
                sourceType: ["album"],
                success: function(t) {
                  console.log("相册选取成功", t), n.showImage = t.tempFilePaths[0], uni.showLoading({
                    title: "识别中",
                    mask: !0
                  }), n.upLoad(t.tempFilePaths[0]).then((function(e) {
                    console.log(e, "图片上传结果"), a.identify(e, "url")
                  })).catch((function(a) {
                    n.showImage = "", uni.showToast({
                      title: "识别失败，请重新识别或手动填写",
                      icon: "none",
                      duration: 1200
                    }), uni.hideLoading()
                  }))
                },
                fail: function(n) {
                  uni.hideLoading(), console.log("相册选取失败", n)
                }
              })
            },
            upLoad: function(n) {
              return new Promise((function(a, t) {
                uni.uploadFile({
                  url: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
                  filePath: n,
                  name: "images",
                  success: function(e) {
                    console.log(e, "文件上传响应");
                    try {
                      var n = JSON.parse(e.data);
                      1 === n.code && n.data && n.data[0] && a(n.data[0].maxImageUrl)
                    } catch (e) {
                      t(new Error("解析服务器响应数据失败"))
                    }
                  },
                  fail: function(e) {
                    console.error("upload fail:", e), t(e)
                  }
                })
              }))
            },
            identify: function(n, t) {
              var o;
              o = t ? {
                img_url: n,
                data_type: 3,
                ocr_type: 1
              } : {
                img_data: n,
                data_type: 2,
                ocr_type: 1
              };
              var i = this,
                c = getCurrentPages();
              a.serviceMarket.invokeService({
                service: "wx79ac3de8be320b71",
                api: "OcrAllInOne",
                data: o
              }).then((function(n) {
                if (uni.hideLoading(), console.log("invokeService success", n), c.length > 1) {
                  var a = c[c.length - 2];
                  console.log(a, "上一页对象1"), n && n.data && n.data.idcard_res && n.data.idcard_res.name && n.data.idcard_res.id && n.data.idcard_res.name.text && n.data.idcard_res.id.text ? a.$vm.setDataInfos({
                    name: n.data.idcard_res.name.text,
                    idCarNo: n.data.idcard_res.id.text
                  }, i.index, i.indexed) : a.$vm.setDataInfos(!1), uni.navigateBack({
                    delta: 1
                  })
                }
              })).catch((function(n) {
                if (uni.hideLoading(), console.error("invokeService fail------", n), c.length > 1) {
                  var a = c[c.length - 2];
                  console.log(a, "上一页对象"), a.$vm.setDataInfos(!1)
                }
                uni.navigateBack({
                  delta: 1
                })
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.pop-class{z-index:10}.pop-class-mask::before{border-radius:16rpx;box-shadow:0 0 0 999vw rgba(0,0,0,.5);content:"";height:380rpx;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:600rpx}.pop-class-mask-active{background-color:rgba(0,0,0,.5);height:100vh;left:0;position:absolute;top:0;width:100%}.font-36-fff{bottom:0;padding:0 100rpx env(safe-area-inset-bottom);position:fixed;width:100%;z-index:99}.font-36-fff .w131-h131{height:100rpx;width:100rpx}.font-36-fff .wrap{align-items:center;color:#fff;display:-webkit-flex;display:flex;justify-content:space-between}.back-color,.back{color:#fff}.image-size{height:50rpx;margin-top:2rpx;width:50rpx}.warp-box{height:100vh;left:0;position:fixed;top:0;width:100%}.bg-warp{align-items:flex-end;color:#fff;display:-webkit-flex;display:flex;font-size:34rpx;justify-content:center;line-height:100rpx;position:absolute;text-align:center;top:calc(50% - 100rpx - 190rpx);width:100%}.bg-count{display:-webkit-flex;display:flex;height:380rpx;justify-content:space-between;width:750rpx}.cor-warp{background-color:rgba(0,0,0,.5);height:100vh;width:100%}.cover-image{height:232rpx;left:calc(90% - 252rpx);position:absolute;top:calc(50% - 144rpx);width:206rpx}
</style>
