<template>
<view class="groupAct">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="imgbox">
        <image class="top-bg" mode="widthFix" src="https://eshopfile.zhiyousx.com/2023032218445712781.jpg"></image>
        <image class="codeBg" mode="widthFix" src="https://eshopfile.zhiyousx.com/2023032110265421256.jpg"></image>
        <view class="infobox1">
            <view class="content">
                <text class="rule" @click="toRule($event)">规则详情></text>
                <view class="codebox" @click="openBoard($event)">
                    <view class="item p">{{carId[0]}}</view>
                    <view class="item a">{{carId[1]}}</view>
                    <view class="item b">{{carId[2]}}</view>
                    <view class="item c">{{carId[3]}}</view>
                    <view class="item d">{{carId[4]}}</view>
                    <view class="item e">{{carId[5]}}</view>
                    <view class="item f">{{carId[6]}}</view>
                    <view class="item g">{{carId[7]}}</view>
                </view>
                <view class="input-box">
                    <view class="notice" @click="openBoard($event)">
                        <image class="hand" mode="widthFix" src="https://eshopfile.zhiyousx.com/2023032218453158101.png"></image>点击输入车牌</view>
                    <view class="confirmbtn" @click="testCode($event)">确定</view>
                </view>
                <view class="couponbox">
                    <view class="coupon" v-for="(item, __i0__) in discount">
                        <image class="" mode="widthFix" :src="item.discountImg"></image>
                        <view class="btn dis" v-if="noCarcode">请输入车牌</view>
                        <view class="btn get" v-if="!noCarcode&&item.receiveState===0">立即领取</view>
                        <view class="btn use" v-if="!noCarcode&&item.receiveState===1">去使用</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <image class="codeBg" mode="widthFix" src="https://eshopfile.zhiyousx.com/2023032118242369087.jpg"></image>
    <view class="swiperFlexBox">
        <view class="swiperBox" v-for="(item, __i1__) in pictures">
            <view class="swiper">
                <u-swiper bgColor="rgba(0,0,0,0)" borderRadius="0" class="" height="480" imgMode="aspectFill" indicatorActiveColor="rgba(0,0,0,0)" indicatorColor="rgba(0,0,0,0)" interval="3000" :list="item.list" name="url"></u-swiper>
            </view>
            <image class="borderimg" mode="widthFix" :src="item.border"></image>
            <view class="todetail"></view>
        </view>
    </view>
    <image class="codeBg" mode="widthFix" src="https://eshopfile.zhiyousx.com/2023032112164369399.jpg"></image>
    <u-keyboard cancelText="收起" class=" vue-ref" ref="uKeyboard" :mask="false" mode="car" :safeAreaInsetBottom="true" tips="车牌号" :value="showCarBoard" @backspace="backspace()" @change="valChange()" @input="showCarBoard = $event"></u-keyboard>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              carId: "",
              showCarBoard: !1,
              noCarcode: !0,
              pictures: [{
                border: "https://eshopfile.zhiyousx.com/2023032218420370542.png",
                list: [{
                  url: "https://eshopfile.zhiyousx.com/2023032117475719046.jpg"
                }, {
                  url: "https://eshopfile.zhiyousx.com/2023032117481703269.jpg"
                }],
                target: "1516616676576112642"
              }, {
                border: "https://eshopfile.zhiyousx.com/2023032218423342141.png",
                list: [{
                  url: "https://eshopfile.zhiyousx.com/2023032117484683627.jpg"
                }, {
                  url: "https://eshopfile.zhiyousx.com/2023032117490436364.jpg"
                }],
                target: "1320579064720941167"
              }, {
                border: "https://eshopfile.zhiyousx.com/2023032218424890598.png",
                list: [{
                  url: "https://eshopfile.zhiyousx.com/2023032117521624493.jpg"
                }, {
                  url: "https://eshopfile.zhiyousx.com/2023032117523292166.jpg"
                }],
                target: "1320579064188264533"
              }, {
                border: "https://eshopfile.zhiyousx.com/2023032218430932745.png",
                list: [{
                  url: "https://eshopfile.zhiyousx.com/2023032118071768442.jpg"
                }, {
                  url: "https://eshopfile.zhiyousx.com/2023032118075345647.jpg"
                }],
                target: "1320579064188264532"
              }, {
                border: "https://eshopfile.zhiyousx.com/2023032218434225545.png",
                list: [{
                  url: "https://eshopfile.zhiyousx.com/2023032118100087419.jpg"
                }, {
                  url: "https://eshopfile.zhiyousx.com/2023032118101125047.jpg"
                }],
                target: "1320579064188264534"
              }, {
                border: "https://eshopfile.zhiyousx.com/2023032218442051357.png",
                list: [{
                  url: "https://eshopfile.zhiyousx.com/2023032118123485361.jpg"
                }, {
                  url: "https://eshopfile.zhiyousx.com/2023032118124996994.jpg"
                }],
                target: "1320579064188264473"
              }, {
                border: "https://eshopfile.zhiyousx.com/2023032218443547780.png",
                list: [{
                  url: "https://eshopfile.zhiyousx.com/2023032118130301316.jpg"
                }, {
                  url: "https://eshopfile.zhiyousx.com/2023032118131962014.jpg"
                }],
                target: "1386632358110769153"
              }],
              discount: [{
                discountImg: "https://eshopfile.zhiyousx.com/2023032111362962757.png",
                receiveState: 0,
                couponId: "1638001233153957889",
                quta: "10",
                cond: "100"
              }, {
                discountImg: "https://eshopfile.zhiyousx.com/2023032111365114426.png",
                receiveState: 0,
                couponId: "1638006030059782146",
                quta: "20",
                cond: "200"
              }, {
                discountImg: "https://eshopfile.zhiyousx.com/2023032111370779994.png",
                receiveState: 0,
                couponId: "1638006973172228097",
                quta: "40",
                cond: "500"
              }, {
                discountImg: "https://eshopfile.zhiyousx.com/2023032111375960921.png",
                receiveState: 0,
                couponId: "1638007690679230466",
                quta: "30",
                cond: "0"
              }, {
                discountImg: "https://eshopfile.zhiyousx.com/2023032111381741649.png",
                receiveState: 0,
                couponId: "1638009615142645762",
                quta: "150",
                cond: "0"
              }, {
                discountImg: "https://eshopfile.zhiyousx.com/2023032111382958938.png",
                id: 0,
                receiveState: 0,
                couponId: "1638008277998530562",
                quta: "20",
                cond: "0"
              }]
            }
          },
          onLoad: function() {},
          onShow: function() {
            this.getCarNumber(), this.userInfo && this.getCoupoonStatus(this.discount)
          },
          onShareAppMessage: function() {
            return {
              title: "@新能源车主，快来领取你的专属春游福利",
              imageUrl: "https://eshopfile.zhiyousx.com/2023032118473921133.jpg"
            }
          },
          onShareTimeline: function() {
            return {
              title: "@新能源车主，快来领取你的专属春游福利",
              imageUrl: "https://eshopfile.zhiyousx.com/2023032118473921133.jpg",
              query: ""
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            valChange: function(t) {
              if (0 == this.carId.length && !new RegExp("^([一-龥])$").test(t)) return void this.$uni.showToast("第1位需填入区域名称");
              if ((1 == this.carId.length || 2 == this.carId.length) && !new RegExp("^([a-zA-Z])$").test(t)) return void this.$uni.showToast("第2、3位需填入字母");
              if (this.carId.length > 3 && new RegExp("^([一-龥])$").test(t)) return void this.$uni.showToast("此处不可填入汉字");
              8 != this.carId.length && (this.carId += t)
            },
            usecoupon: function(t) {
              this.$navigateTo({
                url: "/subPage/pages/discountsProductList/discountsProductList?couponId=".concat(t.couponId, "&threshold=").concat(t.cond, "&quota=").concat(t.quta, "&type=2")
              })
            },
            toRule: function() {
              this.$navigateTo({
                url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent("https://yxh5.zhiyousx.com/yxH5/show?id=169")
              })
            },
            routerTo: function(t) {
              this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + t
              })
            },
            backspace: function() {
              this.carId && (this.carId = this.carId.substr(0, this.carId.length - 1))
            },
            testCode: function() {
              if (this.$util.isLogin())
                if (this.noCarcode) {
                  if (!new RegExp("^([一-龥][a-zA-Z](([ADF](?![IO])[A-Z0-9][0-9]{4})|([0-9]{5}[DF])))$").test(this.carId)) return this.$uni.showToast("车牌格式有误，请重新输入"), !1;
                  this.setCarNumber()
                } else this.$uni.showToast("您已提交过车牌号码")
            },
            openBoard: function() {
              if (this.$util.isLogin()) {
                if (!this.noCarcode) return void this.$uni.showToast("您已经提交过车牌咯~");
                this.showCarBoard = !0
              }
            },
            getCarNumber: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/memberCar/selectMemberCar").then((function(o) {
                1 === o.code && o.data && (t.carId = o.data.carNumber || "", t.noCarcode = !o.data.carNumber)
              }))
            },
            setCarNumber: function() {
              var t = this;
              this.noCarcode ? this.$uniApi.dataRequestNoLoading("post", "manager/app/v1/memberCar/saveMemberCar", {
                carNumber: this.carId
              }).then((function(o) {
                1 === o.code && (t.noCarcode = !1, t.$uni.showToast("提交成功~ 快去领取优惠券吧"))
              })) : this.$uni.showToast("您已经提交过车牌咯~")
            },
            getCouponRequest: function(o) {
              var e = this;
              uni.showLoading({
                title: "领取中",
                mask: !0
              }), this.$uniApi.dataRequestNoLoading("post", "product/app/v1/CouponReceive/receiveCoupon", {
                couponId: o
              }).then((function(i) {
                uni.hideLoading(), 0 == i.code && e.$uni.showToast("已领取" == i.msg ? "已领取" : "已抢光"), 1 === i.code && (e.discount.forEach((function(t) {
                  t.couponId == o && (t.receiveState = 1)
                })), e.$uni.showToast("领取成功"))
              }))
            },
            getCoupoonStatus: function(t) {
              var o = this;
              t.forEach((function(t) {
                o.$uniApi.dataRequestNoLoading("get", "product/app/v1/coupon/getCouponState?couponId=" + t.couponId).then((function(o) {
                  1 === o.code && 1 == o.data.receiveState && 1 == o.data.couponState && (t.receiveState = 1)
                }))
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
image{vertical-align:bottom;width:100%}.groupAct .imgbox{display:-webkit-flex;display:flex;flex-direction:column;position:relative}.groupAct .imgbox .infobox1{bottom:0;height:1158rpx;left:0;position:absolute;width:100%}.groupAct .imgbox .infobox1 .content{height:100%;padding:110rpx 50rpx 0;position:relative;width:100%}.groupAct .imgbox .infobox1 .content .rule{border-bottom:1px solid silver;color:#abaaaa;font-size:28rpx;font-weight:600;position:absolute;right:40rpx;top:30rpx}.groupAct .imgbox .infobox1 .codebox{display:-webkit-flex;display:flex;height:160rpx;position:relative;width:650rpx}.groupAct .imgbox .infobox1 .codebox .item{font-size:70rpx;font-weight:700;height:75rpx;line-height:76rpx;position:absolute;text-align:center;top:8rpx;transform:scaleY(2);transform-origin:top center;width:70rpx}.groupAct .imgbox .infobox1 .codebox .item.p{font-size:58rpx;left:8rpx}.groupAct .imgbox .infobox1 .codebox .item.a{left:84rpx}.groupAct .imgbox .infobox1 .codebox .item.b{left:190rpx}.groupAct .imgbox .infobox1 .codebox .item.c{left:268rpx}.groupAct .imgbox .infobox1 .codebox .item.d{left:340rpx}.groupAct .imgbox .infobox1 .codebox .item.e{left:416rpx}.groupAct .imgbox .infobox1 .codebox .item.f{left:494rpx}.groupAct .imgbox .infobox1 .codebox .item.g{left:570rpx}.groupAct .imgbox .infobox1 .input-box{align-items:center;display:-webkit-flex;display:flex;height:120rpx;justify-content:space-between}.groupAct .imgbox .infobox1 .input-box .notice{align-items:center;color:#32b06c;display:-webkit-flex;display:flex;font-size:28rpx;font-weight:600;padding:40rpx 0}.groupAct .imgbox .infobox1 .input-box .notice .hand{margin-right:10rpx;width:30rpx}.groupAct .imgbox .infobox1 .input-box .confirmbtn{background:linear-gradient(180deg,#e8ffea,#87fc8e);border-radius:50rpx;color:#32b06c;font-weight:600;padding:10rpx 30rpx}.groupAct .imgbox .infobox1 .couponbox{height:520rpx;margin-top:120px}.groupAct .imgbox .infobox1 .couponbox .coupon{display:inline-block;height:240rpx;margin-bottom:15rpx;margin-right:36rpx;position:relative;width:190rpx}.groupAct .imgbox .infobox1 .couponbox .coupon:nth-child(3n){margin-right:0}.groupAct .imgbox .infobox1 .couponbox .coupon .btn{border-radius:20rpx;bottom:18rpx;font-size:24rpx;height:36rpx;left:15rpx;line-height:36rpx;position:absolute;text-align:center;width:160rpx}.groupAct .imgbox .infobox1 .couponbox .coupon .btn.dis{background:#e6e6e6;color:#848484}.groupAct .imgbox .infobox1 .couponbox .coupon .btn.get{background:linear-gradient(180deg,#fefaf1,#fedda6);color:#fe7e3f}.groupAct .imgbox .infobox1 .couponbox .coupon .btn.use{background:linear-gradient(180deg,#fcc239,#ff6749);color:#fff}.groupAct .carboard{font-size:32rpx;font-weight:700;height:400rpx;text-align:center;width:100%}.groupAct .swiperFlexBox{display:-webkit-flex;display:flex;flex-direction:column;margin-top:-1px}.groupAct .swiperBox{height:auto;position:relative;width:100%}.groupAct .swiperBox .swiper{bottom:22rpx;left:30rpx;position:absolute;width:690rpx}.groupAct .swiperBox .borderimg{pointer-events:none;position:relative;vertical-align:bottom;width:100%;z-index:2}.groupAct .swiperBox .todetail{bottom:0;height:60rpx;position:absolute;right:20rpx;width:200rpx;z-index:3}
</style>
