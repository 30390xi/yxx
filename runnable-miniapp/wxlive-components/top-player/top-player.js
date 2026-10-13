require("../../@babel/runtime/helpers/Arrayincludes");
module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), {
  ids: [86],
  modules: {
    364: function(e, t, o) {
      o.r(t);
      var a = o(5),
        i = o(0),
        s = o(2),
        r = o(1);
      Component({
        behaviors: [a.a],
        options: {
          multipleSlots: !0,
          addGlobalClass: !0
        },
        properties: {
          back: {
            type: Boolean,
            value: !0
          },
          loading: {
            type: Boolean,
            value: !1
          },
          show: {
            type: Boolean,
            value: !0,
            observer: "_showChange"
          }
        },
        data: {
          componentName: "topPanel",
          displayStyle: "",
          isBgMeeting: !1,
          isClearScreen: !1,
          animated: !0,
          navigationBtn: "",
          screenType: "",
          isIos: !1,
          innerWidth: "",
          innerPaddingRight: "",
          statusBarHeight: 0,
          hideShare: !1,
          isShareFriendsScene: !1,
          isHideLiveRoom: !1,
          playGoodsRecordId: 0,
          goodsRecordFrom: 0,
          watchPvTotal: 0,
          likeTotal: 0
        },
        pageLifetimes: {
          show: function() {
            this.getPaddingTop(), setTimeout(this.getPaddingTop.bind(this), 600)
          },
          resize: function(e) {
            this.getPaddingTop(), setTimeout(this.getPaddingTop.bind(this), 600)
          }
        },
        methods: {
          onStoreDataReady: function() {
            this.getPaddingTop(), setTimeout(this.getPaddingTop.bind(this), 600)
          },
          screenTypeObserver: function() {
            this.getPaddingTop(), setTimeout(this.getPaddingTop.bind(this), 600)
          },
          getPaddingTop: function() {
            try {
              var e = !!wx.getMenuButtonBoundingClientRect;
              this.getPaddingTopUseAPI(), e || (this.storeSetData({
                isSupportBounding: !1,
                innerWidth: "",
                innerPaddingRight: ""
              }), this.getPaddingTopUseStatusBar())
            } catch (e) {
              this.storeSetData({
                isSupportBounding: !1
              }), this.getPaddingTopUseStatusBar()
            }
          },
          onTapBar: function() {
            this.storeData.isClearScreen && this.storeSetData({
              isClearScreen: !1
            })
          },
          getPaddingTopUseStatusBar: function() {
            var e, t = this,
              o = wx.getSystemInfoSync(),
              a = this.storeData,
              i = a.screenType,
              s = a.isIos;
            e = "horizontal" !== i || s ? "horizontal" !== i ? o.statusBarHeight - 1 : "horizontal" === i && s && 0 !== o.statusBarHeight ? o.statusBarHeight - 6 : 0 : 0, this.storeSetData({
              isSupportBounding: !1,
              innerWidth: "",
              innerPaddingRight: ""
            });
            var r = this.createSelectorQuery().select("#watermarkId");
            r ? r && r.fields({
              rect: !0,
              size: !0
            }, (function(o) {
              var a = o && o.bottom;
              t.storeSetData({
                statusBarHeight: e,
                waterMarkBottom: a || e + 44 + 24
              })
            })).exec() : this.storeSetData({
              statusBarHeight: e,
              waterMarkBottom: e + 44 + 24
            })
          },
          getPaddingTopUseAPI: function(e) {
            var t, o = this,
              a = wx.getSystemInfoSync(),
              i = wx.getMenuButtonBoundingClientRect();
            if (i) {
              t = i.top - (42 - i.height) / 2, this.setData({
                isSupportBounding: !0,
                innerWidth: "width:" + i.left + "px",
                innerPaddingRight: "padding-right:" + (a.windowWidth - i.left) + "px",
                statusBarHeight: t
              });
              var s = this.createSelectorQuery().select("#watermarkId");
              s && s.fields({
                rect: !0,
                size: !0
              }, (function(e) {
                var t = e && e.bottom;
                o.storeSetData({
                  waterMarkBottom: t
                })
              })).exec()
            }
          },
          _showChange: function(e) {
            var t;
            t = this.data.animated ? "opacity: " + (e ? "1" : "0") + ";-webkit-transition:opacity 0.5s;transition:opacity 0.5s;" : "display: " + (e ? "" : "none"), this.setData({
              displayStyle: t
            })
          },
          onGobackHome: function() {
            var e = this.storeData,
              t = e.homePage,
              o = e.roomId,
              a = e.curOpenid,
              i = e.shareOpenId,
              s = e.customParams;
            if (!t) return this.logError("onGobackHome no homePage", {
              roomId: o
            }), void r.a.tipsSimple("异常错误，无法跳转首页");
            var n = [];
            "/" !== t[0] && n.push("/"), n.push(t), "?" !== t[t.length - 1] && (t.includes("?") ? n.push("&") : n.push("?")), n.push("room_id=".concat(o, "&openid=").concat(a, "&custom_params=").concat(s)), i && n.push("&share_openid=".concat(i));
            var h = n.join("");
            this.logInfo("[onGobackHome] ", {
              curHomePage: h,
              homePage: t
            }), r.a.reLaunch(h)
          },
          onBack: function() {
            var e = this,
              t = this.storeData,
              o = t.isPushStream,
              a = t.screenType,
              s = t.showReplay,
              r = t.curLiveStatusCode,
              n = t.showPushComment,
              h = t.showStorePanel,
              d = t.showRecord,
              c = t.closePictureInPictureMode,
              u = t.showGobackHome;
            if (this.logInfo("[onBack] 点击", {
                isPushStream: o,
                screenType: a,
                showReplay: s,
                curLiveStatusCode: r,
                showStorePanel: h,
                closePictureInPictureMode: c,
                showGobackHome: u
              }), h) this.storeSetData({
              showStorePanel: !1
            });
            else if (n) this.storeSetData({
              showPushComment: !1
            });
            else if (!s || ("horizontal" === a ? setTimeout((function() {
                e.liveManager.setPageOrientation("portrait")
              }), 60) : this.storeSetData({
                showReplay: !1,
                curLiveStatusCode: i.a.LIVE_STATUS.END,
                isClearScreen: !1
              }), this.storeData.replayNavigateBack)) {
              if (d) return this.data.goodsRecordFrom === i.a.LIVE_STATUS.LIVE && r === i.a.LIVE_STATUS.REPLAY ? this.storeSetData({
                showRecord: !1,
                showVideoDotList: !1,
                curLiveStatusCode: i.a.LIVE_STATUS.END
              }) : r === i.a.LIVE_STATUS.END && o && "horizontal" === a ? (this.storeSetData({
                showRecord: !1,
                showVideoDotList: !1
              }, (function() {
                console.log("执行了回调")
              })), setTimeout((function() {
                e.liveManager.setPageOrientation("portrait")
              }), 60)) : r === i.a.LIVE_STATUS.REPLAY ? this.storeSetData({
                showReplay: !0,
                showRecord: !1,
                showVideoDotList: !1
              }) : this.storeSetData({
                showRecord: !1,
                showVideoDotList: !1
              }), void this.liveManager.addReportMMData({
                actionType: 4,
                subActionType: 43,
                goodsId: this.data.playGoodsRecordId
              });
              if (o && "horizontal" === a) return this.logInfo("[onBack] setPageOrientation portrait"), this.liveManager.setPageOrientation("portrait"), this.liveManager.addReportMMData({
                actionType: 4,
                subActionType: 37,
                reserves: 2
              }), void this.storeSetData({
                isClearScreen: !1
              });
              c || this.liveManager.addReportMMData({
                actionType: 6,
                subActionType: 1,
                reserves: u ? 3 : 2
              }), wx.navigateBack({
                delta: 1
              })
            }
          },
          hideShareObserver: function(e, t) {
            var o = e !== t;
            o && (this.logInfo("hide share menu", {
              needUpdateShare: o,
              hideShare: e
            }), e ? wx.hideShareMenu({
              menus: ["shareAppMessage", "shareTimeline"]
            }) : wx.showShareMenu({
              withShareTicket: !!this.storeData.openShareTicket,
              menus: ["shareAppMessage", "shareTimeline"]
            }))
          },
          roomStaticInfoObserver: function(e) {
            var t = !+e.share_friends;
            s.a.compareVersion(this.storeData.systemInfo.SDKVersion, "2.11.3") >= 0 && t && (this.logInfo("hide share friends", t), wx.hideShareMenu({
              menus: ["shareTimeline"]
            }))
          }
        }
      })
    },
    74: function(e, t, o) {
      e.exports = o(364)
    }
  },
  entries: [
    [74, 0, 1, 3, 6, 2, 4, 5, 7]
  ]
}]);
