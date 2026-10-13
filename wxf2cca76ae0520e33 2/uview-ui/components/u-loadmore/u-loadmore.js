(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uview-ui/components/u-loadmore/u-loadmore"], {
    "257d": function(t, e, o) {
      o.r(e);
      var n = o("51f4"),
        a = o.n(n);
      for (var i in n)["default"].indexOf(i) < 0 && function(t) {
        o.d(e, t, (function() {
          return n[t]
        }))
      }(i);
      e.default = a.a
    },
    "2db1": function(t, e, o) {
      o.r(e);
      var n = o("d4ad"),
        a = o("257d");
      for (var i in a)["default"].indexOf(i) < 0 && function(t) {
        o.d(e, t, (function() {
          return a[t]
        }))
      }(i);
      o("3304");
      var r = o("828b"),
        u = Object(r.a)(a.default, n.b, n.c, !1, null, "29439676", null, !1, n.a, void 0);
      e.default = u.exports
    },
    3304: function(t, e, o) {
      var n = o("f7af");
      o.n(n).a
    },
    "51f4": function(t, e, o) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        name: "u-loadmore",
        props: {
          bgColor: {
            type: String,
            default: "#ffffff"
          },
          icon: {
            type: Boolean,
            default: !0
          },
          fontSize: {
            type: String,
            default: "28"
          },
          color: {
            type: String,
            default: "#606266"
          },
          status: {
            type: String,
            default: "loadmore"
          },
          iconType: {
            type: String,
            default: "circle"
          },
          loadText: {
            type: Object,
            default: function() {
              return {
                loadmore: "加载更多",
                loading: "正在加载...",
                nomore: "没有更多了"
              }
            }
          },
          isDot: {
            type: Boolean,
            default: !1
          },
          iconColor: {
            type: String,
            default: "#b7b7b7"
          },
          marginTop: {
            type: [String, Number],
            default: 0
          },
          marginBottom: {
            type: [String, Number],
            default: 0
          },
          height: {
            type: [String, Number],
            default: "auto"
          }
        },
        data: function() {
          return {
            dotText: "●"
          }
        },
        computed: {
          loadTextStyle: function() {
            return {
              color: this.color,
              fontSize: this.fontSize + "rpx",
              position: "relative",
              zIndex: 1,
              backgroundColor: this.bgColor,
              padding: "loading" == this.status ? "0 8px" : "0 12px"
            }
          },
          cricleStyle: function() {
            return {
              borderColor: "#e5e5e5 #e5e5e5 #e5e5e5 ".concat(this.circleColor)
            }
          },
          flowerStyle: function() {
            return {}
          },
          showText: function() {
            return "loadmore" == this.status ? this.loadText.loadmore : "loading" == this.status ? this.loadText.loading : "nomore" == this.status && this.isDot ? this.dotText : this.loadText.nomore
          }
        },
        methods: {
          loadMore: function() {
            "loadmore" == this.status && this.$emit("loadmore")
          }
        }
      };
      e.default = n
    },
    d4ad: function(t, e, o) {
      o.d(e, "b", (function() {
        return a
      })), o.d(e, "c", (function() {
        return i
      })), o.d(e, "a", (function() {
        return n
      }));
      var n = {
          uLoading: function() {
            return o.e("uview-ui/components/u-loading/u-loading").then(o.bind(null, "9264"))
          }
        },
        a = function() {
          this.$createElement;
          var t = (this._self._c, this.$u.addUnit(this.height)),
            e = this.__get_style([this.loadTextStyle]);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t,
              s0: e
            }
          })
        },
        i = []
    },
    f7af: function(t, e, o) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uview-ui/components/u-loadmore/u-loadmore-create-component", {
    "uview-ui/components/u-loadmore/u-loadmore-create-component": function(t, e, o) {
      o("df3c").createComponent(o("2db1"))
    }
  },
  [
    ["uview-ui/components/u-loadmore/u-loadmore-create-component"]
  ]
]);
