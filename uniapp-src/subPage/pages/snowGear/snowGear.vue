<template>
<view class="container" v-if="pageData.peopleNum">
    <view class="snowInfo">
        <view class="title">{{pageData.itemTitle}}</view>
        <view class="item">
            <view class="name">订单编号：</view>
            <view class="value">{{orderId}}</view>
        </view>
        <view class="item item-bottom">
            <view class="name">使用日期：</view>
            <view class="value">{{pageData.ticketUseDate+''}}<text class="useTime" v-if="pageData.ticketUseStartTime&&pageData.ticketUseEndTime">{{pageData.ticketUseStartTime+'~'+pageData.ticketUseEndTime}}</text>
            </view>
        </view>
        <view class="item1 item1-bottom">
            <view class="name">预计到达时间</view>
            <view class="value" @click="openTime($event)">
                <view class="" v-if="subscribeTime">{{dayTime+' '+subscribeTime}}</view>
                <view class="" v-else>请选择<image mode class="icon" src="https://eshopfile.zhiyousx.com/images/snow/right.png"></image>
                </view>
            </view>
        </view>
        <view class="item1 item1-bottom">
            <view class="name">预约雪具人数</view>
            <view class="value">{{(pageData.peopleNum||'')+'人'}}</view>
        </view>
        <view class="item1">
            <view class="name">押金</view>
            <view class="value color">{{(pageData.deposit||'')+'元/每人'}}</view>
        </view>
    </view>
    <view class="gear-box">
        <view class="it" :key="index" v-for="(item, index) in $root.l0">
            <view class="top-box">
                <view class="left">
                    <image mode class="icon" :src="item.m0"></image>
                    <view class="title">{{item.configName}}</view>
                    <view class="price colorType" v-if="item.price">{{'￥'+item.price+'/'+item.m1}}</view>
                    <view class="price colorType" v-if="item.remarks">{{item.remarks}}</view>
                </view>
                <view class="right">
                    <image mode :class="['img','','',item.showMore==1?'show':'']" src="https://eshopfile.zhiyousx.com/images/snow/snowGear011.png"></image>
                </view>
            </view>
            <view class="userBox" v-if="item.showMore==0">
                <view class="user" :key="i" v-for="(it, i) in userChoose">
                    <view class="box">
                        <view class="index">{{'预约人'+i+1}}</view>
                        <scroll-view class="left" :scrollX="true" v-if="sid">
                            <view :class="['choose','',it1.id===it['id'+item.configClass]?'active':'',initData[i]['dis'+item.configClass]?'dis':'']" :key="i1" v-for="(it1, i1) in item.childList">{{it1.configName}}</view>
                        </scroll-view>
                        <scroll-view class="left" :scrollX="true" v-else>
                            <view :class="['choose','',it1.id===it['id'+item.configClass]?'active':'']" :key="i1" v-for="(it1, i1) in item.childList">{{it1.configName}}</view>
                        </scroll-view>
                    </view>
                    <view class="input-box" v-if="item.configClass==1&&it.type1==2">
                        <input class="uInput" :disabled="initData[i]['heightdisable']" name="text" placeholder="请输入身高" type="number" :value="it.value1"></input>
                        <text class="cm">cm</text>
                    </view>
                    <view class="uni-input" :style="'pointer-events:'+(sid&&it.shoesdisable?'none':'initial')+';'" v-if="item.configClass==2&&it.type1==2&&it.type2==1">
                        <view class="text2" v-if="it.value2&&it.value2.id">{{it.value2.configName}}</view>
                        <view class="text2" v-else>请选择鞋码</view>
                        <image mode class="down" src="https://eshopfile.zhiyousx.com/images/snow/down.png"></image>
                    </view>
                    <view class="uni-input" :style="'pointer-events:'+(sid&&it.closedisable?'none':'initial')+';'" v-if="item.configClass==4&&it.type4==1">
                        <view class="text2" v-if="it.value4&&it.value4.id">{{it.value4.configName}}</view>
                        <view class="text2" v-else>请选择尺码</view>
                        <image mode class="down" src="https://eshopfile.zhiyousx.com/images/snow/down.png"></image>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="yy-info" v-if="pageData.useMemo">
        <view class="info">
            <u-parse class=" vue-ref" ref="mask" :html="pageData.useMemo" :lazyLoad="true" style="text-align:justify;" :tagStyle="parseStyle" :vueSlots="['default']">
                <text class="" style="display:inline-block;"></text>
            </u-parse>
        </view>
    </view>
    <view class="fixed-bottom" v-if="sid&&initData&&initData[0]">
        <view class="l">
            <view class="l1"></view>
            <view class="l2 colorType"></view>
        </view>
        <button :class="['r','',!listchanged?'dis':'']" @click="submit($event)">提交</button>
    </view>
    <view class="fixed-bottom" v-else>
        <view class="l">
            <view class="l1">您需支付:</view>
            <view class="l2 colorType">{{'￥'+priceAmount}}</view>
        </view>
        <button class="r" @click="submit($event)">支付预订</button>
    </view>
    <u-popup :borderRadius="20" class="" mode="bottom" :value="showPicker" :vueSlots="['default']" @input="showPicker = $event">
        <view class="mask">
            <view class="image-box" @click="closeTime($event)">
                <image mode class="close" src="https://eshopfile.zhiyousx.com/images/snow/close.png"></image>
            </view>
            <view class="picker-box">
                <view class="t1">选择到达雪场时间</view>
                <view class="t2">{{'滑雪日期：'+dayTime+' '+$root.m2}}</view>
            </view>
            <view class="picker">
                <picker-view class="picker-view" :indicatorStyle="indicatorStyle" :value="hd" @change="bindTimeChange($event)">
                    <picker-view-column class="picker-column left">
                        <view class="picker-item l" :key="index" v-for="(item, index) in hours">{{item}}</view>
                    </picker-view-column>
                    <picker-view-column class="picker-column right">
                        <view class="picker-item r" :key="index" v-for="(item, index) in minutes">{{item}}</view>
                    </picker-view-column>
                </picker-view>
            </view>
            <view class="but" @click="chooseTime($event)">确定</view>
        </view>
    </u-popup>
    <u-popup :borderRadius="20" class="" mode="bottom" :value="show" :vueSlots="['default']" @input="show = $event">
        <view class="mask">
            <view class="image-box" @click="closeMask()">
                <image mode class="close" src="https://eshopfile.zhiyousx.com/images/snow/close.png"></image>
            </view>
            <scroll-view class="" scrollY="true" style="max-height:900rpx;">
                <view class="item bottom30" v-if="$root.g0">
                    <view class="name">鞋码</view>
                    <view class="it-box">
                        <view :class="['it','',shoe.id==x.id?'active':'']" :key="y" v-for="(x, y) in shoeSize">{{x.configName}}</view>
                    </view>
                </view>
                <view class="item bottom30" v-if="$root.g1">
                    <view class="name">尺码</view>
                    <view class="it-box">
                        <view :class="['it','',clothes.id==x.id?'active':'']" :key="y" v-for="(x, y) in clothesSize">{{x.configName}}</view>
                    </view>
                </view>
                <view class="it-table" v-if="maskType==2">
                    <view class="it-table">
                        <view class="hotel-th th">
                            <view class="t">尺码</view>
                            <view class="t">身高</view>
                            <view class="t">体重</view>
                        </view>
                        <view class="d-table">
                            <view class="d-tr">
                                <view class="d-td">
                                    <view class="d-table">
                                        <view class="d-tr">
                                            <view class="d-td tableType">S码</view>
                                            <view class="d-td tableType border-left">145cm-155cm</view>
                                            <view class="d-td tableType border-left">40kg-50kg</view>
                                        </view>
                                    </view>
                                </view>
                            </view>
                            <view class="d-tr">
                                <view class="d-td">
                                    <view class="d-table">
                                        <view class="d-tr">
                                            <view class="d-td tableType">M码</view>
                                            <view class="d-td tableType border-left">155cm-165cm</view>
                                            <view class="d-td tableType border-left">50kg-55kg</view>
                                        </view>
                                    </view>
                                </view>
                            </view>
                            <view class="d-tr">
                                <view class="d-td">
                                    <view class="d-table">
                                        <view class="d-tr">
                                            <view class="d-td tableType">L码</view>
                                            <view class="d-td tableType border-left">165cm-170cm</view>
                                            <view class="d-td tableType border-left">55kg-60kg</view>
                                        </view>
                                    </view>
                                </view>
                            </view>
                            <view class="d-tr">
                                <view class="d-td">
                                    <view class="d-table">
                                        <view class="d-tr">
                                            <view class="d-td tableType">XL码</view>
                                            <view class="d-td tableType border-left">170cm-175cm</view>
                                            <view class="d-td tableType border-left">60kg-70kg</view>
                                        </view>
                                    </view>
                                </view>
                            </view>
                            <view class="d-tr">
                                <view class="d-td">
                                    <view class="d-table">
                                        <view class="d-tr">
                                            <view class="d-td tableType">XXL码</view>
                                            <view class="d-td tableType border-left">175cm以上</view>
                                            <view class="d-td tableType border-left">70kg以上</view>
                                        </view>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </scroll-view>
            <view class="but" @click="chooseOver($event)">确定</view>
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
              parseStyle: {
                p: "word-break: break-all;color: #b97d7d"
              },
              indicatorStyle: "height: 54px;",
              showPicker: !1,
              heightdisable: !1,
              thStyle: {
                height: 70
              },
              hours: ["8点", "9点", "10点", "11点", "12点", "13点", "14点", "15点", "16点", "17点", "18点", "19点", "20点"],
              minutes: ["30分"],
              num: 2,
              priceAmount: 0,
              shoesdisable: !1,
              closedisable: !1,
              records: [],
              userChoose: [],
              show: !1,
              shoeSize: [],
              clothesSize: [],
              changeList: [],
              userIndex: null,
              shoe: "",
              height: "",
              clothes: "",
              disabledSubmitBtn: !1,
              pageData: {},
              orderId: 0,
              hd: [0, 0],
              hour: "8点",
              minute: "30分",
              hourData: "",
              minuteData: "",
              dayTime: "",
              subscribeTime: "",
              maskType: 0,
              sid: "",
              bookinfo: {},
              initData: [{}]
            }
          },
          watch: {
            hourData: function(e) {
              this.minutes = "8点" == e ? ["30分"] : ["0分", "30分"]
            }
          },
          computed: {
            listchanged: function() {
              if (this.sid) {
                for (var e = this.userChoose, i = this.initData, t = !1, s = 0; s <= 6; s++)
                  for (var o = "id".concat(s + 1), n = 0; n < e.length; n++) e[n][o] != i[n][o] && (t = !0);
                return t
              }
              return !1
            }
          },
          onLoad: function(i) {
            this.orderId = i.orderId, i.sid && (this.sid = i.sid), uni.createSelectorQuery().selectViewport().boundingClientRect().exec((function(e) {
              var i = e[0].width / 750 * 100;
              this.indicatorStyle = "height" + i + "px"
            }))
          },
          onShow: function() {
            this.pageLoad()
          },
          methods: {
            getGearRule: function(e) {
              switch (e) {
                case 1:
                case 2:
                case 3:
                  return "人";
                case 4:
                  return "套";
                case 5:
                  return "副";
                case 6:
                  return "双";
                case 7:
                  return "套";
                case 8:
                  return "个"
              }
            },
            getWeekDay: function(e) {
              return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][new Date(e).getDay()]
            },
            getBookinfo: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/orderSubscribe/getSubscribeInfoById?id=" + this.sid).then((function(i) {
                1 === i.code && (e.bookinfo = i.data, e.resetInfo(i.data))
              })).catch((function(e) {}))
            },
            resetInfo: function(e) {
              var i = this,
                t = this.records,
                s = [];
              e.forEach((function(e, o) {
                var n = {};
                n.userid = e.id, n.id1 = e.skiList[1];
                var a = t[0].childList.find((function(e) {
                  return e.id == n.id1
                }));
                0 != a.configType && (n.heightdisable = !0, n.dis1 = !0), n.name1 = a.configName, n.type1 = a.configType, n.value1 = e.skiHeight || "", n.id2 = e.shoesIdList[1];
                var r = t[1].childList.find((function(e) {
                  return e.id == n.id2
                }));
                0 != r.configType && (n.shoesdisable = !0, n.dis2 = !0), i.changeList = r.childList;
                var u = r.childList.find((function(i) {
                  return e.shoesIdList[2] == i.id
                })) || {};
                n.shoeList = u.childList, n.name2 = r.configName, n.type2 = r.configType, n.shoeList && n.shoeList[0] ? n.value2 = n.shoeList.find((function(i) {
                  return i.id == e.shoesIdList[3]
                })) : n.value2 = {}, n.id3 = e.helmetIdList[1];
                var h = t[2].childList.find((function(e) {
                  return e.id == n.id3
                }));
                0 != h.configType && (n.dis3 = !0), n.name3 = h.configName, n.type3 = h.configType, n.id4 = e.clothesIdList[1];
                var c = t[3].childList.find((function(e) {
                  return e.id == n.id4
                }));
                0 != c.configType && (n.closedisable = !0, n.dis4 = !0), n.name4 = c.configName, n.type4 = c.configType, n.clothesList = c.childList || [], n.clothesList && n.clothesList[0] ? n.value4 = n.clothesList.find((function(i) {
                  return i.id == e.clothesIdList[2]
                })) : n.value4 = {}, n.id5 = e.glassesIdList[1];
                var d = t[4].childList.find((function(e) {
                  return e.id == n.id5
                }));
                0 != d.configType && (n.dis5 = !0), n.name5 = d.configName, n.type5 = d.configType, n.id6 = e.gloveIdList[1];
                var l = t[5].childList.find((function(e) {
                  return e.id == n.id6
                }));
                0 != l.configType && (n.dis6 = !0), n.name6 = l.configName, n.type6 = l.configType, n.id7 = e.protectiveClothingIdList[1];
                var f = t[6].childList.find((function(e) {
                  return e.id == n.id7
                }));
                0 != f.configType && (n.dis7 = !0), n.name7 = f.configName, n.type7 = f.configType, i.shoeSize = n.shoeList || [], i.clothesSize = n.clothesList || [], i.height = n.value1 || "", i.shoe = n.value2 || {}, i.clothes = n.value4 || {}, s.push(n)
              })), this.userChoose = s, this.initData = JSON.parse(JSON.stringify(s))
            },
            inputNumber: function(e, i) {
              var t = this;
              i = i.target.value.match(/^\d*(\.?\d{0,2})/g)[0] || "";
              var s = t.userChoose[e];
              this.$nextTick((function() {
                s.value1 = i, t.userChoose.splice(e, 1, s)
              })), this.$forceUpdate()
            },
            pageLoad: function() {
              var e = this,
                i = {
                  orderId: this.orderId
                };
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/orderSubscribe/getOrderSubscribeTemplate", i).then((function(i) {
                if (1 === i.code) {
                  var t = i.data;
                  e.priceAmount = t.peopleNum * t.deposit, e.pageData = i.data;
                  var s = e.pageData.ticketUseDate.split("-");
                  e.dayTime = s[1] + "月" + s[2] + "日", t.templateVoList.forEach((function(e) {
                    e.showMore = 0
                  })), e.userChoose = [];
                  for (var o = 0; o < t.peopleNum; o++) e.userChoose.push({});
                  if (e.records = t.templateVoList, e.sid) {
                    var n = t.subscribeTime.split(" ");
                    e.pageData.ticketUseDate = n[0], e.subscribeTime = n[1], e.getBookinfo()
                  }
                }
              })).catch((function(e) {}))
            },
            showMore: function(e) {
              var i = this.records[e];
              i.showMore = 0 == i.showMore ? 1 : 0, this.records.splice(e, 1, i)
            },
            getGearIcon: function(e) {
              return "https://eshopfile.zhiyousx.com/images/snow/snowGear0" + e + ".png"
            },
            submit: function() {
              var e = this.verify();
              e && (this.sid ? this.updatebookorder(e) : this.createOrder(e))
            },
            verify: function() {
              if (this.subscribeTime) {
                for (var e = this.userChoose, i = [], t = 0; t < this.records.length; t++) {
                  var s = this.records[t];
                  if (1 == s.configClass)
                    for (var o = 0; o < this.userChoose.length; o++) {
                      var n = this.userChoose[o];
                      if (!n.id1) return void this.$uni.showToast("请选择预约人".concat(o + 1, "的雪板"));
                      if (0 != n.type1 && !n.value1) return void this.$uni.showToast("请填写预约人".concat(o + 1, "的身高"));
                      0 == n.type1 && (n.value1 = "")
                    } else if (2 == s.configClass)
                      for (var a = 0; a < this.userChoose.length; a++) {
                        var r = this.userChoose[a];
                        if (!r.id2) return void this.$uni.showToast("请选择预约人".concat(a + 1, "的鞋码"));
                        if (!(0 == r.type2 || r.value2 && r.value2.id)) return void this.$uni.showToast("请选择预约人".concat(a + 1, "的鞋码"))
                      } else if (3 == s.configClass)
                        for (var u = 0; u < this.userChoose.length; u++) {
                          if (!this.userChoose[u].id3) return void this.$uni.showToast("请选择预约人".concat(u + 1, "的头盔型号"))
                        } else if (4 == s.configClass)
                          for (var h = 0; h < this.userChoose.length; h++) {
                            var c = this.userChoose[h];
                            if (!c.id4) return void this.$uni.showToast("请选择预约人".concat(h + 1, "的雪服尺码"));
                            if (!(0 == c.type4 || c.value4 && c.value4.id)) return void this.$uni.showToast("请选择预约人".concat(h + 1, "的雪服尺码"))
                          } else if (5 == s.configClass)
                            for (var d = 0; d < this.userChoose.length; d++) {
                              if (!this.userChoose[d].id5) return void this.$uni.showToast("请选择预约人".concat(d + 1, "的雪镜型号"))
                            } else if (6 == s.configClass)
                              for (var l = 0; l < this.userChoose.length; l++) {
                                if (!this.userChoose[l].id6) return void this.$uni.showToast("请选择预约人".concat(l + 1, "的手套型号"))
                              } else if (7 == s.configClass)
                                for (var f = 0; f < this.userChoose.length; f++) {
                                  if (!this.userChoose[f].id7) return void this.$uni.showToast("请选择预约人".concat(f + 1, "的护臂型号"))
                                }
                }
                return e.forEach((function(e, t) {
                  i.push({
                    skiId: e.id1 || "",
                    skiHeight: e.value1 || "",
                    shoesId: e.value2.id || e.id2,
                    helmetId: e.id3 || "",
                    clothesId: e.value4.id || e.id4,
                    glassesId: e.id5 || "",
                    gloveId: e.id6 || "",
                    protectiveClothingId: e.id7 || ""
                  })
                })), {
                  depositSum: this.priceAmount,
                  listDto: i,
                  orderId: this.orderId,
                  subscribeNumber: this.pageData.peopleNum,
                  subscribeProject: "雪具预约",
                  subscribeTime: this.pageData.ticketUseDate + " " + this.subscribeTime + ":00"
                }
              }
              this.$uni.showToast("请选择预计到达时间")
            },
            createOrder: function(e) {
              var i = this;
              this.disabledSubmitBtn || (this.disabledSubmitBtn = !0, this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/orderSubscribe/addOrderSubscribe", e, "预订中").then((function(e) {
                if (1 != e.code) return i.disabledSubmitBtn = !1, void i.$uni.showToast(e.msg);
                i.subscribeId = e.data, i.goPay()
              })))
            },
            goPay: function() {
              var i = this;
              this.$uniApi.dataRequestYesLoading("POST", "order/app/v1/orderSubscribe/subscribeWaitPayToPay", {
                payChannel: "",
                subscribeId: this.subscribeId,
                openId: uni.getStorageSync("userInfor").openId
              }, "支付中").then((function(t) {
                1 === t.code ? uni.requestPayment({
                  timeStamp: t.data.timeStamp,
                  nonceStr: t.data.nonceStr,
                  package: "prepay_id=".concat(t.data.prepayid),
                  signType: t.data.signType,
                  paySign: t.data.pay_sign,
                  success: function(t) {
                    uni.reLaunch({
                      url: "/subPage/pages/snowOrder/snowOrder?subscribeId=" + i.subscribeId
                    })
                  },
                  fail: function(t) {
                    console.log("fail:" + JSON.stringify(t)), uni.reLaunch({
                      url: "/subPage/pages/snowOrder/snowOrder?subscribeId=" + i.subscribeId
                    })
                  }
                }) : i.$uni.showToast(t.msg)
              }))
            },
            updatebookorder: function(i) {
              var t = this,
                s = i.listDto;
              this.initData.forEach((function(e, i) {
                s[i].id = e.userid
              }));
              var o = {
                listDto: s,
                orderId: this.orderId
              };
              this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/orderSubscribe/editOrderSubscribe", o).then((function(i) {
                1 === i.code && (t.$uni.showToast("预约修改已提交"), setTimeout((function() {
                  uni.reLaunch({
                    url: "/subPage/pages/snowOrder/snowOrder?subscribeId=" + t.pageData.subscribeId
                  })
                }), 1e3))
              })).catch((function(e) {}))
            },
            choseShoe: function(e) {
              this.shoe = e
            },
            choseClothes: function(e) {
              this.clothes = e
            },
            selectItem: function(e, i, t, s, o) {
              var n = this.userChoose[t];
              if (s) {
                var a = JSON.parse(JSON.stringify(this.initData))[t]["id".concat(o.configClass)];
                if (0 != o.childList.find((function(e) {
                    return e.id == a
                  })).configType) return void this.$uni.showToast("只能修改原自带装备")
              }
              if (2 != e || n.id1 && n.name1)
                if (2 != e || 0 == i.configType || 0 != n.type1) {
                  var r = "id" + e,
                    u = "name" + e;
                  n["type" + e] = i.configType, n[r] = i.id, n[u] = i.configName, 2 == e && (n.value2 = {}, this.changeList = i.childList, this.changeList.forEach((function(e) {
                    e.configName == n.name1 && (n.shoeList = e.childList)
                  }))), 1 == e && (n.id2 = "", n.name2 = "", n.type2 = "", n.value2 = {}), 4 == e && (n.value4 = {}, n.clothesList = i.childList), this.userChoose.splice(t, 1, n)
                } else this.$uni.showToast("雪板选择自带雪鞋必须自带");
              else this.$uni.showToast("请先选择雪板")
            },
            showPopup: function(e, i) {
              this.maskType = e, this.userIndex = i;
              var t = this.userChoose[i];
              this.shoeSize = t.shoeList || [], this.clothesSize = t.clothesList || [], this.height = t.value1 || "", this.shoe = t.value2 || {}, this.clothes = t.value4 || {}, this.show = !0
            },
            closeMask: function() {
              this.shoe = "", this.height = "", this.show = !1
            },
            chooseOver: function() {
              this.userChoose[this.userIndex].value1 = this.height, this.userChoose[this.userIndex].value2 = this.shoe, this.userChoose[this.userIndex].value4 = this.clothes, this.show = !1
            },
            openTime: function() {
              this.sid || (this.showPicker = !0)
            },
            closeTime: function() {
              this.showPicker = !1
            },
            bindTimeChange: function(e) {
              console.log(this.hd);
              var i = e.detail.value;
              this.hourData = this.hours[i[0]], this.minuteData = this.minutes[i[1]]
            },
            chooseTime: function() {
              this.hour = this.hourData || "8点", this.minute = this.minuteData || "30分";
              var e = this.hour.slice(0, this.hour.length - 1),
                i = this.minute.slice(0, this.minute.length - 1);
              Number(e) < 10 && (e = "0" + e), "30" != i && (i = "00"), "08" == e && (i = "30"), this.subscribeTime = e + ":" + i, this.showPicker = !1
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.container{background:#fafafa;font-family:Source Han Sans CN-Normal,Source Han Sans CN;font-weight:400;line-height:1;min-height:100vh;padding:20rpx 20rpx 140rpx}.container .snowInfo{background:#fff;border-radius:20rpx;box-sizing:border-box;padding:40rpx 20rpx 50rpx;width:710rpx}.container .snowInfo .title{color:#333;font-size:32rpx;line-height:38rpx;margin-bottom:24rpx;width:644rpx}.container .snowInfo .item{display:-webkit-flex;display:flex;font-size:26rpx}.container .snowInfo .item .name,.container .snowInfo .item .value{color:#888}.container .snowInfo .item .useTime{color:#888;margin-left:10rpx}.container .snowInfo .item-bottom{margin-bottom:90rpx;margin-top:16rpx}.container .snowInfo .item1{display:-webkit-flex;display:flex;font-size:28rpx;justify-content:space-between}.container .snowInfo .item1 .name{color:#555}.container .snowInfo .item1 .value{align-items:center;color:#888;display:-webkit-flex;display:flex}.container .snowInfo .item1 .value .icon{height:22rpx;margin-left:26rpx;width:12rpx}.container .snowInfo .item1 .color{color:#ff5411}.container .snowInfo .item1-bottom{margin-bottom:60rpx}.container .gear-box{margin-top:20rpx;width:100%}.container .gear-box .it{background:#fff;border-radius:20rpx;box-sizing:border-box;margin-bottom:20rpx;padding:40rpx 20rpx 50rpx;width:710rpx}.container .gear-box .it .top-box{justify-content:space-between}.container .gear-box .it .top-box .left,.container .gear-box .it .top-box{align-items:center;display:-webkit-flex;display:flex}.container .gear-box .it .top-box .left .icon{height:60rpx;margin-right:15rpx;width:60rpx}.container .gear-box .it .top-box .left .title{color:#333;font-size:32rpx;font-weight:700;margin-right:20rpx}.container .gear-box .it .top-box .left .price{font-size:28rpx;margin-right:10rpx}.container .gear-box .it .top-box .right .img{height:14rpx;width:28rpx}.container .gear-box .it .top-box .right .show{transform:rotate(180deg)}.container .gear-box .it .userBox .user{margin-top:40rpx}.container .gear-box .it .userBox .user .box{align-items:center;display:-webkit-flex;display:flex;height:80rpx;white-space:nowrap}.container .gear-box .it .userBox .user .box .left{width:570rpx}.container .gear-box .it .userBox .user .box .left .choose{background:#fff;border:1rpx solid #e6e6e6;border-radius:20rpx;display:inline-block;height:80rpx;line-height:78rpx;margin-right:20rpx;padding:0 30rpx;text-align:center}.container .gear-box .it .userBox .user .box .left .dis{background:#f5f5f5;border:none;color:#b1b1b1}.container .gear-box .it .userBox .user .box .left .active{background:#fff1ed;border:2px solid #ff5411}.container .gear-box .it .userBox .user .box .index{margin-right:17rpx;width:125rpx}.container .gear-box .it .userBox .user .input-box{align-items:center;background:#fff;border:1px solid #e6e6e6;border-radius:20rpx;display:-webkit-flex;display:flex;height:80rpx;margin-left:135rpx;margin-top:20rpx;width:260rpx}.container .gear-box .it .userBox .user .input-box .uInput{border:none;font-size:26rpx;margin-left:24rpx;margin-right:20rpx;width:153rpx}.container .gear-box .it .userBox .user .input-box .cm{color:#333;font-size:26rpx}.container .gear-box .it .userBox .user .uni-input{align-items:center;background:#fff;border:1px solid #bdbdbd;border-radius:20rpx;box-sizing:border-box;color:#828282;display:-webkit-flex;display:flex;font-size:26rpx;height:80rpx;justify-content:space-between;margin-left:135rpx;margin-top:20rpx;padding:0 30rpx;width:220rpx}.container .gear-box .it .userBox .user .uni-input .text2{color:#828282;font-size:26rpx}.container .gear-box .it .userBox .user .uni-input .down{height:14rpx;width:26rpx}.container .gear-box .it .userBox .user:first-child{margin-top:50rpx}.container .yy-info{background:#fffaf7;border-radius:10rpx;padding:40rpx 20rpx;width:710rpx}.container .fixed-bottom{background:#fff;border-top:1rpx solid #d9d9d7;bottom:0;display:-webkit-flex;display:flex;height:100rpx;left:0;position:fixed;width:100%;z-index:100}.container .fixed-bottom .l{align-items:center;display:-webkit-flex;display:flex;font-size:24rpx;line-height:100rpx;padding:0 30rpx;width:450rpx}.container .fixed-bottom .l .l1{margin-right:12rpx}.container .fixed-bottom .l .l2{font-size:32rpx;margin-right:20rpx}.container .fixed-bottom .l .l3{color:#888;margin-right:10rpx}.container .fixed-bottom .l .icon{height:10rpx;width:19rpx}.container .fixed-bottom .r{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:0!important;color:#fff;flex:1;font-size:32rpx;letter-spacing:2rpx;line-height:100rpx}.container .fixed-bottom .r.dis{background:linear-gradient(253deg,#ffb2d5,#ffc1aa);pointer-events:none}.container .mask{background:#fff;box-shadow:0-20rpx 20rpx 1px rgba(0,0,0,.05);padding:40rpx 0 150rpx 40rpx;position:relative;width:100%}.container .mask .picker-box .t1{color:#333;font-size:32rpx;line-height:38rpx;margin-bottom:10rpx}.container .mask .picker-box .t2{color:#828282;font-size:26rpx;line-height:30rpx}.container .mask .picker{margin-top:73rpx}.container .mask .picker .picker-view{height:400rpx;width:670rpx}.container .mask .picker .picker-view .picker-column{height:100%}.container .mask .picker .picker-view .picker-column .picker-item{height:100rpx;line-height:100rpx;width:100%}.container .mask .picker .picker-view .left{text-align:left}.container .mask .picker .picker-view .left .l{margin-left:51rpx}.container .mask .picker .picker-view .right{text-align:right}.container .mask .picker .picker-view .right .r{padding-right:62rpx}.container .mask .item{display:-webkit-flex;display:flex}.container .mask .item .name{color:#333;font-size:32rpx;font-weight:700;line-height:80rpx;margin-right:53rpx;white-space:nowrap}.container .mask .item .it-box{display:-webkit-flex;display:flex;flex-wrap:wrap}.container .mask .item .it-box .it{background:#fff;border:1px solid #e6e6e6;border-radius:20rpx;height:80rpx;line-height:80rpx;margin-bottom:30rpx;margin-left:20rpx;text-align:center;width:120rpx}.container .mask .item .it-box .it:nth-child(4n-3){margin-left:0}.container .mask .item .it-box .active{background:#fff1ed;border:2rpx solid #ff5411}.container .mask .item .input-box{align-items:center;background:#fff;border:1px solid #e6e6e6;border-radius:20rpx;display:-webkit-flex;display:flex;height:80rpx;width:260rpx}.container .mask .item .input-box .uInput{border:none;font-size:26rpx;margin-left:24rpx;margin-right:20rpx;width:153rpx}.container .mask .item .input-box .cm{color:#333;font-size:26rpx}.container .mask .it-table{width:670rpx}.container .mask .it-table .hotel-th{display:-webkit-flex;display:flex;flex-direction:row;height:70rpx;text-align:center}.container .mask .it-table .hotel-th .t{width:33.33%}.container .mask .it-table .th{background:#f5f5f5;color:#333;font-size:26rpx;font-weight:500;line-height:70rpx}.container .mask .it-table .tableType{color:#585858;font-size:26rpx;height:70rpx}.container .mask .but{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:50rpx;bottom:20rpx;color:#fff;font-size:26rpx;height:80rpx;left:40rpx;line-height:80rpx;position:absolute;text-align:center;width:670rpx}.container .mask .bottom60{margin-bottom:60rpx}.container .mask .bottom30{margin-top:30rpx}.container .mask .image-box{height:30rpx;position:absolute;right:30rpx;top:46rpx;width:40rpx;z-index:100}.container .mask .image-box .close{height:26rpx;margin-left:14rpx;margin-top:10rpx;width:26rpx}.colorType{color:#ff5411}
</style>
