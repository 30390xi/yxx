<template>
<view class="u-wrap page-box">
    <uni-navbar class="" title="吃喝玩乐" :titleCenter="false" :transparentFixedFontColor="titleColor" type="transparentFixed"></uni-navbar>
    <custom-nav class="" muClass="nav-bg" :scrollTop="scrollTop" title="吃喝玩乐"></custom-nav>
    <view class="top-box">
        <image class="bg-img" mode="aspectFill" src="https://eshopfile.zhiyousx.com/2024062118322195121.png" :style="'opacity:'+1-scrollTop/scrollTopLimit+';'"></image>
        <view :class="['search-box','',scrollTop>scrollTopLimit/2?'changeS':'']" :style="'top:'+menuButtonInfo.bottom+8+'px'+';'">
            <view class="search">
                <view class="s-icon"></view>
                <input class="" confirmType="search" placeholder="搜索可用餐厅/影院/体验项目等" :placeholderStyle="scrollTop>scrollTopLimit/2?'color: rgba(30,27,25,0.3)':'color: rgba(255,255,255,0.3);'" style="width:500rpx;" :value="searchText" @input="searchText = $event; handleChange($event)"></input>
            </view>
            <view class="map-box" @click="jumpTo('/union/pages/map/map')">
                <view class="map-icon"></view>
                <view class="map-t">地图</view>
            </view>
        </view>
    </view>
    <view class="top-tab-b" :style="'background:'+(showSortPop||showChoosePop?'#FFFFFF':scrollTop>scrollTopLimit/2?'#FFFFFF':'#F5F5F4')+';'">
        <scroll-view class="tab-box" :scrollWithAnimation="true" :scrollX="true">
            <view class="tab-left"></view>
            <view :class="['tab-item','',detailClassId==tab.detailClassId?'active':'']" :key="i" v-for="(tab, i) in tabList">{{ tab.detailClassName }}</view>
        </scroll-view>
        <view class="choose-box">
            <view :class="['cb-it','allcenter','act','',showSortPop||showChoosePop?'popBg':'']" @click="showSort($event)">
                <image mode class="ad-mark" src="https://eshopfile.zhiyousx.com/2024052411220221820.png" v-if="sort==1"></image>{{ sortName }}<view class="mark allcenter">
                    <u-icon class="" color="#E4214A" :name="showSortPop?'arrow-up':'arrow-down'" size="18"></u-icon>
                </view>
            </view>
            <view :class="['cb-it','allcenter','',chooseName?'act':'',showSortPop||showChoosePop?'popBg':'']" @click="showChoose($event)">{{ (chooseName||'筛选') }}<view class="mark allcenter">
                    <u-icon class="" :color="chooseName?'#E4214A':'#1E1B19'" :name="showChoosePop?'arrow-up':'arrow-down'" size="18"></u-icon>
                </view>
            </view>
            <view class="pop-box-bg" v-if="showSortPop||showChoosePop" @click="closePop($event)" @touchmove.stop="moveHandle($event)">
                <view class="pop-box" @click.stop="e0($event)">
                    <view class="sort-box" v-if="showSortPop">
                        <view :class="['it','',sort==it.id?'itAct':'']" v-for="(it, __i0__) in sortList">{{ it.name }}</view>
                    </view>
                    <view class="ch-box" v-if="showChoosePop">
                        <view class="row-box">
                            <view :class="['row-it','',it.id===mdData.id?'rtAct':'']" :key="i" v-for="(it, i) in chooseList">{{ it.name }}</view>
                        </view>
                        <view class="row-box" style="margin-top:26rpx;">
                            <view class="btn" @click.stop="reset()">重置</view>
                            <view class="btn-comfirm" @click.stop="chooseConfirm(it)">确定</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="module-box">
        <view class="store-item" :key="index" v-for="(item, index) in equityList">
            <view class="img-b">
                <image class="" mode="aspectFill" :src="item.scenicImage"></image>
                <view class="tip" v-if="item.isSponsor"></view>
            </view>
            <view class="info-box">
                <view class="name-b">
                    <view class="name multilineText2">{{ item.scenicName }}</view>
                    <view class="sub singleLineText">{{ item.equityDesc }}</view>
                </view>
                <view class="ab-box">
                    <view class="tag-box">
                        <view class="level-box">{{ $root.f0 }}</view>
                        <view class="eq-box">{{ item.equityNum }}</view>
                    </view>
                    <view class="ad-b">
                        <view class="flex col-center">
                            <text class="">{{item.className}}</text>
                            <text class="singleLineText">{{item.cityName+(item.address?'/'+item.address:'')}}</text>
                        </view>
                        <view class="flex col-center" v-if="item.distance>0">
                            <image mode class="ad" src="https://eshopfile.zhiyousx.com/2024052411165183914.png"></image>
                            <text class="">{{item.distance+'km'}}</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="empty-box allcenter" v-if="$root.g0">
        <image mode class="" src="https://eshopfile.zhiyousx.com/2024061417153003821.png"></image>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            data: function() {
              return {
                menuButtonInfo: {},
                scrollTop: 0,
                scrollTopLimit: 0,
                searchTop: 0,
                titleColor: "#FFFFFF",
                showSortPop: !1,
                showChoosePop: !1,
                tabList: [],
                chooseList: [{
                  id: 2,
                  name: "赞助商"
                }, {
                  id: 1,
                  name: "去过"
                }, {
                  id: 0,
                  name: "未去过"
                }],
                chooseId: "",
                chooseName: "",
                mdData: {
                  id: "",
                  name: ""
                },
                equityList: [],
                page: 1,
                loadMore: "loading",
                searchText: "",
                sortList: [{
                  id: 0,
                  name: "推荐排序"
                }, {
                  id: 1,
                  name: "距离优先"
                }, {
                  id: 2,
                  name: "人气优先"
                }, {
                  id: 3,
                  name: "新店优先"
                }],
                sort: 0,
                detailClassId: "",
                sortName: "推荐排序",
                map: {
                  longitude: "",
                  latitude: ""
                },
                unionLevel: 3
              }
            },
            filters: {
              levelFilter: function(t) {
                return {
                  1: "青年联盟",
                  2: "普通会员",
                  3: "联合会员",
                  4: "参议会员"
                } [t]
              }
            },
            watch: {},
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            onShareAppMessage: function() {
              return {
                title: "陕西联合会员吃喝玩乐热门权益",
                imageUrl: "https://eshopfile.zhiyousx.com/2024061310513695733.png",
                path: this.$util.setShareUrl("union/pages/list/list")
              }
            },
            onHide: function() {},
            onLoad: function(o) {
              1 == o.isUsed && (this.mdData.name = "去过", this.mdData.id = 1, this.chooseName = this.mdData.name, this.chooseId = this.mdData.id), uni.getLocation(), this.menuButtonInfo = uni.getMenuButtonBoundingClientRect(), this.scrollTopLimit = this.menuButtonInfo.height + 8, this.searchTop = this.menuButtonInfo.bottom + 8, this.getUnionDetailClass(), this.toSearch(), uni.getStorageSync("token") && this.userInfo && this.userInfo.isUnionMember && uni.getStorageSync("unionUserInfo") ? this.unionLevel = uni.getStorageSync("unionUserInfo").level : this.unionLevel = 3
            },
            onShow: function() {},
            onPageScroll: function(t) {
              this.scrollTop = t.scrollTop;
              var o = t.scrollTop / this.scrollTopLimit;
              this.scrollTop <= 10 ? this.titleColor = "rgba(255,255,255,".concat(1 - o, ")") : this.titleColor = "rgba(0,0,0,".concat(o, ")")
            },
            onReachBottom: function() {
              "loadmore" === this.loadMore && this.getEquityList()
            },
            methods: {
              closePop: function() {
                this.showChoosePop = !1, this.showSortPop = !1
              },
              moveHandle: function() {
                return !1
              },
              changeTab: function(t) {
                this.detailClassId = t.detailClassId, this.toSearch()
              },
              changeSort: function(o) {
                var e = this;
                this.sort = o.id, this.sortName = o.name, this.showSortPop = !1, 1 != o.id ? this.toSearch() : t.authorize({
                  scope: "scope.userLocation",
                  success: function() {
                    uni.getLocation()
                  },
                  fail: function() {
                    e.reAuth()
                  }
                })
              },
              toSearch: function() {
                this.page = 1, this.equityList = [], this.getEquityList()
              },
              getLocation: function() {
                var o = this;
                uni.getLocation({
                  type: "gcj02",
                  success: function(t) {
                    o.map = {
                      longitude: t.longitude,
                      latitude: t.latitude
                    }, o.toSearch()
                  }
                })
              },
              reAuth: function(o) {
                var e = this;
                return (0, a.default)(i.default.mark((function o() {
                  var n, a, r, u, c;
                  return i.default.wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        return o.next = 2, uni.showModal({
                          content: "检测到您没打开地址权限，是否去设置打开？",
                          confirmText: "确认",
                          cancelText: "取消"
                        });
                      case 2:
                        if (n = o.sent, a = (0, s.default)(n, 2), r = a[0], u = a[1], !r) {
                          o.next = 8;
                          break
                        }
                        return o.abrupt("return");
                      case 8:
                        if (!u.confirm) {
                          o.next = 10;
                          break
                        }
                        return o.abrupt("return", t.openSetting({
                          success: function(t) {}
                        }));
                      case 10:
                        u.confirm || (c = {
                          id: 0,
                          name: "推荐排序"
                        }, e.sort = c.id, e.sortName = c.name, e.toSearch());
                      case 11:
                      case "end":
                        return o.stop()
                    }
                  }), o)
                })))()
              },
              jumpToS: function(t) {
                this.$navigateTo({
                  url: t
                })
              },
              jumpTo: function(t, o) {
                (0, r.routerTo)(t, o)
              },
              showSort: function() {
                this.showSortPop = !this.showSortPop, this.showChoosePop = !1
              },
              showChoose: function() {
                this.mdData = {
                  id: this.chooseId,
                  name: this.chooseName
                }, this.showChoosePop = !this.showChoosePop, this.showSortPop = !1
              },
              chooseConfirm: function() {
                this.chooseName = this.mdData.name, this.chooseId = this.mdData.id, this.showChoosePop = !1, this.toSearch()
              },
              choose: function(t) {
                this.mdData = t
              },
              reset: function() {
                this.mdData = {
                  id: "",
                  name: ""
                }
              },
              getUnionDetailClass: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/userUnionEquityCard/getUnionDetailClass", {}).then((function(o) {
                  if (1 == o.code) {
                    var e = o.data || [];
                    e.unshift({
                      detailClassId: "",
                      detailClassName: "全部"
                    }), t.tabList = e
                  } else t.$uni.showToast(o.msg)
                }))
              },
              getEquityList: function() {
                var o = this,
                  e = {
                    current: this.page,
                    size: 10,
                    detailClassId: this.detailClassId,
                    latitude: this.map.latitude,
                    longitude: this.map.longitude,
                    searchKey: this.searchText,
                    isUsed: this.chooseId,
                    sort: this.sort
                  };
                this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/userUnionEquityCard/getUnionEquityClassList", e).then((function(e) {
                  if (uni.stopPullDownRefresh(), 1 === e.code) {
                    var n = e.data.records;
                    e.data.total > 0 ? (1 === e.data.current ? o.equityList = n : o.equityList = o.equityList.concat(n), e.data.current < e.data.pages ? (o.page = o.page + 1, o.loadMore = "loadmore") : o.loadMore = "nomore") : (o.equityList = [], o.loadMore = "nomore")
                  }
                })).catch((function(o) {
                  uni.stopPullDownRefresh()
                }))
              },
              handleChange: function(t) {
                this.searchText = t.detail.value.trim(), this.toSearch()
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.page-box{background:#f5f5f4;min-height:100vh;padding-bottom:30rpx}.page-box .top-box{background:#fff;height:292rpx;position:-webkit-sticky;position:sticky;top:0;width:750rpx;z-index:10}.page-box .top-box .bg-img{height:292rpx;width:750rpx}.page-box .top-box .search-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;left:36rpx;position:absolute;width:690rpx}.page-box .top-box .search-box .search{align-items:center;background:hsla(0,0%,100%,.2);border:2rpx solid hsla(0,0%,100%,.3);border-radius:50rpx;box-shadow:0rpx 8rpx 12rpx 0rpx rgba(0,0,0,.05);color:hsla(0,0%,100%,.6);display:-webkit-flex;display:flex;font-size:26rpx;height:60rpx;padding:0 20rpx;width:606rpx}.page-box .top-box .search-box .search .s-icon{background:url('https://eshopfile.zhiyousx.com/2024052317490952184.png')no-repeat;background-size:100% 100%;height:32rpx;margin-right:10rpx;width:32rpx}.page-box .top-box .search-box .map-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column}.page-box .top-box .search-box .map-box .map-icon{background:url('https://eshopfile.zhiyousx.com/2024052317504259777.png')no-repeat;background-size:100% 100%;height:34rpx;width:34rpx}.page-box .top-box .search-box .map-box .map-t{color:#fff;font-size:24rpx;line-height:34rpx}.page-box .top-box .changeS .search{border:2rpx solid #e00130;color:rgba(30,27,25,.6)}.page-box .top-box .changeS .search .s-icon{background:url('https://eshopfile.zhiyousx.com/2024052410181203960.png')no-repeat;background-size:100% 100%;height:32rpx;margin-right:10rpx;width:32rpx}.page-box .top-box .changeS .map-box .map-icon{background:url('https://eshopfile.zhiyousx.com/2024052410180915115.png')no-repeat;background-size:100% 100%;height:34rpx;width:34rpx}.page-box .top-box .changeS .map-box .map-t{color:rgba(30,27,25,.8)}.page-box .top-tab-b{background:#f5f5f4;border-radius:20rpx 20rpx 0 0;margin-top:-20rpx;padding:20rpx 0;position:-webkit-sticky;position:sticky;top:272rpx;width:750rpx;z-index:20}.page-box .top-tab-b .tab-box{height:68rpx;white-space:nowrap;width:750rpx}.page-box .top-tab-b .tab-box .tab-left{display:inline-block;width:30rpx}.page-box .top-tab-b .tab-box .tab-item{color:#1e1b19;display:inline-block;font-size:30rpx;height:68rpx;line-height:44rpx;margin-right:64rpx;position:relative}.page-box .top-tab-b .tab-box .active{color:#e00130;font-size:34rpx;font-weight:700}.page-box .top-tab-b .tab-box .active::after{background:url('https://eshopfile.zhiyousx.com/2024052409380555605.png')no-repeat 50%;background-size:40rpx 12rpx;bottom:0;content:"";height:12rpx;left:0;position:absolute;width:100%}.page-box .top-tab-b .choose-box{align-items:center;display:-webkit-flex;display:flex;margin-top:20rpx;padding-left:30rpx;position:relative}.page-box .top-tab-b .choose-box .cb-it{background:#fff;border-radius:20rpx;color:#1e1b19;font-size:26rpx;line-height:60rpx;margin-right:20rpx;padding:0 20rpx}.page-box .top-tab-b .choose-box .cb-it .ad-mark{filter:grayscale(1);height:30rpx;margin-right:10rpx;width:30rpx}.page-box .top-tab-b .choose-box .cb-it .mark{background:rgba(30,27,25,.05);border-radius:50%;height:28rpx;margin-left:10rpx;width:28rpx}.page-box .top-tab-b .choose-box .popBg{background:rgba(30,27,25,.05)}.page-box .top-tab-b .choose-box .act{color:#e00130}.page-box .top-tab-b .choose-box .act .ad-mark{filter:none;height:30rpx;margin-right:10rpx;width:30rpx}.page-box .top-tab-b .choose-box .act .mark{background:#fff}.page-box .top-tab-b .choose-box .pop-box-bg{background:rgba(35,32,32,.3);height:100vh;left:0;position:absolute;top:68rpx;width:750rpx}.page-box .top-tab-b .choose-box .pop-box-bg .pop-box{background:#fff;border-radius:0 0 20rpx 20rpx;padding:30rpx;width:750rpx}.page-box .top-tab-b .choose-box .pop-box-bg .pop-box .sort-box .it{color:rgba(30,27,25,.8);font-size:30rpx;line-height:44rpx;margin-bottom:30rpx;text-align:left}.page-box .top-tab-b .choose-box .pop-box-bg .pop-box .sort-box .it:last-child{margin-bottom:0}.page-box .top-tab-b .choose-box .pop-box-bg .pop-box .sort-box .itAct{color:#e00130}.page-box .top-tab-b .choose-box .pop-box-bg .pop-box .ch-box .row-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.page-box .top-tab-b .choose-box .pop-box-bg .pop-box .ch-box .row-box .row-it{background:rgba(30,27,25,.05);border-radius:20rpx;color:rgba(30,27,25,.8);font-size:26rpx;height:60rpx;line-height:60rpx;position:relative;text-align:center;width:217rpx}.page-box .top-tab-b .choose-box .pop-box-bg .pop-box .ch-box .row-box .rtAct{background:rgba(179,45,45,.1);border:2rpx solid #e00130;color:#e00130;line-height:56rpx}.page-box .top-tab-b .choose-box .pop-box-bg .pop-box .ch-box .row-box .rtAct::after{background:url('https://eshopfile.zhiyousx.com/2024052414400211734.png')no-repeat;background-size:100% 100%;border-radius:0 0 20rpx 0;bottom:-2rpx;content:"";height:26rpx;position:absolute;right:-2rpx;width:31rpx}.page-box .top-tab-b .choose-box .pop-box-bg .pop-box .ch-box .row-box .btn-comfirm{background:#e00130;border-radius:20rpx;box-shadow:inset -2rpx -2rpx 7rpx 0rpx #811616,inset 0rpx 4rpx 6rpx 0rpx hsla(0,0%,100%,.3);color:#fff;font-size:26rpx;height:70rpx;line-height:70rpx;text-align:center;width:332rpx}.page-box .top-tab-b .choose-box .pop-box-bg .pop-box .ch-box .row-box .btn{background:rgba(30,27,25,.05);border:2rpx solid rgba(30,27,25,.3);border-radius:20rpx;color:rgba(30,27,25,.8);font-size:26rpx;height:70rpx;line-height:66rpx;text-align:center;width:332rpx}.page-box .module-box{background:#f5f5f4;padding:0 30rpx;position:relative;width:750rpx;z-index:5}.page-box .module-box .store-item{background:#fff;border-radius:20rpx;display:-webkit-flex;display:flex;height:248rpx;justify-content:space-between;margin-bottom:20rpx;padding:20rpx 10rpx 20rpx 20rpx;width:690rpx}.page-box .module-box .store-item .img-b{position:relative}.page-box .module-box .store-item .img-b image{border-radius:20rpx;height:208rpx;width:208rpx}.page-box .module-box .store-item .img-b .tip{background:url('https://eshopfile.zhiyousx.com/2024052411062337444.png')no-repeat;background-size:100% 100%;height:44rpx;left:-10rpx;position:absolute;top:2rpx;width:104rpx}.page-box .module-box .store-item .info-box{display:-webkit-flex;display:flex;flex-direction:column;height:208rpx;justify-content:space-between;width:432rpx}.page-box .module-box .store-item .info-box .name-b .name{color:#1e1b19;font-size:28rpx;line-height:40rpx}.page-box .module-box .store-item .info-box .name-b .sub{color:rgba(179,45,45,.7);font-size:24rpx;line-height:34rpx;margin-top:10rpx}.page-box .module-box .store-item .info-box .name-b .tag{height:38rpx;margin-top:6rpx;width:294rpx}.page-box .module-box .store-item .info-box .ab-box{display:-webkit-flex;display:flex;flex-direction:column;justify-content:end}.page-box .module-box .store-item .info-box .ab-box .tag-box{border:2rpx solid #1e1b19;border-radius:8rpx;display:-webkit-flex;display:flex;height:38rpx;max-width:-webkit-fit-content;max-width:fit-content}.page-box .module-box .store-item .info-box .ab-box .tag-box .level-box{background:#1e1b19;border-radius:0 0 14rpx 0;color:#fff;font-size:22rpx;height:100%;line-height:34rpx;position:relative;text-align:center;width:120rpx}.page-box .module-box .store-item .info-box .ab-box .tag-box .level-box:after{background:#1e1b19;content:"";height:16rpx;position:absolute;right:-14rpx;top:0;width:16rpx;z-index:2}.page-box .module-box .store-item .info-box .ab-box .tag-box .eq-box{background:#fff;border-radius:14rpx 8rpx 8rpx 8rpx;color:#1e1b19;font-size:22rpx;height:100%;line-height:34rpx;padding:0 14rpx;position:relative;z-index:5}.page-box .module-box .store-item .info-box .ab-box .ad-b{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:8rpx}.page-box .module-box .store-item .info-box .ab-box .ad-b text{color:rgba(30,27,25,.4);font-size:22rpx;margin-right:10rpx}.page-box .module-box .store-item .info-box .ab-box .ad-b .ad{height:20rpx;margin-right:8rpx;width:16rpx}.page-box .empty-box{margin-top:160rpx;width:100%}.page-box .empty-box image{height:342rpx;width:500rpx}
</style>
