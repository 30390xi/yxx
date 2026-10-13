(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uview-ui/components/u-skeleton/u-skeleton"], {
    "26a8": function(e, t, n) {},
    "40f4": function(e, t, n) {
      var o = n("26a8");
      n.n(o).a
    },
    "42c2": function(e, t, n) {
      n.d(t, "b", (function() {
        return o
      })), n.d(t, "c", (function() {
        return i
      })), n.d(t, "a", (function() {}));
      var o = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.loading ? e.__map(e.RectNodes, (function(t, n) {
              return {
                $orig: e.__get_orig(t),
                g0: e.$u.guid()
              }
            })) : null),
            n = e.loading ? e.__map(e.circleNodes, (function(t, n) {
              return {
                $orig: e.__get_orig(t),
                g1: e.$u.guid()
              }
            })) : null,
            o = e.loading ? e.__map(e.filletNodes, (function(t, n) {
              return {
                $orig: e.__get_orig(t),
                g2: e.$u.guid()
              }
            })) : null;
          e.$mp.data = Object.assign({}, {
            $root: {
              l0: t,
              l1: n,
              l2: o
            }
          })
        },
        i = []
    },
    "70d2": function(e, t, n) {
      n.r(t);
      var o = n("42c2"),
        i = n("edc5");
      for (var l in i)["default"].indexOf(l) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(l);
      n("40f4");
      var c = n("828b"),
        u = Object(c.a)(i.default, o.b, o.c, !1, null, "4588b01a", null, !1, o.a, void 0);
      t.default = u.exports
    },
    edc5: function(e, t, n) {
      n.r(t);
      var o = n("eec4"),
        i = n.n(o);
      for (var l in o)["default"].indexOf(l) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(l);
      t.default = i.a
    },
    eec4: function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          name: "u-skeleton",
          props: {
            elColor: {
              type: String,
              default: "#e5e5e5"
            },
            bgColor: {
              type: String,
              default: "#ffffff"
            },
            animation: {
              type: Boolean,
              default: !1
            },
            borderRadius: {
              type: [String, Number],
              default: "10"
            },
            loading: {
              type: Boolean,
              default: !0
            }
          },
          data: function() {
            return {
              windowWinth: 750,
              windowHeight: 1500,
              filletNodes: [],
              circleNodes: [],
              RectNodes: [],
              top: 0,
              left: 0
            }
          },
          methods: {
            selecterQueryInfo: function() {
              var t = this;
              e.createSelectorQuery().selectAll(".u-skeleton").boundingClientRect().exec((function(e) {
                t.windowHeight = e[0][0].height, t.windowWinth = e[0][0].width, t.top = e[0][0].bottom - e[0][0].height, t.left = e[0][0].left
              })), this.getRectEls(), this.getCircleEls(), this.getFilletEls()
            },
            getRectEls: function() {
              var t = this;
              e.createSelectorQuery().selectAll(".u-skeleton-rect").boundingClientRect().exec((function(e) {
                t.RectNodes = e[0]
              }))
            },
            getFilletEls: function() {
              var t = this;
              e.createSelectorQuery().selectAll(".u-skeleton-fillet").boundingClientRect().exec((function(e) {
                t.filletNodes = e[0]
              }))
            },
            getCircleEls: function() {
              var t = this;
              e.createSelectorQuery().selectAll(".u-skeleton-circle").boundingClientRect().exec((function(e) {
                t.circleNodes = e[0]
              }))
            }
          },
          mounted: function() {
            var t = e.getSystemInfoSync();
            this.windowHeight = t.windowHeight, this.windowWinth = t.windowWidth, this.selecterQueryInfo()
          }
        };
        t.default = n
      }).call(this, n("df3c").default)
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uview-ui/components/u-skeleton/u-skeleton-create-component", {
    "uview-ui/components/u-skeleton/u-skeleton-create-component": function(e, t, n) {
      n("df3c").createComponent(n("70d2"))
    }
  },
  [
    ["uview-ui/components/u-skeleton/u-skeleton-create-component"]
  ]
]);
