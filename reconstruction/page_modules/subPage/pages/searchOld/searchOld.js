// Extracted from subPage/pages/searchOld/searchOld.js; webpack module "158a".
// Compiled code for analysis; not an original source file.
module.exports = {
    "158a": function(t, e, o) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = {
          data: function() {
            return {
              sellerId: "",
              keyword: "",
              oldKeywordList: [],
              focusStatus: !0,
              couponId: "",
              quota: "",
              threshold: ""
            }
          },
          onLoad: function(t) {
            t.sellerId && (this.sellerId = t.sellerId), t.couponId && (this.couponId = t.couponId), t.threshold && (this.threshold = t.threshold), t.quota && (this.quota = t.quota), this.init()
          },
          onShow: function() {
            this.focusStatus = !0, this.keyword = ""
          },
          methods: {
            init: function() {
              this.loadOldKeyword()
            },
            loadOldKeyword: function() {
              var e = this;
              t.getStorage({
                key: "OldKeys",
                success: function(t) {
                  var o = JSON.parse(t.data);
                  e.oldKeywordList = o
                }
              })
            },
            oldDelete: function() {
              var e = this;
              t.showModal({
                content: "确定清除历史搜索记录？",
                success: function(o) {
                  o.confirm ? (e.oldKeywordList = [], t.removeStorage({
                    key: "OldKeys"
                  })) : o.cancel && console.log("用户点击取消")
                }
              })
            },
            doSearch: function(t) {
              this.keyword = t || "", this.keyword && this.saveKeyword(t), this.sellerId ? this.$navigateTo({
                url: "/subPage/pages/storeshop/storeshop?keyword=" + t + "&sellerId=" + this.sellerId
              }) : this.couponId ? this.$navigateTo({
                url: "/subPage/pages/discountsProductList/discountsProductList?couponId=" + this.couponId + "&threshold=" + this.threshold + "&quota=" + this.quota + "&keyword=" + t
              }) : this.$navigateTo({
                url: "/subPage/pages/goodslist/goodslist?keyword=" + t
              }), this.focusStatus = !1
            },
            doCustom: function() {
              this.$util.goBack()
            },
            saveKeyword: function(e) {
              var o = this;
              t.getStorage({
                key: "OldKeys",
                success: function(n) {
                  var s = JSON.parse(n.data),
                    i = s.indexOf(e); - 1 == i || s.splice(i, 1), s.unshift(e), s.length > 10 && s.pop(), t.setStorage({
                    key: "OldKeys",
                    data: JSON.stringify(s)
                  }), o.oldKeywordList = s
                },
                fail: function(n) {
                  var s = [e];
                  t.setStorage({
                    key: "OldKeys",
                    data: JSON.stringify(s)
                  }), o.oldKeywordList = s
                }
              })
            }
          }
        };
        e.default = o
      }).call(this, o("df3c").default)
    },
};
