<template>
<view class="box">
    <view class="box-top">
        <view class="top-title _p">{{$root.g0+'家旅行社提供同款线路'}}</view>
        <scroll-view class="spot-box" :scrollLeft="0" scrollWithAnimation="true" :scrollX="true" :throttle="false">
            <view :class="['spot-item','',activeTravel==index?'active':'']" :key="index" v-for="(item, index) in travelList">
                <view class="jiantou"></view>
                <view class="spot-info">
                    <image class="spot-img" mode="aspectFill" :src="item.pic"></image>
                    <view class="spot-content">
                        <view class="name singleLineText">{{item.travelAgencyName}}</view>
                        <view class="text">{{item.num+'个可选套餐'}}</view>
                    </view>
                    <view class="" style="width:50rpx;display:flex;justify-content:flex-end;">
                        <uni-icons class="" color="#4E5969" size="12" style="padding-top:5rpx;" type="arrowright"></uni-icons>
                    </view>
                </view>
            </view>
        </scroll-view>
        <scroll-view class="lable-box" :scrollLeft="0" scrollWithAnimation="true" :scrollX="true" :throttle="false">
            <view :class="['lable-item','',activeType==index?'active':'']" :key="index" v-for="(item, index) in typeList">{{item.name}}</view>
        </scroll-view>
    </view>
    <view class="box-content">
        <scroll-view class="goods-box" scrollY="true" @scrolltolower="scrollBottom()">
            <view :class="['goods-item','',!item.stockStatus||item.sellOut?'disable':'']" :key="index" v-for="(item, index) in $root.l0">
                <view class="img-box">
                    <image class="goods-img" mode="aspectFill" :src="item.productPic"></image>
                </view>
                <view class="goods-info">
                    <view class="name multilineText2">{{item.productName}}</view>
                    <scroll-view class="tips" scrollX="true" v-if="item.lineHighlightLabelList">
                        <view class="it" :key="num" v-for="(li, num) in item.lineHighlightLabelList">{{li}}</view>
                    </scroll-view>
                    <view :class="['ramark','',!item.lineHighlightLabelList?'mp':'']">{{ item.m0 }}</view>
                    <view class="price" v-if="!item.stockStatus||item.sellOut">
                        <view class="item-btn">售罄</view>
                    </view>
                    <view class="price" v-else>
                        <label class="icon _span">￥</label>{{''+item.price}}<label class="_span" v-if="item.startPriceFlag">起</label>
                    </view>
                </view>
            </view>
            <view class="empty" v-if="$root.g1">
                <empty-state class="" imgUrl="https://eshopfile.zhiyousx.com/noOrder@2x.png" text="暂无产品"></empty-state>
            </view>
            <view class="loadMore" v-else>
                <u-loadmore bgColor="#f7f7f7" class="" color="#ccc" iconColor="#ccc" :status="loadMore"></u-loadmore>
            </view>
        </scroll-view>
    </view>
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
              lineId: "",
              travelList: [],
              activeTravel: 0,
              typeList: [{
                name: "全部",
                type: 0
              }, {
                name: "跟团游",
                type: 1
              }, {
                name: "一日游",
                type: 2
              }, {
                name: "自由行",
                type: 3
              }, {
                name: "研学游",
                type: 4
              }],
              activeType: 0,
              current: 1,
              goodList: [],
              isRefresh: !1,
              travelMode: 0
            }
          },
          onReady: function() {},
          onLoad: function(t) {
            this.lineId = t.lineId, this.getTravel()
          },
          onUnload: function() {},
          onShow: function() {},
          methods: {
            getDec: function(t) {
              var e, n = "",
                o = "",
                i = "",
                a = "";
              return t.cityList && t.cityList.forEach((function(t, e) {
                o += t + "/"
              })), o && (o = o.slice(0, -1) + " · "), e = ["跟团游", "一日游", "自由行", "研学游"][t.travelMode], t.journeyDay && (i = t.journeyDay + "天"), t.journeyNight && (a = t.journeyNight + "晚"), (i || a) && (n = " · " + i + a), o + e + n
            },
            scrollBottom: function() {
              "loadmore" == this.loadMore && (this.current += 1, this.getGoods(this.travelMode))
            },
            getTravel: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/relation/travel/" + this.lineId).then((function(e) {
                1 === e.code && (t.travelList = e.data, t.filterType(0), t.getGoods())
              }))
            },
            getGoods: function(t) {
              var e = this;
              this.loadMore = "loading";
              var n = {
                current: this.current,
                size: 10,
                lineId: this.lineId,
                travelAgencyId: this.travelList[this.activeTravel].travelAgencyId
              };
              t && (n.travelMode = t - 1), this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/relation/product/", n).then((function(t) {
                var n;
                1 === t.code && (e.loadMore = t.data.records.length > 9 ? "loadmore" : "nomore", (n = e.goodList).push.apply(n, (0, i.default)(t.data.records)))
              }))
            },
            filterType: function(t) {
              var e = this;
              this.typeList = [{
                name: "跟团游",
                type: 1
              }, {
                name: "一日游",
                type: 2
              }, {
                name: "自由行",
                type: 3
              }, {
                name: "研学游",
                type: 4
              }], this.typeList = this.typeList.filter((function(n) {
                return e.travelList[t].travelModeList.includes(n.type - 1 + "")
              })), this.typeList.unshift({
                name: "全部",
                type: 0
              })
            },
            changeTravel: function(t) {
              this.activeTravel = t, this.current = 1, this.goodList = [], this.filterType(t), this.getGoods(0)
            },
            goTrave: function(t) {
              this.$navigateTo({
                url: "/subPack/pages/travelAgency/travelAgency?travelAgencyId=" + t
              })
            },
            changeType: function(t, e) {
              this.activeType = t, this.current = 1, this.goodList = [], this.travelMode = e, this.getGoods(e)
            },
            cityName: function(t) {
              var e = "";
              return t.forEach((function(t, n) {
                e += t + "/"
              })), e.slice(0, -1)
            },
            goGoodInfo: function(t, e) {
              var n = "/subPack/pages/lineProductDetails/lineProductDetails?productId=" + t;
              this.$navigateTo({
                url: n
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.box .box-top{background:linear-gradient(180deg,#fff,hsla(0,0%,100%,0));padding-left:30rpx;padding-top:40rpx;width:100%}.box .box-top .top-title{color:rgba(0,0,0,.8);font-size:32rpx}.box .box-top .spot-box{height:176rpx;margin-top:20rpx;white-space:nowrap;width:100%}.box .box-top .spot-box .spot-item{background:linear-gradient(162deg,#fbf3e3,#fff);border-radius:20rpx;box-shadow:0rpx 4rpx 20rpx 0rpx rgba(0,0,0,.1);display:inline-block;height:160rpx;margin-right:20rpx;padding:30rpx 20rpx;position:relative;width:560rpx}.box .box-top .spot-box .spot-item .jiantou{background:#ffe4db;bottom:-9rpx;display:none;height:18rpx;left:50rpx;position:absolute;transform:rotate(-45deg);width:18rpx}.box .box-top .spot-box .spot-item .spot-info{display:-webkit-flex;display:flex}.box .box-top .spot-box .spot-item .spot-info .spot-img{border-radius:10rpx;height:90rpx;width:90rpx}.box .box-top .spot-box .spot-item .spot-info .spot-content{padding-left:14rpx;width:400rpx}.box .box-top .spot-box .spot-item .spot-info .spot-content .name{color:rgba(0,0,0,.8);font-size:30rpx}.box .box-top .spot-box .spot-item .spot-info .spot-content .text{color:rgba(0,0,0,.6);font-size:24rpx;margin-top:20rpx}.box .box-top .spot-box .spot-item .spot-info .more_icon{height:48rpx;width:48rpx}.box .box-top .spot-box .active{background:linear-gradient(162deg,#ffcec2,#fff6f3)}.box .box-top .spot-box .active .jiantou{display:block}.box .box-top .lable-box{margin-top:40rpx;white-space:nowrap;width:100%}.box .box-top .lable-box .lable-item{background:rgba(0,0,0,.05);border-radius:30rpx;color:gba(0,0,0,.8);display:inline-block;font-size:26rpx;margin-right:10rpx;padding:12rpx 30rpx}.box .box-top .lable-box .active{background:linear-gradient(107deg,#fc4a9b,#ff5413);color:#fff;font-weight:700}.box .box-content{margin-top:30rpx;padding:0 20rpx}.box .box-content .goods-box{height:1055rpx;overflow-y:auto;width:100%}.box .box-content .goods-box .goods-item{background:#fff;border-radius:20rpx;display:-webkit-flex;display:flex;margin-bottom:10rpx;padding:10rpx;width:100%}.box .box-content .goods-box .goods-item .img-box{border-radius:10rpx 30rpx 20rpx 20rpx;box-shadow:6rpx 0rpx 0rpx 0rpx rgba(0,0,0,.15),12rpx 0rpx 0rpx 0rpx rgba(0,0,0,.05);width:200rpx}.box .box-content .goods-box .goods-item .img-box .goods-img{border-radius:10rpx 30rpx 20rpx 20rpx;height:100%;width:100%}.box .box-content .goods-box .goods-item .goods-info{margin-left:30rpx;padding-right:20rpx;width:460rpx}.box .box-content .goods-box .goods-item .goods-info .name{color:rgba(0,0,0,.8);font-size:28rpx;font-weight:700;margin-top:10rpx}.box .box-content .goods-box .goods-item .goods-info .tips{height:38rpx;margin-top:10rpx;white-space:nowrap;width:100%}.box .box-content .goods-box .goods-item .goods-info .tips .it{border:1rpx solid #8d7c51;border-radius:20rpx;color:#8d7c51;display:inline-block;font-size:22rpx;height:32rpx;line-height:30rpx;margin-right:10rpx;padding:0 14rpx}.box .box-content .goods-box .goods-item .goods-info .ramark{color:rgba(0,0,0,.5);display:-webkit-flex;display:flex;font-size:24rpx;margin-top:14rpx}.box .box-content .goods-box .goods-item .goods-info .ramark ._span{align-items:center;display:-webkit-flex;display:flex}.box .box-content .goods-box .goods-item .goods-info .ramark .dian{font-size:50rpx;padding:6rpx 2rpx 0}.box .box-content .goods-box .goods-item .goods-info .mp{margin-bottom:38rpx}.box .box-content .goods-box .goods-item .goods-info .price{align-items:center;color:#ff5411;display:-webkit-flex;display:flex;font-size:36rpx;font-weight:700;height:34rpx;justify-content:flex-end;line-height:34rpx;margin:14rpx 0;text-align:right;width:100%}.box .box-content .goods-box .goods-item .goods-info .price .item-btn{background:linear-gradient(107deg,#ffb2d5,#ffc1aa);border-radius:30px;color:#fff;font-size:26rpx;height:50rpx;line-height:50rpx;text-align:center;width:120rpx}.box .box-content .goods-box .goods-item .goods-info .price ._span{color:#999;font-size:24rpx;margin:0 5rpx}.box .box-content .goods-box .goods-item .goods-info .price .icon{color:#ff5411;font-size:24rpx}.box .box-content .goods-box .disable{background:#eee}
</style>
