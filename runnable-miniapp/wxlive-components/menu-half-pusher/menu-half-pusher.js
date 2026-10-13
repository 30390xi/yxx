var e = require("../../@babel/runtime/helpers/defineProperty");
module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/2.js"), require("../../_commons/8.js"), require("../../_commons/13.js"), {
  ids: [68],
  modules: {
    412: function(t, i, o) {
      var n;
      o.r(i);
      var s = o(11);
      Component(e({
        options: {
          multipleSlots: !0,
          addGlobalClass: !0
        },
        properties: (n = {
          closeable: {
            type: Boolean,
            value: !1
          },
          size: {
            type: String,
            value: "mini"
          },
          returnType: {
            type: String,
            value: "close"
          },
          extClass: {
            type: String,
            value: ""
          },
          height: {
            type: String,
            value: ""
          }
        }, e(n, "returnType", {
          type: String,
          value: "close"
        }), e(n, "bodyStyle", {
          type: String,
          value: ""
        }), e(n, "isShow", {
          type: Boolean,
          value: !0
        }), e(n, "isShowAnimation", {
          type: Boolean,
          value: !1
        }), e(n, "screenType", {
          type: String,
          value: ""
        }), e(n, "isResponseHorizontal", {
          type: Boolean,
          value: !1
        }), n),
        observers: {
          size: function() {
            this.uiCount()
          },
          isShow: function(e) {
            this.setData({
              dataIsShow: e
            })
          },
          screenType: function() {
            var e = this;
            this.uiCountScrollViewHeight(), setTimeout((function() {
              e.uiCountScrollViewHeight()
            }), 600)
          }
        },
        lifetimes: {
          attached: function() {
            var e = this;
            this.uiCountScrollViewHeight(), setTimeout((function() {
              e.uiCountScrollViewHeight()
            }), 600)
          }
        },
        data: {
          menuHeight: 0,
          dataIsShow: !1
        },
        methods: {
          uiCount: function() {
            var e = s.a.getScreenHeight();
            this.setData({
              menuHeight: "mini" === this.data.size ? 36.453 * e / 100 : e / 2
            })
          },
          uiCountScrollViewHeight: function() {
            "horizontal" === this.data.screenType ? this.setData({
              scrollViewHeight: s.a.getScreenHeight() - 70
            }) : this.setData({
              scrollViewHeight: .5073 * s.a.getScreenHeight() - 20
            })
          },
          closeMenuHalf: function() {
            var e = this;
            console.log("关闭面板"), this.setData({
              dataIsShow: !1
            }), this.data.isShowAnimation ? setTimeout((function() {
              e.close()
            }), 200) : this.close()
          },
          close: function() {
            this.triggerEvent("closeevent", {
              close: !0
            }), this.triggerEvent("close", {
              close: !0
            })
          },
          returnMenuHalf: function() {
            this.triggerEvent("returnevent", {})
          }
        }
      }, "lifetimes", {
        attached: function() {
          this.uiCount()
        }
      }))
    },
    80: function(e, t, i) {
      e.exports = i(412)
    }
  },
  entries: [
    [80, 0, 1, 3, 2, 8, 13]
  ]
}]);
