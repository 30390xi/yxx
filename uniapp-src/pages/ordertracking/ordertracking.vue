<template>
<view class="">
    <view class="logisticsInfo">
        <view class="wl-left">
            <image alt class="_img" src="https://eshopfile.zhiyousx.com/170065397014456594.png"></image>
            <view class="text">
                <text class="key">物流公司：</text>
                <text class="val">{{logistics.logisticsName}}</text>
            </view>
        </view>
        <view class="wl-mid">
            <view class="text">
                <text class="key">物流单号：</text>
                <text class="val" v-if="logistics.logisticsInfo">{{logistics.logisticsInfo.LogisticCode}}</text>
            </view>
            <view class="wl-right" @click="copyText($event)">
                <text class="">复制</text>
            </view>
        </view>
    </view>
    <view class="timeLine">
        <u-time-line class="" :vueSlots="['default']">
            <u-time-line-item class="" :vueSlots="['node','content']" :key="index" v-for="(item, index) in logisticList">
                <view class="u-node" slot="node" :style="index===$root.g0-1?'background:#ff4643':'background:#cfcfcf'"></view>
                <view class="" slot="content">
                    <view class="u-order-time">{{item.AcceptTime}}</view>
                    <view class="u-order-desc">{{item.AcceptStation}}</view>
                </view>
            </u-time-line-item>
        </u-time-line>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            data: function() {
              return {
                orderId: "",
                logisticList: [],
                logistics: {}
              }
            },
            onLoad: function(t) {
              t.orderId && (this.orderId = t.orderId), this.getLogisticsInfo()
            },
            methods: {
              getLogisticsInfo: function() {
                var t = this,
                  n = {
                    orderId: this.orderId
                  };
                console.log(n), this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/orderPackage/getLogistic", n).then((function(n) {
                  1 === n.code && (t.logistics = n.data, t.logisticList = n.data.logisticsInfo.Traces)
                }))
              },
              copyText: function() {
                (0, o.default)({
                  content: this.logistics.logisticsInfo.LogisticCode,
                  success: function(n) {
                    uni.showToast({
                      title: n,
                      icon: "none"
                    })
                  },
                  error: function(n) {
                    uni.showToast({
                      title: n
                    })
                  }
                })
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.logisticsInfo{background-color:#fff;border-radius:16rpx;display:-webkit-flex;display:flex;flex-direction:column;margin:20rpx auto;padding:20rpx 0rpx;width:710rpx}.logisticsInfo .wl-left{align-items:center;display:-webkit-flex;display:flex;margin-top:15rpx}.logisticsInfo .wl-left ._img{height:33rpx;margin-left:24rpx;margin-right:10rpx;width:33rpx}.logisticsInfo .wl-mid{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-left:64rpx;margin-top:15rpx}.logisticsInfo .wl-mid .text .key{color:#878787;font-size:28rpx;line-height:30rpx}.logisticsInfo .wl-mid .text .val{color:#333;font-size:28rpx;line-height:30rpx}.logisticsInfo .wl-mid .diff{color:#333;font-size:28rpx}.logisticsInfo .wl-right{align-items:center;display:-webkit-flex;display:flex}.logisticsInfo .wl-right text{background-color:#fff;border:1rpx solid #333;border-radius:16rpx;font-size:24rpx;height:36rpx;line-height:34rpx;margin-right:25rpx;text-align:center;width:80rpx}.timeLine{background-color:#fff;display:-webkit-flex;display:flex;margin:0 auto;padding:20rpx;width:710rpx}.timeLine .u-node{align-items:center;background:#ff4643;border-radius:50%;display:-webkit-flex;display:flex;height:19rpx;justify-content:center;width:19rpx}.timeLine .u-order-title{color:#333;font-size:32rpx;font-weight:700}.timeLine .u-order-desc{color:#969696;font-size:28rpx;margin-bottom:6rpx}.timeLine .u-order-time{color:#c8c8c8;font-size:26rpx}
</style>
