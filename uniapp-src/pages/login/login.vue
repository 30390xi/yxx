<template>
<view :class="['loginBox','',jumpObj.pathType==2?'dp':'',jumpObj.pathType==3?'smq':'']">
    <uni-navbar bgColor="#ffffff" class="" :home="true" title="手机号登录" type="transparent"></uni-navbar>
    <view class="chansi" v-if="jumpObj.pathType==1">
        <image class="" src="https://eshopfile.zhiyousx.com/2022110110525948264.png"></image>
    </view>
    <block v-else>
        <view class="dp-logo" v-if="jumpObj.pathType==2">
            <image class="" src="https://eshopfile.zhiyousx.com/2024081517030136282.png"></image>
        </view>
        <block v-else>
            <view class="smq-logo" v-if="jumpObj.pathType==3">
                <image class="" src="https://eshopfile.zhiyousx.com/2024082716112414614.png"></image>
            </view>
            <view class="logo" v-else>
                <image class="" src="https://eshopfile.zhiyousx.com/2021080909282156489.jpg"></image>
            </view>
        </block>
    </block>
    <u-verification-code class=" vue-ref" ref="uCode" seconds="60" @change="codeChange()"></u-verification-code>
    <view class="loginForm">
        <u-form class=" vue-ref" ref="uForm" :errorType="errorType" :model="loginForm" :rules="rules" :vueSlots="['default']">
            <u-form-item class="" labelWidth="0" prop="username" :vueSlots="['default']">
                <u-input class="" maxlength="11" placeholder="请输入手机号" type="number" :value="loginForm.username" @input="loginForm.username = $event"></u-input>
            </u-form-item>
            <u-form-item class="" labelWidth="0" prop="password" :vueSlots="['default']" v-if="loginType===0">
                <u-input class="" maxlength="8" :passwordIcon="true" placeholder="请输入密码" type="password" :value="loginForm.password" @input="loginForm.password = $event"></u-input>
            </u-form-item>
            <u-form-item class="" labelWidth="0" prop="code" :vueSlots="['default','right']" v-else>
                <u-input class="" maxlength="6" placeholder="请输入验证码" type="number" :value="loginForm.code" @input="loginForm.code = $event"></u-input>
                <button class="codeStyle" slot="right" @click="getCode($event)">{{codeTips}}</button>
            </u-form-item>
            <view class="loginText">
                <text class=""></text>
                <text class="" @click="typeBtn($event)">{{loginType===0?'短信验证码登录':'账号密码登录'}}</text>
            </view>
            <button :class="['loginSub','',jumpObj.pathType==2?'dpBtn':'',jumpObj.pathType==3||jumpObj.pathType==1?'smqBtn':'']" :disabled="loadingStatus" :loading="loadingStatus" @click="submit($event)">登录</button>
            <button :class="['registerSub','',jumpObj.pathType==2?'dpPh':'',jumpObj.pathType==3?'smqPh':'']" v-if="jumpObj.pathType==0" @click="goRegister($event)">注册</button>
            <view class="auth" @click="setCheck($event)">
                <view class="checkedNo" v-if="!checked"></view>
                <u-icon class="" color="#ff4643" name="checkmark-circle" size="34" v-else></u-icon>
                <view class="" style="margin-left:5rpx;">
                    <text class="">我已阅读并同意</text>
                    <text class="" style="color:#FF5411;" @click.stop="goServer($event)">《服务条款》</text>
                    <text class="">及</text>
                    <text class="" style="color:#FF5411;" @click.stop="goServer1($event)">《隐私协议》</text>
                </view>
            </view>
        </u-form>
    </view>
    <view class="forgot" @click="gofind($event)">忘记密码？</view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            data: function() {
              return {
                login401: "200",
                loginType: 1,
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
                    validator: function(e, t, n) {
                      return (0, a.validatePhone)(t)
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
                jumpObj: {
                  jumpPage: "",
                  templePage: "",
                  pathType: 0
                },
                checked: !1
              }
            },
            onLoad: function(t) {
              var n = this;
              t.type && (this.login401 = t.type), this.fromPage = t.from || "", this.weburl = t.url || "", this.yxid = t.yxid || "", this.jumpObj = {
                templePage: decodeURIComponent(t.templePage) || "",
                jumpPage: decodeURIComponent(t.jumpPage) || "",
                pathType: decodeURIComponent(t.pathType) || 0
              }, e.login({
                success: function(t) {
                  n.$uniApi.getRequestNoLoading("GET", "manager/app/v1/wxPopular/getSessionKeyPro/".concat(t.code)).then((function(t) {
                    1 === t.code ? (uni.setStorageSync("wxopenid", t.data.openid), uni.setStorageSync("unionid", t.data.unionid)) : n.$uni.showToast(t.msg)
                  })).catch((function(e) {
                    n.$uni.showToast(e.msg)
                  }))
                }
              })
            },
            onReady: function() {
              this.$refs.uForm.setRules(this.rules)
            },
            methods: {
              setCheck: function() {
                this.checked = !this.checked
              },
              submit: function() {
                var t = this;
                this.checked ? this.$refs.uForm.validate((function(n) {
                  var a = t;
                  if (n) {
                    var i, s = {
                      username: t.loginForm.username
                    };
                    0 === t.loginType ? (s.password = t.loginForm.password, i = "LoginByUsername") : (s.code = t.loginForm.code, i = "LoginByCode"), t.loadingStatus = !0, t.$store.dispatch(i, s).then((function(n) {
                      t.loadingStatus = !1, 1 === n.code ? (t.$store.state.islogin = !1, t.$util.showSuccessToast("已登录"), t.$refs.uForm.resetFields(), setTimeout((function(n) {
                        if (t.fromPage) {
                          var i = getApp().globalData.requestUrl.replace("api/", "");
                          if ("yxh5" == t.fromPage) {
                            var s = !1; - 1 == i.indexOf("eshopapi.zhiyousx.com") && -1 == i.indexOf("eshop.zhiyousx.com") && (s = !0);
                            var r = s ? "https://ysxdev.zhiyousx.com/yxdevH5/" : "https://yxh5.zhiyousx.com/yxH5/";
                            uni.redirectTo({
                              url: "../webpage/webpage?url=".concat(r, "show*id+").concat(t.yxid)
                            })
                          } else "web" == t.fromPage ? uni.reLaunch({
                            url: "../webpage/webpage?url=".concat(a.weburl)
                          }) : uni.redirectTo({
                            url: "../webpage/webpage?url=".concat(i, "dsmall-admin-ui/h5/").concat(a.fromPage, ".html")
                          });
                          t.fromPage = ""
                        } else {
                          var u = t.jumpObj.jumpPage,
                            c = t.jumpObj.templePage,
                            d = uni.getStorageSync("userInfor").chansiOpenId;
                          if (c && 1 != c && !d) return void uni.redirectTo({
                            url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(c)
                          });
                          if (u) uni.redirectTo({
                            url: u
                          });
                          else getCurrentPages().length < 2 ? uni.switchTab({
                            url: "../index/index"
                          }) : t.$util.prevPage()
                        }
                        e.removeStorage({
                          key: "wx_openid"
                        })
                      }), 500)) : t.$uni.showToast(n.msg)
                    })).catch((function(e) {
                      t.loadingStatus = !1, t.$uni.showToast(e.data.msg)
                    }))
                  }
                })) : this.$uni.showToast("请先阅读并同意服务条款和隐私协议")
              },
              codeChange: function(e) {
                this.codeTips = e
              },
              getCode: function() {
                var e = this;
                if (this.$refs.uCode.canGetCode)
                  if ((0, a.validatePhone)(this.loginForm.username)) {
                    var t = {
                        phone: this.loginForm.username,
                        time: (new Date).getTime()
                      },
                      n = this.$eventAnalyse.encrypt(t, "8nXB5qupfE2mwSeZ");
                    this.$uniApi.getRequestYesLoading("POST", "manager/app/ignoreAuth/sendSmsCode?type=1&phoneNumber=".concat(this.loginForm.username, "&sign=").concat(n), "正在获取验证码").then((function(t) {
                      1 === t.code ? (e.$util.showSuccessToast("验证码已发送"), e.$refs.uCode.start()) : e.$uni.showToast("验证码获取失败")
                    })).catch((function(t) {
                      e.$uni.showToast("验证码获取失败")
                    }))
                  } else this.$uni.showToast("请输入正确手机号");
                else console.log("倒计时结束后再发送")
              },
              typeBtn: function() {
                0 === this.loginType ? this.loginType = 1 : this.loginType = 0, this.$refs.uForm.resetFields()
              },
              goRegister: function() {
                this.checked ? this.$navigateTo({
                  url: "../register/register?pathType=" + this.jumpObj.pathType
                }) : this.$uni.showToast("请先阅读并同意服务条款和隐私协议")
              },
              gofind: function() {
                this.$navigateTo({
                  url: "/subPack/pages/findpassword/findpassword?pathType=" + this.jumpObj.pathType
                })
              },
              goServer: function() {
                this.$navigateTo({
                  url: "../termsservice/termsservice"
                })
              },
              goServer1: function() {
                this.$navigateTo({
                  url: "/subPack/pages/protocol/protocol"
                })
              },
              bindGetUserInfo: function(t) {
                var n = this;
                if (t.detail.userInfo) {
                  var a = t.detail.userInfo,
                    i = a.nickName,
                    s = a.avatarUrl;
                  e.login({
                    provider: "weixin",
                    success: function(t) {
                      var a = requestUrl + "weChat/oauth";
                      n.$util.showLoadingToast("加载中"), e.request({
                        url: a,
                        method: "POST",
                        header: {
                          "content-type": "application/json"
                        },
                        data: {
                          jsCode: t.code,
                          nickname: i,
                          picUrl: s,
                          grantType: "authorization_code"
                        },
                        success: function(e) {
                          if (uni.hideLoading(), 1 === e.data.code) {
                            var t = "bearer " + e.data.data.access_token;
                            uni.setStorageSync("token", t), uni.setStorageSync("refreshToken", e.data.data.refresh_token), uni.setStorageSync("nickName", i), uni.setStorageSync("nickAvatar", s), uni.setStorageSync("openId", e.data.data.openId), uni.setStorageSync("userId", e.data.data.userId), uni.setStorageSync("overTime", e.data.data.overTime), util.showSuccessToast("登录成功", (function(e) {
                              uni.navigateBack({
                                delta: 1
                              })
                            }))
                          } else uni.showToast(e.data.msg)
                        }
                      })
                    }
                  })
                } else this.$uni.showToast("允许授权后才能微信登录哟~")
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.loginBox{align-items:center;background:#fff;display:-webkit-flex;display:flex;flex-direction:column;height:100vh;padding-top:140rpx}.loginBox .logo{height:180rpx;margin:65rpx 0;width:180rpx}.loginBox .logo image{border-radius:100%;height:100%;width:100%}.loginBox .chansi{height:198rpx;margin:65rpx 0;width:180rpx}.loginBox .chansi image{border-radius:100%;height:100%;width:100%}.loginBox .dp-logo{height:422rpx;margin:90rpx auto 60rpx;width:368rpx}.loginBox .dp-logo image{border-radius:100%;height:100%;width:100%}.loginBox .smq-logo{height:232rpx;margin:120rpx auto 60rpx;width:262rpx}.loginBox .smq-logo image{border-radius:100%;height:100%;width:100%}.loginBox .loginBtn{align-items:center;background-color:#07c160;border-radius:100rpx;color:#fff;display:-webkit-flex;display:flex;height:90rpx;justify-content:center;width:80%}.loginBox .loginBtn .wxIcon{height:60rpx;margin-right:20rpx;width:60rpx}.loginBox .loginForm{width:85%}.loginBox .loginForm .codeStyle{background:none;border:none;border-radius:25rpx;color:#ff4643;font-size:26rpx;height:50rpx;line-height:50rpx}.loginBox .loginForm .loginText{display:-webkit-flex;display:flex;justify-content:space-between;margin-top:25rpx}.loginBox .loginForm .loginText>text{color:#adadad;font-size:24rpx}.loginBox .loginForm .loginSub{background:linear-gradient(52deg,#fc4a9e,#ff5411);border-radius:40rpx;color:#fff;height:80rpx;letter-spacing:10rpx;line-height:80rpx;margin-top:80rpx}.loginBox .loginForm .registerSub{background:none;border:1rpx solid #ff4643;border-radius:40rpx;color:#ff4643;height:80rpx;letter-spacing:10rpx;line-height:80rpx;margin-top:30rpx}.loginBox .loginForm .dpBtn{background:linear-gradient(270deg,#c67b3d,#f9d390);border-radius:40rpx;box-shadow:inset -2rpx 2rpx 2rpx 0rpx rgba(255,240,203,.2),inset 0rpx -6rpx 13rpx 0rpx rgba(47,45,41,.2)}.loginBox .loginForm .dpPh{background:rgba(226,171,95,.2);border:2rpx solid rgba(226,171,95,.4);border-radius:40rpx;box-shadow:0rpx 4rpx 8rpx 0rpx rgba(0,0,0,.05);color:#4e200a;font-size:34rpx}.loginBox .loginForm .smqBtn{background:linear-gradient(270deg,#efd4a0,#c2a075);border-radius:40rpx;box-shadow:inset 0rpx -8rpx 8rpx 0rpx rgba(0,0,0,.15),inset 0rpx 8rpx 8rpx 0rpx hsla(0,0%,93%,.25)}.loginBox .loginForm .smqPh{background:rgba(226,171,95,.2);border:2rpx solid hsla(34,39%,61%,.4);border-radius:40rpx;box-shadow:0rpx 4rpx 8rpx 0rpx rgba(0,0,0,.05);color:#4e200a;font-size:34rpx}.loginBox .loginForm .auth{align-items:center;display:-webkit-flex;display:flex;height:45rpx;margin-top:40rpx}.loginBox .loginForm .auth .checkedNo{border:1px solid #828282;border-radius:50%;height:28rpx;width:28rpx}.loginBox .loginForm .auth text{color:#828282;font-size:24rpx}.dp{background-image:url('https://eshopfile.zhiyousx.com/2024081517013199680.png')}.dp,.smq{background-repeat:no-repeat repeat-y;background-size:auto 100%}.smq{background-image:url('https://eshopfile.zhiyousx.com/2024082110435668859.png')}.forgot{color:#adadad;margin-top:150rpx}
</style>
