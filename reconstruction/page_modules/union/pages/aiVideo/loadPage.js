// Extracted from union/pages/aiVideo/loadPage.js; webpack module e48b.
// Compiled code for analysis; not an original source file.
module.exports = {
    e48b: function(e, t, i) {
      (function(e) {
        var n = i("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = n(i("7ca3")),
          s = i("0e74");

        function a(e, t) {
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
            t % 2 ? a(Object(i), !0).forEach((function(t) {
              (0, o.default)(e, t, i[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            }))
          }
          return e
        }
        var u = {
          components: {
            progressVue: function() {
              i.e("union/pages/aiVideo/component/progressVue").then(function() {
                return resolve(i("a685"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          data: function() {
            return {
              bgUrl: "",
              showProgress: !1,
              isSubscribeMessage: !0,
              time: null,
              videoStatue: null,
              dataInfos: {},
              options: {},
              minutes: "",
              isHidden: !1,
              flageShowObj: {
                imgFlag: 2,
                hortVideoFlag: 2,
                longVideoFlag: 2
              },
              timerList: []
            }
          },
          onLoad: function(e) {
            if (e.scene) return this.scene = e.scene, void this.getScene(e.scene);
            this.options = JSON.parse(JSON.stringify(e)), console.log(this.options, "this.options"), this.getSubscribe(), this.getInfoData()
          },
          onShow: function() {
            e.hideHomeButton(), this.isHidden && (this.getSubscribe(), this.getInfoData())
          },
          onHide: function() {
            this.isHidden = !0, this.clearAllTimers()
          },
          onUnload: function() {
            this.clearAllTimers()
          },
          methods: {
            clearAllTimers: function() {
              this.time && (clearTimeout(this.time), this.time = null), this.timerList.forEach((function(e) {
                clearTimeout(e)
              })), this.timerList = []
            },
            requestSubscribe: function() {
              var t = this;
              console.log("requestSubscribe"), e.getSetting({
                withSubscriptions: !0,
                success: function(i) {
                  return console.log("获取设置结果:", i), i.subscriptionsSetting.mainSwitch ? i.subscriptionsSetting.itemSettings && "reject" === i.subscriptionsSetting.itemSettings["ouPHBnIddeeeXe_n8maWRUNlV8lPydR7j-zxit3qXlc"] ? (console.log("用户已拒绝该模板消息"), void e.showModal({
                    title: "提示",
                    content: "您已拒绝接收该类型消息，需要重新授权才能接收视频生成通知",
                    success: function(i) {
                      i.confirm && e.openSetting({
                        success: function(e) {
                          console.log("重新授权设置结果:", e), e.authSetting && e.authSetting["scope.subscribeMessage"] && t.requestSubscribeMessage()
                        }
                      })
                    }
                  })) : void t.requestSubscribeMessage() : (console.log("订阅消息总开关关闭，引导用户开启"), void e.showModal({
                    title: "提示",
                    content: "需要开启订阅消息权限才能接收视频生成通知，是否前往设置？",
                    success: function(i) {
                      i.confirm && e.openSetting({
                        success: function(e) {
                          console.log("打开设置页结果:", e), e.authSetting && e.authSetting["scope.subscribeMessage"] && t.requestSubscribeMessage()
                        }
                      })
                    }
                  }))
                },
                fail: function(e) {
                  console.error("获取设置失败:", e), t.$util.showToast("获取权限设置失败")
                }
              })
            },
            requestSubscribeMessage: function() {
              var t = this;
              console.log("开始调用requestSubscribeMessage API"), e.requestSubscribeMessage({
                tmplIds: ["ouPHBnIddeeeXe_n8maWRUNlV8lPydR7j-zxit3qXlc"],
                success: function(e) {
                  console.log("订阅消息请求成功:", e), "accept" === e["ouPHBnIddeeeXe_n8maWRUNlV8lPydR7j-zxit3qXlc"] ? (t.$util.showToast("授权成功！视频生成后会通过微信消息通知您！"), t.setSubscribeStatus()) : "reject" === e["ouPHBnIddeeeXe_n8maWRUNlV8lPydR7j-zxit3qXlc"] ? t.$util.showToast("您拒绝了消息订阅，将无法收到视频生成通知") : "ban" === e["ouPHBnIddeeeXe_n8maWRUNlV8lPydR7j-zxit3qXlc"] && t.$util.showToast("消息订阅功能被禁用，请检查微信设置")
                },
                fail: function(i) {
                  console.log("订阅消息请求失败:", i), 20004 === i.errCode ? e.showModal({
                    title: "提示",
                    content: "订阅消息功能被关闭，请在微信设置中开启订阅消息权限",
                    showCancel: !1,
                    success: function() {
                      e.openSetting({
                        success: function(e) {
                          console.log("打开设置页结果:", e)
                        }
                      })
                    }
                  }) : i.errMsg && i.errMsg.includes("cancel") ? t.$util.showToast("您取消了订阅授权") : t.$util.showToast("订阅请求失败，请重试")
                }
              })
            },
            setSubscribeStatus: function() {
              var t = this;
              if (e.getStorageSync("wxopenid")) {
                var i = {
                  openId: e.getStorageSync("wxopenid"),
                  videoId: this.options.id,
                  status: 1
                };
                this.$uniApi.dataRequestNoLoading("PUT", "program/editBind", i, 0, s.AIVIDEO_API_BASE_URL).then((function(e) {
                  1 === e.code && (t.isSubscribeMessage = !0)
                }))
              } else setTimeout((function() {
                t.setSubscribeStatus()
              }), 300)
            },
            getSubscribe: function() {
              var t = this;
              if (e.getStorageSync("wxopenid")) {
                var i = {
                  openId: e.getStorageSync("wxopenid"),
                  videoId: this.options.id
                };
                this.$uniApi.dataRequestNoLoading("GET", "program/queryBindById", i, 0, s.AIVIDEO_API_BASE_URL).then((function(e) {
                  1 === e.code && (t.isSubscribeMessage = !!e.data.status)
                }))
              } else setTimeout((function() {
                t.getSubscribe()
              }), 300)
            },
            getScene: function(e) {
              var t = this;
              this.$uniApi.getRequestNoLoading("GET", "program/queryById?id=" + e, 0, s.AIVIDEO_API_BASE_URL).then((function(e) {
                if (1 === e.code) {
                  var i = JSON.parse(JSON.stringify(e.data.aiUserVideo));
                  t.options = c(c({}, i), {}, {
                    source: 1
                  }), t.bgUrl = e.data.aiUserVideo.imageUrl, t.bindVideo(), t.getInfoData()
                }
              }))
            },
            bindVideo: function() {
              var t = this;
              if (e.getStorageSync("wxopenid")) {
                var i = {
                  id: this.options.id,
                  openId: e.getStorageSync("wxopenid")
                };
                this.$uniApi.dataRequestNoLoading("POST", "program/bind", i, 0, s.AIVIDEO_API_BASE_URL).then((function(e) {
                  t.getSubscribe()
                }))
              } else setTimeout((function() {
                t.bindVideo()
              }), 300)
            },
            getInfoData: function() {
              var e = this;
              this.clearAllTimers();
              var t = this.options,
                i = t.id,
                n = t.imageName,
                o = t.moldId;
              i && n && o ? this.$uniApi.getRequestNoLoading("GET", "volce/find?id=".concat(i, "&imageName=").concat(n, "&moldId=").concat(o), 0, s.AIVIDEO_API_BASE_URL).then((function(t) {
                if (1 === t.code) {
                  if (e.$nextTick((function() {
                      e.showProgress = !0
                    })), !t.success) return e.$util.showToast(t.msg), void(e.videoStatue = 0);
                  e.dataInfos = t.data, e.bgUrl = e.dataInfos.imageUrl, t.data.video ? (e.videoStatue = 3, e.bgUrl = e.dataInfos.imageUrl) : (2 === t.data.status ? 1 === e.videoStatue ? e.minutes = 2 : 2 == e.videoStatue && (e.minutes = e.minutes - 1 > 0 ? e.minutes - 1 : 0) : 1 === t.data.status && (e.minutes = t.data.minutes), e.videoStatue = t.data.status), e.time = setTimeout((function() {
                    3 == e.videoStatue ? e.clearAllTimers() : e.getInfoData()
                  }), 1e4), e.timerList.push(e.time)
                } else e.videoStatue = 0, e.$$util.showToast(t.msg)
              })).catch((function(t) {
                e.$util.showToast("信息查询失败")
              })) : this.$util.showToast("参数错误")
            },
            openImage: function() {
              e.navigateTo({
                url: "/union/pages/aiVideo/downloadzt?id=" + this.options.id + "&imageName=" + this.options.imageName + "&moldId=" + this.options.moldId
              })
            },
            goHistory: function() {
              this.clearAllTimers(), e.navigateTo({
                url: "/union/pages/aiVideo/historyList"
              })
            }
          }
        };
        t.default = u
      }).call(this, i("df3c").default)
    }
};
