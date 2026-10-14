<template>
<view class="container">
    <uni-navbar class="" title="vlog" transparentFixedFontColor="#FFFFFF" type="transparentFixed"></uni-navbar>
    <image class="bg" mode="aspectFill" src="https://eshopfile.zhiyousx.com/176949634824956732.png" @load="onImageLoad($event)" @error="onImageError($event)"></image>
    <view class="right-tip _div" @click="handleRecord($event)">
        <image class="" src="https://eshopfile.zhiyousx.com/176913458203456352.png" style="width:40rpx;height:40rpx;margin-right:10rpx;"></image>{{ $root.m0 }}</view>
    <view class="footer">
        <button class="btn-bg" @click="handleBtnClick($event)">{{ $root.m1 }}</button>
        <view class="tag" v-if="currentTemp.status==0">{{$root.m2}}</view>
        <view class="tag" v-else>{{'￥'+currentTemp.price+' '+$root.m3}}</view>
    </view>
    <u-popup :borderRadius="20" class="" closeIconPos="top-left" :closeable="true" height="90%" mode="center" :value="showVideo" :vueSlots="['default']" width="90%" v-if="showVideo" @touchmove="e0()" @input="showVideo = $event">
        <view class="popup-content" style="width:100%;height:100%;touch-action:none;">
            <video-play class="" :poster="curPoster" :videoUrl="currentVideo"></video-play>
        </view>
    </u-popup>
    <u-popup :borderRadius="20" class="popup-full-width" :closeable="true" height="25%" mode="center" :value="showPrice" :vueSlots="['default']" width="80%" v-if="showPrice" @input="showPrice = $event">
        <view class="price-content">
            <view class="title">
                <text class="">{{currentTemp.price+''}}</text>{{$root.m4}}</view>
            <view class="title">{{$root.m5}}</view>
            <button class="btn-bg btn-cust" @click="handlePay($event)">{{ $root.m6 }}</button>
        </view>
    </u-popup>
    <image class="price-img" src="https://eshopfile.zhiyousx.com/176898632572285122.png" v-if="showPrice"></image>
    <image class="nickname-img" src="https://eshopfile.zhiyousx.com/176934581923005715.png" :style="'top:'+nicknameTop+';'" v-if="showNickname"></image>
    <u-popup :adjustPosition="true" :borderRadius="20" class="" :closeable="true" height="264rpx" :maskCloseAble="false" mode="center" :value="showNickname" :vueSlots="['default']" width="80%" v-if="showNickname" @input="showNickname = $event">
        <view class="nickname-content">
            <input class="weui-input vue-ref" ref="nicknameInput" :placeholder="$root.m7" type="nickname" :value="nickName" @focus="onNicknameFocus($event)" @blur="onNicknameBlur($event)" @input="nickName = $event"></input>
            <view class="title">{{$root.m8}}</view>
        </view>
    </u-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              videoPlay: function() {
                n.e("union/pages/vlog/videoPlay").then(function() {
                  return resolve(n("f4fd"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              var e;
              return e = {
                title: "VLOG",
                danmuList: [],
                Min_IMAGE_COUNT: 3,
                MAX_IMAGE_COUNT: 5,
                selectedImages: [],
                showVideo: !1,
                curPoster: "https://eshopfile.zhiyousx.com/176705872758677284.png",
                currentVideo: "https://eshopfile.zhiyousx.com/2025122916003176486.mp4",
                loading: !1,
                isFree: !0,
                vlogVideoCtx: null,
                videoCanPlay: !1,
                videoList: [{
                  src: "https://eshopfile.zhiyousx.com/2025122916003176486.mp4",
                  poster: "https://eshopfile.zhiyousx.com/176705872758677284.png",
                  isPlaying: !1
                }, {
                  src: "https://eshopfile.zhiyousx.com/2025122916003176486.mp4",
                  poster: "https://eshopfile.zhiyousx.com/176705872758677284.png",
                  isPlaying: !1
                }],
                videoContexts: [],
                currentIndex: 0
              }, (0, r.default)(e, "loading", !1), (0, r.default)(e, "currentTemp", {}), (0, r.default)(e, "showPrice", !1), (0, r.default)(e, "showNickname", !1), (0, r.default)(e, "nbFrontColor", "#ffffff"), (0, r.default)(e, "nickName", ""), (0, r.default)(e, "originTop", "0"), (0, r.default)(e, "nicknameTop", "40%"), (0, r.default)(e, "resetLoad", !1), e
            },
            onLoad: function() {
              console.log("onLoad", "33"), u.default.initLang(), this.handleQuery(), uni.getStorageSync("userInfor") && console.log(uni.getStorageSync("userInfor").memberId)
            },
            onShow: function() {
              u.default.initLang(), this.handleQuery()
            },
            methods: {
              onNicknameBlur: function(e) {
                this.originTop = "0", this.nicknameTop = "40%", this.nickName && (this.selectImages(), this.showNickname = !1)
              },
              onNicknameFocus: function(t) {
                var n = this;
                this.originTop = "-30%", this.nicknameTop = "25%", t.preventDefault(), setTimeout((function() {
                  uni.createSelectorQuery().in(n).select(".weui-input").fields({
                    node: !0
                  }).exec((function(e) {
                    var t;
                    null !== (t = e[0]) && void 0 !== t && t.node && e[0].node.focus()
                  }))
                }), 500)
              },
              handleBtnClick: function() {
                var t = this;
                return (0, a.default)(i.default.mark((function n() {
                  return i.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, t.handlQueue();
                      case 2:
                        if (n.sent) {
                          n.next = 6;
                          break
                        }
                        return uni.showToast({
                          title: t.$t("sub.tips.40"),
                          icon: "none"
                        }), n.abrupt("return");
                      case 6:
                        if (0 != t.currentTemp.status) {
                          n.next = 10;
                          break
                        }
                        return t.nickName = "", t.showNickname = !0, n.abrupt("return");
                      case 10:
                        t.$util.isLogin() && t.selectImages();
                      case 11:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              selectImages: function() {
                var t = this;
                e.chooseMedia({
                  count: this.MAX_IMAGE_COUNT,
                  mediaType: ["image"],
                  sizeType: ["original"],
                  sourceType: ["album"],
                  success: function() {
                    var n = (0, a.default)(i.default.mark((function n(o) {
                      return i.default.wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            console.log(o), setTimeout((0, a.default)(i.default.mark((function n() {
                              return i.default.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return uni.showLoading({
                                      title: t.$t("sub.tips.17"),
                                      mask: !0
                                    }), n.prev = 1, n.delegateYield(i.default.mark((function n() {
                                      var a, r, s, u, c;
                                      return i.default.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                          case 0:
                                            if (!(o.tempFiles.length < t.Min_IMAGE_COUNT)) {
                                              n.next = 2;
                                              break
                                            }
                                            throw new Error(t.$t("sub.tips.30"));
                                          case 2:
                                            a = i.default.mark((function n(a) {
                                              var r;
                                              return i.default.wrap((function(n) {
                                                for (;;) switch (n.prev = n.next) {
                                                  case 0:
                                                    if (!((r = o.tempFiles[a]).size > 10485760)) {
                                                      n.next = 3;
                                                      break
                                                    }
                                                    throw new Error("".concat(t.$t("sub.tips.26"), " ").concat(a + 1, " ").concat(t.$t("sub.tips.25")));
                                                  case 3:
                                                    return n.next = 5, new Promise((function(n, o) {
                                                      e.getImageInfo({
                                                        src: r.tempFilePath,
                                                        success: function(e) {
                                                          e.width < 300 ? o(new Error(t.$t("sub.tips.26") + "".concat(a + 1) + t.$t("sub.tips.33"))) : n(e)
                                                        },
                                                        fail: function(e) {
                                                          o(new Error(t.$t("sub.tips.26") + "".concat(a + 1).concat(t.$t("sub.tips.36"), ":").concat(e.errMsg)))
                                                        }
                                                      })
                                                    }));
                                                  case 5:
                                                    if (n.sent) {
                                                      n.next = 8;
                                                      break
                                                    }
                                                    throw new Error("".concat(t.$t("sub.tips.26"), " ").concat(a + 1, " ").concat(t.$t("sub.tips.37")));
                                                  case 8:
                                                  case "end":
                                                    return n.stop()
                                                }
                                              }), n)
                                            })), r = 0;
                                          case 6:
                                            if (!(r < o.tempFiles.length)) {
                                              n.next = 11;
                                              break
                                            }
                                            return n.delegateYield(a(r), "t0", 8);
                                          case 8:
                                            r++, n.next = 6;
                                            break;
                                          case 11:
                                            s = [], u = i.default.mark((function n(a) {
                                              var r, u, c, l;
                                              return i.default.wrap((function(n) {
                                                for (;;) switch (n.prev = n.next) {
                                                  case 0:
                                                    return u = o.tempFiles[a], n.next = 3, new Promise((function(n, o) {
                                                      uni.uploadFile({
                                                        url: getApp().globalData.requestUrl + "base/common/file/noLimitUpload",
                                                        filePath: u.tempFilePath,
                                                        name: "file",
                                                        formData: {
                                                          type: "image"
                                                        },
                                                        success: function(e) {
                                                          return n(e)
                                                        },
                                                        fail: function(e) {
                                                          return o(new Error("".concat(t.$t("sub.tips.26"), " ").concat(a + 1, " ").concat(t.$t("sub.tips.38"), ":").concat(e.errMsg)))
                                                        }
                                                      })
                                                    }));
                                                  case 3:
                                                    if (c = n.sent, 1 === (l = JSON.parse(c.data)).code && null !== (r = l.data) && void 0 !== r && r.fileUrl) {
                                                      n.next = 7;
                                                      break
                                                    }
                                                    throw new Error("".concat(t.$t("sub.tips.26"), " ").concat(a + 1, " ").concat(t.$t("sub.tips.38")));
                                                  case 7:
                                                    s.push(l.data.fileUrl);
                                                  case 8:
                                                  case "end":
                                                    return n.stop()
                                                }
                                              }), n)
                                            })), c = 0;
                                          case 14:
                                            if (!(c < o.tempFiles.length)) {
                                              n.next = 19;
                                              break
                                            }
                                            return n.delegateYield(u(c), "t1", 16);
                                          case 16:
                                            c++, n.next = 14;
                                            break;
                                          case 19:
                                            t.selectedImages = s, 0 == t.currentTemp.status ? t.generateVideo() : t.showPrice = !0;
                                          case 21:
                                          case "end":
                                            return n.stop()
                                        }
                                      }), n)
                                    }))(), "t0", 3);
                                  case 3:
                                    n.next = 10;
                                    break;
                                  case 5:
                                    n.prev = 5, n.t1 = n.catch(1), console.error("失败原因:", n.t1.message), uni.hideLoading(), setTimeout((function() {
                                      uni.showToast({
                                        title: n.t1.message,
                                        icon: "none",
                                        duration: 3e3,
                                        mask: !1
                                      })
                                    }), 100);
                                  case 10:
                                    return n.prev = 10, uni.hideLoading(), n.finish(10);
                                  case 13:
                                  case "end":
                                    return n.stop()
                                }
                              }), n, null, [
                                [1, 5, 10, 13]
                              ])
                            }))), 200);
                          case 2:
                          case "end":
                            return n.stop()
                        }
                      }), n)
                    })));
                    return function(e) {
                      return n.apply(this, arguments)
                    }
                  }(),
                  fail: function(e) {
                    console.error("选择图片失败:", e), setTimeout((function() {
                      t.$uni.showToast(t.$t("sub.tips.39"))
                    }), 100)
                  }
                })
              },
              generateVideo: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                uni.navigateTo({
                  url: "/union/pages/vlog/notice?images=" + JSON.stringify(this.selectedImages) + "&orderId=" + t + "&nickName=" + this.nickName
                })
              },
              handlePay: function() {
                var t = this;
                uni.showLoading({
                  title: this.$t("sub.tips.18")
                }), this.loading = !0, this.$uniApi.dataRequestNoLoading("POST", "ai/wall/vlog/pay ", {
                  openId: uni.getStorageSync("wxopenid"),
                  memberId: uni.getStorageSync("userInfor").memberId,
                  amount: t.currentTemp.price
                }).then((function(n) {
                  if (1 == n.code) {
                    var o = n.data;
                    uni.hideLoading(), uni.requestPayment({
                      provider: "wxpay",
                      timeStamp: o.timeStamp,
                      nonceStr: o.nonceStr,
                      package: "prepay_id=".concat(o.prepayid),
                      signType: o.signType,
                      paySign: o.pay_sign,
                      success: function(n) {
                        console.log(n), t.loading = !1, uni.hideLoading(), t.showPrice = !1, t.generateVideo(o.orderId)
                      },
                      fail: function(n) {
                        uni.hideLoading(), t.loading = !1, t.$uni.showToast("支付失败"), console.log("fail:" + JSON.stringify(n))
                      }
                    })
                  } else t.$uni.showToast(n.msg), uni.hideLoading()
                }))
              },
              onSwiperChange: function(e) {
                this.currentIndex = e.detail.current
              },
              handleDotClick: function(e) {
                this.currentIndex = e
              },
              handlePlay: function(e) {
                console.log(e), this.currentVideo = e.videoUrl, this.showVideo = !0
              },
              handleQuery: function() {
                var t = this;
                uni.showLoading({
                  title: this.$t("sub.tips.19"),
                  mask: !0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)"
                }), this.$uniApi.dataRequestNoLoading("GET", "ai/wall/vlog/moldList", {
                  openId: uni.getStorageSync("wxopenid")
                }).then((function(n) {
                  1 == n.code && (t.videoList = n.data, t.currentTemp = t.videoList[0], t.resetLoad && uni.hideLoading())
                }))
              },
              handleRecord: function() {
                uni.navigateTo({
                  url: "/union/pages/vlog/record",
                  fail: function(t) {
                    console.error("跳转失败：", t), uni.showToast({
                      title: "页面跳转失败",
                      icon: "none"
                    })
                  }
                })
              },
              onImageLoad: function(t) {
                this.resetLoad = !0, uni.hideLoading()
              },
              onImageError: function(t) {
                uni.hideLoading(), this.resetLoad = !1
              },
              handlQueue: function() {
                return this.$uniApi.dataRequestNoLoading("GET", "ai/wall/vlog/queryQueue", {}).then((function(e) {
                  return 1 == e.code && e.data
                }))
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.container{box-sizing:border-box;height:100vh;position:relative;width:100%}.footer{bottom:80rpx;display:-webkit-flex;display:flex;justify-content:center;margin-top:30rpx;position:absolute;width:100%;z-index:2}.footer .tag{background:#ffc886;border-radius:40rpx;color:#d1110d;font-family:Alibaba PuHuiTi;font-size:12px;font-weight:regular;height:50rpx;line-height:50rpx;position:absolute;right:40rpx;text-align:center;top:-25rpx;width:160rpx}.head{height:calc(100% - 220rpx);width:100%}.head .swiper-box .swiper-item,.head .swiper-box{height:100%;position:relative;width:100%}.head .swiper-box .swiper-item .cust-bg,.head .swiper-box .swiper-item .cust-play{height:100%;object-fit:cover;position:absolute;width:100%}.head .swiper-box .swiper-item .cust-play{border-radius:80rpx}.head .swiper-box .swiper-item .cust-bg{z-index:1}.head .swiper-box .swiper-item .play-button{height:100rpx;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:100rpx;z-index:2}.head .cust-img{z-index:1}.head .cust-img,.head .cust-poster{box-sizing:border-box;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.head .cust-poster{z-index:22}.head .cust-video{height:100%;padding:10rpx;position:absolute;width:100%}.head .cust-video .post-img,.head .cust-video .post-video{border-radius:60rpx;height:100%;object-fit:cover;width:100%}.head .cust-video .play-button{height:100rpx;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:100rpx;z-index:3}.btn-bg{background:linear-gradient(76deg,#cc0202,#ff936b);border:none;border-radius:64rpx;box-shadow:inset 0rpx 8rpx 12rpx 0rpx hsla(0,0%,100%,.25);color:#fff;font-family:Alibaba PuHuiTi;font-size:15px;font-weight:400;height:90rpx;line-height:90rpx;width:660rpx}.right-tip{background:hsla(0,0%,100%,.8);border:2rpx solid #fff;border-radius:60rpx 60rpx 60rpx 60rpx;box-shadow:0rpx 8rpx 8rpx 0rpx rgba(0,0,0,.25);color:#333;height:64rpx;line-height:64rpx;position:absolute;right:10rpx;text-align:center;top:170rpx;width:188rpx;z-index:33}.custom-dots,.right-tip{align-items:center;display:-webkit-flex;display:flex;justify-content:center}.custom-dots{gap:20rpx;margin:20rpx auto}.dot{background-color:#ccc;border-radius:50%;height:16rpx;width:16rpx}.dot.active{background-color:#000}.price-content{align-items:center;background:linear-gradient(180deg,#ffe9e6,#fff);box-shadow:0rpx 6rpx 12rpx 0rpx rgba(0,0,0,.2);display:-webkit-flex;display:flex;flex-direction:column;height:100%;justify-content:center;position:relative;width:100%}.price-content .title{color:#000;font-family:Alibaba PuHuiTi;font-size:32rpx;font-style:normal;font-weight:400;line-height:48rpx;text-align:center;text-transform:none}.price-content .title text{color:#e06666;margin-right:5rpx}.price-content .btn-cust{font-size:28rpx;height:60rpx;line-height:60rpx;margin-top:60rpx;width:80%}.bg{height:100%;position:absolute;width:100%;z-index:1}.price-img{height:100rpx;top:38%;width:100rpx}.nickname-img,.price-img{left:50%;position:absolute;transform:translate(-50%,-50%);z-index:222222}.nickname-img{height:198rpx;top:40%;width:212rpx}.nickname-content{align-items:center;background:linear-gradient(0deg,#ffe9e6,#fff);border-radius:40rpx 40rpx 40rpx 40rpx;box-shadow:0rpx 6rpx 12rpx 0rpx rgba(0,0,0,.2);display:-webkit-flex;display:flex;flex-direction:column;gap:40rpx;height:100%;justify-content:center;width:100%}.nickname-content .weui-input{background:rgba(0,0,0,.06);border-radius:36rpx 36rpx 36rpx 36rpx;height:40rpx;margin-top:20rpx;padding:16rpx 20rpx;width:70%}.nickname-content .title{color:rgba(0,0,0,.7);font-size:24rpx;font-weight:400}
</style>
