module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), {
  ids: [48],
  modules: {
    420: function(e, o, s) {
      s.r(o);
      var t = s(5);
      Component({
        behaviors: [t.a],
        properties: {},
        data: {
          componentName: "autoReplyPanel",
          isShowAutoReplySettingPanel: !1,
          isDisableAutoReply: !1,
          screenType: ""
        },
        observers: {},
        methods: {
          onCloseEvent: function(e) {
            e.detail.close && this.storeSetData({
              isShowAutoReplySettingPanel: !1
            })
          },
          switch2Change: function(e) {
            this.storeSetData({
              isDisableAutoReply: !this.storeData.isDisableAutoReply
            })
          }
        }
      })
    },
    81: function(e, o, s) {
      e.exports = s(420)
    }
  },
  entries: [
    [81, 0, 1, 3, 6, 2, 4, 5, 7]
  ]
}]);
