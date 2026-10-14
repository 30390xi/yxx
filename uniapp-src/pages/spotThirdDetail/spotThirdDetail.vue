<template>
<view class="u-wrap" :style="'background:'+'linear-gradient(to bottom,'+detailObj.topColour+','+detailObj.bottomColour+' '+midinfoTop+'px)'+';'+'padding-top:'+headerH+'px'+';'">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="top-fixed-box" :style="'padding-top:'+statusBarHeight+5+'px'+';'+'padding-bottom:'+(isShowTicket?'100rpx':'24rpx')+';'">
        <view class="bg-color" id="top-fixed-box" :style="'background:'+detailObj.bottomColour+';'+'opacity:'+1/row2height*scrollTop+';'"></view>
        <view class="headerinfo" id="headerinfo" :style="'transform:'+(!inTop||isShowTicket?'translateY(0rpx)':'translateY('+headerH+'px)')+';'">
            <view class="l">
                <image class="mainImg" mode="aspectFill" :src="detailObj.coverImage"></image>
            </view>
            <view class="r">
                <view class="title singleLineText">{{ detailObj.title }}</view>
                <view class="sub-title singleLineText">{{detailObj.subtitle||''}}</view>
            </view>
        </view>
    </view>
    <view class="spotinfo" id="spotinfo">
        <image class="mainImg" mode="aspectFill" :src="detailObj.coverImage"></image>
        <view class="info">
            <view class="title multilineText2">
                <view class="multilineText2">{{detailObj.title}}</view>
            </view>
            <view class="tag">{{detailObj.subtitle||''}}</view>
            <view class="ranking singleLineText" v-if="showRanking" @click="toRanking(detailObj.originSortInRankingVO.contentId)">
                <view class="top">{{'TOP '+detailObj.originSortInRankingVO.indexInRanking}}</view>
                <view class="text">
                    <view class="name">{{detailObj.originSortInRankingVO.rankingName}}</view>
                    <u-icon class="" color="#6A5A40" name="arrow-right" size="20"></u-icon>
                </view>
            </view>
            <view class="like-box" :style="'position:'+(showRanking?'relative':'absolute')+';'+'margin-top:'+(showRanking?'36rpx':'0')+';'" v-if="detailObj.hiddenLoveFlag!=1">
                <view class="item" @click="likeClick(1)">
                    <image mode class="img" src="https://eshopfile.zhiyousx.com/spotDetailNew/like2.png" v-if="centObj.isLike===1"></image>
                    <image mode class="img" src="https://eshopfile.zhiyousx.com/spotDetailNew/like1.png" v-else></image>
                    <view class="text">喜爱</view>
                </view>
                <view class="item" @click="hateClick(0)">
                    <image mode class="img" src="https://eshopfile.zhiyousx.com/spotDetailNew/hate2.png" v-if="centObj.isLike===0"></image>
                    <image mode class="img" src="https://eshopfile.zhiyousx.com/spotDetailNew/hate1.png" v-else></image>
                    <view class="text">无感</view>
                </view>
            </view>
        </view>
    </view>
    <view class="row2" id="row2" v-if="$root.m0">
        <view class="love-box" v-if="$root.m1">
            <view class="l">
                <view class="t">喜爱值</view>
                <view class="b">{{$root.m2}}</view>
            </view>
            <view class="r">
                <view class="t">
                    <view class="p">{{$root.m3+'%'}}</view>
                    <view class="p">{{$root.m4+'%'}}</view>
                </view>
                <view class="m">
                    <view class="inner" :style="'width:'+(centObj.likeRatio*100||0)+'%'+';'"></view>
                </view>
                <view class="b">
                    <view class="l">{{(centObj.num||0)+'人参与表态'}}</view>
                </view>
            </view>
        </view>
        <view class="line bordertop" v-if="detailObj.address&&detailObj.latitude&&detailObj.longitude" @click="openMap($event)">
            <image class="icon" src="https://eshopfile.zhiyousx.com/2021061516513797848.png"></image>
            <view class="text singleLineText">{{detailObj.address}}</view>
            <uni-icons class="" color="#FFFFFF" size="16" type="arrowright"></uni-icons>
        </view>
    </view>
    <view class="row2" id="row2" style="height:0px;margin:0;" v-else></view>
    <view class="row1" v-if="detailObj.otherIntroduction">
        <image class="otherIntroduction" mode="widthFix" :src="detailObj.otherIntroduction"></image>
    </view>
    <view class="row3">
        <view class="item" v-if="detailObj.sysTagVoList&&detailObj.sysTagVoList[0]">
            <view class="l">标签</view>
            <view class="r">
                <view class="tag" :key="id" v-for="(item, __i0__) in detailObj.sysTagVoList">
                    <view class="inner">
                        <view class="name">{{item.name}}</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="item" v-if="detailObj.scenicSpotRelList&&detailObj.scenicSpotRelList[0]">
            <view class="l">所属</view>
            <view class="r">
                <view class="tag" :key="scenicId" v-for="(item, __i1__) in detailObj.scenicSpotRelList">
                    <view class="inner">
                        <view class="name">{{item.scenicName}}</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="item" v-if="detailObj&&detailObj.tagIncludeVoList[0]||detailObj&&detailObj.originRankingList[0]">
            <view class="l">收录</view>
            <view class="r">
                <view class="tag" :key="contentId" v-for="(item, __i2__) in detailObj.tagIncludeVoList">
                    <view class="inner" style="padding-left:18rpx;">
                        <image mode class="icon" :src="item.tagUrl?item.tagUrl:'https://eshopfile.zhiyousx.com/spotDetailNew/shoulu.png'"></image>
                        <view class="name">{{item.name}}</view>
                    </view>
                </view>
                <view class="tag" :key="contentId" v-for="(item, __i3__) in detailObj.originRankingList">
                    <view class="inner" style="padding-left:18rpx;">
                        <image mode class="icon" :src="item.tagUrl?item.tagUrl:'https://eshopfile.zhiyousx.com/2021072117045189271.png'"></image>
                        <view class="name">{{item.rankingName}}</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
    <view class="row4">
        <view class="title-box">
            <view class="l">简介</view>
            <view class="button-show" v-if="lines>6" @click="changHide()">
                <view class="button-show-text">{{ (isHide?'展开':'收起') }}</view>
                <u-icon class="" color="rgba(255,255,255,0.6)" name="arrow-down" size="20" v-if="isHide"></u-icon>
                <u-icon class="" color="rgba(255,255,255,0.6)" name="arrow-up" size="20" v-else></u-icon>
            </view>
        </view>
        <view class="content-box">
            <mote-lines-divide class="" :dt="detailObj.introductionText" expandText="展开" foldHint="收起" :isHide="isHide" :line="6" style="color:#fff;" @line_show="getLines()"></mote-lines-divide>
        </view>
    </view>
    <view class="row5" v-if="detailObj&&detailObj.bannerList[0]">
        <u-swiper borderRadius="10" class="" height="268" indicatorActiveColor="#FFFFFF" interval="5000" :list="detailObj.bannerList" name="advertPic" @click="swiperTopClick()"></u-swiper>
    </view>
    <view class="row7" v-if="detailObj.picVideoResources&&detailObj.picVideoResources[0]">
        <view class="title-box" @click="jumpSpotMedia($event)">
            <view class="l">{{showVideo?'视频/图片':'图片'}}</view>
            <view class="r">
                <view class="">{{'全部'+$root.g0}}</view>
                <image mode class="" src="https://eshopfile.zhiyousx.com/spotDetailNew/jiantou.png"></image>
            </view>
        </view>
        <scroll-view class="item-box" scrollX="true" style="height:248rpx;">
            <view class="item" v-if="item.m5" v-for="(item, index) in $root.l0">
                <image class="img" mode="aspectFill" :src="item.resourcesType==2?item.coverImage:item.resourcesUrl"></image>
                <view class="mask" v-if="item.resourcesType==2">
                    <image mode class="icon" src="https://eshopfile.zhiyousx.com/spotDetailNew/bofang2.png"></image>
                </view>
            </view>
        </scroll-view>
    </view>
    <view class="mask" v-if="showPicture">
        <view class="maskTop" :style="'top:'+statusBarHeight+8+'px'+';'">
            <u-icon class="" color="#ffffff" name="arrow-left" size="42" @click="closeMask()"></u-icon>
            <view class="num">{{ swiperCurrent+' / '+$root.g1 }}</view>
        </view>
        <swiper class="swiper" :current="currentSwiper" :duration="500" @change="swiperChange($event)">
            <swiper-item class="" :key="index" v-for="(item, index) in detailObj.picVideoResources">
                <view class="swiper-item" v-if="item.resourcesType==1">
                    <image class="" mode="widthFix" :src="item.resourcesUrl"></image>
                </view>
                <view class="swiper-item" v-if="swiperCurrent==index+1">
                    <video :autoplay="true" class="swiper-item vue-ref-in-for" :controls="true" ref="video" :src="item.resourcesUrl"></video>
                </view>
            </swiper-item>
        </swiper>
    </view>
    <l-painter :board="posterData" class=" vue-ref" ref="painter" :isRenderImage="true" style="display:none;" v-if="isAndroid" @success="e0()"></l-painter>
    <painter class="painter" :palette="painterData" :widthPixels="300" v-if="painterData" @imgOK="onImgOK()" @imgErr="onImgErr()"></painter>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          components: {
            painter: function() {
              Promise.all([i.e("common/vendor"), i.e("components/tuitui-painter/painter")]).then(function() {
                return resolve(i("3a7d"))
              }.bind(null, i)).catch(i.oe)
            },
            LPainter: function() {
              Promise.all([i.e("common/vendor"), i.e("components/lime-painter/index")]).then(function() {
                return resolve(i("0778"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          data: function() {
            return {
              detailObj: "",
              statusBarHeight: "",
              painterData: "",
              postUrl: "",
              isAndroid: !0,
              transformNum: 1,
              like: null,
              hate: null,
              showVideo: getApp().globalData.showvideo,
              centObj: {},
              posterData: {},
              scenicName: "",
              inTop: !0,
              swiperCurrent: 1,
              swiperLenght: 0,
              scrollTop: 0,
              currentSwiper: 0,
              showPicture: !1,
              isShowTicket: !1,
              swiperList: [],
              pageBg: {},
              videoUrl: "",
              headerH: 0,
              row2height: 0,
              midinfoTop: 400,
              lovePercent: {},
              lines: 1,
              isHide: !1,
              unit: 0,
              parseStyle: {
                p: "word-break: break-all;"
              }
            }
          },
          filters: {
            timeFormat: function(t) {
              return t.replace(/-/g, ".")
            }
          },
          computed: {
            showRanking: function() {
              return this.detailObj.originSortInRankingVO && this.detailObj.originSortInRankingVO.contentId
            }
          },
          onLoad: function(e) {
            var i = this;
            uni.getSystemInfoSync().system.indexOf("Android") > -1 || (this.isAndroid = !1), this._spotId = e.spotId, this.scenicName = e.scenicName, this._urlToShare = "/pages/spotThirdDetail/spotThirdDetail?spotId=" + this._spotId, this.spotDetail(), uni.getSystemInfo({
              success: function(e) {
                i.statusBarHeight = uni.getSystemInfoSync().statusBarHeight, i._transformNumTemp = 1, i.unit = 750 / e.windowWidth, i.headerH = i.statusBarHeight + 5 + Math.ceil(e.windowWidth / 750 * 104)
              }
            })
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, this.row2height < t.scrollTop ? this.inTop = !1 : this.inTop = !0;
            var e = t.scrollTop / 40;
            e >= 0 && e <= 1 && (this.transformNum = Number((1 - e).toFixed(2))), e > 1 && (this.transformNum = 0), this._transformNumTemp = this.transformNum
          },
          onShareAppMessage: function(t) {
            return {
              title: this.scenicName ? "我在".concat(this.scenicName, "找到了").concat(this.detailObj.title, "，特分享给你~") : "我找到了".concat(this.detailObj.title),
              imageUrl: this.postUrl,
              path: this.$util.setShareUrl(this._urlToShare)
            }
          },
          methods: {
            getLines: function(t) {
              this.lines = t, t > 0 && (this.isHide = !0)
            },
            changHide: function() {
              this.isHide = !this.isHide
            },
            spotDetail: function() {
              var e = this,
                i = this;
              t.showNavigationBarLoading(), this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/getContentScenicChildPage?contentId=" + this._spotId).then((function(n) {
                t.hideNavigationBarLoading(), e.detailObj = n.data, e.getFocusStatus(), e.$nextTick((function() {
                  new Promise((function(e) {
                    var i = uni.createSelectorQuery();
                    i.select("#spotinfo").boundingClientRect(), i.select("#top-fixed-box").boundingClientRect(), i.exec((function(t) {
                      e(t)
                    }))
                  })).then((function(t) {
                    i.row2height = t[0].top;
                    var e = parseInt(516 / i.unit);
                    i.midinfoTop = t[1].height + e
                  }))
                }))
              }))
            },
            swiperChange: function(t) {
              this.swiperCurrent = t.detail.current + 1
            },
            closeMask: function() {
              this.showPicture = !1
            },
            toRanking: function(t) {
              1 != this.detailObj.closeJumpFlag && this.$navigateTo({
                url: "../ranking/ranking?id=" + t
              })
            },
            toSpot: function(t) {
              this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=" + t
              })
            },
            openMedia: function(t) {
              this.showPicture = !0, this.swiperCurrent = t + 1, this.currentSwiper = t
            },
            getFocusStatus: function() {
              var e = this;
              t.showNavigationBarLoading(), this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/getIsLikeContent?originId=" + this._spotId).then((function(i) {
                t.hideNavigationBarLoading(), e.centObj = i.data, e.startDraw()
              }))
            },
            startDraw: function() {
              var t = this.detailObj.topColour,
                e = this.detailObj.title,
                i = this.detailObj.introductionText,
                n = this.centObj.likeRatio || 0,
                o = parseFloat((100 * n).toFixed(2)).toString(),
                r = {
                  width: "750rpx",
                  height: "600rpx",
                  borderRadius: "0rpx",
                  background: t,
                  views: [{
                    type: "text",
                    text: e,
                    css: {
                      width: "700rpx",
                      maxLines: 1,
                      left: "30rpx",
                      top: "50rpx",
                      fontSize: "46rpx",
                      color: "#fff"
                    }
                  }, {
                    type: "rect",
                    css: {
                      position: "absolute",
                      width: "110rpx",
                      height: "40rpx",
                      left: "160rpx",
                      top: "126rpx",
                      background: "#FFF",
                      borderRadius: "20rpx"
                    }
                  }, {
                    type: "rect",
                    css: {
                      position: "absolute",
                      width: "150rpx",
                      height: "40rpx",
                      left: "30rpx",
                      top: "126rpx",
                      background: "#F4A524",
                      borderRadius: "20rpx"
                    }
                  }, {
                    type: "rect",
                    css: {
                      position: "absolute",
                      width: "20rpx",
                      height: "40rpx",
                      left: "160rpx",
                      top: "126rpx",
                      background: "#F4A524"
                    }
                  }, {
                    type: "text",
                    text: "喜爱值",
                    css: {
                      width: "150rpx",
                      height: "40rpx",
                      left: "30rpx",
                      top: "126rpx",
                      background: "#F4A524",
                      color: "#fff",
                      fontSize: "30rpx",
                      lineHeight: "40rpx",
                      textAlign: "center",
                      borderRadius: "20rpx 0 0 20rpx"
                    }
                  }, {
                    type: "text",
                    text: o,
                    css: {
                      position: "absolute",
                      width: "90rpx",
                      height: "40rpx",
                      left: "180rpx",
                      top: "126rpx",
                      color: "#F4A524",
                      background: "#fff",
                      fontSize: "30rpx",
                      lineHeight: "40rpx",
                      textAlign: "center",
                      visibility: "hidden",
                      borderRadius: "0 20rpx 20rpx 0"
                    }
                  }, {
                    type: "rect",
                    css: {
                      position: "absolute",
                      width: "360rpx",
                      height: "360rpx",
                      left: "30rpx",
                      top: "220rpx",
                      color: "rgba(0,0,0,0)"
                    }
                  }, {
                    type: "image",
                    url: this.detailObj.coverImage,
                    css: {
                      position: "absolute",
                      width: "360rpx",
                      height: "360rpx",
                      left: "30rpx",
                      top: "220rpx",
                      background: "rgba(0,0,0,0)",
                      borderRadius: "15rpx"
                    }
                  }, {
                    type: "text",
                    text: i,
                    css: {
                      left: "420rpx",
                      top: "220rpx",
                      fontSize: "36rpx",
                      lineHeight: "54rpx",
                      color: "rgba(255,255,255,0.9)",
                      fontWeight: 600,
                      maxLines: 7,
                      textIndent: 0,
                      width: "300rpx"
                    }
                  }]
                };
              this.isAndroid ? (this.centObj.num < 10 && r.views.splice(1, 5), this.posterData = r) : (r.views = [{
                type: "text",
                text: e,
                css: {
                  width: "700rpx",
                  maxLines: 1,
                  left: "30rpx",
                  top: "50rpx",
                  fontSize: "46rpx",
                  color: "#fff"
                }
              }, {
                type: "rect",
                css: {
                  position: "absolute",
                  width: "110rpx",
                  height: "40rpx",
                  left: "160rpx",
                  top: "126rpx",
                  color: "#FFF",
                  borderRadius: "20rpx",
                  textAlign: "center"
                }
              }, {
                type: "rect",
                css: {
                  position: "absolute",
                  width: "150rpx",
                  height: "40rpx",
                  left: "30rpx",
                  top: "126rpx",
                  color: "#F4A524",
                  borderRadius: "20rpx",
                  textAlign: "center"
                }
              }, {
                type: "rect",
                css: {
                  position: "absolute",
                  width: "20rpx",
                  height: "40rpx",
                  left: "160rpx",
                  top: "126rpx",
                  color: "#F4A524"
                }
              }, {
                type: "text",
                text: "喜爱值",
                css: {
                  width: "150rpx",
                  height: "40rpx",
                  left: "60rpx",
                  top: "126rpx",
                  color: "#fff",
                  fontSize: "30rpx",
                  lineHeight: "40rpx"
                }
              }, {
                type: "text",
                text: o,
                css: {
                  position: "absolute",
                  width: "90rpx",
                  height: "40rpx",
                  left: "200rpx",
                  top: "126rpx",
                  color: "#F4A524",
                  fontSize: "30rpx",
                  lineHeight: "40rpx"
                }
              }, {
                type: "rect",
                css: {
                  position: "absolute",
                  width: "360rpx",
                  height: "360rpx",
                  left: "30rpx",
                  top: "220rpx",
                  color: "rgba(0,0,0,0)"
                }
              }, {
                type: "image",
                url: this.detailObj.coverImage,
                css: {
                  position: "absolute",
                  width: "360rpx",
                  height: "360rpx",
                  left: "30rpx",
                  top: "220rpx",
                  color: "#ff0000",
                  background: "#ff0000",
                  borderRadius: "15rpx"
                }
              }, {
                type: "text",
                text: i,
                css: {
                  left: "420rpx",
                  top: "220rpx",
                  fontSize: "36rpx",
                  lineHeight: "54rpx",
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 600,
                  maxLines: 7,
                  textIndent: 0,
                  width: "300rpx"
                }
              }], this.centObj.num < 10 && r.views.splice(1, 5), this.painterData = r)
            },
            onImgOK: function(t) {
              this.postUrl = t.path
            },
            onImgErr: function(t) {
              this.startDraw()
            },
            getNetworkImage: function(e) {
              return new Promise((function(i, n) {
                uni.downloadFile({
                  url: e,
                  success: function(t) {
                    var e = t.tempFilePath;
                    if (e.indexOf("json") > -1) return n(e), !1;
                    i(e)
                  },
                  fail: function(t) {
                    n(t)
                  }
                })
              }))
            },
            canvasImg: function(e, i, n, o) {
              var r = this,
                a = this.unit,
                s = this;
              this.getNetworkImage(e).then((function(e) {
                var p = t.createCanvasContext("firstCanvas", r);
                p.drawImage(e, 0, 0, parseInt(454 * a), parseInt(362 * a)), p.fillStyle = "#fff", p.fillRect(0, parseInt(282 * a), parseInt(454 * a), parseInt(82 * a)), p.fillStyle = "#FF5411", p.font = "20px bold", p.fillText(i, parseInt(22 * a), parseInt(330 * a)), p.fillStyle = "#D0D0D0", p.font = "12px bold", p.fillText(n, parseInt(150 * a), parseInt(330 * a)), p.beginPath();
                var l = p.measureText(n).width;
                p.rect(parseInt(150 * a), parseInt(320 * a), l, 1), p.fillStyle = "#D0D0D0", p.fill();
                var c = p.createLinearGradient(parseInt(283 * a), parseInt(290 * a), parseInt(443 * a), parseInt(350 * a));
                c.addColorStop(0, "#FC4A9E"), c.addColorStop(1, "#FF5411"), r.canvasbtn(p, c, parseInt(263 * a), parseInt(290 * a), parseInt(180 * a), parseInt(60 * a), parseInt(30 * a), o), p.draw(!1, (function() {
                  uni.canvasToTempFilePath({
                    fileType: "jpg",
                    x: 0,
                    y: 0,
                    width: 454,
                    height: 308,
                    destWidth: 454,
                    destHeight: 308,
                    canvasId: "firstCanvas",
                    success: function(t) {
                      s.postUrl = t.tempFilePath
                    },
                    fail: function(t) {}
                  })
                }))
              }))
            },
            canvasbtn: function(t, e, i, n, o, r, a, s) {
              t.beginPath(), t.fillStyle = e, t.moveTo(i + a, n), t.lineTo(i + o - a, n), t.arc(i + o - a, n + a, a, 3 * Math.PI / 2, 2 * Math.PI), t.lineTo(i + o, n + r - a), t.arc(i + o - a, n + r - a, a, Math.PI, Math.PI / 2), t.lineTo(i + a, n + r), t.arc(i + a, n + r - a, a, Math.PI / 2, Math.PI), t.lineTo(i, n + a), t.arc(i + a, n + a, a, Math.PI, 3 * Math.PI / 2), t.fill(), t.closePath(), t.beginPath(), t.fillStyle = "#fff", t.font = "13px bold 黑体", t.textAlign = "center", t.textBaseline = "middle", t.fillText(s, i + o / 2, n + 2 + r / 2)
            },
            getShowState: function(t) {
              return !(2 == t.resourcesType && !this.showVideo)
            },
            swiperTopClick: function(e) {
              var i = this.detailObj.bannerList[e];
              1 === i.jumpType && i.jumpUrl ? this.$navigateTo({
                url: "../webpage/webpage?url=".concat(i.jumpUrl)
              }) : 2 === i.jumpType && i.interalLinkId ? 1 === i.interalLinkType ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=".concat(i.interalLinkId)
              }) : 2 === i.interalLinkType ? this.$util.cityJump(i.interalLinkContentType, i.interalLinkId) : 3 === i.interalLinkType ? this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=".concat(i.interalLinkId)
              }) : 4 !== i.interalLinkType && 7 !== i.interalLinkType && 8 !== i.interalLinkType && 9 !== i.interalLinkType || this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=".concat(i.interalLinkId)
              }) : 3 === i.jumpType ? t.openEmbeddedMiniProgram({
                appId: i.newAppId,
                path: i.appUrl
              }) : 4 === i.jumpType && (uni.setStorageSync("richtext", i.richText), this.$navigateTo({
                url: "../richtext/richtext?title=".concat(i.advertName)
              }))
            },
            jumpSpotMedia: function() {
              this.$navigateTo({
                url: "../spotMedia/spotMedia?id=" + this._spotId + "&type=1"
              })
            },
            likeClick: function(e) {
              var i = this;
              t.showNavigationBarLoading(), this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/contentApp/likeContent", {
                id: this.centObj.id,
                isLike: e,
                originId: this._spotId,
                originType: 1
              }).then((function(e) {
                t.hideNavigationBarLoading(), i.like = !0, i.hate = !1, i.getFocusStatus(), uni.showToast({
                  title: "已喜爱",
                  icon: "none"
                })
              }))
            },
            hateClick: function(e) {
              var i = this;
              t.showNavigationBarLoading(), this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/contentApp/likeContent", {
                id: this.centObj.id,
                isLike: e,
                originId: this._spotId,
                originType: 1
              }).then((function(e) {
                t.hideNavigationBarLoading(), i.like = !1, i.hate = !0, i.getFocusStatus(), uni.showToast({
                  title: "已无感",
                  icon: "none"
                })
              }))
            },
            openMap: function() {
              console.log(this.detailObj), uni.openLocation({
                latitude: Number(this.detailObj.latitude),
                longitude: Number(this.detailObj.longitude),
                name: this.detailObj.title,
                success: function(t) {
                  console.log(t)
                },
                fail: function(t) {
                  console.log(t)
                }
              })
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background-color:#fff}.mask{background:#000;height:100%;justify-content:center;top:0;width:100%;z-index:99999}.mask .maskTop,.mask{align-items:center;display:-webkit-flex;display:flex;position:fixed}.mask .maskTop{flex-direction:row;left:41rpx;z-index:99}.mask .maskTop .num{color:#fff;font-family:Source Han Sans SC;font-size:32rpx;font-weight:400;margin-left:257rpx;opacity:.7}.mask .swiper{height:81vh;width:100%;z-index:40}.mask .swiper .swiper-item{display:-webkit-flex;display:flex;flex-direction:column;height:100%;justify-content:center;width:100%}.mask .swiper .swiper-item image{width:100%}.mask .swiper .swiper-item video{height:100%;width:100%}.u-wrap{line-height:1;min-height:100vh;padding-bottom:40px}.top-fixed-box{background:none;box-sizing:border-box;display:-webkit-flex;display:flex;left:0;overflow:hidden;padding:0 96rpx 24rpx;position:fixed;top:0;transition:all .3s linear;width:100%;z-index:10}.top-fixed-box .bg-color{height:100%;left:0;position:absolute;top:0;width:100%}.top-fixed-box .headerinfo{display:-webkit-flex;display:flex;transform:translateY(155rpx);transition:all .1s linear}.top-fixed-box .l{border-radius:4rpx;height:80rpx;margin-right:12rpx;overflow:hidden;width:80rpx}.top-fixed-box .l.active{transition:.3s}.top-fixed-box .l .mainImg{height:100%;width:100%}.top-fixed-box .r{z-index:2}.top-fixed-box .r.active{transition:.3s}.top-fixed-box .r .title{color:#fff;font-size:36rpx;line-height:40rpx;margin-bottom:4rpx;position:relative}.top-fixed-box .r .title .star{background:url('https://eshopfile.zhiyousx.com/spotDetailNew/xingji.png');background-size:100% 100%;color:#fff;font-size:20rpx;height:42rpx;line-height:34rpx;position:absolute;right:0;text-align:center;top:0;width:70rpx}.top-fixed-box .r .sub-title{color:hsla(0,0%,100%,.7);font-size:24rpx;line-height:34rpx;width:410rpx}.spotinfo{display:-webkit-flex;display:flex;margin:40rpx 30rpx;min-height:240rpx}.spotinfo .ranking{display:-webkit-flex;display:flex;margin-top:22rpx;position:relative}.spotinfo .ranking .top{background:linear-gradient(180deg,#6b6457,#54524c);border-radius:25rpx;color:#e6cca2;font-size:24rpx;font-weight:700;padding:14rpx 16rpx;position:relative;z-index:3}.spotinfo .ranking .text{align-items:center;background:linear-gradient(180deg,#e3cda2,#f3d19a);border-radius:25rpx;display:-webkit-flex;display:flex;height:50rpx;line-height:50rpx;margin-left:-36rpx;padding:0 24rpx 0 42rpx;position:relative;z-index:2}.spotinfo .ranking .text .name{color:#6a5a40;font-size:22rpx;font-weight:400;margin-right:4rpx;max-width:230rpx}.spotinfo .mainImg{border-radius:20rpx;height:240rpx;margin-right:36rpx;width:240rpx}.spotinfo .info{position:relative;width:414rpx}.spotinfo .info .like-box{bottom:0;display:-webkit-flex;display:flex;left:0;position:absolute}.spotinfo .info .like-box .item{align-items:center;background:#f9fafa;border-radius:10rpx;display:-webkit-flex;display:flex;height:48rpx;justify-content:center;width:136rpx}.spotinfo .info .like-box .item:first-child{margin-right:24rpx}.spotinfo .info .like-box .item.disabled{background:#acaba6}.spotinfo .info .like-box .item.disabled .text{color:#fff}.spotinfo .info .like-box .item .img{background-size:100% 100%;height:30rpx;margin-right:8rpx;width:30rpx}.spotinfo .info .like-box .item .text{color:#343121;font-size:24rpx}.spotinfo .info .title{align-items:center;display:-webkit-flex;display:flex;margin-bottom:4rpx;position:relative}.spotinfo .info .title view{color:#fff;display:block;font-size:36rpx;line-height:40rpx;width:414rpx}.spotinfo .info .title .star{background:url('https://eshopfile.zhiyousx.com/spotDetailNew/xingji.png');background-size:100% 100%;color:#fff;font-size:20rpx;height:42rpx;line-height:34rpx;position:absolute;right:0;text-align:center;top:0;width:70rpx}.spotinfo .info .tag{color:hsla(0,0%,100%,.7);font-size:24rpx;line-height:34rpx;width:410rpx}.row1{display:-webkit-flex;display:flex;justify-content:space-between;padding:0 30rpx 40rpx}.row1 .otherIntroduction{width:100%}.row1>.l{height:240rpx;width:240rpx}.row1>.r{position:relative;width:416rpx}.row1>.r .star{background:url('https://eshopfile.zhiyousx.com/spotDetailNew/xingji.png');background-size:100% 100%;color:#fff;font-size:20rpx;height:42rpx;line-height:34rpx;position:absolute;right:0;text-align:center;top:0;width:70rpx}.row2{background:rgba(0,0,0,.3);border-radius:10rpx;margin:0 30rpx 48rpx;padding-left:46rpx;padding-right:40rpx}.row2 .love-box{display:-webkit-flex;display:flex;height:196rpx;justify-content:space-between;width:100%}.row2 .love-box>.l{padding-top:44rpx}.row2 .love-box>.l>.t{color:#fff;font-size:28rpx;font-weight:700;margin-bottom:26rpx}.row2 .love-box>.l>.b{color:#feac2c;font-size:60rpx;font-weight:700}.row2 .love-box>.r{padding-top:47rpx}.row2 .love-box>.r>.t{color:#fff;display:-webkit-flex;display:flex;font-size:24rpx;justify-content:space-between;margin-bottom:5rpx}.row2 .love-box>.r>.t view{color:#fff}.row2 .love-box>.r>.m{background:#fff;border-radius:10rpx;height:50rpx;margin-bottom:22rpx;overflow:hidden;width:380rpx}.row2 .love-box>.r>.m .inner{background:#feac2c;height:100%;width:0}.row2 .love-box>.r>.b{align-items:center;display:-webkit-flex;display:flex;justify-content:flex-end;padding-bottom:10rpx}.row2 .love-box>.r>.b>.l{color:#fff;font-size:24rpx}.row2 .love-box>.r>.b>.r{height:48rpx;width:48rpx}.row2 .bordertop{border-top:1px solid hsla(0,0%,100%,.1)}.row2 .line{align-items:center;display:-webkit-flex;display:flex;height:88rpx;justify-content:space-between}.row2 .line .icon{height:40rpx;margin-right:15rpx;width:40rpx}.row2 .line .text{color:#fff;font-size:28rpx;line-height:40rpx;width:502rpx}.row2 .line .text text{color:hsla(0,0%,100%,.7);font-size:26rpx}.row2 .line .jt{height:20rpx;width:12rpx}.row3{margin-bottom:4rpx;padding-left:30rpx}.row3 .item{align-items:center;display:-webkit-flex;display:flex;margin-bottom:30rpx}.row3 .item>.l{color:#fff;font-size:28rpx;margin-right:16rpx;white-space:nowrap}.row3 .item>.r{overflow-x:auto;white-space:nowrap}.row3 .item>.r .tag{display:inline-block;margin-right:20rpx}.row3 .item>.r .tag .inner{align-items:center;background:rgba(0,0,0,.3);border-radius:30rpx;display:-webkit-flex;display:flex;height:60rpx;padding-left:38rpx;padding-right:38rpx}.row3 .item>.r .tag .inner .icon{height:32rpx;margin-right:12rpx;width:32rpx}.row3 .item>.r .tag .inner .name{color:#fff;font-size:28rpx}.row3 .item>.r .tag .inner .jt{height:48rpx;width:48rpx}.row4{padding:0 30rpx 32rpx}.row4 .title-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:32rpx}.row4 .title-box>.l{color:#fff;font-size:36rpx;line-height:50rpx}.row4 .title-box .button-show{align-items:center;display:-webkit-flex;display:flex}.row4 .title-box .button-show .button-show-text{color:hsla(0,0%,100%,.6);font-size:24rpx;margin-right:5rpx}.row4 .text-box{color:#fff;font-size:28rpx;line-height:40rpx;text-align:justify;text-indent:0;word-break:break-word}.row5{padding:0 30rpx 48rpx}.row7{padding:0 0 48rpx 30rpx}.row7 .title-box{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:28rpx;width:713rpx}.row7 .title-box>.l{color:#fff;font-size:36rpx;line-height:50rpx}.row7 .title-box>.r{align-items:center;display:-webkit-flex;display:flex}.row7 .title-box>.r view{color:hsla(0,0%,100%,.6);font-size:28rpx}.row7 .title-box>.r image{height:48rpx;width:48rpx}.row7 .item-box{overflow-x:auto;white-space:nowrap}.row7 .item-box .item{border-radius:10rpx;display:inline-block;height:248rpx;margin-right:22rpx;overflow:hidden;position:relative;width:440rpx}.row7 .item-box .item .img{height:100%;width:100%}.row7 .item-box .item .mask{background-color:rgba(0,0,0,.3);height:100%;position:absolute;top:0;width:100%}.row7 .item-box .item .mask .icon{height:80rpx;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:80rpx}.painter{height:960rpx;left:-5000rpx;position:absolute;top:0;width:543rpx;z-index:100}.pic-mask{background:rgba(0,0,0,.3);bottom:0;left:0;position:fixed;right:0;top:0;z-index:100}.pic-mask .pic-box{left:50%;position:fixed;top:50%;transform:translate(-50%,-50%);width:100%;z-index:200}.pic-mask .pic-box video{height:550rpx;width:100%}
</style>
