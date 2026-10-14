<template>
<view class="">
    <view class="container" v-if="infoObj.itemTitle">
        <view class="box1">
            <view class="name">{{ infoObj.itemTitle }}</view>
        </view>
        <view class="box2">
            <view class="new-box">
                <block v-if="infoObj.itemUseDesc.dateType==2">
                    <view class="date-box">
                        <view class="title">使用日期</view>
                        <view class="scroll-box">
                            <scroll-view class="left" :scrollIntoView="scrollToDate" :scrollX="true">
                                <view :class="['item','',item.date===selectedDate?'active':'',item.disabled===true?'disabled':'',infoObj.scenicType==1&&item.date===selectedDate?'csBg':'']" :id="'date-'+item.date" :key="index" v-for="(item, index) in timeData">
                                    <view class="p1">{{item.week}}</view>
                                    <view class="p2">{{item.dateShort}}</view>
                                    <view :class="['p3','',infoObj.scenicType==1?'csColor':'']">{{item.diy}}</view>
                                </view>
                            </scroll-view>
                            <view class="right" @click="jumpCalendarPage($event)">
                                <view class="text">更多日期</view>
                                <view :class="['arrow','',infoObj.scenicType==1?'csBorder':'']"></view>
                            </view>
                        </view>
                    </view>
                    <view class="hour-box" v-if="showHourBox&&hourArr[0]">
                        <view class="title">{{'入'+(infoObj.scenicType==1?'寺':'园')+'时段'}}</view>
                        <view class="item-box">
                            <view :class="['item','',selectedHour.time===item.startTime+'-'+item.endTime?'active':'',infoObj.scenicType==1&&selectedHour.time===item.startTime+'-'+item.endTime?'csBg':'',item.disabled===true?'disabled':'']" :key="id" v-for="(item, index) in hourArr">
                                <view class="p1">{{item.startTime+'-'+item.endTime}}</view>
                                <view :class="['p2','',infoObj.scenicType==1?'csColor':'']" :style="'opacity:'+(item.surplusStock===0&&!item.timePassed?1:0)+';'" v-if="item.disabled">{{infoObj.skuSellOutInfo?infoObj.skuSellOutInfo:infoObj.skuItemType==0?'已满':'约满'}}</view>
                                <view class="p2" v-else>{{item.surplusStockStr}}</view>
                            </view>
                        </view>
                    </view>
                </block>
                <view class="yxrq-box" v-else>
                    <view class="title">有效日期</view>
                    <view class="p-box">
                        <view class="p1 p-stock" v-if="infoObj.itemUseDesc.datePeriodBegin==infoObj.itemUseDesc.datePeriodEnd">{{ infoObj.itemUseDesc.datePeriodBegin+'有效' }}<view class="stock-desc" v-if="infoObj.itemUseDesc.stockLessFlag&&infoObj.ticketPrices[0]&&infoObj.ticketPrices[0].surplusStock<infoObj.itemUseDesc.stockLessNum">{{ (infoObj.itemUseDesc.stockLessShowType===1?'余'+infoObj.ticketPrices[0].surplusStock:$root.g0) }}</view>
                        </view>
                        <view class="p1 p-stock" v-else>{{ infoObj.itemUseDesc.datePeriodBegin+'-'+infoObj.itemUseDesc.datePeriodEnd+'有效' }}<view class="stock-desc" v-if="infoObj.itemUseDesc.stockLessFlag&&infoObj.ticketPrices[0]&&infoObj.ticketPrices[0].surplusStock<infoObj.itemUseDesc.stockLessNum">{{ (infoObj.itemUseDesc.stockLessShowType===1?'余'+infoObj.ticketPrices[0].surplusStock:$root.g1) }}</view>
                        </view>
                        <view class="p2" v-if="infoObj.bookingInfoTag.validityModeBookStr3">{{infoObj.bookingInfoTag.validityModeBookStr3}}</view>
                    </view>
                </view>
            </view>
            <view class="b">
                <view class="l">
                    <view class="info" @click="showBookTip(infoObj)">
                        <view class="" v-if="infoObj.scenicType==1">
                            <text class="">入寺先预约</text>
                            <text class="">｜</text>
                            <text class="">取消请提前</text>
                            <text class="" @click="showBookTip(infoObj)">
                                <text class="" style="color:#777777;">｜</text>{{(infoObj.skuItemType==0?'购买':'预约')+'须知 >'}}</text>
                        </view>
                        <view class="" v-else>
                            <text class="" style="color:#FF5411;" v-if="infoObj.bookingInfoTag.reserveTimeTag&&showTimeTag&&infoObj.bookingInfoTag.bookingTag=='可订今日'">{{infoObj.bookingInfoTag.reserveTimeTag+''}}<text class="" style="color:#777777;">｜</text>
                            </text>
                            <text class="" :style="'color:'+$root.m0+';'">{{$root.m1}}</text>
                            <text class="">｜</text>
                            <text class="" :style="'color:'+$root.m2+';'">{{infoObj.bookingInfoTag.changeTag}}</text>
                            <text class="" style="color:#FF5411;" v-if="infoObj.bookingInfoTag.idCardTag">
                                <text class="" style="color:#777777;">｜</text>{{infoObj.bookingInfoTag.idCardTag+''}}</text>
                            <text class="">｜</text>
                            <text class="" style="color:#777777;">{{(infoObj.skuItemType==0?'购买':'预约')+'须知 >'}}</text>
                        </view>
                    </view>
                </view>
                <view class="r">
                    <view class="op" @click="reduceNum($event)">-</view>
                    <input class="" :disabled="true" :value="ticketNum" @input="ticketNum = $event"></input>
                    <view :class="['op','',infoObj.scenicType==1?'csBg':'']" @click="addNum($event)">+</view>
                </view>
            </view>
            <view class="hotel-box" v-if="infoObj.isSpecial==1">
                <view class="title">酒店住离日期</view>
                <view class="choose">
                    <view class="c c1" v-if="$root.g2">请先选择使用日期</view>
                    <block v-else>
                        <view :class="['c','',startHotelDate===item.date?'active':'',item.state==0?'c1':'',item.state==1?'c2':'']" :key="index" v-for="(item, index) in hotelDate">{{item.date+' 至 '+item.dateEnd+' '+(item.state==1?'共1晚':'已订完')}}</view>
                    </block>
                </view>
            </view>
            <view class="hotel-box box3" v-if="infoObj.isSpecial==2">
                <view class="title">详细信息</view>
                <view class="contact-box">
                    <view class="item" :key="index" v-for="(item, index) in infoObj.projectInfoDtoList">
                        <view class="row">
                            <view class="l">{{item.projectName}}</view>
                            <input class="r" data-type="name" :placeholder="item.defaultText" :value="item.projectText"></input>
                        </view>
                    </view>
                </view>
            </view>
            <view class="buy-limit" v-if="infoObj.itemUseDesc.accountAstrictNum>0&&infoObj.scenicType!==2">
                <view class="p">{{infoObj.itemUseDesc.accountAstrictDays+'天最多'+(infoObj.skuItemType==0?'购买':'预约')+infoObj.itemUseDesc.accountAstrictNum+$root.f0}}</view>
            </view>
            <view class="buy-limit" v-if="infoObj.itemUseDesc.idAstrictNum>0&&infoObj.scenicType!==2">
                <view class="p">{{'同一身份证'+infoObj.itemUseDesc.idAstrictDays+'天最多'+(infoObj.skuItemType==0?'购买':'预约')+infoObj.itemUseDesc.idAstrictNum+$root.f1}}</view>
            </view>
        </view>
        <view class="box3">
            <view class="title">游客信息</view>
            <view class="scroll-box">
                <scroll-view class="passenger-box" :scrollX="true">
                    <view :class="['user','',item.g3?'active':'',!item.g4?'dis':'',item.g5?'csBg':'',item.g6?'csColor':'']" :key="index" v-for="(item, index) in $root.l0">{{ item.name }}</view>
                    <view class="user-but" @click="choosePassenger($event)">
                        <view class="but">{{ ($root.g7>0?'新增/更换':'+ 新增信息') }}</view>
                    </view>
                </scroll-view>
            </view>
            <view class="contact-box">
                <view class="item" :key="index" v-for="(item, index) in $root.l1">
                    <view class="row">
                        <view class="l">
                            <image mode class="image-l" src="https://eshopfile.zhiyousx.com/173950170060653880.png"></image>
                        </view>
                        <input class="r" data-type="name" placeholder="请按Surname/Given name格式填写" :value="item.name" v-if="item.cardType==1"></input>
                        <ocr-index class="" :csflag="infoObj.scenicType==1" style="width:calc(100% - 80rpx);" :subscript="index" :vueSlots="['content']" v-if="(infoObj.itemUseDesc.touristInfoType==1&&index==0||infoObj.itemUseDesc.touristInfoType==2)&&item.cardType==0&&!item.idCard">
                            <input class="r" data-type="name" placeholder="请填写姓名" slot="content" :value="item.name"></input>
                        </ocr-index>
                        <input class="r" data-type="name" placeholder="请填写姓名" :value="item.name" v-if="item.cardType!=1&&!( (infoObj.itemUseDesc.touristInfoType==1&&index==0||infoObj.itemUseDesc.touristInfoType==2)&&item.cardType==0&&!item.idCard )"></input>
                    </view>
                    <view class="row" v-if="infoObj.itemUseDesc.touristInfoType==1&&index==0||infoObj.itemUseDesc.touristInfoType==2">
                        <view class="l"></view>
                        <view class="user-card">
                            <view class="card-name">{{ item.f2 }}</view>
                            <u-icon class="" color="#555555" name="arrow-down" size="20" v-if="!showCertificate"></u-icon>
                            <u-icon class="" color="#555555" name="arrow-up" size="20" v-if="showCertificate"></u-icon>
                        </view>
                        <input :class="['r','',item.g8?'errId':'']" data-type="cardCode" placeholder="请填写证件号码" style="border:none;" type="idcard" :value="item.idCard" v-if="item.cardType==0"></input>
                        <input class="r" data-type="cardCode" placeholder="请填写证件号码" style="border:none;" type="text" :value="item.idCard" v-else></input>
                    </view>
                    <view class="row" v-if="infoObj.itemUseDesc.touristInfoType==2&&index==0||infoObj.itemUseDesc.touristInfoType!=2">
                        <view class="l"></view>
                        <input class="r" data-type="phone" placeholder="请填写手机号码" type="number" :value="item.telephone"></input>
                        <view :class="['addPhone','',infoObj.scenicType==1?'csPhone':'']" @click="getUserPhone()">填写本机号码</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="couponBox" v-if="!isFree">
            <view class="cb1">
                <view class="cb1-1">优惠券</view>
                <view class="cb1-2" v-if="discountAmount>0">{{'已选'+$root.g9+'张'}}</view>
            </view>
            <view class="cb2" @click="chooseCoupon($event)">
                <view class="cb2-2" v-if="!couponArr[0]">无可用</view>
                <block v-else>
                    <view class="cb2-1" v-if="discountAmount>0">{{'-¥'+$root.m3}}</view>
                    <block v-else>
                        <view class="cb2-3" v-if="discountAmount==0">{{$root.g10+'张可用'}}</view>
                    </block>
                </block>
                <uni-icons class="" color="#BDBDBD" size="19" type="arrowright"></uni-icons>
            </view>
        </view>
        <view class="couponBox gift" v-if="!isFree">
            <view class="cb1">
                <view class="cb1-1">礼品卡</view>
                <view class="cb1-2" v-if="giftCardAmount>0">{{'已选'+$root.g11+'张'}}</view>
            </view>
            <view class="cb2" @click="chooseGiftCard($event)">
                <view class="cb2-2" v-if="!giftCardArr[0]">无可用</view>
                <block v-else>
                    <view class="cb2-1" v-if="giftCardAmount>0">{{'-¥'+$root.m4}}</view>
                    <block v-else>
                        <view class="cb2-3" v-if="giftCardAmount==0">{{$root.g12+'张可用'}}</view>
                    </block>
                </block>
                <uni-icons class="" color="#BDBDBD" size="19" type="arrowright"></uni-icons>
            </view>
        </view>
        <view class="insure-box">
            <view class="insure-list" :key="index" v-for="(item, index) in $root.l2">
                <view class="title" v-if="index==0">{{item.insuranceProductType==1?'景区意外险':''}}</view>
                <view class="insureItem">
                    <view class="top">
                        <view class="insure-detail">
                            <view class="item1">
                                <view class="icon">保</view>
                                <view class="" style="display:flex;" v-if="item.appNameType==1">
                                    <view class="money col">{{'￥'+item.premium}}</view>
                                    <view class="money mr">/人</view>
                                    <view class="money" v-if="item.isInsurance">{{'×'+ticketNum+'份'}}</view>
                                </view>
                                <view class="moneys" v-else>{{item.insuranceProductName}}</view>
                            </view>
                            <view class="item2">{{ '('+item.insuranceProductDesc+')' }}</view>
                        </view>
                        <view class="insure-choose">
                            <image class="img-style" src="https://eshopfile.zhiyousx.com/170675434646321261.png" v-if="item.isInsurance"></image>
                            <image class="img-style" src="https://eshopfile.zhiyousx.com/169345576395787642.png" v-else></image>
                        </view>
                    </view>
                    <view class="bottom">
                        <view class="box" v-if="item.isInsurance">
                            <view class="left">被保人</view>
                            <view class="right">
                                <view class="m-user-box">
                                    <view class="mu-item" v-for="(it, i) in item.insuranceForm">
                                        <image mode class="icon" src="https://eshopfile.zhiyousx.com/2023091815384493978.png"></image>
                                        <view class="it-info" @click="addInsure($event)">
                                            <view class="it-flex">
                                                <view class="name">{{'姓名：'+it.name}}</view>
                                                <view class="card">{{'身份证：'+(it.idCarNo?it.idCarNo:'')}}</view>
                                            </view>
                                            <image mode class="u-item-r" src="https://eshopfile.zhiyousx.com/169415863023853994.png"></image>
                                        </view>
                                    </view>
                                </view>
                                <view :class="['',insNum>0?'mt':'']" style="display:flex;width:490rpx;" v-if="item.g13" @click="addInsure($event)">
                                    <image class="add" src="https://eshopfile.zhiyousx.com/170675827192963998.png"></image>
                                    <view class="people" v-if="insNum==0">请选择被保人</view>
                                    <view class="people" v-else>{{'补充'+ticketNum-insNum+'个被保人'}}</view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="">
            <uni-popup class=" vue-ref" ref="popup" type="center" :vueSlots="['default']">
                <view class="popup">
                    <view class="text">{{'优惠券已失效,'+(infoObj.skuItemType==0?'订':'预约')+'单已恢复原价'+priceAmount+'元,是否继续支付?'}}</view>
                    <view class="bottom">
                        <view class="b-left" @click="closePopup($event)">取消</view>
                        <view class="b-center"></view>
                        <view class="b-right" @click="confirm($event)">确认</view>
                    </view>
                </view>
            </uni-popup>
        </view>
        <view class="yy-success-mask" :hidden="!isHideSuccessMask">
            <view class="content">
                <view class="t">
                    <view class="title">
                        <image class="" src="https://eshopfile.zhiyousx.com/170065317610766757.png" v-if="infoObj.scenicType!=1"></image>
                        <view class="">{{(infoObj.skuItemType==0?'购买':'预约')+'成功'}}</view>
                    </view>
                    <view class="detail">
                        <view class="">
                            <text class="text">{{(infoObj.skuItemType==0?'订':'预约')+'单号:'}}</text>
                            <text :class="['id','',infoObj.scenicType==1?'csColor':'']">{{bookInfoObj.orderSn}}</text>
                        </view>
                        <view class="">
                            <text class="">{{(infoObj.scenicType!=1?'游玩':'入寺')+'时间:'}}</text>{{bookInfoObj.time}}</view>
                    </view>
                </view>
                <view class="b">
                    <view class="l" @click="backPage($event)">返回</view>
                    <view class="r" @click="jumpToOrder($event)">{{'查看'+(infoObj.skuItemType==0?'订':'预约')+'单'}}</view>
                </view>
            </view>
        </view>
        <u-popup borderRadius="32" class="" :closeable="true" height="70%" mode="bottom" :value="isShowBookTip" :vueSlots="['default']" @input="isShowBookTip = $event">
            <view class="ytxz-box" v-if="ydxz">
                <view class="content-box1">
                    <view class="title-box">
                        <view class="p1" id="ytxz-box-title">{{ydxz.itemTitle}}</view>
                        <view class="p2">
                            <text class="" v-if="ydxz.scenicType!=1">{{'已'+(infoObj.skuItemType==0?'售':'约')+$root.f3}}</text>
                        </view>
                    </view>
                    <scroll-view class="bottom-box" scrollY="true" :style="'height:'+bookTipHeight+'rpx'+';'">
                        <view class="line2" v-if="$root.g14">
                            <view class="title">适用人群</view>
                            <view class="b" style="margin-bottom:8rpx;" :key="i" v-for="(des, i) in ydxz.targetGroupsRuleDescList">{{ des }}</view>
                        </view>
                        <view class="line1">
                            <view class="title">{{(infoObj.skuItemType==0?'购买':'预约')+'须知'}}</view>
                            <view class="b">
                                <view class="item" v-if="ydxz.itemUseDesc.dateType==1">
                                    <view class="l lc" v-if="ydxz.scenicType==1">入寺先预约</view>
                                    <view class="l" v-else>{{ydxz.bookingInfoTag.bookingTag}}</view>
                                    <view class="r">
                                        <view class="refundItem" v-if="ydxz.bookingInfoTag.validityModeBookStr1">{{ydxz.bookingInfoTag.validityModeBookStr1}}</view>
                                        <view class="refundItem" v-if="ydxz.bookingInfoTag.validityModeBookStr2">{{ydxz.bookingInfoTag.validityModeBookStr2}}</view>
                                        <view class="refundItem" v-if="ydxz.bookingInfoTag.validityModeBookStr3">{{ydxz.bookingInfoTag.validityModeBookStr3}}</view>
                                    </view>
                                </view>
                                <view class="item" v-else>
                                    <view class="l lc" v-if="ydxz.scenicType==1">入寺先预约</view>
                                    <view class="l" v-else>{{ydxz.bookingInfoTag.bookingTag}}</view>
                                    <view class="r">{{ydxz.bookingInfoTag.bookingTimeStr+(ydxz.bookingInfoTag.reserveTimeStr?'，'+ydxz.bookingInfoTag.reserveTimeStr:'')}}</view>
                                </view>
                                <view class="item" v-if="ydxz.scenicType!=1">
                                    <view class="l">{{ydxz.bookingInfoTag.changeTag}}</view>
                                    <view class="r">{{ydxz.bookingInfoTag.changeStr}}</view>
                                </view>
                                <view class="item">
                                    <view class="l lc" v-if="ydxz.scenicType==1">取消请提前</view>
                                    <view class="l" v-else>{{ydxz.bookingInfoTag.refundTag}}</view>
                                    <view class="r" v-if="ydxz.bookingInfoTag&&ydxz.bookingInfoTag.refundStr&&ydxz.bookingInfoTag.refundTag!='条件退'">
                                        <view class="" v-for="(item, index) in $root.l3">
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
                            <view class="tr" v-if="item.timeDesc" v-for="(item, index) in $root.l4">
                                <view class="td" style="width:480rpx;">{{item.m5}}</view>
                                <view class="td" style="width:210rpx;">{{item.feeDesc||''}}</view>
                            </view>
                            <view class="tr" v-if="ydxz.bookingInfoTag&&ydxz.bookingInfoTag.refundStr1">
                                <view class="td" style="width:690rpx;display:block;">
                                    <view class="" v-for="(it, i) in $root.l5">
                                        <view class="refundItem">{{it}}</view>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="line2" v-if="ydxz.scenicType!=1&&(ydxz.bookingInfoTag.feeIncludes||ydxz.bookingInfoTag.feeNotIncludes)">
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
                        <view class="line2" v-if="ydxz.scenicType!=1&&ydxz.bookingInfoTag.entranceDetail">
                            <view class="title">使用说明</view>
                            <view class="b">
                                <u-parse class=" vue-ref" ref="article" :html="ydxz.bookingInfoTag.entranceDetail" :lazyLoad="true" :tagStyle="parseStyle1"></u-parse>
                            </view>
                        </view>
                        <view class="line2" v-if="ydxz.scenicType!=1&&ydxz.bookingInfoTag.bookNote">
                            <view class="title">其它说明</view>
                            <view class="b">
                                <u-parse class=" vue-ref" ref="article" :html="ydxz.bookingInfoTag.bookNote" :lazyLoad="true" :tagStyle="parseStyle1"></u-parse>
                            </view>
                        </view>
                        <image class="community-box" mode="widthFix" :showMenuByLongpress="true" :src="ydxz.communityUrl" v-if="ydxz.communityUrl"></image>
                        <view class="line3">
                            <view class="title">{{ydxz.scenicType==1&&( !telephoneVoList||!telephoneVoList[0] )?'':'客服电话'}}</view>
                            <view class="b" v-if="ydxz.scenicType!=1">
                                <view class="item">
                                    <view :class="['col1','',ydxz.scenicType==1?'col1c':'']">平台</view>
                                    <view class="col2">{{'门票或'+(infoObj.skuItemType==0?'订':'预约')+'单问题'}}</view>
                                    <view class="col3">4000292296</view>
                                    <view class="col4">
                                        <image mode class="" src="https://eshopfile.zhiyousx.com/spotIntroNew/dianhua.png" @click="call('4000292296')"></image>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="line3" v-if="telephoneVoList&&telephoneVoList[0]" v-for="(item, __i0__) in telephoneVoList">
                            <view class="b">
                                <view class="item">
                                    <view :class="['col1','',ydxz.scenicType==1?'col1c':'']">{{ydxz.scenicType!=1?'官方':'客堂'}}</view>
                                    <view class="col2 singleLineText">{{item.telephoneTitle||''}}</view>
                                    <view class="col3 singleLineText">{{item.telephone||''}}</view>
                                    <view class="col4">
                                        <image mode class="" src="https://eshopfile.zhiyousx.com/spotIntroNew/dianhua.png"></image>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </scroll-view>
                </view>
            </view>
        </u-popup>
        <view class="fixed-bottom">
            <view class="l" v-if="!isFree">您需支付:<text class="">{{'￥'+$root.m6}}</text>
            </view>
            <button :class="['r','',infoObj.scenicType==1?'csBtn':'']" :disabled="disabledSubmitBtn" @click="submit($event)">{{infoObj.scenicType!=1?'立即预订':'免费预约'}}</button>
        </view>
        <u-popup borderRadius="20" class="" :maskCloseAble="false" mode="center" :value="showNotice" :vueSlots="['default']" @input="showNotice = $event">
            <view class="hasnotice">
                <view class="title">温馨提示</view>
                <view class="scontent">
                    <text class="">{{ydxz.useNotes}}</text>
                </view>
                <view :class="['',infoObj.scenicType==1?'csColor':'',true?'close':'']" @click="e0($event)">{{infoObj.scenicType==1?'已阅读并同意':'知道了'}}</view>
            </view>
        </u-popup>
        <u-popup borderRadius="20" class="" :maskCloseAble="false" mode="center" :value="lineing" :vueSlots="['default']" @input="lineing = $event">
            <view class="hasnotice">
                <view class="title" style="color:#d51422;">正在排队，请稍候</view>
                <view class="scontent">
                    <view class="loading">
                        <view class=""></view>
                        <view class=""></view>
                        <view class=""></view>
                        <view class=""></view>
                    </view>
                </view>
                <view class="close" @click="closeLineing($event)">退出排队</view>
            </view>
        </u-popup>
        <u-popup borderRadius="20" class="" :maskCloseAble="false" mode="center" :value="showNoStock" :vueSlots="['default']" @input="showNoStock = $event">
            <view class="hasnotice">
                <view class="title" style="color:#d51422;">很抱歉</view>
                <view class="scontent">
                    <text class="">{{showHourBox?'当前时段库存不足，请选择其他时段':'当前库存不足'}}</text>
                </view>
                <view class="close" @click="closeNoStock($event)">知道了</view>
            </view>
        </u-popup>
        <u-popup borderRadius="20" class="" :maskCloseAble="false" mode="center" :value="showStudentPop" :vueSlots="['default']" @input="showStudentPop = $event">
            <view class="hasnotice">
                <view class="title" style="color:#d51422;">很抱歉</view>
                <view class="scontent">
                    <text class="">当前产品仅认证学生可购买</text>
                </view>
                <view class="close" @click="closeStudentPop($event)">确定</view>
            </view>
        </u-popup>
        <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="showCoupon" :vueSlots="['default']" @input="showCoupon = $event">
            <view class="couponcardBox">
                <view class="title">优惠券</view>
                <scroll-view class="scontent" :scrollY="true">
                    <view class="item" v-for="(item, __i1__) in $root.l6">
                        <view class="info">
                            <view class="name singleLineText">{{item.name}}</view>
                            <view class="date" v-if="item.useTimeSlot==0">{{item.f4+'-'+item.f5}}</view>
                            <view class="date" v-if="item.useTimeSlot==1">{{item.validityEndTime+'前可用'}}</view>
                            <view class="date" v-if="item.useTimeSlot==2">{{'可预'+(infoObj.skuItemType==0?'订':'约')+'【'+item.f6+'-'+item.f7+'】的门票'}}</view>
                            <view class="stackInfo" v-if="coupondk[0]&&item.superpositionType!==1">此券可叠加使用</view>
                        </view>
                        <view class="price">
                            <view class="num" v-if="item.type==3">
                                <text class="n">0</text>
                                <text class="">元购</text>
                            </view>
                            <view class="num" v-else>
                                <text class="">￥</text>
                                <text class="n">{{item.realQuota}}</text>
                            </view>
                            <view class="condition" v-if="item.type==3">{{'可抵扣'+item.deductionNum+'张'}}</view>
                            <view class="condition" v-if="item.type==2">无门槛</view>
                            <view class="condition" v-if="item.type==1">{{'满'+item.threshold+'元可用'}}</view>
                        </view>
                        <image class="radio" mode="aspect" src="https://eshopfile.zhiyousx.com/2022031716044893716.png" v-if="item.g15"></image>
                        <image class="radio" mode="aspect" src="https://eshopfile.zhiyousx.com/2022031716040660783.png" v-else></image>
                    </view>
                </scroll-view>
                <view class="bottom">
                    <view class="no" @click="cancelCoupon($event)">
                        <text class="">暂不使用优惠券</text>
                        <image class="" mode="aspect" src="https://eshopfile.zhiyousx.com/2022031716044893716.png" v-if="userCouponId[0]==-1"></image>
                        <image class="" mode="aspect" src="https://eshopfile.zhiyousx.com/2022031716040660783.png" v-else></image>
                    </view>
                    <view class="btn" @click="e1($event)">确定</view>
                </view>
            </view>
        </u-popup>
        <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="showGiftCard" :vueSlots="['default']" @input="showGiftCard = $event">
            <view class="fill-card-box">
                <view class="name">礼品卡</view>
                <view class="card-box-popup">
                    <scroll-view class="" scrollY="true" style="height:600rpx;">
                        <view class="card-item-popup" :key="index" v-for="(item, index) in $root.l7">
                            <image mode class="card-image" :src="item.cardPicUrl" v-if="item.cardPicUrl"></image>
                            <view class="card-data">
                                <view :class="['card-head','',!item.cardPicUrl?'cardHeadbg':'']">
                                    <image mode class="card-logo" src="../../static/images/logo.png" v-if="!item.cardPicUrl"></image>
                                    <view class="card-info">
                                        <view class="card-name">{{ item.name }}</view>
                                        <view class="card-value">{{'面值：'+item.quota+'元'}}</view>
                                    </view>
                                    <view class="card-time">{{ item.validityTimeStr }}</view>
                                </view>
                                <view :class="['card-body','',!item.cardPicUrl?'cardBodyBg':'']">
                                    <view class="card-balance">
                                        <text class="label">余额</text>
                                        <text class="value">{{'￥'+item.balance}}</text>
                                    </view>
                                    <image mode class="card-change" src="../../static/images/cardYes.png" v-if="item.g16"></image>
                                    <image mode class="card-change" src="../../static/images/cardNo.png" v-else></image>
                                </view>
                            </view>
                        </view>
                    </scroll-view>
                </view>
                <view class="but-popup" @click="confirmCard($event)">确定</view>
            </view>
        </u-popup>
        <u-popup borderRadius="20" class="" mode="bottom" :value="showPassenger" :vueSlots="['default']" @input="showPassenger = $event">
            <view class="fill-passenger-box">
                <view class="name">{{ passengerTitle }}</view>
                <view class="savePassenger" @click="e2($event)">保存</view>
                <view :class="['but-popup','',infoObj.scenicType==1?'csColor':'',infoObj.scenicType==1?'csBorder':'']" @click="addPassenger()">+ 新增联系人</view>
                <view class="">
                    <scroll-view class="passenger-box-popup" scrollY="true">
                        <view class="user-box pass" :key="index" v-for="(item, index) in $root.l8">
                            <view :class="['info-box','',!item.g17?'dis':'']">
                                <image mode class="user-change" src="../../static/images/cardYes.png" v-if="item.g18"></image>
                                <image mode class="user-change" src="../../static/images/cardNo.png" v-else></image>
                                <view class="user-info">
                                    <view class="name">{{item.name}}</view>
                                    <view class="u-phone" v-if="item.phone">
                                        <view class="u-phone1">手机号</view>
                                        <view class="u-phone2">{{ item.f8 }}</view>
                                    </view>
                                    <view class="u-phone">
                                        <view class="u-phone1">证件类型</view>
                                        <view class="u-phone2">{{ item.f9 }}</view>
                                    </view>
                                    <view class="u-phone" v-if="item.idCarNo">
                                        <view class="u-phone1">证件号</view>
                                        <view class="u-phone2">{{ item.f10 }}</view>
                                    </view>
                                </view>
                            </view>
                            <image mode class="user-edit" src="../../static/images/edit.png"></image>
                        </view>
                    </scroll-view>
                </view>
            </view>
        </u-popup>
        <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="showCertificate" :vueSlots="['default']" @input="showCertificate = $event">
            <view class="certificate">
                <view class="name">选择证件类型</view>
                <view class="certificate-box">
                    <view class="certificate-item" :key="index" v-for="(item, index) in $root.l9">
                        <view class="t">{{ item.f11 }}</view>
                        <image mode class="icon" src="../../static/images/cardYes.png" v-if="realCardType==item"></image>
                        <image mode class="icon" src="../../static/images/cardNo.png" v-else></image>
                    </view>
                </view>
            </view>
        </u-popup>
        <u-popup borderRadius="20" class="" :maskCloseAble="true" mode="bottom" :value="showInsure" :vueSlots="['default']" @input="showInsure = $event">
            <view class="model-box">
                <view class="model-title">
                    <view class="" v-if="ticketNum-insNum>0">{{'选择'+ticketNum-insNum+'位被保险人'}}</view>
                    <view class="" v-else>已选满</view>
                    <image class="close" src="https://eshopfile.zhiyousx.com/169345070139905990.png" @click="e3($event)"></image>
                </view>
                <view class="addContacts" v-if="!modelType" @click="addInsurePeople($event)">+ 新增被保险人</view>
                <view class="" v-if="!modelType">
                    <scroll-view class="passenger-box-popup" scrollY="true">
                        <view class="user-box pass" :key="index" v-for="(item, index) in $root.l10">
                            <view class="info-box">
                                <image mode class="user-change" src="https://eshopfile.zhiyousx.com/169345574106635019.png" v-if="item.check"></image>
                                <image mode class="user-change" src="https://eshopfile.zhiyousx.com/169345576395787642.png" v-else></image>
                                <view :class="['user-info','',item.cardType!=0?'dis':'']">
                                    <view class="name">{{item.name}}</view>
                                    <view class="u-phone" v-if="item.phone">
                                        <view class="u-phone1">手机号</view>
                                        <view class="u-phone2">{{ item.m7 }}</view>
                                    </view>
                                    <view class="u-phone">
                                        <view class="u-phone1">证件类型</view>
                                        <view class="u-phone2">{{ item.f12 }}</view>
                                    </view>
                                    <view class="u-phone" v-if="item.idCarNo">
                                        <view class="u-phone1">证件号</view>
                                        <view class="u-phone2">{{ item.m8 }}</view>
                                    </view>
                                    <view class="tips" v-if="!item.idCarNo">请补充证件信息</view>
                                </view>
                            </view>
                            <image mode class="user_edit" src="https://eshopfile.zhiyousx.com/169415900438889645.png"></image>
                        </view>
                    </scroll-view>
                </view>
                <view class="content" v-else>
                    <view class="row-box">
                        <view class="label">姓名</view>
                        <view class="value">
                            <u-input :border="border" class="" placeholder="请填写" type="text" :value="passenger.name" @input="passenger.name = $event"></u-input>
                        </view>
                    </view>
                    <view class="row-box">
                        <view class="label">手机号</view>
                        <view class="value">
                            <u-input :border="border" class="" placeholder="请填写" type="number" :value="passenger.phone" @input="passenger.phone = $event"></u-input>
                        </view>
                    </view>
                    <view class="row-box bet">
                        <view class="label">证件类型</view>
                        <view class="select">身份证</view>
                    </view>
                    <view class="row-box">
                        <view class="label">证件号码</view>
                        <view class="value">
                            <u-input :border="border" class="" placeholder="请填写" type="text" :value="passenger.idCarNo" @input="passenger.idCarNo = $event"></u-input>
                        </view>
                    </view>
                </view>
                <view class="save" @click="e4($event)">保存</view>
            </view>
        </u-popup>
    </view>
    <student-verify class="" data-com-type="wx" :isQuick="true" :show="showStudentVerifyDialog" @auth="onStudentVerifyAuth()" @close="onStudentVerifyClose()"></student-verify>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              giftPack: function() {
                i.e("subPage/components/gift-pack/gift-pack").then(function() {
                  return resolve(i("d5af"))
                }.bind(null, i)).catch(i.oe)
              },
              ocrIndex: function() {
                i.e("components/ocr/ocrIndex").then(function() {
                  return resolve(i("7882"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            data: function() {
              return this.openId = uni.getStorageSync("userInfor").openId, {
                hotelDate: [],
                startHotelDate: "",
                infoObj: {},
                bookInfoObj: {},
                ydxz: {},
                showCoupon: !1,
                showNotice: !1,
                isShowBookTip: !1,
                showHourBox: !1,
                disabledSubmitBtn: !1,
                isHideSuccessMask: !1,
                timeData: [],
                couponArr: [],
                supCouponArr: [],
                singleCouponArr: [],
                hourArr: [],
                scrollToDate: "",
                selectedHour: "",
                ticketPrice: 0,
                ticketNum: 1,
                priceAmount: 0,
                selectedDate: "",
                departTimeSlot: "",
                inputGroup: [],
                haveToId: !1,
                discountAmount: 0,
                userCouponId: [],
                telephoneVoList: null,
                repeatCreateOrder: null,
                repeatCreateOrder2: null,
                lineing: !1,
                showNoStock: !1,
                singledateObj: null,
                hasTimeOut: !1,
                activeGiftCard: [],
                activeGiftamount: 0,
                giftCardPopData: [],
                shareMemberId: "",
                giftCardAmount: 0,
                showGiftCard: !1,
                giftCardArr: [],
                showPassenger: !1,
                commonUsedTouristList: [],
                usedTouristIdsPopData: [],
                usedTouristPopData: [],
                bookTipHeight: 750,
                passengerTitle: "",
                requestNum: 0,
                showGiftBag: !1,
                giftBagData: "",
                gbCl: 0,
                animationType: 0,
                audio: e.createInnerAudioContext(),
                openAudio: " https://eshopfile.zhiyousx.com/ysx/openBox.m4a",
                beforeAudio: "https://eshopfile.zhiyousx.com/ysx/wobGold.mp3",
                newOpen: "https://eshopfile.zhiyousx.com/ysx/newOpen.mp3",
                showPacketBox: !1,
                coupondk: [],
                errIdCard: [],
                showTimeTag: !1,
                parseStyle: {
                  p: "word-break: break-all;"
                },
                parseStyle1: {
                  p: "word-break: break-all;line-height:48rpx;"
                },
                realCardTypeList: [],
                showCertificate: !1,
                realCardType: 0,
                userIndex: 0,
                cacheInputGroup: [],
                selectedDateSpot: "",
                isCs: null,
                initOptions: "",
                insureList: [],
                insurePeopleList: [],
                modelType: 0,
                showInsure: !1,
                passenger: {
                  name: "",
                  idCarNo: "",
                  phone: "",
                  id: ""
                },
                insureIndex: 0,
                insureNum: 0,
                aggree: null,
                insNum: 0,
                notQueryCouponFlag: null,
                aggregationItemId: "",
                canCouponStack: !1,
                allDeductionNum: 0,
                infosUse: !1,
                showStudentVerifyDialog: !1,
                isStudent: -1,
                studentCheckCode: "",
                showStudentPop: !1
              }
            },
            onLoad: function(t) {
              this.loadPage(t), this.studentCheckCode = uni.getStorageSync("CODE_STORAGE_KEY")
            },
            onShow: function() {
              var t = this;
              this.$bus.$on("agree", (function(e, i) {
                if (e) {
                  var o = JSON.parse(JSON.stringify(t.aggree));
                  t.insureList.forEach((function(e) {
                    t.aggree != i && (i == e.insuranceId ? (o = i, e.isInsurance = !0) : (e.isInsurance = !1, e.insuranceForm = [], t.insurePeopleList = []))
                  })), t.aggree = o
                } else i == t.aggree && t.cancelInsure(i)
              })), this.disabledSubmitBtn = !1, 1 == this.requestNum ? this.requestNum = 2 : this.getCommonUsedTouristList("onShow");
              var i = uni.getStorageSync("templeOpenId");
              i && this.setChanSiOpenId(i);
              var o = uni.getStorageSync("selectedHour");
              if (o && uni.getStorageSync("isFromCalendarPage")) {
                if (this.selectedHour = o, this.selectedDate = o.date, this.showTimeTag = "今天" == this.getWeekOfDate(this.selectedDate), this.scrollToDate = "date-" + o.date, this.departTimeSlot = o.time, this.ticketPrice = o.sellPrice || 0, this.calcPriceAmount(), this.departTimeSlot) {
                  var n = this.timeData.find((function(e) {
                    return e.date === t.selectedDate
                  }));
                  this.getHourData(n.itemTicketStocks)
                }
                1 == this.infoObj.isSpecial && this.getItemHotelStateByTicketDate()
              }
            },
            computed: {
              isFree: function() {
                return 1 == this.infoObj.skuItemType && 1 == this.infoObj.isFree
              }
            },
            filters: {
              timeFormat: function(e) {
                return e.replace(/-/g, ".")
              },
              toFixed2: function(e) {
                return e ? Number(e).toFixed(2) : "0.00"
              },
              validityTimeFilter: function(e) {
                return e.slice(0, 10) + "到期"
              },
              unitFilter: function(e) {
                return {
                  0: "单",
                  1: "张"
                } [e]
              },
              phoneFilter: function(e) {
                if (e) {
                  var t = e.toString();
                  return t.replace(t.substring(3, 7), "****")
                }
              },
              idCarNoFilter: function(e) {
                if (e) {
                  var t = e.toString();
                  return t.substring(0, 1) + "****************" + t.substring(t.length - 1, t.length)
                }
              },
              realCardName: function(e) {
                if (e >= 0) {
                  var t = {
                    0: "身份证",
                    1: "护照",
                    2: "大陆居民往来港澳通行证",
                    3: "大陆居民往来台湾通行证",
                    4: "台胞证",
                    5: "港澳通行证",
                    6: "外国人永久居留证",
                    7: "港澳台居民居住证",
                    8: "军人证"
                  } [e];
                  return t.length > 3 ? t.substring(0, 3) + "..." : t
                }
                return ""
              },
              cardName: function(e) {
                return {
                  0: "身份证",
                  1: "护照",
                  2: "大陆居民往来港澳通行证",
                  3: "大陆居民往来台湾通行证",
                  4: "台胞证",
                  5: "港澳通行证",
                  6: "外国人永久居留证",
                  7: "港澳台居民居住证",
                  8: "军人证"
                } [e]
              }
            },
            watch: {
              inputGroup: {
                deep: !0,
                immediate: !0,
                handler: function(e, t) {
                  this.cacheInputGroup = this.$util.deepCopy(this.inputGroup)
                }
              },
              insurePeopleList: {
                deep: !0,
                immediate: !0,
                handler: function(e, t) {
                  var i = this.insurePeopleList.filter((function(e) {
                    return e.check
                  }));
                  this.insNum = i.length
                }
              }
            },
            onUnload: function() {
              try {
                uni.setStorageSync("selectedHour", ""), uni.setStorageSync("isFromCalendarPage", "")
              } catch (e) {}
              this.audio.destroy(), getApp().watchRouter()
            },
            onPullDownRefresh: function() {
              this.getInfo(!0)
            },
            methods: {
              setDataInfos: function(e, t) {
                var i = this;
                if (!e) return this.infosUse = !1, void setTimeout((function() {
                  i.$uni.showToast("识别失败，请重新识别或手动填写")
                }), 500);
                this.infosUse = !0, this.usedTouristIdsPopData = this.usedTouristIdsPopData.filter((function(e) {
                  return e.id != i.inputGroup[t].id
                })), this.inputGroup.forEach((function(i, o) {
                  o == t && (i.name = e.name, i.idCard = e.idCarNo, i.telephone = "", i.cardType = 0, i.id = "")
                })), this.$forceUpdate()
              },
              loadPage: function(t) {
                this.initOptions = t, this.requestNum = 1;
                var i = this;
                uni.getSystemInfo({
                  success: function(e) {
                    i.windowHeight = e.windowHeight, i.winWidth = e.windowWidth, i.unit = e.windowWidth / 750
                  }
                }), this._ticketId = t.ticketId, this.shareMemberId = t.shareMemberId || "", this.aggregationItemId = t.aggregationItemId || "", t.templeOpenId && this.setChanSiOpenId(t.templeOpenId), t.selectedDate && (this.selectedDateSpot = t.selectedDate), this.getInfo(), this.telephoneVoList = uni.getStorageSync("telephoneVoList"), uni.removeStorageSync("telephoneVoList"), this.requestNum = 1
              },
              getRefundTag: function(e) {
                if ("条件退" !== e || 2 == this.infoObj.itemUseDesc.dateType && !this.selectedDate) return e;
                if (2 == this.infoObj.itemUseDesc.dateType) {
                  if (this.showHourBox && !this.selectedHour) return e;
                  var t = this.infoObj.refundFeeList,
                    i = "";
                  if (null === t[0].feeType) {
                    if (2 === this.infoObj.itemUseDesc.refundRuleType) {
                      var o = this.infoObj.itemUseDesc.refundLimitHour,
                        n = this.infoObj.itemUseDesc.refundLimitDay,
                        s = this.infoObj.itemUseDesc.refundLimitMinute,
                        r = this.addDate(this.selectedDate, -n);
                      return r = r + " " + (o < 10 ? "0" + o : o) + ":" + (s < 10 ? "0" + s : s) + ":00", this.compareBigDate(r) ? r.slice(0, r.length - 3).replace(" ", "的") + "前免费退" : "当前下单时间不可退"
                    }
                    return 3 === this.infoObj.itemUseDesc.refundRuleType ? this.selectedDate + "的23:59" + "前免费退" : e
                  }
                  if (0 === t[0].timeLimit) i = this.getTag(t[0]);
                  else if (1 === t[0].timeLimit || 2 === t[0].timeLimit || 4 === t[0].timeLimit)
                    for (var u = 1, a = "", c = 0; c < t.length; c++) {
                      var h = t[c],
                        f = this.addDate(this.selectedDate, 1 === h.timeLimit ? -h.day : h.day);
                      if (f = c === t.length - 1 ? a : f + " " + (h.hour < 10 ? "0" + h.hour : h.hour) + ":" + (h.minute < 10 ? "0" + h.minute : h.minute) + ":00", this.compareBigDate(f) || c === t.length - 1) {
                        if (0 !== h.fee && 0 != h.feeType) {
                          i = 3 == u ? a.slice(0, a.length - 3).replace(" ", "的") + "前免费退" : this.getTag(h);
                          break
                        }
                        u = 3, a = f, c === t.length - 1 && (i = "随时退")
                      } else a = f
                    }
                  return i
                }
                if (3 === this.infoObj.itemUseDesc.refundRuleType && null === this.infoObj.refundFeeList[0].feeType) {
                  var l = this.infoObj.itemUseDesc.datePeriodEnd + "23:59";
                  return this.compareBigDate(l) ? l + "前免费退" : "当前下单时间不可退"
                }
                if (2 === this.infoObj.itemUseDesc.refundRuleType && null === this.infoObj.refundFeeList[0].feeType) {
                  var p = this.infoObj.itemUseDesc.refundLimitHour,
                    m = this.infoObj.itemUseDesc.refundLimitDay,
                    g = this.infoObj.itemUseDesc.refundLimitMinute,
                    T = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, -m);
                  return T = T + " " + (p < 10 ? "0" + p : p) + ":" + (g < 10 ? "0" + g : g) + ":00", this.compareBigDate(T) ? T.slice(0, T.length - 3).replace(" ", "的") + "前免费退" : "当前下单时间不可退"
                }
                var b = this.infoObj.refundFeeList,
                  D = "";
                if (0 === b[0].timeLimit) D = this.getTag(b[0]);
                else if (1 === b[0].timeLimit || 2 === b[0].timeLimit || 4 === b[0].timeLimit)
                  for (var y = 1, k = "", C = 0; C < b.length; C++) {
                    var I = b[C],
                      O = "";
                    if (4 === I.timeLimit ? O = d().format("YYYY-MM-DD") : (O = this.infoObj.itemUseDesc.datePeriodEnd, I.timeLimit, I.day), O = this.addDate(O, 1 === I.timeLimit ? -I.day : I.day), O = C === b.length - 1 ? k : O + " " + (I.hour < 10 ? "0" + I.hour : I.hour) + ":" + (I.minute < 10 ? "0" + I.minute : I.minute) + ":00", this.compareBigDate(O) || C === b.length - 1) {
                      if (0 !== I.fee && 0 != I.feeType) {
                        D = 3 == y ? k.replace(" ", "的") + "前免费退" : this.getTag(I);
                        break
                      }
                      y = 3, k = O, C === b.length - 1 && (D = "随时退")
                    } else k = O
                  }
                return D
              },
              getTag: function(e) {
                if (0 === e.fee) return "无手续费";
                if (0 === e.feeType) return "无手续费";
                if (2 === e.feeType) {
                  if (1 == e.feeUnit) return e.fee < 100 ? "当前下单时间退款需手续费" : "当前下单时间不可退";
                  if (2 == e.feeUnit) return "当前下单时间退款需手续费"
                } else {
                  if (1 == e.feeUnit) return e.fee < 100 ? "当前下单时间退款需手续费" : "当前下单时间不可退";
                  if (2 == e.feeUnit) return "当前下单时间退款需手续费"
                }
              },
              getTimeDesc: function(e, t) {
                if (2 !== this.infoObj.itemUseDesc.dateType) {
                  if (3 === this.infoObj.itemUseDesc.refundRuleType && null == e.feeType) {
                    if (this.infoObj.itemUseDesc.datePeriodEnd) return this.infoObj.itemUseDesc.datePeriodEnd + " 23:59之" + (0 === t ? "前（含）" : "后") + "申请退款"
                  } else if (2 === this.infoObj.itemUseDesc.refundRuleType && null == e.feeType) {
                    var i = this.infoObj.itemUseDesc.refundLimitHour,
                      o = this.infoObj.itemUseDesc.refundLimitDay,
                      n = this.infoObj.itemUseDesc.refundLimitMinute;
                    return this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, -o) + " " + (i < 10 ? "0" + i : i) + ":" + (n < 10 ? "0" + n : n) + "之" + (0 === t ? "前（含）" : "后") + "申请退款"
                  }
                  if (0 == e.timeLimit) return "购买后申请退款";
                  if (1 == e.timeLimit) {
                    var s = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, -e.day);
                    return "".concat(s, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                  }
                  if (2 == e.timeLimit) {
                    var r = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, e.day);
                    return "".concat(r, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                  }
                  if (4 == e.timeLimit) {
                    var u = d().format("YYYY-MM-DD"),
                      a = this.addDate(u, e.day);
                    return "".concat(a, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                  }
                  if (null == e.timeLimit) {
                    var c = "";
                    if (1 == (e = this.ydxz.refundFeeList[t - 1]).timeLimit) c = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, -e.day);
                    else if (2 == e.timeLimit) c = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, e.day);
                    else if (4 == e.timeLimit) {
                      var h = d().format("YYYY-MM-DD"),
                        f = this.addDate(h, e.day);
                      return "".concat(f, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之后申请退款")
                    }
                    return "".concat(c, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之后申请退款")
                  }
                  return e.timeDesc || ""
                }
                if (!this.selectedDate) return e.timeDesc || "";
                if (3 === this.infoObj.itemUseDesc.refundRuleType && null == e.feeType) return this.selectedDate + " 23:59之" + (0 === t ? "前（含）" : "后") + "申请退款";
                if (2 === this.infoObj.itemUseDesc.refundRuleType && null == e.feeType) {
                  var l = this.infoObj.itemUseDesc.refundLimitHour,
                    p = this.infoObj.itemUseDesc.refundLimitDay,
                    m = this.infoObj.itemUseDesc.refundLimitMinute;
                  return this.addDate(this.selectedDate, -p) + " " + (l < 10 ? "0" + l : l) + ":" + (m < 10 ? "0" + m : m) + "之" + (0 === t ? "前（含）" : "后") + "申请退款"
                }
                if (0 == e.timeLimit) return "购买后申请退款";
                if (1 == e.timeLimit) {
                  var g = this.addDate(this.selectedDate, -e.day);
                  return "".concat(g, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                }
                if (2 == e.timeLimit || 4 == e.timeLimit) {
                  var T = this.addDate(this.selectedDate, e.day);
                  return "".concat(T, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                }
                if (null == e.timeLimit) {
                  var b = "";
                  return 1 == (e = this.ydxz.refundFeeList[t - 1]).timeLimit ? b = this.addDate(this.selectedDate, -e.day) : 2 != e.timeLimit && 4 != e.timeLimit || (b = this.addDate(this.selectedDate, e.day)), "".concat(b, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之后申请退款")
                }
              },
              compareBigDate: function(e) {
                return new Date(e) > new Date
              },
              addDate: function(e, t) {
                var i = new Date(e);
                i.setDate(i.getDate() + t);
                var o = i.getMonth() + 1,
                  n = i.getDate();
                return o < 10 && (o = "0" + o), n < 10 && (n = "0" + n), i.getFullYear() + "-" + o + "-" + n
              },
              closePassenger: function() {
                this.modelType ? this.modelType = 0 : this.showInsure = !1
              },
              addInsurePeople: function() {
                this.$navigateTo({
                  url: "/subPage/pages/addPassenger/addPassenger?type=ins&codes=0"
                })
              },
              computedInsureNum: function() {
                return this.insurePeopleList.filter((function(e) {
                  return e.check
                }))
              },
              computedInsureMoney: function() {
                var e = this,
                  t = 0;
                return this.insureList && this.insureList.length > 0 && this.insureList.map((function(i) {
                  i.isInsurance && (t = e.$util.multiply(1 * e.ticketNum, 1 * i.premium))
                })), t
              },
              changeUser: function(e, t) {
                var i = this;
                if (0 == e.cardType) {
                  var o = this.insNum;
                  this.insurePeopleList.forEach((function(e, n) {
                    1 == i.ticketNum ? e.check = n == t && !e.check : n == t && (o < i.ticketNum || e.check) && (e.check = !e.check)
                  })), this.saveData()
                } else this.$uni.showToast("投保证件类型仅支持身份证")
              },
              goDetail: function(t, i, o) {
                var n = "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(i.insuranceProductDescUrl) + "&insuranceId=".concat(i.insuranceId);
                if (this.insureIndex = t, !0 === i.isInsurance) return "check" == o && this.cancelInsure(i.insuranceId), void("detail" == o && uni.navigateTo({
                  url: n
                }));
                uni.navigateTo({
                  url: n
                })
              },
              editInsure: function(e) {
                this.$navigateTo({
                  url: "/subPage/pages/editPassenger/editPassenger?touristId=".concat(e.id, "&&codes=0")
                })
              },
              delUser: function(e, t, i) {
                var o = this;
                i.check = !1, this.insureList[e].insuranceForm.forEach((function(i, n) {
                  t == n && o.insureList[e].insuranceForm.splice(n, 1)
                }))
              },
              handlerChange: function(e, t, i, o) {
                if (JSON.parse(JSON.stringify(i)), 0 == t) {
                  var n = e.detail.value;
                  this.$util.checkId(n, t).code && this.getIdList()
                }
              },
              getIdList: function() {
                if (0 != this.infoObj.itemUseDesc.touristInfoType) {
                  var e = [];
                  for (var t in this.inputGroup) {
                    var i = this.inputGroup[t];
                    if (this.haveToId) this.$util.checkId(i.idCard, i.cardType).code && e.push(i.idCard)
                  }
                  var o = Array.from(new Set(e));
                  2 == this.infoObj.itemUseDesc.touristInfoType && this.haveToId && o.length < e.length ? this.$uni.showToast("证件号不能重复") : 0 == this.infoObj.notQueryCouponFlag ? this.getBestCoupon(o) : this.cancelCoupon()
                } else 0 == this.infoObj.notQueryCouponFlag ? this.getBestCoupon([]) : this.cancelCoupon()
              },
              openRedBox: function() {
                var e = this;
                this.audio.stop(), this.audio.loop = !1, this.animationType = 1, this.audio.src = this.newOpen, this.audio.play(), this.receiveGiftBag(), setTimeout((function() {
                  e.animationType = 2
                }), 1e3), setTimeout((function() {
                  e.animationType = 3
                }), 2e3), setTimeout((function() {
                  e.showGiftBag = !0
                }), 3200), setTimeout((function() {
                  e.animationType = 4
                }), 3500), setTimeout((function() {
                  e.showPacketBox = !1
                }), 4500)
              },
              closeBox: function() {
                0 == this.animationType && (this.showPacketBox = !1, this.audio.stop(), this.audio.destroy())
              },
              showBookTip: function() {
                var t = this;
                this.isShowBookTip = !0, this.$nextTick((function() {
                  setTimeout((function() {
                    var i = uni.createSelectorQuery();
                    i.select("#ytxz-box-title").boundingClientRect(), i.exec((function(e) {
                      t.bookTipHeight = t.windowHeight / t.winWidth * 750 * .7 - 230 - e[0].height / t.unit
                    }))
                  }), 100)
                }))
              },
              goBack: function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  o = getCurrentPages(),
                  n = o[o.length - 1].route;
                i || -1 == n.indexOf("ticketFillOrder") || uni.showModal({
                  title: "提示",
                  content: 1 == this.infoObj.scenicType ? "当前人数过多，请返回重试" : t,
                  showCancel: !1,
                  confirmText: "确定",
                  confirmColor: "#333",
                  success: function(t) {
                    uni.navigateBack({
                      delta: 1
                    })
                  }
                })
              },
              toFixedNumAmount: function() {
                var e = new r.default(this.priceAmount).minus(this.giftCardAmount).toNumber(),
                  t = this.computedInsureMoney();
                return t > 0 && (e = this.$util.add(e, t)), this.toFixedNum(e)
              },
              toFixedNum: function(e) {
                if (!e) return 0;
                var t = e.toString().split(".");
                return t[1] && t[1].length > 2 ? e.toFixed(2) : e
              },
              getInfo: function() {
                var t = this,
                  i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                  n = this;
                i || uni.showLoading({
                  title: "加载中"
                }), this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item/getTicketDetailForOrder", {
                  itemId: this._ticketId
                }).then((function(s) {
                  if (t.notQueryCouponFlag = s.data.notQueryCouponFlag, i || uni.hideLoading(), 1 === s.code) {
                    var r = s.data;
                    if (t.realCardTypeList = [], t.infoObj = r, 1 == t.infoObj.studentValidateFlag && (t.studentCheckCode ? t.checkStudentIdentity(1) : t.onShowStudentVerifyDialog()), 0 == t.infoObj.notQueryCouponFlag && 1 != t.infoObj.scenicType && t.getGiftCard(), 0 == r.itemUseDesc.touristInfoType) t.realCardTypeList = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                    else r.itemUseDesc.realCardTypeCodes.split(",").forEach((function(e) {
                      t.realCardTypeList.push(Number(e))
                    })), t.realCardTypeList = t.realCardTypeList.length > 0 ? t.realCardTypeList : [0];
                    if (0 !== t.infoObj.ticketPrices.length) {
                      if (t.disabledSubmitBtn = !1, t.ydxz = r, i || (t.ticketNum = r.itemUseDesc.minBookNum, t.initInputGroup(), r.useNotes && (t.showNotice = !0), r.itemInsuranceList && r.itemInsuranceList.length > 0 && (t.insureList = r.itemInsuranceList, t.insureList.forEach((function(e) {
                          t.$set(e, "isInsurance", !1), t.$set(e, "insuranceForm", [])
                        })))), 2 == t.infoObj.itemUseDesc.dateType) {
                        t.showHourBox = 2 == t.infoObj.itemUseDesc.stockLimit, n.timeData = n.timeDataFormat();
                        var u = [],
                          a = 0,
                          c = "";
                        n.timeData.forEach((function(e, i) {
                          e.disabled && 2 == t.infoObj.itemUseDesc.dateType || (t.selectedDateSpot == e.date && (c = e), u.push(e), a = i)
                        })), u && 1 == u.length ? (n.selectBookDateInPage(n.timeData[a]), n.scrollToDate = "date-" + n.timeData[a].date) : u.length > 1 && c && (n.selectBookDateInPage(c), n.scrollToDate = "date-" + c.date), setTimeout((function() {
                          i && n.refreshNum(t.timeData)
                        }), 100)
                      }
                      1 == t.infoObj.itemUseDesc.dateType && (t.showTimeTag = !0, t.infoObj.itemUseDesc.datePeriodBegin = t.infoObj.itemUseDesc.datePeriodBegin.slice(0, 10), t.infoObj.itemUseDesc.datePeriodEnd = t.infoObj.itemUseDesc.datePeriodEnd.slice(0, 10), t.infoObj.itemUseDesc.dateCanUse = t.getWeekNotUse(t.infoObj.itemUseDesc.dateCanUse), t.ticketPrice = t.infoObj.ticketPrices[0].sellPrice, t.calcPriceAmount()), i && uni.stopPullDownRefresh()
                    } else t.$uni.showToast("暂无可".concat(0 == n.infoObj.skuItemType ? "订" : "约", "日期"))
                  } else t.goBack(s.msg, i)
                })).catch((function(o) {
                  uni.hideLoading(), t.goBack("网络繁忙，请返回重试", i), t.disabledSubmitBtn = !1, uni.stopPullDownRefresh()
                }))
              },
              refreshNum: function(e) {
                var t = this,
                  i = e.find((function(e) {
                    return e.date == t.selectedDate
                  }));
                i && this.selectBookDateInPage(i)
              },
              timeDataFormat: function() {
                var e = this,
                  t = this.infoObj,
                  i = (this.showHourBox, this.infoObj.skuSellOutInfo ? this.infoObj.skuSellOutInfo : 0 == this.infoObj.skuItemType ? "已满" : "约满");
                return this.infoObj.ticketPrices.map((function(o) {
                  var n = "";
                  e.selectedDate == o.date && e.getHourData(o.itemTicketStocks);
                  var s = o.sellPrice && o.sellPrice > 0 ? "¥" + o.sellPrice : "免费";
                  if (n = t.skuInStockInfo ? t.skuInStockInfo : o.surplusStock > 50 ? s : "余" + o.surplusStock, 0 === o.surplusStock) n = i, o.disabled = !0;
                  else if (-1 === o.surplusStock) n = t.skuInStockInfo || s;
                  else if (o.surplusStock > 0)
                    if (e.showHourBox) {
                      e.clearDiscount(o) > 0 ? n = t.skuInStockInfo || s : (o.disabled = !0, n = i)
                    } else if (t.itemUseDesc.stockLessFlag) {
                    var r = "1" == t.itemUseDesc.stockLessShowType ? "余" + o.surplusStock : t.itemUseDesc.stockLessShowDesc;
                    n = t.skuInStockInfo || (o.surplusStock >= t.itemUseDesc.stockLessNum ? s : r)
                  } else n = t.skuInStockInfo || (o.surplusStock > 50 ? s : "余" + o.surplusStock);
                  return o.dateShort = o.date.slice(5), o.week = e.getWeekOfDate(o.date), o.diy = n, o
                }))
              },
              clearDiscount: function(e) {
                var t = (new Date).getTime();
                return e.surplusStock = 0, e.itemTicketStocks.forEach((function(i) {
                  new Date((i.date + " " + i.endTime + ":00").replace(/-/g, "/")).getTime() > t && (e.surplusStock += i.surplusStock)
                })), e.surplusStock
              },
              getWeekOfDate: function(e) {
                e = e.replace(/-/g, "/");
                var t = c.format(new Date, "yyyy/MM/dd"),
                  i = c.format(c.addDay(new Date, 1), "yyyy/MM/dd");
                return e == t ? "今天" : e == i ? "明天" : "周" + "日一二三四五六".charAt(new Date(e).getDay())
              },
              brText: function(e) {
                if (e) {
                  var t = e.split("#**#");
                  return t.pop().split("</p>").forEach((function(e, i) {
                    if (e) {
                      var o = (e = e.split("<p>").join("")).match(/\<.*?\>/g),
                        n = e.match(/[\r\n]/g),
                        s = o || n;
                      s && s[0] && s.forEach((function(t) {
                        e = e.replaceAll(t, "")
                      })), t.push(e)
                    }
                  })), t
                }
              },
              selectBookDateInPage: function(t) {
                t.disabled && 2 == this.infoObj.itemUseDesc.dateType || (this.selectedDate = t.date, this.showTimeTag = "今天" == this.getWeekOfDate(this.selectedDate), this.showHourBox ? (this.getHourData(t.itemTicketStocks), uni.setStorageSync("selectedHour", t), this.selectedHour = "", this.departTimeSlot = "", this.ticketPrice = 0, this.calcPriceAmount()) : (uni.setStorageSync("selectedHour", t), this.ticketPrice = t.sellPrice, this.calcPriceAmount()), 1 == this.infoObj.isSpecial && (this.startHotelDate = "", this.getItemHotelStateByTicketDate()))
              },
              addInsure: function() {
                this.showInsure = !0
              },
              idCarNoFilter: function(e) {
                if (e) {
                  var t = e.toString();
                  return t.substring(0, 1) + "****************" + t.substring(t.length - 1, t.length)
                }
              },
              phoneFilter: function(e) {
                if (e) {
                  var t = e.toString();
                  return t.replace(t.substring(3, 7), "****")
                }
              },
              getItemHotelStateByTicketDate: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item/getItemHotelStateByTicketDate", {
                  itemId: this._ticketId,
                  date: this.selectedDate
                }).then((function(t) {
                  if (1 === t.code) {
                    var i = t.data;
                    0 !== i.length ? (i.forEach((function(e) {
                      e.date = e.date, e.dateEnd = c.format(c.addDayStr(e.date, 1), "yyyy-MM-dd")
                    })), e.hotelDate = i) : e.$uni.showToast("暂无可".concat(0 == that.infoObj.skuItemType ? "订" : "约", "日期"))
                  } else e.$uni.showToast(t.msg)
                }))
              },
              chooseHotel: function(e) {
                1 == e.state && (this.startHotelDate = e.date, this.endHotelDate = e.dateEnd)
              },
              getHourData: function(e) {
                var t = (new Date).getTime(),
                  i = this.infoObj;
                this.hourArr = [], e.forEach((function(e) {
                  new Date((e.date + " " + e.endTime + ":00").replace(/-/g, "/")).getTime() < t && (e.timePassed = !0, e.disabled = !0);
                  var o = "";
                  0 === e.surplusStock ? (e.disabled = !0, o = "已满") : o = i.itemUseDesc.stockLessFlag ? e.surplusStock >= i.itemUseDesc.stockLessNum || -1 == e.surplusStock ? "有票" : "1" == i.itemUseDesc.stockLessShowType ? "余" + e.surplusStock : i.itemUseDesc.stockLessShowDesc.substring(0, 6) : e.surplusStock > 200 || -1 == e.surplusStock ? "有票" : "余" + e.surplusStock, e.surplusStockStr = o
                })), this.hourArr = e
              },
              getGiftCard: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftCard/getCreateOrderCanUseGiftCard", {
                  type: 1
                }).then((function(t) {
                  1 === t.code ? e.giftCardArr = t.data || [] : e.$uni.showToast(data.msg)
                }))
              },
              selectHourFn: function(t) {
                0 !== t.surplusStock && !0 !== t.disabled && (t.time = this.departTimeSlot = t.startTime + "-" + t.endTime, this.selectedHour = t, uni.setStorageSync("selectedHour", this.selectedHour), this.ticketPrice = this.selectedHour.sellPrice || 0, this.calcPriceAmount())
              },
              jumpCalendarPage: function() {
                this.$navigateTo({
                  url: "/pages/calendarPage/calendarPage?ticketId=" + this._ticketId + "&scenicType=" + this.infoObj.scenicType
                })
              },
              calcPriceAmount: function() {
                "1518513098992918529" != this._ticketId && this.getIdList()
              },
              getBestCoupon: function(e, t) {
                var i = this;
                if (1 != this.infoObj.scenicType) {
                  var o = new r.default(this.ticketPrice).times(this.ticketNum).toNumber(),
                    n = {
                      itemId: this._ticketId,
                      price: o,
                      touristInfoType: this.infoObj.itemUseDesc.touristInfoType,
                      useDateStr: this.selectedDate || "",
                      orderNum: this.ticketNum,
                      idCardList: e
                    };
                  0 == n.touristInfoType && (n.idCardList = []), this.discountAmount = "", this.userCouponId = [], this.couponArr = [], 0 == this.notQueryCouponFlag ? this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/coupon/getBestCoupon", n).then((function(e) {
                    if (1 === e.code) {
                      var n = e.data,
                        s = o;
                      if ("research" == t && (i.userCouponId = []), n && n[0]) {
                        if (i.couponArr = n, i.supCouponArr = [], i.priceAmount = o, n.forEach((function(e) {
                            if (2 === e.superpositionType || 3 === e.superpositionType) {
                              var t = a(a({}, e), {}, {
                                isSelected: !1,
                                useDeductionNum: 0
                              });
                              i.supCouponArr.push(t)
                            }
                          })), i.singleCouponArr = n.filter((function(e) {
                            return 1 === e.superpositionType
                          })), 1 === n[0].superpositionType) {
                          i.coupondk = [n[0]], i.userCouponId = [n[0].userCouponId];
                          var u = new r.default(s);
                          new r.default(i.ticketPrice), 3 == n[0].type ? (i.discountAmount = n[0].realQuota, i.priceAmount = u.minus(i.discountAmount).toNumber().toFixed(2)) : (i.discountAmount = n[0].quota, i.priceAmount = u.minus(n[0].quota).toNumber().toFixed(2))
                        } else {
                          i.discountAmount = 0, i.coupondk = [];
                          var c = 0;
                          do {
                            c = i.stackMoreCoupons(c)
                          } while (-1 !== c)
                        }
                        i.setGiftCardPrice()
                      } else i.discountAmount = 0, i.priceAmount = o, i.setGiftCardPrice()
                    } else i.$uni.showToast(e.msg)
                  })) : (this.discountAmount = 0, this.priceAmount = o, this.setGiftCardPrice())
                }
              },
              stackMoreCoupons: function(e) {
                this.coupondk.push(this.supCouponArr[e]), this.userCouponId.push(this.supCouponArr[e].userCouponId), this.supCouponArr[e].isSelected = !0, this.allDeductionNum = this.supCouponArr.reduce((function(e, t) {
                  return t.isSelected ? e + t.deductionNum : e
                }), 0);
                var t = new r.default(this.ticketPrice),
                  i = new r.default(t.times(this.ticketNum).toNumber());
                return this.allDeductionNum < this.ticketNum ? (this.supCouponArr[e].useDeductionNum = this.supCouponArr[e].deductionNum, this.discountAmount += +t.times(this.supCouponArr[e].useDeductionNum).toNumber().toFixed(2), this.priceAmount = +i.minus(this.discountAmount).toNumber().toFixed(2), this.supCouponArr.length - 1 > e ? e + 1 : -1) : (this.supCouponArr[e].useDeductionNum = this.ticketNum - this.allDeductionNum + this.supCouponArr[e].deductionNum, this.discountAmount += +t.times(this.supCouponArr[e].useDeductionNum).toNumber().toFixed(2), this.priceAmount = +i.minus(this.discountAmount).toNumber().toFixed(2), -1)
              },
              checkCoupon: function(e) {
                var t = this,
                  i = new r.default(this.ticketPrice),
                  o = (new r.default(this.priceAmount), new r.default(this.discountAmount)),
                  n = i.times(this.ticketNum);
                if (-1 === this.userCouponId[0] && (this.coupondk = [], this.userCouponId = []), this.userCouponId.includes(e.userCouponId)) 1 === this.userCouponId.length ? (1 !== this.coupondk[0].superpositionType && this.resetSupCouponArr(), this.coupondk = [], this.userCouponId = [], this.discountAmount = 0, this.priceAmount = this.toFixedNum(n)) : (this.coupondk = this.coupondk.filter((function(t) {
                  return t.userCouponId !== e.userCouponId
                })), this.userCouponId = this.userCouponId.filter((function(t) {
                  return t !== e.userCouponId
                })), this.supCouponArr.forEach((function(s) {
                  if (s.userCouponId === e.userCouponId) {
                    var r = i.times(s.useDeductionNum).toNumber();
                    t.discountAmount = +o.minus(r).toNumber().toFixed(2), t.priceAmount = +n.minus(t.discountAmount).toNumber().toFixed(2), t.allDeductionNum -= s.deductionNum, s.isSelected = 0, s.useDeductionNum = 0
                  }
                })), this.resetUseDeductionNum());
                else if (0 === this.userCouponId.length)
                  if (this.coupondk = [e], this.userCouponId = [e.userCouponId], 1 === e.superpositionType)
                    if (3 == e.type) {
                      this.discountAmount = e.realQuota;
                      var s = n.minus(e.realQuota).toNumber();
                      this.priceAmount = this.toFixedNum(s)
                    } else {
                      this.discountAmount = e.quota;
                      var u = n.minus(e.quota).toNumber();
                      this.priceAmount = this.toFixedNum(u)
                    }
                else {
                  var a = this.supCouponArr.findIndex((function(t) {
                    return t.userCouponId === e.userCouponId
                  }));
                  this.stackMoreCoupons(a)
                } else if (1 === e.superpositionType)
                  if (1 !== this.coupondk[0].superpositionType && this.resetSupCouponArr(), this.coupondk = [e], this.userCouponId = [e.userCouponId], 3 == e.type) {
                    this.discountAmount = e.realQuota;
                    var c = n.minus(e.realQuota).toNumber();
                    this.priceAmount = this.toFixedNum(c)
                  } else {
                    this.discountAmount = e.quota;
                    var d = n.minus(e.quota).toNumber();
                    this.priceAmount = this.toFixedNum(d)
                  }
                else if (2 === e.superpositionType || 3 === e.superpositionType) {
                  (1 === this.coupondk[0].superpositionType || 1 !== this.coupondk[0].superpositionType && this.allDeductionNum >= this.ticketNum) && (this.coupondk = [], this.userCouponId = [], this.discountAmount = 0, this.priceAmount = this.toFixedNum(n), this.resetSupCouponArr());
                  var h = this.supCouponArr.findIndex((function(t) {
                    return t.userCouponId === e.userCouponId
                  }));
                  this.stackMoreCoupons(h)
                }
                this.setGiftCardPrice()
              },
              resetUseDeductionNum: function() {
                var e = this;
                this.allDeductionNum = 0;
                var t = 0;
                this.supCouponArr.forEach((function(i) {
                  if (i.useDeductionNum = 0, i.isSelected && e.allDeductionNum < e.ticketNum) {
                    var o = e.ticketNum - e.allDeductionNum;
                    i.useDeductionNum = o <= i.deductionNum ? o : i.deductionNum, t += i.useDeductionNum, e.allDeductionNum += i.deductionNum
                  }
                }));
                var i = new r.default(this.ticketPrice),
                  o = new r.default(i.times(this.ticketNum).toNumber());
                this.discountAmount = +i.times(t).toNumber().toFixed(2), this.priceAmount = +o.minus(this.discountAmount).toNumber().toFixed(2)
              },
              resetSupCouponArr: function() {
                this.supCouponArr.forEach((function(e) {
                  e.isSelected = 0, e.useDeductionNum = 0
                })), this.allDeductionNum = 0
              },
              cancelCoupon: function() {
                this.discountAmount = 0;
                var e = new r.default(this.ticketPrice).times(this.ticketNum).toNumber();
                this.priceAmount = this.toFixedNum(e), this.setGiftCardPrice(), this.userCouponId = [-1], this.coupondk = [], this.resetSupCouponArr(), this.showCoupon = !1
              },
              addNum: function() {
                var t;
                if (t = 0 == this.infoObj.itemUseDesc.maxBookNum ? 99999 : this.infoObj.itemUseDesc.maxBookNum, 1 == this.infoObj.itemUseDesc.dateType && 1 == this.infoObj.itemUseDesc.stockLimitType && (t = Math.min(t, this.infoObj.ticketPrices[0].surplusStock)), 2 == this.infoObj.itemUseDesc.dateType) {
                  if (!uni.getStorageSync("selectedHour")) return void(this.showHourBox ? this.$uni.showToast("请先选择时段") : this.$uni.showToast("请先选择日期"));
                  uni.getStorageSync("selectedHour") && -1 != uni.getStorageSync("selectedHour").surplusStock && (t = Math.min(t, uni.getStorageSync("selectedHour").surplusStock))
                }
                this.ticketNum >= t ? this.$uni.showToast("最多可选择".concat(t, "张")) : (this.ticketNum = this.ticketNum + 1, this.computedInsureMoney(), this.addAndReduceInputGroup("add"))
              },
              reduceNum: function() {
                var t = this;
                uni.getStorageSync("selectedHour") || 2 != this.infoObj.itemUseDesc.dateType ? this.ticketNum <= this.infoObj.itemUseDesc.minBookNum ? this.$uni.showToast("最少需选择".concat(this.infoObj.itemUseDesc.minBookNum, "张")) : (this.ticketNum = this.ticketNum - 1, this.insureList.forEach((function(e) {
                  if (e.isInsurance && e.insuranceForm.length > t.ticketNum) {
                    e.insuranceForm[e.insuranceForm.length - 1].check = !1;
                    var i = e.insuranceForm.pop(),
                      o = -1;
                    t.insurePeopleList.forEach((function(e, t) {
                      i.id == e.id && (o = t)
                    })), o > 0 && (t.insurePeopleList[o].check = !1)
                  }
                })), this.computedInsureMoney(), this.addAndReduceInputGroup("reduce")) : this.showHourBox ? this.$uni.showToast("请先选择时段") : this.$uni.showToast("请先选择日期")
              },
              initInputGroup: function() {
                if (0 == this.infoObj.itemUseDesc.touristInfoType) this.inputGroup = [{
                  name: "",
                  telephone: ""
                }], this.haveToId = !1;
                else if (this.haveToId = !0, this.infoObj.itemUseDesc.minBookNum > 1) {
                  for (var e = [], t = 0; t < this.infoObj.itemUseDesc.minBookNum; t++) e.push({
                    name: "",
                    telephone: "",
                    idCard: "",
                    cardType: this.realCardTypeList[0]
                  });
                  this.inputGroup = e
                } else this.inputGroup = [{
                  name: "",
                  telephone: "",
                  idCard: "",
                  cardType: this.realCardTypeList[0]
                }];
                this.getCommonUsedTouristList("onLoad")
              },
              addAndReduceInputGroup: function(e) {
                if (2 == this.infoObj.itemUseDesc.touristInfoType) {
                  if ("add" == e && this.inputGroup.push({
                      name: "",
                      telephone: "",
                      idCard: "",
                      cardType: this.realCardTypeList[0]
                    }), "reduce" == e) {
                    var t = this.inputGroup.pop();
                    t.id && (this.usedTouristIdsPopData = this.usedTouristIdsPopData.filter((function(e) {
                      return e.id != t.id
                    })))
                  }
                  this.calcPriceAmount()
                } else this.calcPriceAmount()
              },
              getWeekNotUse: function(e) {
                var t = [],
                  i = e.split(","),
                  o = [1, 2, 3, 4, 5, 6, 7];
                for (var n in o) {
                  var s = !0;
                  for (var r in i)
                    if (o[n] == i[r]) {
                      s = !1;
                      break
                    } s && t.push("周" + "一一二三四五六日".charAt(o[n]))
                }
                return t.join(",")
              },
              chooseCoupon: function() {
                this.couponArr[0] && (this.showCoupon = !0)
              },
              closeNoStock: function() {
                this.showNoStock = !1, this.getInfo(!0)
              },
              submit: function() {
                if (1 == this.infoObj.studentValidateFlag) {
                  if (-1 == this.isStudent) return void this.onShowStudentVerifyDialog();
                  if (0 == this.isStudent) return void(this.showStudentPop = !0)
                }
                var e = this.verify();
                e && this.createOrder(e)
              },
              verify: function() {
                if (this.inputGroup && this.inputGroup[0]) {
                  var t = {
                    itemId: this._ticketId,
                    itemName: this.infoObj.itemTitle,
                    price: this.ticketPrice,
                    quantity: this.ticketNum
                  };
                  if (this.aggregationItemId && (t.aggregationItemId = this.aggregationItemId), (this.shareMemberId || uni.getStorageSync("peopleShareId")) && (t.shareMemberId = this.shareMemberId || uni.getStorageSync("peopleShareId")), 1 == this.infoObj.seckillActivity && (t.seckillItemId = this.infoObj.seckillItemId), t.orderAmount = this.priceAmount, this.discountAmount > 0)
                    if (1 === this.coupondk[0].superpositionType) {
                      var i = {
                        userCouponId: this.userCouponId[0]
                      };
                      this.coupondk[0] && 3 == this.coupondk[0].type && (i.couponDeductionNum = this.coupondk[0].deductionNum), t.orderCouponList = [i]
                    } else {
                      var o = [];
                      this.supCouponArr.forEach((function(e) {
                        e.isSelected && o.push({
                          couponDeductionNum: e.useDeductionNum,
                          userCouponId: e.userCouponId
                        })
                      })), t.orderCouponList = o
                    } if (this.giftCardAmount > 0 && this.activeGiftCard[0]) {
                    t.giftCardIdList = this.activeGiftCard, t.giftCardAmount = this.giftCardAmount;
                    var n = new r.default(this.priceAmount);
                    t.orderAmount = n.minus(this.giftCardAmount).toNumber()
                  }
                  if (t.ticketUseDate = this.selectedDate, 2 != this.infoObj.itemUseDesc.dateType || 2 != this.infoObj.itemUseDesc.stockLimit || t.ticketUseDate && this.departTimeSlot)
                    if (this.departTimeSlot && (t.ticketUseStartTime = this.departTimeSlot.split("-")[0], t.ticketUseEndTime = this.departTimeSlot.split("-")[1]), 2 != this.infoObj.itemUseDesc.dateType || 2 === this.infoObj.itemUseDesc.stockLimit || t.ticketUseDate) {
                      if (1 != this.infoObj.isSpecial || this.endHotelDate && this.startHotelDate) {
                        if (1 == this.infoObj.isSpecial && (t.startHotelDate = this.startHotelDate, t.endHotelDate = this.endHotelDate), 2 == this.infoObj.isSpecial) {
                          var s = !1;
                          if (this.infoObj.projectInfoDtoList.forEach((function(e) {
                              e.projectText || (s = !0)
                            })), s) return void this.$uni.showToast("请完善详细信息");
                          t.projectInfoDtoList = this.infoObj.projectInfoDtoList
                        }
                        if (0 == this.infoObj.itemUseDesc.touristInfoType) {
                          var u = this.$util.checkName(this.inputGroup[0].name);
                          if (!u.code) return void this.$uni.showToast(u.msg);
                          if (!(u = this.$util.checkPhone(this.inputGroup[0].telephone)).code) return void this.$uni.showToast(u.msg)
                        } else {
                          var a = [],
                            c = [];
                          for (var d in this.inputGroup) {
                            var h = this.inputGroup[d],
                              f = this.$util.checkName(h.name);
                            if (!f.code) return void this.$uni.showToast(f.msg);
                            if (0 == d && !(f = this.$util.checkPhone(h.telephone)).code) return void this.$uni.showToast(f.msg);
                            this.haveToId && (a.push(h.idCard), (f = this.$util.checkId(h.idCard, h.cardType)).code || c.push(h.idCard))
                          }
                          var l = Array.from(new Set(c));
                          if (this.haveToId && l.length > 0) return this.errIdCard = l, void this.$uni.showToast("证件号格式错误");
                          var p = Array.from(new Set(a));
                          if (this.haveToId && p.length < a.length) return void this.$uni.showToast("证件号不能重复")
                        }
                        return console.log(this.studentCheckCode), t.orderPeopleList = this.inputGroup, t.studentCheckCode = this.studentCheckCode, t.openId = this.openId, t
                      }
                      this.$uni.showToast("请选择酒店住离日期")
                    } else this.$uni.showToast("请选择使用日期");
                  else this.$uni.showToast("请选择使用日期和时段")
                } else this.$uni.showToast("请输入姓名")
              },
              closeLineing: function(e) {
                this.lineing = !1, this.hasTimeOut = !1, this.repeatCreateOrder && (clearInterval(this.repeatCreateOrder), clearInterval(this.repeatCreateOrder2)), this.repeatCreateOrder = null, this.repeatCreateOrder2 = null, this.disabledSubmitBtn = !1, e || this.getInfo(!0)
              },
              createOrder: function(t) {
                var i = this;
                if (!this.disabledSubmitBtn || this.lineing) {
                  var o = this,
                    n = {
                      insuranceId: "",
                      personList: []
                    };
                  if (o.insureList && o.insureList.length > 0) {
                    var s = o.insureList.filter((function(e) {
                      return e.isInsurance
                    }));
                    if (s.length > 0 && s[0].insuranceForm.length < this.ticketNum) return o.$uni.showToast("请填写投保人信息");
                    s.length > 0 && (n.insuranceId = s[0].insuranceId, s[0].insuranceForm.forEach((function(e) {
                      e.check && n.personList.push({
                        insurancePersonCardNo: e.idCarNo,
                        insurancePersonMobile: e.phone,
                        insurancePersonName: e.name
                      })
                    })), t.orderAmount = this.$util.add(1 * t.orderAmount, 1 * this.computedInsureMoney()), t.orderInsuranceCreateDTO = n)
                  }!o.hasTimeOut && o.timeOutInit(), this.disabledSubmitBtn = !0, !this.lineing && uni.showLoading({
                    title: "预".concat(0 == o.infoObj.skuItemType ? "订" : "约", "中...")
                  });
                  var u = 3 == this.infoObj.isSpecial ? "order/app/v1/order/addTicketOrder" : "order/app/v1/order/simpleTicketCreateOrder";
                  1 == this.infoObj.scenicType && (u = "order/app/v1/order/templeTicketCreateOrder"), this.$uniApi.dataRequestNoLoading("POST", u, t, !1).then((function(n) {
                    if (uni.hideLoading(), 18031 == n.code) return i.closeLineing(!0), i.disabledSubmitBtn = !1, o.errIdCard = n.data, void setTimeout((function() {
                      o.$uni.showToast(n.msg)
                    }), 300);
                    if (18018 == n.code || 18019 == n.code || 18020 == n.code) {
                      i.disabledSubmitBtn = !1;
                      var s = new r.default(i.ticketPrice).times(i.ticketNum).toNumber();
                      return i.priceAmount = s, i.discountAmount = 0, void i.openPopup()
                    }
                    if (n.msg.includes("火爆") || n.msg.includes("频繁")) return o.lineing = !0, void(o.repeatCreateOrder = setTimeout((function() {
                      o.createOrder(t)
                    }), 2e3));
                    if (18022 == n.code || n.msg.includes("库存不足") || 18026 == n.code) return o.closeLineing(), i.selectedHour = "", uni.setStorageSync("selectedHour", ""), i.departTimeSlot = "", i.ticketPrice = 0, i.priceAmount = 0, i.disabledSubmitBtn = !1, void(i.showNoStock = !0);
                    if (1 == n.code) {
                      if (i._orderId = n.data, i.closeLineing(!0), i.isFree, 0 == t.orderAmount) return 2 == i.infoObj.itemUseDesc.dateType ? i.bookInfoObj.time = "".concat(i.selectedDate, " ").concat(i.departTimeSlot || "") : i.infoObj.itemUseDesc.datePeriodBegin == i.infoObj.itemUseDesc.datePeriodEnd ? i.bookInfoObj.time = "".concat(i.infoObj.itemUseDesc.datePeriodBegin, "有效") : i.bookInfoObj.time = "".concat(i.infoObj.itemUseDesc.datePeriodBegin, "至").concat(i.infoObj.itemUseDesc.datePeriodEnd, "有效"), i.bookInfoObj.orderSn = i._orderId, i.isHideSuccessMask = !0, void i.$store.dispatch("wxInForm", ["gDlb_Lmm5UjBhe5jnstiOCTi4XfN2KOq9056Be9lDSE"]).then((function(e) {}));
                      uni.redirectTo({
                        url: "/subPack/pages/ticketPay/ticketPay?orderId=" + i._orderId
                      })
                    } else {
                      i.closeLineing(!0), i.disabledSubmitBtn = !1;
                      var u = n.msg.length;
                      setTimeout((function() {
                        u < 20 ? o.$uni.showToast(n.msg) : uni.showModal({
                          title: "提示",
                          content: n.msg,
                          showCancel: !1
                        })
                      }), 300)
                    }
                  })).catch((function(t) {
                    i.closeLineing(), uni.hideLoading(), i.disabledSubmitBtn = !1
                  }))
                }
              },
              timeOutInit: function() {
                var e = this;
                this.hasTimeOut || (this.hasTimeOut = !0, e.repeatCreateOrder2 = setTimeout((function() {
                  e.hasTimeOut && (e.closeLineing(), e.$uni.showToast("很抱歉，您被挤出了队伍，请重新提交"))
                }), 4e4))
              },
              backPage: function() {
                uni.navigateBack()
              },
              jumpToOrder: function() {
                this.isHideSuccessMask = !1, uni.redirectTo({
                  url: "/subPage/pages/orderDetailtick/orderDetailtick?orderId=" + this._orderId
                })
              },
              confirm: function() {
                this.verify() && this.$refs.popup.close()
              },
              call: function(t) {
                uni.makePhoneCall({
                  phoneNumber: t
                })
              },
              openPopup: function() {
                this.$refs.popup.open()
              },
              closePopup: function() {
                this.priceAmount, this.getIdList(), this.$refs.popup.close()
              },
              changeGiftCard: function(e, t) {
                var i = this;
                if (this.giftCardPopData.includes(e.id)) this.giftCardPopData = this.giftCardPopData.filter((function(t) {
                  return t != e.id
                }));
                else {
                  if (this.activeGiftamount > this.priceAmount) return this.$uni.showToast("目前".concat(0 == this.infoObj.skuItemType ? "订" : "预约", "单已经没有可用于抵扣的金额")), !1;
                  this.giftCardPopData.push(e.id)
                }
                var o = new r.default(0);
                this.giftCardArr.forEach((function(e) {
                  i.giftCardPopData.forEach((function(t) {
                    t == e.id && (o = o.plus(e.balance))
                  }))
                })), this.activeGiftamount = o.toNumber()
              },
              setGiftCardPrice: function() {
                var e = this.priceAmount;
                this.activeGiftamount >= e ? this.giftCardAmount = this.priceAmount : this.giftCardAmount = this.activeGiftamount, this.activeGiftCard = this.$util.deepCopy(this.giftCardPopData)
              },
              confirmCard: function() {
                this.setGiftCardPrice(), this.showGiftCard = !1
              },
              chooseGiftCard: function() {
                var e = this,
                  t = 0;
                this.giftCardArr[0] && (this.giftCardPopData = this.$util.deepCopy(this.activeGiftCard), this.giftCardArr.forEach((function(i) {
                  e.giftCardPopData.forEach((function(e) {
                    e == i.id && (t += i.balance)
                  }))
                })), this.activeGiftamount = t, this.showGiftCard = !0)
              },
              choosePassenger: function() {
                this.showPassenger = !0, this.setPassengerTitle()
              },
              setPassengerTitle: function() {
                var e = this.inputGroup.length;
                this.inputGroup.forEach((function(t) {
                  (t.id || t.name || t.telephone || t.idCard) && (e -= 1)
                })), e < 1 ? this.passengerTitle = "已选满" : e != this.inputGroup.length ? this.passengerTitle = "再选".concat(e, "位") : this.passengerTitle = "选择".concat(e, "位")
              },
              addPassenger: function() {
                this.$navigateTo({
                  url: "/subPage/pages/addPassenger/addPassenger?codes=".concat(this.realCardTypeList.join(","))
                })
              },
              getCommonUsedTouristList: function(e) {
                var t = this;
                this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/queryCommonUsedTouristList", this.infoObj.scenicType).then((function(i) {
                  if (1 === i.code && i.data[0]) {
                    if (t.commonUsedTouristList = i.data, i.data.forEach((function(e) {
                        t.$set(e, "check", !1)
                      })), 0 == t.insurePeopleList.length || i.data.forEach((function(e) {
                        t.insurePeopleList.forEach((function(t) {
                          e.id == t.id && (e.check = t.check)
                        }))
                      })), t.insurePeopleList = t.$util.deepCopy(i.data), "onLoad" == e && i.data[0]) {
                      var o = i.data.find((function(e) {
                        return t.realCardTypeList.includes(Number(e.cardType))
                      }));
                      t.usedTouristIdsPopData.push(o)
                    }
                    if (t.usedTouristIdsPopData[0]) {
                      var n = [];
                      t.usedTouristIdsPopData.forEach((function(e, i) {
                        t.commonUsedTouristList.forEach((function(t) {
                          e.id == t.id && n.push(t)
                        }))
                      })), t.usedTouristIdsPopData = n, t.infosUse || t.setinputGroup(1)
                    }
                  }
                }))
              },
              changeTourist: function(e, t, i, o) {
                if (this.realCardTypeList.includes(Number(e.cardType)))
                  if (this.usedTouristIdsPopData.includes(e)) this.usedTouristIdsPopData = this.usedTouristIdsPopData.filter((function(t) {
                    return t != e
                  })), this.delTourist(e);
                  else {
                    if (1 == this.inputGroup.length) this.usedTouristIdsPopData = [], this.usedTouristIdsPopData.push(e);
                    else {
                      var n = 0;
                      if (this.inputGroup.forEach((function(e) {
                          (e.name || e.idCard) && n++
                        })), !(n < this.inputGroup.length)) return void this.$uni.showToast("只能选择".concat(this.ticketNum, "位游客"));
                      this.usedTouristIdsPopData.push(e)
                    }
                    this.setinputGroup(0)
                  }
                else this.$uni.showToast("游客证件类型暂不支持")
              },
              delTourist: function(e, t, i) {
                var o = this.$util.deepCopy(this.inputGroup);
                o = o.filter((function(t) {
                  return t.id != e.id
                }));
                var n = this.realCardTypeList[0];
                for (var s in this.inputGroup) {
                  var r = {
                    name: "",
                    telephone: "",
                    idCard: "",
                    cardType: n
                  };
                  o[s] && (r = o[s]), this.inputGroup.splice(s, 1, r), this.setPassengerTitle()
                }
                this.getIdList(), this.$forceUpdate()
              },
              setinputGroup: function(e) {
                var t = this,
                  i = this.$util.deepCopy(this.usedTouristIdsPopData),
                  o = this.realCardTypeList[0],
                  n = function(n) {
                    if ((t.inputGroup[n].name || t.inputGroup[n].telephone || t.inputGroup[n].idCard) && t.inputGroup.length > 1 && !t.inputGroup[n].id) return "continue";
                    var s = i.shift(),
                      r = {
                        name: "",
                        telephone: "",
                        idCard: "",
                        cardType: o
                      };
                    s && (t.cacheInputGroup[n] && t.cacheInputGroup[n].cardType, t.cacheInputGroup.forEach((function(e) {
                      e.id == s.id && e.cardType
                    })), r = {
                      name: s.name,
                      telephone: s.phone,
                      idCard: s.idCarNo,
                      id: s.id,
                      cardType: s.cardType
                    }, s.id == t.inputGroup[n].id && 0 == e && (r = {
                      name: t.inputGroup[n].name,
                      telephone: t.inputGroup[n].telephone,
                      idCard: t.inputGroup[n].idCard,
                      id: t.inputGroup[n].id,
                      cardType: t.inputGroup[n].cardType
                    })), t.inputGroup.splice(n, 1, r), t.setPassengerTitle()
                  };
                for (var s in this.inputGroup) n(s);
                this.getIdList(), this.$forceUpdate()
              },
              addPassengerList: function(e) {
                if (e[0]) {
                  var t = [];
                  e.forEach((function(e) {
                    t.push({
                      name: e.name,
                      phone: e.telephone,
                      idCarNo: e.idCard
                    })
                  })), this.$uniApi.dataRequestNoLoading("POST", "manager/app/v1/commonUsedTourist/saveCommonUsedTourist?operationType=0", t).then((function(e) {}))
                }
              },
              editPassenger: function(e) {
                this.$navigateTo({
                  url: "/subPage/pages/editPassenger/editPassenger?touristId=".concat(e, "&codes=").concat(this.realCardTypeList.join(","))
                })
              },
              getGiftBagForOrder: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftBag/getGiftBagForOrder", {
                  itemId: this._ticketId,
                  orderId: this._orderId
                }).then((function(t) {
                  1 === t.code ? t.data && t.data.giftBagCouponList[0] && (e.giftBagData = t.data, e.gbCl = e.giftBagData.giftBagCouponList.length, e.receiveGiftBag(), setTimeout((function() {
                    e.showGiftBag = !0
                  }), 200)) : e.$uni.showToast(t.msg)
                }))
              },
              receiveGiftBag: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftBag/receive/" + this.giftBagData.giftBagId + "?orderId=" + this._orderId).then((function(t) {
                  1 === t.code || e.$uni.showToast(t.msg)
                }))
              },
              setChanSiOpenId: function(t) {
                var i = this;
                uni.setStorageSync("templeOpenId", t), this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/member/saveChanSiOpenId", {
                  openId: t
                }).then((function(o) {
                  if (1 === o.code) {
                    uni.removeStorageSync("templeOpenId");
                    var n = uni.getStorageSync("userInfor");
                    n.chansiOpenId = t, uni.setStorageSync("userInfor", n)
                  } else i.$uni.showToast(data.msg)
                }))
              },
              goDiscounts: function() {
                this.safeRouter("/subPage/pages/myDiscounts/myDiscounts")
              },
              saveData: function() {
                var e = this;
                this.insureList[this.insureIndex].insuranceForm = [], this.insurePeopleList.forEach((function(t) {
                  t.check && e.insureList[e.insureIndex].insuranceForm.push(t)
                }))
              },
              safeRouter: function(e) {
                this.$util.isLogin(e) && this.$navigateTo({
                  url: e
                })
              },
              getUserPhone: function() {
                var t = uni.getStorageSync("userInfor").mobilePhone;
                this.inputGroup[0].telephone = t, this.$forceUpdate()
              },
              setColor: function(e) {
                var t = "#777777";
                return e && ["条件退", "不可退", "换票入园"].includes(e) && (t = "#FF5411"), t
              },
              showCertificatePoP: function(e, t) {
                this.userIndex = t, this.realCardType = e.cardType, this.showCertificate = !0
              },
              chooseCardType: function(e) {
                this.inputGroup[this.userIndex].cardType = e, this.inputGroup[this.userIndex].idCard = "", this.showCertificate = !1, this.$forceUpdate()
              },
              cancelInsure: function(e) {
                var t = this;
                this.aggree = null, this.insureList.forEach((function(i) {
                  e == i.insuranceId && (i.isInsurance = !1, i.insuranceForm = [], t.insurePeopleList = [])
                }))
              },
              onStudentVerifyAuth: function(t) {
                var i = t.detail.wx_studentcheck_code;
                i && (this.studentCheckCode = i, uni.setStorageSync("CODE_STORAGE_KEY", i), this.checkStudentIdentity())
              },
              onShowStudentVerifyDialog: function() {
                this.showStudentVerifyDialog = !0
              },
              onStudentVerifyClose: function() {
                0 == this.isStudent && (this.showStudentPop = !0), this.showStudentVerifyDialog = !1, this.studentCheckCode && this.checkStudentIdentity()
              },
              checkStudentIdentity: function() {
                var t = this,
                  i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                this.studentCheckCode && this.$uniApi.dataRequestNoLoading("get", "manager/app/wx/checkStudent", {
                  code: this.studentCheckCode
                }).then((function(o) {
                  0 === o.data.errCode ? 3 === o.data.bindStatus ? o.data.isStudent ? (t.isStudent = 1, t.showStudentPop = !1) : (t.isStudent = 0, t.showStudentPop = !0) : 1 == i && t.onShowStudentVerifyDialog() : -1 !== o.data.errCode ? (t.studentCheckCode = "", uni.setStorageSync("CODE_STORAGE_KEY", ""), 1 == i && t.onShowStudentVerifyDialog()) : 1 == i && t.onShowStudentVerifyDialog()
                }))
              },
              closeStudentPop: function() {
                getCurrentPages().length < 2 ? uni.switchTab({
                  url: "/pages/index/index"
                }) : this.$util.prevPage()
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.csColor{color:#a17111!important}.csBorder{border-color:#a17111!important}.csBg{background:#fbf8f1!important}.csBtn{background:linear-gradient(52deg,#c7b795,#c7b795)!important}.container{background:#f5f5f5;color:#2a2a2a;font-size:28rpx;line-height:1;padding-bottom:150rpx;padding-top:20rpx}.container .hasnotice{background:#fff;overflow:hidden;padding:0 50rpx 48rpx 64rpx;width:640rpx}.container .hasnotice .title{font-size:36rpx;font-weight:700;margin:66rpx 0 36rpx;text-align:center}.container .hasnotice .scontent text{color:#4f4f4f;font-size:26rpx;line-height:30rpx}.container .hasnotice .scontent .loading>view,.container .hasnotice .scontent .loading{box-sizing:border-box;position:relative}.container .hasnotice .scontent .loading{color:#000;display:block;font-size:0}.container .hasnotice .scontent .loading.la-dark{color:#333}.container .hasnotice .scontent .loading>view{background-color:#000;border:0 solid #000;display:inline-block;float:none}.container .hasnotice .scontent .loading{height:32rpx;margin:0 auto;width:42rpx}.container .hasnotice .scontent .loading>view:nth-child(1){animation:ball-climbing-dot-jump-data-v-90140ccc .6s ease-in-out infinite;border-radius:100%;bottom:32%;height:14rpx;left:18%;position:absolute;transform-origin:center bottom;width:14rpx}.container .hasnotice .scontent .loading>view:not(:nth-child(1)){animation:ball-climbing-dot-steps-data-v-90140ccc 1.8s linear infinite;border-radius:0;height:2px;position:absolute;right:0;top:0;transform:translate(60%);width:14rpx}.container .hasnotice .scontent .loading>view:not(:nth-child(1)):nth-child(2){animation-delay:0ms}.container .hasnotice .scontent .loading>view:not(:nth-child(1)):nth-child(3){animation-delay:-.6s}.container .hasnotice .scontent .loading>view:not(:nth-child(1)):nth-child(4){animation-delay:-1.2s}.container .hasnotice .close{color:#ff5411;font-size:26rpx;margin-top:50rpx;text-align:center}.container .model-box{padding:40rpx}.container .model-box .model-title{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.container .model-box .model-title .model-name{align-items:center;color:#333;display:-webkit-flex;display:flex;font-size:36rpx}.container .model-box .model-title .model-name .num{color:#333;display:-webkit-flex;display:flex;font-size:26rpx;margin-left:20rpx}.container .model-box .model-title .model-name .num .activeNum{color:#ff5411}.container .model-box .model-title .model-name .num .spanCenter{align-items:center;display:-webkit-inline-flex;display:inline-flex;height:34rpx}.container .model-box .model-title .close{height:40rpx;width:40rpx}.container .model-box .addContacts{align-items:center;border:1rpx solid #ff5411;border-radius:40rpx;color:#ff5411;display:-webkit-flex;display:flex;font-size:30rpx;height:80rpx;justify-content:center;margin-top:40rpx;width:100%}.container .model-box .passenger-box-popup{height:615rpx;margin-bottom:20rpx;margin-top:18rpx}.container .model-box .passenger-box-popup .user-box{border-bottom:1px solid #eee;height:175rpx;justify-content:space-between;margin-top:30rpx;width:670rpx}.container .model-box .passenger-box-popup .user-box .info-box,.container .model-box .passenger-box-popup .user-box{align-items:center;display:-webkit-flex;display:flex}.container .model-box .passenger-box-popup .user-box .info-box .user-change{background-size:100% 100%;height:44rpx;margin-right:40rpx;width:44rpx}.container .model-box .passenger-box-popup .user-box .info-box .user-info .tips{color:red;font-size:24rpx}.container .model-box .passenger-box-popup .user-box .info-box .user-info .name{color:#333;font-size:32rpx;line-height:48rpx;margin-bottom:4rpx}.container .model-box .passenger-box-popup .user-box .info-box .user-info .u-phone{align-items:center;color:#777;display:-webkit-flex;display:flex;font-size:26rpx;line-height:39rpx;margin-top:10rpx}.container .model-box .passenger-box-popup .user-box .info-box .user-info .u-phone .u-phone1{color:#777;width:108rpx}.container .model-box .passenger-box-popup .user-box .info-box .user-info .u-phone .u-phone2{color:#777}.container .model-box .passenger-box-popup .user-box .user_edit{height:40rpx;width:40rpx}.container .model-box .content .row-box{align-items:center;border-bottom:1px solid #eee;display:-webkit-flex;display:flex;font-size:30rpx;height:105rpx;line-height:45rpx;width:100%}.container .model-box .content .row-box .label{color:rgba(0,0,0,.6);width:158rpx}.container .model-box .content .row-box .value{color:rgba(0,0,0,.8);width:500rpx}.container .model-box .content .row-box .select{align-items:center;color:#333;display:-webkit-flex;display:flex}.container .model-box .content .row-box:nth-last-child(1){margin-bottom:65rpx}.container .model-box .save{align-items:center;background:linear-gradient(90deg,#fc4a9b,#ff5413);border-radius:40rpx;color:#fff;display:-webkit-flex;display:flex;font-weight:700;height:80rpx;justify-content:center;width:100%}.container .couponcardBox{height:880rpx;padding:0 40rpx}.container .couponcardBox .title{color:#333;font-size:32rpx;margin:42rpx 0 35rpx}.container .couponcardBox .scontent{height:621rpx;line-height:50rpx}.container .couponcardBox .scontent .item{background:url('https://eshopfile.zhiyousx.com/2022031715525238791.png')50%no-repeat;background-size:100% 100%;display:-webkit-flex;display:flex;height:200rpx;justify-content:space-between;margin-bottom:10rpx;position:relative}.container .couponcardBox .scontent .item .radio{height:44rpx;position:absolute;right:10rpx;top:77rpx;width:44rpx}.container .couponcardBox .scontent .item .info{display:-webkit-flex;display:flex;flex-direction:column;height:100%;justify-content:center;padding:0rpx 38rpx;width:438rpx}.container .couponcardBox .scontent .item .info .name{color:#333;font-size:28rpx}.container .couponcardBox .scontent .item .info .date{color:#828282;font-size:24rpx;line-height:30rpx;margin-top:14rpx}.container .couponcardBox .scontent .item .info .stackInfo{color:#ff7239;font-size:24rpx;margin-top:10rpx}.container .couponcardBox .scontent .item .price{height:100%;padding:50rpx 20rpx 38rpx;width:230rpx}.container .couponcardBox .scontent .item .price .num text{color:#ff5411;font-size:40rpx}.container .couponcardBox .scontent .item .price .num .n{font-size:60rpx;font-weight:700}.container .couponcardBox .scontent .item .price .condition{color:#4f4f4f;font-size:24rpx;margin-top:2rpx;text-align:center;width:140rpx}.container .couponcardBox .bottom{height:138rpx;padding-top:15rpx}.container .couponcardBox .bottom .no{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.container .couponcardBox .bottom .no text{color:#333;font-size:28rpx}.container .couponcardBox .bottom .no image{height:44rpx;margin-right:10rpx;width:44rpx}.container .couponcardBox .bottom .btn{background:linear-gradient(90deg,#fc4a9b,#ff5413);border-radius:40rpx;color:#fff;height:30rpx;height:70rpx;line-height:70rpx;margin-top:20rpx;text-align:center;width:100%}.box1{background-color:#fff;border-radius:20rpx;margin-bottom:10rpx;padding:45rpx 30rpx}.box1 .name{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;font-size:32rpx;font-weight:700;line-height:50rpx;overflow:hidden}.box1 .name image{height:26rpx;margin-right:5rpx;width:53rpx}.box1 .tip{color:#aeaeae;font-size:24rpx;margin-bottom:15rpx}.box1 .price-box{align-items:center;display:-webkit-flex;display:flex;justify-content:flex-end}.box1 .price-box .l{border:1rpx solid #fff1ed;border-radius:20rpx;color:#00a795;font-size:26rpx;height:60rpx;line-height:60rpx;text-align:center;width:160rpx}.box1 .price-box .r{color:#2a2a2a;font-size:24rpx}.box1 .price-box .r text{color:#f15252;font-size:36rpx}.box2{background-color:#fff;border-radius:20rpx;margin-bottom:10rpx;padding:45rpx 30rpx}.box2>.t1{font-size:28rpx;margin-bottom:48rpx}.box2>.t1>.r,.box2>.t1{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.box2>.t1>.r{font-size:26rpx}.box2>.t1>.r .r{border:1rpx solid #fff1ed;border-radius:20rpx;color:#00a795;font-size:26rpx;height:60rpx;line-height:60rpx;margin-left:10rpx;padding:0 20rpx;text-align:center}.box2>.t2{align-items:top;display:-webkit-flex;display:flex;font-size:28rpx;justify-content:space-between;margin-bottom:48rpx}.box2>.t2 .r{color:#aeaeae}.box2>.t2 .r view{color:#aeaeae;margin-bottom:12rpx;text-align:right}.box2 .new-box{margin-bottom:25rpx}.box2>.t2 .r view:nth-child(1){color:#2a2a2a}.box2 .new-box .yxrq-box .title{color:#2a2a2a;font-size:28rpx;margin-bottom:25rpx}.box2 .new-box .yxrq-box .p-box{color:#777;font-size:28rpx;padding-bottom:4rpx}.box2 .new-box .yxrq-box .p-box .p1{color:#2a2a2a;font-size:36rpx;font-weight:700;margin-bottom:18rpx}.box2 .new-box .yxrq-box .p-box .p2{color:#777;font-size:28rpx;line-height:32rpx;margin-bottom:18rpx;text-align:justify}.box2 .new-box .yxrq-box .p-box .p-stock{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.box2 .new-box .yxrq-box .p-box .p-stock .stock-desc{color:#f15252;font-size:28rpx}.box2 .new-box .date-box .title{color:#2a2a2a;font-size:28rpx;font-weight:700;margin-bottom:25rpx}.box2 .new-box .date-box .scroll-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.box2 .new-box .date-box .scroll-box .left{box-shadow:inset -15rpx 0 25rpx -5rpx rgba(168,208,190,.25);white-space:nowrap;width:570rpx}.box2 .new-box .date-box .scroll-box .left .item{border:1px solid #e6e6e6;border-radius:20rpx;box-sizing:border-box;color:#2a2a2a;display:inline-block;font-size:26rpx;line-height:1;margin-right:14rpx;padding:25rpx 30rpx 15rpx;text-align:center}.box2 .new-box .date-box .scroll-box .left .item view{margin-bottom:10rpx}.box2 .new-box .ticketinfo{align-items:center;background:#fafafa;display:-webkit-flex;display:flex;height:70rpx;justify-content:space-between;margin:20rpx 0 40rpx;padding:0 13rpx;width:690rpx}.ytxz-box{background:#fafafa;height:100%;position:relative;width:750rpx}.ytxz-box .content-box1{padding:68rpx 30rpx 0}.ytxz-box .content-box1 .title-box{position:relative}.ytxz-box .content-box1 .title-box .p1{color:#000;font-size:36rpx;font-weight:700;line-height:50rpx;padding-right:50rpx;width:660rpx}.ytxz-box .content-box1 .title-box .p2{color:#000;font-size:28rpx;line-height:40rpx;opacity:.5;padding-bottom:32rpx;padding-top:20rpx}.ytxz-box .content-box1 .bottom-box{height:625rpx}.ytxz-box .content-box1 .bottom-box .refundItem{display:block;line-height:48rpx;padding-bottom:0rpx}.ytxz-box .content-box1 .bottom-box .line1{margin-bottom:30rpx}.ytxz-box .content-box1 .bottom-box .line1 .title{color:#333;font-size:30rpx;font-weight:700;line-height:50rpx;margin-bottom:5rpx}.ytxz-box .content-box1 .bottom-box .line1>.b .item{display:-webkit-flex;display:flex;margin-bottom:4rpx}.ytxz-box .content-box1 .bottom-box .line1>.b .item:last-child{margin-bottom:0}.ytxz-box .content-box1 .bottom-box .line1>.b .item>.l{border:2rpx solid #ff7d2a;border-radius:4rpx;border-radius:6rpx;color:#ff7d2a;font-size:22rpx;height:32rpx;line-height:28rpx;margin-right:24rpx;margin-top:8rpx;padding:0 4rpx;text-align:center;width:120rpx}.ytxz-box .content-box1 .bottom-box .line1>.b .item .lc{border:2rpx solid #a17111;color:#a17111;width:140rpx}.ytxz-box .content-box1 .bottom-box .line1>.b .item>.r{flex:1;line-height:48rpx;white-space:pre-wrap}.ytxz-box .content-box1 .bottom-box .table{border:1rpx solid #e4e4e4;border-bottom:none;margin-bottom:30rpx}.ytxz-box .content-box1 .bottom-box .tr{border-bottom:1rpx solid #e4e4e4;display:-webkit-flex;display:flex}.ytxz-box .content-box1 .bottom-box .tr.first{background:#fffaf8}.ytxz-box .content-box1 .bottom-box .tr.first .td{font-weight:600}.ytxz-box .content-box1 .bottom-box .tr .1st{width:200rpx}.ytxz-box .content-box1 .bottom-box .tr .td{align-items:center;border-right:1rpx solid #e4e4e4;border-top:none;color:#656565;display:-webkit-flex;display:flex;line-height:42rpx;padding:16rpx 25rpx;text-align:left;word-break:break-all}.ytxz-box .content-box1 .bottom-box .tr .td:last-child{border-right:none}.ytxz-box .content-box1 .bottom-box .community-box{margin-bottom:30rpx;width:690rpx}.ytxz-box .content-box1 .bottom-box .line2{margin-bottom:30rpx}.ytxz-box .content-box1 .bottom-box .line2 .title{color:#333;font-size:30rpx;font-weight:700;line-height:50rpx;margin-bottom:4rpx}.ytxz-box .content-box1 .bottom-box .line2>.b .options{align-items:baseline;display:-webkit-flex;display:flex;margin-bottom:4rpx}.ytxz-box .content-box1 .bottom-box .line2>.b .options view{color:#777474;display:-webkit-flex;display:flex;flex-direction:column;font-size:26rpx;justify-content:flex-start}.ytxz-box .content-box1 .bottom-box .line2>.b .options view.title{white-space:nowrap;width:134rpx}.ytxz-box .content-box1 .bottom-box .line2>.b .options view.content{width:564rpx}.ytxz-box .content-box1 .bottom-box .line3 .title{color:#333;font-size:30rpx;font-weight:700;line-height:50rpx}.ytxz-box .content-box1 .bottom-box .line3>.b .item{align-items:center;display:-webkit-flex;display:flex;margin-bottom:15rpx;margin-top:30rpx;position:relative}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col1{border:2rpx solid #ff7d2a;border-radius:4rpx;color:#ff7d2a;font-size:22rpx;height:32rpx;line-height:28rpx;margin-right:22rpx;padding:0 24rpx}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col1c{border:2rpx solid #a17111;color:#a17111}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col2{color:#777474;font-size:26rpx;margin-right:30rpx;width:220rpx}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col3{border-width:600;color:#333;font-size:32rpx;text-align:right;width:230rpx}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col4 image{height:32rpx;position:absolute;right:0;top:-5rpx;width:32rpx}.ytxz-box .book-box{background-color:#fff;bottom:0;box-shadow:0-1rpx 0 0#e3e3e3;display:-webkit-flex;display:flex;height:100rpx;left:0;position:absolute;width:100%}.ytxz-box .book-box>.l{align-items:center;display:-webkit-flex;display:flex;flex:1;padding-left:40rpx}.ytxz-box .book-box>.l .p1{color:#777474;font-size:26rpx;margin-right:20rpx}.ytxz-box .book-box>.l .p2{color:#ff5411;font-size:32rpx}.ytxz-box .book-box>.btn{background:linear-gradient(56deg,#fc4a9e,#ff5411);border-radius:0;color:#fff;font-size:32rpx;line-height:100rpx;width:320rpx}.ytxz-box .book-box>.btn.emptys{background:linear-gradient(253deg,#ffb2d5,#ffc1aa)}.box2 .new-box .ticketinfo>view{color:#545454;font-size:24rpx}.box2 .new-box .ticketinfo>view .red{color:#f15252;font-size:24rpx}.box2 .new-box .date-box .scroll-box .left .item .p3{color:#f15252}.box2 .new-box .date-box .scroll-box .left .item.active{background:#fff1ed;color:#00a795!important}.box2 .new-box .date-box .scroll-box .left .item.disabled{background:#f5f5f5;color:#aeaeae!important}.box2 .new-box .date-box .scroll-box .left .item.disabled .p3{color:#aeaeae!important}.box2 .new-box .date-box .scroll-box .right{align-items:center;color:#00a795;display:-webkit-flex;display:flex;font-size:28rpx;justify-content:center;line-height:40rpx;width:110rpx}.box2 .new-box .date-box .scroll-box .right .text{margin-right:23rpx;width:62rpx}.box2 .new-box .date-box .scroll-box .right .arrow{border-right:1rpx solid #f15252;border-top:1rpx solid #f15252;height:20rpx;transform:rotate(45deg);width:20rpx}.box2 .new-box .buy-tip{margin-bottom:35rpx;padding:16rpx 9rpx}.box2 .new-box .buy-tip .p{color:#aeaeae;font-size:24rpx;line-height:36rpx}.box2 .new-box .hour-box .title{color:#2a2a2a;font-size:28rpx;font-weight:700;margin-bottom:25rpx;padding-top:50rpx}.box2 .new-box .hour-box .item-box .item{border:1px solid #e6e6e6;border-radius:20rpx;box-sizing:border-box;color:#2a2a2a;display:inline-block;font-size:26rpx;line-height:1;margin-bottom:16rpx;margin-right:16rpx;padding:25rpx 0 20rpx;text-align:center;width:212rpx}.box2 .new-box .hour-box .item-box .item .p1{margin-bottom:15rpx}.box2 .new-box .hour-box .item-box .item.active{background:#fff1ed}.box2 .new-box .hour-box .item-box .item.disabled{background:#f5f5f5}.box2 .new-box .hour-box .item-box .item.disabled .p2{color:#f15252}.box2>.b{align-items:center;display:-webkit-flex;display:flex;font-size:28rpx;justify-content:space-between}.box2>.b>.l{width:500rpx}.box2>.b>.l .info{word-wrap:break-word;align-items:center;color:#777;display:-webkit-flex;display:flex;font-size:26rpx;line-height:40rpx;width:500rpx}.box2>.b>.l .info view{word-wrap:break-word;color:#777;width:490rpx}.box2>.b>.l .info view text{color:#777;word-break:keep-all}.box2>.b>.l .info text{font-size:26rpx;word-break:keep-all}.box2>.b>.r{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;width:180rpx}.box2>.b>.r .op{background-color:#f5f5f5;border-radius:10rpx;height:48rpx;line-height:48rpx;text-align:center;width:48rpx}.box2>.b>.r .op:nth-child(3){background-color:#fff1ed}.box2>.b>.r input{text-align:center;width:48rpx}.box2 .buy-limit{line-height:36rpx;margin-top:16rpx}.box2 .buy-limit .p{color:#aeaeae;font-size:24rpx}.box2>.hotel-box{color:#2a2a2a;font-size:28rpx;font-weight:700;margin-bottom:25rpx;margin-top:59rpx}.box2>.hotel-box.box3{padding:0}.box2>.hotel-box.box3 .l,.box2>.hotel-box.box3 .r{font-weight:500}.box2>.hotel-box .choose{margin-top:29rpx;width:460rpx}.box2>.hotel-box .choose .c{border-radius:20rpx;font-size:26rpx;font-weight:400;height:80rpx;margin-bottom:20rpx;padding-left:21rpx}.box2>.hotel-box .choose .c:last-child{margin-bottom:0}.box2>.hotel-box .choose .c1{background:#f5f5f5;color:#b5b5b5;line-height:80rpx}.box2>.hotel-box .choose .c2{background:#fff;border:1rpx solid #e6e6e6;color:#333;line-height:78rpx}.box2>.hotel-box .choose .active{background:#fff1ed;border:none;line-height:80rpx}.box2>.hotel-tips{color:#545454;font-family:Source Han Sans CN;font-size:24rpx;font-weight:400;margin-top:60rpx}.box3{background-color:#fff;border-radius:20rpx;margin-bottom:10rpx;padding:45rpx 30rpx}.box3 .scroll-box{display:-webkit-flex;display:flex}.box3 .passenger-box{height:74rpx;white-space:nowrap}.box3 .passenger-box .user{border:1px solid #ccc;border-radius:20rpx;box-sizing:border-box;color:#444;display:inline-block;font-size:26rpx;height:72rpx;line-height:72rpx;margin-right:20rpx;padding:0 30rpx}.box3 .passenger-box .user:nth-last-child(2){margin-right:0}.box3 .passenger-box .active{background:#fff1ed;border:none;color:#ff5411;line-height:74rpx}.box3 .passenger-box .user-but{background-color:#fff;color:#333;display:inline-block;font-size:26rpx;height:100%;line-height:72rpx;position:-webkit-sticky;position:sticky;right:0;text-align:center;width:240rpx}.box3 .passenger-box .user-but .but{border:1px solid #777;border-radius:20rpx;height:72rpx;margin-left:20rpx;width:220rpx}.box3 .title{font-weight:700;margin-bottom:30rpx}.box3 .b{align-items:center;display:-webkit-flex;display:flex;font-size:28rpx;justify-content:space-between}.box3 .b .l{font-size:26rpx;font-weight:700}.box3 .b .r{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;width:180rpx}.box3 .b .r .op{background-color:#f5f5f5;border-radius:10rpx;height:48rpx;line-height:48rpx;text-align:center;width:48rpx}.box3 .b .r .op:nth-child(3){background-color:#fff1ed}.box3 .name-box{margin-bottom:20rpx;overflow-x:scroll;overflow-y:hidden;white-space:nowrap}.box3 .name-box .name{border:1rpx solid #fff1ed;border-radius:20rpx;color:#2a2a2a;display:inline-block;font-size:26rpx;height:60rpx;line-height:60rpx;margin-right:10rpx;padding:0 36rpx;text-align:center}.box3 .name-box .name.active{background-color:#fff1ed;color:#00a795}.box3 .add-name-box{display:-webkit-flex;display:flex;justify-content:flex-end}.box3 .add-name-box view{background-image:linear-gradient(0deg,#0bc96e,#00a795);border-radius:20rpx;box-shadow:-12rpx 15rpx 10rpx 0 rgba(71,159,119,.2);color:#feffff;font-size:26rpx;height:60rpx;line-height:60rpx;text-align:center;width:160rpx}.box3 .contact-box .item{padding-bottom:10rpx}.box3 .contact-box .item .row{align-items:center;display:-webkit-flex;display:flex;position:relative}.box3 .contact-box .item .row .addPhone{background:#fff1ed;border:2rpx solid #ff5411;border-radius:20rpx;color:#ff5411;font-size:24rpx;height:60rpx;line-height:56rpx;position:absolute;right:0;text-align:center;width:184rpx;z-index:50}.box3 .contact-box .item .row .errId{color:#f56c6c}.box3 .contact-box .item .l{width:80rpx}.box3 .contact-box .item .l .image-l{height:50rpx;width:50rpx}.box3 .contact-box .item .user-card{align-items:center;color:#555;display:-webkit-flex;display:flex;font-size:26rpx;width:160rpx}.box3 .contact-box .item .user-card .card-name{margin-right:10rpx}.box3 .contact-box .item .r{border-bottom:1rpx solid #f5f5f5;flex:1;height:100rpx;position:relative;z-index:10}.couponBox{align-items:center;background:#fff;border-radius:20rpx;height:100rpx;justify-content:space-between;padding:0 30rpx;width:100%}.couponBox .cb1,.couponBox{display:-webkit-flex;display:flex;flex-direction:row}.couponBox .cb1 .cb1-1{color:#2a2a2a;font-family:Source Han Sans CN;font-size:30rpx;font-weight:500;margin-right:20rpx}.couponBox .cb1 .cb1-2{border:2rpx solid #f15252;border-radius:6rpx;color:#f15252;font-family:Source Han Sans CN;font-size:20rpx;font-weight:400;height:30rpx;line-height:26rpx;padding:0 8rpx}.couponBox .cb2{align-items:center;display:-webkit-flex;display:flex;flex-direction:row}.couponBox .cb2 .cb2-1{color:#f15252;font-family:Source Han Sans CN;font-size:36rpx;font-weight:400;margin-right:25rpx}.couponBox .cb2 .cb2-2{color:#b6b6b6;font-family:Source Han Sans CN;font-size:26rpx;font-weight:400;margin-right:25rpx}.couponBox .cb2 .cb2-3{color:#f15252;font-size:26rpx;font-weight:400;margin-right:25rpx}.insure-box{background-color:#fff;border-radius:20rpx;margin-top:10rpx}.insure-box .insure-list{border-bottom:1rpx solid rgba(0,0,0,.05);display:-webkit-flex;display:flex;flex-direction:column;margin:30rpx}.insure-box .insure-list .title{color:#444;font-size:30rpx;font-weight:500;height:52rpx;line-height:52rpx;margin:30rpx 0}.insure-box .insure-list .insureItem .top{display:-webkit-flex;display:flex}.insure-box .insure-list .insureItem .top .insure-detail{display:-webkit-flex;display:flex;flex-direction:column;width:92%}.insure-box .insure-list .insureItem .top .insure-detail .item1{display:-webkit-flex;display:flex}.insure-box .insure-list .insureItem .top .insure-detail .item1 .icon{border:1rpx solid #11c0a1;border-radius:2rpx 10rpx 10rpx 10rpx;color:#11c0a1;font-size:24rpx;height:35rpx;line-height:36rpx;margin-bottom:10rpx;margin-right:4rpx;text-align:center;width:36rpx}.insure-box .insure-list .insureItem .top .insure-detail .item1 .money{font-size:30rpx;font-weight:400;line-height:36rpx;margin:5rpx 0 10rpx}.insure-box .insure-list .insureItem .top .insure-detail .item1 .moneys{font-size:30rpx;font-weight:400;line-height:36rpx;margin:5rpx 0 10rpx;width:579rpx}.insure-box .insure-list .insureItem .top .insure-detail .item1 .col{color:#ff5411}.insure-box .insure-list .insureItem .top .insure-detail .item1 .mr{color:#777;margin-left:4rpx;margin-right:30rpx}.insure-box .insure-list .insureItem .top .insure-detail .item2{color:#777;font-size:26rpx;font-weight:400;line-height:39rpx;margin-bottom:20rpx;margin-left:44rpx}.insure-box .insure-list .insureItem .top .insure-choose .img-style{height:44rpx;width:44rpx}.insure-box .insure-list .insureItem .bottom{display:-webkit-flex;display:flex}.insure-box .insure-list .insureItem .bottom .box{background-color:#fafafa;border-radius:10rpx 10rpx 10rpx 10rpx;display:-webkit-flex;display:flex;margin-bottom:30rpx;min-height:80rpx;padding-left:20rpx;width:688rpx}.insure-box .insure-list .insureItem .bottom .box .left{align-items:center;color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;font-size:28rpx;font-weight:400;height:auto;line-height:40rpx;margin-right:30rpx}.insure-box .insure-list .insureItem .bottom .box .right{display:-webkit-flex;display:flex;flex-direction:column;justify-content:center}.insure-box .insure-list .insureItem .bottom .box .right .add{height:30rpx;margin:4rpx 5rpx 0 0;width:30rpx}.insure-box .insure-list .insureItem .bottom .box .right .people{color:#ff5411;font-size:24rpx;font-weight:400;height:40rpx;line-height:40rpx}.insure-box .insure-list .insureItem .bottom .box .right .mt{margin:20rpx 0}.insure-box .insure-list .insureItem .bottom .box .right .m-user-box .mu-item{align-items:center;border-bottom:1px solid rgba(0,0,0,.05);display:-webkit-flex;display:flex;padding:20rpx 0}.insure-box .insure-list .insureItem .bottom .box .right .m-user-box .mu-item .icon{height:30rpx;margin-right:20rpx;width:30rpx}.insure-box .insure-list .insureItem .bottom .box .right .m-user-box .mu-item .it-info{align-items:center;display:-webkit-flex;display:flex;flex:1;height:90rpx;justify-content:space-between;padding-right:20rpx}.insure-box .insure-list .insureItem .bottom .box .right .m-user-box .mu-item .it-info .it-flex{width:390rpx}.insure-box .insure-list .insureItem .bottom .box .right .m-user-box .mu-item .it-info .it-flex .name{color:rgba(0,0,0,.8);font-size:28rpx;height:40rpx;line-height:48rpx}.insure-box .insure-list .insureItem .bottom .box .right .m-user-box .mu-item .it-info .it-flex .card{color:rgba(0,0,0,.8);font-size:26rpx;height:40rpx;line-height:40rpx;margin-top:10rpx}.insure-box .insure-list .insureItem .bottom .box .right .m-user-box .mu-item .it-info .u-item-r{height:30rpx;margin-left:29rpx;width:30rpx}.insure-box .insure-list .insureItem .bottom .box .right .m-user-box .mu-add{align-items:center;display:-webkit-flex;display:flex;margin-bottom:40rpx}.insure-box .insure-list .insureItem .bottom .box .right .m-user-box .mu-add .icon{height:30rpx;margin-right:20rpx;width:30rpx}.insure-box .insure-list .insureItem .bottom .box .right .m-user-box .mu-add .add-tip{color:rgba(0,0,0,.5);font-size:26rpx;line-height:40rpx}.gift{margin-top:10rpx}.popup{background-color:#fff;border-radius:20rpx;height:auto;padding:30rpx 30rpx 120rpx;position:relative;width:640rpx}.popup .text{color:#4f4f4f;font-family:Source Han Sans CN;font-size:32rpx;line-height:1.4;margin-top:40rpx;text-align:center}.popup .bottom{align-items:center;border-top:1rpx solid #eaeaea;bottom:0;display:-webkit-flex;display:flex;flex-direction:row;height:81rpx;justify-content:space-between;left:0;position:absolute;text-align:center;width:640rpx}.popup .bottom .b-left{color:#8d8d8d;font-family:Source Han Sans CN;font-size:26rpx;font-weight:400;width:50%}.popup .bottom .b-center{background-color:#eaeaea;height:100%;width:1rpx}.popup .bottom .b-right{color:#333;font-family:Source Han Sans CN;font-size:30rpx;font-weight:400;width:50%}.fill-card-box{background:#fff;height:880rpx;padding:40rpx;position:relative;width:750rpx}.fill-card-box .name{color:#333;font-size:32rpx;line-height:48rpx}.fill-card-box .but-popup{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:50rpx;bottom:20rpx;color:#fff;font-size:26rpx;height:80rpx;left:40rpx;line-height:80rpx;position:absolute;text-align:center;width:670rpx}.fill-card-box .card-box-popup{margin-top:30rpx}.fill-card-box .card-box-popup .card-item-popup{height:280rpx;margin-bottom:20rpx;position:relative;width:670rpx}.fill-card-box .card-box-popup .card-item-popup .card-image{border-radius:20rpx;height:280rpx;width:670rpx}.fill-card-box .card-box-popup .card-item-popup .card-data{height:280rpx;left:0;position:absolute;top:0;width:670rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .cardHeadbg{background:linear-gradient(180deg,#fd928b,#ef5e3f)}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head{border-radius:20rpx 20rpx 0 0;height:100rpx;position:relative;width:670rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head .card-logo{height:65rpx;left:20rpx;position:absolute;top:19rpx;width:56rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head .card-info{left:96rpx;position:absolute;top:12rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head .card-info .card-name{color:#fff;font-size:28rpx;line-height:42rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head .card-info .card-value{color:#fff;font-size:24rpx;line-height:36rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head .card-time{color:#fff;font-size:24rpx;line-height:36rpx;position:absolute;right:20rpx;top:54rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .cardBodyBg{background:linear-gradient(180deg,#fff,#ffefef);border:1px solid #ff5411}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body{align-items:center;border-radius:0 0 20rpx 20rpx;display:-webkit-flex;display:flex;flex-direction:column;height:180rpx;position:relative;width:670rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-balance{height:60rpx;line-height:60rpx;margin-top:63rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-balance .label{color:#ff5411;font-size:24rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-balance .value{color:#ff5411;font-size:40rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-tips{align-items:center;display:-webkit-flex;display:flex;height:36rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-tips .tips{margin-right:12rpx;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:203rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-tips .tips-icon{height:28rpx;width:28rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-change{height:44rpx;position:absolute;right:28rpx;top:68rpx;width:44rpx}.carTit{background:#fafafa;color:#aeaeae;font-size:24rpx;font-weight:400;line-height:60rpx;margin:22rpx 0;padding-left:15rpx}.coupon-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.coupon-tit{color:#2a2a2a;font-size:28rpx;font-weight:500;line-height:100rpx}.coupon-msg{background:#dbf5f4;border-radius:15rpx 15rpx 15rpx 6rpx;color:#00a795;display:inline-block;font-size:20rpx;font-weight:400;height:35rpx;line-height:35rpx;margin-left:20rpx;text-align:center;width:140rpx}.coupon-r{color:#333744;font-size:26rpx;font-weight:400;line-height:100rpx}.box4 .title-box{padding:25rpx 30rpx;position:relative}.box4 .title-box .r{align-items:center;background-image:linear-gradient(0deg,#0bc96e,#00a795);border-radius:50%;box-shadow:-12rpx 15rpx 10rpx 0 rgba(71,159,119,.2);color:#fff;display:-webkit-flex;display:flex;font-size:26rpx;height:40rpx;justify-content:center;line-height:40rpx;position:absolute;right:30rpx;text-align:center;top:30rpx;transform:rotate(-180deg);width:40rpx}.box4 .title-box .r.rotate{transform:rotate(0deg)}.box4 .title-box .r image{width:18rpx}.box4 .title-box .l{color:#00a795;font-size:26rpx;line-height:36rpx}.box4 .item-box1{background-color:#fff;border-radius:20rpx;margin-bottom:10rpx;padding:10rpx 30rpx}.box4 .item-box1 .item{border-bottom:1rpx solid #f5f5f5;padding:20rpx 0rpx}.box4 .item-box1 .item:last-child{border-bottom:0;padding:20rpx 0rpx}.box4 .item-box1 .item .t{line-height:40rpx;padding-bottom:20rpx}.box4 .item-box1 .item .b .radio-group{display:-webkit-flex;display:flex;justify-content:space-between;width:345rpx}.box4 .item-box2{background-color:#fff;border-radius:20rpx;padding:50rpx 30rpx 40rpx}.box4 .item-box2 .title{font-weight:700;margin-bottom:30rpx}.box4 .item-box2 .item{border-bottom:1rpx solid #f5f5f5;display:-webkit-flex;display:flex;padding:20rpx 0rpx}.box4 .item-box2 .item .l{width:70rpx}.box4 .item-box2 .item .r{flex:1;line-height:40rpx}.fixed-bottom{background:#fff;border-top:1rpx solid #d9d9d7;bottom:0;display:-webkit-flex;display:flex;height:100rpx;left:0;position:fixed;width:100%;z-index:100}.fixed-bottom .l{line-height:100rpx;padding:0 30rpx;width:450rpx}.fixed-bottom .l text{color:#f15252;font-size:32rpx}.fixed-bottom .r{background:linear-gradient(90deg,#fc4a9b,#ff5413);border-radius:0!important;color:#fff;flex:1;font-size:32rpx;letter-spacing:2rpx;line-height:100rpx}#dateSelect{background:#fff;border-radius:26rpx;box-shadow:0 0 50rpx rgba(0,0,0,.3);left:50%;overflow:hidden;position:fixed;top:50%;transform:translate(-50%,-50%);width:90%;z-index:-1}#dateSelect.show,.yy-success-mask{z-index:100}.yy-success-mask .content{width:560rpx}.yy-success-mask .content>.t .title image{height:80rpx}.yy-success-mask .content>.t .detail view .id{color:#f15252}.yy-success-mask .content>.t .detail view .text{color:#868686}.yy-success-mask .content>.b .r{color:#00a795}.yy-fail-mask{background:rgba(0,0,0,.5);height:100%;position:fixed;top:0;width:100%;z-index:100}.yy-fail-mask .content{background:#fff;border-radius:40rpx;left:50%;line-height:1;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);width:560rpx}.yy-fail-mask .content .t{padding-top:98rpx}.yy-fail-mask .content .t .title{color:#2a2a2a;font-size:30rpx;margin-bottom:25rpx}.yy-fail-mask .content .t .detail{color:#aeaeae;font-size:26rpx;padding-bottom:70rpx}.yy-fail-mask .content>.b{border-top:1rpx solid #eaeaea;color:#00a795;font-size:26rpx;line-height:80rpx;text-align:center}.book-box{background-color:#fff;border-radius:20rpx;color:#2a2a2a;font-size:28rpx;margin-bottom:10rpx;padding:45rpx 30rpx}.book-box .title{font-weight:700;margin-bottom:30rpx}.book-box .select-box{align-items:center;display:-webkit-flex;display:flex;margin-bottom:30rpx}.book-box .select-box>.l{margin-right:38rpx}.book-box .select-box>.r{align-items:center;display:-webkit-flex;display:flex}.book-box .select-box>.r .item{border:1rpx solid #dbf5f4;border-radius:20rpx;font-size:26rpx;height:74rpx;line-height:74rpx;margin-right:30rpx;text-align:center;width:160rpx}.book-box .select-box>.r .item.active{background:#dbf5f4;color:#00a795}.book-box .select-box>.r .item:last-child{margin-right:0rpx}.book-box .input-box{align-items:center;display:-webkit-flex;display:flex}.book-box .input-box .l{width:110rpx}.book-box .input-box input{border-bottom:1rpx solid #f5f5f5;flex:1;height:100rpx;margin-left:27rpx}.yy-success-mask{background:rgba(0,0,0,.5);height:100%;position:fixed;top:0;width:100%;z-index:150}.yy-success-mask .content{background:#fff;border-radius:40rpx;left:50%;line-height:1;position:absolute;top:50%;transform:translate(-50%,-50%);width:640rpx}.yy-success-mask .content>.t{padding-top:60rpx}.yy-success-mask .content>.t .title{align-items:center;color:#2a2a2a;display:-webkit-flex;display:flex;font-size:36rpx;justify-content:center}.yy-success-mask .content>.t .title image{height:65rpx;margin-right:30rpx;width:76rpx}.yy-success-mask .content>.t .detail{font-size:26rpx;padding-bottom:70rpx;padding-left:60rpx;padding-top:34rpx}.yy-success-mask .content>.t .detail view:first-child{color:#f15252;margin-bottom:20rpx}.yy-success-mask .content>.t .detail view:last-child{color:#2a2a2a}.yy-success-mask .content>.t .detail view text{color:#868686;display:inline-block;width:130rpx}.yy-success-mask .content>.b{border-top:1rpx solid #eaeaea;color:#aeaeae;display:-webkit-flex;display:flex;font-size:26rpx;text-align:center}.yy-success-mask .content>.b view{color:#aeaeae;line-height:80rpx;width:50%}.yy-success-mask .content>.b .r{border-left:1rpx solid #eaeaea;color:#333}.fill-passenger-box{background:#fff;height:880rpx;padding:40rpx;position:relative;width:750rpx}.fill-passenger-box .name{color:#333;font-size:32rpx;line-height:48rpx}.fill-passenger-box .savePassenger{color:#ff5411;font-size:32rpx;line-height:48rpx;position:absolute;right:40rpx;top:40rpx}.fill-passenger-box .passenger-box-popup{height:615rpx;margin-top:18rpx}.fill-passenger-box .passenger-box-popup .user-box{border-bottom:1px solid #eee;height:175rpx;justify-content:space-between;margin-top:30rpx;width:670rpx}.fill-passenger-box .passenger-box-popup .user-box .info-box,.fill-passenger-box .passenger-box-popup .user-box{align-items:center;display:-webkit-flex;display:flex}.fill-passenger-box .passenger-box-popup .user-box .info-box .user-change{background-size:100% 100%;height:44rpx;margin-right:40rpx;width:44rpx}.fill-passenger-box .passenger-box-popup .user-box .info-box .user-info .name{color:#333;font-size:32rpx;line-height:48rpx;margin-bottom:4rpx}.fill-passenger-box .passenger-box-popup .user-box .info-box .user-info .u-phone{align-items:center;color:#777;display:-webkit-flex;display:flex;font-size:26rpx;line-height:39rpx;margin-top:10rpx}.fill-passenger-box .passenger-box-popup .user-box .info-box .user-info .u-phone .u-phone1{color:#777;width:108rpx}.fill-passenger-box .passenger-box-popup .user-box .info-box .user-info .u-phone .u-phone2{color:#777}.fill-passenger-box .passenger-box-popup .user-box .user-edit{height:34rpx;width:34rpx}.fill-passenger-box .but-popup{border:1px solid #ff5411;border-radius:20rpx;color:#ff5411;font-size:30rpx;height:80rpx;line-height:78rpx;margin-top:20rpx;text-align:center;width:670rpx}@-webkit-keyframes ball-climbing-dot-jump-data-v-90140ccc{0%{transform:scaleY(.7)}20%{transform:scale(.7,1.2)}40%{transform:scale(1)}50%{bottom:125%}46%{transform:scale(1)}80%{transform:scale(.7,1.2)}90%{transform:scale(.7,1.2)}100%{transform:scaleY(.7)}}@keyframes ball-climbing-dot-jump-data-v-90140ccc{0%{transform:scaleY(.7)}20%{transform:scale(.7,1.2)}40%{transform:scale(1)}50%{bottom:125%}46%{transform:scale(1)}80%{transform:scale(.7,1.2)}90%{transform:scale(.7,1.2)}100%{transform:scaleY(.7)}}@-webkit-keyframes ball-climbing-dot-steps-data-v-90140ccc{0%{opacity:0;right:0;top:0}50%{opacity:1}100%{opacity:0;right:100%;top:100%}}@keyframes ball-climbing-dot-steps-data-v-90140ccc{0%{opacity:0;right:0;top:0}50%{opacity:1}100%{opacity:0;right:100%;top:100%}}.giftBag{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center}.giftBag .giftBag-img{position:relative;width:630rpx;z-index:3}.giftBag .gift-mid{background:linear-gradient(0deg,#ff3329,#ff7f56);border-radius:0 0 60rpx 60rpx;height:auto;margin-top:-2px;overflow:hidden;padding:35rpx 20rpx 150rpx;position:relative;width:630rpx;z-index:2}.giftBag .gift-mid .gift-title{color:#fff;font-size:36rpx;font-weight:600;line-height:40rpx;margin-bottom:35rpx;text-align:center;text-shadow:0 2rpx 4rpx rgba(87,19,0,.4);width:100%}.giftBag .gift-mid .card-box{background:#db4821;border-radius:20rpx;max-height:604rpx;padding:23rpx 0 0;width:590rpx}.giftBag .gift-mid .card-box .candItem{height:151rpx;margin:auto;position:relative;width:546rpx}.giftBag .gift-mid .card-box .candItem:not(:nth-last-child(2))::after{background-image:linear-gradient(90deg,#af9060,#af9060 50%,#fffbe9 0);background-repeat:repeat-x;background-size:12rpx 2rpx;bottom:-2rpx;content:"";height:2px;left:14rpx;position:absolute;width:519rpx}.giftBag .gift-mid .card-box .candItem .it-img1,.giftBag .gift-mid .card-box .candItem .it-img2{height:151rpx;width:546rpx}.giftBag .gift-mid .card-box .candItem .it-img3{height:151rpx;transform:rotate(180deg);width:546rpx}.giftBag .gift-mid .card-box .item-card-box{display:-webkit-flex;display:flex;height:151rpx;justify-content:space-between;left:0;position:absolute;top:0;width:546rpx}.giftBag .gift-mid .card-box .item-card-box .left{display:-webkit-flex;display:flex;margin-left:23rpx}.giftBag .gift-mid .card-box .item-card-box .left image{background:#af9060;border-radius:10rpx;height:104rpx;margin-top:23rpx;width:104rpx}.giftBag .gift-mid .card-box .item-card-box .left .info{display:-webkit-flex;display:flex;flex-direction:column;height:90rpx;justify-content:space-between;margin-left:13rpx;margin-top:30rpx;width:270rpx}.giftBag .gift-mid .card-box .item-card-box .left .info .name{color:#282828;font-size:24rpx;font-weight:500;line-height:26rpx}.giftBag .gift-mid .card-box .item-card-box .left .info .time{color:#8b8b8b;font-size:16rpx;line-height:16rpx}.giftBag .gift-mid .card-box .item-card-box .right{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:90rpx;justify-content:space-between;margin-right:40rpx;margin-top:30rpx;width:547rpx}.giftBag .gift-mid .card-box .item-card-box .right .price{color:#ff4848;font-size:42rpx;font-weight:500;line-height:42rpx}.giftBag .gift-mid .card-box .item-card-box .right .tips{color:#8b8b8b;font-size:16rpx;line-height:16rpx}.giftBag .gift-mid .card-box .candItem1{background:#fffbe9;border-radius:10rpx;display:-webkit-flex;display:flex;height:150rpx;justify-content:space-between;margin:auto;position:relative;width:544rpx}.giftBag .gift-mid .giftBag-bottom-img{bottom:-5rpx;height:251rpx;left:-7rpx;position:absolute;width:643rpx}.giftBag .gift-mid .giftBag-but{background:linear-gradient(180deg,#fff6e9,#ffab73);border-radius:40rpx;bottom:65rpx;box-shadow:0 4rpx 8rpx 0 rgba(87,19,0,.4);color:#e52121;font-size:30rpx;font-weight:500;height:80rpx;left:135rpx;line-height:80rpx;position:absolute;text-align:center;width:360rpx}.giftBag .gift-mid .box-tip{bottom:20rpx;color:#ffc7aa;font-size:24rpx;left:-5rpx;position:absolute;text-align:center;width:100%} .u-mode-center-box{background-color:initial!important}.red-packets-Box{height:100%;left:0;pointer-events:none;position:fixed;top:0;width:100%;z-index:200}.red-packets-Box .red-box{height:100%;pointer-events:auto;position:fixed;width:100%}.red-packets-Box .red-box .red-box-imgBox,.red-packets-Box .red-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center}.red-packets-Box .red-box .red-box-imgBox{position:relative}.red-packets-Box .red-box .red-box-imgBox .red-top{height:261rpx;margin-bottom:-75rpx;margin-left:5rpx;opacity:0;position:relative;width:522rpx;z-index:205}.red-packets-Box .red-box .red-box-imgBox .red-bottom{height:365rpx;opacity:0;position:relative;width:646rpx;z-index:205}.red-packets-Box .red-box .red-box-imgBox .red-img{height:495rpx;position:absolute;width:552rpx;z-index:210}.red-packets-Box .red-box .red-box-imgBox .red-img1{height:321rpx;margin-bottom:50rpx;margin-left:10rpx;opacity:0;position:absolute;width:457rpx;z-index:201}.red-packets-Box .red-box .red-box-imgBox .red-img1-1{height:321rpx;margin-bottom:50rpx;margin-left:10rpx;opacity:0;position:absolute;width:129rpx;z-index:201}.red-packets-Box .red-box .red-box-imgBox .red-img1-2{height:321rpx;margin-bottom:50rpx;margin-left:10rpx;opacity:0;position:absolute;width:300rpx;z-index:201}.red-packets-Box .red-box .red-box-imgBox .red-img1-3{height:321rpx;margin-bottom:50rpx;margin-left:10rpx;opacity:0;position:absolute;width:457rpx;z-index:201}.red-packets-Box .red-box .red-box-imgBox .red-img2{height:463rpx;opacity:0;position:absolute;width:540rpx;z-index:209}.red-packets-Box .red-box .red-box-imgBox .red-img3{height:275rpx;opacity:0;position:absolute;width:558rpx;z-index:209}.red-packets-Box .red-box .red-box-imgBox .red-name{bottom:-50rpx;color:#fff;font-size:30rpx;height:85rpx;letter-spacing:10rpx;padding:30rpx;position:absolute;text-align:center;text-shadow:0 0 1rpx #ffe2cb,1rpx 0 2rpx #ffe2cb,-1rpx 0 2rpx #ffe2cb,1rpx 0 5rpx #ffe2cb,-1rpx 0 10rpx #ffe2cb;width:100%}@-webkit-keyframes zy-data-v-90140ccc{10%{transform:rotate(15deg)}20%{transform:rotate(-10deg)}30%{transform:rotate(5deg)}40%{transform:rotate(-5deg)}100%,50%{transform:rotate(0deg)}}@keyframes zy-data-v-90140ccc{10%{transform:rotate(15deg)}20%{transform:rotate(-10deg)}30%{transform:rotate(5deg)}40%{transform:rotate(-5deg)}100%,50%{transform:rotate(0deg)}}.red-packets-Box .a0{animation:zy-data-v-90140ccc 2.68s linear infinite}.red-packets-Box .a1{animation-duration:1s;animation-fill-mode:both;animation-iteration-count:1;animation-name:start-data-v-90140ccc;transform-origin:center center}.red-packets-Box .a2{animation-duration:.5s;animation-fill-mode:both;animation-iteration-count:infinite;animation-name:upAnimation-data-v-90140ccc;animation-timing-function:cubic-bezier(.57,.25,.34,.88);transform-origin:center center}.red-packets-Box .a3{animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open-data-v-90140ccc;animation-timing-function:ease-out;transform-origin:center center}.red-packets-Box .a4{animation-duration:1s;animation-fill-mode:both;animation-iteration-count:1;animation-name:openOver-data-v-90140ccc;animation-timing-function:ease-out;transform-origin:center center}.red-packets-Box .a31{animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open1-data-v-90140ccc;animation-timing-function:ease-out;transform-origin:center center}.red-packets-Box .a32s{animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open2s-data-v-90140ccc;animation-timing-function:linear}.red-packets-Box .a32m,.red-packets-Box .a32s{animation-duration:1s;transform-origin:center center}.red-packets-Box .a32m{animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open2m-data-v-90140ccc;animation-timing-function:linear}.red-packets-Box .a32l{animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open2l-data-v-90140ccc;animation-timing-function:linear;transform-origin:center center}.red-packets-Box .a33{animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open3-data-v-90140ccc;animation-timing-function:ease-out}.red-packets-Box .a33,.red-packets-Box .a34{animation-duration:1s;transform-origin:center center}.red-packets-Box .a34{animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open4-data-v-90140ccc;animation-timing-function:ease-out}@-webkit-keyframes openOver-data-v-90140ccc{0%{opacity:1}100%{opacity:0}}@keyframes openOver-data-v-90140ccc{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes start-data-v-90140ccc{0%{transform:scale(1.2) translate(2rpx,2rpx)}3%{transform:scale(1.15) translate(0rpx)}5%{transform:scale(1.1) translate(-2rpx,-2rpx)}10%{transform:scale(1.05) translate(2rpx,2rpx)}15%{transform:scale(1) translate(-2rpx,-2rpx)}20%{transform:scale(.95) translate(2rpx,2rpx)}25%{transform:scale(.9) translate(-2rpx,-2rpx)}30%{transform:scale(.86) translate(2rpx,2rpx)}35%{transform:scale(.81) translate(-2rpx,-2rpx)}40%{transform:scale(.78) translate(2rpx,2rpx)}45%{transform:scale(.75) translate(-2rpx,-2rpx)}50%{transform:scale(.74) translate(2rpx,2rpx)}55%{transform:scale(.72) translate(-2rpx,-2rpx)}60%{transform:scale(.71) translate(2rpx,2rpx)}65%{transform:scale(.7) translate(-2rpx,-2rpx)}70%{transform:scale(.7) translate(2rpx,2rpx)}75%{transform:scale(.7) translate(-2rpx,-2rpx)}80%{transform:scale(.7) translate(2rpx,2rpx)}85%{transform:scale(.7) translate(-2rpx,-2rpx)}90%{transform:scale(.7) translate(-2rpx,-2rpx)}95%{transform:scale(.7) translate(2rpx,2rpx)}100%{transform:scale(.7) translate(2rpx,2rpx)}}@keyframes start-data-v-90140ccc{0%{transform:scale(1.2) translate(2rpx,2rpx)}3%{transform:scale(1.15) translate(0rpx)}5%{transform:scale(1.1) translate(-2rpx,-2rpx)}10%{transform:scale(1.05) translate(2rpx,2rpx)}15%{transform:scale(1) translate(-2rpx,-2rpx)}20%{transform:scale(.95) translate(2rpx,2rpx)}25%{transform:scale(.9) translate(-2rpx,-2rpx)}30%{transform:scale(.86) translate(2rpx,2rpx)}35%{transform:scale(.81) translate(-2rpx,-2rpx)}40%{transform:scale(.78) translate(2rpx,2rpx)}45%{transform:scale(.75) translate(-2rpx,-2rpx)}50%{transform:scale(.74) translate(2rpx,2rpx)}55%{transform:scale(.72) translate(-2rpx,-2rpx)}60%{transform:scale(.71) translate(2rpx,2rpx)}65%{transform:scale(.7) translate(-2rpx,-2rpx)}70%{transform:scale(.7) translate(2rpx,2rpx)}75%{transform:scale(.7) translate(-2rpx,-2rpx)}80%{transform:scale(.7) translate(2rpx,2rpx)}85%{transform:scale(.7) translate(-2rpx,-2rpx)}90%{transform:scale(.7) translate(-2rpx,-2rpx)}95%{transform:scale(.7) translate(2rpx,2rpx)}100%{transform:scale(.7) translate(2rpx,2rpx)}}@-webkit-keyframes upAnimation-data-v-90140ccc{0%{transform:scale(.7) translate(2rpx,2rpx)}10%{transform:scale(.7) translate(-2rpx,-2rpx)}20%{transform:scale(.7) translate(2rpx,2rpx)}30%{transform:scale(.7) translate(-2rpx,-2rpx)}40%{transform:scale(.7) translate(2rpx,2px)}50%{transform:scale(.7) translate(-2rpx,-2rpx)}60%{transform:scale(.7) translate(2rpx,2rpx)}70%{transform:scale(.7) translate(-2rpx,-2rpx)}80%{transform:scale(.7) translate(2rpx,2rpx)}90%{transform:scale(.7) translate(-2rpx,-2rpx)}100%{transform:scale(.7) translate(2rpx,2rpx)}}@keyframes upAnimation-data-v-90140ccc{0%{transform:scale(.7) translate(2rpx,2rpx)}10%{transform:scale(.7) translate(-2rpx,-2rpx)}20%{transform:scale(.7) translate(2rpx,2rpx)}30%{transform:scale(.7) translate(-2rpx,-2rpx)}40%{transform:scale(.7) translate(2rpx,2px)}50%{transform:scale(.7) translate(-2rpx,-2rpx)}60%{transform:scale(.7) translate(2rpx,2rpx)}70%{transform:scale(.7) translate(-2rpx,-2rpx)}80%{transform:scale(.7) translate(2rpx,2rpx)}90%{transform:scale(.7) translate(-2rpx,-2rpx)}100%{transform:scale(.7) translate(2rpx,2rpx)}}@-webkit-keyframes open-data-v-90140ccc{0%{opacity:0;transform:scale(.7) translate(0)}1%{opacity:1;transform:scale(.7) translate(0)}100%{opacity:1;transform:scale(1.2) translateY(-250rpx)}}@keyframes open-data-v-90140ccc{0%{opacity:0;transform:scale(.7) translate(0)}1%{opacity:1;transform:scale(.7) translate(0)}100%{opacity:1;transform:scale(1.2) translateY(-250rpx)}}@-webkit-keyframes open1-data-v-90140ccc{0%{opacity:0;transform:scale(.7) translate(0)}1%{opacity:1;transform:scale(.7) translate(0)}100%{opacity:1;transform:scale(1.2) translate(0)}}@keyframes open1-data-v-90140ccc{0%{opacity:0;transform:scale(.7) translate(0)}1%{opacity:1;transform:scale(.7) translate(0)}100%{opacity:1;transform:scale(1.2) translate(0)}}@-webkit-keyframes open2s-data-v-90140ccc{0%{filter:brightness(.7);opacity:1;transform:scale(.7) translate(0)}10%{filter:brightness(.8);opacity:1}20%{filter:brightness(.9)}40%{filter:brightness(1)}60%{filter:brightness(1.1)}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@keyframes open2s-data-v-90140ccc{0%{filter:brightness(.7);opacity:1;transform:scale(.7) translate(0)}10%{filter:brightness(.8);opacity:1}20%{filter:brightness(.9)}40%{filter:brightness(1)}60%{filter:brightness(1.1)}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@-webkit-keyframes open2m-data-v-90140ccc{0%{filter:brightness(.7);opacity:0;transform:scale(.7) translate(0)}24%{opacity:0}30%{filter:brightness(.9);opacity:1}40%{filter:brightness(1)}60%{filter:brightness(1.1)}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@keyframes open2m-data-v-90140ccc{0%{filter:brightness(.7);opacity:0;transform:scale(.7) translate(0)}24%{opacity:0}30%{filter:brightness(.9);opacity:1}40%{filter:brightness(1)}60%{filter:brightness(1.1)}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@-webkit-keyframes open2l-data-v-90140ccc{0%{filter:brightness(.7);opacity:0;transform:scale(.7) translate(0)}10%{filter:brightness(.8)}20%{filter:brightness(.9)}54%{filter:brightness(1);opacity:0}60%{filter:brightness(1.1);opacity:1}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@keyframes open2l-data-v-90140ccc{0%{filter:brightness(.7);opacity:0;transform:scale(.7) translate(0)}10%{filter:brightness(.8)}20%{filter:brightness(.9)}54%{filter:brightness(1);opacity:0}60%{filter:brightness(1.1);opacity:1}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@-webkit-keyframes open3-data-v-90140ccc{0%{filter:brightness(.5);opacity:0;transform:scale(.7) translate(0)}10%{filter:brightness(1);opacity:1}20%{filter:brightness(.8)}30%{filter:brightness(1.3)}40%{filter:brightness(.8)}50%{filter:brightness(1)}60%{filter:brightness(.6)}70%{filter:brightness(1.2)}80%{filter:brightness(.8)}90%{filter:brightness(1.1)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-250rpx)}}@keyframes open3-data-v-90140ccc{0%{filter:brightness(.5);opacity:0;transform:scale(.7) translate(0)}10%{filter:brightness(1);opacity:1}20%{filter:brightness(.8)}30%{filter:brightness(1.3)}40%{filter:brightness(.8)}50%{filter:brightness(1)}60%{filter:brightness(.6)}70%{filter:brightness(1.2)}80%{filter:brightness(.8)}90%{filter:brightness(1.1)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-250rpx)}}@-webkit-keyframes open4-data-v-90140ccc{0%{filter:brightness(.8);opacity:0;transform:scale(.7) translate(0)}10%{opacity:1}20%{filter:brightness(1)}40%{filter:brightness(.8)}60%{filter:brightness(1)}80%{filter:brightness(.8)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-250rpx)}}@keyframes open4-data-v-90140ccc{0%{filter:brightness(.8);opacity:0;transform:scale(.7) translate(0)}10%{opacity:1}20%{filter:brightness(1)}40%{filter:brightness(.8)}60%{filter:brightness(1)}80%{filter:brightness(.8)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-250rpx)}}.b1{animation-duration:4s;animation-fill-mode:both;animation-iteration-count:1;animation-name:bg-data-v-90140ccc}@-webkit-keyframes bg-data-v-90140ccc{0%{background-color:rgba(0,0,0,.5)}80%{background-color:rgba(0,0,0,.9)}93%{background-color:#fff}95%{background-color:#fff}100%{background-color:initial}}@keyframes bg-data-v-90140ccc{0%{background-color:rgba(0,0,0,.5)}80%{background-color:rgba(0,0,0,.9)}93%{background-color:#fff}95%{background-color:#fff}100%{background-color:initial}}.certificate{background:#fff;min-height:200rpx;padding:40rpx;width:750rpx}.certificate .name{color:#333;font-size:32rpx;line-height:48rpx;margin-bottom:60rpx}.certificate .certificate-box .certificate-item{align-items:center;display:-webkit-flex;display:flex;height:44rpx;justify-content:space-between;margin-bottom:50rpx;width:100%}.certificate .certificate-box .certificate-item .t{color:#333;font-size:28rpx}.certificate .certificate-box .certificate-item .icon{height:44rpx;width:44rpx}.csPhone{background:#fbf8f1!important;border:2rpx solid #a17111!important;border-radius:20rpx;color:#a17111!important;font-size:24rpx}.dis{opacity:.5}.pass{height:230rpx!important;margin-top:0!important}.pass .u-phone1{width:200rpx!important}
</style>
