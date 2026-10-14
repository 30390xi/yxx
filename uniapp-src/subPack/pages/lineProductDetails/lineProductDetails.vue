<template>
<view :class="['box','',loading?'loadingBox':'']" :style="'padding-bottom:'+(120+safeAreaBottom)+'rpx'+';'" v-if="detailObj.price!=null">
    <view class="navbar" :style="'height:'+searchHeight+38+'px'+';'+'background:'+'rgba(255,255,255,'+scrollTop/200+')'+';'+'padding-top:'+searchHeight+'px'+';'">
        <view class="arrowleftBox" @click="back()">
            <image class="header_icon" mode="aspectFit" src="/static/zhouWei-navBar/icon_home_black.png" v-if="firstPage"></image>
            <image class="header_icon" mode="aspectFit" src="/static/zhouWei-navBar/icon_back_black.png" v-else></image>
        </view>
        <view class="navName singleLineText" :style="'color:'+'rgba(0,0,0,'+scrollTop/200+')'+';'">{{detailObj.productName}}</view>
    </view>
    <view class="good-flex" :style="'top:'+searchHeight+38+'px'+';'+'padding-bottom:'+(isProductFlex||!solutionList[0].relationProductName?0:'10px')+';'" v-if="isGoodFlex">
        <scroll-view class="solution-box" :hidden="!solutionList[0].relationProductName" :scrollIntoView="scrollToId" :scrollX="true">
            <view :class="['solution-item','',activeSolution==index?'active':'',item.listStatus!=1||!item.stockStatus||item.sellOut?'disable':'']" :id="'product'+index" :key="index" v-for="(item, index) in solutionList">
                <view class="selected">
                    <uni-icons class="icon" color="#fff" size="12" type="checkmarkempty"></uni-icons>
                </view>
                <view class="name multilineText2" :style="'height:'+solutionNameHeight+'px'+';'">{{item.relationProductName}}</view>
            </view>
        </scroll-view>
        <view class="product-flex" v-if="isProductFlex">
            <view class="lables">
                <view :class="['lable-item','',index==activePro?'active':'']" v-if="!index&&detailObj.productFeature||index" :key="index" v-for="(item, index) in productList">{{ item }}<view class="line-bottom"></view>
                </view>
            </view>
        </view>
    </view>
    <view class="swiper-box">
        <swiper :autoplay="false" :circular="true" class="swiper" :duration="500" :indicatorDots="false" :interval="3000" @change="changeImg($event)">
            <swiper-item class="" :key="index" v-for="(item, index) in detailObj.productPicList">
                <image class="spot-img" mode="aspectFill" :src="item"></image>
            </swiper-item>
        </swiper>
        <view class="swipeiBG"></view>
        <view class="swiper-bottom">
            <view class="title">
                <image mode class="" src="/static/captured/548b7823835ab561.png" v-if="detailObj.fromCity"></image>
                <label class="_span" v-if="detailObj.fromCity">{{detailObj.fromCity+'出发'}}</label>
            </view>
            <view class="title">{{activeImg+'/'+$root.g0}}</view>
        </view>
        <view class="mask"></view>
    </view>
    <view class="goods-info">
        <view class="goods-top">
            <view class="price">
                <view class="icon">￥</view>
                <view class="num">{{detailObj.price}}</view>
                <view class="unit">
                    <label class="_span" v-if="detailObj.startPriceFlag">起</label>/人</view>
                <view class="reduce" v-if="detailObj.retailPrice&&detailObj.retailPrice>detailObj.price">{{'￥'+detailObj.retailPrice}}</view>
            </view>
            <view class="goNum" v-if="detailObj.orderPeopleNum">
                <image class="" src="/static/captured/45eaff9dbcf70039.png"></image>{{$root.f0+'人已出行'}}</view>
        </view>
        <view class="good-name">{{detailObj.productName}}</view>
        <scroll-view class="goods-lable" scrollX="true" v-if="detailObj.lineHighlightLabelList">
            <view class="lables" :key="index" v-for="(item, index) in detailObj.lineHighlightLabelList">{{item}}</view>
        </scroll-view>
        <view class="good-remark" v-if="$root.g1" @click="getCoupon()">
            <view class="good-left">
                <view class="lable">优惠</view>
                <scroll-view class="name" :scrollLeft="0" scrollWithAnimation="true" :scrollX="true" :throttle="false">
                    <view class="service-item" v-if="index<3" :key="index" v-for="(item, index) in couponList">
                        <view class="conp-item" v-if="item.type==3">0元购</view>
                        <block v-else>
                            <view class="conp-item" v-if="item.type==1&&item.threshold>0">{{'满'+item.threshold+'减'+item.quota}}</view>
                            <view class="conp-item" v-if="item.type==2&&item.threshold==0">{{item.quota+'元无门槛券'}}</view>
                        </block>
                    </view>
                </scroll-view>
            </view>
            <uni-icons class="goright" color="#000000B3" size="15" style="padding-top:8rpx;" type="arrowright"></uni-icons>
        </view>
        <view class="good-remark" v-if="detailObj.serviceDescList" @click="getServiceInfo()">
            <view class="good-left">
                <view class="lable">服务</view>
                <scroll-view class="name" :scrollLeft="0" scrollWithAnimation="true" :scrollX="true" :throttle="false">
                    <view class="service-item" :key="index" v-for="(item, index) in $root.l0">
                        <image class="remark-icon" src="/static/captured/f4b920eb7cb5c173.png"></image>{{ item.m0 }}</view>
                </scroll-view>
            </view>
            <uni-icons class="goright" color="#000000B3" size="15" style="padding-top:8rpx;" type="arrowright"></uni-icons>
        </view>
    </view>
    <view class="solution">
        <block v-if="solutionList[0].relationProductName">
            <view class="solution-top">
                <view class="model_title">
                    <view class="_p">出行方案</view>
                    <label class="_span"></label>
                </view>
                <view class="top-right">
                    <view class="name">{{$root.g2+'个可选套餐'}}</view>
                </view>
            </view>
            <view class="solution-content" id="solution">
                <scroll-view class="solution-box" :scrollIntoView="scrollToId" :scrollX="true">
                    <view :class="['solution-item','',activeSolution==index?'active':'',item.listStatus!=1||!item.stockStatus||item.sellOut?'disable':'']" :id="'product'+index" :key="index" v-for="(item, index) in solutionList">
                        <view class="selected">
                            <uni-icons class="icon" color="#fff" size="12" type="checkmarkempty"></uni-icons>
                        </view>
                        <view class="item-content">
                            <view class="name multilineText2" :id="'solutionName'+index" :style="'height:'+solutionNameHeight+'px'+';'">{{item.relationProductName}}</view>
                            <view class="line"></view>
                            <view class="solution-info" :id="'solutionInfo'+index" :style="'height:'+solutionInfoHeight+'px'+';'">
                                <view class="info-li" v-if="item.teamPeopleNum">
                                    <image class="home" src="/static/captured/45eaff9dbcf70039.png"></image>{{ item.teamPeopleNum }}</view>
                                <view class="info-li" v-if="item.eat">
                                    <image class="eat" src="https://eshopfile.zhiyousx.com/170124242179363816.png"></image>{{ item.eat }}</view>
                                <view class="info-li" v-if="item.live">
                                    <image class="home" src="https://eshopfile.zhiyousx.com/169500883534838601.png"></image>{{ item.live }}</view>
                                <view class="info-li" v-if="item.travel">
                                    <image class="eat" src="/static/captured/42a1b3c416bd6148.png"></image>{{ item.travel }}</view>
                                <view class="info-li" v-if="item.roving">
                                    <image class="home" src="/static/captured/f713a2336bb64375.png"></image>{{ item.roving }}</view>
                                <view class="info-li" v-if="item.shopping">
                                    <image class="eat" src="https://eshopfile.zhiyousx.com/170124265839608503.png"></image>{{ item.shopping }}</view>
                                <view class="info-li" v-if="item.joy">
                                    <image class="eat" src="https://eshopfile.zhiyousx.com/170124268438769868.png"></image>{{ item.joy }}</view>
                            </view>
                        </view>
                        <view class="solution-price">
                            <view class="item-btn" v-if="!item.stockStatus||item.sellOut">售罄</view>
                            <view class="p1" v-else>{{'￥'+item.price+''}}<label class="_span" v-if="item.startPriceFlag">起</label>
                            </view>
                        </view>
                    </view>
                </scroll-view>
            </view>
        </block>
        <view class="time" v-if="detailObj.earlyBookStr&&solutionList[0].relationProductName">{{detailObj.earlyBookStr}}</view>
        <view class="select-time" :style="'margin-top:'+(solutionList[0].relationProductName?'50rpx':'0rpx')+';'">
            <view class="title">团期选择</view>
            <view class="date-box">
                <view class="scroll-box-date" v-if="$root.g3>0">
                    <scroll-view class="left" :scrollIntoView="scrollToDate" :scrollX="true">
                        <view :class="['date-item','',activeDate==index?'activeDate':'',item.disabled?'disable':'']" :id="'date-'+item.date" :key="index" v-for="(item, index) in dateList">
                            <view class="selected">
                                <uni-icons class="icon" color="#fff" size="12" type="checkmarkempty"></uni-icons>
                            </view>
                            <view class="date-str">{{ item.dateShort+' '+item.week }}</view>
                            <view class="price">{{ item.diy }}</view>
                        </view>
                    </scroll-view>
                    <view class="line"></view>
                    <view class="right" @click="e0($event)">
                        <view class="text">更多日期</view>
                        <image mode class="arrow" src="/static/captured/cad1321b1fb32ab6.png"></image>
                    </view>
                </view>
                <view class="noDate" v-else>该产品没有可选的团期</view>
            </view>
        </view>
        <view class="time" v-if="detailObj.earlyBookStr&&!solutionList[0].relationProductName">{{detailObj.earlyBookStr}}</view>
    </view>
    <view class="product" id="product">
        <view class="lables">
            <view :class="['lable-item','',index==activePro?'active':'']" v-if="!index&&detailObj.productFeature||index" :key="index" v-for="(item, index) in productList">{{ item }}<view class="line-bottom"></view>
            </view>
        </view>
        <view class="title" v-if="detailObj.productFeature">产品特色</view>
        <view class="product_content" v-if="detailObj.productFeature">
            <view class="" v-if="isShowMore">
                <view class="u-content" :style="'height:'+(isLongContent&&!showRead?showHeight+'rpx':'auto')+';'">
                    <u-parse class="" :html="detailObj.productFeature" id="myRich" :tagStyle="parseStyle"></u-parse>
                </view>
                <view class="showmore-wrap" :style="$root.s0" @click="toggleRead($event)">
                    <text class="">{{ (showRead?openText:closeText) }}</text>
                    <image :class="['img-style','',showRead?'roteImg':'']" src="https://eshopfile.zhiyousx.com/170496257565021571.png"></image>
                </view>
            </view>
            <view class="" v-else>
                <u-parse class="" :html="detailObj.productFeature" id="myRich" :tagStyle="parseStyle"></u-parse>
            </view>
        </view>
    </view>
    <view class="product trip" id="trip">
        <view class="title">{{detailObj.dayIndex+'日行程'}}</view>
        <view class="box-day" :key="index" v-for="(item, index) in $root.l4">
            <view class="day-top">
                <view class="day-left">
                    <view class="day-num">{{'D'+item.day}}</view>
                    <view class="day-name">{{item.title}}</view>
                </view>
                <view class="day-right">
                    <u-icon class="" color="#FF5411FF" :name="item.fold" size="18"></u-icon>
                </view>
            </view>
            <view class="time_line" v-if="item.fold=='arrow-up'">
                <view class="mask"></view>
                <view :class="['time_item','setOf','',!time.idx?'close':'']" :key="num" v-for="(time, num) in item.l3">
                    <image class="markIcon" :src="time.icon"></image>
                    <view class="time_title" :style="'width:'+(time.journeyDestinationType==9?'470rpx':'595rpx')+';'">
                        <view :class="['name','_p','',time.journeyDestinationType==9?'walk':'']">{{(time.journeyDetailTime?time.journeyDetailTime:'')+' '+time.journeyDetailTitle}}</view>
                        <label :class="['times','_span','',time.journeyDestinationType==9?'other':'']" v-if="time.journeyDetailSubhead">{{time.journeyDetailSubhead}}</label>
                    </view>
                    <view class="spot_card" :style="'background:'+(time.lineDestinationVO.destinationColor?'linear-gradient(180deg, '+time.lineDestinationVO.destinationColor+' 0%, rgba(215,247,249,0) 100%)':'#F5F5F5FF')+';'" v-if="time.journeyDestinationType<6">
                        <view class="card_top">
                            <view class="card_lab" v-if="time.tab">{{time.tab}}</view>
                            <image class="head_img" mode="aspectFill" :src="time.lineDestinationVO.mainPic"></image>
                            <view class="card_info">
                                <view class="card_title _p">{{time.lineDestinationVO.destinationName}}</view>
                                <view class="ranking singleLineText" v-if="time.lineDestinationVO.originSortInRankingVO.contentId">
                                    <view class="text">
                                        <view class="name singleLineText">{{time.lineDestinationVO.originSortInRankingVO.rankingName+'第'+time.lineDestinationVO.originSortInRankingVO.indexInRanking+'名'}}</view>
                                    </view>
                                </view>
                                <view class="card_describe" v-if="time.lineDestinationVO.subtitle!=null">{{time.lineDestinationVO.subtitle}}</view>
                                <view class="card_ticket" v-if="time.lineDestinationVO.ticketName">
                                    <view class="ding">订</view>
                                    <view class="price">{{(time.lineDestinationVO.price==0?'免费':'￥'+time.lineDestinationVO.price)+''}}</view>
                                    <view class="ticketName singleLineText">{{time.lineDestinationVO.ticketName}}</view>
                                </view>
                                <view class="card_describe" v-if="time.m1">{{''+time.m2}}</view>
                                <view class="watermarkImage" v-if="time.watermarkImage">
                                    <image class="" mode="aspectFill" :src="time.watermarkImage"></image>
                                </view>
                            </view>
                        </view>
                        <view class="card_imgList" v-if="cont.contentModuleName!=null" :key="contNum" v-for="(cont, contNum) in time.l2">
                            <view class="_p">{{cont.contentModuleName}}</view>
                            <view class="img_list">
                                <image class="img_li" mode="aspectFill" :src="imgs.coverImage" v-if="imgNum<(imgs.g4==6?6:5)" :key="imgNum" v-for="(imgs, imgNum) in cont.l1"></image>
                            </view>
                            <view class="img_more" v-if="cont.g5>6">{{''+cont.m3}}</view>
                        </view>
                    </view>
                    <view class="spot_introduction" v-if="time.journeyDestinationType==6||time.journeyDestinationType==7">
                        <view class="introduction_title _p">{{time.lineDestinationVO.destinationName}}</view>
                        <scroll-view class="content-box" :scrollWithAnimation="true" :scrollX="true">
                            <view class="hote_item" :key="rankNum" v-for="(ranks, rankNum) in time.lineDestinationVO.rankingList">
                                <image class="hote_img" mode="aspectFill" :src="ranks.mainPic"></image>
                                <view class="name singleLineText _p">{{ranks.destinationName}}</view>
                            </view>
                        </scroll-view>
                        <view class="allHote">
                            <view class="_p">{{time.rankingCopyWritering}}</view>
                            <label class="goView _span">
                                <image class="" src="https://eshopfile.zhiyousx.com/169267534972027149.png"></image>
                            </label>
                        </view>
                    </view>
                    <view class="spot_remark" v-if="time.desc&&time.journeyDestinationType!==8">
                        <u-parse class="" :html="time.desc" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
                    </view>
                    <view class="spot_remark spot_tips" v-if="time.tips&&time.journeyDestinationType!==8">
                        <view class="tips">
                            <image class="" src="https://eshopfile.zhiyousx.com/169266846673784501.png"></image>
                        </view>
                        <text class="">{{time.tips}}</text>
                    </view>
                    <view class="html_content" v-if="time.journeyDestinationType==8">
                        <u-parse class="" :html="time.content" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="illustrate" id="illustrate">
        <view class="title">费用说明</view>
        <view class="table" v-if="$root.g6>0">
            <view class="th">
                <view class="td">费用包含</view>
            </view>
            <view class="tr" :key="index" v-for="(item, index) in detailObj.lineProductUseDescVO.lineProductFeeInclusiveDTOS">
                <view class="td bold">{{item.type}}</view>
                <view class="td">
                    <view class="_p">{{item.desc}}</view>
                </view>
            </view>
        </view>
        <view class="table" v-if="$root.g7>0">
            <view class="th">
                <view class="td">费用不包含</view>
            </view>
            <view class="tr" :key="index" v-for="(item, index) in detailObj.lineProductUseDescVO.lineProductFeeExclusiveDTOS">
                <view class="td bold">{{item.type}}</view>
                <view class="td">
                    <view class="_p">{{item.desc}}</view>
                </view>
            </view>
        </view>
        <view class="table" :key="index" v-for="(item, index) in detailObj.lineProductUseDescVO.lineProductFeeOtherListDTOS">
            <view class="th">
                <view class="td">{{item.costOtherTitle}}</view>
            </view>
            <view class="tr" :key="num" v-for="(li, num) in item.lineProductFeeOtherDTOS">
                <view class="td bold">{{li.type}}</view>
                <view class="td">
                    <view class="_p">{{li.desc}}</view>
                </view>
            </view>
        </view>
    </view>
    <view class="illustrate">
        <view class="title">退改说明</view>
        <view class="table">
            <view class="th">
                <view class="td" style="width:490rpx;">取消时间</view>
                <view class="td" style="width:184rpx;">损失费用</view>
            </view>
            <view class="tr" :key="index" v-for="(item, index) in detailObj.refundFeeList">
                <view class="td" style="width:490rpx;">{{item.timeDesc}}</view>
                <view class="td center" style="width:184rpx;">{{item.feeDesc}}</view>
            </view>
            <view class="tr" v-if="detailObj.lineProductUseDescVO.refundRuleDesc">
                <view class="td" style="width:100%;">
                    <u-parse class="" :html="detailObj.lineProductUseDescVO.refundRuleDesc" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
                </view>
            </view>
        </view>
    </view>
    <view class="text-content" v-if="detailObj.warmPrompt">
        <view class="title">温馨提示</view>
        <view class="content">
            <u-parse class="" :html="detailObj.warmPrompt" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
        </view>
    </view>
    <view class="text-content" v-if="configrights">
        <view class="title">平台提醒</view>
        <view class="content">
            <u-parse class="" :html="configrights" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
        </view>
    </view>
    <view class="shop-box" @click="goShop(detailObj.travelAgencyId)">
        <view class="left">
            <image class="shop-img" mode="aspectFill" :src="detailObj.logo"></image>
            <view class="remark">
                <view class="name singleLineText">
                    <view class="text _p">{{detailObj.travelAgencyName}}</view>
                    <view class="lable" v-if="detailObj.auth">
                        <image class="lable-icon" src="/static/captured/13a4d10ef0417ba4.png"></image>认证</view>
                </view>
                <view class="brief">
                    <view class="text singleLineText2 _p">{{detailObj.firmName}}</view>
                </view>
            </view>
        </view>
        <view class="shop-btn">进入店铺</view>
    </view>
    <view class="" v-if="showBar">
        <view class="line_submit" :style="'height:'+(100+safeAreaBottom)+'rpx'+';'+'padding-bottom:'+safeAreaBottom+'rpx'+';'" v-if="showSelectDate">
            <view class="determine" @click="subSelectDate()">确定</view>
        </view>
        <view class="line_submit" :style="'height:'+(100+safeAreaBottom)+'rpx'+';'+'padding-bottom:'+safeAreaBottom+'rpx'+';'" v-else>
            <view class="iconBox">
                <button class="submit_icon share" @click="goShop(detailObj.travelAgencyId)">
                    <image class="" src="/static/captured/c9676f78c4effcad.png"></image>
                    <view class="text">店铺</view>
                </button>
                <button class="submit_icon share" openType="share">
                    <view class="shareAmount" v-if="userInfo&&userInfo.isFenxiao&&detailObj.firstRetailAmount">{{'赚￥'+detailObj.firstRetailAmount}}</view>
                    <image class="" src="/static/captured/638acbf921e21368.png"></image>
                    <view class="text">分享</view>
                </button>
                <button class="submit_icon share" :hidden="!detailObj.customService" @click="getCustomer()">
                    <image class="" src="/static/captured/c2626d5726ed2448.png"></image>
                    <view class="text">客服</view>
                </button>
            </view>
            <view class="submit_btn">
                <view class="getTrip" @click="getTrips()">查看行程</view>
                <view :class="[ 'application','',[!detailObj.stockStatus||detailObj.sellOut||detailObj.listStatus!=1?'dis':''] ]" @click="application()">{{$root.f1}}</view>
            </view>
        </view>
    </view>
    <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="showCoupon" :vueSlots="['default']" @input="showCoupon = $event">
        <view class="couponContent">
            <view class="title">可领取优惠券</view>
            <scroll-view class="coupon-list" :scrollY="true">
                <view class="coupon-item" :key="index" v-for="(item, index) in $root.l5">
                    <view class="box">
                        <view class="" style="display:flex;z-index:999;position:relative;border-radius:20rpx;box-shadow:0rpx 4rpx 10rpx 0rpx rgba(0,0,0,0.08);">
                            <view class="left">
                                <view class="name">{{item.name}}</view>
                                <view class="date" v-if="item.useTimeSlot==0">{{item.f2+'-'+item.f3}}</view>
                                <block v-if="item.useTimeSlot==1">
                                    <view class="date" v-if="item.memberReceivedNum===item.userReceiveNum">{{item.validityEndTime+'前有效'}}</view>
                                    <view class="date" v-else>{{'领券后'+item.useTimeSlotHour+'小时内有效'}}</view>
                                </block>
                                <block v-if="item.useTimeSlot==2">
                                    <view class="date" v-if="item.memberReceivedNum===item.userReceiveNum">{{item.f4+'-'+item.f5}}</view>
                                    <view class="date" v-else>{{item.f6+'-'+item.f7}}</view>
                                </block>
                                <view class="detail">
                                    <view class="look">查看详情</view>
                                    <image class="" src="https://eshopfile.zhiyousx.com/170911466956745555.png" style="width:24rpx;height:24rpx;" v-if="tapIndex==index?false:true"></image>
                                    <image class="" src="https://eshopfile.zhiyousx.com/170960897814194743.png" style="width:24rpx;height:24rpx;" v-if="tapIndex==index?true:false"></image>
                                </view>
                            </view>
                            <view class="right">
                                <view class="ceng1" v-if="item.type==3">
                                    <view class="money">0</view>
                                    <view class="yang">元购</view>
                                </view>
                                <view class="ceng1" v-else>
                                    <view class="yang">￥</view>
                                    <view class="money">{{item.quota}}</view>
                                </view>
                                <view class="ceng2" v-if="item.type==1&&item.threshold>0">{{'满'+item.threshold+'可用'}}</view>
                                <view class="ceng2" v-if="item.type==2&&item.threshold==0">无门槛</view>
                                <view class="ceng2" v-if="item.type==3">
                                    <block v-if="item.couponStates==2">{{'可抵扣'+item.deduction+''}}</block>
                                    <block v-else>
                                        <block v-if="item.memberReceivedNum==0">{{'可抵扣'+item.deduction+'人'}}</block>
                                        <block v-else>
                                            <block v-if="item.showMemberDeductionNum==0">
                                                <block v-if="item.canUseNum>0">{{'可用'+item.canUseNum+'张'}}</block>
                                                <tempalte class="" :vueSlots="['default']" v-else>{{'可抵扣'+item.deduction+'人'}}</tempalte>
                                            </block>
                                            <block v-else>{{'已抵扣('+item.deductionUsedNum+'/'+item.deduction+')'}}</block>
                                        </block>
                                    </block>
                                </view>
                                <view class="ceng3" v-if="item.couponStates==1">立即领取</view>
                                <view class="ceng5" v-if="item.couponStates==2">抢光了</view>
                                <view class="ceng4" v-if="item.couponStates==3">可用产品</view>
                            </view>
                            <image class="stamp" src="https://eshopfile.zhiyousx.com/170917825995622404.png" v-if="item.couponStates==3"></image>
                        </view>
                        <view :class="['introduce','',index==tapIndex?'extend':'']">
                            <view class="">
                                <image class="" src="https://eshopfile.zhiyousx.com/170917719529144229.png" style="width:20rpx;height:20rpx;"></image>
                            </view>
                            <view class="">
                                <view class="wenzi">{{item.useExplain}}</view>
                                <view class="wenzi" v-if="item.useTimeSlot==2">{{'可预订【'+item.useTimeStart+'-'+item.useTimeEnd+'】的产品'}}</view>
                            </view>
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="customerShow" :vueSlots="['default']" @input="customerShow = $event">
        <view class="detailBox">
            <view class="title">客服</view>
            <scroll-view class="" scrollY="true" style="height:500rpx;">
                <view class="img-style">
                    <image class="" mode="widthFix" :showMenuByLongpress="true" :src="detailObj.customService"></image>
                </view>
                <view class="" style="height:150rpx;width:100%;"></view>
            </scroll-view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="showService" :vueSlots="['default']" @input="showService = $event">
        <view class="service-box">
            <view class="title">服务说明</view>
            <scroll-view class="content-service" :scrollY="true">
                <view class="service-item" :key="index" v-for="(item, index) in $root.l6">
                    <view class="title">
                        <image class="remark-icon" src="/static/captured/58dc965530edc7f4.png"></image>
                        <view class="text _p">{{item.m4}}</view>
                    </view>
                    <view class="content">{{item.serviceRemark}}</view>
                </view>
                <view class="service-item" v-if="detailObj.refundFeeDesc">
                    <view class="title">
                        <image class="remark-icon" src="/static/captured/58dc965530edc7f4.png"></image>
                        <view class="text _p">{{detailObj.refundFeeDesc}}</view>
                    </view>
                    <view class="table" style="margin-top:20rpx;">
                        <view class="th">
                            <view class="td" style="width:490rpx;">取消时间</view>
                            <view class="td" style="width:184rpx;">损失费用</view>
                        </view>
                        <view class="tr" :key="index" v-for="(item, index) in detailObj.refundFeeList">
                            <view class="td" style="width:490rpx;">{{item.timeDesc}}</view>
                            <view class="td center" style="width:184rpx;">{{item.feeDesc}}</view>
                        </view>
                        <view class="tr">
                            <view class="td" style="width:100%;">
                                <u-parse class="" :html="detailObj.lineProductUseDescVO.refundRuleDesc" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
                            </view>
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="showSelectDate" :vueSlots="['default']" @input="showSelectDate = $event">
        <view class="selectDateBox">
            <view class="title">选择团期</view>
            <scroll-view class="content" :scrollY="true" v-if="$root.g8">
                <yu-calendar class="" :defaultDate="selectDateStr" :priceList="dateList" @getDataInDay="itemClickFn()"></yu-calendar>
            </scroll-view>
        </view>
    </u-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              calendar: function() {
                i.e("subPack/components/calendar/calendar").then(function() {
                  return resolve(i("5c19"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            data: function() {
              return {
                searchHeight: 0,
                scrollTop: 0,
                isGoodFlex: !1,
                isProductFlex: !1,
                solutionTop: 0,
                productTop: 0,
                illustrateTop: 0,
                showService: !1,
                showSelectDate: !1,
                tripTop: 0,
                activeSolution: 0,
                activeDate: null,
                detailObj: {},
                fontColor: "rgb(255,255,255)",
                activeImg: 1,
                productList: ["产品特色", "行程明细", "购买须知"],
                activePro: 0,
                parseStyle: {
                  p: "word-break: break-all;line-height:40rpx;color:rgba(0, 0, 0, 0.6);font-size:26rpx",
                  img: "display: block"
                },
                safeAreaBottom: 0,
                customerShow: !1,
                productId: "",
                selectDateStr: "",
                dateList: [],
                selectDateObj: {},
                solutionList: [],
                loading: !1,
                firstPage: !1,
                configrights: "",
                scrollToDate: "",
                scrollToId: "",
                solutionNameHeight: "",
                solutionInfoHeight: "",
                applicationScroll: "",
                showHeight: 1e3,
                isLongContent: !0,
                showRead: !1,
                openText: "收起",
                closeText: "查看全部",
                shadowStyle: {
                  backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",
                  paddingTop: "300rpx",
                  marginTop: "-300rpx"
                },
                isShowMore: !1,
                showCoupon: !1,
                showBar: !0,
                couponList: [],
                tapIndex: null,
                noCouponFlag: null,
                shareMemberId: "",
                linePreview: 0
              }
            },
            filters: {
              timeFormat: function(t) {
                return t.substring(0, 10)
              },
              subFilter: function(t) {
                return 0 == t.listStatus ? "待上架" : 2 == t.listStatus ? "已下架" : 1 == t.listStatus ? !t.stockStatus || t.sellOut ? "售空" : "立即报名" : void 0
              }
            },
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            onReady: function() {},
            onShareAppMessage: function() {
              var t = "/subPack/pages/lineProductDetails/lineProductDetails?productId=".concat(this.productId);
              return {
                title: this.detailObj.shareDesc ? this.detailObj.shareDesc : this.detailObj.productName,
                imageUrl: this.detailObj.shareImage ? this.detailObj.shareImage : this.detailObj.productPicList[0],
                path: this.$util.setShareUrl(t)
              }
            },
            onShareTimeline: function() {
              var t = "productId=".concat(this.productId);
              return {
                title: this.detailObj.shareDesc ? this.detailObj.shareDesc : this.detailObj.productName,
                imageUrl: this.detailObj.shareImage ? this.detailObj.shareImage : this.detailObj.productPicList[0],
                query: this.$util.setShareTimeline(t)
              }
            },
            watch: {
              showCoupon: {
                handler: function(t, e) {
                  this.showBar = !t
                }
              }
            },
            onLoad: function(e) {
              var i = this,
                o = uni.getMenuButtonBoundingClientRect();
              this.searchHeight = o.top;
              var n = getCurrentPages();
              this.getConfig(), 1 != n.length || ["pages/index/index", "pages/index/index"].includes(n[0].route) || (this.firstPage = !0), e.scene ? this.getScene(e.scene) : (this.productId = e.productId, this.shareMemberId = e.shareMemberId, i.linePreview = e.linePreview || 0, uni.getSystemInfo({
                success: function(t) {
                  i.safeAreaBottom = t.safeAreaInsets.bottom
                }
              }), this.getGoodInfo())
            },
            onUnload: function() {},
            onShow: function() {
              this.noCouponFlag || (this.couponList = [], this.getSpotCoupons()), uni.showShareMenu({
                withShareTicket: !0,
                menus: ["shareAppMessage", "shareTimeline"]
              })
            },
            onPageScroll: function(t) {
              if (this.scrollTop = t.scrollTop, this.scrollTop < 221) {
                var e = 255 - this.scrollTop;
                this.fontColor = "rgb(".concat(e, ",").concat(e, ",").concat(e, ")")
              }
              this.scrollTop > this.solutionTop - this.solutionInfoHeight ? (this.solutionList[0].relationProductName && (this.isGoodFlex = !0), this.scrollTop > this.productTop - 80 - this.searchHeight - this.solutionNameHeight ? (this.solutionList[0].relationProductName || (this.isGoodFlex = !0), this.isProductFlex = !0, this.scrollCount()) : (this.solutionList[0].relationProductName || (this.isGoodFlex = !1), this.isProductFlex = !1)) : this.isGoodFlex = !1
            },
            methods: {
              htmlCount: function() {
                var e = this,
                  i = this;
                setTimeout((function() {
                  new Promise((function(t) {
                    var i = uni.createSelectorQuery();
                    i.select("#solution").boundingClientRect(), i.select("#product").boundingClientRect(), i.select("#trip").boundingClientRect(), i.select("#illustrate").boundingClientRect(), e.solutionList.forEach((function(t, e) {
                      i.select("#solutionName" + e).boundingClientRect(), i.select("#solutionInfo" + e).boundingClientRect()
                    })), i.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(t) {
                    var e = t[0] ? t[0].height : 0;
                    i.solutionTop = t[0] ? t[0].top + e : 0, i.applicationScroll = t[0] ? t[0].top : 0, i.productTop = t[1] ? t[1].top : 0, i.tripTop = t[2] ? t[2].top : 0, i.illustrateTop = t[3] ? t[3].top : 0, console.log(t), t.forEach((function(t, e) {
                      e > 3 && t && (e % 2 == 0 ? i.solutionNameHeight = i.solutionNameHeight > t.height ? i.solutionNameHeight : t.height : i.solutionInfoHeight = i.solutionInfoHeight > t.height ? i.solutionInfoHeight : t.height)
                    }))
                  })), e.loading = !1, uni.hideLoading()
                }), 100)
              },
              getScene: function(e) {
                var i = this,
                  o = this;
                o.$uniApi.getRequestNoLoading("GET", "manager/app/v1/qrCodeScene/getScene?sceneId=" + e).then((function(e) {
                  if (1 === e.code) {
                    var n = i.$util.getUrlParams(e.data.scene);
                    console.log(n), o.productId = n.productId, o.linePreview = n.linePreview || 0, o.shareMemberId = e.data.referenceId || "", uni.getSystemInfo({
                      success: function(t) {
                        o.safeAreaBottom = t.safeAreaInsets.bottom
                      }
                    }), o.getGoodInfo()
                  }
                }))
              },
              computedRich: function() {
                var t = this;
                setTimeout((function() {
                  new Promise((function(t) {
                    var e = uni.createSelectorQuery();
                    e.select("#myRich").boundingClientRect(), e.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(e) {
                    e[0] && e[0].height > 1e3 ? t.isShowMore = !0 : t.isShowMore = !1, t.htmlCount()
                  }))
                }), 1200)
              },
              changeStype: function(t) {
                var e = new RegExp("img", "gi");
                return t = t.replace(e, 'img style="width:100%;border-radius: 8px;height:auto"')
              },
              sure: function() {
                this.showCoupon = !1
              },
              getCoupon: function() {
                this.$util.isLogin() && (this.showCoupon = !0)
              },
              showMore: function(t) {
                this.tapIndex != t ? this.tapIndex = t : this.tapIndex = null
              },
              receive: function(e) {
                var i = this;
                return (0, a.default)(s.default.mark((function o() {
                  return s.default.wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        return o.prev = 0, uni.showLoading(), o.next = 4, i.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                          couponId: e
                        });
                      case 4:
                        1 == o.sent.code ? (i.getSpotCoupons(), i.$uni.showToast("已领取")) : i.$uni.showToast("已抢光"), o.next = 10;
                        break;
                      case 8:
                        o.prev = 8, o.t0 = o.catch(0);
                      case 10:
                        return o.prev = 10, setTimeout((function() {
                          uni.hideLoading()
                        }), 300), o.finish(10);
                      case 13:
                      case "end":
                        return o.stop()
                    }
                  }), o, null, [
                    [0, 8, 10, 13]
                  ])
                })))()
              },
              getSpotCoupons: function() {
                var t = this;
                return (0, a.default)(s.default.mark((function e() {
                  var i, o;
                  return s.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, i = {
                          itemType: 2,
                          lineProductId: t.productId
                        }, e.next = 4, t.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/getCanReceiveOrUseCouponList", i);
                      case 4:
                        1 == (o = e.sent).code && (t.couponList = o.data), e.next = 10;
                        break;
                      case 8:
                        e.prev = 8, e.t0 = e.catch(0);
                      case 10:
                        return e.prev = 10, e.finish(10);
                      case 12:
                      case "end":
                        return e.stop()
                    }
                  }), e, null, [
                    [0, 8, 10, 12]
                  ])
                })))()
              },
              toggleRead: function() {
                this.showRead = !this.showRead;
                var t = this;
                setTimeout((function() {
                  new Promise((function(t) {
                    var e = uni.createSelectorQuery();
                    e.select("#trip").boundingClientRect(), e.select("#illustrate").boundingClientRect(), e.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(e) {
                    t.tripTop = e[0] ? e[0].top + t.scrollTop : 0, t.illustrateTop = e[1] ? e[1].top + t.scrollTop : 0
                  }))
                }), 300)
              },
              available: function(e) {
                var i = JSON.stringify(e);
                uni.navigateTo({
                  url: "/subPack/pages/groupOrder/availableProducts?coupon=".concat(i)
                })
              },
              getTrips: function() {
                this.tripTop && this.changeProduct(1)
              },
              back: function() {
                this.firstPage ? uni.switchTab({
                  url: "/pages/index/index"
                }) : uni.navigateBack()
              },
              getConfig: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                  paramKey: "LINE_PLATFORM_REMINDER"
                }).then((function(e) {
                  1 === e.code && (t.configrights = e.data.paramValue)
                }))
              },
              scrollCount: function() {
                var t = [this.productTop, this.tripTop, this.illustrateTop];
                this.activePro < 2 && this.scrollTop >= t[this.activePro] - 140 - this.searchHeight - this.solutionNameHeight && (this.activePro += 1), this.activePro > 0 && this.scrollTop <= t[this.activePro] - 140 - this.searchHeight - this.solutionNameHeight && (this.activePro -= 1)
              },
              swiperBtn: function(e) {
                var i = [];
                this.detailObj.productPicList.forEach((function(t) {
                  i.push(t)
                })), uni.previewImage({
                  current: e,
                  urls: i
                })
              },
              changeImg: function(t) {
                this.activeImg = t.detail.current + 1
              },
              getCustomer: function() {
                this.customerShow = !0
              },
              getServiceInfo: function() {
                this.showService = !0
              },
              getServiceDesc: function(t) {
                return ["", "自动确认", "无购物", "无自费", "退订无忧", "上门接", "二次确认"][t]
              },
              changeProduct: function(e) {
                this.activePro = e;
                var i = [this.productTop + 55, this.tripTop, this.illustrateTop];
                uni.pageScrollTo({
                  scrollTop: i[e] - this.searchHeight - 125 - this.solutionNameHeight,
                  duration: 0
                })
              },
              getGoodInfo: function() {
                var e = this;
                if (1 != this.linePreview) {
                  uni.showLoading(), this.loading = !0;
                  var i = getCurrentPages();
                  this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/product/detail/" + this.productId).then((function(o) {
                    1 === o.code ? (e.solutionList = o.data, 0 == e.solutionList.length && (e.loading = !1, e.$uni.showToast("暂无产品信息"), setTimeout((function() {
                      i.length < 2 ? uni.switchTab({
                        url: "/pages/index/index"
                      }) : e.$util.prevPage()
                    }), 1e3)), e.detailObj = o.data[0], e.noCouponFlag = o.data[0].noCouponFlag, e.detailObj.productFeature || (e.activePro = 1), e.getLineDetail(), e.getPriceData(), e.computedRich()) : 0 === o.code && (e.$uni.showToast(o.msg), o.data && setTimeout((function() {
                      i.length < 2 ? o.data && o.data[0] && o.data[0].travelAgencyId ? uni.reLaunch({
                        url: "/subPack/pages/travelAgency/travelAgency?travelAgencyId=".concat(o.data[0].travelAgencyId)
                      }) : uni.switchTab({
                        url: "/pages/index/index"
                      }) : e.$util.prevPage()
                    }), 500))
                  }))
                } else this.getGoodInfoPreview()
              },
              getGoodInfoPreview: function() {
                var e = this;
                uni.showLoading(), this.loading = !0, this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/product/previewDetail", {
                  productId: this.productId
                }).then((function(i) {
                  1 === i.code ? (e.solutionList = i.data, 0 == e.solutionList.length && (e.loading = !1, e.$uni.showToast("暂无产品信息"), setTimeout((function() {
                    uni.navigateBack()
                  }), 1e3)), e.detailObj = i.data[0], e.noCouponFlag = i.data[0].noCouponFlag, e.detailObj.productFeature || (e.activePro = 1), e.noCouponFlag || e.getSpotCoupons(), e.getLineDetail(), e.getPriceData(), e.computedRich()) : 0 === i.code && (i.data || (e.$uni.showToast(i.msg), setTimeout((function() {
                    getCurrentPages().length < 2 ? uni.switchTab({
                      url: "/pages/index/index"
                    }) : e.$util.prevPage()
                  }), 500)))
                }))
              },
              subSelectDate: function() {
                "{}" != JSON.stringify(this.selectDateObj) ? (this.showSelectDate = !1, this.scrollToDate = "date-" + this.selectDateObj.date, this.selectDateStr = this.selectDateObj.date, this.activeDate = this.selectDateObj.index) : this.showSelectDate = !1
              },
              itemClickFn: function(t) {
                this.selectDateObj = t
              },
              selectedDate: function(t, e) {
                t.disabled || (this.selectDateStr = t.date, this.activeDate = e)
              },
              application: function() {
                if (1 == this.detailObj.listStatus)
                  if (this.detailObj.stockStatus && !this.detailObj.sellOut) {
                    if (!this.selectDateStr) return this.$uni.showToast("请选择团期"), void uni.pageScrollTo({
                      scrollTop: this.applicationScroll - this.searchHeight - 90,
                      duration: 0
                    });
                    var e = this.detailObj;
                    e.selectTicket = this.detailObj.ticketPrices[this.activeDate], uni.setStorageSync("lineProduct", e);
                    var i = "/subPack/pages/groupOrder/groupOrder";
                    this.$util.isLogin(i + "?noCouponFlag=" + this.noCouponFlag) && this.$navigateTo({
                      url: i + "?noCouponFlag=" + this.noCouponFlag
                    })
                  } else this.dateList.length > 0 ? this.$uni.showToast("产品已售空") : this.$uni.showToast("暂无可选团期");
                else this.$uni.showToast("产品未上架")
              },
              getPriceData: function() {
                var t = this;
                this.detailObj.ticketPrices.forEach((function(e, i) {
                  var o = "";
                  0 === e.surplusStock ? (o = "已售罄", e.disabled = !0) : o = "￥".concat(e.minSellPrice).concat(1 == e.startPriceFlag ? "起" : ""), e.dateShort = e.date.slice(5), e.week = t.getWeekOfDate(e.date), e.diy = o, e.index = i
                })), this.dateList = this.detailObj.ticketPrices
              },
              getWeekOfDate: function(t) {
                t = t.replace(/-/g, "/");
                var e = l.format(new Date, "yyyy/MM/dd"),
                  i = l.format(l.addDay(new Date, 1), "yyyy/MM/dd");
                return t == e ? "今天" : t == i ? "明天" : "周" + "日一二三四五六".charAt(new Date(t).getDay())
              },
              getLineDetail: function() {
                var t = this,
                  e = ["", "https://eshopfile.zhiyousx.com/169267454629242176.png", "https://eshopfile.zhiyousx.com/169267449809707764.png", "https://eshopfile.zhiyousx.com/169267457638955648.png", "https://eshopfile.zhiyousx.com/169267454629242176.png"];
                this.detailObj.lineProductJourneys.forEach((function(i, o) {
                  t.detailObj.dayIndex = o + 1, i.spotList = [], i.fold = 0 == o ? "arrow-up" : "arrow-down", i.lineProductJourneyDetailVOS.forEach((function(n, s) {
                    i.spotList.push(n), o == t.detailObj.lineProductJourneys.length - 1 && s == i.lineProductJourneyDetailVOS.length - 1 && i.spotList.push({
                      journeyDestinationType: 9,
                      journeyDetailTitle: "行程结束",
                      journeyDetailSubhead: "",
                      icon: e[2]
                    })
                  }))
                }))
              },
              spotRelationNum: function(t) {
                return t.length - 5 + "+"
              },
              spotContent: function(t) {
                var e = "";
                return null != t.businessType && null != t.perCapitaConsumption && (e = t.businessType + " · " + t.perCapitaConsumption), null != t.businessType && (e = t.businessType), e
              },
              jumpSpotContentList: function(e, i) {
                uni.setStorageSync("spotContentList", {
                  name: i.contentModuleName,
                  contentList: i.contentInfoVOList
                }), this.$navigateTo({
                  url: "/pages/spotContentList/spotContentList?scenicName=".concat(e)
                })
              },
              goSpot: function(t, e) {
                e <= 4 ? this.$navigateTo({
                  url: "/pages/spotDetail/spotDetail?spotId=" + t
                }) : this.$navigateTo({
                  url: "/pages/spotThirdDetail/spotThirdDetail?spotId=" + t
                })
              },
              goShop: function(t) {
                this.$navigateTo({
                  url: "/subPack/pages/travelAgency/travelAgency?travelAgencyId=" + t
                })
              },
              pageTo: function(t) {
                this.$navigateTo({
                  url: t
                })
              },
              changeSolution: function(e, i) {
                this.noCouponFlag = i.noCouponFlag, this.productId = i.productId, 1 == i.listStatus && i.stockStatus && !i.sellOut && (uni.pageScrollTo({
                  scrollTop: 0,
                  duration: 0
                }), this.scrollToId = "product" + e, this.loading = !0, this.activePro = 0, uni.showLoading(), this.detailObj = this.solutionList[e], this.activeSolution = e, this.selectDateStr = "", this.activeDate = null, this.noCouponFlag || this.getSpotCoupons(), this.getLineDetail(), this.getPriceData(), this.computedRich())
              },
              fold: function(t) {
                this.detailObj.lineProductJourneys[t].fold = "arrow-down" == this.detailObj.lineProductJourneys[t].fold ? "arrow-up" : "arrow-down", this.$forceUpdate();
                var e = this;
                setTimeout((function() {
                  new Promise((function(t) {
                    var e = uni.createSelectorQuery();
                    e.select("#illustrate").boundingClientRect(), e.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(t) {
                    e.illustrateTop = t[0] ? t[0].top + e.scrollTop : 0
                  }))
                }), 300)
              },
              clickMore: function() {
                var t = this;
                setTimeout((function() {
                  new Promise((function(t) {
                    var e = uni.createSelectorQuery();
                    e.select("#trip").boundingClientRect(), e.select("#illustrate").boundingClientRect(), e.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(e) {
                    t.tripTop = e[0] ? e[0].top + t.scrollTop : 0, t.illustrateTop = e[1] ? e[1].top + t.scrollTop : 0
                  }))
                }), 300), console.log("切换", t.tripTop)
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.box{background:#f5f5f5}.box .table{margin-bottom:20rpx;width:100%}.box .table .th{background:rgba(255,84,17,.1);display:-webkit-flex;display:flex;width:100%}.box .table .th .td{align-items:center;border-bottom:1rpx solid rgba(0,0,0,.1);border-right:1rpx solid rgba(0,0,0,.1);color:rgba(0,0,0,.7);display:-webkit-flex;display:flex;font-size:26rpx;font-weight:700;height:60rpx;justify-content:center;width:100%;word-break:break-all}.box .table .th .td:nth-last-child(1){border-right:none}.box .table .tr{background:#fafafa;display:-webkit-flex;display:flex;width:100%}.box .table .tr .td{align-items:center;border-bottom:1rpx solid rgba(0,0,0,.1);border-right:1rpx solid rgba(0,0,0,.1);color:rgba(0,0,0,.7);display:-webkit-flex;display:flex;font-size:26rpx;min-height:60rpx;padding:10rpx 30rpx;width:512rpx;word-break:break-all}.box .table .tr .td ._p{color:rgba(0,0,0,.7)}.box .table .tr .bold{color:rgba(0,0,0,.8);font-weight:700;padding-right:26rpx;width:160rpx}.box .table .tr .bold,.box .table .tr .center{align-items:center;display:-webkit-flex;display:flex}.box .table .tr .center{justify-content:center;padding:10rpx}.box .navbar{background:#fff;left:0;padding-left:20rpx;position:fixed;top:0;width:100%;z-index:300}.box .navbar .arrowleftBox,.box .navbar{align-items:center;display:-webkit-flex;display:flex}.box .navbar .arrowleftBox{background-color:hsla(0,0%,100%,.7);border:2rpx solid rgba(0,0,0,.1);border-radius:50%;height:56rpx;justify-content:center;width:56rpx}.box .navbar .arrowleftBox .header_icon{height:40rpx;width:40rpx}.box .navbar .navName{font-size:34rpx;margin-left:10rpx;width:480rpx}.box .good-flex{background:#fff;box-shadow:0rpx 10rpx 10rpx 0rpx rgba(0,0,0,.08);left:0;padding:5px 0 10px 30rpx;position:fixed;width:100%;z-index:300}.box .good-flex .solution-box{box-shadow:0rpx 10rpx 20rpx 0rpx rgba(0,0,0,.08);white-space:nowrap;width:100%}.box .good-flex .solution-box .solution-item{background:#fff;border-radius:20rpx 20rpx 20rpx 20rpx;box-shadow:0rpx 10rpx 20rpx 0rpx rgba(0,0,0,.08);box-sizing:border-box;display:inline-block;margin-right:22rpx;padding:16px 42rpx 11px;position:relative;vertical-align:top;width:380rpx}.box .good-flex .solution-box .solution-item .name{color:rgba(0,0,0,.8);font-size:28rpx;height:80rpx;white-space:break-spaces}.box .good-flex .solution-box .solution-item .selected{background:#ff5411;border-radius:8rpx 0 8rpx 0;bottom:0;color:#fff;display:none;font-size:20rpx;height:30rpx;line-height:30rpx;position:absolute;right:-1rpx;text-align:center;width:31rpx}.box .good-flex .solution-box .disable{background:#eee}.box .good-flex .solution-box .active{background:rgba(255,84,17,.051);border:1px solid #ff5411;border-radius:20rpx 20rpx 8rpx 20rpx}.box .good-flex .solution-box .active .selected{display:block}.box .good-flex .product-flex{width:100%}.box .good-flex .product-flex .lables{align-items:center;display:-webkit-flex;display:flex;height:50px;justify-content:center;padding:0 50rpx 0 30rpx;width:100%}.box .good-flex .product-flex .lables .lable-item{color:rgba(72,63,55,.8);font-size:28rpx;margin-right:70rpx}.box .good-flex .product-flex .lables .lable-item .line-bottom{background:linear-gradient(90deg,#fc4a9b,#ff5413);border-radius:50rpx;display:none;height:16rpx;margin-top:-4px;width:100%}.box .good-flex .product-flex .lables .active{color:#483f37;font-size:30rpx;font-weight:700}.box .good-flex .product-flex .lables .active .line-bottom{display:block}.box .good-flex .product-flex .lables .lable-item:nth-last-child(1){margin-right:0}.box .swiper-box{height:750rpx;position:relative;width:100%}.box .swiper-box .swiper .spot-img,.box .swiper-box .swiper{height:100%;width:100%}.box .swiper-box .swiper-bottom{align-items:center;bottom:30rpx;display:-webkit-flex;display:flex;justify-content:space-between;left:0;padding:0 30rpx;position:absolute;width:100%}.box .swiper-box .swiper-bottom .title{align-items:center;color:#fff;display:-webkit-flex;display:flex;font-size:24rpx}.box .swiper-box .swiper-bottom .title image{height:24rpx;margin-right:5rpx;width:24rpx}.box .swiper-box .mask{background:#fff;border-radius:20rpx 20rpx 0 0;bottom:-10rpx;height:30rpx;left:0;position:absolute;width:100%}.box .swiper-box .swipeiBG{background:linear-gradient(180deg,transparent,rgba(0,0,0,.5));bottom:0;height:100rpx;left:0;position:absolute;width:100%}.box .goods-info{background:#fff;border-radius:20rpx;margin-top:-20rpx;padding:40rpx 30rpx 30rpx;width:100%}.box .goods-info .goods-top{justify-content:space-between}.box .goods-info .goods-top .price,.box .goods-info .goods-top{align-items:center;display:-webkit-flex;display:flex}.box .goods-info .goods-top .price .icon{color:#ff5411;font-size:24rpx}.box .goods-info .goods-top .price .num{color:#ff5411;font-size:40rpx}.box .goods-info .goods-top .price .unit{color:#999;font-size:24rpx}.box .goods-info .goods-top .price .reduce{color:rgba(0,0,0,.5);font-size:26rpx;margin-left:10rpx;text-decoration:line-through}.box .goods-info .goods-top .goNum{align-items:center;color:rgba(0,0,0,.5);display:-webkit-flex;display:flex;font-size:24rpx}.box .goods-info .goods-top .goNum image{height:36rpx;margin-right:5rpx;width:36rpx}.box .goods-info .good-name{color:rgba(0,0,0,.8);font-size:36rpx;font-weight:700;margin-top:26rpx}.box .goods-info .goods-lable{height:38rpx;margin-top:10rpx;white-space:nowrap;width:100%}.box .goods-info .goods-lable .lables{border:1rpx solid #8d7c51;border-radius:20rpx;color:#8d7c51;display:inline-block;font-size:22rpx;height:32rpx;line-height:30rpx;margin-right:10rpx;padding:0 14rpx}.box .goods-info .good-remark{border-bottom:1rpx solid rgba(0,0,0,.05);justify-content:space-between;margin-top:16rpx;padding:20rpx 0}.box .goods-info .good-remark .good-left .lable,.box .goods-info .good-remark .good-left,.box .goods-info .good-remark{align-items:center;display:-webkit-flex;display:flex}.box .goods-info .good-remark .good-left .lable{background:rgba(255,84,17,.1);border-radius:4rpx;color:rgba(0,0,0,.7);font-size:24rpx;height:44rpx;padding:0 6rpx}.box .goods-info .good-remark .good-left .name{color:rgba(0,0,0,.8);font-size:26rpx;margin-right:10rpx;white-space:nowrap;width:550rpx}.box .goods-info .good-remark .good-left .name .service-item{display:inline-block}.box .goods-info .good-remark .good-left .name .service-item .remark-icon{height:26rpx;margin-left:10rpx;vertical-align:middle;width:26rpx}.box .goods-info .good-remark .good-left .name .service-item .conp-item{border:1rpx solid #ff5411;border-radius:20rpx 20rpx 20rpx 20rpx;color:#ff5411;font-size:24rpx;font-weight:400;margin:0 10rpx;padding:5rpx 10rpx}.box .goods-info .good-remark:nth-last-child(1){border:none;padding-bottom:0}.box .solution{background:#fff;border-radius:20rpx;margin-top:20rpx;padding:30rpx 0 30rpx 30rpx;width:100%}.box .solution .solution-top{align-items:flex-end;display:-webkit-flex;display:flex;justify-content:space-between;padding-right:30rpx}.box .solution .solution-top .model_title ._p{color:rgba(0,0,0,.7);font-size:32rpx}.box .solution .solution-top .model_title ._span{background:linear-gradient(90deg,#ff5411,rgba(255,84,17,0));border-radius:50rpx;display:block;height:16rpx;margin-top:-12rpx;width:128rpx}.box .solution .solution-top .top-right{display:-webkit-flex;display:flex;justify-content:space-between;width:540rpx}.box .solution .solution-top .top-right .name{color:rgba(0,0,0,.6);font-size:24rpx}.box .solution .solution-top .top-right .name .icon{margin-left:5rpx}.box .solution .solution-content{margin-top:20rpx}.box .solution .solution-content .solution-box{box-shadow:0rpx 10rpx 20rpx 0rpx rgba(0,0,0,.08);white-space:nowrap;width:100%}.box .solution .solution-content .solution-box .solution-item{background:#fff;border-radius:20rpx 20rpx 20rpx 20rpx;box-shadow:0rpx 10rpx 20rpx 0rpx rgba(0,0,0,.08);display:inline-block;height:100%;margin-right:20rpx;position:relative;vertical-align:top;white-space:break-spaces;width:380rpx}.box .solution .solution-content .solution-box .solution-item .selected{background:#ff5411;border-radius:8rpx 0 8rpx 0;bottom:0;color:#fff;display:none;font-size:20rpx;height:30rpx;line-height:30rpx;position:absolute;right:-1rpx;text-align:center;width:31rpx}.box .solution .solution-content .solution-box .solution-item .item-content{padding:30rpx 40rpx 20rpx}.box .solution .solution-content .solution-box .solution-item .item-content .name{color:rgba(0,0,0,.8);font-size:28rpx}.box .solution .solution-content .solution-box .solution-item .item-content .line{border-bottom:1rpx solid rgba(0,0,0,.1);margin-top:20rpx}.box .solution .solution-content .solution-box .solution-item .item-content .solution-info{margin-top:20rpx}.box .solution .solution-content .solution-box .solution-item .item-content .solution-info .info-li{align-items:flex-start;color:rgba(0,0,0,.5);display:-webkit-flex;display:flex;font-size:24rpx;margin-top:10rpx}.box .solution .solution-content .solution-box .solution-item .item-content .solution-info .info-li image{height:32rpx;margin-right:6rpx;width:32rpx}.box .solution .solution-content .solution-box .solution-item .item-content .solution-info .info-li .home{flex:none;margin-left:-5rpx;margin-right:0rpx;margin-top:-1rpx}.box .solution .solution-content .solution-box .solution-item .item-content .solution-info .info-li .eat{flex:none;height:23rpx;margin-top:2rpx;width:23rpx}.box .solution .solution-content .solution-box .solution-item .solution-price{align-items:center;background:#f3e8d2;border-radius:0 0 20rpx 20rpx;display:-webkit-flex;display:flex;height:72rpx;padding-left:40rpx;width:100%}.box .solution .solution-content .solution-box .solution-item .solution-price .item-btn{background:linear-gradient(253deg,#ffb2d5,#ffc1aa);border-radius:30px;color:#fff;font-size:26rpx;height:50rpx;line-height:50rpx;text-align:center;width:120rpx}.box .solution .solution-content .solution-box .solution-item .solution-price .p1{align-items:flex-end;color:#ff5411;display:-webkit-flex;display:flex;font-size:32rpx;font-weight:700}.box .solution .solution-content .solution-box .solution-item .solution-price .p1 ._span{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400;margin-left:4rpx}.box .solution .solution-content .solution-box .disable{background:#eee}.box .solution .solution-content .solution-box .active{background:rgba(255,84,17,.051);border:2rpx solid #ff5411;border-radius:20rpx 20rpx 8rpx 20rpx}.box .solution .solution-content .solution-box .active .selected{display:block}.box .solution .solution-content .solution-box .active .solution-price{background:linear-gradient(135deg,#ffcabe,#fff1ea);border-radius:0 0 8rpx 20rpx}.box .solution .time{color:rgba(0,0,0,.5);font-size:24rpx;margin-top:20rpx}.box .solution .select-time{margin-top:50rpx}.box .solution .select-time .title{color:rgba(0,0,0,.8);font-size:32rpx;height:100%}.box .solution .select-time .date-box{height:120rpx;margin-top:25rpx;width:690rpx}.box .solution .select-time .date-box .noDate{align-items:center;color:rgba(0,0,0,.6);display:-webkit-flex;display:flex;font-size:28rpx;height:100%;justify-content:center}.box .solution .select-time .date-box .scroll-box-date{position:relative;width:690rpx}.box .solution .select-time .date-box .scroll-box-date .left{white-space:nowrap;width:566rpx}.box .solution .select-time .date-box .scroll-box-date .left .date-item{background:#fff;border:1rpx solid #ccc;border-radius:20rpx;display:inline-block;height:120rpx;margin-right:10rpx;padding-top:20rpx;position:relative;text-align:center;width:156rpx}.box .solution .select-time .date-box .scroll-box-date .left .date-item .selected{background:#ff5411;border-radius:8rpx 0 8rpx 0;bottom:0;color:#fff;display:none;font-size:20rpx;height:30rpx;line-height:30rpx;position:absolute;right:-1rpx;text-align:center;width:31rpx}.box .solution .select-time .date-box .scroll-box-date .left .date-item .date-str{color:#444;font-size:26rpx;height:40rpx;line-height:40rpx}.box .solution .select-time .date-box .scroll-box-date .left .date-item .price{color:#ff5411;font-size:26rpx;height:40rpx;line-height:40rpx}.box .solution .select-time .date-box .scroll-box-date .left .disable{background:rgba(0,0,0,.05);border:none}.box .solution .select-time .date-box .scroll-box-date .left .activeDate{background:#fff1ed;border:1rpx solid #ff5411;border-radius:20rpx 20rpx 8rpx 20rpx}.box .solution .select-time .date-box .scroll-box-date .left .activeDate .selected{display:block}.box .solution .select-time .date-box .scroll-box-date .line{background:#fff;box-shadow:-10rpx 0 40rpx 0 rgba(0,0,0,.2);height:120rpx;position:absolute;right:122rpx;top:0;width:10rpx;z-index:200}.box .solution .select-time .date-box .scroll-box-date .right{align-items:center;background:#fff;display:-webkit-flex;display:flex;height:120rpx;justify-content:space-between;position:absolute;right:0;top:0;width:132rpx;z-index:201}.box .solution .select-time .date-box .scroll-box-date .right .text{color:#444;font-size:26rpx;line-height:40rpx;margin-left:25rpx;width:52rpx}.box .solution .select-time .date-box .scroll-box-date .right .arrow{height:30rpx;width:15rpx}.box .solution .select-time .remark{color:rgba(0,0,0,.5);font-size:24rpx;margin-top:20rpx}.box .product{background:#fff;border-radius:20rpx;margin-left:20rpx;margin-top:20rpx;width:710rpx}.box .product .lables{align-items:center;display:-webkit-flex;display:flex;height:100rpx;justify-content:center;padding:0 30rpx;width:100%}.box .product .lables .lable-item{color:rgba(72,63,55,.8);font-size:28rpx;margin-right:70rpx}.box .product .lables .lable-item .line-bottom{background:linear-gradient(90deg,#fc4a9b,#ff5413);border-radius:50rpx;display:none;height:16rpx;margin-top:-8rpx;width:100%}.box .product .lables .active{color:#483f37;font-size:30rpx;font-weight:700}.box .product .lables .active .line-bottom{display:block}.box .product .lables .lable-item:nth-last-child(1){margin-right:0}.box .product .title{border-bottom:1rpx solid rgba(0,0,0,.1);color:rgba(0,0,0,.8);font-size:30rpx;height:96rpx;line-height:96rpx;text-align:center;width:100%}.box .product .product_content{padding:30rpx}.box .product .product_content .u-content{color:#606266;font-size:30rpx;line-height:1.8;margin:0 auto;overflow:hidden;text-align:left;width:100%}.box .product .product_content .showmore-wrap{align-items:center;display:-webkit-flex;display:flex;justify-content:center;padding-bottom:26rpx;position:relative;width:100%}.box .product .product_content .showmore-wrap .img-style{height:30rpx;margin-left:10rpx;width:30rpx}.box .product .roteImg{transform:rotate(180deg)}.box .trip{margin-top:10rpx}.box .trip .box-day{border-bottom:1rpx solid rgba(0,0,0,.1);padding:27rpx 0 30rpx}.box .trip .box-day .day-top{justify-content:space-between;padding:0 30rpx}.box .trip .box-day .day-top .day-left,.box .trip .box-day .day-top{align-items:center;display:-webkit-flex;display:flex}.box .trip .box-day .day-top .day-left .day-num{color:rgba(0,0,0,.7);font-size:40rpx;font-weight:700}.box .trip .box-day .day-top .day-left .day-name{border-left:1rpx solid rgba(0,0,0,.5);color:rgba(0,0,0,.9);font-size:30rpx;margin-left:27rpx;padding-left:30rpx;width:520rpx}.box .trip .box-day .day-top .day-right{background:rgba(255,84,17,.2);border-radius:50%;height:40rpx;line-height:34rpx;text-align:center;width:40rpx}.box .trip .box-day .time_line{margin-top:40rpx;padding-left:35rpx;position:relative}.box .trip .box-day .time_line .mask{background:#fff;height:14rpx;left:29rpx;position:absolute;top:-7rpx;width:14rpx;z-index:10}.box .trip .box-day .time_line .time_item{border-left:1rpx solid rgba(0,0,0,.2);padding-bottom:50rpx;padding-left:35rpx;position:relative}.box .trip .box-day .time_line .time_item .markIcon{background:#fff;height:30rpx;left:-15.5rpx;position:absolute;top:4rpx;width:30rpx;z-index:20}.box .trip .box-day .time_line .time_item .line_view{align-items:center;background:url('https://eshopfile.zhiyousx.com/169209914527662936.png');background-size:100% 100%;display:-webkit-flex;display:flex;height:60rpx;justify-content:flex-end;padding-right:10rpx;position:absolute;right:26rpx;top:-12rpx;width:382rpx}.box .trip .box-day .time_line .time_item .line_view ._p{color:rgba(0,0,0,.8);font-size:26rpx;margin-right:10rpx}.box .trip .box-day .time_line .time_item .line_view .goView{height:30rpx;width:30rpx}.box .trip .box-day .time_line .time_item .line_view .goView image{height:100%;width:100%}.box .trip .box-day .time_line .time_item .time_title{align-items:center;display:-webkit-flex;display:flex;width:470rpx}.box .trip .box-day .time_line .time_item .time_title .name{color:rgba(0,0,0,.8);font-size:30rpx;font-weight:700;line-height:40rpx}.box .trip .box-day .time_line .time_item .time_title .walk{color:rgba(0,0,0,.8);font-size:26rpx;font-weight:400}.box .trip .box-day .time_line .time_item .time_title .times{border-left:1rpx solid rgba(0,0,0,.3);color:rgba(0,0,0,.5);font-size:26rpx;line-height:30rpx;margin-left:30rpx;max-height:54rpx;min-height:27rpx;padding-left:12rpx}.box .trip .box-day .time_line .time_item .time_title .other{border-left:1rpx solid rgba(0,0,0,.8);color:rgba(0,0,0,.8);margin-left:15rpx}.box .trip .box-day .time_line .time_item .spot_card{border-radius:20rpx 20rpx 20rpx 20rpx;margin-top:20rpx;padding:20rpx;width:620rpx}.box .trip .box-day .time_line .time_item .spot_card .card_top{display:-webkit-flex;display:flex;position:relative}.box .trip .box-day .time_line .time_item .spot_card .card_top .card_lab{background:url('https://eshopfile.zhiyousx.com/169209823319911969.png');background-size:100% 100%;color:#f1dc8d;font-size:20rpx;height:64rpx;left:0rpx;padding-left:19rpx;padding-top:12rpx;position:absolute;top:-29rpx;width:64rpx}.box .trip .box-day .time_line .time_item .spot_card .card_top .head_img{border-radius:10rpx;height:180rpx;width:180rpx}.box .trip .box-day .time_line .time_item .spot_card .card_top .card_info{padding-left:20rpx;width:392rpx;z-index:10}.box .trip .box-day .time_line .time_item .spot_card .card_top .card_info .card_title{color:rgba(0,0,0,.7);font-size:30rpx;font-weight:700}.box .trip .box-day .time_line .time_item .spot_card .card_top .card_info .ranking{align-items:center;display:-webkit-flex;display:flex;margin-top:20rpx;position:relative}.box .trip .box-day .time_line .time_item .spot_card .card_top .card_info .ranking .top{align-items:center;background:linear-gradient(180deg,#6b6457,#54524c);border-radius:25rpx;color:#e6cca2;display:-webkit-flex;display:flex;font-size:24rpx;height:34rpx;padding:0 10rpx;position:relative;z-index:3}.box .trip .box-day .time_line .time_item .spot_card .card_top .card_info .ranking .text{background:#ffefd5;border-radius:4px 18px 18px 18px;height:36rpx;line-height:36rpx;padding:0 16rpx}.box .trip .box-day .time_line .time_item .spot_card .card_top .card_info .ranking .text .name{color:#945430;font-size:22rpx;max-width:325rpx}.box .trip .box-day .time_line .time_item .spot_card .card_top .card_info .card_describe{color:rgba(0,0,0,.4);font-size:26rpx;margin-top:14rpx}.box .trip .box-day .time_line .time_item .spot_card .card_top .card_info .card_ticket{align-items:center;display:-webkit-flex;display:flex;height:38rpx;line-height:38rpx;margin-top:14rpx}.box .trip .box-day .time_line .time_item .spot_card .card_top .card_info .card_ticket .ding{background:linear-gradient(180deg,#f99f1d,#fe581e);border-radius:10rpx;color:#fff;font-size:22rpx;height:32rpx;line-height:32rpx;margin-top:-5rpx;text-align:center;width:32rpx}.box .trip .box-day .time_line .time_item .spot_card .card_top .card_info .card_ticket .price{color:rgba(0,0,0,.4);font-size:26rpx;margin-left:10rpx}.box .trip .box-day .time_line .time_item .spot_card .card_top .card_info .card_ticket .ticketName{color:rgba(0,0,0,.4);font-size:26rpx;margin-left:10rpx;width:230rpx}.box .trip .box-day .time_line .time_item .spot_card .card_top .card_info .watermarkImage{border-radius:0 20rpx 0 0;position:absolute;right:-20rpx;top:-20rpx;z-index:-1}.box .trip .box-day .time_line .time_item .spot_card .card_top .card_info .watermarkImage image{height:100rpx;width:100rpx}.box .trip .box-day .time_line .time_item .spot_card .card_imgList{align-items:center;background:rgba(0,0,0,.03);border-radius:10rpx;display:-webkit-flex;display:flex;margin-top:29rpx;padding:10rpx 0 10rpx 20rpx;width:580rpx}.box .trip .box-day .time_line .time_item .spot_card .card_imgList ._p{color:rgba(0,0,0,.7);font-size:26rpx;max-width:109rpx}.box .trip .box-day .time_line .time_item .spot_card .card_imgList .img_list{display:-webkit-flex;display:flex;margin-left:20rpx}.box .trip .box-day .time_line .time_item .spot_card .card_imgList .img_list .img_li{border-radius:10rpx;height:60rpx;margin-right:10rpx;width:60rpx}.box .trip .box-day .time_line .time_item .spot_card .card_imgList .img_more{background:rgba(0,0,0,.05);border-radius:10rpx;color:rgba(0,0,0,.7);height:60rpx;line-height:60rpx;text-align:center;width:60rpx}.box .trip .box-day .time_line .time_item .spot_remark{margin-top:20rpx;padding:0 10rpx;text-align:justify;width:620rpx}.box .trip .box-day .time_line .time_item .spot_remark text{color:rgba(0,0,0,.6);font-size:26rpx;text-align:justify}.box .trip .box-day .time_line .time_item .spot_tips{background:rgba(255,0,0,.05);border-radius:10rpx;display:-webkit-flex;display:flex;padding:20rpx}.box .trip .box-day .time_line .time_item .spot_tips .tips{margin-right:15rpx}.box .trip .box-day .time_line .time_item .spot_tips .tips image{height:22rpx;width:22rpx}.box .trip .box-day .time_line .time_item .html_content{margin-top:20rpx;padding-right:20rpx}.box .trip .box-day .time_line .time_item .spot_introduction{margin-top:20rpx}.box .trip .box-day .time_line .time_item .spot_introduction .introduction_title{color:rgba(0,0,0,.7);font-size:30rpx;font-weight:700}.box .trip .box-day .time_line .time_item .spot_introduction .content-box{background:rgba(0,0,0,.05);border-radius:20rpx;margin-top:30rpx;padding:20rpx 0 75rpx 20rpx;white-space:nowrap;width:600rpx}.box .trip .box-day .time_line .time_item .spot_introduction .content-box .hote_item{background:#fff;border-radius:20rpx;box-shadow:0rpx 4rpx 20rpx 0rpx rgba(0,0,0,.05);display:inline-block;height:100%;margin-right:20rpx;padding:10rpx;vertical-align:top;white-space:break-spaces;width:231rpx}.box .trip .box-day .time_line .time_item .spot_introduction .content-box .hote_item .hote_img{border-radius:10rpx;height:210rpx;width:210rpx}.box .trip .box-day .time_line .time_item .spot_introduction .content-box .hote_item .name{color:rgba(0,0,0,.7);font-size:28rpx;margin-top:10rpx;overflow:auto}.box .trip .box-day .time_line .time_item .spot_introduction .content-box .hote_item .text{color:rgba(0,0,0,.4);font-size:26rpx;margin-top:10rpx}.box .trip .box-day .time_line .time_item .spot_introduction .allHote{align-items:center;background:hsla(0,0%,100%,.5);border-radius:20rpx;display:-webkit-flex;display:flex;height:54rpx;justify-content:space-between;margin-top:-56rpx;padding:0 20rpx;width:620rpx}.box .trip .box-day .time_line .time_item .spot_introduction .allHote ._p{color:rgba(0,0,0,.7);font-size:26rpx}.box .trip .box-day .time_line .time_item .spot_introduction .allHote .goView{height:30rpx;width:30rpx}.box .trip .box-day .time_line .time_item .spot_introduction .allHote .goView image{height:100%;width:100%}.box .trip .box-day .time_line .close{border:none;padding-bottom:30rpx}.box .trip .box-day .time_line .close .markIcon{top:0}.box .trip .box-day .time_line .close .time_title .name{line-height:35rpx}.box .trip .box-day:nth-last-child(1){border-bottom:none}.box .illustrate{background:#fff;border-radius:20rpx;margin-left:20rpx;margin-top:10rpx;padding:0 20rpx 10rpx;width:710rpx}.box .illustrate .title{color:rgba(0,0,0,.8);font-size:30rpx;height:96rpx;line-height:96rpx;text-align:center;width:100%}.box .text-content{background:#fff;border-radius:20rpx;margin-left:20rpx;margin-top:10rpx;width:710rpx}.box .text-content .title{border-bottom:1rpx solid rgba(0,0,0,.1);color:rgba(0,0,0,.8);font-size:30rpx;height:96rpx;line-height:96rpx;text-align:center;width:100%}.box .text-content .content{padding:30rpx 20rpx}.box .line_submit{align-items:center;background:#fff;bottom:0;box-shadow:0rpx -10rpx 20rpx 0rpx rgba(0,0,0,.1);display:-webkit-flex;display:flex;height:130rpx;justify-content:space-between;padding:0 40rpx 30rpx;position:fixed;width:100%;z-index:1000}.box .line_submit .determine{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:40rpx;color:#fff;font-size:30rpx;height:80rpx;line-height:80rpx;text-align:center;width:650rpx}.box .line_submit .iconBox{align-items:center;display:-webkit-flex;display:flex}.box .line_submit .iconBox .submit_icon{margin-right:50rpx;overflow:visible;position:relative}.box .line_submit .iconBox .submit_icon .shareAmount{background-color:#ffcd4e;border-radius:20rpx 4rpx;bottom:75rpx;box-shadow:2rpx 2rpx 0rpx rgba(0,0,0,.1);font-size:24rpx;left:-22rpx;padding:8rpx 14rpx;position:absolute;white-space:nowrap}.box .line_submit .iconBox .submit_icon image{height:48rpx;width:48rpx}.box .line_submit .iconBox .submit_icon .text{color:#4e5969;font-size:20rpx;margin-top:-5rpx;text-align:center}.box .line_submit .iconBox .share{background:#fff;display:block;height:74rpx;line-height:30rpx;padding:0}.box .line_submit .submit_btn{display:-webkit-flex;display:flex;height:80rpx;width:100%}.box .line_submit .submit_btn .getTrip{background:rgba(255,84,17,.15);border-radius:40rpx 0 0 40rpx;color:rgba(0,0,0,.6)}.box .line_submit .submit_btn .application,.box .line_submit .submit_btn .getTrip{align-items:center;display:-webkit-flex;display:flex;font-size:28rpx;height:100%;justify-content:center;width:50%}.box .line_submit .submit_btn .application{background:linear-gradient(90deg,#fc4a9b,#ff5413);border-radius:0 40rpx 40rpx 0;color:#fff}.box .selectDateBox{background:#fff;margin-bottom:130rpx}.box .selectDateBox .title{color:#333;font-size:36rpx;line-height:54rpx;padding:20rpx 20rpx 0}.box .selectDateBox .content{width:100%}.box .detailBox{max-height:1100rpx;min-height:400rpx;width:750rpx}.box .detailBox .title{color:#333;font-size:36rpx;padding:40rpx 0;text-align:center}.box .detailBox .img-style{align-items:center;display:-webkit-flex;display:flex;justify-content:center}.box .couponContent{background:#fff;max-height:1100rpx;min-height:800rpx;padding:40rpx 40rpx 0;width:750rpx}.box .couponContent .title{color:#333;font-size:32rpx;margin:42rpx 0 35rpx}.box .couponContent .coupon-list{height:800rpx;margin-bottom:51rpx}.box .couponContent .coupon-list .coupon-item .box,.box .couponContent .coupon-list .coupon-item{display:-webkit-flex;display:flex;flex-direction:column}.box .couponContent .coupon-list .coupon-item .box{background-color:#fff;margin-bottom:22rpx;position:relative;z-index:999}.box .couponContent .coupon-list .coupon-item .box .stamp{height:100rpx;left:360rpx;position:absolute;top:20rpx;width:100rpx}.box .couponContent .coupon-list .coupon-item .box .left{background:#fff;border:1rpx solid #d3d3d3;border-radius:20rpx 0rpx 0rpx 20rpx;border-right:none;display:-webkit-flex;display:flex;flex-direction:column;height:200rpx;padding:30rpx 0 25rpx 20rpx;width:446rpx}.box .couponContent .coupon-list .coupon-item .box .left .name{-webkit-box-orient:vertical;-webkit-line-clamp:2;color:rgba(0,0,0,.8);display:-webkit-box;font-size:28rpx;font-weight:600;line-height:33rpx;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.box .couponContent .coupon-list .coupon-item .box .left .date{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400;line-height:28rpx;margin-top:10rpx}.box .couponContent .coupon-list .coupon-item .box .left .detail{bottom:20rpx;display:-webkit-flex;display:flex;position:absolute}.box .couponContent .coupon-list .coupon-item .box .left .detail .look{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400;line-height:28rpx;margin-right:10rpx}.box .couponContent .coupon-list .coupon-item .box .right{align-items:center;background:url('https://eshopfile.zhiyousx.com/170917118927429426.png')no-repeat;background-size:100% 100%;display:-webkit-flex;display:flex;flex-direction:column;height:200rpx;padding-top:16rpx;width:229rpx}.box .couponContent .coupon-list .coupon-item .box .right .ceng1{display:-webkit-flex;display:flex;height:72rpx;line-height:72rpx}.box .couponContent .coupon-list .coupon-item .box .right .ceng1 .yang{color:#ff5411;font-size:40rpx;font-weight:400}.box .couponContent .coupon-list .coupon-item .box .right .ceng1 .money{color:#ff5411;font-size:50rpx;font-weight:400}.box .couponContent .coupon-list .coupon-item .box .right .ceng2{color:rgba(0,0,0,.8);font-size:24rpx;font-weight:400;height:35rpx;line-height:35rpx;margin-bottom:10rpx}.box .couponContent .coupon-list .coupon-item .box .right .ceng3{background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:40rpx 40rpx 40rpx 40rpx;color:#fff;font-size:24rpx;height:50rpx;line-height:50rpx;text-align:center;width:160rpx}.box .couponContent .coupon-list .coupon-item .box .right .ceng5{background:linear-gradient(253deg,rgba(255,84,19,.4),rgba(252,74,155,.4));border-radius:40rpx 40rpx 40rpx 40rpx;color:rgba(222,62,62,.9);font-size:24rpx;height:50rpx;line-height:50rpx;text-align:center;width:160rpx}.box .couponContent .coupon-list .coupon-item .box .right .ceng4{border:1rpx solid #ff5411;border-radius:40rpx 40rpx 40rpx 40rpx;color:#ff5411;font-size:24rpx;height:50rpx;line-height:50rpx;text-align:center;width:160rpx}.box .couponContent .coupon-list .coupon-item .box .introduce{background:#f9f9f9;border-radius:0rpx 0rpx 20rpx 20rpx;box-shadow:0rpx 4rpx 10rpx 0rpx rgba(0,0,0,.08);color:#868686;display:-webkit-flex;display:flex;font-size:22rpx;height:0;line-height:34rpx;margin-top:-10rpx;overflow:hidden;padding:0rpx 24rpx;transition:.3s;width:669rpx}.box .couponContent .coupon-list .coupon-item .box .introduce.extend{height:auto;padding:24rpx}.box .couponContent .coupon-list .coupon-item .box .introduce .wenzi{color:rgba(0,0,0,.3);font-size:24rpx;font-weight:400}.box .btn{border-top:1rpx solid #d3d3d3;display:-webkit-flex;display:flex;justify-content:center;padding:10rpx 0 30rpx;width:750rpx}.box .btn .sure{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:40rpx 40rpx 40rpx 40rpx;color:#fff;font-size:30rpx;font-weight:400;height:80rpx;line-height:80rpx;text-align:center;width:650rpx}.box .service-box{background:#fff;margin-bottom:150rpx;max-height:1100rpx;min-height:800rpx;padding:40rpx 40rpx 0;width:750rpx}.box .service-box .title{color:#333;font-size:36rpx;line-height:54rpx}.box .service-box .content-service{max-height:1000rpx}.box .service-box .content-service .service-item{margin-top:50rpx}.box .service-box .content-service .service-item .title{align-items:center;display:-webkit-flex;display:flex}.box .service-box .content-service .service-item .title .remark-icon{height:26rpx;margin-right:5rpx;width:26rpx}.box .service-box .content-service .service-item .title .text{color:rgba(0,0,0,.8);font-size:32rpx;line-height:26rpx}.box .service-box .content-service .service-item .content{color:rgba(0,0,0,.7);font-size:26rpx;line-height:40rpx;margin-top:20rpx}.loadingBox{height:100vh;overflow:hidden}.shop-box{align-items:center;background:#fff;border-radius:20rpx;height:170rpx;justify-content:space-between;margin:20rpx;padding:0 30rpx}.shop-box .left,.shop-box{display:-webkit-flex;display:flex}.shop-box .left .shop-img{border-radius:50%;height:100rpx;margin-right:20rpx;width:100rpx}.shop-box .left .remark{height:120rpx;padding-top:13rpx}.shop-box .left .remark .name{align-items:center;display:-webkit-flex;display:flex}.shop-box .left .remark .name .text{color:#333;font-size:28rpx;font-weight:700;max-width:300rpx}.shop-box .left .remark .name .lable{align-items:center;background:rgba(255,84,17,.15);border-radius:16rpx;color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;font-size:20rpx;height:32rpx;justify-content:center;margin-left:10rpx;width:88rpx}.shop-box .left .remark .name .lable .lable-icon{height:24rpx;margin-right:4rpx;width:24rpx}.shop-box .left .remark .brief{align-items:center;display:-webkit-flex;display:flex;margin-top:10rpx}.shop-box .left .remark .brief .text{color:#666;font-size:24rpx}.shop-box .shop-btn{align-items:center;background:#eee;border-radius:20rpx;color:#333;display:-webkit-flex;display:flex;font-size:22rpx;height:44rpx;justify-content:center;line-height:44rpx;width:130rpx}.dis{opacity:.5}
</style>
