// Extracted from pages/index/index.js; webpack module "6db6".
// Compiled code for analysis; not an original source file.
module.exports = {
    "6db6": function(t, e, i) {
      (function(t) {
        var a = i("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = a(i("af34")),
          o = a(i("7ca3"));

        function s(t, e) {
          var i = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e && (a = a.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.push.apply(i, a)
          }
          return i
        }

        function r(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? s(Object(i), !0).forEach((function(e) {
              (0, o.default)(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
          }
          return t
        }
        a(i("7671"));
        var l = {
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
            t.onAppHide((function() {
              i.showNotice = !1, i.showGiftBag = !1, i.isIntoHide = !0, i.isShowPanda = !1
            }));
            var a = t.getMenuButtonBoundingClientRect();
            this.menuButton = a, t.setStorageSync("NavH", a), this.searchHeight = this.$util.pxToRpx(a.top) + 16, this.fixednavH = a.top + this.$util.rpxToPx(150);
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
            t.removeStorageSync("isShowTips")
          },
          onShow: function() {
            this.isIntoHide = !1, this.isHide = !1, t.getStorageSync("showGuide") || (this.showGuide = !0), this.getBannerList([9, 13, 12, 14, 16, 17]), this.getItemHotRecommend(), this.getEquityCardList(), this.getLineList(), this.getCulturalInnovation(), this.getPopUpAdvert(), this.getLocation()
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
              this.showPopup = !0, this.showGuide = !1, t.setStorageSync("showGuide", !0)
            },
            closePopupBox: function() {
              this.showPopup = !1, this.showGuide = !1, t.setStorageSync("showGuide", !0)
            },
            getPopUpAdvert: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/advert/selectPopUpAdvert").then((function(i) {
                i.data.data ? t.getStorageSync("popupId") && t.getStorageSync("popupId") == i.data.data.advertId ? e.getGiftBagForHome() : (e.popupData = i.data.data, e.showNotice = !0, t.setStorageSync("popupId", i.data.data.advertId)) : e.getGiftBagForHome()
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
              t.getLocation({
                type: "wgs84",
                success: function(i) {
                  t.setStorageSync("location", {
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
                } else e.$util.showToast(t.msg)
              }))
            },
            initScrollData: function() {
              var e = this,
                i = t.createSelectorQuery();
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
                    var e = t.createSelectorQuery();
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
              this.scrollDom(e.id), this.cityid = e.id, t.pageScrollTo({
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
              }) : 2 === e.objType ? this.$util.cityJump(e.contentType, e.linkUrl) : 5 === e.objType && (["/pages/index/index", "/pages/spot_list/spot_list", "/pages/rankList/rankList", "/pages/mine/mine"].includes(e.linkUrlExtend) ? t.switchTab({
                url: e.linkUrlExtend
              }) : this.$navigateTo({
                url: e.linkUrlExtend
              })) : 2 === e.linkType ? "wxf2cca76ae0520e33" == e.advertNo ? this.$navigateTo({
                url: e.linkUrl
              }) : t.openEmbeddedMiniProgram({
                appId: e.advertNo,
                path: e.linkUrl
              }) : 3 === e.linkType ? (t.setStorageSync("richtext", e.linkUrl), this.$navigateTo({
                url: "/pages/richtext/richtext"
              })) : 8 == e.linkType && t.navigateTo({
                url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=3&room_appid=wxf2cca76ae0520e33&amp;type=1&amp;share_openid=ojWxP5dKQbj5En3Vh8MDC23Y_J5k&amp;custom_params=&amp;close_picture_in_picture_mode=0&amp;open_share_ticket=0&amp;lottery_id=0"
              })) : t.navigateTo({
                url: "/distribution/pages/ych/chat"
              })
            },
            getWaterFall: function(e, i, a) {
              var n = this;
              this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/queryWaterfallFlowList?contentType=".concat(100 == e ? "" : e, "&current=").concat(n.current, "&size=").concat(n.size)).then((function(t) {
                n.setWatterFall(t, i, a)
              })).catch((function(e) {
                t.hideLoading(), n.getWaterFallState = !1
              }))
            },
            setWatterFall: function(e, i, a) {
              var n = this;
              e.data && e.data.records[0] || 1 == n.current || t.showToast({
                title: "没有更多咯",
                icon: "none"
              });
              var o = n.showVideo;
              e.data.records.forEach((function(t) {
                (t = JSON.parse(JSON.stringify(t))).show = !0, [4, 9].includes(t.type) && !o && (t.show = !1), 0 == t.type && (t.salesNum = n.saleNumFormat1(t.salesNum)), n.waterfallList.push(t)
              })), "refresh" === i && t.stopPullDownRefresh(), n.scrollTop > n.midNavTop - n.fixednavH && 1 === i && t.pageScrollTo({
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
                if (1 !== i.code) return e.isShowPanda = !0, void e.$util.showToast(i.msg);
                !i.data && t.getStorageSync("unLoginGiftBagId") && (e.$util.showToast("您已领取过该礼包"), t.setStorageSync("unLoginGiftBagId", ""), e.showGiftBag = !1, e.isShowPanda = !0), !i.data || !i.data.giftBagCouponList[0] || t.getStorageSync("giftBagId") && t.getStorageSync("giftBagId") == i.data.giftBagId ? (e.showGiftBag = !1, e.isShowPanda = !0) : (e.giftBagData = i.data, e.gbCl = e.giftBagData.giftBagCouponList.length, t.setStorageSync("unLoginGiftBagId", ""), e.$refs.giftPopup.open(), t.getStorageSync("token") && t.setStorageSync("giftBagId", i.data.giftBagId))
              }))
            },
            receiveGiftBag: function() {
              var e = this;
              t.getStorageSync("token") || t.setStorageSync("unLoginGiftBagId", this.giftBagData.giftBagId), this.$util.isLogin() && this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/giftBag/receive/" + this.giftBagData.giftBagId).then((function(t) {
                1 === t.code ? (e.$util.showToast(t.data), e.showGiftBag = !1) : e.$util.showToast(t.msg)
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
        e.default = l
      }).call(this, i("df3c").default)
    },
};
