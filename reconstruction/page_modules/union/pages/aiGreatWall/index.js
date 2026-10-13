// Extracted from union/pages/aiGreatWall/index.js; webpack module "40c8".
// Compiled code for analysis; not an original source file.
module.exports = {
    "40c8": function(t, e, i) {
      (function(t, n) {
        var a = i("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var s = a(i("af34")),
          o = a(i("7ca3")),
          c = a(i("a39d"));

        function r(t, e) {
          var i = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.push.apply(i, n)
          }
          return i
        }

        function l(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(i), !0).forEach((function(e) {
              (0, o.default)(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
          }
          return t
        }
        var h = i("a6b5"),
          u = {
            components: {
              zPaging: function() {
                Promise.all([i.e("common/vendor"), i.e("union/common/vendor"), i.e("union/components1/z-paging/z-paging")]).then(function() {
                  return resolve(i("a7ee"))
                }.bind(null, i)).catch(i.oe)
              },
              chatInputBar: function() {
                i.e("union/components1/chat-input-bar/chat-input-bar-greatWall").then(function() {
                  return resolve(i("1297"))
                }.bind(null, i)).catch(i.oe)
              },
              chatItem: function() {
                i.e("union/components1/chat-item/chat-item-greatWall").then(function() {
                  return resolve(i("e3d2"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            computed: {
              currentQuestionList: function() {
                if (this.guessQuestion.length <= 3) return this.guessQuestion;
                for (var t = 3 * this.currentQuestionIndex, e = [], i = 0; i < 3; i++) {
                  var n = (t + i) % this.guessQuestion.length;
                  e.push(this.guessQuestion[n])
                }
                return e
              },
              questionSlides: function() {
                var t = Array.isArray(this.guessQuestion) ? this.guessQuestion : [],
                  e = [];
                if (0 === t.length) return e;
                for (var i = Math.ceil(t.length / 3), n = 0; n < i; n++) {
                  for (var a = [], s = 0; s < 3; s++) {
                    var o = 3 * n + s;
                    if (o < t.length) a.push(t[o]);
                    else {
                      var c = t[o % t.length];
                      a.push(l(l({}, c), {}, {
                        id: "".concat(c.id, "-pad-").concat(n, "-").concat(s)
                      }))
                    }
                  }
                  e.push(a)
                }
                return e
              }
            },
            data: function() {
              return {
                isHide: !1,
                isIos: "ios" === t.getSystemInfoSync().platform,
                dataList: [],
                pushingProgress: !0,
                pushingProgressShow: !0,
                currrentId: "",
                newVal: "",
                spotDetail: {},
                headerHeight: 0,
                historyList: [],
                hasHistory: !1,
                flowId: "",
                dataInfosList: [],
                stratSet: !1,
                task: null,
                typeVideo: 0,
                timerList: [],
                index: 0,
                hoveImg: !1,
                hoveImgList: [],
                hoveImgListUrl: [],
                character: null,
                timeNetwork: null,
                newValCopy: "",
                currentIndex: 0,
                currentContent: "",
                sendState: !1,
                isNetworkAnomaly: !1,
                delayBtn: !0,
                partialJson: "",
                WshowHide: !1,
                audioQueue: [],
                audioContext: null,
                isPlaying: !1,
                streamFinished: !0,
                lang: "zh",
                location: null,
                guessQuestion: [],
                bottomQuestion: [],
                noticeList: [],
                currentNoticeIndex: 0,
                noticeInterval: null,
                currentQuestionIndex: 0,
                questionInterval: null,
                questionSwiperCurrent: 0,
                showNoticeDetailPopup: !1,
                currentNotice: null,
                needSubscribe: !1,
                showSubscribeModal: !1,
                showToastModal: !1,
                spotCodes: [{
                  code: "P001",
                  name: "演出",
                  enName: "performance"
                }, {
                  code: "S001",
                  name: "商店",
                  enName: "shop"
                }, {
                  code: "S002",
                  name: "景点",
                  enName: "attraction"
                }, {
                  code: "F001",
                  name: "美食",
                  enName: "food"
                }, {
                  code: "W001",
                  name: "卫生间",
                  enName: "toilet"
                }, {
                  code: "V001",
                  name: "游客中心",
                  enName: "visitor venter"
                }, {
                  code: "P002",
                  name: "停车场",
                  enName: "parking lot"
                }, {
                  code: "L001",
                  name: "灯组",
                  enName: "light group"
                }, {
                  code: "E001",
                  name: "出入口",
                  enName: "entrance/exit"
                }],
                spotLocation: {
                  leftTopLongitude: 108.966992,
                  leftTopLatitude: 34.252474,
                  rightBottomLongitude: 108.932271,
                  rightBottomLatitude: 34.250639
                },
                locationState: "none",
                lineData: {
                  title: "",
                  line: ""
                },
                flowData: null,
                baseUrl: "ai/",
                langBtnTopPx: 0,
                langBtnStartY: 0,
                langBtnStartTopPx: 0,
                langBtnTouchStartTime: 0,
                langBtnMovedDistance: 0,
                draggingLangBtn: !1,
                windowHeight: t.getSystemInfoSync().windowHeight,
                locationTimer: null,
                showLineCard: !1,
                showLineCardTimer: null
              }
            },
            onShareAppMessage: function() {
              var t = "/union/pages/aiGreatWall/index?lang=".concat(this.lang);
              return {
                title: "AI助手小七陪你畅游灯会",
                imageUrl: "https://eshopfile.zhiyousx.com/176899305197364629.png",
                path: this.$util.setShareUrl(t)
              }
            },
            onLoad: function(e) {
              var i = this;
              t.setStorageSync("subLang", "zh-CN"), c.default.initLang();
              var a = t.getSystemInfoSync();
              if ("wxMsg" == e.source && (this.currentNotice = {
                  title: "温馨提示：灯会开灯啦！您的门票支持当日二次入园。",
                  content: "需本人在购票当日完成首次检票入园后，于景区规定时间内返回使用；超出当日营业时间或超时返回，将无法再次入园。"
                }, this.showNoticeDetailPopup = !0), e.lang) {
                this.lang = e.lang;
                var s = "zh" == this.lang ? "zh-CN" : "en-US";
                t.setStorageSync("subLang", s), c.default.initLang()
              }
              "android" === a.platform ? this.isIos = !1 : "ios" === a.platform ? this.isIos = !0 : this.isIos = !1, this.langBtnTopPx = this.$util ? this.$util.rpxToPx(400) : 400;
              var o = n.getMenuButtonBoundingClientRect();
              this.headerHeight = o ? o.bottom + 5 : 60, t.getStorageSync("wxopenid") ? this.createSession() : this.getOpenId().then((function(e) {
                t.setStorageSync("unionid", e.unionid), t.setStorageSync("wxopenid", e.openid), i.createSession()
              })), this.getDeafultData()
            },
            onUnload: function() {
              this.audioContext && this.audioContext.destroy(), this.locationTimer && clearTimeout(this.locationTimer), this.stopSpeak(), this.isPlaying = !1, this.clearAudioCache(), this.clearNoticeRotation(), this.clearQuestionRotation(), this.character && clearTimeout(this.character);
              try {
                var t = n.getFileSystemManager(),
                  e = n.env.USER_DATA_PATH;
                t.readdirSync(e).forEach((function(i) {
                  var n = "".concat(e, "/").concat(i);
                  try {
                    t.statSync(n).isFile() && (i.includes("audio") || i.includes("record") || i.endsWith(".mp3") || i.endsWith(".wav")) && (t.unlinkSync(n), console.log("删除录音临时文件:", n))
                  } catch (t) {
                    console.error("检查文件时出错:", t)
                  }
                }))
              } catch (t) {
                console.error("清理录音临时文件时出错:", t)
              }
            },
            onHide: function() {
              this.stopSpeak(), this.isPlaying = !1, this.clearAudioCache(), this.clearNoticeRotation(), this.clearQuestionRotation(), this.character && (clearTimeout(this.character), this.character = null)
            },
            methods: {
              onLangBtnTouchStart: function(t) {
                var e = t && t.touches && t.touches[0];
                e && (this.draggingLangBtn = !1, this.langBtnMovedDistance = 0, this.langBtnTouchStartTime = Date.now(), this.langBtnStartY = e.clientY, this.langBtnStartTopPx = this.langBtnTopPx)
              },
              onLangBtnTouchMove: function(e) {
                var i = e && e.touches && e.touches[0];
                if (i) {
                  var n = i.clientY - this.langBtnStartY;
                  this.langBtnMovedDistance = Math.abs(n), this.langBtnMovedDistance > 6 && (this.draggingLangBtn = !0);
                  var a = this.langBtnStartTopPx + n,
                    s = this.$util ? this.$util.rpxToPx(64) : 64,
                    o = Math.max(10, (this.windowHeight || t.getSystemInfoSync().windowHeight) - s - 10);
                  a < 10 && (a = 10), a > o && (a = o), this.langBtnTopPx = a
                }
              },
              onLangBtnTouchEnd: function() {
                var t = Date.now() - this.langBtnTouchStartTime,
                  e = this.langBtnMovedDistance;
                !this.draggingLangBtn && e <= 8 && t < 300 && this.changeLang(), this.draggingLangBtn = !1
              },
              showToastPop: function() {
                this.showToastModal = !0
              },
              closeToastModal: function() {
                this.showToastModal = !1
              },
              callPhone: function(e) {
                e && t.makePhoneCall({
                  phoneNumber: e
                })
              },
              showSubscribeAuthModal: function() {
                this.showSubscribeModal = !0
              },
              closeSubscribeModal: function(t) {
                this.showSubscribeModal = !1, 2 == t && this.setSubscribeStatus(2)
              },
              handleSubscribeAuth: function() {
                this.closeSubscribeModal(), this.requestSubscribe()
              },
              getDeafultData: function() {
                this.getSpotCoordinates(), this.getDefinedQuestion(), this.getNoticeList(), this.getFlowData()
              },
              getSpotCoordinates: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotMapTag/getScenicSpotMapBaseVo?mapId=2026", {}).then((function(e) {
                  1 === e.code && e.data && e.data.leftTopLongitude && e.data.leftTopLatitude && e.data.rightBottomLongitude && e.data.rightBottomLatitude && (t.spotLocation = {
                    leftTopLongitude: Number(e.data.leftTopLongitude),
                    leftTopLatitude: Number(e.data.leftTopLatitude),
                    rightBottomLongitude: Number(e.data.rightBottomLongitude),
                    rightBottomLatitude: Number(e.data.rightBottomLatitude)
                  })
                })).finally((function() {
                  t.getLocation()
                }))
              },
              getStatus: function(t) {
                return "舒适" == t ? "zh" == this.lang ? "客流量较少" : "Low visitor flow" : "拥挤" == t ? "zh" == this.lang ? "客流量较多" : "High visitor flow" : "爆满" == t ? "zh" == this.lang ? "客流量爆满" : "Full visitor flow" : void 0
              },
              getFlowData: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("get", this.baseUrl + "passeneger/queryData", {
                  lang: this.lang
                }).then((function(e) {
                  1 === e.code && (t.flowData = e.data, t.flowData.pointDataVOList.forEach((function(e) {
                    e.inDoor === t.flowData.entrance && (t.flowData.status = e.status)
                  })))
                }))
              },
              toNavigation: function(e) {
                var i = "zh" === this.lang ? "chinese" : "english",
                  n = "langType+".concat(i);
                console.log(e, "data"), "state" === this.locationState && e && e.lineId && (n += "&lineById=".concat(e.lineId));
                var a = "".concat("https://eshop.zhiyousx.com/dsmall-admin-ui/h5/wallGuide2026.html", "*").concat(n);
                console.log(a, "fullUrl"), this.$eventAnalyse.analyse({
                  eventTag: "aiGreatWall_guide_click",
                  eventName: "城墙客服点击进入导览",
                  eventParams: {
                    pagePath: "/pages/webpage/webpage?url=".concat(a)
                  }
                }), t.navigateTo({
                  url: "/pages/webpage/webpage?url=".concat(a)
                })
              },
              getPostMessage: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("get", this.baseUrl + "wall/subscribe/status", {
                  openId: t.getStorageSync("wxopenid")
                }).then((function(t) {
                  1 === t.code && !1 === t.data && (e.showSubscribeAuthModal(), console.log("需要订阅消息，显示授权弹框"))
                }))
              },
              requestSubscribe: function() {
                var e = this;
                t.getSetting({
                  withSubscriptions: !0,
                  success: function(i) {
                    return console.log("获取设置结果:", i), i.subscriptionsSetting.mainSwitch ? i.subscriptionsSetting.itemSettings && "reject" === i.subscriptionsSetting.itemSettings.JKcsY5GZ9oyAv95qaAceciVMtLTffbAhJLU_3twsuu8 ? (console.log("用户已拒绝该模板消息"), void t.showModal({
                      title: "提示",
                      content: "您已拒绝接收该类型消息，需要重新授权才能接收通知",
                      success: function(i) {
                        i.confirm && t.openSetting({
                          success: function(t) {
                            console.log("重新授权设置结果:", t), t.authSetting && t.authSetting["scope.subscribeMessage"] && e.requestSubscribeMessage()
                          }
                        })
                      }
                    })) : void e.requestSubscribeMessage() : (console.log("订阅消息总开关关闭，引导用户开启"), void t.showModal({
                      title: "提示",
                      content: "需要开启订阅消息权限才能接收通知，是否前往设置？",
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
                console.log("开始调用requestSubscribeMessage API"), t.requestSubscribeMessage({
                  tmplIds: ["JKcsY5GZ9oyAv95qaAceciVMtLTffbAhJLU_3twsuu8"],
                  success: function(t) {
                    console.log("订阅消息请求成功:", t), "accept" === t.JKcsY5GZ9oyAv95qaAceciVMtLTffbAhJLU_3twsuu8 ? (e.$util.showToast("授权成功！"), e.setSubscribeStatus(), e.needSubscribe = !1) : "reject" === t.JKcsY5GZ9oyAv95qaAceciVMtLTffbAhJLU_3twsuu8 ? (e.$util.showToast("您拒绝了消息订阅，将无法收到二次入园通知"), e.setSubscribeStatus(2)) : "ban" === t.JKcsY5GZ9oyAv95qaAceciVMtLTffbAhJLU_3twsuu8 && e.$util.showToast("消息订阅功能被禁用，请检查微信设置")
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
              setSubscribeStatus: function(e) {
                this.$uniApi.dataRequestNoLoading("post", this.baseUrl + "wall/subscribe/add", {
                  openId: t.getStorageSync("wxopenid"),
                  status: e || 0
                }).then((function(t) {
                  t.code
                }))
              },
              getLocation: function() {
                var e = this;
                n.getLocation({
                  type: "gcj02",
                  success: function(i) {
                    e.location = {
                      latitude: i.latitude,
                      longitude: i.longitude
                    }, t.setStorageSync("location", e.location), console.log(e.location, "获取位置成功"), Number(e.location.longitude) > e.spotLocation.rightBottomLongitude - 1e-4 && Number(e.location.longitude) < Number(e.spotLocation.leftTopLongitude) + 1e-4 && Number(e.location.latitude) > e.spotLocation.rightBottomLatitude - 1e-4 && Number(e.location.latitude) < Number(e.spotLocation.leftTopLatitude) + 1e-4 ? (e.getLine(), t.getStorageSync("wxopenid") ? e.getPostMessage() : e.getOpenId().then((function(i) {
                      t.setStorageSync("unionid", i.unionid), t.setStorageSync("wxopenid", i.openid), e.getPostMessage()
                    }))) : (e.locationState = "none", console.log("当前位置不在景点范围内"), e.lineData = {
                      title: "zh" === e.lang ? "还没到城墙，也可以先看看游览路线，顺便看看周边有哪些好去处。" : "Before reaching the city wall, you can also check out the sightseeing routes and see what other great places are nearby.",
                      line: "zh" === e.lang ? "进入导览一键查看推荐游览路线，行程心中有数，逛城墙更从容；在客服页面也可提前查询周边游、拍照攻略和演出节目单等。" : "Enter the guide to instantly view recommended travel routes, plan your itinerary with confidence, and enjoy the city walls at a leisurely pace; you can also check nearby tours, photography guides, and performance schedules in advance on the customer service page"
                    }, e.showLineCard || setTimeout((function() {
                      e.showLineCard = !0
                    }), 0)), e.locationTimer && clearTimeout(e.locationTimer), e.locationTimer = setTimeout((function() {
                      e.getLocation()
                    }), 15e3)
                  },
                  fail: function(t) {
                    console.error("获取位置失败:", t)
                  },
                  complete: function() {}
                })
              },
              getLine: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("get", this.baseUrl + "wall/content/scope?location=" + this.location.longitude + "," + this.location.latitude + "&language=" + this.lang, {}).then((function(e) {
                  1 === e.code && (e.data.links ? (t.locationState = "state", t.lineData = {
                    title: e.data.content,
                    line: e.data.links
                  }) : (t.locationState = "wall", t.lineData = {
                    title: "zh" === t.lang ? "检测到您正在城墙内" : "You are inside the wall",
                    line: e.data.content
                  }), t.showLineCard || setTimeout((function() {
                    t.showLineCard = !0
                  }), 0))
                }))
              },
              getOpenId: function() {
                return new Promise((function(e, i) {
                  t.login({
                    success: function(n) {
                      t.request({
                        url: getApp().globalData.requestUrl + "manager/app/v1/wxPopular/getSessionKeyPro/".concat(n.code),
                        method: "GET",
                        success: function(t) {
                          1 === t.data.code ? e(t.data.data) : i(t)
                        },
                        fail: function(t) {
                          i(t)
                        }
                      })
                    }
                  })
                }))
              },
              createSession: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("post", this.baseUrl + "aiEscort/session/create", {
                  bussType: 1,
                  openId: t.getStorageSync("wxopenid"),
                  title: h.format(new Date, "yyyy-MM-dd hh:mm:ss:S")
                }).then((function(t) {
                  1 === t.code && (e.flowId = t.data)
                }))
              },
              toVlog: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "aiGreatWall_vlog_click",
                  eventName: "城墙客服点击进入vlog",
                  eventParams: {
                    pagePath: "/union/pages/vlog/index"
                  }
                }), t.navigateTo({
                  url: "/union/pages/vlog/index"
                })
              },
              toPose: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "aiGreatWall_pose_click",
                  eventName: "城墙客服点击进入拍照攻略",
                  eventParams: {}
                }), t.navigateTo({
                  url: "/pages/webpage/webpage?url=https://eshop.zhiyousx.com/dsmall-admin-ui/h5/photoPose.html*lang+".concat(this.lang)
                })
              },
              initQuestionRotation: function() {
                var t = this;
                this.clearQuestionRotation(), this.guessQuestion.length > 3 && (this.questionInterval = setInterval((function() {
                  t.currentQuestionIndex = (t.currentQuestionIndex + 1) % Math.ceil(t.guessQuestion.length / 3)
                }), 5e3))
              },
              clearQuestionRotation: function() {
                this.questionInterval && (clearInterval(this.questionInterval), this.questionInterval = null, this.currentQuestionIndex = 0)
              },
              getDefinedQuestion: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("get", this.baseUrl + "wallRecommend/list", {
                  languageCode: this.lang,
                  scenicType: 0
                }).then((function(e) {
                  1 === e.code && (e.data && e.data.length ? (t.guessQuestion = e.data.filter((function(t) {
                    return 1 === t.type && 0 === t.category
                  })), t.bottomQuestion = e.data.filter((function(t) {
                    return 2 === t.type
                  })), t.questionSwiperCurrent = 0) : (t.guessQuestion = [], t.bottomQuestion = [], t.clearQuestionRotation()))
                }))
              },
              showNoticeDetail: function(t) {
                this.currentNotice = t, this.showNoticeDetailPopup = !0
              },
              closeNoticeDetail: function() {
                this.showNoticeDetailPopup = !1, this.currentNotice = null
              },
              changeLang: function() {
                if (!this.isPlaying && this.pushingProgress) {
                  this.lang = "zh" === this.lang ? "en" : "zh";
                  var e = "zh" == this.lang ? "zh-CN" : "en-US";
                  t.setStorageSync("subLang", e), c.default.switchLang(e), this.getDeafultData(), this.dataList = []
                } else this.$util.showToast("zh" === this.lang ? "正在回答，请稍候" : "Answering, please wait")
              },
              scrollToTop: function() {
                this.$refs.paging.scrollToTop()
              },
              sendDataQuestion: function() {
                var t = this;
                this.pushingProgress = !1, this.$refs.paging.scrollToBottom(), this.$eventAnalyse.analyse({
                  eventTag: "aiGreatWall_flow_click",
                  eventName: "城墙客服点击客流数据",
                  eventParams: {}
                }), setTimeout((function() {
                  t.dataList.unshift({
                    content: "zh" === t.lang ? "各登城口客流情况" : "Flow of each entry gate",
                    type: 1,
                    state: 1,
                    end: !0,
                    name: "ai",
                    list: [],
                    id: (new Date).getTime()
                  }), t.dataList.unshift({
                    content: " ",
                    content1: "",
                    type: 0,
                    state: 0,
                    end: !1,
                    name: "ai",
                    isMe: !1,
                    list: [],
                    warningData: t.flowData,
                    id: Date.now() + Math.floor(1e3 * Math.random())
                  }), t.pushingProgress = !0, t.$refs.paging.scrollToBottom()
                }), 300)
              },
              doSend: function(t, e) {
                var i = this;
                this.pushingProgress = !1, this.stratSet = !0, this.isPlaying = !1, this.audioQueue = [], this.$refs.paging.scrollToBottom(), this.flowId ? setTimeout((function() {
                  if (e || i.dataList.unshift({
                      content: t,
                      type: 1,
                      state: 1,
                      end: !0,
                      name: "ai",
                      list: [],
                      id: (new Date).getTime()
                    }), i.dataList.unshift({
                      content: "",
                      content1: "",
                      type: 0,
                      state: 0,
                      end: !1,
                      name: "ai",
                      isMe: !1,
                      list: [],
                      id: Date.now() + Math.floor(1e3 * Math.random())
                    }), i.currrentId = i.dataList[0].id, e && e.id) {
                    var n = e.exclusive;
                    i.toSend(n)
                  } else i.toSend(t);
                  i.$refs.paging.scrollToBottom()
                }), 300) : this.$util.showToast("zh" === this.lang ? "会话创建失败，请稍后再试" : "Session creation failed, please try again later")
              },
              toSend: function(e) {
                var i, n = this,
                  a = this;
                this.dataInfosList = [], this.pushingProgressShow = !1, this.streamFinished = !1;
                var c = (i = {
                  language: 0,
                  question: e,
                  userId: t.getStorageSync("wxopenid"),
                  sessionId: this.flowId,
                  bussType: 1
                }, (0, o.default)(i, "language", "zh" === this.lang ? 1 : 2), (0, o.default)(i, "location", "".concat(t.getStorageSync("location").longitude, ",").concat(t.getStorageSync("location").latitude)), i);
                this.index = 0, this.newVal = "", a.timeNetwork = setTimeout((function() {
                  n.clearAllTimers(), n.clearStarts(), n.task && (n.dataList[0].content = "zh" === n.lang ? "网络繁忙，请稍后重试!" : "Network is busy, please try again later!", n.task.abort())
                }), 15e3), this.task = t.request({
                  url: "".concat(getApp().globalData.requestUrl).concat(this.baseUrl, "app/wall/ai/chat/v2"),
                  enableChunked: !0,
                  method: "POST",
                  timeout: 9e5,
                  data: c,
                  success: function(t) {
                    200 == t.statusCode && (n.stratSet = !1, n.WshowHide = !1, n.newValCopy = "", n.newVal += " ", n.character || n.addNextCharacter()), 400 == t.statusCode && (n.clearStarts(), n.dataList[0].content = "zh" === n.lang ? "网络走丢了，请稍后重试!" : "Network connection lost, please try again later!", n.task && n.task.abort()), n.streamFinished = !0, !n.isPlaying && 0 === n.audioQueue.length && n.index >= n.newVal.length && (a.dataList[0].end = !0), a.$data.currentIndex = 0, a.$data.currentContent = "", a.$data.sendState = !1, a.isNetworkAnomaly = !1, a.delayBtn = !0, n.clearAllTimers()
                  },
                  fail: function(t) {
                    console.log(t, "ssssssssssss"), n.stratSet = !1, n.delayBtn = !0, "request:fail " == t.errMsg && (n.clearStarts(), n.dataList[0].content = "zh" === n.lang ? "网络错误，请稍后重试!" : "Network error, please try again later!", n.task && n.task.abort()), n.streamFinished = !0, n.clearAllTimers(), "request:fail abort" == t.errMsg && n.dataList[0].content && n.dataList[0].content.endsWith('<img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>') && (n.dataList[0].content = n.dataList[0].content.slice(0, n.dataList[0].content.length - 97))
                  }
                }), this.task.onChunkReceived((function(t) {
                  n.clearAllTimers(), a.delayBtn = !0, a.isNetworkAnomaly = !0, a.timeNetwork = setTimeout((function() {
                    n.clearAllTimers(), n.clearStarts(), n.$util.showToast("zh" === n.lang ? "网络繁忙，请稍后重试！" : "Network is busy, please try again later!"), n.task && n.task.abort(), n.streamFinished = !0
                  }), 3e4), a.timerList.push(a.timeNetwork);
                  var e, i = new Uint8Array(t.data);
                  if ("[object Uint8Array]" === Object.prototype.toString.call(i)) e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, s.default)(i))));
                  else if (i instanceof ArrayBuffer) {
                    var o = new Uint8Array(i);
                    e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, s.default)(o))))
                  }
                  3 != a.typeVideo && (a.typeVideo = 3), console.log("onChunkReceivedonChunkReceived"), e = a.partialJson + e, a.partialJson = "";
                  for (var c = e.split("^"), r = 0; r < c.length; r++) {
                    var l = c[r];
                    if (l) try {
                      var h = JSON.parse(l);
                      if (console.log(h, "resJson"), "2" == h.extend.code && n.handleAudioData(h.data), 0 == h.extend.type && "c001" == h.extend.code && (a.dataList[0].state = 1, a.newVal += h.data, a.character || a.addNextCharacter()), 0 == h.extend.type && "e001" == h.extend.code && (a.newVal += h.data, a.character || a.addNextCharacter()), "s001" == h.extend.code && 0 == h.extend.type && (a.dataList[0].state = 1, a.newVal += h.data, a.character || a.addNextCharacter()), "o001" == h.extend.code && (a.dataList[0].state = 1, !a.character))
                        if (h) {
                          var u = "zh" === n.lang ? "为您推荐官方游玩攻略：" : "Recommended official tour guide:";
                          a.newVal.includes(u) || (a.newVal += u), a.addNextCharacter()
                        } else a.dataList[0].officialGuide = [], a.dataList[0].officialGuideType = 1;
                      "c001" !== h.extend.code && "2" !== h.extend.code && n.dataInfosList.push(h)
                    } catch (t) {
                      r === c.length - 1 && (a.partialJson = l)
                    }
                  }
                }))
              },
              addNextCharacter: function() {
                var t = this;
                if (this.index < this.newVal.length) {
                  "の" == this.newVal[this.index] && this.dataList.unshift({
                    content: "",
                    content1: "",
                    type: 0,
                    state: 0,
                    end: !1,
                    name: "ai",
                    isMe: !1,
                    list: [],
                    img: !0,
                    id: (new Date).getTime()
                  });
                  var e = "の" == this.newVal[this.index] ? "" : this.newVal[this.index];
                  if (this.newVal.indexOf("の") > -1) {
                    var i = this.dataList[0].content1.lastIndexOf('">'),
                      n = this.dataList[0].content1.lastIndexOf("景点图片：<"),
                      a = this.dataList[0].content1.lastIndexOf("</video>"),
                      s = this.dataList[0].content1.lastIndexOf("景点视频：<");
                    this.dataList[0].content && n > -1 && -1 == this.hoveImgList.indexOf(n) && (-1 == i || -1 == this.hoveImgList.indexOf(i) || i < n) && !this.hoveImg ? (this.dataList[0].content += 'img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(n)) : i > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(i) ? (this.hoveImgList.push(i), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<i"), this.dataList[0].content1.lastIndexOf('">') + 2).replace(/ - /g, "-")), this.dataList[0].content = this.dataList[0].content.replace('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImgListUrl[this.hoveImgListUrl.length - 1]), this.$forceUpdate()) : this.dataList[0].content && s > -1 && -1 == this.hoveImgList.indexOf(s) && (-1 == a || -1 == this.hoveImgList.indexOf(a) || a < s) && !this.hoveImg ? (this.dataList[0].content += 'img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(s)) : a > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(a) ? (this.hoveImgList.push(a), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<v"), this.dataList[0].content1.lastIndexOf("</video>") + 8).replace(/ - /g, "-")), this.dataList[0].content += this.hoveImgListUrl[this.hoveImgListUrl.length - 1], this.$forceUpdate()) : this.hoveImg || (this.dataList[0].content += e)
                  } else this.dataList[0].content += e;
                  this.dataList[0].content1 += e, this.index++, this.character = setTimeout((function() {
                    t.addNextCharacter()
                  }), "zh" == this.lang ? 80 : 40)
                } else clearTimeout(this.character), this.character = null, this.showCards(), this.streamFinished && !this.isPlaying && 0 === this.audioQueue.length && (this.dataList[0].end = !0, this.clearStarts())
              },
              showCards: function() {
                var t = this;
                JSON.parse(JSON.stringify(this.dataInfosList)).forEach((function(e) {
                  t.setCardInfo(e)
                })), this.dataInfosList = []
              },
              clearStarts: function() {
                this.hoveImg = !1, this.hoveImgList = [], this.hoveImgListUrl = [], this.stratSet = !1, this.pushingProgress = !0, this.pushingProgressShow = !0, this.clearAllTimers(), this.character && (clearTimeout(this.character), this.character = null)
              },
              setCardInfo: function(t) {
                t && (1 == t.extend.type && "e001" == t.extend.code && (this.dataList[0].exclusiveRoute = t.data || {}), 0 == t.extend.type && "eq001" == t.extend.code && (this.dataList[0].exclusive = t.data || {}), "s001" == t.extend.code && 1 == t.extend.type && (this.dataList[0].list = t.data || []), "o001" == t.extend.code && 1 == t.extend.type && (this.dataList[0].officialGuide = t.data || [], this.dataList[0].officialGuideType = 2), 0 == t.extend.type && "q001" == t.extend.code && (this.dataList[0].divergenceProblem = t.data || []), -1 != this.spotCodes.findIndex((function(e) {
                  return e.code == t.extend.code
                })) && 1 == t.extend.type && (this.dataList[0].spotMsg = "zh" === this.lang ? "为您找到最近的".concat(this.spotCodes.find((function(e) {
                  return e.code == t.extend.code
                })).name, "。") : "For you, the nearest ".concat(this.spotCodes.find((function(e) {
                  return e.code == t.extend.code
                })).enName, " is:"), t.data.forEach((function(t) {
                  t.chinese = JSON.parse(t.chinese) || {}, t.english = JSON.parse(t.english) || {}
                })), this.dataList[0].spotList = t.data || []), "D001" == t.extend.code && 1 == t.extend.type && (t.data.scenic.forEach((function(t) {
                  t.chinese = JSON.parse(t.chinese) || {}, t.english = JSON.parse(t.english) || {}
                })), t.data.food.forEach((function(t) {
                  t.chinese = JSON.parse(t.chinese) || {}, t.english = JSON.parse(t.english) || {}
                })), t.data.hidden.forEach((function(t) {
                  t.chinese = JSON.parse(t.chinese) || {}, t.english = JSON.parse(t.english) || {}
                })), this.dataList[0].foodList = t.data.food || [], this.dataList[0].scenicList = t.data.scenic || [], this.dataList[0].storeList = t.data.hidden || []), "T002" == t.extend.code && 1 == t.extend.type && (this.dataList[0].phone = t.data || ""), "L002" == t.extend.code && 1 == t.extend.type && (this.dataList[0].picture = t.data || ""), "P003" == t.extend.code && 1 == t.extend.type && (this.dataList[0].posture = !0), "P004" == t.extend.code && 1 == t.extend.type && (this.flowData = t.data.data, this.dataList[0].warningData = t.data.data), this.$forceUpdate())
              },
              parsePlaytime: function(t) {
                if (!t) return "";
                var e = t.match(/(\d+)h/),
                  i = t.match(/(\d+)min/),
                  n = e ? parseInt(e[1]) : 0,
                  a = i ? parseInt(i[1]) : 0,
                  s = "zh" === this.lang ? "预计游玩" : "Estimated playtime: ";
                return n > 0 && (s += "".concat(n).concat("zh" === this.lang ? "小时" : "h")), a > 0 && (s += "".concat(a).concat("zh" === this.lang ? "分钟" : "min")), s === ("zh" === this.lang ? "预计游玩" : "Estimated playtime: ") ? "" : s
              },
              askAgain: function(t) {
                if (this.$eventAnalyse.analyse({
                    eventTag: "aiGreatWall_default_click",
                    eventName: "城墙客服点击默认问题",
                    eventParams: {
                      message: t
                    }
                  }), !this.pushingProgress) return this.$util.showToast("zh" == lang ? "请稍候" : "Please wait"), !1;
                this.doSend(t)
              },
              clearAllTimers: function() {
                this.timeNetwork && (clearTimeout(this.timeNetwork), this.timeNetwork = null), this.timerList.forEach((function(t) {
                  clearTimeout(t)
                })), this.timerList = []
              },
              handleAudioData: function(t) {
                var e = this,
                  i = "".concat(n.env.USER_DATA_PATH, "/audio_").concat(Date.now(), ".mp3"),
                  a = n.getFileSystemManager();
                try {
                  a.writeFile({
                    filePath: i,
                    data: t,
                    encoding: "base64",
                    success: function() {
                      e.audioQueue.push(i), e.isPlaying || e.playNextAudio()
                    },
                    fail: function(t) {
                      console.error("保存音频文件失败:", t)
                    }
                  })
                } catch (t) {
                  console.error("处理音频数据失败:", t)
                }
              },
              playNextAudio: function() {
                var e = this;
                if (0 === this.audioQueue.length) return this.isPlaying = !1, this.currentAudioIndex = 0, void(this.streamFinished && (this.clearAudioCache(), !this.stratSet && this.index >= this.newVal.length && (this.dataList[0].end = !0, this.clearStarts())));
                this.isPlaying = !0;
                var i = this.audioQueue[0];
                this.audioContext = t.createInnerAudioContext(), this.audioContext.src = i, this.audioContext.play(), this.audioContext.onEnded((function() {
                  e.audioContext.destroy(), e.audioContext = null;
                  var t = n.getFileSystemManager();
                  try {
                    t.unlinkSync(i)
                  } catch (t) {
                    console.error("删除已播放音频文件失败:", t)
                  }
                  e.audioQueue.shift(), e.playNextAudio()
                })), this.audioContext.onError((function(t) {
                  console.error("音频播放错误:", t), e.audioContext.destroy(), e.audioContext = null;
                  var a = n.getFileSystemManager();
                  try {
                    a.unlinkSync(i)
                  } catch (t) {
                    console.error("删除播放失败音频文件失败:", t)
                  }
                  e.audioQueue.shift(), e.playNextAudio()
                }))
              },
              stopSpeak: function() {
                if (this.clearAllTimers(), this.streamFinished = !0, this.character && (clearTimeout(this.character), this.character = null), this.audioContext) try {
                  this.audioContext.offEnded && this.audioContext.offEnded(), this.audioContext.offError && this.audioContext.offError(), this.audioContext.stop(), this.audioContext.destroy()
                } catch (t) {
                  console.error("停止音频播放失败:", t)
                } finally {
                  this.audioContext = null
                }
                this.isPlaying = !1, this.clearAudioCache(), this.dataList && this.dataList[0] && "string" == typeof this.dataList[0].content && (this.dataList[0].content = this.dataList[0].content.replaceAll('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', "")), this.dataList && this.dataList[0] && (this.dataList[0].end = !0), this.pushingProgress = !0, this.pushingProgressShow = !0, this.task && (this.task.abort(), this.dataList[0].content || (this.dataList[0].content = "zh" === this.lang ? "回答终止，请重新提问。" : "Response terminated, please ask again."), this.task = null, this.typeVideo = 4, this.showCards(), this.clearStarts())
              },
              clearAudioCache: function() {
                try {
                  var t = n.getFileSystemManager();
                  if (Array.isArray(this.audioQueue) && this.audioQueue.length && this.audioQueue.forEach((function(e) {
                      console.log(e);
                      try {
                        t.unlinkSync(e)
                      } catch (t) {
                        console.log("删除音频文件失败:", t)
                      }
                    })), this.audioContext && this.audioContext.src && "string" == typeof this.audioContext.src) {
                    var e = this.audioContext.src;
                    if (0 === e.indexOf(n.env.USER_DATA_PATH)) {
                      console.log(e);
                      try {
                        n.getFileSystemManager().unlinkSync(e)
                      } catch (t) {
                        console.log("删除音频文件失败:", t)
                      }
                    }
                  }
                } catch (t) {}
                this.audioQueue = []
              },
              startNoticeRotation: function() {
                var t = this;
                this.noticeInterval && clearInterval(this.noticeInterval), this.noticeList && this.noticeList.length > 0 && (this.noticeInterval = setInterval((function() {
                  t.currentNoticeIndex = (t.currentNoticeIndex + 1) % t.noticeList.length
                }), 3e3))
              },
              clearNoticeRotation: function() {
                this.noticeInterval && (clearInterval(this.noticeInterval), this.noticeInterval = null)
              },
              getNoticeList: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("get", this.baseUrl + "wall/push/page", {
                  pageOn: 1,
                  pageSize: 99999,
                  scenicType: 0,
                  languageCode: this.lang
                }).then((function(e) {
                  1 === e.code && e.data.records && e.data.records.length ? (t.noticeList = e.data.records.filter((function(t) {
                    return 0 == t.isEnable
                  })), t.currentNoticeIndex = 0) : t.noticeList = []
                }))
              },
              noticeChange: function(t) {
                this.currentNoticeIndex = t.detail.current
              },
              questionChange: function(t) {
                this.questionSwiperCurrent = t.detail.current
              },
              touchmove: function() {
                return !1
              }
            }
          };
        e.default = u
      }).call(this, i("df3c").default, i("3223").default)
    },
};
