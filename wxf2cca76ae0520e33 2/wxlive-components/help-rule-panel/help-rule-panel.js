module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), {
  ids: [62],
  modules: {
    516: function(e, o, n) {
      n.r(o);
      var s = n(5);
      Component({
        behaviors: [s.a],
        data: {
          componentName: "helpRulePanel",
          from: "player",
          helpRankPanelShow: !1,
          helpRulePanelShow: !1
        },
        methods: {
          onCloseHelpRulePanel: function(e) {
            "back" === e.detail.type ? this.storeSetData({
              helpRankPanelShow: !0,
              helpRulePanelShow: !1
            }) : this.storeSetData({
              helpRankPanelShow: !1,
              helpRulePanelShow: !1
            })
          }
        }
      })
    },
    93: function(e, o, n) {
      e.exports = n(516)
    }
  },
  entries: [
    [93, 0, 1, 3, 6, 2, 4, 5, 7]
  ]
}]);
