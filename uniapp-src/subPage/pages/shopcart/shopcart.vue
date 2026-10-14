<template>
<view class="">
    <uni-navbar bgColor="#f8f8f8" class="" title="购物车" type="fixed"></uni-navbar>
    <view class="navRight" slot="left" @click="onEditor($event)">{{isEditor?'编辑':'完成'}}</view>
    <view class="cardBox">
        <block v-if="$root.g0>0">
            <view class="cardItem" :key="index" v-for="(item, index) in $root.l1">
                <view class="merchant">
                    <uni-icons class="" color="#ff4643" size="22" type="checkbox-filled" v-if="item.selectedFlag===1"></uni-icons>
                    <uni-icons class="" color="#878787" size="22" type="circle" v-else></uni-icons>
                    <view class="mcName">
                        <image class="" src="../../static/images/sj_icon.png"></image>
                        <text class="">{{item.sellerName}}</text>
                        <uni-icons class="" color="#c8c8c8" size="14" type="arrowright"></uni-icons>
                    </view>
                </view>
                <view class="cardGoods" :key="childIndex" v-for="(childItem, childIndex) in item.l0">
                    <uni-icons class="" color="#ff4643" size="22" type="checkbox-filled" v-if="childItem.selectedFlag===1"></uni-icons>
                    <uni-icons class="" color="#878787" size="22" type="circle" v-else></uni-icons>
                    <view class="caedLeft">
                        <view class="cardImg">
                            <u-lazy-load class="" height="180" :image="childItem.picUrl" imgMode="scaleToFill"></u-lazy-load>
                        </view>
                        <view class="cardInfo">
                            <view class="shopName multilineText2">{{childItem.itemName}}</view>
                            <view class="shopsku singleLineText">{{childItem.skuName?childItem.skuName:''}}</view>
                            <view class="shopsku itemSubTitle">{{childItem.itemSubTitle?childItem.itemSubTitle:''}}</view>
                            <view class="" style="margin-top:15rpx;" v-if="childItem.cashBackAmount&&childItem.cashBackAmount!=0">
                                <text class="itemRuter">{{'返￥'+childItem.cashBackAmount}}</text>
                            </view>
                            <view class="prceNum">
                                <text class="">{{'￥'+childItem.f0}}</text>
                                <uni-number-box :childIndex="childIndex" class="numberBox" :max="200" :min="1" :parentIndex="index" :value="childItem.quantity" @change="bindNumChange()"></uni-number-box>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </block>
        <view class="cardItem" v-if="$root.g1>0">
            <view class="merchant">
                <view class="failure">
                    <text class="">失效商品</text>
                    <text class="" style="color:#ff4643;" @click="delFailure($event)">清空失效商品</text>
                </view>
            </view>
            <view class="cardGoods" :key="index" v-for="(item, index) in $root.l2">
                <view class="fText">失效</view>
                <view class="caedLeft">
                    <view class="cardImg">
                        <u-lazy-load class="" height="180" :image="item.picUrl" imgMode="scaleToFill"></u-lazy-load>
                    </view>
                    <view class="cardInfo">
                        <view class="shopName multilineText2">{{item.itemName}}</view>
                        <view class="shopsku singleLineText">{{item.skuName?item.skuName:''}}</view>
                        <view class="prceNum">
                            <text class="">{{'￥'+item.f1}}</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="cardNav" v-if="token">
        <view class="checkedAll" @click="allCilck($event)">
            <uni-icons class="" color="#ff4643" size="22" type="checkbox-filled" v-if="isCheckAll"></uni-icons>
            <uni-icons class="" color="#878787" size="22" type="circle" v-else></uni-icons>
            <text class="">全选</text>
        </view>
        <view class="cardSub">
            <text class="" v-if="isEditor">{{'合计：￥'+$root.f2}}</text>
            <button class="subBtn" v-if="isEditor" @click="goConfirm($event)">{{'结算('+presentNum+')'}}</button>
            <button class="subBtn" v-else @click="delCard($event)">{{'删除('+presentNum+')'}}</button>
        </view>
    </view>
    <block v-if="$root.g2">
        <empty-state class="" imgUrl="/static/captured/51d17a011d27445c.png" text="购物车为空"></empty-state>
        <button class="loginSub" v-if="!token" @click="e0($event)">您还没有登录，请登录后查看购物车信息</button>
    </block>
    <u-toast class=" vue-ref" ref="uToast"></u-toast>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            EmptyState: function() {
              n.e("subPage/components/empty/empty").then(function() {
                return resolve(n("3b7a"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              isEditor: !0,
              isCheckAll: !1,
              presentPrice: 0,
              presentNum: 0,
              shopCardList: [],
              cartItemList: []
            }
          },
          onShow: function() {
            this.token ? this.pageLoad() : (this.initData(), this.cartItemList = [])
          },
          onPullDownRefresh: function() {
            this.token ? this.pageLoad() : uni.stopPullDownRefresh()
          },
          filters: {
            toFixed2: function(t) {
              return t ? Number(t).toFixed(2) : "0.00"
            }
          },
          computed: {
            token: function() {
              return this.$store.getters.token
            },
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              var e = this;
              this.$uniApi.getRequestNoLoading("GET", "product/app/v1/cartInfo/getMemberCart").then((function(n) {
                if (uni.stopPullDownRefresh(), 1 === n.code) {
                  n.data.cartItemList.length > 0 && (e.cartItemList = n.data.cartItemList);
                  var o = n.data.cartSellerItems;
                  if (o.length > 0) {
                    var a, i = r(o);
                    try {
                      for (i.s(); !(a = i.n()).done;) {
                        var s = a.value,
                          c = s.cartItems.every((function(t) {
                            return 1 === t.selectedFlag
                          }));
                        s.selectedFlag = c ? 1 : 0;
                        var u, l = r(s.cartItems);
                        try {
                          for (l.s(); !(u = l.n()).done;) {
                            var f = u.value;
                            1 === f.selectedFlag ? f.selectedFlag = 1 : f.selectedFlag = 0
                          }
                        } catch (t) {
                          l.e(t)
                        } finally {
                          l.f()
                        }
                      }
                    } catch (t) {
                      i.e(t)
                    } finally {
                      i.f()
                    }
                    o.every((function(t) {
                      return 1 === t.selectedFlag
                    })) ? e.isCheckAll = !0 : e.isCheckAll = !1, e.shopCardList = o, e.getNumPrice()
                  } else e.initData()
                } else e.initData(), e.cartItemList = []
              })).catch((function(n) {
                uni.stopPullDownRefresh(), e.$uni.showToast(n.msg)
              }))
            },
            updateCartFalg: function(t, e, n) {
              var r = this,
                o = "product/app/v1/cartInfo/updateCartSku?memberId=".concat(this.userInfo.memberId, "&skuId=").concat(t, "&falg=").concat(e, "&quantity=").concat(n);
              this.$uniApi.getRequestNoLoading("PUT", o).then((function(t) {
                1 === t.code && console.log("修改成功")
              })).catch((function(t) {
                r.$uni.showToast(t.msg)
              }))
            },
            batchUpdateFlag: function(t, e) {
              var n, r = this;
              n = "all" === t ? "product/app/v1/cartInfo/batchUpdateFlag?memberId=".concat(this.userInfo.memberId, "&flag=").concat(e) : "product/app/v1/cartInfo/batchUpdateFlag?memberId=".concat(this.userInfo.memberId, "&flag=").concat(e, "&sellerId=").concat(t), this.$uniApi.getRequestNoLoading("PUT", n).then((function(t) {
                1 === t.code && console.log("修改成功")
              })).catch((function(t) {
                r.$uni.showToast(t.msg)
              }))
            },
            delCard: function() {
              var e = this;
              this.presentNum > 0 ? uni.showModal({
                title: "删除？",
                content: "确定删除购物车商品吗？",
                confirmColor: "#ff4643",
                success: function(t) {
                  if (t.confirm) {
                    var n, o = [],
                      a = r(e.shopCardList);
                    try {
                      for (a.s(); !(n = a.n()).done;) {
                        var i, s = r(n.value.cartItems);
                        try {
                          for (s.s(); !(i = s.n()).done;) {
                            var c = i.value;
                            1 === c.selectedFlag && o.push(c.skuId)
                          }
                        } catch (t) {
                          s.e(t)
                        } finally {
                          s.f()
                        }
                      }
                    } catch (t) {
                      a.e(t)
                    } finally {
                      a.f()
                    }
                    var u = "product/app/v1/cartInfo/batchDeleteCart?memberId=".concat(e.userInfo.memberId, "&skuIds=").concat(o);
                    e.$uniApi.getRequestYesLoading("DELETE", u, "删除中").then((function(t) {
                      1 === t.code && (e.pageLoad(), e.$refs.uToast.show({
                        title: "已删除",
                        type: "success"
                      }))
                    })).catch((function(t) {
                      e.$uni.showToast(t.msg)
                    }))
                  }
                }
              }) : this.$refs.uToast.show({
                title: "您还没有选择商品哦",
                type: "warning",
                position: "bottom"
              })
            },
            onEditor: function() {
              this.isEditor ? this.isEditor = !1 : this.isEditor = !0
            },
            allCilck: function() {
              if (this.shopCardList.length <= 0) return this.$refs.uToast.show({
                title: "您还没有选择商品哦",
                type: "warning",
                position: "bottom"
              });
              var t;
              t = this.isCheckAll ? 0 : 1, this.isCheckAll = t;
              var e, n = r(this.shopCardList);
              try {
                for (n.s(); !(e = n.n()).done;) {
                  var o = e.value;
                  o.selectedFlag = t;
                  var a, i = r(o.cartItems);
                  try {
                    for (i.s(); !(a = i.n()).done;) {
                      a.value.selectedFlag = t
                    }
                  } catch (t) {
                    i.e(t)
                  } finally {
                    i.f()
                  }
                }
              } catch (t) {
                n.e(t)
              } finally {
                n.f()
              }
              this.getNumPrice(), this.batchUpdateFlag("all", t)
            },
            storeCilck: function(t, e) {
              var n;
              n = 1 === t ? 0 : 1, this.shopCardList[e].selectedFlag = n, this.shopCardList[e].cartItems.forEach((function(t) {
                t.selectedFlag = n
              }));
              var r = this.shopCardList.every((function(t) {
                return 1 === t.selectedFlag
              }));
              this.isCheckAll = r, this.getNumPrice(), this.batchUpdateFlag(this.shopCardList[e].sellerId, n)
            },
            godsCilck: function(t, e, n) {
              var r;
              r = 1 === t ? 0 : 1, this.shopCardList[n].cartItems[e].selectedFlag = r;
              var o = this.shopCardList[n].cartItems.every((function(t) {
                return 1 === t.selectedFlag
              }));
              this.shopCardList[n].selectedFlag = o ? 1 : 0;
              var a = this.shopCardList.every((function(t) {
                return 1 === t.selectedFlag
              }));
              this.isCheckAll = a, this.getNumPrice(), this.updateCartFalg(this.shopCardList[n].cartItems[e].skuId, r, this.shopCardList[n].cartItems[e].quantity)
            },
            bindNumChange: function(t, e, n) {
              t <= 0 ? this.$refs.uToast.show({
                title: "最少购买一件哟!",
                type: "warning",
                position: "bottom"
              }) : t > 200 && this.$refs.uToast.show({
                title: "最多只能购买200件哟!",
                type: "warning",
                position: "bottom"
              }), this.shopCardList[e].cartItems[n].quantity !== t && this.updateCartFalg(this.shopCardList[e].cartItems[n].skuId, this.shopCardList[e].cartItems[n].selectedFlag, t), this.shopCardList[e].cartItems[n].quantity = t, this.getNumPrice()
            },
            getNumPrice: function() {
              var t = [],
                e = [];
              this.presentPrice = 0;
              var n, o = r(this.shopCardList);
              try {
                for (o.s(); !(n = o.n()).done;) {
                  var a, i = r(n.value.cartItems);
                  try {
                    for (i.s(); !(a = i.n()).done;) {
                      var s = a.value;
                      1 === s.selectedFlag && (t.push(s), e.push(s.price * s.quantity))
                    }
                  } catch (t) {
                    i.e(t)
                  } finally {
                    i.f()
                  }
                }
              } catch (t) {
                o.e(t)
              } finally {
                o.f()
              }
              this.presentNum = t.length, e.length > 0 && (this.presentPrice = this.sumArr(e))
            },
            sumArr: function(t) {
              return t.reduce((function(t, e, n, r) {
                return t + e
              }))
            },
            goStore: function(t) {
              this.$navigateTo({
                url: "/subPage/pages/storeshop/storeshop?sellerId=".concat(t)
              })
            },
            goConfirm: function() {
              if (this.presentNum > 0) {
                var t, e = [],
                  n = r(this.shopCardList);
                try {
                  for (n.s(); !(t = n.n()).done;) {
                    var o, a = r(t.value.cartItems);
                    try {
                      for (a.s(); !(o = a.n()).done;) {
                        var i = o.value,
                          s = [];
                        1 === i.selectedFlag && (s[0] = i.skuId, s[1] = i.quantity, s[2] = i.selectedFlag, s[3] = i.shareMemberId || "0", e.push(s))
                      }
                    } catch (t) {
                      a.e(t)
                    } finally {
                      a.f()
                    }
                  }
                } catch (t) {
                  n.e(t)
                } finally {
                  n.f()
                }
                e = e.join("|"), this.$navigateTo({
                  url: "/subPage/pages/affirm_order/affirm_order?type=shopcard&cartItemInfo=".concat(e)
                })
              } else this.$refs.uToast.show({
                title: "您还没有选择商品哦",
                type: "warning",
                position: "bottom"
              })
            },
            delFailure: function() {
              var e = this;
              uni.showModal({
                title: "删除",
                content: "您确定清空失效商品吗？",
                confirmColor: "#ff4643",
                success: function(t) {
                  if (t.confirm) {
                    var n, o = [],
                      a = r(e.cartItemList);
                    try {
                      for (a.s(); !(n = a.n()).done;) {
                        var i = n.value;
                        o.push(i.skuId)
                      }
                    } catch (t) {
                      a.e(t)
                    } finally {
                      a.f()
                    }
                    var s = "product/app/v1/cartInfo/batchDeleteCart?memberId=".concat(e.userInfo.memberId, "&skuIds=").concat(o);
                    e.$uniApi.getRequestYesLoading("DELETE", s, "删除中").then((function(t) {
                      1 === t.code && (e.cartItemList = [], e.$refs.uToast.show({
                        title: "已删除",
                        type: "success "
                      }))
                    })).catch((function(t) {
                      e.$uni.showToast(t.msg)
                    }))
                  }
                }
              })
            },
            goGoodsDetails: function(t) {
              this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + t
              })
            },
            initData: function() {
              this.isEditor = !0, this.isCheckAll = !1, this.presentPrice = 0, this.presentNum = 0, this.shopCardList = []
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.navRight{font-size:30rpx;margin-left:30rpx}.cardBox{padding:0 20rpx 120rpx}.cardBox .cardItem{background-color:#fff;border-radius:16rpx;margin-bottom:20rpx;padding:24rpx}.cardBox .cardItem .merchant{align-items:center;display:-webkit-flex;display:flex;margin-bottom:40rpx}.cardBox .cardItem .merchant .mcName{align-items:center;display:-webkit-flex;display:flex;margin-left:17rpx}.cardBox .cardItem .merchant .mcName>image{height:30rpx;width:30rpx}.cardBox .cardItem .merchant .mcName>text{color:#656565;font-size:24rpx;margin-left:15rpx}.cardBox .cardItem .merchant .failure{align-items:center;display:-webkit-flex;display:flex;flex:1;justify-content:space-between}.cardBox .cardItem .cardGoods{align-items:center;display:-webkit-flex;display:flex;margin:40rpx 0}.cardBox .cardItem .cardGoods .fText{background-color:#858585;border-radius:20rpx;color:#fff;font-size:16rpx;padding:2rpx 10rpx}.cardBox .cardItem .cardGoods .caedLeft{display:-webkit-flex;display:flex;flex:1;margin-left:17rpx}.cardBox .cardItem .cardGoods .caedLeft .cardImg{background-color:#e5e5e5;border-radius:4rpx;border-radius:20rpx;height:180rpx;overflow:hidden;width:180rpx}.cardBox .cardItem .cardGoods .caedLeft .cardInfo{display:-webkit-flex;display:flex;flex:1;flex-direction:column;justify-content:space-between;margin-left:20rpx;width:400rpx}.cardBox .cardItem .cardGoods .caedLeft .cardInfo .shopName{color:#222;font-size:26rpx}.cardBox .cardItem .cardGoods .caedLeft .cardInfo .shopsku{color:#858585;font-size:24rpx}.cardBox .cardItem .cardGoods .caedLeft .cardInfo .shopsku.itemSubTitle{margin-top:4rpx;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cardBox .cardItem .cardGoods .caedLeft .cardInfo .itemRuter{background:#ffeeea;border-radius:6rpx;color:#ff531d;font-size:20rpx;height:30rpx;line-height:30rpx;padding:0 10rpx}.cardBox .cardItem .cardGoods .caedLeft .cardInfo .prceNum{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.cardBox .cardItem .cardGoods .caedLeft .cardInfo .prceNum>text{color:#ff4643;font-size:28rpx}.cardNav{background-color:#fff;border-top:1rpx solid #e6e6e6;bottom:0;height:100rpx;justify-content:space-between;left:0;padding:0 20rpx;position:fixed;width:100%;z-index:99}.cardNav .checkedAll,.cardNav{align-items:center;display:-webkit-flex;display:flex}.cardNav .checkedAll>text{color:#878787;margin-left:10rpx}.cardNav .cardSub{align-items:center;display:-webkit-flex;display:flex}.cardNav .cardSub>text{color:#ff4643}.cardNav .cardSub .subBtn{background-image:linear-gradient(90deg,#ff4643,#e61714);border-radius:72rpx;color:#fff;font-size:28rpx;height:72rpx;margin-left:20rpx}.loginSub{background-image:linear-gradient(90deg,#ff4643,#f72724);border-radius:40rpx;color:#fff;font-size:24rpx;height:80rpx;line-height:80rpx;margin-top:30rpx;width:70%}
</style>
