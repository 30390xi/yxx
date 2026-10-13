module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/9.js"), {
  ids: [73],
  modules: {
    452: function(t, e, o) {
      o.r(e);
      var i = o(0),
        s = o(1),
        n = o(5);
      Component({
        behaviors: [n.a],
        data: {
          componentName: "noticeToptips",
          noticeInfo: {}
        },
        detached: function() {
          clearTimeout(this._timer)
        },
        methods: {
          onStoreDataReady: function() {
            var t = this,
              e = this.storeData.noticeInfo,
              o = 1e3 * Math.max(0, e.end_time - this.liveManager.getServerTime());
            this._timer = setTimeout((function() {
              t.storeSetData({
                showNoticeToptips: !1
              })
            }), o)
          },
          close: function() {
            var t = this.storeData.noticeInfo;
            if (2 == t.type) {
              var e = this.storeData.cacheCloseNoticeMsgIdList || [];
              e.push(this.storeData.noticeInfo.msg_id), this.storeSetData({
                cacheCloseNoticeMsgIdList: e,
                showNoticeToptips: !1
              })
            } else if (1 == t.type) {
              var o = this.storeData.officeNoticeMsgIdList || [];
              o.push(this.storeData.noticeInfo.msg_id), this.storeSetData({
                officeNoticeMsgIdList: o,
                showNoticeToptips: !1
              })
            }
          },
          navigateToMiniProgramSucc: function() {},
          navigateToMiniProgramFail: function() {},
          navigateToUrl: function() {
            var t = this.storeData.noticeInfo,
              e = t.jump_type,
              o = t.jump_url;
            t.jump_appid, e == i.a.ACTIVITY_JUMP_TYPE.H5 && s.a.openUrl({
              url: o,
              success: function() {},
              fail: function() {}
            })
          }
        }
      })
    },
    85: function(t, e, o) {
      t.exports = o(452)
    }
  },
  entries: [
    [85, 0, 1, 3, 6, 2, 4, 5, 7, 9]
  ]
}]);
