<template>
<view class="u-wrap page-box">
    <uni-navbar class="" title="选择地图" :titleCenter="false" :transparentFixedFontColor="titleColor" type="transparentFixed"></uni-navbar>
    <view class="CustomBarBg" :style="'height:'+CustomBar+'px'+';'">
        <view class=""></view>
    </view>
    <view class="map-pop">
        <view class="mp-top" :style="'height:'+CustomBar+'px'+';'"></view>
        <view class="map-content" v-if="$root.g0>0">
            <black class="" :vueSlots="['default']" :key="id" v-for="(item, __i0__) in mapList">
                <view class="title-b">
                    <view class="title">{{ item.name }}</view>
                </view>
                <view class="scoll-map-box">
                    <view class="item" :key="id" v-for="(it, __i1__) in item.travelMapList">
                        <image class="" mode="aspectFill" :src="it.coverImg+'?imageView2/2/w/216/'"></image>
                        <view class="name multilineText2">{{it.name}}</view>
                    </view>
                </view>
            </black>
        </view>
        <view class="empty-box allcenter" v-else>
            <image mode class="" src="https://eshopfile.zhiyousx.com/2024061417153003821.png"></image>
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
              showMapPop: !1,
              CustomBar: getApp().globalData.CustomBar + 2,
              mapList: []
            }
          },
          filters: {},
          watch: {},
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          onShareAppMessage: function() {
            return {
              title: "游陕西旅游地图",
              path: this.$util.setShareUrl("union/pages/touristMap/list")
            }
          },
          onHide: function() {},
          onLoad: function(t) {
            this.getMapList()
          },
          onShow: function() {},
          onPageScroll: function(t) {},
          onReachBottom: function() {},
          methods: {
            getMapList: function() {
              var t = this;
              this.$uniApi.getRequestNoLoading("get", "base/app/v1/travelMap/getList").then((function(n) {
                1 == n.code ? t.mapList = n.data : t.$uni.showToast(n.msg)
              }))
            },
            jumpToMap: function(n) {
              0 == n.type || 1 == n.type ? this.$navigateTo({
                url: "/union/pages/touristMap/map?id=".concat(n.id, "&formType=1")
              }) : 2 == n.type ? this.$navigateTo({
                url: n.jumpDTO.linkUrl
              }) : 3 == n.type && t.openEmbeddedMiniProgram({
                appId: n.jumpDTO.appId,
                path: n.jumpDTO.linkUrl
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#fff;min-height:100vh;padding-bottom:30rpx}.page-box .CustomBarBg{background:#fff;left:0;position:fixed;top:0;width:750rpx;z-index:20}.page-box .CustomBarBg view{background:linear-gradient(180deg,#ffb25b,rgba(255,178,91,0));height:100%;width:100%}.page-box .map-pop{background:#fff;min-height:calc(100vh - 30rpx);position:relative;width:750rpx;z-index:10}.page-box .map-pop .map-content{padding:12rpx 30rpx 20rpx}.page-box .map-pop .map-content .title-b{height:50rpx;position:relative}.page-box .map-pop .map-content .title-b .title{color:rgba(0,0,0,.8);font-size:36rpx;font-weight:700;left:0;line-height:50rpx;position:absolute;top:0;z-index:20}.page-box .map-pop .map-content .title-b::after{background:url('https://eshopfile.zhiyousx.com/175031859809544279.png');background-repeat:no-repeat;background-size:100% 100%;bottom:0;content:"";height:12rpx;left:0;position:absolute;width:160rpx;z-index:10}.page-box .map-pop .map-content .scoll-map-box{display:-webkit-flex;display:flex;flex-wrap:wrap;margin-bottom:60rpx}.page-box .map-pop .map-content .scoll-map-box .item{height:220rpx;margin-right:20rpx;margin-top:20rpx;width:216rpx}.page-box .map-pop .map-content .scoll-map-box .item image{border-radius:10rpx;height:138rpx;margin-bottom:10rpx;width:216rpx}.page-box .map-pop .map-content .scoll-map-box .item .name{color:rgba(0,0,0,.8);font-size:26rpx;height:72rpx;line-height:36rpx;white-space:normal;width:216rpx}.page-box .map-pop .map-content .scoll-map-box .item:nth-child(3n){margin-right:0}.page-box .empty-box{margin-top:160rpx;width:100%}.page-box .empty-box image{height:342rpx;width:500rpx}
</style>
