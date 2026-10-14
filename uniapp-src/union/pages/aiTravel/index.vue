<template>
<view class="page-box page-box-image2">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <image mode class="video_box1" src="https://eshopfile.zhiyousx.com/175021251389353595.jpg" v-if="showImage"></image>
    <video class="video_box video_box4" :controls="false" id="myVideo3" :loop="true" :muted="true" src="https://eshopfile.zhiyousx.com/2024121814473092347.mp4" :style="'opacity:'+opacity+';'+'z-index:'+(typeVideo==3?'10':'1')+';'"></video>
    <video :autoplay="true" class="video_box video_box5" :controls="false" id="myVideo4" :loop="true" :muted="true" src="https://eshopfile.zhiyousx.com/2024122710555208245.mp4" :style="'opacity:'+opacity+';'+'z-index:'+(typeVideo==4?'10':'1')+';'" @loadedmetadata="loadedmetadata($event)"></video>
    <z-paging bottomBgColor="#ffffff" class="page-box-image22 vue-ref" ref="paging" :safeAreaInsetBottom="isIos" style="position:fixed;z-index:11;" :toBottomLoadingMoreEnabled="true" :useChatRecordMode="true" :value="dataList" :vueSlots="['default','top','bottom']" @input="dataList = $event">
        <view class="" slot="top" style="height:300rpx;width:100%;"></view>
        <chat-input-bar :bg="true" class=" vue-ref" ref="inputBar" :delayBtn="delayBtn" :detail="spotDetail" :isIos="isIos" :isStrategy="isStrategy" :pushingProgress="pushingProgress" :pushingProgressShow="pushingProgressShow" :showHide="showHide" slot="bottom" v-if="!showHide" @stopSpeak="stopSpeak()" @resetTravel="resetTravel()" @setShowHide="setShowHide()" @setcolse="setcolse()" @clearDataStop="clearDataStop()" @send="doSend()"></chat-input-bar>
        <view class="" style="width:100%;height:60rpx;"></view>
        <view class="plan-content" style="transform:scaleY(-1);" v-if="showHide">
            <view class="welcom-l1">欢迎来到陕西！</view>
            <view class="welcom-l2">我是您的AI旅行搭子，为了您在陕西有一个美好的游玩体验，我将根据您的喜好为您定制行程。</view>
            <view class="plan-card">
                <view class="form-title">请选择目的地</view>
                <picker class="form-item" :range="cityColumns[0]" :value="cityIndex" @change="bindPickerChange($event)">
                    <view class="form-select">
                        <text class="select-text" v-if="form.city">{{form.city}}</text>
                        <text class="select-text placeholder" v-else>请选择城市</text>
                        <image mode class="select-icon" src="https://eshopfile.zhiyousx.com/175282679163848332.png"></image>
                    </view>
                </picker>
                <view class="form-title">请选择旅行时间</view>
                <view class="form-select form-select-data form-item" @click="openDatePicker($event)">
                    <text class="select-text placeholder" v-if="!form.beginTime||!form.endTime">请选择开始时间和结束时间</text>
                    <text class="select-text" v-else>{{form.beginTime+' '+' 至 '+form.endTime}}</text>
                    <image mode class="select-icon" src="https://eshopfile.zhiyousx.com/175282687512221524.png" v-if="!form.beginTime||!form.endTime"></image>
                </view>
                <view class="form-title">出行人</view>
                <view class="form-select form-item" @click="openTravelersPopup($event)">
                    <view class="select-text" v-if="$root.m0">{{ ($root.m1?form.adult+'位成人 ':'')+'\n\t\t\t\t\t\t'+($root.m2?form.children+'位儿童 ':'')+'\n\t\t\t\t\t\t'+($root.m3?form.older+'位老人':'') }}</view>
                    <view class="select-text placeholder" v-else>请至少选择一名旅游人次</view>
                    <image mode class="select-icon" src="https://eshopfile.zhiyousx.com/175282679163848332.png"></image>
                </view>
                <view class="form-title">您这次来想体验什么</view>
                <view class="form-select2 form-item" @click="showWantDoPopup($event)">
                    <view :class="['select-item','',it===interestPointFromOption?'select-item-option':'']" :key="index" v-for="(it, index) in form.wantDO">{{it}}</view>
                    <view class="select-text placeholder" v-if="$root.g0===0">请选择您想体验的项目</view>
                    <image mode class="select-icon" src="https://eshopfile.zhiyousx.com/175282679163848332.png"></image>
                </view>
                <view class="form-title">我的预算</view>
                <view class="form-item budget-input">
                    <input :adjustPosition="false" class="budget-input-native" :maxlength="8" min="0" placeholder="请输入预算金额" placeholderStyle="color:rgba(51,51,51,0.5)" :style="'background:'+'rgba(255,255,255,0.7)'+';'+'border-radius:'+'60rpx'+';'+'color:'+'#000000'+';'+'height:'+'80rpx'+';'+'width:'+'100%'+';'+'box-sizing:'+'border-box'+';'+'padding:'+'0 60rpx 0 20rpx'+';'+'font-size:'+'28rpx'+';'+'border:'+'none'+';'+'outline:'+'none'+';'" :value="form.price" @input="form.price = $event; handlePriceInput($event)"></input>
                    <text class="budget-unit">元</text>
                </view>
                <view class="tips" style="color:rgba(51,51,51,0.6);margin-top:-10rpx;font-size:24rpx;">*本预算不含大交通费用,如机票/火车票</view>
            </view>
            <view class="confirmBtn" @click="startChat($event)">开始AI规划</view>
        </view>
        <block v-if="!showHide">
            <view class="" style="position:relative;" :key="index" v-for="(item, index) in dataList">
                <view class="" style="transform:scaleY(-1);">
                    <chat-item class="" :dataList="dataList" :item="item" :newVal="newVal" :pushingProgress="pushingProgress" :sessionId="flowId" @changePlan="changePlan()" @resetTravel="resetTravel()" @exclusive="exclusive()" @stopSpeak="stopSpeak()" @clickShare="clickShare()"></chat-item>
                </view>
            </view>
        </block>
    </z-paging>
    <date-range-picker class=" vue-ref" ref="datePicker" :endDateProp="form.endTime" mode="range" :startDateProp="form.beginTime" :value="showDateRangePicker" @change="handleDateChange()" @input="showDateRangePicker = $event"></date-range-picker>
    <uni-popup class=" vue-ref" ref="wantDoPopup" type="bottom" :vueSlots="['default']" @change="popupChange()">
        <view class="wantdo-popup">
            <view class="popup-header">
                <text class="popup-title">选择想体验的内容</text>
                <text class="popup-confirm" @click="confirmWantDo($event)">确定</text>
            </view>
            <scroll-view class="popup-content" :scrollY="true">
                <view class="tag-container">
                    <view :class="['wantdo-tag','',item.g1?'wantdo-tag-active':'',item===interestPointFromOption?'wantdo-tag-option':'']" :key="index" v-for="(item, index) in $root.l0">{{ item }}</view>
                </view>
            </scroll-view>
        </view>
    </uni-popup>
    <uni-popup class=" vue-ref" ref="travelersPopup" type="bottom" :vueSlots="['default']" @maskClick="confirmTravelers()">
        <view class="travelers-popup">
            <view class="popup-header">
                <text class="popup-title">选择出行人数</text>
                <text class="popup-confirm" @click="confirmTravelers($event)">确定</text>
            </view>
            <view class="popup-content">
                <view class="traveler-row">
                    <text class="traveler-label">成人</text>
                    <view class="number-control">
                        <view class="control-btn" @click="changeTravelerCount('adult', -1)">-</view>
                        <u-input class="number-input" :clearable="false" inputAlign="center" :maxlength="2" type="text" :value="form.adult" @input="form.adult = $event; handleTravelerInput('adult', $event)"></u-input>
                        <view class="control-btn" @click="changeTravelerCount('adult', 1)">+</view>
                    </view>
                </view>
                <view class="traveler-row">
                    <text class="traveler-label">儿童</text>
                    <view class="number-control">
                        <view class="control-btn" @click="changeTravelerCount('children', -1)">-</view>
                        <u-input class="number-input" :clearable="false" inputAlign="center" :maxlength="2" type="text" :value="form.children" @input="form.children = $event; handleTravelerInput('children', $event)"></u-input>
                        <view class="control-btn" @click="changeTravelerCount('children', 1)">+</view>
                    </view>
                </view>
                <view class="traveler-row">
                    <text class="traveler-label">老人</text>
                    <view class="number-control">
                        <view class="control-btn" @click="changeTravelerCount('older', -1)">-</view>
                        <u-input class="number-input" :clearable="false" inputAlign="center" :maxlength="2" type="text" :value="form.older" @input="form.older = $event; handleTravelerInput('older', $event)"></u-input>
                        <view class="control-btn" @click="changeTravelerCount('older', 1)">+</view>
                    </view>
                </view>
            </view>
            <view class="popup-tips">*门票预算计算方面：成年人按照全票价计算，老人按照免票计算，儿童按照半价计算</view>
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
                i.e("union/components1/chat-input-bar/chat-input-bar-travel").then(function() {
                  return resolve(i("0e34"))
                }.bind(null, i)).catch(i.oe)
              },
              chatItem: function() {
                i.e("union/components1/chat-item/chat-item-travel").then(function() {
                  return resolve(i("048d"))
                }.bind(null, i)).catch(i.oe)
              },
              DateRangePicker: function() {
                i.e("union/pages/aiTravel/components/dateRangePicker").then(function() {
                  return resolve(i("b363"))
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
                pushingProgress: !0,
                task: null,
                scrollTop: 0,
                showHide: !0,
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
                timerList: [],
                playIndex: 0,
                arrResult: [],
                isIos: !1,
                isNetworkAnomaly: !1,
                timeNetwork: null,
                maskShow: !0,
                delayBtn: !1,
                cityColumns: [
                  ["西安市", "宝鸡市", "咸阳市", "渭南市", "铜川市", "延安市", "榆林市", "汉中市", "安康市", "商洛市"]
                ],
                showDateRangePicker: !1,
                form: {
                  city: "",
                  price: "",
                  wantDO: [],
                  beginTime: "",
                  endTime: "",
                  beginPeriod: "",
                  endPeriod: "",
                  adult: "1",
                  children: "0",
                  older: "0"
                },
                cityIndex: 0,
                showWantDo: !1,
                wantDoOptions: ["美食", "文化", "自然风光", "历史古迹", "购物", "娱乐", "摄影", "民俗体验"],
                strategyContent: "",
                shareObj: {},
                tempInterestPoint: null,
                interestPointFromOption: null,
                isForbidden: !1,
                reStartTime: "",
                reEndTime: "",
                keyboardHeight: 0,
                sessionCreateTime: null,
                sessionExpireTimer: null,
                sessionExpired: !1
              }
            },
            filters: {},
            watch: {
              typeVideo: {
                handler: function(e) {
                  var i = Number(e),
                    n = t.createVideoContext("myVideo3", this),
                    s = t.createVideoContext("myVideo4", this);
                  switch (s.seek(0), n.pause(), i) {
                    case 3:
                      n.play();
                      break;
                    case 4:
                      s.play()
                  }
                },
                deep: !0,
                immediate: !0
              },
              showHide: function(t) {
                !0 === t && this.sessionExpireTimer && (clearTimeout(this.sessionExpireTimer), this.sessionExpireTimer = null)
              }
            },
            computed: {
              isStrategy: function() {
                return this.dataList && this.dataList.length <= 2 || this.isForbidden
              }
            },
            onPageScroll: function(t) {},
            onLoad: function(e) {
              var i = this;
              if (e.departureTime && e.returnTime) {
                var s = decodeURIComponent(e.departureTime),
                  o = decodeURIComponent(e.returnTime),
                  a = new Date(s),
                  d = new Date(o).getTime() - a.getTime();
                Math.ceil(d / 864e5) > 5 ? uni.showToast({
                  title: "旅行时间请不要超过5天",
                  icon: "none"
                }) : (this.form.beginTime = s, this.form.endTime = o, this.reStartTime = s, this.reEndTime = o, this.$refs.datePicker.simulateSelectRange(this.reStartTime, this.reEndTime))
              } else e.departureTime && (this.form.beginTime = decodeURIComponent(e.departureTime), this.reStartTime = decodeURIComponent(e.departureTime)), e.returnTime && (this.form.endTime = decodeURIComponent(e.returnTime), this.reEndTime = decodeURIComponent(e.returnTime));
              if (e.destination && (this.form.city = decodeURIComponent(e.destination)), e.interestPoint) {
                var h = decodeURIComponent(e.interestPoint);
                this.form.wantDO = [h], this.tempInterestPoint = h, this.interestPointFromOption = h
              }
              if (e.budget) {
                var c = decodeURIComponent(e.budget);
                parseInt(c) > 9999 ? uni.showToast({
                  title: "预算金额请不要超过9999元",
                  icon: "none"
                }) : this.form.price = c
              }
              if (e.change) {
                var l = decodeURIComponent(e.change);
                this.form.change = l
              }
              var u = 0;
              e.adult && (u += parseInt(decodeURIComponent(e.adult)) || 0);
              e.children && (u += parseInt(decodeURIComponent(e.children)) || 0);
              e.older && (u += parseInt(decodeURIComponent(e.older)) || 0);
              u > 8 ? uni.showToast({
                title: "出行人数请不要超过8人",
                icon: "none"
              }) : (e.adult && (this.form.adult = decodeURIComponent(e.adult)), e.children && (this.form.children = decodeURIComponent(e.children)), e.older && (this.form.older = decodeURIComponent(e.older))), this.audioPlayer = n.createInnerAudioContext(), this.getWantList(), setTimeout((function() {
                i.maskShow = !1
              }), 1e3), this.$nextTick((function() {
                if (i.$refs.paging.scrollToTop(), i.reStartTime && i.reEndTime && i.$refs.datePicker) {
                  var t = i.reStartTime.split("-").map(Number),
                    e = (0, r.default)(t, 3),
                    n = e[0],
                    s = e[1],
                    o = e[2],
                    a = i.reEndTime.split("-").map(Number),
                    d = (0, r.default)(a, 3),
                    h = d[0],
                    c = d[1],
                    l = d[2];
                  i.$refs.datePicker.year = n, i.$refs.datePicker.month = s, i.$refs.datePicker.changeData();
                  var u = o - 1,
                    m = l - 1;
                  i.$refs.datePicker.dateClick(u), i.reStartTime !== i.reEndTime && (n === h && s === c || (i.$refs.datePicker.year = h, i.$refs.datePicker.month = c, i.$refs.datePicker.changeData()), i.$refs.datePicker.dateClick(m))
                }
              })), t.onKeyboardHeightChange((function(t) {
                i.keyboardHeight = t.height > 0 ? t.height : 0
              }))
            },
            onShow: function() {
              this.$refs.paging.setInit(), this.checkSessionExpired()
            },
            onHide: function() {
              this.clearAllTimers(), this.timeNetwork = null, t.hideKeyboard(), this.sessionExpireTimer && (clearTimeout(this.sessionExpireTimer), this.sessionExpireTimer = null)
            },
            onUnload: function() {
              this.clearAllTimers(), this.timeNetwork = null, t.createVideoContext("myVideo3", this).seek(0), this.loadMore = "loadmore", this.dataList = [], this.$refs.paging.clear(), this.$refs.paging.complete([]), this.$refs.paging.complete(!1), this.clearStarts(), this.sessionExpireTimer && (clearTimeout(this.sessionExpireTimer), this.sessionExpireTimer = null)
            },
            onShareAppMessage: function() {
              return {
                title: this.shareObj.title,
                imageUrl: "https://eshopfile.zhiyousx.com/175214881804186478.png",
                path: this.shareObj.path + "?sessionId=".concat(this.flowId)
              }
            },
            methods: {
              getWantList: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("get", "ai/interestPoint/list").then((function(e) {
                  if (1 === e.code) {
                    var i = e.data || [];
                    i = i.map((function(t) {
                      return t.name
                    })), t.tempInterestPoint && !i.includes(t.tempInterestPoint) && i.unshift(t.tempInterestPoint), t.wantDoOptions = i
                  }
                }))
              },
              loadedmetadata: function() {
                var e = t.createVideoContext("myVideo4", this),
                  i = this;
                4 == this.typeVideo && (e.play(), setTimeout((function() {
                  i.showImage = !1, i.opacity = 1
                }), 500))
              },
              clickShare: function(t) {
                console.log(t, "shareObj"), this.shareObj = t
              },
              bindPickerChange: function(t) {
                this.cityIndex = t.detail.value, this.form.city = this.cityColumns[0][this.cityIndex]
              },
              queryList: function(t, e) {
                var i = this;
                if (!this.dataId || "nomore" == this.loadMore) return this.$refs.paging.complete([]), !1;
                1 == t && (this.dataList = []), this.$uniApi.dataRequestNoLoading("get", "ai/aiEscort/dialogue/page", (0, a.default)({
                  sessionId: this.dataId,
                  size: 30,
                  current: t
                }, "size", e)).then((function(e) {
                  if (1 === e.code) {
                    var n = e.data.records;
                    if (i.totle = e.data.total, e.data.total > 0 ? (1 === e.data.current ? i.historyList = n : i.historyList = i.historyList.concat(n), e.data.current < e.data.pages ? (i.page = i.page + 1, i.loadMore = "loadmore") : i.loadMore = "nomore") : (i.historyList = [], i.loadMore = "nomore"), n && n.length) {
                      var s = [];
                      n.forEach((function(t) {
                        if (t.content)
                          if (1 == t.type) t.content && -1 == t.content.indexOf("专属攻略：是") && s.push({
                            content: decodeURIComponent(t.content),
                            type: 1,
                            state: 1,
                            end: !0,
                            name: "ai",
                            list: [],
                            id: (new Date).getTime()
                          });
                          else {
                            var e = "",
                              i = t.content;
                            t.content.indexOf("の") > -1 ? (e = t.content.split("の")[1].replaceAll("swiperItem", "swiperItem swiperItemBox").replaceAll(/<video(.*?)src="(.*?) - (.*?)"(.*?)>/g, '<video$1src="$2-$3"$4>').replaceAll(/<img src="(.*?) - (.*?)" alt="">/g, '<img src="$1-$2" alt="">'), i = t.content.split("の")[0], s.push({
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
                              divergenceProblem: []
                            })) : s.push({
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
                              divergenceProblem: []
                            }), s[s.length - 1].state = 1, s[s.length - 1].divergenceProblem = t.deriveIssue ? t.deriveIssue.data : [], t.jsonData && "o001" == t.jsonData.extend.code && (s[s.length - 1].content = "为您推荐官方游玩攻略：", s[s.length - 1].officialGuide = t.jsonData ? t.jsonData.data : [], s[s.length - 1].exclusive = t.content, s[s.length - 1].officialGuideType = 2), t.jsonData && "s001" == t.jsonData.extend.code && (s[s.length - 1].list = t.jsonData ? t.jsonData.data : []), t.jsonData && "e001" == t.jsonData.extend.code && (s[s.length - 1].exclusiveRoute = t.jsonData ? t.jsonData.data : []), t.content.indexOf("の") > -1 && s.push({
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
                      })), i.$refs.paging.complete(s)
                    } else if (1 == t) return i.dataList = [], i.$refs.paging.complete([]), !1
                  }
                }))
              },
              createData: function(e) {
                var i = this;
                this.$uniApi.dataRequestNoLoading("post", "ai/aiEscort/session/create", {
                  bussType: 2,
                  openId: uni.getStorageSync("wxopenid"),
                  title: e
                }).then((function(t) {
                  1 === t.code && (i.flowId = t.data, i.pushingProgress = !1, i.stratSet = !0, i.$refs.paging.scrollToBottom(), i.doSend("", {}), i.sessionExpired = !1)
                }))
              },
              startSessionExpireTimer: function() {
                var t = this;
                this.sessionExpireTimer && clearTimeout(this.sessionExpireTimer), this.sessionExpireTimer = setTimeout((function() {
                  t.handleSessionExpired()
                }), 6e5)
              },
              handleSessionExpired: function() {
                var e = this;
                this.sessionExpired = !0, uni.showModal({
                  title: "提示",
                  content: "会话已过期，请重新开始",
                  showCancel: !1,
                  success: function() {
                    e.setcolse(), uni.redirectTo({
                      url: "/pages/index/index"
                    })
                  }
                })
              },
              checkSessionExpired: function() {
                var t = this;
                if (this.sessionCreateTime && !this.sessionExpired) {
                  var e = Date.now();
                  if (e - this.sessionCreateTime >= 6e5) this.handleSessionExpired();
                  else {
                    var i = 6e5 - (e - this.sessionCreateTime);
                    this.sessionExpireTimer = setTimeout((function() {
                      t.handleSessionExpired()
                    }), i)
                  }
                }
              },
              exclusive: function(t) {
                this.typeVideo = 4, this.showHide = !1, this.doSend("专属攻略", t)
              },
              clearDataStop: function() {
                this.task && this.task.abort(), this.pushingProgress = !0, this.pushingProgressShow = !0
              },
              setcolse: function() {
                this.clearData(), this.$refs.datePicker && this.$refs.datePicker.init && this.$refs.datePicker.init()
              },
              clearData: function() {
                this.clearAllTimers(), this.timeNetwork = null, this.delayBtn = !1, this.task && this.task.abort(), this.form = {
                  city: "",
                  price: "",
                  wantDO: [],
                  beginTime: "",
                  endTime: "",
                  beginPeriod: "",
                  endPeriod: "",
                  adult: "1",
                  children: "0",
                  older: "0"
                }, this.typeVideo = 4, this.showHide = !0, uni.removeStorageSync("HISTORY_ID"), this.dataList = [], this.$forceUpdate(), this.clearStarts()
              },
              startChat: function() {
                if (this.$eventAnalyse.analyse({
                    eventTag: "aiTravel_form_submit",
                    eventName: "旅行搭子表单提交",
                    eventParams: JSON.stringify({
                      formParams: this.form
                    })
                  }), this.form.city)
                  if (this.form.beginTime && this.form.endTime)
                    if (this.form.price)
                      if (Number(this.form.price) <= 0) uni.showToast({
                        title: "请输入大于0的预算金额",
                        icon: "none"
                      });
                      else if (+this.form.price > 9999) uni.showToast({
                  title: "金额过大，请输入小于9999的价格",
                  icon: "none"
                });
                else if (!(this.form.adult || this.form.children || this.form.older) || 0 == this.form.adult && 0 == this.form.children && 0 == this.form.older) uni.showToast({
                  title: "请至少选择一名旅游人次",
                  icon: "none"
                });
                else {
                  (parseInt(this.form.adult) || 0) + (parseInt(this.form.children) || 0) + (parseInt(this.form.older) || 0) > 8 ? uni.showToast({
                    title: "出行总人数不能超过8人",
                    icon: "none"
                  }) : (this.typeVideo = 4, this.showHide = !1, this.createData("AI旅游行程规划"))
                } else uni.showToast({
                  title: "请输入预算金额",
                  icon: "none"
                });
                else uni.showToast({
                  title: "请选择旅行时间",
                  icon: "none"
                });
                else uni.showToast({
                  title: "请选择目的地",
                  icon: "none"
                })
              },
              setShowHide: function(t) {
                this.typeVideo = 4, this.showHide = !1, this.createData(t)
              },
              keyboardHeightChange: function(t) {
                this.$refs.inputBar.updateKeyboardHeightChange(t)
              },
              hidedKeyboard: function() {
                this.$refs.inputBar.hidedKeyboard()
              },
              stopSpeak: function() {
                this.clearAllTimers(), this.timeNetwork = null, this.dataList[0].content = this.dataList[0].content.replaceAll('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', ""), this.task && (this.task.abort(), this.dataList[0].content || (this.dataList[0].content = "回答终止，请重新提问。"), this.pushingProgress = !0, this.dataList[0].end = !0, this.task = null, this.pushingProgressShow = !0, this.typeVideo = 4, this.clearStarts())
              },
              findPreviousObjectById: function(t) {
                var e = this.dataList.findIndex((function(e) {
                  return e.id === t
                }));
                return e > 0 ? this.dataList[e + 1].content : null
              },
              resetTravel: function(e) {
                if (console.log(e, "redirectContent"), this.pushingProgressShow) {
                  this.pushingProgress = !0, this.pushingProgressShow = !0;
                  var i = "/union/pages/aiTravel/index",
                    n = [];
                  e && ["departureTime", "destination", "budget", "interestPoint", "returnTime", "adult", "children", "older", "change"].forEach((function(t) {
                    e[t] && n.push("".concat(t, "=").concat(encodeURIComponent(e[t])))
                  })), n.length > 0 && (i += "?" + n.join("&")), uni.redirectTo({
                    url: i
                  })
                } else this.$uni.showToast("正在回答，请稍候")
              },
              changePlan: function(t) {
                this.dataList = this.dataList.filter((function(t) {
                  return !t.strategy && !t.isText
                })), console.log(this.dataList, "this.dataList"), this.$refs.paging.scrollToBottom(), this.doSend("", {}, t)
              },
              doSend: function(t, e) {
                var i = this,
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                this.sessionCreateTime = Date.now(), this.startSessionExpireTimer(), this.pushingProgress = !1, this.stratSet = !0, this.$refs.paging.scrollToBottom(), setTimeout((function() {
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
                  } else i.toSend(t, n);
                  i.$refs.paging.scrollToBottom()
                }), 300)
              },
              toSend: function(e, i) {
                var n = this,
                  s = this;
                this.dataInfosList = [], this.pushingProgressShow = !1, setTimeout((function() {
                  n.$refs.paging.scrollToBottom()
                }), 100), this.isForbidden = !!i, this.task = t.request({
                  url: "".concat(getApp().globalData.requestUrl, "ai/app/travel/plan"),
                  enableChunked: !0,
                  method: "POST",
                  timeout: 9e5,
                  data: {
                    beginTime: this.form.beginTime,
                    endTime: this.form.endTime,
                    question: e,
                    city: this.form.city,
                    price: this.form.price,
                    wantDO: this.form.wantDO,
                    adult: +this.form.adult,
                    children: +this.form.children,
                    older: +this.form.older,
                    userId: uni.getStorageSync("wxopenid"),
                    sessionId: this.flowId,
                    bussType: 2,
                    change: this.form.change
                  },
                  success: function(t) {
                    console.log(t, "success"), 200 == t.statusCode && (n.stratSet = !1, n.WshowHide = !1, n.newValCopy = "", n.addNextCharacter()), 400 == t.statusCode && (n.clearStarts(), n.dataList[0].content = "网络走丢了，请稍后重试!", n.task && n.task.abort()), s.dataList[0].end = !0, s.$data.currentIndex = 0, s.$data.currentContent = "", s.$data.sendState = !1, s.isNetworkAnomaly = !1, s.delayBtn = !0, s.clearAllTimers(), s.timeNetwork = null
                  },
                  fail: function(t) {
                    console.log(t, "ssssssssssss"), n.stratSet = !1, n.delayBtn = !0, "request:fail " == t.errMsg && (n.clearStarts(), n.dataList[0].content = "网络走丢了，请稍后重试!", n.task && n.task.abort()), "request:fail abort" == t.errMsg && n.dataList[0].content && n.dataList[0].content.endsWith('<img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>') && (n.dataList[0].content = n.dataList[0].content.slice(0, n.dataList[0].content.length - 97))
                  }
                }), this.task.onChunkReceived((function(t) {
                  s.clearAllTimers(), s.delayBtn = !0, s.isNetworkAnomaly = !0, s.timeNetwork = setTimeout((function() {
                    s.clearAllTimers(), n.clearStarts(), n.$uni.showToast("网络异常，请重试！"), n.dataList[0].content || (n.dataList[0].content = "网络走丢了，请稍后重试!"), n.task && n.task.abort()
                  }), 3e4), s.timerList.push(s.timeNetwork);
                  var e, i = new Uint8Array(t.data);
                  if ("[object Uint8Array]" === Object.prototype.toString.call(i)) e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, o.default)(i))));
                  else if (i instanceof ArrayBuffer) {
                    var a = new Uint8Array(i);
                    e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, o.default)(a))))
                  }
                  3 == s.typeVideo || n.showHide || (s.typeVideo = 3), e.split("^").forEach((function(t) {
                    if (t) {
                      var e = JSON.parse(t);
                      console.log(e), 0 === e.code && s.dataList[0].cardLoading && (s.dataList[0].cardLoading = !1), 0 == e.extend.type && "c001" == e.extend.code && (s.dataList[0].state = 1, s.newVal += e.data, console.log(e.data), s.character || s.addNextCharacter()), 0 == e.extend.type && "e001" == e.extend.code && (s.newVal += e.data, s.character || s.addNextCharacter()), "s001" == e.extend.code && 0 == e.extend.type && (s.dataList[0].state = 1, s.newVal += e.data, s.character || s.addNextCharacter()), "p001" == e.extend.code && (s.dataList[0].state = 1, s.dataList[0].strategy = 1, s.dataList[0].cardLoading = !1, s.dataList[0].strategyContent = e.data), "p002" == e.extend.code && (s.dataList[0].state = 1, s.dataList[0].redirectContent = JSON.parse(e.data), s.newVal += "检测到您需要攻略或规划？  \n👉 点击下方 「AI旅行搭子」，一键生成专属方案！  \n（不满意？可随时重新生成哦~）", s.character || s.addNextCharacter()), "p003" == e.extend.code && (s.dataList[0].state = 1, s.dataList[0].isText = !0, s.newVal += e.data + "の", s.character || s.addNextCharacter()), "p004" == e.extend.code && (s.dataList[0].cardLoading = !0), "p005" == e.extend.code && (s.dataList[0].state = 1, s.dataList[0].changeAnswer = JSON.parse(e.data), s.newVal += "根据您的修改意见，点击下方按钮进行重新规划吧！", s.character || s.addNextCharacter()), n.dataInfosList.push(e)
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
                for (var n = "", s = 0; s < t.length; s++) 15 === (n += t[s]).length && (this.arrResult.push(n), n = "");
                n.length > 0 && this.arrResult.push(n)
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
              clearAllTimers: function() {
                this.timeNetwork && (clearTimeout(this.timeNetwork), this.timeNetwork = null), this.timerList.forEach((function(t) {
                  clearTimeout(t)
                })), this.timerList = []
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
                      n = this.dataList[0].content1.lastIndexOf("</video>"),
                      s = this.dataList[0].content1.lastIndexOf("景点视频：<");
                    this.dataList[0].content && i > -1 && -1 == this.hoveImgList.indexOf(i) && (-1 == e || -1 == this.hoveImgList.indexOf(e) || e < i) && !this.hoveImg ? (this.dataList[0].content += 'img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(i)) : e > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(e) ? (this.hoveImgList.push(e), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<i"), this.dataList[0].content1.lastIndexOf('">') + 2).replace(/ - /g, "-")), this.dataList[0].content = this.dataList[0].content.replace('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImgListUrl[this.hoveImgListUrl.length - 1]), this.$forceUpdate()) : this.dataList[0].content && s > -1 && -1 == this.hoveImgList.indexOf(s) && (-1 == n || -1 == this.hoveImgList.indexOf(n) || n < s) && !this.hoveImg ? (this.dataList[0].content += 'img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(s)) : n > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(n) ? (this.hoveImgList.push(n), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<v"), this.dataList[0].content1.lastIndexOf("</video>") + 8).replace(/ - /g, "-")), this.dataList[0].content += this.hoveImgListUrl[this.hoveImgListUrl.length - 1], this.$forceUpdate()) : this.hoveImg || (this.dataList[0].content += t)
                  } else this.dataList[0].content += t;
                  this.dataList[0].content1 += t, this.index++, this.addNextCharacter()
                } else clearTimeout(this.character), this.character = null, this.stratSet || this.showHide || (this.typeVideo = 4, this.clearStarts())
              },
              handlePriceInput: function(t) {
                var e = this;
                console.log(t.detail.value);
                var i = /[^\d]/g;
                this.$nextTick((function() {
                  e.form.price = t.detail.value.replace(i, "")
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
              },
              openTravelersPopup: function() {
                this.$refs.travelersPopup.open()
              },
              confirmTravelers: function() {
                this.form.adult && "" !== this.form.adult || (this.form.adult = "0"), this.form.children && "" !== this.form.children || (this.form.children = "0"), this.form.older && "" !== this.form.older || (this.form.older = "0"), this.$refs.travelersPopup.close()
              },
              changeTravelerCount: function(e, i) {
                var n = (parseInt(this.form[e], 10) || 0) + i;
                n >= 0 && n <= 8 ? this.form[e] = String(n) : n > 8 && uni.showToast({
                  title: "单类人数不能超过8人",
                  icon: "none"
                })
              },
              handleTravelerInput: function(e, i) {
                var n = this,
                  s = /[^\d]/g;
                console.log(this.form[e]), this.$nextTick((function() {
                  var o = i.replace(s, "");
                  (parseInt(o) || 0) > 8 ? (n.form[e] = "8", uni.showToast({
                    title: "单类人数不能超过8人",
                    icon: "none"
                  })) : n.form[e] = o
                }))
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.video_box{height:1712rpx;left:0;position:fixed;top:0;width:100%;z-index:9}.video_box1{height:1712rpx;left:0;position:fixed;top:0;width:100%;z-index:10}.active{opacity:1}.page-box-image1 .zp-scroll-view-container{opacity:0;top:100%;transition:opacity 1s}.page-box-image1 .zp-page-bottom-container{position:relative;z-index:10}.h100{height:100%}.page-box-image2 .zp-scroll-view-container{background:linear-gradient(180deg,hsla(0,0%,100%,.5),#fff 50%);border:2rpx solid #fff;border-radius:50rpx 50rpx 0rpx 0rpx;box-shadow:0rpx -20rpx 20rpx 0rpx rgba(154,34,6,.2);margin-top:36rpx;top:0;transition:top .6s}.page-box-image2 .zp-scroll-view-absolute{padding-bottom:20rpx}.page-box-image22 .plan-content{margin-left:60rpx;padding-top:20rpx;width:630rpx}.page-box-image22 .plan-content .welcom-l1{color:#383b46;font-size:36rpx;font-weight:700;line-height:58rpx}.page-box-image22 .plan-content .welcom-l2{color:#4e514f;font-size:28rpx;line-height:42rpx;margin-top:20rpx;text-indent:2em}.page-box-image22 .plan-content .plan-card{background:linear-gradient(180deg,rgba(255,200,152,.5) 22%,rgba(255,200,152,.15));border-radius:40rpx;margin-top:20rpx;padding:28rpx 40rpx;position:relative;width:630rpx}.page-box-image22 .plan-content .plan-card::before{background:linear-gradient(180deg,#fff,hsla(0,0%,100%,.2)) border-box;border:2rpx solid transparent;border-radius:40rpx;bottom:0;content:"";left:0;-webkit-mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);mask-composite:exclude;pointer-events:none;position:absolute;right:0;top:0}.page-box-image22 .plan-content .plan-card .form-title{color:#1c1c1c;font-size:28rpx;font-weight:700;line-height:40rpx;margin-bottom:12rpx}.page-box-image22 .plan-content .plan-card .form-item{margin-bottom:20rpx}.page-box-image22 .plan-content .plan-card .form-item .price-unit{color:#000;font-size:28rpx;margin-right:10rpx}.page-box-image22 .plan-content .plan-card .budget-input{position:relative}.page-box-image22 .plan-content .plan-card .budget-input .budget-unit{color:#000;font-size:28rpx;pointer-events:none;position:absolute;right:25rpx;top:50%;transform:translateY(-50%)}.page-box-image22 .plan-content .plan-card .form-select{align-items:center;background:hsla(0,0%,100%,.7);border-radius:60rpx;display:-webkit-flex;display:flex;justify-content:space-between;min-height:72rpx;padding:0 20rpx}.page-box-image22 .plan-content .plan-card .form-select .select-text{color:#1c1c1c;font-size:26rpx}.page-box-image22 .plan-content .plan-card .form-select .placeholder{color:rgba(51,51,51,.5)}.page-box-image22 .plan-content .plan-card .form-select .select-icon{height:32rpx;width:32rpx}.page-box-image22 .plan-content .plan-card .form-select2{background:hsla(0,0%,100%,.7);border-radius:60rpx;flex-wrap:wrap;min-height:72rpx;padding:10rpx 20rpx 0;position:relative}.page-box-image22 .plan-content .plan-card .form-select2 .select-item{background:rgba(253,100,3,.2);border-radius:40rpx;color:#1c1c1c;display:inline-block;font-size:24rpx;height:50rpx;line-height:50rpx;margin:0 10rpx 10rpx 0;padding:0 12rpx}.page-box-image22 .plan-content .plan-card .form-select2 .select-item.select-item-option{background:rgba(177,99,10,.2)}.page-box-image22 .plan-content .plan-card .form-select2 .select-text{color:#1c1c1c;font-size:26rpx;line-height:72rpx}.page-box-image22 .plan-content .plan-card .form-select2 .placeholder{color:rgba(51,51,51,.5)}.page-box-image22 .plan-content .plan-card .form-select2 .select-icon{height:32rpx;position:absolute;right:20rpx;top:calc(50% - 16rpx);width:32rpx}.page-box-image22 .plan-content .plan-card .form-select-data{height:96rpx;justify-content:flex-start;position:relative}.page-box-image22 .plan-content .plan-card .form-select-data .select-icon{height:36rpx;position:absolute;right:20rpx;top:calc(50% - 18rpx);width:36rpx}.page-box-image22 .plan-content .confirmBtn{background:rgba(177,99,10,.6);border-radius:60rpx 60rpx 60rpx 60rpx;color:#fff;font-size:32rpx;height:72rpx;line-height:72rpx;margin-top:50rpx;text-align:center;width:630rpx}.page-box{min-height:100vh;width:100%}.page-box .content-box .greet-box{left:calc(100% - 455rpx);position:absolute;top:244rpx;width:435rpx}.page-box .content-box .greet-box .greet-box-t{color:#1e1b19;font-family:Alibaba PuHuiTi;font-size:60rpx;font-style:normal;font-weight:700;line-height:96rpx;margin-bottom:20rpx;text-align:left;text-transform:none}.page-box .content-box .greet-box .greet-box-b .greet-box-l{color:#1e1b19;font-family:Alibaba PuHuiTi;font-size:36rpx;font-style:normal;font-weight:400;line-height:44rpx;text-align:left;text-transform:none}.page-box .default-box{box-sizing:border-box;display:-webkit-flex;display:flex;justify-content:space-between;padding:40rpx;position:absolute;top:473rpx;width:100%;z-index:1}.page-box .default-box .default-box-copy{height:100%;position:absolute;width:100%;z-index:100}.page-box .default-box .default-t{margin-bottom:20rpx}.page-box .default-box .default-b,.page-box .default-box .default-l,.page-box .default-box .default-t{background:linear-gradient(180deg,hsla(0,0%,100%,.5) 22%,#fff);border:2rpx solid #fff;border-radius:40rpx 40rpx 40rpx 40rpx;box-sizing:border-box;padding:28rpx 20rpx}.page-box .default-box .default-l,.page-box .default-box .default-r{width:calc(50% - 10rpx)}.page-box .default-box .default-l .default-h,.page-box .default-box .default-r .default-h{align-items:center;display:-webkit-flex;display:flex}.page-box .default-box .default-l .default-h .default-image,.page-box .default-box .default-r .default-h .default-image{height:44rpx;margin-left:10rpx;width:44rpx}.page-box .default-box .default-l .default-h .default-text,.page-box .default-box .default-r .default-h .default-text{color:#c160b0;font-family:Alibaba PuHuiTi;font-size:32rpx;font-style:normal;font-weight:700;line-height:38rpx;margin-left:10rpx;text-align:left;text-transform:none}.page-box .default-box .default-l .default-item,.page-box .default-box .default-r .default-item{background:rgba(195,237,194,.5);border-radius:60rpx 60rpx 60rpx 60rpx;color:#1c1c1c;font-family:Source Han Sans SC;font-size:24rpx;font-style:normal;font-weight:400;line-height:28rpx;margin-top:20rpx;padding:16rpx 20rpx;text-align:left;text-transform:none}.page-box .count-desc-box{background:linear-gradient(180deg,hsla(0,0%,100%,.5),#fff 50%);border:2rpx solid #fff;border-radius:50rpx 50rpx 0rpx 0rpx;box-shadow:0rpx -20rpx 20rpx 0rpx rgba(154,34,6,.2);height:64vh;overflow:hidden;position:absolute;top:0;transform:scaleY(-1);width:100%}.page-box .count-desc-box .count-desc{height:100%;max-height:100%;transform:scaleY(-1)}.wantdo-popup{background:#fff;border-radius:24rpx 24rpx 0 0;padding:30rpx}.wantdo-popup .popup-header{align-items:center;border-bottom:1rpx solid #eee;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:30rpx;padding-bottom:20rpx}.wantdo-popup .popup-header .popup-title{color:#1c1c1c;font-size:32rpx;font-weight:700}.wantdo-popup .popup-header .popup-confirm{color:#ff6b00;font-size:28rpx}.wantdo-popup .popup-content{height:600rpx}.wantdo-popup .popup-content .tag-container{display:-webkit-flex;display:flex;flex-wrap:wrap;gap:20rpx;padding:20rpx 0}.wantdo-popup .popup-content .wantdo-tag{background:#f5f5f5;border-radius:40rpx;color:#1c1c1c;font-size:24rpx;padding:16rpx 30rpx}.wantdo-popup .popup-content .wantdo-tag-active{background:rgba(253,100,3,.2);color:#ff6b00}.wantdo-popup .popup-content .wantdo-tag-option.wantdo-tag-active{background:rgba(177,99,10,.2);color:#b1630a}.travelers-popup{background:#fff;border-radius:24rpx 24rpx 0 0;padding:34rpx 40rpx 68rpx}.travelers-popup .popup-header{align-items:center;border-bottom:1rpx solid #eee;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:30rpx;padding-bottom:20rpx}.travelers-popup .popup-header .popup-title{color:#1c1c1c;font-size:32rpx;font-weight:700}.travelers-popup .popup-header .popup-confirm{color:#ff6b00;font-size:28rpx}.travelers-popup .popup-content{padding:20rpx 0}.travelers-popup .popup-content .traveler-row{align-items:center;display:-webkit-flex;display:flex;margin-bottom:40rpx}.travelers-popup .popup-content .traveler-row .traveler-label{color:#76777e;font-size:32rpx}.travelers-popup .popup-content .traveler-row .number-control{align-items:center;display:-webkit-flex;display:flex;margin-left:36rpx}.travelers-popup .popup-content .traveler-row .number-control .control-btn{color:#4e5969;font-size:50rpx;height:50rpx;line-height:50rpx;text-align:center;width:50rpx}.travelers-popup .popup-content .traveler-row .number-control .number-input{background:#f5f5f5;border-radius:8rpx;font-size:28rpx;margin:0 20rpx;text-align:center;width:400rpx}.travelers-popup .popup-tips{color:#76777e;font-size:28rpx;line-height:42rpx}.calendar-popup{background:#fff;border-radius:24rpx 24rpx 0 0;height:700rpx;min-height:700rpx;padding:30rpx}.calendar-popup .calendar-actions{align-items:center;border-top:1rpx solid #eee;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:20rpx;padding-top:20rpx}.calendar-popup .calendar-actions .action-item{align-items:flex-start;color:#1c1c1c;display:-webkit-flex;display:flex;flex-direction:column;font-size:28rpx;width:calc(50% - 10rpx)}.calendar-popup .calendar-actions .action-item .period-select{align-items:center;background:#f5f5f5;border-radius:40rpx;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:10rpx;padding:10rpx 20rpx}.calendar-popup .calendar-actions .action-item .period-select .select-icon{height:24rpx;margin-left:10rpx;width:24rpx}.calendar-popup .calendar-actions .confirm-btn{background:#ff6b00;border-radius:40rpx;color:#fff;font-size:32rpx;padding:20rpx 40rpx}
</style>
