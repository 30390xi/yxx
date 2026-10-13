require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiCulturalTourism/index"], {
    "080a": function(t, e, i) {
      (function(t, n) {
        var a = i("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = a(i("7eb4")),
          s = a(i("3b2d")),
          r = a(i("af34")),
          c = a(i("ee10")),
          d = a(i("7ca3"));

        function h(t, e) {
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
            e % 2 ? h(Object(i), !0).forEach((function(e) {
              (0, d.default)(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : h(Object(i)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
          }
          return t
        }
        var u = i("a6b5"),
          g = {
            components: {
              zPaging: function() {
                Promise.all([i.e("common/vendor"), i.e("union/common/vendor"), i.e("union/components1/z-paging/z-paging")]).then(function() {
                  return resolve(i("a7ee"))
                }.bind(null, i)).catch(i.oe)
              },
              chatInputBar: function() {
                i.e("union/components1/chat-input-bar/chat-input-bar-new").then(function() {
                  return resolve(i("5438"))
                }.bind(null, i)).catch(i.oe)
              },
              chatItem: function() {
                i.e("union/components1/chat-item/chat-item-new").then(function() {
                  return resolve(i("edef"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            onLoad: function(e) {
              var i = this,
                n = t.getSystemInfoSync();
              "android" === n.platform ? this.isIos = !1 : "ios" === n.platform ? this.isIos = !0 : this.isIos = !1, this.createSession(), setTimeout((function() {
                i.maskShow = !1
              }), 1e3), this.NavH = t.getMenuButtonBoundingClientRect().bottom, console.log(this.NavH), Promise.all([this.getHistory(), this.getSysConfigure(), this.getTopData()]).then((function() {
                console.log(i.topData, "this.topData"), i.$nextTick((function() {
                  i.getElementsHeight()
                }))
              })).catch((function(t) {
                console.error("请求失败:", t), i.$nextTick((function() {
                  i.getElementsHeight()
                }))
              }))
            },
            onShow: function() {
              this.isHide && (this.isHide = !1, this.getTopData())
            },
            onHide: function() {
              this.opacity = 0, this.showImage = !0, this.travelHidden && (this.travelHidden = !1), this.isHide = !0
            },
            onUnload: function() {
              this.opacity = 0
            },
            mounted: function() {},
            data: function() {
              return {
                hoveImgList: [],
                hoveImg: !1,
                hoveImgListUrl: [],
                newVal: "",
                dataList: [],
                isTyping: !1,
                currentMassage: {},
                currentIndex: 0,
                isHide: !1,
                currentContent: "",
                pushingProgress: !0,
                task: null,
                scrollTop: 0,
                tripList: [],
                NavH: 0,
                scenicSpotList: [],
                deliciousFoodList: [],
                pushingProgressShow: !0,
                isSpeaking: !1,
                audioPlayer: null,
                voiceInfo: {},
                flowId: "",
                historyList: [],
                page: 1,
                loadMore: "loading",
                dataId: "",
                totle: 0,
                show_optive: !1,
                typeVideo: 1,
                showImage: !0,
                videoReady3: !1,
                videoReady4: !1,
                opacity: 0,
                systemInfo: {},
                character: null,
                index: 0,
                stratSet: !1,
                dataInfosList: [],
                WshowHide: !1,
                newValCopy: "",
                playIndex: 0,
                arrResult: [],
                isIos: !1,
                historyBoxHeight: 0,
                isNetworkAnomaly: !1,
                timeNetwork: null,
                playShow: !1,
                maskShow: !0,
                delayBtn: !1,
                timerList: [],
                isLoadingHistory: !1,
                travelHidden: !1,
                commentObj: {
                  status: 0,
                  type: "",
                  content: "",
                  dialogueContent: null
                },
                typeList: [{
                  content: "答非所问",
                  select: 0
                }, {
                  content: "事实错误",
                  select: 0
                }, {
                  content: "格式不对",
                  select: 0
                }, {
                  content: "内容低质",
                  select: 0
                }],
                videoTimer: null,
                currentVideoUrl: "",
                videoLoading: !1,
                currrentId: "",
                keyboardHeight: 0,
                isClicking: !1,
                menuBoxHeight: 0,
                chatInputBarHeight: 0,
                chatInputBarBottomDistance: 0,
                topLoadingHeight: 0,
                showTopLoading: !1,
                calculatedPlaceholderHeight: "0",
                hasHistory: !1,
                topData: null
              }
            },
            watch: {},
            computed: {},
            methods: {
              scrollToBottomInChatMode: function() {
                var t = this;
                if (this.$refs.paging) try {
                  this.$nextTick((function() {
                    setTimeout((function() {
                      try {
                        t.$refs.paging.scrollToBottom(), setTimeout((function() {
                          try {
                            t.$refs.paging.scrollToBottom()
                          } catch (t) {
                            console.warn("第二次滚动失败:", t)
                          }
                        }), 50)
                      } catch (e) {
                        console.warn("第一次滚动失败:", e), setTimeout((function() {
                          try {
                            t.$refs.paging.scrollToBottom()
                          } catch (t) {
                            console.warn("重试滚动失败:", t)
                          }
                        }), 200)
                      }
                    }), 100)
                  }))
                } catch (t) {
                  console.error("滚动方法执行失败:", t)
                } else console.warn("z-paging组件未找到")
              },
              goCardPage: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_aiTravelCard_click",
                  eventName: "小七点击进入置顶卡片",
                  eventParams: {
                    pagePath: "/union/pages/aiTravel2/cardPage?sessionId=" + this.topData.sessionId
                  }
                }), t.navigateTo({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=" + this.topData.sessionId
                })
              },
              getTopData: function() {
                var e = this;
                return this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/queryTopRecent", {
                  openId: t.getStorageSync("wxopenid")
                }).then((function(t) {
                  1 === t.code && (e.topData = t.data || null)
                })).catch((function() {}))
              },
              getSysConfigure: function() {
                var t = this;
                return this.$uniApi.dataRequestNoLoading("post", "base/app/v1/sysParam/getSysParamForApp", {
                  keyList: ["XIAOQI_MENU"]
                }).then((function(e) {
                  1 == e.code && (t.systemInfo = JSON.parse(e.data.XIAOQI_MENU.paramValue), console.log(t.systemInfo, "this.systemInfo"))
                }))
              },
              keyboardHeightChange: function(t) {
                this.keyboardHeight = t.height
              },
              getHistory: function() {
                var e = this;
                return this.$uniApi.dataRequestNoLoading("get", "ai/aiEscort/dialogue/record", {
                  openId: t.getStorageSync("wxopenid"),
                  pageSize: 30,
                  pageOn: 1,
                  sessionId: this.flowId
                }).then((function(t) {
                  1 === t.code && (e.hasHistory = t.data.total > 0)
                }))
              },
              getElementsHeight: function() {
                var e = this,
                  i = t.createSelectorQuery().in(this);
                i.select(".menuBox").boundingClientRect(), i.select(".chat-input-bar").boundingClientRect(), i.select(".topLoading").boundingClientRect(), i.select(".history-box").boundingClientRect(), i.exec((function(i) {
                  if (i && i.length >= 3) {
                    var n = i[0],
                      a = i[1],
                      o = i[2],
                      s = i[3];
                    if (n && (e.menuBoxHeight = n.height, console.log("menuBox 高度:", n.height, "topData状态:", !!e.topData)), a) {
                      e.chatInputBarHeight = a.height, console.log("chatInputBar 高度:", a.height);
                      var r = t.getSystemInfoSync().screenHeight,
                        c = a.top,
                        d = a.height;
                      e.chatInputBarBottomDistance = e.isIos ? 0 : r - (c + d), console.log("chat-input-bar距离屏幕底部高度:", e.chatInputBarBottomDistance, "px")
                    }
                    if (o && (e.topLoadingHeight = o.height, console.log("topLoading 高度:", e.NavH)), s) {
                      var h = t.getSystemInfoSync().screenWidth,
                        l = .064 * h;
                      e.historyBoxHeight = l, console.log("historyBox 高度计算:", {
                        boundingClientRect: s.height,
                        calculated: l,
                        screenWidth: h,
                        actualHeightRpx: 48
                      })
                    } else e.historyBoxHeight = 0, console.log("historyBox 不存在，高度设置为0");
                    e.calculatePlaceholderHeight()
                  }
                }))
              },
              calculatePlaceholderHeight: function() {
                if (this.menuBoxHeight && this.chatInputBarHeight && this.topLoadingHeight && void 0 !== this.historyBoxHeight) {
                  var e = t.getSystemInfoSync().screenHeight,
                    i = this.menuBoxHeight + this.chatInputBarHeight + this.NavH + this.historyBoxHeight + this.chatInputBarBottomDistance,
                    n = i / e * 100,
                    a = 101 - n;
                  this.calculatedPlaceholderHeight = a > 0 ? "".concat(a, "vh") : "0", console.log("占位符高度计算:", {
                    screenHeight: e,
                    menuBoxHeight: this.menuBoxHeight,
                    chatInputBarHeight: this.chatInputBarHeight,
                    topLoadingHeight: this.topLoadingHeight,
                    historyBoxHeight: this.historyBoxHeight,
                    hasHistory: this.hasHistory,
                    chatInputBarBottomDistance: this.chatInputBarBottomDistance,
                    totalHeightPx: i,
                    totalHeightVh: n,
                    placeholderHeightVh: a,
                    topDataStatus: !!this.topData
                  })
                }
              },
              getChatInputBarBottomDistance: function() {
                var e = this;
                return new Promise((function(i) {
                  var n = t.createSelectorQuery().in(e);
                  n.select(".chat-input-bar").boundingClientRect(), n.exec((function(n) {
                    if (n && n[0]) {
                      var a = n[0],
                        o = t.getSystemInfoSync().screenHeight - (a.top + a.height);
                      console.log("chat-input-bar距离屏幕底部高度:", o, "px"), e.chatInputBarBottomDistance = o, i(o)
                    } else console.warn("未找到chat-input-bar元素"), i(0)
                  }))
                }))
              },
              startLoading: function() {
                var e = this;
                !this.isLoadingHistory && this.hasHistory && (t.vibrateShort(), this.isLoadingHistory = !0, this.showTopLoading = !0, setTimeout((function() {
                  e.queryList()
                }), 1e3))
              },
              queryList: function() {
                var e = this;
                if ("nomore" == this.loadMore) return this.$refs.paging.completeByNoMore([], !0), this.showTopLoading = !1, !1;
                var i = this.page;
                this.$uniApi.dataRequestNoLoading("get", "ai/aiEscort/dialogue/record", {
                  openId: t.getStorageSync("wxopenid"),
                  pageSize: 30,
                  pageOn: i,
                  sessionId: this.flowId
                }).then((function(t) {
                  if (1 === t.code) {
                    var i = t.data.records;
                    if (e.totle = t.data.total, !(t.data.total > 0)) return e.$refs.paging.completeByNoMore([], !0), e.isLoadingHistory = !1, e.showTopLoading = !1, e.$utils.toast("没有更多数据了"), e.historyList.length > 0 && (e.historyList = e.historyList.concat([{
                      content: "",
                      type: 0,
                      nomoreLine: !0,
                      isHistory: !0
                    }])), !1;
                    if (t.data.current < t.data.pages ? (e.page = e.page + 1, e.loadMore = "loadmore") : e.loadMore = "nomore", !i || !i.length) return e.$refs.paging.completeByNoMore([], !0), e.historyList = [], e.isLoadingHistory = !1, e.showTopLoading = !1, !1;
                    var n = [];
                    i.forEach((function(t) {
                      if (1 == t.type) t.content && -1 == t.content.indexOf("专属攻略：是") && n.push({
                        content: decodeURIComponent(t.content),
                        type: 1,
                        state: 1,
                        end: !0,
                        name: "ai",
                        list: [],
                        isHistory: !0,
                        id: (new Date).getTime()
                      });
                      else {
                        var e = "",
                          i = t.content;
                        t.content.indexOf("の") > -1 ? (e = t.content.split("の")[1].replaceAll("swiperItem", "swiperItem swiperItemBox").replaceAll(/<video(.*?)src="(.*?) - (.*?)"(.*?)>/g, '<video$1src="$2-$3"$4>').replaceAll(/<img src="(.*?) - (.*?)" alt="">/g, '<img src="$1-$2" alt="">'), i = t.content.split("の")[0], n.push({
                          content: e,
                          type: 0,
                          state: 0,
                          end: !0,
                          name: "ai",
                          isMe: !1,
                          img: !0,
                          list: [],
                          id: (new Date).getTime(),
                          officialGuide: [],
                          officialGuideType: 1,
                          divergenceProblem: [],
                          isHistory: !0
                        })) : n.push({
                          content: i,
                          type: 0,
                          state: 0,
                          end: !0,
                          name: "ai",
                          isMe: !1,
                          list: [],
                          id: (new Date).getTime(),
                          officialGuide: [],
                          officialGuideType: 1,
                          divergenceProblem: [],
                          isHistory: !0
                        }), n[n.length - 1].state = 1, n[n.length - 1].divergenceProblem = t.deriveIssue ? t.deriveIssue.data : [], t.jsonData && "o001" == t.jsonData.extend.code && (n[n.length - 1].content = "为您推荐官方游玩攻略：", n[n.length - 1].officialGuide = t.jsonData ? t.jsonData.data : [], n[n.length - 1].exclusive = t.content, n[n.length - 1].officialGuideType = 2), t.jsonData && "s001" == t.jsonData.extend.code && (n[n.length - 1].list = t.jsonData ? t.jsonData.data : []), t.jsonData && "e001" == t.jsonData.extend.code && (n[n.length - 1].exclusiveRoute = t.jsonData ? t.jsonData.data : []), t.jsonData && "p002" == t.jsonData.extend.code && (n[n.length - 1].redirectContent = t.jsonData ? t.jsonData.data : {}, n[n.length - 1].content = "检测到您需要攻略或规划？  \n👉 点击下方 「AI旅行搭子」，一键生成专属方案！  \n（不满意？可随时重新生成哦~）"), t.jsonData && "p006" == t.jsonData.extend.code && (n[n.length - 1].content = " ", n[n.length - 1].evaluationObj = t.jsonData ? t.jsonData.data : {}, console.log(n[n.length - 1])), t.jsonData && "p007" == t.jsonData.extend.code && (n[n.length - 1].content = " ", n[n.length - 1].spotPhone = t.jsonData ? t.jsonData.data : {}), t.jsonData && "p008" == t.jsonData.extend.code && (console.log(t.jsonData, "v.jsonData"), n[n.length - 1].weatherInfo = {
                          weatherToday: t.jsonData.data.base || {},
                          weatherWeek: t.jsonData.data.resp || []
                        }), t.jsonData && "p009" == t.jsonData.extend.code && (n[n.length - 1].content = t.jsonData ? t.jsonData.data.resp : ""), t.jsonData && "p010" == t.jsonData.extend.code && (n[n.length - 1].toilet = t.jsonData ? t.jsonData.data : []), t.content.indexOf("の") > -1 && n.push({
                          content: t.content.split("の")[0],
                          type: 0,
                          state: 0,
                          end: !0,
                          name: "ai",
                          isMe: !1,
                          list: [],
                          id: (new Date).getTime(),
                          officialGuide: [],
                          officialGuideType: 1,
                          divergenceProblem: []
                        })
                      }
                    }));
                    var a = t.data.current < t.data.pages;
                    e.$refs.paging.completeByNoMore([], !a);
                    var o = e.historyList.length > 0 ? [{
                      content: "",
                      type: 0,
                      historyLine: !0,
                      isHistory: !0
                    }].concat(n) : n;
                    e.historyList = e.historyList.concat(o), console.log(e.historyList, "this.historyList"), a || e.historyList.push({
                      content: "",
                      type: 0,
                      nomoreLine: !0,
                      isHistory: !0
                    }), e.showTopLoading = !1, e.$nextTick((function() {
                      e.isLoadingHistory = !1
                    }))
                  } else e.loadMore = "loadmore", e.$refs.paging.completeByNoMore([], !1), e.isLoadingHistory = !1, e.showTopLoading = !1;
                  console.log(e.loadMore)
                })).catch((function(t) {
                  console.error("queryList error:", t), e.loadMore = "loadmore", e.$refs.paging.completeByNoMore([], !1), e.isLoadingHistory = !1, e.showTopLoading = !1
                }))
              },
              createSession: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("post", "ai/aiEscort/session/create", {
                  bussType: 1,
                  openId: t.getStorageSync("wxopenid"),
                  title: u.format(new Date, "yyyy-MM-dd hh:mm:ss:S")
                }).then((function(t) {
                  1 === t.code && (e.flowId = t.data)
                }))
              },
              resetTravel: function(e) {
                this.travelHidden = !0;
                var i = this.systemInfo.aiTravel;
                if (i) {
                  var n = [];
                  e && ["departureTime", "destination", "budget", "interestPoint", "returnTime", "adult", "children", "older", "change"].forEach((function(t) {
                    e[t] && n.push("".concat(t, "=").concat(encodeURIComponent(e[t])))
                  })), n.length > 0 && (i += "?" + n.join("&")), t.navigateTo({
                    url: i
                  })
                } else this.$util.showToast("敬请期待！")
              },
              goCoupon: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_aiTravelCoupon_click",
                  eventName: "小七点击进入优惠券",
                  eventParams: {
                    pagePath: this.systemInfo.couponUrl
                  }
                }), t.navigateTo({
                  url: this.systemInfo.couponUrl
                })
              },
              goAiTravel: function() {
                return this.systemInfo.aiTravel ? (this.$eventAnalyse.analyse({
                  eventTag: "ai_aiTravelEnter_click",
                  eventName: "小七点击进入旅行搭子",
                  eventParams: {
                    pagePath: "/union/pages/aiTravel2/formPage"
                  }
                }), this.pushingProgressShow ? void this.resetTravel() : void this.$util.showToast("正在回答，请稍候")) : void this.$util.showToast("敬请期待！")
              },
              goHistory: function() {
                t.navigateTo({
                  url: "/union/pages/aiTravel2/historyList"
                })
              },
              pauseFun: function() {
                t.createVideoContext("myVideo1", this).seek(0)
              },
              ended: function() {
                var e = this;
                this.videoTimer = setTimeout((function() {
                  e.videoTimer && (clearTimeout(e.videoTimer), e.videoTimer = null), t.createVideoContext("myVideo1", e).play()
                }), 15e3)
              },
              openDrawer: function(t, e) {
                this.commentObj.dialogueContent = JSON.stringify(l(l({}, t), {}, {
                  sessionId: this.flowId
                })), this.commentObj.status = e - 1, 1 == e ? this.submitComment() : 2 == e && this.$refs.feedbackDrawer.open()
              },
              delComment: function(e) {
                var i = this;
                this.commentObj.dialogueContent = JSON.stringify(l(l({}, e), {}, {
                  sessionId: this.flowId
                })), this.commentObj.type = "", this.$eventAnalyse.analyse({
                  eventTag: "ai_comment_delete",
                  eventName: "小七删除对话评价",
                  eventParams: {}
                });
                var n = l(l({}, this.commentObj), {}, {
                  openId: t.getStorageSync("wxopenid")
                });
                this.$uniApi.dataRequestNoLoading("post", "ai/app/dialogue/delete", n).then((function(t) {
                  i.commentObj = {
                    status: 0,
                    type: [],
                    content: "",
                    dialogueContent: null
                  }
                }))
              },
              addCommentType: function(t) {
                t.select = !t.select
              },
              closeComment: function() {
                this.$refs.feedbackDrawer.close()
              },
              handleChange: function(t) {
                t.show || this.submitComment()
              },
              submitComment: function(e) {
                var i = this;
                this.typeList.length > 0 && (this.commentObj.type = this.typeList.filter((function(t) {
                  return t.select
                })).map((function(t) {
                  return t.content
                })).join(",")), this.$eventAnalyse.analyse({
                  eventTag: "ai_comment_submit",
                  eventName: "小七提交对话评价",
                  eventParams: {}
                });
                var n = l(l({}, this.commentObj), {}, {
                  openId: t.getStorageSync("wxopenid")
                });
                this.$uniApi.dataRequestNoLoading("post", "ai/app/dialogue/add", n).then((function(t) {
                  i.commentObj = {
                    status: 0,
                    type: [],
                    content: "",
                    dialogueContent: null
                  }, i.typeList = i.typeList.map((function(t) {
                    return t.select = 0, t
                  })), 1 === t.code && i.$util.showToast("感谢您的反馈！")
                }))
              },
              getWeather: function() {
                return (0, c.default)(o.default.mark((function t() {
                  return o.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              getPhone: function() {},
              getTest: function() {
                var e = this;
                this.isClicking || (this.pushingProgress ? (this.isClicking = !0, t.vibrateShort(), this.$eventAnalyse.analyse({
                  eventTag: "ai_xjtu_click",
                  eventName: "小七点击景区评测导航"
                }), this.doSend("查看景区测评"), setTimeout((function() {
                  e.isClicking = !1
                }), 1e3)) : this.$util.showToast("正在回答，请稍候"))
              },
              goTravel: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_wallGuide_click",
                  eventName: "小七点击城墙伴游导航"
                }), t.navigateTo({
                  url: this.systemInfo.travelUrl
                })
              },
              travelDailyNews: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_travelDailyNews_click",
                  eventName: "小七点击旅行日报导航"
                }), t.navigateTo({
                  url: this.systemInfo.travelDailyNewsUrl
                })
              },
              goMap: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_travelmap_click",
                  eventName: "小七点击文旅地图导航"
                }), t.navigateTo({
                  url: this.systemInfo.mapUrl
                })
              },
              foucsTxt: function() {
                var t = this;
                setTimeout((function() {
                  t.keyboardHeight = t.keyboardHeight ? t.keyboardHeight : "300"
                }), 200)
              },
              blurTxt: function() {
                this.keyboardHeight = 0
              },
              getToilet: function() {
                var e = this;
                return (0, c.default)(o.default.mark((function i() {
                  return o.default.wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                      case 0:
                        if (!e.isClicking) {
                          i.next = 2;
                          break
                        }
                        return i.abrupt("return");
                      case 2:
                        if (e.pushingProgress) {
                          i.next = 5;
                          break
                        }
                        return e.$util.showToast("正在回答，请稍候"), i.abrupt("return");
                      case 5:
                        return e.isClicking = !0, t.vibrateShort(), e.$eventAnalyse.analyse({
                          eventTag: "ai_toilet_click",
                          eventName: "小七点击卫生间导航"
                        }), i.next = 10, e.getLocation();
                      case 10:
                        i.sent && e.doSend("找卫生间"), setTimeout((function() {
                          e.isClicking = !1
                        }), 1e3);
                      case 13:
                      case "end":
                        return i.stop()
                    }
                  }), i)
                })))()
              },
              getKeyWordsOfLocation: function(t) {
                var e = !1;
                return ["洗手间", "厕所", "卫生间", "茅房", "盥洗室", "WC", "天气查询"].forEach((function(i) {
                  t.includes(i) && (e = !0)
                })), e
              },
              getLocation: function() {
                return (0, c.default)(o.default.mark((function e() {
                  return o.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", new Promise((function(e) {
                          n.getSetting({
                            success: function(i) {
                              i.authSetting["scope.userLocation"] ? (t.showLoading({
                                title: "获取定位中...",
                                mask: !0
                              }), t.getLocation({
                                type: "gcj02",
                                success: function(i) {
                                  t.setStorageSync("location", {
                                    longitude: i.longitude,
                                    latitude: i.latitude
                                  }), t.hideLoading(), e(!0)
                                },
                                fail: function() {
                                  t.hideLoading(), e(!0)
                                }
                              })) : n.authorize({
                                scope: "scope.userLocation",
                                success: function() {
                                  t.showLoading({
                                    title: "获取定位中...",
                                    mask: !0
                                  }), t.getLocation({
                                    type: "gcj02",
                                    success: function(i) {
                                      t.setStorageSync("location", {
                                        longitude: i.longitude,
                                        latitude: i.latitude
                                      }), t.hideLoading(), e(!0)
                                    },
                                    fail: function() {
                                      t.hideLoading(), e(!0)
                                    }
                                  })
                                },
                                fail: function() {
                                  n.showModal({
                                    title: "授权提示",
                                    content: "需要获取您的地理位置，请确认授权",
                                    success: function(t) {
                                      t.confirm && n.openSetting(), e(!1)
                                    },
                                    fail: function() {
                                      e(!0)
                                    }
                                  })
                                }
                              })
                            },
                            fail: function() {
                              e(!1)
                            }
                          })
                        })));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              doSend: function(t, e) {
                var i = this;
                this.pushingProgress = !1, this.stratSet = !0, this.scrollToBottomInChatMode(), this.flowId ? setTimeout((function() {
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
                      id: Date.now() + Math.floor(1e3 * Math.random()),
                      comment: 0
                    }), console.log(i.dataList), i.currrentId = i.dataList[0].id, e && e.id) {
                    var n = e.exclusive;
                    i.toSend(n)
                  } else i.toSend(t);
                  i.scrollToBottomInChatMode()
                }), 300) : this.$util.showToast("会话创建失败，请稍后再试")
              },
              toSend: function(e) {
                var i = this,
                  n = this;
                this.dataInfosList = [], this.pushingProgressShow = !1;
                var a = {
                    language: 0,
                    question: e,
                    userId: t.getStorageSync("wxopenid"),
                    sessionId: this.flowId,
                    bussType: 1
                  },
                  o = t.getStorageSync("location") ? t.getStorageSync("location").longitude : 108.964364,
                  s = t.getStorageSync("location") ? t.getStorageSync("location").latitude : 34.221003;
                o && s && (a.location = "".concat(o, ",").concat(s)), n.timeNetwork = setTimeout((function() {
                  i.clearAllTimers(), i.clearStarts(), i.$util.showToast("网络异常，请重试！"), i.task && (i.dataList[0].content = "网络走丢了，请稍后重试!", i.task.abort())
                }), 15e3), this.task = t.request({
                  url: "".concat(getApp().globalData.requestUrl, "ai/app/escort/ai/chat"),
                  enableChunked: !0,
                  method: "POST",
                  timeout: 9e5,
                  data: a,
                  success: function(t) {
                    console.log(t), 200 == t.statusCode && (i.stratSet = !1, i.WshowHide = !1, i.newValCopy = "", i.newVal += " ", i.addNextCharacter()), 400 == t.statusCode && (i.clearStarts(), i.dataList[0].content = "网络走丢了，请稍后重试!", i.task && i.task.abort()), n.dataList[0].end = !0, n.$data.currentIndex = 0, n.$data.currentContent = "", n.$data.sendState = !1, n.isNetworkAnomaly = !1, n.delayBtn = !0, i.clearAllTimers()
                  },
                  fail: function(t) {
                    console.log(t, "ssssssssssss"), i.stratSet = !1, i.delayBtn = !0, "request:fail " == t.errMsg && (i.clearStarts(), i.dataList[0].content = "网络走丢了，请稍后重试!", i.task && i.task.abort()), i.clearAllTimers(), "request:fail abort" == t.errMsg && i.dataList[0].content && i.dataList[0].content.endsWith('<img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>') && (i.dataList[0].content = i.dataList[0].content.slice(0, i.dataList[0].content.length - 97))
                  }
                }), this.task.onChunkReceived((function(t) {
                  i.clearAllTimers(), n.delayBtn = !0, n.isNetworkAnomaly = !0, n.timeNetwork = setTimeout((function() {
                    i.clearAllTimers(), i.clearStarts(), i.$util.showToast("网络异常，请重试！"), i.task && i.task.abort()
                  }), 3e4), n.timerList.push(n.timeNetwork);
                  var e, a = new Uint8Array(t.data);
                  if ("[object Uint8Array]" === Object.prototype.toString.call(a)) e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, r.default)(a))));
                  else if (a instanceof ArrayBuffer) {
                    var o = new Uint8Array(a);
                    e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, r.default)(o))))
                  }
                  3 != n.typeVideo && (n.typeVideo = 3), console.log(e), e.split("^").forEach((function(t) {
                    if (t) {
                      var e = JSON.parse(t);
                      0 == e.extend.type && "c001" == e.extend.code && (n.dataList[0].state = 1, n.newVal += e.data, n.character || n.addNextCharacter()), 0 == e.extend.type && "e001" == e.extend.code && (n.newVal += e.data, n.character || n.addNextCharacter()), "s001" == e.extend.code && 0 == e.extend.type && (n.dataList[0].state = 1, n.newVal += e.data, n.character || n.addNextCharacter()), "o001" == e.extend.code && (n.dataList[0].state = 1, n.character || (e ? (n.newVal = "为您推荐官方游玩攻略：", n.addNextCharacter()) : (n.dataList[0].officialGuide = [], n.dataList[0].officialGuideType = 1))), "p002" == e.extend.code && (n.dataList[0].state = 1, n.dataList[0].redirectContent = JSON.parse(e.data), n.newVal += "检测到您需要攻略或规划？  \n👉 点击下方 「AI旅行搭子」，一键生成专属方案！  \n（不满意？可随时重新生成哦~）", n.character || n.addNextCharacter()), "p005" == e.extend.code && (n.dataList[0].state = 1, n.dataList[0].changeAnswer = JSON.parse(e.data), n.newVal += "根据您的修改意见，点击下方按钮进行重新规划吧！", n.character || n.addNextCharacter()), "p006" != e.extend.code && "p007" != e.extend.code || (n.dataList[0].state = 1, n.newVal += "", n.character || setTimeout((function() {
                        n.addNextCharacter()
                      }), 0)), "p009" == e.extend.code && (n.dataList[0].state = 1, n.newVal += e.data.resp, n.character || n.addNextCharacter()), "p010" == e.extend.code && 0 == e.extend.type && (n.dataList[0].state = 1, n.newVal += e.data, n.character || n.addNextCharacter()), i.dataInfosList.push(e)
                    }
                  }))
                }))
              },
              clearStarts: function() {
                var t = this;
                this.hoveImg = !1, this.hoveImgList = [], this.hoveImgListUrl = [], JSON.parse(JSON.stringify(this.dataInfosList)).forEach((function(e) {
                  t.setCardInfo(e)
                })), this.dataInfosList = [], this.newVal = "", this.index = 0, this.stratSet = !1, this.pushingProgress = !0, this.pushingProgressShow = !0, this.character && (clearTimeout(this.character), this.character = null)
              },
              setCardInfo: function(t) {
                if (t) {
                  if (1 == t.extend.type && "e001" == t.extend.code && (this.dataList[0].exclusiveRoute = t.data || {}), 0 == t.extend.type && "eq001" == t.extend.code && (this.dataList[0].exclusive = t.data || {}), "s001" == t.extend.code && 1 == t.extend.type && (this.dataList[0].list = t.data || []), "o001" == t.extend.code && 1 == t.extend.type && (this.dataList[0].officialGuide = t.data || [], this.dataList[0].officialGuideType = 2), 0 == t.extend.type && "q001" == t.extend.code && (this.dataList[0].divergenceProblem = t.data || []), 1 == t.extend.type && "p006" == t.extend.code && (this.dataList[0].evaluationObj = t.data || {}), 1 == t.extend.type && "p007" == t.extend.code && (this.dataList[0].spotPhone = t.data || {}), 1 == t.extend.type && "p008" == t.extend.code && (this.dataList[0].weatherInfo = {
                      weatherToday: t.data.base || {},
                      weatherWeek: t.data.resp || []
                    }), 1 == t.extend.type && "p009" == t.extend.code && t.data && "object" === (0, s.default)(t.data)) {
                    var e = [];
                    for (var i in t.data) "resp" !== i && t.data[i] && e.push(t.data[i]);
                    this.dataList[0].evaluationQuestion = e
                  }
                  1 == t.extend.type && "p010" == t.extend.code && (this.dataList[0].toilet = t.data || []), this.$forceUpdate()
                }
              },
              askAgain: function(t) {
                this.typeVideo = 4, this.doSend(t)
              },
              clearAllTimers: function() {
                this.timeNetwork && (clearTimeout(this.timeNetwork), this.timeNetwork = null), this.timerList.forEach((function(t) {
                  clearTimeout(t)
                })), this.timerList = []
              },
              loadedmetadata: function() {
                var e = this;
                t.createVideoContext("myVideo1", this).play(), setTimeout((function() {
                  e.showImage = !1, e.opacity = 1
                }), 500)
              },
              addNextCharacter: function() {
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
                  var t = "の" == this.newVal[this.index] ? "" : this.newVal[this.index];
                  if (this.newVal.indexOf("の") > -1) {
                    var e = this.dataList[0].content1.lastIndexOf('">'),
                      i = this.dataList[0].content1.lastIndexOf("景点图片：<"),
                      n = this.dataList[0].content1.lastIndexOf("</video>"),
                      a = this.dataList[0].content1.lastIndexOf("景点视频：<");
                    this.dataList[0].content && i > -1 && -1 == this.hoveImgList.indexOf(i) && (-1 == e || -1 == this.hoveImgList.indexOf(e) || e < i) && !this.hoveImg ? (this.dataList[0].content += 'img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(i)) : e > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(e) ? (this.hoveImgList.push(e), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<i"), this.dataList[0].content1.lastIndexOf('">') + 2).replace(/ - /g, "-")), this.dataList[0].content = this.dataList[0].content.replace('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImgListUrl[this.hoveImgListUrl.length - 1]), this.$forceUpdate()) : this.dataList[0].content && a > -1 && -1 == this.hoveImgList.indexOf(a) && (-1 == n || -1 == this.hoveImgList.indexOf(n) || n < a) && !this.hoveImg ? (this.dataList[0].content += 'img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(a)) : n > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(n) ? (this.hoveImgList.push(n), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<v"), this.dataList[0].content1.lastIndexOf("</video>") + 8).replace(/ - /g, "-")), this.dataList[0].content += this.hoveImgListUrl[this.hoveImgListUrl.length - 1], this.$forceUpdate()) : this.hoveImg || (this.dataList[0].content += t)
                  } else this.dataList[0].content += t;
                  this.dataList[0].content1 += t, this.index++, this.addNextCharacter()
                } else clearTimeout(this.character), this.character = null, this.stratSet || (this.typeVideo = 4, this.clearStarts())
              },
              stopSpeak: function() {
                this.clearAllTimers(), this.dataList[0].content = this.dataList[0].content.replaceAll('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', ""), this.task && (this.task.abort(), this.dataList[0].content || (this.dataList[0].content = "回答终止，请重新提问。"), this.pushingProgress = !0, this.dataList[0].end = !0, this.task = null, this.pushingProgressShow = !0, this.typeVideo = 4, this.clearStarts())
              },
              exclusive: function(t) {
                this.typeVideo = 4, this.doSend("专属攻略", t)
              },
              playVideo: function(t) {
                this.currentVideoUrl = t, this.$refs.videoPopup.open()
              },
              onVideoError: function(t) {
                console.error("视频播放失败:", t), this.videoLoading = !1, this.$util.showToast("视频加载失败")
              },
              onVideoLoadStart: function() {
                this.videoLoading = !0
              },
              onVideoLoaded: function() {
                this.videoLoading = !1
              },
              closeVideoPopup: function() {
                this.$refs.videoPopup.close()
              }
            }
          };
        e.default = g
      }).call(this, i("df3c").default, i("3223").default)
    },
    "0833": function(t, e, i) {
      (function(t, e) {
        var n = i("47a9");
        i("5366"), n(i("3240"));
        var a = n(i("bcfa"));
        t.__webpack_require_UNI_MP_PLUGIN__ = i, e(a.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    },
    "208f": function(t, e, i) {
      var n = i("82a1");
      i.n(n).a
    },
    "82a1": function(t, e, i) {},
    "8d24": function(t, e, i) {
      i.d(e, "b", (function() {
        return a
      })), i.d(e, "c", (function() {
        return o
      })), i.d(e, "a", (function() {
        return n
      }));
      var n = {
          uniNavbar: function() {
            return i.e("components/uni-navbar/uni-navbar").then(i.bind(null, "101a"))
          },
          uniPopup: function() {
            return Promise.all([i.e("common/vendor"), i.e("components/uni-popup/uni-popup")]).then(i.bind(null, "db3a"))
          }
        },
        a = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.isHide ? null : t.dataList.length),
            i = !t.isHide && t.topData && t.topData.scenicList ? t.topData.scenicList.length : null,
            n = !t.isHide && t.topData ? t.topData.aiShareList.slice(0, 3) : null,
            a = !t.isHide && t.hasHistory ? t.historyList.length : null,
            o = t.commentObj.content.length;
          t.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              g1: i,
              l0: n,
              g2: a,
              g3: o
            }
          })
        },
        o = []
    },
    bcfa: function(t, e, i) {
      i.r(e);
      var n = i("8d24"),
        a = i("d86a8");
      for (var o in a)["default"].indexOf(o) < 0 && function(t) {
        i.d(e, t, (function() {
          return a[t]
        }))
      }(o);
      i("208f");
      var s = i("828b"),
        r = Object(s.a)(a.default, n.b, n.c, !1, null, "6defd9f1", null, !1, n.a, void 0);
      e.default = r.exports
    },
    d86a8: function(t, e, i) {
      i.r(e);
      var n = i("080a"),
        a = i.n(n);
      for (var o in n)["default"].indexOf(o) < 0 && function(t) {
        i.d(e, t, (function() {
          return n[t]
        }))
      }(o);
      e.default = a.a
    }
  },
  [
    ["0833", "common/runtime", "common/vendor", "union/common/vendor"]
  ]
]);
