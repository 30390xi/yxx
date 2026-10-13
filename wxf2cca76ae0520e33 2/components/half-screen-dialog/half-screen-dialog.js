module.exports = require("../../_commons/0.js")([{
  ids: [3],
  modules: {
    21: function(e, t, o) {
      e.exports = o(50)
    },
    50: function(e, t) {
      Component({
        options: {
          multipleSlots: !0,
          styleIsolation: "isolated"
        },
        properties: {
          closabled: {
            type: Boolean,
            value: !0
          },
          closeType: {
            type: String,
            value: ""
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
          show: {
            type: Boolean,
            value: !1,
            filter: "_showChange"
          },
          showHeader: {
            type: Boolean,
            value: !0
          },
          showFooter: {
            type: Boolean,
            value: !0
          },
          buttons: {
            type: Array,
            value: []
          }
        },
        data: {
          wrapperShow: !1,
          innerShow: !1
        },
        lifetimes: {
          ready: function() {
            this._showChange(this.data.show)
          }
        },
        methods: {
          _showChange: function(e) {
            var t = this;
            e ? this.setData({
              wrapperShow: !0,
              innerShow: !0
            }) : (this.setData({
              innerShow: !1
            }), setTimeout((function() {
              t.properties.show || t.setData({
                wrapperShow: !1
              })
            }), 300))
          },
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
          onMaskMouseMove: function() {}
        }
      })
    }
  },
  entries: [
    [21, 0]
  ]
}]);
