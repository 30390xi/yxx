// Extracted from union/pages/ai/index.js; webpack module "819c".
// Compiled code for analysis; not an original source file.
module.exports = {
    "819c": function(t, e, i) {
      (function(t, a) {
        var s = i("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = s(i("af34")),
          o = s(i("7ca3")),
          r = {
            components: {
              zPaging: function() {
                Promise.all([i.e("common/vendor"), i.e("union/common/vendor"), i.e("union/components1/z-paging/z-paging")]).then(function() {
                  return resolve(i("a7ee"))
                }.bind(null, i)).catch(i.oe)
              },
              chatInputBar: function() {
                i.e("union/components1/chat-input-bar/chat-input-bar").then(function() {
                  return resolve(i("8fa6"))
                }.bind(null, i)).catch(i.oe)
              },
              chatItem: function() {
                i.e("union/components1/chat-item/chat-item").then(function() {
                  return resolve(i("5bc8"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            data: function() {
              return this.hoveImgList = [], this.hoveImg = !1, this.hoveImgListUrl = [], this.newVal = "", {
                dataList: [],
                isTyping: !1,
                currentMassage: {},
                currentIndex: 0,
                currentContent: "",
                pushingProgress: !0,
                task: null,
                scrollTop: 0,
                showHide: !0,
                tripList: [],
                scenicSpotList: [],
                deliciousFoodList: [],
                defaultList: [],
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
                character: null,
                index: 0,
                stratSet: !1,
                dataInfosList: [],
                WshowHide: !1,
                newValCopy: "",
                playIndex: 0,
                arrResult: [],
                isIos: !1,
                isNetworkAnomaly: !1,
                timeNetwork: null,
                playShow: !1,
                maskShow: !0,
                delayBtn: !1,
                timerList: []
              }
            },
            filters: {},
            watch: {
              typeVideo: {
                handler: function(e) {
                  var i = Number(e),
                    a = t.createVideoContext("myVideo1", this),
                    s = t.createVideoContext("myVideo3", this),
                    n = t.createVideoContext("myVideo2", this),
                    o = t.createVideoContext("myVideo4", this);
                  switch (a.seek(0), "ios" == t.getSystemInfoSync().platform ? n.seek(.1) : n.seek(5.2), s.seek(0), a.pause(), n.pause(), s.pause(), o.pause(), i) {
                    case 1:
                      this.clearStarts(), this.task && this.task.abort(), this.playShow = !1, a.play();
                      break;
                    case 2:
                      n.play();
                      break;
                    case 3:
                      this.playShow = !1, s.play();
                      break;
                    case 4:
                      o.play()
                  }
                },
                deep: !0,
                immediate: !0
              }
            },
            computed: {},
            onPageScroll: function(t) {},
            onLoad: function(e) {
              var i = this;
              this.audioPlayer = a.createInnerAudioContext(), this.getRecommendList();
              var s = t.getSystemInfoSync();
              "android" === s.platform ? this.isIos = !1 : "ios" === s.platform ? this.isIos = !0 : this.isIos = !1, setTimeout((function() {
                i.maskShow = !1
              }), 1e3)
            },
            onShow: function() {
              var e = this;
              2 == t.getStorageSync("askQuestion") && (this.typeVideo = 4, this.opacity = 1, this.showImage = !1, this.showHide = !1, this.$forceUpdate());
              var i = t.getStorageSync("HISTORY_ID");
              i && (this.showImage = !1, this.typeVideo = 4, this.opacity = 1, this.showHide = !1, this.dataId = JSON.parse(JSON.stringify(i)), this.flowId = JSON.parse(JSON.stringify(i)), t.removeStorageSync("HISTORY_ID"), this.loadMore = "loadmore", this.$refs.paging.clear(), setTimeout((function() {
                e.queryList(1, 10)
              }), 600)), this.$refs.paging.setInit()
            },
            onHide: function() {
              this.clearAllTimers(), t.onKeyboardHeightChange()
            },
            onUnload: function() {
              this.clearAllTimers(), t.removeStorageSync("askQuestion"), t.removeStorageSync("HISTORY_ID");
              var e = t.createVideoContext("myVideo1", this),
                i = t.createVideoContext("myVideo3", this),
                a = t.createVideoContext("myVideo2", this);
              e.seek(0), a.seek(0), i.seek(0), this.loadMore = "loadmore", this.dataList = [], this.$refs.paging.clear(), this.$refs.paging.complete([]), this.$refs.paging.complete(!1), this.clearStarts()
            },
            methods: {
              pauseFun: function() {
                t.createVideoContext("myVideo1", this).seek(0)
              },
              showFun: function() {
                this.clearAllTimers(), this.showHide || (this.showHide = !0, this.typeVideo = 1, this.delayBtn = !1, this.task && this.task.abort(), this.pushingProgressShow = !0, t.setStorageSync("askQuestion", 1), t.removeStorageSync("HISTORY_ID"), this.dataList = [], this.$forceUpdate(), this.clearStarts())
              },
              loadedmetadata1: function() {
                var e = t.createVideoContext("myVideo1", this),
                  i = this;
                1 == this.typeVideo && this.showHide && (e.play(), setTimeout((function() {
                  i.showImage = !1, i.opacity = 1
                }), 500))
              },
              loadedmetadata4: function() {
                var t = this;
                setTimeout((function() {
                  t.videoReady4 = !0
                }), 500)
              },
              loadedmetadata3: function() {
                var t = this;
                setTimeout((function() {
                  t.videoReady3 = !0
                }), 500)
              },
              ended1: function() {
                (this.playIndex++, 2 == this.playIndex) ? (this.typeVideo = 2, this.playIndex = 0) : t.createVideoContext("myVideo1", this).play()
              },
              greetings: function() {
                var t = (new Date).getHours();
                return t >= 5 && t < 10 ? "早上好" : t >= 10 && t < 12 ? "上午好" : t >= 12 && t < 14 ? "中午好" : t >= 14 && t < 19 ? "下午好" : "晚上好"
              },
              queryList: function(t, e) {
                var i = this;
                if (!this.dataId || "nomore" == this.loadMore) return this.$refs.paging.complete([]), !1;
                1 == t && (this.dataList = []), this.$uniApi.dataRequestNoLoading("get", "ai/aiEscort/dialogue/page", (0, o.default)({
                  sessionId: this.dataId,
                  size: 30,
                  current: t
                }, "size", e)).then((function(e) {
                  if (1 === e.code) {
                    var a = e.data.records;
                    if (i.totle = e.data.total, e.data.total > 0 ? (1 === e.data.current ? i.historyList = a : i.historyList = i.historyList.concat(a), e.data.current < e.data.pages ? (i.page = i.page + 1, i.loadMore = "loadmore") : i.loadMore = "nomore") : (i.historyList = [], i.loadMore = "nomore"), a && a.length) {
                      var s = [];
                      a.forEach((function(t) {
                        if (t.content)
                          if (1 == t.type) t.content && -1 == t.content.indexOf("专属攻略：是") && s.push({
                            content: decodeURIComponent(t.content),
                            type: 1,
                            state: 1,
                            end: !0,
                            name: "ai",
                            list: [],
                            id: (new Date).getTime()
                          });
                          else {
                            var e = "",
                              i = t.content;
                            t.content.indexOf("の") > -1 ? (e = t.content.split("の")[1].replaceAll("swiperItem", "swiperItem swiperItemBox").replaceAll(/<video(.*?)src="(.*?) - (.*?)"(.*?)>/g, '<video$1src="$2-$3"$4>').replaceAll(/<img src="(.*?) - (.*?)" alt="">/g, '<img src="$1-$2" alt="">'), i = t.content.split("の")[0], s.push({
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
                              divergenceProblem: []
                            })) : s.push({
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
                              divergenceProblem: []
                            }), s[s.length - 1].state = 1, s[s.length - 1].divergenceProblem = t.deriveIssue ? t.deriveIssue.data : [], t.jsonData && "o001" == t.jsonData.extend.code && (s[s.length - 1].content = "为您推荐官方游玩攻略：", s[s.length - 1].officialGuide = t.jsonData ? t.jsonData.data : [], s[s.length - 1].exclusive = t.content, s[s.length - 1].officialGuideType = 2), t.jsonData && "s001" == t.jsonData.extend.code && (s[s.length - 1].list = t.jsonData ? t.jsonData.data : []), t.jsonData && "e001" == t.jsonData.extend.code && (s[s.length - 1].exclusiveRoute = t.jsonData ? t.jsonData.data : []), t.jsonData && "p002" == t.jsonData.extend.code && (s[s.length - 1].redirectContent = JSON.parse(i), s[s.length - 1].content = "检测到您需要攻略或规划？  \n👉 点击下方 「AI旅行搭子」，一键生成专属方案！  \n（不满意？可随时重新生成哦~）"), t.content.indexOf("の") > -1 && s.push({
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
                      })), i.$refs.paging.complete(s)
                    } else if (1 == t) return i.dataList = [], i.$refs.paging.complete([]), !1
                  }
                }))
              },
              clearAllTimers: function() {
                this.timeNetwork && (clearTimeout(this.timeNetwork), this.timeNetwork = null), this.timerList.forEach((function(t) {
                  clearTimeout(t)
                })), this.timerList = []
              },
              echoDialogue: function(t) {
                var e = this;
                this.$uniApi.dataRequestNoLoading("get", "ai/aiEscort/dialogue/page", {
                  current: this.page,
                  sessionId: t,
                  size: 30
                }).then((function(t) {
                  if (1 === t.code) {
                    var i = t.data.records;
                    t.data.total > 0 ? (1 === t.data.current ? e.historyList = i : e.historyList = e.historyList.concat(i), t.data.current < t.data.pages ? (e.page = e.page + 1, e.loadMore = "loadmore") : e.loadMore = "nomore") : (e.historyList = [], e.loadMore = "nomore")
                  }
                }))
              },
              createData: function(e) {
                var i = this;
                this.$uniApi.dataRequestNoLoading("post", "ai/aiEscort/session/create", {
                  bussType: 1,
                  openId: t.getStorageSync("wxopenid"),
                  title: e
                }).then((function(a) {
                  1 === a.code && (i.flowId = a.data, t.setStorageSync("askQuestion", 2), i.doSend(e))
                }))
              },
              openAudio: function() {
                this.isSpeaking ? (this.isSpeaking = !1, this.audioPlayer.pause()) : (this.isSpeaking = !0, this.audioPlayer.play())
              },
              getRecommendList: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("post", "ai/aiRecommend/recommendList", [6, 7, 8, 9]).then((function(e) {
                  1 === e.code && e.data && (t.tripList = e.data[6] || [], t.scenicSpotList = e.data[7] || [], t.deliciousFoodList = e.data[8] || [], t.defaultList = e.data[9] || [])
                }))
              },
              askAgain: function(e) {
                this.typeVideo = 4, this.showHide = !1, t.setStorageSync("askQuestion", 2), this.doSend(e)
              },
              exclusive: function(e) {
                this.typeVideo = 4, this.showHide = !1, t.setStorageSync("askQuestion", 2), this.doSend("专属攻略", e)
              },
              clearDataStop: function() {
                this.task && this.task.abort(), this.pushingProgress = !0, this.pushingProgressShow = !0
              },
              clearData: function() {
                this.clearAllTimers(), this.delayBtn = !1, this.task && this.task.abort(), this.typeVideo = 1, this.showHide = !0, t.setStorageSync("askQuestion", 1), t.removeStorageSync("HISTORY_ID"), this.dataList = [], this.$forceUpdate(), this.clearStarts()
              },
              setShowHide: function(t) {
                var e = this;
                this.typeVideo = 4, this.showHide = !1, this.opacity || setTimeout((function() {
                  e.opacity = 1
                }), 500), this.createData(t)
              },
              goQuestion: function(t, e) {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_" + ["guide", "scenicSpots", "cuisine"][e - 1] + "_click",
                  eventName: ["伴游行程攻略推荐", "伴游问景点", "伴游问美食"][e - 1],
                  eventParams: {
                    language: 0,
                    question: t,
                    userId: "ojWxP5WEclcm0Ebaj3h-ZNstnt0A",
                    sessionId: "1881193790388047873",
                    bussType: 1
                  }
                }), this.typeVideo = 4, this.showHide = !1, this.createData(t)
              },
              keyboardHeightChange: function(t) {
                this.$refs.inputBar.updateKeyboardHeightChange(t)
              },
              hidedKeyboard: function() {
                this.$refs.inputBar.hidedKeyboard()
              },
              stopSpeak: function() {
                this.clearAllTimers(), this.dataList[0].content = this.dataList[0].content.replaceAll('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', ""), this.task && (this.task.abort(), this.dataList[0].content || (this.dataList[0].content = "回答终止，请重新提问。"), this.pushingProgress = !0, this.dataList[0].end = !0, this.task = null, this.pushingProgressShow = !0, this.typeVideo = 4, this.clearStarts())
              },
              findPreviousObjectById: function(t) {
                var e = this.dataList.findIndex((function(e) {
                  return e.id === t
                }));
                return e > 0 ? this.dataList[e + 1].content : null
              },
              doSend: function(t, e) {
                var i = this;
                this.pushingProgress = !1, this.stratSet = !0, this.$refs.paging.scrollToBottom(), setTimeout((function() {
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
                      id: (new Date).getTime()
                    }), e && e.id) {
                    var a = e.exclusive;
                    i.toSend(a)
                  } else i.toSend(t);
                  i.$refs.paging.scrollToBottom()
                }), 300)
              },
              toSend: function(e) {
                var i = this,
                  a = this;
                this.dataInfosList = [], this.pushingProgressShow = !1, setTimeout((function() {
                  i.$refs.paging.scrollToBottom()
                }), 100), this.task = t.request({
                  url: "".concat(getApp().globalData.requestUrl, "ai/app/escort/ai/chat"),
                  enableChunked: !0,
                  method: "POST",
                  timeout: 9e5,
                  data: {
                    language: 0,
                    question: e,
                    userId: t.getStorageSync("wxopenid"),
                    sessionId: this.flowId,
                    bussType: 1
                  },
                  success: function(t) {
                    console.log(t), 200 == t.statusCode && (i.stratSet = !1, i.WshowHide = !1, i.newValCopy = "", i.newVal += " ", i.addNextCharacter()), 400 == t.statusCode && (i.clearStarts(), i.dataList[0].content = "网络走丢了，请稍后重试!", i.task && i.task.abort()), a.dataList[0].end = !0, a.$data.currentIndex = 0, a.$data.currentContent = "", a.$data.sendState = !1, a.isNetworkAnomaly = !1, a.delayBtn = !0, i.clearAllTimers()
                  },
                  fail: function(t) {
                    console.log(t, "ssssssssssss"), i.stratSet = !1, i.delayBtn = !0, "request:fail " == t.errMsg && (i.clearStarts(), i.dataList[0].content = "网络走丢了，请稍后重试!", i.task && i.task.abort()), "request:fail abort" == t.errMsg && i.dataList[0].content && i.dataList[0].content.endsWith('<img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>') && (i.dataList[0].content = i.dataList[0].content.slice(0, i.dataList[0].content.length - 97))
                  }
                }), this.task.onChunkReceived((function(t) {
                  i.clearAllTimers(), a.delayBtn = !0, a.isNetworkAnomaly = !0, a.timeNetwork = setTimeout((function() {
                    i.clearAllTimers(), i.clearStarts(), i.$util.showToast("网络异常，请重试！"), i.task && i.task.abort()
                  }), 3e4), a.timerList.push(a.timeNetwork);
                  var e, s = new Uint8Array(t.data);
                  if ("[object Uint8Array]" === Object.prototype.toString.call(s)) e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, n.default)(s))));
                  else if (s instanceof ArrayBuffer) {
                    var o = new Uint8Array(s);
                    e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, n.default)(o))))
                  }
                  3 == a.typeVideo || i.showHide || (a.typeVideo = 3), console.log(e), e.split("^").forEach((function(t) {
                    if (t) {
                      var e = JSON.parse(t);
                      console.log(e), 0 == e.extend.type && "c001" == e.extend.code && (a.dataList[0].state = 1, a.newVal += e.data, a.character || a.addNextCharacter()), 0 == e.extend.type && "e001" == e.extend.code && (a.newVal += e.data, a.character || a.addNextCharacter()), "s001" == e.extend.code && 0 == e.extend.type && (a.dataList[0].state = 1, a.newVal += e.data, a.character || a.addNextCharacter()), "o001" == e.extend.code && (a.dataList[0].state = 1, a.character || (e ? (a.newVal = "为您推荐官方游玩攻略：", a.addNextCharacter()) : (a.dataList[0].officialGuide = [], a.dataList[0].officialGuideType = 1))), "p002" == e.extend.code && (a.dataList[0].state = 1, a.dataList[0].redirectContent = JSON.parse(e.data), a.newVal += "检测到您需要攻略或规划？  \n👉 点击下方 「AI旅行搭子」，一键生成专属方案！  \n（不满意？可随时重新生成哦~）", a.character || a.addNextCharacter()), "p005" == e.extend.code && (a.dataList[0].state = 1, a.dataList[0].changeAnswer = JSON.parse(e.data), a.newVal += "根据您的修改意见，点击下方按钮进行重新规划吧！", a.character || a.addNextCharacter()), i.dataInfosList.push(e)
                    }
                  }))
                }))
              },
              groupElements: function(t) {
                if (this.arrResult.length > 0) {
                  var e = this.arrResult[this.arrResult.length - 1],
                    i = 15 - e.length;
                  if (i > 0) {
                    e += i > t.length ? t : t.slice(0, i)
                  }
                  15 === e.length && (this.arrResult[this.arrResult.length - 1] = e)
                }
                for (var a = "", s = 0; s < t.length; s++) 15 === (a += t[s]).length && (this.arrResult.push(a), a = "");
                a.length > 0 && this.arrResult.push(a)
              },
              resetTravel: function(e) {
                var i = "/union/pages/aiTravel/index",
                  a = [];
                e && ["departureTime", "destination", "budget", "interestPoint", "returnTime", "adult", "children", "older", "change"].forEach((function(t) {
                  e[t] && a.push("".concat(t, "=").concat(encodeURIComponent(e[t])))
                })), a.length > 0 && (i += "?" + a.join("&")), t.navigateTo({
                  url: i
                })
              },
              setCardInfo: function(t) {
                t && (1 == t.extend.type && "e001" == t.extend.code && (this.dataList[0].exclusiveRoute = t.data || {}), 0 == t.extend.type && "eq001" == t.extend.code && (this.dataList[0].exclusive = t.data || {}), "s001" == t.extend.code && 1 == t.extend.type && (this.dataList[0].list = t.data || []), "o001" == t.extend.code && 1 == t.extend.type && (this.dataList[0].officialGuide = t.data || [], this.dataList[0].officialGuideType = 2), 0 == t.extend.type && "q001" == t.extend.code && (this.dataList[0].divergenceProblem = t.data || []), this.$forceUpdate())
              },
              clearStarts: function() {
                var t = this;
                this.hoveImg = !1, this.hoveImgList = [], this.hoveImgListUrl = [], JSON.parse(JSON.stringify(this.dataInfosList)).forEach((function(e) {
                  t.setCardInfo(e)
                })), this.dataInfosList = [], this.newVal = "", this.index = 0, this.stratSet = !1, this.pushingProgress = !0, this.pushingProgressShow = !0, this.character && (clearTimeout(this.character), this.character = null)
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
                      a = this.dataList[0].content1.lastIndexOf("</video>"),
                      s = this.dataList[0].content1.lastIndexOf("景点视频：<");
                    this.dataList[0].content && i > -1 && -1 == this.hoveImgList.indexOf(i) && (-1 == e || -1 == this.hoveImgList.indexOf(e) || e < i) && !this.hoveImg ? (this.dataList[0].content += 'img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(i)) : e > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(e) ? (this.hoveImgList.push(e), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<i"), this.dataList[0].content1.lastIndexOf('">') + 2).replace(/ - /g, "-")), this.dataList[0].content = this.dataList[0].content.replace('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImgListUrl[this.hoveImgListUrl.length - 1]), this.$forceUpdate()) : this.dataList[0].content && s > -1 && -1 == this.hoveImgList.indexOf(s) && (-1 == a || -1 == this.hoveImgList.indexOf(a) || a < s) && !this.hoveImg ? (this.dataList[0].content += 'img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(s)) : a > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(a) ? (this.hoveImgList.push(a), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<v"), this.dataList[0].content1.lastIndexOf("</video>") + 8).replace(/ - /g, "-")), this.dataList[0].content += this.hoveImgListUrl[this.hoveImgListUrl.length - 1], this.$forceUpdate()) : this.hoveImg || (this.dataList[0].content += t)
                  } else this.dataList[0].content += t;
                  this.dataList[0].content1 += t, this.index++, this.addNextCharacter()
                } else clearTimeout(this.character), this.character = null, this.stratSet || this.showHide || (this.typeVideo = 4, this.clearStarts())
              }
            }
          };
        e.default = r
      }).call(this, i("df3c").default, i("3223").default)
    },
};
