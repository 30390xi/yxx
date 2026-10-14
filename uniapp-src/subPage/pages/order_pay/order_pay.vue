<template>
<view class="">
    <uni-navbar :backState="2000" class=" vue-ref" ref="navBar" :home="true" title="订单支付" type="fixed"></uni-navbar>
    <view class="pay">
        <image alt class="icon _img" src="https://eshopfile.zhiyousx.com/image/orderPay/sucess.png"></image>
        <view class="payPrice">{{'￥'+$root.f0}}</view>
        <view class="payText">支付成功，等待系统出票</view>
        <view class="sub-payText" v-if="isSpecial!=1">系统将在30分钟内返回出票结果</view>
        <view class="sub-payText" v-if="isSpecial!=1">若出票失败，将自动为您退款</view>
        <view class="hotelText" v-if="isSpecial==1">酒店预计在2小时内确认订单，请耐心等待</view>
        <view class="hotelBtn" v-if="guideCopywriting&&subscribeType==1" @click="jumpToGear($event)">{{guideCopywriting}}</view>
        <view class="subtext">请前往订单详情页查看出票结果</view>
        <view class="btn">
            <button class="payBtn" @click="ticketNotice('index')">返回首页</button>
            <button class="payBtn" @click="ticketNotice('order')">查看订单</button>
        </view>
    </view>
    <u-popup class=" vue-ref" ref="uPopup" :maskCloseAble="true" mode="center" :value="showGiftBag" :vueSlots="['default']" @input="showGiftBag = $event">
        <view class="giftBag">
            <view class="title-bar" :style="'background-image:'+'url('+giftBagData.giftBagImage+')'+';'">
                <view class="phone-style">
                    <view class="title-style">{{giftBagData.orderActivePrize.prizeDesc}}</view>
                </view>
            </view>
            <view class="gift-mid">
                <scroll-view class="card-box" :scrollY="true" :style="'height:'+(gbCl>3?'604rpx':gbCl==1?'255rpx':gbCl*151+'rpx')+';'">
                    <view class="" v-if="giftBagData.orderActivePrize&&giftBagData.orderActivePrize.giftBag">
                        <view :class="['',gbCl==1?'candItem1':'',gbCl>1?'candItem':'']" v-for="(it, i) in $root.l0">
                            <image mode class="it-img1" src="https://eshopfile.zhiyousx.com/166384545957301610.png" v-if="gbCl>1&&i==0"></image>
                            <image mode class="it-img2" src="https://eshopfile.zhiyousx.com/166384386610789834.png" v-if="gbCl>1&&i>0&&i<gbCl-1"></image>
                            <image mode class="it-img3" src="https://eshopfile.zhiyousx.com/166384545957301610.png" v-if="gbCl>1&&gbCl-i==1"></image>
                            <view class="item-card-box">
                                <view class="left">
                                    <image class="" mode="aspectFill" :src="it.couponImage"></image>
                                    <view class="info">
                                        <view class="name multilineText2">{{ it.couponName }}</view>
                                        <view class="time">{{ it.f1+' -\n\t\t\t\t\t\t\t\t\t\t\t'+it.f2 }}</view>
                                    </view>
                                </view>
                                <view class="right">
                                    <view class="price" v-if="it.type==3">0<text class="" style="font-size:20rpx;color:#FF4848;">元购</text>
                                    </view>
                                    <view class="price" v-else>
                                        <text class="" style="font-size:20rpx;color:#FF4848;">￥</text>{{it.quota+''}}</view>
                                    <view class="tips" v-if="it.type==2&&it.threshold==0">无门槛</view>
                                    <view class="tips" v-if="it.type==1&&it.threshold>0">{{'满'+it.threshold+'元可用'}}</view>
                                    <view class="tips" v-if="it.type==3">{{'可抵'+(it.deduction||1)+'张'}}</view>
                                </view>
                            </view>
                        </view>
                        <view class="" style="height:110rpx;" v-if="gbCl>1"></view>
                    </view>
                </scroll-view>
                <image mode class="giftBag-bottom-img" src="https://eshopfile.zhiyousx.com/170547277021934819.png"></image>
                <view class="giftBag-but" @click="closeGiftPack($event)">我知道了</view>
                <view class="box-tip" @click="goDiscounts($event)">可至"我的"-"优惠券"中查看 ></view>
            </view>
        </view>
    </u-popup>
    <view :class="['red-packets-Box','',animationType>0?'b1':'']" :hidden="!showPacketBox" :style="'background:'+(animationType==0?'rgba(0, 0, 0, 0.7)':'')+';'">
        <view :class="['red-box','',animationType==0?'a0':'',animationType==1?'a1':'',animationType>1&&animationType<3?'a2':'',animationType==4?'a4':'']" @click="closeBox()">
            <view class="red-box-imgBox">
                <image mode class="red-img" src="https://eshopfile.zhiyousx.com/170566204561167235.png" v-if="animationType<3"></image>
                <image mode :class="['red-top','',animationType==3?'a3':'']" src="https://eshopfile.zhiyousx.com/166375879186329370.png"></image>
                <image mode :class="['red-bottom','',animationType==3?'a31':'']" src="https://eshopfile.zhiyousx.com/170566207043928788.png"></image>
                <image mode :class="['red-img1-1','',animationType==3?'a32s':'']" src="https://eshopfile.zhiyousx.com/166383758911999357.png"></image>
                <image mode :class="['red-img1-2','',animationType==3?'a32m':'']" src="https://eshopfile.zhiyousx.com/166383762954099488.png"></image>
                <image mode :class="['red-img1-3','',animationType==3?'a32l':'']" src="https://eshopfile.zhiyousx.com/166383764742027825.png"></image>
                <image mode :class="['red-img2','',animationType==3?'a33':'']" src="https://eshopfile.zhiyousx.com/166376006214008240.png"></image>
                <image mode :class="['red-img3','',animationType==3?'a34':'']" src="https://eshopfile.zhiyousx.com/166376009989063829.png"></image>
            </view>
        </view>
    </view>
    <u-popup class="" :maskCloseAble="true" mode="center" :value="giftPhone" :vueSlots="['default']" @input="giftPhone = $event">
        <view class="title-bar" :style="'background-image:'+'url('+giftBagData.giftBagImage+')'+';'">
            <view class="phone-style">
                <view class="title-style">{{giftBagData.orderActivePrize.prizeDesc}}</view>
            </view>
        </view>
        <view class="gift-content">
            <view class="gift-box max-h">
                <view class="within-box">
                    <image class="phoneImg" mode="aspectFit" :src="giftBagData.orderActivePrize.prizeImage"></image>
                    <scroll-view class="yello" :scrollY="true" style="height:500rpx;">
                        <u-form class="" labelPosition="top" :model="form" :vueSlots="['default']">
                            <u-form-item class="" label="输入姓名" labelPosition="top" prop="name" :vueSlots="['default']">
                                <u-input class="" :clearable="false" height="58" :placehod="placehod" placeholderStyle="color: '#9B9B9B'; padding-left: '10rpx'" :value="form.name" @input="form.name = $event"></u-input>
                            </u-form-item>
                            <u-form-item class="" label="输入手机号" labelPosition="top" prop="phone" :vueSlots="['default']">
                                <u-input class="" :clearable="false" height="58" :placehod="placehod" placeholderStyle="color: '#9B9B9B'; padding-left: '10rpx'" :value="form.phone" @input="form.phone = $event"></u-input>
                            </u-form-item>
                            <u-form-item class="" label="收货地址" labelPosition="top" prop="address" :vueSlots="['default']">
                                <u-input class="" :clearable="false" height="58" :placehod="placehod" placeholderStyle="color: '#9B9B9B'; padding-left: '10rpx'" :value="form.address" @input="form.address = $event"></u-input>
                            </u-form-item>
                            <view class="prompt">{{ giftBagData.orderActivePrize.prizeUseDesc }}</view>
                        </u-form>
                        <view class="empty-box _div"></view>
                    </scroll-view>
                </view>
                <view class="footer">
                    <view class="btn">
                        <view class="btn-style" @click="sure($event)">确定</view>
                    </view>
                    <view class="active" v-if="activeRule" @click="goActive($event)">活动规则</view>
                </view>
            </view>
        </view>
    </u-popup>
    <u-popup class="" :maskCloseAble="true" mode="center" :value="giftMoney" :vueSlots="['default']" @input="giftMoney = $event">
        <view class="title-bar" :style="'background-image:'+'url('+giftBagData.giftBagImage+')'+';'">
            <view class="title">{{giftBagData.orderActivePrize.prizeDesc}}</view>
        </view>
        <view class="gift-content">
            <view class="gift-box min-h">
                <view class="within-box">
                    <image class="img" mode="aspectFit" :src="giftBagData.orderActivePrize.prizeImage"></image>
                    <view class="illustrate">{{giftBagData.orderActivePrize.prizeUseDesc}}</view>
                </view>
                <view class="footer">
                    <view class="btn">
                        <view class="btn-style" @click="closeGiftPack($event)">知道了</view>
                    </view>
                    <view class="active" v-if="activeRule" @click="goActive($event)">活动规则</view>
                </view>
            </view>
        </view>
    </u-popup>
    <u-popup class="" :maskCloseAble="true" mode="center" :value="noGift" :vueSlots="['default']" @input="noGift = $event">
        <view class="title-bar" :style="'background-image:'+'url('+giftBagData.giftBagImage+')'+';'">
            <view class="title">{{giftBagData.orderActivePrize.prizeDesc}}</view>
        </view>
        <view class="gift-content">
            <view class="gift-box min-h">
                <view class="within-box">
                    <image class="img" mode="aspectFit" :src="giftBagData.orderActivePrize.prizeImage"></image>
                </view>
                <view class="footer">
                    <view class="btn">
                        <view class="btn-style" @click="closeGiftPack($event)">再接再厉</view>
                    </view>
                    <view class="active" v-if="activeRule" @click="goActive($event)">活动规则</view>
                </view>
            </view>
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
              count: 0,
              guideCopywriting: "",
              subscribeType: null,
              isSpecial: 0,
              showGiftBag: !1,
              giftBagData: {},
              gbCl: 0,
              animationType: 0,
              audio: t.createInnerAudioContext(),
              openAudio: " https://eshopfile.zhiyousx.com/ysx/openBox.m4a",
              beforeAudio: "https://eshopfile.zhiyousx.com/ysx/wobGold.mp3",
              newOpen: "https://eshopfile.zhiyousx.com/ysx/newOpen.mp3",
              showPacketBox: !1,
              form: {
                name: "",
                phone: "",
                address: ""
              },
              giftPhone: !1,
              placehod: "",
              orderActiveRecordId: "",
              noGift: !1,
              giftMoney: !1,
              orderType: "",
              activeRule: ""
            }
          },
          onLoad: function(t) {
            this.guideCopywriting = t.guideCopywriting, this.isSpecial = t.isSpecial, this.subscribeType = t.subscribeType, t.count ? this.count = t.count : this.count = 0, this._from = t.type, this._orderId = t.orderId, this._itemId = t.itemId, this.orderType = t.orderType, this.getGiftBagForOrder(), this.audio.loop = !0, this.audio.src = this.beforeAudio
          },
          onUnload: function() {
            this.audio.stop(), this.audio.destroy()
          },
          filters: {
            toFixed2: function(t) {
              return t ? Number(t).toFixed(2) : "0.00"
            },
            timeFormat: function(t) {
              return t.split(" ")[0].replace(/-/g, ".")
            }
          },
          methods: {
            openRedBox: function() {
              var t = this;
              this.audio.stop(), this.audio.loop = !1, this.animationType = 1, this.audio.src = this.newOpen, this.audio.play(), setTimeout((function() {
                t.animationType = 2
              }), 1e3), setTimeout((function() {
                t.animationType = 3
              }), 2e3), setTimeout((function() {
                1 == t.giftBagData.orderActivePrize.prizeType ? t.showGiftBag = !0 : 2 == t.giftBagData.orderActivePrize.prizeType ? t.giftMoney = !0 : 3 == t.giftBagData.orderActivePrize.prizeType ? t.giftPhone = !0 : t.noGift = !0
              }), 3200), setTimeout((function() {
                t.animationType = 4
              }), 3500), setTimeout((function() {
                t.showPacketBox = !1
              }), 4500)
            },
            goActive: function() {
              if (this.activeRule) {
                var e = this.activeRule; - 1 != e.indexOf("?") && (e = (e = e.replace("?", "*")).replace("=", "+")), uni.navigateTo({
                  url: "/pages/webpage/webpage?url=".concat(e)
                })
              }
            },
            sure: function() {
              var t = this;
              if (!this.form.name) return this.$uni.showToast("请填写姓名");
              if (!this.form.phone) return this.$uni.showToast("请填写手机号");
              if (!/^1[23456789]\d{9}$/.test(this.form.phone)) return this.$uni.showToast("请填写正确手机号");
              if (!this.form.address) return this.$uni.showToast("请填写地址");
              var e = this.form,
                i = {
                  contactName: e.name,
                  contactMobile: e.phone,
                  address: e.address,
                  orderActiveRecordId: this.orderActiveRecordId
                };
              this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/orderActive/updateContactInfo", i).then((function(e) {
                1 == e.code && t.$uni.showToast("提交成功，奖品将于订单使用后尽快安排发出")
              })).catch((function(t) {})).finally((function() {
                t.giftPhone = !1
              }))
            },
            closeGiftPack: function() {
              1 == this.giftBagData.orderActivePrize.prizeType ? this.showGiftBag = !1 : 2 == this.giftBagData.orderActivePrize.prizeType ? this.giftMoney = !1 : this.noGift = !1, this.audio.stop(), this.audio.destroy()
            },
            goOrder: function() {
              "ticket" == this._from ? this.$navigateTo({
                url: "/subPage/pages/orderDetailtick/orderDetailtick?orderId=" + this._orderId
              }) : this.$navigateTo({
                url: "/pages/myorder/myorder?type=0"
              })
            },
            jumpToGear: function() {
              this.$navigateTo({
                url: "/subPage/pages/snowGear/snowGear?orderId=" + this._orderId
              })
            },
            onBackHome: function() {
              uni.switchTab({
                url: "/pages/index/index"
              })
            },
            jumpType: function(t) {
              "index" == t ? this.onBackHome() : "order" == t && this.goOrder()
            },
            ticketNotice: function(t) {
              this.jumpType(t)
            },
            getGiftBagForOrder: function() {
              var t = this;
              if (this._orderId) {
                var e = {
                  orderType: this.orderType
                };
                1 == this.orderType ? e.orderId = this._orderId : e.groupOrderId = this._orderId, this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/orderActive/lottery", e).then((function(e) {
                  e.data && e.data.orderActivePrize && (t.giftBagData = e.data, t.activeRule = e.data.activeRule, 1 == e.data.orderActivePrize.prizeType ? t.gbCl = e.data.orderActivePrize.giftBag.giftBagCouponList.length : t.gbCl = 0, 3 == e.data.orderActivePrize.prizeType && (t.orderActiveRecordId = e.data.orderActiveRecordId), t.showPacketBox = !0, t.openRedBox())
                }))
              }
            },
            receiveGiftBag: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftBag/receive/" + this.giftBagData.giftBagId + "?orderId=" + this._orderId).then((function(e) {
                1 === e.code || t.$uni.showToast(e.msg)
              }))
            },
            closeBox: function() {
              0 == this.animationType && (this.showPacketBox = !1, this.audio.stop(), this.audio.destroy())
            },
            goDiscounts: function() {
              this.safeRouter("/subPage/pages/myDiscounts/myDiscounts")
            },
            safeRouter: function(t) {
              this.$util.isLogin(t) && this.$navigateTo({
                url: t
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.pay{align-items:center;background:#fff;display:-webkit-flex;display:flex;flex-direction:column;font-family:Source Han Sans CN-Regular,Source Han Sans CN;font-weight:400;line-height:1;min-height:100vh;padding-top:183rpx}.pay .icon{height:120rpx;margin-bottom:40rpx;width:120rpx}.pay .payText{color:#333;font-size:32rpx;line-height:48rpx;margin-bottom:10rpx;margin-top:20rpx}.pay .payPrice{color:#333;font-size:50rpx;line-height:75rpx}.pay .sub-payText{color:#999;font-size:24rpx;line-height:36rpx}.pay .subtext{color:#777;font-size:24rpx;line-height:36rpx;margin-top:60rpx}.pay .hotelText{color:#777;font-size:26rpx;margin-top:10rpx}.pay .hotelBtn{word-wrap:break-word;background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:40rpx;color:#fff;font-size:26rpx;height:80rpx;line-height:80rpx;margin-top:78rpx;text-align:center;width:540rpx;word-break:break-all}.pay .btn{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:20rpx;width:540rpx}.pay .btn .payBtn{background-color:#fff;border:1px solid #aaa;border-radius:40rpx;font-size:26rpx;height:80rpx;line-height:78rpx;width:250rpx}.pay .btn .payBtn:last-child{color:#ff5411}.giftBag{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center}.giftBag .giftBag-img{position:relative;width:750rpx;z-index:3}.giftBag .gift-mid{background:linear-gradient(0deg,#ff3329,#ff7f56);border-radius:0 0 60rpx 60rpx;height:auto;margin-top:-57rpx;overflow:hidden;padding:35rpx 20rpx 150rpx;position:relative;width:590rpx;z-index:2}.giftBag .gift-mid .gift-title{color:#fff;font-size:36rpx;font-weight:600;line-height:40rpx;margin-bottom:16rpx;margin-top:46rpx;text-align:center;text-shadow:0 2rpx 4rpx rgba(87,19,0,.4);width:100%}.giftBag .gift-mid .card-box{background:#db4821;border-radius:20rpx;margin-top:53rpx;max-height:604rpx;padding:23rpx 0 0;width:550rpx}.giftBag .gift-mid .card-box .candItem{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:151rpx;justify-content:center;margin:auto;position:relative;width:546rpx}.giftBag .gift-mid .card-box .candItem:not(:nth-last-child(2))::after{background-image:linear-gradient(90deg,#af9060,#af9060 50%,#fffbe9 0);background-repeat:repeat-x;background-size:12rpx 2rpx;bottom:-2rpx;content:"";height:2px;left:14rpx;position:absolute;width:519rpx}.giftBag .gift-mid .card-box .candItem .it-img1,.giftBag .gift-mid .card-box .candItem .it-img2{height:151rpx;width:523rpx}.giftBag .gift-mid .card-box .candItem .it-img3{height:151rpx;transform:rotate(180deg);width:523rpx}.giftBag .gift-mid .card-box .item-card-box{display:-webkit-flex;display:flex;height:151rpx;justify-content:space-between;left:0;position:absolute;top:0;width:546rpx}.giftBag .gift-mid .card-box .item-card-box .left{display:-webkit-flex;display:flex;margin-left:23rpx}.giftBag .gift-mid .card-box .item-card-box .left image{background:#af9060;border-radius:10rpx;height:104rpx;margin-top:23rpx;min-height:104rpx;min-width:104rpx;width:104rpx}.giftBag .gift-mid .card-box .item-card-box .left .info{display:-webkit-flex;display:flex;flex-direction:column;height:90rpx;justify-content:space-between;margin-left:13rpx;margin-top:30rpx;width:270rpx}.giftBag .gift-mid .card-box .item-card-box .left .info .name{color:#282828;font-size:24rpx;font-weight:500;line-height:26rpx}.giftBag .gift-mid .card-box .item-card-box .left .info .time{color:#8b8b8b;font-size:16rpx;line-height:16rpx}.giftBag .gift-mid .card-box .item-card-box .right{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:90rpx;justify-content:space-between;margin-right:40rpx;margin-top:30rpx}.giftBag .gift-mid .card-box .item-card-box .right .price{color:#ff4848;font-size:42rpx;font-weight:500;line-height:42rpx;white-space:nowrap}.giftBag .gift-mid .card-box .item-card-box .right .tips{color:#8b8b8b;font-size:16rpx;line-height:16rpx;white-space:nowrap}.giftBag .gift-mid .card-box .candItem1{background:#fffbe9;border-radius:10rpx;display:-webkit-flex;display:flex;height:150rpx;justify-content:space-between;margin:auto;position:relative;width:544rpx}.giftBag .gift-mid .giftBag-bottom-img{bottom:-5rpx;height:251rpx;left:-7rpx;position:absolute;width:597rpx}.giftBag .gift-mid .giftBag-but{background:linear-gradient(180deg,#fff6e9,#ffab73);border-radius:40rpx;bottom:65rpx;box-shadow:0 4rpx 8rpx 0 rgba(87,19,0,.4);color:#e52121;font-size:30rpx;font-weight:500;height:80rpx;left:135rpx;line-height:80rpx;position:absolute;text-align:center;width:360rpx}.giftBag .gift-mid .box-tip{bottom:18rpx;color:#ffc7aa;font-size:24rpx;left:-5rpx;position:absolute;text-align:center;width:100%} .u-mode-center-box{background-color:initial!important}.red-packets-Box{height:100%;left:0;pointer-events:none;position:fixed;top:0;width:100%}.red-packets-Box .red-box{height:100%;pointer-events:auto;position:fixed;width:100%}.red-packets-Box .red-box .red-box-imgBox,.red-packets-Box .red-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center}.red-packets-Box .red-box .red-box-imgBox{position:relative}.red-packets-Box .red-box .red-box-imgBox .red-top{height:261rpx;margin-bottom:-75rpx;margin-left:5rpx;opacity:0;position:relative;width:522rpx;z-index:5}.red-packets-Box .red-box .red-box-imgBox .red-bottom{height:365rpx;opacity:0;position:relative;width:646rpx;z-index:5}.red-packets-Box .red-box .red-box-imgBox .red-img{height:495rpx;position:absolute;width:552rpx;z-index:10}.red-packets-Box .red-box .red-box-imgBox .red-img1{height:321rpx;margin-bottom:50rpx;margin-left:10rpx;opacity:0;position:absolute;width:457rpx;z-index:1}.red-packets-Box .red-box .red-box-imgBox .red-img1-1{height:321rpx;margin-bottom:50rpx;margin-left:10rpx;opacity:0;position:absolute;width:129rpx;z-index:1}.red-packets-Box .red-box .red-box-imgBox .red-img1-2{height:321rpx;margin-bottom:50rpx;margin-left:10rpx;opacity:0;position:absolute;width:300rpx;z-index:1}.red-packets-Box .red-box .red-box-imgBox .red-img1-3{height:321rpx;margin-bottom:50rpx;margin-left:10rpx;opacity:0;position:absolute;width:457rpx;z-index:1}.red-packets-Box .red-box .red-box-imgBox .red-img2{height:463rpx;opacity:0;position:absolute;width:540rpx;z-index:9}.red-packets-Box .red-box .red-box-imgBox .red-img3{height:275rpx;opacity:0;position:absolute;width:558rpx;z-index:9}.red-packets-Box .red-box .red-box-imgBox .red-name{bottom:-50rpx;color:#fff;font-size:30rpx;height:85rpx;letter-spacing:10rpx;padding:30rpx;position:absolute;text-align:center;text-shadow:0 0 1rpx #ffe2cb,1rpx 0 2rpx #ffe2cb,-1rpx 0 2rpx #ffe2cb,1rpx 0 5rpx #ffe2cb,-1rpx 0 10rpx #ffe2cb;width:100%}@-webkit-keyframes zy-data-v-3a55a765{10%{transform:rotate(15deg)}20%{transform:rotate(-10deg)}30%{transform:rotate(5deg)}40%{transform:rotate(-5deg)}100%,50%{transform:rotate(0deg)}}@keyframes zy-data-v-3a55a765{10%{transform:rotate(15deg)}20%{transform:rotate(-10deg)}30%{transform:rotate(5deg)}40%{transform:rotate(-5deg)}100%,50%{transform:rotate(0deg)}}.red-packets-Box .a0{animation:zy-data-v-3a55a765 2.7s linear .5s infinite}.red-packets-Box .a1{animation-duration:1s;animation-fill-mode:both;animation-iteration-count:1;animation-name:start-data-v-3a55a765;transform-origin:center center}.red-packets-Box .a2{animation-duration:.5s;animation-fill-mode:both;animation-iteration-count:infinite;animation-name:upAnimation-data-v-3a55a765;animation-timing-function:cubic-bezier(.57,.25,.34,.88);transform-origin:center center}.red-packets-Box .a3{animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open-data-v-3a55a765;animation-timing-function:ease-out;transform-origin:center center}.red-packets-Box .a4{animation-duration:1s;animation-fill-mode:both;animation-iteration-count:1;animation-name:openOver-data-v-3a55a765;animation-timing-function:ease-out;transform-origin:center center}.red-packets-Box .a31{animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open1-data-v-3a55a765;animation-timing-function:ease-out;transform-origin:center center}.red-packets-Box .a32s{animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open2s-data-v-3a55a765;animation-timing-function:linear}.red-packets-Box .a32m,.red-packets-Box .a32s{animation-duration:1s;transform-origin:center center}.red-packets-Box .a32m{animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open2m-data-v-3a55a765;animation-timing-function:linear}.red-packets-Box .a32l{animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open2l-data-v-3a55a765;animation-timing-function:linear;transform-origin:center center}.red-packets-Box .a33{animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open3-data-v-3a55a765;animation-timing-function:ease-out}.red-packets-Box .a33,.red-packets-Box .a34{animation-duration:1s;transform-origin:center center}.red-packets-Box .a34{animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open4-data-v-3a55a765;animation-timing-function:ease-out}@-webkit-keyframes openOver-data-v-3a55a765{0%{opacity:1}100%{opacity:0}}@keyframes openOver-data-v-3a55a765{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes start-data-v-3a55a765{0%{transform:scale(1.2) translate(2rpx,2rpx)}3%{transform:scale(1.15) translate(0rpx)}5%{transform:scale(1.1) translate(-2rpx,-2rpx)}10%{transform:scale(1.05) translate(2rpx,2rpx)}15%{transform:scale(1) translate(-2rpx,-2rpx)}20%{transform:scale(.95) translate(2rpx,2rpx)}25%{transform:scale(.9) translate(-2rpx,-2rpx)}30%{transform:scale(.86) translate(2rpx,2rpx)}35%{transform:scale(.81) translate(-2rpx,-2rpx)}40%{transform:scale(.78) translate(2rpx,2rpx)}45%{transform:scale(.75) translate(-2rpx,-2rpx)}50%{transform:scale(.74) translate(2rpx,2rpx)}55%{transform:scale(.72) translate(-2rpx,-2rpx)}60%{transform:scale(.71) translate(2rpx,2rpx)}65%{transform:scale(.7) translate(-2rpx,-2rpx)}70%{transform:scale(.7) translate(2rpx,2rpx)}75%{transform:scale(.7) translate(-2rpx,-2rpx)}80%{transform:scale(.7) translate(2rpx,2rpx)}85%{transform:scale(.7) translate(-2rpx,-2rpx)}90%{transform:scale(.7) translate(-2rpx,-2rpx)}95%{transform:scale(.7) translate(2rpx,2rpx)}100%{transform:scale(.7) translate(2rpx,2rpx)}}@keyframes start-data-v-3a55a765{0%{transform:scale(1.2) translate(2rpx,2rpx)}3%{transform:scale(1.15) translate(0rpx)}5%{transform:scale(1.1) translate(-2rpx,-2rpx)}10%{transform:scale(1.05) translate(2rpx,2rpx)}15%{transform:scale(1) translate(-2rpx,-2rpx)}20%{transform:scale(.95) translate(2rpx,2rpx)}25%{transform:scale(.9) translate(-2rpx,-2rpx)}30%{transform:scale(.86) translate(2rpx,2rpx)}35%{transform:scale(.81) translate(-2rpx,-2rpx)}40%{transform:scale(.78) translate(2rpx,2rpx)}45%{transform:scale(.75) translate(-2rpx,-2rpx)}50%{transform:scale(.74) translate(2rpx,2rpx)}55%{transform:scale(.72) translate(-2rpx,-2rpx)}60%{transform:scale(.71) translate(2rpx,2rpx)}65%{transform:scale(.7) translate(-2rpx,-2rpx)}70%{transform:scale(.7) translate(2rpx,2rpx)}75%{transform:scale(.7) translate(-2rpx,-2rpx)}80%{transform:scale(.7) translate(2rpx,2rpx)}85%{transform:scale(.7) translate(-2rpx,-2rpx)}90%{transform:scale(.7) translate(-2rpx,-2rpx)}95%{transform:scale(.7) translate(2rpx,2rpx)}100%{transform:scale(.7) translate(2rpx,2rpx)}}@-webkit-keyframes upAnimation-data-v-3a55a765{0%{transform:scale(.7) translate(2rpx,2rpx)}10%{transform:scale(.7) translate(-2rpx,-2rpx)}20%{transform:scale(.7) translate(2rpx,2rpx)}30%{transform:scale(.7) translate(-2rpx,-2rpx)}40%{transform:scale(.7) translate(2rpx,2px)}50%{transform:scale(.7) translate(-2rpx,-2rpx)}60%{transform:scale(.7) translate(2rpx,2rpx)}70%{transform:scale(.7) translate(-2rpx,-2rpx)}80%{transform:scale(.7) translate(2rpx,2rpx)}90%{transform:scale(.7) translate(-2rpx,-2rpx)}100%{transform:scale(.7) translate(2rpx,2rpx)}}@keyframes upAnimation-data-v-3a55a765{0%{transform:scale(.7) translate(2rpx,2rpx)}10%{transform:scale(.7) translate(-2rpx,-2rpx)}20%{transform:scale(.7) translate(2rpx,2rpx)}30%{transform:scale(.7) translate(-2rpx,-2rpx)}40%{transform:scale(.7) translate(2rpx,2px)}50%{transform:scale(.7) translate(-2rpx,-2rpx)}60%{transform:scale(.7) translate(2rpx,2rpx)}70%{transform:scale(.7) translate(-2rpx,-2rpx)}80%{transform:scale(.7) translate(2rpx,2rpx)}90%{transform:scale(.7) translate(-2rpx,-2rpx)}100%{transform:scale(.7) translate(2rpx,2rpx)}}@-webkit-keyframes open-data-v-3a55a765{0%{opacity:0;transform:scale(.7) translate(0)}1%{opacity:1;transform:scale(.7) translate(0)}100%{opacity:1;transform:scale(1.2) translateY(-250rpx)}}@keyframes open-data-v-3a55a765{0%{opacity:0;transform:scale(.7) translate(0)}1%{opacity:1;transform:scale(.7) translate(0)}100%{opacity:1;transform:scale(1.2) translateY(-250rpx)}}@-webkit-keyframes open1-data-v-3a55a765{0%{opacity:0;transform:scale(.7) translate(0)}1%{opacity:1;transform:scale(.7) translate(0)}100%{opacity:1;transform:scale(1.2) translate(0)}}@keyframes open1-data-v-3a55a765{0%{opacity:0;transform:scale(.7) translate(0)}1%{opacity:1;transform:scale(.7) translate(0)}100%{opacity:1;transform:scale(1.2) translate(0)}}@-webkit-keyframes open2s-data-v-3a55a765{0%{filter:brightness(.7);opacity:1;transform:scale(.7) translate(0)}10%{filter:brightness(.8);opacity:1}20%{filter:brightness(.9)}40%{filter:brightness(1)}60%{filter:brightness(1.1)}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@keyframes open2s-data-v-3a55a765{0%{filter:brightness(.7);opacity:1;transform:scale(.7) translate(0)}10%{filter:brightness(.8);opacity:1}20%{filter:brightness(.9)}40%{filter:brightness(1)}60%{filter:brightness(1.1)}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@-webkit-keyframes open2m-data-v-3a55a765{0%{filter:brightness(.7);opacity:0;transform:scale(.7) translate(0)}24%{opacity:0}30%{filter:brightness(.9);opacity:1}40%{filter:brightness(1)}60%{filter:brightness(1.1)}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@keyframes open2m-data-v-3a55a765{0%{filter:brightness(.7);opacity:0;transform:scale(.7) translate(0)}24%{opacity:0}30%{filter:brightness(.9);opacity:1}40%{filter:brightness(1)}60%{filter:brightness(1.1)}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@-webkit-keyframes open2l-data-v-3a55a765{0%{filter:brightness(.7);opacity:0;transform:scale(.7) translate(0)}10%{filter:brightness(.8)}20%{filter:brightness(.9)}54%{filter:brightness(1);opacity:0}60%{filter:brightness(1.1);opacity:1}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@keyframes open2l-data-v-3a55a765{0%{filter:brightness(.7);opacity:0;transform:scale(.7) translate(0)}10%{filter:brightness(.8)}20%{filter:brightness(.9)}54%{filter:brightness(1);opacity:0}60%{filter:brightness(1.1);opacity:1}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@-webkit-keyframes open3-data-v-3a55a765{0%{filter:brightness(.5);opacity:0;transform:scale(.7) translate(0)}10%{filter:brightness(1);opacity:1}20%{filter:brightness(.8)}30%{filter:brightness(1.3)}40%{filter:brightness(.8)}50%{filter:brightness(1)}60%{filter:brightness(.6)}70%{filter:brightness(1.2)}80%{filter:brightness(.8)}90%{filter:brightness(1.1)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-250rpx)}}@keyframes open3-data-v-3a55a765{0%{filter:brightness(.5);opacity:0;transform:scale(.7) translate(0)}10%{filter:brightness(1);opacity:1}20%{filter:brightness(.8)}30%{filter:brightness(1.3)}40%{filter:brightness(.8)}50%{filter:brightness(1)}60%{filter:brightness(.6)}70%{filter:brightness(1.2)}80%{filter:brightness(.8)}90%{filter:brightness(1.1)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-250rpx)}}@-webkit-keyframes open4-data-v-3a55a765{0%{filter:brightness(.8);opacity:0;transform:scale(.7) translate(0)}10%{opacity:1}20%{filter:brightness(1)}40%{filter:brightness(.8)}60%{filter:brightness(1)}80%{filter:brightness(.8)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-250rpx)}}@keyframes open4-data-v-3a55a765{0%{filter:brightness(.8);opacity:0;transform:scale(.7) translate(0)}10%{opacity:1}20%{filter:brightness(1)}40%{filter:brightness(.8)}60%{filter:brightness(1)}80%{filter:brightness(.8)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-250rpx)}}.b1{animation-duration:4s;animation-fill-mode:both;animation-iteration-count:1;animation-name:bg-data-v-3a55a765}@-webkit-keyframes bg-data-v-3a55a765{0%{background-color:rgba(0,0,0,.5)}80%{background-color:rgba(0,0,0,.9)}93%{background-color:#fff}95%{background-color:#fff}100%{background-color:initial}}@keyframes bg-data-v-3a55a765{0%{background-color:rgba(0,0,0,.5)}80%{background-color:rgba(0,0,0,.9)}93%{background-color:#fff}95%{background-color:#fff}100%{background-color:initial}} .u-input__input{background:#fff;border-radius:10rpx;box-shadow:0rpx 2rpx 4rpx 0rpx rgba(0,0,0,.2);color:#9b9b9b!important;font-size:24rpx!important;margin-left:20rpx;padding-left:10rpx} .u-form-item--left__content__label{color:#b36600;font-size:24rpx;font-weight:600;height:23rpx;line-height:15rpx;margin-left:20rpx}.gift-content{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;margin-top:-64rpx;position:relative;width:750rpx}.gift-content .min-h{height:680rpx}.gift-content .max-h{height:860rpx}.gift-content .gift-box{background:linear-gradient(0deg,#ff3329,#ff7f56);border-radius:0rpx 0rpx 60rpx 60rpx;display:-webkit-flex;display:flex;justify-content:center;width:590rpx}.gift-content .gift-box .within-box{align-items:center;background-color:#e64630;border-radius:20rpx;display:-webkit-flex;display:flex;flex-direction:column;margin-top:82rpx;min-height:425rpx;padding-top:50rpx;width:531rpx}.gift-content .gift-box .within-box .prompt{padding:0 20rpx}.gift-content .gift-box .within-box .img{height:255rpx;margin-top:-18rpx;width:449rpx}.gift-content .gift-box .within-box .phoneImg{height:250rpx;margin-top:-18rpx;width:374rpx}.gift-content .gift-box .within-box .illustrate{color:#ffeddb;font-size:24rpx;font-weight:600;text-align:center;width:425rpx}.gift-content .gift-box .within-box .yello{background:linear-gradient(180deg,#ffda80,#ffb565);border-radius:10rpx;height:368rpx;margin-top:20rpx;overflow-y:auto;width:491rpx}.gift-content .gift-box .within-box .empty-box{height:276rpx}.gift-content .footer{background-image:url('https://eshopfile.zhiyousx.com/170547277021934819.png');background-size:cover;bottom:0;height:252rpx;margin:0 auto;position:absolute;width:590rpx;z-index:999}.gift-content .footer .btn{display:-webkit-flex;display:flex;justify-content:center}.gift-content .footer .btn .btn-style{background:linear-gradient(180deg,#fff6e9,#ffab73);border-radius:40rpx;box-shadow:0rpx 4rpx 8rpx 0rpx rgba(87,19,0,.4);color:#db4821;font-size:36rpx;font-weight:600;height:80rpx;line-height:80rpx;margin-top:107rpx;text-align:center;width:360rpx}.gift-content .footer .active{color:#ffc7aa;font-size:18rpx;font-weight:400;height:19rpx;line-height:15rpx;margin-top:21rpx;text-align:center;text-decoration:underline}.title-bar{background-size:cover;height:387rpx;position:relative;width:750rpx;z-index:999}.title-bar .phone-style{align-items:center;display:-webkit-flex;display:flex;justify-content:center;padding-top:296rpx}.title-bar .phone-style .title-style{background:linear-gradient(180deg,#fff6e9,#ffab73);border-radius:20rpx;color:#db4821;font-size:36rpx;font-weight:700;min-height:54rpx;text-align:center;width:390rpx}.title-bar .title{color:#db4821;font-size:36rpx;font-weight:700;height:35rpx;line-height:35rpx;padding-top:306rpx;text-align:center}
</style>
