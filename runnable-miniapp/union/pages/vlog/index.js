require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/vlog/index"], {
    2236: function(e, t, n) {
      (function(e, t) {
        var o = n("47a9");
        n("5366"), o(n("3240"));
        var i = o(n("da40"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "3baf": function(e, t, n) {
      (function(e) {
        var o = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = o(n("7eb4")),
          a = o(n("ee10")),
          r = o(n("7ca3")),
          s = o(n("a9e0")),
          u = o(n("a39d")),
          c = {
            components: {
              videoPlay: function() {
                n.e("union/pages/vlog/videoPlay").then(function() {
                  return resolve(n("f4fd"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            mixins: [s.default],
            data: function() {
              var e;
              return e = {
                title: "VLOG",
                danmuList: [],
                Min_IMAGE_COUNT: 3,
                MAX_IMAGE_COUNT: 5,
                selectedImages: [],
                showVideo: !1,
                curPoster: "https://eshopfile.zhiyousx.com/176705872758677284.png",
                currentVideo: "https://eshopfile.zhiyousx.com/2025122916003176486.mp4",
                loading: !1,
                isFree: !0,
                vlogVideoCtx: null,
                videoCanPlay: !1,
                videoList: [{
                  src: "https://eshopfile.zhiyousx.com/2025122916003176486.mp4",
                  poster: "https://eshopfile.zhiyousx.com/176705872758677284.png",
                  isPlaying: !1
                }, {
                  src: "https://eshopfile.zhiyousx.com/2025122916003176486.mp4",
                  poster: "https://eshopfile.zhiyousx.com/176705872758677284.png",
                  isPlaying: !1
                }],
                videoContexts: [],
                currentIndex: 0
              }, (0, r.default)(e, "loading", !1), (0, r.default)(e, "currentTemp", {}), (0, r.default)(e, "showPrice", !1), (0, r.default)(e, "showNickname", !1), (0, r.default)(e, "nbFrontColor", "#ffffff"), (0, r.default)(e, "nickName", ""), (0, r.default)(e, "originTop", "0"), (0, r.default)(e, "nicknameTop", "40%"), (0, r.default)(e, "resetLoad", !1), e
            },
            onLoad: function() {
              console.log("onLoad", "33"), u.default.initLang(), this.handleQuery(), e.getStorageSync("userInfor") && console.log(e.getStorageSync("userInfor").memberId)
            },
            onShow: function() {
              u.default.initLang(), this.handleQuery()
            },
            methods: {
              onNicknameBlur: function(e) {
                this.originTop = "0", this.nicknameTop = "40%", this.nickName && (this.selectImages(), this.showNickname = !1)
              },
              onNicknameFocus: function(t) {
                var n = this;
                this.originTop = "-30%", this.nicknameTop = "25%", t.preventDefault(), setTimeout((function() {
                  e.createSelectorQuery().in(n).select(".weui-input").fields({
                    node: !0
                  }).exec((function(e) {
                    var t;
                    null !== (t = e[0]) && void 0 !== t && t.node && e[0].node.focus()
                  }))
                }), 500)
              },
              handleBtnClick: function() {
                var t = this;
                return (0, a.default)(i.default.mark((function n() {
                  return i.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, t.handlQueue();
                      case 2:
                        if (n.sent) {
                          n.next = 6;
                          break
                        }
                        return e.showToast({
                          title: t.$t("sub.tips.40"),
                          icon: "none"
                        }), n.abrupt("return");
                      case 6:
                        if (0 != t.currentTemp.status) {
                          n.next = 10;
                          break
                        }
                        return t.nickName = "", t.showNickname = !0, n.abrupt("return");
                      case 10:
                        t.$util.isLogin() && t.selectImages();
                      case 11:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              selectImages: function() {
                var t = this;
                e.chooseMedia({
                  count: this.MAX_IMAGE_COUNT,
                  mediaType: ["image"],
                  sizeType: ["original"],
                  sourceType: ["album"],
                  success: function() {
                    var n = (0, a.default)(i.default.mark((function n(o) {
                      return i.default.wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            console.log(o), setTimeout((0, a.default)(i.default.mark((function n() {
                              return i.default.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return e.showLoading({
                                      title: t.$t("sub.tips.17"),
                                      mask: !0
                                    }), n.prev = 1, n.delegateYield(i.default.mark((function n() {
                                      var a, r, s, u, c;
                                      return i.default.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                          case 0:
                                            if (!(o.tempFiles.length < t.Min_IMAGE_COUNT)) {
                                              n.next = 2;
                                              break
                                            }
                                            throw new Error(t.$t("sub.tips.30"));
                                          case 2:
                                            a = i.default.mark((function n(a) {
                                              var r;
                                              return i.default.wrap((function(n) {
                                                for (;;) switch (n.prev = n.next) {
                                                  case 0:
                                                    if (!((r = o.tempFiles[a]).size > 10485760)) {
                                                      n.next = 3;
                                                      break
                                                    }
                                                    throw new Error("".concat(t.$t("sub.tips.26"), " ").concat(a + 1, " ").concat(t.$t("sub.tips.25")));
                                                  case 3:
                                                    return n.next = 5, new Promise((function(n, o) {
                                                      e.getImageInfo({
                                                        src: r.tempFilePath,
                                                        success: function(e) {
                                                          e.width < 300 ? o(new Error(t.$t("sub.tips.26") + "".concat(a + 1) + t.$t("sub.tips.33"))) : n(e)
                                                        },
                                                        fail: function(e) {
                                                          o(new Error(t.$t("sub.tips.26") + "".concat(a + 1).concat(t.$t("sub.tips.36"), ":").concat(e.errMsg)))
                                                        }
                                                      })
                                                    }));
                                                  case 5:
                                                    if (n.sent) {
                                                      n.next = 8;
                                                      break
                                                    }
                                                    throw new Error("".concat(t.$t("sub.tips.26"), " ").concat(a + 1, " ").concat(t.$t("sub.tips.37")));
                                                  case 8:
                                                  case "end":
                                                    return n.stop()
                                                }
                                              }), n)
                                            })), r = 0;
                                          case 6:
                                            if (!(r < o.tempFiles.length)) {
                                              n.next = 11;
                                              break
                                            }
                                            return n.delegateYield(a(r), "t0", 8);
                                          case 8:
                                            r++, n.next = 6;
                                            break;
                                          case 11:
                                            s = [], u = i.default.mark((function n(a) {
                                              var r, u, c, l;
                                              return i.default.wrap((function(n) {
                                                for (;;) switch (n.prev = n.next) {
                                                  case 0:
                                                    return u = o.tempFiles[a], n.next = 3, new Promise((function(n, o) {
                                                      e.uploadFile({
                                                        url: getApp().globalData.requestUrl + "base/common/file/noLimitUpload",
                                                        filePath: u.tempFilePath,
                                                        name: "file",
                                                        formData: {
                                                          type: "image"
                                                        },
                                                        success: function(e) {
                                                          return n(e)
                                                        },
                                                        fail: function(e) {
                                                          return o(new Error("".concat(t.$t("sub.tips.26"), " ").concat(a + 1, " ").concat(t.$t("sub.tips.38"), ":").concat(e.errMsg)))
                                                        }
                                                      })
                                                    }));
                                                  case 3:
                                                    if (c = n.sent, 1 === (l = JSON.parse(c.data)).code && null !== (r = l.data) && void 0 !== r && r.fileUrl) {
                                                      n.next = 7;
                                                      break
                                                    }
                                                    throw new Error("".concat(t.$t("sub.tips.26"), " ").concat(a + 1, " ").concat(t.$t("sub.tips.38")));
                                                  case 7:
                                                    s.push(l.data.fileUrl);
                                                  case 8:
                                                  case "end":
                                                    return n.stop()
                                                }
                                              }), n)
                                            })), c = 0;
                                          case 14:
                                            if (!(c < o.tempFiles.length)) {
                                              n.next = 19;
                                              break
                                            }
                                            return n.delegateYield(u(c), "t1", 16);
                                          case 16:
                                            c++, n.next = 14;
                                            break;
                                          case 19:
                                            t.selectedImages = s, 0 == t.currentTemp.status ? t.generateVideo() : t.showPrice = !0;
                                          case 21:
                                          case "end":
                                            return n.stop()
                                        }
                                      }), n)
                                    }))(), "t0", 3);
                                  case 3:
                                    n.next = 10;
                                    break;
                                  case 5:
                                    n.prev = 5, n.t1 = n.catch(1), console.error("失败原因:", n.t1.message), e.hideLoading(), setTimeout((function() {
                                      e.showToast({
                                        title: n.t1.message,
                                        icon: "none",
                                        duration: 3e3,
                                        mask: !1
                                      })
                                    }), 100);
                                  case 10:
                                    return n.prev = 10, e.hideLoading(), n.finish(10);
                                  case 13:
                                  case "end":
                                    return n.stop()
                                }
                              }), n, null, [
                                [1, 5, 10, 13]
                              ])
                            }))), 200);
                          case 2:
                          case "end":
                            return n.stop()
                        }
                      }), n)
                    })));
                    return function(e) {
                      return n.apply(this, arguments)
                    }
                  }(),
                  fail: function(e) {
                    console.error("选择图片失败:", e), setTimeout((function() {
                      t.$util.showToast(t.$t("sub.tips.39"))
                    }), 100)
                  }
                })
              },
              generateVideo: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                e.navigateTo({
                  url: "/union/pages/vlog/notice?images=" + JSON.stringify(this.selectedImages) + "&orderId=" + t + "&nickName=" + this.nickName
                })
              },
              handlePay: function() {
                var t = this;
                e.showLoading({
                  title: this.$t("sub.tips.18")
                }), this.loading = !0, this.$uniApi.dataRequestNoLoading("POST", "ai/wall/vlog/pay ", {
                  openId: e.getStorageSync("wxopenid"),
                  memberId: e.getStorageSync("userInfor").memberId,
                  amount: t.currentTemp.price
                }).then((function(n) {
                  if (1 == n.code) {
                    var o = n.data;
                    e.hideLoading(), e.requestPayment({
                      provider: "wxpay",
                      timeStamp: o.timeStamp,
                      nonceStr: o.nonceStr,
                      package: "prepay_id=".concat(o.prepayid),
                      signType: o.signType,
                      paySign: o.pay_sign,
                      success: function(n) {
                        console.log(n), t.loading = !1, e.hideLoading(), t.showPrice = !1, t.generateVideo(o.orderId)
                      },
                      fail: function(n) {
                        e.hideLoading(), t.loading = !1, t.$util.showToast("支付失败"), console.log("fail:" + JSON.stringify(n))
                      }
                    })
                  } else t.$util.showToast(n.msg), e.hideLoading()
                }))
              },
              onSwiperChange: function(e) {
                this.currentIndex = e.detail.current
              },
              handleDotClick: function(e) {
                this.currentIndex = e
              },
              handlePlay: function(e) {
                console.log(e), this.currentVideo = e.videoUrl, this.showVideo = !0
              },
              handleQuery: function() {
                var t = this;
                e.showLoading({
                  title: this.$t("sub.tips.19"),
                  mask: !0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)"
                }), this.$uniApi.dataRequestNoLoading("GET", "ai/wall/vlog/moldList", {
                  openId: e.getStorageSync("wxopenid")
                }).then((function(n) {
                  1 == n.code && (t.videoList = n.data, t.currentTemp = t.videoList[0], t.resetLoad && e.hideLoading())
                }))
              },
              handleRecord: function() {
                e.navigateTo({
                  url: "/union/pages/vlog/record",
                  fail: function(t) {
                    console.error("跳转失败：", t), e.showToast({
                      title: "页面跳转失败",
                      icon: "none"
                    })
                  }
                })
              },
              onImageLoad: function(t) {
                this.resetLoad = !0, e.hideLoading()
              },
              onImageError: function(t) {
                e.hideLoading(), this.resetLoad = !1
              },
              handlQueue: function() {
                return this.$uniApi.dataRequestNoLoading("GET", "ai/wall/vlog/queryQueue", {}).then((function(e) {
                  return 1 == e.code && e.data
                }))
              }
            }
          };
        t.default = c
      }).call(this, n("df3c").default)
    },
    "5b43": function(e, t, n) {
      var o = n("ff59");
      n.n(o).a
    },
    "73a3": function(e, t, n) {
      n.d(t, "b", (function() {
        return i
      })), n.d(t, "c", (function() {
        return a
      })), n.d(t, "a", (function() {
        return o
      }));
      var o = {
          uniNavbar: function() {
            return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
          },
          uPopup: function() {
            return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null, "39fb"))
          }
        },
        i = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.$t("sub.button.topRight")),
            n = e.$t("sub.button.main"),
            o = 0 == e.currentTemp.status ? e.$t("sub.tips.5") : null,
            i = 0 != e.currentTemp.status ? e.$t("sub.tips.42") : null,
            a = e.showPrice ? e.$t("sub.tips.15") : null,
            r = e.showPrice ? e.$t("sub.tips.16") : null,
            s = e.showPrice ? e.$t("sub.button.pay") : null,
            u = e.showNickname ? e.$t("sub.tips.31") : null,
            c = e.showNickname ? e.$t("sub.tips.32") : null;
          e._isMounted || (e.e0 = function(e) {
            return e.preventDefault()
          }), e.$mp.data = Object.assign({}, {
            $root: {
              m0: t,
              m1: n,
              m2: o,
              m3: i,
              m4: a,
              m5: r,
              m6: s,
              m7: u,
              m8: c
            }
          })
        },
        a = []
    },
    8134: function(e, t, n) {
      n.r(t);
      var o = n("3baf"),
        i = n.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      t.default = i.a
    },
    da40: function(e, t, n) {
      n.r(t);
      var o = n("73a3"),
        i = n("8134");
      for (var a in i)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(a);
      n("5b43");
      var r = n("828b"),
        s = Object(r.a)(i.default, o.b, o.c, !1, null, "59ed2806", null, !1, o.a, void 0);
      t.default = s.exports
    },
    ff59: function(e, t, n) {}
  },
  [
    ["2236", "common/runtime", "common/vendor", "union/common/vendor"]
  ]
]);
