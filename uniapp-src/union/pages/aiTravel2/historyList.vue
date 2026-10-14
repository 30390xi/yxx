<template>
<view class="container">
    <uni-navbar class="" title="历史记录" :titleCenter="true" :transparentFixedFontColor="titleColor" type="transparentFixed"></uni-navbar>
    <view class="historyBox">
        <view class="topCard" v-if="topData">
            <view class="title">置顶攻略<image class="title-icon" src="https://eshopfile.zhiyousx.com/175703578338160764.png"></image>
            </view>
            <view class="historyItem topItem" @click="goToDetail(topData)">
                <view class="historyItem-left">
                    <view class="historyItem-left-title">{{ (topData.travelTitle||topData.city+topData.day+'天旅行计划') }}</view>
                    <view class="historyItem-left-tags">{{''+(topData.scenicList?$root.g0:0)+'个景点'}}<image class="headImg" :src="topData.editorHead" v-if="topData.editorHead"></image>
                    </view>
                    <view class="historyItem-left-content">
                        <image class="" src="https://eshopfile.zhiyousx.com/175672522805774296.png"></image>
                        <text class="">{{topData.message}}</text>
                    </view>
                    <view class="historyItem-left-btn">
                        <image class="" src="https://eshopfile.zhiyousx.com/175672557849516358.png"></image>
                    </view>
                </view>
                <image class="historyItem-right" :src="topData.homeImage||'https://eshopfile.zhiyousx.com/175671244741237616.png'"></image>
            </view>
        </view>
        <view class="topLine" v-if="topData"></view>
        <view class="historyList" :key="index" v-for="(item, index) in $root.l0">
            <view class="time">{{ (item.createTime||'1970-10-01') }}</view>
            <view class="historyItem">
                <view class="historyItem-left">
                    <view class="historyItem-left-title">{{ (item.travelTitle||item.city+item.day+'天旅行计划') }}</view>
                    <view class="historyItem-left-tags">{{''+(item.scenicList?item.g1:0)+'个景点'}}<image class="headImg" :src="item.editorHead" v-if="item.editorHead"></image>
                    </view>
                    <view class="historyItem-left-content">
                        <image class="" src="https://eshopfile.zhiyousx.com/175672522805774296.png"></image>
                        <text class="">{{item.message}}</text>
                    </view>
                    <view class="historyItem-left-btn">
                        <image class="" src="https://eshopfile.zhiyousx.com/175672557849516358.png"></image>
                    </view>
                </view>
                <image class="historyItem-right" :src="item.homeImage||'https://eshopfile.zhiyousx.com/175671244741237616.png'"></image>
            </view>
        </view>
        <view class="empty-state" v-if="$root.g2">
            <image class="" src="https://eshopfile.zhiyousx.com/175671244741237616.png"></image>
            <text class="">暂无历史记录</text>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          onShow: function() {
            this.getHistoryList(), this.getTopData()
          },
          data: function() {
            return {
              historyList: null,
              titleColor: "#000",
              topData: null
            }
          },
          onPageScroll: function(t) {
            t.scrollTop < 10 ? this.titleColor = "#000" : this.titleColor = "transparent"
          },
          methods: {
            getHistoryList: function() {
              var n = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/historyList", {
                userId: uni.getStorageSync("wxopenid"),
                bussType: 2
              }).then((function(t) {
                1 === t.code && (n.historyList = t.data || [])
              })).catch((function() {}))
            },
            goToDetail: function(n) {
              if (n.sessionId) try {
                getCurrentPages().length >= 8 ? uni.reLaunch({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(n.sessionId, "&source=historyList")
                }) : uni.navigateTo({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(n.sessionId, "&source=historyList")
                })
              } catch (e) {
                uni.reLaunch({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(n.sessionId, "&source=historyList")
                })
              }
            },
            getTopData: function() {
              var n = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/queryTop", {
                openId: uni.getStorageSync("wxopenid")
              }).then((function(t) {
                1 === t.code && (n.topData = t.data || null)
              })).catch((function() {}))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.container{align-items:center;background-color:#fff;display:-webkit-flex;display:flex;flex-direction:column;min-height:100vh;padding:200rpx 0}.container .historyBox{overflow:auto;width:100%}.container .historyBox .topCard{background:#fff;border-bottom:2rpx solid rgba(0,0,0,.1);border-radius:20rpx 20rpx 20rpx 20rpx;box-shadow:0rpx 4rpx 12rpx 0rpx rgba(128,86,255,.25);margin-left:30rpx;margin-top:10rpx;padding:20rpx 20rpx 0;width:690rpx}.container .historyBox .topCard .title{align-items:center;color:rgba(0,0,0,.85);display:-webkit-flex;display:flex;font-size:36rpx;font-weight:700;line-height:50rpx;margin-bottom:12rpx}.container .historyBox .topCard .title image{height:40rpx;margin-left:8rpx;width:40rpx}.container .historyBox .topLine{border-bottom:2rpx solid rgba(0,0,0,.1);height:30rpx;margin-bottom:24rpx;margin-left:30rpx;width:690rpx}.container .historyBox .historyList{margin-left:30rpx;width:690rpx}.container .historyBox .time{color:rgba(0,0,0,.7);font-size:28rpx;line-height:38rpx;margin-bottom:12rpx}.container .historyBox .historyItem{align-items:center;background:#f8f6ff;border-radius:20rpx;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:24rpx;padding:20rpx;width:650rpx}.container .historyBox .historyItem .historyItem-left .historyItem-left-title{color:#383b46;font-size:36rpx;font-weight:700;line-height:52rpx}.container .historyBox .historyItem .historyItem-left-tags{align-items:center;color:#5d4a76;display:-webkit-flex;display:flex;font-size:28rpx;line-height:48rpx;margin-top:12rpx}.container .historyBox .historyItem .historyItem-left-tags .headImg{border-radius:50%;height:34rpx;margin-left:10rpx;width:34rpx}.container .historyBox .historyItem .historyItem-left-content{align-items:center;display:-webkit-flex;display:flex;margin-top:12rpx}.container .historyBox .historyItem .historyItem-left-content image{height:40rpx;width:40rpx}.container .historyBox .historyItem .historyItem-left-content text{color:#5d4a76;font-size:28rpx;line-height:52rpx;margin-left:6rpx}.container .historyBox .historyItem .historyItem-left-btn{align-items:center;background:linear-gradient(90deg,#ad97ff,#d988ff);border-radius:64rpx 64rpx 64rpx 64rpx;display:-webkit-flex;display:flex;height:50rpx;justify-content:center;margin-top:12rpx;width:80rpx}.container .historyBox .historyItem .historyItem-left-btn image{height:28rpx;width:28rpx}.container .historyBox .historyItem .historyItem-right{border-radius:12rpx;flex:none;height:238rpx;object-fit:cover;width:238rpx}.container .historyBox .topItem{width:100%}.container .historyBox .empty-state{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;padding:100rpx 0}.container .historyBox .empty-state image{height:200rpx;margin-bottom:20rpx;width:200rpx}.container .historyBox .empty-state text{color:#999;font-size:28rpx}
</style>
