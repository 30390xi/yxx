<template>
<view class="photoWall" :style="'background:'+'linear-gradient(90deg, '+configData.pageTopColor+' 0%, '+configData.pageBottomColor+' 51%, '+configData.pageTopColor+' 100%)'+';'">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="top-box">
        <image class="top-bg" mode="widthFix" :src="configData.pageTopUrl" v-if="configData.pageTopUrl"></image>
        <image class="user-title" mode="widthFix" :src="configData.pageOtherUrl" v-if="configData.pageOtherUrl"></image>
        <image class="title-img" mode="widthFix" :src="configData.titlePicUrl" v-if="configData.titlePicUrl"></image>
        <view class="broadsides" v-if="configData.photoWallBroadsides&&configData.photoWallBroadsides[0]">
            <image class="tip-but" mode="widthFix" :src="it.advertPicUrl" v-for="(it, __i0__) in configData.photoWallBroadsides"></image>
        </view>
    </view>
    <view class="imgList-box">
        <u-waterfall addTime="50" class=" vue-ref" ref="uWaterfall" data-vue-generic="scoped" :value="flowList" :vueSlots="['right','left']" @input="flowList = $event"></u-waterfall>
    </view>
    <image class="bottom-box" mode="widthFix" :src="configData.pageBottomUrl"></image>
    <image class="uploadImg" mode="widthFix" :src="configData.buttonUrl" @click="uploadImg($event)"></image>
    <u-popup class=" vue-ref" ref="uPopup" mode="center" :value="showNotice" :vueSlots="['default']" @input="showNotice = $event">
        <view class="notice-box" :style="'background-image:'+'url('+configData.agreementUrl+')'+';'+'height:'+agreementUrlHeight+';'">
            <view class="notice-info">
                <view class="notice-title" :style="'color:'+configData.fontColor+';'">照片使用权协议</view>
                <scroll-view class="notice-body" :scrollWithAnimation="true" :scrollY="true" :style="'height:'+infoHeight+';'" v-if="configData.useAgreement&&configData.useAgreement[0]">
                    <view class="p _p" v-for="(text, __i1__) in $root.l0">{{text}}</view>
                </scroll-view>
                <image class="notice-but" mode="widthFix" :src="configData.agreementButtonUrl" @click="agree($event)"></image>
            </view>
        </view>
    </u-popup>
    <u-popup class="" mode="center" :value="showLottery" :vueSlots="['default']" @input="showLottery = $event">
        <view class="showLottery">
            <image class="showmsk" mode="widthFix" src="https://eshopfile.zhiyousx.com/2023092615575954239.png" @click="toLottery($event)"></image>
            <image class="btn" src="https://eshopfile.zhiyousx.com/2023092616100692105.png" @click="e0($event)"></image>
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
              showLottery: !1,
              showNotice: !1,
              imgurl: "",
              flowList: [],
              unit: 0,
              list: [],
              current: 1,
              size: 5,
              scenicId: "",
              photoWallId: "",
              loadMore: "loading",
              userImageList: [],
              uploadType: !1,
              configData: "",
              agreementUrlHeight: "750rpx",
              infoHeight: "436rpx"
            }
          },
          onLoad: function(t) {
            uni.showLoading({
              title: "加载中",
              mask: !0
            }), t.photoWallId && (this.photoWallId = t.photoWallId), this.getPhotoWallSetting()
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
            var e = "/subPack/pages/photoWall/photoWall?photoWallId=".concat(this.photoWallId);
            return {
              title: this.configData.shareRemark || "",
              imageUrl: this.configData.shareUrl || "",
              path: this.$util.setShareUrl(e)
            }
          },
          onShareTimeline: function() {
            var e = "photoWallId=".concat(this.photoWallId);
            return {
              title: this.configData.shareRemark || "",
              imageUrl: this.configData.shareFriendsUrl || "",
              query: this.$util.setShareTimeline(e),
              path: "subPack"
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
            toLottery: function() {
              this.$navigateTo({
                url: "/pages/webpage/webpage?url=".concat("https://eshop.zhiyousx.com/scgact/nationalDay*type+1")
              })
            },
            getPhotoWallSetting: function() {
              var e = this,
                t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/photoWallSetting/detail/".concat(t.photoWallId)).then((function(i) {
                1 == i.code ? (e.scenicId = i.data.scenicId, e.configData = i.data, e.getPhotoList(), e.getNoticeImageInfo(), e.getNoticeImageInfo1()) : t.$uni.showToast(i.msg)
              }))
            },
            getPhotoList: function() {
              var t = this,
                i = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotUserPic/selectIndexScenicSpotUserPic?scenicId=".concat(i.scenicId, "&current=").concat(i.current, "&size=").concat(i.size)).then((function(n) {
                if (uni.hideLoading(), 1 == n.code) {
                  var o = n.data.records;
                  n.data.total > 0 ? (i.setWatterFall(o), n.data.current < n.data.pages ? (t.current = t.current + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.imgList = [])
                } else i.$uni.showToast(n.msg)
              }))
            },
            setWatterFall: function(e) {
              var t = this,
                i = this;
              e.forEach((function(e) {
                if ((e = JSON.parse(JSON.stringify(e))).showType = e.splitPicHeight / e.splitPicWeight, !e.nickName && e.mobilePhone) {
                  var n = e.mobilePhone.toString();
                  e.nickName = n.replace(n.substring(3, 7), "****")
                } - 1 == e.nickName.indexOf("@") && (e.nickName = "@" + e.nickName), e.style = "linear-gradient(139deg, ".concat(t.configData.frameTopColor, " 0%, ").concat(t.configData.frameLeftColor, " 40%, ").concat(t.configData.frameBottomColor, " 60%, ").concat(t.configData.frameRightColor, " 100%);"), i.flowList.push(e)
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
                  } - 1 == n.nickName.indexOf("@") && (n.nickName = "@" + n.nickName), n.style = "linear-gradient(139deg, ".concat(t.configData.frameTopColor, " 0%, ").concat(t.configData.frameLeftColor, " 40%, ").concat(t.configData.frameBottomColor, " 60%, ").concat(t.configData.frameRightColor, " 100%);"), t.userImageList.unshift(n), t.userImageList.forEach((function(e, i) {
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
            getNoticeImageInfo: function() {
              var e = this;
              i.getImageInfo({
                src: e.configData.agreementUrl,
                success: function(t) {
                  e.agreementUrlHeight = t.height / t.width * 660 + "rpx"
                }
              })
            },
            getNoticeImageInfo1: function() {
              var e = this;
              i.getImageInfo({
                src: e.configData.agreementButtonUrl,
                success: function(t) {
                  e.infoHeight = 750 - t.height / t.width * 400 - 200 + "rpx"
                }
              })
            },
            addScenicSpotUserPic: function(e) {
              var t = this,
                i = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotUserPic/addScenicSpotUserPic?scenicId=" + this.scenicId + "&splitPicUrl=" + e).then((function(n) {
                1 == n.code ? (1 == n.data ? t.showLottery = !0 : t.$uni.showToast("上传成功，待小编审核后就可以看见啦"), setTimeout((function() {
                  i.setImg(e)
                }), 2e3)) : t.$uni.showToast(n.msg)
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
            },
            bannerClick: function(t) {
              5 != t.linkType && (this.showNotice = !1), 0 === t.linkType && t.linkUrl ? (-1 != t.linkUrl.indexOf("?") && (t.linkUrl = t.linkUrl.replace("?", "*"), t.linkUrl = t.linkUrl.replace("=", "+")), this.$navigateTo({
                url: "/pages/webpage/webpage?url=".concat(t.linkUrl)
              })) : 1 === t.linkType ? 1 === t.objType ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=".concat(t.linkUrl)
              }) : 4 === t.objType || 7 === t.objType || 8 === t.objType || 9 === t.objType ? this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=".concat(t.linkUrl)
              }) : 3 === t.objType ? this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=" + t.linkUrl
              }) : 2 === t.objType ? this.$util.cityJump(t.contentType, t.linkUrl) : 5 === t.objType && (["/pages/index/index", "/pages/spot_list/spot_list", "/pages/rankList/rankList", "/pages/mine/mine"].includes(t.linkUrlExtend) ? uni.switchTab({
                url: t.linkUrlExtend
              }) : this.$navigateTo({
                url: t.linkUrlExtend
              })) : 2 === t.linkType ? "wxf2cca76ae0520e33" == t.advertNo ? this.$navigateTo({
                url: t.linkUrl
              }) : e.openEmbeddedMiniProgram({
                appId: t.advertNo,
                path: t.linkUrl
              }) : 3 === t.linkType ? (uni.setStorageSync("richtext", t.linkUrl), this.$navigateTo({
                url: "/pages/richtext/richtext"
              })) : 8 == t.linkType && uni.navigateTo({
                url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=3&room_appid=wxf2cca76ae0520e33&amp;type=1&amp;share_openid=ojWxP5dKQbj5En3Vh8MDC23Y_J5k&amp;custom_params=&amp;close_picture_in_picture_mode=0&amp;open_share_ticket=0&amp;lottery_id=0"
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.showLottery{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:100vh;justify-content:center;width:580rpx}.showLottery .showmsk{width:100%}.showLottery .btn{height:70rpx;margin-top:70rpx;width:70rpx}image{background-size:100% 100%}.photoWall{background:linear-gradient(90deg,#529387,#51b7a4 51%,#529387);border-radius:0 0 0 0;min-height:100vh;padding-bottom:532rpx;position:relative;width:750rpx}.photoWall .notice-box{background-image:url('https://eshopfile.zhiyousx.com/twelve/notice-bg.png');background-size:100% 100%;height:750rpx;width:660rpx}.photoWall .notice-box .notice-info{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:750rpx;width:660rpx}.photoWall .notice-box .notice-info .notice-title{color:#a64115;font-size:36rpx;font-weight:700;line-height:55rpx;margin-top:55rpx}.photoWall .notice-box .notice-info .notice-body{height:436rpx;margin-top:30rpx;width:530rpx}.photoWall .notice-box .notice-info .notice-body .p{color:#696969;font-size:24rpx;line-height:40rpx;margin-bottom:5rpx;text-align:justify}.photoWall .notice-box .notice-info .notice-but{height:auto;margin-top:38rpx;width:400rpx}.photoWall .u-mode-center-box{background-color:initial!important}.photoWall .top-box{position:relative}.photoWall .top-box .top-bg{height:auto;width:750rpx}.photoWall .top-box .user-title{height:302rpx;left:35rpx;position:absolute;top:190rpx;width:680rpx}.photoWall .top-box .title-img{bottom:-100rpx;height:auto;left:175rpx;position:absolute;width:400rpx}.photoWall .top-box .broadsides{display:-webkit-flex;display:flex;flex-direction:column;justify-content:right;position:absolute;right:0;top:500rpx;width:300rpx;z-index:10}.photoWall .top-box .broadsides .tip-but{height:auto;width:300rpx}.photoWall .top-box .tip-but1{height:78rpx;position:absolute;right:0;top:500rpx;width:344rpx;z-index:10}.photoWall .top-box .tip-but2{height:77rpx;position:absolute;right:0;top:590rpx;width:344rpx;z-index:10}.photoWall .imgList-box{margin-left:50rpx;margin-top:140rpx;min-height:300rpx;position:relative;width:650rpx;z-index:5}.photoWall .imgList-box .waterfall-box{display:-webkit-flex;display:flex}.photoWall .imgList-box .waterfall-box .itemList{height:100%;width:50%}.photoWall .imgList-box .waterfall-item{margin-bottom:20rpx;position:relative;width:317rpx}.photoWall .imgList-box .waterfall-item.left{padding-right:9rpx}.photoWall .imgList-box .waterfall-item.right{padding-left:9rpx}.photoWall .imgList-box .waterfall-item .img-box{align-items:center;background:linear-gradient(139deg,#a59b77,#f6ecbb 40%,#f6ecbb 60%,#ac9e78);border-radius:20rpx;box-shadow:0 10rpx 20rpx 1px rgba(11,101,121,.3);box-sizing:border-box;display:-webkit-flex;display:flex;justify-content:center;padding:6rpx;width:317rpx}.photoWall .imgList-box .waterfall-item .img-box .item-img{border-radius:18rpx;width:305rpx}.photoWall .imgList-box .waterfall-item .img-box .square{height:305rpx;width:305rpx}.photoWall .imgList-box .waterfall-item .userName-box{bottom:10rpx;display:-webkit-flex;display:flex;justify-content:center;left:0;position:absolute;width:100%}.photoWall .imgList-box .waterfall-item .userName-box .userName{background:rgba(0,0,0,.5);border-radius:10rpx;color:#fff;font-size:24rpx;height:49rpx;line-height:49rpx;max-width:290rpx;overflow:hidden;padding:0 10rpx;text-align:center;text-overflow:ellipsis;white-space:nowrap}.photoWall .imgList-box .waterfall-item .userName-box .userName.l{margin-left:-8rpx}.photoWall .imgList-box .waterfall-item .userName-box .userName.r{margin-right:-8rpx}.photoWall .bottom-box{bottom:0;height:auto;left:0;position:absolute;width:750rpx;z-index:3}.photoWall .uploadImg{bottom:100rpx;height:auto;left:176rpx;position:fixed;width:400rpx;z-index:6}
</style>
