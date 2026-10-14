<template>
<view class="">
    <uni-navbar class="" :homePath="$root.m0" title="我的预约" type="ordinary"></uni-navbar>
    <view class="orderBox">
        <view class="orderItem" v-if="!( item.isSpecial==4&&(item.orderStatus==0||item.orderStatus==1) )" :key="index" v-for="(item, index) in $root.l0">
            <view class="merchant">
                <view class="mcName">
                    <text class="">古观音禅寺</text>
                </view>
                <block v-if="item.itemType!=1">
                    <text class="" v-if="item.cancelStatus===1">交易关闭</text>
                    <text class="" v-else>{{item.m1}}</text>
                </block>
                <text class="" v-else>{{item.m2}}</text>
            </view>
            <view class="topBox">
                <view class="goodsInfo" :key="goodsindex" v-for="(itemgoods, goodsindex) in item.items">
                    <view class="topImg">
                        <u-lazy-load borderRadius="10" class="" height="180" :image="itemgoods.pic" imgMode="aspectFill"></u-lazy-load>
                    </view>
                    <view class="itemInfo">
                        <view class="">
                            <view class="itemTitle multilineText2">{{itemgoods.name}}</view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="bomBox">
                <text class=""></text>
                <view class="orderBtn" v-if="item.itemType==1">
                    <button class="obtn" v-if="item.orderStatus==1">取消预约</button>
                    <button class="obtn" v-if="item.confirmStatus==0&&(item.isSpecial==1||item.isSpecial==2)&&item.orderStatus==2">取消预约</button>
                    <button class="obtn" v-if="(item.orderStatus===3||item.orderStatus===9||item.orderStatus===13)&&item.itemUseDescSnap.refundRuleType!=0&&item.consumeStatus!=1&&(detailInfo.isSpecial==0||detailInfo.isSpecial==3||detailInfo.isSpecial==4)">取消预约</button>
                    <button class="obtn obtn1" v-if="item.orderStatus==5">再次预约</button>
                </view>
            </view>
        </view>
    </view>
    <view class="empty" v-if="$root.g0">
        <empty-state class="" imgUrl="https://eshopfile.zhiyousx.com/noOrder@2x.png" text="暂无预约"></empty-state>
    </view>
    <view class="loadMore">
        <u-loadmore bgColor="#f7f7f7" class="" color="#ccc" iconColor="#ccc" :status="loadMore"></u-loadmore>
    </view>
    <uni-popup class=" vue-ref" ref="popup" type="bottom" :vueSlots="['default']">
        <view class="popup">
            <view class="popTitle">
                <text class="titleText">取消预约</text>
                <uni-icons class="" color="#c1c1c1" size="20" type="clear" @click="closePopup()"></uni-icons>
            </view>
            <view class="popMain">
                <radio-group class="" @change="radioChange($event)">
                    <view class="" :key="value" v-for="(item, index) in causeList">
                        <label class="radioItem">
                            <radio :checked="index===causeIdx" class="radioIcon" color="#ff4643" :value="item.value"></radio>
                            <text class="">{{item.name}}</text>
                        </label>
                    </view>
                </radio-group>
            </view>
            <button class="popupBtn" @click="cancelOrder(orderObj)">确定</button>
        </view>
    </uni-popup>
    <u-toast class=" vue-ref" ref="uToast"></u-toast>
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
              page: 1,
              loadMore: "loading",
              currentTab: 0,
              tabHeight: 0,
              tabTitle: [{
                name: "全部"
              }, {
                name: "待付款"
              }, {
                name: "待发货"
              }, {
                name: "待收货"
              }],
              orderList: [],
              orderObj: "",
              causeIdx: 0,
              causeList: [{
                value: "0",
                name: "我不想买了"
              }, {
                value: "1",
                name: "信息填写错误，请重拍"
              }, {
                value: "2",
                name: "商品无货"
              }, {
                value: "3",
                name: "其他原因"
              }]
            }
          },
          onLoad: function(e) {},
          onShow: function() {
            this.page = 1, this.$util.isLogin("", 1) && this.pageLoad()
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
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              var t = this,
                o = {
                  current: this.page,
                  size: 10,
                  scenicType: 1
                };
              0 !== this.currentTab && (o.orderStatus = this.currentTab, o.cancelStatus = 0), this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/order/getMemberOrderList", o).then((function(o) {
                if (uni.stopPullDownRefresh(), 1 === o.code) {
                  var n = o.data.records;
                  o.data.total > 0 ? (1 === o.data.current ? t.orderList = n : t.orderList = t.orderList.concat(n), o.data.current < o.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.orderList = [])
                }
              })).catch((function(t) {
                uni.stopPullDownRefresh()
              }))
            },
            cancelOrder: function(e) {
              var t = this;
              if (1 == e.itemType) {
                var o = {
                    orderId: e.orderId
                  },
                  n = "order/app/v1/order/ticketOrderCancel";
                2 != e.isSpecial && 1 != e.isSpecial || 0 != e.confirmStatus || 2 != e.orderStatus || (n = "order/app/v1/order/memberCancelSpecialTicket"), this.$uniApi.dataRequestNoLoading("GET", n, o).then((function(e) {
                  1 === e.code ? (t.page = 1, t.pageLoad(), t.$uni.showToast("预约已取消"), t.closePopup()) : t.$uni.showToast(e.msg)
                })).catch((function(e) {
                  t.$uni.showToast(e.msg)
                }))
              } else {
                var r = {
                  orderId: e.orderId
                };
                1 === e.orderStatus ? r.cancelStatus = 1 : r.orderStatus = 4, this.$uniApi.dataRequestNoLoading("PUT", "order/app/v1/order/updateOrderStatus", r).then((function(o) {
                  1 === o.code ? (t.page = 1, t.pageLoad(), t.$refs.uToast.show({
                    title: 1 === e.orderStatus ? "已取消" : "已确认收货",
                    type: "success",
                    position: "bottom"
                  }), t.closePopup()) : t.$uni.showToast(o.msg)
                })).catch((function(e) {
                  t.$uni.showToast(e.msg)
                }))
              }
            },
            radioChange: function(e) {
              for (var t in this.causeList)
                if (this.causeList[t].value === e.target.value) {
                  this.current = t;
                  break
                }
            },
            delivery: function(e) {
              var t = this,
                o = {
                  orderId: e.orderId,
                  sellerId: e.sellerId
                };
              this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/order/remindDeliver", o).then((function(e) {
                1 === e.code ? t.$refs.uToast.show({
                  title: "已提醒买家发货",
                  type: "success",
                  position: "bottom"
                }) : t.$uni.showToast(e.msg)
              })).catch((function(e) {
                t.$uni.showToast(e.msg)
              }))
            },
            delOrder: function(t) {
              var o = this;
              uni.showModal({
                title: "删除",
                content: "您确定取消该预约吗？",
                confirmColor: "#ff4643",
                success: function(e) {
                  e.confirm && o.$uniApi.getRequestNoLoading("DELETE", "order/app/v1/order?ids=".concat(t.orderId)).then((function(e) {
                    1 === e.code ? (o.orderList.forEach((function(e, n) {
                      e.orderId === t.orderId && o.orderList.splice(n, 1)
                    })), o.$refs.uToast.show({
                      title: "已删除",
                      type: "success",
                      position: "bottom"
                    })) : o.$uni.showToast(e.msg)
                  })).catch((function(e) {
                    o.$uni.showToast(e.msg)
                  }))
                }
              })
            },
            tabsChange: function(e) {
              this.currentTab = e, this.page = 1, this.orderList = [], this.pageLoad()
            },
            openPopup: function(e) {
              this.orderObj = e, this.$refs.popup.open()
            },
            closePopup: function() {
              this.orderObj = "", this.$refs.popup.close()
            },
            orderStatusFun: function(e) {
              return 0 === e ? "新提交" : 1 === e ? "待支付" : 2 === e ? "已付款" : 3 === e ? "已发货" : 4 === e ? "已签收" : 5 === e ? "交易成功" : 6 === e ? "售后处理中" : 7 === e ? "售后已完成" : void 0
            },
            orderStatusTick: function(e, t, o) {
              return 0 === e ? "新提交" : 1 === e ? "待支付" : 2 === e ? 0 != o || 1 != t && 2 != t ? "预约中" : "待确认" : 3 === e ? "待入寺" : 5 === e ? "已参观" : 8 === e ? "审核中" : 9 === e ? "部分取消" : 10 === e ? "已取消" : 11 === e ? "预约失败" : 12 === e ? "已关闭" : 13 === e ? "已过期" : void 0
            },
            goStore: function(e) {
              this.$navigateTo({
                url: "/subPage/pages/storeshop/storeshop?sellerId=".concat(e)
              })
            },
            logistics: function(e) {
              this.$navigateTo({
                url: "../ordertracking/ordertracking?orderId=".concat(e)
              })
            },
            evaluation: function(e) {
              this.$navigateTo({
                url: "/subPack/pages/evaluate/evaluate?orderId=".concat(e, "&type=myorder")
              })
            },
            afterSales: function(t) {
              var o = this;
              uni.showActionSheet({
                itemList: ["退货", "换货"],
                success: function(e) {
                  o.$navigateTo({
                    url: "/subPack/pages/aftercontent/aftercontent?aftersaleType=".concat(e.tapIndex + 1, "&orderId=").concat(t, "&type=myorder")
                  })
                },
                fail: function(e) {
                  console.log(e.errMsg)
                }
              })
            },
            orderRefund: function(e) {
              this.$navigateTo({
                url: "/subPack/pages/refundApply/refundApply?orderId=".concat(e)
              })
            },
            goTicket: function(e) {
              this.$navigateTo({
                url: "/subPage/pages/ticketFillOrder/ticketFillOrder?ticketId=".concat(e)
              })
            },
            goOrderDetails: function(e) {
              this.$navigateTo({
                url: "/subPage/pages/orderDetailtick/orderDetailtick?orderId=".concat(e.orderId)
              })
            },
            statusVal: function(e) {
              return 0 === e ? "进行中" : 1 === e ? "已完成" : 2 === e ? "已失败" : void 0
            },
            goWealth: function() {
              var e = "/subPage/pages/wealth/wealth";
              this.$util.isLogin(e) && this.$navigateTo({
                url: e
              })
            },
            jumpToGear: function(e, t) {
              t ? this.$navigateTo({
                url: "/subPage/pages/snowGear/snowGear?orderId=".concat(e, "&sid=").concat(t)
              }) : this.$navigateTo({
                url: "/subPage/pages/snowGear/snowGear?orderId=" + e
              })
            },
            getHomePath: function() {
              var e = -1 != getApp().globalData.requestUrl.indexOf("eshop") ? "1580852981351002114" : "1580167199644012545";
              return "/pages/spotDetailNew/spotDetailNew?spotId=".concat(e)
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.uTabs{left:0;position:fixed;right:0;top:0rpx;z-index:99}.orderBox{margin-top:24rpx;padding:0 24rpx;width:100%}.orderBox .merchant{justify-content:space-between;margin-bottom:40rpx}.orderBox .merchant .mcName,.orderBox .merchant{align-items:center;display:-webkit-flex;display:flex}.orderBox .merchant .mcName>image{height:30rpx;width:30rpx}.orderBox .merchant .mcName>text{color:#222;font-size:26rpx}.orderBox .merchant>text{color:#ff4643;font-size:26rpx}.orderBox .orderItem{background-color:#fff;border-radius:16rpx;margin-bottom:20rpx;padding:20rpx}.orderBox .orderItem .topBox{display:-webkit-flex;display:flex;flex-direction:column;padding-bottom:20rpx}.orderBox .orderItem .topBox .goodsInfo{display:-webkit-flex;display:flex;padding:20rpx 0;width:100%}.orderBox .orderItem .topBox .goodsInfo>text{color:#ff4643;font-size:26rpx}.orderBox .orderItem .topBox .goodsInfo .topImg{background-color:#e5e5e5;height:180rpx;width:180rpx}.orderBox .orderItem .topBox .goodsInfo .itemInfo{display:-webkit-flex;display:flex;flex:1;flex-direction:column;justify-content:space-between;margin-left:20rpx}.orderBox .orderItem .topBox .goodsInfo .itemInfo .itemTitle{font-size:24rpx;margin-bottom:10rpx}.orderBox .orderItem .topBox .goodsInfo .itemInfo .itemNum{color:#878787;font-size:24rpx}.orderBox .orderItem .topBox .goodsPrice{display:-webkit-flex;display:flex;flex-direction:row;justify-content:space-between}.orderBox .orderItem .topBox .goodsPrice .gp1{align-items:center;display:-webkit-flex;display:flex;flex-direction:row;font-family:Source Han Sans CN;font-size:24rpx;font-weight:400}.orderBox .orderItem .topBox .goodsPrice .gp1 .gp1-1{color:#ff4643}.orderBox .orderItem .topBox .goodsPrice .gp1 .gp1-2{color:#ff4643;margin-left:20rpx;margin-right:20rpx}.orderBox .orderItem .topBox .goodsPrice .gp1 .gp1-3{color:#555;margin-left:20rpx;margin-right:20rpx}.orderBox .orderItem .topBox .goodsPrice .gp2{font-size:24rpx}.orderBox .orderItem .topBox .goodsPrice .gp2 .gp2-1{color:#7d7d7d;font-family:Source Han Sans CN;font-weight:400}.orderBox .orderItem .topBox .goodsPrice .gp2 .gp2-2{color:#333;font-family:PingFang SC;font-weight:500;padding-left:20rpx}.orderBox .orderItem .topBox .goodsPrice .gp2 .gp2-3{font-size:30rpx}.orderBox .orderItem .bomBox{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;padding-top:20rpx}.orderBox .orderItem .bomBox>text{color:#878787;font-size:24rpx}.orderBox .orderItem .bomBox .orderBtn{display:-webkit-flex;display:flex}.orderBox .orderItem .bomBox .orderBtn .obtn{background-color:#fff;border:1rpx solid #cfcfcf;border-radius:54rpx;color:#878787;font-size:24rpx;height:66rpx;line-height:62rpx;margin-left:20rpx;width:200rpx}.orderBox .orderItem .bomBox .orderBtn .xj{color:#222}.orderBox .orderItem .bomBox .orderBtn .obtn:after{border:0}.orderBox .orderItem .bomBox .orderBtn .obtn1{border:1rpx solid #ff4643;color:#ff4643}.orderBox .orderItem:last-child{margin-bottom:0}.popup{background-color:#fff;border-radius:40rpx 40rpx 0 0;height:750rpx;padding:0 30rpx;position:relative;width:100%}.popup .popTitle{align-items:center;display:-webkit-flex;display:flex;height:90rpx;justify-content:space-between}.popup .popTitle .titleText{flex:1;text-align:center}.popup .popupBtn{background-color:#fff;border:1rpx solid #ff4643;border-radius:92rpx;bottom:30rpx;color:#ff4643;height:92rpx;left:20rpx;line-height:92rpx;position:absolute;right:20rpx}.popup .popupBtn:after{border:0}.popup .popMain{padding-bottom:100rpx}.popup .popMain .radioItem{align-items:center;border-bottom:1rpx solid #f7f7f7;display:-webkit-flex;display:flex;height:92rpx}.popup .popMain .radioItem .radioIcon{transform:scale(.7)}
</style>
