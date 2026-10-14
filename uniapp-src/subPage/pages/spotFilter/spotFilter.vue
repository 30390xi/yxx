<template>
<view class="container">
    <view class="search-container">
        <view class="search-box">
            <view class="item txt">
                <image src="/static/captured/98b5024e40f5a003.png"></image>
                <view class="searchInput" v-if="$root.g0==1" @click="goSearch(searchKeyList[0])">{{ searchKeyList[0] }}</view>
                <view class="searchInput" v-else>
                    <u-notice-bar bgColor="#00000000" color="#777474" :duration="10000" fontSize="26" :list="searchKeyList" mode="vertical" padding="18rpx 0rpx" :volumeIcon="false" @click="goSearch1()"></u-notice-bar>
                </view>
            </view>
        </view>
    </view>
    <view class="labelContainer" id="labelContainer" :style="'height:'+serchHeightList[type-1]+'rpx'+';'">
        <view class="moveBox" :style="'position:'+(scrollTop>spotListTop?'fixed':'relative')+';'+'top:'+(scrollTop>spotListTop?'-'+serchHeightList[type-1]-80+'rpx':0+'px')+';'+'transform:'+(showLabel?'translateY('+serchHeightList[type-1]+'rpx)':'translateY(0rpx)')+';'+'z-index:'+(showLabel?997:1)+';'+'transition:'+(showLabel?'transform 0.2s linear':'')+';'+'height:'+serchHeightList[type-1]+'rpx'+';'">
            <view class="spotType" v-if="configTypeShow">
                <view :class="['spotItem',type==index+1?'active':'']" v-for="(item, index) in spotNameList">{{item}}</view>
            </view>
            <view class="box">
                <view class="item" v-for="(item, index) in labels">
                    <view class="name">{{item.name}}</view>
                    <scroll-view class="scrollBox" :scrollLeft="leftOffset[index]" :scrollWithAnimation="true" :scrollX="true">
                        <view :class="['options',conditions[index].name==opt.name?'active':'']" v-for="(opt, __i0__) in item.children">{{opt.name}}</view>
                    </scroll-view>
                </view>
            </view>
        </view>
    </view>
    <view class="nav" :style="'top:'+'80rpx'+';'+'z-index:'+(scrollTop>spotListTop-120?99:-10)+';'+'opacity:'+1/100*(scrollTop-spotListTop+120)+';'" v-if="scrollTop>spotListTop-120" @click="e0($event)">{{''+(currentTag||'综合排序')}}</view>
    <view class="spotList" id="spotList">
        <view class="item" v-for="(item, __i1__) in $root.l0">
            <image class="img" mode="aspectFill" :src="item.mainPicture"></image>
            <view class="info">
                <view class="name singleLineText">
                    <text v-if="item.isBookable">订</text>{{item.scenicName}}</view>
                <view class="rank singleLineText" v-if="item.originSortInRankingVO&&item.originSortInRankingVO.rankingName">{{''+item.originSortInRankingVO.rankingName+'第 '+item.originSortInRankingVO.indexInRanking+' 名'}}</view>
                <view class="desc singleLineText" v-if="item.tag">{{item.tag}}</view>
                <view class="distance" v-if="item.m0">
                    <image mode="aspectFill" src="../../static/images/loc.png"></image>{{'距您'+item.distance+'km'}}</view>
            </view>
        </view>
    </view>
    <view class="noinfo" v-if="!spotList[0]">
        <image class="noGoods" mode="widthFix" src="/static/captured/51d17a011d27445c.png"></image>
        <view>没有相关内容</view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          props: [],
          onLoad: function(t) {
            var a = this;
            this.getConfig(), uni.getSystemInfo({
              success: function(e) {
                a.statusBarHeight = e.windowTop
              }
            }), this.getRecommendData(), this.latitude = uni.getStorageSync("location").latitude, this.longitude = uni.getStorageSync("location").longitude, this.type = t.type ? t.type : 1, this.getAllTag(t)
          },
          data: function() {
            return {
              labelData: [{
                name: "城市",
                key: "cityId",
                children: [{
                  name: "全部",
                  id: ""
                }]
              }, {
                name: "等级",
                key: "level",
                children: [{
                  name: "全部",
                  id: ""
                }, {
                  name: "5A",
                  id: 5
                }, {
                  name: "4A",
                  id: 4
                }, {
                  name: "3A",
                  id: 3
                }, {
                  name: "2A",
                  id: 2
                }, {
                  name: "1A",
                  id: 1
                }, {
                  name: "未评级",
                  id: -1
                }]
              }, {
                name: "分类",
                key: "typeSysTagId",
                children: [{
                  name: "全部",
                  id: ""
                }]
              }, {
                name: "菜系",
                key: "businessType",
                children: [{
                  name: "全部",
                  id: ""
                }]
              }, {
                name: "类型",
                key: "businessType",
                children: [{
                  name: "全部",
                  id: ""
                }]
              }, {
                name: "特色",
                key: "hotelSpecialTagName",
                children: [{
                  name: "全部",
                  id: ""
                }]
              }, {
                name: "兴趣",
                key: "interestTagName",
                children: [{
                  name: "全部",
                  id: ""
                }]
              }, {
                name: "人群",
                key: "peopleSysTagId",
                children: [{
                  name: "全部",
                  id: ""
                }]
              }, {
                name: "门票",
                key: "isFree",
                children: [{
                  name: "全部",
                  id: ""
                }, {
                  name: "付费",
                  id: 2
                }, {
                  name: "免费",
                  id: 1
                }]
              }, {
                name: "排序",
                key: "sortType",
                children: [{
                  name: "综合",
                  id: ""
                }, {
                  name: "距离",
                  id: 1
                }]
              }],
              labels: [],
              leftOffset: [],
              conditions: [{
                name: "全部",
                id: ""
              }, {
                name: "全部",
                id: ""
              }, {
                name: "全部",
                id: ""
              }, {
                name: "全部",
                id: ""
              }, {
                name: "全部",
                id: ""
              }, {
                name: "综合",
                id: ""
              }],
              statusBarHeight: 44,
              spotList: [],
              isFixed: !1,
              spotListTop: 0,
              currentTag: "",
              scrollTop: 0,
              showLabel: !1,
              labelContainerH: 0,
              latitude: "",
              longitude: "",
              current: 1,
              conditionObj: {},
              type: 1,
              serchHeightList: [635, 500, 500, 500],
              spotNameList: ["景区", "美食", "住宿", "玩乐"],
              configTypeShow: 0,
              searchKeyList: [],
              placeholder: "输入您想搜索的内容"
            }
          },
          onPageScroll: function(e) {
            this.showLabel = !1, this.scrollTop = e.scrollTop
          },
          onShow: function() {
            this.longitude || 1 != this.conditions[5].id || uni.getLocation()
          },
          onReachBottom: function() {
            this.current += 1, this.getSpotList(this.conditionObj)
          },
          methods: {
            getAllTag: function(e) {
              var t = this,
                a = this;
              this.$uniApi.dataRequestNoLoading("get", "base/app/v1/sysTag/appGetScenicSportTagNew?type=".concat(a.type)).then((function(n) {
                n.data.allCityList.forEach((function(e) {
                  e.name = e.cityName
                }));
                var i = [{
                  name: "全部",
                  id: ""
                }];
                a.labelData[0].children = i.concat(n.data.allCityList), a.labelData[2].children = i.concat(n.data.typeTagList), a.labelData[3].children = i.concat(n.data.typeTagList), a.labelData[4].children = i.concat(n.data.typeTagList), a.labelData[5].children = i.concat(n.data.hotelSpecialServicesTagList), a.labelData[6].children = i.concat(n.data.interestTagListList), a.labelData[7].children = i.concat(n.data.peopleTagList), t.labels = [], 1 == t.type ? (t.labels.push(a.labelData[0], a.labelData[1], a.labelData[2], a.labelData[7], a.labelData[8], a.labelData[9]), t.conditions = [{
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "综合",
                  id: ""
                }]) : 2 == t.type ? (t.labels.push(a.labelData[0], a.labelData[3], a.labelData[7], a.labelData[9]), t.conditions = [{
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "综合",
                  id: ""
                }]) : 3 == t.type ? (t.labels.push(a.labelData[0], a.labelData[4], a.labelData[5], a.labelData[9]), t.conditions = [{
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "综合",
                  id: ""
                }]) : (t.labels.push(a.labelData[0], a.labelData[4], a.labelData[6], a.labelData[9]), t.conditions = [{
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "全部",
                  id: ""
                }, {
                  name: "综合",
                  id: ""
                }]);
                var o = [];
                a.leftOffset = [], t.labels.forEach((function(e) {
                  o.push(0)
                })), setTimeout((function() {
                  a.leftOffset = o
                }), 500), t.$forceUpdate(), e && (e.id ? (a.setlabel(e.index, e.name), a.chooseLabel(e.index, {
                  name: e.name,
                  id: e.id
                })) : 1 == e ? t.getSpotList(t.conditionObj) : t.chooseLabel())
              })).catch((function(e) {}))
            },
            setlabel: function(e, t) {
              var a = this.labels[e].children;
              a.forEach((function(e, n) {
                if (e.name == t) {
                  var i = a.splice(n, 1);
                  a.splice(1, 0, i[0])
                }
              })), this.labels[e].children = a
            },
            getLocation: function() {
              var t = this;
              uni.getLocation({
                type: "gcj02",
                success: function(e) {
                  t.latitude = e.latitude, t.longitude = e.longitude, t.getSpotList(t.conditionObj)
                }
              })
            },
            reAuth: function(t) {
              var a = this;
              return (0, s.default)(i.default.mark((function t() {
                var n, o, s, r;
                return i.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, uni.showModal({
                        content: "检测到您没打开地址权限，是否去设置打开？",
                        confirmText: "确认",
                        cancelText: "取消"
                      });
                    case 2:
                      if (n = t.sent, o = (0, c.default)(n, 2), s = o[0], r = o[1], !s) {
                        t.next = 8;
                        break
                      }
                      return t.abrupt("return");
                    case 8:
                      if (!r.confirm) {
                        t.next = 10;
                        break
                      }
                      return t.abrupt("return", e.openSetting({
                        success: function(e) {}
                      }));
                    case 10:
                      r.confirm || (a.conditionObj.sortType = "", a.conditions[5] = {
                        name: "综合",
                        id: ""
                      }, a.getSpotList(a.conditionObj));
                    case 11:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            changeSpot: function(e) {
              this.type = e + 1, this.spotList = [], this.current = 1, this.conditionObj = {}, this.conditionObj.type = this.type, this.currentTag = this.spotNameList[this.type - 1], this.getAllTag(1)
            },
            getConfig: function() {
              var t = this,
                a = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "SCENIC_TAG_CONTROL"
              }).then((function(n) {
                1 === n.code && (t.configTypeShow = JSON.parse(n.data.paramValue), 1 == t.configTypeShow ? t.serchHeightList = [635, 500, 500, 500] : (t.serchHeightList = [512, 362, 362, 362], t.currentTag = "", console.log(t.serchHeightList)), t.$nextTick((function() {
                  new Promise((function(t) {
                    var a = uni.createSelectorQuery();
                    a.select("#spotList").boundingClientRect(), a.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(t) {
                    a.spotListTop = t[0].top - e.upx2px(90), console.log(a.spotListTop)
                  }))
                })))
              }))
            },
            chooseLabel: function() {
              var t = this,
                a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                  name: "全部",
                  id: ""
                },
                i = this;
              this.$nextTick((function() {
                var o = [].concat(i.conditions);
                o[a] = n, i.conditions = o;
                var c = [],
                  s = {};
                t.conditions.forEach((function(e, a) {
                  "businessType" == t.labels[a].key && e.id ? s[t.labels[a].key] = e.name : s[t.labels[a].key] = e.id, ["全部", "综合"].includes(e.name) || c.push(e.name)
                })), t.configTypeShow ? t.currentTag = c.join(" · ") ? t.spotNameList[t.type - 1] + " · " + c.join(" · ") : t.spotNameList[t.type - 1] : t.currentTag = c.join(" · "), t.conditionObj = s, t.conditionObj.type = i.type, t.current = 1, t.spotList = [], 5 != a || t.longitude || 1 != n.id ? (uni.pageScrollTo({
                  duration: 0,
                  scrollTop: 0
                }), i.getSpotList(s)) : e.authorize({
                  scope: "scope.userLocation",
                  success: function() {
                    uni.getLocation()
                  },
                  fail: function() {
                    i.reAuth()
                  }
                })
              }))
            },
            onShareAppMessage: function(e) {
              var t = "/subPage/pages/spotFilter/spotFilter?type=" + this.type;
              return {
                title: "筛选",
                path: this.$util.setShareUrl(t)
              }
            },
            getSpotList: function(t) {
              var a = this;
              uni.showLoading(), this.$uniApi.dataRequestNoLoading("post", "base/app/v1/scenicSpot/getScenicSpotListBySysTag", l(l({}, t), {}, {
                latitude: this.latitude,
                longitude: this.longitude,
                size: 10,
                current: this.current
              })).then((function(t) {
                t.data.records[0] && (a.spotList = a.spotList.concat(t.data.records)), uni.hideLoading(), !t.data.records[0] && a.current > 1 && uni.showToast({
                  title: "没有更多咯~",
                  icon: "none"
                })
              })).catch((function(t) {
                uni.hideLoading()
              }))
            },
            toSpot: function(e) {
              this.$navigateTo({
                url: "/pages/spotDetail/spotDetail?spotId=" + e.scenicId
              })
            },
            getRecommendData: function() {
              var e = this;
              this.$uniApi.getRequestNoLoading("GET", "product/app/v1/searchKey/searchKeyAndDefaultKey").then((function(t) {
                t.data && t.data.defaultSearchKeyList && t.data.defaultSearchKeyList[0] ? t.data.defaultSearchKeyList.forEach((function(t) {
                  e.searchKeyList.push(t.searchKey)
                })) : e.searchKeyList.push(e.placeholder)
              }))
            },
            goSearch: function(e) {
              var t = e == this.placeholder ? "" : e;
              this.$navigateTo({
                url: "/subPage/pages/searchpage/searchpage?default=" + t
              })
            },
            goSearch1: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
              this.$navigateTo({
                url: "/subPage/pages/searchpage/searchpage?default=" + this.searchKeyList[e] || !1
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.container{background:#fff;min-height:100vh}.container .search-container{background:#fff;height:90rpx;left:0;position:fixed;top:0;width:750rpx;z-index:1000}.container .search-box{background-color:rgba(0,0,0,.1);border-radius:40rpx;box-shadow:0 0 30px 0 rgba(57,100,77,.1);height:60rpx;justify-content:space-between;margin:20rpx auto 0;position:-webkit-sticky;position:sticky;width:690rpx}.container .search-box,.container .search-box .item{align-items:center;display:-webkit-flex;display:flex}.container .search-box .item.btn{border-left:1px solid hsla(0,0%,100%,.4);color:#fff;font-size:26rpx;height:30rpx;justify-content:center;width:138rpx}.container .search-box .item.txt{padding-left:30rpx}.container .search-box .item.txt image{height:38rpx;width:38rpx}.container .search-box .searchInput{color:#777474;font-size:26rpx;margin-left:16rpx;width:430rpx}.container .labelContainer{height:520rpx;margin-top:80rpx;position:relative}.container .labelContainer .moveBox{background:#fff;height:520rpx;padding-left:40rpx;padding-top:20rpx}.container .labelContainer .moveBox .spotType{align-items:center;background:#f4f4f4;border-radius:40rpx 40rpx 40rpx 40rpx;box-shadow:inset 0rpx 2rpx 2rpx 0rpx rgba(0,0,0,.08);display:-webkit-flex;display:flex;height:80rpx;justify-content:center;margin:20rpx 80rpx 40rpx;width:480rpx}.container .labelContainer .moveBox .spotType .spotItem{color:#222;font-size:28rpx;height:60rpx;line-height:60rpx;text-align:center;width:115rpx}.container .labelContainer .moveBox .spotType .active{background:linear-gradient(180deg,#ffe7de,#ffbfa6);border-radius:30rpx 30rpx 30rpx 30rpx;box-shadow:0rpx 2rpx 0rpx 0rpx rgba(0,0,0,.1);color:#ff5411}.container .labelContainer .moveBox .box{position:relative;width:710rpx}.container .labelContainer .item{align-items:center;display:-webkit-flex;display:flex;height:60rpx;margin-bottom:20rpx}.container .labelContainer .item .name{color:#333;font-size:28rpx;font-weight:700;margin-right:24rpx;white-space:nowrap}.container .labelContainer .item .scrollBox{display:block;height:60rpx;white-space:nowrap;width:630rpx}.container .labelContainer .item .scrollBox .options{color:#333;display:inline-block;font-size:26rpx;height:60rpx;line-height:60rpx;padding:0 24rpx}.container .labelContainer .item .scrollBox .active{background:#ffe8e3;border-radius:10rpx;color:#ff5411;font-weight:700}.container .nav{background:#fff;color:#ff5411;font-size:28rpx;font-weight:700;height:80rpx;line-height:80rpx;position:fixed;text-align:center;transition:all .3s linear;width:100%;z-index:-99}.container .noinfo .noGoods{display:block;margin:50rpx auto;width:300rpx}.container .noinfo view{color:#777;text-align:center}.container .spotList{padding:0rpx 40rpx 30rpx;position:relative}.container .spotList .item{display:-webkit-flex;display:flex;height:240rpx;margin-bottom:30rpx}.container .spotList .item:last-child{margin-bottom:0}.container .spotList .item .img{background:#e0e0e0;border-radius:20rpx;height:100%;width:240rpx}.container .spotList .item .info{padding-left:30rpx;width:440rpx}.container .spotList .item .info .name{color:#333;font-size:32rpx;font-weight:700;line-height:46rpx}.container .spotList .item .info .name text{background:linear-gradient(56deg,#fc4a9e,#ff5411);border-radius:10rpx;color:#fff;display:inline-block;font-size:22rpx;height:32rpx;line-height:30rpx;margin-right:8rpx;text-align:center;vertical-align:4rpx;width:32rpx}.container .spotList .item .info .rank{background:#ffefd5;border-radius:4px 18px 18px 18px;color:#945430;display:inline-block;font-size:22rpx;height:36rpx;line-height:36rpx;margin-top:24rpx;max-width:410rpx;padding:0 16rpx}.container .spotList .item .info .desc{color:#959494;font-size:24rpx;margin-top:22rpx}.container .spotList .item .info .distance{align-items:center;color:#959494;display:-webkit-flex;display:flex;font-size:24rpx;margin-top:26rpx}.container .spotList .item .info .distance image{height:21rpx;margin-right:8rpx;width:18rpx}
</style>
