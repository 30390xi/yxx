<template>
<view class="page-box">
    <view class="row-box bet" @click="e0($event)">
        <view class="label">证件类型</view>
        <view class="select">{{ $root.f0 }}<u-icon class="" color="#333333" name="arrow-right" size="20" style="margin-left:10rpx;"></u-icon>
        </view>
    </view>
    <ocr-index class="" :vueSlots="['content']" v-if="realCardType==0">
        <view class="row-box" slot="content">
            <view class="label">姓名</view>
            <view class="value">
                <u-input :border="border" class="" placeholder="请填写" type="text" :value="name" @input="name = $event"></u-input>
            </view>
        </view>
    </ocr-index>
    <view class="row-box" v-else>
        <view class="label">姓名</view>
        <view class="value">
            <u-input :border="border" class="" :placeholder="realCardType==1?'请按Surname/Given name格式填写':'请填写'" type="text" :value="name" @input="name = $event"></u-input>
        </view>
    </view>
    <view class="row-box">
        <view class="label">证件号码</view>
        <view :class="['value','',realCardType==0?'w390':'']">
            <u-input :border="border" class="" placeholder="请填写" type="text" :value="idCarNo" @input="idCarNo = $event"></u-input>
        </view>
    </view>
    <view class="row-box">
        <view class="label">手机号</view>
        <view class="value">
            <u-input :border="border" class="" placeholder="请填写" type="text" :value="phone" @input="phone = $event"></u-input>
        </view>
    </view>
    <view class="auth" @click="setCheck($event)">
        <image class="checkedNo" mode="widthFix" src="https://eshopfile.zhiyousx.com/2026020617533436720.png" v-if="!checked"></image>
        <image class="checkedNo" mode="widthFix" src="https://eshopfile.zhiyousx.com/2026020617533186277.png" v-else></image>
        <view class="text" style="margin-left:5rpx;">我已阅读并同意授权以上信息用于产品预订及相关信息通知</view>
    </view>
    <view class="footer-box" @click="editPassenger($event)">确认</view>
    <card-type class="" :realCardType="realCardType" :realCardTypeCodes="realCardTypeCodes" :showCardPop="showCardPop" @chooseCardType="chooseCardType()" @closePop="e1()"></card-type>
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
          },
          cardType: function() {
            n.e("subPage/components/card-pop/candType").then(function() {
              return resolve(n("b0c5"))
            }.bind(null, n)).catch(n.oe)
          }
        },
        data: function() {
          return {
            name: "",
            phone: "",
            idCarNo: "",
            id: "",
            submitState: !1,
            showCertificate: !1,
            realCardType: 0,
            realCardTypeList: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            realCardTypeCodes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            showCardPop: !1,
            checked: !1
          }
        },
        filters: {
          validityTimeFilter: function(e) {
            if (e) return e.slice(0, 10) + "到期"
          }
        },
        onLoad: function(e) {
          this.id = e.touristId, this.getCommonUsedTouristList(), e.codes && (this.realCardTypeCodes = e.codes.split(",")), console.log(this.realCardTypeCodes)
        },
        onShow: function() {},
        methods: {
          setCheck: function() {
            this.checked = !this.checked
          },
          setDataInfos: function(e) {
            var t = this;
            console.log(e, "参数--------"), e ? (this.name = e.name, this.idCarNo = e.idCarNo) : setTimeout((function() {
              t.$uni.showToast("识别失败，请重新识别或手动填写")
            }), 500)
          },
          getCommonUsedTouristList: function() {
            var e = this,
              t = this;
            this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/queryCommonUsedTouristList").then((function(n) {
              1 === n.code ? n.data.forEach((function(e) {
                t.id == e.id && (t.name = e.name, t.phone = e.phone || "", t.idCarNo = e.idCarNo || "", t.realCardType = e.cardType || "")
              })) : e.$uni.showToast(n.msg)
            }))
          },
          verify: function() {
            return this.$util.checkName(this.name).code && this.$util.checkPhone(this.phone).code && this.$util.checkId(this.idCarNo, this.realCardType).code
          },
          editPassenger: function() {
            var e = this;
            if (this.checked) {
              if (!this.submitState)
                if (this.verify()) {
                  var t = {
                    id: this.id,
                    name: this.name,
                    phone: this.phone,
                    idCarNo: this.idCarNo,
                    cardType: this.realCardType
                  };
                  this.submitState = !0, this.$uniApi.dataRequestYesLoading("POST", "manager/app/v1/commonUsedTourist/updateCommonUsedTourist", t, "保存中").then((function(t) {
                    1 === t.code ? e.$util.prevPage() : (e.$uni.showToast(t.msg), e.submitState = !1)
                  }))
                } else this.$uni.showToast(this.$util.checkName(this.name).msg || this.$util.checkPhone(this.phone).msg || this.$util.checkId(this.idCarNo, this.realCardType).msg)
            } else this.$uni.showToast("请先阅读并同意授权")
          },
          chooseCardType: function(e) {
            e != this.realCardType && (this.idCarNo = ""), this.realCardType = e, this.showCardPop = !1
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#fff;font-family:Source Han Sans CN-Regular,Source Han Sans CN;font-weight:400;min-height:100vh;padding:0 40rpx}.page-box .row-box{align-items:center;border-bottom:1px solid #eee;display:-webkit-flex;display:flex;font-size:30rpx;height:105rpx;line-height:45rpx;width:100%}.page-box .row-box .label{color:#333;min-width:158rpx;width:158rpx}.page-box .row-box .value{color:#333;width:500rpx}.page-box .row-box .select{align-items:center;color:#333;display:-webkit-flex;display:flex}.page-box .bet{justify-content:space-between}.page-box .auth{align-items:center;display:-webkit-flex;display:flex;height:45rpx;margin-left:-6rpx;margin-top:40rpx}.page-box .auth .checkedNo{height:40rpx;width:40rpx}.page-box .auth .text{color:#828282;font-size:24rpx}.page-box .footer-box{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:50rpx;bottom:40rpx;color:#fff;font-size:26rpx;height:80rpx;left:40rpx;line-height:80rpx;position:fixed;text-align:center;width:670rpx}.certificate{background:#fff;min-height:200rpx;padding:40rpx;width:750rpx}.certificate .name{color:#333;font-size:32rpx;line-height:48rpx;margin-bottom:60rpx}.certificate .certificate-box .certificate-item{align-items:center;display:-webkit-flex;display:flex;height:44rpx;justify-content:space-between;margin-bottom:50rpx;width:100%}.certificate .certificate-box .certificate-item .t{color:#333;font-size:28rpx}.certificate .certificate-box .certificate-item .icon{height:44rpx;width:44rpx}
</style>
