(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/uni-goods-nav/uni-goods-nav"], {
    "2a50": function(n, o, t) {
      t.d(o, "b", (function() {
        return e
      })), t.d(o, "c", (function() {
        return c
      })), t.d(o, "a", (function() {}));
      var e = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    },
    8638: function(n, o, t) {
      t.r(o);
      var e = t("d0aa"),
        c = t.n(e);
      for (var a in e)["default"].indexOf(a) < 0 && function(n) {
        t.d(o, n, (function() {
          return e[n]
        }))
      }(a);
      o.default = c.a
    },
    c98b: function(n, o, t) {
      var e = t("e237");
      t.n(e).a
    },
    ce12: function(n, o, t) {
      t.r(o);
      var e = t("2a50"),
        c = t("8638");
      for (var a in c)["default"].indexOf(a) < 0 && function(n) {
        t.d(o, n, (function() {
          return c[n]
        }))
      }(a);
      t("c98b");
      var u = t("828b"),
        i = Object(u.a)(c.default, e.b, e.c, !1, null, "13639b7e", null, !1, e.a, void 0);
      o.default = i.exports
    },
    d0aa: function(n, o, t) {
      (function(n) {
        Object.defineProperty(o, "__esModule", {
          value: !0
        }), o.default = void 0;
        var e = {
          name: "UniGoodsNav",
          components: {
            uniIcons: function() {
              Promise.all([t.e("common/vendor"), t.e("components/uni-icons/uni-icons")]).then(function() {
                return resolve(t("365b"))
              }.bind(null, t)).catch(t.oe)
            }
          },
          props: {
            options: {
              type: Array,
              default: function() {
                return [{
                  icon: "shop",
                  text: "店铺"
                }, {
                  icon: "cart",
                  text: "购物车"
                }]
              }
            },
            buttonGroup: {
              type: Array,
              default: function() {
                return [{
                  text: "加入购物车",
                  backgroundColor: "#ffa200",
                  backgroundImage: "",
                  color: "#fff"
                }, {
                  text: "立即购买",
                  backgroundColor: "#ff0000",
                  backgroundImage: "",
                  color: "#fff"
                }]
              }
            },
            fill: {
              type: Boolean,
              default: !1
            }
          },
          methods: {
            onClick: function(n, o) {
              this.$emit("click", {
                index: n,
                content: o
              })
            },
            buttonClick: function(o, t) {
              n.report && n.report(t.text, t.text), this.$emit("buttonClick", {
                index: o,
                content: t
              })
            }
          }
        };
        o.default = e
      }).call(this, t("df3c").default)
    },
    e237: function(n, o, t) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/uni-goods-nav/uni-goods-nav-create-component", {
    "components/uni-goods-nav/uni-goods-nav-create-component": function(n, o, t) {
      t("df3c").createComponent(t("ce12"))
    }
  },
  [
    ["components/uni-goods-nav/uni-goods-nav-create-component"]
  ]
]);
