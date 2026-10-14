<template>
<!--yearCard/pages/nfcVideo/dnfAlbum.wxml-->
<text>yearCard/pages/nfcVideo/dnfAlbum.wxml</text>
</template>

<script>
// Reconstructed Vue Component
const t = uni;
export default {
            components: {
              specialBanner: function() {
                i.e("yearCard/pages/nfcVideo/components/specialBanner").then(function() {
                  return resolve(i("0814"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            data: function() {
              return {
                curIndex: 0,
                listLen: 6,
                titleTop: 0,
                swiperIndex: 0,
                mapH: 10,
                currentData: "",
                showSwiper: !1,
                routes: [],
                bannerList: [],
                tabId: 1,
                fileClassId: "",
                subList: [{
                  className: "全部",
                  fileClassId: ""
                }, {
                  fileClassId: 1,
                  className: "跃马迎春来"
                }, {
                  fileClassId: 2,
                  className: "鼓舞新春"
                }, {
                  fileClassId: 3,
                  className: "唐诗长廊"
                }, {
                  fileClassId: 4,
                  className: "翼马当先"
                }],
                nfcActivityId: 5
              }
            },
            onLoad: function(e) {
              uni.getMenuButtonBoundingClientRect(), this.titleTop = "418rpx", this.subHideHeight = "418rpx", this.subShowHeight = "358rpx", this.routes = getCurrentPages(), this.getClassList(), this.getImgList()
            },
            onShow: function() {},
            methods: {
              imgClick: function(t, e) {
                if (1 === t.fileType) this.currentData = t, this.showSwiper = !0, this.swiperIndex = e;
                else {
                  var i = this.bannerList.map((function(t) {
                    return {
                      url: t.url,
                      type: "video",
                      poster: t.coverImage || "".concat(t.url, "?vframe/jpg/offset/0")
                    }
                  }));
                  n.previewMedia({
                    sources: i,
                    current: e
                  })
                }
              },
              swiperChange: function(t) {
                this.curIndex = t.detail.current
              },
              swiperChangeEnd: function(t) {
                this.currentData = this.bannerList[t], console.log(this.currentData)
              },
              download: function() {
                var e = this;
                return (0, r.default)(s.default.mark((function i() {
                  var n, a;
                  return s.default.wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                      case 0:
                        return i.next = 2, uni.showLoading({
                          title: "下载中"
                        });
                      case 2:
                        return i.next = 4, uni.downloadFile({
                          url: e.currentData.url
                        });
                      case 4:
                        return n = i.sent, a = n[1].tempFilePath, i.next = 8, t.saveImageToPhotosAlbum({
                          filePath: a
                        });
                      case 8:
                        return i.sent, uni.hideLoading(), i.next = 12, uni.showToast({
                          title: "下载成功"
                        });
                      case 12:
                      case "end":
                        return i.stop()
                    }
                  }), i)
                })))()
              },
              pageBack: function() {
                1 == this.routes.length ? uni.redirectTo({
                  url: "/yearCard/pages/nfcVideo/jz"
                }) : uni.navigateBack()
              },
              changeTab: function(t) {
                t != this.tabId && (this.tabId = t, this.fileClassId = "", this.subList = [], this.bannerList = [], 1 == this.tabId ? this.getClassList() : this.titleTop = this.subHideHeight, this.showSwiper = !1, this.getImgList())
              },
              getClassList: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/nfc/skiing/file/class/selectClassHaveFile", {
                  fileType: this.tabId,
                  nfcActivityId: this.nfcActivityId
                }).then((function(e) {
                  if (1 === e.code) {
                    var i = e.data || [];
                    i.length > 0 ? (i.unshift({
                      fileClassId: "",
                      className: "全部"
                    }), t.titleTop = t.subShowHeight) : t.titleTop = t.subHideHeight, t.subList = i
                  }
                }))
              },
              changeSub: function(t) {
                t.fileClassId != this.fileClassId && (this.fileClassId = t.fileClassId, this.bannerList = [], this.getImgList())
              },
              getImgList: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/nfc/skiing/file/selectList", {
                  fileSource: 1,
                  fileClassId: this.fileClassId,
                  fileType: this.tabId,
                  nfcActivityId: this.nfcActivityId
                }).then((function(e) {
                  if (1 === e.code) {
                    var i = e.data || [];
                    i.forEach((function(e, i) {
                      1 == t.tabId ? e.imageUrl = "".concat(e.url, "?imageView2/2/w/346") : e.coverImage ? e.imageUrl = "".concat(e.coverImage, "?imageView2/2/w/346") : e.imageUrl = "".concat(e.url, "?vframe/jpg/offset/0"), e.heightStr = e.height / e.width * 346 + "rpx"
                    })), t.bannerList = i
                  }
                }))
              }
            }
          };
</script>

<style scoped>
/* Reconstructed page stylesheet */
page{background:#ff2b85}.page-box{height:100vh;position:relative;width:100%}.page-box .page-bg{height:100vh;width:100%}.page-box .bg-box{align-items:center;background-repeat:no-repeat;display:-webkit-flex;display:flex;flex-direction:column;height:100vh;left:0;position:absolute;top:0;width:100%}.page-box .bg-box .logo{height:123rpx;margin-top:127rpx;width:338rpx}.top-box{margin-top:28rpx;padding-bottom:6rpx}.top-box .tab-box{align-items:center;display:-webkit-flex;display:flex;height:74rpx;justify-content:center;width:750rpx}.top-box .tab-box .tab-item{height:74rpx;position:relative;width:192rpx}.top-box .tab-box-sub{height:40rpx;margin-top:20rpx;white-space:nowrap;width:750rpx}.top-box .tab-box-sub .tab-item-before{display:inline-block;height:40rpx;width:20rpx}.top-box .tab-box-sub .tab-item-sub{border:2rpx solid hsla(0,0%,100%,.6);border-radius:20rpx;color:hsla(0,0%,100%,.6);display:inline-block;font-size:26rpx;height:40rpx;line-height:36rpx;margin-right:20rpx;padding:0 18rpx;position:relative}.top-box .tab-box-sub .tab-item-sub:last-of-type{margin-right:20rpx}.top-box .tab-box-sub .activeS{background:hsla(0,0%,100%,.6);border:none;color:#25295e;font-size:26rpx;font-weight:700;line-height:38rpx}.waterfall{flex:1;overflow:hidden;padding:10rpx 20rpx 0;position:relative;width:100%;z-index:10}.waterfall .waterImg{border:2rpx solid #fff;border-radius:20rpx;box-shadow:0rpx 0rpx 3rpx 0rpx rgba(78,137,255,.25);width:345rpx}.waterfallHide{opacity:0}.swiper-container{background:transparent;left:0;position:fixed;width:750rpx;z-index:20}.swiper-container .swiper-bg{align-items:center;display:-webkit-flex;display:flex;flex-direction:column;height:100%;position:relative;width:100%}.swiper-container .swiper-bg .swiper-List{margin-top:332rpx;width:750rpx}.swiper-container .swiper-bg .swiper-List .swiper{height:792rpx;width:750rpx}.swiper-container .swiper-bg .swiper-List .swiper .slide-image{border-radius:20rpx;height:792rpx;width:566rpx;z-index:200}.swiper-container .swiper-bg .download-btn{height:100rpx;margin-top:110rpx;width:492rpx}.swiper-container .swiper-bg .btns{height:70rpx;margin-top:118rpx}.swiper-container .swiper-bg .btns .btn{background:hsla(0,0%,100%,.08);border-radius:40rpx;box-shadow:0rpx 4rpx 8rpx 0rpx rgba(0,0,0,.05);color:hsla(0,0%,100%,.8);font-size:28rpx;height:70rpx;width:220rpx}.swiper-container .swiper-bg .btns .btn image{height:40rpx;margin-right:8rpx;width:40rpx}.swiper-container .swiper-bg .btns .btn-last{margin-left:44rpx}.home-box{align-items:flex-start;display:-webkit-flex;display:flex}.home-btn{align-items:center;background:hsla(0,0%,100%,.7);border-radius:50%;box-shadow:0rpx 4rpx 12rpx 0rpx rgba(0,0,0,.1);display:-webkit-flex;display:flex;height:56rpx;justify-content:center;margin-left:20rpx;margin-right:8rpx;width:56rpx}.home-icon{height:40rpx;width:40rpx}
</style>
