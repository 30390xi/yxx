<template>
<view class="photoWall">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="top-box">
        <image mode class="top-bg" src="https://eshopfile.zhiyousx.com/2022100815285282248.jpg"></image>
        <image mode class="user-title" src="https://eshopfile.zhiyousx.com/2022100815331079289.png"></image>
        <image mode class="title-img" src="https://eshopfile.zhiyousx.com/2022100815330628059.png"></image>
        <image mode class="tip-but1" src="https://eshopfile.zhiyousx.com/2022100815262376681.png" @click="jumpSpot($event)"></image>
    </view>
    <view class="imgList-box">
        <u-waterfall addTime="50" class=" vue-ref" ref="uWaterfall" data-vue-generic="scoped" :value="flowList" :vueSlots="['right','left']" @input="flowList = $event"></u-waterfall>
    </view>
    <image mode class="bottom-box" src="https://eshopfile.zhiyousx.com/2022100815174064482.png"></image>
    <image mode class="uploadImg" src="https://eshopfile.zhiyousx.com/2022100815144246270.png" @click="uploadImg($event)"></image>
    <u-popup class=" vue-ref" ref="uPopup" mode="center" :value="showNotice" :vueSlots="['default']" @input="showNotice = $event">
        <view class="notice-box">
            <view class="notice-info">
                <view class="notice-title">在寺照片拍摄及使用权协议</view>
                <view class="notice-body">
                    <view class="p">1、寺院为修行道场，上传照片需得体庄严，以表现寺内风景建筑为主，也可包含人像（但不得有未成年人）。 在寺拍照需礼敬三宝，不得对佛菩萨圣像及寺院出家师父拍照。</view>
                    <view class="p">2、寺院不定期对上传照片进行评选并在首页展示相关作品和作者信息，特别优秀者可发心成为古寺特约摄影师，即有机会近距离接触禅宗文化，拍摄古寺美景。</view>
                    <view class="p">3、长安区古观音禅寺可对平台用户上传的照片作宣传使用，寺院对照片有使用权。</view>
                    <view class="p">4、参与活动即视为同意以上规则，长安区古观音禅寺对此次活动有最终解释权。</view>
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
              scenicId: "1524935934943391746",
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
              title: "风来犹作海潮音",
              imageUrl: "https://eshopfile.zhiyousx.com/2022100815285282248.jpg",
              path: this.$util.setShareUrl("/subPage/pages/templeWall/templeWall")
            }
          },
          onShareTimeline: function() {
            return {
              title: "风来犹作海潮音",
              imageUrl: "https://eshopfile.zhiyousx.com/2022100815285282248.jpg",
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
              uni.previewImage({
                current: e,
                urls: [e]
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.photoWall{background:linear-gradient(90deg,#f0cc7b,#f4dba2 50%,#f0cc7b);border-radius:0;min-height:100vh;padding-bottom:280rpx;position:relative;width:750rpx}.photoWall .notice-box{background-image:url('https://eshopfile.zhiyousx.com/twelve/notice-bg.png');background-size:100% 100%;height:800rpx;width:657rpx}.photoWall .notice-box .notice-info{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:800rpx;width:657rpx}.photoWall .notice-box .notice-info .notice-title{color:#a64115;font-size:36rpx;font-weight:700;line-height:54rpx;margin-top:55rpx}.photoWall .notice-box .notice-info .notice-body{margin-top:30rpx;min-height:436rpx;width:527rpx}.photoWall .notice-box .notice-info .notice-body .p{color:#333;font-size:24rpx;line-height:40rpx;margin-bottom:20rpx;text-align:justify}.photoWall .notice-box .notice-info .notice-but{background-image:url('https://eshopfile.zhiyousx.com/twelve/notice-but.png');background-size:100% 100%;color:#ffeaa0;font-size:28rpx;height:91rpx;letter-spacing:5rpx;line-height:78rpx;margin-top:-2rpx;text-align:center;text-shadow:0 4rpx 4rpx rgba(0,0,0,.25);width:393rpx}.photoWall .u-mode-center-box{background-color:initial!important}.photoWall .top-box{height:1154rpx;position:relative;width:100%}.photoWall .top-box .top-bg{height:710rpx;width:750rpx}.photoWall .top-box .user-title{height:270rpx;left:0;position:absolute;top:497rpx;width:750rpx}.photoWall .top-box .title-img{bottom:5rpx;height:345rpx;left:75rpx;position:absolute;width:600rpx}.photoWall .top-box .tip-but1{height:72rpx;position:absolute;right:0;top:475rpx;width:390rpx;z-index:10}.photoWall .top-box .tip-but2{height:77rpx;position:absolute;right:0;top:590rpx;width:344rpx;z-index:10}.photoWall .imgList-box{margin-left:30rpx;min-height:300rpx;position:relative;width:690rpx;z-index:5}.photoWall .imgList-box .waterfall-box{display:-webkit-flex;display:flex}.photoWall .imgList-box .waterfall-box .itemList{height:100%;width:50%}.photoWall .imgList-box .waterfall-item{margin-bottom:20rpx;position:relative;width:335rpx}.photoWall .imgList-box .waterfall-item.left{padding-right:10rpx}.photoWall .imgList-box .waterfall-item.right{padding-left:10rpx}.photoWall .imgList-box .waterfall-item .img-box{align-items:center;background:linear-gradient(0deg,#ffecc0,#ffd169,#ffecc0) 4rpx 4rpx;border-radius:20rpx;box-sizing:border-box;display:-webkit-flex;display:flex;justify-content:center;padding:4rpx;width:335rpx}.photoWall .imgList-box .waterfall-item .img-box .item-img{border-radius:20rpx;width:335rpx}.photoWall .imgList-box .waterfall-item .img-box .square{height:335rpx;width:335rpx}.photoWall .imgList-box .waterfall-item .userName-box{bottom:10rpx;display:-webkit-flex;display:flex;justify-content:center;left:0;position:absolute;width:100%}.photoWall .imgList-box .waterfall-item .userName-box .userName{background:rgba(0,0,0,.5);border-radius:10rpx;color:#fff;font-size:24rpx;height:49rpx;line-height:49rpx;max-width:290rpx;overflow:hidden;padding:0 10rpx;text-align:center;text-overflow:ellipsis;white-space:nowrap}.photoWall .imgList-box .waterfall-item .userName-box .userName.l{margin-left:-8rpx}.photoWall .imgList-box .waterfall-item .userName-box .userName.r{margin-right:-8rpx}.photoWall .bottom-box{bottom:0;height:380rpx;left:0;position:absolute;width:750rpx;z-index:4}.photoWall .uploadImg{bottom:100rpx;height:100rpx;left:150rpx;position:fixed;width:450rpx;z-index:20}
</style>
