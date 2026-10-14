<template>
<view class="page-box">
    <uni-navbar class="" title=" " type="transparentFixed" v-if="isFromHistoryList"></uni-navbar>
    <uni-navbar class="" title=" " type="transparentFixed" :vueSlots="['transparentFixedLeft']" v-else>
        <view class="" slot="transparentFixedLeft">
            <view class="home-btn" @click="goHome($event)">
                <image class="home-icon" src="/static/zhouWei-navBar/icon_home_black.png"></image>
            </view>
        </view>
    </uni-navbar>
    <view class="topBtns" :style="'top:'+capsuleHeight+10+'px'+';'">
        <view class="editBtn btn1" v-if="!isShare" @click="goEditPage($event)"></view>
        <view class="historyBtn btn1" @click="goHistoryList($event)"></view>
    </view>
    <view class="bottomBtns">
        <view class="topBtn" style="margin-right:20rpx;" @click="generateAiGuide($event)">生成AI攻略长图</view>
        <view class="topBtn" @click="getCardTop($event)">{{dataList[0]&&isCardTop?'取消置顶':'置顶行程'}}</view>
    </view>
    <view class="lineMap">
        <map class=" vue-ref" ref="map" :enableBuilding="true" :enablePoi="true" :enableRotate="true" :enableScroll="true" :enableZoom="true" id="map" :latitude="map.latitude" layerStyle="1" :longitude="map.longitude" :markers="markers" :polyline="polyline" :scale="map.scale" :style="'width:100%;height:100%;'+'pointer-events:'+(isShowDetail?'none':'auto')+';'" :subkey="subkey" @callouttap="onMarkerTap($event)"></map>
        <view class="loading" v-if="mapLoading">
            <view class="img_box">
                <image class="loading_img" src="/static/captured/79cac93e03941197.gif"></image>
            </view>
        </view>
    </view>
    <view @touchend.:stop="blockEvent" @touchmove.stop.prevent="" @touchstart.:stop="blockEvent" class="page-content" :style="'bottom:'+(isShowDetail?0:'-15vh')+';'">
        <view class="fixed-header vue-ref" ref="fixedHeader" @touchstart="headerTouchStart($event)" @touchmove.stop="($event)" @touchend="headerTouchEnd($event)">
            <view class="line1">
                <view class="line1-left" v-if="dataList">{{'共'+$root.g0+'天 | '+$root.g1+'个行程'}}</view>
                <view class="line1-right" style="border:2rpx solid #8666FD;padding:0 20rpx;" v-if="$root.g2" @click="showInvitePopup($event)">邀请好友共创</view>
                <view class="line1-right" v-if="$root.g3" @click="showInvitePopup($event)">
                    <view class="avatar-group">
                        <image class="avatar-img" :src="item.avatarUrl" :style="'z-index:'+3-index+';'" :key="index" v-for="(item, index) in $root.l0"></image>
                        <image class="avatar-img" src="https://eshopfile.zhiyousx.com/175749781153832280.png"></image>
                    </view>
                </view>
            </view>
            <view class="line2" v-if="dataList&&dataList[0]">{{ (dataList[0].travelTitle?dataList[0].travelTitle:dataList[0].city+$root.g4+'天旅行计划') }}</view>
            <view class="line3">
                <view :class="['tabs','',currentTab===0?'active':'']" @click="changeTab(0)">总览</view>
                <view :class="['tabs','',currentTab===1?'active':'']" @click="changeTab(1)">路线</view>
                <view :class="['tabs','',currentTab===2?'active':'']" @click="changeTab(2)">预算</view>
                <view :class="['tabs','',currentTab===3?'active':'']" @click="changeTab(3)">本地人说</view>
            </view>
        </view>
        <scroll-view class="scroll-content" :scrollTop="insideScrollTop" :scrollY="true" :style="'height:'+'calc('+'80vh - '+headerHeight+'px)'+';'" @touchstart="touchStart($event)" @touchend="touchEnd($event)" @scroll="handleScroll($event)" @scrolltolower="scrolltolower($event)">
            <view class="" id="contentBox" :style="'min-height:'+'calc('+'80vh - '+headerHeight-1+'px)'+';'">
                <view class="overview" :hidden="!(currentTab===0)">
                    <view class="lineDay" :key="index" v-for="(obj, index) in $root.l1">
                        <view class="day-title">
                            <text class="">{{'DAY'+index+1}}</text>
                        </view>
                        <view class="day-content" v-if="obj.g5">
                            <view class="left">
                                <text class="">{{obj.m0}}</text>
                            </view>
                            <image class="right-img" src="https://eshopfile.zhiyousx.com/175678052598670074.png"></image>
                        </view>
                    </view>
                </view>
                <view class="lineList" v-if="currentTab===1">
                    <view class="lineDay" :key="index" v-for="(obj, index) in $root.l3">
                        <view class="day-title" :id="'dayTitle'+index">
                            <text class="">{{'DAY'+index+1}}</text>
                        </view>
                        <view class="day-content" v-if="obj.g6">
                            <view class="cardBox" :key="id" v-for="(it, __i0__) in obj.l2">
                                <view class="cardBox-top">
                                    <view class="card-left" :style="'background:'+'url('+(it.pictureUrl[0]?it.pictureUrl[0]:'https://eshopfile.zhiyousx.com/175695850936006689.png')+') no-repeat center center / cover'+';'"></view>
                                    <view class="card-right">
                                        <view class="card-right-title">{{ it.name }}<image class="" :src="it.m1"></image>
                                        </view>
                                        <view class="card-right-time" v-if="it.timeSlot">
                                            <image class="" src="https://eshopfile.zhiyousx.com/175680025446541259.png"></image>{{ it.timeSlot }}</view>
                                        <view class="card-right-detail" v-if="it.reason||it.price">
                                            <view class="content">
                                                <image class="" src="https://eshopfile.zhiyousx.com/175680058086856766.png"></image>
                                                <text class="">{{'人均:'+it.price+'元'+('，'+it.reason||'')}}</text>
                                            </view>
                                        </view>
                                    </view>
                                    <image class="goIcon" src="https://eshopfile.zhiyousx.com/175678052598670074.png" v-if="it.scenicId"></image>
                                </view>
                                <view class="couponbox" v-if="it.coupon" @click="goCoupon()">
                                    <view class="coupon-text">{{'已补贴'+it.coupon+'元'}}</view>
                                    <view class="coupon-btn">立即预订</view>
                                </view>
                                <image class="couponIcon" src="https://eshopfile.zhiyousx.com/175835069876974683.png" v-if="it.coupon"></image>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="localSay" v-if="currentTab===2">
                    <view class="content" space="nbsp" style="margin-bottom:20rpx;" userSelect="true">
                        <zero-markdown-view class="" :markdown="budgetItems"></zero-markdown-view>
                        <zero-markdown-view class="" :markdown="tipsContent"></zero-markdown-view>
                    </view>
                </view>
                <view class="localSay" v-if="currentTab===3">
                    <view class="content" space="nbsp" style="margin-bottom:20rpx;" userSelect="true" :key="index" v-for="(txt, index) in dataList[0].localsAdvice">
                        <zero-markdown-view class="" :markdown="txt"></zero-markdown-view>
                    </view>
                </view>
                <view class="bottom" :style="'height:'+(isShowDetail?'10vh':'25vh')+';'+'transition:'+'.5s'+';'"></view>
            </view>
        </scroll-view>
    </view>
    <uni-popup class=" vue-ref" ref="invitePopup" type="bottom" :vueSlots="['default']">
        <view class="invite-popup">
            <view class="invite-title">邀请好友共同编辑行程</view>
            <view class="invite-content">
                <view class="invite-subtitle">已加入好友：</view>
                <scroll-view class="friends-list" :scrollY="true">
                    <view class="friends-grid" v-if="$root.g7>0">
                        <view class="friend-item" :key="index" v-for="(friend, index) in invitedFriends">
                            <image class="friend-avatarUrl" :src="friend.avatarUrl"></image>
                            <text class="friend-name">{{friend.name}}</text>
                        </view>
                    </view>
                    <view class="empty-friends" v-else>
                        <text class="empty-text">暂无加入好友</text>
                        <text class="empty-desc">好友参与编辑后将出现在这里</text>
                    </view>
                </scroll-view>
            </view>
            <view class="invite-footer">
                <view class="msg">
                    <image class="msg-icon" src="https://eshopfile.zhiyousx.com/175747243556313621.png"></image>
                    <view class="msg-text">最后保存的版本会直接覆盖之前的所有编辑内容，且无法恢复之前的版本。</view>
                </view>
                <button class="share-btn" hoverClass="none" hoverStayTime="0" openType="share" @click="shareToChat($event)">分享至聊天</button>
            </view>
        </view>
    </uni-popup>
    <uni-popup class=" vue-ref" ref="feedbackDrawer" type="bottom" :vueSlots="['default']" @change="handleChange()">
        <view class="drawer-content" :style="'padding-bottom:'+(keyboardHeight?keyboardHeight+'px':'')+';'">
            <view class="">
                <view class="drawer-title">本次攻略推荐的内容对您有帮助吗?<image class="btn" :src="star>0?'https://eshopfile.zhiyousx.com/175758343779519665.png':'https://eshopfile.zhiyousx.com/175254389842185569.png'" @click="submitComment($event)"></image>
                </view>
                <view class="star-row">
                    <u-rate activeColor="#D988FF" allowHalf="false" class=" vue-ref" :count="5" ref="rate" gutter="40" inactiveColor="#D9D9D9" size="60" v-if="showRate" @change="changeStar()"></u-rate>
                    <view class="starName">{{$root.f0}}</view>
                </view>
            </view>
            <view class="" style="width:100%;position:relative;" v-if="star>0">
                <textarea :adjustPosition="false" class="drawer-input" maxlength="300" placeholder="请输入您的评价" style="max-height:400rpx;overflow-y:auto;" :value="comment" @input="comment = $event"></textarea>
                <text class="fontNum">{{$root.g8+' / 300'}}</text>
            </view>
        </view>
    </uni-popup>
    <uni-popup class=" vue-ref" ref="giftEnterPopup" :maskClick="false" type="center" :vueSlots="['default']">
        <view class="share-popup">
            <image class="gift-enter-image" mode="widthFix" src="https://eshopfile.zhiyousx.com/175827608830675583.png" @click="goGiftEnter($event)"></image>
            <image class="gift-close-image" mode="widthFix" src="https://eshopfile.zhiyousx.com/175827584521593665.png" @click="closeGiftEnter($event)"></image>
        </view>
    </uni-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          name: "cardPage",
          components: {
            zeroMarkdownView: function() {
              i.e("union/components1/components/zero-markdown-view/zero-markdown-view").then(function() {
                return resolve(i("dd9a"))
              }.bind(null, i)).catch(i.oe)
            },
            uRate: function() {
              i.e("uview-ui/components/u-rate/u-rate").then(function() {
                return resolve(i("ce4c"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          filters: {
            starFilter: function(t) {
              return ["", "完全没用", "一般", "还行", "有用", "十分有用"][t]
            }
          },
          data: function() {
            return {
              sessionId: "",
              dataList: [],
              subkey: "U4JBZ-K7XW4-GH2UA-KVPJK-OLCYV-7WB3D",
              map: {
                longitude: "108.939621",
                latitude: "34.343147",
                scale: 14
              },
              polyline: [],
              markers: [],
              isShowDetail: !0,
              currentTab: 0,
              insideScrollTop: .1,
              headerHeight: 0,
              isFirstLoad: !0,
              fEleTop: 0,
              fEleTopNow: 0,
              fEleBottom: 0,
              fEleBottomNow: 0,
              headerTouchStartX: 0,
              headerTouchStartY: 0,
              touchStartX: 0,
              touchStartY: 0,
              mapLoading: !1,
              _mapContext: null,
              showLineList: !0,
              capsuleHeight: 0,
              statusBarHeight: 0,
              currentMapDayIndex: -1,
              scrollDetectTimer: null,
              isCardTopLoading: !1,
              isCardTop: !1,
              budgetItems: "",
              tipsContent: "",
              invitedFriends: [],
              isShare: !1,
              shareType: 0,
              guideImageUrl: "",
              feedbackStatus: "",
              feedbackReason: "",
              drawerTriggered: !0,
              star: 0,
              showInput: !1,
              comment: "",
              showThanks: !1,
              forbiddenPop: !1,
              showRate: !0,
              keyboardHeight: 0,
              lastScrollTop: 0,
              scrollViewHeight: 0,
              isFromHistoryList: !1,
              isHide: !1,
              goGift: !1
            }
          },
          onLoad: function(t) {
            t.scene ? this.sessionId = t.scene : this.sessionId = t.sessionId, this.getLineCard(), this.getCapsuleInfo(), this.getGiftEnter(), this.isShare = t.type && "share" === t.type || t.scene, this.isFromHistoryList = t.source && "historyList" === t.source, this.getComment()
          },
          mounted: function() {
            var e = this;
            this.$nextTick((function() {
              uni.createSelectorQuery().in(e).select(".scroll-content").boundingClientRect((function(t) {
                t && (e.scrollViewHeight = t.height)
              })).exec()
            })), t.onKeyboardHeightChange((function(t) {
              e.keyboardHeight = t.height > 0 ? t.height : 0
            }))
          },
          onShow: function() {
            this.isHide && (this.isHide = !1, this.getLineCardIsTop()), this.goGift && (this.goGift = !1, uni.showToast({
              title: "可以点击左上角按钮返回小七首页进行查看领取！",
              icon: "none",
              duration: 3e3
            }))
          },
          onHide: function() {
            this.isHide = !0
          },
          onShareAppMessage: function() {
            var t = {};
            return 1 === this.shareType ? (t = this.getShareConfig(), this.shareType = 0) : (this.$eventAnalyse.analyse({
              eventTag: "aiTravel_cardShare_click",
              eventName: "旅行搭子卡片点击分享",
              eventParams: JSON.stringify({
                sessionId: this.sessionId
              })
            }), t = {
              href: "/union/pages/aiTravel2/cardPage?sessionId=".concat(this.sessionId, "&type=share"),
              title: "".concat(this.dataList[0].city).concat(this.dataList.length, "天旅行计划"),
              imageUrl: "https://eshopfile.zhiyousx.com/175214881804186478.png"
            }), console.log(t, "onShareAppMessage"), {
              title: t.title,
              path: t.href,
              imageUrl: t.imageUrl
            }
          },
          methods: {
            blockEvent: function(t) {
              t.stopPropagation(), t.preventDefault()
            },
            closeGiftEnter: function() {
              this.$uniApi.dataRequestNoLoading("POST", "ai/isEnter/add", {
                openId: uni.getStorageSync("wxopenid")
              }).then((function(t) {})), this.$refs.giftEnterPopup.close(), uni.showToast({
                title: "可以点击左上角按钮返回小七首页进行查看领取！",
                icon: "none",
                duration: 3e3
              })
            },
            goGiftEnter: function() {
              this.$refs.giftEnterPopup.close(), this.goGift = !0, this.$uniApi.dataRequestNoLoading("POST", "ai/isEnter/add", {
                openId: uni.getStorageSync("wxopenid")
              }).then((function(e) {
                1 === e.code && uni.navigateTo({
                  url: "/pages/webpage/webpage?url=https://yxh5.zhiyousx.com/yxH5/show*id+394"
                })
              }))
            },
            goCoupon: function() {
              uni.navigateTo({
                url: "/pages/webpage/webpage?url=https://yxh5.zhiyousx.com/yxH5/show*id+394"
              })
            },
            getTitleIcon: function(t) {
              return ["https://eshopfile.zhiyousx.com/175679891689588582.png", "https://eshopfile.zhiyousx.com/175679895905592634.png", "https://eshopfile.zhiyousx.com/175679897104900353.png", "https://eshopfile.zhiyousx.com/175679891689588582.png"][t]
            },
            getDayLines: function(t) {
              var e = "";
              return t.forEach((function(i, n) {
                e += i.name + (n < t.length - 1 ? "→" : "")
              })), e
            },
            getLineCardIsTop: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/queryById?id=" + this.sessionId).then((function(e) {
                1 === e.code && (t.isCardTop = e.data[0].isTop)
              }))
            },
            getGiftEnter: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/isEnter/queryByOpenId?openId=" + uni.getStorageSync("wxopenid")).then((function(t) {
                1 === t.code && null === t.data && e.$refs.giftEnterPopup.open()
              }))
            },
            getCardTop: function() {
              var e = this;
              if (!this.isCardTopLoading) {
                this.isCardTopLoading = !0;
                var i = this.isCardTop ? "ai/planCard/delTop" : "ai/planCard/addTop";
                this.$uniApi.dataRequestNoLoading("GET", i, {
                  sessionId: this.sessionId,
                  openId: uni.getStorageSync("wxopenid")
                }).then((function(t) {
                  1 === t.code && (e.$uni.showToast(e.isCardTop ? "取消置顶成功" : "置顶行程成功"), e.isCardTop = !e.isCardTop)
                })).catch((function(t) {
                  console.error("置顶行程失败:", t)
                })).finally((function() {
                  e.isCardTopLoading = !1
                }))
              }
            },
            goSpot: function(t) {
              t && this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + t
              })
            },
            goEditPage: function() {
              this.$eventAnalyse.analyse({
                eventTag: "aiTravel_edit_click",
                eventName: "旅行搭子卡片点击编辑",
                eventParams: JSON.stringify({
                  sessionId: this.sessionId
                })
              }), this.navigateToEditPage()
            },
            goHistoryList: function() {
              try {
                getCurrentPages().length >= 8 ? uni.reLaunch({
                  url: "/union/pages/aiTravel2/historyList"
                }) : uni.navigateTo({
                  url: "/union/pages/aiTravel2/historyList"
                })
              } catch (e) {
                uni.reLaunch({
                  url: "/union/pages/aiTravel2/historyList"
                })
              }
            },
            goToDetail: function(e) {
              var i = this;
              this.currentTab = 1, this.showLineList = !1, this.getTotop(), this.$nextTick((function() {
                uni.createSelectorQuery().in(i).select("#dayTitle".concat(e)).boundingClientRect((function(e) {
                  e && uni.createSelectorQuery().in(i).select(".scroll-content").boundingClientRect((function(t) {
                    if (t) {
                      var n = e.top - t.top;
                      n = Math.max(n, 0), i.insideScrollTop = 0, i.$nextTick((function() {
                        setTimeout((function() {
                          i.insideScrollTop = n, i.showLineList = !0
                        }), 0)
                      }))
                    }
                  })).exec()
                })).exec()
              }))
            },
            getLineCard: function() {
              var e = this;
              this.mapLoading = !0, this.markers = [], this.polyline = [], this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/queryById?id=" + this.sessionId).then((function(i) {
                if (e.mapLoading = !1, 1 === i.code) {
                  e.dataList = i.data;
                  var n = (e.dataList[0].budgetItems || "").replace(/ {2,}/g, " "),
                    o = (e.dataList[0].tipsContent || "").replace(/ {2,}/g, " ");
                  e.budgetItems = '## 预算分配 <span style="color: #4E514F;font-weight: normal; font-size: 0.9em;">(' + e.dataList[0].titlePeople + "人" + e.dataList.length + "日" + (1 === e.dataList[0].priceType ? "合计" : "人均") + ")</span>\n" + n, e.tipsContent = "## 省钱秘籍 \n" + o, e.isCardTop = i.data[0].isTop;
                  var a = [],
                    s = [];
                  e.dataList.forEach((function(t, i) {
                    t.aiPlanCards || (t.aiPlanCards = []), a.push(t.coordinateVOS);
                    var n = e.getDayColor(i);
                    t.aiPlanCards.forEach((function(t, i) {
                      try {
                        t.pictureUrl = JSON.parse(t.pictureUrl), Array.isArray(t.pictureUrl) || (t.pictureUrl = [])
                      } catch (e) {
                        t.pictureUrl = []
                      }
                      Array.isArray(t.pictureUrl) || (t.pictureUrl = []), t.coordinate && (s.push({
                        longitude: Number(t.coordinate.split(",")[0]),
                        latitude: Number(t.coordinate.split(",")[1])
                      }), e.markers.push({
                        id: t.id,
                        zIndex: 0 === i ? 100 : 10,
                        title: t.name,
                        longitude: Number(t.coordinate.split(",")[0]),
                        latitude: Number(t.coordinate.split(",")[1]),
                        width: 25,
                        height: 25,
                        iconPath: "https://eshopfile.zhiyousx.com/169209589667867086.png",
                        label: {
                          content: String(i + 1),
                          bgColor: n,
                          color: "#fff",
                          textAlign: "center",
                          borderRadius: 15,
                          width: 25,
                          height: 25,
                          fontSize: 12,
                          borderWidth: 2,
                          borderColor: "#fff",
                          anchorY: -10
                        },
                        callout: {
                          display: "ALWAYS",
                          anchorY: 10,
                          anchorX: 0,
                          content: t.name,
                          fontSize: 14,
                          color: "#000",
                          fontWeight: "bold",
                          bgColor: "#fff",
                          textAlign: "center",
                          borderRadius: 5,
                          padding: 5
                        }
                      }))
                    }))
                  })), e.markers.length > 0 && (e.map.longitude = e.markers[0].longitude, e.map.latitude = e.markers[0].latitude), e._mapContext = t.createMapContext("map", e), a.forEach((function(t) {
                    t.length <= 1 && (t = [e.map, e.map])
                  })), e.$nextTick((function() {
                    uni.createSelectorQuery().in(e).select(".fixed-header").boundingClientRect((function(t) {
                      t && t.height && (e.headerHeight = t.height)
                    })).exec()
                  })), setTimeout((function() {
                    e.isFirstLoad && (e.contentScrollTop(1), e.isFirstLoad = !1), a.forEach((function(t, i) {
                      e.polyline[i] || (e.polyline[i] = {
                        color: "#0000AA",
                        arrowLine: !0,
                        width: 6,
                        points: []
                      }), e.polyline[i].points = t, e.polyline[i].color = e.getDayColor(i)
                    })), s.length > 0 && e.$nextTick((function() {
                      setTimeout((function() {
                        e._mapContext.includePoints({
                          padding: [70, 70, 70, 70],
                          points: s
                        })
                      }), 300)
                    })), e.mapLoading = !1
                  }), 500)
                }
              })).catch((function(t) {
                e.mapLoading = !1
              }))
            },
            handleScroll: function(e) {
              var i = this;
              if (1 === this.currentTab && (this.scrollDetectTimer && (clearTimeout(this.scrollDetectTimer), this.scrollDetectTimer = null), this.scrollDetectTimer = setTimeout((function() {
                  i.updateCurrentDayByScroll()
                }), 120), !this.forbiddenPop && !this.drawerTriggered))
                if (0 !== this.scrollViewHeight) {
                  var n = e.detail.scrollTop > this.lastScrollTop;
                  if (this.lastScrollTop = e.detail.scrollTop, n) {
                    var o = e.detail.scrollHeight,
                      a = this.scrollViewHeight,
                      s = e.detail.scrollTop;
                    o < 2 * a || s + a >= o - 50 && setTimeout((function() {
                      1 !== i.currentTab || i.drawerTriggered || i.forbiddenPop || (i.showRate = !0, i.$refs.feedbackDrawer.open())
                    }), 1e3)
                  }
                } else uni.createSelectorQuery().in(this).select(".scroll-content").boundingClientRect((function(t) {
                  t && (i.scrollViewHeight = t.height)
                })).exec()
            },
            scrolltolower: function() {},
            contentScrollTop: function(e) {
              var i = this,
                n = this;
              this.getContentScrollTop().then((function(o) {
                if (!o && !o[0]) return n.fEleTop = 0, void(n.fEleBottom = 0);
                uni.createSelectorQuery().in(i).select(".scroll-content").boundingClientRect((function(i) {
                  if (i) {
                    if (e) {
                      var a = .15 * uni.getSystemInfoSync().windowHeight;
                      n.fEleTop = o[0].top, n.fEleBottom = o[0].top + i.height + a
                    }
                    n.fEleTopNow = o[0].top, n.fEleBottomNow = o[0].bottom
                  }
                })).exec()
              }))
            },
            getContentScrollTop: function() {
              var e = this;
              return new Promise((function(i) {
                e.$nextTick((function() {
                  var n = uni.createSelectorQuery().in(e);
                  n.select("#contentBox").boundingClientRect(), n.selectViewport().scrollOffset(), n.exec((function(t) {
                    i(t)
                  }))
                }))
              }))
            },
            onMarkerTap: function(t) {},
            generateAiGuide: function() {
              var e = this;
              uni.showLoading({
                title: "生成中..."
              }), this.$uniApi.dataRequestNoLoading("POST", "ai/app/share/thumbnail", {
                page: "union/pages/aiTravel2/cardPage",
                scene: this.sessionId,
                checkPath: !1,
                sessionId: this.sessionId
              }).then((function(t) {
                1 === t.code && (e.guideImageUrl = t.data, e.shareImageToFriend())
              }))
            },
            shareImageToFriend: function() {
              this.$eventAnalyse.analyse({
                eventTag: "aiTravel_image_share",
                eventName: "旅行搭子卡片分享长图",
                eventParams: JSON.stringify({
                  sessionId: this.sessionId
                })
              }), uni.downloadFile({
                url: this.guideImageUrl,
                success: function(e) {
                  200 === e.statusCode && (uni.hideLoading(), n.showShareImageMenu({
                    path: e.tempFilePath,
                    success: function(t) {
                      console.log("分享成功", t)
                    },
                    fail: function(t) {
                      console.error("分享失败", t)
                    }
                  }))
                },
                fail: function(e) {
                  uni.hideLoading(), console.error("图片下载失败", e)
                }
              })
            },
            changeTab: function(e) {
              var i = this;
              this.currentTab !== e && (this.currentTab = e, this.getTotop(), this.forbiddenPop = !0, this.lastScrollTop = 0, 1 === e && this.$nextTick((function() {
                uni.createSelectorQuery().in(i).select(".scroll-content").boundingClientRect((function(t) {
                  t && (i.scrollViewHeight = t.height)
                })).exec()
              })), setTimeout((function() {
                i.forbiddenPop = !1
              }), 1500), 0 === e ? this.drawAllLines() : 1 === e ? (this.dataList && this.dataList.length > 0 && (this.currentMapDayIndex = 0, this.redrawMapForDay(0)), this.$nextTick((function() {
                setTimeout((function() {
                  i.updateCurrentDayByScroll()
                }), 200)
              }))) : 2 === e ? this.$eventAnalyse.analyse({
                eventTag: "aiTravel_budget_click",
                eventName: "旅行搭子卡片点击预算",
                eventParams: JSON.stringify({
                  sessionId: this.sessionId
                })
              }) : 3 === e && this.$eventAnalyse.analyse({
                eventTag: "aiTravel_localSay_click",
                eventName: "旅行搭子卡片点击本地人说",
                eventParams: JSON.stringify({
                  sessionId: this.sessionId
                })
              }))
            },
            touchStart: function(t) {
              this.touchStartX = t.touches[0].clientX, this.touchStartY = t.touches[0].clientY, this.contentScrollTop()
            },
            touchEnd: function(t) {
              var e = t.changedTouches[0].clientX - this.touchStartX,
                i = t.changedTouches[0].clientY - this.touchStartY;
              Math.abs(i) > 50 && Math.abs(e) < Math.abs(i) && (i > 0 && this.fEleTop < this.fEleTopNow + 40 && this.isShowDetail ? this.isShowDetail = !1 : i < 0 && this.fEleBottom > this.fEleBottomNow - 40 && !this.isShowDetail && (this.isShowDetail = !0))
            },
            headerTouchStart: function(t) {
              t.stopPropagation(), t.preventDefault(), this.headerTouchStartX = t.touches[0].clientX, this.headerTouchStartY = t.touches[0].clientY
            },
            headerTouchEnd: function(t) {
              t.stopPropagation(), t.preventDefault();
              var e = t.changedTouches[0].clientX - this.headerTouchStartX,
                i = t.changedTouches[0].clientY - this.headerTouchStartY;
              Math.abs(i) > 30 && Math.abs(e) < Math.abs(i) && (i > 0 ? this.isShowDetail = !1 : i < 0 && (this.isShowDetail = !0))
            },
            getTotop: function() {
              this.insideScrollTop > 1 ? this.insideScrollTop = .1 : this.insideScrollTop += .1
            },
            getCapsuleInfo: function() {
              var e = uni.getSystemInfoSync(),
                i = uni.getMenuButtonBoundingClientRect();
              this.statusBarHeight = e.statusBarHeight, this.capsuleHeight = i.top + i.height, console.log("状态栏高度:", this.statusBarHeight), console.log("胶囊底部距离:", this.capsuleHeight)
            },
            updateCurrentDayByScroll: function() {
              var e = this;
              uni.createSelectorQuery().in(this).select(".scroll-content").boundingClientRect((function(i) {
                i && uni.createSelectorQuery().in(e).selectAll(".lineList .day-title").boundingClientRect((function(t) {
                  if (t && t.length) {
                    var n = 0,
                      o = Number.POSITIVE_INFINITY;
                    t.forEach((function(t, e) {
                      if (t) {
                        var a = Math.abs(t.top - i.top);
                        a < o && (o = a, n = e)
                      }
                    })), n !== e.currentMapDayIndex && (e.currentMapDayIndex = n, e.redrawMapForDay(n))
                  }
                })).exec()
              })).exec()
            },
            getDayColor: function(t) {
              return ["#7E9AF4", "#FF6B6B", "#4ECDC4", "#45B7D1"][t] || "#7E9AF4"
            },
            drawAllLines: function() {
              var t = this;
              if (this.dataList && this.dataList.length) {
                this.markers = [], this.polyline = [];
                var e = [],
                  i = [],
                  n = [];
                if (this.dataList.forEach((function(o, a) {
                    var s = t.getDayColor(a),
                      r = Array.isArray(o.coordinateVOS) ? o.coordinateVOS : [];
                    Array.isArray(o.aiPlanCards) && o.aiPlanCards.forEach((function(t, i) {
                      try {
                        if (t && "string" == typeof t.coordinate && t.coordinate.includes(",")) {
                          var o = Number(t.coordinate.split(",")[0]),
                            r = Number(t.coordinate.split(",")[1]);
                          isNaN(o) || isNaN(r) || (e.push({
                            id: t.id || 100 * a + i,
                            zIndex: 0 === i ? 100 : 10,
                            title: t.name || "",
                            longitude: o,
                            latitude: r,
                            width: 25,
                            height: 25,
                            iconPath: "https://eshopfile.zhiyousx.com/169209589667867086.png",
                            label: {
                              content: String(i + 1),
                              bgColor: s,
                              color: "#fff",
                              textAlign: "center",
                              borderRadius: 15,
                              width: 25,
                              height: 25,
                              fontSize: 12,
                              borderWidth: 2,
                              borderColor: "#fff",
                              anchorY: -10
                            },
                            callout: {
                              display: "ALWAYS",
                              anchorY: 10,
                              anchorX: 0,
                              content: t.name || "",
                              fontSize: 14,
                              color: "#000",
                              fontWeight: "bold",
                              bgColor: "#fff",
                              textAlign: "center",
                              borderRadius: 5,
                              padding: 5
                            }
                          }), n.push({
                            longitude: o,
                            latitude: r
                          }))
                        }
                      } catch (t) {}
                    })), r && r.length && i.push({
                      color: s,
                      arrowLine: !0,
                      width: 6,
                      points: r
                    })
                  })), this.polyline = i, this.markers = e, this._mapContext && n.length > 0) try {
                  this.$nextTick((function() {
                    setTimeout((function() {
                      t._mapContext.includePoints({
                        padding: [70, 70, 70, 70],
                        points: n
                      })
                    }), 300)
                  }))
                } catch (t) {}
              }
            },
            redrawMapForDay: function(t) {
              var e = this;
              if (this.dataList && this.dataList.length && !(t < 0 || t >= this.dataList.length)) {
                var i = this.dataList[t];
                if (i) {
                  var n = Array.isArray(i.coordinateVOS) ? i.coordinateVOS : [];
                  this.markers = [], this.polyline = [];
                  var o = [],
                    a = this.getDayColor(t);
                  if (Array.isArray(i.aiPlanCards) && i.aiPlanCards.forEach((function(t, e) {
                      try {
                        if (t && "string" == typeof t.coordinate && t.coordinate.includes(",")) {
                          var i = Number(t.coordinate.split(",")[0]),
                            n = Number(t.coordinate.split(",")[1]);
                          isNaN(i) || isNaN(n) || o.push({
                            id: t.id || e,
                            zIndex: 0 === e ? 100 : 10,
                            title: t.name || "",
                            longitude: i,
                            latitude: n,
                            width: 25,
                            height: 25,
                            iconPath: "https://eshopfile.zhiyousx.com/169209589667867086.png",
                            label: {
                              content: String(e + 1),
                              bgColor: a,
                              color: "#fff",
                              textAlign: "center",
                              borderRadius: 15,
                              width: 25,
                              height: 25,
                              fontSize: 12,
                              borderWidth: 2,
                              borderColor: "#fff",
                              anchorY: -10
                            },
                            callout: {
                              display: "ALWAYS",
                              anchorY: 10,
                              anchorX: 0,
                              content: t.name || "",
                              fontSize: 14,
                              color: "#000",
                              fontWeight: "bold",
                              bgColor: "#fff",
                              textAlign: "center",
                              borderRadius: 5,
                              padding: 5
                            }
                          })
                        }
                      } catch (t) {}
                    })), this.polyline = [], n && n.length && (this.polyline = [{
                      color: a,
                      arrowLine: !0,
                      width: 6,
                      points: n
                    }]), this.markers = o, this._mapContext && n && n.length) try {
                    this.$nextTick((function() {
                      setTimeout((function() {
                        e._mapContext.includePoints({
                          padding: [70, 70, 70, 70],
                          points: n
                        })
                      }), 300)
                    }))
                  } catch (t) {} else if (this._mapContext && o && o.length) try {
                    this.$nextTick((function() {
                      setTimeout((function() {
                        e._mapContext.includePoints({
                          padding: [70, 70, 70, 70],
                          points: o.map((function(t) {
                            return {
                              longitude: t.longitude,
                              latitude: t.latitude
                            }
                          }))
                        })
                      }), 300)
                    }))
                  } catch (t) {}
                }
              }
            },
            showInvitePopup: function() {
              this.getShareMemberList(), this.$refs.invitePopup.open()
            },
            shareToChat: function() {
              this.shareType = 1, this.$eventAnalyse.analyse({
                eventTag: "aiTravel_shareEdit_click",
                eventName: "旅行搭子点击邀请好友共同编辑",
                eventParams: JSON.stringify({
                  sessionId: this.sessionId
                })
              })
            },
            getShareMemberList: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/app/share/list?cardId=" + this.sessionId).then((function(e) {
                1 === e.code && (t.invitedFriends = e.data)
              }))
            },
            getShareConfig: function() {
              return {
                href: "/union/pages/aiTravel2/editPage?sessionId=".concat(this.sessionId, "&type=share"),
                title: "你的好友邀请你共同编辑行程",
                imageUrl: "https://eshopfile.zhiyousx.com/175214881804186478.png"
              }
            },
            getComment: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/comment/queryBySessionId?sessionId=" + this.sessionId).then((function(e) {
                1 === e.code && e.data ? 0 === e.data.length ? t.drawerTriggered = !1 : t.drawerTriggered = !0 : t.drawerTriggered = !1
              })).catch((function(e) {
                t.drawerTriggered = !1
              }))
            },
            changeStar: function(t) {
              this.star = t
            },
            handleChange: function(t) {
              var e = this;
              t.show || (this.showRate = !1, this.star = 0, this.drawerTriggered || (this.drawerTriggered = !0, setTimeout((function() {
                e.drawerTriggered = !1
              }), 1e3)))
            },
            submitComment: function() {
              var t = this;
              this.$eventAnalyse.analyse({
                eventTag: "aiTravel_comment_submit",
                eventName: "提交伴游卡片评论",
                eventParams: {
                  sessionId: this.sessionId,
                  star: this.star,
                  comment: this.comment
                }
              }), 0 !== this.star && this.$uniApi.dataRequestNoLoading("POST", "ai/comment/add", {
                sessionId: this.sessionId,
                commentType: this.star,
                comment: this.comment
              }).then((function(e) {
                1 === e.code && (t.$uni.showToast("感谢您的评价!"), t.drawerTriggered = !0, t.$refs.feedbackDrawer.close(), t.forbiddenPop = !0, t.star = 0, t.comment = "", t.showInput = !1)
              }))
            },
            navigateToEditPage: function() {
              try {
                getCurrentPages().length >= 8 ? uni.reLaunch({
                  url: "/union/pages/aiTravel2/editPage?sessionId=".concat(this.sessionId)
                }) : uni.navigateTo({
                  url: "/union/pages/aiTravel2/editPage?sessionId=".concat(this.sessionId)
                })
              } catch (e) {
                uni.reLaunch({
                  url: "/union/pages/aiTravel2/editPage?sessionId=".concat(this.sessionId)
                })
              }
            },
            goHome: function() {
              uni.reLaunch({
                url: "/union/pages/aiNew/index"
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{height:100vh;position:relative;width:100%}.page-box .topBtns{display:-webkit-flex;display:flex;position:fixed;right:30rpx;z-index:999}.page-box .topBtns .editBtn{background:url('https://eshopfile.zhiyousx.com/175687060836855161.png')no-repeat}.page-box .topBtns .historyBtn{background:url('https://eshopfile.zhiyousx.com/175687063100524576.png')no-repeat;margin-left:20rpx}.page-box .topBtns .btn1{background-size:100% 100%;border-radius:50%;height:80rpx;width:80rpx}.page-box .topBtns .btn2{background:url('https://eshopfile.zhiyousx.com/175687063100524576.png')no-repeat;background-size:100% 100%}.page-box .bottomBtns{bottom:30rpx;display:-webkit-flex;display:flex;left:30rpx;position:fixed;z-index:999}.page-box .bottomBtns .topBtn{background:linear-gradient(90deg,#ad97ff,#d988ff);border-radius:64rpx 64rpx 64rpx 64rpx;box-shadow:0rpx 8rpx 20rpx 0rpx rgba(128,86,255,.25);color:#fff;font-size:28rpx;height:80rpx;line-height:80rpx;padding:0 42rpx;text-align:center}.page-box .lineMap{background:#fff;border-radius:20rpx;height:580rpx;position:relative;width:100%;z-index:2}.page-box .lineMap .loading{bottom:0;left:0;position:absolute;right:0;top:0}.page-box .lineMap .loading .img_box{align-items:center;background:#fff;display:-webkit-flex;display:flex;height:100%;justify-content:center;width:100%}.page-box .lineMap .loading .img_box .loading_img{height:200rpx;width:200rpx}.page-box .page-content{-webkit-touch-callout:none;-webkit-overflow-scrolling:touch;background:#fff;border-radius:40rpx 40rpx 0rpx 0rpx;bottom:0;box-shadow:0rpx -8rpx 16rpx 0rpx rgba(0,0,0,.1);display:-webkit-flex;display:flex;flex-direction:column;height:80vh;overflow:hidden;position:absolute;touch-action:none;transition:.5s;user-select:none;width:100%;z-index:3}.page-box .fixed-header{background:#fff;padding:50rpx 30rpx 24rpx;position:relative;top:0;width:100%;z-index:2}.page-box .fixed-header .line1{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;width:100%}.page-box .fixed-header .line1 .line1-left{background:#f6f0ff;border-radius:20rpx 20rpx 20rpx 20rpx;color:rgba(0,0,0,.85);font-size:26rpx;height:52rpx;letter-spacing:1px;line-height:52rpx;padding:0 20rpx}.page-box .fixed-header .line1 .line1-right{align-items:center;background:hsla(0,0%,100%,.2);border-radius:64rpx 64rpx 64rpx 64rpx;color:#8666fd;display:-webkit-flex;display:flex;font-size:24rpx;height:52rpx;line-height:52rpx}.page-box .fixed-header .line1 .line1-right .avatar-group{display:-webkit-flex;display:flex;margin-right:10rpx}.page-box .fixed-header .line1 .line1-right .avatar-group .avatar-img{border:2rpx solid #fff;border-radius:50%;height:50rpx;margin-left:-15rpx;position:relative;width:50rpx}.page-box .fixed-header .line1 .line1-right .avatar-group .avatar-img:first-child{margin-left:0}.page-box .fixed-header .line1 .line1-right .avatar-group .avatar-img-add{border-radius:50%;height:50rpx;width:50rpx}.page-box .fixed-header .line2{color:rgba(0,0,0,.85);font-size:36rpx;font-weight:700;line-height:50rpx;margin-top:24rpx;width:100%}.page-box .fixed-header .line3{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:24rpx;width:100%}.page-box .fixed-header .line3 .tabs{background:rgba(30,27,25,.05);border-radius:40rpx;color:rgba(0,0,0,.85);font-size:28rpx;height:60rpx;line-height:60rpx;text-align:center;width:152rpx}.page-box .fixed-header .line3 .tabs.active{background:#515151;color:#b29ce4}.page-box #contentBox{padding:0 30rpx;width:100%}.page-box .overview{width:100%}.page-box .overview .lineDay{padding-bottom:24rpx;width:100%}.page-box .overview .lineDay .day-title{color:rgba(0,0,0,.85);font-size:32rpx;font-weight:700;letter-spacing:1px;line-height:44rpx;margin-bottom:12rpx}.page-box .overview .lineDay .day-content{align-items:center;background:#f6f0ff;border-radius:20rpx 20rpx 20rpx 20rpx;display:-webkit-flex;display:flex;justify-content:space-between;padding:20rpx 18rpx 10rpx;width:100%}.page-box .overview .lineDay .day-content .left{width:600rpx}.page-box .overview .lineDay .day-content .left text{color:rgba(0,0,0,.85);display:inline-block;font-size:26rpx;letter-spacing:1px;line-height:52rpx}.page-box .overview .lineDay .day-content .right-img{height:30rpx;width:30rpx}.page-box .lineList{width:100%}.page-box .lineList .lineDay{margin-bottom:6rpx}.page-box .lineList .lineDay .day-title{color:rgba(0,0,0,.85);display:inline-block;font-size:32rpx;font-weight:700;letter-spacing:1px;line-height:44rpx;margin-bottom:30rpx;position:relative;z-index:1}.page-box .lineList .lineDay .day-title::after{background:url('https://eshopfile.zhiyousx.com/175679805644054579.png')no-repeat;background-size:100% 100%;bottom:3rpx;content:"";display:block;height:16rpx;left:-2rpx;position:absolute;width:110%;z-index:-1}.page-box .lineList .lineDay .day-content{width:100%}.page-box .lineList .lineDay .day-content .cardBox{background:#f8f6ff;border-radius:20rpx;margin-bottom:24rpx;min-height:238rpx;padding:20rpx;position:relative;width:100%}.page-box .lineList .lineDay .day-content .cardBox .cardBox-top{align-items:stretch;display:-webkit-flex;display:flex}.page-box .lineList .lineDay .day-content .cardBox .card-left{background-size:100% 100%;border-radius:20rpx;flex-shrink:0;margin-right:20rpx;min-height:198rpx;width:198rpx}.page-box .lineList .lineDay .day-content .cardBox .card-right{min-height:198rpx;width:432rpx}.page-box .lineList .lineDay .day-content .cardBox .card-right .card-right-title{color:#1e1b19;display:-webkit-flex;display:flex;font-size:30rpx;font-weight:700;justify-content:space-between;line-height:42rpx;margin-bottom:12rpx}.page-box .lineList .lineDay .day-content .cardBox .card-right .card-right-title image{flex:none;height:40rpx;width:40rpx}.page-box .lineList .lineDay .day-content .cardBox .card-right .card-right-time{align-items:center;color:rgba(0,0,0,.65);display:-webkit-flex;display:flex;font-size:24rpx;line-height:32rpx;margin-bottom:12rpx;margin-top:12rpx}.page-box .lineList .lineDay .day-content .cardBox .card-right .card-right-time image{flex:none;height:32rpx;margin-right:8rpx;width:32rpx}.page-box .lineList .lineDay .day-content .cardBox .card-right .card-right-detail{align-items:center;color:rgba(0,0,0,.65);display:-webkit-flex;display:flex;font-size:24rpx;justify-content:space-between;line-height:32rpx;vertical-align:top}.page-box .lineList .lineDay .day-content .cardBox .card-right .card-right-detail .content{flex:none;max-width:390rpx}.page-box .lineList .lineDay .day-content .cardBox .card-right .card-right-detail .content text{color:rgba(0,0,0,.65);font-size:24rpx}.page-box .lineList .lineDay .day-content .cardBox .card-right .card-right-detail .content image{flex:none;height:32rpx;margin-right:8rpx;vertical-align:top;width:32rpx}.page-box .lineList .lineDay .day-content .cardBox .goIcon{bottom:50%;flex:none;height:30rpx;position:absolute;right:20rpx;transform:translateY(50%);width:30rpx}.page-box .lineList .lineDay .day-content .cardBox .couponbox{align-items:flex-end;border-top:1px solid rgba(30,27,25,.05);display:-webkit-flex;display:flex;height:80rpx;justify-content:space-between;margin-top:20rpx;width:100%}.page-box .lineList .lineDay .day-content .cardBox .couponbox .coupon-btn{background:linear-gradient(90deg,#ad97ff,#d988ff);border-radius:64rpx 64rpx 64rpx 64rpx;color:#fff;flex:none;font-size:28rpx;height:60rpx;line-height:60rpx;text-align:center;width:196rpx}.page-box .lineList .lineDay .day-content .cardBox .couponbox .coupon-text{color:#d14c0b;flex:none;font-size:26rpx;margin-bottom:10rpx}.page-box .lineList .lineDay .day-content .cardBox .couponIcon{height:52rpx;left:20rpx;position:absolute;top:14rpx;width:46rpx}.page-box .localSay{width:100%}.page-box .localSay .content{background-color:#f8f6ff;border-radius:20rpx;padding:20rpx}.invite-popup{background:#fff;border-radius:20rpx 20rpx 0 0;box-sizing:border-box;padding:40rpx;width:100%}.invite-title{border-bottom:2rpx solid #e5e6eb;color:#1e1b19;font-size:32rpx;font-weight:700;margin-bottom:40rpx;padding-bottom:36rpx;text-align:center}.invite-content{margin-bottom:40rpx}.invite-subtitle{color:rgba(0,0,0,.85);font-size:28rpx;margin-bottom:20rpx}.friends-list{max-height:300rpx;overflow-y:auto}.friends-grid{display:-webkit-flex;display:flex;flex-wrap:wrap;justify-content:space-between}.friend-item{align-items:center;background:rgba(0,0,0,.04);border-radius:10rpx;border-radius:60rpx;box-sizing:border-box;display:-webkit-flex;display:flex;margin-bottom:20rpx;padding:16rpx;width:315rpx}.friend-avatarUrl{border-radius:50%;flex-shrink:0;height:60rpx;margin-right:12rpx;width:60rpx}.friend-name{color:#1e1b19;flex:1;font-size:26rpx;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.empty-friends{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;padding:80rpx 40rpx;text-align:center}.empty-icon{height:120rpx;margin-bottom:30rpx;width:120rpx}.empty-text{color:rgba(0,0,0,.85);display:block;font-size:32rpx;font-weight:700;margin-bottom:16rpx}.empty-desc{color:rgba(0,0,0,.85);display:block;font-size:26rpx;line-height:36rpx}.invite-footer{padding-top:30rpx}.invite-footer .msg{display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:28rpx}.invite-footer .msg .msg-icon{height:40rpx;width:40rpx}.invite-footer .msg .msg-text{color:#76777e;font-size:28rpx;line-height:38rpx;width:610rpx}.share-btn{background:linear-gradient(90deg,#ad97ff,#d988ff);border-radius:64rpx;box-shadow:0rpx 8rpx 20rpx 0rpx rgba(128,86,255,.25);color:#fff;font-size:32rpx;font-weight:700;height:80rpx;line-height:80rpx;text-align:center;width:100%}.image-popup{border-radius:20rpx;display:-webkit-flex;display:flex;flex-direction:column;max-height:1000rpx;overflow:hidden;width:650rpx}.image-container{flex:1;max-height:800rpx;overflow:hidden}.image-scroll{height:100%;width:100%}.guide-image{display:block;width:100%}.image-actions{margin-top:20rpx;width:100%}.close-btn{background:url('https://eshopfile.zhiyousx.com/175757542230319785.png')no-repeat;background-size:100% 100%;border-radius:50%;height:60rpx;margin:0 auto 20rpx;width:60rpx}.action-buttons{display:-webkit-flex;display:flex;justify-content:space-between}.action-btn{align-items:center;background:linear-gradient(90deg,#ad97ff,#d988ff);border-radius:64rpx;box-shadow:0rpx 8rpx 20rpx 0rpx rgba(128,86,255,.25);color:#fff;display:-webkit-flex;display:flex;font-size:28rpx;height:80rpx;justify-content:center;line-height:80rpx;text-align:center;width:320rpx}.action-btn image{height:40rpx;margin-right:10rpx;width:40rpx}.drawer-content{background:#fff;border-radius:24rpx 24rpx 0 0;min-height:200rpx;padding:20rpx 32rpx 50rpx;position:relative;text-align:center}.drawer-content .thanks{align-items:center;font-weight:700;height:412rpx;justify-content:center;line-height:412rpx;width:100%}.drawer-title{align-items:center;color:#000;display:-webkit-flex;display:flex;font-size:30rpx;font-weight:700;justify-content:space-between;margin-bottom:30rpx}.drawer-title .icon{height:36rpx;width:36rpx}.drawer-title .btn{height:70rpx;width:70rpx}.drawer-btns{display:-webkit-flex;display:flex;gap:40rpx;justify-content:center;margin-bottom:20rpx}.drawer-btn{background:#fff7f0;border:2rpx solid #fd6403;border-radius:50rpx;color:#fd6403;font-size:28rpx;outline:none;padding:0 60rpx;transition:background .2s,color .2s}.drawer-btn.active,.drawer-btn:active{background:#fd6403;color:#fff}.drawer-btn.submit{background:#fd6403;border:none;color:#fff;font-size:30rpx;margin-top:28rpx;width:60%}.drawer-input{background:#f9f9f9;border:1px solid #eee;border-radius:10rpx;box-sizing:border-box;color:#333;font-size:28rpx;height:400rpx;margin:24rpx 0 0;padding:20rpx;text-align:left;width:686rpx}.star-row{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin:30rpx 0 40rpx}.star-row text{font-size:50rpx}.star-row .starName{color:#000;font-weight:700}.drawer-btn.icon-btn{align-items:center;background:transparent;border:none;box-shadow:none;display:-webkit-flex;display:flex;height:60rpx;justify-content:center;padding:0;position:absolute;right:32rpx;top:32rpx;width:60rpx}.drawer-btn.icon-btn .icon{height:48rpx;width:48rpx}.fontNum{bottom:10rpx;color:#999;font-size:30rpx;position:absolute;right:20rpx}.home-btn{align-items:center;background:hsla(0,0%,100%,.9);border-radius:50%;box-shadow:0rpx 4rpx 12rpx 0rpx rgba(0,0,0,.1);display:-webkit-flex;display:flex;height:60rpx;justify-content:center;margin-left:20rpx;width:60rpx}.home-icon{height:40rpx;width:40rpx}.share-popup{width:750rpx}.share-popup .gift-enter-image{width:100%}.share-popup .gift-close-image{height:100rpx;margin:20rpx 325rpx;width:100rpx}
</style>
