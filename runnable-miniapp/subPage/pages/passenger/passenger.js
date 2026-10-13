require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/passenger/passenger"], {
    "0845a": function(n, e, t) {
      t.r(e);
      var o = t("b6e7"),
        a = t.n(o);
      for (var i in o)["default"].indexOf(i) < 0 && function(n) {
        t.d(e, n, (function() {
          return o[n]
        }))
      }(i);
      e.default = a.a
    },
    "5f16": function(n, e, t) {},
    a424: function(n, e, t) {
      var o = t("5f16");
      t.n(o).a
    },
    af4b: function(n, e, t) {
      (function(n, e) {
        var o = t("47a9");
        t("5366"), o(t("3240"));
        var a = o(t("cb77"));
        n.__webpack_require_UNI_MP_PLUGIN__ = t, e(a.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    b6e7: function(n, e, t) {
      (function(n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = {
          data: function() {
            return {
              commonUsedTouristList: []
            }
          },
          filters: {
            phoneFilter: function(n) {
              if (n) {
                var e = n.toString();
                return e.replace(e.substring(3, 7), "****")
              }
            },
            idCarNoFilter: function(n) {
              if (n) {
                var e = n.toString();
                return e.substring(0, 1) + "****************" + e.substring(e.length - 1, e.length)
              }
            }
          },
          onLoad: function(n) {},
          onShow: function() {
            this.getCommonUsedTouristList()
          },
          methods: {
            getCommonUsedTouristList: function() {
              var n = this;
              this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/queryCommonUsedTouristList").then((function(e) {
                1 === e.code ? n.commonUsedTouristList = e.data || [] : n.$util.showToast(e.msg)
              }))
            },
            editPassenger: function(n) {
              this.$navigateTo({
                url: "/subPage/pages/editPassenger/editPassenger?touristId=".concat(n)
              })
            },
            delPassenger: function(e) {
              var t = this,
                o = {
                  id: e
                };
              n.showModal({
                cancelText: "取消",
                confirmText: "确认",
                content: "是否删除该旅客?",
                success: function(n) {
                  n.confirm ? t.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/commonUsedTourist/deleteCommonUsedTourist", o).then((function(n) {
                    1 === n.code ? t.getCommonUsedTouristList() : t.$util.showToast(n.msg)
                  })) : n.cancel && console.log("cancel")
                }
              })
            },
            addPassenger: function() {
              this.$navigateTo({
                url: "/subPage/pages/addPassenger/addPassenger"
              })
            }
          }
        };
        e.default = t
      }).call(this, t("df3c").default)
    },
    cb77: function(n, e, t) {
      t.r(e);
      var o = t("f19f"),
        a = t("0845a");
      for (var i in a)["default"].indexOf(i) < 0 && function(n) {
        t.d(e, n, (function() {
          return a[n]
        }))
      }(i);
      t("a424");
      var r = t("828b"),
        s = Object(r.a)(a.default, o.b, o.c, !1, null, "f351e5d8", null, !1, o.a, void 0);
      e.default = s.exports
    },
    f19f: function(n, e, t) {
      t.d(e, "b", (function() {
        return o
      })), t.d(e, "c", (function() {
        return a
      })), t.d(e, "a", (function() {}));
      var o = function() {
          var n = this,
            e = (n.$createElement, n._self._c, n.__map(n.commonUsedTouristList, (function(e, t) {
              return {
                $orig: n.__get_orig(e),
                f0: e.phone ? n._f("phoneFilter")(e.phone) : null,
                f1: e.idCarNo ? n._f("cardNameFilter")(e.cardType) : null,
                f2: e.idCarNo ? n._f("idCarNoFilter")(e.idCarNo) : null
              }
            })));
          n.$mp.data = Object.assign({}, {
            $root: {
              l0: e
            }
          })
        },
        a = []
    }
  },
  [
    ["af4b", "common/runtime", "common/vendor"]
  ]
]);
