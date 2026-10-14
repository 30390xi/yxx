<template>
<u-popup borderRadius="32" class="" :closeable="true" height="70%" mode="bottom" :value="isShowBookTip" :vueSlots="['default']" @input="isShowBookTip = $event">
    <view class="ytxz-box" v-if="ydxz">
        <view class="content-box1">
            <view class="title-box">
                <view class="p1" id="ytxz-box-title">{{ydxz.itemTitle}}</view>
                <view class="p2">
                    <text class="" v-if="ydxz.scenicType!=1">{{'已'+(ydxz.skuItemType==1?'约':'售')+$root.f0}}</text>
                </view>
            </view>
            <scroll-view class="bottom-box" scrollY="true" :style="'height:'+bookTipHeight+'rpx'+';'">
                <view class="line2" v-if="$root.g0">
                    <view class="title">适用人群</view>
                    <view class="b" style="margin-bottom:8rpx;" :key="i" v-for="(des, i) in ydxz.targetGroupsRuleDescList">{{ des }}</view>
                </view>
                <view class="line1" v-if="ydxz.bookingInfoTag">
                    <view class="title">{{(ydxz.skuItemType==1?'预约':'购买')+'须知'}}</view>
                    <view class="b">
                        <view class="item" v-if="ydxz.itemUseDesc&&ydxz.itemUseDesc.dateType==1">
                            <view class="l lc" v-if="ydxz.scenicType==1">入寺先预约</view>
                            <block v-else>
                                <view class="l" v-if="ydxz.bookingInfoTag">{{ydxz.bookingInfoTag.bookingTag}}</view>
                            </block>
                            <view class="r">
                                <view class="refundItem" v-if="ydxz.bookingInfoTag.validityModeBookStr1">{{''+ydxz.bookingInfoTag.validityModeBookStr1}}</view>
                                <view class="refundItem" v-if="ydxz.bookingInfoTag.validityModeBookStr2">{{''+ydxz.bookingInfoTag.validityModeBookStr2}}</view>
                                <view class="refundItem" v-if="ydxz.bookingInfoTag.validityModeBookStr3">{{''+ydxz.bookingInfoTag.validityModeBookStr3}}</view>
                            </view>
                        </view>
                        <view class="item" v-else>
                            <view class="l lc" v-if="ydxz.scenicType==1">入寺先预约</view>
                            <block v-else>
                                <view class="l" v-if="ydxz.bookingInfoTag">{{ydxz.bookingInfoTag.bookingTag}}</view>
                            </block>
                            <view class="r" v-if="ydxz.bookingInfoTag&&ydxz.bookingInfoTag.bookingTimeStr">{{ydxz.bookingInfoTag.bookingTimeStr+(ydxz.bookingInfoTag.reserveTimeStr?'，'+ydxz.bookingInfoTag.reserveTimeStr:'')}}</view>
                        </view>
                        <view class="item" v-if="ydxz.scenicType!=1&&ydxz.bookingInfoTag">
                            <view class="l">{{ydxz.bookingInfoTag.changeTag}}</view>
                            <view class="r">{{ydxz.bookingInfoTag.changeStr}}</view>
                        </view>
                        <view class="item">
                            <view :class="['l','',ydxz.scenicType==1?'lc':'']" v-if="ydxz.bookingInfoTag">{{ydxz.bookingInfoTag.refundTag}}</view>
                            <view class="r" v-if="ydxz.bookingInfoTag&&ydxz.bookingInfoTag.refundStr&&ydxz.bookingInfoTag.refundTag!='条件退'">
                                <view class="" v-for="(item, index) in $root.l0">
                                    <view class="refundItem">{{item}}</view>
                                </view>
                            </view>
                            <view class="r" v-else>
                                <view class="">
                                    <view class="refundItem">退款规则如下：</view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="table" v-if="ydxz.bookingInfoTag&&ydxz.bookingInfoTag.refundTag=='条件退'">
                    <view class="tr first" v-if="ydxz.bookingInfoTag&&ydxz.bookingInfoTag.refundTag!='不可退'">
                        <view class="td" style="font-weight:bold;width:480rpx;">退款时间</view>
                        <view class="td" style="font-weight:bold;width:210rpx;">损失费用</view>
                    </view>
                    <view class="tr" v-if="item.timeDesc" v-for="(item, __i0__) in ydxz.refundFeeList">
                        <view class="td" style="width:480rpx;">{{item.timeDesc||''}}</view>
                        <view class="td" style="width:210rpx;">{{item.feeDesc||''}}</view>
                    </view>
                    <view class="tr" v-if="ydxz.bookingInfoTag&&ydxz.bookingInfoTag.refundStr1">
                        <view class="td" style="width:690rpx;display:block;">
                            <view class="" v-for="(it, i) in $root.l1">
                                <view class="refundItem">{{it}}</view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="line2" v-if="ydxz.scenicType!=1&&ydxz.bookingInfoTag&&(ydxz.bookingInfoTag.feeIncludes||ydxz.bookingInfoTag.feeNotIncludes)">
                    <view class="title">{{(ydxz.skuItemType==1?'预约':'费用')+'说明'}}</view>
                    <view class="b">
                        <view class="options" v-if="ydxz.bookingInfoTag.feeIncludes">
                            <view class="title">{{(ydxz.skuItemType==1?'预约':'费用')+'包含：'}}</view>
                            <view class="content">
                                <u-parse class=" vue-ref" color="#777474" ref="article" :html="ydxz.bookingInfoTag.feeIncludes" :lazyLoad="true" :tagStyle="parseStyle1"></u-parse>
                            </view>
                        </view>
                        <view class="options" v-if="ydxz.bookingInfoTag.feeNotIncludes">
                            <view class="title">{{(ydxz.skuItemType==1?'预约':'费用')+'不含：'}}</view>
                            <view class="content">
                                <u-parse class=" vue-ref" color="#777474" ref="article" :html="ydxz.bookingInfoTag.feeNotIncludes" :lazyLoad="true" :tagStyle="parseStyle1"></u-parse>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="line2" v-if="ydxz.scenicType!=1&&ydxz.bookingInfoTag&&ydxz.bookingInfoTag.entranceDetail">
                    <view class="title">使用说明</view>
                    <view class="b">
                        <u-parse class=" vue-ref" ref="article" :html="ydxz.bookingInfoTag.entranceDetail" :lazyLoad="true" :tagStyle="parseStyle1"></u-parse>
                    </view>
                </view>
                <view class="line2" v-if="ydxz.scenicType!=1&&ydxz.bookingInfoTag&&ydxz.bookingInfoTag.bookNote">
                    <view class="title">其它说明</view>
                    <view class="b">
                        <u-parse class=" vue-ref" ref="article" :html="ydxz.bookingInfoTag.bookNote" :lazyLoad="true" :tagStyle="parseStyle1"></u-parse>
                    </view>
                </view>
                <image class="community-box" mode="widthFix" :showMenuByLongpress="true" :src="ydxz.communityUrl" v-if="ydxz.communityUrl"></image>
                <view class="line3">
                    <view class="title">客服电话</view>
                    <view class="b" v-if="ydxz.scenicType!=1">
                        <view class="item">
                            <view class="col1">平台</view>
                            <view class="col2">门票或订单问题</view>
                            <view class="col3">4000292296</view>
                            <view class="col4">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/spotIntroNew/dianhua.png" @click="call('4000292296')"></image>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="line3">
                    <view class="b" v-if="ydxz.scenicType!=1">
                        <view class="item">
                            <view class="col1" style="opacity:0;">平台</view>
                            <view class="col2" style="opacity:0;">门票或订单问题</view>
                            <view class="col3">4001618666</view>
                            <view class="col4">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/spotIntroNew/dianhua.png" @click="call('4001618666')"></image>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="line3" v-for="(item, __i1__) in telephoneVoList">
                    <view class="b">
                        <view class="item">
                            <view :class="['col1','',ydxz.scenicType==1?'col1c':'']">{{(ydxz.scenicType!=1?'官方':'客堂')+''}}</view>
                            <view class="col2 singleLineText">{{item.telephoneTitle||''}}</view>
                            <view class="col3 singleLineText">{{item.telephone||''}}</view>
                            <view class="col4">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/spotIntroNew/dianhua.png"></image>
                            </view>
                        </view>
                    </view>
                </view>
                <view :class="['ydxz-bot','',showPcT&&bizType>1&&dialogInfos.itemId==ydxz.itemId?'ydxzBH':'']">-</view>
            </scroll-view>
            <subscription class="" :dialogInfos="dialogInfos" styleInfo="position: absolute;bottom: 100rpx;padding: 8rpx 40rpx;" v-if="showPcT&&bizType>1&&dialogInfos.itemId==ydxz.itemId"></subscription>
            <view class="book-box" v-if="!ydxz.scenicType">
                <view class="l" v-if="ydxz.scenicType!=1">
                    <text class="p2" v-if="ydxz.skuItemType==1&&ydxz.isFree==1">免费</text>
                    <block v-else>
                        <text class="p1">价格</text>
                        <text class="p2">{{'￥'+ydxz.marketPrice}}<text class="price-start" v-if="ydxz.startPriceFlag==1">起</text>
                        </text>
                    </block>
                </view>
                <view class="l" v-else></view>
                <block v-if="ydxz.scenicType==1">
                    <button class="btn chansi" v-if="ydxz.stockStatus&&!ydxz.sellOut" @click="buyFn(ydxz)">免费预约</button>
                    <button class="btn chansic" v-else @click="ydxzSellOut(ydxz)">{{ydxz.skuItemType==1?'约满':'售空'}}</button>
                </block>
                <block v-else>
                    <button class="btn" v-if="ydxz.stockStatus&&!ydxz.sellOut" @click="buyFn(ydxz)">{{'立即预'+(ydxz.skuItemType==1?'约':'订')+''}}</button>
                    <button class="btn emptys" v-else @click="ydxzSellOut(ydxz)">{{ydxz.skuItemType==1?'约满':'售空'}}</button>
                </block>
            </view>
        </view>
    </view>
</u-popup>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            subscription: function() {
              t.e("components/recommendedPop/subscription").then(function() {
                return resolve(t("a1b9"))
              }.bind(null, t)).catch(t.oe)
            }
          },
          props: {
            dialogInfos: {
              type: Object,
              default: function() {
                return {}
              }
            },
            telephoneVoList: {
              type: Array,
              default: function() {
                return []
              }
            }
          },
          data: function() {
            return {
              isShowBookTip: !1,
              ydxz: "",
              selectDate: "",
              bookTipHeight: 750,
              bizType: 0,
              showPcT: !1
            }
          },
          computed: {
            systemInfo: function() {
              return this.$store.getters.systemInfo
            }
          },
          watch: {},
          mounted: function() {},
          methods: {
            getTicDetail: function(o, t) {
              var e = this;
              if (!this.submitState) {
                "pt" == t && uni.showLoading({
                  title: "加载中",
                  mask: !0
                });
                var i = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item/getTicketDetailForOrder", {
                  itemId: o
                }, 2).then((function(o) {
                  if (uni.hideLoading(), e.submitState = !1, 1 === o.code) {
                    if ("jh" == t) return e.skuTicData = o.data, void e.setSkuOrderPrice();
                    e.isShowBookTip = !e.isShowBookTip, e.ydxz = o.data, e.isShowBookTip && e.$nextTick((function() {
                      setTimeout((function() {
                        i.getBookBoxInfo().then((function(n) {
                          i.bookTipHeight = i.$util.pxToRpx(.7 * i.systemInfo.windowHeight - n[0].height) - 246
                        }))
                      }), 500)
                    }))
                  } else e.$uni.showToast(o.msg)
                }))
              }
            },
            getBookBoxInfo: function() {
              var o = this;
              return new Promise((function(t) {
                o.$nextTick((function() {
                  var e = uni.createSelectorQuery().in(o);
                  e.select("#ytxz-box-title").boundingClientRect(), e.selectViewport().scrollOffset(), e.exec((function(n) {
                    t(n)
                  }))
                }))
              }))
            },
            buyFn: function(n) {
              this.$emit("buyFn", n)
            },
            brText: function(n) {
              if (n) {
                var o = n.split("#**#");
                return o.pop().split("</p>").forEach((function(n, t) {
                  if (n) {
                    var e = (n = n.split("<p>").join("")).match(/\<.*?\>/g),
                      i = n.match(/[\r\n]/g),
                      u = e || i;
                    u && u[0] && u.forEach((function(o) {
                      n = n.replaceAll(o, "")
                    })), o.push(n)
                  }
                })), o
              }
            },
            call: function(o) {
              uni.makePhoneCall({
                phoneNumber: o
              })
            },
            ydxzSellOut: function(n) {
              this.$emit("ydxzSellOut", n)
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.ytxz-box{background:#fafafa;height:100%;position:relative;width:750rpx}.ytxz-box .content-box1{padding:68rpx 30rpx 0}.ytxz-box .content-box1 .title-box{position:relative}.ytxz-box .content-box1 .title-box .p1{color:#000;font-size:36rpx;font-weight:700;line-height:50rpx;padding-right:50rpx;width:660rpx}.ytxz-box .content-box1 .title-box .p2{color:#000;font-size:28rpx;line-height:40rpx;opacity:.5;padding-bottom:32rpx;padding-top:20rpx}.ytxz-box .content-box1 .bottom-box{height:625rpx}.ytxz-box .content-box1 .bottom-box .refundItem{display:block;line-height:48rpx;padding-bottom:0rpx}.ytxz-box .content-box1 .bottom-box .line1{margin-bottom:30rpx}.ytxz-box .content-box1 .bottom-box .line1 .title{color:#333;font-size:30rpx;font-weight:700;line-height:50rpx;margin-bottom:5rpx}.ytxz-box .content-box1 .bottom-box .line1>.b .item{display:-webkit-flex;display:flex;margin-bottom:4rpx}.ytxz-box .content-box1 .bottom-box .line1>.b .item:last-child{margin-bottom:0}.ytxz-box .content-box1 .bottom-box .line1>.b .item>.l{border:2rpx solid #ff7d2a;border-radius:4rpx;border-radius:6rpx;color:#ff7d2a;font-size:22rpx;height:32rpx;line-height:28rpx;margin-right:24rpx;margin-top:9rpx;padding:0 4rpx;text-align:center;width:120rpx}.ytxz-box .content-box1 .bottom-box .line1>.b .item .lc{border:2rpx solid #a17111;color:#a17111;width:140rpx}.ytxz-box .content-box1 .bottom-box .line1>.b .item>.r{flex:1;line-height:48rpx;white-space:pre-wrap}.ytxz-box .content-box1 .bottom-box .community-box{margin-bottom:30rpx;width:690rpx}.ytxz-box .content-box1 .bottom-box .line2{margin-bottom:30rpx}.ytxz-box .content-box1 .bottom-box .line2 .title{color:#333;font-size:30rpx;font-weight:700;line-height:50rpx;margin-bottom:4rpx}.ytxz-box .content-box1 .bottom-box .line2>.b .options{align-items:baseline;display:-webkit-flex;display:flex;margin-bottom:4rpx}.ytxz-box .content-box1 .bottom-box .line2>.b .options view{color:#777474;display:-webkit-flex;display:flex;flex-direction:column;font-size:26rpx;justify-content:flex-start}.ytxz-box .content-box1 .bottom-box .line2>.b .options view.title{white-space:nowrap;width:134rpx}.ytxz-box .content-box1 .bottom-box .line2>.b .options view.content{width:564rpx}.ytxz-box .content-box1 .bottom-box .table{border:1rpx solid #e4e4e4;border-bottom:none;margin-bottom:30rpx}.ytxz-box .content-box1 .bottom-box .tr{border-bottom:1rpx solid #e4e4e4;display:-webkit-flex;display:flex}.ytxz-box .content-box1 .bottom-box .tr.first{background:#fef4f0}.ytxz-box .content-box1 .bottom-box .tr.first .td{font-weight:600}.ytxz-box .content-box1 .bottom-box .tr .1st{width:200rpx}.ytxz-box .content-box1 .bottom-box .tr .td{align-items:center;border-right:1rpx solid #e4e4e4;border-top:none;color:#656565;display:-webkit-flex;display:flex;line-height:42rpx;padding:16rpx 25rpx;text-align:left;word-break:break-all}.ytxz-box .content-box1 .bottom-box .tr .td:last-child{border-right:none}.ytxz-box .content-box1 .bottom-box .line3 .title{color:#333;font-size:30rpx;font-weight:700;line-height:50rpx}.ytxz-box .content-box1 .bottom-box .line3>.b .item{align-items:center;display:-webkit-flex;display:flex;margin-bottom:15rpx;margin-top:30rpx;position:relative}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col1{border:2rpx solid #ff7d2a;border-radius:4rpx;color:#ff7d2a;font-size:22rpx;height:32rpx;line-height:28rpx;margin-right:22rpx;padding:0 24rpx}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col1c{border:2rpx solid #a17111;color:#a17111}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col2{color:#777474;font-size:26rpx;margin-right:30rpx;width:220rpx}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col3{border-width:600;color:#333;font-size:32rpx;text-align:left;width:230rpx}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col4 image{height:32rpx;position:absolute;right:0;top:-5rpx;width:32rpx}.ytxz-box .book-box{background-color:#fff;bottom:0;box-shadow:0-1rpx 0 0#e3e3e3;display:-webkit-flex;display:flex;height:100rpx;left:0;position:absolute;width:100%}.ytxz-box .book-box>.l{align-items:center;display:-webkit-flex;display:flex;flex:1;padding-left:40rpx}.ytxz-box .book-box>.l .p1{color:#777474;font-size:26rpx;margin-right:20rpx}.ytxz-box .book-box>.l .p2{color:#ff5411;font-size:32rpx}.ytxz-box .book-box>.btn{background:linear-gradient(56deg,#fc4a9e,#ff5411);border-radius:0;color:#fff;font-size:32rpx;line-height:100rpx;width:320rpx}.ytxz-box .book-box>.btn.emptys{background:linear-gradient(253deg,#ffb2d5,#ffc1aa)}.ytxz-box .book-box>.btn.chansi{background:#c7b795}.ytxz-box .book-box>.btn.chansic{background:#c1bcb1}.ydxz-bot{height:0;opacity:0;width:0}.ydxzBH{height:60rpx}
</style>
