<template>
<view class="u-skeleton">
    <uni-navbar bgColor="#F8F8F8" class="" :home="true" type="fixed" :vueSlots="['right']">
        <view class="searchBox" slot="right" @click="goSearch($event)">
            <icon class="" color="#c5c5c5" size="16" type="search"></icon>
            <input class="searchInput" :disabled="true" placeholder="搜索商品" placeholderStyle="color:#999999;font-weight:400" type="text" :value="searchText" @input="searchText = $event" @blur="$forceUpdate()"></input>
        </view>
    </uni-navbar>
    <view class="storeInfo">
        <view class="storeLogo u-skeleton-circle">
            <u-lazy-load borderRadius="10" class="" height="84" :image="sellerInfo.logoPicUrl?sellerInfo.logoPicUrl:'https://eshopfile.zhiyousx.com/2023102620364973049.png'" imgMode="aspectFill"></u-lazy-load>
        </view>
        <text class="u-skeleton-rect">{{sellerInfo.sellerName}}</text>
    </view>
    <view class="sortNav u-skeleton-rect">
        <view :class="['navItem','',index===sortIdx?'navItemActive':'']" :key="index" v-for="(item, index) in $root.l0">{{ item }}<view :class="['sanjiaoxing1','',item.g1?'sanjiaoxing1y':'']" v-if="index===$root.g0-1"></view>
            <view :class="['sanjiaoxing2','',item.g3?'sanjiaoxing2y':'']" v-if="index===$root.g2-1"></view>
        </view>
    </view>
    <view class="goodsBox">
        <view class="goodsItem" :key="index" v-for="(item, index) in $root.l1">
            <u-lazy-load borderRadius="8" class="" height="306" :image="item.defaultPicUrl" imgMode="aspectFill" :isEffect="false"></u-lazy-load>
            <view class="itemTitle multilineText2">{{item.itemTitle}}</view>
            <view class="numBox">
                <text class="">{{'￥'+item.minPrice+(item.priceType===1?'起':'')}}</text>
                <text class="">{{item.f0+'人付款'}}</text>
            </view>
        </view>
        <view class="empty" v-if="$root.g4">
            <u-empty class="" marginTop="100" text=" "></u-empty>
        </view>
        <view class="loadMore">
            <u-loadmore bgColor="#f7f7f7" class="" color="#ccc" iconColor="#ccc" :status="loadMore"></u-loadmore>
        </view>
    </view>
    <u-skeleton :animation="true" class="" :loading="loadingStatus"></u-skeleton>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              loadingStatus: !0,
              searchText: "",
              sellerId: "",
              page: 1,
              loadMore: "loading",
              sortList: ["综合", "销量", "价格"],
              sortIdx: 0,
              complexType: 0,
              goodsList: [],
              sellerInfo: {},
              shareMemberId: ""
            }
          },
          onLoad: function(e) {
            e.scene ? this.getScene(e.scene) : (e.keyword && (this.searchText = e.keyword), e.sellerId && (this.sellerId = e.sellerId), e.shareMemberId && (this.shareMemberId = e.shareMemberId), this.getSeller(), this.pageLoad())
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          filters: {
            toFixed2: function(e) {
              return e ? Number(e).toFixed(2) : "0.00"
            }
          },
          methods: {
            getScene: function(e) {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/qrCodeScene/getScene?sceneId=" + e).then((function(e) {
                1 === e.code && (t.sellerId = e.data.scene.split("=")[1], t.shareMemberId = e.data.referenceId, t.getFun())
              }))
            },
            getFun: function() {
              this.getSeller(), this.pageLoad()
            },
            pageLoad: function() {
              var t = this,
                o = {
                  current: this.page,
                  keyWord: this.searchText,
                  complex: this.sortIdx,
                  complexType: this.complexType,
                  sellerId: this.sellerId
                };
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item", o).then((function(o) {
                if (uni.stopPullDownRefresh(), 1 === o.code) {
                  var n = o.data.itemList.records;
                  o.data.itemList.total > 0 ? (1 === o.data.itemList.current ? t.goodsList = n : t.goodsList = t.goodsList.concat(n), o.data.itemList.current < o.data.itemList.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.goodsList = [], t.loadMore = "nomore")
                }
              })).catch((function(t) {
                uni.stopPullDownRefresh()
              }))
            },
            getSeller: function() {
              var e = this;
              this.loadingStatus = !0, this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/seller?sellerId=".concat(this.sellerId)).then((function(t) {
                e.loadingStatus = !1, 1 === t.code && (e.sellerInfo = t.data.records[0])
              }))
            },
            sortTab: function(e) {
              if (2 === e) 1 === this.complexType ? this.complexType = 0 : this.complexType = 1;
              else if (this.complexType = 0, this.sortIdx === e) return;
              this.sortIdx = e, this.page = 1, this.goodsList = [], this.pageLoad()
            },
            goGoodsDetails: function(e) {
              this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + e
              })
            },
            goSearch: function() {
              this.searchText ? this.$util.goBack() : this.$navigateTo({
                url: "/subPage/pages/searchOld/searchOld?sellerId=" + this.sellerId
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.searchBox{align-items:center;background-color:#fff;border-radius:31rpx;display:-webkit-flex;display:flex;height:62rpx;margin-right:30rpx;padding:0 30rpx;width:350rpx}.searchBox .searchInput{flex:1;font-size:26rpx;margin-left:15rpx}.storeInfo{align-items:center;display:-webkit-flex;display:flex;padding:30rpx}.storeInfo .storeLogo{background-color:#e5e5e5;border-radius:10rpx;height:84rpx;margin-right:20rpx;width:84rpx}.storeInfo>text{color:#222;font-size:33rpx;font-weight:700}.sortNav{align-items:center;background-color:#fff;display:-webkit-flex;display:flex;height:72rpx;justify-content:space-around;padding:0 30rpx;width:100%}.sortNav .navItem{position:relative}.sortNav .navItem .sanjiaoxing1{border-bottom:8rpx solid #999;border-left:8rpx solid transparent;border-right:8rpx solid transparent;height:0;position:absolute;right:-20rpx;top:10rpx;width:0}.sortNav .navItem .sanjiaoxing1y{border-bottom:8rpx solid #ff4643}.sortNav .navItem .sanjiaoxing2{border-left:8rpx solid transparent;border-right:8rpx solid transparent;border-top:8rpx solid #999;height:0;position:absolute;right:-20rpx;top:22rpx;width:0}.sortNav .navItem .sanjiaoxing2y{border-top:8rpx solid #ff4643}.sortNav .navItemActive{color:#ff4643}.goodsBox{display:-webkit-flex;display:flex;flex-wrap:wrap;padding:20rpx 30rpx}.goodsBox .goodsItem{background-color:#fff;border-radius:8rpx;margin-bottom:20rpx;margin-left:4%;width:48%}.goodsBox .goodsItem .itemTitle{color:#1c1c1d;font-size:26rpx;margin:10rpx 0;padding:0 20rpx}.goodsBox .goodsItem .numBox{align-items:flex-end;display:-webkit-flex;display:flex;justify-content:space-between;padding:0 20rpx 20rpx}.goodsBox .goodsItem .numBox>text:first-child{color:#ff4643;font-size:30rpx}.goodsBox .goodsItem .numBox>text:last-child{color:#878787;font-size:22rpx}.goodsBox .goodsItem:nth-child(odd){margin-left:0}
</style>
