module.exports = {
  ids: [16],
  modules: {
    22: function(e, t, r) {
      var i = r(7),
        a = r.n(i),
        s = r(2),
        n = r(0),
        o = r(3),
        c = r(1);

      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, i)
        }
        return r
      }

      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? u(Object(r), !0).forEach((function(t) {
            a()(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      t.a = Behavior({
        data: {
          _triggerSubscribe: !1,
          previewCountdowntimer: null
        },
        methods: {
          previewUnsubscribe: function() {
            var e = this;
            if ((wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) !== n.a.SHARE_FRIENDS_SCENE) {
              if (!this.data._triggerSubscribe && this.storeData.isSubscribe) {
                this.data._triggerSubscribe = !0;
                var t = {
                  actionType: 3,
                  subActionType: 5,
                  reserves: 1
                };
                this.addReportMMData(t);
                var r = this.getReqBase();
                r.report_data = this.getReportData(t), o.a.unsubscribeRoom(r).then((function(t) {
                  e.data._triggerSubscribe = !1;
                  try {
                    c.a.tipsSimple("已取消提醒", 1e3), e.storeSetData({
                      isSubscribe: !1
                    })
                  } catch (t) {
                    e.logError("onCancel logic error", t), e.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
                  }
                })).catch((function(t) {
                  e.data._triggerSubscribe = !1, c.a.tipsSimple("取消失败")
                }))
              }
            } else c.a.tipsSimple("请前往小程序使用完整服务")
          },
          previewSubscribe: function() {
            var e = this;
            if ((wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) !== n.a.SHARE_FRIENDS_SCENE) {
              if (!this.data._triggerSubscribe && !this.storeData.isSubscribe) {
                this.data._triggerSubscribe = !0;
                var t = {
                  actionType: 3,
                  subActionType: 7,
                  reserves: 1
                };
                this.addReportMMData(t);
                var r = this.liveManager.getCurrentUserInfo(),
                  i = "";
                r && r.nickname && (i = {
                  avatar: r.avatar,
                  nickname: r.nickname,
                  openid: r.openid,
                  content: "订阅直播",
                  type: "subscribe"
                }), o.a.setSystemTriggerBarrage(p(p({}, this.getReqBase()), {}, {
                  action: "subscribe",
                  custom_params: this.storeData.customParams,
                  content: i,
                  report_data: this.getReportData(t)
                })).then((function(t) {
                  e.data._triggerSubscribe = !1;
                  try {
                    c.a.tipsSimple("设置开播提醒成功", 1e3), i && t.msg_id ? e.storeSetData({
                      isSubscribe: !0,
                      addSystemTriggerBarrage: p(p({}, i), {}, {
                        msg_id: t.msg_id
                      })
                    }) : e.storeSetData({
                      isSubscribe: !0
                    }), e.addReportMMData({
                      actionType: 3,
                      subActionType: 4,
                      reserves: 1
                    })
                  } catch (t) {
                    e.logError("onSubscribe logic error", error, i), e.reportPerformance("LOGIC_ERROR", 1, "pluginVersion")
                  }
                })).catch((function(t) {
                  e.data._triggerSubscribe = !1, c.a.tipsSimple("设置失败")
                }))
              }
            } else c.a.tipsSimple("请前往小程序使用完整服务")
          },
          startPreviewCountdownTime: function(e) {
            var t = this;
            if (e > 0) {
              var r = 60;
              if (e <= 64 ? r = 1 : e <= 120 ? r = 5 : e > 86400 ? r = 1800 : e > 172800 && (r = -1), this.storeSetData({
                  countdownTimeContent: s.a.formatCountTime(e)
                }), clearTimeout(this.data.previewCountdowntimer), r < 0) return;
              this.data.previewCountdowntimer = setTimeout((function() {
                t.startPreviewCountdownTime(e - r)
              }), 1e3 * r)
            } else this.storeSetData({
              countdownTimeContent: ""
            })
          }
        }
      })
    }
  }
};
