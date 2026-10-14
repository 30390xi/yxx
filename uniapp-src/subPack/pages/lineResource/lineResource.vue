<template>
<view class="page-box">
    <order-nav :active="1" class=""></order-nav>
    <view class="top-box" :style="'top:'+(searchHeight*unit-242)+'rpx;'">
        <view class="title titleF" :style="'top:'+(searchHeight*unit-2)+'rpx;'">{{'景区（'+$root.g0+'）'}}</view>
        <view class="spot-box">
            <scroll-view class="scroll-box-spot" :scrollX="true">
                <block v-if="imageH>0">
                    <view :class="['item','',item.destinationId===destinationId?'active':'']" :key="index" v-for="(item, index) in spotData">
                        <image class="" mode="aspectFill" :src="item.mainPicture"></image>
                        <view class="spot-name">
                            <view class="name multilineText2">{{ item.destinationName }}</view>
                        </view>
                        <view class="icon-box" v-if="item.ticNum>0">{{'已选 '+item.ticNum+''}}</view>
                    </view>
                </block>
                <block v-else>
                    <view :class="['item','ft','',item.destinationId===destinationId?'active':'']" :key="index" v-for="(item, index) in spotData">
                        <view class="spot-name">
                            <view class="name multilineText2">{{ item.destinationName }}</view>
                        </view>
                        <view class="icon-box" v-if="item.ticNum>0">{{'已选 '+item.ticNum+''}}</view>
                    </view>
                </block>
            </scroll-view>
        </view>
        <view class="title">选择使用日期</view>
        <view class="date-box">
            <view class="scroll-box-date">
                <scroll-view class="left" :scrollIntoView="scrollToDate" :scrollX="true">
                    <view :class="['date-item','',item.date==selectDateStr?'activeDate':'',item.disabled?'disable':'']" :id="'date-'+item.date" v-for="(item, i) in dateData">
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
        </view>
        <view class="resource-note" v-if="resourceNote">{{resourceNote}}</view>
    </view>
    <view class="product-box" v-if="spotData[activeIndex]">
        <view class="tic-class-box" :key="index" v-for="(item, index) in $root.l1">
            <view class="class-title">{{ item.ticketTypeClassName }}</view>
            <view class="tic-box">
                <view class="tic-item" :style="'margin-top:'+(it.skuCashBackAmount!=null?it.skuCashBackAmount:it.cashBackAmount?'40rpx':'20rpx')+';'" v-for="(it, i) in item.l0">
                    <view class="tic-name multilineText2">
                        <view class="ms-box" style="width:64rpx;" v-if="it.seckillActivity==0"></view>{{ (it.itemAbbreviate||it.itemTitle) }}</view>
                    <view class="tip-tag" v-if="it.skuCashBackAmount!=null?it.skuCashBackAmount:it.cashBackAmount" @click="e1($event)">{{'多买减'+it.f0+'元'}}<label class="_span" v-if="it.cashStartPriceFlag">起</label>
                        <view class="icon-box-t">
                            <image mode class="icon" src="https://eshopfile.zhiyousx.com/169416211261817496.png"></image>
                        </view>
                    </view>
                    <view class="tic-body">
                        <view class="tb-left">
                            <view class="tic-info singleLineText" :style="'color:'+(it.scenicType!=1?'#FF5411':'#a17111')+';'">
                                <block v-if="it.bookingInfoTag.bookingTag">{{it.bookingInfoTag.bookingTag}}</block>
                                <block v-if="it.bookingInfoTag.reserveTimeTag">{{'｜'+it.bookingInfoTag.reserveTimeTag}}</block>
                                <block v-if="it.bookingInfoTag.refundTag">{{'｜'+it.bookingInfoTag.refundTag}}</block>
                                <block v-if="it.scenicType!=1&&it.bookingInfoTag.changeTag">{{'｜'+it.bookingInfoTag.changeTag}}</block>
                            </view>
                            <view class="tic-tip">
                                <view class="l">
                                    <block v-if="it.scenicType!=1">{{'已'+(it.skuItemType==1?'约':'售')+it.f1}}<text class="">｜</text>
                                    </block>{{'预'+(it.skuItemType==1?'约':'订')+'须知'}}</view>
                                <uni-icons class="" color="#A6A6A6" size="10" style="margin-top:-7rpx;" type="arrowright"></uni-icons>
                            </view>
                        </view>
                        <view class="tb-right">
                            <view class="price-box">
                                <block v-if="!it.stockStatus||it.sellOut">当日已订完</block>
                                <block v-else>
                                    <block v-if="it.skuItemType==1&&it.isFree==1">免费</block>
                                    <block v-else>
                                        <block v-if="it.ticketNum<=0">
                                            <text class="del" v-if="it.retailPrice>it.price">{{'￥'+it.retailPrice}}</text>
                                            <text class="sign">￥</text>{{ (it.seckillActivity==0?it.seckillPrice:it.price) }}<text class="" style="color:#777777;font-size:24rpx;margin-left:4rpx;" v-if="it.startPriceFlag==1">起</text>
                                        </block>
                                        <block v-else>
                                            <text class="del" v-if="it.retailPrice>it.selectedtime.sellPrice">{{'￥'+it.retailPrice}}</text>
                                            <text class="sign">￥</text>{{ it.selectedtime.sellPrice }}</block>
                                    </block>
                                </block>
                            </view>
                            <view :class="['tic-num-box','',!it.stockStatus||it.sellOut?'disable':'']">
                                <view :class="['tnb-it','',it.ticketNum<=0?'disable':'']">-</view>{{ it.ticketNum }}<view :class="['tnb-it','',it.m0?'disable':'']">+</view>
                            </view>
                        </view>
                    </view>
                    <view class="additional-box" v-if="it.selectedtime&&it.selectedtime.time||it.selectedSku&&it.selectedSku[0]">
                        <view class="info-box" v-if="it.ticketType==1">
                            <view class="info">{{'入园时段：'+it.selectedtime.time+''}}</view>
                            <view class="btn">修改<u-icon class="" color="#FF5411" name="arrow-right" size="22" style="margin-top:-4rpx;margin-left:10rpx;"></u-icon>
                            </view>
                        </view>
                        <view class="info-box" v-if="it.ticketType==2">
                            <view class="info singleLineText">
                                <text class="" style="margin-right:10rpx;" v-if="t[0]&&t[1]" v-for="(t, __i0__) in it.selectedSku">{{ t[0]+': '+t[1] }}</text>
                            </view>
                            <view class="btn">修改<u-icon class="" color="#FF5411" name="arrow-right" size="22" style="margin-top:-4rpx;margin-left:10rpx;"></u-icon>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view :class="['footer-box','',showTicketSku||showTimeHour||isShowBookTip?'firstTop':'']" :style="'padding-bottom:'+safeAreaBottom+'rpx'+';'+'height:'+(130+safeAreaBottom)+'rpx'+';'">
        <view class="amount-info">
            <view class="amount-box">
                <view class="price">
                    <view class="p-it">
                        <view class="name">小计</view>
                        <view class="num">{{'￥'+allAmount+''}}</view>
                    </view>
                    <view class="p-it p-it-last" v-if="reduction>0">
                        <view class="name pt">共减</view>
                        <view class="num pt">{{'￥'+reduction+''}}</view>
                    </view>
                </view>
            </view>
            <view class="res" @click="e2($event)">明细</view>
            <u-icon class="" color="#FF5411" name="arrow-up" size="22" style="margin-top:-4rpx;" v-if="!showDetail" @click="e3()"></u-icon>
            <u-icon class="" color="#FF5411" name="arrow-down" size="22" style="margin-top:-4rpx;" v-else @click="e4()"></u-icon>
        </view>
        <view class="next-btn" @click="submit()">下一步</view>
    </view>
    <u-popup borderRadius="20" class="" :closeable="true" height="70%" mode="bottom" :value="showDetail" :vueSlots="['default']" v-if="showDetail" @input="showDetail = $event">
        <view class="detailBox">
            <view class="title">价格明细</view>
            <scroll-view class="content" :scrollY="true" :style="'height:'+noticeHeight+'rpx'+';'">
                <view class="item" :key="index" v-for="(item, index) in $root.l2">
                    <view class="tic-title singleLineText">{{ item.destinationName }}</view>
                    <view class="use-time">{{'使用日期：'+item.f2+''}}</view>
                    <view class="tic-num-info">
                        <view class="it" :key="i" v-for="(it, i) in item.itemList">
                            <view class="it-l">
                                <text class="multilineText2">{{ it.itemTitle }}</text>
                                <view class="tag" v-if="it.backAmount>0">{{'已减'+it.backAmount+'元'}}</view>
                            </view>
                            <view class="it-r">
                                <text class="p">{{it.price}}</text>{{'x '+it.ticketNum+'张'}}</view>
                        </view>
                    </view>
                </view>
                <view class="order-detail">
                    <view class="od-item">
                        <text class="">订单总额：</text>
                        <text class="">{{'￥'+lineOrderInfo.orderAmount}}</text>
                    </view>
                    <view class="od-item color1" v-if="lineOrderInfo.reduction>0">
                        <text class="">多买优惠：</text>
                        <text class="">{{'-￥'+lineOrderInfo.reduction}}</text>
                    </view>
                    <view class="od-item color2">
                        <text class="color2">应付金额：</text>
                        <text class="">{{'￥'+lineOrderInfo.allAmount}}</text>
                    </view>
                </view>
            </scroll-view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" height="70%" mode="bottom" :value="showTicketSku" :vueSlots="['default']" v-if="showTicketSku" @input="showTicketSku = $event">
        <view class="skuBox">
            <view class="skuTitle">选择门票</view>
            <view class="skuTitle" style="margin-top:50rpx;">{{ skuData.aggregationItemName }}</view>
            <view class="use-time">{{'使用日期：'+$root.f3+''}}</view>
            <view class="skuTips" v-if="tipsInfo">
                <view class="info multilineText2">{{ tipsInfo }}</view>
            </view>
            <scroll-view class="scroll-sku" :scrollY="true" :style="'height:'+skuHeight+'rpx'+';'">
                <view class="attr-box" v-if="attrs[0]" :key="index" v-for="(attr, index) in $root.l4">
                    <view class="attr-head">
                        <view class="attr-name singleLineText">{{ attr.attributeKey }}<text class="attr-name-desc" v-if="attr.attributeDesc">{{ attr.attributeDesc }}</text>
                        </view>
                        <image class="" src="https://eshopfile.zhiyousx.com/172480687839557894.png" v-if="attr.attributeDescContent&&attr.attributeDesc"></image>
                    </view>
                    <view class="attr-scoll">
                        <view :class="['attr-it','',opt.m1?'active':'',!opt.m2?'disabled':'']" :key="i" v-for="(opt, i) in attr.l3">{{ opt.name }}<label class="reduce _span" v-if="opt.reduceFlag">减</label>
                        </view>
                    </view>
                </view>
                <view class="bottom-sku"></view>
            </scroll-view>
            <view class="sku-info-box" :style="'bottom:'+(100+safeAreaBottom)+'rpx'+';'" v-if="skuTicData&&skuTicData.itemId" @click.stop="showBookTip(parentIndex, itemIndex, skuTicData)">
                <view class="sku-info singleLineText" :style="'color:'+(skuTicData.scenicType!=1?'#FF7D2A':'#a17111')+';'">{{''+(skuTicData.bookingInfoTag.bookingTag||'--')}}<block v-if="skuTicData.bookingInfoTag.reserveTimeTag">{{'｜'+(skuTicData.bookingInfoTag.reserveTimeTag||'--')}}</block>{{'｜'+(skuTicData.bookingInfoTag.refundTag||'--')}}<block v-if="skuTicData.scenicType!=1">{{'｜'+(skuTicData.bookingInfoTag.changeTag||'--')}}</block>
                </view>
                <view class="sku-tip">
                    <view class="l">{{'预'+(skuTicData.skuItemType==1?'约':'订')+'须知'}}</view>
                    <uni-icons class="" color="#555555" size="14" type="arrowright"></uni-icons>
                </view>
            </view>
            <view class="bot-box" :style="'padding-bottom:'+safeAreaBottom+'rpx'+';'+'height:'+(100+safeAreaBottom)+'rpx'+';'">
                <view class="price">
                    <block v-if="skuTicData&&skuTicData.itemId">{{'￥'+skuTicData.price+''}}</block>
                    <block v-else>￥--</block>
                </view>
                <view :class="['btn','',skuTicData&&skuTicData.itemId?'act':'']" @click="chooseSkuItem(skuTicData)">确 定</view>
            </view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" height="70%" mode="bottom" :value="showTimeHour" :vueSlots="['default']" v-if="showTimeHour" @input="showTimeHour = $event">
        <view class="hour-box">
            <view class="title">选择门票</view>
            <view class="title" style="margin-top:50rpx;">{{ itemData.itemTitle }}</view>
            <view class="use-time">{{'使用日期：'+$root.f4+''}}</view>
            <view class="hour-title">{{'入'+(itemData.scenicType==1?'寺':'园')+'时段'}}</view>
            <scroll-view class="scroll-hour" :scrollY="true" :style="'height:'+hourHeight+'rpx'+';'">
                <view class="item-box">
                    <view :class="['item','',selectedHourTime.time===item.startTime+'-'+item.endTime?'active':'',itemData.scenicType==1&&selectedHourTim.time===item.startTime+'-'+item.endTime?'csBg':'',item.disabled===true?'disabled':'']" :key="id" v-for="(item, index) in itemData.hourArr">
                        <view class="p1">{{item.startTime+'-'+item.endTime}}</view>
                        <view :class="['p2','',infoObj.scenicType==1?'csColor':'']" :style="'opacity:'+(item.surplusStock===0&&!item.timePassed?1:0)+';'" v-if="item.disabled">{{infoObj.skuSellOutInfo?infoObj.skuSellOutInfo:infoObj.skuItemType==0?'已满':'约满'}}</view>
                        <view class="p2" v-else>{{item.surplusStockStr}}</view>
                    </view>
                </view>
            </scroll-view>
            <view class="bot-box" :style="'padding-bottom:'+safeAreaBottom+'rpx'+';'+'height:'+(100+safeAreaBottom)+'rpx'+';'">
                <view class="price">
                    <block v-if="itemData&&itemData.itemId">{{'￥'+itemData.marketPrice+''}}<text class="" style="color:#777777;font-size:24rpx;" v-if="itemData.startPriceFlag==1">起</text>
                    </block>
                    <block v-else>￥--</block>
                </view>
                <view :class="['btn','',selectedHourTime&&selectedHourTime.time?'act':'']" @click="chooseTimeItem(itemData)">确 定</view>
            </view>
        </view>
    </u-popup>
    <u-popup borderRadius="32" class="" :closeable="true" height="70%" mode="bottom" :value="isShowBookTip" :vueSlots="['default']" v-if="isShowBookTip" @input="isShowBookTip = $event">
        <view class="ytxz-box" v-if="ydxz">
            <view class="content-box1">
                <view class="title-box">
                    <view class="p1" id="ytxz-box-title">{{ydxz.itemTitle}}</view>
                    <view class="p2">
                        <text class="" v-if="ydxz.scenicType!=1">{{'已'+(ydxz.skuItemType==1?'约':'售')+$root.f5}}</text>
                    </view>
                </view>
                <scroll-view class="bottom-box" scrollY="true" :style="'height:'+bookTipHeight+'rpx'+';'">
                    <view class="line1" v-if="ydxz.bookingInfoTag">
                        <view class="title">{{(ydxz.skuItemType==1?'预约':'购买')+'须知'}}</view>
                        <view class="b">
                            <view class="item" v-if="ydxz.itemUseDesc&&ydxz.itemUseDesc.dateType==1">
                                <view class="l lc" v-if="ydxz.scenicType==1">入寺先预约</view>
                                <view class="l" v-else>{{ydxz.bookingInfoTag.bookingTag}}</view>
                                <view class="r">
                                    <view class="refundItem" v-if="ydxz.bookingInfoTag.validityModeBookStr1">{{''+ydxz.bookingInfoTag.validityModeBookStr1}}</view>
                                    <view class="refundItem" v-if="ydxz.bookingInfoTag.validityModeBookStr2">{{''+ydxz.bookingInfoTag.validityModeBookStr2}}</view>
                                    <view class="refundItem" v-if="ydxz.bookingInfoTag.validityModeBookStr3">{{''+ydxz.bookingInfoTag.validityModeBookStr3}}</view>
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
                                <view :class="['l','',ydxz.scenicType==1?'lc':'']">{{ydxz.bookingInfoTag.refundTag}}</view>
                                <view class="r" v-if="ydxz.bookingInfoTag&&ydxz.bookingInfoTag.refundStr&&ydxz.bookingInfoTag.refundTag!='条件退'">
                                    <view class="" v-for="(item, index) in $root.l5">
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
                        <view class="tr" v-if="item.timeDesc" v-for="(item, __i1__) in ydxz.refundFeeList">
                            <view class="td" style="width:480rpx;">{{item.timeDesc||''}}</view>
                            <view class="td" style="width:210rpx;">{{item.feeDesc||''}}</view>
                        </view>
                        <view class="tr" v-if="ydxz.bookingInfoTag&&ydxz.bookingInfoTag.refundStr1">
                            <view class="td" style="width:690rpx;display:block;">
                                <view class="" v-for="(it, i) in $root.l6">
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
                    <view class="line3" v-for="(item, __i2__) in ydxz.telephoneVoList">
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
                    <view class="" style="opacity:0;width:0;height:0;">-</view>
                </scroll-view>
            </view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" mode="center" :value="showAllTime" :vueSlots="['default']" v-if="showAllTime" @input="showAllTime = $event">
        <view class="calendar-box" v-if="$root.g1>0">
            <yu-calendar class="" :defaultDate="selectDateStr" :priceList="dateData" @getDataInDay="itemClickFn()"></yu-calendar>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" mode="center" :value="showGroupErr" :vueSlots="['default']" v-if="showGroupErr" @input="showGroupErr = $event">
        <view class="errBox">
            <view class="name">温馨提示</view>
            <view class="err-item">{{'当前日期 “'+$root.g2+'” 库存不足，需清除数量重新选择!'}}</view>
            <view class="but-popup" @click="e5($event)">取 消</view>
            <view class="but-popup1" @click="confirmOrder($event)">确 定</view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="center" :value="showTips" :vueSlots="['default']" v-if="showTips" @input="showTips = $event">
        <view class="popup-tips">
            <view class="" style="font-weight:bold;text-align:center;width:100%;margin-bottom:20rpx;">什么是多买减？</view>带有“多买减*元”标识的产品，在当前页面一次性购买多个景区的（同一景区购买多张门票不减）门票享立减优惠，具体优惠金额以明细内减少金额为准</view>
    </u-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              yuCalendar: function() {
                i.e("subPack/components/yu-calendar/yu-calendar").then(function() {
                  return resolve(i("d98f"))
                }.bind(null, i)).catch(i.oe)
              },
              orderNav: function() {
                i.e("subPack/components/orderNav").then(function() {
                  return resolve(i("c26a8"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            data: function() {
              var t;
              return t = {
                selectedSpot: "0",
                spotData: [],
                dateData: [],
                showDetail: !1,
                showTicketSku: !1,
                selectDateStr: "",
                attrs: [],
                selectedSku: {},
                skuList: [],
                skuData: "",
                timeData: [],
                selectDate: "",
                filterSku: [],
                filterTime: "",
                showAllTime: !1,
                scrollToDate: "",
                skuSelectTicId: "",
                skuTicData: "",
                aggId: "",
                submitState: !1,
                selectedHour: "",
                tipsInfo: "",
                skuItemTime: "",
                lineId: "1691295922218094594",
                destinationId: "",
                activeIndex: 0,
                parentIndex: 0,
                itemIndex: 0,
                isShowBookTip: !1,
                ydxz: {},
                bookTipHeight: 750,
                skuHeight: 750,
                unit: 0,
                statusBarHeight: 0,
                headerH: 0,
                windowHeight: 0,
                winWidth: 0,
                timeStr: 0,
                allAmount: 0,
                reduction: 0,
                showTimeHour: !1,
                itemData: "",
                selectedHourTime: "",
                itemSkuArr: [],
                lineOrderInfo: "",
                imageH: 242,
                scrollTop: 0
              }, (0, a.default)(t, "showAllTime", !1), (0, a.default)(t, "oldData", ""), (0, a.default)(t, "showGroupErr", !1), (0, a.default)(t, "errList", []), (0, a.default)(t, "stagData", ""), (0, a.default)(t, "addType", !1), (0, a.default)(t, "allNum", 0), (0, a.default)(t, "hourHeight", 0), (0, a.default)(t, "showTips", !1), (0, a.default)(t, "noticeHeight", 500), (0, a.default)(t, "searchHeight", 0), (0, a.default)(t, "safeAreaBottom", 0), (0, a.default)(t, "prefeFlag", !1), t
            },
            filters: {
              tiameFilter: function(t) {
                if (!t) return "";
                var e = t.replaceAll("-", "/"),
                  i = new Date(e),
                  s = i.getFullYear(),
                  a = i.getMonth() + 1,
                  n = i.getDate();
                return "".concat(s, "年").concat(a, "月").concat(n, "日")
              },
              cashBackAmountFilter: function(t) {
                var e = t.price;
                return t.ticketNum > 0 && t.selectedtime && t.selectedtime.sellPrice && (e = t.selectedtime.sellPrice), null != t.skuCashBackAmount ? t.skuCashBackAmount <= e && (e = t.skuCashBackAmount) : t.cashBackAmount <= e && (e = t.cashBackAmount), e
              }
            },
            onLoad: function(e) {
              this.safeAreaBottom = uni.getStorageSync("safeAreaBottom") ? uni.getStorageSync("safeAreaBottom") : 0, e.lineId && (this.lineId = e.lineId);
              var i = this,
                s = uni.getMenuButtonBoundingClientRect();
              this.searchHeight = s.top + 38, uni.getSystemInfo({
                success: function(e) {
                  i.statusBarHeight = uni.getSystemInfoSync().statusBarHeight, i.windowHeight = e.windowHeight, i.headerH = i.statusBarHeight + 5 + Math.ceil(e.windowWidth / 750 * 104), i.winWidth = e.windowWidth, i.unit = 750 / e.windowWidth, i.skuHeight = i.windowHeight / i.winWidth * 750 * .7 - 469, i.noticeHeight = i.windowHeight / i.winWidth * 750 * .7 - 234, i.hourHeight = i.windowHeight / i.winWidth * 750 * .7 - 440
                }
              }), this.getlineScenicInfo()
            },
            watch: {
              showTimeHour: function(t) {
                t || (this.selectedHourTime = "")
              },
              showTicketSku: function(t) {
                t || (this.selectedSku = {}, this.itemSkuArr = [])
              },
              soptData: {
                deep: !0,
                immediate: !0,
                handler: function(t, e) {}
              }
            },
            onPageScroll: function(t) {
              this.imageH = 242 - t.scrollTop * this.unit
            },
            onShow: function() {},
            methods: {
              itemClickFn: function(t) {
                this.showAllTime = !1, this.selectedDate(t, !0)
              },
              selectedDate: function(t, e) {
                this.oldData = this.$util.deepCopy(this.lineOrderInfo), this.getScenicTicket(t.date, e)
              },
              selectSpot: function(t, e) {
                var i = this;
                if (this.destinationId = t.destinationId, this.activeIndex = e, this.selectDateStr = this.spotData[this.activeIndex].selectDateStr || "", this.selectDateStr) return this.dateData = this.spotData[this.activeIndex].dateData, void setTimeout((function() {
                  i.scrollToDate = "date-" + i.selectDateStr
                }), 50);
                this.getScenicTicketDate()
              },
              getlineScenicInfo: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/lineScenicInfo/" + this.lineId).then((function(e) {
                  1 === e.code && (e.data.forEach((function(t) {
                    t.classList = [], t.selectDateStr = "", t.dateData = [], t.ticNum = 0
                  })), t.spotData = e.data, t.destinationId = e.data[0].destinationId, t.activeIndex = 0, t.getScenicTicketDate())
                }))
              },
              getScenicTicketDate: function() {
                var t = this,
                  e = {
                    destinationId: this.destinationId
                  };
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/getScenicTicketDate", e).then((function(e) {
                  if (1 === e.code) {
                    var i = e.data,
                      s = t.selectDateStr;
                    i.forEach((function(e) {
                      var i = "";
                      0 === e.surplusStock ? (i = "已售罄", e.disabled = !0) : (-1 === e.surplusStock || e.surplusStock > 0) && (i = "可订", s || (s = e.date)), e.dateShort = e.date.slice(5), e.week = t.getWeekOfDate(e.date), e.diy = i
                    })), t.dateData = i, t.selectDateStr = s || i[0].date, t.spotData[t.activeIndex].selectDateStr = s || i[0].date, t.spotData[t.activeIndex].dateData = i, t.getScenicTicket(t.selectDateStr, !0)
                  }
                }))
              },
              getScenicTicket: function(e, i) {
                var s = this;
                if (this.destinationId && e) {
                  var a = {
                    destinationId: this.destinationId,
                    date: e
                  };
                  uni.showLoading({
                    title: "加载中",
                    mask: !0
                  }), this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/getScenicTicketCale", a).then((function(a) {
                    if (1 === a.code) {
                      var n = a.data,
                        c = [],
                        o = [],
                        u = 0;
                      if (s.oldData && s.oldData.spotList && s.oldData.spotList[0]) {
                        var r = s.oldData.spotList.filter((function(t) {
                          return t.destinationId == s.destinationId
                        }));
                        r[0] && (c = r[0].itemList)
                      }
                      if (c.forEach((function(t) {
                          o.push(t.itemTitle)
                        })), n.forEach((function(t) {
                          t.itemlist.forEach((function(t) {
                            var e = "";
                            if (c[0] && c.forEach((function(i) {
                                i.itemId != t.itemId && i.aggregationItemId != t.itemId || (e = i)
                              })), t.ticketNum = 0, t.selectItemId = "", 1 == t.ticketType) {
                              if (t.selectItemId = t.itemId, t.selectedtime = t.ticketPrices[0], e && e.selectedtime && e.selectedtime.startTime == t.selectedtime.startTime && e.selectedtime.endTime == t.selectedtime.endTime && (-1 == t.selectedtime.surplusStock || t.selectedtime.surplusStock >= e.ticketNum) && (t.ticketNum = e.ticketNum, o = o.filter((function(e) {
                                  return e != t.itemTitle
                                })), u += e.ticketNum), 2 == t.itemUseDesc.dateType && 2 == t.itemUseDesc.stockLimit) {
                                t.selectedtime = "";
                                var i = (new Date).getTime(),
                                  s = t.ticketPrices;
                                s.forEach((function(s) {
                                  new Date((s.date + " " + s.endTime + ":00").replace(/-/g, "/")).getTime() < i && (s.timePassed = !0, s.disabled = !0);
                                  var a = "";
                                  0 === s.surplusStock ? (s.disabled = !0, a = "已满") : a = s.surplusStock > 200 || -1 == s.surplusStock ? "有票" : "余" + s.surplusStock, s.surplusStockStr = a, e && e.selectedtime && e.selectedtime.startTime == s.startTime && e.selectedtime.endTime == s.endTime && !s.disabled && (-1 == s.surplusStock || s.surplusStock >= e.ticketNum) && (t.selectedtime = s, t.selectedtime.time = e.selectedtime.time, t.time = s.startTime + "-" + s.endTime, t.ticketNum = e.ticketNum, o = o.filter((function(e) {
                                    return e != t.itemTitle
                                  })), u += e.ticketNum)
                                })), t.hourArr = s
                              }
                            } else if (2 == t.ticketType && (t.selectedtime = !0, e)) {
                              var a = t.relationList.filter((function(t) {
                                return t.itemId == e.itemId
                              }));
                              if (a[0]) {
                                var n = a[0].itemTicketStockVOS[0];
                                e.selectedtime && e.selectedtime.startTime == n.startTime && e.selectedtime.endTime == n.endTime && (-1 == n.surplusStock || n.surplusStock >= e.ticketNum) && (t.selectItemId = e.itemId, t.selectedtime = n, t.ticketNum = e.ticketNum, t.selectedSku = e.selectedSku, t.itemUseDesc = e.itemUseDesc, t.seckillActivity = e.seckillActivity, t.seckillItemId = e.seckillItemId, u += e.ticketNum, o = o.filter((function(t) {
                                  return t != e.itemTitle
                                })))
                              }
                            }
                          }))
                        })), s.errList = o, o[0]) return s.stagData = {
                        date: e,
                        list: n,
                        spotTicNum: u,
                        scrollType: i
                      }, uni.hideLoading(), void(s.showGroupErr = !0);
                      i && (s.scrollToDate = "date-" + e), s.selectDateStr = e, s.spotData[s.activeIndex].selectDateStr = e, s.spotData[s.activeIndex].classList = n, s.spotData[s.activeIndex].ticNum = u, s.calcPriceAmount(), uni.hideLoading()
                    } else uni.hideLoading()
                  }))
                }
              },
              confirmOrder: function() {
                if (this.stagData) {
                  var t = this.$util.deepCopy(this.stagData);
                  t.type && (this.scrollToDate = "date-" + t.date), this.selectDateStr = t.date, this.spotData[this.activeIndex].selectDateStr = t.date, this.spotData[this.activeIndex].classList = t.list, this.spotData[this.activeIndex].ticNum = t.spotTicNum, this.calcPriceAmount()
                }
                this.showGroupErr = !1, this.errList = [], this.stagData = ""
              },
              showBookTip: function(t, e, i) {
                if (this.parentIndex = t, this.itemIndex = e, 2 == i.ticketType) return !i.stockStatus || i.sellOut ? void this.$uni.showToast("已售空") : void this.setTicketType(i);
                this.getTicDetail(i.itemId, "pt")
              },
              getTicDetail: function(e, i) {
                var s = this;
                if (!this.submitState) {
                  console.log(i), uni.showLoading({
                    title: "加载中",
                    mask: !0
                  });
                  var a = this;
                  this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item/getTiketProductDetail", {
                    itemId: e
                  }).then((function(e) {
                    if (uni.hideLoading(), s.submitState = !1, 1 === e.code) {
                      if (1 == e.data.itemUseDesc.dateType ? e.data.price = e.data.ticketPrices[0].sellPrice : e.data.ticketPrices.forEach((function(t) {
                          s.selectDateStr == t.date && (e.data.price = t.sellPrice)
                        })), "jh" == i) return s.skuTicData = e.data, void s.setSkuOrderPrice();
                      s.isShowBookTip = !s.isShowBookTip, s.ydxz = e.data, s.isShowBookTip && s.$nextTick((function() {
                        setTimeout((function() {
                          var e = uni.createSelectorQuery();
                          e.select("#ytxz-box-title").boundingClientRect(), e.exec((function(t) {
                            a.bookTipHeight = a.windowHeight / a.winWidth * 750 * .7 - 146 - t[0].height * a.unit
                          }))
                        }), 100)
                      }))
                    } else s.$uni.showToast(e.msg)
                  }))
                }
              },
              getSkuDesc: function(e) {
                e && uni.previewImage({
                  current: 1,
                  urls: [e]
                })
              },
              brText: function(t) {
                if (t) {
                  var e = t.split("#**#");
                  return e.pop().split("</p>").forEach((function(t, i) {
                    if (t) {
                      var s = (t = t.split("<p>").join("")).match(/\<.*?\>/g),
                        a = t.match(/[\r\n]/g),
                        n = s || a;
                      n && n[0] && n.forEach((function(e) {
                        t = t.replaceAll(e, "")
                      })), e.push(t)
                    }
                  })), e
                }
              },
              setTicketType: function(t) {
                this.attrs = [], this.selectedSku = {}, this.itemSkuArr = [], this.skuList = [], this.skuData = "", this.timeData = [], this.selectDate = "", this.filterSku = [], this.filterTime = "", this.showAllTime = !1, this.scrollToDate = "", this.scrollToTic = "", this.scrollToClass = "", this.skuSelectTicId = "", this.skuTicData = "", this.prefeFlag = null != t.skuCashBackAmount ? t.skuCashBackAmount : t.cashBackAmount, this.getSkuDetail(t.itemId)
              },
              skuInit: function() {
                var t = this;
                this.attrs.forEach((function(e) {
                  e.attrList = [], e.showAttributeOptionList.forEach((function(i) {
                    e.attrList.push({
                      name: i,
                      reduceFlag: t.isReduce(e.attributeKey, i)
                    })
                  }))
                }))
              },
              isReduce: function(t, e) {
                var i = !1;
                return this.filterSku.forEach((function(s) {
                  Object.keys(s.skuInfo).forEach((function(a, n) {
                    i || a != t || e != Object.values(s.skuInfo)[n] || (i = s.prefeFlag)
                  }))
                })), i
              },
              selectReduce: function(t, e, i) {
                var s = this;
                0 != (t = t.filter((function(t) {
                  return "" != t[1]
                }))).length ? this.attrs.forEach((function(e) {
                  e.attrList.forEach((function(i) {
                    i.reduceFlag = s.selectIsReduce(t, e.attributeKey, i.name, i.reduceFlag)
                  }))
                })) : this.skuInit()
              },
              selectIsReduce: function(t, e, i, s) {
                var a = !1,
                  n = [];
                return t.forEach((function(t) {
                  n.push(t[1])
                })), n.includes(i) || (t.forEach((function(t, i) {
                  t[0] == e && n.splice(i, 1)
                })), n.push(i)), this.filterSku.forEach((function(t) {
                  if (!a) {
                    var e = n.length,
                      i = 0;
                    n.forEach((function(s) {
                      Object.values(t.skuInfo).includes(s) && i++, i == e && (a = t.prefeFlag)
                    }))
                  }
                })), a
              },
              getSkuDetail: function(e) {
                var i = this;
                this.submitState || (uni.showLoading({
                  title: "加载中",
                  mask: !0
                }), this.submitState = !0, this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/aggregationItem/appDetail/" + e).then((function(s) {
                  if (1 === s.code) {
                    uni.hideLoading();
                    var a = s.data;
                    i.skuData = a, i.attrs = a.attributeList;
                    var n = a.relationList,
                      c = [],
                      o = new Map;
                    n.forEach((function(t) {
                      var e = JSON.parse(t.relation);
                      c.push({
                        itemId: t.itemId,
                        skuInfo: e,
                        itemTicketStockVOS: t.itemTicketStockVOS,
                        prefeFlag: !(!i.prefeFlag || !t.reduceFlag)
                      }), t.itemTicketStockVOS.forEach((function(t) {
                        o.set("".concat(t.itemId, "-").concat(t.date), t.sellPrice)
                      }))
                    })), i.allStockMap = o, i.setSkuTips(), i.skuList = c, i.filterSku = c, 1 == a.dateType && (i.timeDataFormat(), i.chooseTime(i.skuItemTime)), i.$forceUpdate(), i.aggId = e, i.showTicketSku = !0, i.submitState = !1
                  } else i.$uni.showToast(s.msg), i.submitState = !1;
                  i.skuInit()
                })))
              },
              setSkuTips: function() {
                var t = this;
                if (this.skuData) {
                  var e = "",
                    i = [];
                  if (1 == this.skuData.dateType && "" == this.selectDate && (e = this.skuData.dateTitle || "使用日期"), e && i.push(e), this.skuData.attributeList.forEach((function(e) {
                      t.selectedSku[e.attributeKey] || i.push(e.attributeKey)
                    })), 1 == i.length) e = i[0];
                  else if (2 == i.length) e = i.join("和");
                  else if (i.length >= 3) {
                    var s = i.pop();
                    e = i.join("、") + "和" + s
                  }
                  e = e ? "请选择" + e : "", this.tipsInfo = e
                }
              },
              timeDataFormat: function() {
                var t = this;
                this.timeData = [];
                var e = [];
                this.skuData.mainPriceList.forEach((function(i) {
                  var s = i.itemId.split(","),
                    a = [];
                  s.forEach((function(e) {
                    t.allStockMap.has("".concat(e, "-").concat(i.date)) && a.push(t.allStockMap.get("".concat(e, "-").concat(i.date)))
                  }));
                  var n = Math.min.apply(Math, a),
                    c = Array.from(new Set(a)),
                    o = n && n > 0 ? "¥" + n : "免费";
                  i.dateShort = i.date.slice(5), i.week = t.getWeekOfDate(i.date), i.diy = o, i.diys = o, i.qi = 1 != c.length || "免费" == o, t.timeData.push(i), e.push(i.date), i.date == t.selectDateStr && (t.skuItemTime = i)
                })), this.filterTime = e.join(","), this.$forceUpdate()
              },
              getWeekOfDate: function(t) {
                t = t.replace(/-/g, "/");
                var e = u.format(new Date, "yyyy/MM/dd"),
                  i = u.format(u.addDay(new Date, 1), "yyyy/MM/dd");
                return t == e ? "今天" : t == i ? "明天" : "周" + "日一二三四五六".charAt(new Date(t).getDay())
              },
              chooseTime: function(t) {
                this.filterTime.includes(t.date) && (this.selectDate = t.date, this.filterSku = this.skuList.filter((function(e) {
                  return t.itemId.includes(e.itemId)
                })), this.setSkuOrderPrice(), this.setSkuTips(), this.$forceUpdate())
              },
              setSkuOrderPrice: function() {
                var t = this;
                this.selectDate && this.skuTicData && this.skuTicData.itemId ? this.skuTicData.ticketPrices.forEach((function(e) {
                  t.selectDate == e.date && (t.selectedHour = e)
                })) : this.selectedHour = ""
              },
              skuAct: function(t, e) {
                return this.selectedSku[t] === e
              },
              isSkuValid: function(t, e) {
                return this.getSkuValid(t, e).length > 0
              },
              getSkuValid: function(t, e) {
                var i = o(o({}, this.selectedSku), {}, (0, a.default)({}, t, e));
                return this.filterlist(i)
              },
              filterlist: function(t) {
                var e = Object.keys(t).filter((function(e) {
                  return "" !== t[e]
                }));
                return this.filterSku.filter((function(i) {
                  return e.every((function(e) {
                    return t[e] === i.skuInfo[e]
                  }))
                }))
              },
              isObjectEqual: function(t, e) {
                var i = Object.keys(t),
                  s = Object.keys(e);
                if (i.length !== s.length) return !1;
                for (var a = 0, n = i; a < n.length; a++) {
                  var c = n[a];
                  if (t[c] !== e[c]) return !1
                }
                return !0
              },
              handleClick: function(t, e) {
                var i = [],
                  s = [],
                  a = [];
                if (!(this.getSkuValid(t, e) <= 0)) {
                  this.selectedSku[t] = this.selectedSku[t] === e ? "" : e, this.itemSkuArr = Object.entries(this.selectedSku), this.selectReduce(this.itemSkuArr, t, e), this.setSkuTips(), (i = this.filterlist(this.selectedSku)).forEach((function(t) {
                    a.push(t.itemId), t.itemTicketStockVOS.forEach((function(t) {
                      (t.surplusStock > 0 || -1 == t.surplusStock) && s.push(t.date)
                    }))
                  }));
                  var n = Array.from(new Set(s));
                  this.filterTime = n.join(","), this.setTimeData(a), 1 == i.length && this.isObjectEqual(i[0].skuInfo, this.selectedSku) ? (this.skuSelectTicId = i[0].itemId, this.getTicDetail(this.skuSelectTicId, "jh")) : (this.skuSelectTicId = "", this.skuTicData = ""), this.setSkuOrderPrice(), this.$forceUpdate()
                }
              },
              setTimeData: function(t) {
                var e = this;
                this.timeData.forEach((function(i) {
                  if (e.filterTime.includes(i.date)) {
                    i.dis = !1;
                    var s = [];
                    t.forEach((function(t) {
                      e.allStockMap.has("".concat(t, "-").concat(i.date)) && s.push(e.allStockMap.get("".concat(t, "-").concat(i.date)))
                    }));
                    var a = Math.min.apply(Math, s),
                      n = Array.from(new Set(s)),
                      c = a && a > 0 ? "¥" + a : "免费";
                    i.diy = c, i.diys = c, i.qi = 1 != n.length || "免费" == c
                  } else i.dis = !0
                })), this.$forceUpdate()
              },
              reduceNum: function(t, e, i) {
                if (i.stockStatus && !i.sellOut && (this.parentIndex = t, this.itemIndex = e, 0 != i.ticketNum))
                  if (i.selectItemId) {
                    if (!i.selectedtime) return this.itemData = i, void(this.showTimeHour = !0);
                    i.ticketNum = i.ticketNum - 1, this.spotData[this.activeIndex].ticNum = this.spotData[this.activeIndex].ticNum - 1, 0 == i.ticketNum && (1 == i.ticketType ? 2 == i.itemUseDesc.dateType && 2 == i.itemUseDesc.stockLimit && (i.selectedtime = "") : 2 == i.ticketType && (i.selectedSku = [], i.selectItemId = "", i.skuItemTitle = "", i.skuCashBackAmount = null, i.seckillActivity = null, i.seckillItemId = "")), this.calcPriceAmount()
                  } else this.setTicketType(i)
              },
              addNum: function(t, e, i) {
                if (i.stockStatus && !i.sellOut) {
                  if (this.parentIndex = t, this.itemIndex = e, this.addType = !1, !i.selectItemId) return this.addType = !0, void this.setTicketType(i);
                  if (!i.selectedtime) return this.itemData = i, this.addType = !0, void(this.showTimeHour = !0);
                  var s;
                  s = 0 == i.itemUseDesc.maxBookNum ? 99999 : i.itemUseDesc.maxBookNum, 1 == i.itemUseDesc.dateType && 1 == i.itemUseDesc.stockLimitType && (s = Math.min(s, i.selectedtime.surplusStock)), 2 == i.itemUseDesc.dateType && i.selectedtime && -1 != i.selectedtime.surplusStock && (s = Math.min(s, i.selectedtime.surplusStock)), i.ticketNum >= s ? this.$uni.showToast("最多可选择".concat(s, "张")) : (i.ticketNum = i.ticketNum + 1, this.spotData[this.activeIndex].ticNum = this.spotData[this.activeIndex].ticNum + 1, this.calcPriceAmount())
                }
              },
              getMaxNum: function(t) {
                var e, i = !1;
                return t.ticketNum <= 0 || (e = 0 == t.itemUseDesc.maxBookNum ? 99999 : t.itemUseDesc.maxBookNum, 1 == t.itemUseDesc.dateType && 1 == t.itemUseDesc.stockLimitType && (e = Math.min(e, t.selectedtime.surplusStock)), 2 == t.itemUseDesc.dateType && t.selectedtime && -1 != t.selectedtime.surplusStock && (e = Math.min(e, t.selectedtime.surplusStock)), t.ticketNum >= e && (i = !0)), i
              },
              calcPriceAmount: function() {
                var e = this,
                  i = {
                    allAmount: 0,
                    reduction: 0,
                    lineId: this.lineId,
                    spotList: [],
                    orderAmount: 0
                  },
                  s = 0,
                  a = 0,
                  c = 0;
                this.spotData.forEach((function(t) {
                  c = c + t.ticNum || 0
                })), this.allNum = c, console.log(this.spotData), this.spotData.forEach((function(t) {
                  if (t.ticNum > 0) {
                    var o = {
                        destinationId: t.destinationId,
                        destinationName: t.destinationName,
                        mainPicture: t.mainPicture,
                        itemList: [],
                        ticNum: t.ticNum,
                        selectDateStr: t.selectDateStr,
                        spotAmount: 0
                      },
                      u = [],
                      r = 0,
                      l = 0;
                    t.classList.forEach((function(i) {
                      i.itemlist.forEach((function(i) {
                        if (i.ticketNum > 0) {
                          var s = i.selectedtime.sellPrice || 0,
                            a = new n.default(s),
                            o = new n.default(0);
                          i.cashBackAmount > 0 && c > t.ticNum && (o = new n.default(i.cashBackAmount)), i.skuCashBackAmount > 0 && c > t.ticNum && (o = new n.default(i.skuCashBackAmount)), o.toNumber() >= s && (o = a);
                          var d = o.times(i.ticketNum).toNumber(),
                            h = a.minus(o).times(i.ticketNum).toNumber();
                          u.push({
                            ticketNum: i.ticketNum,
                            itemId: i.selectItemId,
                            selectedtime: i.selectedtime,
                            itemUseDesc: i.itemUseDesc,
                            itemTitle: i.skuItemTitle ? i.skuItemTitle : i.itemTitle,
                            backAmount: d,
                            amount: h,
                            aggregationItemId: i.aggregationItemId || "",
                            selectedSku: i.selectedSku || "",
                            price: s,
                            seckillActivity: i.seckillActivity,
                            seckillItemId: i.seckillItemId
                          }), r = e.add(r, h), l = e.add(l, d)
                        }
                      }))
                    })), o.itemList = u, o.spotAmount = r, s = e.add(s, r), a = e.add(a, l), i.spotList.push(o)
                  }
                })), this.allAmount = s, this.reduction = a, i.allAmount = s, i.reduction = a, i.orderAmount = this.add(s, a), this.lineOrderInfo = i, console.log(this.spotData), uni.setStorageSync("lineOrderInfo", i)
              },
              add: function(t, e) {
                return t = (0, n.default)(t), e = (0, n.default)(e), t.plus(e).toNumber()
              },
              subtract: function(t, e) {
                return t = (0, n.default)(t), e = (0, n.default)(e), t.minus(e).toNumber()
              },
              multiply: function(t, e) {
                return t = (0, n.default)(t), e = (0, n.default)(e), t.times(e).toNumber()
              },
              submit: function() {
                if (this.calcPriceAmount(), this.allNum <= 0) this.$uni.showToast("订单门票数量至少为1");
                else {
                  var t = "/subPack/pages/fillInOrder/fillInOrder";
                  this.$util.isLogin(t) && this.$navigateTo({
                    url: t
                  })
                }
              },
              chooseSkuItem: function(t) {
                var e = this;
                if (t) {
                  var i = this.spotData[this.activeIndex].classList[this.parentIndex].itemlist[this.itemIndex];
                  i.selectItemId = t.itemId, i.skuItemTitle = t.itemTitle, i.itemUseDesc = t.itemUseDesc, i.seckillActivity = t.seckillActivity, i.seckillItemId = t.seckillItemId, i.skuCashBackAmount = t.cashBackAmount || 0, 1 == t.itemUseDesc.dateType ? i.selectedtime = t.ticketPrices[0] : t.ticketPrices.forEach((function(t) {
                    e.selectDateStr == t.date && (i.selectedtime = t)
                  })), i.selectedSku = this.itemSkuArr, this.spotData[this.activeIndex].classList[this.parentIndex].itemlist[this.itemIndex] = i, this.showTicketSku = !1, this.addType ? this.addNum(this.parentIndex, this.itemIndex, i) : this.calcPriceAmount()
                }
              },
              selectHourFn: function(t) {
                if (0 !== t.surplusStock && !0 !== t.disabled) {
                  var e = t;
                  this.selectedHourTime = e, this.selectedHourTime.time = e.startTime + "-" + e.endTime
                }
              },
              chooseTimeItem: function(t) {
                t.selectedtime = this.selectedHourTime, this.showTimeHour = !1, this.addType ? this.addNum(this.parentIndex, this.itemIndex, t) : this.calcPriceAmount()
              },
              changeHourTime: function(t, e, i) {
                this.selectedHourTime = i.selectedtime, this.showTimeHour = !0
              },
              changeSkuItem: function(t, e, i) {
                var s = this;
                this.parentIndex = t, this.itemIndex = e;
                var a = i.selectedSku;
                this.getSkuDetail(i.itemId), setTimeout((function() {
                  a.forEach((function(t) {
                    s.handleClick(t[0], t[1])
                  })), s.showTicketSku = !0
                }), 300)
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#fff;min-height:100vh;padding-bottom:130rpx;width:100%}.page-box .top-box{background:#fff;height:728rpx;padding:40rpx 0 50rpx 30rpx;position:-webkit-sticky;position:sticky;top:-242rpx;width:750rpx;z-index:80}.page-box .top-box .title{color:rgba(0,0,0,.8);font-size:32rpx;line-height:48rpx;width:100%}.page-box .top-box .titleF{background:#fff;height:88rpx;left:0;padding-left:30rpx;padding-top:20rpx;position:fixed;top:-2rpx;z-index:100}.page-box .top-box .spot-box{height:380rpx;margin-bottom:30rpx;margin-top:48rpx;width:720rpx}.page-box .top-box .spot-box .scroll-box-spot{height:380rpx;white-space:nowrap;width:720rpx}.page-box .top-box .spot-box .scroll-box-spot .item{background:#fff;border-radius:10rpx;box-shadow:0 10rpx 10rpx 0 rgba(0,0,0,.05);box-sizing:border-box;display:inline-block;height:360rpx;margin-right:20rpx;position:relative;vertical-align:top;width:300rpx}.page-box .top-box .spot-box .scroll-box-spot .item image{border-radius:10rpx;height:242rpx;width:100%}.page-box .top-box .spot-box .scroll-box-spot .item .spot-name{height:118rpx;padding:20rpx;text-align:center;width:300rpx}.page-box .top-box .spot-box .scroll-box-spot .item .spot-name .name{color:rgba(0,0,0,.8);font-size:28rpx;height:78rpx;line-height:39rpx;white-space:normal;width:100%}.page-box .top-box .spot-box .scroll-box-spot .item .icon-box{background:#ff5411;border-radius:10rpx 0 20rpx 0;box-shadow:2rpx 2rpx 0 0 rgba(0,0,0,.1);color:#fff;display:inline-block;font-size:24rpx;height:40rpx;left:0;line-height:40rpx;padding:0 12rpx;position:absolute;top:0}.page-box .top-box .spot-box .scroll-box-spot .active{background:rgba(255,84,17,.05);border:2rpx solid #ff5411;border-radius:12rpx;box-shadow:0 10rpx 20rpx 0 rgba(0,0,0,.08)}.page-box .top-box .spot-box .scroll-box-spot .ft{height:118rpx;margin-top:242rpx}.page-box .top-box .date-box{height:120rpx;margin-top:20rpx;width:690rpx}.page-box .top-box .date-box .scroll-box-date{position:relative;width:690rpx}.page-box .top-box .date-box .scroll-box-date .left{white-space:nowrap;width:566rpx}.page-box .top-box .date-box .scroll-box-date .left .date-item{background:#fff;border:1rpx solid #ccc;border-radius:20rpx;display:inline-block;height:120rpx;margin-right:10rpx;padding-top:20rpx;text-align:center;width:156rpx}.page-box .top-box .date-box .scroll-box-date .left .date-item .date-str{color:#444;font-size:26rpx;height:40rpx;line-height:40rpx}.page-box .top-box .date-box .scroll-box-date .left .date-item .price{color:#ff5411;font-size:26rpx;height:40rpx;line-height:40rpx}.page-box .top-box .date-box .scroll-box-date .left .disable{background:rgba(0,0,0,.05);border:none}.page-box .top-box .date-box .scroll-box-date .left .activeDate{background:#fff1ed;border:1rpx solid #ff5411}.page-box .top-box .date-box .scroll-box-date .line{background:#fff;box-shadow:-10rpx 0 40rpx 0 rgba(0,0,0,.2);height:120rpx;position:absolute;right:122rpx;top:0;width:10rpx;z-index:200}.page-box .top-box .date-box .scroll-box-date .right{align-items:center;background:#fff;display:-webkit-flex;display:flex;height:120rpx;justify-content:space-between;position:absolute;right:0;top:0;width:132rpx;z-index:201}.page-box .top-box .date-box .scroll-box-date .right .text{color:#444;font-size:26rpx;line-height:40rpx;margin-left:25rpx;width:52rpx}.page-box .top-box .date-box .scroll-box-date .right .arrow{height:30rpx;width:15rpx}.page-box .product-box{background:#fff;border-radius:20rpx 20rpx 0 0;box-sizing:border-box;height:auto;padding:0 30rpx 30rpx;position:relative;width:750rpx;z-index:60}.page-box .product-box .tic-class-box{margin-bottom:50rpx}.page-box .product-box .tic-class-box .class-title{color:#222;font-size:32rpx;line-height:48rpx}.page-box .product-box .tic-class-box .tic-box .tic-item{background:#fef4f0;border-radius:20rpx;margin-top:20rpx;padding:20rpx 10rpx 0;position:relative;width:690rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .tip-tag{background:#ff5411;border-radius:20rpx 20rpx 20rpx 4rpx;color:#fff;display:inline-block;font-size:24rpx;font-weight:500;height:40rpx;line-height:40rpx;padding:0 10rpx;position:absolute;right:0;top:-20rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .tip-tag .icon-box-t{display:inline-block;height:40rpx;margin-left:10rpx;vertical-align:middle;width:24rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .tip-tag .icon-box-t .icon{height:24rpx;width:24rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .tic-name{color:#333;font-size:28rpx;line-height:42rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .tic-name .ms-box{background:url('https://eshopfile.zhiyousx.com/2021060921340065204.png')50%no-repeat;background-size:64rpx 30rpx;color:#fff;display:inline-block;font-size:18rpx;height:30rpx;margin-top:8rpx;text-align:center;vertical-align:top;width:64rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .tic-body{align-items:center;background:#fef4f0;border-radius:20rpx;display:-webkit-flex;display:flex;height:144rpx;justify-content:space-between;margin-left:-10rpx;margin-top:10rpx;padding:0 10rpx;position:relative;width:690rpx;z-index:20}.page-box .product-box .tic-class-box .tic-box .tic-item .tic-body .tb-left{height:100%}.page-box .product-box .tic-class-box .tic-box .tic-item .tic-body .tb-left .tic-info{color:#ff5411;font-size:22rpx;height:34rpx;line-height:34rpx;margin-bottom:15rpx;margin-top:20rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .tic-body .tb-left .tic-info text{color:#ff5411;font-size:22rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .tic-body .tb-left .tic-tip{align-items:center;display:-webkit-flex;display:flex;height:34rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .tic-body .tb-left .tic-tip view{color:#a6a6a6;font-size:22rpx;line-height:34rpx;margin-right:10rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .tic-body .tb-left .tic-tip view text{color:#a6a6a6;font-size:22rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .tic-body .tb-right{height:100%;width:260rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .tic-body .tb-right .price-box{align-items:center;color:#ff5411;display:-webkit-flex;display:flex;font-size:32rpx;font-weight:700;height:40rpx;justify-content:flex-end;line-height:40rpx;padding-right:10rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .tic-body .tb-right .price-box .del{color:#a6a6a6;font-size:20rpx;text-decoration:line-through}.page-box .product-box .tic-class-box .tic-box .tic-item .tic-body .tb-right .price-box .sign{color:#ff5411;font-size:24rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .tic-body .tb-right .disable{opacity:.45}.page-box .product-box .tic-class-box .tic-box .tic-item .tic-body .tb-right .tic-num-box{color:#000;display:-webkit-flex;display:flex;font-size:28rpx;font-weight:700;height:62rpx;justify-content:space-between;line-height:62rpx;margin-left:40rpx;margin-top:20rpx;width:220rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .tic-body .tb-right .tic-num-box .tnb-it{background:rgba(0,0,0,.05);border-radius:6rpx;height:62rpx;text-align:center;width:60rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .additional-box{background:#fff;border:1rpx solid #ffccb8;border-radius:0 0 20rpx 20rpx;height:100rpx;margin-left:-10rpx;margin-top:-16rpx;position:relative;width:690rpx;z-index:10}.page-box .product-box .tic-class-box .tic-box .tic-item .additional-box .info-box{align-items:center;display:-webkit-flex;display:flex;height:84rpx;justify-content:space-between;margin-top:16rpx;padding:0 20rpx;width:100%}.page-box .product-box .tic-class-box .tic-box .tic-item .additional-box .info-box .info{color:rgba(0,0,0,.8);font-size:26rpx;line-height:36px;width:560rpx}.page-box .product-box .tic-class-box .tic-box .tic-item .additional-box .info-box .btn{color:#ff5411;font-size:26rpx;line-height:36px}.page-box .product-box .tic-class-box:last-of-type{margin-bottom:0}.page-box .firstTop{z-index:200!important}.page-box .footer-box{background:#fff;bottom:0;box-shadow:0-1rpx 0 0 rgba(0,0,0,.25);height:130rpx;justify-content:space-between;left:0;padding:0 30rpx;position:fixed;width:750rpx;z-index:12100}.page-box .footer-box .amount-info,.page-box .footer-box{align-items:center;display:-webkit-flex;display:flex}.page-box .footer-box .amount-info .amount-box{margin-right:40rpx;min-width:150rpx}.page-box .footer-box .amount-info .amount-box .price .p-it{display:-webkit-flex;display:flex;height:42rpx}.page-box .footer-box .amount-info .amount-box .price .p-it .name{color:#333;font-size:26rpx;line-height:42rpx;margin-right:4rpx}.page-box .footer-box .amount-info .amount-box .price .p-it .num{color:#222;font-size:30rpx;font-weight:700;line-height:42rpx}.page-box .footer-box .amount-info .amount-box .price .p-it .pt{color:#ff5411}.page-box .footer-box .amount-info .amount-box .price .p-it-last{margin-top:10rpx}.page-box .footer-box .amount-info .res{align-items:center;color:#ff5411;display:-webkit-flex;display:flex;font-size:24rpx;height:100rpx;line-height:100rpx;margin-right:10rpx}.page-box .footer-box .next-btn{background:linear-gradient(107deg,#fc4a9b,#ff5413);border-radius:40rpx;color:#fff;font-size:30rpx;font-weight:700;height:80rpx;line-height:80rpx;text-align:center;width:290rpx}.page-box .detailBox{background:#fff;margin-bottom:130rpx;min-height:500rpx;padding:40rpx;width:750rpx}.page-box .detailBox .title{color:#333;font-size:36rpx;line-height:54rpx}.page-box .detailBox .content .item{border-bottom:1rpx solid #e5e5e5;margin-top:50rpx;padding-bottom:30rpx}.page-box .detailBox .content .item .tic-title{color:#333;font-size:32rpx;font-weight:700;line-height:45rpx}.page-box .detailBox .content .item .use-time{background:#f5f5f5;border-radius:10rpx;color:#777;display:inline-block;font-size:26rpx;height:36rpx;line-height:36rpx;margin-top:14rpx;padding:0 10rpx}.page-box .detailBox .content .item .tic-num-info{width:100%}.page-box .detailBox .content .item .tic-num-info .it{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:30rpx;width:100%}.page-box .detailBox .content .item .tic-num-info .it .it-l{color:#333;display:-webkit-flex;display:flex;font-family:PingFang SC-Regular,PingFang SC;font-size:28rpx;line-height:40rpx;width:450rpx}.page-box .detailBox .content .item .tic-num-info .it .it-l .tag{border:1rpx solid #ff5411;border-radius:4rpx;color:#ff5411;font-size:24rpx;font-weight:500;height:36rpx;line-height:34rpx;margin-left:18rpx;margin-top:2rpx;padding:0 4rpx;white-space:nowrap}.page-box .detailBox .content .item .tic-num-info .it .it-r{color:#777;display:-webkit-flex;display:flex;font-size:24rpx;justify-content:flex-end}.page-box .detailBox .content .item .tic-num-info .it .it-r .p{color:#333;font-size:28rpx;margin-right:14rpx}.page-box .detailBox .content .order-detail{margin-top:20rpx}.page-box .detailBox .content .order-detail .od-item{align-items:center;color:#333;display:-webkit-flex;display:flex;font-size:28rpx;justify-content:space-between;margin-top:30rpx}.page-box .detailBox .content .order-detail .color1 text{color:#ff5411}.page-box .detailBox .content .order-detail .color2 text{color:#222;font-size:36rpx}.page-box .skuBox{height:100%;padding:40rpx 40rpx 0;position:relative}.page-box .skuBox .skuTitle{color:rgba(0,0,0,.8);font-size:36rpx;line-height:54rpx}.page-box .skuBox .use-time{background:#f5f5f5;border-radius:10rpx;color:#777;display:inline-block;font-size:26rpx;height:36rpx;line-height:36rpx;margin-top:20rpx;padding:0 10rpx}.page-box .skuBox .skuTips{background:#f5f5f5;border-radius:10rpx;margin-top:20rpx;padding:10rpx;width:670rpx}.page-box .skuBox .skuTips .info{color:#777;font-size:24rpx;line-height:36rpx;width:100%}.page-box .skuBox .scroll-sku{padding-top:50rpx}.page-box .skuBox .attr-box{margin-bottom:50rpx}.page-box .skuBox .attr-box .attr-head{align-items:center;display:-webkit-flex;display:flex;padding-right:20rpx;position:relative}.page-box .skuBox .attr-box .attr-name{color:#333;font-size:28rpx;line-height:34rpx;max-width:670rpx}.page-box .skuBox .attr-box .attr-name .attr-name-desc{color:#ff5411;font-size:26rpx;margin-left:20rpx;padding-right:8rpx}.page-box .skuBox .attr-box image{flex:none;height:18rpx;width:11rpx}.page-box .skuBox .attr-box .calendar-box{align-items:center;display:-webkit-flex;display:flex;height:166rpx;justify-content:space-between;margin-top:20rpx;width:100%}.page-box .skuBox .attr-box .calendar-box .left{white-space:nowrap;width:532rpx}.page-box .skuBox .attr-box .calendar-box .left .item{border:1px solid #ccc;border-radius:20rpx;display:inline-block;height:166rpx;line-height:36rpx;margin-right:20rpx;text-align:center;width:118rpx}.page-box .skuBox .attr-box .calendar-box .left .item .week{color:#333;font-size:24rpx;margin-top:20rpx}.page-box .skuBox .attr-box .calendar-box .left .item .day{color:#333;font-size:30rpx;font-weight:700;line-height:42rpx;margin:6rpx 0}.page-box .skuBox .attr-box .calendar-box .left .item .price{color:#ff5411;font-size:24rpx}.page-box .skuBox .attr-box .calendar-box .left .item:last-child{margin-right:0}.page-box .skuBox .attr-box .calendar-box .left .act{background:#fff1ed;border:1px solid #ff5411}.page-box .skuBox .attr-box .calendar-box .left .dis{background:rgba(0,0,0,.05);border:none;opacity:.5}.page-box .skuBox .attr-box .calendar-box .right{align-items:center;border:1px solid #ccc;border-radius:20rpx;display:-webkit-flex;display:flex;height:166rpx;justify-content:center;width:118rpx}.page-box .skuBox .attr-box .calendar-box .right .text{color:#333;font-size:24rpx;line-height:48rpx;margin-right:6rpx;width:48rpx;word-break:break-all}.page-box .skuBox .attr-box .calendar-box .right .arrow{border-right:1rpx solid #555;border-top:1rpx solid #555;height:20rpx;transform:rotate(45deg);width:20rpx}.page-box .skuBox .attr-box .attr-scoll .attr-it{border:1px solid #ccc;border-radius:20rpx;color:#555;display:inline-block;font-size:26rpx;line-height:40rpx;margin:20rpx 20rpx 0 0;padding:14rpx 30rpx;position:relative}.page-box .skuBox .attr-box .attr-scoll .attr-it .reduce{background:#ff5411;border-radius:6rpx;color:#fff;height:32rpx;line-height:30rpx;position:absolute;right:-8rpx;text-align:center;top:-7rpx;width:35rpx}.page-box .skuBox .attr-box .attr-scoll .active{background:#fff1ed;border:1px solid #ff5411}.page-box .skuBox .attr-box .attr-scoll .disabled{background:rgba(0,0,0,.05);border:1px solid rgba(0,0,0,.05)}.page-box .skuBox .bottom-sku{height:20rpx}.page-box .skuBox .sku-info-box{align-items:center;background:#fff1ed;bottom:100rpx;display:-webkit-flex;display:flex;height:56rpx;justify-content:space-between;left:0;padding:0 40rpx;position:absolute;width:750rpx}.page-box .skuBox .sku-info-box .sku-info{font-size:24rpx;width:500rpx}.page-box .skuBox .sku-info-box .sku-tip{align-items:center;display:-webkit-flex;display:flex}.page-box .skuBox .sku-info-box .sku-tip .l{color:#555;font-size:24rpx;margin-right:10rpx}.page-box .skuBox .bot-box{align-items:center;background:#fff;bottom:0;box-shadow:0-1rpx 0 0#e3e3e3;display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between;left:0;padding:0 30rpx;position:absolute;width:750rpx}.page-box .skuBox .bot-box .price{color:#ff5411;font-size:34rpx;font-weight:700;line-height:40rpx}.page-box .skuBox .bot-box .btn{background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:40rpx;color:#fff;font-size:30rpx;font-weight:700;height:80rpx;line-height:80rpx;opacity:.5;text-align:center;width:360rpx}.page-box .skuBox .bot-box .act{opacity:1}.ytxz-box{background:#fafafa;height:100%;position:relative;width:750rpx}.ytxz-box .content-box1{padding:68rpx 30rpx 0}.ytxz-box .content-box1 .title-box{position:relative}.ytxz-box .content-box1 .title-box .p1{color:#000;font-size:36rpx;font-weight:700;line-height:50rpx;padding-right:50rpx;width:660rpx}.ytxz-box .content-box1 .title-box .p2{color:#000;font-size:28rpx;line-height:40rpx;opacity:.5;padding-bottom:32rpx;padding-top:20rpx}.ytxz-box .content-box1 .bottom-box{height:625rpx}.ytxz-box .content-box1 .bottom-box .refundItem{display:block;line-height:48rpx;padding-bottom:0rpx}.ytxz-box .content-box1 .bottom-box .line1{margin-bottom:30rpx}.ytxz-box .content-box1 .bottom-box .line1 .title{color:#333;font-size:30rpx;font-weight:700;line-height:50rpx;margin-bottom:5rpx}.ytxz-box .content-box1 .bottom-box .line1>.b .item{display:-webkit-flex;display:flex;margin-bottom:4rpx}.ytxz-box .content-box1 .bottom-box .line1>.b .item:last-child{margin-bottom:0}.ytxz-box .content-box1 .bottom-box .line1>.b .item>.l{border:2rpx solid #ff7d2a;border-radius:4rpx;border-radius:6rpx;color:#ff7d2a;font-size:22rpx;height:32rpx;line-height:28rpx;margin-right:24rpx;margin-top:9rpx;padding:0 4rpx;text-align:center;width:120rpx}.ytxz-box .content-box1 .bottom-box .line1>.b .item .lc{border:2rpx solid #a17111;color:#a17111;width:140rpx}.ytxz-box .content-box1 .bottom-box .line1>.b .item>.r{flex:1;line-height:48rpx;white-space:pre-wrap}.ytxz-box .content-box1 .bottom-box .community-box{margin-bottom:30rpx;width:690rpx}.ytxz-box .content-box1 .bottom-box .line2{margin-bottom:30rpx}.ytxz-box .content-box1 .bottom-box .line2 .title{color:#333;font-size:30rpx;font-weight:700;line-height:50rpx;margin-bottom:4rpx}.ytxz-box .content-box1 .bottom-box .line2>.b .options{align-items:baseline;display:-webkit-flex;display:flex;margin-bottom:4rpx}.ytxz-box .content-box1 .bottom-box .line2>.b .options view{color:#777474;display:-webkit-flex;display:flex;flex-direction:column;font-size:26rpx;justify-content:flex-start}.ytxz-box .content-box1 .bottom-box .line2>.b .options view.title{white-space:nowrap;width:134rpx}.ytxz-box .content-box1 .bottom-box .line2>.b .options view.content{width:564rpx}.ytxz-box .content-box1 .bottom-box .table{border:1rpx solid #e4e4e4;border-bottom:none;margin-bottom:30rpx}.ytxz-box .content-box1 .bottom-box .tr{border-bottom:1rpx solid #e4e4e4;display:-webkit-flex;display:flex}.ytxz-box .content-box1 .bottom-box .tr.first{background:#fef4f0}.ytxz-box .content-box1 .bottom-box .tr.first .td{font-weight:600}.ytxz-box .content-box1 .bottom-box .tr .1st{width:200rpx}.ytxz-box .content-box1 .bottom-box .tr .td{align-items:center;border-right:1rpx solid #e4e4e4;border-top:none;color:#656565;display:-webkit-flex;display:flex;line-height:42rpx;padding:16rpx 25rpx;text-align:left;word-break:break-all}.ytxz-box .content-box1 .bottom-box .tr .td:last-child{border-right:none}.ytxz-box .content-box1 .bottom-box .line3 .title{color:#333;font-size:30rpx;font-weight:700;line-height:50rpx}.ytxz-box .content-box1 .bottom-box .line3>.b .item{align-items:center;display:-webkit-flex;display:flex;margin-bottom:15rpx;margin-top:30rpx;position:relative}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col1{border:2rpx solid #ff7d2a;border-radius:4rpx;color:#ff7d2a;font-size:22rpx;height:32rpx;line-height:28rpx;margin-right:22rpx;padding:0 24rpx}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col1c{border:2rpx solid #a17111;color:#a17111}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col2{color:#777474;font-size:26rpx;margin-right:30rpx;width:220rpx}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col3{border-width:600;color:#333;font-size:32rpx;text-align:left;width:230rpx}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col4 image{height:32rpx;position:absolute;right:0;top:-5rpx;width:32rpx}.ytxz-box .book-box{background-color:#fff;bottom:0;box-shadow:0-1rpx 0 0#e3e3e3;display:-webkit-flex;display:flex;height:100rpx;left:0;position:absolute;width:100%}.ytxz-box .book-box>.l{align-items:center;display:-webkit-flex;display:flex;flex:1;padding-left:40rpx}.ytxz-box .book-box>.l .p1{color:#777474;font-size:26rpx;margin-right:20rpx}.ytxz-box .book-box>.l .p2{color:#ff5411;font-size:32rpx}.ytxz-box .book-box>.btn{background:linear-gradient(56deg,#fc4a9e,#ff5411);border-radius:0;color:#fff;font-size:32rpx;line-height:100rpx;width:320rpx}.ytxz-box .book-box>.btn.emptys{background:linear-gradient(253deg,#ffb2d5,#ffc1aa)}.ytxz-box .book-box>.btn.chansi{background:#c7b795}.ytxz-box .book-box>.btn.chansic{background:#c1bcb1}.hour-box{height:100%;padding:40rpx 40rpx 0;position:relative}.hour-box .title{color:rgba(0,0,0,.8);font-size:36rpx;line-height:54rpx}.hour-box .hour-title{color:rgba(0,0,0,.8);font-size:28rpx;line-height:33rpx;margin-top:50rpx}.hour-box .use-time{background:#f5f5f5;border-radius:10rpx;color:#777;display:inline-block;font-size:26rpx;height:36rpx;line-height:36rpx;margin-top:20rpx;padding:0 10rpx}.hour-box .scroll-hour{padding-top:20rpx}.hour-box .scroll-hour .item-box{display:-webkit-flex;display:flex;flex-wrap:wrap}.hour-box .scroll-hour .item-box .item{border:1rpx solid #e6e6e6;border-radius:20rpx;box-sizing:border-box;color:#2a2a2a;display:inline-block;font-size:26rpx;line-height:1;margin-bottom:20rpx;margin-right:20rpx;padding:25rpx 0 20rpx;text-align:center;width:210rpx}.hour-box .scroll-hour .item-box .item .p1{margin-bottom:15rpx}.hour-box .scroll-hour .item-box .item .p2{color:#f15252}.hour-box .scroll-hour .item-box .item:nth-child(3n){margin-right:0}.hour-box .scroll-hour .item-box .active{background:#fff1ed}.hour-box .scroll-hour .item-box .disabled{background:#f5f5f5}.hour-box .bot-box{align-items:center;background:#fff;bottom:0;box-shadow:0-1rpx 0 0#e3e3e3;display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between;left:0;padding:0 30rpx;position:absolute;width:750rpx}.hour-box .bot-box .price{color:#ff5411;font-size:34rpx;font-weight:700;line-height:40rpx}.hour-box .bot-box .btn{background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:40rpx;color:#fff;font-size:30rpx;font-weight:700;height:80rpx;line-height:80rpx;opacity:.5;text-align:center;width:360rpx}.hour-box .bot-box .act{opacity:1}.calendar-box{background:#fff}.errBox{background:#fff;height:auto;padding:40rpx 40rpx 120rpx;position:relative;width:640rpx}.errBox .name{color:#333;font-size:32rpx;line-height:48rpx;text-align:center;width:100%}.errBox .err-item{display:-webkit-flex;display:flex;font-size:30rpx;height:auto;line-height:35rpx;margin-bottom:10rpx;margin-top:30rpx}.errBox .but-popup{background:#fff;border:1rpx solid #ccc;border-radius:50rpx;color:#444;left:40rpx}.errBox .but-popup,.errBox .but-popup1{bottom:20rpx;font-size:26rpx;height:80rpx;line-height:80rpx;position:absolute;text-align:center;width:250rpx}.errBox .but-popup1{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:50rpx;color:#fff;right:40rpx}.popup-tips{background:#fff;padding:40rpx;width:640rpx}
.resource-note{color:#8a6b4d;font-size:26rpx;line-height:38rpx;padding:18rpx 0}
</style>
