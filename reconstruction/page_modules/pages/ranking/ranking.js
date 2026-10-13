// Extracted from pages/ranking/ranking.js; webpack module "928f".
// Compiled code for analysis; not an original source file.
module.exports = {
    "928f": function(t, n, e) {
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var i = {
          components: {
            spotList: function() {
              e.e("components/spotList/spotList").then(function() {
                return resolve(e("ba4c"))
              }.bind(null, e)).catch(e.oe)
            }
          },
          data: function() {
            return {
              statusBarHeight: "",
              postUrl: "",
              inTop: !0,
              scrollTop: 0,
              headerH: 0,
              row2height: 0,
              hasDesc: !1,
              contentId: "",
              detailObj: {},
              current: 1,
              isLogin: ""
            }
          },
          filters: {
            timeFormat: function(t) {
              return t.replace(/-/g, ".")
            }
          },
          onShow: function() {
            this.isLogin = t.getStorageSync("token") || ""
          },
          onLoad: function(n) {
            var e = this;
            this.contentId = n.id, this._urlToShare = "/pages/ranking/ranking?id=" + n.id, this.rankDetail(), t.getSystemInfo({
              success: function(n) {
                e.statusBarHeight = t.getSystemInfoSync().statusBarHeight, e._transformNumTemp = 1, e.headerH = e.statusBarHeight + 5 + Math.ceil(n.windowWidth / 750 * 104)
              }
            })
          },
          onReachBottom: function() {
            this.current++, this.rankDetail()
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, this.row2height < t.scrollTop ? this.inTop = !1 : this.inTop = !0
          },
          onShareAppMessage: function(t) {
            var n = this.detailObj.rankingSharePictureUrl;
            return {
              title: this.detailObj.rankingName,
              imageUrl: n || "",
              path: this.$util.setShareUrl(this._urlToShare),
              bgImgUrl: n || "",
              scImgUrl: n || ""
            }
          },
          methods: {
            rankDetail: function() {
              var n = this,
                e = this;
              t.showNavigationBarLoading(), this.$uniApi.dataRequestNoLoading("POST", "base/app/v1/contentRanking/selectRankingDetails?contentId=".concat(e.contentId, "&size=10&current=").concat(e.current)).then((function(i) {
                t.hideNavigationBarLoading(), 1 == e.current && (e.detailObj = i.data), e.current > 1 && i.data.rankingItemList && i.data.rankingItemList[0] && (e.detailObj.rankingItemList = e.detailObj.rankingItemList.concat(i.data.rankingItemList)), !(e.current > 1) || i.data.rankingItemList && i.data.rankingItemList[0] || t.showToast({
                  title: "没有更多咯~",
                  icon: "none"
                }), i.data.rankingDescribe && (n.hasDesc = !0), e.current > 1 || n.$nextTick((function() {
                  new Promise((function(n) {
                    var e = t.createSelectorQuery();
                    e.select("#spotinfo").boundingClientRect(), e.exec((function(t) {
                      n(t)
                    }))
                  })).then((function(t) {
                    e.row2height = t[0].top - e.headerH
                  }))
                }))
              }))
            }
          }
        };
        n.default = i
      }).call(this, e("df3c").default)
    },
};
