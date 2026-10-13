require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/coupon/coupon"], {
    "23d1": function(o, t, n) {
      n.r(t);
      var e = n("a169"),
        i = n("6bbe");
      for (var u in i)["default"].indexOf(u) < 0 && function(o) {
        n.d(t, o, (function() {
          return i[o]
        }))
      }(u);
      n("c12c");
      var a = n("828b"),
        r = Object(a.a)(i.default, e.b, e.c, !1, null, "299e5889", null, !1, e.a, void 0);
      t.default = r.exports
    },
    "5c22": function(o, t, n) {
      (function(o, t) {
        var e = n("47a9");
        n("5366"), e(n("3240"));
        var i = e(n("23d1"));
        o.__webpack_require_UNI_MP_PLUGIN__ = n, t(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "6bbe": function(o, t, n) {
      n.r(t);
      var e = n("d86a"),
        i = n.n(e);
      for (var u in e)["default"].indexOf(u) < 0 && function(o) {
        n.d(t, o, (function() {
          return e[o]
        }))
      }(u);
      t.default = i.a
    },
    "916f": function(o, t, n) {},
    a169: function(o, t, n) {
      n.d(t, "b", (function() {
        return i
      })), n.d(t, "c", (function() {
        return u
      })), n.d(t, "a", (function() {
        return e
      }));
      var e = {
          uniNavbar: function() {
            return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
          }
        },
        i = function() {
          var o = this,
            t = (o.$createElement, o._self._c, o.__map(o.couponList, (function(t, n) {
              return {
                $orig: o.__get_orig(t),
                f0: 3 == t.type ? o._f("couponFilter")(t) : null,
                f1: 3 != t.type ? o._f("couponFilter")(t) : null,
                m0: o.getNum(t),
                f2: 1 != t.receiveButton ? o._f("btnFilter")(t.receiveButton) : null
              }
            }))),
            n = o.couponList.length <= 0 && "nomore" == o.loadMore;
          o.$mp.data = Object.assign({}, {
            $root: {
              l0: t,
              g0: n
            }
          })
        },
        u = []
    },
    c12c: function(o, t, n) {
      var e = n("916f");
      n.n(e).a
    },
    d86a: function(o, t, n) {
      (function(o) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var e = n("a04a"),
          i = n("a2cf"),
          u = {
            data: function() {
              return {
                menuButtonInfo: {},
                scrollTop: 0,
                scrollTopLimit: 0,
                searchTop: 0,
                titleColor: "#FFFFFF",
                showSortPop: !1,
                showChoosePop: !1,
                couponList: [],
                month: 0,
                itemType: "",
                tabList: [{
                  name: "全部",
                  itemType: ""
                }, {
                  name: "门票",
                  itemType: 1
                }, {
                  name: "线路",
                  itemType: 2
                }],
                cardId: "",
                page: 1,
                loadMore: "loading"
              }
            },
            filters: {
              couponFilter: function(o) {
                return 1 == o.type ? "满".concat(o.threshold, "元") : 2 == o.type ? "无门槛" : 3 == o.type ? "抵扣".concat(o.deduction, "张") : void 0
              },
              btnFilter: function(o) {
                return {
                  1: "立即领取",
                  2: "已抢光",
                  3: "去使用",
                  4: "已使用",
                  5: "已过期"
                } [o]
              }
            },
            watch: {},
            computed: {
              userInfo: function() {
                return this.$store.getters.userInfor
              }
            },
            onHide: function() {},
            onLoad: function(t) {
              this.menuButtonInfo = o.getMenuButtonBoundingClientRect(), this.scrollTopLimit = this.menuButtonInfo.height + 10, this.searchTop = this.menuButtonInfo.bottom + 10;
              var n = i().month();
              this.month = n + 1, this.getUnionEquityCardId()
            },
            onShow: function() {},
            onReachBottom: function() {
              "loadmore" === this.loadMore && this.getCouponList()
            },
            onPageScroll: function(o) {
              this.scrollTop = o.scrollTop;
              var t = o.scrollTop / this.scrollTopLimit;
              this.scrollTop <= 10 ? this.titleColor = "rgba(255,255,255,".concat(1 - t, ")") : this.titleColor = "rgba(0,0,0,".concat(t, ")")
            },
            onShareAppMessage: function() {
              return {
                title: "陕西联合会员文旅消费福利等你来领",
                imageUrl: "https://eshopfile.zhiyousx.com/2024061310513695733.png",
                path: this.$util.setShareUrl("union/pages/coupon/coupon")
              }
            },
            methods: {
              changeType: function(o) {
                this.itemType = o.itemType, this.current = 1, this.couponList = [], this.getCouponList()
              },
              getUnionEquityCardId: function() {
                var o = this;
                this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/userUnionEquityCard/getUnionEquityCardId").then((function(t) {
                  1 == t.code ? (o.cardId = t.data, o.getCouponList()) : o.$util.showToast(t.msg)
                }))
              },
              getNum: function(o) {
                return this.$util.add(Number(o.receivedNum), Number(o.baseReceivedNum))
              },
              getCouponList: function() {
                var t = this,
                  n = {
                    current: this.page,
                    size: 10,
                    itemType: this.itemType,
                    unionEquityCardId: this.cardId
                  };
                this.loadMore = "loading", this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/unionCoupon/selectPage", n).then((function(n) {
                  if (o.stopPullDownRefresh(), 1 === n.code) {
                    var e = n.data.records;
                    n.data.total > 0 ? (1 === n.data.current ? t.couponList = e : t.couponList = t.couponList.concat(e), n.data.current < n.data.pages ? (t.page = t.page + 1, t.loadMore = "loadmore") : t.loadMore = "nomore") : (t.couponList = [], t.loadMore = "nomore")
                  }
                })).catch((function(t) {
                  o.stopPullDownRefresh()
                }))
              },
              receiveCoupon: function(o) {
                var t = this;
                (0, e.confirmBefore)() && (3 != o.receiveButton ? 1 == o.receiveButton && this.$uniApi.dataRequestNoLoading("POST", "product/app/v1/CouponReceive/receiveCoupon", {
                  couponId: o.couponId
                }).then((function(n) {
                  1 == n.code ? (t.$util.showToast("领取成功"), t.getCouponDetail(o.unionCouponId)) : (t.$util.showToast("已抢光"), t.getCouponDetail(o.unionCouponId))
                })) : (0, e.jumpUseCoupon)(o))
              },
              getCouponDetail: function(o) {
                var t = this;
                this.$uniApi.dataRequestNoLoading("get", "product/app/v1/unionCoupon/selectAppVoById", {
                  unionCouponId: o
                }).then((function(n) {
                  if (1 == n.code) {
                    var e = t.couponList.findIndex((function(t) {
                      return t.unionCouponId == o
                    }));
                    t.couponList.splice(e, 1, n.data), t.$util.showToast(n.msg)
                  }
                }))
              }
            }
          };
        t.default = u
      }).call(this, n("df3c").default)
    }
  },
  [
    ["5c22", "common/runtime", "common/vendor", "union/common/vendor"]
  ]
]);
