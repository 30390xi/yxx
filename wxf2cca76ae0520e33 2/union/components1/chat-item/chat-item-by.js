require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/chat-item/chat-item-by"], {
    "0ec3": function(e, t, i) {
      i.d(t, "b", (function() {
        return n
      })), i.d(t, "c", (function() {
        return o
      })), i.d(t, "a", (function() {}));
      var n = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.item.historyLine || e.item.nomoreLine || e.item.content ? null : e.$t("chatItem.thinking")),
            i = e.item.historyLine || e.item.nomoreLine || !e.item.redirectContent ? null : e.$t("chatItem.travelBuddy"),
            n = e.item.historyLine || e.item.nomoreLine || !e.item.changeAnswer ? null : e.$t("chatItem.rePlan"),
            o = e.item.historyLine || e.item.nomoreLine ? null : e.item.list && e.item.list.length && 0 == e.item.type,
            a = e.item.historyLine || e.item.nomoreLine || !o ? null : e.__map(e.item.list, (function(t, i) {
              var n = e.__get_orig(t),
                o = e.item.list.length,
                a = e.$t("chatItem.scenicSpot"),
                s = t.labels && t.labels.length > 0;
              return {
                $orig: n,
                g1: o,
                m3: a,
                g2: s,
                l0: s ? e.getTagData(t.labels) : null
              }
            })),
            s = e.item.historyLine || e.item.nomoreLine ? null : e.item.officialGuide && e.item.officialGuide.length && 0 == e.item.type,
            l = e.item.historyLine || e.item.nomoreLine || !s ? null : e.__map(e.item.officialGuide, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                g4: JSON.parse(t.image),
                l2: t.themeNames ? e.getTagData(t.themeNames) : null
              }
            })),
            m = e.item.historyLine || e.item.nomoreLine ? null : e.item.toilet && e.item.toilet.length,
            c = e.item.historyLine || e.item.nomoreLine || !m ? null : e.$t("chatItem.recommendation"),
            u = e.item.historyLine || e.item.nomoreLine || !m ? null : e.__map(e.item.toilet, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                m5: e.$t("chatItem.goHere")
              }
            })),
            r = e.item.historyLine || e.item.nomoreLine || !e.item.spotPhone ? null : e.__map(e.item.spotPhone.phoneNumbers, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                m6: e.$t("chatItem.phone")
              }
            })),
            h = e.item.divergenceProblem && e.item.divergenceProblem.length,
            d = h ? e.$t("chatItem.continueAsk") : null,
            g = h ? e.item.divergenceProblem && e.item.divergenceProblem.length > 0 : null,
            f = h && g ? e.__map(e.item.divergenceProblem, (function(t, i) {
              return {
                $orig: e.__get_orig(t),
                g8: e.item.divergenceProblem.length
              }
            })) : null,
            p = e.item.exclusiveRoute && e.item.exclusiveRoute ? e.$t("chatItem.viewExclusiveGuide") : null,
            v = e.item.officialGuide && 2 == e.item.officialGuideType && 0 == e.item.type ? e.$t("chatItem.generateExclusiveGuide") : null,
            $ = (e.item.historyLine || e.item.nomoreLine) && e.item.nomoreLine ? e.$t("chatItem.noMoreData") : null,
            y = !e.item.historyLine && !e.item.nomoreLine || e.item.nomoreLine ? null : e.$t("chatItem.historyRecord");
          e.$mp.data = Object.assign({}, {
            $root: {
              m0: t,
              m1: i,
              m2: n,
              g0: o,
              l1: a,
              g3: s,
              l3: l,
              g5: m,
              m4: c,
              l4: u,
              l5: r,
              g6: h,
              m7: d,
              g7: g,
              l6: f,
              m8: p,
              m9: v,
              m10: $,
              m11: y
            }
          })
        },
        o = []
    },
    3011: function(e, t, i) {
      i.r(t);
      var n = i("458c"),
        o = i.n(n);
      for (var a in n)["default"].indexOf(a) < 0 && function(e) {
        i.d(t, e, (function() {
          return n[e]
        }))
      }(a);
      t.default = o.a
    },
    "3e7d": function(e, t, i) {},
    "458c": function(e, t, i) {
      (function(e) {
        var n = i("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = {
          name: "chat-item",
          mixins: [n(i("30eb")).default],
          components: {
            zeroMarkdownView: function() {
              i.e("union/components1/components/zero-markdown-view/zero-markdown-view").then(function() {
                return resolve(i("dd9a"))
              }.bind(null, i)).catch(i.oe)
            },
            xjtuTextCard: function() {
              i.e("union/components/xjtuTextCard").then(function() {
                return resolve(i("afdb"))
              }.bind(null, i)).catch(i.oe)
            },
            weatherCard: function() {
              i.e("union/components/weatherCard").then(function() {
                return resolve(i("c63ea"))
              }.bind(null, i)).catch(i.oe)
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
            },
            teamType: {
              type: String,
              default: function() {
                return "1"
              }
            },
            likeSave: {
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
              commentType: 0,
              userLogo: "",
              like: !1,
              collection: !1
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          mounted: function() {
            this.displayText = "", this.index = 0
          },
          watch: {
            showComment: function(e, t) {
              console.log(e, t, "newVal,oldVal"), e !== t && this.$forceUpdate()
            },
            likeSave: {
              handler: function(e, t) {
                this.like = e, this.collection = e
              },
              deep: !0,
              immediate: !0
            }
          },
          created: function() {},
          methods: {
            isRetryFun: function() {
              this.$emit("isRetryBack")
            },
            itemContent: function() {
              var e = this;
              if (!this.item.content) return this.displayText = "", void(this.index = 0);
              var t = setInterval((function() {
                e.index < e.item.content.length ? (e.displayText += e.item.content.charAt(e.index), e.index++) : clearInterval(t)
              }), 50)
            },
            resetTravel: function() {
              console.log(this.item.redirectContent, "this.item.redirectContent"), this.$emit("resetTravel", this.item.redirectContent)
            },
            gotoToilet: function(t) {
              e.openLocation({
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
                var i = this.item.spotPhone.phoneNumbers;
                1 === i.length ? this.makePhoneCall(i[0]) : e.showActionSheet({
                  itemList: i,
                  success: function(e) {
                    var n = i[e.tapIndex];
                    t.makePhoneCall(n)
                  },
                  fail: function(e) {
                    console.log("用户取消选择电话")
                  }
                })
              } else this.$util.showToast(this.$t("chatItem.noPhoneNumber"))
            },
            makePhoneCall: function(t) {
              e.makePhoneCall({
                phoneNumber: t
              })
            },
            changePlan: function() {
              this.$emit("resetTravel", this.item.changeAnswer)
            },
            scenicDetails: function(e) {
              this.pushingProgress ? this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + e.id
              }) : this.$util.showToast(this.$t("chatItem.pleaseWait"))
            },
            routeDetails: function(t) {
              this.pushingProgress ? e.navigateTo({
                url: "/subPage/pages/lineInfo/lineInfo?lineId=" + t
              }) : this.$util.showToast(this.$t("chatItem.pleaseWait"))
            },
            goLine: function(t) {
              this.pushingProgress ? e.navigateTo({
                url: "/union/pages/ai/strategyGuide?lineId=" + t
              }) : this.$util.showToast(this.$t("chatItem.pleaseWait"))
            },
            jumpToMap: function() {
              this.item.longitude && this.item.latitude ? e.openLocation({
                latitude: Number(this.item.latitude),
                longitude: Number(this.item.longitude),
                name: this.item.title,
                success: function() {}
              }) : this.$util.showToast(this.$t("chatItem.addressFailed"))
            },
            getExplain: function() {
              this.$emit("explain")
            },
            exclusiveStrategy: function(e) {
              this.pushingProgress ? this.$emit("exclusive", e) : this.$util.showToast(this.$t("chatItem.pleaseWait"))
            },
            askAgain: function(e) {
              this.pushingProgress ? ("1" == this.teamType ? this.$eventAnalyse.analyse({
                eventTag: "ai_recommend_click",
                eventName: "小七点击回答推荐问题",
                eventParams: {
                  msg: e
                }
              }) : this.$eventAnalyse.analyse({
                eventTag: "ai_recommendTeam_click",
                eventName: "团队小七点击回答推荐问题",
                eventParams: {
                  msg: e
                }
              }), this.$emit("askAgain", e)) : this.$util.showToast(this.$t("chatItem.pleaseWait"))
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
              var i = [t.data.url];
              e.previewImage({
                urls: i
              })
            },
            downloadFile: function(e) {},
            goodComment: function() {
              var e = this;
              if (this.$util.isLogin()) {
                if (this.isSubmiting) return;
                "1" == this.teamType ? this.$eventAnalyse.analyse({
                  eventTag: "ai_good_comment_click",
                  eventName: "点赞按钮点击",
                  eventParams: {
                    roundId: this.item.roundId || "",
                    link: this.link
                  }
                }) : this.$eventAnalyse.analyse({
                  eventTag: "ai_good_commentTeam_click",
                  eventName: "团队对话点赞按钮点击",
                  eventParams: {
                    roundId: this.item.roundId || "",
                    like: this.like
                  }
                }), this.isSubmiting = !0, setTimeout((function() {
                  e.isSubmiting = !1
                }), 1e3);
                var t = this.like ? "ai/app/qa/like/unlike?roundId=" : "ai/app/qa/like/like?roundId=";
                this.$uniApi.dataRequestYesLoading("POST", t + this.item.roundId, {
                  roundId: this.item.roundId
                }, "加载中...").then((function(t) {
                  1 === t.code ? (e.like = !e.like, e.$util.showToast(e.like ? e.$t("chatItem.thankYouForFeedback") : e.$t("chatItem.cancelLikeSuccess"))) : e.$util.showToast(t.msg)
                }))
              }
            },
            badComment: function() {
              var e = this;
              if (this.$util.isLogin()) {
                if (this.isSubmiting) return;
                "1" == this.teamType ? this.$eventAnalyse.analyse({
                  eventTag: "ai_bad_comment_click",
                  eventName: "收藏按钮点击",
                  eventParams: {
                    roundId: this.item.roundId || "",
                    collection: this.collection
                  }
                }) : this.$eventAnalyse.analyse({
                  eventTag: "ai_bad_commentTeam_click",
                  eventName: "团队对话收藏按钮点击",
                  eventParams: {
                    roundId: this.item.roundId || "",
                    collection: this.collection
                  }
                }), this.isSubmiting = !0, setTimeout((function() {
                  e.isSubmiting = !1
                }), 1e3);
                var t = this.collection ? "ai/app/qa/collect/uncollect?roundId=" : "ai/app/qa/collect/collect?roundId=";
                this.$uniApi.dataRequestYesLoading("POST", t + this.item.roundId, {
                  roundId: this.item.roundId
                }, "加载中...").then((function(t) {
                  1 === t.code ? (e.collection = !e.collection, e.$util.showToast(e.collection ? e.$t("chatItem.collectSuccess") : e.$t("chatItem.cancelCollectSuccess")), e.$emit("badCommentFun")) : e.$util.showToast(t.msg)
                }))
              }
            }
          }
        };
        t.default = o
      }).call(this, i("df3c").default)
    },
    8633: function(e, t, i) {
      i.r(t);
      var n = i("0ec3"),
        o = i("3011");
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        i.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      i("a979");
      var s = i("828b"),
        l = Object(s.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
      t.default = l.exports
    },
    a979: function(e, t, i) {
      var n = i("3e7d");
      i.n(n).a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-item/chat-item-by-create-component", {
    "union/components1/chat-item/chat-item-by-create-component": function(e, t, i) {
      i("df3c").createComponent(i("8633"))
    }
  },
  [
    ["union/components1/chat-item/chat-item-by-create-component"]
  ]
]);
