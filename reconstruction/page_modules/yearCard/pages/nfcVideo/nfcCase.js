// Extracted from yearCard/pages/nfcVideo/nfcCase.js; webpack module "078f".
// Compiled code for analysis; not an original source file.
module.exports = {
    "078f": function(e, a, t) {
      (function(e, t) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0;
        var n = {
          data: function() {
            return this.videoContext = null, {
              isPlay: !0,
              fullScreen: !1,
              currentTime: 0,
              playerData: {
                vlogUrl: "",
                dataUrl: "",
                iconUrl: "",
                changeTime: 20
              }
            }
          },
          onLoad: function(e) {
            var a = e.playerId || 1,
              t = Number(a) - 1;
            this.getFootBallPlayer(t)
          },
          methods: {
            getFootBallPlayer: function(a) {
              var n = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/sysParam/getSysConfigure", {
                paramKey: "FOOTBALL_PLAYER"
              }).then((function(i) {
                if (1 === i.code) {
                  var o = i.data;
                  if (o.paramValue) {
                    var r = JSON.parse(o.paramValue).playerList;
                    n.playerData = r[a], n.videoContext = e.createVideoContext("videoPlayer"), t.preloadAssets({
                      data: [{
                        type: "image",
                        src: n.playerData.iconUrl
                      }]
                    })
                  }
                }
              }))
            },
            videoClick: function() {
              e.navigateTo({
                url: "/yearCard/pages/nfcVideo/nfcDetail?url=".concat(this.playerData.dataUrl)
              })
            },
            playPause: function() {
              this.isPlay ? this.videoContext.pause() : this.videoContext.play()
            },
            fullscreenchange: function(e) {
              this.fullScreen = e.detail.fullScreen
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
        a.default = n
      }).call(this, t("df3c").default, t("3223").default)
    },
};
