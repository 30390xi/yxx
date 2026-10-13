// Extracted from subPack/pages/lineProductDetails/lineProductDetails.js; webpack module "47c2".
// Compiled code for analysis; not an original source file.
module.exports = {
    "47c2": function(t, e, i) {
      (function(t, o) {
        var n = i("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var s = n(i("7eb4")),
          a = n(i("ee10")),
          l = i("0408"),
          r = {
            components: {
              calendar: function() {
                i.e("subPack/components/calendar/calendar").then(function() {
                  return resolve(i("5c19"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            data: function() {
              return {
                searchHeight: 0,
                scrollTop: 0,
                isGoodFlex: !1,
                isProductFlex: !1,
                solutionTop: 0,
                productTop: 0,
                illustrateTop: 0,
                showService: !1,
                showSelectDate: !1,
                tripTop: 0,
                activeSolution: 0,
                activeDate: null,
                detailObj: {},
                fontColor: "rgb(255,255,255)",
                activeImg: 1,
                productList: ["产品特色", "行程明细", "购买须知"],
                activePro: 0,
                parseStyle: {
                  p: "word-break: break-all;line-height:40rpx;color:rgba(0, 0, 0, 0.6);font-size:26rpx",
                  img: "display: block"
                },
                safeAreaBottom: 0,
                customerShow: !1,
                productId: "",
                selectDateStr: "",
                dateList: [],
                selectDateObj: {},
                solutionList: [],
                loading: !1,
                firstPage: !1,
                configrights: "",
                scrollToDate: "",
                scrollToId: "",
                solutionNameHeight: "",
                solutionInfoHeight: "",
                applicationScroll: "",
                showHeight: 1e3,
                isLongContent: !0,
                showRead: !1,
                openText: "收起",
                closeText: "查看全部",
                shadowStyle: {
                  backgroundImage: "linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 80%)",
                  paddingTop: "300rpx",
                  marginTop: "-300rpx"
                },
                isShowMore: !1,
                showCoupon: !1,
                showBar: !0,
                couponList: [],
                tapIndex: null,
                noCouponFlag: null,
                shareMemberId: "",
                linePreview: 0
              }
            },
            filters: {
              timeFormat: function(t) {
                return t.substring(0, 10)
              },
              subFilter: function(t) {
                return 0 == t.listStatus ? "待上架" : 2 == t.listStatus ? "已下架" : 1 == t.listStatus ? !t.stockStatus || t.sellOut ? "售空" : "立即报名" : void 0
              }
            },
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            onReady: function() {},
            onShareAppMessage: function() {
              var t = "/subPack/pages/lineProductDetails/lineProductDetails?productId=".concat(this.productId);
              return {
                title: this.detailObj.shareDesc ? this.detailObj.shareDesc : this.detailObj.productName,
                imageUrl: this.detailObj.shareImage ? this.detailObj.shareImage : this.detailObj.productPicList[0],
                path: this.$util.setShareUrl(t)
              }
            },
            onShareTimeline: function() {
              var t = "productId=".concat(this.productId);
              return {
                title: this.detailObj.shareDesc ? this.detailObj.shareDesc : this.detailObj.productName,
                imageUrl: this.detailObj.shareImage ? this.detailObj.shareImage : this.detailObj.productPicList[0],
                query: this.$util.setShareTimeline(t)
              }
            },
            watch: {
              showCoupon: {
                handler: function(t, e) {
                  this.showBar = !t
                }
              }
            },
            onLoad: function(e) {
              var i = this,
                o = t.getMenuButtonBoundingClientRect();
              this.searchHeight = o.top;
              var n = getCurrentPages();
              this.getConfig(), 1 != n.length || ["pages/index/index", "pages/index/index"].includes(n[0].route) || (this.firstPage = !0), e.scene ? this.getScene(e.scene) : (this.productId = e.productId, this.shareMemberId = e.shareMemberId, i.linePreview = e.linePreview || 0, t.getSystemInfo({
                success: function(t) {
                  i.safeAreaBottom = t.safeAreaInsets.bottom
                }
              }), this.getGoodInfo())
            },
            onUnload: function() {},
            onShow: function() {
              this.noCouponFlag || (this.couponList = [], this.getSpotCoupons()), o.showShareMenu({
                withShareTicket: !0,
                menus: ["shareAppMessage", "shareTimeline"]
              })
            },
            onPageScroll: function(t) {
              if (this.scrollTop = t.scrollTop, this.scrollTop < 221) {
                var e = 255 - this.scrollTop;
                this.fontColor = "rgb(".concat(e, ",").concat(e, ",").concat(e, ")")
              }
              this.scrollTop > this.solutionTop - this.solutionInfoHeight ? (this.solutionList[0].relationProductName && (this.isGoodFlex = !0), this.scrollTop > this.productTop - 80 - this.searchHeight - this.solutionNameHeight ? (this.solutionList[0].relationProductName || (this.isGoodFlex = !0), this.isProductFlex = !0, this.scrollCount()) : (this.solutionList[0].relationProductName || (this.isGoodFlex = !1), this.isProductFlex = !1)) : this.isGoodFlex = !1
            },
            methods: {
              htmlCount: function() {
                var e = this,
                  i = this;
                setTimeout((function() {
                  new Promise((function(t) {
                    var i = o.createSelectorQuery();
                    i.select("#solution").boundingClientRect(), i.select("#product").boundingClientRect(), i.select("#trip").boundingClientRect(), i.select("#illustrate").boundingClientRect(), e.solutionList.forEach((function(t, e) {
                      i.select("#solutionName" + e).boundingClientRect(), i.select("#solutionInfo" + e).boundingClientRect()
                    })), i.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(t) {
                    var e = t[0] ? t[0].height : 0;
                    i.solutionTop = t[0] ? t[0].top + e : 0, i.applicationScroll = t[0] ? t[0].top : 0, i.productTop = t[1] ? t[1].top : 0, i.tripTop = t[2] ? t[2].top : 0, i.illustrateTop = t[3] ? t[3].top : 0, console.log(t), t.forEach((function(t, e) {
                      e > 3 && t && (e % 2 == 0 ? i.solutionNameHeight = i.solutionNameHeight > t.height ? i.solutionNameHeight : t.height : i.solutionInfoHeight = i.solutionInfoHeight > t.height ? i.solutionInfoHeight : t.height)
                    }))
                  })), e.loading = !1, t.hideLoading()
                }), 100)
              },
              getScene: function(e) {
                var i = this,
                  o = this;
                o.$uniApi.getRequestNoLoading("GET", "manager/app/v1/qrCodeScene/getScene?sceneId=" + e).then((function(e) {
                  if (1 === e.code) {
                    var n = i.$util.getUrlParams(e.data.scene);
                    console.log(n), o.productId = n.productId, o.linePreview = n.linePreview || 0, o.shareMemberId = e.data.referenceId || "", t.getSystemInfo({
                      success: function(t) {
                        o.safeAreaBottom = t.safeAreaInsets.bottom
                      }
                    }), o.getGoodInfo()
                  }
                }))
              },
              computedRich: function() {
                var t = this;
                setTimeout((function() {
                  new Promise((function(t) {
                    var e = o.createSelectorQuery();
                    e.select("#myRich").boundingClientRect(), e.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(e) {
                    e[0] && e[0].height > 1e3 ? t.isShowMore = !0 : t.isShowMore = !1, t.htmlCount()
                  }))
                }), 1200)
              },
              changeStype: function(t) {
                var e = new RegExp("img", "gi");
                return t = t.replace(e, 'img style="width:100%;border-radius: 8px;height:auto"')
              },
              sure: function() {
                this.showCoupon = !1
              },
              getCoupon: function() {
                this.$util.isLogin() && (this.showCoupon = !0)
              },
              showMore: function(t) {
                this.tapIndex != t ? this.tapIndex = t : this.tapIndex = null
              },
              receive: function(e) {
                var i = this;
                return (0, a.default)(s.default.mark((function o() {
                  return s.default.wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        return o.prev = 0, t.showLoading(), o.next = 4, i.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                          couponId: e
                        });
                      case 4:
                        1 == o.sent.code ? (i.getSpotCoupons(), i.$util.showToast("已领取")) : i.$util.showToast("已抢光"), o.next = 10;
                        break;
                      case 8:
                        o.prev = 8, o.t0 = o.catch(0);
                      case 10:
                        return o.prev = 10, setTimeout((function() {
                          t.hideLoading()
                        }), 300), o.finish(10);
                      case 13:
                      case "end":
                        return o.stop()
                    }
                  }), o, null, [
                    [0, 8, 10, 13]
                  ])
                })))()
              },
              getSpotCoupons: function() {
                var t = this;
                return (0, a.default)(s.default.mark((function e() {
                  var i, o;
                  return s.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, i = {
                          itemType: 2,
                          lineProductId: t.productId
                        }, e.next = 4, t.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/getCanReceiveOrUseCouponList", i);
                      case 4:
                        1 == (o = e.sent).code && (t.couponList = o.data), e.next = 10;
                        break;
                      case 8:
                        e.prev = 8, e.t0 = e.catch(0);
                      case 10:
                        return e.prev = 10, e.finish(10);
                      case 12:
                      case "end":
                        return e.stop()
                    }
                  }), e, null, [
                    [0, 8, 10, 12]
                  ])
                })))()
              },
              toggleRead: function() {
                this.showRead = !this.showRead;
                var t = this;
                setTimeout((function() {
                  new Promise((function(t) {
                    var e = o.createSelectorQuery();
                    e.select("#trip").boundingClientRect(), e.select("#illustrate").boundingClientRect(), e.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(e) {
                    t.tripTop = e[0] ? e[0].top + t.scrollTop : 0, t.illustrateTop = e[1] ? e[1].top + t.scrollTop : 0
                  }))
                }), 300)
              },
              available: function(e) {
                var i = JSON.stringify(e);
                t.navigateTo({
                  url: "/subPack/pages/groupOrder/availableProducts?coupon=".concat(i)
                })
              },
              getTrips: function() {
                this.tripTop && this.changeProduct(1)
              },
              back: function() {
                this.firstPage ? t.switchTab({
                  url: "/pages/index/index"
                }) : t.navigateBack()
              },
              getConfig: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                  paramKey: "LINE_PLATFORM_REMINDER"
                }).then((function(e) {
                  1 === e.code && (t.configrights = e.data.paramValue)
                }))
              },
              scrollCount: function() {
                var t = [this.productTop, this.tripTop, this.illustrateTop];
                this.activePro < 2 && this.scrollTop >= t[this.activePro] - 140 - this.searchHeight - this.solutionNameHeight && (this.activePro += 1), this.activePro > 0 && this.scrollTop <= t[this.activePro] - 140 - this.searchHeight - this.solutionNameHeight && (this.activePro -= 1)
              },
              swiperBtn: function(e) {
                var i = [];
                this.detailObj.productPicList.forEach((function(t) {
                  i.push(t)
                })), t.previewImage({
                  current: e,
                  urls: i
                })
              },
              changeImg: function(t) {
                this.activeImg = t.detail.current + 1
              },
              getCustomer: function() {
                this.customerShow = !0
              },
              getServiceInfo: function() {
                this.showService = !0
              },
              getServiceDesc: function(t) {
                return ["", "自动确认", "无购物", "无自费", "退订无忧", "上门接", "二次确认"][t]
              },
              changeProduct: function(e) {
                this.activePro = e;
                var i = [this.productTop + 55, this.tripTop, this.illustrateTop];
                t.pageScrollTo({
                  scrollTop: i[e] - this.searchHeight - 125 - this.solutionNameHeight,
                  duration: 0
                })
              },
              getGoodInfo: function() {
                var e = this;
                if (1 != this.linePreview) {
                  t.showLoading(), this.loading = !0;
                  var i = getCurrentPages();
                  this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/product/detail/" + this.productId).then((function(o) {
                    1 === o.code ? (e.solutionList = o.data, 0 == e.solutionList.length && (e.loading = !1, e.$util.showToast("暂无产品信息"), setTimeout((function() {
                      i.length < 2 ? t.switchTab({
                        url: "/pages/index/index"
                      }) : e.$util.prevPage()
                    }), 1e3)), e.detailObj = o.data[0], e.noCouponFlag = o.data[0].noCouponFlag, e.detailObj.productFeature || (e.activePro = 1), e.getLineDetail(), e.getPriceData(), e.computedRich()) : 0 === o.code && (e.$util.showToast(o.msg), o.data && setTimeout((function() {
                      i.length < 2 ? o.data && o.data[0] && o.data[0].travelAgencyId ? t.reLaunch({
                        url: "/subPack/pages/travelAgency/travelAgency?travelAgencyId=".concat(o.data[0].travelAgencyId)
                      }) : t.switchTab({
                        url: "/pages/index/index"
                      }) : e.$util.prevPage()
                    }), 500))
                  }))
                } else this.getGoodInfoPreview()
              },
              getGoodInfoPreview: function() {
                var e = this;
                t.showLoading(), this.loading = !0, this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/product/previewDetail", {
                  productId: this.productId
                }).then((function(i) {
                  1 === i.code ? (e.solutionList = i.data, 0 == e.solutionList.length && (e.loading = !1, e.$util.showToast("暂无产品信息"), setTimeout((function() {
                    t.navigateBack()
                  }), 1e3)), e.detailObj = i.data[0], e.noCouponFlag = i.data[0].noCouponFlag, e.detailObj.productFeature || (e.activePro = 1), e.noCouponFlag || e.getSpotCoupons(), e.getLineDetail(), e.getPriceData(), e.computedRich()) : 0 === i.code && (i.data || (e.$util.showToast(i.msg), setTimeout((function() {
                    getCurrentPages().length < 2 ? t.switchTab({
                      url: "/pages/index/index"
                    }) : e.$util.prevPage()
                  }), 500)))
                }))
              },
              subSelectDate: function() {
                "{}" != JSON.stringify(this.selectDateObj) ? (this.showSelectDate = !1, this.scrollToDate = "date-" + this.selectDateObj.date, this.selectDateStr = this.selectDateObj.date, this.activeDate = this.selectDateObj.index) : this.showSelectDate = !1
              },
              itemClickFn: function(t) {
                this.selectDateObj = t
              },
              selectedDate: function(t, e) {
                t.disabled || (this.selectDateStr = t.date, this.activeDate = e)
              },
              application: function() {
                if (1 == this.detailObj.listStatus)
                  if (this.detailObj.stockStatus && !this.detailObj.sellOut) {
                    if (!this.selectDateStr) return this.$util.showToast("请选择团期"), void t.pageScrollTo({
                      scrollTop: this.applicationScroll - this.searchHeight - 90,
                      duration: 0
                    });
                    var e = this.detailObj;
                    e.selectTicket = this.detailObj.ticketPrices[this.activeDate], t.setStorageSync("lineProduct", e);
                    var i = "/subPack/pages/groupOrder/groupOrder";
                    this.$util.isLogin(i + "?noCouponFlag=" + this.noCouponFlag) && this.$navigateTo({
                      url: i + "?noCouponFlag=" + this.noCouponFlag
                    })
                  } else this.dateList.length > 0 ? this.$util.showToast("产品已售空") : this.$util.showToast("暂无可选团期");
                else this.$util.showToast("产品未上架")
              },
              getPriceData: function() {
                var t = this;
                this.detailObj.ticketPrices.forEach((function(e, i) {
                  var o = "";
                  0 === e.surplusStock ? (o = "已售罄", e.disabled = !0) : o = "￥".concat(e.minSellPrice).concat(1 == e.startPriceFlag ? "起" : ""), e.dateShort = e.date.slice(5), e.week = t.getWeekOfDate(e.date), e.diy = o, e.index = i
                })), this.dateList = this.detailObj.ticketPrices
              },
              getWeekOfDate: function(t) {
                t = t.replace(/-/g, "/");
                var e = l.format(new Date, "yyyy/MM/dd"),
                  i = l.format(l.addDay(new Date, 1), "yyyy/MM/dd");
                return t == e ? "今天" : t == i ? "明天" : "周" + "日一二三四五六".charAt(new Date(t).getDay())
              },
              getLineDetail: function() {
                var t = this,
                  e = ["", "https://eshopfile.zhiyousx.com/169267454629242176.png", "https://eshopfile.zhiyousx.com/169267449809707764.png", "https://eshopfile.zhiyousx.com/169267457638955648.png", "https://eshopfile.zhiyousx.com/169267454629242176.png"];
                this.detailObj.lineProductJourneys.forEach((function(i, o) {
                  t.detailObj.dayIndex = o + 1, i.spotList = [], i.fold = 0 == o ? "arrow-up" : "arrow-down", i.lineProductJourneyDetailVOS.forEach((function(n, s) {
                    i.spotList.push(n), o == t.detailObj.lineProductJourneys.length - 1 && s == i.lineProductJourneyDetailVOS.length - 1 && i.spotList.push({
                      journeyDestinationType: 9,
                      journeyDetailTitle: "行程结束",
                      journeyDetailSubhead: "",
                      icon: e[2]
                    })
                  }))
                }))
              },
              spotRelationNum: function(t) {
                return t.length - 5 + "+"
              },
              spotContent: function(t) {
                var e = "";
                return null != t.businessType && null != t.perCapitaConsumption && (e = t.businessType + " · " + t.perCapitaConsumption), null != t.businessType && (e = t.businessType), e
              },
              jumpSpotContentList: function(e, i) {
                t.setStorageSync("spotContentList", {
                  name: i.contentModuleName,
                  contentList: i.contentInfoVOList
                }), this.$navigateTo({
                  url: "/pages/spotContentList/spotContentList?scenicName=".concat(e)
                })
              },
              goSpot: function(t, e) {
                e <= 4 ? this.$navigateTo({
                  url: "/pages/spotDetail/spotDetail?spotId=" + t
                }) : this.$navigateTo({
                  url: "/pages/spotThirdDetail/spotThirdDetail?spotId=" + t
                })
              },
              goShop: function(t) {
                this.$navigateTo({
                  url: "/subPack/pages/travelAgency/travelAgency?travelAgencyId=" + t
                })
              },
              pageTo: function(t) {
                this.$navigateTo({
                  url: t
                })
              },
              changeSolution: function(e, i) {
                this.noCouponFlag = i.noCouponFlag, this.productId = i.productId, 1 == i.listStatus && i.stockStatus && !i.sellOut && (t.pageScrollTo({
                  scrollTop: 0,
                  duration: 0
                }), this.scrollToId = "product" + e, this.loading = !0, this.activePro = 0, t.showLoading(), this.detailObj = this.solutionList[e], this.activeSolution = e, this.selectDateStr = "", this.activeDate = null, this.noCouponFlag || this.getSpotCoupons(), this.getLineDetail(), this.getPriceData(), this.computedRich())
              },
              fold: function(t) {
                this.detailObj.lineProductJourneys[t].fold = "arrow-down" == this.detailObj.lineProductJourneys[t].fold ? "arrow-up" : "arrow-down", this.$forceUpdate();
                var e = this;
                setTimeout((function() {
                  new Promise((function(t) {
                    var e = o.createSelectorQuery();
                    e.select("#illustrate").boundingClientRect(), e.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(t) {
                    e.illustrateTop = t[0] ? t[0].top + e.scrollTop : 0
                  }))
                }), 300)
              },
              clickMore: function() {
                var t = this;
                setTimeout((function() {
                  new Promise((function(t) {
                    var e = o.createSelectorQuery();
                    e.select("#trip").boundingClientRect(), e.select("#illustrate").boundingClientRect(), e.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(e) {
                    t.tripTop = e[0] ? e[0].top + t.scrollTop : 0, t.illustrateTop = e[1] ? e[1].top + t.scrollTop : 0
                  }))
                }), 300), console.log("切换", t.tripTop)
              }
            }
          };
        e.default = r
      }).call(this, i("df3c").default, i("3223").default)
    },
};
