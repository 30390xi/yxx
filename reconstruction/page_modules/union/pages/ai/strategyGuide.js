// Extracted from union/pages/ai/strategyGuide.js; webpack module ae36.
// Compiled code for analysis; not an original source file.
module.exports = {
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
};
