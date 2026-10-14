<template>
<view class="page-box">
    <uni-navbar :bgColor="['#6585FA','#F1F5FB']" bgColorAngle="180" class="" :title="$root.m0" type="fixed"></uni-navbar>
    <z-paging :auto="false" bottomBgColor="#00000000" class=" vue-ref" ref="paging" :lowerThreshold="50" safeAreaInsetBottom="isIos" :scrollable="true" style="position:fixed;z-index:11;" :useChatRecordMode="true" :value="dataList" :vueSlots="['default','top','bottom']" v-if="!isHide" @keyboardHeightChange="keyboardHeightChange()" @input="dataList = $event">
        <view class="top" slot="top" :style="'height:'+statusBarHeight+'px'+';'"></view>
        <chat-input-bar :bg="true" class="chat-input-bar vue-ref" ref="inputBar" :detail="spotDetail" :isIos="isIos" :pushingProgress="pushingProgress" :pushingProgressShow="pushingProgressShow" slot="bottom" teamType="1" @stopSpeak="stopSpeak()" @resetTravel="resetTravel()" @clearData="clearData()" @clearDataStop="clearDataStop()" @send="doSend()"></chat-input-bar>
        <view class="" style="position:relative;" :key="id" v-for="(item, __i0__) in dataList">
            <view class="" style="transform:scaleY(-1);">
                <chat-item class="" :dataList="dataList" :item="item" :newVal="newVal" :pushingProgress="pushingProgress" :showComment="currrentId===item.id" @askAgain="askAgain()" @resetTravel="resetTravel()" @exclusive="exclusive()" @delComment="delComment()" @openDrawer="openDrawer()" @stopSpeak="stopSpeak()" @playVideo="playVideo()" @isRetryBack="isRetryBack()"></chat-item>
            </view>
        </view>
        <view class="menuBox" style="transform:scaleY(-1);" v-if="!infos.cityId&&!infos.multiLanguageCityId">
            <view class="header-section">
                <view class="header-logo">
                    <image class="header-icon" src="https://eshopfile.zhiyousx.com/176958773997727947.gif" v-if="!isPlayIngDefault"></image>
                    <image class="header-icon" src="https://eshopfile.zhiyousx.com/176958780798329730.gif" v-if="isPlayIngDefault"></image>
                </view>
                <view class="header-content">
                    <view class="header-nav-item1">{{$root.m1+''}}<image class="header-nav-icon" src="https://eshopfile.zhiyousx.com/176958794459960221.png"></image>
                    </view>
                    <view class="header-nav-item2">{{$root.m2}}</view>
                </view>
            </view>
            <view class="container-b" @click="togglePlay($event)">
                <view class="item-b item-b1" v-if="!isPlayIngDefault">
                    <image alt class="item-icon" src="https://eshopfile.zhiyousx.com/176966891639156328.png"></image>{{ $root.m3 }}</view>
                <view class="item-b item-b2" v-else>
                    <image alt class="item-icon" src="https://eshopfile.zhiyousx.com/176966894441482348.png"></image>{{ $root.m4 }}</view>
            </view>
            <view class="you-may-ask">
                <view class="ask-title _div">
                    <image alt class="ask-icon" src="https://eshopfile.zhiyousx.com/176967794231477825.png"></image>{{ $root.m5 }}</view>
                <view class="ask-item-box _div">
                    <view class="ask-item _div" :key="index" v-for="(item, index) in askList">{{ item.title }}</view>
                </view>
            </view>
        </view>
    </z-paging>
    <uni-popup class=" vue-ref" ref="videoPopup" :maskClick="true" type="center" :vueSlots="['default']">
        <view class="video-popup-container">
            <view class="video-popup-header">
                <text class="video-popup-title"></text>
                <view class="video-popup-close" @click="closeVideoPopup($event)">
                    <text class="close-icon">×</text>
                </view>
            </view>
            <view class="video-popup-content">
                <video :autoplay="true" class="video-player" :controls="true" :showCenterPlayBtn="true" :showFullscreenBtn="true" :showPlayBtn="true" :showProgress="true" :src="currentVideoUrl" @error="onVideoError($event)" @loadstart="onVideoLoadStart($event)" @loadeddata="onVideoLoaded($event)"></video>
                <view class="video-loading" v-if="videoLoading">
                    <text class="loading-text">{{$root.m6}}</text>
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
            components: {
              zPaging: function() {
                Promise.all([i.e("common/vendor"), i.e("union/common/vendor"), i.e("union/components1/z-paging/z-paging")]).then(function() {
                  return resolve(i("a7ee"))
                }.bind(null, i)).catch(i.oe)
              },
              chatInputBar: function() {
                i.e("union/components1/chat-input-bar/chat-input-bar-by").then(function() {
                  return resolve(i("4ca9"))
                }.bind(null, i)).catch(i.oe)
              },
              chatItem: function() {
                i.e("union/components1/chat-item/chat-item-by").then(function() {
                  return resolve(i("8633"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            onLoad: function(e) {
              var i = this;
              this.language = uni.getStorageSync("language") || "zh", uni.setNavigationBarTitle({
                title: this.$t("smartEscort.header.title")
              }), this.infos.cityId = e.id || "", this.infos.multiLanguageCityId = e.cid || "", this.infos.cityName = e.name || "", console.log(this.infos, "this.infosthis.infosthis.infos"), this.language = uni.getStorageSync("language") || "zh", this.recommendList(), this.infos.cityId && this.infos.multiLanguageCityId ? (this.noMsg = !0, this.localRecommend = 1, this.createSession(!0)) : (this.initAudio(), this.createSession());
              var a = uni.getSystemInfoSync().system.toLowerCase();
              this.isIos = a.includes("ios") || a.includes("iphone") || a.includes("ipad"), setTimeout((function() {
                i.maskShow = !1
              }), 1e3), this.NavH = uni.getMenuButtonBoundingClientRect().bottom, this.statusBarHeight = uni.getMenuButtonBoundingClientRect().bottom + 10, console.log(this.NavH, "LLLLLLLL"), console.log(this.NavH), Promise.all([this.getHistory(), this.getSysConfigure(), this.getTopData()]).then((function() {
                console.log(i.topData, "this.topData"), i.$nextTick((function() {
                  i.getElementsHeight()
                }))
              })).catch((function(t) {
                console.error("请求失败:", t), i.$nextTick((function() {
                  i.getElementsHeight()
                }))
              }))
            },
            onShow: function() {
              this.isHide && (this.isHide = !1, this.getTopData())
            },
            onUnmounted: function() {
              this.resetAudio(), this.destroyAudio()
            },
            onHide: function() {
              this.audioContextDefault && this.audioContextDefault.pause(), this.opacity = 0, this.showImage = !0, this.travelHidden && (this.travelHidden = !1), this.isHide = !0, this.stopSpeak(), this.isPlaying = !1, this.clearAudioCache(), this.clearQuestionRotation(), this.character && (clearTimeout(this.character), this.character = null)
            },
            onUnload: function() {
              this.audioContextDefault && (this.audioContextDefault.pause(), this.resetAudio()), this.destroyAudio(), this.audioContext && this.audioContext.destroy(), this.locationTimer && clearTimeout(this.locationTimer), this.stopSpeak(), this.isPlaying = !1, this.clearAudioCache(), this.character && clearTimeout(this.character);
              try {
                var t = a.getFileSystemManager(),
                  e = a.env.USER_DATA_PATH;
                t.readdirSync(e).forEach((function(i) {
                  var a = "".concat(e, "/").concat(i);
                  try {
                    t.statSync(a).isFile() && (i.includes("audio") || i.includes("record") || i.endsWith(".mp3") || i.endsWith(".wav")) && (t.unlinkSync(a), console.log("删除录音临时文件:", a))
                  } catch (t) {
                    console.error("检查文件时出错:", t)
                  }
                }))
              } catch (t) {
                console.error("清理录音临时文件时出错:", t)
              }
            },
            data: function() {
              var t;
              return t = {
                hoveImgList: [],
                hoveImg: !1,
                hoveImgListUrl: [],
                newVal: "",
                dataList: [],
                isTyping: !1,
                currentMassage: {},
                currentIndex: 0,
                isHide: !1,
                currentContent: "",
                pushingProgress: !0,
                task: null,
                scrollTop: 0,
                tripList: [],
                NavH: 0,
                scenicSpotList: [],
                deliciousFoodList: [],
                pushingProgressShow: !0,
                isSpeaking: !1,
                audioPlayer: null,
                voiceInfo: {},
                flowId: "",
                historyList: [],
                page: 1,
                loadMore: "loading",
                dataId: "",
                totle: 0,
                show_optive: !1,
                typeVideo: 1,
                showImage: !0,
                videoReady3: !1,
                videoReady4: !1,
                opacity: 0,
                systemInfo: {},
                character: null,
                index: 0,
                stratSet: !1,
                dataInfosList: [],
                WshowHide: !1,
                newValCopy: "",
                playIndex: 0,
                arrResult: [],
                isIos: !1,
                historyBoxHeight: 0,
                isNetworkAnomaly: !1,
                timeNetwork: null,
                playShow: !1,
                maskShow: !0,
                delayBtn: !1,
                timerList: [],
                isLoadingHistory: !1,
                travelHidden: !1,
                commentObj: {
                  status: 0,
                  type: "",
                  content: "",
                  dialogueContent: null
                },
                typeList: [{
                  content: "答非所问",
                  select: 0
                }, {
                  content: "事实错误",
                  select: 0
                }, {
                  content: "格式不对",
                  select: 0
                }, {
                  content: "内容低质",
                  select: 0
                }],
                videoTimer: null,
                currentVideoUrl: "",
                videoLoading: !1,
                currrentId: "",
                keyboardHeight: 0,
                isClicking: !1,
                menuBoxHeight: 0,
                chatInputBarHeight: 0,
                chatInputBarBottomDistance: 0,
                topLoadingHeight: 0,
                showTopLoading: !1,
                calculatedPlaceholderHeight: "0",
                hasHistory: !1,
                topData: null,
                statusBarHeight: "",
                askList: [],
                infos: {
                  cityId: "",
                  multiLanguageCityId: "",
                  cityName: ""
                },
                audioQueue: [],
                audioContext: null,
                isPlaying: !1,
                partialJson: ""
              }, (0, c.default)(t, "WshowHide", !1), (0, c.default)(t, "audioData", {
                zh: "https://eshopfile.zhiyousx.com/177019004174530756.mp3",
                en: "https://eshopfile.zhiyousx.com/177019109953443506.mp3"
              }), (0, c.default)(t, "language", ""), (0, c.default)(t, "isPlayIngDefault", !0), (0, c.default)(t, "audioContextDefault", null), (0, c.default)(t, "noMsg", !1), (0, c.default)(t, "streamFinished", !0), (0, c.default)(t, "localRecommend", 0), t
            },
            watch: {},
            computed: {},
            methods: {
              isRetryBack: function() {
                this.infos.cityId && this.infos.multiLanguageCityId && (this.localRecommend = 1, this.noMsg = !0, this.createSession(!0))
              },
              destroyAudio: function() {
                this.audioContextDefault && (this.resetAudio(), this.audioContextDefault.offCanplay(), this.audioContextDefault.offTimeUpdate(), this.audioContextDefault.offPlay(), this.audioContextDefault.offPause(), this.audioContextDefault.offEnded(), this.audioContextDefault.offError(), this.audioContextDefault = null)
              },
              initAudio: function() {
                var e = this;
                this.audioContextDefault && this.destroyAudio(), this.audioContextDefault = t.createInnerAudioContext(), this.audioContextDefault.src = this.audioData[this.language], this.audioContextDefault.play(), this.isPlayIngDefault = !0, this.audioContextDefault.loop = !1, this.audioContextDefault.onPlay((function() {
                  e.isPlayIngDefault = !0
                })), this.audioContextDefault.onPause((function() {
                  e.isPlayIngDefault = !1
                })), this.audioContextDefault.onEnded((function() {
                  e.audioPlayEnd()
                })), this.audioContextDefault.onError((function(t) {
                  e.isPlayIngDefault = !1
                }))
              },
              togglePlay: function() {
                this.isPlayIngDefault ? this.audioContextDefault.pause() : this.audioContextDefault.play()
              },
              audioPlayEnd: function() {
                this.isPlayIngDefault = !1, this.resetAudio()
              },
              resetAudio: function() {
                if (this.audioContextDefault) try {
                  this.audioContextDefault.pause(), this.audioContextDefault.currentTime = 0
                } catch (t) {
                  console.error("重置音频失败:", t)
                }
              },
              recommendList: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("get", "ai/app/st/ai/recommend/list", {
                  count: 3,
                  language: this.language,
                  scenicId: this.infos.cityId
                }).then((function(e) {
                  1 === e.code && (console.log(e.data), t.askList = e.data || [])
                }))
              },
              scrollToBottomInChatMode: function() {
                var t = this;
                if (this.$refs.paging) try {
                  this.$nextTick((function() {
                    setTimeout((function() {
                      try {
                        t.$refs.paging.scrollToBottom(), setTimeout((function() {
                          try {
                            t.$refs.paging.scrollToBottom()
                          } catch (t) {
                            console.warn("第二次滚动失败:", t)
                          }
                        }), 50)
                      } catch (e) {
                        console.warn("第一次滚动失败:", e), setTimeout((function() {
                          try {
                            t.$refs.paging.scrollToBottom()
                          } catch (t) {
                            console.warn("重试滚动失败:", t)
                          }
                        }), 200)
                      }
                    }), 100)
                  }))
                } catch (t) {
                  console.error("滚动方法执行失败:", t)
                } else console.warn("z-paging组件未找到")
              },
              goCardPage: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_aiTravelCard_click",
                  eventName: "小七点击进入置顶卡片",
                  eventParams: {
                    pagePath: "/union/pages/aiTravel2/cardPage?sessionId=" + this.topData.sessionId
                  }
                }), uni.navigateTo({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=" + this.topData.sessionId
                })
              },
              getTopData: function() {
                var e = this;
                return this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/queryTopRecent", {
                  openId: uni.getStorageSync("wxopenid")
                }).then((function(t) {
                  1 === t.code && (e.topData = t.data || null)
                })).catch((function() {}))
              },
              getSysConfigure: function() {
                var t = this;
                return this.$uniApi.dataRequestNoLoading("post", "base/app/v1/sysParam/getSysParamForApp", {
                  keyList: ["XIAOQI_MENU"]
                }).then((function(e) {
                  1 == e.code && (t.systemInfo = JSON.parse(e.data.XIAOQI_MENU.paramValue), console.log(t.systemInfo, "this.systemInfo"))
                }))
              },
              keyboardHeightChange: function(t) {
                this.keyboardHeight = t.height
              },
              getHistory: function() {
                var e = this;
                return this.$uniApi.dataRequestNoLoading("get", "ai/aiEscort/dialogue/record", {
                  openId: uni.getStorageSync("wxopenid"),
                  pageSize: 30,
                  pageOn: 1,
                  sessionId: this.flowId
                }).then((function(t) {
                  1 === t.code && (e.hasHistory = t.data.total > 0)
                }))
              },
              getElementsHeight: function() {
                var e = this,
                  i = uni.createSelectorQuery().in(this);
                i.select(".menuBox").boundingClientRect(), i.select(".chat-input-bar").boundingClientRect(), i.select(".topLoading").boundingClientRect(), i.select(".history-box").boundingClientRect(), i.exec((function(i) {
                  if (i && i.length >= 3) {
                    var a = i[0],
                      n = i[1],
                      o = i[2],
                      s = i[3];
                    if (a && (e.menuBoxHeight = a.height, console.log("menuBox 高度:", a.height, "topData状态:", !!e.topData)), n) {
                      e.chatInputBarHeight = n.height, console.log("chatInputBar 高度:", n.height);
                      var r = uni.getSystemInfoSync().screenHeight,
                        d = n.top,
                        c = n.height;
                      e.chatInputBarBottomDistance = e.isIos ? r - (d + c) : 0, console.log("chat-input-bar距离屏幕底部高度:", e.chatInputBarBottomDistance, "px")
                    }
                    if (o && (e.topLoadingHeight = o.height, console.log("topLoading 高度:", e.NavH)), s) {
                      var h = uni.getSystemInfoSync().screenWidth,
                        l = .064 * h;
                      e.historyBoxHeight = s.height, console.log("historyBox 高度计算:", {
                        boundingClientRect: s.height,
                        calculated: l,
                        screenWidth: h,
                        actualHeightRpx: 48
                      })
                    } else e.historyBoxHeight = 0, console.log("historyBox 不存在，高度设置为0");
                    e.calculatePlaceholderHeight()
                  }
                }))
              },
              calculatePlaceholderHeight: function() {
                if (this.menuBoxHeight && this.chatInputBarHeight && this.topLoadingHeight && void 0 !== this.historyBoxHeight) {
                  var e = uni.getSystemInfoSync().screenHeight,
                    i = this.menuBoxHeight + this.chatInputBarHeight + this.NavH + this.historyBoxHeight + this.chatInputBarBottomDistance;
                  console.log("totalHeightPx:", this.menuBoxHeight, this.chatInputBarHeight, this.NavH, this.historyBoxHeight, this.chatInputBarBottomDistance);
                  var a = i / e * 100,
                    n = 101 - a;
                  this.calculatedPlaceholderHeight = n > 0 ? "".concat(n, "vh") : "0", console.log("占位符高度计算:", {
                    screenHeight: e,
                    menuBoxHeight: this.menuBoxHeight,
                    chatInputBarHeight: this.chatInputBarHeight,
                    topLoadingHeight: this.topLoadingHeight,
                    historyBoxHeight: this.historyBoxHeight,
                    hasHistory: this.hasHistory,
                    chatInputBarBottomDistance: this.chatInputBarBottomDistance,
                    totalHeightPx: i,
                    totalHeightVh: a,
                    placeholderHeightVh: n,
                    topDataStatus: !!this.topData
                  })
                }
              },
              startLoading: function() {
                var e = this;
                !this.isLoadingHistory && this.hasHistory && (t.vibrateShort(), this.isLoadingHistory = !0, this.showTopLoading = !0, setTimeout((function() {
                  e.queryList()
                }), 1e3))
              },
              queryList: function() {
                var e = this;
                if ("nomore" == this.loadMore) return this.$refs.paging.completeByNoMore([], !0), this.showTopLoading = !1, !1;
                var i = this.page;
                this.$uniApi.dataRequestNoLoading("get", "ai/aiEscort/dialogue/record", {
                  openId: uni.getStorageSync("wxopenid"),
                  pageSize: 30,
                  pageOn: i,
                  sessionId: this.flowId
                }).then((function(t) {
                  if (1 === t.code) {
                    var i = t.data.records;
                    if (e.totle = t.data.total, !(t.data.total > 0)) return e.$refs.paging.completeByNoMore([], !0), e.isLoadingHistory = !1, e.showTopLoading = !1, e.$utils.toast(e.$t("allData.noMore")), e.historyList.length > 0 && (e.historyList = e.historyList.concat([{
                      content: "",
                      type: 0,
                      nomoreLine: !0,
                      isHistory: !0
                    }])), !1;
                    if (t.data.current < t.data.pages ? (e.page = e.page + 1, e.loadMore = "loadmore") : e.loadMore = "nomore", !i || !i.length) return e.$refs.paging.completeByNoMore([], !0), e.historyList = [], e.isLoadingHistory = !1, e.showTopLoading = !1, !1;
                    var a = [];
                    i.forEach((function(t) {
                      if (1 == t.type) t.content && -1 == t.content.indexOf("专属攻略：是") && a.push({
                        content: decodeURIComponent(t.content),
                        type: 1,
                        state: 1,
                        end: !0,
                        name: "ai",
                        list: [],
                        isHistory: !0,
                        id: (new Date).getTime()
                      });
                      else {
                        var e = "",
                          i = t.content;
                        t.content.indexOf("の") > -1 ? (e = t.content.split("の")[1].replaceAll("swiperItem", "swiperItem swiperItemBox").replaceAll(/<video(.*?)src="(.*?) - (.*?)"(.*?)>/g, '<video$1src="$2-$3"$4>').replaceAll(/<img src="(.*?) - (.*?)" alt="">/g, '<img src="$1-$2" alt="">'), i = t.content.split("の")[0], a.push({
                          content: e,
                          type: 0,
                          state: 0,
                          end: !0,
                          name: "ai",
                          isMe: !1,
                          img: !0,
                          list: [],
                          id: (new Date).getTime(),
                          officialGuide: [],
                          officialGuideType: 1,
                          divergenceProblem: [],
                          isHistory: !0
                        })) : a.push({
                          content: i,
                          type: 0,
                          state: 0,
                          end: !0,
                          name: "ai",
                          isMe: !1,
                          list: [],
                          id: (new Date).getTime(),
                          officialGuide: [],
                          officialGuideType: 1,
                          divergenceProblem: [],
                          isHistory: !0
                        }), a[a.length - 1].state = 1, a[a.length - 1].divergenceProblem = t.deriveIssue ? t.deriveIssue.data : [], t.jsonData && "o001" == t.jsonData.extend.code && (a[a.length - 1].content = "为您推荐官方游玩攻略：", a[a.length - 1].officialGuide = t.jsonData ? t.jsonData.data : [], a[a.length - 1].exclusive = t.content, a[a.length - 1].officialGuideType = 2), t.jsonData && "s001" == t.jsonData.extend.code && (a[a.length - 1].list = t.jsonData ? t.jsonData.data : []), t.jsonData && "e001" == t.jsonData.extend.code && (a[a.length - 1].exclusiveRoute = t.jsonData ? t.jsonData.data : []), t.jsonData && "p002" == t.jsonData.extend.code && (a[a.length - 1].redirectContent = t.jsonData ? t.jsonData.data : {}, a[a.length - 1].content = "检测到您需要攻略或规划？  \n👉 点击下方 「AI旅行搭子」，一键生成专属方案！  \n（不满意？可随时重新生成哦~）"), t.jsonData && "p006" == t.jsonData.extend.code && (a[a.length - 1].content = " ", a[a.length - 1].evaluationObj = t.jsonData ? t.jsonData.data : {}, console.log(a[a.length - 1])), t.jsonData && "p007" == t.jsonData.extend.code && (a[a.length - 1].content = " ", a[a.length - 1].spotPhone = t.jsonData ? t.jsonData.data : {}), t.jsonData && "p008" == t.jsonData.extend.code && (console.log(t.jsonData, "v.jsonData"), a[a.length - 1].weatherInfo = {
                          weatherToday: t.jsonData.data.base || {},
                          weatherWeek: t.jsonData.data.resp || []
                        }), t.jsonData && "p009" == t.jsonData.extend.code && (a[a.length - 1].content = t.jsonData ? t.jsonData.data.resp : ""), t.jsonData && "p010" == t.jsonData.extend.code && (a[a.length - 1].toilet = t.jsonData ? t.jsonData.data : []), t.content.indexOf("の") > -1 && a.push({
                          content: t.content.split("の")[0],
                          type: 0,
                          state: 0,
                          end: !0,
                          name: "ai",
                          isMe: !1,
                          list: [],
                          id: (new Date).getTime(),
                          officialGuide: [],
                          officialGuideType: 1,
                          divergenceProblem: []
                        })
                      }
                    }));
                    var n = t.data.current < t.data.pages;
                    e.$refs.paging.completeByNoMore([], !n);
                    var o = e.historyList.length > 0 ? [{
                      content: "",
                      type: 0,
                      historyLine: !0,
                      isHistory: !0
                    }].concat(a) : a;
                    e.historyList = e.historyList.concat(o), console.log(e.historyList, "this.historyList"), n || e.historyList.push({
                      content: "",
                      type: 0,
                      nomoreLine: !0,
                      isHistory: !0
                    }), e.showTopLoading = !1, e.$nextTick((function() {
                      e.isLoadingHistory = !1
                    }))
                  } else e.loadMore = "loadmore", e.$refs.paging.completeByNoMore([], !1), e.isLoadingHistory = !1, e.showTopLoading = !1;
                  console.log(e.loadMore)
                })).catch((function(t) {
                  console.error("queryList error:", t), e.loadMore = "loadmore", e.$refs.paging.completeByNoMore([], !1), e.isLoadingHistory = !1, e.showTopLoading = !1
                }))
              },
              createSession: function() {
                var e = this,
                  i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.$uniApi.dataRequestNoLoading("post", "ai/aiEscort/session/create", {
                  bussType: 1,
                  openId: uni.getStorageSync("wxopenid"),
                  title: g.format(new Date, "yyyy-MM-dd hh:mm:ss:S")
                }).then((function(t) {
                  1 === t.code && (e.flowId = t.data, i && e.askAgain(e.$t("smartEscort.header.Introduction") + e.infos.cityName))
                }))
              },
              resetTravel: function(e) {
                this.travelHidden = !0;
                var i = this.systemInfo.aiTravel;
                if (i) {
                  var a = [];
                  e && ["departureTime", "destination", "budget", "interestPoint", "returnTime", "adult", "children", "older", "change"].forEach((function(t) {
                    e[t] && a.push("".concat(t, "=").concat(encodeURIComponent(e[t])))
                  })), a.length > 0 && (i += "?" + a.join("&")), uni.navigateTo({
                    url: i
                  })
                } else this.$uni.showToast("敬请期待！")
              },
              goCoupon: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_aiTravelCoupon_click",
                  eventName: "小七点击进入优惠券",
                  eventParams: {
                    pagePath: this.systemInfo.couponUrl
                  }
                }), uni.navigateTo({
                  url: this.systemInfo.couponUrl
                })
              },
              goAiTravel: function() {
                return this.systemInfo.aiTravel ? (this.$eventAnalyse.analyse({
                  eventTag: "ai_aiTravelEnter_click",
                  eventName: "小七点击进入旅行搭子",
                  eventParams: {
                    pagePath: "/union/pages/aiTravel2/formPage"
                  }
                }), this.pushingProgressShow ? void this.resetTravel() : void this.$uni.showToast("正在回答，请稍候")) : void this.$uni.showToast(this.$t("allData.stayTuned"))
              },
              goHistory: function() {
                uni.navigateTo({
                  url: "/union/pages/aiTravel2/historyList"
                })
              },
              pauseFun: function() {
                t.createVideoContext("myVideo1", this).seek(0)
              },
              ended: function() {
                var e = this;
                this.videoTimer = setTimeout((function() {
                  e.videoTimer && (clearTimeout(e.videoTimer), e.videoTimer = null), t.createVideoContext("myVideo1", e).play()
                }), 15e3)
              },
              openDrawer: function(t, e) {
                this.commentObj.dialogueContent = JSON.stringify(u(u({}, t), {}, {
                  sessionId: this.flowId
                })), this.commentObj.status = e - 1, 1 == e ? this.submitComment() : 2 == e && this.$refs.feedbackDrawer.open()
              },
              delComment: function(e) {
                var i = this;
                this.commentObj.dialogueContent = JSON.stringify(u(u({}, e), {}, {
                  sessionId: this.flowId
                })), this.commentObj.type = "", this.$eventAnalyse.analyse({
                  eventTag: "ai_comment_delete",
                  eventName: "小七删除对话评价",
                  eventParams: {}
                });
                var a = u(u({}, this.commentObj), {}, {
                  openId: uni.getStorageSync("wxopenid")
                });
                this.$uniApi.dataRequestNoLoading("post", "ai/app/dialogue/delete", a).then((function(t) {
                  i.commentObj = {
                    status: 0,
                    type: [],
                    content: "",
                    dialogueContent: null
                  }
                }))
              },
              addCommentType: function(t) {
                t.select = !t.select
              },
              closeComment: function() {
                this.$refs.feedbackDrawer.close()
              },
              handleChange: function(t) {
                t.show || this.submitComment()
              },
              submitComment: function(e) {
                var i = this;
                this.typeList.length > 0 && (this.commentObj.type = this.typeList.filter((function(t) {
                  return t.select
                })).map((function(t) {
                  return t.content
                })).join(",")), this.$eventAnalyse.analyse({
                  eventTag: "ai_comment_submit",
                  eventName: "小七提交对话评价",
                  eventParams: {}
                });
                var a = u(u({}, this.commentObj), {}, {
                  openId: uni.getStorageSync("wxopenid")
                });
                this.$uniApi.dataRequestNoLoading("post", "ai/app/dialogue/add", a).then((function(t) {
                  i.commentObj = {
                    status: 0,
                    type: [],
                    content: "",
                    dialogueContent: null
                  }, i.typeList = i.typeList.map((function(t) {
                    return t.select = 0, t
                  })), 1 === t.code && i.$uni.showToast("感谢您的反馈！")
                }))
              },
              getWeather: function() {
                var e = this;
                return (0, d.default)(o.default.mark((function i() {
                  return o.default.wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                      case 0:
                        if (!e.isClicking) {
                          i.next = 2;
                          break
                        }
                        return i.abrupt("return");
                      case 2:
                        if (e.pushingProgress) {
                          i.next = 5;
                          break
                        }
                        return e.$uni.showToast("正在回答，请稍候"), i.abrupt("return");
                      case 5:
                        return e.isClicking = !0, t.vibrateShort(), e.$eventAnalyse.analyse({
                          eventTag: "ai_weather_click",
                          eventName: "小七点击天气查询导航"
                        }), i.next = 10, uni.getLocation();
                      case 10:
                        i.sent && e.doSend("天气查询"), setTimeout((function() {
                          e.isClicking = !1
                        }), 1e3);
                      case 13:
                      case "end":
                        return i.stop()
                    }
                  }), i)
                })))()
              },
              getPhone: function() {
                var e = this;
                this.isClicking || (this.pushingProgress ? (this.isClicking = !0, t.vibrateShort(), this.$eventAnalyse.analyse({
                  eventTag: "ai_phone_click",
                  eventName: "小七点击客服电话导航"
                }), this.doSend("客服电话"), setTimeout((function() {
                  e.isClicking = !1
                }), 1e3)) : this.$uni.showToast("正在回答，请稍候"))
              },
              getToilet: function() {
                var e = this;
                return (0, d.default)(o.default.mark((function i() {
                  return o.default.wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                      case 0:
                        if (!e.isClicking) {
                          i.next = 2;
                          break
                        }
                        return i.abrupt("return");
                      case 2:
                        if (e.pushingProgress) {
                          i.next = 5;
                          break
                        }
                        return e.$uni.showToast("正在回答，请稍候"), i.abrupt("return");
                      case 5:
                        return e.isClicking = !0, t.vibrateShort(), e.$eventAnalyse.analyse({
                          eventTag: "ai_toilet_click",
                          eventName: "小七点击卫生间导航"
                        }), i.next = 10, uni.getLocation();
                      case 10:
                        i.sent && e.doSend("找卫生间"), setTimeout((function() {
                          e.isClicking = !1
                        }), 1e3);
                      case 13:
                      case "end":
                        return i.stop()
                    }
                  }), i)
                })))()
              },
              getKeyWordsOfLocation: function(t) {
                var e = !1;
                return ["洗手间", "厕所", "卫生间", "茅房", "盥洗室", "WC", "天气查询"].forEach((function(i) {
                  t.includes(i) && (e = !0)
                })), e
              },
              getLocation: function() {
                return (0, d.default)(o.default.mark((function e() {
                  return o.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", new Promise((function(e) {
                          a.getSetting({
                            success: function(i) {
                              i.authSetting["scope.userLocation"] ? (uni.showLoading({
                                title: "获取定位中...",
                                mask: !0
                              }), uni.getLocation({
                                type: "gcj02",
                                success: function(i) {
                                  uni.setStorageSync("location", {
                                    longitude: i.longitude,
                                    latitude: i.latitude
                                  }), uni.hideLoading(), e(!0)
                                },
                                fail: function() {
                                  uni.hideLoading(), e(!0)
                                }
                              })) : a.authorize({
                                scope: "scope.userLocation",
                                success: function() {
                                  uni.showLoading({
                                    title: "获取定位中...",
                                    mask: !0
                                  }), uni.getLocation({
                                    type: "gcj02",
                                    success: function(i) {
                                      uni.setStorageSync("location", {
                                        longitude: i.longitude,
                                        latitude: i.latitude
                                      }), uni.hideLoading(), e(!0)
                                    },
                                    fail: function() {
                                      uni.hideLoading(), e(!0)
                                    }
                                  })
                                },
                                fail: function() {
                                  uni.showModal({
                                    title: "授权提示",
                                    content: "需要获取您的地理位置，请确认授权",
                                    success: function(t) {
                                      t.confirm && a.openSetting(), e(!1)
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
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              doSend: function(t, e) {
                var i = this;
                this.audioContextDefault && (this.audioContextDefault.pause(), this.resetAudio()), this.pushingProgress = !1, this.stratSet = !0, this.isPlaying = !1, this.audioQueue = [], this.scrollToBottomInChatMode(), this.flowId ? setTimeout((function() {
                  if (e || i.noMsg || i.dataList.unshift({
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
                      audioList: [],
                      id: Date.now() + Math.floor(1e3 * Math.random()),
                      comment: 0,
                      roundId: "",
                      isTerminate: !0,
                      isComplete: !1,
                      isRetry: !1
                    }), console.log(i.dataList), i.currrentId = i.dataList[0].id, e && e.id) {
                    var a = e.exclusive;
                    i.toSend(a)
                  } else i.toSend(t);
                  i.scrollToBottomInChatMode()
                }), 300) : this.$uni.showToast("会话创建失败，请稍后再试")
              },
              toSend: function(e) {
                var i = this,
                  a = this;
                this.dataInfosList = [], this.pushingProgressShow = !1, this.streamFinished = !1;
                var n = {
                  language: uni.getStorageSync("language") ? uni.getStorageSync("language") : uni.getStorageSync("language") || 0,
                  message: e,
                  userId: uni.getStorageSync("wxopenid"),
                  sessionId: this.flowId,
                  cityId: this.infos.multiLanguageCityId || "",
                  multiLanguageCityId: this.infos.cityId || "",
                  localRecommend: this.localRecommend
                };
                a.timeNetwork = setTimeout((function() {
                  i.clearAllTimers(), i.noMsg = !1, i.clearStarts(), i.$uni.showToast(i.$t("allData.lostNetwork")), i.task && (i.dataList[0].content = i.$t("allData.lostNetwork"), i.task.abort(), i.dataList[0].isTerminate = !1), 1 == i.dataList.length && 0 == i.dataList[0].type && (i.dataList[0].isRetry = !0)
                }), 15e3), this.task = t.request({
                  url: "".concat(getApp().globalData.requestUrl, "ai/app/st/ai/aiDialogue"),
                  enableChunked: !0,
                  method: "POST",
                  timeout: 9e5,
                  data: n,
                  header: {
                    "source-code": uni.getStorageSync("source_header") || "",
                    "source-channel-code": uni.getStorageSync("channel_header") || "",
                    "share-member-id": uni.getStorageSync("shareMemberId_header") || "",
                    Authorization: uni.getStorageSync("token") ? "bearer " + uni.getStorageSync("token") : ""
                  },
                  success: function(t) {
                    console.log(t), 200 == t.statusCode && (i.stratSet = !1, i.WshowHide = !1, i.newValCopy = "", i.newVal += " ", i.addNextCharacter(), console.log(i.dataList[0], "this.dataList[0]this.dataList[0]"), i.noMsg = !1, i.dataList[0].isComplete = !0), 400 == t.statusCode && (1 == i.dataList.length && 0 == i.dataList[0].type && (i.dataList[0].isRetry = !0), i.clearStarts(), i.dataList[0].content = i.$t("allData.lostNetwork"), i.task && (i.task.abort(), i.dataList[0].isTerminate = !1), i.noMsg = !1), i.streamFinished = !0, !i.isPlaying && 0 === i.audioQueue.length && i.index >= i.newVal.length && (a.dataList[0].end = !0), a.$data.currentIndex = 0, a.$data.currentContent = "", a.$data.sendState = !1, a.isNetworkAnomaly = !1, a.delayBtn = !0, i.clearAllTimers()
                  },
                  fail: function(t) {
                    console.log(t, "ssssssssssss"), i.stratSet = !1, i.delayBtn = !0, "request:fail " == t.errMsg && (1 == i.dataList.length && 0 == i.dataList[0].type && (i.dataList[0].isRetry = !0), i.clearStarts(), i.dataList[0].content = i.$t("allData.lostNetwork"), i.noMsg = !1, i.task && (i.task.abort(), i.dataList[0].isTerminate = !1)), i.streamFinished = !0, !i.isPlaying && 0 === i.audioQueue.length && i.index >= i.newVal.length && (a.dataList[0].end = !0), a.$data.currentIndex = 0, a.$data.currentContent = "", a.$data.sendState = !1, a.isNetworkAnomaly = !1, a.delayBtn = !0, i.clearAllTimers(), "request:fail abort" == t.errMsg && i.dataList[0].content && i.dataList[0].content.endsWith('<img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>') && (i.dataList[0].content = i.dataList[0].content.slice(0, i.dataList[0].content.length - 97))
                  }
                }), this.task.onChunkReceived((function(t) {
                  i.localRecommend = 0, i.clearAllTimers(), a.delayBtn = !0, a.isNetworkAnomaly = !0, a.timeNetwork = setTimeout((function() {
                    i.clearAllTimers(), 1 == i.dataList.length && 0 == i.dataList[0].type && (i.dataList[0].isRetry = !0), i.clearStarts(), i.$uni.showToast(i.$t("allData.lostNetwork")), i.noMsg = !1, i.task && (i.task.abort(), i.dataList[0].isTerminate = !1), i.streamFinished = !0
                  }), 3e4), a.timerList.push(a.timeNetwork);
                  var e, n = new Uint8Array(t.data);
                  if ("[object Uint8Array]" === Object.prototype.toString.call(n)) e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, r.default)(n))));
                  else if (n instanceof ArrayBuffer) {
                    var o = new Uint8Array(n);
                    e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, r.default)(o))))
                  }
                  3 != a.typeVideo && (a.typeVideo = 3), e = a.partialJson + e, a.partialJson = "";
                  for (var s = e.split("^"), d = 0; d < s.length; d++) {
                    var c = s[d];
                    if (c) try {
                      var h = JSON.parse(c);
                      console.log(h, "resresresresresres"), h.extend.roundId && (a.dataList[0].roundId = h.extend.roundId), 0 == h.extend.type && "c001" == h.extend.code && (console.log(h.extend.roundId, "res.extend.roundIdres.extend.roundId"), a.dataList[0].state = 1, a.newVal += h.data, a.character || a.addNextCharacter()), 0 == h.extend.type && "2" == h.extend.code && i.handleAudioData(h.data), 0 == h.extend.type && "e001" == h.extend.code && (a.newVal += h.data, a.character || a.addNextCharacter()), "p002" == h.extend.code && (a.dataList[0].state = 1, a.dataList[0].redirectContent = JSON.parse(h.data), a.newVal += "检测到您需要攻略或规划？  \n👉 点击下方 「AI旅行搭子」，一键生成专属方案！  \n（不满意？可随时重新生成哦~）", a.character || a.addNextCharacter()), "p005" == h.extend.code && (a.dataList[0].state = 1, a.dataList[0].changeAnswer = JSON.parse(h.data), a.newVal += "根据您的修改意见，点击下方按钮进行重新规划吧！", a.character || a.addNextCharacter()), "p006" != h.extend.code && "p007" != h.extend.code || (a.dataList[0].state = 1, a.newVal += "", a.character || setTimeout((function() {
                        a.addNextCharacter()
                      }), 0)), "p009" == h.extend.code && (a.dataList[0].state = 1, a.newVal += h.data.resp, a.character || a.addNextCharacter()), "p010" == h.extend.code && 0 == h.extend.type && (a.dataList[0].state = 1, a.newVal += h.data, a.character || a.addNextCharacter()), i.dataInfosList.push(h)
                    } catch (t) {
                      d === s.length - 1 && (a.partialJson = c)
                    }
                  }
                }))
              },
              handleAudioData: function(t) {
                var e = this,
                  i = "".concat(a.env.USER_DATA_PATH, "/audio_").concat(Date.now(), ".mp3"),
                  n = a.getFileSystemManager();
                try {
                  n.writeFile({
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
              clearStarts: function() {
                var t = this;
                this.hoveImg = !1, this.hoveImgList = [], this.hoveImgListUrl = [], JSON.parse(JSON.stringify(this.dataInfosList)).forEach((function(e) {
                  t.setCardInfo(e)
                })), this.dataInfosList = [], this.newVal = "", this.index = 0, this.stratSet = !1, this.pushingProgress = !0, this.pushingProgressShow = !0, this.character && (clearTimeout(this.character), this.character = null)
              },
              playNextAudio: function() {
                var e = this;
                if (0 === this.audioQueue.length) return this.isPlaying = !1, this.currentAudioIndex = 0, void(this.streamFinished && (this.clearAudioCache(), !this.stratSet && this.index >= this.newVal.length && (this.dataList[0].end = !0, this.clearStarts())));
                this.isPlaying = !0;
                var i = this.audioQueue[0];
                this.audioContext = t.createInnerAudioContext(), this.audioContext.src = i, this.audioContext.play(), this.audioContext.onEnded((function() {
                  e.audioContext.destroy(), e.audioContext = null;
                  var t = a.getFileSystemManager();
                  try {
                    t.unlinkSync(i)
                  } catch (t) {
                    console.error("删除已播放音频文件失败:", t)
                  }
                  e.audioQueue.shift(), e.playNextAudio()
                })), this.audioContext.onError((function(t) {
                  console.error("音频播放错误:", t), e.audioContext.destroy(), e.audioContext = null;
                  var n = a.getFileSystemManager();
                  try {
                    n.unlinkSync(i)
                  } catch (t) {
                    console.error("删除播放失败音频文件失败:", t)
                  }
                  e.audioQueue.shift(), e.playNextAudio()
                }))
              },
              clearAudioCache: function() {
                try {
                  var t = a.getFileSystemManager();
                  if (Array.isArray(this.audioQueue) && this.audioQueue.length && this.audioQueue.forEach((function(e) {
                      console.log(e);
                      try {
                        t.unlinkSync(e)
                      } catch (t) {
                        console.log("删除音频文件失败:", t)
                      }
                    })), this.audioContext && this.audioContext.src && "string" == typeof this.audioContext.src) {
                    var e = this.audioContext.src;
                    if (0 === e.indexOf(a.env.USER_DATA_PATH)) {
                      console.log(e);
                      try {
                        a.getFileSystemManager().unlinkSync(e)
                      } catch (t) {
                        console.log("删除音频文件失败:", t)
                      }
                    }
                  }
                } catch (t) {}
                this.audioQueue = []
              },
              showCards: function() {
                var t = this;
                JSON.parse(JSON.stringify(this.dataInfosList)).forEach((function(e) {
                  t.setCardInfo(e)
                })), this.dataInfosList = []
              },
              setCardInfo: function(t) {
                if (t) {
                  if (1 == t.extend.type && "e001" == t.extend.code && (this.dataList[0].exclusiveRoute = t.data || {}), 0 == t.extend.type && "eq001" == t.extend.code && (this.dataList[0].exclusive = t.data || {}), "s001" == t.extend.code && 1 == t.extend.type && (this.dataList[0].list = t.data || []), "o001" == t.extend.code && 1 == t.extend.type && (this.dataList[0].officialGuide = t.data || [], this.dataList[0].officialGuideType = 2), 0 == t.extend.type && "q001" == t.extend.code && (this.dataList[0].divergenceProblem = t.data || []), 1 == t.extend.type && "p006" == t.extend.code && (this.dataList[0].evaluationObj = t.data || {}), 1 == t.extend.type && "p007" == t.extend.code && (this.dataList[0].spotPhone = t.data || {}), 1 == t.extend.type && "p008" == t.extend.code && (this.dataList[0].weatherInfo = {
                      weatherToday: t.data.base || {},
                      weatherWeek: t.data.resp || []
                    }), 1 == t.extend.type && "p009" == t.extend.code && t.data && "object" === (0, s.default)(t.data)) {
                    var e = [];
                    for (var i in t.data) "resp" !== i && t.data[i] && e.push(t.data[i]);
                    this.dataList[0].evaluationQuestion = e
                  }
                  1 == t.extend.type && "p010" == t.extend.code && (this.dataList[0].toilet = t.data || []), this.$forceUpdate()
                }
              },
              askAgainFun: function(t) {
                this.stratSet ? this.$uni.showToast(this.$t("chatItem.pleaseWait")) : this.askAgain(t)
              },
              askAgain: function(t) {
                this.typeVideo = 4, this.doSend(t)
              },
              clearAllTimers: function() {
                this.timeNetwork && (clearTimeout(this.timeNetwork), this.timeNetwork = null), this.timerList.forEach((function(t) {
                  clearTimeout(t)
                })), this.timerList = []
              },
              loadedmetadata: function() {
                var e = this;
                t.createVideoContext("myVideo1", this).play(), setTimeout((function() {
                  e.showImage = !1, e.opacity = 1
                }), 500)
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
                      a = this.dataList[0].content1.lastIndexOf("景点图片：<"),
                      n = this.dataList[0].content1.lastIndexOf("</video>"),
                      o = this.dataList[0].content1.lastIndexOf("景点视频：<");
                    this.dataList[0].content && a > -1 && -1 == this.hoveImgList.indexOf(a) && (-1 == i || -1 == this.hoveImgList.indexOf(i) || i < a) && !this.hoveImg ? (this.dataList[0].content += 'img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(a)) : i > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(i) ? (this.hoveImgList.push(i), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<i"), this.dataList[0].content1.lastIndexOf('">') + 2).replace(/ - /g, "-")), this.dataList[0].content = this.dataList[0].content.replace('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImgListUrl[this.hoveImgListUrl.length - 1]), this.$forceUpdate()) : this.dataList[0].content && o > -1 && -1 == this.hoveImgList.indexOf(o) && (-1 == n || -1 == this.hoveImgList.indexOf(n) || n < o) && !this.hoveImg ? (this.dataList[0].content += 'img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(o)) : n > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(n) ? (this.hoveImgList.push(n), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<v"), this.dataList[0].content1.lastIndexOf("</video>") + 8).replace(/ - /g, "-")), this.dataList[0].content += this.hoveImgListUrl[this.hoveImgListUrl.length - 1], this.$forceUpdate()) : this.hoveImg || (this.dataList[0].content += e)
                  } else this.dataList[0].content += e;
                  this.dataList[0].content1 += e, this.index++, this.character = setTimeout((function() {
                    t.addNextCharacter()
                  }), "zh" == this.lang ? 80 : 40)
                } else clearTimeout(this.character), this.character = null, this.showCards(), this.streamFinished && !this.isPlaying && 0 === this.audioQueue.length && (this.dataList[0].end = !0, this.typeVideo = 4, this.clearStarts())
              },
              stopSpeak: function() {
                this.clearAllTimers(), this.streamFinished = !0, this.character && (clearTimeout(this.character), this.character = null), this.audioContext && (this.audioContext.offPlay && this.audioContext.offPlay(), this.audioContext.offPause && this.audioContext.offPause(), this.audioContext.offEnded && this.audioContext.offEnded(), this.audioContext.offError && this.audioContext.offError(), this.audioContext.pause(), this.audioContext.stop(), this.audioContext.destroy(), this.audioContext = null, this.audioQueue = []), this.isPlaying = !1, this.clearAudioCache(), this.dataList && this.dataList[0] && "string" == typeof this.dataList[0].content && (this.dataList[0].content = this.dataList[0].content.replaceAll('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', "")), this.dataList && this.dataList[0] && (this.dataList[0].end = !0), this.pushingProgress = !0, this.pushingProgressShow = !0, this.task && (this.task.abort(), this.noMsg = !1, this.dataList[0].isTerminate = !1, this.dataList[0].content || (this.dataList[0].content = this.$t("allData.answerTerminated")), this.task = null, this.typeVideo = 4, this.clearStarts())
              },
              exclusive: function(t) {
                this.typeVideo = 4, this.doSend("专属攻略", t)
              },
              playVideo: function(t) {
                this.currentVideoUrl = t, this.$refs.videoPopup.open()
              },
              onVideoError: function(t) {
                console.error("视频播放失败:", t), this.videoLoading = !1, this.$uni.showToast("视频加载失败")
              },
              onVideoLoadStart: function() {
                this.videoLoading = !0
              },
              onVideoLoaded: function() {
                this.videoLoading = !1
              },
              closeVideoPopup: function() {
                this.$refs.videoPopup.close()
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#f1f5fb;height:100vh;width:100%}.page-box .isHide{display:none}.page-box .menuBox{padding:50rpx 30rpx 30rpx}.page-box .drawer-btn.icon-btn{align-items:center;background:transparent;border:none;box-shadow:none;display:-webkit-flex;display:flex;height:60rpx;justify-content:center;padding:0;position:absolute;right:32rpx;top:32rpx;width:60rpx}.page-box .drawer-btn.icon-btn .icon{height:48rpx;width:48rpx}.page-box .fontNum{bottom:10rpx;color:#999;font-size:30rpx;position:absolute;right:20rpx}.page-box .video-popup-container{background-color:#000;border-radius:20rpx;display:-webkit-flex;display:flex;flex-direction:column;height:100vh;position:relative;width:100vw}.page-box .video-popup-header{align-items:center;background-color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;left:0;padding:100rpx 30rpx 20rpx;position:absolute;top:0;width:100%;z-index:10}.page-box .video-popup-title{color:#fff;font-size:32rpx;font-weight:700}.page-box .video-popup-close{align-items:center;background-color:hsla(0,0%,100%,.2);border-radius:50%;cursor:pointer;display:-webkit-flex;display:flex;height:60rpx;justify-content:center;width:60rpx}.page-box .close-icon{color:#fff;font-size:40rpx;font-weight:700}.page-box .video-popup-content{align-items:center;background-color:#000;display:-webkit-flex;display:flex;height:100%;justify-content:center;padding-top:80rpx;width:100%}.page-box .video-player{background-color:initial;border:none;height:100%;object-fit:contain;outline:none;width:100%}.page-box .video-loading{background-color:rgba(0,0,0,.7);border-radius:10rpx;left:50%;padding:20rpx 40rpx;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:5}.page-box .loading-text{color:#fff;font-size:28rpx}.page-box .topLoading{align-items:flex-end;background-color:#fff;display:-webkit-flex;display:flex;height:10vh;justify-content:center;padding-bottom:20rpx;transition:.5s;width:100%}.page-box .topLoading .loading{align-items:center;display:-webkit-flex;display:flex;justify-content:space-around;margin-left:10rpx;width:80rpx}.page-box .topLoading .pot{animation-delay:0s;animation-duration:1.2s;animation-iteration-count:infinite;animation-name:loading-beat-data-v-0a4b676a;border-radius:50%;display:inline-block;height:8rpx;margin-right:5rpx;width:8rpx}.page-box .topLoading .pot:nth-child(1){background:#8666fd}.page-box .topLoading .pot:nth-child(2){animation-delay:.2s;background:#8666fd}.page-box .topLoading .pot:nth-child(3){animation-delay:.4s;background:#8666fd}@-webkit-keyframes loading-beat-data-v-0a4b676a{0%{transform:scale(1)}50%{transform:scale(1.8)}100%{transform:scale(1)}}@keyframes loading-beat-data-v-0a4b676a{0%{transform:scale(1)}50%{transform:scale(1.8)}100%{transform:scale(1)}}.page-box .history-box{padding:50rpx 30rpx 10rpx;position:relative}.page-box .history-line{color:#bdbdbd;font-size:21rpx;line-height:28rpx;overflow:hidden;position:relative;text-align:center;width:100%}.page-box .history-line::after,.page-box .history-line::before{background:#bdbdbd;content:"";display:inline-block;height:1rpx;position:absolute;top:50%;width:100%}.page-box .history-line::before{margin-left:-20rpx;transform:translateX(-100%)}.page-box .history-line::after{margin-left:20rpx}.header-section{align-items:center;background:linear-gradient(180deg,#cde2ff,#d0efff);border-radius:32rpx;display:-webkit-flex;display:flex;padding:30rpx;position:relative}.header-section .header-logo{width:220rpx}.header-section .header-logo .header-icon{height:240rpx;left:0rpx;position:absolute;top:-50rpx;width:240rpx;z-index:10}.header-section .header-content{flex:1}.header-section .header-content .header-nav-item1{align-items:center;color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;font-family:Source Han Sans SC;font-size:30rpx;font-weight:700;margin-bottom:8rpx;margin-top:24rpx}.header-section .header-content .header-nav-item1 .header-nav-icon{height:40rpx;margin-left:12rpx;width:38rpx}.header-section .header-content .header-nav-item2{color:#232020;font-family:Source Han Sans SC;font-size:28rpx;font-weight:400;margin-bottom:8rpx}.header-section .header-content .header-nav-item3{align-items:center;background:hsla(0,0%,100%,.7);border:2rpx solid #fff;border-radius:30rpx;color:#232020;display:-webkit-flex;display:flex;font-size:24rpx;gap:12rpx;height:60rpx;padding:4rpx 18rpx}.header-section .header-content .header-nav-item3 .header-nav-open{flex-shrink:0;height:50rpx;width:50rpx}.header-section .header-content .header-nav-item3 .header-nav-open1{flex-shrink:0;height:42rpx;width:42rpx}.header-section .header-content .header-nav-item3 .custom-progress{align-items:center;display:-webkit-flex;display:flex;flex:1;height:36rpx;margin:0 12rpx}.header-section .header-content .header-nav-item3 .custom-progress .progress-bg{background:rgba(35,32,32,.2);border-radius:4rpx;height:8rpx;position:relative;width:100%}.header-section .header-content .header-nav-item3 .custom-progress .progress-bg .progress-active{background:linear-gradient(78deg,#6585fa,#6ad5fe);border-radius:4rpx;height:100%;max-width:100%;position:relative;transition:width .2s ease}.header-section .header-content .header-nav-item3 .custom-progress .progress-bg .progress-active .progress-dot{background:linear-gradient(78deg,#6585fa,#6ad5fe);border-radius:50%;box-shadow:0 2rpx 6rpx rgba(101,133,250,.4);height:20rpx;pointer-events:none;position:absolute;right:-6rpx;top:50%;transform:translateY(-50%);width:20rpx}.header-section .header-actions{background:linear-gradient(90deg,#6585fa,#6ad5fe);border-radius:32rpx;color:#4267d3;font-size:24rpx;line-height:1.2;padding:6rpx 18rpx;position:absolute;right:22rpx;text-align:center;top:22rpx;z-index:5}.container-b{gap:24rpx;margin:20rpx 0}.container-b .item-b,.container-b{align-items:center;display:-webkit-flex;display:flex}.container-b .item-b{border:2rpx solid #fff;border-radius:40rpx 40rpx 40rpx 40rpx;font-family:Source Han Sans SC;font-size:26rpx;font-weight:400;justify-content:center;padding:12rpx 24rpx}.container-b .item-b .item-icon{height:36rpx;width:36rpx}.container-b .item-b1{background:linear-gradient(78deg,#6585fa,#6ad5fe);color:#fff}.container-b .item-b2{background:#dee9fb;color:#555}.chat-content{height:100%;width:100%}.you-may-ask{background:#dee9fb;border-radius:32rpx 32rpx 32rpx 32rpx;padding:20rpx}.you-may-ask .ask-title{align-items:center;color:#678cfb;display:-webkit-flex;display:flex;font-family:Source Han Sans SC;font-size:28rpx;font-weight:500}.you-may-ask .ask-title .ask-icon{height:40rpx;margin-right:8rpx;width:40rpx}.you-may-ask .ask-item-box .ask-item{background:hsla(0,0%,100%,.7);border-radius:60rpx 60rpx 60rpx 60rpx;color:rgba(0,0,0,.8);font-family:Source Han Sans SC;font-size:26rpx;font-weight:400;margin-top:20rpx;padding:24rpx 20rpx}
</style>
