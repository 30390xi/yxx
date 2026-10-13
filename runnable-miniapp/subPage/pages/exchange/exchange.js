require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/exchange/exchange"], {
    1384: function(e, t, n) {
      n.r(t);
      var s = n("b382"),
        o = n("c51c");
      for (var i in o)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(i);
      n("b901");
      var u = n("828b"),
        a = Object(u.a)(o.default, s.b, s.c, !1, null, "c6f4471e", null, !1, s.a, void 0);
      t.default = a.exports
    },
    "9d79": function(e, t, n) {
      (function(e, t) {
        var s = n("47a9");
        n("5366"), s(n("3240"));
        var o = s(n("1384"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    b382: function(e, t, n) {
      n.d(t, "b", (function() {
        return o
      })), n.d(t, "c", (function() {
        return i
      })), n.d(t, "a", (function() {
        return s
      }));
      var s = {
          uPopup: function() {
            return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null, "39fb"))
          }
        },
        o = function() {
          var e = this;
          e.$createElement;
          e._self._c, e._isMounted || (e.e0 = function(t) {
            e.changePop = !1
          }, e.e1 = function(t) {
            e.tipsPop = !1
          })
        },
        i = []
    },
    b901: function(e, t, n) {
      var s = n("e80f");
      n.n(s).a
    },
    c51c: function(e, t, n) {
      n.r(t);
      var s = n("d787"),
        o = n.n(s);
      for (var i in s)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return s[e]
        }))
      }(i);
      t.default = o.a
    },
    d787: function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var s = {
          components: {
            ocrIndex: function() {
              n.e("components/ocr/ocrIndex").then(function() {
                return resolve(n("7882"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              password: "",
              cardInfo: "",
              error: !1,
              changePop: !1,
              userPop: !1,
              tipsPop: !1,
              tips: "",
              useIdCard: "",
              useName: "",
              usePhone: ""
            }
          },
          filters: {},
          onLoad: function() {},
          methods: {
            setDataInfos: function(e) {
              var t = this;
              console.log(e, "参数--------"), e ? (this.useName = e.name, this.useIdCard = e.idCarNo) : setTimeout((function() {
                t.$util.showToast("识别失败，请重新识别或手动填写")
              }), 500)
            },
            getCardInfo: function() {
              var e = this;
              this.password ? this.verify() ? this.$uniApi.dataRequestNoLoading("post", "product/app/equityCard/getEquityCardByPassword", {
                password: this.password
              }).then((function(t) {
                1 === t.code ? (e.tipsPop = !1, e.cardInfo = t.data, e.changePop = !0) : (e.tips = t.msg, e.tipsPop = !0)
              })) : this.$util.showToast(this.$util.checkName(this.useName).msg || this.$util.checkPhone(this.usePhone).msg || this.$util.checkId(this.useIdCard).msg) : this.$util.showToast("请输入兑换码")
            },
            exchangeCard: function() {
              var t = this,
                n = {
                  useIdCard: this.useIdCard,
                  useName: this.useName,
                  usePhone: this.usePhone,
                  password: this.password
                };
              this.$uniApi.dataRequestNoLoading("post", "product/app/equityCard/exchange", n).then((function(n) {
                1 === n.code ? (t.changePop = !1, t.tipsPop = !1, t.$util.showToast("兑换成功"), n.data.userEquityCardId && e.redirectTo({
                  url: "/subPage/pages/myeqcard/detail?id=" + n.data.userEquityCardId
                })) : t.$util.showToast(n.msg)
              }))
            },
            verify: function() {
              return this.$util.checkName(this.useName).code && this.$util.checkPhone(this.usePhone).code && this.$util.checkId(this.useIdCard).code
            },
            bindUser: function() {
              this.verify() ? (this.userPop = !1, this.changePop = !0) : this.$util.showToast(this.$util.checkName(this.useName).msg || this.$util.checkPhone(this.usePhone).msg || this.$util.checkId(this.useIdCard).msg)
            }
          }
        };
        t.default = s
      }).call(this, n("df3c").default)
    },
    e80f: function(e, t, n) {}
  },
  [
    ["9d79", "common/runtime", "common/vendor"]
  ]
]);
