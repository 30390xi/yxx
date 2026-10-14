<template>
<view class="container">
    <view class="title">
        <text>西安</text>
        <text>攻略</text>
    </view>
    <view class="spotList" id="spotList" v-if="list&&list[0]">
        <view class="item" v-for="(item, __i0__) in $root.l0">
            <image class="recommond" src="https://eshopfile.zhiyousx.com/2021091011022464343.png" v-if="item.isRecommend==1"></image>
            <image class="img" mode="aspectFill" :src="item.m0"></image>
            <view class="info">
                <view class="name singleLineText">{{item.title}}</view>
                <view class="desc singleLineText" v-if="item.subtitle">{{item.subtitle}}</view>
            </view>
        </view>
    </view>
    <view class="noinfo" v-else>
        <image class="noGoods" mode="widthFix" src="/static/captured/51d17a011d27445c.png"></image>
        <view>没有相关内容</view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          props: [],
          onLoad: function(t) {
            this.cityId = t.id, this.getList()
          },
          data: function() {
            return {
              list: [],
              cityId: "",
              size: 10,
              current: 1
            }
          },
          onShow: function() {},
          onReachBottom: function() {
            this.current += 1, this.getList()
          },
          methods: {
            setSrc: function(t) {
              if (t.coverPictureUrl) return t.coverPictureUrl;
              var n = t.lineCoverPic ? JSON.parse(t.lineCoverPic) : [];
              return n.length > 0 ? n[0].url : ""
            },
            todetail: function(t) {
              this.$util.cityJump(t.contentType, t.originId, t)
            },
            getList: function() {
              var n = this,
                e = {
                  current: this.current,
                  size: this.size,
                  cityId: this.cityId
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/city/queryCityStrategyList", e).then((function(e) {
                n.list = n.list.concat(e.data.records), 1 == n.current || e.data.records[0] || uni.showToast({
                  title: "没有更多咯",
                  icon: "none"
                })
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background:#fff;box-sizing:border-box;padding:36rpx 40rpx}.container{background:#fff;min-height:100vh;width:670rpx}.container .title{margin-bottom:40rpx}.container .title text{color:#222;font-size:36rpx;font-weight:700}.container .title text:last-child{color:#ff5411}.container .noinfo .noGoods{display:block;margin:50rpx auto;width:300rpx}.container .noinfo view{color:#777;text-align:center}.container .spotList{padding:0rpx 0rpx 30rpx;position:relative}.container .spotList .item{display:-webkit-flex;display:flex;height:180rpx;margin-bottom:50rpx;position:relative}.container .spotList .item:last-child{margin-bottom:0}.container .spotList .item .img{background:#e0e0e0;border-radius:20rpx;height:180rpx;width:260rpx}.container .spotList .item .recommond{height:64rpx;left:194rpx;position:absolute;top:-20rpx;width:56rpx}.container .spotList .item .info{padding-left:30rpx;width:410rpx}.container .spotList .item .info .name{color:#282828;font-size:32rpx;line-height:46rpx}.container .spotList .item .info .rank{background:#ffefd5;border-radius:4px 18px 18px 18px;color:#945430;display:inline-block;font-size:22rpx;height:36rpx;line-height:36rpx;margin-top:24rpx;max-width:410rpx;padding:0 16rpx}.container .spotList .item .info .desc{color:#959494;font-size:24rpx;margin-top:30rpx}.container .spotList .item .info .distance{align-items:center;color:#959494;display:-webkit-flex;display:flex;font-size:24rpx;margin-top:26rpx}.container .spotList .item .info .distance image{height:21rpx;margin-right:8rpx;width:18rpx}
</style>
