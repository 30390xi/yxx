<template>
<view :class="['uni-tag','','uni-tag--'+type,disabled===true||disabled==='true'?'uni-tag--disabled':'',inverted===true||inverted==='true'?type+'-uni-tag--inverted':'',circle===true||circle==='true'?'uni-tag--circle':'',mark===true||mark==='true'?'uni-tag--mark':'','uni-tag--'+size]" v-if="text" @click="onClick()">
    <text :class="['',type==='default'?'uni-tag--default':'uni-tag-text',inverted===true||inverted==='true'?'uni-tag-text--'+type:'',size==='small'?'uni-tag-text--small':'']">{{text}}</text>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        name: "UniTag",
        props: {
          type: {
            type: String,
            default: "default"
          },
          size: {
            type: String,
            default: "normal"
          },
          text: {
            type: String,
            default: ""
          },
          disabled: {
            type: [Boolean, String],
            default: !1
          },
          inverted: {
            type: [Boolean, String],
            default: !1
          },
          circle: {
            type: [Boolean, String],
            default: !1
          },
          mark: {
            type: [Boolean, String],
            default: !1
          }
        },
        methods: {
          onClick: function() {
            !0 !== this.disabled && "true" !== this.disabled && this.$emit("click")
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.uni-tag{background-color:#f8f8f8;border:1rpx solid #f8f8f8;border-radius:6rpx;color:#333;display:-webkit-flex;display:flex;height:30px;justify-content:center;line-height:30px;padding:0 16px}.uni-tag--circle{border-radius:15px}.uni-tag--mark{border-bottom-left-radius:0;border-bottom-right-radius:15px;border-top-left-radius:0;border-top-right-radius:15px}.uni-tag--disabled{opacity:.5}.uni-tag--small{font-size:24rpx;height:20px;line-height:20px;padding:0 8px}.uni-tag--default{color:#333;font-size:28rpx}.uni-tag-text--small{font-size:24rpx!important}.uni-tag-text{color:#fff;font-size:28rpx}.uni-tag-text--primary{color:#007aff!important}.uni-tag-text--success{color:#4cd964!important}.uni-tag-text--warning{color:#f0ad4e!important}.uni-tag-text--error{color:#dd524d!important}.uni-tag--primary{background-color:#007aff;border:1rpx solid #007aff;color:#fff}.primary-uni-tag--inverted{background-color:#fff;border:1rpx solid #007aff;color:#007aff}.uni-tag--success{background-color:#4cd964;border:1rpx solid #4cd964;color:#fff}.success-uni-tag--inverted{background-color:#fff;border:1rpx solid #4cd964;color:#4cd964}.uni-tag--warning{background-color:#f0ad4e;border:1rpx solid #f0ad4e;color:#fff}.warning-uni-tag--inverted{background-color:#fff;border:1rpx solid #f0ad4e;color:#f0ad4e}.uni-tag--error{background-color:#dd524d;border:1rpx solid #dd524d;color:#fff}.error-uni-tag--inverted{background-color:#fff;border:1rpx solid #dd524d;color:#dd524d}.uni-tag--inverted{background-color:#fff;border:1rpx solid #f8f8f8;color:#333}
</style>
