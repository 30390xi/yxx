// Extracted from yearCard/pages/nfcVideo/nfcVideo.js; webpack module "7b4f".
// Compiled code for analysis; not an original source file.
module.exports = {
    "7b4f": function(n, e, a) {
      (function(n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = {
          data: function() {
            return {
              vlogUrl: "",
              isPlay: !0
            }
          },
          onLoad: function(n) {
            this.vlogUrl = n.url
          },
          onShareAppMessage: function() {
            return {
              title: "",
              imageUrl: "",
              path: "/yearCard/pages/nfcVideo/nfcVideo"
            }
          },
          methods: {
            playPause: function() {
              var e = n.createVideoContext("videoPlayer");
              this.isPlay ? e.pause() : e.play()
            },
            videoPlay: function(n) {
              this.isPlay = !0
            },
            videopause: function(n) {
              this.isPlay = !1
            }
          }
        };
        e.default = a
      }).call(this, a("df3c").default)
    },
};
