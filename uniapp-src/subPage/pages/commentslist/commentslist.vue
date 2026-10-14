<template>
<view class="">
    <view class="comments">
        <view class="commentItem" :key="index" v-for="(item, index) in $root.l0">
            <view class="itemTop">
                <view class="topLeft">
                    <image class="" :src="item.memberImage?item.memberImage:'/static/images/tt@2x.png'"></image>
                    <text class="">{{item.commentPoints?item.commentPoints:'*匿名'}}</text>
                </view>
            </view>
            <text class="">{{item.createTime}}</text>
            <view class="itemText multilineText2">{{item.commentContent}}</view>
            <view class="itemImg" v-if="item.g0>0">
                <view class="imgItem" :key="idx" v-for="(pic, idx) in item.picUrl">
                    <u-lazy-load class="" height="220" :image="pic" imgMode="scaleToFill"></u-lazy-load>
                </view>
            </view>
        </view>
    </view>
    <view class="empty" v-if="$root.g1">
        <u-empty class="" marginTop="100" mode="order" text=" "></u-empty>
    </view>
    <view class="loadMore">
        <u-loadmore bgColor="#f7f7f7" class="" color="#ccc" iconColor="#ccc" :status="loadMore"></u-loadmore>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              page: 1,
              loadMore: "loading",
              commentsList: []
            }
          },
          onLoad: function(e) {
            e.itemId && (this.itemId = e.itemId), this.pageLoad()
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          methods: {
            pageLoad: function() {
              var t = this,
                n = {
                  current: this.page,
                  itemId: this.itemId
                };
              this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/itemComment/getListByItemId", n).then((function(n) {
                if (uni.stopPullDownRefresh(), 1 === n.code) {
                  var o = n.data.page.records;
                  n.data.page.total > 0 ? (o.forEach((function(e) {
                    e.createTime = e.createTime.slice(0, 9), e.picUrl ? e.picUrl = e.picUrl.split(",") : e.picUrl = []
                  })), 1 === n.data.page.current ? t.commentsList = o : t.commentsList = t.commentsList.concat(o), n.data.page.current < n.data.page.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.commentsList = [])
                }
              })).catch((function(t) {
                uni.stopPullDownRefresh()
              }))
            },
            commentsBtn: function(t, n) {
              uni.previewImage({
                current: n,
                urls: t
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.comments{margin-top:20rpx}.comments .commentItem{background-color:#fff;margin-bottom:10rpx;padding:20rpx 30rpx}.comments .commentItem .itemTop{justify-content:space-between;margin-bottom:15rpx}.comments .commentItem .itemTop .topLeft,.comments .commentItem .itemTop{align-items:center;display:-webkit-flex;display:flex}.comments .commentItem .itemTop .topLeft>image{border-radius:50%;height:64rpx;width:64rpx}.comments .commentItem .itemTop .topLeft>text{color:#1c1c1d;font-size:28rpx;margin-left:15rpx}.comments .commentItem>text{color:#878787;font-size:24rpx}.comments .commentItem .itemText{color:#1c1c1d;font-size:28rpx;line-height:44rpx;margin:15rpx 0}.comments .commentItem .itemImg{display:-webkit-flex;display:flex;flex-wrap:wrap}.comments .commentItem .itemImg .imgItem{background-color:#f9f9f9;height:220rpx;margin-left:15rpx;margin-top:15rpx;width:220rpx}.comments .commentItem .itemImg .imgItem:nth-child(3n-2){margin-left:0}.comments .commentItem:last-child{margin-bottom:0}
</style>
