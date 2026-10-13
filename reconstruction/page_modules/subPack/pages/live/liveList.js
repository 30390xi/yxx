// Extracted from subPack/pages/live/liveList.js; webpack module "126b".
// Compiled code for analysis; not an original source file.
module.exports = {
    "126b": function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = {
          name: "liveList",
          components: {
            liveIcon: function() {
              n.e("subPack/pages/live/components/liveIcon").then(function() {
                return resolve(n("1197"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              liveUrl: "https://vtscode.zhiyoushanxi.com/flv/hls/stream_364.flv",
              listData: []
            }
          },
          onLoad: function() {
            this.getLiveList()
          },
          onShow: function() {},
          methods: {
            getLiveList: function() {
              var e = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/liveStream/selectPage?state=1&current=1&size=999").then((function(t) {
                1 === t.code && t.data.records.length > 0 && (e.listData = t.data.records)
              }))
            },
            toDetail: function(t) {
              e.navigateTo({
                url: "/pages/webpage/webpage?urlEncode=" + encodeURIComponent("https://eshop.zhiyousx.com/dsmall-admin-ui/h5/liveDetail.html?liveStreamId=".concat(t.liveStreamId))
              })
            },
            palyError: function(e, t) {
              console.log(e)
            }
          }
        };
        t.default = a
      }).call(this, n("df3c").default)
    },
};
