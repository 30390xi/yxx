<template>
<view class="page-box">
    <view class="top-box">
        <view class="top">
            <view class="line"></view>
            <view class="tips" v-if="userInfo&&!userInfo.isFenxiao&&!shareId">成为游陕西旅行达人</view>
            <view class="tips" v-else>分享赚钱 自用省钱</view>
            <view class="line"></view>
        </view>
    </view>
    <view class="main-box">
        <view class="title" v-if="userInfo&&userInfo.isFenxiao">您已是游陕西的旅行达人啦</view>
        <block v-else>
            <view class="title bold" v-if="shareId">{{shareinfo.nickName+' 邀请你成为游陕西旅行达人'}}</view>
            <view class="title bold" v-else>申请开通游陕西旅行达人权限</view>
        </block>
        <image mode class="icon" :src="shareinfo.picUrl?shareinfo.picUrl:'https://eshopfile.zhiyousx.com/2021120611010377794.png'" v-if="shareId&&(!userInfo||!userInfo.isFenxiao)"></image>
        <image mode class="icon" :src="userInfo&&userInfo.picUrl?userInfo.picUrl:'https://eshopfile.zhiyousx.com/2021120611010377794.png'" v-else></image>
        <view class="name" v-if="shareId&&(!userInfo||!userInfo.isFenxiao)">{{shareinfo.nickName}}</view>
        <view class="name" v-else>{{userInfo.nickName?userInfo.nickName:''}}</view>
        <view class="but" v-if="!userInfo" @click="toBeTalent(1)">登录/注册</view>
        <block v-else>
            <view class="but" v-if="!userInfo.isFenxiao&&!shareId" @click="toBeTalent(2)">开通</view>
            <block v-else>
                <view class="but" v-if="!userInfo.isFenxiao&&shareId" @click="toBeTalent(3)">立即成为旅行达人</view>
                <block v-else>
                    <view class="but" v-if="userInfo.isFenxiao" @click="toBeTalent(4)">去赚钱</view>
                </block>
            </block>
        </block>
    </view>
    <view class="info-box">
        <view class="i-title">旅行达人权益</view>
        <view class="item" v-for="(item, index) in configrights">
            <image mode class="img" :src="item.url"></image>
            <view class="value">{{item.FenxiaoPower}}</view>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              shareId: "",
              shareinfo: {},
              configrights: []
            }
          },
          onLoad: function(e) {
            e.scene && (this.shareId = e.scene, this.getMemberinfo()), this.getConfig()
          },
          onShow: function() {
            var n = uni.getStorageSync("shareId");
            n && !this.shareId && (this.shareId = n), e.removeStorage({
              key: "shareId"
            })
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            getMemberinfo: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/member/" + this.shareId).then((function(n) {
                e.shareinfo = n.data
              }))
            },
            applyTalent: function() {
              var n = this;
              this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/member/applyFenXiao").then((function(t) {
                1 == t.code ? n.changeuserinfo(1) : ("您已经是旅行达人，请勿重复申请" == t.msg && n.changeuserinfo(), uni.showToast({
                  title: t.msg,
                  icon: "none"
                }))
              }))
            },
            getConfig: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "FENXIAO_VIP_POWER"
              }).then((function(n) {
                1 === n.code && (e.configrights = JSON.parse(n.data.paramValue))
              }))
            },
            inviteTalent: function() {
              var n = this;
              this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/member/agreeFenXiao", {
                referenceId: this.shareId
              }).then((function(t) {
                1 == t.code ? n.changeuserinfo(1) : ("您已经是旅行达人，请勿重复申请" == t.msg && n.changeuserinfo(), uni.showToast({
                  title: t.msg,
                  icon: "none"
                }))
              }))
            },
            changeuserinfo: function(n) {
              n && uni.showToast({
                title: "恭喜成为旅行达人",
                icon: "success"
              });
              var t = this.userInfo;
              t.isFenxiao = 1, this.$store.commit("SET_USERINFOR", t), uni.setStorageSync("userInfor", t)
            },
            toBeTalent: function(n) {
              var t = this,
                a = this;
              1 == n && (uni.setStorageSync("shareId", this.shareId), this.$util.isLogin()), 2 == n && this.$store.dispatch("PushMessage").then((function(e) {
                a.applyTalent()
              })), 3 == n && this.$store.dispatch("PushMessage").then((function(e) {
                a.inviteTalent()
              })), 4 == n && this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/member/existOfficalOpenid", {
                openId: uni.getStorageSync("userInfor").openId
              }).then((function(n) {
                if (1 === n.code)
                  if (n.data) {
                    var a = n.data;
                    t.$navigateTo({
                      url: "/distribution/pages/index/index?officialOpenId=" + a
                    })
                  } else {
                    var i = "https://eshop.zhiyousx.com/dsmall-admin-ui/h5/driverSms.html?miniOpenid=" + uni.getStorageSync("userInfor").openId + "&unionid=" + uni.getStorageSync("unionid") + "&isFenxiao=1",
                      o = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4e897687efe1ef2e&redirect_uri=" + encodeURIComponent(i) + "&response_type=code&scope=snsapi_base&forcePopup=true&state=1&connect_redirect=1#wechat_redirect";
                    uni.navigateTo({
                      url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(o)
                    })
                  }
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#fff;font-family:Source Han Sans CN-Normal,Source Han Sans CN;font-weight:400;min-height:100vh}.page-box .top-box{background:linear-gradient(112deg,#ffa13c,#fe664f);border-radius:0 0 52px 52px;box-sizing:border-box;height:297rpx;margin-left:-5%;padding:70rpx 85rpx;width:110%}.page-box .top-box .top{align-items:center;display:-webkit-flex;display:flex;height:48rpx;justify-content:space-between;margin:0 auto;width:580rpx}.page-box .top-box .top .line{background-color:#fff;height:1px;width:112rpx}.page-box .top-box .top .tips{color:#fff;font-size:32rpx;line-height:38rpx;text-shadow:0 2rpx 1px rgba(0,0,0,.1)}.page-box .main-box{align-items:center;background:#fff;border-radius:20rpx;box-shadow:0 10rpx 20rpx 1px rgba(0,0,0,.05);display:-webkit-flex;display:flex;flex-direction:column;height:500rpx;margin:-110rpx 40rpx 40rpx;width:670rpx}.page-box .main-box .bold{font-weight:700}.page-box .main-box .title{color:#666;font-size:32rpx;line-height:38rpx;margin-top:40rpx}.page-box .main-box .icon{border-radius:70rpx;height:140rpx;margin-top:40rpx;width:140rpx}.page-box .main-box .name{color:#333;font-size:36rpx;line-height:42rpx;margin-top:10rpx}.page-box .main-box .but{background:linear-gradient(112deg,#ffa13c,#fe664f);border-radius:50rpx;color:#fff;font-family:Source Han Sans CN-Regular,Source Han Sans CN;font-size:30rpx;font-weight:400;height:80rpx;line-height:80rpx;margin-top:48rpx;text-align:center;text-shadow:0 2rpx 1px rgba(0,0,0,.1);width:420rpx}.page-box .info-box{box-sizing:border-box;padding:0 40rpx}.page-box .info-box .i-title{color:#333;font-size:32rpx;font-weight:700;line-height:38rpx;text-align:center}.page-box .info-box .item{align-items:center;display:-webkit-flex;display:flex;margin-top:40rpx}.page-box .info-box .item .img{background:#ffdab2;border-radius:40rpx;height:80rpx;margin-right:45rpx;width:80rpx}.page-box .info-box .item .value{align-items:center;color:#666;display:-webkit-flex;display:flex;font-size:26rpx;height:80rpx;line-height:36rpx;width:545rpx}
</style>
