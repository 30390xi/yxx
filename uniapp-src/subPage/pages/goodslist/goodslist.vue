<template>
<view class="">
    <uni-navbar bgColor="#FFFFFF" class="" :shadow="false" type="fixed" :vueSlots="['default']">
        <view class="searchBox" @click="goSearch($event)">
            <icon class="" color="#c5c5c5" size="16" type="search"></icon>
            <input class="searchInput" :disabled="true" placeholder="搜索商品" placeholderStyle="color:#999999;font-weight:400" type="text" :value="searchText" @input="searchText = $event" @blur="$forceUpdate()"></input>
        </view>
    </uni-navbar>
    <view class="nav">
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
    <view class="goodsBox" v-if="listTypeIcon===0">
        <view class="goodsItem" :key="index" v-for="(item, index) in $root.l1">
            <u-lazy-load borderRadius="8" class="" height="306" :image="item.defaultPicUrl" imgMode="aspectFill" :isEffect="false"></u-lazy-load>
            <view class="goodsInfo">
                <view class="itemTitle multilineText2">{{item.itemTitle}}</view>
                <view class="itemSubTitle singleLineText" v-if="item.itemSubTitle">{{item.itemSubTitle}}</view>
                <view class="yh-box">
                    <block v-if="index<2" v-for="(huoDongObj, index) in item.huoDongArr">
                        <image class="miao-sha" src="https://eshopfile.zhiyousx.com/2021091318044528261.png" v-if="huoDongObj.type=='秒杀'"></image>
                        <text class="itemRuter" v-if="huoDongObj.type=='优惠券'">
                            <block v-if="item.couponFullAmount==0">{{'领券减'+item.couponAmount}}</block>
                            <block v-else>{{'满'+item.couponFullAmount+'减'+item.couponAmount}}</block>
                        </text>
                        <text class="itemRuter" v-if="huoDongObj.type=='返现'">{{'返￥'+item.cashBackAmount}}</text>
                        <text class="itemRuter" v-if="huoDongObj.type=='分享赚'">{{'分享赚￥'+item.maxReward}}</text>
                    </block>
                </view>
                <view class="numBox">
                    <text class="num-pic" v-if="item.productType===0">{{'￥'+item.minPrice+(item.priceType===1?'起':'')}}</text>
                    <text class="num-pic" v-if="item.productType===1">{{'￥'+item.marketPrice+'起'}}</text>
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
                <u-lazy-load borderRadius="8" class="" height="192" :image="item.defaultPicUrl" imgMode="scaleToFill" :isEffect="false"></u-lazy-load>
            </view>
            <view class="itemLeft">
                <view class="itemTitle multilineText2">{{item.itemTitle}}</view>
                <view class="itemSubTitle singleLineText" v-if="item.itemSubTitle">{{item.itemSubTitle}}</view>
                <view class="yh-box">
                    <block v-if="index<2" v-for="(huoDongObj, index) in item.huoDongArr">
                        <image class="miao-sha" src="https://eshopfile.zhiyousx.com/2021091318044528261.png" v-if="huoDongObj.type=='秒杀'"></image>
                        <text class="itemRuter" v-if="huoDongObj.type=='优惠券'">
                            <block v-if="item.couponFullAmount==0">{{'领券减'+item.couponAmount}}</block>
                            <block v-else>{{'满'+item.couponFullAmount+'减'+item.couponAmount}}</block>
                        </text>
                        <text class="itemRuter" v-if="huoDongObj.type=='返现'">{{'返￥'+item.cashBackAmount}}</text>
                        <text class="itemRuter" v-if="huoDongObj.type=='分享赚'">{{'分享赚￥'+item.maxReward}}</text>
                    </block>
                </view>
                <view class="numBox">
                    <view class="numBox-l">
                        <text class="num-pic" v-if="item.productType===0">{{'￥'+item.minPrice+(item.priceType===1?'起':'')}}</text>
                        <text class="num-pic" v-if="item.productType===1">{{'￥'+item.marketPrice+'起'}}</text>
                    </view>
                    <text class="num-ys">{{item.f1+'人付款'}}</text>
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
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            EmptyState: function() {
              o.e("subPage/components/empty/empty").then(function() {
                return resolve(o("3b7a"))
              }.bind(null, o)).catch(o.oe)
            }
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
              goodsList: []
            }
          },
          onLoad: function(t) {
            t.keyword && (this.searchText = t.keyword), t.isHot && (this.isHot = t.isHot), t.catId && (this.catId = t.catId), this.pageLoad()
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
            }
          },
          methods: {
            pageLoad: function() {
              var e = this,
                o = {
                  current: this.page,
                  keyWord: this.searchText,
                  complex: this.sortIdx,
                  complexType: this.complexType,
                  catId: this.catId,
                  sellerId: this.sellerId
                };
              1 == this.isHot && (o.isHot = this.isHot), this.sellerId && (o.sellerId = this.sellerId), this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item", o).then((function(o) {
                if (uni.stopPullDownRefresh(), 1 === o.code) {
                  var n = o.data.itemList.records;
                  o.data.itemList.total > 0 ? (n.forEach((function(t) {
                    var e = [];
                    0 == t.seckillActivity && e.push({
                      type: "秒杀"
                    }), 1 == t.couponFlag && e.push({
                      type: "优惠券"
                    }), t.cashBackAmount && 0 != t.cashBackAmount && e.push({
                      type: "返现"
                    }), 0 != t.maxReward && e.push({
                      type: "分享赚"
                    }), t.huoDongArr = e
                  })), 1 === o.data.itemList.current ? e.goodsList = n : e.goodsList = e.goodsList.concat(n), o.data.itemList.current < o.data.itemList.pages ? (e.page = e.page + 1, e.loadMore = "loadmore") : e.loadMore = "nomore") : (e.goodsList = [], e.loadMore = "nomore")
                }
              })).catch((function(e) {
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
            goGoodsDetails: function(t) {
              this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + t
              })
            },
            goSearch: function() {
              this.searchText ? this.$util.goBack() : this.$navigateTo({
                url: "/subPage/pages/searchOld/searchOld"
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.searchBox{align-items:center;background-color:#f3f3f3;border-radius:31rpx;display:-webkit-flex;display:flex;height:62rpx;margin-right:130rpx;padding:0 30rpx;width:480rpx}.searchBox .searchInput{flex:1;font-size:26rpx;margin-left:15rpx}.nav{background-color:#fff}.nav .sortNav,.nav{align-items:center;display:-webkit-flex;display:flex}.nav .sortNav{flex:9;height:72rpx;justify-content:space-around;padding:0 30rpx}.nav .sortNav .navItem{position:relative}.nav .sortNav .navItem .sanjiaoxing1{border-bottom:8rpx solid #999;border-left:8rpx solid transparent;border-right:8rpx solid transparent;height:0;position:absolute;right:-20rpx;top:10rpx;width:0}.nav .sortNav .navItem .sanjiaoxing1y{border-bottom:8rpx solid #ff4643}.nav .sortNav .navItem .sanjiaoxing2{border-left:8rpx solid transparent;border-right:8rpx solid transparent;border-top:8rpx solid #999;height:0;position:absolute;right:-20rpx;top:22rpx;width:0}.nav .sortNav .navItem .sanjiaoxing2y{border-top:8rpx solid #ff4643}.nav .sortNav .navItemActive{background:url('https://eshopfile.zhiyousx.com/170065288322605070.png')bottom no-repeat;background-size:44rpx 20rpx;border-radius:10rpx;font-weight:700}.nav .navIcon{height:34rpx;margin-right:30rpx;width:34rpx}.nav .navIcon image{height:100%;width:100%}.goodsBox{display:-webkit-flex;display:flex;flex-wrap:wrap;padding:40rpx 30rpx}.goodsBox .goodsItem{background-color:#fff;border-radius:8rpx;display:-webkit-flex;display:flex;flex-direction:column;margin-bottom:20rpx;margin-left:4%;width:48%}.goodsBox .goodsItem .goodsInfo{display:-webkit-flex;display:flex;flex:1;flex-direction:column;justify-content:space-between;padding:10rpx 20rpx}.goodsBox .goodsItem .goodsInfo .itemTitle{color:#1c1c1d;font-size:26rpx}.goodsBox .goodsItem .goodsInfo .itemSubTitle{color:#909399;font-size:22rpx;padding-top:10rpx}.goodsBox .goodsItem .goodsInfo .yh-box{align-items:center;display:-webkit-flex;display:flex;padding:15rpx 0 24rpx}.goodsBox .goodsItem .goodsInfo .yh-box .itemRuter{background:#ffeeea;border-radius:6rpx;color:#ff531d;font-size:20rpx;height:30rpx;line-height:30rpx;margin-right:10rpx;padding:0 8rpx}.goodsBox .goodsItem .goodsInfo .yh-box .miao-sha{height:36rpx;margin-right:10rpx;width:98rpx}.goodsBox .goodsItem .goodsInfo .numBox{align-items:center;display:-webkit-flex;display:flex;justify-content:flex-start}.goodsBox .goodsItem .goodsInfo .numBox .num-pic{color:#ff4643;font-size:30rpx;line-height:1;padding-right:16rpx}.goodsBox .goodsItem .goodsInfo .numBox .num-ys{color:#878787;font-size:22rpx;padding-top:10rpx}.goodsBox .goodsItem:nth-child(odd){margin-left:0}.goodsBoxs{padding:20rpx 30rpx}.goodsBoxs .goodsItem{align-items:center;background-color:#fff;border-radius:8rpx;display:-webkit-flex;display:flex;height:250rpx;margin-bottom:20rpx;padding:0 20rpx;width:100%}.goodsBoxs .goodsItem .itemImg{width:216rpx}.goodsBoxs .goodsItem .itemLeft{display:-webkit-flex;display:flex;flex-direction:column;height:100%;justify-content:space-between;padding:30rpx 20rpx;width:434rpx}.goodsBoxs .goodsItem .itemLeft .itemTitle{color:#1c1c1d;font-size:26rpx}.goodsBoxs .goodsItem .itemLeft .itemSubTitle{color:#909399;font-size:22rpx;width:100%}.goodsBoxs .goodsItem .itemLeft .yh-box{display:-webkit-flex;display:flex;padding:15rpx 0 24rpx}.goodsBoxs .goodsItem .itemLeft .yh-box .itemRuter{background:#ffeeea;border-radius:6rpx;color:#ff531d;font-size:20rpx;height:30rpx;line-height:30rpx;margin-right:10rpx;padding:0 8rpx}.goodsBoxs .goodsItem .itemLeft .numBox{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.goodsBoxs .goodsItem .itemLeft .numBox .numBox-l{align-items:center;display:-webkit-flex;display:flex;justify-content:flex-start}.goodsBoxs .goodsItem .itemLeft .numBox .numBox-l .num-pic{color:#ff4643;font-size:30rpx;padding-right:16rpx}.goodsBoxs .goodsItem .itemLeft .numBox .numBox-l .itemRuter{background:#ffeeea;border-radius:6rpx;color:#ff531d;font-size:20rpx;height:30rpx;line-height:30rpx;padding:0 10rpx}.goodsBoxs .goodsItem .itemLeft .numBox .num-ys{color:#878787;font-size:22rpx}
</style>
