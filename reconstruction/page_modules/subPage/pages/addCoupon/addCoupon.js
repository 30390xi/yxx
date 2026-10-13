// Extracted from subPage/pages/addCoupon/addCoupon.js; webpack module a43b.
// Compiled code for analysis; not an original source file.
module.exports = {
    a43b: function(t, i, e) {
      (function(t) {
        Object.defineProperty(i, "__esModule", {
          value: !0
        }), i.default = void 0;
        var e = {
          data: function() {
            return {
              show: !1,
              password: "",
              cardDetail: [],
              cardInfo: "",
              cardId: "",
              bindType: null,
              showTips: !1,
              showTip: !1,
              showOther: !1,
              showDetail: !1,
              unit: 0,
              showTipsImage: !1,
              tipWidth: 430,
              isSubmit: !1
            }
          },
          filters: {
            statusFilter: function(t) {
              return {
                0: "兑换到您的游陕西帐户",
                1: "该优惠券已兑换",
                2: "该优惠券已兑换",
                3: "该优惠券已过期",
                4: "该优惠券已失效",
                5: "该优惠券已兑换",
                6: "该优惠券已兑换"
              } [t]
            },
            cardTimeFilter: function(t) {
              if (!t.validityStartTime || !t.validityEndTime) return "";
              if (0 != t.useState) {
                if (0 == t.useTimeSlot || 2 == t.useTimeSlot) return t.validityStartTime.slice(0, 10) + "至" + t.validityEndTime.slice(0, 10);
                if (1 == t.useTimeSlot) return "".concat(t.validityEndTime, "前有效")
              } else {
                if (0 == t.useTimeSlot || 2 == t.useTimeSlot) return t.validityStartTime.slice(0, 10) + "至" + t.validityEndTime.slice(0, 10);
                if (1 == t.useTimeSlot) return "领券后".concat(t.useTimeSlotHour, "小时内有效")
              }
            }
          },
          onLoad: function() {
            var i = this;
            t.getSystemInfo({
              success: function(t) {
                i.unit = 750 / t.screenWidth
              }
            })
          },
          methods: {
            getUserCouponByPassword: function() {
              var i = this;
              if (this.password) {
                var e = {
                    password: this.password
                  },
                  n = this;
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/CouponReceive/getUserCouponByPassword", e).then((function(e) {
                  if (1 === e.code)
                    if (e.data) {
                      if (i.showTips = !1, i.cardInfo = e.data, 0 == e.data.isSelfActivate) return void(i.showOther = !0);
                      i.show = !0, setTimeout((function() {
                        i.$nextTick((function() {
                          var i = t.createSelectorQuery();
                          i.select("#tips-in").boundingClientRect(), i.exec((function(t) {
                            t[0].width * n.unit > 430 && (n.showTipsImage = !0, n.tipWidth = 405)
                          }))
                        }))
                      }), 100)
                    } else i.showTips = !0;
                  else i.showTips = !0
                }))
              } else this.$util.showToast("请输入兑换码")
            },
            activationUserCoupon: function() {
              var t = this;
              if (!this.isSubmit) {
                this.isSubmit = !0;
                var i = {
                  password: this.password
                };
                this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/CouponReceive/activationUserCoupon", i).then((function(i) {
                  1 === i.code ? (t.bindType = i.data, t.show = !1, t.$util.showToast("绑定成功"), t.isSubmit = !1, t.$util.prevPage(1)) : (t.isSubmit = !1, t.$util.showToast(i.msg))
                }))
              }
            },
            closePop: function() {
              this.show = !1
            },
            closeOther: function() {
              this.showOther = !1
            },
            closePopup: function() {
              this.showDetail = !1
            },
            showCoupontips: function() {
              this.showTip = !0
            }
          }
        };
        i.default = e
      }).call(this, e("df3c").default)
    },
};
