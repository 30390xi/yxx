require("../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/systemnotice/systemnotice"], {
    3328: function(e, t, n) {
      n.r(t);
      var a = n("6267"),
        i = n("cb40");
      for (var o in i)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(o);
      n("5814");
      var r = n("828b"),
        s = Object(r.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
      t.default = s.exports
    },
    "4df0": function(e, t, n) {
      (function(e, t) {
        var a = n("47a9");
        n("5366"), a(n("3240"));
        var i = a(n("3328"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    5814: function(e, t, n) {
      var a = n("83ca");
      n.n(a).a
    },
    6267: function(e, t, n) {
      n.d(t, "b", (function() {
        return i
      })), n.d(t, "c", (function() {
        return o
      })), n.d(t, "a", (function() {
        return a
      }));
      var a = {
          uLoadmore: function() {
            return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "2db1"))
          }
        },
        i = function() {
          this.$createElement;
          var e = (this._self._c, "nomore" === this.loadMore && this.newsList.length <= 0),
            t = ["loading", "nomore"].includes(this.loadMore) && this.newsList.length > 0 || "loading" == this.loadMore && 0 == this.newsList.length;
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              g1: t
            }
          })
        },
        o = []
    },
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
    "83ca": function(e, t, n) {},
    cb40: function(e, t, n) {
      n.r(t);
      var a = n("7944"),
        i = n.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(o);
      t.default = i.a
    }
  },
  [
    ["4df0", "common/runtime", "common/vendor"]
  ]
]);
