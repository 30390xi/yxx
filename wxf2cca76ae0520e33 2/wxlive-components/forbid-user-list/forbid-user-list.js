module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/8.js"), require("../../_commons/9.js"), require("../../_commons/10.js"), {
  ids: [58],
  modules: {
    292: function(e, r, t) {
      t.r(r);
      var o = t(7),
        s = t.n(o),
        i = t(3),
        n = t(1),
        a = t(5);

      function c(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter((function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          }))), t.push.apply(t, o)
        }
        return t
      }

      function u(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? c(Object(t), !0).forEach((function(r) {
            s()(e, r, t[r])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach((function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          }))
        }
        return e
      }
      Component({
        behaviors: [a.a],
        properties: {},
        data: {
          componentName: "forbidUserList",
          screenType: "",
          forUserListHeight: 0,
          showForbidUserList: !1,
          forbidListLoading: !0,
          forbidList: []
        },
        observers: {},
        methods: {
          getBanUserList: function() {
            var e = this;
            this.logInfo("getBanUserList"), this.storeSetData({
              forbidListLoading: !0
            }), i.a.getBanUserList(this.getReqBase()).then((function(r) {
              try {
                var t = [];
                r && r.list && (t = r && r.list.filter((function(e) {
                  return 2 & e.flag_bit
                })), e.storeSetData({
                  forbidList: t,
                  forbidListLoading: !1
                })), e.addReportMMData({
                  actionType: 3,
                  subActionType: 15,
                  isAssitant: 1
                })
              } catch (r) {
                e.logError("[forbidUserList] logic error", {
                  func: "getBanUserList",
                  err: r
                }), e.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
              }
            })).catch((function(r) {
              e.storeSetData({
                forbidListLoading: !1,
                forbidList: []
              }), n.a.tipsSimple("查看禁言列表失败，请重试")
            }))
          },
          onClose: function() {
            this.storeSetData({
              showForbidUserList: !1
            })
          },
          onRemoveUser: function(e) {
            var r = e.currentTarget.dataset,
              t = r.user,
              o = r.index;
            this.logInfo("onRemoveUser", e.currentTarget.dataset), this.removeBanUser(t, o)
          },
          removeBanUser: function(e, r) {
            var t = this;
            e ? (this.logInfo("removeBanUser", {
              user: e,
              index: r
            }), i.a.removeBanUser(u(u({}, this.getReqBase()), {}, {
              content: {
                room: {
                  room_id: this.storeData.roomId
                },
                user_list: {
                  list: [{
                    openid: e.openid
                  }]
                }
              }
            })).then((function(o) {
              t.addReportMMData({
                actionType: 3,
                subActionType: 16,
                blacklist_uin: e.userUin,
                reserve3: e.openid
              });
              var s = t.data.forbidList.map((function(e, t) {
                return t === r ? u(u({}, e), {}, {
                  isRemove: !0
                }) : u({}, e)
              }));
              t.storeSetData({
                forbidList: s
              })
            })).catch((function(o) {
              n.a.tipsRetry("移除禁言用户失败", (function() {
                t.removeBanUser(e, r)
              }))
            }))) : this.logError("removeBanUser user==null", e, r)
          },
          showForbidUserListObserver: function(e, r) {
            e && this.getBanUserList()
          }
        }
      })
    },
    65: function(e, r, t) {
      e.exports = t(292)
    }
  },
  entries: [
    [65, 0, 1, 3, 6, 2, 4, 5, 7, 8, 9, 10]
  ]
}]);
