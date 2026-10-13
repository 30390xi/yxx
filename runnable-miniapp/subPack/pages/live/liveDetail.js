require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/live/liveDetail"], {
    "054b": function(t, e, n) {
      n.r(e);
      var i = n("c10c"),
        a = n("5e68");
      for (var o in a)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(o);
      n("62dd");
      var c = n("828b"),
        r = Object(c.a)(a.default, i.b, i.c, !1, null, "261d47d5", null, !1, i.a, void 0);
      e.default = r.exports
    },
    "36f6": function(t, e, n) {
      (function(t, e) {
        var i = n("47a9");
        n("5366"), i(n("3240"));
        var a = i(n("054b"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "39d9": function(t, e, n) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = {
          name: "liveDetail",
          components: {
            liveIcon: function() {
              n.e("subPack/pages/live/components/liveIcon").then(function() {
                return resolve(n("1197"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              topHeight: 0,
              listData: "",
              videoData: "",
              liveStreamId: 1,
              timer: null
            }
          },
          onLoad: function(t) {
            this.liveStreamId = t.id, this.getLiveDetail()
          },
          onShow: function() {},
          methods: {
            getDomInfo: function() {
              this.timer && clearTimeout(this.timer);
              var e = this;
              this.$nextTick((function() {
                new Promise((function(e) {
                  var n = t.createSelectorQuery();
                  n.select("#liveTop").boundingClientRect(), n.exec((function(t) {
                    e(t)
                  }))
                })).then((function(t) {
                  t[0].height || (e.timer = setTimeout((function() {
                    e.getDomInfo()
                  }), 100)), e.topHeight = t[0].height
                }))
              }), 550)
            },
            getLiveDetail: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/liveStream/selectById?liveStreamId=" + this.liveStreamId).then((function(e) {
                1 === e.code && (t.listData = e.data, t.videoData = {
                  mainImage: t.listData.mainImage,
                  liveUrl: t.listData.streamUrl
                }, t.$nextTick((function() {
                  t.getDomInfo()
                })))
              }))
            },
            palyError: function(t) {
              console.log("onPlayError, e=" + JSON.stringify(t))
            }
          }
        };
        e.default = i
      }).call(this, n("df3c").default)
    },
    "5e68": function(t, e, n) {
      n.r(e);
      var i = n("39d9"),
        a = n.n(i);
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(o);
      e.default = a.a
    },
    "62dd": function(t, e, n) {
      var i = n("6835");
      n.n(i).a
    },
    6835: function(t, e, n) {},
    c10c: function(t, e, n) {
      n.d(e, "b", (function() {
        return i
      })), n.d(e, "c", (function() {
        return a
      })), n.d(e, "a", (function() {}));
      var i = function() {
          this.$createElement;
          var t = (this._self._c, this._f("saleNumFormat")(this.listData.followers));
          this.$mp.data = Object.assign({}, {
            $root: {
              f0: t
            }
          })
        },
        a = []
    }
  },
  [
    ["36f6", "common/runtime", "common/vendor"]
  ]
]);
