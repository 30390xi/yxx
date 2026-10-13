require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiService/index"], {
    "0969": function(t, e, a) {
      a.r(e);
      var n = a("b4b6"),
        i = a.n(n);
      for (var s in n)["default"].indexOf(s) < 0 && function(t) {
        a.d(e, t, (function() {
          return n[t]
        }))
      }(s);
      e.default = i.a
    },
    "47da": function(t, e, a) {
      a.r(e);
      var n = a("8579"),
        i = a("0969");
      for (var s in i)["default"].indexOf(s) < 0 && function(t) {
        a.d(e, t, (function() {
          return i[t]
        }))
      }(s);
      a("f608");
      var o = a("828b"),
        r = Object(o.a)(i.default, n.b, n.c, !1, null, "6a8589f5", null, !1, n.a, void 0);
      e.default = r.exports
    },
    8579: function(t, e, a) {
      a.d(e, "b", (function() {
        return i
      })), a.d(e, "c", (function() {
        return s
      })), a.d(e, "a", (function() {
        return n
      }));
      var n = {
          uniNavbar: function() {
            return a.e("components/uni-navbar/uni-navbar").then(a.bind(null, "101a"))
          }
        },
        i = function() {
          this.$createElement;
          var t = (this._self._c, this.showHide ? this.greetings() : null);
          this.$mp.data = Object.assign({}, {
            $root: {
              m0: t
            }
          })
        },
        s = []
    },
    "95a3": function(t, e, a) {
      (function(t, e) {
        var n = a("47a9");
        a("5366"), n(a("3240"));
        var i = n(a("47da"));
        t.__webpack_require_UNI_MP_PLUGIN__ = a, e(i.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    "973b": function(t, e, a) {},
    b4b6: function(t, e, a) {
      (function(t, n) {
        var i = a("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var s = i(a("af34")),
          o = {
            components: {
              zPaging: function() {
                Promise.all([a.e("common/vendor"), a.e("union/common/vendor"), a.e("union/components1/z-paging/z-paging")]).then(function() {
                  return resolve(a("a7ee"))
                }.bind(null, a)).catch(a.oe)
              },
              chatInputBar: function() {
                a.e("union/components1/chat-input-bar/chat-input-bar-service").then(function() {
                  return resolve(a("d54e"))
                }.bind(null, a)).catch(a.oe)
              },
              chatItem: function() {
                a.e("union/components1/chat-item/chat-item-service").then(function() {
                  return resolve(a("7953"))
                }.bind(null, a)).catch(a.oe)
              }
            },
            data: function() {
              return this.hoveImgList = [], this.hoveImg = !1, this.hoveImgListUrl = [], this.newVal = "", {
                dataList: [],
                currentContent: "",
                pushingProgress: !0,
                task: null,
                showHide: !0,
                tripList: [],
                scenicSpotList: [],
                deliciousFoodList: [],
                pushingProgressShow: !0,
                isSpeaking: !1,
                audioPlayer: null,
                flowId: "",
                page: 1,
                loadMore: "loading",
                character: null,
                index: 0,
                stratSet: !1,
                dataInfosList: [],
                isIos: !1,
                timeNetwork: null,
                resres: "",
                delayBtn: !1,
                smallScreen: !1
              }
            },
            onPageScroll: function(t) {},
            onLoad: function(e) {
              this.audioPlayer = t.createInnerAudioContext(), this.getRecommendList();
              var a = n.getSystemInfoSync();
              "android" === a.platform ? this.isIos = !1 : "ios" === a.platform ? this.isIos = !0 : this.isIos = !1
            },
            onShow: function() {
              var t = n.getSystemInfoSync().screenHeight;
              console.log(t, "屏幕高度小于1500"), 2 * t < 1500 ? (console.log("屏幕高度小于1500"), this.smallScreen = !0) : (console.log("屏幕高度大于等于1500"), this.smallScreen = !1), console.log(this.$refs.paging), this.$refs.paging.setInit()
            },
            onHide: function() {
              this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), n.onKeyboardHeightChange()
            },
            onUnload: function() {
              this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), n.removeStorageSync("askQuestion"), n.removeStorageSync("HISTORY_ID"), this.loadMore = "loadmore", this.dataList = [], this.$refs.paging.clear(), this.$refs.paging.complete([]), this.$refs.paging.complete(!1), this.clearStarts()
            },
            methods: {
              showFun: function() {
                this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), this.showHide || (this.showHide = !0, this.delayBtn = !1, this.task && this.task.abort(), this.pushingProgressShow = !0, n.setStorageSync("askQuestion", 1), n.removeStorageSync("HISTORY_ID"), this.dataList = [], this.$forceUpdate(), this.clearStarts())
              },
              greetings: function() {
                var t = (new Date).getHours();
                return t >= 5 && t < 10 ? "早上好" : t >= 10 && t < 12 ? "上午好" : t >= 12 && t < 14 ? "中午好" : t >= 14 && t < 19 ? "下午好" : "晚上好"
              },
              createData: function(t) {
                var e = this;
                this.$uniApi.dataRequestNoLoading("post", "ai/app/ai/common/creatConversation", {
                  bussType: 1,
                  openId: n.getStorageSync("wxopenid"),
                  title: t
                }).then((function(a) {
                  1 === a.code && (e.flowId = a.data, n.setStorageSync("askQuestion", 2), e.doSend(t))
                }))
              },
              openAudio: function() {
                this.isSpeaking ? (this.isSpeaking = !1, this.audioPlayer.pause()) : (this.isSpeaking = !0, this.audioPlayer.play())
              },
              getRecommendList: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("post", "ai/aiRecommend/recommendList", [10, 11, 12]).then((function(e) {
                  1 === e.code && e.data && (t.tripList = e.data[10] || [], t.scenicSpotList = e.data[11] || [], t.deliciousFoodList = e.data[12] || [])
                }))
              },
              askAgain: function(t) {
                this.showHide = !1, n.setStorageSync("askQuestion", 2), this.doSend(t)
              },
              exclusive: function(t) {
                this.showHide = !1, n.setStorageSync("askQuestion", 2), this.doSend("专属攻略", t)
              },
              clearDataStop: function() {
                this.task && this.task.abort(), this.pushingProgress = !0, this.pushingProgressShow = !0
              },
              clearData: function() {
                var t = this;
                setTimeout((function() {
                  t.timeNetwork && (clearInterval(t.timeNetwork), t.timeNetwork = null), t.task && t.task.abort(), t.showHide = !0, t.delayBtn = !1, n.setStorageSync("askQuestion", 1), n.removeStorageSync("HISTORY_ID"), t.dataList = [], t.$forceUpdate(), t.clearStarts()
                }), 300)
              },
              setShowHide: function(t) {
                this.showHide = !1, this.createData(t)
              },
              goQuestion: function(t, e) {
                this.$eventAnalyse.analyse({
                  eventTag: "wall_" + ["guide", "scenicSpots", "cuisine"][e - 1] + "_click",
                  eventName: ["城墙客服行程攻略推荐", "城墙客服问景点", "城墙客服问美食"][e - 1],
                  eventParams: {
                    language: 0,
                    question: t,
                    userId: "ojWxP5WEclcm0Ebaj3h-ZNstnt0A",
                    sessionId: "1881193790388047873",
                    bussType: 1
                  }
                }), this.showHide = !1, this.createData(t)
              },
              keyboardHeightChange: function(t) {
                this.resres = t.height, this.$refs.inputBar.updateKeyboardHeightChange(t)
              },
              hidedKeyboard: function() {
                this.$refs.inputBar.hidedKeyboard()
              },
              stopSpeak: function() {
                this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), this.dataList[0].content = this.dataList[0].content.replaceAll('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', ""), this.task && (this.task.abort(), this.dataList[0].content || (this.dataList[0].content = "回答终止，请重新提问。"), this.pushingProgress = !0, this.dataList[0].end = !0, this.task = null, this.pushingProgressShow = !0, this.clearStarts())
              },
              findPreviousObjectById: function(t) {
                var e = this.dataList.findIndex((function(e) {
                  return e.id === t
                }));
                return e > 0 ? this.dataList[e + 1].content : null
              },
              doSend: function(t, e) {
                var a = this;
                this.pushingProgress = !1, this.stratSet = !0, this.$refs.paging.scrollToBottom(), setTimeout((function() {
                  e || a.dataList.unshift({
                    content: t,
                    type: 1,
                    state: 1,
                    end: !0,
                    name: "ai",
                    list: [],
                    id: (new Date).getTime()
                  }), a.dataList.unshift({
                    content: "",
                    content1: "",
                    type: 0,
                    state: 0,
                    end: !1,
                    name: "ai",
                    isMe: !1,
                    list: [],
                    imageCard: [],
                    id: (new Date).getTime()
                  }), a.toSend(t), a.$refs.paging.scrollToBottom()
                }), 300)
              },
              toSend: function(t) {
                var e = this,
                  a = this;
                this.dataInfosList = [], this.pushingProgressShow = !1, setTimeout((function() {
                  e.$refs.paging.scrollToBottom()
                }), 100), this.task = n.request({
                  url: "".concat(getApp().globalData.requestUrl, "ai/wall/activity/ai/chat"),
                  enableChunked: !0,
                  method: "POST",
                  timeout: 9e5,
                  data: {
                    language: 1,
                    question: t,
                    userId: n.getStorageSync("wxopenid"),
                    sessionId: this.flowId,
                    mode: 0,
                    bussType: 2
                  },
                  success: function(t) {
                    console.log(t), 200 == t.statusCode && (e.stratSet = !1, e.addNextCharacter()), 400 == t.statusCode && (e.clearStarts(), e.dataList[0].content = "网络走丢了，请稍后重试!", e.task && e.task.abort()), a.dataList[0].end = !0, a.$data.currentContent = "", a.$data.sendState = !1, a.delayBtn = !0, clearInterval(a.timeNetwork), a.timeNetwork = null
                  },
                  fail: function(t) {
                    console.log(t, "ssssssssssss"), e.stratSet = !1, e.delayBtn = !0, "request:fail " == t.errMsg && (e.clearStarts(), e.dataList[0].content = "网络走丢了，请稍后重试!", e.task && e.task.abort())
                  }
                }), this.task.onChunkReceived((function(t) {
                  a.delayBtn = !0, a.timeNetwork && (clearInterval(a.timeNetwork), a.timeNetwork = null), a.timeNetwork = setTimeout((function() {
                    clearInterval(a.timeNetwork), e.clearStarts(), e.$util.showToast("网络异常，请重试！"), e.task && e.task.abort()
                  }), 3e4);
                  var n, i = new Uint8Array(t.data);
                  if ("[object Uint8Array]" === Object.prototype.toString.call(i)) n = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, s.default)(i))));
                  else if (i instanceof ArrayBuffer) {
                    var o = new Uint8Array(i);
                    n = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, s.default)(o))))
                  }
                  console.log(n), n.split("^").forEach((function(t) {
                    if (t) {
                      var n = JSON.parse(t);
                      console.log(n), 0 == n.extend.type && "c001" == n.extend.code && (a.dataList[0].state = 1, a.newVal += n.data ? n.data : "体验用户过多，请稍后重试。", a.character || a.addNextCharacter()), 0 == n.extend.type && "W002" == n.extend.code && (a.dataList[0].state = 1, a.newVal += n.data ? n.data : "体验用户过多，请稍后重试。", a.character || a.addNextCharacter()), 0 == n.extend.type && "W001" == n.extend.code && (a.dataList[0].state = 1, a.newVal += n.data ? n.data : "体验用户过多，请稍后重试。", a.character || a.addNextCharacter()), "w001" == n.extend.code && 0 == n.extend.type && (a.dataList[0].state = 1, a.newVal += n.data ? n.data : "体验用户过多，请稍后重试。", a.character || a.addNextCharacter()), e.dataInfosList.push(n)
                    }
                  }))
                }))
              },
              setCardInfo: function(t) {
                t && ("w001" == t.extend.code && 1 == t.extend.type && (this.dataList[0].list = t.data || []), (1 == t.extend.type && "W002" == t.extend.code || "W001" == t.extend.code && 1 == t.extend.type) && (this.dataList[0].imageCard = t.data || []), 0 == t.extend.type && "q001" == t.extend.code && (this.dataList[0].divergenceProblem = t.data || []), this.$forceUpdate())
              },
              clearStarts: function() {
                var t = this;
                this.hoveImg = !1, this.hoveImgList = [], this.hoveImgListUrl = [], JSON.parse(JSON.stringify(this.dataInfosList)).forEach((function(e) {
                  t.setCardInfo(e)
                })), this.dataInfosList = [], this.newVal = "", this.index = 0, this.stratSet = !1, this.pushingProgress = !0, this.pushingProgressShow = !0, this.character && (clearTimeout(this.character), this.character = null)
              },
              addNextCharacter: function() {
                var t = this;
                if (this.index < this.newVal.length) {
                  var e = this.newVal[this.index];
                  this.dataList[0].content += e, this.dataList[0].content1 += e, this.index++, this.character = setTimeout((function() {
                    t.addNextCharacter()
                  }), 50)
                } else clearTimeout(this.character), this.character = null, this.stratSet || this.showHide || this.clearStarts()
              }
            }
          };
        e.default = o
      }).call(this, a("3223").default, a("df3c").default)
    },
    f608: function(t, e, a) {
      var n = a("973b");
      a.n(n).a
    }
  },
  [
    ["95a3", "common/runtime", "common/vendor"]
  ]
]);
