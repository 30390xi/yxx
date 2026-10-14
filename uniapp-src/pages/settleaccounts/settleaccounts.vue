<template>
<view class="u-skeleton">
    <view class="contents">
        <view class="money u-skeleton-rect">{{'+'+$root.f0}}</view>
        <view class="explain u-skeleton-rect">返利入账</view>
        <view class="flex u-skeleton-rect">
            <view class="">订单号</view>
            <view class="">{{memberBrokerage.orderNo}}</view>
        </view>
        <view class="flex u-skeleton-rect">
            <view class="">创建时间</view>
            <view class="">{{memberBrokerage.createTime}}</view>
        </view>
        <view class="flex u-skeleton-rect">
            <view class="">订单用户</view>
            <view class="">{{memberBrokerage.orderMemberName}}</view>
        </view>
        <view class="flex u-skeleton-rect">
            <view class="">订单总额</view>
            <view class="">{{$root.f1}}</view>
        </view>
        <view class="flex u-skeleton-rect">
            <view class="">返利比例</view>
            <view class="">{{memberBrokerage.dividedValue+'%'}}</view>
        </view>
        <view class="flex u-skeleton-rect">
            <view class="">结算状态</view>
            <view class="">{{memberBrokerage.status===0?'进行中':'已完成'}}</view>
        </view>
    </view>
    <u-skeleton :animation="true" class="" :loading="loadingStatus"></u-skeleton>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        data: function() {
          return {
            loadingStatus: !0,
            brokerageId: "",
            memberBrokerage: ""
          }
        },
        onLoad: function(e) {
          e.brokerageId && (this.brokerageId = e.brokerageId), this.pageLoad()
        },
        filters: {
          toFixed2: function(e) {
            return e ? Number(e).toFixed(2) : "0.00"
          }
        },
        methods: {
          pageLoad: function() {
            var e = this;
            this.loadingStatus = !0, this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/memberBrokerage/".concat(this.brokerageId)).then((function(t) {
              e.loadingStatus = !1, 1 === t.code && (e.memberBrokerage = t.data)
            })).catch((function(t) {
              e.loadingStatus = !1
            }))
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.contents{background-color:#fff;padding-bottom:20rpx;width:100%}.contents .money{color:#878787;font-family:SFUIText-Regular;font-size:48rpx;line-height:48rpx;padding-top:71rpx;text-align:center}.contents .explain{color:#333;font-family:PingFang-SC-Medium;font-size:26rpx;line-height:26rpx;margin-bottom:70rpx;margin-top:17rpx;text-align:center}.contents .flex{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:40rpx;padding:0 30rpx}.contents .flex view:nth-child(1){color:#878787;font-family:PingFang-SC-Medium;font-size:28rpx;line-height:28rpx}.contents .flex view:nth-child(2){color:#111;font-family:PingFang-SC-Medium;font-size:30rpx;line-height:30rpx}
</style>
