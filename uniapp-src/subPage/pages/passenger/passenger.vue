<template>
<view class="page-box">
    <view class="user-box" :key="index" v-for="(item, index) in $root.l0">
        <view class="row-box" v-if="item.name">
            <view class="label">姓名</view>
            <view class="value">{{item.name}}</view>
        </view>
        <view class="row-box" v-if="item.phone">
            <view class="label">手机号</view>
            <view class="value">{{item.f0}}</view>
        </view>
        <view class="row-box" v-if="item.idCarNo">
            <view class="label">证件类型</view>
            <view class="value">{{item.f1}}</view>
        </view>
        <view class="row-box" v-if="item.idCarNo">
            <view class="label">证件号码</view>
            <view class="value">{{item.f2}}</view>
        </view>
        <view class="but-box">
            <view class="but">
                <image mode class="edit" src="../../static/images/edit.png"></image>编辑</view>
            <view class="but del">删除</view>
        </view>
    </view>
    <view class="add-but" @click="addPassenger()">+ 新增联系人</view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              commonUsedTouristList: []
            }
          },
          filters: {
            phoneFilter: function(n) {
              if (n) {
                var e = n.toString();
                return e.replace(e.substring(3, 7), "****")
              }
            },
            idCarNoFilter: function(n) {
              if (n) {
                var e = n.toString();
                return e.substring(0, 1) + "****************" + e.substring(e.length - 1, e.length)
              }
            }
          },
          onLoad: function(n) {},
          onShow: function() {
            this.getCommonUsedTouristList()
          },
          methods: {
            getCommonUsedTouristList: function() {
              var n = this;
              this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/queryCommonUsedTouristList").then((function(e) {
                1 === e.code ? n.commonUsedTouristList = e.data || [] : n.$uni.showToast(e.msg)
              }))
            },
            editPassenger: function(n) {
              this.$navigateTo({
                url: "/subPage/pages/editPassenger/editPassenger?touristId=".concat(n)
              })
            },
            delPassenger: function(e) {
              var t = this,
                o = {
                  id: e
                };
              uni.showModal({
                cancelText: "取消",
                confirmText: "确认",
                content: "是否删除该旅客?",
                success: function(n) {
                  n.confirm ? t.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/deleteCommonUsedTourist", o).then((function(n) {
                    1 === n.code ? t.getCommonUsedTouristList() : t.$uni.showToast(n.msg)
                  })) : n.cancel && console.log("cancel")
                }
              })
            },
            addPassenger: function() {
              this.$navigateTo({
                url: "/subPage/pages/addPassenger/addPassenger"
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#fff;font-family:Source Han Sans CN-Regular,Source Han Sans CN;font-weight:400;min-height:100vh;padding-bottom:120rpx}.page-box .user-box{padding:25rpx 40rpx 45rpx}.page-box .user-box .row-box{align-items:center;display:-webkit-flex;display:flex;font-size:28rpx;justify-content:space-between;line-height:33rpx;margin-bottom:36rpx}.page-box .user-box .row-box .label{color:#999}.page-box .user-box .row-box .value{color:#333}.page-box .user-box .row-box:last-child{margin-bottom:0}.page-box .user-box .but-box{display:-webkit-flex;display:flex;justify-content:flex-end;margin-top:30rpx}.page-box .user-box .but-box .but{align-items:center;border:1px solid #333;border-radius:20rpx;color:#333;display:-webkit-flex;display:flex;font-size:26rpx;height:70rpx;justify-content:center;line-height:30rpx;margin-left:20rpx;opacity:1;width:200rpx}.page-box .user-box .but-box .but .edit{height:29.5rpx;margin-right:5rpx;width:29.9rpx}.page-box .user-box .but-box .del{border:1px solid #999}.page-box .add-but{background:#fff;border:1px solid #ff5411;border-radius:20rpx;bottom:50rpx;color:#ff5411;font-size:30rpx;height:80rpx;left:40rpx;line-height:78rpx;margin-top:20rpx;position:fixed;text-align:center;width:670rpx}
</style>
