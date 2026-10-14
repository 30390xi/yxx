<template>
<view class="page-box">
    <u-parse class=" vue-ref" ref="protocol" :html="content" :lazyLoad="true" :tagStyle="parseStyle" v-if="content"></u-parse>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        data: function() {
          return {
            content: "",
            parseStyle: {
              p: "word-break: break-all;"
            }
          }
        },
        onLoad: function() {
          this.getInfo()
        },
        onShow: function() {},
        methods: {
          getInfo: function() {
            var n = this;
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getInfo?paramKey=INVITE_RULE").then((function(e) {
              1 === e.code && (console.log(e.data), n.content = e.data[0].paramValue)
            }))
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{padding:20rpx}
</style>
