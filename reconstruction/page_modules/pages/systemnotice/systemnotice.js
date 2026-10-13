// Extracted from pages/systemnotice/systemnotice.js; webpack module 7944.
// Compiled code for analysis; not an original source file.
module.exports = {
    7944: function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = {
          components: {
            EmptyState: function() {
              n.e("components/empty/empty").then(function() {
                return resolve(n("a427"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              page: 1,
              loadMore: "loading",
              newsList: [],
              typeNum: 0
            }
          },
          onLoad: function(e) {
            this.typeNum = e.id, this.pageLoad()
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              var t, n = this,
                a = {
                  current: this.page
                };
              0 == this.typeNum ? (a.userId = this.userInfo.memberId, t = "base/app/v1/msgManager/getMsgList", e.setNavigationBarTitle({
                title: "系统通知"
              })) : (a.noticeUserId = this.userInfo.memberId, a.type = this.typeNum, t = "base/app/v1/messageRecord", 1 == this.typeNum ? e.setNavigationBarTitle({
                title: "操作通知"
              }) : e.setNavigationBarTitle({
                title: "业绩详情"
              })), this.$uniApi.dataRequestNoLoading("GET", t, a).then((function(t) {
                if (e.stopPullDownRefresh(), 1 === t.code) {
                  var a = t.data.records;
                  t.data.total > 0 ? (1 === t.data.current ? n.newsList = a : n.newsList = n.newsList.concat(a), t.data.current < t.data.pages ? (n.page = n.page + 1, n.loadMore = "loadmore") : n.loadMore = "nomore") : (n.newsList = [], n.loadMore = "nomore")
                }
              })).catch((function(t) {
                e.stopPullDownRefresh()
              }))
            },
            goLink: function(t) {
              1 === t.jumpType && t.webUrl ? this.$navigateTo({
                url: "../webpage/webpage?url=".concat(t.webUrl)
              }) : 2 === t.jumpType && t.interalLinkId ? 1 === t.interalLinkType ? this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=".concat(t.interalLinkId)
              }) : 2 === t.interalLinkType ? this.$util.cityJump(t.contentType, t.interalLinkId) : 3 === t.interalLinkType ? this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=".concat(t.interalLinkId)
              }) : 4 !== t.interalLinkType && 7 !== t.interalLinkType && 8 !== t.interalLinkType && 9 !== t.interalLinkType || this.$navigateTo({
                url: "../spotDetail/spotDetail?spotId=".concat(t.interalLinkId)
              }) : 3 === t.jumpType ? e.openEmbeddedMiniProgram({
                appId: t.appId,
                path: t.wechatUrl
              }) : 4 === t.jumpType && (e.setStorageSync("richtext", t.richText), this.$navigateTo({
                url: "../richtext/richtext"
              }))
            },
            pageTos: function(e) {
              var t = e.currentTarget.dataset.type;
              t && (1 == t && this.$navigateTo({
                url: "/subPage/pages/leaguemember/leaguemember"
              }), 2 == t && this.$navigateTo({
                url: "/subPage/pages/wealth/wealth?tab=1"
              }), 3 == t && this.$navigateTo({
                url: "/subPage/pages/wealth/wealth"
              }))
            }
          }
        };
        t.default = a
      }).call(this, n("df3c").default)
    },
};
