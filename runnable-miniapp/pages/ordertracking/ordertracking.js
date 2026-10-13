(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/ordertracking/ordertracking"], {
    "0cc4": function(t, n, i) {
      (function(t, n) {
        var e = i("47a9");
        i("5366"), e(i("3240"));
        var o = e(i("a414"));
        t.__webpack_require_UNI_MP_PLUGIN__ = i, n(o.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    },
    "3c72": function(t, n, i) {
      var e = i("9746");
      i.n(e).a
    },
    "6d15": function(t, n, i) {
      i.d(n, "b", (function() {
        return o
      })), i.d(n, "c", (function() {
        return c
      })), i.d(n, "a", (function() {
        return e
      }));
      var e = {
          uTimeLine: function() {
            return i.e("uview-ui/components/u-time-line/u-time-line").then(i.bind(null, "5115"))
          },
          uTimeLineItem: function() {
            return i.e("uview-ui/components/u-time-line-item/u-time-line-item").then(i.bind(null, "1bef"))
          }
        },
        o = function() {
          this.$createElement;
          var t = (this._self._c, this.logisticList.length);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        c = []
    },
    "88a8": function(t, n, i) {
      (function(t) {
        var e = i("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var o = e(i("c997")),
          c = {
            data: function() {
              return {
                orderId: "",
                logisticList: [],
                logistics: {}
              }
            },
            onLoad: function(t) {
              t.orderId && (this.orderId = t.orderId), this.getLogisticsInfo()
            },
            methods: {
              getLogisticsInfo: function() {
                var t = this,
                  n = {
                    orderId: this.orderId
                  };
                console.log(n), this.$uniApi.dataRequestNoLoading("GET", "order/app/v1/orderPackage/getLogistic", n).then((function(n) {
                  1 === n.code && (t.logistics = n.data, t.logisticList = n.data.logisticsInfo.Traces)
                }))
              },
              copyText: function() {
                (0, o.default)({
                  content: this.logistics.logisticsInfo.LogisticCode,
                  success: function(n) {
                    t.showToast({
                      title: n,
                      icon: "none"
                    })
                  },
                  error: function(n) {
                    t.showToast({
                      title: n
                    })
                  }
                })
              }
            }
          };
        n.default = c
      }).call(this, i("df3c").default)
    },
    9746: function(t, n, i) {},
    a414: function(t, n, i) {
      i.r(n);
      var e = i("6d15"),
        o = i("f56f");
      for (var c in o)["default"].indexOf(c) < 0 && function(t) {
        i.d(n, t, (function() {
          return o[t]
        }))
      }(c);
      i("3c72");
      var r = i("828b"),
        a = Object(r.a)(o.default, e.b, e.c, !1, null, "5f9d08de", null, !1, e.a, void 0);
      n.default = a.exports
    },
    f56f: function(t, n, i) {
      i.r(n);
      var e = i("88a8"),
        o = i.n(e);
      for (var c in e)["default"].indexOf(c) < 0 && function(t) {
        i.d(n, t, (function() {
          return e[t]
        }))
      }(c);
      n.default = o.a
    }
  },
  [
    ["0cc4", "common/runtime", "common/vendor"]
  ]
]);
