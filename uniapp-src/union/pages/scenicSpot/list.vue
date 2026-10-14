<template>
<view class="u-wrap page-box u-skeleton">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="top-box u-skeleton-fillet">
        <u-swiper borderRadius="0" class="" height="478" indicatorPos="none" interval="5000" :list="swiperList" name="imageUrl" @click="swiperTopClick()"></u-swiper>
        <view class="notice flex-center u-skeleton-fillet" v-if="spotDetail.noticeTitel&&spotDetail.noticeMsg" @click="openNotice($event)">
            <view class="notice-left flex-center">
                <image class="" mode="aspectFill" src="https://eshopfile.zhiyousx.com/2025052915243054575.png"></image>
                <view class="t singleLineText">{{spotDetail.noticeTitel}}</view>
            </view>
            <image class="" mode="aspectFill" src="https://eshopfile.zhiyousx.com/2025052915243415626.png"></image>
        </view>
    </view>
    <view class="module-box">
        <view class="title-box flex-center u-skeleton-fillet" @click="jumpSpot()">
            <view class="title multilineText2">{{ spotDetail.scenicName }}</view>
            <view class="flex-center title-icon">
                <image class="" mode="aspectFill" src="https://eshopfile.zhiyousx.com/2025052915243415626.png"></image>
            </view>
        </view>
        <view class="info-tips flex-center u-skeleton-fillet" @click="jumpSpotIntro()">
            <view class="it-l singleLineText">{{ (spotDetail.openTimeTitle||'开放时间') }}<text class="">｜</text>
                <block v-if="spotDetail.scenicType!=1">{{ (spotDetail.reservationNoticeTitle||'优惠政策') }}<text class="">｜</text>
                </block>{{ (spotDetail.visitNoticeTitle||'游玩须知') }}</view>
            <image class="" mode="aspectFill" src="https://eshopfile.zhiyousx.com/2025052915243415626.png"></image>
        </view>
        <coupon class="" :couponArr="couponArr" @showYh="showYh()"></coupon>
    </view>
    <view class="ticket-box u-skeleton-fillet">
        <view class="class-item-box" :id="'tic-'+ticClass.id" :key="ticIndex" v-for="(ticClass, ticIndex) in $root.l2">
            <view class="title" v-if="$root.g0>1">{{ ticClass.ticketTypeClassName }}</view>
            <view :class="['',!!item.recommendStyleUrl?'borders':'']" v-for="(item, index) in ticClass.l1">
                <image class="borderimg" mode="widthFix" :src="item.recommendStyleUrl" v-if="item.recommendStyleUrl"></image>
                <view class="item-product" v-if="item.ticketType==3">
                    <view class="img-box" style="width:160rpx;">
                        <image class="product-img" mode="aspectFill" :src="item.productPic"></image>
                        <view class="lt-tip">{{item.f0}}</view>
                        <view class="bto-tip" v-if="item.g1>0">
                            <image mode class="" src="/static/captured/b783dbfada461ad4.png"></image>
                            <view class="txt">{{item.fromCityList[0]+'出发'}}</view>
                        </view>
                    </view>
                    <view class="goods-info">
                        <view class="name multilineText2">{{item.itemTitle}}</view>
                        <view class="highLights singleLineText" style="width:300rpx;" v-if="item.lineHighlightLabelList">
                            <text class="" :key="idx" v-for="(ele, idx) in item.l0">{{''+ele+(idx===ele.g2-1?'':'/')}}</text>
                        </view>
                        <view class="tips">
                            <view class="tag it" v-if="item.lineTagList&&item.lineTagList[0]" :key="index" v-for="(tag, __i0__) in item.lineTagList">{{tag}}</view>
                        </view>
                        <view class="price-box" v-if="!item.stockStatus||item.sellOut">
                            <view class="item-btn">售罄</view>
                        </view>
                        <view class="price" v-else>
                            <label class="icon _span">￥</label>{{''+item.price}}<label class="_span" v-if="item.startPriceFlag">起</label>
                        </view>
                    </view>
                </view>
                <view class="item" :style="'background:'+(item.scenicType!=1?item.recommendStyleUrl?'none':'#FEF4F0':'#fbf8f1')+';'" v-else>
                    <view class="name multilineText2">
                        <view class="ms-box" style="width:64rpx;" v-if="item.seckillActivity==1"></view>{{ (item.itemAbbreviate||item.itemTitle) }}</view>
                    <view class="bto-box">
                        <view class="l" v-if="item.g3">
                            <view class="tic-tip" style="margin-top:20rpx;">
                                <view class="l multilineText2">{{''+item.targetGroupsRuleDescList+' >'}}</view>
                            </view>
                        </view>
                        <view class="l" v-else>
                            <view class="tic-info singleLineText" :style="'color:'+(item.scenicType!=1?'#FF7D2A':'#a17111')+';'">
                                <block v-if="item.bookingInfoTag.bookingTag">{{item.bookingInfoTag.bookingTag}}</block>
                                <block v-if="item.bookingInfoTag.reserveTimeTag">{{'｜'+item.bookingInfoTag.reserveTimeTag}}</block>
                                <block v-if="item.bookingInfoTag.refundTag">{{'｜'+item.bookingInfoTag.refundTag}}</block>
                                <block v-if="item.scenicType!=1&&item.bookingInfoTag.changeTag">{{'｜'+item.bookingInfoTag.changeTag}}</block>
                            </view>
                            <view class="tic-tip">
                                <view class="l">
                                    <block v-if="item.scenicType!=1">{{'已'+(item.skuItemType==1?'约':'售')+item.f1}}<text class="">｜</text>
                                    </block>{{'预'+(item.skuItemType==1?'约':'订')+'须知'}}</view>
                                <uni-icons class="" color="#D3D3D3" size="14" type="arrowright"></uni-icons>
                            </view>
                        </view>
                        <view class="r">
                            <view class="price" v-if="item.scenicType!=1">
                                <view class="freePrice" v-if="item.skuItemType==1&&item.isFree==1">免费</view>
                                <block v-else>
                                    <text class="del-price" v-if="item.retailPrice>item.price">{{'¥'+item.retailPrice}}</text>{{'¥'+(item.seckillActivity==1?item.seckillPrice:item.price)}}<text class="price-start" v-if="item.startPriceFlag==1">起</text>
                                </block>
                            </view>
                            <view class="btns" v-if="userInfo&&userInfo.isFenxiao&&item.maxReward&&item.stockStatus&&!item.sellOut">
                                <view class="btn both">
                                    <view class="share">
                                        <text class="">分享赚</text>
                                        <text class="">{{'￥'+item.maxReward}}</text>
                                        <button class="sharebtn" :data-id="item.itemId" :data-imgurl="item.defaultPicUrl" :data-title="item.itemTitle"></button>
                                    </view>
                                    <view :class="['book','yd','',item.scenicType==1?'btc':'']">{{'预'+(item.skuItemType==1?'约':'订')+''}}</view>
                                </view>
                            </view>
                            <block v-else>
                                <button :class="['btn','',item.scenicType==1?'btc':'']" v-if="item.stockStatus&&!item.sellOut">
                                    <block v-if="item.scenicType==1">免费预约</block>
                                    <block v-else>{{'预'+(item.skuItemType==1?'约':'订')+''}}</block>
                                </button>
                                <button :class="['btn','emptys','',item.scenicType==1?'btce':'']" v-else>{{item.skuItemType==1?'约满':'售空'}}</button>
                            </block>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <u-skeleton :animation="true" class="" :loading="loadingStatus"></u-skeleton>
    <coupon-pop class=" vue-ref" :couponDetailArr="couponDetailArr" ref="couponPop" :spotId="spotId" @getCouponDetail="getSpotCoupons()"></coupon-pop>
    <sku class=" vue-ref" ref="skuP" :detailObj="detailObj" @showSku="showSku()" @showBookTip="showBookTip()" @showAllTime="showAllTimeM()" @buyFn="buyFn()"></sku>
    <notice-p class=" vue-ref" ref="noticeP" :detailObj="spotDetail"></notice-p>
    <book-info :bizType="bizType" :bookTipHeight="bookTipHeight" class=" vue-ref" ref="bookInfoBox" :dialogInfos="dialogInfos" :selectDate="selectDate" :showPcT="showPcT" :ydxz="ydxz" @ydxzSellOut="ydxzSellOut()" @buyFn="buyFn()"></book-info>
    <view class="foot-box flex-center" @click="jumpOrder($event)">
        <image class="" mode="aspectFill" src="https://eshopfile.zhiyousx.com/2025060316014824344.png"></image>我的订单</view>
    <u-popup borderRadius="30" class="" mode="bottom" :value="sharePopup" :vueSlots="['default']" @input="sharePopup = $event">
        <view class="share-box">
            <view class="title">分享到</view>
            <view class="icon-box" v-if="$root.g4">
                <view class="item">
                    <image mode class="icon" src="https://eshopfile.zhiyousx.com/2022090510365178497.png"></image>
                    <view class="t">微信好友</view>
                    <button class="sharebtn" data-aaa="111" openType="share"></button>
                </view>
                <view class="item" v-if="$root.g5" @click="e0($event)">
                    <image mode class="icon" src="https://eshopfile.zhiyousx.com/2022090510374178970.png"></image>
                    <view class="t">小程序码</view>
                </view>
                <view class="item" v-if="$root.g6" @click="e1($event)">
                    <image mode class="icon" src="https://eshopfile.zhiyousx.com/2022090510375744214.png"></image>
                    <view class="t">海报</view>
                </view>
            </view>
            <view class="close" @click="e2($event)">取消</view>
        </view>
    </u-popup>
    <u-popup class=" vue-ref" ref="uPopup" :maskCloseAble="false" mode="center" :value="showShareImg" :vueSlots="['default']" @input="showShareImg = $event">
        <view class="notice-box">
            <image class="notice-img" mode="widthFix" :showMenuByLongpress="true" :src="postUrl1"></image>
            <image mode class="notice-close" src="/static/captured/e6819c818da3962f.png" @click="e3($event)"></image>
        </view>
    </u-popup>
    <u-popup class=" vue-ref" ref="uPopup" :maskCloseAble="false" mode="center" :value="showQrCode" :vueSlots="['default']" @input="showQrCode = $event">
        <view class="notice-box">
            <image class="notice-img" mode="widthFix" :showMenuByLongpress="true" :src="qrCode"></image>
            <image mode class="notice-close" src="/static/captured/e6819c818da3962f.png" @click="e4($event)"></image>
        </view>
    </u-popup>
    <l-painter class="" customStyle="position: fixed; left: 200%" :isCanvasToTempFilePath="true" :vueSlots="['default']" v-if="qrCode&&ticketpostObj&&ticketpostObj.sharePosterUrl" @success="e5()">
        <l-painter-image class="" css="object-fit: fill;width:750rpx;" :src="ticketpostObj.sharePosterUrl"></l-painter-image>
        <l-painter-image class="" css="object-fit: fill;width:750rpx;" src="https://eshopfile.zhiyousx.com/2022090511375406833.png"></l-painter-image>
        <l-painter-image class="" css="object-fit: fill;width:155rpx;height:155rpx;position:absolute;bottom:13rpx;right:46rpx" :src="qrCode"></l-painter-image>
    </l-painter>
    <l-painter class="" css="width: 452rpx; height:363rpx;position:fixed;bottom:0;left:0;" customStyle="position: fixed; left: 200%" :isCanvasToTempFilePath="true" :vueSlots="['default']" @success="e6()">
        <l-painter-image class="" css="object-fit: cover; object-position: 50% 50%;width:452rpx;height:362rpx;" :src="ticketpostObj.defaultPicUrl"></l-painter-image>
        <l-painter-view class="" css="position:absolute;width:452rpx;height:82rpx;bottom:00rpx;left:0; background:#ffffff;" :vueSlots="['default']">
            <l-painter-text class="" css="font-size:32rpx;font-weight:600;line-height:82rpx;color:#FF5411;margin-left:20rpx;white-space:no-wrap;word-break: keep-all;" text="￥"></l-painter-text>
            <l-painter-text class="" css="font-size:32rpx;font-weight:600;line-height:82rpx;color:#FF5411;white-space:no-wrap;word-break: keep-all;" :text="ticketpostObj.price+' '"></l-painter-text>
            <l-painter-text class="" css="font-size: 20rpx;line-height:82rpx;text-decoration:line-through;margin-left:10rpx;color:#D0D0D0;" text="￥"></l-painter-text>
            <l-painter-text class="" css="font-size: 20rpx;line-height:82rpx;text-decoration:line-through;color:#D0D0D0;white-space:no-wrap;word-break: keep-all;" :text="ticketpostObj.marketPrice+' '"></l-painter-text>
            <l-painter-text class="" css="height:60rpx;margin-top:11rpx;background:linear-gradient(56deg, #FC4A9E 0%, #FF5411 100%);width:200rpx;position:absolute;text-align:center;font-size:26rpx;color:#ffffff;white-space:no-wrap;word-break: keep-all;border-radius:30rpx;right:11rpx;bottom:11rpx;" :text="ticketpostObj.skuItemType==1?'立即预约':'立即预订'"></l-painter-text>
        </l-painter-view>
    </l-painter>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            coupon: function() {
              i.e("union/components/coupon").then(function() {
                return resolve(i("b2aa"))
              }.bind(null, i)).catch(i.oe)
            },
            bookInfo: function() {
              i.e("components/poi/bookInfo").then(function() {
                return resolve(i("f822"))
              }.bind(null, i)).catch(i.oe)
            },
            couponPop: function() {
              i.e("union/components/couponPop").then(function() {
                return resolve(i("d7d22"))
              }.bind(null, i)).catch(i.oe)
            },
            sku: function() {
              Promise.all([i.e("common/vendor"), i.e("components/poi/sku")]).then(function() {
                return resolve(i("0600"))
              }.bind(null, i)).catch(i.oe)
            },
            noticeP: function() {
              i.e("union/components/noticeP").then(function() {
                return resolve(i("35d0"))
              }.bind(null, i)).catch(i.oe)
            },
            sharePop: function() {
              i.e("union/components/sharePop").then(function() {
                return resolve(i("3d75"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          data: function() {
            return {
              swiperList: [],
              couponArr: [],
              couponDetailArr: [],
              spotId: "",
              ticketArr: "",
              spotDetail: "",
              loadingStatus: !0,
              qrCode: "",
              postUrl1: "",
              postUrl: "",
              postUrl2: "",
              postUrl3: "",
              sharePopup: !1,
              ticketpostObj: null,
              showQrCode: !1,
              showShareImg: !1,
              showTicketSku: !1
            }
          },
          filters: {
            travelModeFilter: function(e) {
              return {
                0: "全部",
                1: "跟团游",
                2: "一日游",
                3: "自由行",
                4: "研学游"
              } [e + 1]
            }
          },
          watch: {
            sharePopup: function(e) {
              e || (this.ticketpostObj = null, this.postUrl1 = "", this.qrCode = "", this.postUrl3 = "")
            },
            postUrl1: function(t) {
              this.ticketpostObj && t && this.ticketpostObj.shareType.indexOf("3") > -1 && (uni.hideLoading(), this.sharePopup = !0)
            },
            postUrl2: function(t) {
              this.ticketpostObj && this.ticketpostObj.defaultPicUrl && this.ticketpostObj.shareType.indexOf("3") < 0 && (uni.hideLoading(), this.sharePopup = !0), this.ticketpostObj ? this.postUrl3 = t : this.postUrl3 = ""
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          onShareAppMessage: function(e) {
            if (this.ticketpostObj) {
              var t = Object.assign(this.ticketpostObj, {}),
                i = this.postUrl3,
                n = "/subPage/pages/ticket_detail/ticket_detail?itemId=".concat(t.itemId);
              return {
                title: t.itemTitle,
                path: this.$util.setShareUrl(n),
                imageUrl: i
              }
            }
            var o = this.spotDetail.shareDescList,
              s = "我在".concat(this.spotDetail.scenicName, "等你，约吗？"),
              a = this.postUrl;
            return o && o[0] && (s = o[Math.random() * o.length | 0]), this.spotDetail.shareImage && (a = this.spotDetail.shareImage), {
              title: s,
              imageUrl: a,
              path: this.$util.setShareUrl("union/pages/scenicSpot/list?spotId=".concat(this.spotId))
            }
          },
          onHide: function() {},
          onLoad: function(e) {
            this.spotId = e.spotId, this.getSpotDetail(), this.getTicketTypeIByScenicId()
          },
          onShow: function() {},
          onPageScroll: function(e) {},
          onReachBottom: function() {},
          methods: {
            showSku: function() {
              this.showTicketSku = !0
            },
            showAllTimeM: function() {
              this.showAllTime = !0
            },
            hitClick: function(t) {
              this.$eventAnalyse.analyse({
                eventTag: "simpleSpot_ticketShare_click",
                eventName: "简版景区门票分享赚点击",
                eventParams: {
                  itemId: t.itemId
                }
              }), t.shareType.indexOf("3") < 0 && (t.sharePosterUrl = ""), this.ticketpostObj = t, uni.showLoading({
                title: "卡片生成中..."
              }), (this.ticketpostObj.shareType.indexOf("3") > -1 || this.ticketpostObj.shareType.indexOf("2") > -1) && this.getminiQr(t)
            },
            getminiQr: function(e) {
              var t = this;
              this.$uniApi.dataRequestYesLoading("POST", "manager/app/wx/getminiLongSceneQr", {
                itemId: e.itemId,
                referenceId: this.userInfo.memberId,
                page: "subPage/pages/ticket_detail/ticket_detail",
                scene: "",
                width: ""
              }).then((function(e) {
                1 === e.code && (t.qrCode = e.data.baseData)
              }))
            },
            openNotice: function() {
              this.$eventAnalyse.analyse({
                eventTag: "simpleSpot_notice_click",
                eventName: "简版景区公告点击",
                eventParams: {
                  spotId: this.spotId
                }
              }), this.$refs.noticeP.showNotice = !0
            },
            getSpotDetail: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "base/app/v1/scenicSpot/getAppScenicSpotDetailSimplified?scenicId=".concat(this.spotId)).then((function(i) {
                if (1 != i.code) return t.$uni.showToast(i.msg), void setTimeout((function() {
                  getCurrentPages().length < 2 ? uni.switchTab({
                    url: "/pages/index/index"
                  }) : t.$util.prevPage()
                }), 500);
                t.spotDetail = i.data;
                var n = i.data.simplifiedBannerList;
                n && n.length > 1 || (n = i.data.mainPictureList.map((function(e) {
                  return {
                    imageUrl: e,
                    linkType: -1
                  }
                }))), t.swiperList = n, 1 == i.data.simplifiedCouponFlag && t.getSpotCoupons(), t.loadingStatus = !1
              }))
            },
            showBookTip: function(e, t) {
              if (this.$eventAnalyse.analyse({
                  eventTag: "simpleSpot_bookTip_click",
                  eventName: "简版景区门票规则点击",
                  eventParams: {
                    itemId: e.itemId,
                    ticketType: e.ticketType
                  }
                }), 2 == e.ticketType) return !e.stockStatus || e.sellOut ? void this.$uni.showToast("已售空") : void this.$refs.skuP.setTicketType(e.itemId);
              this.$refs.bookInfoBox.getTicDetail(e.itemId, "pt")
            },
            getSpotCoupons: function() {
              var e = this,
                t = this,
                i = {
                  itemType: 1,
                  scenicId: this.spotId,
                  classSource: 2
                };
              this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/getCanReceiveOrUseCouponList", i).then((function(i) {
                if (t.couponDetailArr = i.data, 1 == i.code) {
                  var n = i.data;
                  if (0 != n.length) {
                    var o = [];
                    if (n && n[0]) {
                      for (var s = 0; s < n.length; ++s) {
                        var a = n[s],
                          r = String(a.couponAmount),
                          c = String(a.couponFullAmount);
                        a.couponFullAmount > 0 ? "满".concat(c, "减").concat(r, "券") : "".concat(r, "元无门槛券"), o.push(a)
                      }
                      e.couponArr = o
                    }
                  } else e.couponArr = []
                } else e.$uni.showToast(i.msg)
              }))
            },
            getTicketTypeIByScenicId: function(t, i) {
              var n = this,
                o = this;
              o.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item/getScenicItemListSimplified", {
                scenicId: this.spotId
              }).then((function(e) {
                1 == e.code ? o.ticketArr = e.data || {} : n.$uni.showToast(e.msg)
              })).catch((function(t) {
                uni.hideLoading()
              }))
            },
            showYh: function() {
              this.$eventAnalyse.analyse({
                eventTag: "simpleSpot_coupon_click",
                eventName: "简版景区优惠券按钮点击",
                eventParams: {
                  spotId: this.spotId
                }
              }), this.$refs.couponPop.showYhMask = !0
            },
            jumpSpot: function() {
              var e = "/pages/spotDetailNew/spotDetailNew?spotId=".concat(this.spotId);
              this.$eventAnalyse.analyse({
                eventTag: "simpleSpot_name_click",
                eventName: "简版景区名称点击",
                eventParams: {
                  jumpUrl: e
                }
              }), this.$navigateTo({
                url: e
              })
            },
            jumpSpotIntro: function() {
              var e = "/subPage/pages/spotIntroNew/spotIntroNew?spotId=".concat(this.spotId, "&isCS=").concat(this.spotDetail.scenicType ? 1 : "");
              this.$eventAnalyse.analyse({
                eventTag: "simpleSpot_preferentialPolicies_click",
                eventName: "简版景区优待政策点击",
                eventParams: {
                  jumpUrl: e
                }
              }), this.$navigateTo({
                url: e
              })
            },
            buyFn: function(t) {
              if (t.itemId)
                if (this.$eventAnalyse.analyse({
                    eventTag: "simpleSpot_buy_click",
                    eventName: "简版景区预定按钮",
                    eventParams: {
                      itemId: t.itemId,
                      ticketType: t.ticketType
                    }
                  }), 2 != t.ticketType) {
                  var i = this.showTicketSku ? 1 : 0;
                  if (this.$refs.skuP.showTicketSku = !1, 1 != t.jumpFlag) {
                    var o = "/subPage/pages/ticketFillOrder/ticketFillOrder?ticketId=".concat(t.itemId),
                      s = "",
                      a = uni.getStorageSync("userInfor").chansiOpenId,
                      r = 0;
                    if (1 == t.groupFlag && (o = "/subPage/pages/packPlaceOrder/packPlaceOrder?ticketId=".concat(t.itemId)), 1 == i && this.$refs.skuP.skuData && this.$refs.skuP.skuData.aggregationItemId && (o += "&aggregationItemId=".concat(this.$refs.skuP.skuData.aggregationItemId)), this.shareMemberId && (o += "&shareMemberId=".concat(this.shareMemberId)), this.selectedHour && this.selectedHour.itemId == t.itemId ? o += "&selectedDate=".concat(this.selectedHour.date) : this.selectedHour = "", 1 == this.spotDetail.scenicType && (s = "https://eshop.zhiyousx.com/dsmall-admin-ui/h5/temple.html?itemId=".concat(t.itemId), o += "&isCs=true", r = 1), this.$util.isLogin(o, r, s)) {
                      var c = this.spotDetail.telephoneVoList;
                      if (c && c[0] && uni.setStorageSync("telephoneVoList", c), s && !a) return void uni.navigateTo({
                        url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(s)
                      });
                      this.$navigateTo({
                        url: o
                      })
                    }
                  } else 2 == t.jumpType ? uni.navigateTo({
                    url: "/pages/webpage/webpage?urlEncode=".concat(encodeURIComponent(t.jumpUrl))
                  }) : "wxf2cca76ae0520e33" == t.jumpAppId ? this.$navigateTo({
                    url: t.jumpUrl
                  }) : n.openEmbeddedMiniProgram({
                    appId: t.jumpAppId,
                    path: t.jumpUrl
                  })
                } else this.$refs.skuP.setTicketType(t.itemId)
            },
            jumpOrder: function() {
              var e = "/pages/myorder/myorder?type=0";
              this.$eventAnalyse.analyse({
                eventTag: "simpleSpot_myOrder_click",
                eventName: "简版景区我的订单点击",
                eventParams: {
                  jumpUrl: e
                }
              }), this.$util.isLogin(e) && this.$navigateTo({
                url: e
              })
            },
            swiperTopClick: function(e) {
              this.bannerClick(this.swiperList[e], {
                eventTag: "simpleSpot_banner_click",
                eventName: "简版景区轮播banner点击"
              })
            },
            bannerClick: function(t, i) {
              this.isClickNotice = !0, this.$eventAnalyse.analyse(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var i = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? a(Object(i), !0).forEach((function(t) {
                    (0, s.default)(e, t, i[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                  }))
                }
                return e
              }({
                eventParams: {
                  advertId: t.advertId,
                  advertName: t.advertName
                }
              }, i)), 0 === t.linkType && t.linkUrl ? (-1 != t.linkUrl.indexOf("?") && (t.linkUrl = t.linkUrl.replace("?", "*"), t.linkUrl = t.linkUrl.replace("=", "+")), this.$navigateTo({
                url: "/pages/webpage/webpage?url=".concat(t.linkUrl)
              })) : 1 === t.linkType ? 1 === t.objType ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=".concat(t.linkUrl)
              }) : 4 === t.objType || 7 === t.objType || 8 === t.objType || 9 === t.objType ? this.$navigateTo({
                url: "/pages/spotDetail/spotDetail?spotId=".concat(t.linkUrl)
              }) : 3 === t.objType ? this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=" + t.linkUrl
              }) : 2 === t.objType ? this.$util.cityJump(t.contentType, t.linkUrl) : 5 === t.objType && (["/pages/index/index", "/pages/spot_list/spot_list", "/pages/rankList/rankList", "/pages/mine/mine"].includes(t.linkUrlExtend) ? uni.switchTab({
                url: t.linkUrlExtend
              }) : this.$navigateTo({
                url: t.linkUrlExtend
              })) : 2 === t.linkType ? "wxf2cca76ae0520e33" == t.appId ? this.$navigateTo({
                url: t.linkUrl
              }) : e.openEmbeddedMiniProgram({
                appId: t.appId,
                path: t.linkUrl
              }) : 3 === t.linkType ? (uni.setStorageSync("richtext", t.linkUrl), this.$navigateTo({
                url: "/pages/richtext/richtext"
              })) : 8 == t.linkType && uni.navigateTo({
                url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=3&room_appid=wxf2cca76ae0520e33&amp;type=1&amp;share_openid=ojWxP5dKQbj5En3Vh8MDC23Y_J5k&amp;custom_params=&amp;close_picture_in_picture_mode=0&amp;open_share_ticket=0&amp;lottery_id=0"
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.flex-center{align-items:center;display:-webkit-flex;display:flex}.page-box{background:#fff;min-height:100vh;padding-bottom:120rpx}.page-box .top-box{background:#fff;height:478rpx;position:relative;width:750rpx;z-index:10}.page-box .top-box .notice{background:linear-gradient(180deg,#ffebe4,#e4bab6);border-radius:30rpx 30rpx 0 0;bottom:20rpx;height:60rpx;justify-content:space-between;left:30rpx;padding:0 20rpx;position:absolute;width:690rpx}.page-box .top-box .notice image{height:20rpx;width:20rpx}.page-box .top-box .notice .notice-left image{height:32rpx;margin-right:4rpx;width:32rpx}.page-box .top-box .notice .notice-left .t{color:#333;font-size:28rpx;width:600rpx}.page-box .module-box{background:#fff;border-radius:20rpx 20rpx 0 0;margin-top:-20rpx;padding:40rpx 30rpx;position:relative;width:750rpx;z-index:20}.page-box .module-box .title-box{justify-content:space-between;width:690rpx}.page-box .module-box .title-box .title{color:#000;font-size:40rpx;line-height:58rpx;width:610rpx}.page-box .module-box .title-box .title-icon{background:#fff1ed;border-radius:50%;box-shadow:0rpx 4rpx 0rpx 0rpx rgba(0,0,0,.05);height:44rpx;justify-content:center;width:44rpx}.page-box .module-box .title-box .title-icon image{height:32rpx;width:32rpx}.page-box .module-box .info-tips{background:#f7f7f7;border-radius:8rpx;height:54rpx;margin-top:20rpx;padding:0 10rpx;width:690rpx}.page-box .module-box .info-tips .it-l{color:#805c27;font-size:24rpx}.page-box .module-box .info-tips image{height:20rpx;margin-left:4rpx;width:20rpx}.page-box .ticket-box{padding:0 30rpx}.page-box .ticket-box .class-item-box{padding-top:20rpx}.page-box .ticket-box .class-item-box .title{color:#222;font-size:36rpx;font-weight:700;line-height:52rpx;margin-bottom:20rpx}.page-box .ticket-box .class-item-box .borders{position:relative}.page-box .ticket-box .class-item-box .borders .borderimg{margin-bottom:30rpx;pointer-events:none;position:relative;width:100%;z-index:2}.page-box .ticket-box .class-item-box .borders .item{background:none;position:absolute;top:90rpx;width:690rpx;z-index:3}.page-box .ticket-box .class-item-box .item{background:#fef4f0;border-radius:20rpx;clear:both;margin-bottom:30rpx;padding:30rpx}.page-box .ticket-box .class-item-box .item .name{color:#333;font-size:30rpx;line-height:40rpx}.page-box .ticket-box .class-item-box .item .name text{font-size:30rpx}.page-box .ticket-box .class-item-box .item .name .ms-box{background:url('https://eshopfile.zhiyousx.com/2021060921340065204.png')50%no-repeat;background-size:64rpx 30rpx;color:#fff;display:inline-block;font-size:18rpx;height:30rpx;margin-top:8rpx;text-align:center;vertical-align:top;width:64rpx}.page-box .ticket-box .class-item-box .item .bto-box{display:-webkit-flex;display:flex;justify-content:space-between;margin-top:5rpx}.page-box .ticket-box .class-item-box .item .bto-box>.l{width:405rpx}.page-box .ticket-box .class-item-box .item .bto-box>.l .name,.page-box .ticket-box .class-item-box .item .bto-box>.l .time{color:#333;font-size:30rpx;height:80rpx;line-height:40rpx}.page-box .ticket-box .class-item-box .item .bto-box>.l .name text,.page-box .ticket-box .class-item-box .item .bto-box>.l .time text{font-size:30rpx}.page-box .ticket-box .class-item-box .item .bto-box>.l .name .ms-box{background:url('https://eshopfile.zhiyousx.com/2021060921340065204.png')50%no-repeat;background-size:64rpx 30rpx;color:#fff;display:inline-block;font-size:18rpx;height:30rpx;margin-top:8rpx;text-align:center;vertical-align:top;width:64rpx}.page-box .ticket-box .class-item-box .item .bto-box>.l .tic-info{color:#ff7d2a;font-size:22rpx;line-height:32rpx;padding-bottom:8rpx;padding-top:20rpx}.page-box .ticket-box .class-item-box .item .bto-box>.l .tic-info text{color:#ff7d2a;font-size:22rpx}.page-box .ticket-box .class-item-box .item .bto-box>.l .tic-tip{align-items:center;display:-webkit-flex;display:flex}.page-box .ticket-box .class-item-box .item .bto-box>.l .tic-tip view{color:rgba(0,0,0,.5);font-size:24rpx;line-height:40rpx;margin-right:10rpx}.page-box .ticket-box .class-item-box .item .bto-box>.l .tic-tip view text{color:rgba(0,0,0,.5);font-size:24rpx}.page-box .ticket-box .class-item-box .item .bto-box>.l .tic-tip image{height:48rpx;width:48rpx}.page-box .ticket-box .class-item-box .item .bto-box>.r{align-items:flex-end;display:-webkit-flex;display:flex;flex-direction:column;position:relative}.page-box .ticket-box .class-item-box .item .bto-box>.r .price{color:#ff5411;font-size:32rpx;font-weight:700;line-height:42rpx;margin-bottom:70rpx}.page-box .ticket-box .class-item-box .item .bto-box>.r .price .del-price{color:rgba(0,0,0,.5);font-size:22rpx;line-height:32rpx;margin-bottom:8rpx;margin-right:10rpx;text-decoration:line-through}.page-box .ticket-box .class-item-box .item .bto-box>.r .price .freePrice{color:#ff5411;text-align:center;width:110rpx}.page-box .ticket-box .class-item-box .item .bto-box>.r .fanxian{background:#fff0ea;display:-webkit-flex;display:flex;height:30rpx;margin-bottom:30rpx;overflow:hidden}.page-box .ticket-box .class-item-box .item .bto-box>.r .fanxian>view{border-radius:6rpx;color:#ff5038;font-size:20rpx;line-height:30rpx;padding:0 10rpx;text-align:center}.page-box .ticket-box .class-item-box .item .bto-box>.r .fanxian>.l{background:linear-gradient(56deg,#fc4a9e,#ff5411);color:#fff}.page-box .ticket-box .class-item-box .item .bto-box>.r .btn{background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:30px;bottom:1rpx;color:#fff;font-size:26rpx;height:60rpx;line-height:60rpx;margin:unset;position:absolute;right:0;white-space:nowrap;word-break:normal}.page-box .ticket-box .class-item-box .item .bto-box>.r .btn.emptys{background:linear-gradient(253deg,#ffb2d5,#ffc1aa)}.page-box .ticket-box .class-item-box .item .bto-box>.r .btn.btc{background:#c7b795}.page-box .ticket-box .class-item-box .item .bto-box>.r .btn.btce{background:#c1bcb1}.page-box .ticket-box .class-item-box .item .bto-box>.r .btns{bottom:1rpx;height:70rpx;position:absolute;right:0;width:220rpx}.page-box .ticket-box .class-item-box .item .bto-box>.r .btns .btn{background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:40rpx;height:100%;overflow:hidden;width:100%}.page-box .ticket-box .class-item-box .item .bto-box>.r .btns .ali-btn{background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:40rpx;color:#fff;overflow:hidden}.page-box .ticket-box .class-item-box .item .bto-box>.r .btns .cashback{color:#fff;font-size:26rpx;line-height:70rpx;text-align:center}.page-box .ticket-box .class-item-box .item .bto-box>.r .btns .both{display:-webkit-flex;display:flex}.page-box .ticket-box .class-item-box .item .bto-box>.r .btns .both>view{flex:1;line-height:normal}.page-box .ticket-box .class-item-box .item .bto-box>.r .btns .both .share{align-items:center;background:linear-gradient(52deg,#ffd913,#ffcd4b);display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;position:relative}.page-box .ticket-box .class-item-box .item .bto-box>.r .btns .both .share .sharebtn{background:none;height:100%;position:absolute;width:100%;z-index:2}.page-box .ticket-box .class-item-box .item .bto-box>.r .btns .both .share text{color:#461515;font-size:22rpx;padding-left:10rpx}.page-box .ticket-box .class-item-box .item .bto-box>.r .btns .both .book{align-items:center;background:linear-gradient(253deg,#ff5413,#fc4a9b);color:#fff;display:-webkit-flex;display:flex;font-size:26rpx;justify-content:center}.page-box .ticket-box .class-item-box .item .bto-box>.r .btns .both .back{background:linear-gradient(253deg,#ff5413,#fc4a9b);flex-direction:column}.page-box .ticket-box .class-item-box .item .bto-box>.r .btns .both .back text{color:#fff;font-size:22rpx;padding-right:10rpx}.page-box .ticket-box .class-item-box .item .bto-box>.r .btns .both .yd{line-height:70rpx}.page-box .foot-box{background:#fff;bottom:0;box-shadow:0rpx -1rpx 1rpx 0rpx rgba(0,0,0,.2);color:rgba(30,27,25,.8);font-size:28rpx;height:100rpx;justify-content:center;left:0;position:fixed;width:750rpx;z-index:100}.page-box .foot-box image{height:32rpx;margin-right:10rpx;width:32rpx}.share-box{background:#fff;height:440rpx;padding:40rpx 50rpx 50rpx;width:100%}.share-box .title{color:#333;font-size:26rpx;line-height:40rpx;margin-bottom:30rpx;text-align:center;width:100%}.share-box .icon-box{align-items:center;display:-webkit-flex;display:flex;margin-bottom:80rpx}.share-box .icon-box .item{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;margin-right:10px;position:relative;width:150rpx}.share-box .icon-box .item .icon{height:100rpx;margin-bottom:16rpx;width:100rpx}.share-box .icon-box .item .t{color:#333;font-size:26rpx;line-height:40rpx;white-space:nowrap}.share-box .icon-box .item .sharebtn{background:none;height:100%;position:absolute;width:100%;z-index:2}.share-box .close{color:#333;font-size:28rpx;height:50rpx;line-height:50rpx;margin-left:275rpx;text-align:center;width:100rpx}.notice-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;width:600rpx}.notice-box .notice-img{width:600rpx}.notice-box .notice-close{height:80rpx;margin-top:24rpx;width:80rpx}
</style>
