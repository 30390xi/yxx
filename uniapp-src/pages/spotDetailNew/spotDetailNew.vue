<template>
<view class="u-wrap u-skeleton wnoscroll" :style="'background:'+'linear-gradient(to bottom,'+detailObj.topColour+','+detailObj.centralColour+' '+midinfoTop+'px)'+';'+'background-repeat:'+'no-repeat'+';'+'padding-top:'+headerH+'px'+';'+'height:'+(isShowTicket||!detailObj.centralColour?'100vh':'auto')+';'" @click="closeCsMenu($event)">
    <uni-navbar class="" :isFinding="isFinding" type="transparentFixed"></uni-navbar>
    <cs-menu class=" vue-ref" ref="csMenu" :showMenuList="showMenuList" v-if="detailObj.scenicType==1&&detailObj.closeJumpFlag==1"></cs-menu>
    <view class="top-fixed-box" :style="'padding-top:'+menuButton.top+'px'+';'+'padding-bottom:'+(isShowTicket?'100rpx':'24rpx')+';'">
        <view class="bg-color" id="top-fixed-box" :style="'background:'+detailObj.centralColour+';'+'opacity:'+1/(row2Top-headerH)*scrollTop+';'"></view>
        <view class="headerinfo" id="headerinfo" :style="'transform:'+(!inTop||isShowTicket?'translateY(0rpx)':'translateY('+headerH+'px)')+';'">
            <view class="l">
                <image class="mainImg" mode="aspectFill" :src="mainPicture"></image>
            </view>
            <view class="r">
                <view class="title singleLineText">{{ (detailObj.scenicName||'') }}</view>
                <view class="sub-title singleLineText">{{detailObj.tag||''}}</view>
            </view>
        </view>
    </view>
    <view class="" :style="'min-height:'+ticOffsetTop-headerH-6+'px'+';'">
        <view @touchmove.stop.prevent="" class="spotinfo" v-if="detailObj.scenicName">
            <image class="mainImg u-skeleton-fillet" id="row2" mode="aspectFill" :src="mainPicture"></image>
            <view class="info u-skeleton-fillet">
                <view class="title">
                    <view class="name multilineText2" :src="mainPicture" :style="'width:'+(detailObj.level&&detailObj.level>0?'340rpx':'414rpx')+';'">{{ detailObj.scenicName }}</view>
                    <view class="star" v-if="detailObj.level&&detailObj.level>0&&detailObj.type==1">{{''+detailObj.level+'A级'}}</view>
                </view>
                <view class="tag multilineText2">{{detailObj.tag}}</view>
                <view class="ranking singleLineText" v-if="detailObj.originSortInRankingVO&&detailObj.originSortInRankingVO.contentId" @click="toRanking(detailObj.originSortInRankingVO.contentId)">
                    <view class="top">{{'TOP '+detailObj.originSortInRankingVO.indexInRanking}}</view>
                    <view class="text">
                        <view class="name singleLineText">{{detailObj.originSortInRankingVO.rankingName+''}}</view>
                        <uni-icons class="" color="#6A5A40" size="12" type="arrowright"></uni-icons>
                    </view>
                </view>
            </view>
        </view>
        <view :class="['row2','u-skeleton-fillet','',!peopleNumObj.activeColor?'opacity0':'']" id="midinfo">
            <view class="notice singleLineText" v-if="detailObj.noticeTitel&&detailObj.noticeMsg" @click="opennotice($event)">
                <image class="" mode="aspect" src="https://eshopfile.zhiyousx.com/2022031709565822039.png"></image>
                <view class="singleLineText">{{detailObj.noticeTitel}}</view>
                <u-icon class="" color="#E03E1E" name="arrow-right" size="28"></u-icon>
            </view>
            <view class="t" v-if="detailObj.scenicType!=1&&detailObj.type==1">
                <view class="l">
                    <image class="" mode="widthFix" :src="closeIcon||'https://eshopfile.zhiyousx.com/2021090716325517019.png'" style="width:104%;" v-if="detailObj.openingStatus==0"></image>
                    <view class="loop-pie" v-else>
                        <view class="loop-pie-line loop-pie-r">
                            <view class="loop-pie-c loop-pie-rm" id="loop-rc" :style="'-webkit-transform:'+'rotate('+(rotateRight||0)+'deg)'+';'+'border-bottom-color:'+peopleNumObj.activeColor+';'+'border-right-color:'+peopleNumObj.activeColor+';'"></view>
                        </view>
                        <view class="loop-pie-line loop-pie-l">
                            <view class="loop-pie-c loop-pie-lm" id="loop-lc" :style="'-webkit-transform:'+'rotate('+(rotateLeft||0)+'deg)'+';'+'border-bottom-color:'+peopleNumObj.activeColor+';'+'border-right-color:'+peopleNumObj.activeColor+';'"></view>
                        </view>
                        <image class="" mode="aspectFill" :src="peopleNumObj.imgUrl"></image>
                    </view>
                </view>
                <view class="m">
                    <view class="p1">人流量情况</view>
                    <view class="p2" :style="'color:'+peopleNumObj.activeColor+';'">{{peopleNumObj.text}}</view>
                </view>
                <view class="r">
                    <view class="item">
                        <view class="p1">实时人数</view>
                        <view class="p1">{{!detailObj.realTimeNum||detailObj.realTimeNum==0||detailObj.openingStatus==0?'暂无':detailObj.realTimeNum}}</view>
                    </view>
                    <view class="item">
                        <view class="p1">承载量</view>
                        <view class="p1">{{detailObj.capacity}}</view>
                    </view>
                </view>
            </view>
            <view class="hotel_info" v-if="detailObj.type==2">
                <view class="ls">
                    <view class="p1 _p">人均</view>
                    <view class="p2 _p">{{detailObj.perCapitaConsumption}}</view>
                </view>
                <view class="ls">
                    <view class="p1 _p">菜系</view>
                    <view class="p2 _p">{{detailObj.businessType}}</view>
                </view>
                <view class="ls">
                    <view class="p1 _p">营业时间</view>
                    <view class="p2 _p">{{detailObj.businessHours}}</view>
                </view>
            </view>
            <view class="hotel_info" v-if="detailObj.type==3">
                <view class="ls">
                    <view class="p1 _p">开业时间</view>
                    <view class="p2 _p">{{detailObj.businessHours}}</view>
                </view>
                <view class="ls">
                    <view class="p1 _p">房间数量</view>
                    <view class="p2 _p">{{detailObj.hotelRoomNum}}</view>
                </view>
                <view class="ls">
                    <view class="p1 _p">等级</view>
                    <view class="p2 _p">{{detailObj.businessType}}</view>
                </view>
            </view>
            <view class="hotel_info" v-if="detailObj.type==4">
                <view class="ls">
                    <view class="p1 _p">人均</view>
                    <view class="p2 _p">{{detailObj.perCapitaConsumption}}</view>
                </view>
                <view class="ls">
                    <view class="p1 _p">类型</view>
                    <view class="p2 _p">{{detailObj.businessType}}</view>
                </view>
                <view class="ls">
                    <view class="p1 _p">营业时间</view>
                    <view class="p2 _p">{{detailObj.businessHours}}</view>
                </view>
            </view>
            <view class="b">
                <view :class="['line','',detailObj.scenicType!=1?'bordertop':'']" v-if="detailObj.type==1" @click="jumpSpotIntro()">
                    <image class="icon" :src="detailObj.openTimeIcon||'https://eshopfile.zhiyousx.com/2021061516504034012.png'"></image>
                    <view class="text singleLineText">{{''+(detailObj.openTimeTitle||'开放时间')}}<text class="">｜</text>
                        <block v-if="detailObj.scenicType!=1">{{detailObj.reservationNoticeTitle||'优惠政策'}}<text class="">｜</text>
                        </block>{{(detailObj.visitNoticeTitle||'游玩须知')+''}}</view>
                    <image class="jt" src="../../static/images/jt.png"></image>
                </view>
                <view :class="['line','hotelStyle','',detailObj.scenicType!=1?'bordertop':'']" v-if="detailObj.type==2" @click="jumpHotelIntro()">
                    <image class="icon" :src="detailObj.openTimeIcon||'https://eshopfile.zhiyousx.com/169157356251588574.png'"></image>
                    <view class="text singleLineText">{{''+(detailObj.facilitiesServicesTitle||'设施服务')}}<text class="">｜</text>
                        <block v-if="detailObj.scenicType!=1">{{detailObj.specialRecommendationTitle||'特色推荐'}}<text class="">｜</text>
                        </block>{{(detailObj.trafficGuideTitle||'交通指南')+''}}</view>
                    <image class="jt" src="../../static/images/jt.png"></image>
                </view>
                <view :class="['line','hotelStyle','',detailObj.scenicType!=1?'bordertop':'']" v-if="detailObj.type==3" @click="jumpHotelIntro()">
                    <image class="icon" :src="detailObj.openTimeIcon||'https://eshopfile.zhiyousx.com/169157358342351003.png'"></image>
                    <view class="text singleLineText">{{''+(detailObj.facilitiesServicesTitle||'设施服务')}}<text class="">｜</text>
                        <block v-if="detailObj.scenicType!=1">{{detailObj.hotelPolicyTitle||'入住政策'}}<text class="">｜</text>
                        </block>{{(detailObj.trafficGuideTitle||'交通指南')+''}}</view>
                    <image class="jt" src="../../static/images/jt.png"></image>
                </view>
                <view :class="['line','hotelStyle','',detailObj.scenicType!=1?'bordertop':'']" v-if="detailObj.type==4" @click="jumpHotelIntro()">
                    <image class="icon" :src="detailObj.openTimeIcon||'https://eshopfile.zhiyousx.com/169157447415155789.png'"></image>
                    <view class="text singleLineText">{{''+(detailObj.storeInfoTitle||'门店信息')}}<text class="">｜</text>
                        <block v-if="detailObj.scenicType!=1">{{detailObj.facilitiesServicesTitle||'设施服务'}}<text class="">｜</text>
                        </block>{{(detailObj.trafficGuideTitle||'交通指南')+''}}</view>
                    <image class="jt" src="../../static/images/jt.png"></image>
                </view>
                <view :class="['line','bordertop','',detailObj.type!=1?'hotelStyle':'']" @click="openMap($event)">
                    <image class="icon" :src="detailObj.positionIcon||'https://eshopfile.zhiyousx.com/2021061516513797848.png'"></image>
                    <view class="text singleLineText">{{detailObj.address}}</view>
                    <image class="jt" src="../../static/images/jt.png"></image>
                </view>
            </view>
        </view>
        <xjtu-entrance :baseInfo="evaluationObj" class="" v-if="detailObj.evaluation&&evaluationObj"></xjtu-entrance>
        <view class="row5 u-skeleton-fillet" v-if="$root.g0>0">
            <u-swiper bgColor="rgba(0,0,0,0)" borderRadius="10" class="" height="268" indicatorActiveColor="#FFFFFF" interval="5000" :list="topBannerList" name="advertPic" :showIndicator="$root.g1>1?true:false" @click="swiperTopClick1()"></u-swiper>
        </view>
        <view class="row1 u-skeleton-fillet" v-if="detailObj.otherIntroduction">
            <image class="otherIntroduction" mode="widthFix" :src="detailObj.otherIntroduction"></image>
        </view>
        <view class="row3 u-skeleton-fillet" v-if="detailObj&&( detailObj.tagIncludeVoList[0]||detailObj.originRankingList[0]||detailObj.sysTagVoList[0]||detailObj.tagPeopleVoList[0]||detailObj.hotelSpecialTagList[0]||detailObj.businessType||detailObj.interestTagList[0] )">
            <view class="item" v-if="detailObj&&( detailObj.sysTagVoList[0]||detailObj.tagPeopleVoList[0]||detailObj.hotelSpecialTagList[0]||detailObj.businessType||detailObj.interestTagList[0] )">
                <view class="l">标签</view>
                <view class="r">
                    <view class="tag" :key="id" v-for="(item, __i0__) in detailObj.sysTagVoList">
                        <view class="inner">
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                    <view class="tag" v-if="detailObj.businessType">
                        <view class="inner">
                            <view class="name">{{ detailObj.businessType }}</view>
                        </view>
                    </view>
                    <view class="tag" :key="id" v-for="(item, __i1__) in detailObj.tagPeopleVoList">
                        <view class="inner">
                            <view class="name">{{''+item.name}}</view>
                        </view>
                    </view>
                    <view class="tag" :key="id" v-for="(item, __i2__) in detailObj.hotelSpecialTagList">
                        <view class="inner">
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                    <view class="tag" :key="id" v-for="(item, __i3__) in detailObj.interestTagList">
                        <view class="inner">
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="item u-skeleton-fillet" v-if="detailObj.tagIncludeVoList[0]||detailObj.originRankingList[0]">
                <view class="l">收录</view>
                <view class="r">
                    <view class="tag" :key="id" v-for="(item, __i4__) in detailObj.tagIncludeVoList">
                        <view class="inner" style="padding-left:18rpx;">
                            <image mode class="icon" :src="item.tagUrl?item.tagUrl:'https://eshopfile.zhiyousx.com/2021061517491399963.png'"></image>
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                    <view class="tag" :key="contentId" v-for="(item, __i5__) in detailObj.originRankingList">
                        <view class="inner" style="padding-left:18rpx;">
                            <image mode class="icon" :src="item.tagUrl?item.tagUrl:'https://eshopfile.zhiyousx.com/2021072117045189271.png'"></image>
                            <view class="name">{{item.rankingName}}</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view :class="['row4','',!peopleNumObj.activeColor?'opacity0':'']">
            <view class="title-box">
                <view class="l">{{$root.m0}}</view>
                <view class="button-show" v-if="lines>6" @click="e0($event)">
                    <view class="button-show-text">{{ (isHide?'展开':'收起') }}</view>
                    <u-icon class="" color="rgba(255,255,255,0.6)" name="arrow-down" size="20" v-if="isHide"></u-icon>
                    <u-icon class="" color="rgba(255,255,255,0.6)" name="arrow-up" size="20" v-else></u-icon>
                </view>
            </view>
            <view class="content-box">
                <mote-lines-divide class="" :dt="detailObj.introductionText" expandText="展开" foldHint="收起" :isHide="isHide" :line="6" style="color:#fff;" @line_show="getLines()"></mote-lines-divide>
            </view>
        </view>
        <view class="row5 u-skeleton-fillet" v-if="$root.g2>0">
            <u-swiper bgColor="rgba(0,0,0,0)" borderRadius="10" class="" height="268" indicatorActiveColor="#FFFFFF" interval="5000" :list="bannerList" name="advertPic" :showIndicator="$root.g3>0?true:false" @click="swiperTopClick2()"></u-swiper>
        </view>
        <view class="row6" v-if="detailObj.scenicSpotRelationList&&detailObj.scenicSpotRelationList[0]&&item.contentModuleName&&item.contentInfoVOList&&item.contentInfoVOList[0]" v-for="(item, __i6__) in $root.l0">
            <view class="title-box u-skeleton-fillet">
                <view class="l u-skeleton-fillet">{{item.contentModuleName}}</view>
                <view class="r u-skeleton-fillet" v-if="item.g4>3">
                    <view class="">{{'全部 '+item.g5}}</view>
                    <image mode class="" src="https://eshopfile.zhiyousx.com/spotDetailNew/jiantou.png"></image>
                </view>
            </view>
            <view class="item-box">
                <view class="item" v-if="indexs<3" v-for="(items, indexs) in item.contentInfoVOList">
                    <image class="img" mode="aspectFill" :src="items.coverImage"></image>
                    <view class="name multilineText2">{{items.title}}</view>
                </view>
            </view>
        </view>
        <view class="row7" v-if="detailObj.contentResourcesDtoList&&detailObj.contentResourcesDtoList[0]">
            <view class="title-box" @click="jumpSpotMedia($event)">
                <view class="l">{{showVideo?'视频/图片':'图片'}}</view>
                <view class="r">
                    <view class="">{{'全部 '+$root.g6}}</view>
                    <image mode class="" src="https://eshopfile.zhiyousx.com/spotDetailNew/jiantou.png"></image>
                </view>
            </view>
            <scroll-view class="item-box" scrollX="true" style="height:248rpx;">
                <view class="item" v-if="item.m1" v-for="(item, index) in $root.l1">
                    <image class="img" mode="aspectFill" :src="item.resourcesType==2?item.coverImage:item.resourcesUrl"></image>
                    <view class="mask" v-if="item.resourcesType==2">
                        <image mode class="icon" src="https://eshopfile.zhiyousx.com/spotDetailNew/bofang2.png"></image>
                    </view>
                </view>
            </scroll-view>
        </view>
    </view>
    <view class="ticket-box fixed" :style="'height:'+windowHeight-headerH+'px'+';'+'bottom:'+(isShowTicket?0:-windowHeight+headerH+$root.g7+'px')+';'" v-if="(showTicketList||showUnion)&&showFixTicket" @touchstart="touchStart($event)" @touchend="touchEnd($event)">
        <image class="fixedLinear" src="https://eshopfile.zhiyousx.com/2021090818342456522.png" v-if="!isShowTicket"></image>
        <view class="ticketMask" v-if="!isShowTicket" @touchstart="showTicketMask(1)"></view>
        <view class="line1" @click.stop="showTicketMask($event)">
            <view class=""></view>
        </view>
        <view class="title-box union-box" v-if="showUnion">
            <view :class="['union-tab','union-pb','',tabIndex==0?'tabAct':'']" @click="changeTab(0)">
                <view class="tab">陕西联合会员权益</view>
            </view>
            <view :class="['union-tab','','',tabIndex==1?'tabAct':'']" v-if="showTicketList" @click="changeTab(1)">
                <view class="tab">{{ (detailObj.ticketTitle||'门票预订') }}<text class="price" v-if="!isShowTicket&&!detailObj.ticketDesc">{{'￥'+ticketArr.startingPrice}}</text>
                    <text class="" v-if="!isShowTicket&&!detailObj.ticketDesc">起</text>
                </view>
            </view>
        </view>
        <view class="title-box" v-else>
            <view class="l">{{(detailObj.ticketTitle||'门票预订')+''}}<text class="p pl" v-if="!isShowTicket&&detailObj.ticketDesc">{{detailObj.ticketDesc||''}}</text>
                <text class="p" v-if="!isShowTicket&&!detailObj.ticketDesc">{{'￥'+ticketArr.startingPrice}}</text>
                <text class="qi" v-if="!isShowTicket&&!detailObj.ticketDesc">起</text>
            </view>
            <view class="r" v-if="!isShowTicket&&detailObj.scenicType!=1">
                <view class="totalSale">{{''+$root.f0+'人'+(detailObj.salesNumDesc||'已购买')}}</view>
            </view>
            <view class="r" v-if="detailObj.discountVoList[0]&&isShowTicket" @click.stop="jumpSpotIntro('ydzc')">
                <view class="">{{detailObj.reservationNoticeTitle||'优待政策'}}</view>
                <image mode class="" src="https://eshopfile.zhiyousx.com/spotDetailNew/jiantoured.png"></image>
            </view>
        </view>
        <swiper class="swiper" :current="tabIndex" :style="'width:'+'100%'+';'+'height:'+swiperH+'px'+';'" @change="changeSwiper($event)">
            <swiper-item class="" v-if="showUnion">
                <union class=" vue-ref" ref="unionBox" :disScroll="disScroll" :isUnionMember="isUnionMember" :scrollFixH="swiperH" :unionEquityCard="unionEquityCard" :unionExpired="unionExpired" @showUnionPhone="showUnionPhone()"></union>
            </swiper-item>
            <swiper-item class="" v-if="showTicketList">
                <coupon class="" :couponArr="couponArr" @showYh="showYh()"></coupon>
                <ticket-info class="" :ticketAreaNoticeName="detailObj.ticketAreaNoticeName" @showTicketInfoBox="showTicketInfoBox()"></ticket-info>
                <ticket-box class=" vue-ref" ref="ticBox" :disScroll="disScroll" :isShowTicket="isShowTicket" :scrollFixH="scrollFixH" :scrollToClass="scrollToClass" :scrollToTic="scrollToTic" :showClassName="showClassName" :showTicketIndex="showTicketIndex" :showType="showType" :ticketArr="ticketArr" @toggleTicketList="toggleTicketList()" @fixTicketListScroll="fixTicketListScroll()" @buyFn="buyFn()" @showBookTip="showBookTip()" @hitClick="hitClick()" @sellOutClick="sellOutClick()"></ticket-box>
            </swiper-item>
        </swiper>
    </view>
    <view class="ticket-box relative" id="ticketBox" :style="'height:'+windowHeight-headerH+'px'+';'" v-if="showTicketList&&showrelTicket||showUnion">
        <view class="line1">
            <view class=""></view>
        </view>
        <view class="title-box union-box" v-if="showUnion">
            <view :class="['union-tab','union-pb','',tabIndex==0?'tabAct':'']" @click="changeTab(0)">
                <view class="tab">陕西联合会员权益</view>
            </view>
            <view :class="['union-tab','','',tabIndex==1?'tabAct':'']" v-if="showTicketList" @click="changeTab(1)">
                <view class="tab">{{ (detailObj.ticketTitle||'门票预订') }}<text class="price" v-if="!isShowTicket&&!detailObj.ticketDesc">{{'￥'+ticketArr.startingPrice}}</text>
                    <text class="" v-if="!isShowTicket&&!detailObj.ticketDesc">起</text>
                </view>
            </view>
        </view>
        <view class="title-box" v-else>
            <view class="l">{{ (detailObj.ticketTitle||'门票预订') }}</view>
            <view class="r" v-if="detailObj.discountVoList[0]" @click.stop="jumpSpotIntro('ydzc')">
                <view class="">{{detailObj.reservationNoticeTitle||'优待政策'}}</view>
                <image mode class="" src="https://eshopfile.zhiyousx.com/spotDetailNew/jiantoured.png"></image>
            </view>
        </view>
        <swiper class="swiper" :current="tabIndex" :style="'width:'+'100%'+';'+'height:'+swiperH+'px'+';'" @change="changeSwiper($event)">
            <swiper-item class="" v-if="showUnion">
                <union class="" :disScroll="disScroll" :isUnionMember="isUnionMember" :scrollFixH="swiperH" :unionEquityCard="unionEquityCard" :unionExpired="unionExpired" @showUnionPhone="showUnionPhone()"></union>
            </swiper-item>
            <swiper-item class="" v-if="showTicketList">
                <coupon class="" :couponArr="couponArr" @showYh="showYh()"></coupon>
                <ticket-info class="" :ticketAreaNoticeName="detailObj.ticketAreaNoticeName" @showTicketInfoBox="showTicketInfoBox()"></ticket-info>
                <ticket-box class="" :disScroll="disScroll" :isShowTicket="isShowTicket" :scrollFixH="scrollFixH" :scrollToClass="scrollToClass" :scrollToTic="scrollToTic" :showClassName="showClassName" :showTicketIndex="showTicketIndex" :showType="showType" :ticketArr="ticketArr" @toggleTicketList="toggleTicketList()" @fixTicketListScroll="fixTicketListScroll()" @buyFn="buyFn()" @showBookTip="showBookTip()" @hitClick="hitClick()" @sellOutClick="sellOutClick()"></ticket-box>
            </swiper-item>
        </swiper>
    </view>
    <sku class=" vue-ref" ref="skuP" :detailObj="detailObj" @showSku="showSku()" @showBookTip="showBookTip()" @showAllTime="showAllTimeM()" @buyFn="buyFn()"></sku>
    <book-info :bizType="bizType" :bookTipHeight="bookTipHeight" class=" vue-ref" ref="bookInfoBox" :dialogInfos="dialogInfos" :selectDate="selectDate" :showPcT="showPcT" :telephoneVoList="telephoneVoList" :ydxz="ydxz" @ydxzSellOut="ydxzSellOut()" @buyFn="buyFn()"></book-info>
    <u-popup borderRadius="32" class="" :closeable="true" height="70%" mode="bottom" :value="showYhMask" :vueSlots="['default']" @input="showYhMask = $event">
        <view class="yh-mask" v-if="showYhMask">
            <scroll-view class="content" :scrollY="true">
                <view class="item-list">
                    <view :class="['item','',item.couponStates==2?'yqg':'',item.couponStates==3?'ylq':'']" v-for="(item, index) in $root.l2">
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
                                    <block v-if="item.useTimeSlot==0">{{''+item.f1+'-'+item.f2}}</block>
                                    <block v-if="item.useTimeSlot==1">
                                        <block v-if="item.couponStates==3">{{''+item.f3+'前有效'}}</block>
                                        <block v-else>{{'领券后'+item.useTimeSlotHour+'小时内有效'}}</block>
                                    </block>
                                    <block v-if="item.useTimeSlot==2">{{ item.f4+'-'+item.f5 }}{{'可预订【'+item.f6+'-'+item.f7+'】的门票'}}</block>
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
            </scroll-view>
        </view>
    </u-popup>
    <view class="mask" v-if="showPicture">
        <view class="maskTop" :style="'top:'+statusBarHeight+8+'px'+';'">
            <uni-icons class="" color="#ffffff" size="22" type="arrowleft" @click="e1()"></uni-icons>
            <view class="num">{{ swiperCurrent+' / '+$root.g8 }}</view>
        </view>
        <swiper class="swiper" :current="currentSwiper" :duration="500" @change="swiperChange($event)">
            <swiper-item class="" :key="index" v-for="(item, index) in detailObj.contentResourcesDtoList">
                <view class="swiper-item" v-if="item.resourcesType==1">
                    <movable-area class="movable-area" :scaleArea="true">
                        <movable-view class="movable-view" direction="all" scale="true" scaleMax="4" scaleMin="1" :scaleValue="scale" @dblclick="dblclick($event)">
                            <image class="img" mode="widthFix" :src="item.resourcesUrl"></image>
                        </movable-view>
                    </movable-area>
                </view>
                <view class="swiper-item" v-if="swiperCurrent==index+1&&item.resourcesType==2">
                    <video :autoplay="true" class="swiper-item vue-ref-in-for" :controls="true" ref="video" playBtnPosition="center" :src="item.resourcesUrl"></video>
                </view>
                <view class="describe" v-if="item.describe">{{item.describe+''}}<text class=""></text>
                </view>
            </swiper-item>
        </swiper>
    </view>
    <u-popup borderRadius="20" class="" :closeable="true" height="70%" mode="bottom" :value="showNotice" :vueSlots="['default']" @input="showNotice = $event">
        <view class="noticeBox">
            <view class="title">重要通知</view>
            <scroll-view class="scontent" :scrollY="true" :style="'height:'+noticeHeight+'rpx'+';'">
                <u-parse class=" vue-ref" ref="noticeMsg" :html="detailObj.noticeMsg" :lazyLoad="true" :tagStyle="parseStyle" @imgtap="priviewImg()"></u-parse>
            </scroll-view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" height="70%" mode="bottom" :value="showTicketInfo" :vueSlots="['default']" @input="showTicketInfo = $event">
        <view class="noticeBox">
            <view class="title">小贴士</view>
            <scroll-view class="scontent" :scrollY="true" :style="'height:'+noticeHeight+'rpx'+';'">
                <u-parse class="" :html="detailObj.ticketAreaNotice||''" :lazyLoad="true" :tagStyle="parseStyle" @imgtap="priviewImg()"></u-parse>
            </scroll-view>
        </view>
    </u-popup>
    <u-popup borderRadius="30" class="" mode="bottom" :value="sharePopup" :vueSlots="['default']" @input="sharePopup = $event">
        <view class="share-box">
            <view class="title">分享到</view>
            <view class="icon-box" v-if="$root.g9">
                <view class="item">
                    <image mode class="icon" src="https://eshopfile.zhiyousx.com/2022090510365178497.png"></image>
                    <view class="t">微信好友</view>
                    <button class="sharebtn" data-aaa="111" openType="share"></button>
                </view>
                <view class="item" v-if="$root.g10" @click="e2($event)">
                    <image mode class="icon" src="https://eshopfile.zhiyousx.com/2022090510374178970.png"></image>
                    <view class="t">小程序码</view>
                </view>
                <view class="item" v-if="$root.g11" @click="e3($event)">
                    <image mode class="icon" src="https://eshopfile.zhiyousx.com/2022090510375744214.png"></image>
                    <view class="t">海报</view>
                </view>
            </view>
            <view class="close" @click="e4($event)">取消</view>
        </view>
    </u-popup>
    <u-popup class=" vue-ref" ref="uPopup" :maskCloseAble="false" mode="center" :value="showShareImg" :vueSlots="['default']" @input="showShareImg = $event">
        <view class="notice-box">
            <image class="notice-img" mode="widthFix" :showMenuByLongpress="true" :src="postUrl1"></image>
            <image mode class="notice-close" src="/static/captured/e6819c818da3962f.png" @click="e5($event)"></image>
        </view>
    </u-popup>
    <u-popup class=" vue-ref" ref="uPopup" :maskCloseAble="false" mode="center" :value="showQrCode" :vueSlots="['default']" @input="showQrCode = $event">
        <view class="notice-box">
            <image class="notice-img" mode="widthFix" :showMenuByLongpress="true" :src="qrCode"></image>
            <image mode class="notice-close" src="/static/captured/e6819c818da3962f.png" @click="e6($event)"></image>
        </view>
    </u-popup>
    <u-popup borderRadius="30" class="" mode="bottom" :value="showPhonePop" :vueSlots="['default']" @input="showPhonePop = $event">
        <view class="phone-box">
            <view class="title">商家电话</view>
            <view class="phone-row" v-if="$root.g12" v-for="(it, __i7__) in unionEquityCard.phoneList">
                <view class="left">{{ it }}</view>
                <image mode class="" src="https://eshopfile.zhiyousx.com/spotIntroNew/dianhua.png" style="width:32rpx;height:32rpx;"></image>
            </view>
            <view class="close-b" @click="e7($event)">取消</view>
        </view>
    </u-popup>
    <l-painter class="" customStyle="position: fixed; left: 200%" :isCanvasToTempFilePath="true" :vueSlots="['default']" v-if="qrCode&&ticketpostObj&&ticketpostObj.sharePosterUrl" @success="e8()">
        <l-painter-image class="" css="object-fit: fill;width:750rpx;" :src="ticketpostObj.sharePosterUrl"></l-painter-image>
        <l-painter-image class="" css="object-fit: fill;width:750rpx;" src="https://eshopfile.zhiyousx.com/2022090511375406833.png"></l-painter-image>
        <l-painter-image class="" css="object-fit: fill;width:155rpx;height:155rpx;position:absolute;bottom:13rpx;right:46rpx" :src="qrCode"></l-painter-image>
    </l-painter>
    <s-painter :board="posterData" class="" :isRenderImage="true" style="display:none;" v-if="isAndroid" @success="e9()"></s-painter>
    <painter class="painter" :palette="painterData" :widthPixels="300" v-if="painterData&&!isAndroid" @imgOK="onImgOK()"></painter>
    <l-painter class="" css="width: 452rpx; height:363rpx;position:fixed;bottom:0;left:0;" customStyle="position: fixed; left: 200%" :isCanvasToTempFilePath="true" :vueSlots="['default']" @success="e10()">
        <l-painter-image class="" css="object-fit: cover; object-position: 50% 50%;width:452rpx;height:362rpx;" :src="ticketpostObj.defaultPicUrl"></l-painter-image>
        <l-painter-view class="" css="position:absolute;width:452rpx;height:82rpx;bottom:00rpx;left:0; background:#ffffff;" :vueSlots="['default']">
            <l-painter-text class="" css="font-size:32rpx;font-weight:600;line-height:82rpx;color:#FF5411;margin-left:20rpx;white-space:no-wrap;word-break: keep-all;" text="￥"></l-painter-text>
            <l-painter-text class="" css="font-size:32rpx;font-weight:600;line-height:82rpx;color:#FF5411;white-space:no-wrap;word-break: keep-all;" :text="ticketpostObj.price+' '"></l-painter-text>
            <l-painter-text class="" css="font-size: 20rpx;line-height:82rpx;text-decoration:line-through;margin-left:10rpx;color:#D0D0D0;" text="￥"></l-painter-text>
            <l-painter-text class="" css="font-size: 20rpx;line-height:82rpx;text-decoration:line-through;color:#D0D0D0;white-space:no-wrap;word-break: keep-all;" :text="ticketpostObj.marketPrice+' '"></l-painter-text>
            <l-painter-text class="" css="height:60rpx;margin-top:11rpx;background:linear-gradient(56deg, #FC4A9E 0%, #FF5411 100%);width:200rpx;position:absolute;text-align:center;font-size:26rpx;color:#ffffff;white-space:no-wrap;word-break: keep-all;border-radius:30rpx;right:11rpx;bottom:11rpx;" :text="ticketpostObj.skuItemType==1?'立即预约':'立即预订'"></l-painter-text>
        </l-painter-view>
    </l-painter>
    <u-skeleton :animation="true" class="" :loading="loadingStatus"></u-skeleton>
    <page-container class="" :overlay="false" :show="showPC" @beforeleave="onBeforeLeave($event)"></page-container>
    <recommended-pop class=" vue-ref" ref="recommendedRef" :dialogInfos="dialogInfos" @refreshCoupon="refreshCoupon()"></recommended-pop>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            painter: function() {
              Promise.all([i.e("common/vendor"), i.e("components/tuitui-painter/painter")]).then(function() {
                return resolve(i("3a7d"))
              }.bind(null, i)).catch(i.oe)
            },
            SPainter: function() {
              Promise.all([i.e("common/vendor"), i.e("components/lime-painter/index")]).then(function() {
                return resolve(i("0778"))
              }.bind(null, i)).catch(i.oe)
            },
            coupon: function() {
              i.e("pages/spotDetailNew/components/coupon").then(function() {
                return resolve(i("fce9"))
              }.bind(null, i)).catch(i.oe)
            },
            ticketInfo: function() {
              i.e("pages/spotDetailNew/components/ticketInfo").then(function() {
                return resolve(i("e5b8"))
              }.bind(null, i)).catch(i.oe)
            },
            ticketBox: function() {
              i.e("pages/spotDetailNew/components/ticketBox").then(function() {
                return resolve(i("e01a"))
              }.bind(null, i)).catch(i.oe)
            },
            union: function() {
              i.e("pages/spotDetailNew/components/union").then(function() {
                return resolve(i("6570"))
              }.bind(null, i)).catch(i.oe)
            },
            csMenu: function() {
              i.e("pages/spotDetailNew/components/csMenu").then(function() {
                return resolve(i("8c3d"))
              }.bind(null, i)).catch(i.oe)
            },
            xjtuEntrance: function() {
              i.e("pages/spotDetailNew/components/xjtuEntrance").then(function() {
                return resolve(i("1014"))
              }.bind(null, i)).catch(i.oe)
            },
            recommendedPop: function() {
              i.e("components/recommendedPop/recommend-pop").then(function() {
                return resolve(i("3d4a"))
              }.bind(null, i)).catch(i.oe)
            },
            subscription: function() {
              i.e("components/recommendedPop/subscription").then(function() {
                return resolve(i("a1b9"))
              }.bind(null, i)).catch(i.oe)
            },
            bookInfo: function() {
              i.e("components/poi/bookInfo").then(function() {
                return resolve(i("f822"))
              }.bind(null, i)).catch(i.oe)
            },
            sku: function() {
              Promise.all([i.e("common/vendor"), i.e("components/poi/sku")]).then(function() {
                return resolve(i("0600"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          data: function() {
            return this.lastOpt = {
              type: 1,
              key: "",
              val: ""
            }, this.oldKey = "", {
              detailObj: "",
              evaluationObj: "",
              showNotice: !1,
              statusBarHeight: "",
              painterData: {},
              postUrl: "",
              postUrl2: "",
              postUrl3: "",
              showPainter: !1,
              ticketpostObj: null,
              posterData: {},
              transformNum: 1,
              isShowTicket: !1,
              isShowBookTip: !1,
              windowHeight: 0,
              touchStartX: 0,
              loadingStatus: !0,
              isAndroid: !0,
              inTop: !0,
              scrollTop: 0,
              touchStartY: 0,
              startDistance: 0,
              onTop: !0,
              peopleNumObj: {
                activeColor: "",
                percent: 20,
                imgUrl: ""
              },
              showVideo: getApp().globalData.showvideo,
              fEleTop: 0,
              fEleTopNow: 0,
              fEleTopUnion: 0,
              fEleTopNowUnion: 0,
              totalSale: 0,
              _spotId: "",
              isFinding: !1,
              auiActionmenu: {
                theme: 1,
                location: "bottom",
                items: [{
                  name: "微信",
                  icon: "iconweixin",
                  iconColor: "#1AA034"
                }]
              },
              winWidth: 0,
              weatherObj: {},
              ticketArr: [],
              showTicketList: !1,
              swiperCurrent: 1,
              swiperLenght: 0,
              currentSwiper: 0,
              couponArr: [],
              row2Top: 0,
              videoUrl: "",
              couponDetailArr: [],
              showMask: !1,
              rotateLeft: "",
              rotateRight: "",
              showrelTicket: !1,
              showPicture: !1,
              showYhMask: !1,
              midinfoTop: 400,
              htmlString: "",
              unit: 0,
              tapIndex: null,
              showFixTicket: !0,
              pageBg: {},
              mainImgInfo: {},
              headerH: 0,
              scrollFixH: 0,
              timeStr: 0,
              ydxz: {},
              base64: "",
              tListInbottom: !1,
              startInBottom: !1,
              showTicketIndex: 0,
              ticketBoxTop: 1e3,
              ticOffsetTop: 600,
              productTypeList: ["跟团游", "一日游", "自由行", "研学游"],
              parseStyle: {
                p: "word-break: break-all;"
              },
              parseStyle1: {
                p: "word-break: break-all;line-height:48rpx;"
              },
              limitStartTime: " 10:00:00",
              limitEndTime: " 22:00:00",
              requestNum: 0,
              loadingNum: 0,
              lines: 1,
              isHide: !1,
              noticeHeight: 750,
              bookTipHeight: 750,
              skuHeight: 750,
              showTicketInfo: !1,
              sharePopup: !1,
              postUrl1: "",
              showShareImg: !1,
              qrCode: "",
              showQrCode: !1,
              closeIcon: "",
              showClassName: !0,
              type: 1,
              shareMemberId: "",
              showType: 1,
              showTicketSku: !1,
              scrollToDate: "",
              scrollToTic: "",
              scrollToClass: "",
              ticH: [],
              skuSelectTicId: "",
              skuTicData: "",
              aggId: "",
              submitState: !1,
              selectedHour: "",
              tipsInfo: "",
              disScroll: !0,
              allStockMap: [],
              scale: 1,
              spotNames: ["", "景区", "饭店", "酒店", "玩乐"],
              isUnion: 0,
              swiperH: 200,
              tabIndex: 0,
              unionEquityCardId: "",
              unionEquityCard: "",
              showUnion: !1,
              showPhonePop: !1,
              isUnionMember: 0,
              unionExpired: !1,
              noCouponH: 200,
              couponH: 200,
              showMenuList: !1,
              showPoster: !1,
              menuButton: "",
              menuLeft: 0,
              menuHeight: 0,
              bannerList: [],
              topBannerList: [],
              mainPicture: "",
              showPC: !1,
              bizType: 0,
              bizId: "",
              showPcT: !1,
              selloutSuggestData: "",
              pageLeaveData: {},
              dialogInfos: {},
              suggestType: 0,
              telephoneVoList: []
            }
          },
          filters: {
            timeFormat: function(t) {
              return t.replace(/-/g, ".")
            }
          },
          onLoad: function(e) {
            this.menuButton = uni.getMenuButtonBoundingClientRect(), this.menuLeft = t.upx2px(26), this.menuHeight = this.menuButton.height - 2;
            var i = this,
              n = i.$util.pxToRpx(this.menuButton.bottom);
            if (i.isUnion = e.isUnion || 0, uni.getSystemInfo({
                success: function(e) {
                  i.statusBarHeight = uni.getSystemInfoSync().statusBarHeight, i._transformNumTemp = 1, i.windowHeight = e.windowHeight, i.headerH = i.statusBarHeight + 5 + Math.ceil(e.windowWidth / 750 * 104), i.startDistance = Math.ceil(e.windowWidth / 750 * 80), i.winWidth = e.windowWidth, i.ticOffsetTop = i.windowHeight - Math.ceil(i.winWidth / 750 * 162), i.unit = 750 / e.windowWidth;
                  var o = i.$util.pxToRpx(i.windowHeight);
                  i.skuH1 = .7 * o - n - 40, i.skuH2 = o - n - 40, i.skuHeight = i.skuH1 - 140
                }
              }), this.noticeHeight = i.windowHeight / i.winWidth * 750 * .7 - 176, e.scene) this.getScene(e.scene);
            else {
              this._spotId = e.spotId, this.type = e.type, this.shareMemberId = e.shareMemberId, uni.getSystemInfoSync().system.indexOf("Android") > -1 || (this.isAndroid = !1), this._urlToShare = "/pages/spotDetailNew/spotDetailNew?spotId=" + this._spotId;
              var o = uni.getStorageSync("userInfor");
              (i.isUnion || uni.getStorageSync("token") && o && o.isUnionMember) && (this._urlToShare = this._urlToShare + "&isUnion=1"), "find" == e.type ? (this.isFinding = !0, this.$bus.$emit("loadFinding"), setTimeout((function() {
                var e = uni.createSelectorQuery();
                e.select("#row2").boundingClientRect(), e.exec((function(t) {
                  i.mainImgInfo = t[0]
                }))
              }), 100)) : (uni.showLoading({
                title: "加载中",
                mask: !0
              }), this.requestNum = 1, this.spotDetail())
            }
          },
          onUnload: function() {
            getApp().watchRouter()
          },
          onShow: function() {
            var e = this;
            if (uni.getSystemInfo({
                success: function(t) {
                  e.unit = 750 / t.windowWidth
                }
              }), !this.isFinding) {
              if (1 == e.requestNum) return void(e.requestNum = 2);
              e._spotId && e.getSpotCoupons(), e.getPeopleNum()
            }
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, this.row2Top - this.headerH < t.scrollTop ? this.inTop = !1 : this.inTop = !0, t.scrollTop <= 5 ? this.onTop = !0 : this.onTop = !1, t.scrollTop + this.ticOffsetTop > this.ticketBoxTop ? (this.showFixTicket = !1, this.ticketBoxTop - t.scrollTop < this.headerH + 6 ? this.disScroll = !1 : this.disScroll = !0) : this.showFixTicket = !0;
            var e = t.scrollTop / 40;
            e >= 0 && e <= 1 && (this.transformNum = Number((1 - e).toFixed(2))), e > 1 && (this.transformNum = 0), this._transformNumTemp = this.transformNum
          },
          onShareAppMessage: function(t) {
            var e = this.$refs.findspot;
            if (this.isFinding && !e.hideFinder) {
              var i = "/pages/spotDetailNew/spotDetailNew?type=find";
              return 6 == e.step ? {
                title: "我找到了".concat(e.spotList.length, "个").concat(e.currentText, "相关的好地方"),
                path: this.$util.setShareUrl(i),
                imageUrl: "https://eshopfile.zhiyousx.com/2022021718023611283.jpg"
              } : {
                title: "想去哪里就说出来吧!",
                path: this.$util.setShareUrl(i),
                imageUrl: "https://eshopfile.zhiyousx.com/2022021718023611283.jpg"
              }
            }
            if (this.ticketpostObj) {
              var n = Object.assign(this.ticketpostObj, {}),
                o = this.postUrl3,
                s = "/subPage/pages/ticket_detail/ticket_detail?itemId=".concat(n.itemId);
              return {
                title: n.itemTitle,
                path: this.$util.setShareUrl(s),
                imageUrl: o
              }
            }
            var a = this.detailObj.shareDescList,
              r = "我在".concat(this.detailObj.scenicName, "等你，约吗？"),
              c = this.postUrl;
            return a && a[0] && (r = a[Math.random() * a.length | 0]), this.detailObj.shareImage && (c = this.detailObj.shareImage), {
              title: r,
              imageUrl: c,
              path: this.$util.setShareUrl(this._urlToShare)
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          onReachBottom: function() {},
          watch: {
            sharePopup: function(t) {
              t || (this.ticketpostObj = null, this.postUrl1 = "", this.qrCode = "", this.postUrl3 = "")
            },
            postUrl1: function(e) {
              this.ticketpostObj && e && this.ticketpostObj.shareType.indexOf("3") > -1 && (uni.hideLoading(), this.sharePopup = !0)
            },
            postUrl2: function(e) {
              this.ticketpostObj && this.ticketpostObj.defaultPicUrl && this.ticketpostObj.shareType.indexOf("3") < 0 && (uni.hideLoading(), this.sharePopup = !0), this.ticketpostObj ? this.postUrl3 = e : this.postUrl3 = ""
            },
            showTicketIndex: function(t) {
              var e = this;
              this.$forceUpdate(), this.tListInbottom = !1, this.startInBottom = !1, setTimeout((function() {
                e.getfixTicketListDis()
              }), 100)
            },
            loadingNum: function(e) {
              e >= 4 && uni.hideLoading()
            },
            isHide: function(t) {
              var e = this;
              setTimeout((function() {
                e.getTicketBoxTop().then((function(i) {
                  i && i[0] && (e.ticketBoxTop = t ? i[0].top : i[0].top + e.scrollTop)
                }))
              }), 100)
            }
          },
          methods: {
            getLines: function(t) {
              this.lines = t, t > 0 && (this.isHide = !0)
            },
            formatNum: function(t) {
              return t < 10 ? "0" + t : t + ""
            },
            getFun: function() {
              uni.getSystemInfoSync().system.indexOf("Android") > -1 || (this.isAndroid = !1), this._urlToShare = "/pages/spotDetailNew/spotDetailNew?spotId=" + this._spotId;
              var e = uni.getStorageSync("userInfor");
              (this.isUnion || uni.getStorageSync("token") && e && e.isUnionMember) && (this._urlToShare = this._urlToShare + "&isUnion=1"), uni.showLoading({
                title: "加载中",
                mask: !0
              }), this.requestNum = 1, this.spotDetail()
            },
            parseQueryString: function(t) {
              var e = {};
              return t.split("&").forEach((function(t) {
                var i = t.split("="),
                  n = i[0],
                  o = i[1];
                n && o && (e[n] = o)
              })), e
            },
            getScene: function(t) {
              var e = this;
              this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/qrCodeScene/getScene?sceneId=" + t).then((function(t) {
                if (1 === t.code) {
                  var i = e.parseQueryString(t.data.scene);
                  if (i.scenicId) return e._spotId = i.scenicId, e.shareMemberId = t.data.referenceId, void e.getFun();
                  i.spotId && (e._spotId = i.spotId, e.shareMemberId = t.data.referenceId, e.getFun())
                }
              }))
            },
            evaluationDetail: function() {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "base/app/v1/evaluation/getEvaluation?scenicSpotId=" + this._spotId).then((function(e) {
                1 == e.code ? t.evaluationObj = e.data ? e.data : null : t.$uni.showToast(e.msg)
              }))
            },
            spotDetail: function() {
              var e = this,
                i = this;
              t.showNavigationBarLoading(), this.$uniApi.getRequestNoLoading("GET", "base/app/v1/scenicSpot/getAppScenicSpotDetail?scenicId=" + this._spotId).then((function(o) {
                if (i.loadingNum++, 1 == o.code) {
                  t.hideNavigationBarLoading(), e.detailObj = o.data, e.telephoneVoList = e.detailObj.telephoneVoList || [], e.mainPicture = o.data.mainPictureList[0] || "", e.topBannerList = o.data.topBannerList, e.bannerList = o.data.bannerList, 1 == o.data.evaluation && e.evaluationDetail(), i.startDraw(), i.getPeopleNum(), i.getScreenInfo().then((function(t) {
                    t && t[0] && (i.row2Top = t[1].top + t[1].height - 6, i.midinfoTop = t[2].top + t[2].height, i.showrelTicket = !0, i.loadingStatus = !1)
                  }));
                  var s = uni.getStorageSync("userInfor");
                  (i.isUnion || uni.getStorageSync("token") && s && s.isUnionMember) && 1 != e.detailObj.scenicType && i.getUnionEquityCardId(), 1 == e.detailObj.scenicType && 1 == e.detailObj.closeJumpFlag && uni.hideShareMenu({
                    menus: ["shareTimeline", "shareAppMessage"]
                  }), i.isFinding && i.$bus.$emit("closeFinder")
                } else e.$uni.showToast(o.msg)
              })).catch((function(t) {
                i.loadingStatus = !1, e.$uni.showToast("网络走丢了，请刷新重试")
              })), i.getTicketTypeIByScenicIdNew("", "onLoad")
            },
            getSpotCoupons: function() {
              var t = this,
                e = this;
              if (1 != e.detailObj.scenicType) {
                var i = {
                  itemType: 1,
                  scenicId: this._spotId
                };
                this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/getCanReceiveOrUseCouponList", i).then((function(i) {
                  if (e.couponDetailArr = i.data, e.loadingNum++, 1 == i.code) {
                    var n = i.data;
                    if (0 == n.length) return e.scrollFixH = e.noCouponH, void(t.couponArr = []);
                    var o = [];
                    if (n && n[0]) {
                      for (var s = 0; s < n.length; ++s) {
                        var a = n[s],
                          r = String(a.couponAmount),
                          c = String(a.couponFullAmount);
                        a.couponFullAmount > 0 ? "满".concat(c, "减").concat(r, "券") : "".concat(r, "元无门槛券"), o.push(a)
                      }
                      t.couponArr = o
                    }
                  } else t.$uni.showToast(i.msg)
                }))
              } else e.loadingNum++
            },
            toggleTicketList: function(e, i, n) {
              var o = this;
              if (2 == n && this.disScroll) return uni.pageScrollTo({
                scrollTop: 1e4,
                duration: 500
              }), void setTimeout((function() {
                o.setTicketList(e, i)
              }), 550);
              this.setTicketList(e, i)
            },
            setTicketList: function(t, e) {
              this.scrollToTic = "tic-" + t.id, this.showTicketIndex = e, this.scrollToClass = "ticClass-" + this.showTicketIndex
            },
            getScreenInfo: function() {
              var e = this;
              return new Promise((function(i) {
                setTimeout((function() {
                  e.$nextTick((function() {
                    var e = uni.createSelectorQuery();
                    e.select("#top-fixed-box").boundingClientRect(), e.select("#row2").boundingClientRect(), e.select("#midinfo").boundingClientRect(), e.exec((function(t) {
                      i(t)
                    }))
                  }))
                }), 500)
              }))
            },
            swiperTopClick1: function(t) {
              var e = this.detailObj.topBannerList[t];
              this.swiperTopClick(e)
            },
            swiperTopClick2: function(t) {
              var e = this.detailObj.bannerList[t];
              this.swiperTopClick(e)
            },
            getTicketBoxTop: function() {
              var e = this;
              return new Promise((function(i) {
                setTimeout((function() {
                  e.$nextTick((function() {
                    var e = uni.createSelectorQuery();
                    e.select("#ticketBox").boundingClientRect(), e.exec((function(t) {
                      i(t)
                    }))
                  }))
                }), 500)
              }))
            },
            swiperTopClick: function(e) {
              1 === e.jumpType && e.jumpUrl ? (-1 != e.jumpUrl.indexOf("?") && (e.jumpUrl = e.jumpUrl.replace("?", "*"), e.jumpUrl = e.jumpUrl.replace("=", "+")), this.$navigateTo({
                url: "../webpage/webpage?url=".concat(e.jumpUrl)
              })) : 2 === e.jumpType && e.interalLinkId ? 1 === e.interalLinkType ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=".concat(e.interalLinkId)
              }) : 2 === e.interalLinkType ? this.$util.cityJump(e.contentType, e.interalLinkId) : 3 === e.interalLinkType ? this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=".concat(e.interalLinkId)
              }) : 4 !== e.interalLinkType && 7 !== e.interalLinkType && 8 !== e.interalLinkType && 9 !== e.interalLinkType || this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=".concat(e.interalLinkId)
              }) : 3 === e.jumpType ? "wxf2cca76ae0520e33" == e.newAppId ? this.$navigateTo({
                url: e.appUrl
              }) : t.openEmbeddedMiniProgram({
                appId: e.newAppId,
                path: e.appUrl
              }) : 4 === e.jumpType && (uni.setStorageSync("richtext", e.richText), this.$navigateTo({
                url: "../richtext/richtext?title=".concat(e.advertName)
              }))
            },
            toRanking: function(t) {
              1 != this.detailObj.closeJumpFlag && this.$navigateTo({
                url: "../ranking/ranking?id=" + t
              })
            },
            toTagfilter: function(t, e) {
              1 != this.detailObj.closeJumpFlag && this.$navigateTo({
                url: "/subPage/pages/spotFilter/spotFilter?index=".concat(e, "&name=").concat(t.name, "&id=").concat(t.id, "&type=").concat(this.detailObj.type)
              })
            },
            getTimeLimit: function() {
              var t = new Date,
                e = t.getFullYear(),
                i = t.getMonth() + 1,
                n = t.getDate(),
                o = this.formatNum(e) + "-" + this.formatNum(i) + "-" + this.formatNum(n),
                s = o + this.limitStartTime,
                a = o + this.limitEndTime,
                r = t.getTime();
              return r > new Date(s.replace(/-/g, "/")).getTime() && r < new Date(a.replace(/-/g, "/")).getTime()
            },
            getPeopleNum: function() {
              var t = this,
                e = this.detailObj.realTimeNum || 0,
                i = parseInt(e / this.detailObj.capacity * 100),
                n = {
                  ren1: {
                    text: "舒适",
                    activeColor: "#8DC604",
                    percent: 30,
                    imgUrl: "https://eshopfile.zhiyousx.com/spotDetailNew/ren1.png"
                  },
                  ren2: {
                    text: "适中",
                    activeColor: "#ECE413",
                    percent: 60,
                    imgUrl: "https://eshopfile.zhiyousx.com/spotDetailNew/ren2.png"
                  },
                  ren3: {
                    text: "拥挤",
                    activeColor: "#FD7600",
                    percent: 80,
                    imgUrl: "https://eshopfile.zhiyousx.com/spotDetailNew/ren3.png"
                  },
                  ren4: {
                    text: "饱和",
                    activeColor: "#FF4800",
                    percent: 100,
                    imgUrl: "https://eshopfile.zhiyousx.com/spotDetailNew/ren4.png"
                  },
                  ren5: {
                    text: 1 == this.detailObj.scenicType ? "关山门" : "闭园",
                    activeColor: "#ffffff80",
                    percent: 0,
                    imgUrl: ""
                  }
                };
              (this.detailObj.visitorNumIconList || []).forEach((function(t) {
                t.level && t.icon && (n["ren".concat(t.level)].imgUrl = t.icon)
              })), this.closeIcon = n.ren5.imgUrl;
              var o = {};
              i <= 30 && (o = n.ren1), i > 30 && i <= 60 && (o = n.ren2), i > 60 && i <= 80 && (o = n.ren3), i > 80 && (o = n.ren4), i <= 100 && (o.percent = i), 0 == this.detailObj.openingStatus && ((o = n.ren5).percent = 0), setTimeout((function() {
                t.peopleNumObj = o, t.loadPercent(o.percent || 0, 100)
              }), 600)
            },
            showTicketMask: function(t) {
              var e = this;
              1 == t && this.isShowTicket || (this.isShowTicket = !this.isShowTicket, this.$nextTick((function() {
                this.transformNum = this.isShowTicket ? 0 : this._transformNumTemp
              })), this.isShowTicket && this.showTicketList && setTimeout((function() {
                e.getFirstEleDis(1)
              }), 550), this.isShowTicket && this.showUnion && setTimeout((function() {
                e.getFirstUnion(1)
              }), 550))
            },
            cityName: function(t) {
              var e = "";
              return t.forEach((function(t, i) {
                e += t + "/"
              })), e.slice(0, -1)
            },
            loadPercent: function(t, e) {
              var i = t / e * 360,
                n = 0,
                o = 0;
              i < 180 ? (n = i + -45, this.rotateLeft = -47) : (n = 135, o = i - 180 - 45, this.rotateLeft = o), this.rotateRight = n
            },
            showSku: function() {
              this.showTicketSku = !0
            },
            buyFn: function(e) {
              if (e.itemId)
                if (2 != e.ticketType) {
                  var i = this.showTicketSku ? 1 : 0;
                  if (this.$refs.skuP.showTicketSku = !1, 1 != e.jumpFlag) {
                    var o = "/subPage/pages/ticketFillOrder/ticketFillOrder?ticketId=".concat(e.itemId),
                      s = "",
                      a = uni.getStorageSync("userInfor").chansiOpenId,
                      r = 0;
                    if (1 == e.groupFlag && (o = "/subPage/pages/packPlaceOrder/packPlaceOrder?ticketId=".concat(e.itemId)), 1 == i && this.$refs.skuP.skuData && this.$refs.skuP.skuData.aggregationItemId && (o += "&aggregationItemId=".concat(this.$refs.skuP.skuData.aggregationItemId)), this.shareMemberId && (o += "&shareMemberId=".concat(this.shareMemberId)), this.selectedHour && this.selectedHour.itemId == e.itemId ? o += "&selectedDate=".concat(this.selectedHour.date) : this.selectedHour = "", 1 == this.detailObj.scenicType && (s = "https://eshop.zhiyousx.com/dsmall-admin-ui/h5/temple.html?itemId=".concat(e.itemId), o += "&isCs=true", r = 1), this.$util.isLogin(o, r, s)) {
                      var c = this.detailObj.telephoneVoList;
                      if (c && c[0] && uni.setStorageSync("telephoneVoList", c), s && !a) return void uni.navigateTo({
                        url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(s)
                      });
                      this.$navigateTo({
                        url: o
                      })
                    }
                  } else 2 == e.jumpType ? uni.navigateTo({
                    url: "/pages/webpage/webpage?urlEncode=".concat(encodeURIComponent(e.jumpUrl))
                  }) : 1 == e.jumpType ? "wxf2cca76ae0520e33" == e.jumpAppId ? this.$navigateTo({
                    url: e.jumpUrl
                  }) : n.openEmbeddedMiniProgram({
                    appId: e.jumpAppId,
                    path: e.jumpUrl
                  }) : 3 == e.jumpType && this.$uni.showToast("请前往支付宝小程序购买")
                } else this.$refs.skuP.setTicketType(e.itemId)
            },
            openMap: function() {
              uni.openLocation({
                latitude: Number(this.detailObj.latitude),
                longitude: Number(this.detailObj.longitude),
                name: this.detailObj.scenicName,
                success: function() {}
              })
            },
            showBookTip: function(t) {
              if (2 == t.ticketType) return !t.stockStatus || t.sellOut ? void this.$uni.showToast("已售空") : void this.$refs.skuP.setTicketType(t.itemId);
              this.$refs.bookInfoBox.getTicDetail(t.itemId, "pt")
            },
            brText: function(t) {
              if (t) {
                var e = t.split("#**#");
                return e.pop().split("</p>").forEach((function(t, i) {
                  if (t) {
                    var n = (t = t.split("<p>").join("")).match(/\<.*?\>/g),
                      o = t.match(/[\r\n]/g),
                      s = n || o;
                    s && s[0] && s.forEach((function(e) {
                      t = t.replaceAll(e, "")
                    })), e.push(t)
                  }
                })), e
              }
            },
            call: function(e) {
              uni.makePhoneCall({
                phoneNumber: e
              })
            },
            copyFn: function() {
              uni.setClipboardData({
                data: this.detailObj.officialWebsite,
                success: function() {
                  this.$uni.showToast("复制成功")
                }
              })
            },
            jumpSpotIntro: function(t) {
              this.$navigateTo({
                url: "/subPage/pages/spotIntroNew/spotIntroNew?spotId=".concat(this._spotId, "&loc=").concat(t || "", "&isCS=").concat(this.detailObj.scenicType ? 1 : "")
              })
            },
            jumpHotelIntro: function(t) {
              3 == this.detailObj.type ? this.$navigateTo({
                url: "/subPack/pages/hotelIntro/hotelIntro?spotId=".concat(this._spotId, "&loc=").concat(t || "")
              }) : this.$navigateTo({
                url: "/subPage/pages/spotIntroNew/spotIntroNew?spotId=".concat(this._spotId, "&loc=").concat(t || "")
              })
            },
            jumpSpotContentList: function(e) {
              uni.setStorageSync("spotContentList", {
                name: e.contentModuleName,
                contentList: e.contentInfoVOList
              }), this.$navigateTo({
                url: "../spotContentList/spotContentList?scenicName=".concat(this.detailObj.scenicName)
              })
            },
            getSkuDesc: function(e) {
              e && (this.refreshData = !1, uni.previewImage({
                current: 1,
                urls: [e]
              }))
            },
            jumpSpotThirdDetail: function(t) {
              5 == t.type ? this.$navigateTo({
                url: "../spotThirdDetail/spotThirdDetail?scenicName=".concat(this.detailObj.scenicName, "&spotId=") + t.id
              }) : 10 == t.type ? this.jumpToH5(t.h5Url) : this.$util.cityJump(t.type, t.id)
            },
            jumpToH5: function(e) {
              e ? uni.navigateTo({
                url: "/pages/webpage/webpage?urlEncode=".concat(encodeURIComponent(e))
              }) : this.$uni.showToast("敬请期待！")
            },
            jumpSpotMedia: function() {
              this.$navigateTo({
                url: "../spotMedia/spotMedia?id=" + this._spotId + "&type=0"
              })
            },
            swiperChange: function(t) {
              this.swiperCurrent = t.detail.current + 1, this.scale = 1
            },
            closeMask: function() {
              this.showPicture = !1
            },
            openMedia: function(t) {
              this.showPicture = !0, this.swiperCurrent = t + 1, this.currentSwiper = t
            },
            showMore: function(t) {
              this.tapIndex != t ? this.tapIndex = t : this.tapIndex = null
            },
            getShowState: function(t) {
              return !(2 == t.resourcesType && !this.showVideo)
            },
            showYh: function() {
              this.showYhMask = !this.showYhMask
            },
            getCouponDetail: function() {
              var t = this,
                e = {
                  itemType: 1,
                  scenicId: this._spotId
                };
              this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/getCanReceiveOrUseCouponList", e).then((function(e) {
                t.couponDetailArr = e.data
              }))
            },
            receiveCoupon: function(t, e) {
              var i = this;
              this.$util.isLogin() && 1 == e && this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                couponId: t
              }).then((function(t) {
                1 == t.code || i.$uni.showToast("已抢光"), i.getCouponDetail()
              }))
            },
            startDraw: function(t) {
              var e = this.detailObj.topColour,
                i = this.detailObj.scenicName,
                n = this.detailObj.introductionText || "",
                o = {
                  width: "750rpx",
                  height: "600rpx",
                  borderRadius: "0rpx",
                  background: e,
                  views: [{
                    type: "text",
                    text: i,
                    css: {
                      width: "700rpx",
                      maxLines: 1,
                      left: "30rpx",
                      top: "50rpx",
                      fontSize: "46rpx",
                      color: "#fff"
                    }
                  }, {
                    type: "image",
                    url: this.detailObj.mainPictureList[0],
                    css: {
                      position: "absolute",
                      width: "360rpx",
                      height: "360rpx",
                      left: "30rpx",
                      top: "210rpx",
                      shadow: "0rpx 0rpx 20rpx rgba(0,0,0,.5)",
                      borderRadius: "15rpx"
                    }
                  }, {
                    type: "text",
                    text: n,
                    css: {
                      left: "420rpx",
                      top: "220rpx",
                      fontSize: "36rpx",
                      lineHeight: "54rpx",
                      color: "rgba(255,255,255,0.9)",
                      fontWeight: 600,
                      maxLines: 7,
                      textIndent: 0,
                      width: "300rpx"
                    }
                  }]
                };
              this.isAndroid ? this.posterData = o : this.painterData = o
            },
            onImgOK: function(t) {
              this.postUrl = t.path
            },
            hitClick: function(e) {
              e.shareType.indexOf("3") < 0 && (e.sharePosterUrl = ""), this.ticketpostObj = e, uni.showLoading({
                title: "卡片生成中..."
              }), (this.ticketpostObj.shareType.indexOf("3") > -1 || this.ticketpostObj.shareType.indexOf("2") > -1) && this.getminiQr(e)
            },
            getminiQr: function(t) {
              var e = this;
              this.$uniApi.dataRequestYesLoading("POST", "manager/app/wx/getminiLongSceneQr", {
                itemId: t.itemId,
                referenceId: this.userInfo.memberId,
                page: "subPage/pages/ticket_detail/ticket_detail",
                scene: "",
                width: ""
              }).then((function(t) {
                1 === t.code && (e.qrCode = t.data.baseData)
              }))
            },
            actionmenuCallback: function(e) {
              uni.hideLoading(), this.ticketpostObj = null
            },
            onImgErr: function(t) {
              this.startDraw()
            },
            opennotice: function() {
              this.showNotice = !0
            },
            openspot: function(t) {
              this._spotId = t, this.spotDetail()
            },
            getFirstEleDis: function(t) {
              var e = this;
              e.$refs.ticBox.getFirstEleDis().then((function(i) {
                i || i[0] ? (t && (e.fEleTop = i[0].top), e.fEleTopNow = i[0].top) : e.fEleTop = 0
              }))
            },
            getFirstUnion: function(t) {
              var e = this;
              e.$refs.unionBox.getFirstUnion().then((function(i) {
                i || i[0] ? (t && (e.fEleTopUnion = i[0].top), e.fEleTopNowUnion = i[0].top) : e.fEleTopUnion = 0
              }))
            },
            getfixTicketListDis: function() {
              var e = this,
                i = uni.createSelectorQuery();
              i.select("#fixTicketLists").boundingClientRect(), i.selectViewport().scrollOffset(), i.exec((function(t) {
                t[0] && t[0].height < e.scrollFixH && (e.tListInbottom = !0, e.startInBottom = !0)
              }))
            },
            fixTicketListScroll: function(t) {
              var e = t.detail.scrollHeight,
                i = t.detail.scrollTop,
                n = t.detail.scrollTop,
                o = this.showTicketIndex,
                s = this.ticH;
              o + 1 < s.length && n >= s[o] && (this.showTicketIndex = o + 1), o - 1 >= 0 && n < s[o - 1] && (this.showTicketIndex = o - 1), this.scrollToClass = "ticClass-" + this.showTicketIndex, this.scrollFixH + i + 10 > e ? this.tListInbottom = !0 : this.tListInbottom = !1
            },
            showUnionPhone: function(t) {
              this.showPhonePop = t
            },
            touchStart: function(t) {
              this.touchStartX = t.touches[0].clientX, this.touchStartY = t.touches[0].clientY, this.showUnion && 0 == this.tabIndex ? this.getFirstUnion() : this.showTicketList && this.getFirstEleDis(), this.startInBottom = this.tListInbottom
            },
            touchEnd: function(t) {
              var e = t.changedTouches[0].clientX - this.touchStartX,
                i = t.changedTouches[0].clientY - this.touchStartY;
              Math.abs(i) > 50 && Math.abs(e) < Math.abs(i) && (this.showUnion && 0 == this.tabIndex ? i > 0 && this.fEleTopUnion < this.fEleTopNowUnion + 40 && (this.isShowTicket = !1, this.$nextTick((function() {
                this.transformNum = this.isShowTicket ? 0 : this._transformNumTemp
              }))) : this.showTicketList && i > 0 && this.fEleTop < this.fEleTopNow + 40 && (this.isShowTicket = !1, this.$nextTick((function() {
                this.transformNum = this.isShowTicket ? 0 : this._transformNumTemp
              }))))
            },
            showTicketInfoBox: function() {
              this.detailObj.ticketAreaNotice && (this.showTicketInfo = !0)
            },
            isObjectEqual: function(t, e) {
              var i = Object.keys(t),
                n = Object.keys(e);
              if (i.length !== n.length) return !1;
              for (var o = 0, s = i; o < s.length; o++) {
                var a = s[o];
                if (t[a] !== e[a]) return !1
              }
              return !0
            },
            spotName: function(t) {
              return t ? this.spotNames[t] + "简介" : ""
            },
            getUnionEquityCardId: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/userUnionEquityCard/getUnionEquityCardId").then((function(e) {
                1 == e.code && e.data ? (t.unionEquityCardId = e.data, t.getUnionEquityDetail()) : that.showUnion = !1
              }))
            },
            getUnionEquityDetail: function() {
              var e = this,
                i = this;
              this.$uniApi.dataRequestNoLoading("get", "order/app/v1/userUnionEquityCard/getUnionEquityDetail", {
                scenicId: this._spotId,
                unionEquityCardId: this.unionEquityCardId
              }).then((function(n) {
                1 == n.code && n.data ? (i.showUnion = !0, i.unionEquityCard = n.data, uni.getStorageSync("token") && e.userInfo && e.userInfo.isUnionMember && i.getUnionUserInfo()) : i.showUnion = !1
              })).catch((function(t) {}))
            },
            getUnionUserInfo: function() {
              var e = this;
              this.$uniApi.dataRequestYesLoading("GET", "manager/app/v1/unionMember/detail").then((function(i) {
                if (1 === i.code) {
                  var n = i.data,
                    o = (new Date).getTime(),
                    s = n.effectiveEndTime;
                  e.unionExpired = o > new Date(s.replace(/-/g, "/")).getTime(), n.unionExpired = e.unionExpired, uni.setStorageSync("unionUserInfo", n), e.isUnionMember = 1
                } else uni.setStorageSync("unionUserInfo", "")
              }))
            },
            getTicketTypeIByScenicIdNew: function(e, i) {
              var n = this,
                o = this;
              o.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item/getScenicItemList", {
                scenicId: this._spotId
              }).then((function(s) {
                if (o.loadingNum++, 1 != s.code) return n.$uni.showToast(s.msg), void o.loadingNum++;
                s.data.spotId = o._spotId, s.data.selloutSuggestFlag = o.detailObj.selloutSuggestFlag, o.ticketArr = s.data || {};
                var a = s.data.scenicTicketTypeClassList;
                1 == a.length ? n.showType = 1 : a.length > 1 && (n.showType = 2), a[0] ? ("onLoad" == i && (o.showTicketIndex = 0), o.showTicketList = !0, n.$forceUpdate(), e || setTimeout((function() {
                  n.setTicketBoxTop(), o.$refs.ticBox.getTicketClassH().then((function(t) {
                    var e = 0,
                      i = t[0].map((function(t, i) {
                        return e += t.height
                      }));
                    o.ticH = i
                  }))
                }), 500)) : (o.loadingNum++, o.showTicketList = !1, o.isShowTicket = !1, uni.hideLoading());
                var r = 60,
                  c = o.ticketArr.scenicTicketTypeClassList;
                c && 1 === c.length && "门票" == c[0].ticketTypeClassName && (r = 0, o.showClassName = !1), 2 == o.showType && (r = 0, o.showClassName = !1), o.swiperH = o.windowHeight - o.headerH - 104 / n.unit;
                var u = o.detailObj.ticketAreaNoticeName ? 76 : 0;
                o.noCouponH = o.windowHeight - o.headerH - Math.ceil(o.winWidth / 750 * (90 + u + r)), o.couponH = o.windowHeight - o.headerH - Math.ceil(o.winWidth / 750 * (170 + u + r)), o.scrollFixH = 1 == n.detailObj.noCouponFlag ? o.noCouponH : o.couponH, 1 === n.detailObj.noCouponFlag ? o.loadingNum++ : o.getSpotCoupons(), 1 == o.detailObj.selloutSuggestFlag && 1 == o.ticketArr.sellOut && o.getSelloutSuggest(n._spotId, 1), o.loadingStatus = !1
              })).catch((function(e) {
                uni.hideLoading()
              }))
            },
            setTicketBoxTop: function() {
              var t = this;
              t.getTicketBoxTop().then((function(e) {
                e && e[0] ? (t.ticketBoxTop = e[0].top, t.loadingNum++) : t.setTicketBoxTop()
              }))
            },
            priviewImg: function(e) {
              var i = e.src;
              uni.previewImage({
                current: i,
                urls: [i]
              })
            },
            dblclick: function() {
              4 == this.scale ? this.scale = 1 : this.scale = 4
            },
            changeTab: function(t) {
              this.tabIndex = t
            },
            changeSwiper: function(t) {
              this.tabIndex = t.detail.current
            },
            closeCsMenu: function() {
              1 == this.detailObj.scenicType && 1 == this.detailObj.closeJumpFlag && this.$refs.csMenu.closeMenu()
            },
            previewImage: function(t) {
              uni.previewImage({
                urls: [t]
              })
            },
            onBeforeLeave: function(t) {
              this.showPC && (this.dialogInfos = this.pageLeaveData, this.showPC = !1, this.$refs.recommendedRef.open())
            },
            getSelloutSuggest: function(t, e) {
              var i = this,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "open";
              this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/item/getSelloutSuggest", {
                bizId: t,
                bizType: e
              }).then((function(s) {
                1 == s.code && (i.showPcT = !0, i.bizType = e, i.bizId = t, i.suggestType = n, i.selloutSuggestData = s.data, 1 == e ? (i.selloutSuggestData.backPage = !0, i.pageLeaveData = r({
                  itemId: i.bizId,
                  bizType: 6,
                  scenicSpotId: i._spotId,
                  showPop: !0,
                  backPage: !0,
                  isSingleVote: e
                }, s.data), i.dialogInfos = i.pageLeaveData, "coupon" != o && (i.showPC = !0)) : (i.showPC = !1, i.selloutSuggestData.backPage = !1, i.setDialogInfos()))
              }))
            },
            refreshCoupon: function() {
              this.getSelloutSuggest(this.bizId, this.bizType, this.suggestType, "coupon")
            },
            sellOutClick: function(t) {
              if (1 == this.detailObj.selloutSuggestFlag) {
                var e = t.data;
                this.getSelloutSuggest(e.itemId, e.ticketType + 1, t.type)
              }
            },
            ydxzSellOut: function(t) {
              this.bizId == t.itemId && this.$refs.recommendedRef.open()
            },
            setDialogInfos: function() {
              var t = r({
                itemId: this.bizId,
                bizType: {
                  1: 6,
                  2: 3,
                  3: 4
                } [this.bizType],
                scenicSpotId: this._spotId,
                showPop: !0,
                isSingleVote: this.bizType
              }, this.selloutSuggestData);
              this.dialogInfos = t, 2 != this.suggestType && this.$refs.recommendedRef.open()
            },
            showAllTimeM: function() {
              this.showAllTime = !0
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{position:relative!important;top:0!important}cover-view{overflow:initial}.price-start{color:rgba(0,0,0,.5);font-size:22rpx;font-weight:400}.u-wrap{background:linear-gradient(0deg,#2c2f35,#23242c);line-height:1;min-height:100vh;overflow:hidden;padding-left:calc(100vw - 100%);width:100vw}.u-wrap .noticeBox .title{color:#333;font-size:36rpx;font-weight:700;padding:60rpx 0;text-align:center}.u-wrap .noticeBox .scontent{box-sizing:border-box;height:750rpx;line-height:50rpx;padding:0 42rpx 0rpx}.mask{background:#000;height:100%;justify-content:center;top:0;width:100%;z-index:9100003}.mask .maskTop,.mask{align-items:center;display:-webkit-flex;display:flex;position:fixed}.mask .maskTop{flex-direction:row;left:41rpx;z-index:99}.mask .maskTop .num{color:#fff;font-family:Source Han Sans SC;font-size:32rpx;font-weight:400;margin-left:257rpx;opacity:.7}.mask .swiper{height:81vh;width:100%;z-index:40}.mask .swiper .swiper-item{display:-webkit-flex;display:flex;flex-direction:column;height:100%;justify-content:center;width:100%}.mask .swiper .swiper-item .movable-area{height:80%;width:100%}.mask .swiper .swiper-item .movable-area .movable-view{display:-webkit-flex;display:flex;flex-direction:column;height:100%;justify-content:center;width:100%}.mask .swiper .swiper-item .movable-area .movable-view image{width:100%}.mask .swiper .swiper-item video{height:100%;width:100%}.mask .swiper .describe{bottom:40rpx;color:#fff;font-size:26rpx;left:40rpx;line-height:36rpx;padding-bottom:40rpx;position:absolute;text-align:justify;width:670rpx}.mask .swiper .describe text{display:inline-block}.top-fixed-box{background:none;box-sizing:border-box;display:-webkit-flex;display:flex;left:0;overflow:hidden;padding:0 96rpx 24rpx;position:fixed;top:0;transition:all .3s linear;width:100%;z-index:10}.top-fixed-box .bg-color{height:100%;left:0;position:absolute;top:0;width:100%}.top-fixed-box .headerinfo{display:-webkit-flex;display:flex;transition:all .1s linear}.top-fixed-box .l{border-radius:4rpx;height:80rpx;margin-right:12rpx;overflow:hidden;width:80rpx}.top-fixed-box .l.active{transition:.3s}.top-fixed-box .l .mainImg{height:100%;width:100%}.top-fixed-box .r{width:374rpx;z-index:2}.top-fixed-box .r.active{transition:.3s}.top-fixed-box .r .title{color:#fff;font-size:36rpx;line-height:40rpx;margin-bottom:4rpx;position:relative}.top-fixed-box .r .title .star{background:url('https://eshopfile.zhiyousx.com/spotDetailNew/xingji.png');background-size:100% 100%;color:#fff;font-size:20rpx;height:42rpx;line-height:34rpx;position:absolute;right:0;text-align:center;top:0;width:70rpx}.top-fixed-box .r .sub-title{color:hsla(0,0%,100%,.7);font-size:24rpx;line-height:34rpx;width:410rpx}.spotinfo{display:-webkit-flex;display:flex;margin:40rpx 30rpx 50rpx;min-height:240rpx}.spotinfo .ranking{display:-webkit-flex;display:flex;margin-top:22rpx;position:relative}.spotinfo .ranking .top{background:linear-gradient(180deg,#6b6457,#54524c);border-radius:25rpx;color:#e6cca2;font-size:24rpx;font-weight:700;padding:14rpx 16rpx;position:relative;z-index:3}.spotinfo .ranking .text{align-items:center;background:linear-gradient(180deg,#e3cda2,#f3d19a);border-radius:25rpx;display:-webkit-flex;display:flex;height:50rpx;line-height:50rpx;margin-left:-36rpx;padding:0 16rpx 0 42rpx;position:relative;z-index:2}.spotinfo .ranking .text .name{color:#6a5a40;font-size:22rpx;font-weight:700;margin-right:4rpx;max-width:230rpx}.spotinfo .mainImg{border-radius:20rpx;height:240rpx;margin-right:36rpx;width:240rpx}.spotinfo .info{width:414rpx}.spotinfo .info .title{align-items:center;display:-webkit-flex;display:flex;margin-bottom:4rpx;position:relative}.spotinfo .info .title .name{color:#fff;display:block;font-size:36rpx;line-height:40rpx;width:340rpx}.spotinfo .info .title .star{background:url('https://eshopfile.zhiyousx.com/spotDetailNew/xingji.png');background-size:100% 100%;color:#fff;font-size:20rpx;height:42rpx;line-height:34rpx;position:absolute;right:0;text-align:center;top:0;width:70rpx}.spotinfo .info .tag{color:hsla(0,0%,100%,.7);font-size:24rpx;line-height:46rpx;width:410rpx}.row1{display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:50rpx;padding:0 30rpx}.row1 .otherIntroduction{border-radius:10rpx;width:100%}.row1>.l{height:240rpx;width:240rpx}.row1>.r{position:relative;width:416rpx}.row1>.r .star{background:url('https://eshopfile.zhiyousx.com/spotDetailNew/xingji.png');background-size:100% 100%;color:#fff;font-size:20rpx;height:42rpx;line-height:34rpx;position:absolute;right:0;text-align:center;top:0;width:70rpx}.row2{background:rgba(0,0,0,.3);border-radius:10rpx;margin:0 30rpx 50rpx;overflow:hidden}.row2 .notice{align-items:center;background:hsla(0,0%,100%,.8);display:-webkit-flex;display:flex;height:80rpx;justify-content:space-between;padding-left:58rpx;padding-right:28rpx}.row2 .notice view{color:#e03e1e;font-size:28rpx;padding-left:30rpx;width:568rpx}.row2 .notice image{background-size:100% 100%;height:42rpx;width:42rpx}.row2.opacity0{opacity:0}.row2 .hotel_info{overflow-x:auto;padding:30rpx 0;white-space:nowrap}.row2 .hotel_info .ls{border-right:1px solid hsla(0,0%,100%,.3);display:inline-block;height:82rpx;padding:0 30rpx}.row2 .hotel_info .ls ._p{color:#fff;font-size:26rpx}.row2 .hotel_info .ls .p1{font-weight:700;margin-bottom:20rpx;margin-top:5rpx}.row2 .hotel_info .ls:nth-last-child(1){border:none}.row2>.t{align-items:center;display:-webkit-flex;display:flex;margin-bottom:20rpx;padding:34rpx 24rpx 10rpx 32rpx}.row2>.t>.l{height:90rpx;margin-right:26rpx;position:relative;width:90rpx}.row2>.t>.l image{height:51rpx;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:29rpx}.row2>.t>.l .loop-pie{height:90rpx;position:relative;width:90rpx}.row2>.t>.l .loop-pie-line{height:100%;overflow:hidden;position:absolute;top:0;width:50%}.row2>.t>.l .loop-pie-l{left:0;top:0}.row2>.t>.l .loop-pie-r{right:0;top:0;-webkit-transform:rotate(180deg)}.row2>.t>.l .loop-pie-c{border:4px solid transparent;border-radius:50%;box-sizing:border-box;height:100%;position:absolute;top:0;-webkit-transform:rotate(-45deg);width:200%}.row2>.t>.l .loop-pie-lm,.row2>.t>.l .loop-pie-rm{border:4rpx solid hsla(0,0%,100%,.2)}.row2>.t>.m{margin-right:96rpx;width:200rpx}.row2>.t>.m .p1{color:hsla(0,0%,100%,.7);font-size:28rpx;line-height:40rpx;margin-bottom:8rpx}.row2>.t>.m .p2{background:rgba(0,0,0,.2);border-radius:6rpx;color:#e9bc46;display:inline-block;font-size:20rpx;height:40rpx;line-height:40rpx;padding:0 15rpx}.row2>.t>.r{display:-webkit-flex;display:flex;position:relative}.row2>.t>.r .item{height:82rpx;width:124rpx}.row2>.t>.r .item:first-child{margin-right:10rpx}.row2>.t>.r .item:first-child::after{background:hsla(0,0%,100%,.6);content:"";height:54rpx;left:134rpx;position:absolute;top:14rpx;width:1px}.row2>.t>.r .item .p1{color:#fff;font-size:24rpx;line-height:34rpx;padding-top:4rpx;text-align:center}.row2>.b{padding-left:20rpx;padding-right:20rpx}.row2>.b .bordertop{border-top:1rpx solid hsla(0,0%,100%,.1)}.row2>.b .line{align-items:center;display:-webkit-flex;display:flex;height:88rpx;justify-content:space-between;padding-left:36rpx;padding-right:14rpx}.row2>.b .line .icon{height:42rpx;margin-right:15rpx;width:42rpx}.row2>.b .line .text{color:#fff;font-size:28rpx;line-height:40rpx;width:502rpx}.row2>.b .line .text text{color:hsla(0,0%,100%,.6);font-size:28rpx}.row2>.b .line .jt{height:20rpx;width:12rpx}.row2>.b .hotelStyle{padding-left:6rpx}.row2>.b .hotelStyle .text{width:525rpx}.row3{margin-bottom:50rpx;padding-left:30rpx}.row3 .item{align-items:center;display:-webkit-flex;display:flex;margin-bottom:30rpx}.row3 .item>.l{color:#fff;font-size:28rpx;margin-right:16rpx;white-space:nowrap}.row3 .item>.r{overflow-x:auto;white-space:nowrap}.row3 .item>.r .tag{display:inline-block;margin-right:20rpx}.row3 .item>.r .tag .inner{align-items:center;background:rgba(0,0,0,.3);border-radius:30rpx;display:-webkit-flex;display:flex;height:60rpx;padding-left:34rpx;padding-right:34rpx}.row3 .item>.r .tag .inner .icon{background-size:100% 100%;height:40rpx;margin-right:12rpx;width:40rpx}.row3 .item>.r .tag .inner .name{color:#fff;font-size:28rpx}.row3 .item>.r .tag .inner .jt{height:48rpx;width:48rpx}.row4{padding:0 30rpx 50rpx}.row4.opacity0{opacity:0}.row4 .title-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:20rpx}.row4 .title-box>.l{color:#fff;font-size:36rpx;line-height:50rpx}.row4 .title-box .button-show{align-items:center;display:-webkit-flex;display:flex}.row4 .title-box .button-show .button-show-text{color:hsla(0,0%,100%,.6);font-size:24rpx;margin-right:5rpx}.row4 .text-box{color:#fff;font-size:28rpx;line-height:40rpx;text-align:justify;text-indent:0;word-break:break-word}.row5{padding:0 30rpx 50rpx}.row6{padding:0 0 50rpx 30rpx}.row6 .title-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:30rpx;width:702rpx}.row6 .title-box>.l{color:#fff;font-size:36rpx;line-height:50rpx}.row6 .title-box>.r{align-items:center;display:-webkit-flex;display:flex}.row6 .title-box>.r view{color:hsla(0,0%,100%,.6);font-size:28rpx}.row6 .title-box>.r image{height:48rpx;width:48rpx}.row6 .item-box{display:-webkit-flex;display:flex;overflow-x:auto;white-space:nowrap}.row6 .item-box .item{box-sizing:border-box;margin-right:15rpx;width:220rpx}.row6 .item-box .item .img{border-radius:10rpx;height:220rpx;margin-bottom:8rpx;width:220rpx}.row6 .item-box .item .name{color:#fff;font-size:24rpx;line-height:30rpx}.row7{padding:0 0 40rpx 30rpx}.row7 .title-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:30rpx;width:713rpx}.row7 .title-box>.l{color:#fff;font-size:36rpx;line-height:50rpx}.row7 .title-box>.r{align-items:center;display:-webkit-flex;display:flex}.row7 .title-box>.r view{color:hsla(0,0%,100%,.6);font-size:28rpx}.row7 .title-box>.r image{height:48rpx;width:48rpx}.row7 .item-box{overflow-x:auto;white-space:nowrap}.row7 .item-box .item{border-radius:10rpx;display:inline-block;height:248rpx;margin-right:22rpx;overflow:hidden;position:relative;width:440rpx}.row7 .item-box .item .img{height:100%;width:100%}.row7 .item-box .item .mask{background-color:rgba(0,0,0,.3);height:100%;position:absolute;top:0;width:100%;z-index:9}.row7 .item-box .item .mask .icon{background-size:100% 100%;height:80rpx;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:80rpx}.noscroll{bottom:0;height:100vh;left:0;pointer-events:none;position:fixed;width:100vw;z-index:999999}.ticket-box{background:#fff;border-radius:32rpx 32rpx 0 0;bottom:0;box-shadow:0-4rpx 20rpx 0 rgba(0,0,0,.2);box-sizing:border-box;left:0;padding-right:30rpx;position:fixed;transition:.5s;width:100%;z-index:999}.ticket-box .fixedLinear{bottom:0;height:50rpx;left:0;position:fixed;width:100%;z-index:999}.ticket-box.fixed{bottom:-100vh}.ticket-box.relative{position:relative;z-index:998}.ticket-box.relative .tic-list{overflow-y:scroll}.ticket-box .ticketMask{bottom:0;height:162rpx;left:0;position:fixed;width:750rpx;z-index:1000000}.ticket-box .l .p{color:#cb2d2d;font-size:28rpx;font-weight:500;margin-right:10rpx}.ticket-box .l .pl{margin-left:8rpx}.ticket-box .l .qi{color:#000;font-size:28rpx;font-weight:500}.ticket-box .union-box{justify-content:left!important;width:690rpx}.ticket-box .union-tab{position:relative}.ticket-box .union-tab .tab{color:rgba(30,27,25,.8);font-size:36rpx;line-height:48rpx;position:relative;z-index:100}.ticket-box .union-tab .tab .price{color:#cb2d2d}.ticket-box .union-pb{margin-right:40rpx}.ticket-box .tabAct .tab{font-weight:700}.ticket-box .tabAct::before{background:linear-gradient(105deg,#d6a33d,rgba(209,153,42,0));border-radius:80rpx;bottom:-2rpx;content:"";height:16rpx;left:-2rpx;position:absolute;width:100%;z-index:50}.ticket-box .line1{align-items:center;display:-webkit-flex;display:flex;height:36rpx;justify-content:center;margin-left:30rpx}.ticket-box .line1 view{background:#bbb;border-radius:2rpx;height:6rpx;width:160rpx}.ticket-box .title-box{display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:20rpx;margin-left:30rpx}.ticket-box .title-box>.l{color:#000;font-size:36rpx;font-weight:600;line-height:50rpx}.ticket-box .title-box>.r{align-items:center;display:-webkit-flex;display:flex}.ticket-box .title-box>.r view{color:#ff4933;font-size:28rpx}.ticket-box .title-box>.r .totalSale{color:#9d9d9d}.ticket-box .title-box>.r image{height:48rpx;width:48rpx}.yh-mask{height:100%;width:100%}.yh-mask .bg{background-color:rgba(0,0,0,.5);height:100%;width:100%}.yh-mask .content{background:#fafafa;border-radius:10rpx 20rpx 0 0;bottom:0;box-sizing:border-box;height:100%;overflow-y:auto;padding:70rpx 20rpx 10rpx;position:absolute;width:100%}.yh-mask .content .close{color:#444242;font-size:30rpx;position:absolute;right:20rpx;top:25rpx;transform:scaleX(1.3)}.yh-mask .content .item-list .item{margin-bottom:20rpx}.yh-mask .content .item-list .item.ylq .top{background:#fff}.yh-mask .content .item-list .item.ylq .top .left .p1 text{color:#adadad!important}.yh-mask .content .item-list .item.ylq .top .left .p2{color:#484848}.yh-mask .content .item-list .item.ylq .top .right{background:#fff1ed;color:#f15252}.yh-mask .content .item-list .item.yqg .top{background:#fff}.yh-mask .content .item-list .item.yqg .top .left .p1 text{color:#adadad!important}.yh-mask .content .item-list .item.yqg .top .left .p2{color:#adadad}.yh-mask .content .item-list .item.yqg .top .right{background:#f2f2f2;color:#7b7b7b}.yh-mask .content .item-list .item.yqg .top .middle{color:#adadad}.yh-mask .content .item-list .item .top{align-items:center;background:#fff1ed;border-radius:10rpx;display:-webkit-flex;display:flex;justify-content:space-between;min-height:167rpx;padding:36rpx 30rpx;position:relative}.yh-mask .content .item-list .item .top .left{text-align:center;width:190rpx}.yh-mask .content .item-list .item .top .left .p1{margin-bottom:17rpx}.yh-mask .content .item-list .item .top .left .p1 .text1{color:#f15252;font-size:26rpx}.yh-mask .content .item-list .item .top .left .p1 .text2{color:#f15252;font-size:40rpx;font-weight:700}.yh-mask .content .item-list .item .top .left .p2{color:#f15252;font-size:26rpx}.yh-mask .content .item-list .item .top .middle{width:260rpx}.yh-mask .content .item-list .item .top .middle .p1{color:#3a3a3a;font-size:26rpx;font-weight:700;line-height:32rpx;margin-bottom:9rpx}.yh-mask .content .item-list .item .top .middle .p2{color:#8f8f8f;font-size:24rpx;line-height:32rpx}.yh-mask .content .item-list .item .top .right{background:linear-gradient(52deg,#fc4a7c,#ff5411);border-radius:10rpx;color:#fefffe;font-size:24rpx;height:50rpx;line-height:50rpx;text-align:center;width:120rpx}.yh-mask .content .item-list .item .top .jt{bottom:10rpx;height:40rpx;position:absolute;right:30rpx;transform:rotate(180deg);transition:.3s;width:40rpx}.yh-mask .content .item-list .item .top .jt.extend{transform:rotate(0)}.yh-mask .content .item-list .item .bottom{color:#868686;font-size:22rpx;height:0;line-height:34rpx;overflow:hidden;padding:0rpx 24rpx;transition:.3s}.yh-mask .content .item-list .item .bottom.extend{height:auto;padding:24rpx}.painter{height:960rpx;left:-5000rpx;position:absolute;top:0;width:543rpx;z-index:100}.post-box{background:rgba(0,0,0,.5);height:100vh;left:0;position:fixed;top:0;width:100%;z-index:1000}.post-box .post-img{bottom:270rpx;box-shadow:0rpx 20rpx 30rpx 0rpx hsla(0,0%,78%,.3);height:400rpx;left:50%;position:absolute;transform:translateX(-50%);width:500rpx;z-index:100}.pic-mask{background:rgba(0,0,0,.3);bottom:0;left:0;position:fixed;right:0;top:0;z-index:100}.pic-mask .pic-box{left:50%;position:fixed;top:50%;transform:translate(-50%,-50%);width:100%;z-index:200}.pic-mask .pic-box video{height:550rpx;width:100%}.share-box{background:#fff;height:440rpx;padding:40rpx 50rpx 50rpx;width:100%}.share-box .title{color:#333;font-size:26rpx;line-height:40rpx;margin-bottom:30rpx;text-align:center;width:100%}.share-box .icon-box{align-items:center;display:-webkit-flex;display:flex;margin-bottom:80rpx}.share-box .icon-box .item{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;margin-right:10px;position:relative;width:150rpx}.share-box .icon-box .item .icon{height:100rpx;margin-bottom:16rpx;width:100rpx}.share-box .icon-box .item .t{color:#333;font-size:26rpx;line-height:40rpx;white-space:nowrap}.share-box .icon-box .item .sharebtn{background:none;height:100%;position:absolute;width:100%;z-index:2}.share-box .close{color:#333;font-size:28rpx;height:50rpx;line-height:50rpx;margin-left:275rpx;text-align:center;width:100rpx}.phone-box{background:#fff;padding:40rpx 30rpx 50rpx;width:100%}.phone-box .title{color:#333;font-size:36rpx;font-weight:700;line-height:40rpx;margin-bottom:30rpx;text-align:center;width:100%}.phone-box .phone-row{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:30rpx;width:100%}.phone-box .phone-row .left{color:#333;font-size:30rpx}.phone-box .close-b{border:2rpx solid rgba(30,27,25,.2);border-radius:40rpx;color:#333;font-size:28rpx;height:60rpx;line-height:60rpx;text-align:center;width:690rpx} .u-mode-center-box{background-color:initial!important}.notice-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;width:600rpx}.notice-box .notice-img{width:600rpx}.notice-box .notice-close{height:80rpx;margin-top:24rpx;width:80rpx}.calendar-box{background:#fff}.share-box-b{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;width:600rpx}.share-box-b .share-img{height:auto;width:600rpx}.share-box-b .share-tips{color:#fff;font-size:30rpx;margin-top:24rpx}.share-box-b .share-close{background-size:100% 100%;height:80rpx;margin-top:24rpx;width:80rpx}.shareButtton{background:hsla(0,0%,100%,.6);border-radius:50%;position:fixed;z-index:9999}.shareButtton .img{border-radius:50%;height:80%;width:80%}.ydxz-bot{height:0;opacity:0;width:0}.ydxzBH{height:60rpx}
</style>
