<template>
<view class="collectCoupons">
    <scroll-view class="coupon-list" :scrollY="true">
        <view class="empty">
            <view class="coupon-item">
                <view class="box">
                    <view class="box1">
                        <view class="left">
                            <view class="name">{{couponDetail.name}}</view>
                            <view class="date" v-if="couponDetail.useTimeSlot==0">{{$root.f0+'-'+$root.f1}}</view>
                            <block v-if="couponDetail.useTimeSlot==1">
                                <view class="date" v-if="couponDetail.memberReceivedNum==0">{{$root.f2+'-'+$root.f3}}</view>
                                <view class="date" v-else>{{'领券后'+couponDetail.useTimeSlotHour+'小时内有效'}}</view>
                            </block>
                            <block v-if="couponDetail.useTimeSlot==2">
                                <view class="date" v-if="couponDetail.memberReceivedNum==0">{{$root.f4+'-'+$root.f5}}</view>
                                <view class="date" v-else>{{couponDetail.useTimeStart+'-'+couponDetail.useTimeEnd}}</view>
                            </block>
                            <view class="detail" @click="showMore()">
                                <view class="look">查看详情</view>
                                <image class="" src="https://eshopfile.zhiyousx.com/170960897814194743.png" style="width:24rpx;height:24rpx;" v-if="showDetail"></image>
                                <image class="" src="https://eshopfile.zhiyousx.com/170911466956745555.png" style="width:24rpx;height:24rpx;" v-else></image>
                            </view>
                        </view>
                        <view class="right">
                            <view class="ceng1" v-if="couponDetail.type==3">
                                <view class="money">0</view>
                                <view class="yang">元购</view>
                            </view>
                            <view class="ceng1" v-else>
                                <view class="yang">￥</view>
                                <view class="money">{{couponDetail.quota}}</view>
                            </view>
                            <view class="ceng2" v-if="couponDetail.type==1&&couponDetail.threshold>0">{{'满'+couponDetail.threshold+'可用'}}</view>
                            <view class="ceng2" v-if="couponDetail.type==2&&couponDetail.threshold==0">无门槛</view>
                            <view class="ceng2" v-if="couponDetail.type==3">
                                <block v-if="couponDetail.couponStates==2">{{'可抵扣'+couponDetail.deduction+''}}</block>
                                <block v-else>
                                    <block v-if="couponDetail.memberReceivedNum==0">{{'可抵扣'+couponDetail.deduction+(type==2?'人':'张')+''}}</block>
                                    <block v-else>
                                        <block v-if="couponDetail.showMemberDeductionNum==0">
                                            <block v-if="couponDetail.canUseNum>0">{{'可用'+couponDetail.canUseNum+'张'}}</block>
                                            <tempalte class="" :vueSlots="['default']" v-else>{{'可抵扣'+couponDetail.deduction+(type==2?'人':'张')}}</tempalte>
                                        </block>
                                        <block v-else>{{'已抵扣('+couponDetail.deductionUsedNum+'/'+couponDetail.deduction+')'}}</block>
                                    </block>
                                </block>
                            </view>
                            <view class="ceng3" v-if="couponDetail.couponStates==1" @click="receive(couponDetail.couponId)">立即领取</view>
                            <view class="ceng5" v-if="couponDetail.couponStates==2">抢光了</view>
                            <view class="ceng4" v-if="couponDetail.couponStates==3">已领取</view>
                        </view>
                        <image class="stamp" src="https://eshopfile.zhiyousx.com/170917825995622404.png" v-if="couponDetail.couponStates==3"></image>
                    </view>
                    <view :class="['introduce','',showDetail?'extend':'']">
                        <view class="">
                            <image class="" src="https://eshopfile.zhiyousx.com/170917719529144229.png" style="width:20rpx;height:20rpx;"></image>
                        </view>
                        <view class="">
                            <view class="wenzi">{{couponDetail.useExplain}}</view>
                            <view class="wenzi" v-if="couponDetail.useTimeSlot==2">{{'可预订【'+couponDetail.useTimeStart+'-'+couponDetail.useTimeEnd+'】的门票'}}</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="recommend">
            <u-divider bgColor="#F5F5F5" borderColor="#6d6d6d" class="" color="#000000" halfWidth="100" :vueSlots="['default']">此券值得买商品推荐</u-divider>
        </view>
        <view class="search-box">
            <u-search :actionStyle="{color:'#333333'}" actionText="搜索" :animation="true" bgColor="#FFFFFF" class="" :focus="true" maxlength="30" :placeholder="searchKey||'输入您想搜索的内容'" :value="keyWord" @search="doSearch()" @custom="doSearch()" @input="keyWord = $event"></u-search>
        </view>
        <view class="shop-list" v-if="recommendList[0]||goodsList[0]">
            <block v-if="type==2">
                <view class="shop-item" :key="index" v-for="(item, index) in $root.l0">
                    <view class="" style="display:flex;">
                        <view class="shop-left">
                            <image class="item-img" mode="aspectFill" :src="item.productPic"></image>
                        </view>
                        <view class="shop-right">
                            <view class="title">{{item.productName}}</view>
                            <view class="card" v-if="item.g0">
                                <scroll-view class="name" :scrollLeft="0" scrollWithAnimation="true" :scrollX="true" :throttle="false">
                                    <view class="service-item" :key="num" v-for="(li, num) in item.lineHighlightLabelList">
                                        <view class="conp-item">{{li}}</view>
                                    </view>
                                </scroll-view>
                            </view>
                            <view class="list">
                                <view class="its">
                                    <view class="ramark">{{ item.m0 }}</view>
                                </view>
                            </view>
                            <view class="footer">
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
            </block>
            <view class="goodsBoxs" v-else>
                <view class="goodsItem" :key="index" v-for="(item, index) in $root.l1">
                    <view class="itemImg">
                        <u-lazy-load borderRadius="8" class="" height="192" :image="item.defaultPicUrl" imgMode="aspectFill" :isEffect="false" style="width:200rpx;"></u-lazy-load>
                    </view>
                    <view class="itemLeft">
                        <view class="itemTitle multilineText2">{{item.itemTitle}}</view>
                        <view class="itemSubTitle singleLineText" v-if="item.itemSubTitle">{{item.itemSubTitle}}</view>
                        <view class="yh-box">
                            <text class="itemRuter" v-if="item.couponFullAmount>0">{{'满'+item.f6+'减'+item.f7}}</text>
                            <text class="itemRuter" v-if="item.couponFullAmount==0">{{'领券减'+item.f8}}</text>
                            <text class="itemRuter" v-if="item.cashBackAmount&&userInfo&&userInfo.isFenxiao">{{'返￥'+item.cashBackAmount}}</text>
                        </view>
                        <view class="numBox">
                            <view class="numBox-l">
                                <text class="num-pic" v-if="item.startPriceFlag===0">{{'￥'+item.marketPrice}}</text>
                                <text class="num-pic" v-if="item.startPriceFlag===1">{{'￥'+item.marketPrice+'起'}}</text>
                            </view>
                            <text class="num-ys">{{'已售'+item.f9}}</text>
                        </view>
                    </view>
                </view>
            </view>
            <view class="empty" v-if="loadMore=='nomore'&&num==0">
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
                o.e("components/empty/empty").then(function() {
                  return resolve(o("a427"))
                }.bind(null, o)).catch(o.oe)
              }
            },
            data: function() {
              return {
                couponDetail: {},
                showDetail: !1,
                current: 1,
                size: 5,
                recommendList: [],
                loadMore: "loading",
                id: "",
                type: 0,
                goodsList: [],
                title: "",
                imageUrl: "",
                num: 0,
                keyWord: ""
              }
            },
            onLoad: function(e) {
              if (e.scene) {
                var t;
                t = -1 != e.scene.indexOf("%2F") ? e.scene.split("%2F") : e.scene.split("/"), this.type = t[0], this.id = t[1], 2 == this.type ? this.getRecommend() : this.getShopList()
              }
            },
            filters: {
              timeFormat: function(e) {
                return e.split(" ")[0]
              },
              moneyFilter: function(e) {
                return e && (e + "").indexOf(".00") > -1 ? e.split(".")[0] : e
              }
            },
            onShow: function() {
              this.getProduct(), e.updateShareMenu({
                isPrivateMessage: !0
              })
            },
            onShareAppMessage: function() {
              var e = "/subPack/pages/groupOrder/collectCoupons?scene=".concat(this.type, "/").concat(this.id);
              return {
                title: this.couponDetail.shareDesc ? this.couponDetail.shareDesc : this.title,
                path: this.$util.setShareUrl(e),
                imageUrl: this.couponDetail.shareImage
              }
            },
            onReachBottom: function() {
              "loadmore" == this.loadMore && (this.current += 1, 2 == this.type ? this.getRecommend() : this.getShopList())
            },
            methods: {
              getDec: function(e) {
                var t, o = "",
                  n = "",
                  i = "",
                  a = "";
                return e.cityList && e.cityList.forEach((function(e, t) {
                  n += e + "/"
                })), n && (n = n.slice(0, -1) + " · "), t = ["跟团游", "一日游", "自由行", "研学游"][e.travelMode], e.journeyDay && (i = e.journeyDay + "天"), e.journeyNight && (a = e.journeyNight + "晚"), (i || a) && (o = " · " + i + a), n + t + o
              },
              goShop: function() {
                uni.navigateTo({
                  url: "/subPack/pages/groupOrder/availableProducts"
                })
              },
              goGoodsDetails: function(e) {
                uni.navigateTo({
                  url: "/subPage/pages/ticket_detail/ticket_detail?itemId=".concat(e)
                })
              },
              scrollBottom: function() {
                "loadmore" == this.loadMore && (this.current += 1, 2 == this.type ? this.getRecommend() : this.getShopList())
              },
              showMore: function() {
                this.showDetail = !this.showDetail
              },
              receive: function(e) {
                var t = this;
                return (0, r.default)(a.default.mark((function o() {
                  return a.default.wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        return o.prev = 0, uni.showLoading(), o.next = 4, t.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                          couponId: e
                        });
                      case 4:
                        1 == o.sent.code ? (t.getProduct(), t.$uni.showToast("已领取")) : t.$uni.showToast("已抢光"), o.next = 10;
                        break;
                      case 8:
                        o.prev = 8, o.t0 = o.catch(0);
                      case 10:
                        return o.prev = 10, setTimeout((function() {
                          uni.hideLoading()
                        }), 300), o.finish(10);
                      case 13:
                      case "end":
                        return o.stop()
                    }
                  }), o, null, [
                    [0, 8, 10, 13]
                  ])
                })))()
              },
              getShopList: function() {
                var e = this;
                return (0, r.default)(a.default.mark((function t() {
                  var o, n, i;
                  return a.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, e.loadMore = "loading", o = {
                          couponId: e.id,
                          current: e.current,
                          size: e.size,
                          complex: 0,
                          keyWord: e.keyWord
                        }, t.next = 5, e.$uniApi.dataRequestNoLoading("POST", "product/app/v1/item/couponCanUseItem", o);
                      case 5:
                        1 == (n = t.sent).code && (e.loadMore = n.data.records.length > 4 ? "loadmore" : "nomore", (i = e.goodsList).push.apply(i, (0, u.default)(n.data.records)), e.num = e.goodsList.length), t.next = 11;
                        break;
                      case 9:
                        t.prev = 9, t.t0 = t.catch(0);
                      case 11:
                      case "end":
                        return t.stop()
                    }
                  }), t, null, [
                    [0, 9]
                  ])
                })))()
              },
              getRecommend: function() {
                var e = this;
                return (0, r.default)(a.default.mark((function t() {
                  var o, n, i;
                  return a.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, e.loadMore = "loading", o = {
                          couponId: e.id,
                          current: e.current,
                          size: e.size,
                          productName: e.keyWord
                        }, t.next = 5, e.$uniApi.dataRequestNoLoading("POST", "product/app/v1/line/product/couponCanUseProduct", o);
                      case 5:
                        1 == (n = t.sent).code && (e.loadMore = n.data.records.length > 4 ? "loadmore" : "nomore", (i = e.recommendList).push.apply(i, (0, u.default)(n.data.records)), e.num = e.recommendList.length), t.next = 11;
                        break;
                      case 9:
                        t.prev = 9, t.t0 = t.catch(0);
                      case 11:
                        return t.prev = 11, t.finish(11);
                      case 13:
                      case "end":
                        return t.stop()
                    }
                  }), t, null, [
                    [0, 9, 11, 13]
                  ])
                })))()
              },
              available: function(e) {
                if (2 == this.type) {
                  var t = JSON.stringify(e);
                  uni.navigateTo({
                    url: "/subPack/pages/groupOrder/availableProducts?coupon=".concat(t)
                  })
                } else uni.navigateTo({
                  url: "/subPage/pages/discountsProductList/discountsProductList?couponId=".concat(e.couponId, "&threshold=").concat(e.threshold, "&quota=").concat(e.quota, "&type=", 0)
                })
              },
              goProduct: function(e) {
                uni.navigateTo({
                  url: "/subPack/pages/lineProductDetails/lineProductDetails?productId=".concat(e.productId)
                })
              },
              getProduct: function() {
                var t = this;
                return (0, r.default)(a.default.mark((function o() {
                  var n;
                  return a.default.wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        return o.next = 2, t.$uniApi.getRequestNoLoading("GET", "product/app/v1/coupon/detailForReceive/".concat(t.id));
                      case 2:
                        1 == (n = o.sent).code && (t.couponDetail = n.data, 3 == t.couponDetail.type ? t.title = "您有一张抵扣券待领取" : 2 == t.couponDetail.type ? t.title = "您有".concat(t.couponDetail.quota, "元无门槛优惠券待领取") : t.title = "您有满".concat(t.couponDetail.threshold, "减").concat(t.couponDetail.quota, "优惠券待领取"), 0 == t.couponDetail.shareFlag ? uni.hideShareMenu({
                          menus: ["shareAppMessage", "shareTimeline"]
                        }) : uni.showShareMenu({
                          withShareTicket: !0,
                          menus: ["shareAppMessage", "shareTimeline"]
                        }));
                      case 4:
                      case "end":
                        return o.stop()
                    }
                  }), o)
                })))()
              },
              doSearch: function() {
                this.current = 1, this.goodsList = [], this.recommendList = [], 2 == this.type ? this.getRecommend() : this.getShopList()
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.collectCoupons .coupon-list .empty{padding:30rpx}.collectCoupons .coupon-list .empty .coupon-item .box,.collectCoupons .coupon-list .empty .coupon-item,.collectCoupons .coupon-list .empty{display:-webkit-flex;display:flex;flex-direction:column}.collectCoupons .coupon-list .empty .coupon-item .box{margin-bottom:22rpx;position:relative;z-index:999}.collectCoupons .coupon-list .empty .coupon-item .box .box1{border-radius:20rpx;box-shadow:0rpx 4rpx 10rpx 0rpx rgba(0,0,0,.08);display:-webkit-flex;display:flex;position:relative;z-index:999}.collectCoupons .coupon-list .empty .coupon-item .box .stamp{height:100rpx;left:384rpx;position:absolute;top:20rpx;width:100rpx}.collectCoupons .coupon-list .empty .coupon-item .box .left{background:#fff;border:1rpx solid #d3d3d3;border-radius:20rpx 0rpx 0rpx 20rpx;border-right:none;display:-webkit-flex;display:flex;flex-direction:column;height:200rpx;padding:30rpx 0 25rpx 20rpx;width:466rpx}.collectCoupons .coupon-list .empty .coupon-item .box .left .name{-webkit-box-orient:vertical;-webkit-line-clamp:2;color:rgba(0,0,0,.8);display:-webkit-box;font-size:28rpx;font-weight:600;line-height:33rpx;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.collectCoupons .coupon-list .empty .coupon-item .box .left .date{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400;line-height:28rpx;margin-top:10rpx}.collectCoupons .coupon-list .empty .coupon-item .box .left .detail{bottom:20rpx;display:-webkit-flex;display:flex;position:absolute}.collectCoupons .coupon-list .empty .coupon-item .box .left .detail .look{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400;line-height:28rpx;margin-right:10rpx}.collectCoupons .coupon-list .empty .coupon-item .box .right{align-items:center;background:url('https://eshopfile.zhiyousx.com/170917118927429426.png')no-repeat;background-size:100% 100%;display:-webkit-flex;display:flex;flex-direction:column;height:200rpx;padding-top:16rpx;width:229rpx}.collectCoupons .coupon-list .empty .coupon-item .box .right .ceng1{display:-webkit-flex;display:flex;height:72rpx;line-height:72rpx}.collectCoupons .coupon-list .empty .coupon-item .box .right .ceng1 .yang{color:#ff5411;font-size:40rpx;font-weight:400}.collectCoupons .coupon-list .empty .coupon-item .box .right .ceng1 .money{color:#ff5411;font-size:50rpx;font-weight:400}.collectCoupons .coupon-list .empty .coupon-item .box .right .ceng2{color:rgba(0,0,0,.8);font-size:24rpx;font-weight:400;height:35rpx;line-height:35rpx;margin-bottom:10rpx}.collectCoupons .coupon-list .empty .coupon-item .box .right .ceng3{background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:40rpx 40rpx 40rpx 40rpx;color:#fff;font-size:24rpx;height:50rpx;line-height:50rpx;text-align:center;width:160rpx}.collectCoupons .coupon-list .empty .coupon-item .box .right .ceng5{background:linear-gradient(253deg,rgba(255,84,19,.4),rgba(252,74,155,.4));border-radius:40rpx 40rpx 40rpx 40rpx;color:rgba(222,62,62,.9);font-size:24rpx;height:50rpx;line-height:50rpx;text-align:center;width:160rpx}.collectCoupons .coupon-list .empty .coupon-item .box .right .ceng4{border:1rpx solid #ff5411;border-radius:40rpx 40rpx 40rpx 40rpx;color:#ff5411;font-size:24rpx;height:50rpx;line-height:50rpx;text-align:center;width:160rpx}.collectCoupons .coupon-list .empty .coupon-item .box .introduce{background:#f9f9f9;border-radius:0rpx 0rpx 20rpx 20rpx;box-shadow:0rpx 4rpx 10rpx 0rpx rgba(0,0,0,.08);color:#868686;display:-webkit-flex;display:flex;font-size:22rpx;height:0;line-height:34rpx;margin-top:-10rpx;overflow:hidden;padding:0rpx 24rpx;transition:.3s;width:691rpx}.collectCoupons .coupon-list .empty .coupon-item .box .introduce.extend{height:auto;padding:24rpx}.collectCoupons .coupon-list .empty .coupon-item .box .introduce .wenzi{color:rgba(0,0,0,.3);font-size:24rpx;font-weight:400}.collectCoupons .coupon-list .recommend{background:transparent;display:-webkit-flex;display:flex;justify-content:center}.collectCoupons .coupon-list .search-box{padding:0 30rpx}.collectCoupons .coupon-list .shop-list{border-radius:20rpx;padding:20rpx}.collectCoupons .coupon-list .shop-list .shop-item{background:#fff;border-radius:20rpx 20rpx 20rpx 20rpx;display:-webkit-flex;display:flex;margin:10rpx 0;padding:10rpx 0 10rpx 10rpx;width:710rpx}.collectCoupons .coupon-list .shop-list .shop-item .shop-left{display:-webkit-flex;display:flex;flex-wrap:wrap;justify-content:space-around}.collectCoupons .coupon-list .shop-list .shop-item .shop-left .item-img{border-radius:10rpx 30rpx 20rpx 20rpx;box-shadow:6rpx 0rpx 0rpx 0rpx rgba(0,0,0,.15),12rpx 0rpx 0rpx 0rpx rgba(0,0,0,.05);height:auto;width:200rpx}.collectCoupons .coupon-list .shop-list .shop-item .shop-right{padding:20rpx 0 0 30rpx;width:489rpx}.collectCoupons .coupon-list .shop-list .shop-item .shop-right .title{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:rgba(0,0,0,.8);display:-webkit-box;font-size:28rpx;font-weight:600;line-height:40rpx;overflow:hidden}.collectCoupons .coupon-list .shop-list .shop-item .shop-right .card{margin:16rpx 0}.collectCoupons .coupon-list .shop-list .shop-item .shop-right .card .name{color:rgba(0,0,0,.8);font-size:26rpx;margin-right:10rpx;white-space:nowrap;width:448rpx}.collectCoupons .coupon-list .shop-list .shop-item .shop-right .card .name .service-item{display:inline-block}.collectCoupons .coupon-list .shop-list .shop-item .shop-right .card .name .service-item .remark-icon{height:26rpx;margin-left:10rpx;vertical-align:middle;width:26rpx}.collectCoupons .coupon-list .shop-list .shop-item .shop-right .card .name .service-item .conp-item{border:1rpx solid #8d7c51;border-radius:20rpx 20rpx 20rpx 20rpx;color:#8d7c51;font-size:22rpx;font-weight:400;height:32rpx;margin:0 10rpx;padding:0 10rpx}.collectCoupons .coupon-list .shop-list .shop-item .shop-right .list{margin-bottom:15rpx}.collectCoupons .coupon-list .shop-list .shop-item .shop-right .list .its .ramark{color:rgba(0,0,0,.5);display:-webkit-flex;display:flex;font-size:24rpx;margin-top:14rpx}.collectCoupons .coupon-list .shop-list .shop-item .shop-right .list .its .ramark ._span{align-items:center;display:-webkit-flex;display:flex}.collectCoupons .coupon-list .shop-list .shop-item .shop-right .list .its .ramark .dian{font-size:50rpx;padding:6rpx 2rpx 0}.collectCoupons .coupon-list .shop-list .shop-item .shop-right .footer{display:-webkit-flex;display:flex;justify-content:flex-end}.collectCoupons .coupon-list .shop-list .shop-item .shop-right .footer .item-btn{background:linear-gradient(107deg,#ffb2d5,#ffc1aa);border-radius:30px;color:#fff;font-size:26rpx;height:50rpx;line-height:50rpx;text-align:center;width:120rpx}.collectCoupons .coupon-list .shop-list .shop-item .shop-right .footer .quan{background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:10rpx 2rpx 10rpx 2rpx;color:#fff;font-size:24rpx;height:35rpx;margin-right:10rpx;text-align:center;width:40rpx}.collectCoupons .coupon-list .shop-list .shop-item .shop-right .footer .yang{color:#ff5411;font-size:24rpx;font-weight:400}.collectCoupons .coupon-list .shop-list .shop-item .shop-right .footer .num{color:#ff5411;font-size:36rpx;font-weight:400;height:37rpx;line-height:19px}.collectCoupons .coupon-list .shop-list .shop-item .shop-right .footer .qi{color:#999;font-size:24rpx;font-weight:400;height:30rpx;line-height:37rpx;margin-left:10rpx}.collectCoupons .coupon-list .shop-list .goodsBoxs{background:#fff;padding:20rpx 40rpx}.collectCoupons .coupon-list .shop-list .goodsBoxs .goodsItem{align-items:center;background-color:#fff;border-radius:8rpx;display:-webkit-flex;display:flex;height:250rpx;width:100%}.collectCoupons .coupon-list .shop-list .goodsBoxs .goodsItem .itemImg{display:-webkit-flex;display:flex;height:auto;width:200rpx}.collectCoupons .coupon-list .shop-list .goodsBoxs .goodsItem .itemLeft{display:-webkit-flex;display:flex;flex-direction:column;height:100%;justify-content:space-between;padding:30rpx 0rpx 30rpx 20rpx;width:474rpx}.collectCoupons .coupon-list .shop-list .goodsBoxs .goodsItem .itemLeft .itemTitle{color:#1c1c1d;font-size:26rpx}.collectCoupons .coupon-list .shop-list .goodsBoxs .goodsItem .itemLeft .itemSubTitle{color:#909399;font-size:22rpx;width:100%}.collectCoupons .coupon-list .shop-list .goodsBoxs .goodsItem .itemLeft .yh-box{display:-webkit-flex;display:flex;padding:15rpx 0}.collectCoupons .coupon-list .shop-list .goodsBoxs .goodsItem .itemLeft .yh-box .itemRuter{background:#ffeeea;border-radius:6rpx;color:#ff531d;font-size:20rpx;height:30rpx;line-height:30rpx;padding:0 8rpx}.collectCoupons .coupon-list .shop-list .goodsBoxs .goodsItem .itemLeft .yh-box .itemRuter:first-child{margin-right:10rpx}.collectCoupons .coupon-list .shop-list .goodsBoxs .goodsItem .itemLeft .numBox{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.collectCoupons .coupon-list .shop-list .goodsBoxs .goodsItem .itemLeft .numBox .numBox-l{align-items:center;display:-webkit-flex;display:flex;justify-content:flex-start}.collectCoupons .coupon-list .shop-list .goodsBoxs .goodsItem .itemLeft .numBox .numBox-l .num-pic{color:#ff4643;font-size:30rpx;padding-right:16rpx}.collectCoupons .coupon-list .shop-list .goodsBoxs .goodsItem .itemLeft .numBox .numBox-l .itemRuter{background:#ffeeea;border-radius:6rpx;color:#ff531d;font-size:20rpx;height:30rpx;line-height:30rpx;padding:0 10rpx}.collectCoupons .coupon-list .shop-list .goodsBoxs .goodsItem .itemLeft .numBox .num-ys{color:#878787;font-size:22rpx}
</style>
