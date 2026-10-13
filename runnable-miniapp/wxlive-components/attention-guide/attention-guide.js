module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/8.js"), {
  ids: [47],
  modules: {
    380: function(e, o, t) {
      t.r(o);
      var n = t(5);
      Component({
        behaviors: [n.a],
        data: {
          componentName: "attentionGuide",
          screenType: "",
          showAttentionGuide: !1,
          isRecommendShow: !1
        },
        methods: {
          isRecommendShowObserver: function(e) {
            console.log("isRecommendShow", e)
          },
          attentionGuideOk: function() {
            this.addReportMMData({
              actionType: 4,
              subActionType: 35
            }), this.storeSetData({
              showAttentionGuide: !1,
              isTipedAttentionGuide: 1
            })
          },
          onAttentionGuideClose: function() {
            this.storeSetData({
              showAttentionGuide: !1,
              isTipedAttentionGuide: 1
            })
          }
        }
      })
    },
    76: function(e, o, t) {
      e.exports = t(380)
    }
  },
  entries: [
    [76, 0, 1, 3, 6, 2, 4, 5, 7, 8]
  ]
}]);
