// Extracted from subPage/pages/changepassword/changepassword.js; webpack module 9058.
// Compiled code for analysis; not an original source file.
module.exports = {
    9058: function(e, n, o) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0, o("e7a3");
      var t = {
        data: function() {
          return {
            loadingStatus: !1,
            codeTips: "",
            loginForm: {
              password: "",
              code: ""
            },
            errorType: ["message"],
            rules: {
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
        computed: {
          userInfo: function() {
            return this.$store.getters.userInfor
          }
        },
        filters: {
          mobileSubstr: function(e) {
            return e ? e.substr(0, 3) + "****" + e.substr(7) : "-"
          }
        },
        methods: {
          submit: function() {
            var e = this;
            this.$refs.uForm.validate((function(n) {
              if (n) {
                var o = {
                  password: e.loginForm.password,
                  mobilePhone: e.userInfo.mobilePhone
                };
                e.loadingStatus = !0, e.$uniApi.dataRequestNoLoading("POST", "manager/app/v1/member/updatePwdForSmsCode?smsCode=" + e.loginForm.code, o).then((function(n) {
                  e.loadingStatus = !1, 1 === n.code ? (e.$util.showSuccessToast("修改成功"), e.$refs.uForm.resetFields(), setTimeout((function(n) {
                    e.$util.goBack()
                  }), 500)) : e.$util.showToast(n.msg)
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
            if (this.$refs.uCode.canGetCode) {
              var n = {
                  phone: this.userInfo.mobilePhone,
                  time: (new Date).getTime()
                },
                o = this.$eventAnalyse.encrypt(n, "8nXB5qupfE2mwSeZ");
              this.$uniApi.getRequestYesLoading("POST", "manager/app/ignoreAuth/sendSmsCode?type=1&phoneNumber=".concat(this.userInfo.mobilePhone, "&sign=").concat(o), "正在获取验证码").then((function(n) {
                1 === n.code ? (e.$util.showSuccessToast("验证码已发送"), e.$refs.uCode.start()) : e.$util.showToast("验证码获取失败")
              })).catch((function(n) {
                e.$util.showToast("验证码获取失败")
              }))
            } else console.log("倒计时结束后再发送")
          }
        }
      };
      n.default = t
    },
};
