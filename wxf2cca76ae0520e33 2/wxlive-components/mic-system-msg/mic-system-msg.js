module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/8.js"), require("../../_commons/9.js"), require("../../_commons/21.js"), {
  ids: [71],
  modules: {
    428: function(e, s, r) {
      r.r(s);
      var o = r(5);
      Component({
        behaviors: [o.a],
        properties: {
          micPanelMode: {
            type: Number,
            value: -1
          },
          leftTime: {
            type: Number,
            value: 60
          }
        },
        data: {
          componentName: "micSystemMsg",
          linkMicType: 0,
          isClearScreen: !1
        },
        methods: {
          onMicSystemMsgTap: function() {
            this.data.triggerMicMsgTap || (this.data.triggerMicMsgTap = !0, this.storeSetData({
              showMicPanel: !0
            }), this.data.triggerMicMsgTap = !1)
          }
        }
      })
    },
    82: function(e, s, r) {
      e.exports = r(428)
    }
  },
  entries: [
    [82, 0, 1, 3, 6, 2, 4, 5, 7, 8, 9, 21]
  ]
}]);
