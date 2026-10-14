<template>
<view class="loginBox">
    <u-verification-code class=" vue-ref" ref="uCode" seconds="60" @change="codeChange()"></u-verification-code>
    <view class="loginForm">
        <view class="" style="margin:20rpx 0;">{{'手机号：'+$root.f0}}</view>
        <u-form class=" vue-ref" ref="uForm" :errorType="errorType" :model="loginForm" :rules="rules" :vueSlots="['default']">
            <u-form-item class="" labelWidth="0" prop="code" :vueSlots="['default','right']">
                <u-input class="" maxlength="6" placeholder="请输入验证码" type="number" :value="loginForm.code" @input="loginForm.code = $event"></u-input>
                <button class="codeStyle" slot="right" @click="getCode($event)">{{codeTips}}</button>
            </u-form-item>
            <u-form-item class="" labelWidth="0" prop="password" :vueSlots="['default']">
                <u-input class="" maxlength="8" :passwordIcon="true" placeholder="新密码" type="password" :value="loginForm.password" @input="loginForm.password = $event"></u-input>
            </u-form-item>
            <button class="loginSub" :disabled="loadingStatus" :loading="loadingStatus" @click="submit($event)">完成</button>
        </u-form>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        data: function() {
          return {
            loadingStatus: !1,
            codeTips: "",
            loginForm: {
              password: "",
              code: ""
            },
            errorType: ["message"],
            rules: {
              code: [{
                required: !0,
                message: "请输入验证码",
                trigger: ["change", "blur"]
              }],
              password: [{
                required: !0,
                message: "请输入密码",
                trigger: ["change", "blur"]
              }, {
                pattern: /^[a-zA-Z0-9]{6,8}$/,
                message: "需由6-8位数字、数字加字母组成",
                trigger: ["change", "blur"]
              }]
            }
          }
        },
        onReady: function() {
          this.$refs.uForm.setRules(this.rules)
        },
        computed: {
          userInfo: function() {
            return this.$store.getters.userInfor
          }
        },
        filters: {
          mobileSubstr: function(e) {
            return e ? e.substr(0, 3) + "****" + e.substr(7) : "-"
          }
        },
        methods: {
          submit: function() {
            var e = this;
            this.$refs.uForm.validate((function(n) {
              if (n) {
                var o = {
                  password: e.loginForm.password,
                  mobilePhone: e.userInfo.mobilePhone
                };
                e.loadingStatus = !0, e.$uniApi.dataRequestNoLoading("POST", "manager/app/v1/member/updatePwdForSmsCode?smsCode=" + e.loginForm.code, o).then((function(n) {
                  e.loadingStatus = !1, 1 === n.code ? (e.$util.showSuccessToast("修改成功"), e.$refs.uForm.resetFields(), setTimeout((function(n) {
                    e.$util.goBack()
                  }), 500)) : e.$uni.showToast(n.msg)
                })).catch((function(n) {
                  e.loadingStatus = !1, console.log(n)
                }))
              }
            }))
          },
          codeChange: function(e) {
            this.codeTips = e
          },
          getCode: function() {
            var e = this;
            if (this.$refs.uCode.canGetCode) {
              var n = {
                  phone: this.userInfo.mobilePhone,
                  time: (new Date).getTime()
                },
                o = this.$eventAnalyse.encrypt(n, "8nXB5qupfE2mwSeZ");
              this.$uniApi.getRequestYesLoading("POST", "manager/app/ignoreAuth/sendSmsCode?type=1&phoneNumber=".concat(this.userInfo.mobilePhone, "&sign=").concat(o), "正在获取验证码").then((function(n) {
                1 === n.code ? (e.$util.showSuccessToast("验证码已发送"), e.$refs.uCode.start()) : e.$uni.showToast("验证码获取失败")
              })).catch((function(n) {
                e.$uni.showToast("验证码获取失败")
              }))
            } else console.log("倒计时结束后再发送")
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background-color:#fff}.title{color:#333;font-size:45rpx;margin:20rpx 0 60rpx;text-align:center}.loginBox{align-items:center;display:-webkit-flex;display:flex;flex-direction:column}.loginBox .logo{background-color:#e5e5e5;border-radius:50%;height:130rpx;margin:65rpx 0;width:130rpx}.loginBox .loginBtn{align-items:center;background-color:#07c160;border-radius:100rpx;color:#fff;display:-webkit-flex;display:flex;height:90rpx;justify-content:center;width:80%}.loginBox .loginBtn .wxIcon{height:60rpx;margin-right:20rpx;width:60rpx}.loginBox .loginForm{padding:0 30rpx;width:100%}.loginBox .loginForm .codeStyle{border:1rpx solid #ff4643;border-radius:25rpx;color:#ff4643;font-size:24rpx;height:50rpx;line-height:50rpx}.loginBox .loginForm .loginText{display:-webkit-flex;display:flex;justify-content:space-between;margin-top:25rpx}.loginBox .loginForm .loginText>text{color:#adadad;font-size:24rpx}.loginBox .loginForm .loginSub{background-image:linear-gradient(90deg,#ff4643,#f72724);border-radius:40rpx;color:#fff;height:80rpx;letter-spacing:10rpx;line-height:80rpx;margin-top:100rpx}.loginBox .loginForm .registerSub{border:1rpx solid #ff4643;border-radius:40rpx;color:#ff4643;height:80rpx;letter-spacing:10rpx;line-height:80rpx;margin-top:30rpx}
</style>
