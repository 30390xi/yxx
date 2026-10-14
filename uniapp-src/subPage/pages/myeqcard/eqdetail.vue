<template>
<view class="eqdetail" v-if="eqDetail">
    <image class="headerimg" mode="aspectFill" :src="eqDetail.equityImage"></image>
    <view class="title allcenter">
        <text class="name singleLineText">{{eqDetail.itemName}}</text>
        <text class="link" @click="toProductDetail(eqDetail.itemId)">产品详情 ></text>
    </view>
    <view class="desc">
        <view class="ins" v-if="eqDetail.coupon">
            <view class="flex" v-if="eqDetail.coupon.useTimeSlot==0">
                <text class="">●</text>{{eqDetail.coupon.validityEndTime+'前有效'}}</view>
            <view class="flex" v-if="eqDetail.coupon.useTimeSlot==1">
                <text class="">●</text>{{$root.f0}}</view>
            <view class="flex" v-if="eqDetail.coupon.useTimeSlot==2">
                <text class="">●</text>{{eqDetail.coupon.validityEndTime+'可购买'+eqDetail.coupon.useTimeStart+'至'+eqDetail.coupon.useTimeEnd+$root.f1}}</view>
            <view class="flex" v-if="eqDetail.coupon.useExplain">
                <text class="">●</text>{{eqDetail.coupon.useExplain}}</view>
        </view>
        <view class="ins">
            <view class="name">使用说明</view>
            <view class="txt" v-for="(text, __i0__) in $root.l0">{{text}}</view>
        </view>
    </view>
    <view class="getinfo" v-if="receiveDetail[0]">
        <view class="name">
            <view class="allcenter">
                <text class="n">{{cardName}}</text>
            </view>
        </view>
        <view class="info" v-for="(item, __i1__) in receiveDetail">
            <view class="t">领取信息</view>
            <view class="line">领取编号<text class="">{{item.userCouponId}}</text>
            </view>
            <view class="line">领取时间<text class="">{{item.receiveTime}}</text>
            </view>
            <view class="line">领取数量<text class="">1</text>
            </view>
            <view class="line">为您节省<text class="">{{'¥ '+item.price}}</text>
            </view>
            <image class="" src="https://eshopfile.zhiyousx.com/2023011114064095097.png" v-if="item.useState==1"></image>
            <image class="" src="https://eshopfile.zhiyousx.com/2023010910000900378.png" v-if="item.useState==2"></image>
            <image class="" src="https://eshopfile.zhiyousx.com/2023010910005976066.png" v-if="item.useState==3"></image>
            <image class="" src="https://eshopfile.zhiyousx.com/2023010910013637801.png" v-if="item.useState==4"></image>
            <image class="" src="https://eshopfile.zhiyousx.com/2023011114083993049.png" v-if="item.useState==5"></image>
            <image class="" src="https://eshopfile.zhiyousx.com/2023010910015464618.png" v-if="item.useState==6"></image>
        </view>
    </view>
    <view class="footer allcenter" v-if="source==2">
        <view class="btn allcenter dis" v-if="eqDetail.userEquityCard.expireState==1">已过期</view>
        <view :class="['btn','allcenter','',eqDetail.waitReceiveNum<1?'dis':'']" v-else @click="receiveEquity($event)">{{(eqDetail.waitReceiveNum>0?'立即':'已')+'领取 （'}}<text class="">{{eqDetail.receivedNum}}</text>{{'/'+eqDetail.totalNum+'）'}}</view>
    </view>
    <view class="footer allcenter" v-if="source==1">
        <view class="btn allcenter" @click="toBuy(eqDetail.equityCardId)">
            <text class="">购卡立享</text>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          name: "eqdetail",
          data: function() {
            return {
              name: "",
              eqDetail: "",
              receiveDetail: [],
              cardName: "",
              id: "",
              submiting: !1,
              source: ""
            }
          },
          onLoad: function(t) {
            this.source = t.source, this.cardName = t.cardName, t.id && (this.id = t.id), 2 == t.source ? (this.getUserEqDetail(), this.getReceiveDetail()) : this.eqDetail = uni.getStorageSync("eqDetail")
          },
          onunload: function() {
            uni.setStorageSync("eqDetail", "")
          },
          filters: {
            timeFormat: function(e) {
              return e.replace(/-/g, ".")
            },
            endTimeFilter: function(e) {
              return (new Date).getTime() + 36e5 * Number(e.useTimeSlotHour) > new Date(e.validityEndTime.replace(/-/g, "/")).getTime() ? "".concat(e.validityEndTime, "前有效") : "领取成功后".concat(e.useTimeSlotHour, "小时有效")
            },
            equityTypeFilter: function(e) {
              return ["的门票", "出发的产品"][e - 1]
            }
          },
          methods: {
            receiveEquity: function() {
              var e = this;
              if (!this.submiting) {
                this.submiting = !0;
                var t = this.eqDetail.userEquityCardDetailId;
                this.$uniApi.getRequestNoLoading("get", "product/app/userEquityCard/receiveEquity/" + t).then((function(t) {
                  e.submiting = !1, 1 === t.code ? (e.$uni.showToast("领取成功"), e.getUserEqDetail(), e.getReceiveDetail()) : e.$uni.showToast(t.msg)
                }))
              }
            },
            getUserEqDetail: function() {
              var e = this;
              this.$uniApi.getRequestNoLoading("get", "product/app/userEquityCard/equity/detail/" + this.id).then((function(t) {
                1 === t.code ? e.eqDetail = t.data : e.$uni.showToast(t.msg)
              }))
            },
            getReceiveDetail: function() {
              var e = this;
              this.$uniApi.getRequestNoLoading("get", "product/app/userEquityCard/receiveDetail/" + this.id).then((function(t) {
                1 === t.code ? e.receiveDetail = t.data : e.$uni.showToast(t.msg)
              }))
            },
            toBuy: function(e) {
              var t = "/subPage/pages/buyCard/buyCard?id=" + e;
              this.$util.isLogin(t) && this.$navigateTo({
                url: t
              })
            },
            toProductDetail: function(e) {
              var t = "";
              1 === this.eqDetail.equityType ? t = "/subPage/pages/ticket_detail/ticket_detail?itemId=" + e : 2 === this.eqDetail.equityType && (t = "/subPack/pages/lineProductDetails/lineProductDetails?productId=" + e), this.$navigateTo({
                url: t
              })
            },
            jumpUse: function(t, i) {
              var a = this;
              if (1 == t.useState || 5 == t.useState)
                if (1 === t.jumpConfigFlag) {
                  var n = t.jumpDTO;
                  if (!n) return void this.$uni.showToast("未配置优惠券跳转地址！");
                  0 === n.linkType && n.linkUrl ? (-1 != n.linkUrl.indexOf("?") && (n.linkUrl = n.linkUrl.replace("?", "*"), n.linkUrl = n.linkUrl.replace("=", "+")), this.$navigateTo({
                    url: "/pages/webpage/webpage?url=".concat(n.linkUrl)
                  })) : 1 === n.linkType && (["/pages/index/index", "/pages/spot_list/spot_list", "/pages/rankList/rankList", "/pages/mine/mine"].includes(n.linkUrl) ? uni.switchTab({
                    url: n.linkUrl
                  }) : this.$navigateTo({
                    url: n.linkUrl
                  }))
                } else {
                  var u = "";
                  1 === i ? u = "product/app/v1/item/couponCanUseItem" : 2 === i && (u = "product/app/v1/line/product/couponCanUseProduct"), this.$uniApi.dataRequestNoLoading("POST", u, {
                    couponId: t.couponId,
                    current: 1,
                    size: 5
                  }).then((function(e) {
                    if (1 === e.code)
                      if (1 == e.data.records.length) {
                        var n = 1 === i ? e.data.records[0].itemId : e.data.records[0].productId;
                        a.toProductDetail(n)
                      } else {
                        var u = "";
                        if (1 === i) u = "/subPage/pages/discountsProductList/discountsProductList?couponId=" + t.couponId + "&threshold=" + t.threshold + "&quota=" + t.quota + "&type=" + t.type;
                        else if (2 === i) {
                          var o = {
                            couponId: t.couponId,
                            threshold: t.threshold,
                            quota: t.quota,
                            type: t.type
                          };
                          u = "/subPack/pages/groupOrder/availableProducts?coupon=".concat(JSON.stringify(o))
                        }
                        a.$navigateTo({
                          url: u
                        })
                      }
                    else a.$uni.showToast(e.msg)
                  }))
                }
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background:#fafafa}.eqdetail{padding-bottom:120rpx}.eqdetail .headerimg{height:500rpx;width:750rpx}.eqdetail .title{background:linear-gradient(92deg,#f9e6cb,#e5d3bc 95%);border-radius:10rpx;box-shadow:0rpx 6rpx 2rpx 0rpx rgba(0,0,0,.08);height:100rpx;justify-content:space-between;margin:-30rpx auto 0;padding:0 50rpx;position:relative;width:670rpx;z-index:3}.eqdetail .title .name{color:#333;font-weight:700;font-weight:26rpx;width:420rpx}.eqdetail .title .link{color:#555;font-size:24rpx}.eqdetail .title:before{left:-10rpx}.eqdetail .title:after,.eqdetail .title:before{background:#fafafa;border-radius:100%;content:"";height:20rpx;position:absolute;top:40rpx;width:20rpx}.eqdetail .title:after{right:-10rpx}.eqdetail .desc{background:#fff;border-radius:20rpx;margin:0 auto;padding:0 30rpx;width:670rpx}.eqdetail .desc .ins{padding:30rpx 0}.eqdetail .desc .ins:first-of-type{border-bottom:1px solid #ddd}.eqdetail .desc .ins .flex{color:#999;font-size:24rpx;justify-content:flex-start;line-height:30rpx}.eqdetail .desc .ins .flex:first-of-type{margin-bottom:10rpx}.eqdetail .desc .ins .flex text{color:#999;font-size:20rpx;margin:0 10rpx;vertical-align:4rpx}.eqdetail .desc .ins .name{color:#444;font-size:26rpx}.eqdetail .desc .ins .txt{color:#999;font-size:24rpx;margin-top:20rpx}.eqdetail .getinfo{background:#fff;border-radius:20rpx;margin:20rpx auto;padding:0 30rpx;width:670rpx}.eqdetail .getinfo .name .allcenter{height:100rpx;justify-content:space-between}.eqdetail .getinfo .name .n{font-size:#333;font-size:28rpx;font-weight:700}.eqdetail .getinfo .name .link{color:#555;font-size:24rpx}.eqdetail .getinfo .info{border-top:1px solid #ddd;padding:30rpx 0rpx;position:relative}.eqdetail .getinfo .info .t{color:#444;font-size:26rpx}.eqdetail .getinfo .info .line{color:#999;font-size:24rpx;margin-top:20rpx}.eqdetail .getinfo .info .line text{color:#555;font-size:24rpx;margin-left:20rpx}.eqdetail .getinfo .info image{height:100rpx;position:absolute;right:0;top:30rpx;width:100rpx}.eqdetail .footer{background:#fff;bottom:0;box-shadow:0-4rpx 20rpx 0 rgba(0,0,0,.08);height:100rpx;left:0;position:fixed;width:750rpx}.eqdetail .footer .btn{background:linear-gradient(23deg,#443a2e,#6f6351);border-radius:50rpx;color:#fff;font-size:24rpx;height:72rpx;width:670rpx}.eqdetail .footer .btn text{color:#fff;font-weight:700}.eqdetail .footer .dis{background:linear-gradient(23deg,#443a2e,#6f6351);opacity:.5}
</style>
