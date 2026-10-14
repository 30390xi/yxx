<template>
<view class="page-box">
    <view class="top">{{''+name+'购买须知'}}</view>
    <view class="body">
        <u-parse class=" vue-ref" ref="article" :html="buyDesc" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        data: function() {
          return {
            buyDesc: "",
            name: "",
            parseStyle: {
              p: "word-break: break-all;"
            }
          }
        },
        onLoad: function(e) {
          this.getEquityCardDetail(e.id)
        },
        methods: {
          getEquityCardDetail: function(e) {
            var n = this;
            this.$uniApi.getRequestNoLoading("get", "product/app/equityCard/" + e).then((function(e) {
              1 === e.code ? (n.buyDesc = e.data.buyDesc, n.name = e.data.name) : n.$uni.showToast(e.msg)
            }))
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#fafafa;min-height:100vh;padding:40rpx;width:100%}.page-box .top{background:linear-gradient(292deg,#f9e6cb,#dbbc97 95%);border-radius:20rpx 20rpx 0 0;box-shadow:0-6rpx 2rpx 0 rgba(0,0,0,.08);color:#5b3e19;font-family:PingFang SC-Semibold,PingFang SC;font-size:32rpx;font-weight:600;height:100rpx;line-height:100rpx;text-align:center;width:670rpx}.page-box .body{background:#fff;min-height:505rpx;padding:46rpx 40rpx;width:670rpx}.page-box .body .p1{color:#555;font-family:PingFang SC-Regular,PingFang SC;font-size:26rpx;font-weight:400;line-height:48rpx;text-align:justify;word-break:break-all}
</style>
