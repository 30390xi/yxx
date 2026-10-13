require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/aiTravel/cardPage"], {
    "20e0": function(n, e, a) {},
    "4c64": function(n, e, a) {
      (function(n, e) {
        var o = a("47a9");
        a("5366"), o(a("3240"));
        var t = o(a("6719"));
        n.__webpack_require_UNI_MP_PLUGIN__ = a, e(t.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    6719: function(n, e, a) {
      a.r(e);
      var o = a("eba5"),
        t = a("a0e4");
      for (var i in t)["default"].indexOf(i) < 0 && function(n) {
        a.d(e, n, (function() {
          return t[n]
        }))
      }(i);
      a("777a");
      var r = a("828b"),
        c = Object(r.a)(t.default, o.b, o.c, !1, null, "3e42ca8f", null, !1, o.a, void 0);
      e.default = c.exports
    },
    "6eea": function(n, e, a) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        name: "cardPage",
        components: {
          lineCard: function() {
            Promise.all([a.e("common/vendor"), a.e("union/pages/aiTravel/components/lineCard")]).then(function() {
              return resolve(a("8a1e"))
            }.bind(null, a)).catch(a.oe)
          }
        },
        data: function() {
          return {
            showImage: !0,
            sessionId: ""
          }
        },
        filters: {},
        watch: {},
        computed: {},
        onPageScroll: function(n) {},
        onLoad: function(n) {
          console.log("onLoad"), this.sessionId = n.sessionId
        },
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onShareAppMessage: function() {
          return {
            title: "".concat(this.$refs.lineCard.todayDate.aiPlanCardLink.city).concat(this.$refs.lineCard.todayDate.days, "日游"),
            imageUrl: "https://eshopfile.zhiyousx.com/175214881804186478.png",
            path: "/union/pages/aiTravel/historyList?sessionId=".concat(this.sessionId)
          }
        },
        methods: {}
      };
      e.default = o
    },
    "777a": function(n, e, a) {
      var o = a("20e0");
      a.n(o).a
    },
    a0e4: function(n, e, a) {
      a.r(e);
      var o = a("6eea"),
        t = a.n(o);
      for (var i in o)["default"].indexOf(i) < 0 && function(n) {
        a.d(e, n, (function() {
          return o[n]
        }))
      }(i);
      e.default = t.a
    },
    eba5: function(n, e, a) {
      a.d(e, "b", (function() {
        return t
      })), a.d(e, "c", (function() {
        return i
      })), a.d(e, "a", (function() {
        return o
      }));
      var o = {
          uniNavbar: function() {
            return a.e("components/uni-navbar/uni-navbar").then(a.bind(null, "101a"))
          }
        },
        t = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    }
  },
  [
    ["4c64", "common/runtime", "common/vendor"]
  ]
]);
