<template>
<view class="box" v-if="detailObj.yearCardId">
    <view class="navbar" :style="'height:'+searchHeight+38+'px'+';'+'background:'+'rgba(255,255,255,'+navBarBg+')'+';'+'padding-top:'+searchHeight+'px'+';'">
        <uni-icons class="" :color="fontColor" size="20" type="arrowleft" @click="back()"></uni-icons>
        <view class="navName" :style="'color:'+fontColor+';'">预约</view>
    </view>
    <view class="topBj"></view>
    <view class="card-box" :style="'padding-top:'+searchHeight+38+'px'+';'">
        <view class="card-item">
            <image class="card-img" mode="aspectFill" :src="detailObj.image"></image>
            <view class="card-content">
                <view class="title">{{detailObj.title}}</view>
                <view class="name">{{'持卡人：'+detailObj.cardholderName}}</view>
                <view class="name time">{{'有效期至：'+$root.m0}}</view>
            </view>
        </view>
    </view>
    <view class="successTip model" v-if="successShow">
        <view class="success-icon">
            <image class="" mode="aspectFill" src="https://eshopfile.zhiyousx.com/170073354191260146.png"></image>
        </view>
        <view class="text">提交成功, 系统处理中...</view>
        <view class="remark">系统将在30分钟内返回处理结果，若预约失败，将自动为您取消订单，请前往预约详情页查看预约结果</view>
    </view>
    <view class="success-btn" v-if="successShow">
        <view class="btn" @click="goPage(0)">返回首页</view>
        <view class="btn getOrder" @click="goPage(1)">查看订单</view>
    </view>
    <view class="ticket-box model" v-if="!successShow">
        <view class="ticket">
            <view class="img">
                <image class="title-img" mode="aspectFill" :src="yearCardTicket.ticketImage"></image>
                <view class="allTimes">
                    <label class="_span" v-if="yearCardTicket.useTimesLimit">{{'免'+yearCardTicket.totalTimes+'次'}}</label>
                    <label class="_span" v-else>无限次</label>
                </view>
            </view>
            <view class="info">
                <view class="name multilineText2">{{yearCardTicket.scenicName}}</view>
                <view class="lable">
                    <view class="p1 _p">
                        <label class="_span" v-if="yearCardTicket.useTimesLimit">{{'剩余'+yearCardTicket.usableTimes+'次'}}</label>
                        <label class="_span" v-else>无限次</label>
                    </view>
                    <view class="p2 _p">{{'已约'+yearCardTicket.appointmentNum-yearCardTicket.refundNum+'次'}}</view>
                </view>
            </view>
        </view>
        <view class="way" v-if="yearCardTicket.keyNotes">
            <view class="title _p">使用方式</view>
            <view class="remark">{{yearCardTicket.keyNotes}}</view>
        </view>
    </view>
    <view class="date model" v-if="!successShow">
        <view class="" v-if="yearCardTicket.dateType==2">
            <view class="title _p">预约日期</view>
            <view class="date-box">
                <view class="scroll-box-date" v-if="$root.g0>0">
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
                        <image mode class="arrow" src="https://eshopfile.zhiyousx.com/169821946405933051.png"></image>
                    </view>
                </view>
            </view>
            <view class="selectTime" v-if="$root.g1">
                <view :class="['time-item','',activeTime===index?'active':'',item.surplusStock==0||item.disabled?'disable':'']" :key="index" v-for="(item, index) in selectStockVos">
                    <view class="time _p">{{item.time}}</view>
                    <view class="desc _p" v-if="!item.disabled">{{item.surplusStock>0?'可约':'已约满'}}</view>
                    <view class="selected">
                        <uni-icons class="icon" color="#fff" size="12" type="checkmarkempty"></uni-icons>
                    </view>
                </view>
            </view>
        </view>
        <view class="effective" v-else>
            <view class="title _p">有效日期</view>
            <view class="time _p">{{yearCardTicket.datePeriodBegin+'至'+yearCardTicket.datePeriodEnd}}</view>
            <view class="lose _p" v-if="$root.m1">{{$root.m2}}</view>
            <view class="lose _p" v-if="yearCardTicket.dateCannotUse">{{$root.m3+'不可用'}}</view>
        </view>
        <view class="people">
            <view class="title">
                <view class="left">预约人</view>
                <view class="tip">仅限持卡人本人使用</view>
            </view>
            <view class="people-item">
                <view class="label">持卡人</view>
                <view class="value">{{name}}</view>
                <image class="icon" src="https://eshopfile.zhiyousx.com/168492134271144514.png" v-if="!isEncryption" @click="getPhone(1)"></image>
                <image class="icon" src="https://eshopfile.zhiyousx.com/168492259404793104.png" v-if="isEncryption" @click="getPhone(0)"></image>
            </view>
            <view class="people-item" v-if="cardNum">
                <view class="label">身份证</view>
                <view class="value">{{cardNum}}</view>
            </view>
            <view class="people-item">
                <view class="label">手机号</view>
                <view class="value">{{phoneNum}}</view>
            </view>
        </view>
    </view>
    <view class="line_submit" :style="'height:'+(100+safeAreaBottom)+'rpx'+';'+'padding-bottom:'+safeAreaBottom+'rpx'+';'" v-if="!successShow">
        <view class="submit_btn" @click="submit()">提交预约</view>
    </view>
    <u-popup borderRadius="20" class="" :closeable="true" mode="center" :value="showSelectDate" :vueSlots="['default']" @input="showSelectDate = $event">
        <view class="selectDateBox">
            <view class="title">选择团期</view>
            <scroll-view class="content" :scrollY="true" v-if="$root.g2>0">
                <yu-calendar class="" :defaultDate="selectDateStr" :priceList="dateList" @getDataInDay="itemClickFn()"></yu-calendar>
                <view class="selectTime" v-if="$root.g3">
                    <view :class="['time-item','',activeTime===index?'active':'',item.surplusStock==0||item.disabled?'disable':'']" :key="index" v-for="(item, index) in selectStockVos">
                        <view class="time _p">{{item.time}}</view>
                        <view class="desc _p" v-if="!item.disabled">{{item.surplusStock>0?'可约':'已约满'}}</view>
                        <view class="selected">
                            <uni-icons class="icon" color="#fff" size="12" type="checkmarkempty"></uni-icons>
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="center" :value="showErr" :vueSlots="['default']" @input="showErr = $event">
        <view class="errBox">
            <view class="title">提示</view>
            <view class="content">{{ errMsg }}</view>
            <view class="btn" @click="e1($event)">我知道了</view>
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
                searchHeight: 0,
                navBarBg: 0,
                showSelectDate: !1,
                activeDate: null,
                selectDateStr: "",
                selectDateObj: {},
                safeAreaBottom: 0,
                successShow: !1,
                dateList: [],
                upTicketId: "616273786",
                userYearCardId: "1722810437767118849",
                detailObj: {},
                yearCardTicket: {},
                activeTime: "",
                selectStockVos: [],
                selectTimeStr: "",
                orderId: "",
                phoneNum: "",
                cardNum: "",
                isEncryption: !1,
                scrollToDate: "",
                name: "",
                showErr: !1,
                errMsg: "",
                isSubmit: !1
              }
            },
            onLoad: function(t) {
              var a = this,
                r = uni.getMenuButtonBoundingClientRect();
              this.searchHeight = r.top, t.upTicketId && t.userYearCardId && (this.upTicketId = t.upTicketId, this.userYearCardId = t.userYearCardId), this.getYearCardTicketDetail(), uni.getSystemInfo({
                success: function(e) {
                  a.safeAreaBottom = e.safeAreaInsets.bottom
                }
              })
            },
            methods: {
              getDateStr: function(e) {
                var t = e.split("-");
                return "".concat(t[0], "年").concat(t[1], "月").concat(t[2], "日")
              },
              goPage: function(t) {
                t ? uni.navigateTo({
                  url: "/yearCard/pages/reservationDetail/reservationDetail?orderId=" + this.orderId + "&userYearCardId=" + this.detailObj.userYearCardId
                }) : uni.reLaunch({
                  url: "/yearCard/pages/index/index"
                })
              },
              selectTime: function(e, t) {
                e.disabled || 0 == e.surplusStock || (this.activeTime = t, this.selectTimeStr = e.time, this.showSelectDate = !1)
              },
              encryption: function() {
                this.phoneNum = this.detailObj.cardholderMobile.replace(/^(.{3})(?:\d+)(.{4})$/, "$1****$2"), this.detailObj.cardholderIdCard && (this.cardNum = this.detailObj.cardholderIdCard.replace(/^(.{3})(?:\d+)(.{3})$/, "$1************$2")), this.name = this.detailObj.cardholderName.substring(0, 1) + new Array(this.detailObj.cardholderName.length).join("*")
              },
              getPhone: function(e) {
                this.isEncryption = !this.isEncryption, e ? (this.phoneNum = this.detailObj.cardholderMobile, this.cardNum = this.detailObj.cardholderIdCard, this.name = this.detailObj.cardholderName) : this.encryption()
              },
              getYearCardTicketDetail: function() {
                var e = this,
                  t = {
                    upTicketId: this.upTicketId,
                    userYearCardId: this.userYearCardId
                  };
                this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/userYearCard/yearCardTicketDetail", t).then((function(t) {
                  1 === t.code ? (e.detailObj = t.data, e.yearCardTicket = t.data.yearCardTicket, e.encryption(), e.getPriceData()) : e.$uni.showToast(t.msg)
                }))
              },
              ticketUseType: function(e) {
                return ["年卡码", "门票码"][e]
              },
              submit: function() {
                var e = this;
                return (0, n.default)(i.default.mark((function t() {
                  var a;
                  return i.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!e.isSubmit) {
                          t.next = 2;
                          break
                        }
                        return t.abrupt("return");
                      case 2:
                        if (e.isSubmit = !0, e.selectDateStr || 2 != e.yearCardTicket.dateType) {
                          t.next = 6;
                          break
                        }
                        return e.$uni.showToast("请选择预约日期"), t.abrupt("return");
                      case 6:
                        if (2 != e.yearCardTicket.stockLimit || e.selectTimeStr) {
                          t.next = 9;
                          break
                        }
                        return e.$uni.showToast("请选择时段"), t.abrupt("return");
                      case 9:
                        return a = {
                          contactIdCard: e.detailObj.cardholderIdCard,
                          contactMobile: e.detailObj.cardholderMobile,
                          contactName: e.detailObj.cardholderName,
                          upTicketId: e.upTicketId,
                          yearCardCode: e.detailObj.cardCode
                        }, 2 == e.yearCardTicket.stockLimit && (a.departStartTime = e.selectTimeStr.split("~")[0], a.departEndTime = e.selectTimeStr.split("~")[1]), 2 == e.yearCardTicket.dateType && (a.departDate = e.selectDateStr), t.next = 14, (0, c.subScribeMsg)([0]);
                      case 14:
                        e.$uniApi.dataRequestNoLoading("POST", "order/app/v1/yearCardOrder/appointment", a).then((function(t) {
                          1 === t.code ? (e.orderId = t.data, e.successShow = !0) : (e.errMsg = t.msg, e.showErr = !0)
                        })).catch((function(e) {
                          console.log(e)
                        })).finally((function() {
                          e.isSubmit = !1
                        }));
                      case 15:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              subSelectDate: function() {
                this.showSelectDate = !1, this.selectDateStr = this.selectDateObj.date, this.activeDate = this.selectDateObj.index
              },
              itemClickFn: function(e) {
                this.selectDateObj = e, this.selectDateStr = this.selectDateObj.date, this.activeDate = this.selectDateObj.index, this.selectStockVos = this.selectDateObj.stockVos, this.checkTime(), this.activeTime = "", this.scrollToDate = "date-" + e.date, 2 != this.yearCardTicket.stockLimit && (this.showSelectDate = !1)
              },
              checkTime: function() {
                if (2 == this.yearCardTicket.stockLimit) {
                  var e = Date.now();
                  this.selectStockVos.forEach((function(t) {
                    var a = Date.parse(t.date + " " + t.time.split("~")[0]),
                      r = Date.parse(t.date + " " + t.time.split("~")[1]);
                    t.disabled = !(a > e || e <= r)
                  }))
                }
              },
              selectedDate: function(e, t) {
                e.disabled || (this.selectDateStr = e.date, this.activeDate = t, this.selectStockVos = e.stockVos, this.checkTime(), this.activeTime = "")
              },
              getDaysBetween: function(e, t) {
                return (Date.parse(t) - Date.parse(e)) / 864e5 + 1
              },
              lossWeek: function() {
                var e = "";
                if (!this.yearCardTicket.dateCanUse) return !1;
                var t = this.yearCardTicket.dateCanUse.split(",");
                return [{
                  index: "1",
                  str: "周一"
                }, {
                  index: "2",
                  str: "周二"
                }, {
                  index: "3",
                  str: "周三"
                }, {
                  index: "4",
                  str: "周四"
                }, {
                  index: "5",
                  str: "周五"
                }, {
                  index: "6",
                  str: "周六"
                }, {
                  index: "7",
                  str: "周日"
                }].forEach((function(a) {
                  t.includes(a.index) || (e += a.str + "、")
                })), !!(e = e.slice(0, -1)) && e + "不可用"
              },
              lossDate: function() {
                var e = "特定日期：",
                  t = this.yearCardTicket.dateCannotUse.split(",").sort((function(e, t) {
                    return Date.parse(e.replace(/-/g, "/")) - Date.parse(t.replace(/-/g, "/"))
                  })),
                  a = [],
                  r = "",
                  i = 1;
                return t.forEach((function(n, c) {
                  0 == c && a.push(n), 1 == t.length && (e += n + "、"), r && n == r ? (i++, a.push(n), c == t.length - 1 && i >= 3 ? e += a[0] + "至" + a[a.length - 1] + "、" : c == t.length - 1 && i < 3 && a.forEach((function(t) {
                    e += t + "、"
                  }))) : (i >= 3 ? (e += a[0] + "至" + a[a.length - 1] + "、", c == t.length - 1 && (e += n + "、")) : c > 0 && a.forEach((function(t) {
                    e += t + "、"
                  })), i = 1, (a = []).push(n));
                  var d = n.replace(/-/g, "/");
                  r = s.format(s.addDay(new Date(d), 1), "yyyy-MM-dd")
                })), e = e.slice(0, -1)
              },
              getPriceData: function() {
                var e = this;
                if (1 != this.yearCardTicket.dateType) {
                  var t = s.format(new Date, "yyyy/MM/dd");
                  this.yearCardTicket.calanderVos = this.yearCardTicket.calanderVos.filter((function(e) {
                    return Date.parse(e.date.replace(/-/g, "/")) >= Date.parse(t)
                  })), this.yearCardTicket.calanderVos = this.yearCardTicket.calanderVos.slice(0, 30), this.yearCardTicket.calanderVos.forEach((function(t, a) {
                    var r = "",
                      i = 0;
                    if (e.yearCardTicket.stockLimitType ? 2 == e.yearCardTicket.stockLimit || 1 == e.yearCardTicket.stockLimit ? (t.stockVos.forEach((function(e) {
                        i += e.surplusStock
                      })), 0 == i ? (r = "已约满", t.disabled = !0) : r = "可约") : e.yearCardTicket.surplusStock ? r = "可约" : (r = "不可约", t.disabled = !0) : r = "可约", "可约" == r && (e.yearCardTicket.dateCanUse || e.yearCardTicket.dateCannotUse)) {
                      var n = e.checkWeek(t.date, e.yearCardTicket.dateCanUse, e.yearCardTicket.dateCannotUse);
                      r = n ? "可约" : "不可约", t.disabled = !n
                    }
                    t.dateShort = t.date.slice(5), t.week = e.getWeekOfDate(t.date), t.diy = r, t.index = a
                  })), this.dateList = this.yearCardTicket.calanderVos
                }
              },
              checkWeek: function(e, t, a) {
                if (a && a.split(",").includes(e)) return !1;
                if (t) {
                  e = e.replace(/-/g, "/");
                  var r = t.split(","),
                    i = new Date(e).getDay().toString();
                  if (i = "0" == i ? "7" : i, !r.includes(i)) return !1
                }
                return !0
              },
              getWeekOfDate: function(e) {
                e = e.replace(/-/g, "/");
                var t = s.format(new Date, "yyyy/MM/dd"),
                  a = s.format(s.addDay(new Date, 1), "yyyy/MM/dd");
                return e == t ? "今天" : e == a ? "明天" : "周" + "日一二三四五六".charAt(new Date(e).getDay())
              },
              back: function() {
                uni.navigateBack()
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.box{padding-bottom:140rpx}.box .navbar{align-items:center;display:-webkit-flex;display:flex;left:0;padding-left:20rpx;position:fixed;top:0;width:100%;z-index:300}.box .navbar .navName{font-size:34rpx;margin-left:5rpx}.box .topBj{background:linear-gradient(180deg,#ffbba0,hsla(0,0%,100%,0));height:392rpx;left:0;position:absolute;top:0;width:750rpx}.box .card-box{display:-webkit-flex;display:flex;justify-content:center}.box .card-box .card-item{border-radius:20rpx;height:300rpx;margin-top:50rpx;position:relative;width:600rpx}.box .card-box .card-item .card-img{border-radius:20rpx;height:100%;left:0;position:absolute;top:0;width:100%;z-index:10}.box .card-box .card-item .card-content{height:100%;left:0;padding:50rpx 40rpx 0;position:absolute;top:0;width:100%;z-index:20}.box .card-box .card-item .card-content .title{color:#fff;font-size:36rpx;font-weight:700;text-shadow:-1px 2px 3px #666}.box .card-box .card-item .card-content .name{color:#fff;font-size:26rpx;margin-top:30rpx;text-shadow:-1px 2px 3px #666}.box .card-box .card-item .card-content .time{margin-top:10rpx}.box .card-box .card-item .card-content .type{bottom:10rpx;font-size:20rpx;position:absolute;right:40rpx}.box .model{background:#fff;border-radius:20rpx;margin-left:30rpx;margin-top:30rpx;padding:30rpx 20rpx;width:690rpx}.box .effective .time{color:#2a2a2a;font-size:36rpx;font-weight:700;margin-top:20rpx}.box .effective .lose{color:#777;margin-top:10rpx}.box .successTip .success-icon{display:-webkit-flex;display:flex;justify-content:center;margin-top:30rpx}.box .successTip .success-icon image{height:120rpx;width:120rpx}.box .successTip .text{color:#333;font-size:36rpx;margin-top:20rpx;text-align:center;width:100%}.box .successTip .remark{color:#999;font-size:24rpx;line-height:36rpx;margin-top:50rpx;width:100%}.box .success-btn{margin-top:150rpx}.box .success-btn .btn,.box .success-btn{display:-webkit-flex;display:flex;justify-content:center}.box .success-btn .btn{align-items:center;border:1rpx solid rgba(0,0,0,.3);border-radius:40rpx;color:rgba(0,0,0,.8);font-size:26rpx;height:80rpx;line-height:80rpx;width:260rpx}.box .success-btn .getOrder{color:#ff5411;margin-left:30rpx}.box .ticket-box .ticket{display:-webkit-flex;display:flex}.box .ticket-box .ticket .img{position:relative}.box .ticket-box .ticket .img .allTimes{align-items:center;background:linear-gradient(148deg,#dd5000,#ff843f);border-radius:4rpx 20rpx 20rpx 20rpx;color:#fff;display:-webkit-flex;display:flex;height:40rpx;left:-5rpx;line-height:40rpx;padding:0 20rpx;position:absolute;top:-5rpx}.box .ticket-box .ticket .img image{border-radius:20rpx;height:160rpx;width:160rpx}.box .ticket-box .ticket .info{margin-left:20rpx}.box .ticket-box .ticket .info .name{color:rgba(0,0,0,.8);font-size:28rpx}.box .ticket-box .ticket .info .lable{align-items:center;background:#ffecec;border-radius:20rpx;display:-webkit-flex;display:flex;height:46rpx;justify-content:space-between;margin-top:20rpx;padding:0 20rpx;width:-webkit-fit-content;width:fit-content}.box .ticket-box .ticket .info .lable .p1{color:#ff5411;font-size:26rpx;font-weight:700}.box .ticket-box .ticket .info .lable .p2{color:rgba(0,0,0,.5);font-size:24rpx;margin-left:10rpx}.box .ticket-box .way{border-top:1rpx solid #ccc;margin-top:20rpx;padding-top:20rpx}.box .ticket-box .way .title{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:700}.box .ticket-box .way .remark{color:rgba(0,0,0,.8);font-size:26rpx;margin-top:10rpx}.box .date .title{color:rgba(0,0,0,.8);font-size:32rpx}.box .date .date-box{height:120rpx;margin-top:25rpx;width:690rpx}.box .date .date-box .scroll-box-date{position:relative;width:690rpx}.box .date .date-box .scroll-box-date .left{white-space:nowrap;width:566rpx}.box .date .date-box .scroll-box-date .left .date-item{background:#fff;border:1rpx solid #ccc;border-radius:20rpx;display:inline-block;height:120rpx;margin-right:10rpx;padding-top:20rpx;position:relative;text-align:center;width:147rpx}.box .date .date-box .scroll-box-date .left .date-item .selected{background:#ff5411;border-radius:8rpx 0 8rpx 0;bottom:0;color:#fff;display:none;font-size:20rpx;height:30rpx;line-height:30rpx;position:absolute;right:-1rpx;text-align:center;width:31rpx}.box .date .date-box .scroll-box-date .left .date-item .date-str{color:#444;font-size:26rpx;height:40rpx;line-height:40rpx}.box .date .date-box .scroll-box-date .left .date-item .price{color:#ff5411;font-size:26rpx;height:40rpx;line-height:40rpx}.box .date .date-box .scroll-box-date .left .date-item:nth-last-child(1){margin-right:32rpx}.box .date .date-box .scroll-box-date .left .disable{background:rgba(0,0,0,.05);border:none}.box .date .date-box .scroll-box-date .left .activeDate{background:#fff1ed;border:1rpx solid #ff5411;border-radius:20rpx 20rpx 8rpx 20rpx}.box .date .date-box .scroll-box-date .left .activeDate .selected{display:block}.box .date .date-box .scroll-box-date .line{background:#fff;box-shadow:-10rpx 0 40rpx 0 rgba(0,0,0,.2);height:120rpx;position:absolute;right:122rpx;top:0;width:10rpx;z-index:200}.box .date .date-box .scroll-box-date .right{align-items:center;background:#fff;display:-webkit-flex;display:flex;height:120rpx;justify-content:space-between;padding-right:20rpx;position:absolute;right:20rpx;top:0;width:130rpx;z-index:201}.box .date .date-box .scroll-box-date .right .text{color:#444;font-size:26rpx;line-height:40rpx;margin-left:25rpx;width:52rpx}.box .date .date-box .scroll-box-date .right .arrow{height:20rpx;width:10rpx}.box .date .people{border-top:1rpx solid #ccc;margin-top:40rpx;padding-top:30rpx}.box .date .people .title{align-items:flex-end;display:-webkit-flex;display:flex}.box .date .people .title .left{color:rgba(0,0,0,.8);font-size:32rpx}.box .date .people .title .tip{color:rgba(0,0,0,.5);font-size:24rpx;margin-left:10rpx}.box .date .people .people-item{align-items:center;display:-webkit-flex;display:flex;margin-top:20rpx}.box .date .people .people-item .label{color:rgba(0,0,0,.5);font-size:26rpx;margin-right:30rpx}.box .date .people .people-item .value{color:rgba(0,0,0,.8);font-size:26rpx}.box .date .people .people-item .type{align-items:center;background:#efefef;border-radius:16rpx;color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;font-size:20rpx;height:32rpx;justify-content:center;line-height:32rpx;margin-left:10rpx;width:68rpx}.box .date .people .people-item .icon{height:34rpx;margin-left:30rpx;width:34rpx}.box .line_submit{background:#fff;bottom:0;box-shadow:0rpx -4rpx 10rpx 0rpx rgba(0,0,0,.1);display:-webkit-flex;display:flex;height:130rpx;justify-content:space-between;padding:20rpx 30rpx 0;position:fixed;width:100%;z-index:100}.box .line_submit .submit_btn{align-items:center;background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:40rpx;color:#fff;display:-webkit-flex;display:flex;font-size:28rpx;height:80rpx;justify-content:center;width:100%}.box .selectDateBox{background:#fff}.box .selectDateBox .title{color:#333;font-size:36rpx;line-height:54rpx;padding:20rpx 20rpx 0}.box .selectDateBox .content{width:100%}.box .selectDateBox .content .selectTime{margin:0 0 40rpx 40rpx}.box .selectTime{display:-webkit-flex;display:flex;margin-top:20rpx}.box .selectTime .time-item{border:1rpx solid #ccc;border-radius:20rpx;height:84rpx;margin-right:20rpx;padding-top:9rpx;position:relative;text-align:center;width:180rpx}.box .selectTime .time-item .selected{background:#ff5411;border-radius:8rpx 0 8rpx 0;bottom:0;color:#fff;display:none;font-size:20rpx;height:30rpx;line-height:30rpx;position:absolute;right:-1rpx;text-align:center;width:31rpx}.box .selectTime .time-item ._p{font-size:26rpx}.box .selectTime .time-item .desc{color:#ff5411}.box .selectTime .disable{background:#eee}.box .selectTime .active{background:#fff1ed;border:1rpx solid #ff5411;border-radius:20rpx 20rpx 8rpx 20rpx}.box .selectTime .active .selected{display:block}.box .errBox{align-items:center;background:#fff;display:-webkit-flex;display:flex;flex-direction:column;padding:30rpx;width:600rpx}.box .errBox .title{color:#222;font-size:36rpx;line-height:54rpx;margin-bottom:16rpx}.box .errBox .content{color:#555;font-size:24rpx;line-height:30rpx;text-align:justify;width:100%;word-break:break-all}.box .errBox .btn{color:#999;font-size:28rpx;height:60rpx;letter-spacing:4rpx;line-height:60rpx;margin-top:10rpx;text-align:center;text-shadow:0 2rpx 2rpx rgba(0,0,0,.2);width:100%}
</style>
