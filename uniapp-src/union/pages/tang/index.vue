<template>
<view class="page-box">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="top-gradient-mask"></view>
    <view class="topBtn" @click="scrollToTop($event)">
        <image class="" mode="aspectFit" src="https://eshopfile.zhiyousx.com/176716139551045208.png"></image>
    </view>
    <z-paging :auto="false" bottomBgColor="#00000000" class=" vue-ref" ref="paging" :lowerThreshold="50" safeAreaInsetBottom="isIos" :scrollable="true" style="position:fixed;z-index:11;" :useChatRecordMode="true" :value="dataList" :vueSlots="['default','bottom']" v-if="!isHide" @input="dataList = $event">
        <chat-input-bar :bg="true" class="chat-input-bar vue-ref" ref="inputBar" :definedQuestion="bottomQuestion" :detail="spotDetail" :isIos="isIos" :lang="lang" :pushingProgress="pushingProgress" :pushingProgressShow="pushingProgressShow" slot="bottom" spot="tang" @stopSpeak="stopSpeak()" @showToastPop="showToastPop()" @resetTravel="resetTravel()" @clearData="clearData()" @clearDataStop="clearDataStop()" @send="doSend()"></chat-input-bar>
        <view class="" style="position:relative;" :key="id" v-for="(item, __i0__) in dataList">
            <view class="" style="transform:scaleY(-1);">
                <chat-item class="" :dataList="dataList" :item="item" :lang="lang" :newVal="newVal" :pushingProgress="pushingProgress" @askAgain="askAgain()" @resetTravel="resetTravel()" @exclusive="exclusive()" @stopSpeak="stopSpeak()" @playVideo="playVideo()"></chat-item>
            </view>
        </view>
        <view class="menu" style="transform:scaleY(-1);">
            <view class="menu-head">
                <view class="menu-welcome">
                    <image class="mascot" src="https://res.zhiyousx.com/ahs-2d/test/2026/01/16/176854386173961507.gif"></image>
                    <view class="speakPop">
                        <view class="title">
                            <text class="">{{lang==='zh'?'哈喽~':'Hello~'}}</text>
                            <image class="" mode="aspectFit" src="https://eshopfile.zhiyousx.com/176820212671250599.png"></image>
                        </view>
                        <view class="content">{{ (lang==='zh'?'我是你的专属芙蓉园灯会智能客服导览助手!':'I am your exclusive Furong Garden Lantern Festival smart customer service guide assistant') }}</view>
                    </view>
                </view>
            </view>
            <view class="enter-btns">
                <view :class="['enter-btn-vlog','',lang==='zh'?'zh':'',lang==='en'?'en':'']" @click="toVlog($event)"></view>
            </view>
            <view class="defined-question" v-if="$root.g0">
                <view class="question-title" v-if="$root.g1">
                    <image class="" mode="aspectFill" src="https://eshopfile.zhiyousx.com/176845755256412891.png"></image>
                    <text class="">{{lang==='zh'?'猜你想问':'You might want to ask'}}</text>
                </view>
                <swiper :autoplay="true" :circular="true" class="question-swiper" :disableTouch="true" :displayMultipleItems="1" :duration="800" :interval="4000" :vertical="true" @change="questionChange($event)">
                    <swiper-item class="" :key="sidx" v-for="(slide, sidx) in questionSlides">
                        <view class="question-slide">
                            <view class="question-item" :key="id" v-for="(item, __i1__) in slide">
                                <text class="question-text">{{item.description}}</text>
                                <image class="" mode="aspectFill" src="https://eshopfile.zhiyousx.com/176714582692142151.png" style="width:14px;height:14px;border-radius:20rpx;"></image>
                            </view>
                        </view>
                    </swiper-item>
                </swiper>
            </view>
        </view>
        <view class="header" :style="'height:'+headerHeight+'px'+';'"></view>
    </z-paging>
    <view class="notice-detail-popup" v-if="showNoticeDetailPopup" @click="closeNoticeDetail($event)">
        <view class="popup-content" @click.stop="($event)">
            <image class="popup-img" src="https://eshopfile.zhiyousx.com/176766627375473751.png"></image>
            <view class="close-btn" @click="closeNoticeDetail($event)">
                <image class="" mode="aspectFill" src="https://eshopfile.zhiyousx.com/176766604288459703.png" style="width:32rpx;height:32rpx;"></image>
            </view>
            <view class="popup-title">{{currentNotice?currentNotice.title:''}}</view>
            <view class="popup-body">
                <text class="popup-content-text">{{currentNotice?currentNotice.content:''}}</text>
            </view>
        </view>
    </view>
    <view class="subscribe-modal" v-if="showSubscribeModal">
        <view class="subscribe-content" @click.stop="($event)">
            <view class="subscribe-header">
                <text class="subscribe-title">开启二次入园提醒</text>
            </view>
            <view class="subscribe-body">
                <text class="subscribe-text">开启消息通知后，当您符合二次入园条件时，我们将第一时间提醒您，避免错过再次入园。</text>
            </view>
            <view class="subscribe-footer">
                <button class="subscribe-btn" @click="handleSubscribeAuth($event)">开启提醒</button>
                <button class="subscribe-btn secondary" @click="closeSubscribeModal(2)">暂不开启</button>
            </view>
        </view>
    </view>
    <view class="subscribe-modal" v-if="showToastModal" @click="closeToastModal($event)">
        <view class="subscribe-content" @click.stop="($event)">
            <view class="subscribe-body">
                <view class="subscribe-text">
                    <block v-if="lang==='zh'">
                        <text class="">如果您需要专业讲解可以联系客服电话</text>
                        <text class="phone-highlight" @click="callPhone('18629089083')">18629089083</text>
                        <text class="">。也可前往永宁门月城游客服务中心 或永宁门北口售票处进行咨询寻找。</text>
                    </block>
                    <block v-else>
                        <text class="">If you need professional guidance, please call customer service at</text>
                        <text class="phone-highlight" @click="callPhone('18629089083')">18629089083</text>
                        <text class="">. You can also visit the Yongning Gate Yuecheng Visitor Service Center or the Yongning Gate North Ticket Office for consultation.</text>
                    </block>
                </view>
            </view>
            <view class="subscribe-footer">
                <button class="subscribe-btn" @click="closeToastModal($event)">{{lang==='zh'?'我知道了':'Got it'}}</button>
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
              zPaging: function() {
                Promise.all([i.e("common/vendor"), i.e("union/common/vendor"), i.e("union/components1/z-paging/z-paging")]).then(function() {
                  return resolve(i("a7ee"))
                }.bind(null, i)).catch(i.oe)
              },
              chatInputBar: function() {
                i.e("union/components1/chat-input-bar/chat-input-bar-greatWall").then(function() {
                  return resolve(i("1297"))
                }.bind(null, i)).catch(i.oe)
              },
              chatItem: function() {
                i.e("union/components1/chat-item/chat-item-greatWall").then(function() {
                  return resolve(i("e3d2"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            computed: {
              currentQuestionList: function() {
                if (this.guessQuestion.length <= 3) return this.guessQuestion;
                for (var t = 3 * this.currentQuestionIndex, e = [], i = 0; i < 3; i++) {
                  var n = (t + i) % this.guessQuestion.length;
                  e.push(this.guessQuestion[n])
                }
                return e
              },
              questionSlides: function() {
                var t = Array.isArray(this.guessQuestion) ? this.guessQuestion : [],
                  e = [];
                if (0 === t.length) return e;
                for (var i = Math.ceil(t.length / 3), n = 0; n < i; n++) {
                  for (var s = [], a = 0; a < 3; a++) {
                    var o = 3 * n + a;
                    if (o < t.length) s.push(t[o]);
                    else {
                      var r = t[o % t.length];
                      s.push(h(h({}, r), {}, {
                        id: "".concat(r.id, "-pad-").concat(n, "-").concat(a)
                      }))
                    }
                  }
                  e.push(s)
                }
                return e
              }
            },
            data: function() {
              return {
                isHide: !1,
                isIos: "ios" === uni.getSystemInfoSync().platform,
                dataList: [],
                pushingProgress: !0,
                pushingProgressShow: !0,
                currrentId: "",
                newVal: "",
                spotDetail: {},
                headerHeight: 0,
                historyList: [],
                hasHistory: !1,
                flowId: "",
                dataInfosList: [],
                stratSet: !1,
                task: null,
                typeVideo: 0,
                timerList: [],
                index: 0,
                hoveImg: !1,
                hoveImgList: [],
                hoveImgListUrl: [],
                character: null,
                timeNetwork: null,
                newValCopy: "",
                currentIndex: 0,
                currentContent: "",
                sendState: !1,
                isNetworkAnomaly: !1,
                delayBtn: !0,
                partialJson: "",
                WshowHide: !1,
                audioQueue: [],
                audioContext: null,
                isPlaying: !1,
                streamFinished: !0,
                lang: "zh",
                location: null,
                guessQuestion: [],
                bottomQuestion: [],
                noticeList: [],
                currentNoticeIndex: 0,
                noticeInterval: null,
                currentQuestionIndex: 0,
                questionInterval: null,
                questionSwiperCurrent: 0,
                showNoticeDetailPopup: !1,
                currentNotice: null,
                needSubscribe: !1,
                showSubscribeModal: !1,
                showToastModal: !1,
                spotCodes: [{
                  code: "P001",
                  name: "演出",
                  enName: "performance"
                }, {
                  code: "S001",
                  name: "商店",
                  enName: "shop"
                }, {
                  code: "S002",
                  name: "景点",
                  enName: "attraction"
                }, {
                  code: "F001",
                  name: "美食",
                  enName: "food"
                }, {
                  code: "W001",
                  name: "卫生间",
                  enName: "toilet"
                }, {
                  code: "V001",
                  name: "游客中心",
                  enName: "visitor venter"
                }, {
                  code: "P002",
                  name: "停车场",
                  enName: "parking lot"
                }, {
                  code: "L001",
                  name: "灯组",
                  enName: "light group"
                }, {
                  code: "E001",
                  name: "出入口",
                  enName: "entrance/exit"
                }],
                spotLocation: {
                  leftTopLongitude: 108.966992,
                  leftTopLatitude: 34.252474,
                  rightBottomLongitude: 108.932271,
                  rightBottomLatitude: 34.250639
                },
                baseUrl: "ai/",
                langBtnTopPx: 0,
                langBtnStartY: 0,
                langBtnStartTopPx: 0,
                langBtnTouchStartTime: 0,
                langBtnMovedDistance: 0,
                draggingLangBtn: !1,
                windowHeight: uni.getSystemInfoSync().windowHeight,
                locationTimer: null
              }
            },
            onShareAppMessage: function() {
              var t = "/union/pages/tang/index?lang=".concat(this.lang);
              return {
                title: "AI助手小七陪你畅游灯会",
                imageUrl: "https://eshopfile.zhiyousx.com/177025616615263779.png",
                path: this.$util.setShareUrl(t)
              }
            },
            onLoad: function(e) {
              var i = this;
              r.default.initLang();
              var s = uni.getSystemInfoSync();
              "wxMsg" == e.source && (this.currentNotice = {
                title: "温馨提示：灯会开灯啦！您的门票支持当日二次入园。",
                content: "需本人在购票当日完成首次检票入园后，于景区规定时间内返回使用；超出当日营业时间或超时返回，将无法再次入园。"
              }, this.showNoticeDetailPopup = !0), e.lang && (this.lang = e.lang), "android" === s.platform ? this.isIos = !1 : "ios" === s.platform ? this.isIos = !0 : this.isIos = !1, this.langBtnTopPx = this.$util ? this.$util.rpxToPx(400) : 400;
              var a = uni.getMenuButtonBoundingClientRect();
              this.headerHeight = a ? a.bottom + 5 : 60, uni.getStorageSync("wxopenid") ? this.createSession() : this.getOpenId().then((function(e) {
                uni.setStorageSync("unionid", e.unionid), uni.setStorageSync("wxopenid", e.openid), i.createSession()
              })), this.getDeafultData()
            },
            onUnload: function() {
              this.audioContext && this.audioContext.destroy(), this.locationTimer && clearTimeout(this.locationTimer), this.stopSpeak(), this.isPlaying = !1, this.clearAudioCache(), this.clearNoticeRotation(), this.clearQuestionRotation(), this.character && clearTimeout(this.character);
              try {
                var t = n.getFileSystemManager(),
                  e = n.env.USER_DATA_PATH;
                t.readdirSync(e).forEach((function(i) {
                  var n = "".concat(e, "/").concat(i);
                  try {
                    t.statSync(n).isFile() && (i.includes("audio") || i.includes("record") || i.endsWith(".mp3") || i.endsWith(".wav")) && (t.unlinkSync(n), console.log("删除录音临时文件:", n))
                  } catch (t) {
                    console.error("检查文件时出错:", t)
                  }
                }))
              } catch (t) {
                console.error("清理录音临时文件时出错:", t)
              }
            },
            onHide: function() {
              this.stopSpeak(), this.isPlaying = !1, this.clearAudioCache(), this.clearNoticeRotation(), this.clearQuestionRotation(), this.character && (clearTimeout(this.character), this.character = null)
            },
            methods: {
              onLangBtnTouchStart: function(t) {
                var e = t && t.touches && t.touches[0];
                e && (this.draggingLangBtn = !1, this.langBtnMovedDistance = 0, this.langBtnTouchStartTime = Date.now(), this.langBtnStartY = e.clientY, this.langBtnStartTopPx = this.langBtnTopPx)
              },
              onLangBtnTouchMove: function(e) {
                var i = e && e.touches && e.touches[0];
                if (i) {
                  var n = i.clientY - this.langBtnStartY;
                  this.langBtnMovedDistance = Math.abs(n), this.langBtnMovedDistance > 6 && (this.draggingLangBtn = !0);
                  var s = this.langBtnStartTopPx + n,
                    a = this.$util ? this.$util.rpxToPx(64) : 64,
                    o = Math.max(10, (this.windowHeight || uni.getSystemInfoSync().windowHeight) - a - 10);
                  s < 10 && (s = 10), s > o && (s = o), this.langBtnTopPx = s
                }
              },
              onLangBtnTouchEnd: function() {
                var t = Date.now() - this.langBtnTouchStartTime,
                  e = this.langBtnMovedDistance;
                !this.draggingLangBtn && e <= 8 && t < 300 && this.changeLang(), this.draggingLangBtn = !1
              },
              showToastPop: function() {
                this.showToastModal = !0
              },
              closeToastModal: function() {
                this.showToastModal = !1
              },
              callPhone: function(e) {
                e && uni.makePhoneCall({
                  phoneNumber: e
                })
              },
              showSubscribeAuthModal: function() {
                this.showSubscribeModal = !0
              },
              closeSubscribeModal: function(t) {
                this.showSubscribeModal = !1, 2 == t && this.setSubscribeStatus(2)
              },
              handleSubscribeAuth: function() {
                this.closeSubscribeModal(), this.requestSubscribe()
              },
              getDeafultData: function() {
                this.getSpotCoordinates(), this.getDefinedQuestion(), this.getNoticeList()
              },
              getSpotCoordinates: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getScenicSpotMapBaseVo?mapId=777", {}).then((function(e) {
                  1 === e.code && e.data && e.data.leftTopLongitude && e.data.leftTopLatitude && e.data.rightBottomLongitude && e.data.rightBottomLatitude && (t.spotLocation = {
                    leftTopLongitude: Number(e.data.leftTopLongitude),
                    leftTopLatitude: Number(e.data.leftTopLatitude),
                    rightBottomLongitude: Number(e.data.rightBottomLongitude),
                    rightBottomLatitude: Number(e.data.rightBottomLatitude)
                  })
                })).finally((function() {
                  uni.getLocation()
                }))
              },
              getPostMessage: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("get", this.baseUrl + "wall/subscribe/status", {
                  openId: uni.getStorageSync("wxopenid")
                }).then((function(t) {
                  1 === t.code && !1 === t.data && (e.showSubscribeAuthModal(), console.log("需要订阅消息，显示授权弹框"))
                }))
              },
              requestSubscribe: function() {
                var e = this;
                t.getSetting({
                  withSubscriptions: !0,
                  success: function(i) {
                    return console.log("获取设置结果:", i), i.subscriptionsSetting.mainSwitch ? i.subscriptionsSetting.itemSettings && "reject" === i.subscriptionsSetting.itemSettings.JKcsY5GZ9oyAv95qaAceciVMtLTffbAhJLU_3twsuu8 ? (console.log("用户已拒绝该模板消息"), void uni.showModal({
                      title: "提示",
                      content: "您已拒绝接收该类型消息，需要重新授权才能接收通知",
                      success: function(i) {
                        i.confirm && t.openSetting({
                          success: function(t) {
                            console.log("重新授权设置结果:", t), t.authSetting && t.authSetting["scope.subscribeMessage"] && uni.requestSubscribeMessage()
                          }
                        })
                      }
                    })) : void uni.requestSubscribeMessage() : (console.log("订阅消息总开关关闭，引导用户开启"), void uni.showModal({
                      title: "提示",
                      content: "需要开启订阅消息权限才能接收通知，是否前往设置？",
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
                console.log("开始调用requestSubscribeMessage API"), uni.requestSubscribeMessage({
                  tmplIds: ["JKcsY5GZ9oyAv95qaAceciVMtLTffbAhJLU_3twsuu8"],
                  success: function(t) {
                    console.log("订阅消息请求成功:", t), "accept" === t.JKcsY5GZ9oyAv95qaAceciVMtLTffbAhJLU_3twsuu8 ? (e.$uni.showToast("授权成功！"), e.setSubscribeStatus(), e.needSubscribe = !1) : "reject" === t.JKcsY5GZ9oyAv95qaAceciVMtLTffbAhJLU_3twsuu8 ? (e.$uni.showToast("您拒绝了消息订阅，将无法收到二次入园通知"), e.setSubscribeStatus(2)) : "ban" === t.JKcsY5GZ9oyAv95qaAceciVMtLTffbAhJLU_3twsuu8 && e.$uni.showToast("消息订阅功能被禁用，请检查微信设置")
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
              setSubscribeStatus: function(e) {
                this.$uniApi.dataRequestNoLoading("post", this.baseUrl + "wall/subscribe/add", {
                  openId: uni.getStorageSync("wxopenid"),
                  status: e || 0
                }).then((function(t) {
                  t.code
                }))
              },
              getLocation: function() {
                var e = this;
                uni.getLocation({
                  type: "gcj02",
                  success: function(i) {
                    e.location = {
                      latitude: i.latitude,
                      longitude: i.longitude
                    }, uni.setStorageSync("location", e.location), console.log(e.location, "获取位置成功"), Number(e.location.longitude) > e.spotLocation.rightBottomLongitude - 1e-4 && Number(e.location.longitude) < Number(e.spotLocation.leftTopLongitude) + 1e-4 && Number(e.location.latitude) > e.spotLocation.rightBottomLatitude - 1e-4 && Number(e.location.latitude) < Number(e.spotLocation.leftTopLatitude) + 1e-4 ? uni.getStorageSync("wxopenid") ? e.getPostMessage() : e.getOpenId().then((function(i) {
                      uni.setStorageSync("unionid", i.unionid), uni.setStorageSync("wxopenid", i.openid), e.getPostMessage()
                    })) : console.log("当前位置不在景点范围内"), e.locationTimer && clearTimeout(e.locationTimer), e.locationTimer = setTimeout((function() {
                      uni.getLocation()
                    }), 15e3)
                  },
                  fail: function(t) {
                    console.error("获取位置失败:", t)
                  },
                  complete: function() {}
                })
              },
              getOpenId: function() {
                return new Promise((function(e, i) {
                  t.login({
                    success: function(n) {
                      t.request({
                        url: getApp().globalData.requestUrl + "manager/app/v1/wxPopular/getSessionKeyPro/".concat(n.code),
                        method: "GET",
                        success: function(t) {
                          1 === t.data.code ? e(t.data.data) : i(t)
                        },
                        fail: function(t) {
                          i(t)
                        }
                      })
                    }
                  })
                }))
              },
              createSession: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("post", this.baseUrl + "aiEscort/session/create", {
                  bussType: 1,
                  openId: uni.getStorageSync("wxopenid"),
                  title: u.format(new Date, "yyyy-MM-dd hh:mm:ss:S")
                }).then((function(t) {
                  1 === t.code && (e.flowId = t.data)
                }))
              },
              toVlog: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "tang_vlog_click",
                  eventName: "大唐芙蓉园客服点击vlog",
                  eventParams: {
                    pagePath: "/union/pages/vlog/index"
                  }
                }), uni.navigateTo({
                  url: "/union/pages/vlog/index"
                })
              },
              initQuestionRotation: function() {
                var t = this;
                this.clearQuestionRotation(), this.guessQuestion.length > 3 && (this.questionInterval = setInterval((function() {
                  t.currentQuestionIndex = (t.currentQuestionIndex + 1) % Math.ceil(t.guessQuestion.length / 3)
                }), 5e3))
              },
              clearQuestionRotation: function() {
                this.questionInterval && (clearInterval(this.questionInterval), this.questionInterval = null, this.currentQuestionIndex = 0)
              },
              getDefinedQuestion: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("get", this.baseUrl + "wallRecommend/list", {
                  languageCode: this.lang,
                  scenicType: 1
                }).then((function(e) {
                  1 === e.code && (e.data && e.data.length ? (t.guessQuestion = e.data.filter((function(t) {
                    return 1 === t.type && 0 === t.category
                  })), t.bottomQuestion = e.data.filter((function(t) {
                    return 2 === t.type
                  })), t.questionSwiperCurrent = 0) : (t.guessQuestion = [], t.bottomQuestion = [], t.clearQuestionRotation()))
                }))
              },
              showNoticeDetail: function(t) {
                this.currentNotice = t, this.showNoticeDetailPopup = !0
              },
              closeNoticeDetail: function() {
                this.showNoticeDetailPopup = !1, this.currentNotice = null
              },
              changeLang: function() {
                if (!this.isPlaying && this.pushingProgress) {
                  this.lang = "zh" === this.lang ? "en" : "zh";
                  var e = "zh" == this.lang ? "zh-CN" : "en-US";
                  uni.setStorageSync("subLang", e), r.default.switchLang(e), this.getDeafultData(), this.dataList = []
                } else this.$uni.showToast("zh" === this.lang ? "正在回答，请稍候" : "Answering, please wait")
              },
              scrollToTop: function() {
                this.$refs.paging.scrollToTop()
              },
              doSend: function(t, e) {
                var i = this;
                this.pushingProgress = !1, this.stratSet = !0, this.isPlaying = !1, this.audioQueue = [], this.$refs.paging.scrollToBottom(), this.flowId ? setTimeout((function() {
                  if (e || i.dataList.unshift({
                      content: t,
                      type: 1,
                      state: 1,
                      end: !0,
                      name: "ai",
                      list: [],
                      id: (new Date).getTime()
                    }), i.dataList.unshift({
                      content: "",
                      content1: "",
                      type: 0,
                      state: 0,
                      end: !1,
                      name: "ai",
                      isMe: !1,
                      list: [],
                      id: Date.now() + Math.floor(1e3 * Math.random())
                    }), i.currrentId = i.dataList[0].id, e && e.id) {
                    var n = e.exclusive;
                    i.toSend(n)
                  } else i.toSend(t);
                  i.$refs.paging.scrollToBottom()
                }), 300) : this.$uni.showToast("zh" === this.lang ? "会话创建失败，请稍后再试" : "Session creation failed, please try again later")
              },
              toSend: function(e) {
                var i, n = this,
                  s = this;
                this.dataInfosList = [], this.pushingProgressShow = !1, this.streamFinished = !1;
                var r = (i = {
                  language: 0,
                  question: e,
                  userId: uni.getStorageSync("wxopenid"),
                  sessionId: this.flowId,
                  bussType: 1
                }, (0, o.default)(i, "language", "zh" === this.lang ? 1 : 2), (0, o.default)(i, "location", "".concat(uni.getStorageSync("location").longitude, ",").concat(uni.getStorageSync("location").latitude)), i);
                this.index = 0, this.newVal = "", s.timeNetwork = setTimeout((function() {
                  n.clearAllTimers(), n.clearStarts(), n.task && (n.dataList[0].content = "zh" === n.lang ? "网络繁忙，请稍后重试!" : "Network is busy, please try again later!", n.task.abort())
                }), 15e3), this.task = t.request({
                  url: "".concat(getApp().globalData.requestUrl).concat(this.baseUrl, "app/paradise/ai/chat"),
                  enableChunked: !0,
                  method: "POST",
                  timeout: 9e5,
                  data: r,
                  success: function(t) {
                    200 == t.statusCode && (n.stratSet = !1, n.WshowHide = !1, n.newValCopy = "", n.newVal += " ", n.character || n.addNextCharacter()), 400 == t.statusCode && (n.clearStarts(), n.dataList[0].content = "zh" === n.lang ? "网络走丢了，请稍后重试!" : "Network connection lost, please try again later!", n.task && n.task.abort()), n.streamFinished = !0, !n.isPlaying && 0 === n.audioQueue.length && n.index >= n.newVal.length && (s.dataList[0].end = !0), s.$data.currentIndex = 0, s.$data.currentContent = "", s.$data.sendState = !1, s.isNetworkAnomaly = !1, s.delayBtn = !0, n.clearAllTimers()
                  },
                  fail: function(t) {
                    console.log(t, "ssssssssssss"), n.stratSet = !1, n.delayBtn = !0, "request:fail " == t.errMsg && (n.clearStarts(), n.dataList[0].content = "zh" === n.lang ? "网络错误，请稍后重试!" : "Network error, please try again later!", n.task && n.task.abort()), n.streamFinished = !0, n.clearAllTimers(), "request:fail abort" == t.errMsg && n.dataList[0].content && n.dataList[0].content.endsWith('<img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>') && (n.dataList[0].content = n.dataList[0].content.slice(0, n.dataList[0].content.length - 97))
                  }
                }), this.task.onChunkReceived((function(t) {
                  n.clearAllTimers(), s.delayBtn = !0, s.isNetworkAnomaly = !0, s.timeNetwork = setTimeout((function() {
                    n.clearAllTimers(), n.clearStarts(), n.$uni.showToast("zh" === n.lang ? "网络繁忙，请稍后重试！" : "Network is busy, please try again later!"), n.task && n.task.abort(), n.streamFinished = !0
                  }), 3e4), s.timerList.push(s.timeNetwork);
                  var e, i = new Uint8Array(t.data);
                  if ("[object Uint8Array]" === Object.prototype.toString.call(i)) e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, a.default)(i))));
                  else if (i instanceof ArrayBuffer) {
                    var o = new Uint8Array(i);
                    e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, a.default)(o))))
                  }
                  3 != s.typeVideo && (s.typeVideo = 3), console.log("onChunkReceivedonChunkReceived"), e = s.partialJson + e, s.partialJson = "";
                  for (var r = e.split("^"), c = 0; c < r.length; c++) {
                    var h = r[c];
                    if (h) try {
                      var u = JSON.parse(h);
                      if (console.log(u, "resJson"), "2" == u.extend.code && n.handleAudioData(u.data), 0 == u.extend.type && "c001" == u.extend.code && (s.dataList[0].state = 1, s.newVal += u.data, s.character || s.addNextCharacter()), 0 == u.extend.type && "e001" == u.extend.code && (s.newVal += u.data, s.character || s.addNextCharacter()), "s001" == u.extend.code && 0 == u.extend.type && (s.dataList[0].state = 1, s.newVal += u.data, s.character || s.addNextCharacter()), "o001" == u.extend.code && (s.dataList[0].state = 1, !s.character))
                        if (u) {
                          var l = "zh" === n.lang ? "为您推荐官方游玩攻略：" : "Recommended official tour guide:";
                          s.newVal.includes(l) || (s.newVal += l), s.addNextCharacter()
                        } else s.dataList[0].officialGuide = [], s.dataList[0].officialGuideType = 1;
                      "c001" !== u.extend.code && "2" !== u.extend.code && n.dataInfosList.push(u)
                    } catch (t) {
                      c === r.length - 1 && (s.partialJson = h)
                    }
                  }
                }))
              },
              addNextCharacter: function() {
                var t = this;
                if (this.index < this.newVal.length) {
                  "の" == this.newVal[this.index] && this.dataList.unshift({
                    content: "",
                    content1: "",
                    type: 0,
                    state: 0,
                    end: !1,
                    name: "ai",
                    isMe: !1,
                    list: [],
                    img: !0,
                    id: (new Date).getTime()
                  });
                  var e = "の" == this.newVal[this.index] ? "" : this.newVal[this.index];
                  if (this.newVal.indexOf("の") > -1) {
                    var i = this.dataList[0].content1.lastIndexOf('">'),
                      n = this.dataList[0].content1.lastIndexOf("景点图片：<"),
                      s = this.dataList[0].content1.lastIndexOf("</video>"),
                      a = this.dataList[0].content1.lastIndexOf("景点视频：<");
                    this.dataList[0].content && n > -1 && -1 == this.hoveImgList.indexOf(n) && (-1 == i || -1 == this.hoveImgList.indexOf(i) || i < n) && !this.hoveImg ? (this.dataList[0].content += 'img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(n)) : i > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(i) ? (this.hoveImgList.push(i), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<i"), this.dataList[0].content1.lastIndexOf('">') + 2).replace(/ - /g, "-")), this.dataList[0].content = this.dataList[0].content.replace('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImgListUrl[this.hoveImgListUrl.length - 1]), this.$forceUpdate()) : this.dataList[0].content && a > -1 && -1 == this.hoveImgList.indexOf(a) && (-1 == s || -1 == this.hoveImgList.indexOf(s) || s < a) && !this.hoveImg ? (this.dataList[0].content += 'img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(a)) : s > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(s) ? (this.hoveImgList.push(s), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<v"), this.dataList[0].content1.lastIndexOf("</video>") + 8).replace(/ - /g, "-")), this.dataList[0].content += this.hoveImgListUrl[this.hoveImgListUrl.length - 1], this.$forceUpdate()) : this.hoveImg || (this.dataList[0].content += e)
                  } else this.dataList[0].content += e;
                  this.dataList[0].content1 += e, this.index++, this.character = setTimeout((function() {
                    t.addNextCharacter()
                  }), "zh" == this.lang ? 80 : 40)
                } else clearTimeout(this.character), this.character = null, this.showCards(), this.streamFinished && !this.isPlaying && 0 === this.audioQueue.length && (this.dataList[0].end = !0, this.clearStarts())
              },
              showCards: function() {
                var t = this;
                JSON.parse(JSON.stringify(this.dataInfosList)).forEach((function(e) {
                  t.setCardInfo(e)
                })), this.dataInfosList = []
              },
              clearStarts: function() {
                this.hoveImg = !1, this.hoveImgList = [], this.hoveImgListUrl = [], this.stratSet = !1, this.pushingProgress = !0, this.pushingProgressShow = !0, this.clearAllTimers(), this.character && (clearTimeout(this.character), this.character = null)
              },
              setCardInfo: function(t) {
                t && (1 == t.extend.type && "e001" == t.extend.code && (this.dataList[0].exclusiveRoute = t.data || {}), 0 == t.extend.type && "eq001" == t.extend.code && (this.dataList[0].exclusive = t.data || {}), "s001" == t.extend.code && 1 == t.extend.type && (this.dataList[0].list = t.data || []), "o001" == t.extend.code && 1 == t.extend.type && (this.dataList[0].officialGuide = t.data || [], this.dataList[0].officialGuideType = 2), 0 == t.extend.type && "q001" == t.extend.code && (this.dataList[0].divergenceProblem = t.data || []), -1 != this.spotCodes.findIndex((function(e) {
                  return e.code == t.extend.code
                })) && 1 == t.extend.type && (this.dataList[0].spotMsg = "zh" === this.lang ? "为您找到最近的".concat(this.spotCodes.find((function(e) {
                  return e.code == t.extend.code
                })).name, "。") : "For you, the nearest ".concat(this.spotCodes.find((function(e) {
                  return e.code == t.extend.code
                })).enName, " is:"), t.data.forEach((function(t) {
                  t.chinese = JSON.parse(t.chinese) || {}, t.english = JSON.parse(t.english) || {}
                })), this.dataList[0].spotList = t.data || []), "D001" == t.extend.code && 1 == t.extend.type && (t.data.scenic.forEach((function(t) {
                  t.chinese = JSON.parse(t.chinese) || {}, t.english = JSON.parse(t.english) || {}
                })), t.data.food.forEach((function(t) {
                  t.chinese = JSON.parse(t.chinese) || {}, t.english = JSON.parse(t.english) || {}
                })), t.data.hidden.forEach((function(t) {
                  t.chinese = JSON.parse(t.chinese) || {}, t.english = JSON.parse(t.english) || {}
                })), this.dataList[0].foodList = t.data.food || [], this.dataList[0].scenicList = t.data.scenic || [], this.dataList[0].storeList = t.data.hidden || []), "T002" == t.extend.code && 1 == t.extend.type && (this.dataList[0].phone = t.data || ""), "L002" == t.extend.code && 1 == t.extend.type && (this.dataList[0].picture = t.data || ""), "P003" == t.extend.code && 1 == t.extend.type && (this.dataList[0].posture = !0), this.$forceUpdate())
              },
              askAgain: function(t) {
                if (this.$eventAnalyse.analyse({
                    eventTag: "tang_default_click",
                    eventName: "大唐芙蓉园点击默认问题",
                    eventParams: {
                      message: t
                    }
                  }), !this.pushingProgress) return this.$uni.showToast("zh" == lang ? "请稍候" : "Please wait"), !1;
                this.doSend(t)
              },
              clearAllTimers: function() {
                this.timeNetwork && (clearTimeout(this.timeNetwork), this.timeNetwork = null), this.timerList.forEach((function(t) {
                  clearTimeout(t)
                })), this.timerList = []
              },
              handleAudioData: function(t) {
                var e = this,
                  i = "".concat(n.env.USER_DATA_PATH, "/audio_").concat(Date.now(), ".mp3"),
                  s = n.getFileSystemManager();
                try {
                  s.writeFile({
                    filePath: i,
                    data: t,
                    encoding: "base64",
                    success: function() {
                      e.audioQueue.push(i), e.isPlaying || e.playNextAudio()
                    },
                    fail: function(t) {
                      console.error("保存音频文件失败:", t)
                    }
                  })
                } catch (t) {
                  console.error("处理音频数据失败:", t)
                }
              },
              playNextAudio: function() {
                var e = this;
                if (0 === this.audioQueue.length) return this.isPlaying = !1, this.currentAudioIndex = 0, void(this.streamFinished && (this.clearAudioCache(), !this.stratSet && this.index >= this.newVal.length && (this.dataList[0].end = !0, this.clearStarts())));
                this.isPlaying = !0;
                var i = this.audioQueue[0];
                this.audioContext = t.createInnerAudioContext(), this.audioContext.src = i, this.audioContext.play(), this.audioContext.onEnded((function() {
                  e.audioContext.destroy(), e.audioContext = null;
                  var t = n.getFileSystemManager();
                  try {
                    t.unlinkSync(i)
                  } catch (t) {
                    console.error("删除已播放音频文件失败:", t)
                  }
                  e.audioQueue.shift(), e.playNextAudio()
                })), this.audioContext.onError((function(t) {
                  console.error("音频播放错误:", t), e.audioContext.destroy(), e.audioContext = null;
                  var s = n.getFileSystemManager();
                  try {
                    s.unlinkSync(i)
                  } catch (t) {
                    console.error("删除播放失败音频文件失败:", t)
                  }
                  e.audioQueue.shift(), e.playNextAudio()
                }))
              },
              stopSpeak: function() {
                if (this.clearAllTimers(), this.streamFinished = !0, this.character && (clearTimeout(this.character), this.character = null), this.audioContext) try {
                  this.audioContext.offEnded && this.audioContext.offEnded(), this.audioContext.offError && this.audioContext.offError(), this.audioContext.stop(), this.audioContext.destroy()
                } catch (t) {
                  console.error("停止音频播放失败:", t)
                } finally {
                  this.audioContext = null
                }
                this.isPlaying = !1, this.clearAudioCache(), this.dataList && this.dataList[0] && "string" == typeof this.dataList[0].content && (this.dataList[0].content = this.dataList[0].content.replaceAll('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', "")), this.dataList && this.dataList[0] && (this.dataList[0].end = !0), this.pushingProgress = !0, this.pushingProgressShow = !0, this.task && (this.task.abort(), this.dataList[0].content || (this.dataList[0].content = "zh" === this.lang ? "回答终止，请重新提问。" : "Response terminated, please ask again."), this.task = null, this.typeVideo = 4, this.showCards(), this.clearStarts())
              },
              clearAudioCache: function() {
                try {
                  var t = n.getFileSystemManager();
                  if (Array.isArray(this.audioQueue) && this.audioQueue.length && this.audioQueue.forEach((function(e) {
                      console.log(e);
                      try {
                        t.unlinkSync(e)
                      } catch (t) {
                        console.log("删除音频文件失败:", t)
                      }
                    })), this.audioContext && this.audioContext.src && "string" == typeof this.audioContext.src) {
                    var e = this.audioContext.src;
                    if (0 === e.indexOf(n.env.USER_DATA_PATH)) {
                      console.log(e);
                      try {
                        n.getFileSystemManager().unlinkSync(e)
                      } catch (t) {
                        console.log("删除音频文件失败:", t)
                      }
                    }
                  }
                } catch (t) {}
                this.audioQueue = []
              },
              startNoticeRotation: function() {
                var t = this;
                this.noticeInterval && clearInterval(this.noticeInterval), this.noticeList && this.noticeList.length > 0 && (this.noticeInterval = setInterval((function() {
                  t.currentNoticeIndex = (t.currentNoticeIndex + 1) % t.noticeList.length
                }), 3e3))
              },
              clearNoticeRotation: function() {
                this.noticeInterval && (clearInterval(this.noticeInterval), this.noticeInterval = null)
              },
              getNoticeList: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("get", this.baseUrl + "wall/push/page", {
                  pageOn: 1,
                  pageSize: 99999,
                  languageCode: this.lang,
                  scenicType: 1
                }).then((function(e) {
                  1 === e.code && e.data.records && e.data.records.length && (t.noticeList = e.data.records.filter((function(t) {
                    return 0 == t.isEnable
                  })), t.currentNoticeIndex = 0)
                }))
              },
              noticeChange: function(t) {
                this.currentNoticeIndex = t.detail.current
              },
              questionChange: function(t) {
                this.questionSwiperCurrent = t.detail.current
              },
              touchmove: function() {
                return !1
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:url('https://eshopfile.zhiyousx.com/176699948573986869.png')no-repeat 50%;background-size:100% 100%;height:100vh;width:100%}.page-box .top-gradient-mask{background:linear-gradient(180deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,0));height:150rpx;left:0;pointer-events:none;position:fixed;right:0;top:0;z-index:90}.page-box .isHide{display:none}.page-box .langBtn{align-items:center;background:hsla(0,0%,100%,.8);border:2rpx solid #fff;border-radius:20rpx 0rpx 0rpx 20rpx;box-shadow:0rpx 0 12rpx 0rpx rgba(0,0,0,.14);display:-webkit-flex;display:flex;height:64rpx;justify-content:center;position:absolute;right:0;top:400rpx;width:110rpx;z-index:100}.page-box .langBtn .zh{background:url('https://eshopfile.zhiyousx.com/176706789380996077.png')no-repeat 50%;background-size:100% 100%;height:44rpx;width:56rpx}.page-box .langBtn .en{background:url('https://eshopfile.zhiyousx.com/176706775245369195.png')no-repeat 50%;background-size:100% 100%;height:44rpx;width:56rpx}.page-box .topBtn{align-items:center;background:hsla(0,0%,100%,.9);border:2rpx solid #fff;border-radius:20rpx 20rpx 20rpx 20rpx;bottom:300rpx;display:-webkit-flex;display:flex;height:70rpx;justify-content:center;position:absolute;right:30rpx;width:70rpx;z-index:100}.page-box .topBtn image{height:55rpx;width:45rpx}.page-box .debug-location{background:hsla(0,0%,100%,.7);border:2rpx solid #fff;border-radius:16rpx;color:#cc0202;display:-webkit-flex;display:flex;font-size:24rpx;font-weight:700;gap:20rpx;left:20rpx;padding:8rpx 12rpx;position:absolute;top:80rpx;z-index:100}.page-box .menu{padding:0 32rpx}.page-box .menu .menu-head{background-size:100% 100%;position:relative;width:100%}.page-box .menu .menu-head .menu-welcome{align-items:center;display:-webkit-flex;display:flex;padding-left:16rpx;width:100%}.page-box .menu .menu-head .menu-welcome .mascot{height:210rpx;width:196rpx}.page-box .menu .menu-head .menu-welcome .speakPop{background:url('https://eshopfile.zhiyousx.com/176965254877638281.png')no-repeat 50%;background-size:100% 100%;padding:25rpx 20rpx 25rpx 40rpx;width:480rpx}.page-box .menu .menu-head .menu-welcome .speakPop .title{align-items:center;display:-webkit-flex;display:flex;margin-bottom:6rpx}.page-box .menu .menu-head .menu-welcome .speakPop .title text{color:rgba(0,0,0,.8);font-size:28rpx;font-weight:700;line-height:40rpx;margin-right:8rpx}.page-box .menu .menu-head .menu-welcome .speakPop .title image{height:40rpx;width:40rpx}.page-box .menu .menu-head .menu-welcome .speakPop .content{color:#232020;font-size:26rpx;line-height:38rpx}.page-box .menu .enter-btns{align-items:center;display:-webkit-flex;display:flex;justify-content:center;margin-top:16rpx;width:100%}.page-box .menu .enter-btns .enter-btn-vlog{height:148rpx;width:100%}.page-box .menu .enter-btns .enter-btn-vlog.zh{background:url('https://eshopfile.zhiyousx.com/176965605847630774.png')no-repeat 50%;background-size:100% 100%}.page-box .menu .enter-btns .enter-btn-vlog.en{background:url('https://eshopfile.zhiyousx.com/176967031744872484.png')no-repeat 50%;background-size:100% 100%}.page-box .menu .notice-box{align-items:center;background:linear-gradient(90deg,hsla(0,100%,88%,.5),rgba(242,196,218,.5));border-radius:60rpx 60rpx 60rpx 60rpx;display:-webkit-flex;display:flex;height:80rpx;margin-top:20rpx;padding:0 20rpx;width:100%}.page-box .menu .notice-box .notice-swiper{height:100%;width:100%}.page-box .menu .notice-box .notice-title{align-items:center;background:linear-gradient(90deg,#cc0202,#ff936b);border-radius:64rpx;color:hsla(0,0%,100%,.9);display:-webkit-flex;display:flex;flex:none;font-size:24rpx;font-style:normal;height:50rpx;line-height:50rpx;margin-right:10rpx;padding:0 20rpx;text-align:left;text-shadow:0 2px 2px rgba(0,0,0,.2);text-transform:none}.page-box .menu .notice-box .notice-title image{margin-right:6rpx}.page-box .menu .notice-box .notice-content{color:#1c1c1c;font-size:26rpx;line-height:1;margin-left:10rpx}.page-box .menu .notice-box .notice-item{align-items:center;display:-webkit-flex;display:flex;width:100%}.page-box .menu .defined-question{background:linear-gradient(90deg,hsla(0,100%,88%,.5),rgba(242,196,218,.5));border-radius:36rpx;margin-top:20rpx;padding:16rpx 20rpx;width:100%}.page-box .menu .defined-question .question-title{align-items:center;display:-webkit-flex;display:flex;margin-bottom:12rpx}.page-box .menu .defined-question .question-title text{color:rgba(0,0,0,.8);font-size:28rpx;font-weight:700;line-height:38rpx}.page-box .menu .defined-question .question-title image{height:38rpx;margin-right:12rpx;width:38rpx}.page-box .menu .defined-question .question-swiper{height:234rpx;width:100%}.page-box .menu .defined-question .question-item{align-items:center;background:hsla(0,0%,100%,.6);border-radius:60rpx 60rpx 60rpx 60rpx;display:-webkit-flex;display:flex;height:70rpx;justify-content:space-between;margin-bottom:12rpx;padding:0 20rpx;width:100%}.page-box .menu .defined-question .question-item:last-child{margin-bottom:0rpx}.page-box .menu .defined-question .question-item .question-text{color:#1c1c1c;flex:1;font-size:26rpx;line-height:70rpx;margin-right:10rpx;max-width:600rpx;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.page-box .menu .defined-question .question-item image{flex-shrink:0;height:28rpx;width:28rpx}.page-box .menu .defined-question .question-slide{padding-bottom:12rpx}.page-box .menu .defined-question .question-enter-active,.page-box .menu .defined-question .question-leave-active{transition:all .5s ease}.page-box .menu .defined-question .question-enter,.page-box .menu .defined-question .question-leave-to{opacity:0;transform:translateY(20rpx)}.notice-detail-popup{align-items:center;background-color:rgba(0,0,0,.5);display:-webkit-flex;display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.popup-content{background:linear-gradient(180deg,#ffe9e6,#fff);border-radius:40rpx 40rpx 40rpx 40rpx;box-shadow:0rpx 6rpx 12rpx 0rpx rgba(0,0,0,.2);max-height:70vh;overflow-y:visible;padding:100rpx 40rpx 40rpx;position:relative;width:600rpx}.popup-content .popup-img{height:200rpx;left:50%;position:absolute;top:-100rpx;transform:translateX(-50%);width:212rpx}.close-btn{height:50rpx;position:absolute;right:40rpx;top:30rpx;width:50rpx}.close-btn image{height:50rpx;width:50rpx}.popup-title{color:#333;flex:1;font-size:32rpx;font-weight:700;margin-bottom:12rpx;text-align:center;word-break:break-word}.popup-body{max-height:calc(70vh - 250rpx);overflow-y:auto;padding:10rpx 0}.popup-content-text{color:#666;font-size:28rpx;line-height:1.6;padding-left:2em;text-align:left;white-space:pre-wrap;word-break:break-word}.subscribe-modal{align-items:center;background-color:rgba(0,0,0,.5);display:-webkit-flex;display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:9999}.subscribe-content{background-color:#fff;border-radius:20rpx;box-shadow:0 4rpx 20rpx rgba(0,0,0,.1);max-width:600rpx;padding:40rpx;width:80%}.subscribe-header{align-items:center;display:-webkit-flex;display:flex;justify-content:center;margin-bottom:30rpx}.subscribe-title{color:#333;font-size:32rpx;font-weight:700}.close-icon{height:32rpx;width:32rpx}.subscribe-body{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;margin-bottom:40rpx}.subscribe-icon{height:80rpx;margin-bottom:20rpx;width:80rpx}.subscribe-text{color:#666;font-size:28rpx;line-height:1.5;text-align:center}.phone-highlight{color:#0958d9;font-weight:700}.subscribe-footer{display:-webkit-flex;display:flex;gap:20rpx;justify-content:center}.subscribe-btn{background:linear-gradient(90deg,#cc0202,#ff936b);border:none;border-radius:50rpx;box-shadow:0 4rpx 10rpx rgba(204,2,2,.3);color:#fff;font-size:30rpx;font-weight:700;padding:0rpx 60rpx}.subscribe-btn.secondary{background:#f2f2f2;box-shadow:none;color:#333}.subscribe-btn:active{opacity:.8}.debug-location{background:hsla(0,0%,100%,.9);border:2rpx solid #fff;border-radius:12rpx;box-shadow:0 2rpx 8rpx rgba(0,0,0,.1);color:#1c1c1c;font-size:22rpx;left:12rpx;line-height:32rpx;padding:8rpx 12rpx;pointer-events:none;position:fixed;top:12rpx;z-index:100}.debug-location text{display:block}
</style>
