<template>
<view class="page-box">
    <uni-navbar :bgColor="['#6585FA','#F1F5FB']" bgColorAngle="180" class="" :title="$root.m0" type="fixed"></uni-navbar>
    <view class="" style="position:relative;" :key="id" v-for="(item, __i0__) in collectionList">
        <view class="">
            <view class="time">{{item.time}}</view>
            <chat-item class="" :item="el" :likeSave="true" @badCommentFun="badCommentFun()" v-for="(el, __i1__) in item.list"></chat-item>
        </view>
    </view>
    <view class="loadMore">
        <u-loadmore bgColor="#f7f7f7" class="" color="#ccc" iconColor="#ccc" :status="loadMore"></u-loadmore>
    </view>
</view>

</template>

<script>
import chatItem from "@/union/components1/chat-item/chat-item-by.vue";

// Reconstructed Vue Component
const t = uni;
export default {
  components: {
    chatItem
  },
          onLoad: function(n) {
            this.language = uni.getStorageSync("language") || "zh", uni.setNavigationBarTitle({
              title: this.$t("collectionList.navbar.title")
            }), this.getCollectionList()
          },
          onShow: function() {},
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.getCollectionList()
          },
          data: function() {
            return {
              collectionList: [],
              page: 1,
              loadMore: "loading",
              language: "zh"
            }
          },
          watch: {},
          computed: {},
          methods: {
            badCommentFun: function() {
              this.collectionList = [], this.page = 1, this.loadMore = "loading", this.getCollectionList()
            },
            getCollectionList: function() {
              var t = this,
                n = {
                  pageNum: this.page,
                  pageSize: 30,
                  language: this.language
                };
              this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "ai/app/qa/collect/list", n).then((function(n) {
                if (1 === n.code) {
                  var e = n.data.records;
                  e = e.map((function(t) {
                    return {
                      time: t.questionTime,
                      list: [{
                        content: t.question,
                        type: 1,
                        state: 1,
                        end: !0,
                        name: "ai",
                        list: [],
                        id: t.id,
                        dialogueId: t.dialogueId,
                        roundId: t.roundId
                      }, {
                        content: t.answer,
                        content1: t.answer,
                        type: 0,
                        state: 0,
                        end: !0,
                        name: "ai",
                        isMe: !1,
                        list: [],
                        id: t.id,
                        dialogueId: t.dialogueId,
                        roundId: t.roundId,
                        isTerminate: !0
                      }]
                    }
                  })), n.data.total > 0 ? (1 === n.data.current ? t.collectionList = e : t.collectionList = t.collectionList.concat(e), n.data.current < n.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.collectionList = [])
                }
                console.log(t.collectionList, "this.collectionList"), t.submiting = !1
              })).catch((function(t) {}))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#f1f5fb;height:100vh;width:100%}.page-box .isHide{display:none}.page-box .drawer-btn.icon-btn{align-items:center;background:transparent;border:none;box-shadow:none;display:-webkit-flex;display:flex;height:60rpx;justify-content:center;padding:0;position:absolute;right:32rpx;top:32rpx;width:60rpx}.page-box .drawer-btn.icon-btn .icon{height:48rpx;width:48rpx}.page-box .fontNum{bottom:10rpx;color:#999;font-size:30rpx;position:absolute;right:20rpx}.page-box .video-popup-container{background-color:#000;border-radius:20rpx;display:-webkit-flex;display:flex;flex-direction:column;height:100vh;position:relative;width:100vw}.page-box .video-popup-header{align-items:center;background-color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;left:0;padding:100rpx 30rpx 20rpx;position:absolute;top:0;width:100%;z-index:10}.page-box .video-popup-title{color:#fff;font-size:32rpx;font-weight:700}.page-box .video-popup-close{align-items:center;background-color:hsla(0,0%,100%,.2);border-radius:50%;cursor:pointer;display:-webkit-flex;display:flex;height:60rpx;justify-content:center;width:60rpx}.page-box .close-icon{color:#fff;font-size:40rpx;font-weight:700}.page-box .video-popup-content{align-items:center;background-color:#000;display:-webkit-flex;display:flex;height:100%;justify-content:center;padding-top:80rpx;width:100%}.page-box .video-player{background-color:initial;border:none;height:100%;object-fit:contain;outline:none;width:100%}.page-box .video-loading{background-color:rgba(0,0,0,.7);border-radius:10rpx;left:50%;padding:20rpx 40rpx;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:5}.page-box .loading-text{color:#fff;font-size:28rpx}.page-box .topLoading{align-items:flex-end;background-color:#fff;display:-webkit-flex;display:flex;height:10vh;justify-content:center;padding-bottom:20rpx;transition:.5s;width:100%}.page-box .topLoading .loading{align-items:center;display:-webkit-flex;display:flex;justify-content:space-around;margin-left:10rpx;width:80rpx}.page-box .topLoading .pot{animation-delay:0s;animation-duration:1.2s;animation-iteration-count:infinite;animation-name:loading-beat-data-v-7f309d23;border-radius:50%;display:inline-block;height:8rpx;margin-right:5rpx;width:8rpx}.page-box .topLoading .pot:nth-child(1){background:#8666fd}.page-box .topLoading .pot:nth-child(2){animation-delay:.2s;background:#8666fd}.page-box .topLoading .pot:nth-child(3){animation-delay:.4s;background:#8666fd}@-webkit-keyframes loading-beat-data-v-7f309d23{0%{transform:scale(1)}50%{transform:scale(1.8)}100%{transform:scale(1)}}@keyframes loading-beat-data-v-7f309d23{0%{transform:scale(1)}50%{transform:scale(1.8)}100%{transform:scale(1)}}.page-box .history-box{padding:50rpx 30rpx 10rpx;position:relative}.page-box .history-line{color:#bdbdbd;font-size:21rpx;line-height:28rpx;overflow:hidden;position:relative;text-align:center;width:100%}.page-box .history-line::after,.page-box .history-line::before{background:#bdbdbd;content:"";display:inline-block;height:1rpx;position:absolute;top:50%;width:100%}.page-box .history-line::before{margin-left:-20rpx;transform:translateX(-100%)}.page-box .history-line::after{margin-left:20rpx}.header-section{align-items:center;background:linear-gradient(180deg,#cde2ff,#d0efff);border-radius:32rpx;display:-webkit-flex;display:flex;padding:30rpx;position:relative}.header-section .header-logo{width:220rpx}.header-section .header-logo .header-icon{height:240rpx;left:0rpx;position:absolute;top:-50rpx;width:240rpx;z-index:10}.header-section .header-content{flex:1}.header-section .header-content .header-nav-item1{align-items:center;color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;font-family:Source Han Sans SC;font-size:30rpx;font-weight:700;margin-bottom:8rpx;margin-top:24rpx}.header-section .header-content .header-nav-item1 .header-nav-icon{height:40rpx;margin-left:12rpx;width:38rpx}.header-section .header-content .header-nav-item2{color:#232020;font-family:Source Han Sans SC;font-size:28rpx;font-weight:400;margin-bottom:8rpx}.header-section .header-content .header-nav-item3{align-items:center;background:hsla(0,0%,100%,.7);border:2rpx solid #fff;border-radius:30rpx;color:#232020;display:-webkit-flex;display:flex;font-size:24rpx;gap:12rpx;height:60rpx;padding:4rpx 18rpx}.header-section .header-content .header-nav-item3 .header-nav-open{flex-shrink:0;height:50rpx;width:50rpx}.header-section .header-content .header-nav-item3 .header-nav-open1{flex-shrink:0;height:42rpx;width:42rpx}.header-section .header-content .header-nav-item3 .custom-progress{align-items:center;display:-webkit-flex;display:flex;flex:1;height:36rpx;margin:0 12rpx}.header-section .header-content .header-nav-item3 .custom-progress .progress-bg{background:rgba(35,32,32,.2);border-radius:4rpx;height:8rpx;position:relative;width:100%}.header-section .header-content .header-nav-item3 .custom-progress .progress-bg .progress-active{background:linear-gradient(78deg,#6585fa,#6ad5fe);border-radius:4rpx;height:100%;max-width:100%;position:relative;transition:width .2s ease}.header-section .header-content .header-nav-item3 .custom-progress .progress-bg .progress-active .progress-dot{background:linear-gradient(78deg,#6585fa,#6ad5fe);border-radius:50%;box-shadow:0 2rpx 6rpx rgba(101,133,250,.4);height:20rpx;pointer-events:none;position:absolute;right:-6rpx;top:50%;transform:translateY(-50%);width:20rpx}.header-section .header-actions{background:linear-gradient(90deg,#6585fa,#6ad5fe);border-radius:32rpx;color:#4267d3;font-size:24rpx;line-height:1.2;padding:6rpx 18rpx;position:absolute;right:22rpx;text-align:center;top:22rpx;z-index:5}.container-b{gap:24rpx;margin:20rpx 0}.container-b .item-b,.container-b{align-items:center;display:-webkit-flex;display:flex}.container-b .item-b{border:2rpx solid #fff;border-radius:40rpx 40rpx 40rpx 40rpx;font-family:Source Han Sans SC;font-size:26rpx;font-weight:400;justify-content:center;padding:12rpx 24rpx}.container-b .item-b .item-icon{height:36rpx;width:36rpx}.container-b .item-b1{background:linear-gradient(78deg,#6585fa,#6ad5fe);color:#fff}.container-b .item-b2{background:#dee9fb;color:#555}.chat-content{height:100%;width:100%}.you-may-ask{background:#dee9fb;border-radius:32rpx 32rpx 32rpx 32rpx;padding:20rpx}.you-may-ask .ask-title{align-items:center;color:#678cfb;display:-webkit-flex;display:flex;font-family:Source Han Sans SC;font-size:28rpx;font-weight:500}.you-may-ask .ask-title .ask-icon{height:40rpx;margin-right:8rpx;width:40rpx}.you-may-ask .ask-item-box .ask-item{background:hsla(0,0%,100%,.7);border-radius:60rpx 60rpx 60rpx 60rpx;color:rgba(0,0,0,.8);font-family:Source Han Sans SC;font-size:26rpx;font-weight:400;margin-top:12rpx;padding:16rpx 20rpx}.time{color:rgba(0,0,0,.8);font-size:26rpx;font-weight:400;margin:32rpx 0;text-align:center}
</style>
