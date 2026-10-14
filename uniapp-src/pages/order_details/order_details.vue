<template>
<view class="u-skeleton">
    <view class="statusInfo">
        <view class="orderStatus u-skeleton-rect">
            <image class="" src="../../static/images/time.png"></image>
            <text class="">{{$root.m0}}</text>
        </view>
        <view class="userBox u-skeleton-fillet">
            <view class="userInfo">
                <image class="" src="../../static/images/weizhi.png"></image>
                <text class="">{{orderDetails.contactPerson}}</text>
                <text class="">{{$root.f0}}</text>
            </view>
            <view class="userAddres">{{orderDetails.fullAddr}}</view>
        </view>
    </view>
    <view class="Main">
        <view class="goodsBox u-skeleton-rect">
            <view class="merchant">
                <view class="mcName">
                    <image class="" src="../../static/images/sj_icon.png"></image>
                    <text class="">{{orderDetails.sellerNameReal}}</text>
                    <uni-icons class="" color="#c8c8c8" size="14" type="arrowright"></uni-icons>
                </view>
            </view>
            <view class="goodsInfo" :key="index" v-for="(item, index) in orderDetails.items">
                <view class="topImg">
                    <u-lazy-load class="" height="180" :image="item.pic" imgMode="scaleToFill"></u-lazy-load>
                </view>
                <view class="itemInfo">
                    <view class="">
                        <view class="itemTitle multilineText2">{{item.name}}</view>
                        <text class="itemNum">{{'X '+item.quantity+' '+(item.skuName?item.skuName:'')}}</text>
                    </view>
                    <text class="">{{'￥'+item.price}}</text>
                </view>
            </view>
            <view class="goodsPrice">
                <text class="">商品总额</text>
                <text class="">{{'￥'+orderDetails.itemAmount}}</text>
            </view>
            <view class="goodsPrice">
                <text class="">运费</text>
                <text class="">{{orderDetails.deliveryFee&&orderDetails.deliveryFee!==0?'￥'+orderDetails.deliveryFee:'免运费'}}</text>
            </view>
            <view class="goodsPrice" v-if="orderDetails.giftCardAmount">
                <text class="">礼品卡</text>
                <text class="" style="color:#ff4643;">{{'-￥'+orderDetails.giftCardAmount}}</text>
            </view>
            <view class="goodsPrice">
                <text class="">{{orderDetails.orderStatus==0||orderDetails.orderStatus==1||orderDetails.orderStatus===12?'应付款':'实付款'}}</text>
                <text class="" style="color:#ff4643;">{{'￥'+orderDetails.count}}</text>
            </view>
        </view>
        <view class="rebateBox" v-if="orderBack" @click="goWealth($event)">
            <view class="rb1">{{'返￥'+brokerageIncome.income}}</view>
            <view class="rb2">
                <view class="rb2-1">{{$root.m1}}</view>
                <uni-icons class="" color="#c8c8c8" size="14" type="arrowright"></uni-icons>
            </view>
        </view>
        <view class="goodsBox u-skeleton-rect">
            <view class="orderInfo">
                <text class="orderName">订单编号</text>
                <text class="orderNum">{{orderDetails.orderNo}}</text>
                <uni-tag :circle="true" class="" :inverted="true" size="small" text="复制" type="error" @click="setClipboardData()"></uni-tag>
            </view>
            <view class="orderInfo">
                <text class="orderName">下单时间</text>
                <text class="orderNum">{{orderDetails.createTime}}</text>
                <view class=""></view>
            </view>
            <block v-if="orderDetails.orderStatus!==0&&orderDetails.orderStatus!==1&&orderDetails.orderStatus!=12">
                <view class="orderInfo">
                    <text class="orderName">支付方式</text>
                    <text class="orderNum">{{$root.m2}}</text>
                    <view class=""></view>
                </view>
                <view class="orderInfo" v-if="orderDetails.payTime">
                    <text class="orderName">支付时间</text>
                    <text class="orderNum">{{orderDetails.payTime||''}}</text>
                    <view class=""></view>
                </view>
            </block>
        </view>
    </view>
    <view class="bomBox u-skeleton-rect" v-if="orderDetails.orderStatus!=6">
        <text class=""></text>
        <view class="orderBtn">
            <button class="obtn" v-if="orderDetails.cancelStatus===1||orderDetails.orderStatus===4||orderDetails.orderStatus===5" @click="delOrder($event)">删除订单</button>
            <block v-else>
                <button class="obtn" v-if="orderDetails.orderStatus===1" @click="openPopup($event)">取消订单</button>
                <button class="obtn obtn1" :disabled="submiting" v-if="orderDetails.orderStatus===1" @click="goPay($event)">付款</button>
                <button class="obtn" v-if="orderDetails.orderStatus===2" @click="delivery($event)">提醒发货</button>
                <button class="obtn" v-if="orderDetails.orderStatus===3" @click="logistics(orderDetails.orderId)">查看物流</button>
                <button class="obtn obtn1" v-if="orderDetails.orderStatus===3" @click="cancelOrder($event)">确认收货</button>
            </block>
            <button class="obtn" v-if="orderDetails.orderStatus===2||orderDetails.orderStatus===3||orderDetails.orderStatus===4" @click="afterSales(orderDetails.orderId)">退/换货</button>
        </view>
    </view>
    <uni-popup class=" vue-ref" ref="popup" type="bottom" :vueSlots="['default']">
        <view class="popup">
            <view class="popTitle">
                <text class="titleText">取消订单</text>
                <uni-icons class="" color="#c1c1c1" size="20" type="clear" @click="closePopup()"></uni-icons>
            </view>
            <view class="popMain">
                <radio-group class="" @change="radioChange($event)">
                    <view class="" :key="value" v-for="(item, index) in causeList">
                        <label class="radioItem">
                            <radio :checked="index===causeIdx" class="radioIcon" color="#ff4643" :value="item.value"></radio>
                            <text class="">{{item.name}}</text>
                        </label>
                    </view>
                </radio-group>
            </view>
            <button class="popupBtn" @click="cancelOrder($event)">确定</button>
        </view>
    </uni-popup>
    <u-skeleton :animation="true" class="" :loading="loadingStatus"></u-skeleton>
    <u-toast class=" vue-ref" ref="uToast"></u-toast>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              loadingStatus: !0,
              orderDetails: {},
              causeIdx: 0,
              brokerageIncome: {},
              orderBack: !1,
              submiting: !1,
              causeList: [{
                value: "0",
                name: "我不想买了"
              }, {
                value: "1",
                name: "信息填写错误，请重拍"
              }, {
                value: "2",
                name: "商品无货"
              }, {
                value: "3",
                name: "其他原因"
              }],
              payTime: {
                minutes: "00",
                second: "00"
              }
            }
          },
          onLoad: function(e) {
            e.orderId && (this.orderId = e.orderId)
          },
          onUnload: function() {
            clearInterval(this._payTimeTimer)
          },
          onPullDownRefresh: function() {
            this.pageLoad(), this.getOrderBrokerageIncome()
          },
          onShow: function() {
            this.pageLoad(), this.getOrderBrokerageIncome()
          },
          filters: {
            toFixed2: function(e) {
              return e ? Number(e).toFixed(2) : "0.00"
            },
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
            startTimer: function() {
              var e = this.orderDetails.countdownTime.split(":"),
                t = 60 * Number(e[0]) + Number(e[1]);
              this._secondNum = t, this._payTimeTimer = setInterval(this.daoJiShi, 1e3)
            },
            daoJiShi: function() {
              this._secondNum <= 0 ? (clearInterval(this._payTimeTimer), this.payTime = {
                minutes: "00",
                second: "00"
              }) : this.payTime = {
                minutes: parseInt(this._secondNum / 60),
                second: parseInt(this._secondNum % 60)
              }, this._secondNum--
            },
            pageLoad: function() {
              var t = this;
              this.loadingStatus = !0, this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/order/selectOrderDetaile", {
                orderId: this.orderId
              }).then((function(o) {
                t.loadingStatus = !1, uni.stopPullDownRefresh(), 1 === o.code ? t.orderDetails = o.data : t.$uni.showToast(o.msg)
              }))
            },
            getOrderBrokerageIncome: function() {
              var e = this,
                t = {
                  orderId: this.orderId
                };
              this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/memberBrokerage/getOrderBrokerageIncome", t).then((function(t) {
                if (uni.stopPullDownRefresh(), 1 === t.code) {
                  var n = t.data;
                  !n || 1 !== n.brokerageType || 0 != n.status && 1 != n.status || (e.orderBack = !0, e.brokerageIncome = n)
                }
              })).catch((function(e) {
                uni.stopPullDownRefresh()
              }))
            },
            goPay: function() {
              var e = this;
              this.submiting || (this.submiting = !0, o.login({
                success: function(t) {
                  e.$uniApi.getRequestYesLoading("GET", "manager/app/v1/wxPopular/getSessionKeyPro/".concat(t.code), "请求中").then((function(t) {
                    1 === t.code ? (e.orderGenerateToPaySmall(t.data.openid), console.log("获取openid", t.data)) : (e.$uni.showToast(t.msg), e.submiting = !1)
                  })).catch((function(t) {
                    e.submiting = !1, e.$uni.showToast(t.msg)
                  }))
                }
              }))
            },
            orderGenerateToPaySmall: function(e) {
              var t = this,
                n = {
                  orderId: this.orderDetails.orderId,
                  payChannel: "",
                  seriesNumber: e,
                  orderSource: 5
                };
              this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/order/waitPayToPay", n, "支付中").then((function(e) {
                1 === e.code ? uni.requestPayment({
                  timeStamp: e.data.timeStamp,
                  nonceStr: e.data.nonceStr,
                  package: "prepay_id=".concat(e.data.prepayid),
                  signType: e.data.signType,
                  paySign: e.data.pay_sign,
                  success: function(e) {
                    t.submiting = !1, console.log("success:" + JSON.stringify(e)), uni.redirectTo({
                      url: "/subPage/pages/order_pay/order_pay?count=".concat(t.orderDetails.count)
                    })
                  },
                  fail: function(e) {
                    t.submiting = !1, console.log("fail:" + JSON.stringify(e)), t.$util.goBack()
                  }
                }) : (t.$uni.showToast(e.msg), t.submiting = !1)
              })).catch((function(e) {
                t.$uni.showToast(e.msg), t.submiting = !1
              }))
            },
            delivery: function() {
              var e = this,
                t = {
                  orderId: this.orderDetails.orderId,
                  sellerId: this.orderDetails.sellerId
                };
              this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/order/remindDeliver", t).then((function(t) {
                1 === t.code ? e.$refs.uToast.show({
                  title: "已提醒买家发货",
                  type: "success",
                  position: "bottom"
                }) : e.$uni.showToast(t.msg)
              })).catch((function(t) {
                e.$uni.showToast(t.msg)
              }))
            },
            delOrder: function() {
              var e = this;
              uni.showModal({
                title: "确认删除订单？",
                content: "您确定删除该订单吗？",
                confirmColor: "#ff4643",
                success: function(t) {
                  t.confirm && e.$uniApi.getRequestNoLoading("DELETE", "order/app/v1/order?ids=".concat(e.orderDetails.orderId)).then((function(t) {
                    1 === t.code ? (e.$util.prevPage(), e.$refs.uToast.show({
                      title: "已删除",
                      type: "success",
                      position: "bottom"
                    })) : e.$uni.showToast(t.msg)
                  })).catch((function(t) {
                    e.$uni.showToast(t.msg)
                  }))
                }
              })
            },
            cancelOrder: function() {
              var e = this,
                t = {
                  orderId: this.orderDetails.orderId
                };
              1 === this.orderDetails.orderStatus ? t.cancelStatus = 1 : t.orderStatus = 4, this.$uniApi.dataRequestNoLoading("PUT", "order/app/v1/order/updateOrderStatus", t).then((function(t) {
                if (1 === t.code) {
                  var o = getCurrentPages(),
                    n = o[o.length - 2];
                  n.$vm.page = 1, n.$vm.pageLoad(), 1 === e.orderDetails.orderStatus ? e.orderDetails.cancelStatus = 1 : e.orderDetails.orderStatus = 5, e.$refs.uToast.show({
                    title: 1 === e.orderDetails.orderStatus ? "已取消" : "已确认收货",
                    type: "success",
                    position: "bottom"
                  }), e.closePopup()
                } else e.$uni.showToast(t.msg)
              })).catch((function(t) {
                e.$uni.showToast(t.msg)
              }))
            },
            radioChange: function(e) {
              for (var t in this.causeList)
                if (this.causeList[t].value === e.target.value) {
                  this.current = t;
                  break
                }
            },
            openPopup: function() {
              this.$refs.popup.open()
            },
            closePopup: function() {
              this.$refs.popup.close()
            },
            setClipboardData: function() {
              uni.setClipboardData({
                data: this.orderDetails.orderNo
              })
            },
            evaluation: function(e) {
              this.$navigateTo({
                url: "/subPack/pages/evaluate/evaluate?orderId=".concat(e)
              })
            },
            afterSales: function(e) {
              var t = this;
              uni.showActionSheet({
                itemList: ["退货", "换货"],
                success: function(o) {
                  t.$navigateTo({
                    url: "/subPack/pages/aftercontent/aftercontent?aftersaleType=".concat(o.tapIndex + 1, "&orderId=").concat(e)
                  })
                },
                fail: function(e) {
                  console.log(e.errMsg)
                }
              })
            },
            logistics: function(e) {
              this.$navigateTo({
                url: "../ordertracking/ordertracking?orderId=".concat(e)
              })
            },
            orderStatusFun: function(e) {
              return 1 === e.cancelStatus ? "交易关闭" : 0 === e.orderStatus ? "新提交" : 1 === e.orderStatus ? "待支付" : 2 === e.orderStatus ? "已付款" : 3 === e.orderStatus ? "已发货" : 4 === e.orderStatus ? "已签收" : 5 === e.orderStatus ? "交易成功" : 6 === e.orderStatus ? "售后处理中" : 7 === e.orderStatus ? "售后已完成" : void 0
            },
            payChannelFun: function(e) {
              return "alipay" === e || "alipay_mini" == e ? "支付宝" : "wx" === e || "wxapp" === e || "xy_wx_mini" === e ? "微信" : "其它"
            },
            statusVal: function(e) {
              return 0 === e ? "进行中" : 1 === e ? "已完成" : 2 === e ? "已失败" : void 0
            },
            goWealth: function() {
              var e = "/subPage/pages/wealth/wealth";
              this.$util.isLogin(e) && this.$navigateTo({
                url: e
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.statusInfo{background:url('https://eshopfile.zhiyousx.com/2021070717465381137.png')no-repeat;background-size:100% 100%;padding:20rpx;width:100%}.statusInfo>text{color:#fff;font-size:24rpx;padding-left:70rpx}.statusInfo .orderStatus{align-items:center;display:-webkit-flex;display:flex;margin-bottom:10rpx;padding:0 20rpx}.statusInfo .orderStatus>image{height:32rpx;width:32rpx}.statusInfo .orderStatus>text{color:#fff;font-size:30rpx;margin-left:20rpx}.statusInfo .userBox{background-color:#fff;border-radius:16rpx;margin-top:20rpx;padding:30rpx}.statusInfo .userBox .userInfo{align-items:center;display:-webkit-flex;display:flex}.statusInfo .userBox .userInfo>image{height:30rpx;margin-right:15rpx;width:28rpx}.statusInfo .userBox .userInfo>text{font-size:30rpx}.statusInfo .userBox .userInfo>text:last-child{margin-left:50rpx}.statusInfo .userBox .userAddres{font-size:26rpx;margin-left:40rpx;margin-top:10rpx}.Main{padding:20rpx}.Main .goodsBox{background-color:#fff;border-radius:16rpx;margin-bottom:20rpx;padding:20rpx}.Main .goodsBox .merchant{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:40rpx}.Main .goodsBox .merchant .mcName{align-items:center;display:-webkit-flex;display:flex;margin-left:17rpx}.Main .goodsBox .merchant .mcName>image{height:30rpx;width:30rpx}.Main .goodsBox .merchant .mcName>text{color:#222;font-size:26rpx;margin-left:15rpx}.Main .goodsBox .goodsInfo{display:-webkit-flex;display:flex;margin-bottom:20rpx;width:100%}.Main .goodsBox .goodsInfo>text{color:#ff4643;font-size:26rpx}.Main .goodsBox .goodsInfo .topImg{background-color:#e5e5e5;height:180rpx;width:180rpx}.Main .goodsBox .goodsInfo .itemInfo{display:-webkit-flex;display:flex;flex:1;flex-direction:column;justify-content:space-between;padding:0 20rpx}.Main .goodsBox .goodsInfo .itemInfo .itemTitle{font-size:24rpx;margin-bottom:10rpx}.Main .goodsBox .goodsInfo .itemInfo .itemNum{color:#878787;font-size:24rpx}.Main .goodsBox .goodsInfo .itemInfo>text{color:#ff4643;font-size:26rpx}.Main .goodsBox .goodsInfo:last-child{margin-bottom:0}.Main .goodsBox .goodsPrice{display:-webkit-flex;display:flex;justify-content:space-between;margin-top:20rpx}.Main .goodsBox .goodsPrice>text{font-size:26rpx}.Main .orderInfo{display:-webkit-flex;display:flex;margin-top:20rpx}.Main .orderInfo>text{font-size:26rpx}.Main .orderInfo .orderName{color:#878787;width:25%}.Main .orderInfo .orderNum{width:75%}.Main .orderInfo:first-child{margin-top:0}.Main .orderInfo:first-child .orderNum{width:60%}.rebateBox{align-items:center;background:#fff;border-radius:20rpx;display:-webkit-flex;display:flex;flex-direction:row;font-family:Source Han Sans CN;height:100rpx;justify-content:space-between;line-height:1;margin-bottom:20rpx}.rebateBox .rb1{color:#ff4643;font-size:26rpx;margin-left:20rpx}.rebateBox .rb2{align-items:center;display:-webkit-flex;display:flex;flex-direction:row}.rebateBox .rb2 .rb2-1{color:#ff4643;font-weight:400;margin-right:24rpx}.bomBox{align-items:center;background-color:#fff;bottom:0;display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between;left:0;padding:0 20rpx;position:fixed;width:100%;z-index:99}.bomBox>text{color:#878787;font-size:24rpx}.bomBox .orderBtn{display:-webkit-flex;display:flex}.bomBox .orderBtn .obtn{background-color:#fff;border:1rpx solid #cfcfcf;border-radius:54rpx;color:#878787;font-size:24rpx;height:66rpx;line-height:65rpx;margin-left:20rpx;width:200rpx}.bomBox .orderBtn .obtn:after{border:0}.bomBox .orderBtn .obtn1{border:1rpx solid #ff4643;color:#ff4643}.popup{background-color:#fff;border-radius:40rpx 40rpx 0 0;height:750rpx;padding:0 30rpx;position:relative;width:100%}.popup .popTitle{align-items:center;display:-webkit-flex;display:flex;height:90rpx;justify-content:space-between}.popup .popTitle .titleText{flex:1;text-align:center}.popup .popupBtn{background-color:#fff;border:1rpx solid #ff4643;border-radius:92rpx;bottom:30rpx;color:#ff4643;height:92rpx;left:20rpx;line-height:92rpx;position:absolute;right:20rpx}.popup .popupBtn:after{border:0}.popup .popMain{padding-bottom:100rpx}.popup .popMain .radioItem{align-items:center;border-bottom:1rpx solid #f7f7f7;display:-webkit-flex;display:flex;height:92rpx}.popup .popMain .radioItem .radioIcon{transform:scale(.7)}
</style>
