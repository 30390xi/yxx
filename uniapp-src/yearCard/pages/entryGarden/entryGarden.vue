<template>
<view class="entry-garden">
    <uni-navbar class="" title="核验入园" :titleCenter="false" type="transparentFixed"></uni-navbar>
    <view class="unreal-header" :style="'opacity:'+opacity+';'+'padding:'+statusBarHeight+'px 96rpx 24rpx 24rpx'+';'">
        <view class="unreal-header-content"></view>
    </view>
    <view class="header-bg">
        <view class="box-container">
            <scroll-view class="box-scroll" :scrollIntoView="'item'+currentCardIndex" :scrollWithAnimation="true" :scrollX="true">
                <view :class="['','box-item',currentCardIndex===index&&'checked']" :id="'item'+index" :style="'background-image:'+'url('+item.image+')'+';'+'background-position:'+'center center'+';'+'background-size:'+'cover'+';'" :key="index" v-for="(item, index) in swiperList">
                    <view class="box-item-title">{{item.title}}</view>
                    <view class="box-item-footer">
                        <image class="" src="https://eshopfile.zhiyousx.com/2023102709472199404.png"></image>
                        <text class="font-24">持卡人</text>
                        <text class="font-26" v-if="item.cardholderName">{{item.cardholderName}}</text>
                    </view>
                </view>
                <view class="add-item" @click="goHome($event)">
                    <view class="add-item-content">
                        <image class="" src="https://eshopfile.zhiyousx.com/2023103020440722066.png"></image>
                        <view class="add-item-text">再买一张</view>
                    </view>
                </view>
            </scroll-view>
        </view>
    </view>
    <view class="entry-garden-container">
        <view class="box" v-if="true">
            <verify-code class="" :info="detail"></verify-code>
        </view>
        <view class="box" v-else>
            <verify-success class=""></verify-success>
        </view>
        <view class="box desc-explain">
            <view class="desc-explain-title">使用说明</view>
            <u-parse class="" :html="detail.useDesc"></u-parse>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              verifyCode: function() {
                Promise.all([t.e("yearCard/common/vendor"), t.e("yearCard/pages/entryGarden/components/verifyCode")]).then(function() {
                  return resolve(t("2c7e"))
                }.bind(null, t)).catch(t.oe)
              },
              verifySuccess: function() {
                t.e("yearCard/pages/entryGarden/components/verifySuccess").then(function() {
                  return resolve(t("746d"))
                }.bind(null, t)).catch(t.oe)
              }
            },
            data: function() {
              return {
                swiperList: [],
                currentCardIndex: 0,
                opacity: 0,
                statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
                detail: {}
              }
            },
            onLoad: function(e) {
              this.getList(e.userYearCardId)
            },
            onPageScroll: function(e) {
              this.scrollTop = e.scrollTop, this.scrollTop > 40 ? this.opacity = 1 : this.opacity = 0
            },
            methods: {
              getList: function(n) {
                var t = this;
                return (0, o.default)(a.default.mark((function r() {
                  var o;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return r.next = 2, (0, u.getCardListApi)({
                          status: 3
                        });
                      case 2:
                        if (1 === (o = r.sent).code) {
                          r.next = 5;
                          break
                        }
                        return r.abrupt("return", uni.showToast({
                          title: o.msg,
                          icon: "none"
                        }));
                      case 5:
                        t.swiperList = o.data, n && (t.currentCardIndex = o.data.findIndex((function(e) {
                          return e.userYearCardId === n
                        }))), t.getDetail(o.data[t.currentCardIndex].userYearCardId);
                      case 8:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              getDetail: function(n) {
                var t = this;
                return (0, o.default)(a.default.mark((function r() {
                  var o;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return r.next = 2, (0, u.getYearCardDetailApi)({
                          userYearCardId: n
                        });
                      case 2:
                        if (1 === (o = r.sent).code) {
                          r.next = 5;
                          break
                        }
                        return r.abrupt("return", uni.showToast({
                          title: o.msg,
                          icon: "none"
                        }));
                      case 5:
                        t.detail = o.data;
                      case 6:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              handleClickCard: function(e) {
                this.currentCardIndex = e, this.getDetail(this.swiperList[this.currentCardIndex].userYearCardId)
              },
              goHome: function() {
                uni.navigateTo({
                  url: "/yearCard/pages/index/index"
                })
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.tab{align-items:center;color:#222;display:-webkit-flex;display:flex;font-size:28rpx;font-weight:400;height:100rpx;justify-content:space-around;line-height:33rpx;padding:0 40rpx}.tab .checked{color:#222;font-size:34rpx;font-weight:700;line-height:40rpx;position:relative;text-shadow:0 2px 1px rgba(0,0,0,.08)}.tab .checked::after{background-image:linear-gradient(253deg,rgba(255,84,17,0),#ff5411);border-radius:50rpx 50rpx 50rpx 50rpx;bottom:-5px;content:"";height:16rpx;position:absolute;right:0;width:100%}.divider{border-bottom:1rpx solid rgba(0,0,0,.05);display:inline-block;margin:30rpx 0;width:100%}.divider[type="dashed"]{border-bottom:1rpx dashed rgba(0,0,0,.05)}.unreal-header{background:#fff;box-shadow:0 0 10px 3px rgba(0,0,0,.05);display:-webkit-flex;display:flex;left:0;opacity:0;overflow:hidden;position:fixed;top:0;transition:all .3s linear;width:100%;z-index:30}.unreal-header .unreal-header-content{height:80rpx}.desc-explain-title{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:400;line-height:38rpx;margin-bottom:20rpx}.desc-explain-content{color:rgba(0,0,0,.7);font-size:26rpx;font-weight:400;line-height:40rpx}.red-btn{align-items:center;background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:40rpx 40rpx 40rpx 40rpx;color:#fff;display:-webkit-flex;display:flex;font-size:30rpx;font-weight:600;height:80rpx;justify-content:center;width:100%}.upload-user .upload-user-item .u-form-item{line-height:0!important}.upload-user .upload-image .u-border-bottom:after{border-bottom-width:0!important}.font-24{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400}.font-26{color:rgba(0,0,0,.8);font-size:26rpx;font-weight:400}.font-32{color:#333;font-size:32rpx;font-weight:400}.font-30{color:rgba(0,0,0,.8);font-size:30rpx;font-weight:400}.entry-garden .header-bg{background:linear-gradient(180deg,#ffbba0,hsla(0,0%,100%,0));border-radius:0rpx 0rpx 0rpx 0rpx;height:392rpx;position:relative}.entry-garden .header-bg .box-container{bottom:-70rpx;left:0;margin:auto;padding-left:30rpx;position:absolute;right:0}.entry-garden .header-bg .box-container .box-scroll{height:260rpx;overflow:scroll;white-space:nowrap;width:100%}.entry-garden .header-bg .box-container .box-scroll .box-item-title{color:#fff;font-size:28rpx;font-weight:700;height:39rpx;line-height:33rpx;margin:40rpx 34rpx 0;text-shadow:2px 2px 5px rgba(0,0,0,.3)}.entry-garden .header-bg .box-container .box-scroll .checked{border:1px solid #e9401c}.entry-garden .header-bg .box-container .box-scroll .checked .box-item-footer{background:linear-gradient(135deg,#ffcabe,#fff1ea)}.entry-garden .header-bg .box-container .box-scroll .checked .box-item-footer::after{background-image:url('https://eshopfile.zhiyousx.com/2023102709521561664.png');background-size:100% 100%;bottom:0;content:"";height:30rpx;position:absolute;right:0;width:30rpx}.entry-garden .header-bg .box-container .box-scroll .add-item{background:rgba(0,0,0,.05);border:1rpx dashed rgba(0,0,0,.5);border-radius:20rpx;box-shadow:inset 0rpx 0rpx 10rpx 0rpx hsla(0,0%,100%,.5);display:inline-block;height:100%;margin-right:30rpx;overflow:hidden;position:relative;width:260rpx}.entry-garden .header-bg .box-container .box-scroll .add-item-content{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:100%;justify-content:center}.entry-garden .header-bg .box-container .box-scroll .add-item-content image{height:42rpx;width:42rpx}.entry-garden .header-bg .box-container .box-scroll .add-item-content .add-item-text{color:rgba(0,0,0,.5);font-size:28rpx;font-weight:700;line-height:33rpx;margin-top:26rpx}.entry-garden .header-bg .box-container .box-scroll .box-item{background-repeat:no-repeat;border-radius:20rpx;display:inline-block;height:100%;margin-right:22rpx;overflow:hidden;position:relative;width:380rpx}.entry-garden .header-bg .box-container .box-scroll .box-item:last-child{margin-right:60rpx}.entry-garden .header-bg .box-container .box-scroll .box-item-footer{align-items:center;background:#fff;bottom:0;display:-webkit-flex;display:flex;height:70rpx;padding:10rpx;position:absolute;width:100%}.entry-garden .header-bg .box-container .box-scroll .box-item-footer image{height:24rpx;margin-right:5rpx;width:24rpx}.entry-garden .header-bg .box-container .box-scroll .box-item-footer text:last-child{margin-left:10rpx}.entry-garden-container{margin-top:100rpx;padding:0 30rpx}.entry-garden-container .box{background:#fff;border-radius:20rpx 20rpx 20rpx 20rpx;min-height:200rpx;padding:30rpx 20rpx}.entry-garden-container .box:last-child{margin-top:10rpx}
</style>
