require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/ai/tripInfoLine"], {
    2865: function(t, i, e) {
      e.d(i, "b", (function() {
        return a
      })), e.d(i, "c", (function() {
        return n
      })), e.d(i, "a", (function() {
        return o
      }));
      var o = {
          uParse: function() {
            return Promise.all([e.e("common/vendor"), e.e("uview-ui/components/u-parse/u-parse")]).then(e.bind(null, "7217"))
          }
        },
        a = function() {
          var t = this,
            i = (t.$createElement, t._self._c, t.detailObj.length),
            e = t.detailObj.length,
            o = t.__map(t.detailObj, (function(i, e) {
              return {
                $orig: t.__get_orig(i),
                m0: t.dayName(i.day)
              }
            })),
            a = t.__map(t.spotList, (function(i, e) {
              var o = t.__get_orig(i),
                a = null != i.trafficType && 8 != i.journeyDestinationType ? t.spotContent(i.lineDestinationVO) : null;
              return {
                $orig: o,
                m1: a,
                m2: null != i.trafficType && 8 != i.journeyDestinationType && a ? t.spotContent(i.lineDestinationVO) : null
              }
            })),
            n = t.detailObj.length;
          t.$mp.data = Object.assign({}, {
            $root: {
              g0: i,
              g1: e,
              l0: o,
              l1: a,
              g2: n
            }
          })
        },
        n = []
    },
    "2fda": function(t, i, e) {
      (function(t) {
        var o = e("47a9");
        Object.defineProperty(i, "__esModule", {
          value: !0
        }), i.default = void 0;
        var a = o(e("af34")),
          n = {
            data: function() {
              return {
                activeDays: 0,
                trip: {
                  distance: "",
                  duration: "",
                  type: ""
                },
                isTrip: !1,
                map: {
                  longitude: "108.939621",
                  latitude: "34.343147"
                },
                polyline: [],
                markers: [],
                controls: [],
                detailObj: [],
                allLocations: [],
                lineId: "",
                spotList: [],
                leftOffset: 0,
                activeSpot: 0,
                buttonColour: "",
                pageColour: "",
                parseStyle: {
                  p: "word-break: break-all;line-height:30rpx;color:rgba(0, 0, 0, 0.6);font-size:24rpx",
                  img: "border-radius: 20rpx;margin-top: 10rpx;",
                  span: "word-break: break-all;line-height:30rpx;color:rgba(0, 0, 0, 0.6);font-size:24rpx"
                },
                startX: 0,
                scrollLeft: -1,
                flag: !0,
                subkey: "U4JBZ-K7XW4-GH2UA-KVPJK-OLCYV-7WB3D",
                idy: 0,
                isInit: !0,
                shareInfo: {},
                scrollToLeft: 0
              }
            },
            onReady: function() {},
            onShareAppMessage: function(t) {
              var i = "/subPack/pages/tripInfo/tripInfo?id=".concat(this.lineId, "&buttonColour=").concat(this.buttonColour, "&pageColour=").concat(this.pageColour);
              return {
                title: this.shareInfo.shareDesc ? this.shareInfo.shareDesc : "线路详情",
                imageUrl: this.shareInfo.shareImage ? this.shareInfo.shareImage : this.shareInfo.image,
                path: this.$util.setShareUrl(i)
              }
            },
            onLoad: function(t) {
              this.lineId = t.id, this.buttonColour = "#239D454", this.pageColour = "#2353D9A1", this.getLocationList(this.lineId, 0, 0), this.getShareInfo(this.lineId)
            },
            onShareTimeline: function(t) {
              var i = "id=".concat(this.lineId, "&buttonColour=").concat(this.buttonColour, "&pageColour=").concat(this.pageColour);
              return {
                title: this.shareInfo.shareDesc ? this.shareInfo.shareDesc : "线路详情",
                imageUrl: this.shareInfo.shareImage ? this.shareInfo.shareImage : this.shareInfo.image,
                query: this.$util.setShareTimeline(i)
              }
            },
            onUnload: function() {},
            onShow: function() {},
            methods: {
              getShareInfo: function(t) {
                var i = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/detail/share/" + t).then((function(t) {
                  1 === t.code && (i.shareInfo = t.data)
                })).catch((function(t) {
                  i.$util.showToast("网络走丢了，请刷新重试")
                }))
              },
              getLocationList: function(i, e, o) {
                var a = this;
                t.showLoading({
                  title: "加载中",
                  mask: !0
                }), this.$uniApi.dataRequestNoLoading("GET", "ai/aiEscort/exclusive/line?lineId=" + this.lineId).then((function(i) {
                  t.hideLoading(), 1 === i.code && (a.detailObj = i.data, a.initData(e, o))
                })).catch((function(i) {
                  t.hideLoading(), a.$util.showToast("网络走丢了，请刷新重试")
                }))
              },
              goSpot: function(i, e) {
                e <= 4 ? this.$navigateTo({
                  url: "/pages/spotDetail/spotDetail?spotId=" + i
                }) : 8 == e ? (t.setStorageSync("activeDays", this.activeDays + 1), t.navigateBack()) : this.$navigateTo({
                  url: "/pages/spotThirdDetail/spotThirdDetail?spotId=" + i
                })
              },
              dayName: function(t) {
                return "第" + ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三", "二十四"][t] + "天"
              },
              nextDay: function() {
                this.activeDays++, this.scrollToLeft = 120 * this.activeDays + "rpx", this.isInit = !0, this.initData(this.activeDays)
              },
              touchstart: function(t) {
                t.stopPropagation(), this.startX = t.changedTouches[0].pageX
              },
              scroll: function(t) {
                t.stopPropagation();
                var i = t.changedTouches[0].pageX - this.startX;
                if (this.flag) {
                  if (this.flag = !1, i < 0) {
                    var e = this.markers.length;
                    if (this.scrollLeft + 1 == e) return void(this.flag = !0);
                    this.scrollLeft++
                  } else {
                    if (0 == this.scrollLeft) return void(this.flag = !0);
                    this.scrollLeft--
                  }
                  this.changeSpot(this.scrollLeft)
                }
              },
              addMarker: function(t) {
                var i = this.markers[t];
                this.markers.push({
                  id: i.id + 1e4,
                  title: i.title,
                  longitude: i.longitude,
                  latitude: i.latitude,
                  width: 16,
                  height: 16,
                  day: i.day,
                  distance: i.distance,
                  duration: i.duration,
                  trafficType: i.trafficType,
                  mainPic: i.mainPic,
                  iconPath: "https://eshopfile.zhiyousx.com/169209589667867086.png",
                  customCallout: {
                    display: "ALWAYS",
                    anchorY: 10,
                    anchorX: -3
                  },
                  label: {
                    content: i.label.content,
                    bgColor: "#FF5411",
                    color: "#fff",
                    textAlign: "center",
                    borderRadius: 15,
                    width: 25,
                    height: 25,
                    fontSize: 12,
                    borderWidth: 2,
                    borderColor: "#fff",
                    anchorY: -10
                  }
                })
              },
              changeSpot: function(t) {
                var i = this;
                this.markers.forEach((function(t) {
                  t.label.bgColor = i.buttonColour, t.customCallout.display = "ALWAYS", t.zIndex = 10
                })), this.markers[t].label.bgColor = "#FF5411", this.markers[t].customCallout.display = "ALWAYS", this.markers[t].zIndex = 100, this.polyline.forEach((function(t) {
                  t.color = "#999"
                })), this.isInit || 0 === t || this.polyline.pop(), console.log(this.activeSpot, t, "TTTTTT"), 0 == t ? (this.isTrip = !1, this._mapContext.includePoints({
                  padding: ["120", "40", "180", "40"],
                  points: this.allLocations
                })) : (this.polyline[t - 1].color = this.pageColour, this._mapContext.includePoints({
                  padding: ["140", "40", "180", "40"],
                  points: this.polyline[t - 1].points
                }), this.polyline.push(this.polyline[t - 1])), 0 == t ? this.isTrip = !1 : (this.isInit = !1, this.markers[t].distance && (this.isTrip = !0, this.trip.distance = parseFloat((this.markers[t].distance / 1e3).toFixed(2)) + "km", this.trip.duration = this.setDuration(this.markers[t].duration), this.trip.type = ["不选", "乘车", "步行", "骑行", "公交"][this.markers[t].trafficType], this.trip.icon = ["", "https://eshopfile.zhiyousx.com/169216988024666771.png", "https://eshopfile.zhiyousx.com/169216993955957473.png", "https://eshopfile.zhiyousx.com/169216991912941576.png", "https://eshopfile.zhiyousx.com/169216988024666771.png"][this.markers[t].trafficType])), this.activeSpot = t, setTimeout((function() {
                  i.flag = !0
                }), 500)
              },
              setDuration: function(t) {
                var i = "",
                  e = 0,
                  o = 0;
                return t < 60 ? i = t + "分钟" : (e = Math.trunc(t / 60), i = (o = t % 60) ? e + "小时" + o + "分钟" : e + "小时"), i
              },
              changeDay: function(t) {
                this.activeDays = t, this.scrollToLeft = 120 * t + "rpx", this.isInit = !0, this.initData(t)
              },
              spotContent: function(t) {
                var i = "";
                return null != t.businessType && null != t.perCapitaConsumption ? i = t.businessType + " · " + t.perCapitaConsumption : null != t.businessType && (i = t.businessType), i
              },
              getMarker: function(t) {
                var i, e, o, a = null == t || null === (i = t.detail) || void 0 === i ? void 0 : i.markerId,
                  n = this.markers.filter((function(t, i) {
                    return t.index = i, t.id === a
                  }));
                this.changeSpot(null === (e = n[0]) || void 0 === e ? void 0 : e.index), this.scrollLeft = null === (o = n[0]) || void 0 === o ? void 0 : o.index
              },
              initData: function(i, e) {
                var o = this;
                this.activeSpot = 0, this.scrollLeft = 0, this.isTrip = !1, this.markers = [], this.allLocations = [], this.polyline = [];
                var n = 0;
                this.detailObj[i].lineJourneyDetailList.forEach((function(t, s) {
                  var r;
                  if (e && e == t.idy && (n = s), o.markers.push({
                      id: t.idx,
                      zIndex: 10,
                      title: t.destinationName,
                      longitude: t.longitude,
                      latitude: t.latitude,
                      width: 16,
                      height: 16,
                      day: o.detailObj[i].day,
                      distance: t.distance,
                      duration: t.duration,
                      trafficType: t.trafficType,
                      mainPic: null == t.lineDestinationVO ? t.cardImage : t.lineDestinationVO.mainPic,
                      iconPath: "https://eshopfile.zhiyousx.com/169209589667867086.png",
                      customCallout: {
                        display: "ALWAYS",
                        anchorY: 10,
                        anchorX: -3
                      },
                      label: {
                        content: s + 1 + "",
                        bgColor: o.buttonColour,
                        color: "#fff",
                        textAlign: "center",
                        borderRadius: 15,
                        width: 25,
                        height: 25,
                        fontSize: 12,
                        borderWidth: 2,
                        borderColor: "#fff",
                        anchorY: -10
                      }
                    }), null != t.coordinatesList && s > 0)
                    if ((r = o.allLocations).push.apply(r, (0, a.default)(t.coordinatesList)), t.coordinatesList.length > 1) o.polyline.push({
                      color: "#999",
                      width: 4,
                      points: t.coordinatesList
                    });
                    else {
                      var l = [];
                      l.push.apply(l, (0, a.default)(t.coordinatesList).concat((0, a.default)(t.coordinatesList))), o.polyline.push({
                        color: "#999",
                        width: 4,
                        points: l
                      })
                    }
                })), this.markers[0].label.bgColor = "#FF5411", this.markers[0].customCallout.display = "ALWAYS", this.markers[0].zIndex = 100, this.spotList = this.detailObj[i].lineJourneyDetailList, this.markers.length <= 1 ? (this.map.longitude = this.markers[0].longitude, this.map.latitude = this.markers[0].latitude, this.allLocations.push({
                  longitude: this.map.longitude,
                  latitude: this.map.latitude
                })) : (this.map.longitude = (this.markers[0].longitude + this.markers[this.markers.length - 1].longitude) / 2, this.map.latitude = (this.markers[0].latitude + this.markers[this.markers.length - 1].latitude) / 2), this._mapContext = t.createMapContext("map", this), this._mapContext.includePoints({
                  padding: ["120", "40", "180", "40"],
                  points: this.allLocations
                }), e && (this.scrollLeft = n, this.changeSpot(this.scrollLeft)), this.$forceUpdate()
              }
            }
          };
        i.default = n
      }).call(this, e("df3c").default)
    },
    6554: function(t, i, e) {},
    "6e72": function(t, i, e) {
      e.r(i);
      var o = e("2fda"),
        a = e.n(o);
      for (var n in o)["default"].indexOf(n) < 0 && function(t) {
        e.d(i, t, (function() {
          return o[t]
        }))
      }(n);
      i.default = a.a
    },
    "9a87": function(t, i, e) {
      (function(t, i) {
        var o = e("47a9");
        e("5366"), o(e("3240"));
        var a = o(e("ef6e"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, i(a.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    c693: function(t, i, e) {
      var o = e("6554");
      e.n(o).a
    },
    ef6e: function(t, i, e) {
      e.r(i);
      var o = e("2865"),
        a = e("6e72");
      for (var n in a)["default"].indexOf(n) < 0 && function(t) {
        e.d(i, t, (function() {
          return a[t]
        }))
      }(n);
      e("c693");
      var s = e("828b"),
        r = Object(s.a)(a.default, o.b, o.c, !1, null, "229e4244", null, !1, o.a, void 0);
      i.default = r.exports
    }
  },
  [
    ["9a87", "common/runtime", "common/vendor"]
  ]
]);
