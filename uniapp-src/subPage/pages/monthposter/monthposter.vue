<template>
<view class="picwalls">
    <view class="picwall" v-if="scenicId">
        <image class="item-img" mode="aspectFill" :src="item" v-for="(item, index) in imgList"></image>
    </view>
    <view class="picwall" v-else>
        <image class="item-img" mode="aspectFill" :src="item" v-for="(item, index) in imgList"></image>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              index: 0,
              imgList: [],
              photoList: [],
              scenicId: "",
              current: 1,
              size: 20,
              month: "",
              source: "",
              loadMore: "loading"
            }
          },
          onReachBottom: function() {
            "twelveWall" == this.source && ("loadmore" === this.loadMore ? this.selectUserPicOneMonth() : "nomore" === this.loadMore && uni.showToast({
              title: "没有更多咯",
              icon: "none"
            }))
          },
          onLoad: function(t) {
            var e = this;
            this.month = t.m, this.source = t.source, "twelveWall" == t.source ? (this.scenicId = t.scenicId, this.selectUserPicOneMonth()) : "pictureWall" == t.source && this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotPicActiveRel/getScenicPicListByMonth?upMonth=" + t.m).then((function(t) {
              t.data && t.data.splitPicUrlList && t.data.splitPicUrlList[0] && (e.imgList = t.data.splitPicUrlList)
            }))
          },
          created: function() {},
          methods: {
            selectUserPicOneMonth: function() {
              var t = this,
                e = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotUserPic/selectUserPicOneMonth?upMonth=" + e.month + "&scenicId=" + this.scenicId + "&current=" + this.current + "&size=" + this.size).then((function(n) {
                if (1 == n.code) {
                  var i = [];
                  n.data.records.forEach((function(t) {
                    i.push(t.splitPicUrl)
                  })), n.data.total > 0 ? (1 === n.data.current ? t.imgList = i : t.imgList = t.imgList.concat(i), n.data.current < n.data.pages ? (t.current = t.current + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.imgList = [])
                } else e.$uni.showToast(n.msg)
              }))
            },
            priview: function(t) {
              uni.previewImage({
                current: t,
                urls: this.imgList
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.picwalls{background:linear-gradient(180deg,#339a81,#f0fbc4);min-height:100vh}.picwall{display:-webkit-flex;display:flex;flex-wrap:wrap;padding:40rpx 30rpx}.picwall .item-img{border-radius:10rpx;height:220rpx;margin-bottom:10rpx;margin-left:15rpx;width:220rpx}.picwall .item-img:nth-child(3n-2){margin-left:0}
</style>
