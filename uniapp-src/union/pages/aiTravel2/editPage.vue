<template>
<view class="page-box" @touchmove="onPageTouchMove($event)" @touchend="onPageTouchEnd($event)" @touchcancel="onPageTouchEnd($event)">
    <uni-navbar class="" title=" " type="transparentFixed"></uni-navbar>
    <view class="drag-ghost" :style="dragGhostStyle" v-if="(isDragging||isDragReady)&&dragItem">
        <view class="drag-ghost-content">
            <image class="headImg" :src="dragItem.headImgUrl||'https://eshopfile.zhiyousx.com/175695850936006689.png'"></image>
            <view class="line-item-content-item-center">
                <view class="name">{{dragItem.name}}</view>
                <view class="detail" v-if="dragItem.tips||dragItem.price||dragItem.tag">
                    <image class="icon" src="https://eshopfile.zhiyousx.com/175680058086856766.png "></image>
                    <text class="">{{(dragItem.price?'人均:'+dragItem.price+'元，':'')+'\n            '+(dragItem.tips||'')}}</text>
                </view>
            </view>
            <image class="editIcon" src="https://eshopfile.zhiyousx.com/175697592461606191.png "></image>
        </view>
    </view>
    <view class="addDayBtn" v-if="shoFloatBtn" @click="addDay($event)">+添加行程天数</view>
    <scroll-view :class="['scroll-container','',isScrolling&&(isDragging||isDragReady)?'scrolling':'']" :enableBackToTop="true" :scrollAnchoring="false" :scrollTop="scrollTop" :scrollWithAnimation="false" :scrollY="!(isDragging||isDragReady)||isAtBoundary" :showScrollbar="false" @scroll="onScroll($event)">
        <view class="line-list" style="overflow:visible;">
            <view class="header" style="height:200rpx;"></view>
            <view class="line-item" :id="'day-'+dayIdx" :key="dayIdx" v-for="(item, dayIdx) in $root.l0">
                <view class="line-item-title">
                    <view class="line-item-day">{{'DAY'+dayIdx+1+''}}</view>
                    <view class="delete"></view>
                </view>
                <view class="line-item-address">
                    <text class="line-item-address-item" :key="addrIdx" v-for="(it, addrIdx) in item.aiPlanCards">{{ it.name+(addrIdx<item.g0-1?' → ':'') }}</text>
                </view>
                <view class="line-item-content" style="overflow:visible;">
                    <block :key="cIndex" v-for="(it, cIndex) in item.aiPlanCards">
                        <view :class="['drag-placeholder','',(isDragging||isDragReady)&&!isScrolling&&placeholderDayIdx===dayIdx&&placeholderIndex===cIndex?'active':'']" v-if="(isDragging||isDragReady)&&!isScrolling&&placeholderDayIdx===dayIdx&&placeholderIndex===cIndex&&!(dragDayIdx===dayIdx&&dragIndex===cIndex)"></view>
                        <view class="swipe-action-wrapper" :style="'width:'+'100%'+';'+'min-width:'+'100%'+';'">
                            <u-swipe-action :autoClose="true" :btnWidth="110" class=" vue-ref-in-for" :data-event-params="{dayIdx:dayIdx,cIndex:cIndex,dayIdx:dayIdx,cIndex:cIndex}" :ref="'swipeAction_'+it.id" :disabled="isDragging||isDragReady||hideSwipeActions" :index="it.id" :name="dayIdx+','+cIndex" :options="swipeOptions" :vueSlots="['default']" @actionClick="e0()" @click="e1()">
                                <view :class="['line-item-content-item','',(isDragging||isDragReady)&&dragDayIdx===dayIdx&&dragIndex===cIndex?'drag-hidden':'']" :id="'card-'+dayIdx+'-'+cIndex">
                                    <image class="headImg" :src="it.headImgUrl||'https://eshopfile.zhiyousx.com/175695850936006689.png'"></image>
                                    <view class="line-item-content-item-center">
                                        <view class="name">{{ it.name }}<image class="" src="https://eshopfile.zhiyousx.com/175748670570526060.png" v-if="it.isAdd"></image>
                                        </view>
                                        <view class="detail" v-if="it.tips||it.price&&it.price!==0||it.tag">
                                            <image class="icon" src="https://eshopfile.zhiyousx.com/175680058086856766.png "></image>
                                            <text class="">{{(it.price?'人均:'+it.price+'元，':'')+'\n                        '+(it.tips||'')}}</text>
                                        </view>
                                    </view>
                                    <image class="editIcon" src="https://eshopfile.zhiyousx.com/175697592461606191.png "></image>
                                </view>
                            </u-swipe-action>
                        </view>
                    </block>
                    <view :class="['drag-placeholder','',item.g2?'active':'']" v-if="item.g1"></view>
                </view>
                <view class="addSpotBtn">点击添加地点＋</view>
            </view>
            <view class="bottom" style="height:100rpx;"></view>
        </view>
    </scroll-view>
    <view class="spot-modal-mask" v-if="showSpotModal" @click="closeSpotModal($event)">
        <view class="spot-modal" @click.stop="($event)">
            <view class="spot-modal-header">
                <view :class="['spot-type-btn','',currentSpotType===typeItem.type?'active':'']" :key="type" v-for="(typeItem, __i0__) in spotTypeList">{{ typeItem.name }}</view>
            </view>
            <view class="spot-search-container">
                <u-search :animation="false" bgColor="#F5F5F5" borderColor="transparent" class="" height="70" :placeholder="'搜索'+$root.m0+'名称'" shape="round" :showAction="false" :value="spotSearchKeyword" @search="onSpotSearch()" @clear="onSpotSearchClear()" @input="spotSearchKeyword = $event; onSpotSearchInput()"></u-search>
            </view>
            <scroll-view class="spot-modal-content" :scrollY="true" @scrolltolower="onSpotScrollToLower($event)">
                <view class="spot-empty" v-if="$root.g3">
                    <image class="empty-image" src="https://eshopfile.zhiyousx.com/175671244741237616.png"></image>
                    <view class="empty-text">暂无相关数据</view>
                </view>
                <block v-else>
                    <view class="spot-item" :key="scenicId" v-for="(spot, __i1__) in $root.l1">
                        <view class="spot-item-left">
                            <view :class="['spot-add-btn','',spot.m1?'selected':'']"></view>
                        </view>
                        <view class="spot-item-right">
                            <image class="spot-image" :src="spot.mainPicture||''"></image>
                            <view class="spot-info">
                                <view class="spot-name singleLineText">{{spot.name}}</view>
                                <view class="spot-detail singleLineText" v-if="spot.tag">
                                    <text class="">{{spot.tag}}</text>
                                </view>
                            </view>
                        </view>
                    </view>
                </block>
                <view class="spot-loading" v-if="spotLoading">
                    <text class="">加载中...</text>
                </view>
                <block v-else>
                    <view class="spot-no-more" v-if="$root.g4">
                        <text class="">没有更多了</text>
                    </view>
                </block>
            </scroll-view>
            <view class="spot-modal-footer">
                <view class="complete-btn" @click="confirmSpotSelection($event)">完成</view>
            </view>
        </view>
    </view>
    <view class="delete-modal-mask" v-if="showDeleteModal" @click="closeDeleteModal($event)">
        <view class="delete-modal" @click.stop="($event)">确定要删除该日期下所有的行程吗？</view>
        <view class="delete-modal-btn">
            <view class="delete-modal-btn-cancel" @click="closeDeleteModal($event)"></view>
            <view class="delete-modal-btn-confirm" @click="confirmDelete($event)"></view>
        </view>
    </view>
    <view class="delete-modal-mask" v-if="showDeleteCardModal" @click="closeDeleteCardModal($event)">
        <view class="delete-modal" @click.stop="($event)">确定要删除该行程吗？</view>
        <view class="delete-modal-btn">
            <view class="delete-modal-btn-cancel" @click="closeDeleteCardModal($event)"></view>
            <view class="delete-modal-btn-confirm" @click="confirmDeleteCard($event)"></view>
        </view>
    </view>
    <uni-popup class=" vue-ref" ref="editTitlePopup" type="center" :vueSlots="['default']">
        <view class="budget-popup">
            <view class="popup-title">请输入您的总预算<image class="" src="https://eshopfile.zhiyousx.com/175706012529278173.png" @click="closeBudgetPopup($event)"></image>
            </view>
            <view class="budget-input-section">
                <view class="budget-input">
                    <input :adjustPosition="false" class="budget-input-native" :maxlength="8" min="0" :placeholder="oldBudget?'原预算为'+oldBudget:'请输入预算金额'" :value="budget" @input="budget = $event; handleBudgetInput($event)"></input>
                    <text class="budget-unit">元</text>
                </view>
            </view>
            <view class="popup-actions">
                <view class="popup-btn confirm" @click="confirmBudget($event)">确定</view>
            </view>
        </view>
    </uni-popup>
    <uni-popup class=" vue-ref" ref="avatarNicknamePopup" :maskClick="false" negativeTop="60rpx" type="center" :vueSlots="['default']">
        <view class="avatar-nickname-popup">
            <view class="avatar-section">
                <button class="avatar-btn" hoverClass="none" openType="chooseAvatar" @chooseavatar="onChooseAvatar($event)">
                    <image class="avatar-image" :src="tempAvatar||'https://eshopfile.zhiyousx.com/175747715812480897.png'"></image>
                </button>
                <text class="avatar-tip">点击选择头像</text>
            </view>
            <view class="nickname-section">
                <input class="nickname-input" placeholder="请输入昵称" type="nickname" :value="tempNickname" @focus="onNicknameFocus($event)" @input="tempNickname = $event"></input>
            </view>
            <view class="popup-actions">
                <button class="confirm-btn" @click="confirmAvatarNickname($event)">确认</button>
            </view>
        </view>
    </uni-popup>
    <view class="submit-btn" v-if="shoFloatBtn" @click="showBudgetPopup($event)">确认</view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          name: "editPage",
          onLoad: function(e) {
            this.sessionId = e.sessionId, this.isShare = e.type && "share" === e.type, this.isShare && this.getShareMemberInfo(), this.resetDrag(), this.getLineList();
            try {
              var i = uni.getSystemInfoSync();
              this.windowHeight = i.windowHeight || 0
            } catch (t) {
              this.windowHeight = 0
            }
          },
          onShow: function() {
            (this.isDragging || this.isDragReady) && this.resetDrag(), this.isScrolling = !1, this.lastScrollTime = 0
          },
          onHide: function() {
            this.resetDrag()
          },
          onUnload: function() {
            this.clearAllTimers(), this.resetDrag()
          },
          data: function() {
            return {
              sessionId: "",
              shoFloatBtn: !0,
              isShare: !1,
              lineList: [],
              swipeOptions: [{
                text: "",
                style: {
                  backgroundColor: "transparent",
                  backgroundImage: "url('https://eshopfile.zhiyousx.com/175688229568190089.png ')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "40rpx 40rpx"
                }
              }],
              isDragging: !1,
              isDragReady: !1,
              dragDayIdx: -1,
              dragIndex: -1,
              dragPlaceholderIndex: -1,
              placeholderIndex: -1,
              placeholderDayIdx: -1,
              lastPlaceholderIndex: -1,
              lastPlaceholderDayIdx: -1,
              dragItem: null,
              dragY: 0,
              dragX: 0,
              dragOffsetY: 0,
              touchStartY: 0,
              touchStartX: 0,
              dragThreshold: 10,
              windowHeight: 0,
              scrollTop: 0,
              isScrolling: !1,
              scrollEndTimer: null,
              isAtBottom: !1,
              scrollThrottleTimer: null,
              cachedMaxScrollTop: 0,
              lastScrollTime: 0,
              itemRects: [],
              allItemRects: [],
              autoScrollTimer: null,
              updatePlaceholderTimer: null,
              refreshItemRectsTimer: null,
              lastUpdateTime: 0,
              isAtBoundary: !1,
              bottomCheckTimer: null,
              showSpotModal: !1,
              currentSpotType: 1,
              spotTypeList: [{
                name: "景点",
                type: 1
              }, {
                name: "演出",
                type: 4
              }, {
                name: "美食",
                type: 2
              }, {
                name: "酒店",
                type: 3
              }],
              spotList: [],
              selectedSpots: [],
              currentDayIdx: 0,
              city: "",
              spotPageOn: 1,
              spotPageSize: 10,
              spotHasMore: !0,
              spotLoading: !1,
              spotSearchKeyword: "",
              spotSearchTimer: null,
              showDeleteModal: !1,
              deleteDayIdx: -1,
              showDeleteCardModal: !1,
              deleteCardIdx: -1,
              deleteCardDayIdx: -1,
              swipeActionKey: 0,
              forceCloseSwipe: !1,
              hideSwipeActions: !1,
              budget: "",
              tempAvatar: "",
              tempNickname: "",
              isSubmitting: !1,
              titlePeople: 1,
              oldBudget: ""
            }
          },
          computed: {
            dragGhostStyle: function() {
              if (!this.isDragging && !this.isDragReady) return "transform: translate3d(0, 0px, 0);";
              var t = this.dragY - this.dragOffsetY;
              return "transform: translate3d(0, ".concat(t, "px, 0);")
            }
          },
          methods: (s = {
            getShareMemberInfo: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/app/share/exist?openId=" + uni.getStorageSync("wxopenid") + "&sessionId=" + this.sessionId).then((function(t) {
                if (1 === t.code)
                  if (0 == t.data) e.shoFloatBtn = !1, e.showAvatarNicknamePopup();
                  else {
                    if (1 == t.data) return;
                    "object" === (0, o.default)(t.data) && (e.tempAvatar = t.data.avatarUrl || "https://eshopfile.zhiyousx.com/175747715812480897.png", e.tempNickname = t.data.name || "匿名用户", e.confirmAvatarNickname())
                  }
              }))
            },
            getLineList: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/queryById?id=" + this.sessionId).then((function(e) {
                1 === e.code && (t.lineList = e.data, t.oldBudget = e.data[0].totalPrice, t.lineList.forEach((function(t, e) {
                  t.aiPlanCards || (t.aiPlanCards = []), t.aiPlanCards.forEach((function(t, e) {
                    t.pictureUrl && (t.headImgUrl = JSON.parse(t.pictureUrl)[0])
                  }))
                })), t.city = t.lineList[0].city.replace("市", ""), t.titlePeople = t.lineList[0].titlePeople)
              }))
            },
            onSwipeClick: function(t, e, i) {
              this.showDeleteCardModal = !0, this.deleteCardDayIdx = e, this.deleteCardIdx = i
            },
            deleteDay: function(e) {
              1 != this.lineList.length ? (this.showDeleteModal = !0, this.deleteDayIdx = e) : uni.showToast({
                title: "至少保留一天!",
                icon: "none"
              })
            },
            getTypeName: function() {
              var t = this;
              return this.spotTypeList.find((function(e) {
                return e.type === t.currentSpotType
              })).name
            },
            addDay: function() {
              var e = this;
              this.lineList.length >= 5 ? uni.showToast({
                title: "最多添加5天!",
                icon: "none"
              }) : (this.lineList.push({
                aiPlanCards: [],
                day: this.lineList.length + 1,
                city: this.city + "市",
                openId: uni.getStorageSync("wxopenid"),
                bussType: 2,
                title: "AI旅游行程规划"
              }), this.$nextTick((function() {
                e.scrollToNewDay()
              })), uni.showToast({
                title: "添加天数成功",
                icon: "none"
              }))
            },
            closeDeleteModal: function() {
              this.showDeleteModal = !1
            },
            confirmDelete: function() {
              var t = this;
              this.lineList[this.deleteDayIdx].aiPlanCards.map((function(t) {
                return t.scenicId
              })).forEach((function(e) {
                t.$eventAnalyse.analyse({
                  eventTag: "aiTravel_edit_delete",
                  eventName: "旅行搭子卡片编辑删除",
                  eventParams: JSON.stringify({
                    sessionId: t.sessionId,
                    scenicId: e
                  })
                })
              })), this.lineList.splice(this.deleteDayIdx, 1), this.showDeleteModal = !1
            },
            closeDeleteCardModal: function() {
              this.showDeleteCardModal = !1
            },
            confirmDeleteCard: function() {
              var e = this;
              try {
                if (this.deleteCardDayIdx < 0 || this.deleteCardDayIdx >= this.lineList.length) return void uni.showToast({
                  title: "删除失败：无效的天数索引",
                  icon: "none"
                });
                var i = this.lineList[this.deleteCardDayIdx].aiPlanCards;
                if (!Array.isArray(i) || this.deleteCardIdx < 0 || this.deleteCardIdx >= i.length) return void uni.showToast({
                  title: "删除失败：无效的卡片索引",
                  icon: "none"
                });
                var a = 0;
                if (this.lineList.forEach((function(t) {
                    t.aiPlanCards && Array.isArray(t.aiPlanCards) && (a += t.aiPlanCards.length)
                  })), a <= 1) return uni.showToast({
                  title: "至少需要保留一个地点",
                  icon: "none"
                }), this.showDeleteCardModal = !1, this.deleteCardDayIdx = -1, void(this.deleteCardIdx = -1);
                this.$eventAnalyse.analyse({
                  eventTag: "aiTravel_edit_delete",
                  eventName: "旅行搭子卡片编辑删除",
                  eventParams: JSON.stringify({
                    sessionId: this.sessionId,
                    scenicId: this.lineList[this.deleteCardDayIdx].aiPlanCards[this.deleteCardIdx].scenicId
                  })
                });
                var s = this.deleteCardDayIdx,
                  r = this.deleteCardIdx;
                this.closeAllSwipeActions(), setTimeout((function() {
                  e.lineList[s].aiPlanCards.splice(r, 1), e.showDeleteCardModal = !1, e.deleteCardDayIdx = -1, e.deleteCardIdx = -1, e.$nextTick((function() {
                    e.forceUpdateSwipeActions()
                  })), uni.showToast({
                    title: "删除行程成功",
                    icon: "success"
                  })
                }), 150)
              } catch (e) {
                uni.showToast({
                  title: "删除失败",
                  icon: "none"
                })
              }
            },
            onCardLongPress: function(t, e, i, a) {
              var s = this;
              try {
                if (!this.lineList || !Array.isArray(this.lineList) || t < 0 || t >= this.lineList.length || !this.lineList[t] || !this.lineList[t].aiPlanCards || e < 0 || e >= this.lineList[t].aiPlanCards.length) return;
                if (this.isDragging || this.isDragReady) return this.resetDrag(), void this.$nextTick((function() {
                  s.prepareDrag(t, e, i, a)
                }));
                var r = Date.now() - this.lastScrollTime;
                if (this.isScrolling && r > 20) return;
                this.isScrolling && r <= 200 && (this.isScrolling = !1, this.scrollEndTimer && (clearTimeout(this.scrollEndTimer), this.scrollEndTimer = null)), a && (a.preventDefault(), a.stopPropagation()), this.prepareDrag(t, e, i, a)
              } catch (t) {
                console.error("长按开始错误:", t)
              }
            },
            onCardTouchMove: function(t, e, i, a) {
              (this.isDragReady || this.isDragging) && this.dragDayIdx === t && this.dragIndex === e && this.onDragGhostTouchMove(a)
            }
          }, (0, n.default)(s, "closeDeleteCardModal", (function() {
            this.showDeleteCardModal = !1, this.deleteCardDayIdx = -1, this.deleteCardIdx = -1, this.forceUpdateSwipeActions()
          })), (0, n.default)(s, "forceUpdateSwipeActions", (function() {
            var t = this;
            this.swipeActionKey++, this.$nextTick((function() {
              t.$forceUpdate()
            }))
          })), (0, n.default)(s, "closeAllSwipeActions", (function() {
            var t = this;
            this.$nextTick((function() {
              for (var e = 0; e < t.lineList.length; e++) {
                var i = t.lineList[e] && t.lineList[e].aiPlanCards;
                if (i && Array.isArray(i))
                  for (var a = 0; a < i.length; a++) {
                    var s = i[a];
                    if (s && s.id) {
                      var r = "swipeAction_".concat(s.id),
                        n = t.$refs[r];
                      if (n && n[0] && "function" == typeof n[0].close) try {
                        n[0].close()
                      } catch (t) {}
                    }
                  }
              }
            }))
          })), (0, n.default)(s, "onCardTouchEnd", (function(t, e, i, a) {
            (this.isDragReady || this.isDragging) && this.dragDayIdx === t && this.dragIndex === e && this.onDragGhostTouchEnd(a)
          })), (0, n.default)(s, "showBudgetPopup", (function() {
            this.$refs.editTitlePopup.open()
          })), (0, n.default)(s, "closeBudgetPopup", (function() {
            this.$refs.editTitlePopup.close()
          })), (0, n.default)(s, "handleBudgetInput", (function(t) {
            var e = this,
              i = /[^\d]/g;
            this.$nextTick((function() {
              e.budget = t.detail.value.replace(i, "")
            }))
          })), (0, n.default)(s, "confirmBudget", (function() {
            if (this.budget)
              if (Number(this.budget) <= 0) uni.showToast({
                title: "请输入大于0的预算金额",
                icon: "none"
              });
              else if (+this.budget > 5e4) uni.showToast({
              title: "金额过大，请输入小于50000的价格",
              icon: "none"
            });
            else {
              var e = 1;
              this.lineList && this.lineList.length > 0 && this.titlePeople && (e = parseInt(this.titlePeople) || 1);
              var i = 100 * e;
              Number(this.budget) < i ? uni.showToast({
                title: "预算不能少于".concat(i, "元"),
                icon: "none"
              }) : (this.closeBudgetPopup(), this.submitData())
            } else uni.showToast({
              title: "请输入预算金额",
              icon: "none"
            })
          })), (0, n.default)(s, "submitData", (function() {
            var e = this;
            if (this.lineList && 0 !== this.lineList.length) {
              var i = 0;
              if (this.lineList.forEach((function(t) {
                  t.aiPlanCards && Array.isArray(t.aiPlanCards) && (i += t.aiPlanCards.length)
                })), 0 !== i) {
                for (var a = 0; a < this.lineList.length; a++) {
                  var s = this.lineList[a];
                  if (!s.aiPlanCards || 0 === s.aiPlanCards.length) return void uni.showToast({
                    title: "第".concat(a + 1, "天至少需要添加一个地点"),
                    icon: "none"
                  });
                  if (s.aiPlanCards.length > 10) return void uni.showToast({
                    title: "第".concat(a + 1, "天最多只能添加10个地点"),
                    icon: "none"
                  })
                }
                var r = {
                  sessionId: this.sessionId,
                  totalDay: this.lineList.length,
                  price: this.budget,
                  budgetType: 1,
                  generateChildDTOList: [],
                  travelTitle: "".concat(this.lineList[0].city).concat(this.lineList.length, "天旅行计划")
                };
                this.tempAvatar && (r.editorHead = this.tempAvatar), this.lineList.forEach((function(i, a) {
                  var s = 0,
                    n = i.aiPlanCards.map((function(t) {
                      return c(c({}, t), {}, {
                        sort: 1 === t.type ? -1 : s++,
                        day: a + 1
                      })
                    }));
                  r.generateChildDTOList.push({
                    day: a + 1,
                    city: i.city,
                    openId: uni.getStorageSync("wxopenid"),
                    aiPlanCards: n,
                    bussType: 2,
                    title: "AI旅游行程规划",
                    travelTitle: i.city + e.lineList.length + "天旅行计划"
                  })
                })), this.$eventAnalyse.analyse({
                  eventTag: "aiTravel_edit_submit",
                  eventName: "旅行搭子卡片编辑提交",
                  eventParams: JSON.stringify({
                    sessionId: this.sessionId
                  })
                }), uni.setStorageSync("editParam", r);
                var n = this.isShare ? "2" : "1",
                  o = "/union/pages/aiTravel2/loadPage?type=edit&mode=".concat(n);
                uni.redirectTo({
                  url: o
                })
              } else uni.showToast({
                title: "请至少添加一个地点",
                icon: "none"
              })
            } else uni.showToast({
              title: "请至少添加一天行程",
              icon: "none"
            })
          })), (0, n.default)(s, "prepareDrag", (function(t, e, i, a) {
            var s = this;
            try {
              this.clearAllTimers(), this.dragDayIdx = t, this.dragIndex = e, this.dragPlaceholderIndex = e, this.placeholderIndex = e, this.placeholderDayIdx = t, this.dragItem = JSON.parse(JSON.stringify(i));
              var r = a && a.touches && a.touches[0] || {};
              this.touchStartY = r.clientY || 0, this.touchStartX = r.clientX || 0, this.dragY = this.touchStartY, this.dragX = this.touchStartX, this.dragOffsetY = 50, this.isDragReady = !0, this.$nextTick((function() {
                s.getItemRects(t).then((function(t) {
                  s.itemRects = t || [];
                  var i = t && t[e];
                  i && (s.dragOffsetY = (r.clientY || 0) - (i.top || 0)), s.initAllItemRects()
                })).catch((function(t) {
                  console.error("获取卡片位置错误:", t)
                }))
              }))
            } catch (t) {
              console.error("准备拖拽错误:", t), this.resetDrag()
            }
          })), (0, n.default)(s, "startNewDrag", (function(t, e, i, a) {
            var s = this;
            try {
              this.autoScrollTimer && (clearInterval(this.autoScrollTimer), this.autoScrollTimer = null), this.updatePlaceholderTimer && (clearTimeout(this.updatePlaceholderTimer), this.updatePlaceholderTimer = null), this.dragDayIdx = t, this.dragIndex = e, this.dragPlaceholderIndex = e, this.placeholderIndex = e, this.placeholderDayIdx = t, this.dragItem = JSON.parse(JSON.stringify(i));
              var r = a && a.touches && a.touches[0] || {};
              this.dragY = r.clientY || 0, this.dragX = r.clientX || 0, this.getItemRects(t).then((function(t) {
                s.itemRects = t || [];
                var i = t && t[e];
                s.dragOffsetY = i ? (r.clientY || 0) - (i.top || 0) : 0, s.isDragging = !0, s.initAllItemRects()
              })).catch((function(t) {
                console.error("获取卡片位置错误:", t), s.resetDrag()
              }))
            } catch (t) {
              console.error("开始新拖拽错误:", t), this.resetDrag()
            }
          })), (0, n.default)(s, "onPageTouchMove", (function(t) {
            !this.isDragging && this.isDragReady
          })), (0, n.default)(s, "calculateCurrentPositions", (function() {
            return this.allItemRects || []
          })), (0, n.default)(s, "onDragGhostTouchMove", (function(t) {
            var e = this,
              i = t && t.touches && t.touches[0] || {},
              a = i.clientY || 0,
              s = i.clientX || 0;
            if (this.isDragReady && !this.isDragging) {
              if (this.isScrolling) return void this.resetDrag();
              var r = Math.abs(a - this.touchStartY),
                n = Math.abs(s - this.touchStartX);
              if (!(r > this.dragThreshold || n > this.dragThreshold)) return t.preventDefault(), void t.stopPropagation();
              this.startActualDrag(), t.preventDefault(), t.stopPropagation()
            }(this.isDragging || this.isDragReady) && (this.validateDragState() ? (t.preventDefault(), t.stopPropagation(), Math.abs(a - this.dragY) > 1 && (this.dragY = a), Math.abs(s - this.dragX) > 1 && (this.dragX = s), this.tryAutoScroll(this.dragY), this.updatePlaceholderTimer && clearTimeout(this.updatePlaceholderTimer), this.updatePlaceholderTimer = setTimeout((function() {
              e.updatePlaceholderIndex()
            }), 50)) : this.resetDrag())
          })), (0, n.default)(s, "onDragGhostTouchEnd", (function(t) {
            var e = this;
            if (t && (t.preventDefault(), t.stopPropagation()), this.autoScrollTimer && (clearInterval(this.autoScrollTimer), this.autoScrollTimer = null), this.updatePlaceholderTimer && (clearTimeout(this.updatePlaceholderTimer), this.updatePlaceholderTimer = null), this.isDragging) {
              if (this.isScrolling) return void this.resetDrag();
              try {
                if (!this.lineList || !Array.isArray(this.lineList) || this.dragDayIdx < 0 || this.dragDayIdx >= this.lineList.length || !this.lineList[this.dragDayIdx] || !this.lineList[this.dragDayIdx].aiPlanCards) return void this.resetDrag();
                if (this.placeholderDayIdx < 0 || this.placeholderIndex < 0) return void this.resetDrag();
                var i = this.lineList[this.dragDayIdx].aiPlanCards,
                  a = this.lineList[this.placeholderDayIdx] && this.lineList[this.placeholderDayIdx].aiPlanCards;
                if (!Array.isArray(i) || !Array.isArray(a)) return void this.resetDrag();
                var s = this.dragDayIdx,
                  r = this.dragIndex,
                  n = this.placeholderDayIdx,
                  o = this.placeholderIndex;
                if (o < 0 && (o = 0), o > a.length && (o = a.length), s === n && r === o) return void this.resetDrag();
                var l = i.splice(r, 1)[0];
                s === n && o > r && (o -= 1), a.splice(o, 0, l), this.getContentHeight().then((function(t) {
                  e.cachedMaxScrollTop = t
                }))
              } catch (t) {
                console.error("拖拽结束错误:", t)
              }
            }
            this.resetDrag(), this.isAtBottom = !1
          })), (0, n.default)(s, "startActualDrag", (function() {
            this.isDragging = !0
          })), (0, n.default)(s, "onPageTouchEnd", (function(t) {
            !this.isDragging && this.isDragReady
          })), (0, n.default)(s, "openSpotModal", (function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            this.currentDayIdx = t, this.showSpotModal = !0, this.selectedSpots = [], this.currentSpotType = 1, this.loadSpotList(!0)
          })), (0, n.default)(s, "closeSpotModal", (function() {
            this.showSpotModal = !1, this.selectedSpots = [], this.spotSearchKeyword = "", this.spotSearchTimer && (clearTimeout(this.spotSearchTimer), this.spotSearchTimer = null)
          })), (0, n.default)(s, "selectSpotType", (function(t) {
            this.currentSpotType = t, this.spotList = [], this.loadSpotList(!0)
          })), (0, n.default)(s, "loadSpotList", (function() {
            var e = this,
              i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.spotLoading) {
              this.spotLoading = !0, i && (this.spotPageOn = 1, this.spotHasMore = !0);
              var a = {
                city: this.city,
                type: this.currentSpotType,
                pageOn: this.spotPageOn,
                pageSize: this.spotPageSize
              };
              this.spotSearchKeyword && this.spotSearchKeyword.trim() && (a.name = this.spotSearchKeyword.trim()), this.$uniApi.dataRequestNoLoading("GET", "ai/link/queryLocation", a).then((function(t) {
                var a = t.data.records || [];
                e.spotList = i ? a : [].concat((0, r.default)(e.spotList), (0, r.default)(a)), e.spotHasMore = a.length >= e.spotPageSize, e.spotHasMore && e.spotPageOn++, e.spotLoading = !1
              })).catch((function(i) {
                console.error("加载景点列表失败:", i), e.spotLoading = !1, uni.showToast({
                  title: "加载失败",
                  icon: "none"
                })
              }))
            }
          })), (0, n.default)(s, "onSpotSearch", (function(t) {
            this.spotSearchKeyword = t, this.performSpotSearch()
          })), (0, n.default)(s, "onSpotSearchClear", (function() {
            this.spotSearchKeyword = "", this.performSpotSearch()
          })), (0, n.default)(s, "onSpotSearchInput", (function(t) {
            var e = this;
            this.spotSearchKeyword = t, this.spotSearchTimer && clearTimeout(this.spotSearchTimer), this.spotSearchTimer = setTimeout((function() {
              e.performSpotSearch()
            }), 500)
          })), (0, n.default)(s, "performSpotSearch", (function() {
            this.spotPageOn = 1, this.spotHasMore = !0, this.spotList = [], this.loadSpotList(!0)
          })), (0, n.default)(s, "goToDetail", (function(e) {
            uni.navigateTo({
              url: "/pages/spotDetailNew/spotDetailNew?spotId=" + e.scenicId
            })
          })), (0, n.default)(s, "toggleSpotSelection", (function(t) {
            console.warn("无效的景点数据:", t);
            var e = this.selectedSpots.findIndex((function(e) {
              return e.scenicId === t.scenicId
            }));
            e > -1 ? this.selectedSpots.splice(e, 1) : this.selectedSpots.push(c(c({}, t), {}, {
              type: [0, 2, 1, 3][this.currentSpotType - 1]
            }))
          })), (0, n.default)(s, "isSpotSelected", (function(t) {
            return !(!t || !t.scenicId) && this.selectedSpots.some((function(e) {
              return e.scenicId === t.scenicId
            }))
          })), (0, n.default)(s, "confirmSpotSelection", (function() {
            var e, i = this;
            0 !== this.selectedSpots.length ? ((null === (e = this.lineList[this.currentDayIdx]) || void 0 === e ? void 0 : e.aiPlanCards) || []).length + this.selectedSpots.length > 10 ? uni.showToast({
              title: "一天最多只能添加10个地点",
              icon: "none"
            }) : (this.lineList[this.currentDayIdx] && (this.lineList[this.currentDayIdx].aiPlanCards || (this.lineList[this.currentDayIdx].aiPlanCards = []), this.selectedSpots.forEach((function(e) {
              i.$eventAnalyse.analyse({
                eventTag: "aiTravel_edit_add",
                eventName: "旅行搭子卡片编辑添加",
                eventParams: JSON.stringify({
                  sessionId: i.sessionId,
                  scenicId: e.scenicId
                })
              });
              var a = c(c({}, e), {}, {
                pictureUrl: '["'.concat(e.mainPicture, '"]'),
                headImgUrl: e.mainPicture,
                isAdd: !0,
                tips: e.tag,
                userId: uni.getStorageSync("wxopenid"),
                coordinate: e.longitude + "," + e.latitude
              });
              e.perCapitaConsumption && (a.price = e.perCapitaConsumption.replace("￥", "").replace("/人", "")), i.lineList[i.currentDayIdx].aiPlanCards.push(a)
            }))), this.closeSpotModal(), uni.showToast({
              title: "添加成功",
              icon: "success"
            })) : this.closeSpotModal()
          })), (0, n.default)(s, "onSpotScrollToLower", (function() {
            this.spotHasMore && !this.spotLoading && this.loadSpotList(!1)
          })), (0, n.default)(s, "validateDragState", (function() {
            return (this.isDragging || this.isDragReady) && this.dragDayIdx >= 0 && this.dragIndex >= 0 && this.dragItem && this.lineList && Array.isArray(this.lineList) && this.lineList[this.dragDayIdx] && this.lineList[this.dragDayIdx].aiPlanCards && Array.isArray(this.lineList[this.dragDayIdx].aiPlanCards) && this.dragIndex < this.lineList[this.dragDayIdx].aiPlanCards.length
          })), (0, n.default)(s, "resetDrag", (function() {
            var t = this;
            this.clearAllTimers(), this.isDragging = !1, this.isDragReady = !1, this.dragDayIdx = -1, this.dragIndex = -1, this.dragPlaceholderIndex = -1, this.placeholderIndex = -1, this.placeholderDayIdx = -1, this.lastPlaceholderIndex = -1, this.lastPlaceholderDayIdx = -1, this.dragItem = null, this.itemRects = [], this.allItemRects = [], this.dragOffsetY = 0, this.dragY = 0, this.dragX = 0, this.touchStartY = 0, this.touchStartX = 0, this.isAtBoundary = !1, this.isScrolling = !1, this.lastScrollTime = 0, this.getContentHeight().then((function(e) {
              t.cachedMaxScrollTop = e
            })), this.$nextTick((function() {
              t.$forceUpdate()
            }))
          })), (0, n.default)(s, "getItemRects", (function(e) {
            var i = this;
            return new Promise((function(a) {
              i.$nextTick((function() {
                var s = i.lineList[e] && i.lineList[e].aiPlanCards;
                if (s && Array.isArray(s)) {
                  for (var r = [], n = 0; n < s.length; n++) r.push("#card-".concat(e, "-").concat(n));
                  var o = uni.createSelectorQuery().in(i);
                  r.forEach((function(t) {
                    o.select(t).boundingClientRect()
                  })), o.exec((function(t) {
                    var e = t.filter((function(t) {
                      return t && void 0 !== t.top
                    }));
                    a(e)
                  }))
                } else a([])
              }))
            }))
          })), (0, n.default)(s, "batchQueryItemRects", (function() {
            var e = this;
            return new Promise((function(i) {
              e.$nextTick((function() {
                for (var a = [], s = [], r = 0; r < e.lineList.length; r++) {
                  var n = e.lineList[r] && e.lineList[r].aiPlanCards;
                  if (n && Array.isArray(n))
                    for (var o = 0; o < n.length; o++) s.push({
                      selector: "#card-".concat(r, "-").concat(o),
                      dayIdx: r,
                      cardIdx: o
                    })
                }
                if (0 !== s.length) {
                  var l = uni.createSelectorQuery().in(e);
                  s.forEach((function(t) {
                    l.select(t.selector).boundingClientRect()
                  })), l.exec((function(t) {
                    t.forEach((function(t, e) {
                      if (t && "number" == typeof t.top) {
                        var i = s[e];
                        a.push({
                          dayIdx: i.dayIdx,
                          cardIdx: i.cardIdx,
                          rect: t
                        })
                      }
                    })), a.sort((function(t, e) {
                      return t.rect.top - e.rect.top
                    })), e.allItemRects = a, i(a)
                  }))
                } else i([])
              }))
            }))
          })), (0, n.default)(s, "updatePlaceholderIndex", (function() {
            var t = this;
            if ((this.isDragging || this.isDragReady) && !this.isScrolling) {
              var e = Date.now();
              if (!(e - this.lastUpdateTime < 50)) {
                this.lastUpdateTime = e;
                var i = this.allItemRects || [];
                i.length > 0 ? this.updatePlaceholderWithRects(i) : this.refreshAllItemRects().then((function() {
                  var e = t.allItemRects || [];
                  e.length > 0 && t.updatePlaceholderWithRects(e)
                }))
              }
            }
          })), (0, n.default)(s, "refreshAllItemRects", (function() {
            var t = this;
            return new Promise((function(e) {
              t.$nextTick((function() {
                t.batchQueryItemRects().then((function() {
                  e()
                })).catch((function(t) {
                  console.error("刷新所有卡片位置错误:", t), e()
                }))
              }))
            }))
          })), (0, n.default)(s, "updatePlaceholderWithRects", (function(t) {
            for (var e = this, i = this.dragY, a = -1, s = -1, r = 0; r < t.length; r++) {
              var n = t[r];
              if (n && n.rect && "number" == typeof n.rect.top && "number" == typeof n.rect.height) {
                var o = n.dayIdx,
                  l = n.cardIdx,
                  c = n.rect;
                if (o !== this.dragDayIdx || l !== this.dragIndex) {
                  if (i >= c.top && i <= c.top + c.height) {
                    a = o, s = i < c.top + c.height / 2 ? l : l + 1;
                    break
                  }
                  if (r < t.length - 1) {
                    var h = t[r + 1];
                    if (h && h.rect && "number" == typeof h.rect.top && h.dayIdx === o) {
                      var d = c.top + c.height,
                        u = h.rect.top;
                      if (i >= d && i <= u) {
                        a = o, s = l + 1;
                        break
                      }
                      if (u - d < 20 && i >= d - 5 && i <= u + 5) {
                        a = o, s = l + 1;
                        break
                      }
                    }
                  }
                }
              }
            }
            if (-1 === a && t.length > 0) {
              var p = t[0],
                g = t[t.length - 1];
              p && p.rect && "number" == typeof p.rect.top && i < p.rect.top && (a = p.dayIdx, s = 0), -1 === a && g && g.rect && "number" == typeof g.rect.top && "number" == typeof g.rect.height && i > g.rect.top + g.rect.height && (a = g.dayIdx, s = this.lineList[g.dayIdx] && this.lineList[g.dayIdx].aiPlanCards ? this.lineList[g.dayIdx].aiPlanCards.length : 0)
            } - 1 !== a && (this.lastPlaceholderIndex = this.placeholderIndex, this.lastPlaceholderDayIdx = this.placeholderDayIdx, this.placeholderIndex = s, this.placeholderDayIdx = a, this.placeholderIndex === this.lastPlaceholderIndex && this.placeholderDayIdx === this.lastPlaceholderDayIdx || this.getContentHeight().then((function(t) {
              e.cachedMaxScrollTop = t
            })))
          })), (0, n.default)(s, "onScroll", (function(t) {
            var e = this;
            (this.isDragging || this.isDragReady) && (this.scrollTop = t.detail.scrollTop, this.isScrolling = !0, this.lastScrollTime = Date.now(), this.scrollThrottleTimer && clearTimeout(this.scrollThrottleTimer), this.scrollThrottleTimer = setTimeout((function() {
              e.checkIfAtBottom()
            }), 150), this.scrollEndTimer && clearTimeout(this.scrollEndTimer), this.scrollEndTimer = setTimeout((function() {
              e.isScrolling = !1, e.refreshAllItemRects()
            }), 200))
          })), (0, n.default)(s, "checkIfAtBottom", (function() {
            var t = this;
            (this.isDragging || this.isDragReady) && (this.cachedMaxScrollTop > 0 ? this.isAtBottom = this.scrollTop >= this.cachedMaxScrollTop - 20 : this.getContentHeight().then((function(e) {
              t.cachedMaxScrollTop = e, t.isAtBottom = t.scrollTop >= e - 20
            })))
          })), (0, n.default)(s, "tryAutoScroll", (function(t) {
            var e = this;
            try {
              if (!this.isDragging && !this.isDragReady) return;
              if (!this.windowHeight) return;
              0 === this.cachedMaxScrollTop && this.getContentHeight().then((function(t) {
                e.cachedMaxScrollTop = t
              })), t < 100 ? (this.isAtBoundary = !0, this.autoScrollTimer || (this.autoScrollTimer = setInterval((function() {
                var t = Math.max(0, e.scrollTop - 30);
                t !== e.scrollTop ? (e.scrollTop = t, e.updatePlaceholderIndex()) : (clearInterval(e.autoScrollTimer), e.autoScrollTimer = null)
              }), 100))) : t > this.windowHeight - 100 ? (this.isAtBoundary = !0, this.autoScrollTimer || (this.autoScrollTimer = setInterval((function() {
                var t = e.cachedMaxScrollTop || 0,
                  i = Math.min(e.scrollTop + 30, t);
                i !== e.scrollTop && e.scrollTop < t ? (e.scrollTop = i, e.updatePlaceholderIndex(), e.scrollTop >= t - 10 && (e.isAtBottom = !0, clearInterval(e.autoScrollTimer), e.autoScrollTimer = null)) : (e.isAtBottom = !0, clearInterval(e.autoScrollTimer), e.autoScrollTimer = null)
              }), 100))) : (this.isAtBoundary = !1, this.isAtBottom = !1, this.autoScrollTimer && (clearInterval(this.autoScrollTimer), this.autoScrollTimer = null))
            } catch (t) {}
          })), (0, n.default)(s, "getContentHeight", (function() {
            var e = this;
            return new Promise((function(i) {
              e.cachedMaxScrollTop > 0 && !e.isDragging && !e.isDragReady ? i(e.cachedMaxScrollTop) : e.$nextTick((function() {
                uni.createSelectorQuery().in(e).select(".line-list").boundingClientRect((function(t) {
                  if (t && t.height) {
                    var a = Math.max(0, t.height - e.windowHeight + 200);
                    e.cachedMaxScrollTop = a, i(a)
                  } else i(e.cachedMaxScrollTop || 999999)
                })).exec()
              }))
            }))
          })), (0, n.default)(s, "initAllItemRects", (function() {
            var t = this;
            return new Promise((function(e) {
              t.$nextTick((function() {
                t.batchQueryItemRects().then((function() {
                  e()
                })).catch((function(t) {
                  console.error("初始化所有卡片位置错误:", t), e()
                }))
              }))
            }))
          })), (0, n.default)(s, "onChooseAvatar", (function(e) {
            var i = this;
            uni.uploadFile({
              url: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
              filePath: e.detail.avatarUrl,
              name: "images",
              success: function(e) {
                var a = JSON.parse(e.data);
                1 == a.code && a.data && a.data[0] && (i.tempAvatar = a.data[0].maxImageUrl), setTimeout((function() {
                  i.showHide = !0, uni.hideLoading()
                }), 1e3)
              },
              fail: function(e) {
                uni.hideLoading(), i.tempAvatar = "https://eshopfile.zhiyousx.com/175747715812480897.png".showHide = !0
              }
            })
          })), (0, n.default)(s, "onNicknameFocus", (function() {})), (0, n.default)(s, "confirmAvatarNickname", (function() {
            var e = this;
            if (!this.isSubmitting) {
              this.isSubmitting = !0;
              var i = {
                cardId: this.sessionId,
                openId: uni.getStorageSync("wxopenid"),
                avatarUrl: this.tempAvatar || "https://eshopfile.zhiyousx.com/175747715812480897.png",
                name: this.tempNickname || "匿名用户"
              };
              this.$uniApi.dataRequestNoLoading("POST", "ai/app/share/add", i).then((function(t) {
                1 === t.code ? (e.shoFloatBtn = !0, e.closeAvatarNicknamePopup(), e.isSubmitting = !1) : e.isSubmitting = !1
              }))
            }
          })), (0, n.default)(s, "closeAvatarNicknamePopup", (function() {
            this.$refs.avatarNicknamePopup.close()
          })), (0, n.default)(s, "showAvatarNicknamePopup", (function() {
            this.$refs.avatarNicknamePopup.open()
          })), (0, n.default)(s, "scrollToNewDay", (function() {
            var e = this,
              i = this.lineList.length - 1;
            this.$nextTick((function() {
              uni.createSelectorQuery().in(e).select("#day-".concat(i)).boundingClientRect((function(i) {
                i ? uni.createSelectorQuery().in(e).select(".scroll-container").boundingClientRect((function(t) {
                  if (t) {
                    var a = i.top - t.top + e.scrollTop;
                    e.scrollTop = a
                  }
                })).exec() : e.scrollToBottom()
              })).exec()
            }))
          })), (0, n.default)(s, "scrollToBottom", (function() {
            var t = this;
            this.getContentHeight().then((function(e) {
              t.scrollTop = e
            }))
          })), (0, n.default)(s, "clearAllTimers", (function() {
            this.autoScrollTimer && (clearInterval(this.autoScrollTimer), this.autoScrollTimer = null), this.updatePlaceholderTimer && (clearTimeout(this.updatePlaceholderTimer), this.updatePlaceholderTimer = null), this.scrollEndTimer && (clearTimeout(this.scrollEndTimer), this.scrollEndTimer = null), this.scrollThrottleTimer && (clearTimeout(this.scrollThrottleTimer), this.scrollThrottleTimer = null), this.bottomCheckTimer && (clearTimeout(this.bottomCheckTimer), this.bottomCheckTimer = null), this.spotSearchTimer && (clearTimeout(this.spotSearchTimer), this.spotSearchTimer = null)
          })), s)
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#fff;box-sizing:border-box;display:-webkit-flex;display:flex;flex-direction:column;height:100vh;overflow-x:hidden;width:100%}.page-box .scroll-container{-webkit-overflow-scrolling:touch;box-sizing:border-box;flex:1;height:100%;overflow-x:hidden}.page-box .line-list{box-sizing:border-box;margin:0 auto;max-width:100%;overflow-x:hidden;overflow-y:visible;width:690rpx}.page-box .line-list .line-item{margin-bottom:24rpx;width:100%}.page-box .line-list .line-item-title{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.page-box .line-list .delete{background:url('https://eshopfile.zhiyousx.com/175688229568190089.png')no-repeat;background-size:100% 100%;height:40rpx;width:40rpx}.page-box .line-list .line-item-day{color:rgba(0,0,0,.85);display:inline-block;font-size:32rpx;font-weight:700;letter-spacing:1px;line-height:56rpx;margin-bottom:16rpx;position:relative;z-index:1}.page-box .line-list .line-item-day::after{background:url('https://eshopfile.zhiyousx.com/175679805644054579.png')no-repeat;background-size:100% 100%;bottom:3rpx;content:"";display:block;height:16rpx;left:-2rpx;position:absolute;width:110%;z-index:-1}.page-box .line-list .line-item-address{margin-bottom:12rpx}.page-box .line-list .line-item-address-item{color:rgba(0,0,0,.85);font-size:26rpx;font-weight:700;line-height:50rpx}.page-box .line-list .swipe-action-wrapper{box-sizing:border-box;min-width:100%;width:100%}.page-box .line-list .line-item-content-item{align-items:center;background:#f8f6ff;border-radius:20rpx 20rpx 20rpx 20rpx;box-shadow:0rpx 8rpx 8rpx 0rpx rgba(0,0,0,.2);box-sizing:border-box;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:20rpx;max-width:100%;min-width:100%;overflow:hidden;padding:16rpx 20rpx;width:100%}.page-box .line-list .line-item-content-item .headImg{border-radius:20rpx 20rpx 20rpx 20rpx;height:100rpx;margin-right:20rpx;width:100rpx}.page-box .line-list .drag-placeholder{background:rgba(134,102,253,.1);border-radius:10rpx;height:0;margin:0;overflow:hidden;width:100%}.page-box .line-list .drag-placeholder.active{height:100rpx;margin:10rpx 0}.page-box .line-list .drag-hidden{opacity:0;pointer-events:auto}.page-box .line-list .swipe-right{align-items:center;background:#ff4d4f;border-radius:0 20rpx 20rpx 0;display:-webkit-flex;display:flex;height:100%;justify-content:center;width:160rpx}.page-box .line-list .trashIcon{height:48rpx;width:48rpx}.page-box .line-list .line-item-content-item-center{flex:1;margin-right:20rpx;max-width:calc(100% - 168rpx);min-width:0;width:468rpx}.page-box .line-list .line-item-content-item-center .name{color:#1e1b19;font-size:30rpx;font-weight:700;line-height:42rpx;margin-bottom:12rpx}.page-box .line-list .line-item-content-item-center .name image{height:25rpx;margin-left:10rpx;width:45rpx}.page-box .line-list .line-item-content-item-center .detail{color:rgba(0,0,0,.65);display:-webkit-flex;display:flex;font-size:24rpx;line-height:32rpx;vertical-align:top}.page-box .line-list .line-item-content-item-center .detail text{color:rgba(0,0,0,.65);flex:none;max-width:460rpx}.page-box .line-list .line-item-content-item-center .detail .icon{flex:none;height:28rpx;margin-right:8rpx;vertical-align:top;width:28rpx}.page-box .line-list .editIcon{height:16rpx;width:28rpx}.u-swipe-action,.u-swipe-content,.u-swipe-view{overflow:visible!important}.drag-ghost{justify-content:center;left:0;perspective:1000px;pointer-events:none;position:fixed;top:0;width:100%;z-index:9999}.drag-ghost,.drag-ghost .drag-ghost-content{backface-visibility:hidden;display:-webkit-flex;display:flex;transform:translateZ(0);will-change:transform}.drag-ghost .drag-ghost-content{align-items:center;background:#f8f6ff;border-radius:20rpx 20rpx 20rpx 20rpx;box-shadow:0rpx 4rpx 8rpx 0rpx rgba(0,0,0,.15);justify-content:space-between;padding:16rpx 20rpx;width:690rpx}.drag-ghost .drag-ghost-content .headImg{border-radius:20rpx 20rpx 20rpx 20rpx;height:100rpx;margin-right:20rpx;width:100rpx}.drag-ghost .drag-ghost-content .line-item-content-item-center{flex:1;margin-right:20rpx;max-width:calc(100% - 168rpx);min-width:0;width:468rpx}.drag-ghost .drag-ghost-content .line-item-content-item-center .name{color:#1e1b19;font-size:30rpx;font-weight:700;line-height:42rpx;margin-bottom:12rpx}.drag-ghost .drag-ghost-content .line-item-content-item-center .detail{color:rgba(0,0,0,.65);display:-webkit-flex;display:flex;font-size:24rpx;line-height:32rpx;vertical-align:top}.drag-ghost .drag-ghost-content .line-item-content-item-center .detail text{color:rgba(0,0,0,.65);flex:none;max-width:460rpx}.drag-ghost .drag-ghost-content .line-item-content-item-center .detail .icon{flex:none;height:28rpx;margin-right:8rpx;vertical-align:top;width:28rpx}.drag-ghost .drag-ghost-content .editIcon{height:16rpx;width:28rpx}.addDayBtn{background:#515151;border-radius:64rpx 64rpx 64rpx 64rpx;bottom:120rpx;box-shadow:0rpx 8rpx 20rpx 0rpx rgba(0,0,0,.1);font-size:28rpx;padding:0 30rpx}.addDayBtn,.submit-btn{color:#fff;font-weight:700;height:80rpx;left:30rpx;line-height:80rpx;position:fixed;z-index:9999}.submit-btn{background:linear-gradient(90deg,#ad97ff,#d988ff);border-radius:64rpx;bottom:20rpx;box-shadow:0rpx 8rpx 20rpx 0rpx rgba(128,86,255,.25);right:30rpx}.addSpotBtn,.submit-btn{font-size:32rpx;text-align:center}.addSpotBtn{background:#f8f6ff;border-radius:20rpx 20rpx 20rpx 20rpx;color:rgba(0,0,0,.85);font-weight:700;height:134rpx;line-height:134rpx;width:100%}.spot-modal-mask{align-items:flex-end;background:rgba(0,0,0,.5);bottom:0;height:100%;left:0;position:fixed;right:0;top:0;z-index:10001}.spot-modal,.spot-modal-mask{display:-webkit-flex;display:flex;width:100%}.spot-modal{background:#fff;border-radius:20rpx 20rpx 0 0;flex-direction:column;max-height:80vh;min-height:400rpx}.spot-modal-header{display:-webkit-flex;display:flex;padding:50rpx 20rpx 0}.spot-type-btn{background:rgba(30,27,25,.05);border-radius:30rpx;color:rgba(0,0,0,.85);flex:1;font-size:28rpx;height:60rpx;line-height:60rpx;margin:0 10rpx;text-align:center;transition:all .3s}.spot-type-btn.active{background:#515151;color:#bfacff}.spot-search-container{border-bottom:1rpx solid #f0f0f0;padding:20rpx 30rpx}.spot-modal-content{flex:none;height:50vh;padding:20rpx 30rpx}.spot-item{align-items:center;display:-webkit-flex;display:flex;margin-bottom:12rpx;padding:20rpx 0}.spot-item:last-child{border-bottom:none}.spot-item-left{margin-right:32rpx}.spot-add-btn{background:url('https://eshopfile.zhiyousx.com/175740031389347882.png')no-repeat;background-size:100% 100%;height:60rpx;transition:all .3s;width:60rpx}.spot-add-btn.selected{background:url('https://eshopfile.zhiyousx.com/175740054571537270.png')no-repeat;background-size:100% 100%;height:60rpx;width:60rpx}.spot-item-right{align-items:center;display:-webkit-flex;display:flex;flex:1}.spot-image{border-radius:10rpx;height:100rpx;margin-right:20rpx;width:100rpx}.spot-info{flex:1}.spot-name{color:#1e1b19;font-size:30rpx;font-weight:700;line-height:42rpx;margin-bottom:12rpx;max-width:450rpx}.spot-detail{color:#666;font-size:24rpx;line-height:1.4;max-width:450rpx}.spot-modal-footer{border-top:1rpx solid #f0f0f0;padding:30rpx 20rpx}.complete-btn{background:linear-gradient(90deg,#ad97ff,#d988ff);border-radius:64rpx;box-shadow:0rpx 8rpx 20rpx 0rpx rgba(128,86,255,.25);color:#fff;font-size:32rpx;height:80rpx;line-height:80rpx;text-align:center;width:100%}.spot-loading,.spot-no-more{color:#999;font-size:24rpx;padding:30rpx 0;text-align:center}.spot-empty{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;margin-left:-30rpx;padding:100rpx 0;text-align:center}.empty-image{height:200rpx;margin-bottom:30rpx;opacity:.6;width:200rpx}.empty-text{color:#666;font-size:32rpx;font-weight:700;margin-bottom:16rpx}.empty-tip{color:#999;font-size:26rpx;line-height:1.5}.delete-modal-mask{align-items:center;background:rgba(0,0,0,.5);bottom:0;display:-webkit-flex;display:flex;flex-direction:column;height:100%;justify-content:flex-end;left:0;padding-bottom:70rpx;position:fixed;right:0;top:0;width:100%;z-index:10001}.delete-modal-mask .delete-modal{background:#fff;border-radius:20rpx 20rpx 20rpx 20rpx;box-shadow:0rpx 8rpx 12rpx 0rpx rgba(0,0,0,.1);color:rgba(0,0,0,.85);font-size:32rpx;height:176rpx;line-height:176rpx;margin-bottom:60rpx;text-align:center;width:690rpx}.delete-modal-mask .delete-modal-btn{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.delete-modal-mask .delete-modal-btn .delete-modal-btn-confirm{background:url('https://eshopfile.zhiyousx.com/175740556873334961.png')no-repeat 50%;background-size:100% 100%;height:110rpx;width:110rpx}.delete-modal-mask .delete-modal-btn .delete-modal-btn-cancel{background:url('https://eshopfile.zhiyousx.com/175740564821780271.png')no-repeat 50%;background-size:100% 100%;height:110rpx;margin-right:160rpx;width:110rpx}.budget-popup{background:#fff;border-radius:20rpx;box-sizing:border-box;padding:40rpx 30rpx 30rpx;width:690rpx}.popup-title{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:10rpx}.popup-title image{height:40rpx;width:40rpx}.budget-type-section{margin-bottom:30rpx}.budget-type-title{background:rgba(30,27,25,.05);border-radius:10rpx;color:#666;font-size:26rpx;padding:20rpx;text-align:center}.budget-input-section{margin-bottom:40rpx}.budget-input-label{color:#1e1b19;font-size:28rpx;font-weight:700;margin-bottom:20rpx}.budget-input{align-items:center;background:#f8f6ff;border-radius:10rpx;box-sizing:border-box;display:-webkit-flex;display:flex;height:80rpx;padding:0 20rpx;position:relative;width:100%}.budget-input-native{background:transparent;border:none;color:#1e1b19;font-size:28rpx;height:100%;outline:none;padding-right:60rpx;width:100%}.budget-unit{color:#666;font-size:28rpx;pointer-events:none;position:absolute;right:30rpx;top:50%;transform:translateY(-50%)}.popup-btn{border-radius:35rpx;font-size:28rpx;font-weight:700;height:70rpx;line-height:70rpx;text-align:center;width:100%}.popup-btn.confirm{background:linear-gradient(90deg,#ad97ff,#d988ff);box-shadow:0rpx 8rpx 20rpx 0rpx rgba(128,86,255,.25);color:#fff}.avatar-nickname-popup{align-items:center;background:#fff;border-radius:20rpx;display:-webkit-flex;display:flex;flex-direction:column;padding:60rpx 40rpx 40rpx;width:690rpx}.popup-title{color:#1e1b19;font-size:32rpx;font-weight:700;margin-bottom:60rpx}.avatar-section{flex-direction:column;margin-bottom:20rpx}.avatar-btn,.avatar-section{align-items:center;display:-webkit-flex;display:flex}.avatar-btn{background:#f5f5f5;border:none;border-radius:100%;height:166rpx;justify-content:center;margin:0;overflow:hidden;padding:0;width:166rpx}.avatar-image{border-radius:100%;height:100%;width:100%}.avatar-tip{color:#999;font-size:26rpx;margin-top:20rpx}.nickname-section{margin-bottom:60rpx;width:100%}.nickname-input{background:rgba(0,0,0,.04);border:none;border-radius:64rpx 64rpx 64rpx 64rpx;box-sizing:border-box;color:#1e1b19;font-size:28rpx;height:90rpx;outline:none;padding:0 20rpx;width:100%}.nickname-input::-webkit-input-placeholder{color:#999}.nickname-input::placeholder{color:#999}.popup-actions{width:100%}.confirm-btn,.popup-actions{display:-webkit-flex;display:flex;justify-content:center}.confirm-btn{align-items:center;background:linear-gradient(90deg,#ad97ff,#d988ff);border:none;border-radius:10rpx;box-shadow:0rpx 8rpx 20rpx 0rpx rgba(128,86,255,.25);color:#fff;font-size:28rpx;font-weight:700;height:80rpx;width:200rpx}
</style>
