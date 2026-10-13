// Extracted from subPage/pages/strategy/strategy.js; webpack module 5313.
// Compiled code for analysis; not an original source file.
module.exports = {
    5313: function(t, n, e) {
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          props: [],
          onLoad: function(t) {
            this.contentId = t.id, this.getContent(), this.updateReadingNum(t.id)
          },
          data: function() {
            return {
              contentId: "",
              spotList: [1],
              show: !1,
              scrollH: 600,
              showTab: 0,
              listsDom: {},
              contentIndex: 0,
              pagepoint: "",
              content: "",
              scrolldistance: 0
            }
          },
          onPageScroll: function(t) {},
          onShareAppMessage: function(t) {
            var n = this.content.mainPictureUrl.toLowerCase(),
              e = "/subPage/pages/strategy/strategy?id=" + this.contentId;
            return {
              title: this.content.title,
              imageUrl: -1 == n.indexOf(".gif") ? this.content.mainPictureUrl : getApp().globalData.shareimg,
              path: this.$util.setShareUrl(e)
            }
          },
          onShow: function() {
            var n = t.getSystemInfoSync(),
              e = n.statusBarHeight,
              i = 0,
              o = t.getMenuButtonBoundingClientRect();
            n.system.toLowerCase().indexOf("ios") > -1 ? i = o.bottom + 2 * (o.top - n.statusBarHeight) : i = o.height + 2 * (o.top - n.statusBarHeight) + e;
            var a = 750 / n.screenWidth,
              u = n.screenHeight;
            this.scrollH = parseInt(u - i - 100 / a)
          },
          onReachBottom: function() {},
          methods: {
            getContent: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/contentStrategyTravels/queryStrategyTravelsDetail?contentId=" + this.contentId).then((function(n) {
                t.content = n.data
              }))
            },
            togglecontent: function(t) {
              var n = [0, this.listsDom.height],
                e = this;
              e.showTab = -1, this.$nextTick((function() {
                e.showTab = n[t], e.contentIndex = t
              }))
            },
            showmodal: function() {
              this.show = !0;
              var t = this;
              this.getDomInfo().then((function(n) {
                t.listsDom = n[0]
              }))
            },
            scrollchange: function(t) {
              t.detail.scrollTop + 5 > this.listsDom.height ? this.contentIndex = 1 : this.contentIndex = 0
            },
            navtoArticle: function(t) {
              var n = this;
              this.show = !1, n.pagepoint = "", setTimeout((function() {
                n.pagepoint = "tiji" + t
              }), 200)
            },
            routerTo: function(t) {
              0 == t.mentionType && this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=".concat(t.originId)
              }), [1, 3, 4, 5].includes(Number(t.mentionType)) && this.$navigateTo({
                url: "/pages/spotDetail/spotDetail?spotId=" + t.originId
              }), 2 == t.mentionType && this.$navigateTo({
                url: "/pages/spotThirdDetail/spotThirdDetail?spotId=" + t.originId
              })
            },
            updateReadingNum: function(t) {
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/CommonReadingNum/updateReadingNum", {
                originType: 1,
                originId: t
              }).then((function(t) {
                console.log("add success")
              }))
            },
            getDomInfo: function(n) {
              var e = n || "#lists";
              return new Promise((function(n) {
                setTimeout((function() {
                  var i = t.createSelectorQuery();
                  i.select(e).boundingClientRect(), i.exec((function(t) {
                    n(t)
                  }))
                }), 100)
              }))
            }
          }
        };
        n.default = e
      }).call(this, e("df3c").default)
    },
};
