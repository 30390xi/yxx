<template>
<view class="teamPage">
    <view class="tabs">
        <u-tabs activeColor="#333333" barHeight="6" :barStyle="barStyle" barWidth="68" :bold="true" class="" :current="current" inactiveColor="#333333" :isScroll="false" :list="listTab" @change="changecurr()"></u-tabs>
    </view>
    <view class="search-box">
        <view :class="['item','',orderByType===item.orderByType?'act':'']" :key="index" v-for="(item, index) in orderByTypeList">{{item.name}}</view>
    </view>
    <view class="main-box" v-if="list&&list[0]">
        <view class="user-box" :key="index" v-for="(item, index) in list">
            <view class="info-box">
                <image mode class="user-img" :src="item.picUrl?item.picUrl:'https://eshopfile.zhiyousx.com/2021120611010377794.png'"></image>
                <view class="info">
                    <view class="i1">{{item.nickName?item.nickName:item.mobilePhone}}</view>
                    <view class="i3" v-if="item.expertTime">{{timeTitle+'：'+item.expertTime}}</view>
                </view>
            </view>
            <view class="value">
                <view class="v1">累计贡献</view>
                <view class="v2">{{'￥'+item.income}}</view>
            </view>
        </view>
        <view class="loadMore" style="padding-top:0;">
            <u-loadmore bgColor="#fff" class="" color="#ccc" iconColor="#ccc" :status="loadMore"></u-loadmore>
        </view>
    </view>
    <view class="empty" style="margin-top:200rpx;" v-else>
        <empty-state class="" imgUrl="/static/captured/51d17a011d27445c.png" text="暂无数据"></empty-state>
    </view>
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
              page: 1,
              loadMore: "loading",
              listTab: [{
                name: "我的团员"
              }, {
                name: "我的顾客"
              }],
              current: 0,
              list: [],
              activeStyle: {
                "font-weight": "bold",
                "z-index": "1"
              },
              barStyle: {
                width: "120rpx",
                height: "20rpx",
                background: "linear-gradient(52deg, #FC4A9E 0%, #FF5411 100%)",
                "border-radius": "10px",
                position: "absolute",
                "margin-left": "-27rpx"
              },
              orderByTypeList: [{
                name: "按贡献",
                orderByType: 1
              }, {
                name: "按成为下级时间",
                orderByType: 2
              }],
              orderByType: 1,
              timeTitle: "成为下级时间",
              isHide: !1
            }
          },
          onLoad: function() {},
          onPullDownRefresh: function() {
            this.page = 1, 0 === this.current ? this.getMemberList() : 1 === this.current && this.getCustomerList()
          },
          onReachBottom: function() {
            "loadmore" == this.loadMore && (0 === this.current ? this.getMemberList() : 1 === this.current && this.getCustomerList())
          },
          onHide: function() {
            this.isHide = !0
          },
          onShow: function() {
            this.isHide || this.getMemberList()
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            getMemberList: function() {
              var t = this,
                o = {
                  current: this.page,
                  orderByType: this.orderByType,
                  size: 10
                };
              this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("post", "manager/app/v1/expert/getExpertSubordinate", o).then((function(o) {
                uni.stopPullDownRefresh(), 1 === o.code && (t.timeTitle = "成为下级时间", t.orderByTypeList = [{
                  name: "按贡献",
                  orderByType: 1
                }, {
                  name: "按成为下级时间",
                  orderByType: 2
                }], o.data.total > 0 ? (1 === o.data.current ? t.list = o.data.records : t.list = t.list.concat(o.data.records), o.data.current < o.data.pages ? (t.page++, t.loadMore = "loadmore", console.log(t.loadMore)) : t.loadMore = "nomore") : (t.LoadMore = "nomore", t.list = []))
              })).catch((function(t) {
                uni.stopPullDownRefresh(), console.log(t)
              }))
            },
            getCustomerList: function() {
              var t = this,
                o = {
                  current: this.page,
                  orderByType: this.orderByType,
                  size: 10
                };
              this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("post", "manager/app/v1/expert/getExpertCustomer", o).then((function(o) {
                uni.stopPullDownRefresh(), 1 === o.code && (t.timeTitle = "成为临时下级时间", t.orderByTypeList = [{
                  name: "按贡献",
                  orderByType: 1
                }, {
                  name: "按成为临时下级时间",
                  orderByType: 2
                }], o.data.total > 0 ? (1 === o.data.current ? t.list = o.data.records : t.list = t.list.concat(o.data.records), o.data.current < o.data.pages ? (t.page++, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.list = [], t.loadMore = "nomore"))
              })).catch((function(t) {
                uni.stopPullDownRefresh(), console.log(t)
              }))
            },
            changecurr: function(e) {
              this.current = e, this.page = 1, this.orderByType = 1, 0 === e ? this.getMemberList() : 1 === e && this.getCustomerList()
            },
            seachFun: function(e) {
              this.orderByType = this.orderByTypeList[e].orderByType, this.page = 1, 0 === this.current ? this.getMemberList() : 1 === this.current && this.getCustomerList()
            },
            toDetail: function(e) {
              0 === this.current && this.$navigateTo({
                url: "/subPage/pages/memberDetail/memberDetail?id=" + e
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.teamPage{background:#fff;min-height:100vh}.tabs{box-shadow:0 4rpx 10rpx 1rpx rgba(0,0,0,.08);height:80rpx;left:0;position:fixed;top:0;width:100%;z-index:9}.search-box{background-color:#fff;height:120rpx;padding:40rpx;position:fixed;top:80rpx;width:100%;z-index:8}.search-box .item,.search-box{align-items:center;display:-webkit-flex;display:flex}.search-box .item{background-color:#f8f8f8;border-radius:30rpx 30rpx 30rpx 30rpx;color:#222;font-size:26rpx;height:60rpx;justify-content:center;margin-right:20rpx;padding:0 20rpx}.search-box .act{background-color:#ffeaea;color:#555}.list{background-color:#fff;height:100%;margin-bottom:20rpx;padding-left:30rpx;width:100%}.list .contents{border-bottom:1rpx solid #eee;height:110rpx;justify-content:space-between;padding-right:30rpx;width:100%}.list .contents .news,.list .contents{align-items:center;display:-webkit-flex;display:flex}.list .contents .news{color:#333;font-size:28rpx}.list .contents .news image{border-radius:50%;height:65rpx;margin-right:20rpx;width:65rpx}.list .contents .iconbox{align-items:center;display:-webkit-flex;display:flex}.list .contents .iconbox .Tips{background-color:#ff4643;border-radius:50%;color:#fff;font-size:22rpx;height:30rpx;line-height:30rpx;text-align:center;width:30rpx}.list .contents .iconbox image{height:30rpx;width:30rpx}.list .contents:nth-last-child(1){border:0}.main-box{font-family:Source Han Sans CN-Normal,Source Han Sans CN;font-weight:400;margin-top:200rpx;min-height:calc(100% -200rpx);padding:0 40rpx}.main-box .user-box{display:-webkit-flex;display:flex;height:136rpx;justify-content:space-between;margin-top:20rpx;width:100%}.main-box .user-box .info-box{display:-webkit-flex;display:flex}.main-box .user-box .info-box .user-img{border-radius:50rpx;height:100rpx;width:100rpx}.main-box .user-box .info-box .info{margin-left:20rpx}.main-box .user-box .info-box .info .i1{color:#333;font-size:28rpx;line-height:33rpx;margin-top:5rpx}.main-box .user-box .info-box .info .i2{color:#4a4a4a;font-size:26rpx;line-height:30rpx;margin-top:8rpx}.main-box .user-box .info-box .info .i3{color:#a3a3a3;font-size:24rpx;line-height:28rrpx;margin-top:6rpx}.main-box .user-box .value{font-size:26rpx;line-height:35rpx;margin-top:7rpx;text-align:right}.main-box .user-box .value .v1{color:#4a4a4a;margin-bottom:5rpx}.main-box .user-box .value .v2{color:#ff5411}
</style>
