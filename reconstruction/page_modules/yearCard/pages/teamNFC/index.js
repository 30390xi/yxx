// Extracted from yearCard/pages/teamNFC/index.js; webpack module "659e".
// Compiled code for analysis; not an original source file.
module.exports = {
    "659e": function(e, t, a) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = {
          data: function() {
            return {
              vlogUrl: "https://eshopfile.zhiyousx.com/teamVideo2.mp4",
              isPlay: !0,
              fullScreen: !1,
              currentTime: 0,
              teamId: 0
            }
          },
          onLoad: function(t) {
            this.teamId = t.teamId || 1, this.vlogUrl = t.url || "https://eshopfile.zhiyousx.com/qtTeam/teamVideo.mp4", e.createVideoContext("videoPlayer").play()
          },
          onShow: function() {},
          onShareAppMessage: function() {
            return {
              title: "「青途文旅」四川团建之旅",
              imageUrl: "https://eshopfile.zhiyousx.com/2025111815285164535.jpg",
              path: "/yearCard/pages/teamNFC/index?teamId=".concat(this.teamId)
            }
          },
          onShareTimeline: function() {
            return {
              title: "「青途文旅」四川团建之旅",
              imageUrl: "https://eshopfile.zhiyousx.com/2025111815285164535.jpg",
              path: "/yearCard/pages/teamNFC/index?teamId=".concat(this.teamId)
            }
          },
          methods: {
            iconClick: function(t) {
              var a = 1 == t ? "/yearCard/pages/teamNFC/album?teamId=".concat(this.teamId) : "/yearCard/pages/teamNFC/line";
              e.navigateTo({
                url: a
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
        t.default = a
      }).call(this, a("df3c").default)
    },
};
