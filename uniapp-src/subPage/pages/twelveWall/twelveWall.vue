<template>
<view class="photoWall">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="top-box">
        <image mode class="top-bg" src="https://eshopfile.zhiyousx.com/twelveWall/top-bg.png"></image>
        <image mode class="user-title" src="https://eshopfile.zhiyousx.com/twelveWall/user-title.png"></image>
        <image mode class="title-img" src="https://eshopfile.zhiyousx.com/twelveWall/title-img.png"></image>
        <image mode class="tip-but1" src="https://eshopfile.zhiyousx.com/twelveWall/jumpSpot.png" @click="jumpSpot($event)"></image>
        <image mode class="tip-but2" src="https://eshopfile.zhiyousx.com/twelveWall/selected.png" @click="jumpSelection($event)"></image>
    </view>
    <view class="imgList-box">
        <u-waterfall addTime="50" class=" vue-ref" ref="uWaterfall" data-vue-generic="scoped" :value="flowList" :vueSlots="['right','left']" @input="flowList = $event"></u-waterfall>
    </view>
    <image mode class="bottom-box" src="https://eshopfile.zhiyousx.com/twelveWall/bottom-bg.png"></image>
    <image mode class="uploadImg" src="https://eshopfile.zhiyousx.com/twelveWall/uploadImg.png" @click="uploadImg($event)"></image>
    <u-popup class=" vue-ref" ref="uPopup" mode="center" :value="showNotice" :vueSlots="['default']" @input="showNotice = $event">
        <view class="notice-box">
            <view class="notice-info">
                <view class="notice-title">照片使用权协议</view>
                <view class="notice-body">
                    <view class="p">1、上传图片照片请包含人像，以更能体现十二时辰的美为宜；</view>
                    <view class="p">2、每月评选3位月度之星，可以获得十二时辰免费入园机会，工作人员将与你联系；</view>
                    <view class="p">3、所有的月度之星，将有机会获得十二时辰随后活动的免费体验资格；</view>
                    <view class="p">4、如不希望照片被选作精选展示，请联系游陕西平台删除；</view>
                    <view class="p">5、参与活动即视为同意长安十二时辰主题街区及游陕西使用该照片作为宣传使用，游陕西平台对此次活动拥有最终解释权。</view>
                </view>
                <view class="notice-but" @click="agree($event)">我已阅读并同意</view>
            </view>
        </view>
    </u-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              showNotice: !1,
              imgurl: "",
              flowList: [],
              unit: 0,
              list: [],
              current: 1,
              size: 5,
              scenicId: getApp().globalData.photoWallScenicId,
              loadMore: "loading",
              userImageList: [],
              uploadType: !1
            }
          },
          onLoad: function() {
            this.getPhotoList()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore ? 0 == this.uploadType && this.getPhotoList() : "nomore" === this.loadMore && uni.showToast({
              title: "没有更多咯",
              icon: "none"
            })
          },
          watch: {
            flowList: function(e) {
              (this.uploadType = !0) && (this.userImageList.length + e.length >= this.userImageList.length + this.size && (this.uploadType = !1))
            }
          },
          onShareAppMessage: function() {
            return {
              title: "上传最美打卡照，做长安十二时辰每月之星，赢活动好礼",
              imageUrl: "https://eshopfile.zhiyousx.com/photoWall/twelveWallShare.jpg",
              path: this.$util.setShareUrl("/subPage/pages/twelveWall/twelveWall")
            }
          },
          onShareTimeline: function() {
            return {
              title: "上传最美打卡照，做长安十二时辰每月之星，赢活动好礼",
              imageUrl: "https://eshopfile.zhiyousx.com/twelveWall/shareTimeline.png",
              query: this.$util.setShareTimeline("")
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          filters: {
            nickNameFilter: function(e) {
              if (!e.nickName) {
                var t = e.mobilePhone.toString();
                return t.replace(t.substring(3, 7), "****")
              }
              e.nickName
            }
          },
          methods: {
            getPhotoList: function() {
              var e = this,
                t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotUserPic/selectIndexScenicSpotUserPic?scenicId=".concat(t.scenicId, "&current=").concat(t.current, "&size=").concat(t.size)).then((function(i) {
                if (1 == i.code) {
                  var n = i.data.records;
                  i.data.total > 0 ? (t.setWatterFall(n), i.data.current < i.data.pages ? (e.current = e.current + 1, e.loadMore = "loadmore") : e.loadMore = "nomore") : (e.loadMore = "nomore", e.imgList = [])
                } else t.$uni.showToast(i.msg)
              }))
            },
            setWatterFall: function(e) {
              var t = this;
              e.forEach((function(e) {
                if ((e = JSON.parse(JSON.stringify(e))).showType = e.splitPicHeight / e.splitPicWeight, !e.nickName && e.mobilePhone) {
                  var i = e.mobilePhone.toString();
                  e.nickName = i.replace(i.substring(3, 7), "****")
                } - 1 == e.nickName.indexOf("@") && (e.nickName = "@" + e.nickName), t.flowList.push(e)
              }))
            },
            jumpSelection: function() {
              this.$navigateTo({
                url: "/subPage/pages/monthlySelection/monthlySelection?scenicId=" + this.scenicId
              })
            },
            jumpSpot: function() {
              this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + this.scenicId
              })
            },
            uploadImg: function() {
              this.$util.isLogin() && (this.agreeMent ? this.chooseImg() : this.$refs.uPopup.open())
            },
            agree: function() {
              this.showNotice = !1, this.agreeMent = !0, this.chooseImg()
            },
            setImg: function(e) {
              var t = this;
              this.$refs.uWaterfall.clear(), this.flowList = [], this.uploadType = !0;
              var n = {};
              i.getImageInfo({
                src: e,
                success: function(i) {
                  if (n.showType = i.height / i.width, n.nickName = t.userInfo.nickName, n.splitPicUrl = e, n.mobilePhone = t.userInfo.mobilePhone, !n.nickName) {
                    var o = n.mobilePhone.toString();
                    n.nickName = o.replace(o.substring(3, 7), "****")
                  } - 1 == n.nickName.indexOf("@") && (n.nickName = "@" + n.nickName), t.userImageList.unshift(n), t.userImageList.forEach((function(e, i) {
                    e = JSON.parse(JSON.stringify(e)), t.flowList.push(e), i == t.userImageList.length - 1 && setTimeout((function() {
                      t.current = 1, t.getPhotoList()
                    }), 10)
                  }))
                }
              })
            },
            setWaterfAllFrist: function(e) {
              var t = {},
                n = this;
              n.current = 1, n.$refs.uWaterfall.clear(), n.flowList = [], i.getImageInfo({
                src: e,
                success: function(i) {
                  if (t.showType = i.height / i.width, t.nickName = n.userInfo.nickName, t.splitPicUrl = e, t.mobilePhone = n.userInfo.mobilePhone, !t.nickName) {
                    var o = t.mobilePhone.toString();
                    t.nickName = o.replace(o.substring(3, 7), "****")
                  }
                  n.flowList.push(t)
                }
              })
            },
            addScenicSpotUserPic: function(e) {
              var t = this,
                i = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotUserPic/addScenicSpotUserPic?scenicId=" + this.scenicId + "&splitPicUrl=" + e).then((function(n) {
                1 == n.code ? (t.$uni.showToast("上传成功，待小编审核后就可以看见啦"), i.setImg(e)) : t.$uni.showToast(n.msg)
              }))
            },
            chooseImg: function(t) {
              var n = this;
              uni.chooseImage({
                count: 1,
                sizeType: ["compressed"],
                sourceType: ["album", "camera"],
                success: function(t) {
                  var o = t.tempFilePaths;
                  i.editImage({
                    src: o[0],
                    success: function(t) {
                      uni.showLoading({
                        title: "加载中"
                      }), n.upLoadFile(t.tempFilePath).then((function(t) {
                        t && (uni.hideLoading(), n.imgurl = t, n.addScenicSpotUserPic(t))
                      }))
                    }
                  })
                }
              })
            },
            upLoadFile: function(t) {
              var n = i.getFileSystemManager();
              return new Promise((function(i) {
                n.readFile({
                  filePath: t,
                  position: 0,
                  success: function(n) {
                    var o = this;
                    console.log(n), uni.uploadFile({
                      url: getApp().globalData.requestUrl + "base/common/file/noLimitUpload",
                      filePath: t,
                      name: "file",
                      formData: {
                        file: n.data
                      },
                      success: function(e) {
                        var t = JSON.parse(e.data);
                        1 == t.code && t.data && t.data.fileUrl ? i(t.data.fileUrl) : (i(!1), o.$uni.showToast(t.msg))
                      }
                    })
                  },
                  fail: function(e) {
                    i(!1)
                  }
                })
              }))
            },
            priview: function(e) {
              var t = e.currentTarget.dataset.it.splitPicUrl;
              uni.previewImage({
                current: t,
                urls: [t]
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
image{background-size:100% 100%}.photoWall{background:linear-gradient(90deg,#529387,#51b7a4 51%,#529387);border-radius:0 0 0 0;min-height:100vh;padding-bottom:532rpx;position:relative;width:750rpx}.photoWall .notice-box{background-image:url('https://eshopfile.zhiyousx.com/twelve/notice-bg.png');background-size:100% 100%;height:743rpx;width:657rpx}.photoWall .notice-box .notice-info{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:743rpx;width:657rpx}.photoWall .notice-box .notice-info .notice-title{color:#a64115;font-size:36rpx;font-weight:700;line-height:54rpx;margin-top:55rpx}.photoWall .notice-box .notice-info .notice-body{margin-top:30rpx;min-height:436rpx;width:527rpx}.photoWall .notice-box .notice-info .notice-body .p{color:#4f4f4f;font-size:24rpx;line-height:40rpx;margin-bottom:5rpx;text-align:justify}.photoWall .notice-box .notice-info .notice-but{background-image:url('https://eshopfile.zhiyousx.com/twelve/notice-but.png');background-size:100% 100%;color:#ffeaa0;font-size:28rpx;height:91rpx;letter-spacing:5rpx;line-height:80rpx;margin-top:38rpx;text-align:center;text-shadow:0 4rpx 4rpx rgba(0,0,0,.25);width:393rpx}.photoWall .u-mode-center-box{background-color:initial!important}.photoWall .top-box{position:relative}.photoWall .top-box .top-bg{height:1189rpx;width:750rpx}.photoWall .top-box .user-title{height:302rpx;left:35rpx;position:absolute;top:190rpx;width:680rpx}.photoWall .top-box .title-img{bottom:144rpx;height:108.44rpx;left:119rpx;position:absolute;width:511.66rpx}.photoWall .top-box .tip-but1{height:77rpx;position:absolute;right:0;top:500rpx;width:344rpx;z-index:10}.photoWall .top-box .tip-but2{height:77rpx;position:absolute;right:0;top:590rpx;width:344rpx;z-index:10}.photoWall .imgList-box{margin-left:50rpx;margin-top:-105rpx;min-height:300rpx;width:650rpx;z-index:5}.photoWall .imgList-box .waterfall-box{display:-webkit-flex;display:flex}.photoWall .imgList-box .waterfall-box .itemList{height:100%;width:50%}.photoWall .imgList-box .waterfall-item{margin-bottom:20rpx;position:relative;width:317rpx}.photoWall .imgList-box .waterfall-item.left{padding-right:9rpx}.photoWall .imgList-box .waterfall-item.right{padding-left:9rpx}.photoWall .imgList-box .waterfall-item .img-box{align-items:center;background:linear-gradient(139deg,#a59b77,#f6ecbb 40%,#f6ecbb 60%,#ac9e78);border-radius:20rpx;box-shadow:0 10rpx 20rpx 1px rgba(11,101,121,.3);box-sizing:border-box;display:-webkit-flex;display:flex;justify-content:center;padding:6rpx;width:317rpx}.photoWall .imgList-box .waterfall-item .img-box .item-img{border-radius:18rpx;width:305rpx}.photoWall .imgList-box .waterfall-item .img-box .square{height:305rpx;width:305rpx}.photoWall .imgList-box .waterfall-item .userName-box{bottom:10rpx;display:-webkit-flex;display:flex;justify-content:center;left:0;position:absolute;width:100%}.photoWall .imgList-box .waterfall-item .userName-box .userName{background:rgba(0,0,0,.5);border-radius:10rpx;color:#fff;font-size:24rpx;height:49rpx;line-height:49rpx;max-width:290rpx;overflow:hidden;padding:0 10rpx;text-align:center;text-overflow:ellipsis;white-space:nowrap}.photoWall .imgList-box .waterfall-item .userName-box .userName.l{margin-left:-8rpx}.photoWall .imgList-box .waterfall-item .userName-box .userName.r{margin-right:-8rpx}.photoWall .bottom-box{bottom:0;height:532rpx;left:0;position:absolute;width:750rpx}.photoWall .uploadImg{bottom:100rpx;height:119rpx;left:176rpx;position:fixed;width:399rpx}
</style>
