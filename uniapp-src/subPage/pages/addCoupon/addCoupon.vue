<template>
<view class="page-box">
    <input class="card-input" placeholder="请输入兑换码，区分大小写" :value="password" @input="password = $event" @blur="$forceUpdate()"></input>
    <view class="tip" v-if="showTips">兑换码有误，如有疑问请联系客服4000292296</view>
    <view class="bind-but" @click="getUserCouponByPassword($event)">绑定</view>
    <u-popup borderRadius="20" class="" :closeable="true" mode="center" :value="show" :vueSlots="['default']" @input="show = $event">
        <view class="card-box">
            <view class="t1">{{ $root.f0 }}</view>
            <view class="t2" v-if="cardInfo.useState==0">确认兑换后该券不得转赠，只可在当前账号使用</view>
            <view class="card-box-popup" v-if="cardInfo.useState==0">
                <view class="card-item-popup" :style="'height:'+(cardInfo.useTimeSlot==2?'255rpx':'200rpx')+';'">
                    <image mode class="card-image" src="https://eshopfile.zhiyousx.com/2023111315420708034.png" :style="'height:'+(cardInfo.useTimeSlot==2?'280rpx':'200rpx')+';'" v-if="cardInfo.useState==0"></image>
                    <image mode class="card-image" src="https://eshopfile.zhiyousx.com/2023111315433122810.png" :style="'height:'+(cardInfo.useTimeSlot==2?'280rpx':'200rpx')+';'" v-else></image>
                    <view class="coupon-l" :style="'top:'+(cardInfo.useTimeSlot==2?'40rpx':'17rpx')+';'">
                        <view :class="['amount','',cardInfo.useState!=0?'unable':'']">
                            <view :class="['amountNum','',cardInfo.useState!=0?'unable':'']" v-if="cardInfo.type==2||cardInfo.type==1">￥<text :class="['',cardInfo.useState!=0?'unable':'']" style="font-size:42rpx;color:#FF5411;">{{cardInfo.quota}}</text>
                            </view>
                            <view :class="['amountNum','',cardInfo.useState!=0?'unable':'']" v-if="cardInfo.type==3">
                                <text :class="['',cardInfo.useState!=0?'unable':'']" style="font-size:42rpx;color:#FF5411;">0</text>元购</view>
                        </view>
                        <view :class="['amount-info','',cardInfo.useState!=0?'unable':'']" v-if="cardInfo.type==2&&cardInfo.threshold==0">无门槛</view>
                        <view :class="['amount-info','',cardInfo.useState!=0?'unable':'']" v-if="cardInfo.type==1&&cardInfo.threshold>0">{{'满'+cardInfo.threshold+'元可用'}}</view>
                        <view :class="['amount-info','',cardInfo.useState!=0?'unable':'']" v-if="cardInfo.type==3">{{'可抵扣'+cardInfo.deduction+'张'}}</view>
                    </view>
                    <view class="coupon-r" :style="'top:'+(cardInfo.useTimeSlot==2?'15rpx':'33rpx')+';'">
                        <view :class="['name','singleLineText','',cardInfo.useState!=0?'unable':'']">{{ cardInfo.name }}</view>
                        <view :class="['time','',cardInfo.useState!=0?'unable':'']">{{ $root.f1 }}</view>
                        <view :class="['time','',cardInfo.useState!=0?'unable':'']" :style="'margin-top:'+'0rpx'+';'" v-if="cardInfo.useTimeSlot==2">{{ '可购买【'+cardInfo.useTimeStart+'-'+cardInfo.useTimeEnd+'】的'+(cardInfo.itemType===1?'门票':'线路产品') }}</view>
                    </view>
                    <view class="line"></view>
                    <view class="coupon-tips" v-if="cardInfo.useExplain" @click="showCoupontips()">
                        <view :class="['tips','',cardInfo.useState!=0?'unable':'']" :style="'width:'+tipWidth+'rpx'+';'">{{ cardInfo.useExplain }}<view class="" id="tips-in">{{ cardInfo.useExplain }}</view>
                        </view>
                        <image mode class="tips-icon" src="../../static/images/info.png" v-if="showTipsImage"></image>
                    </view>
                </view>
            </view>
            <view class="" style="height:120rpx;" v-else></view>
            <view class="but-popup" v-if="cardInfo.useState==0">
                <view class="but" @click="closePop($event)">再想想</view>
                <view class="but but1" @click="activationUserCoupon($event)">确定</view>
            </view>
            <view class="butNot" v-if="cardInfo.useState!=0" @click="closePop($event)">确定</view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="center" :value="showOther" :vueSlots="['default']" @input="showOther = $event">
        <view class="popup-other">
            <view class="title">该优惠券已被兑换</view>
            <view class="but-other" @click="closeOther($event)">确定</view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="center" :value="showTip" :vueSlots="['default']" @input="showTip = $event">
        <view class="popup-tips">{{ cardInfo.useExplain }}</view>
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
              showTip: !1,
              showOther: !1,
              showDetail: !1,
              unit: 0,
              showTipsImage: !1,
              tipWidth: 430,
              isSubmit: !1
            }
          },
          filters: {
            statusFilter: function(t) {
              return {
                0: "兑换到您的游陕西帐户",
                1: "该优惠券已兑换",
                2: "该优惠券已兑换",
                3: "该优惠券已过期",
                4: "该优惠券已失效",
                5: "该优惠券已兑换",
                6: "该优惠券已兑换"
              } [t]
            },
            cardTimeFilter: function(t) {
              if (!t.validityStartTime || !t.validityEndTime) return "";
              if (0 != t.useState) {
                if (0 == t.useTimeSlot || 2 == t.useTimeSlot) return t.validityStartTime.slice(0, 10) + "至" + t.validityEndTime.slice(0, 10);
                if (1 == t.useTimeSlot) return "".concat(t.validityEndTime, "前有效")
              } else {
                if (0 == t.useTimeSlot || 2 == t.useTimeSlot) return t.validityStartTime.slice(0, 10) + "至" + t.validityEndTime.slice(0, 10);
                if (1 == t.useTimeSlot) return "领券后".concat(t.useTimeSlotHour, "小时内有效")
              }
            }
          },
          onLoad: function() {
            var i = this;
            uni.getSystemInfo({
              success: function(t) {
                i.unit = 750 / t.screenWidth
              }
            })
          },
          methods: {
            getUserCouponByPassword: function() {
              var i = this;
              if (this.password) {
                var e = {
                    password: this.password
                  },
                  n = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/CouponReceive/getUserCouponByPassword", e).then((function(e) {
                  if (1 === e.code)
                    if (e.data) {
                      if (i.showTips = !1, i.cardInfo = e.data, 0 == e.data.isSelfActivate) return void(i.showOther = !0);
                      i.show = !0, setTimeout((function() {
                        i.$nextTick((function() {
                          var i = uni.createSelectorQuery();
                          i.select("#tips-in").boundingClientRect(), i.exec((function(t) {
                            t[0].width * n.unit > 430 && (n.showTipsImage = !0, n.tipWidth = 405)
                          }))
                        }))
                      }), 100)
                    } else i.showTips = !0;
                  else i.showTips = !0
                }))
              } else this.$uni.showToast("请输入兑换码")
            },
            activationUserCoupon: function() {
              var t = this;
              if (!this.isSubmit) {
                this.isSubmit = !0;
                var i = {
                  password: this.password
                };
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/CouponReceive/activationUserCoupon", i).then((function(i) {
                  1 === i.code ? (t.bindType = i.data, t.show = !1, t.$uni.showToast("绑定成功"), t.isSubmit = !1, t.$util.prevPage(1)) : (t.isSubmit = !1, t.$uni.showToast(i.msg))
                }))
              }
            },
            closePop: function() {
              this.show = !1
            },
            closeOther: function() {
              this.showOther = !1
            },
            closePopup: function() {
              this.showDetail = !1
            },
            showCoupontips: function() {
              this.showTip = !0
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.popup-tips{word-wrap:break-word;background:#fff;padding:70rpx;text-align:justify;width:640rpx}.unable{color:#777!important}.popup-other{background:#fff;border-radius:20rpx;box-shadow:0-20rpx 20rpx 1px rgba(0,0,0,.05);height:320rpx;overflow:hidden;width:640rpx}.popup-other .title{color:#333;font-size:36rpx;line-height:54rpx;margin-top:80rpx;text-align:center}.popup-other .but-other{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:50rpx;color:#fff;font-size:26rpx;height:70rpx;line-height:70rpx;margin-left:182rpx;margin-top:86rpx;text-align:center;width:274rpx}.page-box{background:#fff;font-family:Source Han Sans CN-Normal,Source Han Sans CN;font-weight:400;min-height:100vh;padding:40rpx}.page-box .card-input{background:#f7f7f7;border-radius:50rpx;height:80rpx;padding:0 40rpx}.page-box .tip{color:#ff5411;font-size:24rpx;line-height:36rpx;margin-top:10rpx}.page-box .bind-but{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:50rpx;color:#fff;font-size:26rpx;height:80rpx;line-height:80rpx;margin-top:60rpx;text-align:center;width:670rpx}.page-box .card-box{background:#fff;padding:80rpx 34rpx 30rpx;position:relative;width:640rpx}.page-box .card-box .t1{color:#333;font-size:36rpx;line-height:54rpx;text-align:center}.page-box .card-box .t2{color:#777;font-size:26rpx;line-height:39rpx;text-align:center}.page-box .card-box .butNot{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:50rpx;bottom:30rpx;color:#fff;font-size:26rpx;height:70rpx;left:182rpx;line-height:70rpx;position:absolute;text-align:center;width:274rpx}.page-box .card-box .but-popup{color:#555;display:-webkit-flex;display:flex;font-size:26rpx;height:70rpx;justify-content:space-between;line-height:70rpx;text-align:center;width:572rpx}.page-box .card-box .but-popup .but{border:1px solid #aaa;border-radius:50rpx;height:70rpx;width:274rpx}.page-box .card-box .but-popup .but1{background:linear-gradient(253deg,#fc4a9b,#ff5413);border:none;color:#fff}.page-box .card-box .card-box-popup{margin-top:30rpx}.page-box .card-box .card-box-popup .card-item-popup{height:200rpx;margin-bottom:20rpx;position:relative;width:572rpx}.page-box .card-box .card-box-popup .card-item-popup .card-image{height:200rpx;width:572rpx}.page-box .card-box .card-box-popup .card-item-popup .coupon-l{left:20rpx;position:absolute;text-align:center;top:17rpx}.page-box .card-box .card-box-popup .card-item-popup .coupon-l .amount{display:-webkit-flex;display:flex;height:63rpx;justify-content:center;width:180rpx}.page-box .card-box .card-box-popup .card-item-popup .coupon-l .amount .amountNum{color:#ff5411;display:table-cell;font-size:30rpx;font-weight:700;height:63rpx;margin-left:-6rpx;vertical-align:bottom}.page-box .card-box .card-box-popup .card-item-popup .coupon-l .amount-info{color:#444;font-size:26rpx;font-weight:400;line-height:39rpx;white-space:nowrap;width:180rpx}.page-box .card-box .card-box-popup .card-item-popup .coupon-r{left:217rpx;position:absolute;top:33rpx}.page-box .card-box .card-box-popup .card-item-popup .coupon-r .name{color:#444;font-size:26rpx;height:39rpx;line-height:39rpx;width:340rpx}.page-box .card-box .card-box-popup .card-item-popup .coupon-r .time{color:#777;font-size:24rpx;height:36rpx;line-height:36rpx;margin-top:7rpx}.page-box .card-box .card-box-popup .card-item-popup .line{border-bottom:1px dashed #c1bdbd;bottom:58rpx;left:27rpx;position:absolute;width:520rpx}.page-box .card-box .card-box-popup .card-item-popup .coupon-tips{align-items:center;bottom:10rpx;color:#777;display:-webkit-flex;display:flex;font-size:24rpx;height:36rpx;left:77rpx;line-height:36rpx;position:absolute}.page-box .card-box .card-box-popup .card-item-popup .coupon-tips .tips{color:#999;font-size:24rpx;overflow:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap;width:405rpx}.page-box .card-box .card-box-popup .card-item-popup .coupon-tips .tips #tips-in{bottom:0;font-size:24rpx;position:absolute;right:750rpx;white-space:nowrap;width:auto}.page-box .card-box .card-box-popup .card-item-popup .coupon-tips .tips-icon{height:28rpx;margin-left:5rpx;width:28rpx}.page-box .popup-box{background:#fff;height:760rpx;overflow:hidden;position:relative;width:640rpx}.page-box .popup-box .title{color:#333;font-size:32rpx;line-height:48rpx;margin-top:34rpx;text-align:center;width:100%}.page-box .popup-box .card-number{background:#fff3f3;border-radius:4rpx;color:#333;font-size:28rpx;height:62rpx;line-height:62rpx;margin-left:30rpx;margin-top:33rpx;text-align:center;width:370rpx}.page-box .popup-box .record{padding:30rpx 40rpx 0}.page-box .popup-box .record .name{color:#777;font-size:26rpx;line-height:30rpx}.page-box .popup-box .record .no-record{align-items:center;color:#999;display:-webkit-flex;display:flex;flex-direction:column;font-size:26rpx;line-height:39rpx;margin-top:45rpx}.page-box .popup-box .record .no-record .icon3{height:248.5rpx;width:237rpx}.page-box .popup-box .record .record-box{margin-top:20rpx}.page-box .popup-box .record .record-box .record-item{border-bottom:1px solid #eee;display:-webkit-flex;display:flex;height:96rpx;justify-content:space-between;margin-bottom:20rpx;width:560rpx}.page-box .popup-box .record .record-box .record-item .item-left .item-orderId{color:#555;font-size:26rpx;line-height:39rpx}.page-box .popup-box .record .record-box .record-item .item-left .item-time{color:#999;font-size:22rpx;line-height:33rpx;margin-top:8rpx}.page-box .popup-box .record .record-box .record-item .item-right{text-align:right}.page-box .popup-box .record .record-box .record-item .item-right .item-change{color:#28ad4d;font-size:28rpx;line-height:42rpx}.page-box .popup-box .record .record-box .record-item .item-right .add{color:#ff5411}.page-box .popup-box .record .record-box .record-item .item-right .item-balance{color:#999;font-size:24rpx;line-height:36rpx;margin-top:8rpx}.page-box .popup-box .but{border:1px solid #ff5411;border-radius:50rpx;bottom:40rpx;color:#ff5411;font-size:26rpx;height:60rpx;left:160rpx;line-height:58rpx;position:absolute;text-align:center;width:320rpx}
</style>
