// Extracted from pages/spotDetailNew/spotDetailNew.js; webpack module e685.
// Compiled code for analysis; not an original source file.
module.exports = {
    e685: function(t, e, i) {
      (function(t, n) {
        var o = i("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var s = o(i("7ca3"));

        function a(t, e) {
          var i = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.push.apply(i, n)
          }
          return i
        }

        function r(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? a(Object(i), !0).forEach((function(e) {
              (0, s.default)(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
          }
          return t
        }
        i("e846");
        var c = {
          components: {
            painter: function() {
              Promise.all([i.e("common/vendor"), i.e("components/tuitui-painter/painter")]).then(function() {
                return resolve(i("3a7d"))
              }.bind(null, i)).catch(i.oe)
            },
            SPainter: function() {
              Promise.all([i.e("common/vendor"), i.e("components/lime-painter/index")]).then(function() {
                return resolve(i("0778"))
              }.bind(null, i)).catch(i.oe)
            },
            coupon: function() {
              i.e("pages/spotDetailNew/components/coupon").then(function() {
                return resolve(i("fce9"))
              }.bind(null, i)).catch(i.oe)
            },
            ticketInfo: function() {
              i.e("pages/spotDetailNew/components/ticketInfo").then(function() {
                return resolve(i("e5b8"))
              }.bind(null, i)).catch(i.oe)
            },
            ticketBox: function() {
              i.e("pages/spotDetailNew/components/ticketBox").then(function() {
                return resolve(i("e01a"))
              }.bind(null, i)).catch(i.oe)
            },
            union: function() {
              i.e("pages/spotDetailNew/components/union").then(function() {
                return resolve(i("6570"))
              }.bind(null, i)).catch(i.oe)
            },
            csMenu: function() {
              i.e("pages/spotDetailNew/components/csMenu").then(function() {
                return resolve(i("8c3d"))
              }.bind(null, i)).catch(i.oe)
            },
            xjtuEntrance: function() {
              i.e("pages/spotDetailNew/components/xjtuEntrance").then(function() {
                return resolve(i("1014"))
              }.bind(null, i)).catch(i.oe)
            },
            recommendedPop: function() {
              i.e("components/recommendedPop/recommend-pop").then(function() {
                return resolve(i("3d4a"))
              }.bind(null, i)).catch(i.oe)
            },
            subscription: function() {
              i.e("components/recommendedPop/subscription").then(function() {
                return resolve(i("a1b9"))
              }.bind(null, i)).catch(i.oe)
            },
            bookInfo: function() {
              i.e("components/poi/bookInfo").then(function() {
                return resolve(i("f822"))
              }.bind(null, i)).catch(i.oe)
            },
            sku: function() {
              Promise.all([i.e("common/vendor"), i.e("components/poi/sku")]).then(function() {
                return resolve(i("0600"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          data: function() {
            return this.lastOpt = {
              type: 1,
              key: "",
              val: ""
            }, this.oldKey = "", {
              detailObj: "",
              evaluationObj: "",
              showNotice: !1,
              statusBarHeight: "",
              painterData: {},
              postUrl: "",
              postUrl2: "",
              postUrl3: "",
              showPainter: !1,
              ticketpostObj: null,
              posterData: {},
              transformNum: 1,
              isShowTicket: !1,
              isShowBookTip: !1,
              windowHeight: 0,
              touchStartX: 0,
              loadingStatus: !0,
              isAndroid: !0,
              inTop: !0,
              scrollTop: 0,
              touchStartY: 0,
              startDistance: 0,
              onTop: !0,
              peopleNumObj: {
                activeColor: "",
                percent: 20,
                imgUrl: ""
              },
              showVideo: getApp().globalData.showvideo,
              fEleTop: 0,
              fEleTopNow: 0,
              fEleTopUnion: 0,
              fEleTopNowUnion: 0,
              totalSale: 0,
              _spotId: "",
              isFinding: !1,
              auiActionmenu: {
                theme: 1,
                location: "bottom",
                items: [{
                  name: "微信",
                  icon: "iconweixin",
                  iconColor: "#1AA034"
                }]
              },
              winWidth: 0,
              weatherObj: {},
              ticketArr: [],
              showTicketList: !1,
              swiperCurrent: 1,
              swiperLenght: 0,
              currentSwiper: 0,
              couponArr: [],
              row2Top: 0,
              videoUrl: "",
              couponDetailArr: [],
              showMask: !1,
              rotateLeft: "",
              rotateRight: "",
              showrelTicket: !1,
              showPicture: !1,
              showYhMask: !1,
              midinfoTop: 400,
              htmlString: "",
              unit: 0,
              tapIndex: null,
              showFixTicket: !0,
              pageBg: {},
              mainImgInfo: {},
              headerH: 0,
              scrollFixH: 0,
              timeStr: 0,
              ydxz: {},
              base64: "",
              tListInbottom: !1,
              startInBottom: !1,
              showTicketIndex: 0,
              ticketBoxTop: 1e3,
              ticOffsetTop: 600,
              productTypeList: ["跟团游", "一日游", "自由行", "研学游"],
              parseStyle: {
                p: "word-break: break-all;"
              },
              parseStyle1: {
                p: "word-break: break-all;line-height:48rpx;"
              },
              limitStartTime: " 10:00:00",
              limitEndTime: " 22:00:00",
              requestNum: 0,
              loadingNum: 0,
              lines: 1,
              isHide: !1,
              noticeHeight: 750,
              bookTipHeight: 750,
              skuHeight: 750,
              showTicketInfo: !1,
              sharePopup: !1,
              postUrl1: "",
              showShareImg: !1,
              qrCode: "",
              showQrCode: !1,
              closeIcon: "",
              showClassName: !0,
              type: 1,
              shareMemberId: "",
              showType: 1,
              showTicketSku: !1,
              scrollToDate: "",
              scrollToTic: "",
              scrollToClass: "",
              ticH: [],
              skuSelectTicId: "",
              skuTicData: "",
              aggId: "",
              submitState: !1,
              selectedHour: "",
              tipsInfo: "",
              disScroll: !0,
              allStockMap: [],
              scale: 1,
              spotNames: ["", "景区", "饭店", "酒店", "玩乐"],
              isUnion: 0,
              swiperH: 200,
              tabIndex: 0,
              unionEquityCardId: "",
              unionEquityCard: "",
              showUnion: !1,
              showPhonePop: !1,
              isUnionMember: 0,
              unionExpired: !1,
              noCouponH: 200,
              couponH: 200,
              showMenuList: !1,
              showPoster: !1,
              menuButton: "",
              menuLeft: 0,
              menuHeight: 0,
              bannerList: [],
              topBannerList: [],
              mainPicture: "",
              showPC: !1,
              bizType: 0,
              bizId: "",
              showPcT: !1,
              selloutSuggestData: "",
              pageLeaveData: {},
              dialogInfos: {},
              suggestType: 0,
              telephoneVoList: []
            }
          },
          filters: {
            timeFormat: function(t) {
              return t.replace(/-/g, ".")
            }
          },
          onLoad: function(e) {
            this.menuButton = t.getMenuButtonBoundingClientRect(), this.menuLeft = t.upx2px(26), this.menuHeight = this.menuButton.height - 2;
            var i = this,
              n = i.$util.pxToRpx(this.menuButton.bottom);
            if (i.isUnion = e.isUnion || 0, t.getSystemInfo({
                success: function(e) {
                  i.statusBarHeight = t.getSystemInfoSync().statusBarHeight, i._transformNumTemp = 1, i.windowHeight = e.windowHeight, i.headerH = i.statusBarHeight + 5 + Math.ceil(e.windowWidth / 750 * 104), i.startDistance = Math.ceil(e.windowWidth / 750 * 80), i.winWidth = e.windowWidth, i.ticOffsetTop = i.windowHeight - Math.ceil(i.winWidth / 750 * 162), i.unit = 750 / e.windowWidth;
                  var o = i.$util.pxToRpx(i.windowHeight);
                  i.skuH1 = .7 * o - n - 40, i.skuH2 = o - n - 40, i.skuHeight = i.skuH1 - 140
                }
              }), this.noticeHeight = i.windowHeight / i.winWidth * 750 * .7 - 176, e.scene) this.getScene(e.scene);
            else {
              this._spotId = e.spotId, this.type = e.type, this.shareMemberId = e.shareMemberId, t.getSystemInfoSync().system.indexOf("Android") > -1 || (this.isAndroid = !1), this._urlToShare = "/pages/spotDetailNew/spotDetailNew?spotId=" + this._spotId;
              var o = t.getStorageSync("userInfor");
              (i.isUnion || t.getStorageSync("token") && o && o.isUnionMember) && (this._urlToShare = this._urlToShare + "&isUnion=1"), "find" == e.type ? (this.isFinding = !0, this.$bus.$emit("loadFinding"), setTimeout((function() {
                var e = t.createSelectorQuery();
                e.select("#row2").boundingClientRect(), e.exec((function(t) {
                  i.mainImgInfo = t[0]
                }))
              }), 100)) : (t.showLoading({
                title: "加载中",
                mask: !0
              }), this.requestNum = 1, this.spotDetail())
            }
          },
          onUnload: function() {
            getApp().watchRouter()
          },
          onShow: function() {
            var e = this;
            if (t.getSystemInfo({
                success: function(t) {
                  e.unit = 750 / t.windowWidth
                }
              }), !this.isFinding) {
              if (1 == e.requestNum) return void(e.requestNum = 2);
              e._spotId && e.getSpotCoupons(), e.getPeopleNum()
            }
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, this.row2Top - this.headerH < t.scrollTop ? this.inTop = !1 : this.inTop = !0, t.scrollTop <= 5 ? this.onTop = !0 : this.onTop = !1, t.scrollTop + this.ticOffsetTop > this.ticketBoxTop ? (this.showFixTicket = !1, this.ticketBoxTop - t.scrollTop < this.headerH + 6 ? this.disScroll = !1 : this.disScroll = !0) : this.showFixTicket = !0;
            var e = t.scrollTop / 40;
            e >= 0 && e <= 1 && (this.transformNum = Number((1 - e).toFixed(2))), e > 1 && (this.transformNum = 0), this._transformNumTemp = this.transformNum
          },
          onShareAppMessage: function(t) {
            var e = this.$refs.findspot;
            if (this.isFinding && !e.hideFinder) {
              var i = "/pages/spotDetailNew/spotDetailNew?type=find";
              return 6 == e.step ? {
                title: "我找到了".concat(e.spotList.length, "个").concat(e.currentText, "相关的好地方"),
                path: this.$util.setShareUrl(i),
                imageUrl: "https://eshopfile.zhiyousx.com/2022021718023611283.jpg"
              } : {
                title: "想去哪里就说出来吧!",
                path: this.$util.setShareUrl(i),
                imageUrl: "https://eshopfile.zhiyousx.com/2022021718023611283.jpg"
              }
            }
            if (this.ticketpostObj) {
              var n = Object.assign(this.ticketpostObj, {}),
                o = this.postUrl3,
                s = "/subPage/pages/ticket_detail/ticket_detail?itemId=".concat(n.itemId);
              return {
                title: n.itemTitle,
                path: this.$util.setShareUrl(s),
                imageUrl: o
              }
            }
            var a = this.detailObj.shareDescList,
              r = "我在".concat(this.detailObj.scenicName, "等你，约吗？"),
              c = this.postUrl;
            return a && a[0] && (r = a[Math.random() * a.length | 0]), this.detailObj.shareImage && (c = this.detailObj.shareImage), {
              title: r,
              imageUrl: c,
              path: this.$util.setShareUrl(this._urlToShare)
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          onReachBottom: function() {},
          watch: {
            sharePopup: function(t) {
              t || (this.ticketpostObj = null, this.postUrl1 = "", this.qrCode = "", this.postUrl3 = "")
            },
            postUrl1: function(e) {
              this.ticketpostObj && e && this.ticketpostObj.shareType.indexOf("3") > -1 && (t.hideLoading(), this.sharePopup = !0)
            },
            postUrl2: function(e) {
              this.ticketpostObj && this.ticketpostObj.defaultPicUrl && this.ticketpostObj.shareType.indexOf("3") < 0 && (t.hideLoading(), this.sharePopup = !0), this.ticketpostObj ? this.postUrl3 = e : this.postUrl3 = ""
            },
            showTicketIndex: function(t) {
              var e = this;
              this.$forceUpdate(), this.tListInbottom = !1, this.startInBottom = !1, setTimeout((function() {
                e.getfixTicketListDis()
              }), 100)
            },
            loadingNum: function(e) {
              e >= 4 && t.hideLoading()
            },
            isHide: function(t) {
              var e = this;
              setTimeout((function() {
                e.getTicketBoxTop().then((function(i) {
                  i && i[0] && (e.ticketBoxTop = t ? i[0].top : i[0].top + e.scrollTop)
                }))
              }), 100)
            }
          },
          methods: {
            getLines: function(t) {
              this.lines = t, t > 0 && (this.isHide = !0)
            },
            formatNum: function(t) {
              return t < 10 ? "0" + t : t + ""
            },
            getFun: function() {
              t.getSystemInfoSync().system.indexOf("Android") > -1 || (this.isAndroid = !1), this._urlToShare = "/pages/spotDetailNew/spotDetailNew?spotId=" + this._spotId;
              var e = t.getStorageSync("userInfor");
              (this.isUnion || t.getStorageSync("token") && e && e.isUnionMember) && (this._urlToShare = this._urlToShare + "&isUnion=1"), t.showLoading({
                title: "加载中",
                mask: !0
              }), this.requestNum = 1, this.spotDetail()
            },
            parseQueryString: function(t) {
              var e = {};
              return t.split("&").forEach((function(t) {
                var i = t.split("="),
                  n = i[0],
                  o = i[1];
                n && o && (e[n] = o)
              })), e
            },
            getScene: function(t) {
              var e = this;
              this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/qrCodeScene/getScene?sceneId=" + t).then((function(t) {
                if (1 === t.code) {
                  var i = e.parseQueryString(t.data.scene);
                  if (i.scenicId) return e._spotId = i.scenicId, e.shareMemberId = t.data.referenceId, void e.getFun();
                  i.spotId && (e._spotId = i.spotId, e.shareMemberId = t.data.referenceId, e.getFun())
                }
              }))
            },
            evaluationDetail: function() {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "base/app/v1/evaluation/getEvaluation?scenicSpotId=" + this._spotId).then((function(e) {
                1 == e.code ? t.evaluationObj = e.data ? e.data : null : t.$util.showToast(e.msg)
              }))
            },
            spotDetail: function() {
              var e = this,
                i = this;
              t.showNavigationBarLoading(), this.$uniApi.getRequestNoLoading("GET", "base/app/v1/scenicSpot/getAppScenicSpotDetail?scenicId=" + this._spotId).then((function(o) {
                if (i.loadingNum++, 1 == o.code) {
                  t.hideNavigationBarLoading(), e.detailObj = o.data, e.telephoneVoList = e.detailObj.telephoneVoList || [], e.mainPicture = o.data.mainPictureList[0] || "", e.topBannerList = o.data.topBannerList, e.bannerList = o.data.bannerList, 1 == o.data.evaluation && e.evaluationDetail(), i.startDraw(), i.getPeopleNum(), i.getScreenInfo().then((function(t) {
                    t && t[0] && (i.row2Top = t[1].top + t[1].height - 6, i.midinfoTop = t[2].top + t[2].height, i.showrelTicket = !0, i.loadingStatus = !1)
                  }));
                  var s = t.getStorageSync("userInfor");
                  (i.isUnion || t.getStorageSync("token") && s && s.isUnionMember) && 1 != e.detailObj.scenicType && i.getUnionEquityCardId(), 1 == e.detailObj.scenicType && 1 == e.detailObj.closeJumpFlag && n.hideShareMenu({
                    menus: ["shareTimeline", "shareAppMessage"]
                  }), i.isFinding && i.$bus.$emit("closeFinder")
                } else e.$util.showToast(o.msg)
              })).catch((function(t) {
                i.loadingStatus = !1, e.$util.showToast("网络走丢了，请刷新重试")
              })), i.getTicketTypeIByScenicIdNew("", "onLoad")
            },
            getSpotCoupons: function() {
              var t = this,
                e = this;
              if (1 != e.detailObj.scenicType) {
                var i = {
                  itemType: 1,
                  scenicId: this._spotId
                };
                this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/getCanReceiveOrUseCouponList", i).then((function(i) {
                  if (e.couponDetailArr = i.data, e.loadingNum++, 1 == i.code) {
                    var n = i.data;
                    if (0 == n.length) return e.scrollFixH = e.noCouponH, void(t.couponArr = []);
                    var o = [];
                    if (n && n[0]) {
                      for (var s = 0; s < n.length; ++s) {
                        var a = n[s],
                          r = String(a.couponAmount),
                          c = String(a.couponFullAmount);
                        a.couponFullAmount > 0 ? "满".concat(c, "减").concat(r, "券") : "".concat(r, "元无门槛券"), o.push(a)
                      }
                      t.couponArr = o
                    }
                  } else t.$util.showToast(i.msg)
                }))
              } else e.loadingNum++
            },
            toggleTicketList: function(e, i, n) {
              var o = this;
              if (2 == n && this.disScroll) return t.pageScrollTo({
                scrollTop: 1e4,
                duration: 500
              }), void setTimeout((function() {
                o.setTicketList(e, i)
              }), 550);
              this.setTicketList(e, i)
            },
            setTicketList: function(t, e) {
              this.scrollToTic = "tic-" + t.id, this.showTicketIndex = e, this.scrollToClass = "ticClass-" + this.showTicketIndex
            },
            getScreenInfo: function() {
              var e = this;
              return new Promise((function(i) {
                setTimeout((function() {
                  e.$nextTick((function() {
                    var e = t.createSelectorQuery();
                    e.select("#top-fixed-box").boundingClientRect(), e.select("#row2").boundingClientRect(), e.select("#midinfo").boundingClientRect(), e.exec((function(t) {
                      i(t)
                    }))
                  }))
                }), 500)
              }))
            },
            swiperTopClick1: function(t) {
              var e = this.detailObj.topBannerList[t];
              this.swiperTopClick(e)
            },
            swiperTopClick2: function(t) {
              var e = this.detailObj.bannerList[t];
              this.swiperTopClick(e)
            },
            getTicketBoxTop: function() {
              var e = this;
              return new Promise((function(i) {
                setTimeout((function() {
                  e.$nextTick((function() {
                    var e = t.createSelectorQuery();
                    e.select("#ticketBox").boundingClientRect(), e.exec((function(t) {
                      i(t)
                    }))
                  }))
                }), 500)
              }))
            },
            swiperTopClick: function(e) {
              1 === e.jumpType && e.jumpUrl ? (-1 != e.jumpUrl.indexOf("?") && (e.jumpUrl = e.jumpUrl.replace("?", "*"), e.jumpUrl = e.jumpUrl.replace("=", "+")), this.$navigateTo({
                url: "../webpage/webpage?url=".concat(e.jumpUrl)
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
                url: "../richtext/richtext?title=".concat(e.advertName)
              }))
            },
            toRanking: function(t) {
              1 != this.detailObj.closeJumpFlag && this.$navigateTo({
                url: "../ranking/ranking?id=" + t
              })
            },
            toTagfilter: function(t, e) {
              1 != this.detailObj.closeJumpFlag && this.$navigateTo({
                url: "/subPage/pages/spotFilter/spotFilter?index=".concat(e, "&name=").concat(t.name, "&id=").concat(t.id, "&type=").concat(this.detailObj.type)
              })
            },
            getTimeLimit: function() {
              var t = new Date,
                e = t.getFullYear(),
                i = t.getMonth() + 1,
                n = t.getDate(),
                o = this.formatNum(e) + "-" + this.formatNum(i) + "-" + this.formatNum(n),
                s = o + this.limitStartTime,
                a = o + this.limitEndTime,
                r = t.getTime();
              return r > new Date(s.replace(/-/g, "/")).getTime() && r < new Date(a.replace(/-/g, "/")).getTime()
            },
            getPeopleNum: function() {
              var t = this,
                e = this.detailObj.realTimeNum || 0,
                i = parseInt(e / this.detailObj.capacity * 100),
                n = {
                  ren1: {
                    text: "舒适",
                    activeColor: "#8DC604",
                    percent: 30,
                    imgUrl: "https://eshopfile.zhiyousx.com/spotDetailNew/ren1.png"
                  },
                  ren2: {
                    text: "适中",
                    activeColor: "#ECE413",
                    percent: 60,
                    imgUrl: "https://eshopfile.zhiyousx.com/spotDetailNew/ren2.png"
                  },
                  ren3: {
                    text: "拥挤",
                    activeColor: "#FD7600",
                    percent: 80,
                    imgUrl: "https://eshopfile.zhiyousx.com/spotDetailNew/ren3.png"
                  },
                  ren4: {
                    text: "饱和",
                    activeColor: "#FF4800",
                    percent: 100,
                    imgUrl: "https://eshopfile.zhiyousx.com/spotDetailNew/ren4.png"
                  },
                  ren5: {
                    text: 1 == this.detailObj.scenicType ? "关山门" : "闭园",
                    activeColor: "#ffffff80",
                    percent: 0,
                    imgUrl: ""
                  }
                };
              (this.detailObj.visitorNumIconList || []).forEach((function(t) {
                t.level && t.icon && (n["ren".concat(t.level)].imgUrl = t.icon)
              })), this.closeIcon = n.ren5.imgUrl;
              var o = {};
              i <= 30 && (o = n.ren1), i > 30 && i <= 60 && (o = n.ren2), i > 60 && i <= 80 && (o = n.ren3), i > 80 && (o = n.ren4), i <= 100 && (o.percent = i), 0 == this.detailObj.openingStatus && ((o = n.ren5).percent = 0), setTimeout((function() {
                t.peopleNumObj = o, t.loadPercent(o.percent || 0, 100)
              }), 600)
            },
            showTicketMask: function(t) {
              var e = this;
              1 == t && this.isShowTicket || (this.isShowTicket = !this.isShowTicket, this.$nextTick((function() {
                this.transformNum = this.isShowTicket ? 0 : this._transformNumTemp
              })), this.isShowTicket && this.showTicketList && setTimeout((function() {
                e.getFirstEleDis(1)
              }), 550), this.isShowTicket && this.showUnion && setTimeout((function() {
                e.getFirstUnion(1)
              }), 550))
            },
            cityName: function(t) {
              var e = "";
              return t.forEach((function(t, i) {
                e += t + "/"
              })), e.slice(0, -1)
            },
            loadPercent: function(t, e) {
              var i = t / e * 360,
                n = 0,
                o = 0;
              i < 180 ? (n = i + -45, this.rotateLeft = -47) : (n = 135, o = i - 180 - 45, this.rotateLeft = o), this.rotateRight = n
            },
            showSku: function() {
              this.showTicketSku = !0
            },
            buyFn: function(e) {
              if (e.itemId)
                if (2 != e.ticketType) {
                  var i = this.showTicketSku ? 1 : 0;
                  if (this.$refs.skuP.showTicketSku = !1, 1 != e.jumpFlag) {
                    var o = "/subPage/pages/ticketFillOrder/ticketFillOrder?ticketId=".concat(e.itemId),
                      s = "",
                      a = t.getStorageSync("userInfor").chansiOpenId,
                      r = 0;
                    if (1 == e.groupFlag && (o = "/subPage/pages/packPlaceOrder/packPlaceOrder?ticketId=".concat(e.itemId)), 1 == i && this.$refs.skuP.skuData && this.$refs.skuP.skuData.aggregationItemId && (o += "&aggregationItemId=".concat(this.$refs.skuP.skuData.aggregationItemId)), this.shareMemberId && (o += "&shareMemberId=".concat(this.shareMemberId)), this.selectedHour && this.selectedHour.itemId == e.itemId ? o += "&selectedDate=".concat(this.selectedHour.date) : this.selectedHour = "", 1 == this.detailObj.scenicType && (s = "https://eshop.zhiyousx.com/dsmall-admin-ui/h5/temple.html?itemId=".concat(e.itemId), o += "&isCs=true", r = 1), this.$util.isLogin(o, r, s)) {
                      var c = this.detailObj.telephoneVoList;
                      if (c && c[0] && t.setStorageSync("telephoneVoList", c), s && !a) return void n.navigateTo({
                        url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(s)
                      });
                      this.$navigateTo({
                        url: o
                      })
                    }
                  } else 2 == e.jumpType ? t.navigateTo({
                    url: "/pages/webpage/webpage?urlEncode=".concat(encodeURIComponent(e.jumpUrl))
                  }) : 1 == e.jumpType ? "wxf2cca76ae0520e33" == e.jumpAppId ? this.$navigateTo({
                    url: e.jumpUrl
                  }) : n.openEmbeddedMiniProgram({
                    appId: e.jumpAppId,
                    path: e.jumpUrl
                  }) : 3 == e.jumpType && this.$util.showToast("请前往支付宝小程序购买")
                } else this.$refs.skuP.setTicketType(e.itemId)
            },
            openMap: function() {
              t.openLocation({
                latitude: Number(this.detailObj.latitude),
                longitude: Number(this.detailObj.longitude),
                name: this.detailObj.scenicName,
                success: function() {}
              })
            },
            showBookTip: function(t) {
              if (2 == t.ticketType) return !t.stockStatus || t.sellOut ? void this.$util.showToast("已售空") : void this.$refs.skuP.setTicketType(t.itemId);
              this.$refs.bookInfoBox.getTicDetail(t.itemId, "pt")
            },
            brText: function(t) {
              if (t) {
                var e = t.split("#**#");
                return e.pop().split("</p>").forEach((function(t, i) {
                  if (t) {
                    var n = (t = t.split("<p>").join("")).match(/\<.*?\>/g),
                      o = t.match(/[\r\n]/g),
                      s = n || o;
                    s && s[0] && s.forEach((function(e) {
                      t = t.replaceAll(e, "")
                    })), e.push(t)
                  }
                })), e
              }
            },
            call: function(e) {
              t.makePhoneCall({
                phoneNumber: e
              })
            },
            copyFn: function() {
              t.setClipboardData({
                data: this.detailObj.officialWebsite,
                success: function() {
                  this.$util.showToast("复制成功")
                }
              })
            },
            jumpSpotIntro: function(t) {
              this.$navigateTo({
                url: "/subPage/pages/spotIntroNew/spotIntroNew?spotId=".concat(this._spotId, "&loc=").concat(t || "", "&isCS=").concat(this.detailObj.scenicType ? 1 : "")
              })
            },
            jumpHotelIntro: function(t) {
              3 == this.detailObj.type ? this.$navigateTo({
                url: "/subPack/pages/hotelIntro/hotelIntro?spotId=".concat(this._spotId, "&loc=").concat(t || "")
              }) : this.$navigateTo({
                url: "/subPage/pages/spotIntroNew/spotIntroNew?spotId=".concat(this._spotId, "&loc=").concat(t || "")
              })
            },
            jumpSpotContentList: function(e) {
              t.setStorageSync("spotContentList", {
                name: e.contentModuleName,
                contentList: e.contentInfoVOList
              }), this.$navigateTo({
                url: "../spotContentList/spotContentList?scenicName=".concat(this.detailObj.scenicName)
              })
            },
            getSkuDesc: function(e) {
              e && (this.refreshData = !1, t.previewImage({
                current: 1,
                urls: [e]
              }))
            },
            jumpSpotThirdDetail: function(t) {
              5 == t.type ? this.$navigateTo({
                url: "../spotThirdDetail/spotThirdDetail?scenicName=".concat(this.detailObj.scenicName, "&spotId=") + t.id
              }) : 10 == t.type ? this.jumpToH5(t.h5Url) : this.$util.cityJump(t.type, t.id)
            },
            jumpToH5: function(e) {
              e ? t.navigateTo({
                url: "/pages/webpage/webpage?urlEncode=".concat(encodeURIComponent(e))
              }) : this.$util.showToast("敬请期待！")
            },
            jumpSpotMedia: function() {
              this.$navigateTo({
                url: "../spotMedia/spotMedia?id=" + this._spotId + "&type=0"
              })
            },
            swiperChange: function(t) {
              this.swiperCurrent = t.detail.current + 1, this.scale = 1
            },
            closeMask: function() {
              this.showPicture = !1
            },
            openMedia: function(t) {
              this.showPicture = !0, this.swiperCurrent = t + 1, this.currentSwiper = t
            },
            showMore: function(t) {
              this.tapIndex != t ? this.tapIndex = t : this.tapIndex = null
            },
            getShowState: function(t) {
              return !(2 == t.resourcesType && !this.showVideo)
            },
            showYh: function() {
              this.showYhMask = !this.showYhMask
            },
            getCouponDetail: function() {
              var t = this,
                e = {
                  itemType: 1,
                  scenicId: this._spotId
                };
              this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/getCanReceiveOrUseCouponList", e).then((function(e) {
                t.couponDetailArr = e.data
              }))
            },
            receiveCoupon: function(t, e) {
              var i = this;
              this.$util.isLogin() && 1 == e && this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                couponId: t
              }).then((function(t) {
                1 == t.code || i.$util.showToast("已抢光"), i.getCouponDetail()
              }))
            },
            startDraw: function(t) {
              var e = this.detailObj.topColour,
                i = this.detailObj.scenicName,
                n = this.detailObj.introductionText || "",
                o = {
                  width: "750rpx",
                  height: "600rpx",
                  borderRadius: "0rpx",
                  background: e,
                  views: [{
                    type: "text",
                    text: i,
                    css: {
                      width: "700rpx",
                      maxLines: 1,
                      left: "30rpx",
                      top: "50rpx",
                      fontSize: "46rpx",
                      color: "#fff"
                    }
                  }, {
                    type: "image",
                    url: this.detailObj.mainPictureList[0],
                    css: {
                      position: "absolute",
                      width: "360rpx",
                      height: "360rpx",
                      left: "30rpx",
                      top: "210rpx",
                      shadow: "0rpx 0rpx 20rpx rgba(0,0,0,.5)",
                      borderRadius: "15rpx"
                    }
                  }, {
                    type: "text",
                    text: n,
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
              this.isAndroid ? this.posterData = o : this.painterData = o
            },
            onImgOK: function(t) {
              this.postUrl = t.path
            },
            hitClick: function(e) {
              e.shareType.indexOf("3") < 0 && (e.sharePosterUrl = ""), this.ticketpostObj = e, t.showLoading({
                title: "卡片生成中..."
              }), (this.ticketpostObj.shareType.indexOf("3") > -1 || this.ticketpostObj.shareType.indexOf("2") > -1) && this.getminiQr(e)
            },
            getminiQr: function(t) {
              var e = this;
              this.$uniApi.dataRequestYesLoading("POST", "manager/app/wx/getminiLongSceneQr", {
                itemId: t.itemId,
                referenceId: this.userInfo.memberId,
                page: "subPage/pages/ticket_detail/ticket_detail",
                scene: "",
                width: ""
              }).then((function(t) {
                1 === t.code && (e.qrCode = t.data.baseData)
              }))
            },
            actionmenuCallback: function(e) {
              t.hideLoading(), this.ticketpostObj = null
            },
            onImgErr: function(t) {
              this.startDraw()
            },
            opennotice: function() {
              this.showNotice = !0
            },
            openspot: function(t) {
              this._spotId = t, this.spotDetail()
            },
            getFirstEleDis: function(t) {
              var e = this;
              e.$refs.ticBox.getFirstEleDis().then((function(i) {
                i || i[0] ? (t && (e.fEleTop = i[0].top), e.fEleTopNow = i[0].top) : e.fEleTop = 0
              }))
            },
            getFirstUnion: function(t) {
              var e = this;
              e.$refs.unionBox.getFirstUnion().then((function(i) {
                i || i[0] ? (t && (e.fEleTopUnion = i[0].top), e.fEleTopNowUnion = i[0].top) : e.fEleTopUnion = 0
              }))
            },
            getfixTicketListDis: function() {
              var e = this,
                i = t.createSelectorQuery();
              i.select("#fixTicketLists").boundingClientRect(), i.selectViewport().scrollOffset(), i.exec((function(t) {
                t[0] && t[0].height < e.scrollFixH && (e.tListInbottom = !0, e.startInBottom = !0)
              }))
            },
            fixTicketListScroll: function(t) {
              var e = t.detail.scrollHeight,
                i = t.detail.scrollTop,
                n = t.detail.scrollTop,
                o = this.showTicketIndex,
                s = this.ticH;
              o + 1 < s.length && n >= s[o] && (this.showTicketIndex = o + 1), o - 1 >= 0 && n < s[o - 1] && (this.showTicketIndex = o - 1), this.scrollToClass = "ticClass-" + this.showTicketIndex, this.scrollFixH + i + 10 > e ? this.tListInbottom = !0 : this.tListInbottom = !1
            },
            showUnionPhone: function(t) {
              this.showPhonePop = t
            },
            touchStart: function(t) {
              this.touchStartX = t.touches[0].clientX, this.touchStartY = t.touches[0].clientY, this.showUnion && 0 == this.tabIndex ? this.getFirstUnion() : this.showTicketList && this.getFirstEleDis(), this.startInBottom = this.tListInbottom
            },
            touchEnd: function(t) {
              var e = t.changedTouches[0].clientX - this.touchStartX,
                i = t.changedTouches[0].clientY - this.touchStartY;
              Math.abs(i) > 50 && Math.abs(e) < Math.abs(i) && (this.showUnion && 0 == this.tabIndex ? i > 0 && this.fEleTopUnion < this.fEleTopNowUnion + 40 && (this.isShowTicket = !1, this.$nextTick((function() {
                this.transformNum = this.isShowTicket ? 0 : this._transformNumTemp
              }))) : this.showTicketList && i > 0 && this.fEleTop < this.fEleTopNow + 40 && (this.isShowTicket = !1, this.$nextTick((function() {
                this.transformNum = this.isShowTicket ? 0 : this._transformNumTemp
              }))))
            },
            showTicketInfoBox: function() {
              this.detailObj.ticketAreaNotice && (this.showTicketInfo = !0)
            },
            isObjectEqual: function(t, e) {
              var i = Object.keys(t),
                n = Object.keys(e);
              if (i.length !== n.length) return !1;
              for (var o = 0, s = i; o < s.length; o++) {
                var a = s[o];
                if (t[a] !== e[a]) return !1
              }
              return !0
            },
            spotName: function(t) {
              return t ? this.spotNames[t] + "简介" : ""
            },
            getUnionEquityCardId: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/userUnionEquityCard/getUnionEquityCardId").then((function(e) {
                1 == e.code && e.data ? (t.unionEquityCardId = e.data, t.getUnionEquityDetail()) : that.showUnion = !1
              }))
            },
            getUnionEquityDetail: function() {
              var e = this,
                i = this;
              this.$uniApi.dataRequestNoLoading("get", "order/app/v1/userUnionEquityCard/getUnionEquityDetail", {
                scenicId: this._spotId,
                unionEquityCardId: this.unionEquityCardId
              }).then((function(n) {
                1 == n.code && n.data ? (i.showUnion = !0, i.unionEquityCard = n.data, t.getStorageSync("token") && e.userInfo && e.userInfo.isUnionMember && i.getUnionUserInfo()) : i.showUnion = !1
              })).catch((function(t) {}))
            },
            getUnionUserInfo: function() {
              var e = this;
              this.$uniApi.dataRequestYesLoading("GET", "manager/app/v1/unionMember/detail").then((function(i) {
                if (1 === i.code) {
                  var n = i.data,
                    o = (new Date).getTime(),
                    s = n.effectiveEndTime;
                  e.unionExpired = o > new Date(s.replace(/-/g, "/")).getTime(), n.unionExpired = e.unionExpired, t.setStorageSync("unionUserInfo", n), e.isUnionMember = 1
                } else t.setStorageSync("unionUserInfo", "")
              }))
            },
            getTicketTypeIByScenicIdNew: function(e, i) {
              var n = this,
                o = this;
              o.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item/getScenicItemList", {
                scenicId: this._spotId
              }).then((function(s) {
                if (o.loadingNum++, 1 != s.code) return n.$util.showToast(s.msg), void o.loadingNum++;
                s.data.spotId = o._spotId, s.data.selloutSuggestFlag = o.detailObj.selloutSuggestFlag, o.ticketArr = s.data || {};
                var a = s.data.scenicTicketTypeClassList;
                1 == a.length ? n.showType = 1 : a.length > 1 && (n.showType = 2), a[0] ? ("onLoad" == i && (o.showTicketIndex = 0), o.showTicketList = !0, n.$forceUpdate(), e || setTimeout((function() {
                  n.setTicketBoxTop(), o.$refs.ticBox.getTicketClassH().then((function(t) {
                    var e = 0,
                      i = t[0].map((function(t, i) {
                        return e += t.height
                      }));
                    o.ticH = i
                  }))
                }), 500)) : (o.loadingNum++, o.showTicketList = !1, o.isShowTicket = !1, t.hideLoading());
                var r = 60,
                  c = o.ticketArr.scenicTicketTypeClassList;
                c && 1 === c.length && "门票" == c[0].ticketTypeClassName && (r = 0, o.showClassName = !1), 2 == o.showType && (r = 0, o.showClassName = !1), o.swiperH = o.windowHeight - o.headerH - 104 / n.unit;
                var u = o.detailObj.ticketAreaNoticeName ? 76 : 0;
                o.noCouponH = o.windowHeight - o.headerH - Math.ceil(o.winWidth / 750 * (90 + u + r)), o.couponH = o.windowHeight - o.headerH - Math.ceil(o.winWidth / 750 * (170 + u + r)), o.scrollFixH = 1 == n.detailObj.noCouponFlag ? o.noCouponH : o.couponH, 1 === n.detailObj.noCouponFlag ? o.loadingNum++ : o.getSpotCoupons(), 1 == o.detailObj.selloutSuggestFlag && 1 == o.ticketArr.sellOut && o.getSelloutSuggest(n._spotId, 1), o.loadingStatus = !1
              })).catch((function(e) {
                t.hideLoading()
              }))
            },
            setTicketBoxTop: function() {
              var t = this;
              t.getTicketBoxTop().then((function(e) {
                e && e[0] ? (t.ticketBoxTop = e[0].top, t.loadingNum++) : t.setTicketBoxTop()
              }))
            },
            priviewImg: function(e) {
              var i = e.src;
              t.previewImage({
                current: i,
                urls: [i]
              })
            },
            dblclick: function() {
              4 == this.scale ? this.scale = 1 : this.scale = 4
            },
            changeTab: function(t) {
              this.tabIndex = t
            },
            changeSwiper: function(t) {
              this.tabIndex = t.detail.current
            },
            closeCsMenu: function() {
              1 == this.detailObj.scenicType && 1 == this.detailObj.closeJumpFlag && this.$refs.csMenu.closeMenu()
            },
            previewImage: function(t) {
              n.previewImage({
                urls: [t]
              })
            },
            onBeforeLeave: function(t) {
              this.showPC && (this.dialogInfos = this.pageLeaveData, this.showPC = !1, this.$refs.recommendedRef.open())
            },
            getSelloutSuggest: function(t, e) {
              var i = this,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "open";
              this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/item/getSelloutSuggest", {
                bizId: t,
                bizType: e
              }).then((function(s) {
                1 == s.code && (i.showPcT = !0, i.bizType = e, i.bizId = t, i.suggestType = n, i.selloutSuggestData = s.data, 1 == e ? (i.selloutSuggestData.backPage = !0, i.pageLeaveData = r({
                  itemId: i.bizId,
                  bizType: 6,
                  scenicSpotId: i._spotId,
                  showPop: !0,
                  backPage: !0,
                  isSingleVote: e
                }, s.data), i.dialogInfos = i.pageLeaveData, "coupon" != o && (i.showPC = !0)) : (i.showPC = !1, i.selloutSuggestData.backPage = !1, i.setDialogInfos()))
              }))
            },
            refreshCoupon: function() {
              this.getSelloutSuggest(this.bizId, this.bizType, this.suggestType, "coupon")
            },
            sellOutClick: function(t) {
              if (1 == this.detailObj.selloutSuggestFlag) {
                var e = t.data;
                this.getSelloutSuggest(e.itemId, e.ticketType + 1, t.type)
              }
            },
            ydxzSellOut: function(t) {
              this.bizId == t.itemId && this.$refs.recommendedRef.open()
            },
            setDialogInfos: function() {
              var t = r({
                itemId: this.bizId,
                bizType: {
                  1: 6,
                  2: 3,
                  3: 4
                } [this.bizType],
                scenicSpotId: this._spotId,
                showPop: !0,
                isSingleVote: this.bizType
              }, this.selloutSuggestData);
              this.dialogInfos = t, 2 != this.suggestType && this.$refs.recommendedRef.open()
            },
            showAllTimeM: function() {
              this.showAllTime = !0
            }
          }
        };
        e.default = c
      }).call(this, i("df3c").default, i("3223").default)
    }
};
