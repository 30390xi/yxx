<template>
<view class="city">
    <uni-navbar class="" :title="cityinfo.cityName||'城市'" :titleCenter="false" :transparentFixedFontColor="scrollTop+fixNavTop>navtop2?'#000000':'rgba(255,255,255,0)'" type="transparentFixed"></uni-navbar>
    <view class="fixHeader" id="fixHeader" :style="'background:'+'rgba(255,255,255,'+scrollTop/(navtop2-fixednavTop)+')'+';'">
        <image class="rank" :style="'margin-top:'+searchHeight+8+'px'+';'+'opacity:'+(scrollTop>navtop2-fixednavTop?1:0)+';'"></image>
    </view>
    <view class="" id="mainbox" :style="'padding-bottom:'+'64rpx'+';'">
        <view class="banner">
            <swiper class="swiper" v-if="$root.g0">
                <swiper-item class="" :key="i" v-for="(options, i) in cityinfo.cityAlbumUrls">
                    <view class="tab_item">
                        <view class="tab_icon">
                            <image class="" mode="aspectFill" :src="options"></image>
                        </view>
                    </view>
                </swiper-item>
            </swiper>
            <swiper autoplay="false" class="swiper" interval="4000" v-else>
                <swiper-item @touchmove.stop.prevent="" class="" :key="i" v-for="(options, i) in cityinfo.cityAlbumUrls">
                    <view class="tab_item">
                        <view class="tab_icon">
                            <image class="" mode="aspectFill" :src="options"></image>
                        </view>
                    </view>
                </swiper-item>
            </swiper>
            <view class="info">
                <view class="box box1">
                    <text class="name">{{cityinfo.cityName||''}}</text>
                    <text class="temp" v-if="weaterObj.nowTemperature">{{weaterObj.nowTemperature+'°C'}}</text>
                </view>
                <view class="box box2">
                    <text class="">{{cityinfo.cityTag||''}}</text>
                    <text class="">{{weaterObj.weather||''}}</text>
                </view>
            </view>
        </view>
        <view class="strategy" v-if="cityStrategyList&&cityStrategyList[0]">
            <view class="title">
                <view class="name">
                    <text class="">{{cityinfo.cityName||''}}</text>
                    <text class="gl">攻略</text>
                </view>
                <view class="more" v-if="$root.g1>6" @click="tostrategyList($event)">
                    <text class="">更多</text>
                    <u-icon class="" color="#D3D3D3" name="arrow-right" size="20"></u-icon>
                </view>
            </view>
            <view class="strategylist">
                <view class="item" v-if="index<6" :key="index" v-for="(item, index) in $root.l0">
                    <image class="recommond" src="https://eshopfile.zhiyousx.com/2021091011022464343.png" v-if="item.isRecommend==1"></image>
                    <image class="spot" mode="aspectFill" :src="item.m0"></image>
                    <view class="info">
                        <view class="name singleLineText">{{item.title}}</view>
                        <view class="time singleLineText" v-if="item.subtitle">{{item.subtitle}}</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="ranklist" v-if="rankingList&&rankingList[0]">
            <view class="title">
                <view class="name">
                    <text class="">{{(cityinfo.cityName||'')+'榜单'}}</text>
                </view>
                <view class="more" @click="toranking(1)">
                    <text class="">更多</text>
                    <u-icon class="" color="#D3D3D3" name="arrow-right" size="20"></u-icon>
                </view>
            </view>
            <view class="rank">
                <view class="item" :style="'background-image:'+'url('+item.rankingMainPictureUrl+')'+';'" v-if="index<2" :key="index" v-for="(item, index) in rankingList">
                    <view class="linearbg" :style="'background:'+'linear-gradient(180deg,'+(item.bottomColour||'#6E4B4A')+'00 3%,'+(item.bottomColour||'#6E4B4A')+' 30%)'+';'"></view>
                    <view class="like singleLineText" v-if="item.rankingType==2&&item.favoriteSum&&item.favoriteSum>10">{{item.favoriteSum+'人喜爱'}}</view>
                    <view class="name singleLineText">{{item.rankingName}}</view>
                    <view class="list">
                        <view class="option" :key="i" v-for="(items, i) in item.rankingItemList">
                            <image class="mainImg" mode="aspectFill" :src="items.originUrl"></image>
                            <view class="info">
                                <view class="sname singleLineText">{{items.originName}}</view>
                                <view class="likeval" v-if="items.originType==2&&items.favoriteValue">{{items.favoriteValue+' 喜爱值'}}</view>
                                <view class="likeval price" v-else>
                                    <text class="p" v-if="items.price">{{'￥'+items.price}}</text>
                                    <text class="del" v-if="items.retailPrice">{{'￥'+items.retailPrice}}</text>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="travelNav" v-if="spotTagList[0]||childTagList[0]">
        <view class="fixedcitynav" id="fixedcitynav" :style="fixedstyle">
            <view class="tabs">
                <view :class="['tab','',listType==0?'active':'']" :hidden="!spotTagList[0]" @click="changelistType(0)">{{'玩在'+(cityinfo.cityName||'')}}</view>
                <view :class="['tab','',listType==1?'active':'']" :hidden="!childTagList[0]" @click="changelistType(1)">{{'吃在'+(cityinfo.cityName||'')}}</view>
            </view>
            <scroll-view class="tablabel" :scrollWithAnimation="true" :scrollX="true" v-if="listType==0&&spotTagList[0]">
                <view class="">
                    <view :class="['label','',currentTagId0==item.id?'active':'']" :key="i" v-for="(item, i) in spotTagList">{{item.name}}</view>
                </view>
            </scroll-view>
            <scroll-view class="tablabel" :scrollWithAnimation="true" :scrollX="true" v-if="listType==1&&childTagList[0]">
                <view class="">
                    <view :class="['label','',currentTagId1==item.id?'active':'']" :key="i" v-for="(item, i) in childTagList">{{item.name}}</view>
                </view>
            </scroll-view>
        </view>
        <scroll-view class="spotList vue-ref" ref="scrollView" :scrollTop="scrollTopView1" :scrollY="showHideScroll" :style="'min-height:'+listMinH+'px'+';'" v-if="listType==0" @scroll="scroll1($event)" @scrolltolower="handleScrollToLower($event)">
            <view class="item" :key="i" v-for="(item, i) in spotList">
                <image class="img" mode="aspectFill" :src="item.mainPicture"></image>
                <view class="info">
                    <view class="name singleLineText">
                        <text class="" v-if="item.isBookable">订</text>{{item.scenicName}}</view>
                    <view class="rank singleLineText" v-if="item.rankingName">{{item.rankingName+'第'+item.sort+'名'}}</view>
                    <view class="desc singleLineText" v-if="item.tag">{{item.tag}}</view>
                </view>
            </view>
        </scroll-view>
        <scroll-view class="spotList vue-ref" ref="scrollView" :scrollTop="scrollTopView2" :scrollY="showHideScroll" :style="'min-height:'+listMinH+'px'+';'" v-if="listType==1" @scroll="scroll2($event)" @scrolltolower="handleScrollToLower($event)">
            <view class="item" :key="i" v-for="(item, i) in childpageList">
                <image class="img" mode="aspectFill" :src="item.coverImage"></image>
                <view class="info">
                    <view class="name singleLineText">{{item.title}}</view>
                    <view class="rank singleLineText" v-if="item.rankingName">{{item.rankingName+'第'+item.sort+'名'}}</view>
                    <view class="desc singleLineText">{{item.subtitle}}</view>
                    <view class="likeRate" v-if="item.favoriteValue">
                        <text class="icon">喜爱值</text>
                        <text class="num">{{item.favoriteValue}}</text>
                    </view>
                </view>
            </view>
        </scroll-view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              bannerList: [0, 0, 0, 0],
              citynavTop: 200,
              fixedstyle: "",
              size: 10,
              current: 1,
              cityinfo: {},
              cityStrategyList: {},
              rankingList: {},
              currentTagId0: "",
              currentTagId1: "",
              spotTagList: {},
              childTagList: {},
              listType: 0,
              spotList: [],
              listMinH: 0,
              weaterObj: {},
              toggleTop: 0,
              childpageList: [],
              location: {},
              loadMore: "loading",
              cityId: "",
              scrollTop: 0,
              showIndex: !0,
              fixednavH: 20,
              searchHeight: 0,
              headNavTop: 91,
              fixNavTop: 90,
              refreshing: !1,
              navtop2: 100,
              fixednavTop: 0,
              countHeight: 0,
              scrollTopView1: 0,
              scrollTopView2: 0,
              scrollTopView3: {
                top: 0
              },
              scrollTopView4: {
                top: 0
              },
              showHideScroll: !1,
              httpsShowLoading: !1
            }
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop
          },
          onReachBottom: function() {
            this.reachBottom()
          },
          onLoad: function(i) {
            var o = this;
            this.cityId = i.cityId || this.cityId;
            var e = uni.getMenuButtonBoundingClientRect();
            this.searchHeight = e.top, this.headNavTop = this.searchHeight + 8 + this.$util.rpxToPx(65), this.fixednavH = e.top + this.$util.rpxToPx(150), this.countHeight = this.headNavTop + this.$util.rpxToPx(155), uni.getSystemInfo({
              success: function(t) {
                var i = 750 / t.screenWidth;
                o.fixNavTop = parseInt(e.top + 80 / i)
              }
            }), this.getDomInfo().then((function(i) {
              uni.getSystemInfo({
                success: function(t) {
                  o.fixednavTop = i[0].height - parseInt(68 / o.unit)
                }
              })
            })), this.getCityInfo(), console.log(this.cityinfo, 11111111), this.location = uni.getStorageSync("location")
          },
          onPullDownRefresh: function() {
            this.current = 1, this.spotList = [], this.childpageList = [], this.getCityInfo(!0), this.getData()
          },
          watch: {
            scrollTop: function(t) {
              this.fixedstyle = t + this.headNavTop > this.citynavTop ? "position:fixed;top:".concat(this.headNavTop, "px") : "", this.showHideScroll = t + this.headNavTop > this.citynavTop, console.log(t + this.headNavTop, this.citynavTop, t + this.headNavTop > this.citynavTop), this.toggleTop < 300 && t > 300 && (this.toggleTop = this.citynavTop - this.headNavTop)
            }
          },
          methods: {
            setSrc: function(t) {
              if (t.coverPictureUrl) return t.coverPictureUrl;
              var i = t.lineCoverPic ? JSON.parse(t.lineCoverPic) : [];
              return i.length > 0 ? i[0].url : ""
            },
            handleScrollToLower: function() {
              console.log("触底了")
            },
            scroll1: function(t) {
              this.scrollTopView3.top = t.detail.scrollTop
            },
            scroll2: function(t) {
              this.scrollTopView4.top = t.detail.scrollTop
            },
            getDomInfo: function() {
              var i = this;
              return new Promise((function(o) {
                setTimeout((function() {
                  i.$nextTick((function() {
                    var i = uni.createSelectorQuery();
                    i.select("#fixHeader").boundingClientRect(), i.exec((function(t) {
                      o(t)
                    }))
                  }))
                }), 500)
              }))
            },
            reachBottom: function() {
              "loadmore" === this.loadMore ? this.getData() : "nomore" === this.loadMore && uni.showToast({
                title: "没有更多咯",
                icon: "none"
              })
            },
            getCityWeather: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/v1/common/getNowWeather?id=" + this.cityinfo.cityCode).then((function(i) {
                t.weaterObj = i.data
              }))
            },
            getCityInfo: function(i) {
              var e = this,
                n = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/city/queryCityDetail?size=".concat(this.size, "&current=").concat(this.current, "&cityId=").concat(this.cityId)).then((function(a) {
                e.cityinfo = a.data.cityVO, e.getCityWeather(), e.cityStrategyList = a.data.cityStrategyList, e.rankingList = a.data.rankingList, e.spotTagList = a.data.scenicSpotTagList, e.childTagList = a.data.scenicChildTagList, i && (uni.stopPullDownRefresh(), e.refreshing = !1), e.getDomInfo2().then((function(i) {
                  uni.getSystemInfo({
                    success: function(t) {
                      n.citynavTop = i[0].height, n.listMinH = t.screenHeight - n.headNavTop - n.$util.rpxToPx(175)
                    }
                  })
                })), !e.currentTagId0 && e.spotTagList && e.spotTagList[0] ? (e.tagId = e.spotTagList[0].id, e.currentTagId0 = e.spotTagList[0].id, e.getData()) : !e.currentTagId1 && e.childTagList && e.childTagList[0] && (e.listType = 1, e.tagId = e.childTagList[0].id, e.currentTagId1 = e.childTagList[0].id, e.getData())
              }))
            },
            getContentList: function(i, o) {
              var e = this;
              if (!this.httpsShowLoading) {
                this.httpsShowLoading = !0;
                var n = {
                    size: this.size,
                    current: this.current,
                    cityId: this.cityId,
                    tagId: this.tagId || "",
                    longitude: this.location.longitude || "",
                    latitude: this.location.latitude || ""
                  },
                  a = this;
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/contentApp/queryCityScenicChildByCityIdPage", n).then((function(n) {
                  if (0 != e.listType) {
                    var s = n.data.records;
                    n.data.total > 0 ? (1 === n.data.current ? e.childpageList = s : e.childpageList = e.childpageList.concat(s), n.data.current < n.data.pages ? (e.current = e.current + 1, e.loadMore = "loadmore") : e.loadMore = "nomore", 1 === i && e.$nextTick((function() {
                      uni.pageScrollTo({
                        duration: 0,
                        scrollTop: o + a.headNavTop > a.citynavTop ? a.toggleTop + 10 : o
                      })
                    })), e.httpsShowLoading = !1) : (e.loadMore = "nomore", e.childpageList = [], e.httpsShowLoading = !1)
                  }
                })).catch((function(i) {
                  e.httpsShowLoading = !1, uni.stopPullDownRefresh()
                }))
              }
            },
            getSpotList: function(i, o) {
              var e = this;
              if (!this.httpsShowLoading) {
                this.httpsShowLoading = !0;
                var n = {
                  size: this.size,
                  current: this.current,
                  cityId: this.cityId,
                  tagId: this.tagId || "",
                  longitude: this.location.longitude || "",
                  latitude: this.location.latitude || ""
                };
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpot/queryCityScenicSpotByCityIdPage", n).then((function(n) {
                  if (1 != e.listType) {
                    var a = n.data.records,
                      s = e;
                    n.data.total > 0 ? (1 === n.data.current ? e.spotList = a : e.spotList = e.spotList.concat(a), n.data.current < n.data.pages ? (e.current = e.current + 1, e.loadMore = "loadmore") : e.loadMore = "nomore", e.httpsShowLoading = !1, 1 === i && e.$nextTick((function() {
                      uni.pageScrollTo({
                        duration: 0,
                        scrollTop: o + s.headNavTop > s.citynavTop ? s.toggleTop + 10 : o
                      })
                    }))) : (e.loadMore = "nomore", e.spotList = [], e.httpsShowLoading = !1)
                  }
                })).catch((function(i) {
                  e.httpsShowLoading = !1, uni.stopPullDownRefresh()
                }))
              }
            },
            changelistType: function(t) {
              this.httpsShowLoading || (this.current = 1, this.listType = t, this.spotList = [], this.childpageList = [], this.loadMore = "loadmore", 1 == t ? (this.currentTagId1 || (this.currentTagId1 = this.childTagList[0].id), this.tagId = this.currentTagId1) : 0 == t && (this.tagId = this.currentTagId0), this.getData(1))
            },
            changelabel: function(t) {
              this.httpsShowLoading || (this.current = 1, this.tagId = t, this.spotList = [], this.childpageList = [], this.loadMore = "loadmore", this["currentTagId".concat(this.listType)] = t, this.getData(1))
            },
            getData: function(t) {
              0 == this.listType ? this.getSpotList(t, this.scrollTop) : 1 == this.listType && this.getContentList(t, this.scrollTop)
            },
            tostrategyList: function() {
              this.$navigateTo({
                url: "/subPage/pages/strategyList/strategyList?id=" + this.cityId
              })
            },
            toranking: function(i) {
              1 == i ? uni.switchTab({
                url: "/pages/rankList/rankList"
              }) : this.$navigateTo({
                url: "/pages/ranking/ranking?id=" + i.contentId
              })
            },
            toStrategy: function(t) {
              this.$util.cityJump(t.contentType, t.originId)
            },
            getDomInfo2: function() {
              var i = this;
              return new Promise((function(o) {
                setTimeout((function() {
                  var e = uni.createSelectorQuery().in(i);
                  e.select("#mainbox").boundingClientRect(), e.select("#fixedcitynav").boundingClientRect(), e.exec((function(t) {
                    o(t)
                  }))
                }), 800)
              }))
            },
            toSpot: function(t) {
              this.$navigateTo({
                url: "/pages/spotDetail/spotDetail?spotId=" + t.scenicId
              })
            },
            toSpotChild: function(t) {
              this.$navigateTo({
                url: "/pages/spotThirdDetail/spotThirdDetail?spotId=" + t.id
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background-color:#fff}.city .banner{height:400rpx;position:relative}.city .banner .swiper{height:400rpx;width:750rpx}.city .banner .swiper .tab_item{height:400rpx;overflow:hidden;position:relative;width:100%}.city .banner .swiper .tab_item image{height:400rpx;width:100%}.city .banner .info{background:linear-gradient(0deg,rgba(0,0,0,.7),rgba(0,0,0,.01));bottom:0;height:210rpx;left:0;pointer-events:none;position:absolute;width:100%}.city .banner .info .box{display:-webkit-flex;display:flex;justify-content:space-between;padding:0 40rpx}.city .banner .info .box.box1{align-items:flex-end;margin-top:55rpx}.city .banner .info .box.box2{margin-top:6rpx}.city .banner .info .box text{color:#fff;font-size:24rpx}.city .banner .info .box .name{font-size:40rpx;font-weight:700}.city .banner .info .box .temp{font-size:30rpx}.city .strategy{background:#fff;border-radius:30rpx 30rpx 0 0;margin-top:-40rpx;min-height:200rpx;padding:0 40rpx;position:relative;z-index:2}.city .strategy .title{align-items:baseline;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:10rpx;padding-top:40rpx}.city .strategy .title .name text{font-size:36rpx;font-weight:700}.city .strategy .title .name .gl{color:#ff5411}.city .strategy .title .more{align-items:center;display:-webkit-flex;display:flex}.city .strategy .title .more text{color:#979797;font-size:24rpx}.city .strategy .strategylist{display:-webkit-flex;display:flex;flex-wrap:wrap;padding-bottom:20rpx;width:688rpx}.city .strategy .strategylist .item{height:203rpx;margin-bottom:8rpx;margin-right:17rpx;padding-top:23rpx;position:relative;width:212rpx}.city .strategy .strategylist .item .recommond{height:74rpx;position:absolute;right:17rpx;top:0;width:63rpx;z-index:3}.city .strategy .strategylist .item .spot{border-radius:20rpx;height:180rpx;width:212rpx}.city .strategy .strategylist .item .info{background:linear-gradient(0deg,rgba(0,0,0,.5),transparent);border-radius:20rpx;bottom:0;height:180rpx;left:0;padding:20rpx;position:absolute;width:212rpx;z-index:2}.city .strategy .strategylist .item .info .name{color:#fff;font-size:24rpx;margin-top:85rpx;text-shadow:0 2px 0 rgba(0,0,0,.2)}.city .strategy .strategylist .item .info .time{color:rgba(255,255,225,.7);font-size:20rpx;margin-top:5rpx;text-shadow:0 2px 0 rgba(0,0,0,.2)}.city .ranklist{padding:0 40rpx}.city .ranklist .title{align-items:baseline;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:10rpx;padding-top:40rpx}.city .ranklist .title .name text{font-size:36rpx;font-weight:700}.city .ranklist .title .name .gl{color:#ff5411}.city .ranklist .title .more{align-items:center;display:-webkit-flex;display:flex}.city .ranklist .title .more text{color:#979797;font-size:24rpx}.city .ranklist .rank{display:-webkit-flex;display:flex;justify-content:space-between;margin-top:28rpx}.city .ranklist .rank .item{background-position:top;background-repeat:no-repeat;background-size:100%;border-radius:20rpx;height:530rpx;overflow:hidden;position:relative;width:326rpx}.city .ranklist .rank .item .like{background:#ff8f15;border-radius:15rpx;color:#fff;display:inline-block;font-size:20rpx;height:30rpx;left:20rpx;padding:0rpx 12rpx;position:absolute;text-shadow:0 2px 0 rgba(0,0,0,.2);top:96rpx;z-index:2}.city .ranklist .rank .item .name{color:#fff;font-size:28rpx;padding:0 20rpx;position:relative;text-shadow:0 2rpx 0 rgba(0,0,0,.2);top:136rpx;z-index:2}.city .ranklist .rank .item .list{background:#fff;border-radius:10rpx;height:340rpx;margin:8rpx 12rpx;padding:10rpx;position:relative;top:136rpx;z-index:2}.city .ranklist .rank .item .list .option{display:-webkit-flex;display:flex;height:100rpx;margin-bottom:10rpx}.city .ranklist .rank .item .list .option:last-child{margin-bottom:0}.city .ranklist .rank .item .list .option .mainImg{border-radius:10rpx;height:100rpx;width:100rpx}.city .ranklist .rank .item .list .option .info{height:100rpx;margin-left:18rpx;width:162rpx}.city .ranklist .rank .item .list .option .info .sname{color:#656565;font-size:26rpx;margin-top:10rpx}.city .ranklist .rank .item .list .option .info .likeval{color:#bbb;font-size:24rpx;margin-top:16rpx}.city .ranklist .rank .item .list .option .info .price .p{color:#ff5411;margin-right:9rpx}.city .ranklist .rank .item .list .option .info .price .del{color:#bbb;text-decoration:line-through}.city .ranklist .rank .item .list .option .info .price text{font-size:24rpx}.city .ranklist .rank .item .linearbg{height:530rpx;position:absolute;width:326rpx;z-index:1}.city .travelNav{padding-left:40rpx;padding-top:175rpx;position:relative;width:calc(100% - 40rpx)}.city .travelNav .fixedcitynav{background:#fff;height:155rpx;left:0rpx;min-height:72rpx;padding:10rpx 0 10rpx 40rpx;position:absolute;top:0;width:750rpx;z-index:10}.city .travelNav .tabs{align-items:baseline;display:-webkit-flex;display:flex}.city .travelNav .tabs .tab{color:#282828;font-size:32rpx;margin-right:47rpx}.city .travelNav .tabs .active{font-size:36rpx;font-weight:700}.city .travelNav .tablabel{margin-top:30rpx;white-space:nowrap;width:710rpx}.city .travelNav .tablabel .label{border:1px solid #bbb;border-radius:25rpx;color:#656565;display:inline-block;font-size:24rpx;height:50rpx;line-height:48rpx;margin-right:10rpx;padding:0 22rpx;text-align:center}.city .travelNav .tablabel .label.active{background:linear-gradient(56deg,#f99f1d,#fe581e);border:none;color:#fff;line-height:48rpx}.city .travelNav .spotList{padding:0rpx 0 30rpx;position:relative}.city .travelNav .spotList .item{display:-webkit-flex;display:flex;height:240rpx;margin-bottom:30rpx}.city .travelNav .spotList .item:last-child{margin-bottom:0}.city .travelNav .spotList .item .img{background:#e0e0e0;border-radius:20rpx;height:100%;width:240rpx}.city .travelNav .spotList .item .info{padding-left:30rpx;width:440rpx}.city .travelNav .spotList .item .info .name{color:#333;font-size:32rpx;line-height:46rpx}.city .travelNav .spotList .item .info .name text{background:linear-gradient(56deg,#f99f1d,#fe581e);border-radius:10rpx;color:#fff;display:inline-block;font-size:22rpx;height:30rpx;line-height:28rpx;margin-right:8rpx;text-align:center;vertical-align:4rpx;width:30rpx}.city .travelNav .spotList .item .info .rank{background:#ffefd5;border-radius:4px 18px 18px 18px;color:#945430;display:inline-block;font-size:22rpx;height:36rpx;line-height:36rpx;margin-top:24rpx;max-width:410rpx;padding:0 16rpx}.city .travelNav .spotList .item .info .desc{color:#959494;font-size:24rpx;margin-top:12rpx}.city .travelNav .spotList .item .info .distance{align-items:center;color:#959494;display:-webkit-flex;display:flex;font-size:24rpx;margin-top:26rpx}.city .travelNav .spotList .item .info .distance image{height:21rpx;margin-right:8rpx;width:18rpx}.city .travelNav .spotList .item .info .likeRate{margin-top:26rpx;position:relative}.city .travelNav .spotList .item .info .likeRate text{display:inline-block}.city .travelNav .spotList .item .info .likeRate .icon{background:#feac2c;border-radius:6rpx 18rpx 6rpx 18rpx;bottom:2rpx;color:#fff;font-size:20rpx;height:36rpx;left:0;line-height:36rpx;position:absolute;text-align:center;width:80rpx}.city .travelNav .spotList .item .info .likeRate .num{background:#ffefd5;border-radius:16rpx 6rpx 6rpx 16rpx;color:#ff5411;font-size:24rpx;font-weight:400;height:32rpx;padding:0 14rpx 0 92rpx}.head_container{left:0;padding:0 0 20rpx 40rpx;position:fixed;top:0;width:750rpx;z-index:100}.head_container .logo_t{height:44rpx;width:216rpx}.head_container .searchBoxTop{background-color:rgba(0,0,0,.3);border-radius:40rpx;box-shadow:0 0 30px 0 rgba(57,100,77,.1);height:60rpx;justify-content:space-between;margin-top:10rpx;width:670rpx}.head_container .searchBoxTop .item,.head_container .searchBoxTop{align-items:center;display:-webkit-flex;display:flex}.head_container .searchBoxTop .item.btn{border-left:1px solid hsla(0,0%,100%,.4);color:#fff;font-size:26rpx;height:30rpx;justify-content:center;width:138rpx}.head_container .searchBoxTop .item.txt{padding-left:30rpx}.head_container .searchBoxTop .item.txt image{height:38rpx;width:38rpx}.head_container .searchBoxTop .searchInput{color:#777474;font-size:26rpx;margin-left:16rpx;width:430rpx}.fixHeader{left:0;position:fixed;top:0;width:750rpx;z-index:99}.fixHeader .rank{height:53rpx;margin-bottom:12rpx;margin-left:106rpx;transition:all .3s linear;width:160rpx}
</style>
