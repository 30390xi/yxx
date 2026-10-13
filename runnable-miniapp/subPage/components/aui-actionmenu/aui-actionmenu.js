require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/components/aui-actionmenu/aui-actionmenu"], {
    "0781": function(n, e, t) {
      t.r(e);
      var o = t("fc56"),
        a = t.n(o);
      for (var u in o)["default"].indexOf(u) < 0 && function(n) {
        t.d(e, n, (function() {
          return o[n]
        }))
      }(u);
      e.default = a.a
    },
    "3c78": function(n, e, t) {},
    "470b": function(n, e, t) {
      t.r(e);
      var o = t("923f"),
        a = t("0781");
      for (var u in a)["default"].indexOf(u) < 0 && function(n) {
        t.d(e, n, (function() {
          return a[n]
        }))
      }(u);
      t("be5dc");
      var c = t("828b"),
        i = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      e.default = i.exports
    },
    "923f": function(n, e, t) {
      t.d(e, "b", (function() {
        return o
      })), t.d(e, "c", (function() {
        return a
      })), t.d(e, "a", (function() {}));
      var o = function() {
          var n = this,
            e = (n.$createElement, n._self._c, n.SHOW ? Number(n.theme) : null),
            t = n.SHOW ? Number(n.theme) : null;
          n._isMounted || (n.e0 = function(e) {
            e.stopPropagation(), n.maskTapClose && n.hide()
          }), n.$mp.data = Object.assign({}, {
            $root: {
              m0: e,
              m1: t
            }
          })
        },
        a = []
    },
    be5dc: function(n, e, t) {
      var o = t("3c78");
      t.n(o).a
    },
    fc56: function(n, e, t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        name: "aui-actionmenu",
        props: {
          title: {
            type: String,
            default: "分享"
          },
          mask: {
            type: Boolean,
            default: !0
          },
          maskTapClose: {
            type: Boolean,
            default: !0
          },
          items: {
            type: Array,
            default: function() {
              return [{
                name: "",
                icon: "",
                iconColor: "",
                img: ""
              }]
            }
          },
          cancel: {
            type: String,
            default: ""
          },
          location: {
            type: String,
            default: "bottom"
          },
          theme: {
            type: Number,
            default: 1
          }
        },
        data: function() {
          return {
            SHOW: !1,
            FADE: -1,
            touchIndex: -1,
            touchStyle: {
              color: "",
              background: "#EFEFEF"
            }
          }
        },
        created: function() {},
        onLoad: function() {},
        methods: {
          show: function() {
            var n = this;
            return new Promise((function(e, t) {
              n.SHOW = !0, n.FADE = 1, e()
            }))
          },
          hide: function() {
            var n = this;
            return new Promise((function(e, t) {
              n.FADE = 0;
              var o = setTimeout((function() {
                n.SHOW = !1, n.FADE = -1, clearTimeout(o)
              }), 100);
              n.$emit("hide"), e()
            }))
          },
          _btnTab: function(n) {
            var e = this,
              t = Number(n.currentTarget.dataset.index);
            e.hide();
            var o = setTimeout((function() {
              var n = {
                status: 0,
                msg: 0 != t ? e.items[t - 1].name : e.cancel,
                index: t
              };
              e.$emit("callback", n), clearTimeout(o)
            }), 100)
          },
          _btnTouchStart: function(n) {
            var e = Number(n.currentTarget.dataset.index);
            this.touchIndex = e
          },
          _btnTouchEnd: function(n) {
            Number(n.currentTarget.dataset.index), this.touchIndex = -1
          }
        }
      };
      e.default = o
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["subPage/components/aui-actionmenu/aui-actionmenu-create-component", {
    "subPage/components/aui-actionmenu/aui-actionmenu-create-component": function(n, e, t) {
      t("df3c").createComponent(t("470b"))
    }
  },
  [
    ["subPage/components/aui-actionmenu/aui-actionmenu-create-component"]
  ]
]);
