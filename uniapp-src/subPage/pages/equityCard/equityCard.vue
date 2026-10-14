<template>
<view class="page-box" v-if="showCardInfo.name">
    <view class="head-box">
        <scroll-view class="tab-box" :scrollLeft="scrollToLeft" scrollWithAnimation="true" :scrollX="true" :throttle="false">
            <view class="scroll-box">
                <view :class="['item','',index==currentTab?'act':'']" :id="'tab'+index" :key="index" v-for="(item, index) in equityCardList">{{ item.name }}<image mode class="active-img" src="https://eshopfile.zhiyousx.com/2022122010132798008.png" v-if="index==currentTab"></image>
                </view>
            </view>
        </scroll-view>
    </view>
    <view class="card-box" :style="'background:'+'linear-gradient(180deg,'+(showCardInfo.backgroundColor1||'#e7d6b4')+'4D 0%, #FAFAFA 100%)'+';'">
        <view class="title-box">
            <view class="name">{{ showCardInfo.name }}</view>
            <view class="sub-name">{{ showCardInfo.subtitle }}</view>
        </view>
        <view class="card-content">
            <view :class="['content','',!savePop?'cardR':'']">
                <image mode class="" :src="showCardInfo.image"></image>
            </view>
        </view>
        <view class="bot-box" @click="showPop($event)">
            <view class="l-b">
                <view class="lb1">预计可省</view>
                <view class="lb2">{{'￥'+showCardInfo.discounts+''}}</view>
            </view>
            <view class="r">
                <u-icon class="" color="#777777" name="arrow-right" size="28"></u-icon>
            </view>
        </view>
    </view>
    <view class="equity-box">
        <view class="tbox">
            <image mode class="icon" src="https://eshopfile.zhiyousx.com/2022122014544389817.png"></image>
            <view class="t">甄选权益</view>
            <image mode class="icon i2" src="https://eshopfile.zhiyousx.com/2022122014544389817.png"></image>
        </view>
        <view class="bbox">
            <view class="item" :key="index" v-for="(item, index) in showCardInfo.detailList">
                <view class="item-l">
                    <image class="" mode="aspectFill" :src="item.equityImage"></image>
                    <view class="item-l-tip">{{'共'+item.equityNum+'份'}}</view>
                </view>
                <view class="item-r">
                    <view class="t1 multilineText2">{{ item.equityName }}</view>
                    <view class="t2 singleLineText">{{ item.equityDesc }}</view>
                    <view class="pt">
                        <view class="p text-line">{{'￥'+item.price+''}}</view>
                        <view class="tag">购卡立享</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="card-info">
        <view class="c-it ct1" @click="toAgreenment(showCardInfo.equityCardId)">
            <view class="t">购买须知</view>
            <image mode class="" src="https://eshopfile.zhiyousx.com/2022122015483147026.png"></image>
        </view>
        <view class="c-it ct2" @click="myEquityCard($event)">
            <view class="t">我的卡包</view>
            <image mode class="" src="https://eshopfile.zhiyousx.com/2022122015481627503.png"></image>
        </view>
    </view>
    <view class="countDown" v-if="showTimeCount">距结束<text class="">{{days+'天 '+$root.f0+':'+$root.f1+':'+$root.f2}}</text>
    </view>
    <view class="foot-box">
        <view class="fb1">
            <text class="fbl1">限时售价:</text>
            <text class="fbl2">{{'￥'+showCardInfo.price}}</text>
            <text class="fbl3">/ 张</text>
        </view>
        <view class="fbr">
            <view class="fbr1" @click="toExchange($event)">兑换码兑换</view>
            <view :class="['fbr2','',timeOut||showCardInfo.buyLimit!=0&&showCardInfo.memberBuyNum>=showCardInfo.buyLimit?'timeEnd':'']" v-if="showCardInfo.buyAbleNum>0" @click="toBuy(showCardInfo.equityCardId)">
                <block v-if="timeOut">已结束</block>
                <block v-else>{{ (showCardInfo.buyLimit!=0&&showCardInfo.memberBuyNum>=showCardInfo.buyLimit?'每人限购'+showCardInfo.memberBuyNum+'张':'立即购买') }}</block>
            </view>
            <view class="fbr2 timeEnd" v-else>已售空</view>
        </view>
    </view>
    <u-popup borderRadius="20" class="" mode="center" :value="savePop" :vueSlots="['default']" @input="savePop = $event">
        <view class="save-box">
            <view class="btn-close" @click="e0($event)"></view>
            <image mode class="close-btn" src="https://eshopfile.zhiyousx.com/2022122109502468658.png" @click="e1($event)"></image>
            <view class="top-bg">
                <view class="tb1">{{'购买1张'+showCardInfo.name}}<text class="">预计可省</text>
                </view>
                <view class="tb2">￥<text class="">{{showCardInfo.discounts}}</text>
                </view>
            </view>
            <view class="save-body">
                <view class="at">
                    <view class="line"></view>
                    <text class="">{{showCardInfo.name+'省钱计算器'}}</text>
                    <view class="line"></view>
                </view>
                <view class="as">权益价值为该产品商家窗口门市价</view>
                <scroll-view class="coupon-box-b" :scrollY="true" :style="'height:'+(dll>2?'320rpx':dll*120+'rpx')+';'">
                    <view class="coupon-box">
                        <view class="cbt" :key="i" v-for="(it, i) in showCardInfo.detailList">
                            <view class="badge allcenter">{{'共'+it.equityNum+'份'}}</view>
                            <view class="cbt-l singleLineText">{{ it.saveDesc }}</view>
                            <view class="cbt-r">{{'￥'+it.price+''}}</view>
                        </view>
                    </view>
                </scroll-view>
                <view class="could"></view>
            </view>
            <view class="price-tips">
                <view class="pt1">权益总价值：</view>
                <view class="pt2">{{'￥'+showCardInfo.detailDiscounts+''}}</view>
            </view>
            <view :class="['bottom-btn','',timeOut||showCardInfo.buyLimit!=0&&showCardInfo.memberBuyNum>=showCardInfo.buyLimit?'timeEnd':'']" v-if="showCardInfo.buyAbleNum>0" @click="toBuy(showCardInfo.equityCardId)">
                <block v-if="timeOut">已结束</block>
                <block v-else>{{ (showCardInfo.buyLimit!=0&&showCardInfo.memberBuyNum>=showCardInfo.buyLimit?'每人限购'+showCardInfo.memberBuyNum+'张':'立即购买') }}</block>
            </view>
            <view class="bottom-btn timeEnd" v-else>已售空</view>
        </view>
    </u-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              tabList: [],
              currentTab: 0,
              scrollToLeft: 0,
              scrollAreaLeft: 0,
              scrollAreaWidth: 0,
              itemWidth: 0,
              itemLeft: 0,
              savePop: !1,
              equityCardList: [],
              showCardInfo: "",
              days: "0",
              hours: "00",
              mins: "00",
              seconds: "00",
              timer: null,
              curTime: 0,
              duration: "",
              timeOut: !1,
              showTimeCount: !1,
              timer1: null,
              dll: 3,
              amount: 0,
              limtBuy: !1,
              hiddenFlag: 0
            }
          },
          filters: {
            tiameFilter: function(t) {
              if (!t) return "";
              var e = t.split(" ")[0].split("-");
              return e[0] + "年" + e[1] + "月" + e[2] + "日"
            },
            timeformat: function(t) {
              return 1 == t.toString().length ? "0" + t : t
            }
          },
          onShareAppMessage: function() {
            var t = "/subPage/pages/equityCard/equityCard?equityCardId=".concat(this.showCardInfo.equityCardId);
            return {
              title: "".concat(this.showCardInfo.name, "，快来抢购吧"),
              imageUrl: this.showCardInfo.image,
              path: this.$util.setShareUrl(t)
            }
          },
          onShareTimeline: function() {
            var t = "equityCardId=".concat(this.showCardInfo.equityCardId);
            return {
              title: "".concat(this.showCardInfo.name, "，快来抢购吧"),
              imageUrl: this.showCardInfo.image,
              query: this.$util.setShareTimeline(t)
            }
          },
          onLoad: function(e) {
            var i = e.equityCardId || 0;
            this.hiddenFlag = e.hiddenFlag, this.hiddenFlag ? (uni.hideShareMenu(), this.getEquityCardDetail(0, "fromIndex", i)) : this.isHideId(i)
          },
          onShow: function() {},
          methods: {
            toExchange: function() {
              var t = "/subPage/pages/exchange/exchange";
              this.$util.isLogin(t) && this.$navigateTo({
                url: t
              })
            },
            toBuy: function(t) {
              var e = this;
              this.timeOut || this.$uniApi.getRequestNoLoading("get", "product/app/equityCard/" + t).then((function(i) {
                if (1 === i.code)
                  if (e.showCardInfo.buyAbleNum = i.data.buyAbleNum, i.data.buyAbleNum > 0) {
                    if (0 != e.showCardInfo.buyLimit && e.showCardInfo.memberBuyNum >= e.showCardInfo.buyLimit) return void e.$uni.showToast("最多可购买".concat(e.showCardInfo.memberBuyNum, "张"));
                    var n = "/subPage/pages/buyCard/buyCard?id=" + t;
                    e.$util.isLogin(n) && e.$navigateTo({
                      url: n
                    })
                  } else e.$uni.showToast("该权益卡已售空");
                else e.$uni.showToast(i.msg)
              }))
            },
            toAgreenment: function(t) {
              this.$navigateTo({
                url: "/subPage/pages/eCAgreement/eCAgreement?id=" + t
              })
            },
            myEquityCard: function() {
              var t = "/subPage/pages/myeqcard/myeqcard";
              this.$util.isLogin(t) && this.$navigateTo({
                url: t
              })
            },
            showPop: function() {
              this.savePop = !0
            },
            isHideId: function(e) {
              var i = this;
              this.$uniApi.getRequestNoLoading("get", "product/app/equityCard/" + e).then((function(n) {
                1 === n.code ? n.data.hiddenFlag ? (uni.hideShareMenu(), i.getEquityCardDetail(0, "fromIndex", e)) : i.getEquityCardList(e) : i.$uni.showToast(n.msg)
              }))
            },
            getEquityCardList: function(t) {
              var e = this;
              this.$uniApi.dataRequestNoLoading("post", "product/app/equityCard/selectPage", {
                current: 1,
                size: 9999
              }).then((function(i) {
                if (1 === i.code) {
                  e.equityCardList = i.data.records;
                  var n = -1;
                  e.equityCardList.forEach((function(i, a) {
                    t == i.equityCardId && (n = a, e.getEquityCardDetail(n, "fromIndex"))
                  })), n < 0 && e.getEquityCardDetail(0, "fromIndex")
                } else e.$uni.showToast(i.msg)
              }))
            },
            getEquityCardDetail: function(t, e, i) {
              var n = this,
                a = i || this.equityCardList[t].equityCardId;
              this.$uniApi.getRequestNoLoading("get", "product/app/equityCard/" + a).then((function(a) {
                if (1 === a.code) {
                  i && (n.equityCardList = [{
                    name: a.data.name
                  }]), n.dll = a.data.detailList.length, n.showCardInfo = a.data, e && (n.timer1 && clearTimeout(n.timer1), n.timer1 = setTimeout((function() {
                    n.tabClick(t, e)
                  }), 100));
                  var o = new Date,
                    r = new Date(n.showCardInfo.sellEndTime.replace(/-/g, "/")).getTime(),
                    u = o.getTime();
                  r - u <= 0 && (n.timeOut = !0), n.showTimeCount = !1, n.duration = "", n.timer && clearTimeout(n.timer), r - u <= 6048e5 && r - u > 0 && (n.duration = Math.round((r - u) / 1e3), n.countDown(), n.showTimeCount = !0)
                } else n.$uni.showToast(a.msg)
              }))
            },
            getTotop: function() {
              uni.pageScrollTo({
                scrollTop: 0,
                duration: 100
              })
            },
            tabClick: function(e, i) {
              var n = this;
              this.currentTab = e, this.getTotop(), this.savePop = !1;
              var a = uni.createSelectorQuery();
              a.select(".scroll-box").fields({
                rect: !0,
                size: !0
              }, (function(t) {
                n.scrollAreaLeft = t.left, n.scrollAreaWidth = t.width
              }));
              var o = "#tab" + e;
              a.select(o).fields({
                rect: !0,
                size: !0
              }, (function(t) {
                n.itemWidth = t.width, n.itemLeft = t.left;
                var a = (n.scrollAreaWidth - n.itemWidth) / 2,
                  o = n.itemLeft - n.scrollAreaLeft - a;
                n.scrollToLeft = o < 0 ? 0 : o, i || n.getEquityCardDetail(e, "")
              })), a.exec()
            },
            closePopup: function() {
              this.show = !1
            },
            toEqdetail: function(e) {
              uni.setStorageSync("eqDetail", e), this.$navigateTo({
                url: "/subPage/pages/myeqcard/eqdetail?source=1&cardName=" + this.showCardInfo.name
              })
            },
            getTime: function(t) {
              var e = this;
              if (this.timer && clearTimeout(this.timer), t < 0) return this.timeOut = !0, void(this.showTimeCount = !1);
              var i = this.durationFormatter(t),
                n = i.dd,
                a = i.hh,
                o = i.mm,
                r = i.ss;
              this.days = n || 0, this.hours = a || 0, this.mins = o || 0, this.seconds = r || 0, this.timer = setTimeout((function() {
                var i = Date.now(),
                  n = Math.floor((i - e.curTime) / 1e3),
                  a = n > 1 ? n : 1;
                e.curTime = i, e.getTime(t - a)
              }), 1e3)
            },
            durationFormatter: function(t) {
              if (!t) return {
                ss: 0
              };
              var e = t,
                i = e % 60;
              if ((e = (e - i) / 60) < 1) return {
                ss: i
              };
              var n = e % 60;
              if ((e = (e - n) / 60) < 1) return {
                mm: n,
                ss: i
              };
              var a = e % 24;
              return (e = (e - a) / 24) < 1 ? {
                hh: a,
                mm: n,
                ss: i
              } : {
                dd: e,
                hh: a,
                mm: n,
                ss: i
              }
            },
            countDown: function() {
              this.curTime = Date.now(), this.getTime(this.duration)
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.u-drawer-content-visible{transform:translateZ(850px)!important}.filterBox{-webkit-filter:grayscale(100%)}.timeEnd{opacity:.5}.page-box{background:#fafafa;font-family:Source Han Sans CN-Normal,Source Han Sans CN;font-weight:400;min-height:100vh;padding-bottom:50rpx}.page-box .head-box{background:#fff;box-shadow:0 20rpx 20rpx 0 rgba(0,0,0,.08);height:100rpx;position:-webkit-sticky;position:sticky;top:0;transform:translateZ(750px);width:750rpx;z-index:999}.page-box .head-box .tab-box{height:100rpx;overflow-x:hidden;white-space:nowrap;width:750rpx}.page-box .head-box .tab-box .scroll-box{color:#555;font-size:26rpx;margin-top:26rpx;padding-left:50rpx;padding-right:14rpx;white-space:nowrap}.page-box .head-box .tab-box .scroll-box .item{display:inline-block;line-height:48rpx;margin-right:36rpx;position:relative}.page-box .head-box .tab-box .scroll-box .item .active-img{bottom:-17rpx;height:17rpx;left:50%;margin-left:-23rpx;position:absolute;width:46rpx}.page-box .head-box .tab-box .scroll-box .act{color:#ff5411;font-size:32rpx;font-weight:500}.page-box .card-box{height:912rpx;padding-top:44rpx;position:relative;width:750rpx;z-index:10}.page-box .card-box .title-box{margin-left:50rpx}.page-box .card-box .title-box .name{color:#222;font-size:50rpx;font-weight:500;line-height:75rpx}.page-box .card-box .title-box .sub-name{color:#555;font-size:36rpx;line-height:54rpx}.page-box .card-box .card-content{margin-left:89rpx;margin-top:75rpx;perspective:500rpx;position:relative;transform:translateZ(0);transform-style:preserve-3d;z-index:20}.page-box .card-box .card-content .cardR{animation:cardRotate-data-v-4b836498 5s linear infinite}.page-box .card-box .card-content .content{border-radius:20rpx;box-shadow:45rpx 35rpx 70rpx 0 rgba(0,0,0,.15);height:342rpx;position:relative;transform-origin:0 0;width:572rpx}.page-box .card-box .card-content .content image{border-radius:20rpx;height:100%;width:100%}.page-box .card-box .card-content .content .content-tips{background:linear-gradient(23deg,#27231d,#6f6351);border-radius:10rpx;box-shadow:-6rpx 8rpx 2rpx 0rpx rgba(0,0,0,.2);color:#fff;font-size:24rpx;font-weight:400;height:50rpx;line-height:50rpx;position:absolute;right:-10rpx;text-align:center;top:-10rpx;transform:skew(-8deg);width:304rpx}@-webkit-keyframes cardRotate-data-v-4b836498{0%{transform:rotateX(0deg) rotateY(-12deg) rotate(1deg) scale(.9)}50%{transform:rotateX(-1deg) rotateY(-13deg) rotate(3deg) scale(.9)}100%{transform:rotateX(0deg) rotateY(-12deg) rotate(1deg) scale(.9)}}@keyframes cardRotate-data-v-4b836498{0%{transform:rotateX(0deg) rotateY(-12deg) rotate(1deg) scale(.9)}50%{transform:rotateX(-1deg) rotateY(-13deg) rotate(3deg) scale(.9)}100%{transform:rotateX(0deg) rotateY(-12deg) rotate(1deg) scale(.9)}}.page-box .card-box .bot-box{background:#fff;border-radius:10rpx;height:88rpx;justify-content:space-between;margin-left:40rpx;margin-top:80rpx;padding:0 30rpx;width:670rpx}.page-box .card-box .bot-box .l-b,.page-box .card-box .bot-box{align-items:center;display:-webkit-flex;display:flex}.page-box .card-box .bot-box .l-b .lb1{color:#222;font-size:28rpx;margin-right:10rpx}.page-box .card-box .bot-box .l-b .lb2{color:#ff5411;font-size:36rpx;font-weight:700}.page-box .equity-box{margin-top:-70rpx;padding:0 40rpx;position:relative;z-index:25}.page-box .equity-box .tbox{align-items:center;background:linear-gradient(292deg,#f9e6cb,#dbbc97 95%);border-radius:20rpx 20rpx 0 0;box-shadow:0-6rpx 2rpx 0 rgba(0,0,0,.08);display:-webkit-flex;display:flex;height:70rpx;justify-content:center;margin-left:85rpx;width:500rpx}.page-box .equity-box .tbox .t{color:#693c06;font-size:30rpx;font-weight:700;margin:0 30rpx;text-shadow:0 2rpx 2rpx hsla(0,0%,100%,.5)}.page-box .equity-box .tbox .icon{height:14rpx;width:27rpx}.page-box .equity-box .tbox .i2{transform:rotateY(180deg)}.page-box .equity-box .bbox{background:#f5e1c4;border-radius:20rpx;height:auto;padding:10rpx 20rpx 30rpx;width:670rpx}.page-box .equity-box .bbox .item{background:#fafafa;border-radius:20rpx;box-shadow:0 10rpx 10rpx 0 rgba(118,69,23,.08);display:-webkit-flex;display:flex;height:220rpx;justify-content:space-between;margin-top:20rpx;padding:35rpx 38rpx 30rpx;position:relative;width:630rpx}.page-box .equity-box .bbox .item:before{background:#f5e1c4;border-radius:100%;content:"";height:22rpx;left:-11rpx;position:absolute;top:109rpx;width:20rpx}.page-box .equity-box .bbox .item:after{background:#f5e1c4;border-radius:100%;content:"";height:22rpx;position:absolute;right:-11rpx;top:109rpx;width:20rpx}.page-box .equity-box .bbox .item .item-l{height:160rpx;position:relative;width:170rpx}.page-box .equity-box .bbox .item .item-l image{border-radius:20rpx;height:100%;width:100%}.page-box .equity-box .bbox .item .item-l .item-l-tip{background:#9f8762;border-radius:10rpx;box-shadow:-6rpx 8rpx 2rpx 0 rgba(0,0,0,.2);color:#fff;font-size:24rpx;height:40rpx;line-height:40rpx;position:absolute;right:-10rpx;text-align:center;top:-10rpx;transform:skew(-8deg);width:99rpx}.page-box .equity-box .bbox .item .item-r{width:364rpx}.page-box .equity-box .bbox .item .item-r .t1{color:#333;font-size:28rpx;line-height:36rpx}.page-box .equity-box .bbox .item .item-r .t2{color:#999;font-size:24rpx;line-height:30rpx;margin-top:14rpx}.page-box .equity-box .bbox .item .item-r .pt{align-items:center;display:-webkit-flex;display:flex;margin-top:15rpx}.page-box .equity-box .bbox .item .item-r .pt .p{color:#555;font-size:26rpx;line-height:39rpx;margin-right:30rpx}.page-box .equity-box .bbox .item .item-r .pt .tag{background:#f6f0db;border:1px solid #cca674;border-radius:20rpx 4rpx 20rpx 4rpx;color:#6b4718;font-size:20rpx;line-height:34rpx;padding:0 20rpx;white-space:nowrap}.page-box .card-info{display:-webkit-flex;display:flex;margin-bottom:100rpx;margin-top:40rpx;padding:0 40rpx}.page-box .card-info .c-it{background:linear-gradient(138deg,#d1f1f8,#e5fdfb);border-radius:20rpx;display:-webkit-flex;display:flex;height:156rpx;width:325rpx}.page-box .card-info .c-it .t{line-height:156rpx;margin-left:30rpx}.page-box .card-info .ct1 image{height:99rpx;margin-left:28rpx;margin-top:26rpx;width:136rpx}.page-box .card-info .ct2{background:linear-gradient(138deg,#ffd4c1,#fcf7e5);margin-left:20rpx}.page-box .card-info .ct2 image{height:110rpx;margin-left:41rpx;margin-top:15rpx;width:129rpx}.page-box .countDown{background:#ffdedc;border-radius:4rpx;bottom:100rpx;color:#333;font-size:24rpx;height:40rpx;left:0;line-height:40rpx;position:fixed;text-align:center;width:750rpx;z-index:100}.page-box .countDown text{color:#ff5411;line-height:40rpx;margin-left:10rpx}.page-box .foot-box{background:#fff;bottom:0;box-shadow:0-4rpx 20rpx 0 rgba(0,0,0,.08);display:-webkit-flex;display:flex;height:100rpx;left:0;position:fixed;width:750rpx;z-index:100}.page-box .foot-box .fb1{text-align:center;width:350rpx}.page-box .foot-box .fb1 .fbl1{color:#333;font-size:26rpx;line-height:100rpx}.page-box .foot-box .fb1 .fbl2{color:#ff5411;font-size:30rpx;font-weight:500;line-height:100rpx}.page-box .foot-box .fb1 .fbl3{color:#777;font-size:24rpx;line-height:100rpx}.page-box .foot-box .fbr{align-items:center;display:-webkit-flex;display:flex;width:400rpx}.page-box .foot-box .fbr .fbr1{background:linear-gradient(23deg,#f8deb8,#dbbc98);border-radius:50rpx 0 0 50rpx;color:#693c06;font-size:24rpx;height:72rpx;line-height:72rpx;text-align:center;width:180rpx}.page-box .foot-box .fbr .fbr2{background:linear-gradient(23deg,#443a2e,#6f6351);border-radius:0 50rpx 50rpx 0;color:#f2d7b1;font-size:26rpx;height:72rpx;line-height:72rpx;text-align:center;width:180rpx}.page-box .save-box{background:#fff;border-radius:20rpx;height:auto;max-height:990rpx;min-height:660rpx;overflow:hidden;position:relative;transform:translateZ(860px);width:620rpx}.page-box .save-box .close-btn{height:36rpx;position:absolute;right:20rpx;top:20rpx;width:36rpx}.page-box .save-box .btn-close{height:50rpx;position:absolute;right:15rpx;top:15rpx;width:50rpx}.page-box .save-box .top-bg{align-items:center;background:url('https://eshopfile.zhiyousx.com/2023011309232927976.png');background-size:100% 100%;display:-webkit-flex;display:flex;flex-direction:column;height:280rpx;margin-top:-2rpx;width:100%}.page-box .save-box .top-bg .tb1{color:#5b3e19;font-size:32rpx;font-weight:600;line-height:32rpx;margin-top:70rpx}.page-box .save-box .top-bg .tb1 text{color:#5b3e19;font-size:28tpx;font-weight:400;line-height:32rpx;margin-left:10rpx}.page-box .save-box .top-bg .tb2{color:#5b3e19;font-size:30rpx;font-weight:600;line-height:30rpx;margin-top:30rpx}.page-box .save-box .top-bg .tb2 text{color:#5b3e19;font-size:50rpx;font-weight:600;line-height:40rpx;margin-left:10rpx}.page-box .save-box .save-body{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;position:relative}.page-box .save-box .save-body .at{align-items:center;display:-webkit-flex;display:flex;justify-content:center;margin-top:40rpx}.page-box .save-box .save-body .at text{color:#5b3e19;font-size:28rpx;line-height:30rpx;padding:0 30rpx}.page-box .save-box .save-body .at .line{background:#d2b99b;height:2rpx;width:82rpx}.page-box .save-box .save-body .as{color:#be996a;font-size:24rpx;line-height:30rpx;margin-top:14rpx}.page-box .save-box .save-body .could{background-image:radial-gradient(#fff,hsla(0,0%,100%,.2),transparent);bottom:-30rpx;height:40px;left:68rpx;position:absolute;width:480rpx}.page-box .save-box .save-body .coupon-box-b{margin-top:20rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:auto;justify-content:center}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt{align-items:center;background:linear-gradient(92deg,#f9e6cb,#e5d3bc 95%);border-radius:10rpx;box-shadow:0 6rpx 2rpx 0 rgba(0,0,0,.08);display:-webkit-flex;display:flex;height:90rpx;justify-content:space-between;margin-top:30rpx;padding:0 38rpx;position:relative;width:500rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt:before{background:#fff;border-radius:100%;content:"";height:20rpx;left:-10rpx;position:absolute;top:40rpx;width:20rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt:after{background:#fff;border-radius:100%;content:"";height:20rpx;position:absolute;right:-10rpx;top:40rpx;width:20rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt .badge{background:linear-gradient(23deg,#27231d,#6f6351);border-radius:10rpx;box-shadow:0 4rpx 2rpx 0 rgba(0,0,0,.2);color:#fff;font-size:24rpx;height:36rpx;padding:0 22rpx;position:absolute;right:2rpx;top:-18rpx;transform:skew(-10deg)}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt .badge text{color:#fff;font-size:24rpx;font-weight:700;margin-left:5rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt .cbt-l{color:#333;font-size:24rpx}.page-box .save-box .save-body .coupon-box-b .coupon-box .cbt .cbt-r{color:#333;font-size:28rpx;font-weight:800}.page-box .save-box .price-tips{align-items:center;display:-webkit-flex;display:flex;height:90rpx;justify-content:space-between;margin-left:60rpx;width:500rpx}.page-box .save-box .price-tips .pt1{color:#be996a;font-size:30rpx}.page-box .save-box .price-tips .pt2{color:#333;font-size:30rpx}.page-box .save-box .bottom-btn{background:linear-gradient(23deg,#443a2e,#6f6351);border-radius:50rpx;color:#f2d7b1;font-size:26rpx;height:72rpx;line-height:72rpx;margin-bottom:42rpx;margin-left:60rpx;margin-top:10rpx;text-align:center;width:500rpx}
</style>
