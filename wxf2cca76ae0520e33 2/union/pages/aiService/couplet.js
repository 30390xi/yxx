require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiService/couplet"], {
    6337: function(t, e, a) {
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
                a.e("union/components1/chat-input-bar/chat-input-bar-couplet").then(function() {
                  return resolve(a("3b95"))
                }.bind(null, a)).catch(a.oe)
              },
              chatItem: function() {
                a.e("union/components1/chat-item/chat-item-couplet").then(function() {
                  return resolve(a("cc23"))
                }.bind(null, a)).catch(a.oe)
              }
            },
            data: function() {
              return this.coupletImg = "", this.newVal = "", this.score = 0, this.character = null, {
                dataList: [],
                isTyping: !1,
                currentMassage: {},
                currentIndex: 0,
                currentContent: "",
                pushingProgress: !0,
                task: null,
                scrollTop: 0,
                showHide: !1,
                tripList: [],
                scenicSpotList: [],
                deliciousFoodList: [],
                pushingProgressShow: !0,
                isSpeaking: !1,
                audioPlayer: null,
                flowId: "",
                page: 1,
                loadMore: "loading",
                index: 0,
                stratSet: !1,
                isIos: !1,
                timeNetwork: null,
                status: 0
              }
            },
            onPageScroll: function(t) {},
            onLoad: function(e) {
              this.status = e.status || 0, this.audioPlayer = t.createInnerAudioContext();
              var a = n.getSystemInfoSync();
              "android" === a.platform ? this.isIos = !1 : "ios" === a.platform ? this.isIos = !0 : this.isIos = !1
            },
            onShow: function() {
              var t = n.getStorageSync("token");
              1 != this.status || t ? this.flowId || this.createData() : this.$util.isLogin()
            },
            onHide: function() {
              this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), this.$refs.inputBar.updateKeyboardHeightChange(0)
            },
            onUnload: function() {
              this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), this.task && this.task.abort(), n.removeStorageSync("askQuestion"), n.removeStorageSync("HISTORY_ID"), this.loadMore = "loadmore", this.dataList = [], this.$refs.paging.clear(), this.$refs.paging.complete([]), this.$refs.paging.complete(!1), this.clearStarts()
            },
            methods: {
              greetings: function() {
                var t = (new Date).getHours();
                return t >= 5 && t < 10 ? "早上好" : t >= 10 && t < 12 ? "上午好" : t >= 12 && t < 14 ? "中午好" : t >= 14 && t < 19 ? "下午好" : "晚上好"
              },
              createData: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("post", "ai/app/ai/common/creatConversation").then((function(e) {
                  1 === e.code && (t.flowId = e.data, t.$nextTick((function() {
                    t.doSend("开始对春联", "create")
                  })))
                }))
              },
              openAudio: function() {
                this.isSpeaking ? (this.isSpeaking = !1, this.audioPlayer.pause()) : (this.isSpeaking = !0, this.audioPlayer.play())
              },
              clearDataStop: function() {
                this.task && this.task.abort(), this.pushingProgress = !0, this.pushingProgressShow = !0
              },
              clearData: function() {
                this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), this.task && this.task.abort(), n.setStorageSync("askQuestion", 1), n.removeStorageSync("HISTORY_ID"), this.dataList = [], this.$forceUpdate(), this.clearStarts()
              },
              keyboardHeightChange: function(t) {
                console.log(t), this.$refs.inputBar.updateKeyboardHeightChange(t)
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
              doSend: function(t) {
                var e = this,
                  a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                this.pushingProgress = !1, this.stratSet = !0, this.$refs.paging.scrollToBottom(), setTimeout((function() {
                  a || e.dataList.unshift({
                    content: t,
                    type: 1,
                    state: 1,
                    end: !0,
                    classType: "num",
                    name: "ai",
                    imgUrl: "",
                    id: (new Date).getTime()
                  }), e.dataList.unshift({
                    content: "",
                    type: 0,
                    state: 0,
                    end: !1,
                    name: "ai",
                    classType: a,
                    isMe: !1,
                    imgUrl: "",
                    id: (new Date).getTime()
                  }), e.toSend(t), e.$refs.paging.scrollToBottom()
                }), 300)
              },
              toSend: function(t) {
                var e = this,
                  a = this;
                this.pushingProgressShow = !1, setTimeout((function() {
                  e.$refs.paging.scrollToBottom()
                }), 100), this.task = n.request({
                  url: "".concat(getApp().globalData.requestUrl, "ai/app/couplet/chat"),
                  enableChunked: !0,
                  method: "POST",
                  timeout: 9e5,
                  data: {
                    language: 1,
                    question: t,
                    userId: n.getStorageSync("wxopenid"),
                    sessionId: this.flowId,
                    bussType: 3
                  },
                  success: function(t) {
                    200 == t.statusCode && (e.stratSet = !1, e.addNextCharacter()), 400 == t.statusCode && (e.clearStarts(), e.dataList[0].content = "网络走丢了，请稍后重试!", e.task && e.task.abort()), a.dataList[0].end = !0, a.$data.currentIndex = 0, a.$data.currentContent = "", a.$data.sendState = !1, clearInterval(a.timeNetwork), a.timeNetwork = null
                  },
                  fail: function(t) {
                    e.stratSet = !1, "request:fail " == t.errMsg && (e.clearStarts(), e.dataList[0].content = "网络走丢了，请稍后重试!", e.task && e.task.abort())
                  }
                }), this.task.onChunkReceived((function(t) {
                  a.timeNetwork && (clearInterval(a.timeNetwork), a.timeNetwork = null), a.timeNetwork = setTimeout((function() {
                    clearInterval(a.timeNetwork), e.clearStarts(), e.$util.showToast("网络异常，请重试！"), e.task && e.task.abort()
                  }), 3e4);
                  var n, i = new Uint8Array(t.data);
                  if ("[object Uint8Array]" === Object.prototype.toString.call(i)) n = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, s.default)(i))));
                  else if (i instanceof ArrayBuffer) {
                    var o = new Uint8Array(i);
                    n = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, s.default)(o))))
                  }
                  n.split("^").forEach((function(t) {
                    if (t) {
                      var n = JSON.parse(t);
                      if (0 === n.code) return e.dataList[0].content = n.msg, void(e.dataList[0].state = 1);
                      0 == n.extend.type && "c001" == n.extend.code && (a.dataList[0].state = 1, a.newVal += n.data, a.character || a.addNextCharacter()), "couplet" == n.extend.code && (a.dataList[0].state = 1, n.data && n.data.score > 0 && a.addDraws(), n.data && n.data.score >= 8 && n.data.file && (a.coupletImg = n.data.file, a.score = n.data.score, a.character || a.addNextCharacter()))
                    }
                  }))
                }))
              },
              clearStarts: function() {
                this.coupletImg && this.dataList.unshift({
                  content: "太棒了，我们做出了完美的对联，你解锁了隐藏的海报",
                  type: 0,
                  state: 1,
                  end: !0,
                  name: "ai",
                  classType: "",
                  isMe: !1,
                  imgUrl: this.coupletImg,
                  id: (new Date).getTime()
                }), this.newVal = "", this.index = 0, this.coupletImg = "", this.stratSet = !1, this.pushingProgress = !0, this.pushingProgressShow = !0, this.character && (clearTimeout(this.character), this.character = null)
              },
              addNextCharacter: function() {
                var t = this;
                if (this.character && (clearTimeout(this.character), this.character = null), this.index < this.newVal.length) {
                  var e = this.newVal[this.index];
                  this.dataList[0].content += e, this.index++, this.character = setTimeout((function() {
                    t.addNextCharacter()
                  }), 50)
                } else clearTimeout(this.character), this.character = null, this.stratSet || this.clearStarts()
              },
              addDraws: function() {
                1 == this.status && this.$uniApi.dataRequestYesLoading("GET", "manager/app/v1/arborDayLottery/completeTask?lotteryType=7&taskId=002").then((function(t) {
                  t.code
                }))
              }
            }
          };
        e.default = o
      }).call(this, a("3223").default, a("df3c").default)
    },
    "7e92": function(t, e, a) {
      a.r(e);
      var n = a("6337"),
        i = a.n(n);
      for (var s in n)["default"].indexOf(s) < 0 && function(t) {
        a.d(e, t, (function() {
          return n[t]
        }))
      }(s);
      e.default = i.a
    },
    "8e4f": function(t, e, a) {
      a.r(e);
      var n = a("d32c"),
        i = a("7e92");
      for (var s in i)["default"].indexOf(s) < 0 && function(t) {
        a.d(e, t, (function() {
          return i[t]
        }))
      }(s);
      a("ea92");
      var o = a("828b"),
        r = Object(o.a)(i.default, n.b, n.c, !1, null, "1bd2ee50", null, !1, n.a, void 0);
      e.default = r.exports
    },
    "94fb": function(t, e, a) {
      (function(t, e) {
        var n = a("47a9");
        a("5366"), n(a("3240"));
        var i = n(a("8e4f"));
        t.__webpack_require_UNI_MP_PLUGIN__ = a, e(i.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    d32c: function(t, e, a) {
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
          this._self._c
        },
        s = []
    },
    ea92: function(t, e, a) {
      var n = a("f712");
      a.n(n).a
    },
    f712: function(t, e, a) {}
  },
  [
    ["94fb", "common/runtime", "common/vendor"]
  ]
]);
