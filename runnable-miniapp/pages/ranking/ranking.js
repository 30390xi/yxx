(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/ranking/ranking"], {
    "576d": function(t, n, e) {
      e.r(n);
      var i = e("928f"),
        a = e.n(i);
      for (var r in i)["default"].indexOf(r) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(r);
      n.default = a.a
    },
    "7ee4": function(t, n, e) {},
    8967: function(t, n, e) {
      (function(t, n) {
        var i = e("47a9");
        e("5366"), i(e("3240"));
        var a = i(e("c3e3"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(a.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
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
    c3e3: function(t, n, e) {
      e.r(n);
      var i = e("caf7"),
        a = e("576d");
      for (var r in a)["default"].indexOf(r) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(r);
      e("f7ab");
      var o = e("828b"),
        c = Object(o.a)(a.default, i.b, i.c, !1, null, "ce1fdd1a", null, !1, i.a, void 0);
      n.default = c.exports
    },
    caf7: function(t, n, e) {
      e.d(n, "b", (function() {
        return a
      })), e.d(n, "c", (function() {
        return r
      })), e.d(n, "a", (function() {
        return i
      }));
      var i = {
          uniNavbar: function() {
            return e.e("components/uni-navbar/uni-navbar").then(e.bind(null, "101a"))
          },
          spotList: function() {
            return e.e("components/spotList/spotList").then(e.bind(null, "ba4c"))
          }
        },
        a = function() {
          this.$createElement;
          var t = (this._self._c, this.detailObj.rankingItemList && this.detailObj.rankingItemList.length > 0);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        r = []
    },
    f7ab: function(t, n, e) {
      var i = e("7ee4");
      e.n(i).a
    }
  },
  [
    ["8967", "common/runtime", "common/vendor"]
  ]
]);
