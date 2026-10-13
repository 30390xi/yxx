require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiTravel2/loadPage"], {
    "001c": function(e, t, n) {},
    "205bf": function(e, t, n) {
      (function(e, t) {
        var o = n("47a9");
        n("5366"), o(n("3240"));
        var i = o(n("ddec"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "531e": function(e, t, n) {
      (function(e) {
        var o = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = o(n("af34")),
          a = o(n("7ca3"));

        function r(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, o)
          }
          return n
        }

        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(n), !0).forEach((function(t) {
              (0, a.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }
        var c = {
          components: {
            zeroMarkdownView: function() {
              n.e("union/components1/components/zero-markdown-view/zero-markdown-view").then(function() {
                return resolve(n("dd9a"))
              }.bind(null, n)).catch(n.oe)
            },
            zPaging: function() {
              Promise.all([n.e("common/vendor"), n.e("union/common/vendor"), n.e("union/components1/z-paging/z-paging")]).then(function() {
                return resolve(n("a7ee"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          onLoad: function(t) {
            var n = this;
            this.type = t.type, this.mode = +t.mode || 1, console.log("loadPage onLoad - type:", this.type, "mode:", this.mode), e.getStorageSync("wxopenid") ? this.getSession() : this.getOpenid().then((function(t) {
              e.setStorageSync("unionid", t.unionid), e.setStorageSync("wxopenid", t.openid), n.getSession()
            }))
          },
          onShow: function() {
            this.isHide && (this.isHide = !1, e.navigateBack())
          },
          onHide: function() {
            console.log("页面隐藏，中断流式请求"), this.isHide = !0, this.task && (this.task.abort(), this.task = null), this.clearAllTimers()
          },
          data: function() {
            return {
              content: "",
              form: null,
              flowId: "",
              task: null,
              timeNetwork: null,
              timerList: [],
              newVal: "",
              index: 0,
              loadingText: "您的攻略生成中...",
              dotsCount: 0,
              dotsTimer: null,
              gotoLogin: !1,
              isDestroyed: !1,
              mode: 1,
              isHide: !1
            }
          },
          onUnload: function() {
            this.isDestroyed = !0, this.task && (this.task.abort(), this.task = null), this.clearAllTimers(), this.dotsTimer && (clearInterval(this.dotsTimer), this.dotsTimer = null), this.timeNetwork && (clearTimeout(this.timeNetwork), this.timeNetwork = null), this.timerList.length > 0 && (this.timerList.forEach((function(e) {
              clearTimeout(e)
            })), this.timerList = [])
          },
          methods: {
            getSession: function() {
              "edit" == this.type ? (this.form = e.getStorageSync("editParam"), this.doSend(2)) : (this.form = e.getStorageSync("aiTravelFormData"), this.createSession()), this.startDotsAnimation()
            },
            createSession: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("post", "ai/aiEscort/session/create", {
                bussType: 2,
                openId: e.getStorageSync("wxopenid"),
                title: "AI旅游行程规划"
              }).then((function(e) {
                1 === e.code && (t.flowId = e.data, t.doSend(1))
              }))
            },
            getOpenid: function() {
              return new Promise((function(t, n) {
                e.login({
                  success: function(o) {
                    e.request({
                      url: getApp().globalData.requestUrl + "manager/app/v1/wxPopular/getSessionKeyPro/".concat(o.code),
                      method: "GET",
                      success: function(e) {
                        1 === e.data.code ? t(e.data.data) : n(e)
                      },
                      fail: function(e) {
                        n(e)
                      }
                    })
                  }
                })
              }))
            },
            doSend: function(t) {
              var n = this,
                o = this,
                a = {},
                r = "";
              if (console.log("doSend - type:", t, "mode:", this.mode), 1 == t) {
                r = "".concat(getApp().globalData.requestUrl, "ai/app/travel/plan");
                var c = JSON.parse(JSON.stringify(this.form.wantDO));
                c.push(1 === this.form.origin ? "本地人" : "外地人"), a = {
                  beginTime: this.form.beginTime,
                  endTime: this.form.endTime,
                  question: "",
                  city: this.form.city,
                  price: 1 === this.form.budgetType ? this.form.budget : 0,
                  perBudget: 2 === this.form.budgetType ? this.form.budget : 0,
                  wantDO: c,
                  adult: +this.form.adult,
                  children: +this.form.children,
                  older: +this.form.older,
                  userId: e.getStorageSync("wxopenid"),
                  sessionId: this.flowId,
                  bussType: 2,
                  travelTitle: this.form.travelTitle
                }
              } else 2 == t && (r = 1 == this.mode ? "".concat(getApp().globalData.requestUrl, "ai/link/generate") : "".concat(getApp().globalData.requestUrl, "ai/app/share/edit"), a = s(s({}, this.form), {}, {
                perBudget: "0",
                openId: e.getStorageSync("wxopenid"),
                bussType: 2,
                title: "AI旅游行程规划",
                travelTitle: this.form.travelTitle
              }));
              this.task = e.request({
                url: r,
                enableChunked: !0,
                method: "POST",
                timeout: 9e5,
                data: a,
                success: function(e) {
                  console.log(e, "success"), 200 == e.statusCode && n.addNextCharacter(), 400 == e.statusCode && (n.clearStarts(), n.content = "网络走丢了，请稍后重试!", n.task && n.task.abort()), n.clearAllTimers()
                },
                fail: function(e) {
                  "request:fail " == e.errMsg && (n.content = "网络走丢了，请稍后重试!", n.task && n.task.abort()), "request:fail abort" == e.errMsg && n.content && n.content.endsWith('<img style="position: relative;" class="_imgs" src="https://eshopfile.zhiyousx.com/173510744792945036.gif" alt>') && (n.content = n.content.slice(0, n.content.length - 97))
                }
              }), this.task.onChunkReceived((function(t) {
                if (o.isDestroyed) o.task && (o.task.abort(), o.task = null);
                else {
                  o.clearAllTimers(), o.timeNetwork = setTimeout((function() {
                    o.clearAllTimers(), n.$util.showToast("网络异常，请重试！"), n.content || (n.content = "网络走丢了，请稍后重试!"), n.task && (n.task.abort(), n.task = null)
                  }), 3e4), o.timerList.push(o.timeNetwork);
                  var a, r = new Uint8Array(t.data);
                  if ("[object Uint8Array]" === Object.prototype.toString.call(r)) a = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, i.default)(r))));
                  else if (r instanceof ArrayBuffer) {
                    var s = new Uint8Array(r);
                    a = decodeURIComponent(escape(String.fromCharCode.apply(String, (0, i.default)(s))))
                  }
                  a.split("^").forEach((function(t) {
                    if (console.log(t, "it"), t) {
                      var i = JSON.parse(t);
                      0 == i.extend.type && "c001" == i.extend.code && (o.newVal += i.data, o.addNextCharacter()), "p001" == i.extend.code && (o.task && (o.task.abort(), o.task = null), o.dotsTimer && (clearInterval(o.dotsTimer), o.dotsTimer = null), "edit" == o.type && e.removeStorageSync("editParam"), e.redirectTo({
                        url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(i.data.sessionId)
                      })), "p004" == i.extend.code && (n.$refs.paging.scrollToTop(), n.loadingText = "正在生成卡片..."), "p011" == i.extend.code && (n.loadingText = "生成失败，请重试！", o.task && (o.task.abort(), o.task = null), o.clearAllTimers(), e.navigateBack())
                    }
                  }))
                }
              }))
            },
            clearAllTimers: function() {
              this.timeNetwork && (clearTimeout(this.timeNetwork), this.timeNetwork = null), this.timerList.forEach((function(e) {
                clearTimeout(e)
              })), this.timerList = []
            },
            addNextCharacter: function() {
              if (this.index < this.newVal.length) {
                var e = "の" == this.newVal[this.index] ? "" : this.newVal[this.index];
                this.content += e, this.index++, this.addNextCharacter()
              }
            },
            startDotsAnimation: function() {
              var e = this;
              this.dotsTimer = setInterval((function() {
                e.dotsCount = (e.dotsCount + 1) % 4;
                var t = ".".repeat(e.dotsCount);
                e.loadingText.includes("正在生成卡片") ? e.loadingText = "正在生成卡片".concat(t) : e.loadingText = "您的攻略生成中".concat(t)
              }), 500)
            },
            navigateToCardPage: function(t) {
              try {
                console.log("navigateToCardPage - sessionId:", t);
                var n = getCurrentPages().length;
                console.log("当前页面栈深度: ".concat(n)), n >= 8 ? (console.log("页面栈过深，使用 reLaunch 重新启动"), e.reLaunch({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(t)
                })) : (console.log("页面栈正常，使用 redirectTo 跳转"), e.redirectTo({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(t)
                }))
              } catch (n) {
                console.error("页面跳转失败:", n), e.reLaunch({
                  url: "/union/pages/aiTravel2/cardPage?sessionId=".concat(t)
                })
              }
            }
          }
        };
        t.default = c
      }).call(this, n("df3c").default)
    },
    "5ddf": function(e, t, n) {
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
          }
        },
        i = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    },
    d88f: function(e, t, n) {
      var o = n("001c");
      n.n(o).a
    },
    ddec: function(e, t, n) {
      n.r(t);
      var o = n("5ddf"),
        i = n("f5e6");
      for (var a in i)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(a);
      n("d88f");
      var r = n("828b"),
        s = Object(r.a)(i.default, o.b, o.c, !1, null, "4eda9f98", null, !1, o.a, void 0);
      t.default = s.exports
    },
    f5e6: function(e, t, n) {
      n.r(t);
      var o = n("531e"),
        i = n.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      t.default = i.a
    }
  },
  [
    ["205bf", "common/runtime", "common/vendor"]
  ]
]);
