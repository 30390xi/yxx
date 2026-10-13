// Extracted from yearCard/pages/shopList/shopList.js; webpack module 9464.
// Compiled code for analysis; not an original source file.
module.exports = {
    9464: function(t, e, n) {
      (function(t) {
        var a = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var r = a(n("7eb4")),
          i = a(n("af34")),
          s = a(n("ee10")),
          u = n("767f"),
          o = [{
            name: "需预约",
            id: 0,
            filterFn: function(t) {
              return 1 === t.needCreateOrder
            }
          }, {
            name: "可多次入园",
            id: 1,
            filterFn: function(t) {
              return 0 === t.useTimesLimit || t.totalTimes > 1
            }
          }, {
            name: "已去过",
            id: 2,
            filterFn: function(t) {
              return t.usedTimes > 0
            }
          }, {
            name: "还未去",
            id: 3,
            filterFn: function(t) {
              return 0 === t.usedTimes
            }
          }],
          c = {
            components: {
              shopItem: function() {
                n.e("yearCard/pages/shopList/components/shopItem").then(function() {
                  return resolve(n("9e49"))
                }.bind(null, n)).catch(n.oe)
              },
              selectCard: function() {
                n.e("yearCard/pages/shopList/components/selectCard").then(function() {
                  return resolve(n("5021"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                opacity: 0,
                statusBarHeight: t.getSystemInfoSync().statusBarHeight,
                fontColor: "#ffffff",
                tabList: [],
                checkedTabIndex: 0,
                statusList: o,
                statusIds: [],
                list: [],
                oldList: [],
                selectCardShow: !1,
                popupData: [],
                currentId: "",
                title: "",
                searchText: ""
              }
            },
            computed: {
              filterList: function() {
                var t = this;
                if (0 === this.statusIds.length) return this.list;
                var e = o.filter((function(e) {
                  return t.statusIds.includes(e.id)
                }));
                return this.list.filter((function(t) {
                  return e.some((function(e) {
                    return e.filterFn(t)
                  }))
                }))
              }
            },
            onLoad: function(t) {
              var e = this;
              return (0, s.default)(r.default.mark((function n() {
                return r.default.wrap((function(n) {
                  for (;;) switch (n.prev = n.next) {
                    case 0:
                      return t.checkedId && (e.statusIds = [Number(t.checkedId)]), e.currentId = t.userYearCardId, e.title = t.title || "", n.next = 5, e.getList();
                    case 5:
                    case "end":
                      return n.stop()
                  }
                }), n)
              })))()
            },
            onShow: function() {
              this.getDetail()
            },
            onPageScroll: function(t) {
              this.scrollTop = t.scrollTop, this.scrollTop > 40 ? (this.opacity = 1, this.fontColor = "#000000") : (this.opacity = 0, this.fontColor = "#ffffff")
            },
            methods: {
              goMap: function() {
                t.navigateTo({
                  url: "/yearCard/pages/cardMap/cardMap?userYearCardId=" + this.currentId
                })
              },
              handleChange: function(t) {
                var e = t.detail.value.trim();
                this.list = this.oldList.filter((function(t) {
                  return t.scenicName.includes(e)
                }))
              },
              changeCard: function(t) {
                this.currentId = t.id, this.title = t.title, this.selectCardShow = !1, this.getDetail()
              },
              getList: function() {
                var e = this;
                return (0, s.default)(r.default.mark((function n() {
                  var a;
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, (0, u.getCardListApi)({
                          status: 3
                        });
                      case 2:
                        if (1 === (a = n.sent).code) {
                          n.next = 5;
                          break
                        }
                        return n.abrupt("return", t.showToast({
                          title: a.msg,
                          icon: "none"
                        }));
                      case 5:
                        e.popupData = a.data, e.currentId || (e.currentId = e.popupData[0].userYearCardId, e.title = e.popupData[0].title);
                      case 7:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              getDetail: function() {
                var e = this;
                return (0, s.default)(r.default.mark((function n() {
                  var a;
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        return n.next = 2, (0, u.getYearCardDetailApi)({
                          userYearCardId: e.currentId
                        });
                      case 2:
                        if (1 === (a = n.sent).code) {
                          n.next = 5;
                          break
                        }
                        return n.abrupt("return", t.showToast({
                          title: a.msg,
                          icon: "none"
                        }));
                      case 5:
                        e.tabList = a.data.classList.filter((function(t) {
                          return t.detailVOList.length > 0
                        })), e.tabList.length && (e.list = e.tabList[0].detailVOList, e.oldList = (0, i.default)(e.tabList[0].detailVOList));
                      case 7:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              openPopup: function() {
                this.selectCardShow = !0
              },
              changeTab: function(t) {
                this.searchText = "", this.checkedTabIndex = t, this.list = this.tabList[this.checkedTabIndex].detailVOList, this.oldList = (0, i.default)(this.tabList[this.checkedTabIndex].detailVOList)
              },
              changeStatus: function(t) {
                this.statusIds = this.statusIds.includes(t) ? [] : [t]
              }
            }
          };
        e.default = c
      }).call(this, n("df3c").default)
    },
};
