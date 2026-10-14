<template>
<view class="container" :style="'padding-top:'+navBarHeight+';'">
    <uni-navbar class="" title="vlog" type="transparentFixed"></uni-navbar>
    <view class="loadingBox">
        <image class="cust-bg" src="https://eshopfile.zhiyousx.com/176913615138339744.png"></image>
        <image class="cust-img" src="https://eshopfile.zhiyousx.com/176887779185712785.png"></image>
        <view class="loading-content">
            <view class="flower-loading" v-if="!isHasError">
                <view class="petal"></view>
                <view class="petal"></view>
                <view class="petal"></view>
                <view class="petal"></view>
                <view class="petal"></view>
                <view class="petal"></view>
                <view class="petal"></view>
                <view class="petal"></view>
            </view>
            <view class="loading-text" v-if="!isHasError">
                <view class="_p">{{$root.m0}}</view>
                <view class="_p">{{$root.m1+' '+time+' '+$root.m2}}</view>
            </view>
            <view class="loading-text" v-else>
                <view class="_p">{{$root.m3}}</view>
            </view>
        </view>
    </view>
    <button class="cust-btn" v-if="isHasError" @click="handleBack($event)">{{ $root.m4 }}</button>
    <button class="cust-btn" v-if="!isHasError" @click="handleNotice($event)">{{ $root.m5 }}</button>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            data: function() {
              return {
                imageName: "",
                length: 0,
                apiTimer: null,
                loadSize: 0,
                moldId: "",
                pictureList: [],
                resultList: [],
                showLogin: !1,
                currentType: "",
                currentIndex: 1,
                createTime: "",
                humanCount: 0,
                humanImg: "",
                videoId: "",
                generVideoId: "",
                minutes: 0,
                isHasError: !1,
                orderNo: "",
                images: [],
                orderId: "",
                time: 0,
                navBarHeight: 0,
                nickName: ""
              }
            },
            onLoad: function(e) {
              this.navBarHeight = uni.getSystemInfoSync().statusBarHeight + 44 + "px", console.log("navBarHeight", this.navBarHeight), u.default.initLang(), this.orderId = e.orderId, this.images = JSON.parse(e.images), console.log("this.images", this.images), this.nickName = e.nickName, this.generVideo()
            },
            onUnload: function() {
              this.apiTimer && clearTimeout(this.apiTimer)
            },
            methods: {
              getOpenid: function() {
                return new Promise((function(e, i) {
                  t.login({
                    success: function(n) {
                      t.request({
                        url: getApp().globalData.requestUrl + "vxapp/getSessionKeyPro/".concat(n.code),
                        method: "GET",
                        success: function(t) {
                          200 === t.data.code ? e(t.data.data) : i(t)
                        },
                        fail: function(t) {
                          i(t)
                        }
                      })
                    }
                  })
                }))
              },
              formatTime: function() {
                var t = new Date,
                  e = function(t) {
                    return String(t).padStart(2, "0")
                  },
                  i = t.getFullYear(),
                  n = e(t.getMonth() + 1),
                  o = e(t.getDate()),
                  s = e(t.getHours()),
                  a = e(t.getMinutes()),
                  r = e(t.getSeconds());
                return "".concat(i, "-").concat(n, "-").concat(o, " ").concat(s, ":").concat(a, ":").concat(r)
              },
              fn: function() {
                var e = this;
                return (0, a.default)(o.default.mark((function i() {
                  var n, s;
                  return o.default.wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                      case 0:
                        return i.prev = 0, i.next = 3, e.$uniApi.dataRequestNoLoading("GET", "ai/wall/vlog/queryStatus", {
                          id: e.generVideoId
                        });
                      case 3:
                        1 == (n = i.sent).code ? (console.log("res--", n), e.time = null === (s = n.data) || void 0 === s ? void 0 : s.waitTime, 2 == n.data.status ? uni.redirectTo({
                          url: "/union/pages/vlog/result?videoUrl=".concat(n.data.videoUrl, "&posterUrl=").concat(n.data.homeImage, "&shareId=").concat(e.generVideoId)
                        }) : 3 != n.data.status ? e.apiTimer = setTimeout(e.fn, 3e4) : 3 == n.data.status && (e.$uni.showToast("视频合成失败！"), e.isHasError = !0)) : (e.$uni.showToast("视频合成失败！"), e.isHasError = !0), i.next = 12;
                        break;
                      case 7:
                        i.prev = 7, i.t0 = i.catch(0), e.apiTimer && clearTimeout(e.apiTimer), e.isHasError = !0, e.$uni.showToast("视频合成失败！");
                      case 12:
                      case "end":
                        return i.stop()
                    }
                  }), i, null, [
                    [0, 7]
                  ])
                })))()
              },
              onLoginReturn: function(t) {
                this.showLogin = !1, t ? (this.loadSize = 0, this.resultList = [], this.apiTimer && clearTimeout(this.apiTimer), this.apiTimer = setTimeout(this.fn, 1e3)) : (this.$uni.showToast("登录失败"), uni.navigateBack())
              },
              handleNotice: function() {
                var e = this;
                t.getSetting({
                  withSubscriptions: !0,
                  success: function(i) {
                    return console.log("获取设置结果:", i), i.subscriptionsSetting.mainSwitch ? i.subscriptionsSetting.itemSettings && "reject" === i.subscriptionsSetting.itemSettings.DPfKt2RbXYclddvGNmQI10q41riJ1hJd21TiYztdQb4 ? (console.log("用户已拒绝该模板消息"), void uni.showModal({
                      title: "提示",
                      content: "您已拒绝接收该类型消息，需要重新授权才能接收视频生成通知",
                      success: function(i) {
                        i.confirm && t.openSetting({
                          success: function(t) {
                            console.log("重新授权设置结果:", t), t.authSetting && t.authSetting["scope.subscribeMessage"] && uni.requestSubscribeMessage()
                          }
                        })
                      }
                    })) : void uni.requestSubscribeMessage() : (console.log("订阅消息总开关关闭，引导用户开启"), void uni.showModal({
                      title: "提示",
                      content: "需要开启订阅消息权限才能接收视频生成通知，是否前往设置？",
                      success: function(i) {
                        i.confirm && t.openSetting({
                          success: function(t) {
                            console.log("打开设置页结果:", t), t.authSetting && t.authSetting["scope.subscribeMessage"] && uni.requestSubscribeMessage()
                          }
                        })
                      }
                    }))
                  },
                  fail: function(t) {
                    console.error("获取设置失败:", t), e.$uni.showToast("获取权限设置失败")
                  }
                })
              },
              requestSubscribeMessage: function() {
                var e = this;
                uni.requestSubscribeMessage({
                  tmplIds: ["DPfKt2RbXYclddvGNmQI10q41riJ1hJd21TiYztdQb4"],
                  success: function(i) {
                    "accept" === i.DPfKt2RbXYclddvGNmQI10q41riJ1hJd21TiYztdQb4 ? (e.$uni.showToast(e.$t("sub.tips.13")), uni.navigateBack({
                      delta: 1
                    })) : "reject" === i.DPfKt2RbXYclddvGNmQI10q41riJ1hJd21TiYztdQb4 ? e.$uni.showToast(e.$t("sub.tips.14")) : "ban" === i.DPfKt2RbXYclddvGNmQI10q41riJ1hJd21TiYztdQb4 && e.$uni.showToast("消息订阅功能被禁用，请检查微信设置")
                  },
                  fail: function(i) {
                    console.log("订阅消息请求失败:", i), 20004 === i.errCode ? uni.showModal({
                      title: "提示",
                      content: "订阅消息功能被关闭，请在微信设置中开启订阅消息权限",
                      showCancel: !1,
                      success: function() {
                        t.openSetting({
                          success: function(t) {
                            console.log("打开设置页结果:", t)
                          }
                        })
                      }
                    }) : i.errMsg && i.errMsg.includes("cancel") ? e.$uni.showToast("您取消了订阅授权") : e.$uni.showToast("订阅请求失败，请重试")
                  }
                })
              },
              generVideo: function() {
                var e = this;
                console.log("this.images", this.images), console.log((0, s.default)(this.images)), this.$uniApi.dataRequestNoLoading("POST", "ai/wall/vlog/make", {
                  openId: uni.getStorageSync("wxopenid"),
                  urls: this.images,
                  moldId: 1,
                  orderId: this.orderId || "",
                  userName: this.nickName || ""
                }).then((function(t) {
                  var i, n;
                  1 == t.code ? (e.generVideoId = (null === (i = t.data) || void 0 === i ? void 0 : i.id) || "", e.time = (null === (n = t.data) || void 0 === n ? void 0 : n.time) || 0, e.apiTimer = setTimeout(e.fn, 1e3)) : (e.isHasError = !0, e.$uni.showToast("视频合成失败！"))
                })).catch((function(t) {
                  e.isHasError = !0, e.$uni.showToast("视频合成失败！")
                }))
              },
              handleBack: function() {
                uni.navigateBack({
                  delta: 1
                })
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.container{background:url('https://eshopfile.zhiyousx.com/176889164854296878.png')no-repeat;background-size:100%auto;padding:20rpx 35rpx 35rpx}.container .loadingBox{height:1200rpx;position:relative;width:100%}.container .loadingBox .cust-bg,.container .loadingBox .cust-img{height:100%;object-fit:cover;position:absolute;width:100%}.container .loadingBox .cust-img{border-radius:80rpx}.container .loadingBox .cust-bg{z-index:1}.container .loadingBox .loading-content{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.container .loadingBox .loading-content .flower-loading{height:80rpx;margin-bottom:40rpx;position:relative;width:80rpx}.container .loadingBox .loading-content .flower-loading .petal{animation:flowerSpin-data-v-3c7fad96 1.2s linear infinite;background:#fff;border-radius:4rpx;height:24rpx;left:50%;position:absolute;top:50%;transform-origin:50% 40rpx;width:8rpx}.container .loadingBox .loading-content .flower-loading .petal:nth-child(1){animation-delay:0s;transform:translate(-50%,-50%) rotate(0deg)}.container .loadingBox .loading-content .flower-loading .petal:nth-child(2){animation-delay:.15s;transform:translate(-50%,-50%) rotate(45deg)}.container .loadingBox .loading-content .flower-loading .petal:nth-child(3){animation-delay:.3s;transform:translate(-50%,-50%) rotate(90deg)}.container .loadingBox .loading-content .flower-loading .petal:nth-child(4){animation-delay:.45s;transform:translate(-50%,-50%) rotate(135deg)}.container .loadingBox .loading-content .flower-loading .petal:nth-child(5){animation-delay:.6s;transform:translate(-50%,-50%) rotate(180deg)}.container .loadingBox .loading-content .flower-loading .petal:nth-child(6){animation-delay:.75s;transform:translate(-50%,-50%) rotate(225deg)}.container .loadingBox .loading-content .flower-loading .petal:nth-child(7){animation-delay:.9s;transform:translate(-50%,-50%) rotate(270deg)}.container .loadingBox .loading-content .flower-loading .petal:nth-child(8){animation-delay:1.05s;transform:translate(-50%,-50%) rotate(315deg)}.container .loadingBox .loading-content .loading-text ._p{color:#fff;font-size:4vw;font-weight:500;letter-spacing:2rpx;text-align:center}.container .cust-btn{background:linear-gradient(76deg,#cc0202,#ff936b);border-radius:60rpx;box-shadow:inset 0rpx -6rpx 8rpx 0rpx rgba(0,0,0,.1),inset 0rpx 2rpx 8rpx 0rpx hsla(0,0%,100%,.35),0rpx 8rpx 16rpx 0rpx rgba(0,0,0,.08);color:#fff;font-size:28rpx;height:80rpx;line-height:80rpx;margin:40rpx auto 0;text-align:center;width:680rpx}@-webkit-keyframes flowerSpin-data-v-3c7fad96{0%{opacity:1;transform:translate(-50%,-50%) rotate(0deg) scale(1)}50%{opacity:.3;transform:translate(-50%,-50%) rotate(180deg) scale(.8)}100%{opacity:1;transform:translate(-50%,-50%) rotate(1turn) scale(1)}}@keyframes flowerSpin-data-v-3c7fad96{0%{opacity:1;transform:translate(-50%,-50%) rotate(0deg) scale(1)}50%{opacity:.3;transform:translate(-50%,-50%) rotate(180deg) scale(.8)}100%{opacity:1;transform:translate(-50%,-50%) rotate(1turn) scale(1)}}
</style>
