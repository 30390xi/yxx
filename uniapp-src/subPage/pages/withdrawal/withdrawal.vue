<template>
<view class="">
    <view class="withdrawal">
        <view class="">提现至</view>
        <view class="">
            <image class="" src="../../static/images/weixin.png"></image>微信</view>
    </view>
    <view class="text">提现方式仅支持提现到微信余额，不收取手续费</view>
    <view class="text">{{'*满'+minNum+'元可提现'}}</view>
    <view class="moneybox">
        <view class="tit">提现金额</view>
        <view class="money">
            <text class="">￥</text>
            <input class="payInput" :focus="true" maxlength="8" type="digit" :value="writeMoney" @input="writeMoney = $event; oninput($event)" @blur="$forceUpdate()"></input>
        </view>
        <view class="balance">{{'余额 '+$root.f0+' 元'}}</view>
    </view>
    <button class="btn" :disabled="balanceNum<minNum" @click="showPop(true)">{{balanceNum<minNum?'满'+minNum+'提现':'提 现'}}</button>
    <u-keyboard default class=" vue-ref" ref="uKeyboard" :dotEnabled="false" :mask="true" :maskCloseAble="false" mode="number" :safeAreaInsetBottom="true" :tooltip="false" :value="popShow" :vueSlots="['default']" @change="onChange()" @backspace="onBackspace()" @input="popShow = $event">
        <view class="">
            <view class="u-text-center u-padding-20 money">
                <text class="">{{writeMoney}}</text>
                <text class="u-font-20 u-padding-left-10">元</text>
                <view class="u-padding-10 close" data-flag="false" @click="showPop(false)">
                    <u-icon class="" color="#333333" name="close" size="28"></u-icon>
                </view>
            </view>
            <view class="u-flex u-row-center">
                <u-message-input class="" :disabledKeyboard="true" :dotFill="true" :maxlength="6" mode="box" :value="password" @input="password = $event"></u-message-input>
            </view>
            <view class="u-text-center u-padding-top-10 u-padding-bottom-20 tips">支付键盘</view>
        </view>
    </u-keyboard>
    <u-popup borderRadius="32" class="" :closeable="true" mode="center" :value="setPassWord" :vueSlots="['default']" @input="setPassWord = $event">
        <view class="wenan">
            <view class="text-style">您未设置支付密码，请先设置支付密码</view>
            <button class="" style="height:70rpx;font-size:29rpx;" type="primary" @click="goSet($event)">去设置</button>
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
              minNum: 0,
              maxNum: 0,
              balanceNum: 0,
              writeMoney: "",
              popShow: !1,
              password: "",
              setPassWord: !1
            }
          },
          onLoad: function(n) {
            n.num && (this.balanceNum = Number(n.num)), this.pageLoad()
          },
          onShow: function() {
            uni.getStorageSync("userInfor").extCheck || (this.setPassWord = !0)
          },
          filters: {
            toFixed2: function(n) {
              return n ? Number(n).toFixed(2) : "0.00"
            }
          },
          methods: {
            pageLoad: function() {
              var n = this;
              this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/sysLookupType/customWord?paramKey=WITHDRAW_RULE").then((function(t) {
                1 === t.code && t.data.forEach((function(t) {
                  0 === t.lookupType && (n.minNum = t.lookupValue), 1 === t.lookupType && (n.maxNum = t.lookupValue)
                }))
              }))
            },
            goSet: function() {
              uni.redirectTo({
                url: "/pages/setpassword/setpassword"
              })
            },
            onChange: function(n) {
              this.password.length < 6 && (this.password += n), this.password.length >= 6 && this.validPayPwd()
            },
            onBackspace: function(n) {
              this.password.length > 0 && (this.password = this.password.substring(0, this.password.length - 1))
            },
            validPayPwd: function() {
              var n = this;
              this.$uniApi.getRequestYesLoading("POST", "manager/app/v1/member/validPayPwd?password=".concat(this.password), "验证中").then((function(t) {
                1 === t.code ? n.getOpenId() : n.$uni.showToast(t.msg)
              }))
            },
            getOpenId: function() {
              var t = this;
              console.log("获取失败1"), n.login({
                success: function(n) {
                  t.$uniApi.getRequestYesLoading("GET", "manager/app/v1/wxPopular/getSessionKeyPro/".concat(n.code), "获取中").then((function(n) {
                    1 === n.code ? (console.log(n.data.openid, "获取中"), t.goPay(n.data.openid)) : (console.log(n, "获取失败2"), t.$uni.showToast(n.msg))
                  })).catch((function(n) {
                    console.log(n, "获取失败3"), t.$uni.showToast(n.msg)
                  }))
                }
              })
            },
            goPay: function(n) {
              var t = this,
                e = {
                  target: 0,
                  way: 1,
                  amount: this.writeMoney,
                  openId: n
                };
              this.$uniApi.dataRequestYesLoading("POST", "manager/app/v1/withdrawRecord/memberWithdraw", e, "请等待").then((function(n) {
                1 === n.code ? (t.$util.showSuccessToast("提现成功,请留意余额"), t.writeMoney = "", t.popShow = !1, t.$util.goBack()) : t.$uni.showToast(n.msg)
              })).catch((function(n) {
                console.log(res, "请等待2"), t.$uni.showToast(n.msg)
              }))
            },
            showPop: function() {
              var n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              if (!this.writeMoney) return this.$uni.showToast("请输入提现金额");
              this.minNum <= this.writeMoney && this.writeMoney <= this.balanceNum ? (this.password = "", this.popShow = n) : this.$uni.showToast("最低提现不能少于" + this.minNum + "元")
            },
            oninput: function(n) {
              var t = this;
              this.$nextTick((function() {
                var e = n.detail.value.toString();
                0 == e.indexOf(".") && (e = "0" + e), (e = (e = (e = (e = e.replace(/[^\d.]/g, "")).replace(/\.{2,}/g, ".")).replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")).replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3")).indexOf(".") < 0 && "" != e && (e = parseFloat(e)), e > t.balanceNum && (e = t.balanceNum), t.writeMoney = e
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.money{font-size:80rpx;position:relative}.money>text{color:#ff4643;font-size:80rpx}.money .close{font-size:28rpx;line-height:28rpx;position:absolute;right:20rpx;top:20rpx}.wenan{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;padding:60rpx 0 30rpx;width:600rpx}.wenan .text-style{font-size:30rpx;margin-bottom:46rpx}.tips{color:#909399}.withdrawal{background-color:#fff;height:92rpx;justify-content:space-between;margin-top:20rpx;padding:0 30rpx;width:100%}.withdrawal view:nth-child(2),.withdrawal{align-items:center;display:-webkit-flex;display:flex}.withdrawal image{height:40rpx;margin-right:10rpx;width:44rpx}.text{color:#878787;font-size:24rpx;margin-bottom:40rpx;margin-top:23rpx;padding-left:30rpx}.moneybox{background-color:#fff;display:-webkit-flex;display:flex;flex-direction:column;height:258rpx;justify-content:space-around;padding-left:30rpx;width:100%}.moneybox .tit{color:#878787;font-size:28rpx}.moneybox .money{align-items:center;display:-webkit-flex;display:flex}.moneybox .money input{display:block;font-size:60rpx;height:68rpx}.moneybox .money text{color:#333;font-size:68rpx}.moneybox .balance{color:#a5a5a5;font-size:26rpx}.btn{background-color:#cfcfcf;background-color:#6fd271;border-radius:40rpx;color:#fff;font-family:PingFang-SC-Bold;font-size:34rpx;height:80rpx;line-height:80rpx;margin:60rpx auto 0;text-align:center;width:690rpx}.btn[disabled]{background:#6fd290;color:#fff}
</style>
