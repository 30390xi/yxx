require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/travelAgency/travelAgency"], {
    "0a6d": function(t, e, n) {
      (function(t, e) {
        var i = n("47a9");
        n("5366"), i(n("3240"));
        var o = i(n("31df"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "14d0": function(t, e, n) {
      (function(t, i) {
        var o = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = o(n("af34")),
          r = {
            components: {
              EmptyState: function() {
                n.e("components/empty/empty").then(function() {
                  return resolve(n("a427"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                loadMore: "loading",
                activeDays: 0,
                fontColor: "#fff",
                searchHeight: 0,
                foldRemark: !1,
                foldLable: !0,
                activeNav: 0,
                navList: ["全部"],
                couponList: [],
                travelAgentTag: "全部",
                companyInfoShow: {
                  showIntro: !0,
                  showCertificate: !1,
                  showPermission: !1,
                  showOther: !1
                },
                businessShow: !1,
                labelShow: !1,
                contactShow: !1,
                showOrCode: !1,
                parseStyle: {
                  p: "word-break: break-all;line-height:40rpx;color:rgba(0, 0, 0, 0.6);font-size:26rpx",
                  img: "border-radius: 20rpx;margin-top: 10rpx;"
                },
                typeList: ["全部", "跟团游", "一日游", "自由行", "研学游"],
                activeType: 0,
                current: 1,
                tabbarList: [{
                  title: "首页",
                  icon: "https://eshopfile.zhiyousx.com/171515206402454725.png",
                  activeIcon: "https://eshopfile.zhiyousx.com/171515176778099707.png"
                }, {
                  title: "导游领队",
                  icon: "https://eshopfile.zhiyousx.com/171515183414381019.png",
                  activeIcon: "https://eshopfile.zhiyousx.com/171515201588072789.png"
                }, {
                  title: "联系客服",
                  icon: "https://eshopfile.zhiyousx.com/171515187629320210.png"
                }, {
                  title: "我的订单",
                  icon: "https://eshopfile.zhiyousx.com/171515193733294508.png"
                }],
                tabCurrent: 0,
                goodList: [1, 2, 3, 4, 5, 6, 7],
                productList: [],
                navCenterTop: 0,
                scrollTop: 0,
                navBarBg: 0,
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
                detailObj: {},
                travelAgencyId: "",
                htmlContent: "",
                isRefresh: !1,
                tourGuideList: [],
                firstPage: !1,
                shareMemberId: ""
              }
            },
            filters: {
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
            onReady: function() {},
            onLoad: function(e) {
              if (e.scene) this.getScene(e.scene);
              else {
                this.travelAgencyId = e.travelAgencyId, this.shareMemberId = e.shareMemberId, this.getDetail(), this.getTravelAgentTag(), this.getProductList();
                var n = t.getMenuButtonBoundingClientRect();
                this.searchHeight = n.top;
                var i = getCurrentPages();
                1 != i.length || ["pages/index/index", "pages/index/index"].includes(i[0].route) || (this.firstPage = !0)
              }
            },
            onUnload: function() {},
            onShow: function() {
              this.getSpotCoupons(), i.showShareMenu({
                withShareTicket: !0,
                menus: ["shareAppMessage", "shareTimeline"]
              })
            },
            onShareAppMessage: function() {
              var t = "/subPack/pages/travelAgency/travelAgency?travelAgencyId=".concat(this.travelAgencyId);
              return {
                title: this.detailObj.shareDesc ? this.detailObj.shareDesc : this.detailObj.travelAgencyName,
                imageUrl: this.detailObj.shareImage ? this.detailObj.shareImage : this.detailObj.logo,
                path: this.$util.setShareUrl(t)
              }
            },
            onShareTimeline: function() {
              var t = "/subPack/pages/travelAgency/travelAgency?travelAgencyId=".concat(this.travelAgencyId);
              return {
                title: this.detailObj.shareDesc ? this.detailObj.shareDesc : this.detailObj.travelAgencyName,
                imageUrl: this.detailObj.shareImage ? this.detailObj.shareImage : this.detailObj.logo,
                query: "travelAgencyId=".concat(this.travelAgencyId),
                path: this.$util.setShareUrl(t)
              }
            },
            onPageScroll: function(t) {
              this.scrollTop = t.scrollTop, this.scrollTop >= this.navCenterTop - this.searchHeight - 38 ? (this.fontColor = "#000", this.navBarBg = 1) : (this.fontColor = "#fff", this.navBarBg = 0)
            },
            onReachBottom: function() {
              "loadmore" == this.loadMore && (this.current += 1, 0 === this.tabCurrent ? this.getProductList() : 1 === this.tabCurrent && this.getTourGuideList())
            },
            methods: {
              getScene: function(t) {
                var e = this;
                this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/qrCodeScene/getScene?sceneId=" + t).then((function(t) {
                  1 === t.code && (e.travelAgencyId = t.data.scene.split("=")[1], e.shareMemberId = t.data.referenceId, e.getFun())
                }))
              },
              getFun: function() {
                this.getDetail(), this.getTravelAgentTag(), this.getProductList();
                var e = t.getMenuButtonBoundingClientRect();
                this.searchHeight = e.top;
                var n = getCurrentPages();
                1 != n.length || ["pages/index/index", "pages/index/index"].includes(n[0].route) || (this.firstPage = !0)
              },
              getDetail: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/travelAgency/appDetail/" + this.travelAgencyId).then((function(e) {
                  1 === e.code && (t.detailObj = e.data, t.getTagShow(), t.navTop())
                }))
              },
              getTagShow: function() {
                this.detailObj.tagList = this.detailObj.tagList ? this.detailObj.tagList : [];
                var t = JSON.parse(JSON.stringify(this.detailObj.tagList));
                (t = t.filter((function(t) {
                  return t.tagDesc
                }))).forEach((function(t) {
                  t.isShow = !1
                })), this.detailObj.tagList = t
              },
              getProductList: function() {
                var t = this;
                this.loadMore = "loading";
                var e = {
                  size: 10,
                  current: this.current,
                  travelAgencyId: this.travelAgencyId,
                  sortType: 3
                };
                "全部" != this.travelAgentTag && (e.travelAgentTag = this.travelAgentTag), this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/line/product/list", e).then((function(e) {
                  var n;
                  1 === e.code && (t.loadMore = e.data.records.length > 9 ? "loadmore" : "nomore", (n = t.productList).push.apply(n, (0, a.default)(e.data.records)))
                }))
              },
              getTravelAgentTag: function() {
                var t = this,
                  e = {
                    travelAgencyId: this.travelAgencyId
                  };
                this.$uniApi.dataRequestNoLoading("get", "product/app/v1/line/product/getLineTravelAgentTag", e).then((function(e) {
                  if (1 === e.code) {
                    var n = e.data || [],
                      i = t;
                    n.forEach((function(t) {
                      i.navList.push(t)
                    }))
                  }
                }))
              },
              getSpotCoupons: function() {
                var t = this,
                  e = {
                    itemType: 2,
                    travelAgencyId: this.travelAgencyId
                  };
                this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/getCanReceiveOrUseCouponList", e).then((function(e) {
                  1 === e.code && (t.couponList = e.data || [])
                }))
              },
              getDec: function(t) {
                var e, n = "",
                  i = "",
                  o = "",
                  a = "";
                return t.cityList && t.cityList.forEach((function(t, e) {
                  i += t + "/"
                })), i && (i = i.slice(0, -1) + " · "), e = ["跟团游", "一日游", "自由行", "研学游"][t.travelMode], t.journeyDay && (o = t.journeyDay + "天"), t.journeyNight && (a = t.journeyNight + "晚"), (o || a) && (n = " · " + o + a), i + e + n
              },
              getTourGuideList: function() {
                var t = this;
                this.loadMore = "loading";
                var e = {
                  size: 10,
                  current: this.current,
                  travelAgencyId: this.travelAgencyId
                };
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/travelAgency/getTourGuideList", e).then((function(e) {
                  var n;
                  1 === e.code && (t.loadMore = e.data.records.length > 9 ? "loadmore" : "nomore", (n = t.tourGuideList).push.apply(n, (0, a.default)(e.data.records)))
                }))
              },
              noCoupe: function() {
                this.$util.showToast("该优惠券已抢光~")
              },
              available: function(e) {
                var n = JSON.stringify(e);
                t.navigateTo({
                  url: "/subPack/pages/groupOrder/availableProducts?coupon=".concat(n)
                })
              },
              tagList: function(t) {
                var e = "";
                return t.forEach((function(t) {
                  e += t.tagName + "·"
                })), e.slice(0, -1)
              },
              navTop: function() {
                var t = this,
                  e = this;
                setTimeout((function() {
                  new Promise((function(t) {
                    var e = i.createSelectorQuery();
                    e.select("#navCenter").boundingClientRect(), e.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(n) {
                    e.navCenterTop = n[0] ? n[0].top + t.scrollTop : 0, 0 === e.navCenterTop && e.solutionTop()
                  }))
                }), 100)
              },
              solutionTop: function() {
                var t = this,
                  e = this;
                setTimeout((function() {
                  new Promise((function(t) {
                    var e = i.createSelectorQuery();
                    e.select("#solution").boundingClientRect(), e.exec((function(e) {
                      t(e)
                    }))
                  })).then((function(n) {
                    e.navCenterTop = n[0] ? n[0].top + t.scrollTop : 200
                  }))
                }), 100)
              },
              cityName: function(t) {
                var e = "";
                return t.forEach((function(t, n) {
                  e += t + "/"
                })), e.slice(0, -1)
              },
              fold: function(t) {
                1 == t ? this.foldRemark = !this.foldRemark : this.foldLable = !this.foldLable, this.navTop()
              },
              changeNav: function(e, n) {
                this.activeNav = e, this.current = 1, this.isRefresh = !1, this.travelAgentTag = n, this.productList = [], this.getProductList(), this.navBarBg && t.pageScrollTo({
                  scrollTop: this.navCenterTop - this.searchHeight - 28,
                  duration: 0
                })
              },
              call: function(e) {
                t.makePhoneCall({
                  phoneNumber: e
                })
              },
              expandChange: function(t, e) {
                "tag" === t ? e.isShow = !e.isShow : this.companyInfoShow[t] = !this.companyInfoShow[t]
              },
              hexToRgb: function(t) {
                return t ? "rgb(" + parseInt("0x" + t.slice(1, 3)) + "," + parseInt("0x" + t.slice(3, 5)) + "," + parseInt("0x" + t.slice(5, 7)) + ",0)" : "rgba(27,138,138,0)"
              },
              changeBar: function(t) {
                this.current = 1, this.isRefresh = !1, 0 === t ? (this.tabCurrent = t, this.productList = [], this.getProductList()) : 1 === t ? (this.tabCurrent = t, this.tourGuideList = [], this.getTourGuideList()) : 2 === t ? this.contactShow = !0 : 3 === t && this.$navigateTo({
                  url: "/pages/myorder/myorder?itemType=2"
                })
              },
              openModal: function(t, e) {
                1 == t ? this.businessShow = !0 : 2 == t && e && (this.labelShow = !0, this.htmlContent = e)
              },
              getCoupe: function(t) {
                var e = this;
                this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                  couponId: t
                }).then((function(t) {
                  1 == t.code ? (e.getSpotCoupons(), e.$util.showToast("已领取")) : e.$util.showToast("已抢光")
                }))
              },
              goGoodInfo: function(t, e) {
                var n = "/subPack/pages/lineProductDetails/lineProductDetails?productId=" + t;
                this.$navigateTo({
                  url: n
                })
              },
              goTourGuide: function(t) {
                this.$navigateTo({
                  url: "/subPack/pages/tourGuide/tourGuide?tourGuideId=" + t
                })
              },
              back: function() {
                this.firstPage ? t.switchTab({
                  url: "/pages/index/index"
                }) : t.navigateBack()
              }
            }
          };
        e.default = r
      }).call(this, n("df3c").default, n("3223").default)
    },
    "31df": function(t, e, n) {
      n.r(e);
      var i = n("d492"),
        o = n("c78c");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      n("808d");
      var r = n("828b"),
        s = Object(r.a)(o.default, i.b, i.c, !1, null, "69e1cd28", null, !1, i.a, void 0);
      e.default = s.exports
    },
    5883: function(t, e, n) {},
    "808d": function(t, e, n) {
      var i = n("5883");
      n.n(i).a
    },
    c78c: function(t, e, n) {
      n.r(e);
      var i = n("14d0"),
        o = n.n(i);
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(a);
      e.default = o.a
    },
    d492: function(t, e, n) {
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return a
      })), n.d(e, "a", (function() {
        return i
      }));
      var i = {
          uLoadmore: function() {
            return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "2db1"))
          },
          uIcon: function() {
            return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "61be"))
          },
          uPopup: function() {
            return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null, "39fb"))
          },
          uParse: function() {
            return Promise.all([n.e("common/vendor"), n.e("uview-ui/components/u-parse/u-parse")]).then(n.bind(null, "7217"))
          }
        },
        o = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.hexToRgb(t.detailObj.colour)),
            n = 0 === t.tabCurrent && t.navList.length > 1,
            i = 0 == t.tabCurrent ? t.__map(t.productList, (function(e, n) {
              return {
                $orig: t.__get_orig(e),
                f0: t._f("travelModeFilter")(e.travelMode),
                g1: e.cityNames ? e.cityNames.split(",") : null,
                l0: e.lineHighlightLabelList ? t.__map(e.lineHighlightLabelList, (function(n, i) {
                  return {
                    $orig: t.__get_orig(n),
                    g2: e.lineHighlightLabelList.length
                  }
                })) : null,
                f1: e.saleNum > 0 ? t._f("saleNumFormat")(e.saleNum) : null
              }
            })) : null,
            o = 0 == t.tabCurrent ? "nomore" == t.loadMore && 0 == t.productList.length : null,
            a = 0 != t.tabCurrent ? t.__map(t.tourGuideList, (function(e, n) {
              return {
                $orig: t.__get_orig(e),
                m1: t.tagList(e.tagList)
              }
            })) : null,
            r = 0 != t.tabCurrent ? "nomore" == t.loadMore && 0 == t.tourGuideList.length : null,
            s = t.detailObj.tagList && t.detailObj.tagList.length > 0;
          t._isMounted || (t.e0 = function(e) {
            t.showOrCode = !0
          }, t.e1 = function(e) {
            t.contactShow = !1
          }), t.$mp.data = Object.assign({}, {
            $root: {
              m0: e,
              g0: n,
              l1: i,
              g3: o,
              l2: a,
              g4: r,
              g5: s
            }
          })
        },
        a = []
    }
  },
  [
    ["0a6d", "common/runtime", "common/vendor"]
  ]
]);
