<template>
<view class="">
    <view class="uTabs">
        <view class="type-tabs">
            <view class="tab-box">
                <view :class="['tab-item','',activeType==index?'active':'']" :key="index" v-for="(item, index) in goodType">{{item.name}}</view>
            </view>
        </view>
        <u-tabs activeColor="#ff4643" class=" vue-ref" :current="currentTab" ref="uTabs" fontSize="28" inactiveColor="#606266" :isScroll="false" :list="tabTitle" @change="tabsChange()"></u-tabs>
    </view>
    <view class="orderBox">
        <view class="orderItem" v-if="!( item.isSpecial==4&&(item.orderStatus==0||item.orderStatus==1) )" :key="index" v-for="(item, index) in $root.l1">
            <view class="merchant">
                <view class="mcName" v-if="item.itemType!=2">
                    <image class="" src="../../static/images/sj_icon.png"></image>
                    <text class="" v-if="item.itemType==0">商城</text>
                    <text class="" v-else>门票</text>
                </view>
                <view class="mcName" v-else>
                    <image class="" src="https://eshopfile.zhiyousx.com/169899172198688653.png"></image>
                    <text class="">线路</text>
                </view>
                <block v-if="item.itemType==0">
                    <text class="" v-if="item.cancelStatus===1">交易关闭</text>
                    <text class="" v-else>{{item.m0}}</text>
                </block>
                <text class="" v-else>{{item.m1}}</text>
            </view>
            <view class="topBox" v-if="item.itemType!=2">
                <view class="goodsInfo" :key="goodsindex" v-for="(itemgoods, goodsindex) in item.items">
                    <view class="topImg">
                        <u-lazy-load borderRadius="10" class="" height="180" :image="itemgoods.pic" imgMode="aspectFill"></u-lazy-load>
                    </view>
                    <view class="itemInfo">
                        <view class="">
                            <view class="itemTitle multilineText2">{{itemgoods.name}}</view>
                            <text class="itemNum">{{'X '+itemgoods.quantity+' '+(itemgoods.skuName?itemgoods.skuName:'')+''}}</text>
                        </view>
                        <text class="">{{'￥'+itemgoods.price}}</text>
                    </view>
                </view>
                <view class="goodsPrice">
                    <view class="gp1" v-if="item.memberBrokerage&&item.memberBrokerage.brokerageType===1&&(item.memberBrokerage.status==0||item.memberBrokerage.status==1)&&!item.returnCashCouponAmount" @click="goWealth($event)">
                        <view class="gp1-1">{{'返￥'+item.memberBrokerage.income}}</view>
                        <view class="gp1-2" v-if="item.memberBrokerage.status==0">{{item.m2}}</view>
                        <view class="gp1-3" v-else>{{item.m3}}</view>
                        <uni-icons class="" color="#c8c8c8" size="14" type="arrowright"></uni-icons>
                    </view>
                    <view class="" v-else></view>
                    <view class="gp2">
                        <text class="gp2-1">{{'共'+item.itemQuantity+'件商品'}}</text>
                        <text class="gp2-2" v-if="item.isSpecial!=4">{{item.orderStatus==0||item.orderStatus==1||item.orderStatus===12?'应付:￥':'已付:￥'}}</text>
                        <text class="gp2-3" v-if="item.isSpecial!=4">{{item.count}}</text>
                    </view>
                </view>
            </view>
            <view class="topBox lineBox" v-else>
                <block :key="goodsindex" v-for="(itemgoods, goodsindex) in item.l0">
                    <view class="box-top">
                        <view class="productName multilineText2">{{itemgoods.name}}</view>
                        <view class="price">{{'￥'+item.count}}</view>
                    </view>
                    <view class="trip" v-if="item.lineRelationName">{{item.lineRelationName}}</view>
                    <view class="trip">{{itemgoods.m4+item.fromTime+'出发'+item.toTime+'返回'}}</view>
                    <view class="trip">{{itemgoods.m5}}</view>
                </block>
            </view>
            <view class="bomBox">
                <text class=""></text>
                <view class="orderBtn" v-if="item.itemType==1||item.itemType==2">
                    <button class="obtn" v-if="item.orderStatus==1">{{'取消'+(item.items[0]['skuItemType']==1?'预约':'订单')}}</button>
                    <button class="obtn" v-if="item.confirmStatus==0&&(item.isSpecial==1||item.isSpecial==2)&&item.orderStatus==2">{{'取消'+(item.items[0]['skuItemType']==1?'预约':'订单')}}</button>
                    <button class="obtn obtn1" v-if="item.orderStatus==1">付款</button>
                    <button :class="['obtn','',item.refundFeeDTO&&item.refundFeeDTO.feeExceed?'noRfamount':'']" v-if="(item.orderStatus===3||item.orderStatus===9||item.orderStatus===13)&&item.itemUseDescSnap.refundRuleType!=0&&item.consumeStatus!=1&&(item.isSpecial==0||item.isSpecial==3||item.isSpecial==4||item.isSpecial==5)">申请退款</button>
                    <button :class="['obtn','',item.refundFeeDTO&&item.refundFeeDTO.feeExceed?'noRfamount':'']" v-if="item.orderStatus===2">申请退款</button>
                    <button class="obtn obtn1" v-if="item.orderStatus==5&&item.itemType!=2">{{'再次'+(item.items[0]['skuItemType']==1?'预约':'预订')}}</button>
                    <button class="obtn xj" v-if="!item.subscribeId&&item.subscribeType==1&&(item.orderStatus==2||item.orderStatus==3)">预约雪具</button>
                    <button class="obtn xj" v-if="item.subscribeId&&item.subscribeType==1&&item.subscribeEditStatus!=1&&(item.subscribeStatus==0||item.subscribeStatus==1)&&(item.orderStatus==2||item.orderStatus==3||item.orderStatus==5||item.orderStatus==9)">增加预约</button>
                    <button class="obtn" v-if="item.cancelStatus===1||item.orderStatus===5||item.orderStatus===10||item.orderStatus===11||item.orderStatus===12||item.orderStatus===13">删除订单</button>
                </view>
                <view class="orderBtn" v-else>
                    <button class="obtn" v-if="item.cancelStatus===1||item.orderStatus===4||item.orderStatus===5||item.orderStatus===7">删除订单</button>
                    <block v-else>
                        <button class="obtn" v-if="item.orderStatus===1">取消订单</button>
                        <button class="obtn obtn1" v-if="item.orderStatus===1">付款</button>
                        <button class="obtn" v-if="item.orderStatus===2">提醒发货</button>
                        <button class="obtn" v-if="item.orderStatus===3">查看物流</button>
                        <button class="obtn obtn1" v-if="item.orderStatus===3">确认收货</button>
                    </block>
                    <button class="obtn" v-if="item.orderStatus===2||item.orderStatus===3||item.orderStatus===4">退/换货</button>
                </view>
            </view>
        </view>
    </view>
    <view class="empty" v-if="$root.g0">
        <empty-state class="" imgUrl="https://eshopfile.zhiyousx.com/noOrder@2x.png" text="暂无订单"></empty-state>
    </view>
    <view class="loadMore">
        <u-loadmore bgColor="#f7f7f7" class="" color="#ccc" iconColor="#ccc" :status="loadMore"></u-loadmore>
    </view>
    <uni-popup class=" vue-ref" ref="popup" type="bottom" :vueSlots="['default']">
        <view class="popup">
            <view class="popTitle">
                <text class="titleText">取消订单</text>
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
              o.e("components/empty/empty").then(function() {
                return resolve(o("a427"))
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
              goodType: [{
                name: "全部",
                type: null
              }, {
                name: "门票",
                type: 1
              }, {
                name: "线路",
                type: 2
              }, {
                name: "商城",
                type: 0
              }],
              activeType: 0,
              orderList: [],
              orderObj: "",
              submiting: !1,
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
          onLoad: function(e) {
            e.type ? this.currentTab = Number(e.type) : this.currentTab = 0, e.itemType ? this.activeType = Number(e.itemType) : this.activeType = 0, e.height ? this.tabHeight = Number(e.height) : this.tabHeight = 64
          },
          onUnload: function() {
            getApp().watchRouter()
          },
          onShow: function() {
            this.page = 1, this.pageLoad()
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
            peopleText: function(e) {
              var t = "",
                o = ["", "成人", "儿童", "老人"];
              return e.forEach((function(e) {
                t += e.num + o[e.peopleType] + ","
              })), t.slice(0, -1)
            },
            cityName: function(e) {
              var t = "";
              return null == e || (e.forEach((function(e, o) {
                t += e + "/"
              })), t && (t = t.slice(0, -1) + "出发,")), t
            },
            changGoodType: function(e) {
              this.activeType = e, this.page = 1, this.pageLoad()
            },
            pageLoad: function() {
              var t = this,
                o = {
                  current: this.page,
                  buyerId: this.userInfo.memberId
                };
              this.activeType && (o.itemType = this.goodType[this.activeType].type), 0 !== this.currentTab && (o.orderStatus = this.currentTab, o.cancelStatus = 0), this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getOrderStatusListNew", o).then((function(o) {
                if (uni.stopPullDownRefresh(), 1 === o.code) {
                  var r = o.data.records;
                  o.data.total > 0 ? (1 === o.data.current ? t.orderList = r : t.orderList = t.orderList.concat(r), o.data.current < o.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.orderList = [])
                }
                t.submiting = !1
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
                  r = "order/app/v1/order/ticketOrderCancel";
                2 != e.isSpecial && 1 != e.isSpecial || 0 != e.confirmStatus || 2 != e.orderStatus || (r = "order/app/v1/order/memberCancelSpecialTicket"), this.$uniApi.dataRequestNoLoading("GET", r, o).then((function(e) {
                  1 === e.code ? (t.page = 1, t.pageLoad(), t.$uni.showToast("订单已取消"), t.closePopup()) : t.$uni.showToast(e.msg)
                })).catch((function(e) {
                  t.$uni.showToast(e.msg)
                }))
              } else if (2 == e.itemType) {
                var a = {
                  orderId: e.orderId
                };
                this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/lineOrder/cancel", a).then((function(e) {
                  1 === e.code ? (t.page = 1, t.pageLoad(), t.$uni.showToast("订单已取消"), t.closePopup()) : t.$uni.showToast(e.msg)
                })).catch((function(e) {
                  t.$uni.showToast(e.msg)
                }))
              } else {
                var n = {
                  orderId: e.orderId
                };
                1 === e.orderStatus ? n.cancelStatus = 1 : n.orderStatus = 4, this.$uniApi.dataRequestNoLoading("PUT", "order/app/v1/order/updateOrderStatus", n).then((function(o) {
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
            deleteOrder: function(t) {
              var o = this;
              uni.showModal({
                title: "确定删除此订单？",
                content: "订单删除后无法恢复",
                confirmColor: "#ff4643",
                success: function(e) {
                  e.confirm && o.$uniApi.getRequestNoLoading("get", "order/app/v1/order/hidden/".concat(t.orderId)).then((function(e) {
                    1 === e.code ? (o.orderList.forEach((function(e, r) {
                      e.orderId === t.orderId && o.orderList.splice(r, 1)
                    })), o.deleteSetList(), o.$uni.showToast("已删除")) : o.$uni.showToast(e.msg)
                  })).catch((function(e) {
                    o.$uni.showToast(e.msg)
                  }))
                }
              })
            },
            deleteSetList: function() {
              var t = this;
              if ("loadmore" === this.loadMore) {
                var o = {
                  current: this.page - 1,
                  buyerId: this.userInfo.memberId
                };
                this.activeType && (o.itemType = this.goodType[this.activeType].type), 0 !== this.currentTab && (o.orderStatus = this.currentTab, o.cancelStatus = 0), this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getOrderStatusListNew", o).then((function(o) {
                  if (uni.stopPullDownRefresh(), 1 === o.code) {
                    o.data.total > 0 && o.data.current < o.data.pages ? t.loadMore = "loadmore" : t.loadMore = "nomore";
                    var r = o.data.records;
                    t.orderList.push(r[r.length - 1])
                  }
                }))
              }
            },
            delOrder: function(t) {
              var o = this;
              uni.showModal({
                title: "删除",
                content: "您确定删除该订单吗？",
                confirmColor: "#ff4643",
                success: function(e) {
                  e.confirm && o.$uniApi.getRequestNoLoading("DELETE", "order/app/v1/order?ids=".concat(t.orderId)).then((function(e) {
                    1 === e.code ? (o.orderList.forEach((function(e, r) {
                      e.orderId === t.orderId && o.orderList.splice(r, 1)
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
            orderStatusTick: function(e, t, o, r) {
              return 0 === e ? "新提交" : 1 === e ? "待支付" : 2 === e ? 2 == r ? "确认中" : 0 != o || 1 != t && 2 != t ? "待出票" : "待确认" : 3 === e ? "待游玩" : 5 === e ? "订单完成" : 8 === e ? "退款审核中" : 9 === e ? "部分退款" : 10 === e ? "退款完成" : 11 === e ? "出票失败" : 12 === e ? "订单关闭" : 13 === e ? "已过期" : void 0
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
              if (e.refundFeeDTO && e.refundFeeDTO.feeExceed) this.$uni.showToast("当前订单需收取100%损失费，不支持取消");
              else {
                var t = e.orderId;
                1 != e.itemUseDescSnap.isPartialRefund || -1 == e.consumeStatus ? 2 == e.itemType ? this.$navigateTo({
                  url: "/subPack/pages/lineRefundApply/lineRefundApply?orderId=".concat(t)
                }) : this.$navigateTo({
                  url: "/subPack/pages/refundApply/refundApply?orderId=".concat(t)
                }) : this.$uni.showToast("该产品不支持部分退")
              }
            },
            beforeConfirmRefund: function(t) {
              var o = this;
              if (!this.submiting) {
                if (this.submiting = !0, 1 == t.itemType) return this.$uni.showToast("出票中，请稍后再试"), this.page = 1, void this.pageLoad();
                uni.showModal({
                  title: "提示",
                  content: "确认要退款吗？",
                  success: function(e) {
                    e.confirm ? o.$uniApi.dataRequestYesLoading("POST", "order/app/v1/".concat("lineOrde/refundBeforeConfirmr"), {
                      orderId: t.orderId
                    }, "退款中...").then((function(e) {
                      1 === e.code ? (o.$uni.showToast("退款成功"), o.page = 1, o.pageLoad()) : (o.$uni.showToast(e.msg), o.submiting = !1)
                    })) : o.submiting = !1
                  }
                })
              }
            },
            goTicket: function(e, t) {
              1 == e.itemType ? this.$navigateTo({
                url: "/subPage/pages/ticket_detail/ticket_detail?itemId=" + t
              }) : this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + t
              })
            },
            goOrderDetails: function(e) {
              if (1 == e.itemType)
                if (5 === e.isSpecial) this.$navigateTo({
                  url: "/artShow/pages/orderDetail/orderDetail?orderId=".concat(e.orderId)
                });
                else {
                  if (2 == e.scenicType) return void this.$navigateTo({
                    url: "/artShow/pages/orderDetail/orderDetail?orderId=".concat(e.orderId)
                  });
                  this.$navigateTo({
                    url: "/subPage/pages/orderDetailtick/orderDetailtick?orderId=".concat(e.orderId)
                  })
                }
              else 2 == e.itemType ? this.$navigateTo({
                url: "/subPack/pages/lineOrderDetail/lineOrderDetail?orderId=".concat(e.orderId)
              }) : this.$navigateTo({
                url: "../order_details/order_details?orderId=".concat(e.orderId)
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
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.uTabs{left:0;position:fixed;right:0;top:0rpx;z-index:99}.uTabs .type-tabs{background:#fff;height:100rpx;justify-content:center;width:100%}.uTabs .type-tabs .tab-box,.uTabs .type-tabs{align-items:center;display:-webkit-flex;display:flex}.uTabs .type-tabs .tab-box{background:#f4f4f4;border-radius:40rpx;box-shadow:inset 0rpx 2rpx 2rpx 0rpx rgba(0,0,0,.08);height:80rpx;padding-left:10rpx;width:510rpx}.uTabs .type-tabs .tab-box .tab-item{align-items:center;color:#222;display:-webkit-flex;display:flex;font-size:28rpx;justify-content:center;margin-right:10rpx;width:115rpx}.uTabs .type-tabs .tab-box .active{background:linear-gradient(180deg,#ffe7de,#ffbfa6);border-radius:30rpx;box-shadow:0rpx 2rpx 0rpx 0rpx rgba(0,0,0,.1);color:#ff5411;font-weight:700;height:60rpx}.orderBox{margin-top:204rpx;padding:0 24rpx;width:100%}.orderBox .merchant{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:40rpx}.orderBox .merchant .mcName{align-items:center;display:-webkit-flex;display:flex;margin-left:17rpx}.orderBox .merchant .mcName>image{height:30rpx;width:30rpx}.orderBox .merchant .mcName>text{color:#222;font-size:26rpx;margin-left:15rpx}.orderBox .merchant>text{color:#ff4643;font-size:26rpx}.orderBox .orderItem{background-color:#fff;border-radius:16rpx;margin-bottom:20rpx;padding:20rpx}.orderBox .orderItem .topBox{display:-webkit-flex;display:flex;flex-direction:column;padding-bottom:20rpx}.orderBox .orderItem .topBox .goodsInfo{display:-webkit-flex;display:flex;padding:20rpx 0;width:100%}.orderBox .orderItem .topBox .goodsInfo>text{color:#ff4643;font-size:26rpx}.orderBox .orderItem .topBox .goodsInfo .topImg{background-color:#e5e5e5;height:180rpx;width:180rpx}.orderBox .orderItem .topBox .goodsInfo .itemInfo{display:-webkit-flex;display:flex;flex:1;flex-direction:column;justify-content:space-between;margin-left:20rpx}.orderBox .orderItem .topBox .goodsInfo .itemInfo .itemTitle{font-size:24rpx;margin-bottom:10rpx}.orderBox .orderItem .topBox .goodsInfo .itemInfo .itemNum{color:#878787;font-size:24rpx}.orderBox .orderItem .topBox .goodsPrice{display:-webkit-flex;display:flex;flex-direction:row;justify-content:space-between}.orderBox .orderItem .topBox .goodsPrice .gp1{align-items:center;display:-webkit-flex;display:flex;flex-direction:row;font-family:Source Han Sans CN;font-size:24rpx;font-weight:400}.orderBox .orderItem .topBox .goodsPrice .gp1 .gp1-1{color:#ff4643}.orderBox .orderItem .topBox .goodsPrice .gp1 .gp1-2{color:#ff4643;margin-left:20rpx;margin-right:20rpx}.orderBox .orderItem .topBox .goodsPrice .gp1 .gp1-3{color:#555;margin-left:20rpx;margin-right:20rpx}.orderBox .orderItem .topBox .goodsPrice .gp2{font-size:24rpx}.orderBox .orderItem .topBox .goodsPrice .gp2 .gp2-1{color:#7d7d7d;font-family:Source Han Sans CN;font-weight:400}.orderBox .orderItem .topBox .goodsPrice .gp2 .gp2-2{color:#333;font-family:PingFang SC;font-weight:500;padding-left:20rpx}.orderBox .orderItem .topBox .goodsPrice .gp2 .gp2-3{font-size:30rpx}.orderBox .orderItem .lineBox{padding-bottom:0}.orderBox .orderItem .lineBox .box-top{display:-webkit-flex;display:flex;justify-content:space-between;padding-bottom:10rpx}.orderBox .orderItem .lineBox .box-top .productName{color:rgba(0,0,0,.8);font-size:28rpx;width:540rpx}.orderBox .orderItem .lineBox .box-top .price{color:rgba(0,0,0,.8);font-size:28rpx}.orderBox .orderItem .lineBox .trip{color:rgba(0,0,0,.5);font-size:24rpx;line-height:34rpx;margin-top:10rpx}.orderBox .orderItem .bomBox{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;padding-top:20rpx}.orderBox .orderItem .bomBox>text{color:#878787;font-size:24rpx}.orderBox .orderItem .bomBox .orderBtn{display:-webkit-flex;display:flex}.orderBox .orderItem .bomBox .orderBtn .obtn{background-color:#fff;border:1rpx solid #cfcfcf;border-radius:54rpx;color:#878787;font-size:24rpx;height:66rpx;line-height:62rpx;margin-left:20rpx;width:200rpx}.orderBox .orderItem .bomBox .orderBtn .xj{color:#222}.orderBox .orderItem .bomBox .orderBtn .obtn:after{border:0}.orderBox .orderItem .bomBox .orderBtn .obtn1{border:1rpx solid #ff4643;color:#ff4643}.orderBox .orderItem:last-child{margin-bottom:0}.popup{background-color:#fff;border-radius:40rpx 40rpx 0 0;height:750rpx;padding:0 30rpx;position:relative;width:100%}.popup .popTitle{align-items:center;display:-webkit-flex;display:flex;height:90rpx;justify-content:space-between}.popup .popTitle .titleText{flex:1;text-align:center}.popup .popupBtn{background-color:#fff;border:1rpx solid #ff4643;border-radius:92rpx;bottom:30rpx;color:#ff4643;height:92rpx;left:20rpx;line-height:92rpx;position:absolute;right:20rpx}.popup .popupBtn:after{border:0}.popup .popMain{padding-bottom:100rpx}.popup .popMain .radioItem{align-items:center;border-bottom:1rpx solid #f7f7f7;display:-webkit-flex;display:flex;height:92rpx}.popup .popMain .radioItem .radioIcon{transform:scale(.7)}.popup .noRfamount{opacity:.3}
</style>
