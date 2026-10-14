<template>
<view class="big-box">
    <view class="calendar-box" v-if="$root.g0>0">
        <yu-calendar class="" :defaultDate="selectedHour.date" :isCs="infoObj.scenicType" :notbookinfo="infoObj.skuNotBookableInfo" :priceList="timeData" @getDataInDay="itemClickFn()"></yu-calendar>
    </view>
    <view class="bottom-box" v-if="showHourBox">
        <view class="title">{{'入'+(infoObj.scenicType==1?'寺':'园')+'时段'}}</view>
        <view class="item-box">
            <view :class="['item','',item.surplusStock===0?'grey':'',selectedHour.time===item.startTime+'-'+item.endTime?'active':'',selectedHour.time===item.startTime+'-'+item.endTime&&infoObj.scenicType==1?'csBg':'',item.disabled===true?'disabled':'']" v-for="(item, index) in hourArr">
                <view class="">{{item.startTime+'-'+item.endTime}}</view>
                <view :class="['',infoObj.scenicType==1?'csColor':'']" :style="'opacity:'+(item.surplusStock===0&&!item.timePassed?1:0)+';'" v-if="item.disabled===true">{{infoObj.skuSellOutInfo?infoObj.skuSellOutInfo:infoObj.skuItemType==0?'已满':'约满'}}</view>
                <view class="" v-else>{{item.surplusStockStr}}</view>
            </view>
        </view>
    </view>
    <view :class="['confirm','',infoObj.scenicType==1?'csBtn':'']" @click="confirmFn($event)">确定选择</view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          name: "calendarPage",
          isCalendarPage: !0,
          data: function() {
            return {
              infoObj: {},
              hourArr: [],
              showHourBox: !1,
              selectedHour: {},
              timeData: [],
              scenicType: 0,
              groupFlag: !1
            }
          },
          onLoad: function(t) {
            this._ticketId = t.ticketId, this.scenicType = t.scenicType, this.groupFlag = !!t.groupFlag, uni.setStorageSync("isFromCalendarPage", !0), this._prevSelectedDateObj = uni.getStorageSync("selectedHour"), this._prevSelectedDateObj && (this.selectedHour = this._prevSelectedDateObj), this.getInfo()
          },
          methods: {
            getInfo: function() {
              var t = this;
              uni.showLoading({
                title: "努力加载中",
                mask: !0
              }), this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item/getTicketDetailForOrder", {
                itemId: this._ticketId
              }).then((function(s) {
                if (uni.hideLoading(), t.infoObj = s.data, t._priceArr = t.infoObj.ticketPrices, t.initCalendar1(t._priceArr), t.showHourBox = 2 == t.infoObj.itemUseDesc.stockLimit, t.$forceUpdate(), t.showHourBox && t._prevSelectedDateObj) {
                  var i = t._priceArr.find((function(e) {
                    return e.date === t._prevSelectedDateObj.date
                  }));
                  t.getHourData(i.itemTicketStocks)
                }
              })).catch((function(t) {
                uni.hideLoading()
              }))
            },
            initCalendar1: function(e) {
              var t = this,
                s = this.infoObj,
                i = this.infoObj.skuSellOutInfo ? this.infoObj.skuSellOutInfo : 0 == this.infoObj.skuItemType ? "已满" : "约满",
                o = "";
              this.timeData = e.map((function(e, c) {
                var n = e.sellPrice && e.sellPrice > 0 ? "¥" + e.sellPrice : "免费";
                if (-1 === e.surplusStock) o = s.skuInStockInfo ? s.skuInStockInfo : n;
                else if (e.surplusStock > 0)
                  if (1 == s.itemUseDesc.stockLimit)
                    if (s.itemUseDesc.stockLessFlag && !t.groupFlag) {
                      var r = 1 == s.itemUseDesc.stockLessShowType ? "余" + e.surplusStock : s.itemUseDesc.stockLessShowDesc.substring(0, 4);
                      o = s.skuInStockInfo || (e.surplusStock >= s.itemUseDesc.stockLessNum ? n : r)
                    } else o = s.skuInStockInfo || (e.surplusStock > 50 ? n : "余" + e.surplusStock);
                else {
                  var u = (new Date).getTime(),
                    a = e.itemTicketStocks,
                    l = 0;
                  a.forEach((function(e) {
                    var t = new Date((e.date + " " + e.endTime + ":00").replace(/-/g, "/")).getTime();
                    l += t < u ? 0 : e.surplusStock
                  })), l > 0 ? o = s.skuInStockInfo || n : (o = s.skuSellOutInfo || i, e.isFull = !0, e.disabled = !0)
                } else e.isFull = !0, o = i;
                return e.diy = o, e
              }))
            },
            getPriceByDay: function(e) {
              for (var t in this._priceArr) {
                var s = this._priceArr[t];
                if (s.date == e) return s.sellPrice
              }
            },
            itemClickFn: function(e) {
              (0 === this.infoObj.itemUseDesc.stockLimitType || 1 === this.infoObj.itemUseDesc.stockLimit && (e.surplusStock > 0 || -1 == e.surplusStock)) && (this.selectedHour = e), this.showHourBox && 0 != e.surplusStock && (this.selectedHour = e, this.getHourData(e.itemTicketStocks))
            },
            getHourData: function(e) {
              var t = this,
                s = (new Date).getTime(),
                i = this.infoObj,
                o = this.infoObj.skuSellOutInfo ? this.infoObj.skuSellOutInfo : 0 == this.infoObj.skuItemType ? "已满" : "约满";
              e.forEach((function(e) {
                new Date((e.date + " " + e.endTime + ":00").replace(/-/g, "/")).getTime() < s && (e.disabled = !0, e.timePassed = !0);
                var c = "";
                0 === e.surplusStock ? (e.disabled = !0, c = o) : c = i.itemUseDesc.stockLessFlag && !t.groupFlag ? e.surplusStock >= i.itemUseDesc.stockLessNum || -1 == e.surplusStock ? "有票" : 1 == i.itemUseDesc.stockLessShowType ? "余" + e.surplusStock : i.itemUseDesc.stockLessShowDesc.substring(0, 6) : e.surplusStock > 200 || -1 == e.surplusStock ? "有票" : "余" + e.surplusStock, e.surplusStockStr = c
              })), this.hourArr = e
            },
            selectHourFn: function(e) {
              0 !== e.surplusStock && !0 !== e.disabled && (e.time = e.startTime + "-" + e.endTime, this.selectedHour = e)
            },
            confirmFn: function() {
              this.selectedHour.date ? !this.showHourBox || this.selectedHour.time ? (uni.setStorageSync("selectedHour", this.selectedHour), uni.navigateBack()) : this.$uni.showToast("请选择时段") : this.$uni.showToast("请选择时间")
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background-color:#fff}.csColor{color:#a17111!important}.csBorder{border-color:#a17111!important}.csBg{background:#fbf8f1!important}.csBtn{background:linear-gradient(52deg,#c7b795,#c7b795)!important}.bottom-box{color:#2a2a2a;line-height:1;padding:30rpx 30rpx 150rpx}.bottom-box .title{font-size:32rpx;font-weight:700;margin-bottom:24rpx}.bottom-box .item-box .item{background-color:#fff;border:1px solid #e6e6e6;border-radius:20rpx;box-sizing:border-box;display:inline-block;font-size:28rpx;height:120rpx;margin-bottom:15rpx;margin-right:15rpx;text-align:center;width:210rpx}.bottom-box .item-box .item .red{color:#f15252}.bottom-box .item-box .item.active{background-color:#fff1ed}.bottom-box .item-box .item.grey{background-color:#f5f5f5}.bottom-box .item-box .item.grey view:first-child{color:#9a9a9a}.bottom-box .item-box .item.grey view:last-child{color:#f15252}.bottom-box .item-box .item view:nth-child(1){font-size:28rpx;padding:25rpx 0 15rpx}.bottom-box .item-box .item view:nth-child(2){color:#333;font-size:26rpx}.bottom-box .item-box .item.disabled{background-color:#f5f5f5}.bottom-box .item-box .item.disabled view:first-child{color:#9a9a9a}.confirm{background:linear-gradient(52deg,#fc4a7c,#ff5411);bottom:0;color:#fff;font-size:32rpx;height:100rpx;left:0;letter-spacing:1rpx;line-height:100rpx;position:fixed;text-align:center;width:100%}
</style>
