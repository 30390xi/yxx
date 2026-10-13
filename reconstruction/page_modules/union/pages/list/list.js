// Extracted from union/pages/list/list.js; webpack module e7c8.
// Compiled code for analysis; not an original source file.
module.exports = {
    e7c8: function(t, o, e) {
      (function(t) {
        var n = e("47a9");
        Object.defineProperty(o, "__esModule", {
          value: !0
        }), o.default = void 0;
        var i = n(e("7eb4")),
          s = n(e("34cf")),
          a = n(e("ee10")),
          r = e("a04a"),
          u = (e("a2cf"), {
            data: function() {
              return {
                menuButtonInfo: {},
                scrollTop: 0,
                scrollTopLimit: 0,
                searchTop: 0,
                titleColor: "#FFFFFF",
                showSortPop: !1,
                showChoosePop: !1,
                tabList: [],
                chooseList: [{
                  id: 2,
                  name: "赞助商"
                }, {
                  id: 1,
                  name: "去过"
                }, {
                  id: 0,
                  name: "未去过"
                }],
                chooseId: "",
                chooseName: "",
                mdData: {
                  id: "",
                  name: ""
                },
                equityList: [],
                page: 1,
                loadMore: "loading",
                searchText: "",
                sortList: [{
                  id: 0,
                  name: "推荐排序"
                }, {
                  id: 1,
                  name: "距离优先"
                }, {
                  id: 2,
                  name: "人气优先"
                }, {
                  id: 3,
                  name: "新店优先"
                }],
                sort: 0,
                detailClassId: "",
                sortName: "推荐排序",
                map: {
                  longitude: "",
                  latitude: ""
                },
                unionLevel: 3
              }
            },
            filters: {
              levelFilter: function(t) {
                return {
                  1: "青年联盟",
                  2: "普通会员",
                  3: "联合会员",
                  4: "参议会员"
                } [t]
              }
            },
            watch: {},
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            onShareAppMessage: function() {
              return {
                title: "陕西联合会员吃喝玩乐热门权益",
                imageUrl: "https://eshopfile.zhiyousx.com/2024061310513695733.png",
                path: this.$util.setShareUrl("union/pages/list/list")
              }
            },
            onHide: function() {},
            onLoad: function(o) {
              1 == o.isUsed && (this.mdData.name = "去过", this.mdData.id = 1, this.chooseName = this.mdData.name, this.chooseId = this.mdData.id), this.getLocation(), this.menuButtonInfo = t.getMenuButtonBoundingClientRect(), this.scrollTopLimit = this.menuButtonInfo.height + 8, this.searchTop = this.menuButtonInfo.bottom + 8, this.getUnionDetailClass(), this.toSearch(), t.getStorageSync("token") && this.userInfo && this.userInfo.isUnionMember && t.getStorageSync("unionUserInfo") ? this.unionLevel = t.getStorageSync("unionUserInfo").level : this.unionLevel = 3
            },
            onShow: function() {},
            onPageScroll: function(t) {
              this.scrollTop = t.scrollTop;
              var o = t.scrollTop / this.scrollTopLimit;
              this.scrollTop <= 10 ? this.titleColor = "rgba(255,255,255,".concat(1 - o, ")") : this.titleColor = "rgba(0,0,0,".concat(o, ")")
            },
            onReachBottom: function() {
              "loadmore" === this.loadMore && this.getEquityList()
            },
            methods: {
              closePop: function() {
                this.showChoosePop = !1, this.showSortPop = !1
              },
              moveHandle: function() {
                return !1
              },
              changeTab: function(t) {
                this.detailClassId = t.detailClassId, this.toSearch()
              },
              changeSort: function(o) {
                var e = this;
                this.sort = o.id, this.sortName = o.name, this.showSortPop = !1, 1 != o.id ? this.toSearch() : t.authorize({
                  scope: "scope.userLocation",
                  success: function() {
                    e.getLocation()
                  },
                  fail: function() {
                    e.reAuth()
                  }
                })
              },
              toSearch: function() {
                this.page = 1, this.equityList = [], this.getEquityList()
              },
              getLocation: function() {
                var o = this;
                t.getLocation({
                  type: "gcj02",
                  success: function(t) {
                    o.map = {
                      longitude: t.longitude,
                      latitude: t.latitude
                    }, o.toSearch()
                  }
                })
              },
              reAuth: function(o) {
                var e = this;
                return (0, a.default)(i.default.mark((function o() {
                  var n, a, r, u, c;
                  return i.default.wrap((function(o) {
                    for (;;) switch (o.prev = o.next) {
                      case 0:
                        return o.next = 2, t.showModal({
                          content: "检测到您没打开地址权限，是否去设置打开？",
                          confirmText: "确认",
                          cancelText: "取消"
                        });
                      case 2:
                        if (n = o.sent, a = (0, s.default)(n, 2), r = a[0], u = a[1], !r) {
                          o.next = 8;
                          break
                        }
                        return o.abrupt("return");
                      case 8:
                        if (!u.confirm) {
                          o.next = 10;
                          break
                        }
                        return o.abrupt("return", t.openSetting({
                          success: function(t) {}
                        }));
                      case 10:
                        u.confirm || (c = {
                          id: 0,
                          name: "推荐排序"
                        }, e.sort = c.id, e.sortName = c.name, e.toSearch());
                      case 11:
                      case "end":
                        return o.stop()
                    }
                  }), o)
                })))()
              },
              jumpToS: function(t) {
                this.$navigateTo({
                  url: t
                })
              },
              jumpTo: function(t, o) {
                (0, r.routerTo)(t, o)
              },
              showSort: function() {
                this.showSortPop = !this.showSortPop, this.showChoosePop = !1
              },
              showChoose: function() {
                this.mdData = {
                  id: this.chooseId,
                  name: this.chooseName
                }, this.showChoosePop = !this.showChoosePop, this.showSortPop = !1
              },
              chooseConfirm: function() {
                this.chooseName = this.mdData.name, this.chooseId = this.mdData.id, this.showChoosePop = !1, this.toSearch()
              },
              choose: function(t) {
                this.mdData = t
              },
              reset: function() {
                this.mdData = {
                  id: "",
                  name: ""
                }
              },
              getUnionDetailClass: function() {
                var t = this;
                this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/userUnionEquityCard/getUnionDetailClass", {}).then((function(o) {
                  if (1 == o.code) {
                    var e = o.data || [];
                    e.unshift({
                      detailClassId: "",
                      detailClassName: "全部"
                    }), t.tabList = e
                  } else t.$util.showToast(o.msg)
                }))
              },
              getEquityList: function() {
                var o = this,
                  e = {
                    current: this.page,
                    size: 10,
                    detailClassId: this.detailClassId,
                    latitude: this.map.latitude,
                    longitude: this.map.longitude,
                    searchKey: this.searchText,
                    isUsed: this.chooseId,
                    sort: this.sort
                  };
                this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("POST", "order/app/v1/userUnionEquityCard/getUnionEquityClassList", e).then((function(e) {
                  if (t.stopPullDownRefresh(), 1 === e.code) {
                    var n = e.data.records;
                    e.data.total > 0 ? (1 === e.data.current ? o.equityList = n : o.equityList = o.equityList.concat(n), e.data.current < e.data.pages ? (o.page = o.page + 1, o.loadMore = "loadmore") : o.loadMore = "nomore") : (o.equityList = [], o.loadMore = "nomore")
                  }
                })).catch((function(o) {
                  t.stopPullDownRefresh()
                }))
              },
              handleChange: function(t) {
                this.searchText = t.detail.value.trim(), this.toSearch()
              }
            }
          });
        o.default = u
      }).call(this, e("df3c").default)
    },
};
