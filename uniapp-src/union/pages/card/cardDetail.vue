<template>
<view class="container">
    <uni-navbar class="" title="会员码" :titleCenter="true" :transparentFixedFontColor="titleColor" type="transparentFixed"></uni-navbar>
    <view class="bodyBox">
        <view class="box" v-if="true">
            <verify-code class="" :info="detail"></verify-code>
        </view>
        <view class="box desc-explain">
            <view class="desc-explain-title">使用说明</view>
            <view class="u-content">
                <u-parse class="" :html="detail.useDesc"></u-parse>
            </view>
        </view>
    </view>
</view>

</template>

<script>
import verifyCode from "@/union/pages/card/components/verifyCode.vue";

// Reconstructed Vue Component
const t = uni;
export default {
  components: {
    verifyCode
  },
          onShow: function() {},
          onHide: function() {},
          onLoad: function(t) {
            var e = uni.getMenuButtonBoundingClientRect();
            this.searchHeight = e.top, 1 == getCurrentPages().length ? this.firstPage = !0 : this.firstPage = !1, this.getCardDetail()
          },
          onPageScroll: function(n) {
            this.scrollTop = n.scrollTop, n.scrollTop < 10 ? this.titleColor = "#ffffff" : this.titleColor = "transparent"
          },
          data: function() {
            return {
              searchHeight: 0,
              firstPage: !1,
              scrollTop: 0,
              titleColor: "#ffffff",
              userUnionEquityCardId: "",
              detail: {}
            }
          },
          computed: {},
          watch: {},
          methods: {
            getCardDetail: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/userUnionEquityCard/getUnionEquityUse", {}).then((function(e) {
                1 === e.code ? 1 === e.data.memberJumpStatus ? t.detail = e.data : (t.$uni.showToast("您现在不是会员"), setTimeout((function() {
                  uni.navigateBack()
                }), 700)) : uni.showToast({
                  title: e.msg,
                  icon: "none"
                })
              }))
            },
            goBack: function() {
              this.firstPage ? uni.switchTab({
                url: "/pages/index/index"
              }) : uni.navigateBack({
                delta: 1
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.container .navBar{align-items:center;background-color:#fff;display:-webkit-flex;display:flex;justify-content:space-between;left:0;padding-left:20rpx;position:fixed;top:0;width:100%}.container .navBar .header_icon{height:40rpx;width:40rpx}.container .bodyBox{background:url('https://eshopfile.zhiyousx.com/171819311371140188.png')top no-repeat;background-size:100%;padding:200rpx 30rpx 40rpx}.container .bodyBox .box{background:#fff;border-radius:20rpx 20rpx 20rpx 20rpx;min-height:200rpx;padding:30rpx 20rpx}.container .bodyBox .box .desc-explain-title{color:rgba(0,0,0,.8);font-size:32rpx;line-height:45rpx;margin-bottom:20rpx}.container .bodyBox .box .u-content{color:rgba(0,0,0,.7);font-size:26rpx;line-height:40rpx}.container .bodyBox .box:last-child{margin-top:10rpx}
</style>
