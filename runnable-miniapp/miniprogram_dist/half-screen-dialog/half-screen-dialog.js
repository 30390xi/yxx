module.exports = require("../../_commons/0.js")([{
  ids: [38],
  modules: {
    340: function(e, t) {
      Component({
        options: {
          multipleSlots: !0,
          addGlobalClass: !0
        },
        properties: {
          closabled: {
            type: Boolean,
            value: !0
          },
          title: {
            type: String,
            value: ""
          },
          subTitle: {
            type: String,
            value: ""
          },
          extClass: {
            type: String,
            value: ""
          },
          desc: {
            type: String,
            value: ""
          },
          tips: {
            type: String,
            value: ""
          },
          maskClosable: {
            type: Boolean,
            value: !0
          },
          mask: {
            type: Boolean,
            value: !0
          },
          isMaskFill: {
            type: Boolean,
            value: !1
          },
          maskZIndex: {
            type: Number,
            value: -1
          },
          show: {
            type: Boolean,
            value: !1,
            observer: "_showChange"
          },
          buttons: {
            type: Array,
            value: []
          },
          screenType: {
            type: String,
            value: "vertical"
          }
        },
        methods: {
          close: function(e) {
            var t = e.currentTarget.dataset.type;
            (this.data.maskClosable || "close" === t) && (this.setData({
              show: !1
            }), this.triggerEvent("close"))
          },
          buttonTap: function(e) {
            var t = e.currentTarget.dataset.index;
            this.triggerEvent("buttontap", {
              index: t,
              item: this.data.buttons[t]
            }, {})
          },
          isHasSafeBar: function() {
            var e = wx.getSystemInfoSync().model;
            return /iphone\sx/i.test(e) || /iphone/i.test(e) && /unknown/.test(e) || /iphone\s11/i.test(e)
          }
        },
        lifetimes: {
          attached: function() {
            this.setData({
              isIPhoneX: this.isHasSafeBar()
            })
          }
        }
      })
    },
    71: function(e, t, s) {
      e.exports = s(340)
    }
  },
  entries: [
    [71, 0]
  ]
}]);
