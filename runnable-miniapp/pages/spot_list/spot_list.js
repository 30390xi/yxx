(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/spot_list/spot_list"], {
    "67aa": function(t, n, a) {
      var i = a("aae7");
      a.n(i).a
    },
    8692: function(t, n, a) {
      (function(t) {
        var i = a("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = i(a("7eb4")),
          o = i(a("ee10")),
          c = {
            components: {
              tabBar: function() {
                a.e("components/tabBar/tabBar").then(function() {
                  return resolve(a("d657"))
                }.bind(null, a)).catch(a.oe)
              }
            },
            data: function() {
              return {
                tabbar: [],
                arrSpot: [],
                current: 0,
                pageNum: 1,
                loading: !1,
                hasMore: !0
              }
            },
            onLoad: function() {
              this._cityId = "", this.getClassify()
            },
            onShow: function() {
              setTimeout(function() { var pages = getCurrentPages(), page = pages[pages.length - 1], bar = page && page.getTabBar && page.getTabBar(); if (page && page.route === "pages/spot_list/spot_list" && bar) bar.setData({ selected: 1 }); }, 100);
              this.$bus.$emit("tabPlay", 1)
            },
            methods: {
              getClassify: function() {
                var n = this;
                t.showNavigationBarLoading(), this.$uniApi.getRequestNoLoading("GET", "base/app/v1/city/queryCityList").then((function(a) {
                  t.hideNavigationBarLoading(), a.data.forEach((function(t) {
                    n.tabbar.push(t)
                  })), n._cityId = n.tabbar[0].id, n.getSpotList()
                }))
              },
              swichMenu: function(t) {
                var n = this;
                return (0, o.default)(e.default.mark((function a() {
                  return e.default.wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                      case 0:
                        if (t != n.current) {
                          a.next = 2;
                          break
                        }
                        return a.abrupt("return");
                      case 2:
                        n.current = t, n._cityId = n.tabbar[n.current].id, n.arrSpot = [], n.pageNum = 1, n.hasMore = !0, n.loading = !1, n.getSpotList();
                      case 7:
                      case "end":
                        return a.stop()
                    }
                  }), a)
                })))()
              },
              getSpotList: function() {
                var n = this, cityId = this._cityId, page = this.pageNum;
                this.loading = !0, t.showLoading(), this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpot", {
                  cityId: cityId,
                  current: page,
                  size: 10
                }).then((function(a) {
                  if (cityId !== n._cityId || page !== n.pageNum) return;
                  var data = a && a.data || {}, list = data.scenicSpotVoList || [];
                  t.hideLoading();
                  if (Array.isArray(list) && list.length) n.arrSpot = n.arrSpot.concat(list);
                  n.hasMore = n.arrSpot.length < Number(data.total || 0) && list.length > 0;
                  n.loading = !1
                })).catch((function(a) {
                  if (cityId === n._cityId && page === n.pageNum) n.pageNum = Math.max(1, page - 1), n.loading = !1, t.hideLoading()
                }))
              },
              jumpSpotDetail: function(t) {
                this.$navigateTo({
                  url: "../spotDetail/spotDetail?spotId=".concat(t.scenicId)
                })
              },
              scrollToBottom: function() {
                this.loading || !this.hasMore || (this.pageNum++, this.getSpotList())
              },
              jumpCity: function(t) {
                this.$navigateTo({
                  url: "/subPack/pages/city/city?cityId=".concat(t.id)
                })
              }
            }
          };
        n.default = c
      }).call(this, a("df3c").default)
    },
    aae7: function(t, n, a) {},
    be2c: function(t, n, a) {
      a.r(n);
      var i = a("8692"),
        e = a.n(i);
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        a.d(n, t, (function() {
          return i[t]
        }))
      }(o);
      n.default = e.a
    },
    e54e: function(t, n, a) {
      a.d(n, "b", (function() {
        return e
      })), a.d(n, "c", (function() {
        return o
      })), a.d(n, "a", (function() {
        return i
      }));
      var i = {
          uniNavbar: function() {
            return a.e("components/uni-navbar/uni-navbar").then(a.bind(null, "101a"))
          }
        },
        e = function() {
          this.$createElement;
          var t = (this._self._c, this.tabbar.length);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        o = []
    },
    ec10: function(t, n, a) {
      a.r(n);
      var i = a("e54e"),
        e = a("be2c");
      for (var o in e)["default"].indexOf(o) < 0 && function(t) {
        a.d(n, t, (function() {
          return e[t]
        }))
      }(o);
      a("67aa");
      var c = a("828b"),
        r = Object(c.a)(e.default, i.b, i.c, !1, null, "1bc4667e", null, !1, i.a, void 0);
      n.default = r.exports
    },
    f23a: function(t, n, a) {
      (function(t, n) {
        var i = a("47a9");
        a("5366"), i(a("3240"));
        var e = i(a("ec10"));
        t.__webpack_require_UNI_MP_PLUGIN__ = a, n(e.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    }
  },
  [
    ["f23a", "common/runtime", "common/vendor"]
  ]
]);
