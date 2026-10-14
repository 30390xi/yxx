<template>
<view class="page-box" v-if="showCardInfo">
    <view class="top-box" :style="'background:'+'linear-gradient(180deg,'+(showCardInfo.backgroundColor1||'#e7d6b4')+'4D 0%, #FAFAFA 100%)'+';'">
        <view class="card-box">
            <image mode class="" :src="showCardInfo.image"></image>
        </view>
    </view>
    <view class="top">
        <view class="t1">{{ showCardInfo.name }}</view>
        <view class="t2">{{ showCardInfo.subtitle }}</view>
    </view>
    <view class="info-box" @click="showPop($event)">
        <view class="ibl">预计可省<text class="">{{'￥'+showCardInfo.discounts}}</text>
        </view>
        <view class="">
            <u-icon class="" color="#777777" name="arrow-right" size="28"></u-icon>
        </view>
    </view>
    <view class="formBox">
        <ocr-index class="" :vueSlots="['content']">
            <view class="row-box" slot="content">
                <view class="label">持卡人</view>
                <view class="value">
                    <input :border="border" class="" data-type="name" placeholder="请填写您的姓名" style="width:90%;font-size:28rpx;" type="text" :value="useName" @input="useName = $event" @blur="$forceUpdate()"></input>
                </view>
            </view>
        </ocr-index>
        <view class="row-box">
            <view class="label">身份证</view>
            <view class="value">
                <input :border="border" class="" data-type="cardCode" placeholder="请填写证件号码" style="width:90%;font-size:28rpx;" type="idcard" :value="useIdCard" @input="useIdCard = $event" @blur="$forceUpdate()"></input>
            </view>
        </view>
        <view class="row-box">
            <view class="label">手机号</view>
            <view class="value">
                <input :border="border" class="" data-type="phone" placeholder="请填写手机号码" style="width:90%;font-size:28rpx;" type="number" :value="usePhone" @input="usePhone = $event" @blur="$forceUpdate()"></input>
            </view>
        </view>
        <view class="tips">该卡需实名制购买并仅限本人抵扣使用</view>
    </view>
    <view class="info-box" @click="toAgreenment(showCardInfo.equityCardId)">
        <view class="ibl">本卡购买须知</view>
        <view class="ibr">
            <text class="">查看详情</text>
            <u-icon class="" color="#777777" name="arrow-right" size="28"></u-icon>
        </view>
    </view>
    <view class="foot-box">
        <view :class="['btn','',showCardInfo.buyLimit!=0&&showCardInfo.memberBuyNum>=showCardInfo.buyLimit?'timeEnd':'']" v-if="showCardInfo.buyAbleNum>0" @click="buyCard($event)">
            <text class="bt1" v-if="showCardInfo.buyLimit!=0&&showCardInfo.memberBuyNum>=showCardInfo.buyLimit">{{'每人限购'+showCardInfo.memberBuyNum+'张'}}</text>
            <block v-else>
                <text class="bt1">立即支付</text>
                <text class="bt2">{{'￥'+showCardInfo.price}}</text>
                <text class="bt3">/ 张</text>
            </block>
        </view>
        <view class="btn timeEnd" v-else @click="buyCard($event)">
            <text class="bt1">已售空</text>
        </view>
    </view>
    <u-popup borderRadius="20" class="" mode="center" :value="savePop" :vueSlots="['default']" @input="savePop = $event">
        <view class="save-box">
            <view class="btn-close" @click="e0($event)"></view>
            <image mode class="close-btn" src="https://eshopfile.zhiyousx.com/2022122109502468658.png" @click="e1($event)"></image>
            <view class="top-bg">
                <view class="tb1">{{'购买1张'+showCardInfo.name}}<text class="">预计可省</text>
                </view>
                <view class="tb2">￥<text class="">{{showCardInfo.discounts}}</text>
                </view>
            </view>
            <view class="save-body">
                <view class="at">
                    <view class="line"></view>
                    <text class="">{{showCardInfo.name+'省钱计算器'}}</text>
                    <view class="line"></view>
                </view>
                <view class="as">权益价值为该产品商家窗口门市价</view>
                <scroll-view class="coupon-box-b" :scrollY="true" :style="'height:'+(dll>2?'320rpx':dll*120+'rpx')+';'">
                    <view class="coupon-box">
                        <view class="cbt" :key="i" v-for="(it, i) in showCardInfo.detailList">
                            <view class="badge allcenter">{{'共'+it.equityNum+'份'}}</view>
                            <view class="cbt-l singleLineText">{{ it.saveDesc }}</view>
                            <view class="cbt-r">{{'￥'+it.price+''}}</view>
                        </view>
                    </view>
                </scroll-view>
                <view class="could"></view>
            </view>
            <view class="price-tips">
                <view class="pt1">权益总价值：</view>
                <view class="pt2">{{'￥'+showCardInfo.detailDiscounts+''}}</view>
            </view>
        </view>
    </u-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            ocrIndex: function() {
              n.e("components/ocr/ocrIndex").then(function() {
                return resolve(n("7882"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              name: "",
              showCardInfo: "",
              savePop: !1,
              useIdCard: "",
              useName: "",
              usePhone: "",
              submiting: !1,
              dll: 3,
              amount: 0
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
            this.getEquityCardDetail(t.id)
          },
          onShow: function() {
            this.submiting = !1
          },
          methods: {
            setDataInfos: function(t) {
              var e = this;
              console.log(t, "参数--------"), t ? (this.useName = t.name, this.useIdCard = t.idCarNo) : setTimeout((function() {
                e.$uni.showToast("识别失败，请重新识别或手动填写")
              }), 500)
            },
            getEquityCardDetail: function(t) {
              var e = this;
              this.$uniApi.getRequestNoLoading("get", "product/app/equityCard/" + t).then((function(t) {
                1 === t.code ? (e.dll = t.data.detailList.length, e.showCardInfo = t.data) : e.$uni.showToast(t.msg)
              }))
            },
            showPop: function() {
              this.savePop = !0
            },
            toAgreenment: function(t) {
              this.$navigateTo({
                url: "/subPage/pages/eCAgreement/eCAgreement?id=" + t
              })
            },
            verify: function() {
              return this.$util.checkName(this.useName).code && this.$util.checkPhone(this.usePhone).code && this.$util.checkId(this.useIdCard).code
            },
            buyCard: function() {
              var e = this;
              if (this.showCardInfo.buyAbleNum <= 0) this.$uni.showToast("该权益卡已售空");
              else if (0 != this.showCardInfo.buyLimit && this.showCardInfo.memberBuyNum >= this.showCardInfo.buyLimit) this.$uni.showToast("最多可购买".concat(this.showCardInfo.memberBuyNum, "张"));
              else {
                if (this.verify()) {
                  if (!this.submiting) {
                    uni.showLoading({
                      title: "发起支付..."
                    }), this.submiting = !0;
                    var n = {
                      equityCardId: this.showCardInfo.equityCardId,
                      useName: this.useName,
                      usePhone: this.usePhone,
                      useIdCard: this.useIdCard,
                      password: this.password,
                      amount: this.showCardInfo.price,
                      payChannel: ""
                    };
                    this.$uniApi.dataRequestYesLoading("post", "product/app/equityCard/toPay", n, "支付中").then((function(n) {
                      if (1 !== n.code) return uni.hideLoading(), e.submiting = !1, void e.$uni.showToast(n.msg);
                      uni.requestPayment({
                        timeStamp: n.data.timeStamp,
                        nonceStr: n.data.nonceStr,
                        package: "prepay_id=".concat(n.data.prepayid),
                        signType: n.data.signType,
                        paySign: n.data.pay_sign,
                        success: function(t) {
                          console.log(t), e.getUserCardInfo(n.data.paymentId), e.submiting = !1
                        },
                        fail: function(t) {
                          console.log("fail:" + JSON.stringify(t)), e.submiting = !1
                        }
                      })
                    }))
                  }
                } else this.$uni.showToast(this.$util.checkName(this.useName).msg || this.$util.checkPhone(this.usePhone).msg || this.$util.checkId(this.useIdCard).msg)
              }
            },
            getUserCardInfo: function(e) {
              var n = this;
              this.$uniApi.getRequestNoLoading("get", "product/app/userEquityCard/detailByPaymentId/" + e).then((function(e) {
                1 === e.code ? e.data.userEquityCardId && uni.redirectTo({
                  url: "/subPage/pages/myeqcard/detail?id=" + e.data.userEquityCardId
                }) : n.$uni.showToast(e.msg)
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.timeEnd{opacity:.5}.page-box{align-items:center;background:#fafafa;display:-webkit-flex;display:flex;flex-direction:column;min-height:100vh;padding-bottom:120rpx;width:100%}.page-box .top-box{height:520rpx;width:750rpx}.page-box .top-box .card-box{height:342rpx;margin-left:89rpx;margin-top:80rpx;position:relative;width:572rpx}.page-box .top-box .card-box image{border-radius:20rpx;height:100%;width:100%}.page-box .top-box .card-box .card-tips{background:linear-gradient(23deg,#27231d,#6f6351);border-radius:10rpx;box-shadow:-6rpx 8rpx 2rpx 0rpx rgba(0,0,0,.2);color:#fff;font-size:24rpx;font-weight:400;height:50rpx;line-height:50rpx;position:absolute;right:-10rpx;text-align:center;top:-10rpx;transform:skew(-8deg);width:304rpx}.page-box .top{background:linear-gradient(292deg,#f9e6cb,#dbbc97 95%);border-radius:20rpx 20rpx 0 0;box-shadow:0-6rpx 2rpx 0 rgba(0,0,0,.08);height:110rpx;margin-top:-48rpx;text-align:center;width:670rpx}.page-box .top .t1{color:#5b3e19;font-size:36rpx;font-weight:600;margin-top:15rpx}.page-box .top .t2{color:#8e6c41;font-size:26rpx;margin-top:5rpx}.page-box .info-box{align-items:center;background:#fff;border-radius:0 0 20rpx 20rpx;display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between;padding:0 30rpx;width:670rpx}.page-box .info-box .ibl{color:#555;font-size:28rpx}.page-box .info-box .ibl text{margin-left:10rpx}.page-box .info-box .ibr{align-items:center;display:-webkit-flex;display:flex}.page-box .info-box .ibr text{color:#bbb;font-size:24rpx;margin-right:20rpx}.page-box .formBox{background:#fff;border-radius:20rpx;height:500rpx;margin:20rpx 0;padding:20rpx 40rpx 0;width:670rpx}.page-box .formBox .row-box{align-items:center;border-bottom:1px solid #eee;display:-webkit-flex;display:flex;font-size:30rpx;height:120rpx;line-height:45rpx;width:100%}.page-box .formBox .row-box .label{color:#333;font-size:28rpx;min-width:158rpx;width:158rpx}.page-box .formBox .row-box .value{color:#333;font-size:28rpx;width:500rpx}.page-box .formBox .tips{color:#be996a;font-size:24rpx;line-height:30rpx;margin-top:50rpx;text-align:center;width:100%}.page-box .foot-box{background:#fff;bottom:0;box-shadow:0-4rpx 20rpx 0 rgba(0,0,0,.08);height:100rpx;position:fixed;right:0;width:750rpx}.page-box .foot-box .btn,.page-box .foot-box{align-items:center;display:-webkit-flex;display:flex;justify-content:center}.page-box .foot-box .btn{background:linear-gradient(23deg,#443a2e,#6f6351);border-radius:50rpx;height:72rpx;width:670rpx}.page-box .foot-box .btn .bt1{color:#f2d7b1;font-size:26rpx;margin-right:10rpx}.page-box .foot-box .btn .bt2{color:#ff5411;font-size:36rpx;font-weight:500}.page-box .foot-box .btn .bt3{color:#f2d7b1;font-size:24rpx}.page-box .save-box{background:#fff;border-radius:20rpx;height:auto;max-height:900rpx;min-height:580rpx;overflow:hidden;padding-bottom:42rpx;position:relative;width:620rpx}.page-box .save-box .close-btn{height:36rpx;position:absolute;right:20rpx;top:20rpx;width:36rpx}.page-box .save-box .btn-close{height:50rpx;position:absolute;right:15rpx;top:15rpx;width:50rpx}.page-box .save-box .top-bg{align-items:center;background:url('https://eshopfile.zhiyousx.com/2023011309232927976.png');background-size:100% 100%;display:-webkit-flex;display:flex;flex-direction:column;height:280rpx;margin-top:-2rpx;width:100%}.page-box .save-box .top-bg .tb1{color:#5b3e19;font-size:32rpx;font-weight:600;line-height:32rpx;margin-top:70rpx}.page-box .save-box .top-bg .tb1 text{color:#5b3e19;font-size:28tpx;font-weight:400;line-height:32rpx;margin-left:10rpx}.page-box .save-box .top-bg .tb2{color:#5b3e19;font-size:30rpx;font-weight:600;line-height:30rpx;margin-top:30rpx}.page-box .save-box .top-bg .tb2 text{color:#5b3e19;font-size:50rpx;font-weight:600;line-height:40rpx;margin-left:10rpx}.page-box .save-box .save-body{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;position:relative}.page-box .save-box .save-body .at{align-items:center;display:-webkit-flex;display:flex;justify-content:center;margin-top:40rpx}.page-box .save-box .save-body .at text{color:#5b3e19;font-size:28rpx;line-height:30rpx;padding:0 30rpx}.page-box .save-box .save-body .at .line{background:#d2b99b;height:2rpx;width:82rpx}.page-box .save-box .save-body .as{color:#be996a;font-size:24rpx;line-height:30rpx;margin-top:14rpx}.page-box .save-box .save-body .could{background-image:radial-gradient(#fff,hsla(0,0%,100%,.2),transparent);bottom:-30rpx;height:40px;left:68rpx;position:absolute;width:480rpx}.page-box .save-box .save-body .coupon-box-b{margin-top:20rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:auto;justify-content:center}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt{align-items:center;background:linear-gradient(92deg,#f9e6cb,#e5d3bc 95%);border-radius:10rpx;box-shadow:0 6rpx 2rpx 0 rgba(0,0,0,.08);display:-webkit-flex;display:flex;height:90rpx;justify-content:space-between;margin-top:30rpx;padding:0 38rpx;position:relative;width:500rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt:before{background:#fff;border-radius:100%;content:"";height:20rpx;left:-10rpx;position:absolute;top:40rpx;width:20rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt:after{background:#fff;border-radius:100%;content:"";height:20rpx;position:absolute;right:-10rpx;top:40rpx;width:20rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt .badge{background:linear-gradient(23deg,#27231d,#6f6351);border-radius:10rpx;box-shadow:0 4rpx 2rpx 0 rgba(0,0,0,.2);color:#fff;font-size:24rpx;height:36rpx;padding:0 22rpx;position:absolute;right:2rpx;top:-18rpx;transform:skew(-10deg)}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt .badge text{color:#fff;font-size:24rpx;font-weight:700;margin-left:5rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt .cbt-l{color:#333;font-size:24rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt .cbt-r{color:#333;font-size:28rpx;font-weight:800}.page-box .save-box .price-tips{align-items:center;display:-webkit-flex;display:flex;height:90rpx;justify-content:space-between;margin-left:60rpx;width:500rpx}.page-box .save-box .price-tips .pt1{color:#be996a;font-size:30rpx}.page-box .save-box .price-tips .pt2{color:#333;font-size:30rpx}.page-box .save-box .bottom-btn{background:linear-gradient(23deg,#443a2e,#6f6351);border-radius:50rpx;color:#f2d7b1;font-size:26rpx;height:72rpx;line-height:72rpx;margin-left:60rpx;margin-top:12rpx;text-align:center;width:500rpx}
</style>
