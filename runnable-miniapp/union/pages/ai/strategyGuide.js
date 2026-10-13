require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/ai/strategyGuide"], {
    1946: function(t, e, n) {
      n.r(e);
      var i = n("ae36"),
        o = n.n(i);
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(a);
      e.default = o.a
    },
    "22bf": function(t, e, n) {
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return a
      })), n.d(e, "a", (function() {
        return i
      }));
      var i = {
          uniNavbar: function() {
            return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
          },
          uParse: function() {
            return Promise.all([n.e("common/vendor"), n.e("uview-ui/components/u-parse/u-parse")]).then(n.bind(null, "7217"))
          }
        },
        o = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.dataInfos.lineGameCapitaList && t.dataInfos.lineGameCapitaList.length),
            n = e ? t.__map(t.dataInfos.lineGameCapitaList, (function(e, n) {
              return {
                $orig: t.__get_orig(e),
                g1: t.dataInfos.lineGameCapitaList.length
              }
            })) : null,
            i = t.__map(t.dataInfos.lineJourneyList, (function(e, n) {
              return {
                $orig: t.__get_orig(e),
                l1: e.lineJourneyDetailList ? t.__map(e.lineJourneyDetailList, (function(n, i) {
                  return {
                    $orig: t.__get_orig(n),
                    g2: e.lineJourneyDetailList.length
                  }
                })) : null
              }
            })),
            o = t.__map(t.dataInfos.lineJourneyList, (function(e, n) {
              return {
                $orig: t.__get_orig(e),
                m0: t.dayName(e.day)
              }
            })),
            a = t.__map(t.dataInfos.lineJourneyList, (function(e, n) {
              return {
                $orig: t.__get_orig(e),
                l6: t.__map(e.lineJourneyDetailList, (function(e, n) {
                  return {
                    $orig: t.__get_orig(e),
                    l5: e.journeyDestinationType < 6 ? t.__map(e.scenicRelations, (function(e, n) {
                      var i = t.__get_orig(e),
                        o = null != e.contentModuleName ? t.__map(e.contentList, (function(n, i) {
                          return {
                            $orig: t.__get_orig(n),
                            g3: e.contentList.length
                          }
                        })) : null,
                        a = null != e.contentModuleName ? e.contentList.length : null;
                      return {
                        $orig: i,
                        l4: o,
                        g4: a,
                        m1: null != e.contentModuleName && a > 6 ? t.spotRelationNum(e.contentList) : null
                      }
                    })) : null
                  }
                }))
              }
            }));
          t.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              l0: n,
              l2: i,
              l3: o,
              l7: a
            }
          })
        },
        a = []
    },
    a48e: function(t, e, n) {
      (function(t, e) {
        var i = n("47a9");
        n("5366"), i(n("3240"));
        var o = i(n("c791"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    adab: function(t, e, n) {
      var i = n("e441");
      n.n(i).a
    },
    ae36: function(t, e, n) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = {
          data: function() {
            return {
              dataInfos: {},
              lineId: "",
              isPhotoAll: !1,
              isbanner: !1,
              bannerList: [],
              paddingTop: 495,
              scrollIntoView: "",
              content: "",
              startY: 0,
              lastY: 1660,
              moveType: 1,
              istouchEnd: !0,
              loading: !0,
              issuofang: !0,
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
              isGroup: !1,
              shareImage: "https://eshopfile.zhiyousx.com/173461084335016687.png",
              detailRowTopList: [],
              scrollToLeftList: []
            }
          },
          onLoad: function(t) {
            this.lineId = t.lineId, this.getLineDetail()
          },
          onShareAppMessage: function(t) {
            var e = "/union/pages/ai/strategyGuide?lineId=" + this.dataInfos.lineId;
            return {
              title: this.shareDesc,
              imageUrl: this.shareImage,
              path: this.$util.setShareUrl(e)
            }
          },
          onShareTimeline: function(t) {
            var e = "lineId=" + this.dataInfos.lineId;
            return {
              title: this.shareDesc,
              imageUrl: this.shareImage,
              query: this.$util.setShareTimeline(e)
            }
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, this.isPhotoAll || this.scrollCount()
          },
          methods: {
            getLineDetail: function() {
              var e = this;
              t.showLoading({
                title: "加载中",
                mask: !0
              }), this.$uniApi.dataRequestYesLoading("GET", "ai/aiEscort/exclusive/line?lineId=" + this.lineId).then((function(n) {
                if (1 === n.code) {
                  var i = [],
                    o = [];
                  e.dataInfos = n.data || {}, e.dataInfos.lineJourneyList = e.dataInfos.lineJourneyList ? e.dataInfos.lineJourneyList : [];
                  var a = [];
                  e.shareDesc = n.data.shareDesc || "", e.dataInfos.lineJourneyList.forEach((function(t) {
                    t.lineJourneyDetailList.forEach((function(t, e) {
                      t.longitude && t.latitude && (o.push({
                        longitude: t.longitude,
                        latitude: t.latitude
                      }), a.push({
                        title: t.destinationName,
                        longitude: t.longitude,
                        latitude: t.latitude,
                        callout: {
                          display: "ALWAYS",
                          anchorY: 0,
                          anchorX: 0,
                          content: t.destinationName,
                          color: "#333",
                          bgColor: "#fff",
                          textAlign: "center",
                          borderRadius: 5,
                          padding: 5
                        }
                      }), i.push({
                        latitude: t.latitude,
                        longitude: t.longitude
                      }))
                    }))
                  })), console.log(i, "listlistlistlist"), e.map.longitude = a[0].longitude, e.map.latitude = a[0].latitude, e._mapContext = t.createMapContext("map", e), setTimeout((function() {
                    e.polyline[0].points = i, e.polyline[0].color = "#F1A16F", e._mapContext.includePoints({
                      padding: ["70", "70", "70", "70"],
                      points: o
                    }), e.markers = JSON.parse(JSON.stringify(a)), e.mapLoading = !1, t.hideLoading()
                  }), 500)
                } else t.hideLoading()
              })).catch((function(e) {
                t.hideLoading()
              }))
            },
            dayName: function(t) {
              return "第" + ["", "一", "二", "三", "四", "五", "六", "七"][t] + "天"
            },
            toDay: function(t) {
              this.activeDays = t, this.scrollIntoView = "detailRow" + t
            },
            getCustomer: function() {
              this.customerShow = !0
            },
            scrollCount: function() {
              if (!this.isPhotoAll)
                if (this.scrollTop < -100 && (this.lastY = 1660, this.moveType = 2, this.isPhotoAll = !0), this.scrollTop >= this.xcmxTop - 25) {
                  this.isFlxeTitle = !0;
                  var t = this.activeDays;
                  t + 1 < this.detailRowList.length && this.scrollTop >= this.detailRowList[t] && (this.activeDays = t + 1), t - 1 >= 0 && this.scrollTop < this.detailRowList[t - 1] && (this.activeDays = t - 1)
                } else this.isFlxeTitle = !1
            },
            goTrip: function(t, e) {},
            spotRelationNum: function(t) {
              return t.length - 5 + "+"
            },
            goSpot: function(t, e) {
              t && (e <= 4 ? this.$navigateTo({
                url: "/pages/spotDetail/spotDetail?spotId=" + t
              }) : this.$navigateTo({
                url: "/pages/spotThirdDetail/spotThirdDetail?spotId=" + t
              }))
            },
            pageScrollTo: function() {
              this.content = "", setTimeout((function() {
                t.pageScrollTo({
                  scrollTop: 999999,
                  duration: 0
                })
              }), 200)
            },
            jumpSpotContentList: function(e, n) {
              n.contentList.forEach((function(t) {
                t.title = t.contentModuleName, t.id = t.contentId
              })), t.setStorageSync("spotContentList", {
                name: e,
                contentList: n.contentList
              }), this.$navigateTo({
                url: "/pages/spotContentList/spotContentList?scenicName=".concat(e)
              })
            }
          }
        };
        e.default = n
      }).call(this, n("df3c").default)
    },
    c791: function(t, e, n) {
      n.r(e);
      var i = n("22bf"),
        o = n("1946");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      n("adab");
      var l = n("828b"),
        s = Object(l.a)(o.default, i.b, i.c, !1, null, "a3819dfe", null, !1, i.a, void 0);
      e.default = s.exports
    },
    e441: function(t, e, n) {}
  },
  [
    ["a48e", "common/runtime", "common/vendor"]
  ]
]);
