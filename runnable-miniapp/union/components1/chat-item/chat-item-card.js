require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/chat-item/chat-item-card"], {
    "0021": function(e, t, n) {
      n.d(t, "b", (function() {
        return i
      })), n.d(t, "c", (function() {
        return a
      })), n.d(t, "a", (function() {}));
      var i = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    },
    "211f": function(e, t, n) {},
    "45c3": function(e, t, n) {
      var i = n("211f");
      n.n(i).a
    },
    9926: function(e, t, n) {
      (function(e) {
        var i = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0, i(n("7671"));
        var a = {
          name: "chat-item",
          components: {
            zeroMarkdownView: function() {
              n.e("union/components1/components/zero-markdown-view/zero-markdown-view-travel").then(function() {
                return resolve(n("6282f"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          props: {
            item: {
              type: Object,
              default: function() {
                return {
                  time: "",
                  icon: "",
                  name: "",
                  content: "",
                  isMe: !1
                }
              }
            },
            pushingProgress: {
              type: Boolean,
              default: function() {
                return !1
              }
            },
            newVal: {
              type: String,
              default: function() {
                return ""
              }
            },
            isHistory: {
              type: Boolean,
              default: function() {
                return !0
              }
            }
          },
          data: function() {
            return {
              imgStarted: !1,
              imgCompleted: !1,
              imgContent: "",
              imgArray: [],
              countInfos: "",
              index: 0,
              timer: null,
              itemContentCopy: "",
              itemContentIndex: 0,
              displayText: "",
              showMore: !1,
              tabs: ["3天", "6个地点"],
              tags: ["兵马俑", "兵马俑", "兵马俑", "兵马俑", "兵马俑", "兵马俑"]
            }
          },
          mounted: function() {
            this.displayText = "", this.index = 0
          },
          methods: {
            itemContent: function() {
              var e = this;
              if (!this.item.content) return this.displayText = "", void(this.index = 0);
              var t = setInterval((function() {
                e.index < e.item.content.length ? (e.displayText += e.item.content.charAt(e.index), e.index++) : clearInterval(t)
              }), 50)
            },
            share: function() {
              var e = JSON.parse(this.item.homeImage) || [],
                t = {
                  title: "".concat(this.item.city).concat(this.item.day, "日游"),
                  imageUrl: e[0] || "https://eshopfile.zhiyousx.com/175006196412292999.png",
                  path: "/union/pages/aiTravel/historyList?sessionId=".concat(this.item.sessionId)
                };
              console.log(t), this.$emit("clickShare", t)
            },
            cardDetails: function() {
              this.$eventAnalyse.analyse({
                eventTag: "aiTravel_historyCard_click",
                eventName: "旅行搭子点击历史生成卡片",
                eventParams: JSON.stringify({
                  sessionId: this.item.sessionId
                })
              }), e.navigateTo({
                url: "/union/pages/aiTravel/cardPage?sessionId=" + this.item.sessionId
              })
            },
            resetTravel: function() {
              this.$emit("resetTravel", this.item.redirectContent)
            },
            delCard: function() {
              var t = this;
              e.showModal({
                title: "提示",
                content: "您确认要删除这条行程规划吗？",
                success: function(e) {
                  e.confirm && t.$uniApi.dataRequestNoLoading("delete", "ai/planCard/removeBySessionId?sessionId=" + t.item.sessionId).then((function(e) {
                    1 == e.code && t.$emit("deleteCard", t.item.sessionId)
                  }))
                }
              })
            },
            routeDetails: function(t) {
              this.$eventAnalyse.analyse({
                eventTag: "ai_escortGoLine_click",
                eventName: "伴游去线路详情",
                eventParams: {
                  url: "/subPage/pages/lineInfo/lineInfo?lineId=" + t
                }
              }), e.navigateTo({
                url: "/subPage/pages/lineInfo/lineInfo?lineId=" + t
              })
            },
            goLine: function(t) {
              this.$eventAnalyse.analyse({
                eventTag: "ai_exclusiveDetails_click",
                eventName: "专属详情页",
                eventParams: {
                  url: "/union/pages/ai/strategyGuide?lineId=" + t
                }
              }), e.navigateTo({
                url: "/union/pages/ai/strategyGuide?lineId=" + t
              })
            },
            jumpToMap: function() {
              this.item.longitude && this.item.latitude ? e.openLocation({
                latitude: Number(this.item.latitude),
                longitude: Number(this.item.longitude),
                name: this.item.title,
                success: function() {}
              }) : this.$util.showToast("获取地址失败！")
            },
            exclusiveStrategy: function(e) {
              this.$eventAnalyse.analyse({
                eventTag: "ai_generateLine_click",
                eventName: "生成我的专属攻略",
                eventParams: {
                  msg: "生成我的专属攻略"
                }
              }), this.pushingProgress ? this.$emit("exclusive", e) : this.$util.showToast("请稍候")
            },
            goLineView: function() {
              e.navigateTo({
                url: "/union/pages/ai/strategyGuide?lineId=1734121312503611394"
              })
            },
            getTagData: function(e) {
              return e ? e.split(",") : []
            },
            showPic: function(t) {
              var n = [t.data.url];
              e.previewImage({
                urls: n
              })
            },
            downloadFile: function(e) {}
          }
        };
        t.default = a
      }).call(this, n("df3c").default)
    },
    a7a9: function(e, t, n) {
      n.r(t);
      var i = n("0021"),
        a = n("c7a2");
      for (var o in a)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(o);
      n("45c3");
      var s = n("828b"),
        c = Object(s.a)(a.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      t.default = c.exports
    },
    c7a2: function(e, t, n) {
      n.r(t);
      var i = n("9926"),
        a = n.n(i);
      for (var o in i)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(o);
      t.default = a.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-item/chat-item-card-create-component", {
    "union/components1/chat-item/chat-item-card-create-component": function(e, t, n) {
      n("df3c").createComponent(n("a7a9"))
    }
  },
  [
    ["union/components1/chat-item/chat-item-card-create-component"]
  ]
]);
