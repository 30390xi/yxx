<template>
<view class="page-box">
    <view class="top-box">
        <view class="input-box">
            <view class="row-box">
                <view class="label">兑换码</view>
                <view class="value">
                    <input :border="border" class="" data-type="name" placeholder="请输入兑换码，不区分大小写" style="width:90%;font-size:28rpx;" type="text" :value="password" @input="password = $event" @blur="$forceUpdate()"></input>
                </view>
            </view>
            <ocr-index class="" :vueSlots="['content']">
                <view class="row-box" slot="content">
                    <view class="label">持卡人</view>
                    <view class="value">
                        <input :border="border" class="" data-type="name" placeholder="请填写您的姓名" style="width:90%;font-size:28rpx;" type="text" :value="useName" @input="useName = $event" @blur="$forceUpdate()"></input>
                    </view>
                </view>
            </ocr-index>
            <view class="row-box">
                <view class="label">身份证</view>
                <view class="value">
                    <input :border="border" class="" data-type="cardCode" placeholder="请填写证件号码" style="width:90%;font-size:28rpx;" type="idcard" :value="useIdCard" @input="useIdCard = $event" @blur="$forceUpdate()"></input>
                </view>
            </view>
            <view class="row-box">
                <view class="label">手机号</view>
                <view class="value">
                    <input :border="border" class="" data-type="phone" placeholder="请填写手机号码" style="width:90%;font-size:28rpx;" type="number" :value="usePhone" @input="usePhone = $event" @blur="$forceUpdate()"></input>
                </view>
            </view>
            <view class="tips" v-if="error">输入有误，如有疑问请联系客服</view>
        </view>
    </view>
    <view class="btn" @click="getCardInfo($event)">兑换</view>
    <u-popup borderRadius="20" class="" mode="center" :value="changePop" :vueSlots="['default']" zIndex="10175" @input="changePop = $event">
        <view class="change-box">
            <view class="img-box">
                <image mode class="" :src="cardInfo.image"></image>
            </view>
            <view class="title-box">
                <view class="line"></view>
                <text class="">{{cardInfo.name}}</text>
                <view class="line"></view>
            </view>
            <view class="tip-box">
                <view class="tb1">兑换到您的游陕西帐户？</view>
                <view class="tb2">确认兑换后不得转赠，只可在当前帐号使用</view>
            </view>
            <view class="btn-box">
                <view class="btn1" @click="exchangeCard($event)">立即兑换</view>
                <view class="btn2" @click="e0($event)">我再想想</view>
            </view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" mode="center" :value="tipsPop" :vueSlots="['default']" @input="tipsPop = $event">
        <view class="tipsPop-box">
            <view class="t">{{ tips }}</view>
            <view class="tips-btn" @click="e1($event)">知道了</view>
        </view>
    </u-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            ocrIndex: function() {
              n.e("components/ocr/ocrIndex").then(function() {
                return resolve(n("7882"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              password: "",
              cardInfo: "",
              error: !1,
              changePop: !1,
              userPop: !1,
              tipsPop: !1,
              tips: "",
              useIdCard: "",
              useName: "",
              usePhone: ""
            }
          },
          filters: {},
          onLoad: function() {},
          methods: {
            setDataInfos: function(e) {
              var t = this;
              console.log(e, "参数--------"), e ? (this.useName = e.name, this.useIdCard = e.idCarNo) : setTimeout((function() {
                t.$uni.showToast("识别失败，请重新识别或手动填写")
              }), 500)
            },
            getCardInfo: function() {
              var e = this;
              this.password ? this.verify() ? this.$uniApi.dataRequestNoLoading("post", "product/app/equityCard/getEquityCardByPassword", {
                password: this.password
              }).then((function(t) {
                1 === t.code ? (e.tipsPop = !1, e.cardInfo = t.data, e.changePop = !0) : (e.tips = t.msg, e.tipsPop = !0)
              })) : this.$uni.showToast(this.$util.checkName(this.useName).msg || this.$util.checkPhone(this.usePhone).msg || this.$util.checkId(this.useIdCard).msg) : this.$uni.showToast("请输入兑换码")
            },
            exchangeCard: function() {
              var t = this,
                n = {
                  useIdCard: this.useIdCard,
                  useName: this.useName,
                  usePhone: this.usePhone,
                  password: this.password
                };
              this.$uniApi.dataRequestNoLoading("post", "product/app/equityCard/exchange", n).then((function(n) {
                1 === n.code ? (t.changePop = !1, t.tipsPop = !1, t.$uni.showToast("兑换成功"), n.data.userEquityCardId && uni.redirectTo({
                  url: "/subPage/pages/myeqcard/detail?id=" + n.data.userEquityCardId
                })) : t.$uni.showToast(n.msg)
              }))
            },
            verify: function() {
              return this.$util.checkName(this.useName).code && this.$util.checkPhone(this.usePhone).code && this.$util.checkId(this.useIdCard).code
            },
            bindUser: function() {
              this.verify() ? (this.userPop = !1, this.changePop = !0) : this.$uni.showToast(this.$util.checkName(this.useName).msg || this.$util.checkPhone(this.usePhone).msg || this.$util.checkId(this.useIdCard).msg)
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#fafafa;min-height:100vh;width:100%}.page-box .top-box{background:linear-gradient(180deg,#f7e5c1,#fafafa);padding:60rpx 40rpx 0;width:750rpx}.page-box .top-box .input-box{background:#fff;border-radius:20rpx;padding:20rpx 40rpx 0;width:670rpx}.page-box .top-box .input-box .row-box{align-items:center;border-bottom:1px solid #eee;display:-webkit-flex;display:flex;font-size:30rpx;height:120rpx;line-height:45rpx;width:100%}.page-box .top-box .input-box .row-box .label{color:#333;font-size:28rpx;width:158rpx}.page-box .top-box .input-box .row-box .value{color:#333;font-size:28rpx;width:500rpx}.page-box .top-box .input-box .tips{color:#ff5411;font-size:24rpx;line-height:30rpx;margin-top:19rpx;width:100%}.page-box .btn{background:linear-gradient(23deg,#443a2e,#6f6351);border-radius:50rpx;color:#f2d7b1;font-size:26rpx;height:72rpx;line-height:72rpx;margin-left:40rpx;margin-top:44rpx;text-align:center;width:670rpx}.page-box .change-box{height:876rpx;overflow:hidden;width:620rpx}.page-box .change-box .img-box{background:url('https://eshopfile.zhiyousx.com/2023010709021872132.png');background-size:100% 100%;height:376rpx;margin-top:-5rpx;width:620rpx}.page-box .change-box .img-box image{border-radius:20rpx;box-shadow:45rpx 35rpx 70rpx 0 rgba(0,0,0,.1);height:236rpx;margin:70rpx 0 0 113rpx;width:394rpx}.page-box .change-box .title-box{align-items:center;display:-webkit-flex;display:flex;justify-content:center;margin-top:33rpx}.page-box .change-box .title-box .line{background:#d2b99b;height:1rpx;width:82rpx}.page-box .change-box .title-box text{color:#5b3e19;font-size:32rpx;margin:0 30rpx}.page-box .change-box .tip-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;margin:88rpx 0 64rpx}.page-box .change-box .tip-box .tb1{color:#555;font-size:32rpx;line-height:48rpx}.page-box .change-box .tip-box .tb2{color:#999;font-size:26rpx;line-height:39rpx;margin-top:26rpx}.page-box .change-box .btn-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column}.page-box .change-box .btn-box .btn1{background:linear-gradient(23deg,#443a2e,#6f6351);border-radius:50rpx;color:#f2d7b1;font-size:26rpx;height:72rpx;line-height:72rpx;text-align:center;width:500rpx}.page-box .change-box .btn-box .btn2{color:#777;font-size:26rpx;line-height:30rpx;margin-top:30rpx}.page-box .user-info-box{height:760rpx;overflow:hidden;width:620rpx}.page-box .user-info-box .title-box{align-items:center;display:-webkit-flex;display:flex;justify-content:center;margin-top:60rpx}.page-box .user-info-box .title-box .line{background:#d2b99b;height:1rpx;width:82rpx}.page-box .user-info-box .title-box text{color:#5b3e19;font-size:40rpx;margin:0 30rpx}.page-box .user-info-box .info-box{margin:60rpx 0 64rpx;padding:0 40rpx}.page-box .user-info-box .info-box .row-box{align-items:center;border-bottom:1px solid #eee;display:-webkit-flex;display:flex;font-size:30rpx;height:120rpx;line-height:45rpx;width:100%}.page-box .user-info-box .info-box .row-box .label{color:#333;width:158rpx}.page-box .user-info-box .info-box .row-box .value{color:#333;width:500rpx}.page-box .user-info-box .btn-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column}.page-box .user-info-box .btn-box .btn1{background:linear-gradient(23deg,#443a2e,#6f6351);border-radius:50rpx;color:#f2d7b1;font-size:26rpx;height:72rpx;line-height:72rpx;text-align:center;width:500rpx}.page-box .user-info-box .btn-box .btn2{color:#777;font-size:26rpx;line-height:30rpx;margin-top:30rpx}.page-box .tipsPop-box{align-items:center;background:#fff;border-radius:20rpx;display:-webkit-flex;display:flex;flex-direction:column;height:420rpx;justify-content:space-between;padding:132rpx 0 100rpx;width:620rpx}.page-box .tipsPop-box .t{color:#555;font-size:32rpx;line-height:48rpx}.page-box .tipsPop-box .tips-btn{background:#f0e6da;border-radius:50rpx;color:#5b3e19;font-size:26rpx;height:72rpx;line-height:72rpx;text-align:center;width:500rpx}
</style>
