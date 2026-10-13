// Extracted from subPack/pages/activity/bingfeng.js; webpack module "97ca".
// Compiled code for analysis; not an original source file.
module.exports = {
    "97ca": function(t, a, e) {
      (function(t) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0;
        var e = {
          data: function() {
            return {
              urlSrc: "",
              webviewStyles: {
                progress: {
                  color: "#f29200"
                }
              },
              shareConfigNot: []
            }
          },
          onLoad: function() {
            this.getActivityUrl()
          },
          onShareAppMessage: function(t) {
            if (this._shareObj) return this._shareObj
          },
          methods: {
            getActivityUrl: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "BF_JUMP_URL"
              }).then((function(a) {
                1 === a.code && (t.urlSrc = a.data.paramValue)
              }))
            },
            message: function(a) {
              var e = a.detail.data;
              this._shareObj = a.detail.data[0], e[1] && e[1].toMiniPro && t.openEmbeddedMiniProgram({
                appId: e[1].data.appId,
                path: e[1].data.wechatUrl
              }), e[1] && e[1].cityId && (getApp().globalData.cityId = e[1].cityId)
            }
          }
        };
        a.default = e
      }).call(this, e("df3c").default)
    },
};
