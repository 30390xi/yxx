module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/8.js"), require("../../_commons/9.js"), require("../../_commons/11.js"), require("../../_commons/21.js"), {
  ids: [60],
  modules: {
    492: function(e, t, n) {
      n.r(t);
      var o = n(7),
        r = n.n(o),
        a = n(0),
        i = n(1),
        s = n(5),
        c = n(15);

      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, o)
        }
        return n
      }

      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? u(Object(n), !0).forEach((function(t) {
            r()(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      Component({
        behaviors: [s.a, c.a],
        props: {
          isStatic: {
            type: Boolean,
            default: !1
          }
        },
        data: {
          componentName: "helpListEntr",
          from: "",
          myRankInfo: {},
          helpRankRankNickname: "",
          helpRankPanelShow: !1,
          helpRulePanelShow: !1,
          helpRankSuccee: !1,
          helpRankStatus: 0,
          helpRankLastTime: "",
          helpRankLeftTime: "",
          helpRankLoadingPolygon: "50% 50%, 0% 0%, 0% 0%",
          curLiveStatusCode: "",
          isClearScreen: !1,
          _helpRankTipsCountTime: 0,
          _helpRankTipsSuccee: !1
        },
        methods: {
          rankNicknameObserver: function(e) {
            if (e) {
              var t = e.length > 3 ? "".concat(e.substr(0, 3), "...") : e;
              this.setData({
                helpRankRankNickname: t
              })
            }
          },
          helpRankLeftTimeObserver: function(e) {
            var t, n = e,
              o = this.data.helpRankLastTime,
              r = (t = parseInt((o - n) / o * 100), Math.floor(t - t % 10));
            this.setData({
              helpRankLoadingPolygon: r
            })
          },
          helpRankSucceeObserver: function(e) {
            e && this.handleHelpRankCountTime(3)
          },
          handleHelpRankCountTime: function(e) {
            var t = this;
            if (e <= 0) return this.storeSetData({
              _helpRankTipsCountTime: 0,
              _helpRankTipsSuccee: !0
            }), void setTimeout((function() {
              t.storeSetData({
                _helpRankTipsSuccee: !1
              })
            }), 3e3);
            this.storeData.curLiveStatusCode !== a.a.LIVE_STATUS.END && (this.storeSetData({
              _helpRankTipsCountTime: e
            }), clearTimeout(this.lotteryCountTime), this.lotteryCountTime = setTimeout((function() {
              e--, t.handleHelpRankCountTime(e)
            }), 1e3))
          },
          openHelpListPanel: function() {
            var e = this,
              t = this.storeData,
              n = (t.from, t.screenType),
              o = t.myRankInfo,
              r = t.myRankScore;
            this.liveManager.getUserInfo().then((function(t) {
              "horizontal" === n && e.liveManager.setPageOrientation("portrait"), o.isExist ? e.storeSetData({
                helpRankPanelShow: !0
              }) : e.storeSetData({
                helpRankPanelShow: !0,
                myRankInfo: p(p({}, t), {}, {
                  score: r
                })
              })
            })).catch((function(e) {
              i.a.tipsSimple("授权失败，无法打开助力榜")
            }))
          }
        }
      })
    },
    90: function(e, t, n) {
      e.exports = n(492)
    }
  },
  entries: [
    [90, 0, 1, 3, 6, 2, 4, 5, 7, 8, 9, 11, 21]
  ]
}]);
