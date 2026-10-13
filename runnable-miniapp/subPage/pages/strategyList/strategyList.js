require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/strategyList/strategyList"], {
    1756: function(t, n, e) {
      e.r(n);
      var i = e("2f2c"),
        r = e.n(i);
      for (var c in i)["default"].indexOf(c) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(c);
      n.default = r.a
    },
    "2f2c": function(t, n, e) {
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          props: [],
          onLoad: function(t) {
            this.cityId = t.id, this.getList()
          },
          data: function() {
            return {
              list: [],
              cityId: "",
              size: 10,
              current: 1
            }
          },
          onShow: function() {},
          onReachBottom: function() {
            this.current += 1, this.getList()
          },
          methods: {
            setSrc: function(t) {
              if (t.coverPictureUrl) return t.coverPictureUrl;
              var n = t.lineCoverPic ? JSON.parse(t.lineCoverPic) : [];
              return n.length > 0 ? n[0].url : ""
            },
            todetail: function(t) {
              this.$util.cityJump(t.contentType, t.originId, t)
            },
            getList: function() {
              var n = this,
                e = {
                  current: this.current,
                  size: this.size,
                  cityId: this.cityId
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/city/queryCityStrategyList", e).then((function(e) {
                n.list = n.list.concat(e.data.records), 1 == n.current || e.data.records[0] || t.showToast({
                  title: "没有更多咯",
                  icon: "none"
                })
              }))
            }
          }
        };
        n.default = e
      }).call(this, e("df3c").default)
    },
    5089: function(t, n, e) {
      (function(t, n) {
        var i = e("47a9");
        e("5366"), i(e("3240"));
        var r = i(e("7718"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(r.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    6868: function(t, n, e) {
      e.d(n, "b", (function() {
        return i
      })), e.d(n, "c", (function() {
        return r
      })), e.d(n, "a", (function() {}));
      var i = function() {
          var t = this,
            n = (t.$createElement, t._self._c, t.list && t.list[0] ? t.__map(t.list, (function(n, e) {
              return {
                $orig: t.__get_orig(n),
                m0: t.setSrc(n)
              }
            })) : null);
          t.$mp.data = Object.assign({}, {
            $root: {
              l0: n
            }
          })
        },
        r = []
    },
    "6cee": function(t, n, e) {
      var i = e("9700");
      e.n(i).a
    },
    7718: function(t, n, e) {
      e.r(n);
      var i = e("6868"),
        r = e("1756");
      for (var c in r)["default"].indexOf(c) < 0 && function(t) {
        e.d(n, t, (function() {
          return r[t]
        }))
      }(c);
      e("febd"), e("6cee");
      var o = e("828b"),
        u = Object(o.a)(r.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      n.default = u.exports
    },
    9700: function(t, n, e) {},
    dffc: function(t, n, e) {},
    febd: function(t, n, e) {
      var i = e("dffc");
      e.n(i).a
    }
  },
  [
    ["5089", "common/runtime", "common/vendor"]
  ]
]);
