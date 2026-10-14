<template>
<view class="u-wrap">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="fixHeader" id="fixHeader" :style="'background:'+'rgba(52,46,48,'+scrollTop/(navtop2-fixednavTop)+')'+';'">
        <image class="rank" src="https://eshopfile.zhiyousx.com/2021082714583556955.png" :style="'margin-top:'+searchHeight+8+'px'+';'+'opacity:'+(scrollTop>navtop2-fixednavTop?1:0)+';'"></image>
    </view>
    <view class="headerInfo">
        <image class="bgimg" mode="aspectFill" src="https://eshopfile.zhiyousx.com/162695356849759455.jpg"></image>
        <view :class="['nav','',navFixed?'navFixed':'']" id="nav" :style="fixedstyle">
            <view :class="['item','',activeIndex==1?'active':'']" @click="changeType('', 1)">全部</view>
            <view :class="['item','',activeIndex==2?'active':'']" @click="changeType('1', 2)">景点</view>
            <view :class="['item','',activeIndex==3?'active':'']" @click="changeType('2', 3)">美食</view>
            <view :class="['item','',activeIndex==4?'active':'']" @click="changeType('0', 4)">其他</view>
            <view class="line" :style="'left:'+(activeIndex-1)*116+'rpx'+';'"></view>
        </view>
    </view>
    <view class="container">
        <view class="list" v-if="spotList[0]">
            <view class="item" v-if="spot.rankingItemList" v-for="(spot, __i0__) in $root.l1">
                <view class="name singleLineText">{{spot.rankingName}}</view>
                <view class="info singleLineText">{{(spot.sumCount||0)+(spot.rankingInclude||'')}}</view>
                <view class="intro" v-if="spot.rankingDescribe">
                    <text class="multilineText2">{{spot.rankingDescribe}}</text>
                </view>
                <view class="spotList">
                    <view class="spot" v-if="index<3" v-for="(item, index) in spot.l0">
                        <view class="imgbox">
                            <view class="" v-if="spot.type==8">
                                <view class="badge gold" v-if="index==0">1</view>
                                <block v-else>
                                    <view class="badge silver" v-if="index==1">2</view>
                                    <block v-else>
                                        <view class="badge bronze" v-if="index==2">3</view>
                                    </block>
                                </block>
                            </view>
                            <image class="mainimg" mode="aspectFill" :src="item.originUrl"></image>
                        </view>
                        <view class="spotname singleLineText">{{item.originName}}</view>
                        <view class="likeRate" v-if="(spot.type==8||spot.type==7)&&spot.rankingType==2&&item.favoriteValue">
                            <text class="icon">喜爱值</text>
                            <text class="num">{{item.g0}}</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="noinfo" v-else>
            <image class="noGoods" mode="widthFix" src="/static/captured/51d17a011d27445c.png"></image>
            <view class="">暂无内容</view>
        </view>
    </view>
    <tab-bar class=""></tab-bar>
</view>

</template>

<script>
import tabBar from "@/components/tabBar/tabBar.vue";

// Reconstructed Vue Component
const t = uni;
export default {
  components: {
    tabBar
  },
  data: function() {
            return {
              navType: "",
              current: 1,
              size: 10,
              activeIndex: 1,
              spotList: [],
              coverImage: "",
              loading: !1,
              fixednavTop: 0,
              fixNavTop: 90,
              unit: 0,
              searchHeight: 0,
              scrollTop: 0,
              navtop2: 0,
              fixedstyle: "",
              navFixed: !1
            }
          },
          onShow: function() {
            this.$bus.$emit("tabPlay", 2)
          },
          onLoad: function(n) {
            var e = this,
              i = uni.getStorageSync("NavH");
            this.searchHeight = i.top, this.unit = uni.getStorageSync("unit"), this.fixNavTop = parseInt(i.top + 8 + 93 / this.unit), this.getDomInfo().then((function(n) {
              uni.getSystemInfo({
                success: function(t) {
                  console.log(t), e.fixednavTop = n[1].height - parseInt(68 / e.unit), e.navtop2 = n[0].top
                }
              })
            })), this.getRankList()
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, this.fixedstyle = t.scrollTop + this.fixNavTop > this.navtop2 ? "position:fixed;left:40rpx;top:".concat(this.fixNavTop, "px") : "", this.navFixed = !!this.fixedstyle
          },
          onReachBottom: function() {
            this.current += 1, this.getRankList()
          },
          methods: {
            encode: function(t) {
              return encodeURIComponent(t)
            },
            changeType: function(n, e) {
              this.loading || (uni.showLoading(), this.loading = !0, this.navType = n, this.activeIndex = e, this.spotList = [], this.current = 1, this.getRankList(!0))
            },
            getRankList: function(n) {
              var e = this;
              this.$uniApi.dataRequestYesLoading("post", "base/app/v1/contentRanking/selectRankingPage?current=".concat(e.current, "&size=").concat(e.size, "&rankingClass=").concat(e.navType), "", "加载中...").then((function(i) {
                i.data.records[0] && (e.spotList = e.spotList.concat(i.data.records)), uni.hideLoading(), e.loading = !1, !i.data.records[0] && e.current > 1 && uni.showToast({
                  title: "没有更多咯~",
                  icon: "none"
                }), n && e.scrollTop + e.fixNavTop > e.navtop2 && uni.pageScrollTo({
                  duration: 0,
                  scrollTop: e.navtop2 - e.fixNavTop - 3
                })
              })).catch((function(n) {
                uni.hideLoading(), e.loading = !1, uni.showToast({
                  title: "error",
                  icon: "none"
                })
              }))
            },
            getCoverImage: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "base/app/v1/sysParam/RANKING_DEFAULT_PIC").then((function(n) {
                t.coverImage = n.data.paramValue
              }))
            },
            pageTo: function(t) {
              this.$navigateTo({
                url: "../ranking/ranking?id=" + t.id
              })
            },
            getDomInfo: function() {
              var n = this;
              return new Promise((function(e) {
                setTimeout((function() {
                  n.$nextTick((function() {
                    var n = uni.createSelectorQuery();
                    n.select("#nav").boundingClientRect(), n.select("#fixHeader").boundingClientRect(), n.exec((function(t) {
                      e(t)
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
page {
  background-color: #312d2f
}

.u-wrap {
  background: #322e30;
  min-height: 100vh
}

.u-wrap .fixHeader {
  left: 0;
  position: fixed;
  top: 0;
  width: 750rpx;
  z-index: 99
}

.u-wrap .fixHeader .rank {
  height: 53rpx;
  margin-bottom: 108rpx;
  margin-left: 106rpx;
  transition: all .3s linear;
  width: 160rpx
}

.u-wrap .container {
  min-height: 100vh
}

.u-wrap .headerInfo {
  height: 600rpx;
  position: relative;
  width: 100%
}

.u-wrap .headerInfo .bgimg {
  height: 100%;
  width: 100%
}

.u-wrap .headerInfo .nav {
  display: -webkit-flex;
  display: flex;
  left: 40rpx;
  position: absolute;
  top: 456rpx;
  z-index: 1000
}

.u-wrap .headerInfo .nav.navFixed {
  display: -webkit-flex;
  display: flex;
  left: 40rpx;
  position: fixed;
  z-index: 1000
}

.u-wrap .headerInfo .nav .item {
  color: #fff;
  font-size: 26rpx;
  font-weight: 400;
  text-shadow: 0 3px 1px rgba(0, 0, 0, .2);
  width: 116rpx;
  z-index: 10
}

.u-wrap .headerInfo .nav .item.active {
  font-weight: 700
}

.u-wrap .headerInfo .nav .line {
  background: linear-gradient(56deg, #fc4a9e, #ff5411);
  border-radius: 5rpx;
  bottom: 0;
  height: 10rpx;
  position: absolute;
  transition: all .2s linear;
  width: 60rpx
}

.u-wrap .noinfo .noGoods {
  display: block;
  margin: 50rpx auto;
  opacity: .5;
  width: 300rpx
}

.u-wrap .noinfo view {
  color: #777;
  text-align: center
}

.u-wrap .list {
  margin-top: -105rpx;
  min-height: 50vh;
  overflow-y: scroll;
  padding: 30rpx 30rpx 110rpx;
  position: relative;
  z-index: 2
}

.u-wrap .list .item {
  background: #fff;
  border-radius: 20rpx;
  margin-bottom: 60rpx;
  padding: 50rpx 30rpx 0;
  position: relative
}

.u-wrap .list .item:first-child {
  margin-top: 30rpx
}

.u-wrap .list .item .name {
  background: linear-gradient(56deg, #ffce8f, #fd8d66);
  border-radius: 30rpx 30rpx 30rpx 4rpx;
  box-shadow: 0-20rpx 30rpx 0rpx rgba(0, 0, 0, .05);
  color: #333;
  display: inline-block;
  font-size: 32rpx;
  font-weight: 700;
  height: 60rpx;
  left: 30rpx;
  line-height: 60rpx;
  max-width: 630rpx;
  padding: 0 36rpx 0 32rpx;
  position: absolute;
  top: -30rpx
}

.u-wrap .list .item .info {
  color: #777474;
  font-size: 24rpx;
  margin-bottom: 30rpx
}

.u-wrap .list .item .intro {
  background: #f7f7f7;
  border-radius: 20rpx;
  margin-bottom: 20rpx;
  padding: 10rpx 28rpx
}

.u-wrap .list .item .intro text {
  color: #949494;
  font-size: 24rpx;
  line-height: 36rpx
}

.u-wrap .list .item .spotList {
  display: -webkit-flex;
  display: flex
}

.u-wrap .list .item .spotList .spot {
  margin-right: 15rpx;
  padding-bottom: 20rpx;
  width: 200rpx
}

.u-wrap .list .item .spotList .spot:last-child {
  margin-right: 0
}

.u-wrap .list .item .spotList .spot .imgbox {
  height: 210rpx;
  padding-top: 10rpx;
  position: relative;
  width: 200rpx
}

.u-wrap .list .item .spotList .spot .imgbox .mainimg {
  border-radius: 20rpx;
  float: left
}

.u-wrap .list .item .spotList .spot .imgbox image {
  height: 200rpx;
  width: 200rpx
}

.u-wrap .list .item .spotList .spot .imgbox .badge {
  background: url('https://eshopfile.zhiyousx.com/2021070215313612940.png')top no-repeat;
  background-size: 100%;
  color: #fff;
  font-size: 24rpx;
  font-weight: 700;
  height: 55rpx;
  left: 18rpx;
  line-height: 40rpx;
  position: absolute;
  text-align: center;
  text-indent: 8rpx;
  top: 0rpx;
  width: 51rpx;
  z-index: 1
}

.u-wrap .list .item .spotList .spot .imgbox .badge.gold {
  background: url('https://eshopfile.zhiyousx.com/2021070215055222276.png')top no-repeat;
  background-size: 100%
}

.u-wrap .list .item .spotList .spot .imgbox .badge.silver {
  background: url('https://eshopfile.zhiyousx.com/2021070215261647559.png')top no-repeat;
  background-size: 100%
}

.u-wrap .list .item .spotList .spot .imgbox .badge.bronze {
  background: url('https://eshopfile.zhiyousx.com/2021070215274946950.png')top no-repeat;
  background-size: 100%
}

.u-wrap .list .item .spotList .spot .spotname {
  color: #656565;
  font-size: 26rpx;
  font-weight: 400;
  margin-bottom: 20rpx;
  margin-top: 30rpx
}

.u-wrap .list .item .spotList .spot .likeRate {
  margin-bottom: 30rpx;
  position: relative
}

.u-wrap .list .item .spotList .spot .likeRate text {
  display: inline-block
}

.u-wrap .list .item .spotList .spot .likeRate .icon {
  background: #feac2c;
  border-radius: 6rpx 18rpx 6rpx 18rpx;
  bottom: 0;
  color: #fff;
  font-size: 20rpx;
  height: 36rpx;
  left: 0;
  line-height: 36rpx;
  position: absolute;
  text-align: center;
  width: 80rpx
}

.u-wrap .list .item .spotList .spot .likeRate .num {
  background: #ffefd5;
  border-radius: 16rpx 6rpx 6rpx 16rpx;
  color: #ff5411;
  font-size: 24rpx;
  font-weight: 400;
  height: 32rpx;
  padding: 0 14rpx 0 92rpx
}
</style>
