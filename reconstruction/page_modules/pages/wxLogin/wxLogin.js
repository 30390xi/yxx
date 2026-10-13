// Extracted from pages/wxLogin/wxLogin.js; webpack module ae8c.
// Compiled code for analysis; not an original source file.
module.exports = {
    ae8c: function(e, t, a) {
      (function(e, o) {
        var n = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0, n(a("d724"));
        var i = {
          data: function() {
            return {
              type: "",
              jumpObj: {
                jumpPage: "",
                templePage: "",
                authCode: "",
                pathType: 0
              },
              loadingStatus: !1,
              hideNum: 10,
              isLoginShow: !1,
              hasAccount: !1
            }
          },
          onLoad: function(t) {
            var a = this,
              o = getCurrentPages(); - 1 == o[o.length - 2].route.indexOf("wxLogin") ? (this.isLoginShow = !0, this._login401 = t.type || "", this._sessionKey = "", this.fromPage = t.from || "", this.yxid = t.yxid || "", this.type = t.type || "", this.weburl = t.url || "", 1 == t.loseToken && (this.$store.dispatch("LOSE_TOKEN", "").then((function(e) {
              console.log("已抹除本地用户信息")
            })), this.reLogin()), this.jumpObj = {
              templePage: getApp().globalData.templePage || "",
              jumpPage: getApp().globalData.jumpPage || "",
              pathType: getApp().globalData.pathType || 0
            }, getApp().globalData.templePage = "", getApp().globalData.jumpPage = "", getApp().globalData.pathType = 0, e.login({
              success: function(e) {
                a.$uniApi.dataRequestNoLoading("POST", "manager/app/ignoreAuth/getMemberByCode", {
                  code: e.code
                }).then((function(e) {
                  1 === e.code && (a.hasAccount = !0)
                }))
              }
            })) : this.$util.prevPage()
          },
          methods: {
            getPhoneNumber: function() {
              var t = this,
                a = this;
              this.loadingStatus = !0, my.getPhoneNumber({
                success: function(n) {
                  var i = {
                    authCode: a.authCode,
                    phoneText: n.response
                  };
                  a.$uniApi.dataRequestYesLoading("POST", "manager/app/ignoreAuth/zfb/authLogin", i, "请求中").then((function(n) {
                    if (1 === n.code) {
                      t.loadingStatus = !1;
                      var i = "bearer " + n.data.token;
                      e.setStorageSync("token", i), t.$store.dispatch("setUserInfo", i).then((function(n) {
                        if (1 === n.code)
                          if (console.log(t.fromPage), t.fromPage) {
                            var i = getApp().globalData.requestUrl.replace("api/", "");
                            if ("yxh5" == t.fromPage) {
                              var u = !1; - 1 == i.indexOf("eshopapi.zhiyousx.com") && -1 == i.indexOf("eshop.zhiyousx.com") && (u = !0);
                              var c = u ? "https://ysxdev.zhiyousx.com/yxdevH5/" : "https://yxh5.zhiyousx.com/yxH5/";
                              e.redirectTo({
                                url: "../webpage/webpage?url=".concat(c, "show*id+").concat(t.yxid)
                              })
                            } else "web" == t.fromPage ? o.reLaunch({
                              url: "../webpage/webpage?url=".concat(a.weburl)
                            }) : "wallGuide" == t.fromPage ? t.$util.prevPage() : e.redirectTo({
                              url: "../webpage/webpage?url=".concat(i, "dsmall-admin-ui/h5/").concat(a.fromPage, ".html")
                            })
                          } else {
                            var r = t.jumpObj.jumpPage,
                              s = t.jumpObj.templePage,
                              g = e.getStorageSync("userInfor").chansiOpenId;
                            if (s && 1 != s && !g) return void o.redirectTo({
                              url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(s)
                            });
                            if (r) e.redirectTo({
                              url: r
                            });
                            else getCurrentPages().length < 2 ? e.switchTab({
                              url: "../index/index"
                            }) : t.$util.prevPage()
                          }
                        else t.$util.showToast(n.msg)
                      }))
                    } else t.$util.showToast(n.msg)
                  })).catch((function(e) {
                    t.$util.showToast(e.msg)
                  }))
                },
                fail: function(e) {
                  t.loadingStatus = !1, t.$util.showToast(e.msg)
                }
              })
            },
            handleAuthError: function(e) {
              my.alert({
                title: "用户拒绝授权",
                content: JSON.stringify(e.detail)
              })
            },
            defLogin: function() {
              var t = this;
              this.loadingStatus = !0, e.showLoading({
                title: "登录中",
                mask: !0
              }), e.login({
                success: function(a) {
                  t.$store.dispatch("WechatLoginByCode", {
                    code: a.code
                  }).then((function(a) {
                    t.loadingStatus = !1, e.hideLoading(), 1 === a.code ? (t.$store.state.islogin = !1, t.loginHandle()) : t.$util.showToast(a.msg)
                  })).catch((function(a) {
                    t.loadingStatus = !1, e.hideLoading()
                  }))
                }
              })
            },
            decryptPhoneNumber: function(t) {
              var a = this;
              "getPhoneNumber:fail user deny" != t.detail.errMsg && (this.loadingStatus = !0, e.showLoading({
                title: "登录中",
                mask: !0
              }), e.login({
                success: function(o) {
                  a.$store.dispatch("LoginByPhone", {
                    code: o.code,
                    iv: t.detail.iv,
                    encryptedData: t.detail.encryptedData
                  }).then((function(t) {
                    e.hideLoading(), a.loadingStatus = !1, 1 === t.code ? (a.$store.state.islogin = !1, a.loginHandle()) : a.$util.showToast(t.msg)
                  })).catch((function(t) {
                    a.loadingStatus = !1, e.hideLoading()
                  }))
                }
              }))
            },
            loginHandle: function() {
              if (this.fromPage) {
                var t = getApp().globalData.requestUrl.replace("api/", "");
                if ("yxh5" == this.fromPage) {
                  var a = !1; - 1 == t.indexOf("eshopapi.zhiyousx.com") && -1 == t.indexOf("eshop.zhiyousx.com") && (a = !0);
                  var n = a ? "https://ysxdev.zhiyousx.com/yxdevH5/" : "https://yxh5.zhiyousx.com/yxH5/";
                  e.redirectTo({
                    url: "../webpage/webpage?url=".concat(n, "show*id+").concat(this.yxid)
                  })
                } else "web" == this.fromPage ? o.reLaunch({
                  url: "../webpage/webpage?url=".concat(this.weburl)
                }) : "wallGuide" == this.fromPage ? this.$util.prevPage() : e.redirectTo({
                  url: "../webpage/webpage?url=".concat(t, "dsmall-admin-ui/h5/").concat(this.fromPage, ".html")
                })
              } else {
                var i = this.jumpObj.jumpPage,
                  u = this.jumpObj.templePage,
                  c = e.getStorageSync("userInfor").chansiOpenId;
                if (u && 1 != u && !c) return void e.redirectTo({
                  url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(u)
                });
                if (i) e.redirectTo({
                  url: i
                });
                else getCurrentPages().length < 2 ? e.switchTab({
                  url: "../index/index"
                }) : this.$util.prevPage()
              }
            },
            jumpPhoneLogin: function() {
              this.fromPage ? (e.redirectTo({
                url: "../login/login?type=".concat(this._login401, "&from=").concat(this.fromPage, "&yxid=").concat(this.yxid, "&url=").concat(this.weburl, "&templePage=").concat(encodeURIComponent(this.jumpObj.templePage), "&jumpPage=").concat(encodeURIComponent(this.jumpObj.jumpPage), "&pathType=").concat(encodeURIComponent(this.jumpObj.pathType))
              }), this.fromPage = "") : e.redirectTo({
                url: "../login/login?type=".concat(this._login401, "&templePage=").concat(encodeURIComponent(this.jumpObj.templePage), "&jumpPage=").concat(encodeURIComponent(this.jumpObj.jumpPage), "&pathType=").concat(encodeURIComponent(this.jumpObj.pathType))
              })
            },
            reLogin: function() {
              var t = this;
              e.login({
                success: function(e) {
                  t.$uniApi.dataRequestNoLoading("POST", "manager/app/ignoreAuth/getMemberByCode", {
                    code: e.code
                  }).then((function(e) {
                    1 === e.code && (t.hasAccount = !0)
                  }))
                }
              })
            },
            goRegister: function() {
              this.$navigateTo({
                url: "../register/register"
              })
            }
          }
        };
        t.default = i
      }).call(this, a("df3c").default, a("3223").default)
    },
};
