require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/chat-item/chat-item-travel"], {
    "048d": function(t, e, n) {
      n.r(e);
      var i = n("0529"),
        a = n("0c83");
      for (var o in a)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(o);
      n("de17");
      var s = n("828b"),
        l = Object(s.a)(a.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      e.default = l.exports
    },
    "0529": function(t, e, n) {
      n.d(e, "b", (function() {
        return i
      })), n.d(e, "c", (function() {
        return a
      })), n.d(e, "a", (function() {}));
      var i = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.item.list && t.item.list.length && 0 == t.item.type),
            n = e ? t.__map(t.item.list, (function(e, n) {
              var i = t.__get_orig(e),
                a = t.item.list.length,
                o = e.labels && e.labels.length > 0;
              return {
                $orig: i,
                g1: a,
                g2: o,
                l0: o ? t.getTagData(e.labels) : null
              }
            })) : null,
            i = t.item.strategy ? t.item.strategyContent.data.length : null;
          t.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              l1: n,
              g3: i
            }
          })
        },
        a = []
    },
    "0c83": function(t, e, n) {
      n.r(e);
      var i = n("814d"),
        a = n.n(i);
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(o);
      e.default = a.a
    },
    "5cc0": function(t, e, n) {},
    "814d": function(t, e, n) {
      (function(t) {
        var i = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a, o = i(n("7ca3")),
          s = {
            name: "chat-item",
            components: {
              zeroMarkdownView: function() {
                n.e("union/components1/components/zero-markdown-view/zero-markdown-view-travel").then(function() {
                  return resolve(n("6282f"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            props: {
              item: {
                type: Object,
                default: function() {
                  return {
                    time: "",
                    icon: "",
                    name: "",
                    content: "",
                    isMe: !1
                  }
                }
              },
              pushingProgress: {
                type: Boolean,
                default: function() {
                  return !1
                }
              },
              newVal: {
                type: String,
                default: function() {
                  return ""
                }
              },
              sessionId: {
                type: String,
                default: function() {
                  return ""
                }
              }
            },
            data: function() {
              return {
                imgStarted: !1,
                imgCompleted: !1,
                imgContent: "",
                imgArray: [],
                countInfos: "",
                index: 0,
                timer: null,
                itemContentCopy: "",
                itemContentIndex: 0,
                displayText: "",
                showMore: !1,
                tabs: ["3天", "6个地点"],
                tags: ["兵马俑", "兵马俑", "兵马俑", "兵马俑", "兵马俑", "兵马俑"],
                mapData: null,
                mapLoading: !1,
                subkey: "U4JBZ-K7XW4-GH2UA-KVPJK-OLCYV-7WB3D",
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
                tagsExpanded: !1,
                showExpandBtn: !1,
                tagsHeight: 0
              }
            },
            watch: {
              "item.strategy": {
                handler: function(e) {
                  var n = this;
                  e && this.sessionId && (this.$nextTick((function() {
                    t.createSelectorQuery().in(n).select(".strategy-content-tags").boundingClientRect((function(e) {
                      if (e) {
                        n.tagsHeight = e.height;
                        var i = t.getSystemInfoSync().windowWidth / 750;
                        n.tagsScrollHeightPx = 54 * i, n.tagsHeight > n.tagsScrollHeightPx ? n.showExpandBtn = !0 : n.showExpandBtn = !1
                      }
                    })).exec()
                  })), this.getLineDetail())
                },
                immediate: !0
              }
            },
            mounted: function() {
              this.displayText = "", this.index = 0
            },
            methods: (a = {
              itemContent: function() {
                var t = this;
                if (!this.item.content) return this.displayText = "", void(this.index = 0);
                var e = setInterval((function() {
                  t.index < t.item.content.length ? (t.displayText += t.item.content.charAt(t.index), t.index++) : clearInterval(e)
                }), 50)
              },
              share: function() {
                var t = {
                  title: "".concat(this.item.strategyContent.city).concat(this.item.strategyContent.day, "日游"),
                  imageUrl: this.item.strategyContent.picture || "https://eshopfile.zhiyousx.com/175006196412292999.png",
                  path: "/union/pages/aiTravel/historyList"
                };
                this.$emit("clickShare", t)
              },
              scenicDetails: function(t) {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_escortScenicSpots_click",
                  eventName: "伴游去景区详情",
                  eventParams: {
                    url: "/pages/spotDetailNew/spotDetailNew?spotId=" + t.id
                  }
                }), this.$navigateTo({
                  url: "/pages/spotDetailNew/spotDetailNew?spotId=" + t.id
                })
              },
              getTagData: function(t) {
                return t ? t.split(",") : []
              },
              cardDetails: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "aiTravel_card_click",
                  eventName: "旅行搭子点击生成卡片",
                  eventParams: JSON.stringify({
                    sessionId: this.sessionId
                  })
                }), t.navigateTo({
                  url: "/union/pages/aiTravel/cardPage?sessionId=" + this.sessionId
                })
              },
              resetTravel: function() {
                console.log(this.item.redirectContent, "this.item.redirectContent"), this.$eventAnalyse.analyse({
                  eventTag: "aiTravel_guide_click",
                  eventName: "旅行搭子点击重新规划引导按钮",
                  eventParams: {
                    pagePath: "union/pages/aiTravel/index",
                    content: this.item.redirectContent
                  }
                }), this.$emit("resetTravel", this.item.redirectContent)
              },
              changePlan: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "aiTravel_changeGuide_click",
                  eventName: "旅行搭子点击重新规划引导按钮",
                  eventParams: {
                    pagePath: "union/pages/aiTravel/index",
                    content: this.item.changeAnswer
                  }
                }), this.$emit("resetTravel", this.item.changeAnswer)
              },
              routeDetails: function(e) {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_escortGoLine_click",
                  eventName: "伴游去线路详情",
                  eventParams: {
                    url: "/subPage/pages/lineInfo/lineInfo?lineId=" + e
                  }
                }), t.navigateTo({
                  url: "/subPage/pages/lineInfo/lineInfo?lineId=" + e
                })
              },
              goLine: function(e) {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_exclusiveDetails_click",
                  eventName: "专属详情页",
                  eventParams: {
                    url: "/union/pages/ai/strategyGuide?lineId=" + e
                  }
                }), t.navigateTo({
                  url: "/union/pages/ai/strategyGuide?lineId=" + e
                })
              },
              jumpToMap: function() {
                this.item.longitude && this.item.latitude ? t.openLocation({
                  latitude: Number(this.item.latitude),
                  longitude: Number(this.item.longitude),
                  name: this.item.title,
                  success: function() {}
                }) : this.$util.showToast("获取地址失败！")
              },
              exclusiveStrategy: function(t) {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_generateLine_click",
                  eventName: "生成我的专属攻略",
                  eventParams: {
                    msg: "生成我的专属攻略"
                  }
                }), this.pushingProgress ? this.$emit("exclusive", t) : this.$util.showToast("请稍候")
              },
              expandTags: function() {
                this.tagsExpanded ? t.navigateTo({
                  url: "/union/pages/aiTravel/cardPage?sessionId=" + this.sessionId
                }) : this.tagsExpanded = !0
              },
              foldTags: function() {
                this.tagsExpanded = !this.tagsExpanded
              }
            }, (0, o.default)(a, "getTagData", (function(t) {
              return t ? t.split(",") : []
            })), (0, o.default)(a, "showPic", (function(e) {
              var n = [e.data.url];
              t.previewImage({
                urls: n
              })
            })), (0, o.default)(a, "downloadFile", (function(t) {})), (0, o.default)(a, "getLineDetail", (function() {
              var e = this;
              this.mapLoading = !0, this.markers = [], this.polyline[0].points = [], this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/queryById?id=" + this.sessionId + "&day=1").then((function(n) {
                if (1 === n.code) {
                  e.mapData = n.data, e.mapData.aiPlanCards || (e.mapData.aiPlanCards = []);
                  var i = n.data.coordinateVOS,
                    a = [];
                  e.mapData.aiPlanCards.forEach((function(t, n) {
                    t.coordinate && (a.push({
                      longitude: Number(t.coordinate.split(",")[0]),
                      latitude: Number(t.coordinate.split(",")[1])
                    }), e.markers.push({
                      id: +t.id,
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
                  })), e.markers.length > 0 && (e.map.longitude = e.markers[0].longitude, e.map.latitude = e.markers[0].latitude), e._mapContext = t.createMapContext("map", e), i.length <= 1 && (i = [e.map, e.map]), setTimeout((function() {
                    e.polyline[0].points = i, e.polyline[0].color = "#7E9AF4", a.length > 0 && e._mapContext.includePoints({
                      padding: [70, 70, 70, 70],
                      points: a
                    }), e.$nextTick((function() {
                      e.mapLoading = !1
                    }))
                  }), 500)
                } else e.mapLoading = !1
              })).catch((function(t) {
                e.mapLoading = !1
              }))
            })), a)
          };
        e.default = s
      }).call(this, n("df3c").default)
    },
    de17: function(t, e, n) {
      var i = n("5cc0");
      n.n(i).a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-item/chat-item-travel-create-component", {
    "union/components1/chat-item/chat-item-travel-create-component": function(t, e, n) {
      n("df3c").createComponent(n("048d"))
    }
  },
  [
    ["union/components1/chat-item/chat-item-travel-create-component"]
  ]
]);
