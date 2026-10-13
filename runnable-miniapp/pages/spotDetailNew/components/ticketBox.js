(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/spotDetailNew/components/ticketBox"], {
    5548: function(t, e, i) {
      i.d(e, "b", (function() {
        return o
      })), i.d(e, "c", (function() {
        return c
      })), i.d(e, "a", (function() {
        return n
      }));
      var n = {
          uniIcons: function() {
            return Promise.all([i.e("common/vendor"), i.e("components/uni-icons/uni-icons")]).then(i.bind(null, "365b"))
          }
        },
        o = function() {
          var t = this,
            e = (t.$createElement, t._self._c, 1 == t.showType ? t.__map(t.ticketArr.scenicTicketTypeClassList[0].itemList, (function(e, i) {
              var n = t.__get_orig(e),
                o = 3 == e.ticketType ? t._f("travelModeFilter")(e.travelMode) : null,
                c = 3 == e.ticketType ? e.fromCityList.length : null,
                l = 3 == e.ticketType && e.lineHighlightLabelList ? t.__map(e.lineHighlightLabelList, (function(i, n) {
                  return {
                    $orig: t.__get_orig(i),
                    g1: e.lineHighlightLabelList.length
                  }
                })) : null,
                r = 3 != e.ticketType ? 1 == e.targetGroupLimitFlag && e.targetGroupsRuleDescList.length > 0 : null;
              return {
                $orig: n,
                f0: o,
                g0: c,
                l0: l,
                g2: r,
                f1: 3 == e.ticketType || r || 1 == e.scenicType ? null : t._f("saleNumFormat")(e.salesNum)
              }
            })) : null),
            i = 1 != t.showType ? t.__map(t.ticketArr.scenicTicketTypeClassList, (function(e, i) {
              return {
                $orig: t.__get_orig(e),
                g3: t.ticketArr.scenicTicketTypeClassList.length,
                l3: t.__map(e.itemList, (function(e, i) {
                  var n = t.__get_orig(e),
                    o = 3 == e.ticketType ? t._f("travelModeFilter")(e.travelMode) : null,
                    c = 3 == e.ticketType ? e.fromCityList.length : null,
                    l = 3 == e.ticketType && e.lineHighlightLabelList ? t.__map(e.lineHighlightLabelList, (function(i, n) {
                      return {
                        $orig: t.__get_orig(i),
                        g5: e.lineHighlightLabelList.length
                      }
                    })) : null,
                    r = 3 != e.ticketType ? 1 == e.targetGroupLimitFlag && e.targetGroupsRuleDescList.length > 0 : null;
                  return {
                    $orig: n,
                    f2: o,
                    g4: c,
                    l2: l,
                    g6: r,
                    f3: 3 == e.ticketType || r || 1 == e.scenicType ? null : t._f("saleNumFormat")(e.salesNum)
                  }
                }))
              }
            })) : null;
          t.$mp.data = Object.assign({}, {
            $root: {
              l1: e,
              l4: i
            }
          })
        },
        c = []
    },
    "6a28": function(t, e, i) {},
    "6b04": function(t, e, i) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = {
          props: {
            showType: {
              type: [String, Number],
              default: function() {
                return 1
              }
            },
            ticketArr: {
              type: Object,
              default: function() {
                return {
                  scenicTicketTypeClassList: []
                }
              }
            },
            showClassName: {
              type: Boolean,
              default: function() {
                return !0
              }
            },
            showTicketIndex: {
              type: [String, Number],
              default: function() {
                return 0
              }
            },
            disScroll: {
              type: Boolean,
              default: !0
            },
            scrollFixH: {
              type: [String, Number],
              default: 0
            },
            scrollToTic: {
              type: String,
              default: ""
            },
            scrollToClass: {
              type: String,
              default: ""
            },
            isShowTicket: {
              type: Boolean,
              default: !1
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          filters: {
            travelModeFilter: function(t) {
              return {
                0: "全部",
                1: "跟团游",
                2: "一日游",
                3: "自由行",
                4: "研学游"
              } [t + 1]
            }
          },
          data: function() {
            return {
              returnFirstEle: ""
            }
          },
          methods: {
            toggleTicketList: function(t, e, i) {
              this.$emit("toggleTicketList", t, e, i)
            },
            fixTicketListScroll: function(t) {
              this.$emit("fixTicketListScroll", t)
            },
            buyFn: function(t) {
              this.ticketClick(t, 1), this.$emit("buyFn", t)
            },
            showBookTip: function(t) {
              this.ticketClick(t, 2), this.$emit("showBookTip", t)
            },
            hitClick: function(t) {
              this.$emit("hitClick", t)
            },
            ticketClick: function(t, e) {
              1 != t.selloutSuggestFlag || t.stockStatus && !t.sellOut || this.$emit("sellOutClick", {
                type: e,
                data: t
              })
            },
            getFirstEleDis: function() {
              var e = this;
              return new Promise((function(i) {
                e.$nextTick((function() {
                  var n = t.createSelectorQuery().in(e);
                  n.select("#firstTicket").boundingClientRect(), n.selectViewport().scrollOffset(), n.exec((function(t) {
                    i(t)
                  }))
                }))
              }))
            },
            getTicketClassH: function() {
              var e = this;
              return new Promise((function(i) {
                e.$nextTick((function() {
                  var n = t.createSelectorQuery().in(e);
                  n.selectAll(".class-item-box").boundingClientRect(), n.exec((function(t) {
                    i(t)
                  }))
                }))
              }))
            },
            formCity: function(t) {
              var e = "";
              return t.forEach((function(t) {
                e += t + "·"
              })), e.slice(0, -1)
            },
            goGoodInfo: function(t, e) {
              this.$navigateTo({
                url: "/subPack/pages/lineProductDetails/lineProductDetails?productId=" + t
              })
            },
            getDec: function(t) {
              var e, i = "",
                n = "",
                o = "",
                c = "";
              return t.cityList && t.cityList.forEach((function(t, e) {
                n += t + "/"
              })), n && (n = n.slice(0, -1) + " · "), e = ["跟团游", "一日游", "自由行", "研学游"][t.travelMode], t.journeyDay && (o = t.journeyDay + "天"), t.journeyNight && (c = t.journeyNight + "晚"), (o || c) && (i = " · " + o + c), n + e + i
            },
            jumpSubSpot: function(t) {
              var e = this;
              this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/item/getSelloutSuggest", {
                bizId: t.itemId,
                bizType: t.ticketType + 1
              }).then((function(t) {
                if (1 == t.code) {
                  var i = t.data.selloutSuggestScenicList[0].scenicId;
                  e.$navigateTo({
                    url: "/pages/spotDetailNew/spotDetailNew?spotId=" + i
                  })
                }
              }))
            },
            subscription: function(e) {
              if (!(e.ticketType > 2) && this.$util.isLogin()) {
                var i = "kYcaybflZRSVsYu-4nEatkEc-1YNbV-GEGwRde1G5YE",
                  n = this;
                t.requestSubscribeMessage({
                  tmplIds: [i],
                  success: function(o) {
                    if ("accept" == o[i]) {
                      var c = t.getStorageSync("wxopenid");
                      n.$uniApi.dataRequestNoLoading("POST", "product/app/v1/subscribe/applySubscribe", {
                        bizParam: {
                          scenicSpotId: n.ticketArr.spotId
                        },
                        memberId: n.userInfo.memberId,
                        openId: c,
                        bizId: e.itemId,
                        mobile: n.userInfo.mobilePhone,
                        bizType: e.ticketType + 2,
                        bizName: 1 == e.ticketType ? "单票售空推荐" : "聚合门票售空推荐"
                      }).then((function(t) {
                        1 === t.code ? n.$util.showToast("余票订阅成功") : n.$util.showToast(t.msg)
                      })).catch((function(t) {
                        n.$util.showToast("余票订阅失败")
                      }))
                    }
                  },
                  fail: function(t) {
                    n.$util.showToast("余票订阅失败")
                  }
                })
              }
            }
          }
        };
        e.default = i
      }).call(this, i("df3c").default)
    },
    "85e2": function(t, e, i) {
      i.r(e);
      var n = i("6b04"),
        o = i.n(n);
      for (var c in n)["default"].indexOf(c) < 0 && function(t) {
        i.d(e, t, (function() {
          return n[t]
        }))
      }(c);
      e.default = o.a
    },
    d5ad: function(t, e, i) {
      var n = i("6a28");
      i.n(n).a
    },
    e01a: function(t, e, i) {
      i.r(e);
      var n = i("5548"),
        o = i("85e2");
      for (var c in o)["default"].indexOf(c) < 0 && function(t) {
        i.d(e, t, (function() {
          return o[t]
        }))
      }(c);
      i("d5ad");
      var l = i("828b"),
        r = Object(l.a)(o.default, n.b, n.c, !1, null, "0220f98f", null, !1, n.a, void 0);
      e.default = r.exports
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["pages/spotDetailNew/components/ticketBox-create-component", {
    "pages/spotDetailNew/components/ticketBox-create-component": function(t, e, i) {
      i("df3c").createComponent(i("e01a"))
    }
  },
  [
    ["pages/spotDetailNew/components/ticketBox-create-component"]
  ]
]);
