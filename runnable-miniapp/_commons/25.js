module.exports = {
  ids: [25],
  modules: {
    24: function(e, t, i) {
      var o = i(0),
        s = i(1),
        a = i(2);
      t.a = Behavior({
        data: {
          uiScreenWithWatermarkGap: 0,
          isHorizontalPC: !1,
          isAnimation: !1,
          isPCRequestFullScreen: !1
        },
        methods: {
          onResize: function(e) {
            var t = e && e.deviceOrientation;
            this.storeData.isIpad && this.liveManager.setPageOrientation(t)
          },
          reCountSize: function() {
            var e = this,
              t = s.a.getSystemInfoSync(),
              i = 24.14 * Math.max(t.windowWidth, t.windowHeight) / 100;
            i - this.data.screenVerticalHeight / 2 < 8 && (i = 8 + this.data.screenVerticalHeight / 2), this.storeSetData({
              isHorizontalPC: !a.a.isMobile() && t.windowWidth > t.windowHeight,
              uiScreenWithWatermarkGap: i,
              isAnimation: !1
            }), setTimeout((function() {
              e.storeSetData({
                isAnimation: !0
              })
            }), 200)
          },
          orignIsPushStreamObserver: function() {
            var e = this.storeData,
              t = e.orignIsPushStream,
              i = e.videoWidth,
              o = e.videoHeight;
            t && i && o && this.getScreenVerticalHeight(i, o, !0)
          },
          getScreenVerticalHeight: function(e, t) {
            var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              o = this.storeData,
              s = o.windowHeight,
              r = o.windowWidth,
              n = (o.screenVerticalHeight, o.orignIsPushStream),
              h = o.isMobile,
              c = o.isMac,
              d = o.isWindows,
              m = o.systemInfo;
            if (n && e && t && (t !== this.videoHeight || e !== this.videoWidth)) {
              this.logInfo("[getScreenVerticalHeight] 进入数据", {
                videoWidth: e,
                videoHeight: t,
                isServerInfo: i,
                windowHeight: s,
                windowWidth: r
              }), this.videoWidth = e, this.videoHeight = t;
              var l = e / t,
                S = !(l <= 2 / 3) && n,
                u = l >= 4 / 3 && (h || d || c && a.a.compareVersion(m.SDKVersion, "2.13.1") > -1),
                w = Math.min(s, r) / l,
                g = {
                  isPushStream: S,
                  screenVerticalHeight: w,
                  showHorizontalBtn: u
                };
              this.storeSetData(g)
            }
          },
          onHorizontalBtn: function() {
            var e = this.storeData,
              t = e.isPushStream,
              i = e.screenType,
              a = e.isMobile,
              r = e.isPC;
            this.closeExtComponent() || t && "horizontal" !== i && ((wx.getEnterOptionsSync && wx.getEnterOptionsSync().scene || -1) === o.a.SHARE_FRIENDS_SCENE ? s.a.tipsSimple("请前往小程序使用完整服务") : a ? this.liveManager.setPageOrientation("landscape") : r && this.storeSetData({
              isPCRequestFullScreen: !0
            }), this.addReportMMData({
              actionType: 4,
              subActionType: 37,
              reserves: 1
            }))
          },
          closeExtComponent: function() {
            var e = this.storeData,
              t = e.showPushComment,
              i = e.showStorePanel,
              o = e.showProfileModal,
              s = e.showForbidUserList,
              a = e.showLotteryOper;
            return !!(t || i || o || s || a) && (this.logInfo("点击播放层 关闭弹窗"), this.storeSetData({
              showPushComment: !1,
              showStorePanel: !1,
              showProfileModal: !1,
              showForbidUserList: !1,
              showLotteryOper: !1
            }), !0)
          },
          onClearScreen: function(e) {
            if (!this.closeExtComponent()) {
              var t = e.touches,
                i = (e.currentTarget.dataset.source, t[0].pageY),
                a = s.a.getSystemInfoSync(),
                r = this.storeData,
                n = r.curLiveStatusCode,
                h = r.isClearScreen,
                c = r.showVideoLoading,
                d = r.showRecord,
                m = this.data,
                l = m.showRoomImg,
                S = m.isLivePlaying;
              a.windowHeight - i < 100 && !h || (!c && n === o.a.LIVE_STATUS.REPLAY || !c && d || !l && S && n === o.a.LIVE_STATUS.LIVE ? this.storeSetData({
                isClearScreen: !h
              }) : h && this.storeSetData({
                isClearScreen: !1
              }))
            }
          },
          reportWatchTimeIncrement: function(e) {
            var t = this;
            clearTimeout(this._reportWatchTimeIncrementTimer), "start" === e && (this._preWatchRecordTime = Date.now());
            var i = 0;
            this._preWatchRecordTime > 0 && (i = Math.round((Date.now() - this._preWatchRecordTime) / 1e3), (i = Math.min(i, 10)) && this.addReportMMData({
              actionType: 1,
              subActionType: 4,
              reserves: Date.now(),
              watchTime: i
            })), "end" !== e && (this._preWatchRecordTime = Date.now(), this._reportWatchTimeIncrementTimer = setTimeout((function() {
              t.reportWatchTimeIncrement("ing")
            }), 5e3))
          }
        }
      })
    }
  }
};
