// Extracted from pages/spotContentList/spotContentList.js; webpack module "4c79".
// Compiled code for analysis; not an original source file.
module.exports = {
    "4c79": function(t, n, e) {
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          data: function() {
            return {
              contentInfoVOList: [],
              name: "",
              scenicName: ""
            }
          },
          onLoad: function(n) {
            this.scenicName = n.scenicName;
            var e = t.getStorageSync("spotContentList");
            this.name = e.name, this.contentInfoVOList = e.contentList
          },
          filters: {
            toFixed1: function(t) {
              return parseFloat(Number(t).toFixed(1))
            }
          },
          methods: {
            jumpSpotThirdDetail: function(t) {
              5 == t.type ? this.$navigateTo({
                url: "../spotThirdDetail/spotThirdDetail?scenicName=".concat(this.scenicName, "&spotId=") + t.id
              }) : 10 == t.type ? this.jumpToH5(t.h5Url) : this.$util.cityJump(t.type, t.id)
            },
            jumpToH5: function(n) {
              n ? t.navigateTo({
                url: "/pages/webpage/webpage?urlEncode=".concat(encodeURIComponent(n))
              }) : this.$util.showToast("敬请期待！")
            }
          }
        };
        n.default = e
      }).call(this, e("df3c").default)
    },
};
