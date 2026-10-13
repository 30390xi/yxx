module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/12.js"), {
  ids: [74],
  modules: {
    372: function(t, e, a) {
      a.r(e);
      var i = a(0),
        o = a(1),
        n = a(2),
        r = a(5),
        s = a(32);
      Component({
        behaviors: [r.a],
        properties: {},
        data: {
          componentName: "operatePaster",
          activityInfo: {},
          jumpExtraData: {},
          isClearScreen: !1
        },
        observers: {},
        methods: {
          onStoreDataReady: function() {
            var t = this;
            this.storeData.activityInfo && this.storeData.activityInfo.is_animation && this.createOperatePasterAnimation((function(e) {
              t.logInfo("init paster res", e), e ? t.playOperatePasterAnimation() : setTimeout((function() {
                t.createOperatePasterAnimation((function(e) {
                  t.logInfo("init paster delay res", e), e && t.playOperatePasterAnimation()
                }))
              }), 800)
            }))
          },
          createOperatePasterAnimation: function(t) {
            var e = this;
            if (this.storeData ? this.storeData.isSupportAnimation : n.a.isSupportAnimation()) {
              var a = new s.default;
              this.createSelectorQuery().select("#operate-paster__canvas").fields({
                size: !0,
                node: !0
              }, (function(i) {
                if (i && i.node) {
                  var o = i.node,
                    n = o.getContext("2d"),
                    r = wx.getSystemInfoSync().pixelRatio;
                  o.width = i.width * r, o.height = i.height * r, a.setup(o);
                  var s = a.loadAnimation({
                    loop: !1,
                    autoplay: !1,
                    renderer: "canvas",
                    path: e.data.activityInfo.cdn_url,
                    rendererSettings: {
                      context: n
                    }
                  });
                  e.operatePasterAnimation = s, t && t(!0)
                }
              })).exec()
            }
          },
          playOperatePasterAnimation: function() {
            this.data.isClearScreen || (this.storeData ? this.storeData.isSupportAnimation : n.a.isSupportAnimation()) && this.operatePasterAnimation && this.operatePasterAnimation.play()
          },
          clickOperatePaster: function() {
            var t = this.storeData,
              e = t.isClearScreen,
              a = t.screenType;
            if (!e && "horizontal" !== a) {
              var n = this.data.activityInfo.jump_type,
                r = this.data.activityInfo.jump_appid + "_" + this.data.activityInfo.jump_url;
              this.data.activityInfo.jump_type === i.a.ACTIVITY_JUMP_TYPE.H5 && o.a.openUrl({
                url: this.data.activityInfo.jump_url,
                success: function() {
                  this.addReportMMData({
                    actionType: 3,
                    subActionType: 17,
                    reserves: 1,
                    pasterLink: r
                  })
                },
                fail: function() {
                  this.addReportMMData({
                    actionType: 3,
                    subActionType: 17,
                    reserves: 2,
                    pasterLink: r
                  })
                }
              }), this.addReportMMData({
                actionType: 4,
                subActionType: 36,
                reserves: n + 1
              })
            }
          },
          navigateToMiniProgramSucc: function() {
            var t = this.data.activityInfo,
              e = t.jump_appid,
              a = t.jump_url;
            this.addReportMMData({
              actionType: 3,
              subActionType: 17,
              reserves: 1,
              pasterLink: "".concat(e, "_").concat(a)
            })
          },
          navigateToMiniProgramFail: function() {
            var t = this.data.activityInfo,
              e = t.jump_appid,
              a = t.jump_url;
            this.addReportMMData({
              actionType: 3,
              subActionType: 17,
              reserves: 2,
              pasterLink: "".concat(e, "_").concat(a)
            })
          }
        }
      })
    },
    75: function(t, e, a) {
      t.exports = a(372)
    }
  },
  entries: [
    [75, 0, 1, 3, 6, 2, 4, 5, 7, 12]
  ]
}]);
