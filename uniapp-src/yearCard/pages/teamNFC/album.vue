<template>
<!--yearCard/pages/teamNFC/album.wxml-->
<text>yearCard/pages/teamNFC/album.wxml</text>
</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              specialBanner: function() {
                n.e("yearCard/pages/teamNFC/components/specialBanner").then(function() {
                  return resolve(n("e09a"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                tabList: [{
                  classId: "",
                  className: "全部"
                }],
                tabIt: {},
                tabId: "",
                waterfallList: [],
                menuButtonInfo: {},
                cardList: [],
                paddingTop: 0,
                tabH: 0,
                mapH: 4,
                bannerList: [],
                currentData: "",
                showSwiper: !1,
                swiperMargin: "40px",
                swiperIndex: 0,
                teamId: 0,
                routes: []
              }
            },
            onLoad: function(t) {
              this.teamId = t.teamId || 1, this.menuButtonInfo = uni.getMenuButtonBoundingClientRect(), this.paddingTop = this.$util.pxToRpx(this.menuButtonInfo.bottom) + 12, this.tabH = this.paddingTop + 56, this.mapH = this.$util.rpxToPx(12), this.swiperMargin = this.$util.rpxToPx(70) + "px", this.getTeamClass(), this.getTeamPage(), this.routes = getCurrentPages()
            },
            onShareAppMessage: function() {
              return {
                title: "「青途文旅」四川团建之旅",
                imageUrl: "https://eshopfile.zhiyousx.com/2025111815285164535.jpg",
                path: "/yearCard/pages/teamNFC/index?teamId=".concat(this.teamId)
              }
            },
            onShareTimeline: function() {
              return {
                title: "「青途文旅」四川团建之旅",
                imageUrl: "https://eshopfile.zhiyousx.com/2025111815285164535.jpg",
                path: "/yearCard/pages/teamNFC/index?teamId=".concat(this.teamId)
              }
            },
            methods: {
              getTeamClass: function() {
                var e = this;
                this.$uniApi.getRequestNoLoading("GET", "base/app/v1/teamBuilding/fileClass/selectByTeamBuildingId/".concat(this.teamId)).then((function(t) {
                  if (1 === t.code) {
                    var n = t.data || [];
                    n.unshift({
                      classId: "",
                      className: "全部"
                    }), e.tabList = n
                  }
                }))
              },
              getTeamPage: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/teamBuilding/file/selectPage", {
                  fileClassId: this.tabId,
                  teamBuildingId: this.teamId,
                  current: 1,
                  size: 999
                }).then((function(t) {
                  1 === t.code && (e.cardList = t.data.records || [], e.bannerList = e.cardList)
                }))
              },
              changeTab: function(e) {
                this.tabId = e.classId, this.tabIt = e, this.getTeamPage()
              },
              swiperChangeEnd: function(e) {
                this.currentData = e
              },
              download: function() {
                var t = this;
                return (0, s.default)(r.default.mark((function n() {
                  var a, i;
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, uni.showLoading({
                          title: "下载中"
                        });
                      case 2:
                        return n.next = 4, uni.downloadFile({
                          url: t.currentData.url
                        });
                      case 4:
                        return a = n.sent, i = a[1].tempFilePath, n.next = 8, e.saveImageToPhotosAlbum({
                          filePath: i
                        });
                      case 8:
                        return n.sent, uni.hideLoading(), n.next = 12, uni.showToast({
                          title: "下载成功"
                        });
                      case 12:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              imgClick: function(e, t) {
                this.currentData = e, this.showSwiper = !0, this.swiperIndex = t
              },
              shareImg: function() {
                var t = this;
                return (0, s.default)(r.default.mark((function n() {
                  var i, s;
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, uni.showLoading({
                          title: "分享中"
                        });
                      case 2:
                        return n.next = 4, uni.downloadFile({
                          url: t.currentData.url
                        });
                      case 4:
                        i = n.sent, s = i[1].tempFilePath, a.showShareImageMenu({
                          path: s,
                          success: function(t) {
                            console.log(t), uni.hideLoading()
                          }
                        });
                      case 7:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              pageBack: function() {
                1 == this.routes.length ? uni.redirectTo({
                  url: "/yearCard/pages/teamNFC/index"
                }) : uni.navigateBack()
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background:#000}.page-box{background-image:url('https://eshopfile.zhiyousx.com/2025111710212136299.png');background-repeat:no-repeat;background-size:100% 1622rpx;height:100vh;position:relative;width:100%}.page-box .top-box{background-color:initial;height:auto;position:-webkit-sticky;position:sticky;top:0;z-index:20}.page-box .top-box .tab-box{height:56rpx;white-space:nowrap;width:750rpx}.page-box .top-box .tab-box .tab-item{background:hsla(0,0%,100%,.1);border-radius:40rpx;color:hsla(0,0%,100%,.8);display:inline-block;font-size:26rpx;height:56rpx;line-height:56rpx;margin-left:20rpx;padding:0 20rpx;position:relative}.page-box .top-box .tab-box .active{background:#fff;color:#000;font-size:26rpx;font-weight:700}.page-box .waterfall{flex:1;overflow:hidden;padding:20rpx;position:relative;width:100%;z-index:10}.page-box .waterfall .waterImg{border-radius:8rpx;box-shadow:0rpx 0rpx 3rpx 0rpx rgba(78,137,255,.25);width:226rpx}.page-box .waterfall .class-top-box{display:-webkit-flex;display:flex;flex-direction:column;height:276rpx;padding:12rpx;width:226rpx}.page-box .waterfall .class-top-box .text-nor{color:#fff;font-size:26rpx;line-height:36rpx;text-shadow:0 2rpx 2rpx rgba(0,0,0,.3)}.page-box .waterfall .class-top-box .icon1{height:26rpx;margin:4rpx 0 10rpx;width:68rpx}.page-box .waterfall .class-top-box .icon2{height:28rpx;margin:14rpx 0 10rpx;width:144rpx}.page-box .waterfall .class-top-box .line1{border-top:1px dashed #fff;width:146rpx}.page-box .waterfall .class-top-box .line{border-top:1px dashed #fff}.page-box .waterfallHide{opacity:0}.page-box .swiper-container{background:transparent;left:0;position:fixed;width:750rpx;z-index:20}.page-box .swiper-container .swiper-bg{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:100%;position:relative;width:100%}.page-box .swiper-container .swiper-bg .bg-img{height:106rpx;position:absolute;top:86rpx;width:468rpx}.page-box .swiper-container .swiper-bg .swiper-List{margin-top:290rpx;width:750rpx}.page-box .swiper-container .swiper-bg .swiper-List .swiper{height:792rpx;width:750rpx}.page-box .swiper-container .swiper-bg .swiper-List .swiper .slide-image{border-radius:20rpx;height:792rpx;width:566rpx;z-index:200}.page-box .swiper-container .swiper-bg .btns{height:70rpx;margin-top:118rpx}.page-box .swiper-container .swiper-bg .btns .btn{background:hsla(0,0%,100%,.08);border-radius:40rpx;box-shadow:0rpx 4rpx 8rpx 0rpx rgba(0,0,0,.05);color:hsla(0,0%,100%,.8);font-size:28rpx;height:70rpx;width:220rpx}.page-box .swiper-container .swiper-bg .btns .btn image{height:40rpx;margin-right:8rpx;width:40rpx}.page-box .swiper-container .swiper-bg .btns .btn-last{margin-left:44rpx}.home-btn{align-items:center;background:hsla(0,0%,100%,.7);border-radius:50%;box-shadow:0rpx 4rpx 12rpx 0rpx rgba(0,0,0,.1);display:-webkit-flex;display:flex;height:56rpx;justify-content:center;margin-left:20rpx;width:56rpx}.home-icon{height:40rpx;width:40rpx}
</style>
