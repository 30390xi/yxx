module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), {
  ids: [29],
  modules: {
    127: function(e, o, t) {
      t.r(o);
      var a = t(0),
        r = t(4),
        n = t(14),
        i = Object(n.a)({
          appid: a.a.PLUGIN_APPID,
          page: "sdk/live-player-plugin",
          hasPermission: !0
        }),
        s = null;
      Component({
        options: {
          styleIsolation: "isolated"
        },
        properties: {
          type: {
            type: Number,
            value: 0
          },
          url: {
            type: String,
            value: ""
          },
          goodsKey: {
            type: Array,
            value: []
          },
          roomId: {
            type: Number,
            value: 0
          },
          customParams: {
            type: String,
            value: ""
          },
          closePictureInPictureMode: {
            type: Number,
            value: 0
          },
          openShareTicket: {
            type: Number,
            value: 0
          }
        },
        data: {
          showPendant: !1,
          showLivePlayer: !1,
          showLivePlayerNotStart: !1,
          showRecord: !1,
          showReplay: !1,
          roomImg: "",
          recordUrl: "",
          playGoodsRecordId: 0,
          _roomId: 0
        },
        attached: function() {},
        detached: function() {
          clearInterval(s)
        },
        pageLifetimes: {
          show: function() {
            clearInterval(s), this.getLivePendant()
          },
          hide: function() {
            clearInterval(s)
          }
        },
        observers: {
          type: function() {
            var e = this;
            setTimeout((function() {
              clearInterval(s), e.getLivePendant()
            }), 100)
          },
          roomId: function(e) {
            e > 0 && (clearInterval(s), this.getLivePendant())
          }
        },
        methods: {
          getLivePendant: function() {
            var e = this,
              o = this.data,
              t = o.type,
              n = o.url,
              s = o.goodsKey,
              d = o.roomId,
              l = {
                action: "get_live_pendant",
                content: JSON.stringify({
                  url: n,
                  vendor_goods_key: s,
                  room_id: d
                }),
                room_id: 1,
                plugin_appid: a.a.PLUGIN_APPID,
                timestamp: Date.now()
              };
            i.info("getLivePendant reqData", l), r.a.liveRoutePromise(l).then((function(o) {
              if (i.info("getLivePendant succ", o), o.room_id && o.live_info) {
                var r = o.live_info.status_code;
                r === a.a.LIVE_STATUS.LIVE || r === a.a.LIVE_STATUS.PAUSE || r === a.a.LIVE_STATUS.ERROR ? e.setData({
                  showPendant: t === a.a.PENDANT_TYPE.ALL || t === a.a.PENDANT_TYPE.LIVE,
                  showLivePlayer: t === a.a.PENDANT_TYPE.ALL || t === a.a.PENDANT_TYPE.LIVE,
                  showLivePlayerNotStart: !1,
                  showReplay: !1,
                  showRecord: !1,
                  _roomId: o.room_id,
                  roomImg: o.room_img
                }) : r === a.a.LIVE_STATUS.NOT_START ? e.setData({
                  showPendant: t === a.a.PENDANT_TYPE.ALL || t === a.a.PENDANT_TYPE.NOT_START,
                  showLivePlayerNotStart: t === a.a.PENDANT_TYPE.ALL || t === a.a.PENDANT_TYPE.NOT_START,
                  showLivePlayer: !1,
                  showReplay: !1,
                  showRecord: !1,
                  _roomId: o.room_id,
                  roomImg: o.room_img
                }) : o.describe_video && o.describe_video.url && o.describe_video.goods_id ? e.setData({
                  showPendant: t === a.a.PENDANT_TYPE.ALL || t === a.a.PENDANT_TYPE.RECORD,
                  showRecord: t === a.a.PENDANT_TYPE.ALL || t === a.a.PENDANT_TYPE.RECORD,
                  showLivePlayer: !1,
                  showLivePlayerNotStart: !1,
                  showReplay: !1,
                  _roomId: o.room_id,
                  roomImg: o.room_img,
                  recordUrl: o.describe_video.url,
                  playGoodsRecordId: o.describe_video.goods_id
                }) : r === a.a.LIVE_STATUS.END && e.setData({
                  showPendant: t === a.a.PENDANT_TYPE.ALL || t === a.a.PENDANT_TYPE.REPLAY,
                  showReplay: t === a.a.PENDANT_TYPE.ALL || t === a.a.PENDANT_TYPE.REPLAY,
                  showLivePlayer: !1,
                  showLivePlayerNotStart: !1,
                  showRecord: !1,
                  _roomId: o.room_id,
                  roomImg: o.room_img
                })
              } else e.setData({
                showPendant: !1
              });
              e.triggerEvent("pendant", {
                errCode: 0,
                errMsg: "直播挂件成功"
              }), e.fastLongPollingTime = Math.max(o.settings && 1e3 * o.settings.fast_interval || 5e3, 5e3), e.slowLongPollingTime = Math.max(o.settings && 1e3 * o.settings.slow_interval || 1e4, 1e4), e._getLivePendantLongPolling(e.fastLongPollingTime)
            })).catch((function(o) {
              i.info("getLivePendant fail", o), e.setData({
                showPendant: !1
              }), (o && (+o.ret || +o.err_code) || o.errMsg && +o.errMsg.split(":")[2]) === a.a.PENDANT_CODE.VENDOR_GOODS_KEY_FAILED ? e.triggerEvent("pendant", {
                errCode: -1,
                errMsg: "传入商品key参数有误"
              }) : e._getLivePendantLongPolling(e.slowLongPollingTime)
            }))
          },
          _getLivePendantLongPolling: function(e) {
            var o = this;
            clearInterval(s), s = setInterval((function() {
              o.getLivePendant()
            }), e || 1e4)
          }
        }
      })
    },
    44: function(e, o, t) {
      e.exports = t(127)
    }
  },
  entries: [
    [44, 0, 1, 3, 2, 4]
  ]
}]);
