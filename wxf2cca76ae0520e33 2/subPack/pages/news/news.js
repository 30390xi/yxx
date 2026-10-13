require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPack/pages/news/news"], {
    "1a59": function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          data: function() {
            return {
              newsCount: "",
              num: 0,
              msgList: "",
              operateList: "",
              performanceList: ""
            }
          },
          onShow: function() {
            this.getCornermarker(), this.pageLoad()
          },
          computed: {
            userInfo: function() {
              return this.$store.getters.userInfor
            }
          },
          methods: {
            pageLoad: function() {
              var t = this;
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/msgManager/getMsgList", {
                current: 1
              }).then((function(n) {
                e.stopPullDownRefresh(), 1 === n.code && n.data.records.length > 0 && (t.msgList = n.data.records[0])
              })), this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/messageRecord", {
                current: 1,
                type: 1
              }).then((function(n) {
                e.stopPullDownRefresh(), 1 === n.code && n.data.records.length > 0 && (t.operateList = n.data.records[0])
              })), this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/messageRecord", {
                current: 1,
                type: 2
              }).then((function(n) {
                e.stopPullDownRefresh(), 1 === n.code && n.data.records.length > 0 && (t.performanceList = n.data.records[0])
              }))
            },
            tosystemnotice: function(e) {
              var t = this;
              0 === e ? this.$uniApi.getRequestNoLoading("PUT", "base/app/v1/msgManager/updateMsgBatch").then((function(n) {
                1 == n.code && t.$navigateTo({
                  url: "/pages/systemnotice/systemnotice?id=" + e
                })
              })) : this.$uniApi.dataRequestNoLoading("PUT", "base/app/v1/messageRecord/updateBatch", {
                type: e
              }).then((function(n) {
                1 == n.code && t.$navigateTo({
                  url: "/pages/systemnotice/systemnotice?id=" + e
                })
              }))
            },
            getCornermarker: function() {
              var t = this,
                n = {
                  memberId: this.userInfo.memberId
                };
              this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/messageRecord/getCount", n).then((function(n) {
                if (1 == n.code) {
                  t.newsCount = n.data;
                  var a = n.data.msgCount + n.data.operateCount + n.data.performanceCount;
                  e.setNavigationBarTitle({
                    title: "消息".concat(a > 0 ? "（" + a + "）" : "")
                  })
                }
              }))
            }
          }
        };
        t.default = n
      }).call(this, n("df3c").default)
    },
    4211: function(e, t, n) {
      n.d(t, "b", (function() {
        return o
      })), n.d(t, "c", (function() {
        return r
      })), n.d(t, "a", (function() {
        return a
      }));
      var a = {
          uBadge: function() {
            return n.e("uview-ui/components/u-badge/u-badge").then(n.bind(null, "fe46"))
          }
        },
        o = function() {
          this.$createElement;
          this._self._c
        },
        r = []
    },
    "9a09": function(e, t, n) {},
    "9eb1": function(e, t, n) {
      n.r(t);
      var a = n("1a59"),
        o = n.n(a);
      for (var r in a)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(r);
      t.default = o.a
    },
    a811: function(e, t, n) {
      var a = n("9a09");
      n.n(a).a
    },
    c108: function(e, t, n) {
      (function(e, t) {
        var a = n("47a9");
        n("5366"), a(n("3240"));
        var o = a(n("e056"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    e056: function(e, t, n) {
      n.r(t);
      var a = n("4211"),
        o = n("9eb1");
      for (var r in o)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(r);
      n("a811");
      var i = n("828b"),
        s = Object(i.a)(o.default, a.b, a.c, !1, null, "6dda32cd", null, !1, a.a, void 0);
      t.default = s.exports
    }
  },
  [
    ["c108", "common/runtime", "common/vendor"]
  ]
]);
