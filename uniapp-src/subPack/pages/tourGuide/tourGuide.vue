<template>
<view class="box">
    <view class="navbar" :style="'height:'+searchHeight+38+'px'+';'+'background:'+'rgba(255,255,255,'+scrollColor/255+')'+';'+'padding-top:'+searchHeight+'px'+';'">
        <view class="arrowleftBox" @click="back()">
            <image class="header_icon" mode="aspectFit" src="/static/zhouWei-navBar/icon_home_black.png" v-if="firstPage"></image>
            <image class="header_icon" mode="aspectFit" src="/static/zhouWei-navBar/icon_back_black.png" v-else></image>
        </view>
        <view class="navName" :style="'color:'+fontColor+';'">{{pageTitle}}</view>
    </view>
    <view class="title-bj" :style="'height:'+searchHeight+110+'px'+';'"></view>
    <view class="card">
        <view class="card-title">
            <image class="title-img" mode="aspectFill" :src="detailObj.picUrl"></image>
            <view class="card-name">
                <view class="name multilineText2 _p">{{detailObj.nick}}</view>
                <view class="document" v-if="detailObj.level" @click="openDialog($event)">
                    <image class="document-icon" mode="aspectFill" :src="documentList[detailObj.level].icon"></image>
                    <view class="document-text _p">{{documentList[detailObj.level].text}}</view>
                </view>
            </view>
        </view>
        <view class="remark">
            <view class="remark-top">
                <view class="p2">{{$root.m0}}</view>
            </view>
            <view class="remark-text multilineText2">{{detailObj.introduction}}</view>
        </view>
    </view>
    <view class="date">
        <view class="date-title">
            <image class="date-icon" mode="aspectFill" src="https://eshopfile.zhiyousx.com/169707731351900004.png"></image>
            <view class="text _p">他的团期</view>
            <image class="date-icon" mode="aspectFill" src="https://eshopfile.zhiyousx.com/169707714305384722.png"></image>
        </view>
        <view class="date-list">
            <view :class="['goods-item','',!item.stockStatus||item.sellOut?'disable':'']" :key="index" v-for="(item, index) in $root.l0">
                <view class="img-box">
                    <image class="goods-img" mode="aspectFill" :src="item.productPic"></image>
                </view>
                <view class="goods-info">
                    <view class="name multilineText2">{{item.productName}}</view>
                    <scroll-view class="tips" scrollX="true" v-if="item.lineHighlightLabelList">
                        <view class="it" :key="num" v-for="(li, num) in item.lineHighlightLabelList">{{li}}</view>
                    </scroll-view>
                    <view :class="['ramark','',!item.lineHighlightLabelList?'mp':'']">{{ item.m1 }}</view>
                    <view class="price" v-if="!item.stockStatus||item.sellOut">
                        <view class="item-btn">售罄</view>
                    </view>
                    <view class="price" v-else>
                        <label class="icon _span">￥</label>{{''+item.price}}<label class="_span" v-if="item.startPriceFlag">起</label>
                    </view>
                </view>
            </view>
            <view class="empty" v-if="$root.g0">
                <empty-state class="" imgUrl="https://eshopfile.zhiyousx.com/noOrder@2x.png" text="暂无产品"></empty-state>
            </view>
            <view class="loadMore" v-else>
                <u-loadmore bgColor="#f7f7f7" class="" color="#ccc" iconColor="#ccc" :status="loadMore"></u-loadmore>
            </view>
        </view>
    </view>
    <u-popup borderRadius="20" class="" :closeable="true" mode="bottom" :value="businessShow" :vueSlots="['default']" @input="businessShow = $event">
        <view class="detailBox">
            <view class="title">导游证件</view>
            <scroll-view class="content" :scrollY="true">
                <view class="busins-item" v-if="detailObj.certificate">
                    <image class="" mode="widthFix" :src="detailObj.certificate"></image>
                </view>
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
              EmptyState: function() {
                o.e("components/empty/empty").then(function() {
                  return resolve(o("a427"))
                }.bind(null, o)).catch(o.oe)
              }
            },
            data: function() {
              return {
                loadMore: "loading",
                businessShow: !1,
                searchHeight: 0,
                typeList: ["全部", "跟团游", "一日游", "自由行", "研学游"],
                current: 1,
                goodList: [1, 2, 3, 4, 5, 6, 7],
                scrollTop: 0,
                scrollColor: 0,
                fontColor: "rgb(255,255,255)",
                pageTitle: "",
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
                isRefresh: !1,
                productList: [],
                detailObj: {},
                tourGuideId: "",
                firstPage: !1
              }
            },
            onReady: function() {},
            onLoad: function(e) {
              var o = uni.getMenuButtonBoundingClientRect();
              this.searchHeight = o.top, this.tourGuideId = e.tourGuideId, this.getDetailObj(), this.getProductList();
              var i = getCurrentPages();
              1 != i.length || ["pages/index/index", "pages/index/index"].includes(i[0].route) || (this.firstPage = !0)
            },
            onUnload: function() {},
            onShow: function() {},
            onShareAppMessage: function() {
              var t = "/subPack/pages/tourGuide/tourGuide?tourGuideId=".concat(this.tourGuideId);
              return {
                title: this.detailObj.nick,
                path: this.$util.setShareUrl(t),
                imageUrl: this.detailObj.picUrl
              }
            },
            onPageScroll: function(t) {
              if (this.scrollTop = t.scrollTop, this.scrollColor = this.scrollTop <= 255 ? this.scrollTop : 255, this.pageTitle = this.scrollTop <= 255 ? "" : this.detailObj.nick, this.scrollColor <= 255) {
                var e = 255 - this.scrollColor;
                this.fontColor = "rgb(".concat(e, ",").concat(e, ",").concat(e, ")")
              }
            },
            onReachBottom: function() {
              "loadmore" == this.loadMore ? (this.current += 1, this.getProductList()) : this.$uni.showToast("没有更多了")
            },
            methods: {
              openDialog: function() {
                this.businessShow = !0
              },
              getDetailObj: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/travelAgency/getTourGuideDetail?tourGuideId=" + this.tourGuideId).then((function(e) {
                  1 === e.code && (t.detailObj = e.data)
                }))
              },
              getDec: function(t) {
                var e, o = "",
                  i = "",
                  n = "",
                  r = "";
                return t.cityList && t.cityList.forEach((function(t, e) {
                  i += t + "/"
                })), i && (i = i.slice(0, -1) + " · "), e = ["跟团游", "一日游", "自由行", "研学游"][t.travelMode], t.journeyDay && (n = t.journeyDay + "天"), t.journeyNight && (r = t.journeyNight + "晚"), (n || r) && (o = " · " + n + r), i + e + o
              },
              getProductList: function() {
                var t = this,
                  e = {
                    size: 10,
                    current: this.current,
                    tourGuideId: this.tourGuideId
                  };
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/travelAgency/getTourGuideProductList", e).then((function(e) {
                  var o;
                  1 === e.code && (t.loadMore = e.data.records.length > 9 ? "loadmore" : "nomore", (o = t.productList).push.apply(o, (0, n.default)(e.data.records)))
                }))
              },
              cityName: function(t) {
                var e = "";
                return t.forEach((function(t, o) {
                  e += t + "/"
                })), e.slice(0, -1)
              },
              goGoodInfo: function(t, e) {
                var o = "/subPack/pages/lineProductDetails/lineProductDetails?productId=" + t;
                this.$navigateTo({
                  url: o
                })
              },
              tagList: function(t) {
                var e = "";
                return t && t.forEach((function(t) {
                  e += t.tagName + "·"
                })), e.slice(0, -1)
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
.box .navbar{left:0;padding-left:35rpx;position:fixed;top:0;width:100%;z-index:300}.box .navbar .arrowleftBox,.box .navbar{align-items:center;display:-webkit-flex;display:flex}.box .navbar .arrowleftBox{background-color:hsla(0,0%,100%,.7);border:2rpx solid rgba(0,0,0,.1);border-radius:50%;height:56rpx;justify-content:center;width:56rpx}.box .navbar .arrowleftBox .header_icon{height:40rpx;width:40rpx}.box .navbar .navName{font-size:34rpx;margin-left:10rpx}.box .title-bj{background:linear-gradient(180deg,#4650aa,rgba(70,80,170,0));height:289rpx;width:100%}.box .card{background:url('https://eshopfile.zhiyousx.com/169701680349048940.png');background-size:100%;border-radius:20rpx;box-shadow:0rpx 10rpx 10rpx 0rpx rgba(0,0,0,.05);margin-left:20rpx;margin-top:-57px;padding:20rpx;width:710rpx}.box .card .card-title{align-items:center;display:-webkit-flex;display:flex}.box .card .card-title .title-img{border-radius:50%;height:140rpx;width:140rpx}.box .card .card-title .card-name{margin-left:20rpx;width:524rpx}.box .card .card-title .card-name .name{color:rgba(0,0,0,.8);font-size:32rpx;font-weight:700}.box .card .card-title .card-name .document{align-items:center;border:1rpx solid rgba(0,0,0,.1);border-radius:16rpx;display:-webkit-flex;display:flex;height:34rpx;margin-top:10rpx;padding:0 14rpx;width:160rpx}.box .card .card-title .card-name .document .document-icon{height:24rpx;width:24rpx}.box .card .card-title .card-name .document .document-text{color:rgba(0,0,0,.8);font-size:20rpx;margin-left:6rpx}.box .card .remark{background:#fff;border-radius:20rpx;margin-top:-5rpx;padding:30rpx 20rpx;width:100%}.box .card .remark .remark-top{display:-webkit-flex;display:flex}.box .card .remark .remark-top .p2{color:rgba(0,0,0,.5);font-size:26rpx;line-height:37rpx}.box .card .remark .remark-text{color:rgba(0,0,0,.5);font-size:24rpx;line-height:42rpx;margin-top:14rpx}.box .date{padding:30rpx 20rpx}.box .date .date-title{align-items:center;display:-webkit-flex;display:flex;justify-content:center}.box .date .date-title .date-icon{height:20rpx;width:40rpx}.box .date .date-title .text{color:rgba(0,0,0,.8);font-size:28rpx;margin:0 20rpx}.box .date .date-list{margin-top:30rpx}.box .date .date-list .goods-item{background:#fff;border-radius:20rpx;display:-webkit-flex;display:flex;margin-bottom:10rpx;padding:10rpx;width:100%}.box .date .date-list .goods-item .img-box{border-radius:10rpx 30rpx 20rpx 20rpx;box-shadow:6rpx 0rpx 0rpx 0rpx rgba(0,0,0,.15),12rpx 0rpx 0rpx 0rpx rgba(0,0,0,.05);width:200rpx}.box .date .date-list .goods-item .img-box .goods-img{border-radius:10rpx 30rpx 20rpx 20rpx;height:100%;width:100%}.box .date .date-list .goods-item .goods-info{margin-left:30rpx;padding-right:20rpx;width:460rpx}.box .date .date-list .goods-item .goods-info .name{color:rgba(0,0,0,.8);font-size:28rpx;font-weight:700;margin-top:10rpx}.box .date .date-list .goods-item .goods-info .tips{height:38rpx;margin-top:10rpx;white-space:nowrap;width:100%}.box .date .date-list .goods-item .goods-info .tips .it{border:1rpx solid #8d7c51;border-radius:20rpx;color:#8d7c51;display:inline-block;font-size:22rpx;height:32rpx;line-height:30rpx;margin-right:10rpx;padding:0 14rpx}.box .date .date-list .goods-item .goods-info .mp{margin-bottom:38rpx}.box .date .date-list .goods-item .goods-info .ramark{color:rgba(0,0,0,.5);display:-webkit-flex;display:flex;font-size:24rpx;margin-top:14rpx}.box .date .date-list .goods-item .goods-info .ramark ._span{align-items:center;display:-webkit-flex;display:flex}.box .date .date-list .goods-item .goods-info .ramark .dian{font-size:40rpx;padding:0 6rpx}.box .date .date-list .goods-item .goods-info .price{align-items:center;color:#ff5411;display:-webkit-flex;display:flex;font-size:36rpx;font-weight:700;height:34rpx;justify-content:flex-end;line-height:34rpx;margin:14rpx 0;text-align:right;width:100%}.box .date .date-list .goods-item .goods-info .price .item-btn{background:linear-gradient(107deg,#ffb2d5,#ffc1aa);border-radius:30px;color:#fff;font-size:26rpx;height:50rpx;line-height:50rpx;text-align:center;width:120rpx}.box .date .date-list .goods-item .goods-info .price ._span{color:#999;font-size:24rpx;margin:0 5rpx}.box .date .date-list .goods-item .goods-info .price .icon{color:#ff5411;font-size:24rpx}.box .date .date-list .disable{background:#eee}.box .detailBox{background:#fff;max-height:1200rpx;min-height:1000rpx;padding:40rpx;width:750rpx}.box .detailBox .title{color:#333;font-size:36rpx;line-height:54rpx}.box .detailBox .content{margin-top:70rpx;max-height:1000rpx;width:100%}.box .detailBox .content .busins-item{margin-top:30rpx}.box .detailBox .content .busins-item .title{color:#333;font-size:36rpx;margin-bottom:30rpx}.box .detailBox .content .busins-item image{border-radius:10rpx;height:486rpx;width:670rpx}.box .detailBox .content .busins-item .otherImg{margin-bottom:20rpx}.box .detailBox .content .busins-item:nth-child(1){margin-top:0rpx}
</style>
