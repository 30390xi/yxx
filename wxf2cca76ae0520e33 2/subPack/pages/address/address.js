require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/address/address"], {
    "3b58": function(e, t, a) {
      a.r(t);
      var n = a("e59d"),
        d = a.n(n);
      for (var r in n)["default"].indexOf(r) < 0 && function(e) {
        a.d(t, e, (function() {
          return n[e]
        }))
      }(r);
      t.default = d.a
    },
    6925: function(e, t, a) {
      (function(e, t) {
        var n = a("47a9");
        a("5366"), n(a("3240"));
        var d = n(a("b88d"));
        e.__webpack_require_UNI_MP_PLUGIN__ = a, t(d.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    "8b9e": function(e, t, a) {},
    b88d: function(e, t, a) {
      a.r(t);
      var n = a("bbbc"),
        d = a("3b58");
      for (var r in d)["default"].indexOf(r) < 0 && function(e) {
        a.d(t, e, (function() {
          return d[e]
        }))
      }(r);
      a("f108");
      var o = a("828b"),
        s = Object(o.a)(d.default, n.b, n.c, !1, null, "d560dd86", null, !1, n.a, void 0);
      t.default = s.exports
    },
    bbbc: function(e, t, a) {
      a.d(t, "b", (function() {
        return d
      })), a.d(t, "c", (function() {
        return r
      })), a.d(t, "a", (function() {
        return n
      }));
      var n = {
          uniIcons: function() {
            return Promise.all([a.e("common/vendor"), a.e("components/uni-icons/uni-icons")]).then(a.bind(null, "365b"))
          }
        },
        d = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.addressList.length),
            a = t > 0 ? e.__map(e.addressList, (function(t, a) {
              return {
                $orig: e.__get_orig(t),
                f0: e._f("mobileSubstr")(t.contactMobile)
              }
            })) : null;
          e.$mp.data = Object.assign({}, {
            $root: {
              g0: t,
              l0: a
            }
          })
        },
        r = []
    },
    e59d: function(e, t, a) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          components: {
            EmptyState: function() {
              a.e("components/empty/empty").then(function() {
                return resolve(a("a427"))
              }.bind(null, a)).catch(a.oe)
            }
          },
          data: function() {
            return {
              addrId: "",
              page: 1,
              hasMoreData: !0,
              addressList: []
            }
          },
          onLoad: function(e) {
            e.addrId && (this.addrId = e.addrId), this.pageLoad()
          },
          onPullDownRefresh: function() {
            this.page = 1, this.pageLoad()
          },
          onReachBottom: function() {
            this.hasMoreData && this.pageLoad()
          },
          filters: {
            mobileSubstr: function(e) {
              return e ? e.substr(0, 3) + "****" + e.substr(7) : "-"
            }
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              var t = this,
                a = {
                  current: this.page,
                  memberId: this.userInfo.memberId
                };
              this.$uniApi.dataRequestNoLoading("GET", "manager/app/v1/memberDeliveryAddress", a).then((function(a) {
                if (e.stopPullDownRefresh(), 1 === a.code) {
                  var n = a.data.records,
                    d = t.addressList;
                  a.data.total > 0 ? (1 === a.data.current ? t.addressList = n : t.addressList = d.concat(n), a.data.current < a.data.pages ? (t.page = t.page + 1, t.hasMoreData = !0) : t.hasMoreData = !1) : (t.addressList = [], t.hasMoreData = !1)
                }
              })).catch((function(t) {
                e.stopPullDownRefresh()
              }))
            },
            goAddress: function(e, t) {
              var a = this;
              "add" === e ? this.$navigateTo({
                url: "/subPack/pages/addaddress/addaddress"
              }) : "edit" === e && (this.addrId ? this.$uniApi.dataRequestNoLoading("POST", "manager/app/v1/memberDeliveryAddress/updateFlag", {
                addrId: t,
                memberId: this.userInfo.memberId
              }).then((function(e) {
                1 === e.code && a.$util.prevPage()
              })) : this.$navigateTo({
                url: "/subPack/pages/addaddress/addaddress?addrId=".concat(t)
              }))
            }
          }
        };
        t.default = n
      }).call(this, a("df3c").default)
    },
    f108: function(e, t, a) {
      var n = a("8b9e");
      a.n(n).a
    }
  },
  [
    ["6925", "common/runtime", "common/vendor"]
  ]
]);
