module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/8.js"), require("../../_commons/12.js"), require("../../_commons/28.js"), {
  ids: [79],
  modules: {
    53: function(t, e, o) {
      t.exports = o(589)
    },
    589: function(t, e, o) {
      o.r(e);
      var n = o(7),
        i = o.n(n),
        a = o(16),
        r = o.n(a),
        s = o(17),
        h = o.n(s),
        d = o(32),
        l = wx.getSystemInfoSync() || {},
        c = function() {
          function t(e) {
            var o = this,
              n = e.eleTag,
              i = e.path,
              a = e.width,
              s = e.height,
              h = e.that,
              c = e.loop,
              m = e.autoplay,
              p = e.onDOMLoaded;
            r()(this, t);
            var u = new d.default;
            this.path = i, h.createSelectorQuery().select(n).fields({
              size: !0,
              node: !0
            }, (function(t) {
              t && t.node || (o.fail = !0), console.log(n, ", lottieLib createSelectorQuery res", t);
              var e = t.node,
                r = e.getContext("2d"),
                h = wx.getSystemInfoSync().pixelRatio;
              e.width = a || t.width * h, e.height = s || t.height * h, u.setup(e);
              var d = l.platform,
                f = l.version,
                y = void 0 === f ? "" : f;
              y = y.split("."), o.animation = u.loadAnimation({
                loop: c,
                autoplay: m,
                renderer: "canvas",
                path: i,
                clearAnimation: !0,
                setPreLoad: !0,
                setGlobalAlphaError: ("android" === d || "ios" === d) && 7012 == +"".concat(y[0]).concat(y[1]).concat(y[2]),
                rendererSettings: {
                  context: r
                }
              }), p && (o.animation.onDOMLoaded = p), o.lottie = u, o.context = r, o.needStop && o.stop(), o.needPlay && o.play(), o.needRender && o.render(o.needRenderLoop, o.needRenderAutoplay), o.needPlaySegments && o.playSegments(o.playSegmentsOpt || {})
            })).exec()
          }
          return h()(t, [{
            key: "play",
            value: function() {
              this.fail || (this.animation ? (this.stop(), this.animation.play(), this.needPlay = !1) : this.needPlay = !0)
            }
          }, {
            key: "playSegments",
            value: function(t) {
              var e = t.duration,
                o = void 0 === e ? 6 : e,
                n = t.endFrame,
                i = void 0 === n ? 0 : n,
                a = t.startFrame,
                r = void 0 === a ? 0 : a;
              this.fail || (this.animation ? (this.animation.playSegments([
                [r, i || this.animation.totalFrames, {
                  duration: o
                }]
              ], !0), this.needPlaySegments = !1) : (this.needPlaySegments = !0, this.playSegmentsOpt = {
                duration: o,
                endFrame: i,
                startFrame: r
              }))
            }
          }, {
            key: "stop",
            value: function() {
              this.fail || (this.animation ? (this.animation.stop(), this.needStop = !1) : this.needStop = !0)
            }
          }, {
            key: "render",
            value: function(t, e) {
              if (!this.fail) {
                if (!this.animation) return this.needRender = !0, this.needRenderLoop = t, void(this.needRenderAutoplay = e);
                var o = l.platform,
                  n = l.version,
                  i = void 0 === n ? "" : n;
                i = i.split(".");
                var a = this.path,
                  r = this.lottie,
                  s = this.context;
                r && s && (this.animation = r.loadAnimation({
                  loop: t,
                  autoplay: e,
                  renderer: "canvas",
                  path: a,
                  clearAnimation: !0,
                  setGlobalAlphaError: ("android" === o || "ios" === o) && 7012 == +"".concat(i[0]).concat(i[1]).concat(i[2]),
                  rendererSettings: {
                    context: s
                  }
                }))
              }
            }
          }]), t
        }(),
        m = o(5),
        p = o(34),
        u = o(3);

      function f(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e && (n = n.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), o.push.apply(o, n)
        }
        return o
      }

      function y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2 ? f(Object(o), !0).forEach((function(e) {
            i()(t, e, o[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : f(Object(o)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
          }))
        }
        return t
      }
      Component({
        behaviors: [m.a, p.a],
        properties: {},
        data: {
          componentName: "profileCard",
          curLiveStatusCode: "",
          weappImg: "",
          weappName: "",
          isSubscribe: !1,
          isAttention: !1,
          watchPvTotalWording: 0,
          liveStatusWording: "",
          isBgMeeting: !1,
          showFollowV2: !1,
          isGovernment: !1,
          unreadAnimation: null,
          hasExtLiveRoom: !1
        },
        lifetimes: {
          attached: function() {
            this.loadInitData()
          }
        },
        methods: {
          loadInitData: function() {
            var t = this;
            u.a.getLiveCardDetail(y({}, this.getReqBase())).then((function(e) {
              t.storeSetData({
                profileExtRoomList: e.rooms || []
              }, (function() {
                t.storeData.hasExtLiveRoom && t.playRedDotAnimation()
              }))
            }))
          },
          onOpenModel: function() {
            var t = this,
              e = this.storeData,
              o = e.showPushComment,
              n = e.showStorePanel,
              i = e.showForbidUserList,
              a = e.showLotteryOper;
            if (o || n || i || a) return this.logInfo("关闭其他弹窗", {
              showPushComment: o,
              showStorePanel: n,
              showForbidUserList: i,
              showLotteryOper: a
            }), void this.storeSetData({
              showPushComment: !1,
              showStorePanel: !1,
              showForbidUserList: !1,
              showLotteryOper: !1
            });
            this.logInfo("打开profileModel"), this.addReportMMData({
              actionType: 4,
              subActionType: 48
            }), u.a.getLiveCardDetail(y({}, this.getReqBase())).then((function(e) {
              t.storeSetData({
                profileExtRoomList: e.rooms || []
              })
            })), this.storeSetData({
              showProfileModal: !0
            })
          },
          playRedDotAnimation: function() {
            var t = this;
            this.unreadAnimation && this.unreadAnimation.stop(), this.unreadAnimation = new c({
              eleTag: "#navigation__unread__canvas",
              path: "https://res.wx.qq.com/wxaliveplayer/htdocs/redDot530ac6.json",
              width: 10,
              height: 10,
              that: this,
              loop: !1,
              onDOMLoaded: function(e) {
                t.unreadAnimation.playSegments({
                  duration: 6
                })
              }
            })
          },
          stopRedDotAnimation: function() {
            this.unreadAnimation && (this.unreadAnimation.stop(), this.unreadAnimation = null)
          }
        }
      })
    }
  },
  entries: [
    [53, 0, 1, 3, 6, 2, 4, 5, 7, 8, 12, 28]
  ]
}]);
