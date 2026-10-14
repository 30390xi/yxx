<template>
<view class="container" v-if="infoObj.itemTitle">
    <view class="box1">
        <view class="name">{{ infoObj.groupScenicName }}</view>
    </view>
    <view class="box2">
        <view class="new-box">
            <block v-if="infoObj.itemUseDesc.dateType==2">
                <view class="date-box">
                    <view class="title">使用日期</view>
                    <view class="scroll-box">
                        <scroll-view class="left" :scrollIntoView="scrollToDate" :scrollX="true">
                            <view :class="['item','',item.date===selectedDate?'active':'',item.disabled===true?'disabled':'',infoObj.scenicType==1&&item.date===selectedDate?'csBg':'']" :id="'date-'+item.date" :key="index" v-for="(item, index) in timeData">
                                <view class="p1">{{item.dateShort+' '+item.week}}</view>
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
                        <view :class="['item','',selectedHour.time===item.startTime+'-'+item.endTime?'active':'',infoObj.scenicType==1&&selectedHour.time===item.startTime+'-'+item.endTime?'csBg':'',item.disabled===true?'disabled':'']" v-for="(item, index) in hourArr">
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
                    <view class="p1">{{infoObj.itemUseDesc.datePeriodBegin+'-'+infoObj.itemUseDesc.datePeriodEnd+'有效'}}</view>
                    <view class="p2" v-if="infoObj.bookingInfoTag.validityModeBookStr3">{{infoObj.bookingInfoTag.validityModeBookStr3}}</view>
                </view>
            </view>
        </view>
        <view class="buy-limit" v-if="infoObj.itemUseDesc.accountAstrictNum>0">
            <view class="p">{{infoObj.itemUseDesc.accountAstrictDays+'天最多'+(infoObj.skuItemType==0?'购买':'预约')+infoObj.itemUseDesc.accountAstrictNum+$root.f0}}</view>
        </view>
        <view class="buy-limit" v-if="infoObj.itemUseDesc.idAstrictNum>0">
            <view class="p">{{'同一身份证'+infoObj.itemUseDesc.idAstrictDays+'天最多'+(infoObj.skuItemType==0?'购买':'预约')+infoObj.itemUseDesc.idAstrictNum+$root.f1}}</view>
        </view>
    </view>
    <view class="pack-box">
        <view class="pack-item">
            <view class="pt-it">
                <view class="name singleLineText">{{ infoObj.groupItemName }}</view>
                <view class="price" v-if="ticketPrice!=null&&ticketPrice>=0">{{'￥'+ticketPrice+''}}</view>
            </view>
            <view class="pt-it">
                <view class="info-box">
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
                            <text class="" style="color:#777777;">
                                <text class="">｜</text>{{(infoObj.skuItemType==0?'购买':'预约')+'须知 >'}}</text>
                        </view>
                    </view>
                </view>
                <view class="op-box">
                    <view class="op" @click="reduceNum(0)">-</view>
                    <view class="op-num">{{ (groupTicketArr[0].ticketNum||0) }}</view>
                    <view :class="['op','',infoObj.scenicType==1?'csBg':'']" @click="addNum(0)">+</view>
                </view>
            </view>
        </view>
        <view class="pack-item" v-for="(item, index) in $root.l0">
            <view class="pt-it">
                <view class="name singleLineText">{{ item.groupItemName }}</view>
                <view class="price">
                    <block v-if="!showHourBox&&selectedObj&&(selectedObj['surplusStock'+index]>0||selectedObj['surplusStock'+index]==-1)">{{'￥'+selectedObj['sellPrice'+index]+''}}</block>
                    <block v-if="showHourBox&&selectedHour&&(selectedHour['surplusStock'+index]>0||selectedHour['surplusStock'+index]==-1)">{{'￥'+selectedHour['sellPrice'+index]+''}}</block>
                </view>
            </view>
            <view class="pt-it">
                <view class="info-box">
                    <view class="info">
                        <view class="" v-if="item.scenicType==1">
                            <text class="">入寺先预约</text>
                            <text class="">｜</text>
                            <text class="">取消请提前</text>
                            <text class="" @click="showBookTip(infoObj)">
                                <text class="" style="color:#777777;">｜</text>{{(item.skuItemType==0?'购买':'预约')+'须知 >'}}</text>
                        </view>
                        <view class="" v-else>
                            <text class="" style="color:#FF5411;" v-if="item.bookingInfoTag.reserveTimeTag&&showTimeTag&&item.bookingInfoTag.bookingTag=='可订今日'">{{item.bookingInfoTag.reserveTimeTag+''}}<text class="" style="color:#777777;">｜</text>
                            </text>
                            <text class="" :style="'color:'+item.m3+';'">{{item.m4}}</text>
                            <text class="">｜</text>
                            <text class="" :style="'color:'+item.m5+';'">{{item.bookingInfoTag.changeTag}}</text>
                            <text class="" style="color:#FF5411;" v-if="item.bookingInfoTag.idCardTag">
                                <text class="" style="color:#777777;">｜</text>{{item.bookingInfoTag.idCardTag+''}}</text>
                            <text class="" style="color:#777777;">
                                <text class="">｜</text>{{(item.skuItemType==0?'购买':'预约')+'须知 >'}}</text>
                        </view>
                    </view>
                </view>
                <view class="op-box" v-if="showHourBox">
                    <view class="op">-</view>
                    <view :class="['op-num','',selectedHour&&(!selectedHour['surplusStock'+index]||selectedHour['surplusStock'+index]<1)&&selectedHour['surplusStock'+index]!=-1&&!groupTicketArr[index+1].ticketNum?'opDisabled':'']">{{ (groupTicketArr[index+1].ticketNum||0) }}</view>
                    <view :class="['op','',selectedHour&&(!selectedHour['surplusStock'+index]||selectedHour['surplusStock'+index]<1)&&selectedHour['surplusStock'+index]!=-1?'opDisabled':'',infoObj.scenicType==1?'csBg':'']">+</view>
                </view>
                <view class="op-box" v-else>
                    <view class="op">-</view>
                    <view :class="['op-num','',selectedObj&&(!selectedObj['surplusStock'+index]||selectedObj['surplusStock'+index]<1)&&selectedObj['surplusStock'+index]!=-1&&!groupTicketArr[index+1].ticketNum?'opDisabled':'']">{{ (groupTicketArr[index+1].ticketNum||0) }}</view>
                    <view :class="['op','',selectedObj&&(!selectedObj['surplusStock'+index]||selectedObj['surplusStock'+index]<1)&&selectedObj['surplusStock'+index]!=-1?'opDisabled':'',infoObj.scenicType==1?'csBg':'']">+</view>
                </view>
            </view>
        </view>
    </view>
    <view class="touristNumTips">
        <view class="t1">{{'需填写 '+$root.f2+' 位游客信息'}}</view>
        <view class="t2" v-if="ptSum>0">还需<text class="">{{ptSum}}</text>位</view>
    </view>
    <view class="box3" v-if="itemInfo.inputGroup[0]" v-for="(itemInfo, itemIndex) in $root.l3">
        <block v-if="touristInfoTypeLevel!=0">
            <view class="tMame" v-if="itemIndex==0">{{infoObj.groupItemName}}</view>
            <view class="tMame" v-else>{{ infoObj.itemGroupVOList[itemIndex-1].groupItemName }}</view>
        </block>
        <view class="scroll-box">
            <scroll-view class="passenger-box" :scrollX="true">
                <view :class="['user','',item.g0?'active':'',!item.g1?'dis':'',item.g2?'csBg':'',item.g3?'csColor':'']" v-for="(item, index) in itemInfo.l1">{{ item.name }}</view>
                <view class="user-but">
                    <view class="but">{{ (commonUsedTouristList[0]?'新增/更换':'+ 新增信息') }}</view>
                </view>
            </scroll-view>
        </view>
        <view class="contact-box">
            <view class="item" v-for="(it, i) in itemInfo.l2">
                <view class="row">
                    <view class="l">
                        <image mode class="image-l" src="https://eshopfile.zhiyousx.com/173950170060653880.png"></image>
                    </view>
                    <input class="r" data-type="name" placeholder="请按Surname/Given name格式填写" :value="it.name" v-if="it.cardType==1"></input>
                    <block v-else>
                        <ocr-index class="" :itemIndex="itemIndex" style="width:calc(100% - 80rpx);" :subscript="i" :vueSlots="['content']" v-if="it.m6">
                            <input class="r" data-type="name" placeholder="请填写姓名" slot="content" :value="it.name"></input>
                        </ocr-index>
                        <input class="r" data-type="name" placeholder="请填写姓名" :value="it.name" v-if="it.m7"></input>
                    </block>
                </view>
                <block v-if="itemIndex==0">
                    <view class="row" v-if="infoObj.itemUseDesc.touristInfoType==1&&i==0||infoObj.itemUseDesc.touristInfoType==2">
                        <view class="l"></view>
                        <view class="user-card">
                            <view class="card-name">{{ it.f3 }}</view>
                            <u-icon class="" color="#555555" name="arrow-down" size="20"></u-icon>
                        </view>
                        <input :class="['r','',it.g4?'errId':'']" data-type="cardCode" placeholder="请填写证件号码" style="border:none;" type="idcard" :value="it.idCard" v-if="it.cardType==0"></input>
                        <input class="r" data-type="cardCode" placeholder="请填写证件号码" style="border:none;" type="text" :value="it.idCard" v-else></input>
                    </view>
                </block>
                <block v-else>
                    <view class="row" v-if="infoObj.itemGroupVOList[itemIndex-1].itemUseDesc.touristInfoType==1&&i==0||infoObj.itemGroupVOList[itemIndex-1].itemUseDesc.touristInfoType==2">
                        <view class="l"></view>
                        <view class="user-card">
                            <view class="card-name">{{ it.f4 }}</view>
                            <u-icon class="" color="#555555" name="arrow-down" size="20"></u-icon>
                        </view>
                        <input :class="['r','',it.g5?'errId':'']" data-type="cardCode" placeholder="请填写证件号码" style="border:none;" type="idcard" :value="it.idCard" v-if="it.cardType==0"></input>
                        <input class="r" data-type="cardCode" placeholder="请填写证件号码" style="border:none;" type="text" :value="it.idCard" v-else></input>
                    </view>
                </block>
                <view class="row" v-if="it.m8">
                    <view class="l"></view>
                    <input class="r" data-type="phone" placeholder="请填写手机号码" type="number" :value="it.telephone"></input>
                    <view class="addPhone" @click="getUserPhone()">填写本机号码</view>
                </view>
            </view>
        </view>
    </view>
    <view class="couponBox" v-if="!isFree">
        <view class="cb1">
            <view class="cb1-1">优惠券</view>
            <view class="cb1-2" v-if="discountAmount>0">已选1张</view>
        </view>
        <view class="cb2" @click="chooseCoupon($event)">
            <view class="cb2-2" v-if="!couponArr[0]">无可用</view>
            <block v-else>
                <view class="cb2-1" v-if="discountAmount>0">{{'-¥'+$root.m9}}</view>
                <block v-else>
                    <view class="cb2-3" v-if="discountAmount==0">{{$root.g6+'张可用'}}</view>
                </block>
            </block>
            <uni-icons class="" color="#BDBDBD" size="19" type="arrowright"></uni-icons>
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
                        <text class="">游玩时间:</text>{{bookInfoObj.time}}</view>
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
                    <view class="p1" id="ytxz-box-title">{{ydxz.itemAbbreviate||ydxz.itemTitle}}</view>
                    <view class="p2">
                        <text class="" v-if="ydxz.scenicType!=1">{{'已'+(infoObj.skuItemType==0?'售':'约')+$root.f5}}</text>
                    </view>
                </view>
                <scroll-view class="bottom-box" scrollY="true" :style="'height:'+bookTipHeight+'rpx'+';'">
                    <view class="line2" v-if="$root.g7">
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
                                    <view class="" v-for="(item, index) in $root.l4">
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
                        <view class="tr" v-if="item.timeDesc" v-for="(item, index) in $root.l5">
                            <view class="td" style="width:480rpx;">{{item.m10}}</view>
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
        <view class="l" v-if="!isFree">您需支付:<text class="">{{'￥'+$root.m11}}</text>
        </view>
        <button :class="['r','',infoObj.scenicType==1?'csBtn':'']" :disabled="disabledSubmitBtn" @click="submit($event)">{{infoObj.scenicType!=1?'立即预订':'免费预约'}}</button>
    </view>
    <u-popup borderRadius="20" class="" :maskCloseAble="false" mode="center" :value="showNotice" :vueSlots="['default']" @input="showNotice = $event">
        <view class="hasnotice">
            <view class="title">温馨提示</view>
            <view class="scontent">
                <text class="">{{infoObj.useNotes}}</text>
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
                <text class="">{{showHourBox?'当前时段库存不足':'当前日期库存不足~'}}</text>
            </view>
            <view class="close" @click="closeNoStock($event)">知道了</view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="showCoupon" :vueSlots="['default']" @input="showCoupon = $event">
        <view class="couponcardBox">
            <view class="title">优惠券</view>
            <scroll-view class="scontent" :scrollY="true">
                <view class="item" v-for="(item, __i1__) in $root.l7">
                    <view class="info">
                        <view class="name singleLineText">{{item.name}}</view>
                        <view class="date" v-if="item.useTimeSlot==0">{{item.f6+'-'+item.f7}}</view>
                        <view class="date" v-if="item.useTimeSlot==1">{{item.validityEndTime+'前可用'}}</view>
                        <view class="date" v-if="item.useTimeSlot==2">{{'可预'+(infoObj.skuItemType==0?'订':'约')+'【'+item.f8+'-'+item.f9+'】的门票'}}</view>
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
                    <image class="radio" mode="aspect" src="https://eshopfile.zhiyousx.com/2022031716044893716.png" v-if="userCouponId==item.userCouponId"></image>
                    <image class="radio" mode="aspect" src="https://eshopfile.zhiyousx.com/2022031716040660783.png" v-else></image>
                </view>
            </scroll-view>
            <view class="no" @click="cancelCoupon($event)">
                <text class="">暂不使用优惠券</text>
                <image class="" mode="aspect" src="https://eshopfile.zhiyousx.com/2022031716044893716.png" v-if="userCouponId==-1"></image>
                <image class="" mode="aspect" src="https://eshopfile.zhiyousx.com/2022031716040660783.png" v-else></image>
            </view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" mode="center" :value="showGroupErr" :vueSlots="['default']" @input="showGroupErr = $event">
        <view class="errBox">
            <view class="name">温馨提示</view>
            <scroll-view class="err-info" scrollY="true">
                <view class="err-box" :key="index" v-for="(item, index) in groupErrList">
                    <view class="err-item">{{ item.groupItemName+' '+item.msg }}</view>
                </view>
            </scroll-view>
            <view class="but-popup" @click="confirmOrder($event)">确定</view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="showGiftCard" :vueSlots="['default']" @input="showGiftCard = $event">
        <view class="fill-card-box">
            <view class="name">礼品卡</view>
            <view class="card-box-popup">
                <scroll-view class="" scrollY="true" style="height:600rpx;">
                    <view class="card-item-popup" :key="index" v-for="(item, index) in $root.l8">
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
                                <image mode class="card-change" src="../../static/images/cardYes.png" v-if="item.g8"></image>
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
            <view class="savePassenger" @click="e1($event)">保存</view>
            <view :class="['but-popup','',infoObj.scenicType==1?'csColor':'',infoObj.scenicType==1?'csBorder':'']" @click="addPassenger(groupTicketIndex)">+ 新增联系人</view>
            <view class="">
                <scroll-view class="passenger-box-popup" scrollY="true">
                    <view class="user-box pass" :key="index" v-for="(item, index) in $root.l9">
                        <view class="info-box">
                            <image mode class="user-change" src="../../static/images/cardYes.png" v-if="item.g9"></image>
                            <image mode class="user-change" src="../../static/images/cardNo.png" v-else></image>
                            <view :class="['user-info','',!item.g10?'dis':'']">
                                <view class="name">{{item.name}}</view>
                                <view class="u-phone" v-if="item.phone">
                                    <view class="u-phone1">手机号</view>
                                    <view class="u-phone2">{{ item.f10 }}</view>
                                </view>
                                <view class="u-phone" v-if="item.cardType">
                                    <view class="u-phone1">证件类型</view>
                                    <view class="u-phone2">{{ item.f11 }}</view>
                                </view>
                                <view class="u-phone" v-if="item.idCarNo">
                                    <view class="u-phone1">证件号</view>
                                    <view class="u-phone2">{{ item.f12 }}</view>
                                </view>
                            </view>
                        </view>
                        <image mode class="user-edit" src="../../static/images/edit.png"></image>
                    </view>
                </scroll-view>
            </view>
        </view>
    </u-popup>
    <u-popup class=" vue-ref" ref="uPopup" :maskCloseAble="true" mode="center" :value="showGiftBag" :vueSlots="['default']" @input="showGiftBag = $event">
        <view class="giftBag" v-if="giftBagData.orderActivePrize&&giftBagData.orderActivePrize.giftBag">
            <image class="giftBag-img" mode="widthFix" :src="giftBagData.orderActivePrize.giftBag.image"></image>
            <view class="gift-mid">
                <view class="gift-title">{{ giftBagData.orderActivePrize.giftBag.desc }}</view>
                <scroll-view class="card-box" :scrollY="true" :style="'height:'+(gbCl>3?'604rpx':gbCl==1?'255rpx':gbCl*151+'rpx')+';'">
                    <view class="">
                        <view :class="['',gbCl==1?'candItem1':'',gbCl>1?'candItem':'']" v-for="(it, i) in $root.l10">
                            <image mode class="it-img1" src="https://eshopfile.zhiyousx.com/166384545957301610.png" v-if="gbCl>1&&i==0"></image>
                            <image mode class="it-img2" src="https://eshopfile.zhiyousx.com/166384386610789834.png" v-if="gbCl>1&&i>0&&i<gbCl-1"></image>
                            <image mode class="it-img3" src="https://eshopfile.zhiyousx.com/166384545957301610.png" v-if="gbCl>1&&gbCl-i==1"></image>
                            <view class="item-card-box">
                                <view class="left">
                                    <image class="" mode="aspectFill" :src="it.couponImage"></image>
                                    <view class="info">
                                        <view class="name">{{ it.couponName }}</view>
                                        <view class="time">{{ it.f13+' -\n    \t\t\t\t\t\t\t\t\t\t'+it.f14 }}</view>
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
                        <view class="" style="height:110rpx;" v-if="gbCl>1"></view>
                    </view>
                </scroll-view>
                <image mode class="giftBag-bottom-img" src="/static/captured/c28c4c6cd2db0904.png"></image>
                <view class="giftBag-but" @click="closeGiftPack($event)">我知道了</view>
                <view class="box-tip" @click="goDiscounts($event)">可至"我的"-"优惠券"中查看 ></view>
            </view>
        </view>
    </u-popup>
    <u-popup class="" :maskCloseAble="true" mode="center" :value="giftPhone" :vueSlots="['default']" @input="giftPhone = $event">
        <view class="title-bar" :style="'background-image:'+'url('+giftBagData.giftBagImage+')'+';'">
            <view class="phone-style">
                <view class="title-style">{{giftBagData.orderActivePrize.prizeDesc}}</view>
            </view>
        </view>
        <view class="gift-content">
            <view class="gift-box max-h">
                <view class="within-box">
                    <image class="phoneImg" mode="aspectFit" :src="giftBagData.orderActivePrize.prizeImage"></image>
                    <scroll-view class="yello" :scrollY="true" style="height:500rpx;">
                        <u-form class="" labelPosition="top" :model="form" :vueSlots="['default']">
                            <u-form-item class="" label="输入姓名" labelPosition="top" prop="name" :vueSlots="['default']">
                                <u-input class="" :clearable="false" height="58" :placehod="placehod" placeholderStyle="color: '#9B9B9B'; padding-left: '10rpx'" :value="form.name" @input="form.name = $event"></u-input>
                            </u-form-item>
                            <u-form-item class="" label="输入手机号" labelPosition="top" prop="phone" :vueSlots="['default']">
                                <u-input class="" :clearable="false" height="58" :placehod="placehod" placeholderStyle="color: '#9B9B9B'; padding-left: '10rpx'" :value="form.phone" @input="form.phone = $event"></u-input>
                            </u-form-item>
                            <u-form-item class="" label="收货地址" labelPosition="top" prop="address" :vueSlots="['default']">
                                <u-input class="" :clearable="false" height="58" :placehod="placehod" placeholderStyle="color: '#9B9B9B'; padding-left: '10rpx'" :value="form.address" @input="form.address = $event"></u-input>
                            </u-form-item>
                        </u-form>
                        <view class="empty-box _div"></view>
                    </scroll-view>
                </view>
                <view class="footer">
                    <view class="btn">
                        <view class="btn-style" @click="sure($event)">确定</view>
                    </view>
                    <view class="active">活动规则</view>
                </view>
            </view>
        </view>
    </u-popup>
    <u-popup class="" :maskCloseAble="true" mode="center" :value="giftMoney" :vueSlots="['default']" @input="giftMoney = $event">
        <view class="title-bar" :style="'background-image:'+'url('+giftBagData.giftBagImage+')'+';'">
            <view class="title">{{giftBagData.orderActivePrize.prizeDesc}}</view>
        </view>
        <view class="gift-content">
            <view class="gift-box min-h">
                <view class="within-box">
                    <image class="img" mode="aspectFit" :src="giftBagData.orderActivePrize.prizeImage"></image>
                    <view class="illustrate">{{giftBagData.orderActivePrize.prizeDesc}}</view>
                </view>
                <view class="footer">
                    <view class="btn">
                        <view class="btn-style" @click="closeGiftPack($event)">知道了</view>
                    </view>
                    <view class="active">活动规则</view>
                </view>
            </view>
        </view>
    </u-popup>
    <u-popup class="" :maskCloseAble="true" mode="center" :value="noGift" :vueSlots="['default']" @input="noGift = $event">
        <view class="title-bar" :style="'background-image:'+'url('+giftBagData.giftBagImage+')'+';'">
            <view class="title">{{giftBagData.orderActivePrize.prizeDesc}}</view>
        </view>
        <view class="gift-content">
            <view class="gift-box min-h">
                <view class="within-box">
                    <image class="img" mode="aspectFit" :src="giftBagData.orderActivePrize.prizeImage"></image>
                </view>
                <view class="footer">
                    <view class="btn">
                        <view class="btn-style" @click="closeGiftPack($event)">再接再厉</view>
                    </view>
                    <view class="active">活动规则</view>
                </view>
            </view>
        </view>
    </u-popup>
    <view :class="['red-packets-Box','',animationType>0?'b1':'']" :hidden="!showPacketBox" :style="'background:'+(animationType==0?'rgba(0, 0, 0, 0.7)':'')+';'">
        <view :class="['red-box','',animationType==0?'a0':'',animationType==1?'a1':'',animationType>1&&animationType<3?'a2':'',animationType==4?'a4':'']" @click="closeBox()">
            <view class="red-box-imgBox">
                <image mode class="red-img" src="https://eshopfile.zhiyousx.com/166375766042742591.png" v-if="animationType<3"></image>
                <image mode :class="['red-top','',animationType==3?'a3':'']" src="https://eshopfile.zhiyousx.com/166375879186329370.png"></image>
                <image mode :class="['red-bottom','',animationType==3?'a31':'']" src="https://eshopfile.zhiyousx.com/166375881330329349.png"></image>
                <image mode :class="['red-img1-1','',animationType==3?'a32s':'']" src="https://eshopfile.zhiyousx.com/166383758911999357.png"></image>
                <image mode :class="['red-img1-2','',animationType==3?'a32m':'']" src="https://eshopfile.zhiyousx.com/166383762954099488.png"></image>
                <image mode :class="['red-img1-3','',animationType==3?'a32l':'']" src="https://eshopfile.zhiyousx.com/166383764742027825.png"></image>
                <image mode :class="['red-img2','',animationType==3?'a33':'']" src="https://eshopfile.zhiyousx.com/166376006214008240.png"></image>
                <image mode :class="['red-img3','',animationType==3?'a34':'']" src="https://eshopfile.zhiyousx.com/166376009989063829.png"></image>
                <view class="red-name" :hidden="!(animationType==0)">点击开盲盒</view>
            </view>
        </view>
    </view>
    <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="showCertificate" :vueSlots="['default']" @input="showCertificate = $event">
        <view class="certificate">
            <view class="name">选择证件类型</view>
            <view class="certificate-box">
                <view class="certificate-item" :key="index" v-for="(item, index) in $root.l11">
                    <view class="t">{{ item.f15 }}</view>
                    <image mode class="icon" src="../../static/images/cardYes.png" v-if="realCardType==item"></image>
                    <image mode class="icon" src="../../static/images/cardNo.png" v-else></image>
                </view>
            </view>
        </view>
    </u-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              ocrIndex: function() {
                i.e("components/ocr/ocrIndex").then(function() {
                  return resolve(i("7882"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            data: function() {
              return {
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
                hourArr: [],
                scrollToDate: "",
                selectedHour: "",
                ticketPrice: null,
                ticketNum: 1,
                priceAmount: 0,
                selectedDate: "",
                departTimeSlot: "",
                inputGroup: [],
                haveToId: !1,
                discountAmount: 0,
                userCouponId: "",
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
                coupondk: "",
                errIdCard: [],
                childTicketList: [],
                selectedObj: "",
                groupTicketArr: [{
                  ticketNum: 1,
                  inputGroup: [],
                  haveToId: !1,
                  usedTouristIdsPopData: [],
                  itemId: ""
                }],
                touristInfoTypeLevel: 0,
                groupTicketIndex: 0,
                touristId: "",
                ptSum: 0,
                groupErrList: [],
                showGroupErr: !1,
                errJump: !1,
                inputSum: 0,
                masterTicketNum: 1,
                masterAmount: 0,
                showTimeTag: !1,
                parseStyle: {
                  p: "word-break: break-all;"
                },
                parseStyle1: {
                  p: "word-break: break-all;line-height:48rpx;"
                },
                showCertificate: !1,
                cardTypeList: [],
                realCardTypeList: [],
                cardParentIndex: 0,
                userIndex: 0,
                realCardType: 0,
                cacheGroupTicketArr: [],
                selectedDateSpot: "",
                form: {
                  name: "",
                  phone: "",
                  address: ""
                },
                giftPhone: !1,
                placehod: "",
                orderActiveRecordId: "",
                noGift: !1,
                giftMoney: !1,
                notQueryCouponFlag: null,
                infosUse: !1
              }
            },
            onLoad: function(t) {
              uni.setStorageSync("selectedHour", ""), uni.setStorageSync("isFromCalendarPage", ""), this.requestNum = 1;
              var i = this;
              uni.getSystemInfo({
                success: function(e) {
                  i.windowHeight = e.windowHeight, i.winWidth = e.windowWidth, i.unit = e.windowWidth / 750
                }
              }), uni.showLoading("加载中"), this._ticketId = t.ticketId, this.shareMemberId = t.shareMemberId || "", t.templeOpenId && this.setChanSiOpenId(t.templeOpenId), t.selectedDate && (this.selectedDateSpot = t.selectedDate), this.getInfo(), this.getGiftCard(), this.telephoneVoList = uni.getStorageSync("telephoneVoList"), uni.removeStorageSync("telephoneVoList"), this.requestNum = 1, this.audio.loop = !0, this.audio.src = this.beforeAudio
            },
            onShow: function() {
              this.disabledSubmitBtn = !1, 1 == this.requestNum ? this.requestNum = 2 : this.getCommonUsedTouristList("onShow");
              var t = uni.getStorageSync("templeOpenId");
              t && this.setChanSiOpenId(t);
              var i = uni.getStorageSync("selectedHour");
              if (i && uni.getStorageSync("isFromCalendarPage") && this.timeData[0]) {
                this.departTimeSlot = i.time;
                var o = this.timeData.find((function(e) {
                  return e.date === i.date
                }));
                this.scrollToDate = "date-" + i.date, this.showTimeTag = "今天" == this.getWeekOfDate(i.date), this.selectBookDateInPage(o, !0), this.$forceUpdate()
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
              touristNumFilter: function(e) {
                var t = 0;
                return e.forEach((function(e) {
                  t += e.inputGroup.length
                })), t.toFixed(0)
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
              groupTicketArr: {
                deep: !0,
                immediate: !0,
                handler: function(e, t) {
                  var i = 0,
                    o = 0;
                  t && (this.groupTicketArr.forEach((function(e) {
                    var t = e.inputGroup.length;
                    o += t, e.inputGroup.forEach((function(e) {
                      (e.id || e.name || e.telephone || e.idCard) && (t -= 1)
                    })), i += t
                  })), this.inputSum = o, this.ptSum = i.toFixed(0), this.cacheGroupTicketArr = this.$util.deepCopy(this.groupTicketArr))
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
              ocrIndexComShow: function(e, t, i) {
                var o = 0 === e.cardType && !e.idCard,
                  r = 0 === i && (1 === this.infoObj.itemUseDesc.touristInfoType && 0 === t || 2 === this.infoObj.itemUseDesc.touristInfoType),
                  s = 0 !== i && (1 === this.infoObj.itemGroupVOList[i - 1].itemUseDesc.touristInfoType && 0 === t || 2 === this.infoObj.itemGroupVOList[i - 1].itemUseDesc.touristInfoType);
                return o && (r || s)
              },
              ocrIndexShow: function(e, t, i) {
                var o = 0 === e.cardType && !e.idCard,
                  r = 0 === i && (1 === this.infoObj.itemUseDesc.touristInfoType && 0 === t || 2 === this.infoObj.itemUseDesc.touristInfoType),
                  s = 0 !== i && (1 === this.infoObj.itemGroupVOList[i - 1].itemUseDesc.touristInfoType && 0 === t || 2 === this.infoObj.itemGroupVOList[i - 1].itemUseDesc.touristInfoType),
                  n = o && (r || s);
                return 1 !== e.cardType && !n
              },
              setDataInfos: function(e, t, i) {
                var o = this;
                if (console.log(e, "lllllll", t, "ffffffffff", i, ";;;;;;;;;;"), !e) return this.infosUse = !1, void setTimeout((function() {
                  o.$uni.showToast("识别失败，请重新识别或手动填写")
                }), 500);
                this.infosUse = !0;
                var r = this.groupTicketArr[i].inputGroup[t].id;
                this.groupTicketArr[i].usedTouristIdsPopData = this.groupTicketArr[i].usedTouristIdsPopData.filter((function(e) {
                  return e.id != r
                })), this.groupTicketArr[i].inputGroup.forEach((function(i, o) {
                  o == t && (i.name = e.name, i.idCard = e.idCarNo, i.cardType = 0, i.telephone = "", i.id = "")
                })), this.$forceUpdate()
              },
              showItemPhone: function(e) {
                var t = 0;
                return this.groupTicketArr.forEach((function(i, o) {
                  o < e && (t += i.inputGroup.length)
                })), !(t > 0)
              },
              handlerChange: function(e, t, i, o) {
                if (0 == t && 0 == i.cardType) {
                  var r = e.detail.value;
                  this.$util.checkId(r, i.cardType).code && (this.getIdList(), this.$forceUpdate())
                }
              },
              getIdList: function() {
                var e = this,
                  t = this.infoObj,
                  i = [],
                  o = 0;
                if (this.groupTicketArr.forEach((function(r) {
                    o += r.ticketNum, r.itemId == t.itemId && (i = r.inputGroup, e.masterTicketNum = r.ticketNum, e.masterAmount = r.priceAmount)
                  })), o > this.masterTicketNum) return this.discountAmount = "", this.userCouponId = "", void(this.couponArr = []);
                if (i[0] && t.itemUseDesc)
                  if (0 != t.itemUseDesc.touristInfoType) {
                    var r = [];
                    for (var s in i) {
                      var n = i[s];
                      if (this.haveToId) this.$util.checkId(n.idCard, n.cardType).code && r.push(n.idCard)
                    }
                    var u = Array.from(new Set(r));
                    2 == t.itemUseDesc.touristInfoType && this.haveToId && u.length < r.length ? this.$uni.showToast("证件号不能重复") : this.getBestCoupon(u)
                  } else this.getBestCoupon([])
              },
              openRedBox: function() {
                var e = this;
                this.audio.stop(), this.audio.loop = !1, this.animationType = 1, this.audio.src = this.newOpen, this.audio.play(), setTimeout((function() {
                  e.animationType = 2
                }), 1e3), setTimeout((function() {
                  e.animationType = 3
                }), 2e3), setTimeout((function() {
                  1 == e.giftBagData.orderActivePrize.prizeType ? e.showGiftBag = !0 : 2 == e.giftBagData.orderActivePrize.prizeType ? e.giftMoney = !0 : 3 == e.giftBagData.orderActivePrize.prizeType ? e.giftPhone = !0 : e.noGift = !0
                }), 3200), setTimeout((function() {
                  e.animationType = 4
                }), 3500), setTimeout((function() {
                  e.showPacketBox = !1
                }), 4500)
              },
              closeBox: function() {
                0 == this.animationType && (this.showPacketBox = !1, this.audio.stop(), this.audio.destroy())
              },
              closeGiftPack: function() {
                1 == this.giftBagData.orderActivePrize.prizeType ? this.showGiftBag = !1 : 2 == this.giftBagData.orderActivePrize.prizeType ? this.giftMoney = !1 : this.noGift = !1, this.audio.stop(), this.audio.destroy()
              },
              sure: function() {
                var e = this;
                if (!this.form.name) return this.$uni.showToast("请填写姓名");
                if (!this.form.phone) return this.$uni.showToast("请填写手机号");
                if (!/^1[23456789]\d{9}$/.test(this.form.phone)) return this.$uni.showToast("请填写正确手机号");
                if (!this.form.address) return this.$uni.showToast("请填写地址");
                var t = this.form,
                  i = {
                    contactName: t.name,
                    contactMobile: t.phone,
                    address: t.address,
                    orderActiveRecordId: this.orderActiveRecordId
                  };
                this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/orderActive/updateContactInfo", i).then((function(t) {
                  1 == t.code && e.$uni.showToast("提交成功，奖品将于订单使用后尽快安排发出")
                })).catch((function(e) {})).finally((function() {
                  e.giftPhone = !1
                }))
              },
              showBookTip: function(t) {
                var i = this,
                  o = this;
                this.isShowBookTip = !0, this.ydxz = t, this.$nextTick((function() {
                  setTimeout((function() {
                    var t = uni.createSelectorQuery();
                    t.select("#ytxz-box-title").boundingClientRect(), t.exec((function(e) {
                      o.bookTipHeight = o.windowHeight / o.winWidth * 750 * .7 - 230 - e[0].height / o.unit
                    })), i.$forceUpdate()
                  }), 100)
                }))
              },
              toFixedNumAmount: function() {
                var e = new n.default(this.priceAmount).minus(this.giftCardAmount).toNumber();
                return this.toFixedNum(e)
              },
              toFixedNum: function(e) {
                if (!e) return 0;
                var t = e.toString().split(".");
                return t[1] && t[1].length > 2 ? e.toFixed(2) : e
              },
              getInfo: function(t) {
                var i = this,
                  r = this;
                t || uni.showLoading({
                  title: "加载中"
                }), this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item/getTiketProductDetail", {
                  itemId: this._ticketId
                }).then((function(s) {
                  if (i.notQueryCouponFlag = s.data.notQueryCouponFlag, t || uni.hideLoading(), 1 === s.code) {
                    var n = s.data;
                    i.infoObj = n, i.cardTypeList = [];
                    var u = i.$util.deepCopy(i.infoObj.itemGroupVOList);
                    if (u.unshift(i.infoObj), u.forEach((function(e) {
                        var t = [];
                        0 == e.itemUseDesc.touristInfoType ? t = [0, 1, 2, 3, 4, 5, 6, 7, 8] : (e.itemUseDesc.realCardTypeCodes.split(",").forEach((function(e) {
                          t.push(Number(e))
                        })), t.length < 1 && (t = [0])), i.cardTypeList.push(t)
                      })), i.touristInfoTypeLevel = n.itemUseDesc.touristInfoType, n.itemGroupVOList.forEach((function(e) {
                        e.itemUseDesc.touristInfoType > i.touristInfoTypeLevel && (i.touristInfoTypeLevel = e.itemUseDesc.touristInfoType)
                      })), 0 !== i.infoObj.ticketPrices.length) {
                      if (i.disabledSubmitBtn = !1, t || (uni.setStorageSync("touristInfoTypeLevel", i.touristInfoTypeLevel), i.ticketNum = n.itemUseDesc.minBookNum, i.groupTicketArr[0].ticketNum = n.itemUseDesc.minBookNum, i.groupTicketArr[0].itemId = n.itemId, i.initInputGroup(), n.useNotes && (i.showNotice = !0)), 2 == i.infoObj.itemUseDesc.dateType && (i.showHourBox = 2 == i.infoObj.itemUseDesc.stockLimit, i.setCalendar(t)), 1 == i.infoObj.itemUseDesc.dateType) {
                        i.selectedObj = {}, i.infoObj.itemUseDesc.datePeriodBegin = i.infoObj.itemUseDesc.datePeriodBegin.slice(0, 10), i.infoObj.itemUseDesc.datePeriodEnd = i.infoObj.itemUseDesc.datePeriodEnd.slice(0, 10), i.infoObj.itemUseDesc.dateCanUse = i.getWeekNotUse(i.infoObj.itemUseDesc.dateCanUse), i.ticketPrice = i.infoObj.ticketPrices[0].sellPrice;
                        var a = i.infoObj.itemGroupVOList;
                        i.showTimeTag = !0, t ? (a.forEach((function(e, t) {
                          i.selectedObj["sellPrice".concat(t)] = e.ticketPrices[0].sellPrice, i.selectedObj["surplusStock".concat(t)] = e.ticketPrices[0].surplusStock
                        })), uni.getStorageSync("touristInfoTypeLevel") == i.touristInfoTypeLevel ? i.refreshLevelS() : i.refreshLevelNo()) : a.forEach((function(e, t) {
                          i.groupTicketArr.push({
                            ticketNum: 0,
                            inputGroup: [],
                            haveToId: !1,
                            usedTouristIdsPopData: [],
                            itemId: e.groupItemId
                          }), i.selectedObj["sellPrice".concat(t)] = e.ticketPrices[0].sellPrice, i.selectedObj["surplusStock".concat(t)] = e.ticketPrices[0].surplusStock
                        })), i.$forceUpdate(), i.calcPriceAmount()
                      }
                      t && uni.stopPullDownRefresh()
                    } else i.$uni.showToast("暂无可".concat(0 == r.infoObj.skuItemType ? "订" : "约", "日期"))
                  } else i.$uni.showToast(s.msg)
                })).catch((function(t) {
                  uni.hideLoading(), i.disabledSubmitBtn = !1, uni.stopPullDownRefresh()
                }))
              },
              refreshLevelS: function() {
                var t = this,
                  i = this.$util.deepCopy(this.infoObj.itemGroupVOList),
                  o = [];
                if (i.unshift(this.infoObj), 0 != this.touristInfoTypeLevel) {
                  i.forEach((function(e, i) {
                    var r = {
                      ticketNum: 0,
                      inputGroup: [],
                      haveToId: !1,
                      usedTouristIdsPopData: [],
                      itemId: e.itemId
                    };
                    i > 0 && (r.itemId = e.groupItemId), t.groupTicketArr.forEach((function(e) {
                      r.itemId == e.itemId && (r = e)
                    })), o.push(r)
                  }));
                  var r = this.cardTypeList[0][0];
                  o.forEach((function(e, t) {
                    var o = [];
                    if (2 == i[t].itemUseDesc.touristInfoType) {
                      if (e.ticketNum > 0) {
                        for (var s = 0; s < e.ticketNum; s++) e.inputGroup[s] ? o.push(e.inputGroup[s]) : o.push({
                          name: "",
                          telephone: "",
                          idCard: "",
                          cardType: r
                        });
                        e.inputGroup = o
                      }
                    } else e.ticketNum > 0 && (e.inputGroup = [e.inputGroup[0]], e.inputGroup[0].id && (e.usedTouristIdsPopData = e.usedTouristIdsPopData.filter((function(t) {
                      return t.id == e.inputGroup[0].id
                    }))))
                  })), this.groupTicketArr = o, this.$forceUpdate()
                }
                uni.setStorageSync("touristInfoTypeLevel", this.touristInfoTypeLevel)
              },
              refreshLevelNo: function() {
                var t = this,
                  i = this.$util.deepCopy(this.infoObj.itemGroupVOList),
                  o = this.$util.deepCopy(this.groupTicketArr);
                i.unshift(this.infoObj);
                var r = [],
                  n = [],
                  u = [];
                o.forEach((function(e) {
                  var t;
                  n = (t = n).concat.apply(t, (0, s.default)(e.inputGroup))
                }));
                var a = n[0];
                if (this.commonUsedTouristList.forEach((function(e) {
                    a && a.id == e.id && u.push(e)
                  })), 0 == this.touristInfoTypeLevel) {
                  a || (a = {
                    name: "",
                    telephone: "",
                    idCard: ""
                  });
                  var c = {
                    ticketNum: 1,
                    inputGroup: [a],
                    haveToId: !1,
                    usedTouristIdsPopData: u,
                    itemId: this.infoObj.itemId
                  };
                  i.forEach((function(e, i) {
                    var o = {
                      ticketNum: 0,
                      inputGroup: [],
                      haveToId: !1,
                      usedTouristIdsPopData: [],
                      itemId: e.itemId
                    };
                    i > 0 && (o.itemId = e.groupItemId), t.groupTicketArr.forEach((function(e) {
                      o.itemId == e.itemId && ((o = e).inputGroup = [], o.usedTouristIdsPopData = [])
                    })), r.push(o)
                  })), r.forEach((function(e) {
                    c.itemId == e.itemId && (e.inputGroup = c.inputGroup, e.usedTouristIdsPopData = c.usedTouristIdsPopData)
                  }))
                } else 0 == uni.getStorageSync("touristInfoTypeLevel") ? (i.forEach((function(e, i) {
                  var o = {
                    ticketNum: 0,
                    inputGroup: [],
                    haveToId: !1,
                    usedTouristIdsPopData: [],
                    itemId: e.itemId
                  };
                  i > 0 && (o.itemId = e.groupItemId), t.groupTicketArr.forEach((function(e) {
                    o.itemId == e.itemId && (o = e)
                  })), r.push(o)
                })), a || (a = {
                  name: "",
                  telephone: "",
                  idCard: "",
                  cardType: 0
                }), r.forEach((function(e, i) {
                  var o = t.infoObj,
                    r = [];
                  i > 0 && (o = t.infoObj.itemGroupVOList[i - 1]);
                  var s = t.cardTypeList[i][0];
                  if (a.cardType = s, 2 == o.itemUseDesc.touristInfoType) {
                    if (e.ticketNum > 0)
                      for (var n = 0; n < e.ticketNum; n++) 0 == n ? r.push(a) : r.push({
                        name: "",
                        telephone: "",
                        idCard: "",
                        cardType: s
                      })
                  } else e.ticketNum > 0 && r.push(a);
                  e.usedTouristIdsPopData = u, e.inputGroup = r
                }))) : i.forEach((function(e, i) {
                  var o = {
                    ticketNum: 0,
                    inputGroup: [],
                    haveToId: !1,
                    usedTouristIdsPopData: [],
                    itemId: e.itemId
                  };
                  i > 0 && (o.itemId = e.groupItemId), t.groupTicketArr.forEach((function(e) {
                    o.itemId == e.itemId && (o = e)
                  })), r.push(o)
                })), r.forEach((function(e, o) {
                  var r = [];
                  if (2 == i[o].itemUseDesc.touristInfoType) {
                    if (e.ticketNum > 0) {
                      for (var s = 0; s < e.ticketNum; s++) e.inputGroup[s] ? r.push(e.inputGroup[s]) : r.push({
                        name: "",
                        telephone: "",
                        idCard: "",
                        cardType: t.cardTypeList[o][0]
                      });
                      e.inputGroup = r
                    }
                  } else e.ticketNum > 0 && (e.inputGroup = [e.inputGroup[0]], e.inputGroup[0].id && (e.usedTouristIdsPopData = e.usedTouristIdsPopData.filter((function(t) {
                    return t.id == e.inputGroup[0].id
                  }))))
                }));
                this.groupTicketArr = r, this.$forceUpdate(), uni.setStorageSync("touristInfoTypeLevel", this.touristInfoTypeLevel)
              },
              getRefundTag: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("条件退" !== e || 2 == t.itemUseDesc.dateType && !this.selectedDate) return e;
                if (2 == t.itemUseDesc.dateType) {
                  if (this.showHourBox && !this.selectedHour) return e;
                  var i = t.refundFeeList,
                    o = "";
                  if (null === i[0].feeType) {
                    if (2 === t.itemUseDesc.refundRuleType) {
                      var r = t.itemUseDesc.refundLimitHour,
                        s = t.itemUseDesc.refundLimitDay,
                        n = t.itemUseDesc.refundLimitMinute,
                        u = this.addDate(this.selectedDate, -s);
                      return u = u + " " + (r < 10 ? "0" + r : r) + ":" + (n < 10 ? "0" + n : n) + ":00", this.compareBigDate(u) ? u.slice(0, u.length - 3).replace(" ", "的") + "前免费退" : "当前下单时间不可退"
                    }
                    if (3 === t.itemUseDesc.refundRuleType) {
                      var a = this.selectedDate + "的23:59";
                      return a + "前免费退"
                    }
                    return e
                  }
                  if (0 === i[0].timeLimit) o = this.getTag(i[0]);
                  else if (1 === i[0].timeLimit || 2 === i[0].timeLimit || 4 === i[0].timeLimit)
                    for (var c = 1, d = "", p = 0; p < i.length; p++) {
                      var h = i[p],
                        f = this.addDate(this.selectedDate, 1 === h.timeLimit ? -h.day : h.day);
                      if (f = p === i.length - 1 ? d : f + " " + (h.hour < 10 ? "0" + h.hour : h.hour) + ":" + (h.minute < 10 ? "0" + h.minute : h.minute) + ":00", this.compareBigDate(f) || p === i.length - 1) {
                        if (0 !== h.fee && 0 != h.feeType) {
                          o = 3 == c ? d.slice(0, d.length - 3).replace(" ", "的") + "前免费退" : this.getTag(h);
                          break
                        }
                        c = 3, d = f, p === i.length - 1 && (o = "随时退")
                      } else d = f
                    }
                  return o
                }
                if (3 === t.itemUseDesc.refundRuleType && null === t.refundFeeList[0].feeType) {
                  var m = t.itemUseDesc.datePeriodEnd + "的23:59";
                  return this.compareBigDate(m) ? m + "前免费退" : "当前下单时间不可退"
                }
                if (2 === t.itemUseDesc.refundRuleType && null === t.refundFeeList[0].feeType) {
                  var l = t.itemUseDesc.refundLimitHour,
                    g = t.itemUseDesc.refundLimitDay,
                    T = t.itemUseDesc.refundLimitMinute,
                    y = this.addDate(t.itemUseDesc.datePeriodEnd, -g);
                  return y = y + " " + (l < 10 ? "0" + l : l) + ":" + (T < 10 ? "0" + T : T) + ":00", this.compareBigDate(y) ? y.slice(0, y.length - 3).replace(" ", "的") + "前免费退" : "当前下单时间不可退"
                }
                var I = t.refundFeeList,
                  k = "";
                if (0 === I[0].timeLimit) k = this.getTag(I[0]);
                else if (1 === I[0].timeLimit || 2 === I[0].timeLimit || 4 === I[0].timeLimit)
                  for (var v = 1, b = "", D = 0; D < I.length; D++) {
                    var O = I[D],
                      A = "";
                    if (4 === O.timeLimit ? A = moment().format("YYYY-MM-DD") : (A = t.itemUseDesc.datePeriodEnd, O.timeLimit, O.day), A = this.addDate(A, 1 === O.timeLimit ? -O.day : O.day), console.log(A), A = D === I.length - 1 ? b : A + " " + (O.hour < 10 ? "0" + O.hour : O.hour) + ":" + (O.minute < 10 ? "0" + O.minute : O.minute) + ":00", this.compareBigDate(A) || D === I.length - 1) {
                      if (0 !== O.fee && 0 != O.feeType) {
                        k = 3 == v ? b.replace(" ", "的") + "前免费退" : this.getTag(O);
                        break
                      }
                      v = 3, b = A, D === I.length - 1 && (k = "随时退")
                    } else b = A
                  }
                return k
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
                      r = this.infoObj.itemUseDesc.refundLimitMinute;
                    return this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, -o) + " " + (i < 10 ? "0" + i : i) + ":" + (r < 10 ? "0" + r : r) + "之" + (0 === t ? "前（含）" : "后") + "申请退款"
                  }
                  if (0 == e.timeLimit) return "购买后申请退款";
                  if (1 == e.timeLimit) {
                    var s = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, -e.day);
                    return "".concat(s, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                  }
                  if (2 == e.timeLimit) {
                    var n = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, e.day);
                    return "".concat(n, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                  }
                  if (4 == e.timeLimit) {
                    var u = moment().format("YYYY-MM-DD"),
                      a = this.addDate(u, e.day);
                    return "".concat(a, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                  }
                  if (null == e.timeLimit) {
                    var c = "";
                    if (1 == (e = this.ydxz.refundFeeList[t - 1]).timeLimit) c = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, -e.day);
                    else if (2 == e.timeLimit) c = this.addDate(this.infoObj.itemUseDesc.datePeriodEnd, e.day);
                    else if (4 == e.timeLimit) {
                      var d = moment().format("YYYY-MM-DD"),
                        p = this.addDate(d, e.day);
                      return "".concat(p, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之后申请退款")
                    }
                    return "".concat(c, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之后申请退款")
                  }
                  return e.timeDesc || ""
                }
                if (!this.selectedDate) return e.timeDesc || "";
                if (3 === this.ydxz.itemUseDesc.refundRuleType && null == e.feeType) return this.selectedDate + " 23:59之" + (0 === t ? "前（含）" : "后") + "申请退款";
                if (2 === this.ydxz.itemUseDesc.refundRuleType && null == e.feeType) {
                  var h = this.ydxz.itemUseDesc.refundLimitHour,
                    f = this.ydxz.itemUseDesc.refundLimitDay,
                    m = this.ydxz.itemUseDesc.refundLimitMinute;
                  return this.addDate(this.selectedDate, -f) + " " + (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + "之" + (0 === t ? "前（含）" : "后") + "申请退款"
                }
                if (0 == e.timeLimit) return "购买后申请退款";
                if (1 == e.timeLimit) {
                  var l = this.addDate(this.selectedDate, -e.day);
                  return "".concat(l, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                }
                if (2 == e.timeLimit || 4 == e.timeLimit) {
                  var g = this.addDate(this.selectedDate, e.day);
                  return "".concat(g, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之前（含）申请退款")
                }
                if (null == e.timeLimit) {
                  var T = "";
                  return 1 == (e = this.ydxz.refundFeeList[t - 1]).timeLimit ? T = this.addDate(this.selectedDate, -e.day) : 2 != e.timeLimit && 4 != e.timeLimit || (T = this.addDate(this.selectedDate, e.day)), "".concat(T, " ").concat(e.hour < 10 ? "0" + e.hour : e.hour, ":").concat(e.minute < 10 ? "0" + e.minute : e.minute, "之后申请退款")
                }
              },
              compareBigDate: function(e) {
                return new Date(e) > new Date
              },
              addDate: function(e, t) {
                var i = new Date(e);
                i.setDate(i.getDate() + t);
                var o = i.getMonth() + 1,
                  r = i.getDate();
                return o < 10 && (o = "0" + o), r < 10 && (r = "0" + r), i.getFullYear() + "-" + o + "-" + r
              },
              refreshNum: function(e) {
                var t = this,
                  i = e.find((function(e) {
                    return e.date == t.selectedDate
                  }));
                i && this.selectBookDateInPage(i, !0)
              },
              timeDataFormat: function() {
                var e = this,
                  t = this.infoObj,
                  i = this.showHourBox,
                  o = this.infoObj.skuSellOutInfo ? this.infoObj.skuSellOutInfo : 0 == this.infoObj.skuItemType ? "已满" : "约满";
                return this.infoObj.ticketPrices.map((function(r) {
                  var s = "";
                  e.selectedDate == r.date && i && e.getHourData(r.itemTicketStocks);
                  var n = r.sellPrice && r.sellPrice > 0 ? "¥" + r.sellPrice : "免费";
                  if (s = t.skuInStockInfo ? t.skuInStockInfo : r.surplusStock > 50 ? n : "余" + r.surplusStock, 0 === r.surplusStock) s = o, r.disabled = !0;
                  else if (-1 === r.surplusStock) s = t.skuInStockInfo || n;
                  else if (r.surplusStock > 0)
                    if (e.showHourBox) {
                      e.clearDiscount(r) > 0 ? s = t.skuInStockInfo || n : (r.disabled = !0, s = o)
                    } else s = t.skuInStockInfo || (r.surplusStock > 50 ? n : "余" + r.surplusStock);
                  return r.dateShort = r.date.slice(5), r.week = e.getWeekOfDate(r.date), r.diy = s, r
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
                var t = u.format(new Date, "yyyy/MM/dd"),
                  i = u.format(u.addDay(new Date, 1), "yyyy/MM/dd");
                return e == t ? "今天" : e == i ? "明天" : "周" + "日一二三四五六".charAt(new Date(e).getDay())
              },
              brText: function(e) {
                if (e) {
                  var t = e.split("#**#");
                  return t.pop().split("</p>").forEach((function(e, i) {
                    if (e) {
                      var o = (e = e.split("<p>").join("")).match(/\<.*?\>/g),
                        r = e.match(/[\r\n]/g),
                        s = o || r;
                      s && s[0] && s.forEach((function(t) {
                        e = e.replaceAll(t, "")
                      })), t.push(e)
                    }
                  })), t
                }
              },
              selectBookDateInPage: function(t, i) {
                var o = this;
                if (t.disabled && 2 == this.infoObj.itemUseDesc.dateType) i && (uni.setStorageSync("selectedHour", ""), this.selectedHour = "", this.selectedDate = "", this.departTimeSlot = "");
                else {
                  if (this.showHourBox) {
                    if (this.selectedDate = t.date, this.getHourData(t.itemTicketStocks, i), i) return;
                    uni.setStorageSync("selectedHour", t), this.selectedHour = "", this.departTimeSlot = "", this.ticketPrice = null
                  } else {
                    if (!i) {
                      var r = [];
                      if (this.groupTicketArr.forEach((function(e, i) {
                          var s = t.surplusStock,
                            n = o.infoObj.groupItemName;
                          i > 0 && (s = t["surplusStock".concat(i - 1)] || 0, n = o.infoObj.itemGroupVOList[i - 1].groupItemName), e.ticketNum > s && -1 != s && r.push({
                            msg: s > 0 ? "仅剩".concat(s, "张，请修改购买数量") : "库存已经售空，请修改购买数量",
                            groupItemName: n
                          })
                        })), r[0]) return this.groupErrList = r, void(this.showGroupErr = !0)
                    }
                    this.selectedDate = t.date, uni.setStorageSync("selectedHour", t), this.ticketPrice = t.sellPrice, this.selectedObj = t, this.calcPriceAmount()
                  }
                  this.showTimeTag = "今天" == this.getWeekOfDate(this.selectedDate)
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
                      e.date = e.date, e.dateEnd = u.format(u.addDayStr(e.date, 1), "yyyy-MM-dd")
                    })), e.hotelDate = i) : e.$uni.showToast("暂无可".concat(0 == that.infoObj.skuItemType ? "订" : "约", "日期"))
                  } else e.$uni.showToast(t.msg)
                }))
              },
              chooseHotel: function(e) {
                1 == e.state && (this.startHotelDate = e.date, this.endHotelDate = e.dateEnd)
              },
              getHourData: function(e, t) {
                var i = this,
                  o = (new Date).getTime();
                if (this.hourArr = [], e.forEach((function(e) {
                    new Date((e.date + " " + e.endTime + ":00").replace(/-/g, "/")).getTime() < o && (e.timePassed = !0, e.disabled = !0);
                    var t = "";
                    0 === e.surplusStock ? (e.disabled = !0, t = "已满") : t = e.surplusStock > 200 || -1 == e.surplusStock ? "有票" : "余" + e.surplusStock, e.surplusStockStr = t
                  })), this.hourArr = e, t) {
                  var r = this.hourArr.find((function(e) {
                    return e.startTime + "-" + e.endTime === i.departTimeSlot
                  }));
                  this.selectHourFn(r, !0)
                }
              },
              getGiftCard: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftCard/getCreateOrderCanUseGiftCard", {
                  type: 1
                }).then((function(t) {
                  1 === t.code ? e.giftCardArr = t.data || [] : e.$uni.showToast(data.msg)
                }))
              },
              selectHourFn: function(t, i) {
                var o = this;
                if (0 !== t.surplusStock && !0 !== t.disabled) {
                  if (!i) {
                    var r = [];
                    if (this.groupTicketArr.forEach((function(e, i) {
                        var s = t.surplusStock,
                          n = o.infoObj.groupItemName;
                        i > 0 && (s = t["surplusStock".concat(i - 1)] || 0, n = o.infoObj.itemGroupVOList[i - 1].groupItemName), e.ticketNum > s && -1 != s && r.push({
                          msg: s > 0 ? "仅剩".concat(s, "张，请修改购买数量") : "库存已经售空，请修改购买数量",
                          groupItemName: n
                        })
                      })), r[0]) return this.groupErrList = r, void(this.showGroupErr = !0)
                  }
                  t.time = this.departTimeSlot = t.startTime + "-" + t.endTime, this.selectedHour = t, this.selectedObj = t, uni.setStorageSync("selectedHour", this.selectedHour), this.ticketPrice = this.selectedHour.sellPrice || 0, this.calcPriceAmount()
                } else i && (this.selectedHour.time = "", this.departTimeSlot = "", uni.setStorageSync("selectedHour", this.selectedHour))
              },
              jumpCalendarPage: function() {
                this.$navigateTo({
                  url: "/pages/calendarPage/calendarPage?ticketId=" + this._ticketId + "&scenicType=" + this.infoObj.scenicType + "&groupFlag=" + !0
                })
              },
              calcPriceAmount: function() {
                var e = this,
                  t = this.groupTicketArr,
                  i = new n.default(0),
                  o = new n.default(this.ticketPrice);
                t.forEach((function(t, r) {
                  if (0 == r) i = o.times(t.ticketNum), e.groupTicketArr[r].priceAmount = i.toNumber();
                  else {
                    var s = e.selectedObj["sellPrice".concat(r - 1)] || 0;
                    2 == e.infoObj.itemGroupVOList[r - 1].itemUseDesc.stockLimit && (s = e.selectedHour["sellPrice".concat(r - 1)] || 0);
                    var u = new n.default(s).times(t.ticketNum);
                    i = i.plus(u), e.groupTicketArr[r].priceAmount = u.toNumber()
                  }
                })), this.priceAmount = i, this.getIdList()
              },
              getBestCoupon: function(e, t) {
                var i = this,
                  o = {
                    itemId: this._ticketId,
                    price: this.masterAmount,
                    touristInfoType: this.infoObj.itemUseDesc.touristInfoType,
                    useDateStr: this.selectedDate || "",
                    orderNum: this.masterTicketNum,
                    idCardList: e
                  };
                0 == o.touristInfoType && (o.idCardList = []), this.discountAmount = "", this.userCouponId = "", this.couponArr = [], 0 == this.notQueryCouponFlag ? this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/coupon/getBestCoupon", o).then((function(e) {
                  if (1 === e.code) {
                    var o = e.data,
                      r = i.priceAmount;
                    if ("research" == t && (i.userCouponId = ""), o && o[0]) {
                      i.couponArr = o, i.coupondk = o[0], i.userCouponId = o[0].userCouponId;
                      var s = new n.default(r);
                      new n.default(i.ticketPrice), 3 == o[0].type ? (i.discountAmount = o[0].realQuota, i.priceAmount = s.minus(i.discountAmount).toNumber().toFixed(2)) : (i.discountAmount = o[0].quota, i.priceAmount = s.minus(o[0].quota).toNumber().toFixed(2))
                    } else i.discountAmount = 0
                  } else i.$uni.showToast(e.msg)
                })) : this.discountAmount = 0
              },
              getCoupon: function(e, t) {
                var i = this,
                  o = {
                    itemId: this._ticketId,
                    price: e,
                    useDateStr: this.selectedDate || ""
                  };
                this.discountAmount = "", this.userCouponId = "", this.couponArr = [], this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/coupon/getBestCouponByNum", o).then((function(o) {
                  if (1 === o.code) {
                    var r = o.data,
                      s = e;
                    if ("research" == t && (i.userCouponId = ""), r && r[0]) {
                      i.couponArr = r, i.userCouponId = r[0].userCouponId;
                      var u = new n.default(s),
                        a = new n.default(i.ticketPrice);
                      3 == r[0].type ? (i.discountAmount = i.ticketPrice, i.priceAmount = u.minus(a).toNumber().toFixed(2)) : (i.discountAmount = r[0].quota, i.priceAmount = u.minus(r[0].quota).toNumber().toFixed(2))
                    } else i.discountAmount = 0, i.priceAmount = e
                  } else i.$uni.showToast(o.msg)
                }))
              },
              checkCoupon: function(e) {
                if (this.discountAmount = e.quota, this.userCouponId = e.userCouponId, this.coupondk = e, !(this.groupTicketArr[0].priceAmount <= 0)) {
                  var t = new n.default(this.groupTicketArr[0].priceAmount);
                  if (3 == e.type) {
                    this.discountAmount = e.realQuota;
                    var i = t.minus(e.realQuota).toNumber();
                    this.priceAmount = this.toFixedNum(i)
                  } else {
                    var o = t.minus(e.quota).toNumber();
                    this.priceAmount = this.toFixedNum(o)
                  }
                  this.showCoupon = !1
                }
              },
              cancelCoupon: function() {
                this.discountAmount = 0, this.priceAmount = this.groupTicketArr[0].priceAmount, this.userCouponId = -1, this.coupondk = "", this.showCoupon = !1
              },
              addNum: function(t) {
                if (t > 0)
                  if (this.showHourBox) {
                    if (this.selectedHour && (!this.selectedHour["surplusStock".concat(t - 1)] || this.selectedHour["surplusStock".concat(t - 1)] < 1) && -1 != this.selectedHour["surplusStock".concat(t - 1)]) return
                  } else if (this.selectedObj && (!this.selectedObj["surplusStock".concat(t - 1)] || this.selectedObj["surplusStock".concat(t - 1)] < 1) && -1 != this.selectedObj["surplusStock".concat(t - 1)]) return;
                var i, o = this.infoObj;
                if (t > 0 && (o = o.itemGroupVOList[t - 1]), i = 0 == o.itemUseDesc.maxBookNum ? 99999 : o.itemUseDesc.maxBookNum, 1 == o.itemUseDesc.dateType && 1 == o.itemUseDesc.stockLimitType && (i = Math.min(i, o.ticketPrices[0].surplusStock)), 2 == this.infoObj.itemUseDesc.dateType) {
                  var r = uni.getStorageSync("selectedHour");
                  if (!r) return void this.$uni.showToast("请先选择日期");
                  if (!r.time && this.showHourBox) return void this.$uni.showToast("请先选择时段");
                  var s = r.surplusStock;
                  t > 0 && (s = r["surplusStock".concat(t - 1)]), r && -1 != s && (i = Math.min(i, s))
                }
                this.groupTicketArr[t].ticketNum >= i ? this.$uni.showToast("最多可选择".concat(i, "张")) : (this.groupTicketArr[t].ticketNum = this.groupTicketArr[t].ticketNum + 1, this.addAndReduceInputGroup("add", t), this.$forceUpdate())
              },
              reduceNum: function(e) {
                if (!(this.groupTicketArr[e].ticketNum <= 0)) {
                  var t = 0;
                  this.groupTicketArr.forEach((function(e) {
                    t += e.ticketNum
                  })), t <= 1 ? this.$uni.showToast("最少需选择1张") : this.groupTicketArr[e].ticketNum <= 0 || (this.groupTicketArr[e].ticketNum = this.groupTicketArr[e].ticketNum - 1, this.addAndReduceInputGroup("reduce", e), this.$forceUpdate())
                }
              },
              initInputGroup: function() {
                if (0 == this.infoObj.itemUseDesc.touristInfoType) this.groupTicketArr[0].inputGroup = [{
                  name: "",
                  telephone: ""
                }], this.haveToId = !1;
                else if (this.haveToId = !0, this.infoObj.itemUseDesc.minBookNum > 1) {
                  for (var e = [], t = 0; t < this.infoObj.itemUseDesc.minBookNum; t++) e.push({
                    name: "",
                    telephone: "",
                    idCard: "",
                    cardType: this.cardTypeList[0][0]
                  });
                  this.groupTicketArr[0].inputGroup = e
                } else this.groupTicketArr[0].inputGroup = [{
                  name: "",
                  telephone: "",
                  idCard: "",
                  cardType: this.cardTypeList[0][0]
                }];
                this.$forceUpdate(), this.getCommonUsedTouristList("onLoad")
              },
              addAndReduceInputGroup: function(e, t) {
                if (0 == this.touristInfoTypeLevel && this.inputSum > 0) this.calcPriceAmount();
                else {
                  var i = this.infoObj;
                  t > 0 && (i = this.infoObj.itemGroupVOList[t - 1]);
                  var o = i.itemUseDesc.touristInfoType;
                  if ("add" == e) {
                    if ((1 == o || 0 == o) && this.groupTicketArr[t].inputGroup[0]) return void this.calcPriceAmount();
                    this.groupTicketArr[t].inputGroup.push({
                      name: "",
                      telephone: "",
                      idCard: "",
                      cardType: this.cardTypeList[t][0]
                    })
                  }
                  if ("reduce" == e) {
                    if ((1 == o || 0 == o) && this.groupTicketArr[t].ticketNum > 0) return void this.calcPriceAmount();
                    var r = this.groupTicketArr[t].inputGroup.pop();
                    r.id && (this.groupTicketArr[t].usedTouristIdsPopData = this.groupTicketArr[t].usedTouristIdsPopData.filter((function(e) {
                      return e.id != r.id
                    })))
                  }
                  this.calcPriceAmount()
                }
              },
              getWeekNotUse: function(e) {
                var t = [],
                  i = e.split(","),
                  o = [1, 2, 3, 4, 5, 6, 7];
                for (var r in o) {
                  var s = !0;
                  for (var n in i)
                    if (o[r] == i[n]) {
                      s = !1;
                      break
                    } s && t.push("周" + "一一二三四五六日".charAt(o[r]))
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
                var e = this.verify();
                e && this.createOrder(e)
              },
              verify: function() {
                if (this.inputSum < 1) this.$uni.showToast("最少需选择1张");
                else {
                  var t = [];
                  this.groupTicketArr.forEach((function(e) {
                    var i;
                    t = (i = t).concat.apply(i, (0, s.default)(e.inputGroup))
                  }));
                  var i = this.$util.checkPhone(t[0].telephone);
                  if (i.code) {
                    var o = [],
                      r = this.$util.deepCopy(this.groupTicketArr),
                      n = !1;
                    if (2 != this.infoObj.itemUseDesc.dateType || 2 != this.infoObj.itemUseDesc.stockLimit || this.selectedDate && this.departTimeSlot) {
                      if (2 != this.infoObj.itemUseDesc.dateType || 2 === this.infoObj.itemUseDesc.stockLimit || this.selectedDate) {
                        for (var u = 0; u < r.length; u++) {
                          var a = this.$util.deepCopy(r[u]);
                          if (!(a.ticketNum < 1))
                            if (0 == u) {
                              var c = {
                                itemId: this._ticketId,
                                itemName: this.infoObj.itemTitle,
                                price: this.ticketPrice,
                                orderAmount: a.priceAmount,
                                quantity: a.ticketNum,
                                ticketUseDate: this.selectedDate,
                                groupItemName: this.infoObj.groupItemName
                              };
                              this.departTimeSlot && (c.ticketUseStartTime = this.departTimeSlot.split("-")[0], c.ticketUseEndTime = this.departTimeSlot.split("-")[1]), (this.shareMemberId || uni.getStorageSync("peopleShareId")) && (c.shareMemberId = this.shareMemberId || uni.getStorageSync("peopleShareId")), 0 == this.infoObj.seckillActivity && (c.seckillItemId = this.infoObj.seckillItemId), this.discountAmount > 0 && (c.userCouponId = this.userCouponId, c.orderAmount = this.priceAmount, this.coupondk && 3 == this.coupondk.type && (c.couponDeductionNum = this.coupondk.deductionNum));
                              var d = [],
                                p = [];
                              for (var h in a.inputGroup) {
                                var f = a.inputGroup[h],
                                  m = this.$util.checkName(f.name);
                                if (!m.code) return void this.$uni.showToast(this.infoObj.groupItemName + m.msg);
                                n ? a.inputGroup[h].telephone = "" : n = !0, this.haveToId ? (d.push(f.idCard), (m = this.$util.checkId(f.idCard, f.cardType)).code || p.push(f.idCard)) : a.inputGroup[h].idCard = ""
                              }
                              var l = Array.from(new Set(p));
                              if (this.haveToId && l.length > 0) {
                                var g = l.concat(this.errIdCard);
                                return this.errIdCard = Array.from(new Set(g)), void this.$uni.showToast(this.infoObj.groupItemName + "证件号格式错误")
                              }
                              var T = Array.from(new Set(d));
                              if (this.haveToId && T.length < d.length) return void this.$uni.showToast(this.infoObj.groupItemName + "证件号不能重复");
                              c.orderPeopleList = a.inputGroup, o.push(c)
                            } else {
                              var y = this.infoObj.itemGroupVOList[u - 1],
                                I = {
                                  itemId: y.groupItemId,
                                  itemName: y.itemTitle,
                                  price: this.selectedObj["sellPrice".concat(u - 1)],
                                  orderAmount: a.priceAmount,
                                  quantity: a.ticketNum,
                                  ticketUseDate: this.selectedDate,
                                  groupItemName: y.groupItemName
                                };
                              this.departTimeSlot && 2 == y.itemUseDesc.dateType && 2 == y.itemUseDesc.stockLimit && (I.ticketUseStartTime = this.departTimeSlot.split("-")[0], I.ticketUseEndTime = this.departTimeSlot.split("-")[1]), (this.shareMemberId || uni.getStorageSync("peopleShareId")) && (I.shareMemberId = this.shareMemberId || uni.getStorageSync("peopleShareId")), 0 == y.seckillActivity && (I.seckillItemId = y.seckillItemId), 0 == this.touristInfoTypeLevel && (a.inputGroup = r[0].inputGroup);
                              var k = [],
                                v = [],
                                b = 0 != y.itemUseDesc.touristInfoType;
                              for (var D in a.inputGroup) {
                                var O = a.inputGroup[D],
                                  A = this.$util.checkName(O.name);
                                if (!A.code) return void this.$uni.showToast(y.groupItemName + A.msg);
                                n ? a.inputGroup[D].telephone = "" : n = !0, b ? (k.push(O.idCard), (A = this.$util.checkId(O.idCard, O.cardType)).code || v.push(O.idCard)) : a.inputGroup[D].idCard = ""
                              }
                              var S = Array.from(new Set(v));
                              if (b && S.length > 0) {
                                var P = S.concat(this.errIdCard);
                                return this.errIdCard = Array.from(new Set(P)), void this.$uni.showToast(y.groupItemName + "证件号格式错误")
                              }
                              var L = Array.from(new Set(k));
                              if (0 != y.itemUseDesc.touristInfoType && L.length < k.length) return void this.$uni.showToast(y.groupItemName + "证件号不能重复");
                              I.orderPeopleList = a.inputGroup, o.push(I)
                            }
                        }
                        return o
                      }
                      this.$uni.showToast("请选择使用日期")
                    } else this.$uni.showToast("请选择使用日期和时段")
                  } else this.$uni.showToast(i.msg)
                }
              },
              closeLineing: function(e) {
                this.lineing = !1, this.hasTimeOut = !1, this.repeatCreateOrder && (clearInterval(this.repeatCreateOrder), clearInterval(this.repeatCreateOrder2)), this.repeatCreateOrder = null, this.repeatCreateOrder2 = null, this.disabledSubmitBtn = !1, e || this.getInfo(!0)
              },
              createOrder: function(t) {
                var i = this;
                if (!this.disabledSubmitBtn || this.lineing) {
                  var o = this;
                  !o.hasTimeOut && o.timeOutInit(), this.disabledSubmitBtn = !0, !this.lineing && uni.showLoading({
                    title: "预".concat(0 == o.infoObj.skuItemType ? "订" : "约", "中...")
                  });
                  var r = {
                    addTicketOrderDTOList: t
                  };
                  this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/order/addTicketOrderGroup", r, !1).then((function(r) {
                    if (uni.hideLoading(), r.msg.includes("火爆") || r.msg.includes("频繁")) return o.lineing = !0, void(o.repeatCreateOrder = setTimeout((function() {
                      o.createOrder(t)
                    }), 2e3));
                    if (1 != r.code && !r.data) return i.closeLineing(!0), i.disabledSubmitBtn = !1, void setTimeout((function() {
                      o.$uni.showToast(r.msg)
                    }), 300);
                    if (1 != r.code) {
                      i.closeLineing(!0), i.disabledSubmitBtn = !1;
                      var s = r.data.addTicketOrderDTOList,
                        n = [],
                        u = 0;
                      for (var a in s) {
                        var c = s[a];
                        if (18031 == c.result.code) {
                          var d = o.errIdCard || [],
                            p = Array.from(new Set(d.concat(c.result.data)));
                          o.errIdCard = p
                        }
                        if (1 != c.result.code) {
                          var h = {
                            msg: c.result.msg,
                            groupItemName: c.groupItemName + "校验失败:"
                          };
                          if ((18022 == c.result.code || 18026 == c.result.code || c.result.msg.includes("库存不足")) && (u++, h = {
                              msg: c.result.msg,
                              groupItemName: c.groupItemName
                            }, 0 == a && 18026 != c.result.code)) return i.selectedHour = "", uni.setStorageSync("selectedHour", ""), i.hourArr = [], i.selectedDate = "", i.ticketPrice = 0, i.priceAmount = 0, i.selectedObj = {}, i.departTimeSlot = "", void(i.showNoStock = !0);
                          n.push(h)
                        }
                      }
                      u > 0 && i.getInfo(!0), i.groupErrList = n, i.showGroupErr = !0
                    } else {
                      i._orderId = r.data.groupOrderId, i.closeLineing(!0);
                      var f = r.data,
                        m = f.addTicketOrderDTOList,
                        l = [],
                        g = [],
                        T = 0;
                      m.forEach((function(e, i) {
                        if (1 != e.result.code) l.push({
                          msg: e.result.msg,
                          groupItemName: e.groupItemName + "下单失败:"
                        }), T++;
                        else {
                          l.push({
                            msg: "",
                            groupItemName: e.groupItemName + "下单成功"
                          });
                          var o = t[i].orderPeopleList;
                          g = g.concat(o)
                        }
                      })), l.push({
                        groupItemName: "",
                        msg: "成功订单可前往订单列表付款"
                      }), T > 0 ? (i.groupErrList = l, i.showGroupErr = !0, f.successOrderNum > 0 && (i.errJump = !0)) : 0 == i.priceAmount ? (2 == i.infoObj.itemUseDesc.dateType ? i.bookInfoObj.time = "".concat(i.selectedDate, " ").concat(i.departTimeSlot || "") : i.bookInfoObj.time = "".concat(i.infoObj.itemUseDesc.datePeriodBegin, "至").concat(i.infoObj.itemUseDesc.datePeriodEnd, "有效"), i.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getGroupOrderDetail", {
                        groupOrderId: i._orderId
                      }).then((function(e) {
                        1 === e.code ? (e.data.mainOrder, i.isHideSuccessMask = !0, i.getGiftBagForOrder(i._orderId)) : i.$uni.showToast(r.msg)
                      })), i.$store.dispatch("wxInForm", ["gDlb_Lmm5UjBhe5jnstiOCTi4XfN2KOq9056Be9lDSE"]).then((function(e) {}))) : i.goPay()
                    }
                  })).catch((function(t) {
                    i.closeLineing(), uni.hideLoading(), i.disabledSubmitBtn = !1
                  }))
                }
              },
              confirmOrder: function() {
                this.showGroupErr = !1, this.errJump && (this.errJump = !1, uni.redirectTo({
                  url: "/pages/myorder/myorder?type=0"
                }))
              },
              goPay: function() {
                var t = this;
                uni.showLoading({
                  title: "发起支付..."
                }), this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/order/groupTicketWaitPayToPay", {
                  payChannel: "",
                  orderSource: 5,
                  groupOrderId: this._orderId,
                  buyerMemo: "",
                  seriesNumber: uni.getStorageSync("userInfor").openId || uni.getStorageSync("wxopenid")
                }, "支付中").then((function(i) {
                  if (1 !== i.code) return uni.hideLoading(), t.submiting = !1, void t.$uni.showToast(i.msg);
                  uni.requestPayment({
                    timeStamp: i.data.timeStamp,
                    nonceStr: i.data.nonceStr,
                    package: "prepay_id=".concat(i.data.prepayid),
                    signType: i.data.signType,
                    paySign: i.data.pay_sign,
                    success: function(e) {
                      t.$store.dispatch("wxInForm", ["gDlb_Lmm5UjBhe5jnstiOCTi4XfN2KOq9056Be9lDSE"]).then((function(e) {
                        t.jumpOrderPay()
                      })).catch((function(e) {
                        t.jumpOrderPay()
                      })), t.submiting = !1
                    },
                    fail: function(i) {
                      t.submiting = !1, uni.redirectTo({
                        url: "/pages/myorder/myorder?type=0"
                      })
                    }
                  })
                }))
              },
              jumpOrderPay: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getGroupOrderDetail", {
                  groupOrderId: this._orderId
                }).then((function(i) {
                  if (1 === i.code) {
                    var o = i.data,
                      r = i.data.mainOrder;
                    uni.redirectTo({
                      url: "/subPage/pages/order_pay/order_pay?count=".concat(o.realPayableAmount, "&type=groupTicket&orderId=").concat(t._orderId, "&guideCopywriting=\n\t\t\t\t\t&subscribeType=0&isSpecial=").concat(r.isSpecial, "&itemId=").concat(r.itemId, "&orderType=2")
                    })
                  } else t.$uni.showToast(data.msg)
                }))
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
                  url: "/pages/myorder/myorder?type=0"
                })
              },
              confirm: function() {
                var e = this.verify();
                e && (this.createOrder(e), this.$refs.popup.close())
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
                this.priceAmount, this.$refs.popup.close()
              },
              changeGiftCard: function(e, t) {
                var i = this;
                if (this.priceAmount <= 0) this.$uni.showToast("目前".concat(0 == this.infoObj.skuItemType ? "订" : "预约", "单已经没有可用于抵扣的金额"));
                else {
                  if (this.giftCardPopData.includes(e.id)) this.giftCardPopData = this.giftCardPopData.filter((function(t) {
                    return t != e.id
                  }));
                  else {
                    if (this.activeGiftamount > this.priceAmount) return this.$uni.showToast("目前".concat(0 == this.infoObj.skuItemType ? "订" : "预约", "单已经没有可用于抵扣的金额")), !1;
                    this.giftCardPopData.push(e.id)
                  }
                  var o = new n.default(0);
                  this.giftCardArr.forEach((function(e) {
                    i.giftCardPopData.forEach((function(t) {
                      t == e.id && (o = o.plus(e.balance))
                    }))
                  })), this.activeGiftamount = o.toNumber()
                }
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
              choosePassenger: function(e) {
                this.groupTicketIndex = e, this.showPassenger = !0, this.setPassengerTitle(e)
              },
              setPassengerTitle: function(e) {
                var t = this.groupTicketArr[e].inputGroup.length;
                this.groupTicketArr[e].inputGroup.forEach((function(e) {
                  (e.id || e.name || e.telephone || e.idCard) && (t -= 1)
                })), t < 1 ? this.passengerTitle = "已选满" : t != this.groupTicketArr[e].inputGroup.length ? this.passengerTitle = "再选".concat(t, "位") : this.passengerTitle = "选择".concat(t, "位")
              },
              addPassenger: function(e) {
                this.$navigateTo({
                  url: "/subPage/pages/addPassenger/addPassenger?codes=".concat(this.cardTypeList[e].join(","))
                })
              },
              getCommonUsedTouristList: function(e) {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/queryCommonUsedTouristList").then((function(i) {
                  if (1 === i.code && i.data[0])
                    if (t.commonUsedTouristList = i.data, "onLoad" == e && i.data[0]) {
                      var o = i.data.find((function(e) {
                        return t.cardTypeList[0].includes(Number(e.cardType))
                      }));
                      t.groupTicketArr[0].usedTouristIdsPopData.push(o), t.setinputGroup(0)
                    } else {
                      var r = "",
                        s = -1;
                      t.commonUsedTouristList.forEach((function(e) {
                        t.touristId == e.id && (r = e)
                      })), t.groupTicketArr.forEach((function(e, i) {
                        var o = [];
                        e.usedTouristIdsPopData.forEach((function(e) {
                          t.commonUsedTouristList.forEach((function(t) {
                            e.id == t.id && o.push(t)
                          }))
                        })), t.groupTicketArr[i].usedTouristIdsPopData = o
                      })), t.groupTicketArr[t.groupTicketIndex].inputGroup.forEach((function(e, t) {
                        e.id == r.id && (s = t)
                      }));
                      var n = {
                        name: r.name || "",
                        telephone: r.phone || "",
                        idCard: r.idCarNo || "",
                        id: r.id || "",
                        cardType: r.cardType || 0
                      };
                      s > -1 && (t.groupTicketArr[t.groupTicketIndex].inputGroup[s] = n), t.$forceUpdate()
                    }
                }))
              },
              changeTourist: function(e, t, i, o, r) {
                if (this.cardTypeList[i].includes(Number(e.cardType)))
                  if (this.groupTicketArr[i].usedTouristIdsPopData.includes(e)) this.groupTicketArr[i].usedTouristIdsPopData = this.groupTicketArr[i].usedTouristIdsPopData.filter((function(t) {
                    return t != e
                  })), this.delTourist(i, e, o);
                  else {
                    if (1 == this.groupTicketArr[i].inputGroup.length) this.groupTicketArr[i].usedTouristIdsPopData = [], this.groupTicketArr[i].usedTouristIdsPopData.push(e);
                    else {
                      var s = 0;
                      if (this.groupTicketArr[i].inputGroup.forEach((function(e) {
                          (e.name || e.idCard) && s++
                        })), !(s < this.groupTicketArr[i].inputGroup.length)) return void this.$uni.showToast("只能选择".concat(this.groupTicketArr[i].ticketNum, "位游客"));
                      this.groupTicketArr[i].usedTouristIdsPopData.push(e)
                    }
                    this.setinputGroup(i)
                  }
                else this.$uni.showToast("游客证件类型暂不支持")
              },
              delTourist: function(e, t, i) {
                var o = this.$util.deepCopy(this.groupTicketArr[e].inputGroup),
                  r = this.groupTicketArr[e].inputGroup;
                o = o.filter((function(e) {
                  return e.id != t.id
                }));
                var s = this.cardTypeList[e][0];
                for (var n in r) {
                  var u = {
                    name: "",
                    telephone: "",
                    idCard: "",
                    cardType: s
                  };
                  o[n] && (u = o[n]), this.groupTicketArr[e].inputGroup.splice(n, 1, u), this.setPassengerTitle(e)
                }
                this.$forceUpdate()
              },
              setinputGroup: function(e) {
                var t = this,
                  i = this.$util.deepCopy(this.groupTicketArr[e].usedTouristIdsPopData),
                  o = this.groupTicketArr[e].inputGroup,
                  r = this.cacheGroupTicketArr[e].inputGroup,
                  s = function(s) {
                    if ((o[s].name || o[s].telephone || o[s].idCard) && o.length > 1 && !o[s].id) return "continue";
                    var n = i.shift(),
                      u = {
                        name: "",
                        telephone: "",
                        idCard: "",
                        cardType: t.cardTypeList[e][0]
                      };
                    n && (r[s].cardType, r.forEach((function(e) {
                      e.id == n.id && e.cardType
                    })), u = {
                      name: n.name,
                      telephone: n.phone,
                      idCard: n.idCarNo,
                      id: n.id,
                      cardType: n.cardType
                    }, n.id == o[s].id && (u = {
                      name: o[s].name,
                      telephone: o[s].telephone,
                      idCard: o[s].idCard,
                      id: o[s].id,
                      cardType: o[s].cardType
                    })), t.groupTicketArr[e].inputGroup.splice(s, 1, u), t.setPassengerTitle(e)
                  };
                for (var n in o) s(n);
                this.$forceUpdate()
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
              editPassenger: function(e, t) {
                this.touristId = e, this.$navigateTo({
                  url: "/subPage/pages/editPassenger/editPassenger?touristId=".concat(e, "&codes=").concat(this.cardTypeList[t].join(","))
                })
              },
              getGiftBagForOrder: function(e) {
                var t = this,
                  i = {
                    groupOrderId: e,
                    orderType: 2
                  };
                this.$uniApi.dataRequestNoLoading("POST", "/order/app/v1/orderActive/lottery", i).then((function(e) {
                  e.data && e.data.orderActivePrize && (t.giftBagData = e.data, 1 == e.data.orderActivePrize.prizeType ? t.gbCl = e.data.orderActivePrize.giftBag.giftBagCouponList.length : t.gbCl = 0, 3 == e.data.orderActivePrize.prizeType && (t.orderActiveRecordId = e.data.orderActiveRecordId), t.showPacketBox = !0, t.openRedBox())
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
                    var r = uni.getStorageSync("userInfor");
                    r.chansiOpenId = t, uni.setStorageSync("userInfor", r)
                  } else i.$uni.showToast(data.msg)
                }))
              },
              goDiscounts: function() {
                this.safeRouter("/subPage/pages/myDiscounts/myDiscounts")
              },
              safeRouter: function(e) {
                this.$util.isLogin(e) && this.$navigateTo({
                  url: e
                })
              },
              getUserPhone: function() {
                var t = uni.getStorageSync("userInfor").mobilePhone;
                this.groupTicketArr[0].inputGroup[0].telephone = t, this.$forceUpdate()
              },
              setCalendar: function(t) {
                var i = this,
                  o = this.infoObj.itemGroupVOList,
                  r = this.infoObj.ticketPrices;
                t ? uni.getStorageSync("touristInfoTypeLevel") == this.touristInfoTypeLevel ? this.refreshLevelS() : this.refreshLevelNo() : o.forEach((function(e, t) {
                  i.groupTicketArr.push({
                    ticketNum: 0,
                    inputGroup: [],
                    haveToId: !1,
                    usedTouristIdsPopData: [],
                    itemId: e.groupItemId
                  })
                })), o.forEach((function(e, t) {
                  r.forEach((function(o, r) {
                    1 == i.infoObj.itemUseDesc.stockLimit && e.ticketPrices.forEach((function(i, r) {
                      1 == e.itemUseDesc.stockLimit && o.date == i.date && (o["itemId".concat(t)] = i.itemId, o["retailPrice".concat(t)] = i.retailPrice, o["sellPrice".concat(t)] = i.sellPrice, o["settlementPrice".concat(t)] = i.settlementPrice, o["surplusStock".concat(t)] = i.surplusStock)
                    })), 2 == i.infoObj.itemUseDesc.stockLimit && e.ticketPrices.forEach((function(i, r) {
                      o.date == i.date && (1 == e.itemUseDesc.stockLimit && o.itemTicketStocks.forEach((function(e, o) {
                        e["itemId".concat(t)] = i.itemId, e["retailPrice".concat(t)] = i.retailPrice, e["sellPrice".concat(t)] = i.sellPrice, e["settlementPrice".concat(t)] = i.settlementPrice, e["surplusStock".concat(t)] = i.surplusStock
                      })), 2 == e.itemUseDesc.stockLimit && o.itemTicketStocks.forEach((function(e, o) {
                        i.itemTicketStocks.forEach((function(i, o) {
                          e.startTime == i.startTime && e.endTime == i.endTime && (e["itemId".concat(t)] = i.itemId, e["retailPrice".concat(t)] = i.retailPrice, e["sellPrice".concat(t)] = i.sellPrice, e["settlementPrice".concat(t)] = i.settlementPrice, e["surplusStock".concat(t)] = i.surplusStock)
                        }))
                      })))
                    }))
                  }))
                })), this.infoObj.ticketPrices = r, this.timeData = this.timeDataFormat();
                var s = [],
                  n = 0,
                  u = "";
                this.timeData.forEach((function(e, t) {
                  e.disabled && 2 == i.infoObj.itemUseDesc.dateType || (i.selectedDateSpot == e.date && (u = e), s.push(e), n = t)
                })), s && 1 == s.length ? (this.selectBookDateInPage(this.timeData[n]), this.scrollToDate = "date-" + this.timeData[n].date) : s.length > 1 && u && (this.selectBookDateInPage(u), this.scrollToDate = "date-" + u.date), setTimeout((function() {
                  t && i.refreshNum(i.timeData)
                }), 100)
              },
              setColor: function(e) {
                var t = "#777777";
                return e && ["条件退", "不可退", "换票入园"].includes(e) && (t = "#FF5411"), t
              },
              showCertificatePoP: function(e, t, i) {
                var o = this.cardTypeList[t];
                1 == o.length && 0 == o[0] || (this.realCardTypeList = o, this.cardParentIndex = t, this.userIndex = i, this.realCardType = e.cardType, this.showCertificate = !0, this.$forceUpdate())
              },
              chooseCardType: function(e) {
                this.groupTicketArr[this.cardParentIndex].inputGroup[this.userIndex].cardType = e, this.groupTicketArr[this.cardParentIndex].inputGroup[this.userIndex].idCard = "", this.showCertificate = !1, this.$forceUpdate()
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.csColor{color:#a17111!important}.csBorder{border-color:#a17111!important}.csBg{background:#fbf8f1!important}.csBtn{background:linear-gradient(52deg,#c7b795,#c7b795)!important} .u-input__input{background:#fff;border-radius:10rpx;box-shadow:0rpx 2rpx 4rpx 0rpx rgba(0,0,0,.2);color:#9b9b9b!important;font-size:24rpx!important;margin-left:20rpx;padding-left:10rpx} .u-form-item--left__content__label{color:#b36600;font-size:24rpx;font-weight:600;height:23rpx;line-height:15rpx;margin-left:20rpx}.gift-content{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;margin-top:-64rpx;position:relative;width:750rpx}.gift-content .min-h{height:680rpx}.gift-content .max-h{height:860rpx}.gift-content .gift-box{background:linear-gradient(0deg,#ff3329,#ff7f56);border-radius:0rpx 0rpx 60rpx 60rpx;display:-webkit-flex;display:flex;justify-content:center;width:590rpx}.gift-content .gift-box .within-box{align-items:center;background-color:#e64630;border-radius:20rpx;display:-webkit-flex;display:flex;flex-direction:column;margin-top:82rpx;min-height:425rpx;padding-top:50rpx;width:531rpx}.gift-content .gift-box .within-box .img{height:255rpx;margin-top:-18rpx;width:449rpx}.gift-content .gift-box .within-box .phoneImg{height:250rpx;margin-top:-18rpx;width:374rpx}.gift-content .gift-box .within-box .illustrate{color:#ffeddb;font-size:24rpx;font-weight:600;text-align:center;width:425rpx}.gift-content .gift-box .within-box .yello{background:linear-gradient(180deg,#ffda80,#ffb565);border-radius:10rpx;height:368rpx;margin-top:20rpx;overflow-y:auto;width:491rpx}.gift-content .gift-box .within-box .empty-box{height:276rpx}.gift-content .footer{background-image:url('https://eshopfile.zhiyousx.com/170547277021934819.png');background-size:cover;bottom:0;height:252rpx;margin:0 auto;position:absolute;width:590rpx;z-index:999}.gift-content .footer .btn{display:-webkit-flex;display:flex;justify-content:center}.gift-content .footer .btn .btn-style{background:linear-gradient(180deg,#fff6e9,#ffab73);border-radius:40rpx;box-shadow:0rpx 4rpx 8rpx 0rpx rgba(87,19,0,.4);color:#db4821;font-size:36rpx;font-weight:600;height:80rpx;line-height:80rpx;margin-top:107rpx;text-align:center;width:360rpx}.gift-content .footer .active{color:#ffc7aa;font-size:18rpx;font-weight:400;height:19rpx;line-height:15rpx;margin-top:21rpx;text-align:center;text-decoration:underline}.title-bar{background-size:cover;height:387rpx;position:relative;width:750rpx;z-index:999}.title-bar .phone-style{align-items:center;display:-webkit-flex;display:flex;justify-content:center;padding-top:296rpx}.title-bar .phone-style .title-style{background:linear-gradient(180deg,#fff6e9,#ffab73);border-radius:20rpx;color:#db4821;font-size:36rpx;font-weight:700;min-height:54rpx;text-align:center;width:390rpx}.title-bar .title{color:#db4821;font-size:36rpx;font-weight:700;height:35rpx;line-height:35rpx;padding-top:306rpx;text-align:center}.container{background:#fafafa;color:#2a2a2a;font-size:28rpx;line-height:1;padding-bottom:150rpx;padding-top:20rpx}.container .hasnotice{background:#fff;overflow:hidden;padding:0 50rpx 48rpx 64rpx;width:640rpx}.container .hasnotice .title{font-size:36rpx;font-weight:700;margin:66rpx 0 36rpx;text-align:center}.container .hasnotice .scontent text{color:#4f4f4f;font-size:26rpx;line-height:30rpx}.container .hasnotice .scontent .loading>view,.container .hasnotice .scontent .loading{box-sizing:border-box;position:relative}.container .hasnotice .scontent .loading{color:#000;display:block;font-size:0}.container .hasnotice .scontent .loading.la-dark{color:#333}.container .hasnotice .scontent .loading>view{background-color:#000;border:0 solid #000;display:inline-block;float:none}.container .hasnotice .scontent .loading{height:32rpx;margin:0 auto;width:42rpx}.container .hasnotice .scontent .loading>view:nth-child(1){animation:ball-climbing-dot-jump-data-v-6c16d096 .6s ease-in-out infinite;border-radius:100%;bottom:32%;height:14rpx;left:18%;position:absolute;transform-origin:center bottom;width:14rpx}.container .hasnotice .scontent .loading>view:not(:nth-child(1)){animation:ball-climbing-dot-steps-data-v-6c16d096 1.8s linear infinite;border-radius:0;height:2px;position:absolute;right:0;top:0;transform:translate(60%);width:14rpx}.container .hasnotice .scontent .loading>view:not(:nth-child(1)):nth-child(2){animation-delay:0ms}.container .hasnotice .scontent .loading>view:not(:nth-child(1)):nth-child(3){animation-delay:-.6s}.container .hasnotice .scontent .loading>view:not(:nth-child(1)):nth-child(4){animation-delay:-1.2s}.container .hasnotice .close{color:#ff5411;font-size:26rpx;margin-top:50rpx;text-align:center}.container .couponcardBox{height:880rpx;padding:0 40rpx}.container .couponcardBox .title{color:#333;font-size:32rpx;margin:42rpx 0 35rpx}.container .couponcardBox .scontent{height:621rpx;line-height:50rpx}.container .couponcardBox .scontent .item{background:url('https://eshopfile.zhiyousx.com/2022031715525238791.png')50%no-repeat;background-size:100% 100%;display:-webkit-flex;display:flex;height:200rpx;justify-content:space-between;margin-bottom:10rpx;position:relative}.container .couponcardBox .scontent .item .radio{height:44rpx;position:absolute;right:10rpx;top:77rpx;width:44rpx}.container .couponcardBox .scontent .item .info{height:100%;padding:55rpx 38rpx;width:438rpx}.container .couponcardBox .scontent .item .info .name{color:#333;font-size:28rpx}.container .couponcardBox .scontent .item .info .date{color:#828282;font-size:24rpx;line-height:30rpx;margin-top:14rpx}.container .couponcardBox .scontent .item .price{height:100%;padding:50rpx 20rpx 38rpx;width:230rpx}.container .couponcardBox .scontent .item .price .num text{color:#ff5411;font-size:40rpx}.container .couponcardBox .scontent .item .price .num .n{font-size:60rpx;font-weight:700}.container .couponcardBox .scontent .item .price .condition{color:#4f4f4f;font-size:24rpx;margin-top:2rpx;text-align:center;width:140rpx}.container .couponcardBox .no{align-items:center;display:-webkit-flex;display:flex;height:138rpx;justify-content:space-between}.container .couponcardBox .no text{color:#333;font-size:28rpx}.container .couponcardBox .no image{height:44rpx;margin-right:10rpx;width:44rpx}.box1{background-color:#fff;border-radius:20rpx;margin-bottom:10rpx;padding:50rpx 30rpx}.box1 .name{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;font-size:32rpx;font-weight:400;line-height:48rpx;overflow:hidden}.box2{background-color:#fff;border-radius:20rpx;margin-bottom:10rpx;padding:38rpx 30rpx 30rpx}.box2>.t1{font-size:28rpx;margin-bottom:48rpx}.box2>.t1>.r,.box2>.t1{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.box2>.t1>.r{font-size:26rpx}.box2>.t1>.r .r{border:1rpx solid #fff1ed;border-radius:20rpx;color:#00a795;font-size:26rpx;height:60rpx;line-height:60rpx;margin-left:10rpx;padding:0 20rpx;text-align:center}.box2>.t2{align-items:top;display:-webkit-flex;display:flex;font-size:28rpx;justify-content:space-between;margin-bottom:48rpx}.box2>.t2 .r{color:#aeaeae}.box2>.t2 .r view{color:#aeaeae;margin-bottom:12rpx;text-align:right}.box2>.t2 .r view:nth-child(1){color:#2a2a2a}.box2 .new-box .yxrq-box .title{color:#2a2a2a;font-size:28rpx;margin-bottom:25rpx}.box2 .new-box .yxrq-box .p-box{color:#777;font-size:28rpx;padding-bottom:4rpx}.box2 .new-box .yxrq-box .p-box .p1{color:#2a2a2a;font-size:36rpx;font-weight:700;margin-bottom:18rpx}.box2 .new-box .yxrq-box .p-box .p2{color:#777;font-size:28rpx;line-height:32rpx;margin-bottom:18rpx;text-align:justify}.box2 .new-box .date-box .title{color:#444;font-size:30rpx;font-weight:700;line-height:45rpx;margin-bottom:40rpx}.box2 .new-box .date-box .scroll-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.box2 .new-box .date-box .scroll-box .left{box-shadow:inset -15rpx 0 25rpx -5rpx hsla(0,0%,77%,.25);white-space:nowrap;width:567rpx}.box2 .new-box .date-box .scroll-box .left .item{border:1px solid #ccc;border-radius:20rpx;box-sizing:border-box;color:#444;display:inline-block;line-height:39rpx;margin-right:10rpx;padding:14rpx}.box2 .new-box .ticketinfo{align-items:center;background:#fafafa;display:-webkit-flex;display:flex;height:70rpx;justify-content:space-between;margin:20rpx 0 40rpx;padding:0 13rpx;width:690rpx}.ytxz-box{background:#fafafa;height:100%;position:relative;width:750rpx}.ytxz-box .content-box1{padding:68rpx 30rpx 0}.ytxz-box .content-box1 .title-box{position:relative}.ytxz-box .content-box1 .title-box .p1{color:#000;font-size:36rpx;font-weight:700;line-height:50rpx;padding-right:50rpx;width:660rpx}.ytxz-box .content-box1 .title-box .p2{color:#000;font-size:28rpx;line-height:40rpx;opacity:.5;padding-bottom:32rpx;padding-top:20rpx}.ytxz-box .content-box1 .bottom-box{height:625rpx}.ytxz-box .content-box1 .bottom-box .refundItem{display:block;line-height:48rpx;padding-bottom:0rpx}.ytxz-box .content-box1 .bottom-box .line1{margin-bottom:30rpx}.ytxz-box .content-box1 .bottom-box .line1 .title{color:#333;font-size:30rpx;font-weight:700;line-height:50rpx;margin-bottom:5rpx}.ytxz-box .content-box1 .bottom-box .line1>.b .item{display:-webkit-flex;display:flex;margin-bottom:4rpx}.ytxz-box .content-box1 .bottom-box .line1>.b .item:last-child{margin-bottom:0}.ytxz-box .content-box1 .bottom-box .line1>.b .item>.l{border:2rpx solid #ff7d2a;border-radius:4rpx;border-radius:6rpx;color:#ff7d2a;font-size:22rpx;height:32rpx;line-height:28rpx;margin-right:24rpx;margin-top:8rpx;padding:0 4rpx;text-align:center;width:120rpx}.ytxz-box .content-box1 .bottom-box .line1>.b .item .lc{border:2rpx solid #a17111;color:#a17111;width:140rpx}.ytxz-box .content-box1 .bottom-box .line1>.b .item>.r{flex:1;line-height:48rpx;white-space:pre-wrap}.ytxz-box .content-box1 .bottom-box .table{border:1rpx solid #e4e4e4;border-bottom:none;margin-bottom:30rpx}.ytxz-box .content-box1 .bottom-box .tr{border-bottom:1rpx solid #e4e4e4;display:-webkit-flex;display:flex}.ytxz-box .content-box1 .bottom-box .tr.first{background:#fffaf8}.ytxz-box .content-box1 .bottom-box .tr.first .td{font-weight:600}.ytxz-box .content-box1 .bottom-box .tr .1st{width:200rpx}.ytxz-box .content-box1 .bottom-box .tr .td{align-items:center;border-right:1rpx solid #e4e4e4;border-top:none;color:#656565;display:-webkit-flex;display:flex;line-height:42rpx;padding:16rpx 25rpx;text-align:left;word-break:break-all}.ytxz-box .content-box1 .bottom-box .tr .td:last-child{border-right:none}.ytxz-box .content-box1 .bottom-box .community-box{margin-bottom:30rpx;width:690rpx}.ytxz-box .content-box1 .bottom-box .line2{margin-bottom:30rpx}.ytxz-box .content-box1 .bottom-box .line2 .title{color:#333;font-size:30rpx;font-weight:700;line-height:50rpx;margin-bottom:4rpx}.ytxz-box .content-box1 .bottom-box .line2>.b .options{align-items:baseline;display:-webkit-flex;display:flex;margin-bottom:4rpx}.ytxz-box .content-box1 .bottom-box .line2>.b .options view{color:#777474;display:-webkit-flex;display:flex;flex-direction:column;font-size:26rpx;justify-content:flex-start}.ytxz-box .content-box1 .bottom-box .line2>.b .options view.title{white-space:nowrap;width:134rpx}.ytxz-box .content-box1 .bottom-box .line2>.b .options view.content{width:564rpx}.ytxz-box .content-box1 .bottom-box .line3 .title{color:#333;font-size:30rpx;font-weight:700;line-height:50rpx}.ytxz-box .content-box1 .bottom-box .line3>.b .item{align-items:center;display:-webkit-flex;display:flex;margin-bottom:15rpx;margin-top:30rpx;position:relative}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col1{border:2rpx solid #ff7d2a;border-radius:4rpx;color:#ff7d2a;font-size:22rpx;height:32rpx;line-height:28rpx;margin-right:22rpx;padding:0 24rpx}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col1c{border:2rpx solid #a17111;color:#a17111}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col2{color:#777474;font-size:26rpx;margin-right:30rpx;width:220rpx}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col3{border-width:600;color:#333;font-size:32rpx;text-align:right;width:230rpx}.ytxz-box .content-box1 .bottom-box .line3>.b .item .col4 image{height:32rpx;position:absolute;right:0;top:-5rpx;width:32rpx}.ytxz-box .book-box{background-color:#fff;bottom:0;box-shadow:0-1rpx 0 0#e3e3e3;display:-webkit-flex;display:flex;height:100rpx;left:0;position:absolute;width:100%}.ytxz-box .book-box>.l{align-items:center;display:-webkit-flex;display:flex;flex:1;padding-left:40rpx}.ytxz-box .book-box>.l .p1{color:#777474;font-size:26rpx;margin-right:20rpx}.ytxz-box .book-box>.l .p2{color:#ff5411;font-size:32rpx}.ytxz-box .book-box>.btn{background:linear-gradient(56deg,#fc4a9e,#ff5411);border-radius:0;color:#fff;font-size:32rpx;line-height:100rpx;width:320rpx}.ytxz-box .book-box>.btn.emptys{background:linear-gradient(253deg,#ffb2d5,#ffc1aa)}.box2 .new-box .ticketinfo>view{color:#545454;font-size:24rpx}.box2 .new-box .ticketinfo>view .red{color:#f15252;font-size:24rpx}.box2 .new-box .date-box .scroll-box .left .item .p1{font-size:26rpx}.box2 .new-box .date-box .scroll-box .left .item .p3{color:#ff5411;font-size:26rpx}.box2 .new-box .date-box .scroll-box .left .item.active{background:#fff1ed;border:1px solid #ff5411}.box2 .new-box .date-box .scroll-box .left .item.disabled{background:#f5f5f5;color:#aeaeae!important}.box2 .new-box .date-box .scroll-box .left .item.disabled .p3{color:#aeaeae!important}.box2 .new-box .date-box .scroll-box .right{align-items:center;color:#00a795;display:-webkit-flex;display:flex;font-size:28rpx;justify-content:center;line-height:40rpx;width:110rpx}.box2 .new-box .date-box .scroll-box .right .text{margin-right:23rpx;width:62rpx}.box2 .new-box .date-box .scroll-box .right .arrow{border-right:1rpx solid #f15252;border-top:1rpx solid #f15252;height:20rpx;transform:rotate(45deg);width:20rpx}.box2 .new-box .buy-tip{margin-bottom:35rpx;padding:16rpx 9rpx}.box2 .new-box .buy-tip .p{color:#aeaeae;font-size:24rpx;line-height:36rpx}.box2 .new-box .hour-box .title{color:#444;font-size:30rpx;font-weight:700;line-height:45rpx;margin-bottom:20rpx;padding-top:50rpx}.box2 .new-box .hour-box .item-box .item{border:1px solid #ccc;border-radius:20rpx;box-sizing:border-box;color:#2a2a2a;display:inline-block;font-size:26rpx;height:102rpx;line-height:1;margin-bottom:14rpx;margin-right:14rpx;padding:14rpx;text-align:center;width:215rpx}.box2 .new-box .hour-box .item-box .item .p1{margin-bottom:15rpx}.box2 .new-box .hour-box .item-box .item.active{background:#fff1ed;border:1px solid #ff5411}.box2 .new-box .hour-box .item-box .item.disabled{background:#f5f5f5}.box2 .new-box .hour-box .item-box .item.disabled .p2{color:#ff5411}.box2>.b{align-items:center;display:-webkit-flex;display:flex;font-size:28rpx;justify-content:space-between}.box2>.b>.l{font-weight:700}.box2>.b>.r{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;width:180rpx}.box2>.b>.r .op{background-color:#f5f5f5;border-radius:10rpx;height:48rpx;line-height:48rpx;text-align:center;width:48rpx}.box2>.b>.r .op:nth-child(3){background-color:#fff1ed}.box2>.b>.r input{text-align:center;width:48rpx}.box2 .buy-limit{line-height:36rpx;margin-top:16rpx}.box2 .buy-limit .p{color:#aeaeae;font-size:24rpx}.box2>.hotel-box{color:#2a2a2a;font-size:28rpx;font-weight:700;margin-bottom:25rpx;margin-top:59rpx}.box2>.hotel-box.box3{padding:0}.box2>.hotel-box.box3 .l,.box2>.hotel-box.box3 .r{font-weight:500}.box2>.hotel-box .choose{margin-top:29rpx;width:460rpx}.box2>.hotel-box .choose .c{border-radius:20rpx;font-size:26rpx;font-weight:400;height:80rpx;margin-bottom:20rpx;padding-left:21rpx}.box2>.hotel-box .choose .c:last-child{margin-bottom:0}.box2>.hotel-box .choose .c1{background:#f5f5f5;color:#b5b5b5;line-height:80rpx}.box2>.hotel-box .choose .c2{background:#fff;border:1rpx solid #e6e6e6;color:#333;line-height:78rpx}.box2>.hotel-box .choose .active{background:#fff1ed;border:none;line-height:80rpx}.box2>.hotel-tips{color:#545454;font-family:Source Han Sans CN;font-size:24rpx;font-weight:400;margin-top:60rpx}.touristNumTips{align-items:flex-end;display:-webkit-flex;display:flex;margin:30rpx 30rpx -10rpx}.touristNumTips .t1{color:#444;font-size:30rpx;font-weight:700;line-height:45rpx;margin-right:10rpx}.touristNumTips .t2{color:#777;font-size:24rpx;line-height:36rpx}.touristNumTips .t2 text{color:#ff5411}.box3{background-color:#fff;border-radius:20rpx;margin-bottom:10rpx;margin-top:66rpx;padding:30rpx 30rpx 0;position:relative}.box3 .tMame{color:#777;font-size:24rpx;left:32rpx;line-height:36rpx;position:absolute;top:-46rpx}.box3 .scroll-box{display:-webkit-flex;display:flex}.box3 .passenger-box{height:74rpx;white-space:nowrap}.box3 .passenger-box .user{border:1px solid #ccc;border-radius:20rpx;box-sizing:border-box;color:#444;display:inline-block;font-size:26rpx;height:72rpx;line-height:72rpx;margin-right:20rpx;padding:0 30rpx}.box3 .passenger-box .user:nth-last-child(2){margin-right:0}.box3 .passenger-box .active{background:#fff1ed;border:none;color:#ff5411;line-height:74rpx}.box3 .passenger-box .user-but{background-color:#fff;color:#333;display:inline-block;font-size:26rpx;height:100%;line-height:72rpx;position:-webkit-sticky;position:sticky;right:0;text-align:center;width:240rpx}.box3 .passenger-box .user-but .but{border:1px solid #777;border-radius:20rpx;height:72rpx;margin-left:20rpx;width:220rpx}.box3 .title{font-weight:700;margin-bottom:30rpx}.box3 .b{align-items:center;display:-webkit-flex;display:flex;font-size:28rpx;justify-content:space-between}.box3 .b .l{font-size:26rpx;font-weight:700}.box3 .b .r{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;width:180rpx}.box3 .b .r .op{background-color:#f5f5f5;border-radius:10rpx;height:48rpx;line-height:48rpx;text-align:center;width:48rpx}.box3 .b .r .op:nth-child(3){background-color:#fff1ed}.box3 .name-box{margin-bottom:20rpx;overflow-x:scroll;overflow-y:hidden;white-space:nowrap}.box3 .name-box .name{border:1rpx solid #fff1ed;border-radius:20rpx;color:#2a2a2a;display:inline-block;font-size:26rpx;height:60rpx;line-height:60rpx;margin-right:10rpx;padding:0 36rpx;text-align:center}.box3 .name-box .name.active{background-color:#fff1ed;color:#00a795}.box3 .add-name-box{display:-webkit-flex;display:flex;justify-content:flex-end}.box3 .add-name-box view{background-image:linear-gradient(0deg,#0bc96e,#00a795);border-radius:20rpx;box-shadow:-12rpx 15rpx 10rpx 0 rgba(71,159,119,.2);color:#feffff;font-size:26rpx;height:60rpx;line-height:60rpx;text-align:center;width:160rpx}.box3 .contact-box .item{padding-bottom:10rpx}.box3 .contact-box .item .row{align-items:center;display:-webkit-flex;display:flex;position:relative}.box3 .contact-box .item .row .addPhone{background:#fff1ed;border:2rpx solid #ff5411;border-radius:20rpx;color:#ff5411;font-size:24rpx;height:60rpx;line-height:56rpx;position:absolute;right:0;text-align:center;width:184rpx;z-index:50}.box3 .contact-box .item .row .errId{color:#f56c6c}.box3 .contact-box .item .l{width:80rpx}.box3 .contact-box .item .l .image-l{height:50rpx;width:50rpx}.box3 .contact-box .item .user-card{align-items:center;color:#555;display:-webkit-flex;display:flex;font-size:26rpx;width:160rpx}.box3 .contact-box .item .user-card .card-name{margin-right:10rpx}.box3 .contact-box .item .r{border-bottom:1rpx solid #f5f5f5;flex:1;height:100rpx;position:relative;z-index:10}.couponBox{align-items:center;background:#fff;border-radius:20rpx;height:100rpx;justify-content:space-between;padding:0 30rpx;width:100%}.couponBox .cb1,.couponBox{display:-webkit-flex;display:flex;flex-direction:row}.couponBox .cb1 .cb1-1{color:#2a2a2a;font-family:Source Han Sans CN;font-size:30rpx;font-weight:500;margin-right:20rpx}.couponBox .cb1 .cb1-2{border:2rpx solid #f15252;border-radius:6rpx;color:#f15252;font-family:Source Han Sans CN;font-size:20rpx;font-weight:400;height:30rpx;line-height:26rpx;padding:0 8rpx}.couponBox .cb2{align-items:center;display:-webkit-flex;display:flex;flex-direction:row}.couponBox .cb2 .cb2-1{color:#f15252;font-family:Source Han Sans CN;font-size:36rpx;font-weight:400;margin-right:25rpx}.couponBox .cb2 .cb2-2{color:#b6b6b6;font-family:Source Han Sans CN;font-size:26rpx;font-weight:400;margin-right:25rpx}.couponBox .cb2 .cb2-3{color:#f15252;font-size:26rpx;font-weight:400;margin-right:25rpx}.gift{margin-top:10rpx}.popup{background-color:#fff;border-radius:20rpx;height:auto;padding:30rpx 30rpx 120rpx;position:relative;width:640rpx}.popup .text{color:#4f4f4f;font-family:Source Han Sans CN;font-size:32rpx;line-height:1.4;margin-top:40rpx;text-align:center}.popup .bottom{align-items:center;border-top:1rpx solid #eaeaea;bottom:0;display:-webkit-flex;display:flex;flex-direction:row;height:81rpx;justify-content:space-between;left:0;position:absolute;text-align:center;width:640rpx}.popup .bottom .b-left{color:#8d8d8d;font-family:Source Han Sans CN;font-size:26rpx;font-weight:400;width:50%}.popup .bottom .b-center{background-color:#eaeaea;height:100%;width:1rpx}.popup .bottom .b-right{color:#333;font-family:Source Han Sans CN;font-size:30rpx;font-weight:400;width:50%}.errBox{background:#fff;height:auto;padding:40rpx 40rpx 120rpx;position:relative;width:640rpx}.errBox .name{color:#333;font-size:32rpx;line-height:48rpx;text-align:center;width:100%}.errBox .err-info{margin-top:30rpx}.errBox .err-info .err-box .err-item{display:-webkit-flex;display:flex;font-size:30rpx;line-height:35rpx;margin-bottom:10rpx}.errBox .but-popup{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:50rpx;bottom:20rpx;color:#fff;font-size:26rpx;height:80rpx;left:40rpx;line-height:80rpx;position:absolute;text-align:center;width:560rpx}.fill-card-box{background:#fff;height:880rpx;padding:40rpx;position:relative;width:750rpx}.fill-card-box .name{color:#333;font-size:32rpx;line-height:48rpx}.fill-card-box .but-popup{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:50rpx;bottom:20rpx;color:#fff;font-size:26rpx;height:80rpx;left:40rpx;line-height:80rpx;position:absolute;text-align:center;width:670rpx}.fill-card-box .card-box-popup{margin-top:30rpx}.fill-card-box .card-box-popup .card-item-popup{height:280rpx;margin-bottom:20rpx;position:relative;width:670rpx}.fill-card-box .card-box-popup .card-item-popup .card-image{border-radius:20rpx;height:280rpx;width:670rpx}.fill-card-box .card-box-popup .card-item-popup .card-data{height:280rpx;left:0;position:absolute;top:0;width:670rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .cardHeadbg{background:linear-gradient(180deg,#fd928b,#ef5e3f)}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head{border-radius:20rpx 20rpx 0 0;height:100rpx;position:relative;width:670rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head .card-logo{height:65rpx;left:20rpx;position:absolute;top:19rpx;width:56rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head .card-info{left:96rpx;position:absolute;top:12rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head .card-info .card-name{color:#fff;font-size:28rpx;line-height:42rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head .card-info .card-value{color:#fff;font-size:24rpx;line-height:36rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-head .card-time{color:#fff;font-size:24rpx;line-height:36rpx;position:absolute;right:20rpx;top:54rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .cardBodyBg{background:linear-gradient(180deg,#fff,#ffefef);border:1px solid #ff5411}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body{align-items:center;border-radius:0 0 20rpx 20rpx;display:-webkit-flex;display:flex;flex-direction:column;height:180rpx;position:relative;width:670rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-balance{height:60rpx;line-height:60rpx;margin-top:63rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-balance .label{color:#ff5411;font-size:24rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-balance .value{color:#ff5411;font-size:40rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-tips{align-items:center;display:-webkit-flex;display:flex;height:36rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-tips .tips{margin-right:12rpx;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:203rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-tips .tips-icon{height:28rpx;width:28rpx}.fill-card-box .card-box-popup .card-item-popup .card-data .card-body .card-change{height:44rpx;position:absolute;right:28rpx;top:68rpx;width:44rpx}.carTit{background:#fafafa;color:#aeaeae;font-size:24rpx;font-weight:400;line-height:60rpx;margin:22rpx 0;padding-left:15rpx}.coupon-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.coupon-tit{color:#2a2a2a;font-size:28rpx;font-weight:500;line-height:100rpx}.coupon-msg{background:#dbf5f4;border-radius:15rpx 15rpx 15rpx 6rpx;color:#00a795;display:inline-block;font-size:20rpx;font-weight:400;height:35rpx;line-height:35rpx;margin-left:20rpx;text-align:center;width:140rpx}.coupon-r{color:#333744;font-size:26rpx;font-weight:400;line-height:100rpx}.box4 .title-box{padding:25rpx 30rpx;position:relative}.box4 .title-box .r{align-items:center;background-image:linear-gradient(0deg,#0bc96e,#00a795);border-radius:50%;box-shadow:-12rpx 15rpx 10rpx 0 rgba(71,159,119,.2);color:#fff;display:-webkit-flex;display:flex;font-size:26rpx;height:40rpx;justify-content:center;line-height:40rpx;position:absolute;right:30rpx;text-align:center;top:30rpx;transform:rotate(-180deg);width:40rpx}.box4 .title-box .r.rotate{transform:rotate(0deg)}.box4 .title-box .r image{width:18rpx}.box4 .title-box .l{color:#00a795;font-size:26rpx;line-height:36rpx}.box4 .item-box1{background-color:#fff;border-radius:20rpx;margin-bottom:10rpx;padding:10rpx 30rpx}.box4 .item-box1 .item{border-bottom:1rpx solid #f5f5f5;padding:20rpx 0rpx}.box4 .item-box1 .item:last-child{border-bottom:0;padding:20rpx 0rpx}.box4 .item-box1 .item .t{line-height:40rpx;padding-bottom:20rpx}.box4 .item-box1 .item .b .radio-group{display:-webkit-flex;display:flex;justify-content:space-between;width:345rpx}.box4 .item-box2{background-color:#fff;border-radius:20rpx;padding:50rpx 30rpx 40rpx}.box4 .item-box2 .title{font-weight:700;margin-bottom:30rpx}.box4 .item-box2 .item{border-bottom:1rpx solid #f5f5f5;display:-webkit-flex;display:flex;padding:20rpx 0rpx}.box4 .item-box2 .item .l{width:70rpx}.box4 .item-box2 .item .r{flex:1;line-height:40rpx}.fixed-bottom{background:#fff;border-top:1rpx solid #d9d9d7;bottom:0;display:-webkit-flex;display:flex;height:100rpx;left:0;position:fixed;width:100%;z-index:100}.fixed-bottom .l{line-height:100rpx;padding:0 30rpx;width:450rpx}.fixed-bottom .l text{color:#f15252;font-size:32rpx}.fixed-bottom .r{background:linear-gradient(52deg,#fc4a7c,#ff5411);border-radius:0!important;color:#fff;flex:1;font-size:32rpx;letter-spacing:2rpx;line-height:100rpx}#dateSelect{background:#fff;border-radius:26rpx;box-shadow:0 0 50rpx rgba(0,0,0,.3);left:50%;overflow:hidden;position:fixed;top:50%;transform:translate(-50%,-50%);width:90%;z-index:-1}#dateSelect.show,.yy-success-mask{z-index:100}.yy-success-mask .content{width:560rpx}.yy-success-mask .content>.t .title image{height:80rpx}.yy-success-mask .content>.t .detail view .id{color:#f15252}.yy-success-mask .content>.t .detail view .text{color:#868686}.yy-success-mask .content>.b .r{color:#00a795}.yy-fail-mask{background:rgba(0,0,0,.5);height:100%;position:fixed;top:0;width:100%;z-index:100}.yy-fail-mask .content{background:#fff;border-radius:40rpx;left:50%;line-height:1;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%);width:560rpx}.yy-fail-mask .content .t{padding-top:98rpx}.yy-fail-mask .content .t .title{color:#2a2a2a;font-size:30rpx;margin-bottom:25rpx}.yy-fail-mask .content .t .detail{color:#aeaeae;font-size:26rpx;padding-bottom:70rpx}.yy-fail-mask .content>.b{border-top:1rpx solid #eaeaea;color:#00a795;font-size:26rpx;line-height:80rpx;text-align:center}.book-box{background-color:#fff;border-radius:20rpx;color:#2a2a2a;font-size:28rpx;margin-bottom:10rpx;padding:45rpx 30rpx}.book-box .title{font-weight:700;margin-bottom:30rpx}.book-box .select-box{align-items:center;display:-webkit-flex;display:flex;margin-bottom:30rpx}.book-box .select-box>.l{margin-right:38rpx}.book-box .select-box>.r{align-items:center;display:-webkit-flex;display:flex}.book-box .select-box>.r .item{border:1rpx solid #dbf5f4;border-radius:20rpx;font-size:26rpx;height:74rpx;line-height:74rpx;margin-right:30rpx;text-align:center;width:160rpx}.book-box .select-box>.r .item.active{background:#dbf5f4;color:#00a795}.book-box .select-box>.r .item:last-child{margin-right:0rpx}.book-box .input-box{align-items:center;display:-webkit-flex;display:flex}.book-box .input-box .l{width:110rpx}.book-box .input-box input{border-bottom:1rpx solid #f5f5f5;flex:1;height:100rpx;margin-left:27rpx}.yy-success-mask{background:rgba(0,0,0,.5);height:100%;position:fixed;top:0;width:100%;z-index:150}.yy-success-mask .content{background:#fff;border-radius:40rpx;left:50%;line-height:1;position:absolute;top:50%;transform:translate(-50%,-50%);width:640rpx}.yy-success-mask .content>.t{padding-top:60rpx}.yy-success-mask .content>.t .title{align-items:center;color:#2a2a2a;display:-webkit-flex;display:flex;font-size:36rpx;justify-content:center}.yy-success-mask .content>.t .title image{height:65rpx;margin-right:30rpx;width:76rpx}.yy-success-mask .content>.t .detail{font-size:26rpx;padding-bottom:70rpx;padding-left:60rpx;padding-top:34rpx}.yy-success-mask .content>.t .detail view:first-child{color:#f15252;margin-bottom:20rpx}.yy-success-mask .content>.t .detail view:last-child{color:#2a2a2a}.yy-success-mask .content>.t .detail view text{color:#868686;display:inline-block;width:130rpx}.yy-success-mask .content>.b{border-top:1rpx solid #eaeaea;color:#aeaeae;display:-webkit-flex;display:flex;font-size:26rpx;text-align:center}.yy-success-mask .content>.b view{color:#aeaeae;line-height:80rpx;width:50%}.yy-success-mask .content>.b .r{border-left:1rpx solid #eaeaea;color:#333}.fill-passenger-box{background:#fff;height:880rpx;padding:40rpx;position:relative;width:750rpx}.fill-passenger-box .name{color:#333;font-size:32rpx;line-height:48rpx}.fill-passenger-box .savePassenger{color:#ff5411;font-size:32rpx;line-height:48rpx;position:absolute;right:40rpx;top:40rpx}.fill-passenger-box .passenger-box-popup{height:615rpx;margin-top:18rpx}.fill-passenger-box .passenger-box-popup .user-box{border-bottom:1px solid #eee;height:175rpx;justify-content:space-between;margin-top:30rpx;width:670rpx}.fill-passenger-box .passenger-box-popup .user-box .info-box,.fill-passenger-box .passenger-box-popup .user-box{align-items:center;display:-webkit-flex;display:flex}.fill-passenger-box .passenger-box-popup .user-box .info-box .user-change{background-size:100% 100%;height:44rpx;margin-right:40rpx;width:44rpx}.fill-passenger-box .passenger-box-popup .user-box .info-box .user-info .name{color:#333;font-size:32rpx;line-height:48rpx;margin-bottom:4rpx}.fill-passenger-box .passenger-box-popup .user-box .info-box .user-info .u-phone{align-items:center;color:#777;display:-webkit-flex;display:flex;font-size:26rpx;line-height:39rpx;margin-top:10rpx}.fill-passenger-box .passenger-box-popup .user-box .info-box .user-info .u-phone .u-phone1{color:#777;width:108rpx}.fill-passenger-box .passenger-box-popup .user-box .info-box .user-info .u-phone .u-phone2{color:#777}.fill-passenger-box .passenger-box-popup .user-box .user-edit{height:34rpx;width:34rpx}.fill-passenger-box .but-popup{border:1px solid #ff5411;border-radius:20rpx;color:#ff5411;font-size:30rpx;height:80rpx;line-height:78rpx;margin-top:20rpx;text-align:center;width:670rpx}@-webkit-keyframes ball-climbing-dot-jump-data-v-6c16d096{0%{transform:scaleY(.7)}20%{transform:scale(.7,1.2)}40%{transform:scale(1)}50%{bottom:125%}46%{transform:scale(1)}80%{transform:scale(.7,1.2)}90%{transform:scale(.7,1.2)}100%{transform:scaleY(.7)}}@keyframes ball-climbing-dot-jump-data-v-6c16d096{0%{transform:scaleY(.7)}20%{transform:scale(.7,1.2)}40%{transform:scale(1)}50%{bottom:125%}46%{transform:scale(1)}80%{transform:scale(.7,1.2)}90%{transform:scale(.7,1.2)}100%{transform:scaleY(.7)}}@-webkit-keyframes ball-climbing-dot-steps-data-v-6c16d096{0%{opacity:0;right:0;top:0}50%{opacity:1}100%{opacity:0;right:100%;top:100%}}@keyframes ball-climbing-dot-steps-data-v-6c16d096{0%{opacity:0;right:0;top:0}50%{opacity:1}100%{opacity:0;right:100%;top:100%}}.giftBag{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center}.giftBag .giftBag-img{position:relative;width:630rpx;z-index:3}.giftBag .gift-mid{background:linear-gradient(0deg,#ff3329,#ff7f56);border-radius:0 0 60rpx 60rpx;height:auto;margin-top:-2px;overflow:hidden;padding:35rpx 20rpx 150rpx;position:relative;width:630rpx;z-index:2}.giftBag .gift-mid .gift-title{color:#fff;font-size:36rpx;font-weight:600;line-height:40rpx;margin-bottom:35rpx;text-align:center;text-shadow:0 2rpx 4rpx rgba(87,19,0,.4);width:100%}.giftBag .gift-mid .card-box{background:#db4821;border-radius:20rpx;max-height:604rpx;padding:23rpx 0 0;width:590rpx}.giftBag .gift-mid .card-box .candItem{height:151rpx;margin:auto;position:relative;width:546rpx}.giftBag .gift-mid .card-box .candItem:not(:nth-last-child(2))::after{background-image:linear-gradient(90deg,#af9060,#af9060 50%,#fffbe9 0);background-repeat:repeat-x;background-size:12rpx 2rpx;bottom:-2rpx;content:"";height:2px;left:14rpx;position:absolute;width:519rpx}.giftBag .gift-mid .card-box .candItem .it-img1,.giftBag .gift-mid .card-box .candItem .it-img2{height:151rpx;width:546rpx}.giftBag .gift-mid .card-box .candItem .it-img3{height:151rpx;transform:rotate(180deg);width:546rpx}.giftBag .gift-mid .card-box .item-card-box{display:-webkit-flex;display:flex;height:151rpx;justify-content:space-between;left:0;position:absolute;top:0;width:546rpx}.giftBag .gift-mid .card-box .item-card-box .left{display:-webkit-flex;display:flex;margin-left:23rpx}.giftBag .gift-mid .card-box .item-card-box .left image{background:#af9060;border-radius:10rpx;height:104rpx;margin-top:23rpx;width:104rpx}.giftBag .gift-mid .card-box .item-card-box .left .info{display:-webkit-flex;display:flex;flex-direction:column;height:90rpx;justify-content:space-between;margin-left:13rpx;margin-top:30rpx;width:270rpx}.giftBag .gift-mid .card-box .item-card-box .left .info .name{color:#282828;font-size:24rpx;font-weight:500;line-height:26rpx}.giftBag .gift-mid .card-box .item-card-box .left .info .time{color:#8b8b8b;font-size:16rpx;line-height:16rpx}.giftBag .gift-mid .card-box .item-card-box .right{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:90rpx;justify-content:space-between;margin-right:40rpx;margin-top:30rpx;width:547rpx}.giftBag .gift-mid .card-box .item-card-box .right .price{color:#ff4848;font-size:42rpx;font-weight:500;line-height:42rpx}.giftBag .gift-mid .card-box .item-card-box .right .tips{color:#8b8b8b;font-size:16rpx;line-height:16rpx}.giftBag .gift-mid .card-box .candItem1{background:#fffbe9;border-radius:10rpx;display:-webkit-flex;display:flex;height:150rpx;justify-content:space-between;margin:auto;position:relative;width:544rpx}.giftBag .gift-mid .giftBag-bottom-img{bottom:-5rpx;height:251rpx;left:-7rpx;position:absolute;width:643rpx}.giftBag .gift-mid .giftBag-but{background:linear-gradient(180deg,#fff6e9,#ffab73);border-radius:40rpx;bottom:65rpx;box-shadow:0 4rpx 8rpx 0 rgba(87,19,0,.4);color:#e52121;font-size:30rpx;font-weight:500;height:80rpx;left:135rpx;line-height:80rpx;position:absolute;text-align:center;width:360rpx}.giftBag .gift-mid .box-tip{bottom:20rpx;color:#ffc7aa;font-size:24rpx;left:-5rpx;position:absolute;text-align:center;width:100%} .u-mode-center-box{background-color:initial!important}.red-packets-Box{height:100%;left:0;pointer-events:none;position:fixed;top:0;width:100%;z-index:200}.red-packets-Box .red-box{height:100%;pointer-events:auto;position:fixed;width:100%}.red-packets-Box .red-box .red-box-imgBox,.red-packets-Box .red-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center}.red-packets-Box .red-box .red-box-imgBox{position:relative}.red-packets-Box .red-box .red-box-imgBox .red-top{height:261rpx;margin-bottom:-75rpx;margin-left:5rpx;opacity:0;position:relative;width:522rpx;z-index:205}.red-packets-Box .red-box .red-box-imgBox .red-bottom{height:365rpx;opacity:0;position:relative;width:646rpx;z-index:205}.red-packets-Box .red-box .red-box-imgBox .red-img{height:495rpx;position:absolute;width:552rpx;z-index:210}.red-packets-Box .red-box .red-box-imgBox .red-img1{height:321rpx;margin-bottom:50rpx;margin-left:10rpx;opacity:0;position:absolute;width:457rpx;z-index:201}.red-packets-Box .red-box .red-box-imgBox .red-img1-1{height:321rpx;margin-bottom:50rpx;margin-left:10rpx;opacity:0;position:absolute;width:129rpx;z-index:201}.red-packets-Box .red-box .red-box-imgBox .red-img1-2{height:321rpx;margin-bottom:50rpx;margin-left:10rpx;opacity:0;position:absolute;width:300rpx;z-index:201}.red-packets-Box .red-box .red-box-imgBox .red-img1-3{height:321rpx;margin-bottom:50rpx;margin-left:10rpx;opacity:0;position:absolute;width:457rpx;z-index:201}.red-packets-Box .red-box .red-box-imgBox .red-img2{height:463rpx;opacity:0;position:absolute;width:540rpx;z-index:209}.red-packets-Box .red-box .red-box-imgBox .red-img3{height:275rpx;opacity:0;position:absolute;width:558rpx;z-index:209}.red-packets-Box .red-box .red-box-imgBox .red-name{bottom:-50rpx;color:#fff;font-size:30rpx;height:85rpx;letter-spacing:10rpx;padding:30rpx;position:absolute;text-align:center;text-shadow:0 0 1rpx #ffe2cb,1rpx 0 2rpx #ffe2cb,-1rpx 0 2rpx #ffe2cb,1rpx 0 5rpx #ffe2cb,-1rpx 0 10rpx #ffe2cb;width:100%}@-webkit-keyframes zy-data-v-6c16d096{10%{transform:rotate(15deg)}20%{transform:rotate(-10deg)}30%{transform:rotate(5deg)}40%{transform:rotate(-5deg)}100%,50%{transform:rotate(0deg)}}@keyframes zy-data-v-6c16d096{10%{transform:rotate(15deg)}20%{transform:rotate(-10deg)}30%{transform:rotate(5deg)}40%{transform:rotate(-5deg)}100%,50%{transform:rotate(0deg)}}.red-packets-Box .a0{animation:zy-data-v-6c16d096 2.68s linear infinite}.red-packets-Box .a1{animation-duration:1s;animation-fill-mode:both;animation-iteration-count:1;animation-name:start-data-v-6c16d096;transform-origin:center center}.red-packets-Box .a2{animation-duration:.5s;animation-fill-mode:both;animation-iteration-count:infinite;animation-name:upAnimation-data-v-6c16d096;animation-timing-function:cubic-bezier(.57,.25,.34,.88);transform-origin:center center}.red-packets-Box .a3{animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open-data-v-6c16d096;animation-timing-function:ease-out;transform-origin:center center}.red-packets-Box .a4{animation-duration:1s;animation-fill-mode:both;animation-iteration-count:1;animation-name:openOver-data-v-6c16d096;animation-timing-function:ease-out;transform-origin:center center}.red-packets-Box .a31{animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open1-data-v-6c16d096;animation-timing-function:ease-out;transform-origin:center center}.red-packets-Box .a32s{animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open2s-data-v-6c16d096;animation-timing-function:linear}.red-packets-Box .a32m,.red-packets-Box .a32s{animation-duration:1s;transform-origin:center center}.red-packets-Box .a32m{animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open2m-data-v-6c16d096;animation-timing-function:linear}.red-packets-Box .a32l{animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open2l-data-v-6c16d096;animation-timing-function:linear;transform-origin:center center}.red-packets-Box .a33{animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open3-data-v-6c16d096;animation-timing-function:ease-out}.red-packets-Box .a33,.red-packets-Box .a34{animation-duration:1s;transform-origin:center center}.red-packets-Box .a34{animation-fill-mode:forwards;animation-iteration-count:1;animation-name:open4-data-v-6c16d096;animation-timing-function:ease-out}@-webkit-keyframes openOver-data-v-6c16d096{0%{opacity:1}100%{opacity:0}}@keyframes openOver-data-v-6c16d096{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes start-data-v-6c16d096{0%{transform:scale(1.2) translate(2rpx,2rpx)}3%{transform:scale(1.15) translate(0rpx)}5%{transform:scale(1.1) translate(-2rpx,-2rpx)}10%{transform:scale(1.05) translate(2rpx,2rpx)}15%{transform:scale(1) translate(-2rpx,-2rpx)}20%{transform:scale(.95) translate(2rpx,2rpx)}25%{transform:scale(.9) translate(-2rpx,-2rpx)}30%{transform:scale(.86) translate(2rpx,2rpx)}35%{transform:scale(.81) translate(-2rpx,-2rpx)}40%{transform:scale(.78) translate(2rpx,2rpx)}45%{transform:scale(.75) translate(-2rpx,-2rpx)}50%{transform:scale(.74) translate(2rpx,2rpx)}55%{transform:scale(.72) translate(-2rpx,-2rpx)}60%{transform:scale(.71) translate(2rpx,2rpx)}65%{transform:scale(.7) translate(-2rpx,-2rpx)}70%{transform:scale(.7) translate(2rpx,2rpx)}75%{transform:scale(.7) translate(-2rpx,-2rpx)}80%{transform:scale(.7) translate(2rpx,2rpx)}85%{transform:scale(.7) translate(-2rpx,-2rpx)}90%{transform:scale(.7) translate(-2rpx,-2rpx)}95%{transform:scale(.7) translate(2rpx,2rpx)}100%{transform:scale(.7) translate(2rpx,2rpx)}}@keyframes start-data-v-6c16d096{0%{transform:scale(1.2) translate(2rpx,2rpx)}3%{transform:scale(1.15) translate(0rpx)}5%{transform:scale(1.1) translate(-2rpx,-2rpx)}10%{transform:scale(1.05) translate(2rpx,2rpx)}15%{transform:scale(1) translate(-2rpx,-2rpx)}20%{transform:scale(.95) translate(2rpx,2rpx)}25%{transform:scale(.9) translate(-2rpx,-2rpx)}30%{transform:scale(.86) translate(2rpx,2rpx)}35%{transform:scale(.81) translate(-2rpx,-2rpx)}40%{transform:scale(.78) translate(2rpx,2rpx)}45%{transform:scale(.75) translate(-2rpx,-2rpx)}50%{transform:scale(.74) translate(2rpx,2rpx)}55%{transform:scale(.72) translate(-2rpx,-2rpx)}60%{transform:scale(.71) translate(2rpx,2rpx)}65%{transform:scale(.7) translate(-2rpx,-2rpx)}70%{transform:scale(.7) translate(2rpx,2rpx)}75%{transform:scale(.7) translate(-2rpx,-2rpx)}80%{transform:scale(.7) translate(2rpx,2rpx)}85%{transform:scale(.7) translate(-2rpx,-2rpx)}90%{transform:scale(.7) translate(-2rpx,-2rpx)}95%{transform:scale(.7) translate(2rpx,2rpx)}100%{transform:scale(.7) translate(2rpx,2rpx)}}@-webkit-keyframes upAnimation-data-v-6c16d096{0%{transform:scale(.7) translate(2rpx,2rpx)}10%{transform:scale(.7) translate(-2rpx,-2rpx)}20%{transform:scale(.7) translate(2rpx,2rpx)}30%{transform:scale(.7) translate(-2rpx,-2rpx)}40%{transform:scale(.7) translate(2rpx,2px)}50%{transform:scale(.7) translate(-2rpx,-2rpx)}60%{transform:scale(.7) translate(2rpx,2rpx)}70%{transform:scale(.7) translate(-2rpx,-2rpx)}80%{transform:scale(.7) translate(2rpx,2rpx)}90%{transform:scale(.7) translate(-2rpx,-2rpx)}100%{transform:scale(.7) translate(2rpx,2rpx)}}@keyframes upAnimation-data-v-6c16d096{0%{transform:scale(.7) translate(2rpx,2rpx)}10%{transform:scale(.7) translate(-2rpx,-2rpx)}20%{transform:scale(.7) translate(2rpx,2rpx)}30%{transform:scale(.7) translate(-2rpx,-2rpx)}40%{transform:scale(.7) translate(2rpx,2px)}50%{transform:scale(.7) translate(-2rpx,-2rpx)}60%{transform:scale(.7) translate(2rpx,2rpx)}70%{transform:scale(.7) translate(-2rpx,-2rpx)}80%{transform:scale(.7) translate(2rpx,2rpx)}90%{transform:scale(.7) translate(-2rpx,-2rpx)}100%{transform:scale(.7) translate(2rpx,2rpx)}}@-webkit-keyframes open-data-v-6c16d096{0%{opacity:0;transform:scale(.7) translate(0)}1%{opacity:1;transform:scale(.7) translate(0)}100%{opacity:1;transform:scale(1.2) translateY(-250rpx)}}@keyframes open-data-v-6c16d096{0%{opacity:0;transform:scale(.7) translate(0)}1%{opacity:1;transform:scale(.7) translate(0)}100%{opacity:1;transform:scale(1.2) translateY(-250rpx)}}@-webkit-keyframes open1-data-v-6c16d096{0%{opacity:0;transform:scale(.7) translate(0)}1%{opacity:1;transform:scale(.7) translate(0)}100%{opacity:1;transform:scale(1.2) translate(0)}}@keyframes open1-data-v-6c16d096{0%{opacity:0;transform:scale(.7) translate(0)}1%{opacity:1;transform:scale(.7) translate(0)}100%{opacity:1;transform:scale(1.2) translate(0)}}@-webkit-keyframes open2s-data-v-6c16d096{0%{filter:brightness(.7);opacity:1;transform:scale(.7) translate(0)}10%{filter:brightness(.8);opacity:1}20%{filter:brightness(.9)}40%{filter:brightness(1)}60%{filter:brightness(1.1)}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@keyframes open2s-data-v-6c16d096{0%{filter:brightness(.7);opacity:1;transform:scale(.7) translate(0)}10%{filter:brightness(.8);opacity:1}20%{filter:brightness(.9)}40%{filter:brightness(1)}60%{filter:brightness(1.1)}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@-webkit-keyframes open2m-data-v-6c16d096{0%{filter:brightness(.7);opacity:0;transform:scale(.7) translate(0)}24%{opacity:0}30%{filter:brightness(.9);opacity:1}40%{filter:brightness(1)}60%{filter:brightness(1.1)}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@keyframes open2m-data-v-6c16d096{0%{filter:brightness(.7);opacity:0;transform:scale(.7) translate(0)}24%{opacity:0}30%{filter:brightness(.9);opacity:1}40%{filter:brightness(1)}60%{filter:brightness(1.1)}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@-webkit-keyframes open2l-data-v-6c16d096{0%{filter:brightness(.7);opacity:0;transform:scale(.7) translate(0)}10%{filter:brightness(.8)}20%{filter:brightness(.9)}54%{filter:brightness(1);opacity:0}60%{filter:brightness(1.1);opacity:1}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@keyframes open2l-data-v-6c16d096{0%{filter:brightness(.7);opacity:0;transform:scale(.7) translate(0)}10%{filter:brightness(.8)}20%{filter:brightness(.9)}54%{filter:brightness(1);opacity:0}60%{filter:brightness(1.1);opacity:1}80%{filter:brightness(1.2)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-100rpx)}}@-webkit-keyframes open3-data-v-6c16d096{0%{filter:brightness(.5);opacity:0;transform:scale(.7) translate(0)}10%{filter:brightness(1);opacity:1}20%{filter:brightness(.8)}30%{filter:brightness(1.3)}40%{filter:brightness(.8)}50%{filter:brightness(1)}60%{filter:brightness(.6)}70%{filter:brightness(1.2)}80%{filter:brightness(.8)}90%{filter:brightness(1.1)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-250rpx)}}@keyframes open3-data-v-6c16d096{0%{filter:brightness(.5);opacity:0;transform:scale(.7) translate(0)}10%{filter:brightness(1);opacity:1}20%{filter:brightness(.8)}30%{filter:brightness(1.3)}40%{filter:brightness(.8)}50%{filter:brightness(1)}60%{filter:brightness(.6)}70%{filter:brightness(1.2)}80%{filter:brightness(.8)}90%{filter:brightness(1.1)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-250rpx)}}@-webkit-keyframes open4-data-v-6c16d096{0%{filter:brightness(.8);opacity:0;transform:scale(.7) translate(0)}10%{opacity:1}20%{filter:brightness(1)}40%{filter:brightness(.8)}60%{filter:brightness(1)}80%{filter:brightness(.8)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-250rpx)}}@keyframes open4-data-v-6c16d096{0%{filter:brightness(.8);opacity:0;transform:scale(.7) translate(0)}10%{opacity:1}20%{filter:brightness(1)}40%{filter:brightness(.8)}60%{filter:brightness(1)}80%{filter:brightness(.8)}100%{filter:brightness(1.3);opacity:1;transform:scale(1.2) translateY(-250rpx)}}.b1{animation-duration:4s;animation-fill-mode:both;animation-iteration-count:1;animation-name:bg-data-v-6c16d096}@-webkit-keyframes bg-data-v-6c16d096{0%{background-color:rgba(0,0,0,.5)}80%{background-color:rgba(0,0,0,.9)}93%{background-color:#fff}95%{background-color:#fff}100%{background-color:initial}}@keyframes bg-data-v-6c16d096{0%{background-color:rgba(0,0,0,.5)}80%{background-color:rgba(0,0,0,.9)}93%{background-color:#fff}95%{background-color:#fff}100%{background-color:initial}}.pack-box{background:#fff;border-radius:20rpx;margin-bottom:10rpx;padding:0 30rpx}.pack-box .pack-item{border-bottom:1px solid #ededed;padding:30rpx 0}.pack-box .pack-item .pt-it{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.pack-box .pack-item .pt-it .name{color:#444;font-size:28rpx;font-weight:700;line-height:45rpx;width:420rpx}.pack-box .pack-item .pt-it .price{color:#ff5411;font-size:30rpx;font-weight:700;line-height:45rpx}.pack-box .pack-item .pt-it .info-box{width:450rpx}.pack-box .pack-item .pt-it .info-box .info{word-wrap:break-word;align-items:center;color:#777;display:-webkit-flex;display:flex;font-size:26rpx;line-height:40rpx;width:450rpx}.pack-box .pack-item .pt-it .info-box .info view{word-wrap:break-word;color:#777;width:450rpx}.pack-box .pack-item .pt-it .info-box .info view text{color:#777;word-break:keep-all}.pack-box .pack-item .pt-it .info-box .info text{font-size:26rpx;word-break:keep-all}.pack-box .pack-item .pt-it .op-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;line-height:62rpx;text-align:center;width:220rpx}.pack-box .pack-item .pt-it .op-box .op{background:#f5f5f5;border-radius:6rpx;height:62rpx;width:60rpx}.pack-box .pack-item .pt-it .op-box .op:nth-child(3){background:#fff1ed}.pack-box .pack-item .pt-it .op-box .op-num{color:#000;font-size:28rpx;font-weight:700;width:100rpx}.pack-box .pack-item .pt-it .opDisabled{opacity:.5}.pack-box .pack-item .pt-it:first-child{margin-bottom:20rpx}.pack-box .pack-item:last-child{border:none}.certificate{background:#fff;min-height:200rpx;padding:40rpx;width:750rpx}.certificate .name{color:#333;font-size:32rpx;line-height:48rpx;margin-bottom:60rpx}.certificate .certificate-box .certificate-item{align-items:center;display:-webkit-flex;display:flex;height:44rpx;justify-content:space-between;margin-bottom:50rpx;width:100%}.certificate .certificate-box .certificate-item .t{color:#333;font-size:28rpx}.certificate .certificate-box .certificate-item .icon{height:44rpx;width:44rpx}.dis{opacity:.5}.pass{height:230rpx!important;margin-top:0!important}.pass .u-phone1{width:160rpx!important}
</style>
