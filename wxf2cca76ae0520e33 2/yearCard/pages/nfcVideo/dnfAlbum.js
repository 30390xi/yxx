require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/pages/nfcVideo/dnfAlbum"], {
    "0156": function(t, e, i) {
      (function(t, n) {
        var a = i("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var s = a(i("7eb4")),
          r = a(i("ee10")),
          c = {
            components: {
              specialBanner: function() {
                i.e("yearCard/pages/nfcVideo/components/specialBanner").then(function() {
                  return resolve(i("0814"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            data: function() {
              return {
                curIndex: 0,
                listLen: 6,
                titleTop: 0,
                swiperIndex: 0,
                mapH: 10,
                currentData: "",
                showSwiper: !1,
                routes: [],
                bannerList: [],
                tabId: 1,
                fileClassId: "",
                subList: [{
                  className: "全部",
                  fileClassId: ""
                }, {
                  fileClassId: 1,
                  className: "跃马迎春来"
                }, {
                  fileClassId: 2,
                  className: "鼓舞新春"
                }, {
                  fileClassId: 3,
                  className: "唐诗长廊"
                }, {
                  fileClassId: 4,
                  className: "翼马当先"
                }],
                nfcActivityId: 5
              }
            },
            onLoad: function(e) {
              t.getMenuButtonBoundingClientRect(), this.titleTop = "418rpx", this.subHideHeight = "418rpx", this.subShowHeight = "358rpx", this.routes = getCurrentPages(), this.getClassList(), this.getImgList()
            },
            onShow: function() {},
            methods: {
              imgClick: function(t, e) {
                if (1 === t.fileType) this.currentData = t, this.showSwiper = !0, this.swiperIndex = e;
                else {
                  var i = this.bannerList.map((function(t) {
                    return {
                      url: t.url,
                      type: "video",
                      poster: t.coverImage || "".concat(t.url, "?vframe/jpg/offset/0")
                    }
                  }));
                  n.previewMedia({
                    sources: i,
                    current: e
                  })
                }
              },
              swiperChange: function(t) {
                this.curIndex = t.detail.current
              },
              swiperChangeEnd: function(t) {
                this.currentData = this.bannerList[t], console.log(this.currentData)
              },
              download: function() {
                var e = this;
                return (0, r.default)(s.default.mark((function i() {
                  var n, a;
                  return s.default.wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                      case 0:
                        return i.next = 2, t.showLoading({
                          title: "下载中"
                        });
                      case 2:
                        return i.next = 4, t.downloadFile({
                          url: e.currentData.url
                        });
                      case 4:
                        return n = i.sent, a = n[1].tempFilePath, i.next = 8, t.saveImageToPhotosAlbum({
                          filePath: a
                        });
                      case 8:
                        return i.sent, t.hideLoading(), i.next = 12, t.showToast({
                          title: "下载成功"
                        });
                      case 12:
                      case "end":
                        return i.stop()
                    }
                  }), i)
                })))()
              },
              pageBack: function() {
                1 == this.routes.length ? t.redirectTo({
                  url: "/yearCard/pages/nfcVideo/jz"
                }) : t.navigateBack()
              },
              changeTab: function(t) {
                t != this.tabId && (this.tabId = t, this.fileClassId = "", this.subList = [], this.bannerList = [], 1 == this.tabId ? this.getClassList() : this.titleTop = this.subHideHeight, this.showSwiper = !1, this.getImgList())
              },
              getClassList: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/nfc/skiing/file/class/selectClassHaveFile", {
                  fileType: this.tabId,
                  nfcActivityId: this.nfcActivityId
                }).then((function(e) {
                  if (1 === e.code) {
                    var i = e.data || [];
                    i.length > 0 ? (i.unshift({
                      fileClassId: "",
                      className: "全部"
                    }), t.titleTop = t.subShowHeight) : t.titleTop = t.subHideHeight, t.subList = i
                  }
                }))
              },
              changeSub: function(t) {
                t.fileClassId != this.fileClassId && (this.fileClassId = t.fileClassId, this.bannerList = [], this.getImgList())
              },
              getImgList: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/nfc/skiing/file/selectList", {
                  fileSource: 1,
                  fileClassId: this.fileClassId,
                  fileType: this.tabId,
                  nfcActivityId: this.nfcActivityId
                }).then((function(e) {
                  if (1 === e.code) {
                    var i = e.data || [];
                    i.forEach((function(e, i) {
                      1 == t.tabId ? e.imageUrl = "".concat(e.url, "?imageView2/2/w/346") : e.coverImage ? e.imageUrl = "".concat(e.coverImage, "?imageView2/2/w/346") : e.imageUrl = "".concat(e.url, "?vframe/jpg/offset/0"), e.heightStr = e.height / e.width * 346 + "rpx"
                    })), t.bannerList = i
                  }
                }))
              }
            }
          };
        e.default = c
      }).call(this, i("df3c").default, i("3223").default)
    },
    "0669": function(t, e, i) {
      i.r(e);
      var n = i("9c00"),
        a = i("77a6");
      for (var s in a)["default"].indexOf(s) < 0 && function(t) {
        i.d(e, t, (function() {
          return a[t]
        }))
      }(s);
      i("7970"), i("cd8d");
      var r = i("828b"),
        c = Object(r.a)(a.default, n.b, n.c, !1, null, "48502410", null, !1, n.a, void 0);
      e.default = c.exports
    },
    "0d32": function(t, e, i) {},
    "77a6": function(t, e, i) {
      i.r(e);
      var n = i("0156"),
        a = i.n(n);
      for (var s in n)["default"].indexOf(s) < 0 && function(t) {
        i.d(e, t, (function() {
          return n[t]
        }))
      }(s);
      e.default = a.a
    },
    7970: function(t, e, i) {
      var n = i("aba5");
      i.n(n).a
    },
    "9c00": function(t, e, i) {
      i.d(e, "b", (function() {
        return a
      })), i.d(e, "c", (function() {
        return s
      })), i.d(e, "a", (function() {
        return n
      }));
      var n = {
          uniNavbar: function() {
            return i.e("components/uni-navbar/uni-navbar").then(i.bind(null, "101a"))
          }
        },
        a = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.subList.length);
          t._isMounted || (t.e0 = function(e) {
            t.showSwiper = !1
          }), t.$mp.data = Object.assign({}, {
            $root: {
              g0: e
            }
          })
        },
        s = []
    },
    aba5: function(t, e, i) {},
    cd8d: function(t, e, i) {
      var n = i("0d32");
      i.n(n).a
    },
    cf06f: function(t, e, i) {
      (function(t, e) {
        var n = i("47a9");
        i("5366"), n(i("3240"));
        var a = n(i("0669"));
        t.__webpack_require_UNI_MP_PLUGIN__ = i, e(a.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    }
  },
  [
    ["cf06f", "common/runtime", "common/vendor"]
  ]
]);
