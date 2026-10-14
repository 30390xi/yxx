<template>
<view class="smart-escort-container">
    <view class="header-section">
        <view class="header-logo">
            <image class="header-icon" src="https://eshopfile.zhiyousx.com/176958773997727947.gif" v-if="!isPlayIng"></image>
            <image class="header-icon" src="https://eshopfile.zhiyousx.com/176958780798329730.gif" v-if="isPlayIng"></image>
        </view>
        <view class="header-content">
            <view class="header-nav-item1">{{$root.m0+''}}<image class="header-nav-icon" src="https://eshopfile.zhiyousx.com/176958794459960221.png"></image>
            </view>
            <view class="header-nav-item2">{{$root.m1}}</view>
            <view class="header-nav-item3">
                <image class="header-nav-open" src="https://eshopfile.zhiyousx.com/176958800191531963.png" v-if="!isPlayIng" @click="togglePlay($event)"></image>
                <image class="header-nav-open1" src="https://eshopfile.zhiyousx.com/176959220644704629.png" v-if="isPlayIng" @click="togglePlay($event)"></image>
                <text class="">{{currentTime}}</text>
                <view class="custom-progress">
                    <view class="progress-bg">
                        <view class="progress-active" :style="'width:'+progress+'%'+';'">
                            <view class="progress-dot"></view>
                        </view>
                    </view>
                </view>
                <text class="">{{duration}}</text>
            </view>
        </view>
        <view class="header-actions" @click="toFeatureIntroduction($event)">{{$root.m2}}</view>
    </view>
    <view class="banner-section">
        <view class="banner-left" @click="toMoreActivity($event)">
            <view class="banner-t">{{$root.m3}}</view>
            <view class="banner-b">{{$root.m4}}</view>
        </view>
        <view class="banner-right" @click="toTeamList($event)">
            <view class="banner-t">{{$root.m5}}</view>
            <view class="banner-b">{{$root.m6}}</view>
        </view>
    </view>
    <view class="tab-container" id="tabContainer" :style="'top:'+fixednavH+'px'+';'">
        <view :class="['tab-item','',item.icon===activeTab?'active':'']" :key="icon" v-for="(item, __i0__) in $root.l0">
            <view class="tab-name">{{item.icon==='1'?item.m7:item.icon==='2'?item.m8:item.m9}}</view>
            <image class="tab-icon" src="https://eshopfile.zhiyousx.com/176959338196586089.png" v-if="item.icon===activeTab"></image>
        </view>
    </view>
    <view class="main-content">
        <view class="list-container">
            <view class="activity-list">
                <view class="activity" :key="i" v-for="(item, i) in newsList">
                    <image class="activity-image" mode="aspectFill" :src="item.imgs"></image>
                    <view class="activityTop">{{item.cityName}}</view>
                </view>
            </view>
            <view class="empty" v-if="$root.g0">
                <empty-state class="" imgUrl="https://eshopfile.zhiyousx.com/noMsg@2x.png" :text="$root.m10"></empty-state>
            </view>
            <view class="loadMore">
                <u-loadmore bgColor="#fff" class="" color="#ccc" iconColor="#ccc" :loadText="$root.a0" :status="loadMore"></u-loadmore>
            </view>
        </view>
    </view>
    <view class="btn-container" :style="'top:'+langBtnTop+'rpx'+';'+'right:'+langBtnRight+'rpx'+';'" @touchstart="e0($event)" @touchmove="e1($event)" @touchend="touchEnd($event)" @click="toggleLanguage($event)">
        <image class="language-btn" :src="langBtnIcon[language]"></image>
    </view>
    <image class="favorite-btn" :src="langCollectionIcon[language]" :style="'bottom:'+favBtnBottom+'rpx'+';'+'right:'+favBtnRight+'rpx'+';'" @touchstart="e2($event)" @touchmove="e3($event)" @touchend="touchEnd($event)" @click="collectionFun($event)"></image>
    <uni-popup class=" vue-ref" ref="popupRef" :vueSlots="['default']">
        <view class="popup-content">
            <view class="box">
                <image class="popup-img" mode="aspectFill" src="https://eshopfile.zhiyousx.com/176965670602878950.png"></image>
                <view class="popup-desc">{{$root.m11}}</view>
                <view class="btn-box">
                    <view class="btn" @click="submitPopup($event)">{{$root.m12}}</view>
                </view>
            </view>
        </view>
    </uni-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            name: "SmartEscort",
            components: {
              EmptyState: function() {
                n.e("components/empty/empty").then(function() {
                  return resolve(n("a427"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                isPlayIng: !0,
                currentTime: "0:00",
                duration: "0:00",
                progress: 0,
                audioContext: null,
                tab: [{
                  name: "景区",
                  icon: "3"
                }, {
                  name: "省市",
                  icon: "1"
                }, {
                  name: "区县",
                  icon: "2"
                }],
                pageNum: 1,
                pageSize: 10,
                total: 0,
                newsList: [],
                activeTab: "3",
                loadMore: "loading",
                langBtnTop: 400,
                langBtnRight: 10,
                favBtnBottom: 200,
                favBtnRight: 10,
                startY: 0,
                dragTarget: "",
                screenHeight: 0,
                minGap: 40,
                langBtnHeight: 104,
                favBtnHeight: 126,
                fixednavH: "0",
                langBtnIcon: {
                  zh: "https://eshopfile.zhiyousx.com/177027919900665541.png",
                  en: "https://eshopfile.zhiyousx.com/177026054054840973.png"
                },
                arrAudio: {
                  zh: "https://eshopfile.zhiyousx.com/176958870856663457.mp3",
                  en: "https://eshopfile.zhiyousx.com/176959463652140563.mp3"
                },
                langCollectionIcon: {
                  zh: "https://eshopfile.zhiyousx.com/177026064879001244.png",
                  en: "https://eshopfile.zhiyousx.com/177026056913882508.png"
                },
                language: "zh",
                showPopup: !1,
                popupDesc: {},
                pData: {
                  longitude: "",
                  latitude: ""
                },
                distanceNum: ""
              }
            },
            onReady: function() {
              var e = uni.getSystemInfoSync();
              this.screenHeight = e.windowHeight / e.screenWidth * 750
            },
            onReachBottom: function() {
              "loadmore" === this.loadMore && this.pageLoad()
            },
            mounted: function() {},
            onLoad: function() {
              this.language = uni.getStorageSync("language") || "zh", this.switchLanguage(this.language), uni.setNavigationBarTitle({
                title: this.$t("smartEscort.header.title")
              }), this.initAudio(), this.getList(), this.getSysConfigure(), this.$nextTick((function() {
                var e = uni.createSelectorQuery();
                e.select("#tabContainer").boundingClientRect(), e.exec((function(t) {}))
              }))
            },
            onShareAppMessage: function() {
              return {
                title: this.$t("smartEscort.header.title"),
                path: "/union/pages/smartEscort/index",
                imageUrl: "https://eshopfile.zhiyousx.com/176975391898519360.png"
              }
            },
            onUnload: function() {
              this.destroyAudio()
            },
            onUnmounted: function() {
              this.destroyAudio()
            },
            onHide: function() {
              this.isPlayIng = !1, this.audioContext && this.audioContext.pause()
            },
            onShow: function() {},
            methods: {
              getSysConfigure: function() {
                var t = this;
                return this.$uniApi.dataRequestNoLoading("post", "base/app/v1/sysParam/getSysParamForApp", {
                  keyList: ["POSITIONING_DISTANCE"]
                }).then((function(e) {
                  1 == e.code && (console.log(e.data.POSITIONING_DISTANCE.paramValue || "", "this.systemInfo"), t.distanceNum = e.data.POSITIONING_DISTANCE.paramValue || "")
                }))
              },
              activityItem: function(e) {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_item_view_click",
                  eventName: "点击景区跳转对话页",
                  eventParams: {
                    cid: e.chineseCityId || e.cityId,
                    id: e.cityId,
                    name: e.cityName,
                    language: this.language
                  }
                });
                var n = "/union/pages/aiBy/index?cid=" + (e.chineseCityId || e.cityId) + "&id=" + e.cityId + "&name=" + e.cityName;
                uni.navigateTo({
                  url: n
                })
              },
              toTeamList: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_team_list_click",
                  eventName: "团队列表按钮点击",
                  eventParams: {
                    pagePath: "/union/pages/groupList/index",
                    language: this.language
                  }
                }), this.$uni.showToast(this.$t("allData.staytuned"))
              },
              toMoreActivity: function() {
                var t = this;
                return (0, s.default)(o.default.mark((function e() {
                  return o.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t.$eventAnalyse.analyse({
                          eventTag: "ai_more_activity_click",
                          eventName: "附近景区"
                        }), e.next = 3, uni.getLocation();
                      case 3:
                        e.sent ? t.getLocationFn(t.pData) : t.goChatList();
                      case 5:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              getLocation: function() {
                var e = this;
                return (0, s.default)(o.default.mark((function n() {
                  var a;
                  return o.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return a = e, n.abrupt("return", new Promise((function(e) {
                          i.getSetting({
                            success: function(n) {
                              n.authSetting["scope.userLocation"] ? (uni.showLoading({
                                title: a.$t("smartEscort.uni.getLocation"),
                                mask: !0
                              }), uni.getLocation({
                                type: "gcj02",
                                success: function(n) {
                                  a.pData.longitude = n.longitude, a.pData.latitude = n.latitude, uni.hideLoading(), e(!0)
                                },
                                fail: function() {
                                  uni.hideLoading(), e(!0)
                                }
                              })) : i.authorize({
                                scope: "scope.userLocation",
                                success: function() {
                                  uni.showLoading({
                                    title: a.$t("smartEscort.uni.getLocation"),
                                    mask: !0
                                  }), uni.getLocation({
                                    type: "gcj02",
                                    success: function(n) {
                                      a.pData.longitude = n.longitude, a.pData.latitude = n.latitude, uni.hideLoading(), e(!0)
                                    },
                                    fail: function() {
                                      uni.hideLoading(), e(!0)
                                    }
                                  })
                                },
                                fail: function() {
                                  uni.showModal({
                                    title: a.$t("smartEscort.locationModal.title"),
                                    content: a.$t("smartEscort.locationModal.content"),
                                    success: function(n) {
                                      n.confirm ? i.openSetting({
                                        success: function(n) {
                                          n.authSetting["scope.userLocation"] ? (uni.showLoading({
                                            title: a.$t("smartEscort.uni.getLocation"),
                                            mask: !0
                                          }), uni.getLocation({
                                            type: "gcj02",
                                            success: function(n) {
                                              a.pData.longitude = n.longitude, a.pData.latitude = n.latitude, uni.hideLoading(), e(!0)
                                            },
                                            fail: function() {
                                              uni.hideLoading(), e(!0)
                                            }
                                          })) : e(!1)
                                        },
                                        fail: function() {
                                          e(!1)
                                        }
                                      }) : e(!1)
                                    },
                                    fail: function() {
                                      e(!0)
                                    }
                                  })
                                }
                              })
                            },
                            fail: function() {
                              e(!1)
                            }
                          })
                        })));
                      case 2:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              getLocationFn: function(t) {
                var e = this,
                  n = this;
                this.$uniApi.getRequestYesLoading("GET", "ai/app/st/city/nearbyLocation?location=".concat(t.longitude, ",").concat(t.latitude, "&language=").concat(this.language, "&radius=").concat(this.distanceNum), this.$t("featureIntroduction.loading.loading")).then((function(t) {
                  1 === t.code ? t.data ? (n.popupDesc = t.data, n.$refs.popupRef.open()) : (n.goChatList(), console.log("未授权定位，走默认逻辑")) : e.$uni.showToast(t.msg || e.$t("featureIntroduction.error.loadFailed"))
                })).catch((function() {
                  e.$uni.showToast(e.$t("featureIntroduction.error.loadFailed"))
                }))
              },
              goChatList: function(e) {
                var n = {};
                e && e.cityId && (n = {
                  cid: e.chineseCityId,
                  id: e.cityId,
                  name: e.cityName,
                  language: e.language
                }), this.$eventAnalyse.analyse({
                  eventTag: "ai_go_chat_click",
                  eventName: "跳转聊天页面点击",
                  eventParams: n
                }), this.resetAudio();
                var i = e && e.cityId ? "/union/pages/aiBy/index?cid=" + e.chineseCityId + "&id=" + e.cityId + "&name=" + e.cityName : "/union/pages/aiBy/index";
                uni.navigateTo({
                  url: i
                })
              },
              submitPopup: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_submit_popup_click",
                  eventName: "确定进入弹窗"
                }), this.$refs.popupRef.close(), this.goChatList(this.popupDesc)
              },
              collectionFun: function() {
                this.$util.isLogin() && (this.$eventAnalyse.analyse({
                  eventTag: "ai_collection_click",
                  eventName: "收藏按钮点击",
                  eventParams: {
                    pagePath: "/union/pages/aiBy/collectionList",
                    language: this.language
                  }
                }), uni.navigateTo({
                  url: "/union/pages/aiBy/collectionList"
                }))
              },
              toggleLanguage: function() {
                var e = this;
                this.$eventAnalyse.analyse({
                  eventTag: "ai_language_toggle_click",
                  eventName: "语言切换按钮点击",
                  eventParams: {
                    language: this.language
                  }
                }), "zh" === this.language ? (this.language = "en", this.switchLanguage("en")) : (this.language = "zh", this.switchLanguage("zh")), uni.setNavigationBarTitle({
                  title: this.$t("smartEscort.header.title")
                }), this.pageNum = 1, this.getList(), this.audioContext.stop(), this.isPlayIng = !1, this.progress = 0, this.currentTime = "0:00", this.duration = "0:00", this.audioContext.currentTime = 0, this.audioContext.src = this.arrAudio[this.language], this.audioContext.play(), this.isPlayIng = !0;
                var n = setInterval((function() {
                  if (e.isPlayIng && e.audioContext) {
                    var t = e.audioContext.currentTime,
                      i = e.audioContext.duration || 0;
                    i > 0 && (e.duration = e.formatTime(Math.floor(i))), e.progress = 0 === i ? 0 : t / i * 100, e.currentTime = e.formatTime(t), console.log(e.duration, "this.durationthis.duration")
                  }
                  clearTimeout(n)
                }), 500)
              },
              toFeatureIntroduction: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_feature_intro_click",
                  eventName: "功能介绍按钮点击",
                  eventParams: {
                    pagePath: "/union/pages/featureIntroduction/index"
                  }
                }), this.resetAudio(), uni.navigateTo({
                  url: "/union/pages/featureIntroduction/index"
                })
              },
              initAudio: function() {
                var e = this;
                this.audioContext && this.destroyAudio(), this.audioContext = t.createInnerAudioContext(), this.audioContext.src = this.arrAudio[this.language], this.audioContext.play(), this.audioContext.loop = !1, this.audioContext.onCanplay((function() {
                  e.initAudioDuration()
                })), this.audioContext.onTimeUpdate((function() {
                  console.log(111111111111), e.updatePlayProgress()
                })), this.audioContext.onPlay((function() {
                  e.isPlayIng = !0
                })), this.audioContext.onPause((function() {
                  e.isPlayIng = !1
                })), this.audioContext.onEnded((function() {
                  e.audioPlayEnd()
                })), this.audioContext.onError((function(t) {
                  e.isPlayIng = !1
                }))
              },
              initAudioDuration: function() {
                if (this.audioContext.duration) {
                  var t = Math.floor(this.audioContext.duration);
                  this.duration = this.formatTime(t)
                }
              },
              updatePlayProgress: function() {
                console.log(1111111111111);
                var t = this.audioContext.currentTime,
                  e = this.audioContext.duration || 0;
                e > 0 && "0:00" === this.duration && (this.duration = this.formatTime(Math.floor(e))), this.progress = 0 === e ? 0 : t / e * 100, this.currentTime = this.formatTime(t)
              },
              togglePlay: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_play_pause_click",
                  eventName: "顶部音频播放暂停按钮点击"
                }), this.isPlayIng ? this.audioContext.pause() : this.audioContext.play()
              },
              manualPlay: function() {
                this.audioContext || this.initAudio(), this.audioContext.play(), this.isPlayIng = !0
              },
              resetAudio: function() {
                if (this.audioContext) try {
                  this.audioContext.pause(), this.audioContext.currentTime = 0, this.progress = 0, this.currentTime = "0:00"
                } catch (t) {
                  console.error("重置音频失败:", t)
                }
              },
              audioPlayEnd: function() {
                this.isPlayIng = !1, this.progress = 0, this.currentTime = "0:00", this.resetAudio()
              },
              formatTime: function(t) {
                if (!t || t < 0) return "0:00";
                var e = Math.floor(t / 60),
                  n = Math.floor(t % 60);
                return "".concat(e, ":").concat(n.toString().padStart(2, "0"))
              },
              destroyAudio: function() {
                this.audioContext && (this.resetAudio(), this.audioContext.offCanplay(), this.audioContext.offTimeUpdate(), this.audioContext.offPlay(), this.audioContext.offPause(), this.audioContext.offEnded(), this.audioContext.offError(), this.audioContext = null)
              },
              changeTab: function(t) {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_tab_change_click",
                  eventName: "省市区景区标签页切换点击"
                }), this.loadMore = "loading", this.activeTab = t.icon, this.pageNum = 1, this.getList()
              },
              getList: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("get", "ai/app/st/city/list", {
                  pageNum: this.pageNum,
                  pageSize: this.pageSize,
                  type: this.activeTab,
                  language: this.language
                }).then((function(n) {
                  if (uni.stopPullDownRefresh(), 1 === n.code) {
                    var i = n.data.records;
                    n.data.total > 0 ? (1 === n.data.current ? e.newsList = i : e.newsList = e.newsList.concat(i), n.data.current < n.data.pages ? (e.pageNum = e.pageNum + 1, e.loadMore = "loadmore") : e.loadMore = "nomore") : (e.newsList = [], e.loadMore = "nomore")
                  }
                  console.log(e.newsList, "this.newsListthis.newsList")
                })).catch((function(e) {
                  uni.stopPullDownRefresh()
                }))
              },
              pageLoad: function() {
                this.loadMore = "loading", this.getList()
              },
              touchStart: function(e, n) {
                this.dragTarget = n, this.startY = e.touches[0].clientY / uni.getSystemInfoSync().screenWidth * 750
              },
              touchMove: function(e, n) {
                if (this.dragTarget === n) {
                  var i = e.touches[0].clientY / uni.getSystemInfoSync().screenWidth * 750,
                    a = i - this.startY;
                  if (this.startY = i, "lang" === n) {
                    var o = this.langBtnTop + a,
                      s = this.screenHeight - this.favBtnBottom - this.favBtnHeight - this.langBtnRight - this.minGap - this.langBtnHeight;
                    o = Math.max(60, Math.min(s, o)), this.langBtnTop = o
                  } else if ("fav" === n) {
                    var u = this.favBtnBottom - a,
                      r = this.langBtnTop + this.langBtnHeight + this.langBtnRight,
                      c = this.screenHeight - r - this.minGap - this.favBtnHeight;
                    u = Math.max(20, Math.min(c, u)), this.favBtnBottom = u
                  }
                }
              },
              touchEnd: function() {
                this.dragTarget = ""
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.smart-escort-container{background-color:#fff;min-height:100vh;padding:60rpx 30rpx 0;width:100%}.smart-escort-container .header-section{align-items:center;background:linear-gradient(180deg,#cde2ff,#d0efff);border-radius:32rpx;display:-webkit-flex;display:flex;padding:22rpx;position:relative}.smart-escort-container .header-section .header-logo{width:220rpx}.smart-escort-container .header-section .header-logo .header-icon{height:240rpx;left:0rpx;position:absolute;top:-50rpx;width:240rpx;z-index:10}.smart-escort-container .header-section .header-content{flex:1}.smart-escort-container .header-section .header-content .header-nav-item1{align-items:center;color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;font-family:Source Han Sans SC;font-size:30rpx;font-weight:700;margin-bottom:8rpx;margin-top:24rpx}.smart-escort-container .header-section .header-content .header-nav-item1 .header-nav-icon{height:40rpx;margin-left:12rpx;width:38rpx}.smart-escort-container .header-section .header-content .header-nav-item2{color:#232020;font-family:Source Han Sans SC;font-size:28rpx;font-weight:400;margin-bottom:8rpx}.smart-escort-container .header-section .header-content .header-nav-item3{align-items:center;background:hsla(0,0%,100%,.7);border:2rpx solid #fff;border-radius:30rpx;color:#232020;display:-webkit-flex;display:flex;font-size:24rpx;gap:12rpx;height:60rpx;padding:4rpx 18rpx}.smart-escort-container .header-section .header-content .header-nav-item3 .header-nav-open{flex-shrink:0;height:50rpx;width:50rpx}.smart-escort-container .header-section .header-content .header-nav-item3 .header-nav-open1{flex-shrink:0;height:42rpx;width:42rpx}.smart-escort-container .header-section .header-content .header-nav-item3 .custom-progress{align-items:center;display:-webkit-flex;display:flex;flex:1;height:36rpx;margin:0 12rpx}.smart-escort-container .header-section .header-content .header-nav-item3 .custom-progress .progress-bg{background:rgba(35,32,32,.2);border-radius:4rpx;height:8rpx;position:relative;width:100%}.smart-escort-container .header-section .header-content .header-nav-item3 .custom-progress .progress-bg .progress-active{background:linear-gradient(78deg,#6585fa,#6ad5fe);border-radius:4rpx;height:100%;max-width:100%;position:relative;transition:width .2s ease}.smart-escort-container .header-section .header-content .header-nav-item3 .custom-progress .progress-bg .progress-active .progress-dot{background:linear-gradient(78deg,#6585fa,#6ad5fe);border-radius:50%;box-shadow:0 2rpx 6rpx rgba(101,133,250,.4);height:20rpx;pointer-events:none;position:absolute;right:-6rpx;top:50%;transform:translateY(-50%);width:20rpx}.smart-escort-container .header-section .header-actions{background:linear-gradient(90deg,#6585fa,#6ad5fe);border-radius:32rpx;color:#4267d3;font-size:24rpx;line-height:1.2;padding:6rpx 18rpx;position:absolute;right:22rpx;text-align:center;top:22rpx;z-index:5}.smart-escort-container .tab-container{background-color:#fff;display:-webkit-flex;display:flex;left:0;padding-bottom:30rpx;padding-top:40rpx;position:-webkit-sticky;position:sticky;z-index:20}.smart-escort-container .tab-container .tab-item{margin:0 10rpx;padding:0 8rpx;position:relative}.smart-escort-container .tab-container .tab-item .tab-name{color:rgba(0,0,0,.8);font-family:Source Han Sans SC;font-size:32rpx;font-weight:400;text-align:center}.smart-escort-container .tab-container .tab-item.active .tab-name{color:#000;font-size:32rpx;font-weight:500}.smart-escort-container .tab-container .tab-icon{bottom:-2rpx;height:16rpx;left:0;position:absolute;width:100%}.smart-escort-container .main-content{position:relative}.smart-escort-container .main-content .list-container{display:-webkit-flex;display:flex;flex-wrap:wrap;gap:20rpx}.smart-escort-container .banner-section{align-items:center;display:-webkit-flex;display:flex;gap:20rpx;justify-content:space-between;margin-top:22rpx}.smart-escort-container .banner-section .banner-left,.smart-escort-container .banner-section .banner-right{width:calc(50% - 10rpx)}.smart-escort-container .banner-section .banner-left{background-image:url('https://eshopfile.zhiyousx.com/176959270050685767.png');background-position:50%;background-size:100% 100%;padding:24rpx}.smart-escort-container .banner-section .banner-left .banner-t{color:#3ca4ed;font-family:Source Han Sans SC;font-size:28rpx;font-weight:700;margin-bottom:12rpx}.smart-escort-container .banner-section .banner-left .banner-b{background:#3ca4ed;border-radius:20rpx 20rpx 20rpx 20rpx;color:#fff;display:inline-block;font-family:Source Han Sans SC;font-size:20rpx;font-weight:400;padding:6rpx 24rpx}.smart-escort-container .banner-section .banner-right{background-image:url('https://eshopfile.zhiyousx.com/176959273627929164.png');background-position:50%;background-size:100% 100%;padding:24rpx}.smart-escort-container .banner-section .banner-right .banner-t{color:#6585fa;font-family:Source Han Sans SC;font-size:28rpx;font-weight:700;margin-bottom:12rpx}.smart-escort-container .banner-section .banner-right .banner-b{background:#6585fa;border-radius:20rpx 20rpx 20rpx 20rpx;color:#fff;display:inline-block;font-family:Source Han Sans SC;font-size:20rpx;font-weight:400;padding:6rpx 24rpx}.smart-escort-container .list-container{width:100%}.smart-escort-container .list-container .activity-list{display:-webkit-flex;display:flex;flex-wrap:wrap;justify-content:space-between;width:100%}.smart-escort-container .list-container .activity{border-radius:24rpx;box-sizing:border-box;margin-bottom:24rpx;overflow:hidden;width:calc(50% - 12rpx)}.smart-escort-container .list-container .activity .activity-image{border-radius:24rpx;height:280rpx;width:100%}.smart-escort-container .list-container .activity .activityTop{color:#000;font-family:Source Han Sans SC;font-size:28rpx;font-weight:400;margin-top:16rpx;text-align:center}.smart-escort-container .btn-container{background:#d1ebff;border:2rpx solid hsla(0,0%,100%,.8);border-radius:21rpx;box-shadow:0rpx 4rpx 17rpx 0rpx rgba(0,0,0,.12);cursor:move;height:84rpx;padding:10rpx;position:fixed;right:10rpx;top:400rpx;touch-action:none;width:84rpx;z-index:99}.smart-escort-container .btn-container .language-btn{height:100%;object-fit:cover;width:100%}.smart-escort-container .favorite-btn{bottom:200rpx;cursor:move;height:126rpx;position:fixed;right:10rpx;touch-action:none;width:136rpx;z-index:99}.popup-content{max-width:80vw}.popup-content .box{background:linear-gradient(0deg,#d0e7ff,#fff);border-radius:40rpx 40rpx 40rpx 40rpx;box-shadow:0rpx 6rpx 12rpx 0rpx rgba(0,0,0,.2);padding:40rpx}.popup-content .box .popup-img{height:116rpx;left:50%;position:absolute;top:0;transform:translate(-50%,-50%);width:116rpx}.popup-content .box .popup-desc{color:rgba(0,0,0,.7);font-family:Alibaba PuHuiTi;font-size:32rpx;font-weight:400;line-height:48rpx;margin-top:50rpx;text-align:center}.popup-content .box .btn-box{display:-webkit-flex;display:flex;justify-content:center}.popup-content .box .btn{background:linear-gradient(78deg,#6585fa,#6ad5fe);border-radius:40rpx 40rpx 40rpx 40rpx;color:#fff;font-family:Alibaba PuHuiTi;font-size:28rpx;font-weight:400;margin-top:40rpx;padding:20rpx 24rpx;text-align:center;width:300rpx}
</style>
