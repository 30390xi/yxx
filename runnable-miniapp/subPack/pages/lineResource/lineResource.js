require("../../../@babel/runtime/helpers/Objectentries"), require("../../../@babel/runtime/helpers/Objectvalues"), require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/lineResource/lineResource"], {
    "3d1f": function(t, e, i) {
      i.d(e, "b", (function() {
        return a
      })), i.d(e, "c", (function() {
        return n
      })), i.d(e, "a", (function() {
        return s
      }));
      var s = {
          uniIcons: function() {
            return Promise.all([i.e("common/vendor"), i.e("components/uni-icons/uni-icons")]).then(i.bind(null, "365b"))
          },
          uIcon: function() {
            return i.e("uview-ui/components/u-icon/u-icon").then(i.bind(null, "61be"))
          },
          uPopup: function() {
            return i.e("uview-ui/components/u-popup/u-popup").then(i.bind(null, "39fb"))
          },
          uParse: function() {
            return Promise.all([i.e("common/vendor"), i.e("uview-ui/components/u-parse/u-parse")]).then(i.bind(null, "7217"))
          },
          yuCalendar: function() {
            return i.e("components/yu-calendar/yu-calendar").then(i.bind(null, "60d7"))
          }
        },
        a = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.spotData.length),
            i = t.spotData[t.activeIndex] ? t.__map(t.spotData[t.activeIndex].classList, (function(e, i) {
              return {
                $orig: t.__get_orig(e),
                l0: t.__map(e.itemlist, (function(e, i) {
                  return {
                    $orig: t.__get_orig(e),
                    f0: (null != e.skuCashBackAmount ? e.skuCashBackAmount : e.cashBackAmount) ? t._f("cashBackAmountFilter")(e) : null,
                    f1: 1 != e.scenicType ? t._f("saleNumFormat")(e.salesNum) : null,
                    m0: t.getMaxNum(e)
                  }
                }))
              }
            })) : null,
            s = t.__map(t.lineOrderInfo.spotList, (function(e, i) {
              return {
                $orig: t.__get_orig(e),
                f2: t._f("tiameFilter")(e.selectDateStr)
              }
            })),
            a = t._f("tiameFilter")(t.selectDateStr),
            n = t.__map(t.attrs, (function(e, i) {
              return {
                $orig: t.__get_orig(e),
                l3: t.attrs[0] ? t.__map(e.attrList, (function(i, s) {
                  return {
                    $orig: t.__get_orig(i),
                    m1: t.skuAct(e.attributeKey, i.name),
                    m2: t.isSkuValid(e.attributeKey, i.name)
                  }
                })) : null
              }
            })),
            c = t._f("tiameFilter")(t.selectDateStr),
            o = t.ydxz && 1 != t.ydxz.scenicType ? t._f("saleNumFormat")(t.ydxz.salesNum) : null,
            u = t.ydxz && t.ydxz.bookingInfoTag && t.ydxz.bookingInfoTag && t.ydxz.bookingInfoTag.refundStr && "条件退" != t.ydxz.bookingInfoTag.refundTag ? t.brText(t.ydxz.bookingInfoTag.refundStr) : null,
            r = t.ydxz && t.ydxz.bookingInfoTag && "条件退" == t.ydxz.bookingInfoTag.refundTag && t.ydxz.bookingInfoTag && t.ydxz.bookingInfoTag.refundStr1 ? t.brText(t.ydxz.bookingInfoTag.refundStr1) : null,
            l = t.dateData.length,
            d = t.errList.join(" ”、“ ");
          t._isMounted || (t.e0 = function(e) {
            t.showAllTime = !0
          }, t.e1 = function(e) {
            t.showTips = !0
          }, t.e2 = function(e) {
            t.showDetail = !t.showDetail
          }, t.e3 = function(e) {
            t.showDetail = !t.showDetail
          }, t.e4 = function(e) {
            t.showDetail = !t.showDetail
          }, t.e5 = function(e) {
            t.showGroupErr = !1
          }), t.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              l1: i,
              l2: s,
              f3: a,
              l4: n,
              f4: c,
              f5: o,
              l5: u,
              l6: r,
              g1: l,
              g2: d
            }
          })
        },
        n = []
    },
    "5d5a": function(t, e, i) {
      (function(t, e) {
        var s = i("47a9");
        i("5366"), s(i("3240"));
        var a = s(i("707d"));
        t.__webpack_require_UNI_MP_PLUGIN__ = i, e(a.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    },
    "707d": function(t, e, i) {
      i.r(e);
      var s = i("3d1f"),
        a = i("c844");
      for (var n in a)["default"].indexOf(n) < 0 && function(t) {
        i.d(e, t, (function() {
          return a[t]
        }))
      }(n);
      i("72e5");
      var c = i("828b"),
        o = Object(c.a)(a.default, s.b, s.c, !1, null, "344c7ce5", null, !1, s.a, void 0);
      e.default = o.exports
    },
    "72e5": function(t, e, i) {
      var s = i("bdc4");
      i.n(s).a
    },
    "7da9": function(t, e, i) {
      (function(t) {
        var s = i("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = s(i("7ca3")),
          n = s(i("adb2"));

        function c(t, e) {
          var i = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            e && (s = s.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.push.apply(i, s)
          }
          return i
        }

        function o(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(i), !0).forEach((function(e) {
              (0, a.default)(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
          }
          return t
        }
        var u = i("0408"),
          r = {
            components: {
              yuCalendar: function() {
                i.e("subPack/components/yu-calendar/yu-calendar").then(function() {
                  return resolve(i("d98f"))
                }.bind(null, i)).catch(i.oe)
              },
              orderNav: function() {
                i.e("subPack/components/orderNav").then(function() {
                  return resolve(i("c26a8"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            data: function() {
              var t;
              return t = {
                selectedSpot: "0",
                spotData: [],
                dateData: [],
                showDetail: !1,
                showTicketSku: !1,
                selectDateStr: "",
                attrs: [],
                selectedSku: {},
                skuList: [],
                skuData: "",
                timeData: [],
                selectDate: "",
                filterSku: [],
                filterTime: "",
                showAllTime: !1,
                scrollToDate: "",
                skuSelectTicId: "",
                skuTicData: "",
                aggId: "",
                submitState: !1,
                selectedHour: "",
                tipsInfo: "",
                skuItemTime: "",
                lineId: "1691295922218094594",
                destinationId: "",
                activeIndex: 0,
                parentIndex: 0,
                itemIndex: 0,
                isShowBookTip: !1,
                ydxz: {},
                bookTipHeight: 750,
                skuHeight: 750,
                unit: 0,
                statusBarHeight: 0,
                headerH: 0,
                windowHeight: 0,
                winWidth: 0,
                timeStr: 0,
                allAmount: 0,
                reduction: 0,
                showTimeHour: !1,
                itemData: "",
                selectedHourTime: "",
                itemSkuArr: [],
                lineOrderInfo: { spotList: [], orderAmount: 0, reduction: 0, allAmount: 0 },
                resourceNote: "",
                imageH: 242,
                scrollTop: 0
              }, (0, a.default)(t, "showAllTime", !1), (0, a.default)(t, "oldData", ""), (0, a.default)(t, "showGroupErr", !1), (0, a.default)(t, "errList", []), (0, a.default)(t, "stagData", ""), (0, a.default)(t, "addType", !1), (0, a.default)(t, "allNum", 0), (0, a.default)(t, "hourHeight", 0), (0, a.default)(t, "showTips", !1), (0, a.default)(t, "noticeHeight", 500), (0, a.default)(t, "searchHeight", 0), (0, a.default)(t, "safeAreaBottom", 0), (0, a.default)(t, "prefeFlag", !1), t
            },
            filters: {
              tiameFilter: function(t) {
                if (!t) return "";
                var e = t.replaceAll("-", "/"),
                  i = new Date(e),
                  s = i.getFullYear(),
                  a = i.getMonth() + 1,
                  n = i.getDate();
                return "".concat(s, "年").concat(a, "月").concat(n, "日")
              },
              cashBackAmountFilter: function(t) {
                var e = t.price;
                return t.ticketNum > 0 && t.selectedtime && t.selectedtime.sellPrice && (e = t.selectedtime.sellPrice), null != t.skuCashBackAmount ? t.skuCashBackAmount <= e && (e = t.skuCashBackAmount) : t.cashBackAmount <= e && (e = t.cashBackAmount), e
              }
            },
            onLoad: function(e) {
              this.safeAreaBottom = t.getStorageSync("safeAreaBottom") ? t.getStorageSync("safeAreaBottom") : 0, e.lineId && (this.lineId = e.lineId);
              var i = this,
                s = t.getMenuButtonBoundingClientRect();
              this.searchHeight = s.top + 38, t.getSystemInfo({
                success: function(e) {
                  i.statusBarHeight = t.getSystemInfoSync().statusBarHeight, i.windowHeight = e.windowHeight, i.headerH = i.statusBarHeight + 5 + Math.ceil(e.windowWidth / 750 * 104), i.winWidth = e.windowWidth, i.unit = 750 / e.windowWidth, i.skuHeight = i.windowHeight / i.winWidth * 750 * .7 - 469, i.noticeHeight = i.windowHeight / i.winWidth * 750 * .7 - 234, i.hourHeight = i.windowHeight / i.winWidth * 750 * .7 - 440
                }
              }), this.getlineScenicInfo()
            },
            watch: {
              showTimeHour: function(t) {
                t || (this.selectedHourTime = "")
              },
              showTicketSku: function(t) {
                t || (this.selectedSku = {}, this.itemSkuArr = [])
              },
              soptData: {
                deep: !0,
                immediate: !0,
                handler: function(t, e) {}
              }
            },
            onPageScroll: function(t) {
              this.imageH = 242 - t.scrollTop * this.unit
            },
            onShow: function() {},
            methods: {
              itemClickFn: function(t) {
                this.showAllTime = !1, this.selectedDate(t, !0)
              },
              selectedDate: function(t, e) {
                this.oldData = this.$util.deepCopy(this.lineOrderInfo), this.getScenicTicket(t.date, e)
              },
              selectSpot: function(t, e) {
                var i = this;
                if (this.destinationId = t.destinationId, this.activeIndex = e, this.selectDateStr = this.spotData[this.activeIndex].selectDateStr || "", this.selectDateStr) return this.dateData = this.spotData[this.activeIndex].dateData, void setTimeout((function() {
                  i.scrollToDate = "date-" + i.selectDateStr
                }), 50);
                this.getScenicTicketDate()
              },
              getlineScenicInfo: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/lineScenicInfo/" + this.lineId).then((function(e) {
                  if (1 !== e.code || !Array.isArray(e.data) || !e.data.length) {
                    t.resourceNote = "线路景区暂不可用";
                    return;
                  }
                  e.data.forEach((function(t) {
                    t.classList = [], t.selectDateStr = "", t.dateData = [], t.ticNum = 0
                  })), t.spotData = e.data, t.destinationId = e.data[0].destinationId, t.activeIndex = 0, t.getScenicTicketDate()
                })).catch((function() {
                  t.resourceNote = "线路景区暂不可用";
                }))
              },
              getScenicTicketDate: function() {
                var t = this,
                  e = {
                    destinationId: this.destinationId
                  };
                this.resourceNote = "";
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/getScenicTicketDate", e).then((function(e) {
                  if (1 === e.code) {
                    var i = e.data,
                      s = t.selectDateStr;
                    if (!Array.isArray(i) || !i.length) {
                      t.dateData = [];
                      t.resourceNote = "暂无可售日期";
                      return;
                    }
                    i.forEach((function(e) {
                      var i = "";
                      0 === e.surplusStock ? (i = "已售罄", e.disabled = !0) : (-1 === e.surplusStock || e.surplusStock > 0) && (i = "可订", s || (s = e.date)), e.dateShort = e.date.slice(5), e.week = t.getWeekOfDate(e.date), e.diy = i
                    })), t.dateData = i, t.selectDateStr = s || i[0].date, t.spotData[t.activeIndex].selectDateStr = s || i[0].date, t.spotData[t.activeIndex].dateData = i, t.getScenicTicket(t.selectDateStr, !0)
                  } else t.resourceNote = "可售日期暂不可用"
                })).catch((function() {
                  t.resourceNote = "可售日期暂不可用";
                }))
              },
              getScenicTicket: function(e, i) {
                var s = this;
                if (this.destinationId && e) {
                  var a = {
                    destinationId: this.destinationId,
                    date: e
                  };
                  t.showLoading({
                    title: "加载中",
                    mask: !0
                  }), this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/line/getScenicTicketCale", a).then((function(a) {
                    if (1 === a.code && Array.isArray(a.data)) {
                      var n = a.data,
                        c = [],
                        o = [],
                        u = 0;
                      if (s.oldData && s.oldData.spotList && s.oldData.spotList[0]) {
                        var r = s.oldData.spotList.filter((function(t) {
                          return t.destinationId == s.destinationId
                        }));
                        r[0] && (c = r[0].itemList)
                      }
                      if (c.forEach((function(t) {
                          o.push(t.itemTitle)
                        })), n.forEach((function(t) {
                          t.itemlist.forEach((function(t) {
                            var e = "";
                            if (c[0] && c.forEach((function(i) {
                                i.itemId != t.itemId && i.aggregationItemId != t.itemId || (e = i)
                              })), t.ticketNum = 0, t.selectItemId = "", 1 == t.ticketType) {
                              if (t.selectItemId = t.itemId, t.selectedtime = t.ticketPrices[0], e && e.selectedtime && e.selectedtime.startTime == t.selectedtime.startTime && e.selectedtime.endTime == t.selectedtime.endTime && (-1 == t.selectedtime.surplusStock || t.selectedtime.surplusStock >= e.ticketNum) && (t.ticketNum = e.ticketNum, o = o.filter((function(e) {
                                  return e != t.itemTitle
                                })), u += e.ticketNum), 2 == t.itemUseDesc.dateType && 2 == t.itemUseDesc.stockLimit) {
                                t.selectedtime = "";
                                var i = (new Date).getTime(),
                                  s = t.ticketPrices;
                                s.forEach((function(s) {
                                  new Date((s.date + " " + s.endTime + ":00").replace(/-/g, "/")).getTime() < i && (s.timePassed = !0, s.disabled = !0);
                                  var a = "";
                                  0 === s.surplusStock ? (s.disabled = !0, a = "已满") : a = s.surplusStock > 200 || -1 == s.surplusStock ? "有票" : "余" + s.surplusStock, s.surplusStockStr = a, e && e.selectedtime && e.selectedtime.startTime == s.startTime && e.selectedtime.endTime == s.endTime && !s.disabled && (-1 == s.surplusStock || s.surplusStock >= e.ticketNum) && (t.selectedtime = s, t.selectedtime.time = e.selectedtime.time, t.time = s.startTime + "-" + s.endTime, t.ticketNum = e.ticketNum, o = o.filter((function(e) {
                                    return e != t.itemTitle
                                  })), u += e.ticketNum)
                                })), t.hourArr = s
                              }
                            } else if (2 == t.ticketType && (t.selectedtime = !0, e)) {
                              var a = t.relationList.filter((function(t) {
                                return t.itemId == e.itemId
                              }));
                              if (a[0]) {
                                var n = a[0].itemTicketStockVOS[0];
                                e.selectedtime && e.selectedtime.startTime == n.startTime && e.selectedtime.endTime == n.endTime && (-1 == n.surplusStock || n.surplusStock >= e.ticketNum) && (t.selectItemId = e.itemId, t.selectedtime = n, t.ticketNum = e.ticketNum, t.selectedSku = e.selectedSku, t.itemUseDesc = e.itemUseDesc, t.seckillActivity = e.seckillActivity, t.seckillItemId = e.seckillItemId, u += e.ticketNum, o = o.filter((function(t) {
                                  return t != e.itemTitle
                                })))
                              }
                            }
                          }))
                        })), s.errList = o, o[0]) return s.stagData = {
                        date: e,
                        list: n,
                        spotTicNum: u,
                        scrollType: i
                      }, t.hideLoading(), void(s.showGroupErr = !0);
                      i && (s.scrollToDate = "date-" + e), s.selectDateStr = e, s.spotData[s.activeIndex].selectDateStr = e, s.spotData[s.activeIndex].classList = n, s.spotData[s.activeIndex].ticNum = u, s.resourceNote = "", s.calcPriceAmount(), t.hideLoading()
                    } else s.resourceNote = "票种暂不可用", t.hideLoading()
                  })).catch((function() {
                    s.resourceNote = "票种暂不可用";
                    t.hideLoading();
                  }))
                }
              },
              confirmOrder: function() {
                if (this.stagData) {
                  var t = this.$util.deepCopy(this.stagData);
                  t.type && (this.scrollToDate = "date-" + t.date), this.selectDateStr = t.date, this.spotData[this.activeIndex].selectDateStr = t.date, this.spotData[this.activeIndex].classList = t.list, this.spotData[this.activeIndex].ticNum = t.spotTicNum, this.calcPriceAmount()
                }
                this.showGroupErr = !1, this.errList = [], this.stagData = ""
              },
              showBookTip: function(t, e, i) {
                if (this.parentIndex = t, this.itemIndex = e, 2 == i.ticketType) return !i.stockStatus || i.sellOut ? void this.$util.showToast("已售空") : void this.setTicketType(i);
                this.getTicDetail(i.itemId, "pt")
              },
              getTicDetail: function(e, i) {
                var s = this;
                if (!this.submitState) {
                  console.log(i), t.showLoading({
                    title: "加载中",
                    mask: !0
                  });
                  var a = this;
                  this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/item/getTiketProductDetail", {
                    itemId: e
                  }).then((function(e) {
                    if (t.hideLoading(), s.submitState = !1, 1 === e.code) {
                      if (1 == e.data.itemUseDesc.dateType ? e.data.price = e.data.ticketPrices[0].sellPrice : e.data.ticketPrices.forEach((function(t) {
                          s.selectDateStr == t.date && (e.data.price = t.sellPrice)
                        })), "jh" == i) return s.skuTicData = e.data, void s.setSkuOrderPrice();
                      s.isShowBookTip = !s.isShowBookTip, s.ydxz = e.data, s.isShowBookTip && s.$nextTick((function() {
                        setTimeout((function() {
                          var e = t.createSelectorQuery();
                          e.select("#ytxz-box-title").boundingClientRect(), e.exec((function(t) {
                            a.bookTipHeight = a.windowHeight / a.winWidth * 750 * .7 - 146 - t[0].height * a.unit
                          }))
                        }), 100)
                      }))
                    } else s.$util.showToast(e.msg)
                  }))
                }
              },
              getSkuDesc: function(e) {
                e && t.previewImage({
                  current: 1,
                  urls: [e]
                })
              },
              brText: function(t) {
                if (t) {
                  var e = t.split("#**#");
                  return e.pop().split("</p>").forEach((function(t, i) {
                    if (t) {
                      var s = (t = t.split("<p>").join("")).match(/\<.*?\>/g),
                        a = t.match(/[\r\n]/g),
                        n = s || a;
                      n && n[0] && n.forEach((function(e) {
                        t = t.replaceAll(e, "")
                      })), e.push(t)
                    }
                  })), e
                }
              },
              setTicketType: function(t) {
                this.attrs = [], this.selectedSku = {}, this.itemSkuArr = [], this.skuList = [], this.skuData = "", this.timeData = [], this.selectDate = "", this.filterSku = [], this.filterTime = "", this.showAllTime = !1, this.scrollToDate = "", this.scrollToTic = "", this.scrollToClass = "", this.skuSelectTicId = "", this.skuTicData = "", this.prefeFlag = null != t.skuCashBackAmount ? t.skuCashBackAmount : t.cashBackAmount, this.getSkuDetail(t.itemId)
              },
              skuInit: function() {
                var t = this;
                this.attrs.forEach((function(e) {
                  e.attrList = [], e.showAttributeOptionList.forEach((function(i) {
                    e.attrList.push({
                      name: i,
                      reduceFlag: t.isReduce(e.attributeKey, i)
                    })
                  }))
                }))
              },
              isReduce: function(t, e) {
                var i = !1;
                return this.filterSku.forEach((function(s) {
                  Object.keys(s.skuInfo).forEach((function(a, n) {
                    i || a != t || e != Object.values(s.skuInfo)[n] || (i = s.prefeFlag)
                  }))
                })), i
              },
              selectReduce: function(t, e, i) {
                var s = this;
                0 != (t = t.filter((function(t) {
                  return "" != t[1]
                }))).length ? this.attrs.forEach((function(e) {
                  e.attrList.forEach((function(i) {
                    i.reduceFlag = s.selectIsReduce(t, e.attributeKey, i.name, i.reduceFlag)
                  }))
                })) : this.skuInit()
              },
              selectIsReduce: function(t, e, i, s) {
                var a = !1,
                  n = [];
                return t.forEach((function(t) {
                  n.push(t[1])
                })), n.includes(i) || (t.forEach((function(t, i) {
                  t[0] == e && n.splice(i, 1)
                })), n.push(i)), this.filterSku.forEach((function(t) {
                  if (!a) {
                    var e = n.length,
                      i = 0;
                    n.forEach((function(s) {
                      Object.values(t.skuInfo).includes(s) && i++, i == e && (a = t.prefeFlag)
                    }))
                  }
                })), a
              },
              getSkuDetail: function(e) {
                var i = this;
                this.submitState || (t.showLoading({
                  title: "加载中",
                  mask: !0
                }), this.submitState = !0, this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/aggregationItem/appDetail/" + e).then((function(s) {
                  if (1 === s.code) {
                    t.hideLoading();
                    var a = s.data;
                    i.skuData = a, i.attrs = a.attributeList;
                    var n = a.relationList,
                      c = [],
                      o = new Map;
                    n.forEach((function(t) {
                      var e = JSON.parse(t.relation);
                      c.push({
                        itemId: t.itemId,
                        skuInfo: e,
                        itemTicketStockVOS: t.itemTicketStockVOS,
                        prefeFlag: !(!i.prefeFlag || !t.reduceFlag)
                      }), t.itemTicketStockVOS.forEach((function(t) {
                        o.set("".concat(t.itemId, "-").concat(t.date), t.sellPrice)
                      }))
                    })), i.allStockMap = o, i.setSkuTips(), i.skuList = c, i.filterSku = c, 1 == a.dateType && (i.timeDataFormat(), i.chooseTime(i.skuItemTime)), i.$forceUpdate(), i.aggId = e, i.showTicketSku = !0, i.submitState = !1
                  } else i.$util.showToast(s.msg), i.submitState = !1;
                  i.skuInit()
                })))
              },
              setSkuTips: function() {
                var t = this;
                if (this.skuData) {
                  var e = "",
                    i = [];
                  if (1 == this.skuData.dateType && "" == this.selectDate && (e = this.skuData.dateTitle || "使用日期"), e && i.push(e), this.skuData.attributeList.forEach((function(e) {
                      t.selectedSku[e.attributeKey] || i.push(e.attributeKey)
                    })), 1 == i.length) e = i[0];
                  else if (2 == i.length) e = i.join("和");
                  else if (i.length >= 3) {
                    var s = i.pop();
                    e = i.join("、") + "和" + s
                  }
                  e = e ? "请选择" + e : "", this.tipsInfo = e
                }
              },
              timeDataFormat: function() {
                var t = this;
                this.timeData = [];
                var e = [];
                this.skuData.mainPriceList.forEach((function(i) {
                  var s = i.itemId.split(","),
                    a = [];
                  s.forEach((function(e) {
                    t.allStockMap.has("".concat(e, "-").concat(i.date)) && a.push(t.allStockMap.get("".concat(e, "-").concat(i.date)))
                  }));
                  var n = Math.min.apply(Math, a),
                    c = Array.from(new Set(a)),
                    o = n && n > 0 ? "¥" + n : "免费";
                  i.dateShort = i.date.slice(5), i.week = t.getWeekOfDate(i.date), i.diy = o, i.diys = o, i.qi = 1 != c.length || "免费" == o, t.timeData.push(i), e.push(i.date), i.date == t.selectDateStr && (t.skuItemTime = i)
                })), this.filterTime = e.join(","), this.$forceUpdate()
              },
              getWeekOfDate: function(t) {
                t = t.replace(/-/g, "/");
                var e = u.format(new Date, "yyyy/MM/dd"),
                  i = u.format(u.addDay(new Date, 1), "yyyy/MM/dd");
                return t == e ? "今天" : t == i ? "明天" : "周" + "日一二三四五六".charAt(new Date(t).getDay())
              },
              chooseTime: function(t) {
                this.filterTime.includes(t.date) && (this.selectDate = t.date, this.filterSku = this.skuList.filter((function(e) {
                  return t.itemId.includes(e.itemId)
                })), this.setSkuOrderPrice(), this.setSkuTips(), this.$forceUpdate())
              },
              setSkuOrderPrice: function() {
                var t = this;
                this.selectDate && this.skuTicData && this.skuTicData.itemId ? this.skuTicData.ticketPrices.forEach((function(e) {
                  t.selectDate == e.date && (t.selectedHour = e)
                })) : this.selectedHour = ""
              },
              skuAct: function(t, e) {
                return this.selectedSku[t] === e
              },
              isSkuValid: function(t, e) {
                return this.getSkuValid(t, e).length > 0
              },
              getSkuValid: function(t, e) {
                var i = o(o({}, this.selectedSku), {}, (0, a.default)({}, t, e));
                return this.filterlist(i)
              },
              filterlist: function(t) {
                var e = Object.keys(t).filter((function(e) {
                  return "" !== t[e]
                }));
                return this.filterSku.filter((function(i) {
                  return e.every((function(e) {
                    return t[e] === i.skuInfo[e]
                  }))
                }))
              },
              isObjectEqual: function(t, e) {
                var i = Object.keys(t),
                  s = Object.keys(e);
                if (i.length !== s.length) return !1;
                for (var a = 0, n = i; a < n.length; a++) {
                  var c = n[a];
                  if (t[c] !== e[c]) return !1
                }
                return !0
              },
              handleClick: function(t, e) {
                var i = [],
                  s = [],
                  a = [];
                if (!(this.getSkuValid(t, e) <= 0)) {
                  this.selectedSku[t] = this.selectedSku[t] === e ? "" : e, this.itemSkuArr = Object.entries(this.selectedSku), this.selectReduce(this.itemSkuArr, t, e), this.setSkuTips(), (i = this.filterlist(this.selectedSku)).forEach((function(t) {
                    a.push(t.itemId), t.itemTicketStockVOS.forEach((function(t) {
                      (t.surplusStock > 0 || -1 == t.surplusStock) && s.push(t.date)
                    }))
                  }));
                  var n = Array.from(new Set(s));
                  this.filterTime = n.join(","), this.setTimeData(a), 1 == i.length && this.isObjectEqual(i[0].skuInfo, this.selectedSku) ? (this.skuSelectTicId = i[0].itemId, this.getTicDetail(this.skuSelectTicId, "jh")) : (this.skuSelectTicId = "", this.skuTicData = ""), this.setSkuOrderPrice(), this.$forceUpdate()
                }
              },
              setTimeData: function(t) {
                var e = this;
                this.timeData.forEach((function(i) {
                  if (e.filterTime.includes(i.date)) {
                    i.dis = !1;
                    var s = [];
                    t.forEach((function(t) {
                      e.allStockMap.has("".concat(t, "-").concat(i.date)) && s.push(e.allStockMap.get("".concat(t, "-").concat(i.date)))
                    }));
                    var a = Math.min.apply(Math, s),
                      n = Array.from(new Set(s)),
                      c = a && a > 0 ? "¥" + a : "免费";
                    i.diy = c, i.diys = c, i.qi = 1 != n.length || "免费" == c
                  } else i.dis = !0
                })), this.$forceUpdate()
              },
              reduceNum: function(t, e, i) {
                if (i.stockStatus && !i.sellOut && (this.parentIndex = t, this.itemIndex = e, 0 != i.ticketNum))
                  if (i.selectItemId) {
                    if (!i.selectedtime) return this.itemData = i, void(this.showTimeHour = !0);
                    i.ticketNum = i.ticketNum - 1, this.spotData[this.activeIndex].ticNum = this.spotData[this.activeIndex].ticNum - 1, 0 == i.ticketNum && (1 == i.ticketType ? 2 == i.itemUseDesc.dateType && 2 == i.itemUseDesc.stockLimit && (i.selectedtime = "") : 2 == i.ticketType && (i.selectedSku = [], i.selectItemId = "", i.skuItemTitle = "", i.skuCashBackAmount = null, i.seckillActivity = null, i.seckillItemId = "")), this.calcPriceAmount()
                  } else this.setTicketType(i)
              },
              addNum: function(t, e, i) {
                if (i.stockStatus && !i.sellOut) {
                  if (this.parentIndex = t, this.itemIndex = e, this.addType = !1, !i.selectItemId) return this.addType = !0, void this.setTicketType(i);
                  if (!i.selectedtime) return this.itemData = i, this.addType = !0, void(this.showTimeHour = !0);
                  var s;
                  s = 0 == i.itemUseDesc.maxBookNum ? 99999 : i.itemUseDesc.maxBookNum, 1 == i.itemUseDesc.dateType && 1 == i.itemUseDesc.stockLimitType && (s = Math.min(s, i.selectedtime.surplusStock)), 2 == i.itemUseDesc.dateType && i.selectedtime && -1 != i.selectedtime.surplusStock && (s = Math.min(s, i.selectedtime.surplusStock)), i.ticketNum >= s ? this.$util.showToast("最多可选择".concat(s, "张")) : (i.ticketNum = i.ticketNum + 1, this.spotData[this.activeIndex].ticNum = this.spotData[this.activeIndex].ticNum + 1, this.calcPriceAmount())
                }
              },
              getMaxNum: function(t) {
                var e, i = !1;
                return t.ticketNum <= 0 || (e = 0 == t.itemUseDesc.maxBookNum ? 99999 : t.itemUseDesc.maxBookNum, 1 == t.itemUseDesc.dateType && 1 == t.itemUseDesc.stockLimitType && (e = Math.min(e, t.selectedtime.surplusStock)), 2 == t.itemUseDesc.dateType && t.selectedtime && -1 != t.selectedtime.surplusStock && (e = Math.min(e, t.selectedtime.surplusStock)), t.ticketNum >= e && (i = !0)), i
              },
              calcPriceAmount: function() {
                var e = this,
                  i = {
                    allAmount: 0,
                    reduction: 0,
                    lineId: this.lineId,
                    spotList: [],
                    orderAmount: 0
                  },
                  s = 0,
                  a = 0,
                  c = 0;
                this.spotData.forEach((function(t) {
                  c = c + t.ticNum || 0
                })), this.allNum = c, console.log(this.spotData), this.spotData.forEach((function(t) {
                  if (t.ticNum > 0) {
                    var o = {
                        destinationId: t.destinationId,
                        destinationName: t.destinationName,
                        mainPicture: t.mainPicture,
                        itemList: [],
                        ticNum: t.ticNum,
                        selectDateStr: t.selectDateStr,
                        spotAmount: 0
                      },
                      u = [],
                      r = 0,
                      l = 0;
                    t.classList.forEach((function(i) {
                      i.itemlist.forEach((function(i) {
                        if (i.ticketNum > 0) {
                          var s = i.selectedtime.sellPrice || 0,
                            a = new n.default(s),
                            o = new n.default(0);
                          i.cashBackAmount > 0 && c > t.ticNum && (o = new n.default(i.cashBackAmount)), i.skuCashBackAmount > 0 && c > t.ticNum && (o = new n.default(i.skuCashBackAmount)), o.toNumber() >= s && (o = a);
                          var d = o.times(i.ticketNum).toNumber(),
                            h = a.minus(o).times(i.ticketNum).toNumber();
                          u.push({
                            ticketNum: i.ticketNum,
                            itemId: i.selectItemId,
                            selectedtime: i.selectedtime,
                            itemUseDesc: i.itemUseDesc,
                            itemTitle: i.skuItemTitle ? i.skuItemTitle : i.itemTitle,
                            backAmount: d,
                            amount: h,
                            aggregationItemId: i.aggregationItemId || "",
                            selectedSku: i.selectedSku || "",
                            price: s,
                            seckillActivity: i.seckillActivity,
                            seckillItemId: i.seckillItemId
                          }), r = e.add(r, h), l = e.add(l, d)
                        }
                      }))
                    })), o.itemList = u, o.spotAmount = r, s = e.add(s, r), a = e.add(a, l), i.spotList.push(o)
                  }
                })), this.allAmount = s, this.reduction = a, i.allAmount = s, i.reduction = a, i.orderAmount = this.add(s, a), this.lineOrderInfo = i, console.log(this.spotData), t.setStorageSync("lineOrderInfo", i)
              },
              add: function(t, e) {
                return t = (0, n.default)(t), e = (0, n.default)(e), t.plus(e).toNumber()
              },
              subtract: function(t, e) {
                return t = (0, n.default)(t), e = (0, n.default)(e), t.minus(e).toNumber()
              },
              multiply: function(t, e) {
                return t = (0, n.default)(t), e = (0, n.default)(e), t.times(e).toNumber()
              },
              submit: function() {
                if (this.calcPriceAmount(), this.allNum <= 0) this.$util.showToast("订单门票数量至少为1");
                else {
                  var t = "/subPack/pages/fillInOrder/fillInOrder";
                  this.$util.isLogin(t) && this.$navigateTo({
                    url: t
                  })
                }
              },
              chooseSkuItem: function(t) {
                var e = this;
                if (t) {
                  var i = this.spotData[this.activeIndex].classList[this.parentIndex].itemlist[this.itemIndex];
                  i.selectItemId = t.itemId, i.skuItemTitle = t.itemTitle, i.itemUseDesc = t.itemUseDesc, i.seckillActivity = t.seckillActivity, i.seckillItemId = t.seckillItemId, i.skuCashBackAmount = t.cashBackAmount || 0, 1 == t.itemUseDesc.dateType ? i.selectedtime = t.ticketPrices[0] : t.ticketPrices.forEach((function(t) {
                    e.selectDateStr == t.date && (i.selectedtime = t)
                  })), i.selectedSku = this.itemSkuArr, this.spotData[this.activeIndex].classList[this.parentIndex].itemlist[this.itemIndex] = i, this.showTicketSku = !1, this.addType ? this.addNum(this.parentIndex, this.itemIndex, i) : this.calcPriceAmount()
                }
              },
              selectHourFn: function(t) {
                if (0 !== t.surplusStock && !0 !== t.disabled) {
                  var e = t;
                  this.selectedHourTime = e, this.selectedHourTime.time = e.startTime + "-" + e.endTime
                }
              },
              chooseTimeItem: function(t) {
                t.selectedtime = this.selectedHourTime, this.showTimeHour = !1, this.addType ? this.addNum(this.parentIndex, this.itemIndex, t) : this.calcPriceAmount()
              },
              changeHourTime: function(t, e, i) {
                this.selectedHourTime = i.selectedtime, this.showTimeHour = !0
              },
              changeSkuItem: function(t, e, i) {
                var s = this;
                this.parentIndex = t, this.itemIndex = e;
                var a = i.selectedSku;
                this.getSkuDetail(i.itemId), setTimeout((function() {
                  a.forEach((function(t) {
                    s.handleClick(t[0], t[1])
                  })), s.showTicketSku = !0
                }), 300)
              }
            }
          };
        e.default = r
      }).call(this, i("df3c").default)
    },
    bdc4: function(t, e, i) {},
    c844: function(t, e, i) {
      i.r(e);
      var s = i("7da9"),
        a = i.n(s);
      for (var n in s)["default"].indexOf(n) < 0 && function(t) {
        i.d(e, t, (function() {
          return s[t]
        }))
      }(n);
      e.default = a.a
    }
  },
  [
    ["5d5a", "common/runtime", "common/vendor", "subPack/common/vendor"]
  ]
]);
