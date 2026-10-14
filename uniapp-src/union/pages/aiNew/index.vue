<template>
<view class="page-box">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <z-paging :auto="false" bottomBgColor="#00000000" class=" vue-ref" ref="paging" :lowerThreshold="50" safeAreaInsetBottom="isIos" :scrollable="true" style="position:fixed;z-index:11;" :useChatRecordMode="true" :value="dataList" :vueSlots="['default','bottom']" v-if="!isHide" @scrolltolower="startLoading()" @keyboardHeightChange="keyboardHeightChange()" @input="dataList = $event">
        <chat-input-bar :bg="true" class="chat-input-bar vue-ref" ref="inputBar" :detail="spotDetail" :isIos="isIos" :pushingProgress="pushingProgress" :pushingProgressShow="pushingProgressShow" slot="bottom" @stopSpeak="stopSpeak()" @resetTravel="resetTravel()" @clearData="clearData()" @clearDataStop="clearDataStop()" @send="doSend()"></chat-input-bar>
        <view class="" style="position:relative;" :key="id" v-for="(item, __i0__) in dataList">
            <view class="" style="transform:scaleY(-1);">
                <chat-item class="" :dataList="dataList" :item="item" :newVal="newVal" :pushingProgress="pushingProgress" :showComment="currrentId===item.id" @askAgain="askAgain()" @resetTravel="resetTravel()" @exclusive="exclusive()" @delComment="delComment()" @openDrawer="openDrawer()" @stopSpeak="stopSpeak()" @playVideo="playVideo()"></chat-item>
            </view>
        </view>
        <view class="" :style="'height:'+calculatedPlaceholderHeight+';'+'transform:'+'scaleY(-1)'+';'" v-if="$root.g0===0"></view>
        <view class="menuBox" style="transform:scaleY(-1);">
            <view class="line1" style="height:432rpx;" v-if="!topData">
                <view class="btnBox" @click="goAiTravel()">
                    <view class="welcome">欢迎来到陕西</view>
                    <view class="welcomeText">hello，我是小七，您的专属AI旅行助手~</view>
                    <view class="btn">AI定制攻略<image class="" src="https://eshopfile.zhiyousx.com/175496335940198661.png"></image>
                    </view>
                </view>
                <image class="" src="https://eshopfile.zhiyousx.com/175496153844154546.png" v-if="showImage"></image>
                <video class="video_box" :controls="false" :enableProgressGesture="false" id="myVideo1" :initialTime="0" :muted="true" objectFit="cover" src="https://eshopfile.zhiyousx.com/2025081209100788639.mp4" :style="'opacity:'+opacity+';'+'z-index:'+10+';'+'background-color:'+'transparent'+';'+'transform:'+'translate3d(0,0,0)'+';'" @ended="ended($event)" @pause="pauseFun($event)" @loadedmetadata="loadedmetadata($event)"></video>
                <view class="bottomMask"></view>
            </view>
            <view class="line1 topCard" v-if="topData">
                <view class="head">待出行计划<view class="btn-box">
                        <view class="btn" @click="goAiTravel()">重新规划</view>
                    </view>
                </view>
                <view class="content" @click="goCardPage()">
                    <view class="content-left">
                        <view class="title">{{topData.city+topData.day+'天旅行计划'}}</view>
                        <view class="member">{{''+(topData.scenicList?$root.g1:0)+'个景点'}}<view class="avatar-group">
                                <image class="avatar-img" :src="item.avatarUrl" :style="'z-index:'+3-index+';'" :key="index" v-for="(item, index) in $root.l0"></image>
                            </view>
                        </view>
                        <view class="clock">
                            <image class="" src="https://eshopfile.zhiyousx.com/175672522805774296.png"></image>
                            <text class="">{{topData.message}}</text>
                        </view>
                        <view class="goBtn">
                            <image class="" src="https://eshopfile.zhiyousx.com/175672557849516358.png"></image>
                        </view>
                    </view>
                    <image class="content-right" :src="topData.homeImage"></image>
                </view>
            </view>
            <view class="line2">
                <view class="dailyBox box" v-if="systemInfo.smartEscort" @click="travelDailyNews()">
                    <view class="title">智慧伴游</view>
                    <view class="content">智游随行/多语</view>
                </view>
                <view class="testBox box" v-if="systemInfo.mapUrl" @click="goMap()">
                    <view class="title">文旅地图</view>
                    <view class="content">地图总览/导航</view>
                </view>
                <view class="travelBox box" v-if="systemInfo.travelUrl" @click="goTravel()">
                    <view class="title">景区导览</view>
                    <view class="content">景点讲解/路线</view>
                </view>
            </view>
            <view class="line3">
                <view class="title">配套服务</view>
                <scroll-view class="tab" scrollWithAnimation="true" :scrollX="true" :throttle="false">
                    <view class="tag-scroll">
                        <view class="tag-item" @click="getToilet()">
                            <image class="tag-item-icon" src="https://eshopfile.zhiyousx.com/175498475578161465.png"></image>
                            <view class="tag-item-text">卫生间</view>
                        </view>
                        <view class="tag-item" @click="getTest()">
                            <image class="tag-item-icon" src="https://eshopfile.zhiyousx.com/175498477099737020.png"></image>
                            <view class="tag-item-text">景区测评</view>
                        </view>
                        <view class="tag-item" @click="getWeather()">
                            <image class="tag-item-icon" src="https://eshopfile.zhiyousx.com/175498478345049089.png"></image>
                            <view class="tag-item-text">天气查询</view>
                        </view>
                        <view class="tag-item" @click="getNear()">
                            <image class="tag-item-icon" src="https://eshopfile.zhiyousx.com/176958559044358458.png"></image>
                            <view class="tag-item-text">附近景点</view>
                        </view>
                        <view class="tag-item" @click="getPhone()">
                            <image class="tag-item-icon" src="https://eshopfile.zhiyousx.com/175498479446573352.png"></image>
                            <view class="tag-item-text">咨询电话</view>
                        </view>
                    </view>
                </scroll-view>
            </view>
            <view class="line4" v-if="systemInfo.couponUrl&&topData" @click="goCoupon($event)">
                <view class="l-left">
                    <view class="title">小七送十一福利啦！</view>
                    <view class="content">百元优惠券等你来</view>
                </view>
                <image class="l-right" src="https://eshopfile.zhiyousx.com/175550099700853223.png"></image>
            </view>
        </view>
        <view class="history-box" :style="'transform:'+'scaleY(-1)'+';'" v-if="hasHistory">
            <view class="history-line">{{ ($root.g2===0?'下拉查看历史数据':'以上为历史记录') }}</view>
        </view>
        <view class="" style="position:relative;" :key="index" v-for="(item, index) in historyList">
            <view class="" style="transform:scaleY(-1);">
                <chat-item class="" :dataList="dataList" :item="item" :newVal="newVal" :pushingProgress="pushingProgress" :showComment="false" @askAgain="askAgain()" @resetTravel="resetTravel()" @exclusive="exclusive()" @openDrawer="openDrawer()" @stopSpeak="stopSpeak()" @playVideo="playVideo()"></chat-item>
            </view>
        </view>
        <view class="topLoading" :style="'transform:scaleY(-1);'+'background-color:'+'#fff'+';'+'height:'+NavH+'px'+';'">
            <view class="" style="display:flex;align-items:center;" v-if="showTopLoading">加载中<view class="loading">
                    <view class="pot"></view>
                    <view class="pot"></view>
                    <view class="pot"></view>
                </view>
            </view>
        </view>
    </z-paging>
    <uni-popup class=" vue-ref" ref="feedbackDrawer" type="bottom" :vueSlots="['default']" @change="handleChange()">
        <view class="drawer-content" :style="'padding-bottom:'+(keyboardHeight?keyboardHeight+'px':'')+';'">
            <view class="drawer-title">您的反馈将帮助我们优化进步</view>
            <view class="drawer-btns">
                <view :class="['drawer-btn','',index%2==0?'mr32':'',el.select?'selected':'']" :key="index" v-for="(el, index) in typeList">{{el.content}}</view>
            </view>
            <view class="" style="width:100%;position:relative;">
                <textarea :adjustPosition="false" class="drawer-input" maxlength="300" placeholder="请输入您的评价" style="max-height:200rpx;overflow-y:auto;" :value="commentObj.content" @input="commentObj.content = $event"></textarea>
                <text class="fontNum">{{$root.g3+' / 300'}}</text>
            </view>
            <view class="submitBtn" @click="closeComment($event)">提交</view>
        </view>
    </uni-popup>
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
                    <text class="loading-text">视频加载中...</text>
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
                Promise.all([n.e("common/vendor"), n.e("union/common/vendor"), n.e("union/components1/z-paging/z-paging")]).then(function() {
                  return resolve(n("a7ee"))
                }.bind(null, n)).catch(n.oe)
              },
              chatInputBar: function() {
                n.e("union/components1/chat-input-bar/chat-input-bar-new").then(function() {
                  return resolve(n("5438"))
                }.bind(null, n)).catch(n.oe)
              },
              chatItem: function() {
                n.e("union/components1/chat-item/chat-item-new").then(function() {
                  return resolve(n("edef"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            onLoad: function(e) {
              var n = this,
                i = uni.getSystemInfoSync();
              "android" === i.platform ? this.isIos = !1 : "ios" === i.platform ? this.isIos = !0 : this.isIos = !1, this.createSession(), setTimeout((function() {
                n.maskShow = !1
              }), 1e3), this.NavH = uni.getMenuButtonBoundingClientRect().bottom, console.log(this.NavH), Promise.all([this.getHistory(), this.getSysConfigure(), this.getTopData()]).then((function() {
                console.log(n.topData, "this.topData"), n.$nextTick((function() {
                  n.getElementsHeight()
                }))
              })).catch((function(t) {
                console.error("请求失败:", t), n.$nextTick((function() {
                  n.getElementsHeight()
                }))
              }))
            },
            onShow: function() {
              this.isHide && (this.isHide = !1, this.getTopData())
            },
            onHide: function() {
              this.opacity = 0, this.showImage = !0, this.travelHidden && (this.travelHidden = !1), this.isHide = !0
            },
            onUnload: function() {
              this.opacity = 0
            },
            mounted: function() {},
            data: function() {
              return {
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
                topData: null
              }
            },
            watch: {},
            computed: {},
            methods: {
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
                  n = uni.createSelectorQuery().in(this);
                n.select(".menuBox").boundingClientRect(), n.select(".chat-input-bar").boundingClientRect(), n.select(".topLoading").boundingClientRect(), n.select(".history-box").boundingClientRect(), n.exec((function(n) {
                  if (n && n.length >= 3) {
                    var i = n[0],
                      a = n[1],
                      o = n[2],
                      s = n[3];
                    if (i && (e.menuBoxHeight = i.height, console.log("menuBox 高度:", i.height, "topData状态:", !!e.topData)), a) {
                      e.chatInputBarHeight = a.height, console.log("chatInputBar 高度:", a.height);
                      var r = uni.getSystemInfoSync().screenHeight,
                        c = a.top,
                        h = a.height;
                      e.chatInputBarBottomDistance = e.isIos ? 0 : r - (c + h), console.log("chat-input-bar距离屏幕底部高度:", e.chatInputBarBottomDistance, "px")
                    }
                    if (o && (e.topLoadingHeight = o.height, console.log("topLoading 高度:", e.NavH)), s) {
                      var d = uni.getSystemInfoSync().screenWidth,
                        l = .064 * d;
                      e.historyBoxHeight = l, console.log("historyBox 高度计算:", {
                        boundingClientRect: s.height,
                        calculated: l,
                        screenWidth: d,
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
                    n = this.menuBoxHeight + this.chatInputBarHeight + this.NavH + this.historyBoxHeight + this.chatInputBarBottomDistance,
                    i = n / e * 100,
                    a = 101 - i;
                  this.calculatedPlaceholderHeight = a > 0 ? "".concat(a, "vh") : "0", console.log("占位符高度计算:", {
                    screenHeight: e,
                    menuBoxHeight: this.menuBoxHeight,
                    chatInputBarHeight: this.chatInputBarHeight,
                    topLoadingHeight: this.topLoadingHeight,
                    historyBoxHeight: this.historyBoxHeight,
                    hasHistory: this.hasHistory,
                    chatInputBarBottomDistance: this.chatInputBarBottomDistance,
                    totalHeightPx: n,
                    totalHeightVh: i,
                    placeholderHeightVh: a,
                    topDataStatus: !!this.topData
                  })
                }
              },
              getChatInputBarBottomDistance: function() {
                var e = this;
                return new Promise((function(n) {
                  var i = uni.createSelectorQuery().in(e);
                  i.select(".chat-input-bar").boundingClientRect(), i.exec((function(i) {
                    if (i && i[0]) {
                      var a = i[0],
                        o = uni.getSystemInfoSync().screenHeight - (a.top + a.height);
                      console.log("chat-input-bar距离屏幕底部高度:", o, "px"), e.chatInputBarBottomDistance = o, n(o)
                    } else console.warn("未找到chat-input-bar元素"), n(0)
                  }))
                }))
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
                var n = this.page;
                this.$uniApi.dataRequestNoLoading("get", "ai/aiEscort/dialogue/record", {
                  openId: uni.getStorageSync("wxopenid"),
                  pageSize: 30,
                  pageOn: n,
                  sessionId: this.flowId
                }).then((function(t) {
                  if (1 === t.code) {
                    var n = t.data.records;
                    if (e.totle = t.data.total, !(t.data.total > 0)) return e.$refs.paging.completeByNoMore([], !0), e.isLoadingHistory = !1, e.showTopLoading = !1, e.$utils.toast("没有更多数据了"), e.historyList.length > 0 && (e.historyList = e.historyList.concat([{
                      content: "",
                      type: 0,
                      nomoreLine: !0,
                      isHistory: !0
                    }])), !1;
                    if (t.data.current < t.data.pages ? (e.page = e.page + 1, e.loadMore = "loadmore") : e.loadMore = "nomore", !n || !n.length) return e.$refs.paging.completeByNoMore([], !0), e.historyList = [], e.isLoadingHistory = !1, e.showTopLoading = !1, !1;
                    var i = [];
                    n.forEach((function(t) {
                      if (1 == t.type) t.content && -1 == t.content.indexOf("专属攻略：是") && i.push({
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
                          n = t.content;
                        t.content.indexOf("の") > -1 ? (e = t.content.split("の")[1].replaceAll("swiperItem", "swiperItem swiperItemBox").replaceAll(/<video(.*?)src="(.*?) - (.*?)"(.*?)>/g, '<video$1src="$2-$3"$4>').replaceAll(/<img src="(.*?) - (.*?)" alt="">/g, '<img src="$1-$2" alt="">'), n = t.content.split("の")[0], i.push({
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
                        })) : i.push({
                          content: n,
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
                        }), i[i.length - 1].state = 1, i[i.length - 1].divergenceProblem = t.deriveIssue ? t.deriveIssue.data : [], t.jsonData && "o001" == t.jsonData.extend.code && (i[i.length - 1].content = "为您推荐官方游玩攻略：", i[i.length - 1].officialGuide = t.jsonData ? t.jsonData.data : [], i[i.length - 1].exclusive = t.content, i[i.length - 1].officialGuideType = 2), t.jsonData && "s001" == t.jsonData.extend.code && (i[i.length - 1].list = t.jsonData ? t.jsonData.data : []), t.jsonData && "e001" == t.jsonData.extend.code && (i[i.length - 1].exclusiveRoute = t.jsonData ? t.jsonData.data : []), t.jsonData && "p002" == t.jsonData.extend.code && (i[i.length - 1].redirectContent = t.jsonData ? t.jsonData.data : {}, i[i.length - 1].content = "检测到您需要攻略或规划？  \n👉 点击下方 「AI旅行搭子」，一键生成专属方案！  \n（不满意？可随时重新生成哦~）"), t.jsonData && "p006" == t.jsonData.extend.code && (i[i.length - 1].content = " ", i[i.length - 1].evaluationObj = t.jsonData ? t.jsonData.data : {}, console.log(i[i.length - 1])), t.jsonData && "p007" == t.jsonData.extend.code && (i[i.length - 1].content = " ", i[i.length - 1].spotPhone = t.jsonData ? t.jsonData.data : {}), t.jsonData && "p008" == t.jsonData.extend.code && (console.log(t.jsonData, "v.jsonData"), i[i.length - 1].weatherInfo = {
                          weatherToday: t.jsonData.data.base || {},
                          weatherWeek: t.jsonData.data.resp || []
                        }), t.jsonData && "p009" == t.jsonData.extend.code && (i[i.length - 1].content = t.jsonData ? t.jsonData.data.resp : ""), t.jsonData && "p010" == t.jsonData.extend.code && (i[i.length - 1].toilet = t.jsonData ? t.jsonData.data : []), t.content.indexOf("の") > -1 && i.push({
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
                    var a = t.data.current < t.data.pages;
                    e.$refs.paging.completeByNoMore([], !a);
                    var o = e.historyList.length > 0 ? [{
                      content: "",
                      type: 0,
                      historyLine: !0,
                      isHistory: !0
                    }].concat(i) : i;
                    e.historyList = e.historyList.concat(o), console.log(e.historyList, "this.historyList"), a || e.historyList.push({
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
                var e = this;
                this.$uniApi.dataRequestNoLoading("post", "ai/aiEscort/session/create", {
                  bussType: 1,
                  openId: uni.getStorageSync("wxopenid"),
                  title: u.format(new Date, "yyyy-MM-dd hh:mm:ss:S")
                }).then((function(t) {
                  1 === t.code && (e.flowId = t.data)
                }))
              },
              resetTravel: function(e) {
                this.travelHidden = !0;
                var n = this.systemInfo.aiTravel;
                if (n) {
                  var i = [];
                  e && ["departureTime", "destination", "budget", "interestPoint", "returnTime", "adult", "children", "older", "change"].forEach((function(t) {
                    e[t] && i.push("".concat(t, "=").concat(encodeURIComponent(e[t])))
                  })), i.length > 0 && (n += "?" + i.join("&")), uni.navigateTo({
                    url: n
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
                }), this.pushingProgressShow ? void this.resetTravel() : void this.$uni.showToast("正在回答，请稍候")) : void this.$uni.showToast("敬请期待！")
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
                this.commentObj.dialogueContent = JSON.stringify(l(l({}, t), {}, {
                  sessionId: this.flowId
                })), this.commentObj.status = e - 1, 1 == e ? this.submitComment() : 2 == e && this.$refs.feedbackDrawer.open()
              },
              delComment: function(e) {
                var n = this;
                this.commentObj.dialogueContent = JSON.stringify(l(l({}, e), {}, {
                  sessionId: this.flowId
                })), this.commentObj.type = "", this.$eventAnalyse.analyse({
                  eventTag: "ai_comment_delete",
                  eventName: "小七删除对话评价",
                  eventParams: {}
                });
                var i = l(l({}, this.commentObj), {}, {
                  openId: uni.getStorageSync("wxopenid")
                });
                this.$uniApi.dataRequestNoLoading("post", "ai/app/dialogue/delete", i).then((function(t) {
                  n.commentObj = {
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
                var n = this;
                this.typeList.length > 0 && (this.commentObj.type = this.typeList.filter((function(t) {
                  return t.select
                })).map((function(t) {
                  return t.content
                })).join(",")), this.$eventAnalyse.analyse({
                  eventTag: "ai_comment_submit",
                  eventName: "小七提交对话评价",
                  eventParams: {}
                });
                var i = l(l({}, this.commentObj), {}, {
                  openId: uni.getStorageSync("wxopenid")
                });
                this.$uniApi.dataRequestNoLoading("post", "ai/app/dialogue/add", i).then((function(t) {
                  n.commentObj = {
                    status: 0,
                    type: [],
                    content: "",
                    dialogueContent: null
                  }, n.typeList = n.typeList.map((function(t) {
                    return t.select = 0, t
                  })), 1 === t.code && n.$uni.showToast("感谢您的反馈！")
                }))
              },
              getWeather: function() {
                var e = this;
                return (0, c.default)(o.default.mark((function n() {
                  return o.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (!e.isClicking) {
                          n.next = 2;
                          break
                        }
                        return n.abrupt("return");
                      case 2:
                        if (e.pushingProgress) {
                          n.next = 5;
                          break
                        }
                        return e.$uni.showToast("正在回答，请稍候"), n.abrupt("return");
                      case 5:
                        return e.isClicking = !0, t.vibrateShort(), e.$eventAnalyse.analyse({
                          eventTag: "ai_weather_click",
                          eventName: "小七点击天气查询导航"
                        }), n.next = 10, uni.getLocation();
                      case 10:
                        n.sent && e.doSend("天气查询"), setTimeout((function() {
                          e.isClicking = !1
                        }), 1e3);
                      case 13:
                      case "end":
                        return n.stop()
                    }
                  }), n)
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
              getNear: function() {
                var e = this;
                return (0, c.default)(o.default.mark((function n() {
                  return o.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (!e.isClicking) {
                          n.next = 2;
                          break
                        }
                        return n.abrupt("return");
                      case 2:
                        if (e.pushingProgress) {
                          n.next = 5;
                          break
                        }
                        return e.$uni.showToast("正在回答，请稍候"), n.abrupt("return");
                      case 5:
                        return e.isClicking = !0, t.vibrateShort(), e.$eventAnalyse.analyse({
                          eventTag: "ai_near_click",
                          eventName: "小七点击附近景区导航"
                        }), n.next = 10, uni.getLocation();
                      case 10:
                        n.sent && e.doSend("附近景区"), setTimeout((function() {
                          e.isClicking = !1
                        }), 1e3);
                      case 13:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              getTest: function() {
                var e = this;
                this.isClicking || (this.pushingProgress ? (this.isClicking = !0, t.vibrateShort(), this.$eventAnalyse.analyse({
                  eventTag: "ai_xjtu_click",
                  eventName: "小七点击景区评测导航"
                }), this.doSend("查看景区测评"), setTimeout((function() {
                  e.isClicking = !1
                }), 1e3)) : this.$uni.showToast("正在回答，请稍候"))
              },
              goTravel: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_wallGuide_click",
                  eventName: "小七点击城墙伴游导航"
                }), uni.navigateTo({
                  url: this.systemInfo.travelUrl
                })
              },
              goMap: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_travelmap_click",
                  eventName: "小七点击文旅地图导航"
                }), uni.navigateTo({
                  url: this.systemInfo.mapUrl
                })
              },
              travelDailyNews: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_smartEscort_click",
                  eventName: "小七点击智慧伴游导航"
                }), uni.navigateTo({
                  url: this.systemInfo.smartEscort
                })
              },
              foucsTxt: function() {
                var t = this;
                setTimeout((function() {
                  t.keyboardHeight = t.keyboardHeight ? t.keyboardHeight : "300"
                }), 200)
              },
              blurTxt: function() {
                this.keyboardHeight = 0
              },
              getToilet: function() {
                var e = this;
                return (0, c.default)(o.default.mark((function n() {
                  return o.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (!e.isClicking) {
                          n.next = 2;
                          break
                        }
                        return n.abrupt("return");
                      case 2:
                        if (e.pushingProgress) {
                          n.next = 5;
                          break
                        }
                        return e.$uni.showToast("正在回答，请稍候"), n.abrupt("return");
                      case 5:
                        return e.isClicking = !0, t.vibrateShort(), e.$eventAnalyse.analyse({
                          eventTag: "ai_toilet_click",
                          eventName: "小七点击卫生间导航"
                        }), n.next = 10, uni.getLocation();
                      case 10:
                        n.sent && e.doSend("找卫生间"), setTimeout((function() {
                          e.isClicking = !1
                        }), 1e3);
                      case 13:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              getKeyWordsOfLocation: function(t) {
                var e = !1;
                return ["洗手间", "厕所", "卫生间", "茅房", "盥洗室", "WC", "天气查询"].forEach((function(n) {
                  t.includes(n) && (e = !0)
                })), e
              },
              getLocation: function() {
                return (0, c.default)(o.default.mark((function e() {
                  return o.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", new Promise((function(e) {
                          i.getSetting({
                            success: function(n) {
                              n.authSetting["scope.userLocation"] ? (uni.showLoading({
                                title: "获取定位中...",
                                mask: !0
                              }), uni.getLocation({
                                type: "gcj02",
                                success: function(n) {
                                  uni.setStorageSync("location", {
                                    longitude: n.longitude,
                                    latitude: n.latitude
                                  }), uni.hideLoading(), e(!0)
                                },
                                fail: function() {
                                  uni.hideLoading(), e(!0)
                                }
                              })) : i.authorize({
                                scope: "scope.userLocation",
                                success: function() {
                                  uni.showLoading({
                                    title: "获取定位中...",
                                    mask: !0
                                  }), uni.getLocation({
                                    type: "gcj02",
                                    success: function(n) {
                                      uni.setStorageSync("location", {
                                        longitude: n.longitude,
                                        latitude: n.latitude
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
                                      t.confirm && i.openSetting(), e(!1)
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
                var n = this;
                this.pushingProgress = !1, this.stratSet = !0, this.scrollToBottomInChatMode(), this.flowId ? setTimeout((function() {
                  if (e || n.dataList.unshift({
                      content: t,
                      type: 1,
                      state: 1,
                      end: !0,
                      name: "ai",
                      list: [],
                      id: (new Date).getTime()
                    }), n.dataList.unshift({
                      content: "",
                      content1: "",
                      type: 0,
                      state: 0,
                      end: !1,
                      name: "ai",
                      isMe: !1,
                      list: [],
                      id: Date.now() + Math.floor(1e3 * Math.random()),
                      comment: 0
                    }), console.log(n.dataList), n.currrentId = n.dataList[0].id, e && e.id) {
                    var i = e.exclusive;
                    n.toSend(i)
                  } else n.toSend(t);
                  n.scrollToBottomInChatMode()
                }), 300) : this.$uni.showToast("会话创建失败，请稍后再试")
              },
              toSend: function(e) {
                var n = this,
                  i = this;
                this.dataInfosList = [], this.pushingProgressShow = !1;
                var a = {
                    language: 0,
                    question: e,
                    userId: uni.getStorageSync("wxopenid"),
                    sessionId: this.flowId,
                    bussType: 1
                  },
                  o = uni.getStorageSync("location") ? uni.getStorageSync("location").longitude : 108.964364,
                  s = uni.getStorageSync("location") ? uni.getStorageSync("location").latitude : 34.221003;
                o && s && (a.location = "".concat(o, ",").concat(s)), i.timeNetwork = setTimeout((function() {
                  n.clearAllTimers(), n.clearStarts(), n.$uni.showToast("网络异常，请重试！"), n.task && (n.dataList[0].content = "网络走丢了，请稍后重试!", n.task.abort())
                }), 15e3), this.task = t.request({
                  url: "".concat(getApp().globalData.requestUrl, "ai/app/escort/ai/chat"),
                  enableChunked: !0,
                  method: "POST",
                  timeout: 9e5,
                  data: a,
                  success: function(t) {
                    console.log(t), 200 == t.statusCode && (n.stratSet = !1, n.WshowHide = !1, n.newValCopy = "", n.newVal += " ", n.addNextCharacter()), 400 == t.statusCode && (n.clearStarts(), n.dataList[0].content = "网络走丢了，请稍后重试!", n.task && n.task.abort()), i.dataList[0].end = !0, i.$data.currentIndex = 0, i.$data.currentContent = "", i.$data.sendState = !1, i.isNetworkAnomaly = !1, i.delayBtn = !0, n.clearAllTimers()
                  },
                  fail: function(t) {
                    console.log(t, "ssssssssssss"), n.stratSet = !1, n.delayBtn = !0, "request:fail " == t.errMsg && (n.clearStarts(), n.dataList[0].content = "网络走丢了，请稍后重试!", n.task && n.task.abort()), n.clearAllTimers(), "request:fail abort" == t.errMsg && n.dataList[0].content && n.dataList[0].content.endsWith('<img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>') && (n.dataList[0].content = n.dataList[0].content.slice(0, n.dataList[0].content.length - 97))
                  }
                }), this.task.onChunkReceived((function(t) {
                  n.clearAllTimers(), i.delayBtn = !0, i.isNetworkAnomaly = !0, i.timeNetwork = setTimeout((function() {
                    n.clearAllTimers(), n.clearStarts(), n.$uni.showToast("网络异常，请重试！"), n.task && n.task.abort()
                  }), 3e4), i.timerList.push(i.timeNetwork);
                  var e, a = new Uint8Array(t.data);
                  if ("[object Uint8Array]" === Object.prototype.toString.call(a)) e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, r.default)(a))));
                  else if (a instanceof ArrayBuffer) {
                    var o = new Uint8Array(a);
                    e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, r.default)(o))))
                  }
                  3 != i.typeVideo && (i.typeVideo = 3), console.log(e), e.split("^").forEach((function(t) {
                    if (t) {
                      var e = JSON.parse(t);
                      0 == e.extend.type && "c001" == e.extend.code && (i.dataList[0].state = 1, i.newVal += e.data, i.character || i.addNextCharacter()), 0 == e.extend.type && "e001" == e.extend.code && (i.newVal += e.data, i.character || i.addNextCharacter()), "s001" == e.extend.code && 0 == e.extend.type && (i.dataList[0].state = 1, i.newVal += e.data, i.character || i.addNextCharacter()), "o001" == e.extend.code && (i.dataList[0].state = 1, i.character || (e ? (i.newVal = "为您推荐官方游玩攻略：", i.addNextCharacter()) : (i.dataList[0].officialGuide = [], i.dataList[0].officialGuideType = 1))), "p002" == e.extend.code && (i.dataList[0].state = 1, i.dataList[0].redirectContent = JSON.parse(e.data), i.newVal += "检测到您需要攻略或规划？  \n👉 点击下方 「AI旅行搭子」，一键生成专属方案！  \n（不满意？可随时重新生成哦~）", i.character || i.addNextCharacter()), "p005" == e.extend.code && (i.dataList[0].state = 1, i.dataList[0].changeAnswer = JSON.parse(e.data), i.newVal += "根据您的修改意见，点击下方按钮进行重新规划吧！", i.character || i.addNextCharacter()), "p006" != e.extend.code && "p007" != e.extend.code || (i.dataList[0].state = 1, i.newVal += "", i.character || setTimeout((function() {
                        i.addNextCharacter()
                      }), 0)), "p009" == e.extend.code && (i.dataList[0].state = 1, i.newVal += e.data.resp, i.character || i.addNextCharacter()), "p010" == e.extend.code && 0 == e.extend.type && (i.dataList[0].state = 1, i.newVal += e.data, i.character || i.addNextCharacter()), n.dataInfosList.push(e)
                    }
                  }))
                }))
              },
              clearStarts: function() {
                var t = this;
                this.hoveImg = !1, this.hoveImgList = [], this.hoveImgListUrl = [], JSON.parse(JSON.stringify(this.dataInfosList)).forEach((function(e) {
                  t.setCardInfo(e)
                })), this.dataInfosList = [], this.newVal = "", this.index = 0, this.stratSet = !1, this.pushingProgress = !0, this.pushingProgressShow = !0, this.character && (clearTimeout(this.character), this.character = null)
              },
              setCardInfo: function(t) {
                if (t) {
                  if (1 == t.extend.type && "e001" == t.extend.code && (this.dataList[0].exclusiveRoute = t.data || {}), 0 == t.extend.type && "eq001" == t.extend.code && (this.dataList[0].exclusive = t.data || {}), "s001" == t.extend.code && 1 == t.extend.type && (this.dataList[0].list = t.data || []), "o001" == t.extend.code && 1 == t.extend.type && (this.dataList[0].officialGuide = t.data || [], this.dataList[0].officialGuideType = 2), 0 == t.extend.type && "q001" == t.extend.code && (this.dataList[0].divergenceProblem = t.data || []), 1 == t.extend.type && "p006" == t.extend.code && (this.dataList[0].evaluationObj = t.data || {}), 1 == t.extend.type && "p007" == t.extend.code && (this.dataList[0].spotPhone = t.data || {}), 1 == t.extend.type && "p008" == t.extend.code && (this.dataList[0].weatherInfo = {
                      weatherToday: t.data.base || {},
                      weatherWeek: t.data.resp || []
                    }), 1 == t.extend.type && "p009" == t.extend.code && t.data && "object" === (0, s.default)(t.data)) {
                    var e = [];
                    for (var n in t.data) "resp" !== n && t.data[n] && e.push(t.data[n]);
                    this.dataList[0].evaluationQuestion = e
                  }
                  1 == t.extend.type && "p010" == t.extend.code && (this.dataList[0].toilet = t.data || []), this.$forceUpdate()
                }
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
                  var t = "の" == this.newVal[this.index] ? "" : this.newVal[this.index];
                  if (this.newVal.indexOf("の") > -1) {
                    var e = this.dataList[0].content1.lastIndexOf('">'),
                      n = this.dataList[0].content1.lastIndexOf("景点图片：<"),
                      i = this.dataList[0].content1.lastIndexOf("</video>"),
                      a = this.dataList[0].content1.lastIndexOf("景点视频：<");
                    this.dataList[0].content && n > -1 && -1 == this.hoveImgList.indexOf(n) && (-1 == e || -1 == this.hoveImgList.indexOf(e) || e < n) && !this.hoveImg ? (this.dataList[0].content += 'img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(n)) : e > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(e) ? (this.hoveImgList.push(e), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<i"), this.dataList[0].content1.lastIndexOf('">') + 2).replace(/ - /g, "-")), this.dataList[0].content = this.dataList[0].content.replace('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImgListUrl[this.hoveImgListUrl.length - 1]), this.$forceUpdate()) : this.dataList[0].content && a > -1 && -1 == this.hoveImgList.indexOf(a) && (-1 == i || -1 == this.hoveImgList.indexOf(i) || i < a) && !this.hoveImg ? (this.dataList[0].content += 'img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(a)) : i > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(i) ? (this.hoveImgList.push(i), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<v"), this.dataList[0].content1.lastIndexOf("</video>") + 8).replace(/ - /g, "-")), this.dataList[0].content += this.hoveImgListUrl[this.hoveImgListUrl.length - 1], this.$forceUpdate()) : this.hoveImg || (this.dataList[0].content += t)
                  } else this.dataList[0].content += t;
                  this.dataList[0].content1 += t, this.index++, this.addNextCharacter()
                } else clearTimeout(this.character), this.character = null, this.stratSet || (this.typeVideo = 4, this.clearStarts())
              },
              stopSpeak: function() {
                this.clearAllTimers(), this.dataList[0].content = this.dataList[0].content.replaceAll('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', ""), this.task && (this.task.abort(), this.dataList[0].content || (this.dataList[0].content = "回答终止，请重新提问。"), this.pushingProgress = !0, this.dataList[0].end = !0, this.task = null, this.pushingProgressShow = !0, this.typeVideo = 4, this.clearStarts())
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
.page-box{background-color:#fff;height:100vh;width:100%}.page-box .isHide{display:none}.page-box .menuBox{padding:30rpx}.page-box .menuBox .line1{background-color:initial;border-radius:0;margin-bottom:16rpx;overflow:visible;position:relative;width:684rpx}.page-box .menuBox .line1 .btnBox{bottom:0;left:0;padding:40rpx;position:absolute;width:100%;z-index:999}.page-box .menuBox .line1 .btnBox .welcome{color:#383b46;font-size:44rpx;font-weight:700;line-height:70rpx}.page-box .menuBox .line1 .btnBox .welcomeText{color:#5d4a76;font-size:32rpx;line-height:48rpx;margin-top:20rpx;max-width:364rpx}.page-box .menuBox .line1 .btnBox .btn{align-items:center;background:linear-gradient(90deg,#8666fd,#bc41f5);border-radius:64rpx 64rpx 64rpx 64rpx;color:#fff;display:-webkit-flex;display:flex;font-size:26rpx;height:68rpx;justify-content:center;line-height:68rpx;margin-top:20rpx;width:254rpx}.page-box .menuBox .line1 .btnBox .btn image{height:20rpx;margin-left:8rpx;width:20rpx}.page-box .menuBox .line1 image{height:432rpx;width:684rpx}.page-box .menuBox .line1 .video_box{background-color:initial;border:none;display:block;height:432rpx;object-fit:cover;outline:none;width:684rpx}.page-box .menuBox .line1 .bottomMask{background-color:#fff;bottom:0;height:1rpx;left:0;position:absolute;width:100%;z-index:11}.page-box .menuBox .line1.topCard .head{color:rgba(0,0,0,.85);font-size:32rpx;font-weight:700;justify-content:space-between;line-height:48rpx;margin-bottom:16rpx;width:100%}.page-box .menuBox .line1.topCard .head .btn-box,.page-box .menuBox .line1.topCard .head{align-items:center;display:-webkit-flex;display:flex}.page-box .menuBox .line1.topCard .head .btn-box .btn{margin-left:16rpx}.page-box .menuBox .line1.topCard .btn{background:hsla(0,0%,100%,.2);border:2rpx solid #8666fd;border-radius:64rpx 64rpx 64rpx 64rpx;color:#8666fd;font-size:24rpx;font-weight:500;height:48rpx;line-height:48rpx;text-align:center;width:136rpx}.page-box .menuBox .line1.topCard .content{align-items:center;background:#f2efff;border-radius:20rpx 20rpx 20rpx 20rpx;box-sizing:border-box;display:-webkit-flex;display:flex;height:278rpx;justify-content:space-between;padding:20rpx;width:690rpx}.page-box .menuBox .line1.topCard .content .content-left .title{color:#383b46;font-size:36rpx;font-weight:700;line-height:52rpx;margin-bottom:12rpx}.page-box .menuBox .line1.topCard .content .content-left .member{align-items:center;color:#5d4a76;display:-webkit-flex;display:flex;font-size:28rpx;line-height:48rpx;margin-bottom:12rpx}.page-box .menuBox .line1.topCard .content .content-left .member .avatar-group{display:-webkit-flex;display:flex;margin-left:20rpx}.page-box .menuBox .line1.topCard .content .content-left .member .avatar-group .avatar-img{border-radius:50%;height:40rpx;margin-left:-15rpx;position:relative;width:40rpx}.page-box .menuBox .line1.topCard .content .content-left .member .avatar-group .avatar-img:first-child{margin-left:0}.page-box .menuBox .line1.topCard .content .content-left .clock{align-items:center;display:-webkit-flex;display:flex;margin-bottom:12rpx}.page-box .menuBox .line1.topCard .content .content-left .clock image{height:30rpx;width:30rpx}.page-box .menuBox .line1.topCard .content .content-left .clock text{color:#5d4a76;font-size:28rpx;line-height:52rpx;margin-left:10rpx}.page-box .menuBox .line1.topCard .content .content-left .goBtn{align-items:center;background:linear-gradient(90deg,#ad97ff,#d988ff);border-radius:64rpx 64rpx 64rpx 64rpx;display:-webkit-flex;display:flex;height:50rpx;justify-content:center;width:80rpx}.page-box .menuBox .line1.topCard .content .content-left .goBtn image{height:30rpx;width:30rpx}.page-box .menuBox .line1.topCard .content .content-right{border-radius:10rpx 32rpx 32rpx 32rpx;height:238rpx;width:238rpx}.page-box .menuBox .line2{display:-webkit-flex;display:flex;gap:20rpx;height:auto}.page-box .menuBox .line2 .box{box-sizing:border-box;height:220rpx;padding:74rpx 26rpx 16rpx 24rpx;position:relative;width:calc(33.33% - 10rpx);z-index:999}.page-box .menuBox .line2 .box .title{color:rgba(0,0,0,.85);font-size:36rpx;font-weight:700;line-height:48rpx}.page-box .menuBox .line2 .box .content{color:rgba(0,0,0,.65);font-size:24rpx;margin-top:16rpx;text-align:left}.page-box .menuBox .line2 .box .btn{align-items:center;background:#000;border-radius:60rpx 60rpx 60rpx 60rpx;bottom:16rpx;box-shadow:0rpx 8rpx 8rpx 0rpx rgba(128,86,255,.3);display:-webkit-flex;display:flex;height:40rpx;justify-content:center;position:absolute;right:32rpx;width:56rpx}.page-box .menuBox .line2 .box .btn image{height:18rpx;width:20rpx}.page-box .menuBox .line2 .testBox{background:url('https://eshopfile.zhiyousx.com/176950730286756045.png')no-repeat;background-size:100% 100%}.page-box .menuBox .line2 .travelBox{background:url('https://eshopfile.zhiyousx.com/176950737161140746.png')no-repeat;background-size:100% 100%}.page-box .menuBox .line2 .dailyBox{background:url('https://eshopfile.zhiyousx.com/176950738342592288.png')no-repeat;background-size:100% 100%}.page-box .menuBox .line3{background:linear-gradient(90deg,rgba(124,46,234,.03),rgba(141,103,255,.03));border-radius:32rpx 32rpx 32rpx 32rpx;height:274rpx;margin-top:36rpx;overflow:hidden;padding:32rpx;width:686rpx}.page-box .menuBox .line3 .title{color:#383b46;font-size:36rpx;font-weight:700;margin-bottom:20rpx}.page-box .menuBox .line3 .tab{width:100%}.page-box .menuBox .line3 .tag-scroll{align-items:center;display:-webkit-flex;display:flex}.page-box .menuBox .line3 .tag-scroll .tag-item{min-width:23%;text-align:center;width:23%;z-index:9999}.page-box .menuBox .line3 .tag-scroll .tag-item .tag-item-icon{height:96rpx;margin-bottom:8rpx;width:96rpx}.page-box .menuBox .line3 .tag-scroll .tag-item .tag-item-text{color:rgba(0,0,0,.65);font-size:26rpx;line-height:36rpx;text-align:center}.page-box .menuBox .line4{align-items:center;background:linear-gradient(90deg,rgba(124,46,234,.03),rgba(141,103,255,.03));border-radius:32rpx 32rpx 32rpx 32rpx;display:-webkit-flex;display:flex;height:156rpx;justify-content:space-between;margin-top:16rpx;padding:0 32rpx;width:686rpx}.page-box .menuBox .line4 .l-left .title{color:rgba(0,0,0,.85);font-size:32rpx;font-weight:700;line-height:44rpx}.page-box .menuBox .line4 .l-left .content{color:rgba(0,0,0,.65);font-size:24rpx;line-height:32rpx;margin-top:8rpx}.page-box .menuBox .line4 .l-left .content .discount{color:#d14c0b;font-size:24rpx}.page-box .menuBox .line4 .l-right{height:100rpx;width:120rpx}.page-box .drawer-content{background:#fff;border-radius:24rpx 24rpx 0 0;min-height:200rpx;padding:48rpx 32rpx;position:relative;text-align:center}.page-box .drawer-content .thanks{align-items:center;font-weight:700;height:412rpx;justify-content:center;line-height:412rpx;width:100%}.page-box .drawer-title{color:rgba(0,0,0,.85);font-size:32rpx;font-weight:700;line-height:46rpx;margin-bottom:32rpx;text-align:left}.page-box .drawer-btns{display:-webkit-flex;display:flex;flex-wrap:wrap;justify-content:center}.page-box .drawer-btns .drawer-btn{background:rgba(0,0,0,.04);border-radius:64rpx 64rpx 64rpx 64rpx;color:rgba(0,0,0,.65);font-size:26rpx;height:80rpx;line-height:80rpx;margin-bottom:32rpx;width:327rpx}.page-box .drawer-btns .mr32{margin-right:32rpx}.page-box .drawer-btns .selected{background:linear-gradient(90deg,rgba(128,107,255,.2),rgba(188,65,245,.2));color:rgba(0,0,0,.85);font-size:26rpx}.page-box .drawer-input{background:#f9f9f9;border:1px solid #eee;border-radius:10rpx;box-sizing:border-box;color:#333;font-size:28rpx;height:400rpx;margin:24rpx 0 0;padding:20rpx;text-align:left;width:686rpx}.page-box .submitBtn{background:linear-gradient(90deg,rgba(128,107,255,.7),rgba(188,65,245,.7));border-radius:64rpx 64rpx 64rpx 64rpx;color:#fff;font-size:28rpx;height:80rpx;line-height:80rpx;margin-top:32rpx;text-align:center;width:686rpx}.page-box .star-row{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin:30rpx 0 40rpx}.page-box .star-row text{font-size:50rpx}.page-box .star-row .starName{color:#000;font-weight:700}.page-box .drawer-btn.icon-btn{align-items:center;background:transparent;border:none;box-shadow:none;display:-webkit-flex;display:flex;height:60rpx;justify-content:center;padding:0;position:absolute;right:32rpx;top:32rpx;width:60rpx}.page-box .drawer-btn.icon-btn .icon{height:48rpx;width:48rpx}.page-box .fontNum{bottom:10rpx;color:#999;font-size:30rpx;position:absolute;right:20rpx}.page-box .video-popup-container{background-color:#000;border-radius:20rpx;display:-webkit-flex;display:flex;flex-direction:column;height:100vh;position:relative;width:100vw}.page-box .video-popup-header{align-items:center;background-color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;left:0;padding:100rpx 30rpx 20rpx;position:absolute;top:0;width:100%;z-index:10}.page-box .video-popup-title{color:#fff;font-size:32rpx;font-weight:700}.page-box .video-popup-close{align-items:center;background-color:hsla(0,0%,100%,.2);border-radius:50%;cursor:pointer;display:-webkit-flex;display:flex;height:60rpx;justify-content:center;width:60rpx}.page-box .close-icon{color:#fff;font-size:40rpx;font-weight:700}.page-box .video-popup-content{align-items:center;background-color:#000;display:-webkit-flex;display:flex;height:100%;justify-content:center;padding-top:80rpx;width:100%}.page-box .video-player{background-color:initial;border:none;height:100%;object-fit:contain;outline:none;width:100%}.page-box .video-loading{background-color:rgba(0,0,0,.7);border-radius:10rpx;left:50%;padding:20rpx 40rpx;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:5}.page-box .loading-text{color:#fff;font-size:28rpx}.page-box .topLoading{align-items:flex-end;background-color:#fff;display:-webkit-flex;display:flex;height:10vh;justify-content:center;padding-bottom:20rpx;transition:.5s;width:100%}.page-box .topLoading .loading{align-items:center;display:-webkit-flex;display:flex;justify-content:space-around;margin-left:10rpx;width:80rpx}.page-box .topLoading .pot{animation-delay:0s;animation-duration:1.2s;animation-iteration-count:infinite;animation-name:loading-beat-data-v-12dbe1b7;border-radius:50%;display:inline-block;height:8rpx;margin-right:5rpx;width:8rpx}.page-box .topLoading .pot:nth-child(1){background:#8666fd}.page-box .topLoading .pot:nth-child(2){animation-delay:.2s;background:#8666fd}.page-box .topLoading .pot:nth-child(3){animation-delay:.4s;background:#8666fd}@-webkit-keyframes loading-beat-data-v-12dbe1b7{0%{transform:scale(1)}50%{transform:scale(1.8)}100%{transform:scale(1)}}@keyframes loading-beat-data-v-12dbe1b7{0%{transform:scale(1)}50%{transform:scale(1.8)}100%{transform:scale(1)}}.page-box .history-box{padding:10rpx 30rpx;position:relative}.page-box .history-line{color:#bdbdbd;font-size:21rpx;line-height:28rpx;overflow:hidden;position:relative;text-align:center;width:100%}.page-box .history-line::after,.page-box .history-line::before{background:#bdbdbd;content:"";display:inline-block;height:1rpx;position:absolute;top:50%;width:100%}.page-box .history-line::before{margin-left:-20rpx;transform:translateX(-100%)}.page-box .history-line::after{margin-left:20rpx}
</style>
