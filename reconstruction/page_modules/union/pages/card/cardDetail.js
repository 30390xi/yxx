// Extracted from union/pages/card/cardDetail.js; webpack module a369.
// Compiled code for analysis; not an original source file.
module.exports = {
    a369: function(n, t, e) {
      (function(n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = {
          components: {
            verifyCode: function() {
              Promise.all([e.e("union/common/vendor"), e.e("union/pages/card/components/verifyCode")]).then(function() {
                return resolve(e("4591"))
              }.bind(null, e)).catch(e.oe)
            }
          },
          onShow: function() {},
          onHide: function() {},
          onLoad: function(t) {
            var e = n.getMenuButtonBoundingClientRect();
            this.searchHeight = e.top, 1 == getCurrentPages().length ? this.firstPage = !0 : this.firstPage = !1, this.getCardDetail()
          },
          onPageScroll: function(n) {
            this.scrollTop = n.scrollTop, n.scrollTop < 10 ? this.titleColor = "#ffffff" : this.titleColor = "transparent"
          },
          data: function() {
            return {
              searchHeight: 0,
              firstPage: !1,
              scrollTop: 0,
              titleColor: "#ffffff",
              userUnionEquityCardId: "",
              detail: {}
            }
          },
          computed: {},
          watch: {},
          methods: {
            getCardDetail: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/userUnionEquityCard/getUnionEquityUse", {}).then((function(e) {
                1 === e.code ? 1 === e.data.memberJumpStatus ? t.detail = e.data : (t.$util.showToast("您现在不是会员"), setTimeout((function() {
                  n.navigateBack()
                }), 700)) : n.showToast({
                  title: e.msg,
                  icon: "none"
                })
              }))
            },
            goBack: function() {
              this.firstPage ? n.switchTab({
                url: "/pages/index/index"
              }) : n.navigateBack({
                delta: 1
              })
            }
          }
        };
        t.default = o
      }).call(this, e("df3c").default)
    },
};
