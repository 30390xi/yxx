(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/tabBar/tabBar"], {
    "0129": function(t, e, n) {
      n.d(e, "b", (function() {
        return a
      })), n.d(e, "c", (function() {
        return i
      })), n.d(e, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    "01b3": function(t, e, n) {
      var a = n("c40d");
      n.n(a).a
    },
    b133: function(t, e, n) {
      (function(t, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = {
          created: function() {
            var t = getCurrentPages();
            this.currentPath = "/" + t[t.length - 1].route
          },
          props: {
            grayFilter: {
              type: Number,
              default: 0
            }
          },
          data: function() {
            return {
              currentPath: "/pages/index/index",
              list: [{
                pagePath: "/pages/index/index",
                path: "../../static/images/home.png",
                activePath: "https://eshopfile.zhiyousx.com/ftab/home_s.png",
                text: "首页",
                i: 0
              }, {
                pagePath: "/pages/spot_list/spot_list",
                path: "https://eshopfile.zhiyousx.com/170065339283805814.png",
                activePath: "https://eshopfile.zhiyousx.com/ftab/city-s.png",
                text: "目的地",
                i: 1
              }, {
                pagePath: "/pages/rankList/rankList",
                path: "https://eshopfile.zhiyousx.com/170065353217030384.png",
                activePath: "https://eshopfile.zhiyousx.com/ftab/rank-s.png",
                text: "游榜单",
                i: 2
              }, {
                pagePath: "/pages/mine/mine",
                path: "https://eshopfile.zhiyousx.com/170065347302937689.png",
                activePath: "https://eshopfile.zhiyousx.com/ftab/mine-s.png",
                text: "我的",
                i: 3
              }],
              ani: null,
              context: null,
              loaded: !1
            }
          },
          methods: {
            router: function(e) {
              this.$eventAnalyse.analyse({
                eventTag: "tabBar_click",
                eventName: "底部tabBar",
                eventParams: JSON.stringify({
                  name: e.text,
                  pagePath: e.pagePath
                })
              }), e.pagePath != this.currentPath && t.switchTab({
                url: e.pagePath
              })
            },
            tofind: function() {
              this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?type=find"
              })
            },
            goAIServer: function() {
              var e = this;
              this.$eventAnalyse.analyse({
                eventTag: "tabBar_aiTravel_click",
                eventName: "底部旅行搭子tabBar点击",
                eventParams: JSON.stringify({
                  pagePath: "union/pages/aiTravel/index"
                })
              }), this.$uniApi.getRequestNoLoading("GET", "ai/planCard/queryRecent?openId=".concat(t.getStorageSync("wxopenid"))).then((function(t) {
                1 === t.code && (t.data ? e.$navigateTo({
                  url: "/union/pages/aiTravel/historyList?sessionId=".concat(t.data.sessionId, "&source=home")
                }) : e.$navigateTo({
                  url: "/union/pages/aiTravel/index"
                }))
              }))
            },
            getOpenid: function() {
              var e = this;
              t.login({
                success: function(a) {
                  e.$uniApi.getRequestNoLoading("GET", "manager/app/v1/wxPopular/getSessionKeyPro/".concat(a.code)).then((function(a) {
                    1 === a.code ? (t.setStorageSync("unionid", a.data.unionid), t.setStorageSync("wxopenid", a.data.openid), e.unionid = a.data.unionid, e.wxopenid = a.data.openid, n.navigateTo({
                      url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent("https://eshop.zhiyousx.com/dsmall-admin-ui/h5/transfer.html?unionid=" + e.unionid + "&wxopenid=" + e.wxopenid)
                    })) : e.$util.showToast(a.msg)
                  })).catch((function(t) {
                    e.$util.showToast(t.msg)
                  }))
                }
              })
            },
            jumpWeb: function() {
              this.$util.isLogin() && n.navigateTo({
                url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent("https://eshop.zhiyousx.com/dsmall-admin-ui/h5/transfer.html?unionid=" + this.unionid + "&wxopenid=" + this.wxopenid)
              })
            }
          }
        };
        e.default = a
      }).call(this, n("df3c").default, n("3223").default)
    },
    c40d: function(t, e, n) {},
    cc44: function(t, e, n) {
      n.r(e);
      var a = n("b133"),
        i = n.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(o);
      e.default = i.a
    },
    d657: function(t, e, n) {
      n.r(e);
      var a = n("0129"),
        i = n("cc44");
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(o);
      n("01b3");
      var s = n("828b"),
        c = Object(s.a)(i.default, a.b, a.c, !1, null, "696021a1", null, !1, a.a, void 0);
      e.default = c.exports
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/tabBar/tabBar-create-component", {
    "components/tabBar/tabBar-create-component": function(t, e, n) {
      n("df3c").createComponent(n("d657"))
    }
  },
  [
    ["components/tabBar/tabBar-create-component"]
  ]
]);
