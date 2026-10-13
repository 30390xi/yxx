require("../../../@babel/runtime/helpers/Arrayincludes"), require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/strategy/strategy"], {
    "0b8e": function(t, n, e) {},
    3808: function(t, n, e) {
      e.d(n, "b", (function() {
        return o
      })), e.d(n, "c", (function() {
        return a
      })), e.d(n, "a", (function() {
        return i
      }));
      var i = {
          uParse: function() {
            return Promise.all([e.e("common/vendor"), e.e("uview-ui/components/u-parse/u-parse")]).then(e.bind(null, "7217"))
          },
          uPopup: function() {
            return e.e("uview-ui/components/u-popup/u-popup").then(e.bind(null, "39fb"))
          }
        },
        o = function() {
          var t = this,
            n = (t.$createElement, t._self._c, t.content ? t.__map(t.content.chapterList, (function(n, e) {
              return {
                $orig: t.__get_orig(n),
                l0: t.__map(n.chapterItemList, (function(n, e) {
                  var i = t.__get_orig(n),
                    o = n.originId ? [0, 1, 3, 4, 5].includes(Number(n.mentionType)) : null;
                  return {
                    $orig: i,
                    g0: o,
                    g1: n.originId && o ? [1, 3, 4, 5].includes(Number(n.mentionType)) && n.isBookable : null
                  }
                }))
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
    "3c0b": function(t, n, e) {
      e.r(n);
      var i = e("3808"),
        o = e("598e");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(a);
      e("cb15"), e("4a11");
      var u = e("828b"),
        r = Object(u.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      n.default = r.exports
    },
    "406b": function(t, n, e) {
      (function(t, n) {
        var i = e("47a9");
        e("5366"), i(e("3240"));
        var o = i(e("3c0b"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(o.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    "4a11": function(t, n, e) {
      var i = e("0b8e");
      e.n(i).a
    },
    5313: function(t, n, e) {
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          props: [],
          onLoad: function(t) {
            this.contentId = t.id, this.getContent(), this.updateReadingNum(t.id)
          },
          data: function() {
            return {
              contentId: "",
              spotList: [1],
              show: !1,
              scrollH: 600,
              showTab: 0,
              listsDom: {},
              contentIndex: 0,
              pagepoint: "",
              content: "",
              scrolldistance: 0
            }
          },
          onPageScroll: function(t) {},
          onShareAppMessage: function(t) {
            var n = this.content.mainPictureUrl.toLowerCase(),
              e = "/subPage/pages/strategy/strategy?id=" + this.contentId;
            return {
              title: this.content.title,
              imageUrl: -1 == n.indexOf(".gif") ? this.content.mainPictureUrl : getApp().globalData.shareimg,
              path: this.$util.setShareUrl(e)
            }
          },
          onShow: function() {
            var n = t.getSystemInfoSync(),
              e = n.statusBarHeight,
              i = 0,
              o = t.getMenuButtonBoundingClientRect();
            n.system.toLowerCase().indexOf("ios") > -1 ? i = o.bottom + 2 * (o.top - n.statusBarHeight) : i = o.height + 2 * (o.top - n.statusBarHeight) + e;
            var a = 750 / n.screenWidth,
              u = n.screenHeight;
            this.scrollH = parseInt(u - i - 100 / a)
          },
          onReachBottom: function() {},
          methods: {
            getContent: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/contentStrategyTravels/queryStrategyTravelsDetail?contentId=" + this.contentId).then((function(n) {
                t.content = n.data
              }))
            },
            togglecontent: function(t) {
              var n = [0, this.listsDom.height],
                e = this;
              e.showTab = -1, this.$nextTick((function() {
                e.showTab = n[t], e.contentIndex = t
              }))
            },
            showmodal: function() {
              this.show = !0;
              var t = this;
              this.getDomInfo().then((function(n) {
                t.listsDom = n[0]
              }))
            },
            scrollchange: function(t) {
              t.detail.scrollTop + 5 > this.listsDom.height ? this.contentIndex = 1 : this.contentIndex = 0
            },
            navtoArticle: function(t) {
              var n = this;
              this.show = !1, n.pagepoint = "", setTimeout((function() {
                n.pagepoint = "tiji" + t
              }), 200)
            },
            routerTo: function(t) {
              0 == t.mentionType && this.$navigateTo({
                url: "/subPack/pages/city/city?cityId=".concat(t.originId)
              }), [1, 3, 4, 5].includes(Number(t.mentionType)) && this.$navigateTo({
                url: "/pages/spotDetail/spotDetail?spotId=" + t.originId
              }), 2 == t.mentionType && this.$navigateTo({
                url: "/pages/spotThirdDetail/spotThirdDetail?spotId=" + t.originId
              })
            },
            updateReadingNum: function(t) {
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/CommonReadingNum/updateReadingNum", {
                originType: 1,
                originId: t
              }).then((function(t) {
                console.log("add success")
              }))
            },
            getDomInfo: function(n) {
              var e = n || "#lists";
              return new Promise((function(n) {
                setTimeout((function() {
                  var i = t.createSelectorQuery();
                  i.select(e).boundingClientRect(), i.exec((function(t) {
                    n(t)
                  }))
                }), 100)
              }))
            }
          }
        };
        n.default = e
      }).call(this, e("df3c").default)
    },
    "598e": function(t, n, e) {
      e.r(n);
      var i = e("5313"),
        o = e.n(i);
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(a);
      n.default = o.a
    },
    "5b84": function(t, n, e) {},
    cb15: function(t, n, e) {
      var i = e("5b84");
      e.n(i).a
    }
  },
  [
    ["406b", "common/runtime", "common/vendor"]
  ]
]);
