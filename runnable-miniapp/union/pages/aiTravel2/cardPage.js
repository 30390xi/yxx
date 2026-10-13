require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiTravel2/cardPage"], {
    "05bb": function(t, e, i) {
      i.r(e);
      var n = i("2f4a"),
        o = i("90a4");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        i.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      i("2064");
      var s = i("828b"),
        r = Object(s.a)(o.default, n.b, n.c, !1, null, "56c04c3e", null, !1, n.a, void 0);
      e.default = r.exports
    },
    "06a0": function(t, e, i) {
      (function(t, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = {
          name: "cardPage",
          components: {
            zeroMarkdownView: function() {
              i.e("union/components1/components/zero-markdown-view/zero-markdown-view").then(function() {
                return resolve(i("dd9a"))
              }.bind(null, i)).catch(i.oe)
            },
            uRate: function() {
              i.e("uview-ui/components/u-rate/u-rate").then(function() {
                return resolve(i("ce4c"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          filters: {
            starFilter: function(t) {
              return ["", "完全没用", "一般", "还行", "有用", "十分有用"][t]
            }
          },
          data: function() {
            return {
              sessionId: "",
              dataList: [],
              subkey: "U4JBZ-K7XW4-GH2UA-KVPJK-OLCYV-7WB3D",
              map: {
                longitude: "108.939621",
                latitude: "34.343147",
                scale: 14
              },
              polyline: [],
              markers: [],
              isShowDetail: !0,
              currentTab: 0,
              insideScrollTop: .1,
              headerHeight: 0,
              isFirstLoad: !0,
              fEleTop: 0,
              fEleTopNow: 0,
              fEleBottom: 0,
              fEleBottomNow: 0,
              headerTouchStartX: 0,
              headerTouchStartY: 0,
              touchStartX: 0,
              touchStartY: 0,
              mapLoading: !1,
              _mapContext: null,
              showLineList: !0,
              capsuleHeight: 0,
              statusBarHeight: 0,
              currentMapDayIndex: -1,
              scrollDetectTimer: null,
              isCardTopLoading: !1,
              isCardTop: !1,
              budgetItems: "",
              tipsContent: "",
              invitedFriends: [],
              isShare: !1,
              shareType: 0,
              guideImageUrl: "",
              feedbackStatus: "",
              feedbackReason: "",
              drawerTriggered: !0,
              star: 0,
              showInput: !1,
              comment: "",
              showThanks: !1,
              forbiddenPop: !1,
              showRate: !0,
              keyboardHeight: 0,
              lastScrollTop: 0,
              scrollViewHeight: 0,
              isFromHistoryList: !1,
              isHide: !1,
              goGift: !1
            }
          },
          onLoad: function(t) {
            t.scene ? this.sessionId = t.scene : this.sessionId = t.sessionId, this.getLineCard(), this.getCapsuleInfo(), this.getGiftEnter(), this.isShare = t.type && "share" === t.type || t.scene, this.isFromHistoryList = t.source && "historyList" === t.source, this.getComment()
          },
          mounted: function() {
            var e = this;
            this.$nextTick((function() {
              t.createSelectorQuery().in(e).select(".scroll-content").boundingClientRect((function(t) {
                t && (e.scrollViewHeight = t.height)
              })).exec()
            })), t.onKeyboardHeightChange((function(t) {
              e.keyboardHeight = t.height > 0 ? t.height : 0
            }))
          },
          onShow: function() {
            this.isHide && (this.isHide = !1, this.getLineCardIsTop()), this.goGift && (this.goGift = !1, t.showToast({
              title: "可以点击左上角按钮返回小七首页进行查看领取！",
              icon: "none",
              duration: 3e3
            }))
          },
          onHide: function() {
            this.isHide = !0
          },
          onShareAppMessage: function() {
            var t = {};
            return 1 === this.shareType ? (t = this.getShareConfig(), this.shareType = 0) : (this.$eventAnalyse.analyse({
              eventTag: "aiTravel_cardShare_click",
              eventName: "旅行搭子卡片点击分享",
              eventParams: JSON.stringify({
                sessionId: this.sessionId
              })
            }), t = {
              href: "/union/pages/aiTravel2/cardPage?sessionId=".concat(this.sessionId, "&type=share"),
              title: "".concat(this.dataList[0].city).concat(this.dataList.length, "天旅行计划"),
              imageUrl: "https://eshopfile.zhiyousx.com/175214881804186478.png"
            }), console.log(t, "onShareAppMessage"), {
              title: t.title,
              path: t.href,
              imageUrl: t.imageUrl
            }
          },
          methods: {
            blockEvent: function(t) {
              t.stopPropagation(), t.preventDefault()
            },
            closeGiftEnter: function() {
              this.$uniApi.dataRequestNoLoading("POST", "ai/isEnter/add", {
                openId: t.getStorageSync("wxopenid")
              }).then((function(t) {})), this.$refs.giftEnterPopup.close(), t.showToast({
                title: "可以点击左上角按钮返回小七首页进行查看领取！",
                icon: "none",
                duration: 3e3
              })
            },
            goGiftEnter: function() {
              this.$refs.giftEnterPopup.close(), this.goGift = !0, this.$uniApi.dataRequestNoLoading("POST", "ai/isEnter/add", {
                openId: t.getStorageSync("wxopenid")
              }).then((function(e) {
                1 === e.code && t.navigateTo({
                  url: "/pages/webpage/webpage?url=https://yxh5.zhiyousx.com/yxH5/show*id+394"
                })
              }))
            },
            goCoupon: function() {
              t.navigateTo({
                url: "/pages/webpage/webpage?url=https://yxh5.zhiyousx.com/yxH5/show*id+394"
              })
            },
            getTitleIcon: function(t) {
              return ["https://eshopfile.zhiyousx.com/175679891689588582.png", "https://eshopfile.zhiyousx.com/175679895905592634.png", "https://eshopfile.zhiyousx.com/175679897104900353.png", "https://eshopfile.zhiyousx.com/175679891689588582.png"][t]
            },
            getDayLines: function(t) {
              var e = "";
              return t.forEach((function(i, n) {
                e += i.name + (n < t.length - 1 ? "→" : "")
              })), e
            },
            getLineCardIsTop: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/queryById?id=" + this.sessionId).then((function(e) {
                1 === e.code && (t.isCardTop = e.data[0].isTop)
              }))
            },
            getGiftEnter: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/isEnter/queryByOpenId?openId=" + t.getStorageSync("wxopenid")).then((function(t) {
                1 === t.code && null === t.data && e.$refs.giftEnterPopup.open()
              }))
            },
            getCardTop: function() {
              var e = this;
              if (!this.isCardTopLoading) {
                this.isCardTopLoading = !0;
                var i = this.isCardTop ? "ai/planCard/delTop" : "ai/planCard/addTop";
                this.$uniApi.dataRequestNoLoading("GET", i, {
                  sessionId: this.sessionId,
                  openId: t.getStorageSync("wxopenid")
                }).then((function(t) {
                  1 === t.code && (e.$util.showToast(e.isCardTop ? "取消置顶成功" : "置顶行程成功"), e.isCardTop = !e.isCardTop)
                })).catch((function(t) {
                  console.error("置顶行程失败:", t)
                })).finally((function() {
                  e.isCardTopLoading = !1
                }))
              }
            },
            goSpot: function(t) {
              t && this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + t
              })
            },
            goEditPage: function() {
              this.$eventAnalyse.analyse({
                eventTag: "aiTravel_edit_click",
                eventName: "旅行搭子卡片点击编辑",
                eventParams: JSON.stringify({
                  sessionId: this.sessionId
                })
              }), this.navigateToEditPage()
            },
            goHistoryList: function() {
              try {
                getCurrentPages().length >= 8 ? t.reLaunch({
                  url: "/union/pages/aiTravel2/historyList"
                }) : t.navigateTo({
                  url: "/union/pages/aiTravel2/historyList"
                })
              } catch (e) {
                t.reLaunch({
                  url: "/union/pages/aiTravel2/historyList"
                })
              }
            },
            goToDetail: function(e) {
              var i = this;
              this.currentTab = 1, this.showLineList = !1, this.getTotop(), this.$nextTick((function() {
                t.createSelectorQuery().in(i).select("#dayTitle".concat(e)).boundingClientRect((function(e) {
                  e && t.createSelectorQuery().in(i).select(".scroll-content").boundingClientRect((function(t) {
                    if (t) {
                      var n = e.top - t.top;
                      n = Math.max(n, 0), i.insideScrollTop = 0, i.$nextTick((function() {
                        setTimeout((function() {
                          i.insideScrollTop = n, i.showLineList = !0
                        }), 0)
                      }))
                    }
                  })).exec()
                })).exec()
              }))
            },
            getLineCard: function() {
              var e = this;
              this.mapLoading = !0, this.markers = [], this.polyline = [], this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/queryById?id=" + this.sessionId).then((function(i) {
                if (e.mapLoading = !1, 1 === i.code) {
                  e.dataList = i.data;
                  var n = (e.dataList[0].budgetItems || "").replace(/ {2,}/g, " "),
                    o = (e.dataList[0].tipsContent || "").replace(/ {2,}/g, " ");
                  e.budgetItems = '## 预算分配 <span style="color: #4E514F;font-weight: normal; font-size: 0.9em;">(' + e.dataList[0].titlePeople + "人" + e.dataList.length + "日" + (1 === e.dataList[0].priceType ? "合计" : "人均") + ")</span>\n" + n, e.tipsContent = "## 省钱秘籍 \n" + o, e.isCardTop = i.data[0].isTop;
                  var a = [],
                    s = [];
                  e.dataList.forEach((function(t, i) {
                    t.aiPlanCards || (t.aiPlanCards = []), a.push(t.coordinateVOS);
                    var n = e.getDayColor(i);
                    t.aiPlanCards.forEach((function(t, i) {
                      try {
                        t.pictureUrl = JSON.parse(t.pictureUrl), Array.isArray(t.pictureUrl) || (t.pictureUrl = [])
                      } catch (e) {
                        t.pictureUrl = []
                      }
                      Array.isArray(t.pictureUrl) || (t.pictureUrl = []), t.coordinate && (s.push({
                        longitude: Number(t.coordinate.split(",")[0]),
                        latitude: Number(t.coordinate.split(",")[1])
                      }), e.markers.push({
                        id: t.id,
                        zIndex: 0 === i ? 100 : 10,
                        title: t.name,
                        longitude: Number(t.coordinate.split(",")[0]),
                        latitude: Number(t.coordinate.split(",")[1]),
                        width: 25,
                        height: 25,
                        iconPath: "https://eshopfile.zhiyousx.com/169209589667867086.png",
                        label: {
                          content: String(i + 1),
                          bgColor: n,
                          color: "#fff",
                          textAlign: "center",
                          borderRadius: 15,
                          width: 25,
                          height: 25,
                          fontSize: 12,
                          borderWidth: 2,
                          borderColor: "#fff",
                          anchorY: -10
                        },
                        callout: {
                          display: "ALWAYS",
                          anchorY: 10,
                          anchorX: 0,
                          content: t.name,
                          fontSize: 14,
                          color: "#000",
                          fontWeight: "bold",
                          bgColor: "#fff",
                          textAlign: "center",
                          borderRadius: 5,
                          padding: 5
                        }
                      }))
                    }))
                  })), e.markers.length > 0 && (e.map.longitude = e.markers[0].longitude, e.map.latitude = e.markers[0].latitude), e._mapContext = t.createMapContext("map", e), a.forEach((function(t) {
                    t.length <= 1 && (t = [e.map, e.map])
                  })), e.$nextTick((function() {
                    t.createSelectorQuery().in(e).select(".fixed-header").boundingClientRect((function(t) {
                      t && t.height && (e.headerHeight = t.height)
                    })).exec()
                  })), setTimeout((function() {
                    e.isFirstLoad && (e.contentScrollTop(1), e.isFirstLoad = !1), a.forEach((function(t, i) {
                      e.polyline[i] || (e.polyline[i] = {
                        color: "#0000AA",
                        arrowLine: !0,
                        width: 6,
                        points: []
                      }), e.polyline[i].points = t, e.polyline[i].color = e.getDayColor(i)
                    })), s.length > 0 && e.$nextTick((function() {
                      setTimeout((function() {
                        e._mapContext.includePoints({
                          padding: [70, 70, 70, 70],
                          points: s
                        })
                      }), 300)
                    })), e.mapLoading = !1
                  }), 500)
                }
              })).catch((function(t) {
                e.mapLoading = !1
              }))
            },
            handleScroll: function(e) {
              var i = this;
              if (1 === this.currentTab && (this.scrollDetectTimer && (clearTimeout(this.scrollDetectTimer), this.scrollDetectTimer = null), this.scrollDetectTimer = setTimeout((function() {
                  i.updateCurrentDayByScroll()
                }), 120), !this.forbiddenPop && !this.drawerTriggered))
                if (0 !== this.scrollViewHeight) {
                  var n = e.detail.scrollTop > this.lastScrollTop;
                  if (this.lastScrollTop = e.detail.scrollTop, n) {
                    var o = e.detail.scrollHeight,
                      a = this.scrollViewHeight,
                      s = e.detail.scrollTop;
                    o < 2 * a || s + a >= o - 50 && setTimeout((function() {
                      1 !== i.currentTab || i.drawerTriggered || i.forbiddenPop || (i.showRate = !0, i.$refs.feedbackDrawer.open())
                    }), 1e3)
                  }
                } else t.createSelectorQuery().in(this).select(".scroll-content").boundingClientRect((function(t) {
                  t && (i.scrollViewHeight = t.height)
                })).exec()
            },
            scrolltolower: function() {},
            contentScrollTop: function(e) {
              var i = this,
                n = this;
              this.getContentScrollTop().then((function(o) {
                if (!o && !o[0]) return n.fEleTop = 0, void(n.fEleBottom = 0);
                t.createSelectorQuery().in(i).select(".scroll-content").boundingClientRect((function(i) {
                  if (i) {
                    if (e) {
                      var a = .15 * t.getSystemInfoSync().windowHeight;
                      n.fEleTop = o[0].top, n.fEleBottom = o[0].top + i.height + a
                    }
                    n.fEleTopNow = o[0].top, n.fEleBottomNow = o[0].bottom
                  }
                })).exec()
              }))
            },
            getContentScrollTop: function() {
              var e = this;
              return new Promise((function(i) {
                e.$nextTick((function() {
                  var n = t.createSelectorQuery().in(e);
                  n.select("#contentBox").boundingClientRect(), n.selectViewport().scrollOffset(), n.exec((function(t) {
                    i(t)
                  }))
                }))
              }))
            },
            onMarkerTap: function(t) {},
            generateAiGuide: function() {
              var e = this;
              t.showLoading({
                title: "生成中..."
              }), this.$uniApi.dataRequestNoLoading("POST", "ai/app/share/thumbnail", {
                page: "union/pages/aiTravel2/cardPage",
                scene: this.sessionId,
                checkPath: !1,
                sessionId: this.sessionId
              }).then((function(t) {
                1 === t.code && (e.guideImageUrl = t.data, e.shareImageToFriend())
              }))
            },
            shareImageToFriend: function() {
              this.$eventAnalyse.analyse({
                eventTag: "aiTravel_image_share",
                eventName: "旅行搭子卡片分享长图",
                eventParams: JSON.stringify({
                  sessionId: this.sessionId
                })
              }), t.downloadFile({
                url: this.guideImageUrl,
                success: function(e) {
                  200 === e.statusCode && (t.hideLoading(), n.showShareImageMenu({
                    path: e.tempFilePath,
                    success: function(t) {
                      console.log("分享成功", t)
                    },
                    fail: function(t) {
                      console.error("分享失败", t)
                    }
                  }))
                },
                fail: function(e) {
                  t.hideLoading(), console.error("图片下载失败", e)
                }
              })
            },
            changeTab: function(e) {
              var i = this;
              this.currentTab !== e && (this.currentTab = e, this.getTotop(), this.forbiddenPop = !0, this.lastScrollTop = 0, 1 === e && this.$nextTick((function() {
                t.createSelectorQuery().in(i).select(".scroll-content").boundingClientRect((function(t) {
                  t && (i.scrollViewHeight = t.height)
                })).exec()
              })), setTimeout((function() {
                i.forbiddenPop = !1
              }), 1500), 0 === e ? this.drawAllLines() : 1 === e ? (this.dataList && this.dataList.length > 0 && (this.currentMapDayIndex = 0, this.redrawMapForDay(0)), this.$nextTick((function() {
                setTimeout((function() {
                  i.updateCurrentDayByScroll()
                }), 200)
              }))) : 2 === e ? this.$eventAnalyse.analyse({
                eventTag: "aiTravel_budget_click",
                eventName: "旅行搭子卡片点击预算",
                eventParams: JSON.stringify({
                  sessionId: this.sessionId
                })
              }) : 3 === e && this.$eventAnalyse.analyse({
                eventTag: "aiTravel_localSay_click",
                eventName: "旅行搭子卡片点击本地人说",
                eventParams: JSON.stringify({
                  sessionId: this.sessionId
                })
              }))
            },
            touchStart: function(t) {
              this.touchStartX = t.touches[0].clientX, this.touchStartY = t.touches[0].clientY, this.contentScrollTop()
            },
            touchEnd: function(t) {
              var e = t.changedTouches[0].clientX - this.touchStartX,
                i = t.changedTouches[0].clientY - this.touchStartY;
              Math.abs(i) > 50 && Math.abs(e) < Math.abs(i) && (i > 0 && this.fEleTop < this.fEleTopNow + 40 && this.isShowDetail ? this.isShowDetail = !1 : i < 0 && this.fEleBottom > this.fEleBottomNow - 40 && !this.isShowDetail && (this.isShowDetail = !0))
            },
            headerTouchStart: function(t) {
              t.stopPropagation(), t.preventDefault(), this.headerTouchStartX = t.touches[0].clientX, this.headerTouchStartY = t.touches[0].clientY
            },
            headerTouchEnd: function(t) {
              t.stopPropagation(), t.preventDefault();
              var e = t.changedTouches[0].clientX - this.headerTouchStartX,
                i = t.changedTouches[0].clientY - this.headerTouchStartY;
              Math.abs(i) > 30 && Math.abs(e) < Math.abs(i) && (i > 0 ? this.isShowDetail = !1 : i < 0 && (this.isShowDetail = !0))
            },
            getTotop: function() {
              this.insideScrollTop > 1 ? this.insideScrollTop = .1 : this.insideScrollTop += .1
            },
            getCapsuleInfo: function() {
              var e = t.getSystemInfoSync(),
                i = t.getMenuButtonBoundingClientRect();
              this.statusBarHeight = e.statusBarHeight, this.capsuleHeight = i.top + i.height, console.log("状态栏高度:", this.statusBarHeight), console.log("胶囊底部距离:", this.capsuleHeight)
            },
            updateCurrentDayByScroll: function() {
              var e = this;
              t.createSelectorQuery().in(this).select(".scroll-content").boundingClientRect((function(i) {
                i && t.createSelectorQuery().in(e).selectAll(".lineList .day-title").boundingClientRect((function(t) {
                  if (t && t.length) {
                    var n = 0,
                      o = Number.POSITIVE_INFINITY;
                    t.forEach((function(t, e) {
                      if (t) {
                        var a = Math.abs(t.top - i.top);
                        a < o && (o = a, n = e)
                      }
                    })), n !== e.currentMapDayIndex && (e.currentMapDayIndex = n, e.redrawMapForDay(n))
                  }
                })).exec()
              })).exec()
            },
            getDayColor: function(t) {
              return ["#7E9AF4", "#FF6B6B", "#4ECDC4", "#45B7D1"][t] || "#7E9AF4"
            },
            drawAllLines: function() {
              var t = this;
              if (this.dataList && this.dataList.length) {
                this.markers = [], this.polyline = [];
                var e = [],
                  i = [],
                  n = [];
                if (this.dataList.forEach((function(o, a) {
                    var s = t.getDayColor(a),
                      r = Array.isArray(o.coordinateVOS) ? o.coordinateVOS : [];
                    Array.isArray(o.aiPlanCards) && o.aiPlanCards.forEach((function(t, i) {
                      try {
                        if (t && "string" == typeof t.coordinate && t.coordinate.includes(",")) {
                          var o = Number(t.coordinate.split(",")[0]),
                            r = Number(t.coordinate.split(",")[1]);
                          isNaN(o) || isNaN(r) || (e.push({
                            id: t.id || 100 * a + i,
                            zIndex: 0 === i ? 100 : 10,
                            title: t.name || "",
                            longitude: o,
                            latitude: r,
                            width: 25,
                            height: 25,
                            iconPath: "https://eshopfile.zhiyousx.com/169209589667867086.png",
                            label: {
                              content: String(i + 1),
                              bgColor: s,
                              color: "#fff",
                              textAlign: "center",
                              borderRadius: 15,
                              width: 25,
                              height: 25,
                              fontSize: 12,
                              borderWidth: 2,
                              borderColor: "#fff",
                              anchorY: -10
                            },
                            callout: {
                              display: "ALWAYS",
                              anchorY: 10,
                              anchorX: 0,
                              content: t.name || "",
                              fontSize: 14,
                              color: "#000",
                              fontWeight: "bold",
                              bgColor: "#fff",
                              textAlign: "center",
                              borderRadius: 5,
                              padding: 5
                            }
                          }), n.push({
                            longitude: o,
                            latitude: r
                          }))
                        }
                      } catch (t) {}
                    })), r && r.length && i.push({
                      color: s,
                      arrowLine: !0,
                      width: 6,
                      points: r
                    })
                  })), this.polyline = i, this.markers = e, this._mapContext && n.length > 0) try {
                  this.$nextTick((function() {
                    setTimeout((function() {
                      t._mapContext.includePoints({
                        padding: [70, 70, 70, 70],
                        points: n
                      })
                    }), 300)
                  }))
                } catch (t) {}
              }
            },
            redrawMapForDay: function(t) {
              var e = this;
              if (this.dataList && this.dataList.length && !(t < 0 || t >= this.dataList.length)) {
                var i = this.dataList[t];
                if (i) {
                  var n = Array.isArray(i.coordinateVOS) ? i.coordinateVOS : [];
                  this.markers = [], this.polyline = [];
                  var o = [],
                    a = this.getDayColor(t);
                  if (Array.isArray(i.aiPlanCards) && i.aiPlanCards.forEach((function(t, e) {
                      try {
                        if (t && "string" == typeof t.coordinate && t.coordinate.includes(",")) {
                          var i = Number(t.coordinate.split(",")[0]),
                            n = Number(t.coordinate.split(",")[1]);
                          isNaN(i) || isNaN(n) || o.push({
                            id: t.id || e,
                            zIndex: 0 === e ? 100 : 10,
                            title: t.name || "",
                            longitude: i,
                            latitude: n,
                            width: 25,
                            height: 25,
                            iconPath: "https://eshopfile.zhiyousx.com/169209589667867086.png",
                            label: {
                              content: String(e + 1),
                              bgColor: a,
                              color: "#fff",
                              textAlign: "center",
                              borderRadius: 15,
                              width: 25,
                              height: 25,
                              fontSize: 12,
                              borderWidth: 2,
                              borderColor: "#fff",
                              anchorY: -10
                            },
                            callout: {
                              display: "ALWAYS",
                              anchorY: 10,
                              anchorX: 0,
                              content: t.name || "",
                              fontSize: 14,
                              color: "#000",
                              fontWeight: "bold",
                              bgColor: "#fff",
                              textAlign: "center",
                              borderRadius: 5,
                              padding: 5
                            }
                          })
                        }
                      } catch (t) {}
                    })), this.polyline = [], n && n.length && (this.polyline = [{
                      color: a,
                      arrowLine: !0,
                      width: 6,
                      points: n
                    }]), this.markers = o, this._mapContext && n && n.length) try {
                    this.$nextTick((function() {
                      setTimeout((function() {
                        e._mapContext.includePoints({
                          padding: [70, 70, 70, 70],
                          points: n
                        })
                      }), 300)
                    }))
                  } catch (t) {} else if (this._mapContext && o && o.length) try {
                    this.$nextTick((function() {
                      setTimeout((function() {
                        e._mapContext.includePoints({
                          padding: [70, 70, 70, 70],
                          points: o.map((function(t) {
                            return {
                              longitude: t.longitude,
                              latitude: t.latitude
                            }
                          }))
                        })
                      }), 300)
                    }))
                  } catch (t) {}
                }
              }
            },
            showInvitePopup: function() {
              this.getShareMemberList(), this.$refs.invitePopup.open()
            },
            shareToChat: function() {
              this.shareType = 1, this.$eventAnalyse.analyse({
                eventTag: "aiTravel_shareEdit_click",
                eventName: "旅行搭子点击邀请好友共同编辑",
                eventParams: JSON.stringify({
                  sessionId: this.sessionId
                })
              })
            },
            getShareMemberList: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/app/share/list?cardId=" + this.sessionId).then((function(e) {
                1 === e.code && (t.invitedFriends = e.data)
              }))
            },
            getShareConfig: function() {
              return {
                href: "/union/pages/aiTravel2/editPage?sessionId=".concat(this.sessionId, "&type=share"),
                title: "你的好友邀请你共同编辑行程",
                imageUrl: "https://eshopfile.zhiyousx.com/175214881804186478.png"
              }
            },
            getComment: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/comment/queryBySessionId?sessionId=" + this.sessionId).then((function(e) {
                1 === e.code && e.data ? 0 === e.data.length ? t.drawerTriggered = !1 : t.drawerTriggered = !0 : t.drawerTriggered = !1
              })).catch((function(e) {
                t.drawerTriggered = !1
              }))
            },
            changeStar: function(t) {
              this.star = t
            },
            handleChange: function(t) {
              var e = this;
              t.show || (this.showRate = !1, this.star = 0, this.drawerTriggered || (this.drawerTriggered = !0, setTimeout((function() {
                e.drawerTriggered = !1
              }), 1e3)))
            },
            submitComment: function() {
              var t = this;
              this.$eventAnalyse.analyse({
                eventTag: "aiTravel_comment_submit",
                eventName: "提交伴游卡片评论",
                eventParams: {
                  sessionId: this.sessionId,
                  star: this.star,
                  comment: this.comment
                }
              }), 0 !== this.star && this.$uniApi.dataRequestNoLoading("POST", "ai/comment/add", {
                sessionId: this.sessionId,
                commentType: this.star,
                comment: this.comment
              }).then((function(e) {
                1 === e.code && (t.$util.showToast("感谢您的评价!"), t.drawerTriggered = !0, t.$refs.feedbackDrawer.close(), t.forbiddenPop = !0, t.star = 0, t.comment = "", t.showInput = !1)
              }))
            },
            navigateToEditPage: function() {
              try {
                getCurrentPages().length >= 8 ? t.reLaunch({
                  url: "/union/pages/aiTravel2/editPage?sessionId=".concat(this.sessionId)
                }) : t.navigateTo({
                  url: "/union/pages/aiTravel2/editPage?sessionId=".concat(this.sessionId)
                })
              } catch (e) {
                t.reLaunch({
                  url: "/union/pages/aiTravel2/editPage?sessionId=".concat(this.sessionId)
                })
              }
            },
            goHome: function() {
              t.reLaunch({
                url: "/union/pages/aiNew/index"
              })
            }
          }
        };
        e.default = o
      }).call(this, i("df3c").default, i("3223").default)
    },
    2064: function(t, e, i) {
      var n = i("73bc");
      i.n(n).a
    },
    "2f4a": function(t, e, i) {
      i.d(e, "b", (function() {
        return o
      })), i.d(e, "c", (function() {
        return a
      })), i.d(e, "a", (function() {
        return n
      }));
      var n = {
          uniNavbar: function() {
            return i.e("components/uni-navbar/uni-navbar").then(i.bind(null, "101a"))
          },
          uniPopup: function() {
            return Promise.all([i.e("common/vendor"), i.e("components/uni-popup/uni-popup")]).then(i.bind(null, "db3a"))
          },
          uRate: function() {
            return i.e("uview-ui/components/u-rate/u-rate").then(i.bind(null, "ce4c"))
          }
        },
        o = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.dataList ? t.dataList.length : null),
            i = t.dataList ? t.dataList.reduce((function(t, e) {
              return t + e.aiPlanCards.length
            }), 0) : null,
            n = t.dataList[0] && 0 === t.dataList[0].aiShareList.length && !t.isShare,
            o = t.dataList[0] && t.dataList[0].aiShareList && t.dataList[0].aiShareList.length > 0 && !t.isShare,
            a = o ? t.dataList[0].aiShareList.slice(0, 3) : null,
            s = t.dataList && t.dataList[0] && !t.dataList[0].travelTitle ? t.dataList.length : null,
            r = t.__map(t.dataList, (function(e, i) {
              var n = t.__get_orig(e),
                o = e.aiPlanCards && e.aiPlanCards.length > 0;
              return {
                $orig: n,
                g5: o,
                m0: o ? t.getDayLines(e.aiPlanCards) : null
              }
            })),
            c = 1 === t.currentTab ? t.__map(t.dataList, (function(e, i) {
              var n = t.__get_orig(e),
                o = e.aiPlanCards && e.aiPlanCards.length > 0;
              return {
                $orig: n,
                g6: o,
                l2: o ? t.__map(e.aiPlanCards, (function(e, i) {
                  return {
                    $orig: t.__get_orig(e),
                    m1: t.getTitleIcon(e.type)
                  }
                })) : null
              }
            })) : null,
            l = t.invitedFriends.length,
            h = t._f("starFilter")(t.star),
            d = t.star > 0 ? t.comment.length : null;
          t.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              g1: i,
              g2: n,
              g3: o,
              l0: a,
              g4: s,
              l1: r,
              l3: c,
              g7: l,
              f0: h,
              g8: d
            }
          })
        },
        a = []
    },
    "506e": function(t, e, i) {
      (function(t, e) {
        var n = i("47a9");
        i("5366"), n(i("3240"));
        var o = n(i("05bb"));
        t.__webpack_require_UNI_MP_PLUGIN__ = i, e(o.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    },
    "73bc": function(t, e, i) {},
    "90a4": function(t, e, i) {
      i.r(e);
      var n = i("06a0"),
        o = i.n(n);
      for (var a in n)["default"].indexOf(a) < 0 && function(t) {
        i.d(e, t, (function() {
          return n[t]
        }))
      }(a);
      e.default = o.a
    }
  },
  [
    ["506e", "common/runtime", "common/vendor"]
  ]
]);
