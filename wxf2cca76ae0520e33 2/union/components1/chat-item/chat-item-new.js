require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/chat-item/chat-item-new"], {
    3095: function(e, t, n) {
      n.r(t);
      var i = n("9d02"),
        o = n.n(i);
      for (var a in i)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(a);
      t.default = o.a
    },
    6766: function(e, t, n) {},
    "9d02": function(e, t, n) {
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
            },
            xjtuTextCard: function() {
              n.e("union/components/xjtuTextCard").then(function() {
                return resolve(n("afdb"))
              }.bind(null, n)).catch(n.oe)
            },
            weatherCard: function() {
              n.e("union/components/weatherCard").then(function() {
                return resolve(n("c63ea"))
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
            },
            showComment: {
              type: Boolean,
              default: function() {
                return !1
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
              isSubmiting: !1,
              commentType: 0
            }
          },
          mounted: function() {
            this.displayText = "", this.index = 0
          },
          watch: {
            showComment: function(e, t) {
              console.log(e, t, "newVal,oldVal"), e !== t && this.$forceUpdate()
            }
          },
          created: function() {},
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
            gotoToilet: function(t) {
              this.$eventAnalyse.analyse({
                eventTag: "ai_toiletInfo_click",
                eventName: "小七点击厕所详情",
                eventParams: {
                  content: t
                }
              }), e.openLocation({
                latitude: +t.location.split(",")[1],
                longitude: +t.location.split(",")[0],
                name: t.name,
                success: function() {
                  console.log("success")
                },
                fail: function(e) {
                  console.log(e, "res")
                }
              })
            },
            callPhone: function() {
              var t = this;
              if (this.item.spotPhone && this.item.spotPhone.phoneNumbers && 0 !== this.item.spotPhone.phoneNumbers.length) {
                var n = this.item.spotPhone.phoneNumbers;
                1 === n.length ? (this.makePhoneCall(n[0]), this.$eventAnalyse.analyse({
                  eventTag: "ai_phoneCall_click",
                  eventName: "小七点击拨打景区电话",
                  eventParams: {
                    content: {
                      phoneNumbers: n[0]
                    }
                  }
                })) : e.showActionSheet({
                  itemList: n,
                  success: function(e) {
                    var i = n[e.tapIndex];
                    t.$eventAnalyse.analyse({
                      eventTag: "ai_phoneCall_click",
                      eventName: "小七点击拨打景区电话",
                      eventParams: {
                        content: {
                          phoneNumbers: i
                        }
                      }
                    }), t.makePhoneCall(i)
                  },
                  fail: function(e) {
                    console.log("用户取消选择电话")
                  }
                })
              } else this.$util.showToast("暂无电话号码")
            },
            makePhoneCall: function(t) {
              e.makePhoneCall({
                phoneNumber: t
              })
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
              this.pushingProgress ? (this.$eventAnalyse.analyse({
                eventTag: "ai_defaultAnswer_click",
                eventName: "小七点击回答推荐问题",
                eventParams: {
                  msg: e
                }
              }), this.$emit("askAgain", e)) : this.$util.showToast("请稍候")
            },
            goLineView: function() {
              e.navigateTo({
                url: "/union/pages/ai/strategyGuide?lineId=1734121312503611394"
              })
            },
            getTagData: function(e) {
              return e ? e.split(",") : []
            },
            gotoVideo: function(e) {
              e && "string" == typeof e ? this.$emit("playVideo", e) : this.$util.showToast("视频地址无效")
            },
            showPic: function(t) {
              var n = [t.data.url];
              e.previewImage({
                urls: n
              })
            },
            downloadFile: function(e) {},
            goodComment: function() {
              var e = this;
              if (!this.isSubmiting) {
                if (this.isSubmiting = !0, setTimeout((function() {
                    e.isSubmiting = !1
                  }), 1e3), 1 == this.commentType) return this.commentType = 0, this.item.comment = 0, void this.$emit("delComment", this.item, this.commentType);
                this.commentType = 1, this.item.comment = 1, this.$emit("openDrawer", this.item, this.commentType)
              }
            },
            badComment: function() {
              var e = this;
              if (!this.isSubmiting) {
                if (this.isSubmiting = !0, setTimeout((function() {
                    e.isSubmiting = !1
                  }), 1e3), 2 == this.commentType) return this.commentType = 0, this.item.comment = 0, void this.$emit("delComment", this.item, this.commentType);
                this.commentType = 2, this.item.comment = 2, this.$emit("openDrawer", this.item, this.commentType)
              }
            }
          }
        };
        t.default = i
      }).call(this, n("df3c").default)
    },
    edef: function(e, t, n) {
      n.r(t);
      var i = n("f0de"),
        o = n("3095");
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      n("fe86");
      var s = n("828b"),
        l = Object(s.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      t.default = l.exports
    },
    f0de: function(e, t, n) {
      n.d(t, "b", (function() {
        return i
      })), n.d(t, "c", (function() {
        return o
      })), n.d(t, "a", (function() {}));
      var i = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.item.historyLine || e.item.nomoreLine ? null : e.item.list && e.item.list.length && 0 == e.item.type),
            n = e.item.historyLine || e.item.nomoreLine || !t ? null : e.__map(e.item.list, (function(t, n) {
              var i = e.__get_orig(t),
                o = e.item.list.length,
                a = t.labels && t.labels.length > 0;
              return {
                $orig: i,
                g1: o,
                g2: a,
                l0: a ? e.getTagData(t.labels) : null
              }
            })),
            i = e.item.historyLine || e.item.nomoreLine ? null : e.item.officialGuide && e.item.officialGuide.length && 0 == e.item.type,
            o = e.item.historyLine || e.item.nomoreLine || !i ? null : e.__map(e.item.officialGuide, (function(t, n) {
              return {
                $orig: e.__get_orig(t),
                g4: JSON.parse(t.image),
                l2: t.themeNames ? e.getTagData(t.themeNames) : null
              }
            })),
            a = e.item.historyLine || e.item.nomoreLine ? null : e.item.divergenceProblem && e.item.divergenceProblem.length,
            s = e.item.historyLine || e.item.nomoreLine || !a ? null : e.item.divergenceProblem && e.item.divergenceProblem.length > 0,
            l = !e.item.historyLine && !e.item.nomoreLine && a && s ? e.__map(e.item.divergenceProblem, (function(t, n) {
              return {
                $orig: e.__get_orig(t),
                g7: e.item.divergenceProblem.length
              }
            })) : null,
            m = e.item.historyLine || e.item.nomoreLine ? null : e.item.toilet && e.item.toilet.length;
          e.$mp.data = Object.assign({}, {
            $root: {
              g0: t,
              l1: n,
              g3: i,
              l3: o,
              g5: a,
              g6: s,
              l4: l,
              g8: m
            }
          })
        },
        o = []
    },
    fe86: function(e, t, n) {
      var i = n("6766");
      n.n(i).a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-item/chat-item-new-create-component", {
    "union/components1/chat-item/chat-item-new-create-component": function(e, t, n) {
      n("df3c").createComponent(n("edef"))
    }
  },
  [
    ["union/components1/chat-item/chat-item-new-create-component"]
  ]
]);
