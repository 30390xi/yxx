<template>
<view class="">
    <view class="" style="padding:20rpx 30rpx;text-align:center;font-size:30rpx;">{{content.title}}</view>
    <view class="" style="text-align:center;padding:0 30rpx;font-size:24rpx;">{{content.createTime}}</view>
    <view class="richText">
        <u-parse class=" vue-ref" ref="article" :html="content.content" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        data: function() {
          return {
            annunciateId: "",
            content: "",
            parseStyle: {
              p: "word-break: break-all;"
            }
          }
        },
        onLoad: function(n) {
          n.annunciateId && (this.annunciateId = n.annunciateId), this.pageLoad()
        },
        methods: {
          pageLoad: function() {
            var n = this;
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/annunciate/" + this.annunciateId).then((function(e) {
              1 === e.code && (n.content = e.data)
            }))
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.richText{padding:20rpx}
</style>
