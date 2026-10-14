<template>
<view class="page-collection">
    <view class="navRight" @click="onEditor($event)">{{isEditor?'编辑':'完成'}}</view>
    <view class="list">
        <view class="item" :key="index" v-for="(item, index) in goodsInfo">
            <view class="itemLeft" v-if="!isEditor">
                <u-checkbox activeColor="#ff463c" class="" :name="item.id" shape="circle" :value="item.checked"></u-checkbox>
            </view>
            <view :class="['',isEditor?'itemMid':'diff']">
                <image class="_img" :src="item.defaultPicUrl"></image>
            </view>
            <view :class="['itemRight','',!isEditor?'fixWidth':'']">
                <text class="text multilineText3">{{item.itemTitle}}</text>
                <text class="itemSubTitle multilineText1">{{item.itemSubTitle?item.itemSubTitle:''}}</text>
                <text class="price" v-if="item.itemStock>0">{{(item.price?item.price:0)+(item.priceType===1?'起':'')}}</text>
                <view class="noStock" v-else>暂无库存</view>
            </view>
            <view class="fText" v-if="item.isValid===1">失效</view>
        </view>
    </view>
    <view class="empty" v-if="$root.g0">
        <empty-state class="" imgUrl="https://eshopfile.zhiyousx.com/noOrder@2x.png" text="暂无收藏"></empty-state>
    </view>
    <view class="loadMore">
        <u-loadmore bgColor="#f7f7f7" class="" color="#ccc" iconColor="#ccc" :status="loadMore"></u-loadmore>
    </view>
    <view class="addheight"></view>
    <view class="select-all" v-if="!isEditor">
        <u-checkbox activeColor="#ff463c" :checked="allCheck.checked" class="" shape="circle" :value="allCheck.checked" :vueSlots="['default']" @change="allChecked()" @input="allCheck.checked = $event">全选</u-checkbox>
        <view class="del" @click="del($event)">
            <text class="">{{'删除('+delNum+')'}}</text>
        </view>
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
              page: 1,
              loadMore: "loading",
              isEditor: !0,
              selectAll: 0,
              num: 0,
              allCheck: {
                checked: !1
              },
              goodsInfo: []
            }
          },
          onLoad: function() {
            this.pageLoad()
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            },
            delNum: function() {
              return this.goodsInfo.filter((function(o) {
                return !0 === o.checked
              })).length
            }
          },
          methods: {
            pageLoad: function() {
              var e = this,
                n = {
                  current: this.page,
                  memberId: this.userInfo.memberId
                };
              this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/memberFavoriteSku", n).then((function(n) {
                if (uni.stopPullDownRefresh(), 1 === n.code) {
                  var t = n.data.records;
                  n.data.total > 0 ? (t.forEach((function(o) {
                    o.checked = !1
                  })), 1 === n.data.current ? e.goodsInfo = t : e.goodsInfo = e.goodsInfo.concat(t), n.data.current < n.data.pages ? (e.page = e.page + 1, e.loadMore = "loadmore") : e.loadMore = "nomore") : (e.goodsInfo = [], e.loadMore = "nomore")
                }
              })).catch((function(e) {
                uni.stopPullDownRefresh()
              }))
            },
            allChecked: function(o) {
              console.log(o), o.value ? this.goodsInfo.forEach((function(o) {
                o.checked = !0
              })) : this.goodsInfo.forEach((function(o) {
                o.checked = !1
              }))
            },
            del: function() {
              var o = this,
                e = this.goodsInfo.filter((function(o) {
                  return o.checked
                })).map((function(o) {
                  return o.favorId
                })).join(",");
              this.$uniApi.dataRequestNoLoading("DELETE", "manager/app/v1/memberFavoriteSku?ids=" + e).then((function(e) {
                1 == e.code && (o.$uni.showToast(e.msg), o.pageLoad(), o.isEditor = !0)
              }))
            },
            goGoodsDetails: function(o, e) {
              if (1 === e) return this.$uni.showToast("商品已失效");
              this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=".concat(o)
              })
            },
            onEditor: function() {
              this.isEditor = !this.isEditor
            },
            checkboxChange: function(o) {
              this.goodsInfo[o].checked = !this.goodsInfo[o].checked
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
@charset "UTF-8";.page-collection{background:#fff;min-height:100vh}.navRight{font-size:30rpx;margin-right:30rpx;text-align:right}.ali-check{align-items:center;display:-webkit-flex;display:flex}.list{padding:0rpx 30rpx}.list .item{align-self:center;background-color:#fff;display:-webkit-flex;display:flex;padding:30rpx 20rpx}.list .item .itemLeft{align-items:center;display:-webkit-flex;display:flex;justify-content:center;width:64rpx}.list .item .itemMid ._img{background-color:#dadada;border-radius:20rpx;height:200rpx;overflow:hidden;width:200rpx}.list .item .diff ._img{background-color:#dadada;border-radius:20rpx;height:180rpx;width:180rpx}.list .item .itemRight{display:-webkit-flex;display:flex;flex:1;flex-direction:column;justify-content:space-between;margin-left:20rpx;padding-right:20rpx}.list .item .itemRight.fixWidth{width:380rpx}.list .item .itemRight .itemSubTitle{color:#818080;font-size:22rpx;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list .item .itemRight .price{color:#ff4643;font-size:30rpx;font-weight:700}.list .item .itemRight .price::before{color:#ff4643;content:"￥";font-size:22rpx}.list .item .itemRight .noStock{background:#bbb;border-radius:20rpx;color:#fff;font-family:Source Han Sans CN;font-size:22rpx;font-weight:400;height:40rpx;line-height:40rpx;text-align:center;width:120rpx}.list .item .fText{background-color:#858585;border-radius:20rpx;color:#fff;font-size:24rpx;height:34rpx;line-height:34rpx;padding:0 10rpx}.select-all{background-color:#fff;border-top:1rpx solid #eee;bottom:0;height:100rpx;justify-content:space-between;padding:0rpx 30rpx;position:fixed;width:100%;z-index:99}.select-all .del,.select-all{align-items:center;display:-webkit-flex;display:flex}.select-all .del{background:#fff;border:1px solid #f15252;border-radius:40rpx;height:70rpx;justify-content:center;width:190rpx}.select-all .del text{color:#f15252;font-size:30rpx}.addheight{height:100rpx;width:100%}
</style>
