require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/components/card-pop/candType"], {
    "0915": function(e, n, t) {},
    "27fa": function(e, n, t) {
      var o = t("0915");
      t.n(o).a
    },
    "9a07": function(e, n, t) {
      t.r(n);
      var o = t("f9b0"),
        a = t.n(o);
      for (var r in o)["default"].indexOf(r) < 0 && function(e) {
        t.d(n, e, (function() {
          return o[e]
        }))
      }(r);
      n.default = a.a
    },
    b0c5: function(e, n, t) {
      t.r(n);
      var o = t("d98d"),
        a = t("9a07");
      for (var r in a)["default"].indexOf(r) < 0 && function(e) {
        t.d(n, e, (function() {
          return a[e]
        }))
      }(r);
      t("27fa");
      var c = t("828b"),
        u = Object(c.a)(a.default, o.b, o.c, !1, null, "2a2d465a", null, !1, o.a, void 0);
      n.default = u.exports
    },
    d98d: function(e, n, t) {
      t.d(n, "b", (function() {
        return a
      })), t.d(n, "c", (function() {
        return r
      })), t.d(n, "a", (function() {
        return o
      }));
      var o = {
          uPopup: function() {
            return t.e("uview-ui/components/u-popup/u-popup").then(t.bind(null, "39fb"))
          }
        },
        a = function() {
          var e = this,
            n = (e.$createElement, e._self._c, e.__map(e.realCardTypeList, (function(n, t) {
              return {
                $orig: e.__get_orig(n),
                g0: e.codes.includes(n),
                f0: e._f("cardNameFilter")(n)
              }
            })));
          e.$mp.data = Object.assign({}, {
            $root: {
              l0: n
            }
          })
        },
        r = []
    },
    f9b0: function(e, n, t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var o = {
        props: {
          showCardPop: {
            type: Boolean,
            default: function() {
              return !1
            }
          },
          realCardType: {
            type: Number,
            default: function() {
              return 0
            }
          },
          realCardTypeCodes: {
            type: Array,
            default: function() {
              return [0, 1, 2, 3, 4, 5, 6, 7, 8]
            }
          }
        },
        watch: {
          showCardPop: function(e) {
            this.showCertificate = e
          },
          showCertificate: function(e) {
            e || this.$emit("closePop")
          },
          realCardTypeCodes: function(e) {
            e && (this.codes = e.map((function(e) {
              return Number(e)
            })))
          }
        },
        data: function() {
          return {
            showCertificate: !1,
            realCardTypeList: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            codes: [0, 1, 2, 3, 4, 5, 6, 7, 8]
          }
        },
        methods: {
          chooseCardType: function(e) {
            this.codes.includes(e) ? this.$emit("chooseCardType", e) : this.$util.showToast("产品暂不支持此证件类型")
          }
        }
      };
      n.default = o
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/card-pop/candType-create-component", {
    "subPage/components/card-pop/candType-create-component": function(e, n, t) {
      t("df3c").createComponent(t("b0c5"))
    }
  },
  [
    ["subPage/components/card-pop/candType-create-component"]
  ]
]);
