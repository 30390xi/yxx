<template>
<view class="uni-popup-dialog">
    <view class="uni-dialog-title">
        <text :class="['uni-dialog-title-text','','uni-popup__'+dialogType]">{{title}}</text>
    </view>
    <view class="uni-dialog-content">
        <text class="uni-dialog-content-text" v-if="mode==='base'">{{content}}</text>
        <input class="uni-dialog-input" :focus="focus" :placeholder="placeholder" type="text" :value="val" v-else @input="val = $event"></input>
    </view>
    <view class="uni-dialog-button-group">
        <view class="uni-dialog-button" @click="close($event)">
            <text class="uni-dialog-button-text">取消</text>
        </view>
        <view class="uni-dialog-button uni-border-left" @click="onOk($event)">
            <text class="uni-dialog-button-text uni-button-color">确定</text>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        name: "uniPopupDialog",
        props: {
          value: {
            type: [String, Number],
            default: ""
          },
          placeholder: {
            type: [String, Number],
            default: "请输入内容"
          },
          type: {
            type: String,
            default: "error"
          },
          mode: {
            type: String,
            default: "base"
          },
          title: {
            type: String,
            default: "提示"
          },
          content: {
            type: String,
            default: ""
          },
          beforeClose: {
            type: Boolean,
            default: !1
          }
        },
        data: function() {
          return {
            dialogType: "error",
            focus: !1,
            val: ""
          }
        },
        inject: ["popup"],
        watch: {
          type: function(t) {
            this.dialogType = t
          },
          mode: function(t) {
            "input" === t && (this.dialogType = "info")
          },
          value: function(t) {
            this.val = t
          }
        },
        created: function() {
          this.popup.mkclick = !1, "input" === this.mode ? (this.dialogType = "info", this.val = this.value) : this.dialogType = this.type
        },
        mounted: function() {
          this.focus = !0
        },
        methods: {
          onOk: function() {
            var t = this;
            this.$emit("confirm", (function() {
              t.popup.close(), "input" === t.mode && (t.val = t.value)
            }), "input" === this.mode ? this.val : "")
          },
          close: function() {
            var t = this;
            this.beforeClose ? this.$emit("close", (function() {
              t.popup.close()
            })) : this.popup.close()
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.uni-popup-dialog{background-color:#fff;border-radius:15px;width:300px}.uni-dialog-title{display:-webkit-flex;display:flex;flex-direction:row;justify-content:center;padding-bottom:5px;padding-top:15px}.uni-dialog-title-text{font-size:16px;font-weight:500}.uni-dialog-content{align-items:center;display:-webkit-flex;display:flex;flex-direction:row;justify-content:center;padding:5px 15px 15px}.uni-dialog-content-text{color:#6e6e6e;font-size:14px}.uni-dialog-button-group{border-top:1px solid #f5f5f5;display:-webkit-flex;display:flex;flex-direction:row}.uni-dialog-button{align-items:center;display:-webkit-flex;display:flex;flex:1;flex-direction:row;height:45px;justify-content:center}.uni-border-left{border-left:1px solid #f0f0f0}.uni-dialog-button-text{font-size:14px}.uni-button-color{color:#007aff}.uni-dialog-input{flex:1;font-size:14px}.uni-popup__success{color:#4cd964}.uni-popup__warn{color:#f0ad4e}.uni-popup__error{color:#dd524d}.uni-popup__info{color:#909399}
</style>
