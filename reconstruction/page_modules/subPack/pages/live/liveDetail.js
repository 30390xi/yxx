// Extracted from subPack/pages/live/liveDetail.js; webpack module "39d9".
// Compiled code for analysis; not an original source file.
module.exports = {
    "39d9": function(t, e, n) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = {
          name: "liveDetail",
          components: {
            liveIcon: function() {
              n.e("subPack/pages/live/components/liveIcon").then(function() {
                return resolve(n("1197"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              topHeight: 0,
              listData: "",
              videoData: "",
              liveStreamId: 1,
              timer: null
            }
          },
          onLoad: function(t) {
            this.liveStreamId = t.id, this.getLiveDetail()
          },
          onShow: function() {},
          methods: {
            getDomInfo: function() {
              this.timer && clearTimeout(this.timer);
              var e = this;
              this.$nextTick((function() {
                new Promise((function(e) {
                  var n = t.createSelectorQuery();
                  n.select("#liveTop").boundingClientRect(), n.exec((function(t) {
                    e(t)
                  }))
                })).then((function(t) {
                  t[0].height || (e.timer = setTimeout((function() {
                    e.getDomInfo()
                  }), 100)), e.topHeight = t[0].height
                }))
              }), 550)
            },
            getLiveDetail: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/liveStream/selectById?liveStreamId=" + this.liveStreamId).then((function(e) {
                1 === e.code && (t.listData = e.data, t.videoData = {
                  mainImage: t.listData.mainImage,
                  liveUrl: t.listData.streamUrl
                }, t.$nextTick((function() {
                  t.getDomInfo()
                })))
              }))
            },
            palyError: function(t) {
              console.log("onPlayError, e=" + JSON.stringify(t))
            }
          }
        };
        e.default = i
      }).call(this, n("df3c").default)
    },
};
