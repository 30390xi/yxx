require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/ai/historyList"], {
    "1d2b": function(e, t, n) {
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return i
      })), n.d(t, "a", (function() {
        return o
      }));
      var o = {
          uLoadmore: function() {
            return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "2db1"))
          }
        },
        a = function() {
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
        i = []
    },
    "1eb4": function(e, t, n) {
      n.r(t);
      var o = n("1d2b"),
        a = n("4e25");
      for (var i in a)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(i);
      n("9b58");
      var r = n("828b"),
        s = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      t.default = s.exports
    },
    2638: function(e, t, n) {},
    "4e25": function(e, t, n) {
      n.r(t);
      var o = n("5dd3"),
        a = n.n(o);
      for (var i in o)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(i);
      t.default = a.a
    },
    "5dd3": function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = {
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
              newsList: []
            }
          },
          computed: {
            newsListCopy: function() {
              var e = [],
                t = {};
              return this.newsList.forEach((function(n) {
                var o = n.updateTime;
                if (t[o]) t[o].data.push(n);
                else {
                  var a = {
                    key: o,
                    data: [n]
                  };
                  t[o] = a, e.push(a)
                }
              })), e
            }
          },
          onLoad: function(e) {
            this.pageLoad()
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            "loadmore" === this.loadMore && this.pageLoad()
          },
          methods: {
            goView: function(t) {
              this.$eventAnalyse.analyse({
                eventTag: "ai_showHistory_click",
                eventName: "伴游历史记录回显",
                eventParams: {
                  HISTORY_ID: t
                }
              }), e.setStorageSync("HISTORY_ID", t), setTimeout((function() {
                e.navigateBack({
                  delta: 1
                })
              }), 300)
            },
            setTime: function(e) {
              var t = new Date(e),
                n = t.getFullYear(),
                o = t.getMonth() + 1,
                a = t.getDate();
              return "".concat(n, "-").concat(o < 10 ? "0" + o : o, "月").concat(a < 10 ? "0" + a : a, "日")
            },
            pageLoad: function() {
              var t = this,
                n = {
                  current: this.page,
                  openId: e.getStorageSync("wxopenid"),
                  size: 20,
                  bussType: 1
                };
              this.$uniApi.dataRequestNoLoading("GET", "ai/aiEscort/session/page", n).then((function(n) {
                if (e.stopPullDownRefresh(), 1 === n.code) {
                  var o = n.data.records;
                  n.data.total > 0 ? (1 === n.data.current ? t.newsList = o : t.newsList = t.newsList.concat(o), n.data.current < n.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.newsList = [], t.loadMore = "nomore")
                }
              })).catch((function(t) {
                e.stopPullDownRefresh()
              }))
            }
          }
        };
        t.default = o
      }).call(this, n("df3c").default)
    },
    "9b58": function(e, t, n) {
      var o = n("2638");
      n.n(o).a
    },
    e0ce: function(e, t, n) {
      (function(e, t) {
        var o = n("47a9");
        n("5366"), o(n("3240"));
        var a = o(n("1eb4"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    }
  },
  [
    ["e0ce", "common/runtime", "common/vendor"]
  ]
]);
