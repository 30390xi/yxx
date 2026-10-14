<template>
<view class="page-box">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <image mode class="monthly-bg" src="https://eshopfile.zhiyousx.com/monthly/monthly-bg.png"></image>
    <image mode class="monthly-title" src="https://eshopfile.zhiyousx.com/monthly/monthly-title.png"></image>
    <view class="month-box" v-if="monthList[0]">
        <view class="item" v-for="(item, index) in $root.l0">
            <image mode class="bg-img" src="https://eshopfile.zhiyousx.com/monthly/card-bg.png"></image>
            <view class="item-top">
                <view :class="['month','',item.m0>9?'left':'']">{{item.m1}}</view>
                <image class="month12" mode="heightFix" :src="item.m2"></image>
                <view class="num-box">
                    <text class="">{{item.num+'张'}}</text>
                    <u-icon class="" color="#555555" name="arrow-right" size="18"></u-icon>
                </view>
            </view>
            <view class="item-body">
                <view class="item-box" v-if="i<4" v-for="(option, i) in item.userPicVoList">
                    <image class="item-img" mode="aspectFill" :src="option.splitPicUrl"></image>
                    <image mode class="tips" src="https://eshopfile.zhiyousx.com/monthly/img-tip.png"></image>
                </view>
            </view>
        </view>
    </view>
    <image mode class="rule-title" src="https://eshopfile.zhiyousx.com/monthly/rule.png"></image>
    <view class="rule-box">
        <image mode class="bt" src="https://eshopfile.zhiyousx.com/170065234874612378.png"></image>
        <view class="content">
            <view class="">1、上传图片照片请包含人像，以更能体现十二时辰的美为宜；</view>
            <view class="">2、每月评选3位月度之星，可以获得十二时辰免费入园机会，工作人员将与你联系；</view>
            <view class="">3、所有的月度之星，将有机会获得十二时辰随后活动的免费体验资格；</view>
            <view class="">4、如不希望照片被选作精选展示，请联系游陕西平台删除；</view>
            <view class="">5、参与活动即视为同意长安十二时辰主题街区及游陕西使用该照片作为宣传使用，游陕西平台对此次活动拥有最终解释权。</view>
        </view>
        <image mode class="bb" src="https://eshopfile.zhiyousx.com/170065221134689184.png"></image>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              scenicId: "",
              monthList: []
            }
          },
          onLoad: function(n) {
            this.scenicId = n.scenicId, this.getPhotoList()
          },
          methods: {
            getPhotoList: function() {
              var n = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotUserPic/selectUserPicMonthList?scenicId=".concat(n.scenicId)).then((function(t) {
                1 == t.code ? t.data.forEach((function(t) {
                  n.monthList.unshift(t)
                })) : n.$uni.showToast(t.msg)
              }))
            },
            getYear: function(n) {
              return n.split("-")[0]
            },
            getM: function(n) {
              return n.split("-")[1]
            },
            getmonthUrl: function(n) {
              return "https://eshopfile.zhiyousx.com/twmonth/m".concat(new Date(n.upMonth).getMonth() + 1, ".png")
            },
            viewmore: function(n) {
              this.$navigateTo({
                url: "/subPage/pages/monthposter/monthposter?m=" + n.upMonth + "&source=twelveWall&scenicId=" + this.scenicId
              })
            },
            priview: function(t, e) {
              var o = [];
              e.forEach((function(n) {
                o.push(n.splitPicUrl)
              })), uni.previewImage({
                current: t,
                urls: o
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{align-items:center;background:linear-gradient(90deg,#529387,#51b7a4 51%,#529387);display:-webkit-flex;display:flex;flex-direction:column;min-height:100vh;width:750rpx}.page-box .monthly-bg{height:264rpx;margin-top:153rpx;width:750rpx}.page-box .monthly-title{height:131rpx;margin-top:-230rpx;width:552rpx}.page-box .month-box .item{height:343rpx;margin-bottom:20rpx;position:relative;width:657rpx}.page-box .month-box .item .bg-img{height:343rpx;width:657rpx}.page-box .month-box .item .item-top{align-items:baseline;display:-webkit-flex;display:flex;justify-content:space-between;left:40rpx;position:absolute;top:34rpx;width:577rpx}.page-box .month-box .item .item-top .month{color:#df6914;font-size:30rpx;left:66rpx;position:absolute;top:30rpx;z-index:3}.page-box .month-box .item .item-top .month.left{left:110rpx}.page-box .month-box .item .item-top .month12{height:73rpx}.page-box .month-box .item .item-top .num-box{align-items:center;color:#555;display:-webkit-flex;display:flex;font-size:24rpx}.page-box .month-box .item .item-body{align-items:center;bottom:45rpx;display:-webkit-flex;display:flex;left:40rpx;position:absolute;width:577rpx}.page-box .month-box .item .item-body .item-box{border-radius:10rpx;height:160rpx;margin-right:17rpx;position:relative;width:181rpx}.page-box .month-box .item .item-body .item-box .item-img{border-radius:10rpx;height:160rpx;width:181rpx}.page-box .month-box .item .item-body .item-box .tips{height:70rpx;position:absolute;right:-20rpx;top:-16rpx;width:70rpx}.page-box .month-box .item .item-body .item-box:last-child{margin-right:0}.page-box .rule-title{height:94rpx;margin-top:33rpx;width:552rpx}.page-box .rule-box{display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;margin-bottom:50rpx;margin-top:13rpx}.page-box .rule-box .bt{height:40rpx;width:657rpx}.page-box .rule-box .content{background:#fff7e2;border-left:6rpx solid #d8cead;border-right:6rpx solid #d8cead;box-sizing:border-box;color:#4f4f4f;font-size:24rpx;line-height:40rpx;padding:16rpx 65rpx;text-align:justify;width:657rpx}.page-box .rule-box .bb{height:40rpx;width:657rpx}
</style>
