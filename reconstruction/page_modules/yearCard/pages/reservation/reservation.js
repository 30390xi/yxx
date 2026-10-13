// Extracted from yearCard/pages/reservation/reservation.js; webpack module "92e0".
// Compiled code for analysis; not an original source file.
module.exports = {
    "92e0": function(e, t, a) {
      (function(e) {
        var r = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = r(a("7eb4")),
          n = r(a("ee10")),
          c = a("fa61"),
          s = a("0408"),
          d = {
            data: function() {
              return {
                searchHeight: 0,
                navBarBg: 0,
                showSelectDate: !1,
                activeDate: null,
                selectDateStr: "",
                selectDateObj: {},
                safeAreaBottom: 0,
                successShow: !1,
                dateList: [],
                upTicketId: "616273786",
                userYearCardId: "1722810437767118849",
                detailObj: {},
                yearCardTicket: {},
                activeTime: "",
                selectStockVos: [],
                selectTimeStr: "",
                orderId: "",
                phoneNum: "",
                cardNum: "",
                isEncryption: !1,
                scrollToDate: "",
                name: "",
                showErr: !1,
                errMsg: "",
                isSubmit: !1
              }
            },
            onLoad: function(t) {
              var a = this,
                r = e.getMenuButtonBoundingClientRect();
              this.searchHeight = r.top, t.upTicketId && t.userYearCardId && (this.upTicketId = t.upTicketId, this.userYearCardId = t.userYearCardId), this.getYearCardTicketDetail(), e.getSystemInfo({
                success: function(e) {
                  a.safeAreaBottom = e.safeAreaInsets.bottom
                }
              })
            },
            methods: {
              getDateStr: function(e) {
                var t = e.split("-");
                return "".concat(t[0], "年").concat(t[1], "月").concat(t[2], "日")
              },
              goPage: function(t) {
                t ? e.navigateTo({
                  url: "/yearCard/pages/reservationDetail/reservationDetail?orderId=" + this.orderId + "&userYearCardId=" + this.detailObj.userYearCardId
                }) : e.reLaunch({
                  url: "/yearCard/pages/index/index"
                })
              },
              selectTime: function(e, t) {
                e.disabled || 0 == e.surplusStock || (this.activeTime = t, this.selectTimeStr = e.time, this.showSelectDate = !1)
              },
              encryption: function() {
                this.phoneNum = this.detailObj.cardholderMobile.replace(/^(.{3})(?:\d+)(.{4})$/, "$1****$2"), this.detailObj.cardholderIdCard && (this.cardNum = this.detailObj.cardholderIdCard.replace(/^(.{3})(?:\d+)(.{3})$/, "$1************$2")), this.name = this.detailObj.cardholderName.substring(0, 1) + new Array(this.detailObj.cardholderName.length).join("*")
              },
              getPhone: function(e) {
                this.isEncryption = !this.isEncryption, e ? (this.phoneNum = this.detailObj.cardholderMobile, this.cardNum = this.detailObj.cardholderIdCard, this.name = this.detailObj.cardholderName) : this.encryption()
              },
              getYearCardTicketDetail: function() {
                var e = this,
                  t = {
                    upTicketId: this.upTicketId,
                    userYearCardId: this.userYearCardId
                  };
                this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/userYearCard/yearCardTicketDetail", t).then((function(t) {
                  1 === t.code ? (e.detailObj = t.data, e.yearCardTicket = t.data.yearCardTicket, e.encryption(), e.getPriceData()) : e.$util.showToast(t.msg)
                }))
              },
              ticketUseType: function(e) {
                return ["年卡码", "门票码"][e]
              },
              submit: function() {
                var e = this;
                return (0, n.default)(i.default.mark((function t() {
                  var a;
                  return i.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!e.isSubmit) {
                          t.next = 2;
                          break
                        }
                        return t.abrupt("return");
                      case 2:
                        if (e.isSubmit = !0, e.selectDateStr || 2 != e.yearCardTicket.dateType) {
                          t.next = 6;
                          break
                        }
                        return e.$util.showToast("请选择预约日期"), t.abrupt("return");
                      case 6:
                        if (2 != e.yearCardTicket.stockLimit || e.selectTimeStr) {
                          t.next = 9;
                          break
                        }
                        return e.$util.showToast("请选择时段"), t.abrupt("return");
                      case 9:
                        return a = {
                          contactIdCard: e.detailObj.cardholderIdCard,
                          contactMobile: e.detailObj.cardholderMobile,
                          contactName: e.detailObj.cardholderName,
                          upTicketId: e.upTicketId,
                          yearCardCode: e.detailObj.cardCode
                        }, 2 == e.yearCardTicket.stockLimit && (a.departStartTime = e.selectTimeStr.split("~")[0], a.departEndTime = e.selectTimeStr.split("~")[1]), 2 == e.yearCardTicket.dateType && (a.departDate = e.selectDateStr), t.next = 14, (0, c.subScribeMsg)([0]);
                      case 14:
                        e.$uniApi.dataRequestNoLoading("POST", "order/app/v1/yearCardOrder/appointment", a).then((function(t) {
                          1 === t.code ? (e.orderId = t.data, e.successShow = !0) : (e.errMsg = t.msg, e.showErr = !0)
                        })).catch((function(e) {
                          console.log(e)
                        })).finally((function() {
                          e.isSubmit = !1
                        }));
                      case 15:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              subSelectDate: function() {
                this.showSelectDate = !1, this.selectDateStr = this.selectDateObj.date, this.activeDate = this.selectDateObj.index
              },
              itemClickFn: function(e) {
                this.selectDateObj = e, this.selectDateStr = this.selectDateObj.date, this.activeDate = this.selectDateObj.index, this.selectStockVos = this.selectDateObj.stockVos, this.checkTime(), this.activeTime = "", this.scrollToDate = "date-" + e.date, 2 != this.yearCardTicket.stockLimit && (this.showSelectDate = !1)
              },
              checkTime: function() {
                if (2 == this.yearCardTicket.stockLimit) {
                  var e = Date.now();
                  this.selectStockVos.forEach((function(t) {
                    var a = Date.parse(t.date + " " + t.time.split("~")[0]),
                      r = Date.parse(t.date + " " + t.time.split("~")[1]);
                    t.disabled = !(a > e || e <= r)
                  }))
                }
              },
              selectedDate: function(e, t) {
                e.disabled || (this.selectDateStr = e.date, this.activeDate = t, this.selectStockVos = e.stockVos, this.checkTime(), this.activeTime = "")
              },
              getDaysBetween: function(e, t) {
                return (Date.parse(t) - Date.parse(e)) / 864e5 + 1
              },
              lossWeek: function() {
                var e = "";
                if (!this.yearCardTicket.dateCanUse) return !1;
                var t = this.yearCardTicket.dateCanUse.split(",");
                return [{
                  index: "1",
                  str: "周一"
                }, {
                  index: "2",
                  str: "周二"
                }, {
                  index: "3",
                  str: "周三"
                }, {
                  index: "4",
                  str: "周四"
                }, {
                  index: "5",
                  str: "周五"
                }, {
                  index: "6",
                  str: "周六"
                }, {
                  index: "7",
                  str: "周日"
                }].forEach((function(a) {
                  t.includes(a.index) || (e += a.str + "、")
                })), !!(e = e.slice(0, -1)) && e + "不可用"
              },
              lossDate: function() {
                var e = "特定日期：",
                  t = this.yearCardTicket.dateCannotUse.split(",").sort((function(e, t) {
                    return Date.parse(e.replace(/-/g, "/")) - Date.parse(t.replace(/-/g, "/"))
                  })),
                  a = [],
                  r = "",
                  i = 1;
                return t.forEach((function(n, c) {
                  0 == c && a.push(n), 1 == t.length && (e += n + "、"), r && n == r ? (i++, a.push(n), c == t.length - 1 && i >= 3 ? e += a[0] + "至" + a[a.length - 1] + "、" : c == t.length - 1 && i < 3 && a.forEach((function(t) {
                    e += t + "、"
                  }))) : (i >= 3 ? (e += a[0] + "至" + a[a.length - 1] + "、", c == t.length - 1 && (e += n + "、")) : c > 0 && a.forEach((function(t) {
                    e += t + "、"
                  })), i = 1, (a = []).push(n));
                  var d = n.replace(/-/g, "/");
                  r = s.format(s.addDay(new Date(d), 1), "yyyy-MM-dd")
                })), e = e.slice(0, -1)
              },
              getPriceData: function() {
                var e = this;
                if (1 != this.yearCardTicket.dateType) {
                  var t = s.format(new Date, "yyyy/MM/dd");
                  this.yearCardTicket.calanderVos = this.yearCardTicket.calanderVos.filter((function(e) {
                    return Date.parse(e.date.replace(/-/g, "/")) >= Date.parse(t)
                  })), this.yearCardTicket.calanderVos = this.yearCardTicket.calanderVos.slice(0, 30), this.yearCardTicket.calanderVos.forEach((function(t, a) {
                    var r = "",
                      i = 0;
                    if (e.yearCardTicket.stockLimitType ? 2 == e.yearCardTicket.stockLimit || 1 == e.yearCardTicket.stockLimit ? (t.stockVos.forEach((function(e) {
                        i += e.surplusStock
                      })), 0 == i ? (r = "已约满", t.disabled = !0) : r = "可约") : e.yearCardTicket.surplusStock ? r = "可约" : (r = "不可约", t.disabled = !0) : r = "可约", "可约" == r && (e.yearCardTicket.dateCanUse || e.yearCardTicket.dateCannotUse)) {
                      var n = e.checkWeek(t.date, e.yearCardTicket.dateCanUse, e.yearCardTicket.dateCannotUse);
                      r = n ? "可约" : "不可约", t.disabled = !n
                    }
                    t.dateShort = t.date.slice(5), t.week = e.getWeekOfDate(t.date), t.diy = r, t.index = a
                  })), this.dateList = this.yearCardTicket.calanderVos
                }
              },
              checkWeek: function(e, t, a) {
                if (a && a.split(",").includes(e)) return !1;
                if (t) {
                  e = e.replace(/-/g, "/");
                  var r = t.split(","),
                    i = new Date(e).getDay().toString();
                  if (i = "0" == i ? "7" : i, !r.includes(i)) return !1
                }
                return !0
              },
              getWeekOfDate: function(e) {
                e = e.replace(/-/g, "/");
                var t = s.format(new Date, "yyyy/MM/dd"),
                  a = s.format(s.addDay(new Date, 1), "yyyy/MM/dd");
                return e == t ? "今天" : e == a ? "明天" : "周" + "日一二三四五六".charAt(new Date(e).getDay())
              },
              back: function() {
                e.navigateBack()
              }
            }
          };
        t.default = d
      }).call(this, a("df3c").default)
    },
};
