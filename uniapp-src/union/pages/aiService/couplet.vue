<template>
<view class="page-box page-box-image2">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <image class="video_box1" mode="aspectFill" src="https://eshopfile.zhiyousx.com/173647694935403302.png"></image>
    <image mode class="fireworks1" src="https://eshopfile.zhiyousx.com/173650265898469613.png"></image>
    <image mode class="fireworks2" src="https://eshopfile.zhiyousx.com/173650482751437807.png"></image>
    <image mode class="fireworks3" src="https://eshopfile.zhiyousx.com/173650483980311452.png"></image>
    <z-paging bottomBgColor="linear-gradient( 180deg, rgba(255,255,255,0) 0%, #FFD899 100%)" class=" vue-ref" ref="paging" :safeAreaInsetBottom="isIos" style="position:fixed;z-index:11;" :toBottomLoadingMoreEnabled="true" :useChatRecordMode="true" :value="dataList" :vueSlots="['default','top','bottom']" @keyboardHeightChange="keyboardHeightChange()" @input="dataList = $event">
        <view class="" slot="top" style="height:300rpx;width:100%;"></view>
        <chat-input-bar :bg="true" class=" vue-ref" ref="inputBar" :detail="spotDetail" :isIos="isIos" :pushingProgress="pushingProgress" :pushingProgressShow="pushingProgressShow" :showHide="showHide" slot="bottom" @stopSpeak="stopSpeak()" @clearData="clearData()" @clearDataStop="clearDataStop()" @send="doSend()"></chat-input-bar>
        <view class="" style="width:100%;height:60rpx;"></view>
        <view class="" style="position:relative;" :key="index" v-for="(item, index) in dataList">
            <view class="" style="transform:scaleY(-1);">
                <chat-item class="" :dataList="dataList" :item="item" :newVal="newVal" :pushingProgress="pushingProgress" @exclusive="exclusive()" @explain="openAudio()" @stopSpeak="stopSpeak()"></chat-item>
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
                a.e("union/components1/chat-input-bar/chat-input-bar-couplet").then(function() {
                  return resolve(a("3b95"))
                }.bind(null, a)).catch(a.oe)
              },
              chatItem: function() {
                a.e("union/components1/chat-item/chat-item-couplet").then(function() {
                  return resolve(a("cc23"))
                }.bind(null, a)).catch(a.oe)
              }
            },
            data: function() {
              return this.coupletImg = "", this.newVal = "", this.score = 0, this.character = null, {
                dataList: [],
                isTyping: !1,
                currentMassage: {},
                currentIndex: 0,
                currentContent: "",
                pushingProgress: !0,
                task: null,
                scrollTop: 0,
                showHide: !1,
                tripList: [],
                scenicSpotList: [],
                deliciousFoodList: [],
                pushingProgressShow: !0,
                isSpeaking: !1,
                audioPlayer: null,
                flowId: "",
                page: 1,
                loadMore: "loading",
                index: 0,
                stratSet: !1,
                isIos: !1,
                timeNetwork: null,
                status: 0
              }
            },
            onPageScroll: function(t) {},
            onLoad: function(e) {
              this.status = e.status || 0, this.audioPlayer = t.createInnerAudioContext();
              var a = uni.getSystemInfoSync();
              "android" === a.platform ? this.isIos = !1 : "ios" === a.platform ? this.isIos = !0 : this.isIos = !1
            },
            onShow: function() {
              var t = uni.getStorageSync("token");
              1 != this.status || t ? this.flowId || this.createData() : this.$util.isLogin()
            },
            onHide: function() {
              this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), this.$refs.inputBar.updateKeyboardHeightChange(0)
            },
            onUnload: function() {
              this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), this.task && this.task.abort(), uni.removeStorageSync("askQuestion"), uni.removeStorageSync("HISTORY_ID"), this.loadMore = "loadmore", this.dataList = [], this.$refs.paging.clear(), this.$refs.paging.complete([]), this.$refs.paging.complete(!1), this.clearStarts()
            },
            methods: {
              greetings: function() {
                var t = (new Date).getHours();
                return t >= 5 && t < 10 ? "早上好" : t >= 10 && t < 12 ? "上午好" : t >= 12 && t < 14 ? "中午好" : t >= 14 && t < 19 ? "下午好" : "晚上好"
              },
              createData: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("post", "ai/app/ai/common/creatConversation").then((function(e) {
                  1 === e.code && (t.flowId = e.data, t.$nextTick((function() {
                    t.doSend("开始对春联", "create")
                  })))
                }))
              },
              openAudio: function() {
                this.isSpeaking ? (this.isSpeaking = !1, this.audioPlayer.pause()) : (this.isSpeaking = !0, this.audioPlayer.play())
              },
              clearDataStop: function() {
                this.task && this.task.abort(), this.pushingProgress = !0, this.pushingProgressShow = !0
              },
              clearData: function() {
                this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), this.task && this.task.abort(), uni.setStorageSync("askQuestion", 1), uni.removeStorageSync("HISTORY_ID"), this.dataList = [], this.$forceUpdate(), this.clearStarts()
              },
              keyboardHeightChange: function(t) {
                console.log(t), this.$refs.inputBar.updateKeyboardHeightChange(t)
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
              doSend: function(t) {
                var e = this,
                  a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                this.pushingProgress = !1, this.stratSet = !0, this.$refs.paging.scrollToBottom(), setTimeout((function() {
                  a || e.dataList.unshift({
                    content: t,
                    type: 1,
                    state: 1,
                    end: !0,
                    classType: "num",
                    name: "ai",
                    imgUrl: "",
                    id: (new Date).getTime()
                  }), e.dataList.unshift({
                    content: "",
                    type: 0,
                    state: 0,
                    end: !1,
                    name: "ai",
                    classType: a,
                    isMe: !1,
                    imgUrl: "",
                    id: (new Date).getTime()
                  }), e.toSend(t), e.$refs.paging.scrollToBottom()
                }), 300)
              },
              toSend: function(t) {
                var e = this,
                  a = this;
                this.pushingProgressShow = !1, setTimeout((function() {
                  e.$refs.paging.scrollToBottom()
                }), 100), this.task = n.request({
                  url: "".concat(getApp().globalData.requestUrl, "ai/app/couplet/chat"),
                  enableChunked: !0,
                  method: "POST",
                  timeout: 9e5,
                  data: {
                    language: 1,
                    question: t,
                    userId: uni.getStorageSync("wxopenid"),
                    sessionId: this.flowId,
                    bussType: 3
                  },
                  success: function(t) {
                    200 == t.statusCode && (e.stratSet = !1, e.addNextCharacter()), 400 == t.statusCode && (e.clearStarts(), e.dataList[0].content = "网络走丢了，请稍后重试!", e.task && e.task.abort()), a.dataList[0].end = !0, a.$data.currentIndex = 0, a.$data.currentContent = "", a.$data.sendState = !1, clearInterval(a.timeNetwork), a.timeNetwork = null
                  },
                  fail: function(t) {
                    e.stratSet = !1, "request:fail " == t.errMsg && (e.clearStarts(), e.dataList[0].content = "网络走丢了，请稍后重试!", e.task && e.task.abort())
                  }
                }), this.task.onChunkReceived((function(t) {
                  a.timeNetwork && (clearInterval(a.timeNetwork), a.timeNetwork = null), a.timeNetwork = setTimeout((function() {
                    clearInterval(a.timeNetwork), e.clearStarts(), e.$uni.showToast("网络异常，请重试！"), e.task && e.task.abort()
                  }), 3e4);
                  var n, i = new Uint8Array(t.data);
                  if ("[object Uint8Array]" === Object.prototype.toString.call(i)) n = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, s.default)(i))));
                  else if (i instanceof ArrayBuffer) {
                    var o = new Uint8Array(i);
                    n = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, s.default)(o))))
                  }
                  n.split("^").forEach((function(t) {
                    if (t) {
                      var n = JSON.parse(t);
                      if (0 === n.code) return e.dataList[0].content = n.msg, void(e.dataList[0].state = 1);
                      0 == n.extend.type && "c001" == n.extend.code && (a.dataList[0].state = 1, a.newVal += n.data, a.character || a.addNextCharacter()), "couplet" == n.extend.code && (a.dataList[0].state = 1, n.data && n.data.score > 0 && a.addDraws(), n.data && n.data.score >= 8 && n.data.file && (a.coupletImg = n.data.file, a.score = n.data.score, a.character || a.addNextCharacter()))
                    }
                  }))
                }))
              },
              clearStarts: function() {
                this.coupletImg && this.dataList.unshift({
                  content: "太棒了，我们做出了完美的对联，你解锁了隐藏的海报",
                  type: 0,
                  state: 1,
                  end: !0,
                  name: "ai",
                  classType: "",
                  isMe: !1,
                  imgUrl: this.coupletImg,
                  id: (new Date).getTime()
                }), this.newVal = "", this.index = 0, this.coupletImg = "", this.stratSet = !1, this.pushingProgress = !0, this.pushingProgressShow = !0, this.character && (clearTimeout(this.character), this.character = null)
              },
              addNextCharacter: function() {
                var t = this;
                if (this.character && (clearTimeout(this.character), this.character = null), this.index < this.newVal.length) {
                  var e = this.newVal[this.index];
                  this.dataList[0].content += e, this.index++, this.character = setTimeout((function() {
                    t.addNextCharacter()
                  }), 50)
                } else clearTimeout(this.character), this.character = null, this.stratSet || this.clearStarts()
              },
              addDraws: function() {
                1 == this.status && this.$uniApi.dataRequestYesLoading("GET", "manager/app/v1/arborDayLottery/completeTask?lotteryType=7&taskId=002").then((function(t) {
                  t.code
                }))
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.video_box1{height:1712rpx;left:0;position:fixed;top:0;width:100%;z-index:10}.active{opacity:1}.page-box-image1 .zp-scroll-view-container{opacity:0;top:100%;transition:opacity 1s}.page-box-image1 .zp-page-bottom-container{position:relative;z-index:10}.h100{height:100%}.page-box-image2 .zp-scroll-view-container{background:linear-gradient(180deg,hsla(0,0%,100%,.2),hsla(0,0%,100%,.5) 50%,hsla(0,0%,100%,0));border-radius:50rpx 50rpx 0rpx 0rpx;box-shadow:0rpx -20rpx 20rpx 0rpx rgba(154,34,6,.2);margin-top:36rpx;top:0;transition:top .6s}.page-box-image2 .zp-scroll-view-absolute{padding-bottom:20rpx}.page-box{height:100vh;width:100%}.page-box .content-box .greet-box{left:calc(100% - 390rpx);position:absolute;top:300rpx;width:376rpx}.page-box .content-box .greet-box .greet-box-t{color:#fff;font-family:Alibaba PuHuiTi;font-size:60rpx;font-style:normal;font-weight:700;line-height:96rpx;text-align:left;text-transform:none}.page-box .content-box .greet-box .greet-box-b .greet-box-l{color:#fff;font-family:Alibaba PuHuiTi;font-size:36rpx;font-style:normal;font-weight:400;line-height:42rpx;margin-top:20rpx;text-align:left;text-transform:none}.page-box .default-box{box-sizing:border-box;display:-webkit-flex;display:flex;justify-content:space-between;padding:40rpx;position:absolute;top:640rpx;width:100%;z-index:1}.page-box .default-box .default-t{margin-bottom:20rpx}.page-box .default-box .default-b,.page-box .default-box .default-l,.page-box .default-box .default-t{background:linear-gradient(180deg,hsla(0,0%,100%,.5) 22%,#fff);border:2rpx solid #fff;border-radius:40rpx 40rpx 40rpx 40rpx;box-sizing:border-box;padding:28rpx 20rpx}.page-box .default-box .default-l,.page-box .default-box .default-r{width:calc(50% - 10rpx)}.page-box .default-box .default-l .default-h,.page-box .default-box .default-r .default-h{align-items:center;display:-webkit-flex;display:flex}.page-box .default-box .default-l .default-h .default-image,.page-box .default-box .default-r .default-h .default-image{height:44rpx;margin-left:10rpx;width:44rpx}.page-box .default-box .default-l .default-h .default-text,.page-box .default-box .default-r .default-h .default-text{color:#c160b0;font-family:Alibaba PuHuiTi;font-size:32rpx;font-style:normal;font-weight:700;line-height:38rpx;margin-left:10rpx;text-align:left;text-transform:none}.page-box .default-box .default-l .default-item,.page-box .default-box .default-r .default-item{background:rgba(195,237,194,.5);border-radius:60rpx 60rpx 60rpx 60rpx;color:#1c1c1c;font-family:Source Han Sans SC;font-size:24rpx;font-style:normal;font-weight:400;line-height:28rpx;margin-top:20rpx;padding:16rpx 20rpx;text-align:left;text-transform:none}.page-box .count-desc-box{background:linear-gradient(180deg,hsla(0,0%,100%,.5),#fff 50%);border:2rpx solid #fff;border-radius:50rpx 50rpx 0rpx 0rpx;box-shadow:0rpx -20rpx 20rpx 0rpx rgba(154,34,6,.2);height:64vh;overflow:hidden;position:absolute;top:0;transform:scaleY(-1);width:100%}.page-box .count-desc-box .count-desc{height:100%;max-height:100%;transform:scaleY(-1)}.fireworks1{animation:scaleFade-data-v-1bd2ee50 3s ease-in-out .5s infinite;top:127px;width:52px}.fireworks1,.fireworks2{height:30rpx;position:absolute;right:250rpx;transform-origin:center center;width:30rpx;z-index:10}.fireworks2{animation:scaleFade1-data-v-1bd2ee50 3s ease-in-out 1s infinite;left:100rpx;top:30px}.fireworks3{animation:scaleFade1-data-v-1bd2ee50 3s ease-in-out 1.5s infinite;height:30rpx;position:absolute;right:150rpx;top:500rpx;transform-origin:center center;width:30rpx;z-index:10}@-webkit-keyframes scaleFade-data-v-1bd2ee50{0%{opacity:0;transform:scale(.1)}5%{opacity:1;transform:scale(1)}40%{opacity:1;transform:scale(10)}50%{opacity:.6;transform:scale(10)}55%{opacity:0;transform:scale(10)}100%{opacity:0;transform:scale(10)}}@keyframes scaleFade-data-v-1bd2ee50{0%{opacity:0;transform:scale(.1)}5%{opacity:1;transform:scale(1)}40%{opacity:1;transform:scale(10)}50%{opacity:.6;transform:scale(10)}55%{opacity:0;transform:scale(10)}100%{opacity:0;transform:scale(10)}}@-webkit-keyframes scaleFade1-data-v-1bd2ee50{0%{opacity:0;transform:scale(.1)}5%{opacity:1;transform:scale(1)}40%{opacity:1;transform:scale(8)}50%{opacity:.6;transform:scale(8)}60%{opacity:0;transform:scale(8)}100%{opacity:0;transform:scale(8)}}@keyframes scaleFade1-data-v-1bd2ee50{0%{opacity:0;transform:scale(.1)}5%{opacity:1;transform:scale(1)}40%{opacity:1;transform:scale(8)}50%{opacity:.6;transform:scale(8)}60%{opacity:0;transform:scale(8)}100%{opacity:0;transform:scale(8)}}
</style>
