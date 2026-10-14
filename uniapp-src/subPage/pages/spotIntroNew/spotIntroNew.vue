<template>
<view class="u-wrap">
    <uni-navbar class="" id="navBar" title="详细信息"></uni-navbar>
    <view class="tab-box" id="nav">
        <view class="title-box" v-if="detailObj.openTimeVoList&&detailObj.openTimeVoList[0]" @click="loc('kfsj')">
            <view class="left">
                <view :class="['name','',locations=='kfsj'?'active':'']">{{detailObj.openTimeTitle||'开放时间'}}</view>
                <view class="line" v-if="locations=='kfsj'"></view>
            </view>
        </view>
        <view class="title-box" v-if="detailObj.storeVoList&&detailObj.storeVoList[0]" @click="loc('mdxx')">
            <view class="left">
                <view :class="['name','',locations=='mdxx'?'active':'']">{{detailObj.storeInfoTitle||'门店信息'}}</view>
                <view class="line" v-if="locations=='mdxx'"></view>
            </view>
        </view>
        <view class="title-box" v-if="detailObj.type!=1&&( detailObj.facilitiesServicesVoList&&detailObj.facilitiesServicesVoList[0]||detailObj.additionalExplainVoList[0] )" @click="loc('ssfw')">
            <view class="left">
                <view :class="['name','',locations=='ssfw'?'active':'']">{{detailObj.facilitiesServicesTitle||'设施服务'}}</view>
                <view class="line" v-if="locations=='ssfw'"></view>
            </view>
        </view>
        <view class="title-box" v-if="detailObj.specialRecommendationVoList&&detailObj.specialRecommendationVoList[0]" @click="loc('tstj')">
            <view class="left">
                <view :class="['name','',locations=='tstj'?'active':'']">{{(detailObj.specialRecommendationTitle||'特色推荐')+''}}</view>
                <view class="line" v-if="locations=='tstj'"></view>
            </view>
        </view>
        <view class="title-box" v-if="detailObj.discountVoList&&detailObj.discountVoList[0]" @click="loc('ydzc')">
            <view class="left">
                <view :class="['name','',locations=='ydzc'?'active':'']">{{detailObj.reservationNoticeTitle||'优待政策'}}</view>
                <view class="line" v-if="locations=='ydzc'"></view>
            </view>
        </view>
        <view class="title-box" v-if="hasYwxz&&detailObj.type==1" @click="loc('ssfw')">
            <view class="left">
                <view :class="['name','',locations=='ssfw'?'active':'']">{{detailObj.visitNoticeTitle||'游玩须知'}}</view>
                <view class="line" v-if="locations=='ssfw'"></view>
            </view>
        </view>
        <view class="title-box" v-if="hasTraffic&&detailObj.type!=1" @click="loc('jtzn')">
            <view class="left">
                <view :class="['name','',locations=='jtzn'?'active':'']">{{detailObj.trafficGuideTitle||'交通指南'}}</view>
                <view class="line" v-if="locations=='jtzn'"></view>
            </view>
        </view>
    </view>
    <scroll-view class="scroll-box" :scrollTop="sTop" scrollY="true" :style="'height:'+winHeight-navBarH-windowWidth/750*170+'px'+';'" v-if="showScroll" @scroll="onScrolling($event)">
        <view class="bg">
            <view class="tq-box" id="kfsj">
                <view :class="['item','',activeDay==item.timeType?'active':'']" v-for="(item, __i0__) in $root.l0">
                    <view class="t">
                        <view class="">{{item.m0}}</view>
                    </view>
                    <view class="b">{{item.weather+' | '+item.nightAirTemperature+'/'+item.dayAirTemperature+'℃'}}</view>
                </view>
            </view>
            <view class="row row1" v-if="detailObj.noticeMsg">
                <view class="title-box">重要通知</view>
                <view class="content-box">
                    <u-parse class=" vue-ref" ref="noticeMsg" :html="detailObj.noticeMsg" :lazyLoad="true" style="text-indent:0;word-break:break-all;white-space:pre-wrap;" :tagStyle="parseStyle" @imgtap="priviewImg()"></u-parse>
                </view>
            </view>
            <view class="row row2" id="kfsj" v-if="detailObj.openTimeVoList&&detailObj.openTimeVoList[0]">
                <view class="title-box">{{detailObj.openTimeTitle||'开放时间'}}</view>
                <view class="content-box">
                    <u-table align="left" class="u-table" color="#656565" fontSize="28rpx" padding="18rpx 32rpx" :thStyle="{color:'#656565',background:'#FFFAF8',fontWeight:600}" :vueSlots="['default']">
                        <view class="" v-for="(item, index) in $root.l2">
                            <u-tr class="u-tr" :vueSlots="['default']">
                                <u-th class="u-th" :vueSlots="['default']">
                                    <text class="" style="font-weight:bold;color:#656565;">{{item.openTimeTitle}}</text>
                                </u-th>
                            </u-tr>
                            <u-tr class="u-tr" :vueSlots="['default']">
                                <u-td class="u-td" :vueSlots="['default']">
                                    <text class="" style="color:#656565;" v-for="(text, __i1__) in item.l1">{{text}}</text>
                                </u-td>
                            </u-tr>
                        </view>
                    </u-table>
                </view>
                <view class="open-time-info">
                    <image mode class="" src="https://eshopfile.zhiyousx.com/2022090115065996863.png"></image>以上信息仅供参考，具体以当日实际公示信息为准</view>
            </view>
            <view class="row row2" id="mdxx" v-if="detailObj.storeVoList&&detailObj.storeVoList[0]">
                <view class="title-box">{{detailObj.storeInfoTitle||'门店信息'}}</view>
                <view class="content-box">
                    <u-table align="left" class="u-table" color="#656565" fontSize="28rpx" padding="18rpx 32rpx" :thStyle="{color:'#656565',background:'#FFFAF8',fontWeight:600}" :vueSlots="['default']">
                        <view class="" v-for="(item, index) in $root.l4">
                            <u-tr class="u-tr" :vueSlots="['default']">
                                <u-th class="u-th" :vueSlots="['default']">
                                    <text class="" style="font-weight:bold;color:#656565;">{{item.storeTitel}}</text>
                                </u-th>
                            </u-tr>
                            <u-tr class="u-tr" :vueSlots="['default']">
                                <u-td class="u-td" :vueSlots="['default']">
                                    <text class="" style="color:#656565;" v-for="(text, __i2__) in item.l3">{{text}}</text>
                                </u-td>
                            </u-tr>
                        </view>
                    </u-table>
                </view>
                <view class="open-time-info">
                    <image mode class="" src="https://eshopfile.zhiyousx.com/2022090115065996863.png"></image>以上信息仅供参考，具体以当日实际公示信息为准</view>
            </view>
            <view class="row row2" id="ydzc" :style="detailObj.discountVoList&&detailObj.discountVoList[0]?'':'height:2rpx;visibility: hidden;margin-bottom:0;'">
                <view class="title-box">{{detailObj.reservationNoticeTitle||'优待政策'}}</view>
                <view class="content-box border">
                    <view class="tr first">
                        <view class="td">适用人群</view>
                        <view class="td">适用条件</view>
                        <view class="td">优待政策</view>
                    </view>
                    <view class="tr" v-for="(item, index) in detailObj.discountVoList">
                        <view class="td">{{item.peopleType||''}}</view>
                        <view class="td">{{item.limit||''}}</view>
                        <view class="td">{{item.discount||''}}</view>
                    </view>
                </view>
            </view>
            <view class="row row3" id="ssfw" :style="detailObj.facilitiesServicesVoList&&detailObj.facilitiesServicesVoList[0]||detailObj.additionalExplainVoList&&detailObj.additionalExplainVoList[0]?'':'height:2rpx;visibility: hidden;margin-bottom:0;'">
                <view class="title-box">{{detailObj.facilitiesServicesTitle||'设施服务'}}</view>
                <view class="content-box">
                    <view class="icon-box">
                        <view class="item" v-for="(item, __i3__) in detailObj.facilitiesServicesVoList">
                            <image mode class="" :src="item.tagUrl"></image>
                            <view class="name">{{item.name}}</view>
                        </view>
                    </view>
                    <view class="table" v-for="(item, __i4__) in $root.l6">
                        <view class="tr first">
                            <view class="td" style="font-weight:bold;">{{item.additionalExplainTitle||''}}</view>
                        </view>
                        <view class="tr">
                            <view class="td">
                                <text class="" v-for="(text, __i5__) in item.l5">{{text}}</text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="row row2" id="tstj" v-if="detailObj.specialRecommendationVoList&&detailObj.specialRecommendationVoList[0]">
                <view class="title-box">{{detailObj.specialRecommendationTitle||'特色推荐'}}</view>
                <view class="content-box">
                    <u-table align="left" class="u-table" color="#656565" fontSize="28rpx" padding="18rpx 32rpx" :thStyle="{color:'#656565',background:'#FFFAF8',fontWeight:600}" :vueSlots="['default']">
                        <view class="" v-for="(item, index) in $root.l8">
                            <u-tr class="u-tr" :vueSlots="['default']">
                                <u-th class="u-th" :vueSlots="['default']">
                                    <text class="" style="font-weight:bold;color:#656565;">{{item.specialRecommendationTitel}}</text>
                                </u-th>
                            </u-tr>
                            <u-tr class="u-tr" :vueSlots="['default']">
                                <u-td class="u-td" :vueSlots="['default']">
                                    <text class="" style="color:#656565;" v-for="(text, __i6__) in item.l7">{{text}}</text>
                                </u-td>
                            </u-tr>
                        </view>
                    </u-table>
                </view>
                <view class="open-time-info">
                    <image mode class="" src="https://eshopfile.zhiyousx.com/2022090115065996863.png"></image>以上信息仅供参考，具体以当日实际公示信息为准</view>
            </view>
            <view class="row row4" id="jtzn" v-if="hasTraffic">
                <view class="title-box">{{detailObj.trafficGuideTitle||'交通指南'}}</view>
                <view class="content-box">
                    <view class="item-list">
                        <view class="item" v-if="item.trafficContent" v-for="(item, __i7__) in $root.l9">
                            <view class="l">
                                <image mode class="" :src="'https://eshopfile.zhiyousx.com/spotIntroNew/spotIntroNew ('+item.trafficType+2+').png'"></image>
                            </view>
                            <view class="r">
                                <view class="t">{{item.m1}}</view>
                                <view class="b">
                                    <rich-text class="" :nodes="item.trafficContent" style="font-size:28rpx;"></rich-text>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="row row5" v-if="!noJqxx">
                <view class="title-box">{{$root.m2}}</view>
                <view class="content-box">
                    <view class="item-list">
                        <view class="item" v-if="detailObj.officialWebsite&&detailObj.officialWebsite[0]">
                            <view class="l">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/spotIntroNew/spotIntroNew (6).png"></image>
                            </view>
                            <view class="r">
                                <view class="t">官方网站</view>
                                <view class="b between">
                                    <view class="weibo-box" v-for="(item, __i8__) in detailObj.officialWebsite">
                                        <view class="weibo" style="color:#3582fb;">{{item}}</view>
                                        <view class="copy">复制</view>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="item" v-if="detailObj.telephoneVoList&&detailObj.telephoneVoList[0]">
                            <view class="l">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/spotIntroNew/spotIntroNew (7).png"></image>
                            </view>
                            <view class="r">
                                <view class="t">联系电话</view>
                                <view class="b">
                                    <view class="phone-box" v-for="(item, __i9__) in detailObj.telephoneVoList">
                                        <view class="l multilineText2">{{item.telephoneTitle}}</view>
                                        <view class="r">
                                            <view class="">{{item.telephone||''}}</view>
                                            <image mode class="" src="https://eshopfile.zhiyousx.com/spotIntroNew/dianhua.png"></image>
                                        </view>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="item" v-if="detailObj.wxSubscriptionVoList&&detailObj.wxSubscriptionVoList[0]">
                            <view class="l">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/spotIntroNew/spotIntroNew (8).png"></image>
                            </view>
                            <view class="r">
                                <view class="t">微信公众号</view>
                                <view class="b" v-for="(item, __i10__) in detailObj.wxSubscriptionVoList">
                                    <view class="wx-box">
                                        <view class="t">{{item.wxSubscriptionType||''}}</view>
                                        <view class="b">
                                            <view class="m singleLineText">{{(item.wxSubscriptionName||'')+(item.wxSubscription?'（'+item.wxSubscription+'）':'')}}</view>
                                            <view class="r" v-if="item.wxSubscription">复制</view>
                                        </view>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="item" v-if="detailObj.tiktokVoList&&detailObj.tiktokVoList[0]">
                            <view class="l">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/2022100909491063450.png"></image>
                            </view>
                            <view class="r">
                                <view class="t">抖音</view>
                                <view class="b" v-for="(item, __i11__) in detailObj.tiktokVoList">
                                    <view class="wx-box">
                                        <view class="b">
                                            <view class="m singleLineText">{{(item.toktokName||'')+(item.toktokNo?'（'+item.toktokNo+'）':'')}}</view>
                                            <view class="r" v-if="item.toktokNo">复制</view>
                                        </view>
                                    </view>
                                </view>
                            </view>
                        </view>
                        <view class="item" v-if="detailObj.sinaWeiboVoList&&detailObj.sinaWeiboVoList[0]">
                            <view class="l">
                                <image mode class="" src="https://eshopfile.zhiyousx.com/spotIntroNew/spotIntroNew (9).png"></image>
                            </view>
                            <view class="r">
                                <view class="t">新浪微博</view>
                                <view class="b between" v-for="(item, __i12__) in detailObj.sinaWeiboVoList">
                                    <view class="weibo-box">
                                        <view class="weibo">{{item.sinaWeibo}}</view>
                                        <view class="copy">复制</view>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </scroll-view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              locations: "kfsj",
              detailObj: {},
              winHeight: 0,
              windowWidth: 0,
              activeDay: "f1",
              locPoint: "",
              showScroll: !1,
              weatherObj: [],
              navBarH: 48,
              location: 0,
              kfsjTop: 0,
              ydzcTop: 0,
              ywxzTop: 0,
              jtznTop: 0,
              ssfwTop: 0,
              mdxxTop: 0,
              tstjTop: 0,
              hasYwxz: !0,
              noJqxx: !1,
              _spotId: "",
              a: "",
              b: "",
              c: "",
              sTop: 0,
              navH: 0,
              hasTraffic: !1,
              thStyleObj: {
                background: "#FFFAF8",
                fontWeight: "500",
                color: "rgba(0,0,0,.5)"
              },
              parseStyle: {
                p: "word-break: break-all;"
              },
              spotNames: ["", "景区", "饭店", "酒店", "玩乐"]
            }
          },
          onLoad: function(i) {
            this.scenicSpot(i);
            var n = this;
            this.locPoint = i.loc || "", uni.getSystemInfo({
              success: function(t) {
                n.winHeight = t.windowHeight, n.windowWidth = t.windowWidth, n.showScroll = !0
              }
            })
          },
          onShow: function() {
            var t = this,
              i = this;
            setTimeout((function() {
              new Promise((function(t) {
                var i = uni.createSelectorQuery();
                i.select("#kfsj").boundingClientRect(), i.select("#ydzc").boundingClientRect(), i.select("#ywxz").boundingClientRect(), i.select("#navBar").boundingClientRect(), i.select("#nav").boundingClientRect(), i.select("#jtzn").boundingClientRect(), i.select("#ssfw").boundingClientRect(), i.select("#mdxx").boundingClientRect(), i.select("#tstj").boundingClientRect(), i.exec((function(i) {
                  t(i)
                }))
              })).then((function(n) {
                if (i.kfsjTop = n[0] ? n[0].top : 0, i.ydzcTop = n[1] ? n[1].top : 0, i.ywxzTop = n[2] ? n[2].top : 0, i.navBarH = n[3] ? n[3].height : 0, i.navH = n[4] ? n[4].height : 0, i.jtznTop = n[5] ? n[5].top : 0, i.ssfwTop = n[6] ? n[6].top : 0, i.mdxxTop = n[7] ? n[7].top : 0, i.tstjTop = n[8] ? n[8].top : 0, i.locPoint) {
                  var e = t[i.locPoint + "Top"];
                  i.sTop = e - i.navH - i.navBarH
                }
              }))
            }), 700)
          },
          methods: {
            scenicSpot: function(i) {
              var n = this;
              t.showNavigationBarLoading(), this.$uniApi.getRequestYesLoading("GET", "base/app/v1/scenicSpot/getAppUpgradeScenicSpot?scenicId=" + i.spotId, "加载中...").then((function(i) {
                t.hideNavigationBarLoading(), n.detailObj = i.data, n.setInfo(i.data)
              }))
            },
            setInfo: function(t) {
              var i = this;
              1 == this.detailObj.type ? this.locations = "kfsj" : 2 == this.detailObj.type ? this.locations = "ssfw" : this.locations = "mdxx", t.trafficGuideVoList && t.trafficGuideVoList.some((function(t) {
                return "" != t.trafficContent
              })) && (this.hasTraffic = !0), this.getInfoStatus(), this.$uniApi.getRequestNoLoading("GET", "base/v1/common/get3DayWeather?id=" + this.detailObj.cityId).then((function(t) {
                i.weatherObj = t.data
              }))
            },
            goHref: function(t) {
              this.$navigateTo({
                url: "/pages/webpage/webpage?url=".concat(t)
              })
            },
            loc: function(t) {
              var i = this;
              this.$nextTick((function() {
                i.sTop = i[t + "Top"] - i.navH - i.navBarH, console.log(i[t + "Top"])
              }))
            },
            gettrafficName: function(t) {
              return 1 == t ? "公交" : 2 == t ? "地铁" : 3 == t ? "自驾" : void 0
            },
            getInfoStatus: function() {
              var t = this.detailObj;
              t.officialWebsite || t.telephoneVoList || t.wxSubscriptionVoList || t.sinaWeiboVoList || t.tiktokVoList || (this.noJqxx = !0), t.noticeMsg || t.facilitiesServicesVoList && t.facilitiesServicesVoList[0] || t.trafficGuideVoList.some((function(t) {
                return "" != t.trafficContent
              })) || t.officialWebsite && t.officialWebsite[0] || t.telephoneVoList && t.telephoneVoList[0] || t.wxSubscriptionVoList && t.wxSubscriptionVoList[0] || t.sinaWeiboVoList && t.sinaWeiboVoList[0] ? this.hasYwxz = !0 : this.hasYwxz = !1
            },
            changeActiveDay: function(t) {
              this.activeDay = t
            },
            jumpWebview: function(t) {
              -1 != t.indexOf("?") && (t = (t = (t = t.replace("?", "*")).replace("=", "+")).replace("=", "+")), this.$navigateTo({
                url: "/pages/webpage/webpage?url=".concat(t)
              })
            },
            getDayName: function(t) {
              return "f1" == t ? "今天" : "f2" == t ? "明天" : "f3" == t ? "后天" : void 0
            },
            spotName: function(t) {
              return t ? this.spotNames[t] + "信息" : ""
            },
            call: function(i) {
              uni.makePhoneCall({
                phoneNumber: i
              })
            },
            copyFn: function(i, n) {
              uni.setClipboardData({
                data: i,
                success: function() {
                  uni.showToast({
                    title: n,
                    icon: "none"
                  })
                }
              })
            },
            onScrolling: function(t) {
              if (1 == this.detailObj.type) {
                var i = t.detail.scrollTop + this.navH + this.navBarH;
                console.log(i), console.log(this.ssfwTop), i >= this.ssfwTop - 2 ? this.locations = "ssfw" : i >= this.ydzcTop - 2 ? this.locations = "ydzc" : this.locations = "kfsj"
              }
              if (2 == this.detailObj.type) {
                var n = t.detail.scrollTop + this.navH + this.navBarH;
                n >= this.jtznTop - 2 ? this.locations = "jtzn" : n >= this.tstjTop - 2 ? this.locations = "tstj" : this.locations = "ssfw"
              }
              if (4 == this.detailObj.type) {
                var e = t.detail.scrollTop + this.navH + this.navBarH;
                e >= this.jtznTop - 2 ? this.locations = "jtzn" : e >= this.ssfwTop - 2 ? this.locations = "ssfw" : this.locations = "mdxx"
              }
            },
            priviewImg: function(t) {
              var i = t.src;
              uni.previewImage({
                current: i,
                urls: [i]
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
image{background-size:100% 100%}.u-wrap{background-color:#fff;height:100vh;line-height:1}.tab-box{padding:32rpx 0rpx 0rpx}.tab-box .title-box,.tab-box{display:-webkit-flex;display:flex;justify-content:center}.tab-box .title-box{align-items:center;height:122rpx;width:246rpx}.tab-box .title-box .left{position:relative;width:100%}.tab-box .title-box .left .name{color:#656565;font-size:28rpx;left:0;position:relative;text-align:center;width:100%;z-index:1}.tab-box .title-box .left .name.active{color:#000;font-size:32rpx;font-weight:700}.tab-box .title-box .left .line{background:linear-gradient(52deg,#fc4a9e,#ff5411);border-radius:8rpx;bottom:-10rpx;height:10rpx;left:50%;position:absolute;transform:translateX(-50%);width:80rpx;z-index:0}.scroll-box{height:78%}.scroll-box .bg{padding:0 40rpx 20rpx}.scroll-box .tq-box{align-items:center;display:-webkit-flex;display:flex;height:120rpx;justify-content:space-around;margin-bottom:32rpx}.scroll-box .tq-box .item.active>.t{margin-bottom:20rpx}.scroll-box .tq-box .item.active>.b,.scroll-box .tq-box .item.active>.t view{color:#333;font-weight:700}.scroll-box .tq-box .item>.t{align-items:center;display:-webkit-flex;display:flex;justify-content:center;margin-bottom:14rpx}.scroll-box .tq-box .item>.t view{color:rgba(0,0,0,.5);font-size:28rpx}.scroll-box .tq-box .item>.t image{height:48rpx;width:48rpx}.scroll-box .tq-box .item>.b{color:rgba(0,0,0,.5);font-size:28rpx}.scroll-box .row{background:#fff;border-radius:12rpx;margin-bottom:60rpx}.scroll-box .row .title-box{color:#333;font-size:30rpx;font-weight:700;line-height:42rpx;padding-bottom:28rpx}.scroll-box .row.row1{box-shadow:0 8rpx 32rpx 0 rgba(0,0,0,.11);padding:30rpx 30rpx 10rpx}.scroll-box .row.row1 .text-box{color:rgba(0,0,0,.5)}.scroll-box .row.row2{line-height:40rpx}.scroll-box .row.row2 .tr{border-top:1rpx solid #e4e4e4;display:-webkit-flex;display:flex}.scroll-box .row.row2 .tr.first{background:#fffaf8;border-top:none}.scroll-box .row.row2 .tr.first .td{font-weight:700}.scroll-box .row.row2 .tr .td{border-right:1rpx solid #e4e4e4;border-top:none;color:#656565;line-height:42rpx;padding:16rpx 10rpx;text-align:center;width:160rpx}.scroll-box .row.row2 .tr .td:last-child{border-right:none}.scroll-box .row.row2 .tr .td:nth-child(2){width:352rpx}.scroll-box .row.row2 .open-time-info{align-items:center;color:#888;display:-webkit-flex;display:flex;font-size:24rpx;line-height:40rpx;margin-top:20rpx}.scroll-box .row.row2 .open-time-info image{height:24rpx;margin-right:10rpx;width:24rpx}.scroll-box .row.row3 .table{border:1rpx solid #e4e4e4;border-bottom:none}.scroll-box .row.row3 .table:last-child{border-bottom:1rpx solid #e4e4e4}.scroll-box .row.row3 .tr{display:-webkit-flex;display:flex}.scroll-box .row.row3 .tr.first{background:#fffaf8;border-bottom:1rpx solid #e4e4e4}.scroll-box .row.row3 .tr.first .td{font-weight:600}.scroll-box .row.row3 .tr .td{border-right:1rpx solid #e4e4e4;border-top:none;color:#656565;flex:1;line-height:42rpx;padding:16rpx 25rpx;text-align:left}.scroll-box .row.row3 .tr .td:last-child{border-right:none}.scroll-box .row.row3 .tr .td text{color:#656565;display:block}.scroll-box .row.row3 .icon-box .item{display:inline-block;margin-bottom:30rpx;margin-right:3rpx;width:165rpx}.scroll-box .row.row3 .icon-box .item:nth-child(4n){margin-right:0}.scroll-box .row.row3 .icon-box .item image{display:block;height:80rpx;margin:0 auto;width:80rpx}.scroll-box .row.row3 .icon-box .item .name{color:#858585;font-size:26rpx;line-height:40rpx;text-align:center}.scroll-box .row.row4 .item-list .item{display:-webkit-flex;display:flex;margin-bottom:32rpx}.scroll-box .row.row4 .item-list .item:last-child{margin-bottom:0}.scroll-box .row.row4 .item-list .item>.l{height:40rpx;margin-right:18rpx;width:40rpx}.scroll-box .row.row4 .item-list .item>.l image{height:100%;width:100%}.scroll-box .row.row4 .item-list .item>.r{flex:1;padding-top:6rpx}.scroll-box .row.row4 .item-list .item>.r>.t{color:#656565;font-size:28rpx;font-weight:700;margin-bottom:10rpx}.scroll-box .row.row4 .item-list .item>.r>.b{color:#777474;font-size:26rpx;line-height:40rpx;word-break:break-all}.scroll-box .row.row5{margin-bottom:0}.scroll-box .row.row5 .item-list .item{display:-webkit-flex;display:flex;margin-bottom:38rpx}.scroll-box .row.row5 .item-list .item:last-child{margin-bottom:0}.scroll-box .row.row5 .item-list .item>.l{height:40rpx;margin-right:18rpx;width:40rpx}.scroll-box .row.row5 .item-list .item>.l image{height:100%;width:100%}.scroll-box .row.row5 .item-list .item>.r{flex:1;line-height:42rpx;word-break:break-all}.scroll-box .row.row5 .item-list .item>.r>.t{color:#656565;font-size:28rpx;font-weight:700;margin-bottom:10rpx}.scroll-box .row.row5 .item-list .item>.r>.b.between .weibo-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between}.scroll-box .row.row5 .item-list .item>.r>.b.between .copy{color:#ff5411;font-size:28rpx}.scroll-box .row.row5 .item-list .item>.r>.b .weibo-box{align-items:center;display:-webkit-flex;display:flex}.scroll-box .row.row5 .item-list .item>.r>.b .weibo-box .weibo{color:#777474;font-size:26rpx;margin-right:20rpx}.scroll-box .row.row5 .item-list .item>.r>.b .weibo-box image{height:32rpx;width:32rpx}.scroll-box .row.row5 .item-list .item>.r>.b .phone-box{display:inline-block;width:50%}.scroll-box .row.row5 .item-list .item>.r>.b .phone-box:nth-child(2n){margin-right:0}.scroll-box .row.row5 .item-list .item>.r>.b .phone-box>.l{color:#777474;font-size:26rpx;width:80%}.scroll-box .row.row5 .item-list .item>.r>.b .phone-box>.r{align-items:center;display:-webkit-flex;display:flex}.scroll-box .row.row5 .item-list .item>.r>.b .phone-box>.r view{color:#333;font-size:26rpx;margin-right:20rpx}.scroll-box .row.row5 .item-list .item>.r>.b .phone-box>.r image{height:35rpx;width:35rpx}.scroll-box .row.row5 .item-list .item>.r>.b .wx-box>.t{color:#777474;font-size:26rpx}.scroll-box .row.row5 .item-list .item>.r>.b .wx-box>.b{display:-webkit-flex;display:flex;justify-content:space-between}.scroll-box .row.row5 .item-list .item>.r>.b .wx-box>.b>.m{color:#777474;font-size:26rpx;width:550rpx}.scroll-box .row.row5 .item-list .item>.r>.b .wx-box>.b>.r{color:#ff5411;font-size:28rpx}
</style>
