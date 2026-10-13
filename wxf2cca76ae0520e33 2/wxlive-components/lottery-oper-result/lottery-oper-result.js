module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/15.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/9.js"), require("../../_commons/12.js"), require("../../_commons/17.js"), require("../../_commons/24.js"), {
  ids: [64],
  modules: {
    316: function(e, t, o) {
      o.r(t);
      var r = o(5),
        s = o(23),
        i = o(0),
        n = o(2);
      Component({
        behaviors: [r.a, s.a],
        properties: {
          roomId: {
            type: Number,
            value: 0
          },
          roomAppid: {
            type: String,
            value: ""
          },
          screenType: {
            type: String,
            value: ""
          },
          lotteryPush: {
            type: Object,
            value: {}
          },
          myLotteryTeamMembers: {
            type: Array,
            value: []
          },
          curLotteryLuckMen: {
            type: Array,
            value: []
          }
        },
        data: {
          showLowVersionFillPhone: !1,
          lastFillAddressTime: "",
          isJoinedLotteryTeam: !1
        },
        observers: {
          lotteryPush: function(e) {
            this.setData({
              lastFillAddressTime: n.a.lastFillAddressTime(e.end_time)
            })
          },
          myLotteryTeamMembers: function(e) {
            if (e && e.length) {
              var t = this.data,
                o = t.roomAppid,
                r = t.roomId,
                s = t.lotteryPush;
              if (2 == +s.participate_type) {
                var i = !!wx.getStorageSync("isOnShare-".concat(o, "-").concat(r, "-").concat(s.id)),
                  n = 1 !== e.length || i;
                this.setData({
                  isJoinedLotteryTeam: n
                })
              }
            }
          }
        },
        methods: {
          onCopy: function(e) {
            this.triggerEvent("lotteryevent", {
              eventName: "onCopy",
              token: e.currentTarget.dataset.token || ""
            })
          },
          onClickAddress: function() {
            var e = this.data.lotteryPush;
            !e.isFillLotteryAddress && Date.now() / 1e3 - e.end_time > i.a.MAX_FILL_LOTTERY_ADDRESS_TIME ? wx.showToast({
              title: "开奖已超过 24 小时，未填写寄奖地址，已视为放弃",
              icon: "none"
            }) : this.triggerEvent("lotteryevent", {
              eventName: "onClickLotteryAddress"
            })
          },
          onClickPhone: function() {
            var e = this.data.lotteryPush;
            !e.isFillLotteryPhone && Date.now() / 1e3 - e.end_time > i.a.MAX_FILL_LOTTERY_ADDRESS_TIME ? wx.showToast({
              title: "开奖已超过 24 小时，未填写手机号，已视为放弃",
              icon: "none"
            }) : (this.liveManager.addReportMMData({
              actionType: 4,
              subActionType: 25,
              lotteryId: e.id,
              lotteryParticipateType: e.participate_type
            }), "horizontal" === this.data.screenType && this.liveManager.setPageOrientation("portrait"), this.storeSetData({
              showLowVersionFillPhone: !0,
              fillPhoneLotteryPush: e,
              isFillHelpRankPhone: !1
            }))
          }
        }
      })
    },
    68: function(e, t, o) {
      e.exports = o(316)
    }
  },
  entries: [
    [68, 0, 1, 3, 6, 15, 2, 4, 5, 7, 9, 12, 17, 24]
  ]
}]);
