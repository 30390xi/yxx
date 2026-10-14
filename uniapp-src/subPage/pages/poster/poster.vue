<template>
<view class="posterwall">
    <view class="showbox">
        <view class="content">
            <image class="main" mode="aspectFill" :src="imgurl"></image>
            <image class="block" :src="actTemp.turl" :style="'width:'+actTemp.t_w+'rpx'+';'+'height:'+actTemp.t_h+'rpx'+';'+'left:'+actTemp.t_l+'rpx'+';'+'top:'+actTemp.t_t+'rpx'+';'"></image>
            <image class="block" :src="actTemp.furl" :style="'width:'+actTemp.f_w+'rpx'+';'+'height:'+actTemp.f_h+'rpx'+';'+'right:'+actTemp.f_r+'rpx'+';'+'bottom:'+actTemp.f_b+'rpx'+';'"></image>
        </view>
    </view>
    <view class="btns flex">
        <view class="btn">
            <view class="flex" @click="saveImg($event)">保存到相册</view>
        </view>
        <view class="btn">
            <view class="flex" @click="complate($event)">完成</view>
        </view>
    </view>
    <view class="template flex">
        <view class="card" v-for="(item, index) in templates">
            <image :class="['','t'+index+1]" mode="widthFix" :src="item.turl"></image>
            <image :class="['','a'+index+1]" mode="widthFix" :src="item.furl"></image>
        </view>
    </view>
    <view class="nouse" @click="noUseTemp($event)">不使用贴纸</view>
    <l-painter class=" vue-ref" css="width: 275rpx; height:320rpx;position:fixed;bottom:0;left:0;" customStyle="position: fixed; left:-200%;top:0;" ref="painter" fileType="jpg" :isCanvasToTempFilePath="true" :vueSlots="['default']" @success="e0()">
        <l-painter-view class="" css="position:relative;width:100%;height:100%;" :vueSlots="['default']">
            <l-painter-image class="" css="object-fit: cover; object-position: 50% 50%;width:275rpx;height:320rpx;" :src="printObj.imgurl"></l-painter-image>
            <l-painter-image class="" :css="'object-fit: cover;position:absolute; object-position: 50% 50%;width:'+printObj.t_w/2+'rpx;height:'+printObj.t_h/2+'rpx;left:'+printObj.t_l/2+'rpx;top:'+printObj.t_t/2+'rpx;z-index:6;'" :src="printObj.turl"></l-painter-image>
            <l-painter-image class="" :css="'object-fit: cover;position:absolute; object-position: 50% 50%;width:'+printObj.f_w/2+'rpx;height:'+printObj.f_h/2+'rpx;right:'+printObj.f_r/2+'rpx;bottom:'+printObj.f_b/2+'rpx;z-index:6;'" :src="printObj.furl"></l-painter-image>
        </l-painter-view>
    </l-painter>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              imgurl: "",
              postUrl: "",
              templates: [{
                turl: "https://eshopfile.zhiyousx.com/2022032914485761116.png",
                t_w: 244,
                t_h: 132,
                t_t: 31,
                t_l: 19,
                furl: "https://eshopfile.zhiyousx.com/2022032914492488402.png",
                f_w: 162,
                f_h: 95,
                f_b: 19,
                f_r: 15
              }, {
                turl: "https://eshopfile.zhiyousx.com/2022032914500320590.png",
                t_w: 243,
                t_h: 212,
                t_t: 19,
                t_l: 19,
                furl: "https://eshopfile.zhiyousx.com/2022032914501563224.png",
                f_w: 102,
                f_h: 162,
                f_b: 2,
                f_r: 18
              }, {
                turl: "https://eshopfile.zhiyousx.com/2022032914503192191.png",
                t_w: 266,
                t_h: 128,
                t_t: 19,
                t_l: 269,
                furl: "https://eshopfile.zhiyousx.com/2022032914504243591.png",
                f_w: 122,
                f_h: 166,
                f_b: 11,
                f_r: 409
              }, {
                turl: "https://eshopfile.zhiyousx.com/2022032914505798627.png",
                t_w: 193,
                t_h: 142,
                t_t: 19,
                t_l: 342,
                furl: "https://eshopfile.zhiyousx.com/2022032914510933554.png",
                f_w: 85,
                f_h: 180,
                f_b: 1,
                f_r: 446
              }],
              actTemp: {},
              printObj: {},
              tempUlr: "",
              originId: "",
              type: "",
              originUrl: ""
            }
          },
          onLoad: function(t) {
            var i = this,
              e = this;
            this.imgurl = t.url || "https://eshopfile.zhiyousx.com/2022032910191481754.png", t.origin && this.upLoadFile(t.origin).then((function(t) {
              t && (i.originUrl = t, e.submitOriginal(t, "1"))
            }))
          },
          onShow: function() {
            this.originUrl && (this.type = "", this.submitOriginal(this.originUrl, "1"))
          },
          created: function() {},
          watch: {
            postUrl: function(t) {
              var i = this;
              if ("save" == this.type && this.getwritePhotosAlbum(t), "complete" == this.type) var e = setInterval((function() {
                i.originUrl && !i.originId ? i.submitOriginal(i.originUrl, "1") : i.originId && (clearInterval(e), i.upLoadFile(t).then((function(t) {
                  t && i.submitOprate(t)
                })))
              }), 500)
            }
          },
          methods: {
            complate: function() {
              uni.showLoading(), this.type = "complete";
              var i = {};
              i.imgurl = this.imgurl, i = Object.assign(i, this.actTemp), this.printObj = i
            },
            submitOriginal: function(i, e) {
              var n = this,
                o = {
                  originalPicUrl: i,
                  scenicId: e
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotPicActiveRel/saveOriginalPic", o).then((function(t) {
                1 == t.code && (n.originId = t.data)
              })).catch((function(i) {
                uni.hideLoading(), n.$uni.showToast("上传失败，请重新尝试")
              }))
            },
            submitOprate: function(i) {
              var e = this,
                n = {
                  splitPicUrl: i,
                  id: this.originId
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1//scenicSpotPicActiveRel/saveSplitPicUrl", n).then((function(i) {
                uni.hideLoading(), 1 == i.code ? (e.$uni.showToast("保存成功"), uni.redirectTo({
                  url: "/subPage/pages/pictureWall/pictureWall?userpic=" + e.postUrl
                })) : e.$uni.showToast(i.msg)
              })).catch((function(i) {
                uni.hideLoading()
              }))
            },
            noUseTemp: function() {
              this.type = "", this.postUrl = "", this.actTemp = {}
            },
            chooseTemp: function(t) {
              this.type = "", this.postUrl = "", this.actTemp = t
            },
            upLoadFile: function(i) {
              var n = e.getFileSystemManager();
              return new Promise((function(e) {
                n.readFile({
                  filePath: i,
                  position: 0,
                  success: function(n) {
                    console.log(n), uni.uploadFile({
                      url: getApp().globalData.requestUrl + "base/common/file/noLimitUpload",
                      filePath: i,
                      name: "file",
                      formData: {
                        file: n.data
                      },
                      success: function(t) {
                        var i = JSON.parse(t.data);
                        1 == i.code && i.data && i.data.fileUrl ? e(i.data.fileUrl) : e(!1)
                      }
                    })
                  },
                  fail: function(t) {
                    e(!1)
                  }
                })
              }))
            },
            saveImg: function() {
              if (uni.showLoading(), "save" == this.type && this.postUrl) this.getwritePhotosAlbum(this.postUrl);
              else {
                this.type = "save";
                var i = {};
                i.imgurl = this.imgurl, i = Object.assign(i, this.actTemp), this.printObj = i
              }
            },
            getwritePhotosAlbum: function(i) {
              var n = this;
              t.getSetting({
                success: function(o) {
                  o.authSetting["scope.writePhotosAlbum"] ? (uni.hideLoading(), n.saveimgtoAlbum(i)) : t.authorize({
                    scope: "scope.writePhotosAlbum",
                    success: function() {
                      n.saveimgtoAlbum(i)
                    },
                    fail: function() {
                      n.type = "", n.printObj = {}, uni.hideLoading(), uni.showModal({
                        title: "提示",
                        content: "您未授权相册，功能将无法使用",
                        showCancel: !0,
                        confirmText: "授权",
                        confirmColor: "#52a2d8",
                        success: function(i) {
                          i.confirm && t.openSetting({
                            success: function(i) {
                              i.authSetting["scope.writePhotosAlbum"] ? uni.showToast({
                                title: "您已授权成功，请重新保存",
                                icon: "success",
                                duration: 2e3
                              }) : uni.showToast({
                                title: "尚未授权，无法保存",
                                icon: "none",
                                duration: 2e3
                              })
                            }
                          })
                        },
                        fail: function() {
                          uni.hideLoading(), n.type = "", n.printObj = {}
                        }
                      })
                    }
                  })
                },
                fail: function(i) {
                  n.type = "", n.printObj = {}, uni.hideLoading()
                }
              })
            },
            saveimgtoAlbum: function(i) {
              var e = this;
              t.saveImageToPhotosAlbum({
                filePath: i,
                success: function(i) {
                  uni.hideLoading(), e.type = "", e.printObj = {}, uni.showToast({
                    title: "保存成功",
                    icon: "success",
                    duration: 2e3
                  })
                },
                complete: function(i) {
                  uni.hideLoading(), e.type = "", e.printObj = {}, console.log(i)
                }
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.posterwall{background:linear-gradient(180deg,#339a81,#f0fbc4);min-height:100vh;padding:20rpx 55rpx 74rpx}.posterwall .flex{display:-webkit-flex;display:flex}.posterwall .showbox{border-radius:50rpx;box-shadow:0 4rpx 30rpx 1rpx rgba(69,255,166,.2),0rpx 0rpx 4rpx 1rpx #fff,inset 0 0 40rpx 1px rgba(0,152,97,.7);height:728rpx;padding:44rpx 45rpx}.posterwall .showbox .content{border-radius:20rpx;height:100%;overflow:hidden;position:relative;width:100%}.posterwall .showbox .content .main{height:100%;width:100%}.posterwall .showbox .content .block{position:absolute;z-index:6}.posterwall .btns{justify-content:space-between;margin-top:30rpx}.posterwall .btns .btn{background:hsla(0,0%,100%,.01);border-radius:85rpx;box-shadow:inset 0 20rpx 10rpx 1rpx hsla(0,0%,100%,.2),0 10rpx 20rpx 1rpx rgba(34,177,126,.1),0-10rpx 20rpx 1rpx hsla(0,0%,100%,.2),inset 0-6rpx 10rpx 1rpx rgba(88,183,137,.5);flex:1;height:106rpx;padding:16rpx 14rpx}.posterwall .btns .btn view{align-items:center;background:#fa8e10;border-radius:70rpx;box-shadow:inset 0 10rpx 20rpx 1rpx hsla(0,0%,100%,.5),0 1rpx 10rpx 1px rgba(17,109,176,.2),0-2rpx 10rpx 1rpx hsla(0,0%,100%,.2),inset 0-10rpx 30rpx 1px rgba(14,125,188,.5);color:#fff;font-size:28rpx;height:100%;justify-content:center;text-shadow:0 4px 4px rgba(61,61,61,.3),0-4px 4px hsla(0,0%,100%,.2);width:100%}.posterwall .template{justify-content:space-between;margin:74rpx 0 40rpx}.posterwall .template .card{background:hsla(0,0%,100%,.1);border-radius:10rpx;box-shadow:0 4rpx 30rpx 1rpx rgba(69,255,166,.2),0 0 4rpx 1rpx #fff,inset 0 0 40rpx 1rpx rgba(0,152,97,.7);height:190rpx;position:relative;width:134rpx}.posterwall .template .card image{position:absolute}.posterwall .template .card .t1{left:19rpx;top:23rpx;width:100rpx}.posterwall .template .card .t2{left:29rpx;top:15rpx;width:86rpx}.posterwall .template .card .t3{left:17rpx;top:16rpx;width:108rpx}.posterwall .template .card .t4{left:21rpx;top:10rpx;width:91rpx}.posterwall .template .card .a1{bottom:37rpx;left:17rpx;width:100rpx}.posterwall .template .card .a2{bottom:21rpx;left:37rpx;width:58rpx}.posterwall .template .card .a3{bottom:22rpx;left:34rpx;width:66rpx}.posterwall .template .card .a4{bottom:21rpx;left:43rpx;width:47rpx}.posterwall .nouse{color:#39a486;font-size:28rpx;text-align:center}
</style>
