<template>
<view class="page-box" v-if="cardDetail.name">
    <view :class="['top-box','',cardState==1?'invalid':'']" :style="'background:'+'linear-gradient(180deg,'+(cardDetail.backgroundColor1||'#e7d6b4')+'4D 0%, #FAFAFA 100%)'+';'">
        <view class="card-box">
            <image mode class="" :src="cardDetail.image"></image>
            <image mode class="state-Img" src="../../static/images/eqcard4.png" v-if="cardState==1"></image>
        </view>
    </view>
    <view class="top">
        <view class="t1">{{ cardDetail.name }}</view>
        <view class="t2">{{ cardDetail.subtitle }}</view>
    </view>
    <view class="info-box" @click="e0($event)">
        <view class="ibl" v-if="cardDetail.discounts>0">已为您累计节省<text class="">{{'￥'+cardDetail.discounts}}</text>
        </view>
        <view class="ibl" v-else>快去领取权益吧</view>
        <view class="" v-if="cardDetail.discounts>0">
            <u-icon class="" color="#777777" name="arrow-right" size="28"></u-icon>
        </view>
    </view>
    <view class="equity-box">
        <view class="tbox">
            <image mode class="icon" src="https://eshopfile.zhiyousx.com/2022122014544389817.png"></image>
            <view class="t">甄选权益</view>
            <image mode class="icon i2" src="https://eshopfile.zhiyousx.com/2022122014544389817.png"></image>
        </view>
        <view class="bbox">
            <view class="item" v-for="(item, __i0__) in cardDetail.detailList">
                <view class="item-l">
                    <image mode class="" :src="item.equityImage"></image>
                    <view class="item-l-tip" :style="'background:'+(cardState==1?'#E7D2B7':'#9F8762')+';'">
                        <text class="">已领</text>
                        <text class="num">{{item.receivedNum}}</text>{{'/'+item.totalNum+''}}</view>
                </view>
                <view class="item-r">
                    <view class="t1 multilineText2">{{ item.equityName }}</view>
                    <view class="t2 singleLineText">{{ item.equityDesc }}</view>
                    <view class="pt">
                        <view class="p text-line">{{'￥'+item.price+''}}</view>
                        <view class="get allcenter dis" v-if="cardDetail.expireState==1">查看</view>
                        <block v-else>
                            <view class="get allcenter dis" v-if="cardDetail.state==3||cardDetail.state==4||cardDetail.state==5">查看</view>
                            <block v-else>
                                <view class="get allcenter dis" v-if="item.receivedNum==item.totalNum">查看</view>
                                <block v-else>
                                    <view class="get allcenter" v-if="item.receivedNum<item.totalNum">立即领取</view>
                                </block>
                            </block>
                        </block>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <u-popup borderRadius="20" class="" mode="center" :value="savePop" :vueSlots="['default']" @input="savePop = $event">
        <view class="save-box">
            <view class="btn-close" @click="e1($event)"></view>
            <image mode class="close-btn" src="https://eshopfile.zhiyousx.com/2022122109502468658.png" @click="e2($event)"></image>
            <view class="top-bg">
                <view class="tb1">{{''+cardDetail.name}}<text class="">已为您累计节省</text>
                </view>
                <view class="tb2">￥<text class="">{{cardDetail.discounts}}</text>
                </view>
            </view>
            <view class="save-body">
                <view class="at">
                    <view class="line"></view>
                    <text class="">{{cardDetail.name+'省钱计算器'}}</text>
                    <view class="line"></view>
                </view>
                <view class="as">权益价值为该产品商家窗口门市价</view>
                <scroll-view class="coupon-box-b" :scrollY="true" :style="'height:'+(dll>2?'320rpx':dll*120+'rpx')+';'">
                    <view class="coupon-box">
                        <view class="cbt" v-for="(item, __i1__) in cardDetail.detailList">
                            <view class="badge allcenter">已领<text class="">{{''+item.receivedNum}}</text>{{'/'+item.totalNum}}</view>
                            <view class="cbt-l singleLineText">{{ item.saveDesc }}</view>
                            <view class="cbt-r">{{'￥'+item.price+''}}</view>
                        </view>
                    </view>
                </scroll-view>
                <view class="could"></view>
            </view>
            <view class="bottom-btn" v-if="(cardDetail.buyLimit==0||cardDetail.buyLimit>cardDetail.memberBuyNum)&&cardDetail.equityCard.state==2" @click="toBuy(cardDetail.equityCardId)">再买一张</view>
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
            name: "",
            savePop: !1,
            cardDetail: "",
            cardState: 0,
            id: "",
            dll: 3
          }
        },
        filters: {
          tiameFilter: function(t) {
            if (!t) return "";
            var e = t.split(" ")[0].split("-");
            return e[0] + "年" + e[1] + "月" + e[2] + "日"
          }
        },
        onLoad: function(t) {
          this.id = t.id, t.cardState && (this.cardState = t.cardState)
        },
        onShow: function() {
          this.getUserCardInfo()
        },
        methods: {
          getUserCardInfo: function() {
            var t = this;
            this.$uniApi.getRequestNoLoading("get", "product/app/userEquityCard/detail/" + this.id).then((function(e) {
              1 === e.code ? (t.dll = e.data.detailList.length, t.cardDetail = e.data, 1 != t.cardDetail.expireState && 3 != t.cardDetail.state && 4 != t.cardDetail.state && 5 != t.cardDetail.state || (t.cardState = 1)) : t.$uni.showToast(e.msg)
            }))
          },
          toBuy: function(t) {
            var e = "/subPage/pages/buyCard/buyCard?id=" + t;
            this.$util.isLogin(e) && this.$navigateTo({
              url: e
            })
          },
          toEqDetail: function(t) {
            var e = "/subPage/pages/myeqcard/eqdetail?source=2&id=" + t + "&cardName=" + this.cardDetail.name;
            this.$util.isLogin(e) && this.$navigateTo({
              url: e
            })
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{align-items:center;background:#fafafa;display:-webkit-flex;display:flex;flex-direction:column;min-height:100vh;padding-bottom:88rpx;width:100%}.page-box .invalid{opacity:.5}.page-box .top-box{height:520rpx;position:static;width:750rpx;z-index:5}.page-box .top-box .card-box{height:342rpx;margin-left:89rpx;margin-top:70rpx;position:relative;width:572rpx}.page-box .top-box .card-box image{border-radius:20rpx;height:100%;width:100%}.page-box .top-box .card-box .state-Img{bottom:20rpx;height:200rpx;position:absolute;right:20rpx;width:200rpx;z-index:3}.page-box .top-box .card-box .time{background:linear-gradient(23deg,#27231d,#6f6351);border-radius:10rpx;box-shadow:-6rpx 8rpx 2rpx 0 rgba(0,0,0,.2);color:#fff;font-size:24rpx;height:50rpx;line-height:50rpx;position:absolute;right:0;text-align:center;top:0;transform:skew(-10deg);width:266rpx;z-index:3}.page-box .top{background:linear-gradient(292deg,#f9e6cb,#dbbc97 95%);border-radius:20rpx 20rpx 0 0;box-shadow:0-6rpx 2rpx 0 rgba(0,0,0,.08);height:110rpx;margin-top:-48rpx;position:static;text-align:center;width:670rpx;z-index:15}.page-box .top .t1{color:#5b3e19;font-size:36rpx;font-weight:500;margin-top:15rpx}.page-box .top .t2{color:#8e6c41;font-size:26rpx;margin-top:5rpx}.page-box .info-box{align-items:center;background:#fff;border-radius:0 0 20rpx 20rpx;display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between;padding:0 30rpx;width:670rpx}.page-box .info-box .ibl{color:#555;font-size:28rpx}.page-box .info-box .ibl text{margin-left:10rpx}.page-box .info-box .ibr{align-items:center;display:-webkit-flex;display:flex}.page-box .info-box .ibr text{color:#bbb;font-size:24rpx;margin-right:20rpx}.page-box .equity-box{margin-top:50rpx;padding:0 40rpx}.page-box .equity-box .tbox{align-items:center;background:linear-gradient(292deg,#f9e6cb,#dbbc97 95%);border-radius:20rpx 20rpx 0 0;box-shadow:0-6rpx 2rpx 0 rgba(0,0,0,.08);display:-webkit-flex;display:flex;height:70rpx;justify-content:center;margin-left:85rpx;width:500rpx}.page-box .equity-box .tbox .t{color:#693c06;font-size:30rpx;font-weight:700;margin:0 30rpx;text-shadow:0 2rpx 2rpx hsla(0,0%,100%,.5)}.page-box .equity-box .tbox .icon{height:14rpx;width:27rpx}.page-box .equity-box .tbox .i2{transform:rotateY(180deg)}.page-box .equity-box .bbox{background:#f5e1c4;border-radius:20rpx;height:auto;padding:10rpx 20rpx 30rpx;width:670rpx}.page-box .equity-box .bbox .item{background:#fafafa;border-radius:20rpx;box-shadow:0 10rpx 10rpx 0 rgba(118,69,23,.08);display:-webkit-flex;display:flex;height:220rpx;justify-content:space-between;margin-top:20rpx;padding:35rpx 38rpx 30rpx;position:relative;width:630rpx}.page-box .equity-box .bbox .item:before{background:#f5e1c4;border-radius:100%;content:"";height:22rpx;left:-11rpx;position:absolute;top:109rpx;width:20rpx}.page-box .equity-box .bbox .item:after{background:#f5e1c4;border-radius:100%;content:"";height:22rpx;position:absolute;right:-11rpx;top:109rpx;width:20rpx}.page-box .equity-box .bbox .item .item-l{height:160rpx;position:relative;width:170rpx}.page-box .equity-box .bbox .item .item-l image{border-radius:20rpx;height:100%;width:100%}.page-box .equity-box .bbox .item .item-l .item-l-tip{background:#9f8762;border-radius:10rpx;box-shadow:-6rpx 8rpx 2rpx 0 rgba(0,0,0,.2);color:#fff;font-size:20rpx;height:40rpx;line-height:40rpx;position:absolute;right:-10rpx;text-align:center;top:-10rpx;transform:skew(-8deg);width:99rpx}.page-box .equity-box .bbox .item .item-l .item-l-tip text{color:#fff;font-size:24rpx}.page-box .equity-box .bbox .item .item-l .item-l-tip .num{font-weight:700;margin-left:2rpx}.page-box .equity-box .bbox .item .item-r{width:364rpx}.page-box .equity-box .bbox .item .item-r .t1{color:#333;font-size:28rpx;line-height:36rpx}.page-box .equity-box .bbox .item .item-r .t2{color:#999;font-size:24rpx;line-height:30rpx;margin-top:14rpx}.page-box .equity-box .bbox .item .item-r .pt{align-items:center;display:-webkit-flex;display:flex;margin-top:15rpx}.page-box .equity-box .bbox .item .item-r .pt .p{color:#555;font-size:26rpx;line-height:39rpx;margin-right:30rpx}.page-box .equity-box .bbox .item .item-r .pt .get{background:#cca674;border-radius:30rpx;bottom:10rpx;color:#fff;font-size:24rpx;height:60rpx;position:absolute;right:38rpx;width:140rpx}.page-box .equity-box .bbox .item .item-r .pt .get.dis{background:#e7d2b7}.page-box .save-box{background:#fff;border-radius:20rpx;height:auto;max-height:900rpx;min-height:660rpx;overflow:hidden;padding-bottom:42rpx;position:relative;width:620rpx}.page-box .save-box .close-btn{height:36rpx;position:absolute;right:20rpx;top:20rpx;width:36rpx}.page-box .save-box .btn-close{height:50rpx;position:absolute;right:15rpx;top:15rpx;width:50rpx}.page-box .save-box .top-bg{align-items:center;background:url('https://eshopfile.zhiyousx.com/2023011309232927976.png');background-size:100% 100%;display:-webkit-flex;display:flex;flex-direction:column;height:280rpx;width:100%}.page-box .save-box .top-bg .tb1{color:#5b3e19;font-size:32rpx;font-weight:500;line-height:32rpx;margin-top:70rpx}.page-box .save-box .top-bg .tb1 text{color:#5b3e19;font-size:28tpx;font-weight:400;line-height:32rpx;margin-left:10rpx}.page-box .save-box .top-bg .tb2{color:#5b3e19;font-size:30rpx;font-weight:600;line-height:30rpx;margin-top:30rpx}.page-box .save-box .top-bg .tb2 text{color:#5b3e19;font-size:50rpx;font-weight:600;line-height:40rpx;margin-left:10rpx}.page-box .save-box .save-body{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;position:relative}.page-box .save-box .save-body .at{align-items:center;display:-webkit-flex;display:flex;justify-content:center;margin-top:40rpx}.page-box .save-box .save-body .at text{color:#5b3e19;font-size:28rpx;line-height:30rpx;padding:0 30rpx}.page-box .save-box .save-body .at .line{background:#d2b99b;height:2rpx;width:82rpx}.page-box .save-box .save-body .as{color:#be996a;font-size:24rpx;line-height:30rpx;margin-top:14rpx}.page-box .save-box .save-body .could{background-image:radial-gradient(#fff,hsla(0,0%,100%,.2),transparent);bottom:-30rpx;height:40px;left:68rpx;position:absolute;width:480rpx}.page-box .save-box .save-body .coupon-box-b{margin-top:20rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:auto;justify-content:center}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt{align-items:center;background:linear-gradient(92deg,#f9e6cb,#e5d3bc 95%);border-radius:10rpx;box-shadow:0 6rpx 2rpx 0 rgba(0,0,0,.08);display:-webkit-flex;display:flex;height:90rpx;justify-content:space-between;margin-top:30rpx;padding:0 38rpx;position:relative;width:500rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt:before{background:#fff;border-radius:100%;content:"";height:20rpx;left:-10rpx;position:absolute;top:40rpx;width:20rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt:after{background:#fff;border-radius:100%;content:"";height:20rpx;position:absolute;right:-10rpx;top:40rpx;width:20rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt .badge{background:linear-gradient(23deg,#27231d,#6f6351);border-radius:10rpx;box-shadow:0 4rpx 2rpx 0 rgba(0,0,0,.2);color:#fff;font-size:24rpx;height:36rpx;padding:0 22rpx;position:absolute;right:2rpx;top:-18rpx;transform:skew(-10deg)}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt .badge text{color:#fff;font-size:24rpx;font-weight:700;margin-left:5rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt .cbt-l{color:#333;font-size:24rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt .cbt-r{color:#333;font-size:28rpx;font-weight:800}.page-box .save-box .bottom-btn{background:linear-gradient(23deg,#443a2e,#6f6351);border-radius:50rpx;color:#f2d7b1;font-size:26rpx;height:72rpx;line-height:72rpx;margin-left:60rpx;margin-top:42rpx;text-align:center;width:500rpx}
</style>
