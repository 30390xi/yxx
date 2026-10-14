<template>
<view class="goodsBox u-skeleton" v-if="commodityInfo">
    <uni-navbar class=" vue-ref" ref="navBar" type="transparentFixed" v-if="commodityInfo.scenicType!=1"></uni-navbar>
    <view class="" v-if="commodityInfo.isDeleted==0">
        <view class="u-skeleton-rect">
            <u-swiper borderRadius="0" class="" height="740" indicatorActiveColor="#FF3709" indicatorColor="rgba(0,0,0,0.5)" indicatorPos="bottomRight" interval="5000" :list="commodityInfo.picUrls" @click="swiperBtn()"></u-swiper>
        </view>
        <view class="ms-box" v-if="commodityInfo.seckillActivity==0">
            <image class="ms-img" src="https://eshopfile.zhiyousx.com/2021080909304743729.png"></image>
            <view class="left">
                <view class="">{{'￥'+(commodityInfo.seckillPrice||0)}}</view>
                <view class="">{{'￥'+(commodityInfo.retailPrice||0)}}</view>
            </view>
            <view class="right" v-if="daoJiShiObj.second">
                <view class="t">距离结束仅剩</view>
                <view class="b">{{daoJiShiObj.hour+' : '+daoJiShiObj.minute+' : '+daoJiShiObj.second}}</view>
            </view>
        </view>
        <view :class="['goodsPrice','u-skeleton-rect','',commodityInfo.scenicType==1?'cs':'']">
            <view class="priceNum u-skeleton-rect" v-if="commodityInfo.productType===1&&commodityInfo.scenicType!=1">
                <view class="freePrice" v-if="commodityInfo.skuItemType==1&&commodityInfo.isFree==1">免费</view>
                <block v-else>
                    <text class="" v-if="commodityInfo.seckillActivity!=0">{{'￥'+(commodityInfo.marketPrice||0)+''}}<text class="" v-if="commodityInfo.startPriceFlag==1">起</text>
                    </text>
                    <text class="del" v-if="commodityInfo.seckillActivity!=0&&commodityInfo.retailPrice>commodityInfo.marketPrice">{{'￥'+(commodityInfo.retailPrice||0)+''}}</text>
                </block>
            </view>
            <image class="" :src="commodityInfo.favorite===1?'https://eshopfile.zhiyousx.com/170065302018477577.png':'/static/images/collectno.png'" style="width:41rpx;height:39rpx;" v-if="iconShow&&commodityInfo.scenicType!=1" @click="favBtn($event)"></image>
        </view>
        <view class="goodsInfo">
            <view class="goodsName u-skeleton-rect">{{commodityInfo.itemTitle||''}}</view>
            <view class="numBox u-skeleton-rect">
                <text class="subTit"></text>
                <text class="ys" v-if="commodityInfo.scenicType!=1">{{'已'+(commodityInfo.skuItemType==1?'约':'售')+'：'+$root.f0}}</text>
            </view>
            <image class="fav-img" :src="commodityInfo.favorite===1?'https://eshopfile.zhiyousx.com/170065302018477577.png':'/static/images/collectno.png'" style="width:41rpx;height:39rpx;" v-if="ticketDetailObj.seckillActivity==0&&iconShow" @click="favBtn($event)"></image>
        </view>
        <view class="intro-box" v-if="$root.g0">
            <view class="title-box" style="margin-bottom:0;" @click="showYh($event)">
                <view class="left">
                    <view class="name">优惠</view>
                </view>
                <view class="middle">
                    <view class="item" v-if="index<3" :key="index" v-for="(item, index) in couponDetailArr">
                        <block v-if="item.type==3">0元购</block>
                        <block v-else>
                            <block v-if="item.type==1&&item.threshold>0">{{'满'+item.threshold+'减'+item.quota}}</block>
                            <block v-if="item.type==2&&item.threshold==0">{{item.quota+'元无门槛券'}}</block>
                        </block>
                    </view>
                </view>
                <image class="right" src="../../static/images/jt.png"></image>
            </view>
        </view>
        <view class="ownSpot" v-if="commodityInfo.itemTicketScenicSpotVoList&&commodityInfo.itemTicketScenicSpotVoList[0]">
            <view class="title">所属景区</view>
            <swiper :autoplay="true" class="spotList" id="spotList" interval="4000">
                <swiper-item class="item" :key="index" v-for="(item, index) in commodityInfo.itemTicketScenicSpotVoList">
                    <image class="img" mode="aspectFill" :src="item.scenicMainPic"></image>
                    <view class="info">
                        <view class="name singleLineText">
                            <text class="" v-if="item.isBookable">{{commodityInfo.skuItemType==1?'约':'订'}}</text>{{item.scenicName}}</view>
                        <view class="rank singleLineText" v-if="item.rankingName">{{item.rankingName+'第 '+item.indexInRanking+' 名'}}</view>
                        <view class="desc singleLineText" v-if="item.tag">{{item.tag}}</view>
                    </view>
                </swiper-item>
            </swiper>
        </view>
        <view class="ticketDetail">
            <view class="ytxz-mask">
                <view class="content-box">
                    <view class="bottom-box">
                        <view class="line2" v-if="$root.g1">
                            <view class="title">适用人群</view>
                            <view class="b" style="margin-bottom:8rpx;" :key="i" v-for="(des, i) in commodityInfo.targetGroupsRuleDescList">{{ des }}</view>
                        </view>
                        <view class="line1">
                            <view class="title" id="spxq">{{(commodityInfo.skuItemType==1?'预约':'购买')+'须知'}}</view>
                            <view class="b">
                                <view class="item" v-if="commodityInfo.itemUseDesc.dateType==1">
                                    <view class="l lc" v-if="commodityInfo.scenicType==1">入寺先预约</view>
                                    <view class="l" v-else>{{commodityInfo.bookingInfoTag.bookingTag}}</view>
                                    <view class="r">
                                        <view class="refundItem" v-if="commodityInfo.bookingInfoTag.validityModeBookStr1">{{ commodityInfo.bookingInfoTag.validityModeBookStr1 }}</view>
                                        <view class="refundItem" v-if="commodityInfo.bookingInfoTag.validityModeBookStr2">{{ commodityInfo.bookingInfoTag.validityModeBookStr2 }}</view>
                                        <view class="refundItem" v-if="commodityInfo.bookingInfoTag.validityModeBookStr3">{{ commodityInfo.bookingInfoTag.validityModeBookStr3 }}</view>
                                    </view>
                                </view>
                                <view class="item" v-else>
                                    <view class="l lc" v-if="commodityInfo.scenicType==1">入寺先预约</view>
                                    <view class="l" v-else>{{commodityInfo.bookingInfoTag.bookingTag}}</view>
                                    <view class="r">{{ commodityInfo.bookingInfoTag.bookingTimeStr+(commodityInfo.bookingInfoTag.reserveTimeStr?'，'+commodityInfo.bookingInfoTag.reserveTimeStr:'') }}</view>
                                </view>
                                <view class="item" v-if="commodityInfo.scenicType!=1">
                                    <view class="l">{{commodityInfo.bookingInfoTag.changeTag}}</view>
                                    <view class="r">{{commodityInfo.bookingInfoTag.changeStr}}</view>
                                </view>
                                <view class="item" style="margin-bottom:14rpx;" v-if="commodityInfo.bookingInfoTag&&commodityInfo.bookingInfoTag.refundStr">
                                    <view class="l lc" v-if="commodityInfo.scenicType==1">取消请提前</view>
                                    <view class="l" v-else>{{commodityInfo.bookingInfoTag.refundTag}}</view>
                                    <view class="r" v-if="commodityInfo.bookingInfoTag&&commodityInfo.bookingInfoTag.refundStr&&commodityInfo.bookingInfoTag.refundTag!='条件退'">
                                        <view class="" :key="index" v-for="(item, index) in $root.l0">
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
                        <view class="table" v-if="commodityInfo.bookingInfoTag&&commodityInfo.bookingInfoTag.refundTag=='条件退'">
                            <view class="tr first" v-if="commodityInfo.bookingInfoTag&&commodityInfo.bookingInfoTag.refundTag!='不可退'">
                                <view class="td" style="font-weight:bold;width:480rpx;">退款时间</view>
                                <view class="td" style="font-weight:bold;width:210rpx;">损失费用</view>
                            </view>
                            <view class="tr" v-if="item.timeDesc" :key="i" v-for="(item, i) in commodityInfo.refundFeeList">
                                <view class="td" style="width:480rpx;">{{item.timeDesc||''}}</view>
                                <view class="td" style="width:210rpx;">{{item.feeDesc||''}}</view>
                            </view>
                            <view class="tr" v-if="commodityInfo.bookingInfoTag&&commodityInfo.bookingInfoTag.refundStr1">
                                <view class="td" style="width:690rpx;display:block;">
                                    <view class="" :key="i" v-for="(it, i) in $root.l1">
                                        <view class="refundItem">{{it}}</view>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="line2" v-if="commodityInfo.scenicType!=1&&(commodityInfo.bookingInfoTag.feeIncludes||commodityInfo.bookingInfoTag.feeNotIncludes)">
                            <view class="title">{{(commodityInfo.skuItemType==1?'预约':'费用')+'说明'}}</view>
                            <view class="b">
                                <view class="options" v-if="commodityInfo.bookingInfoTag.feeIncludes">
                                    <view class="title">{{(commodityInfo.skuItemType==1?'预约':'费用')+'包含：'}}</view>
                                    <view class="content">
                                        <u-parse class=" vue-ref" color="#777474" ref="article" :html="commodityInfo.bookingInfoTag.feeIncludes" :lazyLoad="true" :tagStyle="parseStyle1"></u-parse>
                                    </view>
                                </view>
                                <view class="options" v-if="commodityInfo.bookingInfoTag.feeNotIncludes">
                                    <view class="title">{{(commodityInfo.skuItemType==1?'预约':'费用')+'不含：'}}</view>
                                    <view class="content">
                                        <u-parse class=" vue-ref" color="#777474" ref="article" :html="commodityInfo.bookingInfoTag.feeNotIncludes" :lazyLoad="true" :tagStyle="parseStyle1"></u-parse>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="line2" v-if="commodityInfo.scenicType!=1&&commodityInfo.bookingInfoTag.entranceDetail">
                            <view class="title">使用说明</view>
                            <view class="b">
                                <u-parse class=" vue-ref" ref="article" :html="commodityInfo.bookingInfoTag.entranceDetail" :lazyLoad="true" :tagStyle="parseStyle1"></u-parse>
                            </view>
                        </view>
                        <view class="line2" v-if="commodityInfo.scenicType!=1&&commodityInfo.bookingInfoTag.bookNote">
                            <view class="title">其它说明</view>
                            <view class="b">
                                <u-parse class=" vue-ref" ref="article" :html="commodityInfo.bookingInfoTag.bookNote" :lazyLoad="true" :tagStyle="parseStyle1"></u-parse>
                            </view>
                        </view>
                        <image class="community-box" mode="widthFix" :showMenuByLongpress="true" :src="commodityInfo.communityUrl" v-if="commodityInfo.communityUrl"></image>
                    </view>
                </view>
            </view>
        </view>
        <view class="yh-mask" v-if="showYhMask">
            <view class="bg" @click="showYh($event)"></view>
            <view class="content">
                <view class="close" @click="showYh($event)">X</view>
                <view class="item-list">
                    <view :class="['item','',item.couponStates==2?'yqg':'',item.couponStates==3?'ylq':'']" :key="index" v-for="(item, index) in $root.l2">
                        <view class="top">
                            <view class="left">
                                <view class="p1" v-if="item.type==3">
                                    <text class="text2">0</text>
                                    <text class="text1">元购</text>
                                </view>
                                <view class="p1" v-else>
                                    <text class="text1">￥</text>
                                    <text class="text2">{{item.quota}}</text>
                                </view>
                                <view class="p2">
                                    <block v-if="item.type==1&&item.threshold>0">{{'满'+item.threshold+'可用'}}</block>
                                    <block v-if="item.type==2&&item.threshold==0">无门槛</block>
                                    <block v-if="item.type==3">
                                        <block v-if="item.couponStates==2">{{'可抵扣'+item.deduction}}</block>
                                        <block v-else>
                                            <block v-if="item.memberReceivedNum==0">{{'可抵扣'+item.deduction+'张'}}</block>
                                            <block v-else>
                                                <block v-if="item.showMemberDeductionNum==0">
                                                    <block v-if="item.canUseNum>0">{{'可用'+item.canUseNum+'张'}}</block>
                                                    <tempalte class="" :vueSlots="['default']" v-else>{{'可抵扣'+item.deduction+'张'}}</tempalte>
                                                </block>
                                                <block v-else>{{'已抵扣('+item.deductionUsedNum+'/'+item.deduction+')'}}</block>
                                            </block>
                                        </block>
                                    </block>
                                </view>
                            </view>
                            <view class="middle">
                                <view class="p1">{{item.name}}</view>
                                <view class="p2">
                                    <block v-if="item.useTimeSlot==0">{{ item.f1+'-'+item.f2 }}</block>
                                    <block v-if="item.useTimeSlot==1">
                                        <block v-if="item.couponStates==3">{{item.f3+'前有效'}}</block>
                                        <block v-else>{{'领券后'+item.useTimeSlot+'小时内有效'}}</block>
                                    </block>
                                    <block v-if="item.useTimeSlot==2">{{item.f4+'-'+item.f5}}{{'可预'+(commodityInfo.skuItemType==1?'约':'订')+'【'+item.f6+'-'+item.f7+'】的门票'}}</block>
                                </view>
                            </view>
                            <view class="right">
                                <block v-if="item.couponStates==1">领取</block>
                                <block v-if="item.couponStates==2">已抢光</block>
                                <block v-if="item.couponStates==3">已领取</block>
                            </view>
                            <image mode :class="['jt','',index==tapIndex?'extend':'']" :src="'../../static/images/'+(item.couponStates==1?'xiala.png':'xiala2.png')"></image>
                        </view>
                        <view :class="['bottom','',index==tapIndex?'extend':'']">{{ item.useExplain }}</view>
                    </view>
                </view>
            </view>
        </view>
        <subscription class="" :dialogInfos="dialogInfos" v-if="(!commodityInfo.stockStatus||commodityInfo.sellOut)&&showPop"></subscription>
        <view class="footersub">
            <view class="price">
                <block v-if="commodityInfo.skuItemType==1&&commodityInfo.isFree==1">
                    <text class="sale" v-if="commodityInfo.scenicType!=1">免费</text>
                </block>
                <block v-else>
                    <text class="sale">{{'￥'+(commodityInfo.marketPrice||0)+''}}<text class="" v-if="commodityInfo.startPriceFlag==1">起</text>
                    </text>
                    <text class="del" v-if="commodityInfo.retailPrice>commodityInfo.marketPrice">{{'￥'+(commodityInfo.retailPrice||0)}}</text>
                </block>
            </view>
            <view class="btns" v-if="commodityInfo.listStatus!=1">
                <view class="btn cashback disabled">已下架</view>
            </view>
            <block v-else>
                <view class="btns" v-if="commodityInfo.stockStatus==0">
                    <view class="btn cashback disabled">{{'已'+(commodityInfo.skuItemType==1?'约满':'售空')+''}}</view>
                </view>
                <view class="btns" v-else>
                    <view :class="['btn','both','',commodityInfo.scenicType==1?'cs':'']" v-if="userInfo&&userInfo.isFenxiao&&commodityInfo.maxReward>0&&commodityInfo.stockStatus&&!commodityInfo.sellOut">
                        <view class="share" @click="e0($event)">
                            <text class="">分享赚</text>
                            <text class="">{{'￥'+commodityInfo.maxReward}}</text>
                        </view>
                        <view class="book yd" @click="goFillOrder($event)">{{'预'+(commodityInfo.skuItemType==1?'约':'订')+''}}</view>
                    </view>
                    <block v-else>
                        <view :class="['btn','cashback','',commodityInfo.scenicType==1?'cs':'']" v-if="commodityInfo.stockStatus&&!commodityInfo.sellOut" @click="goFillOrder($event)">{{'预'+(commodityInfo.skuItemType==1?'约':'订')+''}}</view>
                    </block>
                    <view :class="['btn','cashback','emptys','',commodityInfo.scenicType==1?'cs':'']" v-if="!commodityInfo.stockStatus||commodityInfo.sellOut">{{'已'+(commodityInfo.skuItemType==1?'约满':'售空')+''}}</view>
                </view>
            </block>
        </view>
        <u-skeleton :animation="true" class="" :loading="loadingStatus"></u-skeleton>
    </view>
    <empty-state class="" imgUrl="/static/captured/51d17a011d27445c.png" text="暂无商品信息" v-else></empty-state>
    <l-painter class="" css="width: 452rpx; height:363rpx;position:fixed;bottom:0;left:0;" customStyle="position: fixed; left: 200%" :isCanvasToTempFilePath="true" :vueSlots="['default']" v-if="showPainter" @success="e1()">
        <l-painter-image class="" css="object-fit: cover; object-position: 50% 50%;width:452rpx;height:362rpx;" :src="commodityInfo.defaultPicUrl"></l-painter-image>
        <l-painter-view class="" css="position:absolute;width:452rpx;height:82rpx;bottom:00rpx;left:0; background:#ffffff;" :vueSlots="['default']">
            <l-painter-text class="" css="font-size:32rpx;font-weight:600;line-height:82rpx;color:#FF5411;margin-left:20rpx;white-space:no-wrap;word-break: keep-all;" text="免费" v-if="commodityInfo.skuItemType==1&&commodityInfo.isFree==1"></l-painter-text>
            <block v-else>
                <l-painter-text class="" css="font-size:32rpx;font-weight:600;line-height:82rpx;color:#FF5411;margin-left:20rpx;white-space:no-wrap;word-break: keep-all;" text="￥"></l-painter-text>
                <l-painter-text class="" css="font-size:32rpx;font-weight:600;line-height:82rpx;color:#FF5411;white-space:no-wrap;word-break: keep-all;" :text="commodityInfo.seckillActivity==0?''+commodityInfo.seckillPrice+' ':''+commodityInfo.marketPrice+' '"></l-painter-text>
                <l-painter-text class="" css="font-size: 20rpx;line-height:82rpx;text-decoration:line-through;margin-left:10rpx;color:#D0D0D0;" text="￥"></l-painter-text>
                <l-painter-text class="" css="font-size: 20rpx;line-height:82rpx;text-decoration:line-through;color:#D0D0D0;white-space:no-wrap;word-break: keep-all;" :text="''+commodityInfo.retailPrice+' '"></l-painter-text>
            </block>
            <l-painter-text class="" css="height:60rpx;margin-top:11rpx;background:linear-gradient(56deg, #FC4A9E 0%, #FF5411 100%);width:200rpx;position:absolute;text-align:center;font-size:26rpx;color:#ffffff;white-space:no-wrap;word-break: keep-all;border-radius:30rpx;right:11rpx;bottom:11rpx;" :text="commodityInfo.skuItemType==1?'立即预约':'立即预订'"></l-painter-text>
        </l-painter-view>
    </l-painter>
    <l-painter class="" customStyle="position: fixed; left: 200%" :isCanvasToTempFilePath="true" :vueSlots="['default']" v-if="qrCode&&commodityInfo.sharePosterUrl" @success="e2()">
        <l-painter-image class="" css="object-fit: fill;width:750rpx;" :src="commodityInfo.sharePosterUrl"></l-painter-image>
        <l-painter-image class="" css="object-fit: fill;width:750rpx;" src="https://eshopfile.zhiyousx.com/2022090511375406833.png"></l-painter-image>
        <l-painter-image class="" css="object-fit: fill;width:155rpx;height:155rpx;position:absolute;bottom:13rpx;right:46rpx" :src="qrCode"></l-painter-image>
    </l-painter>
    <u-popup borderRadius="30" class="" mode="bottom" :value="sharePopup" :vueSlots="['default']" @input="sharePopup = $event">
        <view class="share-box">
            <view class="title">分享到</view>
            <view class="icon-box" v-if="$root.g2">
                <view class="item">
                    <image mode class="icon" src="https://eshopfile.zhiyousx.com/2022090510365178497.png"></image>
                    <view class="t">微信好友</view>
                    <button class="sharebtn" data-aaa="111" openType="share"></button>
                </view>
                <view class="item" v-if="$root.g3" @click="e3($event)">
                    <image mode class="icon" src="https://eshopfile.zhiyousx.com/2022090510374178970.png"></image>
                    <view class="t">小程序码</view>
                </view>
                <view class="item" v-if="$root.g4" @click="e4($event)">
                    <image mode class="icon" src="https://eshopfile.zhiyousx.com/2022090510375744214.png"></image>
                    <view class="t">海报</view>
                </view>
            </view>
            <view class="close" @click="e5($event)">取消</view>
        </view>
    </u-popup>
    <u-popup class=" vue-ref" ref="uPopup" :maskCloseAble="false" mode="center" :value="showShareImg" :vueSlots="['default']" @input="showShareImg = $event">
        <view class="notice-box">
            <image class="notice-img" mode="widthFix" :showMenuByLongpress="true" :src="postUrl1"></image>
            <image mode class="notice-close" src="/static/captured/e6819c818da3962f.png" @click="e6($event)"></image>
        </view>
    </u-popup>
    <u-popup class=" vue-ref" ref="uPopup" :maskCloseAble="false" mode="center" :value="showQrCode" :vueSlots="['default']" @input="showQrCode = $event">
        <view class="notice-box">
            <image class="notice-img" mode="widthFix" :showMenuByLongpress="true" :src="qrCode"></image>
            <image mode class="notice-close" src="/static/captured/e6819c818da3962f.png" @click="e7($event)"></image>
        </view>
    </u-popup>
    <recommended-pop class=" vue-ref" ref="recommendedPop" :dialogInfos="dialogInfos" @refreshCoupon="refreshCoupon()"></recommended-pop>
    <page-container class="" :overlay="false" :show="showPC" @beforeleave="onBeforeLeave($event)"></page-container>
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
            },
            subscription: function() {
              o.e("components/recommendedPop/subscription").then(function() {
                return resolve(o("a1b9"))
              }.bind(null, o)).catch(o.oe)
            },
            recommendedPop: function() {
              o.e("components/recommendedPop/recommend-pop").then(function() {
                return resolve(o("3d4a"))
              }.bind(null, o)).catch(o.oe)
            }
          },
          data: function() {
            return {
              couponArr: [],
              couponDetailArr: [],
              daoJiShiObj: {},
              isAndroid: !0,
              ticketDetailObj: {},
              posterData: {},
              showPainter: !1,
              postUrl: "",
              painterData: {},
              shareMemberId: "",
              iconShow: !1,
              unit: 0,
              showYhMask: !1,
              tapIndex: null,
              loadingStatus: !0,
              itemId: "",
              commodityInfo: {
                isDeleted: 0,
                defaultPicUrl: ""
              },
              scrollTop: 0,
              navIdx: 0,
              popupType: 0,
              addresIdx: 0,
              addrId: "",
              openIndex: 1,
              buyCount: 1,
              selectedIndex: 0,
              specificationsProps: {
                id: "propId",
                name: "propVal",
                list: "list"
              },
              optionsNav: [{
                icon: "/static/images/store.png",
                text: "店铺"
              }, {
                icon: "https://eshopfile.zhiyousx.com/170065368213433372.png",
                text: "购物车",
                infoBackgroundColor: "#ff4643"
              }, {
                icon: "/static/images/goodsshare.png",
                text: "分享"
              }],
              codeUrl: "",
              parseStyle: {
                p: "word-break: break-all;"
              },
              parseStyle1: {
                p: "word-break: break-all;line-height:48rpx;"
              },
              cashBackAmount: "",
              sharePopup: !1,
              postUrl1: "",
              showShareImg: !1,
              qrCode: "",
              showQrCode: !1,
              showPC: !1,
              selloutSuggestData: {}
            }
          },
          watch: {
            postUrl: function(t) {
              console.log(t)
            },
            postUrl1: function(t) {
              console.log(t)
            }
          },
          onLoad: function(e) {
            uni.getSystemInfoSync().system.indexOf("Android") > -1 || (this.isAndroid = !1), e.scene ? this.getScene(e.scene) : (e.itemId && (this.itemId = e.itemId), e.shareId && (this.shareMemberId = e.shareId || "", this.$store.commit("SET_DISTRIBUTORID", e.shareId), uni.setStorageSync("peopleShareId", e.shareId)), this.pageLoad())
          },
          onUnload: function() {
            this._timer && clearInterval(this._timer)
          },
          onShareAppMessage: function(t) {
            var e = "/subPage/pages/ticket_detail/ticket_detail?itemId=".concat(this.commodityInfo.itemId);
            return {
              title: this.commodityInfo.itemTitle,
              path: this.$util.setShareUrl(e),
              imageUrl: this.postUrl
            }
          },
          onShareTimeline: function() {
            var t = "itemId=".concat(this.commodityInfo.itemId);
            return {
              title: this.commodityInfo.itemTitle,
              query: this.$util.setShareTimeline(t),
              imageUrl: this.postUrl
            }
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, t.scrollTop > this.spxqTop ? this.navIdx = 1 : this.navIdx = 0
          },
          filters: {
            toFixed2: function(t) {
              return t ? Number(t).toFixed(2) : "0.00"
            },
            timeFormat: function(t) {
              return t.replace(/-/g, ".")
            }
          },
          computed: {
            popupTitle: function() {
              return 0 === this.popupType ? "配送" : 1 === this.popupType ? "提示" : "服务"
            },
            userInfo: function() {
              return this.$store.getters.userInfor
            },
            showFenxiao: function() {
              var t = this.userInfo;
              return t && t.isFenxiao || this.shareMemberId
            },
            scenicSpotId: function() {
              return this.commodityInfo && this.commodityInfo.itemTicketScenicSpotVoList && this.commodityInfo.itemTicketScenicSpotVoList.length && this.commodityInfo.itemTicketScenicSpotVoList[0].scenicId ? this.commodityInfo.itemTicketScenicSpotVoList[0].scenicId : ""
            },
            showPop: function() {
              return !!(this.commodityInfo && this.commodityInfo.itemTicketScenicSpotVoList && this.commodityInfo.itemTicketScenicSpotVoList.length && this.commodityInfo.itemTicketScenicSpotVoList[0] && 1 == this.commodityInfo.itemTicketScenicSpotVoList[0].selloutSuggestFlag && 1 == this.commodityInfo.selloutSuggestFlag)
            },
            dialogInfos: function() {
              return this.commodityInfo && this.commodityInfo.itemTicketScenicSpotVoList && this.commodityInfo.itemTicketScenicSpotVoList.length && this.commodityInfo.itemTicketScenicSpotVoList[0] && this.commodityInfo.itemTicketScenicSpotVoList[0].scenicId,
                function(t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(o), !0).forEach((function(e) {
                      (0, a.default)(t, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : u(Object(o)).forEach((function(e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                  }
                  return t
                }({
                  itemId: this.commodityInfo.itemId,
                  bizType: 3,
                  scenicSpotId: "",
                  showPop: (!this.commodityInfo.stockStatus || this.commodityInfo.sellOut) && this.showPop,
                  isSingleVote: 2
                }, this.selloutSuggestData)
            }
          },
          methods: {
            refreshCoupon: function() {
              this.getSelloutSuggestData(1)
            },
            getSelloutSuggestData: function(t) {
              var e = this;
              this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/item/getSelloutSuggest", {
                bizId: this.itemId,
                bizType: 2
              }).then((function(o) {
                1 === o.code && (e.selloutSuggestData = o.data || {}, 1 != t && (e.showPC = !0))
              }))
            },
            onBeforeLeave: function(t) {
              var e = this;
              this.showPC = !1, this.$nextTick((function() {
                e.$refs.recommendedPop.open()
              }))
            },
            getScene: function(e) {
              var o = this;
              this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/qrCodeScene/getScene?sceneId=" + e).then((function(e) {
                1 === e.code && (console.log(e.data), o.itemId = e.data.itemId, o.shareMemberId = e.data.referenceId || "", o.$store.commit("SET_DISTRIBUTORID", e.data.referenceId), e.data.referenceId && uni.setStorageSync("peopleShareId", e.data.referenceId), o.pageLoad())
              }))
            },
            getminiQr: function() {
              var t = this;
              this.$uniApi.dataRequestYesLoading("POST", "manager/app/wx/getminiLongSceneQr", {
                itemId: this.itemId,
                referenceId: this.userInfo.memberId,
                page: "subPage/pages/ticket_detail/ticket_detail",
                scene: "",
                width: ""
              }).then((function(e) {
                1 === e.code && (t.qrCode = e.data.baseData)
              }))
            },
            pageLoad: function() {
              this.getGoodsInfo()
            },
            getGoodsInfo: function() {
              var e = this;
              return (0, c.default)(r.default.mark((function o() {
                return r.default.wrap((function(o) {
                  for (;;) switch (o.prev = o.next) {
                    case 0:
                      return o.next = 2, e.getGoodsDetails();
                    case 2:
                      e.commodityInfo = o.sent, e.commodityInfo.stockStatus && !e.commodityInfo.sellOut || !e.showPop || e.getSelloutSuggestData(), e.cashBackAmount = e.commodityInfo.cashBackAmount || 0, e.showPainter = !0, e.userInfo && e.userInfo.isFenxiao && e.commodityInfo.maxReward > 0 && e.commodityInfo.stockStatus && !e.commodityInfo.sellOut && e.getminiQr(), 1 != e.commodityInfo.scenicType && 1 != e.commodityInfo.hideShareFlag || uni.hideShareMenu(), 0 == e.commodityInfo.seckillActivity && e.showCountDown(e.commodityInfo.seckillEndTime), e.$nextTick((function() {
                        var e = this;
                        uni.createSelectorQuery().select("#spxq").boundingClientRect((function(t) {
                          e.spxqTop = t.top
                        })).exec()
                      })), e.getCouponDetail();
                    case 11:
                    case "end":
                      return o.stop()
                  }
                }), o)
              })))()
            },
            getCoupon: function() {
              this.$uniApi.getRequestNoLoading("GET", "product/app/v1/itemActive/getItemCoupons/" + this.itemId).then((function(t) {
                for (var e = t.data, o = 0, n = [], i = 0; i < e.length; ++i) {
                  var r = e[i],
                    c = "",
                    a = 0,
                    s = String(r.couponAmount),
                    u = String(r.couponFullAmount);
                  if (r.couponFullAmount > 0 ? (c = "满".concat(u, "减").concat(s, "券"), a = 3) : (c = "".concat(s, "元无门槛券"), a = 5), (o += (c.length - a) / 2 + a) > 20) break;
                  n.push(r)
                }
              }))
            },
            showCountDown: function(t) {
              var e = this;
              this._timer = setInterval((function() {
                var o = new Date;
                if (new Date(t.replace(/-/g, "/")).getTime() - o.getTime() <= 0) return clearInterval(e._timer), e.daoJiShiObj = {
                  hour: 0,
                  minute: 0,
                  second: 0
                }, void e.getGoodsInfo();
                e.daoJiShiObj = e.$util.countDown(t)
              }), 1e3)
            },
            getGoodsDetails: function() {
              var e = this;
              return uni.showLoading({
                title: "加载中..."
              }), new Promise((function(o, n) {
                e.$uniApi.getRequestNoLoading("GET", "product/app/v1/item/getTiketProductDetail?itemId=" + e.itemId).then((function(n) {
                  if (e.loadingStatus = !1, uni.hideLoading(), 1 === n.code) {
                    e.iconShow = !0;
                    var i = n.data.picUrls;
                    n.data.picUrls = [];
                    var r, c = function(t, e) {
                      var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                      if (!o) {
                        if (Array.isArray(t) || (o = function(t, e) {
                            if (t) {
                              if ("string" == typeof t) return s(t, e);
                              var o = Object.prototype.toString.call(t).slice(8, -1);
                              return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? s(t, e) : void 0
                            }
                          }(t)) || e && t && "number" == typeof t.length) {
                          o && (t = o);
                          var n = 0,
                            i = function() {};
                          return {
                            s: i,
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
                            f: i
                          }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                      }
                      var r, c = !0,
                        a = !1;
                      return {
                        s: function() {
                          o = o.call(t)
                        },
                        n: function() {
                          var t = o.next();
                          return c = t.done, t
                        },
                        e: function(t) {
                          a = !0, r = t
                        },
                        f: function() {
                          try {
                            c || null == o.return || o.return()
                          } finally {
                            if (a) throw r
                          }
                        }
                      }
                    }(i);
                    try {
                      for (c.s(); !(r = c.n()).done;) {
                        var a = r.value;
                        n.data.picUrls.push({
                          image: a
                        })
                      }
                    } catch (t) {
                      c.e(t)
                    } finally {
                      c.f()
                    }
                    o(n.data)
                  }
                })).catch((function(e) {
                  uni.hideLoading()
                }))
              }))
            },
            favBtn: function() {
              var t = this,
                e = "";
              if (1 == this.commodityInfo.scenicType && (e = 1), this.$util.isLogin("", e)) {
                var o = {
                  itemId: this.itemId,
                  memberId: this.userInfo.memberId,
                  sellerId: this.commodityInfo.sellerId,
                  skuId: ""
                };
                this.$uniApi.dataRequestNoLoading("PUT", "manager/app/v1/memberFavoriteSku", o).then((function(e) {
                  1 === e.code ? (1 === t.commodityInfo.favorite ? (t.commodityInfo.favorite = 0, t.$uni.showToast("已取消收藏")) : (t.commodityInfo.favorite = 1, t.$util.showSuccessToast("已收藏")), t.$forceUpdate()) : t.$uni.showToast(e.msg)
                })).catch((function(e) {
                  t.$uni.showToast(e.msg)
                }))
              }
            },
            nabBtn: function(e) {
              this.navIdx = e, 0 === e ? uni.pageScrollTo({
                scrollTop: 0,
                duration: 300
              }) : 1 === e && uni.pageScrollTo({
                scrollTop: this.spxqTop,
                duration: 300
              })
            },
            closePopup: function() {
              this.$refs.popup.close()
            },
            brText: function(t) {
              if (t) {
                var e = t.split("#**#");
                return e.pop().split("</p>").forEach((function(t, o) {
                  if (t) {
                    var n = (t = t.split("<p>").join("")).match(/\<.*?\>/g),
                      i = t.match(/[\r\n]/g),
                      r = n || i;
                    r && r[0] && r.forEach((function(e) {
                      t = t.replaceAll(e, "")
                    })), e.push(t)
                  }
                })), e
              }
            },
            swiperBtn: function(e) {
              var o = [];
              this.commodityInfo.picUrls.forEach((function(t) {
                o.push(t.image)
              })), uni.previewImage({
                current: e,
                urls: o
              })
            },
            commentsBtn: function(e, o) {
              uni.previewImage({
                current: o,
                urls: e
              })
            },
            makePhoneCall: function(e) {
              uni.makePhoneCall({
                phoneNumber: e
              })
            },
            goFillOrder: function() {
              if (1 != this.commodityInfo.jumpFlag) {
                var e = this.commodityInfo.itemId,
                  o = 0,
                  i = "/subPage/pages/ticketFillOrder/ticketFillOrder?ticketId=".concat(e);
                1 == this.commodityInfo.groupFlag && (i = "/subPage/pages/packPlaceOrder/packPlaceOrder?ticketId=".concat(e)), this.shareMemberId && (i += "&shareMemberId=".concat(this.shareMemberId));
                var r = "",
                  c = uni.getStorageSync("userInfor").chansiOpenId;
                if (1 == this.commodityInfo.scenicType && (r = "https://eshop.zhiyousx.com/dsmall-admin-ui/h5/temple.html?itemId=".concat(e), o = 1), this.$util.isLogin(i, o, r)) {
                  if (r && !c) return void uni.navigateTo({
                    url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(r)
                  });
                  this.$navigateTo({
                    url: i
                  })
                }
              } else 2 == this.commodityInfo.jumpType ? uni.navigateTo({
                url: "/pages/webpage/webpage?urlEncode=".concat(encodeURIComponent(this.commodityInfo.jumpUrl))
              }) : 1 == this.commodityInfo.jumpType ? "wxf2cca76ae0520e33" == this.commodityInfo.jumpAppId ? this.$navigateTo({
                url: this.commodityInfo.jumpUrl
              }) : n.openEmbeddedMiniProgram({
                appId: this.commodityInfo.jumpAppId,
                path: this.commodityInfo.jumpUrl
              }) : 3 == this.commodityInfo.jumpType && this.$uni.showToast("请前往支付宝小程序购买")
            },
            showMore: function(t) {
              this.tapIndex != t ? this.tapIndex = t : this.tapIndex = null
            },
            showYh: function() {
              this.showYhMask = !this.showYhMask
            },
            getCouponDetail: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/getCanReceiveOrUseCouponList", {
                itemId: this.itemId,
                itemType: 1
              }).then((function(e) {
                t.couponDetailArr = e.data
              }))
            },
            toSpot: function(t) {
              console.log(t), this.$navigateTo({
                url: "/pages/spotDetail/spotDetail?spotId=" + t.scenicId
              })
            },
            receiveCoupon: function(t, e) {
              var o = this;
              this.$util.isLogin() && 1 == e && this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                couponId: t
              }).then((function(t) {
                1 == t.code || o.$uni.showToast("已抢光"), o.getCouponDetail()
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{position:relative!important;top:0!important}.goodsBox{padding-bottom:120rpx}.painter{height:960rpx;left:-5000rpx;position:absolute;top:0;width:543rpx;z-index:100}.navBar{display:-webkit-flex;display:flex}.navBar text{border-bottom:4rpx solid #fff;line-height:78rpx;margin:0 30rpx}.navBar .activeNav{border-bottom:4rpx solid #ff4643;color:#ff4643}.swiper{height:750rpx;width:100%}.swiper .swiper_item{background-color:#e5e5e5;height:100%;width:100%}.ms-box{align-items:center;background:linear-gradient(52deg,#fc4a9e,#ff5411);border-bottom:20rpx solid #fff;box-sizing:initial;display:-webkit-flex;display:flex;height:90rpx;line-height:1;padding:0 35rpx}.ms-box .ms-img{height:92rpx;margin-right:20rpx;position:relative;top:-25rpx;width:73rpx}.ms-box .left{align-items:baseline;display:-webkit-flex;display:flex;width:420rpx}.ms-box .left view:nth-child(1){color:#fff;font-size:50rpx;font-weight:700;margin-right:10rpx}.ms-box .left view:nth-child(2){color:#fff;font-size:26rpx;text-decoration:line-through}.ms-box .right .t{color:#fff;font-size:24rpx;margin-bottom:10rpx}.ms-box .right .b{color:#fff;font-size:28rpx;font-weight:700}.goodsPrice{align-items:center;background:#fff;display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between;padding:0 30rpx;width:100%}.goodsPrice.cs{height:40rpx}.goodsPrice .priceNum{align-items:flex-end;display:-webkit-flex;display:flex}.goodsPrice .priceNum .freePrice,.goodsPrice .priceNum>text{color:#ff3709;font-size:40rpx;font-weight:700;margin-right:20rpx}.goodsPrice .priceNum .del{color:#b5b5b5;font-size:22rpx;font-weight:400;margin-bottom:6rpx;text-decoration:line-through}.fxBtn{align-items:center;background:#fff;display:-webkit-flex;display:flex;justify-content:flex-start;padding:0rpx 30rpx 10rpx}.fxBtn .commissionfx{align-items:flex-end;display:-webkit-flex;display:flex;margin-right:16rpx}.fxBtn .commissionfx .fxText{background:linear-gradient(52deg,#fc4a9e,#ff5411);border-radius:10rpx 10rpx 0rpx 10rpx;color:#fff;display:inline-block;font-size:26rpx;font-weight:700;height:40rpx;line-height:40rpx;text-align:center;width:40rpx;z-index:2}.fxBtn .commissionfx .fxPic{background:#ffe9e4;border-radius:0rpx 6rpx 6rpx 0rpx;color:#563e26;display:inline-block;font-size:22rpx;font-weight:400;height:34rpx;line-height:34rpx;margin-left:-5rpx;padding:0 10rpx 0rpx 15rpx;text-align:center}.fxBtn .commission{align-items:flex-end;display:-webkit-flex;display:flex}.fxBtn .commission .fxText{background:linear-gradient(52deg,#ffc40f,#ff6a30);border-radius:10rpx 10rpx 0rpx 10rpx;color:#fff;display:inline-block;font-size:22rpx;font-weight:400;height:40rpx;line-height:40rpx;text-align:center;width:80rpx;z-index:2}.fxBtn .commission .fxPic{background:#ffe7bd;border-radius:6rpx;color:#563e26;display:inline-block;font-size:22rpx;font-weight:400;height:34rpx;line-height:34rpx;margin-left:-5rpx;padding:0 10rpx 0rpx 15rpx;text-align:center}.goodsInfo{background-color:#fff;padding:0 30rpx 20rpx;position:relative}.goodsInfo .fav-img{height:39rpx;position:absolute;right:30rpx;top:20rpx;width:41rpx}.goodsInfo .goodsName{color:#333;font-size:36rpx;font-weight:700;width:630rpx}.goodsInfo .numBox{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.goodsInfo .numBox .subTit{color:#4e4e4e;display:inline-block;font-size:26rpx;margin:10rpx 0}.goodsInfo .numBox .ys{color:#989892;font-size:24rpx}.delivery{background-color:#fff;margin:10rpx 0;padding:0 30rpx}.delivery .selectItem{align-items:center;border-bottom:1rpx solid #fafafa;display:-webkit-flex;display:flex;height:92rpx;width:100%}.delivery .selectItem>text{color:#333;font-size:30rpx;font-weight:700}.delivery .selectItem .dian{background-color:#ff4643;border-radius:50%;height:8rpx;margin-right:15rpx;width:8rpx}.delivery .selectItem .itemText{align-items:center;color:#333;display:-webkit-flex;display:flex;font-size:26rpx;justify-content:space-between;margin-left:30rpx;width:87%}.delivery .selectItem .itemText .itemAddres{font-size:26rpx}.delivery .selectItem:last-child{border:0}.titleName{background:#fff;color:#333;font-size:32rpx;font-weight:700;line-height:100rpx;padding:0 30rpx}.parameter{background-color:#fff;margin:20rpx 0;padding:30rpx}.parameter .parameItem{align-items:center;display:-webkit-flex;display:flex;height:60rpx}.parameter .parameItem>text:first-child{color:#878787;flex:2;font-size:26rpx}.parameter .parameItem>text:last-child{flex:8;font-size:26rpx}.ownSpot{background:#fff;margin-top:10rpx;padding:0 30rpx 30rpx}.ownSpot .title{color:#333;font-size:32rpx;font-weight:700;height:100rpx;line-height:110rpx}.ownSpot .spotList{display:-webkit-flex;display:flex;height:200rpx;overflow:hidden;overflow-x:scroll;position:relative}.ownSpot .spotList .item{display:-webkit-flex;display:flex;height:200rpx;margin-bottom:30rpx}.ownSpot .spotList .item:last-child{margin-bottom:0}.ownSpot .spotList .item .img{background:#e0e0e0;border-radius:20rpx;height:100%;width:200rpx}.ownSpot .spotList .item .info{padding-left:30rpx;width:480rpx}.ownSpot .spotList .item .info .name{color:#333;font-size:32rpx;font-weight:700;line-height:46rpx}.ownSpot .spotList .item .info .name text{background:linear-gradient(56deg,#fc4a9e,#ff5411);border-radius:10rpx;color:#fff;display:inline-block;font-size:22rpx;height:32rpx;line-height:30rpx;margin-right:8rpx;text-align:center;vertical-align:4rpx;width:32rpx}.ownSpot .spotList .item .info .rank{background:#ffefd5;border-radius:4px 18px 18px 18px;color:#945430;display:inline-block;font-size:22rpx;height:36rpx;line-height:36rpx;margin-top:24rpx;max-width:410rpx;padding:0 16rpx}.ownSpot .spotList .item .info .desc{color:#959494;font-size:24rpx;margin-top:22rpx}.ownSpot .spotList .item .info .distance{align-items:center;color:#959494;display:-webkit-flex;display:flex;font-size:24rpx;margin-top:26rpx}.ownSpot .spotList .item .info .distance image{height:21rpx;margin-right:8rpx;width:18rpx}.ticketDetail{background-color:#fff;margin-top:10rpx;padding:0 30rpx}.ticketDetail .ytxz-mask .content-box,.ticketDetail .ytxz-mask{box-sizing:border-box;width:100%}.ticketDetail .ytxz-mask .content-box .bottom-box{height:80%;overflow-y:auto}.ticketDetail .ytxz-mask .content-box .bottom-box .refundItem{display:block;line-height:48rpx;padding-bottom:0rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .line1{margin-bottom:30rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .line1 .title{color:#333;font-size:32rpx;font-weight:700;height:50rpx;line-height:50rpx;margin-bottom:5rpx;margin-top:30rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .line1>.b .item{display:-webkit-flex;display:flex;margin-bottom:4rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .line1>.b .item:last-child{margin-bottom:0}.ticketDetail .ytxz-mask .content-box .bottom-box .line1>.b .item>.l{border:2rpx solid #ff7d2a;border-radius:4rpx;border-radius:6rpx;color:#ff7d2a;font-size:22rpx;height:32rpx;line-height:28rpx;margin-right:25rpx;margin-top:8rpx;padding:0 4rpx;text-align:center;width:120rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .line1>.b .item .lc{border:2rpx solid #a17111;color:#a17111;width:140rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .line1>.b .item>.r{flex:1;line-height:48rpx;white-space:pre-wrap}.ticketDetail .ytxz-mask .content-box .bottom-box .table{border:1rpx solid #e4e4e4;border-bottom:none;margin-bottom:30rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .tr{border-bottom:1rpx solid #e4e4e4;display:-webkit-flex;display:flex}.ticketDetail .ytxz-mask .content-box .bottom-box .tr.first{background:#fffaf8}.ticketDetail .ytxz-mask .content-box .bottom-box .tr.first .td{font-weight:600}.ticketDetail .ytxz-mask .content-box .bottom-box .tr .1st{width:200rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .tr .td{align-items:center;border-right:1rpx solid #e4e4e4;border-top:none;color:#656565;display:-webkit-flex;display:flex;line-height:42rpx;padding:16rpx 25rpx;text-align:left;word-break:break-all}.ticketDetail .ytxz-mask .content-box .bottom-box .tr .td:last-child{border-right:none}.ticketDetail .ytxz-mask .content-box .bottom-box .line2{margin-bottom:30rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .line2 .title{color:#333;font-size:30rpx;font-weight:700;line-height:50rpx;margin-bottom:4rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .line2>.b .options{align-items:baseline;display:-webkit-flex;display:flex;margin-bottom:4rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .line2>.b .options view{color:#777474;display:-webkit-flex;display:flex;flex-direction:column;font-size:26rpx;justify-content:flex-start}.ticketDetail .ytxz-mask .content-box .bottom-box .line2>.b .options view.title{white-space:nowrap;width:134rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .line2>.b .options view.content{width:564rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .community-box{margin-bottom:60rpx;width:690rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .line3 .title{color:#333;font-size:30rpx;font-weight:700;line-height:50rpx;margin-bottom:30rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .line3>.b .item{align-items:center;display:-webkit-flex;display:flex;margin-bottom:45rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .line3>.b .item .col1{border:2rpx solid #ff7d2a;border-radius:4rpx;color:#ff7d2a;font-size:22rpx;height:32rpx;line-height:28rpx;margin-right:22rpx;padding:0 24rpx;white-space:nowrap}.ticketDetail .ytxz-mask .content-box .bottom-box .line3>.b .item .col1c{border:2rpx solid #a17111;color:#a17111}.ticketDetail .ytxz-mask .content-box .bottom-box .line3>.b .item .col2{color:#777474;flex:0 0 250rpx;font-size:26rpx;margin-right:30rpx;width:300rpx}.ticketDetail .ytxz-mask .content-box .bottom-box .line3>.b .item .col3{border-width:600;color:#333;flex:0 0 200rpx;font-size:32rpx;margin-right:50rpx;text-align:right}.ticketDetail .ytxz-mask .content-box .bottom-box .line3>.b .item .col4 image{height:32rpx;width:32rpx}.intro-box{background-color:#fff;margin-top:10rpx;padding:42rpx 30rpx}.intro-box .title-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:40rpx}.intro-box .title-box .left .name{color:#333;font-size:32rpx;font-weight:700}.intro-box .title-box .middle{box-sizing:border-box;display:-webkit-flex;display:flex;padding-left:30rpx;width:580rpx}.intro-box .title-box .middle .item{border:1rpx solid #ff5411;border-radius:18rpx;color:#f96365;font-size:22rpx;line-height:1;margin-right:10rpx;padding:7rpx 10rpx}.intro-box .title-box .right{height:21rpx;width:12rpx}.intro-box .content{-webkit-line-clamp:5;-webkit-box-orient:vertical;word-wrap:break-word;color:#707070;display:-webkit-box;font-size:24rpx;line-height:42rpx;overflow:hidden;white-space:normal!important}.intro-box .nav-button{display:-webkit-flex;display:flex;justify-content:flex-end;padding-top:30rpx}.intro-box .nav-button view{border:2rpx solid;border-image-source:linear-gradient(52deg,#fc4a9e,#ff5411)10 10;border-radius:25rpx;color:#f96365;font-size:22rpx;height:50rpx;line-height:50rpx;text-align:center;width:140rpx}.yh-mask{height:100%;position:fixed;top:0;width:100%;z-index:100}.yh-mask .bg{background-color:rgba(0,0,0,.5);height:100%;width:100%}.yh-mask .content{background:#fafafa;border-radius:20rpx 20rpx 0 0;bottom:0;box-sizing:border-box;height:70%;overflow-y:auto;padding:70rpx 20rpx;position:absolute;width:100%}.yh-mask .content .close{color:#444242;font-size:20rpx;position:absolute;right:20rpx;top:25rpx}.yh-mask .content .item-list{line-height:1}.yh-mask .content .item-list .item{margin-bottom:20rpx}.yh-mask .content .item-list .item.ylq .top{background:#fff}.yh-mask .content .item-list .item.ylq .top .left .p1 text{color:#adadad!important}.yh-mask .content .item-list .item.ylq .top .left .p2{color:#484848}.yh-mask .content .item-list .item.ylq .top .right{background:#fff1ed;color:#f15252}.yh-mask .content .item-list .item.yqg .top{background:#fff}.yh-mask .content .item-list .item.yqg .top .left .p1 text{color:#adadad!important}.yh-mask .content .item-list .item.yqg .top .left .p2{color:#adadad}.yh-mask .content .item-list .item.yqg .top .right{background:#f2f2f2;color:#7b7b7b}.yh-mask .content .item-list .item.yqg .top .middle{color:#adadad}.yh-mask .content .item-list .item .top{align-items:center;background:#fff1ed;border-radius:20rpx;display:-webkit-flex;display:flex;justify-content:space-between;min-height:167rpx;padding:36rpx 30rpx;position:relative}.yh-mask .content .item-list .item .top .left{text-align:center;width:190rpx}.yh-mask .content .item-list .item .top .left .p1{margin-bottom:17rpx}.yh-mask .content .item-list .item .top .left .p1 .text1{color:#f15252;font-size:26rpx}.yh-mask .content .item-list .item .top .left .p1 .text2{color:#f15252;font-size:40rpx;font-weight:700}.yh-mask .content .item-list .item .top .left .p2{color:#f15252;font-size:26rpx}.yh-mask .content .item-list .item .top .middle{width:260rpx}.yh-mask .content .item-list .item .top .middle .p1{color:#3a3a3a;font-size:26rpx;font-weight:700;line-height:32rpx;margin-bottom:9rpx}.yh-mask .content .item-list .item .top .middle .p2{color:#8f8f8f;font-size:24rpx;line-height:32rpx}.yh-mask .content .item-list .item .top .right{background:linear-gradient(52deg,#fc4a7c,#ff5411);border-radius:20rpx;color:#fefffe;font-size:24rpx;height:50rpx;line-height:50rpx;text-align:center;width:120rpx}.yh-mask .content .item-list .item .top .jt{bottom:10rpx;height:40rpx;position:absolute;right:30rpx;transform:rotate(180deg);transition:.3s;width:40rpx}.yh-mask .content .item-list .item .top .jt.extend{transform:rotate(0)}.yh-mask .content .item-list .item .bottom{color:#868686;font-size:22rpx;height:0;line-height:34rpx;overflow:hidden;padding:0rpx 24rpx;transition:.3s}.yh-mask .content .item-list .item .bottom.extend{height:auto;padding:24rpx}.footersub{background:#fff;bottom:0;box-shadow:1rpx 1rpx 10rpx #e3e3e3;display:-webkit-flex;display:flex;height:130rpx;justify-content:space-between;left:0;padding:13rpx 40rpx 7rpx;position:fixed;width:100%;z-index:1}.footersub .price{height:80rpx;line-height:80rpx;width:310rpx}.footersub .price .sale{color:#ff3709;font-size:46rpx;font-weight:700}.footersub .price .del{color:#b5b5b5;font-size:26rpx;margin-left:20rpx;text-decoration:line-through}.footersub .btns{height:80rpx;width:360rpx}.footersub .btns .btn{background:linear-gradient(52deg,#fc4a7c,#ff5411);border-radius:40rpx;height:100%;overflow:hidden;width:100%}.footersub .btns .btn.cs{background:linear-gradient(52deg,#c7b795,#c7b795)!important}.footersub .btns .cashback{color:#fff;font-size:30rpx;line-height:80rpx;text-align:center}.footersub .btns .cashback.disabled{background:#ccc}.footersub .btns .cashback.emptys{background:linear-gradient(253deg,#ffb2d5,#ffc1aa)}.footersub .btns .cashback.emptys.cs{background:linear-gradient(52deg,#cdb58a,#d2c4a0)!important}.footersub .btns .both{display:-webkit-flex;display:flex}.footersub .btns .both>view{flex:1}.footersub .btns .both .share{align-items:center;background:linear-gradient(52deg,#ffd913,#ffcd4b);display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;position:relative}.footersub .btns .both .share .sharebtn{background:none;height:100%;position:absolute;width:100%;z-index:2}.footersub .btns .both .share text{color:#461515;font-size:26rpx;padding-left:20rpx}.footersub .btns .both .book{align-items:center;background:linear-gradient(52deg,#fc4a7c,#ff5411);color:#fff;display:-webkit-flex;display:flex;font-size:30rpx;justify-content:center}.footersub .btns .both .back{background:linear-gradient(253deg,#ff5413,#fc4a9b);flex-direction:column}.footersub .btns .both .back text{color:#fff;font-size:26rpx;padding-right:20rpx}.footersub .btns .both .yd{line-height:80rpx}.share-box{background:#fff;height:440rpx;padding:40rpx 50rpx 50rpx;width:100%}.share-box .title{color:#333;font-size:26rpx;line-height:40rpx;margin-bottom:30rpx;text-align:center;width:100%}.share-box .icon-box{align-items:center;display:-webkit-flex;display:flex;margin-bottom:80rpx}.share-box .icon-box .item{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;margin-right:10px;position:relative;width:150rpx}.share-box .icon-box .item .icon{height:100rpx;margin-bottom:16rpx;width:100rpx}.share-box .icon-box .item .t{color:#333;font-size:26rpx;line-height:40rpx;white-space:nowrap}.share-box .icon-box .item .sharebtn{background:none;height:100%;position:absolute;width:100%;z-index:2}.share-box .close{color:#333;font-size:28rpx;height:50rpx;line-height:50rpx;margin-left:275rpx;text-align:center;width:100rpx} .u-mode-center-box{background-color:initial!important}.notice-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;width:600rpx}.notice-box .notice-img{width:600rpx}.notice-box .notice-close{height:80rpx;margin-top:24rpx;width:80rpx}
</style>
