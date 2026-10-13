// Extracted from pages/setpassword/setpassword.js; webpack module ed7d.
// Compiled code for analysis; not an original source file.
module.exports = {
    ed7d: function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var o = {
        data: function() {
          return {
            codeTips: "",
            smsCode: ""
          }
        },
        filters: {
          mobileSubstr: function(e) {
            return e ? e.substr(0, 3) + "****" + e.substr(7) : "-"
          }
        },
        computed: {
          userInfo: function() {
            return this.$store.getters.userInfor
          }
        },
        onShow: function() {},
        methods: {
          codeChange: function(e) {
            this.codeTips = e
          },
          goPage: function() {
            var e = this;
            if (!this.smsCode) return this.$util.showToast("请输入正确验证码");
            this.$uniApi.getRequestNoLoading("GET", "manager/app/ignoreAuth/validSmsCode?phoneNumber=".concat(this.userInfo.mobilePhone, "&smsCode=").concat(this.smsCode), "正在验证中...").then((function(t) {
              1 === t.code ? e.$navigateTo({
                url: "/pages/setpassword1/setpassword1"
              }) : e.$util.showToast(t.msg)
            })).catch((function(t) {
              e.$util.showToast(t.msg)
            }))
          },
          getCode: function() {
            var e = this;
            if (this.$refs.uCode.canGetCode) {
              var t = {
                  phone: this.userInfo.mobilePhone,
                  time: (new Date).getTime()
                },
                n = this.$eventAnalyse.encrypt(t, "8nXB5qupfE2mwSeZ");
              this.$uniApi.getRequestYesLoading("POST", "manager/app/ignoreAuth/sendSmsCode?type=1&phoneNumber=".concat(this.userInfo.mobilePhone, "&sign=").concat(n), "正在获取验证码").then((function(t) {
                1 === t.code ? (e.$util.showSuccessToast("验证码已发送"), e.$refs.uCode.start()) : e.$util.showToast("验证码获取失败")
              })).catch((function(t) {
                e.$util.showToast("验证码获取失败")
              }))
            } else console.log("倒计时结束后再发送")
          }
        }
      };
      t.default = o
    }
};
