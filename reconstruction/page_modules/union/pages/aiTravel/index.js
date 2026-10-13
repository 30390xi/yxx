// Extracted from union/pages/aiTravel/index.js; webpack module ceca.
// Compiled code for analysis; not an original source file.
module.exports = {
    ceca: function(t, e, i) {
      (function(t, n) {
        var s = i("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = s(i("af34")),
          a = s(i("7ca3")),
          r = s(i("34cf")),
          d = {
            components: {
              zPaging: function() {
                Promise.all([i.e("common/vendor"), i.e("union/common/vendor"), i.e("union/components1/z-paging/z-paging")]).then(function() {
                  return resolve(i("a7ee"))
                }.bind(null, i)).catch(i.oe)
              },
              chatInputBar: function() {
                i.e("union/components1/chat-input-bar/chat-input-bar-travel").then(function() {
                  return resolve(i("0e34"))
                }.bind(null, i)).catch(i.oe)
              },
              chatItem: function() {
                i.e("union/components1/chat-item/chat-item-travel").then(function() {
                  return resolve(i("048d"))
                }.bind(null, i)).catch(i.oe)
              },
              DateRangePicker: function() {
                i.e("union/pages/aiTravel/components/dateRangePicker").then(function() {
                  return resolve(i("b363"))
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
                typeVideo: 4,
                showImage: !0,
                opacity: 0,
                character: null,
                index: 0,
                stratSet: !1,
                dataInfosList: [],
                WshowHide: !1,
                newValCopy: "",
                timerList: [],
                playIndex: 0,
                arrResult: [],
                isIos: !1,
                isNetworkAnomaly: !1,
                timeNetwork: null,
                maskShow: !0,
                delayBtn: !1,
                cityColumns: [
                  ["西安市", "宝鸡市", "咸阳市", "渭南市", "铜川市", "延安市", "榆林市", "汉中市", "安康市", "商洛市"]
                ],
                showDateRangePicker: !1,
                form: {
                  city: "",
                  price: "",
                  wantDO: [],
                  beginTime: "",
                  endTime: "",
                  beginPeriod: "",
                  endPeriod: "",
                  adult: "1",
                  children: "0",
                  older: "0"
                },
                cityIndex: 0,
                showWantDo: !1,
                wantDoOptions: ["美食", "文化", "自然风光", "历史古迹", "购物", "娱乐", "摄影", "民俗体验"],
                strategyContent: "",
                shareObj: {},
                tempInterestPoint: null,
                interestPointFromOption: null,
                isForbidden: !1,
                reStartTime: "",
                reEndTime: "",
                keyboardHeight: 0,
                sessionCreateTime: null,
                sessionExpireTimer: null,
                sessionExpired: !1
              }
            },
            filters: {},
            watch: {
              typeVideo: {
                handler: function(e) {
                  var i = Number(e),
                    n = t.createVideoContext("myVideo3", this),
                    s = t.createVideoContext("myVideo4", this);
                  switch (s.seek(0), n.pause(), i) {
                    case 3:
                      n.play();
                      break;
                    case 4:
                      s.play()
                  }
                },
                deep: !0,
                immediate: !0
              },
              showHide: function(t) {
                !0 === t && this.sessionExpireTimer && (clearTimeout(this.sessionExpireTimer), this.sessionExpireTimer = null)
              }
            },
            computed: {
              isStrategy: function() {
                return this.dataList && this.dataList.length <= 2 || this.isForbidden
              }
            },
            onPageScroll: function(t) {},
            onLoad: function(e) {
              var i = this;
              if (e.departureTime && e.returnTime) {
                var s = decodeURIComponent(e.departureTime),
                  o = decodeURIComponent(e.returnTime),
                  a = new Date(s),
                  d = new Date(o).getTime() - a.getTime();
                Math.ceil(d / 864e5) > 5 ? t.showToast({
                  title: "旅行时间请不要超过5天",
                  icon: "none"
                }) : (this.form.beginTime = s, this.form.endTime = o, this.reStartTime = s, this.reEndTime = o, this.$refs.datePicker.simulateSelectRange(this.reStartTime, this.reEndTime))
              } else e.departureTime && (this.form.beginTime = decodeURIComponent(e.departureTime), this.reStartTime = decodeURIComponent(e.departureTime)), e.returnTime && (this.form.endTime = decodeURIComponent(e.returnTime), this.reEndTime = decodeURIComponent(e.returnTime));
              if (e.destination && (this.form.city = decodeURIComponent(e.destination)), e.interestPoint) {
                var h = decodeURIComponent(e.interestPoint);
                this.form.wantDO = [h], this.tempInterestPoint = h, this.interestPointFromOption = h
              }
              if (e.budget) {
                var c = decodeURIComponent(e.budget);
                parseInt(c) > 9999 ? t.showToast({
                  title: "预算金额请不要超过9999元",
                  icon: "none"
                }) : this.form.price = c
              }
              if (e.change) {
                var l = decodeURIComponent(e.change);
                this.form.change = l
              }
              var u = 0;
              e.adult && (u += parseInt(decodeURIComponent(e.adult)) || 0);
              e.children && (u += parseInt(decodeURIComponent(e.children)) || 0);
              e.older && (u += parseInt(decodeURIComponent(e.older)) || 0);
              u > 8 ? t.showToast({
                title: "出行人数请不要超过8人",
                icon: "none"
              }) : (e.adult && (this.form.adult = decodeURIComponent(e.adult)), e.children && (this.form.children = decodeURIComponent(e.children)), e.older && (this.form.older = decodeURIComponent(e.older))), this.audioPlayer = n.createInnerAudioContext(), this.getWantList(), setTimeout((function() {
                i.maskShow = !1
              }), 1e3), this.$nextTick((function() {
                if (i.$refs.paging.scrollToTop(), i.reStartTime && i.reEndTime && i.$refs.datePicker) {
                  var t = i.reStartTime.split("-").map(Number),
                    e = (0, r.default)(t, 3),
                    n = e[0],
                    s = e[1],
                    o = e[2],
                    a = i.reEndTime.split("-").map(Number),
                    d = (0, r.default)(a, 3),
                    h = d[0],
                    c = d[1],
                    l = d[2];
                  i.$refs.datePicker.year = n, i.$refs.datePicker.month = s, i.$refs.datePicker.changeData();
                  var u = o - 1,
                    m = l - 1;
                  i.$refs.datePicker.dateClick(u), i.reStartTime !== i.reEndTime && (n === h && s === c || (i.$refs.datePicker.year = h, i.$refs.datePicker.month = c, i.$refs.datePicker.changeData()), i.$refs.datePicker.dateClick(m))
                }
              })), t.onKeyboardHeightChange((function(t) {
                i.keyboardHeight = t.height > 0 ? t.height : 0
              }))
            },
            onShow: function() {
              this.$refs.paging.setInit(), this.checkSessionExpired()
            },
            onHide: function() {
              this.clearAllTimers(), this.timeNetwork = null, t.hideKeyboard(), this.sessionExpireTimer && (clearTimeout(this.sessionExpireTimer), this.sessionExpireTimer = null)
            },
            onUnload: function() {
              this.clearAllTimers(), this.timeNetwork = null, t.createVideoContext("myVideo3", this).seek(0), this.loadMore = "loadmore", this.dataList = [], this.$refs.paging.clear(), this.$refs.paging.complete([]), this.$refs.paging.complete(!1), this.clearStarts(), this.sessionExpireTimer && (clearTimeout(this.sessionExpireTimer), this.sessionExpireTimer = null)
            },
            onShareAppMessage: function() {
              return {
                title: this.shareObj.title,
                imageUrl: "https://eshopfile.zhiyousx.com/175214881804186478.png",
                path: this.shareObj.path + "?sessionId=".concat(this.flowId)
              }
            },
            methods: {
              getWantList: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("get", "ai/interestPoint/list").then((function(e) {
                  if (1 === e.code) {
                    var i = e.data || [];
                    i = i.map((function(t) {
                      return t.name
                    })), t.tempInterestPoint && !i.includes(t.tempInterestPoint) && i.unshift(t.tempInterestPoint), t.wantDoOptions = i
                  }
                }))
              },
              loadedmetadata: function() {
                var e = t.createVideoContext("myVideo4", this),
                  i = this;
                4 == this.typeVideo && (e.play(), setTimeout((function() {
                  i.showImage = !1, i.opacity = 1
                }), 500))
              },
              clickShare: function(t) {
                console.log(t, "shareObj"), this.shareObj = t
              },
              bindPickerChange: function(t) {
                this.cityIndex = t.detail.value, this.form.city = this.cityColumns[0][this.cityIndex]
              },
              queryList: function(t, e) {
                var i = this;
                if (!this.dataId || "nomore" == this.loadMore) return this.$refs.paging.complete([]), !1;
                1 == t && (this.dataList = []), this.$uniApi.dataRequestNoLoading("get", "ai/aiEscort/dialogue/page", (0, a.default)({
                  sessionId: this.dataId,
                  size: 30,
                  current: t
                }, "size", e)).then((function(e) {
                  if (1 === e.code) {
                    var n = e.data.records;
                    if (i.totle = e.data.total, e.data.total > 0 ? (1 === e.data.current ? i.historyList = n : i.historyList = i.historyList.concat(n), e.data.current < e.data.pages ? (i.page = i.page + 1, i.loadMore = "loadmore") : i.loadMore = "nomore") : (i.historyList = [], i.loadMore = "nomore"), n && n.length) {
                      var s = [];
                      n.forEach((function(t) {
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
                            }), s[s.length - 1].state = 1, s[s.length - 1].divergenceProblem = t.deriveIssue ? t.deriveIssue.data : [], t.jsonData && "o001" == t.jsonData.extend.code && (s[s.length - 1].content = "为您推荐官方游玩攻略：", s[s.length - 1].officialGuide = t.jsonData ? t.jsonData.data : [], s[s.length - 1].exclusive = t.content, s[s.length - 1].officialGuideType = 2), t.jsonData && "s001" == t.jsonData.extend.code && (s[s.length - 1].list = t.jsonData ? t.jsonData.data : []), t.jsonData && "e001" == t.jsonData.extend.code && (s[s.length - 1].exclusiveRoute = t.jsonData ? t.jsonData.data : []), t.content.indexOf("の") > -1 && s.push({
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
              createData: function(e) {
                var i = this;
                this.$uniApi.dataRequestNoLoading("post", "ai/aiEscort/session/create", {
                  bussType: 2,
                  openId: t.getStorageSync("wxopenid"),
                  title: e
                }).then((function(t) {
                  1 === t.code && (i.flowId = t.data, i.pushingProgress = !1, i.stratSet = !0, i.$refs.paging.scrollToBottom(), i.doSend("", {}), i.sessionExpired = !1)
                }))
              },
              startSessionExpireTimer: function() {
                var t = this;
                this.sessionExpireTimer && clearTimeout(this.sessionExpireTimer), this.sessionExpireTimer = setTimeout((function() {
                  t.handleSessionExpired()
                }), 6e5)
              },
              handleSessionExpired: function() {
                var e = this;
                this.sessionExpired = !0, t.showModal({
                  title: "提示",
                  content: "会话已过期，请重新开始",
                  showCancel: !1,
                  success: function() {
                    e.setcolse(), t.redirectTo({
                      url: "/pages/index/index"
                    })
                  }
                })
              },
              checkSessionExpired: function() {
                var t = this;
                if (this.sessionCreateTime && !this.sessionExpired) {
                  var e = Date.now();
                  if (e - this.sessionCreateTime >= 6e5) this.handleSessionExpired();
                  else {
                    var i = 6e5 - (e - this.sessionCreateTime);
                    this.sessionExpireTimer = setTimeout((function() {
                      t.handleSessionExpired()
                    }), i)
                  }
                }
              },
              exclusive: function(t) {
                this.typeVideo = 4, this.showHide = !1, this.doSend("专属攻略", t)
              },
              clearDataStop: function() {
                this.task && this.task.abort(), this.pushingProgress = !0, this.pushingProgressShow = !0
              },
              setcolse: function() {
                this.clearData(), this.$refs.datePicker && this.$refs.datePicker.init && this.$refs.datePicker.init()
              },
              clearData: function() {
                this.clearAllTimers(), this.timeNetwork = null, this.delayBtn = !1, this.task && this.task.abort(), this.form = {
                  city: "",
                  price: "",
                  wantDO: [],
                  beginTime: "",
                  endTime: "",
                  beginPeriod: "",
                  endPeriod: "",
                  adult: "1",
                  children: "0",
                  older: "0"
                }, this.typeVideo = 4, this.showHide = !0, t.removeStorageSync("HISTORY_ID"), this.dataList = [], this.$forceUpdate(), this.clearStarts()
              },
              startChat: function() {
                if (this.$eventAnalyse.analyse({
                    eventTag: "aiTravel_form_submit",
                    eventName: "旅行搭子表单提交",
                    eventParams: JSON.stringify({
                      formParams: this.form
                    })
                  }), this.form.city)
                  if (this.form.beginTime && this.form.endTime)
                    if (this.form.price)
                      if (Number(this.form.price) <= 0) t.showToast({
                        title: "请输入大于0的预算金额",
                        icon: "none"
                      });
                      else if (+this.form.price > 9999) t.showToast({
                  title: "金额过大，请输入小于9999的价格",
                  icon: "none"
                });
                else if (!(this.form.adult || this.form.children || this.form.older) || 0 == this.form.adult && 0 == this.form.children && 0 == this.form.older) t.showToast({
                  title: "请至少选择一名旅游人次",
                  icon: "none"
                });
                else {
                  (parseInt(this.form.adult) || 0) + (parseInt(this.form.children) || 0) + (parseInt(this.form.older) || 0) > 8 ? t.showToast({
                    title: "出行总人数不能超过8人",
                    icon: "none"
                  }) : (this.typeVideo = 4, this.showHide = !1, this.createData("AI旅游行程规划"))
                } else t.showToast({
                  title: "请输入预算金额",
                  icon: "none"
                });
                else t.showToast({
                  title: "请选择旅行时间",
                  icon: "none"
                });
                else t.showToast({
                  title: "请选择目的地",
                  icon: "none"
                })
              },
              setShowHide: function(t) {
                this.typeVideo = 4, this.showHide = !1, this.createData(t)
              },
              keyboardHeightChange: function(t) {
                this.$refs.inputBar.updateKeyboardHeightChange(t)
              },
              hidedKeyboard: function() {
                this.$refs.inputBar.hidedKeyboard()
              },
              stopSpeak: function() {
                this.clearAllTimers(), this.timeNetwork = null, this.dataList[0].content = this.dataList[0].content.replaceAll('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', ""), this.task && (this.task.abort(), this.dataList[0].content || (this.dataList[0].content = "回答终止，请重新提问。"), this.pushingProgress = !0, this.dataList[0].end = !0, this.task = null, this.pushingProgressShow = !0, this.typeVideo = 4, this.clearStarts())
              },
              findPreviousObjectById: function(t) {
                var e = this.dataList.findIndex((function(e) {
                  return e.id === t
                }));
                return e > 0 ? this.dataList[e + 1].content : null
              },
              resetTravel: function(e) {
                if (console.log(e, "redirectContent"), this.pushingProgressShow) {
                  this.pushingProgress = !0, this.pushingProgressShow = !0;
                  var i = "/union/pages/aiTravel/index",
                    n = [];
                  e && ["departureTime", "destination", "budget", "interestPoint", "returnTime", "adult", "children", "older", "change"].forEach((function(t) {
                    e[t] && n.push("".concat(t, "=").concat(encodeURIComponent(e[t])))
                  })), n.length > 0 && (i += "?" + n.join("&")), t.redirectTo({
                    url: i
                  })
                } else this.$util.showToast("正在回答，请稍候")
              },
              changePlan: function(t) {
                this.dataList = this.dataList.filter((function(t) {
                  return !t.strategy && !t.isText
                })), console.log(this.dataList, "this.dataList"), this.$refs.paging.scrollToBottom(), this.doSend("", {}, t)
              },
              doSend: function(t, e) {
                var i = this,
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                this.sessionCreateTime = Date.now(), this.startSessionExpireTimer(), this.pushingProgress = !1, this.stratSet = !0, this.$refs.paging.scrollToBottom(), setTimeout((function() {
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
                    var s = e.exclusive;
                    i.toSend(s)
                  } else i.toSend(t, n);
                  i.$refs.paging.scrollToBottom()
                }), 300)
              },
              toSend: function(e, i) {
                var n = this,
                  s = this;
                this.dataInfosList = [], this.pushingProgressShow = !1, setTimeout((function() {
                  n.$refs.paging.scrollToBottom()
                }), 100), this.isForbidden = !!i, this.task = t.request({
                  url: "".concat(getApp().globalData.requestUrl, "ai/app/travel/plan"),
                  enableChunked: !0,
                  method: "POST",
                  timeout: 9e5,
                  data: {
                    beginTime: this.form.beginTime,
                    endTime: this.form.endTime,
                    question: e,
                    city: this.form.city,
                    price: this.form.price,
                    wantDO: this.form.wantDO,
                    adult: +this.form.adult,
                    children: +this.form.children,
                    older: +this.form.older,
                    userId: t.getStorageSync("wxopenid"),
                    sessionId: this.flowId,
                    bussType: 2,
                    change: this.form.change
                  },
                  success: function(t) {
                    console.log(t, "success"), 200 == t.statusCode && (n.stratSet = !1, n.WshowHide = !1, n.newValCopy = "", n.addNextCharacter()), 400 == t.statusCode && (n.clearStarts(), n.dataList[0].content = "网络走丢了，请稍后重试!", n.task && n.task.abort()), s.dataList[0].end = !0, s.$data.currentIndex = 0, s.$data.currentContent = "", s.$data.sendState = !1, s.isNetworkAnomaly = !1, s.delayBtn = !0, s.clearAllTimers(), s.timeNetwork = null
                  },
                  fail: function(t) {
                    console.log(t, "ssssssssssss"), n.stratSet = !1, n.delayBtn = !0, "request:fail " == t.errMsg && (n.clearStarts(), n.dataList[0].content = "网络走丢了，请稍后重试!", n.task && n.task.abort()), "request:fail abort" == t.errMsg && n.dataList[0].content && n.dataList[0].content.endsWith('<img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>') && (n.dataList[0].content = n.dataList[0].content.slice(0, n.dataList[0].content.length - 97))
                  }
                }), this.task.onChunkReceived((function(t) {
                  s.clearAllTimers(), s.delayBtn = !0, s.isNetworkAnomaly = !0, s.timeNetwork = setTimeout((function() {
                    s.clearAllTimers(), n.clearStarts(), n.$util.showToast("网络异常，请重试！"), n.dataList[0].content || (n.dataList[0].content = "网络走丢了，请稍后重试!"), n.task && n.task.abort()
                  }), 3e4), s.timerList.push(s.timeNetwork);
                  var e, i = new Uint8Array(t.data);
                  if ("[object Uint8Array]" === Object.prototype.toString.call(i)) e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, o.default)(i))));
                  else if (i instanceof ArrayBuffer) {
                    var a = new Uint8Array(i);
                    e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, o.default)(a))))
                  }
                  3 == s.typeVideo || n.showHide || (s.typeVideo = 3), e.split("^").forEach((function(t) {
                    if (t) {
                      var e = JSON.parse(t);
                      console.log(e), 0 === e.code && s.dataList[0].cardLoading && (s.dataList[0].cardLoading = !1), 0 == e.extend.type && "c001" == e.extend.code && (s.dataList[0].state = 1, s.newVal += e.data, console.log(e.data), s.character || s.addNextCharacter()), 0 == e.extend.type && "e001" == e.extend.code && (s.newVal += e.data, s.character || s.addNextCharacter()), "s001" == e.extend.code && 0 == e.extend.type && (s.dataList[0].state = 1, s.newVal += e.data, s.character || s.addNextCharacter()), "p001" == e.extend.code && (s.dataList[0].state = 1, s.dataList[0].strategy = 1, s.dataList[0].cardLoading = !1, s.dataList[0].strategyContent = e.data), "p002" == e.extend.code && (s.dataList[0].state = 1, s.dataList[0].redirectContent = JSON.parse(e.data), s.newVal += "检测到您需要攻略或规划？  \n👉 点击下方 「AI旅行搭子」，一键生成专属方案！  \n（不满意？可随时重新生成哦~）", s.character || s.addNextCharacter()), "p003" == e.extend.code && (s.dataList[0].state = 1, s.dataList[0].isText = !0, s.newVal += e.data + "の", s.character || s.addNextCharacter()), "p004" == e.extend.code && (s.dataList[0].cardLoading = !0), "p005" == e.extend.code && (s.dataList[0].state = 1, s.dataList[0].changeAnswer = JSON.parse(e.data), s.newVal += "根据您的修改意见，点击下方按钮进行重新规划吧！", s.character || s.addNextCharacter()), n.dataInfosList.push(e)
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
                for (var n = "", s = 0; s < t.length; s++) 15 === (n += t[s]).length && (this.arrResult.push(n), n = "");
                n.length > 0 && this.arrResult.push(n)
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
              clearAllTimers: function() {
                this.timeNetwork && (clearTimeout(this.timeNetwork), this.timeNetwork = null), this.timerList.forEach((function(t) {
                  clearTimeout(t)
                })), this.timerList = []
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
                      s = this.dataList[0].content1.lastIndexOf("景点视频：<");
                    this.dataList[0].content && i > -1 && -1 == this.hoveImgList.indexOf(i) && (-1 == e || -1 == this.hoveImgList.indexOf(e) || e < i) && !this.hoveImg ? (this.dataList[0].content += 'img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(i)) : e > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(e) ? (this.hoveImgList.push(e), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<i"), this.dataList[0].content1.lastIndexOf('">') + 2).replace(/ - /g, "-")), this.dataList[0].content = this.dataList[0].content.replace('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImgListUrl[this.hoveImgListUrl.length - 1]), this.$forceUpdate()) : this.dataList[0].content && s > -1 && -1 == this.hoveImgList.indexOf(s) && (-1 == n || -1 == this.hoveImgList.indexOf(n) || n < s) && !this.hoveImg ? (this.dataList[0].content += 'img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(s)) : n > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(n) ? (this.hoveImgList.push(n), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<v"), this.dataList[0].content1.lastIndexOf("</video>") + 8).replace(/ - /g, "-")), this.dataList[0].content += this.hoveImgListUrl[this.hoveImgListUrl.length - 1], this.$forceUpdate()) : this.hoveImg || (this.dataList[0].content += t)
                  } else this.dataList[0].content += t;
                  this.dataList[0].content1 += t, this.index++, this.addNextCharacter()
                } else clearTimeout(this.character), this.character = null, this.stratSet || this.showHide || (this.typeVideo = 4, this.clearStarts())
              },
              handlePriceInput: function(t) {
                var e = this;
                console.log(t.detail.value);
                var i = /[^\d]/g;
                this.$nextTick((function() {
                  e.form.price = t.detail.value.replace(i, "")
                }))
              },
              showWantDoPopup: function() {
                console.log("showWantDoPopup clicked"), this.$refs.wantDoPopup.open()
              },
              popupChange: function(t) {
                console.log("popup change:", t)
              },
              toggleWantDo: function(t) {
                var e = this.form.wantDO.indexOf(t);
                e > -1 ? this.form.wantDO.splice(e, 1) : this.form.wantDO.push(t)
              },
              confirmWantDo: function() {
                this.$refs.wantDoPopup.close()
              },
              openDatePicker: function() {
                console.log("openDatePicker"), this.showDateRangePicker = !0
              },
              handleDateChange: function(t) {
                this.form.beginTime = t.startDate, this.form.endTime = t.endDate, this.form.beginPeriod = t.startPeriod, this.form.endPeriod = t.endPeriod
              },
              openTravelersPopup: function() {
                this.$refs.travelersPopup.open()
              },
              confirmTravelers: function() {
                this.form.adult && "" !== this.form.adult || (this.form.adult = "0"), this.form.children && "" !== this.form.children || (this.form.children = "0"), this.form.older && "" !== this.form.older || (this.form.older = "0"), this.$refs.travelersPopup.close()
              },
              changeTravelerCount: function(e, i) {
                var n = (parseInt(this.form[e], 10) || 0) + i;
                n >= 0 && n <= 8 ? this.form[e] = String(n) : n > 8 && t.showToast({
                  title: "单类人数不能超过8人",
                  icon: "none"
                })
              },
              handleTravelerInput: function(e, i) {
                var n = this,
                  s = /[^\d]/g;
                console.log(this.form[e]), this.$nextTick((function() {
                  var o = i.replace(s, "");
                  (parseInt(o) || 0) > 8 ? (n.form[e] = "8", t.showToast({
                    title: "单类人数不能超过8人",
                    icon: "none"
                  })) : n.form[e] = o
                }))
              }
            }
          };
        e.default = d
      }).call(this, i("df3c").default, i("3223").default)
    },
};
