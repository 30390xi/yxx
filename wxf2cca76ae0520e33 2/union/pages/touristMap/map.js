require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/pages/touristMap/map"], {
    "0daa": function(t, a, n) {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.default = void 0, a.default = {
        data: function() {
          return {
            urlSrc: "",
            webviewStyles: {
              progress: {
                color: "#ff4643"
              }
            },
            shareConfigNot: [],
            mapDetail: {},
            mapId: ""
          }
        },
        onLoad: function(t) {
          if (t.id) {
            this.mapId = t.id, this.getPointsClassify();
            var a = "https://eshop.zhiyousx.com/emap/?id=".concat(t.id, "&formType=").concat(t.formType);
            this.urlSrc = a
          }
        },
        onShareAppMessage: function(t) {
          return {
            title: this.mapDetail.shareText || this.mapDetail.name,
            imageUrl: this.mapDetail.shareImg || "",
            path: this.$util.setShareUrl("/union/pages/touristMap/map?id=".concat(this.mapId))
          }
        },
        methods: {
          getPointsClassify: function() {
            var t = this;
            this.$uniApi.dataRequestNoLoading("get", "base/app/v1/travelMap/getPointsClassify", {
              mapId: this.mapId
            }).then((function(a) {
              1 == a.code && (t.mapDetail = a.data.map)
            }))
          }
        }
      }
    },
    "47c0": function(t, a, n) {
      n.r(a);
      var e = n("0daa"),
        i = n.n(e);
      for (var o in e)["default"].indexOf(o) < 0 && function(t) {
        n.d(a, t, (function() {
          return e[t]
        }))
      }(o);
      a.default = i.a
    },
    6316: function(t, a, n) {
      n.r(a);
      var e = n("9002"),
        i = n("47c0");
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        n.d(a, t, (function() {
          return i[t]
        }))
      }(o);
      var r = n("828b"),
        u = Object(r.a)(i.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
      a.default = u.exports
    },
    9002: function(t, a, n) {
      n.d(a, "b", (function() {
        return i
      })), n.d(a, "c", (function() {
        return o
      })), n.d(a, "a", (function() {
        return e
      }));
      var e = {
          uniNavbar: function() {
            return n.e("components/uni-navbar/uni-navbar").then(n.bind(null, "101a"))
          }
        },
        i = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    9965: function(t, a, n) {
      (function(t, a) {
        var e = n("47a9");
        n("5366"), e(n("3240"));
        var i = e(n("6316"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, a(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    }
  },
  [
    ["9965", "common/runtime", "common/vendor"]
  ]
]);
