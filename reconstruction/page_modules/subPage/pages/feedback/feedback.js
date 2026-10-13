// Extracted from subPage/pages/feedback/feedback.js; webpack module "35c5".
// Compiled code for analysis; not an original source file.
module.exports = {
    "35c5": function(e, n, t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = {
        data: function() {
          return {
            textareanum: "",
            num: 0,
            action: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
            uploadArr: []
          }
        },
        onLoad: function() {},
        methods: {
          onSubmit: function() {
            var e = this,
              n = {
                feedbackMemo: this.textareanum,
                feedbackPic: this.uploadArr.join(",")
              };
            if (!this.textareanum) return this.$refs.uToast.show({
              title: "内容不能空",
              type: "warning"
            });
            this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/feedback", n).then((function(n) {
              1 == n.code && (e.textareanum = "", e.uploadArr = [], e.$refs.uToast.show({
                title: "已提交",
                type: "success"
              }), setTimeout((function() {
                e.$util.goBack()
              }), 500))
            }))
          },
          changefun: function() {
            this.num = this.textareanum.length
          },
          onUploaded: function(e) {
            this.uploadArr = e.map((function(e) {
              return e.response.data[0].maxImageUrl
            }))
          },
          onRemove: function(e, n) {
            this.uploadArr.splice(e, 1)
          }
        }
      };
      n.default = a
    },
};
