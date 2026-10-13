module.exports = require("../../../_commons/0.js")([require("../../../_commons/1.js"), require("../../../_commons/3.js"), require("../../../_commons/6.js"), require("../../../_commons/2.js"), require("../../../_commons/4.js"), require("../../../_commons/5.js"), require("../../../_commons/8.js"), {
  ids: [57],
  modules: {
    102: function(e, t, a) {
      e.exports = a(585)
    },
    585: function(e, t, a) {
      a.r(t);
      var r = a(7),
        o = a.n(r),
        n = a(11),
        i = a(3),
        s = a(2);

      function p(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), a.push.apply(a, r)
        }
        return a
      }

      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p(Object(a), !0).forEach((function(t) {
            o()(e, t, a[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : p(Object(a)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
          }))
        }
        return e
      }
      Component({
        options: {
          styleIsolation: "page-apply-shared"
        },
        properties: {
          livePlayerOptions: String
        },
        data: {
          pageStatus: "choice",
          reportItems: [{
            type: "低俗色情",
            value: "value0",
            checked: !1
          }, {
            type: "非法政治",
            value: "value1",
            checked: !1
          }, {
            type: "出售假冒禁售商品",
            value: "value2",
            checked: !1
          }, {
            type: "引导线下或其他平台交易",
            value: "value3",
            checked: !1
          }, {
            type: "侵权盗播",
            value: "value4",
            checked: !1
          }, {
            type: "长期空镜或换人直播",
            value: "value5",
            checked: !1
          }, {
            type: "其它",
            value: "value6",
            checked: !1
          }],
          roomImg: "",
          roomTitle: "",
          roomDateRange: "",
          weappName: "",
          reportContent: "",
          mpName: "",
          uiPagePaddingTop: 0,
          statusBarHeight: 0
        },
        methods: {
          onLoad: function(e) {
            n.a.setNavFontColor("#f7f7f7"), this.initPageData(e)
          },
          onShow: function() {},
          _findLiveManager: function() {
            for (var e = getCurrentPages(), t = e.length; t >= 0;) {
              if (e[t] && e[t].liveManager) return e[t].liveManager;
              t -= 1
            }
            return null
          },
          initPageData: function(e) {
            var t = this.data.reportItems;
            if (this.liveManager = this._findLiveManager(), this.liveManager && this.liveManager.data) {
              e.mpName && (t = [{
                type: "诱导关注",
                value: "value",
                checked: !1
              }].concat(t));
              var a = this.liveManager.data,
                r = s.a.formatDate(a.roomStartTime).substr(5) + "-" + s.a.formatDate(a.roomEndTime).substr(12),
                o = a.statusBarHeight || wx.getSystemInfoSync() && wx.getSystemInfoSync().statusBarHeight;
              this.setData({
                roomImg: a.roomImg,
                roomTitle: a.roomTitle,
                roomDateRange: r,
                weappName: a.weappName,
                statusBarHeight: o,
                mpName: e.mpName,
                reportItems: t,
                reportOpenid: a.curOpenid,
                reportNickname: a.userInfo && a.userInfo.nickname || ""
              }), this.liveManager.setData({
                showProfileModal: !1
              })
            } else console.error("[complaint-room] liveManager null", pageList)
          },
          onSelectType: function(e) {
            var t = "",
              a = e.detail.value;
            this.data.reportItems.forEach((function(e) {
              a === e.value && (t = e.type)
            })), this.setData({
              pageStatus: "write",
              reportType: t
            })
          },
          onInput: function(e) {
            var t = e.detail.value;
            this.setData({
              reportContent: t || ""
            })
          },
          onSubmit: function() {
            var e = this;
            if (this.data.reportContent && 0 !== this.data.reportContent.length) {
              var t = this.liveManager.getReqBase(),
                a = {
                  actionType: 3,
                  subActionType: 9
                };
              this.liveManager.addReportMMData(a), i.a.reportRoom(c(c({}, t), {}, {
                content: {
                  reportContent: this.data.reportContent,
                  reportType: this.data.reportType,
                  reportOpenid: this.data.reportOpenid,
                  reportNickname: this.data.reportNickname
                },
                report_data: this.liveManager.getReportData(a)
              })).then((function(t) {
                e.setData({
                  pageStatus: "done"
                })
              })).catch((function(e) {}))
            }
          },
          onClose: function() {
            wx.navigateBack({
              delta: 1
            })
          }
        }
      })
    }
  },
  entries: [
    [102, 0, 1, 3, 6, 2, 4, 5, 8]
  ]
}]);
