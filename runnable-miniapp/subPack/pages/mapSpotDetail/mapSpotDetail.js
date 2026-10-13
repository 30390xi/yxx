require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/mapSpotDetail/mapSpotDetail"], {
    "3b35": function(t, i, a) {
      a.d(i, "b", (function() {
        return n
      })), a.d(i, "c", (function() {
        return o
      })), a.d(i, "a", (function() {
        return e
      }));
      var e = {
          uSwiper: function() {
            return a.e("uview-ui/components/u-swiper/u-swiper").then(a.bind(null, "9840"))
          },
          uParse: function() {
            return Promise.all([a.e("common/vendor"), a.e("uview-ui/components/u-parse/u-parse")]).then(a.bind(null, "7217"))
          }
        },
        n = function() {
          var t = this,
            i = (t.$createElement, t._self._c, t.spotDetail && t.langData.voiceUrl ? t.format(t.current) : null),
            a = t.spotDetail && t.langData.voiceUrl ? t.format(t.duration) : null;
          t._isMounted || (t.e0 = function(i) {
            t.seek = !0, t.current = i.detail.value
          }, t.e1 = function(i) {
            return t.audio.seek(i.detail.value)
          }, t.e2 = function(i) {
            return t.audio.pause()
          }), t.$mp.data = Object.assign({}, {
            $root: {
              m0: i,
              m1: a
            }
          })
        },
        o = []
    },
    "627c": function(t, i, a) {
      a.r(i);
      var e = a("6816"),
        n = a.n(e);
      for (var o in e)["default"].indexOf(o) < 0 && function(t) {
        a.d(i, t, (function() {
          return e[t]
        }))
      }(o);
      i.default = n.a
    },
    6816: function(t, i, a) {
      (function(t, a) {
        Object.defineProperty(i, "__esModule", {
          value: !0
        }), i.default = void 0;
        var e = {
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
              langType: "zn",
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
            t.id && (this.id = t.id), t.langType && (this.langType = t.langType), 1 == t.source && (this.showGuideBut = !0), t.autoplay && (this.autoplay = !0), "zn" == this.langType ? a.setNavigationBarTitle({
              title: "详情"
            }) : "English" == this.langType && a.setNavigationBarTitle({
              title: "Details"
            })
          },
          onShow: function() {
            this.getLocation()
          },
          onShareAppMessage: function() {
            var t = "/subPack/pages/mapSpotDetail/mapSpotDetail?id=" + this.id + "&langType=" + this.langType + "&source=1";
            return {
              title: this.langData.name,
              imageUrl: this.imgList[0].imgUrl,
              path: this.$util.setShareUrl(t)
            }
          },
          onShareTimeline: function() {
            var t = "id=" + this.id + "&langType=" + this.langType;
            return {
              title: this.langData.name,
              imageUrl: this.imgList[0].imgUrl,
              path: this.$util.setShareTimeline(t)
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
              var i = this;
              t.getLocation({
                type: "gcj02",
                success: function(t) {
                  i.getDetail(t.longitude, t.latitude)
                },
                fail: function(t) {
                  i.getDetail("", "")
                }
              })
            },
            getDetail: function(t, i) {
              var a = this,
                e = {
                  id: this.id,
                  latitude: i,
                  longitude: t
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getSpotInfoById", e).then((function(t) {
                if (1 === t.code) {
                  if (console.log(t.data), a.spotDetail = t.data, t.data.picUrl) {
                    var i = t.data.picUrl.split(","),
                      e = [];
                    i.forEach((function(t) {
                      e.push({
                        imgUrl: t
                      })
                    })), a.imgList = e
                  }
                  "zn" == a.langType ? a.langData = t.data.chinese : "English" == a.langType && (a.langData = t.data.english), a.langData.voiceUrl && a.initAudio()
                }
              }))
            },
            initAudio: function() {
              var t = this;
              this.src = this.langData.voiceUrl, this.audio.src = this.src, this.autoplay && this.play(), this.audio.onTimeUpdate((function() {
                t.seek || (t.current = t.audio.currentTime)
              })), this.audio.onCanplay((function() {
                var i = setInterval((function() {
                  0 !== t.audio.duration && (clearInterval(i), t.duration = t.audio.duration)
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
                url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent("https://eshop.zhiyousx.com/dsmall-admin-ui/h5/fengRiver.html?tabId=" + this.spotDetail.parentId + "&markerId=" + this.spotDetail.id + "&langType=" + this.langType)
              })
            }
          }
        };
        i.default = e
      }).call(this, a("df3c").default, a("3223").default)
    },
    d0b6: function(t, i, a) {
      a.r(i);
      var e = a("3b35"),
        n = a("627c");
      for (var o in n)["default"].indexOf(o) < 0 && function(t) {
        a.d(i, t, (function() {
          return n[t]
        }))
      }(o);
      a("dbf7");
      var u = a("828b"),
        l = Object(u.a)(n.default, e.b, e.c, !1, null, "7bb9408c", null, !1, e.a, void 0);
      i.default = l.exports
    },
    dbf7: function(t, i, a) {
      var e = a("f3d4");
      a.n(e).a
    },
    e16d: function(t, i, a) {
      (function(t, i) {
        var e = a("47a9");
        a("5366"), e(a("3240"));
        var n = e(a("d0b6"));
        t.__webpack_require_UNI_MP_PLUGIN__ = a, i(n.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    f3d4: function(t, i, a) {}
  },
  [
    ["e16d", "common/runtime", "common/vendor"]
  ]
]);
