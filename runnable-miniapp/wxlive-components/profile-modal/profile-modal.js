module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/8.js"), require("../../_commons/9.js"), require("../../_commons/13.js"), require("../../_commons/28.js"), {
  ids: [80],
  modules: {
    229: function(o, e, t) {
      t.r(e);
      var i = t(5),
        r = t(34);
      Component({
        behaviors: [i.a, r.a],
        properties: {
          isShow: {
            type: Boolean,
            default: !1
          }
        },
        data: {
          componentName: "profileModal",
          from: "",
          weappName: "",
          weappImg: "",
          roomTitle: "",
          watchCntWording: 0,
          anchorName: "",
          showFollowV2: !1,
          isAttention: !1,
          isSubscribe: "",
          screenType: "-1",
          isPushStream: !1,
          isPC: !1,
          dataIsShow: !1,
          profileExtRoomList: [],
          _tmpClosePictureInPictureMode: !1,
          isNavigateToExtRoom: !1
        },
        observers: {
          isShow: function() {
            this.setData({
              dataIsShow: this.data.isShow
            })
          }
        },
        pageLifetimes: {
          show: function() {
            if (this.data.isNavigateToExtRoom) {
              var o = this.data._tmpClosePictureInPictureMode;
              this.storeSetData({
                closePictureInPictureMode: o,
                isNavigateToExtRoom: !1
              })
            }
          },
          hide: function() {}
        },
        methods: {
          onStoreDataReady: function() {},
          onClose: function() {
            var o = this;
            this.setData({
              dataIsShow: !1
            }), setTimeout((function() {
              o.storeSetData({
                showProfileModal: !1
              })
            }), 200)
          },
          onReportRoom: function() {
            this.storeSetData({
              pictureInPictureMode: "",
              isForbidReportEnter: !0
            }), this.addReportMMData({
              actionType: 4,
              subActionType: 1
            }), wx.navigateTo({
              url: (this.storeData.urlPathPrefix || "/") + "wxlive-components/ext-player/complaint-room/complaint-room",
              fail: function(o) {
                _this.logError("wx.navigateTo complaint_room fail", o)
              }
            })
          },
          onExtRoomClick: function(o) {
            var e = this,
              t = o.currentTarget.dataset.roomid;
            this.storeSetData({
              _tmpClosePictureInPictureMode: this.storeData.closePictureInPictureMode,
              closePictureInPictureMode: !0,
              isNavigateToExtRoom: !0
            }, (function() {
              var o = "".concat(e.getShareArgs(), "&close_picture_in_picture_pop=1&replay_navigate_back=1").replace(/room_id=\d+\&/, "room_id=".concat(t, "&"));
              console.log("goto new room share args is", o);
              var i = e;
              e.addReportMMData({
                actionType: 4,
                subActionType: 49
              }), setTimeout((function() {
                wx.navigateTo({
                  url: "".concat(e.storeData.urlPathPrefix || "/", "pages/live-player-plugin?").concat(o),
                  success: function(o) {},
                  fail: function(e) {
                    i.logError("navigate fail, ".concat(e)), e.errMsg && e.errMsg.indexOf("page limit exceeded") > -1 && wx.redirectTo({
                      url: "".concat(i.storeData.urlPathPrefix || "/", "pages/live-player-plugin?").concat(o)
                    })
                  }
                })
              }), 100)
            }))
          }
        }
      })
    },
    57: function(o, e, t) {
      o.exports = t(229)
    }
  },
  entries: [
    [57, 0, 1, 3, 6, 2, 4, 5, 7, 8, 9, 13, 28]
  ]
}]);
