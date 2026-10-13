// Extracted from subPack/pages/evaluate/evaluate.js; webpack module e791.
// Compiled code for analysis; not an original source file.
module.exports = {
    e791: function(t, e, n) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = {
          data: function() {
            return {
              orderId: "",
              type: "",
              action: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
              commentList: []
            }
          },
          onLoad: function(t) {
            t.orderId && (this.orderId = t.orderId), t.type ? this.type = t.type : this.type = "", this.pageLoad()
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/order/getOrderStatusList?orderId=".concat(this.orderId, "&buyerId=").concat(this.userInfo.memberId)).then((function(e) {
                if (1 === e.code) {
                  var n = e.data.records[0].items;
                  n.forEach((function(t) {
                    t.commentContent = "", t.itemCommentPics = []
                  })), t.commentList = n
                }
              }))
            },
            onSubmit: function() {
              var e = this;
              if (this.commentList.every((function(t) {
                  return t.commentContent
                }))) {
                var n = [];
                this.commentList.forEach((function(t, o) {
                  var u = e.$refs["uUpload" + o];
                  t.itemCommentPics = u[0].lists.map((function(t) {
                    return t.response.data[0].maxImageUrl
                  })), n.push({
                    commenterId: e.userInfo.memberId,
                    itemId: t.itemId,
                    skuId: t.skuId,
                    orderId: e.orderId,
                    commentContent: t.commentContent,
                    itemCommentPics: t.itemCommentPics
                  })
                })), this.$uniApi.dataRequestYesLoading("POST", "product/app/v1/itemComment/batchComment", {
                  param: n
                }, "提交中").then((function(n) {
                  if (1 === n.code)
                    if (e.$refs.uToast.show({
                        title: "已评论",
                        type: "success",
                        position: "bottom"
                      }), e.type) e.$util.prevPage();
                    else {
                      var o = getCurrentPages(),
                        u = o[o.length - 3];
                      t.navigateBack({
                        delta: 2,
                        success: function() {
                          u.$vm.page = 1, u.$vm.pageLoad()
                        }
                      })
                    }
                }))
              } else this.$refs.uToast.show({
                title: "评论内容不能为空",
                type: "warning",
                position: "bottom"
              })
            }
          }
        };
        e.default = n
      }).call(this, n("df3c").default)
    }
};
