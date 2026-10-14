<template>
<view class="reservation-detail">
    <uni-navbar class="" :scrollTop="scrollTop" title="预约详情" :titleCenter="false" type="transparentFixed"></uni-navbar>
    <view class="unreal-header" :style="'opacity:'+opacity+';'+'padding:'+statusBarHeight+'px 96rpx 24rpx 24rpx'+';'">
        <view class="unreal-header-content"></view>
    </view>
    <view class="header-bg">
        <view class="card"></view>
    </view>
    <view class="reservation-detail-body">
        <view class="status-view">{{tabList[detailInfo.status]}}</view>
        <view class="detail-card" v-if="!isError">
            <scenic-spot class="" :info="detailInfo"></scenic-spot>
            <view class="divider" v-if="detailInfo.status===1"></view>
            <scenic-sport-code class="" :info="detailInfo" v-if="detailInfo.status===1"></scenic-sport-code>
        </view>
        <view class="detail-card">
            <view class="" data-title="使用说明">{{detailInfo.keyNotes||'--'}}</view>
            <view class="divider"></view>
            <view class="" data-title="退改说明">{{detailInfo.refundNotes||'--'}}</view>
        </view>
        <view class="detail-card">
            <view class="reservation" data-title="预约信息">
                <view class="" data-label="预约编号">{{ (detailInfo.orderSn||'--') }}<view class="copy-btn" @click="copy($event)">复制</view>
                </view>
                <view class="" data-label="下单时间">{{ (detailInfo.createOrderTime||'--') }}</view>
                <view class="" data-label="持卡信息">{{ (detailInfo.title||'--') }}</view>
            </view>
        </view>
        <view class="footer" v-if="detailInfo.status===1">
            <view class="btn" @click="e0($event)">取消预约</view>
        </view>
        <u-modal class="" content="是否取消预约?" :maskCloseAble="true" :showCancelButton="true" :value="show" @confirm="cancelReservation()" @input="show = $event"></u-modal>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              ScenicSportCode: function() {
                n.e("yearCard/pages/reservationDetail/components/scenicSportCode").then(function() {
                  return resolve(n("328c"))
                }.bind(null, n)).catch(n.oe)
              },
              ScenicSpot: function() {
                n.e("yearCard/pages/reservationDetail/components/scenicSpot").then(function() {
                  return resolve(n("a42c"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                opacity: 0,
                statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
                detailInfo: {},
                timer: null,
                query: {},
                isError: !1,
                tabList: l,
                show: !1
              }
            },
            onLoad: function(e) {
              this.query = e, this.getAppointmentDetail()
            },
            onPageScroll: function(e) {
              this.scrollTop = e.scrollTop, this.scrollTop > 40 ? this.opacity = 1 : this.opacity = 0
            },
            destroyed: function() {
              this.cleanup()
            },
            methods: {
              cancelReservation: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function n() {
                  var r, o, i, u, s;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return r = t.query, o = r.userYearCardId, i = r.orderId, u = {
                          orderSn: i,
                          userYearCardId: o
                        }, n.next = 4, (0, c.appointmentRefundApi)(u);
                      case 4:
                        if (1 === (s = n.sent).code) {
                          n.next = 7;
                          break
                        }
                        return n.abrupt("return", uni.showToast({
                          title: s.msg,
                          icon: "none"
                        }));
                      case 7:
                        uni.showToast({
                          title: "取消成功",
                          icon: "none"
                        }), uni.navigateTo({
                          url: "/yearCard/pages/cardRecord/cardRecord?userYearCardId=" + o + "&checkedTab=2"
                        });
                      case 9:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              cleanup: function() {
                clearInterval(this.timer)
              },
              initTimer: function() {
                var e = this;
                this.timer && this.cleanup(), this.timer = setInterval((function() {
                  e.getAppointmentDetail()
                }), 3e4)
              },
              getAppointmentDetail: function() {
                var t = this;
                return (0, i.default)(a.default.mark((function n() {
                  var r, o, i, s, l;
                  return a.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        if (r = t.query, o = r.userYearCardId, i = r.orderId, o && i) {
                          n.next = 3;
                          break
                        }
                        return n.abrupt("return");
                      case 3:
                        return n.next = 5, (0, c.getAppointmentDetailApi)({
                          userYearCardId: o,
                          orderSn: i
                        });
                      case 5:
                        if (1 === (s = n.sent).code) {
                          n.next = 9;
                          break
                        }
                        return t.isError = !0, n.abrupt("return", uni.showToast({
                          title: s.msg,
                          icon: "none"
                        }));
                      case 9:
                        t.isError = !1, l = s.data.verifyMode.reduce((function(e, t, n) {
                          return e + (0 !== n ? "或" : "") + "「" + f[t] + "」"
                        }), ""), t.detailInfo = d(d({}, s.data), {}, {
                          contactIdCard: (0, u.encryptionStr)(3, s.data.contactIdCard),
                          verifyModeName: l,
                          cWeek: (0, u.continueWeek)(s.data.dateCanUse),
                          cDays: (0, u.continueDays)(s.data.dateCannotUse)
                        }), 1 === t.detailInfo.useType && 4 === t.detailInfo.status ? t.initTimer() : t.timer && t.cleanup();
                      case 13:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              copy: function() {
                uni.setClipboardData({
                  data: this.detailInfo.orderSn,
                  success: function() {
                    uni.showToast({
                      title: "复制成功",
                      icon: "none"
                    })
                  }
                })
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.tab{align-items:center;color:#222;display:-webkit-flex;display:flex;font-size:28rpx;font-weight:400;height:100rpx;justify-content:space-around;line-height:33rpx;padding:0 40rpx}.tab .checked{color:#222;font-size:34rpx;font-weight:700;line-height:40rpx;position:relative;text-shadow:0 2px 1px rgba(0,0,0,.08)}.tab .checked::after{background-image:linear-gradient(253deg,rgba(255,84,17,0),#ff5411);border-radius:50rpx 50rpx 50rpx 50rpx;bottom:-5px;content:"";height:16rpx;position:absolute;right:0;width:100%}.divider{border-bottom:1rpx solid rgba(0,0,0,.05);display:inline-block;margin:30rpx 0;width:100%}.divider[type="dashed"]{border-bottom:1rpx dashed rgba(0,0,0,.05)}.unreal-header{background:#fff;box-shadow:0 0 10px 3px rgba(0,0,0,.05);display:-webkit-flex;display:flex;left:0;opacity:0;overflow:hidden;position:fixed;top:0;transition:all .3s linear;width:100%;z-index:30}.unreal-header .unreal-header-content{height:80rpx}.desc-explain-title{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:400;line-height:38rpx;margin-bottom:20rpx}.desc-explain-content{color:rgba(0,0,0,.7);font-size:26rpx;font-weight:400;line-height:40rpx}.red-btn{align-items:center;background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:40rpx 40rpx 40rpx 40rpx;color:#fff;display:-webkit-flex;display:flex;font-size:30rpx;font-weight:600;height:80rpx;justify-content:center;width:100%}.upload-user .upload-user-item .u-form-item{line-height:0!important}.upload-user .upload-image .u-border-bottom:after{border-bottom-width:0!important}.font-24{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400}.font-26{color:rgba(0,0,0,.8);font-size:26rpx;font-weight:400}.font-32{color:#333;font-size:32rpx;font-weight:400}.font-30{color:rgba(0,0,0,.8);font-size:30rpx;font-weight:400}.reservation-detail .header-bg{background:linear-gradient(180deg,#ffbba0,hsla(0,0%,100%,0));border-radius:0rpx 0rpx 0rpx 0rpx;height:392rpx;position:relative;transition:background-color .5s linear;z-index:2}.reservation-detail-body{padding:0 30rpx 150rpx;position:absolute;top:200rpx;width:100%;z-index:3}.reservation-detail-body .status-view{color:#222;font-size:40rpx;font-weight:500;line-height:47rpx;margin-bottom:40rpx}.reservation-detail-body view[data-title]{color:rgba(0,0,0,.5);font-size:26rpx;font-weight:400;line-height:34rpx;margin-top:65rpx;position:relative}.reservation-detail-body view[data-title]::before{color:rgba(0,0,0,.8);content:attr(data-title);font-size:32rpx;font-weight:400;left:0;line-height:38rpx;position:absolute;top:-65rpx}.reservation-detail-body view[data-label]{align-items:center;color:rgba(0,0,0,.5);display:table;font-size:26rpx;font-weight:400;line-height:30rpx;margin-left:134rpx;margin-top:20rpx;position:relative}.reservation-detail-body view[data-label]::before{color:rgba(0,0,0,.5);content:attr(data-label);font-size:26rpx;font-weight:400;left:-134rpx;line-height:30rpx;position:absolute;top:0}.reservation-detail-body view[data-label] .copy-btn{align-items:center;background:#f5f5f5;border-radius:6rpx;color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;font-size:24rpx;font-weight:400;height:50rpx;justify-content:center;position:absolute;right:-90rpx;top:-4px;width:80rpx}.reservation-detail .detail-card{background:#fff;border-radius:20rpx;margin-bottom:20rpx;padding:30rpx 20rpx}.reservation-detail .detail-card .divider{border-bottom:1rpx solid rgba(0,0,0,.05);display:inline-block;margin:30rpx 0;width:100%}.reservation-detail .footer{background:#fff;bottom:0;box-shadow:0rpx -10rpx 20rpx 0rpx rgba(0,0,0,.1);display:-webkit-flex;display:flex;height:130rpx;justify-content:flex-end;left:0;padding:10rpx 30rpx;position:fixed;width:100%;z-index:1}.reservation-detail .footer .btn{align-items:center;border:1px solid rgba(0,0,0,.3);border-radius:40rpx;color:rgba(0,0,0,.6);display:-webkit-flex;display:flex;font-size:28rpx;font-weight:500;height:80rpx;justify-content:center;width:192rpx}
</style>
