<template>
<view class="box-from">
    <view class="box-from-input">
        <slot name="content"></slot>
    </view>
    <view class="cor-box" v-if="showOcr" @click="ocrFun($event)">
        <image mode class="iamge" src="https://eshopfile.zhiyousx.com/173949675513410762.png"></image>
        <view class="more-cut">拍照识别</view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        data: function() {
          return {
            showOcr: !1
          }
        },
        props: {
          subscript: {
            type: [String, Number],
            default: function() {
              return ""
            }
          },
          itemIndex: {
            type: [String, Number],
            default: function() {
              return ""
            }
          },
          csflag: {
            type: Boolean,
            default: function() {
              return !1
            }
          }
        },
        created: function() {
          this.csflag || this.getOcrFlag()
        },
        methods: {
          getOcrFlag: function() {
            var n = this;
            this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getInfo", {
              paramKey: "OCR_FLAG"
            }).then((function(t) {
              1 === t.code && t.data[0] && (n.showOcr = 1 == t.data[0].paramValue)
            }))
          },
          ocrFun: function() {
            var n = "/union/pages/cor/indexImage";
            (this.subscript || 0 === this.subscript || "0" === this.subscript) && (n = "/union/pages/cor/indexImage?i=" + this.subscript), (this.itemIndex || 0 === this.itemIndex || "0" === this.itemIndex) && (n = "/union/pages/cor/indexImage?i=" + this.subscript + "&ind=" + this.itemIndex), this.$navigateTo({
              url: n
            })
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.cor-box{align-items:center;border-left:1px solid #eee;border-radius:0rpx 0rpx 0rpx 0rpx;display:-webkit-flex;display:flex;flex-flow:column;height:100%;justify-content:center;min-width:100rpx;padding-left:8rpx;position:absolute;right:0;top:50%;width:120rpx;z-index:99}.cor-box .iamge{height:32rpx;width:32rpx}.cor-box .more-cut{color:#555;font-family:Source Han Sans SC;font-size:24rpx;font-style:normal;font-weight:400;line-height:28rpx;text-align:left;text-transform:none}.box-from{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;position:relative}.box-from-input{width:calc(100% - 120rpx)}
</style>
