<template>
<view class="box u-skeleton">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <scroll-view class="" :scrollIntoView="scrollIntoView" :scrollY="true" style="height:100vh;">
        <image class="" mode="aspectFill" :src="shareImage" style="width:100%;height:700rpx;"></image>
        <view class="count-box-warp">
            <view class="box_title">{{dataInfos.lineName}}</view>
            <view class="line_bj" style="background:linear-gradient(180deg,#B1630A 0%, rgba(245, 245, 245, 1) 100%);">
                <view class="loction u-skeleton-fillet" @click="goTrip()">
                    <map class=" vue-ref" ref="map" id="map" :markers="markers" :polyline="polyline" style="width:100%;height:100%;" :subkey="subkey"></map>
                    <view class="loading" v-if="mapLoading">
                        <view class="img_box">
                            <image class="loading_img" src="/static/captured/79cac93e03941197.gif"></image>
                        </view>
                    </view>
                </view>
                <view class="loction_info u-skeleton-fillet" v-if="$root.g0">
                    <view class="info_item" :key="index" v-for="(item, index) in $root.l0">
                        <view class="top _p">{{item.desc}}</view>
                        <view class="bottom _p">{{item.content}}</view>
                        <label class="lines _span" v-if="index!=item.g1-1"></label>
                    </view>
                </view>
            </view>
            <view class="line_model">
                <view class="model_title">
                    <view class="_p">线路概览</view>
                    <label class="_span" style="background:linear-gradient(90deg, #F1A16F 0%, rgba(255,255,255,0) 100%);"></label>
                </view>
                <view class="overview">
                    <view class="overview_item" :key="index" v-for="(item, index) in $root.l2">
                        <view class="title">
                            <view class="day">{{'0'+item.day}}</view>
                            <view class="dayShow"></view>
                        </view>
                        <view class="content" v-if="item.lineJourneyDetailList">
                            <view class="item _p">
                                <label class="adsName lines _span" style="background:#fff;" :key="num" v-for="(ads, num) in item.l1">{{ ads.destinationName }}<label class="adsName arrow _span" v-if="num!=ads.g2-1">→</label>
                                </label>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="line_model" id="xcmx" style="padding-bottom:50rpx;">
                <view class="model_title">
                    <view class="_p">行程明细</view>
                    <label class="_span" :style="'background:'+'linear-gradient(90deg, '+buttonColour+' 0%, rgba(255,255,255,0) 100%)'+';'"></label>
                </view>
                <view class="detail">
                    <scroll-view class="lable_content" id="lable_content" scrollWithAnimation="true" :scrollX="true" :throttle="false">
                        <view :class="['lable','',activeDays==index?'active':'']" :style="'background:'+(activeDays==index?'#F1A16F':'rgba(0, 0, 0, 0.05)')+';'" :key="index" v-for="(item, index) in $root.l3">{{item.m0+''}}</view>
                    </scroll-view>
                    <view class="detail_info">
                        <view class="detail_item" :id="'detailRow'+index" :key="index" v-for="(item, index) in $root.l7">
                            <view class="detail_title">
                                <view class="img_title">
                                    <image class="" src="/static/captured/17359ad369774476.png"></image>
                                    <view class="title_bj">
                                        <view class="text1 _p">{{'0'+item.day}}</view>
                                        <view class="text2 _p">DAY</view>
                                    </view>
                                </view>
                                <view class="title_name">
                                    <view class="name1 _p">{{item.city}}</view>
                                </view>
                            </view>
                            <view class="time_line">
                                <view class="mask"></view>
                                <view class="time_item setOf" :key="num" v-for="(time, num) in item.l6">
                                    <image class="markIcon" src="/static/captured/0c997113edfa6a7c.png" v-if="time.journeyDestinationType==1"></image>
                                    <image class="markIcon" src="https://eshopfile.zhiyousx.com/169209038492172696.png" v-if="time.journeyDestinationType==3"></image>
                                    <image class="markIcon" src="/static/captured/748b5d9b0def299c.png" v-if="time.journeyDestinationType==2"></image>
                                    <image class="markIcon" src="/static/captured/e7bd639e2a122985.png" v-if="time.journeyDestinationType==4"></image>
                                    <view class="time_title" style="width:470rpx;">
                                        <view class="name _p">{{time.journeyDetailTitle}}</view>
                                        <label class="times _span" v-if="time.journeyDetailTime">{{time.journeyDetailTime}}</label>
                                    </view>
                                    <view class="spot_card" style="background:#F5F5F5FF;" v-if="time.journeyDestinationType<6">
                                        <view class="card_top">
                                            <image class="head_img" mode="aspectFill" :src="time.images" v-if="time.images"></image>
                                            <view class="card_info" :style="'width:'+(time.images?'392rpx':'100%')+';'">
                                                <view class="card_title _p">{{time.destinationName}}</view>
                                                <view class="" v-if="time.ticketName">
                                                    <view class="ticketName singleLineText">{{time.ticketName}}</view>
                                                </view>
                                                <view class="card_ticket" v-if="time.price">
                                                    <view class="ding">订</view>
                                                    <view class="price">{{time.price==0?'免费':'￥'+time.price}}</view>
                                                </view>
                                            </view>
                                        </view>
                                        <view class="card_imgList" v-if="cont.contentModuleName!=null" :key="contNum" v-for="(cont, contNum) in time.l5">
                                            <view class="_p">{{cont.contentModuleName}}</view>
                                            <view class="img_list">
                                                <image class="img_li" mode="aspectFill" :src="imgs.coverImage" v-if="imgNum<(imgs.g3==6?6:5)" :key="imgNum" v-for="(imgs, imgNum) in cont.l4"></image>
                                            </view>
                                            <view class="img_more" v-if="cont.g4>6">{{ cont.m1 }}</view>
                                        </view>
                                    </view>
                                    <view class="spot_remark" v-if="time.desc">
                                        <u-parse class="" :html="time.desc" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
                                    </view>
                                    <view class="spot_remark spot_tips" v-if="time.tips">
                                        <view class="tips">
                                            <image class="" src="https://eshopfile.zhiyousx.com/169266846673784501.png"></image>
                                        </view>
                                        <text class="">{{time.tips}}</text>
                                    </view>
                                </view>
                                <view class="time_item1 setOf">
                                    <image class="markIcon" src="/static/captured/e7bd639e2a122985.png"></image>
                                    <view class="time_title" style="width:100%;">
                                        <view class="name _p">行程结束，希望您能收获愉快的旅程。</view>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="" style="width:100%;height:130rpx;"></view>
                </view>
            </view>
        </view>
    </scroll-view>
    <view class="iconBox">
        <button class="submit_icon share" openType="share">
            <image class="" src="/static/captured/638acbf921e21368.png"></image>
            <view class="text">分享</view>
        </button>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          data: function() {
            return {
              dataInfos: {},
              lineId: "",
              isPhotoAll: !1,
              isbanner: !1,
              bannerList: [],
              paddingTop: 495,
              scrollIntoView: "",
              content: "",
              startY: 0,
              lastY: 1660,
              moveType: 1,
              istouchEnd: !0,
              loading: !0,
              issuofang: !0,
              subkey: "U4JBZ-K7XW4-GH2UA-KVPJK-OLCYV-7WB3D",
              parseStyle: {
                p: "word-break: break-all;line-height:40rpx;color:rgba(0, 0, 0, 0.6);font-size:26rpx",
                img: "border-radius: 20rpx;margin-top: 10rpx;"
              },
              map: {
                longitude: "108.939621",
                latitude: "34.343147"
              },
              polyline: [{
                color: "#0000AA",
                width: 4,
                points: []
              }],
              markers: [],
              controls: [],
              activeDays: 0,
              overviewList: [],
              scrollTop: 0,
              xcmxTop: 500,
              isFlxeTitle: !1,
              buttonColour: "",
              pageColour: "",
              detailRowList: [],
              navShow: !1,
              lineInfoTop: 0,
              searchHeight: 0,
              scrollFlag: !0,
              mapLoading: !1,
              scrollToLeft: 50,
              customerShow: !1,
              safeAreaBottom: 0,
              firstPage: !1,
              isGroup: !1,
              shareImage: "https://eshopfile.zhiyousx.com/173461084335016687.png",
              detailRowTopList: [],
              scrollToLeftList: []
            }
          },
          onLoad: function(t) {
            this.lineId = t.lineId, this.getLineDetail()
          },
          onShareAppMessage: function(t) {
            var e = "/union/pages/ai/strategyGuide?lineId=" + this.dataInfos.lineId;
            return {
              title: this.shareDesc,
              imageUrl: this.shareImage,
              path: this.$util.setShareUrl(e)
            }
          },
          onShareTimeline: function(t) {
            var e = "lineId=" + this.dataInfos.lineId;
            return {
              title: this.shareDesc,
              imageUrl: this.shareImage,
              query: this.$util.setShareTimeline(e)
            }
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, this.isPhotoAll || this.scrollCount()
          },
          methods: {
            getLineDetail: function() {
              var e = this;
              uni.showLoading({
                title: "加载中",
                mask: !0
              }), this.$uniApi.dataRequestYesLoading("GET", "ai/aiEscort/exclusive/line?lineId=" + this.lineId).then((function(n) {
                if (1 === n.code) {
                  var i = [],
                    o = [];
                  e.dataInfos = n.data || {}, e.dataInfos.lineJourneyList = e.dataInfos.lineJourneyList ? e.dataInfos.lineJourneyList : [];
                  var a = [];
                  e.shareDesc = n.data.shareDesc || "", e.dataInfos.lineJourneyList.forEach((function(t) {
                    t.lineJourneyDetailList.forEach((function(t, e) {
                      t.longitude && t.latitude && (o.push({
                        longitude: t.longitude,
                        latitude: t.latitude
                      }), a.push({
                        title: t.destinationName,
                        longitude: t.longitude,
                        latitude: t.latitude,
                        callout: {
                          display: "ALWAYS",
                          anchorY: 0,
                          anchorX: 0,
                          content: t.destinationName,
                          color: "#333",
                          bgColor: "#fff",
                          textAlign: "center",
                          borderRadius: 5,
                          padding: 5
                        }
                      }), i.push({
                        latitude: t.latitude,
                        longitude: t.longitude
                      }))
                    }))
                  })), console.log(i, "listlistlistlist"), e.map.longitude = a[0].longitude, e.map.latitude = a[0].latitude, e._mapContext = t.createMapContext("map", e), setTimeout((function() {
                    e.polyline[0].points = i, e.polyline[0].color = "#F1A16F", e._mapContext.includePoints({
                      padding: ["70", "70", "70", "70"],
                      points: o
                    }), e.markers = JSON.parse(JSON.stringify(a)), e.mapLoading = !1, uni.hideLoading()
                  }), 500)
                } else uni.hideLoading()
              })).catch((function(e) {
                uni.hideLoading()
              }))
            },
            dayName: function(t) {
              return "第" + ["", "一", "二", "三", "四", "五", "六", "七"][t] + "天"
            },
            toDay: function(t) {
              this.activeDays = t, this.scrollIntoView = "detailRow" + t
            },
            getCustomer: function() {
              this.customerShow = !0
            },
            scrollCount: function() {
              if (!this.isPhotoAll)
                if (this.scrollTop < -100 && (this.lastY = 1660, this.moveType = 2, this.isPhotoAll = !0), this.scrollTop >= this.xcmxTop - 25) {
                  this.isFlxeTitle = !0;
                  var t = this.activeDays;
                  t + 1 < this.detailRowList.length && this.scrollTop >= this.detailRowList[t] && (this.activeDays = t + 1), t - 1 >= 0 && this.scrollTop < this.detailRowList[t - 1] && (this.activeDays = t - 1)
                } else this.isFlxeTitle = !1
            },
            goTrip: function(t, e) {},
            spotRelationNum: function(t) {
              return t.length - 5 + "+"
            },
            goSpot: function(t, e) {
              t && (e <= 4 ? this.$navigateTo({
                url: "/pages/spotDetail/spotDetail?spotId=" + t
              }) : this.$navigateTo({
                url: "/pages/spotThirdDetail/spotThirdDetail?spotId=" + t
              }))
            },
            pageScrollTo: function() {
              this.content = "", setTimeout((function() {
                uni.pageScrollTo({
                  scrollTop: 999999,
                  duration: 0
                })
              }), 200)
            },
            jumpSpotContentList: function(e, n) {
              n.contentList.forEach((function(t) {
                t.title = t.contentModuleName, t.id = t.contentId
              })), uni.setStorageSync("spotContentList", {
                name: e,
                contentList: n.contentList
              }), this.$navigateTo({
                url: "/pages/spotContentList/spotContentList?scenicName=".concat(e)
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.box .count-box-warp{position:relative;top:-200rpx}.box .box_title{background:linear-gradient(180deg,rgba(16,122,100,0),#dbbd9a 50%,#b1630a);color:#333;font-size:40rpx;font-weight:700;margin-top:20rpx;padding:62rpx 30rpx 0;position:relative}.box .line_bj{padding:20rpx 30rpx 0;position:relative}.box .line_bj .down{display:-webkit-flex;display:flex;justify-content:center;width:100%}.box .line_bj .down .down_img{box-shadow:0rpx 4rpx 4rpx 0rpx rgba(0,0,0,.25);height:19rpx;opacity:.6;width:93rpx}.box .line_bj .line_title{display:-webkit-flex;display:flex;margin-top:-30rpx}.box .line_bj .line_title .p1{background:#f5d597;border-radius:4rpx;color:rgba(0,0,0,.8);font-size:24rpx;font-weight:700;height:40rpx;line-height:40rpx;text-align:center;transform:skew(-15deg);width:111rpx}.box .line_bj .line_title .p2{height:40rpx;padding-top:6rpx;transform:skew(-15deg);width:198rpx}.box .line_bj .line_title .p2 ._p{background:rgba(0,0,0,.5);border-radius:4rpx;color:hsla(0,0%,100%,.7);font-size:24rpx;height:34rpx;line-height:36rpx;text-align:center;width:100%}.box .line_bj .loction{background:#fff;border-radius:20rpx;height:580rpx;margin-top:30rpx;overflow:hidden;position:relative;transform:translateY(0);width:100%}.box .line_bj .loction .loading{bottom:0;left:0;position:absolute;right:0;top:0}.box .line_bj .loction .loading .img_box{align-items:center;background:#fff;display:-webkit-flex;display:flex;height:100%;justify-content:center;width:100%}.box .line_bj .loction .loading .img_box .loading_img{height:200rpx;width:200rpx}.box .line_bj .loction .extend{align-items:center;background:#fff;border-radius:50%;bottom:20rpx;box-shadow:0rpx 10rpx 20rpx 0rpx rgba(0,0,0,.1);display:-webkit-flex;display:flex;height:50rpx;justify-content:center;position:absolute;right:20rpx;width:50rpx}.box .line_bj .loction .extend .extend_img{height:30rpx;width:30rpx}.box .line_bj .loction .customCallout{display:inline-block;position:relative}.box .line_bj .loction .customCallout .day{background:#42c7ab;border-radius:10rpx;color:#fff;font-size:24rpx;font-weight:700;height:46rpx;line-height:38rpx;text-align:center;width:89rpx}.box .line_bj .loction .customCallout .spot_info{background:#fff;border-radius:10rpx;height:46rpx;line-height:46rpx;margin-bottom:10rpx;margin-top:-10rpx;padding:0 16rpx}.box .line_bj .loction .customCallout .spot_info .title{color:rgba(0,0,0,.8);font-size:24rpx;line-height:46rpx;width:auto}.box .line_bj .loction .customCallout .jx{bottom:10rpx;left:50%;position:absolute}.box .line_bj .loction .customCallout .jx .jiantou{background:#fff;border:1rpx solid rgba(0,0,0,.2);border-right:none;border-top:none;height:10rpx;transform:rotate(-45deg);width:10rpx}.box .line_bj .line_name{color:#fff;font-size:40rpx;font-weight:700;margin-top:20rpx}.box .line_bj .line_lable{margin-top:10rpx}.box .line_bj .line_lable .lable_item{align-items:center;border:1rpx solid #fff;border-radius:20rpx;color:#fff;display:-webkit-inline-flex;display:inline-flex;font-size:24rpx;height:34rpx;margin-right:10rpx;margin-top:10rpx;padding:0 20rpx;text-align:center}.box .line_bj .line_top_img{margin-top:30rpx;width:100%}.box .line_bj .line_top_img>image{border-radius:20rpx;width:100%}.box .loction_info{background:hsla(0,0%,100%,.7);border-radius:20rpx;display:-webkit-flex;display:flex;height:110rpx;margin-top:10rpx;overflow-x:auto;white-space:nowrap}.box .loction_info .info_item{display:inline-table;height:100%;min-width:230rpx;padding:15rpx 20rpx 0;position:relative;text-align:center}.box .loction_info .info_item .top{color:rgba(0,0,0,.8);font-size:30rpx;margin-bottom:4rpx}.box .loction_info .info_item .bottom{color:rgba(0,0,0,.5);font-size:24rpx}.box .loction_info .info_item .lines{border:1rpx solid;border-image:linear-gradient(180deg,transparent,rgba(0,0,0,.2),transparent)1 1;height:54.5rpx;position:absolute;right:0;top:28rpx;width:0rpx}.line_model{background:#f5f5f5;padding:50rpx 30rpx 0}.line_model .model_title ._p{color:rgba(0,0,0,.7);font-size:36rpx;font-weight:700}.line_model .model_title ._span{border-radius:40rpx 40rpx 40rpx 40rpx;display:block;height:20rpx;margin-top:-18rpx;width:144rpx}.line_model .overview{background:#fff;border-radius:20rpx;margin-top:35rpx;padding:21rpx 20rpx 40rpx}.line_model .overview .overview_item{border-bottom:1rpx dashed rgba(0,0,0,.1);margin-top:20rpx;padding-bottom:20rpx}.line_model .overview .overview_item .title{display:-webkit-flex;display:flex;position:relative}.line_model .overview .overview_item .title .day{color:rgba(0,0,0,.7);font-size:40rpx;font-weight:700;height:50rpx;line-height:38rpx;width:120rpx;z-index:10}.line_model .overview .overview_item .title .address{color:rgba(0,0,0,.7);font-size:32rpx;height:50rpx;line-height:50rpx;padding-left:20rpx;text-align:center}.line_model .overview .overview_item .title .dayShow{background:url('data:image/png;base64,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');background-size:100% 100%;height:32rpx;position:absolute;top:26rpx;width:79rpx;z-index:1}.line_model .overview .overview_item .content{display:-webkit-flex;display:flex;flex-wrap:wrap;margin-top:20rpx}.line_model .overview .overview_item .content .item{margin-bottom:5rpx;margin-right:10rpx;text-align:justify}.line_model .overview .overview_item .content .item .adsName{margin-bottom:10rpx}.line_model .overview .overview_item .content .item .name{color:rgba(0,0,0,.7);font-size:28rpx}.line_model .overview .overview_item .content .item .arrow{color:rgba(0,0,0,.7);font-size:30rpx;margin:0 10rpx;transform:scaleX(1.5)}.line_model .overview .overview_item .content .item .important{color:rgba(0,0,0,.8)}.line_model .overview .overview_item .content .item .lable{align-items:center;border-radius:20rpx 20rpx 6rpx 20rpx;color:#fff;display:-webkit-inline-flex;display:inline-flex;font-size:26rpx;height:36rpx;padding:0 10rpx;text-align:center}.detail .lable_content{display:-webkit-flex;display:flex;margin-top:30rpx;overflow-x:auto;white-space:nowrap}.detail .lable_content .lable{align-items:center;background:rgba(0,0,0,.05);border-radius:30rpx;color:rgba(0,0,0,.5);display:-webkit-inline-flex;display:inline-flex;height:56rpx;margin-right:20rpx;padding:0 20rpx;text-align:center}.detail .lable_content .active{color:#fff}.detail .detail_info{background:#fff;border-radius:0rpx 60rpx 20rpx 20rpx;margin-top:20rpx}.detail .detail_info .detail_item .detail_title{background:#ededed;border-radius:0rpx 60rpx 60rpx 0rpx;display:-webkit-flex;display:flex;min-height:110rpx;width:100%}.detail .detail_info .detail_item .detail_title .img_title{align-items:center;background:#4c5150;background-size:100% 100%;border-radius:0rpx 20rpx 0rpx 0rpx;display:-webkit-flex;display:flex;justify-content:center;margin-left:-30rpx;position:relative;text-align:center;width:110rpx}.detail .detail_info .detail_item .detail_title .img_title image{height:80%;left:22rpx;position:absolute;top:24%;width:86rpx}.detail .detail_info .detail_item .detail_title .img_title .title_bj .text1{color:#fff;font-size:40rpx;font-weight:700;margin-bottom:6rpx}.detail .detail_info .detail_item .detail_title .img_title .title_bj .text2{color:hsla(0,0%,100%,.8);font-size:26rpx}.detail .detail_info .detail_item .detail_title .title_name{align-items:center;display:-webkit-flex;display:flex;padding-left:20rpx;width:605rpx}.detail .detail_info .detail_item .detail_title .title_name .name1{color:rgba(0,0,0,.9);font-size:32rpx;font-weight:700}.detail .detail_info .detail_item .detail_title .title_name .name2{color:rgba(0,0,0,.6);font-size:26rpx}.detail .detail_info .detail_item .time_line{margin-top:40rpx;padding-left:35rpx;position:relative}.detail .detail_info .detail_item .time_line .mask{background:#fff;height:14rpx;left:29rpx;position:absolute;top:-7rpx;width:14rpx;z-index:10}.detail .detail_info .detail_item .time_line .time_item{border-left:1rpx solid rgba(0,0,0,.2)}.detail .detail_info .detail_item .time_line .time_item,.detail .detail_info .detail_item .time_line .time_item1{padding-bottom:50rpx;padding-left:35rpx;position:relative}.detail .detail_info .detail_item .time_line .time_item .markIcon,.detail .detail_info .detail_item .time_line .time_item1 .markIcon{background:#fff;height:36rpx;left:-18rpx;position:absolute;top:4rpx;width:36rpx;z-index:20}.detail .detail_info .detail_item .time_line .time_item .line_view,.detail .detail_info .detail_item .time_line .time_item1 .line_view{align-items:center;background:url('https://eshopfile.zhiyousx.com/169209914527662936.png');background-size:100% 100%;display:-webkit-flex;display:flex;height:60rpx;justify-content:flex-end;padding-right:10rpx;position:absolute;right:26rpx;top:-12rpx;width:382rpx}.detail .detail_info .detail_item .time_line .time_item .line_view ._p,.detail .detail_info .detail_item .time_line .time_item1 .line_view ._p{color:rgba(0,0,0,.8);font-size:26rpx;margin-right:10rpx}.detail .detail_info .detail_item .time_line .time_item .line_view .goView,.detail .detail_info .detail_item .time_line .time_item1 .line_view .goView{height:30rpx;width:30rpx}.detail .detail_info .detail_item .time_line .time_item .line_view .goView image,.detail .detail_info .detail_item .time_line .time_item1 .line_view .goView image{height:100%;width:100%}.detail .detail_info .detail_item .time_line .time_item .time_title,.detail .detail_info .detail_item .time_line .time_item1 .time_title{align-items:center;display:-webkit-flex;display:flex;width:95%}.detail .detail_info .detail_item .time_line .time_item .time_title .name,.detail .detail_info .detail_item .time_line .time_item1 .time_title .name{color:rgba(0,0,0,.8);font-size:30rpx;font-weight:700;line-height:40rpx}.detail .detail_info .detail_item .time_line .time_item .time_title .walk,.detail .detail_info .detail_item .time_line .time_item1 .time_title .walk{color:rgba(0,0,0,.8);font-size:26rpx;font-weight:400}.detail .detail_info .detail_item .time_line .time_item .time_title .times,.detail .detail_info .detail_item .time_line .time_item1 .time_title .times{border-left:1rpx solid rgba(0,0,0,.3);color:rgba(0,0,0,.5);font-size:26rpx;line-height:30rpx;margin-left:30rpx;max-height:54rpx;min-height:27rpx;padding-left:12rpx}.detail .detail_info .detail_item .time_line .time_item .time_title .other,.detail .detail_info .detail_item .time_line .time_item1 .time_title .other{border-left:1rpx solid rgba(0,0,0,.8);color:rgba(0,0,0,.8);margin-left:15rpx}.detail .detail_info .detail_item .time_line .time_item .spot_card,.detail .detail_info .detail_item .time_line .time_item1 .spot_card{border-radius:20rpx 20rpx 20rpx 20rpx;margin-top:20rpx;padding:20rpx;width:600rpx}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_top,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_top{display:-webkit-flex;display:flex;position:relative}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_lab,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_top .card_lab{background:url('https://eshopfile.zhiyousx.com/169209823319911969.png');background-size:100% 100%;color:#f1dc8d;font-size:20rpx;height:64rpx;left:0rpx;padding-left:19rpx;padding-top:12rpx;position:absolute;top:-29rpx;width:64rpx}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .head_img,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_top .head_img{border-radius:10rpx;height:180rpx;width:180rpx}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_top .card_info{display:-webkit-flex;display:flex;flex-direction:column;justify-content:space-between;padding-left:20rpx;width:392rpx;z-index:10}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .card_title,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_top .card_info .card_title{color:rgba(0,0,0,.7);font-size:30rpx;font-weight:700}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .ranking,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_top .card_info .ranking{align-items:center;display:-webkit-flex;display:flex;margin-top:20rpx;position:relative}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .ranking .top,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_top .card_info .ranking .top{align-items:center;background:linear-gradient(180deg,#6b6457,#54524c);border-radius:25rpx;color:#e6cca2;display:-webkit-flex;display:flex;font-size:24rpx;height:34rpx;padding:0 10rpx;position:relative;z-index:3}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .ranking .text,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_top .card_info .ranking .text{background:#ffefd5;border-radius:4px 18px 18px 18px;height:36rpx;line-height:36rpx;padding:0 16rpx}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .ranking .text .name,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_top .card_info .ranking .text .name{color:#945430;font-size:22rpx;max-width:325rpx}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .card_describe,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_top .card_info .card_describe{color:rgba(0,0,0,.4);font-size:26rpx;margin-top:14rpx}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .card_ticket,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_top .card_info .card_ticket{align-items:center;display:-webkit-flex;display:flex;height:38rpx;line-height:38rpx;margin-top:14rpx}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .card_ticket .ding,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_top .card_info .card_ticket .ding{background:linear-gradient(180deg,#f99f1d,#fe581e);border-radius:10rpx;color:#fff;font-size:22rpx;height:32rpx;line-height:32rpx;margin-top:-5rpx;text-align:center;width:32rpx}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .card_ticket .price,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_top .card_info .card_ticket .price{color:rgba(0,0,0,.4);font-size:26rpx;margin-left:10rpx}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .card_ticket .ticketName,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_top .card_info .card_ticket .ticketName{color:rgba(0,0,0,.4);font-size:26rpx;margin-left:10rpx;width:230rpx}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .watermarkImage,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_top .card_info .watermarkImage{border-radius:0 20rpx 0 0;position:absolute;right:-20rpx;top:-20rpx;z-index:-1}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .watermarkImage image,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_top .card_info .watermarkImage image{height:100rpx;width:100rpx}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_imgList,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_imgList{align-items:center;background:rgba(0,0,0,.03);border-radius:10rpx;display:-webkit-flex;display:flex;margin-top:29rpx;padding:10rpx 0 10rpx 20rpx;width:560rpx}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_imgList ._p,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_imgList ._p{color:rgba(0,0,0,.7);font-size:26rpx;max-width:109rpx}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_imgList .img_list,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_imgList .img_list{display:-webkit-flex;display:flex;margin-left:20rpx}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_imgList .img_list .img_li,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_imgList .img_list .img_li{border-radius:10rpx;height:60rpx;margin-right:10rpx;width:60rpx}.detail .detail_info .detail_item .time_line .time_item .spot_card .card_imgList .img_more,.detail .detail_info .detail_item .time_line .time_item1 .spot_card .card_imgList .img_more{background:rgba(0,0,0,.05);border-radius:10rpx;color:rgba(0,0,0,.7);height:60rpx;line-height:60rpx;text-align:center;width:60rpx}.detail .detail_info .detail_item .time_line .time_item .spot_remark,.detail .detail_info .detail_item .time_line .time_item1 .spot_remark{margin-top:20rpx;padding:0 10rpx;text-align:justify;width:600rpx}.detail .detail_info .detail_item .time_line .time_item .spot_remark text,.detail .detail_info .detail_item .time_line .time_item1 .spot_remark text{color:rgba(0,0,0,.6);font-size:26rpx;text-align:justify}.detail .detail_info .detail_item .time_line .time_item .spot_tips,.detail .detail_info .detail_item .time_line .time_item1 .spot_tips{background:rgba(255,0,0,.05);border-radius:10rpx;display:-webkit-flex;display:flex;padding:20rpx}.detail .detail_info .detail_item .time_line .time_item .spot_tips .tips,.detail .detail_info .detail_item .time_line .time_item1 .spot_tips .tips{margin-right:15rpx}.detail .detail_info .detail_item .time_line .time_item .spot_tips .tips image,.detail .detail_info .detail_item .time_line .time_item1 .spot_tips .tips image{height:22rpx;width:22rpx}.detail .detail_info .detail_item .time_line .time_item .html_content,.detail .detail_info .detail_item .time_line .time_item1 .html_content{margin-top:20rpx;padding-right:20rpx}.detail .detail_info .detail_item .time_line .time_item .spot_introduction,.detail .detail_info .detail_item .time_line .time_item1 .spot_introduction{margin-top:20rpx}.detail .detail_info .detail_item .time_line .time_item .spot_introduction .introduction_title,.detail .detail_info .detail_item .time_line .time_item1 .spot_introduction .introduction_title{color:rgba(0,0,0,.7);font-size:30rpx;font-weight:700}.detail .detail_info .detail_item .time_line .time_item .spot_introduction .content-box,.detail .detail_info .detail_item .time_line .time_item1 .spot_introduction .content-box{background:rgba(0,0,0,.05);border-radius:20rpx;margin-top:30rpx;padding:20rpx 0 75rpx 20rpx;white-space:nowrap;width:581rpx}.detail .detail_info .detail_item .time_line .time_item .spot_introduction .content-box .hote_item,.detail .detail_info .detail_item .time_line .time_item1 .spot_introduction .content-box .hote_item{background:#fff;border-radius:20rpx;box-shadow:0rpx 4rpx 20rpx 0rpx rgba(0,0,0,.05);display:inline-block;height:100%;margin-right:20rpx;padding:10rpx;vertical-align:top;white-space:break-spaces;width:231rpx}.detail .detail_info .detail_item .time_line .time_item .spot_introduction .content-box .hote_item .hote_img,.detail .detail_info .detail_item .time_line .time_item1 .spot_introduction .content-box .hote_item .hote_img{border-radius:10rpx;height:210rpx;width:210rpx}.detail .detail_info .detail_item .time_line .time_item .spot_introduction .content-box .hote_item .name,.detail .detail_info .detail_item .time_line .time_item1 .spot_introduction .content-box .hote_item .name{color:rgba(0,0,0,.7);font-size:28rpx;margin-top:10rpx;overflow:auto}.detail .detail_info .detail_item .time_line .time_item .spot_introduction .content-box .hote_item .text,.detail .detail_info .detail_item .time_line .time_item1 .spot_introduction .content-box .hote_item .text{color:rgba(0,0,0,.4);font-size:26rpx;margin-top:10rpx}.detail .detail_info .detail_item .time_line .time_item .spot_introduction .allHote,.detail .detail_info .detail_item .time_line .time_item1 .spot_introduction .allHote{align-items:center;background:hsla(0,0%,100%,.5);border-radius:20rpx;display:-webkit-flex;display:flex;height:54rpx;justify-content:space-between;margin-top:-56rpx;padding:0 20rpx;width:600rpx}.detail .detail_info .detail_item .time_line .time_item .spot_introduction .allHote ._p,.detail .detail_info .detail_item .time_line .time_item1 .spot_introduction .allHote ._p{color:rgba(0,0,0,.7);font-size:26rpx}.detail .detail_info .detail_item .time_line .time_item .spot_introduction .allHote .goView,.detail .detail_info .detail_item .time_line .time_item1 .spot_introduction .allHote .goView{height:30rpx;width:30rpx}.detail .detail_info .detail_item .time_line .time_item .spot_introduction .allHote .goView image,.detail .detail_info .detail_item .time_line .time_item1 .spot_introduction .allHote .goView image{height:100%;width:100%}.detail .detail_info .detail_item .time_line .close{border:none;padding-bottom:30rpx}.detail .detail_info .detail_item .time_line .close .markIcon{top:0}.detail .detail_info .detail_item .time_line .close .time_title .name{line-height:35rpx}.iconBox{background-color:#fff;bottom:0;padding:10rpx 0 env(safe-area-inset-bottom);position:fixed;width:100%;z-index:100}.iconBox .submit_icon image{height:48rpx;width:48rpx}.iconBox .submit_icon .text{color:#4e5969;font-size:20rpx;margin-top:-5rpx;text-align:center}.iconBox .share{background:#fff;display:block;height:74rpx;line-height:30rpx;padding:0}
</style>
