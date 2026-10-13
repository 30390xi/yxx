require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/vlog/result"], {
    "0397": function(t, n, e) {
      e.r(n);
      var o = e("5608"),
        i = e.n(o);
      for (var s in o)["default"].indexOf(s) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(s);
      n.default = i.a
    },
    5608: function(t, n, e) {
      (function(t) {
        var o = e("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var i = o(e("7eb4")),
          s = o(e("ee10")),
          a = {
            components: {
              videoPlay: function() {
                e.e("union/pages/vlog/videoPlay").then(function() {
                  return resolve(e("f4fd"))
                }.bind(null, e)).catch(e.oe)
              }
            },
            mixins: [o(e("a9e0")).default],
            data: function() {
              return {
                title: "VLOG",
                showDownloadModal: !1,
                isDownStatus: -1,
                videoUrl: "",
                posterUrl: "",
                shareId: "",
                shareIns: "",
                type: "",
                downSuccess: !1,
                navBarHeight: 0
              }
            },
            onShareAppMessage: function(t) {
              return {
                title: this.$t("sub.button.vlogGeneration"),
                imageUrl: "https://eshopfile.zhiyousx.com/176913104706458420.png",
                path: "/union/pages/vlog/result?type=share&shareId=".concat(this.shareId)
              }
            },
            onLoad: function(n) {
              this.navBarHeight = t.getSystemInfoSync().statusBarHeight + 44 + "px", console.log("navBarHeight", this.navBarHeight), this.videoUrl = n.videoUrl, this.posterUrl = n.posterUrl, this.shareId = n.shareId, this.type = n.type, console.log("this.type", this.type), (this.shareId && "share" == n.type || this.shareId && 1 == n.type) && (this.handleQueryById(), console.log("this.shareId", this.shareId))
            },
            mounted: function() {
              var n = this;
              this.$nextTick((function() {
                t.createSelectorQuery().in(n).select("#sharebtncust").context((function(t) {
                  t && t.context && (n.shareIns = t.context)
                })).exec()
              }))
            },
            methods: {
              download: function() {
                this.downloadVideo()
              },
              downloadVideo: function() {
                var n = this;
                return (0, s.default)(i.default.mark((function e() {
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
                return new Promise((function(i, s) {
                  e.isDownStatus = 1, t.downloadFile({
                    url: n,
                    success: function(n) {
                      200 === n.statusCode ? t.saveVideoToPhotosAlbum({
                        filePath: n.tempFilePath,
                        success: function() {
                          o.isDownStatus = 2, o.downSuccess = !0, t.hideLoading(), i()
                        },
                        fail: function(t) {
                          console.error("保存到相册失败:", t), t.errMsg && t.errMsg.includes("auth deny") ? (o.isDownStatus = 3, s(new Error("AUTH_DENIED"))) : (o.isDownStatus = 4, s(t))
                        }
                      }) : (o.isDownStatus = 4, s(new Error("下载失败，状态码: ".concat(n.statusCode))))
                    },
                    fail: function(t) {
                      o.isDownStatus = 4, console.error("下载文件失败:", t), s(t)
                    }
                  })
                }))
              },
              handleAuthDenied: function() {
                var t = this;
                this.closeDownloadModal(), setTimeout((function() {
                  t.openAuthSetting()
                }), 1e3)
              },
              openAuthSetting: function() {
                t.showModal({
                  title: "提示",
                  content: this.$t("sub.tips.7"),
                  success: function(n) {
                    n.confirm && t.openSetting()
                  }
                })
              },
              getProgressText: function() {
                return 3 == this.isDownStatus ? (this.handleAuthDenied(), this.$t("sub.tips.8")) : 1 == this.isDownStatus ? this.$t("sub.tips.9") : 2 == this.isDownStatus ? this.$t("sub.tips.10") : 4 == this.isDownStatus ? this.$t("sub.tips.11") : void 0
              },
              closeDownloadModal: function() {
                this.showDownloadModal = !1
              },
              handleRecord: function() {
                t.navigateTo({
                  url: "/union/pages/vlog/record"
                })
              },
              handleQueryById: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "ai/wall/vlog/queryById", {
                  id: this.shareId + ""
                }).then((function(n) {
                  console.log("res------------", n), 1 == n.code && (t.videoUrl = n.data.videoUrl, t.posterUrl = n.data.homeImage)
                }))
              }
            }
          };
        n.default = a
      }).call(this, e("df3c").default)
    },
    6974: function(t, n, e) {},
    ad22: function(t, n, e) {
      var o = e("6974");
      e.n(o).a
    },
    c843: function(t, n, e) {
      e.r(n);
      var o = e("e8af"),
        i = e("0397");
      for (var s in i)["default"].indexOf(s) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(s);
      e("ad22");
      var a = e("828b"),
        u = Object(a.a)(i.default, o.b, o.c, !1, null, "fed9c87c", null, !1, o.a, void 0);
      n.default = u.exports
    },
    e8af: function(t, n, e) {
      e.d(n, "b", (function() {
        return i
      })), e.d(n, "c", (function() {
        return s
      })), e.d(n, "a", (function() {
        return o
      }));
      var o = {
          uniNavbar: function() {
            return e.e("components/uni-navbar/uni-navbar").then(e.bind(null, "101a"))
          },
          uPopup: function() {
            return e.e("uview-ui/components/u-popup/u-popup").then(e.bind(null, "39fb"))
          }
        },
        i = function() {
          var t = this,
            n = (t.$createElement, t._self._c, "share" != t.type ? t.$t("sub.button.topRight") : null),
            e = "share" != t.type ? t.$t("sub.button.share") : null,
            o = "share" != t.type ? t.$t("sub.button.download") : null,
            i = t.downSuccess ? t.$t("sub.tips.10") : null;
          t.$mp.data = Object.assign({}, {
            $root: {
              m0: n,
              m1: e,
              m2: o,
              m3: i
            }
          })
        },
        s = []
    },
    ecf9: function(t, n, e) {
      (function(t, n) {
        var o = e("47a9");
        e("5366"), o(e("3240"));
        var i = o(e("c843"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(i.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    }
  },
  [
    ["ecf9", "common/runtime", "common/vendor", "union/common/vendor"]
  ]
]);
