module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/8.js"), {
  ids: [54],
  modules: {
    276: function(e, o, r) {
      r.r(o);
      var s = r(5),
        i = r(0);
      Component({
        behaviors: [s.a],
        data: {
          componentName: "endBlock",
          from: "",
          liveDuration: "",
          hideLike: !1,
          hideComment: !1,
          hideStore: !1,
          hideReplay: !1,
          isGetReplayUrl: !1,
          isBgMeeting: !1,
          isGovernment: !1,
          screenType: "",
          watchPvTotalWording: 0,
          commentPvTotalWording: 0,
          likeTotalWording: 0,
          clickPvTotalWording: 0,
          sharePvTotalWording: 0
        },
        methods: {
          clickReplay: function() {
            this.storeSetData({
              curLiveStatusCode: i.a.LIVE_STATUS.REPLAY,
              showReplay: !0,
              allCommentList: [],
              msgIdMap: {},
              goodsRecordFrom: 0,
              historyCommentList: []
            })
          }
        }
      })
    },
    63: function(e, o, r) {
      e.exports = r(276)
    }
  },
  entries: [
    [63, 0, 1, 3, 6, 2, 4, 5, 7, 8]
  ]
}]);
