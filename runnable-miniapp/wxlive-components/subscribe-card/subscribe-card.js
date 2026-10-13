module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/9.js"), require("../../_commons/16.js"), {
  ids: [85],
  modules: {
    284: function(e, o, r) {
      r.r(o);
      var i = r(5),
        s = r(22);
      Component({
        behaviors: [i.a, s.a],
        data: {
          componentName: "subscribeCard",
          roomTitle: "",
          isSubscribe: !1,
          countdownTimeContent: "",
          roomStartTime: 0,
          isGovernment: !1
        },
        lifetimes: {
          attached: function() {},
          detached: function() {
            clearTimeout(this.timer)
          }
        },
        methods: {
          onUnsubscribe: function() {
            this.previewUnsubscribe()
          },
          onSubscribe: function() {
            this.previewSubscribe()
          },
          roomStartTimeObserver: function(e) {
            if (e) {
              var o = this.liveManager.getServerTime();
              o >= e ? this.storeSetData({
                countdownTimeContent: ""
              }) : this.startPreviewCountdownTime(Math.ceil(e - o))
            }
          }
        }
      })
    },
    64: function(e, o, r) {
      e.exports = r(284)
    }
  },
  entries: [
    [64, 0, 1, 3, 6, 2, 4, 5, 7, 9, 16]
  ]
}]);
