<template>
<view class="page-box">
    <order-nav :active="2" class=""></order-nav>
    <view class="pb">
        <view class="order-info">
            <view class="title">{{ lineProductInfo.productName }}</view>
            <view class="info-box">
                <view class="info-it" v-if="lineProductInfo.relationProductName">
                    <image mode class="icon" src="https://eshopfile.zhiyousx.com/2023091811405282175.png"></image>
                    <view class="text">{{lineProductInfo.relationProductName}}</view>
                </view>
                <view class="info-it">
                    <image mode class="icon" src="https://eshopfile.zhiyousx.com/169883967619693905.png"></image>
                    <view class="text">{{$root.m0}}</view>
                </view>
            </view>
            <view class="tips-box">
                <view class="tips-l">
                    <label class="bookingTimeStr _span">{{refundDetail.refundDesc}}</label>费用说明</view>
                <view class="tips-r" @click="buyTip()">
                    <view class="t">购买须知</view>
                    <image mode class="icon" src="https://eshopfile.zhiyousx.com/2023091816345862711.png"></image>
                </view>
            </view>
        </view>
        <view class="num-box" :style="'padding-bottom:'+(surplusStock>0&&surplusStock<=20?'0':'40rpx')+';'">
            <view class="item" v-if="item.price!=null" :key="index" v-for="(item, index) in $root.l0">
                <view class="item-l">
                    <view class="p1">
                        <view class="type">{{item.f0}}</view>
                        <view class="t">{{item.m1}}</view>
                    </view>
                </view>
                <view class="item-r">
                    <view class="price">
                        <text :class="['',item.num>0?'actColor':'']" style="font-size:24rpx;">￥</text>
                        <text :class="['',item.num>0?'actColor':'']">{{item.price}}</text>
                    </view>
                    <view class="select-box">
                        <view class="sb-it">-</view>{{ item.num }}<view class="sb-it">+</view>
                    </view>
                </view>
            </view>
            <view class="p2" v-if="surplusStock>=0&&surplusStock<=20">{{'剩余库存'+surplusStock}}</view>
        </view>
        <view class="tourists-box" v-if="allTicNum>0">
            <view class="title-box">
                <view class="title">{{'选择'+allTicNum+'位游客'}}</view>
                <view class="sub">
                    <label class="_span" v-if="$root.m2!=='已选满'">还需选择</label>
                    <text class="actColor" style="font-size:24rpx;">{{$root.m3}}</text>
                </view>
            </view>
            <view class="single" v-if="typeNum==1">
                <scroll-view class="passenger-box" :scrollX="true">
                    <view :class="['user','',item.g0?'active':'',!item.g1?'dis':'']" v-if="item.idCarNo" :key="index" v-for="(item, index) in $root.l1">{{ item.name }}</view>
                    <view class="user-but">
                        <view class="but">{{ (commonUsedTouristList[0]?'新增/更换':'+ 新增信息') }}</view>
                    </view>
                </scroll-view>
                <view class="user-item" v-for="(item, index) in priceInfo[actIndex].userList">
                    <view class="u-item-l">
                        <image mode class="icon" src="https://eshopfile.zhiyousx.com/2023091815384493978.png"></image>
                        <view class="info">
                            <view class="name">{{ item.name }}</view>
                            <view class="card">证件号<text class="" style="margin-left:30rpx;font-size:26rpx;color:#777777;">{{item.idCarNo}}</text>
                            </view>
                        </view>
                    </view>
                    <image mode class="u-item-r" src="https://eshopfile.zhiyousx.com/169415863023853994.png"></image>
                </view>
                <view class="" style="height:40rpx;"></view>
            </view>
            <view class="multi" v-if="typeNum>1">
                <view class="m-class" v-if="item.num>0" :key="index" v-for="(item, index) in $root.l2">
                    <view class="mc-info">
                        <view class="mc-info-l">{{item.f1}}</view>
                        <view class="mc-info-r">{{'× '+item.num}}</view>
                    </view>
                    <view class="m-user-box">
                        <view class="mu-item" v-for="(it, i) in item.userList">
                            <image mode class="icon" src="https://eshopfile.zhiyousx.com/2023091815384493978.png"></image>
                            <view class="it-info">
                                <view class="it-flex">
                                    <view class="name">{{it.name}}</view>
                                    <view class="card">{{'证件号：'+it.idCarNo}}</view>
                                </view>
                                <image mode class="u-item-r" src="https://eshopfile.zhiyousx.com/169415863023853994.png"></image>
                            </view>
                        </view>
                        <view class="mu-add" v-if="item.num>item.g2">
                            <image mode class="icon" src="https://eshopfile.zhiyousx.com/2023091816291655724.png"></image>
                            <view class="add-tip">{{'需选择'+item.num-item.g3+'位游客信息'}}</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="contact-box">
            <view class="title">联系人信息</view>
            <view class="row-it">
                <view class="label">姓名</view>
                <input class="" data-type="name" placeholder="请填写姓名" :value="contactPerson" @input="contactPerson = $event" @blur="$forceUpdate()"></input>
            </view>
            <view class="row-it">
                <view class="label">手机号码</view>
                <input class="" placeholder="请填写手机号码" type="number" :value="contactTel" @input="contactTel = $event" @blur="$forceUpdate()"></input>
            </view>
        </view>
        <view class="other-box" v-if="$root.g4>0">
            <view class="title">其他信息</view>
            <view class="row-it" v-for="(item, index) in otherInfoList">
                <view class="row-it-box">
                    <view class="label">{{ item.title }}</view>
                    <view class="val" v-if="item.type==1">
                        <input class="" :placeholder="item.content||'请填写'" type="text" :value="item.val"></input>
                    </view>
                    <block v-else>
                        <view class="val2" v-if="item.type==2">
                            <textarea :autoHeight="true" class="textareas" :disableDefaultPadding="true" maxlength="-1" :placeholder="item.content||'请填写'" :value="item.val"></textarea>
                        </view>
                        <block v-else>
                            <view class="val val-box" v-if="item.type==3">
                                <view class="singleLineText">{{item.val||'请选择'}}</view>
                                <uni-icons class="" color="#BDBDBD" size="19" style="margin-left:4rpx;" type="arrowright"></uni-icons>
                            </view>
                            <block v-else>
                                <view class="val1" v-if="item.type==0">
                                    <uni-data-select class="" :localdata="item.range" placeholder="请选择" :value="item.val"></uni-data-select>
                                </view>
                            </block>
                        </block>
                    </block>
                </view>
                <view class="tips" v-if="item.description">{{ item.description }}</view>
            </view>
        </view>
        <view class="couponBox">
            <view class="cb1">
                <view class="cb1-1">优惠券</view>
                <view class="cb1-2" v-if="discountAmount>0">已选1张</view>
            </view>
            <view class="cb2" @click="chooseCoupon($event)">
                <view class="cb2-2" v-if="$root.g5==0">无可用</view>
                <block v-else>
                    <view class="cb2-1" v-if="discountAmount>0">{{'-¥'+discountAmount}}</view>
                    <block v-else>
                        <view class="cb2-3" v-if="discountAmount==0">{{$root.g6+'张可用'}}</view>
                    </block>
                </block>
                <uni-icons class="" color="#BDBDBD" size="19" type="arrowright"></uni-icons>
            </view>
        </view>
        <view :class="['footer-box','',showPassenger?'firstTop':'']" :style="'padding-bottom:'+safeAreaBottom+'rpx'+';'+'height:'+(100+safeAreaBottom)+'rpx'+';'" v-if="showBar">
            <view class="amount-info">
                <view class="amount-box">
                    <view class="price">
                        <view class="p-it">
                            <view class="name">小计</view>
                            <view class="num actColor">
                                <label class="_span" style="font-size:20rpx;">￥</label>{{allAmount+''}}</view>
                        </view>
                    </view>
                </view>
                <view class="res" @click="priceInfoPopup()">明细</view>
                <u-icon class="" color="#FF5411" name="arrow-up" size="22" style="margin-top:-4rpx;" v-if="!showDetail" @click="e0()"></u-icon>
                <u-icon class="" color="#FF5411" name="arrow-down" size="22" style="margin-top:-4rpx;" v-else @click="e1()"></u-icon>
            </view>
            <view class="next-btn" @click="submit()">提交订单</view>
        </view>
    </view>
    <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="showCoupon" :vueSlots="['default']" @input="showCoupon = $event">
        <view class="couponcardBox">
            <view class="title">优惠券</view>
            <scroll-view class="coupon-list" :scrollY="true">
                <view class="coupon-item" :key="index" v-for="(item, index) in $root.l3">
                    <view class="box">
                        <view class="left">
                            <view class="ceng1" v-if="item.type==3">
                                <view class="money">0</view>
                                <view class="yang">元购</view>
                            </view>
                            <view class="ceng1" v-else>
                                <view class="yang">￥</view>
                                <view class="money">{{item.realQuota}}</view>
                            </view>
                            <view class="ceng2" v-if="item.type==1&&item.threshold>0">{{'满'+item.threshold+'可用'}}</view>
                            <view class="ceng2" v-if="item.type==2&&item.threshold==0">无门槛</view>
                            <view class="ceng2" v-if="item.type==3">{{'可抵扣'+item.deductionNum+'张'}}</view>
                        </view>
                        <view class="right">
                            <view class="it1">
                                <view class="name">{{item.name}}</view>
                                <view class="date" v-if="item.useTimeSlot==0">{{item.f2+'-'+item.f3}}</view>
                                <view class="date" v-if="item.useTimeSlot==1">{{item.validityEndTime+'前有效'}}</view>
                                <block v-if="item.useTimeSlot==2">
                                    <view class="date">{{item.f4+'-'+item.f5}}</view>
                                    <view class="date po">{{'可预订【'+item.f6+'-'+item.f7+'】的产品'}}</view>
                                </block>
                            </view>
                            <view class="chooseItem">
                                <image class="choose-style" src="https://eshopfile.zhiyousx.com/2022031716044893716.png" v-if="userCouponId==item.userCouponId"></image>
                                <image class="choose-style" src="https://eshopfile.zhiyousx.com/2022031716040660783.png" v-else></image>
                            </view>
                        </view>
                    </view>
                </view>
            </scroll-view>
            <view class="noUse" @click="cancelCoupon($event)">
                <view class="wenzi">不使用优惠券</view>
                <image class="choose-style" src="https://eshopfile.zhiyousx.com/2022031716044893716.png" v-if="userCouponId==-1"></image>
                <image class="choose-style" src="https://eshopfile.zhiyousx.com/2022031716040660783.png" v-else></image>
            </view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" mode="bottom" :value="showPassenger" :vueSlots="['default']" @input="showPassenger = $event">
        <view class="model-box">
            <view class="model-title">
                <view class="model-name" v-if="!modelType&&actUserInfo">{{ $root.m4 }}</view>
                <view class="model-name" v-if="modelType==1">新增游客</view>
                <view class="model-name" v-if="modelType==2">编辑游客</view>
                <image class="close" src="https://eshopfile.zhiyousx.com/169345070139905990.png" @click="closePassenger()"></image>
            </view>
            <view class="addContacts" v-if="!modelType" @click="addPassenger($event)">+ 新增联系人</view>
            <view class="" v-if="!modelType">
                <scroll-view class="passenger-box-popup" scrollY="true">
                    <view class="user-box" :key="index" v-for="(item, index) in $root.l4">
                        <view class="info-box">
                            <image mode class="user-change" src="https://eshopfile.zhiyousx.com/169345574106635019.png" v-if="item.g7"></image>
                            <image mode class="user-change" src="https://eshopfile.zhiyousx.com/169345576395787642.png" v-else></image>
                            <view :class="['user-info','',!item.g8?'dis':'']">
                                <view class="name">{{item.name}}</view>
                                <view class="u-phone" v-if="item.phone">
                                    <view class="u-phone1">手机号</view>
                                    <view class="u-phone2">{{ item.m5 }}</view>
                                </view>
                                <view class="u-phone" v-if="item.idCarNo">
                                    <view class="u-phone1">证件类型</view>
                                    <view class="u-phone2">{{ item.f8 }}</view>
                                </view>
                                <view class="u-phone" v-if="item.idCarNo">
                                    <view class="u-phone1">证件号</view>
                                    <view class="u-phone2">{{ item.m6 }}</view>
                                </view>
                                <view class="tips" v-if="!item.idCarNo">请补充证件信息</view>
                            </view>
                        </view>
                        <image mode class="user_edit" src="https://eshopfile.zhiyousx.com/169415900438889645.png"></image>
                    </view>
                </scroll-view>
            </view>
            <view class="content" v-else>
                <view class="row-box bet" @click="e2($event)">
                    <view class="label">证件类型</view>
                    <view class="select">{{ $root.f9 }}<u-icon class="" color="#333333" name="arrow-right" size="20" style="margin-left:10rpx;"></u-icon>
                    </view>
                </view>
                <ocr-index class="" :vueSlots="['content']" v-if="passenger.cardType==0">
                    <view class="row-box" slot="content">
                        <view class="label">姓名</view>
                        <view class="value">
                            <u-input :border="border" class="" placeholder="请填写" type="text" :value="passenger.name" @input="passenger.name = $event"></u-input>
                        </view>
                    </view>
                </ocr-index>
                <view class="row-box" v-else>
                    <view class="label">姓名</view>
                    <view class="value">
                        <u-input :border="border" class="" :placeholder="passenger.cardType==1?'请按Surname/Given name格式填写':'请填写'" type="text" :value="passenger.name" @input="passenger.name = $event"></u-input>
                    </view>
                </view>
                <view class="row-box">
                    <view class="label">证件号码</view>
                    <view :class="['value','',passenger.cardType==0?'w390':'']">
                        <u-input :border="border" class="" placeholder="请填写" type="text" :value="passenger.idCarNo" @input="passenger.idCarNo = $event"></u-input>
                    </view>
                </view>
                <view class="row-box row-box-count">
                    <view class="label">手机号</view>
                    <view class="value">
                        <u-input :border="border" class="" placeholder="请填写" type="number" :value="passenger.phone" @input="passenger.phone = $event"></u-input>
                    </view>
                </view>
            </view>
            <view class="save" @click="save()">保存</view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="showDetail" :vueSlots="['default']" @input="showDetail = $event">
        <view class="detailBox">
            <view class="title">价格明细</view>
            <view class="content">
                <view class="item" v-if="it.price!=null" v-for="(it, i) in $root.l5">
                    <view class="t1">{{ it.f10 }}</view>
                    <view class="t1">{{'￥ '+it.price+''}}<text class="t2">{{'x '+it.num}}</text>
                    </view>
                </view>
            </view>
            <view class="order-detail">
                <view class="od-item">
                    <text class="">订单总额：</text>
                    <text class="">{{'￥'+totalNum}}</text>
                </view>
                <view class="od-item color1" v-if="noCouponFlag==0">
                    <text class="">优惠券：</text>
                    <text class="">{{'-￥'+discountAmount}}</text>
                </view>
                <view class="od-item color2">
                    <text class="color2">应付金额：</text>
                    <text class="">{{'￥'+allAmount}}</text>
                </view>
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
    <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="showService" :vueSlots="['default']" @input="showService = $event">
        <view class="service-box">
            <view class="title">购买须知</view>
            <scroll-view class="content-service" :scrollY="true">
                <view class="illustrate">
                    <view class="title">退改说明<label class="tip _span">{{refundDetail.refundDesc||''}}</label>
                    </view>
                    <view class="table">
                        <view class="th">
                            <view class="td" style="width:490rpx;">取消时间</view>
                            <view class="td" style="width:184rpx;">损失费用</view>
                        </view>
                        <view class="tr" :key="index" v-for="(item, index) in refundDetail.refundFeeList">
                            <view class="td" style="width:490rpx;">{{item.orderTimeDesc}}</view>
                            <view class="td center" style="width:184rpx;">{{item.feeDesc}}</view>
                        </view>
                        <view class="tr">
                            <view class="td" style="width:100%;">
                                <u-parse class="" :html="lineProductInfo.lineProductUseDescVO.refundRuleDesc" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="illustrate">
                    <view class="title" v-if="$root.g9">费用说明</view>
                    <view class="table" v-if="$root.g10">
                        <view class="th">
                            <view class="td">费用包含</view>
                        </view>
                        <view class="tr" :key="index" v-for="(item, index) in lineProductInfo.lineProductUseDescVO.lineProductFeeInclusiveDTOS">
                            <view class="td bold">{{item.type}}</view>
                            <view class="td">
                                <view class="_p">{{item.desc}}</view>
                            </view>
                        </view>
                    </view>
                    <view class="table" v-if="$root.g11">
                        <view class="th">
                            <view class="td">费用不包含</view>
                        </view>
                        <view class="tr" :key="index" v-for="(item, index) in lineProductInfo.lineProductUseDescVO.lineProductFeeExclusiveDTOS">
                            <view class="td bold">{{item.type}}</view>
                            <view class="td">
                                <view class="_p">{{item.desc}}</view>
                            </view>
                        </view>
                    </view>
                    <view class="table" :key="index" v-for="(item, index) in lineProductInfo.lineProductUseDescVO.lineProductFeeOtherListDTOS">
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
            </scroll-view>
        </view>
    </u-popup>
    <u-select childName="value" class="" confirmColor="#FF5411" :defaultValue="defaultValue" labelName="key" :list="selectData.lineProductOtherContentVOList" mode="mutil-column-auto" style="z-index:13000;position:fixed;" :title="selectData.title" :value="isShowSelect" valueName="key" @confirm="e3()" @input="isShowSelect = $event"></u-select>
    <card-type class="" :realCardType="passenger.cardType" :realCardTypeCodes="realCardTypeCodes" :showCardPop="showCardPop" @chooseCardType="chooseCardType()" @closePop="e4()"></card-type>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              orderNav: function() {
                i.e("subPack/components/orderNav").then(function() {
                  return resolve(i("c26a8"))
                }.bind(null, i)).catch(i.oe)
              },
              uniDataSelect: function() {
                Promise.all([i.e("subPack/common/vendor"), i.e("subPack/components/uni-data-select")]).then(function() {
                  return resolve(i("c2eb"))
                }.bind(null, i)).catch(i.oe)
              },
              ocrIndex: function() {
                i.e("components/ocr/ocrIndex").then(function() {
                  return resolve(i("7882"))
                }.bind(null, i)).catch(i.oe)
              },
              cardType: function() {
                i.e("subPack/components/card-pop/candType").then(function() {
                  return resolve(i("7158"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            data: function() {
              var e;
              return e = {
                safeAreaBottom: 0,
                showDetail: !1,
                allAmount: 200,
                value: "",
                commonUsedTouristList: [],
                selectedDate: "2023-09-22",
                surplusStock: 5,
                soldCount: 0,
                showService: !1,
                priceInfo: [{
                  peopleType: 1,
                  price: null,
                  num: 0,
                  amount: 0,
                  userList: [],
                  idList: []
                }, {
                  peopleType: 3,
                  price: null,
                  num: 0,
                  amount: 0,
                  userList: [],
                  idList: []
                }, {
                  peopleType: 2,
                  price: null,
                  num: 0,
                  amount: 0,
                  userList: [],
                  idList: []
                }],
                itemUseDesc: {
                  minBookNum: 0,
                  maxBookNum: 4
                },
                allTicNum: 0
              }, (0, r.default)(e, "allAmount", 0), (0, r.default)(e, "typeNum", 0), (0, r.default)(e, "actIndex", 0), (0, r.default)(e, "modelType", 0), (0, r.default)(e, "showPassenger", !1), (0, r.default)(e, "actUserInfo", ""), (0, r.default)(e, "changeIndex", 0), (0, r.default)(e, "passenger", {
                name: "",
                idCarNo: "",
                phone: "",
                id: "",
                cardType: 0
              }), (0, r.default)(e, "submitState", !1), (0, r.default)(e, "safeAreaBottom", 0), (0, r.default)(e, "contactPerson", ""), (0, r.default)(e, "contactTel", ""), (0, r.default)(e, "lineProductId", ""), (0, r.default)(e, "lineProductName", ""), (0, r.default)(e, "disabledSubmitBtn", !1), (0, r.default)(e, "lineing", !1), (0, r.default)(e, "hasTimeOut", !1), (0, r.default)(e, "repeatCreateOrder", null), (0, r.default)(e, "repeatCreateOrder2", null), (0, r.default)(e, "groupErrList", []), (0, r.default)(e, "showGroupErr", !1), (0, r.default)(e, "lineProductInfo", {}), (0, r.default)(e, "orderId", ""), (0, r.default)(e, "refundDetail", {}), (0, r.default)(e, "showCoupon", !1), (0, r.default)(e, "showBar", !0), (0, r.default)(e, "couponId", ""), (0, r.default)(e, "couponList", []), (0, r.default)(e, "couponPeople", []), (0, r.default)(e, "userCouponId", ""), (0, r.default)(e, "discountAmount", 0), (0, r.default)(e, "deductionInfo", {}), (0, r.default)(e, "noCouponFlag", null), (0, r.default)(e, "totalNum", 0), (0, r.default)(e, "treeData", []), (0, r.default)(e, "defaultValue", [0, 0, 0]), (0, r.default)(e, "otherInfoList", []), (0, r.default)(e, "isShowSelect", !1), (0, r.default)(e, "otherIndex", -1), (0, r.default)(e, "selectData", ""), (0, r.default)(e, "parseStyle", {
                p: "word-break: break-all;line-height:48rpx;"
              }), (0, r.default)(e, "showCardPop", !1), (0, r.default)(e, "realCardTypeCodes", []), e
            },
            filters: {
              peopleTypeFilter: function(e) {
                return {
                  1: "成人",
                  2: "儿童",
                  3: "老人"
                } [e]
              },
              timeFormat: function(e) {
                return e.split(" ")[0]
              }
            },
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            onLoad: function(t) {
              null != t.noCouponFlag && (this.noCouponFlag = t.noCouponFlag), this.safeAreaBottom = uni.getStorageSync("safeAreaBottom") ? uni.getStorageSync("safeAreaBottom") : 0, this.lineProductInfo = uni.getStorageSync("lineProduct"), this.realCardTypeCodes = this.lineProductInfo.lineProductUseDescVO.realCardTypeCodes.split(","), this.priceInit()
            },
            onShow: function() {
              this.getCommonUsedTouristList(), this.refundInfo(), this.getOtherInfo()
            },
            watch: {
              showCoupon: {
                handler: function(e, t) {
                  this.showBar = !e
                }
              }
            },
            methods: {
              setDataInfos: function(e) {
                var t = this;
                console.log(e, "参数--------"), e ? (this.passenger.name = e.name, this.passenger.idCarNo = e.idCarNo) : setTimeout((function() {
                  t.$uni.showToast("识别失败，请重新识别或手动填写")
                }), 500)
              },
              trip: function() {
                var e = "",
                  t = "",
                  i = "",
                  n = 0;
                if (this.lineProductInfo.fromCityList && this.lineProductInfo.fromCityList.length > 0 && (this.lineProductInfo.fromCityList.forEach((function(e, i) {
                    t += e + "/"
                  })), t && (t = t.slice(0, -1) + "出发,")), this.lineProductInfo.journeyDay > this.lineProductInfo.journeyNight && (n = this.lineProductInfo.journeyDay), this.lineProductInfo.journeyDay < this.lineProductInfo.journeyNight && (n = this.lineProductInfo.journeyNight), this.lineProductInfo.journeyDay == this.lineProductInfo.journeyNight && (n = this.lineProductInfo.journeyNight + 1), this.lineProductInfo.selectTicket && this.lineProductInfo.selectTicket.date) {
                  var o = new Date(Date.parse(this.lineProductInfo.selectTicket.date) + 864e5 * n);
                  return i = o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + o.getDate(), i = this.lineProductInfo.journeyNight ? i : this.lineProductInfo.selectTicket.date, e = t + this.lineProductInfo.selectTicket.date + "出发" + i + "返程", this.lineProductInfo.selectTicket.date == i && (e = t + this.lineProductInfo.selectTicket.date + "当天往返"), e
                }
              },
              priceInfoPopup: function() {
                this.showService = !1, this.showDetail = !0
              },
              buyTip: function() {
                this.showService = !0
              },
              deleteUser: function(e) {
                this.priceInfo[this.actIndex].userList.splice(e, 1), this.priceInfo[this.actIndex].idList.splice(e, 1)
              },
              chooseCoupon: function() {
                this.couponList.length > 0 && (this.showCoupon = !0)
              },
              getOptimalCoupon: function(e) {
                var t = this;
                return (0, s.default)(o.default.mark((function i() {
                  var n, s;
                  return o.default.wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                      case 0:
                        return i.prev = 0, n = {
                          useDateStr: t.lineProductInfo.selectTicket.date,
                          lineProductId: t.lineProductInfo.productId,
                          orderPeopleList: t.couponPeople
                        }, i.next = 4, t.$uniApi.dataRequestNoLoading("POST", "product/app/v1/coupon/getBestLineCoupon", n);
                      case 4:
                        1 == (s = i.sent).code && (t.couponList = s.data, t.userCouponId = s.data[0].userCouponId, 3 == s.data[0].type ? (t.discountAmount = s.data[0].realQuota, t.deductionInfo = s.data[0].deductionInfo, t.allAmount = t.subtract(e, s.data[0].realQuota)) : (t.discountAmount = s.data[0].quota, t.allAmount = t.subtract(e, s.data[0].quota))), i.next = 11;
                        break;
                      case 8:
                        i.prev = 8, i.t0 = i.catch(0), t.resettingMoney();
                      case 11:
                      case "end":
                        return i.stop()
                    }
                  }), i, null, [
                    [0, 8]
                  ])
                })))()
              },
              cancelCoupon: function() {
                var e = this;
                this.userCouponId = -1, this.discountAmount = 0, this.showCoupon = !1, this.deductionInfo = {};
                var t = 0;
                this.couponPeople = [], this.priceInfo.forEach((function(i, n) {
                  i.num && (e.actIndex = n, i.amount = e.multiply(i.price, i.num), t = e.add(t, i.amount))
                })), this.allAmount = t
              },
              limitAge: function(e, t, i, n, o) {
                var s = "";
                return 1 == o || 3 == o ? (s = e + "周岁", s += n ? "(不含)" : "(含)", s += i ? "-" + t + "周岁(含)" : "以上") : (s = e + "周岁", s += n ? "(不含)" : "(含)", s += "-" + t + "周岁", s += i ? "(不含)" : "(含)"), s
              },
              residueNum: function() {
                var e = 0;
                return this.priceInfo.forEach((function(t) {
                  e += t.userList.length
                })), this.allTicNum - e == 0 ? "已选满" : this.allTicNum - e + "位"
              },
              priceInit: function() {
                this.priceInfo[0].limitAge = this.lineProductInfo.adultLimitAge, this.priceInfo[0].regularAge = this.lineProductInfo.adultRegularAge, this.priceInfo[0].ageType = this.lineProductInfo.adultAgeType, this.priceInfo[0].ageRange = this.lineProductInfo.adultAgeRange, this.priceInfo[1].limitAge = this.lineProductInfo.oldLimitAge, this.priceInfo[1].regularAge = this.lineProductInfo.oldRegularAge, this.priceInfo[1].ageRange = this.lineProductInfo.oldAgeRange, this.priceInfo[1].ageType = this.lineProductInfo.oldAgeType, this.priceInfo[2].limitAge = this.lineProductInfo.childrenLimitAge, this.priceInfo[2].regularAge = this.lineProductInfo.childrenRegularAge, this.priceInfo[2].ageRange = this.lineProductInfo.childrenAgeRange, this.priceInfo[2].ageType = this.lineProductInfo.childrenAgeType, this.priceInfo[0].price = this.lineProductInfo.selectTicket.adultSellPrice, this.priceInfo[1].price = this.lineProductInfo.selectTicket.oldSellPrice, this.priceInfo[2].price = this.lineProductInfo.selectTicket.childrenSellPrice, this.itemUseDesc.maxBookNum = this.lineProductInfo.lineProductUseDescVO.maxBookNum, this.surplusStock = this.lineProductInfo.selectTicket.surplusStock, this.soldCount = this.lineProductInfo.selectTicket.soldCount ? this.lineProductInfo.selectTicket.soldCount : 0, this.setUserData()
              },
              setUserData: function() {
                var e = this.priceInfo.filter((function(e, t) {
                  return null !== e.price && e.price >= 0
                }));
                if (e && 1 === e.length) {
                  var t = -1,
                    i = e[0].peopleType;
                  1 == i ? t = 0 : 3 == i ? t = 1 : 2 == i && (t = 2), this.addNum(t, e[0])
                }
              },
              getServiceDesc: function(e) {
                return ["", "自动确认/二次确认", "无购物", "无自费", "退订无忧", "上门接"][e]
              },
              refundInfo: function() {
                var e = this;
                this.loading = !0, this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/product/getRefundDesc?productId=" + this.lineProductInfo.productId + "&date=" + this.lineProductInfo.selectTicket.date).then((function(t) {
                  1 === t.code && (e.refundDetail = t.data)
                }))
              },
              getCommonUsedTouristList: function(e) {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/queryCommonUsedTouristList").then((function(e) {
                  1 === e.code && (t.commonUsedTouristList = e.data[0] ? e.data : [], t.actUserInfo && t.actUserInfo.userList[0] && (t.actUserInfo.userList = [], t.commonUsedTouristList.forEach((function(e) {
                    t.actUserInfo.idList.includes(e.id) && t.actUserInfo.userList.push(e)
                  }))))
                }))
              },
              checkOne: function(e, t) {
                var i = this.priceInfo[this.actIndex].limitAge,
                  n = this.priceInfo[this.actIndex].regularAge,
                  o = this.priceInfo[this.actIndex].ageRange,
                  s = this.priceInfo[this.actIndex].ageType,
                  r = this.priceInfo[this.actIndex].peopleType,
                  u = this.calculateAge(e);
                if (i >= u && s) return !1;
                if (i > u && !s) return !1;
                if (2 == r) {
                  if (n <= u && o) return !1;
                  if (n < u && !o) return !1
                } else if (n < u && o) return !1;
                return !0
              },
              calculateAge: function(e) {
                var t = e.substr(6, 4),
                  i = new Date,
                  n = i.getFullYear() - t;
                return e.substr(10, 4) > 100 * (i.getMonth() + 1) + i.getDate() && (n -= 1), n
              },
              changeTourist: function(e, t) {
                if (this.realCardTypeCodes.includes(e.cardType)) {
                  var i = this.priceInfo[this.actIndex].idList;
                  if (0 != e.cardType || this.checkOne(e.idCarNo, e.name)) {
                    if (i.includes(e.id)) this.priceInfo[this.actIndex].userList = this.priceInfo[this.actIndex].userList.filter((function(t) {
                      return t.id != e.id
                    })), this.priceInfo[this.actIndex].idList = i.filter((function(t) {
                      return t != e.id
                    }));
                    else if (1 == this.allTicNum)(i = []).push(e.id), this.priceInfo[this.actIndex].userList = [], this.priceInfo[this.actIndex].userList.push(e), this.priceInfo[this.actIndex].idList = i;
                    else {
                      if (!(this.allTicNum > this.priceInfo[this.actIndex].userList.length)) return void this.$uni.showToast("只能选择".concat(this.allTicNum, "位游客"));
                      this.priceInfo[this.actIndex].userList.push(e), this.priceInfo[this.actIndex].idList.push(e.id)
                    }
                    this.$forceUpdate()
                  } else this.$uni.showToast("游客".concat(e.name, "不属于该年龄范围"))
                } else this.$uni.showToast("游客证件类型暂不支持")
              },
              computTotalNum: function() {
                var e = this;
                this.userCouponId = "", this.discountAmount = 0, this.showCoupon = !1, this.deductionInfo = {}, this.couponList = [];
                var t = 0;
                this.couponPeople = [], this.priceInfo.forEach((function(i, n) {
                  i.num && (e.actIndex = n, i.amount = e.multiply(i.price, i.num), t = e.add(t, i.amount))
                })), this.totalNum = t
              },
              resettingMoney: function() {
                var e = this;
                this.userCouponId = "", this.discountAmount = 0, this.showCoupon = !1, this.deductionInfo = {}, this.couponList = [];
                var t = 0;
                this.couponPeople = [], this.priceInfo.forEach((function(i, n) {
                  i.num && (e.actIndex = n, i.amount = e.multiply(i.price, i.num), t = e.add(t, i.amount))
                })), this.allAmount = t
              },
              reduceNum: function(e, t) {
                t.num < 1 || (this.allTicNum <= this.itemUseDesc.minBookNum ? this.$uni.showToast("最少需选择".concat(this.itemUseDesc.minBookNum, "张")) : (t.num == t.userList.length && (t.userList.pop(), t.idList.pop()), t.num = t.num - 1, this.allTicNum = this.allTicNum - 1, 0 == this.allTicNum ? (this.totalNum = 0, this.resettingMoney()) : (this.computTotalNum(), this.calcPriceAmount())))
              },
              addNum: function(e, t) {
                var i = 0 == this.itemUseDesc.maxBookNum ? 99999 : this.itemUseDesc.maxBookNum; - 1 != this.surplusStock && (i = Math.min(i, this.surplusStock)), this.allTicNum >= i && -1 != this.surplusStock ? this.$uni.showToast("最多可选择".concat(i, "人")) : (t.num = t.num + 1, this.allTicNum = this.allTicNum + 1, this.computTotalNum(), this.calcPriceAmount())
              },
              add: function(e, t) {
                return e = (0, u.default)(e), t = (0, u.default)(t), e.plus(t).toNumber()
              },
              subtract: function(e, t) {
                return e = (0, u.default)(e), t = (0, u.default)(t), e.minus(t).toNumber()
              },
              multiply: function(e, t) {
                return e = (0, u.default)(e), t = (0, u.default)(t), e.times(t).toNumber()
              },
              toFixedNum: function(e) {
                if (!e) return 0;
                var t = e.toString().split(".");
                return t[1] && t[1].length > 2 ? e.toFixed(2) : e
              },
              calcPriceAmount: function() {
                var e = this,
                  t = 0,
                  i = 0;
                this.couponPeople = [];
                var n = 0,
                  o = 0,
                  s = 0,
                  r = 0,
                  u = 0,
                  a = 0;
                if (this.priceInfo.forEach((function(c, l) {
                    c.num && (1 == c.peopleType ? (n = 1 * c.num, r = c.price) : 3 == c.peopleType ? (o = 1 * c.num, u = c.price) : (s = 1 * c.num, a = c.price), e.actIndex = l, t += 1, c.amount = e.multiply(c.price, c.num), i = e.add(i, c.amount))
                  })), this.typeNum = t, 0 == this.noCouponFlag) {
                  if (n > 0)
                    for (var c = 0; c < n; c++) this.couponPeople.push({
                      peopleType: 1,
                      price: r
                    });
                  if (o > 0)
                    for (var l = 0; l < o; l++) this.couponPeople.push({
                      peopleType: 3,
                      price: u
                    });
                  if (s > 0)
                    for (var d = 0; d < s; d++) this.couponPeople.push({
                      peopleType: 2,
                      price: a
                    });
                  this.getOptimalCoupon(i)
                } else this.allAmount = i
              },
              checkCoupon: function(e) {
                var t = this;
                this.discountAmount = e.quota, this.userCouponId = e.userCouponId;
                var i = 0;
                this.priceInfo.forEach((function(e, n) {
                  e.num && (e.amount = t.multiply(e.price, e.num), i = t.add(i, e.amount))
                })), this.allAmount = this.subtract(i, e.quota), 3 == e.type ? this.deductionInfo = e.deductionInfo : this.deductionInfo = {}, this.showCoupon = !1
              },
              delUser: function(e, t, i) {
                this.priceInfo[e].userList.splice(t, 1), this.priceInfo[e].idList.splice(t, 1)
              },
              chooseUser: function(e, t, i) {
                this.modelType = 0, this.actIndex = e, this.showPassenger = !0, this.actUserInfo = this.$util.deepCopy(i)
              },
              changeUser: function(e, t) {
                if (this.realCardTypeCodes.includes(e.cardType)) {
                  if (this.actUserInfo.idList.includes(e.id)) {
                    var i = this.actUserInfo.idList.indexOf(e.id);
                    this.actUserInfo.userList.splice(i, 1), this.actUserInfo.idList.splice(i, 1)
                  } else this.actUserInfo.userList.length < this.actUserInfo.num ? (this.actUserInfo.userList.push(e), this.actUserInfo.idList.push(e.id)) : 1 == this.actUserInfo.num && 1 == this.actUserInfo.userList.length && (this.actUserInfo.userList = [], this.actUserInfo.idList = [], this.actUserInfo.userList.push(e), this.actUserInfo.idList.push(e.id));
                  this.$forceUpdate()
                } else this.$uni.showToast("游客证件类型暂不支持")
              },
              closePassenger: function() {
                this.modelType ? this.modelType = 0 : this.showPassenger = !1
              },
              touristNumText: function(e, t) {
                return 0 == t ? "选择".concat(e, "位游客") : t < e ? "再选".concat(e - t, "位") : t == e ? "已选满" : void 0
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
              addPassenger: function() {
                this.passenger = {
                  name: "",
                  idCarNo: "",
                  phone: "",
                  id: "",
                  cardType: this.realCardTypeCodes[0] || 0
                }, this.modelType = 1
              },
              editPassenger: function(e) {
                this.modelType = 2, this.showPassenger = !0, this.passenger = {
                  name: e.name,
                  idCarNo: e.idCarNo,
                  phone: e.phone,
                  id: e.id,
                  cardType: e.cardType
                }
              },
              verify: function() {
                return this.$util.checkName(this.passenger.name).code ? this.$util.checkPhone(this.passenger.phone).code ? !!this.$util.checkId(this.passenger.idCarNo, this.passenger.cardType).code || (this.$uni.showToast(this.$util.checkId(this.passenger.idCarNo, this.passenger.cardType).msg), !1) : (this.$uni.showToast(this.$util.checkPhone(this.passenger.phone).msg), !1) : (this.$uni.showToast(this.$util.checkName(this.passenger.name).msg), !1)
              },
              save: function() {
                var t = this;
                if (this.modelType) {
                  if (this.submitState) return;
                  if (!this.verify()) return;
                  if (this.submitState = !0, 1 == this.modelType) this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/commonUsedTourist/queryTouristByIdCardNo?idCarNo=" + this.passenger.idCarNo).then((function(i) {
                    if (1 === i.code)
                      if (console.log(i.data), i.data && i.data[0]) {
                        var n = {
                          id: i.data[0].id,
                          name: t.passenger.name,
                          phone: t.passenger.phone,
                          idCarNo: t.passenger.idCarNo,
                          cardType: t.passenger.cardType
                        };
                        uni.showModal({
                          cancelText: "取消",
                          confirmText: "确认",
                          content: "该证件号信息已存在，请确认是否更新?",
                          success: function(e) {
                            e.confirm ? t.$uniApi.dataRequestNoLoading("POST", "manager/app/v1/commonUsedTourist/updateCommonUsedTourist", n).then((function(e) {
                              1 === e.code ? t.closeAdd() : (t.$uni.showToast(e.msg), t.submitState = !1)
                            })) : e.cancel && (t.submitState = !1)
                          }
                        })
                      } else {
                        var o = [];
                        o.push({
                          name: t.passenger.name,
                          phone: t.passenger.phone,
                          idCarNo: t.passenger.idCarNo,
                          cardType: t.passenger.cardType
                        }), t.$uniApi.dataRequestYesLoading("POST", "manager/app/v1/commonUsedTourist/saveCommonUsedTourist?operationType=1", o, "保存中").then((function(e) {
                          1 === e.code ? t.closeAdd() : (t.$uni.showToast(e.msg), t.submitState = !1)
                        }))
                      }
                    else t.$uni.showToast(i.msg), t.submitState = !1
                  }));
                  else {
                    var i = {
                      id: this.passenger.id,
                      name: this.passenger.name,
                      phone: this.passenger.phone,
                      idCarNo: this.passenger.idCarNo,
                      cardType: this.passenger.cardType
                    };
                    this.$uniApi.dataRequestYesLoading("POST", "manager/app/v1/commonUsedTourist/updateCommonUsedTourist", i, "保存中").then((function(e) {
                      1 === e.code ? t.closeAdd() : (t.$uni.showToast(e.msg), t.submitState = !1)
                    }))
                  }
                } else {
                  if (this.check()) return void this.$uni.showToast(this.check());
                  this.actUserInfo.userList = [], this.commonUsedTouristList.forEach((function(e) {
                    t.actUserInfo.idList.includes(e.id) && t.actUserInfo.userList.push(e)
                  })), this.priceInfo[this.actIndex].userList = this.actUserInfo.userList, this.priceInfo[this.actIndex].idList = this.actUserInfo.idList, console.log(this.priceInfo);
                  var n = [];
                  this.priceInfo.forEach((function(e) {
                    n = n.concat(e.idList)
                  })), this.showPassenger = !1
                }
              },
              check: function() {
                var e = this,
                  t = "",
                  i = this.actUserInfo.limitAge,
                  n = this.actUserInfo.regularAge,
                  o = this.actUserInfo.ageRange,
                  s = this.actUserInfo.ageType,
                  r = this.actUserInfo.peopleType;
                return this.actUserInfo.userList.forEach((function(u) {
                  if (null != u.idCarNo) {
                    if (0 == u.cardType) {
                      var a = e.calculateAge(u.idCarNo),
                        c = !0;
                      if (i >= a && s && (c = !1), i > a && !s && (c = !1), 2 == r ? (n <= a && o && (c = !1), n < a && !o && (c = !1)) : n < a && o && (c = !1), !c) return void(t = "游客".concat(u.name, "不属于该年龄范围"))
                    }
                  } else t = "请补充证件信息"
                })), t
              },
              closeAdd: function() {
                this.passenger = {
                  name: "",
                  idCarNo: "",
                  phone: "",
                  id: "",
                  cardType: 0
                }, this.modelType = 0, this.submitState = !1, this.getCommonUsedTouristList()
              },
              submit: function() {
                if (this.contactPerson) {
                  var e = this.residueNum();
                  if ("已选满" == e) {
                    if (!this.$util.checkPhone(this.contactTel).code) return this.$uni.showToast(this.$util.checkPhone(this.contactTel).msg), !1;
                    if (1 == this.typeNum && this.priceInfo[2].userList.length > 0 && !this.lineProductInfo.childrenEscort) return this.$uni.showToast("儿童必须家长陪同"), !1;
                    var t = [];
                    if (this.otherInfoList.length > 0)
                      for (var i in this.otherInfoList) {
                        var n = this.otherInfoList[i];
                        if (!n.val) {
                          var o = 1 == n.type || 2 == n.type ? "请填写" : "请选择";
                          return this.$uni.showToast("".concat(o).concat(n.title)), !1
                        }
                        t.push({
                          title: n.title,
                          content: n.val
                        })
                      }
                    var s = {
                        lineProductId: this.lineProductInfo.productId,
                        lineProductName: this.lineProductInfo.productName,
                        orderAmount: this.allAmount,
                        quantity: this.allTicNum,
                        contactPerson: this.contactPerson,
                        contactTel: this.contactTel,
                        ticketUseDate: this.lineProductInfo.selectTicket.date,
                        userCouponId: -1 == this.userCouponId ? "" : this.userCouponId,
                        deductionInfo: this.deductionInfo ? this.deductionInfo : {},
                        createChannel: 1,
                        orderPeopleList: [],
                        lineOrderOtherInfoDTOList: t
                      },
                      r = [];
                    this.priceInfo.forEach((function(e) {
                      e.userList.forEach((function(t) {
                        r.push({
                          idCard: t.idCarNo,
                          name: t.name,
                          cardType: t.cardType,
                          telephone: t.phone,
                          peopleId: t.memberId || "",
                          peopleType: e.peopleType,
                          price: e.price
                        })
                      }))
                    })), s.orderPeopleList = r, this.createOrder(s)
                  } else this.$uni.showToast("还需选择" + e)
                } else this.$uni.showToast("请填写联系人")
              },
              closeLineing: function(e) {
                this.lineing = !1, this.hasTimeOut = !1, this.repeatCreateOrder && (clearInterval(this.repeatCreateOrder), clearInterval(this.repeatCreateOrder2)), this.repeatCreateOrder = null, this.repeatCreateOrder2 = null, e || this.getInfo(!0)
              },
              timeOutInit: function() {
                var e = this;
                this.hasTimeOut || (this.hasTimeOut = !0, e.repeatCreateOrder2 = setTimeout((function() {
                  e.hasTimeOut && (e.closeLineing(), e.$uni.showToast("很抱歉，您被挤出了队伍，请重新提交"))
                }), 4e4))
              },
              createOrder: function(t) {
                var i = this;
                if (!this.disabledSubmitBtn || this.lineing) {
                  var n = this;
                  !n.hasTimeOut && n.timeOutInit(), this.disabledSubmitBtn = !0, !this.lineing && uni.showLoading({
                    title: "预订中...",
                    mask: !0
                  }), this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/lineOrder/addLineOrder", t, !1).then((function(o) {
                    if (o.msg.includes("火爆") || o.msg.includes("频繁")) return n.lineing = !0, void(n.repeatCreateOrder = setTimeout((function() {
                      n.createOrder(t)
                    }), 2e3));
                    if (1 != o.code) return i.closeLineing(!0), void setTimeout((function() {
                      n.$uni.showToast(o.msg)
                    }), 300);
                    if (i.orderId = o.data, i.closeLineing(!0), 0 != i.allAmount) i.goPay();
                    else {
                      i.$uni.showToast("支付成功");
                      var s = i;
                      uni.requestSubscribeMessage({
                        tmplIds: ["vaaW2n2qCr5GeEy29ndpGgf02U0Ahbd012RdA45Z90A"],
                        success: function(e) {
                          s.sendWxMessage()
                        },
                        fail: function(t) {
                          setTimeout((function() {
                            uni.redirectTo({
                              url: "/subPack/pages/lineOrderDetail/lineOrderDetail?orderId=".concat(s.orderId)
                            })
                          }), 1e3)
                        }
                      })
                    }
                  })).catch((function(e) {})).finally((function() {
                    setTimeout((function() {
                      i.disabledSubmitBtn = !1, uni.hideLoading()
                    }), 1200)
                  }))
                }
              },
              sendWxMessage: function() {
                var t = this,
                  i = {
                    orderId: this.orderId
                  };
                this.$uniApi.dataRequestYesLoading("GET", "order/app/v1/lineOrder/sendWxMessage", i, "加载中..").then((function(i) {
                  uni.redirectTo({
                    url: "/subPack/pages/lineOrderDetail/lineOrderDetail?orderId=".concat(t.orderId)
                  })
                }))
              },
              goPay: function() {
                var t = this;
                uni.showLoading({
                  title: "发起支付..."
                }), this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/order/waitPayToPay", {
                  payChannel: "",
                  orderSource: 5,
                  orderId: this.orderId,
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
                    orderInfo: i.data.tradeNo,
                    success: function(i) {
                      i.resultCode, t.$uni.showToast("支付成功");
                      var n = t;
                      uni.requestSubscribeMessage({
                        tmplIds: ["vaaW2n2qCr5GeEy29ndpGgf02U0Ahbd012RdA45Z90A"],
                        success: function(e) {
                          n.sendWxMessage()
                        },
                        fail: function(t) {
                          uni.redirectTo({
                            url: "/subPack/pages/lineOrderDetail/lineOrderDetail?orderId=".concat(n.orderId)
                          })
                        }
                      }), t.submiting = !1
                    },
                    fail: function(i) {
                      t.submiting = !1, uni.redirectTo({
                        url: "/subPack/pages/lineOrderDetail/lineOrderDetail?orderId=".concat(t.orderId)
                      })
                    }
                  })
                }))
              },
              confirm: function(e, t, i) {
                t.defaultValue = e[0].IndexArr || [0, 0, 0];
                var n = e.map((function(e) {
                  return e.value
                }));
                t.val = n.join("，"), this.otherInfoList[i] = t, this.$forceUpdate()
              },
              getOtherInfo: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/line/product/otherInfo/appList", {
                  productId: this.lineProductInfo.productId
                }).then((function(t) {
                  if (1 === t.code) {
                    var i = t.data || [];
                    i.forEach((function(e) {
                      e.val = "", e.range = [], 3 === e.type && (e.showSelect = !1, e.defaultValue = [0, 0, 0]), 0 === e.type && e.lineProductOtherContentVOList.forEach((function(t) {
                        e.range.push({
                          value: t.key,
                          text: t.key
                        })
                      }))
                    })), e.otherInfoList = i
                  }
                }))
              },
              showSelect: function(e, t) {
                this.selectData = e, this.defaultValue = e.defaultValue, this.otherIndex = t, this.isShowSelect = !0
              },
              handlerChange: function(e, t, i) {
                this.otherInfoList[i].val = e.detail.value.trim(), this.$forceUpdate()
              },
              confirmOrder: function() {
                this.showGroupErr = !1
              },
              chooseCardType: function(e) {
                e != this.passenger.cardType && (this.passenger.idCarNo = ""), this.passenger.cardType = e, this.showCardPop = !1
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.actColor{color:#ff5411}.page-box{background:#f5f5f5;min-height:100vh;width:100%}.page-box .pb{padding:20rpx 20rpx 130rpx}.page-box .pb .order-info{background:#fff;border-radius:20rpx;padding-top:40rpx}.page-box .pb .order-info .title{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:700;line-height:46rpx;margin-bottom:30rpx;padding:0 20rpx;width:100%}.page-box .pb .order-info .info-box{margin-bottom:14rpx;padding:0 20rpx}.page-box .pb .order-info .info-box .info-it{align-items:center;display:-webkit-flex;display:flex;margin-bottom:16rpx}.page-box .pb .order-info .info-box .info-it .icon{height:26rpx;margin-right:20rpx;width:26rpx}.page-box .pb .order-info .info-box .info-it .text{color:rgba(0,0,0,.5);flex:1;font-size:26rpx;line-height:30rpx}.page-box .pb .order-info .tips-box{align-items:center;background:rgba(255,84,17,.1);border-radius:0 0 20rpx 20rpx;color:#ff5411;display:-webkit-flex;display:flex;font-size:24rpx;height:78rpx;justify-content:space-between;padding:0 20rpx;width:100%}.page-box .pb .order-info .tips-box .tips-l{color:#ff5411;font-size:24rpx;width:530rpx}.page-box .pb .order-info .tips-box .tips-l .bookingTimeStr{border-right:1px solid #ff5411;margin-right:10rpx;padding-right:10rpx}.page-box .pb .order-info .tips-box .tips-r{align-items:center;display:-webkit-flex;display:flex}.page-box .pb .order-info .tips-box .tips-r .t{color:#ff5411;font-size:24rpx;margin-right:10rpx}.page-box .pb .order-info .tips-box .tips-r .icon{height:26rpx;width:26rpx}.page-box .pb .num-box{background:#fff;border-radius:20rpx;margin-top:20rpx;padding:10rpx 20rpx 40rpx;width:100%}.page-box .pb .num-box .item{align-items:flex-start;border-bottom:1rpx solid #ededed;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:30rpx;min-height:82rpx;padding-bottom:20rpx;width:100%}.page-box .pb .num-box .item .item-l{padding-top:12rpx;white-space:nowrap}.page-box .pb .num-box .item .item-l .p1{display:-webkit-flex;display:flex;height:40rpx;justify-content:flex-end}.page-box .pb .num-box .item .item-l .p1 .type{color:rgba(0,0,0,.8);font-size:28rpx;font-weight:700;margin-right:10rpx}.page-box .pb .num-box .item .item-l .p1 .t{color:rgba(0,0,0,.5);font-size:22rpx;line-height:26px}.page-box .pb .num-box .item .item-r{align-items:center;display:-webkit-flex;display:flex}.page-box .pb .num-box .item .item-r .price{color:rgba(0,0,0,.8);font-size:30rpx;font-weight:700;line-height:42rpx}.page-box .pb .num-box .item .item-r .price:first-child{font-size:24rpx}.page-box .pb .num-box .item .item-r .actNum{color:#ff5411}.page-box .pb .num-box .item .item-r .disable{opacity:.45}.page-box .pb .num-box .item .item-r .select-box{color:#000;display:-webkit-flex;display:flex;font-size:28rpx;font-weight:700;height:62rpx;justify-content:space-between;line-height:62rpx;margin-left:20rpx;width:220rpx}.page-box .pb .num-box .item .item-r .select-box .sb-it{background:rgba(0,0,0,.05);border-radius:6rpx;height:62rpx;text-align:center;width:60rpx}.page-box .pb .num-box .p2{color:#ff5411;font-size:24rpx;line-height:70rpx}.page-box .pb .tourists-box{background:#fff;border-radius:20rpx;margin-top:20rpx;padding:40rpx 20rpx 0;width:100%}.page-box .pb .tourists-box .title-box{align-items:flex-end;display:-webkit-flex;display:flex;height:42rpx;margin-bottom:33rpx}.page-box .pb .tourists-box .title-box .title{color:#333;font-size:32rpx;font-weight:700;margin-right:30rpx}.page-box .pb .tourists-box .title-box .sub{color:#333;font-size:24rpx;line-height:34rpx}.page-box .pb .tourists-box .multi{padding-bottom:1rpx}.page-box .pb .tourists-box .multi .m-class .mc-info{align-items:center;background:#f5f5f5;border-radius:10rpx;display:-webkit-flex;display:flex;height:60rpx;justify-content:space-between;margin-bottom:40rpx;padding:0 20rpx;width:670rpx}.page-box .pb .tourists-box .multi .m-class .mc-info .mc-info-l{color:rgba(0,0,0,.8);font-size:28rpx}.page-box .pb .tourists-box .multi .m-class .mc-info .mc-info-r{color:rgba(0,0,0,.8);font-size:26rpx}.page-box .pb .tourists-box .multi .m-class .m-user-box .mu-item{align-items:center;display:-webkit-flex;display:flex;margin-bottom:40rpx}.page-box .pb .tourists-box .multi .m-class .m-user-box .mu-item .icon{height:30rpx;margin-right:20rpx;width:30rpx}.page-box .pb .tourists-box .multi .m-class .m-user-box .mu-item .it-info{align-items:center;display:-webkit-flex;display:flex;flex:1;height:90rpx;justify-content:space-between;padding-right:20rpx}.page-box .pb .tourists-box .multi .m-class .m-user-box .mu-item .it-info .it-flex .name{color:rgba(0,0,0,.8);font-size:28rpx;height:40rpx;line-height:48rpx}.page-box .pb .tourists-box .multi .m-class .m-user-box .mu-item .it-info .it-flex .card{color:rgba(0,0,0,.8);font-size:26rpx;height:40rpx;line-height:40rpx;margin-top:10rpx}.page-box .pb .tourists-box .multi .m-class .m-user-box .mu-item .it-info .u-item-r{height:30rpx;width:30rpx}.page-box .pb .tourists-box .multi .m-class .m-user-box .mu-add{align-items:center;display:-webkit-flex;display:flex;margin-bottom:40rpx}.page-box .pb .tourists-box .multi .m-class .m-user-box .mu-add .icon{height:30rpx;margin-right:20rpx;width:30rpx}.page-box .pb .tourists-box .multi .m-class .m-user-box .mu-add .add-tip{color:rgba(0,0,0,.5);font-size:26rpx;line-height:40rpx}.page-box .pb .tourists-box .single .passenger-box{margin-bottom:20rpx;white-space:nowrap;width:670rpx}.page-box .pb .tourists-box .single .passenger-box .user{border:1rpx solid #bbb;border-radius:10rpx;box-sizing:border-box;color:#555;display:inline-block;font-size:26rpx;height:60rpx;line-height:60rpx;margin-right:20rpx;padding:0 20rpx}.page-box .pb .tourists-box .single .passenger-box .user:nth-last-child(2){margin-right:0}.page-box .pb .tourists-box .single .passenger-box .active{background:rgba(255,84,17,.1);border:1rpx solid #ff5411;box-shadow:0 4rpx 0 0 rgba(255,84,17,.1);position:relative}.page-box .pb .tourists-box .single .passenger-box .active::after{background:url('https://eshopfile.zhiyousx.com/2023092011324955710.png');background-repeat:no-repeat;background-size:100% 100%;bottom:0;content:"";height:18rpx;position:absolute;right:0;width:18rpx}.page-box .pb .tourists-box .single .passenger-box .user-but{background-color:#fff;color:#333;display:inline-block;font-size:26rpx;height:100%;line-height:62rpx;position:-webkit-sticky;position:sticky;right:0;text-align:center;width:240rpx}.page-box .pb .tourists-box .single .passenger-box .user-but .but{border:1rpx solid #bbb;border-radius:10rpx;height:62rpx;margin-left:20rpx;width:220rpx}.page-box .pb .tourists-box .single .user-item{border-bottom:1px solid rgba(0,0,0,.05);justify-content:space-between;margin-top:40rpx;padding-bottom:25rpx}.page-box .pb .tourists-box .single .user-item .u-item-l,.page-box .pb .tourists-box .single .user-item{align-items:center;display:-webkit-flex;display:flex}.page-box .pb .tourists-box .single .user-item .u-item-l .icon{height:40rpx;margin-right:30rpx;width:40rpx}.page-box .pb .tourists-box .single .user-item .u-item-l .info{height:98rpx}.page-box .pb .tourists-box .single .user-item .u-item-l .info .name{color:#333;font-size:32rpx;height:48rpx;line-height:48rpx}.page-box .pb .tourists-box .single .user-item .u-item-l .info .card{color:#777;font-size:26rpx;height:40rpx;line-height:40rpx;margin-top:10rpx}.page-box .pb .tourists-box .single .user-item .u-item-r{height:30rpx;width:30rpx}.page-box .pb .contact-box{background:#fff;border-radius:20rpx;margin-top:20rpx;padding:40rpx 20rpx;width:100%}.page-box .pb .contact-box .title{color:#333;font-size:32rpx;font-weight:700;line-height:45rpx;margin-bottom:30rpx}.page-box .pb .contact-box .row-it{align-items:center;border-bottom:1rpx solid rgba(0,0,0,.08);display:-webkit-flex;display:flex;height:108rpx;width:670rpx}.page-box .pb .contact-box .row-it .label{height:100%;line-height:108rpx;width:150rpx}.page-box .pb .contact-box .row-it input{border:none;font-size:28rpx}.page-box .pb .other-box{background:#fff;border-radius:20rpx;margin-top:20rpx;padding:40rpx 20rpx;width:100%}.page-box .pb .other-box .title{color:#333;font-size:32rpx;font-weight:700;line-height:45rpx;margin-bottom:30rpx}.page-box .pb .other-box .row-it{border-bottom:1rpx solid rgba(0,0,0,.08);height:auto;width:670rpx}.page-box .pb .other-box .row-it .row-it-box{align-items:flex-start;display:-webkit-flex;display:flex;justify-content:space-between;width:100%}.page-box .pb .other-box .row-it .row-it-box .label{height:auto;line-height:48rpx;padding:30rpx 0;width:120rpx;word-break:break-all}.page-box .pb .other-box .row-it .row-it-box .val{padding:34rpx 0 30rpx;width:520rpx}.page-box .pb .other-box .row-it .row-it-box .val1{padding-top:20rpx;width:520rpx}.page-box .pb .other-box .row-it .row-it-box .val2{padding:36rpx 0 30rpx;width:520rpx}.page-box .pb .other-box .row-it .row-it-box .val2 .textareas{text-align:justify;width:520rpx}.page-box .pb .other-box .row-it .row-it-box input{border:none;font-size:28rpx}.page-box .pb .other-box .row-it .row-it-box .val-box{display:-webkit-flex;display:flex;justify-content:flex-end}.page-box .pb .other-box .row-it .tips{color:rgba(0,0,0,.5);font-size:22rpx;line-height:26rpx;margin:-10rpx 0 30rpx;word-break:break-all}.page-box .pb .couponBox{align-items:center;background:#fff;border-radius:20rpx;height:100rpx;justify-content:space-between;margin-top:20rpx;padding:0 30rpx;width:100%}.page-box .pb .couponBox .cb1,.page-box .pb .couponBox{display:-webkit-flex;display:flex;flex-direction:row}.page-box .pb .couponBox .cb1 .cb1-1{color:#2a2a2a;font-family:Source Han Sans CN;font-size:30rpx;font-weight:500;margin-right:20rpx}.page-box .pb .couponBox .cb1 .cb1-2{border:2rpx solid #f15252;border-radius:20rpx;color:#f15252;font-family:Source Han Sans CN;font-size:20rpx;font-weight:400;height:30rpx;line-height:26rpx;margin-top:6rpx;padding:0 8rpx}.page-box .pb .couponBox .cb2{align-items:center;display:-webkit-flex;display:flex;flex-direction:row}.page-box .pb .couponBox .cb2 .cb2-1{color:#f15252;font-family:Source Han Sans CN;font-size:36rpx;font-weight:400;margin-right:25rpx}.page-box .pb .couponBox .cb2 .cb2-2{color:#b6b6b6;font-family:Source Han Sans CN;font-size:26rpx;font-weight:400;margin-right:25rpx}.page-box .pb .couponBox .cb2 .cb2-3{color:#f15252;font-size:26rpx;font-weight:400;margin-right:25rpx}.page-box .pb .firstTop{z-index:200!important}.page-box .pb .footer-box{background:#fff;bottom:0;box-shadow:0-1rpx 0 0 rgba(0,0,0,.25);height:100rpx;justify-content:space-between;left:0;padding:0 30rpx;position:fixed;width:750rpx;z-index:12100}.page-box .pb .footer-box .amount-info,.page-box .pb .footer-box{align-items:center;display:-webkit-flex;display:flex}.page-box .pb .footer-box .amount-info .amount-box{margin-right:40rpx;min-width:150rpx}.page-box .pb .footer-box .amount-info .amount-box .price .p-it{display:-webkit-flex;display:flex;height:42rpx}.page-box .pb .footer-box .amount-info .amount-box .price .p-it .name{color:#333;font-size:26rpx;line-height:42rpx;margin-right:4rpx}.page-box .pb .footer-box .amount-info .amount-box .price .p-it .num{color:#222;font-size:30rpx;font-weight:700;line-height:42rpx}.page-box .pb .footer-box .amount-info .amount-box .price .p-it .actColor,.page-box .pb .footer-box .amount-info .amount-box .price .p-it .pt{color:#ff5411}.page-box .pb .footer-box .amount-info .amount-box .price .p-it-last{margin-top:10rpx}.page-box .pb .footer-box .amount-info .res{align-items:center;color:#ff5411;display:-webkit-flex;display:flex;font-size:24rpx;height:100rpx;line-height:100rpx;margin-right:10rpx}.page-box .pb .footer-box .next-btn{background:linear-gradient(107deg,#fc4a9b,#ff5413);border-radius:40rpx;color:#fff;font-size:30rpx;font-weight:700;height:80rpx;line-height:80rpx;text-align:center;width:368rpx}.page-box .detailBox{background:#fff;margin-bottom:130rpx;min-height:500rpx;padding:40rpx;width:750rpx}.page-box .detailBox .title{color:#333;font-size:36rpx;line-height:54rpx}.page-box .detailBox .content{border-bottom:1rpx solid #e5e5e5;margin-top:50rpx;padding-bottom:20rpx}.page-box .detailBox .content .item{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:30rpx}.page-box .detailBox .content .item .t1{color:rgba(0,0,0,.8);font-size:28rpx}.page-box .detailBox .content .item .t2{color:rgba(0,0,0,.5);font-size:24rpx;margin-left:14rpx}.page-box .detailBox .order-detail{margin-top:50rpx}.page-box .detailBox .order-detail .od-item{align-items:center;color:#333;display:-webkit-flex;display:flex;font-size:28rpx;justify-content:space-between;margin-top:30rpx}.page-box .detailBox .order-detail .color1 text{color:#ff5411}.page-box .detailBox .order-detail .color2 text{color:#222;font-size:36rpx}.page-box .couponcardBox{height:720rpx;padding:0 40rpx}.page-box .couponcardBox .title{color:#333;font-size:32rpx;margin:42rpx 0 35rpx}.page-box .couponcardBox .coupon-list{height:521rpx;margin-bottom:51rpx}.page-box .couponcardBox .coupon-list .coupon-item{display:-webkit-flex;display:flex;flex-direction:column}.page-box .couponcardBox .coupon-list .coupon-item .box{background-color:#fff;border-radius:20rpx;box-shadow:0rpx 4rpx 10rpx 0rpx rgba(0,0,0,.08);display:-webkit-flex;display:flex;margin-bottom:22rpx}.page-box .couponcardBox .coupon-list .coupon-item .box .left{align-items:center;background:url('https://eshopfile.zhiyousx.com/170917882630626369.png')no-repeat;background-size:100% 100%;display:-webkit-flex;display:flex;flex-direction:column;height:200rpx;justify-content:center;width:233rpx}.page-box .couponcardBox .coupon-list .coupon-item .box .left .ceng1{display:-webkit-flex;display:flex;height:87rpx;line-height:87rpx}.page-box .couponcardBox .coupon-list .coupon-item .box .left .ceng1 .yang{color:#ff5411;font-size:40rpx;font-weight:400}.page-box .couponcardBox .coupon-list .coupon-item .box .left .ceng1 .money{color:#ff5411;font-size:50rpx;font-weight:400}.page-box .couponcardBox .coupon-list .coupon-item .box .left .ceng2{color:rgba(0,0,0,.8);font-size:24rpx;font-weight:400;line-height:28rpx;margin-bottom:10rpx}.page-box .couponcardBox .coupon-list .coupon-item .box .right{background:#fff;border:1rpx solid #d3d3d3;border-left:none;border-radius:0 20rpx 20rpx 0;display:-webkit-flex;display:flex;height:200rpx;justify-content:space-between;padding:30rpx 20rpx 25rpx 0;position:relative;width:441rpx}.page-box .couponcardBox .coupon-list .coupon-item .box .right .it1{display:-webkit-flex;display:flex;flex-direction:column}.page-box .couponcardBox .coupon-list .coupon-item .box .right .it1 .name{-webkit-box-orient:vertical;-webkit-line-clamp:1;color:rgba(0,0,0,.8);display:-webkit-box;font-size:28rpx;font-weight:600;line-height:33rpx;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.page-box .couponcardBox .coupon-list .coupon-item .box .right .it1 .date{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400;line-height:28rpx;margin:20rpx 0 17rpx}.page-box .couponcardBox .coupon-list .coupon-item .box .right .it1 .po{bottom:10rpx;position:absolute}.page-box .couponcardBox .coupon-list .coupon-item .box .right .it1 .detail{-webkit-box-orient:vertical;-webkit-line-clamp:1;color:rgba(0,0,0,.3);display:-webkit-box;font-size:24rpx;font-weight:400;line-height:28rpx;margin-top:18rpx;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.page-box .couponcardBox .coupon-list .coupon-item .box .right .chooseItem{padding-top:40rpx}.page-box .couponcardBox .coupon-list .coupon-item .box .right .chooseItem .choose-style{height:44rpx;width:44rpx}.page-box .couponcardBox .coupon-list .coupon-item .box .right .detail{display:-webkit-flex;display:flex}.page-box .couponcardBox .coupon-list .coupon-item .box .right .detail .look{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400;line-height:28rpx;margin-right:10rpx}.page-box .couponcardBox .noUse{display:-webkit-flex;display:flex;height:100rpx;justify-content:space-between}.page-box .couponcardBox .noUse .wenzi{color:#333;font-size:32rpx;font-weight:400;line-height:38rpx}.page-box .couponcardBox .noUse .choose-style{height:44rpx;width:44rpx}.page-box .btn{border-top:1rpx solid #d3d3d3;display:-webkit-flex;display:flex;justify-content:center;padding:10rpx 0 30rpx;width:750rpx}.page-box .btn .sure{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:40rpx 40rpx 40rpx 40rpx;color:#fff;font-size:30rpx;font-weight:400;height:80rpx;line-height:80rpx;text-align:center;width:650rpx}.page-box .model-box{padding:40rpx}.page-box .model-box .model-title{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.page-box .model-box .model-title .model-name{align-items:center;color:#333;display:-webkit-flex;display:flex;font-size:36rpx}.page-box .model-box .model-title .model-name .num{color:#333;display:-webkit-flex;display:flex;font-size:26rpx;margin-left:20rpx}.page-box .model-box .model-title .model-name .num .activeNum{color:#ff5411}.page-box .model-box .model-title .model-name .num .spanCenter{align-items:center;display:-webkit-inline-flex;display:inline-flex;height:34rpx}.page-box .model-box .model-title .close{height:40rpx;width:40rpx}.page-box .model-box .addContacts{align-items:center;border:1rpx solid #ff5411;border-radius:40rpx;color:#ff5411;display:-webkit-flex;display:flex;font-size:30rpx;height:80rpx;justify-content:center;margin-top:40rpx;width:100%}.page-box .model-box .passenger-box-popup{height:615rpx;margin-bottom:20rpx;margin-top:18rpx}.page-box .model-box .passenger-box-popup .user-box{border-bottom:1px solid #eee;height:230rpx;justify-content:space-between;width:670rpx}.page-box .model-box .passenger-box-popup .user-box .info-box,.page-box .model-box .passenger-box-popup .user-box{align-items:center;display:-webkit-flex;display:flex}.page-box .model-box .passenger-box-popup .user-box .info-box .user-change{background-size:100% 100%;height:44rpx;margin-right:40rpx;width:44rpx}.page-box .model-box .passenger-box-popup .user-box .info-box .user-info .tips{color:red;font-size:24rpx}.page-box .model-box .passenger-box-popup .user-box .info-box .user-info .name{color:#333;font-size:32rpx;line-height:48rpx;margin-bottom:4rpx}.page-box .model-box .passenger-box-popup .user-box .info-box .user-info .u-phone{align-items:center;color:#777;display:-webkit-flex;display:flex;font-size:26rpx;line-height:39rpx;margin-top:10rpx}.page-box .model-box .passenger-box-popup .user-box .info-box .user-info .u-phone .u-phone1{color:#777;width:130rpx}.page-box .model-box .passenger-box-popup .user-box .info-box .user-info .u-phone .u-phone2{color:#777}.page-box .model-box .passenger-box-popup .user-box .user_edit{height:40rpx;width:40rpx}.page-box .model-box .content .row-box{align-items:center;border-bottom:1px solid #eee;display:-webkit-flex;display:flex;font-size:30rpx;height:105rpx;line-height:45rpx;width:100%}.page-box .model-box .content .row-box .label{color:rgba(0,0,0,.6);min-width:158rpx;width:158rpx}.page-box .model-box .content .row-box .value{color:rgba(0,0,0,.8);width:500rpx}.page-box .model-box .content .row-box .select{align-items:center;color:#333;display:-webkit-flex;display:flex}.page-box .model-box .content .row-box-count{margin-bottom:65rpx}.page-box .model-box .save{align-items:center;background:linear-gradient(90deg,#fc4a9b,#ff5413);border-radius:40rpx;color:#fff;display:-webkit-flex;display:flex;font-weight:700;height:80rpx;justify-content:center;width:100%}.page-box .service-box{background:#fff;max-height:1100rpx;min-height:600rpx;padding:40rpx 40rpx 0;width:750rpx}.page-box .service-box .title{color:#333;font-size:36rpx}.page-box .service-box .content-service{margin-bottom:130rpx;margin-top:30rpx;max-height:970rpx}.page-box .service-box .content-service .illustrate{margin-top:10rpx}.page-box .service-box .content-service .illustrate .title{color:rgba(0,0,0,.8);font-size:32rpx;margin-bottom:20rpx;width:100%}.page-box .service-box .content-service .illustrate .title .tip{color:#ff5411;font-size:24rpx;margin-left:10rpx}.page-box .table{margin-bottom:20rpx;width:100%}.page-box .table .th{background:rgba(255,84,17,.1);display:-webkit-flex;display:flex;width:100%}.page-box .table .th .td{align-items:center;border-bottom:1rpx solid rgba(0,0,0,.1);border-right:1rpx solid rgba(0,0,0,.1);color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;font-size:26rpx;font-weight:700;height:60rpx;justify-content:center;width:100%;word-break:break-all}.page-box .table .th .td:nth-last-child(1){border-right:none}.page-box .table .tr{background:#fafafa;display:-webkit-flex;display:flex;width:100%}.page-box .table .tr .td{align-items:center;border-bottom:1rpx solid rgba(0,0,0,.1);border-right:1rpx solid rgba(0,0,0,.1);color:rgba(0,0,0,.7);display:-webkit-flex;display:flex;font-size:26rpx;min-height:60rpx;padding:10rpx 30rpx;width:512rpx;word-break:break-all}.page-box .table .tr .bold{align-items:center;color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;font-weight:700;padding-right:0;width:160rpx}.page-box .table .tr .center{align-items:center;display:-webkit-flex;display:flex;justify-content:center;padding:10rpx}.errBox{background:#fff;height:auto;padding:40rpx 40rpx 120rpx;position:relative;width:640rpx}.errBox .name{color:#333;font-size:32rpx;line-height:48rpx;text-align:center;width:100%}.errBox .err-info{margin-top:30rpx}.errBox .err-info .err-box .err-item{display:-webkit-flex;display:flex;font-size:30rpx;line-height:35rpx;margin-bottom:10rpx}.errBox .but-popup{background:linear-gradient(90deg,#fc4a9b,#ff5413);border-radius:50rpx;bottom:20rpx;color:#fff;font-size:26rpx;height:80rpx;left:40rpx;line-height:80rpx;position:absolute;text-align:center;width:560rpx}.dis{opacity:.5}
</style>
