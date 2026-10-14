<template>
<view class="affirm-order u-skeleton">
    <view class="personal u-skeleton-rect" @click="goAddress($event)">
        <image class="" src="https://eshopfile.zhiyousx.com/170065402412127991.png"></image>
        <block v-if="orderData">
            <view class="userInfor" v-if="orderData.memberAddr">
                <view class="userName">
                    <text class="">{{orderData.memberAddr.contactPerson}}</text>
                    <text class="">{{orderData.memberAddr.contactMobile}}</text>
                </view>
                <view class="userAddres u-skeleton-rect">
                    <text class="">{{orderData.memberAddr.addrRegion1Name+orderData.memberAddr.addrRegion2Name+orderData.memberAddr.addrRegion3Name+orderData.memberAddr.addrStreet}}</text>
                    <view class="tags" v-if="orderData.memberAddr.isDefault===1">默认</view>
                </view>
            </view>
            <view class="" style="flex:1;margin-left:20rpx;" v-else>请选择收货地址</view>
            <uni-icons class="" color="#c8c8c8" size="24" type="arrowright"></uni-icons>
        </block>
    </view>
    <block v-if="orderData">
        <view class="cardItem u-skeleton-rect" :key="index" v-for="(item, index) in orderData.tempOrderUnSubmitted.tempOrderSellerItems">
            <view class="merchant u-skeleton-rect">
                <view class="mcName">
                    <image class="" src="../../static/images/sj_icon.png"></image>
                    <text class="">{{item.sellerName}}</text>
                    <uni-icons class="" color="#c8c8c8" size="14" type="arrowright"></uni-icons>
                </view>
            </view>
            <view class="cardGoods u-skeleton-rect" :key="indexs" v-for="(items, indexs) in item.tempOrderItems">
                <view class="caedLeft">
                    <view class="cardImg">
                        <u-lazy-load class="" height="180" :image="items.picUrl" imgMode="scaleToFill"></u-lazy-load>
                    </view>
                    <view class="cardInfo">
                        <view class="shopName multilineText2">{{items.itemName}}</view>
                        <view class="shopsku">{{items.skuName?items.skuName:''}}</view>
                        <view class="prceNum">
                            <text class="pic">{{'￥'+items.price}}</text>
                            <text class="itemRuter" v-if="items.cashBackAmount&&items.cashBackAmount!=0&&userInfo&&userInfo.isFenxiao">{{'返￥'+items.cashBackAmount}}</text>
                        </view>
                    </view>
                    <text class="">{{'X '+items.quantity}}</text>
                </view>
            </view>
            <view class="itemParameter">
                <text class="">运费</text>
                <text class="">{{item.deliveryFee&&item.deliveryFee!==0?'￥'+item.deliveryFee:'免运费'}}</text>
            </view>
            <view class="itemParameter">
                <text class="">备注</text>
                <input class="remarkInput" maxlength="40" placeholder="建议留言前线与商家沟通确认" placeholderStyle="color:#cfcfcf" type="text" :value="item.memberRemark"></input>
            </view>
            <view class="itemNum">
                <text class="">{{'共'+item.goodsTotalNum+'件'}}</text>
                <view class="itemPrice">
                    <text class="">小计：</text>
                    <text class="">{{'￥'+item.goodsTotalAmount}}</text>
                </view>
            </view>
        </view>
    </block>
    <view class="couponBox gift">
        <view class="cb1">
            <view class="cb1-1">礼品卡</view>
            <view class="cb1-2" v-if="giftCardAmount>0">已选1张</view>
        </view>
        <view class="cb2" @click="chooseGiftCard($event)">
            <view class="cb2-2" v-if="!giftCardArr[0]">无可用</view>
            <block v-else>
                <view class="cb2-1" v-if="giftCardAmount>0">{{'-¥'+giftCardAmount}}</view>
                <block v-else>
                    <view class="cb2-3" v-if="giftCardAmount==0">{{$root.g0+'张可用'}}</view>
                </block>
            </block>
            <uni-icons class="" color="#BDBDBD" size="19" type="arrowright"></uni-icons>
        </view>
    </view>
    <view class="subBox u-skeleton-rect">
        <block v-if="orderData">
            <view class="subAddress u-skeleton-rect" v-if="orderData.memberAddr">
                <text class="">收货地址：</text>
                <text class="">{{orderData.memberAddr.addrRegion1Name+orderData.memberAddr.addrRegion2Name+orderData.memberAddr.addrRegion3Name+orderData.memberAddr.addrStreet}}</text>
            </view>
        </block>
        <view class="subNumPrice u-skeleton-rect">
            <block v-if="orderData">
                <text class="">{{'共'+orderData.tempOrderUnSubmitted.itemNumber+'件'}}</text>
                <view class="subPrice u-skeleton-rect">
                    <text class="">应付：</text>
                    <text class="">{{'￥'+$root.g1}}</text>
                </view>
                <button class="subBtn" :disabled="submiting" @click="goPay($event)">去支付</button>
            </block>
        </view>
    </view>
    <u-skeleton :animation="true" class="" :loading="loadingStatus"></u-skeleton>
    <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="showGiftCard" :vueSlots="['default']" @input="showGiftCard = $event">
        <view class="fill-card-box">
            <view class="name">礼品卡</view>
            <view class="card-box-popup">
                <scroll-view class="" scrollY="true" style="height:600rpx;">
                    <view class="card-item-popup" :key="index" v-for="(item, index) in $root.l0">
                        <image mode class="card-image" :src="item.cardPicUrl" v-if="item.cardPicUrl"></image>
                        <view class="card-data">
                            <view :class="['card-head','',!item.cardPicUrl?'cardHeadbg':'']">
                                <image mode class="card-logo" src="https://eshopfile.zhiyousx.com/giftCard/logo.png" v-if="!item.cardPicUrl"></image>
                                <view class="card-info">
                                    <view class="card-name">{{ item.name }}</view>
                                    <view class="card-value">{{'面值：'+item.quota+'元'}}</view>
                                </view>
                                <view class="card-time">{{ item.validityTimeStr }}</view>
                            </view>
                            <view :class="['card-body','',!item.cardPicUrl?'cardBodyBg':'']">
                                <view class="card-balance">
                                    <text class="label">余额</text>
                                    <text class="value">{{'￥'+item.balance}}</text>
                                </view>
                                <image mode class="card-change" src="https://eshopfile.zhiyousx.com/giftCard/cardYes.png" v-if="item.g2"></image>
                                <image mode class="card-change" src="https://eshopfile.zhiyousx.com/giftCard/cardNo.png" v-else></image>
                            </view>
                        </view>
                    </view>
                </scroll-view>
            </view>
            <view class="but-popup" @click="confirmCard($event)">确定</view>
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
              orderType: 0,
              loadingStatus: !0,
              orderData: "",
              submiting: !1,
              shareMemberId: "",
              urlFrom: {
                skuId: "",
                quantity: 1,
                cartItemInfo: ""
              },
              giftCardAmount: 0,
              activeGiftCard: [],
              activeGiftamount: 0,
              giftCardPopData: [],
              showGiftCard: !1,
              giftCardArr: []
            }
          },
          onLoad: function(t) {
            0 == t.type ? (this.orderType = 0, this.urlFrom.skuId = t.skuId, this.urlFrom.quantity = t.quantity) : (this.orderType = 1, this.urlFrom.cartItemInfo = t.cartItemInfo), this.shareMemberId = t.shareMemberId || "", this.pageLoad(), this.getGiftCard()
          },
          filters: {
            toFixed2: function(t) {
              return t ? Number(t).toFixed(2) : "0.00"
            },
            mobileSubstr: function(t) {
              return t ? t.substr(0, 3) + "****" + t.substr(7) : "-"
            },
            validityTimeFilter: function(t) {
              return t.slice(0, 10) + "到期"
            }
          },
          onShow: function() {
            this.submiting = !1
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              0 === this.orderType ? this.orderEnsure() : this.settlement()
            },
            orderEnsure: function() {
              var t = this,
                e = "order/app/v1/order/orderEnsure?memberId=".concat(this.userInfo.memberId, "&skuId=").concat(this.urlFrom.skuId, "&quantity=").concat(this.urlFrom.quantity, "&shareMemberId=").concat(this.shareMemberId);
              console.log("传值", e), this.loadingStatus = !0, this.$uniApi.getRequestNoLoading("POST", e).then((function(e) {
                t.loadingStatus = !1, 1 === e.code && (t.orderData = e.data)
              })).catch((function(t) {
                console.log("商品详情立即购买", t)
              }))
            },
            settlement: function() {
              var t = this,
                e = {
                  memberId: this.userInfo.memberId,
                  cartItemInfo: this.urlFrom.cartItemInfo
                };
              console.log("购物车结算", this.urlFrom.cartItemInfo), this.loadingStatus = !0, this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/cartInfo/settlement", e).then((function(e) {
                t.loadingStatus = !1, 1 === e.code && (t.orderData = e.data)
              })).catch((function(t) {
                console.log("购物车结算", t)
              }))
            },
            goPay: function() {
              var e = this,
                r = this;
              this.submiting || (this.submiting = !0, this.orderData.memberAddr ? t.login({
                success: function(t) {
                  e.$uniApi.getRequestYesLoading("GET", "manager/app/v1/wxPopular/getSessionKeyPro/".concat(t.code), "请求中").then((function(t) {
                    1 === t.code ? e.orderGenerateToPaySmall(t.data.openid) : (e.$uni.showToast(t.msg), r.submiting = !1)
                  })).catch((function(t) {
                    e.$uni.showToast(t.msg), r.submiting = !1
                  }))
                }
              }) : (this.$uni.showToast("请先添加收货地址"), r.submiting = !1))
            },
            orderGenerateToPaySmall: function(e) {
              var r = this,
                a = {
                  buyerId: this.userInfo.memberId,
                  payChannel: "",
                  openId: e,
                  orderSource: 5,
                  orderAddress: this.orderData.memberAddr,
                  tempOrderSellerItems: this.orderData.tempOrderUnSubmitted.tempOrderSellerItems,
                  cartItemInfo: this.orderData.tempOrderUnSubmitted.cartItemInfo,
                  deliveryFee: this.orderData.tempOrderUnSubmitted.deliveryFee,
                  itemAmount: this.orderData.tempOrderUnSubmitted.itemAmount,
                  itemNumber: this.orderData.tempOrderUnSubmitted.itemNumber,
                  orderAmount: this.orderData.tempOrderUnSubmitted.orderAmount,
                  realPayableAmount: this.orderData.tempOrderUnSubmitted.realPayableAmount
                };
              this.giftCardAmount > 0 && this.activeGiftCard[0] && (a.giftCardIdList = this.activeGiftCard, a.giftCardAmount = Number(this.giftCardAmount), a.orderAmount = Number(this.orderData.tempOrderUnSubmitted.realPayableAmount) - Number(this.giftCardAmount)), this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/cartInfo/orderGenerateToPaySmall", a, "支付中").then((function(e) {
                if (1 === e.code) {
                  if (0 == a.orderAmount) return void uni.redirectTo({
                    url: "/subPage/pages/order_pay/order_pay?count=0"
                  });
                  uni.requestPayment({
                    timeStamp: e.data.timeStamp,
                    nonceStr: e.data.nonceStr,
                    package: "prepay_id=".concat(e.data.prepayid),
                    signType: e.data.signType,
                    paySign: e.data.pay_sign,
                    success: function(e) {
                      console.log("success:" + JSON.stringify(e)), r.submiting = !1, uni.redirectTo({
                        url: "/subPage/pages/order_pay/order_pay?count=".concat(r.orderData.tempOrderUnSubmitted.realPayableAmount)
                      })
                    },
                    fail: function(e) {
                      console.log("fail:" + JSON.stringify(e)), r.submiting = !1, uni.redirectTo({
                        url: "/pages/myorder/myorder?type=1"
                      })
                    }
                  })
                } else r.submiting = !1, r.$uni.showToast(e.msg)
              })).catch((function(t) {
                r.submiting = !1, r.$uni.showToast(t.msg)
              }))
            },
            goAddress: function() {
              this.orderData.memberAddr ? this.$navigateTo({
                url: "/subPack/pages/address/address?addrId=" + this.orderData.memberAddr.addrId
              }) : this.$navigateTo({
                url: "/subPack/pages/addaddress/addaddress"
              })
            },
            getGiftCard: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftCard/getCreateOrderCanUseGiftCard", {
                type: 2
              }).then((function(e) {
                1 === e.code ? t.giftCardArr = e.data || [] : t.$uni.showToast(data.msg)
              }))
            },
            changeGiftCard: function(t, e) {
              var r = this;
              if (this.giftCardPopData.includes(t.id)) this.giftCardPopData = this.giftCardPopData.filter((function(e) {
                return e != t.id
              }));
              else {
                if (this.activeGiftamount > this.orderData.tempOrderUnSubmitted.realPayableAmount) return this.$uni.showToast("目前订单已经没有可用于抵扣的金额"), !1;
                this.giftCardPopData.push(t.id)
              }
              var a = 0;
              this.giftCardArr.forEach((function(t) {
                r.giftCardPopData.forEach((function(e) {
                  e == t.id && (a += t.balance)
                }))
              })), this.activeGiftamount = a
            },
            setGiftCardPrice: function() {
              var t = this.orderData.tempOrderUnSubmitted.realPayableAmount;
              this.activeGiftamount >= t ? this.giftCardAmount = this.orderData.tempOrderUnSubmitted.realPayableAmount : this.giftCardAmount = this.activeGiftamount, this.activeGiftCard = this.$util.deepCopy(this.giftCardPopData)
            },
            confirmCard: function() {
              this.setGiftCardPrice(), this.showGiftCard = !1
            },
            chooseGiftCard: function() {
              this.giftCardArr[0] && (this.giftCardPopData = this.$util.deepCopy(this.activeGiftCard), this.showGiftCard = !0)
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.affirm-order{padding:20rpx 20rpx 220rpx}.personal{align-items:center;background-color:#fff;border-radius:16rpx;display:-webkit-flex;display:flex;height:180rpx;justify-content:space-between;padding:20rpx 30rpx}.personal>image{height:50rpx;width:50rpx}.personal .userInfor{flex:1;margin-left:20rpx}.personal .userInfor .userName{align-items:center;display:-webkit-flex;display:flex}.personal .userInfor .userName>text{font-size:30rpx}.personal .userInfor .userName>text:last-child{color:#111;margin-left:20rpx}.personal .userInfor .userAddres{margin-top:10rpx}.personal .userInfor .userAddres>text{font-size:26rpx}.personal .userInfor .userAddres .tags{background-color:#ff4643;border-radius:13rpx;color:#fff;display:inline-block;font-size:18rpx;height:26rpx;margin-right:20rpx;text-align:center;width:56rpx}.cardItem{background-color:#fff;border-radius:16rpx;margin-top:20rpx;padding:20rpx 30rpx}.cardItem .merchant{margin-bottom:40rpx}.cardItem .merchant .mcName,.cardItem .merchant{align-items:center;display:-webkit-flex;display:flex}.cardItem .merchant .mcName>image{height:30rpx;width:30rpx}.cardItem .merchant .mcName>text{color:#222;font-size:26rpx;margin-left:15rpx}.cardItem .cardGoods{align-items:center;display:-webkit-flex;display:flex;margin:30rpx 0}.cardItem .cardGoods .caedLeft{display:-webkit-flex;display:flex}.cardItem .cardGoods .caedLeft .cardImg{background-color:#e5e5e5;border-radius:4rpx;height:180rpx;width:180rpx}.cardItem .cardGoods .caedLeft .cardInfo{display:-webkit-flex;display:flex;flex:1;flex-direction:column;justify-content:space-between;margin:0 20rpx}.cardItem .cardGoods .caedLeft .cardInfo .shopName{font-size:26rpx}.cardItem .cardGoods .caedLeft .cardInfo .shopsku{color:#858585;font-size:24rpx}.cardItem .cardGoods .caedLeft .cardInfo .prceNum{align-items:center;display:-webkit-flex;display:flex;justify-content:flex-start}.cardItem .cardGoods .caedLeft .cardInfo .prceNum .pic{color:#ff4643;font-size:28rpx;margin-right:10rpx}.cardItem .cardGoods .caedLeft .cardInfo .prceNum .itemRuter{background:#ffeeea;border-radius:6rpx;color:#ff531d;font-size:20rpx;height:30rpx;line-height:30rpx;padding:0 10rpx}.cardItem .cardGoods .caedLeft>text{color:#858585;font-size:24rpx}.cardItem .itemParameter{align-items:center;display:-webkit-flex;display:flex;height:75rpx;justify-content:space-between}.cardItem .itemParameter>text{color:#222;font-size:26rpx}.cardItem .itemParameter>text:first-child{width:80rpx}.cardItem .itemParameter .remarkInput{flex:1;font-size:26rpx}.cardItem .itemNum{align-items:center;display:-webkit-flex;display:flex;height:70rpx;justify-content:flex-end}.cardItem .itemNum>text{color:#858585;font-size:24rpx;margin-right:20rpx}.cardItem .itemNum .itemPrice{display:-webkit-flex;display:flex}.cardItem .itemNum .itemPrice>text{color:#1c1c1d;font-size:26rpx}.cardItem .itemNum .itemPrice>text:last-child{color:#ff4643}.couponBox{align-items:center;background:#fff;border-radius:20rpx;height:100rpx;justify-content:space-between;padding:0 30rpx;width:100%}.couponBox .cb1,.couponBox{display:-webkit-flex;display:flex;flex-direction:row}.couponBox .cb1 .cb1-1{color:#2a2a2a;font-family:Source Han Sans CN;font-size:30rpx;font-weight:500;margin-right:20rpx}.couponBox .cb1 .cb1-2{border:2rpx solid #f15252;border-radius:6rpx;color:#f15252;font-family:Source Han Sans CN;font-size:20rpx;font-weight:400;height:30rpx;padding:0 8rpx}.couponBox .cb2{align-items:center;display:-webkit-flex;display:flex;flex-direction:row}.couponBox .cb2 .cb2-1{color:#f15252;font-family:Source Han Sans CN;font-size:36rpx;font-weight:400;margin-right:25rpx}.couponBox .cb2 .cb2-2{color:#b6b6b6;font-family:Source Han Sans CN;font-size:26rpx;font-weight:400;margin-right:25rpx}.couponBox .cb2 .cb2-3{color:#f15252;font-size:26rpx;font-weight:400;margin-right:25rpx}.gift{margin-top:10rpx}.playBox{align-items:center;background-color:#fff;border-radius:16rpx;display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between;margin-top:20rpx;padding:0 30rpx}.playBox text{color:#222;font-size:26rpx}.playBox .playType{align-items:center;display:-webkit-flex;display:flex}.subBox{bottom:0;left:0;position:fixed;width:100%;z-index:999}.subBox .subAddress{background-color:#fff6ca;display:-webkit-flex;display:flex;padding:20rpx 30rpx}.subBox .subAddress>text{color:#ff4643;font-size:26rpx}.subBox .subAddress>text:first-child{width:140rpx}.subBox .subAddress>text:last-child{flex:1}.subBox .subNumPrice{align-items:center;background-color:#fff;display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between;padding:0 30rpx}.subBox .subNumPrice>text{color:#858585;font-size:26rpx}.subBox .subNumPrice .subPrice{align-items:center;display:-webkit-flex;display:flex;flex:1;margin-left:50rpx}.subBox .subNumPrice .subPrice>text{color:#ff4643}.subBox .subNumPrice .subPrice>text:last-child{font-size:36rpx}.subBox .subNumPrice .subBtn{background-image:linear-gradient(90deg,#ff4643,#e61714);border-radius:80rpx;color:#fff;font-size:28rpx;height:80rpx;line-height:80rpx;padding:0 50rpx}.fill-card-box{background:#fff;height:880rpx;padding:40rpx;position:relative;width:750rpx}.fill-card-box .name{color:#333;font-size:32rpx;line-height:48rpx}.fill-card-box .but-popup{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:50rpx;bottom:20rpx;color:#fff;font-size:26rpx;height:80rpx;left:40rpx;line-height:80rpx;position:absolute;text-align:center;width:670rpx}.fill-card-box .card-box-popup{margin-top:30rpx}.fill-card-box .card-box-popup .card-item-popup{height:280rpx;margin-bottom:20rpx;position:relative;width:670rpx}.fill-card-box .card-box-popup .card-item-popup .card-image{border-radius:20rpx;height:280rpx;width:670rpx}.fill-card-box .card-box-popup .card-item-popup .card-data{height:280rpx;left:0;position:absolute;top:0;width:670rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .cardHeadbg{background:linear-gradient(180deg,#fd928b,#ef5e3f)}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head{border-radius:20rpx 20rpx 0 0;height:100rpx;position:relative;width:670rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head .card-logo{height:65rpx;left:20rpx;position:absolute;top:19rpx;width:56rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head .card-info{left:96rpx;position:absolute;top:12rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head .card-info .card-name{color:#fff;font-size:28rpx;line-height:42rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head .card-info .card-value{color:#fff;font-size:24rpx;line-height:36rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head .card-time{color:#fff;font-size:24rpx;line-height:36rpx;position:absolute;right:20rpx;top:54rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .cardBodyBg{background:linear-gradient(180deg,#fff,#ffefef);border:1px solid #ff5411}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body{align-items:center;border-radius:0 0 20rpx 20rpx;display:-webkit-flex;display:flex;flex-direction:column;height:180rpx;position:relative;width:670rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-balance{height:60rpx;line-height:60rpx;margin-top:63rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-balance .label{color:#ff5411;font-size:24rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-balance .value{color:#ff5411;font-size:40rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-tips{align-items:center;display:-webkit-flex;display:flex;height:36rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-tips .tips{margin-right:12rpx;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:203rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-tips .tips-icon{height:28rpx;width:28rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-change{height:44rpx;position:absolute;right:28rpx;top:68rpx;width:44rpx}
</style>
