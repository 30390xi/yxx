module.exports = require("../../../_commons/0.js")([require("../../../_commons/1.js"), require("../../../_commons/3.js"), require("../../../_commons/6.js"), require("../../../_commons/2.js"), require("../../../_commons/4.js"), require("../../../_commons/5.js"), require("../../../_commons/8.js"), {
  ids: [56],
  modules: {
    547: function(e, t, a) {
      a.r(t);
      var n = a(11),
        i = a(3);
      Component({
        options: {
          styleIsolation: "page-apply-shared"
        },
        properties: {
          livePlayerOptions: String
        },
        data: {
          pageStatus: "write",
          uiPagePaddingTop: 0,
          reportCommentAvatar: "",
          reportCommentNickname: "",
          reportCommentContent: "",
          curOpenid: "",
          disabledSubmitBtn: !0,
          selectValue: "",
          reportItems: [{
            type: "低俗色情",
            value: "value0",
            checked: !1
          }, {
            type: "有害信息",
            value: "value1",
            checked: !1
          }, {
            type: "垃圾营销",
            value: "value2",
            checked: !1
          }, {
            type: "侵犯人身权益",
            value: "value3",
            checked: !1
          }, {
            type: "其它",
            value: "value4",
            checked: !1
          }]
        },
        methods: {
          onLoad: function() {
            n.a.setNavFontColor("#f7f7f7"), this.initPageData()
          },
          _findLiveManager: function() {
            for (var e = getCurrentPages(), t = e.length; t >= 0;) {
              if (e[t] && e[t].liveManager) return e[t].liveManager;
              t -= 1
            }
            return null
          },
          initPageData: function() {
            if (this.liveManager = this._findLiveManager(), this.liveManager) {
              var e = this.liveManager.data.operateCommentInfo,
                t = this.liveManager.data.userInfo;
              t.openid && (t.openid = this.liveManager.data.curOpenid);
              var a = this.liveManager.statusBarHeight || wx.getSystemInfoSync() && wx.getSystemInfoSync().statusBarHeight;
              this.setData({
                reportCommentAvatar: e.avatar,
                reportCommentNickname: e.nickname,
                reportCommentContent: e.content,
                curOpenid: t.openid,
                curNickename: t.nickname || "",
                statusBarHeight: a
              }), this.liveManager.setData({
                showCommentActionSheet: !1
              })
            } else console.error("[complaint-room] liveManager null", pageList)
          },
          onSelect: function(e) {
            this.setData({
              disabledSubmitBtn: !1,
              selectValue: e.detail.value
            })
          },
          onSubmit: function() {
            var e = this;
            if (!this.data.disabledSubmitBtn) {
              var t = "",
                a = this.data.selectValue;
              this.data.reportItems.forEach((function(e) {
                a === e.value && (t = e.type)
              })), this.liveManager.addReportMMData();
              var n = this.liveManager.getReqBase();
              n.content = {
                report: {
                  commentNickname: this.data.reportCommentNickname,
                  commentContent: this.data.reportCommentContent,
                  reportOpenid: this.data.curOpenid,
                  reportNickname: this.data.curNickename,
                  reportType: t
                }
              }, n.report_data = this.liveManager.getReportData({
                actionType: 3,
                subActionType: 10
              }), i.a.reportComment(n).then((function(t) {
                e.setData({
                  pageStatus: "done"
                })
              })).catch((function(e) {
                wxapi.tipsSimple("投诉失败")
              }))
            }
          },
          onClose: function() {
            wx.navigateBack({
              delta: 1
            })
          }
        }
      })
    },
    97: function(e, t, a) {
      e.exports = a(547)
    }
  },
  entries: [
    [97, 0, 1, 3, 6, 2, 4, 5, 8]
  ]
}]);
