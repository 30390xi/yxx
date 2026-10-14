<template>
<view class="card-record">
    <uni-navbar :scrollTop="scrollTop" title="使用记录" :titleCenter="false" type="transparentFixed"></uni-navbar>
    <view class="unreal-header" :style="'opacity:'+bgStyle+';'+'padding:'+statusBarHeight+'px 96rpx 24rpx 24rpx'+';'">
        <view class="unreal-header-content"></view>
    </view>
    <view class="header-bg">
        <view class="card" :style="'background-image:'+'url('+baseInfo.image+')'+';'+'background-position:'+'center center'+';'+'background-size:'+'cover'+';'">
            <view class="card-body">
                <view class="card-body-title">{{baseInfo.scenicName||baseInfo.title}}</view>
                <view class="card-body-name" v-if="baseInfo.cardholderName">{{'持卡人：'+baseInfo.cardholderName+''}}</view>
                <view class="card-body-time" v-if="$root.g0>$root.g1">{{'有效期：'+$root.f0+'~'+$root.f1}}</view>
                <block v-else>
                    <view class="card-body-time" v-if="baseInfo.effectiveEndDate">{{'有效期至：'+$root.f2}}</view>
                </block>
            </view>
        </view>
    </view>
    <view class="tab">
        <view :class="[item.id===checkedTabId&&'checked']" :key="id" v-for="(item, __i0__) in tabList">{{ item.name }}</view>
    </view>
    <view class="card-record-body">
        <entry-record :info="useRecord" v-if="checkedTabId===1"></entry-record>
        <reservation-record :info="appointmentRecord" :showReappointBtn="baseInfo.status===3" :userYearCardId="baseInfo.userYearCardId" v-else @reset="getAppointmentRecord(baseInfo.userYearCardId)"></reservation-record>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              EntryRecord: function() {
                n.e("yearCard/pages/cardRecord/components/entryRecord").then(function() {
                  return resolve(n("1dac"))
                }.bind(null, n)).catch(n.oe)
              },
              ReservationRecord: function() {
                n.e("yearCard/pages/cardRecord/components/reservationRecord").then(function() {
                  return resolve(n("c126"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                tabList: s,
                checkedTabId: 1,
                bgStyle: 0,
                statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
                useRecord: [],
                appointmentRecord: [],
                baseInfo: {}
              }
            },
            onLoad: function(e) {
              e.checkedTab && (this.checkedTabId = Number(e.checkedTab)), e.userYearCardId && (this.getUseRecord(e.userYearCardId), this.getAppointmentRecord(e.userYearCardId), this.getBaseInfo(e.userYearCardId))
            },
            onPageScroll: function(e) {
              this.scrollTop = e.scrollTop, this.scrollTop > 40 ? this.bgStyle = 1 : this.bgStyle = 0
            },
            methods: {
              changeTab: function(e) {
                this.checkedTabId = e
              },
              getUseRecord: function(t) {
                var n = this;
                return (0, o.default)(a.default.mark((function r() {
                  var c;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return r.next = 2, (0, u.getUseRecordApi)({
                          userYearCardId: t
                        });
                      case 2:
                        if (1 === (c = r.sent).code) {
                          r.next = 5;
                          break
                        }
                        return r.abrupt("return", uni.showToast({
                          title: c.msg,
                          icon: "none"
                        }));
                      case 5:
                        n.useRecord = c.data;
                      case 6:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              getAppointmentRecord: function(t) {
                var n = this;
                return (0, o.default)(a.default.mark((function r() {
                  var c;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return r.next = 2, (0, u.getAppointmentRecordApi)({
                          userYearCardId: t
                        });
                      case 2:
                        if (1 === (c = r.sent).code) {
                          r.next = 5;
                          break
                        }
                        return r.abrupt("return", uni.showToast({
                          title: c.msg,
                          icon: "none"
                        }));
                      case 5:
                        n.appointmentRecord = c.data.map((function(e) {
                          return i(i({}, e), {}, {
                            cWeek: (0, f.continueWeek)(e.dateCanUse),
                            cDays: (0, f.continueDays)(e.dateCannotUse)
                          })
                        }));
                      case 6:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              getBaseInfo: function(t) {
                var n = this;
                return (0, o.default)(a.default.mark((function r() {
                  var c;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return r.next = 2, (0, u.getBaseInfoApi)({
                          userYearCardId: t
                        });
                      case 2:
                        if (1 === (c = r.sent).code) {
                          r.next = 5;
                          break
                        }
                        return r.abrupt("return", uni.showToast({
                          title: c.msg,
                          icon: "none"
                        }));
                      case 5:
                        n.baseInfo = i(i({}, c.data), {}, {
                          effectiveStartDate: c.data.effectiveStartDate ? c.data.effectiveStartDate.replace(/-/g, "/") : "",
                          effectiveEndDate: c.data.effectiveEndDate ? c.data.effectiveEndDate.replace(/-/g, "/") : ""
                        });
                      case 6:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.tab{align-items:center;color:#222;display:-webkit-flex;display:flex;font-size:28rpx;font-weight:400;height:100rpx;justify-content:space-around;line-height:33rpx;padding:0 40rpx}.tab .checked{color:#222;font-size:34rpx;font-weight:700;line-height:40rpx;position:relative;text-shadow:0 2px 1px rgba(0,0,0,.08)}.tab .checked::after{background-image:linear-gradient(253deg,rgba(255,84,17,0),#ff5411);border-radius:50rpx 50rpx 50rpx 50rpx;bottom:-5px;content:"";height:16rpx;position:absolute;right:0;width:100%}.divider{border-bottom:1rpx solid rgba(0,0,0,.05);display:inline-block;margin:30rpx 0;width:100%}.divider[type="dashed"]{border-bottom:1rpx dashed rgba(0,0,0,.05)}.unreal-header{background:#fff;box-shadow:0 0 10px 3px rgba(0,0,0,.05);display:-webkit-flex;display:flex;left:0;opacity:0;overflow:hidden;position:fixed;top:0;transition:all .3s linear;width:100%;z-index:30}.unreal-header .unreal-header-content{height:80rpx}.desc-explain-title{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:400;line-height:38rpx;margin-bottom:20rpx}.desc-explain-content{color:rgba(0,0,0,.7);font-size:26rpx;font-weight:400;line-height:40rpx}.red-btn{align-items:center;background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:40rpx 40rpx 40rpx 40rpx;color:#fff;display:-webkit-flex;display:flex;font-size:30rpx;font-weight:600;height:80rpx;justify-content:center;width:100%}.upload-user .upload-user-item .u-form-item{line-height:0!important}.upload-user .upload-image .u-border-bottom:after{border-bottom-width:0!important}.font-24{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400}.font-26{color:rgba(0,0,0,.8);font-size:26rpx;font-weight:400}.font-32{color:#333;font-size:32rpx;font-weight:400}.font-30{color:rgba(0,0,0,.8);font-size:30rpx;font-weight:400}.card-record .unreal-header{background:#fff;box-shadow:0 0 10px 3px rgba(0,0,0,.05);display:-webkit-flex;display:flex;left:0;opacity:0;overflow:hidden;position:fixed;top:0;transition:all .3s linear;width:100%;z-index:10}.card-record .unreal-header .unreal-header-content{height:80rpx}.card-record .header-bg{background:linear-gradient(180deg,#ffbba0,hsla(0,0%,100%,0));border-radius:0rpx 0rpx 0rpx 0rpx;height:392rpx;position:relative;transition:background-color .5s linear;z-index:2}.card-record .header-bg .card{border-radius:20rpx;bottom:-108rpx;height:300rpx;left:0;margin:auto;position:absolute;right:0;width:600rpx}.card-record .header-bg .card .card-body{padding-left:50rpx}.card-record .header-bg .card .card-body-title{color:#fff;font-size:36rpx;font-weight:700;height:50rpx;line-height:50rpx;margin-top:50rpx;text-shadow:2px 2px 5px rgba(0,0,0,.3)}.card-record .header-bg .card .card-body-name{margin-top:30rpx}.card-record .header-bg .card .card-body-name,.card-record .header-bg .card .card-body-time{color:#fff;font-size:26rpx;font-weight:400;height:40rpx;line-height:40rpx;text-shadow:2px 2px 5px rgba(0,0,0,.3)}.card-record .header-bg .card .card-body-time{margin-top:10rpx}.card-record .tab{margin-top:138rpx;padding:0 100rpx}.card-record-body{padding:0 30rpx 30rpx}
</style>
