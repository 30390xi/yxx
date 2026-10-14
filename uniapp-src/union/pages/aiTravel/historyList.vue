<template>
<view class="page-box page-box-image2">
    <view class="loading-mask" v-if="loading||!flowId">
        <view class="loading-spinner"></view>
        <view class="loading-text">加载中...</view>
    </view>
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <image mode class="video_box1" src="https://eshopfile.zhiyousx.com/175021251389353595.jpg" v-if="showImage"></image>
    <video class="video_box video_box4" :controls="false" id="myVideo3" :loop="true" :muted="true" src="https://eshopfile.zhiyousx.com/2024121814473092347.mp4" :style="'opacity:'+opacity+';'+'z-index:'+(typeVideo==3?'10':'1')+';'"></video>
    <video :autoplay="true" class="video_box video_box5" :controls="false" id="myVideo4" :loop="true" :muted="true" src="https://eshopfile.zhiyousx.com/2024122710555208245.mp4" :style="'opacity:'+opacity+';'+'z-index:'+(typeVideo==4?'10':'1')+';'" @loadedmetadata="loadedmetadata($event)"></video>
    <z-paging bottomBgColor="#ffffff" class="page-box-image22 vue-ref" ref="paging" :safeAreaInsetBottom="isIos" style="position:fixed;z-index:11;" :toBottomLoadingMoreEnabled="true" :useChatRecordMode="true" :value="dataList" :vueSlots="['default','top','bottom']" @input="dataList = $event">
        <view class="" slot="top" style="height:300rpx;width:100%;"></view>
        <chat-input-bar :bg="true" class=" vue-ref" ref="inputBar" :delayBtn="delayBtn" :detail="spotDetail" :isHistory="isHistory" :isIos="isIos" :isStrategy="isStrategy" :pushingProgress="pushingProgress" :pushingProgressShow="pushingProgressShow" :showHide="showHide" slot="bottom" v-if="!isHistory" @stopSpeak="stopSpeak()" @resetTravel="resetTravel()" @setShowHide="setShowHide()" @clearData="clearData()" @clearDataStop="clearDataStop()" @setcolse="setcolse()" @send="doSend()"></chat-input-bar>
        <view class="" style="width:100%;height:60rpx;"></view>
        <view class="" style="position:relative;" :key="index" v-for="(item, index) in dataList">
            <view class="" style="transform:scaleY(-1);">
                <chat-item class="" :dataList="dataList" :item="item" :newVal="newVal" :pushingProgress="pushingProgress" :sessionId="flowId" @resetTravel="resetTravel()" @exclusive="exclusive()" @stopSpeak="stopSpeak()" @clickShare="clickShare()"></chat-item>
            </view>
        </view>
        <view class="" style="position:relative;" :key="index" v-for="(item, index) in historyList">
            <view class="" style="transform:scaleY(-1);">
                <chat-item-card class="" :isHistory="isHistory" :item="item" :newVal="newVal" :pushingProgress="pushingProgress" @exclusive="exclusive()" @deleteCard="deleteCard()" @stopSpeak="stopSpeak()" @clickShare="clickShare()"></chat-item-card>
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
              Promise.all([i.e("common/vendor"), i.e("union/common/vendor"), i.e("union/components1/z-paging/z-paging")]).then(function() {
                return resolve(i("a7ee"))
              }.bind(null, i)).catch(i.oe)
            },
            chatInputBar: function() {
              i.e("union/components1/chat-input-bar/chat-input-bar-travel").then(function() {
                return resolve(i("0e34"))
              }.bind(null, i)).catch(i.oe)
            },
            chatItem: function() {
              i.e("union/components1/chat-item/chat-item-travel").then(function() {
                return resolve(i("048d"))
              }.bind(null, i)).catch(i.oe)
            },
            chatItemCard: function() {
              Promise.all([i.e("common/vendor"), i.e("union/components1/chat-item/chat-item-card")]).then(function() {
                return resolve(i("a7a9"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          data: function() {
            return this.hoveImgList = [], this.hoveImg = !1, this.hoveImgListUrl = [], this.newVal = "", {
              dataList: [],
              isTyping: !1,
              currentMassage: {},
              currentIndex: 0,
              currentContent: "",
              isHistory: !0,
              pushingProgress: !0,
              task: null,
              scrollTop: 0,
              showHide: !1,
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
              typeVideo: 4,
              showImage: !0,
              opacity: 0,
              character: null,
              index: 0,
              stratSet: !1,
              dataInfosList: [],
              WshowHide: !1,
              newValCopy: "",
              playIndex: 0,
              arrResult: [],
              isIos: !1,
              isNetworkAnomaly: !1,
              timeNetwork: null,
              maskShow: !0,
              delayBtn: !1,
              cityColumns: [
                ["西安市"]
              ],
              showDateRangePicker: !1,
              form: {
                sessionId: "",
                price: ""
              },
              cityIndex: 0,
              showWantDo: !1,
              wantDoOptions: ["美食", "文化", "自然风光", "历史古迹", "购物", "娱乐", "摄影", "民俗体验"],
              strategyContent: "",
              shareObj: {},
              tempInterestPoint: null,
              loading: !0,
              isShare: !1,
              isHide: !1
            }
          },
          filters: {},
          watch: {
            typeVideo: {
              handler: function(e) {
                var i = Number(e),
                  s = t.createVideoContext("myVideo3", this),
                  n = t.createVideoContext("myVideo4", this);
                switch (n.seek(0), s.pause(), i) {
                  case 3:
                    s.play();
                    break;
                  case 4:
                    n.play()
                }
              },
              deep: !0,
              immediate: !0
            }
          },
          computed: {
            isStrategy: function() {
              return this.dataList && 1 === this.dataList.length
            }
          },
          onPageScroll: function(t) {},
          onLoad: function(t) {
            var e = this;
            this.loading = !0, t.sessionId && (this.form.sessionId = t.sessionId), t.source && (this.isHistory = !1, "share" == t.source && (this.isShare = !0)), this.audioPlayer = s.createInnerAudioContext(), this.createData(), setTimeout((function() {
              e.maskShow = !1
            }), 1e3)
          },
          onShow: function() {
            this.isHistory || this.isShare ? this.isHide || (this.loading = !0, this.getHistory()) : (this.loading = !0, this.dataList = [], this.historyList = [], this.getRecentCard()), this.$refs.paging.setInit()
          },
          onHide: function() {
            this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), this.isHide = !0, t.onKeyboardHeightChange()
          },
          onUnload: function() {
            this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), t.createVideoContext("myVideo3", this).seek(0), this.loadMore = "loadmore", this.dataList = [], this.$refs.paging.clear(), this.$refs.paging.complete([]), this.$refs.paging.complete(!1), this.clearStarts()
          },
          onShareAppMessage: function() {
            return console.log(this.shareObj.path), {
              title: this.shareObj.title,
              imageUrl: "https://eshopfile.zhiyousx.com/175214881804186478.png",
              path: this.shareObj.path
            }
          },
          methods: {
            getRecentCard: function() {
              var e = this;
              this.loading = !0, this.$uniApi.getRequestNoLoading("GET", "ai/planCard/queryRecent?openId=".concat(uni.getStorageSync("wxopenid"))).then((function(t) {
                e.loading = !1, 1 === t.code && t.data ? (e.form.sessionId = t.data.sessionId, e.getHistory()) : e.historyList.unshift({
                  content: "您没有未出行的行程？点击 [AI旅游规划] 创建新行程吧！",
                  redirectContent: {},
                  state: 0,
                  end: !0,
                  isMe: !1,
                  type: 0,
                  id: (new Date).getTime()
                })
              })).catch((function() {
                e.loading = !1
              }))
            },
            getHistory: function() {
              var e = this;
              this.loading = !0;
              var i;
              i = this.form.sessionId ? {
                sessionId: this.form.sessionId,
                bussType: 2
              } : {
                userId: uni.getStorageSync("wxopenid"),
                bussType: 2
              }, this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/historyList", i).then((function(t) {
                if (e.loading = !1, 1 === t.code) {
                  var i = t.data;
                  i.forEach((function(t) {
                    e.historyList.unshift(h(h({}, t), {}, {
                      state: 0,
                      end: !0,
                      isMe: !1,
                      type: 0,
                      id: t.sessionId
                    }))
                  })), i.length > 0 || e.historyList.unshift({
                    content: e.isHistory ? "您还未规划行程，请前往旅行搭子开始规划吧！" : "您还未规划行程，请点击下方AI旅游规划开始规划吧！",
                    redirectContent: {},
                    state: 0,
                    end: !0,
                    isMe: !1,
                    type: 0,
                    id: (new Date).getTime()
                  }), console.log(e.historyList)
                }
              })).catch((function() {
                e.loading = !1
              }))
            },
            deleteCard: function(t) {
              this.historyList = this.historyList.filter((function(e) {
                return e.id !== t
              })), 0 == this.historyList.length && this.isHistory && this.historyList.unshift({
                content: "您还未规划行程，请前往旅行搭子开始规划吧！",
                redirectContent: {},
                state: 0,
                end: !0,
                isMe: !1,
                type: 0,
                id: (new Date).getTime()
              })
            },
            loadedmetadata: function() {
              var e = t.createVideoContext("myVideo4", this),
                i = this;
              4 == this.typeVideo && (e.play(), setTimeout((function() {
                i.showImage = !1, i.opacity = 1
              }), 500))
            },
            setcolse: function() {
              this.dataList = [], this.delayBtn = !1
            },
            clickShare: function(t) {
              this.shareObj = t
            },
            createData: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("post", "ai/aiEscort/session/create", {
                bussType: 3,
                openId: uni.getStorageSync("wxopenid"),
                title: "历史记录"
              }).then((function(t) {
                1 === t.code && (e.flowId = t.data)
              }))
            },
            exclusive: function(t) {
              this.typeVideo = 4, this.showHide = !1, this.doSend("专属攻略", t)
            },
            clearDataStop: function() {
              this.task && this.task.abort(), this.pushingProgress = !0, this.pushingProgressShow = !0
            },
            clearData: function() {
              this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), this.delayBtn = !1, this.task && this.task.abort(), this.form = {
                city: "",
                price: "",
                wantDO: [],
                beginTime: "",
                endTime: "",
                beginPeriod: "",
                endPeriod: ""
              }, this.typeVideo = 4, this.showHide = !0, uni.removeStorageSync("HISTORY_ID"), this.dataList = [], this.$forceUpdate(), this.clearStarts()
            },
            startChat: function() {
              this.form.city ? this.form.beginTime && this.form.endTime ? this.form.price ? (this.typeVideo = 4, this.showHide = !1, this.createData()) : uni.showToast({
                title: "请输入预算金额",
                icon: "none"
              }) : uni.showToast({
                title: "请选择旅行时间",
                icon: "none"
              }) : uni.showToast({
                title: "请选择目的地",
                icon: "none"
              })
            },
            setShowHide: function(t) {
              this.typeVideo = 4, this.showHide = !1, this.createData()
            },
            keyboardHeightChange: function(t) {
              this.$refs.inputBar.updateKeyboardHeightChange(t)
            },
            hidedKeyboard: function() {
              this.$refs.inputBar.hidedKeyboard()
            },
            stopSpeak: function() {
              this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), this.dataList[0].content = this.dataList[0].content.replaceAll('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', ""), this.task && (this.task.abort(), this.dataList[0].content || (this.dataList[0].content = "回答终止，请重新提问。"), this.pushingProgress = !0, this.dataList[0].end = !0, this.task = null, this.pushingProgressShow = !0, this.typeVideo = 4, this.clearStarts())
            },
            findPreviousObjectById: function(t) {
              var e = this.dataList.findIndex((function(e) {
                return e.id === t
              }));
              return e > 0 ? this.dataList[e + 1].content : null
            },
            resetTravel: function(e) {
              if (console.log("resetTravel", e), this.pushingProgressShow) {
                this.pushingProgress = !0, this.pushingProgressShow = !0;
                var i = "/union/pages/aiTravel/index",
                  s = [];
                e && ["departureTime", "destination", "budget", "interestPoint", "returnTime", "adult", "children", "older"].forEach((function(t) {
                  e[t] && s.push("".concat(t, "=").concat(encodeURIComponent(e[t])))
                })), s.length > 0 && (i += "?" + s.join("&")), uni.redirectTo({
                  url: i
                })
              } else this.$uni.showToast("正在回答，请稍候")
            },
            doSend: function(t, e) {
              var i = this;
              this.pushingProgress = !1, this.stratSet = !0, this.$refs.paging.scrollToBottom(), setTimeout((function() {
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
                    id: (new Date).getTime()
                  }), e && e.id) {
                  var s = e.exclusive;
                  i.toSend(s)
                } else i.toSend(t);
                i.$refs.paging.scrollToBottom()
              }), 300)
            },
            toSend: function(e) {
              var i = this,
                s = this;
              this.dataInfosList = [], this.pushingProgressShow = !1, this.dataList.length > 1 && (this.delayBtn = !0), setTimeout((function() {
                i.$refs.paging.scrollToBottom()
              }), 100), this.task = t.request({
                url: "".concat(getApp().globalData.requestUrl, "ai/app/escort/ai/chat"),
                enableChunked: !0,
                method: "POST",
                timeout: 9e5,
                data: {
                  language: 0,
                  question: e,
                  userId: uni.getStorageSync("wxopenid"),
                  sessionId: this.flowId,
                  bussType: 3
                },
                success: function(t) {
                  console.log(t), 200 == t.statusCode && (i.stratSet = !1, i.WshowHide = !1, i.newValCopy = "", i.addNextCharacter()), 400 == t.statusCode && (i.clearStarts(), i.dataList[0].content = "网络走丢了，请稍后重试!", i.task && i.task.abort()), s.dataList[0].end = !0, s.$data.currentIndex = 0, s.$data.currentContent = "", s.$data.sendState = !1, s.isNetworkAnomaly = !1, s.delayBtn = !0, clearInterval(s.timeNetwork), s.timeNetwork = null
                },
                fail: function(t) {
                  console.log(t, "ssssssssssss"), i.stratSet = !1, i.delayBtn = !0, "request:fail " == t.errMsg && (i.clearStarts(), i.dataList[0].content = "网络走丢了，请稍后重试!", i.task && i.task.abort()), "request:fail abort" == t.errMsg && i.dataList[0].content && i.dataList[0].content.endsWith('<img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>') && (i.dataList[0].content = i.dataList[0].content.slice(0, i.dataList[0].content.length - 97))
                }
              }), this.task.onChunkReceived((function(t) {
                s.timeNetwork && (clearInterval(s.timeNetwork), s.timeNetwork = null), s.delayBtn = !0, s.isNetworkAnomaly = !0, s.timeNetwork = setTimeout((function() {
                  clearInterval(s.timeNetwork), i.clearStarts(), i.$uni.showToast("网络异常，请重试！"), i.task && i.task.abort()
                }), 3e4);
                var e, n = new Uint8Array(t.data);
                if ("[object Uint8Array]" === Object.prototype.toString.call(n)) e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, a.default)(n))));
                else if (n instanceof ArrayBuffer) {
                  var o = new Uint8Array(n);
                  e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, a.default)(o))))
                }
                3 == s.typeVideo || i.showHide || (s.typeVideo = 3), e.split("^").forEach((function(t) {
                  if (t) {
                    var e = JSON.parse(t);
                    console.log(e), 0 == e.extend.type && "c001" == e.extend.code && (s.dataList[0].state = 1, s.newVal += e.data, s.character || s.addNextCharacter()), 0 == e.extend.type && "e001" == e.extend.code && (s.newVal += e.data, s.character || s.addNextCharacter()), "s001" == e.extend.code && 0 == e.extend.type && (s.dataList[0].state = 1, s.newVal += e.data, s.character || s.addNextCharacter()), "p001" == e.extend.code && (s.dataList[0].state = 1, s.dataList[0].strategy = 1, s.dataList[0].strategyContent = e.data), "p002" == e.extend.code && (s.dataList[0].state = 1, s.dataList[0].redirectContent = JSON.parse(e.data), s.newVal += "检测到您需要攻略或规划？  \n👉 点击下方 「AI旅行搭子」，一键生成专属方案！  \n（不满意？可随时重新生成哦~）", s.character || s.addNextCharacter()), i.dataInfosList.push(e)
                  }
                }))
              }))
            },
            groupElements: function(t) {
              if (this.arrResult.length > 0) {
                var e = this.arrResult[this.arrResult.length - 1],
                  i = 15 - e.length;
                if (i > 0) {
                  e += i > t.length ? t : t.slice(0, i)
                }
                15 === e.length && (this.arrResult[this.arrResult.length - 1] = e)
              }
              for (var s = "", n = 0; n < t.length; n++) 15 === (s += t[n]).length && (this.arrResult.push(s), s = "");
              s.length > 0 && this.arrResult.push(s)
            },
            setCardInfo: function(t) {
              t && (1 == t.extend.type && "e001" == t.extend.code && (this.dataList[0].exclusiveRoute = t.data || {}), 0 == t.extend.type && "eq001" == t.extend.code && (this.dataList[0].exclusive = t.data || {}), "s001" == t.extend.code && 1 == t.extend.type && (this.dataList[0].list = t.data || []), "o001" == t.extend.code && 1 == t.extend.type && (this.dataList[0].officialGuide = t.data || [], this.dataList[0].officialGuideType = 2), 0 == t.extend.type && "q001" == t.extend.code && (this.dataList[0].divergenceProblem = t.data || []), this.$forceUpdate())
            },
            clearStarts: function() {
              var t = this;
              this.hoveImg = !1, this.hoveImgList = [], this.hoveImgListUrl = [], JSON.parse(JSON.stringify(this.dataInfosList)).forEach((function(e) {
                t.setCardInfo(e)
              })), this.dataInfosList = [], this.newVal = "", this.index = 0, this.stratSet = !1, this.pushingProgress = !0, this.pushingProgressShow = !0, this.character && (clearTimeout(this.character), this.character = null)
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
                    i = this.dataList[0].content1.lastIndexOf("景点图片：<"),
                    s = this.dataList[0].content1.lastIndexOf("</video>"),
                    n = this.dataList[0].content1.lastIndexOf("景点视频：<");
                  this.dataList[0].content && i > -1 && -1 == this.hoveImgList.indexOf(i) && (-1 == e || -1 == this.hoveImgList.indexOf(e) || e < i) && !this.hoveImg ? (this.dataList[0].content += 'img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(i)) : e > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(e) ? (this.hoveImgList.push(e), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<i"), this.dataList[0].content1.lastIndexOf('">') + 2).replace(/ - /g, "-")), this.dataList[0].content = this.dataList[0].content.replace('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImgListUrl[this.hoveImgListUrl.length - 1]), this.$forceUpdate()) : this.dataList[0].content && n > -1 && -1 == this.hoveImgList.indexOf(n) && (-1 == s || -1 == this.hoveImgList.indexOf(s) || s < n) && !this.hoveImg ? (this.dataList[0].content += 'img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(n)) : s > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(s) ? (this.hoveImgList.push(s), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<v"), this.dataList[0].content1.lastIndexOf("</video>") + 8).replace(/ - /g, "-")), this.dataList[0].content += this.hoveImgListUrl[this.hoveImgListUrl.length - 1], this.$forceUpdate()) : this.hoveImg || (this.dataList[0].content += t)
                } else this.dataList[0].content += t;
                this.dataList[0].content1 += t, this.index++, this.addNextCharacter()
              } else clearTimeout(this.character), this.character = null, this.stratSet || this.showHide || (this.typeVideo = 4, this.clearStarts())
            },
            handlePriceInput: function(t) {
              var e = this,
                i = /[^\d]/g;
              this.$nextTick((function() {
                e.form.price = t.replace(i, "")
              }))
            },
            showWantDoPopup: function() {
              console.log("showWantDoPopup clicked"), this.$refs.wantDoPopup.open()
            },
            popupChange: function(t) {
              console.log("popup change:", t)
            },
            toggleWantDo: function(t) {
              var e = this.form.wantDO.indexOf(t);
              e > -1 ? this.form.wantDO.splice(e, 1) : this.form.wantDO.push(t)
            },
            confirmWantDo: function() {
              this.$refs.wantDoPopup.close()
            },
            openDatePicker: function() {
              console.log("openDatePicker"), this.showDateRangePicker = !0
            },
            handleDateChange: function(t) {
              this.form.beginTime = t.startDate, this.form.endTime = t.endDate, this.form.beginPeriod = t.startPeriod, this.form.endPeriod = t.endPeriod
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.video_box{height:1712rpx;left:0;position:fixed;top:0;width:100%;z-index:9}.video_box1{height:1712rpx;left:0;position:fixed;top:0;width:100%;z-index:10}.active{opacity:1}.page-box-image1 .zp-scroll-view-container{opacity:0;top:100%;transition:opacity 1s}.page-box-image1 .zp-page-bottom-container{position:relative;z-index:10}.h100{height:100%}.page-box-image2 .zp-scroll-view-container{background:linear-gradient(180deg,hsla(0,0%,100%,.5),#fff 50%);border:2rpx solid #fff;border-radius:50rpx 50rpx 0rpx 0rpx;box-shadow:0rpx -20rpx 20rpx 0rpx rgba(154,34,6,.2);margin-top:36rpx;top:0}.page-box-image2 .zp-scroll-view-absolute{padding-bottom:20rpx}.page-box-image22 .plan-content{margin-left:60rpx;padding-top:20rpx;width:630rpx}.page-box-image22 .plan-content .welcom-l1{color:#383b46;font-size:36rpx;font-weight:700;line-height:58rpx}.page-box-image22 .plan-content .welcom-l2{color:#4e514f;font-size:28rpx;line-height:42rpx;margin-top:20rpx;text-indent:2em}.page-box-image22 .plan-content .plan-card{background:linear-gradient(180deg,rgba(255,200,152,.5) 22%,rgba(255,200,152,.15));border-radius:40rpx;margin-top:20rpx;padding:28rpx 40rpx;position:relative;width:630rpx}.page-box-image22 .plan-content .plan-card::before{background:linear-gradient(180deg,#fff,hsla(0,0%,100%,.2)) border-box;border:2rpx solid transparent;border-radius:40rpx;bottom:0;content:"";left:0;-webkit-mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);mask-composite:exclude;pointer-events:none;position:absolute;right:0;top:0}.page-box-image22 .plan-content .plan-card .form-title{color:#1c1c1c;font-size:26rpx;font-weight:700;line-height:40rpx;margin-bottom:12rpx}.page-box-image22 .plan-content .plan-card .form-item{margin-bottom:20rpx}.page-box-image22 .plan-content .plan-card .form-item .price-unit{color:#000;font-size:28rpx;margin-right:10rpx}.page-box-image22 .plan-content .plan-card .form-select{align-items:center;background:hsla(0,0%,100%,.7);border-radius:60rpx;display:-webkit-flex;display:flex;justify-content:space-between;min-height:72rpx;padding:0 20rpx}.page-box-image22 .plan-content .plan-card .form-select .select-text{color:#1c1c1c;font-size:28rpx}.page-box-image22 .plan-content .plan-card .form-select .select-icon{height:32rpx;width:32rpx}.page-box-image22 .plan-content .plan-card .form-select2{background:hsla(0,0%,100%,.7);border-radius:60rpx;flex-wrap:wrap;min-height:72rpx;padding:10rpx 20rpx 0;position:relative}.page-box-image22 .plan-content .plan-card .form-select2 .select-item{background:#f5dccb;border-radius:40rpx;color:#1c1c1c;display:inline-block;font-size:24rpx;height:50rpx;line-height:50rpx;margin:0 10rpx 10rpx 0;padding:0 12rpx}.page-box-image22 .plan-content .plan-card .form-select2 .select-text{color:#1c1c1c;font-size:28rpx;line-height:72rpx}.page-box-image22 .plan-content .plan-card .form-select2 .select-icon{height:32rpx;position:absolute;right:20rpx;top:calc(50% - 16rpx);width:32rpx}.page-box-image22 .plan-content .plan-card .form-select-data{height:96rpx;justify-content:flex-start;position:relative}.page-box-image22 .plan-content .plan-card .form-select-data .select-icon{height:36rpx;position:absolute;right:20rpx;top:calc(50% - 18rpx);width:36rpx}.page-box-image22 .plan-content .confirmBtn{background:rgba(177,99,10,.6);border-radius:60rpx 60rpx 60rpx 60rpx;color:#fff;font-size:32rpx;height:72rpx;line-height:72rpx;margin-top:50rpx;text-align:center;width:630rpx}.page-box{height:100vh;width:100%}.page-box .content-box .greet-box{left:calc(100% - 455rpx);position:absolute;top:244rpx;width:435rpx}.page-box .content-box .greet-box .greet-box-t{color:#1e1b19;font-family:Alibaba PuHuiTi;font-size:60rpx;font-style:normal;font-weight:700;line-height:96rpx;margin-bottom:20rpx;text-align:left;text-transform:none}.page-box .content-box .greet-box .greet-box-b .greet-box-l{color:#1e1b19;font-family:Alibaba PuHuiTi;font-size:36rpx;font-style:normal;font-weight:400;line-height:44rpx;text-align:left;text-transform:none}.page-box .default-box{box-sizing:border-box;display:-webkit-flex;display:flex;justify-content:space-between;padding:40rpx;position:absolute;top:473rpx;width:100%;z-index:1}.page-box .default-box .default-box-copy{height:100%;position:absolute;width:100%;z-index:100}.page-box .default-box .default-t{margin-bottom:20rpx}.page-box .default-box .default-b,.page-box .default-box .default-l,.page-box .default-box .default-t{background:linear-gradient(180deg,hsla(0,0%,100%,.5) 22%,#fff);border:2rpx solid #fff;border-radius:40rpx 40rpx 40rpx 40rpx;box-sizing:border-box;padding:28rpx 20rpx}.page-box .default-box .default-l,.page-box .default-box .default-r{width:calc(50% - 10rpx)}.page-box .default-box .default-l .default-h,.page-box .default-box .default-r .default-h{align-items:center;display:-webkit-flex;display:flex}.page-box .default-box .default-l .default-h .default-image,.page-box .default-box .default-r .default-h .default-image{height:44rpx;margin-left:10rpx;width:44rpx}.page-box .default-box .default-l .default-h .default-text,.page-box .default-box .default-r .default-h .default-text{color:#c160b0;font-family:Alibaba PuHuiTi;font-size:32rpx;font-style:normal;font-weight:700;line-height:38rpx;margin-left:10rpx;text-align:left;text-transform:none}.page-box .default-box .default-l .default-item,.page-box .default-box .default-r .default-item{background:rgba(195,237,194,.5);border-radius:60rpx 60rpx 60rpx 60rpx;color:#1c1c1c;font-family:Source Han Sans SC;font-size:24rpx;font-style:normal;font-weight:400;line-height:28rpx;margin-top:20rpx;padding:16rpx 20rpx;text-align:left;text-transform:none}.page-box .count-desc-box{background:linear-gradient(180deg,hsla(0,0%,100%,.5),#fff 50%);border:2rpx solid #fff;border-radius:50rpx 50rpx 0rpx 0rpx;box-shadow:0rpx -20rpx 20rpx 0rpx rgba(154,34,6,.2);height:64vh;overflow:hidden;position:absolute;top:0;transform:scaleY(-1);width:100%}.page-box .count-desc-box .count-desc{height:100%;max-height:100%;transform:scaleY(-1)}.wantdo-popup{background:#fff;border-radius:24rpx 24rpx 0 0;padding:30rpx}.wantdo-popup .popup-header{align-items:center;border-bottom:1rpx solid #eee;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:30rpx;padding-bottom:20rpx}.wantdo-popup .popup-header .popup-title{color:#1c1c1c;font-size:32rpx;font-weight:700}.wantdo-popup .popup-header .popup-confirm{color:#ff6b00;font-size:28rpx}.wantdo-popup .popup-content{height:600rpx}.wantdo-popup .popup-content .tag-container{display:-webkit-flex;display:flex;flex-wrap:wrap;gap:20rpx;padding:20rpx 0}.wantdo-popup .popup-content .wantdo-tag{background:#f5f5f5;border-radius:40rpx;color:#1c1c1c;font-size:28rpx;padding:16rpx 30rpx}.wantdo-popup .popup-content .wantdo-tag-active{background:#ffe4d0;color:#ff6b00}.calendar-popup{background:#fff;border-radius:24rpx 24rpx 0 0;height:700rpx;min-height:700rpx;padding:30rpx}.calendar-popup .calendar-actions{align-items:center;border-top:1rpx solid #eee;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:20rpx;padding-top:20rpx}.calendar-popup .calendar-actions .action-item{align-items:flex-start;color:#1c1c1c;display:-webkit-flex;display:flex;flex-direction:column;font-size:28rpx;width:calc(50% - 10rpx)}.calendar-popup .calendar-actions .action-item .period-select{align-items:center;background:#f5f5f5;border-radius:40rpx;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:10rpx;padding:10rpx 20rpx}.calendar-popup .calendar-actions .action-item .period-select .select-icon{height:24rpx;margin-left:10rpx;width:24rpx}.calendar-popup .calendar-actions .confirm-btn{background:#ff6b00;border-radius:40rpx;color:#fff;font-size:32rpx;padding:20rpx 40rpx}.loading-mask{align-items:center;background:hsla(0,0%,100%,.85);display:-webkit-flex;display:flex;flex-direction:column;height:100vh;justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:9999}.loading-spinner{animation:spin-data-v-10bfc8f3 1s linear infinite;border:6rpx solid #f3f3f3;border-radius:50%;border-top-color:#f90;height:60rpx;margin-bottom:20rpx;width:60rpx}@-webkit-keyframes spin-data-v-10bfc8f3{0%{transform:rotate(0deg)}100%{transform:rotate(1turn)}}@keyframes spin-data-v-10bfc8f3{0%{transform:rotate(0deg)}100%{transform:rotate(1turn)}}.loading-text{color:#f90;font-size:30rpx}
</style>
