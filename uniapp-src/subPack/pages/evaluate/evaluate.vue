<template>
<view class="">
    <block v-if="$root.g0>0">
        <view class="evaluateItem" :key="index" v-for="(item, index) in commentList">
            <view class="goodsBox">
                <view class="itemPic">
                    <u-lazy-load borderRadius="10" class="" height="100" :image="item.pic" imgMode="scaleToFill"></u-lazy-load>
                </view>
                <view class="goodsInfo">
                    <text class="multilineText2">{{item.name}}</text>
                    <text class="">{{item.skuName?item.skuName:''}}</text>
                </view>
            </view>
            <u-input class="" maxlength="120" placeholder="分享购买心得给小伙伴吧" type="textarea" :value="item.commentContent"></u-input>
            <view class="upload">
                <view class="submit">
                    <view class="uItem">
                        <u-upload :action="action" :autoUpload="true" class=" vue-ref-in-for" :customBtn="true" :ref="'uUpload'+index" maxCount="3" name="images" :vueSlots="['addBtn']">
                            <view class="slot-btn" hoverClass="slot-btn__hover" hoverStayTime="150" slot="addBtn">
                                <u-icon class="" :color="$u.color['lightColor']" name="photo" size="60"></u-icon>
                            </view>
                        </u-upload>
                    </view>
                </view>
            </view>
        </view>
        <button class="loginSub" @click="onSubmit($event)">提交评论</button>
    </block>
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
              type: "",
              action: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
              commentList: []
            }
          },
          onLoad: function(t) {
            t.orderId && (this.orderId = t.orderId), t.type ? this.type = t.type : this.type = "", this.pageLoad()
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getOrderStatusList?orderId=".concat(this.orderId, "&buyerId=").concat(this.userInfo.memberId)).then((function(e) {
                if (1 === e.code) {
                  var n = e.data.records[0].items;
                  n.forEach((function(t) {
                    t.commentContent = "", t.itemCommentPics = []
                  })), t.commentList = n
                }
              }))
            },
            onSubmit: function() {
              var e = this;
              if (this.commentList.every((function(t) {
                  return t.commentContent
                }))) {
                var n = [];
                this.commentList.forEach((function(t, o) {
                  var u = e.$refs["uUpload" + o];
                  t.itemCommentPics = u[0].lists.map((function(t) {
                    return t.response.data[0].maxImageUrl
                  })), n.push({
                    commenterId: e.userInfo.memberId,
                    itemId: t.itemId,
                    skuId: t.skuId,
                    orderId: e.orderId,
                    commentContent: t.commentContent,
                    itemCommentPics: t.itemCommentPics
                  })
                })), this.$uniApi.dataRequestYesLoading("POST", "product/app/v1/itemComment/batchComment", {
                  param: n
                }, "提交中").then((function(n) {
                  if (1 === n.code)
                    if (e.$refs.uToast.show({
                        title: "已评论",
                        type: "success",
                        position: "bottom"
                      }), e.type) e.$util.prevPage();
                    else {
                      var o = getCurrentPages(),
                        u = o[o.length - 3];
                      uni.navigateBack({
                        delta: 2,
                        success: function() {
                          u.$vm.page = 1, u.$vm.pageLoad()
                        }
                      })
                    }
                }))
              } else this.$refs.uToast.show({
                title: "评论内容不能为空",
                type: "warning",
                position: "bottom"
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.evaluateItem{background-color:#fff;margin-bottom:20rpx;padding:20rpx 30rpx}.evaluateItem .goodsBox{align-items:center;display:-webkit-flex;display:flex;margin-bottom:20rpx}.evaluateItem .goodsBox .itemPic{border-radius:4rpx;height:100rpx;width:100rpx}.evaluateItem .goodsBox .goodsInfo{margin-left:20rpx}.evaluateItem .goodsBox .goodsInfo>text:first-child{color:#1c1c1d;font-size:28rpx}.evaluateItem .goodsBox .goodsInfo>text:last-child{color:#878787;font-size:24rpx}.evaluateItem .scoreBox{display:-webkit-flex;display:flex;margin:25rpx 0}.evaluateItem .scoreBox>text{color:#1c1c1d;font-size:28rpx;margin-right:20rpx}.upload{flex-direction:column}.upload .submit,.upload{background-color:#fff;display:-webkit-flex;display:flex;width:100%}.upload .submit{align-items:center;flex-wrap:wrap;padding-bottom:15rpx}.upload .slot-btn{align-items:center;border:2rpx dashed #c8c8c8;border-radius:10rpx;display:-webkit-flex;display:flex;height:198rpx;justify-content:center;padding:20rpx;width:198rpx}.upload .slot-btn__hover{background-color:#ebecee}.loginSub{background-image:linear-gradient(90deg,#ff4643,#f72724);border-radius:40rpx;color:#fff;font-size:32rpx;height:80rpx;line-height:80rpx;margin:20rpx auto;width:80%}
</style>
