module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/15.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/12.js"), require("../../_commons/17.js"), require("../../_commons/23.js"), {
  ids: [63],
  modules: {
    332: function(e, o, i) {
      i.r(o);
      var s = i(5),
        t = i(23),
        n = i(26),
        h = i(1);
      Component({
        behaviors: [s.a, t.a, n.a],
        data: {
          helpRankRankId: "",
          isFillHelpRankPhone: !1,
          showLowVersionFillPhone: !1,
          phone: ""
        },
        lifetimes: {
          attached: function() {
            this._keyboardHeight = 0
          }
        },
        methods: {
          onFocusFillPhone: function(e) {
            this._keyboardHeight = Math.max(this._keyboardHeight, e.detail.height), this.setData({
              keyboardHeight: this._keyboardHeight
            })
          },
          onKeyboardHeightChange: function(e) {
            this._keyboardHeight = Math.max(this._keyboardHeight, e.detail.height), this.setData({
              keyboardHeight: this._keyboardHeight
            })
          },
          onInputFillPhone: function(e) {
            this.setData({
              phone: e.detail.value
            })
          },
          onConfirmFillPhone: function() {
            var e = this.data,
              o = e.phone,
              i = e.helpRankRankId,
              s = e.isFillHelpRankPhone,
              t = this.storeData.fillPhoneLotteryPush;
            o.length >= 8 && o.length <= 11 ? (this.storeSetData({
              showLowVersionFillPhone: !1
            }), s ? this.fillHelpRankAddress({
              address: {},
              phone: o
            }, i) : this.fillLotteryAddress({
              address: {},
              phone: o
            }, t.id)) : (this.storeSetData({
              showLowVersionFillPhone: !0
            }), h.a.tipsSimple("请输入正确的手机号"))
          },
          onCloseFillPhone: function() {
            this.storeSetData({
              showLowVersionFillPhone: !1
            })
          }
        }
      })
    },
    70: function(e, o, i) {
      e.exports = i(332)
    }
  },
  entries: [
    [70, 0, 1, 3, 6, 15, 2, 4, 5, 7, 12, 17, 23]
  ]
}]);
