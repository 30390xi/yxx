<template>
<view class="yu-calendar">
    <view class="yu-calendar-header">
        <view class="header-left" @click="prevMonth()">
            <view class="arrow-left"></view>
        </view>
        <view class="header-center">{{year+'年'+selectMonth+'月'}}</view>
        <view class="header-right" @click="nextMonth()">
            <view class="arrow-right"></view>
        </view>
    </view>
    <view class="yu-calendar-week">
        <view class="list" :key="idx" v-for="(week, idx) in weeks">{{week}}</view>
    </view>
    <view class="yu-calendar-content">
        <view class="yu-calendar-day">
            <view :class="['list','',!item.diyData||item.diyData.diy=='不可订'||item.diyData.dis||item.diyData.disabled?'grey':'',selectedDate===item.date?'active':'',info?'info':'',isCs&&selectedDate===item.date?'csBg':'']" :key="idx" v-for="(item, idx) in dayArr">
                <view class="day">{{item.day}}</view>
                <view class="price">{{(item.diyData?item.diyData.diy:notbookinfo||'不可订')+(item.diyData&&item.diyData.qi?'起':'')}}</view>
            </view>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        name: "yuCalendar",
        props: {
          priceList: {
            type: [Array, Object],
            default: function() {
              return []
            }
          },
          isCs: {
            type: Number,
            default: 0
          },
          defaultDate: {
            type: String,
            default: ""
          },
          notbookinfo: {
            type: String,
            default: ""
          },
          showTime: {
            type: Boolean,
            default: !1
          }
        },
        computed: {},
        data: function() {
          return {
            date: new Date,
            localDate: "",
            selectMonth: "",
            selectedDate: "",
            weeks: ["日", "一", "二", "三", "四", "五", "六"],
            dayArr: [],
            year: "",
            month: "",
            status: 1
          }
        },
        watch: {
          defaultDate: function(t) {
            this.selectedDate = this.defaultDate, this.setDateTime()
          },
          priceList: function(t) {
            t && this.updateTime()
          },
          showTime: function(t) {
            t && this.setDateTime()
          }
        },
        mounted: function() {
          this.selectedDate = this.defaultDate || "", this.year = this.date.getFullYear(), this.month = this.date.getMonth(), this.setDateTime()
        },
        methods: {
          setDateTime: function() {
            if (this.selectedDate) {
              var t = this.selectedDate.split("-");
              this.year = t[0], "0" == t[1][0] ? this.month = Number(t[1].slice(1)) : this.month = Number(t[1]), this.month -= 1
            } else this.year = this.date.getFullYear(), this.month = this.date.getMonth();
            this.initDate(this.year, this.month)
          },
          initDate: function(t, e) {
            var a = this,
              i = "",
              n = this.date.getFullYear(),
              r = this.date.getMonth() + 1,
              s = this.date.getDate();
            this.localDate = this.formatNum(n) + "-" + this.formatNum(r) + "-" + this.formatNum(s), this.selectMonth = e + 1;
            var o = new Date(t, e + 1, 0).getDate();
            this.dayArr = [];
            for (var u = function(n) {
                var r = a.formatNum(t) + "-" + a.formatNum(e + 1) + "-" + a.formatNum(n),
                  s = {
                    date: r,
                    day: n,
                    status: 1
                  };
                i = new Date(t, e, n).getDay(), 1 == n && 0 != i && a.addBeforeValue(i), s.diyData = a.priceList.find((function(t) {
                  return t.date == r
                })), a.dayArr.push(s), n == o && 6 != i && a.addAfterValue(i)
              }, d = 1; d <= o; d++) u(d)
          },
          updateTime: function() {
            var t = this;
            this.dayArr[0] && (this.dayArr.forEach((function(e) {
              e.diyData = t.priceList.find((function(t) {
                return t.date == e.date
              }))
            })), this.$forceUpdate())
          },
          addBeforeValue: function(t) {
            for (var e = this, a = new Date(this.year, this.month, 0).getDate(), i = Number(JSON.parse(JSON.stringify(this.year))), n = Number(JSON.parse(JSON.stringify(this.month))), r = function(r) {
                var s = a - (t - r) + 1;
                0 == n && (i -= 1, n = 12);
                var o = e.formatNum(i) + "-" + e.formatNum(n) + "-" + e.formatNum(s),
                  u = {
                    date: o,
                    day: s,
                    status: 0
                  };
                u.diyData = e.priceList.find((function(t) {
                  return t.date == o
                })), e.dayArr.push(u)
              }, s = 0; s < t; s++) r(s)
          },
          addAfterValue: function(t) {
            for (var e = this, a = (new Date(this.year, this.month, 0).getDate(), Number(JSON.parse(JSON.stringify(this.year)))), i = Number(JSON.parse(JSON.stringify(this.month))) + 2, n = function(t) {
                i > 12 && (a += 1, i = 1);
                var n = e.formatNum(a) + "-" + e.formatNum(i) + "-" + e.formatNum(t + 1),
                  r = {
                    date: n,
                    day: t + 1,
                    status: 2
                  };
                r.diyData = e.priceList.find((function(t) {
                  return t.date == n
                })), console.log(r), e.dayArr.push(r)
              }, r = 0; r < 6 - t; r++) n(r)
          },
          formatNum: function(t) {
            return t < 10 ? "0" + t : t + ""
          },
          prevMonth: function() {
            0 == this.month ? (this.year -= 1, this.month = 11) : this.month -= 1, this.initDate(this.year, this.month)
          },
          nextMonth: function() {
            this.year = Number(this.year), 11 == this.month ? (this.year += 1, this.month = 0) : this.month += 1, this.initDate(this.year, this.month)
          },
          onClick: function(t, e) {
            t.diyData && (!t.diyData || "不可订" == t.diyData.diy || "已满" == t.diyData.diy || "约满" == t.diyData.diy || t.diyData.dis || t.diyData.isFull || (this.selectedDate = t.date, this.$emit("getDataInDay", t.diyData)))
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.csBg{background:#fbf8f1!important}.yu-calendar-header{color:#fff;display:-webkit-flex;display:flex;justify-content:space-between;padding:40rpx 50rpx}.yu-calendar-header .header-left{font-size:28rpx}.yu-calendar-header .header-left .arrow-left{border-bottom:1rpx solid #2a2a2a;border-left:1rpx solid #2a2a2a;height:20rpx;transform:rotate(45deg);width:20rpx}.yu-calendar-header .header-center{font-size:34rpx;font-weight:700}.yu-calendar-header .header-right{font-size:28rpx}.yu-calendar-header .header-right .arrow-right{border-bottom:1rpx solid #2a2a2a;border-right:1rpx solid #2a2a2a;height:20rpx;transform:rotate(-45deg);width:20rpx}.yu-calendar-week{color:#fff;display:-webkit-flex;display:flex;padding:0 5px}.yu-calendar-week .list{flex:1;font-size:28rpx;line-height:40rpx;text-align:center}.yu-calendar-day{display:-webkit-flex;display:flex;flex-wrap:wrap;padding:20rpx 24rpx;position:relative}.yu-calendar-day .list{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:109rpx;justify-content:center;width:100rpx}.yu-calendar-day .list.grey .day,.yu-calendar-day .list.grey .price{color:#b5b5b5}.yu-calendar-day .list.active{background:#fff1ed;border-radius:20rpx}.yu-calendar-day .list.disabled{background:#f5f5f5}.yu-calendar-day .list .day{font-size:30rpx;font-weight:700}.yu-calendar-day .list .price{color:#333;font-size:22rpx;white-space:nowrap}
</style>
