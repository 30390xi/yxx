require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["yearCard/components/customNav"], {
    "1c22": function(t, a, e) {},
    4105: function(t, a, e) {
      e.r(a);
      var n = e("98af"),
        o = e("586b");
      for (var c in o)["default"].indexOf(c) < 0 && function(t) {
        e.d(a, t, (function() {
          return o[t]
        }))
      }(c);
      e("c889");
      var r = e("828b"),
        u = Object(r.a)(o.default, n.b, n.c, !1, null, "330a7d9f", null, !1, n.a, void 0);
      a.default = u.exports
    },
    "586b": function(t, a, e) {
      e.r(a);
      var n = e("7d13"),
        o = e.n(n);
      for (var c in n)["default"].indexOf(c) < 0 && function(t) {
        e.d(a, t, (function() {
          return n[t]
        }))
      }(c);
      a.default = o.a
    },
    "7d13": function(t, a, e) {
      (function(t) {
        var n = e("47a9");
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0;
        var o = n(e("2b26")),
          c = {
            externalClasses: ["mu-class"],
            data: function() {
              return {
                StatusBar: getApp().globalData.StatusBar,
                CustomBar: getApp().globalData.CustomBar,
                firstPage: 1 === getCurrentPages().length
              }
            },
            name: "custom-nav",
            computed: {
              style: function() {
                var t = "height:".concat(this.CustomBar, "px;padding-top:").concat(this.StatusBar, "px;");
                return this.bgImage && ("".concat(t, "background-image:url(").concat(this.bgImage, ");"), (0, o.default)("style")), t
              },
              topOpacity: function() {
                return this.scrollTop / 100 > .9 ? 1 : this.scrollTop / 100
              },
              scrollTopShow: function() {
                return 0 === this.scrollTop
              }
            },
            props: {
              isBack: {
                type: [Boolean, String],
                default: !0
              },
              bgImage: {
                type: String,
                default: ""
              },
              scrollTop: {
                type: Number,
                default: 0
              },
              title: {
                type: String,
                default: ""
              },
              titleColor: {
                type: String,
                default: "#000000"
              },
              backFun: {
                type: Boolean,
                default: !1
              }
            },
            methods: {
              BackPage: function() {
                if (this.backFun) return this.$emit("back");
                this.firstPage ? t.switchTab({
                  url: "/pages/index/index"
                }) : t.navigateBack({
                  delta: 1
                })
              }
            }
          };
        a.default = c
      }).call(this, e("df3c").default)
    },
    "98af": function(t, a, e) {
      e.d(a, "b", (function() {
        return n
      })), e.d(a, "c", (function() {
        return o
      })), e.d(a, "a", (function() {}));
      var n = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    c889: function(t, a, e) {
      var n = e("1c22");
      e.n(n).a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["yearCard/components/customNav-create-component", {
    "yearCard/components/customNav-create-component": function(t, a, e) {
      e("df3c").createComponent(e("4105"))
    }
  },
  [
    ["yearCard/components/customNav-create-component"]
  ]
]);
