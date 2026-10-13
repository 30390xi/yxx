require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiTravel/historyList"], {
    "7a8b": function(t, e, i) {
      i.d(e, "b", (function() {
        return n
      })), i.d(e, "c", (function() {
        return a
      })), i.d(e, "a", (function() {
        return s
      }));
      var s = {
          uniNavbar: function() {
            return i.e("components/uni-navbar/uni-navbar").then(i.bind(null, "101a"))
          }
        },
        n = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    },
    "90f8": function(t, e, i) {
      i.r(e);
      var s = i("7a8b"),
        n = i("ab52");
      for (var a in n)["default"].indexOf(a) < 0 && function(t) {
        i.d(e, t, (function() {
          return n[t]
        }))
      }(a);
      i("c46d");
      var o = i("828b"),
        r = Object(o.a)(n.default, s.b, s.c, !1, null, "10bfc8f3", null, !1, s.a, void 0);
      e.default = r.exports
    },
    ab52: function(t, e, i) {
      i.r(e);
      var s = i("d6fb"),
        n = i.n(s);
      for (var a in s)["default"].indexOf(a) < 0 && function(t) {
        i.d(e, t, (function() {
          return s[t]
        }))
      }(a);
      e.default = n.a
    },
    b110: function(t, e, i) {},
    c46d: function(t, e, i) {
      var s = i("b110");
      i.n(s).a
    },
    d6fb: function(t, e, i) {
      (function(t, s) {
        var n = i("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = n(i("af34")),
          o = n(i("7ca3"));

        function r(t, e) {
          var i = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            e && (s = s.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.push.apply(i, s)
          }
          return i
        }

        function h(t) {
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
        var c = {
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
            chatItemCard: function() {
              Promise.all([i.e("common/vendor"), i.e("union/components1/chat-item/chat-item-card")]).then(function() {
                return resolve(i("a7a9"))
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
              isHistory: !0,
              pushingProgress: !0,
              task: null,
              scrollTop: 0,
              showHide: !1,
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
              playIndex: 0,
              arrResult: [],
              isIos: !1,
              isNetworkAnomaly: !1,
              timeNetwork: null,
              maskShow: !0,
              delayBtn: !1,
              cityColumns: [
                ["西安市"]
              ],
              showDateRangePicker: !1,
              form: {
                sessionId: "",
                price: ""
              },
              cityIndex: 0,
              showWantDo: !1,
              wantDoOptions: ["美食", "文化", "自然风光", "历史古迹", "购物", "娱乐", "摄影", "民俗体验"],
              strategyContent: "",
              shareObj: {},
              tempInterestPoint: null,
              loading: !0,
              isShare: !1,
              isHide: !1
            }
          },
          filters: {},
          watch: {
            typeVideo: {
              handler: function(e) {
                var i = Number(e),
                  s = t.createVideoContext("myVideo3", this),
                  n = t.createVideoContext("myVideo4", this);
                switch (n.seek(0), s.pause(), i) {
                  case 3:
                    s.play();
                    break;
                  case 4:
                    n.play()
                }
              },
              deep: !0,
              immediate: !0
            }
          },
          computed: {
            isStrategy: function() {
              return this.dataList && 1 === this.dataList.length
            }
          },
          onPageScroll: function(t) {},
          onLoad: function(t) {
            var e = this;
            this.loading = !0, t.sessionId && (this.form.sessionId = t.sessionId), t.source && (this.isHistory = !1, "share" == t.source && (this.isShare = !0)), this.audioPlayer = s.createInnerAudioContext(), this.createData(), setTimeout((function() {
              e.maskShow = !1
            }), 1e3)
          },
          onShow: function() {
            this.isHistory || this.isShare ? this.isHide || (this.loading = !0, this.getHistory()) : (this.loading = !0, this.dataList = [], this.historyList = [], this.getRecentCard()), this.$refs.paging.setInit()
          },
          onHide: function() {
            this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), this.isHide = !0, t.onKeyboardHeightChange()
          },
          onUnload: function() {
            this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), t.createVideoContext("myVideo3", this).seek(0), this.loadMore = "loadmore", this.dataList = [], this.$refs.paging.clear(), this.$refs.paging.complete([]), this.$refs.paging.complete(!1), this.clearStarts()
          },
          onShareAppMessage: function() {
            return console.log(this.shareObj.path), {
              title: this.shareObj.title,
              imageUrl: "https://eshopfile.zhiyousx.com/175214881804186478.png",
              path: this.shareObj.path
            }
          },
          methods: {
            getRecentCard: function() {
              var e = this;
              this.loading = !0, this.$uniApi.getRequestNoLoading("GET", "ai/planCard/queryRecent?openId=".concat(t.getStorageSync("wxopenid"))).then((function(t) {
                e.loading = !1, 1 === t.code && t.data ? (e.form.sessionId = t.data.sessionId, e.getHistory()) : e.historyList.unshift({
                  content: "您没有未出行的行程？点击 [AI旅游规划] 创建新行程吧！",
                  redirectContent: {},
                  state: 0,
                  end: !0,
                  isMe: !1,
                  type: 0,
                  id: (new Date).getTime()
                })
              })).catch((function() {
                e.loading = !1
              }))
            },
            getHistory: function() {
              var e = this;
              this.loading = !0;
              var i;
              i = this.form.sessionId ? {
                sessionId: this.form.sessionId,
                bussType: 2
              } : {
                userId: t.getStorageSync("wxopenid"),
                bussType: 2
              }, this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/historyList", i).then((function(t) {
                if (e.loading = !1, 1 === t.code) {
                  var i = t.data;
                  i.forEach((function(t) {
                    e.historyList.unshift(h(h({}, t), {}, {
                      state: 0,
                      end: !0,
                      isMe: !1,
                      type: 0,
                      id: t.sessionId
                    }))
                  })), i.length > 0 || e.historyList.unshift({
                    content: e.isHistory ? "您还未规划行程，请前往旅行搭子开始规划吧！" : "您还未规划行程，请点击下方AI旅游规划开始规划吧！",
                    redirectContent: {},
                    state: 0,
                    end: !0,
                    isMe: !1,
                    type: 0,
                    id: (new Date).getTime()
                  }), console.log(e.historyList)
                }
              })).catch((function() {
                e.loading = !1
              }))
            },
            deleteCard: function(t) {
              this.historyList = this.historyList.filter((function(e) {
                return e.id !== t
              })), 0 == this.historyList.length && this.isHistory && this.historyList.unshift({
                content: "您还未规划行程，请前往旅行搭子开始规划吧！",
                redirectContent: {},
                state: 0,
                end: !0,
                isMe: !1,
                type: 0,
                id: (new Date).getTime()
              })
            },
            loadedmetadata: function() {
              var e = t.createVideoContext("myVideo4", this),
                i = this;
              4 == this.typeVideo && (e.play(), setTimeout((function() {
                i.showImage = !1, i.opacity = 1
              }), 500))
            },
            setcolse: function() {
              this.dataList = [], this.delayBtn = !1
            },
            clickShare: function(t) {
              this.shareObj = t
            },
            createData: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("post", "ai/aiEscort/session/create", {
                bussType: 3,
                openId: t.getStorageSync("wxopenid"),
                title: "历史记录"
              }).then((function(t) {
                1 === t.code && (e.flowId = t.data)
              }))
            },
            exclusive: function(t) {
              this.typeVideo = 4, this.showHide = !1, this.doSend("专属攻略", t)
            },
            clearDataStop: function() {
              this.task && this.task.abort(), this.pushingProgress = !0, this.pushingProgressShow = !0
            },
            clearData: function() {
              this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), this.delayBtn = !1, this.task && this.task.abort(), this.form = {
                city: "",
                price: "",
                wantDO: [],
                beginTime: "",
                endTime: "",
                beginPeriod: "",
                endPeriod: ""
              }, this.typeVideo = 4, this.showHide = !0, t.removeStorageSync("HISTORY_ID"), this.dataList = [], this.$forceUpdate(), this.clearStarts()
            },
            startChat: function() {
              this.form.city ? this.form.beginTime && this.form.endTime ? this.form.price ? (this.typeVideo = 4, this.showHide = !1, this.createData()) : t.showToast({
                title: "请输入预算金额",
                icon: "none"
              }) : t.showToast({
                title: "请选择旅行时间",
                icon: "none"
              }) : t.showToast({
                title: "请选择目的地",
                icon: "none"
              })
            },
            setShowHide: function(t) {
              this.typeVideo = 4, this.showHide = !1, this.createData()
            },
            keyboardHeightChange: function(t) {
              this.$refs.inputBar.updateKeyboardHeightChange(t)
            },
            hidedKeyboard: function() {
              this.$refs.inputBar.hidedKeyboard()
            },
            stopSpeak: function() {
              this.timeNetwork && (clearInterval(this.timeNetwork), this.timeNetwork = null), this.dataList[0].content = this.dataList[0].content.replaceAll('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', ""), this.task && (this.task.abort(), this.dataList[0].content || (this.dataList[0].content = "回答终止，请重新提问。"), this.pushingProgress = !0, this.dataList[0].end = !0, this.task = null, this.pushingProgressShow = !0, this.typeVideo = 4, this.clearStarts())
            },
            findPreviousObjectById: function(t) {
              var e = this.dataList.findIndex((function(e) {
                return e.id === t
              }));
              return e > 0 ? this.dataList[e + 1].content : null
            },
            resetTravel: function(e) {
              if (console.log("resetTravel", e), this.pushingProgressShow) {
                this.pushingProgress = !0, this.pushingProgressShow = !0;
                var i = "/union/pages/aiTravel/index",
                  s = [];
                e && ["departureTime", "destination", "budget", "interestPoint", "returnTime", "adult", "children", "older"].forEach((function(t) {
                  e[t] && s.push("".concat(t, "=").concat(encodeURIComponent(e[t])))
                })), s.length > 0 && (i += "?" + s.join("&")), t.redirectTo({
                  url: i
                })
              } else this.$util.showToast("正在回答，请稍候")
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
                  var s = e.exclusive;
                  i.toSend(s)
                } else i.toSend(t);
                i.$refs.paging.scrollToBottom()
              }), 300)
            },
            toSend: function(e) {
              var i = this,
                s = this;
              this.dataInfosList = [], this.pushingProgressShow = !1, this.dataList.length > 1 && (this.delayBtn = !0), setTimeout((function() {
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
                  bussType: 3
                },
                success: function(t) {
                  console.log(t), 200 == t.statusCode && (i.stratSet = !1, i.WshowHide = !1, i.newValCopy = "", i.addNextCharacter()), 400 == t.statusCode && (i.clearStarts(), i.dataList[0].content = "网络走丢了，请稍后重试!", i.task && i.task.abort()), s.dataList[0].end = !0, s.$data.currentIndex = 0, s.$data.currentContent = "", s.$data.sendState = !1, s.isNetworkAnomaly = !1, s.delayBtn = !0, clearInterval(s.timeNetwork), s.timeNetwork = null
                },
                fail: function(t) {
                  console.log(t, "ssssssssssss"), i.stratSet = !1, i.delayBtn = !0, "request:fail " == t.errMsg && (i.clearStarts(), i.dataList[0].content = "网络走丢了，请稍后重试!", i.task && i.task.abort()), "request:fail abort" == t.errMsg && i.dataList[0].content && i.dataList[0].content.endsWith('<img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>') && (i.dataList[0].content = i.dataList[0].content.slice(0, i.dataList[0].content.length - 97))
                }
              }), this.task.onChunkReceived((function(t) {
                s.timeNetwork && (clearInterval(s.timeNetwork), s.timeNetwork = null), s.delayBtn = !0, s.isNetworkAnomaly = !0, s.timeNetwork = setTimeout((function() {
                  clearInterval(s.timeNetwork), i.clearStarts(), i.$util.showToast("网络异常，请重试！"), i.task && i.task.abort()
                }), 3e4);
                var e, n = new Uint8Array(t.data);
                if ("[object Uint8Array]" === Object.prototype.toString.call(n)) e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, a.default)(n))));
                else if (n instanceof ArrayBuffer) {
                  var o = new Uint8Array(n);
                  e = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, a.default)(o))))
                }
                3 == s.typeVideo || i.showHide || (s.typeVideo = 3), e.split("^").forEach((function(t) {
                  if (t) {
                    var e = JSON.parse(t);
                    console.log(e), 0 == e.extend.type && "c001" == e.extend.code && (s.dataList[0].state = 1, s.newVal += e.data, s.character || s.addNextCharacter()), 0 == e.extend.type && "e001" == e.extend.code && (s.newVal += e.data, s.character || s.addNextCharacter()), "s001" == e.extend.code && 0 == e.extend.type && (s.dataList[0].state = 1, s.newVal += e.data, s.character || s.addNextCharacter()), "p001" == e.extend.code && (s.dataList[0].state = 1, s.dataList[0].strategy = 1, s.dataList[0].strategyContent = e.data), "p002" == e.extend.code && (s.dataList[0].state = 1, s.dataList[0].redirectContent = JSON.parse(e.data), s.newVal += "检测到您需要攻略或规划？  \n👉 点击下方 「AI旅行搭子」，一键生成专属方案！  \n（不满意？可随时重新生成哦~）", s.character || s.addNextCharacter()), i.dataInfosList.push(e)
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
              for (var s = "", n = 0; n < t.length; n++) 15 === (s += t[n]).length && (this.arrResult.push(s), s = "");
              s.length > 0 && this.arrResult.push(s)
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
                    s = this.dataList[0].content1.lastIndexOf("</video>"),
                    n = this.dataList[0].content1.lastIndexOf("景点视频：<");
                  this.dataList[0].content && i > -1 && -1 == this.hoveImgList.indexOf(i) && (-1 == e || -1 == this.hoveImgList.indexOf(e) || e < i) && !this.hoveImg ? (this.dataList[0].content += 'img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(i)) : e > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(e) ? (this.hoveImgList.push(e), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<i"), this.dataList[0].content1.lastIndexOf('">') + 2).replace(/ - /g, "-")), this.dataList[0].content = this.dataList[0].content.replace('<img src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImgListUrl[this.hoveImgListUrl.length - 1]), this.$forceUpdate()) : this.dataList[0].content && n > -1 && -1 == this.hoveImgList.indexOf(n) && (-1 == s || -1 == this.hoveImgList.indexOf(s) || s < n) && !this.hoveImg ? (this.dataList[0].content += 'img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>', this.hoveImg = !0, this.hoveImgList.push(n)) : s > -1 && this.hoveImg && -1 == this.hoveImgList.indexOf(s) ? (this.hoveImgList.push(s), this.hoveImg = !1, this.hoveImgListUrl.push(this.dataList[0].content1.slice(this.dataList[0].content1.lastIndexOf("<v"), this.dataList[0].content1.lastIndexOf("</video>") + 8).replace(/ - /g, "-")), this.dataList[0].content += this.hoveImgListUrl[this.hoveImgListUrl.length - 1], this.$forceUpdate()) : this.hoveImg || (this.dataList[0].content += t)
                } else this.dataList[0].content += t;
                this.dataList[0].content1 += t, this.index++, this.addNextCharacter()
              } else clearTimeout(this.character), this.character = null, this.stratSet || this.showHide || (this.typeVideo = 4, this.clearStarts())
            },
            handlePriceInput: function(t) {
              var e = this,
                i = /[^\d]/g;
              this.$nextTick((function() {
                e.form.price = t.replace(i, "")
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
            }
          }
        };
        e.default = c
      }).call(this, i("df3c").default, i("3223").default)
    },
    e5be: function(t, e, i) {
      (function(t, e) {
        var s = i("47a9");
        i("5366"), s(i("3240"));
        var n = s(i("90f8"));
        t.__webpack_require_UNI_MP_PLUGIN__ = i, e(n.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    }
  },
  [
    ["e5be", "common/runtime", "common/vendor"]
  ]
]);
