(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/register/register"], {
    "0715": function(e, n, t) {
      t.d(n, "b", (function() {
        return i
      })), t.d(n, "c", (function() {
        return r
      })), t.d(n, "a", (function() {
        return o
      }));
      var o = {
          uniNavbar: function() {
            return t.e("components/uni-navbar/uni-navbar").then(t.bind(null, "101a"))
          },
          uVerificationCode: function() {
            return t.e("uview-ui/components/u-verification-code/u-verification-code").then(t.bind(null, "ef6d"))
          },
          uForm: function() {
            return t.e("uview-ui/components/u-form/u-form").then(t.bind(null, "3a6f"))
          },
          uFormItem: function() {
            return Promise.all([t.e("common/vendor"), t.e("uview-ui/components/u-form-item/u-form-item")]).then(t.bind(null, "09a7"))
          },
          uInput: function() {
            return Promise.all([t.e("common/vendor"), t.e("uview-ui/components/u-input/u-input")]).then(t.bind(null, "5cbc"))
          }
        },
        i = function() {
          this.$createElement;
          this._self._c
        },
        r = []
    },
    "2db0": function(e, n, t) {
      t.r(n);
      var o = t("0715"),
        i = t("37b7");
      for (var r in i)["default"].indexOf(r) < 0 && function(e) {
        t.d(n, e, (function() {
          return i[e]
        }))
      }(r);
      t("56cf");
      var u = t("828b"),
        a = Object(u.a)(i.default, o.b, o.c, !1, null, "2042da57", null, !1, o.a, void 0);
      n.default = a.exports
    },
    "37b7": function(e, n, t) {
      t.r(n);
      var o = t("717d"),
        i = t.n(o);
      for (var r in o)["default"].indexOf(r) < 0 && function(e) {
        t.d(n, e, (function() {
          return o[e]
        }))
      }(r);
      n.default = i.a
    },
    "4fce": function(e, n, t) {},
    "56cf": function(e, n, t) {
      var o = t("4fce");
      t.n(o).a
    },
    "717d": function(e, n, t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var o = t("7dd9"),
        i = {
          data: function() {
            return {
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
                  validator: function(e, n, t) {
                    return (0, o.validatePhone)(n)
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
              pathType: 0
            }
          },
          onLoad: function(e) {
            this.pathType = e.pathType || 0
          },
          onReady: function() {
            this.$refs.uForm.setRules(this.rules)
          },
          computed: {
            distributorId: function() {
              return this.$store.getters.distributorId
            }
          },
          methods: {
            submit: function() {
              var e = this;
              this.$refs.uForm.validate((function(n) {
                var t;
                n && (e.loadingStatus = !0, t = e.distributorId ? "manager/app/ignoreAuth/register/".concat(e.loginForm.username, "/").concat(e.loginForm.password, "/").concat(e.loginForm.code, "?referrer=").concat(e.distributorId) : "manager/app/ignoreAuth/register/".concat(e.loginForm.username, "/").concat(e.loginForm.password, "/").concat(e.loginForm.code), e.$uniApi.getRequestNoLoading("POST", t).then((function(n) {
                  e.loadingStatus = !1, 1 === n.code ? (e.$util.showSuccessToast("注册成功"), e.$refs.uForm.resetFields(), setTimeout((function(n) {
                    e.$util.goBack()
                  }), 1e3)) : e.$util.showToast(n.msg)
                })).catch((function(n) {
                  e.loadingStatus = !1, console.log(n)
                })))
              }))
            },
            codeChange: function(e) {
              this.codeTips = e
            },
            getCode: function() {
              var e = this;
              if (this.$refs.uCode.canGetCode)
                if ((0, o.validatePhone)(this.loginForm.username)) {
                  var n = {
                      phone: this.loginForm.username,
                      time: (new Date).getTime()
                    },
                    t = this.$eventAnalyse.encrypt(n, "8nXB5qupfE2mwSeZ");
                  this.$uniApi.getRequestYesLoading("POST", "manager/app/ignoreAuth/sendSmsCode?type=1&phoneNumber=".concat(this.loginForm.username, "&sign=").concat(t), "正在获取验证码").then((function(n) {
                    1 === n.code ? (e.$util.showSuccessToast("验证码已发送"), e.$refs.uCode.start()) : e.$util.showToast("验证码获取失败")
                  })).catch((function(n) {
                    e.$util.showToast("验证码获取失败")
                  }))
                } else this.$util.showToast("请输入正确手机号");
              else console.log("倒计时结束后再发送")
            },
            goServer: function() {
              this.$navigateTo({
                url: "../termsservice/termsservice"
              })
            }
          }
        };
      n.default = i
    },
    e150: function(e, n, t) {
      (function(e, n) {
        var o = t("47a9");
        t("5366"), o(t("3240"));
        var i = o(t("2db0"));
        e.__webpack_require_UNI_MP_PLUGIN__ = t, n(i.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    }
  },
  [
    ["e150", "common/runtime", "common/vendor"]
  ]
]);
