<template>
<view class="container" v-if="content">
    <scroll-view :bounces="false" class="pageScroll" :enhanced="true" :scrollIntoView="pagepoint" :scrollWithAnimation="true" :scrollY="true">
        <view class="imagebox">
            <image class="headimg" mode="widthFix" :src="content.mainPictureUrl"></image>
            <view class="linearbg"></view>
        </view>
        <view class="scontent">
            <view class="title multilineText3">{{content.title}}</view>
            <view class="author" v-if="content.author||content.authorHeadPortraitUrl">
                <image :src="content.authorHeadPortraitUrl" v-if="content.authorHeadPortraitUrl"></image>
                <view class="name">{{content.author||''}}</view>
            </view>
            <view class="notice" v-if="content.statisticsList&&content.statisticsList[0]">
                <view class="item" :key="index" v-for="(item, index) in content.statisticsList">
                    <image :src="item.itemPictureUrl"></image>
                    <view class="singleLineText">{{item.content}}</view>
                </view>
            </view>
            <view class="richtext">
                <view :id="'tiji'+index" :key="index" v-for="(item, index) in $root.l1">
                    <view class="sectiontitle multilineText3" v-if="item.chapterTitle">{{item.chapterTitle}}</view>
                    <view :key="indexs" v-for="(items, indexs) in item.l0">
                        <u-parse :html="items.content" style="text-align:justify;" :vueSlots="['default']" v-if="!items.originId">
                            <text style="display:inline-block;"></text>
                        </u-parse>
                        <view class="mention" v-else>
                            <image class="img" mode="widthFix" :src="items.itemPictureUrl"></image>
                            <view class="spot" v-if="items.g0">
                                <view class="info">
                                    <view class="name">
                                        <image class="icon" src="../../static/images/pos.png"></image>
                                        <view class="t singleLineText">{{items.title}}</view>
                                    </view>
                                    <view class="price" v-if="items.g1">
                                        <text class="num" v-if="items.price">{{'￥'+items.price}}</text>
                                        <text>起</text>
                                    </view>
                                </view>
                            </view>
                            <view class="sl" v-if="items.mentionType==2">
                                <image mode="widthFix" src="../../static/images/collect.png"></image>
                                <view class="stitle singleLineText">{{items.title}}</view>
                                <view class="likeRate" v-if="items.mentionType==2&&items.favoriteValue">
                                    <text class="icon">喜爱值</text>
                                    <text class="num">{{items.favoriteValue}}</text>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="fixnav" v-if="content.isContainDirectory==1" @click="showmodal($event)">
            <image src="../../static/images/nav.png"></image>
            <text>{{(content.type==10?'攻略':'游记')+'目录'}}</text>
        </view>
    </scroll-view>
    <u-popup mode="left" :value="show" :vueSlots="['default']" width="520" @input="show = $event">
        <view class="modail">
            <view class="tabs">
                <view :class="['tab',contentIndex==0?'active':'']" @click="togglecontent(0)">{{(content.type==10?'攻略':'游记')+'目录'}}</view>
                <view :class="['tab',contentIndex==1?'active':'']" :hidden="!content.mentionList[0]" @click="togglecontent(1)">文中提及</view>
                <view class="line" :style="'left:'+contentIndex*210+40+'rpx'+';'"></view>
            </view>
            <view class="scrollBoxLeft" :style="'height:'+scrollH+'px'+';'">
                <scroll-view :bounces="false" class="leftscroll" :enhanced="true" :scrollTop="showTab" :scrollWithAnimation="true" :scrollY="true" :style="'height:'+scrollH+'px'+';'" @scroll="scrollchange($event)">
                    <view class="lists" id="lists">
                        <view class="item singleLineText" :hidden="!item.chapterTitle" :key="index" v-for="(item, index) in content.chapterList">{{item.chapterTitle}}</view>
                    </view>
                    <view class="tabmention" :hidden="!content.mentionList[0]" id="tabmention">
                        <view class="title">以下内容在文中被提及</view>
                        <view class="spotList">
                            <view class="item" v-if="item.originId" :key="index" v-for="(item, index) in content.mentionList">
                                <image class="img" mode="aspectFill" :src="item.itemPictureUrl"></image>
                                <view class="info">
                                    <view class="name singleLineText">
                                        <text v-if="item.isBookable">订</text>{{item.title}}</view>
                                    <view class="rank singleLineText" v-if="item.rankingName">{{item.rankingName+'第'+item.rankingSort+'名'}}</view>
                                    <view class="likeRate" v-if="item.mentionType==2&&item.favoriteValue">
                                        <text class="icon">喜爱值</text>
                                        <text class="num">{{item.favoriteValue}}</text>
                                    </view>
                                    <view class="desc singleLineText" v-if="item.mentionType!=2&&item.subtitle">{{item.subtitle}}</view>
                                </view>
                            </view>
                        </view>
                    </view>
                </scroll-view>
            </view>
        </view>
    </u-popup>
</view>

</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
          props: [],
          onLoad: function(t) {
            this.contentId = t.id, this.getContent(), this.updateReadingNum(t.id)
          },
          data: function() {
            return {
              contentId: "",
              spotList: [1],
              show: !1,
              scrollH: 600,
              showTab: 0,
              listsDom: {},
              contentIndex: 0,
              pagepoint: "",
              content: "",
              scrolldistance: 0
            }
          },
          onPageScroll: function(t) {},
          onShareAppMessage: function(t) {
            var n = this.content.mainPictureUrl.toLowerCase(),
              e = "/subPage/pages/strategy/strategy?id=" + this.contentId;
            return {
              title: this.content.title,
              imageUrl: -1 == n.indexOf(".gif") ? this.content.mainPictureUrl : getApp().globalData.shareimg,
              path: this.$util.setShareUrl(e)
            }
          },
          onShow: function() {
            var n = uni.getSystemInfoSync(),
              e = n.statusBarHeight,
              i = 0,
              o = uni.getMenuButtonBoundingClientRect();
            n.system.toLowerCase().indexOf("ios") > -1 ? i = o.bottom + 2 * (o.top - n.statusBarHeight) : i = o.height + 2 * (o.top - n.statusBarHeight) + e;
            var a = 750 / n.screenWidth,
              u = n.screenHeight;
            this.scrollH = parseInt(u - i - 100 / a)
          },
          onReachBottom: function() {},
          methods: {
            getContent: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/contentStrategyTravels/queryStrategyTravelsDetail?contentId=" + this.contentId).then((function(n) {
                t.content = n.data
              }))
            },
            togglecontent: function(t) {
              var n = [0, this.listsDom.height],
                e = this;
              e.showTab = -1, this.$nextTick((function() {
                e.showTab = n[t], e.contentIndex = t
              }))
            },
            showmodal: function() {
              this.show = !0;
              var t = this;
              this.getDomInfo().then((function(n) {
                t.listsDom = n[0]
              }))
            },
            scrollchange: function(t) {
              t.detail.scrollTop + 5 > this.listsDom.height ? this.contentIndex = 1 : this.contentIndex = 0
            },
            navtoArticle: function(t) {
              var n = this;
              this.show = !1, n.pagepoint = "", setTimeout((function() {
                n.pagepoint = "tiji" + t
              }), 200)
            },
            routerTo: function(t) {
              0 == t.mentionType && this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=".concat(t.originId)
              }), [1, 3, 4, 5].includes(Number(t.mentionType)) && this.$navigateTo({
                url: "/pages/spotDetail/spotDetail?spotId=" + t.originId
              }), 2 == t.mentionType && this.$navigateTo({
                url: "/pages/spotThirdDetail/spotThirdDetail?spotId=" + t.originId
              })
            },
            updateReadingNum: function(t) {
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/CommonReadingNum/updateReadingNum", {
                originType: 1,
                originId: t
              }).then((function(t) {
                console.log("add success")
              }))
            },
            getDomInfo: function(n) {
              var e = n || "#lists";
              return new Promise((function(n) {
                setTimeout((function() {
                  var i = uni.createSelectorQuery();
                  i.select(e).boundingClientRect(), i.exec((function(t) {
                    n(t)
                  }))
                }), 100)
              }))
            }
          }
        };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background:#fff}.container{border-top:1px solid #eee}.container .pageScroll{height:100vh}.container .fixnav{align-items:center;background:#ffefd5;border-radius:0 40rpx 40rpx 0;bottom:200rpx;box-shadow:0 5rpx 30rpx 0 rgba(0,0,0,.15);display:-webkit-flex;display:flex;height:80rpx;left:0;padding-left:40rpx;position:fixed;width:200rpx;z-index:3}.container .fixnav text{color:#945430;font-size:26rpx}.container .fixnav image{height:25rpx;margin-right:8rpx;width:27rpx}.container .modail{border-top:1px solid #eee;box-sizing:border-box;min-height:100vh;padding:100rpx 40rpx 0}.container .modail .scrollBoxLeft{overflow:hidden}.container .modail .tabs{align-items:center;background:#fff;display:-webkit-flex;display:flex;height:88rpx;left:0;padding-left:40rpx;position:fixed;top:0;width:100%;z-index:999}.container .modail .tabs .line{background:linear-gradient(-57deg,rgba(249,159,29,0),#fe581e);border-radius:10rpx;bottom:20rpx;height:20rpx;left:40rpx;position:absolute;transition:all .2s linear;width:128rpx;z-index:2}.container .modail .tabs .tab{color:#282828;font-size:28rpx;margin-right:82rpx;position:relative;white-space:nowrap;width:128rpx;z-index:3}.container .modail .tabs .tab.active{font-size:32rpx;font-weight:700}.container .modail .leftscroll{overflow:hidden}.container .modail .leftscroll .lists{padding-bottom:100rpx;padding-top:45rpx}.container .modail .leftscroll .lists .item{margin-bottom:60rpx}.container .modail .leftscroll .lists .item:last-child{margin-bottom:0}.container .modail .leftscroll .tabmention .title{color:#a6a6a6;font-size:24rpx;margin-bottom:40rpx}.container .modail .leftscroll .tabmention .spotList{min-height:100vh;padding:0rpx 0rpx 30rpx;position:relative}.container .modail .leftscroll .tabmention .spotList .item{display:-webkit-flex;display:flex;height:160rpx;margin-bottom:40rpx;position:relative}.container .modail .leftscroll .tabmention .spotList .item:last-child{margin-bottom:0}.container .modail .leftscroll .tabmention .spotList .item .img{background:#e0e0e0;border-radius:20rpx;height:160rpx;width:160rpx}.container .modail .leftscroll .tabmention .spotList .item .likeRate{position:relative}.container .modail .leftscroll .tabmention .spotList .item .likeRate text{display:inline-block}.container .modail .leftscroll .tabmention .spotList .item .likeRate .icon{background:#feac2c;border-radius:6rpx 18rpx 6rpx 18rpx;bottom:2rpx;color:#fff;font-size:20rpx;height:36rpx;left:0;line-height:36rpx;position:absolute;text-align:center;width:80rpx}.container .modail .leftscroll .tabmention .spotList .item .likeRate .num{background:#ffefd5;border-radius:16rpx 6rpx 6rpx 16rpx;color:#ff5411;font-size:24rpx;font-weight:400;height:32rpx;padding:0 14rpx 0 92rpx}.container .modail .leftscroll .tabmention .spotList .item .info{padding-left:30rpx;width:258rpx}.container .modail .leftscroll .tabmention .spotList .item .info .name{color:#333;font-size:26rpx;line-height:46rpx}.container .modail .leftscroll .tabmention .spotList .item .info .name text{background:linear-gradient(56deg,#f99f1d,#fe581e);border-radius:10rpx;color:#fff;display:inline-block;font-size:22rpx;height:30rpx;line-height:28rpx;margin-right:8rpx;text-align:center;vertical-align:3rpx;width:30rpx}.container .modail .leftscroll .tabmention .spotList .item .info .rank{background:#ffefd5;border-radius:4px 18px 18px 18px;color:#945430;display:inline-block;font-size:22rpx;height:36rpx;line-height:36rpx;margin:6rpx 0;max-width:258rpx;padding:0 16rpx}.container .modail .leftscroll .tabmention .spotList .item .info .desc{color:#959494;font-size:24rpx}.container .modail .leftscroll .tabmention .spotList .item .info .distance{align-items:center;color:#959494;display:-webkit-flex;display:flex;font-size:24rpx;margin-top:26rpx}.container .modail .leftscroll .tabmention .spotList .item .info .distance image{height:21rpx;margin-right:8rpx;width:18rpx}.container .imagebox{height:auto;overflow:hidden;position:relative;width:750rpx}.container .imagebox .headimg{float:left;width:100%}.container .imagebox .linearbg{background:linear-gradient(0deg,rgba(0,0,0,.7),rgba(0,0,0,.01));bottom:0;height:210rpx;left:0;position:absolute;width:100%}.container .scontent{background:#fff;border-radius:30rpx 30rpx 0 0;margin-top:-40rpx;padding:50rpx 40rpx;position:relative;z-index:2}.container .scontent .author{align-items:center;display:-webkit-flex;display:flex;margin-top:40rpx}.container .scontent .author image{border-radius:50%;height:40rpx;margin-right:20rpx;width:40rpx}.container .scontent .author .name{color:#747373;font-size:24rpx}.container .scontent .title{color:#222;font-size:36rpx;font-weight:700;line-height:50rpx}.container .scontent .notice{background:#fff9ee;border-radius:10rpx;margin:40rpx 0;padding:23rpx}.container .scontent .notice .item{align-items:center;display:-webkit-flex;display:flex;height:34rpx;margin-bottom:26rpx}.container .scontent .notice .item:last-child{margin-bottom:0}.container .scontent .notice .item image{height:34rpx;margin-right:22rpx;width:34rpx}.container .scontent .notice .item view{color:#333;font-size:26rpx;width:560rpx}.container .scontent .richtext{margin-top:40rpx}.container .scontent .richtext .sectiontitle{color:#222;font-size:34rpx;font-weight:700;padding-bottom:30rpx;padding-top:60rpx}.container .scontent .richtext .mention{background:#fff;border-radius:20rpx;box-shadow:0 0 30rpx 0 hsla(32,41%,61%,.2);margin:40rpx 0rpx;min-height:200rpx;padding:20rpx}.container .scontent .richtext .mention .img{border-radius:20rpx;margin-bottom:10rpx;width:630rpx}.container .scontent .richtext .mention .icon{height:27rpx;width:24rpx}.container .scontent .richtext .mention .likeRate{margin-left:36rpx;position:relative}.container .scontent .richtext .mention .likeRate text{display:inline-block}.container .scontent .richtext .mention .likeRate .icon{background:#feac2c;border-radius:6rpx 18rpx 6rpx 18rpx;bottom:2rpx;color:#fff;font-size:20rpx;height:36rpx;left:0;line-height:36rpx;position:absolute;text-align:center;width:80rpx}.container .scontent .richtext .mention .likeRate .num{background:#ffefd5;border-radius:16rpx 6rpx 6rpx 16rpx;color:#ff5411;font-size:24rpx;font-weight:400;height:32rpx;padding:0 14rpx 0 92rpx}.container .scontent .richtext .mention .spot .name{align-items:center;display:-webkit-flex;display:flex}.container .scontent .richtext .mention .spot .name .t{color:#282828;font-size:30rpx;margin-left:12rpx}.container .scontent .richtext .mention .spot .info{align-items:center;display:-webkit-flex;display:flex;justify-content:space-between;margin-bottom:10rpx}.container .scontent .richtext .mention .spot .info .price text{color:#9b9b9b;font-size:24rpx}.container .scontent .richtext .mention .spot .info .price text.num{color:#ff5411;font-size:28rpx;margin-right:10rpx}.container .scontent .richtext .mention .sl{align-items:center;display:-webkit-flex;display:flex}.container .scontent .richtext .mention .sl image{height:25rpx;width:25rpx}.container .scontent .richtext .mention .sl .stitle{color:#282828;font-size:32rpx;margin:0 0 0 10rpx;max-width:410rpx}
</style>
