require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/collection/collection"], {
    "071f": function(o, e, n) {
      (function(o) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = {
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
              isEditor: !0,
              selectAll: 0,
              num: 0,
              allCheck: {
                checked: !1
              },
              goodsInfo: []
            }
          },
          onLoad: function() {
            this.pageLoad()
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
            },
            delNum: function() {
              return this.goodsInfo.filter((function(o) {
                return !0 === o.checked
              })).length
            }
          },
          methods: {
            pageLoad: function() {
              var e = this,
                n = {
                  current: this.page,
                  memberId: this.userInfo.memberId
                };
              this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/memberFavoriteSku", n).then((function(n) {
                if (o.stopPullDownRefresh(), 1 === n.code) {
                  var t = n.data.records;
                  n.data.total > 0 ? (t.forEach((function(o) {
                    o.checked = !1
                  })), 1 === n.data.current ? e.goodsInfo = t : e.goodsInfo = e.goodsInfo.concat(t), n.data.current < n.data.pages ? (e.page = e.page + 1, e.loadMore = "loadmore") : e.loadMore = "nomore") : (e.goodsInfo = [], e.loadMore = "nomore")
                }
              })).catch((function(e) {
                o.stopPullDownRefresh()
              }))
            },
            allChecked: function(o) {
              console.log(o), o.value ? this.goodsInfo.forEach((function(o) {
                o.checked = !0
              })) : this.goodsInfo.forEach((function(o) {
                o.checked = !1
              }))
            },
            del: function() {
              var o = this,
                e = this.goodsInfo.filter((function(o) {
                  return o.checked
                })).map((function(o) {
                  return o.favorId
                })).join(",");
              this.$uniApi.dataRequestNoLoading("DELETE", "manager/app/v1/memberFavoriteSku?ids=" + e).then((function(e) {
                1 == e.code && (o.$util.showToast(e.msg), o.pageLoad(), o.isEditor = !0)
              }))
            },
            goGoodsDetails: function(o, e) {
              if (1 === e) return this.$util.showToast("商品已失效");
              this.$navigateTo({
                url: "/subPage/pages/goods_details/goods_details?itemId=".concat(o)
              })
            },
            onEditor: function() {
              this.isEditor = !this.isEditor
            },
            checkboxChange: function(o) {
              this.goodsInfo[o].checked = !this.goodsInfo[o].checked
            }
          }
        };
        e.default = t
      }).call(this, n("3223").default)
    },
    1564: function(o, e, n) {
      n.r(e);
      var t = n("071f"),
        a = n.n(t);
      for (var i in t)["default"].indexOf(i) < 0 && function(o) {
        n.d(e, o, (function() {
          return t[o]
        }))
      }(i);
      e.default = a.a
    },
    "401b": function(o, e, n) {
      var t = n("52cf");
      n.n(t).a
    },
    "52cf": function(o, e, n) {},
    "74bc": function(o, e, n) {
      n.r(e);
      var t = n("bb99"),
        a = n("1564");
      for (var i in a)["default"].indexOf(i) < 0 && function(o) {
        n.d(e, o, (function() {
          return a[o]
        }))
      }(i);
      n("401b");
      var c = n("828b"),
        r = Object(c.a)(a.default, t.b, t.c, !1, null, "dae27714", null, !1, t.a, void 0);
      e.default = r.exports
    },
    "87dc": function(o, e, n) {
      (function(o, e) {
        var t = n("47a9");
        n("5366"), t(n("3240"));
        var a = t(n("74bc"));
        o.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    bb99: function(o, e, n) {
      n.d(e, "b", (function() {
        return a
      })), n.d(e, "c", (function() {
        return i
      })), n.d(e, "a", (function() {
        return t
      }));
      var t = {
          uCheckbox: function() {
            return n.e("uview-ui/components/u-checkbox/u-checkbox").then(n.bind(null, "4164"))
          },
          uLoadmore: function() {
            return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null, "2db1"))
          }
        },
        a = function() {
          this.$createElement;
          var o = (this._self._c, "nomore" === this.loadMore && this.goodsInfo.length <= 0),
            e = ["loading"].includes(this.loadMore) && this.goodsInfo.length > 0 || "loading" == this.loadMore && 0 == this.goodsInfo.length;
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: o,
              g1: e
            }
          })
        },
        i = []
    }
  },
  [
    ["87dc", "common/runtime", "common/vendor"]
  ]
]);
