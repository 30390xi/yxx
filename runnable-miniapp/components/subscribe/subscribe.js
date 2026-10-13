module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), {
  ids: [30],
  modules: {
    116: function(t, e, i) {
      i.r(e);
      var a = i(4),
        o = i(0),
        r = i(1),
        s = i(14),
        n = Object(s.a)({
          appid: o.a.PLUGIN_APPID,
          page: "sdk/live-player-plugin",
          hasPermission: !0
        }),
        c = null;
      Component({
        properties: {
          roomId: {
            type: Number,
            value: 0
          },
          width: {
            type: Number,
            value: 120
          },
          height: {
            type: Number,
            value: 41
          },
          fontSize: {
            type: Number,
            value: 17
          },
          color: {
            type: String,
            value: "#FFFFFF"
          },
          backgroundColor: {
            type: String,
            value: "#6467F0"
          },
          stopPropagation: {
            type: Boolean,
            value: !1
          },
          customParams: {
            type: String,
            value: ""
          }
        },
        data: {
          showSubscribe: !1,
          roomStaticInfo: {
            end_time: ""
          },
          _triggerSubscribe: !1
        },
        observers: {
          roomId: function(t) {
            t > 0 && (c && clearInterval(c), this.getRoomStaticInfo())
          }
        },
        detached: function() {
          c && clearInterval(c)
        },
        pageLifetimes: {
          show: function() {
            this.getRoomStaticInfo()
          },
          hide: function() {
            c && clearInterval(c)
          }
        },
        methods: {
          getRoomStaticInfo: function() {
            var t = this,
              e = {
                action: "get_static_info",
                content: "",
                room_id: this.data.roomId,
                plugin_appid: o.a.PLUGIN_APPID,
                timestamp: Date.now()
              };
            a.a.liveRoutePromise(e).then((function(e) {
              n.info("subscribe roomStaticInfo", e), t.data.roomStaticInfo = e, t.setData({
                isSubscribe: !!+e.is_subscribe
              }), t.getLiveStatus()
            })).catch((function(e) {
              n.info("subscribe roomStaticInfo fail", e), t.setData({
                showSubscribe: !1
              })
            }))
          },
          getLiveStatus: function() {
            var t = this,
              e = {
                action: "get_live_info",
                room_id: t.data.roomId,
                content: "",
                plugin_appid: o.a.PLUGIN_APPID,
                timestamp: Date.now()
              };
            a.a.liveRoutePromise(e).then((function(e) {
              n.info("subscribe getLiveStatus", e);
              var i = +e.live_status;
              i === o.a.LIVE_STATUS.EXPIRE ? (t.setData({
                showSubscribe: !1
              }), clearInterval(c)) : (t.setData({
                showSubscribe: i === o.a.LIVE_STATUS.NOT_START
              }), clearInterval(c), c = setInterval((function() {
                t.getLiveStatus()
              }), 6e4))
            })).catch((function(e) {
              n.info("subscribe getLiveStatus fail", e), t.setData({
                showSubscribe: !1
              }), clearInterval(c), c = setInterval((function() {
                t.getLiveStatus()
              }), 6e4)
            }))
          },
          clickSubscribe: function() {
            var t = this;
            if (!this.data._triggerSubscribe) {
              this.data._triggerSubscribe = !0;
              var e = this.data.roomId,
                i = this.data.roomStaticInfo.openid,
                s = this.data.isSubscribe;
              if (s) {
                var c = {
                  action: "unsubscribe",
                  room_id: e,
                  content: "",
                  plugin_appid: o.a.PLUGIN_APPID,
                  timestamp: Date.now()
                };
                n.info("[订阅组件] 取消订阅请求", c, new Date), a.a.liveRoutePromise(c).then((function(a) {
                  n.info("[订阅组件] 取消订阅成功", a, new Date), t.setData({
                    isSubscribe: !s
                  }), t.data._triggerSubscribe = !1, r.a.tipsSimple("已取消提醒");
                  var o = {
                    room_id: e,
                    openid: i,
                    is_subscribe: !1
                  };
                  t.triggerEvent("subscribe", o)
                })).catch((function(e) {
                  n.error("[订阅组件] 取消订阅失败", e, new Date), t.data._triggerSubscribe = !1, r.a.tipsSimple("取消失败")
                }))
              } else {
                var u = {
                  action: "subscribe",
                  room_id: e,
                  content: JSON.stringify({
                    content: "订阅直播",
                    custom_params: this.data.customParams
                  }),
                  plugin_appid: o.a.PLUGIN_APPID,
                  timestamp: Date.now()
                };
                n.info("[订阅组件] 订阅请求", u, new Date), a.a.liveRoutePromise(u).then((function(a) {
                  n.info("[订阅组件] 订阅成功", a, new Date), t.setData({
                    isSubscribe: !s
                  }), t.data._triggerSubscribe = !1, r.a.tipsSimple("设置开播提醒成功");
                  var o = {
                    room_id: e,
                    openid: i,
                    is_subscribe: !0
                  };
                  t.triggerEvent("subscribe", o)
                })).catch((function() {
                  n.error("[订阅组件] 订阅失败", err, new Date), t.data._triggerSubscribe = !1, r.a.tipsSimple("设置失败")
                }))
              }
            }
          }
        }
      })
    },
    41: function(t, e, i) {
      t.exports = i(116)
    }
  },
  entries: [
    [41, 0, 1, 3, 2, 4]
  ]
}]);
