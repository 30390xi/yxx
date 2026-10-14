<template>
<view class="bg u-skeleton">
    <view class="linearbg" :style="'height:'+fixednavH+'px'+';'"></view>
    <view class="head_container" :style="'background:'+(!showIndex?'#fff':'rgba(255,255,255,'+1/fixednavH*scrollTop+')')+';'+'box-shadow:'+'0px 2px 40px 0px rgba(0, 0, 0, '+(showIndex?0:0.1)+')'+';'">
        <image class="logo_t u-skeleton-fillet" src="/static/captured/f3f84683c0e8312e.png" :style="'margin-top:'+searchHeight+'rpx'+';'" v-if="!showIndex"></image>
        <block v-else>
            <image class="logo_t u-skeleton-fillet" src="/static/captured/81834744951df647.png" :style="'margin-top:'+searchHeight+'rpx'+';'" v-if="1-1/fixednavH*scrollTop>0"></image>
            <image class="logo_t u-skeleton-fillet" src="/static/captured/f3f84683c0e8312e.png" :style="'margin-top:'+searchHeight+'rpx'+';'" v-else></image>
        </block>
        <view :class="['searchBoxTop','u-skeleton-fillet','',configrights==1?'grayFilter':'']" :style="'background:'+(!showIndex?'rgba(0,0,0,0.1)':'rgba('+255-255/fixednavH*scrollTop+','+255-255/fixednavH*scrollTop+','+255-255/fixednavH*scrollTop+','+(0.8-1/fixednavH*scrollTop>0.1?0.8-1/fixednavH*scrollTop:0.1)+')')+';'">
            <view class="item txt">
                <image class="" src="/static/captured/98b5024e40f5a003.png"></image>
                <view class="searchInput" v-if="$root.g0==1" @click="goSearch(searchKeyList[0])">{{ searchKeyList[0] }}</view>
                <view class="searchInput" v-else>
                    <u-notice-bar bgColor="#00000000" class="" color="#777474" :duration="10000" fontSize="26" :list="searchKeyList" mode="vertical" padding="18rpx 0rpx" :volumeIcon="false" @click="goSearch1()"></u-notice-bar>
                </view>
            </view>
        </view>
    </view>
    <panda-view class=" vue-ref" ref="pandaRef" :isHasPopup="isHasPopup" :isHide="isHide" :isShowPanda="isShowPanda" :version="xiaoqiVersion" v-if="showPandaSys&&!isIntoHide"></panda-view>
    <view :class="['container','',configrights==1?'grayFilter':'']">
        <view class="header u-skeleton-fillet">
            <u-swiper borderRadius="0" class="" height="560" indicatorPos="indexBottom" interval="5000" :list="swiperList" name="advertPicUrl" @click="swiperTopClick()"></u-swiper>
        </view>
        <view class="body-box">
            <view class="tab-box nav-box" v-if="$root.g1">
                <scroll-view class="tab" scrollWithAnimation="true" :scrollX="true" :throttle="false">
                    <view class="tabOver tabOver-nav">
                        <view class="tabCon-nav" :key="ci" v-for="(cl, ci) in firstLevelNav">
                            <view class="tab-item tab-item-nav">
                                <view class="tab_icon">
                                    <image class="u-skeleton-circle" mode="aspectFit" :src="cl.advertPicUrl"></image>
                                </view>
                            </view>
                        </view>
                    </view>
                </scroll-view>
            </view>
            <view class="tab-box">
                <scroll-view class="tab" scrollWithAnimation="true" :scrollX="true" :throttle="false" @scroll="tabScrollToLeft($event)">
                    <view class="tabOver">
                        <view class="tabCon" :key="ci" v-for="(cl, ci) in midNavList">
                            <view class="tab-item">
                                <view class="tab_icon">
                                    <image class="u-skeleton-circle" mode="aspectFit" :src="cl.advertPicUrl"></image>
                                </view>
                                <text class="singleLineText">{{cl.advertName}}</text>
                                <view class="dir" v-if="cl.isRelation==1"></view>
                            </view>
                        </view>
                    </view>
                </scroll-view>
            </view>
            <view class="ac_box" v-if="$root.g2">
                <view class="ac_left u-skeleton-fillet">
                    <image class="ac_image" mode="aspectFill" :src="middleBanner[0].advertPicUrl" @click="bannerClick(middleBanner[0], { eventTag: 'index_center_banner_click', eventName: '首页中部banner点击' })"></image>
                </view>
                <view class="ac_right" v-if="$root.g3">
                    <view class="rank-b u-skeleton-fillet">
                        <swiper autoplay="true" :circular="true" class="rank-swiper" interval="10000">
                            <swiper-item class="" :key="index" v-for="(item, index) in middleBannerFilter">
                                <view class="rank-item">
                                    <image class="" mode="aspectFill" :src="''+item.advertPicUrl"></image>
                                </view>
                            </swiper-item>
                        </swiper>
                    </view>
                </view>
            </view>
            <view class="re_box" :style="'background:'+HOME_HOT_PRODUCT_BACK_IMG+';'" v-if="$root.g4">
                <scroll-view class="re-top" :scrollWithAnimation="true" :scrollX="true">
                    <view :class="['re-item','u-skeleton-fillet','',item.id==showReId?'active':'',index>0?'reLine':'']" :key="index" v-for="(item, index) in reNavList">
                        <view class="re-b">
                            <view class="title">{{ item.name }}</view>
                            <view class="sub">{{ item.sub }}</view>
                        </view>
                    </view>
                </scroll-view>
                <scroll-view class="spotlist" :scrollWithAnimation="true" :scrollX="true" v-if="showReId=='r1'">
                    <view class="spot u-skeleton-fillet" v-if="index<10" v-for="(item, index) in recommend.list">
                        <image class="spot_icon" mode="aspectFill" :src="item.defaultPicUrl+'?imageView2/1/w/216/h/158/'"></image>
                        <image class="tips" mode="aspectFill" src="/static/captured/1067942139355e1e.png"></image>
                        <view class="spot_name multilineText2">{{item.itemTitle}}</view>
                        <view class="spot_price spot-bg">
                            <view class="price-box">
                                <view class="dis-box" v-if="item.retailPrice&&item.retailPrice>item.marketPrice||item.discount&&item.discount>0">
                                    <view class="maketPrice" v-if="item.retailPrice&&item.retailPrice>item.marketPrice">{{'￥'+item.retailPrice+''}}</view>
                                    <view class="discount" v-if="item.discount&&item.discount>0&&item.discount<10">{{''+item.discount+'折'}}</view>
                                </view>
                                <view class="price">
                                    <view class="p" style="font-size:28rpx;" v-if="item.skuItemType==1&&item.isFree==1">免费</view>
                                    <block v-else>
                                        <view class="t">￥</view>
                                        <view class="p">{{item.marketPrice}}</view>
                                        <view class="start" v-if="item.startPriceFlag==1">起</view>
                                    </block>
                                </view>
                            </view>
                            <view class="picBox">
                                <image class="picImg" mode="widthFix" src="/static/captured/4dcc2deb27b372d5.png"></image>
                            </view>
                        </view>
                    </view>
                    <view class="more" v-if="$root.g5" @click.stop="todetail()">
                        <view class="">
                            <text class="">查</text>
                            <text class="">看</text>
                            <text class="">更</text>
                            <text class="">多</text>
                        </view>
                    </view>
                </scroll-view>
                <scroll-view class="cardList u-skeleton-fillet" :scrollWithAnimation="true" :scrollX="true" v-if="showReId=='r2'">
                    <view class="card" v-if="index<6" v-for="(item, index) in equityCardList">
                        <view class="card-bg"></view>
                        <view class="card-info">
                            <image class="card-image" mode="aspectFill" :src="item.image+'?imageView2/1/w/200/h/120/'"></image>
                            <view class="card-t1">{{ item.name }}</view>
                            <view class="card-sub singleLineText">{{ item.subtitle }}</view>
                            <view class="card-btn">GO<u-icon class="" color="#FFFFFF" name="arrow-rightward" size="18" style="margin-left:10rpx;margin-top:-5rpx;"></u-icon>
                            </view>
                        </view>
                    </view>
                    <view class="card" v-if="$root.g6==1">
                        <view class="card-bg"></view>
                        <view class="card-info">
                            <image class="card-image" mode="aspectFill" src="https://eshopfile.zhiyousx.com/167316384967509305.png"></image>
                            <view class="card-t1">更多权益</view>
                            <view class="card-sub">敬请期待</view>
                            <view class="card-btn dis">持续更新</view>
                        </view>
                    </view>
                </scroll-view>
                <scroll-view class="spotlist u-skeleton-fillet" :scrollWithAnimation="true" :scrollX="true" v-if="showReId=='r3'">
                    <view class="spot" v-if="index<10" v-for="(item, index) in $root.l0">
                        <image class="spot_icon" mode="aspectFill" :src="item.productPic+'?imageView2/1/w/216/h/158/'"></image>
                        <view class="travelMode">{{ item.travelMode }}</view>
                        <view class="spot_name multilineText2">{{item.productName}}</view>
                        <view class="saleNum" v-if="item.sellNum>0">{{'已有'+item.f0+'人出行'}}</view>
                        <view class="saleNum" style="opacity:0;" v-else>123</view>
                        <view class="spot_price" style="height:40rpx;">
                            <view class="price">
                                <block v-if="item.price>0">
                                    <view class="t">￥</view>
                                    <view class="p">{{item.price}}</view>
                                    <view class="start" v-if="item.startPriceFlag==1">起</view>
                                    <view class="line-through" v-if="item.retailPrice>0&&item.retailPrice>item.price">{{'￥'+item.retailPrice+''}}</view>
                                </block>
                            </view>
                        </view>
                    </view>
                    <view class="more" v-if="$root.g7>10" @click.stop="pageTo('/subPack/pages/lineList/lineList', { eventTag: 'index_lineList_click', eventName: '首页线路列表跳转' })">
                        <view class="">
                            <text class="">查</text>
                            <text class="">看</text>
                            <text class="">更</text>
                            <text class="">多</text>
                        </view>
                    </view>
                </scroll-view>
                <scroll-view class="spotlist u-skeleton-fillet" :scrollWithAnimation="true" :scrollX="true" v-if="showReId=='r4'">
                    <view class="spot" v-if="index<10" :key="index" v-for="(item, index) in $root.l1">
                        <image class="spot_icon" mode="aspectFill" :src="item.defaultPicUrl+'?imageView2/1/w/216/h/158/'"></image>
                        <view class="spot_name multilineText2">{{item.itemTitle}}</view>
                        <view class="saleNum">{{item.f1+'人付款'}}</view>
                        <view class="spot_price" style="height:40rpx;">
                            <view class="price">
                                <block v-if="item.productType===0">
                                    <view class="t">￥</view>
                                    <view class="p">{{item.minPrice}}</view>
                                    <view class="start" v-if="item.startPriceFlag==1">起</view>
                                    <view class="line-through" v-if="item.marketPrice>0&&item.marketPrice>item.minPrice">{{'￥'+item.marketPrice+''}}</view>
                                </block>
                                <block v-if="item.productType===1">
                                    <view class="t">￥</view>
                                    <view class="p">{{item.marketPrice}}</view>
                                    <view class="start">起</view>
                                    <view class="line-through" v-if="item.marketPrice>0&&item.marketPrice>item.minPrice">{{'￥'+item.marketPrice+''}}</view>
                                </block>
                            </view>
                        </view>
                    </view>
                    <view class="more" v-if="$root.g8>10" @click.stop="pageTo('/subPage/pages/goodslist/goodslist?catId=1285865298884374530', { eventTag: 'index_InnovationList_click', eventName: '首页文创列表跳转' })">
                        <view class="">
                            <text class="">查</text>
                            <text class="">看</text>
                            <text class="">更</text>
                            <text class="">多</text>
                        </view>
                    </view>
                </scroll-view>
            </view>
            <view class="navBar" id="midNavbar" :style="'top:'+fixednavH+'px'+';'">
                <scroll-view class="cate-box" :scrollWithAnimation="true" :scrollX="true">
                    <image class="cate cateImg" mode="aspectFill" src="/static/captured/06f0d0cd6aa81311.png" v-if="waterfallActiveIndex==0"></image>
                    <view :class="['cate','',index==waterfallActiveIndex?'active':'']" v-if="(item.show||item.type==9&&showVideo)&&!(waterfallActiveIndex==0&&index==0)" v-for="(item, index) in waterNavList">{{ item.name }}</view>
                </scroll-view>
            </view>
            <view class="waterfall" v-if="showIndex" @touchstart="wtouchStart($event)" @touchend="wtouchEnd($event)">
                <view class="">
                    <u-waterfall addTime="10" :bannerList="waterFallBanner" :bg="HOME_HOT_PRODUCT_BACK_IMG" class=" vue-ref" ref="uWaterfall" data-vue-generic="scoped" :recommendList="nearBySopt" :value="waterfallList" :vueSlots="['right','left']" :waterType="waterNavList[waterfallActiveIndex]['type']" @wclick="wclick()" @click="jumpWater()" @input="waterfallList = $event"></u-waterfall>
                </view>
            </view>
        </view>
    </view>
    <tab-bar class="" :grayFilter="configrights" v-if="showIndex"></tab-bar>
    <u-skeleton :animation="true" class="" :loading="loadingStatus"></u-skeleton>
    <view :class="['indexPopop','',configrights==1?'grayFilter':'']" v-if="showPopup" @click="e0($event)">
        <view class="follow-box" :style="'margin-top:'+menuButton.bottom+5+'px'+';'+'margin-right:'+5+'px'+';'">
            <image class="follow" src="https://eshopfile.zhiyousx.com/guide/follow.png" @click.stop="($event)"></image>
            <image class="follow-close" src="https://eshopfile.zhiyousx.com/guide/follow-close.png"></image>
        </view>
    </view>
    <view class="guide-box" :style="'top:'+menuButton.top-7+'px'+';'+'right:'+menuButton.width+15+'px'+';'" v-if="showGuide">
        <view :class="['guide-bg','',configrights==1?'grayFilter':'']">
            <image mode class="" src="/static/captured/b6d7cb1448b6a48b.png" @click="showPopupBox($event)"></image>
            <image mode class="guide-close" src="/static/captured/e48af04bf34a8d77.png" @click="closePopupBox($event)"></image>
        </view>
    </view>
    <u-popup class=" vue-ref" ref="uPopup" :maskCloseAble="false" mode="center" :value="showNotice" :vueSlots="['default']" @input="showNotice = $event">
        <view :class="['notice-box','',configrights==1?'grayFilter':'']">
            <image class="notice-img" mode="widthFix" :showMenuByLongpress="true" :src="popupData.advertPicUrl" @click="bannerClick(popupData, { eventTag: 'index_popup_click', eventName: '首页弹窗点击' })"></image>
            <image mode class="notice-close" src="/static/captured/e6819c818da3962f.png" @click="e1($event)"></image>
        </view>
    </u-popup>
    <u-popup class=" vue-ref" ref="giftPopup" :maskCloseAble="true" mode="center" :value="showGiftBag" :vueSlots="['default']" @input="showGiftBag = $event">
        <view :class="['giftBag','',configrights==1?'grayFilter':'']">
            <image class="giftBag-img" mode="widthFix" :src="giftBagData.image"></image>
            <view class="gift-mid">
                <view class="gift-title">{{ giftBagData.desc }}</view>
                <scroll-view class="card-box" :scrollY="true" :style="'height:'+(gbCl>3?'604rpx':gbCl==1?'250rpx':gbCl*151+'rpx')+';'">
                    <view :class="['',gbCl==1?'candItem1':'',gbCl>1?'candItem':'']" v-for="(it, i) in $root.l2">
                        <image mode class="it-img1" src="https://eshopfile.zhiyousx.com/166384545957301610.png" v-if="gbCl>1&&i==0"></image>
                        <image mode class="it-img2" src="https://eshopfile.zhiyousx.com/166384386610789834.png" v-if="gbCl>1&&i>0&&i<gbCl-1"></image>
                        <image mode class="it-img3" src="https://eshopfile.zhiyousx.com/166384545957301610.png" v-if="gbCl>1&&gbCl-i==1"></image>
                        <view class="item-card-box">
                            <view class="left">
                                <image class="" mode="aspectFill" :src="it.couponImage"></image>
                                <view class="info">
                                    <view class="name">{{ it.couponName }}</view>
                                    <view class="time">{{ it.f2+' -\n                      '+it.f3 }}</view>
                                </view>
                            </view>
                            <view class="right">
                                <view class="price" v-if="it.type==3">0<text class="" style="font-size:20rpx;color:#FF4848;">元购</text>
                                </view>
                                <view class="price" v-else>
                                    <text class="" style="font-size:20rpx;color:#FF4848;">￥</text>{{it.quota+''}}</view>
                                <view class="tips" v-if="it.type==2&&it.threshold==0">无门槛</view>
                                <view class="tips" v-if="it.type==1&&it.threshold>0">{{'满'+it.threshold+'元可用'}}</view>
                                <view class="tips" v-if="it.type==3">{{'可抵'+(it.deduction||1)+'张'}}</view>
                            </view>
                        </view>
                    </view>
                    <view class="" style="height:98rpx;" v-if="gbCl>1"></view>
                </scroll-view>
                <image mode class="giftBag-bottom-img" src="/static/captured/c28c4c6cd2db0904.png"></image>
                <view class="giftBag-but" @click="receiveGiftBag()">立即领取</view>
            </view>
        </view>
    </u-popup>
    <view class="" style="position:fixed;right:200vw;">
        <image alt class="" src="/static/captured/710b7e671f526dcd.png"></image>
        <image alt class="" src="/static/captured/af6a410c29caa90d.png"></image>
        <image alt class="" src="/static/captured/af3199434a78a9e7.png"></image>
        <image alt class="" src="/static/captured/4a342ccf156cae2c.png"></image>
        <image alt class="" src="/static/captured/a86db3dc9d3d0d76.png"></image>
        <image alt class="" src="/static/captured/57b17d26848dd35d.png"></image>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            tabBar: function() {
              i.e("components/tabBar/tabBar").then(function() {
                return resolve(i("d657"))
              }.bind(null, i)).catch(i.oe)
            },
            pandaView: function() {
              i.e("pages/index/components/panda1").then(function() {
                return resolve(i("08a3"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          data: function() {
            return {
              showGuide: !1,
              showPopup: !1,
              showGiftBag: !1,
              page: 1,
              loadMore: "loading",
              loadingStatus: !0,
              scrollTop: 0,
              swiperList: [{
                advertPicUrl: "https://eshopfile.zhiyousx.com/pro_2021_09_28_163282306317044645.jpg"
              }],
              navTop: 200,
              unit: 0,
              showIndex: !0,
              tagArr: [],
              touchStartX: 0,
              touchStartY: 0,
              headnav_img: [],
              midNavList: [],
              firstLevelNav: [],
              middleBanner: [],
              midNavOver: [],
              waterNavList: [{
                name: "为你推荐",
                type: 100,
                show: !0
              }, {
                name: "攻略",
                type: 10,
                show: !0
              }, {
                name: "游记",
                type: 11,
                show: !0
              }, {
                name: "Vlog",
                type: 9
              }, {
                name: "文创",
                type: 0,
                show: !0
              }],
              reNavList: [{
                name: "爆款推荐",
                sub: "限时特惠",
                id: "r1"
              }, {
                name: "权益卡",
                id: "r2",
                sub: ""
              }, {
                name: "精选线路",
                sub: "官方推荐",
                id: "r3"
              }, {
                name: "文创特产",
                sub: "品质严选",
                id: "r4"
              }],
              recommend: {},
              waterfallActiveIndex: 0,
              waterFallBanner: [],
              sysInfo: {},
              nearBySopt: [0, 0, 0, 0, 0, 0],
              rankList: [0, 0, 0],
              current: 1,
              size: 10,
              placeholder: "输入您想搜索的内容",
              tagActiveIndex: 0,
              searchHeight: 0,
              waterfallList: [],
              searchKeyList: [],
              getWaterFallState: !1,
              fixednavH: 20,
              showVideo: !0,
              fixednavTop: 100,
              fixedstyle: "",
              midNavTop: 500,
              headNavTop: 100,
              toggleTop: 0,
              cityid: "",
              refreshing: !1,
              scrollToLeft: 0,
              scrollAreaWidth: 0,
              tabIndex: 0,
              tabItemList: [],
              scrollAreaLeft: 0,
              hotAreamaxLeft: 0,
              hotAreaScrollLeft: 0,
              hotAreaIsEnd: !1,
              hotHasMax: !1,
              hotTouchStartX: 0,
              hotTouchStartY: 0,
              hotrightCount: 0,
              hplist: [],
              menuButton: {},
              showNotice: !1,
              popupData: "",
              giftBagData: "",
              gbCl: 0,
              configrights: 0,
              equityCardList: [],
              gridTemplateAreas: "",
              showReId: "r1",
              lineList: [],
              hotPlayList: [0, 0, 0],
              tabLeft: 0,
              showPandaSys: !0,
              xiaoqiVersion: 2,
              isShowPanda: !1,
              isClickNotice: !1,
              isHide: !1,
              isIntoHide: !1,
              isClickGiftBag: !1,
              culturalInnovationlist: [],
              HOME_HOT_PRODUCT_BACK_IMG: ""
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            },
            middleBannerFilter: function() {
              return this.middleBanner.filter((function(t, e) {
                return 0 != e
              }))
            },
            isHasPopup: function() {
              return this.showNotice || this.showGiftBag
            }
          },
          watch: {
            reNavList: function(t) {
              t && t.length > 0 && (this.showReId = t[0].id)
            }
          },
          filters: {
            filterM: function(t) {
              return t ? t < 1e4 ? t : function(t, e) {
                return Math.round(t * Math.pow(10, 1)) / Math.pow(10, 1)
              }(t / 1e4) + "万" : 0
            },
            timeFormat: function(t) {
              return t.split(" ")[0].replace(/-/g, ".")
            },
            travelModeFilter: function(t) {
              return {
                0: "全部",
                1: "跟团游",
                2: "一日游",
                3: "自由行",
                4: "研学游"
              } [t + 1]
            }
          },
          onLoad: function(e) {
            var i = this;
            uni.onAppHide((function() {
              i.showNotice = !1, i.showGiftBag = !1, i.isIntoHide = !0, i.isShowPanda = !1
            }));
            var a = uni.getMenuButtonBoundingClientRect();
            this.menuButton = a, uni.setStorageSync("NavH", a), this.searchHeight = this.$util.pxToRpx(a.top) + 16, this.fixednavH = a.top + this.$util.rpxToPx(150);
            var n = this;
            this.$util.getSysConfigure().then((function(t) {
              var e = !0;
              t.WX_VERSION && t.WX_VERSION.paramValue == getApp().globalData.version && (e = !1), i.showPandaSys = +t.HOME_PANDA_IS_SHOW.paramValue, i.xiaoqiVersion = +t.XIAOQI_VERSION.paramValue, e || (i.showPandaSys = !1), i.showVideo = e, getApp().globalData.showvideo = e, t.GRAY_THEME_FLAG && t.GRAY_THEME_FLAG.paramValue && (i.configrights = JSON.parse(t.GRAY_THEME_FLAG.paramValue))
            })), this.getConfig(), this.getBannerList([9, 13, 14, 12, 16, 17]), this.getRanking(), this.getHotPlay(), setTimeout((function() {
              n.getRecommendData(), n.getWaterFall(n.waterNavList[n.waterfallActiveIndex].type), n.getDomInfo().then((function(t) {
                n.midNavTop = t[0].top
              }))
            }), 1e3)
          },
          onPullDownRefresh: function() {
            var t = this;
            this.showIndex ? (this.current = 1, this.getWaterFallState = !0, this.$refs.uWaterfall.clear(), this.waterfallList = [], this.getBannerList([9, 13, 12, 14, 16, 17]), this.getRanking(), this.getHotPlay(), setTimeout((function() {
              t.getRecommendData(), t.getWaterFall(t.waterNavList[t.waterfallActiveIndex].type, "refresh")
            }), 1e3)) : this.refreshing = !0
          },
          onReachBottom: function() {
            !this.getWaterFallState && this.showIndex ? (this.current++, this.getWaterFall(this.waterNavList[this.waterfallActiveIndex].type)) : this.showIndex || this.$refs.cityPage.reachBottom()
          },
          onHide: function() {
            this.isHide = !0
          },
          onUnload: function() {
            uni.removeStorageSync("isShowTips")
          },
          onShow: function() {
            this.isIntoHide = !1, this.isHide = !1, uni.getStorageSync("showGuide") || (this.showGuide = !0), this.getBannerList([9, 13, 12, 14, 16, 17]), this.getItemHotRecommend(), this.getEquityCardList(), this.getLineList(), this.getCulturalInnovation(), this.getPopUpAdvert(), uni.getLocation()
          },
          onShareAppMessage: function() {
            var t = this.showIndex ? {} : this.$refs.cityPage.cityinfo,
              e = this.showIndex,
              i = "",
              a = e ? "/pages/index/index" : "/pages/index/index?cityId=".concat(this.cityid);
            return e || (i = t.cityAlbumUrls[0].toLowerCase()), {
              title: e ? "游陕西，发现旅行的深度" : "游陕西带你游".concat(t.cityName),
              imageUrl: e ? "" : -1 == i.indexOf(".gif") ? t.cityAlbumUrls[0] : getApp().globalData.shareimg,
              path: this.$util.setShareUrl(a)
            }
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, this.midNavTop > 0 && (this.fixedstyle = t.scrollTop + this.headNavTop > this.midNavTop ? "position:fixed;left:0rpx;top:".concat(this.headNavTop, "px") : "", !this.toggleTop && this.toggleTop < 400 && (this.toggleTop = this.midNavTop - this.headNavTop))
          },
          methods: {
            getConfig: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "GRAY_THEME_FLAG"
              }).then((function(e) {
                1 === e.code && (t.configrights = JSON.parse(e.data.paramValue))
              })), this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "HOME_HOT_PRODUCT_BACK_IMG"
              }).then((function(e) {
                1 === e.code && (t.HOME_HOT_PRODUCT_BACK_IMG = e.data ? e.data.paramValue : "#FFEBCC")
              }))
            },
            showPopupBox: function() {
              this.showPopup = !0, this.showGuide = !1, uni.setStorageSync("showGuide", !0)
            },
            closePopupBox: function() {
              this.showPopup = !1, this.showGuide = !1, uni.setStorageSync("showGuide", !0)
            },
            getPopUpAdvert: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/advert/selectPopUpAdvert").then((function(i) {
                i.data.data ? uni.getStorageSync("popupId") && uni.getStorageSync("popupId") == i.data.data.advertId ? e.getGiftBagForHome() : (e.popupData = i.data.data, e.showNotice = !0, uni.setStorageSync("popupId", i.data.data.advertId)) : e.getGiftBagForHome()
              }))
            },
            saleNumFormat1: function(t) {
              if (!t) return 0;
              var e = Number(t);
              if (e >= 1e3 && e < 1e4) e = e.toString().slice(0, 1) + "000+";
              else if (e >= 1e4) {
                var i = (e = (e / 1e4).toString()).indexOf(".");
                if (-1 === i) return e + "万+";
                var a = e.substring(0, i),
                  n = e.substring(i + 1, i + 2);
                e = 0 == n ? a + "万+" : a + "." + n + "万+"
              }
              return e
            },
            getaddss: function() {
              var e = this;
              uni.getLocation({
                type: "wgs84",
                success: function(i) {
                  uni.setStorageSync("location", {
                    longitude: i.longitude,
                    latitude: i.latitude
                  }), e.getnearBySpot(i.longitude, i.latitude)
                },
                fail: function(t) {
                  e.getnearBySpot("", "")
                }
              })
            },
            getLocation: function() {
              var e = this;
              t.getSetting({
                success: function(i) {
                  i.authSetting["scope.userLocation"] ? e.getaddss() : t.authorize({
                    scope: "scope.userLocation",
                    success: function(t) {
                      e.getaddss()
                    },
                    fail: function() {
                      e.getnearBySpot("", "")
                    }
                  })
                },
                fail: function() {
                  e.getnearBySpot("", "")
                }
              })
            },
            setNavPosition: function(t) {
              var e = this;
              this.headnav_img && this.headnav_img[0] ? (this.scrollDom(t), getApp().globalData.cityId = "") : setTimeout((function() {
                e.scrollDom(t), getApp().globalData.cityId = ""
              }), 1400)
            },
            toEquityCard: function(t) {
              this.$eventAnalyse.analyse({
                eventTag: "index_equityCard_click",
                eventName: "首页权益卡",
                eventParams: {
                  equityCardId: t.equityCardId,
                  name: t.name
                }
              }), this.$navigateTo({
                url: "/subPage/pages/equityCard/equityCard?equityCardId=" + t.equityCardId
              })
            },
            todetail: function() {
              this.$eventAnalyse.analyse({
                eventTag: "index_hotArea_click",
                eventName: "首页爆款推荐查看更多",
                eventParams: {
                  jumpUrl: "/subPage/pages/hotArea/hotArea?showType=3"
                }
              }), this.$navigateTo({
                url: "/subPage/pages/hotArea/hotArea?showType=3"
              })
            },
            toTicketDeatil: function(t) {
              this.$eventAnalyse.analyse({
                eventTag: "index_recommend_click",
                eventName: "首页爆款推荐门票",
                eventParams: {
                  itemId: t.itemId,
                  itemTitle: t.itemTitle
                }
              }), this.$navigateTo({
                url: "/subPage/pages/ticket_detail/ticket_detail?itemId=" + t.itemId
              })
            },
            getRecommendData: function() {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "product/app/v1/searchKey/searchKeyAndDefaultKey").then((function(e) {
                e.data && e.data.defaultSearchKeyList && e.data.defaultSearchKeyList[0] ? e.data.defaultSearchKeyList.forEach((function(e) {
                  t.searchKeyList.push(e.searchKey)
                })) : t.searchKeyList.push(t.placeholder)
              }))
            },
            toggleIndexPage: function() {
              this.showIndex = !0, this.cityid = "", this.topnavPosition = "";
              var t = this;
              t.getDomInfo().then((function(e) {
                t.midNavTop = t.showIndex ? e[2].height : 0
              }))
            },
            getBannerList: function(t) {
              var e = this,
                i = this;
              this.$uniApi.dataRequestNoLoading("post", "base/app/v1/advert/selectAppAdvert", {
                typeList: t
              }).then((function(t) {
                if (1 === t.code) {
                  var a = t.data.typeMap,
                    n = a[9] || [];
                  n.forEach((function(t) {
                    t.advertPicUrl = t.advertPicUrl + "?imageView2/1/w/750/h/560/"
                  })), e.swiperList = n, setTimeout((function() {
                    i.loadingStatus = !1
                  }), 500);
                  var o = a[12] || [];
                  e.firstLevelNav = a[16], e.middleBanner = a[17], e.getGridArea(o), e.headnav_img = a[13] || [], e.$nextTick((function() {
                    i.waterFallBanner = a[14] || []
                  }))
                } else e.$uni.showToast(t.msg)
              }))
            },
            initScrollData: function() {
              var e = this,
                i = uni.createSelectorQuery();
              i.select(".scroll-area").fields({
                rect: !0,
                size: !0
              }, (function(t) {
                e.scrollAreaLeft = t.left, e.scrollAreaWidth = t.width
              })), i.selectAll(".scroll-item").fields({
                rect: !0,
                size: !0,
                scrollOffset: !0
              }, (function(t) {
                t.forEach((function(t, i) {
                  e.tabItemList.push({
                    width: t.width,
                    left: t.left
                  })
                }))
              })), i.exec()
            },
            hotScroll: function(t) {
              var e = t.detail;
              this.hotAreaScrollLeft = e.scrollLeft, e.scrollLeft >= this.hotAreamaxLeft && (this.hotAreamaxLeft = e.scrollLeft), this.hotHasMax && e.scrollLeft < this.hotAreamaxLeft && (this.hotAreaIsEnd = !1)
            },
            scrolltolower: function() {
              this.hotHasMax = !0, this.hotAreaIsEnd = !0
            },
            scrollDom: function(t) {
              var e = 0;
              e = Number(e) + 1 + this.headnav_img.length;
              var i = this.tabItemList[e].left - this.scrollAreaLeft - (this.scrollAreaWidth - this.tabItemList[e].width) / 2;
              this.scrollToLeft = -1, this.scrollToLeft = i < 0 ? 0 : i
            },
            getRanking: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "base/app/v1/contentRanking/home/ranking?count=3").then((function(e) {
                t.rankList = e.data || []
              }))
            },
            getHotPlay: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "product/app/v1/line/hotPlay?count=3").then((function(e) {
                t.hotPlayList = e.data || []
              }))
            },
            getDomInfo: function() {
              var e = this;
              return new Promise((function(i) {
                setTimeout((function() {
                  e.$nextTick((function() {
                    var e = uni.createSelectorQuery();
                    e.select("#midNavbar").boundingClientRect(), e.exec((function(t) {
                      i(t)
                    }))
                  }))
                }), 500)
              }))
            },
            addRandomData: function() {
              for (var t = 0; t < 5; t++) {
                var e = this.$u.random(0, this.list.length - 1),
                  i = JSON.parse(JSON.stringify(this.list[e]));
                i.id = this.$u.guid(), this.flowList.push(i)
              }
            },
            showCity: function(e) {
              this.scrollDom(e.id), this.cityid = e.id, uni.pageScrollTo({
                duration: 0,
                scrollTop: 0
              }), this.showIndex = !1
            },
            swiperTopClick: function(t) {
              this.bannerClick(this.swiperList[t], {
                eventTag: "index_banner_click",
                eventName: "首页轮播banner点击"
              })
            },
            h5link: function(t) {
              this.$eventAnalyse.analyse({
                eventTag: "index_jnw_click",
                eventName: "交你玩",
                eventParams: {
                  jumpUrl: t
                }
              }), this.showVideo && (-1 != t.indexOf("?") && (t = (t = t.replace("?", "*")).replace("=", "+")), this.$navigateTo({
                url: "../webpage/webpage?url=".concat(t)
              }))
            },
            bannerClick: function(e, i) {
              console.log("obj---------", e), this.isClickNotice = !0, this.$eventAnalyse.analyse(r({
                eventParams: {
                  advertId: e.advertId,
                  advertName: e.advertName
                }
              }, i)), "2029467973894406146" != e.advertId && "2029468537810190337" != e.advertId ? (5 != e.linkType && (this.showNotice = !1), 0 === e.linkType && e.linkUrl ? (-1 != e.linkUrl.indexOf("?") && (e.linkUrl = e.linkUrl.replace("?", "*"), e.linkUrl = e.linkUrl.replace("=", "+")), this.$navigateTo({
                url: "../webpage/webpage?url=".concat(e.linkUrl)
              })) : 1 === e.linkType ? 1 === e.objType ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=".concat(e.linkUrl)
              }) : 4 === e.objType || 7 === e.objType || 8 === e.objType || 9 === e.objType ? this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=".concat(e.linkUrl)
              }) : 3 === e.objType ? this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=" + e.linkUrl
              }) : 2 === e.objType ? this.$util.cityJump(e.contentType, e.linkUrl) : 5 === e.objType && (["/pages/index/index", "/pages/spot_list/spot_list", "/pages/rankList/rankList", "/pages/mine/mine"].includes(e.linkUrlExtend) ? uni.switchTab({
                url: e.linkUrlExtend
              }) : this.$navigateTo({
                url: e.linkUrlExtend
              })) : 2 === e.linkType ? "wxf2cca76ae0520e33" == e.advertNo ? this.$navigateTo({
                url: e.linkUrl
              }) : t.openEmbeddedMiniProgram({
                appId: e.advertNo,
                path: e.linkUrl
              }) : 3 === e.linkType ? (uni.setStorageSync("richtext", e.linkUrl), this.$navigateTo({
                url: "/pages/richtext/richtext"
              })) : 8 == e.linkType && uni.navigateTo({
                url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=3&room_appid=wxf2cca76ae0520e33&amp;type=1&amp;share_openid=ojWxP5dKQbj5En3Vh8MDC23Y_J5k&amp;custom_params=&amp;close_picture_in_picture_mode=0&amp;open_share_ticket=0&amp;lottery_id=0"
              })) : uni.navigateTo({
                url: "/distribution/pages/ych/chat"
              })
            },
            getWaterFall: function(e, i, a) {
              var n = this;
              this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/queryWaterfallFlowList?contentType=".concat(100 == e ? "" : e, "&current=").concat(n.current, "&size=").concat(n.size)).then((function(t) {
                n.setWatterFall(t, i, a)
              })).catch((function(e) {
                uni.hideLoading(), n.getWaterFallState = !1
              }))
            },
            setWatterFall: function(e, i, a) {
              var n = this;
              e.data && e.data.records[0] || 1 == n.current || uni.showToast({
                title: "没有更多咯",
                icon: "none"
              });
              var o = n.showVideo;
              e.data.records.forEach((function(t) {
                (t = JSON.parse(JSON.stringify(t))).show = !0, [4, 9].includes(t.type) && !o && (t.show = !1), 0 == t.type && (t.salesNum = n.saleNumFormat1(t.salesNum)), n.waterfallList.push(t)
              })), "refresh" === i && uni.stopPullDownRefresh(), n.scrollTop > n.midNavTop - n.fixednavH && 1 === i && uni.pageScrollTo({
                duration: 0,
                scrollTop: n.midNavTop - n.fixednavH
              }), setTimeout((function() {
                n.getWaterFallState = !1
              }), 100)
            },
            wclick: function(t) {
              this.bannerClick(t, {
                eventTag: "index_waterfall_click",
                eventName: "瀑布流点击"
              })
            },
            getItemHotRecommend: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "product/app/v1/item/getItemHotRecommendNew").then((function(e) {
                var i = e.data,
                  a = [];
                if (i.preferentialVoList && a.push.apply(a, (0, n.default)(i.preferentialVoList)), e.data.list = a, t.recommend = e.data, a.length < 1) {
                  var o = t.reNavList.findIndex((function(t) {
                    return "r1" == t.id
                  }));
                  o >= 0 && t.reNavList.splice(o, 1)
                }
              }))
            },
            getEquityCardList: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("post", "product/app/equityCard/selectPage", {
                current: 1,
                size: 11
              }).then((function(e) {
                if (e.data && (t.equityCardList = e.data.records), t.equityCardList.length > 0) t.reNavList[1].sub = t.equityCardList.length + "张在售";
                else {
                  var i = t.reNavList.findIndex((function(t) {
                    return "r2" == t.id
                  }));
                  i >= 0 && t.reNavList.splice(i, 1)
                }
              }))
            },
            getLineList: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "product/app/v1/line/product/home/list?current=1&size=11").then((function(e) {
                if (e.data && (t.lineList = e.data.records), t.lineList.length < 1 || !t.showVideo) {
                  var i = t.reNavList.findIndex((function(t) {
                    return "r3" == t.id
                  }));
                  i >= 0 && t.reNavList.splice(i, 1)
                }
              }))
            },
            getCulturalInnovation: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "product/app/v1/item/getHomeItemSpecialty").then((function(e) {
                if (e.data && e.data.itemSpecialtyVOList && (t.culturalInnovationlist = e.data.itemSpecialtyVOList), t.culturalInnovationlist.length < 1) {
                  var i = t.reNavList.findIndex((function(t) {
                    return "r4" == t.id
                  }));
                  i >= 0 && t.reNavList.splice(i, 1)
                }
              }))
            },
            getnearBySpot: function(t, e) {
              var i = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpot/getAroundScenicSpot", {
                lnt: t || "",
                lat: e || ""
              }).then((function(t) {
                i.nearBySopt = t.data || []
              }))
            },
            changewaterType: function(t, e, i) {
              this.$eventAnalyse.analyse({
                eventTag: "index_WaterfallTab_click",
                eventName: "首页瀑布流导航",
                eventParams: {
                  name: i
                }
              }), this.getWaterFallState || e == this.waterfallActiveIndex || (this.waterfallActiveIndex = e, this.getWaterFallState = !0, this.$refs.uWaterfall.clear(), this.waterfallList = [], this.current = 1, this.getWaterFall(t, 1, this.scrollTop))
            },
            pageTo: function(t, e) {
              this.$eventAnalyse.analyse(r({
                eventParams: {
                  jumpUrl: t
                }
              }, e)), this.$navigateTo({
                url: t
              })
            },
            jumpNavigateTo: function(t) {
              var e = t.currentTarget.dataset.it;
              this.$eventAnalyse.analyse({
                eventTag: "index_waterfall_click",
                eventName: "瀑布流点击",
                eventParams: {
                  id: e.id,
                  title: e.title
                }
              }), this.$util.cityJump(e.type, e.id, e)
            },
            toSpot: function(t) {
              this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=" + t
              })
            },
            routerTo: function(e, i, a) {
              1 == a ? this.$eventAnalyse.analyse({
                eventTag: "index_zjq_click",
                eventName: "找景区",
                eventParams: {
                  jumpUrl: e
                }
              }) : this.$eventAnalyse.analyse({
                eventTag: "index_rankings_click",
                eventName: "游陕西榜单",
                eventParams: {
                  jumpUrl: e
                }
              }), t[i]({
                url: e
              })
            },
            goSearch: function(t) {
              var e = t == this.placeholder ? "" : t;
              this.$eventAnalyse.analyse({
                eventTag: "index_search_click",
                eventName: "首页搜索",
                eventParams: {
                  searchKey: e
                }
              }), this.$navigateTo({
                url: "/subPage/pages/searchpage/searchpage?default=" + e
              })
            },
            goSearch1: function() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
              this.$eventAnalyse.analyse({
                eventTag: "index_search_click",
                eventName: "首页搜索",
                eventParams: {
                  searchKey: this.searchKeyList[t] || ""
                }
              }), this.$navigateTo({
                url: "/subPage/pages/searchpage/searchpage?default=" + this.searchKeyList[t] || !1
              })
            },
            hottouchStart: function(t) {
              this.hotTouchStartX = t.touches[0].clientX, this.hotTouchStartY = t.touches[0].clientY
            },
            hottouchEnd: function(t) {
              var e = t.changedTouches[0].clientX - this.hotTouchStartX,
                i = t.changedTouches[0].clientY - this.hotTouchStartY;
              Math.abs(e) > 50 && Math.abs(e) > Math.abs(i) && e <= 0 && this.hotAreaIsEnd && (this.hotrightCount++, this.hotrightCount > 1 && this.$navigateTo({
                url: "/subPage/pages/hotArea/hotArea"
              }))
            },
            wtouchStart: function(t) {
              this.touchStartX = t.touches[0].clientX, this.touchStartY = t.touches[0].clientY
            },
            wtouchEnd: function(t) {
              var e = this.waterfallActiveIndex,
                i = t.changedTouches[0].clientX - this.touchStartX,
                a = t.changedTouches[0].clientY - this.touchStartY;
              Math.abs(i) > 50 && Math.abs(i) > Math.abs(a) && (i >= 0 ? e > 0 && (e--, this.changewaterType(this.waterNavList[e].type, e)) : e < this.waterNavList.length - 1 && (e++, this.changewaterType(this.waterNavList[e].type, e)))
            },
            getGiftBagForHome: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftBag/getGiftBagForHome").then((function(i) {
                if (1 !== i.code) return e.isShowPanda = !0, void e.$uni.showToast(i.msg);
                !i.data && uni.getStorageSync("unLoginGiftBagId") && (e.$uni.showToast("您已领取过该礼包"), uni.setStorageSync("unLoginGiftBagId", ""), e.showGiftBag = !1, e.isShowPanda = !0), !i.data || !i.data.giftBagCouponList[0] || uni.getStorageSync("giftBagId") && uni.getStorageSync("giftBagId") == i.data.giftBagId ? (e.showGiftBag = !1, e.isShowPanda = !0) : (e.giftBagData = i.data, e.gbCl = e.giftBagData.giftBagCouponList.length, uni.setStorageSync("unLoginGiftBagId", ""), e.$refs.giftPopup.open(), uni.getStorageSync("token") && uni.setStorageSync("giftBagId", i.data.giftBagId))
              }))
            },
            receiveGiftBag: function() {
              var e = this;
              uni.getStorageSync("token") || uni.setStorageSync("unLoginGiftBagId", this.giftBagData.giftBagId), this.$util.isLogin() && this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftBag/receive/" + this.giftBagData.giftBagId).then((function(t) {
                1 === t.code ? (e.$uni.showToast(t.data), e.showGiftBag = !1) : e.$uni.showToast(t.msg)
              }))
            },
            getGridArea: function(t) {
              this.midNavList = t
            },
            chunkArray: function(t, e) {
              for (var i = [], a = 0; a < t.length; a += e) i.push(t.slice(a, a + e));
              return i
            },
            objToArray: function(t) {
              return Object.keys(t).map((function(e) {
                return t[e]
              }))
            },
            isEven: function(t) {
              return t % 2 == 0 ? 2 : 1
            },
            changeType: function(t) {
              var e = this,
                i = this;
              i.showReId = t, this.$nextTick((function() {
                setTimeout((function() {
                  i.getDomInfo().then((function(t) {
                    i.midNavTop = t[0].top + e.scrollTop
                  }))
                }), 50)
              }))
            },
            goGoodInfo: function(t) {
              this.$eventAnalyse.analyse({
                eventTag: "index_lineDeatil_click",
                eventName: "首页精选线路",
                eventParams: {
                  productId: t.productId,
                  productName: t.productName
                }
              }), this.$navigateTo({
                url: "/subPack/pages/lineProductDetails/lineProductDetails?productId=" + t.productId
              })
            },
            goInnovationInfo: function(t) {
              this.$eventAnalyse.analyse({
                eventTag: "index_innovationDeatil_click",
                eventName: "首页文创特产详情",
                eventParams: {
                  itemId: t.itemId,
                  itemTitle: t.itemTitle
                }
              }), this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=" + t.itemId
              })
            },
            tabScrollToLeft: function(t) {
              this.tabLeft = t.detail.scrollLeft / t.detail.scrollWidth * this.$util.rpxToPx(80)
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background-color:#fff}.grayFilter{-webkit-filter:grayscale(100%)}.bg{background:#fff}.bg .linearbg{background:linear-gradient(180deg,rgba(0,0,0,.6),transparent);left:0;position:fixed;top:0;width:100%;z-index:8}.bg .head_container{left:0;padding:0 0 20rpx 40rpx;position:fixed;top:0;width:750rpx;z-index:10}.bg .head_container .logo_t{height:44rpx;width:216rpx}.bg .head_container .searchBoxTop{background-color:rgba(0,0,0,.3);border-radius:40rpx;box-shadow:0 0 30px 0 rgba(57,100,77,.1);height:60rpx;justify-content:space-between;margin-top:10rpx;width:670rpx}.bg .head_container .searchBoxTop .item,.bg .head_container .searchBoxTop{align-items:center;display:-webkit-flex;display:flex}.bg .head_container .searchBoxTop .item.btn{border-left:1px solid hsla(0,0%,100%,.4);color:#fff;font-size:26rpx;height:30rpx;justify-content:center;width:138rpx}.bg .head_container .searchBoxTop .item.txt{padding-left:30rpx}.bg .head_container .searchBoxTop .item.txt image{height:38rpx;width:38rpx}.bg .head_container .searchBoxTop .searchInput{color:#777474;font-size:26rpx;margin-left:16rpx;width:430rpx}.container{padding-bottom:60rpx;position:relative;z-index:5}.container .header{height:560rpx;position:relative;z-index:6}.container .body-box{background:#fff;border-radius:40rpx 40rpx 0rpx 0rpx;margin-top:-40rpx;min-height:100rpx;padding-top:30rpx;position:relative;width:750rpx;z-index:8}.container .body-box .tab-box .tab{display:-webkit-flex;display:flex;width:750rpx}.container .body-box .tab-box .tab .tabGrid{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;padding:0 30rpx;width:750rpx}.container .body-box .tab-box .tab .tabOver{display:-webkit-inline-flex;display:inline-flex}.container .body-box .tab-box .tab .tabOver .tabCon{display:-webkit-flex;display:flex;margin:0 16rpx}.container .body-box .tab-box .tab .tabOver .tabCon-nav{display:-webkit-flex;display:flex;margin-right:40rpx}.container .body-box .tab-box .tab .tabOver .tabCon-nav:first-child{margin-left:40rpx}.container .body-box .tab-box .tab .tabOver-nav{display:-webkit-inline-flex;display:inline-flex}.container .body-box .tab-ido-box{display:-webkit-flex;display:flex;justify-content:center;margin-top:20rpx;width:100%}.container .body-box .tab-ido-box .ido-box{background:rgba(0,0,0,.1);border-radius:4rpx;display:-webkit-flex;display:flex;height:4rpx;width:80rpx}.container .body-box .tab-ido-box .ido-box .ido{background:#f17373;border-radius:4rpx;height:4rpx;width:0}.container .body-box .tab-item{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;margin-top:20rpx;width:120rpx}.container .body-box .tab-item .tab_icon{height:84rpx;margin-bottom:10rpx;width:84rpx}.container .body-box .tab-item .tab_icon image{height:100%;width:100%}.container .body-box .tab-item text{color:rgba(30,27,25,.8);font-size:26rpx;line-height:38rpx;text-align:center}.container .body-box .tab-item-nav{margin-top:0;width:140rpx}.container .body-box .tab-item-nav .tab_icon{height:194rpx;width:100%}.container .body-box .ac_box{display:-webkit-flex;display:flex;justify-content:space-between;margin:48rpx 30rpx 0;padding:20rpx 0}.container .body-box .ac_box .ac_left{height:180rpx;width:335rpx}.container .body-box .ac_box .ac_left .ac_image{border-radius:20rpx;height:100%;width:335rpx}.container .body-box .ac_box .ac_right{height:100%}.container .body-box .ac_box .ac_right .rank-b,.container .body-box .ac_box .ac_right{display:-webkit-flex;display:flex;flex-direction:column;justify-content:space-between;width:335rpx}.container .body-box .ac_box .ac_right .rank-b{border-radius:20rpx}.container .body-box .ac_box .ac_right .rank-b .rank_top{align-items:center;display:-webkit-flex;display:flex;height:40rpx;justify-content:space-between}.container .body-box .ac_box .ac_right .rank-b .rank_top .name{color:#1e1b19;font-size:28rpx;font-weight:700}.container .body-box .ac_box .ac_right .rank-b .rank_top .sub{align-items:center;color:rgba(30,27,25,.6);display:-webkit-flex;display:flex;font-size:24rpx}.container .body-box .ac_box .ac_right .rank-b .rank_top .sub .icon{height:20rpx;width:20rpx}.container .body-box .ac_box .ac_right .rank-b .rank-swiper{height:180rpx;width:335rpx}.container .body-box .ac_box .ac_right .rank-b .rank-swiper .rank-item{height:180rpx;position:relative}.container .body-box .ac_box .ac_right .rank-b .rank-swiper .rank-item image{border-radius:20rpx;height:100%;width:100%}.container .body-box .ac_box .ac_right .rank-b .rank-swiper .rank-item .rank-op{border-radius:10rpx;display:-webkit-flex;display:flex;flex-direction:column;height:170rpx;justify-content:flex-end;left:0;position:absolute;top:0;width:316rpx}.container .body-box .ac_box .ac_right .rank-b .rank-swiper .rank-item .rank-op .name{color:#fff;font-size:26rpx;line-height:38rpx;margin-bottom:4rpx;padding:0 20rpx;text-align:center;width:316rpx}.container .body-box .ac_box .ac_right .rank-h{background:linear-gradient(135deg,#f2baa1,#fff6ea)}.container .body-box .re_box{background:linear-gradient(180deg,#fff0cb,rgba(255,187,166,.1) 57%);border:2rpx solid #fff;border-radius:20rpx;height:auto;margin:48rpx 30rpx 0;padding:20rpx 0;width:690rpx}.container .body-box .re_box .re-top{height:88rpx;white-space:nowrap;width:690rpx}.container .body-box .re_box .re-top .re-item{display:inline-block;height:88rpx;position:relative;width:230rpx}.container .body-box .re_box .re-top .re-item .re-b{align-items:center;display:-webkit-flex;display:flex;flex-direction:column}.container .body-box .re_box .re-top .re-item .re-b .title{color:#1e1b19;font-size:28rpx;line-height:40rpx}.container .body-box .re_box .re-top .re-item .re-b .sub{color:rgba(30,27,25,.6);font-size:24rpx;height:34rpx;line-height:34rpx;margin-top:10rpx}.container .body-box .re_box .re-top .active .title{color:#1e1b19;font-size:32rpx!important;font-weight:700}.container .body-box .re_box .re-top .active .sub{background:#ffbe5e;border-radius:20rpx;padding:0 20rpx}.container .body-box .re_box .re-top .reLine{position:relative}.container .body-box .re_box .re-top .reLine:after{background:rgba(0,0,0,.1);content:"";height:30rpx;left:0;position:absolute;top:29rpx;width:2rpx}.container .body-box .re_box .cardList{height:322rpx;padding-left:20rpx;white-space:nowrap;width:670rpx}.container .body-box .re_box .cardList .card{border-radius:20rpx;display:inline-block;height:322rpx;margin-right:20rpx;position:relative;width:320rpx}.container .body-box .re_box .cardList .card .card-bg{background:#fff;border-radius:20rpx;height:280rpx;margin-top:42rpx;width:320rpx}.container .body-box .re_box .cardList .card .card-info{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:100%;left:0;position:absolute;top:0;width:100%}.container .body-box .re_box .cardList .card .card-info .card-image{border-radius:10rpx;height:120rpx;margin-top:12rpx;width:200rpx}.container .body-box .re_box .cardList .card .card-info .card-t1{color:#333;font-size:26rpx;font-weight:500;margin-top:38rpx}.container .body-box .re_box .cardList .card .card-info .card-sub{color:#777;font-size:24rpx;margin-top:10rpx;text-align:center;width:280rpx}.container .body-box .re_box .cardList .card .card-info .card-btn{align-items:center;background:#cca674;border-radius:30rpx;color:#fff;display:-webkit-flex;display:flex;font-size:24rpx;font-weight:500;height:40rpx;justify-content:center;line-height:40rpx;margin-top:16rpx;width:120rpx}.container .body-box .re_box .cardList .card .card-info .dis{background:hsla(34,46%,63%,.5)}.container .body-box .re_box .lineList{margin-top:20rpx;padding-left:20rpx;white-space:nowrap;width:670rpx}.container .body-box .re_box .lineList .item{background:#fff;border-radius:20rpx;display:inline-block;margin-right:20rpx;padding:20rpx 0 20rpx 20rpx}.container .body-box .re_box .lineList .item .info-box{display:-webkit-flex;display:flex}.container .body-box .re_box .lineList .item .info-box .pic-box{border-radius:10rpx 20rpx 20rpx 20rpx;box-shadow:6rpx 0 0 0 rgba(0,0,0,.15),12rpx 0 0 0 rgba(0,0,0,.05);height:auto;max-width:208rpx;min-height:208rpx;position:relative;width:208rpx}.container .body-box .re_box .lineList .item .info-box .pic-box image{border-radius:10rpx 20rpx 20rpx 20rpx;height:100%;width:100%}.container .body-box .re_box .lineList .item .info-box .pic-box .lt-tip{background:rgba(35,32,32,.5);border-radius:10rpx 0 10rpx 0;color:#fff;font-size:24rpx;height:42rpx;left:0;line-height:42rpx;min-width:72rpx;padding:0 12rpx;position:absolute;text-align:center;top:0}.container .body-box .re_box .lineList .item .info-box .pic-box .bto-tip{align-items:center;background:rgba(35,32,32,.5);border-radius:0 0 20rpx 20rpx;bottom:0;display:-webkit-flex;display:flex;height:42rpx;justify-content:center;left:0;position:absolute;width:208rpx}.container .body-box .re_box .lineList .item .info-box .pic-box .bto-tip image{height:20rpx;margin-right:6rpx;width:20rpx}.container .body-box .re_box .lineList .item .info-box .pic-box .bto-tip .txt{color:#fff;font-size:24rpx}.container .body-box .re_box .lineList .item .info-box .r-info{display:-webkit-flex;display:flex;flex-direction:column;height:auto;justify-content:space-between;margin-left:20rpx;min-height:200rpx;padding-bottom:8rpx;width:422rpx}.container .body-box .re_box .lineList .item .info-box .r-info .nameTipsBox .name{color:#1e1b19;font-size:32rpx;line-height:46rpx;white-space:normal}.container .body-box .re_box .lineList .item .info-box .r-info .nameTipsBox .ad{color:rgba(30,27,25,.6);font-size:24rpx;line-height:34rpx}.container .body-box .re_box .lineList .item .info-box .r-info .nameTipsBox .rank{background:rgba(217,52,0,.1);border-radius:60rpx;color:#92322a;display:inline-block;font-size:24rpx;line-height:34rpx;margin-top:16rpx;padding:0 20rpx}.container .body-box .re_box .lineList .item .info-box .r-info .nameTipsBox .highLights{margin-top:8rpx}.container .body-box .re_box .lineList .item .info-box .r-info .nameTipsBox .highLights text{color:rgba(30,27,25,.4);font-size:24rpx;line-height:24rpx}.container .body-box .re_box .lineList .item .info-box .r-info .nameTipsBox .tips{display:-webkit-flex;display:flex;flex-wrap:wrap;height:34rpx;margin-top:16rpx;overflow:hidden}.container .body-box .re_box .lineList .item .info-box .r-info .nameTipsBox .tips .it{margin-right:10rpx}.container .body-box .re_box .lineList .item .info-box .r-info .nameTipsBox .tips .tag{border:1rpx solid rgba(30,27,25,.2);border-radius:40rpx;color:#92322a;font-size:24rpx;height:34rpx;line-height:32rpx;padding:0 20rpx}.container .body-box .re_box .lineList .item .info-box .r-info .price-box{align-items:flex-end;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:16rpx;width:100%}.container .body-box .re_box .lineList .item .info-box .r-info .price-box .pl{align-items:flex-end;color:#ff5411;display:-webkit-flex;display:flex;font-size:32rpx;font-weight:500;line-height:1}.container .body-box .re_box .lineList .item .info-box .r-info .price-box .pl .t{margin-left:4rpx}.container .body-box .re_box .lineList .item .info-box .r-info .price-box .pl .line-through{color:rgba(30,27,25,.6);font-size:28rpx;font-weight:400;line-height:1;margin-left:4rpx;text-decoration:line-through}.container .body-box .re_box .spotlist{display:inline-block;margin-top:20rpx;padding-left:20rpx;white-space:nowrap;width:670rpx}.container .body-box .re_box .spotlist .spot{background:#fff;border-radius:20rpx;display:inline-block;margin-right:20rpx;padding:10rpx;position:relative;vertical-align:top;width:232rpx}.container .body-box .re_box .spotlist .spot .tips{height:40rpx;left:0;position:absolute;top:0;width:60rpx}.container .body-box .re_box .spotlist .spot .travelMode{background:rgba(35,32,32,.5);border-radius:20rpx 0 20rpx 0;color:#fff;font-size:24rpx;height:42rpx;left:10rpx;line-height:42rpx;min-width:72rpx;padding:0 12rpx;position:absolute;text-align:center;top:10rpx}.container .body-box .re_box .spotlist .spot .spot_icon{border-radius:20rpx;height:158rpx;width:216rpx}.container .body-box .re_box .spotlist .spot .spot_name{color:#1e1b19;font-size:26rpx;height:60rpx;line-height:30rpx;margin:8rpx 0;white-space:normal}.container .body-box .re_box .spotlist .spot .saleNum{color:rgba(30,27,25,.6);font-size:24rpx;width:100%}.container .body-box .re_box .spotlist .spot .spot-bg{background:rgba(217,52,0,.1);border-radius:20rpx;padding-left:10rpx}.container .body-box .re_box .spotlist .spot .spot_price{display:-webkit-flex;display:flex;height:64rpx;justify-content:space-between;width:100%}.container .body-box .re_box .spotlist .spot .spot_price .price-box{display:-webkit-flex;display:flex;flex-direction:column;justify-content:space-around}.container .body-box .re_box .spotlist .spot .spot_price .price-box .dis-box{align-items:center;display:-webkit-flex;display:flex;height:24rpx}.container .body-box .re_box .spotlist .spot .spot_price .price-box .dis-box .maketPrice{color:rgba(30,27,25,.6);font-size:24rpx;margin-right:4rpx;text-decoration:line-through}.container .body-box .re_box .spotlist .spot .spot_price .price-box .dis-box .discount{color:#fd3003;font-size:24rpx}.container .body-box .re_box .spotlist .spot .spot_price .price{align-items:flex-end;display:-webkit-flex;display:flex}.container .body-box .re_box .spotlist .spot .spot_price .price .t{color:#fd3003;font-size:20rpx}.container .body-box .re_box .spotlist .spot .spot_price .price .p{color:#fd3003;font-size:32rpx;font-weight:700;line-height:1}.container .body-box .re_box .spotlist .spot .spot_price .price .start{color:rgba(30,27,25,.4);font-size:20rpx}.container .body-box .re_box .spotlist .spot .spot_price .price .line-through{color:rgba(30,27,25,.6);font-size:24rpx;line-height:30rpx;margin-left:4rpx;text-decoration:line-through}.container .body-box .re_box .spotlist .spot .spot_price .picBox{align-items:center;display:-webkit-flex;display:flex}.container .body-box .re_box .spotlist .spot .spot_price .picBox .discount{color:#fd3003;font-size:24rpx}.container .body-box .re_box .spotlist .spot .spot_price .picBox .picImg{height:64rpx;width:80rpx}.container .body-box .re_box .spotlist .spot .spot_price .ptxt{align-items:center;color:rgba(30,27,25,.6);display:-webkit-flex;display:flex;font-size:24rpx;height:52rpx}.container .body-box .re_box .spotlist .more{background:linear-gradient(90deg,hsla(0,0%,100%,.3),#fff);border-radius:6rpx 20rpx 20rpx 6rpx;display:inline-block;margin:0 20rpx;vertical-align:top;width:52rpx}.container .body-box .re_box .spotlist .more view{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:324rpx;justify-content:center;width:52rpx}.container .body-box .re_box .spotlist .more view text{color:#777;font-size:24rpx;margin:10rpx 0}.container .body-box .navBar{background:#fff;height:86rpx;margin-top:43rpx;padding-bottom:20rpx;padding-top:6rpx;position:-webkit-sticky;position:sticky;width:750rpx;z-index:20}.container .body-box .navBar .cate-box{height:60rpx;position:relative;white-space:nowrap;width:750rpx;z-index:22}.container .body-box .navBar .cate-box .cate{background:rgba(30,27,25,.05);border-radius:40rpx;color:#1e1b19;display:inline-block;font-size:28rpx;height:60rpx;line-height:60rpx;margin-right:20rpx;padding:0 32rpx;vertical-align:top}.container .body-box .navBar .cate-box .cate:first-child{margin-left:30rpx}.container .body-box .navBar .cate-box .active{background:#1e1b19;color:#fff;font-size:32rpx!important}.container .body-box .navBar .cate-box .cateImg{background:none;padding:0;width:168rpx}.guide-box{height:74rpx;position:fixed;width:385rpx;z-index:1000}.guide-box .guide-bg{height:74rpx;position:relative;width:385rpx}.guide-box .guide-bg image{background-size:100% 100%;height:100%;width:100%}.guide-box .guide-bg .guide-close{height:20rpx;left:15rpx;position:absolute;top:35rpx;width:20rpx}.indexPopop{background:"rgba(0, 0, 0, 0.5)";background:rgba(0,0,0,.5);display:-webkit-flex;display:flex;height:100%;justify-content:flex-end;left:0;position:fixed;top:0;width:100%;z-index:1000}.indexPopop .follow-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;width:440rpx}.indexPopop .follow-box .follow{height:698rpx;width:440rpx}.indexPopop .follow-box .follow-close{height:48rpx;margin-top:20rpx;width:144rpx}.waterfall{margin:20rpx 40rpx 166rpx;min-height:100vh;width:670rpx}.waterfall .warter{margin-bottom:40rpx}.waterfall .warter.left{padding-right:9rpx}.waterfall .warter.right{padding-left:9rpx}.waterfall .warter .imageBox{overflow:hidden;position:relative;width:326rpx}.waterfall .warter .imageBox .mainimg{border-radius:20rpx;float:left;width:326rpx}.waterfall .warter .imageBox .square{height:326rpx;width:326rpx}.waterfall .warter .imageBox .vlog{height:36rpx;position:absolute;right:16rpx;top:16rpx;width:36rpx;z-index:2}.waterfall .warter .imageBox .rankname{background:linear-gradient(56deg,#f99f1d,#fe581e);border-radius:20rpx 20rpx 2rpx 20rpx;bottom:100rpx;box-shadow:5rpx 4rpx 2rpx 0 rgba(230,151,64,.3);color:#fff;font-size:22rpx;font-weight:700;height:40rpx;left:10rpx;line-height:40rpx;max-width:266rpx;padding:0 25rpx;position:absolute;z-index:3}.waterfall .warter .imageBox .rank{background:#fff;border-radius:20rpx 40rpx 2rpx 20rpx;bottom:10rpx;box-shadow:0 0 30rpx 0 hsla(32,41%,61%,.1);height:100rpx;left:10rpx;padding:0 25rpx;position:absolute;width:280rpx;z-index:2}.waterfall .warter .imageBox .rank .name{color:#222;font-size:24rpx;margin-top:26rpx}.waterfall .warter .imageBox .rank .spot{color:#bbb;font-size:22rpx}.waterfall .warter .title{color:#282828;font-size:26rpx;line-height:36rpx;margin-top:20rpx;padding-left:9rpx}.waterfall .warter .readNum{display:-webkit-flex;display:flex;justify-content:space-between;margin-top:18rpx}.waterfall .warter .readNum .price{color:#ff5411;font-size:24rpx}.waterfall .warter .readNum .author{align-items:center;display:-webkit-flex;display:flex}.waterfall .warter .readNum .author image{border-radius:100%;height:30rpx;margin-right:10rpx;width:30rpx}.waterfall .warter .readNum .author text,.waterfall .warter .readNum .num{color:#a6a6a6;font-size:24rpx}.waterfall .swiper{height:460rpx;margin-bottom:40rpx;width:325rpx}.waterfall .swiper .tab_item{height:460rpx;width:100%}.waterfall .swiper .tab_item image{border-radius:20rpx;height:460rpx;width:100%} .u-mode-center-box{background-color:initial!important}.notice-box{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;width:600rpx}.notice-box .notice-img{width:600rpx}.notice-box .notice-close{background-size:100% 100%;height:80rpx;margin-top:24rpx;width:80rpx}.giftBag{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;justify-content:center}.giftBag .giftBag-img{position:relative;width:630rpx;z-index:3}.giftBag .gift-mid{background:linear-gradient(0deg,#ff3329,#ff7f56);border-radius:0 0 60rpx 60rpx;height:auto;margin-top:-2px;overflow:hidden;padding:35rpx 20rpx 150rpx;position:relative;width:630rpx;z-index:2}.giftBag .gift-mid .gift-title{color:#fff;font-size:36rpx;font-weight:600;line-height:40rpx;margin-bottom:35rpx;text-align:center;text-shadow:0 2rpx 4rpx rgba(87,19,0,.4);width:100%}.giftBag .gift-mid .card-box{background:#db4821;border-radius:20rpx;max-height:604rpx;padding:23rpx 0 0;width:590rpx}.giftBag .gift-mid .card-box .candItem{height:151rpx;margin:auto;position:relative;width:546rpx}.giftBag .gift-mid .card-box .candItem:not(:nth-last-child(2))::after{background-image:linear-gradient(90deg,#af9060,#af9060 50%,#fffbe9 0);background-repeat:repeat-x;background-size:12rpx 2rpx;bottom:-2rpx;content:"";height:2px;left:14rpx;position:absolute;width:519rpx}.giftBag .gift-mid .card-box .candItem .it-img1,.giftBag .gift-mid .card-box .candItem .it-img2{height:151rpx;width:546rpx}.giftBag .gift-mid .card-box .candItem .it-img3{height:151rpx;transform:rotate(180deg);width:546rpx}.giftBag .gift-mid .card-box .item-card-box{display:-webkit-flex;display:flex;height:151rpx;justify-content:space-between;left:0;position:absolute;top:0;width:546rpx}.giftBag .gift-mid .card-box .item-card-box .left{display:-webkit-flex;display:flex;margin-left:23rpx}.giftBag .gift-mid .card-box .item-card-box .left image{background:#af9060;border-radius:10rpx;height:104rpx;margin-top:23rpx;width:104rpx}.giftBag .gift-mid .card-box .item-card-box .left .info{display:-webkit-flex;display:flex;flex-direction:column;height:90rpx;justify-content:space-between;margin-left:13rpx;margin-top:30rpx;width:270rpx}.giftBag .gift-mid .card-box .item-card-box .left .info .name{color:#282828;font-size:24rpx;font-weight:500;line-height:26rpx}.giftBag .gift-mid .card-box .item-card-box .left .info .time{color:#8b8b8b;font-size:16rpx;line-height:16rpx}.giftBag .gift-mid .card-box .item-card-box .right{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:90rpx;justify-content:space-between;margin-right:40rpx;margin-top:30rpx}.giftBag .gift-mid .card-box .item-card-box .right .price{color:#ff4848;font-size:42rpx;font-weight:500;line-height:42rpx}.giftBag .gift-mid .card-box .item-card-box .right .tips{color:#8b8b8b;font-size:16rpx;line-height:16rpx}.giftBag .gift-mid .card-box .candItem1{background:#fffbe9;border-radius:10rpx;display:-webkit-flex;display:flex;height:150rpx;justify-content:space-between;margin:auto;position:relative;width:544rpx}.giftBag .gift-mid .giftBag-bottom-img{bottom:-5rpx;height:241rpx;left:-7rpx;position:absolute;width:643rpx}.giftBag .gift-mid .giftBag-but{background:linear-gradient(180deg,#fff6e9,#ffab73);border-radius:40rpx;bottom:38rpx;box-shadow:0 4rpx 8rpx 0 rgba(87,19,0,.4);color:#e52121;font-size:30rpx;font-weight:500;height:80rpx;left:135rpx;line-height:80rpx;position:absolute;text-align:center;width:360rpx}
</style>
