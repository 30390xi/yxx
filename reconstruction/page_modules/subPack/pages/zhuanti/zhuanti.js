// Extracted from subPack/pages/zhuanti/zhuanti.js; webpack module "42d5".
// Compiled code for analysis; not an original source file.
module.exports = {
    "42d5": function(t, n, e) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = {
        data: function() {
          return {
            content: {},
            specialProducts: {}
          }
        },
        onLoad: function(t) {
          this.id = t.specialId, this.getDetailSpecial(this.id)
        },
        onShareAppMessage: function() {
          var t = "/subPack/pages/zhuanti/zhuanti?specialId=".concat(this.id);
          return {
            title: this.content.title,
            path: this.$util.setShareUrl(t),
            imageUrl: this.content.coverImage
          }
        },
        methods: {
          getDetailSpecial: function(t) {
            var n = this;
            this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentApp/getDetailSpecial?id=" + t).then((function(t) {
              1 === t.code && (n.content = t.data.content, n.specialProducts = t.data.contentSpecialProducts, console.log(n.specialProducts))
            }))
          },
          jump: function(t) {
            this.$navigateTo({
              url: "/subPage/pages/goods_details/goods_details?itemId=" + t.productId
            })
          }
        }
      };
      n.default = a
    },
};
