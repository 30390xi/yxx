<template>
<view class="bg">
    <uni-navbar type="transparentFixed"></uni-navbar>
    <view class="top">
        <image mode="aspectFill" :src="content.coverImage"></image>
        <view class="p1">{{content.title}}</view>
        <view class="p2">{{content.subtitle}}</view>
    </view>
    <view class="bottom">
        <view class="title">
            <view class="name">推荐</view>
            <view class="line"></view>
        </view>
        <view class="item-list">
            <view class="item" :key="index" v-for="(item, index) in specialProducts">
                <view class="left">
                    <image mode="aspectFill" :src="item.defaultPicUrl"></image>
                </view>
                <view class="right">
                    <view class="name">{{item.productName}}</view>
                    <view class="tip">{{item.likesNum+'人感兴趣'}}</view>
                    <view class="price-box">
                        <view class="p1">{{'￥'+item.retailPrice+'起'}}</view>
                        <view class="p2">{{'￥'+item.price}}<text>起</text>
                        </view>
                    </view>
                </view>
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
            content: {},
            specialProducts: {}
          }
        },
        onLoad: function(t) {
          this.id = t.specialId, this.getDetailSpecial(this.id)
        },
        onShareAppMessage: function() {
          var t = "/subPack/pages/zhuanti/zhuanti?specialId=".concat(this.id);
          return {
            title: this.content.title,
            path: this.$util.setShareUrl(t),
            imageUrl: this.content.coverImage
          }
        },
        methods: {
          getDetailSpecial: function(t) {
            var n = this;
            this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/getDetailSpecial?id=" + t).then((function(t) {
              1 === t.code && (n.content = t.data.content, n.specialProducts = t.data.contentSpecialProducts, console.log(n.specialProducts))
            }))
          },
          jump: function(t) {
            this.$navigateTo({
              url: "/subPage/pages/goods_details/goods_details?itemId=" + t.productId
            })
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background-color:#fff}.bg{line-height:1}.top{background-color:#aaa;height:486rpx;position:relative}.top image{height:100%;width:100%}.top .p1{bottom:140rpx;font-size:50rpx}.top .p1,.top .p2{color:#fff;font-weight:700;left:40rpx;position:absolute}.top .p2{bottom:80rpx;font-size:26rpx}.bottom{background:#fff;border-radius:20rpx 20rpx 0 0;margin-top:-20rpx;padding:75rpx 40rpx 0;position:relative}.bottom .title{margin-bottom:50rpx;position:relative}.bottom .title .name{color:#333;font-size:40rpx;font-weight:700;position:relative;z-index:1}.bottom .title .line{background:linear-gradient(52deg,#fc4a9e,#ff5411);border-radius:8rpx;bottom:-5rpx;height:16rpx;left:12rpx;position:absolute;width:80rpx;z-index:0}.bottom .item-list .item{display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:50rpx}.bottom .item-list .item .left{background:#e0e0e0;border-radius:12rpx;height:200rpx;margin-right:30rpx;overflow:hidden;width:200rpx}.bottom .item-list .item .left image{height:100%;width:100%}.bottom .item-list .item .right{flex:1;position:relative}.bottom .item-list .item .right .name{color:#333;font-size:28rpx;line-height:50rpx;margin-bottom:27rpx}.bottom .item-list .item .right .tip{background:#f3f3f3;border-radius:18rpx;color:#818080;float:left;font-size:22rpx;height:36rpx;line-height:36rpx;padding:0 18rpx}.bottom .item-list .item .right .price-box{bottom:0;position:absolute;right:0;text-align:right}.bottom .item-list .item .right .price-box .p1{color:#a2a2a2;font-size:24rpx;margin-bottom:16rpx;text-decoration:line-through}.bottom .item-list .item .right .price-box .p2{color:#f96365;font-size:32rpx;font-weight:700}.bottom .item-list .item .right .price-box .p2 text{color:#a2a2a2;font-size:24rpx}
</style>
