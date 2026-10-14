<template>
<view class="page-box">
    <view :class="['header','',!isAndroid?'apple':'']">
        <view class="headerBg">
            <view class="" :style="navgateHeight">我的</view>
        </view>
        <view class="information">
            <view class="left">
                <view class="Photo" @click="information($event)">
                    <image class="" :src="userInfo.picUrl?userInfo.picUrl:'https://eshopfile.zhiyousx.com/2021120914511172601.png'" v-if="userInfo"></image>
                    <image class="" src="https://eshopfile.zhiyousx.com/2021120914511172601.png" v-else></image>
                </view>
                <view class="nickName">
                    <block v-if="userInfo">
                        <view class="n">{{ (userInfo.nickName?userInfo.nickName:'') }}<view class="goodshare" v-if="userInfo.isFenxiao" @click="goWealth($event)">
                                <image class="" mode="heightFix" src="https://eshopfile.zhiyousx.com/2021111810193639516.png"></image>旅行达人</view>
                        </view>
                        <view class="">{{$root.f0}}</view>
                    </block>
                    <view class="" v-else @click="goLogin($event)">登录/注册</view>
                </view>
            </view>
        </view>
        <view class="shopcart">
            <view class="option" @click="goshoppingCart($event)">
                <view class="num">{{wealthNum.cartNum||0}}</view>
                <view class="name">购物车</view>
            </view>
            <view class="option" @click="goDiscounts($event)">
                <view class="num">{{wealthNum.couponCount||0}}</view>
                <view class="name">优惠券</view>
            </view>
            <view class="option" @click="goGiftCard($event)">
                <view class="num">{{wealthNum.giftCardNum||0}}</view>
                <view class="name">礼品卡</view>
            </view>
            <view class="option" @click="goMyeqCard($event)">
                <view class="num">{{cardNum||0}}</view>
                <view class="name">权益卡</view>
            </view>
            <view class="option" @click="goYearCard($event)">
                <view class="num">{{wealthNum.userYearCardNum||0}}</view>
                <view class="name">年卡</view>
            </view>
        </view>
        <view class="wealth" @click="goWealth($event)">
            <view class="Cash-out">
                <view class="">我的总收益<text class="t m">￥</text>
                    <text class="t">{{wealthNum.accountIncome||0}}</text>
                </view>
                <view class="" v-if="userInfo.isFenxiao">合伙人后台</view>
            </view>
            <view class="money">
                <view class="moneys">
                    <view class="describe">可提现</view>
                    <view class="number numberRed">
                        <text class="" style="color:#FF4643;">￥</text>
                        <text class="" style="color:#ff4643;font-size:36rpx;">{{wealthNum.accountBalance||0}}</text>
                    </view>
                </view>
                <view class="moneys">
                    <view class="describe">结算中</view>
                    <view class="number">
                        <text class="">￥</text>
                        <text class="" style="color:#333;font-size:36rpx;">{{wealthNum.brokerageIncome||0}}</text>
                    </view>
                </view>
                <view class="moneys">
                    <view class="describe">已提现</view>
                    <view class="number" style="font-size:36rpx;">
                        <text class="">￥</text>
                        <text class="" style="color:#333;font-size:36rpx;">{{wealthNum.accountWithdraw||0}}</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="order">
        <view class="details">
            <view class="contents" @click="goMyorder(1)">
                <view class="iconbox">
                    <image class="" src="https://eshopfile.zhiyousx.com/2021111817111705800.png"></image>
                    <u-badge bgColor="#ff4643" class="" :count="orderNum.waitPay" :offset="[-10,-10]" v-if="orderNum"></u-badge>
                </view>
                <text class="">待付款</text>
            </view>
            <view class="contents" @click="goMyorder(2)">
                <view class="iconbox">
                    <image class="" src="https://eshopfile.zhiyousx.com/2021111817113322154.png"></image>
                    <u-badge bgColor="#ff4643" class="" :count="orderNum.waitDelivered" :offset="[-10,-10]" v-if="orderNum"></u-badge>
                </view>
                <text class="">待发货</text>
            </view>
            <view class="contents" @click="goMyorder(3)">
                <view class="iconbox">
                    <image class="" src="https://eshopfile.zhiyousx.com/2021111817115635468.png"></image>
                    <u-badge bgColor="#ff4643" class="" :count="orderNum.pendingReceipt" :offset="[-10,-10]" v-if="orderNum"></u-badge>
                </view>
                <text class="">待收货</text>
            </view>
            <view class="contents" @click="goAfterSales($event)">
                <view class="iconbox">
                    <image class="" src="https://eshopfile.zhiyousx.com/2021111817122324138.png"></image>
                </view>
                <text class="">退换/售后</text>
            </view>
            <view class="contents" @click="goMyorder(0)">
                <view class="iconbox">
                    <image class="" src="https://eshopfile.zhiyousx.com/2021111817104193057.png"></image>
                </view>
                <text class="">我的订单</text>
            </view>
        </view>
    </view>
    <view class="list" :style="openAppConfig.paramValue==1?'margin-bottom:110rpx;':''">
        <view class="contents" v-if="(!userInfo||!userInfo.isFenxiao)&&openFenxiaoConfig" @click="talent($event)">
            <view class="conItem">
                <image class="" src="https://eshopfile.zhiyousx.com/170065378457808945.png"></image>
                <view class="news">成为旅行达人</view>
            </view>
            <view class="iconbox">
                <uni-icons class="" color="#c8c8c8" type="arrowright"></uni-icons>
            </view>
        </view>
        <view class="contents" @click="collection($event)">
            <view class="conItem">
                <image class="" src="https://eshopfile.zhiyousx.com/2023120417452973207.png"></image>
                <view class="news">我的收藏</view>
            </view>
            <view class="iconbox">
                <uni-icons class="" color="#c8c8c8" type="arrowright"></uni-icons>
            </view>
        </view>
        <view class="contents" @click="passenger($event)">
            <view class="conItem">
                <image class="" src="https://eshopfile.zhiyousx.com/170065376301138571.png"></image>
                <view class="news">常用旅客</view>
            </view>
            <view class="iconbox">
                <uni-icons class="" color="#c8c8c8" type="arrowright"></uni-icons>
            </view>
        </view>
        <view class="contents" @click="news($event)">
            <view class="conItem">
                <image class="" src="https://eshopfile.zhiyousx.com/170065380405498216.png"></image>
                <view class="news">消息中心</view>
            </view>
            <view class="iconbox">
                <text class="badgeBox" v-if="messageNum">{{messageNum||''}}</text>
                <uni-icons class="" color="#c8c8c8" type="arrowright"></uni-icons>
            </view>
        </view>
        <view class="contents" @click="security($event)">
            <view class="conItem">
                <image class="" src="https://eshopfile.zhiyousx.com/170065372343017335.png"></image>
                <view class="news">账户安全</view>
            </view>
            <view class="iconbox">
                <uni-icons class="" color="#c8c8c8" type="arrowright"></uni-icons>
            </view>
        </view>
        <view class="contents" @click="feedback($event)">
            <view class="conItem">
                <image class="" src="https://eshopfile.zhiyousx.com/170065384377493595.png"></image>
                <view class="news">问题反馈</view>
            </view>
            <view class="iconbox">
                <uni-icons class="" color="#c8c8c8" type="arrowright"></uni-icons>
            </view>
        </view>
        <view class="contents" @click="about($event)">
            <view class="conItem">
                <image class="" src="https://eshopfile.zhiyousx.com/170065334814754280.png"></image>
                <view class="news">关于我们</view>
            </view>
            <view class="iconbox">
                <uni-icons class="" color="#c8c8c8" type="arrowright"></uni-icons>
            </view>
        </view>
    </view>
    <view class="openApp" v-if="openAppConfig.paramValue==1&&false">
        <text class="">{{openAppConfig.paramName||'打开游陕西APP，海量门票优惠购'}}</text>
        <button appParameter="wechat" class="" openType="launchApp" @error="launchAppError($event)">立即前往</button>
    </view>
    <tab-bar class=""></tab-bar>
    <view class="wrapper" style="position:fixed;z-index:9999;" v-if="showPoster">
        <view class="bg" @click="e0($event)"></view>
        <canvas canvasId="firstCanvas" class="" style="position:relative;height:1140rpx;width:640rpx;top:50%;margin-top:-570rpx;margin-left:55rpx;backgroundColor:#FFFFFF;z-index:10;"></canvas>
        <view class="save" @click.stop="saveImg($event)">保存海报</view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            tabBar: function() {
              n.e("components/tabBar/tabBar").then(function() {
                return resolve(n("d657"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              orderNum: "",
              messageNum: "",
              cardNum: "",
              imgurl: "",
              isAndroid: !0,
              wholeBase64: "",
              minNum: 0,
              wealthNum: "",
              navgateHeight: 0,
              openAppConfig: {},
              openFenxiaoConfig: 1,
              showPoster: !1,
              saveTop: 80,
              unit: 0,
              qrcode: "",
              shareimg: "https://eshopfile.zhiyousx.com/2022051811164947691.jpg"
            }
          },
          onLoad: function() {},
          onShow: function() {
            var t = this;
            this.$bus.$emit("tabPlay", 3), uni.getSystemInfo({
              success: function(e) {
                t.unit = e.screenWidth / 750
              }
            }), uni.getSystemInfoSync().system.indexOf("Android") > -1 || (this.isAndroid = !1), uni.getStorageSync("token") ? (this.pageLoad(), this.messageCount(), this.wealthDetail(), this.getqrcodeImg(), this.getMinNum(), this.getEquityCardNum()) : (this.orderNum = "", this.messageNum = "", this.wealthNum = "", this.cardNum = ""), this.getOpenAppStatus(), this.getOpenFenxiaoStatus();
            var n = uni.getSystemInfoSync().statusBarHeight;
            this.navgateHeight = "margin-top:".concat(n, "px;text-align:center;color:#fff;height:45px;line-height:45px;")
          },
          filters: {
            mobileSubstr: function(e) {
              return e ? e.substr(0, 3) + "****" + e.substr(7) : "-"
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            goYearCard: function() {
              uni.navigateTo({
                url: "/yearCard/pages/index/index"
              })
            },
            pageLoad: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getOrder", {
                memberId: this.userInfo.memberId
              }).then((function(t) {
                1 === t.code && (e.orderNum = t.data)
              }))
            },
            messageCount: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/messageRecord/getCount", {
                memberId: this.userInfo.memberId
              }).then((function(t) {
                1 === t.code && (e.messageNum = t.data.msgCount + t.data.operateCount + t.data.performanceCount)
              }))
            },
            launchAppError: function(e) {
              this.$uni.showToast("请前往游陕西APP享受优惠")
            },
            getEquityCardNum: function() {
              var e = this;
              this.$uniApi.getRequestNoLoading("GET", "product/app/userEquityCard/myEquityCardNum").then((function(t) {
                1 === t.code && (e.cardNum = t.data)
              }))
            },
            getMinNum: function() {
              var e = this;
              this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/sysLookupType/customWord?paramKey=WITHDRAW_RULE").then((function(t) {
                1 === t.code && t.data.forEach((function(t) {
                  0 === t.lookupType && (e.minNum = t.lookupValue)
                }))
              }))
            },
            wealthDetail: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/memberAccount", {
                memberId: this.userInfo.memberId
              }).then((function(t) {
                1 === t.code && (e.wealthNum = t.data)
              }))
            },
            getqrcodeImg: function() {
              var e = this;
              this.userInfo.isFenxiao && !this.qrcode && this.$uniApi.dataRequestNoLoading("GET", "manager/app/wx/getwxacodeunlimit").then((function(t) {
                1 === t.code && (e.qrcode = t.data)
              }))
            },
            goLogin: function() {
              this.$util.isLogin() && this.$uni.showToast("已登录")
            },
            getOpenAppStatus: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "OPEN_APP"
              }).then((function(t) {
                1 === t.code && (e.openAppConfig = t.data)
              }))
            },
            getOpenFenxiaoStatus: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "APPLY_FENXIAO_ON_OFF"
              }).then((function(t) {
                1 === t.code && (e.openFenxiaoConfig = Number(t.data.paramValue || 0))
              }))
            },
            feedback: function() {
              this.safeRouter("/subPage/pages/feedback/feedback")
            },
            myTeam: function() {
              this.safeRouter("/subPage/pages/leaguemember/leaguemember")
            },
            collection: function() {
              this.safeRouter("/subPack/pages/collection/collection")
            },
            information: function() {
              var e = "/subPage/pages/information/information";
              this.$util.isLogin(e) && this.$navigateTo({
                url: e
              })
            },
            goMyorder: function(e) {
              this.safeRouter("/pages/myorder/myorder?type=".concat(e))
            },
            goAfterSales: function() {
              this.safeRouter("/subPack/pages/aftersales/aftersales")
            },
            goWealth: function() {
              var t = this;
              this.userInfo ? this.userInfo.isFenxiao ? this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/member/existOfficalOpenid", {
                openId: uni.getStorageSync("userInfor").openId
              }).then((function(n) {
                if (1 === n.code)
                  if (n.data) {
                    var a = n.data;
                    t.safeRouter("/distribution/pages/index/index?officialOpenId=" + a)
                  } else {
                    var i = "https://eshop.zhiyousx.com/dsmall-admin-ui/h5/driverSms.html?miniOpenid=" + uni.getStorageSync("userInfor").openId + "&unionid=" + uni.getStorageSync("unionid") + "&isFenxiao=1",
                      o = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4e897687efe1ef2e&redirect_uri=" + encodeURIComponent(i) + "&response_type=code&scope=snsapi_base&forcePopup=true&state=1&connect_redirect=1#wechat_redirect";
                    uni.navigateTo({
                      url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(o)
                    })
                  }
              })) : this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/member/existOfficalOpenid", {
                openId: uni.getStorageSync("userInfor").openId
              }).then((function(n) {
                if (1 === n.code)
                  if (n.data) {
                    var a = n.data;
                    t.safeRouter("/subPage/pages/wealth/wealth?officialOpenId=" + a)
                  } else {
                    var i = "https://eshop.zhiyousx.com/dsmall-admin-ui/h5/driverSms.html?miniOpenid=" + uni.getStorageSync("userInfor").openId + "&unionid=" + uni.getStorageSync("unionid") + "&isFenxiao=0",
                      o = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4e897687efe1ef2e&redirect_uri=" + encodeURIComponent(i) + "&response_type=code&scope=snsapi_base&forcePopup=true&state=1&connect_redirect=1#wechat_redirect";
                    uni.navigateTo({
                      url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(o)
                    })
                  }
              })) : uni.navigateTo({
                url: "/pages/wxLogin/wxLogin"
              })
            },
            tohotArea: function() {
              this.safeRouter("/subPage/pages/hotArea/hotArea?showType=1")
            },
            goDiscounts: function() {
              this.safeRouter("/subPage/pages/myDiscounts/myDiscounts")
            },
            safeRouter: function(e) {
              this.$util.isLogin(e) && this.$navigateTo({
                url: e
              })
            },
            goMyeqCard: function() {
              var e = "/subPage/pages/myeqcard/myeqcard";
              this.$util.isLogin(e) && this.$navigateTo({
                url: e
              })
            },
            goGiftCard: function() {
              var e = "/subPage/pages/giftCard/giftCard";
              this.$util.isLogin(e) && this.$navigateTo({
                url: e
              })
            },
            passenger: function() {
              var e = "/subPage/pages/passenger/passenger";
              this.$util.isLogin(e) && this.$navigateTo({
                url: e
              })
            },
            security: function() {
              this.safeRouter("/pages/security/security")
            },
            edition: function() {
              this.$navigateTo({
                url: "/subPack/pages/edition/edition"
              })
            },
            about: function() {
              this.$navigateTo({
                url: "/subPage/pages/about/about"
              })
            },
            talent: function() {
              this.safeRouter("/subPage/pages/talent/talent")
            },
            news: function() {
              this.safeRouter("/subPack/pages/news/news")
            },
            withdrawal: function(e) {
              e < this.minNum || this.safeRouter("/subPage/pages/withdrawal/withdrawal?num=".concat(this.wealthNum.accountBalance))
            },
            goshoppingCart: function() {
              this.safeRouter("/subPage/pages/shopcart/shopcart")
            },
            goSignin: function() {
              this.safeRouter("/pages/sign_in/sign_in")
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{min-height:100vh;overflow:hidden;width:100%}.wrapper .bg,.wrapper{height:100%;left:0;top:0;width:100%}.wrapper .bg{background:rgba(0,0,0,.6);position:absolute;z-index:3}.wrapper .save{background:linear-gradient(180deg,#caffee,#2cd471);border-radius:50rpx;bottom:80rpx;color:#00933e;font-size:32rpx;height:80rpx;left:113rpx;line-height:80rpx;position:fixed;text-align:center;width:542rpx;z-index:9999}.wrapper image{height:90%;width:90%;z-index:100}.header{background-size:100% 262rpx;min-height:560rpx;padding-top:150rpx;position:relative;width:100%}.header.apple{padding-top:180rpx}.header .headerBg{background:linear-gradient(52deg,#ffa13c,#fe664f);height:560rpx;left:0;position:absolute;top:0;width:750rpx;z-index:-1}.header .information{height:120rpx;justify-content:space-between;padding-left:30rpx;width:100%}.header .information .left,.header .information{align-items:center;display:-webkit-flex;display:flex}.header .information .left .Photo{border-radius:50%;height:120rpx;margin-right:20rpx;width:120rpx}.header .information .left .Photo image{border-radius:50%;height:100%;width:100%}.header .information .left .nickName{display:-webkit-flex;display:flex;flex-direction:column;height:100rpx;justify-content:space-around}.header .information .left .nickName view{align-items:center;color:#fff;display:-webkit-flex;display:flex;font-size:32rpx}.header .information .left .nickName view.n{align-items:flex-end}.header .information .left .nickName .goodshare{align-items:center;background:#bb481e;border-radius:15rpx;color:#fff;display:inline-block;display:-webkit-flex;display:flex;font-size:24rpx;height:32rpx;justify-content:center;margin-bottom:3rpx;margin-left:10rpx;width:160rpx}.header .information .left .nickName .goodshare image{height:24rpx}.header .information .right{align-items:center;background-color:rgba(0,0,0,.1);border-radius:27rpx 0 0 27rpx;display:-webkit-flex;display:flex;font-size:26rpx;height:60rpx;justify-content:center;width:160rpx}.header .information .right>text{color:#fff}.header .information .right image{height:29rpx;margin-right:9rpx;width:32rpx}.header .shopcart{height:132rpx;padding:20rpx 50rpx 32rpx;width:100%}.header .shopcart .option,.header .shopcart{display:-webkit-flex;display:flex;justify-content:space-between}.header .shopcart .option{align-items:center;flex-direction:column;width:80rpx}.header .shopcart .option .num{color:#fff;font-size:36rpx}.header .shopcart .option .name{color:#fff;font-size:26rpx}.header .wealth{background-color:#ffeee4;border-radius:16rpx;box-shadow:0rpx 0rpx 16rpx 4rpx hsla(0,0%,73%,.1);display:-webkit-flex;display:flex;flex-direction:column;margin:auto;min-height:300rpx;padding:20rpx 32rpx 65rpx;width:690rpx}.header .wealth .Cash-out{align-items:center;display:-webkit-flex;display:flex;height:60rpx;justify-content:space-between;margin:25rpx 0 36rpx;width:100%}.header .wealth .Cash-out view:nth-child(1){color:#333;font-size:30rpx;font-weight:700}.header .wealth .Cash-out view:nth-child(1) .t{color:#ff4643;font-size:43rpx}.header .wealth .Cash-out view:nth-child(1) .m{font-size:30rpx;margin-left:22rpx}.header .wealth .Cash-out view:nth-child(2){align-items:center;background:linear-gradient(52deg,#ffa13c,#fe664f);border-radius:30rpx;color:#fff;display:-webkit-flex;display:flex;font-size:26rpx;height:60rpx;justify-content:center;padding:0 38rpx}.header .wealth .Cash-out view:nth-child(2).dis{background:linear-gradient(52deg,#ffc07c,#ff9888);box-shadow:0 5rpx 2rpx 0rpx rgba(255,192,155,.5)}.header .wealth .money{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;width:100%}.header .wealth .money .moneys{flex:1;text-align:center}.header .wealth .money .moneys .describe{color:#777;font-size:24rpx;margin-bottom:20rpx}.header .wealth .money .moneys .number{color:#111;font-size:34rpx;font-weight:400;font-weight:700}.header .wealth .money .moneys .number text{font-size:24rpx}.header .wealth .money .moneys .numberRed:first-child,.header .wealth .money .moneys .numberRed:first-child>text{color:#ff4643}.header .wealth .myteam{display:-webkit-flex;display:flex;height:80rpx;justify-content:space-between;margin-top:10rpx;padding:15rpx 0}.header .wealth .myteam .btn{align-items:center;background:#ffdeca;border-radius:25rpx;display:-webkit-flex;display:flex;height:50rpx;justify-content:center;width:310rpx}.header .wealth .myteam .btn image{height:18rpx;margin-right:10rpx}.header .wealth .myteam .btn text{color:#555;font-size:24rpx}.order{background-color:#fff;border-radius:16rpx;box-shadow:0 0 16rpx 4rpx hsla(0,0%,73%,.2);display:-webkit-flex;display:flex;flex-direction:column;height:160rpx;margin:-50rpx auto 20rpx;padding:0 30rpx;position:relative;width:690rpx;z-index:4}.order .head{align-items:center;border-bottom:1rpx solid #f7f7f7;display:-webkit-flex;display:flex;height:88rpx;justify-content:space-between;width:100%}.order .head view:nth-child(1){color:#333;font-size:32rpx;font-weight:700}.order .head view:nth-child(2){align-items:center;color:#adadad;display:-webkit-flex;display:flex;font-size:26rpx}.order .head view:nth-child(2) image{height:30rpx;width:30rpx}.order .details{flex:1;justify-content:space-around;width:100%}.order .details .contents,.order .details{align-items:center;display:-webkit-flex;display:flex}.order .details .contents{color:#666;flex-direction:column;font-size:24rpx;margin-top:5rpx;width:110rpx}.order .details .contents .iconbox{height:68rpx;position:relative}.order .details .contents .iconbox image{height:68rpx;width:72rpx}.order .details .contents>text{color:#666;font-size:24rpx}.list{background-color:#fff;border-radius:20rpx;box-shadow:0 0 16rpx 4rpx hsla(0,0%,73%,.2);margin:20rpx auto;padding-left:30rpx;width:690rpx}.list .contents{border-bottom:1rpx solid #f7f7f7;height:88rpx;justify-content:space-between;padding-right:30rpx;width:100%}.list .contents .conItem,.list .contents{align-items:center;display:-webkit-flex;display:flex}.list .contents .conItem>image{height:30rpx;width:28rpx}.list .contents .conItem .news{color:#333;font-size:26rpx;margin-left:20rpx}.list .contents .iconbox{align-items:center;display:-webkit-flex;display:flex;position:relative}.list .contents .iconbox image{height:40rpx;width:40rpx}.list .contents .iconbox .badgeBox{background:#ff5411;border-radius:100%;color:#fff;font-size:20rpx;padding:3rpx 12rpx}.list .contents:nth-last-child(1){border:0}.openApp{align-items:center;background:#fff1ed;bottom:0;display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between;left:0;padding:0 40rpx;position:fixed;width:100%}.openApp text{color:#ff4643;font-size:24rpx}.openApp button{background:linear-gradient(52deg,#fc4a9e,#ff5411);border-radius:25px;color:#fff;font-size:26rpx;height:50rpx;line-height:50rpx;margin:0;width:160rpx}
</style>
