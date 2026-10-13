(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/rankList/rankList"], {
    "0d66": function(t, n, e) {
      e.d(n, "b", (function() {
        return o
      })), e.d(n, "c", (function() {
        return a
      })), e.d(n, "a", (function() {
        return i
      }));
      var i = {
          uniNavbar: function() {
            return e.e("components/uni-navbar/uni-navbar").then(e.bind(null, "101a"))
          }
        },
        o = function() {
          var t = this,
            n = (t.$createElement, t._self._c, t.spotList[0] ? t.__map(t.spotList, (function(n, e) {
              return {
                $orig: t.__get_orig(n),
                l0: n.rankingItemList ? t.__map(n.rankingItemList, (function(e, i) {
                  return {
                    $orig: t.__get_orig(e),
                    g0: i < 3 && (8 == n.type || 7 == n.type) && 2 == n.rankingType && e.favoriteValue ? Number(e.favoriteValue).toFixed(2) : null
                  }
                })) : null
              }
            })) : null);
          t.$mp.data = Object.assign({}, {
            $root: {
              l1: n
            }
          })
        },
        a = []
    },
    1515: function(t, n, e) {
      var i = e("4864");
      e.n(i).a
    },
    4864: function(t, n, e) {},
    baf0: function(t, n, e) {
      e.r(n);
      var i = e("ce0e"),
        o = e.n(i);
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(a);
      n.default = o.a
    },
    be88: function(t, n, e) {
      (function(t, n) {
        var i = e("47a9");
        e("5366"), i(e("3240"));
        var o = i(e("fe6d"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(o.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
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
    fe6d: function(t, n, e) {
      e.r(n);
      var i = e("0d66"),
        o = e("baf0");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(a);
      e("1515");
      var r = e("828b"),
        c = Object(r.a)(o.default, i.b, i.c, !1, null, "bf49665a", null, !1, i.a, void 0);
      n.default = c.exports
    }
  },
  [
    ["be88", "common/runtime", "common/vendor"]
  ]
]);
