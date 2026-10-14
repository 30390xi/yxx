<template>
<view class="verify-code">
    <view class="cardNo">{{'NO. '+(info.cardNo||'')}}</view>
    <view class="swiper-code">
        <view class="code" v-if="qrCode&&info.status===3">
            <l-painter class="" :vueSlots="['default']">
                <l-painter-qrcode class="" css="width: 380rpx; height: 380rpx" :text="qrCode" v-if="qrCode"></l-painter-qrcode>
            </l-painter>
        </view>
        <view class="code" v-if="qrCode&&info.status!==3">
            <view class="lapse _div">
                <image class="" mode="scaleToFill" src="https://eshopfile.zhiyousx.com/171888583277430923.png"></image>
                <text class="">该权益已失效</text>
            </view>
        </view>
    </view>
    <view class="code-tip">
        <u-icon class="" color="#989898" name="error-circle" size="28"></u-icon>
        <text class="">核验码定时更新，请勿截屏，以免影响正常使用</text>
    </view>
    <view class="shop">
        <view class="shop-header">
            <view class="shop-header-left">{{'可用商家（'+$root.f0+'家）'}}</view>
            <view class="shop-header-right" @click="goShopList()">查看全部<image class="" src="https://eshopfile.zhiyousx.com/171825167588113676.png"></image>
            </view>
        </view>
        <view class="shop-body" v-if="info.verifyNum" @click="goShopList(1)">已经去过<text class="">{{info.verifyNum||'0'}}</text>
            <image class="" src="https://eshopfile.zhiyousx.com/2023102614083173967.png"></image>
        </view>
    </view>
    <view class="owner" v-if="hasUserInfo">
        <image class="" mode="aspectFill" :src="info.cardholderFaceUrl?info.cardholderFaceUrl:logo"></image>
        <view class="owner-info">
            <view class="line" v-if="getInfo.cardholderName">
                <view class="label">姓名</view>
                <view class="info">{{ getInfo.cardholderName }}<image class="icon" :src="!isShowAll?'https://eshopfile.zhiyousx.com/168492134271144514.png':'https://eshopfile.zhiyousx.com/168492259404793104.png'" @click="e0($event)"></image>
                </view>
            </view>
            <view class="line" v-if="getInfo.cardholderIdCard">
                <view class="label">身份证</view>
                <view class="info">{{ getInfo.cardholderIdCard }}<image class="icon" :src="!isShowAll?'https://eshopfile.zhiyousx.com/168492134271144514.png':'https://eshopfile.zhiyousx.com/168492259404793104.png'" v-if="!getInfo.cardholderName" @click="e1($event)"></image>
                </view>
            </view>
            <view class="line" v-if="getInfo.cardholderMobile">
                <view class="label">手机号</view>
                <view class="info">{{ getInfo.cardholderMobile }}<image class="icon" :src="!isShowAll?'https://eshopfile.zhiyousx.com/168492134271144514.png':'https://eshopfile.zhiyousx.com/168492259404793104.png'" v-if="!getInfo.cardholderName&&!getInfo.cardholderIdCard" @click="e2($event)"></image>
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
            components: {},
            props: {
              info: {
                type: Object,
                default: function() {
                  return {
                    classList: []
                  }
                }
              }
            },
            destroyed: function() {
              this.cleanup()
            },
            computed: {
              getInfo: function() {
                return this.isShowAll ? this.info : this.encryptInfo
              },
              hasUserInfo: function() {
                return this.getInfo.cardholderName || this.getInfo.cardholderIdCard || this.getInfo.cardholderMobile || this.info.cardholderFaceUrl
              }
            },
            filters: {
              numFilter: function(n) {
                if (!n) return 0;
                var e = n.toString();
                return n > 9 && n <= 1e3 ? e = e.slice(0, -1) + "0+" : n > 1e3 && (e = e.slice(0, -2) + "00+"), e
              }
            },
            watch: {
              info: {
                deep: !0,
                immediate: !0,
                handler: function(n) {
                  n && n.cardCode && (this.init(), this.initEncrypt())
                }
              }
            },
            data: function() {
              return {
                timer: null,
                qrCode: "",
                isShowAll: !1,
                encryptInfo: {},
                logo: "https://eshopfile.zhiyousx.com/2024052310153909816.png"
              }
            },
            methods: {
              init: function() {
                var n = this;
                this.timer && this.cleanup(), this.qrCode = i(this.info), this.timer = setInterval((function() {
                  n.qrCode = i(n.info)
                }), 3e5)
              },
              initEncrypt: function() {
                var n = this.info,
                  e = n.cardholderName,
                  t = n.cardholderIdCard,
                  i = n.cardholderMobile;
                this.encryptInfo = {
                  cardholderName: (0, o.encryptionStr)(2, e),
                  cardholderIdCard: (0, o.encryptionStr)(3, t),
                  cardholderMobile: (0, o.encryptionStr)(1, i)
                }
              },
              cleanup: function() {
                clearInterval(this.timer)
              },
              goShopList: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                  t = e ? "/union/pages/list/list?isUsed=" + e : "/union/pages/list/list";
                uni.navigateTo({
                  url: t
                })
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.verify-code .cardNo{color:#333;font-size:32rpx;line-height:45rpx;padding-top:10rpx;text-align:center}.verify-code .swiper-code{align-items:center;display:-webkit-flex;display:flex;justify-content:center}.verify-code .swiper-code .code{height:380rpx;margin:50rpx;width:380rpx}.verify-code .swiper-code .code .lapse{align-items:center;color:rgba(0,0,0,.5);display:-webkit-flex;display:flex;height:100%;justify-content:center}.verify-code .swiper-code .code .lapse image{height:40rpx;width:40rpx}.verify-code .swiper-code .code .lapse text{margin-left:10rpx}.verify-code .code-tip{display:-webkit-flex;display:flex;height:34rpx;justify-content:center}.verify-code .code-tip text{color:rgba(0,0,0,.5);font-size:24rpx;margin-left:5rpx}.verify-code .shop{border-top:1rpx solid rgba(0,0,0,.05);margin-top:40rpx;padding:30rpx 0}.verify-code .shop .shop-header{align-items:center;display:-webkit-flex;display:flex;height:45rpx;justify-content:space-between}.verify-code .shop .shop-header .shop-header-left{color:#333;font-size:32rpx}.verify-code .shop .shop-header .shop-header-right{align-items:center;color:rgba(0,0,0,.5);display:-webkit-flex;display:flex;font-size:24rpx}.verify-code .shop .shop-header .shop-header-right image{height:38rpx;width:38rpx}.verify-code .shop .shop-body{align-items:center;background:#fafafa;border-radius:20rpx;color:rgba(0,0,0,.5);display:-webkit-flex;display:flex;font-size:26rpx;height:62rpx;justify-content:center;line-height:1;margin-top:30rpx;width:650rpx}.verify-code .shop .shop-body image{height:26rpx;width:26rpx}.verify-code .shop .shop-body text{color:rgba(0,0,0,.8);font-size:30rpx;font-weight:700;line-height:1;margin:0 16rpx 0 10rpx}.verify-code .owner{align-items:center;border-top:1rpx solid rgba(0,0,0,.05);display:-webkit-flex;display:flex;height:166rpx;justify-content:space-between;padding-top:30rpx}.verify-code .owner image{border-radius:100rpx 100rpx 100rpx 100rpx;height:100rpx;width:100rpx}.verify-code .owner .owner-info{display:-webkit-flex;display:flex;flex-direction:column;height:136rpx;justify-content:center;width:510rpx}.verify-code .owner .owner-info .line{align-items:center;display:-webkit-flex;display:flex;margin-top:14rpx}.verify-code .owner .owner-info .line .label{color:rgba(0,0,0,.5);font-size:26rpx;line-height:36rpx;width:108rpx}.verify-code .owner .owner-info .line .info{align-items:center;color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;font-size:26rpx;line-height:36rpx}.verify-code .owner .owner-info .line .info .adult{background:#efefef;border-radius:16rpx 16rpx 16rpx 16rpx;color:rgba(0,0,0,.8);font-size:20rpx;height:32rpx;line-height:32rpx;margin-left:10rpx;text-align:center;width:68rpx}.verify-code .owner .owner-info .line .info .icon{height:34rpx;margin-left:30rpx;width:34rpx}.verify-code .owner .owner-info .line:first-child{margin-top:0}
</style>
