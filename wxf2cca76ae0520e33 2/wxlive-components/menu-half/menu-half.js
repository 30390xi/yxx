module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/2.js"), require("../../_commons/8.js"), require("../../_commons/13.js"), {
  ids: [69],
  modules: {
    508: function(e, t, s) {
      s.r(t);
      var i = s(11);
      Component({
        options: {
          multipleSlots: !0,
          addGlobalClass: !0
        },
        properties: {
          closeable: {
            type: Boolean,
            value: !0
          },
          size: {
            type: String,
            value: "mini"
          },
          height: {
            type: String,
            value: ""
          },
          returnType: {
            type: String,
            value: "close"
          },
          bodyStyle: {
            type: String,
            value: ""
          },
          isShow: {
            type: Boolean,
            value: !1
          },
          isShowAnimation: {
            type: Boolean,
            value: !1
          },
          extClass: {
            type: String,
            value: ""
          },
          isMaskTransparent: {
            type: Boolean,
            value: !1
          },
          screenType: {
            type: String,
            value: "vertical"
          },
          isMaskClose: {
            type: Boolean,
            value: !0
          }
        },
        observers: {
          size: function() {
            this.uiCount()
          },
          isShow: function() {
            this.setData({
              dataIsShow: this.data.isShow
            })
          }
        },
        data: {
          menuHeight: 0,
          dataIsShow: !1
        },
        methods: {
          uiPlatform: function() {
            var e = wx.getSystemInfoSync().platform;
            this.setData({
              uiPlatform: e
            })
          },
          uiCount: function() {
            var e = i.a.getScreenHeight();
            this.setData({
              menuHeight: "mini" === this.data.size ? 36.453 * e / 100 : e / 2
            })
          },
          closeMenuHalf: function(e) {
            var t = this,
              s = e.currentTarget.dataset.from;
            ("mask" === s && this.data.isMaskClose || "mask" !== s) && (this.setData({
              dataIsShow: !1
            }), this.data.isShowAnimation ? setTimeout((function() {
              t.triggerEvent("closeevent", {
                close: !0
              }, {})
            }), 200) : this.triggerEvent("closeevent", {
              close: !0
            }, {}))
          },
          returnMenuHalf: function(e) {
            var t = this;
            this.setData({
              dataIsShow: !1
            }), this.data.isShowAnimation ? setTimeout((function() {
              t.triggerEvent("closeevent", {
                close: !0,
                type: "back"
              }, {})
            }), 200) : this.triggerEvent("closeevent", {
              close: !0,
              type: "back"
            }, {})
          }
        },
        lifetimes: {
          attached: function() {
            this.uiCount(), this.uiPlatform()
          }
        }
      })
    },
    92: function(e, t, s) {
      e.exports = s(508)
    }
  },
  entries: [
    [92, 0, 1, 3, 2, 8, 13]
  ]
}]);
