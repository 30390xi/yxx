// Extracted from pages/videoList/videoList.js; webpack module "7e4a".
// Compiled code for analysis; not an original source file.
module.exports = {
    "7e4a": function(t, e, i) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        data: function() {
          return {
            obj: {},
            videoinfo: {
              videoUrl: "",
              title: "",
              playNum: "",
              author: ""
            }
          }
        },
        onShareAppMessage: function(t) {
          var e = this.videoinfo.coverImage.toLowerCase(),
            i = "/pages/videoList/videoList?spotId=&videoId=" + this.videoId;
          return {
            title: this.videoinfo.title,
            imageUrl: -1 == e.indexOf(".gif") ? this.videoinfo.coverImage : getApp().globalData.shareimg,
            path: this.$util.setShareUrl(i)
          }
        },
        onLoad: function(t) {
          console.log(t), this._spotId = t.spotId, this.videoId = t.videoId, this.getVideo(this._spotId, this.videoId)
        },
        methods: {
          getVideo: function(t, e) {
            var i = this;
            this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentVideo/list?spotId=" + t + "&videoId=" + e).then((function(t) {
              1 === t.code && (i.obj = t.data, i.videoinfo = t.data.mainVO)
            })), this.$uniApi.getRequestNoLoading("GET", "base/app/v1/contentVideo/addVideoTimes/" + e).then((function(t) {}))
          },
          jump: function(t) {
            this.getVideo(this._spotId, t.id)
          }
        }
      };
      e.default = n
    },
};
