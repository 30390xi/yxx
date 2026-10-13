// Extracted from subPack/pages/hotelIntro/hotelIntro.js; webpack module "644f".
// Compiled code for analysis; not an original source file.
module.exports = {
    "644f": function(i, t, a) {
      (function(i, a) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var e = {
          data: function() {
            return {
              locations: "ssfw",
              detailObj: {},
              winHeight: 0,
              windowWidth: 0,
              activeDay: "f1",
              locPoint: "",
              showScroll: !1,
              weatherObj: [],
              navBarH: 48,
              location: 0,
              ssfwTop: 0,
              tstjTop: 0,
              ywxzTop: 0,
              hasYwxz: !0,
              hasSsfw: !0,
              hasTstj: !0,
              boxId: "ssfw",
              noJqxx: !1,
              _spotId: "",
              a: "",
              b: "",
              c: "",
              sTop: -1,
              navH: 0,
              hasTraffic: !1,
              thStyleObj: {
                background: "#FFFAF8",
                fontWeight: "500",
                color: "rgba(0,0,0,.5)"
              },
              parseStyle: {
                p: "word-break: break-all;"
              }
            }
          },
          onLoad: function(t) {
            this.scenicSpot(t);
            var a = this;
            this.locPoint = t.loc || "", i.getSystemInfo({
              success: function(i) {
                a.winHeight = i.windowHeight, a.windowWidth = i.windowWidth, a.showScroll = !0
              }
            })
          },
          onShow: function() {},
          methods: {
            scenicSpot: function(t) {
              var e = this;
              i.showNavigationBarLoading(), this.$uniApi.getRequestYesLoading("GET", "base/app/v1/scenicSpot/getAppUpgradeScenicSpot?scenicId=" + t.spotId, "加载中...").then((function(t) {
                i.hideNavigationBarLoading(), e.detailObj = t.data, t.data.trafficGuideVoList && t.data.trafficGuideVoList.some((function(i) {
                  return "" != i.trafficContent
                })) && (e.hasTraffic = !0), e.getInfoStatus(), e.getSsfwStatus(), e.getTstjStatus(), e.$uniApi.getRequestNoLoading("GET", "base/v1/common/get3DayWeather?id=" + e.detailObj.cityId).then((function(i) {
                  e.weatherObj = i.data, console.log(e.weatherObj);
                  var t = e;
                  setTimeout((function() {
                    new Promise((function(i) {
                      var t = a.createSelectorQuery();
                      t.select("#ssfw").boundingClientRect(), t.select("#tstj").boundingClientRect(), t.select("#ywxz").boundingClientRect(), t.select("#navBar").boundingClientRect(), t.select("#nav").boundingClientRect(), t.exec((function(t) {
                        i(t)
                      }))
                    })).then((function(i) {
                      t.navBarH = i[3].height, t.navH = i[4].height, t.ssfwTop = i[0].top, t.tstjTop = i[1].top - t.navH - t.navBarH - 9, t.ywxzTop = i[2].top - t.navH - t.navBarH - 9, t.locPoint && (e.boxId = t.locPoint, e.locations = t.locPoint)
                    }))
                  }), 700)
                }))
              }))
            },
            gettrafficName: function(i) {
              return 1 == i ? "公交" : 2 == i ? "地铁" : 3 == i ? "自驾" : void 0
            },
            getTstjStatus: function() {
              var i = this.detailObj;
              i.hotelArrivalDepartureTime || i.hotelBreakfast || i.hotelChildrenBed || i.hotelPet || i.hotelReceptionPolicy ? this.hasTstj = !0 : this.hasTstj = !1
            },
            getSsfwStatus: function() {
              var i = this.detailObj.hotelFacilitiesServicesSysTagVo,
                t = this.detailObj.hotelAdditionalExplainVo;
              i.businessTagList && i.businessTagList[0] || i.childrenTagList && i.childrenTagList[0] || i.cleanTagList && i.cleanTagList[0] || i.freeBarrierTagList && i.freeBarrierTagList[0] || i.massageTagList && i.massageTagList[0] || i.parkingTagList && i.parkingTagList[0] || i.publicAreaTagList && i.publicAreaTagList[0] || i.receptionTagList && i.receptionTagList[0] || i.recreationFacilitiesTagList && i.recreationFacilitiesTagList[0] || i.restaurantTagList && i.restaurantTagList[0] || i.securityTagList && i.securityTagList[0] || i.trafficTagList && i.trafficTagList[0] || t.businessAdditionalExplainVoList && t.businessAdditionalExplainVoList[0] || t.childrenAdditionalExplainVoList && t.childrenAdditionalExplainVoList[0] || t.cleanAdditionalExplainVoList && t.cleanAdditionalExplainVoList[0] || t.freeBarrierAdditionalExplainVoList && t.freeBarrierAdditionalExplainVoList[0] || t.massageAdditionalExplainVoList && t.massageAdditionalExplainVoList[0] || t.parkingAdditionalExplainVoList && t.parkingAdditionalExplainVoList[0] || t.publicAreaAdditionalExplainVoList && t.publicAreaAdditionalExplainVoList[0] || t.receptionAdditionalExplainVoList && t.receptionAdditionalExplainVoList[0] || t.recreationFacilitiesAdditionalExplainVoList && t.recreationFacilitiesAdditionalExplainVoList[0] || t.restaurantAdditionalExplainVoList && t.restaurantAdditionalExplainVoList[0] || t.securityAdditionalExplainVoList && t.securityAdditionalExplainVoList[0] || t.trafficAdditionalExplainVoList && t.trafficAdditionalExplainVoList[0] ? this.hasSsfw = !0 : this.hasSsfw = !1
            },
            getInfoStatus: function() {
              var i = this.detailObj;
              i.officialWebsite || i.telephoneVoList || i.wxSubscriptionVoList || i.sinaWeiboVoList || (this.noJqxx = !0), i.noticeMsg || i.facilitiesServicesVoList && i.facilitiesServicesVoList[0] || i.trafficGuideVoList.some((function(i) {
                return "" != i.trafficContent
              })) || i.officialWebsite && i.officialWebsite[0] || i.telephoneVoList && i.telephoneVoList[0] || i.wxSubscriptionVoList && i.wxSubscriptionVoList[0] || i.sinaWeiboVoList && i.sinaWeiboVoList[0] ? this.hasYwxz = !0 : this.hasYwxz = !1
            },
            changeActiveDay: function(i) {
              this.activeDay = i
            },
            jumpWebview: function(i) {
              -1 != i.indexOf("?") && (i = (i = i.replace("?", "*")).replace("=", "+")), this.$navigateTo({
                url: "/pages/webpage/webpage?url=".concat(i)
              })
            },
            getDayName: function(i) {
              return "f1" == i ? "今天" : "f2" == i ? "明天" : "f3" == i ? "后天" : void 0
            },
            call: function(t) {
              i.makePhoneCall({
                phoneNumber: t
              })
            },
            copyFn: function(t) {
              i.setClipboardData({
                data: t,
                success: function() {
                  i.showToast({
                    title: "复制成功",
                    icon: "none"
                  })
                }
              })
            },
            priviewImg: function(i) {
              var t = i.src;
              a.previewImage({
                current: t,
                urls: [t]
              })
            },
            loc: function(i) {
              this.boxId = i
            },
            onScrolling: function(i) {
              var t = i.detail.scrollTop;
              t < this.tstjTop ? this.locations = "ssfw" : t >= this.tstjTop && t < this.ywxzTop ? this.locations = "tstj" : t >= this.ywxzTop && (this.locations = "ywxz")
            }
          }
        };
        t.default = e
      }).call(this, a("df3c").default, a("3223").default)
    },
};
