// Extracted from yearCard/pages/cardRecord/cardRecord.js; webpack module "01f4".
// Compiled code for analysis; not an original source file.
module.exports = {
    "01f4": function(e, t, n) {
      (function(e) {
        var r = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = r(n("7eb4")),
          c = r(n("7ca3")),
          o = r(n("ee10")),
          u = n("767f"),
          f = n("fa61");

        function d(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
          }
          return n
        }

        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? d(Object(n), !0).forEach((function(t) {
              (0, c.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }
        var s = [{
            id: 1,
            name: "入园记录"
          }, {
            id: 2,
            name: "预约记录"
          }],
          l = {
            components: {
              EntryRecord: function() {
                n.e("yearCard/pages/cardRecord/components/entryRecord").then(function() {
                  return resolve(n("1dac"))
                }.bind(null, n)).catch(n.oe)
              },
              ReservationRecord: function() {
                n.e("yearCard/pages/cardRecord/components/reservationRecord").then(function() {
                  return resolve(n("c126"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                tabList: s,
                checkedTabId: 1,
                bgStyle: 0,
                statusBarHeight: e.getSystemInfoSync().statusBarHeight,
                useRecord: [],
                appointmentRecord: [],
                baseInfo: {}
              }
            },
            onLoad: function(e) {
              e.checkedTab && (this.checkedTabId = Number(e.checkedTab)), e.userYearCardId && (this.getUseRecord(e.userYearCardId), this.getAppointmentRecord(e.userYearCardId), this.getBaseInfo(e.userYearCardId))
            },
            onPageScroll: function(e) {
              this.scrollTop = e.scrollTop, this.scrollTop > 40 ? this.bgStyle = 1 : this.bgStyle = 0
            },
            methods: {
              changeTab: function(e) {
                this.checkedTabId = e
              },
              getUseRecord: function(t) {
                var n = this;
                return (0, o.default)(a.default.mark((function r() {
                  var c;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return r.next = 2, (0, u.getUseRecordApi)({
                          userYearCardId: t
                        });
                      case 2:
                        if (1 === (c = r.sent).code) {
                          r.next = 5;
                          break
                        }
                        return r.abrupt("return", e.showToast({
                          title: c.msg,
                          icon: "none"
                        }));
                      case 5:
                        n.useRecord = c.data;
                      case 6:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              getAppointmentRecord: function(t) {
                var n = this;
                return (0, o.default)(a.default.mark((function r() {
                  var c;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return r.next = 2, (0, u.getAppointmentRecordApi)({
                          userYearCardId: t
                        });
                      case 2:
                        if (1 === (c = r.sent).code) {
                          r.next = 5;
                          break
                        }
                        return r.abrupt("return", e.showToast({
                          title: c.msg,
                          icon: "none"
                        }));
                      case 5:
                        n.appointmentRecord = c.data.map((function(e) {
                          return i(i({}, e), {}, {
                            cWeek: (0, f.continueWeek)(e.dateCanUse),
                            cDays: (0, f.continueDays)(e.dateCannotUse)
                          })
                        }));
                      case 6:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              },
              getBaseInfo: function(t) {
                var n = this;
                return (0, o.default)(a.default.mark((function r() {
                  var c;
                  return a.default.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                      case 0:
                        return r.next = 2, (0, u.getBaseInfoApi)({
                          userYearCardId: t
                        });
                      case 2:
                        if (1 === (c = r.sent).code) {
                          r.next = 5;
                          break
                        }
                        return r.abrupt("return", e.showToast({
                          title: c.msg,
                          icon: "none"
                        }));
                      case 5:
                        n.baseInfo = i(i({}, c.data), {}, {
                          effectiveStartDate: c.data.effectiveStartDate ? c.data.effectiveStartDate.replace(/-/g, "/") : "",
                          effectiveEndDate: c.data.effectiveEndDate ? c.data.effectiveEndDate.replace(/-/g, "/") : ""
                        });
                      case 6:
                      case "end":
                        return r.stop()
                    }
                  }), r)
                })))()
              }
            }
          };
        t.default = l
      }).call(this, n("df3c").default)
    },
};
