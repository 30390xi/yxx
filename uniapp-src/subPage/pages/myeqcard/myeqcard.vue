<template>
<view class="teamPage">
    <view class="tabs">
        <u-tabs activeColor="#333333" barHeight="6" :barStyle="barStyle" barWidth="68" :bold="true" class="" :current="current" fontSize="26" inactiveColor="#777777" :isScroll="false" :list="listTab" @change="changecurr()"></u-tabs>
    </view>
    <view class="main-box">
        <block v-if="cardlist[0]&&current==0">
            <view class="card" v-for="(item, __i0__) in $root.l0">
                <view class="time">{{item.f0+'前可领取权益'}}</view>
                <view class="content" :style="'background:'+'linear-gradient(135deg, '+(item.backgroundColor1||'#e7d6b4')+' 0%, '+item.m0+' 100%);'+';'">
                    <image class="" mode="aspectFill" :src="item.image"></image>
                    <view class="info">
                        <view class="name singleLineText">{{item.name}}</view>
                        <view class="desc singleLineText">{{item.subtitle}}</view>
                    </view>
                </view>
            </view>
        </block>
        <block v-if="cardlist[0]&&current==1">
            <view class="card" v-for="(item, __i1__) in $root.l1">
                <view class="time invalid">{{item.f1+'前可领取权益'}}</view>
                <view class="content">
                    <image class="" mode="aspectFill" :src="item.image"></image>
                    <view class="info">
                        <view class="name singleLineText">{{item.name}}</view>
                        <view class="desc singleLineText">{{item.subtitle}}</view>
                    </view>
                </view>
                <image class="state-image" src="../../static/images/eqcard4.png"></image>
            </view>
        </block>
        <view class="records">
            <view class="records-btn" @click="torecords($event)">查看领取记录 ></view>
            <view class="records-line">|</view>
            <view class="records-btn" @click.stop="toExchange($event)">兑换码兑换 ></view>
        </view>
    </view>
    <view class="empty" v-if="!cardlist[0]">
        <empty-state class="" imgUrl="/static/captured/51d17a011d27445c.png" text="暂无数据"></empty-state>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
        components: {
          EmptyState: function() {
            n.e("components/empty/empty").then(function() {
              return resolve(n("a427"))
            }.bind(null, n)).catch(n.oe)
          }
        },
        data: function() {
          return {
            page: 1,
            loadMore: "loading",
            listTab: [{
              name: "可用（0）"
            }, {
              name: "已失效"
            }],
            current: 0,
            cardlist: [],
            activeStyle: {
              "z-index": "1",
              "font-size": "32rpx"
            },
            barStyle: {
              width: "120rpx",
              height: "20rpx",
              background: " linear-gradient(292deg, #F9E6CB 0%, #DBBC97 95%);",
              "border-radius": "10px",
              position: "absolute",
              "margin-left": "-27rpx"
            }
          }
        },
        filters: {
          tiameFilter: function(t) {
            if (!t) return "";
            var e = t.split(" ")[0].split("-");
            return e[0] + "年" + e[1] + "月" + e[2] + "日"
          }
        },
        onLoad: function() {
          this.pageLoad()
        },
        onPullDownRefresh: function() {},
        onReachBottom: function() {},
        onShow: function() {},
        computed: {
          userInfo: function() {
            return this.$store.getters.userInfor
          }
        },
        methods: {
          pageLoad: function() {
            var t = this,
              e = this.current + 1;
            this.$uniApi.dataRequestNoLoading("post", "product/app/userEquityCard/selectPage", {
              current: 1,
              size: 9999,
              appState: e
            }).then((function(n) {
              1 === n.code ? (t.cardlist = n.data.records || [], 1 == e && (t.listTab = [{
                name: "可用（".concat(t.cardlist.length, "）")
              }, {
                name: "已失效"
              }])) : t.$uni.showToast(n.msg)
            }))
          },
          changecurr: function(t) {
            this.current = t, this.page = 1, this.cardlist = [], this.pageLoad()
          },
          toCardDetail: function(t) {
            this.$navigateTo({
              url: "/subPage/pages/myeqcard/detail?id=".concat(t.userEquityCardId, "&cardState=").concat(this.current)
            })
          },
          torecords: function() {
            this.$navigateTo({
              url: "/subPage/pages/myeqcard/records"
            })
          },
          toExchange: function() {
            var t = "/subPage/pages/exchange/exchange";
            this.$util.isLogin(t) && this.$navigateTo({
              url: t
            })
          },
          hexToRGBA: function(t, e) {
            var n = t.toLowerCase();
            if (n && /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(n)) {
              if (4 === n.length) {
                for (var r = "#", a = 1; a < 4; a += 1) r += n.slice(a, a + 1).concat(n.slice(a, a + 1));
                n = r
              }
              for (var i = [], o = 1; o < 7; o += 2) i.push(parseInt("0x" + n.slice(o, o + 2)));
              return "rgba(" + i.join(",") + "," + e + ")"
            }
            return n
          }
        }
      };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.teamPage{background:#fff;min-height:100vh}.tabs{box-shadow:0 20rpx 20rpx 0 rgba(0,0,0,.08);height:85rpx;width:100%}.main-box{font-family:Source Han Sans CN-Normal,Source Han Sans CN;font-weight:400;height:100%;padding:0 40rpx 40rpx;width:100%}.main-box .card{margin-top:30rpx;padding-top:10rpx;position:relative}.main-box .card .time{background:linear-gradient(23deg,#27231d,#6f6351);border-radius:10rpx;box-shadow:-6rpx 8rpx 2rpx 0 rgba(0,0,0,.2);color:#fff;font-size:24rpx;height:50rpx;line-height:50rpx;position:absolute;right:0;text-align:center;top:0;transform:skew(-10deg);width:360rpx;z-index:3}.main-box .card .time.invalid{background:linear-gradient(23deg,#b1b0ab,#c9c6c0);box-shadow:none}.main-box .card .state-image{bottom:10rpx;height:100rpx;position:absolute;right:10rpx;width:100rpx}.main-box .card .content{align-items:center;background:linear-gradient(135deg,#d4cdc2,hsla(37,17%,80%,.3));border-radius:20rpx;display:-webkit-flex;display:flex;height:220rpx;justify-content:space-between;padding:0 40rpx}.main-box .card .content image{border-radius:10rpx;height:100rpx;width:167rpx}.main-box .card .content .info{display:-webkit-flex;display:flex;flex-direction:column;height:100rpx;justify-content:space-between;width:393rpx}.main-box .card .content .info .name{color:#444;font-size:36rpx;font-weight:700;text-shadow:0 2rpx 2rpx rgba(0,0,0,.25)}.main-box .card .content .info .desc{color:#777;font-size:26rpx}.main-box .records{align-items:center;display:-webkit-flex;display:flex;justify-content:center;margin-bottom:20rpx;margin-top:40rpx}.main-box .records view{color:#555;font-size:26rpx}.main-box .records .records-line{color:#999;font-size:26rpx;margin:0 70rpx;opacity:.7}
</style>
