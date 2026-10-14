<template>
<view class="page">
    <view class="top-bar" id="menu">
        <block v-for="(item, index) in menuList">
            <view :class="['menu-item','',index+1==menuId?'active':'']" v-if="menuId<3">
                <text class="menuTit">{{item.name}}</text>
            </view>
            <view :class="['menu-item','',index+1==menuId?'active1':'']" v-else>
                <text class="menuTit">{{item.name}}</text>
            </view>
        </block>
    </view>
    <view class="coupon-box" :hidden="!!showNull">
        <view class="coupon-item" v-if="orderStatus==1" :key="index" v-for="(item, index) in $root.l0">
            <view class="line" v-if="item.itemType==1">门票</view>
            <view class="ticket" v-if="item.itemType==2">线路</view>
            <view class="coupon">
                <view class="cou-l-l">
                    <view class="cou-money" v-if="item.type==3">
                        <text class="cou-pic">0</text>元购</view>
                    <view class="cou-money" v-else>￥<text class="cou-pic">{{item.quota}}</text>
                    </view>
                    <view class="cou-pictit" v-if="item.type==2&&item.threshold==0">无门槛</view>
                    <view class="cou-pictit" v-if="item.type==1&&item.threshold>0">{{'满'+item.threshold+'元可用'}}</view>
                    <view class="cou-pictit" v-if="item.type==3">{{'已抵扣('+item.deductionUsedNum+'/'+item.deductionTotalNum+')'}}</view>
                </view>
                <view class="cou-l-r">
                    <view class="cou-title">{{item.name}}</view>
                    <view class="cou-date" style="color:#ADADAD;" v-if="item.useTimeSlot==0">{{item.f0+'-'+item.f1}}</view>
                    <view class="cou-date" style="color:#ADADAD;" v-if="item.useTimeSlot==1">{{item.f2+'前有效'}}</view>
                    <view class="cou-date" style="color:#ADADAD;" v-if="item.useTimeSlot==2">{{item.f3+'-'+item.f4}}</view>
                    <view class="cou-date" style="color:#ADADAD;" v-if="item.useTimeSlot==2">{{'可预订【'+item.f5+'-'+item.f6+'】的'+(item.itemType==1?'门票':'产品')}}</view>
                </view>
                <view class="cou-r">
                    <view class="cou-rbox">
                        <view class="cou-btn">立即使用</view>
                        <view class="" style="width:120rpx;text-align:right;">
                            <image class="showbtn" src="https://eshopfile.zhiyousx.com/170065269243227630.png" v-if="item.isShow"></image>
                            <image class="hidebtn" src="https://eshopfile.zhiyousx.com/170065270890750173.png" v-else></image>
                        </view>
                    </view>
                </view>
            </view>
            <view :class="['',item.isShow?'coupon-show':'coupon-hide']">
                <view class="con-msg" style="border-top:1rpx dashed #FFD3C6;">{{ item.useExplain }}</view>
            </view>
        </view>
        <view class="coupon-item" v-if="orderStatus==2" :key="index" v-for="(item, index) in $root.l1">
            <view class="line" v-if="item.itemType==1">门票</view>
            <view class="ticket" v-if="item.itemType==2">线路</view>
            <view class="coupon" style="background:#fff;">
                <view class="cou-l-l">
                    <view class="cou-money" style="color:#484848;" v-if="item.type==3">
                        <text class="cou-pic" style="color:#484848;">0</text>元购</view>
                    <view class="cou-money" style="color:#484848;" v-else>￥<text class="cou-pic" style="color:#484848;">{{item.quota}}</text>
                    </view>
                    <view class="cou-pictit" style="color:#484848;" v-if="item.type==2&&item.threshold==0">无门槛</view>
                    <view class="cou-pictit" style="color:#484848;" v-if="item.type==1&&item.threshold>0">{{'满'+item.threshold+'元可用'}}</view>
                    <view class="cou-pictit" style="color:#484848;" v-if="item.type==3">{{'已抵扣数量（'+item.deductionUsedNum+'/'+item.deductionTotalNum+'）'}}</view>
                </view>
                <view class="cou-l-r">
                    <view class="cou-title">{{item.name}}</view>
                    <view class="cou-date" style="color:#ADADAD;" v-if="item.useTimeSlot==0">{{item.f7+'-'+item.f8}}</view>
                    <view class="cou-date" style="color:#ADADAD;" v-if="item.useTimeSlot==1">{{item.f9+'前有效'}}</view>
                    <view class="cou-date" style="color:#ADADAD;" v-if="item.useTimeSlot==2">{{item.f10+'-'+item.f11}}</view>
                    <view class="cou-date" style="color:#ADADAD;" v-if="item.useTimeSlot==2">{{'可预订【'+item.f12+'-'+item.f13+'】的'+(item.itemType==1?'门票':'产品')}}</view>
                </view>
                <view class="cou-r" style="padding:0;">
                    <view class="cou-rbox" style="padding:0 30rpx 0 0;text-align:right;">
                        <image class="rbox-img" src="https://eshopfile.zhiyousx.com/2023102620395751612.png"></image>
                        <view class="" style="width:120rpx;text-align:right;">
                            <image class="showbtn" src="https://eshopfile.zhiyousx.com/170065277001478042.png" style="margin-top:5rpx;" v-if="item.isShow"></image>
                            <image class="hidebtn" src="https://eshopfile.zhiyousx.com/170065280012053856.png" style="margin-top:5rpx;" v-else></image>
                        </view>
                    </view>
                </view>
            </view>
            <view :class="['',item.isShow?'coupon-show':'coupon-hide']">
                <view class="con-msg" style="border-top:1rpx dashed #7B7B7B;">{{ item.useExplain }}</view>
            </view>
        </view>
        <view class="coupon-item" v-if="orderStatus==3" :key="index" v-for="(item, index) in $root.l2">
            <view class="line" v-if="item.itemType==1">门票</view>
            <view class="ticket" v-if="item.itemType==2">线路</view>
            <view class="coupon" style="background:#fff;">
                <view class="cou-l-l" style="color:#ADADAD;">
                    <view class="cou-money" style="color:#ADADAD;" v-if="item.type==3">
                        <text class="cou-pic" style="color:#ADADAD;">0</text>元购</view>
                    <view class="cou-money" style="color:#ADADAD;" v-else>￥<text class="cou-pic" style="color:#ADADAD;">{{item.quota}}</text>
                    </view>
                    <view class="cou-pictit" style="color:#ADADAD;" v-if="item.type==2&&item.threshold==0">无门槛</view>
                    <view class="cou-pictit" style="color:#ADADAD;" v-if="item.type==1&&item.threshold>0">{{'满'+item.threshold+'元可用'}}</view>
                    <view class="cou-pictit" style="color:#ADADAD;" v-if="item.type==3">{{'已抵扣数量（'+item.deductionUsedNum+'/'+item.deductionTotalNum+'）'}}</view>
                </view>
                <view class="cou-l-r">
                    <view class="cou-title" style="color:#ADADAD;">{{item.name}}</view>
                    <view class="cou-date" style="color:#ADADAD;" v-if="item.useTimeSlot==0">{{item.f14+'-'+item.f15}}</view>
                    <view class="cou-date" style="color:#ADADAD;" v-if="item.useTimeSlot==1">{{item.f16+'前有效'}}</view>
                    <view class="cou-date" style="color:#ADADAD;" v-if="item.useTimeSlot==2">{{item.f17+'-'+item.f18}}</view>
                    <view class="cou-date" style="color:#ADADAD;" v-if="item.useTimeSlot==2">{{'可预订【'+item.f19+'-'+item.f20+'】的'+(item.itemType==1?'门票':'产品')}}</view>
                </view>
                <view class="cou-r" style="padding:0;text-align:right;">
                    <view class="cou-rbox" style="padding:0 30rpx 0 0;">
                        <image class="rbox-img" src="https://eshopfile.zhiyousx.com/2023102620405108419.png"></image>
                        <view class="" style="width:120rpx;text-align:right;">
                            <image class="showbtn" src="https://eshopfile.zhiyousx.com/170065277001478042.png" style="margin-top:5rpx;" v-if="item.isShow"></image>
                            <image class="hidebtn" src="https://eshopfile.zhiyousx.com/170065280012053856.png" style="margin-top:5rpx;" v-else></image>
                        </view>
                    </view>
                </view>
            </view>
            <view :class="['',item.isShow?'coupon-show':'coupon-hide']">
                <view class="con-msg" style="border-top:1rpx dashed #7B7B7B;">{{ item.useExplain }}</view>
            </view>
        </view>
    </view>
    <empty-state class="" imgUrl="https://eshopfile.zhiyousx.com/noCoupon@2x.png" text="暂无优惠券" v-if="showNull"></empty-state>
    <view class="footer" @click="bindCoupon($event)">
        <view class="item">
            <image mode class="icon2" src="../../static/images/bindCoupon.png"></image>
            <view class="t">兑换优惠券</view>
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
              r.e("subPage/components/empty/empty").then(function() {
                return resolve(r("3b7a"))
              }.bind(null, r)).catch(r.oe)
            }
          },
          data: function() {
            return {
              menuId: 1,
              hasMore: !0,
              orderList: [],
              totalPages: 9999,
              orderType: "",
              orderStatus: 1,
              index: 1,
              fromSkiingH5: !1,
              pageSize: 10,
              menuList: [{
                id: 1,
                name: "未使用",
                isShow: 1
              }, {
                id: 2,
                name: "已使用",
                isShow: 1
              }, {
                id: 3,
                name: "已过期/失效",
                isShow: 1
              }],
              showQrWin: !1,
              listNum: "",
              userId: "",
              showNull: !0,
              source: ""
            }
          },
          onShow: function() {
            this.pageLoad()
          },
          onLoad: function(t) {
            this.source = t.source || ""
          },
          filters: {
            timeFormat: function(t) {
              return t.replace(/-/g, ".")
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            showList: function(t) {
              var e, r = 0,
                n = this.orderList,
                o = function(t, e) {
                  var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                  if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                        if (t) {
                          if ("string" == typeof t) return a(t, e);
                          var r = Object.prototype.toString.call(t).slice(8, -1);
                          return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(t, e) : void 0
                        }
                      }(t)) || e && t && "number" == typeof t.length) {
                      r && (t = r);
                      var n = 0,
                        o = function() {};
                      return {
                        s: o,
                        n: function() {
                          return n >= t.length ? {
                            done: !0
                          } : {
                            done: !1,
                            value: t[n++]
                          }
                        },
                        e: function(t) {
                          throw t
                        },
                        f: o
                      }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                  }
                  var i, u = !0,
                    s = !1;
                  return {
                    s: function() {
                      r = r.call(t)
                    },
                    n: function() {
                      var t = r.next();
                      return u = t.done, t
                    },
                    e: function(t) {
                      s = !0, i = t
                    },
                    f: function() {
                      try {
                        u || null == r.return || r.return()
                      } finally {
                        if (s) throw i
                      }
                    }
                  }
                }(n);
              try {
                for (o.s(); !(e = o.n()).done;) {
                  e.value.userCouponId == t && ("" == n[r].isShow || null == n[r].isShow ? n[r].isShow = "true" : n[r].isShow = ""), r++
                }
              } catch (t) {
                o.e(t)
              } finally {
                o.f()
              }
              this.orderList = n
            },
            menuTap: function(t, e) {
              e = Number(e + 1), t = t, this.menuId = e, this.orderStatus = t, this.orderList = [], this.index = 1, this.pageLoad()
            },
            pageLoad: function() {
              var e = this,
                r = {
                  couponState: this.orderStatus
                };
              this.$uniApi.dataRequestYesLoading("POST", "product/app/v1/CouponReceive/myCoupon", r).then((function(r) {
                uni.stopPullDownRefresh(), 1 === r.code && (e.orderList = r.data, e.orderList.forEach((function(t, r) {
                  e.$set(e.orderList, r, Object.assign({}, t, {
                    isShow: ""
                  }))
                })), e.orderList.length > 0 ? e.showNull = !1 : e.showNull = !0)
              })).catch((function(e) {
                uni.stopPullDownRefresh()
              }))
            },
            jumpUse: function(e) {
              var r = this;
              return (0, i.default)(o.default.mark((function n() {
                var i, a, u, s, l, d;
                return o.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      if (e.jumpConfigFlag) {
                        n.next = 20;
                        break
                      }
                      if (1 != e.itemType) {
                        n.next = 9;
                        break
                      }
                      return i = {
                        couponId: e.userCouponId,
                        current: 1,
                        size: 5,
                        complex: 0,
                        complexType: 0
                      }, n.next = 5, r.$uniApi.dataRequestNoLoading("POST", "product/app/v1/item/couponCanUseItem", i, 3);
                    case 5:
                      1 == (a = n.sent).code && (1 == a.data.records.length ? uni.navigateTo({
                        url: "/subPage/pages/ticket_detail/ticket_detail?itemId=".concat(a.data.records[0].itemId)
                      }) : r.$navigateTo({
                        url: "/subPage/pages/discountsProductList/discountsProductList?couponId=" + e.userCouponId + "&threshold=" + e.threshold + "&quota=" + e.quota + "&type=" + e.type
                      })), n.next = 18;
                      break;
                    case 9:
                      if (2 != e.itemType) {
                        n.next = 17;
                        break
                      }
                      return u = {
                        couponId: e.userCouponId,
                        current: 1,
                        size: 5
                      }, n.next = 13, r.$uniApi.dataRequestNoLoading("POST", "product/app/v1/line/product/couponCanUseProduct", u, 3);
                    case 13:
                      1 == (s = n.sent).code && (1 == s.data.records.length ? uni.navigateTo({
                        url: "/subPack/pages/lineProductDetails/lineProductDetails?productId=".concat(s.data.records[0].productId)
                      }) : (l = JSON.stringify(e), uni.navigateTo({
                        url: "/subPack/pages/groupOrder/availableProducts?coupon=".concat(l)
                      }))), n.next = 18;
                      break;
                    case 17:
                      7 == e.itemType && uni.navigateTo({
                        url: "/artShow/pages/wall/wallPay?sourceType=1"
                      });
                    case 18:
                      n.next = 25;
                      break;
                    case 20:
                      if (d = e.jumpDTO) {
                        n.next = 24;
                        break
                      }
                      return r.$uni.showToast("未配置优惠券跳转地址！"), n.abrupt("return");
                    case 24:
                      0 === d.linkType && d.linkUrl ? (-1 != d.linkUrl.indexOf("?") && (d.linkUrl = d.linkUrl.replace("?", "*"), d.linkUrl = d.linkUrl.replace("=", "+")), r.$navigateTo({
                        url: "/pages/webpage/webpage?url=".concat(d.linkUrl)
                      })) : 1 === d.linkType && d.linkUrl && (["/pages/index/index", "/pages/spot_list/spot_list", "/pages/rankList/rankList", "/pages/mine/mine"].includes(d.linkUrl) ? uni.switchTab({
                        url: d.linkUrl
                      }) : r.$navigateTo({
                        url: d.linkUrl
                      }));
                    case 25:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            bindCoupon: function() {
              var t = "artShow" === this.source ? "/artShow/pages/addCoupon/addCoupon" : "/subPage/pages/addCoupon/addCoupon";
              this.$navigateTo({
                url: t
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background:#fff}.page{background:#fafafa;min-height:100vh;overflow-y:auto!important}.ticket-title{font-size:28rpx;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.top-bar{align-items:center;background:#fff;border-bottom:1rpx solid #f3f3f3;display:-webkit-flex;display:flex;height:90rpx;justify-content:flex-start;top:0}.top-bar,.top-listnum{box-sizing:border-box;left:0;position:fixed;right:0;width:100%;z-index:1000}.top-listnum{background:#ffe9e4;color:#ff7353;font-size:22rpx;height:60rpx;line-height:60rpx;text-align:center;top:100rpx}.top-bar .menu-item{color:#333;flex:1;font-size:28rpx;line-height:110rpx;text-align:center}.menuTit{display:inline-block;height:75rpx;padding-bottom:6rpx;width:200rpx}.biaoji{background:red;border-radius:50%;display:inline-block;height:13rpx;margin-left:6rpx;width:13rpx}.top-bar .menu-item.active text{background:url('https://eshopfile.zhiyousx.com/170065295248681383.png')bottom no-repeat;background-size:68rpx 14rpx;box-sizing:border-box;color:#2a2a2a;font-size:30rpx;font-weight:700}.top-bar .menu-item.active1 text{background:url('https://eshopfile.zhiyousx.com/170065297826701593.png')bottom no-repeat;background-size:120rpx 14rpx;box-sizing:border-box;color:#2a2a2a;font-size:30rpx;font-weight:700}.order-wrap{margin-top:120rpx}.coupon-box{margin:120rpx 0 100rpx}.coupon-box .coupon-item{position:relative}.coupon-box .coupon-item .line{background:linear-gradient(253deg,#fc4a9b,#ff5413)}.coupon-box .coupon-item .line,.coupon-box .coupon-item .ticket{border-radius:10rpx 10rpx 2rpx 10rpx;box-shadow:0rpx 4rpx 4rpx 0rpx rgba(0,0,0,.08);color:#fff;font-size:20rpx;font-weight:400;height:33rpx;left:22rpx;line-height:33rpx;position:absolute;text-align:center;top:-10rpx;width:52rpx}.coupon-box .coupon-item .ticket{background:#42c7ab}.coupon{background:#fff1ed;border-radius:20rpx;justify-content:space-around;line-height:1;margin:20rpx 20rpx 0rpx;padding:30rpx 0}.cou-l,.coupon{align-items:center;display:-webkit-flex;display:flex}.cou-l{background:#f1fffc;border-bottom-left-radius:30rpx;border-top-left-radius:30rpx;justify-content:flex-start;padding:30rpx;width:450rpx}.cou-l-l{color:#f15252;width:173rpx}.cou-money{color:#f15252;font-size:28rpx;font-weight:700;text-align:center}.cou-pic{color:#f15252;font-size:40rpx;margin-bottom:10rpx}.cou-pictit{color:#f15252;font-size:26rpx;line-height:50rpx;text-align:center;white-space:nowrap}.cou-l-r{padding-left:5rpx;width:300rpx}.cou-title{color:#3a3a3a;font-size:26rpx;font-weight:700;line-height:30rpx;padding-bottom:15rpx}.cou-date{color:#8f8f8f;font-size:20rpx;font-weight:400;line-height:30rpx}.cou-week{max-width:250rpx}.cou-r{height:120rpx;padding:30rpx 0;position:relative}.cou-rbox{padding:5rpx 10rpx}.rbox-img{height:90rpx;width:90rpx}.cou-btn{background:linear-gradient(52deg,#fc4a7c,#ff5411);border-radius:20rpx;color:#fefffe;font-size:24rpx;font-weight:400;height:50rpx;line-height:50rpx;text-align:center;width:120rpx}.hidebtn,.showbtn{height:40rpx;margin-top:15rpx;width:40rpx}.coupon-show{background:#fff;border-radius:30rpx;display:block;margin:0rpx 20rpx}.coupon-hide{background:#fff;border-radius:30rpx;display:none;margin:0rpx 20rpx}.con-msg{color:#868686;font-size:22rpx;font-weight:400;line-height:40rpx;margin:0 24rpx;padding:35rpx 0}.no-order{font-size:32rpx;height:327rpx;margin:300rpx auto;text-align:center;width:486rpx}.no-order-img{height:276rpx;width:380rpx}.footer{background:#fff;border-top:2rpx solid rgba(0,0,0,.1);bottom:0;display:-webkit-flex;display:flex;height:100rpx;left:0;position:fixed;width:750rpx}.footer .item{align-items:center;display:-webkit-flex;display:flex;justify-content:center;width:100%}.footer .item .icon1{height:31.34rpx;width:35rpx}.footer .item .icon2{height:29rpx;width:43rpx}.footer .item .t{color:#555;font-size:26rpx;font-weight:400;margin-left:10rpx}
</style>
