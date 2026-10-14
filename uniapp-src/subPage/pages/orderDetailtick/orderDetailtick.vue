<template>
<view class="" v-if="detailInfo">
    <uni-navbar class="" :homePath="$root.m0" :title="$root.f0" type="fixed"></uni-navbar>
    <view class="order-detail">
        <view :class="['orderS','',detailInfo.scenicType==1?'cs':'']" :style="'margin-bottom:'+bottomHeight+';'">
            <image class="steimg" src="https://eshopfile.zhiyousx.com/static/images/orderimg/dzf1.png" v-if="detailInfo.orderStatus==1&&detailInfo.scenicType!=1"></image>
            <image class="steimg" src="https://eshopfile.zhiyousx.com/static/images/orderimg/dcp2.png" v-if="detailInfo.orderStatus==2&&detailInfo.scenicType!=1"></image>
            <image class="steimg" src="https://eshopfile.zhiyousx.com/static/images/orderimg/ycp3.png" v-if="detailInfo.orderStatus==3&&detailInfo.scenicType!=1"></image>
            <image class="steimg" src="https://eshopfile.zhiyousx.com/static/images/orderimg/dawc5.png" v-if="detailInfo.orderStatus==5&&detailInfo.scenicType!=1"></image>
            <image class="steimg" src="https://eshopfile.zhiyousx.com/static/images/orderimg/tkz8.png" v-if="detailInfo.orderStatus==8&&detailInfo.scenicType!=1"></image>
            <image class="steimg" src="https://eshopfile.zhiyousx.com/static/images/orderimg/bftk9.png" v-if="detailInfo.orderStatus==9&&detailInfo.scenicType!=1"></image>
            <image class="steimg" src="https://eshopfile.zhiyousx.com/static/images/orderimg/tkwc10.png" v-if="detailInfo.orderStatus==10&&detailInfo.scenicType!=1"></image>
            <image class="steimg" src="https://eshopfile.zhiyousx.com/static/images/orderimg/cpsb11.png" v-if="detailInfo.orderStatus==11&&detailInfo.scenicType!=1"></image>
            <image class="steimg" src="https://eshopfile.zhiyousx.com/static/images/orderimg/ddgb12.png" v-if="detailInfo.orderStatus==12&&detailInfo.scenicType!=1"></image>
            <text class="stateTit">
                <text class="">{{$root.m1+''}}</text>
                <text class="" v-if="detailInfo.scenicType!=1&&(detailInfo.orderStatus==3||detailInfo.orderStatus==8||detailInfo.orderStatus==9||detailInfo.orderStatus==13)">
                    <text class="" v-if="detailInfo.consumeStatus==-1">（未消费）</text>
                    <text class="" v-if="detailInfo.consumeStatus==0">（部分消费）</text>
                    <text class="" v-if="detailInfo.consumeStatus==1">（已消费）</text>
                </text>
                <text class="hotelTag" v-if="detailInfo.confirmStatus==0&&detailInfo.isSpecial!=0&&detailInfo.orderStatus==2">预计2小时内确认</text>
            </text>
        </view>
    </view>
    <view class="order-line" id="order-line">
        <view class="mcName">
            <text class="">{{detailInfo.scenicName||''}}</text>
        </view>
        <view class="line-box">
            <view class="img-box">
                <image class="sceney-img" mode="aspectFill" :src="detailInfo.defaultPicUrl"></image>
            </view>
            <view class="item-top">
                <view class="busins-title">
                    <view class="ticketname">
                        <view class="over">{{ detailInfo.itemTitle }}</view>
                    </view>
                    <view class="price-num" v-if="detailInfo.scenicType!=1">
                        <view class="price-text">{{'￥'+detailInfo.price}}</view>
                        <view class="num-text">{{'×'+detailInfo.payTicketNum}}</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="sqtk-box">
            <view class="sqtk" style="padding:0 15rpx;" v-if="detailInfo.showAftersaleType==1" @click="refundDetail(detailInfo.orderId)">{{'查看'+(detailInfo.scenicType!=1?'退款':'取消')+'详情'}}</view>
        </view>
        <view class="sfMoney sfMoneyBottom" v-if="$root.g0">
            <text class="sftit">{{detailInfo.insuranceName+'：'}}</text>
            <text class="sfje" style="font-size:28rpx;color:#555555;">{{detailInfo.insuranceNum+'×￥'+detailInfo.insurancePremium}}</text>
        </view>
        <view class="sfMoney sfMoneyBottom" v-if="detailInfo.scenicType!=1">
            <text class="sftit">订单总额：</text>
            <text class="sfje" style="font-size:28rpx;color:#555555;">{{'￥'+detailInfo.orderAmount}}</text>
        </view>
        <view class="couponMoney sfMoneyBottom" v-if="detailInfo.giftCardAmount">
            <text class="left">礼品卡：</text>
            <text class="right">{{'-￥'+detailInfo.giftCardAmount}}</text>
        </view>
        <view class="couponMoney sfMoneyBottom" v-if="detailInfo.userCouponId">
            <text class="left">优惠券：</text>
            <text class="right">{{'-￥'+detailInfo.couponAmount}}</text>
        </view>
        <view class="couponMoney sfMoneyBottom" v-if="detailInfo.returnCashCouponAmount">
            <text class="left">多买优惠：</text>
            <text class="right">{{'-￥'+detailInfo.returnCashCouponAmount}}</text>
        </view>
        <view class="sfMoney" style="margin-top:0;" v-if="detailInfo.orderStatus!=1&&detailInfo.orderStatus!=12&&detailInfo.orderStatus&&detailInfo.isSpecial!=4">
            <view class=""></view>
            <view class="" v-if="detailInfo.scenicType!=1">
                <text class="sftit" style="font-size:28rpx;">实付款：</text>
                <text class="sfje" style="font-size:28rpx;">{{'￥'+(detailInfo.realPaid||0)}}</text>
            </view>
        </view>
    </view>
    <view class="rebateBox" v-if="orderBack&&detailInfo.returnCashCouponAmount==0" @click="goWealth($event)">
        <view class="rb1">{{'返￥'+brokerageIncome.income}}</view>
        <view class="rb2">
            <view class="rb2-1" v-if="brokerageIncome.status==0">{{$root.m2}}</view>
            <view class="rb2-2" v-else>{{$root.m3}}</view>
            <uni-icons class="" color="#c8c8c8" size="14" type="arrowright"></uni-icons>
        </view>
    </view>
    <view class="codeBox" v-if="detailInfo.orderStatus!=1&&detailInfo.orderStatus!=2&&detailInfo.orderStatus!=10&&detailInfo.orderStatus!=11&&detailInfo.orderStatus!=12&&detailInfo.orderStatus!=5&&detailInfo.orderStatus!=13">
        <view class="codeBox-title">{{(detailInfo.scenicType!=1?'门票':'预约')+'信息'}}</view>
        <view class="picBox">
            <view class="rypz" style="font-size:40rpx;font-weight:bold;" v-if="detailInfo.orderTicketStockVo.verifyType==2">凭身份证验证入园</view>
            <view class="rypz" style="font-weight:bold;" v-if="detailInfo.orderTicketStockVo.verifyType==3">凭短信验证码换票入园</view>
            <swiper class="swiper" :current="curDot" :style="'height:'+(detailInfo.orderTicketStockVo.verifyType!=1?'116rpx':'400rpx')+';'" v-if="detailInfo.orderTicketStockVo.verifyType!=2" @change="swiperChange($event)">
                <swiper-item class="swiper-item" :key="index" v-for="(item, index) in detailInfo.orderPeopleTicketList">
                    <view class="codeimg-b">
                        <image class="codeimg" :src="item.verifyImg" v-if="detailInfo.orderTicketStockVo.verifyType==1&&item.verifyImg"></image>
                    </view>
                </swiper-item>
            </swiper>
            <view class="" style="height:40rpx;font-size:24rpx;font-weight:400;color:#B2B2B2;line-height:24rpx;text-align:center;" v-if="detailInfo.orderTicketStockVo.verifyType==1">{{curDot+1+'/'+$root.g1}}</view>
            <view class="left-right" v-if="detailInfo.orderTicketStockVo.verifyType==1">
                <view class="left-back" @click.stop="leftImg($event)">
                    <image mode class="icon-back" src="../../static/images/orderimg/left.png"></image>
                </view>
                <view class="right-forword" @click.stop="rightImg($event)">
                    <image mode class="icon-right" src="../../static/images/orderimg/right.png"></image>
                </view>
            </view>
        </view>
        <view class="yxq" v-if="detailInfo.orderTicketStockVo.dateType==1">
            <view class="dayTit">有效期：</view>
            <view class="daybox">
                <view class="dayT1" v-if="detailInfo.orderTicketStockVo.datePeriodBegin==detailInfo.orderTicketStockVo.datePeriodEnd">{{detailInfo.orderTicketStockVo.datePeriodBegin+'当日'}}</view>
                <view class="dayT1" v-else>{{detailInfo.orderTicketStockVo.datePeriodBegin+' 至 '+detailInfo.orderTicketStockVo.datePeriodEnd}}</view>
                <view class="dayT1" v-if="detailInfo.orderTicketStockVo.dateCanUse">{{''+detailInfo.orderTicketStockVo.dateCanUse+'不可用'}}</view>
                <view class="dayT1" v-if="detailInfo.orderTicketStockVo.dateCannotUse">{{detailInfo.orderTicketStockVo.dateCannotUse+'不可用'}}</view>
            </view>
        </view>
        <view class="yxq" v-else>
            <view class="dayTit">有效期：</view>
            <view class="daybox">
                <text class="" style="padding-right:10rpx;">{{detailInfo.orderTicketStockVo.ticketUseDate}}</text>
                <text class="" v-if="detailInfo.orderTicketStockVo.ticketUseStartTime">{{''+detailInfo.orderTicketStockVo.ticketUseStartTime+'～'+detailInfo.orderTicketStockVo.ticketUseEndTime}}</text>
                <text class="" v-else>当日</text>
            </view>
        </view>
        <view class="ryfs" v-if="detailInfo.orderTicketStockVo.entranceDetail!==''&&detailInfo.orderTicketStockVo.entranceDetail!=='<p><br></p>'">
            <view class="title">{{(detailInfo.scenicType!=1?'入园':'入寺')+'方式:'}}</view>
            <view class="value">
                <u-parse class="" :html="detailInfo.orderTicketStockVo.entranceDetail" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
            </view>
        </view>
        <block v-if="detailInfo.scenicType!=1">
            <view class="codeBox-title rfzc" v-if="$root.g2">退改政策<view class="rf-tag">{{ detailInfo.refundTag }}</view>
                <view class="icon-rf" @click="showRf($event)">
                    <image mode :class="['img','',showMore==1?'show':'']" src="https://eshopfile.zhiyousx.com/2023071717371008331.png"></image>
                </view>
            </view>
            <view :class="['table','',$root.g4==0?'borderNone':'']" v-if="$root.g3">
                <view class="tr first" v-if="$root.g5">
                    <view class="td" style="font-weight:bold;width:480rpx;">退款时间</view>
                    <view class="td" style="font-weight:bold;width:210rpx;">损失费用</view>
                </view>
                <view class="tr" v-if="item.timeDesc" v-for="(item, __i0__) in detailInfo.orderRefundFeeSnapList">
                    <view class="td" style="width:480rpx;">{{item.timeDesc||''}}</view>
                    <view class="td" style="width:210rpx;">{{item.feeDesc||''}}</view>
                </view>
                <view :class="['tr','',$root.g6==0?'borderNone':'']" v-if="detailInfo.refundStr">
                    <view :class="['td','',$root.g7==0?'borderPadding':'']" style="width:690rpx;display:block;">
                        <view class="" v-for="(it, i) in $root.l0">
                            <view class="refundItem">{{it}}</view>
                        </view>
                    </view>
                </view>
            </view>
        </block>
    </view>
    <view class="community">
        <image class="community-box" mode="widthFix" :showMenuByLongpress="true" :src="detailInfo.communityUrl" v-if="detailInfo.communityUrl"></image>
    </view>
    <view class="hotel-box" v-if="detailInfo.isSpecial==1||detailInfo.isSpecial==2||detailInfo.subscribeId&&detailInfo.subscribeType==1">
        <view class="" v-if="detailInfo.isSpecial==1">
            <view class="hotel-title">酒店信息</view>
            <view class="hotel-list-box">
                <view class="item">
                    <text class="title">住离日历：</text>
                    <text class="value">{{detailInfo.startHotelDate+' 至 '+detailInfo.endHotelDate+'共一晚'}}</text>
                </view>
                <view class="item">
                    <view class="title">入住流程：</view>
                    <view class="valueP">
                        <u-parse class=" vue-ref" ref="article" :html="detailInfo.moveIntoInstructions" :lazyLoad="true" style="text-align:justify;" :tagStyle="parseStyle" :vueSlots="['default']">
                            <text class="" style="display:inline-block;"></text>
                        </u-parse>
                    </view>
                </view>
            </view>
        </view>
        <view class="" v-if="detailInfo.isSpecial==2&&(detailInfo.projectInfoDtoList&&detailInfo.projectInfoDtoList[0]||detailInfo.projectRemarks)">
            <view class="hotel-title">详细信息</view>
            <view class="hotel-list-box">
                <view class="item" v-for="(item, __i1__) in detailInfo.projectInfoDtoList">
                    <text class="title">{{item.projectName+'：'}}</text>
                    <text class="value">{{item.projectText}}</text>
                </view>
                <view class="item" v-if="detailInfo.projectRemarks">
                    <view class="title">使用说明：</view>
                    <view class="valueP">
                        <u-parse class=" vue-ref" ref="article" :html="detailInfo.projectRemarks" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
                    </view>
                </view>
            </view>
        </view>
        <view class="" v-if="detailInfo.subscribeId&&detailInfo.subscribeType==1">
            <view class="hotel-title">
                <view class="">雪柜信息</view>
                <view class="yuyue" @click="toSnowOrder($event)">查看预约订单<image mode class="img" src="https://eshopfile.zhiyousx.com/images/snow/snowGear09.png"></image>
                </view>
            </view>
            <view class="hotel-table">
                <view class="hotel-th th">
                    <view class="t">游客信息</view>
                    <view class="t">柜号</view>
                    <view class="t">激活码</view>
                </view>
                <view class="d-table">
                    <view class="d-tr" :key="index" v-for="(item, index) in detailInfo.snowLockersVo.peopleLockersVoList">
                        <view class="d-td" v-if="detailInfo.subscribeStatus==2||detailInfo.subscribeStatus==4">
                            <view class="d-table tableType">
                                <view class="d-tr">
                                    <view class="d-td tableType" style="width:33.3%;">{{'预约人'+index+1+'bb'}}</view>
                                    <view class="d-td tableType border-left color">已取消</view>
                                </view>
                            </view>
                        </view>
                        <block v-else>
                            <view class="d-td" v-if="detailInfo.subscribeStatus==3">
                                <view class="d-table tableType">
                                    <view class="d-tr">
                                        <view class="d-td tableType" style="width:33.3%;">{{'预约人'+index+1+''}}</view>
                                        <view class="d-td tableType border-left color">已完成</view>
                                    </view>
                                </view>
                            </view>
                            <view class="d-td" v-else>
                                <view class="d-table" v-if="item.lockersNo&&item.lockersPassword">
                                    <view class="d-tr">
                                        <view class="d-td tableType" style="width:33.3%;">{{'预约人'+index+1}}</view>
                                        <view class="d-td tableType border-left">{{item.lockersNo}}</view>
                                        <view class="d-td tableType border-left">{{item.lockersPassword}}</view>
                                    </view>
                                </view>
                                <view class="d-table tableType" v-else>
                                    <view class="d-tr">
                                        <view class="d-td tableType" style="width:33.3%;">{{'预约人'+index+1+'aa'}}</view>
                                        <view class="d-td tableType border-left color" v-if="detailInfo.subscribeStatus==0">待入柜</view>
                                        <view class="d-td tableType border-left color" v-else>请联系服务台获取</view>
                                    </view>
                                </view>
                            </view>
                        </block>
                    </view>
                </view>
            </view>
            <view class="hotel-list-box">
                <view class="item">
                    <text class="title">预计到达：</text>
                    <text class="value">{{detailInfo.snowLockersVo.subscribeTime}}</text>
                </view>
                <view class="item">
                    <view class="title">使用须知：</view>
                    <view class="valueP">
                        <rich-text :nodes="detailInfo.snowLockersVo.useMemo"></rich-text>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="passenger-box">
        <view class="passenger-title">游客信息</view>
        <view class="passenger-list-box">
            <view class="item" :key="index" v-for="(item, index) in detailInfo.visitorInfoVos">
                <view class="sub-item name" v-if="item.name">
                    <text class="title">{{'游客'+index+1+'姓名:'}}</text>
                    <text class="value">{{item.name}}</text>
                </view>
                <view class="sub-item phone" v-if="item.telephone&&index==0">
                    <text class="title">手机号码:</text>
                    <text class="value">{{item.telephone}}</text>
                    <image class="" src="https://eshopfile.zhiyousx.com/168492134271144514.png" v-if="!item.isClosePhone"></image>
                    <image class="" src="https://eshopfile.zhiyousx.com/168492259404793104.png" v-if="item.isClosePhone"></image>
                </view>
                <view class="sub-item id-num" v-if="item.idCard">
                    <text class="title">证件号码:</text>
                    <text class="value">{{item.idCard}}</text>
                    <image class="" src="https://eshopfile.zhiyousx.com/168492134271144514.png" v-if="!item.isCloseId"></image>
                    <image class="" src="https://eshopfile.zhiyousx.com/168492259404793104.png" v-if="item.isCloseId"></image>
                </view>
            </view>
        </view>
        <view class="passenger-title">订单信息</view>
        <view class="passenger-list-box">
            <view class="item">
                <view class="sub-item name">
                    <text class="title">{{(detailInfo.scenicType!=1?'订单':'预约')+'编号:'}}</text>
                    <text class="value">{{detailInfo.orderNo}}</text>
                    <text class="btn" style="width:90rpx;height:40rpx;background:#F4F4F4;border-radius:20rpx;line-height:40rpx;font-size:20rpx;color:#2A2A2A;text-align:center;display:inline-block;margin-left:35rpx;" @click="copyOrderNo(detailInfo.orderNo)">复制</text>
                </view>
                <view class="sub-item phone">
                    <text class="title">下单时间:</text>
                    <text class="value">{{detailInfo.createTime}}</text>
                </view>
                <view class="sub-item phone" v-if="detailInfo.scenicType!=1&&detailInfo.orderStatus!=1&&detailInfo.orderStatus!=12">
                    <text class="title">支付方式:</text>
                    <text class="value">{{$root.m4}}</text>
                </view>
                <view class="sub-item phone" v-if="detailInfo.scenicType!=1&&detailInfo.orderStatus!=1&&detailInfo.orderStatus!=12">
                    <text class="title">支付时间:</text>
                    <text class="value">{{detailInfo.payTime||''}}</text>
                </view>
            </view>
        </view>
        <view class="passenger-title" v-if="$root.g8>0">投保信息</view>
        <view class="passenger-list-box" v-if="$root.g9>0">
            <view class="item" :key="index" v-for="(item, index) in insuranceInformation">
                <view class="sub-item name">
                    <text class="title">保单号:</text>
                    <view class="guarantee jus">
                        <view class="value">{{item.policyNo}}</view>
                        <view class="baodan">
                            <view class="dian">电子保单</view>
                            <image class="img" src="https://eshopfile.zhiyousx.com/170704610033552078.png"></image>
                        </view>
                    </view>
                </view>
                <view class="sub-item name">
                    <text class="title">被保险人:</text>
                    <view class="guarantee jus">
                        <view class="value">{{item.insurancePersonName}}</view>
                    </view>
                </view>
                <view class="sub-item name">
                    <text class="title">手机号:</text>
                    <view class="guarantee">
                        <view class="value">{{item.insurancePersonMobile}}</view>
                        <image class="" src="https://eshopfile.zhiyousx.com/168492134271144514.png" style="width:40rpx;height:40rpx;margin-left:15rpx;" v-if="!item.isCloseTel"></image>
                        <image class="" src="https://eshopfile.zhiyousx.com/168492259404793104.png" style="width:40rpx;height:40rpx;margin-left:15rpx;" v-if="item.isCloseTel"></image>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="item-footer" v-if="detailInfo.orderStatus==1||detailInfo.orderStatus==5||detailInfo.insuranceCanRefundNum>0||(detailInfo.orderStatus==2||detailInfo.orderStatus===3||detailInfo.orderStatus==9||detailInfo.orderStatus==13)&&detailInfo.orderTicketStockVo.refundRuleType!=0&&detailInfo.consumeStatus!=1">
        <view class="repeat-buy-btn" v-if="detailInfo.insuranceCanRefundNum>0" @click="surrender($event)">申请退保</view>
        <view class="repeat-buy-btn" v-if="detailInfo.orderStatus==5" @click="goTicket(detailInfo.itemId)">{{'再次'+(detailInfo.skuItemType==1?'预约':'预订')}}</view>
        <view class="repeat-buy-btn" v-if="detailInfo.orderStatus==1" @click="openPopup(detailInfo.orderId)">取消订单</view>
        <view class="repeat-buy-btn" v-if="detailInfo.confirmStatus==0&&detailInfo.isSpecial!=0&&detailInfo.orderStatus==2" @click="openPopup(detailInfo.orderId)">取消订单</view>
        <view class="pay-btn" v-if="detailInfo.orderStatus===1" @click="goPay(detailInfo.orderId)">付款</view>
        <view :class="['repeat-buy-btn','',detailInfo.refundFeeDTO&&detailInfo.refundFeeDTO.feeExceed?'noRfamount':'']" v-if="(detailInfo.orderStatus===3||detailInfo.orderStatus==9||detailInfo.orderStatus==13)&&detailInfo.orderTicketStockVo.refundRuleType!=0&&detailInfo.consumeStatus!=1&&(detailInfo.isSpecial==0||detailInfo.isSpecial==3||detailInfo.isSpecial==4)" @click="orderRefund(detailInfo)">{{detailInfo.scenicType!=1?'申请退款':'取消预约'}}</view>
        <view class="repeat-buy-btn" v-if="!detailInfo.subscribeId&&detailInfo.subscribeType==1&&(detailInfo.orderStatus==2||detailInfo.orderStatus==3)" @click="jumpToGear(detailInfo.orderId)">预约雪具</view>
    </view>
    <uni-popup class=" vue-ref" ref="popup" type="bottom" :vueSlots="['default']">
        <view class="popup">
            <view class="popTitle">
                <text class="titleText">取消订单</text>
                <uni-icons class="" color="#c1c1c1" size="20" type="clear" @click="closePopup()"></uni-icons>
            </view>
            <view class="popMain">
                <radio-group class="" @change="radioChange($event)">
                    <view class="" :key="value" v-for="(item, index) in causeList">
                        <label class="radioItem">
                            <radio :checked="index===causeIdx" class="radioIcon" color="#ff4643" :value="item.value"></radio>
                            <text class="">{{item.name}}</text>
                        </label>
                    </view>
                </radio-group>
            </view>
            <button class="popupBtn" @click="cancelOrder(detailInfo.orderId)">确定</button>
        </view>
    </uni-popup>
    <u-popup borderRadius="20" class="" mode="bottom" :value="showSurrender" :vueSlots="['default']" @input="showSurrender = $event">
        <view class="surrender-box">
            <view class="title-style">
                <view class="name">申请退保</view>
                <image class="" src="https://eshopfile.zhiyousx.com/169345070139905990.png" style="width:40rpx;height:40rpx;" @click="e0($event)"></image>
            </view>
            <view class="content">
                <view class="item">
                    <view class="tui">退保数量</view>
                    <view class="">{{detailInfo.insuranceNum}}</view>
                </view>
                <view class="item">
                    <view class="tui">退保金额</view>
                    <view class="num">{{'￥'+$root.g10}}</view>
                </view>
                <view class="remok">如有其他疑问，请拨打电话4000292296</view>
                <view class="btn-style">
                    <view class="btn" @click="apply($event)">申请退保</view>
                </view>
            </view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" mode="center" :value="showbao" :vueSlots="['default']" @input="showbao = $event">
        <view class="hasnotice">
            <view class="title">电子保单</view>
            <view class="scontent">
                <view class="" style="word-wrap:break-word;width:500rpx;">请在中国人保财险微信公众号查询、下载电子保单，或复制链接前往浏览器下载</view>
                <view class="elbox">
                    <view class="btn" style="width:200rpx;height:60rpx;background:#F4F4F4;border-radius:50rpx;line-height:60rpx;font-size:26rpx;color:#2A2A2A;text-align:center;display:inline-block;margin-top:20rpx;" @click="copyOrderNo(baoUrl)">复制链接</view>
                </view>
            </view>
            <view class="close" @click="e1($event)">知道了</view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" mode="center" :value="showElectronic" :vueSlots="['default']" @input="showElectronic = $event">
        <view class="hasnotice">
            <view class="title">电子发票</view>
            <view class="scontent">
                <view class="" style="word-wrap:break-word;width:500rpx;">请在中国人保财险微信公众号查询、下载电子发票，或复制链接前往浏览器下载</view>
                <view class="elbox">
                    <view class="btn" style="width:200rpx;height:60rpx;background:#F4F4F4;border-radius:50rpx;line-height:60rpx;font-size:26rpx;color:#2A2A2A;text-align:center;display:inline-block;margin-top:20rpx;" @click="copyOrderNo(electronicUrl)">复制链接</view>
                </view>
            </view>
            <view class="close" @click="e2($event)">知道了</view>
        </view>
    </u-popup>
    <view class="gifBag-box" v-if="showBag" @click="showGiftBagPop($event)">
        <view class="icon-box">
            <image mode class="" src="https://eshopfile.zhiyousx.com/166357520039468414.png"></image>
            <view class="t">领福利</view>
        </view>
    </view>
    <u-popup class=" vue-ref" ref="uPopup" :maskCloseAble="true" mode="center" :value="showGiftBag" :vueSlots="['default']" @input="showGiftBag = $event">
        <view class="giftBag">
            <image class="giftBag-img" mode="widthFix" :src="giftBagData.image"></image>
            <view class="gift-mid">
                <view class="gift-title">{{ giftBagData.desc }}</view>
                <scroll-view class="card-box" :scrollY="true" :style="'height:'+(gbCl>3?'604rpx':gbCl==1?'250rpx':gbCl*151+'rpx')+';'">
                    <view :class="['',gbCl==1?'candItem1':'',gbCl>1?'candItem':'']" v-for="(it, i) in $root.l1">
                        <image mode class="it-img1" src="https://eshopfile.zhiyousx.com/166384545957301610.png" v-if="gbCl>1&&i==0"></image>
                        <image mode class="it-img2" src="https://eshopfile.zhiyousx.com/166384386610789834.png" v-if="gbCl>1&&i>0&&i<gbCl-1"></image>
                        <image mode class="it-img3" src="https://eshopfile.zhiyousx.com/166384545957301610.png" v-if="gbCl>1&&gbCl-i==1"></image>
                        <view class="item-card-box">
                            <view class="left">
                                <image class="" mode="aspectFill" :src="it.couponImage"></image>
                                <view class="info">
                                    <view class="name">{{ it.couponName }}</view>
                                    <view class="time">{{ it.f1+' - '+it.f2 }}</view>
                                </view>
                            </view>
                            <view class="right">
                                <view class="price" v-if="it.type==3">0<text class="" style="font-size:20rpx;color:#FF4848;">元购</text>
                                </view>
                                <view class="price" v-else>
                                    <text class="" style="font-size:20rpx;color:#FF4848;">￥</text>{{it.quota+''}}</view>
                                <view class="tips" v-if="it.type==2&&it.threshold==0">无门槛</view>
                                <view class="tips" v-if="it.type==1&&it.threshold>0">{{'满'+it.threshold+'元可用'}}</view>
                                <view class="tips" v-if="it.type==3">{{'可抵'+(it.deduction||1)+'张'}}</view>
                            </view>
                        </view>
                    </view>
                    <view class="" style="height:98rpx;" v-if="gbCl>1"></view>
                </scroll-view>
                <image mode class="giftBag-bottom-img" src="/static/captured/c28c4c6cd2db0904.png"></image>
                <view class="giftBag-but" @click="receiveGiftBag()">立即领取</view>
            </view>
        </view>
    </u-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              showMore: 0,
              showBag: !1,
              page: 1,
              detailInfo: "",
              orderObj: "",
              brokerageIncome: {},
              causeIdx: 0,
              causeList: [{
                value: "0",
                name: "我不想买了"
              }, {
                value: "1",
                name: "信息填写错误，请重拍"
              }, {
                value: "2",
                name: "商品无货"
              }, {
                value: "3",
                name: "其他原因"
              }],
              curDot: 0,
              orderBack: !1,
              isorderActive: 0,
              bottomHeight: 0,
              payTime: {
                minutes: "00",
                second: "00"
              },
              parseStyle: {
                p: "word-break: break-all;color: #585858;line-height: 35rpx"
              },
              parseStyle1: {
                p: "word-break: break-all;color: #585858"
              },
              unit: 0,
              showGiftBag: !1,
              giftBagData: "",
              gbCl: 0,
              timer: null,
              insuranceInformation: [],
              showSurrender: !1,
              showElectronic: !1,
              electronicUrl: "",
              baoUrl: "",
              showbao: !1
            }
          },
          onPullDownRefresh: function() {
            this.timer && (clearTimeout(this.timer), this.timer = null), this.pageLoad(), this.getOrderBrokerageIncome()
          },
          onLoad: function(t) {
            t.orderId && (this.orderId = t.orderId);
            var o = this;
            this.timer && (clearTimeout(this.timer), this.timer = null), uni.getSystemInfo({
              success: function(e) {
                o.unit = 750 / e.windowWidth
              }
            })
          },
          onUnload: function() {
            this.timer && (clearTimeout(this.timer), this.timer = null), clearInterval(this._payTimeTimer)
          },
          onShow: function() {
            this.showBag = !1, this.showGiftBag = !1, this.pageLoad(), this.orderBack = !1, this.getOrderBrokerageIncome()
          },
          filters: {
            toFixed2: function(e) {
              return e ? Number(e).toFixed(2) : "0.00"
            },
            timeFormat: function(e) {
              return e.split(" ")[0].replace(/-/g, ".")
            },
            realCardName: function(e) {
              return {
                0: "身份证",
                1: "护照",
                2: "证件号码",
                3: "证件号码",
                4: "台胞证",
                5: "港澳通行证",
                6: "证件号码",
                7: "证件号码",
                8: "军人证"
              } [e]
            },
            refundRuleTypeFilter: function(e) {
              return {
                0: "不可退",
                1: "随时退",
                2: "条件退",
                3: "条件退"
              } [e]
            },
            titleFilter: function(e) {
              return e ? 1 == e.scenicType ? "预约订单详情" : "门票订单详情" : ""
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            showGiftBagPop: function() {
              this.showGiftBag = !0
            },
            startTimer: function() {
              var e = this.detailInfo.countdownTime.split(":"),
                t = 60 * Number(e[0]) + Number(e[1]);
              this._secondNum = t, this._payTimeTimer = setInterval(this.daoJiShi, 1e3)
            },
            apply: function() {
              var t = this,
                o = {
                  orderId: this.orderId,
                  refundAmount: this.$util.multiply(this.detailInfo.insuranceNum, this.detailInfo.insurancePremium),
                  refundNum: this.detailInfo.insuranceNum
                };
              uni.showLoading({
                mask: !0
              }), this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/orderInsurance/refund", o).then((function(t) {
                1 == t.code && setTimeout((function() {
                  uni.showToast({
                    title: "保险已取消",
                    icon: "none"
                  })
                }), 300), 0 == t.code && setTimeout((function() {
                  uni.showToast({
                    title: t.msg,
                    icon: "none"
                  })
                }), 300)
              })).catch((function(e) {})).finally((function() {
                t.showSurrender = !1, setTimeout((function() {
                  t.pageLoad()
                }), 1500)
              }))
            },
            lookGuarantee: function(t) {
              var o = this;
              uni.showLoading({
                title: "加载中..."
              }), this.$uniApi.dataRequestYesLoading("GET", "order/app/v1/orderInsurance/policyInfo", {
                orderInsuranceId: t.orderInsuranceId
              }).then((function(e) {
                1 == e.code && (o.baoUrl = e.data, o.showbao = !0)
              })).catch((function(e) {})).finally((function() {
                uni.hideLoading()
              }))
            },
            lookInvoice: function(t) {
              var o = this;
              uni.showLoading({
                title: "加载中..."
              }), this.$uniApi.dataRequestYesLoading("GET", "order/app/v1/orderInsurance/invoiceInfo", {
                orderInsuranceId: t.orderInsuranceId
              }).then((function(e) {
                1 == e.code && (o.electronicUrl = e.data, o.showElectronic = !0)
              })).catch((function(e) {})).finally((function() {
                uni.hideLoading()
              }))
            },
            surrender: function() {
              this.showSurrender = !0
            },
            daoJiShi: function() {
              this._secondNum <= 0 ? (clearInterval(this._payTimeTimer), this.payTime = {
                minutes: "00",
                second: "00"
              }) : this.payTime = {
                minutes: parseInt(this._secondNum / 60),
                second: parseInt(this._secondNum % 60)
              }, this._secondNum--
            },
            swiperChange: function(e) {
              this.curDot = e.detail.current
            },
            leftImg: function() {
              var e = this.detailInfo.orderPeopleTicketList.length - 1;
              this.curDot <= 0 ? this.curDot = e : this.curDot--
            },
            rightImg: function() {
              var e = this.detailInfo.orderPeopleTicketList.length - 1;
              this.curDot >= e ? this.curDot = 0 : this.curDot++
            },
            pageLoad: function(t) {
              var o = this,
                i = this,
                r = {
                  orderId: this.orderId
                };
              t || uni.showLoading({
                title: "加载中..."
              }), this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getTicketOrderDetail", r).then((function(t) {
                if (uni.hideLoading(), uni.stopPullDownRefresh(), 1 === t.code) {
                  if (o.detailInfo = t.data, o.detailInfo.orderInsuranceList && o.detailInfo.orderInsuranceList.length > 0 && (o.insuranceInformation = o.detailInfo.orderInsuranceList.filter((function(e) {
                      return 2 == e.status
                    }))), 2 == o.detailInfo.orderStatus) {
                    i.timer = setTimeout((function() {
                      i.pageLoad(!0)
                    }), 3e4);
                    var r = getCurrentPages();
                    "/subPage/pages/orderDetailtick/orderDetailtick" != "/" + r[r.length - 1].route && i.timer && (clearTimeout(i.timer), i.timer = null)
                  }
                  o.detailInfo.orderTicketStockVo.dateCanUse && (o.detailInfo.orderTicketStockVo.dateCanUse = o.getWeekNotUse(o.detailInfo.orderTicketStockVo.dateCanUse)), 3 !== o.detailInfo.orderStatus && 9 != o.detailInfo.orderStatus && 13 != o.detailInfo.orderStatus || 0 == o.detailInfo.orderTicketStockVo.refundRuleType || 1 == o.detailInfo.consumeStatus || 0 != o.detailInfo.isSpecial && 3 != o.detailInfo.isSpecial && 4 != o.detailInfo.isSpecial ? o.showMore = 0 : o.showMore = 1
                } else o.$uni.showToast(t.msg)
              })).catch((function(t) {
                uni.showLoading(), uni.stopPullDownRefresh()
              }))
            },
            getOrderBrokerageIncome: function() {
              var t = this,
                o = {
                  orderId: this.orderId
                };
              this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/memberBrokerage/getOrderBrokerageIncome", o).then((function(o) {
                if (uni.stopPullDownRefresh(), 1 === o.code) {
                  var n = o.data;
                  !n || 1 !== n.brokerageType || 0 != n.status && 1 != n.status || (t.orderBack = !0, t.brokerageIncome = n)
                }
              })).catch((function(t) {
                uni.stopPullDownRefresh()
              }))
            },
            getWeekNotUse: function(e) {
              var t = [],
                o = e.split(","),
                n = [1, 2, 3, 4, 5, 6, 7];
              for (var i in n) {
                var r = !0;
                for (var a in o)
                  if (n[i] == o[a]) {
                    r = !1;
                    break
                  } r && t.push("周" + "一一二三四五六日".charAt(n[i]))
              }
              return t.join(",")
            },
            jumpToGear: function(e) {
              this.$navigateTo({
                url: "/subPage/pages/snowGear/snowGear?orderId=" + e
              })
            },
            goPay: function() {
              this.$navigateTo({
                url: "/subPack/pages/ticketPay/ticketPay?orderId=" + this.detailInfo.orderId + "&from=order"
              })
            },
            goTicket: function(e) {
              this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + e
              })
            },
            cancelOrder: function(e) {
              var t = this,
                o = {
                  orderId: e
                },
                n = "order/app/v1/order/ticketOrderCancel";
              0 != this.detailInfo.isSpecial && 0 == this.detailInfo.confirmStatus && 2 == this.detailInfo.orderStatus && (n = "order/app/v1/order/memberCancelSpecialTicket"), this.$uniApi.dataRequestNoLoading("GET", n, o).then((function(e) {
                1 === e.code ? (t.pageLoad(), t.$uni.showToast("订单已取消"), t.closePopup()) : t.$uni.showToast(e.msg)
              })).catch((function(e) {
                t.$uni.showToast(e.msg)
              }))
            },
            radioChange: function(e) {
              for (var t in this.causeList)
                if (this.causeList[t].value === e.target.value) {
                  this.current = t;
                  break
                }
            },
            copyOrderNo: function(e) {
              uni.setClipboardData({
                data: e,
                success: function(e) {
                  uni.showToast({
                    title: "复制成功"
                  })
                }
              })
            },
            goStore: function(e) {
              this.$navigateTo({
                url: "/subPage/pages/storeshop/storeshop?sellerId=".concat(e)
              })
            },
            orderRefund: function(e) {
              if (e.refundFeeDTO && e.refundFeeDTO.feeExceed) this.$uni.showToast("当前订单需收取100%损失费，不支持取消");
              else {
                var t = e.orderId;
                1 != e.orderTicketStockVo.isPartialRefund || -1 == e.consumeStatus ? this.$navigateTo({
                  url: "/subPack/pages/refundApply/refundApply?orderId=".concat(t, "&cs=").concat(1 == this.detailInfo.scenicType ? 1 : "")
                }) : this.$uni.showToast("该产品不支持部分退")
              }
            },
            refundDetail: function(e) {
              this.$navigateTo({
                url: "/pages/refundRecord/refundRecord?orderId=".concat(e, "&cs=").concat(1 == this.detailInfo.scenicType ? 1 : "")
              })
            },
            delivery: function(e) {
              var t = this,
                o = {
                  orderId: e.orderId,
                  sellerId: e.sellerId
                };
              this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/order/remindDeliver", o).then((function(e) {
                1 === e.code ? t.$refs.uToast.show({
                  title: "已提醒买家发货",
                  type: "success",
                  position: "bottom"
                }) : t.$uni.showToast(e.msg)
              })).catch((function(e) {
                t.$uni.showToast(e.msg)
              }))
            },
            delOrder: function(t) {
              var o = this;
              uni.showModal({
                title: "删除",
                content: "您确定删除该订单吗？",
                confirmColor: "#ff4643",
                success: function(e) {
                  e.confirm && o.$uniApi.getRequestNoLoading("DELETE", "order/app/v1/order?ids=".concat(t.orderId)).then((function(e) {
                    1 === e.code ? (o.orderList.forEach((function(e, n) {
                      e.orderId === t.orderId && o.orderList.splice(n, 1)
                    })), o.$refs.uToast.show({
                      title: "已删除",
                      type: "success",
                      position: "bottom"
                    })) : o.$uni.showToast(e.msg)
                  })).catch((function(e) {
                    o.$uni.showToast(e.msg)
                  }))
                }
              })
            },
            openPopup: function(e) {
              this.orderObj = e, this.$refs.popup.open()
            },
            closePopup: function() {
              this.orderObj = "", this.$refs.popup.close()
            },
            orderStatusTick: function(e) {
              var t = 1 == this.detailInfo.scenicType;
              return 0 === e ? "新提交" : 1 === e ? "待支付" : 2 === e ? 0 == this.detailInfo.confirmStatus && 0 != this.detailInfo.isSpecial ? "待确认" : "出票中" : 3 === e ? t ? "待入寺" : "待游玩" : 5 === e ? t ? "已参观" : "订单完成" : 8 === e ? t ? "审核中" : "退款审核中" : 9 === e ? t ? "部分取消" : "部分退款" : 10 === e ? t ? "已取消" : "退款完成" : 11 === e ? t ? "预约失败" : "出票失败" : 12 === e ? t ? "已关闭" : "订单关闭" : 13 === e ? "已过期" : void 0
            },
            statusVal: function(e) {
              return 0 === e ? "进行中" : 1 === e ? "已完成" : 2 === e ? "已失败" : void 0
            },
            orderPayChannel: function(e) {
              return "alipay" == e || "alipay_mini" == e ? "支付宝" : "wx" === e || "wxapp" === e || "xy_wx_mini" === e ? "微信" : "pos" == e ? "线下POS机" : "unionpay" == e ? "银联在线" : "tenpay" == e ? "财付通" : "99bill" == e ? "快钱" : void 0
            },
            goWealth: function() {
              var e = "/subPage/pages/wealth/wealth";
              this.$util.isLogin(e) && this.$navigateTo({
                url: e
              })
            },
            toSnowOrder: function() {
              var e = "/subPage/pages/snowOrder/snowOrder?subscribeId=" + this.detailInfo.snowLockersVo.subscribeId;
              this.$util.isLogin(e) && this.$navigateTo({
                url: e
              })
            },
            openMini: function(e) {
              n.openEmbeddedMiniProgram({
                appId: e
              })
            },
            getGiftBagForOrder: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftBag/getGiftBagForOrder", {
                itemId: this.detailInfo.itemId,
                orderId: this.orderId
              }).then((function(t) {
                1 === t.code ? t.data && t.data.giftBagCouponList[0] && (e.giftBagData = t.data, e.gbCl = e.giftBagData.giftBagCouponList.length, e.showBag = !0) : e.$uni.showToast(t.msg)
              }))
            },
            receiveGiftBag: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftBag/receive/" + this.giftBagData.giftBagId + "?orderId=" + this.orderId).then((function(t) {
                1 === t.code ? (e.$uni.showToast(t.data), e.showGiftBag = !1) : e.$uni.showToast(t.msg)
              }))
            },
            brText: function(e) {
              if (e) {
                var t = e.split("#**#");
                return t.pop().split("</p>").forEach((function(e, o) {
                  if (e) {
                    var n = (e = e.split("<p>").join("")).match(/\<.*?\>/g),
                      i = e.match(/[\r\n]/g),
                      r = n || i;
                    r && r[0] && r.forEach((function(t) {
                      e = e.replaceAll(t, "")
                    })), t.push(e)
                  }
                })), t
              }
            },
            showRf: function() {
              this.showMore = 0 == this.showMore ? 1 : 0
            },
            queryPhone: function(e) {
              this.$uniApi.dataRequestNoLoading("POST", "base/v1/common/getAppPhone", {
                phone: e.enTelephone
              }).then((function(t) {
                e.beforePhone = e.telephone, e.isClosePhone = !0, e.telephone = t.data
              }))
            },
            queryTel: function(e) {
              this.$uniApi.dataRequestNoLoading("POST", "base/v1/common/getAppPhone", {
                phone: e.enInsurancePersonMobile
              }).then((function(t) {
                e.beforeTel = e.insurancePersonMobile, e.isCloseTel = !0, e.insurancePersonMobile = t.data
              }))
            },
            closeTel: function(e) {
              e.insurancePersonMobile = e.beforeTel, e.isCloseTel = !1
            },
            closePhone: function(e) {
              e.telephone = e.beforePhone, e.isClosePhone = !1
            },
            queryIdCard: function(e) {
              this.$uniApi.dataRequestNoLoading("POST", "base/v1/common/getAppIdCard", {
                idCard: e.enIdCard
              }).then((function(t) {
                e.beforeIdCard = e.idCard, e.isCloseId = !0, e.idCard = t.data
              }))
            },
            closeIdCard: function(e) {
              e.idCard = e.beforeIdCard, e.isCloseId = !1
            },
            getRefundMoney: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getRefundPriceByOrderIdAndNum", {
                num: 1,
                orderId: this.orderId
              }).then((function(t) {
                1 === t.code ? e.refundAmount = t.data : e.$uni.showToast(t.msg)
              })).catch((function(e) {}))
            },
            getHomePath: function() {
              if (this.detailInfo && 1 == this.detailInfo.scenicType) {
                var e = -1 != getApp().globalData.requestUrl.indexOf("eshop") ? "1580852981351002114" : "1580167199644012545";
                return "/pages/spotDetailNew/spotDetailNew?spotId=".concat(e)
              }
              return "/pages/index/index"
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.surrender-box{padding:40rpx}.surrender-box .title-style{display:-webkit-flex;display:flex;justify-content:space-between}.surrender-box .title-style .name{color:#333;font-size:36rpx;font-weight:400;height:52rpx;line-height:42rpx}.surrender-box .title-style .img-style{height:40rpx;width:40rpx}.surrender-box .content{margin-top:35rpx}.surrender-box .content .item{display:-webkit-flex;display:flex;justify-content:space-between;margin:30rpx 0}.surrender-box .content .item .tui{color:rgba(0,0,0,.8);font-size:28rpx;font-weight:400;height:41rpx;line-height:33rpx}.surrender-box .content .item .num{color:#ff5411}.surrender-box .content .remok{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400;height:35rpx;line-height:28rpx;margin-bottom:25rpx}.surrender-box .content .btn-style{width:750rpx}.surrender-box .content .btn-style .btn{background:linear-gradient(90deg,#fc4a9b,#ff5413);border-radius:40rpx 40rpx 40rpx 40rpx;color:#fff;height:80rpx;line-height:80rpx;text-align:center;width:690rpx}.hasnotice{background:#fff;overflow:hidden;padding:0 50rpx 48rpx 64rpx;width:640rpx}.hasnotice .title{font-size:36rpx;font-weight:700;margin:66rpx 0 36rpx;text-align:center}.hasnotice .scontent text{color:#4f4f4f;font-size:26rpx;line-height:30rpx}.hasnotice .scontent .elbox{display:-webkit-flex;display:flex;justify-content:center;width:100%}.hasnotice .scontent .loading>view,.hasnotice .scontent .loading{box-sizing:border-box;position:relative}.hasnotice .scontent .loading{color:#000;display:block;font-size:0}.hasnotice .scontent .loading.la-dark{color:#333}.hasnotice .scontent .loading>view{background-color:#000;border:0 solid #000;display:inline-block;float:none}.hasnotice .scontent .loading{height:32rpx;margin:0 auto;width:42rpx}.hasnotice .scontent .loading>view:nth-child(1){animation:ball-climbing-dot-jump .6s ease-in-out infinite;border-radius:100%;bottom:32%;height:14rpx;left:18%;position:absolute;transform-origin:center bottom;width:14rpx}.hasnotice .scontent .loading>view:not(:nth-child(1)){animation:ball-climbing-dot-steps 1.8s linear infinite;border-radius:0;height:2px;position:absolute;right:0;top:0;transform:translate(60%);width:14rpx}.hasnotice .scontent .loading>view:not(:nth-child(1)):nth-child(2){animation-delay:0ms}.hasnotice .scontent .loading>view:not(:nth-child(1)):nth-child(3){animation-delay:-.6s}.hasnotice .scontent .loading>view:not(:nth-child(1)):nth-child(4){animation-delay:-1.2s}.hasnotice .close{color:#ff5411;font-size:26rpx;margin-top:50rpx;text-align:center}.gifBag-box{position:fixed;right:14rpx;top:33%}.gifBag-box .icon-box{height:104rpx;position:relative;width:110rpx}.gifBag-box .icon-box image{height:100%;width:100%}.gifBag-box .icon-box .t{bottom:9rpx;color:#fff;font-size:24rpx;height:29rpx;position:absolute;text-align:center;text-shadow:0 2rpx 2rpx rgba(0,0,0,.25);width:100%}.order-detail{background-color:#f5f5f5;padding-bottom:10rpx}.allBottom{margin-bottom:430rpx}.orderS{align-items:center;background:linear-gradient(93deg,#fc4c66,#fe5130);display:-webkit-flex;display:flex;height:210rpx;justify-content:left;padding:0 40rpx 60rpx}.orderS.cs{background:linear-gradient(52deg,#c7b795,#c7b795)!important}.orderActive{margin-bottom:390rpx}.steimg{height:94rpx;width:104rpx}.stateTit text{color:#fff;font-size:34rpx;line-height:50rpx}.stateTit .hotelTag{font-size:24rpx;line-height:50rpx;margin-left:35rpx}.order-line{background-color:#fff;border-radius:20rpx;margin:-80rpx 20rpx 10rpx;padding:30rpx 20rpx;width:710rpx}.mcName{align-items:center;color:#333744;display:-webkit-flex;display:flex;font-size:24rpx;height:60rpx;justify-content:flex-start;padding-bottom:20rpx}.mcName image{height:25rpx;margin-right:14rpx;width:28rpx}.mcName text{margin-right:14rpx}.line-box{align-items:flex-start;display:-webkit-flex;display:flex;justify-content:left}.img-box{display:inline-block;float:left;width:194rpx}.sceney-img{border-radius:10rpx;height:150rpx;vertical-align:middle;width:150rpx}.jqdz{-webkit-box-orient:vertical;color:#aeaeae;display:-webkit-box;font-size:22rpx;overflow:hidden;text-overflow:ellipsis}.busins-title{align-content:flex-start;display:-webkit-flex;display:flex;justify-content:space-between;width:100%}.ticketname{margin-left:20rpx;overflow:hidden;text-align:left;width:360rpx}.over{line-clamp:3;-webkit-box-orient:vertical;color:#333;display:-webkit-box;font-size:28rpx;line-height:36rpx;overflow:hidden;text-overflow:-o-ellipsis-lastline;text-overflow:ellipsis}.over image{height:26rpx;margin-right:5rpx;width:53rpx}.price-num{margin-right:10rpx;text-align:right;width:90rpx}.price-num .price-text{font-size:28rpx;width:90rpx}.price-num .num-text{color:#959595;font-size:26rpx;width:90rpx}.sqtk-box{display:-webkit-flex;display:flex;justify-content:flex-end;width:100%}.sqtk-box .sqtk{border:1rpx solid #ccc;border-radius:30rpx;color:#2a2a2a;font-size:24rpx;height:60rpx;line-height:60rpx;margin:10rpx 0;text-align:center;width:180rpx}.sfMoney{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:30rpx}.sfMoneyBottom{margin-bottom:16rpx}.couponMoney{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;line-height:36rpx;margin-bottom:16rpx}.couponMoney .left{color:#6e6e6e;font-size:22rpx}.couponMoney .right{color:#f15252;font-size:24rpx}.sfMoney1{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;line-height:40rpx}.sftit{color:#6e6e6e;font-size:28rpx}.sfje{color:#f15252;font-size:28rpx}.order-detail .basic-info{background:#fff;color:hsla(0,100%,83%,.663);font-size:26rpx;margin:20rpx 0;padding:20rpx 31rpx;position:relative}.order-detail .refundBox{align-items:center;background:#fff;display:-webkit-flex;display:flex;font-size:28rpx;height:71rpx;justify-content:space-between;margin-bottom:20rpx;padding:0 30rpx}.order-detail .refundBox .arr-r{height:24rpx;width:12rpx}.coupon{line-height:1;margin:20rpx 30rpx;position:relative}.cou-l,.coupon{align-items:center;display:-webkit-flex;display:flex;justify-content:flex-start}.cou-l{background:#f1fffc;border-radius:30rpx;padding:30rpx 0;width:70%}.cou-l-l{color:#00a795;padding-left:30rpx}.cou-money{font-size:28rpx;font-weight:700;text-align:center}.cou-pic{font-size:60rpx;margin-bottom:10rpx}.cou-pictit{font-size:26rpx;line-height:50rpx}.cou-l-r{padding:0 30rpx 0 20rpx}.cou-title{color:#3a3a3a;font-size:26rpx;font-weight:700;line-height:60rpx}.cou-date{color:#8f8f8f;font-size:20rpx;font-weight:400;line-height:30rpx}.cou-week{max-width:250rpx}.cou-r{background:#f1fffc;border-radius:30rpx;box-sizing:border-box;height:100%;padding:30rpx 0;position:absolute;right:0;top:0;width:30%}.cou-rbox{border-left:1rpx dashed #92d9cb;display:-webkit-flex;display:flex;flex-direction:column;height:100%;justify-content:center;padding:0 30rpx}.cou-btn{background:linear-gradient(90deg,#0bc96e,#00a795);border-radius:20rpx;color:#fefffe;font-size:24rpx;font-weight:400;height:50rpx;line-height:50rpx;margin:0 auto;text-align:center;width:120rpx}.couponMore{align-items:center;background:#fff;border-radius:30rpx;display:-webkit-flex;display:flex;justify-content:space-between;margin:0rpx 30rpx 20rpx;padding:30rpx 20rpx}.coum-l{padding:0 20rpx}.coum-tit{color:#252525;font-size:36rpx;font-weight:700;line-height:60rpx;text-align:center}.coum-titcol{color:#f15252}.coum-con{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.coum-text{color:#8f8f8f;font-size:26rpx;font-weight:400;line-height:30rpx}.coum-btn{background:linear-gradient(90deg,#0bc96e,#00a795);border-radius:20rpx;color:#fefffe;font-size:22rpx;font-weight:400;height:40rpx;line-height:40rpx;margin-left:10rpx;text-align:center;width:90rpx}.coum-r{height:131rpx;margin-left:20rpx;width:232rpx}.rebateBox{align-items:center;background:#fff;border-radius:20rpx;display:-webkit-flex;display:flex;flex-direction:row;font-family:Source Han Sans CN;height:100rpx;justify-content:space-between;line-height:1;margin:0 20rpx 10rpx}.rebateBox .rb1{color:#ff4643;font-size:26rpx;margin-left:20rpx}.rebateBox .rb2{align-items:center;display:-webkit-flex;display:flex;flex-direction:row}.rebateBox .rb2 .rb2-1{color:#ff4643;font-weight:400;margin-right:24rpx}.rebateBox .rb2 .rb2-2{color:#555;font-weight:400;margin-right:24rpx}.codeBox{background:#fff;border-radius:20rpx;line-height:1;margin:0rpx 20rpx 10rpx;padding:30rpx 20rpx 20rpx}.codeBox .table{border:1rpx solid #e4e4e4;border-bottom:none}.codeBox .tr{border-bottom:1rpx solid #e4e4e4;display:-webkit-flex;display:flex}.codeBox .tr.first{background:#fffaf8}.codeBox .tr.first .td{font-weight:600}.codeBox .tr .1st{width:200rpx}.codeBox .tr .td{align-items:center;border-right:1rpx solid #e4e4e4;border-top:none;color:#656565;display:-webkit-flex;display:flex;line-height:42rpx;padding:16rpx 25rpx;text-align:left;word-break:break-all}.codeBox .tr .td:last-child{border-right:none}.codeBox .codeBox-title{color:#222;font-size:30rpx;font-weight:700;line-height:45rpx}.rfzc{display:-webkit-flex;display:flex;height:34rpx;margin-bottom:20rpx;position:relative}.rfzc .rf-tag{align-items:flex-end;color:#ff5411;display:-webkit-flex;display:flex;font-size:22rpx;height:34rpx;line-height:1;margin-left:5rpx;min-width:80rpx;padding:0 10rpx;text-align:center}.rfzc .icon-rf{display:-webkit-flex;display:flex;height:30rpx;justify-content:right;position:absolute;right:0;width:50rpx}.rfzc .icon-rf .img{height:14rpx;transform:rotate(180deg);width:24rpx}.rfzc .icon-rf .show{transform:rotate(0deg)}.codeBox .picBox{height:100%;position:relative;width:100%}.left-back{left:10rpx;position:absolute;top:35%}.right-forword{position:absolute;right:10rpx;top:35%}.left-back image,.right-forword image{height:30rpx;padding:30rpx;width:20rpx}.codeBox .picBox .swiper{display:block;height:400rpx}.picBox .swiper-item{text-align:center}.codeBox .picBox .codeimg{display:block;height:400rpx;margin:0 auto 20rpx;width:400rpx}.codeBox .picBox .index{margin-bottom:10rpx;text-align:center}.codeBox .picBox .rypz{font-size:36rpx;margin-bottom:20rpx;padding-top:30rpx;text-align:center}.codeBox .picBox .rypz1{color:#2a2a2a;font-size:40rpx;font-weight:700;padding-bottom:20rpx;text-align:center}.yxq{align-items:flex-start;color:#969696;display:-webkit-flex;display:flex;font-size:27rpx;line-height:35rpx;margin-bottom:10rpx}.dayTit{width:150rpx}.codeBox .line{border-top:1rpx solid #d6d6ce;margin-bottom:30rpx}.codeBox .ryfs{word-wrap:break-word;color:#969696;display:-webkit-flex;display:flex;font-size:22rpx;line-height:38rpx;padding-bottom:30rpx;word-break:break-all}.codeBox .ryfs .title{width:150rpx}.codeBox .ryfs .value{word-wrap:break-word;width:499rpx;word-break:break-all}.codeBox .ryfs .ali-rich{display:-webkit-flex;display:flex;flex-direction:row;width:499rpx}.codeBox .mini-code-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;padding-bottom:30rpx}.codeBox .mini-code-box .item{align-items:center;border:1px solid #ccc;border-radius:10rpx;display:-webkit-flex;display:flex;height:80rpx;justify-content:center;width:320rpx}.codeBox .mini-code-box .item image{height:50rpx;margin-right:10rpx;width:50rpx}.ticket-name{background:#fff;color:#000;font-size:34rpx;margin:20rpx 0;padding:26rpx 41rpx 33rpx 31rpx}.order-detail .basic-info view{color:#959595;line-height:30rpx;margin-bottom:24rpx}.order-detail .basic-info view .title{display:inline-block;padding-right:10rpx;width:130rpx}.apply-refund{display:inline-block;padding-right:10rpx;width:164rpx}.order-detail .basic-info .supply-name .title{display:inline-block;padding-right:10rpx;width:130rpx}.order-detail .basic-info .play-way .value{display:inline-block;text-align:justify;vertical-align:top;width:510rpx}.order-detail .basic-info .order-num .title{display:inline-block;padding-right:10rpx;width:130rpx}.price{color:#000}.order-detail .pay-box{background:#fff;color:#959595;font-size:26rpx;line-height:30rpx;margin-bottom:24rpx;padding:25rpx 31rpx}.order-detail .pay-box .money-num,.order-detail .pay-box .pay-type{line-height:50rpx;vertical-align:top;width:100%}.order-detail .pay-box .title{display:inline-block;height:50rpx;line-height:50rpx;margin-right:10rpx;text-align-last:justify;width:130rpx}.order-detail .pay-box .paytype-img{display:inline-block;height:39rpx;line-height:50rpx;vertical-align:middle;width:49rpx}.passenger-box{padding:0 20rpx 150rpx}.hotel-box,.passenger-box{background:#fff;border-radius:20rpx;margin:0rpx 20rpx 10rpx}.hotel-box{padding:0 20rpx 55rpx}.hotel-box .hotel-title{align-items:center;color:#222;display:-webkit-flex;display:flex;font-size:30rpx;font-weight:700;justify-content:space-between;line-height:45rpx;margin-bottom:16rpx;padding:33rpx 0 10rpx}.hotel-box .hotel-title .yuyue{align-items:center;color:#585858;display:-webkit-flex;display:flex;font-size:26rpx;font-weight:400}.hotel-box .hotel-title .yuyue .img{height:24rpx;margin-left:10rpx;width:13rpx}.hotel-box .hotel-table{margin-bottom:40rpx;text-align:center;width:670rpx}.hotel-box .hotel-table .hotel-th{display:-webkit-flex;display:flex;flex-direction:row;height:70rpx}.hotel-box .hotel-table .hotel-th .t{width:33.33%}.hotel-box .hotel-table .th{background:#fffaf8;color:#333;font-size:26rpx;line-height:70rpx}.hotel-box .hotel-table .td{border:1px solid #e0e0e0}.hotel-box .hotel-table .tableType{color:#585858;font-family:Source Han Sans CN-Normal,Source Han Sans CN;font-size:26rpx;font-weight:400}.hotel-box .hotel-table .color{color:#969696}.hotel-box .hotel-list-box{color:#909090;font-size:26rpx;line-height:32rpx;padding-top:2rpx}.hotel-box .hotel-list-box .item{color:#909090;display:-webkit-flex;display:flex;flex-direction:row;margin-bottom:20rpx;padding-top:2rpx}.hotel-box .hotel-list-box .item .title{color:#969696;display:inline-block;font-weight:400;padding-right:10rpx;text-align:left;width:150rpx}.hotel-box .hotel-list-box .item .value{color:#585858;font-weight:400;width:499rpx}.hotel-box .hotel-list-box .item .valueP{color:#585858;font-size:26rpx;font-weight:400;line-height:35rpx;width:499rpx;word-break:break-all}.community{background:#fff;border-radius:20rpx;margin:0 20rpx 10rpx;overflow:hidden;width:710rpx}.community .community-box{width:100%}.id,.phone233{letter-spacing:10rpx}.passenger-box .passenger-title{color:#222;font-size:30rpx;font-weight:700;line-height:45rpx;margin-bottom:16rpx;padding:33rpx 0 10rpx}.passenger-box .passenger-list-box .item{color:#909090;font-size:26rpx;line-height:32rpx;padding-top:2rpx}.passenger-box .passenger-list-box .item .sub-item{display:-webkit-flex;display:flex;margin-bottom:20rpx}.passenger-box .passenger-list-box .item .sub-item>image{height:40rpx;margin-left:15rpx;vertical-align:middle;width:40rpx}.passenger-box .passenger-list-box .item .sub-item .value{color:#585858}.jus{justify-content:space-between}.passenger-box .passenger-list-box .item .sub-item .guarantee{display:-webkit-flex;display:flex;width:100%}.passenger-box .passenger-list-box .item .sub-item .guarantee .value{color:rgba(0,0,0,.8);font-size:26rpx;font-weight:400;height:44rpx;line-height:44rpx}.passenger-box .passenger-list-box .item .sub-item .guarantee .baodan{align-items:center;display:-webkit-flex;display:flex}.passenger-box .passenger-list-box .item .sub-item .guarantee .baodan .dian{color:rgba(0,0,0,.8);font-size:26rpx;font-weight:400;height:44rpx;line-height:44rpx}.passenger-box .passenger-list-box .item .sub-item .guarantee .baodan .img{height:32rpx;margin-left:10rpx;width:32rpx}.passenger-box .passenger-list-box .item .title{color:#969696;display:inline-block;font-size:26rpx;font-weight:400;line-height:44rpx;padding-right:10rpx;text-align:left;width:170rpx}.passenger-box .passenger-list-box .item:last-child{border:0}.operate-box{background:#fff;border-radius:0;bottom:0;display:flex;display:-webkit-flex;height:100rpx;line-height:100rpx;padding:0;position:fixed;width:100%}.operate-box button{border-radius:0;flex:1;font-size:32rpx;letter-spacing:3rpx;line-height:100rpx;padding:0}.operate-box button.cancel-btn{background:#fff;color:#959595}.operate-box button.pay-btn{background-color:#f55858;color:#fff}.operate-box navigator{color:#fff;flex:1}.operate-box button.repeat-buy-btn{background-color:#1a9afa;color:#fff}.noRfamount{opacity:.3}.operate-box button.repeat-buy-btn navigator{color:#fff}.item-footer{align-items:center;background:#fff;border-top:1px solid #d9d9d7;bottom:0;display:flex;display:-webkit-flex;height:100rpx;justify-content:flex-end;left:0;padding:0 30rpx;position:fixed;width:100%}.repeat-buy-btn{border:1rpx solid #d1d1d1;border-radius:20rpx;color:#2a2a2a}.pay-btn,.repeat-buy-btn{font-size:24rpx;height:60rpx;line-height:60rpx;margin-left:10rpx;text-align:center;width:160rpx}.pay-btn{border:1rpx solid #f15252;border-radius:20rpx;color:#f15252}.order-detail .qr-box{background:#fff;cursor:pointer;font-size:0;margin-bottom:20rpx;padding:30rpx 40rpx;position:relative}.order-detail .qr-box .qrcode{float:left;height:138rpx;margin-right:20rpx;width:138rpx}.order-detail .qr-box .qr-r{height:138rpx;overflow:hidden;position:relative}.order-detail .qr-box .qr-r .qrtitle{font-size:30rpx;line-height:30rpx;margin-bottom:12rpx}.order-detail .qr-box .qr-r .desc,.order-detail .qr-box .qr-r .qrnum{color:#959595;font-size:30rpx;line-height:32rpx}.order-detail .qr-box .qr-r .desc{bottom:0;line-height:30rpx;position:absolute}.order-detail .qr-box .arr-r{height:26rpx;position:absolute;right:40rpx;top:50%;transform:translate(-50%);width:14rpx}.fee-box{background:#f5f5f5;padding-bottom:20rpx;padding-top:20rpx}.fee-box .title-box{background-color:#fff;font-size:32rpx;padding:40rpx}.fee-box .content{background-color:#fff;font-size:30rpx;padding:0 40rpx 40rpx}.fee-box .content .fee-content{color:#959595;display:flex;display:-webkit-flex;flex-flow:row;justify-content:space-between;line-height:50rpx}.fee-box .content .fee-content .left{flex:1}.fee-box .content .fee-content .right{color:#f55858;flex:1;text-align:right}.fee-box .content .plain-content{color:#959595;line-height:50rpx;text-align:right}.qrbox{align-items:center;background-color:#fff;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;margin:10rpx 0 20rpx;padding-bottom:20rpx}.qrimg{height:300rpx;width:300rpx}.qrtext{font-size:36rpx}#show-qrcode-box{background:#fff;box-shadow:0 0 2rpx 0 rgba(0,0,0,.19);color:#424141;font-size:28rpx;line-height:28rpx;margin-bottom:20rpx;padding:50rpx 40rpx 25rpx}#show-qrcode-box>view .title{display:-webkit-flex;display:flex;font-size:38rpx;margin-bottom:27rpx}#show-qrcode-box>view .title view:first-child{width:200rpx}#show-qrcode-box>view .item{color:#959595;display:-webkit-flex;display:flex;margin-bottom:24rpx}#show-qrcode-box>view .item .red{color:#ff332e}#show-qrcode-box>view .item view:first-child{width:200rpx}#show-qrcode-box>view .item view:last-child{flex:1}#show-qrcode-box>view .img-box{padding-top:20rpx}#show-qrcode-box>view .img-box>.code-box{display:-webkit-flex;display:flex;justify-content:center;padding-bottom:20rpx}#show-qrcode-box>view .img-box>.index{margin-bottom:10rpx;text-align:center}#show-qrcode-box>view .img-box>.dianzipaio-box{height:180px}#show-qrcode-box>view .img-box>.dianzipaio-box .swiper-item canvas{margin:0 auto 30rpx}#show-qrcode-box>view .img-box>.dianzipaio-box .swiper-item view{text-align:center}.official-box{display:-webkit-flex;display:flex;justify-content:center;padding:10rpx 0}.official-box .official{width:690rpx}.focus-box{background:#fff;border-radius:40rpx;box-shadow:0 0 21rpx 9rpx rgba(71,159,119,.1);box-sizing:border-box;justify-content:space-between;margin:0 auto 60rpx;padding:40rpx 20rpx;width:690rpx}.focus-box .l,.focus-box{align-items:center;display:-webkit-flex;display:flex}.focus-box .l image{border-radius:50%;height:80rpx;margin-right:15rpx;width:80rpx}.focus-box .l .tip{color:#b7b7b7;flex:1;font-size:22rpx;margin-right:20rpx}.focus-box .l .tip .p1{color:#2a2a2a;font-size:28rpx;font-weight:700;padding-bottom:10rpx}.focus-box .l .tip .p2{-webkit-line-clamp:1;-webkit-box-orient:vertical;word-wrap:break-word;display:-webkit-box;overflow:hidden;white-space:normal!important}.focus-box .r{background:none;border:1rpx solid #00a795!important;border-radius:20rpx!important;color:#00a795;font-size:26rpx;height:60rpx;line-height:60rpx;margin:0!important;width:140rpx}.dis-box{background:#fff;border-radius:40rpx;box-sizing:border-box;display:-webkit-flex;display:flex;justify-content:space-between;margin:0 auto 10px;padding:30rpx 45rpx 10rpx;width:710rpx}.dis-box>.l{padding-top:16rpx}.dis-box>.l>.t{color:#252525;font-size:34rpx;font-weight:700;margin-bottom:10rpx}.dis-box>.l>.t text{color:#f15252}.dis-box>.l>.b{align-items:center;color:#b67171;display:-webkit-flex;display:flex;font-size:26rpx}.dis-box>.l>.b>.l{margin-right:20rpx}.dis-box>.l>.b>.r{background:linear-gradient(90deg,#0bc96e,#00a795);border-radius:20rpx;color:#fefffe;font-size:22rpx;height:40rpx;line-height:40rpx;padding:0 16rpx}.dis-box>.r image{height:142rpx;width:206rpx}.dis-mask{background:rgba(0,0,0,.5);height:100%;position:fixed;top:0;width:100%;z-index:1000}.dis-mask .main{height:560rpx;top:50%;width:590rpx}.dis-mask .close,.dis-mask .main{left:50%;position:absolute;transform:translate(-50%,-50%)}.dis-mask .close{height:100rpx;top:82%;width:100rpx}.painter{height:960rpx;left:-5000rpx;position:absolute;top:0;width:543rpx;z-index:100}.post-box{background:rgba(0,0,0,.5);height:100vh;left:0;position:fixed;top:0;width:100%;z-index:1000}.post-img{bottom:270rpx;box-shadow:0rpx 20rpx 30rpx 0rpx hsla(0,0%,78%,.3);height:800rpx;left:50%;position:fixed;transform:translateX(-50%);width:454rpx;z-index:100}.post-box .bottom-box{background:#fff;border-radius:20rpx 20rpx 0 0;bottom:0;box-sizing:border-box;height:357rpx;left:0;padding-top:100rpx;position:absolute;width:100%}.post-box .bottom-box .item-box{display:-webkit-flex;display:flex;justify-content:space-around;padding:0 130rpx}.post-box .bottom-box .item-box .item button{background:none;line-height:unset;padding:0;width:unset}.post-box .bottom-box .item-box .item button::after{border:0}.post-box .bottom-box .item-box .item image{display:block;height:108rpx;width:108rpx}.post-box .bottom-box .item-box .item .txt{color:#444242;font-size:26rpx;padding-top:16rpx;text-align:center}.post-box .bottom-box .cancel{border-top:1rpx solid #d7d7d7;bottom:0;box-sizing:border-box;font-size:24rpx;height:80rpx;left:0;line-height:80rpx;position:absolute;text-align:center;width:100%}.popup{background-color:#fff;border-radius:40rpx 40rpx 0 0;height:750rpx;padding:0 30rpx;position:relative;width:100%}.popup .popTitle{align-items:center;display:-webkit-flex;display:flex;height:90rpx;justify-content:space-between}.popup .popTitle .titleText{flex:1;text-align:center}.popup .popupBtn{background-color:#fff;border:1rpx solid #ff4643;border-radius:92rpx;bottom:30rpx;color:#ff4643;height:92rpx;left:20rpx;line-height:92rpx;position:absolute;right:20rpx}.popup .popupBtn:after{border:0}.popup .popMain{padding-bottom:100rpx}.popup .popMain .radioItem{align-items:center;border-bottom:1rpx solid #f7f7f7;display:-webkit-flex;display:flex;height:92rpx}.popup .popMain .radioItem .radioIcon{transform:scale(.7)}.giftBag{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center}.giftBag .giftBag-img{width:630rpx}.giftBag .gift-mid{background:linear-gradient(0deg,#ff3329,#ff7f56);border-radius:0 0 60rpx 60rpx;height:auto;overflow:hidden;padding:35rpx 20rpx 150rpx;position:relative;width:630rpx}.giftBag .gift-mid .gift-title{color:#fff;font-size:36rpx;font-weight:600;line-height:40rpx;margin-bottom:35rpx;text-align:center;text-shadow:0 2rpx 4rpx rgba(87,19,0,.4);width:100%}.giftBag .gift-mid .card-box{background:#db4821;border-radius:20rpx;max-height:604rpx;padding:23rpx 0 0;width:590rpx}.giftBag .gift-mid .card-box .candItem{height:151rpx;margin:auto;position:relative;width:546rpx}.giftBag .gift-mid .card-box .candItem:not(:nth-last-child(2))::after{background-image:linear-gradient(90deg,#af9060,#af9060 50%,#fffbe9 0);background-repeat:repeat-x;background-size:12rpx 2rpx;bottom:-2rpx;content:"";height:2px;left:14rpx;position:absolute;width:519rpx}.giftBag .gift-mid .card-box .candItem .it-img1,.giftBag .gift-mid .card-box .candItem .it-img2{height:151rpx;width:546rpx}.giftBag .gift-mid .card-box .candItem .it-img3{height:151rpx;transform:rotate(180deg);width:546rpx}.giftBag .gift-mid .card-box .item-card-box{display:-webkit-flex;display:flex;height:151rpx;justify-content:space-between;left:0;position:absolute;top:0;width:546rpx}.giftBag .gift-mid .card-box .item-card-box .left{display:-webkit-flex;display:flex;margin-left:23rpx}.giftBag .gift-mid .card-box .item-card-box .left image{background:#af9060;border-radius:10rpx;height:104rpx;margin-top:23rpx;width:104rpx}.giftBag .gift-mid .card-box .item-card-box .left .info{display:-webkit-flex;display:flex;flex-direction:column;height:90rpx;justify-content:space-between;margin-left:13rpx;margin-top:30rpx;width:270rpx}.giftBag .gift-mid .card-box .item-card-box .left .info .name{color:#282828;font-size:24rpx;font-weight:500;line-height:26rpx}.giftBag .gift-mid .card-box .item-card-box .left .info .time{color:#8b8b8b;font-size:16rpx;line-height:16rpx}.giftBag .gift-mid .card-box .item-card-box .right{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:90rpx;justify-content:space-between;margin-right:40rpx;margin-top:30rpx;width:547rpx}.giftBag .gift-mid .card-box .item-card-box .right .price{color:#ff4848;font-size:42rpx;font-weight:500;line-height:42rpx}.giftBag .gift-mid .card-box .item-card-box .right .tips{color:#8b8b8b;font-size:16rpx;line-height:16rpx}.giftBag .gift-mid .card-box .candItem1{background:#fffbe9;border-radius:10rpx;display:-webkit-flex;display:flex;height:150rpx;justify-content:space-between;margin:auto;position:relative;width:544rpx}.giftBag .gift-mid .giftBag-bottom-img{bottom:-5rpx;height:241rpx;left:-7rpx;position:absolute;width:643rpx}.giftBag .gift-mid .giftBag-but{background:linear-gradient(180deg,#fff6e9,#ffab73);border-radius:40rpx;bottom:38rpx;box-shadow:0 4rpx 8rpx 0 rgba(87,19,0,.4);color:#e52121;font-size:30rpx;font-weight:500;height:80rpx;left:135rpx;line-height:80rpx;position:absolute;text-align:center;width:360rpx} .u-mode-center-box{background-color:initial!important}.borderNone{border:none!important;padding:0!important}.borderPadding{padding:8rpx 0!important}
</style>
