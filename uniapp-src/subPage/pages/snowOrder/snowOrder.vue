<template>
<view class="box" v-if="detailInfo.orderId">
    <view class="page-box">
        <view class="bg-box">
            <view class="bgText">
                <view class="state" v-if="detailInfo.subscribeEditStatus!=1">{{$root.m0}}</view>
                <view class="state" v-else>待处理</view>
                <view class="tips" v-if="detailInfo.subscribeEditStatus==1">雪场预计15分钟内确认，请耐心等待</view>
                <block v-else>
                    <view class="tips" v-if="detailInfo.status==0">雪场预计提前1天放置雪具入柜，请耐心等待</view>
                    <block v-else>
                        <view class="tips" v-if="detailInfo.status==1">到达雪场后扫柜身二维码，输入激活码激活柜子</view>
                        <block v-else>
                            <view class="tips" v-if="detailInfo.status==3">押金扣除消费后退回原支付账号</view>
                        </block>
                    </block>
                </block>
            </view>
        </view>
        <view class="info m-top">
            <view class="itemBox">
                <view class="title">{{detailInfo.subscribeProject}}</view>
                <view class="price">{{'￥'+detailInfo.deposit}}</view>
            </view>
            <view class="topTitle">{{'门票订单-'+detailInfo.orderId}}</view>
            <view class="num">{{'x '+detailInfo.subscribeNumber}}</view>
            <view class="itemBox">
                <view class="name">实付押金</view>
                <view class="value">{{'￥'+detailInfo.depositSum}}</view>
            </view>
            <view class="itemBox" v-if="detailInfo.refundAmount">
                <view class="name">
                    <text class="">实退押金</text>
                    <text class="show" v-if="detailInfo.depositRemarks" @click="showMask($event)">查看></text>
                </view>
                <view class="value">{{'￥'+detailInfo.refundAmount}}</view>
            </view>
        </view>
        <view class="hotel-box">
            <view class="hotel-title m40">
                <text class="">预约明细</text>
            </view>
            <view class="user" :key="index" v-for="(item, index) in $root.l1">
                <view class="user-top">
                    <view class="name">{{item.m1}}</view>
                    <view class="value" v-if="item.price">{{'¥'+item.price}}</view>
                </view>
                <view class="user-it">
                    <view class="it" :key="i" v-for="(it, i) in item.l0">
                        <view class="it-name">{{'预约人'+i+1+':'}}</view>
                        <view class="it-info">{{it.m2}}</view>
                    </view>
                </view>
            </view>
            <view class="hotel-title m40">
                <text class=""></text>
                <view class="addbook" v-if="detailInfo.subscribeEditStatus!=1&&(detailInfo.status==1||detailInfo.status==0)" @click="jumpToGear(detailInfo.orderId, subscribeId)">增加预约</view>
            </view>
            <view class="tips">*明细仅作为预约登记记录，实际消费以景区为准</view>
        </view>
        <view class="hotel-box">
            <view class="hotel-title m30">雪柜信息</view>
            <view class="hotel-table">
                <view class="hotel-th th">
                    <view class="t">游客信息</view>
                    <view class="t">柜号</view>
                    <view class="t">激活码</view>
                </view>
                <view class="d-table">
                    <view class="d-tr" :key="index" v-for="(item, index) in detailInfo.peopleLockersVoList">
                        <view class="d-td" v-if="detailInfo.status==2||detailInfo.status==4">
                            <view class="d-table tableType">
                                <view class="d-tr">
                                    <view class="d-td tableType" style="width:33.3%;">{{'预约人'+index+1+''}}</view>
                                    <view class="d-td tableType border-left color">已取消</view>
                                </view>
                            </view>
                        </view>
                        <block v-else>
                            <view class="d-td" v-if="detailInfo.status==3">
                                <view class="d-table tableType">
                                    <view class="d-tr">
                                        <view class="d-td tableType" style="width:33.3%;">{{'预约人'+index+1+''}}</view>
                                        <view class="d-td tableType border-left color">已完成</view>
                                    </view>
                                </view>
                            </view>
                            <view class="d-td" v-else>
                                <view class="d-table" v-if="item.lockersNo&&item.lockersPassword">
                                    <view class="d-tr">
                                        <view class="d-td tableType" style="width:33.3%;">{{'预约人'+index+1}}</view>
                                        <view class="d-td tableType border-left">{{item.lockersNo}}</view>
                                        <view class="d-td tableType border-left">{{item.lockersPassword}}</view>
                                    </view>
                                </view>
                                <view class="d-table tableType" v-else>
                                    <view class="d-tr">
                                        <view class="d-td tableType" style="width:33.3%;">{{'预约人'+index+1+''}}</view>
                                        <view class="d-td tableType border-left color" v-if="detailInfo.status==0">待入柜</view>
                                        <view class="d-td tableType border-left color" v-else>请联系服务台获取</view>
                                    </view>
                                </view>
                            </view>
                        </block>
                    </view>
                </view>
            </view>
            <view class="hotel-list-box">
                <view class="item">
                    <text class="title">产品信息：</text>
                    <text class="value">{{detailInfo.itemTitle}}</text>
                </view>
                <view class="item">
                    <text class="title">使用时间：</text>
                    <text class="value">{{day}}</text>
                </view>
                <view class="item">
                    <view class="title">预计到达：</view>
                    <text class="value">{{time}}</text>
                </view>
            </view>
        </view>
        <view class="hotel-box">
            <view class="hotel-title m20">订单信息</view>
            <view class="hotel-list-box">
                <view class="item">
                    <text class="title">订单编号：</text>
                    <text class="value">{{detailInfo.id}}</text>
                </view>
                <view class="item">
                    <text class="title">下单时间：</text>
                    <text class="value">{{detailInfo.createTime}}</text>
                </view>
                <view class="item">
                    <view class="title">支付方式：</view>
                    <text class="value">{{$root.m3}}</text>
                </view>
                <view class="item">
                    <view class="title">支付时间：</view>
                    <text class="value">{{detailInfo.payTime}}</text>
                </view>
            </view>
        </view>
    </view>
    <view class="item-footer" v-if="(detailInfo.status==0||detailInfo.payStatus==0)&&detailInfo.status!=4&&detailInfo.status!=3&&detailInfo.status!=2">
        <view class="repeat-buy-btn" v-if="detailInfo.status==0||detailInfo.payStatus==0" @click="cancelOrder()">取消订单</view>
        <view class="pay-btn" v-if="detailInfo.payStatus===0" @click="goPay()">付款</view>
    </view>
    <view class="mask-box" v-if="show" @click="closeMask($event)">
        <view class="main" @click.stop="($event)">
            <view class="title">押金备注</view>
            <view class="info">
                <text class="">{{detailInfo.depositRemarks}}</text>
            </view>
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
              parseStyle: {
                p: "word-break: break-all;"
              },
              detailInfo: {},
              day: "",
              time: "",
              show: !1
            }
          },
          onLoad: function(n) {
            n.subscribeId && (this.subscribeId = n.subscribeId)
          },
          onShow: function() {
            this.pageLoad()
          },
          methods: {
            showMask: function() {
              this.show = !0
            },
            orderStatus: function(n) {
              return 0 === n ? "待处理" : 1 === n ? "已入柜" : 2 === n ? "已取消" : 3 === n ? "已退押金" : 4 === n ? "已取消" : void 0
            },
            closeMask: function() {
              this.show = !1
            },
            pageLoad: function() {
              var n = this,
                e = {
                  subscribeId: this.subscribeId
                };
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/orderSubscribe/getOrderSubscribe", e).then((function(e) {
                if (1 != e.code) return n.disabledSubmitBtn = !1, void n.$uni.showToast(data.msg);
                n.detailInfo = e.data;
                var t = e.data.subscribeTime.split(" ");
                n.day = t[0];
                var a = t[1].split(":");
                n.time = a[0] + "点" + a[1] + "分"
              }))
            },
            orderPayChannel: function(n) {
              return "alipay" == n || "alipay_mini" == n ? "支付宝" : "wx" === n || "wxapp" === n || "xy_wx_mini" === n ? "微信" : "pos" == n ? "线下POS机" : "unionpay" == n ? "银联在线" : "tenpay" == n ? "财付通" : "99bill" == n ? "快钱" : void 0
            },
            getClassNameChannel: function(n) {
              return 1 == n ? "雪板" : 2 == n ? "雪鞋" : 3 == n ? "头盔" : 4 == n ? "雪服" : 5 == n ? "雪镜" : 6 == n ? "手套" : 7 == n ? "护臀套装" : void 0
            },
            getInfo: function(n, e) {
              var t = n.split(" "),
                a = "",
                o = "";
              return t.forEach((function(n) {
                a = a + " " + n
              })), 1 == e ? o = "自带" == t[t.length - 1] ? "" : "cm" : 2 == e && (o = "自带" == t[t.length - 1] ? "" : "码"), a + o
            },
            cancelOrder: function() {
              var e = this,
                t = {
                  subscribeId: this.subscribeId
                };
              uni.showModal({
                title: "取消订单",
                content: "订单取消后，无法重新预约，您确定取消该订单吗？",
                confirmColor: "#ff4643",
                success: function(n) {
                  n.confirm && e.$uniApi.dataRequestNoLoading("GET", "order/app/v1/orderSubscribe/subscribeCancel", t).then((function(n) {
                    1 === n.code ? (e.pageLoad(), e.$uni.showToast("订单已取消")) : e.$uni.showToast(n.msg)
                  })).catch((function(n) {
                    e.$uni.showToast(n.msg)
                  }))
                }
              })
            },
            jumpToGear: function(n, e) {
              this.$navigateTo({
                url: "/subPage/pages/snowGear/snowGear?orderId=".concat(n, "&sid=").concat(e)
              })
            },
            goPay: function() {
              var e = this;
              this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/orderSubscribe/subscribeWaitPayToPay", {
                payChannel: "",
                subscribeId: this.subscribeId,
                openId: uni.getStorageSync("userInfor").openId
              }, "支付中").then((function(t) {
                1 === t.code ? uni.requestPayment({
                  timeStamp: t.data.timeStamp,
                  nonceStr: t.data.nonceStr,
                  package: "prepay_id=".concat(t.data.prepayid),
                  signType: t.data.signType,
                  paySign: t.data.pay_sign,
                  success: function(n) {
                    e.pageLoad()
                  },
                  fail: function(n) {
                    console.log("fail:" + JSON.stringify(n)), e.pageLoad()
                  }
                }) : e.$uni.showToast(t.msg)
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#fafafa;font-family:Source Han Sans CN-Normal,Source Han Sans CN;font-weight:400;line-height:1;min-height:100vh;padding-bottom:100rpx;width:100%}.page-box .bg-box{background:linear-gradient(93deg,#fc4c66,#fe5130);box-sizing:border-box;height:210rpx;padding:54rpx 0 0 40rpx;width:750rpx}.page-box .bg-box .bgText{align-items:center;display:-webkit-flex;display:flex}.page-box .bg-box .bgText .state{color:#fff;font-size:36rpx;margin-right:35rpx}.page-box .bg-box .bgText .tips{color:hsla(0,0%,100%,.8);font-family:Source Han Sans CN-Normal,Source Han Sans CN;font-size:24rpx}.page-box .m-top{margin-top:-60rpx}.page-box .info{background:#fff;border-radius:20rpx;box-sizing:border-box;margin-left:20rpx;padding:40rpx 20rpx;width:710rpx}.page-box .info .topTitle{color:#222;font-size:28rpx;margin-bottom:20rpx}.page-box .info .itemBox{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:20rpx}.page-box .info .itemBox .title{color:#222;font-size:30rpx;font-weight:500}.page-box .info .itemBox .price{color:#333;font-size:30rpx}.page-box .info .itemBox .name{color:#333;display:-webkit-flex;display:flex;font-size:28rpx}.page-box .info .itemBox .name .show{color:#666;font-size:24rpx;font-weight:400;line-height:28rpx;margin-left:17rpx}.page-box .info .itemBox .value{color:#ff5411;font-size:28rpx;margin-right:7rpx}.page-box .info .itemBox:first-child{margin-bottom:21rpx}.page-box .info .itemBox:last-child{margin-bottom:4rpx}.page-box .info .num{color:#828282;display:-webkit-flex;display:flex;flex-direction:row-reverse;font-size:26rpx;margin-bottom:31rpx;margin-right:8rpx;width:100%}.page-box .orderInfo{margin-bottom:100rpx}.page-box .hotel-box{background:#fff;border-radius:20rpx;box-sizing:border-box;margin:10rpx 20rpx;padding:40rpx 20rpx}.page-box .hotel-box .hotel-title{color:#222;font-size:30rpx;font-weight:700;line-height:45rpx}.page-box .hotel-box .m40{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:40rpx}.page-box .hotel-box .m40 text{color:#222;font-size:30rpx;font-weight:700;line-height:45rpx}.page-box .hotel-box .m40 .addbook{background-color:#fff;border:1rpx solid #cfcfcf;border-radius:54rpx;color:#222;font-size:24rpx;height:66rpx;line-height:62rpx;margin-left:20rpx;text-align:center;width:200rpx}.page-box .hotel-box .m30{margin-bottom:30rpx}.page-box .hotel-box .m20{margin-bottom:20rpx}.page-box .hotel-box .hotel-table{margin-bottom:40rpx;text-align:center;width:670rpx}.page-box .hotel-box .hotel-table .hotel-th{display:-webkit-flex;display:flex;flex-direction:row;height:70rpx}.page-box .hotel-box .hotel-table .hotel-th .t{width:33.33%}.page-box .hotel-box .hotel-table .th{background:#fffaf8;color:#333;font-size:26rpx;line-height:70rpx}.page-box .hotel-box .hotel-table .td{border:1px solid #e0e0e0}.page-box .hotel-box .hotel-table .tableType{color:#585858;font-family:Source Han Sans CN-Normal,Source Han Sans CN;font-size:26rpx;font-weight:400}.page-box .hotel-box .hotel-table .color{color:#969696}.page-box .hotel-box .user{width:668rpx}.page-box .hotel-box .user .user-top{align-items:center;color:#222;display:-webkit-flex;display:flex;flex-direction:row;font-size:28rpx;justify-content:space-between;line-height:33rpx;margin-bottom:20rpx}.page-box .hotel-box .user .user-top .name{font-weight:500}.page-box .hotel-box .user .user-top .value{font-weight:400}.page-box .hotel-box .user .user-it{color:#969696;font-size:26rpx;font-weight:400;line-height:30px;margin-bottom:40rpx}.page-box .hotel-box .user .user-it .it{display:-webkit-flex;display:flex}.page-box .hotel-box .user .user-it .it .it-name{color:#969696;margin-right:15rpx;width:125rpx}.page-box .hotel-box .user .user-it .it .it-info{color:#585858}.page-box .hotel-box .user .user-it:last-child{margin-bottom:30rpx}.page-box .hotel-box .hotel-list-box{color:#909090;font-size:26rpx;line-height:32rpx;padding-top:2rpx}.page-box .hotel-box .hotel-list-box .item{color:#909090;display:-webkit-flex;display:flex;flex-direction:row;margin-bottom:20rpx;padding-top:2rpx}.page-box .hotel-box .hotel-list-box .item .title{color:#969696;display:inline-block;font-weight:400;padding-right:10rpx;text-align:left;width:150rpx}.page-box .hotel-box .hotel-list-box .item .value{color:#585858;font-weight:400;width:499rpx}.page-box .hotel-box .hotel-list-box .item .valueP{color:#585858;font-size:26rpx;font-weight:400;line-height:35rpx;width:499rpx;word-break:break-all}.page-box .hotel-box .tips{color:#ff5411;font-size:24rpx}.item-footer{align-items:center;background:#fff;border-top:1px solid #d9d9d7;bottom:0;display:flex;display:-webkit-flex;height:100rpx;justify-content:flex-end;left:0;padding:0 30rpx;position:fixed;width:100%}.item-footer .repeat-buy-btn{border:1rpx solid #d1d1d1;border-radius:20rpx;color:#2a2a2a}.item-footer .pay-btn,.item-footer .repeat-buy-btn{font-size:24rpx;height:60rpx;line-height:60rpx;margin-left:10rpx;text-align:center;width:160rpx}.item-footer .pay-btn{border:1rpx solid #f15252;border-radius:20rpx;color:#f15252}.mask-box{background:rgba(0,0,0,.5);height:100%;left:0;position:fixed;top:0;width:100%;z-index:1000}.mask-box .main{background:#fff;border-radius:20rpx;box-sizing:border-box;left:55rpx;padding:66rpx 60rpx 90rpx;position:absolute;top:257rpx;width:640rpx}.mask-box .main .title{color:#333;font-size:36rpx;font-weight:700;line-height:42rpx;margin-bottom:36rpx;text-align:center}.mask-box .info{color:#4f4f4f;font-size:26rpx;font-weight:400;line-height:48rpx;line-height:30rpx;max-height:700rpx;overflow-y:auto}
</style>
