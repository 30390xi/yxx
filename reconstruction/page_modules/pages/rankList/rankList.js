// Extracted from pages/rankList/rankList.js; webpack module ce0e.
// Compiled code for analysis; not an original source file.
module.exports = {
    ce0e: function(t, n, e) {
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var i = {
          components: {
            tabBar: function() {
              e.e("components/tabBar/tabBar").then(function() {
                return resolve(e("d657"))
              }.bind(null, e)).catch(e.oe)
            }
          },
          data: function() {
            return {
              navType: "",
              current: 1,
              size: 10,
              activeIndex: 1,
              spotList: [],
              coverImage: "",
              loading: !1,
              fixednavTop: 0,
              fixNavTop: 90,
              unit: 0,
              searchHeight: 0,
              scrollTop: 0,
              navtop2: 0,
              fixedstyle: "",
              navFixed: !1
            }
          },
          onShow: function() {
            this.$bus.$emit("tabPlay", 2)
          },
          onLoad: function(n) {
            var e = this,
              i = t.getStorageSync("NavH");
            this.searchHeight = i.top, this.unit = t.getStorageSync("unit"), this.fixNavTop = parseInt(i.top + 8 + 93 / this.unit), this.getDomInfo().then((function(n) {
              t.getSystemInfo({
                success: function(t) {
                  console.log(t), e.fixednavTop = n[1].height - parseInt(68 / e.unit), e.navtop2 = n[0].top
                }
              })
            })), this.getRankList()
          },
          onPageScroll: function(t) {
            this.scrollTop = t.scrollTop, this.fixedstyle = t.scrollTop + this.fixNavTop > this.navtop2 ? "position:fixed;left:40rpx;top:".concat(this.fixNavTop, "px") : "", this.navFixed = !!this.fixedstyle
          },
          onReachBottom: function() {
            this.current += 1, this.getRankList()
          },
          methods: {
            encode: function(t) {
              return encodeURIComponent(t)
            },
            changeType: function(n, e) {
              this.loading || (t.showLoading(), this.loading = !0, this.navType = n, this.activeIndex = e, this.spotList = [], this.current = 1, this.getRankList(!0))
            },
            getRankList: function(n) {
              var e = this;
              this.$uniApi.dataRequestYesLoading("post", "base/app/v1/contentRanking/selectRankingPage?current=".concat(e.current, "&size=").concat(e.size, "&rankingClass=").concat(e.navType), "", "加载中...").then((function(i) {
                i.data.records[0] && (e.spotList = e.spotList.concat(i.data.records)), t.hideLoading(), e.loading = !1, !i.data.records[0] && e.current > 1 && t.showToast({
                  title: "没有更多咯~",
                  icon: "none"
                }), n && e.scrollTop + e.fixNavTop > e.navtop2 && t.pageScrollTo({
                  duration: 0,
                  scrollTop: e.navtop2 - e.fixNavTop - 3
                })
              })).catch((function(n) {
                t.hideLoading(), e.loading = !1, t.showToast({
                  title: "error",
                  icon: "none"
                })
              }))
            },
            getCoverImage: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("get", "base/app/v1/sysParam/RANKING_DEFAULT_PIC").then((function(n) {
                t.coverImage = n.data.paramValue
              }))
            },
            pageTo: function(t) {
              this.$navigateTo({
                url: "../ranking/ranking?id=" + t.id
              })
            },
            getDomInfo: function() {
              var n = this;
              return new Promise((function(e) {
                setTimeout((function() {
                  n.$nextTick((function() {
                    var n = t.createSelectorQuery();
                    n.select("#nav").boundingClientRect(), n.select("#fixHeader").boundingClientRect(), n.exec((function(t) {
                      e(t)
                    }))
                  }))
                }), 500)
              }))
            }
          }
        };
        n.default = i
      }).call(this, e("df3c").default)
    },
};
