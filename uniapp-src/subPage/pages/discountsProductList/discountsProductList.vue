<template>
<view class="">
    <uni-navbar bgColor="#FFFFFF" class="" :shadow="false" type="fixed" :vueSlots="['default']">
        <view class="searchBox" @click="goSearch($event)">
            <icon class="" color="#c5c5c5" size="16" type="search"></icon>
            <input class="searchInput" :disabled="true" placeholder="搜索商品" placeholderStyle="color:#999999;font-weight:400" type="text" :value="searchText" @input="searchText = $event"></input>
        </view>
    </uni-navbar>
    <view class="nav" :style="'top:'+navHeight+'px'+';'">
        <view class="sortNav">
            <view :class="['navItem','',index===sortIdx?'navItemActive':'']" :key="index" v-for="(item, index) in $root.l0">{{ item }}<view :class="['sanjiaoxing1','',item.g1?'sanjiaoxing1y':'']" v-if="index===$root.g0-1"></view>
                <view :class="['sanjiaoxing2','',item.g3?'sanjiaoxing2y':'']" v-if="index===$root.g2-1"></view>
            </view>
        </view>
        <view class="navIcon">
            <image class="" src="../../static/images/Switch_i@2x.png" v-if="listTypeIcon==0" @click="listType(0)"></image>
            <image class="" src="../../static/images/Switch_i2@2x.png" v-else @click="listType(1)"></image>
        </view>
    </view>
    <view class="adTitle" v-if="type==3">
        <text class="" style="margin-left:40rpx;">限时促销：以下商品可使用0元购优惠券</text>
    </view>
    <block v-if="type==1||type==2">
        <view class="adTitle" v-if="threshold>0">
            <text class="" style="margin-left:40rpx;">{{'限时促销：以下商品可使用满'+threshold+'减'+quota+'优惠券'}}</text>
        </view>
        <view class="adTitle" v-if="threshold==0">
            <text class="" style="margin-left:40rpx;">{{'限时促销：以下商品可使用'+quota+'元无门槛优惠券'}}</text>
        </view>
    </block>
    <view class="goodsBox" v-if="listTypeIcon===0">
        <view class="goodsItem" :key="index" v-for="(item, index) in $root.l1">
            <u-lazy-load borderRadius="8" class="" height="306" :image="item.defaultPicUrl" imgMode="aspectFill" :isEffect="false"></u-lazy-load>
            <view class="goodsInfo">
                <view class="itemTitle multilineText2">{{item.itemTitle}}</view>
                <view class="yh-box">
                    <image class="seckillIcon" src="https://eshopfile.zhiyousx.com/2021091318044528261.png" v-if="item.seckillActivity==0"></image>
                    <text class="itemRuter" v-if="item.cashBackAmount&&item.cashBackAmount!=0&&userInfo&&userInfo.isFenxiao">{{'赚￥'+item.cashBackAmount}}</text>
                </view>
                <view class="numBox">
                    <text class="num-pic" v-if="item.startPriceFlag===0">{{'￥'+item.marketPrice}}</text>
                    <text class="num-pic" v-if="item.startPriceFlag===1">{{'￥'+item.marketPrice+'起'}}</text>
                </view>
                <view class="numBox">
                    <text class="num-ys">{{item.f0+'人付款'}}</text>
                </view>
            </view>
        </view>
    </view>
    <view class="goodsBoxs" v-else>
        <view class="goodsItem" :key="index" v-for="(item, index) in $root.l2">
            <view class="itemImg">
                <u-lazy-load borderRadius="8" class="" height="192" :image="item.defaultPicUrl" imgMode="scaleToFill" :isEffect="false" style="width:200rpx;"></u-lazy-load>
            </view>
            <view class="itemLeft">
                <view class="itemTitle multilineText2">{{item.itemTitle}}</view>
                <view class="itemSubTitle singleLineText" v-if="item.itemSubTitle">{{item.itemSubTitle}}</view>
                <view class="yh-box">
                    <text class="itemRuter" v-if="item.couponFullAmount>0">{{'满'+item.f1+'减'+item.f2}}</text>
                    <text class="itemRuter" v-if="item.couponFullAmount==0">{{'领券减'+item.f3}}</text>
                    <text class="itemRuter" v-if="item.cashBackAmount&&userInfo&&userInfo.isFenxiao">{{'返￥'+item.cashBackAmount}}</text>
                </view>
                <view class="numBox">
                    <view class="numBox-l">
                        <text class="num-pic" v-if="item.startPriceFlag===0">{{'￥'+item.marketPrice}}</text>
                        <text class="num-pic" v-if="item.startPriceFlag===1">{{'￥'+item.marketPrice+'起'}}</text>
                    </view>
                    <text class="num-ys">{{item.f4+'人付款'}}</text>
                </view>
            </view>
        </view>
    </view>
    <view class="empty" v-if="$root.g4">
        <empty-state class="" imgUrl="/static/captured/51d17a011d27445c.png" text="暂无数据"></empty-state>
    </view>
    <view class="loadMore">
        <u-loadmore bgColor="#f7f7f7" class="" color="#ccc" iconColor="#ccc" :loadText="$root.a0" :status="loadMore"></u-loadmore>
    </view>
</view>

</template>

<script>
import EmptyState from "@/components/empty/empty.vue";

// Reconstructed Vue Component
const t = uni;
export default {
  components: {
    EmptyState
  },
          data: function() {
            return {
              listTypeIcon: 0,
              page: 1,
              loadMore: "loading",
              searchText: "",
              sortList: ["综合", "销量", "价格"],
              sortIdx: 0,
              complexType: 1,
              isHot: 0,
              catId: "",
              sellerId: "",
              goodsList: [],
              couponId: "",
              quota: "",
              threshold: "",
              searchHeight: 0,
              navHeight: 0,
              type: 1,
              size: 8
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          onLoad: function(o) {
            var e = this;
            o.keyword && (this.searchText = o.keyword), o.isHot && (this.isHot = o.isHot), o.catId && (this.catId = o.catId), o.couponId && (this.couponId = o.couponId), o.quota && (this.quota = o.quota), o.threshold && (this.threshold = o.threshold), o.type && (this.type = o.type), this.pageLoad();
            var n = uni.getStorageSync("NavH");
            uni.getSystemInfo({
              success: function(t) {
                e.unit = 750 / t.windowWidth, e.navHeight = parseInt(n.top + 68 / e.unit)
              }
            })
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          filters: {
            toFixed2: function(t) {
              return t ? Number(t).toFixed(2) : "0.00"
            },
            moneyFilter: function(t) {
              return t && (t + "").indexOf(".00") > -1 ? t.split(".")[0] : t
            }
          },
          methods: {
            pageLoad: function() {
              var o = this,
                e = {
                  current: this.page,
                  keyWord: this.searchText,
                  complex: this.sortIdx,
                  complexType: this.complexType,
                  catId: this.catId,
                  sellerId: this.sellerId,
                  couponId: this.couponId,
                  size: this.size
                };
              1 == this.isHot && (e.isHot = this.isHot), this.sellerId && (e.sellerId = this.sellerId), this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/item/couponCanUseItem", e).then((function(e) {
                if (uni.stopPullDownRefresh(), 1 === e.code) {
                  var n = e.data.records;
                  e.data.total > 0 ? (1 === e.data.current ? o.goodsList = n : o.goodsList = o.goodsList.concat(n), e.data.current < e.data.pages ? (o.page = o.page + 1, o.loadMore = "loadmore") : o.loadMore = "nomore") : (o.goodsList = [], o.loadMore = "nomore")
                }
              })).catch((function(o) {
                uni.stopPullDownRefresh()
              }))
            },
            listType: function(t) {
              this.listTypeIcon = 0 === t ? 1 : 0
            },
            sortTab: function(t) {
              if (2 === t) 1 === this.complexType ? this.complexType = 0 : this.complexType = 1;
              else if (this.complexType = 0, this.sortIdx === t) return;
              this.sortIdx = t, this.page = 1, this.goodsList = [], this.pageLoad()
            },
            goGoodsDetails: function(o) {
              var e = o.itemId;
              2 != o.scenicType ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + e
              }) : uni.navigateTo({
                url: "/artShow/pages/ticketFillOrder/ticketFillOrder?ticketId=".concat(e)
              })
            },
            goSearch: function() {
              this.searchText ? this.$util.goBack() : this.$navigateTo({
                url: "/subPage/pages/searchOld/searchOld?couponId=" + this.couponId + "&threshold=" + this.threshold + "&quota=" + this.quota
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.searchBox{align-items:center;background-color:#f3f3f3;border-radius:31rpx;display:-webkit-flex;display:flex;height:62rpx;margin-right:130rpx;padding:0 30rpx;width:480rpx}.searchBox .searchInput{background-color:#f3f3f3;flex:1;font-size:26rpx;margin-left:15rpx}.ali-box{left:60rpx;position:fixed;z-index:199}.nav{background-color:#fff;position:-webkit-sticky;position:sticky;z-index:200}.nav .sortNav,.nav{align-items:center;display:-webkit-flex;display:flex}.nav .sortNav{flex:9;height:72rpx;justify-content:space-around;padding:0 30rpx}.nav .sortNav .navItem{padding-bottom:8rpx;position:relative}.nav .sortNav .navItem .sanjiaoxing1{border-bottom:8rpx solid #999;border-left:8rpx solid transparent;border-right:8rpx solid transparent;height:0;position:absolute;right:-20rpx;top:10rpx;width:0}.nav .sortNav .navItem .sanjiaoxing1y{border-bottom:8rpx solid #ff4643}.nav .sortNav .navItem .sanjiaoxing2{border-left:8rpx solid transparent;border-right:8rpx solid transparent;border-top:8rpx solid #999;height:0;position:absolute;right:-20rpx;top:22rpx;width:0}.nav .sortNav .navItem .sanjiaoxing2y{border-top:8rpx solid #ff4643}.nav .sortNav .navItemActive{background:url('https://eshopfile.zhiyousx.com/170065288322605070.png')bottom no-repeat;background-size:44rpx 20rpx;border-radius:10rpx;font-weight:700}.nav .navIcon{height:34rpx;margin-right:30rpx;width:34rpx}.nav .navIcon image{height:100%;width:100%}.adTitle{background:#fff1ed;line-height:60rpx;width:100%}.adTitle>text{color:#ff4643;font-size:22rpx;font-weight:400}.goodsBox{background:#fff;display:-webkit-flex;display:flex;flex-wrap:wrap;padding:20rpx 40rpx}.goodsBox .goodsItem{background-color:#fff;border-radius:8rpx;display:-webkit-flex;display:flex;flex-direction:column;margin-bottom:20rpx;margin-left:4%;width:48%}.goodsBox .goodsItem .goodsInfo{display:-webkit-flex;display:flex;flex:1;flex-direction:column;justify-content:space-between;padding:10rpx 20rpx}.goodsBox .goodsItem .goodsInfo .itemTitle{color:#1c1c1d;font-size:26rpx}.goodsBox .goodsItem .goodsInfo .itemSubTitle{color:#909399;font-size:22rpx;padding-top:10rpx}.goodsBox .goodsItem .goodsInfo .yh-box{align-items:center;display:-webkit-flex;display:flex;padding:15rpx 0 24rpx}.goodsBox .goodsItem .goodsInfo .yh-box .seckillIcon{height:36rpx;margin-right:10rpx;width:98rpx}.goodsBox .goodsItem .goodsInfo .yh-box .itemRuter{background:#ffeeea;border-radius:6rpx;color:#ff531d;font-size:20rpx;height:30rpx;line-height:30rpx;padding:0 8rpx}.goodsBox .goodsItem .goodsInfo .yh-box .itemRuter:first-child{margin-right:10rpx}.goodsBox .goodsItem .goodsInfo .numBox{align-items:center;display:-webkit-flex;display:flex;justify-content:flex-start}.goodsBox .goodsItem .goodsInfo .numBox .num-pic{color:#ff4643;font-size:30rpx;line-height:1;padding-right:16rpx}.goodsBox .goodsItem .goodsInfo .numBox .num-ys{color:#878787;font-size:22rpx;padding-top:10rpx}.goodsBox .goodsItem:nth-child(odd){margin-left:0}.goodsBoxs{background:#fff;padding:20rpx 40rpx}.goodsBoxs .goodsItem{align-items:center;background-color:#fff;border-radius:8rpx;display:-webkit-flex;display:flex;height:250rpx;width:100%}.goodsBoxs .goodsItem .itemImg{display:-webkit-flex;display:flex;height:auto;width:216rpx}.goodsBoxs .goodsItem .itemLeft{display:-webkit-flex;display:flex;flex-direction:column;height:100%;justify-content:space-between;padding:30rpx 0rpx 30rpx 20rpx;width:474rpx}.goodsBoxs .goodsItem .itemLeft .itemTitle{color:#1c1c1d;font-size:26rpx}.goodsBoxs .goodsItem .itemLeft .itemSubTitle{color:#909399;font-size:22rpx;width:100%}.goodsBoxs .goodsItem .itemLeft .yh-box{display:-webkit-flex;display:flex;padding:15rpx 0}.goodsBoxs .goodsItem .itemLeft .yh-box .itemRuter{background:#ffeeea;border-radius:6rpx;color:#ff531d;font-size:20rpx;height:30rpx;line-height:30rpx;padding:0 8rpx}.goodsBoxs .goodsItem .itemLeft .yh-box .itemRuter:first-child{margin-right:10rpx}.goodsBoxs .goodsItem .itemLeft .numBox{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.goodsBoxs .goodsItem .itemLeft .numBox .numBox-l{align-items:center;display:-webkit-flex;display:flex;justify-content:flex-start}.goodsBoxs .goodsItem .itemLeft .numBox .numBox-l .num-pic{color:#ff4643;font-size:30rpx;padding-right:16rpx}.goodsBoxs .goodsItem .itemLeft .numBox .numBox-l .itemRuter{background:#ffeeea;border-radius:6rpx;color:#ff531d;font-size:20rpx;height:30rpx;line-height:30rpx;padding:0 10rpx}.goodsBoxs .goodsItem .itemLeft .numBox .num-ys{color:#878787;font-size:22rpx}
</style>
