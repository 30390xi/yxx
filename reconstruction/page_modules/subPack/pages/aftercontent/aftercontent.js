// Extracted from subPack/pages/aftercontent/aftercontent.js; webpack module "587e".
// Compiled code for analysis; not an original source file.
module.exports = {
    "587e": function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          data: function() {
            return {
              orderId: "",
              aftersaleType: "",
              type: "",
              loadingStatus: !1,
              aftersaleReason: "",
              num: 0,
              action: getApp().globalData.requestUrl + "base/common/file/qiniu/upload",
              uploadArr: []
            }
          },
          onLoad: function(e) {
            e.orderId && (this.orderId = e.orderId, this.aftersaleType = e.aftersaleType), e.type ? this.type = e.type : this.type = ""
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            onSubmit: function() {
              var t = this;
              if (!this.aftersaleReason) return this.$refs.uToast.show({
                title: "请输入原因",
                type: "error"
              });
              var n = {
                orderId: this.orderId,
                aftersaleReason: this.aftersaleReason,
                aftersaleType: this.aftersaleType,
                memberId: this.userInfo.memberId,
                memberName: this.userInfo.nickName ? this.userInfo.nickName : "",
                memberPhone: this.userInfo.mobilePhone
              };
              this.uploadArr.length > 0 && (n.aftersalePic = this.uploadArr.join(",")), this.loadingStatus = !0, this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/aftersaleNew", n).then((function(n) {
                if (t.loadingStatus = !1, 1 == n.code)
                  if (t.$refs.uToast.show({
                      title: "已提交申请",
                      type: "success",
                      position: "bottom"
                    }), t.type) t.$util.prevPage();
                  else {
                    var o = getCurrentPages(),
                      a = o[o.length - 3];
                    e.navigateBack({
                      delta: 2,
                      success: function() {
                        a.$vm.page = 1, a.$vm.pageLoad()
                      }
                    })
                  }
              })).catch((function(e) {
                t.loadingStatus = !1, t.$u.toast(e.msg)
              }))
            },
            changefun: function() {
              this.num = this.aftersaleReason.length
            },
            onUploaded: function(e) {
              this.uploadArr = e.map((function(e) {
                return e.response.data[0].maxImageUrl
              }))
            },
            onRemove: function(e, t) {
              this.uploadArr.splice(e, 1)
            }
          }
        };
        t.default = n
      }).call(this, n("df3c").default)
    },
};
