require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiVideo/historyList"], {
    "01ac": function(o, e, n) {
      (function(o, e) {
        var t = n("47a9");
        n("5366"), t(n("3240"));
        var a = t(n("981f"));
        o.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "3b22": function(o, e, n) {
      n.d(e, "b", (function() {
        return a
      })), n.d(e, "c", (function() {
        return i
      })), n.d(e, "a", (function() {
        return t
      }));
      var t = {
          uLoadmore: function() {
            return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "2db1"))
          }
        },
        a = function() {
          this.$createElement;
          var o = (this._self._c, ["loading", "nomore"].includes(this.loadMore) && this.photoList.length > 0 || "loading" == this.loadMore && 0 == this.photoList.length);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: o
            }
          })
        },
        i = []
    },
    "76ce": function(o, e, n) {},
    "981f": function(o, e, n) {
      n.r(e);
      var t = n("3b22"),
        a = n("fea9");
      for (var i in a)["default"].indexOf(i) < 0 && function(o) {
        n.d(e, o, (function() {
          return a[o]
        }))
      }(i);
      n("b9d8");
      var r = n("828b"),
        d = Object(r.a)(a.default, t.b, t.c, !1, null, "616da972", null, !1, t.a, void 0);
      e.default = d.exports
    },
    b9d8: function(o, e, n) {
      var t = n("76ce");
      n.n(t).a
    },
    fa20: function(o, e, n) {
      (function(o) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = n("0e74"),
          a = {
            components: {
              loading: function() {
                n.e("union/pages/aiVideo/component/loading").then(function() {
                  return resolve(n("9ae6"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                photoList: [],
                finished: !1,
                page: 1,
                loadMore: "loading"
              }
            },
            onShow: function() {
              this.pageLoad()
            },
            methods: {
              goView: function(e) {
                2 != e.status && o.navigateTo({
                  url: "/union/pages/aiVideo/loadPage?id=" + e.id + "&imageName=" + e.imageName + "&moldId=" + e.moldId + "&source=3"
                })
              },
              scrolltolower: function() {
                "loadmore" === this.loadMore && this.pageLoad()
              },
              pageLoad: function() {
                var e = this;
                this.loadMore = "loading";
                var n = {
                  openId: o.getStorageSync("wxopenid"),
                  pageOn: this.page,
                  pageSize: 5
                };
                this.$uniApi.dataRequestNoLoading("GET", "program/queryByOpenId", n, 1, t.AIVIDEO_API_BASE_URL).then((function(o) {
                  if (1 === o.code) {
                    var n = o.data.records || [];
                    o.data.total > 0 ? (1 === o.data.current ? e.photoList = n : e.photoList = e.photoList.concat(n), o.data.current < o.data.pages ? (e.page = e.page + 1, e.loadMore = "loadmore") : e.loadMore = "nomore") : (e.loadMore = "nomore", e.photoList = [])
                  } else e.$util.showToast(o.msg || "加载失败"), e.finished = !0
                })).catch((function(o) {
                  e.$util.showToast("加载失败")
                })).finally((function() {}))
              }
            }
          };
        e.default = a
      }).call(this, n("df3c").default)
    },
    fea9: function(o, e, n) {
      n.r(e);
      var t = n("fa20"),
        a = n.n(t);
      for (var i in t)["default"].indexOf(i) < 0 && function(o) {
        n.d(e, o, (function() {
          return t[o]
        }))
      }(i);
      e.default = a.a
    }
  },
  [
    ["01ac", "common/runtime", "common/vendor", "union/common/vendor"]
  ]
]);
