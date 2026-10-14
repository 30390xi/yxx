<template>
<view class="page-box">
    <view class="head-box">
        <view class="bg-box">
            <view class="title">礼品卡总余额</view>
            <view class="money">{{'￥'+sumBalance+''}}</view>
        </view>
        <view class="tab-box">
            <u-tabs activeColor="#FF5411" :barStyle="barStyle" class=" vue-ref" :current="currentTab" ref="uTabs" fontSize="28" inactiveColor="#555555" :isScroll="false" :list="tabTitle" @change="tabsChange()"></u-tabs>
        </view>
    </view>
    <view class="card-box">
        <view class="card-box-it" v-if="records[0]" :key="index" v-for="(item, index) in $root.l0">
            <view :class="['card-item','',currentTab==1?'filterBox':'']">
                <image mode class="card-image" :src="item.cardPicUrl" v-if="item.cardPicUrl"></image>
                <view class="card-data">
                    <view :class="['card-head','',!item.cardPicUrl?'cardHeadbg':'']">
                        <image mode class="card-logo" src="../../static/images/logo.png" v-if="!item.cardPicUrl"></image>
                        <view class="card-info">
                            <view class="card-name">{{ item.name }}</view>
                            <view class="card-value">{{'面值：'+item.quota+'元'}}</view>
                        </view>
                        <view class="card-log">消费记录</view>
                        <view class="card-time">{{ item.validityTimeStr }}</view>
                    </view>
                    <view :class="['card-body','',!item.cardPicUrl?'cardBodyBg':'']">
                        <view class="card-balance">
                            <text class="label">余额</text>
                            <text class="value">{{'￥'+item.balance}}</text>
                        </view>
                        <view class="card-tips" v-if="currentTab==0">
                            <view class="tips">{{ item.f0 }}</view>
                            <image mode class="tips-icon" src="../../static/images/info.png"></image>
                        </view>
                    </view>
                </view>
            </view>
            <image mode class="card-state" src="https://eshopfile.zhiyousx.com/170065250008116634.png" v-if="item.status==3"></image>
            <image mode class="card-state" src="https://eshopfile.zhiyousx.com/170065251327546322.png" v-if="item.status==4"></image>
            <image mode class="card-state" src="https://eshopfile.zhiyousx.com/170065252675437017.png" v-if="item.status==6"></image>
            <image mode class="card-state" src="https://eshopfile.zhiyousx.com/170065254044085555.png" v-if="item.status==5"></image>
        </view>
        <view class="no-card" v-if="$root.g0">
            <image mode class="no-card-icon" src="https://eshopfile.zhiyousx.com/giftCard/noGiftCard.png"></image>{{'您暂无'+(currentTab==1?'不':'')+'可用的礼品卡'}}</view>
    </view>
    <view class="footer">
        <view class="item" @click="buyCard($event)">
            <image mode class="icon1" src="../../static/images/purchase.png"></image>
            <view class="t">购买新卡</view>
        </view>
        <view class="item" @click="bindCard($event)">
            <image mode class="icon2" src="../../static/images/binding.png"></image>
            <view class="t">绑定新卡</view>
        </view>
    </view>
    <u-popup borderRadius="20" class="" :closeable="true" mode="center" :value="show" :vueSlots="['default']" @input="show = $event">
        <view class="popup-box">
            <view class="title">我的礼品卡</view>
            <view class="card-number">{{'卡号：'+cardId+''}}</view>
            <view class="record">
                <view class="name">消费记录：</view>
                <view class="no-record" v-if="$root.g1">
                    <image mode class="icon3" src="https://eshopfile.zhiyousx.com/2023111315442061719.png"></image>暂无消费记录</view>
                <view class="record-box" v-if="cardDetail[0]">
                    <scroll-view class="" scrollY="true" style="height:350rpx;">
                        <view class="record-item" :key="index" v-for="(item, index) in cardDetail">
                            <view class="item-left">
                                <view class="item-orderId">{{'订单：'+item.orderId+''}}</view>
                                <view class="item-time">{{ item.createTime }}</view>
                            </view>
                            <view class="item-right">
                                <view :class="['item-change','',item.balanceChange>0?'add':'']">
                                    <text class="" style="color:#FF5411;" v-if="item.balanceChange>0">+</text>{{item.balanceChange+''}}</view>
                                <view class="item-balance">{{'余：'+item.balance+''}}</view>
                            </view>
                        </view>
                    </scroll-view>
                </view>
            </view>
            <view class="but" @click="closePopup($event)">知道了</view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="center" :value="buyPop" :vueSlots="['default']" @input="buyPop = $event">
        <view class="buy-tips-box">
            <view class="bt-title">购买礼品卡</view>
            <view class="bt-info1">如果需要团购礼品或品牌合作</view>
            <view class="bt-info2">请联系客服电话</view>
            <view class="bt-info3">400-029-2296</view>
            <view class="bt-but" @click="e0($event)">知道了</view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="center" :value="showTip" :vueSlots="['default']" @input="showTip = $event">
        <view class="popup-tips">{{ $root.f1 }}</view>
    </u-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        data: function() {
          return {
            sumBalance: 0,
            records: [],
            cardDetail: [],
            cardInfo: "",
            cardId: "",
            showTip: !1,
            buyPop: !1,
            show1: !1,
            show: !1,
            tabTitle: [{
              name: "可用卡（0）"
            }, {
              name: "不可用卡（0）"
            }],
            currentTab: 0,
            barStyle: {
              width: "120rpx",
              height: "4rpx",
              background: "linear-gradient(180deg, #FD928B 0%, #EF5E3F 100%)",
              "border-radius": "50rpx",
              "margin-left": "-50rpx",
              position: "absolute",
              bottom: "10rpx"
            }
          }
        },
        filters: {
          validityTimeFilter: function(t) {
            if (t) return t.slice(0, 10) + "到期"
          },
          canUseItemTypeFilter: function(t) {
            if (t) {
              var n = t.split(","),
                e = "";
              return n.forEach((function(t) {
                1 == t ? e = "仅可购买景区门票，具体以购卡章程规定内容为准" : 2 == t && (e = "仅可购买自营文创特产，具体以购卡章程规定内容为准")
              })), n[1] && (e = "仅可购买景区门票和自营文创特产，具体以购卡章程规定内容为准"), e
            }
          }
        },
        onLoad: function(t) {},
        onShow: function() {
          this.getCardList()
        },
        methods: {
          getCardList: function() {
            var t = this;
            this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftCard/getMemberGiftCardList").then((function(n) {
              1 === n.code && (t.sumBalance = n.data.sumBalance, t.canUseNum = n.data.canUseGiftCardVoList.length, t.notCanUseNum = n.data.notCanUseGiftCardVoList.length, t.tabTitle = [{
                name: "可用卡（".concat(t.canUseNum, "）")
              }, {
                name: "不可用卡（".concat(t.notCanUseNum, "）")
              }], 0 == t.currentTab ? t.records = n.data.canUseGiftCardVoList : 1 == t.currentTab && (t.records = n.data.notCanUseGiftCardVoList))
            }))
          },
          tabsChange: function(t) {
            this.currentTab = t, this.getCardList()
          },
          closePopup: function() {
            this.show = !1
          },
          bindCard: function() {
            this.$navigateTo({
              url: "/subPage/pages/bindGiftCard/bindGiftCard"
            })
          },
          getGiftCardDetail: function(t) {
            var n = this,
              e = {
                id: t.id
              };
            this.cardId = t.id, this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftCard/getGiftCardDetailedById", e).then((function(t) {
              1 === t.code && (n.cardDetail = t.data, n.show = !0)
            }))
          },
          buyCard: function() {
            this.buyPop = !0
          },
          showLog: function() {
            this.show = !0
          },
          showtips: function(t) {
            this.cardInfo = t, this.showTip = !0
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.filterBox{-webkit-filter:grayscale(100%)}.popup-tips{background:#fff;padding:70rpx;width:640rpx}.page-box{background:#f7f7f7;font-family:Source Han Sans CN-Normal,Source Han Sans CN;font-weight:400;min-height:100vh}.page-box .head-box{background:#fff;height:315rpx;width:100%}.page-box .head-box .bg-box{align-items:center;background:url('https://eshopfile.zhiyousx.com/giftCard/Vector.png')top no-repeat;background-size:750rpx 212rpx;display:-webkit-flex;display:flex;flex-direction:column;height:212rpx;width:750rpx}.page-box .head-box .bg-box .title{color:#fff;font-size:32rpx;line-height:48rpx;margin-top:52rpx;text-shadow:0 2rpx 1px rgba(0,0,0,.1)}.page-box .head-box .bg-box .money{color:#fff;font-size:40rpx;font-weight:700;line-height:60rpx;text-shadow:0 2rpx 1px rgba(0,0,0,.1)}.page-box .head-box .tab-box{padding-top:10rpx}.page-box .card-box{padding:30rpx 40rpx 100rpx}.page-box .card-box .no-card{align-items:center;color:#999;display:-webkit-flex;display:flex;flex-direction:column;font-size:26rpx;line-height:39rpx;margin-top:70rpx}.page-box .card-box .no-card .no-card-icon{height:299.5rpx;width:320rpx}.page-box .card-box .card-box-it{height:280rpx;margin-bottom:30rpx;position:relative;width:670rpx}.page-box .card-box .card-box-it .card-state{height:100rpx;position:absolute;right:16rpx;top:116rpx;width:100rpx}.page-box .card-box .card-box-it .card-item{height:280rpx;position:relative;width:670rpx}.page-box .card-box .card-box-it .card-item .card-image{border-radius:20rpx;height:280rpx;width:670rpx}.page-box .card-box .card-box-it .card-item .card-data{height:280rpx;left:0;position:absolute;top:0;width:670rpx}.page-box .card-box .card-box-it .card-item .card-data .cardHeadbg{background:linear-gradient(180deg,#fd928b,#ef5e3f)}.page-box .card-box .card-box-it .card-item .card-data .card-head{border-radius:20rpx 20rpx 0 0;height:100rpx;position:relative;width:670rpx}.page-box .card-box .card-box-it .card-item .card-data .card-head .card-logo{height:65rpx;left:20rpx;position:absolute;top:19rpx;width:56rpx}.page-box .card-box .card-box-it .card-item .card-data .card-head .card-info{left:96rpx;position:absolute;top:12rpx}.page-box .card-box .card-box-it .card-item .card-data .card-head .card-info .card-name{color:#fff;font-size:28rpx;line-height:42rpx}.page-box .card-box .card-box-it .card-item .card-data .card-head .card-info .card-value{color:#fff;font-size:24rpx;line-height:36rpx}.page-box .card-box .card-box-it .card-item .card-data .card-head .card-log{color:#fff;font-size:24rpx;line-height:36rpx;position:absolute;right:20rpx;top:24rpx}.page-box .card-box .card-box-it .card-item .card-data .card-head .card-time{color:#fff;font-size:24rpx;line-height:36rpx;position:absolute;right:20rpx;top:54rpx}.page-box .card-box .card-box-it .card-item .card-data .cardBodyBg{background:linear-gradient(180deg,#fff,#ffefef);border:1px solid #ff5411}.page-box .card-box .card-box-it .card-item .card-data .card-body{align-items:center;border-radius:0 0 20rpx 20rpx;display:-webkit-flex;display:flex;flex-direction:column;height:180rpx;position:relative;width:670rpx}.page-box .card-box .card-box-it .card-item .card-data .card-body .card-balance{height:60rpx;margin-top:40rpx}.page-box .card-box .card-box-it .card-item .card-data .card-body .card-balance .label{color:#ff5411;font-size:24rpx}.page-box .card-box .card-box-it .card-item .card-data .card-body .card-balance .value{color:#ff5411;font-size:40rpx}.page-box .card-box .card-box-it .card-item .card-data .card-body .card-tips{align-items:center;display:-webkit-flex;display:flex;height:36rpx}.page-box .card-box .card-box-it .card-item .card-data .card-body .card-tips .tips{color:#999;font-size:24rpx;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:203rpx}.page-box .card-box .card-box-it .card-item .card-data .card-body .card-tips .tips-icon{height:28rpx;width:28rpx}.page-box .footer{background:#fff;border-top:2rpx solid rgba(0,0,0,.1);bottom:0;display:-webkit-flex;display:flex;height:100rpx;left:0;position:fixed;width:750rpx}.page-box .footer .item{align-items:center;display:-webkit-flex;display:flex;justify-content:center;width:50%}.page-box .footer .item .icon1{background-size:100% 100%;height:31.34rpx;width:35rpx}.page-box .footer .item .icon2{background-size:100% 100%;height:29rpx;width:43rpx}.page-box .footer .item .t{color:#555;font-size:26rpx;font-weight:400;margin-left:10rpx}.page-box .popup-box{background:#fff;height:760rpx;overflow:hidden;position:relative;width:640rpx}.page-box .popup-box .title{color:#333;font-size:32rpx;line-height:48rpx;margin-top:34rpx;text-align:center;width:100%}.page-box .popup-box .card-number{background:#fff3f3;border-radius:4rpx;color:#333;display:inline-block;font-size:28rpx;line-height:42rpx;margin-left:30rpx;margin-top:33rpx;padding:10rpx 20rpx;text-align:center}.page-box .popup-box .record{padding:30rpx 40rpx 0}.page-box .popup-box .record .name{color:#777;font-size:26rpx;line-height:30rpx}.page-box .popup-box .record .no-record{align-items:center;color:#999;display:-webkit-flex;display:flex;flex-direction:column;font-size:26rpx;line-height:39rpx;margin-top:45rpx}.page-box .popup-box .record .no-record .icon3{height:248.5rpx;width:237rpx}.page-box .popup-box .record .record-box{margin-top:20rpx}.page-box .popup-box .record .record-box .record-item{border-bottom:1px solid #eee;display:-webkit-flex;display:flex;height:96rpx;justify-content:space-between;margin-bottom:20rpx;width:560rpx}.page-box .popup-box .record .record-box .record-item .item-left .item-orderId{color:#555;font-size:26rpx;line-height:39rpx}.page-box .popup-box .record .record-box .record-item .item-left .item-time{color:#999;font-size:22rpx;line-height:33rpx;margin-top:8rpx}.page-box .popup-box .record .record-box .record-item .item-right{text-align:right}.page-box .popup-box .record .record-box .record-item .item-right .item-change{color:#28ad4d;font-size:28rpx;line-height:42rpx}.page-box .popup-box .record .record-box .record-item .item-right .add{color:#ff5411}.page-box .popup-box .record .record-box .record-item .item-right .item-balance{color:#999;font-size:24rpx;line-height:36rpx;margin-top:8rpx}.page-box .popup-box .but{border:1px solid #ff5411;border-radius:50rpx;bottom:40rpx;color:#ff5411;font-size:26rpx;height:60rpx;left:160rpx;line-height:58rpx;position:absolute;text-align:center;width:320rpx}.page-box .buy-tips-box{background:#fff;border-radius:20rpx;box-shadow:0-20rpx 20rpx 1px rgba(0,0,0,.05);height:452rpx;overflow:hidden;text-align:center;width:640rpx}.page-box .buy-tips-box .bt-title{color:#333;font-size:32rpx;line-height:48rpx;margin-top:24rpx}.page-box .buy-tips-box .bt-info1{color:#333;font-size:28rpx;line-height:42rpx;margin-top:86rpx}.page-box .buy-tips-box .bt-info2{color:#333;font-size:28rpx;line-height:42rpx}.page-box .buy-tips-box .bt-info3{color:#333;font-size:36rpx;font-weight:500;line-height:54rpx;margin-top:10rpx}.page-box .buy-tips-box .bt-but{border:1px solid #ff5411;border-radius:50rpx;color:#ff5411;font-size:26rpx;height:60rpx;line-height:58rpx;margin-left:160rpx;margin-top:70rpx;text-align:center;width:320rpx}
</style>
