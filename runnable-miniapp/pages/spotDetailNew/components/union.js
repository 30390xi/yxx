(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/spotDetailNew/components/union"], {
    "110e": function(n, e, t) {
      t.d(e, "b", (function() {
        return o
      })), t.d(e, "c", (function() {
        return u
      })), t.d(e, "a", (function() {
        return i
      }));
      var i = {
          uParse: function() {
            return Promise.all([t.e("common/vendor"), t.e("uview-ui/components/u-parse/u-parse")]).then(t.bind(null, "7217"))
          }
        },
        o = function() {
          var n = this,
            e = (n.$createElement, n._self._c, n.unionEquityCard.useDesc ? n.unionEquityCard && n.unionEquityCard.phoneList && n.unionEquityCard.phoneList.length > 0 : null),
            t = n.unionEquityCard && n.unionEquityCard.useRecordList && n.unionEquityCard.useRecordList.length > 0,
            i = t ? n.unionEquityCard.useRecordList && n.unionEquityCard.useRecordList.length > 3 : null;
          n.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              g1: t,
              g2: i
            }
          })
        },
        u = []
    },
    "1bbe": function(n, e, t) {},
    "2bae": function(n, e, t) {
      (function(n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = {
          props: {
            scrollFixH: {
              type: [String, Number],
              default: 0
            },
            unionEquityCard: {
              type: Object,
              default: ""
            },
            disScroll: {
              type: Boolean,
              default: !0
            },
            isUnionMember: {
              type: [String, Number],
              default: 0
            },
            unionExpired: {
              type: Boolean,
              default: !1
            }
          },
          data: function() {
            return {
              parseStyle1: {
                p: "word-break: break-all;line-height:48rpx;"
              },
              unionLevel: 3,
              defNum: 3
            }
          },
          filters: {
            levelFilter: function(n) {
              return {
                1: "青年联盟",
                2: "普通会员",
                3: "联合会员",
                4: "参议会员"
              } [n]
            }
          },
          created: function() {},
          methods: {
            getUnionUserInfo: function() {
              var e = this;
              this.$uniApi.dataRequestYesLoading("GET", "manager/app/v1/unionMember/detail").then((function(t) {
                if (1 === t.code) {
                  var i = t.data,
                    o = moment(),
                    u = moment(i.effectiveEndTime, "YYYY-MM-DD hh:mm:ss");
                  e.unionExpired = o.isAfter(u), i.unionExpired = e.unionExpired, n.setStorageSync("unionUserInfo", i), e.isUnionMember = 1
                } else n.setStorageSync("unionUserInfo", "")
              }))
            },
            toUserCard: function() {
              this.isUnionMember && !this.unionExpired ? n.navigateTo({
                url: "/union/pages/card/cardDetail?userUnionEquityCardId"
              }) : this.jumpToUnion()
            },
            showPhone: function() {
              this.$emit("showUnionPhone", !0)
            },
            phone: function() {
              n.makePhoneCall({
                phoneNumber: "114"
              })
            },
            jumpToUnion: function() {
              n.navigateToMiniProgram({
                appId: "wx58d0304b914fcfae",
                url: "pages/main/page/interest/index"
              })
            },
            shwoMore: function() {
              this.defNum = 3 == this.defNum ? this.unionEquityCard.useRecordList.length : 3
            },
            getFirstUnion: function() {
              var e = this;
              return new Promise((function(t) {
                e.$nextTick((function() {
                  var i = n.createSelectorQuery().in(e);
                  i.select("#firstUnion").boundingClientRect(), i.selectViewport().scrollOffset(), i.exec((function(n) {
                    t(n)
                  }))
                }))
              }))
            }
          }
        };
        e.default = t
      }).call(this, t("df3c").default)
    },
    6570: function(n, e, t) {
      t.r(e);
      var i = t("110e"),
        o = t("6d08");
      for (var u in o)["default"].indexOf(u) < 0 && function(n) {
        t.d(e, n, (function() {
          return o[n]
        }))
      }(u);
      t("6824");
      var r = t("828b"),
        a = Object(r.a)(o.default, i.b, i.c, !1, null, "6bf58366", null, !1, i.a, void 0);
      e.default = a.exports
    },
    6824: function(n, e, t) {
      var i = t("1bbe");
      t.n(i).a
    },
    "6d08": function(n, e, t) {
      t.r(e);
      var i = t("2bae"),
        o = t.n(i);
      for (var u in i)["default"].indexOf(u) < 0 && function(n) {
        t.d(e, n, (function() {
          return i[n]
        }))
      }(u);
      e.default = o.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["pages/spotDetailNew/components/union-create-component", {
    "pages/spotDetailNew/components/union-create-component": function(n, e, t) {
      t("df3c").createComponent(t("6570"))
    }
  },
  [
    ["pages/spotDetailNew/components/union-create-component"]
  ]
]);
