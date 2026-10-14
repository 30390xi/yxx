<template>
<view class="">
    <view class="contents" @click="tosystemnotice(0)">
        <view class="left">
            <view class="imgbox">
                <image mode class="" src="https://eshopfile.zhiyousx.com/icon_message@2x.png"></image>
                <u-badge bgColor="#ff463c" class="badge" :count="newsCount.msgCount" :offset="[-3,-3]" overflowCount="999" type="error" v-if="newsCount"></u-badge>
            </view>
            <view class="text">
                <view class="t">
                    <text class="title">系统通知</text>
                    <text class="time">{{msgList?msgList.sysMsgPushVo.insidePushTime:''}}</text>
                </view>
                <view class="singleLineText">{{msgList?msgList.sysMsgPushVo.title:'暂无任何消息'}}</view>
            </view>
        </view>
    </view>
    <view class="contents" @click="tosystemnotice(1)">
        <view class="left">
            <view class="imgbox">
                <image mode class="" src="https://eshopfile.zhiyousx.com/iocn_logistics@2x.png"></image>
                <u-badge bgColor="#ff463c" class="badge" :count="newsCount.operateCount" :offset="[-3,-3]" overflowCount="999" type="error" v-if="newsCount"></u-badge>
            </view>
            <view class="text">
                <view class="t">
                    <text class="title">操作通知类</text>
                    <text class="time">{{operateList?operateList.createTime:''}}</text>
                </view>
                <view class="singleLineText">{{operateList?operateList.content:'暂无任何消息'}}</view>
            </view>
        </view>
    </view>
    <view class="contents" @click="tosystemnotice(2)">
        <view class="left">
            <view class="imgbox">
                <image mode class="" src="https://eshopfile.zhiyousx.com/icon_active@2x.png"></image>
                <u-badge bgColor="#ff463c" class="badge" :count="newsCount.performanceCount" :offset="[-3,-3]" overflowCount="999" type="error" v-if="newsCount"></u-badge>
            </view>
            <view class="text">
                <view class="t">
                    <text class="title">业绩消息类</text>
                    <text class="time">{{performanceList?performanceList.createTime:''}}</text>
                </view>
                <view class="singleLineText">{{performanceList?performanceList.content:'暂无任何消息'}}</view>
            </view>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              newsCount: "",
              num: 0,
              msgList: "",
              operateList: "",
              performanceList: ""
            }
          },
          onShow: function() {
            this.getCornermarker(), this.pageLoad()
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/msgManager/getMsgList", {
                current: 1
              }).then((function(n) {
                uni.stopPullDownRefresh(), 1 === n.code && n.data.records.length > 0 && (t.msgList = n.data.records[0])
              })), this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/messageRecord", {
                current: 1,
                type: 1
              }).then((function(n) {
                uni.stopPullDownRefresh(), 1 === n.code && n.data.records.length > 0 && (t.operateList = n.data.records[0])
              })), this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/messageRecord", {
                current: 1,
                type: 2
              }).then((function(n) {
                uni.stopPullDownRefresh(), 1 === n.code && n.data.records.length > 0 && (t.performanceList = n.data.records[0])
              }))
            },
            tosystemnotice: function(e) {
              var t = this;
              0 === e ? this.$uniApi.getRequestNoLoading("PUT", "base/app/v1/msgManager/updateMsgBatch").then((function(n) {
                1 == n.code && t.$navigateTo({
                  url: "/pages/systemnotice/systemnotice?id=" + e
                })
              })) : this.$uniApi.dataRequestNoLoading("PUT", "base/app/v1/messageRecord/updateBatch", {
                type: e
              }).then((function(n) {
                1 == n.code && t.$navigateTo({
                  url: "/pages/systemnotice/systemnotice?id=" + e
                })
              }))
            },
            getCornermarker: function() {
              var t = this,
                n = {
                  memberId: this.userInfo.memberId
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/messageRecord/getCount", n).then((function(n) {
                if (1 == n.code) {
                  t.newsCount = n.data;
                  var a = n.data.msgCount + n.data.operateCount + n.data.performanceCount;
                  uni.setNavigationBarTitle({
                    title: "消息".concat(a > 0 ? "（" + a + "）" : "")
                  })
                }
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.contents{background-color:#fff;border-radius:20rpx;display:-webkit-flex;display:flex;height:160rpx;justify-content:space-between;margin-left:20rpx;margin-top:20rpx;padding:30rpx;width:710rpx}.contents .left{display:-webkit-flex;display:flex;flex:1}.contents .left .imgbox{border-radius:50%;height:100rpx;margin-right:30rpx;position:relative;width:100rpx}.contents .left .imgbox image{background-color:#87ceeb;background-size:100% 100%;border-radius:50%;height:100%;width:100%}.contents .left .imgbox .icon{background-color:#ff463c;border:2rpx solid #fff;border-radius:50%;color:#fff;font-size:22rpx;height:32rpx;line-height:30rpx;min-width:32rpx;padding:0 6rpx;position:absolute;right:-3rpx;text-align:center;top:-3rpx}.contents .left .text{display:-webkit-flex;display:flex;flex:1;flex-direction:column;justify-content:center}.contents .left .text view:nth-child(1){display:-webkit-flex;display:flex;flex:1;justify-content:space-between}.contents .left .text view:nth-child(1) .title{color:#333}.contents .left .text view:nth-child(1) .time{color:#adadad;font-size:24rpx}.contents .left .text view:nth-child(2){color:#909090;font-size:26rpx;margin-top:10rpx;width:540rpx}.contents .right{color:#adadad;font-size:24rpx}
</style>
