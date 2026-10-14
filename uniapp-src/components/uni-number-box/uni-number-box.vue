<template>
<view class="uni-numbox">
    <view class="uni-numbox__minus" @click="_calcValue('minus')">
        <text :class="['uni-numbox--text','',inputValue<=min||disabled?'uni-numbox--disabled':'']">-</text>
    </view>
    <input class="uni-numbox__value" :disabled="disabled" type="number" :value="inputValue" @blur="_onBlur($event)" @input="inputValue = $event"></input>
    <view class="uni-numbox__plus" @click="_calcValue('plus')">
        <text :class="['uni-numbox--text','',inputValue>=max||disabled?'uni-numbox--disabled':'']">+</text>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        name: "UniNumberBox",
        props: {
          value: {
            type: [Number, String],
            default: 1
          },
          min: {
            type: Number,
            default: 0
          },
          max: {
            type: Number,
            default: 100
          },
          step: {
            type: Number,
            default: 1
          },
          disabled: {
            type: Boolean,
            default: !1
          },
          parentIndex: {
            type: Number,
            default: 0
          },
          childIndex: {
            type: Number,
            default: 0
          }
        },
        data: function() {
          return {
            inputValue: 0
          }
        },
        watch: {
          value: function(n) {
            this.inputValue = +n
          },
          inputValue: function(n, e) {
            +n != +e && this.$emit("change", n, this.parentIndex, this.childIndex)
          }
        },
        created: function() {
          this.inputValue = +this.value
        },
        methods: {
          _calcValue: function(n) {
            if (!this.disabled) {
              var e = this._getDecimalScale(),
                t = this.inputValue * e,
                i = this.step * e;
              if ("minus" === n) {
                if ((t -= i) < this.min) return;
                t > this.max && (t = this.max)
              } else if ("plus" === n) {
                if ((t += i) > this.max) return;
                t < this.min && (t = this.min)
              }
              this.inputValue = String(t / e)
            }
          },
          _getDecimalScale: function() {
            var n = 1;
            return ~~this.step !== this.step && (n = Math.pow(10, (this.step + "").split(".")[1].length)), n
          },
          _onBlur: function(n) {
            var e = n.detail.value;
            e && ((e = +e) > this.max ? e = this.max : e < this.min && (e = this.min), this.inputValue = e)
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.uni-numbox{display:-webkit-flex;display:flex;flex-direction:row;height:50rpx;line-height:50rpx}.uni-numbox__value{background-color:#fff;border:1rpx solid #eaeaea;font-size:32rpx;height:48rpx;text-align:center;width:80rpx}.uni-numbox__minus{border:1rpx solid #eaeaea;border-bottom-left-radius:60rpx;border-right-width:0;border-top-left-radius:60rpx;color:#333;font-size:20px}.uni-numbox__minus,.uni-numbox__plus{align-items:center;background-color:#fff;display:-webkit-flex;display:flex;flex-direction:row;height:54rpx;justify-content:center;width:60rpx}.uni-numbox__plus{border:1rpx solid #eaeaea;border-bottom-right-radius:60rpx;border-left-width:0;border-top-right-radius:60rpx}.uni-numbox--text{color:#ccc;font-size:40rpx}.uni-numbox--disabled{color:silver}
</style>
