<template>
<view class="chat-item">
    <view :class="[true?'chat-container':'',item.type==1?'chat-location-me':'']">
        <view class="chat-content-container">
            <view class="chat-text-container-super" :style="'justify-content:'+(item.type==1?'flex-end':'flex-start')+';'+'padding-left:'+(item.type==1?'0rpx':'20rpx')+';'+'padding-right:'+(item.type==1?'20rpx':'0rpx')+';'" v-if="!item.historyLine&&!item.nomoreLine">
                <image alt :class="['icon-user',item.type==1?'good goods':'bad bads']" :src="item.type!=1?'https://eshopfile.zhiyousx.com/176967868627653802.png':userInfo.picUrl?userInfo.picUrl:'https://eshopfile.zhiyousx.com/2021120914511172601.png'"></image>
                <view :class="[true?'chat-text-container':'',item.type==1?'chat-text-container-me':'',item.type!=1?'chat-text-container-no':'']">
                    <view class="bubble">
                        <view :class="[true?'chat-text':'']">
                            <view space="nbsp" userSelect="true" v-if="item.content&&item.type!=1">
                                <zero-markdown-view :markdown="item.content"></zero-markdown-view>
                            </view>
                            <view class="chat-text-me" v-if="item.content&&item.type==1">{{ item.content }}</view>
                            <view class="loading-box" v-if="!item.content">{{ $root.m0 }}<view class="loading">
                                    <view class="pot"></view>
                                    <view class="pot"></view>
                                    <view class="pot"></view>
                                </view>
                            </view>
                            <view class="travelBtn" v-if="item.redirectContent" @click="resetTravel($event)">
                                <image class="ai" src="https://eshopfile.zhiyousx.com/175153136103574217.png"></image>{{ $root.m1 }}<image class="icon" src="https://eshopfile.zhiyousx.com/175153148262435174.png"></image>
                            </view>
                            <view class="travelBtn" v-if="item.changeAnswer" @click="changePlan($event)">
                                <image class="ai" src="https://eshopfile.zhiyousx.com/175153136103574217.png"></image>{{ $root.m2 }}<image class="icon" src="https://eshopfile.zhiyousx.com/175153148262435174.png"></image>
                            </view>
                            <view style="width:100%;margin-top:30rpx;" v-if="$root.g0">
                                <scroll-view class="card-item" scrollX="true">
                                    <view class="card-item-count">
                                        <view class="card-item-box" :style="'margin-right:'+(i<el.g1-1?'20rpx':'0')+';'" :key="id" v-for="(el, i) in $root.l1">
                                            <view class="card-type">{{ el.m3 }}</view>
                                            <image class="card-image" lazyLoad="false" mode="aspectFill" :src="el.mainPic"></image>
                                            <view class="card-name">{{ el.name }}</view>
                                            <view class="tag-item-box parent" v-if="el.g2">
                                                <view class="tag-item child" v-if="index<3" :key="index" v-for="(ele, index) in el.l0">{{ele+''}}</view>
                                            </view>
                                        </view>
                                    </view>
                                </scroll-view>
                            </view>
                            <view class="official-box" v-if="$root.g3">
                                <view class="official-item" :key="lineId" v-for="(k, ind) in $root.l3">
                                    <image class="official-img" lazyLoad="false" mode="aspectFill" :src="k.g4[0].url"></image>
                                    <view class="official-r">
                                        <view class="official-title">{{k.lineName}}</view>
                                        <view class="official-tag" v-if="k.themeNames">
                                            <view class="official-tag-item" v-if="index<3" :key="index" v-for="(ele, index) in k.l2">{{ ele }}</view>
                                        </view>
                                        <view class="official-desc">{{k.cityNames}}</view>
                                    </view>
                                </view>
                            </view>
                            <view class="evaluation" v-if="item.evaluationObj">
                                <xjtu-text-card :baseInfo="item.evaluationObj.evaluation||null" :scenicName="item.evaluationObj.scenicName||''" :videoList="item.evaluationObj.vlogUrls||[]" @gotoVideo="gotoVideo()"></xjtu-text-card>
                            </view>
                            <view class="toilet" v-if="$root.g5">
                                <view class="toilet-title">{{ $root.m4 }}</view>
                                <view class="toilet-item" :key="ind" v-for="(el, ind) in $root.l4">
                                    <view class="toilet-item-left">
                                        <image class="toilet-item-left-img" lazyLoad="false" mode="aspectFill" :src="el.photos" v-if="el.photos"></image>
                                        <view class="toilet-item-left-default _div" v-else>
                                            <image lazyLoad="false" mode="aspectFill" src="https://eshopfile.zhiyousx.com/175464211103781816.png"></image>
                                        </view>
                                        <view class="toilet-item-left-title">
                                            <view class="name singleLineText">{{el.name}}</view>
                                            <view class="address singleLineText">{{el.address}}</view>
                                        </view>
                                    </view>
                                    <view class="toilet-item-right">
                                        <view class="toilet-item-right-guide">
                                            <view class="txt">{{el.m5}}</view>
                                            <view class="distance">
                                                <image class="distance-icon" src="https://eshopfile.zhiyousx.com/175517483307507834.png"></image>{{''+el.distance+'m'}}</view>
                                        </view>
                                        <image class="toilet-item-right-icon" src="https://eshopfile.zhiyousx.com/175464314045201536.png"></image>
                                    </view>
                                </view>
                            </view>
                            <view class="spotPhone" v-if="item.spotPhone">
                                <view class="spotName">{{ item.spotPhone.scenicName }}</view>
                                <view class="spotPhone" :key="ind" v-for="(el, ind) in $root.l5">{{ el.m6+el }}</view>
                                <view class="callBtn" @click="callPhone()"></view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="comment" v-if="item.type!=1&&item.end&&(item.isTerminate||item.isComplete)">
                <view class="good _div" v-if="!likeSave" @click="goodComment($event)">
                    <image src="https://eshopfile.zhiyousx.com/176967847653132500.png" v-if="!like"></image>
                    <image src="https://eshopfile.zhiyousx.com/176967848760530080.png" v-else></image>
                </view>
                <view class="bad _div" @click="badComment($event)">
                    <image src="https://eshopfile.zhiyousx.com/176967849891766855.png" v-if="!collection"></image>
                    <image src="https://eshopfile.zhiyousx.com/176967850954243937.png" v-else></image>
                </view>
            </view>
            <view class="comment" v-if="item.isRetry" @click="isRetryFun(item)">
                <view class="good">
                    <image alt src="https://eshopfile.zhiyousx.com/177025924979479635.png"></image>
                </view>
            </view>
            <view class="chat-text-expand" v-if="$root.g6">
                <view class="guide">
                    <view class="left">
                        <image class="headImg" lazyLoad="false" mode="aspectFill" src="https://eshopfile.zhiyousx.com/176999759107083295.png"></image>{{ $root.m7 }}</view>
                </view>
                <view class="questionBox" v-if="$root.g7">
                    <view class="item" :style="'margin-bottom:'+(index!=it.g8-1?'20rpx':'0')+';'" :key="index" v-for="(it, index) in $root.l6">
                        <text class="text-desc">{{it}}</text>
                    </view>
                </view>
            </view>
            <view class="lined-link" v-if="item.exclusiveRoute&&item.exclusiveRoute" @click="goLine(item.exclusiveRoute)">{{ $root.m8 }}</view>
            <view class="evaluationQuestion" v-if="item.type==0">
                <view class="evaluationItem" :key="ind" v-for="(el, ind) in item.evaluationQuestion">{{ el }}</view>
            </view>
            <view class="weather-box" v-if="item.weatherInfo">
                <weather-card :historyTime="item.weatherInfo.historyTime" :weatherToday="item.weatherInfo.weatherToday" :weatherWeek="item.weatherInfo.weatherWeek"></weather-card>
            </view>
            <view class="btns" v-if="item.officialGuide&&item.officialGuideType==2&&item.type==0">
                <view class="speakBtn" @click="exclusiveStrategy(item)">{{ $root.m9 }}</view>
            </view>
            <view class="history-line" v-if="item.historyLine||item.nomoreLine">{{ (item.nomoreLine?$root.m10:$root.m11) }}</view>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          name: "chat-item",
          components: {
            zeroMarkdownView: function() {
              i.e("union/components1/components/zero-markdown-view/zero-markdown-view").then(function() {
                return resolve(i("dd9a"))
              }.bind(null, i)).catch(i.oe)
            },
            xjtuTextCard: function() {
              i.e("union/components/xjtuTextCard").then(function() {
                return resolve(i("afdb"))
              }.bind(null, i)).catch(i.oe)
            },
            weatherCard: function() {
              i.e("union/components/weatherCard").then(function() {
                return resolve(i("c63ea"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          props: {
            item: {
              type: Object,
              default: function() {
                return {
                  time: "",
                  icon: "",
                  name: "",
                  content: "",
                  isMe: !1
                }
              }
            },
            pushingProgress: {
              type: Boolean,
              default: function() {
                return !1
              }
            },
            dataList: {
              type: Array,
              default: function() {
                return []
              }
            },
            newVal: {
              type: String,
              default: function() {
                return ""
              }
            },
            showComment: {
              type: Boolean,
              default: function() {
                return !1
              }
            },
            teamType: {
              type: String,
              default: function() {
                return "1"
              }
            },
            likeSave: {
              type: Boolean,
              default: function() {
                return !1
              }
            }
          },
          data: function() {
            return {
              imgStarted: !1,
              imgCompleted: !1,
              imgContent: "",
              imgArray: [],
              countInfos: "",
              index: 0,
              timer: null,
              itemContentCopy: "",
              itemContentIndex: 0,
              displayText: "",
              showMore: !1,
              isSubmiting: !1,
              commentType: 0,
              userLogo: "",
              like: !1,
              collection: !1
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          mounted: function() {
            this.displayText = "", this.index = 0
          },
          watch: {
            showComment: function(e, t) {
              console.log(e, t, "newVal,oldVal"), e !== t && this.$forceUpdate()
            },
            likeSave: {
              handler: function(e, t) {
                this.like = e, this.collection = e
              },
              deep: !0,
              immediate: !0
            }
          },
          created: function() {},
          methods: {
            isRetryFun: function() {
              this.$emit("isRetryBack")
            },
            itemContent: function() {
              var e = this;
              if (!this.item.content) return this.displayText = "", void(this.index = 0);
              var t = setInterval((function() {
                e.index < e.item.content.length ? (e.displayText += e.item.content.charAt(e.index), e.index++) : clearInterval(t)
              }), 50)
            },
            resetTravel: function() {
              console.log(this.item.redirectContent, "this.item.redirectContent"), this.$emit("resetTravel", this.item.redirectContent)
            },
            gotoToilet: function(t) {
              uni.openLocation({
                latitude: +t.location.split(",")[1],
                longitude: +t.location.split(",")[0],
                name: t.name,
                success: function() {
                  console.log("success")
                },
                fail: function(e) {
                  console.log(e, "res")
                }
              })
            },
            callPhone: function() {
              var t = this;
              if (this.item.spotPhone && this.item.spotPhone.phoneNumbers && 0 !== this.item.spotPhone.phoneNumbers.length) {
                var i = this.item.spotPhone.phoneNumbers;
                1 === i.length ? uni.makePhoneCall(i[0]) : uni.showActionSheet({
                  itemList: i,
                  success: function(e) {
                    var n = i[e.tapIndex];
                    uni.makePhoneCall(n)
                  },
                  fail: function(e) {
                    console.log("用户取消选择电话")
                  }
                })
              } else this.$uni.showToast(this.$t("chatItem.noPhoneNumber"))
            },
            makePhoneCall: function(t) {
              uni.makePhoneCall({
                phoneNumber: t
              })
            },
            changePlan: function() {
              this.$emit("resetTravel", this.item.changeAnswer)
            },
            scenicDetails: function(e) {
              this.pushingProgress ? this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + e.id
              }) : this.$uni.showToast(this.$t("chatItem.pleaseWait"))
            },
            routeDetails: function(t) {
              this.pushingProgress ? uni.navigateTo({
                url: "/subPage/pages/lineInfo/lineInfo?lineId=" + t
              }) : this.$uni.showToast(this.$t("chatItem.pleaseWait"))
            },
            goLine: function(t) {
              this.pushingProgress ? uni.navigateTo({
                url: "/union/pages/ai/strategyGuide?lineId=" + t
              }) : this.$uni.showToast(this.$t("chatItem.pleaseWait"))
            },
            jumpToMap: function() {
              this.item.longitude && this.item.latitude ? uni.openLocation({
                latitude: Number(this.item.latitude),
                longitude: Number(this.item.longitude),
                name: this.item.title,
                success: function() {}
              }) : this.$uni.showToast(this.$t("chatItem.addressFailed"))
            },
            getExplain: function() {
              this.$emit("explain")
            },
            exclusiveStrategy: function(e) {
              this.pushingProgress ? this.$emit("exclusive", e) : this.$uni.showToast(this.$t("chatItem.pleaseWait"))
            },
            askAgain: function(e) {
              this.pushingProgress ? ("1" == this.teamType ? this.$eventAnalyse.analyse({
                eventTag: "ai_recommend_click",
                eventName: "小七点击回答推荐问题",
                eventParams: {
                  msg: e
                }
              }) : this.$eventAnalyse.analyse({
                eventTag: "ai_recommendTeam_click",
                eventName: "团队小七点击回答推荐问题",
                eventParams: {
                  msg: e
                }
              }), this.$emit("askAgain", e)) : this.$uni.showToast(this.$t("chatItem.pleaseWait"))
            },
            goLineView: function() {
              uni.navigateTo({
                url: "/union/pages/ai/strategyGuide?lineId=1734121312503611394"
              })
            },
            getTagData: function(e) {
              return e ? e.split(",") : []
            },
            gotoVideo: function(e) {
              e && "string" == typeof e ? this.$emit("playVideo", e) : this.$uni.showToast("视频地址无效")
            },
            showPic: function(t) {
              var i = [t.data.url];
              uni.previewImage({
                urls: i
              })
            },
            downloadFile: function(e) {},
            goodComment: function() {
              var e = this;
              if (this.$util.isLogin()) {
                if (this.isSubmiting) return;
                "1" == this.teamType ? this.$eventAnalyse.analyse({
                  eventTag: "ai_good_comment_click",
                  eventName: "点赞按钮点击",
                  eventParams: {
                    roundId: this.item.roundId || "",
                    link: this.link
                  }
                }) : this.$eventAnalyse.analyse({
                  eventTag: "ai_good_commentTeam_click",
                  eventName: "团队对话点赞按钮点击",
                  eventParams: {
                    roundId: this.item.roundId || "",
                    like: this.like
                  }
                }), this.isSubmiting = !0, setTimeout((function() {
                  e.isSubmiting = !1
                }), 1e3);
                var t = this.like ? "ai/app/qa/like/unlike?roundId=" : "ai/app/qa/like/like?roundId=";
                this.$uniApi.dataRequestYesLoading("POST", t + this.item.roundId, {
                  roundId: this.item.roundId
                }, "加载中...").then((function(t) {
                  1 === t.code ? (e.like = !e.like, e.$uni.showToast(e.like ? e.$t("chatItem.thankYouForFeedback") : e.$t("chatItem.cancelLikeSuccess"))) : e.$uni.showToast(t.msg)
                }))
              }
            },
            badComment: function() {
              var e = this;
              if (this.$util.isLogin()) {
                if (this.isSubmiting) return;
                "1" == this.teamType ? this.$eventAnalyse.analyse({
                  eventTag: "ai_bad_comment_click",
                  eventName: "收藏按钮点击",
                  eventParams: {
                    roundId: this.item.roundId || "",
                    collection: this.collection
                  }
                }) : this.$eventAnalyse.analyse({
                  eventTag: "ai_bad_commentTeam_click",
                  eventName: "团队对话收藏按钮点击",
                  eventParams: {
                    roundId: this.item.roundId || "",
                    collection: this.collection
                  }
                }), this.isSubmiting = !0, setTimeout((function() {
                  e.isSubmiting = !1
                }), 1e3);
                var t = this.collection ? "ai/app/qa/collect/uncollect?roundId=" : "ai/app/qa/collect/collect?roundId=";
                this.$uniApi.dataRequestYesLoading("POST", t + this.item.roundId, {
                  roundId: this.item.roundId
                }, "加载中...").then((function(t) {
                  1 === t.code ? (e.collection = !e.collection, e.$uni.showToast(e.collection ? e.$t("chatItem.collectSuccess") : e.$t("chatItem.cancelCollectSuccess")), e.$emit("badCommentFun")) : e.$uni.showToast(t.msg)
                }))
              }
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.chat-item{display:-webkit-flex;display:flex;flex-direction:column;padding:20rpx}.chat-time{color:#aaa;font-size:22rpx;padding:4rpx 0rpx;text-align:center}.chat-container{display:-webkit-flex;display:flex;flex-direction:row}.chat-location-me{flex-direction:row-reverse;text-align:right}.chat-icon-container{margin-top:12rpx}.chat-icon{background-color:#eee;border-radius:50%;height:58rpx;width:58rpx}.chat-content-container{margin:0rpx 15rpx 40rpx;width:100%}.chat-user-name{color:#888;font-size:26rpx}.chat-text-container{background-color:#fff;border-radius:16rpx;margin-top:10rpx;max-width:calc(100% - 30rpx);padding:16rpx 30rpx;text-align:left}.pop-in{animation:bubblePopIn .3s ease-out;cursor:pointer;transform-origin:bottom left;transition:-webkit-transform .1s ease;transition:transform .1s ease;transition:transform .1s ease,-webkit-transform .1s ease}@-webkit-keyframes bubblePopIn{0%{opacity:0;transform:scale(.3) translateY(20rpx)}50%{transform:scale(1.1) translateY(-5rpx)}100%{opacity:1;transform:scale(1) translateY(0)}}@keyframes bubblePopIn{0%{opacity:0;transform:scale(.3) translateY(20rpx)}50%{transform:scale(1.1) translateY(-5rpx)}100%{opacity:1;transform:scale(1) translateY(0)}}.chat-text-container-me{background:linear-gradient(78deg,#6585fa,#6ad5fe);border:2rpx solid #fff;border-radius:40rpx 40rpx 8rpx 40rpx;box-shadow:0rpx 8rpx 16rpx 0rpx rgba(0,0,0,.05);padding:20rpx 32rpx;transform-origin:bottom right}.chat-text-container-no{background:#fff;border:2rpx solid #fff;border-radius:40rpx 40rpx 40rpx 4rpx;box-shadow:0rpx 8rpx 16rpx 0rpx rgba(0,0,0,.05);padding:24rpx 32rpx;transform-origin:bottom left}.chat-text-container-super{flex-direction:row;position:relative;width:auto}.chat-text-container-super,.evaluationQuestion{display:-webkit-flex;display:flex;flex-wrap:wrap}.evaluationQuestion{align-items:center;margin-top:20rpx;width:100%}.evaluationQuestion .evaluationItem{background:rgba(0,0,0,.04);border-radius:16rpx 32rpx 16rpx 32rpx;color:rgba(0,0,0,.65);font-size:26rpx;line-height:52rpx;margin-right:16rpx;padding:0 16rpx}.weather-box{margin-top:16rpx;width:calc(100% - 30rpx)}.comment,.weather-box{border-radius:40rpx 40rpx 40rpx 40rpx}.comment{display:inline-block;margin-top:24rpx;width:auto}.comment .good{display:inline-block;padding:0 12rpx}.comment .good image{height:40rpx;width:40rpx}.comment .bad{display:inline-block;padding:0 12rpx}.comment .bad image{height:40rpx;width:40rpx}.chat-text{font-size:28rpx;word-break:break-all}.chat-text-me{color:#fff;font-size:28rpx;line-height:48rpx;text-shadow:0 2px 4px rgba(0,0,0,.2)}.img{max-width:500rpx}.bubble{width:100%}.bubble .iconfont{font-size:42rpx;margin-right:8rpx}.good{display:inline-block;padding:0 12rpx}.good image{height:40rpx;width:40rpx}.chat-text-container .bubble,.chat-text-container .bubble .iconfont{color:#333}.chat-text-container-me .bubble,.chat-text-container-me .bubble .iconfont{color:#fff}.cursor{animation:blink .7s step-end infinite;display:inline-block;font-size:16px;margin-right:5px}@-webkit-keyframes blink{from,to{opacity:0}50%{opacity:1}}@keyframes blink{from,to{opacity:0}50%{opacity:1}}.card-item{background-color:#fff;border-radius:40rpx 40rpx 40rpx 40rpx;box-sizing:border-box;height:490rpx;overflow:hidden;padding:28rpx;white-space:nowrap;width:100%}.card-item .card-item-box{display:inline-block;margin-right:20rpx;width:372rpx}.card-item .card-type{background:#8666fd;border-radius:20rpx 20rpx 40rpx 20rpx;box-shadow:0rpx 4rpx 4rpx 0rpx rgba(0,0,0,.1);color:#fff;padding:8rpx 20rpx;position:absolute}.card-item .card-image{border-radius:20rpx 20rpx 20rpx 20rpx;height:282rpx;margin-bottom:30rpx;width:372rpx}.card-item .card-name{color:#606060;font-size:28rpx;font-weight:400;line-height:33rpx;margin-bottom:20rpx}.card-item .card-name,.card-item .card-price{font-family:Source Han Sans SC;font-style:normal;text-align:left;text-transform:none}.card-item .card-price{color:#fd6403;font-size:32rpx;font-weight:700;line-height:38rpx;margin-top:14rpx}.card-item .tag-item-box{margin-bottom:20rpx}.card-item .tag-item{border:1rpx solid #8d7c51;border-radius:20rpx 20rpx 20rpx 20rpx;color:#8d7c51;display:inline-block;font-family:Source Han Sans SC;font-size:22rpx;font-style:normal;font-weight:400;height:34rpx;line-height:34rpx;margin-right:10rpx;overflow:hidden;padding:0 8rpx;text-align:left;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;width:30%}.card-item .card-item-count{border-radius:40rpx 40rpx 40rpx 40rpx;display:-webkit-inline-flex;display:inline-flex}.official-box{margin-top:30rpx}.official-box .official-item{background-color:#fff;border-radius:20rpx 20rpx 20rpx 20rpx;display:-webkit-flex;display:flex;height:230rpx;margin-top:46rpx;position:relative}.official-box .official-item .official-img{border-radius:10rpx 30rpx 20rpx 20rpx;box-shadow:6rpx 0rpx 0rpx 0rpx rgba(0,0,0,.15),12rpx 0rpx 0rpx 0rpx rgba(0,0,0,.05);height:250rpx;position:relative;top:-20rpx;width:200rpx}.official-box .official-item .official-r{display:-webkit-flex;display:flex;flex-direction:column;justify-content:space-between;padding:30rpx 20rpx;width:calc(100% - 200rpx)}.official-box .official-item .official-r .official-title{-webkit-box-orient:vertical;-webkit-line-clamp:2;color:rgba(0,0,0,.8);display:-webkit-box;font-family:Source Han Sans SC;font-size:28rpx;font-style:normal;font-weight:400;height:85rpx;line-height:35rpx;margin-bottom:12rpx;overflow:hidden;text-align:left;text-overflow:ellipsis;text-transform:none;width:100%}.official-box .official-item .official-r .official-tag{margin-bottom:14rpx;white-space:nowrap}.official-box .official-item .official-r .official-tag .official-tag-item{border:1rpx solid #8d7c51;border-radius:20rpx 20rpx 20rpx 20rpx;color:#8d7c51;display:inline-block;font-family:Source Han Sans SC;font-size:22rpx;font-style:normal;font-weight:400;height:34rpx;line-height:34rpx;margin-right:10rpx;overflow:hidden;padding:0 8rpx;text-align:left;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;width:30%}.official-box .official-item .official-r .official-desc{color:rgba(0,0,0,.5);font-family:Source Han Sans SC;font-size:24rpx;font-style:normal;font-weight:400;line-height:28rpx;margin-top:14rpx;text-align:left;text-transform:none}.chat-text-expand{background:#dee9fb;border-radius:32rpx 32rpx 32rpx 32rpx;margin-top:24rpx;padding:24rpx}.chat-text-expand .guide{display:-webkit-flex;display:flex;justify-content:space-between}.chat-text-expand .guide .left{align-items:center;color:#1c1c1c;display:-webkit-flex;display:flex;font-size:28rpx}.chat-text-expand .guide .left .headImg{height:40rpx;margin-right:20rpx;width:40rpx}.chat-text-expand .guide .left .finger{height:48rpx;width:48rpx}.chat-text-expand .guide .right{align-items:center;color:#606060;display:-webkit-flex;display:flex;font-size:26rpx;line-height:30rpx}.chat-text-expand .guide .right image{height:44rpx;margin-left:4rpx;width:44rpx}.chat-text-expand .questionBox{border-radius:40rpx 40rpx 40rpx 40rpx;padding:28rpx}.chat-text-expand .questionBox .item{align-items:center;background:hsla(0,0%,100%,.7);border-radius:60rpx 60rpx 60rpx 60rpx;color:#000;display:-webkit-flex;display:flex;font-size:26rpx;justify-content:space-between;margin-bottom:20rpx;padding:24rpx 20rpx;width:100%}.chat-text-expand .questionBox .item image{height:28rpx;width:28rpx}.btns{margin-top:20rpx}.btns,.btns .speakBtn{display:-webkit-flex;display:flex}.btns .speakBtn{align-items:center;background:linear-gradient(97deg,#956a38,#171512);border:2rpx solid #fff0e9;border-radius:60rpx 60rpx 60rpx 60rpx;color:#fff;font-size:26rpx;height:72rpx;justify-content:center;margin-right:20rpx;padding:0 40rpx}.btns .speakBtn .icon{height:30rpx;margin-right:4rpx;width:28rpx}.btns .guideBtn{align-items:center;background:rgba(177,99,10,.3);border:2rpx solid #fff;border-radius:40rpx 40rpx 40rpx 40rpx;color:#555;display:-webkit-flex;display:flex;font-size:26rpx;height:72rpx;justify-content:center;padding:0 40rpx}.btns .guideBtn .icon{height:30rpx;margin-right:4rpx;width:30rpx}.history-line{color:#bdbdbd;font-size:20rpx;overflow:hidden;position:relative;text-align:center;width:100%}.history-line::after,.history-line::before{background:#bdbdbd;content:"";display:inline-block;height:1rpx;position:absolute;top:50%;width:100%}.history-line::before{margin-left:-20rpx;transform:translateX(-100%)}.history-line::after{margin-left:20rpx}.text-desc{color:#333;font-family:Source Han Sans SC;font-size:26rpx;font-style:normal;font-weight:400;line-height:30rpx;text-align:left;text-transform:none}.lined-link{color:#6a82ff;margin-top:30rpx;padding:0 30rpx;text-decoration:underline}.spotPhone{min-width:500rpx;position:relative}.spotPhone .spotName{font-weight:700}.spotPhone .spotName,.spotPhone .spotPhone{color:rgba(0,0,0,.85);font-size:28rpx;line-height:48rpx}.spotPhone .spotPhone{margin-top:16rpx}.spotPhone .callBtn{background:url('https://eshopfile.zhiyousx.com/175515731852017170.png')no-repeat;background-size:100% 100%;bottom:0rpx;height:100rpx;position:absolute;right:-10rpx;width:100rpx}.evaluation .title{color:rgba(0,0,0,.85);font-size:28rpx;font-weight:700;line-height:48rpx;text-align:left}.evaluation .scoreCard{align-content:center;background:linear-gradient(180deg,rgba(155,129,255,.2),rgba(217,207,255,.2));border-radius:8rpx 40rpx 40rpx 40rpx;box-shadow:0rpx 8rpx 16rpx 0rpx rgba(0,0,0,.05);display:-webkit-flex;display:flex;height:226rpx;justify-content:space-between;margin:16rpx 0 32rpx;padding:16rpx 32rpx;width:100%}.evaluation .scoreCard .score{color:rgba(0,0,0,.85);font-size:40rpx}.evaluation .scoreCard .map{background:rgba(0,0,0,.03);border-radius:16rpx 16rpx 16rpx 16rpx;height:194rpx;width:326rpx}.evaluation .scoreCard .btn{background:linear-gradient(90deg,#806bff,#bc41f5);border-radius:60rpx 60rpx 60rpx 60rpx;box-shadow:0rpx 8rpx 8rpx 0rpx rgba(128,86,255,.3);height:40rpx;width:40rpx}.evaluation .videoScroll{margin-top:16rpx;overflow:auto;width:100%}.evaluation .videoScroll .video-item{background:rgba(0,0,0,.03);border-radius:16rpx 16rpx 16rpx 16rpx;display:inline-block;height:124rpx;margin-right:16rpx;vertical-align:bottom;width:184rpx}.toilet{border-top:2rpx solid rgba(0,0,0,.04);margin-top:16rpx;padding-top:32rpx}.toilet .toilet-title{color:rgba(0,0,0,.85);font-size:28rpx;font-weight:700;line-height:48rpx;text-align:left}.toilet .toilet-item{background:hsla(0,0%,100%,.5);border-radius:24rpx 24rpx 24rpx 24rpx;height:118rpx;justify-content:space-between;margin-top:16rpx;padding:16rpx 8rpx;width:100%}.toilet .toilet-item,.toilet .toilet-item .toilet-item-left{align-items:center;display:-webkit-flex;display:flex}.toilet .toilet-item .toilet-item-left .toilet-item-left-default,.toilet .toilet-item .toilet-item-left .toilet-item-left-img{border-radius:16rpx 16rpx 16rpx 16rpx;height:96rpx;margin-right:16rpx;width:96rpx}.toilet .toilet-item .toilet-item-left .toilet-item-left-default{background:#f2f2f2}.toilet .toilet-item .toilet-item-left .toilet-item-left-default image{border-radius:16rpx 16rpx 16rpx 16rpx;height:100%;width:100%}.toilet .toilet-item .toilet-item-left .toilet-item-left-title .name{color:rgba(0,0,0,.85);font-size:28rpx;line-height:48rpx;text-align:left;width:300rpx}.toilet .toilet-item .toilet-item-left .toilet-item-left-title .address{color:rgba(0,0,0,.45);font-size:24rpx;line-height:32rpx;margin-top:4rpx;width:300rpx}.toilet .toilet-item .toilet-item-right,.toilet .toilet-item .toilet-item-right .toilet-item-right-guide{align-items:center;display:-webkit-flex;display:flex}.toilet .toilet-item .toilet-item-right .toilet-item-right-guide{flex-direction:column;justify-content:center}.toilet .toilet-item .toilet-item-right .toilet-item-right-guide .txt{color:#8666fd;font-size:28rpx;line-height:38rpx}.toilet .toilet-item .toilet-item-right .toilet-item-right-guide .distance{align-items:center;color:rgba(0,0,0,.85);display:-webkit-flex;display:flex;font-size:24rpx;line-height:32rpx;margin-top:16rpx}.toilet .toilet-item .toilet-item-right .toilet-item-right-guide .distance .distance-icon{height:24rpx;margin-right:4rpx;width:24rpx}.toilet .toilet-item .toilet-item-right .toilet-item-right-icon{height:32rpx;margin-left:16rpx;width:32rpx}.loading-box{color:#606060;font-size:28rpx;justify-content:center;margin:0 20rpx}.loading-box,.loading-box .loading{align-items:center;display:-webkit-flex;display:flex}.loading-box .loading{justify-content:space-around;margin-left:10rpx;width:80rpx}.loading-box .pot{animation-delay:0s;animation-duration:1.2s;animation-iteration-count:infinite;animation-name:loading-beat;border-radius:50%;display:inline-block;height:8rpx;margin-right:5rpx;width:8rpx}.loading-box .pot:nth-child(1){background:#8666fd}.loading-box .pot:nth-child(2){animation-delay:.2s;background:#8666fd}.loading-box .pot:nth-child(3){animation-delay:.4s;background:#8666fd}@-webkit-keyframes loading-beat{0%{transform:scale(1)}50%{transform:scale(1.8)}100%{transform:scale(1)}}@keyframes loading-beat{0%{transform:scale(1)}50%{transform:scale(1.8)}100%{transform:scale(1)}}.travelBtn{align-items:center;background:linear-gradient(90deg,#ad97ff,#d988ff 100%);border-radius:60rpx 60rpx 60rpx 60rpx;box-shadow:4rpx 4rpx 4rpx 0rpx rgba(0,0,0,.1);color:#fff;display:-webkit-flex;display:flex;font-size:28rpx;height:60rpx;justify-content:center;margin-top:20rpx;width:250rpx}.travelBtn .ai{height:30rpx;margin-right:6rpx;width:34rpx}.travelBtn .icon{height:30rpx;margin-left:4rpx;width:18rpx}.text-warp{color:#4e514f;font-family:Source Han Sans SC;font-size:28rpx;font-style:normal;font-weight:400;line-height:40rpx;text-align:left;text-transform:none;white-space:pre-wrap}.more-box{color:#f6b27c;margin-top:24rpx;text-align:right}.start-flage{color:#a0a0a0;font-size:24rpx;margin-left:8rpx}.icon-user{border-radius:50%;height:50rpx;position:absolute;width:50rpx}.good{right:0rpx;top:-16rpx}.bad{left:0rpx;top:-16rpx}.bads,.goods{padding:0!important}
</style>
