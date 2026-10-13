require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/spotIntroNew/spotIntroNew"], {
    "0d80": function(t, i, n) {},
    "20ed": function(t, i, n) {
      n.r(i);
      var e = n("e535"),
        o = n("cb38");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(i, t, (function() {
          return o[t]
        }))
      }(a);
      n("2f07");
      var s = n("828b"),
        c = Object(s.a)(o.default, e.b, e.c, !1, null, "3508333f", null, !1, e.a, void 0);
      i.default = c.exports
    },
    "2c19": function(t, i, n) {
      (function(t, n) {
        Object.defineProperty(i, "__esModule", {
          value: !0
        }), i.default = void 0;
        var e = {
          data: function() {
            return {
              locations: "kfsj",
              detailObj: {},
              winHeight: 0,
              windowWidth: 0,
              activeDay: "f1",
              locPoint: "",
              showScroll: !1,
              weatherObj: [],
              navBarH: 48,
              location: 0,
              kfsjTop: 0,
              ydzcTop: 0,
              ywxzTop: 0,
              jtznTop: 0,
              ssfwTop: 0,
              mdxxTop: 0,
              tstjTop: 0,
              hasYwxz: !0,
              noJqxx: !1,
              _spotId: "",
              a: "",
              b: "",
              c: "",
              sTop: 0,
              navH: 0,
              hasTraffic: !1,
              thStyleObj: {
                background: "#FFFAF8",
                fontWeight: "500",
                color: "rgba(0,0,0,.5)"
              },
              parseStyle: {
                p: "word-break: break-all;"
              },
              spotNames: ["", "景区", "饭店", "酒店", "玩乐"]
            }
          },
          onLoad: function(i) {
            this.scenicSpot(i);
            var n = this;
            this.locPoint = i.loc || "", t.getSystemInfo({
              success: function(t) {
                n.winHeight = t.windowHeight, n.windowWidth = t.windowWidth, n.showScroll = !0
              }
            })
          },
          onShow: function() {
            var t = this,
              i = this;
            setTimeout((function() {
              new Promise((function(t) {
                var i = n.createSelectorQuery();
                i.select("#kfsj").boundingClientRect(), i.select("#ydzc").boundingClientRect(), i.select("#ywxz").boundingClientRect(), i.select("#navBar").boundingClientRect(), i.select("#nav").boundingClientRect(), i.select("#jtzn").boundingClientRect(), i.select("#ssfw").boundingClientRect(), i.select("#mdxx").boundingClientRect(), i.select("#tstj").boundingClientRect(), i.exec((function(i) {
                  t(i)
                }))
              })).then((function(n) {
                if (i.kfsjTop = n[0] ? n[0].top : 0, i.ydzcTop = n[1] ? n[1].top : 0, i.ywxzTop = n[2] ? n[2].top : 0, i.navBarH = n[3] ? n[3].height : 0, i.navH = n[4] ? n[4].height : 0, i.jtznTop = n[5] ? n[5].top : 0, i.ssfwTop = n[6] ? n[6].top : 0, i.mdxxTop = n[7] ? n[7].top : 0, i.tstjTop = n[8] ? n[8].top : 0, i.locPoint) {
                  var e = t[i.locPoint + "Top"];
                  i.sTop = e - i.navH - i.navBarH
                }
              }))
            }), 700)
          },
          methods: {
            scenicSpot: function(i) {
              var n = this;
              t.showNavigationBarLoading(), this.$uniApi.getRequestYesLoading("GET", "base/app/v1/scenicSpot/getAppUpgradeScenicSpot?scenicId=" + i.spotId, "加载中...").then((function(i) {
                t.hideNavigationBarLoading(), n.detailObj = i.data, n.setInfo(i.data)
              }))
            },
            setInfo: function(t) {
              var i = this;
              1 == this.detailObj.type ? this.locations = "kfsj" : 2 == this.detailObj.type ? this.locations = "ssfw" : this.locations = "mdxx", t.trafficGuideVoList && t.trafficGuideVoList.some((function(t) {
                return "" != t.trafficContent
              })) && (this.hasTraffic = !0), this.getInfoStatus(), this.$uniApi.getRequestNoLoading("GET", "base/v1/common/get3DayWeather?id=" + this.detailObj.cityId).then((function(t) {
                i.weatherObj = t.data
              }))
            },
            goHref: function(t) {
              this.$navigateTo({
                url: "/pages/webpage/webpage?url=".concat(t)
              })
            },
            loc: function(t) {
              var i = this;
              this.$nextTick((function() {
                i.sTop = i[t + "Top"] - i.navH - i.navBarH, console.log(i[t + "Top"])
              }))
            },
            gettrafficName: function(t) {
              return 1 == t ? "公交" : 2 == t ? "地铁" : 3 == t ? "自驾" : void 0
            },
            getInfoStatus: function() {
              var t = this.detailObj;
              t.officialWebsite || t.telephoneVoList || t.wxSubscriptionVoList || t.sinaWeiboVoList || t.tiktokVoList || (this.noJqxx = !0), t.noticeMsg || t.facilitiesServicesVoList && t.facilitiesServicesVoList[0] || t.trafficGuideVoList.some((function(t) {
                return "" != t.trafficContent
              })) || t.officialWebsite && t.officialWebsite[0] || t.telephoneVoList && t.telephoneVoList[0] || t.wxSubscriptionVoList && t.wxSubscriptionVoList[0] || t.sinaWeiboVoList && t.sinaWeiboVoList[0] ? this.hasYwxz = !0 : this.hasYwxz = !1
            },
            changeActiveDay: function(t) {
              this.activeDay = t
            },
            jumpWebview: function(t) {
              -1 != t.indexOf("?") && (t = (t = (t = t.replace("?", "*")).replace("=", "+")).replace("=", "+")), this.$navigateTo({
                url: "/pages/webpage/webpage?url=".concat(t)
              })
            },
            getDayName: function(t) {
              return "f1" == t ? "今天" : "f2" == t ? "明天" : "f3" == t ? "后天" : void 0
            },
            spotName: function(t) {
              return t ? this.spotNames[t] + "信息" : ""
            },
            call: function(i) {
              t.makePhoneCall({
                phoneNumber: i
              })
            },
            copyFn: function(i, n) {
              t.setClipboardData({
                data: i,
                success: function() {
                  t.showToast({
                    title: n,
                    icon: "none"
                  })
                }
              })
            },
            onScrolling: function(t) {
              if (1 == this.detailObj.type) {
                var i = t.detail.scrollTop + this.navH + this.navBarH;
                console.log(i), console.log(this.ssfwTop), i >= this.ssfwTop - 2 ? this.locations = "ssfw" : i >= this.ydzcTop - 2 ? this.locations = "ydzc" : this.locations = "kfsj"
              }
              if (2 == this.detailObj.type) {
                var n = t.detail.scrollTop + this.navH + this.navBarH;
                n >= this.jtznTop - 2 ? this.locations = "jtzn" : n >= this.tstjTop - 2 ? this.locations = "tstj" : this.locations = "ssfw"
              }
              if (4 == this.detailObj.type) {
                var e = t.detail.scrollTop + this.navH + this.navBarH;
                e >= this.jtznTop - 2 ? this.locations = "jtzn" : e >= this.ssfwTop - 2 ? this.locations = "ssfw" : this.locations = "mdxx"
              }
            },
            priviewImg: function(t) {
              var i = t.src;
              n.previewImage({
                current: i,
                urls: [i]
              })
            }
          }
        };
        i.default = e
      }).call(this, n("df3c").default, n("3223").default)
    },
    "2f07": function(t, i, n) {
      var e = n("0d80");
      n.n(e).a
    },
    9024: function(t, i, n) {
      (function(t, i) {
        var e = n("47a9");
        n("5366"), e(n("3240"));
        var o = e(n("20ed"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, i(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    cb38: function(t, i, n) {
      n.r(i);
      var e = n("2c19"),
        o = n.n(e);
      for (var a in e)["default"].indexOf(a) < 0 && function(t) {
        n.d(i, t, (function() {
          return e[t]
        }))
      }(a);
      i.default = o.a
    },
    e535: function(t, i, n) {
      n.d(i, "b", (function() {
        return o
      })), n.d(i, "c", (function() {
        return a
      })), n.d(i, "a", (function() {
        return e
      }));
      var e = {
          uniNavbar: function() {
            return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
          },
          uParse: function() {
            return Promise.all([n.e("common/vendor"), n.e("uview-ui/components/u-parse/u-parse")]).then(n.bind(null, "7217"))
          },
          uTable: function() {
            return n.e("uview-ui/components/u-table/u-table").then(n.bind(null, "8977"))
          },
          uTr: function() {
            return n.e("uview-ui/components/u-tr/u-tr").then(n.bind(null, "1360"))
          },
          uTh: function() {
            return n.e("uview-ui/components/u-th/u-th").then(n.bind(null, "4123e"))
          },
          uTd: function() {
            return n.e("uview-ui/components/u-td/u-td").then(n.bind(null, "4a60"))
          }
        },
        o = function() {
          var t = this,
            i = (t.$createElement, t._self._c, t.showScroll ? t.__map(t.weatherObj, (function(i, n) {
              return {
                $orig: t.__get_orig(i),
                m0: t.getDayName(i.timeType)
              }
            })) : null),
            n = t.showScroll && t.detailObj.openTimeVoList && t.detailObj.openTimeVoList[0] ? t.__map(t.detailObj.openTimeVoList, (function(i, n) {
              return {
                $orig: t.__get_orig(i),
                l1: i.openTimeContent.split("<br/>")
              }
            })) : null,
            e = t.showScroll && t.detailObj.storeVoList && t.detailObj.storeVoList[0] ? t.__map(t.detailObj.storeVoList, (function(i, n) {
              return {
                $orig: t.__get_orig(i),
                l3: i.storeContent.split("<br/>")
              }
            })) : null,
            o = t.showScroll ? t.__map(t.detailObj.additionalExplainVoList, (function(i, n) {
              return {
                $orig: t.__get_orig(i),
                l5: i.additionalExplainContent.split("<br/>")
              }
            })) : null,
            a = t.showScroll && t.detailObj.specialRecommendationVoList && t.detailObj.specialRecommendationVoList[0] ? t.__map(t.detailObj.specialRecommendationVoList, (function(i, n) {
              return {
                $orig: t.__get_orig(i),
                l7: i.specialRecommendationContent.split("<br/>")
              }
            })) : null,
            s = t.showScroll && t.hasTraffic ? t.__map(t.detailObj.trafficGuideVoList, (function(i, n) {
              return {
                $orig: t.__get_orig(i),
                m1: i.trafficContent ? t.gettrafficName(i.trafficType) : null
              }
            })) : null,
            c = t.showScroll && !t.noJqxx ? t.detailObj.scenicInfoTitle || t.spotName(t.detailObj.type) : null;
          t.$mp.data = Object.assign({}, {
            $root: {
              l0: i,
              l2: n,
              l4: e,
              l6: o,
              l8: a,
              l9: s,
              m2: c
            }
          })
        },
        a = []
    }
  },
  [
    ["9024", "common/runtime", "common/vendor"]
  ]
]);
