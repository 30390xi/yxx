// Extracted from subPage/pages/monthposter/monthposter.js; webpack module b83c.
// Compiled code for analysis; not an original source file.
module.exports = {
    b83c: function(t, e, n) {
      (function(t, n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = {
          data: function() {
            return {
              index: 0,
              imgList: [],
              photoList: [],
              scenicId: "",
              current: 1,
              size: 20,
              month: "",
              source: "",
              loadMore: "loading"
            }
          },
          onReachBottom: function() {
            "twelveWall" == this.source && ("loadmore" === this.loadMore ? this.selectUserPicOneMonth() : "nomore" === this.loadMore && t.showToast({
              title: "没有更多咯",
              icon: "none"
            }))
          },
          onLoad: function(t) {
            var e = this;
            this.month = t.m, this.source = t.source, "twelveWall" == t.source ? (this.scenicId = t.scenicId, this.selectUserPicOneMonth()) : "pictureWall" == t.source && this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotPicActiveRel/getScenicPicListByMonth?upMonth=" + t.m).then((function(t) {
              t.data && t.data.splitPicUrlList && t.data.splitPicUrlList[0] && (e.imgList = t.data.splitPicUrlList)
            }))
          },
          created: function() {},
          methods: {
            selectUserPicOneMonth: function() {
              var t = this,
                e = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpotUserPic/selectUserPicOneMonth?upMonth=" + e.month + "&scenicId=" + this.scenicId + "&current=" + this.current + "&size=" + this.size).then((function(n) {
                if (1 == n.code) {
                  var i = [];
                  n.data.records.forEach((function(t) {
                    i.push(t.splitPicUrl)
                  })), n.data.total > 0 ? (1 === n.data.current ? t.imgList = i : t.imgList = t.imgList.concat(i), n.data.current < n.data.pages ? (t.current = t.current + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.loadMore = "nomore", t.imgList = [])
                } else e.$util.showToast(n.msg)
              }))
            },
            priview: function(t) {
              n.previewImage({
                current: t,
                urls: this.imgList
              })
            }
          }
        };
        e.default = i
      }).call(this, n("df3c").default, n("3223").default)
    },
};
