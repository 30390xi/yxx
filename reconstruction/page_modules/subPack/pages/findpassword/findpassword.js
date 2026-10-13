// Extracted from subPack/pages/findpassword/findpassword.js; webpack module cb1c.
// Compiled code for analysis; not an original source file.
module.exports = {
    cb1c: function(e, n, t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var o = t("7dd9"),
        i = {
          data: function() {
            return {
              clearable: !0,
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
                  message: "请输入手机号",
                  trigger: ["change", "blur"]
                }, {
                  validator: function(e, n, t) {
                    return (0, o.validatePhone)(n)
                  },
                  message: "手机号码不正确",
                  trigger: ["change", "blur"]
                }],
                code: [{
                  required: !0,
                  message: "请输入验证码",
                  trigger: ["change", "blur"]
                }],
                password: [{
                  required: !0,
                  message: "请输入密码",
                  trigger: ["change", "blur"]
                }, {
                  pattern: /^[a-zA-Z0-9]{6,8}$/,
                  message: "需由6-8位数字、数字加字母组成",
                  trigger: ["change", "blur"]
                }]
              }
            }
          },
          onReady: function() {
            this.$refs.uForm.setRules(this.rules)
          },
          methods: {
            submit: function() {
              var e = this;
              this.$refs.uForm.validate((function(n) {
                if (n) {
                  e.loadingStatus = !0;
                  var t = "manager/app/ignoreAuth/forgetPwd/".concat(e.loginForm.username, "/").concat(e.loginForm.password, "/").concat(e.loginForm.code);
                  e.$uniApi.getRequestNoLoading("GET", t).then((function(n) {
                    e.loadingStatus = !1, 1 === n.code ? (e.$util.showSuccessToast("修改成功"), e.$refs.uForm.resetFields(), setTimeout((function(n) {
                      e.$util.goBack()
                    }), 1e3)) : e.$util.showToast(n.msg)
                  })).catch((function(n) {
                    e.loadingStatus = !1, console.log(n)
                  }))
                }
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
            }
          }
        };
      n.default = i
    },
};
