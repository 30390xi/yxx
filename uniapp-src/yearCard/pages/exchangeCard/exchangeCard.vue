<template>
<view class="exchange-card">
    <custom-nav class="" muClass="nav-bg" :scrollTop="scrollTop" title="兑换绑定"></custom-nav>
    <view class="header">
        <view class="header-body">
            <view class="box">
                <view class="title">兑换绑定</view>
                <u-input class="input" :clearable="false" :height="86" placeholder="请输入兑换码" :value="code" @input="code = $event"></u-input>
                <view class="box-footer">
                    <view class="red-btn" @click="handleExchange($event)">确定</view>
                </view>
            </view>
        </view>
    </view>
    <view class="exchange-card-container">
        <view class="box">
            <view class="text" data-title="兑换细则">游陕西旅游年卡通过线下或网络渠道购买，需线上兑换后激活使用。年卡一卡仅对一人，请在年卡有效期前兑换并激活使用，过期作废。</view>
            <view class="divider"></view>
            <view class="" data-title="兑换流程">
                <view class="text" :key="index" v-for="(item, index) in flowPath">{{item}}</view>
            </view>
            <view class="divider"></view>
            <view class="" data-title="兑换说明">
                <view class="text" :key="index" v-for="(item, index) in review">{{item}}</view>
            </view>
        </view>
    </view>
    <exchange-module class="" :info="exchangeModuleInfo" :show="exchangeModuleShow" @updateShow="exchangeModuleShow = $event"></exchange-module>
    <exchange-result-module class="" :show="exchangeResultModuleShow" :tips="tips" @updateShow="exchangeResultModuleShow = $event"></exchange-result-module>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        components: {
          customNav: function() {
            Promise.all([n.e("yearCard/common/vendor"), n.e("yearCard/components/customNav")]).then(function() {
              return resolve(n("4105"))
            }.bind(null, n)).catch(n.oe)
          },
          exchangeModule: function() {
            n.e("yearCard/pages/exchangeCard/components/exchangeModule").then(function() {
              return resolve(n("38b5"))
            }.bind(null, n)).catch(n.oe)
          },
          exchangeResultModule: function() {
            n.e("yearCard/pages/exchangeCard/components/exchangeResultModule").then(function() {
              return resolve(n("bb4c"))
            }.bind(null, n)).catch(n.oe)
          }
        },
        data: function() {
          return {
            flowPath: ["1、打开微信，关注“游陕西”微信公众号，点击菜单“个人中心”—“旅游年卡”，点击“兑换绑定”；", "2、实体卡用户请刮开背面的兑换码涂层，输入兑换码兑换；网络渠道用户输入确认短信中兑换码兑换；", "3、点击“立即兑换”完成年卡兑换。"],
            review: ["1、用户通过“游陕西”小程序购买的年卡无需兑换；第三方渠道购买的年卡根据购买渠道的规则兑换；", "2、第三方渠道购买年卡生成的兑换码可复制后转发给他人使用；", "3、兑换年卡成功后，不可转发他人或用于再次兑换；", "4、如有任何问题，请致电4000292296。"],
            scrollTop: 0,
            exchangeModuleInfo: {},
            exchangeModuleShow: !1,
            exchangeResultModuleShow: !1,
            code: "",
            tips: "该兑换码已被使用/已过期",
            loading: !1
          }
        },
        onPageScroll: function(e) {
          this.scrollTop = e.scrollTop
        },
        methods: {
          handleExchange: (0, n("fa61").throttle)((0, o.default)(a.default.mark((function e() {
            var t;
            return a.default.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (this.code) {
                    e.next = 4;
                    break
                  }
                  return this.tips = "请输入兑换码", this.exchangeResultModuleShow = !0, e.abrupt("return");
                case 4:
                  if (!this.loading) {
                    e.next = 6;
                    break
                  }
                  return e.abrupt("return");
                case 6:
                  return e.prev = 6, this.loading = !0, e.next = 10, (0, u.getCardDetailApi)(this.code);
                case 10:
                  if (t = e.sent, this.loading = !1, 1 === t.code) {
                    e.next = 17;
                    break
                  }
                  return this.tips = t.msg, this.exchangeResultModuleShow = !0, this.code = "", e.abrupt("return");
                case 17:
                  this.exchangeModuleInfo = f(f({}, t.data), {}, {
                    effectiveStartDate: t.data.effectiveStartDate ? t.data.effectiveStartDate.replace(/-/g, "/") : "",
                    effectiveEndDate: t.data.effectiveEndDate ? t.data.effectiveEndDate.replace(/-/g, "/") : ""
                  }), this.exchangeModuleShow = !0, e.next = 24;
                  break;
                case 21:
                  e.prev = 21, e.t0 = e.catch(6), this.loading = !1;
                case 24:
                case "end":
                  return e.stop()
              }
            }), e, this, [
              [6, 21]
            ])
          }))))
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.exchange-card .nav-bg{background:linear-gradient(180deg,#ffbba0,hsla(0,0%,100%,0));border-radius:0rpx 0rpx 0rpx 0rpx;height:392rpx}.tab{align-items:center;color:#222;display:-webkit-flex;display:flex;font-size:28rpx;font-weight:400;height:100rpx;justify-content:space-around;line-height:33rpx;padding:0 40rpx}.tab .checked{color:#222;font-size:34rpx;font-weight:700;line-height:40rpx;position:relative;text-shadow:0 2px 1px rgba(0,0,0,.08)}.tab .checked::after{background-image:linear-gradient(253deg,rgba(255,84,17,0),#ff5411);border-radius:50rpx 50rpx 50rpx 50rpx;bottom:-5px;content:"";height:16rpx;position:absolute;right:0;width:100%}.divider{border-bottom:1rpx solid rgba(0,0,0,.05);display:inline-block;margin:30rpx 0;width:100%}.divider[type="dashed"]{border-bottom:1rpx dashed rgba(0,0,0,.05)}.unreal-header{background:#fff;box-shadow:0 0 10px 3px rgba(0,0,0,.05);display:-webkit-flex;display:flex;left:0;opacity:0;overflow:hidden;position:fixed;top:0;transition:all .3s linear;width:100%;z-index:30}.unreal-header .unreal-header-content{height:80rpx}.desc-explain-title{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:400;line-height:38rpx;margin-bottom:20rpx}.desc-explain-content{color:rgba(0,0,0,.7);font-size:26rpx;font-weight:400;line-height:40rpx}.red-btn{align-items:center;background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:40rpx 40rpx 40rpx 40rpx;color:#fff;display:-webkit-flex;display:flex;font-size:30rpx;font-weight:600;height:80rpx;justify-content:center;width:100%}.upload-user .upload-user-item .u-form-item{line-height:0!important}.upload-user .upload-image .u-border-bottom:after{border-bottom-width:0!important}.font-24{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400}.font-26{color:rgba(0,0,0,.8);font-size:26rpx;font-weight:400}.font-32{color:#333;font-size:32rpx;font-weight:400}.font-30{color:rgba(0,0,0,.8);font-size:30rpx;font-weight:400}.exchange-card{padding-bottom:1rpx}.exchange-card .header{margin-top:50rpx;position:relative}.exchange-card .header .header-body{padding:0 30rpx;width:100%}.exchange-card .header .header-body .box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:space-between}.exchange-card .header .header-body .title{color:rgba(0,0,0,.8);font-size:36rpx;font-weight:700;line-height:46rpx;margin-bottom:30rpx;margin-top:20rpx}.exchange-card .header .header-body .input{background:#fafafa;border-radius:6rpx;width:100%}.exchange-card .header .header-body .box-footer{padding-top:50rpx;width:100%}.exchange-card .box{background:#fff;border-radius:20rpx 20rpx 20rpx 20rpx;min-height:200rpx;padding:30rpx 20rpx}.exchange-card-container{margin:30rpx 30rpx 60rpx}.exchange-card-container .box{padding:30rpx}.exchange-card-container .box .text{color:rgba(0,0,0,.7);font-size:26rpx;font-weight:400;line-height:38rpx;margin-top:15rpx}.exchange-card-container .box view[data-title]{margin-top:65rpx;position:relative}.exchange-card-container .box view[data-title]::before{color:rgba(0,0,0,.8);content:attr(data-title);font-size:32rpx;font-weight:400;left:0;line-height:38rpx;position:absolute;top:-65rpx}
</style>
