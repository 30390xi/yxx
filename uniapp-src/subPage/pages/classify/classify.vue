<template>
<view class="u-wrap">
    <view class="u-search-box">
        <view class="u-search-inner" @click="goSearch($event)">
            <u-icon class="" color="#909399" name="search" :size="28"></u-icon>
            <text class="u-search-text">搜索商品</text>
        </view>
    </view>
    <view class="u-menu-wrap" v-if="$root.g0>0">
        <scroll-view class="u-tab-view menu-scroll-view" :scrollTop="scrollTop" :scrollWithAnimation="true" :scrollY="true">
            <view :class="['u-tab-item','',current==index?'u-tab-item-active':'']" :data-current="index" :key="index" v-for="(item, index) in tabbar">
                <text class="u-line-1">{{item.catName}}</text>
            </view>
        </scroll-view>
        <scroll-view class="right-box" :scrollY="true">
            <block v-if="tabbar[current].children">
                <view class="classifyBanner" v-if="$root.g1>0">
                    <u-swiper borderRadius="16" class="" height="200" indicatorActiveColor="#ff4643" indicatorPos="bottomRight" interval="5000" :list="tabbar[current].adverts" name="advertPicUrl" @click="swiperClick()"></u-swiper>
                </view>
                <view class="page-view" v-if="item.children" :key="index" v-for="(item, index) in tabbar[current].children">
                    <view class="class-item">
                        <view class="item-title">
                            <text class="">{{item.catName}}</text>
                        </view>
                        <view class="item-container">
                            <view class="thumb-box" :key="index1" v-for="(item1, index1) in item.children">
                                <image class="item-menu-image" :lazyLoad="true" mode="scaleToFill" :src="item1.iconPic?item1.iconPic:'https://eshopfile.zhiyousx.com/2023102620364973049.png'"></image>
                                <view class="item-menu-name">{{item1.catName}}</view>
                            </view>
                        </view>
                    </view>
                </view>
            </block>
            <view class="empty" v-else>
                <u-empty class="" marginTop="100" text="暂无分类"></u-empty>
            </view>
        </scroll-view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            data: function() {
              return {
                tabbar: [],
                scrollTop: 0,
                current: 0,
                menuHeight: 0,
                menuItemHeight: 0
              }
            },
            onLoad: function() {
              this.getClassify()
            },
            methods: {
              getClassify: function() {
                var e = this;
                t.showNavigationBarLoading(), this.$uniApi.getRequestNoLoading("GET", "product/app/v1/itemCat/getItemCatTree").then((function(n) {
                  t.hideNavigationBarLoading(), n.data.forEach((function(t) {
                    1 === t.operatorType && e.tabbar.push(t)
                  }))
                }))
              },
              getImg: function() {
                return Math.floor(35 * Math.random())
              },
              swichMenu: function(t) {
                var e = this;
                return (0, i.default)(r.default.mark((function n() {
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (t != e.current) {
                          n.next = 2;
                          break
                        }
                        return n.abrupt("return");
                      case 2:
                        if (e.current = t, 0 != e.menuHeight && 0 != e.menuItemHeight) {
                          n.next = 8;
                          break
                        }
                        return n.next = 6, e.getElRect("menu-scroll-view", "menuHeight");
                      case 6:
                        return n.next = 8, e.getElRect("u-tab-item", "menuItemHeight");
                      case 8:
                        e.scrollTop = t * e.menuItemHeight + e.menuItemHeight / 2 - e.menuHeight / 2;
                      case 9:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              getElRect: function(e, n) {
                var a = this;
                new Promise((function(r, i) {
                  uni.createSelectorQuery().in(a).select("." + e).fields({
                    size: !0
                  }, (function(t) {
                    t ? a[n] = t.height : setTimeout((function() {
                      a.getElRect(e)
                    }), 10)
                  })).exec()
                }))
              },
              swiperClick: function(e) {
                this.tabbar[this.current].adverts[e].linkUrl && (0 === this.tabbar[this.current].adverts[e].linkType ? this.$navigateTo({
                  url: "../webpage/webpage?url=".concat(this.tabbar[this.current].adverts[e].linkUrl)
                }) : 1 === this.tabbar[this.current].adverts[e].linkType ? this.$navigateTo({
                  url: "/subPage/pages/goods_details/goods_details?itemId=".concat(this.tabbar[this.current].adverts[e].linkUrl)
                }) : 2 === this.tabbar[this.current].adverts[e].linkType ? this.tabbar[this.current].adverts[e].advertNo && t.openEmbeddedMiniProgram({
                  appId: this.tabbar[this.current].adverts[e].advertNo,
                  path: this.tabbar[this.current].adverts[e].linkUrl,
                  success: function(t) {
                    console.log("打开小程序成功", t)
                  },
                  fail: function(t) {
                    console.log("打开小程序失败", t)
                  }
                }) : 3 === this.tabbar[this.current].adverts[e].linkType && this.$navigateTo({
                  url: "../richtext/richtext?advertId=".concat(this.tabbar[this.current].adverts[e].advertId)
                }))
              },
              goGoodsList: function(t) {
                this.$navigateTo({
                  url: "../goodslist/goodslist?catId=".concat(t)
                })
              },
              goSearch: function() {
                this.$navigateTo({
                  url: "/subPage/pages/searchpage/searchpage"
                })
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.u-wrap{display:-webkit-flex;display:flex;flex-direction:column;height:calc(100vh)}.u-search-box{padding:18rpx 30rpx}.u-menu-wrap{display:-webkit-flex;display:flex;flex:1;overflow:hidden}.u-search-inner{align-items:center;background-color:#eaeaea;border-radius:100rpx;display:-webkit-flex;display:flex;padding:10rpx 16rpx}.u-search-text{color:#909399;font-size:26rpx;margin-left:10rpx}.u-tab-view{width:200rpx}.u-tab-item{align-items:center;background:#f6f6f6;box-sizing:border-box;color:#444;display:-webkit-flex;display:flex;font-size:26rpx;font-weight:400;height:110rpx;justify-content:center;line-height:1}.u-tab-item-active{background:#fff;color:#000;font-size:30rpx;font-weight:600;position:relative}.u-tab-item-active::before{border-left:4px solid #ff4643;content:"";height:32rpx;left:0;position:absolute;top:39rpx}.u-tab-view{height:100%}.right-box{background-color:#fafafa}.page-view{padding:16rpx}.class-item{background-color:#fff;border-radius:8rpx;margin-bottom:30rpx;padding:16rpx}.item-title{color:#303133;font-size:26rpx;font-weight:700}.item-menu-name{color:#303133;font-size:24rpx;font-weight:400;margin-top:10rpx}.item-container{display:-webkit-flex;display:flex;flex-wrap:wrap}.thumb-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;margin-top:20rpx;width:33.333333%}.item-menu-image{height:120rpx;width:120rpx}.classifyBanner{padding:10rpx 30rpx}
</style>
