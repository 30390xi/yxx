<template>
<view class="u-wrap">
    <uni-navbar class="" type="fixed"></uni-navbar>
    <view class="u-menu-wrap" v-if="$root.g0>0">
        <scroll-view class="u-tab-view menu-scroll-view" :scrollWithAnimation="true" :scrollY="true">
            <view :class="['u-tab-item','',current==index?'u-tab-item-active':'']" :data-current="index" :key="index" v-for="(item, index) in tabbar">
                <text class="u-line-1">{{item.cityName}}</text>
            </view>
        </scroll-view>
        <scroll-view class="right-box" :scrollY="true" @scrolltolower="scrollToBottom($event)">
            <view class="city-box">
                <image class="city-img" mode="aspectFill" :src="tabbar[current].cityPic"></image>
                <view class="cityInfo">
                    <view class="cityName">{{ tabbar[current].cityName }}</view>
                    <view class="cityTag">{{ tabbar[current].cityTag }}</view>
                </view>
            </view>
            <view class="item-box" :key="index" v-for="(item, index) in arrSpot">
                <view class="img-box">
                    <image class="" mode="aspectFill" :src="item.pictureResources[0].resourcesUrl"></image>
                </view>
                <view class="name">
                    <view class="ntext singleLineText">{{item.scenicName}}</view>
                    <text class="" v-if="item.isBookable">订</text>
                </view>
            </view>
        </scroll-view>
    </view>
    <tab-bar class=""></tab-bar>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              tabBar: function() {
                a.e("components/tabBar/tabBar").then(function() {
                  return resolve(a("d657"))
                }.bind(null, a)).catch(a.oe)
              }
            },
            data: function() {
              return {
                tabbar: [],
                arrSpot: [],
                current: 0,
                pageNum: 1,
                loading: !1
              }
            },
            onLoad: function() {
              this._cityId = "", this.getClassify()
            },
            onShow: function() {
              this.$bus.$emit("tabPlay", 1)
            },
            methods: {
              getClassify: function() {
                var n = this;
                t.showNavigationBarLoading(), this.$uniApi.getRequestNoLoading("GET", "base/app/v1/city/queryCityList").then((function(a) {
                  t.hideNavigationBarLoading(), a.data.forEach((function(t) {
                    n.tabbar.push(t)
                  })), n._cityId = n.tabbar[0].id, n.getSpotList()
                }))
              },
              swichMenu: function(t) {
                var n = this;
                return (0, o.default)(e.default.mark((function a() {
                  return e.default.wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (t != n.current) {
                          a.next = 2;
                          break
                        }
                        return a.abrupt("return");
                      case 2:
                        n.current = t, n._cityId = n.tabbar[n.current].id, n.arrSpot = [], n.pageNum = 1, n.getSpotList();
                      case 7:
                      case "end":
                        return a.stop()
                    }
                  }), a)
                })))()
              },
              getSpotList: function() {
                var n = this;
                uni.showLoading(), this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpot", {
                  cityId: this._cityId,
                  current: this.pageNum,
                  size: 10
                }).then((function(a) {
                  uni.hideLoading(), a.data.scenicSpotVoList && a.data.scenicSpotVoList[0] ? n.arrSpot = n.arrSpot.concat(a.data.scenicSpotVoList) : uni.showToast({
                    title: "没有更多咯~",
                    icon: "none"
                  }), n.loading = !1
                })).catch((function(a) {
                  n.loading = !1, uni.hideLoading()
                }))
              },
              jumpSpotDetail: function(t) {
                this.$navigateTo({
                  url: "../spotDetail/spotDetail?spotId=".concat(t.scenicId)
                })
              },
              scrollToBottom: function() {
                this.loading || (this.loading = !0, this.pageNum++, this.getSpotList())
              },
              jumpCity: function(t) {
                this.$navigateTo({
                  url: "/subPack/pages/city/city?cityId=".concat(t.id)
                })
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.u-wrap{background-color:#fff;display:-webkit-flex;display:flex;flex-direction:column;height:100vh}.u-search-box{padding:18rpx 30rpx}.u-menu-wrap{display:-webkit-flex;display:flex;height:100%}.u-tab-view{background:#fff;height:100%;width:200rpx}.u-tab-item{align-items:center;box-sizing:border-box;color:#444;display:-webkit-flex;display:flex;font-size:26rpx;font-weight:400;height:110rpx;justify-content:center;line-height:1;position:relative}.u-tab-item .u-line-1{position:relative;z-index:2}.u-tab-item-active{color:#333;font-size:30rpx;font-weight:700}.u-tab-item-active::before{background:linear-gradient(52deg,#fc4a9e,#ff5411);border-radius:12rpx;bottom:33rpx;content:"";height:24rpx;position:absolute;width:80rpx;z-index:1}.right-box{background:#fff;box-sizing:border-box;flex:1;height:100%;line-height:1;padding-bottom:120rpx;padding-right:40rpx;padding-top:30rpx}.right-box .city-box{margin-bottom:59rpx}.right-box .city-box .city-img{border-radius:20rpx;height:280rpx;width:510rpx}.right-box .city-box .cityInfo{align-items:baseline;display:-webkit-flex;display:flex;flex-direction:row;margin-top:24rpx}.right-box .city-box .cityInfo .cityName{color:#333;font-family:Source Han Sans CN;font-size:40rpx;font-weight:700;margin:0 29px 0 5px;white-space:nowrap}.right-box .city-box .cityInfo .cityTag{color:#767676;font-family:Source Han Sans CN;font-size:24rpx;font-weight:400}.right-box .item-box{display:inline-block;margin-right:30rpx;padding-bottom:60rpx;vertical-align:top;width:240rpx}.right-box .item-box:nth-child(2n-1){margin-right:0}.right-box .item-box .img-box{border-radius:10rpx;height:200rpx;margin-bottom:30rpx;overflow:hidden;width:240rpx}.right-box .item-box .img-box image{height:100%;width:100%}.right-box .item-box .name{display:-webkit-flex;display:flex}.right-box .item-box .name .ntext{color:#333;font-size:30rpx;line-height:34rpx;margin-right:8rpx;max-width:200rpx;overflow:hidden}.right-box .item-box .name text{background:linear-gradient(56deg,#fc4a9e,#ff5411);border-radius:10rpx;color:#fff;display:inline-block;font-size:22rpx;height:32rpx;line-height:30rpx;margin-right:8rpx;text-align:center;vertical-align:4rpx;width:32rpx}
</style>
