<template>
<view :class="['u-wrap','',jumpObj.pathType==2?'dp':'',jumpObj.pathType==3?'smq':'']" :hidden="!isLoginShow">
    <uni-navbar class="" :shadow="false" type="transparent" :vueSlots="['default']">
        <view class="reg" slot="right" v-if="jumpObj.pathType==0" @click="goRegister($event)">注册</view>
    </uni-navbar>
    <image mode class="chansi" src="https://eshopfile.zhiyousx.com/2022110110525948264.png" v-if="jumpObj.pathType==1"></image>
    <block v-else>
        <image mode class="dp-logo" src="https://eshopfile.zhiyousx.com/2024082015423390579.png" v-if="jumpObj.pathType==2"></image>
        <block v-else>
            <image mode class="smq-logo" src="https://eshopfile.zhiyousx.com/2024082716112414614.png" v-if="jumpObj.pathType==3"></image>
            <image mode class="logo" src="https://eshopfile.zhiyousx.com/2021080909291540081.png" v-else></image>
        </block>
    </block>
    <button :class="['wx-box','',jumpObj.pathType==2?'dpBtn':'',jumpObj.pathType==3||jumpObj.pathType==1?'smqBtn':'']" :disabled="loadingStatus" :loading="loadingStatus" v-if="hasAccount" @click="defLogin($event)">
        <view class="">快捷登录</view>
    </button>
    <button :class="['wx-box','',jumpObj.pathType==2?'dpBtn':'',jumpObj.pathType==3||jumpObj.pathType==1?'smqBtn':'']" :disabled="loadingStatus" :loading="loadingStatus" openType="getPhoneNumber" v-else @getphonenumber="decryptPhoneNumber($event)">
        <view class="">快捷登录</view>
    </button>
    <view :class="['phone','',jumpObj.pathType==2?'dpPh':'',jumpObj.pathType==3?'smqPh':'']" v-if="type!='wx'" @click="jumpPhoneLogin($event)">手机号登录</view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              type: "",
              jumpObj: {
                jumpPage: "",
                templePage: "",
                authCode: "",
                pathType: 0
              },
              loadingStatus: !1,
              hideNum: 10,
              isLoginShow: !1,
              hasAccount: !1
            }
          },
          onLoad: function(t) {
            var a = this,
              o = getCurrentPages(); - 1 == o[o.length - 2].route.indexOf("wxLogin") ? (this.isLoginShow = !0, this._login401 = t.type || "", this._sessionKey = "", this.fromPage = t.from || "", this.yxid = t.yxid || "", this.type = t.type || "", this.weburl = t.url || "", 1 == t.loseToken && (this.$store.dispatch("LOSE_TOKEN", "").then((function(e) {
              console.log("已抹除本地用户信息")
            })), this.reLogin()), this.jumpObj = {
              templePage: getApp().globalData.templePage || "",
              jumpPage: getApp().globalData.jumpPage || "",
              pathType: getApp().globalData.pathType || 0
            }, getApp().globalData.templePage = "", getApp().globalData.jumpPage = "", getApp().globalData.pathType = 0, e.login({
              success: function(e) {
                a.$uniApi.dataRequestNoLoading("POST", "manager/app/ignoreAuth/getMemberByCode", {
                  code: e.code
                }).then((function(e) {
                  1 === e.code && (a.hasAccount = !0)
                }))
              }
            })) : this.$util.prevPage()
          },
          methods: {
            getPhoneNumber: function() {
              var t = this,
                a = this;
              this.loadingStatus = !0, my.getPhoneNumber({
                success: function(n) {
                  var i = {
                    authCode: a.authCode,
                    phoneText: n.response
                  };
                  a.$uniApi.dataRequestYesLoading("POST", "manager/app/ignoreAuth/zfb/authLogin", i, "请求中").then((function(n) {
                    if (1 === n.code) {
                      t.loadingStatus = !1;
                      var i = "bearer " + n.data.token;
                      uni.setStorageSync("token", i), t.$store.dispatch("setUserInfo", i).then((function(n) {
                        if (1 === n.code)
                          if (console.log(t.fromPage), t.fromPage) {
                            var i = getApp().globalData.requestUrl.replace("api/", "");
                            if ("yxh5" == t.fromPage) {
                              var u = !1; - 1 == i.indexOf("eshopapi.zhiyousx.com") && -1 == i.indexOf("eshop.zhiyousx.com") && (u = !0);
                              var c = u ? "https://ysxdev.zhiyousx.com/yxdevH5/" : "https://yxh5.zhiyousx.com/yxH5/";
                              uni.redirectTo({
                                url: "../webpage/webpage?url=".concat(c, "show*id+").concat(t.yxid)
                              })
                            } else "web" == t.fromPage ? uni.reLaunch({
                              url: "../webpage/webpage?url=".concat(a.weburl)
                            }) : "wallGuide" == t.fromPage ? t.$util.prevPage() : uni.redirectTo({
                              url: "../webpage/webpage?url=".concat(i, "dsmall-admin-ui/h5/").concat(a.fromPage, ".html")
                            })
                          } else {
                            var r = t.jumpObj.jumpPage,
                              s = t.jumpObj.templePage,
                              g = uni.getStorageSync("userInfor").chansiOpenId;
                            if (s && 1 != s && !g) return void uni.redirectTo({
                              url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(s)
                            });
                            if (r) uni.redirectTo({
                              url: r
                            });
                            else getCurrentPages().length < 2 ? uni.switchTab({
                              url: "../index/index"
                            }) : t.$util.prevPage()
                          }
                        else t.$uni.showToast(n.msg)
                      }))
                    } else t.$uni.showToast(n.msg)
                  })).catch((function(e) {
                    t.$uni.showToast(e.msg)
                  }))
                },
                fail: function(e) {
                  t.loadingStatus = !1, t.$uni.showToast(e.msg)
                }
              })
            },
            handleAuthError: function(e) {
              my.alert({
                title: "用户拒绝授权",
                content: JSON.stringify(e.detail)
              })
            },
            defLogin: function() {
              var t = this;
              this.loadingStatus = !0, uni.showLoading({
                title: "登录中",
                mask: !0
              }), e.login({
                success: function(a) {
                  t.$store.dispatch("WechatLoginByCode", {
                    code: a.code
                  }).then((function(a) {
                    t.loadingStatus = !1, uni.hideLoading(), 1 === a.code ? (t.$store.state.islogin = !1, t.loginHandle()) : t.$uni.showToast(a.msg)
                  })).catch((function(a) {
                    t.loadingStatus = !1, uni.hideLoading()
                  }))
                }
              })
            },
            decryptPhoneNumber: function(t) {
              var a = this;
              "getPhoneNumber:fail user deny" != t.detail.errMsg && (this.loadingStatus = !0, uni.showLoading({
                title: "登录中",
                mask: !0
              }), e.login({
                success: function(o) {
                  a.$store.dispatch("LoginByPhone", {
                    code: o.code,
                    iv: t.detail.iv,
                    encryptedData: t.detail.encryptedData
                  }).then((function(t) {
                    uni.hideLoading(), a.loadingStatus = !1, 1 === t.code ? (a.$store.state.islogin = !1, a.loginHandle()) : a.$uni.showToast(t.msg)
                  })).catch((function(t) {
                    a.loadingStatus = !1, uni.hideLoading()
                  }))
                }
              }))
            },
            loginHandle: function() {
              if (this.fromPage) {
                var t = getApp().globalData.requestUrl.replace("api/", "");
                if ("yxh5" == this.fromPage) {
                  var a = !1; - 1 == t.indexOf("eshopapi.zhiyousx.com") && -1 == t.indexOf("eshop.zhiyousx.com") && (a = !0);
                  var n = a ? "https://ysxdev.zhiyousx.com/yxdevH5/" : "https://yxh5.zhiyousx.com/yxH5/";
                  uni.redirectTo({
                    url: "../webpage/webpage?url=".concat(n, "show*id+").concat(this.yxid)
                  })
                } else "web" == this.fromPage ? uni.reLaunch({
                  url: "../webpage/webpage?url=".concat(this.weburl)
                }) : "wallGuide" == this.fromPage ? this.$util.prevPage() : uni.redirectTo({
                  url: "../webpage/webpage?url=".concat(t, "dsmall-admin-ui/h5/").concat(this.fromPage, ".html")
                })
              } else {
                var i = this.jumpObj.jumpPage,
                  u = this.jumpObj.templePage,
                  c = uni.getStorageSync("userInfor").chansiOpenId;
                if (u && 1 != u && !c) return void uni.redirectTo({
                  url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(u)
                });
                if (i) uni.redirectTo({
                  url: i
                });
                else getCurrentPages().length < 2 ? uni.switchTab({
                  url: "../index/index"
                }) : this.$util.prevPage()
              }
            },
            jumpPhoneLogin: function() {
              this.fromPage ? (uni.redirectTo({
                url: "../login/login?type=".concat(this._login401, "&from=").concat(this.fromPage, "&yxid=").concat(this.yxid, "&url=").concat(this.weburl, "&templePage=").concat(encodeURIComponent(this.jumpObj.templePage), "&jumpPage=").concat(encodeURIComponent(this.jumpObj.jumpPage), "&pathType=").concat(encodeURIComponent(this.jumpObj.pathType))
              }), this.fromPage = "") : uni.redirectTo({
                url: "../login/login?type=".concat(this._login401, "&templePage=").concat(encodeURIComponent(this.jumpObj.templePage), "&jumpPage=").concat(encodeURIComponent(this.jumpObj.jumpPage), "&pathType=").concat(encodeURIComponent(this.jumpObj.pathType))
              })
            },
            reLogin: function() {
              var t = this;
              e.login({
                success: function(e) {
                  t.$uniApi.dataRequestNoLoading("POST", "manager/app/ignoreAuth/getMemberByCode", {
                    code: e.code
                  }).then((function(e) {
                    1 === e.code && (t.hasAccount = !0)
                  }))
                }
              })
            },
            goRegister: function() {
              this.$navigateTo({
                url: "../register/register"
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.u-wrap{background-color:#fff;height:calc(100vh);line-height:1;overflow-y:auto;padding-top:140rpx}.dp{background-image:url('https://eshopfile.zhiyousx.com/2024081517013199680.png')}.dp,.smq{background-repeat:no-repeat repeat-y;background-size:auto 100%}.smq{background-image:url('https://eshopfile.zhiyousx.com/2024082110435668859.png')}.reg{color:#2a2a2a;font-size:26rpx;padding-right:40rpx}.logo{height:160rpx}.chansi,.logo{background-size:100% 100%;display:block;margin:160rpx auto 140rpx;width:160rpx}.chansi{height:176rpx}.dp-logo{display:block;height:412rpx;margin:90rpx auto 60rpx;width:369rpx}.smq-logo{display:block;height:232rpx;margin:120rpx auto 60rpx;width:262rpx}.wx-box{align-items:center;background:#00a87c;border-radius:45rpx;display:-webkit-flex;display:flex;height:90rpx;justify-content:center;margin:0 auto 40rpx;width:670rpx}.wx-box image{height:44rpx;margin-right:15rpx;width:54rpx}.wx-box view{color:#fefefe;font-size:34rpx}.dpBtn{background:linear-gradient(270deg,#c67b3d,#f9d390);border-radius:40rpx;box-shadow:inset -2rpx 2rpx 2rpx 0rpx rgba(255,240,203,.2),inset 0rpx -6rpx 13rpx 0rpx rgba(47,45,41,.2);height:90rpx;width:650rpx}.smqBtn{background:linear-gradient(270deg,#efd4a0,#c2a075);border-radius:40rpx;box-shadow:inset 0rpx -8rpx 8rpx 0rpx rgba(0,0,0,.15),inset 0rpx 8rpx 8rpx 0rpx hsla(0,0%,93%,.25);height:90rpx;width:650rpx}.phone{align-items:center;border:1px solid #ddd;border-radius:45rpx;display:-webkit-flex;display:flex;height:90rpx;justify-content:center;margin:0 auto 40rpx;width:670rpx}.dpPh{border:2rpx solid rgba(226,171,95,.4);border-radius:40rpx}.dpPh,.smqPh{background:rgba(226,171,95,.2);box-shadow:0rpx 4rpx 8rpx 0rpx rgba(0,0,0,.05);color:#4e200a;font-size:34rpx;height:90rpx;width:650rpx}.smqPh{border:2rpx solid hsla(34,39%,61%,.4);border-radius:40rpx}
</style>
