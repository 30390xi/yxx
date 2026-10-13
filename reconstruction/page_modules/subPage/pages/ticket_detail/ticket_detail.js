// Extracted from subPage/pages/ticket_detail/ticket_detail.js; webpack module f5c1.
// Compiled code for analysis; not an original source file.
module.exports = {
    f5c1: function(t, e, o) {
      (function(t, n) {
        var i = o("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = i(o("7eb4")),
          c = i(o("ee10")),
          a = i(o("7ca3"));

        function s(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
          return n
        }

        function u(t, e) {
          var o = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), o.push.apply(o, n)
          }
          return o
        }
        var m = {
          components: {
            EmptyState: function() {
              o.e("subPage/components/empty/empty").then(function() {
                return resolve(o("3b7a"))
              }.bind(null, o)).catch(o.oe)
            },
            subscription: function() {
              o.e("components/recommendedPop/subscription").then(function() {
                return resolve(o("a1b9"))
              }.bind(null, o)).catch(o.oe)
            },
            recommendedPop: function() {
              o.e("components/recommendedPop/recommend-pop").then(function() {
                return resolve(o("3d4a"))
              }.bind(null, o)).catch(o.oe)
            }
          },
          data: function() {
            return {
              couponArr: [],
              couponDetailArr: [],
              daoJiShiObj: {},
              isAndroid: !0,
              ticketDetailObj: {},
              posterData: {},
              showPainter: !1,
              postUrl: "",
              painterData: {},
              shareMemberId: "",
              iconShow: !1,
              unit: 0,
              showYhMask: !1,
              tapIndex: null,
              loadingStatus: !0,
              itemId: "",
              commodityInfo: {
                isDeleted: 0,
                defaultPicUrl: ""
              },
              scrollTop: 0,
              navIdx: 0,
              popupType: 0,
              addresIdx: 0,
              addrId: "",
              openIndex: 1,
              buyCount: 1,
              selectedIndex: 0,
              specificationsProps: {
                id: "propId",
                name: "propVal",
                list: "list"
              },
              optionsNav: [{
                icon: "/static/images/store.png",
                text: "店铺"
              }, {
                icon: "https://eshopfile.zhiyousx.com/170065368213433372.png",
                text: "购物车",
                infoBackgroundColor: "#ff4643"
              }, {
                icon: "/static/images/goodsshare.png",
                text: "分享"
              }],
              codeUrl: "",
              parseStyle: {
                p: "word-break: break-all;"
              },
              parseStyle1: {
                p: "word-break: break-all;line-height:48rpx;"
              },
              cashBackAmount: "",
              sharePopup: !1,
              postUrl1: "",
              showShareImg: !1,
              qrCode: "",
              showQrCode: !1,
              showPC: !1,
              selloutSuggestData: {}
            }
          },
          watch: {
            postUrl: function(t) {
              console.log(t)
            },
            postUrl1: function(t) {
              console.log(t)
            }
          },
          onLoad: function(e) {
            t.getSystemInfoSync().system.indexOf("Android") > -1 || (this.isAndroid = !1), e.scene ? this.getScene(e.scene) : (e.itemId && (this.itemId = e.itemId), e.shareId && (this.shareMemberId = e.shareId || "", this.$store.commit("SET_DISTRIBUTORID", e.shareId), t.setStorageSync("peopleShareId", e.shareId)), this.pageLoad())
          },
          onUnload: function() {
            this._timer && clearInterval(this._timer)
          },
          onShareAppMessage: function(t) {
            var e = "/subPage/pages/ticket_detail/ticket_detail?itemId=".concat(this.commodityInfo.itemId);
            return {
              title: this.commodityInfo.itemTitle,
              path: this.$util.setShareUrl(e),
              imageUrl: this.postUrl
            }
          },
          onShareTimeline: function() {
            var t = "itemId=".concat(this.commodityInfo.itemId);
            return {
              title: this.commodityInfo.itemTitle,
              query: this.$util.setShareTimeline(t),
              imageUrl: this.postUrl
            }
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, t.scrollTop > this.spxqTop ? this.navIdx = 1 : this.navIdx = 0
          },
          filters: {
            toFixed2: function(t) {
              return t ? Number(t).toFixed(2) : "0.00"
            },
            timeFormat: function(t) {
              return t.replace(/-/g, ".")
            }
          },
          computed: {
            popupTitle: function() {
              return 0 === this.popupType ? "配送" : 1 === this.popupType ? "提示" : "服务"
            },
            userInfo: function() {
              return this.$store.getters.userInfor
            },
            showFenxiao: function() {
              var t = this.userInfo;
              return t && t.isFenxiao || this.shareMemberId
            },
            scenicSpotId: function() {
              return this.commodityInfo && this.commodityInfo.itemTicketScenicSpotVoList && this.commodityInfo.itemTicketScenicSpotVoList.length && this.commodityInfo.itemTicketScenicSpotVoList[0].scenicId ? this.commodityInfo.itemTicketScenicSpotVoList[0].scenicId : ""
            },
            showPop: function() {
              return !!(this.commodityInfo && this.commodityInfo.itemTicketScenicSpotVoList && this.commodityInfo.itemTicketScenicSpotVoList.length && this.commodityInfo.itemTicketScenicSpotVoList[0] && 1 == this.commodityInfo.itemTicketScenicSpotVoList[0].selloutSuggestFlag && 1 == this.commodityInfo.selloutSuggestFlag)
            },
            dialogInfos: function() {
              return this.commodityInfo && this.commodityInfo.itemTicketScenicSpotVoList && this.commodityInfo.itemTicketScenicSpotVoList.length && this.commodityInfo.itemTicketScenicSpotVoList[0] && this.commodityInfo.itemTicketScenicSpotVoList[0].scenicId,
                function(t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(o), !0).forEach((function(e) {
                      (0, a.default)(t, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : u(Object(o)).forEach((function(e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                  }
                  return t
                }({
                  itemId: this.commodityInfo.itemId,
                  bizType: 3,
                  scenicSpotId: "",
                  showPop: (!this.commodityInfo.stockStatus || this.commodityInfo.sellOut) && this.showPop,
                  isSingleVote: 2
                }, this.selloutSuggestData)
            }
          },
          methods: {
            refreshCoupon: function() {
              this.getSelloutSuggestData(1)
            },
            getSelloutSuggestData: function(t) {
              var e = this;
              this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/item/getSelloutSuggest", {
                bizId: this.itemId,
                bizType: 2
              }).then((function(o) {
                1 === o.code && (e.selloutSuggestData = o.data || {}, 1 != t && (e.showPC = !0))
              }))
            },
            onBeforeLeave: function(t) {
              var e = this;
              this.showPC = !1, this.$nextTick((function() {
                e.$refs.recommendedPop.open()
              }))
            },
            getScene: function(e) {
              var o = this;
              this.$uniApi.getRequestNoLoading("GET", "manager/app/v1/qrCodeScene/getScene?sceneId=" + e).then((function(e) {
                1 === e.code && (console.log(e.data), o.itemId = e.data.itemId, o.shareMemberId = e.data.referenceId || "", o.$store.commit("SET_DISTRIBUTORID", e.data.referenceId), e.data.referenceId && t.setStorageSync("peopleShareId", e.data.referenceId), o.pageLoad())
              }))
            },
            getminiQr: function() {
              var t = this;
              this.$uniApi.dataRequestYesLoading("POST", "manager/app/wx/getminiLongSceneQr", {
                itemId: this.itemId,
                referenceId: this.userInfo.memberId,
                page: "subPage/pages/ticket_detail/ticket_detail",
                scene: "",
                width: ""
              }).then((function(e) {
                1 === e.code && (t.qrCode = e.data.baseData)
              }))
            },
            pageLoad: function() {
              this.getGoodsInfo()
            },
            getGoodsInfo: function() {
              var e = this;
              return (0, c.default)(r.default.mark((function o() {
                return r.default.wrap((function(o) {
                  for (;;) switch (o.prev = o.next) {
                    case 0:
                      return o.next = 2, e.getGoodsDetails();
                    case 2:
                      e.commodityInfo = o.sent, e.commodityInfo.stockStatus && !e.commodityInfo.sellOut || !e.showPop || e.getSelloutSuggestData(), e.cashBackAmount = e.commodityInfo.cashBackAmount || 0, e.showPainter = !0, e.userInfo && e.userInfo.isFenxiao && e.commodityInfo.maxReward > 0 && e.commodityInfo.stockStatus && !e.commodityInfo.sellOut && e.getminiQr(), 1 != e.commodityInfo.scenicType && 1 != e.commodityInfo.hideShareFlag || t.hideShareMenu(), 0 == e.commodityInfo.seckillActivity && e.showCountDown(e.commodityInfo.seckillEndTime), e.$nextTick((function() {
                        var e = this;
                        t.createSelectorQuery().select("#spxq").boundingClientRect((function(t) {
                          e.spxqTop = t.top
                        })).exec()
                      })), e.getCouponDetail();
                    case 11:
                    case "end":
                      return o.stop()
                  }
                }), o)
              })))()
            },
            getCoupon: function() {
              this.$uniApi.getRequestNoLoading("GET", "product/app/v1/itemActive/getItemCoupons/" + this.itemId).then((function(t) {
                for (var e = t.data, o = 0, n = [], i = 0; i < e.length; ++i) {
                  var r = e[i],
                    c = "",
                    a = 0,
                    s = String(r.couponAmount),
                    u = String(r.couponFullAmount);
                  if (r.couponFullAmount > 0 ? (c = "满".concat(u, "减").concat(s, "券"), a = 3) : (c = "".concat(s, "元无门槛券"), a = 5), (o += (c.length - a) / 2 + a) > 20) break;
                  n.push(r)
                }
              }))
            },
            showCountDown: function(t) {
              var e = this;
              this._timer = setInterval((function() {
                var o = new Date;
                if (new Date(t.replace(/-/g, "/")).getTime() - o.getTime() <= 0) return clearInterval(e._timer), e.daoJiShiObj = {
                  hour: 0,
                  minute: 0,
                  second: 0
                }, void e.getGoodsInfo();
                e.daoJiShiObj = e.$util.countDown(t)
              }), 1e3)
            },
            getGoodsDetails: function() {
              var e = this;
              return t.showLoading({
                title: "加载中..."
              }), new Promise((function(o, n) {
                e.$uniApi.getRequestNoLoading("GET", "product/app/v1/item/getTiketProductDetail?itemId=" + e.itemId).then((function(n) {
                  if (e.loadingStatus = !1, t.hideLoading(), 1 === n.code) {
                    e.iconShow = !0;
                    var i = n.data.picUrls;
                    n.data.picUrls = [];
                    var r, c = function(t, e) {
                      var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                      if (!o) {
                        if (Array.isArray(t) || (o = function(t, e) {
                            if (t) {
                              if ("string" == typeof t) return s(t, e);
                              var o = Object.prototype.toString.call(t).slice(8, -1);
                              return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? s(t, e) : void 0
                            }
                          }(t)) || e && t && "number" == typeof t.length) {
                          o && (t = o);
                          var n = 0,
                            i = function() {};
                          return {
                            s: i,
                            n: function() {
                              return n >= t.length ? {
                                done: !0
                              } : {
                                done: !1,
                                value: t[n++]
                              }
                            },
                            e: function(t) {
                              throw t
                            },
                            f: i
                          }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                      }
                      var r, c = !0,
                        a = !1;
                      return {
                        s: function() {
                          o = o.call(t)
                        },
                        n: function() {
                          var t = o.next();
                          return c = t.done, t
                        },
                        e: function(t) {
                          a = !0, r = t
                        },
                        f: function() {
                          try {
                            c || null == o.return || o.return()
                          } finally {
                            if (a) throw r
                          }
                        }
                      }
                    }(i);
                    try {
                      for (c.s(); !(r = c.n()).done;) {
                        var a = r.value;
                        n.data.picUrls.push({
                          image: a
                        })
                      }
                    } catch (t) {
                      c.e(t)
                    } finally {
                      c.f()
                    }
                    o(n.data)
                  }
                })).catch((function(e) {
                  t.hideLoading()
                }))
              }))
            },
            favBtn: function() {
              var t = this,
                e = "";
              if (1 == this.commodityInfo.scenicType && (e = 1), this.$util.isLogin("", e)) {
                var o = {
                  itemId: this.itemId,
                  memberId: this.userInfo.memberId,
                  sellerId: this.commodityInfo.sellerId,
                  skuId: ""
                };
                this.$uniApi.dataRequestNoLoading("PUT", "manager/app/v1/memberFavoriteSku", o).then((function(e) {
                  1 === e.code ? (1 === t.commodityInfo.favorite ? (t.commodityInfo.favorite = 0, t.$util.showToast("已取消收藏")) : (t.commodityInfo.favorite = 1, t.$util.showSuccessToast("已收藏")), t.$forceUpdate()) : t.$util.showToast(e.msg)
                })).catch((function(e) {
                  t.$util.showToast(e.msg)
                }))
              }
            },
            nabBtn: function(e) {
              this.navIdx = e, 0 === e ? t.pageScrollTo({
                scrollTop: 0,
                duration: 300
              }) : 1 === e && t.pageScrollTo({
                scrollTop: this.spxqTop,
                duration: 300
              })
            },
            closePopup: function() {
              this.$refs.popup.close()
            },
            brText: function(t) {
              if (t) {
                var e = t.split("#**#");
                return e.pop().split("</p>").forEach((function(t, o) {
                  if (t) {
                    var n = (t = t.split("<p>").join("")).match(/\<.*?\>/g),
                      i = t.match(/[\r\n]/g),
                      r = n || i;
                    r && r[0] && r.forEach((function(e) {
                      t = t.replaceAll(e, "")
                    })), e.push(t)
                  }
                })), e
              }
            },
            swiperBtn: function(e) {
              var o = [];
              this.commodityInfo.picUrls.forEach((function(t) {
                o.push(t.image)
              })), t.previewImage({
                current: e,
                urls: o
              })
            },
            commentsBtn: function(e, o) {
              t.previewImage({
                current: o,
                urls: e
              })
            },
            makePhoneCall: function(e) {
              t.makePhoneCall({
                phoneNumber: e
              })
            },
            goFillOrder: function() {
              if (1 != this.commodityInfo.jumpFlag) {
                var e = this.commodityInfo.itemId,
                  o = 0,
                  i = "/subPage/pages/ticketFillOrder/ticketFillOrder?ticketId=".concat(e);
                1 == this.commodityInfo.groupFlag && (i = "/subPage/pages/packPlaceOrder/packPlaceOrder?ticketId=".concat(e)), this.shareMemberId && (i += "&shareMemberId=".concat(this.shareMemberId));
                var r = "",
                  c = t.getStorageSync("userInfor").chansiOpenId;
                if (1 == this.commodityInfo.scenicType && (r = "https://eshop.zhiyousx.com/dsmall-admin-ui/h5/temple.html?itemId=".concat(e), o = 1), this.$util.isLogin(i, o, r)) {
                  if (r && !c) return void n.navigateTo({
                    url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(r)
                  });
                  this.$navigateTo({
                    url: i
                  })
                }
              } else 2 == this.commodityInfo.jumpType ? t.navigateTo({
                url: "/pages/webpage/webpage?urlEncode=".concat(encodeURIComponent(this.commodityInfo.jumpUrl))
              }) : 1 == this.commodityInfo.jumpType ? "wxf2cca76ae0520e33" == this.commodityInfo.jumpAppId ? this.$navigateTo({
                url: this.commodityInfo.jumpUrl
              }) : n.openEmbeddedMiniProgram({
                appId: this.commodityInfo.jumpAppId,
                path: this.commodityInfo.jumpUrl
              }) : 3 == this.commodityInfo.jumpType && this.$util.showToast("请前往支付宝小程序购买")
            },
            showMore: function(t) {
              this.tapIndex != t ? this.tapIndex = t : this.tapIndex = null
            },
            showYh: function() {
              this.showYhMask = !this.showYhMask
            },
            getCouponDetail: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/getCanReceiveOrUseCouponList", {
                itemId: this.itemId,
                itemType: 1
              }).then((function(e) {
                t.couponDetailArr = e.data
              }))
            },
            toSpot: function(t) {
              console.log(t), this.$navigateTo({
                url: "/pages/spotDetail/spotDetail?spotId=" + t.scenicId
              })
            },
            receiveCoupon: function(t, e) {
              var o = this;
              this.$util.isLogin() && 1 == e && this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                couponId: t
              }).then((function(t) {
                1 == t.code || o.$util.showToast("已抢光"), o.getCouponDetail()
              }))
            }
          }
        };
        e.default = m
      }).call(this, o("df3c").default, o("3223").default)
    }
};
