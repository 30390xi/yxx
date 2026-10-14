<template>
<view class="page-box">
    <input class="card-input" placeholder="请输入礼品卡密码，区分大小写" :value="password" @input="password = $event" @blur="$forceUpdate()"></input>
    <view class="tip" v-if="showTips">礼品卡密码有误，如有疑问请联系客服4000292296</view>
    <view class="bind-but" @click="getGiftCardById($event)">绑定</view>
    <u-popup borderRadius="20" class="" :closeable="true" mode="center" :value="show" :vueSlots="['default']" @input="show = $event">
        <view class="card-box">
            <view class="t1">{{ $root.f0 }}</view>
            <view class="t2" v-if="cardInfo.status==0">确认绑定后该卡不得转增，只可再当前账号使用</view>
            <view class="card-box-popup">
                <view :class="['card-item-popup','',cardInfo.status==1||cardInfo.status==2||cardInfo.status==3||cardInfo.status==4||cardInfo.status==5||cardInfo.status==6?'filterBox':'']">
                    <image mode class="card-image" :src="cardInfo.cardPicUrl" v-if="cardInfo.cardPicUrl"></image>
                    <view class="card-data">
                        <view :class="['card-head','',!cardInfo.cardPicUrl?'cardHeadbg':'']">
                            <image mode class="card-logo" src="../../static/images/logo.png" v-if="!cardInfo.cardPicUrl"></image>
                            <view class="card-info">
                                <view class="card-name">{{ cardInfo.name }}</view>
                                <view class="card-value">{{'面值：'+cardInfo.quota+'元'}}</view>
                            </view>
                            <view class="card-log" v-if="cardInfo.status!=0&&cardInfo.isSelfActivate==1" @click="getGiftCardDetail(cardInfo)">消费明细</view>
                            <view class="card-time">{{ $root.f1 }}</view>
                        </view>
                        <view :class="['card-body','',!cardInfo.cardPicUrl?'cardBodyBg':'']">
                            <view class="card-balance">
                                <text class="label">余额</text>
                                <text class="value">{{'￥'+(cardInfo.balance||0)}}</text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="but-popup" v-if="cardInfo.status==0">
                <view class="but" @click="closePop($event)">再想想</view>
                <view class="but but1" @click="bindCard($event)">确定</view>
            </view>
            <view class="butNot" v-if="cardInfo.status!=0" @click="closePop($event)">确定</view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="center" :value="showOther" :vueSlots="['default']" @input="showOther = $event">
        <view class="popup-other">
            <view class="title">该卡已被绑定！</view>
            <view class="but-other" @click="closeOther($event)">确定</view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="center" :value="showDetail" :vueSlots="['default']" @input="showDetail = $event">
        <view class="popup-box">
            <view class="title">我的礼品卡</view>
            <view class="card-number">{{'卡号：'+cardId+''}}</view>
            <view class="record">
                <view class="name">消费记录：</view>
                <view class="no-record" v-if="$root.g0">
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
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        data: function() {
          return {
            show: !1,
            password: "",
            cardDetail: [],
            cardInfo: "",
            cardId: "",
            bindType: null,
            showTips: !1,
            showOther: !1,
            showDetail: !1
          }
        },
        filters: {
          statusFilter: function(t) {
            return {
              0: "绑定到您的游陕西账户？",
              1: "您已绑定了该卡",
              2: "您已绑定了该卡",
              3: "您已绑定了该卡",
              4: "该卡片已过期",
              5: "该卡片已冻结",
              6: "该卡片已作废"
            } [t]
          },
          cardTimeFilter: function(t) {
            return t.validityTimeStr ? t.validityTimeStr : t.activateEndTime ? t.activateEndTime.slice(0, 10) + "前激活" : void 0
          }
        },
        methods: {
          getGiftCardById: function() {
            var t = this;
            if (this.password) {
              var i = {
                password: this.password
              };
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftCard/getGiftCardById", i).then((function(i) {
                if (1 === i.code)
                  if (i.data) {
                    if (t.showTips = !1, t.cardInfo = i.data, 0 != i.data.status && 0 == i.data.isSelfActivate) return void(t.showOther = !0);
                    t.show = !0
                  } else t.showTips = !0;
                else t.showTips = !0
              }))
            } else this.$uni.showToast("请输入礼品卡密码")
          },
          getGiftCardDetail: function(t) {
            var i = this,
              a = {
                id: t.id
              };
            this.cardId = t.id, this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftCard/getGiftCardDetailedById", a).then((function(t) {
              1 === t.code && (i.cardDetail = t.data, i.showDetail = !0)
            }))
          },
          bindCard: function() {
            var t = this,
              i = {
                password: this.password
              };
            this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftCard/activateGiftCardByPassWord", i).then((function(i) {
              1 === i.code && 0 == i.data ? (t.bindType = i.data, t.show = !1, t.$uni.showToast("绑定成功"), t.$util.prevPage(1)) : t.$uni.showToast(i.msg)
            }))
          },
          closePop: function() {
            this.show = !1
          },
          closeOther: function() {
            this.showOther = !1
          },
          closePopup: function() {
            this.showDetail = !1
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.filterBox{-webkit-filter:grayscale(100%)}.popup-other{background:#fff;border-radius:20rpx;box-shadow:0-20rpx 20rpx 1px rgba(0,0,0,.05);height:320rpx;overflow:hidden;width:640rpx}.popup-other .title{color:#333;font-size:36rpx;line-height:54rpx;margin-top:80rpx;text-align:center}.popup-other .but-other{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:50rpx;color:#fff;font-size:26rpx;height:70rpx;line-height:70rpx;margin-left:182rpx;margin-top:86rpx;text-align:center;width:274rpx}.page-box{background:#fff;font-family:Source Han Sans CN-Normal,Source Han Sans CN;font-weight:400;min-height:100vh;padding:40rpx}.page-box .card-input{background:#f7f7f7;border-radius:50rpx;height:80rpx;padding:0 40rpx}.page-box .tip{color:#ff5411;font-size:24rpx;line-height:36rpx;margin-top:10rpx}.page-box .bind-but{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:50rpx;color:#fff;font-size:26rpx;height:80rpx;line-height:80rpx;margin-top:60rpx;text-align:center;width:670rpx}.page-box .card-box{background:#fff;height:570rpx;padding:80rpx 34rpx 30rpx;position:relative;width:640rpx}.page-box .card-box .t1{color:#333;font-size:36rpx;line-height:54rpx;text-align:center}.page-box .card-box .t2{color:#777;font-size:26rpx;line-height:39rpx;text-align:center}.page-box .card-box .butNot{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:50rpx;color:#fff;left:182rpx;width:274rpx}.page-box .card-box .but-popup,.page-box .card-box .butNot{bottom:30rpx;font-size:26rpx;height:70rpx;line-height:70rpx;position:absolute;text-align:center}.page-box .card-box .but-popup{color:#555;display:-webkit-flex;display:flex;justify-content:space-between;left:40rpx;width:572rpx}.page-box .card-box .but-popup .but{border:1px solid #aaa;border-radius:50rpx;height:70rpx;width:274rpx}.page-box .card-box .but-popup .but1{background:linear-gradient(253deg,#fc4a9b,#ff5413);border:none;color:#fff}.page-box .card-box .card-box-popup{margin-top:30rpx}.page-box .card-box .card-box-popup .card-item-popup{height:240rpx;margin-bottom:20rpx;position:relative;width:572rpx}.page-box .card-box .card-box-popup .card-item-popup .card-image{border-radius:20rpx;height:240rpx;width:572rpx}.page-box .card-box .card-box-popup .card-item-popup .card-data{height:240rpx;left:0;position:absolute;top:0;width:572rpx}.page-box .card-box .card-box-popup .card-item-popup .card-data .cardHeadbg{background:linear-gradient(180deg,#fd928b,#ef5e3f)}.page-box .card-box .card-box-popup .card-item-popup .card-data .card-head{border-radius:20rpx 20rpx 0 0;height:90rpx;position:relative;width:572rpx}.page-box .card-box .card-box-popup .card-item-popup .card-data .card-head .card-logo{height:65rpx;left:20rpx;position:absolute;top:13rpx;width:56rpx}.page-box .card-box .card-box-popup .card-item-popup .card-data .card-head .card-info{left:100rpx;position:absolute;top:8rpx}.page-box .card-box .card-box-popup .card-item-popup .card-data .card-head .card-info .card-name{color:#fff;font-size:26rpx;line-height:39rpx}.page-box .card-box .card-box-popup .card-item-popup .card-data .card-head .card-info .card-value{color:#fff;font-size:22rpx;line-height:33rpx}.page-box .card-box .card-box-popup .card-item-popup .card-data .card-head .card-log{color:#fff;font-size:20rpx;line-height:36rpx;position:absolute;right:20rpx;top:10rpx}.page-box .card-box .card-box-popup .card-item-popup .card-data .card-head .card-time{bottom:10rpx;color:#fff;font-size:20rpx;line-height:36rpx;position:absolute;right:20rpx}.page-box .card-box .card-box-popup .card-item-popup .card-data .cardBodyBg{background:linear-gradient(180deg,#fff,#ffefef);border:1px solid #ff5411}.page-box .card-box .card-box-popup .card-item-popup .card-data .card-body{align-items:center;border-radius:0 0 20rpx 20rpx;display:-webkit-flex;display:flex;flex-direction:column;height:150rpx;width:572rpx}.page-box .card-box .card-box-popup .card-item-popup .card-data .card-body .card-balance{height:60rpx;margin-top:40rpx}.page-box .card-box .card-box-popup .card-item-popup .card-data .card-body .card-balance .label{color:#ff5411;font-size:24rpx}.page-box .card-box .card-box-popup .card-item-popup .card-data .card-body .card-balance .value{color:#ff5411;font-size:40rpx}.page-box .card-box .card-box-popup .card-item-popup .card-data .card-body .card-tips{align-items:center;display:-webkit-flex;display:flex;height:36rpx}.page-box .card-box .card-box-popup .card-item-popup .card-data .card-body .card-tips .tips{margin-right:12rpx;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:203rpx}.page-box .card-box .card-box-popup .card-item-popup .card-data .card-body .card-tips .tips-icon{height:28rpx;width:28rpx}.page-box .popup-box{background:#fff;height:760rpx;overflow:hidden;position:relative;width:640rpx}.page-box .popup-box .title{color:#333;font-size:32rpx;line-height:48rpx;margin-top:34rpx;text-align:center;width:100%}.page-box .popup-box .card-number{background:#fff3f3;border-radius:4rpx;color:#333;font-size:28rpx;height:62rpx;line-height:62rpx;margin-left:30rpx;margin-top:33rpx;text-align:center;width:370rpx}.page-box .popup-box .record{padding:30rpx 40rpx 0}.page-box .popup-box .record .name{color:#777;font-size:26rpx;line-height:30rpx}.page-box .popup-box .record .no-record{align-items:center;color:#999;display:-webkit-flex;display:flex;flex-direction:column;font-size:26rpx;line-height:39rpx;margin-top:45rpx}.page-box .popup-box .record .no-record .icon3{height:248.5rpx;width:237rpx}.page-box .popup-box .record .record-box{margin-top:20rpx}.page-box .popup-box .record .record-box .record-item{border-bottom:1px solid #eee;display:-webkit-flex;display:flex;height:96rpx;justify-content:space-between;margin-bottom:20rpx;width:560rpx}.page-box .popup-box .record .record-box .record-item .item-left .item-orderId{color:#555;font-size:26rpx;line-height:39rpx}.page-box .popup-box .record .record-box .record-item .item-left .item-time{color:#999;font-size:22rpx;line-height:33rpx;margin-top:8rpx}.page-box .popup-box .record .record-box .record-item .item-right{text-align:right}.page-box .popup-box .record .record-box .record-item .item-right .item-change{color:#28ad4d;font-size:28rpx;line-height:42rpx}.page-box .popup-box .record .record-box .record-item .item-right .add{color:#ff5411}.page-box .popup-box .record .record-box .record-item .item-right .item-balance{color:#999;font-size:24rpx;line-height:36rpx;margin-top:8rpx}.page-box .popup-box .but{border:1px solid #ff5411;border-radius:50rpx;bottom:40rpx;color:#ff5411;font-size:26rpx;height:60rpx;left:160rpx;line-height:58rpx;position:absolute;text-align:center;width:320rpx}
</style>
