<template>
<view class="availableProducts-page">
    <view class="header">
        <view class="content" v-if="detailObj.type==3">限时促销：以下商品可使用0元购优惠券</view>
        <block v-else>
            <view class="content" v-if="detailObj.type==1&&detailObj.threshold>0">{{'限时促销：以下商品可使用满'+detailObj.threshold+'减'+detailObj.quota}}</view>
            <view class="content" v-if="detailObj.type==2&&detailObj.threshold==0">{{'限时促销：以下商品可使用'+detailObj.quota+'元无门槛券'}}</view>
        </block>
    </view>
    <scroll-view class="coupon-list" :scrollY="true" @scrolltolower="scrolltolower($event)">
        <view class="shop-list">
            <view class="item" :key="index" v-for="(item, index) in $root.l1">
                <view class="info-box">
                    <view class="pic-box">
                        <image class="" mode="aspectFill" :src="item.productPic"></image>
                        <view class="lt-tip">{{item.f0}}</view>
                        <view class="bto-tip" v-if="item.cityNames">
                            <image mode class="" src="/static/captured/b783dbfada461ad4.png"></image>
                            <view class="txt">{{item.g0[0]+'出发'}}</view>
                        </view>
                    </view>
                    <view class="r-info">
                        <view class="nameTipsBox">
                            <view class="name multilineText2">{{ item.productName }}<view class="star-box" v-if="item.level>0">
                                    <view class="star">{{''+item.level+'A'}}</view>
                                </view>
                            </view>
                            <view class="highLights singleLineText" v-if="item.lineHighlightLabelList">
                                <text class="" :key="idx" v-for="(ele, idx) in item.l0">{{''+ele+(idx===ele.g1-1?'':'/')}}</text>
                            </view>
                            <view class="tips">
                                <view class="tag it" v-if="item.lineTagList&&item.lineTagList[0]" :key="index" v-for="(tag, __i0__) in item.lineTagList">{{tag}}</view>
                            </view>
                        </view>
                        <view class="price-box">
                            <view class="item-btn" v-if="!item.stockStatus||item.sellOut">售罄</view>
                            <block v-else>
                                <view class="quan">券</view>
                                <view class="yang">￥</view>
                                <view class="num">{{item.afterCouponPrice}}</view>
                                <view class="qi" v-if="item.startPriceFlag">起</view>
                            </block>
                        </view>
                    </view>
                </view>
            </view>
            <view class="empty" v-if="$root.g2">
                <empty-state class="" imgUrl="https://eshopfile.zhiyousx.com/noOrder@2x.png" text="暂无产品"></empty-state>
            </view>
            <view class="loadMore" v-else>
                <u-loadmore bgColor="#f7f7f7" class="" color="#ccc" iconColor="#ccc" :status="loadMore"></u-loadmore>
            </view>
        </view>
    </scroll-view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              EmptyState: function() {
                n.e("components/empty/empty").then(function() {
                  return resolve(n("a427"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                loadMore: "loading",
                recommendList: [],
                current: 1,
                size: 8,
                total: 0,
                couponId: "",
                detailObj: {}
              }
            },
            filters: {
              travelModeFilter: function(e) {
                return {
                  0: "全部",
                  1: "跟团游",
                  2: "一日游",
                  3: "自由行",
                  4: "研学游"
                } [e + 1]
              }
            },
            methods: {
              scrolltolower: function() {
                "loadmore" == this.loadMore && (this.current += 1, this.getList())
              },
              getDec: function(e) {
                var t, n = "",
                  o = "",
                  r = "",
                  a = "";
                return e.cityList && e.cityList.forEach((function(e, t) {
                  o += e + "/"
                })), o && (o = o.slice(0, -1) + " · "), t = ["跟团游", "一日游", "自由行", "研学游"][e.travelMode], e.journeyDay && (r = e.journeyDay + "天"), e.journeyNight && (a = e.journeyNight + "晚"), (r || a) && (n = " · " + r + a), o + t + n
              },
              getList: function() {
                var t = this;
                return (0, i.default)(r.default.mark((function n() {
                  var o, i, u;
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.prev = 0, uni.showLoading(), o = {
                          couponId: t.couponId,
                          current: t.current,
                          size: t.size
                        }, n.next = 5, t.$uniApi.dataRequestNoLoading("POST", "product/app/v1/line/product/couponCanUseProduct", o);
                      case 5:
                        1 == (i = n.sent).code && (t.loadMore = i.data.records.length > 7 ? "loadmore" : "nomore", (u = t.recommendList).push.apply(u, (0, a.default)(i.data.records))), n.next = 11;
                        break;
                      case 9:
                        n.prev = 9, n.t0 = n.catch(0);
                      case 11:
                        return n.prev = 11, setTimeout((function() {
                          uni.hideLoading()
                        }), 300), n.finish(11);
                      case 14:
                      case "end":
                        return n.stop()
                    }
                  }), n, null, [
                    [0, 9, 11, 14]
                  ])
                })))()
              },
              goShopDetail: function(t) {
                uni.navigateTo({
                  url: "/subPack/pages/lineProductDetails/lineProductDetails?productId=".concat(t.productId)
                })
              }
            },
            onLoad: function(e) {
              if (e.coupon) {
                var t = JSON.parse(e.coupon);
                this.detailObj = t, this.couponId = t.couponId ? t.couponId : t.userCouponId, this.getList()
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.availableProducts-page .header{background:rgba(255,84,17,.1);height:78rpx;line-height:78rpx;padding-left:20rpx;width:750rpx}.availableProducts-page .header .content{color:#ff5411;font-size:24rpx}.availableProducts-page .coupon-list{height:94vh;overflow-y:auto}.availableProducts-page .coupon-list .empty{padding:30rpx}.availableProducts-page .coupon-list .empty .coupon-item .box,.availableProducts-page .coupon-list .empty .coupon-item,.availableProducts-page .coupon-list .empty{display:-webkit-flex;display:flex;flex-direction:column}.availableProducts-page .coupon-list .empty .coupon-item .box{margin-bottom:22rpx;position:relative;z-index:999}.availableProducts-page .coupon-list .empty .coupon-item .box .stamp{height:100rpx;left:384rpx;position:absolute;top:20rpx;width:100rpx}.availableProducts-page .coupon-list .empty .coupon-item .box .left{background:#fff;border:1rpx solid #d3d3d3;border-radius:20rpx 0rpx 0rpx 20rpx;border-right:none;display:-webkit-flex;display:flex;flex-direction:column;height:200rpx;padding:30rpx 0 25rpx 20rpx;width:460rpx}.availableProducts-page .coupon-list .empty .coupon-item .box .left .name{color:rgba(0,0,0,.8);font-size:28rpx;font-weight:600;line-height:33rpx}.availableProducts-page .coupon-list .empty .coupon-item .box .left .date{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400;line-height:28rpx;margin:20rpx 0 27rpx}.availableProducts-page .coupon-list .empty .coupon-item .box .left .detail{display:-webkit-flex;display:flex}.availableProducts-page .coupon-list .empty .coupon-item .box .left .detail .look{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400;line-height:28rpx;margin-right:10rpx}.availableProducts-page .coupon-list .empty .coupon-item .box .right{align-items:center;background:url('https://eshopfile.zhiyousx.com/170917118927429426.png')no-repeat;background-size:100% 100%;display:-webkit-flex;display:flex;flex-direction:column;height:200rpx;padding-top:16rpx;width:229rpx}.availableProducts-page .coupon-list .empty .coupon-item .box .right .ceng1{display:-webkit-flex;display:flex}.availableProducts-page .coupon-list .empty .coupon-item .box .right .ceng1 .yang{color:#ff5411;font-size:40rpx;font-weight:400}.availableProducts-page .coupon-list .empty .coupon-item .box .right .ceng1 .money{color:#ff5411;font-size:50rpx;font-weight:400}.availableProducts-page .coupon-list .empty .coupon-item .box .right .ceng2{color:rgba(0,0,0,.8);font-size:24rpx;font-weight:400;line-height:28rpx;margin-bottom:10rpx}.availableProducts-page .coupon-list .empty .coupon-item .box .right .ceng3{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:40rpx 40rpx 40rpx 40rpx;color:#fff;font-size:24rpx;height:50rpx;line-height:50rpx;text-align:center;width:160rpx}.availableProducts-page .coupon-list .empty .coupon-item .box .right .ceng4{border:1rpx solid #ff5411;border-radius:40rpx 40rpx 40rpx 40rpx;color:#ff5411;font-size:24rpx;height:50rpx;line-height:50rpx;text-align:center;width:160rpx}.availableProducts-page .coupon-list .empty .coupon-item .box .introduce{background:#f9f9f9;border-radius:0rpx 0rpx 20rpx 20rpx;display:-webkit-flex;display:flex;height:120rpx;margin-top:-10rpx;padding:30rpx 20rpx;width:669rpx}.availableProducts-page .coupon-list .empty .coupon-item .box .introduce .wenzi{color:rgba(0,0,0,.3);font-size:24rpx;font-weight:400}.availableProducts-page .coupon-list .recommend{display:-webkit-flex;display:flex;justify-content:center;margin:30rpx 0}.availableProducts-page .coupon-list .shop-list{border-radius:20rpx;padding:30rpx 20rpx}.availableProducts-page .coupon-list .shop-list .item{background:#fff;border-radius:20rpx;margin-bottom:20rpx;padding:20rpx 0 20rpx 20rpx}.availableProducts-page .coupon-list .shop-list .item .info-box{display:-webkit-flex;display:flex}.availableProducts-page .coupon-list .shop-list .item .info-box .pic-box{border-radius:10rpx 20rpx 20rpx 20rpx;box-shadow:6rpx 0 0 0 rgba(0,0,0,.15),12rpx 0 0 0 rgba(0,0,0,.05);height:auto;max-width:208rpx;min-height:208rpx;position:relative;width:208rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .pic-box image{border-radius:10rpx 20rpx 20rpx 20rpx;height:100%;width:100%}.availableProducts-page .coupon-list .shop-list .item .info-box .pic-box .lt-tip{background:rgba(35,32,32,.5);border-radius:10rpx 0 10rpx 0;color:#fff;font-size:24rpx;height:42rpx;left:0;line-height:42rpx;min-width:72rpx;padding:0 12rpx;position:absolute;text-align:center;top:0}.availableProducts-page .coupon-list .shop-list .item .info-box .pic-box .bto-tip{align-items:center;background:rgba(35,32,32,.5);border-radius:0 0 20rpx 20rpx;bottom:0;display:-webkit-flex;display:flex;height:42rpx;justify-content:center;left:0;position:absolute;width:208rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .pic-box .bto-tip image{height:20rpx;margin-right:6rpx;width:20rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .pic-box .bto-tip .txt{color:#fff;font-size:24rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info{display:-webkit-flex;display:flex;flex-direction:column;height:auto;justify-content:space-between;margin-left:20rpx;min-height:200rpx;padding-bottom:8rpx;width:422rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info .nameTipsBox .name{color:#1e1b19;font-size:32rpx;line-height:46rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info .nameTipsBox .name .star-box{display:inline-block;height:38rpx;margin-left:10rpx;position:relative;width:40rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info .nameTipsBox .name .star-box .star{background:linear-gradient(51deg,#e8b091,#ffe7d0);border-radius:6rpx;color:#92322a;font-size:24rpx;height:38rpx;left:0;line-height:38rpx;position:absolute;text-align:center;top:8rpx;width:40rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info .nameTipsBox .ad{color:rgba(30,27,25,.6);font-size:24rpx;line-height:34rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info .nameTipsBox .rank{background:rgba(217,52,0,.1);border-radius:60rpx;color:#92322a;display:inline-block;font-size:24rpx;line-height:34rpx;margin-top:16rpx;padding:0 20rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info .nameTipsBox .highLights{margin-top:8rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info .nameTipsBox .highLights text{color:rgba(30,27,25,.4);font-size:24rpx;line-height:24rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info .nameTipsBox .tips{display:-webkit-flex;display:flex;flex-wrap:wrap;height:34rpx;margin-top:16rpx;overflow:hidden}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info .nameTipsBox .tips .it{margin-right:10rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info .nameTipsBox .tips .tag{border:1rpx solid rgba(30,27,25,.2);border-radius:40rpx;color:#92322a;font-size:24rpx;height:34rpx;line-height:32rpx;padding:0 20rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info .price-box{display:-webkit-flex;display:flex;justify-content:flex-end;margin-top:16rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info .price-box .item-btn{background:linear-gradient(107deg,#ffb2d5,#ffc1aa);border-radius:30px;color:#fff;font-size:26rpx;height:50rpx;line-height:50rpx;text-align:center;width:120rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info .price-box .quan{background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:10rpx 2rpx 10rpx 2rpx;color:#fff;font-size:24rpx;height:35rpx;margin-right:10rpx;text-align:center;width:40rpx}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info .price-box .yang{color:#ff5411;font-size:24rpx;font-weight:400}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info .price-box .num{color:#ff5411;font-size:36rpx;font-weight:400;height:37rpx;line-height:19px}.availableProducts-page .coupon-list .shop-list .item .info-box .r-info .price-box .qi{color:#999897;font-size:24rpx;font-weight:400;height:30rpx;line-height:37rpx;margin-left:10rpx}.availableProducts-page .coupon-list .shop-list .disable{background:#eee}
</style>
