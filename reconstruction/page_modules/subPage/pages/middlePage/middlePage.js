// Extracted from subPage/pages/middlePage/middlePage.js; webpack module "610b".
// Compiled code for analysis; not an original source file.
module.exports = {
    "610b": function(n, e, a) {
      (function(n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = {
          onLoad: function(e) {
            "miniProgram" === e.type ? n.navigateToMiniProgram({
              appId: e.appId ? e.appId : "wxf2cca76ae0520e33",
              path: e.path ? e.path : "",
              success: function(e) {
                n.setStorage({
                  key: "otherMiniprogramIsBack",
                  data: {
                    isBack: !0
                  },
                  success: function() {}
                })
              },
              fail: function(e) {
                n.navigateBack()
              }
            }) : n.navigateBack()
          },
          onShow: function() {
            n.getStorageSync("otherMiniprogramIsBack") && (n.removeStorageSync("otherMiniprogramIsBack"), n.navigateBack())
          },
          onReady: function() {},
          onPageScroll: function(n) {},
          data: function() {
            return {}
          },
          methods: {}
        };
        e.default = a
      }).call(this, a("df3c").default)
    },
};
