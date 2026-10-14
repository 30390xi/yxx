<template>
<view class="bg" :style="'padding-bottom:'+(iscs?'100rpx':'260rpx')+';'" v-if="detailObj">
    <view class="box1">
        <view class="tip" v-if="!iscs">提交成功后，一般在1-7个工作日内审核完成，请耐心等待</view>
        <view class="b-box">
            <image class="img" mode="aspectFill" :src="detailObj.defaultPicUrl"></image>
            <view class="r-box">
                <view class="name">{{detailObj.itemName}}</view>
                <view class="num">
                    <view class="r">{{'X'+detailObj.payTicketNum}}</view>
                </view>
                <view class="price" v-if="!iscs">{{'￥'+detailObj.price}}</view>
            </view>
        </view>
    </view>
    <view class="box2">
        <view class="row">
            <view class="l">{{(iscs?'预约':'订单')+'状态'}}</view>
            <view class="r">{{$root.m0}}</view>
        </view>
        <view class="row row2">
            <view class="l">{{'可'+(iscs?'取消':'退')+'数量'}}</view>
            <view class="r">{{detailObj.num}}</view>
        </view>
        <view class="tourists-Choose" v-if="detailObj.checkMode==2&&detailObj.isPartialRefund==0&&detailObj.touristInfoType==2">
            <view class="lable">{{'选择'+(iscs?'取消':'退款')+'游客'}}</view>
            <scroll-view class="tourists-box" :scrollX="true">
                <view :class="['user','',item.g0?'active':'']" :key="index" v-for="(item, index) in $root.l0">{{ item.name }}</view>
            </scroll-view>
        </view>
        <view class="row" v-else>
            <view class="l">{{(iscs?'取消':'退款')+'数量'}}</view>
            <view class="r">
                <picker class="picker" :range="arrayNum" v-if="detailObj.isPartialRefund==0" @change="bindPickerChange($event)">
                    <view class="uni-input">{{canRefundNum+''}}<uni-icons class="" color="#AEAEAE" size="13" style="margin-left:15rpx;" type="arrowright"></uni-icons>
                    </view>
                </picker>
                <view class="" v-else>{{canRefundNum}}</view>
            </view>
        </view>
    </view>
    <view class="box3" v-if="!iscs">
        <view class="l">{{'可'+(iscs?'取消':'退款')+'金额'}}</view>
        <view class="r">{{'￥'+refundAmount}}</view>
    </view>
    <view class="box4">
        <view class="row1">
            <view class="l">{{(iscs?'取消':'退款')+'原因'}}</view>
            <view class="r">
                <picker class="picker" :range="arrayReason" @change="bindReasonPickerChange($event)">
                    <view class="uni-input">{{selectedReason+''}}</view>
                </picker>
            </view>
        </view>
    </view>
    <view class="box5" v-if="$root.g1">
        <view class="codeBox-title rfzc">退改政策<view class="rf-tag">{{ detailObj.refundTag }}</view>
        </view>
        <view :class="['table','',$root.g3==0?'borderNone':'']" v-if="$root.g2">
            <view class="tr first" v-if="$root.g4">
                <view class="td" style="font-weight:bold;width:480rpx;">退款时间</view>
                <view class="td" style="font-weight:bold;width:210rpx;">损失费用</view>
            </view>
            <view class="tr" v-if="item.timeDesc" v-for="(item, __i0__) in detailObj.orderRefundFeeSnapList">
                <view class="td" style="width:480rpx;">{{item.timeDesc||''}}</view>
                <view class="td" style="width:210rpx;">{{item.feeDesc||''}}</view>
            </view>
            <view :class="['tr','',$root.g5==0?'borderNone':'']" v-if="detailObj.refundStr">
                <view :class="['td','',$root.g6==0?'borderPadding':'']" style="width:690rpx;display:block;">
                    <view class="" v-for="(it, i) in $root.l1">
                        <view class="refundItem">{{it}}</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="notice" v-if="!iscs">
        <text class="">温馨提示</text>
        <text class="">1、限时优惠、预约资格等购买优惠可能一并取消</text>
        <text class="">2、取消订单优惠可能不退回，或退回已过期</text>
        <text class="">3、订单一旦取消，无法恢复</text>
    </view>
    <view :class="['submit','',iscs?'cs':'']" @click="submitFn($event)">提交申请</view>
    <u-modal class="" content="是否确认退票?" :showCancelButton="true" title="申请退票" :value="showPopup" @close="close()" @confirm="orderRefund()" @input="showPopup = $event"></u-modal>
    <u-modal class="" :content="errorTip" :showCancelButton="true" title="提示" :value="showPopup2" @close="close()" @confirm="refreshPage()" @input="showPopup2 = $event"></u-modal>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              parseStyle: {
                p: "word-break: break-all;line-height: 1.5"
              },
              detailObj: "",
              isRefunding: !1,
              errorTip: "",
              iscs: "",
              refundAmount: 0,
              arrayNum: [],
              canRefundNum: 0,
              arrayReason: ["行程取消", "门票预约错误", "未收到入园凭证", "景区无入园信息", "其他"],
              selectedReason: "请选择 >",
              refundType: 3,
              userList: [{
                id: "1",
                name: "李晓霞"
              }, {
                id: "2",
                name: "李一"
              }, {
                id: "3",
                name: "李二代"
              }, {
                id: "4",
                name: "闻不到"
              }, {
                id: "5",
                name: "时时彩"
              }, {
                id: "6",
                name: "偶当初"
              }],
              usedIds: [],
              showPopup: !1,
              showPopup2: !1
            }
          },
          components: {
            uniPopupDialog: function() {
              t.e("components/uni-popup/uni-popup-dialog").then(function() {
                return resolve(t("e97e"))
              }.bind(null, t)).catch(t.oe)
            }
          },
          filters: {},
          onLoad: function(n) {
            this._orderId = n.orderId, this.iscs = n.cs || "", n.cs && uni.setNavigationBarTitle({
              title: "取消预约"
            }), this._applyReasonType = "", this.getOrderDetail()
          },
          onUnload: function() {
            getApp().watchRouter()
          },
          methods: {
            refreshPage: function(e) {
              this.showPopup2 = !1, this.selectedReason = "请选择 >", this._applyReasonType = "", this.getOrderDetail()
            },
            getOrderDetail: function() {
              var e = this;
              uni.showLoading({
                title: "加载中..."
              }), this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getTicketOrderRefundInfo", {
                orderId: this._orderId
              }).then((function(n) {
                if (uni.hideLoading(), 1 === n.code) {
                  e.detailObj = n.data, 2 == e.detailObj.checkMode && 0 == e.detailObj.isPartialRefund && 2 == e.detailObj.touristInfoType && e.detailObj.verifyCodeList.forEach((function(n) {
                    e.usedIds.push(n.verifyCode)
                  }));
                  for (var t = 0; t < e.detailObj.num; t++) e.arrayNum.push(t + 1);
                  0 == e.detailObj.isPartialRefund ? (e.canRefundNum = e.detailObj.num, e.refundAmount = (e.canRefundNum * e.detailObj.price).toFixed(2)) : (e.canRefundNum = e.detailObj.num, e.refundAmount = e.detailObj.realPaid), e.getRefundMoney()
                } else e.$uni.showToast(n.msg)
              })).catch((function(e) {
                uni.hideLoading()
              }))
            },
            orderStatusTick: function(e) {
              return 0 === e ? "新提交" : 1 === e ? "待支付" : 2 === e ? "待出票" : 3 === e ? "已出票" : 5 === e ? "已完成" : 8 === e ? "退款中" : 9 === e ? "部分退款" : 10 === e ? "退款完成" : 11 === e ? "出票失败" : 12 === e ? "订单关闭" : 13 === e ? "已过期" : void 0
            },
            bindPickerChange: function(e) {
              console.log(e), this.canRefundNum = this.arrayNum[e.target.value], this.getRefundMoney()
            },
            getRefundMoney: function() {
              var e = this;
              uni.showLoading({
                title: "加载中..."
              }), this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getRefundPriceByOrderIdAndNum", {
                num: this.canRefundNum,
                orderId: this._orderId
              }).then((function(n) {
                uni.hideLoading(), 1 === n.code ? e.refundAmount = n.data : e.$uni.showToast(n.msg)
              })).catch((function(e) {
                uni.hideLoading()
              }))
            },
            bindReasonPickerChange: function(e) {
              console.log(e), this.selectedReason = this.arrayReason[e.target.value], this._applyReasonType = Number(e.target.value) + 5
            },
            close: function(e) {
              this.showPopup = !1, this.showPopup2 = !1
            },
            orderRefund: function() {
              var e = this;
              this.isRefunding || (this.isRefunding = !0, this.$store.dispatch("wxInForm", ["ItI-SDDPPm_AHZbamcx3iLsZoGlrZCeR2VutwpGmd7s"]).then((function(n) {
                e.confirm()
              })).catch((function(n) {
                e.confirm()
              })))
            },
            confirm: function() {
              var e = this;
              this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/order/ticketOrderRefund", {
                orderId: this._orderId,
                num: this.canRefundNum,
                refundAmount: this.refundAmount,
                applyReasonType: this._applyReasonType,
                codes: this.usedIds,
                ysx: "wx"
              }, "加载中...").then((function(n) {
                e.isRefunding = !1, 1 === n.code ? (e.$uni.showToast("申请成功"), e.$util.prevPage()) : 18007 === n.code ? (e.errorTip = n.msg, e.showPopup2 = !0) : e.$uni.showToast(n.msg)
              }))
            },
            submitFn: function() {
              this.canRefundNum < 1 ? this.$uni.showToast("请选择退款游客") : this._applyReasonType ? this.showPopup = !0 : this.$uni.showToast("请选择退款原因")
            },
            chooseTourist: function(e, n) {
              this.usedIds.includes(e.verifyCode) ? this.usedIds = this.usedIds.filter((function(n) {
                return n != e.verifyCode
              })) : this.usedIds.push(e.verifyCode), this.canRefundNum = this.usedIds.length, this.canRefundNum > 0 ? this.getRefundMoney() : this.refundAmount = 0
            },
            brText: function(e) {
              if (e) {
                var n = e.split("#**#");
                return n.pop().split("</p>").forEach((function(e, t) {
                  if (e) {
                    var i = (e = e.split("<p>").join("")).match(/\<.*?\>/g),
                      d = e.match(/[\r\n]/g),
                      o = i || d;
                    o && o[0] && o.forEach((function(n) {
                      e = e.replaceAll(n, "")
                    })), n.push(e)
                  }
                })), n
              }
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.bg{background-color:#f5f5f5;height:100vh;line-height:1;overflow-y:auto;padding-bottom:100rpx}.box1{background:#fff;border-radius:20rpx;margin-bottom:10rpx}.box1 .tip{background:#fff1ed;color:#928585;font-size:22rpx;height:60rpx;line-height:60rpx;text-align:center}.box1 .b-box{display:-webkit-flex;display:flex;justify-content:space-between;padding:30rpx 40rpx 50rpx}.box1 .b-box .img{background-color:#666;border-radius:20rpx;height:160rpx;width:160rpx}.box1 .b-box .r-box{width:492rpx}.box1 .b-box .r-box .name{color:#2a2a2a;font-size:26rpx;line-height:40rpx;margin-bottom:10rpx}.box1 .b-box .r-box .num{display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:22rpx}.box1 .b-box .r-box .num view{color:#aeaeae;font-size:24rpx}.box1 .b-box .r-box .price{color:#ff3709;font-size:30rpx}.box2{background:#fff;border-radius:20rpx;margin-bottom:10rpx}.box2 .row{align-items:center;display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between;padding:0 30rpx}.box2 .row.row2>view{color:#aeaeae}.box2 .row .l{color:#6d6d6d;font-size:28rpx;width:260rpx}.box2 .row .r{color:#2a2a2a;display:-webkit-flex;display:flex;flex-direction:row;font-size:28rpx}.box2 .tourists-Choose{padding-bottom:40rpx;padding-left:30rpx}.box2 .tourists-Choose .lable{color:#4f4f4f;font-size:28rpx;line-height:100rpx}.box2 .tourists-Choose .tourists-box{height:60rpx;white-space:nowrap}.box2 .tourists-Choose .tourists-box .user{background:#f8f8f8;border-radius:40rpx;box-sizing:border-box;color:#555;display:inline-block;font-size:26rpx;height:60rpx;line-height:60rpx;margin-right:20rpx;padding:0 38rpx}.box2 .tourists-Choose .tourists-box .active{background:#ffeaea;border:1rpx solid #de4f4f;color:#222;font-size:26rpx;line-height:58rpx}.box3{align-items:center;background:#fff;border-radius:20rpx;display:-webkit-flex;display:flex;height:110rpx;justify-content:space-between;margin-bottom:10rpx;padding:0 30rpx}.box3>view{color:#2a2a2a;font-size:32rpx}.box3>view.r{color:#ff3709}.box4{background:#fff;border-radius:20rpx;padding-bottom:30rpx}.box4>view{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;min-height:100rpx;padding:0 30rpx}.box4>view .l{color:#6d6d6d;font-size:26rpx}.box4>view .r{color:#2a2a2a;font-size:26rpx}.box5{background-color:#fff;margin-bottom:400rpx;padding:0rpx 30rpx 20rpx}.box5 .p{color:#a4a4a4;font-size:22rpx;line-height:32rpx;text-align:right}.notice{background:#fff1ed;bottom:100rpx;display:-webkit-flex;display:flex;flex-direction:column;height:160rpx;justify-content:space-around;left:0;padding:10rpx 30rpx;position:fixed;width:100%}.notice text{color:#928585;font-size:24rpx}.submit{background:linear-gradient(52deg,#fc4a7c,#ff5411);bottom:0;box-shadow:0-1rpx 0 0#d9d9d7;color:#fff;font-size:32rpx;height:100rpx;left:0;line-height:100rpx;position:fixed;text-align:center;width:750rpx;z-index:99999999}.submit.cs{background:linear-gradient(52deg,#c7b795,#c7b795)!important}.table{border:1rpx solid #e4e4e4;border-bottom:none}.tr{border-bottom:1rpx solid #e4e4e4;display:-webkit-flex;display:flex}.tr.first{background:#fffaf8}.tr.first .td{font-weight:600}.tr .1st{width:200rpx}.tr .td{align-items:center;border-right:1rpx solid #e4e4e4;border-top:none;color:#656565;display:-webkit-flex;display:flex;line-height:42rpx;padding:16rpx 25rpx;text-align:left;word-break:break-all}.tr .td:last-child{border-right:none}.codeBox-title{color:#6d6d6d;font-size:26rpx;line-height:45rpx}.rfzc{display:-webkit-flex;display:flex;height:34rpx;margin-bottom:20rpx;position:relative}.rfzc .rf-tag{align-items:flex-end;color:#ff5411;display:-webkit-flex;display:flex;font-size:22rpx;height:34rpx;line-height:1;margin-left:5rpx;min-width:80rpx;padding:0 10rpx;text-align:center}.rfzc .icon-rf{display:-webkit-flex;display:flex;height:30rpx;justify-content:right;position:absolute;right:0;width:50rpx}.rfzc .icon-rf .img{height:14rpx;transform:rotate(180deg);width:24rpx}.rfzc .icon-rf .show{transform:rotate(0deg)}.borderNone{border:none!important;padding:0!important}.borderPadding{padding:8rpx 0!important}
</style>
