<template>
<view class="bg" v-if="$root.g0>0">
    <view class="item-list">
        <view class="title">{{(iscs?'取消':'退款')+'记录'}}</view>
        <view class="item" v-for="(item, __i0__) in $root.l0">
            <view class="l">
                <view class="row">
                    <text class="l">申请时间</text>
                    <text class="r">{{item.createTime}}</text>
                </view>
                <view class="row" v-if="!iscs">
                    <text class="l">退款金额</text>
                    <text class="r">
                        <text class="red">{{'￥'+(isLineProduct?item.realRefundAmount:item.applyRefundAmount)+''}}</text>{{'('+item.refundNum+'张)'}}</text>
                </view>
                <view class="row">
                    <text class="l">{{(iscs?'取消':'退款')+'原因'}}</text>
                    <text class="r">{{item.m0}}</text>
                </view>
                <view class="row" v-if="item.refundStatus==2&&item.returnMemo">
                    <text class="l">失败原因</text>
                    <text class="r">{{item.returnMemo}}</text>
                </view>
            </view>
            <view class="r">{{item.m1}}</view>
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
              detailObj: [],
              iscs: "",
              isLineProduct: !1
            }
          },
          filters: {},
          onLoad: function(t) {
            this._orderId = t.orderId, this.isLineProduct = !!t.isLineProduct, this.iscs = t.cs || "", t.cs && uni.setNavigationBarTitle({
              title: "取消预约详情"
            }), this.getOrderDetail()
          },
          methods: {
            getOrderDetail: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getAftersaleInfo", {
                orderId: this._orderId
              }).then((function(t) {
                1 === t.code && (e.detailObj = t.data)
              }))
            },
            refundStatusTick: function(e) {
              var t = this.iscs;
              return 0 === e ? t ? "取消审核中" : "退款审核中" : 2 === e ? t ? "取消失败" : "退款失败" : 3 === e ? t ? "已取消" : "已退款" : void 0
            },
            reasonFilter: function(e) {
              var t = this.iscs;
              return 10 == e ? t ? "预约失败" : "出票失败，自动退款" : ["行程取消", "门票预约错误", "未收到入园凭证", "景区无入园信息", "其他"][e - 5]
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.bg{background-color:#f5f5f5;box-sizing:border-box;height:100vh;line-height:1;overflow-y:auto;padding-top:10rpx}.item-list{background:#fff;border-radius:20rpx;padding:46rpx 30rpx 0}.item-list .title{color:#2a2a2a;font-size:28rpx;margin-bottom:20rpx}.item-list .item{border-bottom:1rpx solid #f1f1f1;display:-webkit-flex;display:flex;justify-content:space-between;padding:40rpx 0}.item-list .item:last-child{border-bottom:0}.item-list .item>.l{width:555rpx}.item-list .item>.l .row{display:-webkit-flex;display:flex;margin-bottom:30rpx}.item-list .item>.l .row:last-child{margin-bottom:0}.item-list .item>.l .row>.l{color:#949494;font-size:26rpx;width:148rpx}.item-list .item>.l .row>.r{color:#434343;line-height:30rpx;width:400rpx;word-break:break-all}.item-list .item>.l .row>.r .red{color:#f15252}.item-list .item>.r{color:#434343;font-size:26rpx}
</style>
