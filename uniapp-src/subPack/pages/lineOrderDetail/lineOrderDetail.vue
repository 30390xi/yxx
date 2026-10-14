<template>
<view class="box" :hidden="!detailInfo.orderId" :style="'padding-bottom:'+(120+safeAreaBottom)+'rpx'+';'">
    <view class="title-bj">
        <view class="top">
            <view class="type">
                <view class="p1 _p">{{$root.m0}}</view>
                <view class="p2 _p" v-if="detailInfo.orderStatus==2">等待供应商确认...</view>
            </view>
            <view class="price" @click="priceInfo()">
                <view class="unit _p">￥</view>
                <view class="num _p">{{detailInfo.itemAmount}}</view>
                <view class="info _p">明细</view>
                <uni-icons class="" color="rgba(0,0,0,0.5)" size="12" type="arrowright"></uni-icons>
            </view>
        </view>
        <view class="bottom" v-if="detailInfo.orderStatus==8||detailInfo.orderStatus==9||detailInfo.orderStatus==10">
            <view class="text _p">{{$root.m1}}</view>
            <view class="info" @click="refundDetail(detailInfo.orderId)">
                <view class="info-text _p">退款详情</view>
                <uni-icons class="" color="rgba(0,0,0,0.5)" size="12" type="arrowright"></uni-icons>
            </view>
        </view>
    </view>
    <view :class="['orderAdvertisement','',detailInfo.orderStatus!=9?'mt':'mt1']" v-if="detailInfo.orderStatus==3||detailInfo.orderStatus==5||detailInfo.orderStatus==9||detailInfo.orderStatus==13">
        <image class="community-box" mode="widthFix" :src="detailInfo.communityImage" v-if="detailInfo.communityImage"></image>
    </view>
    <view class="product model" :style="'margin-top:'+(detailInfo.orderStatus==8||detailInfo.orderStatus==9||detailInfo.orderStatus==10?'26rpx':'-80rpx')+';'">
        <view class="product-title model-item">
            <view class="name _p">{{detailInfo.orderItem.itemName}}</view>
            <view class="info-item" style="margin-top:30rpx;" v-if="detailInfo.orderItem.lineRelationName">
                <image class="icon" src="https://eshopfile.zhiyousx.com/2023091811405282175.png"></image>
                <view class="text _p">{{detailInfo.orderItem.lineRelationName}}</view>
            </view>
            <view class="info-item">
                <image class="icon" src="https://eshopfile.zhiyousx.com/169743772196248318.png"></image>
                <view class="text _p">{{$root.m2+' '+(detailInfo.fromTime==detailInfo.toTime?detailInfo.fromTime+'当天往返':detailInfo.fromTime+'出发'+detailInfo.toTime+'返回')+''}}</view>
            </view>
            <view class="info-item">
                <image class="icon" src="https://eshopfile.zhiyousx.com/169743778503888972.png"></image>
                <view class="text _p">{{$root.m3}}</view>
            </view>
        </view>
        <view class="illustrate model-item">
            <view class="name _p" style="margin-bottom:10rpx;">使用说明</view>
            <u-parse class="" :html="detailInfo.useDesc" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
        </view>
        <view class="rule model-item" v-if="detailInfo.refundRuleType==2">
            <view class="title">
                <view class="name _p">退改规则</view>
                <view class="lable">{{refundRuleType[detailInfo.refundRuleType]}}</view>
            </view>
            <view class="content" @click="e0($event)">
                <view class="contentInfo">
                    <view :class="['text','_p','',!foldRemark?'singleLineText':'']" v-if="detailInfo.refundFeeDesc">{{detailInfo.refundFeeDesc}}</view>
                    <view class="table" style="margin-top:20rpx;" v-if="foldRemark">
                        <view class="th">
                            <view class="td" style="width:490rpx;">取消时间</view>
                            <view class="td" style="width:184rpx;">损失费用</view>
                        </view>
                        <view class="tr" :key="index" v-for="(item, index) in detailInfo.orderRefundFeeSnapList">
                            <view class="td" style="width:490rpx;">{{item.timeDesc}}</view>
                            <view class="td center" style="width:184rpx;">{{item.feeDesc}}</view>
                        </view>
                        <view class="tr" v-if="detailInfo.refundRuleDesc">
                            <view class="td" style="width:100%;">
                                <u-parse class="" :html="detailInfo.refundRuleDesc" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="fold-icon">
                    <u-icon class="" color="rgba(0,0,0,0.8);" :name="foldRemark?'arrow-up':'arrow-down'" size="18"></u-icon>
                </view>
            </view>
        </view>
    </view>
    <view class="model tourist">
        <view class="title _p">游客信息</view>
        <view class="tourist-item" :key="index" v-for="(item, index) in detailInfo.visitorInfoVos">
            <view class="des">{{'旅客'+index+1}}</view>
            <view class="name">
                <view class="text _p">{{item.name}}</view>
                <view class="lable">{{peopleTypeList[item.peopleType]}}</view>
            </view>
            <view class="num">{{item.idCard}}</view>
            <view class="type">证件号</view>
            <image class="icon" src="https://eshopfile.zhiyousx.com/168492134271144514.png" v-if="!item.isCloseId"></image>
            <image class="icon" src="https://eshopfile.zhiyousx.com/168492259404793104.png" v-if="item.isCloseId"></image>
        </view>
    </view>
    <view class="model predetermine">
        <view class="title _p">预订人</view>
        <view class="predetermine-item">
            <view class="name _p">{{detailInfo.contactPerson}}</view>
            <view class="phone _p">{{detailInfo.contactTel}}</view>
            <image class="icon" src="https://eshopfile.zhiyousx.com/168492134271144514.png" v-if="!detailInfo.isClose" @click="queryPhone(0, detailInfo)"></image>
            <image class="icon" src="https://eshopfile.zhiyousx.com/168492259404793104.png" v-if="detailInfo.isClose" @click="queryPhone(1, detailInfo)"></image>
        </view>
    </view>
    <view class="model order-info" v-if="detailInfo.lineOrderOtherInfoDTOList[0]">
        <view class="title _p">其它信息</view>
        <view class="info-item" :key="index" v-for="(it, index) in detailInfo.lineOrderOtherInfoDTOList">
            <view class="name _p">{{it.title}}</view>
            <view class="content contentp _p">{{it.content}}</view>
        </view>
    </view>
    <view class="model order-info">
        <view class="title _p">订单信息</view>
        <view class="info-item">
            <view class="name _p">订单编号</view>
            <view class="content _p">{{detailInfo.orderNo}}</view>
        </view>
        <view class="info-item">
            <view class="name _p">下单时间</view>
            <view class="content _p">{{detailInfo.createTime}}</view>
        </view>
        <view class="info-item" v-if="detailInfo.payChannel!=null">
            <view class="name _p">支付方式</view>
            <view class="content _p">{{$root.m4}}</view>
        </view>
        <view class="info-item" v-if="detailInfo.payTime!=null">
            <view class="name _p">支付时间</view>
            <view class="content _p">{{detailInfo.payTime}}</view>
        </view>
        <view class="info-item">
            <view class="name _p">供应商</view>
            <view class="content _p" @click="goTravelAgency(detailInfo.travelAgencyId)">{{ detailInfo.travelAgencyName }}<image class="content-icon" src="https://eshopfile.zhiyousx.com/169752565139220610.png"></image>
            </view>
        </view>
    </view>
    <view class="line_submit" :style="'height:'+(100+safeAreaBottom)+'rpx'+';'+'padding-bottom:'+safeAreaBottom+'rpx'+';'" v-if="detailInfo.orderStatus==1||(detailInfo.orderStatus==3||detailInfo.orderStatus==9||detailInfo.orderStatus==13)&&detailInfo.refundRuleType||detailInfo.orderStatus===2">
        <view class="iconBox">
            <button class="submit_icon share" v-if="detailInfo.customService" @click="getCustomer()">
                <image class="" src="/static/captured/c2626d5726ed2448.png"></image>
                <view class="text">客服</view>
            </button>
        </view>
        <view class="btn-box">
            <view class="btn btn1" v-if="detailInfo.orderStatus==1" @click="openPopup(detailInfo.orderId)">取消订单</view>
            <view class="btn btn1" v-if="(detailInfo.orderStatus===3||detailInfo.orderStatus==9||detailInfo.orderStatus==13)&&detailInfo.refundRuleType" @click="orderRefund(detailInfo.orderId)">申请退款</view>
            <view class="btn btn1" v-if="detailInfo.orderStatus===2" @click="confirmRefund(detailInfo.orderId)">申请退款</view>
            <view class="btn btn2" v-if="detailInfo.orderStatus===1" @click="goPay(detailInfo.orderId)">立即支付</view>
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
            <button class="popupBtn" @click="cancelOrder(detailInfo.orderId)">确定</button>
        </view>
    </uni-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="priceInfoShow" :vueSlots="['default']" @input="priceInfoShow = $event">
        <view class="detailBox">
            <view class="title">价格明细</view>
            <scroll-view class="content-price" :scrollY="true">
                <view class="order">
                    <view class="order-item" v-for="(item, __i0__) in detailInfo.peopleNumList">
                        <view class="name">{{peopleTypeList[item.peopleType]}}</view>
                        <view class="num">
                            <view class="price _p">{{'￥'+item.unitPrice}}</view>
                            <view class="number _p">{{'x'+item.num}}</view>
                        </view>
                    </view>
                </view>
                <view class="price-info">
                    <view class="price-item">
                        <view class="l1">订单总额：</view>
                        <view class="l1">{{'￥'+detailInfo.orderAmount}}</view>
                    </view>
                    <view class="price-item">
                        <view class="l1 color">优惠券：</view>
                        <view class="l1 color">{{'-￥'+detailInfo.couponAmount}}</view>
                    </view>
                    <view class="price-item">
                        <view class="l1 color">应付金额：</view>
                        <view class="l1 color">{{'￥'+detailInfo.realPayableAmount}}</view>
                    </view>
                    <view class="price-item" v-if="detailInfo.orderStatus!=0&&detailInfo.orderStatus!=1&&detailInfo.orderStatus!=12">
                        <view class="l1 color big">实付金额：</view>
                        <view class="l1 color big2">{{'￥'+detailInfo.realPaid}}</view>
                    </view>
                </view>
            </scroll-view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="customerShow" :vueSlots="['default']" @input="customerShow = $event">
        <view class="detailBox-customer">
            <view class="title">客服</view>
            <scroll-view class="" scrollY="true" style="height:500rpx;">
                <view class="img-style">
                    <image class="" mode="widthFix" :showMenuByLongpress="true" :src="detailInfo.customService"></image>
                </view>
                <view class="" style="height:150rpx;width:100%;"></view>
            </scroll-view>
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
                searchHeight: 0,
                foldRemark: !1,
                safeAreaBottom: 0,
                priceInfoShow: !1,
                customerShow: !1,
                orderId: "",
                causeIdx: 0,
                detailInfo: {},
                peopleTypeList: ["", "成人", "儿童", "老人"],
                refundRuleType: ["不可退", "未验证随时退", "条件退"],
                parseStyle: {
                  p: "word-break: break-all;line-height:40rpx;color:rgba(0, 0, 0, 0.5);font-size:26rpx",
                  img: "border-radius: 20rpx;margin-top: 10rpx;"
                },
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
                orderObj: "",
                disableSubmit: !1
              }
            },
            onReady: function() {},
            onLoad: function(e) {},
            onUnload: function() {},
            onShow: function() {
              var n = getCurrentPages(),
                t = n[n.length - 1],
                o = uni.getMenuButtonBoundingClientRect();
              this.searchHeight = o.top, this.orderId = t.options.orderId, this.getOrderInfo();
              var i = this;
              this.submiting = !1, uni.getSystemInfo({
                success: function(e) {
                  i.safeAreaBottom = e.safeAreaInsets.bottom
                }
              })
            },
            methods: {
              orderRefund: function(e) {
                this.$navigateTo({
                  url: "/subPack/pages/lineRefundApply/lineRefundApply?orderId=".concat(e)
                })
              },
              confirmRefund: function(n) {
                var t = this;
                this.submiting || (this.submiting = !0, uni.showModal({
                  title: "提示",
                  content: "确认要退款吗？",
                  success: function(e) {
                    e.confirm ? t.$uniApi.dataRequestYesLoading("POST", "order/app/v1/lineOrder/refundBeforeConfirm", {
                      orderId: n
                    }, "退款中...").then((function(e) {
                      1 === e.code ? (t.$uni.showToast("退款成功"), t.getOrderInfo(), t.submiting = !1) : (t.$uni.showToast(e.msg), t.submiting = !1)
                    })) : t.submiting = !1
                  }
                }))
              },
              goPay: function(n) {
                var t, o = this;
                this.disableSubmit || (this.disableSubmit = !0, uni.showLoading({
                  title: "发起支付..."
                }), this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/order/waitPayToPay", (t = {
                  payChannel: ""
                }, (0, i.default)(t, "payChannel", "xy_wx_mini"), (0, i.default)(t, "orderSource", 5), (0, i.default)(t, "orderId", n), (0, i.default)(t, "buyerMemo", ""), (0, i.default)(t, "seriesNumber", uni.getStorageSync("userInfor").openId || uni.getStorageSync("wxopenid")), t), "支付中").then((function(n) {
                  if (1 !== n.code) return o.submiting = !1, void o.$uni.showToast(n.msg);
                  uni.requestPayment({
                    timeStamp: n.data.timeStamp,
                    nonceStr: n.data.nonceStr,
                    package: "prepay_id=".concat(n.data.prepayid),
                    signType: n.data.signType,
                    paySign: n.data.pay_sign,
                    orderInfo: n.data.tradeNo,
                    success: function(n) {
                      n.resultCode, o.$uni.showToast("支付成功");
                      var t = o;
                      uni.requestSubscribeMessage({
                        tmplIds: ["vaaW2n2qCr5GeEy29ndpGgf02U0Ahbd012RdA45Z90A"],
                        success: function(e) {
                          t.sendWxMessage(), t.getOrderInfo()
                        },
                        fail: function(e) {
                          t.getOrderInfo()
                        }
                      }), o.submiting = !1
                    },
                    fail: function(e) {
                      o.submiting = !1
                    }
                  })
                })).catch((function(e) {})).finally((function() {
                  setTimeout((function() {
                    uni.hideLoading(), o.disableSubmit = !1
                  }), 300)
                })))
              },
              sendWxMessage: function() {
                var e = {
                  orderId: this.orderId
                };
                this.$uniApi.dataRequestYesLoading("GET", "order/app/v1/lineOrder/sendWxMessage", e, "加载中..").then((function(e) {}))
              },
              cancelOrder: function(e) {
                var n = this,
                  t = {
                    orderId: e
                  };
                this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/lineOrder/cancel", t).then((function(e) {
                  1 === e.code ? (n.getOrderInfo(), n.$uni.showToast("订单已取消"), n.closePopup()) : n.$uni.showToast(e.msg)
                })).catch((function(e) {
                  n.$uni.showToast(e.msg)
                }))
              },
              closePopup: function() {
                this.orderObj = "", this.$refs.popup.close()
              },
              openPopup: function(e) {
                this.orderObj = e, this.$refs.popup.open()
              },
              getOrderInfo: function() {
                var e = this,
                  n = {
                    orderId: this.orderId
                  };
                this.$uniApi.dataRequestYesLoading("GET", "order/app/v1/lineOrder/detail", n, "加载中..").then((function(n) {
                  1 == n.code && (e.detailInfo = n.data)
                }))
              },
              peopleText: function(e) {
                var n = "";
                if (!e) return n;
                var t = ["", "成人", "儿童", "老人"];
                return e.forEach((function(e) {
                  n += e.num + t[e.peopleType] + ","
                })), n.slice(0, -1)
              },
              cityName: function(e) {
                var n = "";
                return null == e || (e.forEach((function(e, t) {
                  n += e + "/"
                })), n && (n = n.slice(0, -1) + "出发,")), n
              },
              refundDetail: function(e) {
                this.$navigateTo({
                  url: "/pages/refundRecord/refundRecord?orderId=".concat(e, "&cs=").concat(1 == this.detailInfo.scenicType ? 1 : "", "&isLineProduct=1")
                })
              },
              queryPhone: function(e, n) {
                e ? (n.isClose = !1, n.contactTel = n.beforePhone) : this.$uniApi.dataRequestNoLoading("POST", "base/v1/common/getAppPhone", {
                  phone: n.enContactTel
                }).then((function(e) {
                  n.beforePhone = n.contactTel, n.isClose = !0, n.contactTel = e.data
                }))
              },
              queryIdCard: function(e, n) {
                e ? (n.isCloseId = !1, n.idCard = n.beformCard) : this.$uniApi.dataRequestNoLoading("POST", "base/v1/common/getAppIdCard", {
                  idCard: n.enIdCard
                }).then((function(e) {
                  n.beformCard = n.idCard, n.isCloseId = !0, n.idCard = e.data
                }))
              },
              orderStatusTick: function(e) {
                return 0 === e ? "新提交" : 1 === e ? "待支付" : 2 === e ? "确认中" : 3 === e ? "待游玩" : 5 === e ? "订单完成" : 8 === e ? "退款审核中" : 9 === e ? "部分退款" : 10 === e ? "退款完成" : 11 === e ? "出票失败" : 12 === e ? "订单关闭" : 13 === e ? "已过期" : void 0
              },
              orderPayChannel: function(e) {
                return "alipay" == e || "alipay_mini" == e ? "支付宝" : "wx" === e || "wxapp" === e || "xy_wx_mini" === e ? "微信" : "pos" == e ? "线下POS机" : "unionpay" == e ? "银联在线" : "tenpay" == e ? "财付通" : "99bill" == e ? "快钱" : e
              },
              goTravelAgency: function(e) {
                this.$navigateTo({
                  url: "/subPack/pages/travelAgency/travelAgency?travelAgencyId=" + e
                })
              },
              priceInfo: function() {
                this.priceInfoShow = !0
              },
              getCustomer: function() {
                this.customerShow = !0
              },
              back: function() {
                uni.navigateBack()
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.box .table{margin-bottom:20rpx;width:100%}.box .table .th{background:rgba(255,84,17,.1);display:-webkit-flex;display:flex;width:100%}.box .table .th .td{align-items:center;border-bottom:1rpx solid rgba(0,0,0,.1);border-right:1rpx solid rgba(0,0,0,.1);color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;font-size:26rpx;font-weight:700;height:60rpx;justify-content:center;width:100%;word-break:break-all}.box .table .th .td:nth-last-child(1){border-right:none}.box .table .tr{background:#fafafa;display:-webkit-flex;display:flex;width:100%}.box .table .tr .td{border-bottom:1rpx solid rgba(0,0,0,.1);border-right:1rpx solid rgba(0,0,0,.1);color:rgba(0,0,0,.7);font-size:26rpx;min-height:60rpx;padding:10rpx 30rpx;width:512rpx;word-break:break-all}.box .table .tr .bold,.box .table .tr .td{align-items:center;display:-webkit-flex;display:flex}.box .table .tr .bold{color:rgba(0,0,0,.8);font-weight:700;padding-right:0;width:160rpx}.box .table .tr .center{justify-content:center;padding:10rpx}.box .navbar,.box .table .tr .center{align-items:center;display:-webkit-flex;display:flex}.box .navbar{background:#fff;left:0;padding-left:35rpx;position:fixed;top:0;width:100%;z-index:300}.box .navbar .navName{font-size:34rpx;margin-left:10rpx}.box .title-bj{background:linear-gradient(180deg,#ffb0b0,#f5f5f5);height:250rpx;width:100%}.box .title-bj .top{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;padding:64rpx 40rpx 0}.box .title-bj .top .type{align-items:flex-end;display:-webkit-flex;display:flex}.box .title-bj .top .type .p1{color:rgba(0,0,0,.8);font-size:40rpx;font-weight:700}.box .title-bj .top .type .p2{color:rgba(0,0,0,.8);font-size:26rpx;margin-left:20rpx}.box .title-bj .top .price{align-items:center;display:-webkit-flex;display:flex}.box .title-bj .top .price .unit{color:rgba(0,0,0,.8);font-size:26rpx;margin-top:-3rpx}.box .title-bj .top .price .num{color:rgba(0,0,0,.8);font-size:40rpx;font-weight:700;margin-right:10rpx}.box .title-bj .top .price .info{color:rgba(0,0,0,.5);font-size:24rpx}.box .title-bj .bottom{align-items:center;background:#fff;border-radius:20rpx;display:-webkit-flex;display:flex;height:114rpx;justify-content:space-between;margin-left:20rpx;margin-top:40rpx;padding:0 20rpx;width:710rpx}.box .title-bj .bottom .text{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:700}.box .title-bj .bottom .info{align-items:center;display:-webkit-flex;display:flex}.box .title-bj .bottom .info .info-text{color:rgba(0,0,0,.5);font-size:28rpx}.box .orderAdvertisement{border-radius:20rpx;margin-left:20rpx;margin-right:20rpx;overflow:hidden;width:710rpx}.box .orderAdvertisement .community-box{width:100%}.box .mt{margin-bottom:110rpx;margin-top:-106rpx}.box .mt1{margin-bottom:40rpx;margin-top:52rpx}.box .model{background:#fff;border-radius:20rpx;margin-left:20rpx;margin-top:10rpx;padding:30rpx 20rpx;width:710rpx}.box .model .title{color:#333;font-size:32rpx;font-weight:700}.box .product .model-item{border-bottom:1rpx solid rgba(0,0,0,.1);margin-bottom:30rpx;padding-bottom:30rpx}.box .product .model-item:nth-last-child(1){border-bottom:none;margin-bottom:0rpx;padding-bottom:0rpx}.box .product .product-title .name{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:700}.box .product .product-title .info-item{align-items:center;display:-webkit-flex;display:flex;margin-top:20rpx}.box .product .product-title .info-item .icon{height:26rpx;margin-right:20rpx;width:26rpx}.box .product .product-title .info-item .text{color:rgba(0,0,0,.8);flex:1;font-size:26rpx}.box .product .illustrate{padding-bottom:20rpx}.box .product .illustrate .name{color:rgba(0,0,0,.8);font-size:28rpx}.box .product .illustrate .text{color:rgba(0,0,0,.5);font-size:26rpx;line-height:40rpx;margin-top:10rpx}.box .product .rule .title{align-items:center;display:-webkit-flex;display:flex}.box .product .rule .title .name{color:rgba(0,0,0,.8);font-size:28rpx;margin-right:16rpx}.box .product .rule .title .lable{align-items:center;border:1rpx solid #ff5411;border-radius:4rpx;color:#ff5411;display:-webkit-flex;display:flex;font-size:24rpx;height:36rpx;line-height:36rpx;padding:0 10rpx}.box .product .rule .content{display:-webkit-flex;display:flex;justify-content:space-between;margin-top:15rpx}.box .product .rule .content .contentInfo{width:620rpx}.box .product .rule .content .contentInfo .text{color:rgba(0,0,0,.5);font-size:26rpx;line-height:40rpx;width:620rpx}.box .product .rule .content .fold-icon{display:-webkit-flex;display:flex;height:30rpx}.box .tourist .tourist-item{align-items:center;display:-webkit-flex;display:flex;flex-wrap:wrap;margin-top:20rpx}.box .tourist .tourist-item .des{color:rgba(0,0,0,.5);font-size:26rpx;width:90rpx}.box .tourist .tourist-item .name{align-items:center;display:-webkit-flex;display:flex;min-width:160rpx}.box .tourist .tourist-item .name .text{color:rgba(0,0,0,.8);font-size:28rpx}.box .tourist .tourist-item .name .lable{align-items:center;background:rgba(0,0,0,.05);border-radius:4rpx;color:rgba(0,0,0,.5);display:-webkit-flex;display:flex;font-size:24rpx;height:36rpx;line-height:36rpx;margin-left:10rpx;padding:0 10rpx}.box .tourist .tourist-item .icon{height:30rpx;margin-left:10rpx;width:30rpx}.box .tourist .tourist-item .num{color:rgba(0,0,0,.8);font-size:28rpx}.box .tourist .tourist-item .type{align-items:center;display:-webkit-flex;display:flex}.box .tourist .tourist-item .type,.box .tourist .tourist-item .type1{border:1rpx solid rgba(0,0,0,.5);border-radius:4rpx;color:rgba(0,0,0,.5);font-size:24rpx;height:40rpx;line-height:36rpx;margin-left:10rpx;padding:0 10rpx}.box .tourist .tourist-item .type1{display:block}.box .tourist .tourist-item:nth-child(2){margin-top:30rpx}.box .predetermine .predetermine-item{align-items:center;display:-webkit-flex;display:flex;margin-top:20rpx}.box .predetermine .predetermine-item .name{color:rgba(0,0,0,.8);font-size:28rpx}.box .predetermine .predetermine-item .phone{color:rgba(0,0,0,.8);font-size:28rpx;margin-left:68rpx}.box .predetermine .predetermine-item .icon{height:30rpx;margin-left:20rpx;width:30rpx}.box .predetermine .predetermine-item:nth-child(2){margin-top:30rpx}.box .order-info .info-item{display:-webkit-flex;display:flex;margin-top:20rpx}.box .order-info .info-item .name{color:rgba(0,0,0,.5);font-size:26rpx;margin-right:30rpx;max-width:120rpx;width:120rpx}.box .order-info .info-item .content{align-items:center;color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;font-size:26rpx;width:520rpx}.box .order-info .info-item .content .content-icon{height:32rpx;margin-left:10rpx;width:32rpx}.box .order-info .info-item .contentp{align-items:flex-start}.box .order-info .info-item:nth-child(2){margin-top:30rpx}.box .line_submit{background:#fff;bottom:0;box-shadow:0rpx -10rpx 20rpx 0rpx rgba(0,0,0,.1);height:130rpx;justify-content:space-between;padding:0 40rpx 30rpx;position:fixed;width:100%;z-index:12100}.box .line_submit .iconBox,.box .line_submit{align-items:center;display:-webkit-flex;display:flex}.box .line_submit .iconBox .submit_icon{margin-right:50rpx}.box .line_submit .iconBox .submit_icon image{height:48rpx;width:48rpx}.box .line_submit .iconBox .submit_icon .text{color:#4e5969;font-size:20rpx;margin-top:-5rpx;text-align:center}.box .line_submit .iconBox .share{background:#fff;display:block;height:74rpx;line-height:30rpx;padding:0}.box .line_submit .btn-box{display:-webkit-flex;display:flex}.box .line_submit .btn-box .btn{align-items:center;border-radius:40rpx;display:-webkit-flex;display:flex;font-size:28rpx;height:80rpx;justify-content:center;width:192rpx}.box .line_submit .btn-box .btn1{border:1rpx solid rgba(0,0,0,.3);color:rgba(0,0,0,.6);margin-right:20rpx}.box .line_submit .btn-box .btn2{background:linear-gradient(253deg,#fc4a9b,#ff5413);color:#fff}.box .detailBox{background:#fff;margin-bottom:130rpx;max-height:1200rpx;padding:40rpx;width:750rpx}.box .detailBox .title{color:#333;font-size:36rpx;line-height:54rpx}.box .detailBox .content-price{max-height:1000rpx;width:100%}.box .detailBox .content-price .order{border-bottom:1rpx solid #e5e5e5;margin-top:50rpx;padding-bottom:50rpx}.box .detailBox .content-price .order .order-item{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:30rpx}.box .detailBox .content-price .order .order-item .name{color:rgba(0,0,0,.8);font-size:28rpx}.box .detailBox .content-price .order .order-item .num{align-items:center;display:-webkit-flex;display:flex}.box .detailBox .content-price .order .order-item .num .price{color:rgba(0,0,0,.8);font-size:28rpx;margin-right:14rpx}.box .detailBox .content-price .order .order-item .num .number{color:rgba(0,0,0,.5);font-size:24rpx}.box .detailBox .content-price .order .order-item:nth-last-child(1){margin-bottom:0}.box .detailBox .content-price .price-info{margin-top:50rpx}.box .detailBox .content-price .price-info .price-item{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:30rpx}.box .detailBox .content-price .price-info .price-item .l1{color:rgba(0,0,0,.8);font-size:28rpx}.box .detailBox .content-price .price-info .price-item .color{color:#ff5411}.box .detailBox .content-price .price-info .price-item .big{font-size:32rpx}.box .detailBox .content-price .price-info .price-item .big2{font-size:36rpx}.box .detailBox .content-price .price-info .price-item:nth-last-child(1){margin-bottom:0}.box .detailBox-customer{background:#fff;height:auto;max-height:1100rpx;min-height:400rpx;padding:40rpx;width:750rpx}.box .detailBox-customer .title{color:#333;font-size:36rpx;padding:40rpx 0;text-align:center}.box .detailBox-customer .img-style{align-items:center;display:-webkit-flex;display:flex;justify-content:center}.box .popup{background-color:#fff;border-radius:40rpx 40rpx 0 0;height:750rpx;padding:0 30rpx;position:relative;width:100%}.box .popup .popTitle{align-items:center;display:-webkit-flex;display:flex;height:90rpx;justify-content:space-between}.box .popup .popTitle .titleText{flex:1;text-align:center}.box .popup .popupBtn{background-color:#fff;border:1rpx solid #ff4643;border-radius:92rpx;bottom:100rpx;color:#ff4643;height:92rpx;left:20rpx;line-height:92rpx;position:absolute;right:20rpx}.box .popup .popupBtn:after{border:0}.box .popup .popMain{padding-bottom:100rpx}.box .popup .popMain .radioItem{align-items:center;border-bottom:1rpx solid #f7f7f7;display:-webkit-flex;display:flex;height:92rpx}.box .popup .popMain .radioItem .radioIcon{transform:scale(.7)}
</style>
