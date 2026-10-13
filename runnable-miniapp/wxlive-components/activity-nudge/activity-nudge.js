module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), {
  ids: [44],
  modules: {
    436: function(e, t, n) {
      n.r(t);
      var i = n(0),
        a = n(5);
      Component({
        behaviors: [a.a],
        data: {
          componentName: "nudgeList",
          screenType: "",
          isBgMeeting: !1,
          fadeIn: !1,
          content: "",
          nudgeWithMe: !1,
          nudgeAnimationTime: 2500,
          nudgeInfo: {},
          nudgeTimer: "",
          nudgeSortList: [],
          allNudgeList: []
        },
        detached: function() {
          this.clearTimer()
        },
        methods: {
          clearTimer: function() {
            clearInterval(this.data.nudgeTimer), this.data.nudgeTimer = null
          },
          roomDynamicInfoObserver: function(e) {
            var t = this;
            try {
              var n = this.storeData,
                a = n.hideNudge,
                s = n.curLiveStatusCode,
                r = n.showRecord;
              if (a || s !== i.a.LIVE_STATUS.LIVE || r) return;
              var u = e.nudges && e.nudges.list || [];
              u.length > 0 && (u.forEach((function(e) {
                var n = e.version,
                  a = e.sub_action_type;
                a === i.a.NUDGE.ANCHOR_NUDGE_AUDIENCE ? t.storeSetDataNoSync({
                  anchorNudgeAudienceVersion: n
                }) : a === i.a.NUDGE.AUDIENCE_NUDGE_AUDIENCE ? t.storeSetDataNoSync({
                  audienceNudgeAudienceVersion: n
                }) : a === i.a.NUDGE.AUDIENCE_NUDGE_ANCHOR && t.storeSetDataNoSync({
                  audienceNudgeAnchorVersion: n
                })
              })), this.logInfo("[拍一拍弹幕列表]", u), this.updateNudgeList(u))
            } catch (e) {
              this.logError("[nudges] roomDynamicInfoObserver logic error", e), this.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
            }
          },
          nudgeListObserver: function(e) {
            this.updateNudgeList(e)
          },
          updateNudgeList: function(e) {
            var t = this;
            this.data.allNudgeList = this.data.allNudgeList.filter((function(e) {
              return !e.overtime && !e.isSelfSend
            }));
            var n = this.data.nudgeSortList;
            e.forEach((function(e) {
              t.data.allNudgeList.filter((function(t) {
                return t.version === e.version && e.sub_action_type === t.sub_action_type
              })).length || e.overtime || (n.push(e), t.data.allNudgeList.push(e))
            }));
            var a = n.filter((function(e) {
                return !!e.isSelfSend
              })),
              s = n.filter((function(e) {
                return !e.isSelfSend && e.sub_action_type == i.a.NUDGE.ANCHOR_NUDGE_AUDIENCE
              })),
              r = n.filter((function(e) {
                return !e.isSelfSend && e.sub_action_type == i.a.NUDGE.AUDIENCE_NUDGE_AUDIENCE
              })),
              u = n.filter((function(e) {
                return !e.isSelfSend && e.sub_action_type == i.a.NUDGE.AUDIENCE_NUDGE_ANCHOR
              }));
            n = a.concat(s).concat(r).concat(u), this.data.nudgeSortList = n, n.length > 0 && this.updateNudge()
          },
          updateNudge: function() {
            var e = this;
            this.data.nudgeTimer || this.data.fadeIn || this.updateInterval(), this.data.nudgeSortList && this.data.nudgeSortList.length > 0 && !this.data.nudgeTimer && !this.data.fadeIn && (this.clearTimer(), this.data.nudgeTimer = setInterval((function() {
              e.updateInterval()
            }), 2 * this.data.nudgeAnimationTime))
          },
          updateInterval: function() {
            var e = this.data.nudgeSortList.shift();
            e ? this.updateNudgeInfo(e) : this.clearTimer()
          },
          subname: function(e) {
            return (e = e || "").length > 5 && (e = e.substr(0, 5) + "..."), e
          },
          updateNudgeInfo: function(e) {
            var t = this,
              n = "",
              a = e.sub_action_type,
              s = e.cnt,
              r = e.isSelfSend || !1,
              u = this.subname(e.first_user_nickname);
            if (this.storeData.userType, i.a.PUSHER_USER_TYPE.SUB_ANCHOR, this.setData({
                nudgeWithMe: !!e.nudge_me
              }), a === i.a.NUDGE.ANCHOR_NUDGE_AUDIENCE) {
              var o = e.nudge_me ? "我" : ' "' + u + '" ';
              this.storeData.isAnchorApp ? (o = e.nudge_me ? "自己" : ' "' + u + '" ', n = s > 1 ? "主播拍了拍" + o + "和其他" + (s - 1) + "人" : "我拍了拍" + o) : n = s > 1 ? "主播拍了拍" + o + "和其他" + (s - 1) + "人" : "主播拍了拍" + o
            } else n = a === i.a.NUDGE.AUDIENCE_NUDGE_ANCHOR ? s > 1 ? e.nudge_me ? '"' + u + '"和其他' + (s - 1) + "人一起拍了拍我" : s + "人一起拍了拍主播" : r ? "我拍了拍主播" : e.nudge_me ? '"' + u + '" 拍了拍我' : '"' + u + '" 拍了拍主播' : a === i.a.NUDGE.AUDIENCE_NUDGE_AUDIENCE ? s > 1 ? e.nudge_me ? '"' + u + '"和其他' + (s - 1) + "人一起拍了拍我" : s >= 3 && !e.nudge_me ? s + "人一起拍了拍" + e.user_nickname : s + "人拍了拍" + e.user_nickname : r ? '我拍了拍 "' + u + '"' : '"' + u + '"拍了拍我' : "我拍了拍自己";
            var d = new Date;
            this.logWarn("nudge content is", d.getMinutes(), ":", d.getSeconds(), a, s, r, e.nudge_me, u, n), this.setData({
              fadeIn: !0,
              content: n
            }), setTimeout((function() {
              t.data.fadeIn && (t.setData({
                fadeIn: !1
              }), t.updateNudge())
            }), this.data.nudgeAnimationTime)
          }
        }
      })
    },
    83: function(e, t, n) {
      e.exports = n(436)
    }
  },
  entries: [
    [83, 0, 1, 3, 6, 2, 4, 5, 7]
  ]
}]);
