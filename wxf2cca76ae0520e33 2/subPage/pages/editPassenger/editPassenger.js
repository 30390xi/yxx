require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/editPassenger/editPassenger"], {
    1451: function(e, t, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = {
        components: {
          ocrIndex: function() {
            n.e("components/ocr/ocrIndex").then(function() {
              return resolve(n("7882"))
            }.bind(null, n)).catch(n.oe)
          },
          cardType: function() {
            n.e("subPage/components/card-pop/candType").then(function() {
              return resolve(n("b0c5"))
            }.bind(null, n)).catch(n.oe)
          }
        },
        data: function() {
          return {
            name: "",
            phone: "",
            idCarNo: "",
            id: "",
            submitState: !1,
            showCertificate: !1,
            realCardType: 0,
            realCardTypeList: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            realCardTypeCodes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            showCardPop: !1,
            checked: !1
          }
        },
        filters: {
          validityTimeFilter: function(e) {
            if (e) return e.slice(0, 10) + "到期"
          }
        },
        onLoad: function(e) {
          this.id = e.touristId, this.getCommonUsedTouristList(), e.codes && (this.realCardTypeCodes = e.codes.split(",")), console.log(this.realCardTypeCodes)
        },
        onShow: function() {},
        methods: {
          setCheck: function() {
            this.checked = !this.checked
          },
          setDataInfos: function(e) {
            var t = this;
            console.log(e, "参数--------"), e ? (this.name = e.name, this.idCarNo = e.idCarNo) : setTimeout((function() {
              t.$util.showToast("识别失败，请重新识别或手动填写")
            }), 500)
          },
          getCommonUsedTouristList: function() {
            var e = this,
              t = this;
            this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/queryCommonUsedTouristList").then((function(n) {
              1 === n.code ? n.data.forEach((function(e) {
                t.id == e.id && (t.name = e.name, t.phone = e.phone || "", t.idCarNo = e.idCarNo || "", t.realCardType = e.cardType || "")
              })) : e.$util.showToast(n.msg)
            }))
          },
          verify: function() {
            return this.$util.checkName(this.name).code && this.$util.checkPhone(this.phone).code && this.$util.checkId(this.idCarNo, this.realCardType).code
          },
          editPassenger: function() {
            var e = this;
            if (this.checked) {
              if (!this.submitState)
                if (this.verify()) {
                  var t = {
                    id: this.id,
                    name: this.name,
                    phone: this.phone,
                    idCarNo: this.idCarNo,
                    cardType: this.realCardType
                  };
                  this.submitState = !0, this.$uniApi.dataRequestYesLoading("POST", "manager/app/v1/commonUsedTourist/updateCommonUsedTourist", t, "保存中").then((function(t) {
                    1 === t.code ? e.$util.prevPage() : (e.$util.showToast(t.msg), e.submitState = !1)
                  }))
                } else this.$util.showToast(this.$util.checkName(this.name).msg || this.$util.checkPhone(this.phone).msg || this.$util.checkId(this.idCarNo, this.realCardType).msg)
            } else this.$util.showToast("请先阅读并同意授权")
          },
          chooseCardType: function(e) {
            e != this.realCardType && (this.idCarNo = ""), this.realCardType = e, this.showCardPop = !1
          }
        }
      };
      t.default = i
    },
    "32d5": function(e, t, n) {
      n.r(t);
      var i = n("1451"),
        o = n.n(i);
      for (var a in i)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(a);
      t.default = o.a
    },
    "3bac": function(e, t, n) {
      var i = n("82f3");
      n.n(i).a
    },
    "7fa6": function(e, t, n) {
      (function(e, t) {
        var i = n("47a9");
        n("5366"), i(n("3240"));
        var o = i(n("c25a"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "82f3": function(e, t, n) {},
    c25a: function(e, t, n) {
      n.r(t);
      var i = n("f635"),
        o = n("32d5");
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      n("3bac");
      var s = n("828b"),
        r = Object(s.a)(o.default, i.b, i.c, !1, null, "38225f58", null, !1, i.a, void 0);
      t.default = r.exports
    },
    f635: function(e, t, n) {
      n.d(t, "b", (function() {
        return o
      })), n.d(t, "c", (function() {
        return a
      })), n.d(t, "a", (function() {
        return i
      }));
      var i = {
          uIcon: function() {
            return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "61be"))
          },
          uInput: function() {
            return Promise.all([n.e("common/vendor"), n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null, "5cbc"))
          }
        },
        o = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e._f("cardNameFilter")(e.realCardType));
          e._isMounted || (e.e0 = function(t) {
            e.showCardPop = !0
          }, e.e1 = function(t) {
            e.showCardPop = !1
          }), e.$mp.data = Object.assign({}, {
            $root: {
              f0: t
            }
          })
        },
        a = []
    }
  },
  [
    ["7fa6", "common/runtime", "common/vendor"]
  ]
]);
