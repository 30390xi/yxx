<template>
<view class="u-wrap">
    <uni-navbar class="" title="游陕西精品路线攻略" :titleCenter="false" :transparentFixedFontColor="scrollTop+fixNavTop>navtop2?'#000000':'rgba(255,255,255,0)'" type="transparentFixed"></uni-navbar>
    <view class="fixHeader" id="fixHeader" :style="'background:'+'rgba(255,255,255,'+scrollTop/(navtop2-fixednavTop)+')'+';'">
        <image class="rank" :style="'margin-top:'+searchHeight+8+'px'+';'+'opacity:'+(scrollTop>navtop2-fixednavTop?1:0)+';'"></image>
    </view>
    <view class="headerInfo">
        <image class="bgimg" mode="scaleToFill" src="/static/captured/13e57a9e4ac78058.png"></image>
        <liu-dropdown class=" vue-ref" ref="liuDropdown" :dataObj="dataObj" id="nav" :menuList="menuList" :status="true" :style="fixedstyle" themeColor="rgba(255, 84, 17, 1)" @change="change()"></liu-dropdown>
    </view>
    <view class="container" v-if="!spotList[0]">
        <view class="noinfo">
            <image class="noGoods" mode="widthFix" src="/static/captured/51d17a011d27445c.png"></image>
            <view class="">没有相关内容</view>
        </view>
    </view>
    <view class="container" v-if="spotList[0]">
        <view class="spotList" id="spotList">
            <navigator class="item" :url="'/subPage/pages/lineInfo/lineInfo?lineId='+item.lineId" v-for="(item, __i0__) in $root.l0">
                <image class="img" mode="aspectFill" :src="item.image"></image>
                <view class="info">
                    <view class="name">{{item.lineName}}</view>
                    <view class="r">
                        <view class="tag" :key="id" v-for="(t, __i1__) in item.themeNameList">
                            <view class="inner">
                                <view class="name-i">{{t}}</view>
                            </view>
                        </view>
                    </view>
                    <view class="desc">{{'游玩'+(item.day||0)+'天 '+item.m0+''+( item.g0>1?'共'+item.g1+'个目的地':''+(item.destinationNum>1?' 共'+item.destinationNum+'个观光地':''+item.destinationNames) )+''}}</view>
                </view>
            </navigator>
        </view>
        <view class="hot-topics">
            <image class="" src="/static/captured/04cde855bad0e209.png"></image>
            <text class="">热门主题玩法</text>
            <image class="" src="/static/captured/3da812d1d1dad5ad.png"></image>
        </view>
        <view class="topics">
            <view class="r">
                <view class="tag" :key="themeId" v-for="(item, __i2__) in hotDetailTops">
                    <view class="inner" :style="'background:'+'url('+item.themeUrl+')'+';'">
                        <view class="tag-name">
                            <view class="name">{{'#'+item.themeName}}</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="spotList topics-list" id="hotSpotList">
            <navigator class="item" :url="'/subPage/pages/lineInfo/lineInfo?lineId='+item.lineId" v-for="(item, __i3__) in $root.l1">
                <image class="img" mode="aspectFill" :src="item.image"></image>
                <view class="info">
                    <view class="name">{{item.lineName}}</view>
                    <view class="r">
                        <view class="tag" :key="id" v-for="(t, __i4__) in item.themeNameList">
                            <view class="inner">
                                <view class="name-i">{{t}}</view>
                            </view>
                        </view>
                    </view>
                    <view class="desc">{{'游玩'+(item.day||0)+'天 '+item.m1+''+( item.g2>1?'共'+item.g3+'个目的地':''+(item.destinationNum>1?' 共'+item.destinationNum+'个观光地':''+item.destinationNames) )+''}}</view>
                </view>
            </navigator>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          computed: {
            cityNamesFn: function() {
              return function(t) {
                if (!t) return "";
                var e = t.replaceAll(",", "、"),
                  n = t.split(",");
                if (1 == n.length) return "· ".concat(e || "", " ·");
                if (2 == n.length && t.length <= 6) return "· 含".concat(e);
                var i = e.slice(0, 5);
                return "· 含".concat(i || "", "...")
              }
            }
          },
          data: function() {
            return {
              showMask: !0,
              menuList: [{
                id: 1,
                name: "主题玩法",
                isMultiple: !0,
                showType: 4
              }, {
                id: 2,
                name: "游玩天数",
                isMultiple: !1,
                showType: 4
              }, {
                id: 3,
                name: "包含城市",
                isMultiple: !1,
                showType: 4
              }, {
                id: 4,
                name: "热门地点",
                isMultiple: !0,
                showType: 4
              }],
              dataObj: {
                itemList1: [{
                  id: 1,
                  name: "热门",
                  childs: [{
                    id: 1,
                    name: "烤肉",
                    chooseState: !0
                  }, {
                    id: 2,
                    name: "西北菜"
                  }, {
                    id: 3,
                    name: "川湘菜"
                  }, {
                    id: 4,
                    name: "川湘菜"
                  }]
                }],
                itemList2: [{
                  id: 1,
                  name: "商圈",
                  childs: [{
                    id: 1,
                    name: "大润发"
                  }, {
                    id: 2,
                    name: "火车站"
                  }, {
                    id: 3,
                    name: "金牛街"
                  }]
                }],
                itemList3: [{
                  id: 1,
                  name: "商圈",
                  childs: [{
                    id: 1,
                    name: "大润发"
                  }, {
                    id: 2,
                    name: "火车站"
                  }, {
                    id: 3,
                    name: "金牛街"
                  }]
                }],
                itemList4: [{
                  id: 1,
                  name: "用餐人数",
                  childs: [{
                    id: 1,
                    name: "单人餐"
                  }, {
                    id: 2,
                    name: "双人餐"
                  }, {
                    id: 3,
                    name: "3～4人餐"
                  }]
                }]
              },
              hotDetailTops: [{
                name: "线路特色"
              }, {
                name: "线路特色"
              }, {
                name: "线路特色"
              }, {
                name: "线路特色"
              }],
              fixednavTop: 0,
              fixNavTop: 90,
              searchHeight: 0,
              scrollTop: 0,
              navtop2: 100,
              fixedstyle: "z-index: 9999 !important;position: absolute;top: 598rpx;left: 0;width: 100%;",
              navFixed: !1,
              spotList: [],
              hotSpotList: []
            }
          },
          onLoad: function(e) {
            var n = this,
              i = uni.getMenuButtonBoundingClientRect();
            this.searchHeight = i.top, uni.getSystemInfo({
              success: function(t) {
                n.unit = 750 / t.screenWidth, n.fixNavTop = parseInt(i.top + 80 / n.unit)
              }
            }), this.getDomInfo().then((function(e) {
              uni.getSystemInfo({
                success: function(t) {
                  n.fixednavTop = e[1].height - parseInt(68 / n.unit), n.navtop2 = e[0].top
                }
              })
            })), this.getMenuThemeList(), this.getLineListPage()
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, this.fixedstyle = t.scrollTop + this.fixNavTop > this.navtop2 ? "width:100%;position:fixed;left:0;z-index:9999;top:".concat(this.fixNavTop, "px") : "z-index: 9999 !important;position: absolute;top: 598rpx;left: 0;width: 100%;", this.navFixed = !!this.fixedstyle
          },
          onReachBottom: function() {
            this.current += 1
          },
          onShow: function() {},
          onShareAppMessage: function(t) {
            return {
              title: "游陕西精品路线攻略",
              imageUrl: "https://eshopfile.zhiyousx.com/169284690523561367.png",
              path: this.$util.setShareUrl("/subPage/pages/waterfall/waterfall")
            }
          },
          onShareTimeline: function(t) {
            return {
              title: "游陕西精品路线攻略",
              path: "/subPage/pages/waterfall/waterfall",
              query: this.$util.setShareTimeline("")
            }
          },
          methods: {
            getDomInfo: function() {
              var e = this;
              return new Promise((function(n) {
                setTimeout((function() {
                  e.$nextTick((function() {
                    var e = uni.createSelectorQuery();
                    e.select("#nav").boundingClientRect(), e.select("#fixHeader").boundingClientRect(), e.exec((function(t) {
                      n(t)
                    }))
                  }))
                }), 500)
              }))
            },
            selectionTheme: function(t) {
              var e = this;
              this.dataObj.itemList1[0].childs.map((function(n, i) {
                e.$set(e.dataObj.itemList1[0].childs[i], "chooseState", !1), n.themeId == t.themeId && e.$set(e.dataObj.itemList1[0].childs[i], "chooseState", !0)
              })), this.$refs.liuDropdown.selectType(0, this.dataObj.itemList1)
            },
            getLineListPage: function() {
              var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              e = c(c({}, e), {}, {
                current: 1,
                size: 999
              }), this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/line/selectPage", e).then((function(e) {
                t.spotList = e.data.records.slice(0, 3), t.hotSpotList = e.data.records.slice(3)
              }))
            },
            toSpot: function(t) {
              this.$navigateTo({
                url: "/subPage/pages/lineInfo/lineInfo?lineId=" + t.lineId
              })
            },
            getMenuThemeList: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "product/app/v1/theme/list", {}).then((function(e) {
                var n = JSON.parse(JSON.stringify(e.data));
                n.map((function(t) {
                  t.name = t.themeName, t.id = t.id, t.chooseState = !1
                })), t.hotDetailTops = n.filter((function(t) {
                  return t.themeUrl
                })), t.dataObj.itemList1[0].childs = n
              })), this.$uniApi.dataRequestNoLoading("get", "product/app/v1/hotDestination/list", {}).then((function(e) {
                var n = JSON.parse(JSON.stringify(e.data));
                n.map((function(t) {
                  t.name = t.scenicName, t.id = t.scenicId
                })), t.dataObj.itemList4[0].childs = n
              })), this.$uniApi.dataRequestNoLoading("get", "product/app/v1/line/getAllLineDayList", {}).then((function(e) {
                var n = [];
                e.data.map((function(t) {
                  var e = t + "天";
                  t >= 10 && (e = t + "天及以上");
                  var i = {
                    name: e,
                    id: t
                  };
                  n.push(i)
                })), t.dataObj.itemList2[0].childs = n
              })), this.$uniApi.dataRequestNoLoading("get", "product/app/v1/line/getAllLineCityList", {}).then((function(e) {
                var n = JSON.parse(JSON.stringify(e.data));
                n.map((function(t) {
                  t.name = t.cityName, t.id = t.cityId
                })), t.dataObj.itemList3[0].childs = n
              }))
            },
            change: function(e) {
              var n, i = {
                  themeIds: [],
                  cityIdList: [],
                  dayList: [],
                  destinationIdList: []
                },
                a = o(e.chooseInfo.itemList1);
              try {
                for (a.s(); !(n = a.n()).done;) {
                  var r, s = o(n.value.childs);
                  try {
                    for (s.s(); !(r = s.n()).done;) {
                      var c = r.value;
                      i.themeIds.push(c.themeId)
                    }
                  } catch (t) {
                    s.e(t)
                  } finally {
                    s.f()
                  }
                }
              } catch (t) {
                a.e(t)
              } finally {
                a.f()
              }
              var l, u = o(e.chooseInfo.itemList3);
              try {
                for (u.s(); !(l = u.n()).done;) {
                  var d, f = o(l.value.childs);
                  try {
                    for (f.s(); !(d = f.n()).done;) {
                      var p = d.value;
                      i.cityIdList.push(p.id)
                    }
                  } catch (t) {
                    f.e(t)
                  } finally {
                    f.f()
                  }
                }
              } catch (t) {
                u.e(t)
              } finally {
                u.f()
              }
              var h, m = o(e.chooseInfo.itemList2);
              try {
                for (m.s(); !(h = m.n()).done;) {
                  var v, g = o(h.value.childs);
                  try {
                    for (g.s(); !(v = g.n()).done;) {
                      var y = v.value;
                      i.dayList.push(y.id)
                    }
                  } catch (t) {
                    g.e(t)
                  } finally {
                    g.f()
                  }
                }
              } catch (t) {
                m.e(t)
              } finally {
                m.f()
              }
              var b, L = o(e.chooseInfo.itemList4);
              try {
                for (L.s(); !(b = L.n()).done;) {
                  var O, w = o(b.value.childs);
                  try {
                    for (w.s(); !(O = w.n()).done;) {
                      var S = O.value;
                      i.destinationIdList.push(S.id)
                    }
                  } catch (t) {
                    w.e(t)
                  } finally {
                    w.f()
                  }
                }
              } catch (t) {
                L.e(t)
              } finally {
                L.f()
              }
              this.getLineListPage(i), uni.pageScrollTo({
                scrollTop: 0 - this.scrollTop,
                duration: 500
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background-color:#f5f5f5} .popup-box{position:unset!important;z-index:99!important} .scroll-mask{height:100vh!important;position:relative!important;z-index:99!important}.u-wrap{background-color:#f5f5f5;min-height:100vh}.u-wrap .fixHeader{left:0;position:fixed;top:0;width:750rpx;z-index:99}.u-wrap .fixHeader .rank{height:53rpx;margin-bottom:84rpx;margin-left:106rpx;transition:all .3s linear;width:160rpx}.u-wrap .container{min-height:100vh}.u-wrap .container .noinfo{position:relative;top:100rpx}.u-wrap .container .noinfo .noGoods{display:block;margin:50rpx auto;width:300rpx}.u-wrap .container .noinfo view{color:#777;text-align:center}.u-wrap .container .modal{background-color:rgba(0,0,0,.5);border-radius:10rpx;height:100%;left:0;margin-top:-150rpx;position:absolute;width:100%;z-index:1000}.u-wrap .container .spotList{margin-top:120rpx;padding:0rpx 30rpx 30rpx;position:relative}.u-wrap .container .spotList .item{display:-webkit-flex;display:flex;margin-bottom:30rpx}.u-wrap .container .spotList .item:last-child{margin-bottom:0}.u-wrap .container .spotList .item .img{background:#e0e0e0;border-radius:10rpx 30rpx 20rpx 20rpx;box-shadow:6rpx 0rpx 0rpx 0rpx rgba(0,0,0,.15),12rpx 0rpx 0rpx 0rpx rgba(0,0,0,.05);height:auto;min-width:240rpx;position:relative;width:240rpx}.u-wrap .container .spotList .item .info{align-items:center;background-color:#fff;border-bottom-right-radius:20rpx;border-top-right-radius:20rpx;display:-webkit-flex;display:flex;flex-wrap:wrap;margin-top:20rpx;padding:30rpx;width:450rpx}.u-wrap .container .spotList .item .info .name{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:rgba(0,0,0,.8);display:-webkit-box;font-size:32rpx;font-weight:400;font-weight:700;line-height:40rpx;overflow:hidden;width:100%}.u-wrap .container .spotList .item .info .ranking{display:-webkit-flex;display:flex;margin-top:18rpx;position:relative;width:100%}.u-wrap .container .spotList .item .info .ranking .top{align-items:center;background:linear-gradient(180deg,#6b6457,#54524c);border-radius:25rpx;color:#e6cca2;display:-webkit-flex;display:flex;font-size:24rpx;font-weight:700;padding:0 10rpx;position:relative;z-index:3}.u-wrap .container .spotList .item .info .ranking .text{align-items:center;background:linear-gradient(180deg,#e3cda2,#f3d19a);border-radius:25rpx;display:-webkit-flex;display:flex;height:32rpx;line-height:32rpx;margin-left:-36rpx;padding:0 16rpx 0 42rpx;position:relative;z-index:2}.u-wrap .container .spotList .item .info .ranking .text .name{color:#6a5a40;font-size:22rpx;font-weight:400;margin-right:4rpx;max-width:230rpx}.u-wrap .container .spotList .item .info>.r{overflow-x:auto;overflow-y:hidden;white-space:nowrap;width:100%}.u-wrap .container .spotList .item .info>.r .tag{display:inline-block;margin-right:10rpx}.u-wrap .container .spotList .item .info>.r .tag .inner{align-items:center;border:1rpx solid rgba(141,124,81,.7);border-radius:20rpx 20rpx 20rpx 20rpx;display:-webkit-flex;display:flex;height:32rpx;margin-top:16rpx;opacity:1;padding-left:14rpx;padding-right:14rpx}.u-wrap .container .spotList .item .info>.r .tag .inner .icon{background-size:100% 100%;height:40rpx;margin-right:12rpx;width:40rpx}.u-wrap .container .spotList .item .info>.r .tag .inner .name-i{color:rgba(141,124,81,.7);font-size:22rpx}.u-wrap .container .spotList .item .info>.r .tag .inner .jt{height:48rpx;width:48rpx}.u-wrap .container .spotList .item .info .rank{background:#ffefd5;border-radius:4px 18px 18px 18px;color:#945430;display:inline-block;font-size:22rpx;height:36rpx;line-height:36rpx;margin-top:24rpx;max-width:410rpx;padding:0 16rpx}.u-wrap .container .spotList .item .info .desc{color:rgba(0,0,0,.5);font-size:24rpx;font-weight:400;line-height:28rpx;margin-top:14rpx}.u-wrap .container .spotList .item .info .distance{align-items:center;color:#959494;display:-webkit-flex;display:flex;font-size:24rpx;margin-top:26rpx}.u-wrap .container .spotList .item .info .distance image{height:21rpx;margin-right:8rpx;width:18rpx}.u-wrap .container .hot-topics{align-items:center;display:-webkit-flex;display:flex;height:40rpx;justify-content:center;margin:30rpx;text-align:center}.u-wrap .container .hot-topics text,.u-wrap .container .hot-topics{color:rgba(0,0,0,.8);font-family:PingFang SC-Regular,PingFang SC;font-size:28rpx;font-weight:400;line-height:40rpx}.u-wrap .container .hot-topics .line{border:1rpx solid rgba(0,0,0,.1);border-radius:0rpx 0rpx 0rpx 0rpx;height:0rpx;opacity:1;width:51rpx}.u-wrap .container .hot-topics image{height:19.26rpx;margin:0 20rpx;width:39.7rpx}.u-wrap .container .topics{height:100rpx;margin:0 30rpx}.u-wrap .container .topics>.r{height:100%;margin-top:12rpx;overflow-x:auto;white-space:nowrap}.u-wrap .container .topics>.r .tag{display:inline-block;height:100%;margin-right:14rpx;text-align:center}.u-wrap .container .topics>.r .tag .inner{align-items:center;background-repeat:no-repeat!important;background-size:cover!important;border-radius:20rpx 20rpx 20rpx 20rpx;display:-webkit-flex;display:flex;height:100%;justify-content:center;opacity:1;position:relative;width:221rpx}.u-wrap .container .topics>.r .tag .inner .tag-name{align-items:center;display:-webkit-flex;display:flex;flex-direction:column}.u-wrap .container .topics>.r .tag .inner .tag-name .name{color:#fff;font-size:26rpx;font-weight:400}.u-wrap .container .topics>.r .tag .inner .tag-name .line-bot{background:#fff;height:2rpx;margin-top:16rpx;width:30rpx}.u-wrap .container .topics>.r .tag .inner .jt{height:48rpx;width:48rpx}.u-wrap .container .topics-list{margin-top:30rpx!important}.u-wrap .headerInfo{background-color:#fff;height:600rpx;position:relative;width:100%}.u-wrap .headerInfo .bgimg{height:100%;width:100%}.u-wrap .headerInfo .nav{display:-webkit-flex;display:flex;position:absolute;top:456rpx;z-index:1000}.u-wrap .headerInfo .popup-box{position:unset!important;width:100%}
</style>
