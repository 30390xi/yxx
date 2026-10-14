<template>
<view class="u-wrap page-box">
    <uni-navbar class="" title="陕西联合会员权益中心" :transparentFixedFontColor="titleColor" type="transparentFixed"></uni-navbar>
    <view class="top-box" @click="isUnion()">
        <image class="bg-img" mode="aspectFill" src="https://eshopfile.zhiyousx.com/2024062010391767799.png"></image>
        <view class="tip-box">
            <image mode class="logo" :src="unionUserInfo.photoUrl?unionUserInfo.photoUrl:logo"></image>
            <view class="user-box" v-if="isUnionMember">
                <view class="name">{{ (unionUserInfo.nickName||'') }}</view>
                <view class="time-info allcenter">{{''+$root.f0+'日到期'}}<view class="btn allcenter" @click.stop="jumpToMin($event)">去续费<u-icon class="" color="#FFFFFF" name="arrow-right" size="24" style="margin-left:8rpx;"></u-icon>
                    </view>
                </view>
            </view>
            <block v-else>
                <text class="">+前往</text>
                <text class="imp">陕西联合会员中心</text>
                <text class="">购卡</text>
            </block>
        </view>
        <view class="code-box allcenter" v-if="!unionExpired&&isUnionMember" @click.stop="toUserCard($event)">
            <image mode class="code" src="https://eshopfile.zhiyousx.com/2024062114233519836.png"></image>会员码</view>
    </view>
    <view class="module-box">
        <view class="black-box" v-if="$root.g0">
            <view class="flex col-center row-space-between">
                <view class="title flex col-center">
                    <image mode class="t-img" src="https://eshopfile.zhiyousx.com/2024052310373321295.png"></image>
                    <text class="">吃喝玩乐</text>
                    <text class="union-color">热门权益</text>
                </view>
                <view class="toR flex col-center" @click="jumpTo('/union/pages/list/list')">
                    <text class="">{{$root.f1+'特权'}}</text>
                    <image mode class="r-img" src="https://eshopfile.zhiyousx.com/2024052310422161768.png"></image>
                </view>
            </view>
            <view class="row-box">
                <view class="item" v-if="i<8" :key="i" v-for="(it, i) in cardList">
                    <image class="item-img" mode="aspectFill" :src="it.scenicImage"></image>
                    <view class="name singleLineText">{{ it.scenicName }}</view>
                    <view class="tip singleLineText">{{ it.equityDesc }}</view>
                </view>
            </view>
        </view>
        <view class="black-box" v-if="$root.g1">
            <view class="flex col-center row-space-between">
                <view class="title flex col-center">
                    <image mode class="t-img" src="https://eshopfile.zhiyousx.com/2024052310373321295.png"></image>
                    <text class="">旅游出行</text>
                    <text class="union-color">{{'畅玩'+month+'月'}}</text>
                </view>
                <view class="toR flex col-center" @click="jumpTo('/union/pages/coupon/coupon')">
                    <text class="">{{$root.f2+'神券'}}</text>
                    <image mode class="r-img" src="https://eshopfile.zhiyousx.com/2024052310422161768.png"></image>
                </view>
            </view>
            <scroll-view class="col-box" :scrollWithAnimation="true" :scrollX="true">
                <view class="col-item" v-if="i<6" :key="i" v-for="(it, i) in $root.l0">
                    <view class="i-t">
                        <view class="item-img-b">
                            <image class="img" mode="aspectFill" :src="it.showImage"></image>
                            <view class="sign">{{ (it.itemType==1?'门票':'线路') }}</view>
                        </view>
                        <view class="item-info">
                            <view class="price-box" v-if="it.type==3">
                                <text class="">免单</text>
                            </view>
                            <view class="price-box" v-else>
                                <text class="ps">￥</text>
                                <text class="">{{it.quota}}</text>
                            </view>
                            <view class="info-t singleLineText">{{ it.f3 }}</view>
                            <view :class="['btn','',it.receiveButton==2||it.receiveButton==4||it.receiveButton==5?'dis':'']">{{ it.f4 }}</view>
                        </view>
                    </view>
                    <view class="i-b singleLineText">{{ it.showName }}</view>
                </view>
            </scroll-view>
        </view>
        <view class="black-box" v-if="cardInfo.serviceExpertAddress&&cardInfo.serviceExpertPhone&&cardInfo.cooperationAddress">
            <view class="flex col-center row-space-between">
                <view class="title flex col-center">
                    <image mode class="t-img" src="https://eshopfile.zhiyousx.com/2024052310373321295.png"></image>
                    <text class="">帮助中心</text>
                </view>
                <view class="toR flex col-center"></view>
            </view>
            <view class="help-row flex col-center row-space-between" v-if="cardInfo.serviceExpertAddress&&cardInfo.serviceExpertPhone">
                <view class="r-left flex col-center">
                    <image mode class="icon-l" src="https://eshopfile.zhiyousx.com/2024052311363025995.png"></image>
                    <view class="l-info">
                        <view class="name">服务专家</view>
                        <view class="time singleLineText" :hidden="!cardInfo.serviceExpertDesc">{{ cardInfo.serviceExpertDesc }}</view>
                    </view>
                </view>
                <view class="r-right">
                    <image mode class="icon" src="https://eshopfile.zhiyousx.com/2024052311431440330.png" v-if="cardInfo.serviceExpertAddress" @click="jumpToH5(cardInfo.serviceExpertAddress)"></image>
                    <image mode class="icon" src="https://eshopfile.zhiyousx.com/2024052311431841365.png" v-if="cardInfo.serviceExpertPhone" @click="phone($event)"></image>
                </view>
            </view>
            <block v-if="cardInfo.cooperationAddress">
                <view class="line"></view>
                <view class="help-row flex col-center row-space-between" @click="jumpToH5(cardInfo.cooperationAddress)">
                    <view class="r-left flex col-center">
                        <image mode class="icon-l" src="https://eshopfile.zhiyousx.com/2024052311452667077.png"></image>
                        <text class="">企业合作</text>
                    </view>
                    <view class="r-right">
                        <image mode class="" src="https://eshopfile.zhiyousx.com/2024052310422161768.png"></image>
                    </view>
                </view>
            </block>
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
                uid: "",
                titleColor: "#ffffff",
                isUnionMember: !1,
                unionUserInfo: {
                  nickName: "",
                  photoUrl: ""
                },
                couponList: [],
                allCouponNum: 0,
                month: "",
                logo: "https://eshopfile.zhiyousx.com/2024052310153909816.png",
                cardId: "1800718868851740673",
                cardNum: 0,
                cardList: [],
                cardInfo: "",
                unionExpired: !1,
                rNum: 0
              }
            },
            filters: {
              userFilter: function(n) {
                var t = {
                    1: "青年联盟",
                    2: "普通会员",
                    3: "联合会员",
                    4: "参议会员"
                  },
                  o = n.effectiveEndTime ? n.effectiveEndTime.split(" ")[0] : "",
                  e = o ? o.replaceAll("-", ".") : "";
                return n.unionExpired ? t[n.level] + "已于" + e : t[n.level] + e
              },
              numFilter: function(n) {
                if (!n) return 0;
                var t = n.toString();
                return n > 9 && n <= 1e3 ? t = t.slice(0, -1) + "0+" : n > 1e3 && (t = t.slice(0, -2) + "00+"), t
              },
              couponFilter: function(n) {
                return 1 == n.type ? "满".concat(n.threshold, "元") : 2 == n.type ? "无门槛" : 3 == n.type ? "抵扣".concat(n.deduction, "张") : void 0
              },
              btnFilter: function(n) {
                return {
                  1: "领取",
                  2: "已抢光",
                  3: "去使用",
                  4: "已使用",
                  5: "已过期"
                } [n]
              }
            },
            watch: {},
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            onPageScroll: function(n) {
              n.scrollTop < 80 ? this.titleColor = "#ffffff" : this.titleColor = "transparent"
            },
            onHide: function() {
              n.offCopyUrl()
            },
            onUnload: function() {
              n.offCopyUrl()
            },
            onLoad: function(n) {
              uni.showLoading({
                title: "加载中",
                mask: !0
              });
              var t = u().month();
              this.month = t + 1, n.uid && "4B0796D7DE3EF739531AC6F16A81ED5F" != n.uid ? (this.uid = (0, i.Decrypt)(n.uid), this.unioLogin()) : (uni.getStorageSync("token") && this.userInfo && this.userInfo.isUnionMember && this.getUnionUserInfo(), this.getInfoData())
            },
            onShow: function() {
              n.onCopyUrl((function() {
                return {
                  query: ""
                }
              })), uni.getStorageSync("token") && this.userInfo && this.userInfo.isUnionMember && 1 == this.rNum && (this.getUnionUserInfo(), this.getInfoData()), this.rNum = 1
            },
            onShareAppMessage: function() {
              return {
                title: "点击查看陕西联合会员海量权益",
                imageUrl: "https://eshopfile.zhiyousx.com/2024061310513695733.png",
                path: this.$util.setShareUrl("union/pages/index/index")
              }
            },
            methods: {
              unioLogin: function() {
                var n = this;
                this.$uniApi.dataRequestYesLoading("POST", "manager/app/ignoreAuth/unionMemberLogin", {
                  uid: this.uid
                }).then((function(t) {
                  if (1 === t.code) {
                    var o = "bearer " + t.data.token;
                    uni.setStorageSync("token", o), n.$store.dispatch("setUserInfo", o).then((function(t) {
                      1 === t.code ? (n.getInfoData(), t.data.isUnionMember && (n.isUnionMember = !0, n.getUnionUserInfo())) : n.$uni.showToast(t.msg)
                    }))
                  } else n.$uni.showToast(t.msg), n.getInfoData()
                }))
              },
              getUnionUserInfo: function() {
                var n = this;
                this.$uniApi.dataRequestYesLoading("GET", "manager/app/v1/unionMember/detail").then((function(t) {
                  if (1 === t.code) {
                    var o = t.data,
                      i = u(),
                      r = u(o.effectiveEndTime, "YYYY-MM-DD hh:mm:ss");
                    n.unionExpired = i.isAfter(r), o.unionExpired = n.unionExpired, uni.setStorageSync("unionUserInfo", o), n.unionUserInfo = o, n.isUnionMember = !0
                  } else n.uid && n.$uni.showToast(t.msg), uni.setStorageSync("unionUserInfo", "")
                }))
              },
              getInfoData: function() {
                this.getUnionEquityList(), this.getUnionEquityCardId()
              },
              isUnion: function() {
                (0, i.confirmBefore)()
              },
              jumpToS: function(n) {
                this.$navigateTo({
                  url: n
                })
              },
              jumpTo: function(n, t) {
                (0, i.routerTo)(n, t)
              },
              jumpToMin: function() {
                (0, i.jumpToUnion)()
              },
              phone: function() {
                uni.makePhoneCall({
                  phoneNumber: this.cardInfo.serviceExpertPhone
                })
              },
              jumpToH5: function(n) {
                uni.navigateTo({
                  url: "/pages/webpage/webpage?urlEncode=".concat(encodeURIComponent(n))
                })
              },
              getCouponList: function() {
                var n = this,
                  t = {
                    current: 1,
                    size: 6,
                    unionEquityCardId: this.cardId
                  };
                this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/unionCoupon/selectPage", t).then((function(t) {
                  1 === t.code && (n.couponList = t.data.records, n.allCouponNum = Number(t.data.total), setTimeout((function() {
                    uni.hideLoading()
                  }), 500))
                })).catch((function(n) {}))
              },
              receiveCoupon: function(n) {
                var t = this;
                (0, i.confirmBefore)() && (3 != n.receiveButton ? 1 == n.receiveButton && this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                  couponId: n.couponId
                }).then((function(n) {
                  1 == n.code ? (t.getCouponList(), t.$uni.showToast("领取成功")) : (t.$uni.showToast("已抢光"), t.getCouponList())
                })) : (0, i.jumpUseCoupon)(n))
              },
              getUnionEquityList: function() {
                var n = this;
                this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/userUnionEquityCard/getUnionEquityList").then((function(t) {
                  1 == t.code ? (n.cardList = t.data.detailVOList || [], n.cardNum = t.data.detailNum, n.cardInfo = t.data) : n.$uni.showToast(t.msg)
                }))
              },
              getUnionEquityCardId: function() {
                var n = this;
                this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/userUnionEquityCard/getUnionEquityCardId").then((function(t) {
                  1 == t.code ? (n.cardId = t.data, n.cardId && n.getCouponList()) : n.$uni.showToast(t.msg)
                }))
              },
              toUserCard: function() {
                (0, i.confirmBefore)() ? uni.navigateTo({
                  url: "/union/pages/card/cardDetail?userUnionEquityCardId"
                }): this.jumpToUnion()
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#e8e8e8;min-height:100vh;padding-bottom:108rpx}.page-box .top-box{height:520rpx;position:relative;width:100%;z-index:5rpx}.page-box .top-box .bg-img{height:520rpx;width:750rpx}.page-box .top-box .tip-box{align-items:center;background:linear-gradient(0deg,#500b0f,#b4384e);border-radius:40rpx 40rpx 0rpx 0rpx;border-top:2rpx solid #ff431a;bottom:60rpx;box-shadow:0rpx -20rpx 8rpx 0rpx rgba(0,0,0,.25);display:-webkit-flex;display:flex;height:160rpx;left:30rpx;padding-left:24rpx;position:absolute;width:690rpx}.page-box .top-box .tip-box .logo{border-radius:50%;height:78rpx;margin-right:14rpx;width:78rpx}.page-box .top-box .tip-box text{color:#fff;font-size:26rpx;font-weight:700}.page-box .top-box .tip-box .imp{color:#ffe5a4;margin:0 8rpx}.page-box .top-box .tip-box .user-box .name{color:#fff;font-size:32rpx;line-height:46rpx;margin-bottom:4rpx}.page-box .top-box .tip-box .user-box .time-info{color:#ffe5a4;display:-webkit-flex;display:flex;font-size:24rpx;font-weight:700;line-height:34rpx}.page-box .top-box .tip-box .user-box .time-info .btn{background:rgba(30,27,25,.3);border-radius:8rpx;color:#fff;font-size:24rpx;height:44rpx;margin-left:8rpx;width:128rpx}.page-box .top-box .code-box{background:linear-gradient(137deg,#1e1b19 35%,#515151);border:2rpx solid #707070;border-radius:40rpx 4rpx 0rpx 40rpx;bottom:142rpx;color:#fff;font-size:24rpx;height:56rpx;position:absolute;right:18rpx;width:160rpx}.page-box .top-box .code-box .code{height:40rpx;margin-right:4rpx;width:40rpx}.page-box .module-box{background:#e8e8e8;border-radius:20rpx;margin-top:-60rpx;min-height:200rpx;padding:20rpx;position:relative;z-index:20rpx}.page-box .module-box .black-box{background:#fff;border-radius:20rpx;margin-bottom:20rpx;padding:30rpx 20rpx 40rpx}.page-box .module-box .black-box .title .t-img{height:40rpx;margin-right:8rpx;width:40rpx}.page-box .module-box .black-box .title text{color:#1e1b19;font-size:36rpx;font-weight:700}.page-box .module-box .black-box .toR .r-img{height:28rpx;margin-left:4rpx;width:28rpx}.page-box .module-box .black-box .toR text{color:rgba(30,27,25,.6);font-size:24rpx}.page-box .module-box .black-box .row-box{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;width:100%}.page-box .module-box .black-box .row-box .item{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;margin-top:40rpx;width:166rpx}.page-box .module-box .black-box .row-box .item .item-img{border-radius:20rpx;height:120rpx;margin-bottom:8rpx;width:120rpx}.page-box .module-box .black-box .row-box .item .name{color:#1e1b19;font-size:28rpx;line-height:40rpx;text-align:center;width:160rpx}.page-box .module-box .black-box .row-box .item .tip{color:#c28c7b;font-size:24rpx;line-height:34rpx;text-align:center;width:160rpx}.page-box .module-box .black-box .row-box .item:nth-child(4n){margin-right:0}.page-box .module-box .black-box .col-box{height:262rpx;margin-top:40rpx;white-space:nowrap;width:690rpx}.page-box .module-box .black-box .col-box .col-item{display:inline-block;height:262rpx;margin-right:30rpx;width:354rpx}.page-box .module-box .black-box .col-box .col-item .i-t{background:linear-gradient(180deg,#f2e9d3,#fff);border-radius:20rpx 20rpx 10rpx 10rpx;box-shadow:inset -2rpx 2rpx 2rpx 0rpx hsla(0,0%,100%,.3),inset 6rpx -4rpx 13rpx 0rpx hsla(0,0%,100%,.2),0rpx 8rpx 20rpx 0rpx hsla(18,68%,64%,.1);display:-webkit-flex;display:flex;height:186rpx;padding:20rpx 8rpx;width:354rpx}.page-box .module-box .black-box .col-box .col-item .i-t .item-img-b{box-shadow:6rpx 0rpx 0rpx 0rpx rgba(0,0,0,.15);height:140rpx;margin-left:14rpx;position:relative;width:140rpx}.page-box .module-box .black-box .col-box .col-item .i-t .item-img-b .img{border-radius:8rpx;height:140rpx;width:140rpx}.page-box .module-box .black-box .col-box .col-item .i-t .item-img-b .sign{background:rgba(0,0,0,.5);border-radius:8rpx 0rpx 20rpx 0rpx;color:#fff;font-size:24rpx;height:36rpx;left:0;line-height:36rpx;position:absolute;text-align:center;top:0;width:56rpx}.page-box .module-box .black-box .col-box .col-item .i-t .item-info{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:space-between;width:184rpx}.page-box .module-box .black-box .col-box .col-item .i-t .item-info .price-box{align-items:flex-end;display:-webkit-flex;display:flex;height:48rpx}.page-box .module-box .black-box .col-box .col-item .i-t .item-info .price-box .ps{font-size:28rpx}.page-box .module-box .black-box .col-box .col-item .i-t .item-info .price-box text{color:#dd032f;font-size:48rpx;font-weight:700}.page-box .module-box .black-box .col-box .col-item .i-t .item-info .info-t{color:#1e1b19;font-size:24rpx}.page-box .module-box .black-box .col-box .col-item .i-t .item-info .btn{background:#1e1b19;border-radius:40rpx;color:#fff;font-size:26rpx;height:50rpx;line-height:50rpx;min-width:120rpx;padding:0 34rpx;text-align:center}.page-box .module-box .black-box .col-box .col-item .i-b{background:#f2e9d3;border-radius:20rpx;border-top:2rpx dashed #ababab;box-shadow:inset -2rpx 2rpx 2rpx 0rpx hsla(0,0%,100%,.3),inset 6rpx -4rpx 13rpx 0rpx hsla(0,0%,100%,.2),0rpx 8rpx 20rpx 0rpx hsla(18,68%,64%,.1);color:#1e1b19;font-size:26rpx;font-weight:700;height:80rpx;padding:22rpx;width:354rpx}.page-box .module-box .black-box .line{background:rgba(0,0,0,.05);height:2rpx;margin-top:20rpx;width:100%}.page-box .module-box .black-box .help-row{height:64rpx;margin-top:40rpx;width:650rpx}.page-box .module-box .black-box .help-row .r-left .icon-l{height:64rpx;margin-right:20rpx;width:64rpx}.page-box .module-box .black-box .help-row .r-left text{color:#1e1b19;font-size:28rpx}.page-box .module-box .black-box .help-row .r-left .l-info .name{color:#1e1b19;font-size:28rpx;line-height:40rpx;text-transform:none}.page-box .module-box .black-box .help-row .r-left .l-info .time{color:#c28c7b;font-size:24rpx;line-height:34rpx;width:380rpx}.page-box .module-box .black-box .help-row .r-right .icon{height:64rpx;margin-left:20rpx;width:64rpx}.page-box .module-box .black-box .help-row .r-right image{height:28rpx;margin-left:4rpx;width:28rpx}.dis{opacity:.5}.union-color{color:#e71842!important;margin-left:6rpx}
</style>
