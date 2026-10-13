// Extracted from union/pages/vlog/record.js; webpack module f4a9.
// Compiled code for analysis; not an original source file.
module.exports = {
    f4a9: function(t, n, e) {
      (function(t) {
        var o = e("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var i = o(e("7eb4")),
          a = o(e("ee10")),
          s = o(e("af34")),
          u = o(e("a9e0")),
          r = o(e("a39d")),
          l = {
            mixins: [u.default],
            components: {
              videoPlay: function() {
                e.e("union/pages/vlog/videoPlay").then(function() {
                  return resolve(e("f4fd"))
                }.bind(null, e)).catch(e.oe)
              }
            },
            data: function() {
              return {
                dateList: [],
                showLogin: !1,
                title: "我的订单",
                noData: !1,
                pageOn: 1,
                pageSize: 10,
                loading: !1,
                hasMore: !0,
                refreshing: !1,
                showVideo: !1,
                currentVideo: "",
                curPoster: "",
                showDownloadModal: !1,
                isDownStatus: -1,
                videoUrl: "",
                shareId: "",
                objStatus: {},
                downSuccess: !1,
                navBarHeight: 0
              }
            },
            onLoad: function(n) {
              this.navBarHeight = t.getSystemInfoSync().statusBarHeight + 44 + "px", console.log("navBarHeight", this.navBarHeight), r.default.initLang(), this.getPhotoList()
            },
            onShow: function() {
              r.default.initLang(), this.getPhotoList()
            },
            onPageScroll: function(t) {
              t.scrollTop > 15 ? this.title = "" : this.title = "我的订单"
            },
            onReady: function() {},
            mounted: function() {
              this.objStatus = {
                0: this.$t("sub.tips.27"),
                1: this.$t("sub.tips.28"),
                3: this.$t("sub.tips.29")
              }
            },
            methods: {
              getOpenid: function() {
                return new Promise((function(n, e) {
                  t.login({
                    success: function(o) {
                      t.request({
                        url: getApp().globalData.requestUrl + "vxapp/getSessionKeyPro/".concat(o.code),
                        method: "GET",
                        success: function(t) {
                          200 === t.data.code ? n(t.data.data) : e(t)
                        },
                        fail: function(t) {
                          e(t)
                        }
                      })
                    }
                  })
                }))
              },
              getPhotoList: function() {
                var n = this,
                  e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.loading || (this.loading = !0, this.$uniApi.dataRequestNoLoading("GET", "ai/wall/vlog/queryList", {
                  openId: t.getStorageSync("wxopenid"),
                  pageOn: this.pageOn,
                  pageSize: this.pageSize
                }).then((function(t) {
                  if (n.loading = !1, n.refreshing = !1, 1 == t.code) {
                    var o = t.data.records || [];
                    e ? (n.dateList = [].concat((0, s.default)(n.dateList), (0, s.default)(o)), console.log("加载更多", n.dateList)) : n.dateList = o, n.hasMore = o.length >= n.pageSize, n.dateList && 0 != n.dateList.length ? n.noData = !1 : n.noData = !0
                  } else 401 == t.code ? n.showLogin = !0 : n.$util.showToast(t.message || "加载失败")
                })).catch((function(t) {
                  n.loading = !1, n.refreshing = !1, n.$util.showToast("网络错误，请重试")
                })))
              },
              loadMore: function() {
                !this.loading && this.hasMore && (this.pageOn++, this.getPhotoList(!0))
              },
              onRefresh: function() {
                this.refreshing = !0, this.pageOn = 1, this.hasMore = !0, this.getPhotoList(!1)
              },
              onLoginReturn: function(n) {
                this.showLogin = !1, n ? this.getPhotoList() : t.navigateBack()
              },
              goDownLoad: function(n) {
                this.$store.commit("SET_RESULT_IMG", [{
                  url: n
                }]), t.navigateTo({
                  url: "/pages/downloadPic/downloadPic?type=photo"
                })
              },
              previewImage: function(n, e) {
                var o = [],
                  i = 0;
                this.dateList.forEach((function(t, a) {
                  t.aiAlbumList.forEach((function(t, s) {
                    o.push(t.url), a === e && s === n && (i = o.length - 1)
                  }))
                })), t.previewImage({
                  current: i,
                  urls: o
                })
              },
              handlePlay: function(t) {
                var n = this;
                return (0, a.default)(i.default.mark((function e() {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        n.currentVideo = t.videoUrl, n.curPoster = t.homeImage, n.showVideo = !0;
                      case 3:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              handleClose: function() {
                this.showVideo = !1
              },
              handlePreview: function(n, e) {
                var o = n.pictures.map((function(t) {
                  return t.pictureUrl
                }));
                t.previewImage({
                  current: e,
                  urls: o
                })
              },
              closeDownloadModal: function() {
                this.showDownloadModal = !1
              },
              download: function(t) {
                this.showDownloadModal = !0, this.videoUrl = t.videoUrl, this.downloadVideo()
              },
              downloadVideo: function() {
                var n = this;
                return (0, a.default)(i.default.mark((function e() {
                  return i.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, t.showLoading({
                          title: n.$t("sub.tips.9")
                        }), e.next = 4, n.downloadSingleVideo(n.videoUrl);
                      case 4:
                        e.next = 11;
                        break;
                      case 6:
                        e.prev = 6, e.t0 = e.catch(0), console.error("下载失败:", e.t0), t.hideLoading(), t.showToast({
                          title: n.$t("sub.tips.11"),
                          icon: "none"
                        });
                      case 11:
                      case "end":
                        return e.stop()
                    }
                  }), e, null, [
                    [0, 6]
                  ])
                })))()
              },
              downloadSingleVideo: function(n) {
                var e = this,
                  o = this;
                return new Promise((function(i, a) {
                  e.isDownStatus = 1, t.downloadFile({
                    url: n,
                    success: function(n) {
                      200 === n.statusCode ? t.saveVideoToPhotosAlbum({
                        filePath: n.tempFilePath,
                        success: function() {
                          o.isDownStatus = 2, o.downSuccess = !0, t.hideLoading(), i()
                        },
                        fail: function(t) {
                          console.error("保存到相册失败:", t), t.errMsg && t.errMsg.includes("auth deny") ? (o.isDownStatus = 3, a(new Error("AUTH_DENIED"))) : (o.isDownStatus = 4, a(t))
                        }
                      }) : (o.isDownStatus = 4, a(new Error("下载失败，状态码: ".concat(n.statusCode))))
                    },
                    fail: function(t) {
                      o.isDownStatus = 4, console.error("下载文件失败:", t), a(t)
                    }
                  })
                }))
              },
              getProgressText: function() {
                return 3 == this.isDownStatus ? (this.handleAuthDenied(), this.$t("sub.tips.8")) : 1 == this.isDownStatus ? this.$t("sub.tips.9") : 2 == this.isDownStatus ? this.$t("sub.tips.10") : 4 == this.isDownStatus ? this.$t("sub.tips.11") : void 0
              }
            }
          };
        n.default = l
      }).call(this, e("df3c").default)
    }
};
