require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/components/photo-all/indexPro"], {
    "0cae": function(e, t, i) {
      var n = i("5e7a");
      i.n(n).a
    },
    "4f4a": function(e, t, i) {
      (function(e) {
        var n = i("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = n(i("7eb4")),
          a = n(i("ee10")),
          l = n(i("7ca3")),
          r = i("097d");

        function s(e, t) {
          var i = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), i.push.apply(i, n)
          }
          return i
        }

        function c(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(i), !0).forEach((function(t) {
              (0, l.default)(e, t, i[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            }))
          }
          return e
        }
        var u = r.defaultParams.list,
          d = r.defaultParams.duration,
          h = {
            components: {
              fallPro: function() {
                i.e("subPage/components/photo-all/fallPro").then(function() {
                  return resolve(i("c954"))
                }.bind(null, i)).catch(i.oe)
              },
              uniBar: function() {
                i.e("subPage/components/uni-nav-bar/uni-nav-bar").then(function() {
                  return resolve(i("e1c6"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            props: ["isPhotoAll", "lineId", "videoUrl"],
            data: function() {
              return {
                fullScreen: !0,
                vHeight: 0,
                renderType: [],
                isPhotoShow: !1,
                titleKey: 0,
                navTitle: "",
                scenicAreaAlbumObj: [],
                topicMap: [],
                allList: [],
                lineImageUrl: "",
                lineImageList: [],
                current: 0,
                idIndex: 0,
                list: [],
                heights: [],
                isLoad: !0,
                lineIndexCludes: [],
                scrollTop: 0,
                old: {
                  scrollTop: 0
                },
                isShowList: !1,
                imageAllNum: 0,
                showPreview: !1,
                swiperList: [],
                current1: 0,
                current2: 0,
                currentPage: 1,
                allPicList: [],
                showPic: {},
                moduleList: [],
                tops: [],
                sTop: 0,
                scrollIndex: 0,
                lineData: {},
                duration: d,
                scale: 1
              }
            },
            watch: {
              isPhotoAll: {
                immediate: !0,
                deep: !0,
                handler: function(e) {
                  this.isPhotoShow = e, e && (this.isShowList = e)
                }
              }
            },
            methods: {
              videoUpdate: function(t) {
                var i = t.detail,
                  n = i.width,
                  o = i.height;
                this.vHeight = o / (n / e.upx2px(750))
              },
              playVideo: function(t) {
                if (this.videoUrl) {
                  var i = e.createVideoContext("videoAlbum", this);
                  i.pause();
                  var n = setTimeout((function() {
                    clearTimeout(n), t ? i.play() : i.pause()
                  }), 500)
                }
              },
              routerpage: function(e, t) {
                5 == e ? this.$navigateTo({
                  url: "/pages/spotThirdDetail/spotThirdDetail?spotId=" + t
                }) : this.$navigateTo({
                  url: "/pages/spotDetail/spotDetail?spotId=" + t
                })
              },
              priviewImg: function(e) {
                this.priview(e)
              },
              downPage: function() {
                this.showPreview = !1
              },
              priview: function(e) {
                this.leapTo(e.index + 1), this.current1 = e.index, this.showPic = e
              },
              handleTouchStart: function() {
                this.isZooming = !0
              },
              handleTouchEnd: function() {
                this.isZooming = !1
              },
              itemChange: function(e) {
                var t = this;
                (0, r.changeSwiperItem)(this, Number(e.detail.current), u, d, (function() {
                  var e = t.swiperList[t.current];
                  t.current1 = e.index, t.showPic = e, t.allPicList.length - e.index < 6 && t.getLineImageByModule()
                }))
              },
              leapTo: function(e) {
                var t = this;
                (0, r.leapToItem)(this, Number(e), u, d, (function() {
                  t.$nextTick((function() {
                    t.showPreview = !0
                  }), 50)
                }))
              },
              handleVideoShow: function(e) {
                this.isPhotoShow = e
              },
              wtouchEnd: function() {
                this.getLineImageByModule()
              },
              getModuleList: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("get", "product/app/v1/lineImage/getLineImageDetailOverview", {
                  lineId: this.lineId
                }).then((function(t) {
                  1 === t.code && (e.moduleList = t.data, e.getLineImageByModule())
                }))
              },
              getLineImageByModule: function() {
                var t = this;
                if (this.moduleList[this.idIndex]) {
                  var i = {
                    destinationId: this.moduleList[this.idIndex].destinationId,
                    day: this.moduleList[this.idIndex].day,
                    current: this.currentPage,
                    size: 12
                  };
                  this.isPhotoAll && e.showLoading({
                    title: "加载中"
                  }), this.$uniApi.dataRequestNoLoading("get", "product/app/v1/lineImage/getLineImageJourneyDetail", c({
                    lineId: this.lineId
                  }, i)).then((function(i) {
                    t.isPhotoAll && e.hideLoading();
                    var n = t.allPicList.length > 0 ? t.allPicList.length : 0;
                    if (i.data.records.forEach((function(e, i) {
                        e.index = n + i, t.allPicList.push(e)
                      })), u = t.allPicList, 1 == t.currentPage) {
                      var o = i.data.total,
                        a = c({
                          total: o,
                          imageList: i.data.records
                        }, t.moduleList[t.idIndex]);
                      t.$set(t.moduleList, t.idIndex, a), t.getDomInfo(t.idIndex), a.imageList.length < o ? t.currentPage++ : (t.currentPage = 1, t.idIndex++)
                    } else {
                      var l = t.moduleList[t.idIndex];
                      l.imageList = l.imageList.concat(i.data.records), t.$set(t.moduleList, t.idIndex, l), t.getDomInfo(t.idIndex), l.imageList.length < l.total ? t.currentPage++ : (t.currentPage = 1, t.idIndex++)
                    }
                    t.allPicList.length < 36 && t.getLineImageByModule()
                  }))
                }
              },
              getLineImageDetail: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("get", "product/app/v1/lineImage/getLineImageDetail", {
                  lineId: this.lineId
                }).then((function(t) {
                  e.lineImageUrl = t.data.lineImageUrl, e.imageAllNum = t.data.imageAllNum;
                  var i = {
                    total: t.data.imageNum,
                    imageList: []
                  };
                  i.imageList.push({
                    url: t.data.lineImageUrl,
                    index: 0
                  }), e.allPicList.push({
                    url: t.data.lineImageUrl,
                    index: 0
                  }), t.data.lineImageList && t.data.lineImageList.forEach((function(t, n) {
                    i.imageList.push({
                      url: t,
                      index: 1 + n
                    }), e.allPicList.push({
                      url: t,
                      index: 1 + n
                    })
                  })), e.lineData = i, e.navTitle = e.imageAllNum + "张照片", e.getModuleList(), u = e.allPicList, (0, r.initSwiper)(e, u, (function() {}))
                }))
              },
              addLeadingZero: function(e) {
                return e < 10 ? "0".concat(e) : e.toString()
              },
              back: function() {
                var t = this;
                this.playVideo(!1), e.hideLoading(), this.scrollTop = this.old.scrollTop, this.$nextTick((function() {
                  this.scrollTop = -1
                })), this.$emit("hancleCloseAlbum"), setTimeout((function() {
                  t.isPhotoShow || (t.isShowList = !1)
                }), 1e3)
              },
              findSumIndex: function(e, t) {
                for (var i = -1, n = 0; n < e.length; n++)
                  if (e[n] >= t) {
                    i = n;
                    break
                  } return i
              },
              pagescroll: function(e) {
                var t = e.detail.scrollTop;
                this.videoUrl && (t -= this.vHeight);
                var i = this.scrollIndex,
                  n = this.tops;
                i + 1 < n.length && t >= n[i] && (this.scrollIndex = i + 1), i - 1 >= 0 && t < n[i - 1] && (this.scrollIndex = i - 1), 0 == this.scrollIndex ? this.navTitle = this.imageAllNum + "张照片" : this.navTitle = this.moduleList[this.scrollIndex - 1].destinationName
              },
              getDomInfo: function(t) {
                var i = this,
                  n = this;
                this.$nextTick((function() {
                  new Promise((function(n) {
                    var o = e.createSelectorQuery().in(i);
                    o.select("#module" + t).boundingClientRect(), o.exec((function(e) {
                      n(e)
                    }))
                  })).then((function(e) {
                    n.heights[t] = e[0].height, t <= 0 ? (n.tops[t] = e[0].top, n.tops[t + 1] = n.tops[t] + n.heights[t]) : n.tops[t + 1] = n.tops[t] + n.heights[t]
                  }))
                }))
              }
            },
            created: function() {
              var e = this;
              return (0, a.default)(o.default.mark((function t() {
                return o.default.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      e.getLineImageDetail();
                    case 1:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            }
          };
        t.default = h
      }).call(this, i("df3c").default)
    },
    "5e7a": function(e, t, i) {},
    "790c": function(e, t, i) {
      i.r(t);
      var n = i("4f4a"),
        o = i.n(n);
      for (var a in n)["default"].indexOf(a) < 0 && function(e) {
        i.d(t, e, (function() {
          return n[e]
        }))
      }(a);
      t.default = o.a
    },
    c595: function(e, t, i) {
      i.r(t);
      var n = i("e2d6"),
        o = i("790c");
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        i.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      i("0cae");
      var l = i("828b"),
        r = Object(l.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
      t.default = r.exports
    },
    e2d6: function(e, t, i) {
      i.d(t, "b", (function() {
        return o
      })), i.d(t, "c", (function() {
        return a
      })), i.d(t, "a", (function() {
        return n
      }));
      var n = {
          uniIcons: function() {
            return Promise.all([i.e("common/vendor"), i.e("components/uni-icons/uni-icons")]).then(i.bind(null, "365b"))
          }
        },
        o = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.__map(e.moduleList, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                m0: t.imageList && t.imageList[0] ? e.addLeadingZero(t.day) : null
              }
            })));
          e.$mp.data = Object.assign({}, {
            $root: {
              l0: t
            }
          })
        },
        a = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/photo-all/indexPro-create-component", {
    "subPage/components/photo-all/indexPro-create-component": function(e, t, i) {
      i("df3c").createComponent(i("c595"))
    }
  },
  [
    ["subPage/components/photo-all/indexPro-create-component"]
  ]
]);
