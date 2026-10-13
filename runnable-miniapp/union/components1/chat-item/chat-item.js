require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/chat-item/chat-item"], {
    "201d": function(e, t, n) {
      var i = n("97ec");
      n.n(i).a
    },
    "42fc": function(e, t, n) {
      n.r(t);
      var i = n("d340"),
        a = n.n(i);
      for (var o in i)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(o);
      t.default = a.a
    },
    "5bc8": function(e, t, n) {
      n.r(t);
      var i = n("79d9"),
        a = n("42fc");
      for (var o in a)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(o);
      n("201d");
      var s = n("828b"),
        l = Object(s.a)(a.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      t.default = l.exports
    },
    "79d9": function(e, t, n) {
      n.d(t, "b", (function() {
        return i
      })), n.d(t, "c", (function() {
        return a
      })), n.d(t, "a", (function() {}));
      var i = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.item.list && e.item.list.length && 0 == e.item.type),
            n = t ? e.__map(e.item.list, (function(t, n) {
              var i = e.__get_orig(t),
                a = e.item.list.length,
                o = t.labels && t.labels.length > 0;
              return {
                $orig: i,
                g1: a,
                g2: o,
                l0: o ? e.getTagData(t.labels) : null
              }
            })) : null,
            i = e.item.officialGuide && e.item.officialGuide.length && 0 == e.item.type,
            a = i ? e.__map(e.item.officialGuide, (function(t, n) {
              return {
                $orig: e.__get_orig(t),
                g4: JSON.parse(t.image),
                l2: t.themeNames ? e.getTagData(t.themeNames) : null
              }
            })) : null,
            o = e.item.divergenceProblem && e.item.divergenceProblem.length,
            s = o ? e.item.divergenceProblem && e.item.divergenceProblem.length > 0 : null,
            l = o && s ? e.__map(e.item.divergenceProblem, (function(t, n) {
              return {
                $orig: e.__get_orig(t),
                g7: e.item.divergenceProblem.length
              }
            })) : null;
          e.$mp.data = Object.assign({}, {
            $root: {
              g0: t,
              l1: n,
              g3: i,
              l3: a,
              g5: o,
              g6: s,
              l4: l
            }
          })
        },
        a = []
    },
    "97ec": function(e, t, n) {},
    d340: function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = {
          name: "chat-item",
          components: {
            zeroMarkdownView: function() {
              n.e("union/components1/components/zero-markdown-view/zero-markdown-view").then(function() {
                return resolve(n("dd9a"))
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
            dataList: {
              type: Array,
              default: function() {
                return []
              }
            },
            newVal: {
              type: String,
              default: function() {
                return ""
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
              showMore: !1
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
            resetTravel: function() {
              this.$eventAnalyse.analyse({
                eventTag: "ai_guide_click",
                eventName: "小七点击规划引导按钮",
                eventParams: {
                  pagePath: "union/pages/aiTravel/index",
                  content: this.item.redirectContent
                }
              }), console.log(this.item.redirectContent, "this.item.redirectContent"), this.$emit("resetTravel", this.item.redirectContent)
            },
            changePlan: function() {
              this.$eventAnalyse.analyse({
                eventTag: "ai_changeGuide_click",
                eventName: "小七点击重新规划引导按钮",
                eventParams: {
                  pagePath: "union/pages/aiTravel/index",
                  content: this.item.changeAnswer
                }
              }), this.$emit("resetTravel", this.item.changeAnswer)
            },
            scenicDetails: function(e) {
              this.pushingProgress ? (this.$eventAnalyse.analyse({
                eventTag: "ai_escortScenicSpots_click",
                eventName: "伴游去景区详情",
                eventParams: {
                  url: "/pages/spotDetailNew/spotDetailNew?spotId=" + e.id
                }
              }), this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + e.id
              })) : this.$util.showToast("请稍候")
            },
            routeDetails: function(t) {
              this.pushingProgress ? (this.$eventAnalyse.analyse({
                eventTag: "ai_escortGoLine_click",
                eventName: "伴游去线路详情",
                eventParams: {
                  url: "/subPage/pages/lineInfo/lineInfo?lineId=" + t
                }
              }), e.navigateTo({
                url: "/subPage/pages/lineInfo/lineInfo?lineId=" + t
              })) : this.$util.showToast("请稍候")
            },
            goLine: function(t) {
              this.pushingProgress ? (this.$eventAnalyse.analyse({
                eventTag: "ai_exclusiveDetails_click",
                eventName: "专属详情页",
                eventParams: {
                  url: "/union/pages/ai/strategyGuide?lineId=" + t
                }
              }), e.navigateTo({
                url: "/union/pages/ai/strategyGuide?lineId=" + t
              })) : this.$util.showToast("请稍候")
            },
            jumpToMap: function() {
              this.item.longitude && this.item.latitude ? e.openLocation({
                latitude: Number(this.item.latitude),
                longitude: Number(this.item.longitude),
                name: this.item.title,
                success: function() {}
              }) : this.$util.showToast("获取地址失败！")
            },
            getExplain: function() {
              this.$emit("explain")
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
            askAgain: function(e) {
              this.pushingProgress ? this.$emit("askAgain", e) : this.$util.showToast("请稍候")
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
        t.default = i
      }).call(this, n("df3c").default)
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-item/chat-item-create-component", {
    "union/components1/chat-item/chat-item-create-component": function(e, t, n) {
      n("df3c").createComponent(n("5bc8"))
    }
  },
  [
    ["union/components1/chat-item/chat-item-create-component"]
  ]
]);
