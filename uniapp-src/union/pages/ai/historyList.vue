<template>
<view class="history-box">
    <view class="news" :key="index" v-for="(item, index) in newsListCopy">
        <view>
            <view class="news-time">{{ item.key }}</view>
            <view class="news-name" :key="i" v-for="(el, i) in item.data">
                <view class="news-title">{{ el.title }}</view>
                <image mode class="news-image" src="https://eshopfile.zhiyousx.com/173414253873890055.png"></image>
            </view>
        </view>
    </view>
    <view class="empty" v-if="$root.g0">
        <empty-state imgUrl="https://eshopfile.zhiyousx.com/noMsg@2x.png" text="暂无数据"></empty-state>
    </view>
    <view class="loadMore">
        <u-loadmore bgColor="#f7f7f7" color="#ccc" iconColor="#ccc" :loadText="{loadmore:'轻轻上拉',loading:'努力加载中',nomore:'暂无更多数据'}" :status="loadMore"></u-loadmore>
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
              newsList: []
            }
          },
          computed: {
            newsListCopy: function() {
              var e = [],
                t = {};
              return this.newsList.forEach((function(n) {
                var o = n.updateTime;
                if (t[o]) t[o].data.push(n);
                else {
                  var a = {
                    key: o,
                    data: [n]
                  };
                  t[o] = a, e.push(a)
                }
              })), e
            }
          },
          onLoad: function(e) {
            this.pageLoad()
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          methods: {
            goView: function(t) {
              this.$eventAnalyse.analyse({
                eventTag: "ai_showHistory_click",
                eventName: "伴游历史记录回显",
                eventParams: {
                  HISTORY_ID: t
                }
              }), uni.setStorageSync("HISTORY_ID", t), setTimeout((function() {
                uni.navigateBack({
                  delta: 1
                })
              }), 300)
            },
            setTime: function(e) {
              var t = new Date(e),
                n = t.getFullYear(),
                o = t.getMonth() + 1,
                a = t.getDate();
              return "".concat(n, "-").concat(o < 10 ? "0" + o : o, "月").concat(a < 10 ? "0" + a : a, "日")
            },
            pageLoad: function() {
              var t = this,
                n = {
                  current: this.page,
                  openId: uni.getStorageSync("wxopenid"),
                  size: 20,
                  bussType: 1
                };
              this.$uniApi.dataRequestNoLoading("GET", "ai/aiEscort/session/page", n).then((function(n) {
                if (uni.stopPullDownRefresh(), 1 === n.code) {
                  var o = n.data.records;
                  n.data.total > 0 ? (1 === n.data.current ? t.newsList = o : t.newsList = t.newsList.concat(o), n.data.current < n.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.newsList = [], t.loadMore = "nomore")
                }
              })).catch((function(t) {
                uni.stopPullDownRefresh()
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.news .time{color:#909090;font-size:26rpx;margin:40rpx 0rpx;text-align:center}.news .activity{background-color:#fff;border-radius:8rpx;box-shadow:0 1rpx 7rpx 0rpx hsla(60,2%,89%,.7);margin:0 auto;width:690rpx}.news .activity .activityTop{border-bottom:1rpx solid #e0e0e0;color:#333;font-size:32rpx;height:89rpx;line-height:89rpx;overflow:hidden;padding:0 30rpx;text-overflow:ellipsis;white-space:nowrap}.news .activity .content{display:-webkit-flex;display:flex;flex-direction:column;padding:20rpx 30rpx}.news .activity .content image{height:252rpx;width:100%}.news .activity .content text{word-wrap:break-word;color:#909090;display:block;font-size:26rpx;margin:30rpx 0;white-space:normal}.history-box{background-color:#f7f7f7;padding:40rpx 30rpx 0}.news-time{color:#999;font-family:Source Han Sans SC;font-size:26rpx;font-style:normal;font-weight:400;line-height:30rpx;margin-bottom:16rpx;text-align:left;text-transform:none}.news-name{background:#fff;border:2rpx solid hsla(0,0%,100%,.5);border-radius:20rpx 20rpx 20rpx 20rpx;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:16rpx;padding:20rpx 30rpx}.news-name .news-title{color:#333;font-family:Source Han Sans SC;font-size:28rpx;font-style:normal;font-weight:400;line-height:33rpx;max-width:calc(100% - 50rpx);overflow:hidden;text-align:left;text-overflow:ellipsis;text-transform:none;white-space:nowrap}.news-name .news-image{height:28rpx;width:28rpx}
</style>
