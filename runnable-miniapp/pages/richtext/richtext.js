(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/richtext/richtext"], {
    "16c8": function(t, e, a) {
      a.d(e, "b", (function() {
        return i
      })), a.d(e, "c", (function() {
        return r
      })), a.d(e, "a", (function() {
        return n
      }));
      var n = {
          uParse: function() {
            return Promise.all([a.e("common/vendor"), a.e("uview-ui/components/u-parse/u-parse")]).then(a.bind(null, "7217"))
          }
        },
        i = function() {
          this.$createElement;
          this._self._c
        },
        r = []
    },
    "4b5e": function(t, e, a) {
      (function(t, e) {
        var n = a("47a9");
        a("5366"), n(a("3240"));
        var i = n(a("9793"));
        t.__webpack_require_UNI_MP_PLUGIN__ = a, e(i.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    6729: function(t, e, a) {
      var n = a("cf06");
      a.n(n).a
    },
    9793: function(t, e, a) {
      a.r(e);
      var n = a("16c8"),
        i = a("c09a");
      for (var r in i)["default"].indexOf(r) < 0 && function(t) {
        a.d(e, t, (function() {
          return i[t]
        }))
      }(r);
      a("6729");
      var o = a("828b"),
        d = Object(o.a)(i.default, n.b, n.c, !1, null, "d96cfb52", null, !1, n.a, void 0);
      e.default = d.exports
    },
    c09a: function(t, e, a) {
      a.r(e);
      var n = a("ea27"),
        i = a.n(n);
      for (var r in n)["default"].indexOf(r) < 0 && function(t) {
        a.d(e, t, (function() {
          return n[t]
        }))
      }(r);
      e.default = i.a
    },
    cf06: function(t, e, a) {},
    ea27: function(t, e, a) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = {
          data: function() {
            return {
              advertId: "",
              linkUrl: "",
              parseStyle: {
                p: "word-break: break-all;"
              }
            }
          },
          onLoad: function(e) {
            var a = this;
            if (e.id && e.mapId) return this.id = e.id, this.mapId = e.mapId, void this.$uniApi.dataRequestNoLoading("get", "base/app/v1/travelMap/getPointsClassify", {
              mapId: this.mapId
            }).then((function(e) {
              if (1 == e.code) {
                a.recommends = e.data.recommend || [];
                var n = a.recommends.find((function(t) {
                  return t.id == a.id
                }));
                if (n) {
                  t.setNavigationBarTitle({
                    title: n.name
                  });
                  var i = JSON.parse(n.jumpParams);
                  a.linkUrl = i.linkUrl
                }
              } else a.$util.showToast(e.msg)
            }));
            e.advertId && (this.advertId = e.advertId), e.title ? t.setNavigationBarTitle({
              title: e.title
            }) : (e.type = "none") ? t.setNavigationBarTitle({
              title: ""
            }) : t.setNavigationBarTitle({
              title: "内容"
            }), this.pageLoad()
          },
          methods: {
            pageLoad: function() {
              var e = this;
              this.advertId ? this.$uniApi.dataRequestNoLoading("GET", "base/app/v1/advert/" + this.advertId).then((function(t) {
                1 === t.code && (e.linkUrl = t.data.linkUrl)
              })) : this.linkUrl = t.getStorageSync("richtext")
            }
          }
        };
        e.default = a
      }).call(this, a("df3c").default)
    }
  },
  [
    ["4b5e", "common/runtime", "common/vendor"]
  ]
]);
