// Extracted from union/pages/scenicSpot/list.js; webpack module "59da".
// Compiled code for analysis; not an original source file.
module.exports = {
    "59da": function(e, t, i) {
      (function(e, n) {
        var o = i("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var s = o(i("7ca3"));

        function a(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), i.push.apply(i, n)
          }
          return i
        }
        i("a2cf");
        var r = {
          components: {
            coupon: function() {
              i.e("union/components/coupon").then(function() {
                return resolve(i("b2aa"))
              }.bind(null, i)).catch(i.oe)
            },
            bookInfo: function() {
              i.e("components/poi/bookInfo").then(function() {
                return resolve(i("f822"))
              }.bind(null, i)).catch(i.oe)
            },
            couponPop: function() {
              i.e("union/components/couponPop").then(function() {
                return resolve(i("d7d22"))
              }.bind(null, i)).catch(i.oe)
            },
            sku: function() {
              Promise.all([i.e("common/vendor"), i.e("components/poi/sku")]).then(function() {
                return resolve(i("0600"))
              }.bind(null, i)).catch(i.oe)
            },
            noticeP: function() {
              i.e("union/components/noticeP").then(function() {
                return resolve(i("35d0"))
              }.bind(null, i)).catch(i.oe)
            },
            sharePop: function() {
              i.e("union/components/sharePop").then(function() {
                return resolve(i("3d75"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          data: function() {
            return {
              swiperList: [],
              couponArr: [],
              couponDetailArr: [],
              spotId: "",
              ticketArr: "",
              spotDetail: "",
              loadingStatus: !0,
              qrCode: "",
              postUrl1: "",
              postUrl: "",
              postUrl2: "",
              postUrl3: "",
              sharePopup: !1,
              ticketpostObj: null,
              showQrCode: !1,
              showShareImg: !1,
              showTicketSku: !1
            }
          },
          filters: {
            travelModeFilter: function(e) {
              return {
                0: "全部",
                1: "跟团游",
                2: "一日游",
                3: "自由行",
                4: "研学游"
              } [e + 1]
            }
          },
          watch: {
            sharePopup: function(e) {
              e || (this.ticketpostObj = null, this.postUrl1 = "", this.qrCode = "", this.postUrl3 = "")
            },
            postUrl1: function(t) {
              this.ticketpostObj && t && this.ticketpostObj.shareType.indexOf("3") > -1 && (e.hideLoading(), this.sharePopup = !0)
            },
            postUrl2: function(t) {
              this.ticketpostObj && this.ticketpostObj.defaultPicUrl && this.ticketpostObj.shareType.indexOf("3") < 0 && (e.hideLoading(), this.sharePopup = !0), this.ticketpostObj ? this.postUrl3 = t : this.postUrl3 = ""
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          onShareAppMessage: function(e) {
            if (this.ticketpostObj) {
              var t = Object.assign(this.ticketpostObj, {}),
                i = this.postUrl3,
                n = "/subPage/pages/ticket_detail/ticket_detail?itemId=".concat(t.itemId);
              return {
                title: t.itemTitle,
                path: this.$util.setShareUrl(n),
                imageUrl: i
              }
            }
            var o = this.spotDetail.shareDescList,
              s = "我在".concat(this.spotDetail.scenicName, "等你，约吗？"),
              a = this.postUrl;
            return o && o[0] && (s = o[Math.random() * o.length | 0]), this.spotDetail.shareImage && (a = this.spotDetail.shareImage), {
              title: s,
              imageUrl: a,
              path: this.$util.setShareUrl("union/pages/scenicSpot/list?spotId=".concat(this.spotId))
            }
          },
          onHide: function() {},
          onLoad: function(e) {
            this.spotId = e.spotId, this.getSpotDetail(), this.getTicketTypeIByScenicId()
          },
          onShow: function() {},
          onPageScroll: function(e) {},
          onReachBottom: function() {},
          methods: {
            showSku: function() {
              this.showTicketSku = !0
            },
            showAllTimeM: function() {
              this.showAllTime = !0
            },
            hitClick: function(t) {
              this.$eventAnalyse.analyse({
                eventTag: "simpleSpot_ticketShare_click",
                eventName: "简版景区门票分享赚点击",
                eventParams: {
                  itemId: t.itemId
                }
              }), t.shareType.indexOf("3") < 0 && (t.sharePosterUrl = ""), this.ticketpostObj = t, e.showLoading({
                title: "卡片生成中..."
              }), (this.ticketpostObj.shareType.indexOf("3") > -1 || this.ticketpostObj.shareType.indexOf("2") > -1) && this.getminiQr(t)
            },
            getminiQr: function(e) {
              var t = this;
              this.$uniApi.dataRequestYesLoading("POST", "manager/app/wx/getminiLongSceneQr", {
                itemId: e.itemId,
                referenceId: this.userInfo.memberId,
                page: "subPage/pages/ticket_detail/ticket_detail",
                scene: "",
                width: ""
              }).then((function(e) {
                1 === e.code && (t.qrCode = e.data.baseData)
              }))
            },
            openNotice: function() {
              this.$eventAnalyse.analyse({
                eventTag: "simpleSpot_notice_click",
                eventName: "简版景区公告点击",
                eventParams: {
                  spotId: this.spotId
                }
              }), this.$refs.noticeP.showNotice = !0
            },
            getSpotDetail: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "base/app/v1/scenicSpot/getAppScenicSpotDetailSimplified?scenicId=".concat(this.spotId)).then((function(i) {
                if (1 != i.code) return t.$util.showToast(i.msg), void setTimeout((function() {
                  getCurrentPages().length < 2 ? e.switchTab({
                    url: "/pages/index/index"
                  }) : t.$util.prevPage()
                }), 500);
                t.spotDetail = i.data;
                var n = i.data.simplifiedBannerList;
                n && n.length > 1 || (n = i.data.mainPictureList.map((function(e) {
                  return {
                    imageUrl: e,
                    linkType: -1
                  }
                }))), t.swiperList = n, 1 == i.data.simplifiedCouponFlag && t.getSpotCoupons(), t.loadingStatus = !1
              }))
            },
            showBookTip: function(e, t) {
              if (this.$eventAnalyse.analyse({
                  eventTag: "simpleSpot_bookTip_click",
                  eventName: "简版景区门票规则点击",
                  eventParams: {
                    itemId: e.itemId,
                    ticketType: e.ticketType
                  }
                }), 2 == e.ticketType) return !e.stockStatus || e.sellOut ? void this.$util.showToast("已售空") : void this.$refs.skuP.setTicketType(e.itemId);
              this.$refs.bookInfoBox.getTicDetail(e.itemId, "pt")
            },
            getSpotCoupons: function() {
              var e = this,
                t = this,
                i = {
                  itemType: 1,
                  scenicId: this.spotId,
                  classSource: 2
                };
              this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/getCanReceiveOrUseCouponList", i).then((function(i) {
                if (t.couponDetailArr = i.data, 1 == i.code) {
                  var n = i.data;
                  if (0 != n.length) {
                    var o = [];
                    if (n && n[0]) {
                      for (var s = 0; s < n.length; ++s) {
                        var a = n[s],
                          r = String(a.couponAmount),
                          c = String(a.couponFullAmount);
                        a.couponFullAmount > 0 ? "满".concat(c, "减").concat(r, "券") : "".concat(r, "元无门槛券"), o.push(a)
                      }
                      e.couponArr = o
                    }
                  } else e.couponArr = []
                } else e.$util.showToast(i.msg)
              }))
            },
            getTicketTypeIByScenicId: function(t, i) {
              var n = this,
                o = this;
              o.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item/getScenicItemListSimplified", {
                scenicId: this.spotId
              }).then((function(e) {
                1 == e.code ? o.ticketArr = e.data || {} : n.$util.showToast(e.msg)
              })).catch((function(t) {
                e.hideLoading()
              }))
            },
            showYh: function() {
              this.$eventAnalyse.analyse({
                eventTag: "simpleSpot_coupon_click",
                eventName: "简版景区优惠券按钮点击",
                eventParams: {
                  spotId: this.spotId
                }
              }), this.$refs.couponPop.showYhMask = !0
            },
            jumpSpot: function() {
              var e = "/pages/spotDetailNew/spotDetailNew?spotId=".concat(this.spotId);
              this.$eventAnalyse.analyse({
                eventTag: "simpleSpot_name_click",
                eventName: "简版景区名称点击",
                eventParams: {
                  jumpUrl: e
                }
              }), this.$navigateTo({
                url: e
              })
            },
            jumpSpotIntro: function() {
              var e = "/subPage/pages/spotIntroNew/spotIntroNew?spotId=".concat(this.spotId, "&isCS=").concat(this.spotDetail.scenicType ? 1 : "");
              this.$eventAnalyse.analyse({
                eventTag: "simpleSpot_preferentialPolicies_click",
                eventName: "简版景区优待政策点击",
                eventParams: {
                  jumpUrl: e
                }
              }), this.$navigateTo({
                url: e
              })
            },
            buyFn: function(t) {
              if (t.itemId)
                if (this.$eventAnalyse.analyse({
                    eventTag: "simpleSpot_buy_click",
                    eventName: "简版景区预定按钮",
                    eventParams: {
                      itemId: t.itemId,
                      ticketType: t.ticketType
                    }
                  }), 2 != t.ticketType) {
                  var i = this.showTicketSku ? 1 : 0;
                  if (this.$refs.skuP.showTicketSku = !1, 1 != t.jumpFlag) {
                    var o = "/subPage/pages/ticketFillOrder/ticketFillOrder?ticketId=".concat(t.itemId),
                      s = "",
                      a = e.getStorageSync("userInfor").chansiOpenId,
                      r = 0;
                    if (1 == t.groupFlag && (o = "/subPage/pages/packPlaceOrder/packPlaceOrder?ticketId=".concat(t.itemId)), 1 == i && this.$refs.skuP.skuData && this.$refs.skuP.skuData.aggregationItemId && (o += "&aggregationItemId=".concat(this.$refs.skuP.skuData.aggregationItemId)), this.shareMemberId && (o += "&shareMemberId=".concat(this.shareMemberId)), this.selectedHour && this.selectedHour.itemId == t.itemId ? o += "&selectedDate=".concat(this.selectedHour.date) : this.selectedHour = "", 1 == this.spotDetail.scenicType && (s = "https://eshop.zhiyousx.com/dsmall-admin-ui/h5/temple.html?itemId=".concat(t.itemId), o += "&isCs=true", r = 1), this.$util.isLogin(o, r, s)) {
                      var c = this.spotDetail.telephoneVoList;
                      if (c && c[0] && e.setStorageSync("telephoneVoList", c), s && !a) return void n.navigateTo({
                        url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(s)
                      });
                      this.$navigateTo({
                        url: o
                      })
                    }
                  } else 2 == t.jumpType ? e.navigateTo({
                    url: "/pages/webpage/webpage?urlEncode=".concat(encodeURIComponent(t.jumpUrl))
                  }) : "wxf2cca76ae0520e33" == t.jumpAppId ? this.$navigateTo({
                    url: t.jumpUrl
                  }) : n.openEmbeddedMiniProgram({
                    appId: t.jumpAppId,
                    path: t.jumpUrl
                  })
                } else this.$refs.skuP.setTicketType(t.itemId)
            },
            jumpOrder: function() {
              var e = "/pages/myorder/myorder?type=0";
              this.$eventAnalyse.analyse({
                eventTag: "simpleSpot_myOrder_click",
                eventName: "简版景区我的订单点击",
                eventParams: {
                  jumpUrl: e
                }
              }), this.$util.isLogin(e) && this.$navigateTo({
                url: e
              })
            },
            swiperTopClick: function(e) {
              this.bannerClick(this.swiperList[e], {
                eventTag: "simpleSpot_banner_click",
                eventName: "简版景区轮播banner点击"
              })
            },
            bannerClick: function(t, i) {
              this.isClickNotice = !0, this.$eventAnalyse.analyse(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var i = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? a(Object(i), !0).forEach((function(t) {
                    (0, s.default)(e, t, i[t])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                  }))
                }
                return e
              }({
                eventParams: {
                  advertId: t.advertId,
                  advertName: t.advertName
                }
              }, i)), 0 === t.linkType && t.linkUrl ? (-1 != t.linkUrl.indexOf("?") && (t.linkUrl = t.linkUrl.replace("?", "*"), t.linkUrl = t.linkUrl.replace("=", "+")), this.$navigateTo({
                url: "/pages/webpage/webpage?url=".concat(t.linkUrl)
              })) : 1 === t.linkType ? 1 === t.objType ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=".concat(t.linkUrl)
              }) : 4 === t.objType || 7 === t.objType || 8 === t.objType || 9 === t.objType ? this.$navigateTo({
                url: "/pages/spotDetail/spotDetail?spotId=".concat(t.linkUrl)
              }) : 3 === t.objType ? this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=" + t.linkUrl
              }) : 2 === t.objType ? this.$util.cityJump(t.contentType, t.linkUrl) : 5 === t.objType && (["/pages/index/index", "/pages/spot_list/spot_list", "/pages/rankList/rankList", "/pages/mine/mine"].includes(t.linkUrlExtend) ? e.switchTab({
                url: t.linkUrlExtend
              }) : this.$navigateTo({
                url: t.linkUrlExtend
              })) : 2 === t.linkType ? "wxf2cca76ae0520e33" == t.appId ? this.$navigateTo({
                url: t.linkUrl
              }) : e.openEmbeddedMiniProgram({
                appId: t.appId,
                path: t.linkUrl
              }) : 3 === t.linkType ? (e.setStorageSync("richtext", t.linkUrl), this.$navigateTo({
                url: "/pages/richtext/richtext"
              })) : 8 == t.linkType && e.navigateTo({
                url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=3&room_appid=wxf2cca76ae0520e33&amp;type=1&amp;share_openid=ojWxP5dKQbj5En3Vh8MDC23Y_J5k&amp;custom_params=&amp;close_picture_in_picture_mode=0&amp;open_share_ticket=0&amp;lottery_id=0"
              })
            }
          }
        };
        t.default = r
      }).call(this, i("df3c").default, i("3223").default)
    },
};
