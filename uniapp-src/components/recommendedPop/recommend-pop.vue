<template>
<uni-popup class="recommended-popup vue-ref" ref="recommendPop" type="center" :vueSlots="['default']">
    <view class="popup-box" v-if="scenicSpotlistData&&scenicSpotlistData.itemId">
        <view class="popup-box-count">
            <view class="popup-content">
                <view class="_div">{{'当前'+bizTypeText+'已售罄! 您可选择前往'+goSpotData}}</view>
            </view>
            <view class="coupon-section" v-if="scenicSpotlistData.selloutSuggestCouponVO&&scenicSpotlistData.selloutSuggestCouponVO&&scenicSpotlistData.selloutSuggestCouponVO.couponList">
                <scroll-view class="cate-box" :scrollX="true">
                    <view class="coupon-item" :style="'width:'+(el.g0>1?'90%':'100%')+';'+'margin-right:'+(el.g1?'20rpx':'0')+';'" :key="i" v-for="(el, i) in $root.l0">
                        <view class="coupon-item-box">
                            <view class="coupon-content">
                                <view class="price-section" v-if="el.type==3">
                                    <text class="amount">0元购</text>
                                </view>
                                <view class="price-section" v-else>￥<text class="amount">{{ el.quota }}</text>
                                </view>
                                <view class="info-section">
                                    <view class="spot-name">{{ el.name }}</view>
                                    <view class="coupon-desc">游陕西专属优惠券</view>
                                </view>
                            </view>
                            <view class="receive-btn">{{ el.m0 }}</view>
                        </view>
                    </view>
                </scroll-view>
            </view>
            <view class="divider" v-if="scenicSpotlistData.selloutSuggestScenicList">
                <view class="card_top" :style="'margin-bottom:'+(index==time.g2-1?'0':'40rpx')+';'" :key="index" v-for="(time, index) in $root.l1">
                    <image class="head_img" mode="aspectFill" :src="time.mainPic"></image>
                    <view class="card_info">
                        <view class="card_title _p">{{time.scenicName}}</view>
                        <view class="ranking singleLineText" v-if="time.originSortInRankingVO.contentId">
                            <view class="text">
                                <view class="name singleLineText">{{''+time.originSortInRankingVO.rankingName+'第'+time.originSortInRankingVO.indexInRanking+'名'}}</view>
                            </view>
                        </view>
                        <view class="card_ticket" v-if="time.ticketName">
                            <view class="ding">订</view>
                            <view class="price">{{ (time.price==0?'免费':'￥'+time.price) }}</view>
                            <view class="ticketName singleLineText">{{time.ticketName}}</view>
                        </view>
                        <view class="distance" v-if="time.distance<=3">{{'距当前景区'+time.m1+''}}</view>
                    </view>
                </view>
            </view>
            <view class="subscription-tip">关注最新门票信息，一键订阅<label class="highlight _span" @click="subscription($event)">余票提醒</label>
            </view>
            <view class="button-group">
                <view class="btn btn-cancel" @click="notNeeded($event)">暂不需要</view>
                <view class="btn btn-confirm" @click="viewDetails($event)">查看详情</view>
            </view>
        </view>
    </view>
</uni-popup>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          props: {
            dialogInfos: {
              type: Object,
              default: function() {}
            }
          },
          watch: {
            dialogInfos: {
              handler: function(e) {
                e.showPop && (this.scenicSpotlistData = e)
              },
              deep: !0
            }
          },
          data: function() {
            return {
              scenicSpotlistData: {}
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            },
            bizTypeText: function() {
              if (console.log(this.scenicSpotlistData, "this.scenicSpotlistData"), 1 == this.scenicSpotlistData.selloutSuggestTicketType) switch (this.scenicSpotlistData.isSingleVote) {
                case 1:
                  return "景区门票";
                case 2:
                case 3:
                  return "门票";
                default:
                  return ""
              } else switch (this.scenicSpotlistData.isSingleVote) {
                case 1:
                  return "演出";
                case 2:
                case 3:
                  return "演出票";
                default:
                  return ""
              }
            },
            goSpotData: function() {
              if (this.scenicSpotlistData.selloutSuggestScenicList && this.scenicSpotlistData.selloutSuggestScenicList.length > 0) {
                var e = 1 == this.scenicSpotlistData.selloutSuggestScenicList[0].selloutSuggestTicketType ? "游玩" : "观演";
                return this.scenicSpotlistData.selloutSuggestScenicList[0].scenicName + e
              }
              return ""
            }
          },
          methods: {
            setDistance: function(e) {
              return e < 1 ? 1e3 * e + "m" : e + "km"
            },
            receive: function(e) {
              var t = this;
              if (1 == e) {
                var s = this.scenicSpotlistData.selloutSuggestCouponVO.couponList.map((function(e) {
                  return e.couponId
                }));
                this.$eventAnalyse.analyse({
                  eventTag: "shortSelling_coupon_click",
                  eventName: "领取售空推荐优惠卷",
                  eventParams: {
                    ids: s
                  }
                }), this.$uniApi.dataRequestYesLoading("POST", "product/app/v1/CouponReceive/receiveDriverCouponBatch", s).then((function(e) {
                  1 === e.code && (t.$uni.showToast("领取成功"), t.$emit("refreshCoupon"))
                }))
              } else 3 == e && (this.$eventAnalyse.analyse({
                eventTag: "shortSelling_goUseIt_click",
                eventName: "去推荐景区使用售空推荐优惠卷",
                eventParams: {
                  spotId: this.scenicSpotlistData.selloutSuggestScenicList[0].scenicId
                }
              }), this.$refs.recommendPop.close(), this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + this.scenicSpotlistData.selloutSuggestScenicList[0].scenicId
              }))
            },
            btnText: function(e) {
              switch (e) {
                case 1:
                  return "立即领取";
                case 2:
                  return "已抢光";
                case 3:
                  return "立即使用"
              }
            },
            goSpot: function(e) {
              this.$eventAnalyse.analyse({
                eventTag: "shortSelling_scenicSpot_click",
                eventName: "跳转推荐的景区",
                eventParams: {
                  spotId: e
                }
              }), this.$refs.recommendPop.close(), this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + e
              })
            },
            open: function() {
              this.$eventAnalyse.analyse({
                eventTag: "shortSelling_dialogOpen_click",
                eventName: "弹出售空推荐弹窗"
              }), this.$refs.recommendPop.open()
            },
            notNeeded: function() {
              this.$eventAnalyse.analyse({
                eventTag: "shortSelling_notNeeded_click",
                eventName: "点击售空弹窗的暂不需要"
              }), this.$refs.recommendPop.close(), this.dialogInfos.backPage && this.$util.goBack()
            },
            viewDetails: function() {
              this.$eventAnalyse.analyse({
                eventTag: "shortSelling_goView_click",
                eventName: "点击售空弹窗的查看详情",
                eventParams: {
                  spotId: this.scenicSpotlistData.selloutSuggestScenicList[0].scenicId
                }
              }), this.$refs.recommendPop.close(), this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + this.scenicSpotlistData.selloutSuggestScenicList[0].scenicId
              })
            },
            getbizName: function(e) {
              switch (e) {
                case 3:
                  return "单票有库存";
                case 4:
                  return "聚合门票有库存";
                case 5:
                  return "景区开售";
                case 6:
                  return "景区售空后有票"
              }
            },
            subscription: function() {
              var t = uni.getStorageSync("wxopenid");
              if (this.$eventAnalyse.analyse({
                  eventTag: "shortSelling_subscribeTo_click",
                  eventName: "点击售空弹窗的余票订阅",
                  eventParams: {
                    bizParam: {
                      scenicSpotId: this.scenicSpotlistData.scenicSpotId || ""
                    },
                    memberId: this.userInfo.memberId,
                    openId: t,
                    bizId: this.scenicSpotlistData.itemId,
                    mobile: this.userInfo.mobilePhone,
                    bizType: this.scenicSpotlistData.bizType,
                    bizName: this.getbizName(this.scenicSpotlistData.bizType)
                  }
                }), this.$util.isLogin()) {
                var s = "kYcaybflZRSVsYu-4nEatkEc-1YNbV-GEGwRde1G5YE",
                  n = this;
                uni.requestSubscribeMessage({
                  tmplIds: [s],
                  success: function(e) {
                    "accept" == e[s] && n.$uniApi.dataRequestNoLoading("POST", "product/app/v1/subscribe/applySubscribe", {
                      bizParam: {
                        scenicSpotId: n.scenicSpotlistData.scenicSpotId || ""
                      },
                      memberId: n.userInfo.memberId,
                      openId: t,
                      bizId: n.scenicSpotlistData.itemId,
                      mobile: n.userInfo.mobilePhone,
                      bizType: n.scenicSpotlistData.bizType,
                      bizName: n.getbizName(n.scenicSpotlistData.bizType)
                    }).then((function(e) {
                      1 === e.code ? (console.log(e.data), n.$uni.showToast("余票订阅成功")) : n.$uni.showToast(e.msg)
                    })).catch((function(e) {
                      n.$uni.showToast("余票订阅失败")
                    }))
                  },
                  fail: function(e) {
                    n.$uni.showToast("余票订阅失败")
                  }
                })
              }
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.popup-box{background-color:#fff;border-radius:20rpx;height:auto;width:640rpx}.popup-box .popup-box-count{padding:30rpx}.popup-box .popup-content{margin-bottom:40rpx}.popup-box .popup-content ._div{font-size:36rpx}.popup-box .popup-content ._div,.popup-box .subscription-tip{color:#333;font-family:Source Han Sans SC;font-style:normal;font-weight:400;line-height:60rpx;text-align:center;text-transform:none}.popup-box .subscription-tip{font-size:26rpx;margin-bottom:20rpx}.popup-box .button-group{display:-webkit-flex;display:flex;height:80rpx;justify-content:center;margin-bottom:15rpx;overflow:hidden}.popup-box .button-group .btn{border-radius:40rpx 40rpx 40rpx 40rpx;padding:21rpx 60rpx}.popup-box .button-group .btn-cancel{border:2rpx solid rgba(0,0,0,.3);color:rgba(0,0,0,.8);margin-right:30rpx}.popup-box .button-group .btn-cancel,.popup-box .button-group .btn-confirm{align-items:center;display:-webkit-flex;display:flex;font-family:Source Han Sans SC;font-size:26rpx;font-style:normal;font-weight:400;height:70rpx;justify-content:center;text-align:center;text-transform:none}.popup-box .button-group .btn-confirm{border:2rpx solid #ff5411;color:#ff5411}.popup-box .highlight{border:2rpx solid #ff5411;border-radius:10rpx 10rpx 10rpx 10rpx;color:#ff5411;font-family:Source Han Sans SC;font-size:26rpx;font-style:normal;font-weight:400;margin-left:20rpx;padding:4rpx 10rpx;text-align:left;text-transform:none}.popup-box .divider{background-color:#f8f3e9;border-radius:20rpx 20rpx 20rpx 20rpx;margin-bottom:47rpx;padding:14rpx}.popup-box .card_top{display:-webkit-flex;display:flex;position:relative}.popup-box .card_top .card_lab{background:url('https://eshopfile.zhiyousx.com/169209823319911969.png');background-size:100% 100%;color:#f1dc8d;font-size:20rpx;height:64rpx;left:0rpx;padding-left:19rpx;padding-top:12rpx;position:absolute;top:-29rpx;width:64rpx}.popup-box .card_top .head_img{border-radius:10rpx;border-radius:10rpx 30rpx 20rpx 20rpx;box-shadow:6rpx 0rpx 0rpx 0rpx rgba(0,0,0,.15),12rpx 0rpx 0rpx 0rpx rgba(0,0,0,.05);height:190rpx;width:180rpx}.popup-box .card_top .card_info{padding-left:20rpx;width:392rpx;z-index:10}.popup-box .card_top .card_info .card_title{color:rgba(0,0,0,.8);display:block;font-family:Source Han Sans SC;font-size:28rpx;font-style:normal;font-weight:700;line-height:40rpx;overflow:hidden;text-align:left;text-overflow:ellipsis;text-transform:none;white-space:nowrap}.popup-box .card_top .card_info .ranking{align-items:center;display:-webkit-flex;display:flex;margin-top:20rpx;position:relative}.popup-box .card_top .card_info .ranking .top{align-items:center;background:linear-gradient(180deg,#6b6457,#54524c);border-radius:25rpx;color:#e6cca2;display:-webkit-flex;display:flex;font-size:24rpx;height:34rpx;padding:0 10rpx;position:relative;z-index:3}.popup-box .card_top .card_info .ranking .text{background:#ffefd5;border-radius:4px 18px 18px 18px;padding:0 16rpx}.popup-box .card_top .card_info .ranking .text .name{background:#ffe1af;border-radius:20rpx 20rpx 20rpx 20rpx;color:#945430;font-family:Source Han Sans SC;font-size:22rpx;font-size:24rpx;font-style:normal;font-weight:400;max-width:325rpx;padding:4rpx 8rpx;text-align:left;text-transform:none}.popup-box .card_top .card_info .card_describe{color:rgba(0,0,0,.4);font-size:26rpx;margin-top:14rpx}.popup-box .card_top .card_info .card_ticket{align-items:center;display:-webkit-flex;display:flex;height:38rpx;line-height:38rpx;margin-top:14rpx}.popup-box .card_top .card_info .card_ticket .ding{background:linear-gradient(180deg,#f99f1d,#fe581e);border-radius:10rpx;color:#fff;font-size:22rpx;height:32rpx;line-height:32rpx;margin-top:-5rpx;text-align:center;width:32rpx}.popup-box .card_top .card_info .card_ticket .price{color:rgba(0,0,0,.4);font-size:26rpx;margin-left:10rpx}.popup-box .card_top .card_info .card_ticket .ticketName{color:rgba(0,0,0,.4);font-size:26rpx;margin-left:10rpx;width:230rpx}.popup-box .card_top .card_info .watermarkImage{border-radius:0 20rpx 0 0;position:absolute;right:-20rpx;top:-20rpx;z-index:-1}.popup-box .card_top .card_info .watermarkImage image{height:100rpx;width:100rpx}.popup-box .coupon-section,.popup-box .price-section{color:#572408;font-family:Alibaba PuHuiTi;font-size:36rpx;font-style:normal;font-weight:500;line-height:21rpx;text-align:left;text-transform:none}.popup-box .coupon-section{margin-bottom:20rpx}.popup-box .coupon-section .cate-box{height:120rpx;white-space:nowrap;width:100%}.popup-box .coupon-section .coupon-item{background:#fff3dd;border-bottom:2rpx solid #de6e2e;border-radius:15rpx 15rpx 15rpx 15rpx;box-shadow:inset -2rpx 2rpx 2rpx 0rpx hsla(0,0%,100%,.3),inset 5rpx -3rpx 10rpx 0rpx hsla(0,0%,100%,.2),0rpx 6rpx 15rpx 0rpx hsla(18,68%,64%,.1);display:inline-block;height:100%;padding:0 20rpx}.popup-box .coupon-section .coupon-item .coupon-item-box{align-items:center;display:-webkit-flex;display:flex;height:100%;justify-content:space-between}.popup-box .coupon-section .amount{color:#572408;font-family:Alibaba PuHuiTi;font-size:46rpx;font-style:normal;font-weight:700;line-height:31rpx;text-align:left;text-transform:none}.popup-box .coupon-section .coupon-content{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.popup-box .coupon-section .spot-name{color:#572408;display:block;font-family:Source Han Sans SC;font-size:24rpx;font-style:normal;font-weight:700;line-height:40rpx;overflow:hidden;text-align:left;text-overflow:ellipsis;text-transform:none;white-space:nowrap;width:200rpx}.popup-box .coupon-section .coupon-desc{font-size:20rpx;font-weight:400}.popup-box .coupon-section .coupon-desc,.popup-box .coupon-section .receive-btn{color:#572408;font-family:Source Han Sans SC;font-style:normal;line-height:30rpx;text-align:left;text-transform:none}.popup-box .coupon-section .receive-btn{background:linear-gradient(222deg,#ffb444,#ffc977 15%,#fddda0);border:2rpx solid #fff;border-radius:50rpx 50rpx 50rpx 50rpx;box-shadow:inset -2rpx 2rpx 2rpx 0rpx hsla(0,0%,100%,.3),inset 5rpx -3rpx 10rpx 0rpx hsla(0,0%,100%,.2),0rpx 6rpx 15rpx 0rpx hsla(18,68%,64%,.1);display:-webkit-flex;display:flex;font-size:26rpx;font-weight:700;justify-content:space-between;padding:14rpx 23rpx}.popup-box .coupon-section .info-section{margin-left:20rpx}.distance{color:rgba(0,0,0,.4);font-size:24rpx;margin-top:14rpx}
</style>
