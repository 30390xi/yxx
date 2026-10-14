<template>
<view class="records">
    <view class="head allcenter">
        <view class="item allcenter">
            <view class="t">已领权益</view>
            <view class="num">{{(recordData.receivedEquityNum||0)+''}}<text class="unit">个</text>
            </view>
            <view class="desc">{{'（'+(recordData.cardNum||0)+'张卡）'}}</view>
        </view>
        <view class="item allcenter">
            <view class="t">已领权益</view>
            <view class="num">
                <text class="unit" style="margin-right:6rpx;">¥</text>{{recordData.equityAmount||0}}</view>
            <view class="desc"></view>
        </view>
    </view>
    <view class="mycard">
        <view class="card" v-for="(item, __i0__) in $root.l0">
            <view class="title allcenter" :style="'background:'+'linear-gradient(135deg, '+(item.backgroundColor1||'#e7d6b4')+' 0%, '+item.m0+' 100%);'+';'">{{item.name}}</view>
            <view class="list">
                <view class="item flex" v-for="(items, __i1__) in item.detailVOList">
                    <view class="info flex">
                        <image class="" :src="items.equityImage"></image>
                        <view class="text">
                            <view class="name multilineText2">{{items.equityName}}</view>
                            <view class="time">{{items.validityStartTime+'至'+items.validityEndTime}}</view>
                        </view>
                    </view>
                    <view class="nums">
                        <block v-if="items.deductionAmount>0">
                            <view class="name">已省</view>
                            <view class="count">{{'¥'+(items.deductionAmount||0)}}</view>
                        </block>
                        <view class="eqinfo" v-else>查看权益</view>
                        <image class="" src="https://eshopfile.zhiyousx.com/2023011114064095097.png" v-if="items.useState==1"></image>
                        <image class="" src="https://eshopfile.zhiyousx.com/2023010910000900378.png" v-if="items.useState==2"></image>
                        <image class="" src="https://eshopfile.zhiyousx.com/2023010910005976066.png" v-if="items.useState==3"></image>
                        <image class="" src="https://eshopfile.zhiyousx.com/2023010910013637801.png" v-if="items.useState==4"></image>
                        <image class="" src="https://eshopfile.zhiyousx.com/2023011114083993049.png" v-if="items.useState==5"></image>
                        <image class="" src="https://eshopfile.zhiyousx.com/2023010910015464618.png" v-if="items.useState==6"></image>
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
        name: "records",
        data: function() {
          return {
            name: "",
            recordData: ""
          }
        },
        onLoad: function(e) {
          this.getAllReceiveRecord()
        },
        methods: {
          getAllReceiveRecord: function() {
            var e = this;
            this.$uniApi.getRequestNoLoading("get", "product/app/userEquityCard/allReceiveRecord").then((function(a) {
              1 === a.code ? e.recordData = a.data : e.$uni.showToast(a.msg)
            }))
          },
          hexToRGBA: function(e, a) {
            var n = e.toLowerCase();
            if (n && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(n)) {
              if (4 === n.length) {
                for (var t = "#", r = 1; r < 4; r += 1) t += n.slice(r, r + 1).concat(n.slice(r, r + 1));
                n = t
              }
              for (var o = [], c = 1; c < 7; c += 2) o.push(parseInt("0x" + n.slice(c, c + 2)));
              return "rgba(" + o.join(",") + "," + a + ")"
            }
            return n
          },
          toEqDetail: function(e, a) {
            var n = "/subPage/pages/myeqcard/eqdetail?source=2&id=" + e + "&cardName=" + a;
            this.$util.isLogin(n) && this.$navigateTo({
              url: n
            })
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background:#fafafa}.records{padding:20rpx 40rpx}.records .head{align-items:center;background:#fff2db;border-radius:20rpx;height:200rpx;justify-content:center}.records .head .item{flex-direction:column;height:140rpx;justify-content:flex-start;width:305rpx}.records .head .item .t{color:#555;font-size:26rpx}.records .head .item .num{color:#333;font-size:32rpx;margin:22rpx 0 16rpx}.records .head .item .num .unit{color:#333;font-size:26rpx}.records .head .item .desc{color:#999;font-size:24rpx}.records .mycard{margin-top:40rpx;padding:0 10rpx}.records .mycard .card{margin-bottom:70rpx}.records .mycard .card .title{border-radius:20rpx 20rpx 0 0;color:#444;font-size:28rpx;height:60rpx;margin:0 auto;width:620rpx}.records .mycard .card .list .item{height:180rpx;justify-content:space-between;margin:10rpx 0}.records .mycard .card .list .item .info{background:#fffbf4;border-radius:20rpx;justify-content:space-between;padding:20rpx;width:476rpx}.records .mycard .card .list .item .info image{border-radius:20rpx;height:140rpx;width:150rpx}.records .mycard .card .list .item .info .text{width:274rpx}.records .mycard .card .list .item .info .text .name{color:#333;font-size:26rpx;line-height:36rpx}.records .mycard .card .list .item .info .text .time{color:#999;font-size:24rpx;margin-top:14rpx}.records .mycard .card .list .item .nums{background:#fff2db;border-radius:20rpx;height:180rpx;overflow:hidden;padding-top:15rpx;position:relative;width:174rpx}.records .mycard .card .list .item .nums view{text-align:center}.records .mycard .card .list .item .nums .name{color:#555;font-size:24rpx}.records .mycard .card .list .item .nums .count{color:#333;font-size:28rpx;margin-top:10rpx}.records .mycard .card .list .item .nums .eqinfo{color:#333;font-size:28rpx;margin-top:20rpx}.records .mycard .card .list .item .nums image{bottom:-19rpx;height:100rpx;left:37rpx;position:absolute;width:100rpx}
</style>
