require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/mapSpotDetail/mapSpotDetail"], {
    "03d0": function(t, e, a) {
      var i = a("944f");
      a.n(i).a
    },
    "12f5": function(t, e, a) {
      a.r(e);
      var i = a("4922"),
        n = a.n(i);
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        a.d(e, t, (function() {
          return i[t]
        }))
      }(o);
      e.default = n.a
    },
    4922: function(t, e, a) {
      (function(t, a) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = {
          data: function() {
            return {
              audio: t.createInnerAudioContext(),
              current: 0,
              duration: 0,
              paused: !0,
              loading: !1,
              seek: !1,
              src: "",
              id: 0,
              langType: "中文",
              spotDetail: "",
              langData: {},
              showGuideBut: !1,
              parseStyle: {
                p: "word-break: break-all;"
              },
              imgList: [],
              autoplay: !1
            }
          },
          onLoad: function(t) {
            t.id && (this.id = t.id), t.langType && (this.langType = t.langType), 1 == t.source && (this.showGuideBut = !0), t.autoplay && (this.autoplay = !0), "中文" == this.langType ? a.setNavigationBarTitle({
              title: "详情"
            }) : "English" == this.langType && a.setNavigationBarTitle({
              title: "Details"
            })
          },
          onShow: function() {
            this.getLocation()
          },
          onShareAppMessage: function() {
            var t = "/subPage/pages/mapSpotDetail/mapSpotDetail?id=" + this.id + "&langType=" + this.langType;
            return {
              title: this.langData.name,
              imageUrl: this.imgList[0],
              path: this.$util.setShareUrl(t)
            }
          },
          onShareTimeline: function() {
            var t = "id=" + this.id + "&langType=" + this.langType;
            return {
              title: this.langData.name,
              imageUrl: this.imgList[0],
              query: this.$util.setShareTimeline(t)
            }
          },
          onHide: function() {
            this.audio && this.audio.pause()
          },
          onUnload: function() {
            this.audio && this.audio.destroy()
          },
          methods: {
            getLocation: function() {
              var e = this;
              t.getLocation({
                type: "gcj02",
                success: function(t) {
                  e.getDetail(t.longitude, t.latitude)
                },
                fail: function(t) {
                  e.getDetail("", "")
                }
              })
            },
            getDetail: function(t, e) {
              var a = this,
                i = {
                  id: this.id,
                  latitude: e,
                  longitude: t
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getSpotInfoById", i).then((function(t) {
                if (1 === t.code) {
                  if (console.log(t.data), a.spotDetail = t.data, t.data.picUrl) {
                    var e = t.data.picUrl.split(","),
                      i = [];
                    e.forEach((function(t) {
                      i.push({
                        imgUrl: t
                      })
                    })), a.imgList = i
                  }
                  "中文" == a.langType ? a.langData = t.data.chinese : "English" == a.langType && (a.langData = t.data.english), a.langData.voiceUrl && a.initAudio()
                }
              }))
            },
            initAudio: function() {
              var t = this;
              this.src = this.langData.voiceUrl, this.audio.src = this.src, this.autoplay && this.play(), this.audio.onTimeUpdate((function() {
                t.seek || (t.current = t.audio.currentTime)
              })), this.audio.onCanplay((function() {
                var e = setInterval((function() {
                  0 !== t.audio.duration && (clearInterval(e), t.duration = t.audio.duration)
                }), 500)
              })), this.audio.onPlay((function() {
                t.paused = !1, t.loading = !1
              })), this.audio.onPause((function() {
                t.paused = !0
              })), this.audio.onEnded((function() {
                t.continue ? t.next() : (t.paused = !0, t.current = 0)
              })), this.audio.onSeeked((function() {
                t.seek = !1
              }))
            },
            format: function(t) {
              return "0".repeat(2 - String(Math.floor(t / 60)).length) + Math.floor(t / 60) + ":" + "0".repeat(2 - String(Math.floor(t % 60)).length) + Math.floor(t % 60)
            },
            play: function() {
              this.audio.play(), this.loading = !0
            },
            jumpLocation: function() {
              a.openLocation({
                latitude: Number(this.spotDetail.latitude),
                longitude: Number(this.spotDetail.longitude),
                name: this.langData.name
              })
            },
            toGuide: function() {
              a.navigateTo({
                url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent("https://eshop.zhiyousx.com/dsmall-admin-ui/h5/templeHeaven.html?tabId=" + this.spotDetail.parentId + "&markerId=" + this.spotDetail.id + "&langType=" + this.langType)
              })
            }
          }
        };
        e.default = i
      }).call(this, a("df3c").default, a("3223").default)
    },
    "944f": function(t, e, a) {},
    da9f: function(t, e, a) {
      a.r(e);
      var i = a("ed46"),
        n = a("12f5");
      for (var o in n)["default"].indexOf(o) < 0 && function(t) {
        a.d(e, t, (function() {
          return n[t]
        }))
      }(o);
      a("03d0");
      var u = a("828b"),
        l = Object(u.a)(n.default, i.b, i.c, !1, null, "3e5bb606", null, !1, i.a, void 0);
      e.default = l.exports
    },
    e97c: function(t, e, a) {
      (function(t, e) {
        var i = a("47a9");
        a("5366"), i(a("3240"));
        var n = i(a("da9f"));
        t.__webpack_require_UNI_MP_PLUGIN__ = a, e(n.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    ed46: function(t, e, a) {
      a.d(e, "b", (function() {
        return n
      })), a.d(e, "c", (function() {
        return o
      })), a.d(e, "a", (function() {
        return i
      }));
      var i = {
          uSwiper: function() {
            return a.e("uview-ui/components/u-swiper/u-swiper").then(a.bind(null, "9840"))
          },
          uParse: function() {
            return Promise.all([a.e("common/vendor"), a.e("uview-ui/components/u-parse/u-parse")]).then(a.bind(null, "7217"))
          }
        },
        n = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.spotDetail && t.langData.voiceUrl ? t.format(t.current) : null),
            i = t.spotDetail && t.langData.voiceUrl ? t.format(t.duration) : null,
            n = t.spotDetail ? a("0dce") : null,
            o = t.spotDetail ? a("8c77") : null;
          t._isMounted || (t.e0 = function(e) {
            t.seek = !0, t.current = e.detail.value
          }, t.e1 = function(e) {
            return t.audio.seek(e.detail.value)
          }, t.e2 = function(e) {
            return t.audio.pause()
          }), t.$mp.data = Object.assign({}, {
            $root: {
              m0: e,
              m1: i,
              m2: n,
              m3: o
            }
          })
        },
        o = []
    }
  },
  [
    ["e97c", "common/runtime", "common/vendor", "subPage/common/vendor"]
  ]
]);
