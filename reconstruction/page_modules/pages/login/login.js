// Extracted from pages/login/login.js; webpack module f607.
// Compiled code for analysis; not an original source file.
module.exports = {
    f607: function(e, t, n) {
      (function(e, o) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = n("7dd9"),
          i = {
            data: function() {
              return {
                login401: "200",
                loginType: 1,
                loadingStatus: !1,
                codeTips: "",
                loginForm: {
                  username: "",
                  password: "",
                  code: ""
                },
                errorType: ["message"],
                rules: {
                  username: [{
                    required: !0,
                    message: "请输入手机号"
                  }, {
                    validator: function(e, t, n) {
                      return (0, a.validatePhone)(t)
                    },
                    message: "手机号码不正确"
                  }],
                  code: [{
                    required: !0,
                    message: "请输入验证码"
                  }],
                  password: [{
                    required: !0,
                    message: "请输入密码"
                  }, {
                    pattern: /^[a-zA-Z0-9]{6,8}$/,
                    message: "需由6-8位数字、数字加字母组成"
                  }]
                },
                jumpObj: {
                  jumpPage: "",
                  templePage: "",
                  pathType: 0
                },
                checked: !1
              }
            },
            onLoad: function(t) {
              var n = this;
              t.type && (this.login401 = t.type), this.fromPage = t.from || "", this.weburl = t.url || "", this.yxid = t.yxid || "", this.jumpObj = {
                templePage: decodeURIComponent(t.templePage) || "",
                jumpPage: decodeURIComponent(t.jumpPage) || "",
                pathType: decodeURIComponent(t.pathType) || 0
              }, e.login({
                success: function(t) {
                  n.$uniApi.getRequestNoLoading("GET", "manager/app/v1/wxPopular/getSessionKeyPro/".concat(t.code)).then((function(t) {
                    1 === t.code ? (e.setStorageSync("wxopenid", t.data.openid), e.setStorageSync("unionid", t.data.unionid)) : n.$util.showToast(t.msg)
                  })).catch((function(e) {
                    n.$util.showToast(e.msg)
                  }))
                }
              })
            },
            onReady: function() {
              this.$refs.uForm.setRules(this.rules)
            },
            methods: {
              setCheck: function() {
                this.checked = !this.checked
              },
              submit: function() {
                var t = this;
                this.checked ? this.$refs.uForm.validate((function(n) {
                  var a = t;
                  if (n) {
                    var i, s = {
                      username: t.loginForm.username
                    };
                    0 === t.loginType ? (s.password = t.loginForm.password, i = "LoginByUsername") : (s.code = t.loginForm.code, i = "LoginByCode"), t.loadingStatus = !0, t.$store.dispatch(i, s).then((function(n) {
                      t.loadingStatus = !1, 1 === n.code ? (t.$store.state.islogin = !1, t.$util.showSuccessToast("已登录"), t.$refs.uForm.resetFields(), setTimeout((function(n) {
                        if (t.fromPage) {
                          var i = getApp().globalData.requestUrl.replace("api/", "");
                          if ("yxh5" == t.fromPage) {
                            var s = !1; - 1 == i.indexOf("eshopapi.zhiyousx.com") && -1 == i.indexOf("eshop.zhiyousx.com") && (s = !0);
                            var r = s ? "https://ysxdev.zhiyousx.com/yxdevH5/" : "https://yxh5.zhiyousx.com/yxH5/";
                            e.redirectTo({
                              url: "../webpage/webpage?url=".concat(r, "show*id+").concat(t.yxid)
                            })
                          } else "web" == t.fromPage ? o.reLaunch({
                            url: "../webpage/webpage?url=".concat(a.weburl)
                          }) : e.redirectTo({
                            url: "../webpage/webpage?url=".concat(i, "dsmall-admin-ui/h5/").concat(a.fromPage, ".html")
                          });
                          t.fromPage = ""
                        } else {
                          var u = t.jumpObj.jumpPage,
                            c = t.jumpObj.templePage,
                            d = e.getStorageSync("userInfor").chansiOpenId;
                          if (c && 1 != c && !d) return void o.redirectTo({
                            url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent(c)
                          });
                          if (u) e.redirectTo({
                            url: u
                          });
                          else getCurrentPages().length < 2 ? e.switchTab({
                            url: "../index/index"
                          }) : t.$util.prevPage()
                        }
                        e.removeStorage({
                          key: "wx_openid"
                        })
                      }), 500)) : t.$util.showToast(n.msg)
                    })).catch((function(e) {
                      t.loadingStatus = !1, t.$util.showToast(e.data.msg)
                    }))
                  }
                })) : this.$util.showToast("请先阅读并同意服务条款和隐私协议")
              },
              codeChange: function(e) {
                this.codeTips = e
              },
              getCode: function() {
                var e = this;
                if (this.$refs.uCode.canGetCode)
                  if ((0, a.validatePhone)(this.loginForm.username)) {
                    var t = {
                        phone: this.loginForm.username,
                        time: (new Date).getTime()
                      },
                      n = this.$eventAnalyse.encrypt(t, "8nXB5qupfE2mwSeZ");
                    this.$uniApi.getRequestYesLoading("POST", "manager/app/ignoreAuth/sendSmsCode?type=1&phoneNumber=".concat(this.loginForm.username, "&sign=").concat(n), "正在获取验证码").then((function(t) {
                      1 === t.code ? (e.$util.showSuccessToast("验证码已发送"), e.$refs.uCode.start()) : e.$util.showToast("验证码获取失败")
                    })).catch((function(t) {
                      e.$util.showToast("验证码获取失败")
                    }))
                  } else this.$util.showToast("请输入正确手机号");
                else console.log("倒计时结束后再发送")
              },
              typeBtn: function() {
                0 === this.loginType ? this.loginType = 1 : this.loginType = 0, this.$refs.uForm.resetFields()
              },
              goRegister: function() {
                this.checked ? this.$navigateTo({
                  url: "../register/register?pathType=" + this.jumpObj.pathType
                }) : this.$util.showToast("请先阅读并同意服务条款和隐私协议")
              },
              gofind: function() {
                this.$navigateTo({
                  url: "/subPack/pages/findpassword/findpassword?pathType=" + this.jumpObj.pathType
                })
              },
              goServer: function() {
                this.$navigateTo({
                  url: "../termsservice/termsservice"
                })
              },
              goServer1: function() {
                this.$navigateTo({
                  url: "/subPack/pages/protocol/protocol"
                })
              },
              bindGetUserInfo: function(t) {
                var n = this;
                if (t.detail.userInfo) {
                  var a = t.detail.userInfo,
                    i = a.nickName,
                    s = a.avatarUrl;
                  e.login({
                    provider: "weixin",
                    success: function(t) {
                      var a = requestUrl + "weChat/oauth";
                      n.$util.showLoadingToast("加载中"), e.request({
                        url: a,
                        method: "POST",
                        header: {
                          "content-type": "application/json"
                        },
                        data: {
                          jsCode: t.code,
                          nickname: i,
                          picUrl: s,
                          grantType: "authorization_code"
                        },
                        success: function(e) {
                          if (o.hideLoading(), 1 === e.data.code) {
                            var t = "bearer " + e.data.data.access_token;
                            o.setStorageSync("token", t), o.setStorageSync("refreshToken", e.data.data.refresh_token), o.setStorageSync("nickName", i), o.setStorageSync("nickAvatar", s), o.setStorageSync("openId", e.data.data.openId), o.setStorageSync("userId", e.data.data.userId), o.setStorageSync("overTime", e.data.data.overTime), util.showSuccessToast("登录成功", (function(e) {
                              o.navigateBack({
                                delta: 1
                              })
                            }))
                          } else util.showToast(e.data.msg)
                        }
                      })
                    }
                  })
                } else this.$util.showToast("允许授权后才能微信登录哟~")
              }
            }
          };
        t.default = i
      }).call(this, n("df3c").default, n("3223").default)
    }
};
