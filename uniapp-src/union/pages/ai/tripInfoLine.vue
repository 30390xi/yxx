<template>
<view class="box">
    <view class="lable_box" :style="'justify-content:'+($root.g0>6?'flex-start':'center')+';'">
        <scroll-view class="lable_content" :scrollLeft="scrollToLeft" scrollWithAnimation="true" :scrollX="true" :style="'width:'+($root.g1>6?'750rpx':'auto')+';'" :throttle="false">
            <view :class="['lable','',activeDays==index?'active':'']" :key="index" v-for="(item, index) in $root.l0">{{item.m0+''}}<label class="lins _span" :style="'background:'+'linear-gradient(90deg, '+buttonColour+' 0%, rgba(255,84,19,0) 100%)'+';'" v-if="activeDays==index"></label>
            </view>
        </scroll-view>
    </view>
    <view class="loction">
        <view class="trip" v-if="isTrip">
            <view class="trip_row">
                <image class="tripIcon" :src="trip.icon"></image>
                <label class="trip_lable _span">{{trip.type}}</label>
                <label class="val _span">{{trip.distance}}</label>
            </view>
            <view class="trip_row">
                <image class="tripIcon" src="https://eshopfile.zhiyousx.com/169216975204897973.png"></image>
                <label class="trip_lable _span">预计</label>
                <label class="val _span">{{trip.duration}}</label>
            </view>
        </view>
        <map class=" vue-ref" ref="map" :enableRotate="true" id="map" :latitude="map.latitude" layerStyle="1" :longitude="map.longitude" :markers="markers" :polyline="polyline" :showLocation="true" style="width:100%;height:100%;" :subkey="subkey" @labeltap="getMarker($event)" @callouttap="getMarker($event)">
            <cover-view class="" slot="callout">
                <cover-view class="customCallout" :markerId="item.id" :key="index" v-for="(item, index) in markers">
                    <cover-view class="spot_info">
                        <cover-image class="spot_img" :hidden="!(item.mainPic&&scrollLeft==index)" :src="item.mainPic"></cover-image>
                        <cover-view class="title">{{item.title}}</cover-view>
                    </cover-view>
                    <cover-view class="jx">
                        <cover-view class="jiantou"></cover-view>
                    </cover-view>
                </cover-view>
            </cover-view>
        </map>
        <view @touchmove.stop.prevent="" class="flex">
            <view class="position">
                <view class="spot" :style="'left:'+-scrollLeft*650+'rpx'+';'" @touchmove="scroll($event)" @touchstart="touchstart($event)">
                    <view class="spot_item" v-if="item.trafficType!=null" :key="index" v-for="(item, index) in $root.l1">
                        <view class="spot_icon" :style="'background:'+(index==scrollLeft?'#FF5411':buttonColour)+';'">{{index+1+''}}</view>
                        <view class="other" v-if="item.journeyDestinationType==8">
                            <image class="spot_img" mode="aspectFill" :src="item.cardImage" v-if="item.cardImage"></image>
                            <view class="spot_info">
                                <view class="spot_name">{{item.destinationName}}</view>
                                <u-parse class="content" :html="item.content" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
                            </view>
                        </view>
                        <view class="" style="display:inline-flex;" v-else>
                            <image class="spot_img" mode="aspectFill" :src="item.lineDestinationVO.mainPic"></image>
                            <view class="spot_info">
                                <view class="spot_name">{{item.lineDestinationVO.destinationName}}</view>
                                <view class="ranking singleLineText" v-if="item.lineDestinationVO.originSortInRankingVO.contentId">
                                    <view class="text">
                                        <view class="name singleLineText">{{''+item.lineDestinationVO.originSortInRankingVO.rankingName+'第'+item.lineDestinationVO.originSortInRankingVO.indexInRanking+'名'}}</view>
                                    </view>
                                </view>
                                <view class="card_describe subtitle" v-if="item.lineDestinationVO.subtitle">{{''+item.lineDestinationVO.subtitle}}</view>
                                <view class="card_ticket" v-if="item.lineDestinationVO.ticketName">
                                    <view class="ding">订</view>
                                    <view class="price">{{(item.lineDestinationVO.price==0?'免费':'￥'+item.lineDestinationVO.price)+''}}</view>
                                    <view class="ticketName singleLineText">{{item.lineDestinationVO.ticketName}}</view>
                                </view>
                                <view class="card_describe" v-if="item.m1">{{ item.m2 }}</view>
                            </view>
                        </view>
                    </view>
                    <view capture- class="nextDay" v-if="$root.g2-1!=activeDays" @click="nextDay($event)">
                        <view class="p">下一天</view>
                    </view>
                </view>
            </view>
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
                activeDays: 0,
                trip: {
                  distance: "",
                  duration: "",
                  type: ""
                },
                isTrip: !1,
                map: {
                  longitude: "108.939621",
                  latitude: "34.343147"
                },
                polyline: [],
                markers: [],
                controls: [],
                detailObj: [],
                allLocations: [],
                lineId: "",
                spotList: [],
                leftOffset: 0,
                activeSpot: 0,
                buttonColour: "",
                pageColour: "",
                parseStyle: {
                  p: "word-break: break-all;line-height:30rpx;color:rgba(0, 0, 0, 0.6);font-size:24rpx",
                  img: "border-radius: 20rpx;margin-top: 10rpx;",
                  span: "word-break: break-all;line-height:30rpx;color:rgba(0, 0, 0, 0.6);font-size:24rpx"
                },
                startX: 0,
                scrollLeft: -1,
                flag: !0,
                subkey: "U4JBZ-K7XW4-GH2UA-KVPJK-OLCYV-7WB3D",
                idy: 0,
                isInit: !0,
                shareInfo: {},
                scrollToLeft: 0
              }
            },
            onReady: function() {},
            onShareAppMessage: function(t) {
              var i = "/subPack/pages/tripInfo/tripInfo?id=".concat(this.lineId, "&buttonColour=").concat(this.buttonColour, "&pageColour=").concat(this.pageColour);
              return {
                title: this.shareInfo.shareDesc ? this.shareInfo.shareDesc : "线路详情",
                imageUrl: this.shareInfo.shareImage ? this.shareInfo.shareImage : this.shareInfo.image,
                path: this.$util.setShareUrl(i)
              }
            },
            onLoad: function(t) {
              this.lineId = t.id, this.buttonColour = "#239D454", this.pageColour = "#2353D9A1", this.getLocationList(this.lineId, 0, 0), this.getShareInfo(this.lineId)
            },
            onShareTimeline: function(t) {
              var i = "id=".concat(this.lineId, "&buttonColour=").concat(this.buttonColour, "&pageColour=").concat(this.pageColour);
              return {
                title: this.shareInfo.shareDesc ? this.shareInfo.shareDesc : "线路详情",
                imageUrl: this.shareInfo.shareImage ? this.shareInfo.shareImage : this.shareInfo.image,
                query: this.$util.setShareTimeline(i)
              }
            },
            onUnload: function() {},
            onShow: function() {},
            methods: {
              getShareInfo: function(t) {
                var i = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/detail/share/" + t).then((function(t) {
                  1 === t.code && (i.shareInfo = t.data)
                })).catch((function(t) {
                  i.$uni.showToast("网络走丢了，请刷新重试")
                }))
              },
              getLocationList: function(i, e, o) {
                var a = this;
                uni.showLoading({
                  title: "加载中",
                  mask: !0
                }), this.$uniApi.dataRequestNoLoading("GET", "ai/aiEscort/exclusive/line?lineId=" + this.lineId).then((function(i) {
                  uni.hideLoading(), 1 === i.code && (a.detailObj = i.data, a.initData(e, o))
                })).catch((function(i) {
                  uni.hideLoading(), a.$uni.showToast("网络走丢了，请刷新重试")
                }))
              },
              goSpot: function(i, e) {
                e <= 4 ? this.$navigateTo({
                  url: "/pages/spotDetail/spotDetail?spotId=" + i
                }) : 8 == e ? (uni.setStorageSync("activeDays", this.activeDays + 1), uni.navigateBack()) : this.$navigateTo({
                  url: "/pages/spotThirdDetail/spotThirdDetail?spotId=" + i
                })
              },
              dayName: function(t) {
                return "第" + ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三", "二十四"][t] + "天"
              },
              nextDay: function() {
                this.activeDays++, this.scrollToLeft = 120 * this.activeDays + "rpx", this.isInit = !0, this.initData(this.activeDays)
              },
              touchstart: function(t) {
                t.stopPropagation(), this.startX = t.changedTouches[0].pageX
              },
              scroll: function(t) {
                t.stopPropagation();
                var i = t.changedTouches[0].pageX - this.startX;
                if (this.flag) {
                  if (this.flag = !1, i < 0) {
                    var e = this.markers.length;
                    if (this.scrollLeft + 1 == e) return void(this.flag = !0);
                    this.scrollLeft++
                  } else {
                    if (0 == this.scrollLeft) return void(this.flag = !0);
                    this.scrollLeft--
                  }
                  this.changeSpot(this.scrollLeft)
                }
              },
              addMarker: function(t) {
                var i = this.markers[t];
                this.markers.push({
                  id: i.id + 1e4,
                  title: i.title,
                  longitude: i.longitude,
                  latitude: i.latitude,
                  width: 16,
                  height: 16,
                  day: i.day,
                  distance: i.distance,
                  duration: i.duration,
                  trafficType: i.trafficType,
                  mainPic: i.mainPic,
                  iconPath: "https://eshopfile.zhiyousx.com/169209589667867086.png",
                  customCallout: {
                    display: "ALWAYS",
                    anchorY: 10,
                    anchorX: -3
                  },
                  label: {
                    content: i.label.content,
                    bgColor: "#FF5411",
                    color: "#fff",
                    textAlign: "center",
                    borderRadius: 15,
                    width: 25,
                    height: 25,
                    fontSize: 12,
                    borderWidth: 2,
                    borderColor: "#fff",
                    anchorY: -10
                  }
                })
              },
              changeSpot: function(t) {
                var i = this;
                this.markers.forEach((function(t) {
                  t.label.bgColor = i.buttonColour, t.customCallout.display = "ALWAYS", t.zIndex = 10
                })), this.markers[t].label.bgColor = "#FF5411", this.markers[t].customCallout.display = "ALWAYS", this.markers[t].zIndex = 100, this.polyline.forEach((function(t) {
                  t.color = "#999"
                })), this.isInit || 0 === t || this.polyline.pop(), console.log(this.activeSpot, t, "TTTTTT"), 0 == t ? (this.isTrip = !1, this._mapContext.includePoints({
                  padding: ["120", "40", "180", "40"],
                  points: this.allLocations
                })) : (this.polyline[t - 1].color = this.pageColour, this._mapContext.includePoints({
                  padding: ["140", "40", "180", "40"],
                  points: this.polyline[t - 1].points
                }), this.polyline.push(this.polyline[t - 1])), 0 == t ? this.isTrip = !1 : (this.isInit = !1, this.markers[t].distance && (this.isTrip = !0, this.trip.distance = parseFloat((this.markers[t].distance / 1e3).toFixed(2)) + "km", this.trip.duration = this.setDuration(this.markers[t].duration), this.trip.type = ["不选", "乘车", "步行", "骑行", "公交"][this.markers[t].trafficType], this.trip.icon = ["", "https://eshopfile.zhiyousx.com/169216988024666771.png", "https://eshopfile.zhiyousx.com/169216993955957473.png", "https://eshopfile.zhiyousx.com/169216991912941576.png", "https://eshopfile.zhiyousx.com/169216988024666771.png"][this.markers[t].trafficType])), this.activeSpot = t, setTimeout((function() {
                  i.flag = !0
                }), 500)
              },
              setDuration: function(t) {
                var i = "",
                  e = 0,
                  o = 0;
                return t < 60 ? i = t + "分钟" : (e = Math.trunc(t / 60), i = (o = t % 60) ? e + "小时" + o + "分钟" : e + "小时"), i
              },
              changeDay: function(t) {
                this.activeDays = t, this.scrollToLeft = 120 * t + "rpx", this.isInit = !0, this.initData(t)
              },
              spotContent: function(t) {
                var i = "";
                return null != t.businessType && null != t.perCapitaConsumption ? i = t.businessType + " · " + t.perCapitaConsumption : null != t.businessType && (i = t.businessType), i
              },
              getMarker: function(t) {
                var i, e, o, a = null == t || null === (i = t.detail) || void 0 === i ? void 0 : i.markerId,
                  n = this.markers.filter((function(t, i) {
                    return t.index = i, t.id === a
                  }));
                this.changeSpot(null === (e = n[0]) || void 0 === e ? void 0 : e.index), this.scrollLeft = null === (o = n[0]) || void 0 === o ? void 0 : o.index
              },
              initData: function(i, e) {
                var o = this;
                this.activeSpot = 0, this.scrollLeft = 0, this.isTrip = !1, this.markers = [], this.allLocations = [], this.polyline = [];
                var n = 0;
                this.detailObj[i].lineJourneyDetailList.forEach((function(t, s) {
                  var r;
                  if (e && e == t.idy && (n = s), o.markers.push({
                      id: t.idx,
                      zIndex: 10,
                      title: t.destinationName,
                      longitude: t.longitude,
                      latitude: t.latitude,
                      width: 16,
                      height: 16,
                      day: o.detailObj[i].day,
                      distance: t.distance,
                      duration: t.duration,
                      trafficType: t.trafficType,
                      mainPic: null == t.lineDestinationVO ? t.cardImage : t.lineDestinationVO.mainPic,
                      iconPath: "https://eshopfile.zhiyousx.com/169209589667867086.png",
                      customCallout: {
                        display: "ALWAYS",
                        anchorY: 10,
                        anchorX: -3
                      },
                      label: {
                        content: s + 1 + "",
                        bgColor: o.buttonColour,
                        color: "#fff",
                        textAlign: "center",
                        borderRadius: 15,
                        width: 25,
                        height: 25,
                        fontSize: 12,
                        borderWidth: 2,
                        borderColor: "#fff",
                        anchorY: -10
                      }
                    }), null != t.coordinatesList && s > 0)
                    if ((r = o.allLocations).push.apply(r, (0, a.default)(t.coordinatesList)), t.coordinatesList.length > 1) o.polyline.push({
                      color: "#999",
                      width: 4,
                      points: t.coordinatesList
                    });
                    else {
                      var l = [];
                      l.push.apply(l, (0, a.default)(t.coordinatesList).concat((0, a.default)(t.coordinatesList))), o.polyline.push({
                        color: "#999",
                        width: 4,
                        points: l
                      })
                    }
                })), this.markers[0].label.bgColor = "#FF5411", this.markers[0].customCallout.display = "ALWAYS", this.markers[0].zIndex = 100, this.spotList = this.detailObj[i].lineJourneyDetailList, this.markers.length <= 1 ? (this.map.longitude = this.markers[0].longitude, this.map.latitude = this.markers[0].latitude, this.allLocations.push({
                  longitude: this.map.longitude,
                  latitude: this.map.latitude
                })) : (this.map.longitude = (this.markers[0].longitude + this.markers[this.markers.length - 1].longitude) / 2, this.map.latitude = (this.markers[0].latitude + this.markers[this.markers.length - 1].latitude) / 2), this._mapContext = t.createMapContext("map", this), this._mapContext.includePoints({
                  padding: ["120", "40", "180", "40"],
                  points: this.allLocations
                }), e && (this.scrollLeft = n, this.changeSpot(this.scrollLeft)), this.$forceUpdate()
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.box .lable_box{background:#fff;overflow-x:auto;width:100%}.box .lable_box .lable_content,.box .lable_box{display:-webkit-flex;display:flex;justify-content:center}.box .lable_box .lable_content{align-items:center;height:85rpx;padding:0 20rpx;white-space:nowrap;width:750rpx}.box .lable_box .lable_content .lable{color:rgba(0,0,0,.7);display:inline-block;font-size:26rpx;margin-right:40rpx}.box .lable_box .lable_content .lable .lins{background:linear-gradient(90deg,#fc554a,rgba(255,84,19,0));border-radius:40rpx;display:block;height:20rpx;margin-left:-3rpx;margin-top:-8rpx;width:96rpx}.box .lable_box .lable_content .active{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:700;padding-top:8rpx}.box .loction{height:1395rpx;position:relative;width:100%}.box .loction .trip{background:#fff;border-radius:10rpx;box-shadow:0rpx 4rpx 20rpx 0rpx rgba(0,0,0,.1);left:30rpx;padding:20rpx 20rpx 10rpx;position:absolute;top:50rpx;z-index:10}.box .loction .trip .trip_row{align-items:center;display:-webkit-flex;display:flex;margin-bottom:10rpx}.box .loction .trip .trip_row .tripIcon{height:24rpx;margin-right:10rpx;width:24rpx}.box .loction .trip .trip_row .trip_lable{color:rgba(0,0,0,.5);font-size:24rpx;margin-right:10rpx}.box .loction .trip .trip_row .val{color:rgba(0,0,0,.8);font-size:24rpx}.box .loction .customCallout{display:inline-block;position:relative}.box .loction .customCallout .day{background:#42c7ab;border-radius:10rpx;color:#fff;font-size:24rpx;font-weight:700;height:46rpx;line-height:38rpx;text-align:center;width:89rpx}.box .loction .customCallout .spot_info{align-items:center;background:#fff;border-radius:10rpx;box-shadow:0rpx 2rpx 10rpx 0rpx rgba(0,0,0,.2);display:-webkit-flex;display:flex;margin-bottom:10rpx;padding:10rpx}.box .loction .customCallout .spot_info .spot_img{border-radius:10rpx;height:60rpx;width:60rpx}.box .loction .customCallout .spot_info .title{color:rgba(0,0,0,.8);font-size:22rpx;padding:0 10rpx;width:auto}.box .loction .customCallout .jx{bottom:10rpx;left:50%;position:absolute}.box .loction .customCallout .jx .jiantou{background:#fff;border:1rpx solid rgba(0,0,0,.2);border-right:none;border-top:none;height:10rpx;transform:rotate(-45deg);width:10rpx}.box .scroll-view{opacity:0}.box .flex,.box .scroll-view{bottom:50rpx;height:200rpx;left:0;position:fixed;width:750rpx}.box .flex .position{height:100%;position:relative;width:100%}.box .flex .position .spot{display:block;left:0;overflow:scroll;position:absolute;top:0;transition:all .5s;white-space:nowrap;width:auto}.box .flex .position .spot .spot_item{background:#fff;border-radius:20rpx;display:-webkit-inline-flex;display:inline-flex;height:200rpx;margin-left:10rpx;padding:10rpx;position:relative;vertical-align:top;width:640rpx;z-index:20}.box .flex .position .spot .spot_item .spot_icon{background:#107a64;border:2rpx solid #fff;border-radius:20rpx 4rpx 20rpx 4rpx;box-shadow:0rpx 4rpx 4rpx 0rpx rgba(0,0,0,.25);color:#fff;font-size:24rpx;height:40rpx;left:-5rpx;line-height:40rpx;position:absolute;text-align:center;top:-1rpx;width:40rpx;z-index:30}.box .flex .position .spot .spot_item .other{display:-webkit-flex;display:flex;width:100%}.box .flex .position .spot .spot_item .other .spot_name{color:rgba(0,0,0,.8);font-size:30rpx;font-weight:700}.box .flex .position .spot .spot_item .other .spot_info{flex:1}.box .flex .position .spot .spot_item .other .spot_info .content{height:116rpx;line-height:30rpx;margin-top:10rpx}.box .flex .position .spot .spot_item .spot_img{border-radius:10rpx 30rpx 20rpx 20rpx;box-shadow:6rpx 0rpx 0rpx 0rpx rgba(0,0,0,.15);display:inline-block;height:180rpx;width:180rpx}.box .flex .position .spot .spot_item .spot_info{display:inline-block;margin-left:30rpx;white-space:break-spaces;width:407rpx}.box .flex .position .spot .spot_item .spot_info .spot_name{color:rgba(0,0,0,.8);font-size:30rpx;font-weight:700;margin-top:10rpx}.box .flex .position .spot .spot_item .spot_info .ranking{align-items:center;display:-webkit-flex;display:flex;margin-top:20rpx;position:relative}.box .flex .position .spot .spot_item .spot_info .ranking .top{align-items:center;background:linear-gradient(180deg,#6b6457,#54524c);border-radius:25rpx;color:#e6cca2;display:-webkit-flex;display:flex;font-size:24rpx;height:34rpx;padding:0 10rpx;position:relative;z-index:30}.box .flex .position .spot .spot_item .spot_info .ranking .text{background:#ffefd5;border-radius:4px 18px 18px 18px;height:36rpx;line-height:36rpx;padding:0 16rpx}.box .flex .position .spot .spot_item .spot_info .ranking .text .name{color:#945430;font-size:22rpx;max-width:325rpx}.box .flex .position .spot .spot_item .spot_info .card_describe{color:rgba(0,0,0,.4);font-size:26rpx;margin-top:14rpx}.box .flex .position .spot .spot_item .spot_info .subtitle{max-width:410rpx;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.box .flex .position .spot .spot_item .spot_info .card_ticket{align-items:center;display:-webkit-flex;display:flex;height:38rpx;line-height:38rpx;margin-top:14rpx}.box .flex .position .spot .spot_item .spot_info .card_ticket .ding{background:linear-gradient(180deg,#f99f1d,#fe581e);border-radius:10rpx;color:#fff;font-size:22rpx;height:32rpx;line-height:32rpx;margin-top:-5rpx;text-align:center;width:32rpx}.box .flex .position .spot .spot_item .spot_info .card_ticket .price{color:rgba(0,0,0,.4);font-size:26rpx;margin-left:10rpx}.box .flex .position .spot .spot_item .spot_info .card_ticket .ticketName{color:rgba(0,0,0,.4);font-size:26rpx;margin-left:10rpx;width:280rpx}.box .flex .position .spot .spot_item:nth-child(1){margin-left:30rpx}.box .flex .position .spot .nextDay{background:#fff;border-radius:20rpx 0rpx 0rpx 20rpx;box-shadow:0rpx 4rpx 20rpx 0rpx rgba(0,0,0,.1);display:-webkit-inline-flex;display:inline-flex;height:190rpx;margin-left:20rpx;width:90rpx}.box .flex .position .spot .nextDay .p{color:rgba(0,0,0,.5);font-size:26rpx;line-height:69rpx;text-align:center;writing-mode:vertical-lr}
</style>
