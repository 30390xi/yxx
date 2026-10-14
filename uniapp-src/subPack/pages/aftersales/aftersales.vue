<template>
<view class="">
    <view class="orderBox">
        <view class="orderItem" :key="index" v-for="(item, index) in $root.l1">
            <view class="merchant">
                <view class="mcName">
                    <image class="" src="../../static/images/sj_icon.png"></image>
                    <text class="">{{item.sellerNameReal}}</text>
                    <uni-icons class="" color="#c8c8c8" size="14" type="arrowright"></uni-icons>
                </view>
            </view>
            <view class="topBox">
                <view class="goodsInfo" :key="goodsindex" v-for="(itemgoods, goodsindex) in item.l0">
                    <view class="topImg">
                        <u-lazy-load borderRadius="10" class="" height="180" :image="itemgoods.pic" imgMode="scaleToFill"></u-lazy-load>
                    </view>
                    <view class="itemInfo">
                        <view class="">
                            <view class="itemTitle multilineText2">{{itemgoods.name}}</view>
                            <text class="itemNum">{{'X '+itemgoods.quantity}}</text>
                        </view>
                        <text class="">{{'￥'+itemgoods.f0}}</text>
                    </view>
                </view>
                <view class="goodsPrice">{{'共'+item.itemQuantity+'件商品 应付:￥'}}<text class="">{{item.f1}}</text>
                </view>
            </view>
            <view class="bomBox">
                <text class=""></text>
                <view class="orderBtn">
                    <button class="obtn obtn1">查看详情</button>
                </view>
            </view>
        </view>
    </view>
    <view class="empty" v-if="$root.g0">
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
              aftersalesList: []
            }
          },
          onLoad: function() {
            this.pageLoad()
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
              var t = this,
                n = {
                  current: this.page,
                  buyerId: this.userInfo.memberId,
                  orderStatus: 6
                };
              this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getOrderStatusList", n).then((function(n) {
                if (uni.stopPullDownRefresh(), 1 === n.code) {
                  var o = n.data.records;
                  n.data.total > 0 ? (1 === n.data.current ? t.aftersalesList = o : t.aftersalesList = t.aftersalesList.concat(o), n.data.current < n.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.aftersalesList = [])
                }
              })).catch((function(t) {
                uni.stopPullDownRefresh()
              }))
            },
            goOrderDetails: function(e) {
              this.$navigateTo({
                url: "../order_details/order_details?orderId=".concat(e)
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.orderBox{padding:0 24rpx;width:100%}.orderBox .merchant{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:40rpx}.orderBox .merchant .mcName{align-items:center;display:-webkit-flex;display:flex;margin-left:17rpx}.orderBox .merchant .mcName>image{height:30rpx;width:30rpx}.orderBox .merchant .mcName>text{color:#222;font-size:26rpx;margin-left:15rpx}.orderBox .merchant>text{color:#ff4643;font-size:26rpx}.orderBox .orderItem{background-color:#fff;border-radius:16rpx;margin-bottom:20rpx;padding:20rpx}.orderBox .orderItem .topBox{align-items:flex-end;border-bottom:1rpx solid #eaeaea;display:-webkit-flex;display:flex;flex-direction:column;padding-bottom:20rpx}.orderBox .orderItem .topBox .goodsInfo{display:-webkit-flex;display:flex;padding:20rpx 0;width:100%}.orderBox .orderItem .topBox .goodsInfo>text{color:#ff4643;font-size:26rpx}.orderBox .orderItem .topBox .goodsInfo .topImg{background-color:#e5e5e5;height:180rpx;width:180rpx}.orderBox .orderItem .topBox .goodsInfo .itemInfo{display:-webkit-flex;display:flex;flex:1;flex-direction:column;justify-content:space-between;margin-left:20rpx}.orderBox .orderItem .topBox .goodsInfo .itemInfo .itemTitle{font-size:24rpx;margin-bottom:10rpx}.orderBox .orderItem .topBox .goodsInfo .itemInfo .itemNum{color:#878787;font-size:24rpx}.orderBox .orderItem .topBox .goodsPrice{font-size:24rpx}.orderBox .orderItem .topBox .goodsPrice>text{font-size:30rpx}.orderBox .orderItem .bomBox{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;padding-top:20rpx}.orderBox .orderItem .bomBox>text{color:#878787;font-size:24rpx}.orderBox .orderItem .bomBox .orderBtn{display:-webkit-flex;display:flex}.orderBox .orderItem .bomBox .orderBtn .obtn{background-color:#fff;border:1rpx solid #cfcfcf;border-radius:54rpx;color:#878787;font-size:24rpx;height:66rpx;line-height:62rpx;margin-left:20rpx;width:200rpx}.orderBox .orderItem .bomBox .orderBtn .obtn:after{border:0}.orderBox .orderItem .bomBox .orderBtn .obtn1{border:1rpx solid #ff4643;color:#ff4643}.orderBox .orderItem:last-child{margin-bottom:0}
</style>
