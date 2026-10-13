// Extracted from yearCard/pages/nfcVideo/jz.js; webpack module "6c0a".
// Compiled code for analysis; not an original source file.
module.exports = {
    "6c0a": function(e, n, t) {
      (function(e, t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var i = {
          data: function() {
            return {
              isPlay: !0,
              fullScreen: !1,
              currentTime: 0,
              teamId: 0
            }
          },
          onLoad: function(n) {
            e.preloadAssets({
              data: [{
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116045789227.jpg"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116064712243.png"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116053458845.png"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116065653707.png"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116130338809.png"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026012116130568486.png"
              }, {
                type: "image",
                src: "https://eshopfile.zhiyousx.com/2026011516590113392.jpg"
              }]
            })
          },
          onShow: function(e) {},
          methods: {
            videoEnd: function() {},
            iconClick: function(e) {
              t.navigateTo({
                url: e
              })
            },
            videoPlay: function(e) {
              this.isPlay = !0
            },
            videopause: function(e) {
              this.isPlay = !1
            },
            videoUpdate: function(e) {
              this.currentTime = e.detail.currentTime
            }
          }
        };
        n.default = i
      }).call(this, t("3223").default, t("df3c").default)
    },
};
