require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/pages/teamNFC/album"], {
    "244b": function(e, t, n) {
      var a = n("c4e9");
      n.n(a).a
    },
    "24ee": function(e, t, n) {
      var a = n("b0d9");
      n.n(a).a
    },
    "2d3f": function(e, t, n) {
      n.d(t, "b", (function() {
        return i
      })), n.d(t, "c", (function() {
        return r
      })), n.d(t, "a", (function() {
        return a
      }));
      var a = {
          uniNavbar: function() {
            return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
          }
        },
        i = function() {
          var e = this;
          e.$createElement;
          e._self._c, e._isMounted || (e.e0 = function(t) {
            e.showSwiper = !1
          })
        },
        r = []
    },
    "4b33": function(e, t, n) {
      n.r(t);
      var a = n("2d3f"),
        i = n("586e");
      for (var r in i)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(r);
      n("244b"), n("24ee");
      var s = n("828b"),
        o = Object(s.a)(i.default, a.b, a.c, !1, null, "4d0e896b", null, !1, a.a, void 0);
      t.default = o.exports
    },
    "586e": function(e, t, n) {
      n.r(t);
      var a = n("5b0e"),
        i = n.n(a);
      for (var r in a)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(r);
      t.default = i.a
    },
    "5b0e": function(e, t, n) {
      (function(e, a) {
        var i = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = i(n("7eb4")),
          s = i(n("ee10")),
          o = {
            components: {
              specialBanner: function() {
                n.e("yearCard/pages/teamNFC/components/specialBanner").then(function() {
                  return resolve(n("e09a"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                tabList: [{
                  classId: "",
                  className: "全部"
                }],
                tabIt: {},
                tabId: "",
                waterfallList: [],
                menuButtonInfo: {},
                cardList: [],
                paddingTop: 0,
                tabH: 0,
                mapH: 4,
                bannerList: [],
                currentData: "",
                showSwiper: !1,
                swiperMargin: "40px",
                swiperIndex: 0,
                teamId: 0,
                routes: []
              }
            },
            onLoad: function(t) {
              this.teamId = t.teamId || 1, this.menuButtonInfo = e.getMenuButtonBoundingClientRect(), this.paddingTop = this.$util.pxToRpx(this.menuButtonInfo.bottom) + 12, this.tabH = this.paddingTop + 56, this.mapH = this.$util.rpxToPx(12), this.swiperMargin = this.$util.rpxToPx(70) + "px", this.getTeamClass(), this.getTeamPage(), this.routes = getCurrentPages()
            },
            onShareAppMessage: function() {
              return {
                title: "「青途文旅」四川团建之旅",
                imageUrl: "https://eshopfile.zhiyousx.com/2025111815285164535.jpg",
                path: "/yearCard/pages/teamNFC/index?teamId=".concat(this.teamId)
              }
            },
            onShareTimeline: function() {
              return {
                title: "「青途文旅」四川团建之旅",
                imageUrl: "https://eshopfile.zhiyousx.com/2025111815285164535.jpg",
                path: "/yearCard/pages/teamNFC/index?teamId=".concat(this.teamId)
              }
            },
            methods: {
              getTeamClass: function() {
                var e = this;
                this.$uniApi.getRequestNoLoading("GET", "base/app/v1/teamBuilding/fileClass/selectByTeamBuildingId/".concat(this.teamId)).then((function(t) {
                  if (1 === t.code) {
                    var n = t.data || [];
                    n.unshift({
                      classId: "",
                      className: "全部"
                    }), e.tabList = n
                  }
                }))
              },
              getTeamPage: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/teamBuilding/file/selectPage", {
                  fileClassId: this.tabId,
                  teamBuildingId: this.teamId,
                  current: 1,
                  size: 999
                }).then((function(t) {
                  1 === t.code && (e.cardList = t.data.records || [], e.bannerList = e.cardList)
                }))
              },
              changeTab: function(e) {
                this.tabId = e.classId, this.tabIt = e, this.getTeamPage()
              },
              swiperChangeEnd: function(e) {
                this.currentData = e
              },
              download: function() {
                var t = this;
                return (0, s.default)(r.default.mark((function n() {
                  var a, i;
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, e.showLoading({
                          title: "下载中"
                        });
                      case 2:
                        return n.next = 4, e.downloadFile({
                          url: t.currentData.url
                        });
                      case 4:
                        return a = n.sent, i = a[1].tempFilePath, n.next = 8, e.saveImageToPhotosAlbum({
                          filePath: i
                        });
                      case 8:
                        return n.sent, e.hideLoading(), n.next = 12, e.showToast({
                          title: "下载成功"
                        });
                      case 12:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              imgClick: function(e, t) {
                this.currentData = e, this.showSwiper = !0, this.swiperIndex = t
              },
              shareImg: function() {
                var t = this;
                return (0, s.default)(r.default.mark((function n() {
                  var i, s;
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, e.showLoading({
                          title: "分享中"
                        });
                      case 2:
                        return n.next = 4, e.downloadFile({
                          url: t.currentData.url
                        });
                      case 4:
                        i = n.sent, s = i[1].tempFilePath, a.showShareImageMenu({
                          path: s,
                          success: function(t) {
                            console.log(t), e.hideLoading()
                          }
                        });
                      case 7:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              pageBack: function() {
                1 == this.routes.length ? e.redirectTo({
                  url: "/yearCard/pages/teamNFC/index"
                }) : e.navigateBack()
              }
            }
          };
        t.default = o
      }).call(this, n("df3c").default, n("3223").default)
    },
    b0d9: function(e, t, n) {},
    c4e9: function(e, t, n) {},
    c58d: function(e, t, n) {
      (function(e, t) {
        var a = n("47a9");
        n("5366"), a(n("3240"));
        var i = a(n("4b33"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    }
  },
  [
    ["c58d", "common/runtime", "common/vendor"]
  ]
]);
