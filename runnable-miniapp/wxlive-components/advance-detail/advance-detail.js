module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/16.js"), {
  ids: [45],
  modules: {
    460: function(e, o, i) {
      i.r(o);
      var r = i(5),
        s = i(22);
      Component({
        behaviors: [r.a, s.a],
        data: {
          componentName: "advanceDetail",
          previewType: 0,
          previewImgUrl: "",
          previewText: "",
          previewVideoUrl: "",
          previewVideoVid: -1,
          previewAuditStatus: 0,
          roomTitle: "",
          countdownTimeContent: "",
          isSubscribe: !1
        },
        methods: {
          closeAdvanceDetail: function() {
            this.storeSetData({
              showAdvanceDetail: !1
            })
          },
          onUnsubscribe: function() {
            this.previewUnsubscribe()
          },
          onSubscribe: function() {
            this.previewSubscribe()
          }
        }
      })
    },
    86: function(e, o, i) {
      e.exports = i(460)
    }
  },
  entries: [
    [86, 0, 1, 3, 6, 2, 4, 5, 7, 16]
  ]
}]);
