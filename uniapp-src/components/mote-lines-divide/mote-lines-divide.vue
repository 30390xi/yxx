<template>
<view class="">
    <view class="" style="position:relative;" v-if="isHide">
        <view class="dt-content" :style="'-webkit-line-clamp:'+line">
            <view class="content">{{ (dt?dt:'') }}</view>
        </view>
    </view>
    <view class="" v-else>
        <view class="">
            <view class="content">
                <slot v-if="$slots.default"></slot>
                <block v-else>{{dt?dt:''}}</block>
            </view>
        </view>
    </view>
    <view class="">
        <view class="placeholder" v-if="placeholder">{{ placeholder }}</view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              textHeight: 0,
              lineHeight: 1,
              placeholder: "占位"
            }
          },
          props: {
            line: {
              type: [Number, String],
              default: 1
            },
            dt: {
              type: [String],
              default: ""
            },
            enableButton: {
              type: Boolean,
              default: !0
            },
            expandText: {
              type: String,
              default: "展开"
            },
            foldHint: {
              type: String,
              default: "收起"
            },
            isHide: {
              type: Boolean,
              default: !0
            }
          },
          watch: {
            dt: function() {
              var t = this;
              setTimeout((function() {
                uni.createSelectorQuery().in(t).select(".content").boundingClientRect((function(e) {
                  t.textHeight = e.height
                })).exec()
              }), 100)
            },
            isHide: function(e) {
              this.$bus.$emit("openIntroduce")
            }
          },
          mounted: function() {
            var t = this;
            this.enableButton && uni.createSelectorQuery().in(this).select(".placeholder").boundingClientRect((function(e) {
              t.lineHeight = e.height
            })).exec();
            this.placeholder = ""
          },
          computed: {
            lines: function() {
              if (!this.enableButton) return this.line;
              var e = Math.round(this.textHeight > 0 && this.lineHeight > 0 ? this.textHeight / this.lineHeight : 0);
              return this.$emit("line_show", e), e
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.dt-content{-webkit-box-orient:vertical;color:#fff;display:-webkit-box;overflow:hidden;text-overflow:clip}.content{color:#fff;display:block;font-size:28rpx;line-height:52rpx;text-align:justify}.content text{display:inline-block}.button-show{bottom:15rpx;display:-webkit-flex;display:flex;justify-content:space-around;padding-top:2rem;position:absolute;right:0;text-align:right;width:84rpx;z-index:0}.fold-hint{color:#00f;text-align:right}.placeholder{height:52rpx}.fold-hint text{margin-right:4rpx}
</style>
