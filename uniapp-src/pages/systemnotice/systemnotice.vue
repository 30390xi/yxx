<template>
<view>
    <view class="news" :key="msgId" v-for="(item, index) in newsList">
        <view>
            <view class="time">{{ (typeNum==0?item.sysMsgPushVo.insidePushTime:item.createTime) }}</view>
            <view class="activity" v-if="typeNum==0">
                <view class="activityTop">{{ item.sysMsgPushVo.title }}</view>
                <view class="content">
                    <image :src="item.sysMsgPushVo.imagUrl" v-if="item.sysMsgPushVo.imagUrl"></image>
                    <text>{{item.sysMsgPushVo.content}}</text>
                </view>
            </view>
            <view class="activity" v-else>
                <view class="content" :data-type="item.msgClass" @click="pageTos($event)">
                    <text>{{item.content}}</text>
                </view>
            </view>
        </view>
    </view>
    <view class="empty" v-if="$root.g0">
        <empty-state imgUrl="https://eshopfile.zhiyousx.com/noMsg@2x.png" text="暂无消息"></empty-state>
    </view>
    <view class="loadMore">
        <u-loadmore bgColor="#f7f7f7" color="#ccc" iconColor="#ccc" :status="loadMore"></u-loadmore>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            EmptyState: function() {
              n.e("components/empty/empty").then(function() {
                return resolve(n("a427"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              page: 1,
              loadMore: "loading",
              newsList: [],
              typeNum: 0
            }
          },
          onLoad: function(e) {
            this.typeNum = e.id, this.pageLoad()
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              var t, n = this,
                a = {
                  current: this.page
                };
              0 == this.typeNum ? (a.userId = this.userInfo.memberId, t = "base/app/v1/msgManager/getMsgList", uni.setNavigationBarTitle({
                title: "系统通知"
              })) : (a.noticeUserId = this.userInfo.memberId, a.type = this.typeNum, t = "base/app/v1/messageRecord", 1 == this.typeNum ? uni.setNavigationBarTitle({
                title: "操作通知"
              }) : uni.setNavigationBarTitle({
                title: "业绩详情"
              })), this.$uniApi.dataRequestNoLoading("GET", t, a).then((function(t) {
                if (uni.stopPullDownRefresh(), 1 === t.code) {
                  var a = t.data.records;
                  t.data.total > 0 ? (1 === t.data.current ? n.newsList = a : n.newsList = n.newsList.concat(a), t.data.current < t.data.pages ? (n.page = n.page + 1, n.loadMore = "loadmore") : n.loadMore = "nomore") : (n.newsList = [], n.loadMore = "nomore")
                }
              })).catch((function(t) {
                uni.stopPullDownRefresh()
              }))
            },
            goLink: function(t) {
              1 === t.jumpType && t.webUrl ? this.$navigateTo({
                url: "../webpage/webpage?url=".concat(t.webUrl)
              }) : 2 === t.jumpType && t.interalLinkId ? 1 === t.interalLinkType ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=".concat(t.interalLinkId)
              }) : 2 === t.interalLinkType ? this.$util.cityJump(t.contentType, t.interalLinkId) : 3 === t.interalLinkType ? this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=".concat(t.interalLinkId)
              }) : 4 !== t.interalLinkType && 7 !== t.interalLinkType && 8 !== t.interalLinkType && 9 !== t.interalLinkType || this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=".concat(t.interalLinkId)
              }) : 3 === t.jumpType ? e.openEmbeddedMiniProgram({
                appId: t.appId,
                path: t.wechatUrl
              }) : 4 === t.jumpType && (uni.setStorageSync("richtext", t.richText), this.$navigateTo({
                url: "../richtext/richtext"
              }))
            },
            pageTos: function(e) {
              var t = e.currentTarget.dataset.type;
              t && (1 == t && this.$navigateTo({
                url: "/subPage/pages/leaguemember/leaguemember"
              }), 2 == t && this.$navigateTo({
                url: "/subPage/pages/wealth/wealth?tab=1"
              }), 3 == t && this.$navigateTo({
                url: "/subPage/pages/wealth/wealth"
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.news .time{color:#909090;font-size:26rpx;margin:40rpx 0rpx;text-align:center}.news .activity{background-color:#fff;border-radius:8rpx;box-shadow:0 1rpx 7rpx 0rpx hsla(60,2%,89%,.7);margin:0 auto;width:690rpx}.news .activity .activityTop{border-bottom:1rpx solid #e0e0e0;color:#333;font-size:32rpx;height:89rpx;line-height:89rpx;overflow:hidden;padding:0 30rpx;text-overflow:ellipsis;white-space:nowrap}.news .activity .content{display:-webkit-flex;display:flex;flex-direction:column;padding:20rpx 30rpx}.news .activity .content image{height:252rpx;width:100%}.news .activity .content text{word-wrap:break-word;color:#909090;display:block;font-size:26rpx;margin:30rpx 0;white-space:normal}
</style>
