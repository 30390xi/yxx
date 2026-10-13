require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiTravel/components/dateRangePicker"], {
    "2cdb": function(t, e, a) {},
    7108: function(t, e, a) {
      a.r(e);
      var n = a("c52c"),
        i = a.n(n);
      for (var r in n)["default"].indexOf(r) < 0 && function(t) {
        a.d(e, t, (function() {
          return n[t]
        }))
      }(r);
      e.default = i.a
    },
    9766: function(t, e, a) {
      var n = a("2cdb");
      a.n(n).a
    },
    b363: function(t, e, a) {
      a.r(e);
      var n = a("d20b"),
        i = a("7108");
      for (var r in i)["default"].indexOf(r) < 0 && function(t) {
        a.d(e, t, (function() {
          return i[t]
        }))
      }(r);
      a("9766");
      var o = a("828b"),
        s = Object(o.a)(i.default, n.b, n.c, !1, null, "b0a54140", null, !1, n.a, void 0);
      e.default = s.exports
    },
    c52c: function(t, e, a) {
      (function(t) {
        var n = a("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = n(a("34cf")),
          r = {
            name: "u-calendar",
            props: {
              safeAreaInsetBottom: {
                type: Boolean,
                default: !1
              },
              maskCloseAble: {
                type: Boolean,
                default: !1
              },
              value: {
                type: Boolean,
                default: !1
              },
              zIndex: {
                type: [String, Number],
                default: 0
              },
              changeYear: {
                type: Boolean,
                default: !0
              },
              changeMonth: {
                type: Boolean,
                default: !0
              },
              mode: {
                type: String,
                default: "date"
              },
              maxYear: {
                type: [Number, String],
                default: 2050
              },
              minYear: {
                type: [Number, String],
                default: 1950
              },
              minDate: {
                type: [Number, String],
                default: "1950-01-01"
              },
              maxDate: {
                type: [Number, String],
                default: ""
              },
              borderRadius: {
                type: [String, Number],
                default: 20
              },
              monthArrowColor: {
                type: String,
                default: "#606266"
              },
              yearArrowColor: {
                type: String,
                default: "#909399"
              },
              color: {
                type: String,
                default: "#303133"
              },
              activeBgColor: {
                type: String,
                default: "#EDA87D"
              },
              activeColor: {
                type: String,
                default: "#ffffff"
              },
              rangeBgColor: {
                type: String,
                default: "#EDA87D"
              },
              rangeColor: {
                type: String,
                default: "#ffffff"
              },
              startText: {
                type: String,
                default: "开始"
              },
              endText: {
                type: String,
                default: "结束"
              },
              btnType: {
                type: String,
                default: "primary"
              },
              isActiveCurrent: {
                type: Boolean,
                default: !0
              },
              isChange: {
                type: Boolean,
                default: !1
              },
              closeable: {
                type: Boolean,
                default: !1
              },
              toolTip: {
                type: String,
                default: ""
              },
              customStyle: {
                type: Object,
                default: function() {
                  return {
                    background: "#D0A26C !important",
                    border: "none !important",
                    color: "#fff",
                    width: "118rpx",
                    height: "64rpx"
                  }
                }
              }
            },
            data: function() {
              return {
                weekday: 1,
                weekdayArr: [],
                days: 0,
                daysArr: [],
                showTitle: "",
                year: 2020,
                month: 0,
                day: 0,
                startYear: 0,
                startMonth: 0,
                startDay: 0,
                endYear: 0,
                endMonth: 0,
                endDay: 0,
                today: "",
                activeDate: "",
                startDate: "",
                endDate: "",
                isStart: !0,
                min: null,
                max: null,
                weekDayZh: ["日", "一", "二", "三", "四", "五", "六"],
                periodOptions: ["上午", "下午"],
                form: {
                  startPeriod: "上午",
                  endPeriod: "下午"
                }
              }
            },
            computed: {
              dataChange: function() {
                return "".concat(this.mode, "-").concat(this.minDate, "-").concat(this.maxDate)
              },
              uZIndex: function() {
                return this.zIndex ? this.zIndex : this.$u.zIndex.popup
              }
            },
            watch: {
              dataChange: function(t) {
                this.init()
              }
            },
            created: function() {
              this.init()
            },
            methods: {
              simulateSelectRange: function(t, e) {
                if (t && e) {
                  var a = t.split("-").map(Number),
                    n = (0, i.default)(a, 3),
                    r = n[0],
                    o = n[1],
                    s = n[2],
                    h = e.split("-").map(Number),
                    c = (0, i.default)(h, 3),
                    d = c[0],
                    u = c[1],
                    l = c[2];
                  this.year = r, this.month = o, this.changeData();
                  var f = s - 1,
                    m = l - 1;
                  this.dateClick(f), t !== e && (r === d && o === u || (this.year = d, this.month = u, this.changeData()), this.dateClick(m))
                }
              },
              getColor: function(t, e) {
                var a = 1 == e ? "" : this.color,
                  n = t + 1,
                  i = "".concat(this.year, "-").concat(this.month, "-").concat(n),
                  r = new Date(i.replace(/\-/g, "/")).getTime(),
                  o = this.startDate.replace(/\-/g, "/"),
                  s = this.endDate.replace(/\-/g, "/");
                return this.isActiveCurrent && this.activeDate == i || this.startDate == i || this.endDate == i ? a = 1 == e ? this.activeBgColor : this.activeColor : this.endDate && r > new Date(o).getTime() && r < new Date(s).getTime() && (a = 1 == e ? this.rangeBgColor : this.rangeColor), a
              },
              init: function() {
                var t = new Date;
                this.year = t.getFullYear(), this.month = t.getMonth() + 1, this.day = t.getDate(), this.today = "".concat(t.getFullYear(), "-").concat(t.getMonth() + 1, "-").concat(t.getDate()), this.activeDate = "", this.min = this.initDate(this.today), this.max = this.initDate(this.maxDate || "2050-12-31"), this.startDate = "", this.startYear = 0, this.startMonth = 0, this.startDay = 0, this.endYear = 0, this.endMonth = 0, this.endDay = 0, this.endDate = "", this.isStart = !0, this.changeData()
              },
              initDate: function(t) {
                var e = t.split("-");
                return {
                  year: Number(e[0] || 1920),
                  month: Number(e[1] || 1),
                  day: Number(e[2] || 1)
                }
              },
              openDisAbled: function(t, e, a) {
                var n = !0,
                  i = "".concat(t, "/").concat(e, "/").concat(a),
                  r = this.today.replace(/\-/g, "/");
                return new Date(i).getTime() >= new Date(r).getTime() && (n = !1), n
              },
              generateArray: function(t, e) {
                return Array.from(new Array(e + 1).keys()).slice(t)
              },
              formatNum: function(t) {
                return t < 10 ? "0" + t : t + ""
              },
              getMonthDay: function(t, e) {
                return new Date(t, e, 0).getDate()
              },
              getWeekday: function(t, e) {
                return new Date("".concat(t, "/").concat(e, "/01 00:00:00")).getDay()
              },
              checkRange: function(e) {
                var a = !1;
                return (e < this.minYear || e > this.maxYear) && (t.showToast({
                  title: "日期超出范围啦~",
                  icon: "none"
                }), a = !0), a
              },
              changeMonthHandler: function(t) {
                if (t) {
                  var e = this.month + 1,
                    a = e > 12 ? this.year + 1 : this.year;
                  this.checkRange(a) || (this.month = e > 12 ? 1 : e, this.year = a, this.changeData())
                } else {
                  var n = this.month - 1,
                    i = n < 1 ? this.year - 1 : this.year;
                  this.checkRange(i) || (this.month = n < 1 ? 12 : n, this.year = i, this.changeData())
                }
              },
              changeYearHandler: function(t) {
                var e = t ? this.year + 1 : this.year - 1;
                this.checkRange(e) || (this.year = e, this.changeData())
              },
              changeData: function() {
                this.days = this.getMonthDay(this.year, this.month), this.daysArr = this.generateArray(1, this.days), this.weekday = this.getWeekday(this.year, this.month), this.weekdayArr = this.generateArray(1, this.weekday), this.showTitle = "".concat(this.year, "年").concat(this.month, "月"), this.isChange && "date" == this.mode && this.btnFix(!0)
              },
              dateClick: function(e) {
                if (e += 1, !this.openDisAbled(this.year, this.month, e)) {
                  this.day = e;
                  var a = "".concat(this.year, "-").concat(this.month, "-").concat(e);
                  if ("date" == this.mode) this.activeDate = a;
                  else {
                    var n = new Date(a.replace(/\-/g, "/")).getTime() < new Date(this.startDate.replace(/\-/g, "/")).getTime();
                    if (this.isStart || n) this.startDate = a, this.startYear = this.year, this.startMonth = this.month, this.startDay = this.day, this.endYear = 0, this.endMonth = 0, this.endDay = 0, this.endDate = "", this.activeDate = "", this.isStart = !1;
                    else {
                      var i = new Date(this.startDate.replace(/\-/g, "/")),
                        r = new Date(a.replace(/\-/g, "/"));
                      if (Math.abs((r - i) / 864e5) + 1 > 5) return void t.showToast({
                        title: "最多只能选择5天",
                        icon: "none"
                      });
                      this.endDate = a, this.endYear = this.year, this.endMonth = this.month, this.endDay = this.day, this.isStart = !0
                    }
                  }
                }
              },
              close: function() {
                this.$emit("input", !1)
              },
              getWeekText: function(t) {
                return "星期" + ["日", "一", "二", "三", "四", "五", "六"][(t = new Date("".concat(t.replace(/\-/g, "/"), " 00:00:00"))).getDay()]
              },
              btnFix: function(t) {
                if (t || this.close(), "date" == this.mode) {
                  var e = this.activeDate.split("-"),
                    a = this.isChange ? this.year : Number(e[0]),
                    n = this.isChange ? this.month : Number(e[1]),
                    i = this.isChange ? this.day : Number(e[2]),
                    r = this.getMonthDay(a, n),
                    o = "".concat(a, "-").concat(this.formatNum(n), "-").concat(this.formatNum(i)),
                    s = this.getWeekText(o),
                    h = !1;
                  "".concat(a, "-").concat(n, "-").concat(i) == this.today && (h = !0), this.$emit("change", {
                    year: a,
                    month: n,
                    day: i,
                    days: r,
                    result: o,
                    week: s,
                    isToday: h
                  })
                } else {
                  if (!this.startDate || !this.endDate) return;
                  var c = this.formatNum(this.startMonth),
                    d = this.formatNum(this.startDay),
                    u = "".concat(this.startYear, "-").concat(c, "-").concat(d),
                    l = this.getWeekText(u),
                    f = this.formatNum(this.endMonth),
                    m = this.formatNum(this.endDay),
                    g = "".concat(this.endYear, "-").concat(f, "-").concat(m),
                    y = this.getWeekText(g);
                  this.$emit("change", {
                    startYear: this.startYear,
                    startMonth: this.startMonth,
                    startDay: this.startDay,
                    startDate: u,
                    startWeek: l,
                    startPeriod: this.form.startPeriod,
                    endYear: this.endYear,
                    endMonth: this.endMonth,
                    endDay: this.endDay,
                    endDate: g,
                    endWeek: y,
                    endPeriod: this.form.endPeriod
                  })
                }
              },
              startPeriodChange: function(t) {
                this.startDate && this.endDate && this.startDate === this.endDate ? this.form.startPeriod = "上午" : this.form.startPeriod = this.periodOptions[t.detail.value]
              },
              endPeriodChange: function(t) {
                this.startDate && this.endDate && this.startDate === this.endDate ? this.form.endPeriod = "下午" : this.form.endPeriod = this.periodOptions[t.detail.value]
              }
            }
          };
        e.default = r
      }).call(this, a("df3c").default)
    },
    d20b: function(t, e, a) {
      a.d(e, "b", (function() {
        return i
      })), a.d(e, "c", (function() {
        return r
      })), a.d(e, "a", (function() {
        return n
      }));
      var n = {
          uPopup: function() {
            return a.e("uview-ui/components/u-popup/u-popup").then(a.bind(null, "39fb"))
          },
          uIcon: function() {
            return a.e("uview-ui/components/u-icon/u-icon").then(a.bind(null, "61be"))
          },
          uButton: function() {
            return a.e("uview-ui/components/u-button/u-button").then(a.bind(null, "c8fb"))
          }
        },
        i = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.__map(t.daysArr, (function(e, a) {
              return {
                $orig: t.__get_orig(e),
                m0: t.openDisAbled(t.year, t.month, a + 1),
                m1: t.getColor(a, 1),
                m2: t.getColor(a, 2)
              }
            }))),
            a = t.startDate ? t.getWeekText(t.startDate) : null,
            n = t.endDate ? t.getWeekText(t.endDate) : null;
          t.$mp.data = Object.assign({}, {
            $root: {
              l0: e,
              m3: a,
              m4: n
            }
          })
        },
        r = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/pages/aiTravel/components/dateRangePicker-create-component", {
    "union/pages/aiTravel/components/dateRangePicker-create-component": function(t, e, a) {
      a("df3c").createComponent(a("b363"))
    }
  },
  [
    ["union/pages/aiTravel/components/dateRangePicker-create-component"]
  ]
]);
