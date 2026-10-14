<template>
<view class="container">
    <custom-nav class="" muClass="nav-bg" :scrollTop="scrollTop" title="游陕西年卡" @back="e0()"></custom-nav>
    <view class="header">
        <view class="tag-list">
            <view class="tag-item" :key="index" v-for="(item, index) in tagList">
                <image class="" :src="item.img"></image>
                <view class="">{{item.title}}</view>
                <view class="tags" :hidden="!(index==0&&totalNum>0)">{{totalNum}}</view>
                <view class="tags" :hidden="!(index==2&&waitActiveNum>0)">{{waitActiveNum}}</view>
            </view>
        </view>
    </view>
    <view class="card-body" v-if="$root.g0">
        <swiper-card class="" :list="list" @clickCalculator="openCalculator()" @checkedCard="checkedCard()"></swiper-card>
        <card-list class=" vue-ref" ref="cardList" :scrollTop="scrollTop" @handAllData="getCalcData()"></card-list>
    </view>
    <view class="content" v-else>
        <image class="" src="https://eshopfile.zhiyousx.com/2023110116325879617.png"></image>
        <view class="">暂无年卡</view>
    </view>
    <view class="" v-if="$root.g1>0">
        <view class="card-footer" v-if="currentCardInfo.buyFlag">
            <view :class="['',currentCardInfo.stockStatus>0?'':'op']" @click="showCard($event)">
                <view class="label">购卡数量</view>
                <view class="num">{{purchaseNum+'张'}}<image class="" src="https://eshopfile.zhiyousx.com/2023103015102566506.png"></image>
                </view>
            </view>
            <view :class="['',currentCardInfo.stockStatus>0?'':'op']" @click="showCard($event)">
                <view class="label">需支付</view>
                <view class="num">{{(currentCardInfo.sellPrice*100*purchaseNum/100||0)+'元'}}</view>
            </view>
            <view :class="['','red-btn',currentCardInfo.stockStatus===0&&'disabled']" @click="handlePurchaseBefore($event)">{{''+(currentCardInfo.stockStatus===0?'已售空':'立即购买')}}</view>
        </view>
        <view class="noCard" v-else>
            <view class="red-btn disabled wd">已结束</view>
        </view>
    </view>
    <calculator class="" :info="calcData" :show="calculatorShow" :status="1" @updateShow="calculatorShow = $event" @handlePurchase="handlePurchaseBefore()"></calculator>
    <u-select class="" :list="selectList" :value="selectCardShow" @confirm="confirm()" @input="selectCardShow = $event"></u-select>
    <review-popup class="" :html="currentCardInfo.warmPrompt" :show="reviewPopupShow" @updateShow="reviewPopupShow = $event" @confirm="handlePurchase()"></review-popup>
    <no-card-module class="" :show="noCardModuleShow" @updateShow="noCardModuleShow = $event"></no-card-module>
    <my-loading class="" :loadingErrText="loadingErrText" :show="loadingShow" @updateShow="loadingShow = $event"></my-loading>
    <association class=""></association>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          name: "index",
          components: {
            cardList: function() {
              r.e("yearCard/pages/index/components/cardList").then(function() {
                return resolve(r("e69f"))
              }.bind(null, r)).catch(r.oe)
            },
            swiperCard: function() {
              r.e("yearCard/pages/index/components/swiperCard").then(function() {
                return resolve(r("f503"))
              }.bind(null, r)).catch(r.oe)
            },
            calculator: function() {
              r.e("yearCard/components/calculator").then(function() {
                return resolve(r("a217"))
              }.bind(null, r)).catch(r.oe)
            },
            customNav: function() {
              Promise.all([r.e("yearCard/common/vendor"), r.e("yearCard/components/customNav")]).then(function() {
                return resolve(r("4105"))
              }.bind(null, r)).catch(r.oe)
            },
            reviewPopup: function() {
              r.e("yearCard/pages/index/components/reviewPopup").then(function() {
                return resolve(r("c7a0"))
              }.bind(null, r)).catch(r.oe)
            },
            noCardModule: function() {
              r.e("yearCard/pages/index/components/noCardModule").then(function() {
                return resolve(r("adcd"))
              }.bind(null, r)).catch(r.oe)
            },
            MyLoading: function() {
              r.e("yearCard/components/loading").then(function() {
                return resolve(r("35e6"))
              }.bind(null, r)).catch(r.oe)
            },
            association: function() {
              r.e("yearCard/pages/index/components/association").then(function() {
                return resolve(r("5472"))
              }.bind(null, r)).catch(r.oe)
            }
          },
          data: function() {
            return {
              tagList: l,
              calculatorShow: !1,
              selectCardShow: !1,
              selectList: new Array(10).fill().map((function(e, t) {
                return {
                  label: t + 1,
                  value: t + 1
                }
              })),
              purchaseNum: 1,
              scrollTop: 0,
              reviewPopupShow: !1,
              noCardModuleShow: !1,
              currentCardInfo: {},
              calcData: {},
              offsetTop: getApp().globalData.CustomBar,
              timer: null,
              list: [],
              loadingShow: !1,
              loadingErrText: "",
              totalNum: 0,
              waitActiveNum: 0,
              shareMemberId: ""
            }
          },
          onPageScroll: function(e) {
            this.scrollTop = e.scrollTop
          },
          onShareAppMessage: function() {
            return {
              title: "游陕西年卡",
              path: "/yearCard/pages/index/index",
              imageUrl: "https://eshopfile.zhiyousx.com/2023112714374536874.jpg"
            }
          },
          destroyed: function() {
            this.cleanup()
          },
          onLoad: function(e) {
            e.scene ? this.shareMemberId = e.scene : this.shareMemberId = e.shareMemberId, this.getList()
          },
          onShow: function() {
            uni.getStorageSync("token") ? this.getUserYearCardNum() : (this.totalNum = 0, this.waitActiveNum = 0)
          },
          methods: {
            getList: function() {
              var e = this;
              return (0, i.default)(a.default.mark((function t() {
                var r;
                return a.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, (0, s.yearCardListApi)();
                    case 2:
                      r = t.sent, e.list = r.data, e.list.length && e.$nextTick((function() {
                        e.checkedCard(e.list[0])
                      }));
                    case 5:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            showCard: function() {
              this.currentCardInfo.stockStatus > 0 && (this.selectCardShow = !0)
            },
            getCalcData: function(e, t) {
              this.currentCardInfo.stockStatus = t, this.calcData = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? d(Object(r), !0).forEach((function(t) {
                    (0, o.default)(e, t, r[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                  }))
                }
                return e
              }({
                buyFlag: this.currentCardInfo.buyFlag,
                stockStatus: this.currentCardInfo.stockStatus
              }, e)
            },
            checkedCard: function(e) {
              this.currentCardInfo = e, this.$refs.cardList.getYearCardDetail(this.currentCardInfo.yearCardId)
            },
            handlePurchaseBefore: function() {
              this.reviewPopupShow = !0
            },
            handleJump: function(t) {
              var r = this;
              return (0, i.default)(a.default.mark((function n() {
                return a.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      if (r.$util.isLogin("/yearCard/pages/index/index")) {
                        n.next = 2;
                        break
                      }
                      return n.abrupt("return");
                    case 2:
                      if (t !== l[3].path) {
                        n.next = 8;
                        break
                      }
                      return n.next = 5, (0, s.getCardListApi)({
                        status: 3
                      });
                    case 5:
                      if (0 !== n.sent.data.length) {
                        n.next = 8;
                        break
                      }
                      return n.abrupt("return", r.noCardModuleShow = !0);
                    case 8:
                      if (t !== l[2].path) {
                        n.next = 14;
                        break
                      }
                      return n.next = 11, (0, s.getCardListApi)({
                        status: 2,
                        activeFlag: !0
                      });
                    case 11:
                      if (0 !== n.sent.data.length) {
                        n.next = 14;
                        break
                      }
                      return n.abrupt("return", uni.showToast({
                        title: "当前没有待激活的卡片",
                        icon: "none"
                      }));
                    case 14:
                      uni.navigateTo({
                        url: t
                      });
                    case 15:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            openCalculator: function() {
              this.calculatorShow = !0
            },
            confirm: function(e) {
              this.purchaseNum = e[0].value
            },
            queryOrderStatus: function(t) {
              var r = this;
              return (0, i.default)(a.default.mark((function n() {
                var o;
                return a.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      return r.timer && r.cleanup(), n.next = 3, (0, s.queryOrderStatusApi)(t);
                    case 3:
                      if (1 === (o = n.sent).code) {
                        n.next = 8;
                        break
                      }
                      return r.loadingErrText = o.msg, setTimeout((function() {
                        r.loadingShow = !1
                      }), 2e3), n.abrupt("return");
                    case 8:
                      if ([1, 2, 3].includes(o.data)) {
                        n.next = 12;
                        break
                      }
                      return r.loadingErrText = "制卡失败，请重新购买", setTimeout((function() {
                        r.loadingShow = !1
                      }), 2e3), n.abrupt("return");
                    case 12:
                      if (3 !== o.data) {
                        n.next = 16;
                        break
                      }
                      return r.loadingShow = !1, r.loadingErrText = "", n.abrupt("return", uni.navigateTo({
                        url: "/yearCard/pages/activationCard/activationCard?orderId=" + t
                      }));
                    case 16:
                      r.timer = setTimeout((function() {
                        r.queryOrderStatus(t)
                      }), 3e3);
                    case 17:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            cleanup: function() {
              clearTimeout(this.timer)
            },
            handlePurchase: (0, c.throttle)((0, i.default)(a.default.mark((function t() {
              var r;
              return a.default.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, (0, c.subScribeMsg)([1, 2, 3]);
                  case 3:
                    return t.next = 5, (0, u.paymentApi)({
                      yearCardId: this.currentCardInfo.yearCardId,
                      price: this.currentCardInfo.sellPrice,
                      quantity: this.purchaseNum,
                      orderAmount: 100 * this.currentCardInfo.sellPrice * this.purchaseNum / 100
                    });
                  case 5:
                    return r = t.sent, this.reviewPopupShow = !1, this.loadingShow = !0, this.loadingErrText = "", t.next = 11, this.queryOrderStatus(r.data.orderId);
                  case 11:
                    t.next = 16;
                    break;
                  case 13:
                    t.prev = 13, t.t0 = t.catch(0), t.uni.hideToast && uni.navigateTo({
                      url: "/yearCard/pages/myCard/myCard?tag=1"
                    });
                  case 16:
                  case "end":
                    return t.stop()
                }
              }), t, this, [
                [0, 13]
              ])
            })))),
            getUserYearCardNum: function() {
              var e = this;
              return (0, i.default)(a.default.mark((function t() {
                var r;
                return a.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, (0, s.getUserYearCardNumApi)();
                    case 2:
                      r = t.sent, console.log(r), r.data && (e.totalNum = r.data.totalNum || 0, e.waitActiveNum = r.data.waitActiveNum || 0);
                    case 5:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.container .nav-bg{background-image:url('https://eshopfile.zhiyousx.com/2023102817122390477.png');background-size:100% 100%;height:440rpx;width:100%}.tab{align-items:center;color:#222;display:-webkit-flex;display:flex;font-size:28rpx;font-weight:400;height:100rpx;justify-content:space-around;line-height:33rpx;padding:0 40rpx}.tab .checked{color:#222;font-size:34rpx;font-weight:700;line-height:40rpx;position:relative;text-shadow:0 2px 1px rgba(0,0,0,.08)}.tab .checked::after{background-image:linear-gradient(253deg,rgba(255,84,17,0),#ff5411);border-radius:50rpx 50rpx 50rpx 50rpx;bottom:-5px;content:"";height:16rpx;position:absolute;right:0;width:100%}.divider{border-bottom:1rpx solid rgba(0,0,0,.05);display:inline-block;margin:30rpx 0;width:100%}.divider[type="dashed"]{border-bottom:1rpx dashed rgba(0,0,0,.05)}.unreal-header{background:#fff;box-shadow:0 0 10px 3px rgba(0,0,0,.05);display:-webkit-flex;display:flex;left:0;opacity:0;overflow:hidden;position:fixed;top:0;transition:all .3s linear;width:100%;z-index:30}.unreal-header .unreal-header-content{height:80rpx}.desc-explain-title{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:400;line-height:38rpx;margin-bottom:20rpx}.desc-explain-content{color:rgba(0,0,0,.7);font-size:26rpx;font-weight:400;line-height:40rpx}.red-btn{align-items:center;background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:40rpx 40rpx 40rpx 40rpx;color:#fff;display:-webkit-flex;display:flex;font-size:30rpx;font-weight:600;height:80rpx;justify-content:center;width:100%}.upload-user .upload-user-item .u-form-item{line-height:0!important}.upload-user .upload-image .u-border-bottom:after{border-bottom-width:0!important}.font-24{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400}.font-26{color:rgba(0,0,0,.8);font-size:26rpx;font-weight:400}.font-32{color:#333;font-size:32rpx;font-weight:400}.font-30{color:rgba(0,0,0,.8);font-size:30rpx;font-weight:400}.content{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;margin-top:133rpx}.content image{height:322rpx;width:374rpx}.content view{color:rgba(0,0,0,.5);font-size:26rpx;font-weight:400;line-height:30rpx;margin-top:40rpx}.op{opacity:0}.noCard{align-items:center;background:#fff;bottom:0;display:-webkit-flex;display:flex;height:160rpx;justify-content:flex-end;padding:25rpx 30rpx 55rpx 50rpx;position:fixed;width:100%;z-index:3}.wd{width:47%}.disabled{opacity:.4;pointer-events:none}.container .header,.container{position:relative}.container .header .tag-list{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;padding:50rpx 55rpx 0;width:100%}.container .header .tag-list .tag-item{position:relative}.container .header .tag-list .tag-item image{height:100rpx;width:100rpx}.container .header .tag-list .tag-item view{color:#fff;font-size:26rpx;font-weight:700;line-height:30rpx;margin-top:20rpx;text-shadow:0 2px 2px rgba(0,0,0,.1)}.container .header .tag-list .tag-item .tags{background:linear-gradient(180deg,#e10808,#fc4444);border-radius:50%;box-shadow:0 6rpx 4rpx 0 rgba(0,0,0,.15);color:#fff;font-size:24rpx;height:40rpx;line-height:40rpx;position:absolute;right:-16rpx;text-align:center;top:-40rpx;width:40rpx}.container .card-body{background:#fff;border-radius:20rpx 20rpx 0rpx 0rpx;padding-top:60rpx;position:absolute;top:420rpx;width:100%}.container .card-footer{align-items:center;background:#fff;bottom:0;display:grid;grid-template-columns:1fr 1fr 320rpx;height:160rpx;justify-content:center;padding:25rpx 30rpx 55rpx 50rpx;position:fixed;width:100%;z-index:3}.container .card-footer .label{color:rgba(0,0,0,.8);font-size:28rpx;font-weight:400;line-height:33rpx;margin-bottom:6rpx}.container .card-footer .num{align-items:center;color:#ff5411;display:-webkit-flex;display:flex;font-size:24rpx;font-weight:400;line-height:28rpx}.container .card-footer .num image{height:24rpx;margin-left:4rpx;width:24rpx}
</style>
