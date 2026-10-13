(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/recommendedPop/recommend-pop"], {
    "287f": function(e, t, s) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var s = {
          props: {
            dialogInfos: {
              type: Object,
              default: function() {}
            }
          },
          watch: {
            dialogInfos: {
              handler: function(e) {
                e.showPop && (this.scenicSpotlistData = e)
              },
              deep: !0
            }
          },
          data: function() {
            return {
              scenicSpotlistData: {}
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            },
            bizTypeText: function() {
              if (console.log(this.scenicSpotlistData, "this.scenicSpotlistData"), 1 == this.scenicSpotlistData.selloutSuggestTicketType) switch (this.scenicSpotlistData.isSingleVote) {
                case 1:
                  return "景区门票";
                case 2:
                case 3:
                  return "门票";
                default:
                  return ""
              } else switch (this.scenicSpotlistData.isSingleVote) {
                case 1:
                  return "演出";
                case 2:
                case 3:
                  return "演出票";
                default:
                  return ""
              }
            },
            goSpotData: function() {
              if (this.scenicSpotlistData.selloutSuggestScenicList && this.scenicSpotlistData.selloutSuggestScenicList.length > 0) {
                var e = 1 == this.scenicSpotlistData.selloutSuggestScenicList[0].selloutSuggestTicketType ? "游玩" : "观演";
                return this.scenicSpotlistData.selloutSuggestScenicList[0].scenicName + e
              }
              return ""
            }
          },
          methods: {
            setDistance: function(e) {
              return e < 1 ? 1e3 * e + "m" : e + "km"
            },
            receive: function(e) {
              var t = this;
              if (1 == e) {
                var s = this.scenicSpotlistData.selloutSuggestCouponVO.couponList.map((function(e) {
                  return e.couponId
                }));
                this.$eventAnalyse.analyse({
                  eventTag: "shortSelling_coupon_click",
                  eventName: "领取售空推荐优惠卷",
                  eventParams: {
                    ids: s
                  }
                }), this.$uniApi.dataRequestYesLoading("POST", "product/app/v1/CouponReceive/receiveDriverCouponBatch", s).then((function(e) {
                  1 === e.code && (t.$util.showToast("领取成功"), t.$emit("refreshCoupon"))
                }))
              } else 3 == e && (this.$eventAnalyse.analyse({
                eventTag: "shortSelling_goUseIt_click",
                eventName: "去推荐景区使用售空推荐优惠卷",
                eventParams: {
                  spotId: this.scenicSpotlistData.selloutSuggestScenicList[0].scenicId
                }
              }), this.$refs.recommendPop.close(), this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + this.scenicSpotlistData.selloutSuggestScenicList[0].scenicId
              }))
            },
            btnText: function(e) {
              switch (e) {
                case 1:
                  return "立即领取";
                case 2:
                  return "已抢光";
                case 3:
                  return "立即使用"
              }
            },
            goSpot: function(e) {
              this.$eventAnalyse.analyse({
                eventTag: "shortSelling_scenicSpot_click",
                eventName: "跳转推荐的景区",
                eventParams: {
                  spotId: e
                }
              }), this.$refs.recommendPop.close(), this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + e
              })
            },
            open: function() {
              this.$eventAnalyse.analyse({
                eventTag: "shortSelling_dialogOpen_click",
                eventName: "弹出售空推荐弹窗"
              }), this.$refs.recommendPop.open()
            },
            notNeeded: function() {
              this.$eventAnalyse.analyse({
                eventTag: "shortSelling_notNeeded_click",
                eventName: "点击售空弹窗的暂不需要"
              }), this.$refs.recommendPop.close(), this.dialogInfos.backPage && this.$util.goBack()
            },
            viewDetails: function() {
              this.$eventAnalyse.analyse({
                eventTag: "shortSelling_goView_click",
                eventName: "点击售空弹窗的查看详情",
                eventParams: {
                  spotId: this.scenicSpotlistData.selloutSuggestScenicList[0].scenicId
                }
              }), this.$refs.recommendPop.close(), this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + this.scenicSpotlistData.selloutSuggestScenicList[0].scenicId
              })
            },
            getbizName: function(e) {
              switch (e) {
                case 3:
                  return "单票有库存";
                case 4:
                  return "聚合门票有库存";
                case 5:
                  return "景区开售";
                case 6:
                  return "景区售空后有票"
              }
            },
            subscription: function() {
              var t = e.getStorageSync("wxopenid");
              if (this.$eventAnalyse.analyse({
                  eventTag: "shortSelling_subscribeTo_click",
                  eventName: "点击售空弹窗的余票订阅",
                  eventParams: {
                    bizParam: {
                      scenicSpotId: this.scenicSpotlistData.scenicSpotId || ""
                    },
                    memberId: this.userInfo.memberId,
                    openId: t,
                    bizId: this.scenicSpotlistData.itemId,
                    mobile: this.userInfo.mobilePhone,
                    bizType: this.scenicSpotlistData.bizType,
                    bizName: this.getbizName(this.scenicSpotlistData.bizType)
                  }
                }), this.$util.isLogin()) {
                var s = "kYcaybflZRSVsYu-4nEatkEc-1YNbV-GEGwRde1G5YE",
                  n = this;
                e.requestSubscribeMessage({
                  tmplIds: [s],
                  success: function(e) {
                    "accept" == e[s] && n.$uniApi.dataRequestNoLoading("POST", "product/app/v1/subscribe/applySubscribe", {
                      bizParam: {
                        scenicSpotId: n.scenicSpotlistData.scenicSpotId || ""
                      },
                      memberId: n.userInfo.memberId,
                      openId: t,
                      bizId: n.scenicSpotlistData.itemId,
                      mobile: n.userInfo.mobilePhone,
                      bizType: n.scenicSpotlistData.bizType,
                      bizName: n.getbizName(n.scenicSpotlistData.bizType)
                    }).then((function(e) {
                      1 === e.code ? (console.log(e.data), n.$util.showToast("余票订阅成功")) : n.$util.showToast(e.msg)
                    })).catch((function(e) {
                      n.$util.showToast("余票订阅失败")
                    }))
                  },
                  fail: function(e) {
                    n.$util.showToast("余票订阅失败")
                  }
                })
              }
            }
          }
        };
        t.default = s
      }).call(this, s("df3c").default)
    },
    "368c": function(e, t, s) {
      s.r(t);
      var n = s("287f"),
        i = s.n(n);
      for (var o in n)["default"].indexOf(o) < 0 && function(e) {
        s.d(t, e, (function() {
          return n[e]
        }))
      }(o);
      t.default = i.a
    },
    "3d4a": function(e, t, s) {
      s.r(t);
      var n = s("7134"),
        i = s("368c");
      for (var o in i)["default"].indexOf(o) < 0 && function(e) {
        s.d(t, e, (function() {
          return i[e]
        }))
      }(o);
      s("4288");
      var c = s("828b"),
        a = Object(c.a)(i.default, n.b, n.c, !1, null, "d7fdaef2", null, !1, n.a, void 0);
      t.default = a.exports
    },
    4288: function(e, t, s) {
      var n = s("913a");
      s.n(n).a
    },
    7134: function(e, t, s) {
      s.d(t, "b", (function() {
        return i
      })), s.d(t, "c", (function() {
        return o
      })), s.d(t, "a", (function() {
        return n
      }));
      var n = {
          uniPopup: function() {
            return Promise.all([s.e("common/vendor"), s.e("components/uni-popup/uni-popup")]).then(s.bind(null, "db3a"))
          }
        },
        i = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.scenicSpotlistData && e.scenicSpotlistData.itemId && e.scenicSpotlistData.selloutSuggestCouponVO && e.scenicSpotlistData.selloutSuggestCouponVO && e.scenicSpotlistData.selloutSuggestCouponVO.couponList ? e.__map(e.scenicSpotlistData.selloutSuggestCouponVO.couponList, (function(t, s) {
              return {
                $orig: e.__get_orig(t),
                g0: e.scenicSpotlistData.selloutSuggestCouponVO.couponList.length,
                g1: e.scenicSpotlistData.selloutSuggestCouponVO.couponList.length > 1 && s != e.scenicSpotlistData.selloutSuggestCouponVO.couponList.length - 1,
                m0: e.btnText(t.receiveState)
              }
            })) : null),
            s = e.scenicSpotlistData && e.scenicSpotlistData.itemId && e.scenicSpotlistData.selloutSuggestScenicList ? e.__map(e.scenicSpotlistData.selloutSuggestScenicList, (function(t, s) {
              return {
                $orig: e.__get_orig(t),
                g2: e.scenicSpotlistData.selloutSuggestScenicList.length,
                m1: t.distance <= 3 ? e.setDistance(t.distance) : null
              }
            })) : null;
          e.$mp.data = Object.assign({}, {
            $root: {
              l0: t,
              l1: s
            }
          })
        },
        o = []
    },
    "913a": function(e, t, s) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/recommendedPop/recommend-pop-create-component", {
    "components/recommendedPop/recommend-pop-create-component": function(e, t, s) {
      s("df3c").createComponent(s("3d4a"))
    }
  },
  [
    ["components/recommendedPop/recommend-pop-create-component"]
  ]
]);
