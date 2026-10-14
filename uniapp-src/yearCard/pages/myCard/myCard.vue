<template>
<view class="my-card">
    <uni-navbar class="" title="卡包" :titleCenter="false" type="transparentFixed"></uni-navbar>
    <view class="header-bg" :style="'background:'+bgStyle+';'">
        <view class="tab">
            <view :class="['',item.id===checkedTabId&&'checked']" :key="id" v-for="(item, __i0__) in tabList">{{ item.name }}</view>
        </view>
    </view>
    <view class="card" v-if="$root.g0">
        <view class="card-item" :key="userYearCardId" v-for="(item, __i1__) in list">
            <card class="" :info="item" :status="item.status" @reset="getList(checkedTabId)" @timedRefresh="timedRefresh()" @setStatus="changeTab()"></card>
        </view>
        <view class="footer">
            <view class="btn" @click="handleJump($event)">+ 购买年卡</view>
        </view>
    </view>
    <no-page class="" v-else></no-page>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              Card: function() {
                Promise.all([n.e("yearCard/common/vendor"), n.e("yearCard/pages/myCard/components/card")]).then(function() {
                  return resolve(n("de69"))
                }.bind(null, n)).catch(n.oe)
              },
              noPage: function() {
                n.e("yearCard/pages/myCard/components/noPage").then(function() {
                  return resolve(n("c0ad"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                tabList: d,
                checkedTabId: d[0].id,
                bgStyle: "linear-gradient(180deg,#ff5411 0%,rgba(255, 255, 255, 0) 100%)",
                list: [],
                timer: null
              }
            },
            onLoad: function(e) {
              e.tag && (this.checkedTabId = Number(e.tag)), e.timedRefresh && "1" === e.timedRefresh && this.timedRefresh()
            },
            onPageScroll: function(e) {
              this.scrollTop = e.scrollTop, this.scrollTop > 40 ? this.bgStyle = "#ffffff" : this.bgStyle = "linear-gradient(180deg,#ff5411 0%,rgba(255, 255, 255, 0) 100%)"
            },
            onShow: function() {
              this.getList(this.checkedTabId)
            },
            methods: {
              timedRefresh: function() {
                var e = this;
                this.timer && clearTimeout(this.timer), this.timer = setTimeout((function() {
                  e.getList(e.checkedTabId)
                }), 1e4)
              },
              changeTab: function(e) {
                this.checkedTabId = e, this.getList(e)
              },
              getList: function(t) {
                var n = this;
                return (0, c.default)(a.default.mark((function r() {
                  var i, c;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return i = {
                          status: t
                        }, r.next = 3, (0, o.getCardListApi)(i);
                      case 3:
                        if (1 === (c = r.sent).code) {
                          r.next = 6;
                          break
                        }
                        return r.abrupt("return", uni.showToast({
                          title: c.msg,
                          icon: "none"
                        }));
                      case 6:
                        n.list = c.data.map((function(e) {
                          return u(u({}, e), {}, {
                            effectiveStartDate: e.effectiveStartDate ? e.effectiveStartDate.replace(/-/g, "/") : "",
                            effectiveEndDate: e.effectiveEndDate ? e.effectiveEndDate.replace(/-/g, "/") : "",
                            createTime: e.createTime ? e.createTime.replace(/-/g, "/") : ""
                          })
                        }));
                      case 7:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              handleJump: function() {
                uni.navigateTo({
                  url: "/yearCard/pages/index/index"
                })
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.tab{align-items:center;color:#222;display:-webkit-flex;display:flex;font-size:28rpx;font-weight:400;height:100rpx;justify-content:space-around;line-height:33rpx;padding:0 40rpx}.tab .checked{color:#222;font-size:34rpx;font-weight:700;line-height:40rpx;position:relative;text-shadow:0 2px 1px rgba(0,0,0,.08)}.tab .checked::after{background-image:linear-gradient(253deg,rgba(255,84,17,0),#ff5411);border-radius:50rpx 50rpx 50rpx 50rpx;bottom:-5px;content:"";height:16rpx;position:absolute;right:0;width:100%}.divider{border-bottom:1rpx solid rgba(0,0,0,.05);display:inline-block;margin:30rpx 0;width:100%}.divider[type="dashed"]{border-bottom:1rpx dashed rgba(0,0,0,.05)}.unreal-header{background:#fff;box-shadow:0 0 10px 3px rgba(0,0,0,.05);display:-webkit-flex;display:flex;left:0;opacity:0;overflow:hidden;position:fixed;top:0;transition:all .3s linear;width:100%;z-index:30}.unreal-header .unreal-header-content{height:80rpx}.desc-explain-title{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:400;line-height:38rpx;margin-bottom:20rpx}.desc-explain-content{color:rgba(0,0,0,.7);font-size:26rpx;font-weight:400;line-height:40rpx}.red-btn{align-items:center;background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:40rpx 40rpx 40rpx 40rpx;color:#fff;display:-webkit-flex;display:flex;font-size:30rpx;font-weight:600;height:80rpx;justify-content:center;width:100%}.upload-user .upload-user-item .u-form-item{line-height:0!important}.upload-user .upload-image .u-border-bottom:after{border-bottom-width:0!important}.font-24{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400}.font-26{color:rgba(0,0,0,.8);font-size:26rpx;font-weight:400}.font-32{color:#333;font-size:32rpx;font-weight:400}.font-30{color:rgba(0,0,0,.8);font-size:30rpx;font-weight:400}.my-card .header-bg{background:linear-gradient(180deg,#ff5411,hsla(0,0%,100%,0));border-radius:0rpx 0rpx 0rpx 0rpx;box-shadow:0 0 10px 3px rgba(0,0,0,.05);display:-webkit-flex;display:flex;flex-direction:column-reverse;height:280rpx;position:-webkit-sticky;position:sticky;top:0;transition:all .3s linear;z-index:2}.my-card .card{padding-bottom:170rpx}.my-card .card .card-item{padding:30rpx 30rpx 0}.my-card .footer{background:#fff;bottom:0;box-shadow:0rpx -1rpx 0rpx 0rpx rgba(0,0,0,.25);height:160rpx;padding-bottom:30rpx;position:fixed}.my-card .footer .btn,.my-card .footer{align-items:center;display:-webkit-flex;display:flex;justify-content:center;width:100%}.my-card .footer .btn{color:#ff5411;font-size:30rpx;font-weight:600;height:100%;line-height:35rpx}
</style>
