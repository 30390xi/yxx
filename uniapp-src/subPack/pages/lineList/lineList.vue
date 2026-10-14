<template>
<view class="page-box">
    <uni-navbar class="" title="线路列表" :titleCenter="false" type="transparentFixed"></uni-navbar>
    <view class="top-box" :style="'background:'+(showPop?'#FFFFFF':'')+';'+'height:'+(hotPlayList[0]?'414rpx':'320rpx')+';'">
        <view class="tb-t" :style="'padding-top:'+searchHeight+'px'+';'">
            <view class="tab1-box">
                <scroll-view class="scrollBox" :scrollWithAnimation="true" :scrollX="true">
                    <view :class="['options','',value1==opt.id?'active':'']" v-for="(opt, __i0__) in options1">{{opt.name+''}}<view class="active-img" v-if="value1==opt.id"></view>
                    </view>
                </scroll-view>
            </view>
        </view>
        <view :class="['tb-m','',scrollTop>0?'tbms':'',showPop?'tbmP':'']">
            <view class="tb-mb">
                <view :class="['it','',opt.num>0||popType==opt.type&&showPop||opt.type==1?'actColor':'']" v-for="(opt, __i1__) in options2">{{ opt.name }}<image mode class="icon-box" src="https://eshopfile.zhiyousx.com/2023092010120621955.png" v-if="showPop&&popType==opt.type"></image>
                    <block v-else>
                        <view class="select-box" v-if="opt.num>0">
                            <block v-if="opt.type!==1">{{opt.num}}</block>
                            <image mode class="" src="/static/captured/a3d59056abe4751e.png" :style="'margin-left:'+(opt.type===1?'0rpx':'2rpx')+';'"></image>
                        </view>
                        <view class="icon-box close" v-else>
                            <image mode class="icon1" src="/static/captured/37e60921fca2c924.png"></image>
                        </view>
                    </block>
                </view>
            </view>
            <view class="popop-box" v-if="showPop">
                <view class="sort-box" v-if="popType==1">
                    <view :class="['it','',fromKey.sortType==null?'act':'']" @click="sortChange(-1, '综合排序')">综合排序</view>
                    <view :class="['it','',fromKey.sortType==0?'act':'']" @click="sortChange(0, '价格从低到高')">价格从低到高</view>
                    <view :class="['it','',fromKey.sortType==1?'act':'']" @click="sortChange(1, '价格从高到低')">价格从高到低</view>
                    <view :class="['it','',fromKey.sortType==2?'act':'']" @click="sortChange(2, '按销量')">按销量</view>
                </view>
                <view class="play-box" v-if="popType==2">
                    <view class="play-it">
                        <view class="title">热门目的地</view>
                        <view class="item-box">
                            <view :class="['item','item1','',item.m0?'active':'']" :key="index" v-for="(item, index) in $root.l0">{{ item.cityName }}</view>
                        </view>
                        <view class="title" style="margin-top:30rpx;">热门地点</view>
                        <view class="item-box">
                            <view :class="['item','item2','',item.m1?'active':'']" :key="index" v-for="(item, index) in $root.l1">{{ item.scenicName }}</view>
                        </view>
                    </view>
                </view>
                <view class="date-box" v-if="popType==3">
                    <view class="day-box">
                        <view class="title">行程天数</view>
                        <scroll-view class="days" :scrollWithAnimation="true" :scrollX="true">
                            <view :class="['day-item','',item.m2?'active':'']" :style="'width:'+(item>=7?'130rpx':'114rpx')+';'" :key="index" v-for="(item, index) in $root.l2">
                                <label class="_span" v-if="item<=6">{{item+1+'天'}}</label>
                                <label class="_span" v-else>大于7天</label>
                            </view>
                        </scroll-view>
                        <view class="title" style="margin-top:50rpx;">出发日期</view>
                        <calendar class="" :defaultDate="selectDateStr" :priceList="dateList" @getDataInDay="selectData()"></calendar>
                    </view>
                </view>
                <view class="play-box" v-if="popType==4">
                    <view class="play-it">
                        <view class="title">出发城市</view>
                        <view class="item-box">
                            <view :class="['item','item1','',item.m3?'active':'']" :key="index" v-for="(item, index) in $root.l3">{{ item }}</view>
                        </view>
                        <view class="title" style="margin-top:30rpx;">线路主题</view>
                        <view class="item-box">
                            <view :class="['item','item2','',item.m4?'active':'']" :key="index" v-for="(item, index) in $root.l4">{{ item.themeName }}</view>
                        </view>
                        <view class="title" style="margin-top:30rpx;">价格区间</view>
                        <view class="item-box">
                            <view :class="['item','item3','',activePriceKey==index?'active':'']" :key="index" v-for="(item, index) in priceList">
                                <label class="_span" v-if="item.minPrice<10000">{{item.minPrice+'-'+item.maxPrice}}</label>
                                <label class="_span" v-else>10000以上</label>
                            </view>
                        </view>
                        <view class="price-sx">
                            <view class="sx-it">
                                <input class="" placeholder="最低价" type="number" :value="fromKey.minPrice" @blur="getListNum(); $forceUpdate()" @input="fromKey.minPrice = $event"></input>
                            </view>至<view class="sx-it">
                                <input class="" placeholder="最高价" type="number" :value="fromKey.maxPrice" @blur="getListNum(); $forceUpdate()" @input="fromKey.maxPrice = $event"></input>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="but-box">
                    <view class="bt-l" @click="resetting()">重置</view>
                    <view class="btn" @click="checkProductList()">{{'查看'+productNum+'个产品'}}</view>
                </view>
                <view class="" style="height:40rpx;"></view>
            </view>
        </view>
        <view :class="['tb-b','',scrollTop>0?'scrollTrue':'']" v-if="hotPlayList[0]">
            <scroll-view class="scrollBox" :scrollWithAnimation="true" :scrollX="true">
                <view :class="['options','',item.m5?'active':'']" :key="index" v-for="(item, index) in $root.l5">{{ item.scenicName }}</view>
            </scroll-view>
        </view>
    </view>
    <view class="production-box">
        <view :class="['item','',!item.stockStatus||item.sellOut?'disable':'']" :key="index" v-for="(item, index) in $root.l7">
            <view class="info-box">
                <view class="pic-box">
                    <image class="" mode="aspectFill" :src="item.productPic"></image>
                    <view class="lt-tip">{{item.f0}}</view>
                    <view class="bto-tip" v-if="item.cityNames">
                        <image mode class="" src="/static/captured/b783dbfada461ad4.png"></image>
                        <view class="txt">{{item.g0[0]+'出发'}}</view>
                    </view>
                </view>
                <view class="r-info">
                    <view class="nameTipsBox">
                        <view class="name multilineText2">{{ item.productName }}<view class="star-box" v-if="item.level>0">
                                <view class="star">{{''+item.level+'A'}}</view>
                            </view>
                        </view>
                        <view class="highLights singleLineText" v-if="item.lineHighlightLabelList">
                            <text class="" :key="idx" v-for="(ele, idx) in item.l6">{{ele+(idx===ele.g1-1?'':'/')}}</text>
                        </view>
                        <view class="tips">
                            <view class="tag it" v-if="item.lineTagList&&item.lineTagList[0]" :key="index" v-for="(tag, __i2__) in item.lineTagList">{{tag}}</view>
                        </view>
                    </view>
                    <view class="price-box">
                        <view class="item-btn" v-if="!item.stockStatus||item.sellOut">售罄</view>
                        <block v-else>
                            <view class="pl" v-if="item.price||item.price===0">{{'￥'+item.price+''}}<view class="ptxt t" v-if="item.startPriceFlag">起</view>
                                <view class="line-through" v-if="item.retailPrice>0&&item.retailPrice>item.price">{{'￥'+item.retailPrice}}</view>
                            </view>
                            <view class="" v-else></view>
                        </block>
                        <view class="pr ptxt" v-if="item.saleNum>0">{{'已有'+item.f1+'人出行'}}</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="empty" v-if="$root.g2">
            <empty-state class="" imgUrl="https://eshopfile.zhiyousx.com/noOrder@2x.png" text="暂无产品"></empty-state>
        </view>
        <view class="loadMore" v-else>
            <u-loadmore bgColor="#f7f7f7" class="" color="#ccc" iconColor="#ccc" :status="loadMore"></u-loadmore>
        </view>
    </view>
    <view class="mask-box" v-if="showPop" @click="e0($event)"></view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            calendar: function() {
              i.e("subPack/components/calendar/calendar").then(function() {
                return resolve(i("5c19"))
              }.bind(null, i)).catch(i.oe)
            },
            EmptyState: function() {
              i.e("components/empty/empty").then(function() {
                return resolve(i("a427"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          data: function() {
            return {
              loadMore: "loading",
              options1: [{
                id: -1,
                name: "全部"
              }, {
                id: 0,
                name: "跟团游"
              }, {
                id: 1,
                name: "一日游"
              }, {
                id: 2,
                name: "自由行"
              }, {
                id: 3,
                name: "研学游"
              }],
              options2: [{
                type: 1,
                name: "综合排序",
                num: 1
              }, {
                type: 2,
                name: "线路玩法",
                num: 0
              }, {
                type: 3,
                name: "天数/出发日期",
                num: 0
              }, {
                type: 4,
                name: "筛选",
                num: 0
              }],
              value1: -1,
              scrollTop: 0,
              showPop: !1,
              popType: 0,
              productNum: 0,
              dayAll: 0,
              dateList: [],
              selectDateStr: "",
              cityList: [],
              destinationList: [],
              fromCity: [],
              themeList: [],
              hotPlayList: [],
              productList: [],
              priceList: [{
                minPrice: 0,
                maxPrice: 999
              }, {
                minPrice: 1e3,
                maxPrice: 1999
              }, {
                minPrice: 2e3,
                maxPrice: 3999
              }, {
                minPrice: 4e3,
                maxPrice: 9999
              }, {
                minPrice: 1e4,
                maxPrice: 9999999999
              }],
              activePriceKey: null,
              fromKey: {
                key1: [],
                id1: [],
                key2: [],
                id2: [],
                key3: [],
                id3: [],
                key4: [],
                id4: [],
                key5: [],
                id5: [],
                key6: [],
                id6: [],
                minPrice: "",
                maxPrice: "",
                sortType: null
              },
              current: 1,
              searchHeight: 0,
              isRefresh: !1
            }
          },
          filters: {
            travelModeFilter: function(t) {
              return {
                0: "全部",
                1: "跟团游",
                2: "一日游",
                3: "自由行",
                4: "研学游"
              } [t + 1]
            }
          },
          onLoad: function(e) {
            var i = uni.getMenuButtonBoundingClientRect();
            this.searchHeight = i.top + 38, this.getCityList(), this.getDeparture(), this.getDestinationList(), this.getAllLineDayList(), this.getFromCityList(), this.hotDestinationList(), this.getThemeList(), this.getBetweenPrice(), e.id ? this.chooseLabel({
              id: e.id
            }) : (this.getListNum(), this.getProductList())
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.getProductList()
          },
          onShareAppMessage: function() {
            return {
              title: "精品路线",
              path: this.$util.setShareUrl("/subPack/pages/lineList/lineList")
            }
          },
          methods: {
            getDec: function(t) {
              var e, i = "",
                n = "",
                o = "",
                r = "";
              return t.cityList && t.cityList.forEach((function(t, e) {
                n += t + "/"
              })), n && (n = n.slice(0, -1) + " · "), e = ["全部", "跟团游", "一日游", "自由行", "研学游"][t.travelMode + 1], t.journeyDay && (o = t.journeyDay + "天"), t.journeyNight && (r = t.journeyNight + "晚"), (o || r) && (i = " · " + o + r), n + e + i
            },
            searchNum: function() {
              this.options2[1].num = this.fromKey.key1.length + this.fromKey.key2.length, this.options2[2].num = this.selectDateStr ? this.fromKey.key5.length + 1 : this.fromKey.key5.length;
              var t = this.fromKey.maxPrice || this.fromKey.minPrice ? 1 : 0;
              this.options2[3].num = this.fromKey.key3.length + this.fromKey.key4.length + t
            },
            sortChange: function(t, e) {
              this.fromKey.sortType = t >= 0 ? t : null, this.options2[0].name = e, this.getListNum()
            },
            selectPrice: function(t, e) {
              null != this.activePriceKey ? (this.activePriceKey = null, this.fromKey.minPrice = "", this.fromKey.maxPrice = "") : (this.activePriceKey = t, this.fromKey.minPrice = e.minPrice, this.fromKey.maxPrice = e.maxPrice > 1e4 ? "" : e.maxPrice), this.getListNum()
            },
            selectData: function(t) {
              this.selectDateStr == t.date ? this.selectDateStr = "" : this.selectDateStr = t.date, this.getListNum()
            },
            selectKey: function(t, e) {
              return this.fromKey["key" + t].includes(e)
            },
            searchAll: function(t, e, i) {
              this.fromKey["key" + t].includes(e) ? (this.fromKey["key" + t] = this.fromKey["key" + t].filter((function(t) {
                return t != e
              })), this.fromKey["id" + t] = this.fromKey["id" + t].filter((function(t) {
                return t != i
              }))) : (this.fromKey["key" + t].push(e), this.fromKey["id" + t].push(i)), this.current = 1, this.getListNum(), 6 == t && this.getProductList()
            },
            getListNum: function() {
              var t = this;
              this.searchNum();
              var e = {
                current: 1,
                size: 9999,
                cityList: this.fromKey.id1,
                destinationList: this.fromKey.id2,
                date: this.selectDateStr,
                dayList: this.fromKey.id5,
                fromCityList: this.fromKey.id3,
                hotDestinationids: this.fromKey.id6,
                lineThemeIds: this.fromKey.id4,
                maxPrice: "" === this.fromKey.maxPrice ? null : Number(this.fromKey.maxPrice),
                minPrice: Number(this.fromKey.minPrice),
                sortType: this.fromKey.sortType,
                travelMode: this.value1 < 0 ? null : this.value1
              };
              this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/line/product/listNum", e).then((function(e) {
                1 == e.code && (t.productNum = e.data)
              }))
            },
            getCityList: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/product/cityList").then((function(e) {
                1 == e.code && (t.cityList = e.data)
              }))
            },
            getDeparture: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/product/departure").then((function(e) {
                if (1 === e.code) {
                  var i = e.data;
                  i.forEach((function(t, e) {
                    t.dateShort = t.date, t.diy = "可订", t.index = e
                  })), t.dateList = i
                }
              }))
            },
            getDestinationList: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/product/destinationList").then((function(e) {
                1 === e.code && (t.destinationList = e.data)
              }))
            },
            getAllLineDayList: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/product/getAllLineDayList").then((function(e) {
                1 === e.code && (t.dayAll = e.data[0], t.dayAll = t.dayAll >= 8 ? 8 : t.dayAll)
              }))
            },
            getFromCityList: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/product/getFromCityList").then((function(e) {
                1 === e.code && (t.fromCity = e.data)
              }))
            },
            hotDestinationList: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/product/hotDestinationList").then((function(e) {
                1 === e.code && (t.hotPlayList = e.data)
              }))
            },
            getThemeList: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/product/themeList").then((function(e) {
                1 === e.code && (t.themeList = e.data)
              }))
            },
            checkProductList: function() {
              this.current = 1, this.productList = [], this.getProductList()
            },
            getProductList: function() {
              var t = this;
              this.showPop = !1, this.loadMore = "loading";
              var e = {
                current: this.current,
                size: 10,
                cityList: this.fromKey.id1,
                destinationList: this.fromKey.id2,
                date: this.selectDateStr,
                dayList: this.fromKey.id5,
                fromCityList: this.fromKey.id3,
                hotDestinationids: this.fromKey.id6,
                lineThemeIds: this.fromKey.id4,
                maxPrice: "" === this.fromKey.maxPrice ? null : Number(this.fromKey.maxPrice),
                minPrice: Number(this.fromKey.minPrice),
                sortType: this.fromKey.sortType,
                travelMode: this.value1 < 0 ? null : this.value1
              };
              this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/line/product/list", e).then((function(e) {
                if (1 === e.code) {
                  var i = e.data.records;
                  e.data.total > 0 ? (1 === e.data.current ? t.productList = i : t.productList = t.productList.concat(i), e.data.current < e.data.pages ? (t.current = t.current + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.productList = [], t.loadMore = "nomore")
                }
              }))
            },
            getBetweenPrice: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/product/getBetweenPrice").then((function(e) {
                if (1 === e.code) {
                  var i = e.data.maxPrice,
                    n = e.data.minPrice;
                  t.priceList = t.priceList.filter((function(t) {
                    return (t.minPrice <= n || t.maxPrice >= i) && t.minPrice <= i
                  }))
                }
              }))
            },
            resetting: function() {
              this.fromKey = {
                key1: [],
                id1: [],
                key2: [],
                id2: [],
                key3: [],
                id3: [],
                key4: [],
                id4: [],
                key5: [],
                id5: [],
                key6: [],
                id6: [],
                minPrice: "",
                maxPrice: "",
                sortType: null
              }, this.selectDateStr = "", this.activePriceKey = null, this.value1 = -1, this.options2[0].name = "综合排序", this.getListNum()
            },
            goGoodInfo: function(t, e) {
              this.$navigateTo({
                url: "/subPack/pages/lineProductDetails/lineProductDetails?productId=" + t
              })
            },
            chooseLabel: function(t) {
              this.value1 = t.id, this.current = 1, this.productList = [], this.getListNum(), this.getProductList()
            },
            showPopType: function(t) {
              this.popType == t.type && this.showPop ? this.showPop = !1 : (this.popType = t.type, this.showPop = !0)
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.actColor{color:#ff5411!important}.page-box{background:#f5f5f5;min-height:100vh;width:100%}.page-box .top-box{height:414rpx;position:-webkit-sticky;position:sticky;top:0;width:100%;z-index:20}.page-box .top-box .tb-t{background:linear-gradient(180deg,#ffb1b1,#fff);height:250rpx;padding-top:150rpx;width:100%}.page-box .top-box .tb-t .tab1-box{height:100rpx}.page-box .top-box .tb-t .tab1-box .scrollBox{display:block;height:100%;margin-left:15rpx;white-space:nowrap;width:735rpx}.page-box .top-box .tb-t .tab1-box .scrollBox .options{color:#222;display:inline-block;font-size:28rpx;height:100rpx;line-height:100rpx;padding:0 15rpx;position:relative}.page-box .top-box .tb-t .tab1-box .scrollBox .options .active-img{background:linear-gradient(253deg,rgba(255,84,17,0),#ff5411);border-radius:50rpx;bottom:34rpx;height:16rpx;margin-left:0rpx;position:absolute;width:80%}.page-box .top-box .tb-t .tab1-box .scrollBox .active{color:#222;font-size:34rpx;font-weight:700;line-height:40px;text-shadow:0 2rpx 1rpx rgba(0,0,0,.08)}.page-box .top-box .tb-m{background:#fff;border-radius:0 0 20rpx 20rpx;box-shadow:0 5rpx 10rpx 0 rgba(0,0,0,.08);height:70rpx;margin-top:-2rpx;padding:12rpx 30rpx;position:relative;width:100%;z-index:30}.page-box .top-box .tb-m .tb-mb{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;width:100%}.page-box .top-box .tb-m .tb-mb .it{align-items:center;color:#333;display:-webkit-flex;display:flex;font-size:26rpx;height:36rpx;line-height:36px}.page-box .top-box .tb-m .tb-mb .it .icon-box{align-items:center;display:-webkit-flex;display:flex;height:24rpx;justify-content:center;margin-left:6rpx;width:24rpx}.page-box .top-box .tb-m .tb-mb .it .close{background:rgba(0,0,0,.05);border-radius:50%}.page-box .top-box .tb-m .tb-mb .it .close .icon1{height:18rpx;width:18rpx}.page-box .top-box .tb-m .tb-mb .it .select-box{align-items:center;background:rgba(255,84,17,.15);border-radius:12rpx;color:#ff5411;display:-webkit-flex;display:flex;font-size:23rpx;height:24rpx;line-height:18rpx;margin-left:6rpx;padding:3rpx 4rpx 3rpx 8rpx}.page-box .top-box .tb-m .tb-mb .it .select-box image{height:18rpx;width:18rpx}.page-box .top-box .tb-m .popop-box{background:#fff;left:0;min-height:300rpx;padding:34rpx 0 0 30rpx;position:absolute;top:76rpx;width:750rpx;z-index:20}.page-box .top-box .tb-m .popop-box .sort-box{display:-webkit-flex;display:flex;flex-direction:column}.page-box .top-box .tb-m .popop-box .sort-box .it{color:#333;font-size:28rpx;line-height:40rpx;margin-bottom:40rpx}.page-box .top-box .tb-m .popop-box .sort-box .act{color:#ff5411}.page-box .top-box .tb-m .popop-box .play-box .play-it{margin-bottom:30rpx}.page-box .top-box .tb-m .popop-box .play-box .play-it .title{color:#333;font-size:28rpx;height:40rpx;line-height:40rpx;margin-bottom:30rpx}.page-box .top-box .tb-m .popop-box .play-box .play-it .item-box{display:-webkit-flex;display:flex;flex-wrap:wrap;width:710rpx}.page-box .top-box .tb-m .popop-box .play-box .play-it .item-box .item{border:1rpx solid #bbb;border-radius:10rpx;color:#555;font-size:26rpx;height:60rpx;line-height:58rpx;margin-bottom:20rpx;margin-right:20rpx;text-align:center}.page-box .top-box .tb-m .popop-box .play-box .play-it .item-box .item1{width:157rpx}.page-box .top-box .tb-m .popop-box .play-box .play-it .item-box .item2{display:inline-block;padding:0 20rpx;white-space:nowrap}.page-box .top-box .tb-m .popop-box .play-box .play-it .item-box .item3{width:216rpx}.page-box .top-box .tb-m .popop-box .play-box .play-it .item-box .active{background:rgba(255,84,17,.1);border:1rpx solid #ff5411;box-shadow:0 4rpx 0 0 rgba(255,84,17,.1);position:relative}.page-box .top-box .tb-m .popop-box .play-box .play-it .item-box .active::after{background:url('https://eshopfile.zhiyousx.com/2023092011324955710.png');background-repeat:no-repeat;background-size:100% 100%;bottom:0;content:"";height:18rpx;position:absolute;right:0;width:18rpx}.page-box .top-box .tb-m .popop-box .play-box .play-it .price-sx{color:#333;display:-webkit-flex;display:flex;font-size:26rpx;height:60rpx;justify-content:space-between;line-height:60rpx;width:690rpx}.page-box .top-box .tb-m .popop-box .play-box .play-it .price-sx .sx-it{align-items:center;border:1rpx solid #bbb;border-radius:10rpx;display:-webkit-flex;display:flex;height:60rpx;justify-content:center;padding:0 20rpx;width:312rpx}.page-box .top-box .tb-m .popop-box .play-box .play-it .price-sx .sx-it input{font-size:26rpx;text-align:center}.page-box .top-box .tb-m .popop-box .date-box{margin-left:-30rpx}.page-box .top-box .tb-m .popop-box .date-box .day-box{margin-bottom:30rpx}.page-box .top-box .tb-m .popop-box .date-box .day-box .title{color:#333;font-size:28rpx;height:40rpx;line-height:40rpx;margin-bottom:30rpx;margin-left:30rpx}.page-box .top-box .tb-m .popop-box .date-box .day-box .days{margin-left:30rpx;white-space:nowrap;width:720rpx}.page-box .top-box .tb-m .popop-box .date-box .day-box .days .day-item{border:1rpx solid #bbb;border-radius:10rpx;display:inline-block;height:60rpx;line-height:58rpx;margin-right:20rpx;text-align:center;width:114rpx}.page-box .top-box .tb-m .popop-box .date-box .day-box .days .active{background:rgba(255,84,17,.1);border:1rpx solid #ff5411;box-shadow:0 4rpx 0 0 rgba(255,84,17,.1);position:relative}.page-box .top-box .tb-m .popop-box .date-box .day-box .days .active::after{background:url('https://eshopfile.zhiyousx.com/2023092011324955710.png');background-repeat:no-repeat;background-size:100% 100%;bottom:0;content:"";height:18rpx;position:absolute;right:0;width:18rpx}.page-box .top-box .tb-m .popop-box .but-box{align-items:center;display:-webkit-flex;display:flex;height:80rpx;justify-content:space-between;width:690rpx}.page-box .top-box .tb-m .popop-box .but-box .bt-l{align-items:center;color:#555;display:-webkit-flex;display:flex;font-size:28rpx;height:80rpx;justify-content:center;width:166rpx}.page-box .top-box .tb-m .popop-box .but-box .bt-l .icon{margin-right:10rpx}.page-box .top-box .tb-m .popop-box .but-box .btn{background:linear-gradient(253deg,#fc4a9b,#ff5413);border-radius:40rpx;color:#fff;font-size:28rpx;height:80rpx;line-height:80rpx;text-align:center;width:506rpx}.page-box .top-box .tbms{border-radius:0;box-shadow:none}.page-box .top-box .tbmP{border-radius:0;box-shadow:0 5rpx 10rpx 0 rgba(0,0,0,.08)}.page-box .top-box .scrollTrue{background:#fff;box-shadow:0 10rpx 10rpx 0 rgba(0,0,0,.08)}.page-box .top-box .tb-b{border-radius:0 0 20rpx 20rpx;height:94rpx;margin-top:-2rpx;padding-top:20rpx;width:100%}.page-box .top-box .tb-b .scrollBox{display:block;height:54rpx;margin-left:20rpx;white-space:nowrap;width:730rpx}.page-box .top-box .tb-b .scrollBox .options{background:rgba(0,0,0,.05);border-radius:30rpx;color:#333;display:inline-block;font-size:24rpx;height:54rpx;line-height:54rpx;margin:0 10rpx;padding:0 30rpx}.page-box .top-box .tb-b .scrollBox .options .icon{height:26rpx;width:26rpx}.page-box .top-box .tb-b .scrollBox .active{background:rgba(255,84,17,.1);border:1rpx solid #ff5411;box-shadow:0 4rpx 0 0 rgba(255,84,17,.1)}.page-box .production-box{margin:0 30rpx}.page-box .production-box .item{background:#fff;border-radius:20rpx;margin-bottom:20rpx;padding:20rpx 0 20rpx 20rpx}.page-box .production-box .item .info-box{display:-webkit-flex;display:flex}.page-box .production-box .item .info-box .pic-box{border-radius:10rpx 20rpx 20rpx 20rpx;box-shadow:6rpx 0 0 0 rgba(0,0,0,.15),12rpx 0 0 0 rgba(0,0,0,.05);height:auto;max-width:208rpx;min-height:208rpx;position:relative;width:208rpx}.page-box .production-box .item .info-box .pic-box image{border-radius:10rpx 20rpx 20rpx 20rpx;height:100%;width:100%}.page-box .production-box .item .info-box .pic-box .lt-tip{background:rgba(35,32,32,.5);border-radius:10rpx 0 10rpx 0;color:#fff;font-size:24rpx;height:42rpx;left:0;line-height:42rpx;min-width:72rpx;padding:0 12rpx;position:absolute;text-align:center;top:0}.page-box .production-box .item .info-box .pic-box .bto-tip{align-items:center;background:rgba(35,32,32,.5);border-radius:0 0 20rpx 20rpx;bottom:0;display:-webkit-flex;display:flex;height:42rpx;justify-content:center;left:0;position:absolute;width:208rpx}.page-box .production-box .item .info-box .pic-box .bto-tip image{height:20rpx;margin-right:6rpx;width:20rpx}.page-box .production-box .item .info-box .pic-box .bto-tip .txt{color:#fff;font-size:24rpx}.page-box .production-box .item .info-box .r-info{display:-webkit-flex;display:flex;flex-direction:column;height:auto;justify-content:space-between;margin-left:20rpx;min-height:200rpx;padding-bottom:8rpx;width:422rpx}.page-box .production-box .item .info-box .r-info .nameTipsBox .name{color:#1e1b19;font-size:32rpx;line-height:46rpx}.page-box .production-box .item .info-box .r-info .nameTipsBox .name .star-box{display:inline-block;height:38rpx;margin-left:10rpx;position:relative;width:40rpx}.page-box .production-box .item .info-box .r-info .nameTipsBox .name .star-box .star{background:linear-gradient(51deg,#e8b091,#ffe7d0);border-radius:6rpx;color:#92322a;font-size:24rpx;height:38rpx;left:0;line-height:38rpx;position:absolute;text-align:center;top:8rpx;width:40rpx}.page-box .production-box .item .info-box .r-info .nameTipsBox .ad{color:rgba(30,27,25,.6);font-size:24rpx;line-height:34rpx}.page-box .production-box .item .info-box .r-info .nameTipsBox .rank{background:rgba(217,52,0,.1);border-radius:60rpx;color:#92322a;display:inline-block;font-size:24rpx;line-height:34rpx;margin-top:16rpx;padding:0 20rpx}.page-box .production-box .item .info-box .r-info .nameTipsBox .highLights{margin-top:8rpx}.page-box .production-box .item .info-box .r-info .nameTipsBox .highLights text{color:rgba(30,27,25,.4);font-size:24rpx;line-height:24rpx}.page-box .production-box .item .info-box .r-info .nameTipsBox .tips{display:-webkit-flex;display:flex;flex-wrap:wrap;height:34rpx;margin-top:16rpx;overflow:hidden}.page-box .production-box .item .info-box .r-info .nameTipsBox .tips .it{margin-right:10rpx}.page-box .production-box .item .info-box .r-info .nameTipsBox .tips .tag{border:1rpx solid rgba(30,27,25,.2);border-radius:40rpx;color:#92322a;font-size:24rpx;height:34rpx;line-height:32rpx;padding:0 20rpx}.page-box .production-box .item .info-box .r-info .price-box{align-items:flex-end;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:16rpx;width:100%}.page-box .production-box .item .info-box .r-info .price-box .item-btn{background:linear-gradient(107deg,#ffb2d5,#ffc1aa);border-radius:30px;color:#fff;font-size:26rpx;height:50rpx;line-height:50rpx;text-align:center;width:120rpx}.page-box .production-box .item .info-box .r-info .price-box .pl{align-items:flex-end;color:#ff5411;display:-webkit-flex;display:flex;font-size:32rpx;font-weight:500;line-height:1}.page-box .production-box .item .info-box .r-info .price-box .pl .t{margin-left:4rpx}.page-box .production-box .item .info-box .r-info .price-box .pl .line-through{color:rgba(30,27,25,.3);font-size:32rpx;font-weight:400;line-height:1;margin-left:4rpx;text-decoration:line-through}.page-box .production-box .disable{background:#eee}.page-box .production-box .ptxt{align-items:center;color:#999897;display:-webkit-flex;display:flex;font-size:24rpx}.page-box .mask-box{background:rgba(0,0,0,.5);height:100vh;left:0;position:fixed;top:0;width:100%;z-index:10}
</style>
