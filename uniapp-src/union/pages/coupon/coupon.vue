<template>
<view class="u-wrap page-box" :style="'overflow:'+(showSortPop||showChoosePop?'hidden':'visible')+';'+'height:'+(showSortPop||showChoosePop?'100vh':'auto')+';'">
    <uni-navbar class="" title="旅游出行" :titleCenter="false" :transparentFixedFontColor="titleColor" type="transparentFixed"></uni-navbar>
    <view class="top-box">
        <image class="bg-img" mode="aspectFill" src="https://eshopfile.zhiyousx.com/2024062118322195121.png" :style="'opacity:'+1-scrollTop/scrollTopLimit+';'"></image>
        <view :class="['search-box','',scrollTop>scrollTopLimit/2?'changeS':'']" :style="'top:'+menuButtonInfo.bottom+10+'px'+';'">
            <text class="" v-if="month">{{month+'月'}}</text>文旅消费福利·每月1日0点更新</view>
    </view>
    <view class="top-tab-b" :style="'background:'+(showSortPop||showChoosePop?'#FFFFFF':scrollTop>scrollTopLimit/2?'#FFFFFF':'#F5F5F4')+';'">
        <scroll-view class="tab-box" :scrollWithAnimation="true" :scrollX="true">
            <view class="tab-left"></view>
            <view :class="['tab-item','',itemType==item.itemType?'active':'']" :key="index" v-for="(item, index) in tabList">{{ item.name }}</view>
        </scroll-view>
    </view>
    <view class="module-box">
        <view class="store-item" :key="i" v-for="(it, i) in $root.l0">
            <view class="img-b">
                <image class="" mode="aspectFill" :src="it.showImage"></image>
                <view class="tip">{{ (it.itemType==1?'门票':'线路') }}</view>
            </view>
            <view class="info-box">
                <view class="name-b">
                    <view class="name singleLineText">{{ it.showName }}</view>
                    <view class="sub">券后<text class="price">{{'￥'+it.afterCouponPrice}}</text>
                        <text class="qi">起</text>
                        <text class="del">{{'￥'+it.itemSellPrice}}</text>
                    </view>
                </view>
                <view class="ad-b">
                    <view class="c-l">
                        <view class="c-info" v-if="it.type==3">
                            <text class="price">免单</text>
                            <text class="pt">{{it.f0}}</text>
                        </view>
                        <view class="c-info" v-else>￥<text class="price">{{it.quota}}</text>
                            <text class="pt">{{it.f1}}</text>
                        </view>
                        <view class="c-num">{{'已领'+it.m0+'张'}}</view>
                    </view>
                    <view :class="['c-r','',it.receiveButton==2||it.receiveButton==4||it.receiveButton==5?'dis':'',it.receiveButton==1?'crb':'']">
                        <block v-if="it.receiveButton==1">
                            <view class="">立即</view>
                            <view class="">领取</view>
                        </block>
                        <view class="" v-else>{{ it.f2 }}</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="empty-box allcenter" v-if="$root.g0">
        <image mode class="" src="https://eshopfile.zhiyousx.com/2024061417153003821.png"></image>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            data: function() {
              return {
                menuButtonInfo: {},
                scrollTop: 0,
                scrollTopLimit: 0,
                searchTop: 0,
                titleColor: "#FFFFFF",
                showSortPop: !1,
                showChoosePop: !1,
                couponList: [],
                month: 0,
                itemType: "",
                tabList: [{
                  name: "全部",
                  itemType: ""
                }, {
                  name: "门票",
                  itemType: 1
                }, {
                  name: "线路",
                  itemType: 2
                }],
                cardId: "",
                page: 1,
                loadMore: "loading"
              }
            },
            filters: {
              couponFilter: function(o) {
                return 1 == o.type ? "满".concat(o.threshold, "元") : 2 == o.type ? "无门槛" : 3 == o.type ? "抵扣".concat(o.deduction, "张") : void 0
              },
              btnFilter: function(o) {
                return {
                  1: "立即领取",
                  2: "已抢光",
                  3: "去使用",
                  4: "已使用",
                  5: "已过期"
                } [o]
              }
            },
            watch: {},
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            onHide: function() {},
            onLoad: function(t) {
              this.menuButtonInfo = uni.getMenuButtonBoundingClientRect(), this.scrollTopLimit = this.menuButtonInfo.height + 10, this.searchTop = this.menuButtonInfo.bottom + 10;
              var n = i().month();
              this.month = n + 1, this.getUnionEquityCardId()
            },
            onShow: function() {},
            onReachBottom: function() {
              "loadmore" === this.loadMore && this.getCouponList()
            },
            onPageScroll: function(o) {
              this.scrollTop = o.scrollTop;
              var t = o.scrollTop / this.scrollTopLimit;
              this.scrollTop <= 10 ? this.titleColor = "rgba(255,255,255,".concat(1 - t, ")") : this.titleColor = "rgba(0,0,0,".concat(t, ")")
            },
            onShareAppMessage: function() {
              return {
                title: "陕西联合会员文旅消费福利等你来领",
                imageUrl: "https://eshopfile.zhiyousx.com/2024061310513695733.png",
                path: this.$util.setShareUrl("union/pages/coupon/coupon")
              }
            },
            methods: {
              changeType: function(o) {
                this.itemType = o.itemType, this.current = 1, this.couponList = [], this.getCouponList()
              },
              getUnionEquityCardId: function() {
                var o = this;
                this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/userUnionEquityCard/getUnionEquityCardId").then((function(t) {
                  1 == t.code ? (o.cardId = t.data, o.getCouponList()) : o.$uni.showToast(t.msg)
                }))
              },
              getNum: function(o) {
                return this.$util.add(Number(o.receivedNum), Number(o.baseReceivedNum))
              },
              getCouponList: function() {
                var t = this,
                  n = {
                    current: this.page,
                    size: 10,
                    itemType: this.itemType,
                    unionEquityCardId: this.cardId
                  };
                this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/unionCoupon/selectPage", n).then((function(n) {
                  if (uni.stopPullDownRefresh(), 1 === n.code) {
                    var e = n.data.records;
                    n.data.total > 0 ? (1 === n.data.current ? t.couponList = e : t.couponList = t.couponList.concat(e), n.data.current < n.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.couponList = [], t.loadMore = "nomore")
                  }
                })).catch((function(t) {
                  uni.stopPullDownRefresh()
                }))
              },
              receiveCoupon: function(o) {
                var t = this;
                (0, e.confirmBefore)() && (3 != o.receiveButton ? 1 == o.receiveButton && this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                  couponId: o.couponId
                }).then((function(n) {
                  1 == n.code ? (t.$uni.showToast("领取成功"), t.getCouponDetail(o.unionCouponId)) : (t.$uni.showToast("已抢光"), t.getCouponDetail(o.unionCouponId))
                })) : (0, e.jumpUseCoupon)(o))
              },
              getCouponDetail: function(o) {
                var t = this;
                this.$uniApi.dataRequestNoLoading("get", "product/app/v1/unionCoupon/selectAppVoById", {
                  unionCouponId: o
                }).then((function(n) {
                  if (1 == n.code) {
                    var e = t.couponList.findIndex((function(t) {
                      return t.unionCouponId == o
                    }));
                    t.couponList.splice(e, 1, n.data), t.$uni.showToast(n.msg)
                  }
                }))
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#f5f5f4;min-height:100vh;padding-bottom:30rpx;width:750rpx}.page-box .top-box{background:#fff;height:280rpx;position:-webkit-sticky;position:sticky;top:0;width:750rpx;z-index:10}.page-box .top-box .bg-img{height:280rpx;width:750rpx}.page-box .top-box .search-box{align-items:center;color:hsla(0,0%,100%,.6);display:-webkit-flex;display:flex;font-size:30rpx;left:36rpx;position:absolute;width:690rpx}.page-box .top-box .search-box text{color:#fff;font-size:34rpx;margin-right:10rpx}.page-box .top-box .changeS{color:rgba(0,0,0,.6);font-size:30rpx}.page-box .top-box .changeS text{color:#000;font-size:34rpx;margin-right:10rpx}.page-box .top-tab-b{background:#f5f5f4;border-radius:20rpx 20rpx 0 0;margin-top:-20rpx;padding:20rpx 0;position:-webkit-sticky;position:sticky;top:260rpx;width:750rpx;z-index:20}.page-box .top-tab-b .tab-box{height:68rpx;white-space:nowrap;width:750rpx}.page-box .top-tab-b .tab-box .tab-left{display:inline-block;width:30rpx}.page-box .top-tab-b .tab-box .tab-item{color:#1e1b19;display:inline-block;font-size:30rpx;height:68rpx;line-height:44rpx;margin-right:64rpx;position:relative}.page-box .top-tab-b .tab-box .active{color:#e00130;font-size:34rpx;font-weight:700}.page-box .top-tab-b .tab-box .active::after{background:url('https://eshopfile.zhiyousx.com/2024052409380555605.png')no-repeat;background-size:100% 100%;bottom:0rpx;content:"";height:12rpx;left:10rpx;position:absolute;width:40rpx}.page-box .module-box{background:#f5f5f4;display:-webkit-flex;display:flex;flex-wrap:wrap;min-height:200rpx;padding:0 30rpx;position:relative;width:750rpx;z-index:5}.page-box .module-box .store-item{background:#fff;border-radius:20rpx;height:524rpx;margin-bottom:20rpx;margin-right:20rpx;width:335rpx}.page-box .module-box .store-item .img-b{position:relative}.page-box .module-box .store-item .img-b image{border-radius:8rpx;box-shadow:0 6rpx 0 0 rgba(0,0,0,.15);height:268rpx;width:335rpx}.page-box .module-box .store-item .img-b .tip{background:rgba(30,27,25,.8);border-radius:8rpx 0rpx 20rpx 0rpx;color:#fff;font-size:24rpx;height:36rpx;left:0rpx;line-height:36rpx;position:absolute;text-align:center;top:0rpx;width:64rpx}.page-box .module-box .store-item .info-box{display:-webkit-flex;display:flex;flex-direction:column;height:256rpx;padding:20rpx 14rpx;width:335rpx}.page-box .module-box .store-item .info-box .name-b .name{color:#1e1b19;font-size:30rpx;line-height:40rpx}.page-box .module-box .store-item .info-box .name-b .sub{align-items:flex-end;color:#1e1b19;display:-webkit-flex;display:flex;font-size:24rpx;height:36rpx;margin-top:12rpx}.page-box .module-box .store-item .info-box .name-b .sub .price{color:#dd032f;font-size:30rpx}.page-box .module-box .store-item .info-box .name-b .sub .qi{color:rgba(30,27,25,.6)}.page-box .module-box .store-item .info-box .name-b .sub .del{color:rgba(30,27,25,.6);margin-left:8rpx;text-decoration:line-through}.page-box .module-box .store-item .info-box .ad-b{align-items:center;display:-webkit-flex;display:flex;justify-content:center;margin-top:12rpx}.page-box .module-box .store-item .info-box .ad-b .c-l{background:linear-gradient(180deg,#f3ead5,#fcf7ee);border-radius:20rpx;box-shadow:inset -2rpx 2rpx 2rpx 0rpx hsla(0,0%,100%,.3),inset 6rpx -4rpx 13rpx 0rpx hsla(0,0%,100%,.2),0rpx 8rpx 20rpx 0rpx hsla(18,68%,64%,.1);height:116rpx;padding:18rpx 0 0 20rpx;position:relative;width:208rpx}.page-box .module-box .store-item .info-box .ad-b .c-l .c-info{align-items:flex-end;color:#dd032f;display:-webkit-flex;display:flex;font-size:28rpx;height:40rpx;line-height:1}.page-box .module-box .store-item .info-box .ad-b .c-l .c-info .price{color:#dd032f;font-size:40rpx;font-weight:700;line-height:1;margin-right:8rpx}.page-box .module-box .store-item .info-box .ad-b .c-l .c-info .pt{color:#1e1b19;font-size:24rpx;line-height:1}.page-box .module-box .store-item .info-box .ad-b .c-l .c-num{color:rgba(30,27,25,.4);font-size:24rpx;margin-top:14rpx}.page-box .module-box .store-item .info-box .ad-b .c-l::after{background:linear-gradient(180deg,#e2cdab 40%,transparent 0 100%);background-position:0 0;background-repeat:repeat-y;background-size:2rpx 12rpx;content:"";height:76rpx;position:absolute;right:-1rpx;top:20rpx;width:2rpx}.page-box .module-box .store-item .info-box .ad-b .c-r{align-items:center;background:linear-gradient(180deg,#f0b660,#fddda0);border-radius:20rpx;box-shadow:inset -2rpx 2rpx 2rpx 0rpx hsla(0,0%,100%,.3),inset 6rpx -4rpx 13rpx 0rpx hsla(0,0%,100%,.2),0rpx 8rpx 20rpx 0rpx hsla(18,68%,64%,.1);display:-webkit-flex;display:flex;flex-direction:column;height:116rpx;justify-content:center;width:100rpx}.page-box .module-box .store-item .info-box .ad-b .c-r view{color:#1e1b19;font-size:26rpx;font-weight:500;line-height:36rpx}.page-box .module-box .store-item .info-box .ad-b .crb{background:linear-gradient(180deg,#1e1b19 61%,#847970)}.page-box .module-box .store-item .info-box .ad-b .crb view{color:#fff;font-size:26rpx;font-weight:500;line-height:36rpx}.page-box .module-box .store-item:nth-child(2n){margin-right:0}.empty-box{margin-top:160rpx;width:100%}.empty-box image{height:342rpx;width:500rpx}.dis{opacity:.5}
</style>
