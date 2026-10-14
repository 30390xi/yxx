<template>
<view :class="['loginBox','',pathType==2?'dp':'']">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="title">手机号注册</view>
    <u-verification-code class=" vue-ref" ref="uCode" seconds="60" @change="codeChange()"></u-verification-code>
    <view class="loginForm">
        <u-form class=" vue-ref" ref="uForm" :errorType="errorType" :model="loginForm" :rules="rules" :vueSlots="['default']">
            <u-form-item class="" labelWidth="0" prop="username" :vueSlots="['default']">
                <u-input class="" maxlength="11" placeholder="请输入手机号" type="number" :value="loginForm.username" @input="loginForm.username = $event"></u-input>
            </u-form-item>
            <u-form-item class="" labelWidth="0" prop="code" :vueSlots="['default','right']">
                <u-input class="" maxlength="6" placeholder="请输入验证码" type="number" :value="loginForm.code" @input="loginForm.code = $event"></u-input>
                <button class="codeStyle" slot="right" @click="getCode($event)">{{codeTips}}</button>
            </u-form-item>
            <u-form-item class="" labelWidth="0" prop="password" :vueSlots="['default']">
                <u-input class="" maxlength="8" :passwordIcon="true" placeholder="请设置密码" type="password" :value="loginForm.password" @input="loginForm.password = $event"></u-input>
            </u-form-item>
            <button :class="['loginSub','',pathType==2?'dpBtn':'']" :disabled="loadingStatus" :loading="loadingStatus" @click="submit($event)">注册</button>
            <view class="loginText">
                <text class=""></text>
            </view>
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
                username: "",
                password: "",
                code: ""
              },
              errorType: ["message"],
              rules: {
                username: [{
                  required: !0,
                  message: "请输入手机号"
                }, {
                  validator: function(e, n, t) {
                    return (0, o.validatePhone)(n)
                  },
                  message: "手机号码不正确"
                }],
                code: [{
                  required: !0,
                  message: "请输入验证码"
                }],
                password: [{
                  required: !0,
                  message: "请输入密码"
                }, {
                  pattern: /^[a-zA-Z0-9]{6,8}$/,
                  message: "需由6-8位数字、数字加字母组成"
                }]
              },
              pathType: 0
            }
          },
          onLoad: function(e) {
            this.pathType = e.pathType || 0
          },
          onReady: function() {
            this.$refs.uForm.setRules(this.rules)
          },
          computed: {
            distributorId: function() {
              return this.$store.getters.distributorId
            }
          },
          methods: {
            submit: function() {
              var e = this;
              this.$refs.uForm.validate((function(n) {
                var t;
                n && (e.loadingStatus = !0, t = e.distributorId ? "manager/app/ignoreAuth/register/".concat(e.loginForm.username, "/").concat(e.loginForm.password, "/").concat(e.loginForm.code, "?referrer=").concat(e.distributorId) : "manager/app/ignoreAuth/register/".concat(e.loginForm.username, "/").concat(e.loginForm.password, "/").concat(e.loginForm.code), e.$uniApi.getRequestNoLoading("POST", t).then((function(n) {
                  e.loadingStatus = !1, 1 === n.code ? (e.$util.showSuccessToast("注册成功"), e.$refs.uForm.resetFields(), setTimeout((function(n) {
                    e.$util.goBack()
                  }), 1e3)) : e.$uni.showToast(n.msg)
                })).catch((function(n) {
                  e.loadingStatus = !1, console.log(n)
                })))
              }))
            },
            codeChange: function(e) {
              this.codeTips = e
            },
            getCode: function() {
              var e = this;
              if (this.$refs.uCode.canGetCode)
                if ((0, o.validatePhone)(this.loginForm.username)) {
                  var n = {
                      phone: this.loginForm.username,
                      time: (new Date).getTime()
                    },
                    t = this.$eventAnalyse.encrypt(n, "8nXB5qupfE2mwSeZ");
                  this.$uniApi.getRequestYesLoading("POST", "manager/app/ignoreAuth/sendSmsCode?type=1&phoneNumber=".concat(this.loginForm.username, "&sign=").concat(t), "正在获取验证码").then((function(n) {
                    1 === n.code ? (e.$util.showSuccessToast("验证码已发送"), e.$refs.uCode.start()) : e.$uni.showToast("验证码获取失败")
                  })).catch((function(n) {
                    e.$uni.showToast("验证码获取失败")
                  }))
                } else this.$uni.showToast("请输入正确手机号");
              else console.log("倒计时结束后再发送")
            },
            goServer: function() {
              this.$navigateTo({
                url: "../termsservice/termsservice"
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.title{color:#333;font-size:45rpx;margin:20rpx 0 60rpx;text-align:center}.loginBox{align-items:center;background:#fff;display:-webkit-flex;display:flex;flex-direction:column;height:100vh;padding-top:140rpx}.loginBox .logo{background-color:#e5e5e5;border-radius:50%;height:130rpx;margin:65rpx 0;width:130rpx}.loginBox .loginBtn{align-items:center;background-color:#07c160;border-radius:100rpx;color:#fff;display:-webkit-flex;display:flex;height:90rpx;justify-content:center;width:80%}.loginBox .loginBtn .wxIcon{height:60rpx;margin-right:20rpx;width:60rpx}.loginBox .loginForm{width:85%}.loginBox .loginForm .codeStyle{background:none;border-radius:25rpx;color:#ff4643;font-size:24rpx;height:50rpx;line-height:50rpx}.loginBox .loginForm .loginText{display:-webkit-flex;display:flex;justify-content:space-between;margin-top:25rpx}.loginBox .loginForm .loginText>text{color:#adadad;font-size:24rpx}.loginBox .loginForm .loginSub{background:linear-gradient(52deg,#fc4a9e,#ff5411);border-radius:40rpx;color:#fff;height:80rpx;letter-spacing:10rpx;line-height:80rpx;margin-top:100rpx}.loginBox .loginForm .registerSub{border:1rpx solid #ff4643;border-radius:40rpx;color:#ff4643;height:80rpx;letter-spacing:10rpx;line-height:80rpx;margin-top:30rpx}.loginBox .loginForm .dpBtn{background:linear-gradient(270deg,#c67b3d,#f9d390);border-radius:40rpx;box-shadow:inset -2rpx 2rpx 2rpx 0rpx rgba(255,240,203,.2),inset 0rpx -6rpx 13rpx 0rpx rgba(47,45,41,.2)}.dp{background-image:url('https://eshopfile.zhiyousx.com/2024081517013199680.png');background-repeat:no-repeat repeat-y;background-size:auto 100%}
</style>
