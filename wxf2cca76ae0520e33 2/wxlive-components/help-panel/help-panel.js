module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/23.js"), {
  ids: [61],
  modules: {
    500: function(e, t, n) {
      n.r(t);
      var a = n(0),
        i = n(2),
        o = n(5),
        s = n(26);
      Component({
        behaviors: [o.a, s.a],
        data: {
          componentName: "helpPanel",
          from: "player",
          myRankScore: 0,
          myRankInfo: {},
          helpRankPanelShow: !1,
          helpRulePanelShow: !1,
          helpRankCountTime: "",
          helpRankLeftTime: "",
          helpRankIsDelete: 0,
          helpRankStatus: 0,
          helpRankList: [],
          helpRankGiftList: [],
          helpRankGiftCount: 0,
          helpRankChineseGiftCount: "",
          helpRankRankId: "",
          helpRankRedeem: 1,
          helpRankAwardList: [],
          helpRankInviteUV: 0,
          helpRankInvitedUV: 0,
          helpRankInviterankUV: 0,
          helpRankLastFillAddressTime: "",
          helpRankAddress: {},
          helpRankEndTime: "",
          isFillHelpRankAddress: !1,
          isFillHelpRankPhone: !1,
          curOpenid: "",
          screenType: "",
          curLiveStatusCode: "",
          _firstEnter: !0,
          _myRank: ""
        },
        liveStore: {
          observers: {
            roomDynamicInfo: function(e) {
              var t = this;
              try {
                var n = this.storeData,
                  a = n.helpRankRankId,
                  i = n.helpRankEndTime,
                  o = e.rank_list && e.rank_list.rank_info,
                  s = o && o.status,
                  r = o && o.end_time || i;
                o && s > 0 && this.handleHelpRank(e), 1 === s && this.data._firstEnter && setTimeout((function() {
                  t.handleHelpRankCountTime(a, r)
                }), 100)
              } catch (e) {
                this.logError("[助力榜] roomDynamicInfoObserver logic error", e)
              }
            },
            myRankInfo: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              e.rank && e.rank < this.data.helpRankAwardList.length + 1 && this.setData({
                _myRank: this.toChinesNum(e.rank)
              })
            },
            helpRankGiftCount: function(e) {
              e && this.setData({
                helpRankChineseGiftCount: this.toChinesNum(e)
              })
            }
          }
        },
        attached: function() {
          this.uiHackSafeBottom()
        },
        detached: function() {
          clearTimeout(this.helpRankCountTimer)
        },
        methods: {
          uiHackSafeBottom: function() {
            var e = wx.getSystemInfoSync();
            e.screenHeight - e.safeArea.bottom == 0 ? this.setData({
              uiIsHasSafeBottom: !1
            }) : this.setData({
              uiIsHasSafeBottom: !0
            })
          },
          handleHelpRankCountTime: function(e, t) {
            var n = this,
              o = t - this.liveManager.getServerTime();
            if (o <= 0) this.storeSetData({
              helpRankLeftTime: o
            });
            else if (this.storeData.curLiveStatusCode !== a.a.LIVE_STATUS.END) {
              var s = i.a.formatHelpRankCountTime(o);
              this.storeSetData({
                helpRankCountTime: s,
                helpRankLeftTime: o
              }), clearTimeout(this.helpRankCountTimer), this.helpRankCountTimer = setTimeout((function() {
                n.handleHelpRankCountTime(e, t)
              }), 1e3)
            }
          },
          onOpenHelpRulePanel: function() {
            var e = this;
            this.uiHackSafeBottom(), setTimeout((function() {
              e.storeSetData({
                helpRankPanelShow: !1,
                helpRulePanelShow: !0
              })
            }), 200)
          },
          onCloseHelpRulePanel: function() {
            this.storeSetData({
              helpRankPanelShow: !1,
              helpRulePanelShow: !1
            })
          }
        }
      })
    },
    91: function(e, t, n) {
      e.exports = n(500)
    }
  },
  entries: [
    [91, 0, 1, 3, 6, 2, 4, 5, 7, 23]
  ]
}]);
