<template>
<view class="container">
    <view class="step-box">
        <view class="photo-count">
            <view class="photo-title">
                <image alt class="" mode="widthFix" src="https://eshopfile.zhiyousx.com/174530901418030873.png?imageView2/3/w/300"></image>
            </view>
            <view class="photo-table vue-ref" ref="photoTable">
                <view class="photo-table-content">
                    <view class="photo-sub">
                        <view class="photo-sub-group">
                            <image alt class="photo-item _img" mode="aspectFill" :src="bgUrl" v-if="bgUrl"></image>
                            <progress-vue class="" :dataInfos="dataInfos" :status="videoStatue" v-if="showProgress" @openImage="openImage(1)"></progress-vue>
                        </view>
                    </view>
                </view>
            </view>
            <view class="msg" v-if="minutes&&minutes>0&&videoStatue!==3&&videoStatue!==0">{{'我们正在精心生成您的视频，预计'+minutes+'分钟后会推送给您，喝杯茶休息一下，马上就好!'}}</view>
            <view class="msg" v-if="minutes==0&&videoStatue!==3&&videoStatue!==0">我们正在精心生成您的视频，视频即将生成完成，喝杯茶休息一下，马上就好!</view>
            <view class="msg" v-if="videoStatue===3">视频生成成功，请点击查看</view>
            <view class="btn">
                <image alt class="subscribe-btn" src="https://eshopfile.zhiyousx.com/174909293434772225.png" v-if="!isSubscribeMessage&&videoStatue!==3&&videoStatue!==0" @click="requestSubscribe($event)"></image>
                <image alt class="history" src="https://eshopfile.zhiyousx.com/174909283387148487.png" v-if="options.source!=3" @click="goHistory($event)"></image>
            </view>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            progressVue: function() {
              i.e("union/pages/aiVideo/component/progressVue").then(function() {
                return resolve(i("a685"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          data: function() {
            return {
              bgUrl: "",
              showProgress: !1,
              isSubscribeMessage: !0,
              time: null,
              videoStatue: null,
              dataInfos: {},
              options: {},
              minutes: "",
              isHidden: !1,
              flageShowObj: {
                imgFlag: 2,
                hortVideoFlag: 2,
                longVideoFlag: 2
              },
              timerList: []
            }
          },
          onLoad: function(e) {
            if (e.scene) return this.scene = e.scene, void this.getScene(e.scene);
            this.options = JSON.parse(JSON.stringify(e)), console.log(this.options, "this.options"), this.getSubscribe(), this.getInfoData()
          },
          onShow: function() {
            e.hideHomeButton(), this.isHidden && (this.getSubscribe(), this.getInfoData())
          },
          onHide: function() {
            this.isHidden = !0, this.clearAllTimers()
          },
          onUnload: function() {
            this.clearAllTimers()
          },
          methods: {
            clearAllTimers: function() {
              this.time && (clearTimeout(this.time), this.time = null), this.timerList.forEach((function(e) {
                clearTimeout(e)
              })), this.timerList = []
            },
            requestSubscribe: function() {
              var t = this;
              console.log("requestSubscribe"), e.getSetting({
                withSubscriptions: !0,
                success: function(i) {
                  return console.log("获取设置结果:", i), i.subscriptionsSetting.mainSwitch ? i.subscriptionsSetting.itemSettings && "reject" === i.subscriptionsSetting.itemSettings["ouPHBnIddeeeXe_n8maWRUNlV8lPydR7j-zxit3qXlc"] ? (console.log("用户已拒绝该模板消息"), void uni.showModal({
                    title: "提示",
                    content: "您已拒绝接收该类型消息，需要重新授权才能接收视频生成通知",
                    success: function(i) {
                      i.confirm && e.openSetting({
                        success: function(e) {
                          console.log("重新授权设置结果:", e), e.authSetting && e.authSetting["scope.subscribeMessage"] && uni.requestSubscribeMessage()
                        }
                      })
                    }
                  })) : void uni.requestSubscribeMessage() : (console.log("订阅消息总开关关闭，引导用户开启"), void uni.showModal({
                    title: "提示",
                    content: "需要开启订阅消息权限才能接收视频生成通知，是否前往设置？",
                    success: function(i) {
                      i.confirm && e.openSetting({
                        success: function(e) {
                          console.log("打开设置页结果:", e), e.authSetting && e.authSetting["scope.subscribeMessage"] && uni.requestSubscribeMessage()
                        }
                      })
                    }
                  }))
                },
                fail: function(e) {
                  console.error("获取设置失败:", e), t.$uni.showToast("获取权限设置失败")
                }
              })
            },
            requestSubscribeMessage: function() {
              var t = this;
              console.log("开始调用requestSubscribeMessage API"), uni.requestSubscribeMessage({
                tmplIds: ["ouPHBnIddeeeXe_n8maWRUNlV8lPydR7j-zxit3qXlc"],
                success: function(e) {
                  console.log("订阅消息请求成功:", e), "accept" === e["ouPHBnIddeeeXe_n8maWRUNlV8lPydR7j-zxit3qXlc"] ? (t.$uni.showToast("授权成功！视频生成后会通过微信消息通知您！"), t.setSubscribeStatus()) : "reject" === e["ouPHBnIddeeeXe_n8maWRUNlV8lPydR7j-zxit3qXlc"] ? t.$uni.showToast("您拒绝了消息订阅，将无法收到视频生成通知") : "ban" === e["ouPHBnIddeeeXe_n8maWRUNlV8lPydR7j-zxit3qXlc"] && t.$uni.showToast("消息订阅功能被禁用，请检查微信设置")
                },
                fail: function(i) {
                  console.log("订阅消息请求失败:", i), 20004 === i.errCode ? uni.showModal({
                    title: "提示",
                    content: "订阅消息功能被关闭，请在微信设置中开启订阅消息权限",
                    showCancel: !1,
                    success: function() {
                      e.openSetting({
                        success: function(e) {
                          console.log("打开设置页结果:", e)
                        }
                      })
                    }
                  }) : i.errMsg && i.errMsg.includes("cancel") ? t.$uni.showToast("您取消了订阅授权") : t.$uni.showToast("订阅请求失败，请重试")
                }
              })
            },
            setSubscribeStatus: function() {
              var t = this;
              if (uni.getStorageSync("wxopenid")) {
                var i = {
                  openId: uni.getStorageSync("wxopenid"),
                  videoId: this.options.id,
                  status: 1
                };
                this.$uniApi.dataRequestNoLoading("PUT", "program/editBind", i, 0, s.AIVIDEO_API_BASE_URL).then((function(e) {
                  1 === e.code && (t.isSubscribeMessage = !0)
                }))
              } else setTimeout((function() {
                t.setSubscribeStatus()
              }), 300)
            },
            getSubscribe: function() {
              var t = this;
              if (uni.getStorageSync("wxopenid")) {
                var i = {
                  openId: uni.getStorageSync("wxopenid"),
                  videoId: this.options.id
                };
                this.$uniApi.dataRequestNoLoading("GET", "program/queryBindById", i, 0, s.AIVIDEO_API_BASE_URL).then((function(e) {
                  1 === e.code && (t.isSubscribeMessage = !!e.data.status)
                }))
              } else setTimeout((function() {
                t.getSubscribe()
              }), 300)
            },
            getScene: function(e) {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "program/queryById?id=" + e, 0, s.AIVIDEO_API_BASE_URL).then((function(e) {
                if (1 === e.code) {
                  var i = JSON.parse(JSON.stringify(e.data.aiUserVideo));
                  t.options = c(c({}, i), {}, {
                    source: 1
                  }), t.bgUrl = e.data.aiUserVideo.imageUrl, t.bindVideo(), t.getInfoData()
                }
              }))
            },
            bindVideo: function() {
              var t = this;
              if (uni.getStorageSync("wxopenid")) {
                var i = {
                  id: this.options.id,
                  openId: uni.getStorageSync("wxopenid")
                };
                this.$uniApi.dataRequestNoLoading("POST", "program/bind", i, 0, s.AIVIDEO_API_BASE_URL).then((function(e) {
                  t.getSubscribe()
                }))
              } else setTimeout((function() {
                t.bindVideo()
              }), 300)
            },
            getInfoData: function() {
              var e = this;
              this.clearAllTimers();
              var t = this.options,
                i = t.id,
                n = t.imageName,
                o = t.moldId;
              i && n && o ? this.$uniApi.getRequestNoLoading("GET", "volce/find?id=".concat(i, "&imageName=").concat(n, "&moldId=").concat(o), 0, s.AIVIDEO_API_BASE_URL).then((function(t) {
                if (1 === t.code) {
                  if (e.$nextTick((function() {
                      e.showProgress = !0
                    })), !t.success) return e.$uni.showToast(t.msg), void(e.videoStatue = 0);
                  e.dataInfos = t.data, e.bgUrl = e.dataInfos.imageUrl, t.data.video ? (e.videoStatue = 3, e.bgUrl = e.dataInfos.imageUrl) : (2 === t.data.status ? 1 === e.videoStatue ? e.minutes = 2 : 2 == e.videoStatue && (e.minutes = e.minutes - 1 > 0 ? e.minutes - 1 : 0) : 1 === t.data.status && (e.minutes = t.data.minutes), e.videoStatue = t.data.status), e.time = setTimeout((function() {
                    3 == e.videoStatue ? e.clearAllTimers() : e.getInfoData()
                  }), 1e4), e.timerList.push(e.time)
                } else e.videoStatue = 0, e.$$uni.showToast(t.msg)
              })).catch((function(t) {
                e.$uni.showToast("信息查询失败")
              })) : this.$uni.showToast("参数错误")
            },
            openImage: function() {
              uni.navigateTo({
                url: "/union/pages/aiVideo/downloadzt?id=" + this.options.id + "&imageName=" + this.options.imageName + "&moldId=" + this.options.moldId
              })
            },
            goHistory: function() {
              this.clearAllTimers(), uni.navigateTo({
                url: "/union/pages/aiVideo/historyList"
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.container{height:100vh;width:100vw}.step-box{align-items:center;background:url('https://eshopfile.zhiyousx.com/174531750140993868.png')no-repeat 50%;background-size:cover;display:-webkit-flex;display:flex;height:100%;padding:40rpx 20rpx;width:100%}.step-box .photo-count{background-image:url('https://eshopfile.zhiyousx.com/174539956029153379.png');background-repeat:no-repeat;background-size:100% 100%;height:100%;text-align:center;width:100%}.step-box .photo-count .photo-title{height:153rpx;left:200rpx;position:absolute;text-align:center;top:75rpx;width:393rpx;z-index:10}.step-box .photo-count .photo-title image{height:100%;width:100%}.step-box .msg{bottom:215rpx;left:10%;position:absolute;width:80%;z-index:10}.step-box .btn{align-items:center;bottom:100rpx;display:-webkit-flex;display:flex;height:60rpx;justify-content:center;left:0;position:absolute;width:100%;z-index:10}.step-box .btn .history{height:48rpx;width:204rpx}.step-box .btn .subscribe-btn{height:48rpx;margin-right:20rpx;width:210rpx}.step-box .photo-table{height:calc(100% - 560rpx);overflow:auto;padding:0 20rpx;position:absolute;top:240rpx;width:calc(100% - 40rpx);z-index:10}.step-box .photo-box-c .photo-box .swipe-box{height:100%;width:100%}.step-box .photo-box-c .photo-box .swipe-box .swipe-img{border-radius:12rpx 12rpx 12rpx 12rpx;height:760rpx;transform:translateZ(0)}.step-box .photo-box-c,.step-box .video-box-c{align-items:center;display:-webkit-flex;display:flex;justify-content:center;position:relative}.step-box .photo-box-c .photo-box-image,.step-box .video-box-c .photo-box-image{width:100%}.step-box .photo-box-c .photo-box,.step-box .photo-box-c .video-box,.step-box .video-box-c .photo-box,.step-box .video-box-c .video-box{height:100%;height:calc(100% - 400rpx);position:absolute;top:190rpx;width:calc(100% - 150rpx)}.step-box .photo-box-c .photo-box ._img,.step-box .photo-box-c .video-box ._img,.step-box .video-box-c .photo-box ._img,.step-box .video-box-c .video-box ._img{border-radius:12rpx 12rpx 12rpx 12rpx;height:100%}.step-box .img-btn{bottom:90rpx;position:absolute;width:254rpx}.step-box .photo-main{background-image:url('https://eshopfile.zhiyousx.com/174537858037896689.png');background-repeat:no-repeat;background-size:100% 100%;display:-webkit-flex;display:flex;margin-bottom:44rpx}.step-box .photo-main .photo-group{min-height:250rpx;overflow:hidden;padding:20rpx 0;position:relative;width:100%}.step-box .photo-main .photo-group .photo-group-container{display:-webkit-inline-flex;display:inline-flex;white-space:nowrap;width:-webkit-max-content;width:max-content}.step-box .photo-main .photo-group .photo-item{border-radius:14rpx;height:216rpx;object-fit:cover;width:144rpx}.step-box .photo-main-imgs{position:absolute}.step-box .photo-main-img,.step-box .photo-sub-img{height:266rpx;width:104rpx}.step-box .photo-sub-img{position:absolute}.step-box .photo-sub{display:-webkit-flex;display:flex;margin-bottom:44rpx;position:relative}.step-box .photo-sub .photo-sub-group{min-height:216rpx;position:relative;text-align:center;width:100%}.step-box .photo-sub .photo-sub-group .photo-item{border-radius:12rpx 12rpx 12rpx 12rpx;height:720rpx;object-fit:cover;width:600rpx}.step-box .loading-img{height:216rpx;margin-right:20rpx;position:relative}.step-box .loading{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fl-warp2{bottom:140rpx;left:10%;position:absolute;width:80%;z-index:10}.fl-warp2 ._span,.fl-warp2{color:#333;font-family:Source Han Sans SC;font-size:24rpx;font-style:normal;font-weight:400;text-align:center;text-transform:none}.fl-warp2 ._span{color:#e6833c}.photo-box-title{position:absolute;top:110rpx;width:296rpx;z-index:10}.img-btn1{bottom:90rpx;position:absolute;width:70rpx}.codeBox{padding:30rpx}.codeBox ._img{width:100%}.van-swipe-item{text-align:center}.title-btn{color:#333;font-family:Source Han Sans SC;font-size:30rpx;font-style:normal;font-weight:400;margin-bottom:20rpx;text-align:center;text-transform:none}
</style>
