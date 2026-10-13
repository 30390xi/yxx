require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/smartEscort/index"], {
    "01d3": function(t, e, n) {
      n.d(e, "b", (function() {
        return a
      })), n.d(e, "c", (function() {
        return o
      })), n.d(e, "a", (function() {
        return i
      }));
      var i = {
          uLoadmore: function() {
            return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "2db1"))
          },
          uniPopup: function() {
            return Promise.all([n.e("common/vendor"), n.e("components/uni-popup/uni-popup")]).then(n.bind(null, "db3a"))
          }
        },
        a = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.$t("smartEscort.header.greeting")),
            n = t.$t("smartEscort.header.welcome"),
            i = t.$t("smartEscort.header.featureIntroduction"),
            a = t.$t("smartEscort.banner.left.title"),
            o = t.$t("smartEscort.banner.left.button"),
            s = t.$t("smartEscort.banner.right.title"),
            u = t.$t("smartEscort.banner.right.button"),
            r = t.__map(t.tab, (function(e, n) {
              return {
                $orig: t.__get_orig(e),
                m7: "1" === e.icon ? t.$t("smartEscort.tab.province") : null,
                m8: "1" !== e.icon && "2" === e.icon ? t.$t("smartEscort.tab.district") : null,
                m9: "1" !== e.icon && "2" !== e.icon ? t.$t("smartEscort.tab.scenic") : null
              }
            })),
            c = "nomore" === t.loadMore && t.newsList.length <= 0,
            l = c ? t.$t("smartEscort.empty") : null,
            d = {
              loadmore: t.$t("smartEscort.loadMore.loadmore"),
              loading: t.$t("smartEscort.loadMore.loading"),
              nomore: t.$t("smartEscort.loadMore.nomore")
            },
            h = ["loading", "nomore"].includes(t.loadMore) && t.newsList.length > 0 || "loading" == t.loadMore && 0 == t.newsList.length,
            g = t.$t("smartEscort.popup.desc", {
              location: t.popupDesc.cityName
            }),
            f = t.$t("smartEscort.popup.confirm");
          t._isMounted || (t.e0 = function(e) {
            return t.touchStart(e, "lang")
          }, t.e1 = function(e) {
            return t.touchMove(e, "lang")
          }, t.e2 = function(e) {
            return t.touchStart(e, "fav")
          }, t.e3 = function(e) {
            return t.touchMove(e, "fav")
          }), t.$mp.data = Object.assign({}, {
            $root: {
              m0: e,
              m1: n,
              m2: i,
              m3: a,
              m4: o,
              m5: s,
              m6: u,
              l0: r,
              g0: c,
              m10: l,
              a0: d,
              g1: h,
              m11: g,
              m12: f
            }
          })
        },
        o = []
    },
    "0245": function(t, e, n) {
      (function(t, e) {
        var i = n("47a9");
        n("5366"), i(n("3240"));
        var a = i(n("9991"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "70fb": function(t, e, n) {},
    7787: function(t, e, n) {
      n.r(e);
      var i = n("b090"),
        a = n.n(i);
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(o);
      e.default = a.a
    },
    9991: function(t, e, n) {
      n.r(e);
      var i = n("01d3"),
        a = n("7787");
      for (var o in a)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(o);
      n("e2ac");
      var s = n("828b"),
        u = Object(s.a)(a.default, i.b, i.c, !1, null, "1d24116d", null, !1, i.a, void 0);
      e.default = u.exports
    },
    b090: function(t, e, n) {
      (function(t, i) {
        var a = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = a(n("7eb4")),
          s = a(n("ee10")),
          u = {
            name: "SmartEscort",
            mixins: [a(n("30eb")).default],
            components: {
              EmptyState: function() {
                n.e("components/empty/empty").then(function() {
                  return resolve(n("a427"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                isPlayIng: !0,
                currentTime: "0:00",
                duration: "0:00",
                progress: 0,
                audioContext: null,
                tab: [{
                  name: "景区",
                  icon: "3"
                }, {
                  name: "省市",
                  icon: "1"
                }, {
                  name: "区县",
                  icon: "2"
                }],
                pageNum: 1,
                pageSize: 10,
                total: 0,
                newsList: [],
                activeTab: "3",
                loadMore: "loading",
                langBtnTop: 400,
                langBtnRight: 10,
                favBtnBottom: 200,
                favBtnRight: 10,
                startY: 0,
                dragTarget: "",
                screenHeight: 0,
                minGap: 40,
                langBtnHeight: 104,
                favBtnHeight: 126,
                fixednavH: "0",
                langBtnIcon: {
                  zh: "https://eshopfile.zhiyousx.com/177027919900665541.png",
                  en: "https://eshopfile.zhiyousx.com/177026054054840973.png"
                },
                arrAudio: {
                  zh: "https://eshopfile.zhiyousx.com/176958870856663457.mp3",
                  en: "https://eshopfile.zhiyousx.com/176959463652140563.mp3"
                },
                langCollectionIcon: {
                  zh: "https://eshopfile.zhiyousx.com/177026064879001244.png",
                  en: "https://eshopfile.zhiyousx.com/177026056913882508.png"
                },
                language: "zh",
                showPopup: !1,
                popupDesc: {},
                pData: {
                  longitude: "",
                  latitude: ""
                },
                distanceNum: ""
              }
            },
            onReady: function() {
              var e = t.getSystemInfoSync();
              this.screenHeight = e.windowHeight / e.screenWidth * 750
            },
            onReachBottom: function() {
              "loadmore" === this.loadMore && this.pageLoad()
            },
            mounted: function() {},
            onLoad: function() {
              this.language = t.getStorageSync("language") || "zh", this.switchLanguage(this.language), t.setNavigationBarTitle({
                title: this.$t("smartEscort.header.title")
              }), this.initAudio(), this.getList(), this.getSysConfigure(), this.$nextTick((function() {
                var e = t.createSelectorQuery();
                e.select("#tabContainer").boundingClientRect(), e.exec((function(t) {}))
              }))
            },
            onShareAppMessage: function() {
              return {
                title: this.$t("smartEscort.header.title"),
                path: "/union/pages/smartEscort/index",
                imageUrl: "https://eshopfile.zhiyousx.com/176975391898519360.png"
              }
            },
            onUnload: function() {
              this.destroyAudio()
            },
            onUnmounted: function() {
              this.destroyAudio()
            },
            onHide: function() {
              this.isPlayIng = !1, this.audioContext && this.audioContext.pause()
            },
            onShow: function() {},
            methods: {
              getSysConfigure: function() {
                var t = this;
                return this.$uniApi.dataRequestNoLoading("post", "base/app/v1/sysParam/getSysParamForApp", {
                  keyList: ["POSITIONING_DISTANCE"]
                }).then((function(e) {
                  1 == e.code && (console.log(e.data.POSITIONING_DISTANCE.paramValue || "", "this.systemInfo"), t.distanceNum = e.data.POSITIONING_DISTANCE.paramValue || "")
                }))
              },
              activityItem: function(e) {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_item_view_click",
                  eventName: "点击景区跳转对话页",
                  eventParams: {
                    cid: e.chineseCityId || e.cityId,
                    id: e.cityId,
                    name: e.cityName,
                    language: this.language
                  }
                });
                var n = "/union/pages/aiBy/index?cid=" + (e.chineseCityId || e.cityId) + "&id=" + e.cityId + "&name=" + e.cityName;
                t.navigateTo({
                  url: n
                })
              },
              toTeamList: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_team_list_click",
                  eventName: "团队列表按钮点击",
                  eventParams: {
                    pagePath: "/union/pages/groupList/index",
                    language: this.language
                  }
                }), this.$util.showToast(this.$t("allData.staytuned"))
              },
              toMoreActivity: function() {
                var t = this;
                return (0, s.default)(o.default.mark((function e() {
                  return o.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t.$eventAnalyse.analyse({
                          eventTag: "ai_more_activity_click",
                          eventName: "附近景区"
                        }), e.next = 3, t.getLocation();
                      case 3:
                        e.sent ? t.getLocationFn(t.pData) : t.goChatList();
                      case 5:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                })))()
              },
              getLocation: function() {
                var e = this;
                return (0, s.default)(o.default.mark((function n() {
                  var a;
                  return o.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return a = e, n.abrupt("return", new Promise((function(e) {
                          i.getSetting({
                            success: function(n) {
                              n.authSetting["scope.userLocation"] ? (t.showLoading({
                                title: a.$t("smartEscort.loading.getLocation"),
                                mask: !0
                              }), t.getLocation({
                                type: "gcj02",
                                success: function(n) {
                                  a.pData.longitude = n.longitude, a.pData.latitude = n.latitude, t.hideLoading(), e(!0)
                                },
                                fail: function() {
                                  t.hideLoading(), e(!0)
                                }
                              })) : i.authorize({
                                scope: "scope.userLocation",
                                success: function() {
                                  t.showLoading({
                                    title: a.$t("smartEscort.loading.getLocation"),
                                    mask: !0
                                  }), t.getLocation({
                                    type: "gcj02",
                                    success: function(n) {
                                      a.pData.longitude = n.longitude, a.pData.latitude = n.latitude, t.hideLoading(), e(!0)
                                    },
                                    fail: function() {
                                      t.hideLoading(), e(!0)
                                    }
                                  })
                                },
                                fail: function() {
                                  i.showModal({
                                    title: a.$t("smartEscort.locationModal.title"),
                                    content: a.$t("smartEscort.locationModal.content"),
                                    success: function(n) {
                                      n.confirm ? i.openSetting({
                                        success: function(n) {
                                          n.authSetting["scope.userLocation"] ? (t.showLoading({
                                            title: a.$t("smartEscort.loading.getLocation"),
                                            mask: !0
                                          }), t.getLocation({
                                            type: "gcj02",
                                            success: function(n) {
                                              a.pData.longitude = n.longitude, a.pData.latitude = n.latitude, t.hideLoading(), e(!0)
                                            },
                                            fail: function() {
                                              t.hideLoading(), e(!0)
                                            }
                                          })) : e(!1)
                                        },
                                        fail: function() {
                                          e(!1)
                                        }
                                      }) : e(!1)
                                    },
                                    fail: function() {
                                      e(!0)
                                    }
                                  })
                                }
                              })
                            },
                            fail: function() {
                              e(!1)
                            }
                          })
                        })));
                      case 2:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              getLocationFn: function(t) {
                var e = this,
                  n = this;
                this.$uniApi.getRequestYesLoading("GET", "ai/app/st/city/nearbyLocation?location=".concat(t.longitude, ",").concat(t.latitude, "&language=").concat(this.language, "&radius=").concat(this.distanceNum), this.$t("featureIntroduction.loading.loading")).then((function(t) {
                  1 === t.code ? t.data ? (n.popupDesc = t.data, n.$refs.popupRef.open()) : (n.goChatList(), console.log("未授权定位，走默认逻辑")) : e.$util.showToast(t.msg || e.$t("featureIntroduction.error.loadFailed"))
                })).catch((function() {
                  e.$util.showToast(e.$t("featureIntroduction.error.loadFailed"))
                }))
              },
              goChatList: function(e) {
                var n = {};
                e && e.cityId && (n = {
                  cid: e.chineseCityId,
                  id: e.cityId,
                  name: e.cityName,
                  language: e.language
                }), this.$eventAnalyse.analyse({
                  eventTag: "ai_go_chat_click",
                  eventName: "跳转聊天页面点击",
                  eventParams: n
                }), this.resetAudio();
                var i = e && e.cityId ? "/union/pages/aiBy/index?cid=" + e.chineseCityId + "&id=" + e.cityId + "&name=" + e.cityName : "/union/pages/aiBy/index";
                t.navigateTo({
                  url: i
                })
              },
              submitPopup: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_submit_popup_click",
                  eventName: "确定进入弹窗"
                }), this.$refs.popupRef.close(), this.goChatList(this.popupDesc)
              },
              collectionFun: function() {
                this.$util.isLogin() && (this.$eventAnalyse.analyse({
                  eventTag: "ai_collection_click",
                  eventName: "收藏按钮点击",
                  eventParams: {
                    pagePath: "/union/pages/aiBy/collectionList",
                    language: this.language
                  }
                }), t.navigateTo({
                  url: "/union/pages/aiBy/collectionList"
                }))
              },
              toggleLanguage: function() {
                var e = this;
                this.$eventAnalyse.analyse({
                  eventTag: "ai_language_toggle_click",
                  eventName: "语言切换按钮点击",
                  eventParams: {
                    language: this.language
                  }
                }), "zh" === this.language ? (this.language = "en", this.switchLanguage("en")) : (this.language = "zh", this.switchLanguage("zh")), t.setNavigationBarTitle({
                  title: this.$t("smartEscort.header.title")
                }), this.pageNum = 1, this.getList(), this.audioContext.stop(), this.isPlayIng = !1, this.progress = 0, this.currentTime = "0:00", this.duration = "0:00", this.audioContext.currentTime = 0, this.audioContext.src = this.arrAudio[this.language], this.audioContext.play(), this.isPlayIng = !0;
                var n = setInterval((function() {
                  if (e.isPlayIng && e.audioContext) {
                    var t = e.audioContext.currentTime,
                      i = e.audioContext.duration || 0;
                    i > 0 && (e.duration = e.formatTime(Math.floor(i))), e.progress = 0 === i ? 0 : t / i * 100, e.currentTime = e.formatTime(t), console.log(e.duration, "this.durationthis.duration")
                  }
                  clearTimeout(n)
                }), 500)
              },
              toFeatureIntroduction: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_feature_intro_click",
                  eventName: "功能介绍按钮点击",
                  eventParams: {
                    pagePath: "/union/pages/featureIntroduction/index"
                  }
                }), this.resetAudio(), t.navigateTo({
                  url: "/union/pages/featureIntroduction/index"
                })
              },
              initAudio: function() {
                var e = this;
                this.audioContext && this.destroyAudio(), this.audioContext = t.createInnerAudioContext(), this.audioContext.src = this.arrAudio[this.language], this.audioContext.play(), this.audioContext.loop = !1, this.audioContext.onCanplay((function() {
                  e.initAudioDuration()
                })), this.audioContext.onTimeUpdate((function() {
                  console.log(111111111111), e.updatePlayProgress()
                })), this.audioContext.onPlay((function() {
                  e.isPlayIng = !0
                })), this.audioContext.onPause((function() {
                  e.isPlayIng = !1
                })), this.audioContext.onEnded((function() {
                  e.audioPlayEnd()
                })), this.audioContext.onError((function(t) {
                  e.isPlayIng = !1
                }))
              },
              initAudioDuration: function() {
                if (this.audioContext.duration) {
                  var t = Math.floor(this.audioContext.duration);
                  this.duration = this.formatTime(t)
                }
              },
              updatePlayProgress: function() {
                console.log(1111111111111);
                var t = this.audioContext.currentTime,
                  e = this.audioContext.duration || 0;
                e > 0 && "0:00" === this.duration && (this.duration = this.formatTime(Math.floor(e))), this.progress = 0 === e ? 0 : t / e * 100, this.currentTime = this.formatTime(t)
              },
              togglePlay: function() {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_play_pause_click",
                  eventName: "顶部音频播放暂停按钮点击"
                }), this.isPlayIng ? this.audioContext.pause() : this.audioContext.play()
              },
              manualPlay: function() {
                this.audioContext || this.initAudio(), this.audioContext.play(), this.isPlayIng = !0
              },
              resetAudio: function() {
                if (this.audioContext) try {
                  this.audioContext.pause(), this.audioContext.currentTime = 0, this.progress = 0, this.currentTime = "0:00"
                } catch (t) {
                  console.error("重置音频失败:", t)
                }
              },
              audioPlayEnd: function() {
                this.isPlayIng = !1, this.progress = 0, this.currentTime = "0:00", this.resetAudio()
              },
              formatTime: function(t) {
                if (!t || t < 0) return "0:00";
                var e = Math.floor(t / 60),
                  n = Math.floor(t % 60);
                return "".concat(e, ":").concat(n.toString().padStart(2, "0"))
              },
              destroyAudio: function() {
                this.audioContext && (this.resetAudio(), this.audioContext.offCanplay(), this.audioContext.offTimeUpdate(), this.audioContext.offPlay(), this.audioContext.offPause(), this.audioContext.offEnded(), this.audioContext.offError(), this.audioContext = null)
              },
              changeTab: function(t) {
                this.$eventAnalyse.analyse({
                  eventTag: "ai_tab_change_click",
                  eventName: "省市区景区标签页切换点击"
                }), this.loadMore = "loading", this.activeTab = t.icon, this.pageNum = 1, this.getList()
              },
              getList: function() {
                var e = this;
                this.$uniApi.dataRequestNoLoading("get", "ai/app/st/city/list", {
                  pageNum: this.pageNum,
                  pageSize: this.pageSize,
                  type: this.activeTab,
                  language: this.language
                }).then((function(n) {
                  if (t.stopPullDownRefresh(), 1 === n.code) {
                    var i = n.data.records;
                    n.data.total > 0 ? (1 === n.data.current ? e.newsList = i : e.newsList = e.newsList.concat(i), n.data.current < n.data.pages ? (e.pageNum = e.pageNum + 1, e.loadMore = "loadmore") : e.loadMore = "nomore") : (e.newsList = [], e.loadMore = "nomore")
                  }
                  console.log(e.newsList, "this.newsListthis.newsList")
                })).catch((function(e) {
                  t.stopPullDownRefresh()
                }))
              },
              pageLoad: function() {
                this.loadMore = "loading", this.getList()
              },
              touchStart: function(e, n) {
                this.dragTarget = n, this.startY = e.touches[0].clientY / t.getSystemInfoSync().screenWidth * 750
              },
              touchMove: function(e, n) {
                if (this.dragTarget === n) {
                  var i = e.touches[0].clientY / t.getSystemInfoSync().screenWidth * 750,
                    a = i - this.startY;
                  if (this.startY = i, "lang" === n) {
                    var o = this.langBtnTop + a,
                      s = this.screenHeight - this.favBtnBottom - this.favBtnHeight - this.langBtnRight - this.minGap - this.langBtnHeight;
                    o = Math.max(60, Math.min(s, o)), this.langBtnTop = o
                  } else if ("fav" === n) {
                    var u = this.favBtnBottom - a,
                      r = this.langBtnTop + this.langBtnHeight + this.langBtnRight,
                      c = this.screenHeight - r - this.minGap - this.favBtnHeight;
                    u = Math.max(20, Math.min(c, u)), this.favBtnBottom = u
                  }
                }
              },
              touchEnd: function() {
                this.dragTarget = ""
              }
            }
          };
        e.default = u
      }).call(this, n("df3c").default, n("3223").default)
    },
    e2ac: function(t, e, n) {
      var i = n("70fb");
      n.n(i).a
    }
  },
  [
    ["0245", "common/runtime", "common/vendor", "union/common/vendor"]
  ]
]);
