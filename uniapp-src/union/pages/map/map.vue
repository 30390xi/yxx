<template>
<view class="card-map">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <map class="" :enableRotate="false" id="map" :latitude="map.latitude" layerStyle="2" :longitude="map.longitude" :markers="markers" scale="10" :showLocation="true" style="width:100%;height:100%;" subkey="U4JBZ-K7XW4-GH2UA-KVPJK-OLCYV-7WB3D" theme="satellite" @callouttap="calloutTap($event)">
        <cover-view class="" slot="callout" v-if="markers&&markers[0]">
            <cover-view class="custom-callout-container" :markerId="index" :key="index" v-for="(item, index) in markers">
                <cover-view :class="['custom-callout','',item.scenicId==selectScenicId?'is-choose-big':'no-choose']">{{ (markers[index].scenicName||'') }}</cover-view>
                <cover-image class="custom-image" src="/static/images/up.png" v-if="item.scenicId==selectScenicId"></cover-image>
                <cover-image class="custom-image" src="/static/images/grey.png" v-if="item.scenicId!=selectScenicId"></cover-image>
            </cover-view>
        </cover-view>
    </map>
    <view class="pop-box" v-if="showPopup">
        <view class="store-item">
            <view class="img-b">
                <image class="" mode="aspectFill" :src="selectedScenic.scenicImage"></image>
                <view class="tip" v-if="selectedScenic.isSponsor"></view>
            </view>
            <view class="info-box">
                <view class="name-b">
                    <view class="name multilineText2">{{ selectedScenic.scenicName }}</view>
                    <view class="sub singleLineText">{{ selectedScenic.equityDesc }}</view>
                </view>
                <view class="ab-box">
                    <view class="tag-box">
                        <view class="level-box">{{ $root.f0 }}</view>
                        <view class="eq-box">{{ selectedScenic.equityNum }}</view>
                    </view>
                    <view class="ad-b">
                        <view class="flex col-center">
                            <text class="">{{selectedScenic.className}}</text>
                            <text class="singleLineText">{{selectedScenic.cityName+(selectedScenic.address?'/'+selectedScenic.address:'')}}</text>
                        </view>
                        <view class="flex col-center" v-if="selectedScenic.distance>0">
                            <image mode class="ad" src="https://eshopfile.zhiyousx.com/2024052411165183914.png"></image>
                            <text class="">{{selectedScenic.distance+'km'}}</text>
                        </view>
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
                map: {
                  longitude: 108.939621,
                  latitude: 34.343147
                },
                markers: [],
                originalData: [],
                cardList: [],
                currentInfo: {},
                selectedScenic: {},
                selectScenicId: "",
                allLocations: [],
                showPopup: !1,
                unionLevel: 3
              }
            },
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            filters: {
              levelFilter: function(e) {
                return {
                  1: "青年联盟",
                  2: "普通会员",
                  3: "联合会员",
                  4: "参议会员"
                } [e]
              }
            },
            onShareAppMessage: function() {
              return {
                title: "点击查看陕西联合会员海量权益",
                imageUrl: "https://eshopfile.zhiyousx.com/2024061310513695733.png",
                path: this.$util.setShareUrl("union/pages/map/map")
              }
            },
            onLoad: function() {
              var t = this;
              return (0, a.default)(o.default.mark((function n() {
                return o.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      uni.getStorageSync("token") && t.userInfo && t.userInfo.isUnionMember && uni.getStorageSync("unionUserInfo") ? t.unionLevel = uni.getStorageSync("unionUserInfo").level : t.unionLevel = 3, uni.getLocation(), t.getEquityList();
                    case 3:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            methods: {
              getLocation: function() {
                var t = this;
                uni.getLocation({
                  type: "gcj02",
                  success: function(e) {
                    t.map = {
                      longitude: e.longitude,
                      latitude: e.latitude
                    }
                  }
                })
              },
              getEquityList: function() {
                var t = this,
                  n = {
                    current: this.page,
                    size: 9999,
                    latitude: this.map.latitude,
                    longitude: this.map.longitude
                  };
                this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/userUnionEquityCard/getUnionEquityClassList", n).then((function(n) {
                  if (uni.stopPullDownRefresh(), 1 === n.code) {
                    var i = n.data.records;
                    t.getMapDetail(i)
                  }
                }))
              },
              getMapDetail: function(e) {
                var t = this;
                this.selectedScenic = {}, this.selectScenicId = "";
                var n = e;
                n.forEach((function(e) {
                  t.allLocations.push({
                    longitude: e.longitude,
                    latitude: e.latitude
                  })
                })), this.originalData = n || [], this.markers = n.map((function(e, t) {
                  return {
                    id: t,
                    latitude: e.latitude,
                    longitude: e.longitude,
                    width: 0,
                    height: 0,
                    zIndex: 10,
                    iconPath: "https://eshopfile.zhiyousx.com/2024010219444166193.png",
                    scenicName: e.scenicName,
                    scenicId: e.scenicId,
                    customCallout: {
                      anchorY: 50,
                      anchorX: 0,
                      display: "ALWAYS"
                    },
                    label: {
                      content: " ",
                      bgColor: "",
                      color: "",
                      textAlign: "center",
                      borderRadius: 15,
                      width: 25,
                      height: 25,
                      fontSize: 12,
                      borderWidth: 2,
                      borderColor: "",
                      anchorY: -15
                    }
                  }
                })), this.$forceUpdate()
              },
              calloutTap: function(e) {
                var t = this;
                this.$nextTick((function() {
                  t.selectedScenic = t.originalData[e.markerId], t.selectScenicId = t.selectedScenic.scenicId, t.allLocations = [], t.markers.forEach((function(e) {
                    t.selectScenicId == e.scenicId ? (t.allLocations.push({
                      latitude: e.latitude,
                      longitude: e.longitude
                    }), e.zIndex = 100) : e.zIndex = 10
                  })), t.showPopup = !0
                }))
              },
              jumpTo: function(e) {
                this.$navigateTo({
                  url: e
                })
              },
              jumpToS: function(e) {
                this.$navigateTo({
                  url: e
                })
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
cover-view{box-sizing:border-box}.is-choose-big{background-color:#ad2f06;color:#fff}.is-choose{background-color:#ebdad3;color:#000}.no-choose{background-color:#746660;color:hsla(0,0%,100%,.8)}.card-map{height:100vh;position:relative;width:100%}.card-map .cover-box{align-items:center;display:-webkit-flex;display:flex;justify-items:flex-end;position:absolute;right:28rpx}.card-map .custom-callout-container{display:inline-block;height:58rpx;position:relative}.card-map .custom-callout{border:1px solid hsla(0,0%,100%,.8);border-radius:40rpx;font-size:26rpx;font-weight:400;height:48rpx;line-height:48rpx;padding:0 30rpx;position:relative;text-align:center;width:-webkit-fit-content;width:fit-content}.card-map .custom-image,.card-map .custom-image2{bottom:4rpx;height:13rpx;left:0;margin:auto;right:0;width:28rpx;z-index:1}.card-map .i-block{display:inline-block;height:58rpx;position:relative}.card-map .already-visited-container{display:inline-block;height:92rpx;position:relative}.card-map .already-visited-container .already-visited{height:80rpx;padding:0 20rpx;position:relative;width:auto}.card-map .already-visited-container .already-visited-left{height:80rpx;width:36rpx}.card-map .already-visited-container .already-visited-left-image{height:36rpx;margin-top:22rpx;width:36rpx}.card-map .already-visited-container .already-visited-right{height:80rpx;margin-left:10rpx}.card-map .already-visited-container .already-visited-right .i-block{text-align:start}.card-map .already-visited-container .already-visited-right .name{font-size:26rpx;font-weight:400;height:36rpx;line-height:36rpx;margin-top:4rpx;text-align:start}.card-map .already-visited-container .already-visited-right .time{margin-right:10rpx}.card-map .already-visited-container .already-visited-right .status,.card-map .already-visited-container .already-visited-right .time{font-size:20rpx;font-weight:400;height:28rpx;line-height:28rpx;margin-top:4rpx;text-align:center}.card-map .pop-box{bottom:0;left:0;padding:30rpx;position:fixed;width:100%}.card-map .store-item{background:#fff;border-radius:20rpx;display:-webkit-flex;display:flex;height:248rpx;justify-content:space-between;margin-bottom:20rpx;padding:20rpx 10rpx 20rpx 20rpx;width:690rpx}.card-map .store-item .img-b{position:relative}.card-map .store-item .img-b image{border-radius:20rpx;height:208rpx;width:208rpx}.card-map .store-item .img-b .tip{background:url('https://eshopfile.zhiyousx.com/2024052411062337444.png')no-repeat;background-size:100% 100%;height:44rpx;left:-10rpx;position:absolute;top:2rpx;width:104rpx}.card-map .store-item .info-box{display:-webkit-flex;display:flex;flex-direction:column;height:208rpx;justify-content:space-between;width:432rpx}.card-map .store-item .info-box .name-b .name{color:#1e1b19;font-size:28rpx;line-height:40rpx}.card-map .store-item .info-box .name-b .sub{color:rgba(179,45,45,.7);font-size:24rpx;line-height:34rpx;margin-top:10rpx}.card-map .store-item .info-box .name-b .tag{height:38rpx;margin-top:6rpx;width:294rpx}.card-map .store-item .info-box .ab-box{display:-webkit-flex;display:flex;flex-direction:column;justify-content:end}.card-map .store-item .info-box .ab-box .tag-box{border:2rpx solid #1e1b19;border-radius:8rpx;display:-webkit-flex;display:flex;height:38rpx;max-width:-webkit-fit-content;max-width:fit-content}.card-map .store-item .info-box .ab-box .tag-box .level-box{background:#1e1b19;border-radius:0 0 14rpx 0;color:#fff;font-size:22rpx;height:100%;line-height:34rpx;position:relative;text-align:center;width:120rpx}.card-map .store-item .info-box .ab-box .tag-box .level-box:after{background:#1e1b19;content:"";height:16rpx;position:absolute;right:-14rpx;top:0;width:16rpx;z-index:2}.card-map .store-item .info-box .ab-box .tag-box .eq-box{background:#fff;border-radius:14rpx 8rpx 8rpx 8rpx;color:#1e1b19;font-size:22rpx;height:100%;line-height:34rpx;padding:0 14rpx;position:relative;z-index:5}.card-map .store-item .info-box .ab-box .ad-b{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:8rpx}.card-map .store-item .info-box .ab-box .ad-b text{color:rgba(30,27,25,.4);font-size:22rpx;margin-right:10rpx}.card-map .store-item .info-box .ab-box .ad-b .ad{height:20rpx;margin-right:8rpx;width:16rpx}
</style>
