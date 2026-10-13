// Extracted from yearCard/pages/teamNFC/album.js; webpack module "5b0e".
// Compiled code for analysis; not an original source file.
module.exports = {
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
};
