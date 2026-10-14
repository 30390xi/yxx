<template>
<view class="container" :style="'padding-top:'+navBarHeight+';'">
    <uni-navbar class="" title="vlog" type="transparentFixed"></uni-navbar>
    <scroll-view class="photo-scroll" refresherBackground="transparent" :refresherEnabled="true" :refresherTriggered="refreshing" scrollY="true" @scrolltolower="loadMore($event)" @refresherrefresh="onRefresh($event)">
        <view class="photo-list" v-if="!noData">
            <view class="photo-item" :key="index" v-for="(item, index) in $root.l0">
                <view class="photo-item-time">
                    <view class="">{{item.createTime}}</view>
                </view>
                <view class="photo-item-picList">
                    <view class="photo-item-picList-item photo-item-picList-video">
                        <view class="video-box">
                            <view class="status-text" v-if="item.status!=2">
                                <view class="_p">{{objStatus[item.status]}}</view>
                                <view class="_p" v-if="item.waitTime&&item.status==1">{{ item.m0+item.waitTime+item.m1 }}</view>
                            </view>
                            <image class="" mode="aspectFill" :src="item.homeImage" style="border-radius:8px;" v-if="item.status==2"></image>
                            <view class="video-box-icon" v-if="item.status==2">
                                <image class="" src="https://eshopfile.zhiyousx.com/176913475319370473.png" style="width:40rpx;height:40rpx;margin-right:10rpx;"></image>
                            </view>
                            <image class="icon" src="https://eshopfile.zhiyousx.com/176913464226725136.png" v-if="item.videoUrl&&item.status==2"></image>
                        </view>
                    </view>
                </view>
            </view>
            <view class="load-more" v-if="$root.g0>0">
                <view class="loading" v-if="loading">
                    <text class="">{{$root.m2}}</text>
                </view>
                <block v-else>
                    <view class="load-more-btn" v-if="hasMore" @click="loadMore($event)">
                        <text class="">{{$root.m3}}</text>
                    </view>
                    <view class="no-more" v-else>
                        <text class="">{{$root.m4}}</text>
                    </view>
                </block>
            </view>
        </view>
        <view class="no-data" v-else>
            <image class="" src="https://eshopfile.zhiyousx.com/175559437543504270.png"></image>
            <text class="">{{$root.m5}}</text>
        </view>
    </scroll-view>
    <u-popup :borderRadius="20" class="" closeIconPos="top-left" :closeable="true" height="65%" mode="center" :value="showVideo" :vueSlots="['default']" width="600rpx" v-if="showVideo" @touchmove="e0()" @input="showVideo = $event">
        <view class="popup-content" style="width:100%;height:100%;touch-action:none;">
            <video-play class="" :poster="curPoster" :videoUrl="currentVideo"></video-play>
        </view>
    </u-popup>
    <u-popup :borderRadius="20" class="popup-full-width" :closeable="true" height="20%" mode="center" :value="downSuccess" :vueSlots="['default']" width="60%" v-if="downSuccess" @input="downSuccess = $event">
        <view class="down-content">
            <image class="success-icon" src="https://eshopfile.zhiyousx.com/176913679707171045.png" style="width:300rpx;height:170rpx;object-fit:cover;"></image>
            <view class="title">{{$root.m6}}</view>
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
                dateList: [],
                showLogin: !1,
                title: "我的订单",
                noData: !1,
                pageOn: 1,
                pageSize: 10,
                loading: !1,
                hasMore: !0,
                refreshing: !1,
                showVideo: !1,
                currentVideo: "",
                curPoster: "",
                showDownloadModal: !1,
                isDownStatus: -1,
                videoUrl: "",
                shareId: "",
                objStatus: {},
                downSuccess: !1,
                navBarHeight: 0
              }
            },
            onLoad: function(n) {
              this.navBarHeight = uni.getSystemInfoSync().statusBarHeight + 44 + "px", console.log("navBarHeight", this.navBarHeight), r.default.initLang(), this.getPhotoList()
            },
            onShow: function() {
              r.default.initLang(), this.getPhotoList()
            },
            onPageScroll: function(t) {
              t.scrollTop > 15 ? this.title = "" : this.title = "我的订单"
            },
            onReady: function() {},
            mounted: function() {
              this.objStatus = {
                0: this.$t("sub.tips.27"),
                1: this.$t("sub.tips.28"),
                3: this.$t("sub.tips.29")
              }
            },
            methods: {
              getOpenid: function() {
                return new Promise((function(n, e) {
                  t.login({
                    success: function(o) {
                      t.request({
                        url: getApp().globalData.requestUrl + "vxapp/getSessionKeyPro/".concat(o.code),
                        method: "GET",
                        success: function(t) {
                          200 === t.data.code ? n(t.data.data) : e(t)
                        },
                        fail: function(t) {
                          e(t)
                        }
                      })
                    }
                  })
                }))
              },
              getPhotoList: function() {
                var n = this,
                  e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.loading || (this.loading = !0, this.$uniApi.dataRequestNoLoading("GET", "ai/wall/vlog/queryList", {
                  openId: uni.getStorageSync("wxopenid"),
                  pageOn: this.pageOn,
                  pageSize: this.pageSize
                }).then((function(t) {
                  if (n.loading = !1, n.refreshing = !1, 1 == t.code) {
                    var o = t.data.records || [];
                    e ? (n.dateList = [].concat((0, s.default)(n.dateList), (0, s.default)(o)), console.log("加载更多", n.dateList)) : n.dateList = o, n.hasMore = o.length >= n.pageSize, n.dateList && 0 != n.dateList.length ? n.noData = !1 : n.noData = !0
                  } else 401 == t.code ? n.showLogin = !0 : n.$uni.showToast(t.message || "加载失败")
                })).catch((function(t) {
                  n.loading = !1, n.refreshing = !1, n.$uni.showToast("网络错误，请重试")
                })))
              },
              loadMore: function() {
                !this.loading && this.hasMore && (this.pageOn++, this.getPhotoList(!0))
              },
              onRefresh: function() {
                this.refreshing = !0, this.pageOn = 1, this.hasMore = !0, this.getPhotoList(!1)
              },
              onLoginReturn: function(n) {
                this.showLogin = !1, n ? this.getPhotoList() : uni.navigateBack()
              },
              goDownLoad: function(n) {
                this.$store.commit("SET_RESULT_IMG", [{
                  url: n
                }]), uni.navigateTo({
                  url: "/pages/downloadPic/downloadPic?type=photo"
                })
              },
              previewImage: function(n, e) {
                var o = [],
                  i = 0;
                this.dateList.forEach((function(t, a) {
                  t.aiAlbumList.forEach((function(t, s) {
                    o.push(t.url), a === e && s === n && (i = o.length - 1)
                  }))
                })), uni.previewImage({
                  current: i,
                  urls: o
                })
              },
              handlePlay: function(t) {
                var n = this;
                return (0, a.default)(i.default.mark((function e() {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        n.currentVideo = t.videoUrl, n.curPoster = t.homeImage, n.showVideo = !0;
                      case 3:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              handleClose: function() {
                this.showVideo = !1
              },
              handlePreview: function(n, e) {
                var o = n.pictures.map((function(t) {
                  return t.pictureUrl
                }));
                uni.previewImage({
                  current: e,
                  urls: o
                })
              },
              closeDownloadModal: function() {
                this.showDownloadModal = !1
              },
              download: function(t) {
                this.showDownloadModal = !0, this.videoUrl = t.videoUrl, this.downloadVideo()
              },
              downloadVideo: function() {
                var n = this;
                return (0, a.default)(i.default.mark((function e() {
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
                return new Promise((function(i, a) {
                  e.isDownStatus = 1, uni.downloadFile({
                    url: n,
                    success: function(n) {
                      200 === n.statusCode ? t.saveVideoToPhotosAlbum({
                        filePath: n.tempFilePath,
                        success: function() {
                          o.isDownStatus = 2, o.downSuccess = !0, uni.hideLoading(), i()
                        },
                        fail: function(t) {
                          console.error("保存到相册失败:", t), t.errMsg && t.errMsg.includes("auth deny") ? (o.isDownStatus = 3, a(new Error("AUTH_DENIED"))) : (o.isDownStatus = 4, a(t))
                        }
                      }) : (o.isDownStatus = 4, a(new Error("下载失败，状态码: ".concat(n.statusCode))))
                    },
                    fail: function(t) {
                      o.isDownStatus = 4, console.error("下载文件失败:", t), a(t)
                    }
                  })
                }))
              },
              getProgressText: function() {
                return 3 == this.isDownStatus ? (this.handleAuthDenied(), this.$t("sub.tips.8")) : 1 == this.isDownStatus ? this.$t("sub.tips.9") : 2 == this.isDownStatus ? this.$t("sub.tips.10") : 4 == this.isDownStatus ? this.$t("sub.tips.11") : void 0
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.container{background:url('https://eshopfile.zhiyousx.com/176889164854296878.png')no-repeat;background-size:100%auto;min-height:100vh;padding:10rpx 12rpx 100px 22rpx}.container .photo-scroll{height:calc(100vh - 60rpx)}.container .photo-list{padding-bottom:100px;width:100%}.container .photo-list .photo-item{width:100%}.container .photo-list .photo-item .photo-item-time{color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;font-size:28rpx;justify-content:space-between;line-height:40rpx;margin:30rpx 0 20rpx}.container .photo-list .photo-item .photo-item-time .priceHead{background:url('https://eshopfile.zhiyousx.com/176707864189410217.png')no-repeat;color:#fff;height:22px;line-height:22px;text-align:center;width:59px}.container .photo-list .photo-item .photo-item-picList{display:-webkit-flex;display:flex;flex-wrap:wrap;width:100%}.container .photo-list .photo-item .photo-item-picList .photo-item-picList-item{flex:none;height:170rpx;margin:0 8rpx 6rpx 0;width:170rpx}.container .photo-list .photo-item .photo-item-picList .photo-item-picList-item image{height:100%;width:100%}.container .photo-list .photo-item .photo-item-picList .photo-item-picList-video{height:533rpx;width:300rpx}.container .photo-list .photo-item .photo-item-picList .photo-item-picList-video .video-box{background:rgba(0,0,0,.6);border-radius:8px;height:100%;position:relative;width:100%}.container .photo-list .photo-item .photo-item-picList .photo-item-picList-video .video-box .status-text{word-wrap:nowrap;font-size:24rpx;left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);width:100%}.container .photo-list .photo-item .photo-item-picList .photo-item-picList-video .video-box .status-text ._p{color:#fff;font-size:24rpx}.container .photo-list .photo-item .photo-item-picList .photo-item-picList-video .video-box .icon{height:30px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:30px}.container .photo-list .photo-item .photo-item-picList .photo-item-picList-video .video-box .video-box-icon{align-items:flex-end;bottom:-10rpx;display:-webkit-flex;display:flex;left:320rpx;position:absolute}.container .photo-list .photo-item .photo-item-picList .photo-item-picList-video .video-box .video-box-icon .share-btn{align-items:flex-end;appearance:none;display:-webkit-flex;display:flex;padding:0}.container .photo-list .photo-item .photo-item-picList .photo-item-picList-video video{height:100%;width:100%}.container .photo-list .load-more{align-items:center;display:-webkit-flex;display:flex;height:100rpx;justify-content:center;margin-top:20rpx;width:100%}.container .photo-list .load-more .load-more-btn text,.container .photo-list .load-more .loading text,.container .photo-list .load-more .no-more text{color:rgba(0,0,0,.6);font-size:28rpx}.container .photo-list .load-more .load-more-btn text{color:#007aff}.container .photo-list .load-more .no-more text{color:rgba(0,0,0,.4)}.container .no-data{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:100%;justify-content:center;width:100%}.container .no-data image{height:300rpx;width:300rpx}.container .no-data text{color:rgba(0,0,0,.8);font-size:32rpx;line-height:44rpx;margin-top:40rpx}.container .popup-content{background:linear-gradient(180deg,#fff8db,#fff);height:100%;width:100%}.container .close-icon{left:50%;position:fixed;top:87%;transform:translate(-50%,-50%)}.container .close-icon image{height:35px;width:35px}.popup-full-width .down-content{align-items:center;background:linear-gradient(180deg,#ffe9e6,#fff);border:1px solid #fff;border-radius:20px;box-shadow:0 3px 6px 0 rgba(0,0,0,.2);color:#000;display:-webkit-flex;display:flex;flex-direction:column;font-size:32rpx;gap:30rpx;height:100%;width:100%}
</style>
