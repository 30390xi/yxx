<template>
<view class="">
    <view class="textbox">
        <textarea :autoHeight="true" class="textareas" maxlength="300" placeholder="请输入售后原因..." placeholderClass="texts" :value="aftersaleReason" @input="aftersaleReason = $event; changefun($event)"></textarea>
        <view class="numBox">{{num+'/300'}}</view>
    </view>
    <view class="upload">
        <view class="submit">
            <view class="">
                <u-upload :action="action" :autoUpload="true" class=" vue-ref" :customBtn="true" ref="Uupload" maxCount="3" name="images" :vueSlots="['addBtn']" @onUploaded="onUploaded()" @onRemove="onRemove()">
                    <view class="slot-btn" hoverClass="slot-btn__hover" hoverStayTime="150" slot="addBtn">
                        <uni-icons class="" :color="$u.color['lightColor']" size="60" type="image"></uni-icons>
                    </view>
                </u-upload>
            </view>
        </view>
    </view>
    <button class="loginSub" :disabled="loadingStatus" :loading="loadingStatus" @click="onSubmit($event)">提交申请</button>
    <u-toast class=" vue-ref" ref="uToast"></u-toast>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              orderId: "",
              aftersaleType: "",
              type: "",
              loadingStatus: !1,
              aftersaleReason: "",
              num: 0,
              action: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
              uploadArr: []
            }
          },
          onLoad: function(e) {
            e.orderId && (this.orderId = e.orderId, this.aftersaleType = e.aftersaleType), e.type ? this.type = e.type : this.type = ""
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            onSubmit: function() {
              var t = this;
              if (!this.aftersaleReason) return this.$refs.uToast.show({
                title: "请输入原因",
                type: "error"
              });
              var n = {
                orderId: this.orderId,
                aftersaleReason: this.aftersaleReason,
                aftersaleType: this.aftersaleType,
                memberId: this.userInfo.memberId,
                memberName: this.userInfo.nickName ? this.userInfo.nickName : "",
                memberPhone: this.userInfo.mobilePhone
              };
              this.uploadArr.length > 0 && (n.aftersalePic = this.uploadArr.join(",")), this.loadingStatus = !0, this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/aftersaleNew", n).then((function(n) {
                if (t.loadingStatus = !1, 1 == n.code)
                  if (t.$refs.uToast.show({
                      title: "已提交申请",
                      type: "success",
                      position: "bottom"
                    }), t.type) t.$util.prevPage();
                  else {
                    var o = getCurrentPages(),
                      a = o[o.length - 3];
                    uni.navigateBack({
                      delta: 2,
                      success: function() {
                        a.$vm.page = 1, a.$vm.pageLoad()
                      }
                    })
                  }
              })).catch((function(e) {
                t.loadingStatus = !1, t.$u.toast(e.msg)
              }))
            },
            changefun: function() {
              this.num = this.aftersaleReason.length
            },
            onUploaded: function(e) {
              this.uploadArr = e.map((function(e) {
                return e.response.data[0].maxImageUrl
              }))
            },
            onRemove: function(e, t) {
              this.uploadArr.splice(e, 1)
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.textbox{background-color:#f8f8f8}.textbox .textareas{background-color:#fff;box-sizing:border-box;font-size:24rpx;min-height:300rpx;padding:30rpx;width:100%}.textbox .texts{color:#adadad;font-size:24rpx}.textbox .numBox{background-color:#fff;color:#adadad;font-size:24rpx;padding:0 30rpx 20rpx;text-align:right}.upload{flex-direction:column}.upload .submit,.upload{background-color:#fff;display:-webkit-flex;display:flex;width:100%}.upload .submit{align-items:center;flex-wrap:wrap;padding:12px}.upload .slot-btn{align-items:center;border:2rpx dashed #c8c8c8;border-radius:10rpx;display:-webkit-flex;display:flex;height:198rpx;justify-content:center;padding:20rpx;width:198rpx}.upload .slot-btn__hover{background-color:#ebecee}.loginSub{background-image:linear-gradient(90deg,#ff4643,#f72724);border-radius:40rpx;color:#fff;font-size:32rpx;height:80rpx;line-height:80rpx;margin:80rpx auto;width:80%}
</style>
