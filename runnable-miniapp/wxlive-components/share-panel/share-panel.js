module.exports = require("../../_commons/0.js")([require("../../_commons/1.js"), require("../../_commons/3.js"), require("../../_commons/6.js"), require("../../_commons/2.js"), require("../../_commons/4.js"), require("../../_commons/5.js"), require("../../_commons/7.js"), require("../../_commons/8.js"), require("../../_commons/11.js"), require("../../_commons/13.js"), {
  ids: [83],
  modules: {
    444: function(e, t, r) {
      r.r(t);
      var o = r(7),
        a = r.n(o),
        n = r(0),
        s = r(3),
        i = r(1),
        c = r(2),
        l = r(11),
        h = r(5),
        p = r(15);

      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, o)
        }
        return r
      }

      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? u(Object(r), !0).forEach((function(t) {
            a()(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      Component({
        behaviors: [h.a, p.a],
        properties: {
          isShow: {
            type: Boolean,
            value: !1
          }
        },
        data: {
          componentName: "sharePanel",
          showSharePanel: !1,
          showShareFriends: !1,
          posterCreateing: !1,
          posterCreateOver: !1,
          showShareImageMenu: !1,
          posterCreateFail: !1,
          posterUrl: "",
          screenType: "",
          roomId: "",
          roomAppid: "",
          pluginAppid: "wx2b03c6e691cd7370",
          curOpenid: "",
          shareOpenid: "",
          customParams: "",
          openShareTicket: "",
          closePictureInPictureMode: !1,
          dataIsShow: !1,
          _isSupportShareImage: !1,
          imageContainerHeight: "460px",
          imageContainerTop: "50%",
          imageContainerTransformY: "-60%"
        },
        lifetimes: {
          attached: function() {
            this.uiCount();
            var e = !!wx.showShareImageMenu;
            this.setData({
              _isSupportShareImage: e
            })
          }
        },
        methods: {
          roomStaticInfoObserver: function(e) {
            var t = !+e.share_friends;
            c.a.compareVersion(this.storeData.systemInfo.SDKVersion, "2.11.3") >= 0 && !t && this.setData({
              showShareFriends: !0
            })
          },
          showSharePanelObserver: function() {
            this.setData({
              dataIsShow: this.storeData.showSharePanel
            })
          },
          getWxmlClientRect: function(e) {
            var t = this;
            return new Promise((function(r, o) {
              t.createSelectorQuery().select("#".concat(e)).boundingClientRect((function(e) {
                r(e)
              })).exec()
            }))
          },
          uiCount: function() {
            var e = l.a.getScreenHeight();
            "vertical" === this.storeData.screenType ? this.setData({
              minPanelHeight: 3 * e / 10 - 38,
              normalPanelHeight: 300
            }) : this.setData({
              minPanelHeight: e / 2,
              normalPanelHeight: e - 34
            })
          },
          sharePoster: function() {
            var e = this;
            this.logInfo("[分享] sharePoster");
            var t = (new Date).getTime();
            this.setData({
              showShareImageMenu: !1,
              posterCreateFail: !1,
              posterCreateing: !0
            });
            var r = this.storeData,
              o = r.roomId,
              a = r.roomAppid,
              c = r.pluginAppid,
              l = r.curLiveStatusCode,
              h = r.helpRankStatus,
              p = r.helpRankLeftTime,
              u = r.helpRankIsAllowStaff,
              g = this.getShareArgs();
            1 === h && p && p > 0 && (l === n.a.LIVE_STATUS.LIVE || l === n.a.LIVE_STATUS.PAUSE || l === n.a.LIVE_STATUS.ERROR) && (u ? (s.a.reportRank(m({}, this.getReqBase())).then((function(t) {
              e.logInfo("分享海报 Request.reportRank res: ", t)
            })).catch((function(t) {
              e.logError("分享海报 Request.reportRank err: ", t)
            })), this.liveManager.getUserInfo().then((function(t) {
              g = e.getShareArgs(t)
            }))) : s.a.getUserRole(m({}, this.getReqBase())).then((function(t) {
              e.logInfo("分享海报 获取用户角色 succ", t), t && t.role_list && 0 === t.role_list.length ? (e.storeSetData({
                isAudienceRole: !0
              }), s.a.reportRank(m({}, e.getReqBase())).then((function(t) {
                e.logInfo("分享海报 Request.reportRank res: ", t)
              })).catch((function(t) {
                e.logError("分享海报 Request.reportRank err: ", t)
              })), e.liveManager.getUserInfo().then((function(t) {
                g = e.getShareArgs(t)
              }))) : (e.storeSetData({
                isAudienceRole: !1
              }), i.a.tipsSimple("工作人员分享行为不计入助力榜，且无法为他人助力"))
            }))), s.a.getPosterUrl({
              roomId: o,
              pluginAppid: c,
              content: {
                args: g,
                use_qrcode: !0,
                room_appid: a,
                room_id: o
              }
            }).then((function(r) {
              e.logInfo("[分享] sharePoster succeed", r);
              var o = e,
                a = e.data._isSupportShareImage,
                n = r.poster_url.replace("http:", "https:");
              e.reportPerformance("GET_POSTER_URL_COST", (new Date).getTime() - t, "pluginVersion"), a ? (e.setData({
                posterUrl: n,
                posterCreateing: !1,
                posterCreateOver: !1,
                showShareImageMenu: !0
              }), wx.downloadFile({
                url: n,
                success: function(e) {
                  o.setData({
                    showShareImageMenu: !0,
                    posterCreateing: !1
                  }), wx.showShareImageMenu({
                    path: e.tempFilePath,
                    success: function() {
                      o.closeSharePanel()
                    },
                    fail: function(e) {
                      o.closeSharePanel(), o.logInfo("wx.showShareImageMenu fail: ", e)
                    }
                  })
                },
                fail: function(e) {
                  o.closeSharePanel(), this.logInfo("[生成海报失败]", e), i.a.tipsSimple("生成海报失败")
                }
              })) : (e.setData({
                posterUrl: n,
                posterCreateing: !1,
                posterCreateOver: !0
              }), e.getWxmlClientRect("poster").then((function(t) {
                var r = t.height,
                  o = e.data.screenType,
                  a = wx.getSystemInfoSync().windowHeight;
                if ("horizontal" === o) {
                  var n = a - r - 0 < 460;
                  e.setData({
                    ableScroll: n,
                    imageContainerHeight: a - r - 0 + "px",
                    imageContainerTop: "4px",
                    imageContainerTransformY: "0"
                  })
                } else {
                  var s = a - r - 0 - 88,
                    i = s > 460 ? 460 : s,
                    c = i < 460,
                    l = s > 460 ? 88 + (s - 460) / 2 : a - r - 0 - i;
                  e.setData({
                    ableScroll: c,
                    imageContainerHeight: i + "px",
                    imageContainerTop: l + "px",
                    imageContainerTransformY: "0"
                  })
                }
              })))
            })).catch((function(t) {
              e.logInfo("[分享] sharePoster err"), e.setData({
                posterCreateing: !1,
                posterCreateFail: !0
              })
            }))
          },
          savePoster: function() {
            var e = this.data.posterUrl;
            this.addReportMMData({
              actionType: 4,
              subActionType: 50
            }), this.logInfo("[分享] savePoster", e);
            var t = this;
            wx.downloadFile({
              url: e,
              success: function(e) {
                console.log(e), wx.saveImageToPhotosAlbum({
                  filePath: e.tempFilePath,
                  success: function() {
                    i.a.tipsSimple("保存成功")
                  },
                  fail: function(e) {
                    "saveImageToPhotosAlbum:fail auth deny" === e.errMsg || "saveImageToPhotosAlbum:fail authorize no response" === e.errMsg ? (t.logInfo("[分享海报保存权失败]"), i.a.tipsSimple("保存失败, 无权限")) : i.a.tipsSimple("保存失败")
                  }
                })
              },
              fail: function(e) {
                this.logInfo("[分享海报保存失败]", e), i.a.tipsSimple("保存失败")
              }
            })
          },
          closeSharePanel: function() {
            var e = this;
            this.logInfo("[分享] closeSharePanel"), this.setData({
              dataIsShow: !1
            }), setTimeout((function() {
              e.storeSetData({
                showSharePanel: !1
              })
            }), 200)
          },
          delayCloseSharePanel: function() {
            this.logInfo("[分享后] closeSharePanel"), this.storeSetData({
              showSharePanel: !1
            })
          }
        }
      })
    },
    84: function(e, t, r) {
      e.exports = r(444)
    }
  },
  entries: [
    [84, 0, 1, 3, 6, 2, 4, 5, 7, 8, 11, 13]
  ]
}]);
