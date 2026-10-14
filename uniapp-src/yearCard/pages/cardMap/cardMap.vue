<template>
<view class="card-map">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <map class="" :enableRotate="false" id="map" :latitude="map.latitude" layerStyle="2" :longitude="map.longitude" :markers="markers" scale="10" :showLocation="true" style="width:100%;height:100%;" subkey="U4JBZ-K7XW4-GH2UA-KVPJK-OLCYV-7WB3D" theme="satellite" @callouttap="calloutTap($event)">
        <cover-view class="" slot="callout" v-if="markers&&markers[0]">
            <block :key="index" v-for="(item, index) in markers">
                <cover-view class="already-visited-container" :markerId="index" v-if="markers[index].verifyNum>0">
                    <cover-view :class="['custom-callout','already-visited','',item.scenicId==selectScenicId?'is-choose-big':'is-choose']">
                        <cover-view class="i-block already-visited-left">
                            <cover-image class="already-visited-left-image" src="https://eshopfile.zhiyousx.com/2023112717491104306.png"></cover-image>
                        </cover-view>
                        <cover-view class="i-block already-visited-right">
                            <cover-view class="name">{{''+(markers[index].scenicName||'')}}</cover-view>
                            <cover-view class="">
                                <cover-view class="i-block time">{{markers[index].lastUseDate||''}}</cover-view>
                                <cover-view class="i-block status">已去过</cover-view>
                            </cover-view>
                        </cover-view>
                    </cover-view>
                    <cover-image class="custom-image" src="/static/images/up.png" v-if="item.scenicId==selectScenicId"></cover-image>
                    <cover-image class="custom-image" src="/static/images/dropwown.png" v-if="item.scenicId!=selectScenicId"></cover-image>
                </cover-view>
                <cover-view class="custom-callout-container" :markerId="index" v-else>
                    <cover-view :class="['custom-callout','',item.scenicId==selectScenicId?'is-choose-big':'no-choose']">{{ (markers[index].scenicName||'') }}</cover-view>
                    <cover-image class="custom-image" src="/static/images/up.png" v-if="item.scenicId==selectScenicId"></cover-image>
                    <cover-image class="custom-image" src="/static/images/grey.png" v-if="item.scenicId!=selectScenicId"></cover-image>
                </cover-view>
            </block>
        </cover-view>
    </map>
    <content :cardList="cardList" class="" :currentInfo="currentInfo" :mapPage="2" :selectedScenic="selectedScenic" @handleChange="handleChange()"></content>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              content: function() {
                n.e("yearCard/pages/cardMap/components/content").then(function() {
                  return resolve(n("a97c"))
                }.bind(null, n)).catch(n.oe)
              }
            },
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
                allLocations: []
              }
            },
            onLoad: function(e) {
              var t = this;
              return (0, c.default)(r.default.mark((function n() {
                return r.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      uni.getLocation(), t.getList(e.userYearCardId);
                    case 2:
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
              getList: function(t) {
                var n = this;
                return (0, c.default)(r.default.mark((function a() {
                  var c, o;
                  return r.default.wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return a.next = 2, (0, i.getCardListApi)({
                          status: 3
                        });
                      case 2:
                        if (1 === (c = a.sent).code) {
                          a.next = 5;
                          break
                        }
                        return a.abrupt("return", uni.showToast({
                          title: c.msg,
                          icon: "none"
                        }));
                      case 5:
                        n.cardList = c.data, console.log(n.cardList), o = t ? n.cardList.find((function(e) {
                          return e.userYearCardId === t
                        })) : n.cardList[0], n.handleChange(o);
                      case 9:
                      case "end":
                        return a.stop()
                    }
                  }), a)
                })))()
              },
              handleChange: function(t) {
                var n = this;
                return (0, c.default)(r.default.mark((function a() {
                  var c, o;
                  return r.default.wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        return n.selectedScenic = {}, n.selectScenicId = "", n.currentInfo = t, a.next = 5, (0, i.getMapDetailApi)({
                          userYearCardId: n.currentInfo.userYearCardId
                        });
                      case 5:
                        if (1 === (c = a.sent).code) {
                          a.next = 8;
                          break
                        }
                        return a.abrupt("return", uni.showToast({
                          title: c.msg,
                          icon: "none"
                        }));
                      case 8:
                        (o = c.data.mapDetailList).forEach((function(e) {
                          n.allLocations.push({
                            longitude: e.longitude,
                            latitude: e.latitude
                          })
                        })), n.originalData = o || [], n.markers = o.map((function(e, t) {
                          return {
                            id: t,
                            latitude: e.latitude,
                            longitude: e.longitude,
                            width: 0,
                            height: 0,
                            zIndex: 10,
                            iconPath: "https://eshopfile.zhiyousx.com/2024010219444166193.png",
                            scenicName: e.scenicName,
                            usedTimes: e.usedTimes,
                            lastUseDate: e.lastUseDate,
                            verifyNum: e.verifyNum,
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
                        })), n.$forceUpdate();
                      case 13:
                      case "end":
                        return a.stop()
                    }
                  }), a)
                })))()
              },
              calloutTap: function(e) {
                var t = this;
                this.$nextTick((function() {
                  t.selectedScenic = t.originalData[e.markerId], t.selectScenicId = t.selectedScenic.scenicId, t.allLocations = [], t.markers.forEach((function(e) {
                    t.selectScenicId == e.scenicId ? (t.allLocations.push({
                      latitude: e.latitude,
                      longitude: e.longitude
                    }), e.zIndex = 100) : e.zIndex = 10
                  }))
                }))
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
cover-view{box-sizing:border-box}.is-choose-big{background-color:#ad2f06;color:#fff}.is-choose{background-color:#ebdad3;color:#000}.no-choose{background-color:#746660;color:hsla(0,0%,100%,.8)}.card-map{height:100vh;position:relative;width:100%}.card-map .custom-callout-container{display:inline-block;height:58rpx;position:relative}.card-map .custom-callout{border:1px solid hsla(0,0%,100%,.8);border-radius:40rpx;font-size:26rpx;font-weight:400;height:48rpx;line-height:48rpx;padding:0 30rpx;position:relative;text-align:center;width:-webkit-fit-content;width:fit-content}.card-map .custom-image,.card-map .custom-image2{bottom:4rpx;height:13rpx;left:0;margin:auto;right:0;width:28rpx;z-index:1}.card-map .i-block{display:inline-block;height:58rpx;position:relative}.card-map .already-visited-container{display:inline-block;height:92rpx;position:relative}.card-map .already-visited-container .already-visited{height:80rpx;padding:0 20rpx;position:relative;width:auto}.card-map .already-visited-container .already-visited-left{height:80rpx;width:36rpx}.card-map .already-visited-container .already-visited-left-image{height:36rpx;margin-top:22rpx;width:36rpx}.card-map .already-visited-container .already-visited-right{height:80rpx;margin-left:10rpx}.card-map .already-visited-container .already-visited-right .i-block{text-align:start}.card-map .already-visited-container .already-visited-right .name{font-size:26rpx;font-weight:400;height:36rpx;line-height:36rpx;margin-top:4rpx;text-align:start}.card-map .already-visited-container .already-visited-right .time{margin-right:10rpx}.card-map .already-visited-container .already-visited-right .status,.card-map .already-visited-container .already-visited-right .time{font-size:20rpx;font-weight:400;height:28rpx;line-height:28rpx;margin-top:4rpx;text-align:center}
</style>
