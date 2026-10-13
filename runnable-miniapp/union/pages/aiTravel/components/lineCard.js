require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiTravel/components/lineCard"], {
    "2a30": function(t, e, n) {
      n.r(e);
      var i = n("976f"),
        o = n.n(i);
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(a);
      e.default = o.a
    },
    "57f1": function(t, e, n) {
      var i = n("de6c");
      n.n(i).a
    },
    6699: function(t, e, n) {
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return a
      })), n.d(e, "a", (function() {
        return i
      }));
      var i = {
          uniPopup: function() {
            return Promise.all([n.e("common/vendor"), n.e("components/uni-popup/uni-popup")]).then(n.bind(null, "db3a"))
          },
          uRate: function() {
            return n.e("uview-ui/components/u-rate/u-rate").then(n.bind(null, "ce4c"))
          }
        },
        o = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.todayDate.aiPlanCards && t.todayDate.aiPlanCards[0] ? t.__map(t.todayDate.aiPlanCards, (function(e, n) {
              return {
                $orig: t.__get_orig(e),
                g0: t.todayDate.aiPlanCards.length
              }
            })) : null),
            n = t.cardLoading ? null : t.__map(t.todayDate.aiPlanCards, (function(e, n) {
              var i = t.__get_orig(e),
                o = t.todayDate.aiPlanCards.length,
                a = t._f("spotTypeFilter")(e.type),
                r = e.pictureUrl && e.pictureUrl.length > 0;
              return {
                $orig: i,
                g1: o,
                f0: a,
                g2: r,
                l1: r ? t.__map(e.pictureUrl, (function(n, i) {
                  return {
                    $orig: t.__get_orig(n),
                    g3: e.pictureUrl.length
                  }
                })) : null
              }
            })),
            i = t._f("starFilter")(t.star),
            o = t.star > 0 ? t.comment.length : null;
          t.$mp.data = Object.assign({}, {
            $root: {
              l0: e,
              l2: n,
              f1: i,
              g4: o
            }
          })
        },
        a = []
    },
    "8a1e": function(t, e, n) {
      n.r(e);
      var i = n("6699"),
        o = n("2a30");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      n("57f1");
      var r = n("828b"),
        l = Object(r.a)(o.default, i.b, i.c, !1, null, "5803b873", null, !1, i.a, void 0);
      e.default = l.exports
    },
    "976f": function(t, e, n) {
      (function(t) {
        var i = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = i(n("af34")),
          a = (i(n("7671")), i(n("786e")), {
            name: "lineCard",
            components: {
              zeroMarkdownView: function() {
                n.e("union/components1/components/zero-markdown-view/zero-markdown-view-travel").then(function() {
                  return resolve(n("6282f"))
                }.bind(null, n)).catch(n.oe)
              },
              uRate: function() {
                n.e("uview-ui/components/u-rate/u-rate").then(function() {
                  return resolve(n("ce4c"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            props: {
              lineId: {
                type: String,
                default: ""
              }
            },
            filters: {
              spotTypeFilter: function(t) {
                return ["景区", "酒店", "美食", "演出"][t]
              },
              starFilter: function(t) {
                return ["", "完全没用", "一般", "还行", "有用", "十分有用"][t]
              }
            },
            data: function() {
              return {
                showImage: !0,
                today: 1,
                todayDate: {
                  aiPlanCards: [],
                  aiPlanCardLink: {
                    localsAdvice: ""
                  },
                  days: 0
                },
                localContent: "",
                subkey: "U4JBZ-K7XW4-GH2UA-KVPJK-OLCYV-7WB3D",
                mapLoading: !1,
                cardLoading: !1,
                map: {
                  longitude: "108.939621",
                  latitude: "34.343147",
                  scale: 14
                },
                polyline: [{
                  color: "#0000AA",
                  arrowLine: !0,
                  width: 6,
                  points: []
                }],
                markers: [],
                headerHeight: 0,
                touchStartX: 0,
                touchStartY: 0,
                fEleTop: 0,
                fEleTopNow: 0,
                fEleBottom: 0,
                fEleBottomNow: 0,
                isShowDetail: !0,
                headerTouchStartX: 0,
                headerTouchStartY: 0,
                insideScrollTop: .1,
                lastScrollTop: 0,
                isFirstLoad: !0,
                scrollViewHeight: 0,
                feedbackStatus: "",
                feedbackReason: "",
                drawerTriggered: !0,
                star: 0,
                showInput: !1,
                comment: "",
                showThanks: !1,
                forbiddenPop: !1,
                showRate: !0,
                keyboardHeight: 0
              }
            },
            watch: {},
            computed: {},
            onPageScroll: function(t) {},
            mounted: function() {
              var e = this;
              this.getComment(), this.lineId && this.getLineDetail(), this.$nextTick((function() {
                t.createSelectorQuery().in(e).select(".scroll-content").boundingClientRect((function(t) {
                  t && (e.scrollViewHeight = t.height)
                })).exec()
              })), t.onKeyboardHeightChange((function(t) {
                e.keyboardHeight = t.height > 0 ? t.height : 0
              }))
            },
            methods: {
              blockEvent: function(t) {
                t.stopPropagation(), t.preventDefault()
              },
              touchStart: function(t) {
                this.touchStartX = t.touches[0].clientX, this.touchStartY = t.touches[0].clientY, this.contentScrollTop()
              },
              touchEnd: function(t) {
                var e = t.changedTouches[0].clientX - this.touchStartX,
                  n = t.changedTouches[0].clientY - this.touchStartY;
                Math.abs(n) > 50 && Math.abs(e) < Math.abs(n) && (n > 0 && this.fEleTop < this.fEleTopNow + 40 && this.isShowDetail ? this.isShowDetail = !1 : n < 0 && this.fEleBottom > this.fEleBottomNow - 40 && !this.isShowDetail && (this.isShowDetail = !0))
              },
              getTotop: function() {
                var t = this;
                this.insideScrollTop > 1 ? this.insideScrollTop = .1 : this.insideScrollTop += .1, setTimeout((function() {
                  t.forbiddenPop = !1
                }), 100)
              },
              scenicDetails: function(t) {
                this.$navigateTo({
                  url: "/pages/spotDetailNew/spotDetailNew?spotId=" + t.scenicId
                })
              },
              contentScrollTop: function(e) {
                var n = this,
                  i = this;
                this.getContentScrollTop().then((function(o) {
                  if (!o && !o[0]) return i.fEleTop = 0, void(i.fEleBottom = 0);
                  t.createSelectorQuery().in(n).select(".scroll-content").boundingClientRect((function(n) {
                    if (n) {
                      if (e) {
                        var a = .15 * t.getSystemInfoSync().windowHeight;
                        i.fEleTop = o[0].top, i.fEleBottom = o[0].top + n.height + a
                      }
                      i.fEleTopNow = o[0].top, i.fEleBottomNow = o[0].bottom
                    }
                  })).exec()
                }))
              },
              getContentScrollTop: function() {
                var e = this;
                return new Promise((function(n) {
                  e.$nextTick((function() {
                    var i = t.createSelectorQuery().in(e);
                    i.select("#contentBox").boundingClientRect(), i.selectViewport().scrollOffset(), i.exec((function(t) {
                      n(t)
                    }))
                  }))
                }))
              },
              changeStar: function(t) {
                this.star = t
              },
              headerTouchStart: function(t) {
                t.stopPropagation(), t.preventDefault(), this.headerTouchStartX = t.touches[0].clientX, this.headerTouchStartY = t.touches[0].clientY
              },
              headerTouchEnd: function(t) {
                t.stopPropagation(), t.preventDefault();
                var e = t.changedTouches[0].clientX - this.headerTouchStartX,
                  n = t.changedTouches[0].clientY - this.headerTouchStartY;
                Math.abs(n) > 30 && Math.abs(e) < Math.abs(n) && (n > 0 ? this.isShowDetail = !1 : n < 0 && (this.isShowDetail = !0))
              },
              getComment: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "ai/comment/queryBySessionId?sessionId=" + this.lineId).then((function(e) {
                  1 === e.code && e.data && 0 === e.data.length && (t.drawerTriggered = !1)
                }))
              },
              changeDay: function(t) {
                this.$eventAnalyse.analyse({
                  eventTag: "aiTravel_cardDay_click",
                  eventName: "旅行搭子卡片点击切换天数",
                  eventParams: JSON.stringify({
                    sessionId: this.lineId,
                    day: t
                  })
                }), this.today != t && (this.forbiddenPop = !0, this.getTotop(), this.today = t, this.getLineDetail())
              },
              clickMap: function() {},
              getLineDetail: function() {
                var e = this;
                this.mapLoading = !0, this.cardLoading = !0, this.markers = [], this.polyline[0].points = [], this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/queryById?id=" + this.lineId + "&day=" + this.today).then((function(n) {
                  if (e.cardLoading = !1, 1 === n.code) {
                    e.todayDate = n.data, e.todayDate.aiPlanCards || (e.todayDate.aiPlanCards = []), e.localContent = e.todayDate.aiPlanCardLink.localsAdvice;
                    var i = n.data.coordinateVOS,
                      o = [];
                    e.todayDate.aiPlanCards.forEach((function(t, n) {
                      try {
                        t.pictureUrl = JSON.parse(t.pictureUrl), Array.isArray(t.pictureUrl) || (t.pictureUrl = [])
                      } catch (e) {
                        t.pictureUrl = []
                      }
                      Array.isArray(t.pictureUrl) || (t.pictureUrl = []), t.coordinate && (o.push({
                        longitude: Number(t.coordinate.split(",")[0]),
                        latitude: Number(t.coordinate.split(",")[1])
                      }), e.markers.push({
                        id: +t.id,
                        zIndex: 0 === n ? 100 : 10,
                        title: t.name,
                        longitude: Number(t.coordinate.split(",")[0]),
                        latitude: Number(t.coordinate.split(",")[1]),
                        width: 25,
                        height: 25,
                        iconPath: "https://eshopfile.zhiyousx.com/169209589667867086.png",
                        label: {
                          content: String(n + 1),
                          bgColor: "#3478F6",
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
                          content: t.name + " ➡️",
                          fontSize: 14,
                          color: "#000",
                          fontWeight: "bold",
                          bgColor: "#fff",
                          textAlign: "center",
                          borderRadius: 5,
                          padding: 5
                        }
                      }))
                    })), e.markers.length > 0 && (e.map.longitude = e.markers[0].longitude, e.map.latitude = e.markers[0].latitude), e._mapContext = t.createMapContext("map", e), i.length <= 1 && (i = [e.map, e.map]), e.$nextTick((function() {
                      t.createSelectorQuery().in(e).select(".fixed-header").boundingClientRect((function(t) {
                        t && t.height && (e.headerHeight = t.height)
                      })).exec()
                    })), setTimeout((function() {
                      e.isFirstLoad && (e.contentScrollTop(1), e.isFirstLoad = !1), e.polyline[0].points = i, e.polyline[0].color = "#7E9AF4", o.length > 0 && e._mapContext.includePoints({
                        padding: [70, 70, 70, 70],
                        points: o
                      }), e.mapLoading = !1
                    }), 500)
                  }
                })).catch((function(t) {
                  e.cardLoading = !1, e.mapLoading = !1
                }))
              },
              getLine: function() {
                var e = this;
                this.mapLoading = !0, this.cardLoading = !0, this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/detail/map/" + this.lineId).then((function(n) {
                  if (e.cardLoading = !1, 1 === n.code) {
                    var i = [],
                      a = [];
                    n.data.forEach((function(t) {
                      t.lineJourneyDetailList.forEach((function(n) {
                        var r;
                        a.push({
                          longitude: n.longitude,
                          latitude: n.latitude
                        }), e.markers.push({
                          id: n.idx,
                          idy: n.idy,
                          title: n.destinationName,
                          longitude: n.longitude,
                          latitude: n.latitude,
                          width: 20,
                          height: 5,
                          day: t.day,
                          iconPath: "https://eshopfile.zhiyousx.com/169209589667867086.png",
                          callout: {
                            display: "ALWAYS",
                            anchorY: 0,
                            anchorX: 0,
                            content: n.destinationName,
                            color: "#87CEFA",
                            bgColor: "#fff",
                            textAlign: "center",
                            borderRadius: 5,
                            padding: 5
                          }
                        }), null != n.coordinatesList && (r = i).push.apply(r, (0, o.default)(n.coordinatesList))
                      }))
                    })), e.markers.length > 0 && (e.map.longitude = e.markers[0].longitude, e.map.latitude = e.markers[0].latitude), e._mapContext = t.createMapContext("map", e), i.length <= 1 && (i = [e.map, e.map]), setTimeout((function() {
                      e.polyline[0].points = i, e.polyline[0].color = e.pageColour, a.length > 0 && e._mapContext.includePoints({
                        padding: ["70", "70", "70", "70"],
                        points: a
                      }), e.mapLoading = !1
                    }), 500)
                  }
                })).catch((function(t) {
                  e.cardLoading = !1, e.mapLoading = !1
                }))
              },
              focusOnSpot: function(t) {
                var e = this,
                  n = Number(t.coordinate.split(",")[0]),
                  i = Number(t.coordinate.split(",")[1]);
                this.map.longitude = n, this.map.latitude = i, this.map.scale = 16, this.$nextTick((function() {
                  e._mapContext && (e._mapContext.includePoints({
                    padding: [50, 50, 50, 50],
                    points: [{
                      longitude: n,
                      latitude: i
                    }]
                  }), setTimeout((function() {
                    e._mapContext.moveToLocation({
                      longitude: n,
                      latitude: i
                    })
                  }), 100))
                }))
              },
              previewImage: function(e, n) {
                t.previewImage({
                  urls: n,
                  current: e,
                  loop: !0
                })
              },
              onMarkerTap: function(e) {
                var n = e.detail.markerId,
                  i = this.markers.find((function(t) {
                    return t.id === n
                  }));
                i && t.openLocation({
                  latitude: i.latitude,
                  longitude: i.longitude,
                  name: i.title,
                  success: function() {
                    console.log("success")
                  }
                })
              },
              handleScroll: function(t) {
                var e = t.detail.scrollTop - 20 > this.lastScrollTop;
                this.lastScrollTop = t.detail.scrollTop, e && !this.drawerTriggered && !this.forbiddenPop && t.detail.scrollTop + this.scrollViewHeight >= t.detail.scrollHeight - 50 && this.today === this.todayDate.days && (this.showRate = !0, this.$refs.feedbackDrawer.open())
              },
              scrolltolower: function() {},
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
                    sessionId: this.lineId,
                    star: this.star,
                    comment: this.comment
                  }
                }), 0 !== this.star && this.$uniApi.dataRequestNoLoading("POST", "ai/comment/add", {
                  sessionId: this.lineId,
                  commentType: this.star,
                  comment: this.comment
                }).then((function(e) {
                  1 === e.code && (t.$util.showToast("感谢您的评价!"), t.drawerTriggered = !0, t.$refs.feedbackDrawer.close(), t.star = 0, t.comment = "", t.showInput = !1)
                }))
              }
            }
          });
        e.default = a
      }).call(this, n("df3c").default)
    },
    de6c: function(t, e, n) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/pages/aiTravel/components/lineCard-create-component", {
    "union/pages/aiTravel/components/lineCard-create-component": function(t, e, n) {
      n("df3c").createComponent(n("8a1e"))
    }
  },
  [
    ["union/pages/aiTravel/components/lineCard-create-component"]
  ]
]);
