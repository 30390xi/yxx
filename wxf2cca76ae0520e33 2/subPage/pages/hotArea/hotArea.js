require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/hotArea/hotArea"], {
    "0521": function(e, t, n) {
      var i = n("12e6");
      n.n(i).a
    },
    "0575": function(e, t, n) {
      n.r(t);
      var i = n("1d90"),
        a = n("a914");
      for (var o in a)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(o);
      n("0521");
      var r = n("828b"),
        s = Object(r.a)(a.default, i.b, i.c, !1, null, "37506677", null, !1, i.a, void 0);
      t.default = s.exports
    },
    "12e6": function(e, t, n) {},
    "1d90": function(e, t, n) {
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return o
      })), n.d(t, "a", (function() {
        return i
      }));
      var i = {
          uniNavbar: function() {
            return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
          }
        },
        a = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.__map(e.preferentialList, (function(t, n) {
              return {
                $orig: e.__get_orig(t),
                f0: e._f("saleNumFormat")(t.salesNum)
              }
            })));
          e.$mp.data = Object.assign({}, {
            $root: {
              l0: t
            }
          })
        },
        o = []
    },
    "2c57": function(e, t, n) {
      (function(e, t) {
        var i = n("47a9");
        n("5366"), i(n("3240"));
        var a = i(n("0575"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "51f6": function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          data: function() {
            return {
              ani: {},
              size: 10,
              spotList: [],
              spotIncomeList: [],
              preferentialList: [],
              loading: !1,
              fixednavTop: 0,
              fixNavTop: 90,
              skHeight: 0,
              unit: 0,
              timeType: 7,
              searchHeight: 0,
              scrollTop: 0,
              navtop2: 0,
              fixedstyle: "",
              cityId: "",
              cityPage: 1,
              incomePage: 1,
              shareId: "",
              listTab: [],
              listTab2: [{
                name: "近1周",
                val: 7
              }, {
                name: "近1月",
                val: 30
              }],
              timeindex: 0,
              showType: 3,
              cityIndex: 0,
              preferentialPage: 1,
              activeStyle: {
                "font-weight": "bold",
                "z-index": "1",
                "font-size": "28rpx",
                color: "#222222"
              },
              itemStyle: {
                "font-size": "26rpx",
                color: "#555555"
              },
              inactiveStyle: {
                "font-size": "26rpx",
                color: "#555555"
              },
              barStyle: {
                background: "linear-gradient(90deg, #FE581E 0%, rgba(254, 88, 30, 0) 100%)",
                "border-radius": "10px",
                position: "absolute"
              }
            }
          },
          onLoad: function(t) {
            var n = this;
            this.shareId = t.shareId || "";
            var i = e.getMenuButtonBoundingClientRect();
            this.searchHeight = i.top, e.getSystemInfo({
              success: function(e) {
                n.unit = 750 / e.screenWidth, n.fixNavTop = parseInt(i.top + 80 / n.unit)
              }
            }), e.getSystemInfoSync().statusBarHeight, this.userInfo && this.userInfo.isFenxiao || (e.hideShareMenu(), this.showType = 3), this.getDomInfo().then((function(e) {
              n.fixednavTop = e[1].height - parseInt(68 / n.unit), n.navtop2 = e[0].top, n.skHeight = e[1].height - e[0].height
            })), e.showLoading(), this.getPreferentialTicketList()
          },
          onPageScroll: function(e) {
            this.scrollTop = e.scrollTop
          },
          onReachBottom: function() {
            this.preferentialPage++, this.getPreferentialTicketList()
          },
          onShareAppMessage: function() {
            var e = "/subPage/pages/hotArea/hotArea?shareId=".concat(this.userInfo.memberId);
            return {
              title: "游陕西爆款景区优惠门票，快来抢购呀~",
              path: this.$util.setShareUrl(e),
              imageUrl: "https://eshopfile.zhiyousx.com/2022011114370811770.png"
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            todetail: function(e) {
              if (2 != e.listStatus)
                if (0 != e.stockStatus && 1 != e.sellOut) {
                  if (0 == e.productType) {
                    var t = this.shareId ? "&distributorId=".concat(this.shareId) : "";
                    this.$navigateTo({
                      url: "/subPage/pages/goods_details/goods_details?itemId=" + e.itemId + t
                    })
                  }
                  if (1 == e.productType) {
                    var n = this.shareId ? "&shareId=".concat(this.shareId) : "";
                    this.$navigateTo({
                      url: "/subPage/pages/ticket_detail/ticket_detail?itemId=".concat(e.itemId) + n
                    })
                  }
                } else {
                  var i = 1 == e.skuItemType ? "已约满" : "已售空";
                  this.$util.showToast(i)
                }
              else this.$util.showToast("已下架")
            },
            init: function() {
              var t = this;
              this._inited || e.createSelectorQuery().selectAll("#c1").node((function(n) {
                n[0].node;
                var i = e.createCanvasContext("c1", t);
                i.canvas = {
                  width: 100,
                  height: 100
                };
                var a = LoadingJson;
                t.ani = lottie.loadAnimation({
                  renderer: "canvas",
                  loop: !0,
                  autoplay: !0,
                  animationData: a,
                  rendererSettings: {
                    context: i,
                    clearCanvas: !0
                  }
                }), setTimeout((function() {
                  t.ani.play()
                }), 2e3), t._inited = !0
              })).exec()
            },
            getPreferentialTicketList: function() {
              var t = this,
                n = this,
                i = {
                  current: this.preferentialPage,
                  size: 10
                };
              this.$uniApi.dataRequestNoLoading("GET", "product/app/v1/itemPreferential/queryPreferentialTicketPage", i).then((function(i) {
                i.data[0] ? n.preferentialList = n.preferentialList.concat(i.data) : 3 == t.showType && t.$util.showToast("没有更多了"), e.hideLoading(), n.loading = !1
              })).catch((function(t) {
                e.hideLoading(), n.loading = !1, e.showToast({
                  title: "error",
                  icon: "none"
                })
              }))
            },
            pageTo: function(e) {
              this.$navigateTo({
                url: "../ranking/ranking?id=" + e.id
              })
            },
            changeShowType: function(e) {
              this.showType = e
            },
            getDomInfo: function() {
              var t = this;
              return new Promise((function(n) {
                setTimeout((function() {
                  t.$nextTick((function() {
                    var t = e.createSelectorQuery();
                    t.select("#menu").boundingClientRect(), t.select("#fixHeader").boundingClientRect(), t.exec((function(e) {
                      n(e)
                    }))
                  }))
                }), 500)
              }))
            }
          }
        };
        t.default = n
      }).call(this, n("df3c").default)
    },
    a914: function(e, t, n) {
      n.r(t);
      var i = n("51f6"),
        a = n.n(i);
      for (var o in i)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(o);
      t.default = a.a
    }
  },
  [
    ["2c57", "common/runtime", "common/vendor"]
  ]
]);
