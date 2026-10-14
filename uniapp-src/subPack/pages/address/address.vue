<template>
<view class="addressBox">
    <block v-if="$root.g0>0">
        <view class="contents" :key="index" v-for="(item, index) in $root.l0">
            <view class="top">
                <view class="">{{item.contactPerson}}</view>
                <view class="">{{item.f0}}</view>
                <view class="tabel red" v-if="item.isDefault===1">默认</view>
            </view>
            <view class="bottom">
                <view class="left">
                    <view class="text">{{item.addrRegion1Name+item.addrRegion2Name+item.addrRegion3Name+item.addrStreet}}</view>
                </view>
                <uni-icons class="" color="#878787" size="22" type="compose" v-if="!addrId"></uni-icons>
            </view>
        </view>
    </block>
    <empty-state class="" imgUrl="/static/captured/51d17a011d27445c.png" text="没有收货地址" v-else></empty-state>
    <button class="loginSub" @click="goAddress('add')">
        <uni-icons class="" color="#fff" size="16" type="plusempty"></uni-icons>添加收货地址</button>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            EmptyState: function() {
              a.e("components/empty/empty").then(function() {
                return resolve(a("a427"))
              }.bind(null, a)).catch(a.oe)
            }
          },
          data: function() {
            return {
              addrId: "",
              page: 1,
              hasMoreData: !0,
              addressList: []
            }
          },
          onLoad: function(e) {
            e.addrId && (this.addrId = e.addrId), this.pageLoad()
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            this.hasMoreData && this.pageLoad()
          },
          filters: {
            mobileSubstr: function(e) {
              return e ? e.substr(0, 3) + "****" + e.substr(7) : "-"
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
                a = {
                  current: this.page,
                  memberId: this.userInfo.memberId
                };
              this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/memberDeliveryAddress", a).then((function(a) {
                if (uni.stopPullDownRefresh(), 1 === a.code) {
                  var n = a.data.records,
                    d = t.addressList;
                  a.data.total > 0 ? (1 === a.data.current ? t.addressList = n : t.addressList = d.concat(n), a.data.current < a.data.pages ? (t.page = t.page + 1, t.hasMoreData = !0) : t.hasMoreData = !1) : (t.addressList = [], t.hasMoreData = !1)
                }
              })).catch((function(t) {
                uni.stopPullDownRefresh()
              }))
            },
            goAddress: function(e, t) {
              var a = this;
              "add" === e ? this.$navigateTo({
                url: "/subPack/pages/addaddress/addaddress"
              }) : "edit" === e && (this.addrId ? this.$uniApi.dataRequestNoLoading("POST", "manager/app/v1/memberDeliveryAddress/updateFlag", {
                addrId: t,
                memberId: this.userInfo.memberId
              }).then((function(e) {
                1 === e.code && a.$util.prevPage()
              })) : this.$navigateTo({
                url: "/subPack/pages/addaddress/addaddress?addrId=".concat(t)
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.addressBox{margin-bottom:80rpx;padding:30rpx}.contents{background-color:#fff;border-radius:8rpx;display:-webkit-flex;display:flex;flex-direction:column;justify-content:space-around;margin-bottom:20rpx;padding:20rpx 30rpx}.contents .top{align-items:center;display:-webkit-flex;display:flex}.contents .top view{color:#333;font-size:32rpx;margin-right:20rpx}.contents .top .tabel{border-radius:15rpx;color:#fff;font-size:18rpx;height:30rpx;line-height:30rpx;padding:0 15rpx}.contents .bottom{justify-content:space-between;margin-top:20rpx}.contents .bottom .left,.contents .bottom{align-items:center;display:-webkit-flex;display:flex}.contents .bottom .left .text{color:#878787;font-size:26rpx}.red{background-color:#ff4643}.loginSub{background-image:linear-gradient(90deg,#ff4643,#f72724);border-radius:40rpx;bottom:20rpx;color:#fff;font-size:32rpx;height:80rpx;left:7.5%;line-height:80rpx;position:fixed;width:85%}
</style>
