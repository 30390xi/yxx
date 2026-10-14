<template>
<view class="">
    <view class="header">
        <view class="" @click="showSheet($event)">{{ $root.m0 }}<uni-icons class="icon" color="#c8c8c8" size="15" type="arrowdown"></uni-icons>
        </view>
        <view class=""></view>
    </view>
    <view class="list" :key="index" v-for="(item, index) in $root.l0">
        <view class="left">
            <view class="">{{item.m1}}</view>
            <view class="" v-if="item.type===2">{{'金额：'+item.f0}}</view>
            <view class="" v-else>{{'订单：'+item.orderNo}}</view>
        </view>
        <view class="right">
            <view class="">{{item.createTime}}</view>
            <view :class="['red','',item.type===0?'red':'']">{{(item.type===0?'+':'-')+' '+item.f1}}</view>
        </view>
    </view>
    <view class="empty" v-if="$root.g0">
        <u-empty class="" marginTop="100" text=" "></u-empty>
    </view>
    <view class="loadMore">
        <u-loadmore bgColor="#f7f7f7" class="" color="#ccc" iconColor="#ccc" :status="loadMore"></u-loadmore>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              page: 1,
              loadMore: "loading",
              detailList: [],
              detailType: -1
            }
          },
          onLoad: function() {
            this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          filters: {
            toFixed2: function(e) {
              return e ? Number(e).toFixed(2) : "0.00"
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              var t = this,
                n = {
                  current: this.page,
                  memberId: this.userInfo.memberId
                }; - 1 !== this.detailType && (n.type = this.detailType), this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/memberBrokerage/detailListByPage", n).then((function(n) {
                if (uni.stopPullDownRefresh(), 1 === n.code) {
                  var o = n.data.records;
                  n.data.total > 0 ? (1 === n.data.current ? t.detailList = o : t.detailList = t.detailList.concat(o), n.data.current < n.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.detailList = [])
                }
              })).catch((function(t) {
                uni.stopPullDownRefresh()
              }))
            },
            showSheet: function() {
              var t = this;
              uni.showActionSheet({
                itemList: ["全部", "返利入帐", "返利出账", "返利提现"],
                success: function(e) {
                  0 === e.tapIndex ? t.detailType = -1 : 1 === e.tapIndex ? t.detailType = 0 : 2 === e.tapIndex ? t.detailType = 1 : 3 === e.tapIndex && (t.detailType = 2), t.pageLoad()
                }
              })
            },
            typeFun: function(e) {
              return 0 === e ? "返利入帐" : 1 === e ? "返利出账" : 2 === e ? "返利提现" : "全部"
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.header{align-items:center;display:-webkit-flex;display:flex;height:80rpx;justify-content:space-between;padding:0 30rpx;width:100%}.header .icon{margin-left:5rpx}.list{align-items:center;background-color:#fff;border-bottom:1rpx solid #eee;display:-webkit-flex;display:flex;height:130rpx;justify-content:space-between;padding-left:30rpx;width:100%}.list .left view:nth-child(1){color:#333;font-family:PingFang-SC-Medium;font-size:30rpx}.list .left view:nth-child(2){color:#878787;font-family:SFUIText-Light;font-size:22rpx}.list .right{margin-right:30rpx}.list .right view:nth-child(1){color:#878787;font-family:SFUIText-Light;font-size:24rpx}.list .right .red{color:#ff4643;font-family:PingFang-SC-Bold;font-size:34rpx;font-weight:900}.list .right .black{color:#333;font-family:PingFang-SC-Bold;font-size:34rpx;font-weight:900}
</style>
