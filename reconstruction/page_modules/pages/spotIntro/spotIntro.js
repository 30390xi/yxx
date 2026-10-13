// Extracted from pages/spotIntro/spotIntro.js; webpack module cd7d.
// Compiled code for analysis; not an original source file.
module.exports = {
    cd7d: function(n, t, e) {
      (function(n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var e = {
          data: function() {
            return {
              detailObj: {},
              parseStyle: {
                p: "word-break: break-all;"
              }
            }
          },
          onLoad: function(n) {
            this.scenicSpot(n.spotId)
          },
          methods: {
            scenicSpot: function(t) {
              var e = this;
              n.showNavigationBarLoading(), this.$uniApi.getRequestNoLoading("GET", "base/app/v1/scenicSpot/" + t).then((function(t) {
                n.hideNavigationBarLoading(), e.detailObj = t.data
              }))
            }
          }
        };
        t.default = e
      }).call(this, e("df3c").default)
    },
};
