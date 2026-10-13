require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/city/city"], {
    2492: function(t, i, o) {
      (function(t, i) {
        var e = o("47a9");
        o("5366"), e(o("3240"));
        var n = e(o("82b0"));
        t.__webpack_require_UNI_MP_PLUGIN__ = o, i(n.default)
      }).call(this, o("3223").default, o("df3c").createPage)
    },
    "34c5": function(t, i, o) {
      (function(t, o) {
        Object.defineProperty(i, "__esModule", {
          value: !0
        }), i.default = void 0;
        var e = {
          data: function() {
            return {
              bannerList: [0, 0, 0, 0],
              citynavTop: 200,
              fixedstyle: "",
              size: 10,
              current: 1,
              cityinfo: {},
              cityStrategyList: {},
              rankingList: {},
              currentTagId0: "",
              currentTagId1: "",
              spotTagList: {},
              childTagList: {},
              listType: 0,
              spotList: [],
              listMinH: 0,
              weaterObj: {},
              toggleTop: 0,
              childpageList: [],
              location: {},
              loadMore: "loading",
              cityId: "",
              scrollTop: 0,
              showIndex: !0,
              fixednavH: 20,
              searchHeight: 0,
              headNavTop: 91,
              fixNavTop: 90,
              refreshing: !1,
              navtop2: 100,
              fixednavTop: 0,
              countHeight: 0,
              scrollTopView1: 0,
              scrollTopView2: 0,
              scrollTopView3: {
                top: 0
              },
              scrollTopView4: {
                top: 0
              },
              showHideScroll: !1,
              httpsShowLoading: !1
            }
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop
          },
          onReachBottom: function() {
            this.reachBottom()
          },
          onLoad: function(i) {
            var o = this;
            this.cityId = i.cityId || this.cityId;
            var e = t.getMenuButtonBoundingClientRect();
            this.searchHeight = e.top, this.headNavTop = this.searchHeight + 8 + this.$util.rpxToPx(65), this.fixednavH = e.top + this.$util.rpxToPx(150), this.countHeight = this.headNavTop + this.$util.rpxToPx(155), t.getSystemInfo({
              success: function(t) {
                var i = 750 / t.screenWidth;
                o.fixNavTop = parseInt(e.top + 80 / i)
              }
            }), this.getDomInfo().then((function(i) {
              t.getSystemInfo({
                success: function(t) {
                  o.fixednavTop = i[0].height - parseInt(68 / o.unit)
                }
              })
            })), this.getCityInfo(), console.log(this.cityinfo, 11111111), this.location = t.getStorageSync("location")
          },
          onPullDownRefresh: function() {
            this.current = 1, this.spotList = [], this.childpageList = [], this.getCityInfo(!0), this.getData()
          },
          watch: {
            scrollTop: function(t) {
              this.fixedstyle = t + this.headNavTop > this.citynavTop ? "position:fixed;top:".concat(this.headNavTop, "px") : "", this.showHideScroll = t + this.headNavTop > this.citynavTop, console.log(t + this.headNavTop, this.citynavTop, t + this.headNavTop > this.citynavTop), this.toggleTop < 300 && t > 300 && (this.toggleTop = this.citynavTop - this.headNavTop)
            }
          },
          methods: {
            setSrc: function(t) {
              if (t.coverPictureUrl) return t.coverPictureUrl;
              var i = t.lineCoverPic ? JSON.parse(t.lineCoverPic) : [];
              return i.length > 0 ? i[0].url : ""
            },
            handleScrollToLower: function() {
              console.log("触底了")
            },
            scroll1: function(t) {
              this.scrollTopView3.top = t.detail.scrollTop
            },
            scroll2: function(t) {
              this.scrollTopView4.top = t.detail.scrollTop
            },
            getDomInfo: function() {
              var i = this;
              return new Promise((function(o) {
                setTimeout((function() {
                  i.$nextTick((function() {
                    var i = t.createSelectorQuery();
                    i.select("#fixHeader").boundingClientRect(), i.exec((function(t) {
                      o(t)
                    }))
                  }))
                }), 500)
              }))
            },
            reachBottom: function() {
              "loadmore" === this.loadMore ? this.getData() : "nomore" === this.loadMore && t.showToast({
                title: "没有更多咯",
                icon: "none"
              })
            },
            getCityWeather: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/v1/common/getNowWeather?id=" + this.cityinfo.cityCode).then((function(i) {
                t.weaterObj = i.data
              }))
            },
            getCityInfo: function(i) {
              var e = this,
                n = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/city/queryCityDetail?size=".concat(this.size, "&current=").concat(this.current, "&cityId=").concat(this.cityId)).then((function(a) {
                e.cityinfo = a.data.cityVO, e.getCityWeather(), e.cityStrategyList = a.data.cityStrategyList, e.rankingList = a.data.rankingList, e.spotTagList = a.data.scenicSpotTagList, e.childTagList = a.data.scenicChildTagList, i && (o.stopPullDownRefresh(), e.refreshing = !1), e.getDomInfo2().then((function(i) {
                  t.getSystemInfo({
                    success: function(t) {
                      n.citynavTop = i[0].height, n.listMinH = t.screenHeight - n.headNavTop - n.$util.rpxToPx(175)
                    }
                  })
                })), !e.currentTagId0 && e.spotTagList && e.spotTagList[0] ? (e.tagId = e.spotTagList[0].id, e.currentTagId0 = e.spotTagList[0].id, e.getData()) : !e.currentTagId1 && e.childTagList && e.childTagList[0] && (e.listType = 1, e.tagId = e.childTagList[0].id, e.currentTagId1 = e.childTagList[0].id, e.getData())
              }))
            },
            getContentList: function(i, o) {
              var e = this;
              if (!this.httpsShowLoading) {
                this.httpsShowLoading = !0;
                var n = {
                    size: this.size,
                    current: this.current,
                    cityId: this.cityId,
                    tagId: this.tagId || "",
                    longitude: this.location.longitude || "",
                    latitude: this.location.latitude || ""
                  },
                  a = this;
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/contentApp/queryCityScenicChildByCityIdPage", n).then((function(n) {
                  if (0 != e.listType) {
                    var s = n.data.records;
                    n.data.total > 0 ? (1 === n.data.current ? e.childpageList = s : e.childpageList = e.childpageList.concat(s), n.data.current < n.data.pages ? (e.current = e.current + 1, e.loadMore = "loadmore") : e.loadMore = "nomore", 1 === i && e.$nextTick((function() {
                      t.pageScrollTo({
                        duration: 0,
                        scrollTop: o + a.headNavTop > a.citynavTop ? a.toggleTop + 10 : o
                      })
                    })), e.httpsShowLoading = !1) : (e.loadMore = "nomore", e.childpageList = [], e.httpsShowLoading = !1)
                  }
                })).catch((function(i) {
                  e.httpsShowLoading = !1, t.stopPullDownRefresh()
                }))
              }
            },
            getSpotList: function(i, o) {
              var e = this;
              if (!this.httpsShowLoading) {
                this.httpsShowLoading = !0;
                var n = {
                  size: this.size,
                  current: this.current,
                  cityId: this.cityId,
                  tagId: this.tagId || "",
                  longitude: this.location.longitude || "",
                  latitude: this.location.latitude || ""
                };
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpot/queryCityScenicSpotByCityIdPage", n).then((function(n) {
                  if (1 != e.listType) {
                    var a = n.data.records,
                      s = e;
                    n.data.total > 0 ? (1 === n.data.current ? e.spotList = a : e.spotList = e.spotList.concat(a), n.data.current < n.data.pages ? (e.current = e.current + 1, e.loadMore = "loadmore") : e.loadMore = "nomore", e.httpsShowLoading = !1, 1 === i && e.$nextTick((function() {
                      t.pageScrollTo({
                        duration: 0,
                        scrollTop: o + s.headNavTop > s.citynavTop ? s.toggleTop + 10 : o
                      })
                    }))) : (e.loadMore = "nomore", e.spotList = [], e.httpsShowLoading = !1)
                  }
                })).catch((function(i) {
                  e.httpsShowLoading = !1, t.stopPullDownRefresh()
                }))
              }
            },
            changelistType: function(t) {
              this.httpsShowLoading || (this.current = 1, this.listType = t, this.spotList = [], this.childpageList = [], this.loadMore = "loadmore", 1 == t ? (this.currentTagId1 || (this.currentTagId1 = this.childTagList[0].id), this.tagId = this.currentTagId1) : 0 == t && (this.tagId = this.currentTagId0), this.getData(1))
            },
            changelabel: function(t) {
              this.httpsShowLoading || (this.current = 1, this.tagId = t, this.spotList = [], this.childpageList = [], this.loadMore = "loadmore", this["currentTagId".concat(this.listType)] = t, this.getData(1))
            },
            getData: function(t) {
              0 == this.listType ? this.getSpotList(t, this.scrollTop) : 1 == this.listType && this.getContentList(t, this.scrollTop)
            },
            tostrategyList: function() {
              this.$navigateTo({
                url: "/subPage/pages/strategyList/strategyList?id=" + this.cityId
              })
            },
            toranking: function(i) {
              1 == i ? t.switchTab({
                url: "/pages/rankList/rankList"
              }) : this.$navigateTo({
                url: "/pages/ranking/ranking?id=" + i.contentId
              })
            },
            toStrategy: function(t) {
              this.$util.cityJump(t.contentType, t.originId)
            },
            getDomInfo2: function() {
              var i = this;
              return new Promise((function(o) {
                setTimeout((function() {
                  var e = t.createSelectorQuery().in(i);
                  e.select("#mainbox").boundingClientRect(), e.select("#fixedcitynav").boundingClientRect(), e.exec((function(t) {
                    o(t)
                  }))
                }), 800)
              }))
            },
            toSpot: function(t) {
              this.$navigateTo({
                url: "/pages/spotDetail/spotDetail?spotId=" + t.scenicId
              })
            },
            toSpotChild: function(t) {
              this.$navigateTo({
                url: "/pages/spotThirdDetail/spotThirdDetail?spotId=" + t.id
              })
            }
          }
        };
        i.default = e
      }).call(this, o("df3c").default, o("3223").default)
    },
    "3ef9": function(t, i, o) {
      var e = o("9eaf");
      o.n(e).a
    },
    "82b0": function(t, i, o) {
      o.r(i);
      var e = o("a445"),
        n = o("f833");
      for (var a in n)["default"].indexOf(a) < 0 && function(t) {
        o.d(i, t, (function() {
          return n[t]
        }))
      }(a);
      o("3ef9"), o("ee4a");
      var s = o("828b"),
        c = Object(s.a)(n.default, e.b, e.c, !1, null, "4bd4f66c", null, !1, e.a, void 0);
      i.default = c.exports
    },
    "9eaf": function(t, i, o) {},
    a445: function(t, i, o) {
      o.d(i, "b", (function() {
        return n
      })), o.d(i, "c", (function() {
        return a
      })), o.d(i, "a", (function() {
        return e
      }));
      var e = {
          uniNavbar: function() {
            return o.e("components/uni-navbar/uni-navbar").then(o.bind(null, "101a"))
          },
          uIcon: function() {
            return o.e("uview-ui/components/u-icon/u-icon").then(o.bind(null, "61be"))
          }
        },
        n = function() {
          var t = this,
            i = (t.$createElement, t._self._c, t.cityinfo.cityAlbumUrls && t.cityinfo.cityAlbumUrls.length > 1),
            o = t.cityStrategyList && t.cityStrategyList[0] ? t.cityStrategyList.length : null,
            e = t.cityStrategyList && t.cityStrategyList[0] ? t.__map(t.cityStrategyList, (function(i, o) {
              return {
                $orig: t.__get_orig(i),
                m0: o < 6 ? t.setSrc(i) : null
              }
            })) : null;
          t.$mp.data = Object.assign({}, {
            $root: {
              g0: i,
              g1: o,
              l0: e
            }
          })
        },
        a = []
    },
    b0db: function(t, i, o) {},
    ee4a: function(t, i, o) {
      var e = o("b0db");
      o.n(e).a
    },
    f833: function(t, i, o) {
      o.r(i);
      var e = o("34c5"),
        n = o.n(e);
      for (var a in e)["default"].indexOf(a) < 0 && function(t) {
        o.d(i, t, (function() {
          return e[t]
        }))
      }(a);
      i.default = n.a
    }
  },
  [
    ["2492", "common/runtime", "common/vendor"]
  ]
]);
