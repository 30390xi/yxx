// Extracted from pages/setpassword1/setpassword1.js; webpack module bff3.
// Compiled code for analysis; not an original source file.
module.exports = {
    bff3: function(n, t, e) {
      (function(n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var e = {
          data: function() {
            return {
              password: ""
            }
          },
          methods: {
            subBtn: function() {
              var t = this;
              this.password.length > 5 ? this.$uniApi.getRequestYesLoading("POST", "manager/app/v1/member/modifyPayPwd?password=".concat(this.password), "设置中").then((function(e) {
                1 === e.code && (t.$util.showSuccessToast("已修改"), t.$store.dispatch("getUserInfo", t.userInfo), setTimeout((function() {
                  n.switchTab({
                    url: "../mine/mine"
                  })
                }), 1e3))
              })).catch((function(n) {
                t.$util.showToast(n.msg)
              })) : this.$util.showToast("请输入支付密码")
            },
            changePwd: function(n) {
              this.password = n, console.log("内容改变，当前值为：" + n)
            }
          }
        };
        t.default = e
      }).call(this, e("df3c").default)
    },
};
