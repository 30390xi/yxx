<template>
<view class="page-box">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <line-card class=" vue-ref" ref="lineCard" :lineId="sessionId"></line-card>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        name: "cardPage",
        components: {
          lineCard: function() {
            Promise.all([a.e("common/vendor"), a.e("union/pages/aiTravel/components/lineCard")]).then(function() {
              return resolve(a("8a1e"))
            }.bind(null, a)).catch(a.oe)
          }
        },
        data: function() {
          return {
            showImage: !0,
            sessionId: ""
          }
        },
        filters: {},
        watch: {},
        computed: {},
        onPageScroll: function(n) {},
        onLoad: function(n) {
          console.log("onLoad"), this.sessionId = n.sessionId
        },
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onShareAppMessage: function() {
          return {
            title: "".concat(this.$refs.lineCard.todayDate.aiPlanCardLink.city).concat(this.$refs.lineCard.todayDate.days, "日游"),
            imageUrl: "https://eshopfile.zhiyousx.com/175214881804186478.png",
            path: "/union/pages/aiTravel/historyList?sessionId=".concat(this.sessionId)
          }
        },
        methods: {}
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{height:100vh;position:relative;width:100%}.page-box .navTab{align-items:center;display:-webkit-flex;display:flex;justify-content:center;left:0;position:absolute;top:166rpx;width:100%;z-index:2}.page-box .navTab .tab-1{height:53rpx;width:137rpx}.page-box .page-content{background:linear-gradient(180deg,hsla(0,0%,100%,.5),#fff 50%);border-radius:50rpx 50rpx 0rpx 0rpx;bottom:0;box-shadow:0rpx -20rpx 20rpx 0rpx rgba(154,34,6,.2);height:calc(100vh - 258rpx);overflow:auto;padding:40rpx;position:absolute;width:100%;z-index:3}.bg{height:100vh;left:0;position:fixed;top:0;width:100%;z-index:1}
</style>
