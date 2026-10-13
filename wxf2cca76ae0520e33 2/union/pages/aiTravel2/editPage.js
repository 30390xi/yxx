require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiTravel2/editPage"], {
    "05b7": function(t, e, i) {
      i.d(e, "b", (function() {
        return s
      })), i.d(e, "c", (function() {
        return r
      })), i.d(e, "a", (function() {
        return a
      }));
      var a = {
          uniNavbar: function() {
            return i.e("components/uni-navbar/uni-navbar").then(i.bind(null, "101a"))
          },
          uSwipeAction: function() {
            return i.e("uview-ui/components/u-swipe-action/u-swipe-action").then(i.bind(null, "9748"))
          },
          uSearch: function() {
            return i.e("uview-ui/components/u-search/u-search").then(i.bind(null, "90a6"))
          },
          uniPopup: function() {
            return Promise.all([i.e("common/vendor"), i.e("components/uni-popup/uni-popup")]).then(i.bind(null, "db3a"))
          }
        },
        s = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.__map(t.lineList, (function(e, i) {
              var a = t.__get_orig(e),
                s = e.aiPlanCards.length,
                r = (t.isDragging || t.isDragReady) && !t.isScrolling && t.placeholderDayIdx === i && t.placeholderIndex === e.aiPlanCards.length;
              return {
                $orig: a,
                g0: s,
                g1: r,
                g2: r ? (t.isDragging || t.isDragReady) && !t.isScrolling && t.placeholderDayIdx === i && t.placeholderIndex === e.aiPlanCards.length : null
              }
            }))),
            i = t.showSpotModal ? t.getTypeName() : null,
            a = t.showSpotModal ? !t.spotLoading && 0 === t.spotList.length : null,
            s = t.showSpotModal && !a ? t.__map(t.spotList, (function(e, i) {
              return {
                $orig: t.__get_orig(e),
                m1: t.isSpotSelected(e)
              }
            })) : null,
            r = t.showSpotModal && !t.spotLoading ? !t.spotHasMore && t.spotList.length > 0 : null;
          t._isMounted || (t.e0 = function(e, i, a) {
            for (var s = [], r = arguments.length - 3; r-- > 0;) s[r] = arguments[r + 3];
            var n = s[s.length - 1].currentTarget.dataset,
              o = n.eventParams || n["event-params"];
            return i = o.dayIdx, a = o.cIndex, t.onSwipeClick(e, i, a)
          }, t.e1 = function(e, i, a) {
            for (var s = [], r = arguments.length - 3; r-- > 0;) s[r] = arguments[r + 3];
            var n = s[s.length - 1].currentTarget.dataset,
              o = n.eventParams || n["event-params"];
            return i = o.dayIdx, a = o.cIndex, t.onSwipeClick(e, i, a)
          }), t.$mp.data = Object.assign({}, {
            $root: {
              l0: e,
              m0: i,
              g3: a,
              l1: s,
              g4: r
            }
          })
        },
        r = []
    },
    "06a3": function(t, e, i) {
      (function(t, e) {
        var a = i("47a9");
        i("5366"), a(i("3240"));
        var s = a(i("645d"));
        t.__webpack_require_UNI_MP_PLUGIN__ = i, e(s.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    },
    "0948": function(t, e, i) {
      var a = i("a774");
      i.n(a).a
    },
    6066: function(t, e, i) {
      i.r(e);
      var a = i("8a56"),
        s = i.n(a);
      for (var r in a)["default"].indexOf(r) < 0 && function(t) {
        i.d(e, t, (function() {
          return a[t]
        }))
      }(r);
      e.default = s.a
    },
    "645d": function(t, e, i) {
      i.r(e);
      var a = i("05b7"),
        s = i("6066");
      for (var r in s)["default"].indexOf(r) < 0 && function(t) {
        i.d(e, t, (function() {
          return s[t]
        }))
      }(r);
      i("8b29"), i("0948");
      var n = i("828b"),
        o = Object(n.a)(s.default, a.b, a.c, !1, null, "c117c91e", null, !1, a.a, void 0);
      e.default = o.exports
    },
    "8a56": function(t, e, i) {
      (function(t) {
        var a = i("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var s, r = a(i("af34")),
          n = a(i("7ca3")),
          o = a(i("3b2d"));

        function l(t, e) {
          var i = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e && (a = a.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.push.apply(i, a)
          }
          return i
        }

        function c(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? l(Object(i), !0).forEach((function(e) {
              (0, n.default)(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : l(Object(i)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
          }
          return t
        }
        a(i("7671"));
        var h = {
          name: "editPage",
          onLoad: function(e) {
            this.sessionId = e.sessionId, this.isShare = e.type && "share" === e.type, this.isShare && this.getShareMemberInfo(), this.resetDrag(), this.getLineList();
            try {
              var i = t.getSystemInfoSync();
              this.windowHeight = i.windowHeight || 0
            } catch (t) {
              this.windowHeight = 0
            }
          },
          onShow: function() {
            (this.isDragging || this.isDragReady) && this.resetDrag(), this.isScrolling = !1, this.lastScrollTime = 0
          },
          onHide: function() {
            this.resetDrag()
          },
          onUnload: function() {
            this.clearAllTimers(), this.resetDrag()
          },
          data: function() {
            return {
              sessionId: "",
              shoFloatBtn: !0,
              isShare: !1,
              lineList: [],
              swipeOptions: [{
                text: "",
                style: {
                  backgroundColor: "transparent",
                  backgroundImage: "url('https://eshopfile.zhiyousx.com/175688229568190089.png ')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "40rpx 40rpx"
                }
              }],
              isDragging: !1,
              isDragReady: !1,
              dragDayIdx: -1,
              dragIndex: -1,
              dragPlaceholderIndex: -1,
              placeholderIndex: -1,
              placeholderDayIdx: -1,
              lastPlaceholderIndex: -1,
              lastPlaceholderDayIdx: -1,
              dragItem: null,
              dragY: 0,
              dragX: 0,
              dragOffsetY: 0,
              touchStartY: 0,
              touchStartX: 0,
              dragThreshold: 10,
              windowHeight: 0,
              scrollTop: 0,
              isScrolling: !1,
              scrollEndTimer: null,
              isAtBottom: !1,
              scrollThrottleTimer: null,
              cachedMaxScrollTop: 0,
              lastScrollTime: 0,
              itemRects: [],
              allItemRects: [],
              autoScrollTimer: null,
              updatePlaceholderTimer: null,
              refreshItemRectsTimer: null,
              lastUpdateTime: 0,
              isAtBoundary: !1,
              bottomCheckTimer: null,
              showSpotModal: !1,
              currentSpotType: 1,
              spotTypeList: [{
                name: "景点",
                type: 1
              }, {
                name: "演出",
                type: 4
              }, {
                name: "美食",
                type: 2
              }, {
                name: "酒店",
                type: 3
              }],
              spotList: [],
              selectedSpots: [],
              currentDayIdx: 0,
              city: "",
              spotPageOn: 1,
              spotPageSize: 10,
              spotHasMore: !0,
              spotLoading: !1,
              spotSearchKeyword: "",
              spotSearchTimer: null,
              showDeleteModal: !1,
              deleteDayIdx: -1,
              showDeleteCardModal: !1,
              deleteCardIdx: -1,
              deleteCardDayIdx: -1,
              swipeActionKey: 0,
              forceCloseSwipe: !1,
              hideSwipeActions: !1,
              budget: "",
              tempAvatar: "",
              tempNickname: "",
              isSubmitting: !1,
              titlePeople: 1,
              oldBudget: ""
            }
          },
          computed: {
            dragGhostStyle: function() {
              if (!this.isDragging && !this.isDragReady) return "transform: translate3d(0, 0px, 0);";
              var t = this.dragY - this.dragOffsetY;
              return "transform: translate3d(0, ".concat(t, "px, 0);")
            }
          },
          methods: (s = {
            getShareMemberInfo: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/app/share/exist?openId=" + t.getStorageSync("wxopenid") + "&sessionId=" + this.sessionId).then((function(t) {
                if (1 === t.code)
                  if (0 == t.data) e.shoFloatBtn = !1, e.showAvatarNicknamePopup();
                  else {
                    if (1 == t.data) return;
                    "object" === (0, o.default)(t.data) && (e.tempAvatar = t.data.avatarUrl || "https://eshopfile.zhiyousx.com/175747715812480897.png", e.tempNickname = t.data.name || "匿名用户", e.confirmAvatarNickname())
                  }
              }))
            },
            getLineList: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "ai/planCard/queryById?id=" + this.sessionId).then((function(e) {
                1 === e.code && (t.lineList = e.data, t.oldBudget = e.data[0].totalPrice, t.lineList.forEach((function(t, e) {
                  t.aiPlanCards || (t.aiPlanCards = []), t.aiPlanCards.forEach((function(t, e) {
                    t.pictureUrl && (t.headImgUrl = JSON.parse(t.pictureUrl)[0])
                  }))
                })), t.city = t.lineList[0].city.replace("市", ""), t.titlePeople = t.lineList[0].titlePeople)
              }))
            },
            onSwipeClick: function(t, e, i) {
              this.showDeleteCardModal = !0, this.deleteCardDayIdx = e, this.deleteCardIdx = i
            },
            deleteDay: function(e) {
              1 != this.lineList.length ? (this.showDeleteModal = !0, this.deleteDayIdx = e) : t.showToast({
                title: "至少保留一天!",
                icon: "none"
              })
            },
            getTypeName: function() {
              var t = this;
              return this.spotTypeList.find((function(e) {
                return e.type === t.currentSpotType
              })).name
            },
            addDay: function() {
              var e = this;
              this.lineList.length >= 5 ? t.showToast({
                title: "最多添加5天!",
                icon: "none"
              }) : (this.lineList.push({
                aiPlanCards: [],
                day: this.lineList.length + 1,
                city: this.city + "市",
                openId: t.getStorageSync("wxopenid"),
                bussType: 2,
                title: "AI旅游行程规划"
              }), this.$nextTick((function() {
                e.scrollToNewDay()
              })), t.showToast({
                title: "添加天数成功",
                icon: "none"
              }))
            },
            closeDeleteModal: function() {
              this.showDeleteModal = !1
            },
            confirmDelete: function() {
              var t = this;
              this.lineList[this.deleteDayIdx].aiPlanCards.map((function(t) {
                return t.scenicId
              })).forEach((function(e) {
                t.$eventAnalyse.analyse({
                  eventTag: "aiTravel_edit_delete",
                  eventName: "旅行搭子卡片编辑删除",
                  eventParams: JSON.stringify({
                    sessionId: t.sessionId,
                    scenicId: e
                  })
                })
              })), this.lineList.splice(this.deleteDayIdx, 1), this.showDeleteModal = !1
            },
            closeDeleteCardModal: function() {
              this.showDeleteCardModal = !1
            },
            confirmDeleteCard: function() {
              var e = this;
              try {
                if (this.deleteCardDayIdx < 0 || this.deleteCardDayIdx >= this.lineList.length) return void t.showToast({
                  title: "删除失败：无效的天数索引",
                  icon: "none"
                });
                var i = this.lineList[this.deleteCardDayIdx].aiPlanCards;
                if (!Array.isArray(i) || this.deleteCardIdx < 0 || this.deleteCardIdx >= i.length) return void t.showToast({
                  title: "删除失败：无效的卡片索引",
                  icon: "none"
                });
                var a = 0;
                if (this.lineList.forEach((function(t) {
                    t.aiPlanCards && Array.isArray(t.aiPlanCards) && (a += t.aiPlanCards.length)
                  })), a <= 1) return t.showToast({
                  title: "至少需要保留一个地点",
                  icon: "none"
                }), this.showDeleteCardModal = !1, this.deleteCardDayIdx = -1, void(this.deleteCardIdx = -1);
                this.$eventAnalyse.analyse({
                  eventTag: "aiTravel_edit_delete",
                  eventName: "旅行搭子卡片编辑删除",
                  eventParams: JSON.stringify({
                    sessionId: this.sessionId,
                    scenicId: this.lineList[this.deleteCardDayIdx].aiPlanCards[this.deleteCardIdx].scenicId
                  })
                });
                var s = this.deleteCardDayIdx,
                  r = this.deleteCardIdx;
                this.closeAllSwipeActions(), setTimeout((function() {
                  e.lineList[s].aiPlanCards.splice(r, 1), e.showDeleteCardModal = !1, e.deleteCardDayIdx = -1, e.deleteCardIdx = -1, e.$nextTick((function() {
                    e.forceUpdateSwipeActions()
                  })), t.showToast({
                    title: "删除行程成功",
                    icon: "success"
                  })
                }), 150)
              } catch (e) {
                t.showToast({
                  title: "删除失败",
                  icon: "none"
                })
              }
            },
            onCardLongPress: function(t, e, i, a) {
              var s = this;
              try {
                if (!this.lineList || !Array.isArray(this.lineList) || t < 0 || t >= this.lineList.length || !this.lineList[t] || !this.lineList[t].aiPlanCards || e < 0 || e >= this.lineList[t].aiPlanCards.length) return;
                if (this.isDragging || this.isDragReady) return this.resetDrag(), void this.$nextTick((function() {
                  s.prepareDrag(t, e, i, a)
                }));
                var r = Date.now() - this.lastScrollTime;
                if (this.isScrolling && r > 20) return;
                this.isScrolling && r <= 200 && (this.isScrolling = !1, this.scrollEndTimer && (clearTimeout(this.scrollEndTimer), this.scrollEndTimer = null)), a && (a.preventDefault(), a.stopPropagation()), this.prepareDrag(t, e, i, a)
              } catch (t) {
                console.error("长按开始错误:", t)
              }
            },
            onCardTouchMove: function(t, e, i, a) {
              (this.isDragReady || this.isDragging) && this.dragDayIdx === t && this.dragIndex === e && this.onDragGhostTouchMove(a)
            }
          }, (0, n.default)(s, "closeDeleteCardModal", (function() {
            this.showDeleteCardModal = !1, this.deleteCardDayIdx = -1, this.deleteCardIdx = -1, this.forceUpdateSwipeActions()
          })), (0, n.default)(s, "forceUpdateSwipeActions", (function() {
            var t = this;
            this.swipeActionKey++, this.$nextTick((function() {
              t.$forceUpdate()
            }))
          })), (0, n.default)(s, "closeAllSwipeActions", (function() {
            var t = this;
            this.$nextTick((function() {
              for (var e = 0; e < t.lineList.length; e++) {
                var i = t.lineList[e] && t.lineList[e].aiPlanCards;
                if (i && Array.isArray(i))
                  for (var a = 0; a < i.length; a++) {
                    var s = i[a];
                    if (s && s.id) {
                      var r = "swipeAction_".concat(s.id),
                        n = t.$refs[r];
                      if (n && n[0] && "function" == typeof n[0].close) try {
                        n[0].close()
                      } catch (t) {}
                    }
                  }
              }
            }))
          })), (0, n.default)(s, "onCardTouchEnd", (function(t, e, i, a) {
            (this.isDragReady || this.isDragging) && this.dragDayIdx === t && this.dragIndex === e && this.onDragGhostTouchEnd(a)
          })), (0, n.default)(s, "showBudgetPopup", (function() {
            this.$refs.editTitlePopup.open()
          })), (0, n.default)(s, "closeBudgetPopup", (function() {
            this.$refs.editTitlePopup.close()
          })), (0, n.default)(s, "handleBudgetInput", (function(t) {
            var e = this,
              i = /[^\d]/g;
            this.$nextTick((function() {
              e.budget = t.detail.value.replace(i, "")
            }))
          })), (0, n.default)(s, "confirmBudget", (function() {
            if (this.budget)
              if (Number(this.budget) <= 0) t.showToast({
                title: "请输入大于0的预算金额",
                icon: "none"
              });
              else if (+this.budget > 5e4) t.showToast({
              title: "金额过大，请输入小于50000的价格",
              icon: "none"
            });
            else {
              var e = 1;
              this.lineList && this.lineList.length > 0 && this.titlePeople && (e = parseInt(this.titlePeople) || 1);
              var i = 100 * e;
              Number(this.budget) < i ? t.showToast({
                title: "预算不能少于".concat(i, "元"),
                icon: "none"
              }) : (this.closeBudgetPopup(), this.submitData())
            } else t.showToast({
              title: "请输入预算金额",
              icon: "none"
            })
          })), (0, n.default)(s, "submitData", (function() {
            var e = this;
            if (this.lineList && 0 !== this.lineList.length) {
              var i = 0;
              if (this.lineList.forEach((function(t) {
                  t.aiPlanCards && Array.isArray(t.aiPlanCards) && (i += t.aiPlanCards.length)
                })), 0 !== i) {
                for (var a = 0; a < this.lineList.length; a++) {
                  var s = this.lineList[a];
                  if (!s.aiPlanCards || 0 === s.aiPlanCards.length) return void t.showToast({
                    title: "第".concat(a + 1, "天至少需要添加一个地点"),
                    icon: "none"
                  });
                  if (s.aiPlanCards.length > 10) return void t.showToast({
                    title: "第".concat(a + 1, "天最多只能添加10个地点"),
                    icon: "none"
                  })
                }
                var r = {
                  sessionId: this.sessionId,
                  totalDay: this.lineList.length,
                  price: this.budget,
                  budgetType: 1,
                  generateChildDTOList: [],
                  travelTitle: "".concat(this.lineList[0].city).concat(this.lineList.length, "天旅行计划")
                };
                this.tempAvatar && (r.editorHead = this.tempAvatar), this.lineList.forEach((function(i, a) {
                  var s = 0,
                    n = i.aiPlanCards.map((function(t) {
                      return c(c({}, t), {}, {
                        sort: 1 === t.type ? -1 : s++,
                        day: a + 1
                      })
                    }));
                  r.generateChildDTOList.push({
                    day: a + 1,
                    city: i.city,
                    openId: t.getStorageSync("wxopenid"),
                    aiPlanCards: n,
                    bussType: 2,
                    title: "AI旅游行程规划",
                    travelTitle: i.city + e.lineList.length + "天旅行计划"
                  })
                })), this.$eventAnalyse.analyse({
                  eventTag: "aiTravel_edit_submit",
                  eventName: "旅行搭子卡片编辑提交",
                  eventParams: JSON.stringify({
                    sessionId: this.sessionId
                  })
                }), t.setStorageSync("editParam", r);
                var n = this.isShare ? "2" : "1",
                  o = "/union/pages/aiTravel2/loadPage?type=edit&mode=".concat(n);
                t.redirectTo({
                  url: o
                })
              } else t.showToast({
                title: "请至少添加一个地点",
                icon: "none"
              })
            } else t.showToast({
              title: "请至少添加一天行程",
              icon: "none"
            })
          })), (0, n.default)(s, "prepareDrag", (function(t, e, i, a) {
            var s = this;
            try {
              this.clearAllTimers(), this.dragDayIdx = t, this.dragIndex = e, this.dragPlaceholderIndex = e, this.placeholderIndex = e, this.placeholderDayIdx = t, this.dragItem = JSON.parse(JSON.stringify(i));
              var r = a && a.touches && a.touches[0] || {};
              this.touchStartY = r.clientY || 0, this.touchStartX = r.clientX || 0, this.dragY = this.touchStartY, this.dragX = this.touchStartX, this.dragOffsetY = 50, this.isDragReady = !0, this.$nextTick((function() {
                s.getItemRects(t).then((function(t) {
                  s.itemRects = t || [];
                  var i = t && t[e];
                  i && (s.dragOffsetY = (r.clientY || 0) - (i.top || 0)), s.initAllItemRects()
                })).catch((function(t) {
                  console.error("获取卡片位置错误:", t)
                }))
              }))
            } catch (t) {
              console.error("准备拖拽错误:", t), this.resetDrag()
            }
          })), (0, n.default)(s, "startNewDrag", (function(t, e, i, a) {
            var s = this;
            try {
              this.autoScrollTimer && (clearInterval(this.autoScrollTimer), this.autoScrollTimer = null), this.updatePlaceholderTimer && (clearTimeout(this.updatePlaceholderTimer), this.updatePlaceholderTimer = null), this.dragDayIdx = t, this.dragIndex = e, this.dragPlaceholderIndex = e, this.placeholderIndex = e, this.placeholderDayIdx = t, this.dragItem = JSON.parse(JSON.stringify(i));
              var r = a && a.touches && a.touches[0] || {};
              this.dragY = r.clientY || 0, this.dragX = r.clientX || 0, this.getItemRects(t).then((function(t) {
                s.itemRects = t || [];
                var i = t && t[e];
                s.dragOffsetY = i ? (r.clientY || 0) - (i.top || 0) : 0, s.isDragging = !0, s.initAllItemRects()
              })).catch((function(t) {
                console.error("获取卡片位置错误:", t), s.resetDrag()
              }))
            } catch (t) {
              console.error("开始新拖拽错误:", t), this.resetDrag()
            }
          })), (0, n.default)(s, "onPageTouchMove", (function(t) {
            !this.isDragging && this.isDragReady
          })), (0, n.default)(s, "calculateCurrentPositions", (function() {
            return this.allItemRects || []
          })), (0, n.default)(s, "onDragGhostTouchMove", (function(t) {
            var e = this,
              i = t && t.touches && t.touches[0] || {},
              a = i.clientY || 0,
              s = i.clientX || 0;
            if (this.isDragReady && !this.isDragging) {
              if (this.isScrolling) return void this.resetDrag();
              var r = Math.abs(a - this.touchStartY),
                n = Math.abs(s - this.touchStartX);
              if (!(r > this.dragThreshold || n > this.dragThreshold)) return t.preventDefault(), void t.stopPropagation();
              this.startActualDrag(), t.preventDefault(), t.stopPropagation()
            }(this.isDragging || this.isDragReady) && (this.validateDragState() ? (t.preventDefault(), t.stopPropagation(), Math.abs(a - this.dragY) > 1 && (this.dragY = a), Math.abs(s - this.dragX) > 1 && (this.dragX = s), this.tryAutoScroll(this.dragY), this.updatePlaceholderTimer && clearTimeout(this.updatePlaceholderTimer), this.updatePlaceholderTimer = setTimeout((function() {
              e.updatePlaceholderIndex()
            }), 50)) : this.resetDrag())
          })), (0, n.default)(s, "onDragGhostTouchEnd", (function(t) {
            var e = this;
            if (t && (t.preventDefault(), t.stopPropagation()), this.autoScrollTimer && (clearInterval(this.autoScrollTimer), this.autoScrollTimer = null), this.updatePlaceholderTimer && (clearTimeout(this.updatePlaceholderTimer), this.updatePlaceholderTimer = null), this.isDragging) {
              if (this.isScrolling) return void this.resetDrag();
              try {
                if (!this.lineList || !Array.isArray(this.lineList) || this.dragDayIdx < 0 || this.dragDayIdx >= this.lineList.length || !this.lineList[this.dragDayIdx] || !this.lineList[this.dragDayIdx].aiPlanCards) return void this.resetDrag();
                if (this.placeholderDayIdx < 0 || this.placeholderIndex < 0) return void this.resetDrag();
                var i = this.lineList[this.dragDayIdx].aiPlanCards,
                  a = this.lineList[this.placeholderDayIdx] && this.lineList[this.placeholderDayIdx].aiPlanCards;
                if (!Array.isArray(i) || !Array.isArray(a)) return void this.resetDrag();
                var s = this.dragDayIdx,
                  r = this.dragIndex,
                  n = this.placeholderDayIdx,
                  o = this.placeholderIndex;
                if (o < 0 && (o = 0), o > a.length && (o = a.length), s === n && r === o) return void this.resetDrag();
                var l = i.splice(r, 1)[0];
                s === n && o > r && (o -= 1), a.splice(o, 0, l), this.getContentHeight().then((function(t) {
                  e.cachedMaxScrollTop = t
                }))
              } catch (t) {
                console.error("拖拽结束错误:", t)
              }
            }
            this.resetDrag(), this.isAtBottom = !1
          })), (0, n.default)(s, "startActualDrag", (function() {
            this.isDragging = !0
          })), (0, n.default)(s, "onPageTouchEnd", (function(t) {
            !this.isDragging && this.isDragReady
          })), (0, n.default)(s, "openSpotModal", (function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            this.currentDayIdx = t, this.showSpotModal = !0, this.selectedSpots = [], this.currentSpotType = 1, this.loadSpotList(!0)
          })), (0, n.default)(s, "closeSpotModal", (function() {
            this.showSpotModal = !1, this.selectedSpots = [], this.spotSearchKeyword = "", this.spotSearchTimer && (clearTimeout(this.spotSearchTimer), this.spotSearchTimer = null)
          })), (0, n.default)(s, "selectSpotType", (function(t) {
            this.currentSpotType = t, this.spotList = [], this.loadSpotList(!0)
          })), (0, n.default)(s, "loadSpotList", (function() {
            var e = this,
              i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.spotLoading) {
              this.spotLoading = !0, i && (this.spotPageOn = 1, this.spotHasMore = !0);
              var a = {
                city: this.city,
                type: this.currentSpotType,
                pageOn: this.spotPageOn,
                pageSize: this.spotPageSize
              };
              this.spotSearchKeyword && this.spotSearchKeyword.trim() && (a.name = this.spotSearchKeyword.trim()), this.$uniApi.dataRequestNoLoading("GET", "ai/link/queryLocation", a).then((function(t) {
                var a = t.data.records || [];
                e.spotList = i ? a : [].concat((0, r.default)(e.spotList), (0, r.default)(a)), e.spotHasMore = a.length >= e.spotPageSize, e.spotHasMore && e.spotPageOn++, e.spotLoading = !1
              })).catch((function(i) {
                console.error("加载景点列表失败:", i), e.spotLoading = !1, t.showToast({
                  title: "加载失败",
                  icon: "none"
                })
              }))
            }
          })), (0, n.default)(s, "onSpotSearch", (function(t) {
            this.spotSearchKeyword = t, this.performSpotSearch()
          })), (0, n.default)(s, "onSpotSearchClear", (function() {
            this.spotSearchKeyword = "", this.performSpotSearch()
          })), (0, n.default)(s, "onSpotSearchInput", (function(t) {
            var e = this;
            this.spotSearchKeyword = t, this.spotSearchTimer && clearTimeout(this.spotSearchTimer), this.spotSearchTimer = setTimeout((function() {
              e.performSpotSearch()
            }), 500)
          })), (0, n.default)(s, "performSpotSearch", (function() {
            this.spotPageOn = 1, this.spotHasMore = !0, this.spotList = [], this.loadSpotList(!0)
          })), (0, n.default)(s, "goToDetail", (function(e) {
            t.navigateTo({
              url: "/pages/spotDetailNew/spotDetailNew?spotId=" + e.scenicId
            })
          })), (0, n.default)(s, "toggleSpotSelection", (function(t) {
            console.warn("无效的景点数据:", t);
            var e = this.selectedSpots.findIndex((function(e) {
              return e.scenicId === t.scenicId
            }));
            e > -1 ? this.selectedSpots.splice(e, 1) : this.selectedSpots.push(c(c({}, t), {}, {
              type: [0, 2, 1, 3][this.currentSpotType - 1]
            }))
          })), (0, n.default)(s, "isSpotSelected", (function(t) {
            return !(!t || !t.scenicId) && this.selectedSpots.some((function(e) {
              return e.scenicId === t.scenicId
            }))
          })), (0, n.default)(s, "confirmSpotSelection", (function() {
            var e, i = this;
            0 !== this.selectedSpots.length ? ((null === (e = this.lineList[this.currentDayIdx]) || void 0 === e ? void 0 : e.aiPlanCards) || []).length + this.selectedSpots.length > 10 ? t.showToast({
              title: "一天最多只能添加10个地点",
              icon: "none"
            }) : (this.lineList[this.currentDayIdx] && (this.lineList[this.currentDayIdx].aiPlanCards || (this.lineList[this.currentDayIdx].aiPlanCards = []), this.selectedSpots.forEach((function(e) {
              i.$eventAnalyse.analyse({
                eventTag: "aiTravel_edit_add",
                eventName: "旅行搭子卡片编辑添加",
                eventParams: JSON.stringify({
                  sessionId: i.sessionId,
                  scenicId: e.scenicId
                })
              });
              var a = c(c({}, e), {}, {
                pictureUrl: '["'.concat(e.mainPicture, '"]'),
                headImgUrl: e.mainPicture,
                isAdd: !0,
                tips: e.tag,
                userId: t.getStorageSync("wxopenid"),
                coordinate: e.longitude + "," + e.latitude
              });
              e.perCapitaConsumption && (a.price = e.perCapitaConsumption.replace("￥", "").replace("/人", "")), i.lineList[i.currentDayIdx].aiPlanCards.push(a)
            }))), this.closeSpotModal(), t.showToast({
              title: "添加成功",
              icon: "success"
            })) : this.closeSpotModal()
          })), (0, n.default)(s, "onSpotScrollToLower", (function() {
            this.spotHasMore && !this.spotLoading && this.loadSpotList(!1)
          })), (0, n.default)(s, "validateDragState", (function() {
            return (this.isDragging || this.isDragReady) && this.dragDayIdx >= 0 && this.dragIndex >= 0 && this.dragItem && this.lineList && Array.isArray(this.lineList) && this.lineList[this.dragDayIdx] && this.lineList[this.dragDayIdx].aiPlanCards && Array.isArray(this.lineList[this.dragDayIdx].aiPlanCards) && this.dragIndex < this.lineList[this.dragDayIdx].aiPlanCards.length
          })), (0, n.default)(s, "resetDrag", (function() {
            var t = this;
            this.clearAllTimers(), this.isDragging = !1, this.isDragReady = !1, this.dragDayIdx = -1, this.dragIndex = -1, this.dragPlaceholderIndex = -1, this.placeholderIndex = -1, this.placeholderDayIdx = -1, this.lastPlaceholderIndex = -1, this.lastPlaceholderDayIdx = -1, this.dragItem = null, this.itemRects = [], this.allItemRects = [], this.dragOffsetY = 0, this.dragY = 0, this.dragX = 0, this.touchStartY = 0, this.touchStartX = 0, this.isAtBoundary = !1, this.isScrolling = !1, this.lastScrollTime = 0, this.getContentHeight().then((function(e) {
              t.cachedMaxScrollTop = e
            })), this.$nextTick((function() {
              t.$forceUpdate()
            }))
          })), (0, n.default)(s, "getItemRects", (function(e) {
            var i = this;
            return new Promise((function(a) {
              i.$nextTick((function() {
                var s = i.lineList[e] && i.lineList[e].aiPlanCards;
                if (s && Array.isArray(s)) {
                  for (var r = [], n = 0; n < s.length; n++) r.push("#card-".concat(e, "-").concat(n));
                  var o = t.createSelectorQuery().in(i);
                  r.forEach((function(t) {
                    o.select(t).boundingClientRect()
                  })), o.exec((function(t) {
                    var e = t.filter((function(t) {
                      return t && void 0 !== t.top
                    }));
                    a(e)
                  }))
                } else a([])
              }))
            }))
          })), (0, n.default)(s, "batchQueryItemRects", (function() {
            var e = this;
            return new Promise((function(i) {
              e.$nextTick((function() {
                for (var a = [], s = [], r = 0; r < e.lineList.length; r++) {
                  var n = e.lineList[r] && e.lineList[r].aiPlanCards;
                  if (n && Array.isArray(n))
                    for (var o = 0; o < n.length; o++) s.push({
                      selector: "#card-".concat(r, "-").concat(o),
                      dayIdx: r,
                      cardIdx: o
                    })
                }
                if (0 !== s.length) {
                  var l = t.createSelectorQuery().in(e);
                  s.forEach((function(t) {
                    l.select(t.selector).boundingClientRect()
                  })), l.exec((function(t) {
                    t.forEach((function(t, e) {
                      if (t && "number" == typeof t.top) {
                        var i = s[e];
                        a.push({
                          dayIdx: i.dayIdx,
                          cardIdx: i.cardIdx,
                          rect: t
                        })
                      }
                    })), a.sort((function(t, e) {
                      return t.rect.top - e.rect.top
                    })), e.allItemRects = a, i(a)
                  }))
                } else i([])
              }))
            }))
          })), (0, n.default)(s, "updatePlaceholderIndex", (function() {
            var t = this;
            if ((this.isDragging || this.isDragReady) && !this.isScrolling) {
              var e = Date.now();
              if (!(e - this.lastUpdateTime < 50)) {
                this.lastUpdateTime = e;
                var i = this.allItemRects || [];
                i.length > 0 ? this.updatePlaceholderWithRects(i) : this.refreshAllItemRects().then((function() {
                  var e = t.allItemRects || [];
                  e.length > 0 && t.updatePlaceholderWithRects(e)
                }))
              }
            }
          })), (0, n.default)(s, "refreshAllItemRects", (function() {
            var t = this;
            return new Promise((function(e) {
              t.$nextTick((function() {
                t.batchQueryItemRects().then((function() {
                  e()
                })).catch((function(t) {
                  console.error("刷新所有卡片位置错误:", t), e()
                }))
              }))
            }))
          })), (0, n.default)(s, "updatePlaceholderWithRects", (function(t) {
            for (var e = this, i = this.dragY, a = -1, s = -1, r = 0; r < t.length; r++) {
              var n = t[r];
              if (n && n.rect && "number" == typeof n.rect.top && "number" == typeof n.rect.height) {
                var o = n.dayIdx,
                  l = n.cardIdx,
                  c = n.rect;
                if (o !== this.dragDayIdx || l !== this.dragIndex) {
                  if (i >= c.top && i <= c.top + c.height) {
                    a = o, s = i < c.top + c.height / 2 ? l : l + 1;
                    break
                  }
                  if (r < t.length - 1) {
                    var h = t[r + 1];
                    if (h && h.rect && "number" == typeof h.rect.top && h.dayIdx === o) {
                      var d = c.top + c.height,
                        u = h.rect.top;
                      if (i >= d && i <= u) {
                        a = o, s = l + 1;
                        break
                      }
                      if (u - d < 20 && i >= d - 5 && i <= u + 5) {
                        a = o, s = l + 1;
                        break
                      }
                    }
                  }
                }
              }
            }
            if (-1 === a && t.length > 0) {
              var p = t[0],
                g = t[t.length - 1];
              p && p.rect && "number" == typeof p.rect.top && i < p.rect.top && (a = p.dayIdx, s = 0), -1 === a && g && g.rect && "number" == typeof g.rect.top && "number" == typeof g.rect.height && i > g.rect.top + g.rect.height && (a = g.dayIdx, s = this.lineList[g.dayIdx] && this.lineList[g.dayIdx].aiPlanCards ? this.lineList[g.dayIdx].aiPlanCards.length : 0)
            } - 1 !== a && (this.lastPlaceholderIndex = this.placeholderIndex, this.lastPlaceholderDayIdx = this.placeholderDayIdx, this.placeholderIndex = s, this.placeholderDayIdx = a, this.placeholderIndex === this.lastPlaceholderIndex && this.placeholderDayIdx === this.lastPlaceholderDayIdx || this.getContentHeight().then((function(t) {
              e.cachedMaxScrollTop = t
            })))
          })), (0, n.default)(s, "onScroll", (function(t) {
            var e = this;
            (this.isDragging || this.isDragReady) && (this.scrollTop = t.detail.scrollTop, this.isScrolling = !0, this.lastScrollTime = Date.now(), this.scrollThrottleTimer && clearTimeout(this.scrollThrottleTimer), this.scrollThrottleTimer = setTimeout((function() {
              e.checkIfAtBottom()
            }), 150), this.scrollEndTimer && clearTimeout(this.scrollEndTimer), this.scrollEndTimer = setTimeout((function() {
              e.isScrolling = !1, e.refreshAllItemRects()
            }), 200))
          })), (0, n.default)(s, "checkIfAtBottom", (function() {
            var t = this;
            (this.isDragging || this.isDragReady) && (this.cachedMaxScrollTop > 0 ? this.isAtBottom = this.scrollTop >= this.cachedMaxScrollTop - 20 : this.getContentHeight().then((function(e) {
              t.cachedMaxScrollTop = e, t.isAtBottom = t.scrollTop >= e - 20
            })))
          })), (0, n.default)(s, "tryAutoScroll", (function(t) {
            var e = this;
            try {
              if (!this.isDragging && !this.isDragReady) return;
              if (!this.windowHeight) return;
              0 === this.cachedMaxScrollTop && this.getContentHeight().then((function(t) {
                e.cachedMaxScrollTop = t
              })), t < 100 ? (this.isAtBoundary = !0, this.autoScrollTimer || (this.autoScrollTimer = setInterval((function() {
                var t = Math.max(0, e.scrollTop - 30);
                t !== e.scrollTop ? (e.scrollTop = t, e.updatePlaceholderIndex()) : (clearInterval(e.autoScrollTimer), e.autoScrollTimer = null)
              }), 100))) : t > this.windowHeight - 100 ? (this.isAtBoundary = !0, this.autoScrollTimer || (this.autoScrollTimer = setInterval((function() {
                var t = e.cachedMaxScrollTop || 0,
                  i = Math.min(e.scrollTop + 30, t);
                i !== e.scrollTop && e.scrollTop < t ? (e.scrollTop = i, e.updatePlaceholderIndex(), e.scrollTop >= t - 10 && (e.isAtBottom = !0, clearInterval(e.autoScrollTimer), e.autoScrollTimer = null)) : (e.isAtBottom = !0, clearInterval(e.autoScrollTimer), e.autoScrollTimer = null)
              }), 100))) : (this.isAtBoundary = !1, this.isAtBottom = !1, this.autoScrollTimer && (clearInterval(this.autoScrollTimer), this.autoScrollTimer = null))
            } catch (t) {}
          })), (0, n.default)(s, "getContentHeight", (function() {
            var e = this;
            return new Promise((function(i) {
              e.cachedMaxScrollTop > 0 && !e.isDragging && !e.isDragReady ? i(e.cachedMaxScrollTop) : e.$nextTick((function() {
                t.createSelectorQuery().in(e).select(".line-list").boundingClientRect((function(t) {
                  if (t && t.height) {
                    var a = Math.max(0, t.height - e.windowHeight + 200);
                    e.cachedMaxScrollTop = a, i(a)
                  } else i(e.cachedMaxScrollTop || 999999)
                })).exec()
              }))
            }))
          })), (0, n.default)(s, "initAllItemRects", (function() {
            var t = this;
            return new Promise((function(e) {
              t.$nextTick((function() {
                t.batchQueryItemRects().then((function() {
                  e()
                })).catch((function(t) {
                  console.error("初始化所有卡片位置错误:", t), e()
                }))
              }))
            }))
          })), (0, n.default)(s, "onChooseAvatar", (function(e) {
            var i = this;
            t.uploadFile({
              url: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
              filePath: e.detail.avatarUrl,
              name: "images",
              success: function(e) {
                var a = JSON.parse(e.data);
                1 == a.code && a.data && a.data[0] && (i.tempAvatar = a.data[0].maxImageUrl), setTimeout((function() {
                  i.showHide = !0, t.hideLoading()
                }), 1e3)
              },
              fail: function(e) {
                t.hideLoading(), i.tempAvatar = "https://eshopfile.zhiyousx.com/175747715812480897.png".showHide = !0
              }
            })
          })), (0, n.default)(s, "onNicknameFocus", (function() {})), (0, n.default)(s, "confirmAvatarNickname", (function() {
            var e = this;
            if (!this.isSubmitting) {
              this.isSubmitting = !0;
              var i = {
                cardId: this.sessionId,
                openId: t.getStorageSync("wxopenid"),
                avatarUrl: this.tempAvatar || "https://eshopfile.zhiyousx.com/175747715812480897.png",
                name: this.tempNickname || "匿名用户"
              };
              this.$uniApi.dataRequestNoLoading("POST", "ai/app/share/add", i).then((function(t) {
                1 === t.code ? (e.shoFloatBtn = !0, e.closeAvatarNicknamePopup(), e.isSubmitting = !1) : e.isSubmitting = !1
              }))
            }
          })), (0, n.default)(s, "closeAvatarNicknamePopup", (function() {
            this.$refs.avatarNicknamePopup.close()
          })), (0, n.default)(s, "showAvatarNicknamePopup", (function() {
            this.$refs.avatarNicknamePopup.open()
          })), (0, n.default)(s, "scrollToNewDay", (function() {
            var e = this,
              i = this.lineList.length - 1;
            this.$nextTick((function() {
              t.createSelectorQuery().in(e).select("#day-".concat(i)).boundingClientRect((function(i) {
                i ? t.createSelectorQuery().in(e).select(".scroll-container").boundingClientRect((function(t) {
                  if (t) {
                    var a = i.top - t.top + e.scrollTop;
                    e.scrollTop = a
                  }
                })).exec() : e.scrollToBottom()
              })).exec()
            }))
          })), (0, n.default)(s, "scrollToBottom", (function() {
            var t = this;
            this.getContentHeight().then((function(e) {
              t.scrollTop = e
            }))
          })), (0, n.default)(s, "clearAllTimers", (function() {
            this.autoScrollTimer && (clearInterval(this.autoScrollTimer), this.autoScrollTimer = null), this.updatePlaceholderTimer && (clearTimeout(this.updatePlaceholderTimer), this.updatePlaceholderTimer = null), this.scrollEndTimer && (clearTimeout(this.scrollEndTimer), this.scrollEndTimer = null), this.scrollThrottleTimer && (clearTimeout(this.scrollThrottleTimer), this.scrollThrottleTimer = null), this.bottomCheckTimer && (clearTimeout(this.bottomCheckTimer), this.bottomCheckTimer = null), this.spotSearchTimer && (clearTimeout(this.spotSearchTimer), this.spotSearchTimer = null)
          })), s)
        };
        e.default = h
      }).call(this, i("df3c").default)
    },
    "8b29": function(t, e, i) {
      var a = i("c034");
      i.n(a).a
    },
    a774: function(t, e, i) {},
    c034: function(t, e, i) {}
  },
  [
    ["06a3", "common/runtime", "common/vendor"]
  ]
]);
