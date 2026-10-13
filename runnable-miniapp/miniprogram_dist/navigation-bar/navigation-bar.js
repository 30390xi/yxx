var t = require("../../@babel/runtime/helpers/defineProperty");
module.exports = require("../../_commons/0.js")([{
  ids: [41],
  modules: {
    468: function(e, i) {
      Component({
        options: {
          multipleSlots: !0,
          addGlobalClass: !0
        },
        properties: {
          extClass: {
            type: String,
            value: ""
          },
          title: {
            type: String,
            value: ""
          },
          background: {
            type: String,
            value: ""
          },
          color: {
            type: String,
            value: ""
          },
          back: {
            type: Boolean,
            value: !0
          },
          loading: {
            type: Boolean,
            value: !1
          },
          animated: {
            type: Boolean,
            value: !0
          },
          isNoCenter: {
            type: Boolean,
            value: !1
          },
          show: {
            type: Boolean,
            value: !0,
            observer: "_showChange"
          },
          delta: {
            type: Number,
            value: 1
          },
          isExitMiniprogram: {
            type: Boolean,
            value: !1
          },
          screenType: {
            type: String,
            value: ""
          },
          isReplay: {
            type: Boolean,
            value: !1
          },
          showPushComment: {
            type: Boolean,
            value: !1
          },
          liveStatus: {
            type: String,
            value: ""
          }
        },
        data: {
          displayStyle: ""
        },
        pageLifetimes: {
          resize: function(t) {
            this.countNavigatorPaddingTop()
          }
        },
        observers: {
          screenType: function(t) {
            this.countNavigatorPaddingTop(), setTimeout(this.countNavigatorPaddingTop.bind(this), 600)
          }
        },
        attached: function() {
          this.countNavigatorPaddingTop(), setTimeout(this.countNavigatorPaddingTop.bind(this), 600)
        },
        methods: {
          countNavigatorPaddingTopNotSupportBoundingClientRect: function(t, e) {
            var i;
            i = "horizontal" !== this.data.screenType || t ? "horizontal" !== this.data.screenType ? e.statusBarHeight - 1 : "horizontal" === this.data.screenType && t && 0 !== e.statusBarHeight ? e.statusBarHeight - 6 : 0 : 0, this.setData({
              ios: t,
              isSupportBounding: !1,
              statusBarHeight: i,
              innerWidth: "",
              innerPaddingRight: "",
              leftWidth: ""
            })
          },
          countNavigatorPaddingTopSupportBoundingClientRect: function(e, i) {
            var a, n, o = wx.getMenuButtonBoundingClientRect();
            o && (n = o.top - (42 - o.height) / 2, this.setData((t(a = {
              isSupportBounding: !0,
              ios: e
            }, "isSupportBounding", !1), t(a, "statusBarHeight", n), t(a, "innerWidth", "width:" + o.left + "px"), t(a, "innerPaddingRight", "padding-right:" + (i.windowWidth - o.left) + "px"), t(a, "leftWidth", "width:" + (i.windowWidth - o.left) + "px"), a)))
          },
          countNavigatorPaddingTop: function() {
            var t = !!wx.getMenuButtonBoundingClientRect,
              e = wx.getSystemInfoSync(),
              i = !!(e.system.toLowerCase().search("ios") + 1);
            t ? this.countNavigatorPaddingTopSupportBoundingClientRect(i, e) : this.countNavigatorPaddingTopNotSupportBoundingClientRect(i, e)
          },
          _showChange: function(t) {
            var e;
            e = this.data.animated ? "opacity: " + (t ? "1" : "0") + ";-webkit-transition:opacity 0.5s;transition:opacity 0.5s;" : "display: " + (t ? "" : "none"), this.setData({
              displayStyle: e
            })
          },
          back: function() {
            var t = wx.getSystemInfoSync() || {},
              e = t.model && t.model.toLowerCase().includes("ipad"),
              i = this.data;
            (e || "horizontal" !== i.screenType && !i.isReplay && !i.showPushComment) && wx.navigateBack({
              delta: i.delta
            }), this.triggerEvent("back", {
              delta: i.delta
            }, {})
          }
        }
      })
    },
    87: function(t, e, i) {
      t.exports = i(468)
    }
  },
  entries: [
    [87, 0]
  ]
}]);
