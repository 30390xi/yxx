<template>
<view class="">
    <order-nav :active="2" class=""></order-nav>
    <view class="box">
        <view class="order-item" v-if="orderingInfo.spotList&&orderingInfo.spotList[0]" :key="index" v-for="(spot, index) in $root.l2">
            <view class="order-info">
                <image class="order-img" mode="aspectFill" :src="spot.mainPicture"></image>
                <view class="order-detail">
                    <view class="order-title">{{spot.destinationName}}</view>
                    <view class="order-time">{{'使用日期:'+spot.m0}}</view>
                    <view class="price">{{'小计：￥'+spot.spotAmount}}</view>
                </view>
            </view>
            <view class="" :key="num" v-for="(item, num) in spot.l1">
                <view class="order-vote">
                    <view class="vote-remark">
                        <view class="name _p">{{ item.itemTitle }}<label class="_span" v-if="item.selectedtime.time">{{' '+item.selectedtime.time}}</label>
                        </view>
                        <view class="yijian" v-if="item.backAmount">{{'已减'+item.backAmount+'元'}}</view>
                    </view>
                    <view class="number">{{'x '+item.ticketNum}}</view>
                </view>
                <view class="touristList-box" v-if="item.touristList&&item.touristList[0]">
                    <view class="touristList">
                        <view class="tourist-item" :key="p" v-for="(o, p) in item.l0">
                            <view class="closeBox">
                                <view class="close">
                                    <image class="" src="https://eshopfile.zhiyousx.com/169440568137929061.png"></image>
                                </view>
                            </view>
                            <view class="tourist-info">
                                <view class="name">{{o.name}}</view>
                                <view class="cardid" v-if="o.idCarNo&&item.isCard">{{'证件号：'+o.m1}}</view>
                            </view>
                        </view>
                    </view>
                    <image mode class="user-edit" src="https://eshopfile.zhiyousx.com/169415863023853994.png"></image>
                </view>
                <view class="tourist" v-if="item.g0">
                    <view class="addicon">
                        <image class="" mode="aspectFill" src="https://eshopfile.zhiyousx.com/169440546467537896.png"></image>
                    </view>
                    <view class="remark" v-if="!item.g1">{{'需'+(commonUsedTouristList&&commonUsedTouristList[0]?'选择':'填写')+item.touristNum+'位游客信息'}}</view>
                    <block v-else>
                        <view class="remark" v-if="item.g2<item.touristNum">{{'还需选择'+item.touristNum-item.g3+'位游客信息'}}</view>
                    </block>
                </view>
            </view>
        </view>
        <view class="tourist-phone order-item">
            <view class="title">联系手机</view>
            <view class="row-box">
                <image class="img" src="https://eshopfile.zhiyousx.com/169353341821059000.png"></image>
                <view class="value">
                    <u-input :border="border" class="" placeholder="用于接收确认短信" placeholderStyle="color:#777" type="number" :value="touristPhone" @input="touristPhone = $event"></u-input>
                </view>
            </view>
        </view>
        <view class="feeInfo order-item" v-if="orderingInfo.lineId">
            <view class="title">费用明细</view>
            <view class="row-box">
                <view class="lable">订单总额：</view>
                <view class="value">{{'￥'+orderingInfo.orderAmount}}</view>
            </view>
            <view class="preferential row-box" v-if="orderingInfo.reduction">
                <view class="lable">多买优惠：</view>
                <view class="value">{{'-￥'+orderingInfo.reduction}}</view>
            </view>
            <view class="payment row-box">
                <view class="lable">应付金额：</view>
                <view class="value">{{'￥'+orderingInfo.allAmount}}</view>
            </view>
        </view>
        <u-popup borderRadius="20" class="" mode="bottom" :value="showPassenger" :vueSlots="['default']" @input="showPassenger = $event">
            <view class="model-box">
                <view class="model-title">
                    <view class="model-name" v-if="!modelType">{{ $root.m2 }}</view>
                    <view class="model-name" v-if="modelType==1">新增游客</view>
                    <view class="model-name" v-if="modelType==2">编辑游客</view>
                    <image class="close" src="https://eshopfile.zhiyousx.com/169345070139905990.png" @click="closePassenger()"></image>
                </view>
                <view class="addContacts" v-if="!modelType" @click="addPassenger($event)">+ 新增联系人</view>
                <view class="" v-if="!modelType">
                    <scroll-view class="passenger-box-popup" scrollY="true">
                        <view class="user-box" :key="index" v-for="(item, index) in $root.l3">
                            <view class="info-box">
                                <image mode class="user-change" src="https://eshopfile.zhiyousx.com/169345574106635019.png" v-if="item.m3"></image>
                                <image mode class="user-change" src="https://eshopfile.zhiyousx.com/169345576395787642.png" v-else></image>
                                <view :class="['user-info','',!item.g4?'dis':'']">
                                    <view class="name">{{item.name}}</view>
                                    <view class="u-phone" v-if="item.phone">
                                        <view class="u-phone1">手机号</view>
                                        <view class="u-phone2">{{ item.m4 }}</view>
                                    </view>
                                    <view class="u-phone" v-if="item.idCarNo">
                                        <view class="u-phone1">证件类型</view>
                                        <view class="u-phone2">{{ item.f0 }}</view>
                                    </view>
                                    <view class="u-phone" v-if="item.idCarNo">
                                        <view class="u-phone1">证件号</view>
                                        <view class="u-phone2">{{ item.m5 }}</view>
                                    </view>
                                    <view class="tips" v-if="activeIsCard&&!item.idCarNo">请补充证件信息</view>
                                </view>
                            </view>
                            <image mode class="user_edit" src="https://eshopfile.zhiyousx.com/169415900438889645.png"></image>
                        </view>
                    </scroll-view>
                </view>
                <view class="content" v-else>
                    <view class="row-box bet" @click="e0($event)">
                        <view class="label">证件类型</view>
                        <view class="select">{{ $root.f1 }}<u-icon class="" color="#333333" name="arrow-right" size="20" style="margin-left:10rpx;"></u-icon>
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
        <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="showDetail" :vueSlots="['default']" @input="showDetail = $event">
            <view class="detailBox">
                <view class="title">价格明细</view>
                <scroll-view class="content" :scrollY="true">
                    <view class="item" :key="index" v-for="(item, index) in $root.l4">
                        <view class="tic-title">{{ item.destinationName }}</view>
                        <view class="use-time">{{'使用日期：'+item.m6+''}}</view>
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
                            <text class="">{{'￥'+orderingInfo.orderAmount}}</text>
                        </view>
                        <view class="od-item color1" v-if="orderingInfo.reduction">
                            <text class="">多买优惠：</text>
                            <text class="">{{'-￥'+orderingInfo.reduction}}</text>
                        </view>
                        <view class="od-item color2">
                            <text class="color2">应付金额：</text>
                            <text class="">{{'￥'+orderingInfo.allAmount}}</text>
                        </view>
                    </view>
                </scroll-view>
            </view>
        </u-popup>
        <view class="btn-box" :style="'z-index:'+(showPassenger?100:1000)+';'+'padding-bottom:'+safeAreaBottom+'rpx'+';'+'height:'+(130+safeAreaBottom)+'rpx'+';'">
            <view class="amount-info">
                <view class="amount-box">
                    <view class="price">
                        <view class="p-it">
                            <view class="name">小计</view>
                            <view class="num">{{'￥'+(orderingInfo.allAmount||'')+''}}</view>
                        </view>
                        <view class="p-it reduction" v-if="orderingInfo.reduction">
                            <view class="name pt">共减</view>
                            <view class="num pt">{{'￥'+(orderingInfo.reduction||'')+''}}</view>
                        </view>
                    </view>
                </view>
                <view class="res" @click="e1($event)">明细</view>
                <u-icon class="" color="#FF5411" name="arrow-up" size="22" style="margin-top:-4rpx;" v-if="!showDetail" @click="e2()"></u-icon>
                <u-icon class="" color="#FF5411" name="arrow-down" size="22" style="margin-top:-4rpx;" v-else @click="e3()"></u-icon>
            </view>
            <button class="pay" :disabled="disabledSubmitBtn" @click="submit()">立即支付</button>
        </view>
    </view>
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
              return {
                orderId: "",
                submiting: !1,
                showPassenger: !1,
                addTouristNum: 0,
                commonUsedTouristList: null,
                activeTouristId: [],
                activeTouristList: [],
                modelType: 0,
                passenger: {
                  name: "",
                  idCarNo: "",
                  phone: "",
                  id: ""
                },
                submitState: !1,
                touristPhone: "",
                disabledSubmitBtn: !1,
                lineing: !1,
                hasTimeOut: !1,
                repeatCreateOrder: null,
                repeatCreateOrder2: null,
                groupErrList: [],
                showGroupErr: !1,
                orderingInfo: {},
                activeSpot: 0,
                activeItem: 0,
                activeCard: 0,
                errJump: !1,
                showDetail: !1,
                activeIsCard: !0,
                editType: 0,
                safeAreaBottom: 0,
                showCardPop: !1,
                realCardTypeCodes: [],
                border: !1
              }
            },
            onReady: function() {},
            onLoad: function(t) {
              uni.getStorageSync("lineOrderInfo") && (this.orderingInfo = uni.getStorageSync("lineOrderInfo"), this.orderingInfo.spotList.forEach((function(e) {
                e.itemList.forEach((function(e) {
                  e.touristList = [], e.touristId = [], e.realCardTypeCodes = e.itemUseDesc.realCardTypeCodes.split(","), 0 == e.itemUseDesc.touristInfoType ? (e.touristNum = 1, e.isCard = !1, e.realCardTypeCodes = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]) : 1 == e.itemUseDesc.touristInfoType ? (e.touristNum = 1, e.isCard = !0) : (e.touristNum = e.ticketNum, e.isCard = !0)
                }))
              }))), this.safeAreaBottom = uni.getStorageSync("safeAreaBottom") ? uni.getStorageSync("safeAreaBottom") : 0
            },
            onUnload: function() {},
            onShow: function() {
              this.getCommonUsedTouristList()
            },
            methods: {
              setDataInfos: function(e) {
                var t = this;
                console.log(e, "参数--------"), e ? (this.passenger.name = e.name, this.passenger.idCarNo = e.idCarNo) : setTimeout((function() {
                  t.$uni.showToast("识别失败，请重新识别或手动填写")
                }), 500)
              },
              save: function() {
                var t = this;
                if (this.modelType) {
                  if (this.submitState) return;
                  if (!this.verify()) return;
                  if (this.submitState = !0, 1 == this.modelType) this.$uniApi.dataRequestNoLoading("get", "manager/app/v1/commonUsedTourist/queryTouristByIdCardNo?idCarNo=" + this.passenger.idCarNo).then((function(i) {
                    if (1 === i.code)
                      if (console.log(i.data), i.data && i.data[0]) {
                        var s = {
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
                            e.confirm ? t.$uniApi.dataRequestNoLoading("POST", "manager/app/v1/commonUsedTourist/updateCommonUsedTourist", s).then((function(e) {
                              1 === e.code ? t.closeAdd() : (t.$uni.showToast(e.msg), t.submitState = !1)
                            })) : e.cancel && (t.submitState = !1)
                          }
                        })
                      } else {
                        var r = [];
                        r.push({
                          name: t.passenger.name,
                          phone: t.passenger.phone,
                          idCarNo: t.passenger.idCarNo,
                          cardType: t.passenger.cardType
                        }), t.$uniApi.dataRequestYesLoading("POST", "manager/app/v1/commonUsedTourist/saveCommonUsedTourist?operationType=1", r, "保存中").then((function(e) {
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
                      1 === e.code ? t.editType ? (t.orderingInfo.spotList[t.activeSpot].itemList[t.activeItem].touristList[t.activeCard] = i, t.showPassenger = !1, t.submitState = !1) : t.closeAdd() : (t.$uni.showToast(e.msg), t.submitState = !1)
                    }))
                  }
                } else {
                  this.activeTouristList = [];
                  var s = this.activeTouristId,
                    r = [],
                    o = !0;
                  if (this.commonUsedTouristList.forEach((function(e) {
                      s.includes(e.id) && (t.activeTouristList.push(e), r.push(e.id), e.idCarNo || (o = !1))
                    })), this.activeIsCard && !o) return void this.$uni.showToast("请补充证件信息");
                  this.orderingInfo.spotList[this.activeSpot].itemList[this.activeItem].touristList = this.activeTouristList, this.orderingInfo.spotList[this.activeSpot].itemList[this.activeItem].touristId = r, this.showPassenger = !1
                }
              },
              selectDateStr: function(e) {
                var t = e.split("-"),
                  i = t[1],
                  s = t[2];
                return i = "0" == i.split("")[0] ? i.split("")[1] : i, s = "0" == s.split("")[0] ? s.split("")[1] : s, t[0] + "年" + i + "月" + s + "日"
              },
              touristNumText: function(e, t) {
                return 0 == t ? "选择".concat(e, "位游客") : t < e ? "再选".concat(e - t, "位") : t == e ? "已选满" : void 0
              },
              verify: function() {
                return this.$util.checkName(this.passenger.name).code ? this.$util.checkPhone(this.passenger.phone).code ? !!this.$util.checkId(this.passenger.idCarNo, this.passenger.cardType).code || (this.$uni.showToast(this.$util.checkId(this.passenger.idCarNo, this.passenger.cardType).msg), !1) : (this.$uni.showToast(this.$util.checkPhone(this.passenger.phone).msg), !1) : (this.$uni.showToast(this.$util.checkName(this.passenger.name).msg), !1)
              },
              closeAdd: function() {
                this.passenger = {
                  name: "",
                  idCarNo: "",
                  phone: "",
                  id: "",
                  cardType: this.realCardTypeCodes[0] || 0
                }, this.modelType = 0, this.submitState = !1, this.getCommonUsedTouristList()
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
              closePassenger: function() {
                this.modelType && !this.editType ? this.modelType = 0 : this.showPassenger = !1
              },
              editPassenger: function(e, t, i, s, r) {
                this.editType = t, t && (this.activeSpot = i, this.activeItem = s, this.activeCard = r), this.modelType = 2, this.showPassenger = !0, this.passenger = {
                  name: e.name,
                  idCarNo: e.idCarNo,
                  phone: e.phone,
                  id: e.id,
                  cardType: e.cardType
                }
              },
              changeTourist: function(e, t) {
                if (this.realCardTypeCodes.includes(e.cardType)) {
                  var i = this.activeTouristId;
                  if (i.includes(e.id)) {
                    var s = i.indexOf(e.id);
                    i.splice(s, 1)
                  } else i.length < this.addTouristNum ? i.push(e.id) : 1 == this.addTouristNum && i.length == this.addTouristNum && (i = []).push(e.id);
                  this.activeTouristId = i
                } else this.$uni.showToast("游客证件类型暂不支持")
              },
              inclouds: function(e) {
                return this.activeTouristId.includes(e)
              },
              delTourist: function(e, t, i) {
                this.activeTouristId.splice(e, 1), this.orderingInfo.spotList[t].itemList[i].touristList.splice(e, 1), this.orderingInfo.spotList[t].itemList[i].touristId.splice(e, 1)
              },
              getCommonUsedTouristList: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/queryCommonUsedTouristList").then((function(t) {
                  1 === t.code && (e.commonUsedTouristList = t.data, 0 == e.commonUsedTouristList.length && (e.modelType = 1))
                }))
              },
              addTourist: function(e, t, i, s, r) {
                this.activeIsCard = s, this.modelType = 0, this.showPassenger = !0, this.activeSpot = t, this.activeItem = i, this.activeTouristId = JSON.parse(JSON.stringify(this.orderingInfo.spotList[this.activeSpot].itemList[this.activeItem].touristId)), this.realCardTypeCodes = r, this.getCommonUsedTouristList(), this.addTouristNum = e, console.log(this.realCardTypeCodes)
              },
              closeLineing: function(e) {
                this.lineing = !1, this.hasTimeOut = !1, this.repeatCreateOrder && (clearInterval(this.repeatCreateOrder), clearInterval(this.repeatCreateOrder2)), this.repeatCreateOrder = null, this.repeatCreateOrder2 = null, this.disabledSubmitBtn = !1
              },
              check: function() {
                var e = this,
                  t = !0;
                return this.touristPhone ? this.$util.checkPhone(this.touristPhone).code ? (this.orderingInfo.spotList.forEach((function(i) {
                  i.itemList.forEach((function(i) {
                    if (i.touristId.length < i.touristNum) return e.$uni.showToast("请完善游客信息"), void(t = !1)
                  }))
                })), t) : (this.$uni.showToast(this.$util.checkPhone(this.touristPhone).msg), !1) : (this.$uni.showToast("请填写联系手机"), !1)
              },
              submit: function() {
                if (this.check()) {
                  var e = {
                    lineId: this.orderingInfo.lineId,
                    contactsMobile: this.touristPhone,
                    addTicketOrderDTOList: []
                  };
                  this.orderingInfo.spotList.forEach((function(t) {
                    t.itemList.forEach((function(i) {
                      var s = [];
                      i.touristList.forEach((function(e) {
                        s.push({
                          name: e.name,
                          telephone: e.phone,
                          id: e.id,
                          idCard: e.idCarNo,
                          cardType: e.cardType
                        })
                      })), e.addTicketOrderDTOList.push({
                        itemId: i.itemId,
                        scenicId: t.destinationId,
                        itemName: i.itemTitle,
                        price: i.price,
                        orderAmount: i.amount,
                        returnCashCouponAmount: i.backAmount,
                        quantity: i.ticketNum,
                        ticketUseDate: i.selectedtime.date,
                        groupItemName: i.itemTitle,
                        orderPeopleList: s,
                        ticketUseEndTime: null != i.selectedtime.endTime ? i.selectedtime.endTime : "",
                        ticketUseStartTime: null != i.selectedtime.startTime ? i.selectedtime.startTime : "",
                        seckillItemId: 0 == i.seckillActivity ? i.seckillItemId : ""
                      })
                    }))
                  })), this.createOrder(e)
                }
              },
              createOrder: function(t) {
                var i = this;
                if (!this.disabledSubmitBtn || this.lineing) {
                  var s = this;
                  !s.hasTimeOut && s.timeOutInit(), this.disabledSubmitBtn = !0, !this.lineing && uni.showLoading({
                    title: "预订中..."
                  }), this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/order/lineGroupOrder", t, !1).then((function(r) {
                    if (uni.hideLoading(), r.msg.includes("火爆") || r.msg.includes("频繁")) return s.lineing = !0, void(s.repeatCreateOrder = setTimeout((function() {
                      s.createOrder(t)
                    }), 2e3));
                    if (1 != r.code && !r.data) return i.closeLineing(!0), i.disabledSubmitBtn = !1, void setTimeout((function() {
                      s.$uni.showToast(r.msg)
                    }), 300);
                    if (1 != r.code) {
                      i.closeLineing(!0), i.disabledSubmitBtn = !1;
                      var o = r.data.addTicketOrderDTOList,
                        n = [];
                      for (var a in o) {
                        var u = o[a];
                        if (18031 == u.result.code) {
                          var d = s.errIdCard || [],
                            c = Array.from(new Set(d.concat(u.result.data)));
                          s.errIdCard = c
                        }
                        if (1 != u.result.code) {
                          var l = {
                            msg: u.result.msg,
                            groupItemName: u.groupItemName + "校验失败:"
                          };
                          if ((18022 == u.result.code || 18026 == u.result.code || u.result.msg.includes("库存不足")) && (l = {
                              msg: u.result.msg,
                              groupItemName: u.groupItemName
                            }, 0 == a && 18026 != u.result.code)) return;
                          n.push(l)
                        }
                      }
                      i.groupErrList = n, i.showGroupErr = !0
                    } else {
                      i.orderId = r.data.groupOrderId, i.closeLineing(!0);
                      var h = r.data,
                        p = h.addTicketOrderDTOList,
                        m = [],
                        g = 0;
                      p.forEach((function(e, t) {
                        1 != e.result.code ? (m.push({
                          msg: e.result.msg,
                          groupItemName: e.groupItemName + "下单失败:"
                        }), g++) : m.push({
                          msg: "",
                          groupItemName: e.groupItemName + "下单成功"
                        })
                      })), m.push({
                        groupItemName: "",
                        msg: "成功订单可前往订单列表付款"
                      }), g > 0 ? (i.groupErrList = m, i.showGroupErr = !0, h.successOrderNum > 0 && (i.errJump = !0)) : 0 != i.orderingInfo.orderAmount ? i.goPay() : (i.$uni.showToast("支付成功"), setTimeout((function() {
                        uni.redirectTo({
                          url: "/pages/myorder/myorder?type=0"
                        })
                      }), 1e3))
                    }
                  }))
                }
              },
              timeOutInit: function() {
                var e = this;
                this.hasTimeOut || (this.hasTimeOut = !0, e.repeatCreateOrder2 = setTimeout((function() {
                  e.hasTimeOut && (e.closeLineing(), e.$uni.showToast("很抱歉，您被挤出了队伍，请重新提交"))
                }), 4e4))
              },
              confirmOrder: function() {
                this.showGroupErr = !1, this.errJump && (this.errJump = !1, uni.redirectTo({
                  url: "/pages/myorder/myorder?type=0"
                }))
              },
              jumpOrderPay: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getGroupOrderDetail", {
                  groupOrderId: this.orderId
                }).then((function(i) {
                  if (1 === i.code) {
                    var s = i.data,
                      r = i.data.mainOrder;
                    uni.redirectTo({
                      url: "/subPage/pages/order_pay/order_pay?count=".concat(s.realPayableAmount, "&type=groupTicket&orderId=").concat(r.orderId, "&guideCopywriting=\n\t\t\t\t\t\t&subscribeType=0&isSpecial=").concat(r.isSpecial, "&itemId=").concat(r.itemId)
                    })
                  } else t.$uni.showToast(data.msg)
                }))
              },
              goPay: function() {
                var t, i = this;
                uni.showLoading({
                  title: "发起支付..."
                }), this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/order/groupTicketWaitPayToPay", (t = {
                  payChannel: ""
                }, (0, r.default)(t, "payChannel", "xy_wx_mini"), (0, r.default)(t, "orderSource", 5), (0, r.default)(t, "groupOrderId", this.orderId), (0, r.default)(t, "buyerMemo", ""), (0, r.default)(t, "seriesNumber", uni.getStorageSync("userInfor").openId || uni.getStorageSync("wxopenid")), t), "支付中").then((function(t) {
                  if (1 !== t.code) return uni.hideLoading(), i.submiting = !1, void i.$uni.showToast(t.msg);
                  uni.requestPayment({
                    timeStamp: t.data.timeStamp,
                    nonceStr: t.data.nonceStr,
                    package: "prepay_id=".concat(t.data.prepayid),
                    signType: t.data.signType,
                    paySign: t.data.pay_sign,
                    orderInfo: t.data.tradeNo,
                    success: function(t) {
                      var s = t.resultCode;
                      6001 != s && 4e3 != s && 6002 != s ? (i.jumpOrderPay(), i.$store.dispatch("wxInForm", ["gDlb_Lmm5UjBhe5jnstiOCTi4XfN2KOq9056Be9lDSE"]).then((function(e) {
                        i.jumpOrderPay()
                      })).catch((function(e) {
                        i.jumpOrderPay()
                      })), i.submiting = !1) : uni.redirectTo({
                        url: "/pages/myorder/myorder?type=0"
                      })
                    },
                    fail: function(t) {
                      i.submiting = !1, uni.redirectTo({
                        url: "/pages/myorder/myorder?type=0"
                      })
                    }
                  })
                }))
              },
              chooseCardType: function(e) {
                e != this.passenger.cardType && (this.passenger.idCarNo = ""), this.passenger.cardType = e, this.showCardPop = !1
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.box{background:#f5f5f5;padding:20rpx}.box .fo-pb{padding:0 20rpx;width:750rpx}.box .order-item{background:#fff;border-radius:20rpx;margin-top:20rpx;padding:40rpx 20rpx;width:100%}.box .order-item .order-info{display:-webkit-flex;display:flex}.box .order-item .order-info .order-img{border-radius:20rpx;height:160rpx;margin-right:30rpx;width:160rpx}.box .order-item .order-info .order-detail{position:relative;width:480rpx}.box .order-item .order-info .order-detail .order-title{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:700}.box .order-item .order-info .order-detail .order-time{color:rgba(0,0,0,.5);font-size:26rpx;margin-top:6rpx}.box .order-item .order-info .order-detail .price{bottom:0;color:#ff5411;font-size:28rpx;margin-bottom:0rpx;position:absolute}.box .order-item .order-vote{align-items:center;background:#f5f5f5;border-radius:10rpx;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:40rpx;padding:10rpx 20rpx;width:100%}.box .order-item .order-vote .vote-remark{align-items:center;display:-webkit-flex;display:flex;width:550rpx}.box .order-item .order-vote .vote-remark .name{color:rgba(0,0,0,.8);font-size:28rpx}.box .order-item .order-vote .vote-remark .yijian{border:1rpx solid #ff5411;border-radius:4rpx;color:#ff5411;font-size:24rpx;margin-left:10rpx;padding:2rpx 4rpx;white-space:nowrap}.box .order-item .order-vote .number{color:rgba(0,0,0,.8);font-size:26rpx}.box .order-item .tourist{align-items:center;display:-webkit-flex;display:flex;height:40rpx;margin-top:40rpx}.box .order-item .tourist .addicon{height:30rpx;width:30rpx}.box .order-item .tourist .addicon image{height:100%;width:100%}.box .order-item .tourist .remark{color:rgba(0,0,0,.5);font-size:26rpx;margin-left:20rpx}.box .order-item .touristList-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:30rpx}.box .order-item .touristList-box .touristList .tourist-item{align-items:center;display:-webkit-flex;display:flex;margin-bottom:30rpx;width:100%}.box .order-item .touristList-box .touristList .tourist-item .closeBox{align-items:center;display:-webkit-flex;display:flex;height:40rpx;width:45rpx}.box .order-item .touristList-box .touristList .tourist-item .closeBox .close{height:30rpx;width:30rpx}.box .order-item .touristList-box .touristList .tourist-item .closeBox .close image{height:100%;width:100%}.box .order-item .touristList-box .touristList .tourist-item .tourist-info .name{color:#333;font-size:32rpx}.box .order-item .touristList-box .touristList .tourist-item .tourist-info .cardid{color:#777;font-size:26rpx;margin-top:15rpx}.box .order-item .touristList-box .touristList .tourist-item:nth-last-child(1){margin-bottom:0}.box .order-item .touristList-box .user-edit{height:30rpx;margin-right:15rpx;width:30rpx}.box .tourist-phone .title{color:#333;font-size:32rpx;font-weight:700}.box .tourist-phone .row-box{align-items:center;display:-webkit-flex;display:flex;height:40rpx;margin-top:30rpx}.box .tourist-phone .row-box .img{height:30rpx;margin-right:20rpx;width:30rpx}.box .tourist-phone .row-box .value{width:640rpx}.box .feeInfo .title{color:#333;font-size:32rpx;font-weight:700}.box .feeInfo .row-box{align-items:center;display:-webkit-flex;display:flex;height:40rpx;justify-content:space-between;margin-top:30rpx}.box .feeInfo .row-box .lable,.box .feeInfo .row-box .value{color:#333;font-size:28rpx}.box .feeInfo .preferential .lable,.box .feeInfo .preferential .value{color:#ff5411}.box .feeInfo .payment .lable{color:#222;font-size:34rpx}.box .feeInfo .payment .value{color:#222;font-size:36rpx}.box .uni-input{background:#fff;border-radius:10rpx;padding-left:20rpx}.box .btn-box{background:#fff;bottom:0;box-shadow:0-1rpx 0 0 rgba(0,0,0,.25);height:130rpx;justify-content:space-between;left:0;padding:0rpx 30rpx;position:fixed;width:100%;z-index:1000}.box .btn-box .amount-info,.box .btn-box{align-items:center;display:-webkit-flex;display:flex}.box .btn-box .amount-info .amount-box{margin-right:40rpx;min-width:150rpx}.box .btn-box .amount-info .amount-box .price .p-it{display:-webkit-flex;display:flex;height:42rpx}.box .btn-box .amount-info .amount-box .price .p-it .name{color:#333;font-size:26rpx;line-height:42rpx;margin-right:4rpx}.box .btn-box .amount-info .amount-box .price .p-it .num{color:#222;font-size:30rpx;font-weight:700;line-height:42rpx}.box .btn-box .amount-info .amount-box .price .p-it .pt{color:#ff5411}.box .btn-box .amount-info .amount-box .price .reduction{margin-top:10rpx}.box .btn-box .amount-info .res{align-items:center;color:#ff5411;display:-webkit-flex;display:flex;font-size:24rpx;height:100rpx;line-height:100rpx;margin-right:10rpx}.box .btn-box .pay{background:linear-gradient(90deg,#fc4a9b,#ff5413);border-radius:40rpx;color:#fff;font-size:30rpx;font-weight:700;height:80rpx;line-height:80rpx;margin:0;text-align:center;width:320rpx}.box .model-box{padding:40rpx}.box .model-box .model-title{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.box .model-box .model-title .model-name{align-items:center;color:#333;display:-webkit-flex;display:flex;font-size:36rpx}.box .model-box .model-title .model-name .num{color:#333;display:-webkit-flex;display:flex;font-size:26rpx;margin-left:20rpx}.box .model-box .model-title .model-name .num .activeNum{color:#ff5411}.box .model-box .model-title .model-name .num .spanCenter{align-items:center;display:-webkit-inline-flex;display:inline-flex;height:34rpx}.box .model-box .model-title .close{height:40rpx;width:40rpx}.box .model-box .addContacts{align-items:center;border:1rpx solid #ff5411;border-radius:40rpx;color:#ff5411;display:-webkit-flex;display:flex;font-size:30rpx;height:80rpx;justify-content:center;margin-top:40rpx;width:100%}.box .model-box .passenger-box-popup{height:615rpx;margin-top:18rpx}.box .model-box .passenger-box-popup .user-box{border-bottom:1px solid #eee;height:230rpx;justify-content:space-between;width:670rpx}.box .model-box .passenger-box-popup .user-box .info-box,.box .model-box .passenger-box-popup .user-box{align-items:center;display:-webkit-flex;display:flex}.box .model-box .passenger-box-popup .user-box .info-box .user-change{background-size:100% 100%;height:44rpx;margin-right:40rpx;width:44rpx}.box .model-box .passenger-box-popup .user-box .info-box .user-info .tips{color:red;font-size:24rpx}.box .model-box .passenger-box-popup .user-box .info-box .user-info .name{color:#333;font-size:32rpx;line-height:48rpx;margin-bottom:4rpx}.box .model-box .passenger-box-popup .user-box .info-box .user-info .u-phone{align-items:center;color:#777;display:-webkit-flex;display:flex;font-size:26rpx;line-height:39rpx;margin-top:10rpx}.box .model-box .passenger-box-popup .user-box .info-box .user-info .u-phone .u-phone1{color:#777;width:130rpx}.box .model-box .passenger-box-popup .user-box .info-box .user-info .u-phone .u-phone2{color:#777}.box .model-box .passenger-box-popup .user-box .user_edit{height:40rpx;width:40rpx}.box .model-box .content .row-box{align-items:center;border-bottom:1px solid #eee;display:-webkit-flex;display:flex;font-size:30rpx;height:105rpx;line-height:45rpx;width:100%}.box .model-box .content .row-box .label{color:rgba(0,0,0,.6);min-width:158rpx;width:158rpx}.box .model-box .content .row-box .value{color:rgba(0,0,0,.8);width:500rpx}.box .model-box .content .row-box .select{align-items:center;color:#333;display:-webkit-flex;display:flex}.box .model-box .content .row-box-count{margin-bottom:65rpx}.box .model-box .save{align-items:center;background:linear-gradient(90deg,#fc4a9b,#ff5413);border-radius:40rpx;color:#fff;display:-webkit-flex;display:flex;font-weight:700;height:80rpx;justify-content:center;width:100%}.box .detailBox{background:#fff;height:1030rpx;margin-bottom:130rpx;padding:40rpx;width:750rpx}.box .detailBox .title{color:#333;font-size:36rpx;line-height:54rpx}.box .detailBox .content{max-height:910rpx;padding-bottom:30rpx}.box .detailBox .content .item{border-bottom:1rpx solid #e5e5e5;margin-top:50rpx;padding-bottom:30rpx}.box .detailBox .content .item .tic-title{color:#333;font-size:32rpx;font-weight:700;line-height:45rpx}.box .detailBox .content .item .use-time{background:#f5f5f5;border-radius:10rpx;color:#777;display:inline-block;font-size:26rpx;height:36rpx;line-height:36rpx;margin-top:14rpx;padding:0 10rpx}.box .detailBox .content .item .tic-num-info{width:100%}.box .detailBox .content .item .tic-num-info .it{display:-webkit-flex;display:flex;justify-content:space-between;margin-top:30rpx;width:100%}.box .detailBox .content .item .tic-num-info .it .it-l{color:#333;display:-webkit-flex;display:flex;font-family:PingFang SC-Regular,PingFang SC;font-size:28rpx;line-height:40rpx;width:450rpx}.box .detailBox .content .item .tic-num-info .it .it-l .tag{border:1rpx solid #ff5411;border-radius:4rpx;color:#ff5411;font-size:24rpx;font-weight:500;height:36rpx;line-height:34rpx;margin-left:18rpx;margin-top:2rpx;padding:0 4rpx;white-space:nowrap}.box .detailBox .content .item .tic-num-info .it .it-r{color:#777;display:-webkit-flex;display:flex;font-size:24rpx;justify-content:flex-end}.box .detailBox .content .item .tic-num-info .it .it-r .p{color:#333;font-size:28rpx;margin-right:14rpx}.box .detailBox .content .order-detail{margin-top:20rpx}.box .detailBox .content .order-detail .od-item{align-items:center;color:#333;display:-webkit-flex;display:flex;font-size:28rpx;justify-content:space-between;margin-top:30rpx}.box .detailBox .content .order-detail .color1 text{color:#ff5411}.box .detailBox .content .order-detail .color2 text{color:#222;font-size:36rpx}.box .errBox{background:#fff;height:auto;padding:40rpx 40rpx 120rpx;position:relative;width:640rpx}.box .errBox .name{color:#333;font-size:32rpx;line-height:48rpx;text-align:center;width:100%}.box .errBox .err-info{margin-top:30rpx}.box .errBox .err-info .err-box .err-item{display:-webkit-flex;display:flex;font-size:30rpx;line-height:35rpx;margin-bottom:10rpx}.box .errBox .but-popup{background:linear-gradient(90deg,#fc4a9b,#ff5413);border-radius:50rpx;bottom:20rpx;color:#fff;font-size:26rpx;height:80rpx;left:40rpx;line-height:80rpx;position:absolute;text-align:center;width:560rpx}.dis{opacity:.5}
</style>
