<template>
<view class="page-box">
    <view class="own it-box">
        <view class="title">团员自购贡献</view>
        <view class="user-box">
            <view class="info-box">
                <image mode class="user-img" :src="firstFenXiaoVo.picUrl?firstFenXiaoVo.picUrl:'https://eshopfile.zhiyousx.com/2021120611010377794.png'"></image>
                <view class="info">
                    <view class="i1">{{firstFenXiaoVo.nickName||''}}</view>
                </view>
            </view>
            <view class="value">
                <view class="v1">累计贡献</view>
                <view class="v2">{{'￥'+(firstFenXiaoVo.income||0)}}</view>
            </view>
        </view>
    </view>
    <view class="other it-box" v-if="secondFenXiaoVoList&&secondFenXiaoVoList[0]">
        <view class="title">团员邀请贡献</view>
        <view class="user-box" v-for="(item, __i0__) in secondFenXiaoVoList">
            <view class="info-box">
                <image mode class="user-img" :src="item.picUrl?item.picUrl:'https://eshopfile.zhiyousx.com/2021120611010377794.png'"></image>
                <view class="info">
                    <view class="i1">{{item.nickName||''}}</view>
                    <view class="i3">{{'注册日期 '+item.createTime}}</view>
                </view>
            </view>
            <view class="value">
                <view class="v1">累计贡献</view>
                <view class="v2">{{'￥'+(item.income||0)}}</view>
            </view>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        data: function() {
          return {
            firstFenXiaoVo: {},
            secondFenXiaoVoList: []
          }
        },
        onLoad: function(e) {
          this.getList(e.id)
        },
        methods: {
          getList: function(e) {
            var n = this;
            this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/member/getMySecondFenXiaoByFirstMemberId?memberId=" + e).then((function(e) {
              1 == e.code && (n.firstFenXiaoVo = e.data.firstFenXiaoVo, n.secondFenXiaoVoList = e.data.secondFenXiaoVoList)
            }))
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#fff;font-family:Source Han Sans CN-Normal,Source Han Sans CN;font-weight:400;min-height:100vh;padding:17rpx 40rpx 0;width:100%}.page-box .it-box .title{color:#333;font-size:32rpx;font-weight:500;line-height:38rpx;margin-bottom:30rpx}.page-box .it-box .user-box{display:-webkit-flex;display:flex;height:136rpx;justify-content:space-between;width:100%}.page-box .it-box .user-box .info-box{display:-webkit-flex;display:flex}.page-box .it-box .user-box .info-box .user-img{border-radius:50rpx;height:100rpx;width:100rpx}.page-box .it-box .user-box .info-box .info{margin-left:20rpx}.page-box .it-box .user-box .info-box .info .i1{color:#333;font-size:28rpx;line-height:33rpx;margin-top:5rpx}.page-box .it-box .user-box .info-box .info .i3{color:#4a4a4a;font-size:26rpx;line-height:30rpx;margin-top:8rpx}.page-box .it-box .user-box .value{font-size:26rpx;line-height:35rpx;margin-top:7rpx;text-align:right}.page-box .it-box .user-box .value .v1{color:#4a4a4a;margin-bottom:5rpx}.page-box .it-box .user-box .value .v2{color:#ff5411}
</style>
