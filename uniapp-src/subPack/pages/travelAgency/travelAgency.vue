<template>
<view class="box" :hidden="!detailObj.travelAgencyId">
    <view :class="['navbar','',navBarBg==1&&tabCurrent===0?'wbk':'']" :style="'height:'+searchHeight+38+'px'+';'+'padding-top:'+searchHeight+'px'+';'">
        <view class="arrowleftBox" @click="back()">
            <image class="header_icon" mode="aspectFit" src="/static/zhouWei-navBar/icon_home_black.png" v-if="firstPage"></image>
            <image class="header_icon" mode="aspectFit" src="/static/zhouWei-navBar/icon_back_black.png" v-else></image>
        </view>
    </view>
    <view class="title-bj" :style="'padding-top:'+searchHeight+38+'px'+';'+'background:'+'url('+detailObj.image+')'+';'+'background-position:'+'center center'+';'+'background-size:'+'cover'+';'">
        <view class="title-box" :style="'background:'+'linear-gradient( 180deg, '+$root.m0+' 0%, #F5F5F5 100%)'+';'">
            <image class="title-img" mode="aspectFill" :src="detailObj.logo"></image>
            <view class="remark">
                <view class="name">
                    <view class="text _p">{{detailObj.travelAgencyName}}</view>
                    <view class="lable" v-if="detailObj.auth">
                        <image class="lable-icon" src="/static/captured/13a4d10ef0417ba4.png"></image>认证</view>
                </view>
                <view class="brief" v-if="detailObj.firmName" @click="openModal(1)">
                    <view class="text singleLineText _p">{{detailObj.firmName}}</view>
                    <image class="brief-icon" src="https://eshopfile.zhiyousx.com/169682424773950642.png"></image>
                </view>
            </view>
        </view>
    </view>
    <view class="coupeList" v-if="tabCurrent===0&&couponList&&couponList[0]">
        <scroll-view class="coupeScroll" :scrollX="true">
            <view class="coupeItem" :key="couponId" v-for="(item, __i0__) in couponList">
                <view class="info">
                    <view class="price" v-if="item.type==3">
                        <text class="num">0</text>
                        <text class="rmbIcon">元购</text>
                    </view>
                    <view class="price" v-else>
                        <text class="rmbIcon">￥</text>
                        <text class="num">{{item.quota}}</text>
                    </view>
                    <text class="type" v-if="item.type==1&&item.threshold>0">{{'满'+item.threshold+'可用'}}</text>
                    <text class="type" v-if="item.type==2&&item.threshold==0">无门槛</text>
                    <view class="type" v-if="item.type==3">
                        <block v-if="item.couponStates==2">{{'可抵扣'+item.deduction+''}}</block>
                        <block v-else>
                            <block v-if="item.memberReceivedNum==0">{{'可抵扣'+item.deduction+'人'}}</block>
                            <block v-else>
                                <block v-if="item.showMemberDeductionNum==0">
                                    <block v-if="item.canUseNum>0">{{'可用'+item.canUseNum+'张'}}</block>
                                    <tempalte class="" :vueSlots="['default']" v-else>{{'可抵扣'+item.deduction+'人'}}</tempalte>
                                </block>
                                <block v-else>{{'已抵扣('+item.deductionUsedNum+'/'+item.deduction+')'}}</block>
                            </block>
                        </block>
                    </view>
                    <text class="name">{{item.useExplain}}</text>
                </view>
                <view class="pickUp">
                    <view class="btn c-btn" v-if="item.couponStates==1">立即领取</view>
                    <view class="btn d-btn" v-if="item.couponStates==2" @click="noCoupe()">已抢光</view>
                    <view class="btn c-btn" v-if="item.couponStates==3">去使用</view>
                </view>
            </view>
        </scroll-view>
    </view>
    <scroll-view class="nav-center" id="navCenter" :scrollX="true" :style="'position:'+'sticky'+';'+'top:'+searchHeight+38+'px'+';'" v-if="$root.g0">
        <view :class="['nav-item','',activeNav==index?'active':'']" :key="index" v-for="(item, index) in navList">{{''+item}}<label class="nav-line _span"></label>
        </view>
    </scroll-view>
    <view class="solution" id="solution" v-if="tabCurrent==0">
        <view :class="['item','',!item.stockStatus||item.sellOut?'disable':'']" :key="index" v-for="(item, index) in $root.l1">
            <view class="info-box">
                <view class="pic-box">
                    <image class="" mode="aspectFill" :src="item.productPic"></image>
                    <view class="lt-tip">{{item.f0}}</view>
                    <view class="bto-tip" v-if="item.cityNames">
                        <image mode class="" src="/static/captured/b783dbfada461ad4.png"></image>
                        <view class="txt">{{item.g1[0]+'出发'}}</view>
                    </view>
                </view>
                <view class="r-info">
                    <view class="nameTipsBox">
                        <view class="name multilineText2">{{ item.productName }}<view class="star-box" v-if="item.level>0">
                                <view class="star">{{''+item.level+'A'}}</view>
                            </view>
                        </view>
                        <view class="highLights singleLineText" v-if="item.lineHighlightLabelList">
                            <text class="" :key="idx" v-for="(ele, idx) in item.l0">{{ele+(idx===ele.g2-1?'':'/')}}</text>
                        </view>
                        <view class="tips">
                            <view class="tag it" v-if="item.lineTagList&&item.lineTagList[0]" :key="index" v-for="(tag, __i1__) in item.lineTagList">{{tag}}</view>
                        </view>
                    </view>
                    <view class="price-box">
                        <view class="item-btn" v-if="!item.stockStatus||item.sellOut">售罄</view>
                        <block v-else>
                            <view class="pl" v-if="item.price||item.price===0">{{'￥'+item.price+''}}<view class="ptxt t" v-if="item.startPriceFlag">起</view>
                                <view class="line-through" v-if="item.retailPrice>0&&item.retailPrice>item.price">{{'￥'+item.retailPrice}}</view>
                            </view>
                            <view class="" v-else></view>
                        </block>
                        <view class="pr ptxt" v-if="item.saleNum>0">{{'已有'+item.f1+'人出行'}}</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="empty" v-if="$root.g3">
            <empty-state class="" imgUrl="https://eshopfile.zhiyousx.com/noOrder@2x.png" text="暂无产品"></empty-state>
        </view>
        <view class="loadMore" v-else>
            <u-loadmore bgColor="#f7f7f7" class="" color="#ccc" iconColor="#ccc" :status="loadMore"></u-loadmore>
        </view>
    </view>
    <view class="guide" v-else>
        <view class="guide-item" :key="index" v-for="(item, index) in $root.l2">
            <image class="guide-img" mode="aspectFill" :src="item.picUrl"></image>
            <view class="guide-info">
                <view class="p1">
                    <view class="name singleLineText _p">{{item.nick}}</view>
                    <view class="document" v-if="item.level">
                        <image class="document-icon" mode="aspectFill" :src="documentList[item.level].icon"></image>
                        <view class="document-text _p">{{documentList[item.level].text}}</view>
                    </view>
                </view>
                <view class="p2 multilineText2">{{item.m1}}</view>
            </view>
            <view class="application">
                <view class="text _p">报名他的团</view>
                <u-icon class="application-icon" color="#FF5411FF" name="arrow-right" size="20"></u-icon>
            </view>
        </view>
        <view class="empty" v-if="$root.g4">
            <empty-state class="" imgUrl="https://eshopfile.zhiyousx.com/noOrder@2x.png" text="暂无内容"></empty-state>
        </view>
        <view class="loadMore" v-else>
            <u-loadmore bgColor="#f7f7f7" class="" color="#ccc" iconColor="#ccc" :status="loadMore"></u-loadmore>
        </view>
    </view>
    <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="businessShow" :vueSlots="['default']" zIndex="10075" @input="businessShow = $event">
        <view class="detailBox">
            <scroll-view class="content" :scrollY="true">
                <view class="busins-title">{{detailObj.firmName}}</view>
                <view class="busins-item" v-if="detailObj.intro">
                    <view class="title">
                        <text class="">商家简介</text>
                        <view class="expend-box" @click="expandChange('showIntro')">
                            <image mode class="" :src="companyInfoShow.showIntro?'https://eshopfile.zhiyousx.com/171522512717616029.png':'https://eshopfile.zhiyousx.com/171522508191478664.png'"></image>
                        </view>
                    </view>
                    <text class="intro" v-if="companyInfoShow.showIntro">{{detailObj.intro}}</text>
                </view>
                <view class="busins-item" v-if="detailObj.certificateImageBusinessPermission">
                    <view class="title">
                        <text class="">经营许可证</text>
                        <view class="expend-box" @click="expandChange('showCertificate')">
                            <image mode class="" :src="companyInfoShow.showCertificate?'https://eshopfile.zhiyousx.com/171522512717616029.png':'https://eshopfile.zhiyousx.com/171522508191478664.png'"></image>
                        </view>
                    </view>
                    <image class="" mode="aspectFill" :src="detailObj.certificateImageBusinessPermission" v-if="companyInfoShow.showCertificate"></image>
                </view>
                <view class="busins-item" v-if="detailObj.certificateImageBusiness">
                    <view class="title">
                        <text class="">营业执照</text>
                        <view class="expend-box" @click="expandChange('showPermission')">
                            <image mode class="" :src="companyInfoShow.showPermission?'https://eshopfile.zhiyousx.com/171522512717616029.png':'https://eshopfile.zhiyousx.com/171522508191478664.png'"></image>
                        </view>
                    </view>
                    <image class="" mode="aspectFill" :src="detailObj.certificateImageBusiness" v-if="companyInfoShow.showPermission"></image>
                </view>
                <view class="busins-item" v-if="detailObj&&detailObj.certificateImageOtherList&&detailObj.certificateImageOtherList[0]">
                    <view class="title">
                        <text class="">其他证件</text>
                        <view class="expend-box" @click="expandChange('showOther')">
                            <image mode class="" :src="companyInfoShow.showOther?'https://eshopfile.zhiyousx.com/171522512717616029.png':'https://eshopfile.zhiyousx.com/171522508191478664.png'"></image>
                        </view>
                    </view>
                    <block v-if="companyInfoShow.showOther">
                        <image class="otherImg" mode="aspectFill" :src="item" :key="index" v-for="(item, index) in detailObj.certificateImageOtherList"></image>
                    </block>
                </view>
                <block v-if="$root.g5">
                    <view class="busins-item" :key="index" v-for="(item, index) in detailObj.tagList">
                        <view class="title">
                            <text class="">{{item.tagName}}</text>
                            <view class="expend-box">
                                <image mode class="" :src="item.isShow?'https://eshopfile.zhiyousx.com/171522512717616029.png':'https://eshopfile.zhiyousx.com/171522508191478664.png'"></image>
                            </view>
                        </view>
                        <u-parse class="" :html="item.tagDesc" v-if="item.isShow"></u-parse>
                    </view>
                </block>
            </scroll-view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="labelShow" :vueSlots="['default']" @input="labelShow = $event">
        <view class="detailBox">
            <scroll-view class="content" :scrollY="true">
                <u-parse class="" :html="htmlContent" :lazyLoad="true" :tagStyle="parseStyle"></u-parse>
            </scroll-view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="" :closeable="false" mode="bottom" :value="contactShow" :vueSlots="['default']" @input="contactShow = $event">
        <view class="selectBox">
            <view class="selectItem" v-if="detailObj.customerServicePhone" @click="call(detailObj.customerServicePhone)">
                <view class="left">
                    <image mode class="" src="https://eshopfile.zhiyousx.com/171530565065695119.png"></image>
                    <text class="title">客服电话</text>
                </view>
                <view class="right">{{detailObj.customerServicePhone}}</view>
            </view>
            <view class="selectItem" v-if="detailObj.customerServiceImage" @click="e0($event)">
                <view class="left">
                    <image mode class="" src=" https://eshopfile.zhiyousx.com/171523926111536931.png"></image>
                    <text class="title">客服微信</text>
                </view>
                <view class="right">
                    <image mode class="" src="https://eshopfile.zhiyousx.com/171530576397585851.png"></image>
                </view>
            </view>
            <view class="close" @click="e1($event)">取消</view>
        </view>
    </u-popup>
    <u-popup borderRadius="20" class="OrCodePop" :closeable="false" mode="center" :value="showOrCode" :vueSlots="['default']" width="560" @input="showOrCode = $event">
        <view class="picBox">
            <image class="" mode="widthFix" :showMenuByLongpress="true" :src="detailObj.customerServiceImage"></image>
        </view>
        <view class="tips">长按识别二维码即可联系客服~</view>
    </u-popup>
    <view class="mytabbar">
        <view :class="['tabbarItem','',index===2&&!detailObj.customerServiceImage&&!detailObj.customerServicePhone?'tabHide':'']" :key="index" v-for="(item, index) in tabbarList">
            <image class="icon" mode="scaleToFill" :src="tabCurrent===index?item.activeIcon:item.icon"></image>
            <view class="title">{{item.title}}</view>
        </view>
    </view>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              EmptyState: function() {
                n.e("components/empty/empty").then(function() {
                  return resolve(n("a427"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                loadMore: "loading",
                activeDays: 0,
                fontColor: "#fff",
                searchHeight: 0,
                foldRemark: !1,
                foldLable: !0,
                activeNav: 0,
                navList: ["全部"],
                couponList: [],
                travelAgentTag: "全部",
                companyInfoShow: {
                  showIntro: !0,
                  showCertificate: !1,
                  showPermission: !1,
                  showOther: !1
                },
                businessShow: !1,
                labelShow: !1,
                contactShow: !1,
                showOrCode: !1,
                parseStyle: {
                  p: "word-break: break-all;line-height:40rpx;color:rgba(0, 0, 0, 0.6);font-size:26rpx",
                  img: "border-radius: 20rpx;margin-top: 10rpx;"
                },
                typeList: ["全部", "跟团游", "一日游", "自由行", "研学游"],
                activeType: 0,
                current: 1,
                tabbarList: [{
                  title: "首页",
                  icon: "https://eshopfile.zhiyousx.com/171515206402454725.png",
                  activeIcon: "https://eshopfile.zhiyousx.com/171515176778099707.png"
                }, {
                  title: "导游领队",
                  icon: "https://eshopfile.zhiyousx.com/171515183414381019.png",
                  activeIcon: "https://eshopfile.zhiyousx.com/171515201588072789.png"
                }, {
                  title: "联系客服",
                  icon: "https://eshopfile.zhiyousx.com/171515187629320210.png"
                }, {
                  title: "我的订单",
                  icon: "https://eshopfile.zhiyousx.com/171515193733294508.png"
                }],
                tabCurrent: 0,
                goodList: [1, 2, 3, 4, 5, 6, 7],
                productList: [],
                navCenterTop: 0,
                scrollTop: 0,
                navBarBg: 0,
                documentList: [{}, {
                  icon: "https://eshopfile.zhiyousx.com/169699473647568815.png",
                  text: "初级导游证"
                }, {
                  icon: "https://eshopfile.zhiyousx.com/169699472239301018.png",
                  text: "中级导游证"
                }, {
                  icon: "https://eshopfile.zhiyousx.com/169699470670535134.png",
                  text: "高级导游证"
                }, {
                  icon: "https://eshopfile.zhiyousx.com/169699458419180035.png",
                  text: "特级导游证"
                }],
                detailObj: {},
                travelAgencyId: "",
                htmlContent: "",
                isRefresh: !1,
                tourGuideList: [],
                firstPage: !1,
                shareMemberId: ""
              }
            },
            filters: {
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
            onReady: function() {},
            onLoad: function(e) {
              if (e.scene) this.getScene(e.scene);
              else {
                this.travelAgencyId = e.travelAgencyId, this.shareMemberId = e.shareMemberId, this.getDetail(), this.getTravelAgentTag(), this.getProductList();
                var n = uni.getMenuButtonBoundingClientRect();
                this.searchHeight = n.top;
                var i = getCurrentPages();
                1 != i.length || ["pages/index/index", "pages/index/index"].includes(i[0].route) || (this.firstPage = !0)
              }
            },
            onUnload: function() {},
            onShow: function() {
              this.getSpotCoupons(), uni.showShareMenu({
                withShareTicket: !0,
                menus: ["shareAppMessage", "shareTimeline"]
              })
            },
            onShareAppMessage: function() {
              var t = "/subPack/pages/travelAgency/travelAgency?travelAgencyId=".concat(this.travelAgencyId);
              return {
                title: this.detailObj.shareDesc ? this.detailObj.shareDesc : this.detailObj.travelAgencyName,
                imageUrl: this.detailObj.shareImage ? this.detailObj.shareImage : this.detailObj.logo,
                path: this.$util.setShareUrl(t)
              }
            },
            onShareTimeline: function() {
              var t = "/subPack/pages/travelAgency/travelAgency?travelAgencyId=".concat(this.travelAgencyId);
              return {
                title: this.detailObj.shareDesc ? this.detailObj.shareDesc : this.detailObj.travelAgencyName,
                imageUrl: this.detailObj.shareImage ? this.detailObj.shareImage : this.detailObj.logo,
                query: "travelAgencyId=".concat(this.travelAgencyId),
                path: this.$util.setShareUrl(t)
              }
            },
            onPageScroll: function(t) {
              this.scrollTop = t.scrollTop, this.scrollTop >= this.navCenterTop - this.searchHeight - 38 ? (this.fontColor = "#000", this.navBarBg = 1) : (this.fontColor = "#fff", this.navBarBg = 0)
            },
            onReachBottom: function() {
              "loadmore" == this.loadMore && (this.current += 1, 0 === this.tabCurrent ? this.getProductList() : 1 === this.tabCurrent && this.getTourGuideList())
            },
            methods: {
              getScene: function(t) {
                var e = this;
                this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/qrCodeScene/getScene?sceneId=" + t).then((function(t) {
                  1 === t.code && (e.travelAgencyId = t.data.scene.split("=")[1], e.shareMemberId = t.data.referenceId, e.getFun())
                }))
              },
              getFun: function() {
                this.getDetail(), this.getTravelAgentTag(), this.getProductList();
                var e = uni.getMenuButtonBoundingClientRect();
                this.searchHeight = e.top;
                var n = getCurrentPages();
                1 != n.length || ["pages/index/index", "pages/index/index"].includes(n[0].route) || (this.firstPage = !0)
              },
              getDetail: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/travelAgency/appDetail/" + this.travelAgencyId).then((function(e) {
                  1 === e.code && (t.detailObj = e.data, t.getTagShow(), t.navTop())
                }))
              },
              getTagShow: function() {
                this.detailObj.tagList = this.detailObj.tagList ? this.detailObj.tagList : [];
                var t = JSON.parse(JSON.stringify(this.detailObj.tagList));
                (t = t.filter((function(t) {
                  return t.tagDesc
                }))).forEach((function(t) {
                  t.isShow = !1
                })), this.detailObj.tagList = t
              },
              getProductList: function() {
                var t = this;
                this.loadMore = "loading";
                var e = {
                  size: 10,
                  current: this.current,
                  travelAgencyId: this.travelAgencyId,
                  sortType: 3
                };
                "全部" != this.travelAgentTag && (e.travelAgentTag = this.travelAgentTag), this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/line/product/list", e).then((function(e) {
                  var n;
                  1 === e.code && (t.loadMore = e.data.records.length > 9 ? "loadmore" : "nomore", (n = t.productList).push.apply(n, (0, a.default)(e.data.records)))
                }))
              },
              getTravelAgentTag: function() {
                var t = this,
                  e = {
                    travelAgencyId: this.travelAgencyId
                  };
                this.$uniApi.dataRequestNoLoading("get", "product/app/v1/line/product/getLineTravelAgentTag", e).then((function(e) {
                  if (1 === e.code) {
                    var n = e.data || [],
                      i = t;
                    n.forEach((function(t) {
                      i.navList.push(t)
                    }))
                  }
                }))
              },
              getSpotCoupons: function() {
                var t = this,
                  e = {
                    itemType: 2,
                    travelAgencyId: this.travelAgencyId
                  };
                this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/getCanReceiveOrUseCouponList", e).then((function(e) {
                  1 === e.code && (t.couponList = e.data || [])
                }))
              },
              getDec: function(t) {
                var e, n = "",
                  i = "",
                  o = "",
                  a = "";
                return t.cityList && t.cityList.forEach((function(t, e) {
                  i += t + "/"
                })), i && (i = i.slice(0, -1) + " · "), e = ["跟团游", "一日游", "自由行", "研学游"][t.travelMode], t.journeyDay && (o = t.journeyDay + "天"), t.journeyNight && (a = t.journeyNight + "晚"), (o || a) && (n = " · " + o + a), i + e + n
              },
              getTourGuideList: function() {
                var t = this;
                this.loadMore = "loading";
                var e = {
                  size: 10,
                  current: this.current,
                  travelAgencyId: this.travelAgencyId
                };
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/travelAgency/getTourGuideList", e).then((function(e) {
                  var n;
                  1 === e.code && (t.loadMore = e.data.records.length > 9 ? "loadmore" : "nomore", (n = t.tourGuideList).push.apply(n, (0, a.default)(e.data.records)))
                }))
              },
              noCoupe: function() {
                this.$uni.showToast("该优惠券已抢光~")
              },
              available: function(e) {
                var n = JSON.stringify(e);
                uni.navigateTo({
                  url: "/subPack/pages/groupOrder/availableProducts?coupon=".concat(n)
                })
              },
              tagList: function(t) {
                var e = "";
                return t.forEach((function(t) {
                  e += t.tagName + "·"
                })), e.slice(0, -1)
              },
              navTop: function() {
                var t = this,
                  e = this;
                setTimeout((function() {
                  new Promise((function(t) {
                    var e = uni.createSelectorQuery();
                    e.select("#navCenter").boundingClientRect(), e.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(n) {
                    e.navCenterTop = n[0] ? n[0].top + t.scrollTop : 0, 0 === e.navCenterTop && e.solutionTop()
                  }))
                }), 100)
              },
              solutionTop: function() {
                var t = this,
                  e = this;
                setTimeout((function() {
                  new Promise((function(t) {
                    var e = uni.createSelectorQuery();
                    e.select("#solution").boundingClientRect(), e.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(n) {
                    e.navCenterTop = n[0] ? n[0].top + t.scrollTop : 200
                  }))
                }), 100)
              },
              cityName: function(t) {
                var e = "";
                return t.forEach((function(t, n) {
                  e += t + "/"
                })), e.slice(0, -1)
              },
              fold: function(t) {
                1 == t ? this.foldRemark = !this.foldRemark : this.foldLable = !this.foldLable, this.navTop()
              },
              changeNav: function(e, n) {
                this.activeNav = e, this.current = 1, this.isRefresh = !1, this.travelAgentTag = n, this.productList = [], this.getProductList(), this.navBarBg && uni.pageScrollTo({
                  scrollTop: this.navCenterTop - this.searchHeight - 28,
                  duration: 0
                })
              },
              call: function(e) {
                uni.makePhoneCall({
                  phoneNumber: e
                })
              },
              expandChange: function(t, e) {
                "tag" === t ? e.isShow = !e.isShow : this.companyInfoShow[t] = !this.companyInfoShow[t]
              },
              hexToRgb: function(t) {
                return t ? "rgb(" + parseInt("0x" + t.slice(1, 3)) + "," + parseInt("0x" + t.slice(3, 5)) + "," + parseInt("0x" + t.slice(5, 7)) + ",0)" : "rgba(27,138,138,0)"
              },
              changeBar: function(t) {
                this.current = 1, this.isRefresh = !1, 0 === t ? (this.tabCurrent = t, this.productList = [], this.getProductList()) : 1 === t ? (this.tabCurrent = t, this.tourGuideList = [], this.getTourGuideList()) : 2 === t ? this.contactShow = !0 : 3 === t && this.$navigateTo({
                  url: "/pages/myorder/myorder?itemType=2"
                })
              },
              openModal: function(t, e) {
                1 == t ? this.businessShow = !0 : 2 == t && e && (this.labelShow = !0, this.htmlContent = e)
              },
              getCoupe: function(t) {
                var e = this;
                this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                  couponId: t
                }).then((function(t) {
                  1 == t.code ? (e.getSpotCoupons(), e.$uni.showToast("已领取")) : e.$uni.showToast("已抢光")
                }))
              },
              goGoodInfo: function(t, e) {
                var n = "/subPack/pages/lineProductDetails/lineProductDetails?productId=" + t;
                this.$navigateTo({
                  url: n
                })
              },
              goTourGuide: function(t) {
                this.$navigateTo({
                  url: "/subPack/pages/tourGuide/tourGuide?tourGuideId=" + t
                })
              },
              back: function() {
                this.firstPage ? uni.switchTab({
                  url: "/pages/index/index"
                }) : uni.navigateBack()
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
.u-drawer{z-index:1000!important}.box .navbar{left:0;padding-left:20rpx;position:fixed;top:0;width:100%;z-index:300}.box .navbar .arrowleftBox,.box .navbar{align-items:center;display:-webkit-flex;display:flex}.box .navbar .arrowleftBox{background-color:hsla(0,0%,100%,.7);border:2rpx solid rgba(0,0,0,.1);border-radius:50%;height:56rpx;justify-content:center;width:56rpx}.box .navbar .arrowleftBox .header_icon{height:40rpx;width:40rpx}.box .wbk{background-color:#fff}.box .title-bj{background:url('https://eshopfile.zhiyousx.com/169681844297021649.jpg');background-size:100% 100%;margin-top:-2rpx;width:100%}.box .title-bj .title-box{align-items:start;display:-webkit-flex;display:flex;height:180rpx;margin-top:20rpx;padding-left:30rpx;padding-top:20rpx;width:100%}.box .title-bj .title-box .title-img{border-radius:50%;height:120rpx;width:120rpx}.box .title-bj .title-box .remark{height:120rpx;margin-left:10rpx;padding-top:13rpx}.box .title-bj .title-box .remark .name{align-items:center;display:-webkit-flex;display:flex}.box .title-bj .title-box .remark .name .text{color:#fff;font-size:36rpx;line-height:52rpx;text-shadow:0 2px 2px rgba(0,0,0,.5)}.box .title-bj .title-box .remark .name .lable{align-items:center;background-color:#e9d0c5;border-radius:16rpx;color:#000;display:-webkit-flex;display:flex;font-size:20rpx;height:32rpx;justify-content:center;margin-left:20rpx;width:88rpx}.box .title-bj .title-box .remark .name .lable .lable-icon{height:24rpx;margin-right:4rpx;width:24rpx}.box .title-bj .title-box .remark .brief{align-items:flex-end;display:-webkit-flex;display:flex;margin-top:10rpx}.box .title-bj .title-box .remark .brief .text{color:#fff;font-size:24rpx;line-height:34rpx;max-width:500rpx;text-shadow:0 2px 2px rgba(0,0,0,.5)}.box .title-bj .title-box .remark .brief .brief-icon{height:26rpx;margin-left:10rpx;width:26rpx}.box .coupeList{background-color:#f5f5f5;height:268rpx}.box .coupeList .coupeScroll{height:268rpx;margin-left:30rpx;opacity:1;overflow:visible;white-space:nowrap;width:auto;z-index:300}.box .coupeList .coupeScroll .coupeItem{display:inline-block;height:240rpx;margin-right:12rpx;width:220rpx}.box .coupeList .coupeScroll .coupeItem .info{align-items:center;background:linear-gradient(180deg,#ffedca,#fffbf2);border:2rpx solid #fff;border-radius:20rpx 20rpx 10rpx 10rpx;box-shadow:inset -2rpx 2rpx 2rpx 0rpx hsla(0,0%,100%,.3),inset 6rpx -4rpx 13rpx 0rpx hsla(0,0%,100%,.2),0rpx 8rpx 20rpx 0rpx hsla(18,68%,64%,.1);display:-webkit-flex;display:flex;flex-direction:column;height:160rpx;justify-content:space-between;padding:18rpx 0;width:100%}.box .coupeList .coupeScroll .coupeItem .info .price{vertical-align:bottom}.box .coupeList .coupeScroll .coupeItem .info .price .rmbIcon{font-size:28rpx;line-height:28rpx}.box .coupeList .coupeScroll .coupeItem .info .price .num{-webkit-text-fill-color:transparent;background-clip:text;background-image:linear-gradient(302.64569deg,#c1602c,#2d0902 19%,#6f2f0d 64%,#2d0902 88%,#c1602c);font-family:DIN Black;font-size:48rpx;font-weight:700;line-height:1}.box .coupeList .coupeScroll .coupeItem .info .type{color:#572408;font-size:26rpx;font-weight:700;line-height:28rpx}.box .coupeList .coupeScroll .coupeItem .info .name{color:#766e6a;font-size:24rpx;line-height:28rpx;max-width:180rpx;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.box .coupeList .coupeScroll .coupeItem .pickUp{align-items:center;background:#ffedca;border-radius:20rpx 20rpx 20rpx 20rpx;border-top:2rpx dashed #de6e2e;display:-webkit-flex;display:flex;height:80rpx;justify-content:center;width:100%}.box .coupeList .coupeScroll .coupeItem .pickUp .btn,.box .coupeList .coupeScroll .coupeItem .pickUp{box-shadow:inset -2rpx 2rpx 2rpx 0rpx hsla(0,0%,100%,.3),inset 6rpx -4rpx 13rpx 0rpx hsla(0,0%,100%,.2),0rpx 8rpx 20rpx 0rpx hsla(18,68%,64%,.1)}.box .coupeList .coupeScroll .coupeItem .pickUp .btn{border:2rpx solid #fff;border-radius:40rpx 40rpx 40rpx 40rpx;font-size:26rpx;line-height:50rpx;padding:0 28rpx}.box .coupeList .coupeScroll .coupeItem .pickUp .c-btn{background:linear-gradient(105deg,#ffb444,#ff9635)}.box .coupeList .coupeScroll .coupeItem .pickUp .d-btn{background:rgba(255,150,53,.5);color:grey}.box .nav-center{background:linear-gradient(180deg,#f5f5f5,#fff);height:100rpx;overflow:visible;padding-left:50rpx;white-space:nowrap;width:auto;z-index:100}.box .nav-center .nav-item{color:rgba(0,0,0,.8);display:inline-block;font-size:28rpx;margin-top:22rpx;padding-right:50rpx;position:relative}.box .nav-center .nav-item .nav-line{background:linear-gradient(90deg,#ff5411,rgba(255,84,17,0));border-radius:50rpx;display:none;height:16rpx;left:0;position:absolute;top:34rpx;width:calc(100% - 50rpx)}.box .nav-center .active{color:#222;font-size:32rpx}.box .nav-center .active .nav-line{display:block}.box .navFixed{border-radius:0;left:0;position:fixed;z-index:200}.box .solution{margin:0 30rpx;padding-bottom:120rpx}.box .solution .item{background:#fff;border-radius:20rpx;margin-bottom:20rpx;padding:20rpx 0 20rpx 20rpx}.box .solution .item .info-box{display:-webkit-flex;display:flex}.box .solution .item .info-box .pic-box{border-radius:10rpx 20rpx 20rpx 20rpx;box-shadow:6rpx 0 0 0 rgba(0,0,0,.15),12rpx 0 0 0 rgba(0,0,0,.05);height:auto;max-width:208rpx;min-height:208rpx;position:relative;width:208rpx}.box .solution .item .info-box .pic-box image{border-radius:10rpx 20rpx 20rpx 20rpx;height:100%;width:100%}.box .solution .item .info-box .pic-box .lt-tip{background:rgba(35,32,32,.5);border-radius:10rpx 0 10rpx 0;color:#fff;font-size:24rpx;height:42rpx;left:0;line-height:42rpx;min-width:72rpx;padding:0 12rpx;position:absolute;text-align:center;top:0}.box .solution .item .info-box .pic-box .bto-tip{align-items:center;background:rgba(35,32,32,.5);border-radius:0 0 20rpx 20rpx;bottom:0;display:-webkit-flex;display:flex;height:42rpx;justify-content:center;left:0;position:absolute;width:208rpx}.box .solution .item .info-box .pic-box .bto-tip image{height:20rpx;margin-right:6rpx;width:20rpx}.box .solution .item .info-box .pic-box .bto-tip .txt{color:#fff;font-size:24rpx}.box .solution .item .info-box .r-info{display:-webkit-flex;display:flex;flex-direction:column;height:auto;justify-content:space-between;margin-left:20rpx;min-height:200rpx;padding-bottom:8rpx;width:422rpx}.box .solution .item .info-box .r-info .nameTipsBox .name{color:#1e1b19;font-size:32rpx;line-height:46rpx}.box .solution .item .info-box .r-info .nameTipsBox .name .star-box{display:inline-block;height:38rpx;margin-left:10rpx;position:relative;width:40rpx}.box .solution .item .info-box .r-info .nameTipsBox .name .star-box .star{background:linear-gradient(51deg,#e8b091,#ffe7d0);border-radius:6rpx;color:#92322a;font-size:24rpx;height:38rpx;left:0;line-height:38rpx;position:absolute;text-align:center;top:8rpx;width:40rpx}.box .solution .item .info-box .r-info .nameTipsBox .ad{color:rgba(30,27,25,.6);font-size:24rpx;line-height:34rpx}.box .solution .item .info-box .r-info .nameTipsBox .rank{background:rgba(217,52,0,.1);border-radius:60rpx;color:#92322a;display:inline-block;font-size:24rpx;line-height:34rpx;margin-top:16rpx;padding:0 20rpx}.box .solution .item .info-box .r-info .nameTipsBox .highLights{margin-top:8rpx}.box .solution .item .info-box .r-info .nameTipsBox .highLights text{color:rgba(30,27,25,.4);font-size:24rpx;line-height:24rpx}.box .solution .item .info-box .r-info .nameTipsBox .tips{display:-webkit-flex;display:flex;flex-wrap:wrap;height:34rpx;margin-top:16rpx;overflow:hidden}.box .solution .item .info-box .r-info .nameTipsBox .tips .it{margin-right:10rpx}.box .solution .item .info-box .r-info .nameTipsBox .tips .tag{border:1rpx solid rgba(30,27,25,.2);border-radius:40rpx;color:#92322a;font-size:24rpx;height:34rpx;line-height:32rpx;padding:0 20rpx}.box .solution .item .info-box .r-info .price-box{align-items:flex-end;display:-webkit-flex;display:flex;justify-content:space-between;margin-top:16rpx;width:100%}.box .solution .item .info-box .r-info .price-box .item-btn{background:linear-gradient(107deg,#ffb2d5,#ffc1aa);border-radius:30px;color:#fff;font-size:26rpx;height:50rpx;line-height:50rpx;text-align:center;width:120rpx}.box .solution .item .info-box .r-info .price-box .pl{align-items:flex-end;color:#ff5411;display:-webkit-flex;display:flex;font-size:32rpx;font-weight:500;line-height:1}.box .solution .item .info-box .r-info .price-box .pl .t{margin-left:4rpx}.box .solution .item .info-box .r-info .price-box .pl .line-through{color:rgba(30,27,25,.3);font-size:32rpx;font-weight:400;line-height:1;margin-left:4rpx;text-decoration:line-through}.box .solution .ptxt{align-items:center;color:#999897;display:-webkit-flex;display:flex;font-size:24rpx}.box .solution .disable{background:#eee}.box .guide{padding:0 20rpx 120rpx}.box .guide .guide-item{align-items:center;background:#fff;border-radius:20rpx;display:-webkit-flex;display:flex;height:207rpx;margin-bottom:10rpx;padding:0 20rpx;position:relative;width:100%}.box .guide .guide-item .guide-img{border-radius:20rpx;height:140rpx;margin-right:20rpx;width:140rpx}.box .guide .guide-item .guide-info{height:143rpx}.box .guide .guide-item .guide-info .p1{align-items:center;display:-webkit-flex;display:flex}.box .guide .guide-item .guide-info .p1 .name{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:700;max-width:350rpx}.box .guide .guide-item .guide-info .p1 .document{align-items:center;border:1rpx solid rgba(0,0,0,.1);border-radius:16rpx;display:-webkit-flex;display:flex;height:34rpx;margin-left:10rpx;padding:0 14rpx}.box .guide .guide-item .guide-info .p1 .document .document-icon{height:24rpx;width:24rpx}.box .guide .guide-item .guide-info .p1 .document .document-text{color:rgba(0,0,0,.8);font-size:20rpx;margin-left:6rpx}.box .guide .guide-item .guide-info .p2{color:rgba(0,0,0,.5);font-size:26rpx;line-height:37rpx;margin-top:20rpx;width:300rpx}.box .guide .guide-item .application{align-items:center;border:1rpx solid #ff5411;border-radius:50rpx;bottom:30rpx;display:-webkit-flex;display:flex;height:50rpx;padding:0 24rpx;position:absolute;right:20rpx}.box .guide .guide-item .application .text{color:#ff5411;font-size:24rpx;margin-right:4rpx}.box .detailBox{background:#fff;max-height:1200rpx;min-height:1000rpx;padding:80rpx 40rpx 40rpx;width:750rpx}.box .detailBox .content{max-height:1000rpx;width:100%}.box .detailBox .content .busins-title{color:#333;font-size:36rpx;font-weight:700;line-height:52rpx;text-align:center}.box .detailBox .content .busins-item{margin-top:40rpx}.box .detailBox .content .busins-item .title{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:20rpx}.box .detailBox .content .busins-item .title text{color:#333;font-size:36rpx}.box .detailBox .content .busins-item .title .expend-box image{height:46rpx;width:46rpx}.box .detailBox .content .busins-item .intro{color:rgba(30,27,25,.6);font-size:28rpx;line-height:42rpx}.box .detailBox .content .busins-item image{height:486rpx;width:670rpx}.box .detailBox .content .busins-item .otherImg{margin-bottom:20rpx}.box .detailBox .content .busins-item:nth-child(1){margin-top:0rpx}.box .selectBox{background-color:#fff}.box .selectBox .selectItem{align-items:start;border-bottom:2rpx solid #f5f5f5;display:-webkit-flex;display:flex;height:86rpx;justify-content:space-between;margin:40rpx 40rpx 0}.box .selectBox .selectItem .left{align-items:center;display:-webkit-flex;display:flex}.box .selectBox .selectItem .left image{height:40rpx;margin-right:10rpx;width:40rpx}.box .selectBox .selectItem .left text,.box .selectBox .selectItem .right{font-size:32rpx}.box .selectBox .selectItem .right image{height:32rpx;width:32rpx}.box .selectBox .close{align-items:center;color:#1e1b19;display:-webkit-flex;display:flex;font-size:32rpx;height:126rpx;justify-content:center}.box .OrCodePop{background-color:#fff}.box .OrCodePop .picBox{display:-webkit-flex;display:flex;justify-content:center;padding-top:40rpx}.box .OrCodePop .picBox image{width:520rpx}.box .OrCodePop .tips{display:-webkit-flex;display:flex;font-size:28rpx;justify-content:center;margin-top:30rpx;padding-bottom:40rpx}.box .mytabbar{background-color:#fff;border-radius:20rpx 20rpx 0rpx 0rpx;bottom:0;height:126rpx;justify-content:space-around;padding:0 60rpx 20rpx;position:fixed;width:100%;z-index:999}.box .mytabbar .tabbarItem,.box .mytabbar{align-items:center;display:-webkit-flex;display:flex}.box .mytabbar .tabbarItem{flex-direction:column;height:106rpx;margin-right:42rpx;width:126rpx}.box .mytabbar .tabbarItem .icon{height:40rpx;margin-top:12rpx;width:40rpx}.box .mytabbar .tabbarItem .title{color:#1e1b19;font-size:24rpx;height:34rpx;margin-top:8rpx}.box .mytabbar .tabHide{display:none}
</style>
