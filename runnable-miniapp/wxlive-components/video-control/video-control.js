var e = require("../../@babel/runtime/helpers/defineProperty");
module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/8.js"), {
  ids: [87],
  modules: {
    165: function(o, t, a) {
      var i;
      a.r(t);
      var s = a(0),
        n = a(2),
        l = a(5);
      Component({
        behaviors: [l.a],
        properties: (i = {
          from: {
            type: String,
            value: ""
          },
          time: {
            type: String,
            value: "00:00:00"
          },
          duration: {
            type: String,
            value: "00:00:00"
          },
          process: {
            type: Number,
            value: 0
          },
          screenType: {
            type: String,
            value: "vertical"
          },
          durationSec: {
            type: Number,
            value: 0
          },
          buffered: {
            type: Number,
            value: 0
          },
          disabled: {
            type: Boolean,
            value: !0
          },
          showRecord: {
            type: Boolean,
            value: !1
          },
          goodsVideoList: {
            type: Array,
            value: []
          },
          goodsExplainEnd: {
            type: Boolean,
            value: !1
          },
          playGoodsRecordId: {
            type: Number,
            value: 0
          },
          curLiveStatusCode: {
            type: Number,
            value: 102
          },
          showVideoDotList: {
            type: Boolean,
            value: !1
          }
        }, e(i, "showRecord", {
          type: Boolean,
          value: !1
        }), e(i, "isPlayVideo", {
          type: Boolean,
          value: !1
        }), e(i, "isClearScreen", {
          type: Boolean,
          value: !1
        }), e(i, "showBacktoLiveIcon", {
          type: Boolean,
          value: !1
        }), e(i, "showRecordListIcon", {
          type: Boolean,
          value: !1
        }), i),
        data: {
          componentName: "videoControl",
          isHandleVideoProcessChanging: !1,
          processChangingTime: "00:00",
          playStateClass: "video-control__button__pause",
          allLiveStatusCode: s.a.LIVE_STATUS
        },
        observers: {
          goodsExplainEnd: function(e) {
            !e || this.data.curLiveStatusCode !== this.data.allLiveStatusCode.REPLAY && this.data.curLiveStatusCode !== this.data.allLiveStatusCode.END || this.triggerEvent("handlevideocontrol", {
              showVideoDotList: {
                value: !0
              }
            }), e ? this.setData({
              playStateClass: "video-control__button__replay"
            }) : e || this.data.isPlayVideo || this.setData({
              playStateClass: "video-control__button__play"
            })
          },
          isPlayVideo: function(e) {
            e ? this.setData({
              playStateClass: "video-control__button__pause"
            }) : this.setData({
              playStateClass: "video-control__button__play"
            })
          }
        },
        liveStore: {
          observers: {}
        },
        methods: {
          handleVideoControl: function() {
            var e = !this.data.isPlayVideo;
            e ? this.setData({
              playStateClass: "video-control__button__pause"
            }) : this.setData({
              playStateClass: "video-control__button__play"
            }), this.data.goodsExplainEnd && this.setData({
              goodsExplainEnd: !1
            }), this.triggerEvent("handlevideocontrol", {
              handleVideoControl: {
                value: e
              }
            })
          },
          handleVideoProcessChange: function(e) {
            this.setData({
              isHandleVideoProcessChanging: !1
            }), this.triggerEvent("handlevideocontrol", {
              handleVideoProcessChange: {
                value: e.detail.value
              }
            })
          },
          handleVideoProcessChanging: function(e) {
            this.setData({
              isHandleVideoProcessChanging: !0,
              processChangingTime: n.a.formatDuration(Math.ceil(e.detail.value))
            }), this.triggerEvent("handlevideocontrol", {
              isHandleVideoProcessChanging: {
                value: !0
              }
            })
          },
          bindswitchvideo: function(e) {
            var o = e.detail,
              t = o.goods_id,
              a = o.goodsExplainEnd,
              i = void 0 !== a && a,
              s = o.reserves;
            this.triggerEvent("handlevideocontrol", {
              reserves: {
                value: s
              },
              switchPlayState: {
                value: !1
              },
              switchGoodsRecord: {
                value: t
              },
              goodsExplainEnd: {
                value: i
              }
            })
          },
          clickShowVideoDotList: function() {
            this.triggerEvent("handlevideocontrol", {
              showVideoDotList: {
                value: !0
              }
            })
          },
          backtoLive: function() {
            this.triggerEvent("handlevideocontrol", {
              backtoLive: {
                value: !0
              },
              showVideoDotList: {
                value: !1
              }
            })
          },
          closeVideoDotList: function() {
            this.triggerEvent("handlevideocontrol", {
              showVideoDotList: {
                value: !1
              }
            })
          },
          bindcustomevent: function(e) {
            "delVideoDot" == e.detail.action && this.triggerEvent("customevent", {
              action: "delVideoDot",
              id: e.detail.id
            }, {
              bubbles: !0
            }), "showVideoDotList" == e.detail.action && this.triggerEvent("handlevideocontrol", {
              showVideoDotList: {
                value: e.detail.value
              }
            })
          }
        }
      })
    },
    49: function(e, o, t) {
      e.exports = t(165)
    }
  },
  entries: [
    [49, 0, 1, 3, 6, 2, 4, 5, 7, 8]
  ]
}]);
