<template>
<view class="">
    <view class="richText">
        <u-parse class=" vue-ref" ref="article" :html="paramValue" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        data: function() {
          return {
            paramValue: "",
            parseStyle: {
              p: "word-break: break-all;"
            }
          }
        },
        onLoad: function() {
          this.pageLoad()
        },
        methods: {
          pageLoad: function() {
            var e = this;
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getInfo", {
              paramKey: "WINEBOSS_ITEM"
            }).then((function(n) {
              1 === n.code && (e.paramValue = n.data[0].paramValue)
            }))
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.richText{padding:20rpx}
</style>
