<template>
<view class="u-wrap">
    <uni-navbar class="" type="transparentFixed"></uni-navbar>
    <view class="top-fixed-box" :style="'padding-top:'+statusBarHeight+5+'px'+';'">
        <view class="bg-color" id="top-fixed-box" :style="'background:'+'#fff'+';'+'opacity:'+1/row2height*scrollTop+';'"></view>
        <view class="headerinfo" id="headerinfo" :style="'transform:'+(!inTop?'translateY(0rpx)':'translateY('+headerH+'px)')+';'">
            <view class="r">
                <view class="title singleLineText">{{detailObj.rankingName}}</view>
                <view class="sub-title multilineText2">{{detailObj.sumCount+detailObj.rankingInclude}}</view>
            </view>
        </view>
    </view>
    <view class="headerInfo" :style="'height:'+(hasDesc?'560rpx':'430rpx')+';'">
        <view class="imgBg" :style="'background:'+'linear-gradient(to right,'+(detailObj.bottomColour||'#000000')+'99 0%,'+(detailObj.bottomColour||'#000000')+'00 100%)'+';'" v-if="detailObj.rankingName"></view>
        <image class="bgimg" mode="aspectFill" :src="detailObj.rankingMainPictureUrl"></image>
        <view class="msg">
            <view class="txt title multilineText2">{{detailObj.rankingName}}</view>
            <view class="txt info singleLineText">{{detailObj.sumCount+detailObj.rankingInclude+' '+(detailObj.rankingType==2?'丨 '+detailObj.favoriteSum+(detailObj.rankingTotalUserData||'人喜爱'):'')}}</view>
        </view>
        <view class="txt passed singleLineText" v-if="isLogin&&detailObj.rankingType==2">
            <image class="" src="https://eshopfile.zhiyousx.com/2021070214201624192.png"></image>
            <text class="">{{detailObj.rankingPersonalInfo+' '+detailObj.personalInfoValue}}</text>
        </view>
    </view>
    <view class="desc" v-if="hasDesc">
        <text class="">{{detailObj.rankingDescribe}}</text>
        <image class="top" src="https://eshopfile.zhiyousx.com/2021070217421187774.png"></image>
        <image class="bottom" src="https://eshopfile.zhiyousx.com/2021070217423746945.png"></image>
    </view>
    <view class="spotinfo" id="spotinfo">
        <spot-list class=" vue-ref" ref="spotList" :datas="detailObj.rankingItemList" :rankingType="detailObj.rankingType" :type="detailObj.type"></spot-list>
        <view class="noinfo" v-if="!$root.g0">
            <image class="noGoods" mode="widthFix" src="/static/captured/51d17a011d27445c.png"></image>
            <view class="">暂无榜单</view>
        </view>
    </view>
</view>

</template>

<script>
import uniNavbar from "@/components/uni-navbar/uni-navbar.vue";
import spotList from "@/components/spotList/spotList.vue";

// Reconstructed Vue Component
const t = uni;
export default {
  components: {
    uniNavbar,
    spotList
  },
  data: function() {
            return {
              statusBarHeight: "",
              postUrl: "",
              inTop: !0,
              scrollTop: 0,
              headerH: 0,
              row2height: 0,
              hasDesc: !1,
              contentId: "",
              detailObj: {},
              current: 1,
              isLogin: ""
            }
          },
          filters: {
            timeFormat: function(t) {
              return t.replace(/-/g, ".")
            }
          },
          onShow: function() {
            this.isLogin = uni.getStorageSync("token") || ""
          },
          onLoad: function(n) {
            var e = this;
            this.contentId = n.id, this._urlToShare = "/pages/ranking/ranking?id=" + n.id, this.rankDetail(), uni.getSystemInfo({
              success: function(n) {
                e.statusBarHeight = uni.getSystemInfoSync().statusBarHeight, e._transformNumTemp = 1, e.headerH = e.statusBarHeight + 5 + Math.ceil(n.windowWidth / 750 * 104)
              }
            })
          },
          onReachBottom: function() {
            this.current++, this.rankDetail()
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, this.row2height < t.scrollTop ? this.inTop = !1 : this.inTop = !0
          },
          onShareAppMessage: function(t) {
            var n = this.detailObj.rankingSharePictureUrl;
            return {
              title: this.detailObj.rankingName,
              imageUrl: n || "",
              path: this.$util.setShareUrl(this._urlToShare),
              bgImgUrl: n || "",
              scImgUrl: n || ""
            }
          },
          methods: {
            rankDetail: function() {
              var n = this,
                e = this;
              t.showNavigationBarLoading(), this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/contentRanking/selectRankingDetails?contentId=".concat(e.contentId, "&size=10&current=").concat(e.current)).then((function(i) {
                t.hideNavigationBarLoading(), 1 == e.current && (e.detailObj = i.data), e.current > 1 && i.data.rankingItemList && i.data.rankingItemList[0] && (e.detailObj.rankingItemList = e.detailObj.rankingItemList.concat(i.data.rankingItemList)), !(e.current > 1) || i.data.rankingItemList && i.data.rankingItemList[0] || uni.showToast({
                  title: "没有更多咯~",
                  icon: "none"
                }), i.data.rankingDescribe && (n.hasDesc = !0), e.current > 1 || n.$nextTick((function() {
                  new Promise((function(n) {
                    var e = uni.createSelectorQuery();
                    e.select("#spotinfo").boundingClientRect(), e.exec((function(t) {
                      n(t)
                    }))
                  })).then((function(t) {
                    e.row2height = t[0].top - e.headerH
                  }))
                }))
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background-color:#fff}.u-wrap{min-height:100vh}.u-wrap .top-fixed-box{background:none;box-sizing:border-box;display:-webkit-flex;display:flex;left:0;overflow:hidden;padding:0 96rpx 24rpx;position:fixed;top:0;transition:all .3s linear;width:100%;z-index:10}.u-wrap .top-fixed-box .bg-color{height:100%;left:0;position:absolute;top:0;width:100%}.u-wrap .top-fixed-box .headerinfo{display:-webkit-flex;display:flex;transform:translateY(155rpx);transition:all .1s linear}.u-wrap .top-fixed-box .l{border-radius:4rpx;box-shadow:0 2rpx 10rpx 0 rgba(0,0,0,.2);height:80rpx;margin-right:12rpx;overflow:hidden;width:80rpx}.u-wrap .top-fixed-box .l.active{transition:.3s}.u-wrap .top-fixed-box .l .mainImg{background-color:#aaa;height:100%;width:100%}.u-wrap .top-fixed-box .r{z-index:2}.u-wrap .top-fixed-box .r.active{transition:.3s}.u-wrap .top-fixed-box .r .title{color:#333;font-size:26rpx;font-weight:700;line-height:40rpx;margin-bottom:4rpx;position:relative}.u-wrap .top-fixed-box .r .title .star{background:url('https://eshopfile.zhiyousx.com/spotDetailNew/xingji.png');background-size:100% 100%;color:#fff;font-size:20rpx;height:42rpx;line-height:34rpx;position:absolute;right:0;text-align:center;top:0;width:70rpx}.u-wrap .top-fixed-box .r .sub-title{color:#777474;font-size:24rpx;line-height:34rpx;width:410rpx}.u-wrap .desc{background:#b59f85;border-radius:4rpx 40rpx 40rpx 40rpx;margin-left:40rpx;margin-top:-130rpx;padding:37rpx 61rpx 39rpx 58rpx;position:relative;width:670rpx;z-index:9}.u-wrap .desc text{color:#fff;line-height:40rpx;position:relative;z-index:9}.u-wrap .desc image{height:47rpx;position:absolute;width:52rpx}.u-wrap .desc image.top{left:20rpx;top:20rpx}.u-wrap .desc image.bottom{bottom:20rpx;right:20rpx}.u-wrap .noinfo .noGoods{display:block;margin:50rpx auto;width:300rpx}.u-wrap .noinfo view{color:#777;text-align:center}.u-wrap .headerInfo{height:430rpx;position:relative;width:100%}.u-wrap .headerInfo .imgBg{height:100%;left:0;position:absolute;top:0;width:50%}.u-wrap .headerInfo .bgimg{height:100%;width:100%}.u-wrap .headerInfo .bgimg ._img{float:left}.u-wrap .headerInfo .msg{left:40rpx;position:absolute;top:220rpx}.u-wrap .headerInfo .txt{color:#fff;font-weight:400;text-shadow:0 3px 1px rgba(0,0,0,.3);width:670rpx}.u-wrap .headerInfo .txt.title{font-size:46rpx;font-weight:700}.u-wrap .headerInfo .txt.info{font-size:24rpx;margin-top:20rpx}.u-wrap .headerInfo .txt.passed{align-items:center;display:-webkit-flex;display:flex;left:40rpx;position:absolute;top:385rpx}.u-wrap .headerInfo .txt.passed image{height:24rpx;margin-right:11rpx;width:21rpx}.u-wrap .headerInfo .txt.passed text{color:#fff;font-size:26rpx;font-weight:400;text-shadow:0 3px 1px rgba(0,0,0,.3)}
</style>
