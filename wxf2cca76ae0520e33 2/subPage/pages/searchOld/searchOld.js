require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
  ["subPage/pages/searchOld/searchOld"], {
    "0e2c": function(t, e, o) {},
    "158a": function(t, e, o) {
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = {
          data: function() {
            return {
              sellerId: "",
              keyword: "",
              oldKeywordList: [],
              focusStatus: !0,
              couponId: "",
              quota: "",
              threshold: ""
            }
          },
          onLoad: function(t) {
            t.sellerId && (this.sellerId = t.sellerId), t.couponId && (this.couponId = t.couponId), t.threshold && (this.threshold = t.threshold), t.quota && (this.quota = t.quota), this.init()
          },
          onShow: function() {
            this.focusStatus = !0, this.keyword = ""
          },
          methods: {
            init: function() {
              this.loadOldKeyword()
            },
            loadOldKeyword: function() {
              var e = this;
              t.getStorage({
                key: "OldKeys",
                success: function(t) {
                  var o = JSON.parse(t.data);
                  e.oldKeywordList = o
                }
              })
            },
            oldDelete: function() {
              var e = this;
              t.showModal({
                content: "确定清除历史搜索记录？",
                success: function(o) {
                  o.confirm ? (e.oldKeywordList = [], t.removeStorage({
                    key: "OldKeys"
                  })) : o.cancel && console.log("用户点击取消")
                }
              })
            },
            doSearch: function(t) {
              this.keyword = t || "", this.keyword && this.saveKeyword(t), this.sellerId ? this.$navigateTo({
                url: "/subPage/pages/storeshop/storeshop?keyword=" + t + "&sellerId=" + this.sellerId
              }) : this.couponId ? this.$navigateTo({
                url: "/subPage/pages/discountsProductList/discountsProductList?couponId=" + this.couponId + "&threshold=" + this.threshold + "&quota=" + this.quota + "&keyword=" + t
              }) : this.$navigateTo({
                url: "/subPage/pages/goodslist/goodslist?keyword=" + t
              }), this.focusStatus = !1
            },
            doCustom: function() {
              this.$util.goBack()
            },
            saveKeyword: function(e) {
              var o = this;
              t.getStorage({
                key: "OldKeys",
                success: function(n) {
                  var s = JSON.parse(n.data),
                    i = s.indexOf(e); - 1 == i || s.splice(i, 1), s.unshift(e), s.length > 10 && s.pop(), t.setStorage({
                    key: "OldKeys",
                    data: JSON.stringify(s)
                  }), o.oldKeywordList = s
                },
                fail: function(n) {
                  var s = [e];
                  t.setStorage({
                    key: "OldKeys",
                    data: JSON.stringify(s)
                  }), o.oldKeywordList = s
                }
              })
            }
          }
        };
        e.default = o
      }).call(this, o("df3c").default)
    },
    "82bf": function(t, e, o) {
      var n = o("0e2c");
      o.n(n).a
    },
    8812: function(t, e, o) {
      o.r(e);
      var n = o("a8eb"),
        s = o("de5b");
      for (var i in s)["default"].indexOf(i) < 0 && function(t) {
        o.d(e, t, (function() {
          return s[t]
        }))
      }(i);
      o("82bf");
      var a = o("828b"),
        r = Object(a.a)(s.default, n.b, n.c, !1, null, "bc7b8e98", null, !1, n.a, void 0);
      e.default = r.exports
    },
    "8cc6": function(t, e, o) {
      (function(t, e) {
        var n = o("47a9");
        o("5366"), n(o("3240"));
        var s = n(o("8812"));
        t.__webpack_require_UNI_MP_PLUGIN__ = o, e(s.default)
      }).call(this, o("3223").default, o("df3c").createPage)
    },
    a8eb: function(t, e, o) {
      o.d(e, "b", (function() {
        return s
      })), o.d(e, "c", (function() {
        return i
      })), o.d(e, "a", (function() {
        return n
      }));
      var n = {
          uSearch: function() {
            return o.e("uview-ui/components/u-search/u-search").then(o.bind(null, "90a6"))
          },
          uniIcons: function() {
            return Promise.all([o.e("common/vendor"), o.e("components/uni-icons/uni-icons")]).then(o.bind(null, "365b"))
          }
        },
        s = function() {
          this.$createElement;
          var t = (this._self._c, this.oldKeywordList.length);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        i = []
    },
    de5b: function(t, e, o) {
      o.r(e);
      var n = o("158a"),
        s = o.n(n);
      for (var i in n)["default"].indexOf(i) < 0 && function(t) {
        o.d(e, t, (function() {
          return n[t]
        }))
      }(i);
      e.default = s.a
    }
  },
  [
    ["8cc6", "common/runtime", "common/vendor"]
  ]
]);
