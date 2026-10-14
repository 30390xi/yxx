<template>
<view :class="['page-box','',showHide?'page-box-image1':'page-box-image2']">
    <view class="" style="position:fixed;height:140rpx;width:100%;z-index:111;" v-if="!showHide" @click="showFun($event)"></view>
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <image class="video_box1" :hidden="!showHide" mode="aspectFill" src="https://eshopfile.zhiyousx.com/176049930295641964.png"></image>
    <image class="video_box1" :hidden="!!showHide" mode="aspectFill" src="https://eshopfile.zhiyousx.com/176049935099597141.png"></image>
    <z-paging :bottomBgColor="resres>0?'#FFFFFF':'transparent'" class=" vue-ref" ref="paging" :safeAreaInsetBottom="isIos" style="position:fixed;z-index:11;" :toBottomLoadingMoreEnabled="true" :useChatRecordMode="true" :value="dataList" :vueSlots="['default','top','bottom']" @hidedKeyboard="hidedKeyboard()" @keyboardHeightChange="keyboardHeightChange()" @input="dataList = $event">
        <view slot="top">
            <view class="" style="height:300rpx;width:100%;" v-if="!showHide" @click="showFun($event)"></view>
            <view class="content-box" v-if="showHide">
                <view class="greet-box">
                    <image class="" src="https://eshopfile.zhiyousx.com/176050088167418353.png"></image>
                    <text class="">心有千惑，此有一应</text>
                    <image class="" src="https://eshopfile.zhiyousx.com/176050089724368608.png"></image>
                </view>
                <view class="default-box" :style="'height:'+(smallScreen?'400rpx':'')+';'+'overflow:'+(smallScreen?'auto':'')+';'">
                    <view class="default-l" :style="'min-height:'+(smallScreen?'500rpx':'')+';'" :key="id" v-for="(m, __i0__) in tripList">
                        <view class="default-h">
                            <text class="default-text" :style="'color:'+m.titleColor+';'">{{m.title}}</text>
                        </view>
                        <view class="default-item" :style="'background-color:'+el.bgColor+';'" :key="id" v-for="(el, i) in m.contentList">{{ el.content }}</view>
                    </view>
                    <view class="default-r">
                        <view class="default-t" :key="id" v-for="(m, __i1__) in scenicSpotList">
                            <view class="default-h">
                                <text class="default-text" :style="'color:'+m.titleColor+';'">{{m.title}}</text>
                            </view>
                            <view class="default-item" :style="'background-color:'+el.bgColor+';'" :key="id" v-for="(el, i) in m.contentList">{{ el.content }}</view>
                        </view>
                        <view class="default-b" :key="id" v-for="(m, __i2__) in deliciousFoodList">
                            <view class="default-h">
                                <text class="default-text" :style="'color:'+m.titleColor+';'">{{m.title}}</text>
                            </view>
                            <view class="default-item" :style="'background-color:'+el.bgColor+';'" :key="id" v-for="(el, i) in m.contentList">{{ el.content }}</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <chat-input-bar :bg="true" class=" vue-ref" ref="inputBar" :delayBtn="delayBtn" :isIos="isIos" :pushingProgress="pushingProgress" :pushingProgressShow="pushingProgressShow" :showHide="showHide" slot="bottom" @stopSpeak="stopSpeak()" @setShowHide="setShowHide()" @clearData="clearData()" @clearDataStop="clearDataStop()" @send="doSend()"></chat-input-bar>
        <view class="" style="width:100%;height:60rpx;" v-if="!showHide"></view>
        <view class="" style="position:relative;" v-if="!showHide" :key="index" v-for="(item, index) in dataList">
            <view class="" style="transform:scaleY(-1);">
                <chat-item class="" :dataList="dataList" :item="item" :newVal="newVal" :pushingProgress="pushingProgress" @askAgain="askAgain()" @exclusive="exclusive()" @explain="openAudio()" @stopSpeak="stopSpeak()"></chat-item>
            </view>
        </view>
    </z-paging>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              zPaging: function() {
                Promise.all([a.e("common/vendor"), a.e("union/common/vendor"), a.e("union/components1/z-paging/z-paging")]).then(function() {
                  return resolve(a("a7ee"))
                }.bind(null, a)).catch(a.oe)
              },
              chatInputBar: function() {
                a.e("union/components1/chat-input-bar/chat-input-bar-temple").then(function() {
                  return resolve(a("98b33"))
                }.bind(null, a)).catch(a.oe)
              },
              chatItem: function() {
                a.e("union/components1/chat-item/chat-item-temple").then(function() {
                  return resolve(a("163c"))
                }.bind(null, a)).catch(a.oe)
              }
            },
            data: function() {
              return this.hoveImgList = [], this.hoveImg = !1, this.hoveImgListUrl = [], this.newVal = "", {
                dataList: [],
                currentContent: "",
                pushingProgress: !0,
                task: null,
                showHide: !0,
                tripList: [],
                scenicSpotList: [],
                deliciousFoodList: [],
                pushingProgressShow: !0,
                isSpeaking: !1,
                audioPlayer: null,
                flowId: "",
                page: 1,
                loadMore: "loading",
                character: null,
                index: 0,
                stratSet: !1,
                dataInfosList: [],
                isIos: !1,
                timeNetwork: null,
                resres: "",
                delayBtn: !1,
                smallScreen: !1
              }
            },
            onPageScroll: function(t) {},
            onLoad: function(e) {
              this.audioPlayer = t.createInnerAudioContext(), this.getRecommendList();
              var a = uni.getSystemInfoSync();
              "android" === a.platform ? this.isIos = !1 : "ios" === a.platform ? this.isIos = !0 : this.isIos = !1
            },
            onShow: function() {
              var t = uni.getSystemInfoSync().screenHeight;
              console.log(t, "屏幕高度小于1500"), 2 * t < 1500 ? (console.log("屏幕高度小于1500"), this.smallScreen = !0) : (console.log("屏幕高度大于等于1500"), this.smallScreen = !1), console.log(this.$refs.paging), this.$refs.paging.setInit()
            },
            onHide: function() {
              this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), n.onKeyboardHeightChange()
            },
            onUnload: function() {
              this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), uni.removeStorageSync("askQuestion"), uni.removeStorageSync("HISTORY_ID"), this.loadMore = "loadmore", this.dataList = [], this.$refs.paging.clear(), this.$refs.paging.complete([]), this.$refs.paging.complete(!1), this.clearStarts()
            },
            methods: {
              showFun: function() {
                this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), this.showHide || (this.showHide = !0, this.delayBtn = !1, this.task && this.task.abort(), this.pushingProgressShow = !0, uni.setStorageSync("askQuestion", 1), uni.removeStorageSync("HISTORY_ID"), this.dataList = [], this.$forceUpdate(), this.clearStarts())
              },
              greetings: function() {
                var t = (new Date).getHours();
                return t >= 5 && t < 10 ? "早上好" : t >= 10 && t < 12 ? "上午好" : t >= 12 && t < 14 ? "中午好" : t >= 14 && t < 19 ? "下午好" : "晚上好"
              },
              createData: function(t) {
                var e = this;
                this.$uniApi.dataRequestNoLoading("post", "ai/app/ai/common/creatConversation", {
                  bussType: 1,
                  openId: uni.getStorageSync("wxopenid"),
                  title: t
                }).then((function(a) {
                  1 === a.code && (e.flowId = a.data, uni.setStorageSync("askQuestion", 2), e.doSend(t))
                }))
              },
              openAudio: function() {
                this.isSpeaking ? (this.isSpeaking = !1, this.audioPlayer.pause()) : (this.isSpeaking = !0, this.audioPlayer.play())
              },
              getRecommendList: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("post", "ai/aiRecommend/recommendList", [13, 14, 15]).then((function(e) {
                  1 === e.code && e.data && (t.tripList = e.data[13] || [], t.scenicSpotList = e.data[14] || [], t.deliciousFoodList = e.data[15] || [])
                }))
              },
              askAgain: function(t) {
                this.showHide = !1, uni.setStorageSync("askQuestion", 2), this.doSend(t)
              },
              exclusive: function(t) {
                this.showHide = !1, uni.setStorageSync("askQuestion", 2), this.doSend("专属攻略", t)
              },
              clearDataStop: function() {
                this.task && this.task.abort(), this.pushingProgress = !0, this.pushingProgressShow = !0
              },
              clearData: function() {
                var t = this;
                setTimeout((function() {
                  t.timeNetwork && (clearInterval(t.timeNetwork), t.timeNetwork = null), t.task && t.task.abort(), t.showHide = !0, t.delayBtn = !1, uni.setStorageSync("askQuestion", 1), uni.removeStorageSync("HISTORY_ID"), t.dataList = [], t.$forceUpdate(), t.clearStarts()
                }), 300)
              },
              setShowHide: function(t) {
                this.showHide = !1, this.createData(t)
              },
              goQuestion: function(t, e) {
                this.$eventAnalyse.analyse({
                  eventTag: "wall_" + ["guide", "scenicSpots", "cuisine"][e - 1] + "_click",
                  eventName: ["城墙客服行程攻略推荐", "城墙客服问景点", "城墙客服问美食"][e - 1],
                  eventParams: {
                    language: 0,
                    question: t,
                    userId: "ojWxP5WEclcm0Ebaj3h-ZNstnt0A",
                    sessionId: "1881193790388047873",
                    bussType: 1
                  }
                }), this.showHide = !1, this.createData(t)
              },
              keyboardHeightChange: function(t) {
                this.resres = t.height, this.$refs.inputBar.updateKeyboardHeightChange(t)
              },
              hidedKeyboard: function() {
                this.$refs.inputBar.hidedKeyboard()
              },
              stopSpeak: function() {
                this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), this.dataList[0].content = this.dataList[0].content.replaceAll('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', ""), this.task && (this.task.abort(), this.dataList[0].content || (this.dataList[0].content = "回答终止，请重新提问。"), this.pushingProgress = !0, this.dataList[0].end = !0, this.task = null, this.pushingProgressShow = !0, this.clearStarts())
              },
              findPreviousObjectById: function(t) {
                var e = this.dataList.findIndex((function(e) {
                  return e.id === t
                }));
                return e > 0 ? this.dataList[e + 1].content : null
              },
              doSend: function(t, e) {
                var a = this;
                this.pushingProgress = !1, this.stratSet = !0, this.$refs.paging.scrollToBottom(), setTimeout((function() {
                  e || a.dataList.unshift({
                    content: t,
                    type: 1,
                    state: 1,
                    end: !0,
                    name: "ai",
                    list: [],
                    id: (new Date).getTime()
                  }), a.dataList.unshift({
                    content: "",
                    content1: "",
                    type: 0,
                    state: 0,
                    end: !1,
                    name: "ai",
                    isMe: !1,
                    list: [],
                    imageCard: [],
                    id: (new Date).getTime()
                  }), a.toSend(t), a.$refs.paging.scrollToBottom()
                }), 300)
              },
              toSend: function(t) {
                var e = this,
                  a = this;
                this.dataInfosList = [], this.pushingProgressShow = !1, setTimeout((function() {
                  e.$refs.paging.scrollToBottom()
                }), 100), this.task = n.request({
                  url: "".concat(getApp().globalData.requestUrl, "ai/app/wall/customer/chat"),
                  enableChunked: !0,
                  method: "POST",
                  timeout: 9e5,
                  data: {
                    language: 1,
                    question: t,
                    userId: uni.getStorageSync("wxopenid"),
                    sessionId: this.flowId,
                    mode: 0,
                    bussType: 2
                  },
                  success: function(t) {
                    console.log(t), 200 == t.statusCode && (e.stratSet = !1, e.addNextCharacter()), 400 == t.statusCode && (e.clearStarts(), e.dataList[0].content = "网络走丢了，请稍后重试!", e.task && e.task.abort()), a.dataList[0].end = !0, a.$data.currentContent = "", a.$data.sendState = !1, a.delayBtn = !0, clearInterval(a.timeNetwork), a.timeNetwork = null
                  },
                  fail: function(t) {
                    console.log(t, "ssssssssssss"), e.stratSet = !1, e.delayBtn = !0, "request:fail " == t.errMsg && (e.clearStarts(), e.dataList[0].content = "网络走丢了，请稍后重试!", e.task && e.task.abort())
                  }
                }), this.task.onChunkReceived((function(t) {
                  a.delayBtn = !0, a.timeNetwork && (clearInterval(a.timeNetwork), a.timeNetwork = null), a.timeNetwork = setTimeout((function() {
                    clearInterval(a.timeNetwork), e.clearStarts(), e.$uni.showToast("网络异常，请重试！"), e.task && e.task.abort()
                  }), 3e4);
                  var n, i = new Uint8Array(t.data);
                  if ("[object Uint8Array]" === Object.prototype.toString.call(i)) n = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, s.default)(i))));
                  else if (i instanceof ArrayBuffer) {
                    var o = new Uint8Array(i);
                    n = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, s.default)(o))))
                  }
                  console.log(n), n.split("^").forEach((function(t) {
                    if (t) {
                      var n = JSON.parse(t);
                      console.log(n), 0 == n.extend.type && "c001" == n.extend.code && (a.dataList[0].state = 1, a.newVal += n.data ? n.data : "体验用户过多，请稍后重试。", a.character || a.addNextCharacter()), 0 == n.extend.type && "W002" == n.extend.code && (a.dataList[0].state = 1, a.newVal += n.data ? n.data : "体验用户过多，请稍后重试。", a.character || a.addNextCharacter()), 0 == n.extend.type && "W001" == n.extend.code && (a.dataList[0].state = 1, a.newVal += n.data ? n.data : "体验用户过多，请稍后重试。", a.character || a.addNextCharacter()), "w001" == n.extend.code && 0 == n.extend.type && (a.dataList[0].state = 1, a.newVal += n.data ? n.data : "体验用户过多，请稍后重试。", a.character || a.addNextCharacter()), e.dataInfosList.push(n)
                    }
                  }))
                }))
              },
              setCardInfo: function(t) {
                t && ("w001" == t.extend.code && 1 == t.extend.type && (this.dataList[0].list = t.data || []), (1 == t.extend.type && "W002" == t.extend.code || "W001" == t.extend.code && 1 == t.extend.type) && t.data && (this.dataList[0].showBtn = !0, this.dataList[0].btnUrl = t.data), 0 == t.extend.type && "q001" == t.extend.code && (this.dataList[0].divergenceProblem = t.data || []), this.$forceUpdate())
              },
              clearStarts: function() {
                var t = this;
                this.hoveImg = !1, this.hoveImgList = [], this.hoveImgListUrl = [], JSON.parse(JSON.stringify(this.dataInfosList)).forEach((function(e) {
                  t.setCardInfo(e)
                })), this.dataInfosList = [], this.newVal = "", this.index = 0, this.stratSet = !1, this.pushingProgress = !0, this.pushingProgressShow = !0, this.character && (clearTimeout(this.character), this.character = null)
              },
              addNextCharacter: function() {
                var t = this;
                if (this.index < this.newVal.length) {
                  var e = this.newVal[this.index];
                  this.dataList[0].content += e, this.dataList[0].content1 += e, this.index++, this.character = setTimeout((function() {
                    t.addNextCharacter()
                  }), 50)
                } else clearTimeout(this.character), this.character = null, this.stratSet || this.showHide || this.clearStarts()
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.video_box1{height:1712rpx;left:0;position:fixed;top:0;width:100%;z-index:10}.active{opacity:1}.page-box-image1 .zp-scroll-view-container{opacity:0;top:100%;transition:opacity 1s}.page-box-image1 .zp-page-bottom-container{position:relative;z-index:10}.h100{height:100%}.page-box-image2 .zp-scroll-view-container{background:linear-gradient(180deg,hsla(0,0%,100%,.2),hsla(0,0%,100%,.5) 50%,hsla(0,0%,100%,0));border-radius:50rpx 50rpx 0rpx 0rpx;box-shadow:0rpx -20rpx 20rpx 0rpx rgba(154,34,6,.2);margin-top:36rpx;top:0;transition:top .6s}.page-box-image2 .zp-scroll-view-absolute{padding-bottom:20rpx}.page-box{height:100vh;width:100%}.page-box .content-box .greet-box{align-items:center;color:rgba(30,27,25,.8);display:-webkit-flex;display:flex;justify-content:center;left:0rpx;position:absolute;top:400rpx;width:750rpx}.page-box .content-box .greet-box text{font-size:40rpx;font-weight:700;line-height:44rpx;margin:0 20rpx}.page-box .content-box .greet-box image{height:44rpx;width:40rpx}.page-box .default-box{box-sizing:border-box;display:-webkit-flex;display:flex;justify-content:space-between;padding:40rpx;position:absolute;top:480rpx;width:100%;z-index:1}.page-box .default-box .default-t{margin-bottom:20rpx}.page-box .default-box .default-b,.page-box .default-box .default-l,.page-box .default-box .default-t{background:linear-gradient(180deg,hsla(0,0%,100%,.5) 22%,#fff);border:2rpx solid #fff;border-radius:40rpx 40rpx 40rpx 40rpx;box-sizing:border-box;padding:28rpx 20rpx}.page-box .default-box .default-l,.page-box .default-box .default-r{width:calc(50% - 10rpx)}.page-box .default-box .default-l .default-h,.page-box .default-box .default-r .default-h{align-items:center;display:-webkit-flex;display:flex}.page-box .default-box .default-l .default-h .default-image,.page-box .default-box .default-r .default-h .default-image{height:44rpx;margin-left:10rpx;width:44rpx}.page-box .default-box .default-l .default-h .default-text,.page-box .default-box .default-r .default-h .default-text{color:#c160b0;font-family:Alibaba PuHuiTi;font-size:32rpx;font-style:normal;font-weight:700;line-height:38rpx;margin-left:10rpx;text-align:left;text-transform:none}.page-box .default-box .default-l .default-item,.page-box .default-box .default-r .default-item{background:rgba(161,113,17,.2);border-radius:60rpx 60rpx 60rpx 60rpx;color:#1c1c1c;font-family:Source Han Sans SC;font-size:24rpx;font-style:normal;font-weight:400;line-height:28rpx;margin-top:20rpx;padding:16rpx 20rpx;text-align:left;text-transform:none}.page-box .count-desc-box{background:linear-gradient(180deg,hsla(0,0%,100%,.5),#fff 50%);border:2rpx solid #fff;border-radius:50rpx 50rpx 0rpx 0rpx;box-shadow:0rpx -20rpx 20rpx 0rpx rgba(154,34,6,.2);height:64vh;overflow:hidden;position:absolute;top:0;transform:scaleY(-1);width:100%}.page-box .count-desc-box .count-desc{height:100%;max-height:100%;transform:scaleY(-1)}.fireworks1{animation:scaleFade-data-v-7fc23477 3s ease-in-out .5s infinite;height:346rpx;right:46rpx;top:50px;width:52px;width:344rpx}.fireworks1,.fireworks2{opacity:0;position:absolute;transform:scale(.1);transform-origin:center center;z-index:10}.fireworks2{animation:scaleFade1-data-v-7fc23477 3s ease-in-out 1s infinite;height:280rpx;left:-30rpx;right:250rpx;top:-80rpx;width:242rpx}.fireworks3{animation:scaleFade1-data-v-7fc23477 3s ease-in-out 1.5s infinite;height:302rpx;opacity:0;position:absolute;right:76rpx;top:500rpx;transform:scale(.1);transform-origin:center center;width:274rpx;z-index:10}@-webkit-keyframes scaleFade-data-v-7fc23477{0%{opacity:1;transform:scale(0)}60%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1)}}@keyframes scaleFade-data-v-7fc23477{0%{opacity:1;transform:scale(0)}60%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1)}}@-webkit-keyframes scaleFade1-data-v-7fc23477{0%{opacity:1;transform:scale(0)}60%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1)}}@keyframes scaleFade1-data-v-7fc23477{0%{opacity:1;transform:scale(0)}60%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1)}}
</style>
