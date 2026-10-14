<template>
<view class="u-wrap">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="fixHeader" id="fixHeader" :style="'background:'+'rgba(245, 70, 52,'+scrollTop/(navtop2-fixednavTop)+')'+';'+'padding-top:'+searchHeight+2+'px'+';'">
        <image class="rank" src="https://eshopfile.zhiyousx.com/2022010918475939610.png" :style="'opacity:'+(scrollTop>navtop2-fixednavTop?1:0)+';'"></image>
    </view>
    <view class="headerInfo">
        <image class="bgimg" mode="aspectFill" src="https://eshopfile.zhiyousx.com/2022051812054144670.jpg"></image>
    </view>
    <view :class="['nav','',showType==3?'navH':'']" id="nav" :style="'top:'+skHeight+'px'+';'">
        <view class="menu default" id="menu">
            <view class="type hot active">今日热门</view>
        </view>
        <view class="todayList" v-if="showType==3"></view>
    </view>
    <view class="container">
        <view class="spot-item" v-for="(spot, index) in $root.l0">
            <view class="imagebox">
                <view class="mainimg">
                    <image class="" mode="aspectFill" :src="spot.defaultPicUrl"></image>
                </view>
                <view class="info">
                    <view class="name multilineText2">{{spot.itemTitle}}</view>
                    <view class="btn unsale" v-if="spot.sellOut==1">{{'已'+(spot.skuItemType==1?'约满':'售空')}}</view>
                    <block v-else>
                        <view class="btn unsale" v-if="spot.listStatus==2">已下架</view>
                        <block v-else>
                            <view class="btn emptys" v-if="spot.stockStatus==0">{{spot.skuItemType==1?'约满':'售空'}}</view>
                            <view class="btn" v-else>{{'预'+(spot.skuItemType==1?'约':'订')}}</view>
                        </block>
                    </block>
                    <view class="salesNum">{{'已'+(spot.skuItemType==1?'约':'售')+spot.f0}}</view>
                    <view class="distance" v-if="spot.scenicName">
                        <image class="" src="../../static/images/loc.png"></image>{{ spot.scenicName+(spot.scenicNum&spot.scenicNum>1?'等'+spot.scenicNum+'个景区':'') }}</view>
                    <view class="price">
                        <block v-if="spot.skuItemType==1&&spot.isFree==1">免费</block>
                        <block v-else>{{'￥'+spot.marketPrice+''}}<text class="" v-if="spot.retailPrice&&spot.retailPrice>spot.marketPrice">{{'￥'+spot.retailPrice}}</text>
                        </block>
                    </view>
                </view>
            </view>
        </view>
        <view class="noinfo" v-if="!preferentialList[0]">
            <image class="noGoods" mode="widthFix" src="/static/captured/51d17a011d27445c.png"></image>
            <view class="">暂无信息</view>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              ani: {},
              size: 10,
              spotList: [],
              spotIncomeList: [],
              preferentialList: [],
              loading: !1,
              fixednavTop: 0,
              fixNavTop: 90,
              skHeight: 0,
              unit: 0,
              timeType: 7,
              searchHeight: 0,
              scrollTop: 0,
              navtop2: 0,
              fixedstyle: "",
              cityId: "",
              cityPage: 1,
              incomePage: 1,
              shareId: "",
              listTab: [],
              listTab2: [{
                name: "近1周",
                val: 7
              }, {
                name: "近1月",
                val: 30
              }],
              timeindex: 0,
              showType: 3,
              cityIndex: 0,
              preferentialPage: 1,
              activeStyle: {
                "font-weight": "bold",
                "z-index": "1",
                "font-size": "28rpx",
                color: "#222222"
              },
              itemStyle: {
                "font-size": "26rpx",
                color: "#555555"
              },
              inactiveStyle: {
                "font-size": "26rpx",
                color: "#555555"
              },
              barStyle: {
                background: "linear-gradient(90deg, #FE581E 0%, rgba(254, 88, 30, 0) 100%)",
                "border-radius": "10px",
                position: "absolute"
              }
            }
          },
          onLoad: function(t) {
            var n = this;
            this.shareId = t.shareId || "";
            var i = uni.getMenuButtonBoundingClientRect();
            this.searchHeight = i.top, uni.getSystemInfo({
              success: function(e) {
                n.unit = 750 / e.screenWidth, n.fixNavTop = parseInt(i.top + 80 / n.unit)
              }
            }), uni.getSystemInfoSync().statusBarHeight, this.userInfo && this.userInfo.isFenxiao || (uni.hideShareMenu(), this.showType = 3), this.getDomInfo().then((function(e) {
              n.fixednavTop = e[1].height - parseInt(68 / n.unit), n.navtop2 = e[0].top, n.skHeight = e[1].height - e[0].height
            })), uni.showLoading(), this.getPreferentialTicketList()
          },
          onPageScroll: function(e) {
            this.scrollTop = e.scrollTop
          },
          onReachBottom: function() {
            this.preferentialPage++, this.getPreferentialTicketList()
          },
          onShareAppMessage: function() {
            var e = "/subPage/pages/hotArea/hotArea?shareId=".concat(this.userInfo.memberId);
            return {
              title: "游陕西爆款景区优惠门票，快来抢购呀~",
              path: this.$util.setShareUrl(e),
              imageUrl: "https://eshopfile.zhiyousx.com/2022011114370811770.png"
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            todetail: function(e) {
              if (2 != e.listStatus)
                if (0 != e.stockStatus && 1 != e.sellOut) {
                  if (0 == e.productType) {
                    var t = this.shareId ? "&distributorId=".concat(this.shareId) : "";
                    this.$navigateTo({
                      url: "/subPage/pages/goods_details/goods_details?itemId=" + e.itemId + t
                    })
                  }
                  if (1 == e.productType) {
                    var n = this.shareId ? "&shareId=".concat(this.shareId) : "";
                    this.$navigateTo({
                      url: "/subPage/pages/ticket_detail/ticket_detail?itemId=".concat(e.itemId) + n
                    })
                  }
                } else {
                  var i = 1 == e.skuItemType ? "已约满" : "已售空";
                  this.$uni.showToast(i)
                }
              else this.$uni.showToast("已下架")
            },
            init: function() {
              var t = this;
              this._inited || uni.createSelectorQuery().selectAll("#c1").node((function(n) {
                n[0].node;
                var i = e.createCanvasContext("c1", t);
                i.canvas = {
                  width: 100,
                  height: 100
                };
                var a = LoadingJson;
                t.ani = lottie.loadAnimation({
                  renderer: "canvas",
                  loop: !0,
                  autoplay: !0,
                  animationData: a,
                  rendererSettings: {
                    context: i,
                    clearCanvas: !0
                  }
                }), setTimeout((function() {
                  t.ani.play()
                }), 2e3), t._inited = !0
              })).exec()
            },
            getPreferentialTicketList: function() {
              var t = this,
                n = this,
                i = {
                  current: this.preferentialPage,
                  size: 10
                };
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/itemPreferential/queryPreferentialTicketPage", i).then((function(i) {
                i.data[0] ? n.preferentialList = n.preferentialList.concat(i.data) : 3 == t.showType && t.$uni.showToast("没有更多了"), uni.hideLoading(), n.loading = !1
              })).catch((function(t) {
                uni.hideLoading(), n.loading = !1, uni.showToast({
                  title: "error",
                  icon: "none"
                })
              }))
            },
            pageTo: function(e) {
              this.$navigateTo({
                url: "../ranking/ranking?id=" + e.id
              })
            },
            changeShowType: function(e) {
              this.showType = e
            },
            getDomInfo: function() {
              var t = this;
              return new Promise((function(n) {
                setTimeout((function() {
                  t.$nextTick((function() {
                    var t = uni.createSelectorQuery();
                    t.select("#menu").boundingClientRect(), t.select("#fixHeader").boundingClientRect(), t.exec((function(e) {
                      n(e)
                    }))
                  }))
                }), 500)
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background-color:#fff}.u-wrap{background-color:#fff;min-height:100vh}.u-wrap .fixHeader{left:0;padding-bottom:89rpx;position:fixed;top:0;width:750rpx;z-index:11}.u-wrap .fixHeader .rank{height:50rpx;margin-left:106rpx;transition:all .3s linear;width:200rpx}.u-wrap .navH{height:72rpx!important}.u-wrap .nav{height:170rpx;margin-top:-170rpx;position:-webkit-sticky;position:sticky;width:100%;z-index:12}.u-wrap .nav .menu{background:url('https://eshopfile.zhiyousx.com/2022010916291232099.png')50%no-repeat;background-size:100% 100%;display:-webkit-flex;display:flex;height:70rpx;position:relative;width:750rpx}.u-wrap .nav .menu.default{background:none!important}.u-wrap .nav .menu .type{color:#996252;font-size:28rpx;height:70rpx;line-height:80rpx;position:absolute;text-align:center;width:300rpx}.u-wrap .nav .menu .type.hot{left:0;top:0}.u-wrap .nav .menu .type.pre{left:225rpx;top:0}.u-wrap .nav .menu .type.get{right:0;top:0}.u-wrap .nav .menu .type.active{background:url('https://eshopfile.zhiyousx.com/2022010916362197377.png')50%no-repeat;background-size:100% 100%;color:#f94f08;font-size:32rpx;font-weight:700;z-index:10}.u-wrap .nav .citylist{align-items:center;background:#fff;display:-webkit-flex;display:flex;height:100rpx;padding-left:10rpx}.u-wrap .nav .todayList{background:#fff;height:2rpx}.u-wrap .container{min-height:100vh;padding:30rpx 40rpx}.u-wrap .container .spot-item{position:relative}.u-wrap .container .spot-item .imagebox{display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:40rpx}.u-wrap .container .spot-item .imagebox .badge{background:url('https://eshopfile.zhiyousx.com/2021070215313612940.png')top no-repeat;background-size:100%;color:#fff;font-size:24rpx;font-weight:700;height:56rpx;left:18rpx;line-height:40rpx;position:absolute;text-align:center;text-indent:8rpx;top:-10rpx;width:52rpx;z-index:1}.u-wrap .container .spot-item .imagebox .badge.gold{background:url('https://eshopfile.zhiyousx.com/2021070215055222276.png')top no-repeat;background-size:100%}.u-wrap .container .spot-item .imagebox .badge.silver{background:url('https://eshopfile.zhiyousx.com/2021070215261647559.png')top no-repeat;background-size:100%}.u-wrap .container .spot-item .imagebox .badge.bronze{background:url('https://eshopfile.zhiyousx.com/2021070215274946950.png')top no-repeat;background-size:100%}.u-wrap .container .spot-item .imagebox .badge.small{font-size:20rpx;font-weight:400;height:60rpx;text-indent:6rpx;width:56rpx}.u-wrap .container .spot-item .imagebox .mainimg{height:200rpx;width:200rpx}.u-wrap .container .spot-item .imagebox .mainimg image{border-radius:20rpx;height:100%;width:100%}.u-wrap .container .spot-item .imagebox .info{border-radius:20rpx;height:200rpx;position:relative;width:450rpx}.u-wrap .container .spot-item .imagebox .info .name{color:#333;font-size:32rpx;line-height:42rpx;margin-top:12rpx}.u-wrap .container .spot-item .imagebox .info .total{background:#ffe2d7;border-radius:6rpx;color:#828282;display:inline-block;font-size:24rpx;height:40rpx;line-height:40rpx;margin:10rpx 0;padding:0 12rpx}.u-wrap .container .spot-item .imagebox .info .total text{color:#ff5411;font-size:24rpx}.u-wrap .container .spot-item .imagebox .info .income{color:#4f4f4f;font-size:24rpx;margin-top:6rpx}.u-wrap .container .spot-item .imagebox .info .income text{color:#ff5411;font-size:26rpx}.u-wrap .container .spot-item .imagebox .info .salesNum{background:#f8f8f8;color:#999;display:inline-block;font-size:22rpx;margin-top:17rpx;padding:5rpx 15rpx}.u-wrap .container .spot-item .imagebox .info .btn{align-items:center;background:linear-gradient(253deg,#ff5413,#fc4a9b);border-radius:50rpx;bottom:4rpx;box-shadow:0 4rpx 2rpx 1rpx rgba(254,80,72,.2);color:#fff;display:-webkit-flex;display:flex;font-size:24rpx;height:60rpx;justify-content:center;min-width:160rpx;padding:20rpx;position:absolute;right:0}.u-wrap .container .spot-item .imagebox .info .btn.unsale{background:#ffc5c8}.u-wrap .container .spot-item .imagebox .info .btn.emptys{background:#d6d6d6;box-shadow:none}.u-wrap .container .spot-item .imagebox .info .distance{color:#777;font-size:24rpx;margin-top:12rpx}.u-wrap .container .spot-item .imagebox .info .distance image{height:22rpx;margin-right:10rpx;width:20rpx}.u-wrap .container .spot-item .imagebox .info .price{color:#ff5411;font-size:32rpx;font-weight:700;margin-top:10rpx}.u-wrap .container .spot-item .imagebox .info .price text{color:#a6a6a6;font-size:24rpx;font-weight:500;margin-left:20rpx;text-decoration:line-through}.u-wrap .container .spot-item .txt .title{color:#333;font-size:32rpx;font-weight:700;width:630rpx}.u-wrap .container .spot-item .txt .title text{background:linear-gradient(56deg,#fc4a9e,#ff5411);border-radius:10rpx;color:#fff;display:inline-block;font-size:20rpx;font-weight:700;height:32rpx;line-height:30rpx;margin-right:8rpx;margin-top:6rpx;text-align:center;vertical-align:7rpx;width:32rpx}.u-wrap .container .spot-item .txt .likeRate{margin-top:20rpx;position:relative}.u-wrap .container .spot-item .txt .likeRate text{display:inline-block}.u-wrap .container .spot-item .txt .likeRate .icon{background:#feac2c;border-radius:6rpx 18rpx 6rpx 18rpx;bottom:0;color:#fff;font-size:20rpx;height:36rpx;left:0;line-height:36rpx;position:absolute;text-align:center;width:80rpx}.u-wrap .container .spot-item .txt .likeRate .num{background:#ffefd5;border-radius:16rpx 6rpx 6rpx 16rpx;color:#ff5411;font-size:24rpx;font-weight:400;height:32rpx;padding:0 14rpx 0 92rpx}.u-wrap .container .spot-item .txt .subtitle{color:#777474;font-size:24rpx;margin-top:20rpx}.u-wrap .headerInfo{height:540rpx;position:relative;width:100%}.u-wrap .headerInfo .bgimg{height:440rpx;left:0;position:absolute;top:0;width:100%}.u-wrap .noinfo .noGoods{display:block;margin:50rpx auto;opacity:.5;width:300rpx}.u-wrap .noinfo view{color:#777;text-align:center}
</style>
