// Extracted from subPage/pages/lineInfo/lineInfo.js; webpack module ea0e.
// Compiled code for analysis; not an original source file.
module.exports = {
    ea0e: function(t, e, i) {
      (function(t, n) {
        var o = i("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = o(i("af34")),
          l = {
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
                var e = t.getMenuButtonBoundingClientRect();
                i.searchHeight = e.top + 38
              }), 500), t.getSystemInfo({
                success: function(e) {
                  n.safeAreaBottom = e.safeAreaInsets.bottom, t.setStorageSync("safeAreaBottom", n.safeAreaBottom)
                }
              });
              var o = getCurrentPages();
              1 != o.length || ["pages/index/index", "pages/index/index"].includes(o[0].route) || (this.firstPage = !0), this.queryGroup()
            },
            onUnload: function() {},
            onShow: function() {
              t.getStorageSync("activeDays") && (this.toDay(t.getStorageSync("activeDays") - 1), t.removeStorage({
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
                    var e = n.createSelectorQuery();
                    e.select("#xcmx").boundingClientRect(), e.select("#lineInfo").boundingClientRect(), e.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(t) {
                    i.xcmxTop = t[0] ? t[0].top + e.scrollTop : 0, i.lineInfoTop = t[1] ? t[1].top + e.scrollTop : 0
                  })), t.hideLoading(), e.loading = !1
                }), 700)
              },
              getDetailRowList: function() {
                var t = this,
                  e = this;
                setTimeout((function() {
                  new Promise((function(e) {
                    var i = n.createSelectorQuery();
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
                  t.hideLoading()
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
                t.showLoading({
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
                  t.hideLoading()
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
                }) : 4 === e.jumpType && (t.setStorageSync("richtext", e.richText), this.$navigateTo({
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
                this.firstPage ? t.switchTab({
                  url: "/pages/index/index"
                }) : t.navigateBack()
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
                t.openLocation({
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
                  var i = n.createSelectorQuery();
                  i.select("#detailRow" + e).boundingClientRect(), i.select("#lable_content").boundingClientRect(), i.exec((function(e) {
                    t(e)
                  }))
                })).then((function(e) {
                  var n = e[0] ? e[0].top : 0;
                  i.scrollToLeft = e[1] ? e[1].left : 0, i.scrollLock = !0, t.pageScrollTo({
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
                0 == this.moveType && this.istouchEnd && t.pageScrollTo({
                  scrollTop: 0,
                  duration: 300
                })
              },
              pageScrollTo: function() {
                this.content = "", setTimeout((function() {
                  t.pageScrollTo({
                    scrollTop: 999999,
                    duration: 0
                  })
                }), 200)
              },
              jumpSpotContentList: function(e, i) {
                t.setStorageSync("spotContentList", {
                  name: i.contentModuleName,
                  contentList: i.contentInfoVOList
                }), this.$navigateTo({
                  url: "/pages/spotContentList/spotContentList?scenicName=".concat(e)
                })
              },
              priviewImg: function(e) {
                t.previewImage({
                  current: e,
                  urls: [e]
                })
              }
            }
          };
        e.default = l
      }).call(this, i("df3c").default, i("3223").default)
    },
};
