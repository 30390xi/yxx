require("../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["common/main"], {
    "08d7": function(e, t, a) {
      a.r(t);
      var o = a("21c5"),
        n = a.n(o);
      for (var r in o)["default"].indexOf(r) < 0 && function(e) {
        a.d(t, e, (function() {
          return o[e]
        }))
      }(r);
      t.default = n.a
    },
    "21c5": function(e, t, a) {
      (function(e, a) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = {
          globalData: {
            requestUrl: "https://eshopapi.zhiyousx.com/",
            jumpPage: "",
            templePage: "",
            pathType: 0,
            cityId: "",
            version: "v2.6.2",
            showvideo: !0,
            photoWallScenicId: "1516616676576112642",
            shareimg: "https://eshopfile.zhiyousx.com/2021092616084546112.jpg",
            httpList: {},
            StatusBar: 0,
            CustomBar: 0,
            seatOrderReturnType: 0,
            loadingData: !1,
            showTip: !1,
            showRank: !1,
            checkBox: !0,
            cardId: "",
            intro: "",
            avatarUrl: "",
            scenicRank: "",
            indexPage: null,
            optionsData: {},
            appVersion: "1.8.1",
            pandaPosition: {
              pandaIsLeft: !1,
              pandaY: -1,
              pandaX: -1
            },
            isTTS: !0,
            roleName: void 0,
            language: "",
            roleId: void 0,
            userInfo: void 0,
            roundID: 0,
            sessionId: (new Date).getTime() + "",
            stopText: "",
            showIntroduce: !1,
            showChooseLocation: !1,
            hasIntroduce: [],
            useVoice: !0,
            currentIntroduce: -1,
            useAutoLocation: !0,
            networkType: "unknown",
            isConnected: !0,
            loadFont: !1,
            loadFont1: !1
          },
          onLaunch: function(t) {
            var o, n, r, i, s = this;
            this.checkNetworkStatus(), this.listenNetworkChange(), e.setStorageSync("channel_header", ""), e.setStorageSync("source_header", ""), e.setStorageSync("shareMemberId_header", ""), e.setStorageSync("scene_mp", t.scene), this.optionsData = t, t.query.userSource && e.setStorageSync("source_header", t.query.userSource), t.query.channel && e.setStorageSync("channel_header", t.query.channel), (e.getAccountInfoSync().miniProgram.appId !== "wxf8549078eee81f5f") && this.getOpenid().then((function(t) {
              e.setStorageSync("unionid", t.unionid), e.setStorageSync("wxopenid", t.openid)
            })).catch((function() {
              console.warn("微信会话获取失败，继续游客浏览")
            })), this.$store.commit("SET_SOURCE_PAGE", ""), e.getSystemInfo({
              success: function(t) {
                s.$store.commit("SET_SYSTEM", t), s.globalData.StatusBar = t.statusBarHeight;
                var a = e.getMenuButtonBoundingClientRect();
                s.globalData.Custom = a, s.globalData.CustomBar = a.bottom + a.top - t.statusBarHeight
              }
            }), e.setStorageSync("unit", 100 / e.upx2px(100)), e.hideTabBar(), a.setInnerAudioOption({
              obeyMuteSwitch: !1
            }), a.onError((function(e) {
              console.error("全局错误捕获:", e)
            })), null === (o = (n = a).onUnhandledRejection) || void 0 === o || o.call(n, (function(e) {
              console.error("未处理的Promise拒绝:", e)
            })), null === (r = (i = a).onMemoryWarning) || void 0 === r || r.call(i, (function(e) {
              console.warn("内存告警:", (null == e ? void 0 : e.level) || "low")
            }));
            var u = this;
            ["navigateTo", "redirectTo", "switchTab", "navigateBack"].forEach((function(t) {
              e.addInterceptor(t, {
                invoke: function(e) {
                  u.watchRouter()
                },
                success: function(e) {
                  u.watchRouterSuccess()
                }
              })
            }))
          },
          methods: {
            watchRouterSuccess: function() {
              var t = getCurrentPages(),
                a = t[t.length - 1];
              if (a) {
                var o = a.$page.fullPath;
                if (o && (o.includes("userSource") || o.includes("channel") || o.includes("shareMemberId"))) {
                  var n = {},
                    r = o.split("?")[1];
                  if (r)
                    for (var i = r.split("&"), s = 0; s < i.length; s++) {
                      var u = i[s].split("=");
                      n[u[0]] = u[1]
                    }
                  var l = n.userSource,
                    c = n.channel;
                  l && e.setStorageSync("source_header", l), c && e.setStorageSync("channel_header", c)
                }
              }
            },
            watchRouter: function() {
              var e = this.globalData.httpList;
              for (var t in e) e[t].abort(), delete e[t]
            },
            getOpenid: function() {
              var t = this;
              return new Promise((function(a, o) {
                e.login({
                  success: function(n) {
                    e.request({
                      url: t.globalData.requestUrl + "manager/app/v1/wxPopular/getSessionKeyPro/".concat(n.code),
                      method: "GET",
                      success: function(e) {
                        1 === e.data.code ? a(e.data.data) : o(e)
                      },
                      fail: function(e) {
                        o(e)
                      }
                    })
                  }
                })
              }))
            },
            parseQueryString: function(e) {
              var t = {};
              return e.split("&").forEach((function(e) {
                var a = e.split("="),
                  o = a[0],
                  n = a[1];
                o && n && (t[o] = n)
              })), t
            },
            getShareUser: function(t) {
              var a = this,
                o = t.query.shareMemberId,
                n = t.query.scene;
              if (o) return e.setStorageSync("shareMemberId_header", o), void this.bindShareUser(o);
              if (n) {
                var r = t.path || "";
                if (r.includes("union/pages/aiVideo/loadPage") || r.includes("union/pages/aiTravel2/cardPage")) return;
                e.request({
                  url: this.globalData.requestUrl + "manager/app/v1/qrCodeScene/getScene?sceneId=" + n,
                  method: "GET",
                  success: function(t) {
                    if (1 === t.data.code) {
                      var n = a.parseQueryString(t.data.data.scene || "");
                      n.userSource && e.setStorageSync("source_header", n.userSource), n.channel && e.setStorageSync("channel_header", n.channel), o = t.data.data && t.data.data.referenceId || "";
                      var r = t.data.data.bizType ? t.data.data.bizType : 0;
                      o && 1 !== r && (e.setStorageSync("shareMemberId_header", o), a.bindShareUser(o))
                    }
                  }
                })
              }
            },
            bindShareUser: function(t) {
              var a = this,
                o = e.getStorageSync("wxopenid");
              o ? this.saveShareRelation({
                memberId: t,
                openId: o
              }) : this.getOpenid().then((function(n) {
                e.setStorageSync("unionid", n.unionid), e.setStorageSync("wxopenid", n.openid), o = n.openid, a.saveShareRelation({
                  memberId: t,
                  openId: o
                })
              }))
            },
            saveShareRelation: function(t) {
              e.request({
                url: this.globalData.requestUrl + "manager/app/v1/shareRelation/saveShareRelation",
                method: "POST",
                data: t,
                success: function(e) {}
              })
            },
            checkNetworkStatus: function() {
              var e = this;
              a.getNetworkType({
                success: function(t) {
                  var a = t.networkType,
                    o = "none" !== a;
                  e.updateNetworkStatus(a, o)
                },
                fail: function() {
                  e.updateNetworkStatus("unknown", !1)
                }
              })
            },
            listenNetworkChange: function() {
              var e = this;
              a.onNetworkStatusChange((function(t) {
                var a = t.networkType;
                e.updateNetworkStatus(a, t.isConnected)
              }))
            },
            updateNetworkStatus: function(e, t) {
              this.globalData.networkType = e, this.globalData.isConnected = t, t || this.showNoNetworkToast()
            },
            showNoNetworkToast: function() {
              var e = "en" == this.globalData.language ? "No internet connection." : "当前无网络，请检查网络设置";
              a.showToast({
                title: e,
                icon: "none",
                duration: 3e3,
                mask: !1
              })
            }
          },
          onShow: function(t) {
            var o, n, r, i, s, u, l, c, d, h, f, g, p, S, v = a.getStorageSync("global-data") || {};
            this.globalData.isTTS = null === (o = v.isTTS) || void 0 === o || o, this.globalData.roleName = null !== (n = v.roleName) && void 0 !== n ? n : void 0, this.globalData.language = null !== (r = v.language) && void 0 !== r ? r : "", this.globalData.roleId = null !== (i = v.roleId) && void 0 !== i ? i : void 0, this.globalData.userInfo = null !== (s = v.userInfo) && void 0 !== s ? s : void 0, this.globalData.roundID = null !== (u = v.roundID) && void 0 !== u ? u : 0, this.globalData.sessionId = null !== (l = v.sessionId) && void 0 !== l ? l : (new Date).getTime() + "", this.globalData.stopText = null !== (c = v.stopText) && void 0 !== c ? c : "", this.globalData.showIntroduce = null !== (d = v.showIntroduce) && void 0 !== d && d, this.globalData.showChooseLocation = null !== (h = v.showChooseLocation) && void 0 !== h && h, this.globalData.hasIntroduce = null !== (f = v.hasIntroduce) && void 0 !== f ? f : [], this.globalData.useVoice = null === (g = v.useVoice) || void 0 === g || g, this.globalData.currentIntroduce = null === (p = v.currentIntroduce) || void 0 === p || p, this.globalData.useAutoLocation = null === (S = v.useAutoLocation) || void 0 === S || S, t.query.userSource && e.setStorageSync("source_header", t.query.userSource), t.query.channel && e.setStorageSync("channel_header", t.query.channel), this.getShareUser(t);
            var b = e.getUpdateManager();
            b.onCheckForUpdate((function(t) {
              t.hasUpdate && b.onUpdateReady((function() {
                e.showModal({
                  title: "更新提示",
                  content: "新版本已经准备好，是否重启应用？",
                  success: function(e) {
                    e.confirm && b.applyUpdate()
                  }
                })
              }))
            }))
          },
          onHide: function(e) {
            a.setStorageSync("global-data", {
              isTTS: this.globalData.isTTS,
              roleName: this.globalData.roleName,
              language: this.globalData.language,
              roleId: this.globalData.roleId,
              userInfo: this.globalData.userInfo,
              roundID: this.globalData.roundID,
              sessionId: this.globalData.sessionId,
              stopText: this.globalData.stopText,
              showIntroduce: this.globalData.showIntroduce,
              showChooseLocation: this.globalData.showChooseLocation,
              hasIntroduce: this.globalData.hasIntroduce,
              useVoice: this.globalData.useVoice,
              currentIntroduce: this.globalData.currentIntroduce,
              useAutoLocation: this.globalData.useAutoLocation
            }), this.$eventAnalyse.subData()
          }
        };
        t.default = o
      }).call(this, a("df3c").default, a("3223").default)
    },
    2384: function(e, t, a) {
      (function(e, t) {
        var o = a("47a9"),
          n = o(a("7ca3"));
        a("5366");
        var r = o(a("3240")),
          i = o(a("78ac")),
          s = o(a("d724")),
          u = o(a("02e3")),
          l = o(a("c280")),
          c = o(a("f4b4")),
          d = o(a("6917")),
          h = o(a("0af7"));

        function f(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), a.push.apply(a, o)
          }
          return a
        }
        e.__webpack_require_UNI_MP_PLUGIN__ = a, r.default.mixin(d.default), r.default.use(h.default), r.default.prototype.$uniApi = u.default, r.default.prototype.$util = l.default, r.default.prototype.$bus = new r.default, r.default.config.productionTip = !1;
        var g = l.default.navigateTo;
        r.default.prototype.$navigateTo = g, r.default.prototype.$eventAnalyse = c.default, r.default.filter("saleNumFormat", (function(e) {
          if (!e) return 0;
          var t = Number(e);
          if (t >= 100 && t < 1e3) t = t.toString().slice(0, 1) + "00+";
          else if (t >= 1e3 && t < 1e4) t = t.toString().slice(0, 1) + "000+";
          else if (t >= 1e4) {
            var a = (t = (t / 1e4).toString()).indexOf(".");
            if (-1 === a) return t + "万+";
            var o = t.substring(0, a),
              n = t.substring(a + 1, a + 2);
            t = 0 == n ? o + "万+" : o + "." + n + "万+"
          }
          return t
        })), r.default.filter("numberFilter", (function(e) {
          var t = 0,
            a = "";
          return e ? (e >= 0 && e < 1e4 ? t = e : e >= 1e4 && e < 1e5 ? t = (Number(e) / 1e4).toFixed(3) : e >= 1e5 && e < 1e6 ? t = (Number(e) / 1e4).toFixed(2) : e >= 1e6 && e < 1e7 ? t = (Number(e) / 1e4).toFixed(1) : e >= 1e7 && e < 1e8 ? t = (Number(e) / 1e4).toFixed() : e >= 1e8 && (t = (Number(e) / 1e8).toFixed(3)), e >= 1e4 && e < 1e8 ? a = "万" : e >= 1e8 && (a = "亿"), t + a) : "--"
        })), r.default.filter("cardNameFilter", (function(e) {
          return {
            0: "身份证",
            1: "护照",
            2: "大陆居民往来港澳通行证",
            3: "大陆居民往来台湾通行证",
            4: "台胞证",
            5: "港澳通行证",
            6: "外国人永久居留证",
            7: "港澳台居民居住证",
            8: "军人证"
          } [e]
        })), i.default.mpType = "app";
        var p = new r.default(function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2 ? f(Object(a), !0).forEach((function(t) {
              (0, n.default)(e, t, a[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : f(Object(a)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
            }))
          }
          return e
        }({
          store: s.default
        }, i.default));
        t(p).$mount()
      }).call(this, a("3223").default, a("df3c").createApp)
    },
    6693: function(e, t, a) {},
    "6d38": function(e, t, a) {
      var o = a("6693");
      a.n(o).a
    },
    "78ac": function(e, t, a) {
      a.r(t);
      var o = a("08d7");
      for (var n in o)["default"].indexOf(n) < 0 && function(e) {
        a.d(t, e, (function() {
          return o[e]
        }))
      }(n);
      a("6d38");
      var r = a("828b"),
        i = Object(r.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
      t.default = i.exports
    }
  },
  [
    ["2384", "common/runtime", "common/vendor"]
  ]
]);
