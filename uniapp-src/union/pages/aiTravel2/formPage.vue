<template>
<view class="container">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="form-content">
        <view class="form-item">
            <view class="form-item-label">请选择您的出发地</view>
            <view class="form-item-value">
                <view class="origin-btns">
                    <view :class="['origin-type-btn','',formData.origin===2?'active':'']" @click="e0($event)">
                        <view class="origin-type-btn-title">外来游客出行</view>
                        <view class="origin-type-btn-desc">大众景色、特色美食</view>
                    </view>
                    <view :class="['origin-type-btn','',formData.origin===1?'active':'']" @click="e1($event)">
                        <view class="origin-type-btn-title">本地人出行</view>
                        <view class="origin-type-btn-desc">本地人常去、高分美食</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="form-item">
            <view class="form-item-label">想去哪玩</view>
            <view class="form-item-value">
                <picker class="form-select" :range="cityColumns[0]" :value="cityIndex" @change="bindPickerChange($event)">
                    <view class="form-select-content">
                        <view class="select-left-content">
                            <image mode class="select-left-icon" src="https://eshopfile.zhiyousx.com/175669111355825506.png"></image>
                            <text class="select-text" v-if="formData.city">{{formData.city}}</text>
                            <text class="select-text placeholder" v-else>请选择出行城市</text>
                        </view>
                        <image mode class="select-right-icon" src="https://eshopfile.zhiyousx.com/175669115668179740.png"></image>
                    </view>
                </picker>
            </view>
            <view class="select-btns">
                <view class="select-btn" :key="index" v-for="(item, index) in cityOptions">{{item}}</view>
            </view>
        </view>
        <view class="form-item">
            <view class="form-item-label">想玩多久</view>
            <view class="form-item-value">
                <view class="form-select" @click="openDatePicker($event)">
                    <view class="form-select-content">
                        <view class="select-left-content">
                            <image mode class="select-left-icon" src="https://eshopfile.zhiyousx.com/175669417313273268.png"></image>
                            <text class="select-text" v-if="formData.beginTime&&formData.endTime">{{formData.beginTime+' 至 '+formData.endTime}}</text>
                            <text class="select-text placeholder" v-else>请选择出行日期</text>
                        </view>
                        <image mode class="select-right-icon" src="https://eshopfile.zhiyousx.com/175669115668179740.png"></image>
                    </view>
                </view>
            </view>
        </view>
        <view class="form-item">
            <view class="form-item-label">出行人数</view>
            <view class="form-item-value">
                <view class="form-select" @click="openTravelersPopup($event)">
                    <view class="form-select-content">
                        <view class="select-left-content">
                            <image mode class="select-left-icon" src="https://eshopfile.zhiyousx.com/175669413781862938.png"></image>
                            <text class="select-text" v-if="$root.m0">{{ ($root.m1?formData.adult+'位成人 ':'')+($root.m2?formData.children+'位儿童 ':'')+($root.m3?formData.older+'位老人':'') }}</text>
                            <text class="select-text placeholder" v-else>请至少选择一名旅游人次</text>
                        </view>
                        <image mode class="select-right-icon" src="https://eshopfile.zhiyousx.com/175669496442746609.png"></image>
                    </view>
                </view>
            </view>
            <view class="select-btns">
                <view class="select-btn" @click="setTravelType('family')">亲子游</view>
                <view class="select-btn" @click="setTravelType('couple')">情侣游</view>
                <view class="select-btn" @click="setTravelType('full')">全家游</view>
            </view>
        </view>
        <view class="form-item">
            <view class="form-item-label">预算</view>
            <view class="form-item-label-2">预算类型</view>
            <view class="form-item-value">
                <view class="budget-type-btns">
                    <view :class="['budget-type-btn','',formData.budgetType===1?'active':'']" @click="setBudgetType(1)">
                        <view class="budget-type-btn-title">总预算<text class="">（不包含往返交通）</text>
                        </view>
                    </view>
                    <view :class="['budget-type-btn','',formData.budgetType===2?'active':'']" @click="setBudgetType(2)">
                        <view class="budget-type-btn-title">人均预算<text class="">（不包含往返交通）</text>
                        </view>
                    </view>
                </view>
            </view>
            <view class="form-item-label-2" style="margin-top:12rpx;">您的预算</view>
            <view class="form-item-value">
                <view class="recommend-budget" style="margin-bottom:12rpx;" v-if="showAIBudget">{{'AI给您推荐的'+(formData.budgetType===1?'总':'人均')+'预算为'}}<text class="" style="color:#BC41F5;">{{aiBudget}}</text>元</view>
                <view class="budget-input">
                    <input :adjustPosition="true" class="budget-input-native" :maxlength="8" min="0" placeholder="请输入预算金额" placeholderStyle="color:rgba(51,51,51,0.5)" :value="formData.budget" @input="formData.budget = $event; handleBudgetInput($event)"></input>
                    <text class="budget-unit">元</text>
                </view>
            </view>
        </view>
        <view class="form-item">
            <view class="form-item-label">想怎么玩</view>
            <view class="form-item-value">
                <view class="want-do-btns">
                    <view :class="['want-do-btn','',item.g0?'active':'']" :key="index" v-for="(item, index) in $root.l0">{{ item }}</view>
                </view>
            </view>
        </view>
        <view class="form-btn" @click="submitForm($event)">确定</view>
    </view>
    <date-range-picker activeBgColor="rgba(188,65,245,0.4)" activeColor="#ffffff" class=" vue-ref" ref="datePicker" mode="range" rangeBgColor="rgba(188,65,245,0.1)" rangeColor="#ffffff" :value="showDateRangePicker" @change="handleDateChange()" @input="showDateRangePicker = $event"></date-range-picker>
    <uni-popup class=" vue-ref" ref="travelersPopup" type="bottom" :vueSlots="['default']" @maskClick="confirmTravelers()">
        <view class="travelers-popup">
            <view class="popup-header">
                <text class="popup-title">选择出行人数</text>
                <text class="popup-confirm" @click="confirmTravelers($event)">确定</text>
            </view>
            <view class="popup-content">
                <view class="traveler-row">
                    <text class="traveler-label">成人</text>
                    <view class="number-control">
                        <view class="control-btn" @click="changeTravelerCount('adult', -1)">-</view>
                        <u-input class="number-input" :clearable="false" inputAlign="center" :maxlength="2" type="text" :value="formData.adult" @input="formData.adult = $event; handleTravelerInput('adult', $event)"></u-input>
                        <view class="control-btn" @click="changeTravelerCount('adult', 1)">+</view>
                    </view>
                </view>
                <view class="traveler-row">
                    <text class="traveler-label">儿童</text>
                    <view class="number-control">
                        <view class="control-btn" @click="changeTravelerCount('children', -1)">-</view>
                        <u-input class="number-input" :clearable="false" inputAlign="center" :maxlength="2" type="text" :value="formData.children" @input="formData.children = $event; handleTravelerInput('children', $event)"></u-input>
                        <view class="control-btn" @click="changeTravelerCount('children', 1)">+</view>
                    </view>
                </view>
                <view class="traveler-row">
                    <text class="traveler-label">老人</text>
                    <view class="number-control">
                        <view class="control-btn" @click="changeTravelerCount('older', -1)">-</view>
                        <u-input class="number-input" :clearable="false" inputAlign="center" :maxlength="2" type="text" :value="formData.older" @input="formData.older = $event; handleTravelerInput('older', $event)"></u-input>
                        <view class="control-btn" @click="changeTravelerCount('older', 1)">+</view>
                    </view>
                </view>
            </view>
            <view class="popup-tips">*儿童1.2米以下免费，1.2-1.4米半价，老人65+免票，军人优待证全免，但不同景区有不同的规则具体请前往官方平台核实!</view>
        </view>
    </uni-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            name: "formPage",
            components: {
              DateRangePicker: function() {
                a.e("union/pages/aiTravel/components/dateRangePicker").then(function() {
                  return resolve(a("b363"))
                }.bind(null, a)).catch(a.oe)
              }
            },
            data: function() {
              return {
                formData: {
                  city: "",
                  beginTime: "",
                  endTime: "",
                  adult: 1,
                  children: 0,
                  older: 0,
                  budget: "",
                  budgetType: 1,
                  wantDO: [],
                  origin: 2
                },
                aiBudget: 0,
                showAIBudget: !1,
                cachedBudgetPerDay: {
                  adult: 0,
                  child: 0,
                  older: 0
                },
                cityColumns: [
                  ["西安市", "宝鸡市", "咸阳市", "渭南市", "铜川市", "延安市", "榆林市", "汉中市", "安康市", "商洛市"]
                ],
                cityIndex: 0,
                showDateRangePicker: !1,
                purpleButtonStyle: {
                  background: "linear-gradient( 90deg, #AD97FF 0%, #D988FF 100%) !important",
                  border: "none !important",
                  color: "#fff",
                  width: "118rpx",
                  height: "64rpx"
                },
                tempInterestPoint: null,
                wantDoOptions: [],
                cityOptions: []
              }
            },
            onLoad: function(e) {
              var a = this;
              if (e.departureTime && e.returnTime) {
                var n = decodeURIComponent(e.departureTime),
                  o = decodeURIComponent(e.returnTime),
                  r = new Date(n),
                  s = new Date(o).getTime() - r.getTime();
                Math.ceil(s / 864e5) > 5 ? uni.showToast({
                  title: "旅行时间请不要超过5天",
                  icon: "none"
                }) : (this.formData.beginTime = n, this.formData.endTime = o, this.reStartTime = n, this.reEndTime = o, this.$refs.datePicker.simulateSelectRange(this.reStartTime, this.reEndTime))
              } else e.departureTime && (this.formData.beginTime = decodeURIComponent(e.departureTime), this.reStartTime = decodeURIComponent(e.departureTime)), e.returnTime && (this.formData.endTime = decodeURIComponent(e.returnTime), this.reEndTime = decodeURIComponent(e.returnTime));
              if (e.destination && (this.formData.city = decodeURIComponent(e.destination)), e.interestPoint) {
                var d = decodeURIComponent(e.interestPoint);
                this.formData.wantDO = [d], this.tempInterestPoint = d, this.interestPointFromOption = d
              }
              if (e.budget) {
                var c = decodeURIComponent(e.budget);
                parseInt(c) > 5e4 ? uni.showToast({
                  title: "预算金额请不要超过50000元",
                  icon: "none"
                }) : this.formData.budget = c
              }
              if (e.change) {
                var u = decodeURIComponent(e.change);
                this.formData.change = u
              }
              var l = 0;
              e.adult && (l += parseInt(decodeURIComponent(e.adult)) || 0);
              e.children && (l += parseInt(decodeURIComponent(e.children)) || 0);
              e.older && (l += parseInt(decodeURIComponent(e.older)) || 0);
              l > 8 ? uni.showToast({
                title: "出行人数请不要超过8人",
                icon: "none"
              }) : (e.adult && (this.formData.adult = decodeURIComponent(e.adult)), e.children && (this.formData.children = decodeURIComponent(e.children)), e.older && (this.formData.older = decodeURIComponent(e.older))), e.school && (uni.getStorageSync("wxopenid") ? this.bindSchool(e.school) : this.getOpenId().then((function(n) {
                uni.setStorageSync("unionid", n.unionid), uni.setStorageSync("wxopenid", n.openid), a.bindSchool(e.school)
              }))), this.$nextTick((function() {
                if (a.reStartTime && a.reEndTime && a.$refs.datePicker) {
                  var t = a.reStartTime.split("-").map(Number),
                    e = (0, i.default)(t, 3),
                    n = e[0],
                    o = e[1],
                    r = e[2],
                    s = a.reEndTime.split("-").map(Number),
                    d = (0, i.default)(s, 3),
                    c = d[0],
                    u = d[1],
                    l = d[2];
                  a.$refs.datePicker.year = n, a.$refs.datePicker.month = o, a.$refs.datePicker.changeData();
                  var m = r - 1,
                    h = l - 1;
                  a.$refs.datePicker.dateClick(m), a.reStartTime !== a.reEndTime && (n === c && o === u || (a.$refs.datePicker.year = c, a.$refs.datePicker.month = u, a.$refs.datePicker.changeData()), a.$refs.datePicker.dateClick(h))
                }
              })), this.getWantList(), this.getCityList(), this.recalcAIBudget()
            },
            methods: {
              getWantList: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("get", "ai/interestPoint/list?type=0").then((function(e) {
                  if (1 === e.code) {
                    var a = e.data || [];
                    a = a.map((function(t) {
                      return t.name
                    })), t.tempInterestPoint && !a.includes(t.tempInterestPoint) && a.unshift(t.tempInterestPoint), t.wantDoOptions = a
                  }
                }))
              },
              bindSchool: function(e) {
                this.$uniApi.dataRequestNoLoading("POST", "ai/bindSchool/add", {
                  schoolName: e,
                  openId: uni.getStorageSync("wxopenid")
                }).then((function(t) {}))
              },
              getOpenId: function() {
                return new Promise((function(e, a) {
                  t.login({
                    success: function(n) {
                      t.request({
                        url: getApp().globalData.requestUrl + "manager/app/v1/wxPopular/getSessionKeyPro/".concat(n.code),
                        method: "GET",
                        success: function(t) {
                          1 === t.data.code ? e(t.data.data) : a(t)
                        },
                        fail: function(t) {
                          a(t)
                        }
                      })
                    }
                  })
                }))
              },
              getCityList: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("get", "ai/interestPoint/list?type=1").then((function(e) {
                  if (1 === e.code) {
                    var a = e.data || [];
                    t.cityOptions = a.map((function(t) {
                      return t.name
                    }))
                  }
                }))
              },
              bindPickerChange: function(t) {
                this.cityIndex = t.detail.value, this.formData.city = this.cityColumns[0][this.cityIndex]
              },
              openDatePicker: function() {
                this.showDateRangePicker = !0
              },
              handleDateChange: function(t) {
                this.formData.beginTime = t.startDate, this.formData.endTime = t.endDate, this.recalcAIBudget()
              },
              openTravelersPopup: function() {
                this.$refs.travelersPopup.open()
              },
              confirmTravelers: function() {
                this.formData.adult && "" !== this.formData.adult || (this.formData.adult = "1"), this.formData.children && "" !== this.formData.children || (this.formData.children = "0"), this.formData.older && "" !== this.formData.older || (this.formData.older = "0"), this.$refs.travelersPopup.close(), this.recalcAIBudget()
              },
              changeTravelerCount: function(e, a) {
                var n = parseInt(this.formData[e], 10) || 0,
                  i = n + a,
                  o = (parseInt(this.formData.adult, 10) || 0) + (parseInt(this.formData.children, 10) || 0) + (parseInt(this.formData.older, 10) || 0) - n + i;
                i >= 0 && o <= 8 ? (this.formData[e] = String(i), this.recalcAIBudget()) : i < 0 ? uni.showToast({
                  title: "人数不能少于0",
                  icon: "none"
                }) : o > 8 && uni.showToast({
                  title: "总人数不能超过8人",
                  icon: "none"
                })
              },
              handleTravelerInput: function(e, a) {
                var n = this,
                  i = /[^\d]/g;
                console.log(this.formData[e]), this.$nextTick((function() {
                  var o = a.replace(i, ""),
                    r = parseInt(o) || 0,
                    s = (parseInt(n.formData.adult, 10) || 0) + (parseInt(n.formData.children, 10) || 0) + (parseInt(n.formData.older, 10) || 0) - (parseInt(n.formData[e], 10) || 0),
                    d = s + r;
                  if (r < 0) n.formData[e] = "0", uni.showToast({
                    title: "人数不能少于0",
                    icon: "none"
                  });
                  else if (d > 8) {
                    var c = 8 - s;
                    n.formData[e] = String(Math.max(0, c)), uni.showToast({
                      title: "总人数不能超过8人",
                      icon: "none"
                    })
                  } else n.formData[e] = o;
                  n.recalcAIBudget()
                }))
              },
              handleBudgetInput: function(t) {
                var e = this,
                  a = /[^\d]/g;
                this.$nextTick((function() {
                  e.formData.budget = t.detail.value.replace(a, "")
                }))
              },
              setBudgetType: function(t) {
                this.formData.budgetType = t, this.recalcAIBudget(!1)
              },
              setTravelType: function(t) {
                switch (t) {
                  case "family":
                    this.formData.adult = 2, this.formData.children = 1, this.formData.older = 0;
                    break;
                  case "couple":
                    this.formData.adult = 2, this.formData.children = 0, this.formData.older = 0;
                    break;
                  case "full":
                    this.formData.adult = 2, this.formData.children = 1, this.formData.older = 2
                }
                this.recalcAIBudget()
              },
              setTravelCity: function(t) {
                this.formData.city = t
              },
              toggleWantDo: function(t) {
                var e = this.formData.wantDO.indexOf(t);
                e > -1 ? this.formData.wantDO.splice(e, 1) : this.formData.wantDO.push(t)
              },
              submitForm: function() {
                if (this.formData.city)
                  if (this.formData.beginTime && this.formData.endTime)
                    if (this.formData.budget)
                      if (Number(this.formData.budget) <= 0) uni.showToast({
                        title: "请输入大于0的预算金额",
                        icon: "none"
                      });
                      else {
                        var e = (parseInt(this.formData.adult) || 0) + (parseInt(this.formData.children) || 0) + (parseInt(this.formData.older) || 0);
                        if (2 === this.formData.budgetType) {
                          if (Number(this.formData.budget) < 100) return void uni.showToast({
                            title: "人均预算不能少于100元",
                            icon: "none"
                          })
                        } else if (1 === this.formData.budgetType) {
                          var a = 100 * e;
                          if (Number(this.formData.budget) < a) return void uni.showToast({
                            title: "总预算不能少于".concat(a, "元"),
                            icon: "none"
                          })
                        }
                        1 === this.formData.budgetType && +this.formData.budget > 5e4 ? uni.showToast({
                          title: "金额过大，请输入小于50000的价格",
                          icon: "none"
                        }) : 2 === this.formData.budgetType && +this.formData.budget > 1e4 ? uni.showToast({
                          title: "金额过大，请输入小于10000的人均价格",
                          icon: "none"
                        }) : !(this.formData.adult || this.formData.children || this.formData.older) || 0 == this.formData.adult && 0 == this.formData.children && 0 == this.formData.older ? uni.showToast({
                          title: "请至少选择一名旅游人次",
                          icon: "none"
                        }) : e > 8 ? uni.showToast({
                          title: "出行总人数不能超过8人",
                          icon: "none"
                        }) : (uni.setStorageSync("aiTravelFormData", this.formData), console.log(this.formData), uni.navigateTo({
                          url: "/union/pages/aiTravel2/titlePage"
                        }))
                      }
                else uni.showToast({
                  title: "请输入预算金额",
                  icon: "none"
                });
                else uni.showToast({
                  title: "请选择旅行时间",
                  icon: "none"
                });
                else uni.showToast({
                  title: "请选择目的地",
                  icon: "none"
                })
              },
              recalcAIBudget: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                  e = parseInt(this.formData.adult, 10) || 0,
                  a = parseInt(this.formData.children, 10) || 0,
                  n = parseInt(this.formData.older, 10) || 0,
                  i = e + a + n,
                  o = this.getTripDays(this.formData.beginTime, this.formData.endTime),
                  r = o > 0 && i > 0 && (1 === this.formData.budgetType || 2 === this.formData.budgetType);
                if (this.showAIBudget = !!r, r) {
                  var s, d, c;
                  t ? (s = this.randomInRange(350, 450), d = this.randomInRange(300, 350), c = this.randomInRange(300, 400), this.cachedBudgetPerDay = {
                    adult: s,
                    child: d,
                    older: c
                  }) : (s = this.cachedBudgetPerDay.adult, d = this.cachedBudgetPerDay.child, c = this.cachedBudgetPerDay.older);
                  var u = e * s + a * d + n * c,
                    l = u * o;
                  2 === this.formData.budgetType && i > 0 && (l /= i), this.aiBudget = Math.round(l), this.formData.budget = String(this.aiBudget)
                } else this.aiBudget = 0
              },
              randomInRange: function(t, e) {
                var a = Number(t),
                  n = Number(e);
                return isNaN(a) || isNaN(n) || n < a ? 0 : Math.round(a + Math.random() * (n - a))
              },
              getTripDays: function(t, e) {
                if (!t || !e) return 0;
                try {
                  var a = new Date(t.replace(/-/g, "/")).getTime(),
                    n = new Date(e.replace(/-/g, "/")).getTime();
                  return isNaN(a) || isNaN(n) || n < a ? 0 : Math.floor((n - a) / 864e5) + 1
                } catch (t) {
                  return 0
                }
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.container{background:url('https://eshopfile.zhiyousx.com/175668932530909047.png')no-repeat;background-size:100%auto;padding:374rpx 0 60rpx;width:100%}.form-content{padding:0 30rpx}.form-btn{background:linear-gradient(90deg,#ad97ff,#d988ff);border-radius:64rpx 64rpx 64rpx 64rpx;box-shadow:0rpx 8rpx 20rpx 0rpx rgba(128,86,255,.25);color:#fff;height:80rpx;line-height:80rpx;text-align:center;width:690rpx}.form-item{margin-bottom:30rpx}.form-item-label{color:rgba(0,0,0,.85);font-size:28rpx;font-weight:500;font-weight:700;line-height:40rpx;margin-bottom:12rpx}.form-item-label-2{color:rgba(0,0,0,.85);font-size:26rpx;line-height:38rpx;margin-bottom:12rpx}.select-btns{align-items:center;display:-webkit-flex;display:flex;margin-top:12rpx}.select-btns .select-btn{background:rgba(0,0,0,.04);border-radius:64rpx;color:#565656;font-size:26rpx;height:60rpx;line-height:60rpx;margin-right:20rpx;padding:0 20rpx;transition:all .3s ease}.form-select{background:rgba(0,0,0,.04);border-radius:64rpx;box-sizing:border-box;height:80rpx;padding:0 32rpx;width:100%}.form-select-content,.form-select{align-items:center;display:-webkit-flex;display:flex}.form-select-content{height:100%;justify-content:space-between;width:628rpx}.form-select-content .select-left-content{align-items:center;display:-webkit-flex;display:flex}.form-select-content .placeholder{color:rgba(51,51,51,.5)}.form-select-content .select-left-icon{flex-shrink:0;height:32rpx;margin-right:14rpx;width:32rpx}.form-select-content .select-right-icon{flex-shrink:0;height:28rpx;width:28rpx}.form-select-content .select-text{color:#1c1c1c;flex:1;font-size:26rpx;text-align:center}.recommend-budget{color:rgba(0,0,0,.65);font-size:24rpx;line-height:34rpx}.recommend-budget text{color:#8666fd}.budget-input{position:relative;width:100%}.budget-input .budget-input-native{background:hsla(0,0%,100%,.7);background:rgba(0,0,0,.04);border:none;border-radius:60rpx;box-sizing:border-box;color:#000;font-size:28rpx;height:80rpx;outline:none;padding:0 30rpx;width:100%}.budget-input .budget-unit{color:#666;font-size:28rpx;pointer-events:none;position:absolute;right:30rpx;top:50%;transform:translateY(-50%)}.budget-type-btn,.origin-type-btn{background:rgba(0,0,0,.04);border-radius:20rpx 20rpx 20rpx 20rpx;display:inline-block;margin-right:20rpx;padding:20rpx}.budget-type-btn .budget-type-btn-title,.budget-type-btn .origin-type-btn-title,.origin-type-btn .budget-type-btn-title,.origin-type-btn .origin-type-btn-title{align-items:center;color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;font-size:26rpx;line-height:36rpx}.budget-type-btn .budget-type-btn-title text,.budget-type-btn .origin-type-btn-title text,.origin-type-btn .budget-type-btn-title text,.origin-type-btn .origin-type-btn-title text{color:rgba(0,0,0,.65);font-size:20rpx;margin-left:8rpx}.budget-type-btn .budget-type-btn-desc,.budget-type-btn .origin-type-btn-desc,.origin-type-btn .budget-type-btn-desc,.origin-type-btn .origin-type-btn-desc{color:rgba(0,0,0,.65);font-size:20rpx;line-height:28rpx;margin-top:8rpx}.budget-type-btn.active,.origin-type-btn.active{background:linear-gradient(90deg,rgba(128,107,255,.2),rgba(188,65,245,.2))}.want-do-btns{display:-webkit-flex;display:flex;flex-wrap:wrap}.want-do-btns .want-do-btn{background:rgba(0,0,0,.04);border-radius:20rpx;color:rgba(0,0,0,.8);font-size:26rpx;height:60rpx;line-height:60rpx;margin:0 28rpx 20rpx 0;padding:0 24rpx}.want-do-btns .want-do-btn.active{background:linear-gradient(90deg,rgba(128,107,255,.2),rgba(188,65,245,.2))}.tips{color:rgba(51,51,51,.6);font-size:24rpx;line-height:32rpx;margin-top:12rpx}.travelers-popup{background:#fff;border-radius:24rpx 24rpx 0 0;padding:34rpx 40rpx 68rpx}.travelers-popup .popup-header{align-items:center;border-bottom:1rpx solid #eee;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:30rpx;padding-bottom:20rpx}.travelers-popup .popup-header .popup-title{color:#1c1c1c;font-size:32rpx;font-weight:700}.travelers-popup .popup-header .popup-confirm{color:#1c1c1c;font-size:28rpx}.travelers-popup .popup-content{padding:20rpx 0}.travelers-popup .popup-content .traveler-row{align-items:center;display:-webkit-flex;display:flex;margin-bottom:40rpx}.travelers-popup .popup-content .traveler-row .traveler-label{color:#76777e;font-size:32rpx}.travelers-popup .popup-content .traveler-row .number-control{align-items:center;display:-webkit-flex;display:flex;margin-left:36rpx}.travelers-popup .popup-content .traveler-row .number-control .control-btn{color:#4e5969;font-size:50rpx;height:50rpx;line-height:50rpx;text-align:center;width:50rpx}.travelers-popup .popup-content .traveler-row .number-control .number-input{background:#f6f0ff;border-radius:8rpx;font-size:28rpx;margin:0 20rpx;text-align:center;width:400rpx}.travelers-popup .popup-tips{color:#76777e;font-size:28rpx;line-height:42rpx}
</style>
