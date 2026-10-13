require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["union/components1/chat-item/chat-item-couplet"], {
    "4d84": function(e, n, t) {},
    "7c5d": function(e, n, t) {
      var o = t("4d84");
      t.n(o).a
    },
    ba84: function(e, n, t) {
      (function(e) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var o = {
          name: "chat-item",
          components: {
            zeroMarkdownView: function() {
              t.e("union/components1/components/zero-markdown-view/zero-markdown-view").then(function() {
                return resolve(t("dd9a"))
              }.bind(null, t)).catch(t.oe)
            }
          },
          props: {
            item: {
              type: Object,
              default: function() {
                return {
                  time: "",
                  icon: "",
                  name: "",
                  content: "",
                  isMe: !1
                }
              }
            },
            pushingProgress: {
              type: Boolean,
              default: function() {
                return !1
              }
            }
          },
          data: function() {
            return {
              loaded: !1,
              imgStarted: !1,
              imgCompleted: !1,
              imgContent: "",
              imgArray: [],
              countInfos: "",
              index: 0,
              timer: null,
              itemContentCopy: "",
              itemContentIndex: 0,
              displayText: "",
              showMore: !1
            }
          },
          mounted: function() {
            this.displayText = "", this.index = 0
          },
          methods: {
            scenicDetails: function(e) {
              this.$navigateTo({
                url: "/pages/spotDetailNew/spotDetailNew?spotId=" + e.id
              })
            },
            askAgain: function(e) {
              this.pushingProgress ? this.$emit("askAgain", e) : this.$util.showToast("请稍候")
            },
            goLineView: function() {
              e.navigateTo({
                url: "/union/pages/ai/strategyGuide?lineId=1734121312503611394"
              })
            },
            getTagData: function(e) {
              return e ? e.split(",") : []
            },
            showPic: function(n) {
              var t = [n];
              e.previewImage({
                urls: t
              })
            },
            downloadFile: function(e) {},
            imgLoad: function(e) {
              this.loaded = !0
            }
          }
        };
        n.default = o
      }).call(this, t("df3c").default)
    },
    c6c3: function(e, n, t) {
      t.d(n, "b", (function() {
        return o
      })), t.d(n, "c", (function() {
        return i
      })), t.d(n, "a", (function() {}));
      var o = function() {
          var e = this,
            n = (e.$createElement, e._self._c, e.item.divergenceProblem && e.item.divergenceProblem.length),
            t = n ? e.item.divergenceProblem && e.item.divergenceProblem.length > 0 : null,
            o = n && t ? e.__map(e.item.divergenceProblem, (function(n, t) {
              return {
                $orig: e.__get_orig(n),
                g2: e.item.divergenceProblem.length
              }
            })) : null;
          e.$mp.data = Object.assign({}, {
            $root: {
              g0: n,
              g1: t,
              l0: o
            }
          })
        },
        i = []
    },
    cc23: function(e, n, t) {
      t.r(n);
      var o = t("c6c3"),
        i = t("d160");
      for (var c in i)["default"].indexOf(c) < 0 && function(e) {
        t.d(n, e, (function() {
          return i[e]
        }))
      }(c);
      t("7c5d");
      var a = t("828b"),
        r = Object(a.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      n.default = r.exports
    },
    d160: function(e, n, t) {
      t.r(n);
      var o = t("ba84"),
        i = t.n(o);
      for (var c in o)["default"].indexOf(c) < 0 && function(e) {
        t.d(n, e, (function() {
          return o[e]
        }))
      }(c);
      n.default = i.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["union/components1/chat-item/chat-item-couplet-create-component", {
    "union/components1/chat-item/chat-item-couplet-create-component": function(e, n, t) {
      t("df3c").createComponent(t("cc23"))
    }
  },
  [
    ["union/components1/chat-item/chat-item-couplet-create-component"]
  ]
]);
