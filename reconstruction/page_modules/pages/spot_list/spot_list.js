// Extracted from pages/spot_list/spot_list.js; webpack module 8692.
// Compiled code for analysis; not an original source file.
module.exports = {
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
                loading: !1
              }
            },
            onLoad: function() {
              this._cityId = "", this.getClassify()
            },
            onShow: function() {
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
                        n.current = t, n._cityId = n.tabbar[n.current].id, n.arrSpot = [], n.pageNum = 1, n.getSpotList();
                      case 7:
                      case "end":
                        return a.stop()
                    }
                  }), a)
                })))()
              },
              getSpotList: function() {
                var n = this;
                t.showLoading(), this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/scenicSpot", {
                  cityId: this._cityId,
                  current: this.pageNum,
                  size: 10
                }).then((function(a) {
                  t.hideLoading(), a.data.scenicSpotVoList && a.data.scenicSpotVoList[0] ? n.arrSpot = n.arrSpot.concat(a.data.scenicSpotVoList) : t.showToast({
                    title: "没有更多咯~",
                    icon: "none"
                  }), n.loading = !1
                })).catch((function(a) {
                  n.loading = !1, t.hideLoading()
                }))
              },
              jumpSpotDetail: function(t) {
                this.$navigateTo({
                  url: "../spotDetail/spotDetail?spotId=".concat(t.scenicId)
                })
              },
              scrollToBottom: function() {
                this.loading || (this.loading = !0, this.pageNum++, this.getSpotList())
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
};
