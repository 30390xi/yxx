<template>
<view :class="['tab-container','',grayFilter==1?'grayFilter':'']">
    <view class="tab" :key="index" v-for="(item, index) in list">
        <image class="icon" :src="currentPath==item.pagePath?item.activePath:item.path"></image>
        <view :class="['text','singleLineText','',currentPath==item.pagePath?'active':'']">{{item.text}}</view>
    </view>
    <image class="tabBut" src="https://eshopfile.zhiyousx.com/index/tabBut1.gif" @click="getOpenid($event)"></image>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          created: function() {
            var t = getCurrentPages();
            this.currentPath = "/" + t[t.length - 1].route
          },
          props: {
            grayFilter: {
              type: Number,
              default: 0
            }
          },
          data: function() {
            return {
              currentPath: "/pages/index/index",
              list: [{
                pagePath: "/pages/index/index",
                path: "../../static/images/home.png",
                activePath: "https://eshopfile.zhiyousx.com/ftab/home_s.png",
                text: "首页",
                i: 0
              }, {
                pagePath: "/pages/spot_list/spot_list",
                path: "https://eshopfile.zhiyousx.com/170065339283805814.png",
                activePath: "https://eshopfile.zhiyousx.com/ftab/city-s.png",
                text: "目的地",
                i: 1
              }, {
                pagePath: "/pages/rankList/rankList",
                path: "https://eshopfile.zhiyousx.com/170065353217030384.png",
                activePath: "https://eshopfile.zhiyousx.com/ftab/rank-s.png",
                text: "游榜单",
                i: 2
              }, {
                pagePath: "/pages/mine/mine",
                path: "https://eshopfile.zhiyousx.com/170065347302937689.png",
                activePath: "https://eshopfile.zhiyousx.com/ftab/mine-s.png",
                text: "我的",
                i: 3
              }],
              ani: null,
              context: null,
              loaded: !1
            }
          },
          methods: {
            router: function(e) {
              this.$eventAnalyse.analyse({
                eventTag: "tabBar_click",
                eventName: "底部tabBar",
                eventParams: JSON.stringify({
                  name: e.text,
                  pagePath: e.pagePath
                })
              }), e.pagePath != this.currentPath && uni.switchTab({
                url: e.pagePath
              })
            },
            tofind: function() {
              this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?type=find"
              })
            },
            goAIServer: function() {
              var e = this;
              this.$eventAnalyse.analyse({
                eventTag: "tabBar_aiTravel_click",
                eventName: "底部旅行搭子tabBar点击",
                eventParams: JSON.stringify({
                  pagePath: "union/pages/aiTravel/index"
                })
              }), this.$uniApi.getRequestNoLoading("GET", "ai/planCard/queryRecent?openId=".concat(uni.getStorageSync("wxopenid"))).then((function(t) {
                1 === t.code && (t.data ? e.$navigateTo({
                  url: "/union/pages/aiTravel/historyList?sessionId=".concat(t.data.sessionId, "&source=home")
                }) : e.$navigateTo({
                  url: "/union/pages/aiTravel/index"
                }))
              }))
            },
            getOpenid: function() {
              var e = this;
              t.login({
                success: function(a) {
                  e.$uniApi.getRequestNoLoading("GET", "manager/app/v1/wxPopular/getSessionKeyPro/".concat(a.code)).then((function(a) {
                    1 === a.code ? (uni.setStorageSync("unionid", a.data.unionid), uni.setStorageSync("wxopenid", a.data.openid), e.unionid = a.data.unionid, e.wxopenid = a.data.openid, uni.navigateTo({
                      url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent("https://eshop.zhiyousx.com/dsmall-admin-ui/h5/transfer.html?unionid=" + e.unionid + "&wxopenid=" + e.wxopenid)
                    })) : e.$uni.showToast(a.msg)
                  })).catch((function(t) {
                    e.$uni.showToast(t.msg)
                  }))
                }
              })
            },
            jumpWeb: function() {
              this.$util.isLogin() && uni.navigateTo({
                url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent("https://eshop.zhiyousx.com/dsmall-admin-ui/h5/transfer.html?unionid=" + this.unionid + "&wxopenid=" + this.wxopenid)
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.grayFilter{-webkit-filter:grayscale(100%)}.tab-container{background:#fff;border-radius:50rpx;bottom:50rpx;box-shadow:5rpx 4rpx 50rpx 0 rgba(230,151,64,.3);display:-webkit-flex;display:flex;height:100rpx;left:75rpx;padding:0 56rpx;position:fixed;width:600rpx;z-index:999}.tab-container .tabBut{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:112rpx;justify-content:center;left:50%;margin-left:-75rpx;margin-top:-56rpx;position:absolute;top:50%;width:150rpx}.tab-container .tabBut image{height:46rpx;margin-top:-3rpx;width:46rpx}.tab-container .tabBut .btnText{color:#7d7d7d;font-size:20rpx;margin-top:4rpx}.tab-container .huatong{background:url('https://eshopfile.zhiyousx.com/2022022111592364759.png')50%no-repeat;background-size:100% 100%;bottom:10rpx;height:122rpx;left:50%;margin-left:-45rpx;position:absolute;width:90rpx}.tab-container .huatong .c{display:-webkit-flex;display:flex;height:100%;justify-content:center;position:relative;width:100%}.tab-container .huatong .c image{height:50rpx;margin-top:20rpx;width:50rpx}.tab-container .tab{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center;margin-left:60rpx;position:relative;width:65rpx}.tab-container .tab canvas{height:41rpx;width:44rpx}.tab-container .tab:first-child{margin-left:0}.tab-container .tab:nth-child(3){margin-left:160rpx}.tab-container .tab .icon{height:46rpx;width:46rpx}.tab-container .tab .text{color:#7d7d7d;font-size:20rpx}.tab-container .tab .text.active{color:#333}
</style>
