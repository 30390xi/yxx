<template>
<view class="u-wrap">
    <uni-navbar class="" id="navBar" title="详细信息"></uni-navbar>
    <view class="tab-box" id="nav">
        <view class="title-box" v-if="hasSsfw" @click="loc('ssfw')">
            <view class="left">
                <view :class="['name','',locations=='ssfw'?'active':'']">{{detailObj.facilitiesServicesTitle||'设施服务'}}</view>
                <view class="line" v-if="locations=='ssfw'"></view>
            </view>
        </view>
        <view class="title-box" v-if="hasTstj" @click="loc('tstj')">
            <view class="left">
                <view :class="['name','',locations=='tstj'?'active':'']">{{detailObj.hotelPolicyTitle||'入住政策'}}</view>
                <view class="line" v-if="locations=='tstj'"></view>
            </view>
        </view>
        <view class="title-box" v-if="hasTraffic" @click="loc('ywxz')">
            <view class="left">
                <view :class="['name','',locations=='ywxz'?'active':'']">{{detailObj.trafficGuideTitle||'交通指南'}}</view>
                <view class="line" v-if="locations=='ywxz'"></view>
            </view>
        </view>
    </view>
    <scroll-view class="scroll-box" :scrollIntoView="boxId" :scrollWithAnimation="true" scrollY="true" :style="'height:'+winHeight-navBarH-windowWidth/750*150+'px'+';'" v-if="showScroll" @scroll="onScrolling($event)">
        <view class="bg">
            <view class="tq-box" id="ssfw">
                <view :class="['item','',activeDay==item.timeType?'active':'']" v-for="(item, __i0__) in $root.l0">
                    <view class="t">
                        <view class="">{{item.m0}}</view>
                    </view>
                    <view class="b">{{item.weather+' | '+item.nightAirTemperature+'/'+item.dayAirTemperature+'℃'}}</view>
                </view>
            </view>
            <view class="row row1" v-if="detailObj.noticeMsg">
                <view class="title-box">重要通知</view>
                <view class="content-box">
                    <u-parse class=" vue-ref" ref="noticeMsg" :html="detailObj.noticeMsg" :lazyLoad="true" style="text-indent:0;word-break:break-all;white-space:pre-wrap;" :tagStyle="parseStyle" @imgtap="priviewImg()"></u-parse>
                </view>
            </view>
            <view class="row row3" :style="hasSsfw?'':'height:2rpx;visibility: hidden,margin-bottom:0;'">
                <view class="title-box" v-if="hasSsfw">{{detailObj.facilitiesServicesTitle||'设施服务'}}</view>
                <view class="content-box" v-if="detailObj.hotelFacilitiesServicesSysTagVo.parkingTagList&&detailObj.hotelFacilitiesServicesSysTagVo.parkingTagList[0]||detailObj.hotelAdditionalExplainVo.parkingAdditionalExplainVoList&&detailObj.hotelAdditionalExplainVo.parkingAdditionalExplainVoList[0]">
                    <view class="content-title-box">
                        <image mode class="" src="https://eshopfile.zhiyousx.com/2022082510313514843.png"></image>停车场</view>
                    <view class="icon-box">
                        <view class="item" v-for="(item, __i1__) in detailObj.hotelFacilitiesServicesSysTagVo.parkingTagList">
                            <image mode class="" :src="item.tagUrl"></image>
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                    <view class="dic"></view>
                    <view class="table" v-for="(item, __i2__) in $root.l2">
                        <view class="tr first">
                            <view class="td" style="font-weight:bold;">{{item.additionalExplainTitle||''}}</view>
                        </view>
                        <view class="tr">
                            <view class="td">
                                <text class="" v-for="(text, __i3__) in item.l1">{{text}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="content-box" v-if="detailObj.hotelFacilitiesServicesSysTagVo.trafficTagList&&detailObj.hotelFacilitiesServicesSysTagVo.trafficTagList[0]||detailObj.hotelAdditionalExplainVo.trafficAdditionalExplainVoList&&detailObj.hotelAdditionalExplainVo.trafficAdditionalExplainVoList[0]">
                    <view class="content-title-box">
                        <image mode class="" src="https://eshopfile.zhiyousx.com/2022082316535478170.png"></image>交通服务</view>
                    <view class="icon-box">
                        <view class="item" v-for="(item, __i4__) in detailObj.hotelFacilitiesServicesSysTagVo.trafficTagList">
                            <image mode class="" :src="item.tagUrl"></image>
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                    <view class="dic"></view>
                    <view class="table" v-for="(item, __i5__) in $root.l4">
                        <view class="tr first">
                            <view class="td" style="font-weight:bold;">{{item.additionalExplainTitle||''}}</view>
                        </view>
                        <view class="tr">
                            <view class="td">
                                <text class="" v-for="(text, __i6__) in item.l3">{{text}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="content-box" v-if="detailObj.hotelFacilitiesServicesSysTagVo.recreationFacilitiesTagList&&detailObj.hotelFacilitiesServicesSysTagVo.recreationFacilitiesTagList[0]||detailObj.hotelAdditionalExplainVo.recreationFacilitiesAdditionalExplainVoList&&detailObj.hotelAdditionalExplainVo.recreationFacilitiesAdditionalExplainVoList[0]">
                    <view class="content-title-box">
                        <image mode class="" src="https://eshopfile.zhiyousx.com/2022082316553191179.png"></image>玩乐活动设施</view>
                    <view class="icon-box">
                        <view class="item" v-for="(item, __i7__) in detailObj.hotelFacilitiesServicesSysTagVo.recreationFacilitiesTagList">
                            <image mode class="" :src="item.tagUrl"></image>
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                    <view class="dic"></view>
                    <view class="table" v-for="(item, __i8__) in $root.l6">
                        <view class="tr first">
                            <view class="td" style="font-weight:bold;">{{item.additionalExplainTitle||''}}</view>
                        </view>
                        <view class="tr">
                            <view class="td">
                                <text class="" v-for="(text, __i9__) in item.l5">{{text}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="content-box" v-if="detailObj.hotelFacilitiesServicesSysTagVo.restaurantTagList&&detailObj.hotelFacilitiesServicesSysTagVo.restaurantTagList[0]||detailObj.hotelAdditionalExplainVo.trafficAdditionalExplainVoList&&detailObj.hotelAdditionalExplainVo.restaurantAdditionalExplainVoList[0]">
                    <view class="content-title-box">
                        <image mode class="" src="https://eshopfile.zhiyousx.com/2022082317011321205.png"></image>餐饮服务</view>
                    <view class="icon-box">
                        <view class="item" v-for="(item, __i10__) in detailObj.hotelFacilitiesServicesSysTagVo.restaurantTagList">
                            <image mode class="" :src="item.tagUrl"></image>
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                    <view class="dic"></view>
                    <view class="table" v-for="(item, __i11__) in $root.l8">
                        <view class="tr first">
                            <view class="td" style="font-weight:bold;">{{item.additionalExplainTitle||''}}</view>
                        </view>
                        <view class="tr">
                            <view class="td">
                                <text class="" v-for="(text, __i12__) in item.l7">{{text}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="content-box" v-if="detailObj.hotelFacilitiesServicesSysTagVo.childrenTagList&&detailObj.hotelFacilitiesServicesSysTagVo.childrenTagList[0]||detailObj.hotelAdditionalExplainVo.childrenAdditionalExplainVoList&&detailObj.hotelAdditionalExplainVo.childrenAdditionalExplainVoList[0]">
                    <view class="content-title-box">
                        <image mode class="" src="https://eshopfile.zhiyousx.com/2022082317013169808.png"></image>儿童设施</view>
                    <view class="icon-box">
                        <view class="item" v-for="(item, __i13__) in detailObj.hotelFacilitiesServicesSysTagVo.childrenTagList">
                            <image mode class="" :src="item.tagUrl"></image>
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                    <view class="dic"></view>
                    <view class="table" v-for="(item, __i14__) in $root.l10">
                        <view class="tr first">
                            <view class="td" style="font-weight:bold;">{{item.additionalExplainTitle||''}}</view>
                        </view>
                        <view class="tr">
                            <view class="td">
                                <text class="" v-for="(text, __i15__) in item.l9">{{text}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="content-box" v-if="detailObj.hotelFacilitiesServicesSysTagVo.massageTagList&&detailObj.hotelFacilitiesServicesSysTagVo.massageTagList[0]||detailObj.hotelAdditionalExplainVo.massageAdditionalExplainVoList&&detailObj.hotelAdditionalExplainVo.massageAdditionalExplainVoList[0]">
                    <view class="content-title-box">
                        <image mode class="" src="https://eshopfile.zhiyousx.com/2022082317021511027.png"></image>康体设施</view>
                    <view class="icon-box">
                        <view class="item" v-for="(item, __i16__) in detailObj.hotelFacilitiesServicesSysTagVo.massageTagList">
                            <image mode class="" :src="item.tagUrl"></image>
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                    <view class="dic"></view>
                    <view class="table" v-for="(item, __i17__) in $root.l12">
                        <view class="tr first">
                            <view class="td" style="font-weight:bold;">{{item.additionalExplainTitle||''}}</view>
                        </view>
                        <view class="tr">
                            <view class="td">
                                <text class="" v-for="(text, __i18__) in item.l11">{{text}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="content-box" v-if="detailObj.hotelFacilitiesServicesSysTagVo.receptionTagList&&detailObj.hotelFacilitiesServicesSysTagVo.receptionTagList[0]||detailObj.hotelAdditionalExplainVo.receptionAdditionalExplainVoList&&detailObj.hotelAdditionalExplainVo.receptionAdditionalExplainVoList[0]">
                    <view class="content-title-box">
                        <image mode class="" src="https://eshopfile.zhiyousx.com/2022082317022947309.png"></image>前台服务</view>
                    <view class="icon-box">
                        <view class="item" v-for="(item, __i19__) in detailObj.hotelFacilitiesServicesSysTagVo.receptionTagList">
                            <image mode class="" :src="item.tagUrl"></image>
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                    <view class="dic"></view>
                    <view class="table" v-for="(item, __i20__) in $root.l14">
                        <view class="tr first">
                            <view class="td" style="font-weight:bold;">{{item.additionalExplainTitle||''}}</view>
                        </view>
                        <view class="tr">
                            <view class="td">
                                <text class="" v-for="(text, __i21__) in item.l13">{{text}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="content-box" v-if="detailObj.hotelFacilitiesServicesSysTagVo.cleanTagList&&detailObj.hotelFacilitiesServicesSysTagVo.cleanTagList[0]||detailObj.hotelAdditionalExplainVo.cleanAdditionalExplainVoList&&detailObj.hotelAdditionalExplainVo.cleanAdditionalExplainVoList[0]">
                    <view class="content-title-box">
                        <image mode class="" src="https://eshopfile.zhiyousx.com/2022082510322805349.png"></image>清洁服务</view>
                    <view class="icon-box">
                        <view class="item" v-for="(item, __i22__) in detailObj.hotelFacilitiesServicesSysTagVo.cleanTagList">
                            <image mode class="" :src="item.tagUrl"></image>
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                    <view class="dic"></view>
                    <view class="table" v-for="(item, __i23__) in $root.l16">
                        <view class="tr first">
                            <view class="td" style="font-weight:bold;">{{item.additionalExplainTitle||''}}</view>
                        </view>
                        <view class="tr">
                            <view class="td">
                                <text class="" v-for="(text, __i24__) in item.l15">{{text}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="content-box" v-if="detailObj.hotelFacilitiesServicesSysTagVo.businessTagList&&detailObj.hotelFacilitiesServicesSysTagVo.businessTagList[0]||detailObj.hotelAdditionalExplainVo.businessAdditionalExplainVoList&&detailObj.hotelAdditionalExplainVo.businessAdditionalExplainVoList[0]">
                    <view class="content-title-box">
                        <image mode class="" src="https://eshopfile.zhiyousx.com/2022082510334039578.png"></image>商务服务</view>
                    <view class="icon-box">
                        <view class="item" v-for="(item, __i25__) in detailObj.hotelFacilitiesServicesSysTagVo.businessTagList">
                            <image mode class="" :src="item.tagUrl"></image>
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                    <view class="dic"></view>
                    <view class="table" v-for="(item, __i26__) in $root.l18">
                        <view class="tr first">
                            <view class="td" style="font-weight:bold;">{{item.additionalExplainTitle||''}}</view>
                        </view>
                        <view class="tr">
                            <view class="td">
                                <text class="" v-for="(text, __i27__) in item.l17">{{text}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="content-box" v-if="detailObj.hotelFacilitiesServicesSysTagVo.publicAreaTagList&&detailObj.hotelFacilitiesServicesSysTagVo.publicAreaTagList[0]||detailObj.hotelAdditionalExplainVo.publicAreaAdditionalExplainVoList&&detailObj.hotelAdditionalExplainVo.publicAreaAdditionalExplainVoList[0]">
                    <view class="content-title-box">
                        <image mode class="" src="https://eshopfile.zhiyousx.com/2022082317032159442.png"></image>公共区</view>
                    <view class="icon-box">
                        <view class="item" v-for="(item, __i28__) in detailObj.hotelFacilitiesServicesSysTagVo.publicAreaTagList">
                            <image mode class="" :src="item.tagUrl"></image>
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                    <view class="dic"></view>
                    <view class="table" v-for="(item, __i29__) in $root.l20">
                        <view class="tr first">
                            <view class="td" style="font-weight:bold;">{{item.additionalExplainTitle||''}}</view>
                        </view>
                        <view class="tr">
                            <view class="td">
                                <text class="" v-for="(text, __i30__) in item.l19">{{text}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="content-box" v-if="detailObj.hotelFacilitiesServicesSysTagVo.freeBarrierTagList&&detailObj.hotelFacilitiesServicesSysTagVo.freeBarrierTagList[0]||detailObj.hotelAdditionalExplainVo.freeBarrierAdditionalExplainVoList&&detailObj.hotelAdditionalExplainVo.freeBarrierAdditionalExplainVoList[0]">
                    <view class="content-title-box">
                        <image mode class="" src="https://eshopfile.zhiyousx.com/2022082317034072932.png"></image>无障碍设施服务</view>
                    <view class="icon-box">
                        <view class="item" v-for="(item, __i31__) in detailObj.hotelFacilitiesServicesSysTagVo.freeBarrierTagList">
                            <image mode class="" :src="item.tagUrl"></image>
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                    <view class="dic"></view>
                    <view class="table" v-for="(item, __i32__) in $root.l22">
                        <view class="tr first">
                            <view class="td" style="font-weight:bold;">{{item.additionalExplainTitle||''}}</view>
                        </view>
                        <view class="tr">
                            <view class="td">
                                <text class="" v-for="(text, __i33__) in item.l21">{{text}}</text>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="content-box" v-if="detailObj.hotelFacilitiesServicesSysTagVo.securityTagList&&detailObj.hotelFacilitiesServicesSysTagVo.securityTagList[0]||detailObj.hotelAdditionalExplainVo.securityAdditionalExplainVoList&&detailObj.hotelAdditionalExplainVo.securityAdditionalExplainVoList[0]">
                    <view class="content-title-box">
                        <image mode class="" src="https://eshopfile.zhiyousx.com/2022082317035311231.png"></image>安全措施</view>
                    <view class="icon-box">
                        <view class="item" v-for="(item, __i34__) in detailObj.hotelFacilitiesServicesSysTagVo.securityTagList">
                            <image mode class="" :src="item.tagUrl"></image>
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                    <view class="dic"></view>
                    <view class="table" v-for="(item, __i35__) in $root.l24">
                        <view class="tr first">
                            <view class="td" style="font-weight:bold;">{{item.additionalExplainTitle||''}}</view>
                        </view>
                        <view class="tr">
                            <view class="td">
                                <text class="" v-for="(text, __i36__) in item.l23">{{text}}</text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="row row4" id="tstj" :style="hasTstj?'':'height:2rpx;visibility: hidden,margin-bottom:0;'">
                <view class="title-box" v-if="hasTstj">{{detailObj.hotelPolicyTitle||'入住政策'}}</view>
                <view class="content-box" v-if="hasTstj">
                    <view class="item-list">
                        <view class="item" v-if="detailObj.hotelArrivalDepartureTime">
                            <view class="l icon-r">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/2022082317225024529.png"></image>
                            </view>
                            <view class="r">
                                <view class="t">入离时间</view>
                                <view class="b">
                                    <view class="" v-for="(text, __i37__) in $root.l25">{{text}}</view>
                                </view>
                            </view>
                        </view>
                        <view class="item" v-if="detailObj.hotelReceptionPolicy">
                            <view class="l icon-r">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/2022082317230826523.png"></image>
                            </view>
                            <view class="r">
                                <view class="t">人群接待政策</view>
                                <view class="b">
                                    <view class="" v-for="(text, __i38__) in $root.l26">{{text}}</view>
                                </view>
                            </view>
                        </view>
                        <view class="item" v-if="detailObj.hotelChildrenBed">
                            <view class="l icon-r">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/2022082317231935554.png"></image>
                            </view>
                            <view class="r">
                                <view class="t">儿童及加床</view>
                                <view class="b">
                                    <view class="" v-for="(text, __i39__) in $root.l27">{{text}}</view>
                                </view>
                            </view>
                        </view>
                        <view class="item" v-if="detailObj.hotelPet">
                            <view class="l icon-r">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/2022082317235969539.png"></image>
                            </view>
                            <view class="r">
                                <view class="t">宠物</view>
                                <view class="b">
                                    <view class="" v-for="(text, __i40__) in $root.l28">{{text}}</view>
                                </view>
                            </view>
                        </view>
                        <view class="item" v-if="detailObj.hotelBreakfast">
                            <view class="l icon-r">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/2022082317241423190.png"></image>
                            </view>
                            <view class="r">
                                <view class="t">早餐</view>
                                <view class="b">
                                    <view class="" v-for="(text, __i41__) in $root.l29">{{text}}</view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="row row4" :hidden="!hasTraffic" id="ywxz">
                <view class="title-box">{{detailObj.trafficGuideTitle||'交通指南'}}</view>
                <view class="content-box">
                    <view class="item-list">
                        <view class="item" v-if="item.trafficContent" v-for="(item, __i42__) in $root.l30">
                            <view class="l">
                                <image mode class="" :src="'https://eshopfile.zhiyousx.com/spotIntroNew/spotIntroNew ('+item.trafficType+2+').png'"></image>
                            </view>
                            <view class="r">
                                <view class="t">{{item.m1}}</view>
                                <view class="b">
                                    <rich-text class="" :nodes="item.trafficContent" style="font-size:28rpx;text-align:justify;"></rich-text>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="row row5" v-if="!noJqxx">
                <view class="title-box">{{''+(detailObj.scenicInfoTitle||'酒店信息')}}</view>
                <view class="content-box">
                    <view class="item-list">
                        <view class="item" v-if="detailObj.officialWebsite&&detailObj.officialWebsite[0]">
                            <view class="l">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/spotIntroNew/spotIntroNew (6).png"></image>
                            </view>
                            <view class="r">
                                <view class="t">官方网站</view>
                                <view class="b between">
                                    <view class="weibo-box" v-for="(item, __i43__) in detailObj.officialWebsite">
                                        <view class="weibo">{{item}}</view>
                                        <view class="copy">复制</view>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="item" v-if="detailObj.telephoneVoList&&detailObj.telephoneVoList[0]">
                            <view class="l">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/spotIntroNew/spotIntroNew (7).png"></image>
                            </view>
                            <view class="r">
                                <view class="t">联系电话</view>
                                <view class="b">
                                    <view class="phone-box" v-for="(item, __i44__) in detailObj.telephoneVoList">
                                        <view class="l multilineText2">{{item.telephoneTitle}}</view>
                                        <view class="r">
                                            <view class="">{{item.telephone||''}}</view>
                                            <image mode class="" src="https://eshopfile.zhiyousx.com/spotIntroNew/dianhua.png"></image>
                                        </view>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="item" v-if="detailObj.wxSubscriptionVoList&&detailObj.wxSubscriptionVoList[0]">
                            <view class="l">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/spotIntroNew/spotIntroNew (8).png"></image>
                            </view>
                            <view class="r">
                                <view class="t">微信公众号</view>
                                <view class="b" v-for="(item, __i45__) in detailObj.wxSubscriptionVoList">
                                    <view class="wx-box">
                                        <view class="t">{{item.wxSubscriptionType||''}}</view>
                                        <view class="b">
                                            <view class="m singleLineText">{{(item.wxSubscriptionName||'')+(item.wxSubscription?'（'+item.wxSubscription+'）':'')}}</view>
                                            <view class="r" v-if="item.wxSubscription">复制</view>
                                        </view>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="item" v-if="detailObj.sinaWeiboVoList&&detailObj.sinaWeiboVoList[0]">
                            <view class="l">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/spotIntroNew/spotIntroNew (9).png"></image>
                            </view>
                            <view class="r">
                                <view class="t">新浪微博</view>
                                <view class="b between" v-for="(item, __i46__) in detailObj.sinaWeiboVoList">
                                    <view class="weibo-box">
                                        <view class="weibo">{{item.sinaWeibo}}</view>
                                        <view class="copy">复制</view>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </scroll-view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              locations: "ssfw",
              detailObj: {},
              winHeight: 0,
              windowWidth: 0,
              activeDay: "f1",
              locPoint: "",
              showScroll: !1,
              weatherObj: [],
              navBarH: 48,
              location: 0,
              ssfwTop: 0,
              tstjTop: 0,
              ywxzTop: 0,
              hasYwxz: !0,
              hasSsfw: !0,
              hasTstj: !0,
              boxId: "ssfw",
              noJqxx: !1,
              _spotId: "",
              a: "",
              b: "",
              c: "",
              sTop: -1,
              navH: 0,
              hasTraffic: !1,
              thStyleObj: {
                background: "#FFFAF8",
                fontWeight: "500",
                color: "rgba(0,0,0,.5)"
              },
              parseStyle: {
                p: "word-break: break-all;"
              }
            }
          },
          onLoad: function(t) {
            this.scenicSpot(t);
            var a = this;
            this.locPoint = t.loc || "", uni.getSystemInfo({
              success: function(i) {
                a.winHeight = i.windowHeight, a.windowWidth = i.windowWidth, a.showScroll = !0
              }
            })
          },
          onShow: function() {},
          methods: {
            scenicSpot: function(t) {
              var e = this;
              i.showNavigationBarLoading(), this.$uniApi.getRequestYesLoading("GET", "base/app/v1/scenicSpot/getAppUpgradeScenicSpot?scenicId=" + t.spotId, "加载中...").then((function(t) {
                i.hideNavigationBarLoading(), e.detailObj = t.data, t.data.trafficGuideVoList && t.data.trafficGuideVoList.some((function(i) {
                  return "" != i.trafficContent
                })) && (e.hasTraffic = !0), e.getInfoStatus(), e.getSsfwStatus(), e.getTstjStatus(), e.$uniApi.getRequestNoLoading("GET", "base/v1/common/get3DayWeather?id=" + e.detailObj.cityId).then((function(i) {
                  e.weatherObj = i.data, console.log(e.weatherObj);
                  var t = e;
                  setTimeout((function() {
                    new Promise((function(i) {
                      var t = uni.createSelectorQuery();
                      t.select("#ssfw").boundingClientRect(), t.select("#tstj").boundingClientRect(), t.select("#ywxz").boundingClientRect(), t.select("#navBar").boundingClientRect(), t.select("#nav").boundingClientRect(), t.exec((function(t) {
                        i(t)
                      }))
                    })).then((function(i) {
                      t.navBarH = i[3].height, t.navH = i[4].height, t.ssfwTop = i[0].top, t.tstjTop = i[1].top - t.navH - t.navBarH - 9, t.ywxzTop = i[2].top - t.navH - t.navBarH - 9, t.locPoint && (e.boxId = t.locPoint, e.locations = t.locPoint)
                    }))
                  }), 700)
                }))
              }))
            },
            gettrafficName: function(i) {
              return 1 == i ? "公交" : 2 == i ? "地铁" : 3 == i ? "自驾" : void 0
            },
            getTstjStatus: function() {
              var i = this.detailObj;
              i.hotelArrivalDepartureTime || i.hotelBreakfast || i.hotelChildrenBed || i.hotelPet || i.hotelReceptionPolicy ? this.hasTstj = !0 : this.hasTstj = !1
            },
            getSsfwStatus: function() {
              var i = this.detailObj.hotelFacilitiesServicesSysTagVo,
                t = this.detailObj.hotelAdditionalExplainVo;
              i.businessTagList && i.businessTagList[0] || i.childrenTagList && i.childrenTagList[0] || i.cleanTagList && i.cleanTagList[0] || i.freeBarrierTagList && i.freeBarrierTagList[0] || i.massageTagList && i.massageTagList[0] || i.parkingTagList && i.parkingTagList[0] || i.publicAreaTagList && i.publicAreaTagList[0] || i.receptionTagList && i.receptionTagList[0] || i.recreationFacilitiesTagList && i.recreationFacilitiesTagList[0] || i.restaurantTagList && i.restaurantTagList[0] || i.securityTagList && i.securityTagList[0] || i.trafficTagList && i.trafficTagList[0] || t.businessAdditionalExplainVoList && t.businessAdditionalExplainVoList[0] || t.childrenAdditionalExplainVoList && t.childrenAdditionalExplainVoList[0] || t.cleanAdditionalExplainVoList && t.cleanAdditionalExplainVoList[0] || t.freeBarrierAdditionalExplainVoList && t.freeBarrierAdditionalExplainVoList[0] || t.massageAdditionalExplainVoList && t.massageAdditionalExplainVoList[0] || t.parkingAdditionalExplainVoList && t.parkingAdditionalExplainVoList[0] || t.publicAreaAdditionalExplainVoList && t.publicAreaAdditionalExplainVoList[0] || t.receptionAdditionalExplainVoList && t.receptionAdditionalExplainVoList[0] || t.recreationFacilitiesAdditionalExplainVoList && t.recreationFacilitiesAdditionalExplainVoList[0] || t.restaurantAdditionalExplainVoList && t.restaurantAdditionalExplainVoList[0] || t.securityAdditionalExplainVoList && t.securityAdditionalExplainVoList[0] || t.trafficAdditionalExplainVoList && t.trafficAdditionalExplainVoList[0] ? this.hasSsfw = !0 : this.hasSsfw = !1
            },
            getInfoStatus: function() {
              var i = this.detailObj;
              i.officialWebsite || i.telephoneVoList || i.wxSubscriptionVoList || i.sinaWeiboVoList || (this.noJqxx = !0), i.noticeMsg || i.facilitiesServicesVoList && i.facilitiesServicesVoList[0] || i.trafficGuideVoList.some((function(i) {
                return "" != i.trafficContent
              })) || i.officialWebsite && i.officialWebsite[0] || i.telephoneVoList && i.telephoneVoList[0] || i.wxSubscriptionVoList && i.wxSubscriptionVoList[0] || i.sinaWeiboVoList && i.sinaWeiboVoList[0] ? this.hasYwxz = !0 : this.hasYwxz = !1
            },
            changeActiveDay: function(i) {
              this.activeDay = i
            },
            jumpWebview: function(i) {
              -1 != i.indexOf("?") && (i = (i = i.replace("?", "*")).replace("=", "+")), this.$navigateTo({
                url: "/pages/webpage/webpage?url=".concat(i)
              })
            },
            getDayName: function(i) {
              return "f1" == i ? "今天" : "f2" == i ? "明天" : "f3" == i ? "后天" : void 0
            },
            call: function(t) {
              uni.makePhoneCall({
                phoneNumber: t
              })
            },
            copyFn: function(t) {
              uni.setClipboardData({
                data: t,
                success: function() {
                  uni.showToast({
                    title: "复制成功",
                    icon: "none"
                  })
                }
              })
            },
            priviewImg: function(i) {
              var t = i.src;
              uni.previewImage({
                current: t,
                urls: [t]
              })
            },
            loc: function(i) {
              this.boxId = i
            },
            onScrolling: function(i) {
              var t = i.detail.scrollTop;
              t < this.tstjTop ? this.locations = "ssfw" : t >= this.tstjTop && t < this.ywxzTop ? this.locations = "tstj" : t >= this.ywxzTop && (this.locations = "ywxz")
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.u-wrap{background-color:#fff;height:100vh;line-height:1}.content-box{margin-bottom:44rpx}.content-box:last-of-type{margin-bottom:0}.icon-r{margin-right:4rpx!important}.tab-box{padding:32rpx 0rpx 0rpx}.tab-box .title-box,.tab-box{display:-webkit-flex;display:flex;justify-content:center}.tab-box .title-box{align-items:center;height:122rpx;width:246rpx}.tab-box .title-box .left{position:relative;width:100%}.tab-box .title-box .left .name{color:#656565;font-size:28rpx;left:0;position:relative;text-align:center;width:100%;z-index:1}.tab-box .title-box .left .name.active{color:#000;font-size:32rpx;font-weight:700}.tab-box .title-box .left .line{background:linear-gradient(52deg,#fc4a9e,#ff5411);border-radius:8rpx;bottom:-10rpx;height:10rpx;left:50%;position:absolute;transform:translateX(-50%);width:80rpx;z-index:0}.scroll-box{height:78%}.scroll-box .bg{padding:0 40rpx 20rpx}.scroll-box .tq-box{align-items:center;display:-webkit-flex;display:flex;height:120rpx;justify-content:space-around;margin-bottom:32rpx}.scroll-box .tq-box .item.active>.t{margin-bottom:20rpx}.scroll-box .tq-box .item.active>.b,.scroll-box .tq-box .item.active>.t view{color:#333;font-weight:700}.scroll-box .tq-box .item>.t{align-items:center;display:-webkit-flex;display:flex;justify-content:center;margin-bottom:14rpx}.scroll-box .tq-box .item>.t view{color:rgba(0,0,0,.5);font-size:28rpx}.scroll-box .tq-box .item>.t image{height:48rpx;width:48rpx}.scroll-box .tq-box .item>.b{color:rgba(0,0,0,.5);font-size:28rpx}.scroll-box .row{background:#fff;border-radius:12rpx;margin-bottom:60rpx}.scroll-box .row .title-box{color:#333;font-size:30rpx;font-weight:700;line-height:42rpx;padding-bottom:28rpx}.scroll-box .row.row1{box-shadow:0 8rpx 32rpx 0 rgba(0,0,0,.11);padding:30rpx 30rpx 10rpx}.scroll-box .row.row1 .text-box{color:rgba(0,0,0,.5)}.scroll-box .row.row2{line-height:40rpx}.scroll-box .row.row2 .tr{border-top:1rpx solid #e4e4e4;display:-webkit-flex;display:flex}.scroll-box .row.row2 .tr.first{background:#fffaf8;border-top:none}.scroll-box .row.row2 .tr.first .td{font-weight:700}.scroll-box .row.row2 .tr .td{border-right:1rpx solid #e4e4e4;border-top:none;color:#656565;line-height:42rpx;padding:16rpx 10rpx;text-align:center;width:160rpx}.scroll-box .row.row2 .tr .td:last-child{border-right:none}.scroll-box .row.row2 .tr .td:nth-child(2){width:352rpx}.scroll-box .row.row3 .dic{height:19rpx}.scroll-box .row.row3 .table{border:1rpx solid #e4e4e4;border-bottom:none}.scroll-box .row.row3 .table:last-child{border-bottom:1rpx solid #e4e4e4}.scroll-box .row.row3 .table:first-child{margin-top:19rpx}.scroll-box .row.row3 .tr{display:-webkit-flex;display:flex}.scroll-box .row.row3 .tr.first{background:#fffaf8;border-bottom:1rpx solid #e4e4e4}.scroll-box .row.row3 .tr.first .td{font-weight:600}.scroll-box .row.row3 .tr .td{border-right:1rpx solid #e4e4e4;border-top:none;color:#656565;flex:1;line-height:42rpx;padding:16rpx 25rpx;text-align:left}.scroll-box .row.row3 .tr .td:last-child{border-right:none}.scroll-box .row.row3 .tr .td text{color:#656565;display:block}.scroll-box .row.row3 .content-title-box{align-items:center;color:#656565;display:-webkit-flex;display:flex;font-size:28rpx}.scroll-box .row.row3 .content-title-box image{height:44rpx;margin-right:4rpx;width:44rpx}.scroll-box .row.row3 .icon-box{display:-webkit-flex;display:flex;flex-wrap:wrap}.scroll-box .row.row3 .icon-box .item{margin-right:3rpx;padding-top:24rpx;width:165rpx}.scroll-box .row.row3 .icon-box .item:nth-child(4n){margin-right:0}.scroll-box .row.row3 .icon-box .item image{display:block;height:60rpx;margin:0 auto;width:60rpx}.scroll-box .row.row3 .icon-box .item .name{color:#858585;font-size:26rpx;line-height:40rpx;margin-top:13rpx;text-align:center}.scroll-box .row.row4 .item-list .item{display:-webkit-flex;display:flex;margin-bottom:32rpx}.scroll-box .row.row4 .item-list .item:last-child{margin-bottom:0}.scroll-box .row.row4 .item-list .item>.l{height:40rpx;margin-right:18rpx;width:40rpx}.scroll-box .row.row4 .item-list .item>.l image{height:100%;width:100%}.scroll-box .row.row4 .item-list .item>.r{flex:1;padding-top:6rpx}.scroll-box .row.row4 .item-list .item>.r>.t{color:#656565;font-size:28rpx;font-weight:700;margin-bottom:10rpx}.scroll-box .row.row4 .item-list .item>.r>.b{color:#777474;font-size:26rpx;line-height:40rpx;text-align:justify;word-break:break-all}.scroll-box .row.row5{margin-bottom:0}.scroll-box .row.row5 .item-list .item{display:-webkit-flex;display:flex;margin-bottom:38rpx}.scroll-box .row.row5 .item-list .item:last-child{margin-bottom:0}.scroll-box .row.row5 .item-list .item>.l{height:40rpx;margin-right:18rpx;width:40rpx}.scroll-box .row.row5 .item-list .item>.l image{height:100%;width:100%}.scroll-box .row.row5 .item-list .item>.r{flex:1;line-height:42rpx;word-break:break-all}.scroll-box .row.row5 .item-list .item>.r>.t{color:#656565;font-size:28rpx;font-weight:700;margin-bottom:10rpx}.scroll-box .row.row5 .item-list .item>.r>.b.between .weibo-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.scroll-box .row.row5 .item-list .item>.r>.b.between .copy{color:#ff5411;font-size:28rpx}.scroll-box .row.row5 .item-list .item>.r>.b .weibo-box{align-items:center;display:-webkit-flex;display:flex}.scroll-box .row.row5 .item-list .item>.r>.b .weibo-box .weibo{color:#777474;font-size:26rpx;margin-right:20rpx}.scroll-box .row.row5 .item-list .item>.r>.b .weibo-box image{height:32rpx;width:32rpx}.scroll-box .row.row5 .item-list .item>.r>.b .phone-box{display:inline-block;width:50%}.scroll-box .row.row5 .item-list .item>.r>.b .phone-box:nth-child(2n){margin-right:0}.scroll-box .row.row5 .item-list .item>.r>.b .phone-box>.l{color:#777474;font-size:26rpx;width:80%}.scroll-box .row.row5 .item-list .item>.r>.b .phone-box>.r{align-items:center;display:-webkit-flex;display:flex}.scroll-box .row.row5 .item-list .item>.r>.b .phone-box>.r view{color:#333;font-size:26rpx;margin-right:20rpx}.scroll-box .row.row5 .item-list .item>.r>.b .phone-box>.r image{height:35rpx;width:35rpx}.scroll-box .row.row5 .item-list .item>.r>.b .wx-box>.t{color:#777474;font-size:26rpx}.scroll-box .row.row5 .item-list .item>.r>.b .wx-box>.b{display:-webkit-flex;display:flex;justify-content:space-between}.scroll-box .row.row5 .item-list .item>.r>.b .wx-box>.b>.m{color:#777474;font-size:26rpx;width:550rpx}.scroll-box .row.row5 .item-list .item>.r>.b .wx-box>.b>.r{color:#ff5411;font-size:28rpx}
</style>
