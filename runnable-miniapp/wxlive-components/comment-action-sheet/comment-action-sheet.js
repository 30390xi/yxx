module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), {
  ids: [51],
  modules: {
    348: function(t, e, o) {
      o.r(e);
      var n = o(7),
        r = o.n(n),
        i = o(3),
        s = o(0),
        a = o(1),
        m = o(5);

      function c(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), o.push.apply(o, n)
        }
        return o
      }

      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2 ? c(Object(o), !0).forEach((function(e) {
            r()(t, e, o[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : c(Object(o)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
          }))
        }
        return t
      }
      Component({
        behaviors: [m.a],
        properties: {},
        data: {
          componentName: "commentActionSheet",
          isShow: !1,
          forbidGroups: []
        },
        observers: {},
        lifetimes: {
          attached: function() {},
          detached: function() {}
        },
        methods: {
          showCommentActionSheetObserver: function(t) {
            if (t) {
              var e = this.storeData,
                o = e.from,
                n = e.isRoomHelper,
                r = e.operateCommentInfo,
                i = r.role || {},
                a = i.role_type === s.a.USER_TYPE.ROOM_HELPER ? i.role_nickname : r.nickname;
              n || "pusher" === o ? this.storeSetData({
                isShow: !0,
                commentInfo: r,
                forbidGroups: [{
                  text: "禁言“".concat(a, "”"),
                  value: 1
                }, {
                  text: "删除评论",
                  value: 2
                }]
              }) : this.storeSetData({
                isShow: !0,
                commentInfo: r,
                forbidGroups: [{
                  text: "投诉",
                  value: 3
                }]
              })
            } else this.storeSetData({
              isShow: !1
            })
          },
          onClose: function() {
            this.storeSetData({
              showCommentActionSheet: !1
            })
          },
          onActionsheetClick: function(t) {
            var e = this,
              o = t.detail.value;
            this.onClose(), 1 === o ? a.a.tipsConfirm({
              title: "是否确认禁言该用户",
              onConfirm: function() {
                e.onBanUser()
              }
            }) : 2 === o ? a.a.tipsConfirm({
              title: "是否确认删除评论",
              onConfirm: function() {
                e.onDelComment()
              }
            }) : 3 === o && this.onComplaintComment()
          },
          onComplaintComment: function() {
            this.storeSetData({
              pictureInPictureMode: "",
              isForbidReportEnter: !0
            }), this.addReportMMData({
              actionType: 4,
              subActionType: 2
            }), wx.navigateTo({
              url: (this.storeData.urlPathPrefix || "/") + "wxlive-components/ext-player/complaint-comment/complaint-comment",
              fail: function(t) {
                _this.logError("wx.navigateTo complaint_comment fail", t)
              }
            })
          },
          onBanUser: function() {
            var t = this,
              e = this.storeData.roomId,
              o = this.storeData.operateCommentInfo;
            i.a.addBanUser(p(p({}, this.getReqBase()), {}, {
              content: {
                room: {
                  roomId: e
                },
                user_list: {
                  list: [{
                    openid: o.openid
                  }]
                }
              }
            })).then((function() {
              a.a.tipsSimple("该用户已被禁言");
              var e = t.storeData.allCommentList.filter((function(t) {
                  return t.openid !== o.openid
                })),
                n = t.storeData.curCommentList.filter((function(t) {
                  return t.openid !== o.openid
                }));
              t.storeSetData({
                allCommentList: e,
                curCommentList: n
              })
            })).catch((function(e) {
              36003 == (e && (+e.ret || +e.err_code) || e.errMsg && +e.errMsg.split(":")[2]) ? a.a.tipsSimple("该用户已被禁言") : a.a.tipsRetry("禁言用户失败，请重试", (function() {
                t.onBanUser()
              }))
            }))
          },
          onDelComment: function() {
            var t = this,
              e = this.storeData.operateCommentInfo;
            i.a.removeComment(p(p({}, this.getReqBase()), {}, {
              content: {
                msg_id: e.msgId
              }
            })).then((function() {
              a.a.tipsSimple("该评论已被删除"), t.storeSetData({
                deleteCommentInfo: e
              }), t.addReportMMData({
                actionType: 3,
                subActionType: 14,
                isAssitant: 1
              })
            })).catch((function(e) {
              a.a.tipsRetry("删除评论失败，请重试", (function() {
                t.onDelComment()
              }))
            }))
          }
        }
      })
    },
    72: function(t, e, o) {
      t.exports = o(348)
    }
  },
  entries: [
    [72, 0, 1, 3, 6, 2, 4, 5, 7]
  ]
}]);
