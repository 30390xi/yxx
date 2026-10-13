(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/index/components/panda1"], {
    "08a3": function(t, i, e) {
      e.r(i);
      var s = e("dd4e"),
        n = e("c2cf");
      for (var a in n)["default"].indexOf(a) < 0 && function(t) {
        e.d(i, t, (function() {
          return n[t]
        }))
      }(a);
      e("aad9");
      var o = e("828b"),
        h = Object(o.a)(n.default, s.b, s.c, !1, null, "0a0637a9", null, !1, s.a, void 0);
      i.default = h.exports
    },
    aad9: function(t, i, e) {
      var s = e("f2da");
      e.n(s).a
    },
    c2cf: function(t, i, e) {
      e.r(i);
      var s = e("dcf22"),
        n = e.n(s);
      for (var a in s)["default"].indexOf(a) < 0 && function(t) {
        e.d(i, t, (function() {
          return s[t]
        }))
      }(a);
      i.default = n.a
    },
    dcf22: function(t, i, e) {
      (function(t) {
        Object.defineProperty(i, "__esModule", {
          value: !0
        }), i.default = void 0;
        var e = {
          name: "index",
          props: {
            isHide: {
              type: Boolean,
              default: function() {
                return !1
              }
            },
            isHasPopup: {
              type: Boolean,
              default: !1
            },
            isShowPanda: {
              type: Boolean,
              default: !1
            },
            isIntoHide: {
              type: Boolean,
              default: !1
            },
            version: {
              type: Number,
              default: 2
            }
          },
          data: function() {
            return this.halfwidth = (this.$store.getters.systemInfo.windowWidth - 100) / 2, this.position = {
              x: 0,
              y: 0
            }, this.rd = this.$store.getters.systemInfo.windowWidth - 100, this.movestate = !1, this.moveTimer = null, this.wordTimer = null, this.touchTimer = null, this.setdhTimer = null, this.timeStart = null, this.touchstartTime = 0, this.touchendTime = 0, this.startClick = null, this.isIos = !1, this.showTipsEnd = !1, this.startTimer = null, {
              showPanda: !1,
              isPandaDisabledMove: !1,
              pandaX: this.rd,
              pandaY: this.$store.getters.systemInfo.windowHeight / 2,
              isShowTips: !1,
              currentIndex: -1,
              exitingIndex: -1,
              showOverlay: !0,
              tipsItems: ["你好，我是小七，你的AI旅行助手", "点击我和我互动", "我有好多旅行灵感，想和你分享"],
              lastPosition: {
                x: 0,
                y: 0
              },
              resetPosition: {
                x: this.rd,
                y: this.$store.getters.systemInfo.windowHeight / 2
              },
              isPandaMove: !1,
              pandaMode: "right",
              pandaIsLeft: !1,
              sitImage: !0,
              groveImage: !0,
              leftImage: !0,
              rightImage: !0,
              staticImage: !0,
              isIos: !1,
              toggleScrollingTime: 0,
              toggleImgTime: 1e4,
              isHasTips: 12e3,
              isHasTipsl: 12e3,
              noHasTips: 4e3,
              wordcount: 0
            }
          },
          watch: {
            isHide: function(t) {
              var i = this;
              this.clearTimer(), t ? (this.currentIndex = 0, this.exitingIndex = -1, this.wordcount = 0, this.pandaY = this.position.y, this.pandaX = this.position.x, this.position.x > this.halfwidth ? (this.pandaX = 2 * this.halfwidth, this.pandaIsLeft = !1) : (this.pandaX = 0, this.pandaIsLeft = !0), this.pandaMode = this.pandaIsLeft ? "left" : "right") : (this.pandaMode = this.pandaIsLeft ? "left" : "right", setTimeout((function() {
                i.touchTimer && (clearTimeout(i.touchTimer), i.touchTimer = null), i.setdhTimer && (clearTimeout(i.setdhTimer), i.setdhTimer = null)
              }), 50))
            },
            isIntoHide: function(t) {
              t && this.initPageInfo()
            },
            isHasPopup: function(t) {
              console.log(t), t || this.showPanda || (this.showPanda = !0, this.startAm())
            },
            isShowPanda: function(t) {
              t && !this.showPanda && (this.showPanda = !0, this.startAm())
            }
          },
          created: function() {
            "ios" === t.getSystemInfoSync().platform && (this.isIos = !0), this.initPageInfo()
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            clearTimer: function() {
              this.touchTimer && (clearTimeout(this.touchTimer), this.touchTimer = null), this.movestate = !1, this.moveTimer && (clearTimeout(this.moveTimer), this.moveTimer = null), this.wordTimer && (clearTimeout(this.wordTimer), this.wordTimer = null), this.setdhTimer && (clearTimeout(this.setdhTimer), this.setdhTimer = null), this.startClick && (clearTimeout(this.startClick), this.startClick = null)
            },
            initPageInfo: function() {
              this.pandaMode = "static", this.pandaIsLeft = !1, this.pandaX = this.rd, this.pandaY = this.$store.getters.systemInfo.windowHeight / 2, this.position = {
                x: this.pandaX,
                y: this.pandaY
              }
            },
            startAm: function() {
              var t = this;
              this.pandaMode = "sit", this.startScrolling(), this.startTimer = setTimeout((function() {
                t.showOverlay = !1, t.setdh("start")
              }), 1e4)
            },
            startScrolling: function() {
              var t = this;
              this.wordcount = 0, this.currentIndex = 0, this.exitingIndex = -1, this.wordTimer && (clearTimeout(this.wordTimer), this.wordTimer = null), this.timeStart && (clearTimeout(this.timeStart), this.timeStart = null), this.timeStart = setTimeout((function() {
                t.startScrollItem()
              }), 4e3)
            },
            startScrollItem: function() {
              var t = this;
              this.wordcount < this.tipsItems.length ? (this.exitingIndex = this.currentIndex, this.currentIndex = (this.currentIndex + 1) % this.tipsItems.length, this.wordcount++, this.wordTimer = setTimeout((function() {
                t.startScrollItem()
              }), 4e3)) : (this.wordcount = 0, clearTimeout(this.wordTimer), this.wordTimer = null)
            },
            handlePanda: function() {
              this.$eventAnalyse.analyse({
                eventTag: "index_panda_click",
                eventName: "首页熊猫点击"
              }), t.removeStorageSync("askQuestion"), this.isPandaDisabledMove = !0, this.showTipsEnd = !0, 1 == this.version ? t.navigateTo({
                url: "/union/pages/ai/index?type=1"
              }) : 2 == this.version && t.navigateTo({
                url: "/union/pages/aiNew/index?type=1"
              })
            },
            handlePandaMove: function(t) {
              this.pandaMode = "static", this.position = t.detail, this.isHide || !this.movestate && (t.detail.x <= 0 || t.detail.x >= 2 * this.halfwidth) && this.setdh()
            },
            setdh: function(t) {
              var i = this;
              this.pandaMode = "grove", this.moveTimer = setTimeout((function() {
                i.pandaMode = i.pandaIsLeft ? "left" : "right", t && (i.isPandaDisabledMove = !1, i.showTipsEnd = !0)
              }), this.toggleImgTime)
            },
            onTouchstart: function(t) {
              var i = this;
              this.startTimer && (this.showTipsEnd = !1, clearTimeout(this.startTimer), this.startTimer = null), this.touchstartTime = (new Date).getTime(), this.movestate = !0, this.isIos && t.touches[0].clientX <= 35 && (this.isPandaDisabledMove = !0), this.touchTimer && (clearTimeout(this.touchTimer), this.touchTimer = null), this.moveTimer && (clearTimeout(this.moveTimer), this.moveTimer = null), this.setdhTimer && (clearTimeout(this.setdhTimer), this.setdhTimer = null), this.startClick = setTimeout((function() {
                i.pandaMode = "static", i.currentIndex = -1, i.staticImage = !0
              }), 120)
            },
            onTouchend: function(t) {
              var i = this;
              return this.isPandaDisabledMove = !1, this.touchendTime = (new Date).getTime(), this.touchendTime - this.touchstartTime < 120 && ("left" == this.pandaMode || "right" == this.pandaMode) ? (clearTimeout(this.startClick), void(this.startClick = null)) : (this.movestate = !1, this.pandaY = this.position.y, this.pandaX = this.position.x, this.pandaX >= this.rd || this.pandaX <= 0 ? (this.pandaX >= this.rd ? this.pandaIsLeft = !1 : this.pandaX <= 0 && (this.pandaIsLeft = !0), void this.setdh()) : void(this.touchTimer = setTimeout((function() {
                i.position.x > i.halfwidth ? (i.pandaX = 2 * i.halfwidth, i.pandaIsLeft = !1) : (i.pandaX = 0, i.pandaIsLeft = !0)
              }), 50)))
            }
          }
        };
        i.default = e
      }).call(this, e("df3c").default)
    },
    dd4e: function(t, i, e) {
      e.d(i, "b", (function() {
        return s
      })), e.d(i, "c", (function() {
        return n
      })), e.d(i, "a", (function() {}));
      var s = function() {
          this.$createElement;
          this._self._c
        },
        n = []
    },
    f2da: function(t, i, e) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["pages/index/components/panda1-create-component", {
    "pages/index/components/panda1-create-component": function(t, i, e) {
      e("df3c").createComponent(e("08a3"))
    }
  },
  [
    ["pages/index/components/panda1-create-component"]
  ]
]);
