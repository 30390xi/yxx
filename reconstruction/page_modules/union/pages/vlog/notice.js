// Extracted from union/pages/vlog/notice.js; webpack module cbdb.
// Compiled code for analysis; not an original source file.
module.exports = {
    cbdb: function(t, e, i) {
      (function(t) {
        var n = i("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = n(i("7eb4")),
          s = n(i("3b2d")),
          a = n(i("ee10")),
          r = n(i("a9e0")),
          u = n(i("a39d")),
          c = {
            mixins: [r.default],
            data: function() {
              return {
                imageName: "",
                length: 0,
                apiTimer: null,
                loadSize: 0,
                moldId: "",
                pictureList: [],
                resultList: [],
                showLogin: !1,
                currentType: "",
                currentIndex: 1,
                createTime: "",
                humanCount: 0,
                humanImg: "",
                videoId: "",
                generVideoId: "",
                minutes: 0,
                isHasError: !1,
                orderNo: "",
                images: [],
                orderId: "",
                time: 0,
                navBarHeight: 0,
                nickName: ""
              }
            },
            onLoad: function(e) {
              this.navBarHeight = t.getSystemInfoSync().statusBarHeight + 44 + "px", console.log("navBarHeight", this.navBarHeight), u.default.initLang(), this.orderId = e.orderId, this.images = JSON.parse(e.images), console.log("this.images", this.images), this.nickName = e.nickName, this.generVideo()
            },
            onUnload: function() {
              this.apiTimer && clearTimeout(this.apiTimer)
            },
            methods: {
              getOpenid: function() {
                return new Promise((function(e, i) {
                  t.login({
                    success: function(n) {
                      t.request({
                        url: getApp().globalData.requestUrl + "vxapp/getSessionKeyPro/".concat(n.code),
                        method: "GET",
                        success: function(t) {
                          200 === t.data.code ? e(t.data.data) : i(t)
                        },
                        fail: function(t) {
                          i(t)
                        }
                      })
                    }
                  })
                }))
              },
              formatTime: function() {
                var t = new Date,
                  e = function(t) {
                    return String(t).padStart(2, "0")
                  },
                  i = t.getFullYear(),
                  n = e(t.getMonth() + 1),
                  o = e(t.getDate()),
                  s = e(t.getHours()),
                  a = e(t.getMinutes()),
                  r = e(t.getSeconds());
                return "".concat(i, "-").concat(n, "-").concat(o, " ").concat(s, ":").concat(a, ":").concat(r)
              },
              fn: function() {
                var e = this;
                return (0, a.default)(o.default.mark((function i() {
                  var n, s;
                  return o.default.wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                      case 0:
                        return i.prev = 0, i.next = 3, e.$uniApi.dataRequestNoLoading("GET", "ai/wall/vlog/queryStatus", {
                          id: e.generVideoId
                        });
                      case 3:
                        1 == (n = i.sent).code ? (console.log("res--", n), e.time = null === (s = n.data) || void 0 === s ? void 0 : s.waitTime, 2 == n.data.status ? t.redirectTo({
                          url: "/union/pages/vlog/result?videoUrl=".concat(n.data.videoUrl, "&posterUrl=").concat(n.data.homeImage, "&shareId=").concat(e.generVideoId)
                        }) : 3 != n.data.status ? e.apiTimer = setTimeout(e.fn, 3e4) : 3 == n.data.status && (e.$util.showToast("视频合成失败！"), e.isHasError = !0)) : (e.$util.showToast("视频合成失败！"), e.isHasError = !0), i.next = 12;
                        break;
                      case 7:
                        i.prev = 7, i.t0 = i.catch(0), e.apiTimer && clearTimeout(e.apiTimer), e.isHasError = !0, e.$util.showToast("视频合成失败！");
                      case 12:
                      case "end":
                        return i.stop()
                    }
                  }), i, null, [
                    [0, 7]
                  ])
                })))()
              },
              onLoginReturn: function(t) {
                this.showLogin = !1, t ? (this.loadSize = 0, this.resultList = [], this.apiTimer && clearTimeout(this.apiTimer), this.apiTimer = setTimeout(this.fn, 1e3)) : (this.$util.showToast("登录失败"), this.navigateBack())
              },
              handleNotice: function() {
                var e = this;
                t.getSetting({
                  withSubscriptions: !0,
                  success: function(i) {
                    return console.log("获取设置结果:", i), i.subscriptionsSetting.mainSwitch ? i.subscriptionsSetting.itemSettings && "reject" === i.subscriptionsSetting.itemSettings.DPfKt2RbXYclddvGNmQI10q41riJ1hJd21TiYztdQb4 ? (console.log("用户已拒绝该模板消息"), void t.showModal({
                      title: "提示",
                      content: "您已拒绝接收该类型消息，需要重新授权才能接收视频生成通知",
                      success: function(i) {
                        i.confirm && t.openSetting({
                          success: function(t) {
                            console.log("重新授权设置结果:", t), t.authSetting && t.authSetting["scope.subscribeMessage"] && e.requestSubscribeMessage()
                          }
                        })
                      }
                    })) : void e.requestSubscribeMessage() : (console.log("订阅消息总开关关闭，引导用户开启"), void t.showModal({
                      title: "提示",
                      content: "需要开启订阅消息权限才能接收视频生成通知，是否前往设置？",
                      success: function(i) {
                        i.confirm && t.openSetting({
                          success: function(t) {
                            console.log("打开设置页结果:", t), t.authSetting && t.authSetting["scope.subscribeMessage"] && e.requestSubscribeMessage()
                          }
                        })
                      }
                    }))
                  },
                  fail: function(t) {
                    console.error("获取设置失败:", t), e.$util.showToast("获取权限设置失败")
                  }
                })
              },
              requestSubscribeMessage: function() {
                var e = this;
                t.requestSubscribeMessage({
                  tmplIds: ["DPfKt2RbXYclddvGNmQI10q41riJ1hJd21TiYztdQb4"],
                  success: function(i) {
                    "accept" === i.DPfKt2RbXYclddvGNmQI10q41riJ1hJd21TiYztdQb4 ? (e.$util.showToast(e.$t("sub.tips.13")), t.navigateBack({
                      delta: 1
                    })) : "reject" === i.DPfKt2RbXYclddvGNmQI10q41riJ1hJd21TiYztdQb4 ? e.$util.showToast(e.$t("sub.tips.14")) : "ban" === i.DPfKt2RbXYclddvGNmQI10q41riJ1hJd21TiYztdQb4 && e.$util.showToast("消息订阅功能被禁用，请检查微信设置")
                  },
                  fail: function(i) {
                    console.log("订阅消息请求失败:", i), 20004 === i.errCode ? t.showModal({
                      title: "提示",
                      content: "订阅消息功能被关闭，请在微信设置中开启订阅消息权限",
                      showCancel: !1,
                      success: function() {
                        t.openSetting({
                          success: function(t) {
                            console.log("打开设置页结果:", t)
                          }
                        })
                      }
                    }) : i.errMsg && i.errMsg.includes("cancel") ? e.$util.showToast("您取消了订阅授权") : e.$util.showToast("订阅请求失败，请重试")
                  }
                })
              },
              generVideo: function() {
                var e = this;
                console.log("this.images", this.images), console.log((0, s.default)(this.images)), this.$uniApi.dataRequestNoLoading("POST", "ai/wall/vlog/make", {
                  openId: t.getStorageSync("wxopenid"),
                  urls: this.images,
                  moldId: 1,
                  orderId: this.orderId || "",
                  userName: this.nickName || ""
                }).then((function(t) {
                  var i, n;
                  1 == t.code ? (e.generVideoId = (null === (i = t.data) || void 0 === i ? void 0 : i.id) || "", e.time = (null === (n = t.data) || void 0 === n ? void 0 : n.time) || 0, e.apiTimer = setTimeout(e.fn, 1e3)) : (e.isHasError = !0, e.$util.showToast("视频合成失败！"))
                })).catch((function(t) {
                  e.isHasError = !0, e.$util.showToast("视频合成失败！")
                }))
              },
              handleBack: function() {
                t.navigateBack({
                  delta: 1
                })
              }
            }
          };
        e.default = c
      }).call(this, i("df3c").default)
    },
};
