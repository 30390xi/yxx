<template>
<view class="subscription" :style="styleInfo">
    <view class="subscription-text" :style="'font-size:'+size+';'" @click="clickView($event)">当前门票已售罄，推荐其他景区｜<text class="subscription-more">点击查看→</text>
    </view>
    <text class="subscription-d" :style="'font-size:'+size+';'" @click="subscription($event)">余票订阅</text>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          props: {
            styleInfo: {
              type: String,
              default: function() {
                return "position: fixed;bottom: 130rpx;padding: 8rpx 40rpx;"
              }
            },
            dialogInfos: {
              type: Object,
              default: function() {}
            },
            size: {
              type: String,
              default: function() {
                return "24rpx"
              }
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            clickView: function() {
              this.$eventAnalyse.analyse({
                eventTag: "shortSelling_tooltip_click",
                eventName: "点击售温馨提示条查看详情",
                eventParams: {
                  spotId: this.dialogInfos.selloutSuggestScenicList[0].scenicId
                }
              }), this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + this.dialogInfos.selloutSuggestScenicList[0].scenicId
              })
            },
            subscription: function() {
              var n = uni.getStorageSync("wxopenid");
              if (this.$eventAnalyse.analyse({
                  eventTag: "shortSelling_subscription_click",
                  eventName: "点击售温馨提示条余票订阅",
                  eventParams: {
                    bizParam: {
                      scenicSpotId: this.dialogInfos.scenicSpotId || ""
                    },
                    memberId: this.userInfo.memberId,
                    openId: n,
                    bizId: this.dialogInfos.itemId,
                    mobile: this.userInfo.mobilePhone,
                    bizType: this.dialogInfos.bizType,
                    bizName: 3 == this.dialogInfos.bizType ? "单票售空推荐" : "聚合门票售空推荐"
                  }
                }), this.$util.isLogin()) {
                var t = "kYcaybflZRSVsYu-4nEatkEc-1YNbV-GEGwRde1G5YE",
                  o = this;
                uni.requestSubscribeMessage({
                  tmplIds: [t],
                  success: function(e) {
                    "accept" == e[t] && o.$uniApi.dataRequestNoLoading("POST", "product/app/v1/subscribe/applySubscribe", {
                      bizParam: {
                        scenicSpotId: o.dialogInfos.scenicSpotId || ""
                      },
                      memberId: o.userInfo.memberId,
                      openId: n,
                      bizId: o.dialogInfos.itemId,
                      mobile: o.userInfo.mobilePhone,
                      bizType: o.dialogInfos.bizType,
                      bizName: 3 == o.dialogInfos.bizType ? "单票售空推荐" : "聚合门票售空推荐"
                    }).then((function(e) {
                      1 === e.code ? (console.log(e.data), o.$uni.showToast("余票订阅成功")) : o.$uni.showToast(e.msg)
                    })).catch((function(e) {
                      o.$uni.showToast("余票订阅失败")
                    }))
                  },
                  fail: function(e) {
                    o.$uni.showToast("余票订阅失败")
                  }
                })
              }
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.subscription{align-items:center;background:#e6e6e6;border-radius:10rpx 10rpx 10rpx 10rpx;display:-webkit-flex;display:flex;justify-content:space-between;left:0;width:100%;z-index:1}.subscription .subscription-more,.subscription .subscription-text{color:#555;font-family:Source Han Sans SC;font-size:24rpx;font-style:normal;font-weight:400;text-align:left;text-transform:none}.subscription .subscription-more{cursor:pointer}.subscription .subscription-d{border:2rpx solid #ff5411;border-radius:10rpx 10rpx 10rpx 10rpx;color:#ff5411;font-family:Source Han Sans SC;font-size:26rpx;font-style:normal;font-weight:400;line-height:26rpx;margin-left:20rpx;padding:4rpx 10rpx;text-align:left;text-transform:none}
</style>
