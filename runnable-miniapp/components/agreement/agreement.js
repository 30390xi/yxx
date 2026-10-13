module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), {
  ids: [2],
  modules: {
    23: function(e, t, o) {
      e.exports = o(66)
    },
    66: function(e, t, o) {
      "use strict";
      o.r(t);
      var s = o(2);
      Component({
        options: {
          styleIsolation: "isolated"
        },
        properties: {
          show: {
            type: Boolean,
            value: !1
          },
          agreement: {
            type: String,
            value: ""
          },
          title: {
            type: String,
            value: ""
          }
        },
        data: {
          platform: s.a.platform
        },
        lifetimes: {},
        methods: {
          onTapClose: function() {
            this.setData({
              show: !1
            }), this.triggerEvent("close")
          },
          onTapIconClose: function() {
            this.setData({
              show: !1
            }), this.triggerEvent("iconClose")
          }
        }
      })
    }
  },
  entries: [
    [23, 0, 1]
  ]
}]);
