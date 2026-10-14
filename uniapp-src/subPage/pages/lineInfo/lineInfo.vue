<template>
<view class="box u-skeleton">
  <uni-navbar class="" type="transparentFixed" v-if="!isPhotoAll">
  </uni-navbar>
  <album class=" vue-ref" ref="album" :isPhotoAll="isPhotoAll" :lineId="lineId" :style="'position:'+(isPhotoAll?'relative':'fixed')+';'+'top:'+0+';'" :videoUrl="detailObj.video" v-if="lineId&&isPhotoAll" @topicMap="topicMap()" @hancleCloseAlbum="hancleCloseAlbum()"></album>
  <image class="line-hero" mode="aspectFill" :src="detailObj.imageList[0].url" v-if="lineId&&!isPhotoAll&&detailObj.imageList&&detailObj.imageList[0]"></image>
  <view class="line_info" :style="'top:'+(isPhotoAll?lastY+'rpx':0)+';'+'position:'+(!isPhotoAll?'relative':'fixed')+';'+'padding-top:'+paddingTop+'rpx'+';'+'padding-bottom:'+(detailObj.groupOrderFlag&&detailObj.showOwnDue||isGroup?'100rpx':0)+';'" @touchmove="scroll($event)" @touchstart="touchstart($event)">
    <view class="albumEnter allcenter" :style="'height:'+paddingTop+'rpx'+';'" v-if="!isPhotoAll" @click="down($event)">
      <image class="" mode="aspectFill" src="https://eshopfile.zhiyousx.com/2025111017313127761.png" v-if="detailObj.video"></image>
    </view>
    <view class="line_bj" :style="'background:'+'linear-gradient(180deg,rgba(16,122,100,0) 0%,'+pageColour+' 50%, '+pageColour+' 100%)'+';'">
      <view class="down" @click="down($event)">
        <image class="down_img" src="/static/captured/dc58423b6b10c8a3.png" :style="'opacity:'+0.6-scrollTop*0.05+';'"></image>
      </view>
      <view class="line_title" id="lineInfo" v-if="false">
        <view class="p1">当季新品</view>
        <view class="p2">
          <view class="_p">精品周边游系列</view>
        </view>
      </view>
      <view class="line_name">{{detailObj.lineName}}</view>
      <view class="line_lable" v-if="$root.g0">
        <label class="lable_item _span" :key="index" v-for="(item, index) in detailObj.themeNameList">{{item}}</label>
      </view>
    </view>
    <view class="line_bj" :style="'background:'+'linear-gradient(180deg,'+pageColour+' 0%,'+' rgba(245, 245, 245, 1) 100%)'+';'">
      <view class="line_top_img" v-if="detailObj.featureUrl" @click="priviewImg(detailObj.featureUrl)">
        <image class="" mode="widthFix" :showMenuByLongpress="true" :src="detailObj.featureUrl">
        </image>
      </view>
      <view class="loction u-skeleton-fillet" v-if="detailObj.mapShowFlag" @click="goTrip()">
        <view class="route-map-fallback">
          <view class="route-map-heading">线路地图</view>
          <view class="route-map-hint">按行程顺序查看路线，点击进入行程明细</view>
          <scroll-view class="route-map-stops" :scrollY="true">
            <view class="route-map-stop" :key="index" v-for="(item, index) in markers">
              <view class="route-map-day">{{'D'+item.day}}</view>
              <view class="route-map-name">{{item.title}}</view>
            </view>
          </scroll-view>
        </view>
        <view class="loading">
          <view class="img_box" v-if="mapLoading">
            <image class="loading_img" src="/static/captured/79cac93e03941197.gif">
            </image>
          </view>
        </view>
        <view class="extend">
          <image class="extend_img" src="/static/captured/5cef9cf35ca66ae0.png"></image>
        </view>
      </view>
      <view class="loction_info u-skeleton-fillet" v-if="detailObj.lineGameCapitaList&&detailObj.lineGameCapitaList[0]">
        <view class="info_item" v-for="(item, index) in detailObj.lineGameCapitaList">
          <view class="top _p">{{item.content}}</view>
          <view class="bottom _p">{{item.desc}}</view>
          <label class="lines _span"></label>
        </view>
      </view>
    </view>
    <view class="line_model" v-if="isbanner">
      <view class="model_title">
        <view class="_p">线路特色</view>
        <label class="_span" :style="'background:'+'linear-gradient(90deg, '+buttonColour+' 0%, rgba(255,255,255,0) 100%)'+';'"></label>
      </view>
      <view class="teachLoop u-skeleton-fillet">
        <kevy-swiper :autoPlay="true" class="" descAniType="slideFromRight" :height="470" :list="bannerList" :showNum="3" v-if="$root.g1" @click="achieve()"></kevy-swiper>
        <view class="teachLoop_box" v-else>
          <image class="teachLoop_img" :src="bannerList[0].featureUrl" @click="bannerTopClick(bannerList[0])"></image>
        </view>
      </view>
    </view>
    <view class="line_model" v-if="overviewList[0]&&detailObj.overviewShowFlag">
      <view class="model_title">
        <view class="_p">线路概览</view>
        <label class="_span" :style="'background:'+'linear-gradient(90deg, '+buttonColour+' 0%, rgba(255,255,255,0) 100%)'+';'"></label>
      </view>
      <view class="overviewDesc" v-if="detailObj.overviewDesc">
        <u-parse class="" :html="detailObj.overviewDesc" :tagStyle="parseStyle"></u-parse>
      </view>
      <view class="overview">
        <view class="overview_item" :key="index" v-for="(item, index) in overviewList">
          <view class="title">
            <view class="day" v-if="!item.userDefinedIcon">{{'0'+item.index}}</view>
            <view class="address">{{item.name}}</view>
            <view class="dayShow" v-if="!item.userDefinedIcon"></view>
          </view>
          <view class="content" v-if="item.list[0]">
            <view class="item _p">
              <label :class="['adsName','_span','',ads.type==2?'lable':'',ads.type==0?'name':'',ads.type==1?'arrow':'',ads.important?'important':'']" :style="'background:'+(ads.type==2?buttonColour:'#fff')+';'" v-if="ads.name&&ads.name!=null" :key="num" v-for="(ads, num) in item.list">{{ads.name}}</label>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="line_model" id="xcmx" style="padding-bottom:50rpx;">
      <view class="model_title" v-if="$root.g2">
        <view class="_p">行程明细</view>
        <label class="_span" :style="'background:'+'linear-gradient(90deg, '+buttonColour+' 0%, rgba(255,255,255,0) 100%)'+';'"></label>
      </view>
      <view class="detail">
        <scroll-view class="lable_content" id="lable_content" scrollWithAnimation="true" :scrollX="true" :throttle="false" v-if="$root.g3">
          <view :class="['lable','',activeDays==index?'active':'']" :style="'background:'+(activeDays==index?buttonColour:'rgba(0, 0, 0, 0.05)')+';'" :key="index" v-for="(item, index) in $root.l0">{{ item.m0 }}</view>
        </scroll-view>
        <view class="detail_info" :style="'margin-top:'+($root.g4?0:'20rpx')+';'">
          <view class="detail_item" :id="'detailRow'+index" :key="index" v-for="(item, index) in $root.l4">
            <view class="detail_title" v-if="$root.g5">
              <view class="img_title" v-if="!item.userDefinedIcon">
                <image class="" src="/static/captured/17359ad369774476.png"></image>
                <view class="title_bj">
                  <view class="text1 _p">{{'0'+item.day}}</view>
                  <view class="text2 _p">DAY</view>
                </view>
              </view>
              <image class="image-userDef" mode="aspectFill" :src="item.userDefinedIcon" v-else></image>
              <view class="title_name">
                <view class="name1 _p">{{item.title}}</view>
                <view class="name2 _p" v-if="item.subhead">{{item.subhead}}</view>
              </view>
            </view>
            <view class="time_line" :style="'margin-top:'+($root.g6?0:'40rpx')+';'">
              <view class="mask" :style="'top:'+($root.g7?'22rpx':'-7rpx')+';'"></view>
              <view class="" style="height:30rpx;" v-if="$root.g8"></view>
              <view :class="['time_item','setOf','',!time.idy?'close':'']" :key="num" v-for="(time, num) in item.l3">
                <image class="markIcon" :src="time.icon"></image>
                <view class="time_title" :style="'width:'+(time.journeyDestinationType==9?'470rpx':'595rpx')+';'">
                  <view :class="['name','_p','',time.journeyDestinationType==9?'walk':'']">
                    {{ (time.journeyDetailTime?time.journeyDetailTime:'')+' '+time.journeyDetailTitle }}
                  </view>
                  <view :class="['times','',time.journeyDestinationType==9?'other':'']" v-if="time.journeyDetailSubhead&&time.journeyDestinationType!=8">
                    {{''+time.journeyDetailSubhead}}</view>
                </view>
                <view :class="['times1','',time.journeyDestinationType==9?'other':'']" v-if="time.journeyDetailSubhead&&time.journeyDestinationType==8">
                  {{''+time.journeyDetailSubhead}}</view>
                <view class="line_view" v-if="time.journeyDestinationType==9&&time.idy">查看路线<image class="goView" src="https://eshopfile.zhiyousx.com/169267534972027149.png"></image>
                </view>
                <view class="line_view line-guide" v-if="time.journeyDestinationType==8&&time.latitude&&time.longitude&&time.journeyDetailSubhead">
                  去这里<image class="goView" src="https://eshopfile.zhiyousx.com/2026030310211590777.png">
                  </image>
                </view>
                <view class="spot_card" :style="'background:'+(time.lineDestinationVO.destinationColor?'linear-gradient(180deg, '+time.lineDestinationVO.destinationColor+' 0%, rgba(215,247,249,0) 100%)':'#F5F5F5FF')+';'" v-if="time.journeyDestinationType<6">
                  <view class="card_top">
                    <view class="card_lab" v-if="time.tab">{{time.tab}}</view>
                    <image class="head_img" mode="aspectFill" :src="time.lineDestinationVO.mainPic"></image>
                    <view class="card_info">
                      <view class="card_title _p">{{time.lineDestinationVO.destinationName}}
                      </view>
                      <view class="ranking singleLineText" v-if="time.lineDestinationVO.originSortInRankingVO.contentId">
                        <view class="text">
                          <view class="name singleLineText">
                            {{''+time.lineDestinationVO.originSortInRankingVO.rankingName+'第'+time.lineDestinationVO.originSortInRankingVO.indexInRanking+'名'}}
                          </view>
                        </view>
                      </view>
                      <view class="card_describe" v-if="time.lineDestinationVO.subtitle!=null">
                        {{time.lineDestinationVO.subtitle}}</view>
                      <view class="card_ticket" v-if="time.lineDestinationVO.ticketName">
                        <view class="ding">订</view>
                        <view class="price">
                          {{(time.lineDestinationVO.price==0?'免费':'￥'+time.lineDestinationVO.price)+''}}
                        </view>
                        <view class="ticketName singleLineText">
                          {{''+time.lineDestinationVO.ticketName}}</view>
                      </view>
                      <view class="card_describe" v-if="time.m1">{{ time.m2 }}</view>
                      <view class="watermarkImage" v-if="time.watermarkImage">
                        <image class="" mode="aspectFill" :src="time.watermarkImage"></image>
                      </view>
                    </view>
                  </view>
                  <view class="card_imgList" v-if="cont.contentModuleName!=null" :key="contNum" v-for="(cont, contNum) in time.l2">
                    <view class="_p">{{cont.contentModuleName}}</view>
                    <view class="img_list">
                      <image class="img_li" mode="aspectFill" :src="imgs.coverImage" v-if="imgNum<(imgs.g9==6?6:5)" :key="imgNum" v-for="(imgs, imgNum) in cont.l1"></image>
                    </view>
                    <view class="img_more" v-if="cont.g10>6">{{ cont.m3 }}</view>
                  </view>
                </view>
                <view class="spot_introduction" v-if="time.journeyDestinationType==6||time.journeyDestinationType==7">
                  <view class="introduction_title _p">{{time.lineDestinationVO.destinationName}}
                  </view>
                  <scroll-view class="content-box" :scrollWithAnimation="true" :scrollX="true">
                    <view class="hote_item" :key="rankNum" v-for="(ranks, rankNum) in time.lineDestinationVO.rankingList">
                      <image class="hote_img" mode="aspectFill" :src="ranks.mainPic"></image>
                      <view class="name singleLineText _p">{{ranks.destinationName}}</view>
                    </view>
                  </scroll-view>
                  <view class="allHote">
                    <view class="_p">{{time.rankingCopyWritering}}</view>
                    <label class="goView _span">
                      <image class="" src="https://eshopfile.zhiyousx.com/169267534972027149.png">
                      </image>
                    </label>
                  </view>
                </view>
                <view class="spot_remark" v-if="time.desc&&time.journeyDestinationType!==8">
                  <u-parse class="" :html="time.desc" :tagStyle="parseStyle"></u-parse>
                </view>
                <view class="spot_remark spot_tips" v-if="time.tips&&time.journeyDestinationType!==8">
                  <view class="tips">
                    <image class="" src="https://eshopfile.zhiyousx.com/169266846673784501.png"></image>
                  </view>
                  <text class="">{{time.tips}}</text>
                </view>
                <view class="html_content" v-if="time.journeyDestinationType==8">
                  <u-parse class="" :html="time.content" :tagStyle="parseStyle"></u-parse>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
  <view class="line_model flxeTitle" :style="'height:'+searchHeight+29+'px'+';'" v-if="$root.g11">
    <view class="position">
      <view class="absolut">
        <view class="model_title">
          <view class="back" @click="back()">
            <image class="header_icon" mode="aspectFit" src="/static/zhouWei-navBar/icon_home_black.png" v-if="firstPage"></image>
            <image class="header_icon" mode="aspectFit" src="/static/zhouWei-navBar/icon_back_black.png" v-else></image>
          </view>
          <view class="_p">行程明细</view>
          <label class="_span" :style="'background:'+'linear-gradient(90deg, '+buttonColour+' 0%, rgba(255,255,255,0) 100%)'+';'"></label>
        </view>
        <view class="detail">
          <view class="lable_content" :scrollLeft="scrollToLeft" :scrollView="true" scrollWithAnimation="true" :scrollX="true" :throttle="false">
            <view :class="['lable','',activeDays==index?'active':'']" :style="'background:'+(activeDays==index?buttonColour:'rgba(0, 0, 0, 0.05)')+';'" :key="index" v-for="(item, index) in $root.l5">{{item.m4+''}}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
  <view class="line_submit" :style="'bottom:'+(isPhotoAll?-100-safeAreaBottom+'rpx':'0')+';'+'height:'+(100+safeAreaBottom)+'rpx'+';'+'padding-bottom:'+safeAreaBottom+'rpx'+';'" v-if="detailObj.groupOrderFlag&&detailObj.showOwnDue||isGroup">
    <view class="iconBox">
      <button class="submit_icon share" openType="share">
        <image class="" src="/static/captured/638acbf921e21368.png"></image>
        <view class="text">分享</view>
      </button>
      <button class="submit_icon share" v-if="detailObj.customerServiceImage" @click="getCustomer()">
        <image class="" src="/static/captured/c2626d5726ed2448.png"></image>
        <view class="text">客服</view>
      </button>
    </view>
    <view class="submit_btn">
      <view :class="['btn','group','',!(detailObj.groupOrderFlag&&detailObj.showOwnDue)?'single':'']" v-if="isGroup" @click="goGroup()">组团报名</view>
      <view :class="['btn','predetermine','',!isGroup?'single':'']" v-if="detailObj.groupOrderFlag&&detailObj.showOwnDue" @click="predetermine()">自由预订</view>
    </view>
  </view>
  <u-popup borderRadius="20" class="" :closeable="true" mode="center" :value="customerShow" :vueSlots="['default']" @input="customerShow = $event">
    <view class="detailBox">
      <view class="title">客服</view>
      <scroll-view class="content" :scrollY="true">
        <image class="" mode="widthFix" :showMenuByLongpress="true" :src="detailObj.customerServiceImage"></image>
      </scroll-view>
    </view>
  </u-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              turns: function() {
                i.e("subPage/components/pc-turns/pc-turns").then(function() {
                  return resolve(i("9a3a"))
                }.bind(null, i)).catch(i.oe)
              },
              album: function() {
                Promise.all([i.e("common/vendor"), i.e("subPage/common/vendor"), i.e("subPage/components/photo-all/indexPro")]).then(function() {
                  return resolve(i("c595"))
                }.bind(null, i)).catch(i.oe)
              },
              kevySwiper: function() {
                i.e("subPage/components/kevy-swiper/kevy-swiper").then(function() {
                  return resolve(i("6da1"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            data: function() {
              return this.timerLock = null, {
                isPhotoAll: !1,
                isbanner: !1,
                bannerList: [],
                detailObj: {},
                paddingTop: 495,
                content: "",
                startY: 0,
                lastY: 1660,
                moveType: 1,
                istouchEnd: !0,
                loading: !0,
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
                lineId: "",
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
                isGroup: !1
              }
            },
            onShareAppMessage: function(t) {
              var e = "/subPage/pages/lineInfo/lineInfo?lineId=" + this.detailObj.lineId;
              return {
                title: this.detailObj.shareDesc ? this.detailObj.shareDesc : this.detailObj.lineName,
                imageUrl: this.detailObj.shareImage ? this.detailObj.shareImage : this.detailObj.imageList[0].url,
                path: this.$util.setShareUrl(e)
              }
            },
            onShareTimeline: function(t) {
              var e = "lineId=" + this.detailObj.lineId;
              return {
                title: this.detailObj.shareDesc ? this.detailObj.shareDesc : this.detailObj.lineName,
                imageUrl: this.detailObj.shareImage ? this.detailObj.shareImage : this.detailObj.imageList[0].url,
                query: this.$util.setShareTimeline(e)
              }
            },
            onReady: function() {},
            onLoad: function(e) {
              var i = this,
                n = this;
              e.lineId && (this.lineId = e.lineId), this.getLineDetail(), setTimeout((function() {
                var e = uni.getMenuButtonBoundingClientRect();
                i.searchHeight = e.top + 38
              }), 500), uni.getSystemInfo({
                success: function(e) {
                  n.safeAreaBottom = e.safeAreaInsets.bottom, uni.setStorageSync("safeAreaBottom", n.safeAreaBottom)
                }
              });
              var o = getCurrentPages();
              1 != o.length || ["pages/index/index", "pages/index/index"].includes(o[0].route) || (this.firstPage = !0), this.queryGroup()
            },
            onUnload: function() {},
            onShow: function() {
              uni.getStorageSync("activeDays") && (this.toDay(uni.getStorageSync("activeDays") - 1), t.removeStorage({
                key: "activeDays"
              }))
            },
            onPageScroll: function(t) {
              this.scrollTop = t.scrollTop, this.isPhotoAll || this.scrollCount()
            },
            mounted: function() {},
            methods: {
              getCustomer: function() {
                this.customerShow = !0
              },
              predetermine: function() {
                var t = "/subPack/pages/lineResource/lineResource?lineId=" + this.detailObj.lineId;
                this.$util.isLogin(t) && this.$navigateTo({
                  url: t
                })
              },
              goGroup: function() {
                var t = "/subPack/pages/groupRegistration/groupRegistration?lineId=" + this.detailObj.lineId;
                this.$navigateTo({
                  url: t
                })
              },
              queryGroup: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/relation/" + this.lineId).then((function(e) {
                  1 === e.code ? t.isGroup = !0 : t.isGroup = !1
                }))
              },
              scrollCount: function() {
                if (!this.isPhotoAll && !this.timerLock)
                  if (this.scrollTop < -100 && (this.lastY = 1660, this.moveType = 2, this.isPhotoAll = !0), this.scrollTop >= this.xcmxTop - 25) {
                    if (this.isFlxeTitle = !0, this.detailRowList.length < 1) return;
                    var t = this.activeDays;
                    t + 1 < this.detailRowList.length && this.scrollTop >= this.detailRowList[t] && (this.activeDays = t + 1), t - 1 >= 0 && this.scrollTop < this.detailRowList[t - 1] && (this.activeDays = t - 1)
                  } else this.isFlxeTitle = !1
              },
              clickMore: function() {
                this.getDetailTop()
              },
              getDetailTop: function() {
                var e = this,
                  i = this;
                setTimeout((function() {
                  new Promise((function(t) {
                    var e = uni.createSelectorQuery();
                    e.select("#xcmx").boundingClientRect(), e.select("#lineInfo").boundingClientRect(), e.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(t) {
                    i.xcmxTop = t[0] ? t[0].top + e.scrollTop : 0, i.lineInfoTop = t[1] ? t[1].top + e.scrollTop : 0
                  })), uni.hideLoading(), e.loading = !1
                }), 700)
              },
              getDetailRowList: function() {
                var t = this,
                  e = this;
                setTimeout((function() {
                  new Promise((function(e) {
                    var i = uni.createSelectorQuery();
                    t.detailObj.lineJourneyList.forEach((function(t, e) {
                      i.select("#detailRow" + e).boundingClientRect()
                    })), i.exec((function(t) {
                      e(t)
                    }))
                  })).then((function(i) {
                    e.detailRowList = [], i.forEach((function(i, n) {
                      e.detailRowList.push(i.top + i.height + t.scrollTop - t.searchHeight - 40)
                    }))
                  }))
                }), 1500)
              },
              spotRelationNum: function(t) {
                return t.length - 5 + "+"
              },
              getLineDetail: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/detail/" + this.lineId).then((function(t) {
                  if (1 === t.code) {
                    e.detailObj = t.data;
                    var i = ["不选", "驾车", "步行", "骑行", "乘车"],
                      n = ["", "https://eshopfile.zhiyousx.com/169267454629242176.png", "https://eshopfile.zhiyousx.com/169267449809707764.png", "https://eshopfile.zhiyousx.com/169267457638955648.png", "https://eshopfile.zhiyousx.com/169267454629242176.png"];
                    e.detailObj.lineJourneyList.forEach((function(t, o) {
                      t.spotList = [], t.lineJourneyDetailList.forEach((function(a, l) {
                        var s = !1;
                        if (l > 0) {
                          var r = t.lineJourneyDetailList[l - 1];
                          null != r.longitude && null != r.trafficType && (s = !0)
                        }
                        l > 0 && s && null != a.longitude && null != a.trafficType && null != a.duration && 0 != a.duration && t.spotList.push({
                          journeyDestinationType: 9,
                          journeyDetailTitle: i[a.trafficType] + parseFloat((a.distance / 1e3).toFixed(2)) + "km",
                          journeyDetailSubhead: e.setDuration(a.duration),
                          idx: a.idx,
                          idy: a.idy,
                          icon: n[a.trafficType]
                        }), t.spotList.push(a), o == e.detailObj.lineJourneyList.length - 1 && l == t.lineJourneyDetailList.length - 1 && t.spotList.push({
                          journeyDestinationType: 9,
                          journeyDetailTitle: "行程结束",
                          journeyDetailSubhead: "",
                          icon: n[2]
                        })
                      }))
                    })), e.buttonColour = t.data.buttonColour, e.pageColour = t.data.pageColour, e.mapLoading = !0, e.getLocationList(), t.data.lineFeatureList.length > 0 && (e.bannerList = t.data.lineFeatureList, 2 == t.data.lineFeatureList.length && e.bannerList.push(t.data.lineFeatureList[1]), e.isbanner = !0), t.data.lineJourneyList.length > 0 && (e.overviewList = [], t.data.lineJourneyList.forEach((function(t, i) {
                      e.overviewList.push({
                        name: t.title,
                        index: t.day,
                        userDefinedIcon: t.userDefinedIcon,
                        list: []
                      }), t.lineJourneyDetailList.forEach((function(t) {
                        var n = t.tab ? 1 : 0;
                        t.longitude && t.latitude && e.overviewList[i].list.push({
                          name: t.tab,
                          type: 2,
                          important: n
                        }, {
                          name: t.destinationName,
                          type: 0,
                          important: n
                        }, {
                          name: "→",
                          type: 1,
                          important: n
                        })
                      }))
                    }))), e.$nextTick((function() {
                      e.getDetailTop(), e.getDetailRowList()
                    }))
                  }
                })).catch((function(e) {
                  uni.hideLoading()
                }))
              },
              setDuration: function(t) {
                var e = "",
                  i = 0,
                  n = 0;
                return t < 60 ? e = t + "分钟" : (i = Math.trunc(t / 60), e = (n = t % 60) ? i + "小时" + n + "分钟" : i + "小时"), "预计" + e
              },
              getLocationList: function(e) {
                var i = this;
                uni.showLoading({
                  title: "加载中",
                  mask: !0
                }), this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/detail/map/" + this.lineId).then((function(e) {
                  if (1 === e.code) {
                    var n = [],
                      o = [];
                    e.data.forEach((function(t) {
                      t.lineJourneyDetailList.forEach((function(e) {
                        var l;
                        o.push({
                          longitude: e.longitude,
                          latitude: e.latitude
                        }), i.markers.push({
                          id: e.idx,
                          idy: e.idy,
                          title: e.destinationName,
                          longitude: e.longitude,
                          latitude: e.latitude,
                          width: 20,
                          height: 5,
                          day: t.day,
                          iconPath: "https://eshopfile.zhiyousx.com/169209589667867086.png",
                          callout: {
                            display: "ALWAYS",
                            anchorY: 0,
                            anchorX: 0,
                            content: e.destinationName,
                            color: "#333",
                            bgColor: "#fff",
                            textAlign: "center",
                            borderRadius: 5,
                            padding: 5
                          }
                        }), null != e.coordinatesList && (l = n).push.apply(l, (0, a.default)(e.coordinatesList))
                      }))
                    })), i.map.longitude = i.markers[0].longitude, i.map.latitude = i.markers[0].latitude, i._mapContext = t.createMapContext("map", i), n.length <= 1 && (n = [i.map, i.map]), setTimeout((function() {
                      i.polyline[0].points = n, i.polyline[0].color = i.pageColour, i._mapContext.includePoints({
                        padding: ["70", "70", "70", "70"],
                        points: o
                      }), i.mapLoading = !1
                    }), 500)
                  }
                })).catch((function(e) {
                  uni.hideLoading()
                }))
              },
              spotContent: function(t) {
                var e = "";
                return null != t.businessType && null != t.perCapitaConsumption && (e = t.businessType + " · " + t.perCapitaConsumption), null != t.businessType && (e = t.businessType), e
              },
              touchstart: function(t) {
                t.stopPropagation(), this.startY = t.changedTouches[0].pageY
              },
              scroll: function(t) {
                if (!(this.scrollTop > 0)) {
                  t.stopPropagation();
                  var e = t.changedTouches[0].pageY - this.startY;
                  this.isPhotoAll || 0 != this.scrollTop || e > 100 && (this.lastY = 1660, this.moveType = 2, this.isPhotoAll = !0)
                }
              },
              pageTo: function(t) {
                this.$navigateTo({
                  url: t
                })
              },
              dayName: function(t) {
                return "第" + ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三", "二十四"][t] + "天"
              },
              achieve: function(t) {
                var e = this.bannerList[t];
                this.bannerTopClick(e)
              },
              bannerTopClick: function(e) {
                1 === e.jumpType && e.interalLinkId ? (-1 != e.interalLinkId.indexOf("?") && (e.interalLinkId = e.interalLinkId.replace("?", "*"), e.interalLinkId = e.interalLinkId.replace("=", "+")), this.$navigateTo({
                  url: "/pages/webpage/webpage?url=".concat(e.interalLinkId)
                })) : 2 === e.jumpType && e.interalLinkId ? 1 === e.interalLinkType ? this.$navigateTo({
                  url: "/subPage/pages/goods_details/goods_details?itemId=".concat(e.interalLinkId)
                }) : 2 === e.interalLinkType ? this.$util.cityJump(e.contentType, e.interalLinkId) : 3 === e.interalLinkType ? this.$navigateTo({
                  url: "/subPack/pages/city/city?cityId=".concat(e.interalLinkId)
                }) : 4 !== e.interalLinkType && 7 !== e.interalLinkType && 8 !== e.interalLinkType && 9 !== e.interalLinkType || this.$navigateTo({
                  url: "../spotDetail/spotDetail?spotId=".concat(e.interalLinkId)
                }) : 3 === e.jumpType ? "wxf2cca76ae0520e33" == e.newAppId ? this.$navigateTo({
                  url: e.appUrl
                }) : t.openEmbeddedMiniProgram({
                  appId: e.newAppId,
                  path: e.appUrl
                }) : 4 === e.jumpType && (uni.setStorageSync("richtext", e.richText), this.$navigateTo({
                  url: "/pages/richtext/richtext?title=".concat(e.featureName)
                }))
              },
              goSpot: function(t, e) {
                e <= 4 ? this.$navigateTo({
                  url: "/pages/spotDetail/spotDetail?spotId=" + t
                }) : 5 == e ? this.$navigateTo({
                  url: "/pages/spotThirdDetail/spotThirdDetail?spotId=" + t
                }) : 6 != e && 7 != e || this.$navigateTo({
                  url: "/pages/ranking/ranking?id=" + t
                })
              },
              back: function() {
                this.firstPage ? uni.switchTab({
                  url: "/pages/index/index"
                }) : uni.navigateBack()
              },
              topicMap: function(t) {},
              hancleCloseAlbum: function() {
                this.isPhotoAll = !1
              },
              down: function() {
                this.isPhotoAll = !0, this.$refs.album.playVideo(!0)
              },
              goTrip: function(t, e) {
                var i = "/subPack/pages/tripInfo/tripInfo?id=".concat(this.lineId, "&buttonColour=").concat(this.buttonColour, "&pageColour=").concat(this.pageColour);
                t && (i += "&day=".concat(t, "&idy=").concat(e)), this.$navigateTo({
                  url: i
                })
              },
              toGuide: function(e) {
                uni.openLocation({
                  longitude: Number(e.longitude),
                  latitude: Number(e.latitude),
                  name: e.journeyDetailTitle,
                  success: function() {}
                })
              },
              toDay: function(e) {
                var i = this,
                  o = this;
                this.activeDays = e, new Promise((function(t) {
                  var i = uni.createSelectorQuery();
                  i.select("#detailRow" + e).boundingClientRect(), i.select("#lable_content").boundingClientRect(), i.exec((function(e) {
                    t(e)
                  }))
                })).then((function(e) {
                  var n = e[0] ? e[0].top : 0;
                  i.scrollToLeft = e[1] ? e[1].left : 0, i.scrollLock = !0, uni.pageScrollTo({
                    scrollTop: o.scrollTop + n - i.searchHeight - 30,
                    duration: 0
                  }), i.timerLock && (clearTimeout(i.timerLock), i.timerLock = null), setTimeout((function() {
                    i.timerLock = !1
                  }), 100)
                }))
              },
              linetouchmove: function(t) {
                this.moveType || (this.startY = t.changedTouches[0].clientY)
              },
              linetouchend: function() {
                0 == this.moveType && this.istouchEnd && uni.pageScrollTo({
                  scrollTop: 0,
                  duration: 300
                })
              },
              pageScrollTo: function() {
                this.content = "", setTimeout((function() {
                  uni.pageScrollTo({
                    scrollTop: 999999,
                    duration: 0
                  })
                }), 200)
              },
              jumpSpotContentList: function(e, i) {
                uni.setStorageSync("spotContentList", {
                  name: i.contentModuleName,
                  contentList: i.contentInfoVOList
                }), this.$navigateTo({
                  url: "/pages/spotContentList/spotContentList?scenicName=".concat(e)
                })
              },
              priviewImg: function(e) {
                uni.previewImage({
                  current: e,
                  urls: [e]
                })
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.box{min-height:100vh}.box .img_box{position:fixed;top:0;width:750rpx;z-index:1}.box .img_box image{width:100%}.box .nav_top{background:#fff;color:#000;font-size:36rpx;padding:0 174rpx 0 30rpx;position:fixed;top:0;width:100%;z-index:100}.box .line_info{overflow-x:hidden;padding-bottom:100rpx;padding-top:495rpx;position:relative;transition:top 1s;width:100%;z-index:10}.box .line_info .albumEnter{align-items:flex-end;left:0;padding-bottom:120rpx;position:absolute;top:0;width:100%}.box .line_info .albumEnter image{height:140rpx;width:140rpx}.box .line_info .line_bj{padding:20rpx 30rpx 0;position:relative}.box .line_info .line_bj .down{display:-webkit-flex;display:flex;justify-content:center;width:100%}.box .line_info .line_bj .down .down_img{box-shadow:0rpx 4rpx 4rpx 0rpx rgba(0,0,0,.25);height:19rpx;opacity:.6;width:93rpx}.box .line_info .line_bj .line_title{display:-webkit-flex;display:flex;margin-top:-30rpx}.box .line_info .line_bj .line_title .p1{background:#f5d597;border-radius:4rpx;color:rgba(0,0,0,.8);font-size:24rpx;font-weight:700;height:40rpx;line-height:40rpx;text-align:center;transform:skew(-15deg);width:111rpx}.box .line_info .line_bj .line_title .p2{height:40rpx;padding-top:6rpx;transform:skew(-15deg);width:198rpx}.box .line_info .line_bj .line_title .p2 ._p{background:rgba(0,0,0,.5);border-radius:4rpx;color:hsla(0,0%,100%,.7);font-size:24rpx;height:34rpx;line-height:36rpx;text-align:center;width:100%}.box .line_info .line_bj .loction{background:#fff;border-radius:20rpx;height:580rpx;margin-top:30rpx;overflow:hidden;position:relative;transform:translateY(0);width:100%}.box .line_info .line_bj .loction .loading{bottom:0;left:0;position:absolute;right:0;top:0}.box .line_info .line_bj .loction .loading .img_box{align-items:center;background:#fff;display:-webkit-flex;display:flex;height:100%;justify-content:center;width:100%}.box .line_info .line_bj .loction .loading .img_box .loading_img{height:200rpx;width:200rpx}.box .line_info .line_bj .loction .extend{align-items:center;background:#fff;border-radius:50%;bottom:20rpx;box-shadow:0rpx 10rpx 20rpx 0rpx rgba(0,0,0,.1);display:-webkit-flex;display:flex;height:50rpx;justify-content:center;position:absolute;right:20rpx;width:50rpx}.box .line_info .line_bj .loction .extend .extend_img{height:30rpx;width:30rpx}.box .line_info .line_bj .loction .customCallout{display:inline-block;position:relative}.box .line_info .line_bj .loction .customCallout .day{background:#42c7ab;border-radius:10rpx;color:#fff;font-size:24rpx;font-weight:700;height:46rpx;line-height:38rpx;text-align:center;width:89rpx}.box .line_info .line_bj .loction .customCallout .spot_info{background:#fff;border-radius:10rpx;height:46rpx;line-height:46rpx;margin-bottom:10rpx;margin-top:-10rpx;padding:0 16rpx}.box .line_info .line_bj .loction .customCallout .spot_info .title{color:rgba(0,0,0,.8);font-size:24rpx;line-height:46rpx;width:auto}.box .line_info .line_bj .loction .customCallout .jx{bottom:10rpx;left:50%;position:absolute}.box .line_info .line_bj .loction .customCallout .jx .jiantou{background:#fff;border:1rpx solid rgba(0,0,0,.2);border-right:none;border-top:none;height:10rpx;transform:rotate(-45deg);width:10rpx}.box .line_info .line_bj .loction_info{background:hsla(0,0%,100%,.7);border-radius:20rpx;display:-webkit-flex;display:flex;height:110rpx;margin-top:10rpx;overflow-x:auto;white-space:nowrap}.box .line_info .line_bj .loction_info .info_item{display:inline-table;height:100%;min-width:230rpx;padding:15rpx 20rpx 0;position:relative;text-align:center}.box .line_info .line_bj .loction_info .info_item .top{color:rgba(0,0,0,.8);font-size:30rpx;margin-bottom:4rpx}.box .line_info .line_bj .loction_info .info_item .bottom{color:rgba(0,0,0,.5);font-size:24rpx}.box .line_info .line_bj .loction_info .info_item .lines{border:1rpx solid;border-image:linear-gradient(180deg,transparent,rgba(0,0,0,.2),transparent)1 1;height:54.5rpx;position:absolute;right:0;top:28rpx;width:0rpx}.box .line_info .line_bj .loction_info .info_item:nth-last-child(1) .lines{display:none}.box .line_info .line_bj .line_name{color:#fff;font-size:40rpx;font-weight:700;margin-top:20rpx}.box .line_info .line_bj .line_lable{margin-top:10rpx}.box .line_info .line_bj .line_lable .lable_item{align-items:center;border:1rpx solid #fff;border-radius:20rpx;color:#fff;display:-webkit-inline-flex;display:inline-flex;font-size:24rpx;height:34rpx;margin-right:10rpx;margin-top:10rpx;padding:0 20rpx;text-align:center}.box .line_info .line_bj .line_top_img{margin-top:30rpx;width:100%}.box .line_info .line_bj .line_top_img>image{border-radius:20rpx;width:100%}.box .line_info .line_model{background:#f5f5f5;padding:50rpx 30rpx 0;position:-webkit-sticky;position:sticky;top:0}.box .line_info .line_model .model_title ._p{color:rgba(0,0,0,.7);font-size:36rpx;font-weight:700}.box .line_info .line_model .model_title ._span{border-radius:40rpx 40rpx 40rpx 40rpx;display:block;height:20rpx;margin-top:-18rpx;width:144rpx}.box .line_info .line_model .teachLoop{height:470rpx;margin-top:30rpx;width:100%}.box .line_info .line_model .teachLoop .teachLoop_box{align-items:center;display:-webkit-flex;display:flex;height:100%;justify-content:center;width:100%}.box .line_info .line_model .teachLoop .teachLoop_box .teachLoop_img{border-radius:20rpx;box-shadow:0rpx 20rpx 30rpx 0rpx rgba(0,0,0,.15);height:470rpx;width:400rpx}.box .line_info .line_model .overviewDesc{background:#fff;border-radius:20rpx;margin-top:35rpx;padding:20rpx}.box .line_info .line_model .overview{background:#fff;border-radius:20rpx;margin-top:35rpx;padding:21rpx 20rpx 40rpx}.box .line_info .line_model .overview .overview_item{border-bottom:1rpx dashed rgba(0,0,0,.1);margin-top:20rpx;padding-bottom:20rpx}.box .line_info .line_model .overview .overview_item .title{display:-webkit-flex;display:flex;position:relative}.box .line_info .line_model .overview .overview_item .title .day{border-right:1px solid rgba(0,0,0,.5);color:rgba(0,0,0,.7);font-size:40rpx;font-weight:700;height:50rpx;line-height:38rpx;margin-right:20rpx;width:120rpx;z-index:10}.box .line_info .line_model .overview .overview_item .title .address{color:rgba(0,0,0,.7);font-size:32rpx;height:50rpx;line-height:50rpx;text-align:center}.box .line_info .line_model .overview .overview_item .title .dayShow{background:url('data:image/png;base64,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');background-size:100% 100%;height:32rpx;position:absolute;top:26rpx;width:79rpx;z-index:1}.box .line_info .line_model .overview .overview_item .content{display:-webkit-flex;display:flex;flex-wrap:wrap;margin-top:20rpx}.box .line_info .line_model .overview .overview_item .content .item{margin-bottom:5rpx;margin-right:10rpx;text-align:justify}.box .line_info .line_model .overview .overview_item .content .item .adsName{margin-bottom:10rpx;margin-right:10rpx}.box .line_info .line_model .overview .overview_item .content .item .name{color:rgba(0,0,0,.7);font-size:28rpx}.box .line_info .line_model .overview .overview_item .content .item .arrow{color:rgba(0,0,0,.7);font-size:30rpx;transform:scaleX(1.5)}.box .line_info .line_model .overview .overview_item .content .item .important{color:rgba(0,0,0,.8)}.box .line_info .line_model .overview .overview_item .content .item .lable{align-items:center;border-radius:20rpx 20rpx 6rpx 20rpx;color:#fff;display:-webkit-inline-flex;display:inline-flex;font-size:26rpx;height:36rpx;padding:0 10rpx;text-align:center}.box .line_info .line_model .overview .overview_item .content .item .adsName:nth-last-child(1){display:none}.box .line_info .line_model .overview .overview_item:nth-last-child(1){border:none;padding-bottom:0}.box .line_info .line_model .detail .lable_content{display:-webkit-flex;display:flex;margin-top:30rpx;overflow-x:auto;white-space:nowrap}.box .line_info .line_model .detail .lable_content .lable{align-items:center;background:rgba(0,0,0,.05);border-radius:30rpx;color:rgba(0,0,0,.5);display:-webkit-inline-flex;display:inline-flex;height:56rpx;margin-right:20rpx;padding:0 20rpx;text-align:center}.box .line_info .line_model .detail .lable_content .active{color:#fff}.box .line_info .line_model .detail .detail_info{background:#fff;border-radius:0rpx 60rpx 20rpx 20rpx}.box .line_info .line_model .detail .detail_info .detail_item .detail_title{background:#ededed;border-radius:0rpx 60rpx 60rpx 0rpx;display:-webkit-flex;display:flex;height:-webkit-fit-content;height:fit-content;min-height:110rpx;width:100%}.box .line_info .line_model .detail .detail_info .detail_item .detail_title .image-userDef{border-radius:0rpx 20rpx 0rpx 0rpx;height:auto;margin-left:-30rpx;width:110rpx}.box .line_info .line_model .detail .detail_info .detail_item .detail_title .img_title{align-items:center;background:#4c5150;background-size:100% 100%;border-radius:0rpx 20rpx 0rpx 0rpx;display:-webkit-flex;display:flex;justify-content:center;margin-left:-30rpx;position:relative;text-align:center;width:110rpx}.box .line_info .line_model .detail .detail_info .detail_item .detail_title .img_title image{height:80%;left:22rpx;position:absolute;top:24%;width:86rpx}.box .line_info .line_model .detail .detail_info .detail_item .detail_title .img_title .title_bj .text1{color:#fff;font-size:40rpx;font-weight:700;margin-bottom:6rpx}.box .line_info .line_model .detail .detail_info .detail_item .detail_title .img_title .title_bj .text2{color:hsla(0,0%,100%,.8);font-size:26rpx}.box .line_info .line_model .detail .detail_info .detail_item .detail_title .title_name{padding-bottom:14rpx;padding-left:20rpx;width:605rpx}.box .line_info .line_model .detail .detail_info .detail_item .detail_title .title_name .name1{color:rgba(0,0,0,.9);font-size:32rpx;margin-bottom:10rpx;margin-top:13rpx}.box .line_info .line_model .detail .detail_info .detail_item .detail_title .title_name .name2{color:rgba(0,0,0,.6);font-size:26rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line{margin-top:40rpx;padding-left:35rpx;position:relative}.box .line_info .line_model .detail .detail_info .detail_item .time_line .mask{background:#fff;height:14rpx;left:29rpx;position:absolute;top:-7rpx;width:14rpx;z-index:10}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item{border-left:1rpx solid rgba(0,0,0,.2);padding-bottom:50rpx;padding-left:35rpx;position:relative}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .markIcon{background:#fff;height:36rpx;left:-18rpx;position:absolute;top:4rpx;width:36rpx;z-index:20}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .line_view{align-items:center;background:url('https://eshopfile.zhiyousx.com/169209914527662936.png');background-size:100% 100%;color:rgba(0,0,0,.8);display:-webkit-flex;display:flex;font-size:26rpx;height:60rpx;justify-content:flex-end;padding-right:10rpx;position:absolute;right:26rpx;top:-12rpx;width:382rpx;z-index:5}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .line_view .goView{height:30rpx;margin-left:10rpx;width:30rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .line_view .goView image{height:100%;width:100%}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .line-guide{background:linear-gradient(90deg,transparent,rgba(0,0,0,.05))!important;border-radius:10rpx;height:50rpx!important;line-height:50rpx;padding-right:15rpx;top:-6rpx;width:150rpx!important}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .line-guide .goView{height:30rpx;margin-left:6rpx;width:30rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .time_title{align-items:center;display:-webkit-flex;display:flex;width:470rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .time_title .name{color:rgba(0,0,0,.8);font-size:30rpx;font-weight:700;line-height:40rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .time_title .walk{color:rgba(0,0,0,.8);font-size:26rpx;font-weight:400}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .time_title .times{border-left:1rpx solid rgba(0,0,0,.3);color:rgba(0,0,0,.5);font-size:26rpx;line-height:30rpx;margin-left:30rpx;max-height:54rpx;min-height:27rpx;padding-left:12rpx;position:relative;z-index:10}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .time_title .other{border-left:1rpx solid rgba(0,0,0,.8);color:rgba(0,0,0,.8);margin-left:15rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .times1{color:rgba(0,0,0,.7);font-size:26rpx;line-height:40rpx;margin-top:10rpx;width:590rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card{border-radius:20rpx 20rpx 20rpx 20rpx;margin-top:20rpx;padding:20rpx;width:600rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_top{display:-webkit-flex;display:flex;position:relative}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_lab{background:url('https://eshopfile.zhiyousx.com/169209823319911969.png');background-size:100% 100%;color:#f1dc8d;font-size:20rpx;height:64rpx;left:0rpx;padding-left:19rpx;padding-top:12rpx;position:absolute;top:-29rpx;width:64rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .head_img{border-radius:10rpx;height:180rpx;width:180rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info{padding-left:20rpx;width:392rpx;z-index:10}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .card_title{color:rgba(0,0,0,.7);font-size:30rpx;font-weight:700}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .ranking{align-items:center;display:-webkit-flex;display:flex;margin-top:20rpx;position:relative}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .ranking .top{align-items:center;background:linear-gradient(180deg,#6b6457,#54524c);border-radius:25rpx;color:#e6cca2;display:-webkit-flex;display:flex;font-size:24rpx;height:34rpx;padding:0 10rpx;position:relative;z-index:3}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .ranking .text{background:#ffefd5;border-radius:4px 18px 18px 18px;height:36rpx;line-height:36rpx;padding:0 16rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .ranking .text .name{color:#945430;font-size:22rpx;max-width:325rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .card_describe{color:rgba(0,0,0,.4);font-size:26rpx;margin-top:14rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .card_ticket{align-items:center;display:-webkit-flex;display:flex;height:38rpx;line-height:38rpx;margin-top:14rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .card_ticket .ding{background:linear-gradient(180deg,#f99f1d,#fe581e);border-radius:10rpx;color:#fff;font-size:22rpx;height:32rpx;line-height:32rpx;margin-top:-5rpx;text-align:center;width:32rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .card_ticket .price{color:rgba(0,0,0,.4);font-size:26rpx;margin-left:10rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .card_ticket .ticketName{color:rgba(0,0,0,.4);font-size:26rpx;margin-left:10rpx;width:230rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .watermarkImage{border-radius:0 20rpx 0 0;position:absolute;right:-20rpx;top:-20rpx;z-index:-1}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_top .card_info .watermarkImage image{height:100rpx;width:100rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_imgList{align-items:center;background:rgba(0,0,0,.03);border-radius:10rpx;display:-webkit-flex;display:flex;margin-top:29rpx;padding:10rpx 0 10rpx 20rpx;width:560rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_imgList ._p{color:rgba(0,0,0,.7);font-size:26rpx;max-width:109rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_imgList .img_list{display:-webkit-flex;display:flex;margin-left:20rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_imgList .img_list .img_li{border-radius:10rpx;height:60rpx;margin-right:10rpx;width:60rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_card .card_imgList .img_more{background:rgba(0,0,0,.05);border-radius:10rpx;color:rgba(0,0,0,.7);height:60rpx;line-height:60rpx;text-align:center;width:60rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_remark{margin-top:20rpx;padding:0 10rpx;text-align:justify;width:600rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_remark text{color:rgba(0,0,0,.6);font-size:26rpx;text-align:justify}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_tips{background:rgba(255,0,0,.05);border-radius:10rpx;display:-webkit-flex;display:flex;padding:20rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_tips .tips{margin-right:15rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_tips .tips image{height:22rpx;width:22rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .html_content{margin-top:20rpx;padding-right:20rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_introduction{margin-top:20rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_introduction .introduction_title{color:rgba(0,0,0,.7);font-size:30rpx;font-weight:700}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_introduction .content-box{background:rgba(0,0,0,.05);border-radius:20rpx;margin-top:30rpx;padding:20rpx 0 75rpx 20rpx;white-space:nowrap;width:581rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_introduction .content-box .hote_item{background:#fff;border-radius:20rpx;box-shadow:0rpx 4rpx 20rpx 0rpx rgba(0,0,0,.05);display:inline-block;height:100%;margin-right:20rpx;padding:10rpx;vertical-align:top;white-space:break-spaces;width:231rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_introduction .content-box .hote_item .hote_img{border-radius:10rpx;height:210rpx;width:210rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_introduction .content-box .hote_item .name{color:rgba(0,0,0,.7);font-size:28rpx;margin-top:10rpx;overflow:auto}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_introduction .content-box .hote_item .text{color:rgba(0,0,0,.4);font-size:26rpx;margin-top:10rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_introduction .allHote{align-items:center;background:hsla(0,0%,100%,.5);border-radius:20rpx;display:-webkit-flex;display:flex;height:54rpx;justify-content:space-between;margin-top:-56rpx;padding:0 20rpx;width:600rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_introduction .allHote ._p{color:rgba(0,0,0,.7);font-size:26rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_introduction .allHote .goView{height:30rpx;width:30rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .time_item .spot_introduction .allHote .goView image{height:100%;width:100%}.box .line_info .line_model .detail .detail_info .detail_item .time_line .close{border:none;padding-bottom:30rpx}.box .line_info .line_model .detail .detail_info .detail_item .time_line .close .markIcon{top:0}.box .line_info .line_model .detail .detail_info .detail_item .time_line .close .time_title .name{line-height:35rpx}.box .flxeTitle{background:#fff;padding:0 30rpx;position:fixed;top:0;width:100%;z-index:20;z-index:100}.box .flxeTitle .position{height:100%;position:relative;width:100%}.box .flxeTitle .position .absolut{bottom:10rpx;position:absolute}.box .flxeTitle .position .absolut .model_title{padding-left:75rpx;position:relative}.box .flxeTitle .position .absolut .model_title .back{align-items:center;background-color:hsla(0,0%,100%,.7);border:2rpx solid rgba(0,0,0,.1);border-radius:50%;display:-webkit-flex;display:flex;height:56rpx;justify-content:center;left:0rpx;position:absolute;top:-1rpx;width:56rpx}.box .flxeTitle .position .absolut .model_title .back .header_icon{height:40rpx;width:40rpx}.box .flxeTitle .position .absolut .model_title ._p{color:rgba(0,0,0,.7);font-size:36rpx;font-weight:700}.box .flxeTitle .position .absolut .model_title ._span{border-radius:40rpx 40rpx 40rpx 40rpx;display:block;height:20rpx;margin-top:-18rpx;width:144rpx}.box .flxeTitle .position .absolut .lable_content{display:-webkit-flex;display:flex;margin-top:15rpx;overflow-x:auto;white-space:nowrap;width:690rpx}.box .flxeTitle .position .absolut .lable_content .lable{align-items:center;background:rgba(0,0,0,.05);border-radius:30rpx;color:rgba(0,0,0,.5);display:-webkit-inline-flex;display:inline-flex;height:56rpx;margin-right:20rpx;padding:0 20rpx;text-align:center}.box .flxeTitle .position .absolut .lable_content .active{color:#fff}.box .line_submit{background:#fff;bottom:0;box-shadow:0rpx -10rpx 20rpx 0rpx rgba(0,0,0,.1);height:130rpx;justify-content:space-between;padding:0 40rpx 30rpx;position:fixed;width:100%;z-index:20}.box .line_submit .iconBox,.box .line_submit{align-items:center;display:-webkit-flex;display:flex}.box .line_submit .iconBox .submit_icon{margin-right:50rpx}.box .line_submit .iconBox .submit_icon image{height:48rpx;width:48rpx}.box .line_submit .iconBox .submit_icon .text{color:#4e5969;font-size:20rpx;margin-top:-5rpx;text-align:center}.box .line_submit .iconBox .share{background:#fff;display:block;height:74rpx;line-height:30rpx;padding:0}.box .line_submit .submit_btn{display:-webkit-flex;display:flex;height:80rpx;width:100%}.box .line_submit .submit_btn .btn{align-items:center;display:-webkit-flex;display:flex;font-size:30rpx;height:100%;justify-content:center;width:50%}.box .line_submit .submit_btn .group{background:linear-gradient(138deg,#fc4a9b,#ff5413);border-radius:40rpx 0 0 40rpx;box-shadow:4rpx 0rpx 0rpx 0rpx rgba(0,0,0,.25);color:#fff;font-weight:700}.box .line_submit .submit_btn .predetermine{background:linear-gradient(1turn,#2c0b0b,#564a49);border-radius:0rpx 40rpx 40rpx 0rpx;box-shadow:2rpx 0rpx 0rpx 0rpx rgba(0,0,0,.15);color:#e6cca2}.box .line_submit .submit_btn .single{border-radius:40rpx;width:100%}.box .detailBox{background:#fff;min-height:600rpx;padding:40rpx;width:650rpx}.box .detailBox .title{color:#333;font-size:36rpx;line-height:54rpx}.box .detailBox .content image,.box .detailBox .content{width:100%}
.route-map-fallback{height:100%;padding:24rpx 28rpx;background:linear-gradient(155deg,#e6f4ee,#f7f9f4 65%,#f0eee7)}
.route-map-heading{font-size:32rpx;font-weight:700;color:#193e35}
.route-map-hint{font-size:23rpx;color:#638077;margin-top:6rpx}
.route-map-stops{height:465rpx;margin-top:18rpx}
.route-map-stop{display:flex;align-items:center;padding:9rpx 0;border-left:3rpx solid #70ad91;margin-left:30rpx;min-height:48rpx}
.route-map-day{background:#2d7b63;border-radius:18rpx;color:#fff;font-size:20rpx;text-align:center;line-height:34rpx;min-width:48rpx;height:34rpx;margin-left:-25rpx;margin-right:18rpx}
.route-map-name{color:#29493f;font-size:25rpx;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

.line-hero{position:fixed;top:0;left:0;width:100%;height:600rpx;z-index:0}
</style>
