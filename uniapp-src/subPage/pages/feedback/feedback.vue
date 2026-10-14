<template>
<view class="">
    <view class="textbox">
        <textarea class="textareas" maxlength="500" placeholder="对我们的商品、服务，您还有什么建议吗？请直接告诉我们，或拨打客服4000292296" placeholderClass="texts" :value="textareanum" @input="textareanum = $event; changefun($event)"></textarea>
        <view class="numBox">{{num+'/500'}}</view>
    </view>
    <view class="upload">
        <view class="submit">
            <view class="">
                <u-upload :action="action" :autoUpload="true" class=" vue-ref" :customBtn="true" ref="Uupload" maxCount="4" name="images" :vueSlots="['addBtn']" @onUploaded="onUploaded()" @onRemove="onRemove()">
                    <view class="slot-btn" hoverClass="slot-btn__hover" hoverStayTime="150" slot="addBtn">
                        <image class="uploadicon" mode="widthFix" src="../../static/images/camera.png"></image>
                        <text class="">添加图片</text>
                        <text class="">最多4张</text>
                    </view>
                </u-upload>
            </view>
        </view>
    </view>
    <button class="loginSub" @click="onSubmit($event)">提交信息</button>
    <u-toast class=" vue-ref" ref="uToast"></u-toast>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        data: function() {
          return {
            textareanum: "",
            num: 0,
            action: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
            uploadArr: []
          }
        },
        onLoad: function() {},
        methods: {
          onSubmit: function() {
            var e = this,
              n = {
                feedbackMemo: this.textareanum,
                feedbackPic: this.uploadArr.join(",")
              };
            if (!this.textareanum) return this.$refs.uToast.show({
              title: "内容不能空",
              type: "warning"
            });
            this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/feedback", n).then((function(n) {
              1 == n.code && (e.textareanum = "", e.uploadArr = [], e.$refs.uToast.show({
                title: "已提交",
                type: "success"
              }), setTimeout((function() {
                e.$util.goBack()
              }), 500))
            }))
          },
          changefun: function() {
            this.num = this.textareanum.length
          },
          onUploaded: function(e) {
            this.uploadArr = e.map((function(e) {
              return e.response.data[0].maxImageUrl
            }))
          },
          onRemove: function(e, n) {
            this.uploadArr.splice(e, 1)
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.u-progress{bottom:10rpx;left:8rpx;position:absolute;right:8rpx;width:auto;z-index:9}.textbox{background-color:#f8f8f8;position:relative}.textbox .textareas{background-color:#fff;border-radius:20rpx;font-size:24rpx;height:300rpx;margin:20rpx;padding:30rpx;width:650rpx}.textbox .numBox,.textbox .texts{color:#adadad;font-family:PingFang-SC-Medium;font-size:24rpx}.textbox .numBox{bottom:40rpx;position:absolute;right:41rpx}.upload{flex-direction:column;margin:0 20rpx;width:710rpx}.upload .submit,.upload{background-color:#fff;border-radius:20rpx;display:-webkit-flex;display:flex}.upload .submit{align-items:center;flex-wrap:wrap;padding:12px;width:100%}.upload .slot-btn{align-items:center;border:2rpx dashed #c8c8c8;border-radius:10rpx;display:-webkit-flex;display:flex;flex-direction:column;height:198rpx;justify-content:center;padding:20rpx;width:198rpx}.upload .slot-btn text{color:#878787;font-size:22rpx}.upload .slot-btn .uploadicon{margin-bottom:14rpx;width:52rpx}.upload .slot-btn__hover{background-color:#ebecee}.loginSub{background:linear-gradient(52deg,#fc4a9e,#ff5411);border-radius:40rpx;color:#fff;font-size:32rpx;height:80rpx;line-height:80rpx;margin:40rpx auto;width:55%}
</style>
