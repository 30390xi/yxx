module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/21.js"), {
  ids: [50],
  modules: {
    237: function(e, t, r) {
      r.r(t);
      var a = r(0),
        i = r(2),
        s = r(5);
      Component({
        behaviors: [s.a],
        data: {
          componentName: "barrageList",
          fadeIn: !1,
          systemTrig: {}
        },
        lifetimes: {
          attached: function() {},
          detached: function() {
            clearTimeout(this.fadeInTimer), clearTimeout(this.fadeOutTimer)
          }
        },
        methods: {
          roomDynamicInfoObserver: function(e) {
            try {
              this.handleBarrageList(e)
            } catch (e) {
              this.logError("[弹幕] logic error", e), this.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
            }
          },
          handleBarrageList: function(e) {
            var t = this,
              r = e.barrages && e.barrages.list || [],
              i = e.comm_barrages && e.comm_barrages.list || [];
            if (0 !== r.length || 0 !== i.length) {
              this.logInfo("[弹幕] 后台返回列表", r);
              var s = this.storeData.barrageMsgIdMap,
                n = [],
                o = this.storeData.systemTriggerBarrageList;
              if (i.length > 0 && 101 == this.storeData.curLiveStatusCode && (o = this.handleLinkMicBarrageList(i, o)), this.storeData.hasSkipFirstLinkMicBarrages = !0, r.length > 0 && r.forEach((function(e) {
                  try {
                    if (s[e.msg_id]) return;
                    if (s[e.msg_id] = 1, !e.msg_content || '""' === e.msg_content || !JSON.parse(e.msg_content)) return;
                    var r = JSON.parse(e.msg_content);
                    n.push({
                      nickname: r.nickname,
                      openid: r.openid,
                      content: r.content,
                      myself: r.openid === t.storeData.curOpenid,
                      msg_id: e.msg_id
                    })
                  } catch (e) {
                    t.logError("[弹幕] logic error", e), t.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
                  }
                })), this.logInfo("[弹幕] 新增", n.length), o = o.concat(n), this.barrageListSort(o), o.length > a.a.BARRAGE_LIMIT_SAVE_CNT) {
                o = o.slice(0, a.a.BARRAGE_LIMIT_SAVE_CNT);
                var c = {};
                o.forEach((function(e) {
                  c[e.msg_id] = 1
                })), this.storeData.barrageMsgIdMap = c
              }
              this.storeData.systemTriggerBarrageList = o, this.updateView()
            }
          },
          barrageListSort: function(e) {
            e.sort((function(e, t) {
              return e.myself && t.myself ? 0 : e.myself ? -1 : t.myself ? 1 : e.linkMic && t.linkMic ? e.type - t.type : e.linkMic ? "store" != t.type || e.type != a.a.LINK_MIC_BARRAGE_TYPE.ANCHOR_CLOSE_LINK_MIC && e.type != a.a.LINK_MIC_BARRAGE_TYPE.VIEW_REQUEST_LINK_MIC ? -1 : 1 : t.linkMic ? "store" != e.type || t.type != a.a.LINK_MIC_BARRAGE_TYPE.ANCHOR_CLOSE_LINK_MIC && t.type != a.a.LINK_MIC_BARRAGE_TYPE.VIEW_REQUEST_LINK_MIC ? 1 : -1 : "store" === e.type && "store" === t.type ? 0 : "store" === e.type ? -1 : "store" === e.type ? 1 : void 0
            }))
          },
          addSystemTriggerBarrageObserver: function(e) {
            if (e && e.openid && e.nickname && e.msg_id && !this.storeData.barrageMsgIdMap[e.msg_id]) {
              this.storeData.barrageMsgIdMap[e.msg_id] = 1;
              var t = {
                nickname: e.nickname,
                openid: e.openid,
                content: e.content,
                myself: !0,
                msg_id: e.msg_id
              };
              this.storeData.systemTriggerBarrageList.unshift(t), this.updateView()
            }
          },
          addLinkMicBarrageObserver: function(e) {
            if (e && e.content) {
              var t = {
                nickname: "",
                openid: "",
                content: e.content,
                myself: !1,
                msg_id: e.msg_id,
                type: a.a.LINK_MIC_BARRAGE_TYPE.VIEW_REQUEST_LINK_MIC,
                linkMic: !0
              };
              this.storeData.systemTriggerBarrageList.unshift(t), this.barrageListSort(this.storeData.systemTriggerBarrageList), this.updateView()
            }
          },
          updateView: function() {
            var e = this;
            clearTimeout(this.fadeInTimer), this.fadeInTimer = setTimeout((function() {
              var t = e.storeData.systemTriggerBarrageList || [];
              if (0 !== t.length) {
                var r = t.shift();
                r && (!e.liveManager.getCurrentUserInfo() && r.myself ? e.updateView() : ("store" === r.type && (r.nickname = i.a.encryptNickname(r.nickname)), r.nickname = r.nickname && r.nickname.trim() || "", r.content = r.content && r.content.trim() || "", e.storeSetData({
                  fadeIn: !0,
                  systemTrig: r
                }, !0), clearTimeout(e.fadeOutTimer), e.fadeOutTimer = setTimeout((function() {
                  e.storeSetData({
                    fadeIn: !1
                  }, (function() {
                    e.updateView()
                  }))
                }), a.a.BARRAGE_ANIMATION_INTERVAL)))
              }
            }), a.a.BARRAGE_ANIMATION_INTERVAL)
          },
          handleLinkMicBarrageList: function(e, t) {
            var r = this;
            if (0 != e.length) {
              this.logInfo("[连麦弹幕] 后台返回列表", e);
              var s = this.storeData.barrageMsgIdMap,
                n = [],
                o = !1;
              return e.forEach((function(e) {
                try {
                  if (s[e.msg_id]) return;
                  if (s[e.msg_id] = 1, e.msg_id > r.storeData.maxBarrageMsgid && (r.storeData.maxBarrageMsgid = e.msg_id), !e.msg_content || '""' === e.msg_content || !JSON.parse(e.msg_content)) return;
                  var t, c, m = JSON.parse(e.msg_content);
                  switch (m.barrage_type) {
                    case 1:
                      t = a.a.LINK_MIC_BARRAGE_TYPE.ANCHOR_OPEN_LINK_MIC, c = "主播开启了连麦功能，快申请和主播连麦";
                      break;
                    case 2:
                      t = a.a.LINK_MIC_BARRAGE_TYPE.ANCHOR_CLOSE_LINK_MIC, c = "主播关闭了连麦功能";
                    case 3:
                      if (!m.barrage_content) break;
                      if (o) break;
                      o = !0, t = a.a.LINK_MIC_BARRAGE_TYPE.ANCHOR_INVITE;
                      var g = i.a.encryptNickname(m.barrage_content);
                      "" == g && (g = "*"), c = "主播邀请了" + g + "连麦"
                  }!isNaN(t) && r.storeData.hasSkipFirstLinkMicBarrages && n.push({
                    nickname: "",
                    openid: "",
                    content: c,
                    myself: !1,
                    msg_id: e.msg_id,
                    type: t,
                    linkMic: !0
                  })
                } catch (e) {
                  r.logError("[连麦弹幕] logic error", e), r.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
                }
              })), this.logInfo("[连麦弹幕] 新增", n.length), t.concat(n)
            }
          }
        }
      })
    },
    58: function(e, t, r) {
      e.exports = r(237)
    }
  },
  entries: [
    [58, 0, 1, 3, 6, 2, 4, 5, 7, 21]
  ]
}]);
